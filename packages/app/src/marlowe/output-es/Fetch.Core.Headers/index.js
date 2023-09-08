import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import {_toArray, fromObject, unsafeAppend, unsafeFromRecord, unsafeNew} from "./foreign.js";
const toArray = $0 => _toArray(Data$dTuple.Tuple, $0);
const toUnfoldable = dictUnfoldable => x => Data$dArray.toUnfoldable(dictUnfoldable)(_toArray(Data$dTuple.Tuple, x));
const fromRecord = () => unsafeFromRecord;
const fromFoldable = dictFoldable => f => {
  const init = unsafeNew();
  return dictFoldable.foldl(b => a => () => {
    const a$1 = b();
    unsafeAppend(a._1, a._2, a$1);
    return a$1;
  })(() => init)(f)();
};
const empty = /* #__PURE__ */ fromFoldable(Data$dFoldable.foldableArray)([]);
export {empty, fromFoldable, fromRecord, toArray, toUnfoldable};
export * from "./foreign.js";
