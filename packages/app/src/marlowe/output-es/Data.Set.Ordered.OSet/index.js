import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
const fromFoldable = dictOrd => dictFoldable => {
  const $0 = Data$dArray.fromFoldableImpl(dictFoldable.foldr);
  return x => Data$dArray.nubBy(dictOrd.compare)($0(x));
};
const foldableOSet = {
  foldr: f => acc => v => Data$dFoldable.foldrArray(f)(acc)(v),
  foldl: f => acc => v => Data$dFoldable.foldlArray(f)(acc)(v),
  foldMap: dictMonoid => Data$dFoldable.foldableArray.foldMap(dictMonoid)
};
const filter = f => v => Data$dArray.filter(f)(v);
const appendOSet = dictOrd => v => v1 => Data$dArray.nubBy(dictOrd.compare)([...v, ...v1]);
const semigroupOSet = dictOrd => ({append: appendOSet(dictOrd)});
const insert = dictOrd => a => os => Data$dArray.nubBy(dictOrd.compare)([...os, a]);
const monoidOSet = dictOrd => ({mempty: [], Semigroup0: () => ({append: appendOSet(dictOrd)})});
export {appendOSet, filter, foldableOSet, fromFoldable, insert, monoidOSet, semigroupOSet};
