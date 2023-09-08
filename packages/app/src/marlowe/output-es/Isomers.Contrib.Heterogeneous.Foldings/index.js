import * as Record$dPrefix from "../Record.Prefix/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Record$dUnsafe$dUnion from "../Record.Unsafe.Union/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const Flatten = x => x;
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
export {Flatten, evalToRowListStepProxy, evalToRowListStepRecordPr, foldingWithIndexFlattenPr, foldingWithIndexFlattenPr1};
