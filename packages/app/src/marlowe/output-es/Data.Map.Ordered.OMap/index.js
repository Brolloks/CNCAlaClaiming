import * as $runtime from "../runtime.js";
import * as Data$dArgonaut$dDecode$dDecoders from "../Data.Argonaut.Decode.Decoders/index.js";
import * as Data$dArgonaut$dEncode$dClass from "../Data.Argonaut.Encode.Class/index.js";
import * as Data$dArgonaut$dEncode$dEncoders from "../Data.Argonaut.Encode.Encoders/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dSet$dOrdered$dOSet from "../Data.Set.Ordered.OSet/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
const toUnfoldable = dictUnfoldable => v => Data$dArray.toUnfoldable(dictUnfoldable)(v);
const singleton = k => v => [Data$dTuple.$Tuple(k, v)];
const showOMap = dictShow => dictShow1 => {
  const show = Data$dShow.showArrayImpl(v => "(Tuple " + dictShow.show(v._1) + " " + dictShow1.show(v._2) + ")");
  return {show: v => "(fromFoldable " + show(v) + ")"};
};
const lookup = dictOrd => k => v => {
  const $0 = Data$dArray.findIndex(v1 => dictOrd.Eq0().eq(v1._1)(k))(v);
  if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", v[$0._1]._2); }
  return Data$dMaybe.Nothing;
};
const keys = dictOrd => {
  const fromFoldable2 = Data$dSet$dOrdered$dOSet.fromFoldable(dictOrd)(Data$dFoldable.foldableArray);
  return v => fromFoldable2(Data$dFunctor.arrayMap(Data$dTuple.fst)(v));
};
const keyIndex = dictEq => k => v => Data$dArray.findIndex((() => {
  const $0 = dictEq.eq(k);
  return x => $0(x._1);
})())(v);
const isEmpty = v => v.length === 0;
const insert = dictOrd => k => v => v1 => {
  const $0 = Data$dArray.findIndex(v3 => dictOrd.Eq0().eq(v3._1)(k))(v1);
  if ($0.tag === "Just") {
    const $1 = Data$dArray.updateAt($0._1)(Data$dTuple.$Tuple(k, v))(v1);
    if ($1.tag === "Just") { return $1._1; }
    if ($1.tag === "Nothing") { return Data$dArray.snoc(v1)(Data$dTuple.$Tuple(k, v)); }
    $runtime.fail();
  }
  if ($0.tag === "Nothing") { return Data$dArray.snoc(v1)(Data$dTuple.$Tuple(k, v)); }
  $runtime.fail();
};
const functorOMap = {map: f => v => Data$dFunctor.arrayMap(v$1 => Data$dTuple.$Tuple(v$1._1, f(v$1._2)))(v)};
const foldableOMap = {
  foldl: f => z => v => Data$dFoldable.foldlArray(f)(z)(Data$dFunctor.arrayMap(Data$dTuple.snd)(v)),
  foldr: f => z => v => Data$dFoldable.foldrArray(f)(z)(Data$dFunctor.arrayMap(Data$dTuple.snd)(v)),
  foldMap: dictMonoid => {
    const foldMap1 = Data$dFoldable.foldableArray.foldMap(dictMonoid);
    return f => v => foldMap1(f)(Data$dFunctor.arrayMap(Data$dTuple.snd)(v));
  }
};
const foldableWithIndexOMap = {
  foldlWithIndex: f => z => v => Data$dFoldable.foldlArray(x => v$1 => f(v$1._1)(x)(v$1._2))(z)(v),
  foldrWithIndex: f => z => v => Data$dFoldable.foldrArray(v$1 => f(v$1._1)(v$1._2))(z)(v),
  foldMapWithIndex: dictMonoid => {
    const foldMap1 = Data$dFoldable.foldableArray.foldMap(dictMonoid);
    return f => v => foldMap1(v$1 => f(v$1._1)(v$1._2))(v);
  },
  Foldable0: () => foldableOMap
};
const eqOMap = dictEq => dictEq1 => {
  const eq = Data$dEq.eqArrayImpl(x => y => dictEq.eq(x._1)(y._1) && dictEq1.eq(x._2)(y._2));
  return {eq: v => v1 => eq(v)(v1)};
};
const encodeOMap = dictEncodeJson => {
  const encodeJson1 = dictEncodeJson.encodeJson;
  return dictEncodeJson1 => Data$dArgonaut$dEncode$dClass.encodeJsonArray({encodeJson: Data$dArgonaut$dEncode$dEncoders.encodeTuple(encodeJson1)(dictEncodeJson1.encodeJson)});
};
const $$delete = dictOrd => {
  const $0 = dictOrd.Eq0();
  return k => om => Data$dArray.filter(v => !$0.eq(k)(v._1))(om);
};
const insertAt = dictOrd => {
  const delete1 = $$delete(dictOrd);
  return i => k => v => m => {
    const $0 = Data$dArray.insertAt(i)(Data$dTuple.$Tuple(k, v))(delete1(k)(m));
    if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0._1); }
    return Data$dMaybe.Nothing;
  };
};
const moveTo = dictOrd => {
  const delete1 = $$delete(dictOrd);
  const insertAt1 = insertAt(dictOrd);
  return i => k => m => {
    const $0 = lookup(dictOrd)(k)(m);
    if ($0.tag === "Just") { return insertAt1(i)(k)($0._1)(delete1(k)(m)); }
    if ($0.tag === "Nothing") { return Data$dMaybe.Nothing; }
    $runtime.fail();
  };
};
const moveLeft = dictOrd => {
  const keyIndex1 = keyIndex(dictOrd.Eq0());
  const moveTo1 = moveTo(dictOrd);
  return k => m => {
    const $0 = keyIndex1(k)(m);
    if ($0.tag === "Just") { return moveTo1($0._1 - 1 | 0)(k)(m); }
    if ($0.tag === "Nothing") { return Data$dMaybe.Nothing; }
    $runtime.fail();
  };
};
const moveRight = dictOrd => {
  const keyIndex1 = keyIndex(dictOrd.Eq0());
  const moveTo1 = moveTo(dictOrd);
  return k => m => {
    const $0 = keyIndex1(k)(m);
    if ($0.tag === "Just") { return moveTo1($0._1 + 1 | 0)(k)(m); }
    if ($0.tag === "Nothing") { return Data$dMaybe.Nothing; }
    $runtime.fail();
  };
};
const decodeSession = dictOrd => dictDecodeJson => {
  const decodeJson1 = dictDecodeJson.decodeJson;
  return dictDecodeJson1 => ({decodeJson: Data$dArgonaut$dDecode$dDecoders.decodeArray(Data$dArgonaut$dDecode$dDecoders.decodeTuple(decodeJson1)(dictDecodeJson1.decodeJson))});
};
const appendOMap = dictOrd => {
  const fromFoldable2 = Data$dSet$dOrdered$dOSet.foldableOSet.foldl(m => a => Data$dMap$dInternal.insert(dictOrd)(a)()(m))(Data$dMap$dInternal.Leaf);
  const keys1 = keys(dictOrd);
  return om1 => v => {
    const om2KeySet = fromFoldable2(keys1(v));
    return [
      ...Data$dArray.filter(v$1 => {
        const $0 = Data$dMap$dInternal.lookup(dictOrd)(v$1._1)(om2KeySet);
        if ($0.tag === "Nothing") { return true; }
        if ($0.tag === "Just") { return false; }
        $runtime.fail();
      })(om1),
      ...v
    ];
  };
};
const semigroupOMap = dictOrd => ({append: appendOMap(dictOrd)});
const monoidOMap = dictOrd => {
  const semigroupOMap1 = {append: appendOMap(dictOrd)};
  return {mempty: [], Semigroup0: () => semigroupOMap1};
};
const fromFoldable = dictOrd => {
  const semigroupOMap1 = {append: appendOMap(dictOrd)};
  return dictFoldable => dictFoldable.foldMap({mempty: [], Semigroup0: () => semigroupOMap1})(v => [Data$dTuple.$Tuple(v._1, v._2)]);
};
const fromFoldableWithIndex = dictOrd => dictFoldableWithIndex => dictFoldableWithIndex.foldlWithIndex(k => m => v => insert(dictOrd)(k)(v)(m))([]);
const unionWith = dictOrd => {
  const fromFoldableWithIndex1 = foldableWithIndexOMap.foldlWithIndex(k => m => v => Data$dMap$dInternal.insert(dictOrd)(k)(v)(m))(Data$dMap$dInternal.Leaf);
  const keys1 = keys(dictOrd);
  const fromFoldable2 = Data$dSet$dOrdered$dOSet.foldableOSet.foldl(m => a => Data$dMap$dInternal.insert(dictOrd)(a)()(m))(Data$dMap$dInternal.Leaf);
  const semigroupOMap1 = {append: appendOMap(dictOrd)};
  const monoidOMap1 = {mempty: [], Semigroup0: () => semigroupOMap1};
  const foldMap1 = Data$dFoldable.foldableArray.foldMap(monoidOMap1);
  const mempty1 = monoidOMap1.mempty;
  return f => om1 => om2 => {
    const k1 = keys1(om1);
    const sk1 = fromFoldable2(k1);
    const fomm = Data$dMap$dInternal.unionWith(dictOrd)(f)(fromFoldableWithIndex1(om1))(fromFoldableWithIndex1(om2));
    return foldMap1(k => {
      const $0 = Data$dMap$dInternal.lookup(dictOrd)(k)(fomm);
      if ($0.tag === "Nothing") { return mempty1; }
      if ($0.tag === "Just") { return [Data$dTuple.$Tuple(k, $0._1)]; }
      $runtime.fail();
    })(Data$dArray.nubBy(dictOrd.compare)([
      ...k1,
      ...Data$dArray.filter(x => {
        const $0 = Data$dMap$dInternal.lookup(dictOrd)(x)(sk1);
        if ($0.tag === "Nothing") { return true; }
        if ($0.tag === "Just") { return false; }
        $runtime.fail();
      })(keys1(om2))
    ]));
  };
};
const alter = dictOrd => {
  const delete1 = $$delete(dictOrd);
  return f => k => om => {
    const mOldValue = lookup(dictOrd)(k)(om);
    const mNewValue = f(mOldValue);
    if (mNewValue.tag === "Nothing") {
      if (mOldValue.tag === "Nothing") { return om; }
      if (mOldValue.tag === "Just") { return delete1(k)(om); }
      $runtime.fail();
    }
    if (mNewValue.tag === "Just") { return insert(dictOrd)(k)(mNewValue._1)(om); }
    $runtime.fail();
  };
};
export {
  alter,
  appendOMap,
  decodeSession,
  $$delete as delete,
  encodeOMap,
  eqOMap,
  foldableOMap,
  foldableWithIndexOMap,
  fromFoldable,
  fromFoldableWithIndex,
  functorOMap,
  insert,
  insertAt,
  isEmpty,
  keyIndex,
  keys,
  lookup,
  monoidOMap,
  moveLeft,
  moveRight,
  moveTo,
  semigroupOMap,
  showOMap,
  singleton,
  toUnfoldable,
  unionWith
};
