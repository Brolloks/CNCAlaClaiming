import * as $runtime from "../runtime.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFoldableWithIndex from "../Data.FoldableWithIndex/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dSemigroup from "../Data.Semigroup/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
const ErrorsIsSymbol = {reflectSymbol: () => "Errors"};
const identity = x => x;
const ErrorId = x => x;
const Errors = x => x;
const ordErrorId = Data$dOrd.ordString;
const semigroupErrors = {append: l => r => Data$dMap$dInternal.unionWith(Data$dOrd.ordString)(Data$dSemigroup.concatArray)(l)(r)};
const newtypeErrors_ = {Coercible0: () => {}};
const newtypeErrorId_ = {Coercible0: () => {}};
const monoidErrors = /* #__PURE__ */ Data$dMap$dInternal.monoidSemigroupMap()(Data$dOrd.ordString)(Data$dSemigroup.semigroupArray);
const genericErrors_ = {to: x => x, from: x => x};
const genericErrorId_ = {to: x => x, from: x => x};
const showErrorId = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor({genericShowArgs: v => [Data$dShow.showStringImpl(v)]})({reflectSymbol: () => "ErrorId"});
    return x => $0["genericShow'"](x);
  })()
};
const showErrors = dictShow => (
  {
    show: (() => {
      const $0 = Data$dShow$dGeneric.genericShowConstructor((() => {
        const $0 = Data$dMap$dInternal.showMap(showErrorId)({show: Data$dShow.showArrayImpl(dictShow.show)});
        return {genericShowArgs: v => [$0.show(v)]};
      })())(ErrorsIsSymbol);
      return x => $0["genericShow'"](x);
    })()
  }
);
const functorErrors = {map: f => m => Data$dMap$dInternal.functorMap.map(Data$dFunctor.arrayMap(f))(m)};
const foldableErrors = {
  foldl: f => z => m => Data$dMap$dInternal.foldableMap.foldl(Data$dFoldable.foldlArray(f))(z)(m),
  foldr: f => z => m => Data$dMap$dInternal.foldableMap.foldr((() => {
    const $0 = Data$dFoldable.foldrArray(f);
    return b => a => $0(a)(b);
  })())(z)(m),
  foldMap: dictMonoid => {
    const foldMap2 = Data$dMap$dInternal.foldableMap.foldMap(dictMonoid);
    const foldMap3 = Data$dFoldable.foldableArray.foldMap(dictMonoid);
    return f => m => foldMap2(foldMap3(f))(m);
  }
};
const foldableWithIndexErrorIdE = {
  foldMapWithIndex: dictMonoid => {
    const foldMap2 = Data$dFoldable.foldableArray.foldMap(dictMonoid);
    const foldMapWithIndex1 = Data$dMap$dInternal.foldableWithIndexMap.foldMapWithIndex(dictMonoid);
    return step => v => foldMapWithIndex1(key => errs => foldMap2(step(key))(errs))(v);
  },
  foldrWithIndex: step => zero => errors => Data$dFoldableWithIndex.foldrWithIndexDefault(foldableWithIndexErrorIdE)(step)(zero)(errors),
  foldlWithIndex: step => zero => errors => Data$dFoldableWithIndex.foldlWithIndexDefault(foldableWithIndexErrorIdE)(step)(zero)(errors),
  Foldable0: () => foldableErrors
};
const traversableErrors = {
  traverse: dictApplicative => {
    const traverse2 = Data$dMap$dInternal.traversableMap.traverse(dictApplicative);
    const traverse3 = Data$dTraversable.traversableArray.traverse(dictApplicative);
    return f => m => dictApplicative.Apply0().Functor0().map(v1 => v1)(traverse2(traverse3(f))(m));
  },
  sequence: dictApplicative => v => traversableErrors.traverse(dictApplicative)(identity)(v),
  Functor0: () => functorErrors,
  Foldable1: () => foldableErrors
};
const eqErrorId = Data$dEq.eqString;
const eqErrors = dictEq => Data$dMap$dInternal.eqMap(Data$dEq.eqString)({eq: Data$dEq.eqArrayImpl(dictEq.eq)});
const singleton = name => value => Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, name, value, Data$dMap$dInternal.Leaf);
const overMap = f => f;
const update = u => k => Data$dMap$dInternal.update(Data$dOrd.ordString)(u)(k);
const lookup = name => v => {
  const $0 = Data$dMap$dInternal.lookup(Data$dOrd.ordString)(name)(v);
  if ($0.tag === "Nothing") { return []; }
  if ($0.tag === "Just") { return $0._1; }
  $runtime.fail();
};
const keys = v => Data$dMap$dInternal.functorMap.map(v$1 => {})(v);
const insert = k => v => Data$dMap$dInternal.insert(Data$dOrd.ordString)(k)(v);
const alter = f => name => Data$dMap$dInternal.alter(Data$dOrd.ordString)(f)(name);
export {
  ErrorId,
  Errors,
  ErrorsIsSymbol,
  alter,
  eqErrorId,
  eqErrors,
  foldableErrors,
  foldableWithIndexErrorIdE,
  functorErrors,
  genericErrorId_,
  genericErrors_,
  identity,
  insert,
  keys,
  lookup,
  monoidErrors,
  newtypeErrorId_,
  newtypeErrors_,
  ordErrorId,
  overMap,
  semigroupErrors,
  showErrorId,
  showErrors,
  singleton,
  traversableErrors,
  update
};
