import * as $runtime from "../runtime.js";
import * as Control$dCategory from "../Control.Category/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dProfunctor$dStrong from "../Data.Profunctor.Strong/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Data$dUnfoldable1 from "../Data.Unfoldable1/index.js";
const fromFoldable = /* #__PURE__ */ Data$dMap$dInternal.fromFoldable(Data$dOrd.ordString)(Data$dFoldable.foldableArray);
const fanout = /* #__PURE__ */ Data$dProfunctor$dStrong.fanout(Control$dCategory.categoryFn)(Data$dProfunctor$dStrong.strongFn);
const identity = x => x;
const tryStripPrefix = pattern => str => {
  const $0 = Data$dString$dCodeUnits.stripPrefix(pattern)(str);
  if ($0.tag === "Nothing") { return str; }
  if ($0.tag === "Just") { return $0._1; }
  $runtime.fail();
};
const isPrefixOf = prefixPattern => x => {
  const $0 = Data$dString$dCodeUnits.stripPrefix(prefixPattern)(x);
  if ($0.tag === "Nothing") { return false; }
  if ($0.tag === "Just") { return true; }
  $runtime.fail();
};
const encodeEnumWith = dictShow => adaptConstructorName => x => adaptConstructorName(dictShow.show(x));
const decodeEnumWith = dictShow => dictBoundedEnum => {
  const $0 = dictBoundedEnum.Enum1();
  const upFromIncluding = Data$dUnfoldable1.unfoldable1Array.unfoldr1(x => Data$dTuple.$Tuple(x, $0.succ(x)));
  const bottom = dictBoundedEnum.Bounded0().bottom;
  return adaptConstructorName => {
    const values = fromFoldable(Data$dFunctor.arrayMap(fanout(x => adaptConstructorName(dictShow.show(x)))(identity))(upFromIncluding(bottom)));
    return v => Data$dMap$dInternal.lookup(Data$dOrd.ordString)(v)(values);
  };
};
export {decodeEnumWith, encodeEnumWith, fanout, fromFoldable, identity, isPrefixOf, tryStripPrefix};
