import * as Data$dVariant from "../Data.Variant/index.js";
import * as Heterogeneous$dFolding from "../Heterogeneous.Folding/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const $FlattenRecStep = _1 => ({tag: "FlattenRecStep", _1});
const $UnflattenRecStep = _1 => ({tag: "UnflattenRecStep", _1});
const identity = x$1 => x$1;
const IsSymbol = {reflectSymbol: () => ""};
const a1$da2$dIsSymbol = {reflectSymbol: () => "a1.a2."};
const a3IsSymbol = {reflectSymbol: () => "a3"};
const a1$da2$da3IsSymbol = {reflectSymbol: () => "a1.a2.a3"};
const b3IsSymbol = {reflectSymbol: () => "b3"};
const d3IsSymbol = {reflectSymbol: () => "d3"};
const a1$da2$dd3IsSymbol = {reflectSymbol: () => "a1.a2.d3"};
const a2IsSymbol = {reflectSymbol: () => "a2"};
const a1$db2$da3IsSymbol = {reflectSymbol: () => "a1.b2.a3"};
const c3IsSymbol = {reflectSymbol: () => "c3"};
const a1$db2$dc3IsSymbol = {reflectSymbol: () => "a1.b2.c3"};
const b2IsSymbol = {reflectSymbol: () => "b2"};
const a1IsSymbol = {reflectSymbol: () => "a1"};
const UnflattenRecStep = value0 => $UnflattenRecStep(value0);
const FlattenRecStep = value0 => $FlattenRecStep(value0);
const foldingWithIndexUnflatten = dictIsSymbol => () => () => dictIsSymbol1 => () => () => (
  {
    foldingWithIndex: v => l => acc => v1 => Record$dUnsafe.unsafeSet(dictIsSymbol1.reflectSymbol(Type$dProxy.Proxy))(x$1 => v._1({type: dictIsSymbol.reflectSymbol(l), value: x$1}))(acc)
  }
);
const foldingWithIndexUnflatten2 = () => () => () => dictHFoldlWithIndex => dictIsSymbol => () => (
  {
    foldingWithIndex: v => l => acc => v1 => dictHFoldlWithIndex.hfoldlWithIndex($UnflattenRecStep(x$1 => v._1({type: dictIsSymbol.reflectSymbol(l), value: x$1})))(acc)(Type$dProxy.Proxy)
  }
);
const foldingWithIndexFlattenRe = () => dictIsSymbol => () => dictIsSymbol1 => () => () => (
  {foldingWithIndex: v => l => acc => v1 => Record$dUnsafe.unsafeSet(dictIsSymbol1.reflectSymbol(l))(value => ({type: dictIsSymbol.reflectSymbol(Type$dProxy.Proxy), value}))(acc)}
);
const foldingWithIndexFlattenRe2 = () => () => () => dictHFoldlWithIndex => () => () => () => dictIsSymbol => () => () => (
  {
    foldingWithIndex: v => l => acc => v1 => Record$dUnsafe.unsafeSet(dictIsSymbol.reflectSymbol(l))(Data$dVariant.match()()()(dictHFoldlWithIndex.hfoldlWithIndex($FlattenRecStep(v._1))({})(Type$dProxy.Proxy)))(acc)
  }
);
const evalPrefixRecStepVariant = () => () => () => () => () => () => ({});
const evalPrefixRecStepCons = () => () => dictIsSymbol => ({});
const unflatten = () => dictHFoldlWithIndex => () => () => () => v => Data$dVariant.match()()()(dictHFoldlWithIndex.hfoldlWithIndex($UnflattenRecStep(identity))({})(Type$dProxy.Proxy));
const unflattenNested = /* #__PURE__ */ unflatten()(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ foldingWithIndexUnflatten2()()()(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ foldingWithIndexUnflatten2()()()(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ foldingWithIndexUnflatten(IsSymbol)()()(a1$da2$dIsSymbol)()())(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ foldingWithIndexUnflatten(a3IsSymbol)()()(a1$da2$da3IsSymbol)()())(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ foldingWithIndexUnflatten2()()()(Heterogeneous$dFolding.hfoldlWithIndexRowListNil)(b3IsSymbol)())(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ foldingWithIndexUnflatten(d3IsSymbol)()()(a1$da2$dd3IsSymbol)()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil)))))(a2IsSymbol)())(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ foldingWithIndexUnflatten2()()()(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ foldingWithIndexUnflatten(a3IsSymbol)()()(a1$db2$da3IsSymbol)()())(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ foldingWithIndexUnflatten(c3IsSymbol)()()(a1$db2$dc3IsSymbol)()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil)))(b2IsSymbol)())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil)))(a1IsSymbol)())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil))()()()(Type$dProxy.Proxy);
const flattenExperiment = () => () => v => Type$dProxy.Proxy;
const x = Type$dProxy.Proxy;
const flatten = () => () => dictHFoldlWithIndex => () => () => () => Data$dVariant.match()()()(dictHFoldlWithIndex.hfoldlWithIndex($FlattenRecStep(Type$dProxy.Proxy))({})(Type$dProxy.Proxy));
const z = /* #__PURE__ */ (() => Data$dVariant.onMatch()()()(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(foldingWithIndexFlattenRe2()()()(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(foldingWithIndexFlattenRe2()()()(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(foldingWithIndexFlattenRe()(a1$da2$dIsSymbol)()(IsSymbol)()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(foldingWithIndexFlattenRe()(a1$da2$da3IsSymbol)()(a3IsSymbol)()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(foldingWithIndexFlattenRe2()()()(Heterogeneous$dFolding.hfoldlWithIndexRowListNil)()()()(b3IsSymbol)()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(foldingWithIndexFlattenRe()(a1$da2$dd3IsSymbol)()(d3IsSymbol)()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil)))))()()()(a2IsSymbol)()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(foldingWithIndexFlattenRe2()()()(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(foldingWithIndexFlattenRe()(a1$db2$da3IsSymbol)()(a3IsSymbol)()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(foldingWithIndexFlattenRe()(a1$db2$dc3IsSymbol)()(c3IsSymbol)()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil)))()()()(b2IsSymbol)()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil)))()()()(a1IsSymbol)()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil).hfoldlWithIndex($FlattenRecStep(Type$dProxy.Proxy))({})(Type$dProxy.Proxy))(Data$dVariant.case_)({
  type: "a1",
  value: {type: "b2", value: {type: "c3", value: "test"}}
}))();
export {
  $FlattenRecStep,
  $UnflattenRecStep,
  FlattenRecStep,
  IsSymbol,
  UnflattenRecStep,
  a1$da2$dIsSymbol,
  a1$da2$da3IsSymbol,
  a1$da2$dd3IsSymbol,
  a1$db2$da3IsSymbol,
  a1$db2$dc3IsSymbol,
  a1IsSymbol,
  a2IsSymbol,
  a3IsSymbol,
  b2IsSymbol,
  b3IsSymbol,
  c3IsSymbol,
  d3IsSymbol,
  evalPrefixRecStepCons,
  evalPrefixRecStepVariant,
  flatten,
  flattenExperiment,
  foldingWithIndexFlattenRe,
  foldingWithIndexFlattenRe2,
  foldingWithIndexUnflatten,
  foldingWithIndexUnflatten2,
  identity,
  unflatten,
  unflattenNested,
  x,
  z
};
