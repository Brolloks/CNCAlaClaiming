import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dArray$dNonEmpty$dInternal from "../Data.Array.NonEmpty.Internal/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFoldableWithIndex from "../Data.FoldableWithIndex/index.js";
import * as Data$dFunction from "../Data.Function/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dFunctorWithIndex from "../Data.FunctorWithIndex/index.js";
import * as Data$dInt$dAtLeast from "../Data.Int.AtLeast/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTraversableWithIndex from "../Data.TraversableWithIndex/index.js";
import * as Data$dUnfoldable1 from "../Data.Unfoldable1/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
import {offsetWithImpl, rawIndex} from "./foreign.js";
const traversableWithIndexIntAr = Data$dTraversableWithIndex.traversableWithIndexArray;
const traversableArrayAL = Data$dTraversable.traversableArray;
const showArrayAL = dictShow => dictReflectable => (
  {show: v => "ArrayAL " + Data$dShow.showIntImpl(dictReflectable.reflectType(Type$dProxy.Proxy)) + " " + Data$dShow.showArrayImpl(dictShow.show)(v)}
);
const ordArrayAL = dictOrd => Data$dOrd.ordArray(dictOrd);
const functorWithIndexIntArrayA = Data$dFunctorWithIndex.functorWithIndexArray;
const functorArrayAL = Data$dFunctor.functorArray;
const foldableWithIndexIntArray = Data$dFoldableWithIndex.foldableWithIndexArray;
const foldableArrayAL = Data$dFoldable.foldableArray;
const eqArrayAL = dictEq => ({eq: Data$dEq.eqArrayImpl(dictEq.eq)});
const applyArrayAL = {apply: v => v1 => Data$dArray.zipWith(Data$dFunction.apply)(v)(v1), Functor0: () => Data$dFunctor.functorArray};
const zipWith = fn => v => v1 => Data$dArray.zipWith(fn)(v)(v1);
const upper = dictReflectable => () => v => {
  const $0 = dictReflectable.reflectType(Type$dProxy.Proxy);
  const as = $0 < 1 ? [] : Data$dArray.slice(0)($0)(v);
  if (as.length === dictReflectable.reflectType(Type$dProxy.Proxy)) { return as; }
  $runtime.fail();
};
const trio$p = x1 => x2 => x3 => xs => [x1, x2, x3, ...xs];
const trio = x1 => x2 => x3 => [x1, x2, x3];
const toNonEmptyArray = () => Unsafe$dCoerce.unsafeCoerce;
const foldable1ArrayAL = () => (
  {
    foldMap1: dictSemigroup => {
      const $0 = foldable1ArrayAL();
      const append$1 = dictSemigroup.append;
      return f => {
        const $1 = Data$dFunctor.arrayMap(f);
        const $2 = $0.foldl1(append$1);
        return x => $2($1(x));
      };
    },
    foldr1: f => xs => Data$dArray$dNonEmpty$dInternal.foldr1Impl(f)(xs),
    foldl1: f => xs => Data$dArray$dNonEmpty$dInternal.foldl1Impl(f)(xs),
    Foldable0: () => Data$dFoldable.foldableArray
  }
);
const toArray = Unsafe$dCoerce.unsafeCoerce;
const takeEnd = () => () => () => dictReflectable => v => {
  const $0 = Data$dArray.takeEnd(dictReflectable.reflectType(Type$dProxy.Proxy))(v);
  if ($0.length === dictReflectable.reflectType(Type$dProxy.Proxy)) { return $0; }
  $runtime.fail();
};
const take = () => () => () => dictReflectable => v => {
  const nInt = dictReflectable.reflectType(Type$dProxy.Proxy);
  const $0 = nInt < 1 ? [] : Data$dArray.slice(0)(nInt)(v);
  if ($0.length === dictReflectable.reflectType(Type$dProxy.Proxy)) { return $0; }
  $runtime.fail();
};
const sortWith = dictOrd => f => v => Data$dArray.sortWith(dictOrd)(f)(v);
const sortBy = comp => v => Data$dArray.sortBy(comp)(v);
const sort = dictOrd => {
  const compare = dictOrd.compare;
  return xs => Data$dArray.sortBy(compare)(xs);
};
const solo$p = x => xs => [x, ...xs];
const solo = x => [x];
const snoc = () => v => x => Data$dArray.snoc(v)(x);
const reverse = v => Data$dArray.reverse(v);
const replicate = () => dictReflectable => v => element => Data$dArray.replicate(dictReflectable.reflectType(Type$dProxy.Proxy))(element);
const applicativeArrayAL = () => dictReflectable => ({pure: replicate()(dictReflectable)(Type$dProxy.Proxy), Apply0: () => applyArrayAL});
const range = dictReflectable => i => Data$dFunctor.arrayMap(j => Data$dInt$dAtLeast.fromInt$p(dictReflectable)()(j))(Data$dArray.range(dictReflectable.reflectType(Type$dProxy.Proxy))(i));
const quintet$p = x1 => x2 => x3 => x4 => x5 => xs => [x1, x2, x3, x4, x5, ...xs];
const quintet = x1 => x2 => x3 => x4 => x5 => [x1, x2, x3, x4, x5];
const quartet$p = x1 => x2 => x3 => x4 => xs => [x1, x2, x3, x4, ...xs];
const quartet = x1 => x2 => x3 => x4 => [x1, x2, x3, x4];
const prependArray = xs => v => [...xs, ...v];
const partialIndex = () => v => i => rawIndex(i)(v);
const offsetWith = dictReflectable => () => () => () => () => i => f => v => offsetWithImpl(dictReflectable.reflectType(i))(f)(v);
const nubEq = () => dictEq => v => Data$dArray.nubByEq(dictEq.eq)(v);
const nubByEq = () => f => v => Data$dArray.nubByEq(f)(v);
const nubBy = () => f => v => Data$dArray.nubBy(f)(v);
const nub = () => dictOrd => v => Data$dArray.nubBy(dictOrd.compare)(v);
const lower = dictReflectable => () => v => {
  const $0 = dictReflectable.reflectType(Type$dProxy.Proxy);
  if ($0 < 1) { return v; }
  return Data$dArray.slice($0)(v.length)(v);
};
const length = dictReflectable => v => Data$dInt$dAtLeast.fromInt$p(dictReflectable)()(v.length);
const intersperse = () => () => x => v => Data$dArray.intersperse(x)(v);
const indexUpper = dictReflectable => () => () => () => () => () => i => v => rawIndex(dictReflectable.reflectType(i))(v);
const index = v => idx => Data$dArray.index(v)(idx);
const head = () => v => rawIndex(0)(v);
const fromNonEmptyArray = Unsafe$dCoerce.unsafeCoerce;
const unfoldable1ArrayAL1 = {unfoldr1: f => Data$dUnfoldable1.unfoldable1Array.unfoldr1(f)};
const fromLength$p = () => first => len => {
  if (len === 0) { return []; }
  return Data$dArray.range(first)((first + len | 0) - 1 | 0);
};
const fromLength = () => first => len => Data$dInt$dAtLeast.fromLength()(first)(len);
const fromArray$p = () => Unsafe$dCoerce.unsafeCoerce;
const fromArray = () => dictReflectable => len => xs => {
  if (xs.length >= dictReflectable.reflectType(len)) { return Data$dMaybe.$Maybe("Just", xs); }
  return Data$dMaybe.Nothing;
};
const empty = [];
const duet$p = x1 => x2 => xs => [x1, x2, ...xs];
const duet = x1 => x2 => [x1, x2];
const init = () => () => v => {
  const $0 = Data$dArray.init(v);
  if ($0.tag === "Just") { return $0._1; }
  $runtime.fail();
};
const last = () => v => {
  const $0 = Data$dArray.index(v)(v.length - 1 | 0);
  if ($0.tag === "Just") { return $0._1; }
  $runtime.fail();
};
const tail = () => () => v => {
  const $0 = Data$dArray.tail(v);
  if ($0.tag === "Just") { return $0._1; }
  $runtime.fail();
};
const uncons = () => () => v => {
  const $0 = Data$dArray.uncons(v);
  const raw = (() => {
    if ($0.tag === "Just") { return $0._1; }
    $runtime.fail();
  })();
  return {head: raw.head, tail: raw.tail};
};
const unsnoc = () => () => v => {
  const $0 = Data$dArray.unsnoc(v);
  const raw = (() => {
    if ($0.tag === "Just") { return $0._1; }
    $runtime.fail();
  })();
  return {init: raw.init, last: raw.last};
};
const cons = () => x => v => [x, ...v];
const concat = () => () => () => v => Data$dArray.concat(Data$dFunctor.arrayMap(Unsafe$dCoerce.unsafeCoerce)(v));
const checkValid = dictReflectable => v => v.length >= dictReflectable.reflectType(Type$dProxy.Proxy);
const catMaybes = v => Data$dArray.mapMaybe(x => x)(v);
const appendArray = v => ys => [...v, ...ys];
const append = () => v => v1 => [...v, ...v1];
export {
  append,
  appendArray,
  applicativeArrayAL,
  applyArrayAL,
  catMaybes,
  checkValid,
  concat,
  cons,
  duet,
  duet$p,
  empty,
  eqArrayAL,
  foldable1ArrayAL,
  foldableArrayAL,
  foldableWithIndexIntArray,
  fromArray,
  fromArray$p,
  fromLength,
  fromLength$p,
  fromNonEmptyArray,
  functorArrayAL,
  functorWithIndexIntArrayA,
  head,
  index,
  indexUpper,
  init,
  intersperse,
  last,
  length,
  lower,
  nub,
  nubBy,
  nubByEq,
  nubEq,
  offsetWith,
  ordArrayAL,
  partialIndex,
  prependArray,
  quartet,
  quartet$p,
  quintet,
  quintet$p,
  range,
  replicate,
  reverse,
  showArrayAL,
  snoc,
  solo,
  solo$p,
  sort,
  sortBy,
  sortWith,
  tail,
  take,
  takeEnd,
  toArray,
  toNonEmptyArray,
  traversableArrayAL,
  traversableWithIndexIntAr,
  trio,
  trio$p,
  uncons,
  unfoldable1ArrayAL1,
  unsnoc,
  upper,
  zipWith
};
export * from "./foreign.js";
