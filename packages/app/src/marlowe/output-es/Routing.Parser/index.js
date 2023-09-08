import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dList from "../Data.List/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dString$dCodePoints from "../Data.String.CodePoints/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Routing$dTypes from "../Routing.Types/index.js";
const fromFoldable = /* #__PURE__ */ Data$dMap$dInternal.fromFoldable(Data$dOrd.ordString)(Data$dFoldable.foldableArray);
const traverse = /* #__PURE__ */ (() => Data$dTraversable.traversableArray.traverse(Data$dMaybe.applicativeMaybe))();
const fromFoldable1 = /* #__PURE__ */ Data$dFoldable.foldrArray(Data$dList$dTypes.Cons)(Data$dList$dTypes.Nil);
const parseQueryPart = decoder => {
  const $0 = traverse(input => {
    const keyVal = Data$dFunctor.arrayMap(decoder)(Data$dString$dCommon.split("=")(input));
    if (keyVal.length <= 2) {
      return Data$dMaybe.applyMaybe.apply((() => {
        const $0 = Data$dArray.index(keyVal)(0);
        if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", Data$dTuple.Tuple($0._1)); }
        return Data$dMaybe.Nothing;
      })())(Data$dArray.index(keyVal)(1));
    }
    return Data$dMaybe.Nothing;
  });
  const $1 = Data$dString$dCommon.split("&");
  return x => {
    const $2 = $0($1(x));
    if ($2.tag === "Just") { return Data$dMaybe.$Maybe("Just", fromFoldable($2._1)); }
    return Data$dMaybe.Nothing;
  };
};
const parse = decoder => hash => {
  const pathParts = str => {
    const parts = fromFoldable1(Data$dFunctor.arrayMap(x => Routing$dTypes.$RoutePart("Path", decoder(x)))(Data$dString$dCommon.split("/")(str)));
    const v = Data$dList.unsnoc(parts);
    if (v.tag === "Just" && v._1.last.tag === "Path" && v._1.last._1 === "") { return v._1.init; }
    return parts;
  };
  const $0 = Data$dString$dCodePoints.indexOf("?")(hash);
  if ($0.tag === "Just") {
    return Data$dList$dTypes.foldableList.foldr(Data$dList$dTypes.Cons)(Data$dList$dTypes.listMap(Routing$dTypes.Query)((() => {
      const $1 = parseQueryPart(decoder)(Data$dString$dCodeUnits.drop(Data$dString$dCodeUnits.length(Data$dString$dCodePoints.take(1)(Data$dString$dCodePoints.splitAt($0._1)(hash).after)))(Data$dString$dCodePoints.splitAt($0._1)(hash).after));
      if ($1.tag === "Nothing") { return Data$dList$dTypes.Nil; }
      if ($1.tag === "Just") { return Data$dList$dTypes.$List("Cons", $1._1, Data$dList$dTypes.Nil); }
      $runtime.fail();
    })()))(pathParts(Data$dString$dCodePoints.splitAt($0._1)(hash).before));
  }
  return pathParts(hash);
};
export {fromFoldable, fromFoldable1, parse, parseQueryPart, traverse};
