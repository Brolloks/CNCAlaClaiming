import * as $runtime from "../runtime.js";
import * as Control$dBind from "../Control.Bind/index.js";
import * as Control$dMonad$dRec$dClass from "../Control.Monad.Rec.Class/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dArray$dNonEmpty$dInternal from "../Data.Array.NonEmpty.Internal/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNonEmpty from "../Data.NonEmpty/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dSemigroup$dFoldable from "../Data.Semigroup.Foldable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
const max = x => y => {
  const v = Data$dOrd.ordInt.compare(x)(y);
  if (v === "LT") { return y; }
  if (v === "EQ") { return x; }
  if (v === "GT") { return x; }
  $runtime.fail();
};
const intercalate1 = dictSemigroup => {
  const foldMap12 = Data$dArray$dNonEmpty$dInternal.foldable1NonEmptyArray.foldMap1({append: v => v1 => j => dictSemigroup.append(v(j))(dictSemigroup.append(j)(v1(j)))});
  return a => foldable => foldMap12(x => v => x)(foldable)(a);
};
const transpose = x => Data$dArray.transpose(x);
const toArray = v => v;
const unionBy$p = eq => xs => x => Data$dArray.unionBy(eq)(xs)(x);
const union$p = dictEq => unionBy$p(dictEq.eq);
const unionBy = eq => xs => x => Data$dArray.unionBy(eq)(xs)(x);
const union = dictEq => unionBy(dictEq.eq);
const unzip = x => {
  const $0 = Data$dArray.unzip(x);
  return Data$dTuple.$Tuple($0._1, $0._2);
};
const updateAt = i => x => Data$dArray.updateAt(i)(x);
const zip = xs => ys => Data$dArray.zip(xs)(ys);
const zipWith = f => xs => ys => Data$dArray.zipWith(f)(xs)(ys);
const zipWithA = dictApplicative => Data$dArray.zipWithA(dictApplicative);
const splitAt = i => xs => Data$dArray.splitAt(i)(xs);
const some = dictAlternative => dictLazy => x => Data$dArray.some(dictAlternative)(dictLazy)(x);
const snoc$p = xs => x => Data$dArray.snoc(xs)(x);
const snoc = xs => x => Data$dArray.snoc(xs)(x);
const singleton = x => [x];
const replicate = i => x => Data$dArray.replicate(max(1)(i))(x);
const range = x => y => Data$dArray.range(x)(y);
const modifyAt = i => f => x => Data$dArray.modifyAt(i)(f)(x);
const intersectBy$p = eq => xs => Data$dArray.intersectBy(eq)(xs);
const intersectBy = eq => xs => x => Data$dArray.intersectBy(eq)(xs)(x);
const intersect$p = dictEq => intersectBy$p(dictEq.eq);
const intersect = dictEq => intersectBy(dictEq.eq);
const intercalate = dictSemigroup => intercalate1(dictSemigroup);
const insertAt = i => x => Data$dArray.insertAt(i)(x);
const fromFoldable1 = dictFoldable1 => Data$dArray.fromFoldableImpl(dictFoldable1.Foldable0().foldr);
const fromArray = xs => {
  if (xs.length > 0) { return Data$dMaybe.$Maybe("Just", xs); }
  return Data$dMaybe.Nothing;
};
const fromFoldable = dictFoldable => {
  const $0 = Data$dArray.fromFoldableImpl(dictFoldable.foldr);
  return x => {
    const $1 = $0(x);
    if ($1.length > 0) { return Data$dMaybe.$Maybe("Just", $1); }
    return Data$dMaybe.Nothing;
  };
};
const transpose$p = x => {
  const $0 = Data$dArray.transpose(x);
  if ($0.length > 0) { return Data$dMaybe.$Maybe("Just", $0); }
  return Data$dMaybe.Nothing;
};
const foldr1 = Data$dArray$dNonEmpty$dInternal.foldr1Impl;
const foldl1 = Data$dArray$dNonEmpty$dInternal.foldl1Impl;
const foldMap1 = dictSemigroup => Data$dArray$dNonEmpty$dInternal.foldable1NonEmptyArray.foldMap1(dictSemigroup);
const fold1 = dictSemigroup => Data$dArray$dNonEmpty$dInternal.foldable1NonEmptyArray.foldMap1(dictSemigroup)(Data$dSemigroup$dFoldable.identity);
const difference$p = dictEq => Data$dFoldable.foldrArray(Data$dArray.delete(dictEq));
const cons$p = x => xs => [x, ...xs];
const fromNonEmpty = v => [v._1, ...v._2];
const concatMap = b => a => Control$dBind.arrayBind(a)(b);
const concat = /* #__PURE__ */ (() => {
  const $0 = Data$dFunctor.arrayMap(toArray);
  return x => Data$dArray.concat($0(x));
})();
const appendArray = xs => ys => [...xs, ...ys];
const alterAt = i => f => x => Data$dArray.alterAt(i)(f)(x);
const head = x => {
  const $0 = Data$dArray.index(x)(0);
  if ($0.tag === "Just") { return $0._1; }
  $runtime.fail();
};
const init = x => {
  const $0 = Data$dArray.init(x);
  if ($0.tag === "Just") { return $0._1; }
  $runtime.fail();
};
const last = x => {
  const $0 = Data$dArray.index(x)(x.length - 1 | 0);
  if ($0.tag === "Just") { return $0._1; }
  $runtime.fail();
};
const tail = x => {
  const $0 = Data$dArray.tail(x);
  if ($0.tag === "Just") { return $0._1; }
  $runtime.fail();
};
const uncons = x => {
  const $0 = Data$dArray.uncons(x);
  if ($0.tag === "Just") { return $0._1; }
  $runtime.fail();
};
const toNonEmpty = x => {
  const $0 = Data$dArray.uncons(x);
  const $1 = (() => {
    if ($0.tag === "Just") { return $0._1; }
    $runtime.fail();
  })();
  return Data$dNonEmpty.$NonEmpty($1.head, $1.tail);
};
const unsnoc = x => {
  const $0 = Data$dArray.unsnoc(x);
  if ($0.tag === "Just") { return $0._1; }
  $runtime.fail();
};
const all = p => Data$dArray.all(p);
const any = p => Data$dArray.any(p);
const catMaybes = x => Data$dArray.mapMaybe(x$1 => x$1)(x);
const $$delete = dictEq => x => x$1 => Data$dArray.deleteBy(dictEq.eq)(x)(x$1);
const deleteAt = i => Data$dArray.deleteAt(i);
const deleteBy = f => x => x$1 => Data$dArray.deleteBy(f)(x)(x$1);
const difference = dictEq => Data$dFoldable.foldrArray(Data$dArray.delete(dictEq));
const drop = i => x => {
  if (i < 1) { return x; }
  return Data$dArray.slice(i)(x.length)(x);
};
const dropEnd = i => x => Data$dArray.dropEnd(i)(x);
const dropWhile = f => x => Data$dArray.span(f)(x).rest;
const elem = dictEq => x => x$1 => Data$dArray.elem(dictEq)(x)(x$1);
const elemIndex = dictEq => x => Data$dArray.findIndex(v => dictEq.eq(v)(x));
const elemLastIndex = dictEq => x => Data$dArray.findLastIndex(v => dictEq.eq(v)(x));
const filter = f => Data$dArray.filter(f);
const filterA = dictApplicative => Data$dArray.filterA(dictApplicative);
const find = p => x => {
  const $0 = Data$dArray.findIndex(p)(x);
  if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", x[$0._1]); }
  return Data$dMaybe.Nothing;
};
const findIndex = p => Data$dArray.findIndex(p);
const findLastIndex = x => Data$dArray.findLastIndex(x);
const findMap = p => Data$dArray.findMap(p);
const foldM = dictMonad => f => acc => Data$dArray.foldM(dictMonad)(f)(acc);
const foldRecM = dictMonadRec => {
  const Monad0 = dictMonadRec.Monad0();
  const $0 = Monad0.Applicative0();
  return f => acc => array => dictMonadRec.tailRecM(o => {
    if (o.b >= array.length) { return $0.pure(Control$dMonad$dRec$dClass.$Step("Done", o.a)); }
    return Monad0.Bind1().bind(f(o.a)(array[o.b]))(res$p => $0.pure(Control$dMonad$dRec$dClass.$Step("Loop", {a: res$p, b: o.b + 1 | 0})));
  })({a: acc, b: 0});
};
const index = x => Data$dArray.index(x);
const length = x => x.length;
const mapMaybe = f => x => Data$dArray.mapMaybe(f)(x);
const notElem = dictEq => x => x$1 => Data$dArray.notElem(dictEq)(x)(x$1);
const partition = f => Data$dArray.partition(f);
const slice = start => end => Data$dArray.slice(start)(end);
const span = f => x => Data$dArray.span(f)(x);
const take = i => x => {
  if (i < 1) { return []; }
  return Data$dArray.slice(0)(i)(x);
};
const takeEnd = i => x => Data$dArray.takeEnd(i)(x);
const takeWhile = f => x => Data$dArray.span(f)(x).init;
const toUnfoldable = dictUnfoldable => x => Data$dArray.toUnfoldable(dictUnfoldable)(x);
const cons = x => x$1 => [x, ...x$1];
const group = dictEq => {
  const eq2 = dictEq.eq;
  return x => Data$dArray.groupBy(eq2)(x);
};
const groupAllBy = op => Data$dArray.groupAllBy(op);
const groupAll = dictOrd => Data$dArray.groupAllBy(dictOrd.compare);
const groupBy = op => x => Data$dArray.groupBy(op)(x);
const insert = dictOrd => x => x$1 => Data$dArray.insertBy(dictOrd.compare)(x)(x$1);
const insertBy = f => x => x$1 => Data$dArray.insertBy(f)(x)(x$1);
const intersperse = x => x$1 => Data$dArray.intersperse(x)(x$1);
const mapWithIndex = f => x => Data$dArray.zipWith(f)(Data$dArray.range(0)(x.length - 1 | 0))(x);
const modifyAtIndices = dictFoldable => Data$dArray.modifyAtIndices(dictFoldable);
const nub = dictOrd => x => Data$dArray.nubBy(dictOrd.compare)(x);
const nubBy = f => x => Data$dArray.nubBy(f)(x);
const nubByEq = f => x => Data$dArray.nubByEq(f)(x);
const nubEq = dictEq => x => Data$dArray.nubByEq(dictEq.eq)(x);
const reverse = x => Data$dArray.reverse(x);
const scanl = f => x => Data$dArray.scanl(f)(x);
const scanr = f => x => Data$dArray.scanr(f)(x);
const sort = dictOrd => {
  const compare = dictOrd.compare;
  return x => Data$dArray.sortBy(compare)(x);
};
const sortBy = f => Data$dArray.sortBy(f);
const sortWith = dictOrd => f => Data$dArray.sortWith(dictOrd)(f);
const updateAtIndices = dictFoldable => Data$dArray.updateAtIndices(dictFoldable);
const unsafeIndex = () => x => $0 => x[$0];
const toUnfoldable1 = dictUnfoldable1 => xs => {
  const len = xs.length;
  return dictUnfoldable1.unfoldr1(i => Data$dTuple.$Tuple(xs[i], i < (len - 1 | 0) ? Data$dMaybe.$Maybe("Just", i + 1 | 0) : Data$dMaybe.Nothing))(0);
};
export {
  all,
  alterAt,
  any,
  appendArray,
  catMaybes,
  concat,
  concatMap,
  cons,
  cons$p,
  $$delete as delete,
  deleteAt,
  deleteBy,
  difference,
  difference$p,
  drop,
  dropEnd,
  dropWhile,
  elem,
  elemIndex,
  elemLastIndex,
  filter,
  filterA,
  find,
  findIndex,
  findLastIndex,
  findMap,
  fold1,
  foldM,
  foldMap1,
  foldRecM,
  foldl1,
  foldr1,
  fromArray,
  fromFoldable,
  fromFoldable1,
  fromNonEmpty,
  group,
  groupAll,
  groupAllBy,
  groupBy,
  head,
  index,
  init,
  insert,
  insertAt,
  insertBy,
  intercalate,
  intercalate1,
  intersect,
  intersect$p,
  intersectBy,
  intersectBy$p,
  intersperse,
  last,
  length,
  mapMaybe,
  mapWithIndex,
  max,
  modifyAt,
  modifyAtIndices,
  notElem,
  nub,
  nubBy,
  nubByEq,
  nubEq,
  partition,
  range,
  replicate,
  reverse,
  scanl,
  scanr,
  singleton,
  slice,
  snoc,
  snoc$p,
  some,
  sort,
  sortBy,
  sortWith,
  span,
  splitAt,
  tail,
  take,
  takeEnd,
  takeWhile,
  toArray,
  toNonEmpty,
  toUnfoldable,
  toUnfoldable1,
  transpose,
  transpose$p,
  uncons,
  union,
  union$p,
  unionBy,
  unionBy$p,
  unsafeIndex,
  unsnoc,
  unzip,
  updateAt,
  updateAtIndices,
  zip,
  zipWith,
  zipWithA
};
