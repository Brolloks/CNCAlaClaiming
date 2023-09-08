import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Record$dBuilder from "../Record.Builder/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const $CatMaybes = () => ({tag: "CatMaybes"});
const identity = x => x;
const CatMaybes = /* #__PURE__ */ $CatMaybes();
const optApplyTrue = {optApply: v => f => x => f(x)};
const optApplyFalse = {optApply: v => v1 => x => x};
const optApply = dict => dict.optApply;
const hfilterWithIndex = dict => dict.hfilterWithIndex;
const hfilter = dict => dict.hfilter;
const filteringWithIndex = dict => dict.filteringWithIndex;
const filtering = dict => dict.filtering;
const filterRecordWithIndexNil = {filterRecordWithIndexBuilder: v => v1 => v2 => identity};
const filterRecordWithIndexBuilder = dict => dict.filterRecordWithIndexBuilder;
const filterRecordWithIndexCons = dictIsSymbol => dictFilteringWithIndex => dictFilterRecordWithIndex => () => () => () => dictOptApply => (
  {
    filterRecordWithIndexBuilder: v => rec => f => {
      const a = Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(rec);
      return dictOptApply.optApply(dictFilteringWithIndex.filteringWithIndex(f)(Type$dProxy.Proxy)(a))(Control$dSemigroupoid.semigroupoidFn.compose(Record$dBuilder.insert()()(dictIsSymbol)(Type$dProxy.Proxy)(a)))(dictFilterRecordWithIndex.filterRecordWithIndexBuilder(Type$dProxy.Proxy)(rec)(f));
    }
  }
);
const hfilterRecord = () => dictFilterRecordWithIndex => ({hfilter: fn => rec => dictFilterRecordWithIndex.filterRecordWithIndexBuilder(Type$dProxy.Proxy)(rec)(fn)({})});
const hfilterWithIndexRecord = () => dictFilterRecordWithIndex => (
  {hfilterWithIndex: fn => rec => dictFilterRecordWithIndex.filterRecordWithIndexBuilder(Type$dProxy.Proxy)(rec)(fn)({})}
);
const constFiltering = dictFiltering => ({filteringWithIndex: v => v1 => dictFiltering.filtering(v)});
const catMaybesNothing = {filtering: v => v1 => Type$dProxy.Proxy};
const catMaybesJust = {filtering: v => v1 => Type$dProxy.Proxy};
export {
  $CatMaybes,
  CatMaybes,
  catMaybesJust,
  catMaybesNothing,
  constFiltering,
  filterRecordWithIndexBuilder,
  filterRecordWithIndexCons,
  filterRecordWithIndexNil,
  filtering,
  filteringWithIndex,
  hfilter,
  hfilterRecord,
  hfilterWithIndex,
  hfilterWithIndexRecord,
  identity,
  optApply,
  optApplyFalse,
  optApplyTrue
};
