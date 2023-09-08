import * as $runtime from "../runtime.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dList from "../Data.List/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dSemigroup from "../Data.Semigroup/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as JSURI from "../JSURI/index.js";
import * as Parsing from "../Parsing/index.js";
import * as Parsing$dCombinators from "../Parsing.Combinators/index.js";
import * as Parsing$dString from "../Parsing.String/index.js";
import * as URI$dCommon from "../URI.Common/index.js";
const Query = x => x;
const unsafeToString = v => v;
const unsafeFromString = Query;
const toString = v => {
  const $0 = JSURI._decodeURIComponent(v$1 => Data$dMaybe.Nothing, Data$dMaybe.Just, v);
  if ($0.tag === "Just") { return $0._1; }
  $runtime.fail();
};
const showQuery = {show: v => "(Query.unsafeFromString " + Data$dShow.showStringImpl(v) + ")"};
const semigroupQuery = Data$dSemigroup.semigroupString;
const queryChar = /* #__PURE__ */ (() => {
  const $0 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === ":"))("':'");
  const $1 = (() => {
    const $1 = (() => {
      const $1 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "@"))("'@'");
      const $2 = (() => {
        const $2 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "/"))("'/'");
        const $3 = (() => {
          const $3 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "?"))("'?'");
          return (v2, $4, $5, $6, $7) => {
            const $8 = v2._1;
            const $9 = v2._2;
            return $4(v3 => $2(
              Parsing.$ParseState($8, $9, false),
              $4,
              $5,
              (v4, $10) => {
                const $11 = v4._3;
                return $4(v5 => {
                  if ($11) { return $6(v4, $10); }
                  return $3(v2, $4, $5, $6, $7);
                });
              },
              $7
            ));
          };
        })();
        return (v2, $4, $5, $6, $7) => {
          const $8 = v2._1;
          const $9 = v2._2;
          return $4(v3 => $1(
            Parsing.$ParseState($8, $9, false),
            $4,
            $5,
            (v4, $10) => {
              const $11 = v4._3;
              return $4(v5 => {
                if ($11) { return $6(v4, $10); }
                return $3(v2, $4, $5, $6, $7);
              });
            },
            $7
          ));
        };
      })();
      return (v2, $3, $4, $5, $6) => {
        const $7 = v2._1;
        const $8 = v2._2;
        return $3(v3 => $0(
          Parsing.$ParseState($7, $8, false),
          $3,
          $4,
          (v4, $9) => {
            const $10 = v4._3;
            return $3(v5 => {
              if ($10) { return $5(v4, $9); }
              return $2(v2, $3, $4, $5, $6);
            });
          },
          $6
        ));
      };
    })();
    return (v2, $2, $3, $4, $5) => {
      const $6 = v2._1;
      const $7 = v2._2;
      return $2(v3 => URI$dCommon.subDelims(
        Parsing.$ParseState($6, $7, false),
        $2,
        $3,
        (v4, $8) => {
          const $9 = v4._3;
          return $2(v5 => {
            if ($9) { return $4(v4, $8); }
            return $1(v2, $2, $3, $4, $5);
          });
        },
        $5
      ));
    };
  })();
  return (v2, $2, $3, $4, $5) => {
    const $6 = v2._1;
    const $7 = v2._2;
    return $2(v3 => URI$dCommon.unreserved(
      Parsing.$ParseState($6, $7, false),
      $2,
      $3,
      (v4, $8) => {
        const $9 = v4._3;
        return $2(v5 => {
          if ($9) { return $4(v4, $8); }
          return $1(v2, $2, $3, $4, $5);
        });
      },
      $5
    ));
  };
})();
const print = v => "?" + v;
const parser = /* #__PURE__ */ (() => {
  const $0 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "?"))("'?'");
  const $1 = Data$dList.manyRec(Parsing.monadRecParserT)(Parsing.alternativeParserT)((v2, $1, $2, $3, $4) => {
    const $5 = v2._1;
    const $6 = v2._2;
    return $1(v3 => $1(v1 => queryChar(
      Parsing.$ParseState($5, $6, false),
      $1,
      $2,
      (v4, $7) => {
        const $8 = v4._3;
        return $1(v5 => {
          if ($8) { return $3(v4, $7); }
          return URI$dCommon.pctEncoded(v2, $1, $2, $3, $4);
        });
      },
      (state2, a) => $1(v2$1 => $4(state2, Data$dString$dCodeUnits.singleton(a)))
    )));
  });
  return (state1, more, lift1, $$throw, done) => more(v2 => more(v1 => $0(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2$1 => more(v3 => more(v1$1 => $1(
      state2,
      more,
      lift1,
      $$throw,
      (state2$1, a$1) => more(v2$2 => {
        const go = go$a0$copy => go$a1$copy => {
          let go$a0 = go$a0$copy, go$a1 = go$a1$copy, go$c = true, go$r;
          while (go$c) {
            const b = go$a0, v = go$a1;
            if (v.tag === "Nil") {
              go$c = false;
              go$r = b;
              continue;
            }
            if (v.tag === "Cons") {
              go$a0 = b.init ? {init: false, acc: v._1} : {init: false, acc: b.acc + "" + v._1};
              go$a1 = v._2;
              continue;
            }
            $runtime.fail();
          }
          return go$r;
        };
        const $2 = go({init: true, acc: ""})(a$1).acc;
        return more(v4 => done(state2$1, $2));
      })
    ))))
  )));
})();
const ordQuery = Data$dOrd.ordString;
const monoidQuery = Data$dMonoid.monoidString;
const fromString = x => URI$dCommon.printEncoded(queryChar)(x);
const eqQuery = Data$dEq.eqString;
export {Query, eqQuery, fromString, monoidQuery, ordQuery, parser, print, queryChar, semigroupQuery, showQuery, toString, unsafeFromString, unsafeToString};
