import * as $runtime from "../runtime.js";
import * as Data$dList from "../Data.List/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dSemigroup$dFoldable from "../Data.Semigroup.Foldable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const fromFoldable = /* #__PURE__ */ Foreign$dObject.fromFoldable(Data$dList$dTypes.foldableList);
const traversableHomogeneous = Foreign$dObject.traversableObject;
const showHomogeneous = dictShow => ({show: v => "Homogeneous (" + Foreign$dObject.showObject(dictShow).show(v) + ")"});
const semigroupHomogeneous = dictSemigroup => ({append: Foreign$dObject.unionWith(dictSemigroup.append)});
const functorHomogeneous = {map: f => m => Foreign$dObject._fmapObject(m, f)};
const foldableWithIndexStringHo = Foreign$dObject.foldableWithIndexObject;
const foldableHomogeneous = Foreign$dObject.foldableObject;
const foldable1Homogeneous = dictIsSymbol => () => dictKeys => (
  {
    foldl1: f => v => Data$dList$dTypes.foldableList.foldr(f)((() => {
      const $0 = Foreign$dObject._lookup(Data$dMaybe.Nothing, Data$dMaybe.Just, dictIsSymbol.reflectSymbol(Type$dProxy.Proxy), v);
      if ($0.tag === "Just") { return $0._1; }
      $runtime.fail();
    })())(Data$dList.catMaybes(Data$dList$dTypes.listMap(a => Foreign$dObject._lookup(Data$dMaybe.Nothing, Data$dMaybe.Just, a, v))(dictKeys.keysImpl(Type$dProxy.Proxy)))),
    foldr1: f => Data$dSemigroup$dFoldable.foldr1Default(foldable1Homogeneous(dictIsSymbol)()(dictKeys))(f),
    foldMap1: dictSemigroup => f => {
      const $0 = foldable1Homogeneous(dictIsSymbol)()(dictKeys).foldl1(dictSemigroup.append);
      return x => $0(Foreign$dObject._fmapObject(x, f));
    },
    Foldable0: () => Foreign$dObject.foldableObject
  }
);
const eqHomogeneous = dictEq => ({eq: x => y => Foreign$dObject.eqObject(dictEq).eq(x)(y)});
const ordHomogeneous = dictOrd => {
  const $0 = dictOrd.Eq0();
  const eqHomogeneous1 = {eq: x => y => Foreign$dObject.eqObject($0).eq(x)(y)};
  return {compare: x => y => Foreign$dObject.ordObject(dictOrd).compare(x)(y), Eq0: () => eqHomogeneous1};
};
const applyHomogeneous = {
  apply: v => v1 => Foreign$dObject.fold(b => a => f => Record$dUnsafe.unsafeSet(a)(f(Record$dUnsafe.unsafeGet(a)(v1)))(b))(Foreign$dObject.empty)(v),
  Functor0: () => functorHomogeneous
};
const applicativeHomogeneous = () => dictKeys => (
  {pure: a => fromFoldable(Data$dList$dTypes.listMap(a$1 => Data$dTuple.$Tuple(a$1, a))(dictKeys.keysImpl(Type$dProxy.Proxy))), Apply0: () => applyHomogeneous}
);
const monoidHomogeneous = () => dictKeys => dictMonoid => (
  {mempty: applicativeHomogeneous()(dictKeys).pure(dictMonoid.mempty), Semigroup0: () => ({append: Foreign$dObject.unionWith(dictMonoid.Semigroup0().append)})}
);
const homogeneous$p = () => x => x;
const homogeneous = () => r => r;
const fromHomogeneous = () => v => v;
const $$get = () => h => f => f(h);
const modify = () => () => () => h => f => f(h);
export {
  applicativeHomogeneous,
  applyHomogeneous,
  eqHomogeneous,
  foldable1Homogeneous,
  foldableHomogeneous,
  foldableWithIndexStringHo,
  fromFoldable,
  fromHomogeneous,
  functorHomogeneous,
  $$get as get,
  homogeneous,
  homogeneous$p,
  modify,
  monoidHomogeneous,
  ordHomogeneous,
  semigroupHomogeneous,
  showHomogeneous,
  traversableHomogeneous
};
