import * as $runtime from "../runtime.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dString$dCodePoints from "../Data.String.CodePoints/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as JSURI from "../JSURI/index.js";
import * as Partial from "../Partial/index.js";
const parse = /* #__PURE__ */ (() => {
  const $0 = Data$dFunctor.arrayMap(s => {
    const v = JSURI._decodeURIComponent(v => Data$dMaybe.Nothing, Data$dMaybe.Just, s);
    if (v.tag === "Just") { return v._1; }
    if (v.tag === "Nothing") { return Partial._crashWith("URI decoding failed: " + s); }
    $runtime.fail();
  });
  const $1 = Data$dFunctor.arrayMap(x => {
    const v = Data$dString$dCodePoints.indexOf("=")(x);
    if (v.tag === "Just") {
      return Data$dTuple.$Tuple(
        (() => {
          const v$1 = JSURI._decodeURIComponent(v$1 => Data$dMaybe.Nothing, Data$dMaybe.Just, Data$dString$dCodePoints.take(v._1)(x));
          if (v$1.tag === "Just") { return v$1._1; }
          if (v$1.tag === "Nothing") { return Partial._crashWith("URI decoding failed: " + Data$dString$dCodePoints.take(v._1)(x)); }
          $runtime.fail();
        })(),
        (() => {
          const v$1 = JSURI._decodeURIComponent(
            v$1 => Data$dMaybe.Nothing,
            Data$dMaybe.Just,
            Data$dString$dCodeUnits.drop(Data$dString$dCodeUnits.length(Data$dString$dCodePoints.take(v._1 + 1 | 0)(x)))(x)
          );
          if (v$1.tag === "Just") { return v$1._1; }
          if (v$1.tag === "Nothing") {
            return Partial._crashWith("URI decoding failed: " + Data$dString$dCodeUnits.drop(Data$dString$dCodeUnits.length(Data$dString$dCodePoints.take(v._1 + 1 | 0)(x)))(x));
          }
          $runtime.fail();
        })()
      );
    }
    if (v.tag === "Nothing") {
      return Data$dTuple.$Tuple(
        (() => {
          const v$1 = JSURI._decodeURIComponent(v$1 => Data$dMaybe.Nothing, Data$dMaybe.Just, x);
          if (v$1.tag === "Just") { return v$1._1; }
          if (v$1.tag === "Nothing") { return Partial._crashWith("URI decoding failed: " + x); }
          $runtime.fail();
        })(),
        (() => {
          const v$1 = JSURI._decodeURIComponent(v$1 => Data$dMaybe.Nothing, Data$dMaybe.Just, "");
          if (v$1.tag === "Just") { return v$1._1; }
          if (v$1.tag === "Nothing") { return Partial._crashWith("URI decoding failed: "); }
          $runtime.fail();
        })()
      );
    }
    $runtime.fail();
  });
  return x => {
    const v = Data$dString$dCodePoints.indexOf("#")(x);
    const $2 = (() => {
      if (v.tag === "Just") {
        return Data$dTuple.$Tuple(
          Data$dString$dCodePoints.take(v._1)(x),
          Data$dString$dCodeUnits.drop(Data$dString$dCodeUnits.length(Data$dString$dCodePoints.take(v._1 + 1 | 0)(x)))(x)
        );
      }
      if (v.tag === "Nothing") { return Data$dTuple.$Tuple(x, ""); }
      $runtime.fail();
    })();
    const v$1 = Data$dString$dCodePoints.indexOf("?")($2._1);
    if (v$1.tag === "Just") {
      return {
        segments: (() => {
          const $3 = Data$dString$dCodeUnits.stripPrefix("/")(Data$dString$dCodePoints.take(v$1._1)($2._1));
          const $4 = (() => {
            if ($3.tag === "Nothing") { return Data$dString$dCodePoints.take(v$1._1)($2._1); }
            if ($3.tag === "Just") { return $3._1; }
            $runtime.fail();
          })();
          return $0($4 === "" ? [] : Data$dString$dCommon.split("/")($4));
        })(),
        params: $1(Data$dString$dCodeUnits.drop(Data$dString$dCodeUnits.length(Data$dString$dCodePoints.take(v$1._1 + 1 | 0)($2._1)))($2._1) === ""
          ? []
          : Data$dString$dCommon.split("&")(Data$dString$dCodeUnits.drop(Data$dString$dCodeUnits.length(Data$dString$dCodePoints.take(v$1._1 + 1 | 0)($2._1)))($2._1))),
        hash: $2._2
      };
    }
    if (v$1.tag === "Nothing") {
      return {
        segments: (() => {
          const $3 = Data$dString$dCodeUnits.stripPrefix("/")($2._1);
          const $4 = (() => {
            if ($3.tag === "Nothing") { return $2._1; }
            if ($3.tag === "Just") { return $3._1; }
            $runtime.fail();
          })();
          return $0($4 === "" ? [] : Data$dString$dCommon.split("/")($4));
        })(),
        params: $1([]),
        hash: $2._2
      };
    }
    $runtime.fail();
  };
})();
export {parse};
