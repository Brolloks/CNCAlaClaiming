// TODO: Rename to `Dict`
import * as $runtime from "../runtime.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFormURLEncoded from "../Data.FormURLEncoded/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dSemigroup from "../Data.Semigroup/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Data$dUnfoldable from "../Data.Unfoldable/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
const foldMapWithIndex = /* #__PURE__ */ (() => Data$dMap$dInternal.foldableWithIndexMap.foldMapWithIndex(Data$dMonoid.monoidArray))();
const fromMaybe = /* #__PURE__ */ (() => Data$dUnfoldable.unfoldableArray.unfoldr(b => {
  if (b.tag === "Just") { return Data$dMaybe.$Maybe("Just", Data$dTuple.$Tuple(b._1, Data$dMaybe.Nothing)); }
  return Data$dMaybe.Nothing;
}))();
const FieldId = x => x;
const Query = x => x;
const ordFieldId = Data$dOrd.ordString;
const fromFoldable2 = /* #__PURE__ */ Data$dMap$dInternal.fromFoldable(Data$dOrd.ordString)(Data$dFoldable.foldableArray);
const semigroupQuery = {append: l => r => Data$dMap$dInternal.unionWith(Data$dOrd.ordString)(Data$dSemigroup.concatArray)(l)(r)};
const newtypeQuery_ = {Coercible0: () => {}};
const newtypeFieldId_ = {Coercible0: () => {}};
const monoidQuery = /* #__PURE__ */ Data$dMap$dInternal.monoidSemigroupMap()(Data$dOrd.ordString)(Data$dSemigroup.semigroupArray);
const genericFieldId_ = {to: x => x, from: x => x};
const showFieldId = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor({genericShowArgs: v => [Data$dShow.showStringImpl(v)]})({reflectSymbol: () => "FieldId"});
    return x => $0["genericShow'"](x);
  })()
};
const eqFieldId = Data$dEq.eqString;
const eqQuery = /* #__PURE__ */ Data$dMap$dInternal.eqMap(Data$dEq.eqString)({eq: /* #__PURE__ */ Data$dEq.eqArrayImpl(Data$dEq.eqStringImpl)});
const toFormURLEncoded = v => foldMapWithIndex(v1 => v2 => Data$dFunctor.arrayMap((() => {
  const $0 = Data$dTuple.Tuple(v1);
  return x => $0(Data$dMaybe.$Maybe("Just", x));
})())(v2))(v);
const singleton = name => value => Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, name, value, Data$dMap$dInternal.Leaf);
const overMap = f => f;
const update = u => k => Data$dMap$dInternal.update(Data$dOrd.ordString)(u)(k);
const lookup = name => v => Data$dMap$dInternal.lookup(Data$dOrd.ordString)(name)(v);
const keys = v => Data$dMap$dInternal.functorMap.map(v$1 => {})(v);
const insert = k => v => Data$dMap$dInternal.insert(Data$dOrd.ordString)(k)(v);
const fromHomogeneous = () => () => {
  const $0 = Foreign$dObject.toArrayWithKey(Data$dTuple.Tuple);
  return x => fromFoldable2($0(x));
};
const fromFoldable = dictFoldable => Data$dMap$dInternal.fromFoldable(Data$dOrd.ordString)(dictFoldable);
const encode = x => Data$dFormURLEncoded.encode(toFormURLEncoded(x));
const unsafeEncode = x => {
  const $0 = Data$dFormURLEncoded.encode(toFormURLEncoded(x));
  if ($0.tag === "Just") { return $0._1; }
  $runtime.fail();
};
const decode = query => {
  const $0 = Data$dFormURLEncoded.decode(query);
  if ($0.tag === "Just") {
    return Data$dMaybe.$Maybe(
      "Just",
      Data$dMap$dInternal.fromFoldableWith(Data$dOrd.ordString)(Data$dFoldable.foldableArray)(Data$dSemigroup.concatArray)(Data$dFunctor.arrayMap(m => Data$dTuple.$Tuple(
        m._1,
        fromMaybe(m._2)
      ))($0._1))
    );
  }
  if ($0.tag === "Nothing") { return Data$dMaybe.Nothing; }
  $runtime.fail();
};
const alter = f => name => Data$dMap$dInternal.alter(Data$dOrd.ordString)(f)(name);
export {
  FieldId,
  Query,
  alter,
  decode,
  encode,
  eqFieldId,
  eqQuery,
  foldMapWithIndex,
  fromFoldable,
  fromFoldable2,
  fromHomogeneous,
  fromMaybe,
  genericFieldId_,
  insert,
  keys,
  lookup,
  monoidQuery,
  newtypeFieldId_,
  newtypeQuery_,
  ordFieldId,
  overMap,
  semigroupQuery,
  showFieldId,
  singleton,
  toFormURLEncoded,
  unsafeEncode,
  update
};
