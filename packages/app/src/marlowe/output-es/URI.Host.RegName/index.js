import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dSemigroup from "../Data.Semigroup/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Parsing from "../Parsing/index.js";
import * as URI$dCommon from "../URI.Common/index.js";
const RegName = x => x;
const unsafeToString = v => v;
const unsafeFromString = RegName;
const toString = v => URI$dCommon.decodeURIComponent$p(v);
const showRegName = {show: v => "(RegName.unsafeFromString (NonEmptyString.unsafeFromString " + Data$dShow.showStringImpl(v) + "))"};
const semigroupRegName = Data$dSemigroup.semigroupString;
const regNameChar = (v2, $0, $1, $2, $3) => {
  const $4 = v2._1;
  const $5 = v2._2;
  return $0(v3 => URI$dCommon.unreserved(
    Parsing.$ParseState($4, $5, false),
    $0,
    $1,
    (v4, $6) => {
      const $7 = v4._3;
      return $0(v5 => {
        if ($7) { return $2(v4, $6); }
        return URI$dCommon.subDelims(v2, $0, $1, $2, $3);
      });
    },
    $3
  ));
};
const print = x => x;
const parser = /* #__PURE__ */ (() => {
  const $0 = Data$dArray.some(Parsing.alternativeParserT)(Parsing.lazyParserT)((v2, $0, $1, $2, $3) => {
    const $4 = v2._1;
    const $5 = v2._2;
    return $0(v3 => URI$dCommon.pctEncoded(
      Parsing.$ParseState($4, $5, false),
      $0,
      $1,
      (v4, $6) => {
        const $7 = v4._3;
        return $0(v5 => {
          if ($7) { return $2(v4, $6); }
          return $0(v1 => regNameChar(v2, $0, $1, $2, (state2, a) => $0(v2$1 => $3(state2, Data$dString$dCodeUnits.singleton(a)))));
        });
      },
      $3
    ));
  });
  return (state1, more, lift1, $$throw, done) => more(v1 => $0(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2 => done(
      state2,
      Data$dFoldable.foldlArray(v => v1$1 => {
        if (v.init) { return {init: false, acc: v1$1}; }
        return {init: false, acc: v.acc + "" + v1$1};
      })({init: true, acc: ""})(a).acc
    ))
  ));
})();
const ordRegName = Data$dOrd.ordString;
const fromString = x => {
  const $0 = URI$dCommon.printEncoded(regNameChar)(x);
  if ($0 === "") { $runtime.fail(); }
  return $0;
};
const eqRegName = Data$dEq.eqString;
export {RegName, eqRegName, fromString, ordRegName, parser, print, regNameChar, semigroupRegName, showRegName, toString, unsafeFromString, unsafeToString};
