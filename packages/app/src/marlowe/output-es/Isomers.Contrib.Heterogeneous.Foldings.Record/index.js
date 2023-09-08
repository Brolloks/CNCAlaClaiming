import * as Heterogeneous$dFolding from "../Heterogeneous.Folding/index.js";
import * as Record$dPrefix from "../Record.Prefix/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Record$dUnsafe$dUnion from "../Record.Unsafe.Union/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const $FlattenRecStep = (_1, _2) => ({tag: "FlattenRecStep", _1, _2});
const IsSymbol = {reflectSymbol: () => ""};
const a3IsSymbol = {reflectSymbol: () => "a3"};
const b3IsSymbol = {reflectSymbol: () => "b3"};
const d3IsSymbol = {reflectSymbol: () => "d3"};
const a2$dIsSymbol = {reflectSymbol: () => "a2."};
const a2$da3IsSymbol = {reflectSymbol: () => "a2.a3"};
const a2$db3IsSymbol = {reflectSymbol: () => "a2.b3"};
const a2$dd3IsSymbol = {reflectSymbol: () => "a2.d3"};
const c3IsSymbol = {reflectSymbol: () => "c3"};
const b2$da3IsSymbol = {reflectSymbol: () => "b2.a3"};
const b2$dc3IsSymbol = {reflectSymbol: () => "b2.c3"};
const FlattenRecStep = value0 => value1 => $FlattenRecStep(value0, value1);
const Flatten = x => x;
const foldingWithIndexFlattenRe = dictIsSymbol => () => () => () => (
  {foldingWithIndex: v => l => acc => v1 => Record$dUnsafe.unsafeSet(dictIsSymbol.reflectSymbol(l))(Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(l))(v._2))(acc)}
);
const foldingWithIndexFlattenRe1 = dictIsSymbol => () => () => dictHFoldlWithIndex => () => dictHFoldlWithIndex1 => () => (
  {
    foldingWithIndex: v => l => acc => v1 => Record$dUnsafe$dUnion.unsafeUnionFn(
      dictHFoldlWithIndex1.hfoldlWithIndex(Record$dPrefix.$PrefixProps(Type$dProxy.Proxy))(Record$dPrefix.identity)(dictHFoldlWithIndex.hfoldlWithIndex($FlattenRecStep(
        v._1,
        Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(l))(v._2)
      ))({})(Type$dProxy.Proxy))({}),
      acc
    )
  }
);
const foldingWithIndexFlattenPr = dictIsSymbol => () => () => ({foldingWithIndex: v => l => acc => v1 => Record$dUnsafe.unsafeSet(dictIsSymbol.reflectSymbol(l))(v1)(acc)});
const foldingWithIndexFlattenPr1 = dictHFoldlWithIndex => () => () => (
  {
    foldingWithIndex: v => v1 => acc => v2 => Record$dUnsafe$dUnion.unsafeUnionFn(
      dictHFoldlWithIndex.hfoldlWithIndex(Record$dPrefix.$PrefixProps(Type$dProxy.Proxy))(Record$dPrefix.identity)(v2)({}),
      acc
    )
  }
);
const evalToRowListStepRecordPr = () => ({});
const evalToRowListStepProxy = {};
const nested = {a1: {a2: {a3: 8, b3: {}, d3: "bar", "": "baz"}, b2: {a3: "foo", c3: "bar"}}};
const flattenRec = () => dictHFoldlWithIndex => record => dictHFoldlWithIndex.hfoldlWithIndex($FlattenRecStep(Type$dProxy.Proxy, record))({})(Type$dProxy.Proxy);
const nested$p = /* #__PURE__ */ (() => Heterogeneous$dFolding.hfoldlWithIndexRowListCons(foldingWithIndexFlattenRe1({reflectSymbol: () => "a1"})()()(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(foldingWithIndexFlattenRe1({
  reflectSymbol: () => "a2"
})()()(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(foldingWithIndexFlattenRe(IsSymbol)()()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(foldingWithIndexFlattenRe(a3IsSymbol)()()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(foldingWithIndexFlattenRe(b3IsSymbol)()()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(foldingWithIndexFlattenRe(d3IsSymbol)()()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil)))))()((() => {
  const $0 = Heterogeneous$dFolding.foldlRecordCons(IsSymbol)()(Record$dPrefix.prefixProps(a2$dIsSymbol)()()())(Heterogeneous$dFolding.foldlRecordCons(a3IsSymbol)()(Record$dPrefix.prefixProps(a2$da3IsSymbol)()()())(Heterogeneous$dFolding.foldlRecordCons(b3IsSymbol)()(Record$dPrefix.prefixProps(a2$db3IsSymbol)()()())(Heterogeneous$dFolding.foldlRecordCons(d3IsSymbol)()(Record$dPrefix.prefixProps(a2$dd3IsSymbol)()()())(Heterogeneous$dFolding.foldlRecordNil))));
  return {hfoldlWithIndex: f => x => $0.foldlRecordRowList(f)(x)(Type$dProxy.Proxy)};
})())())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(foldingWithIndexFlattenRe1({reflectSymbol: () => "b2"})()()(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(foldingWithIndexFlattenRe(a3IsSymbol)()()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(foldingWithIndexFlattenRe(c3IsSymbol)()()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil)))()((() => {
  const $0 = Heterogeneous$dFolding.foldlRecordCons(a3IsSymbol)()(Record$dPrefix.prefixProps(b2$da3IsSymbol)()()())(Heterogeneous$dFolding.foldlRecordCons(c3IsSymbol)()(Record$dPrefix.prefixProps(b2$dc3IsSymbol)()()())(Heterogeneous$dFolding.foldlRecordNil));
  return {hfoldlWithIndex: f => x => $0.foldlRecordRowList(f)(x)(Type$dProxy.Proxy)};
})())())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil)))()((() => {
  const $0 = Heterogeneous$dFolding.foldlRecordCons(a2$dIsSymbol)()(Record$dPrefix.prefixProps({reflectSymbol: () => "a1.a2."})()()())(Heterogeneous$dFolding.foldlRecordCons(a2$da3IsSymbol)()(Record$dPrefix.prefixProps({
    reflectSymbol: () => "a1.a2.a3"
  })()()())(Heterogeneous$dFolding.foldlRecordCons(a2$db3IsSymbol)()(Record$dPrefix.prefixProps({reflectSymbol: () => "a1.a2.b3"})()()())(Heterogeneous$dFolding.foldlRecordCons(a2$dd3IsSymbol)()(Record$dPrefix.prefixProps({
    reflectSymbol: () => "a1.a2.d3"
  })()()())(Heterogeneous$dFolding.foldlRecordCons(b2$da3IsSymbol)()(Record$dPrefix.prefixProps({reflectSymbol: () => "a1.b2.a3"})()()())(Heterogeneous$dFolding.foldlRecordCons(b2$dc3IsSymbol)()(Record$dPrefix.prefixProps({
    reflectSymbol: () => "a1.b2.c3"
  })()()())(Heterogeneous$dFolding.foldlRecordNil))))));
  return {hfoldlWithIndex: f => x => $0.foldlRecordRowList(f)(x)(Type$dProxy.Proxy)};
})())())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil).hfoldlWithIndex($FlattenRecStep(Type$dProxy.Proxy, nested))({})(Type$dProxy.Proxy))();
export {
  $FlattenRecStep,
  Flatten,
  FlattenRecStep,
  IsSymbol,
  a2$dIsSymbol,
  a2$da3IsSymbol,
  a2$db3IsSymbol,
  a2$dd3IsSymbol,
  a3IsSymbol,
  b2$da3IsSymbol,
  b2$dc3IsSymbol,
  b3IsSymbol,
  c3IsSymbol,
  d3IsSymbol,
  evalToRowListStepProxy,
  evalToRowListStepRecordPr,
  flattenRec,
  foldingWithIndexFlattenPr,
  foldingWithIndexFlattenPr1,
  foldingWithIndexFlattenRe,
  foldingWithIndexFlattenRe1,
  nested,
  nested$p
};
