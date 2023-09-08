import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dString$dCodePoints from "../Data.String.CodePoints/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as JSURI from "../JSURI/index.js";
const parseQuery = v => {
  if (v === "") { return []; }
  const $0 = Data$dFunctor.arrayMap(str => {
    const v1 = Data$dString$dCodePoints.indexOf("=")(str);
    if (v1.tag === "Just") {
      return Data$dTuple.$Tuple(
        Data$dString$dCodePoints.take(v1._1)(str),
        Data$dMaybe.$Maybe("Just", Data$dString$dCodeUnits.drop(Data$dString$dCodeUnits.length(Data$dString$dCodePoints.take(v1._1 + 1 | 0)(str)))(str))
      );
    }
    if (v1.tag === "Nothing") { return Data$dTuple.$Tuple(str, Data$dMaybe.Nothing); }
    $runtime.fail();
  });
  const $1 = Data$dString$dCommon.split("&");
  const v1 = Data$dString$dCommon.split("?")((() => {
    const $2 = JSURI._decodeURIComponent(v$1 => Data$dMaybe.Nothing, Data$dMaybe.Just, v);
    if ($2.tag === "Nothing") { return v; }
    if ($2.tag === "Just") { return $2._1; }
    $runtime.fail();
  })());
  if (v1.length === 2) {
    if (v1[1] === "") { return []; }
    return $0($1(v1[1]));
  }
  return [];
};
const parsePath = /* #__PURE__ */ (() => {
  const $0 = Data$dString$dCommon.split("?");
  const $1 = Data$dString$dCommon.split("/");
  const $2 = Data$dArray.filter(y => "" !== y);
  return x => {
    const $3 = JSURI._decodeURIComponent(v => Data$dMaybe.Nothing, Data$dMaybe.Just, x);
    const $4 = Data$dArray.index($0((() => {
      if ($3.tag === "Nothing") { return x; }
      if ($3.tag === "Just") { return $3._1; }
      $runtime.fail();
    })()))(0);
    return $2($1((() => {
      if ($4.tag === "Nothing") { return ""; }
      if ($4.tag === "Just") { return $4._1; }
      $runtime.fail();
    })()));
  };
})();
export {parsePath, parseQuery};
