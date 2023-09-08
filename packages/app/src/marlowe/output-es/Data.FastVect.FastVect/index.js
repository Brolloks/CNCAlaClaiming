import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dArray$dNonEmpty$dInternal from "../Data.Array.NonEmpty.Internal/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dEuclideanRing from "../Data.EuclideanRing/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFoldableWithIndex from "../Data.FoldableWithIndex/index.js";
import * as Data$dFunction from "../Data.Function/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dFunctorWithIndex from "../Data.FunctorWithIndex/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTraversableWithIndex from "../Data.TraversableWithIndex/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import {indexImpl, modifyImpl} from "./foreign.js";
const traversableWithIndexIntVe = Data$dTraversableWithIndex.traversableWithIndexArray;
const traversableVect = Data$dTraversable.traversableArray;
const showVect = dictShow => dictReflectable => (
  {show: v => "Vect " + Data$dShow.showIntImpl(dictReflectable.reflectType(Type$dProxy.Proxy)) + " " + Data$dShow.showArrayImpl(dictShow.show)(v)}
);
const ordVect = dictOrd => Data$dOrd.ordArray(dictOrd);
const isVectVect = {TraversableWithIndex0: () => Data$dTraversableWithIndex.traversableWithIndexArray};
const functorWithIndexIntVect = Data$dFunctorWithIndex.functorWithIndexArray;
const functorVect = Data$dFunctor.functorArray;
const foldableWithIndexIntVect = Data$dFoldableWithIndex.foldableWithIndexArray;
const foldableVect = Data$dFoldable.foldableArray;
const eqVect = dictEq => ({eq: Data$dEq.eqArrayImpl(dictEq.eq)});
const applyVect = {apply: v => v1 => Data$dArray.zipWith(Data$dFunction.apply)(v)(v1), Functor0: () => Data$dFunctor.functorArray};
const toNonEmptyArray = () => v => v;
const foldable1Vect = () => (
  {
    foldMap1: dictSemigroup => Data$dArray$dNonEmpty$dInternal.foldable1NonEmptyArray.foldMap1(dictSemigroup),
    foldr1: f => xs => Data$dArray$dNonEmpty$dInternal.foldr1Impl(f)(xs),
    foldl1: f => xs => Data$dArray$dNonEmpty$dInternal.foldl1Impl(f)(xs),
    Foldable0: () => Data$dFoldable.foldableArray
  }
);
const toArray = () => v => v;
const take = () => dictReflectable => () => () => proxy => v => {
  const $0 = dictReflectable.reflectType(proxy);
  if ($0 < 1) { return []; }
  return Data$dArray.slice(0)($0)(v);
};
const splitAt = () => dictReflectable => () => () => proxy => v => {
  const v1 = Data$dArray.splitAt(dictReflectable.reflectType(proxy))(v);
  return {before: v1.before, after: v1.after};
};
const snoc = () => dictReflectable => () => v => elem => Data$dArray.snoc(v)(elem);
const singleton = elem => [elem];
const replicate = () => dictReflectable => proxy => elem => Data$dArray.replicate(dictReflectable.reflectType(proxy))(elem);
const applicativeVect = () => dictReflectable => ({pure: replicate()(dictReflectable)(Type$dProxy.Proxy), Apply0: () => applyVect});
const reifyVect = arr => f => f(arr);
const modify = dictReflectable => () => () => () => proxy => modifyImpl(dictReflectable.reflectType(proxy));
const $$set = dictReflectable => () => () => () => proxy => {
  const $0 = modifyImpl(dictReflectable.reflectType(proxy));
  return x => $0(v => x);
};
const mapWithTerm = dictReflectable => () => f => {
  const f1 = f()();
  return vect => Data$dFunctorWithIndex.mapWithIndexArray(i => elem => f1({reflectType: v1 => i})(Type$dProxy.Proxy)(elem))(vect);
};
const indexModulo = () => dictReflectable => i => indexImpl(Data$dEuclideanRing.intMod(i)(dictReflectable.reflectType(Type$dProxy.Proxy)));
const index = dictReflectable => () => () => () => x => indexImpl(dictReflectable.reflectType(x));
const head = () => indexImpl(0);
const generate = dictReflectable => () => v => f => {
  const f1 = f()();
  return Data$dFunctor.arrayMap(i => f1({reflectType: v1 => i})(Type$dProxy.Proxy))(Data$dArray.range(0)(dictReflectable.reflectType(Type$dProxy.Proxy) - 1 | 0));
};
const fromArray = dictReflectable => () => v => v1 => {
  if (v1.length === dictReflectable.reflectType(v)) { return Data$dMaybe.$Maybe("Just", v1); }
  return Data$dMaybe.Nothing;
};
const empty = [];
const drop = () => dictReflectable => () => () => proxy => v => {
  const $0 = dictReflectable.reflectType(proxy);
  if ($0 < 1) { return v; }
  return Data$dArray.slice($0)(v.length)(v);
};
const cons = () => () => elem => v => [elem, ...v];
const append = () => () => dictReflectable => () => v => v1 => [...v, ...v1];
const adjust = dictReflectable => () => proxy => elem => array => {
  const v = array.length - dictReflectable.reflectType(proxy) | 0;
  if (v === 0) { return array; }
  if (v < 0) { return [...Data$dArray.replicate(v >= 0 ? v : -v)(elem), ...array]; }
  if (v < 1) { return array; }
  return Data$dArray.slice(v)(array.length)(array);
};
const adjustM = dictMonoid => {
  const mempty = dictMonoid.mempty;
  return dictReflectable => () => proxy => adjust(dictReflectable)()(proxy)(mempty);
};
export {
  adjust,
  adjustM,
  append,
  applicativeVect,
  applyVect,
  cons,
  drop,
  empty,
  eqVect,
  foldable1Vect,
  foldableVect,
  foldableWithIndexIntVect,
  fromArray,
  functorVect,
  functorWithIndexIntVect,
  generate,
  head,
  index,
  indexModulo,
  isVectVect,
  mapWithTerm,
  modify,
  ordVect,
  reifyVect,
  replicate,
  $$set as set,
  showVect,
  singleton,
  snoc,
  splitAt,
  take,
  toArray,
  toNonEmptyArray,
  traversableVect,
  traversableWithIndexIntVe
};
export * from "./foreign.js";
