import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dSemigroup from "../Data.Semigroup/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Parsing from "../Parsing/index.js";
import * as Parsing$dCombinators from "../Parsing.Combinators/index.js";
import * as Parsing$dString from "../Parsing.String/index.js";
import * as URI$dCommon from "../URI.Common/index.js";
const UserInfo = x => x;
const userInfoChar = /* #__PURE__ */ (() => {
  const $0 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === ":"))("':'");
  return (v2, $1, $2, $3, $4) => {
    const $5 = v2._1;
    const $6 = v2._2;
    return $1(v3 => URI$dCommon.unreserved(
      Parsing.$ParseState($5, $6, false),
      $1,
      $2,
      (v4, $7) => {
        const $8 = v4._3;
        return $1(v5 => {
          if ($8) { return $3(v4, $7); }
          const $9 = v2._1;
          const $10 = v2._2;
          return $1(v3$1 => URI$dCommon.subDelims(
            Parsing.$ParseState($9, $10, false),
            $1,
            $2,
            (v4$1, $11) => {
              const $12 = v4$1._3;
              return $1(v5$1 => {
                if ($12) { return $3(v4$1, $11); }
                return $0(v2, $1, $2, $3, $4);
              });
            },
            $4
          ));
        });
      },
      $4
    ));
  };
})();
const unsafeToString = v => v;
const unsafeFromString = UserInfo;
const toString = v => URI$dCommon.decodeURIComponent$p(v);
const showUserInfo = {show: v => "(UserInfo.unsafeFromString (NonEmptyString.unsafeFromString " + Data$dShow.showStringImpl(v) + "))"};
const semigroupUserInfo = Data$dSemigroup.semigroupString;
const print = x => x;
const parser = /* #__PURE__ */ (() => {
  const $0 = Data$dArray.some(Parsing.alternativeParserT)(Parsing.lazyParserT)((v2, $0, $1, $2, $3) => {
    const $4 = v2._1;
    const $5 = v2._2;
    return $0(v3 => $0(v1 => userInfoChar(
      Parsing.$ParseState($4, $5, false),
      $0,
      $1,
      (v4, $6) => {
        const $7 = v4._3;
        return $0(v5 => {
          if ($7) { return $2(v4, $6); }
          return URI$dCommon.pctEncoded(v2, $0, $1, $2, $3);
        });
      },
      (state2, a) => $0(v2$1 => $3(state2, Data$dString$dCodeUnits.singleton(a)))
    )));
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
const ordUserInfo = Data$dOrd.ordString;
const fromString = x => {
  const $0 = URI$dCommon.printEncoded(userInfoChar)(x);
  if ($0 === "") { $runtime.fail(); }
  return $0;
};
const eqUserInfo = Data$dEq.eqString;
export {UserInfo, eqUserInfo, fromString, ordUserInfo, parser, print, semigroupUserInfo, showUserInfo, toString, unsafeFromString, unsafeToString, userInfoChar};
