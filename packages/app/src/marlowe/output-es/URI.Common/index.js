// | Common functions used in parsing and printing URI components.
import * as $runtime from "../runtime.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dList from "../Data.List/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as JSURI from "../JSURI/index.js";
import * as Parsing from "../Parsing/index.js";
import * as Parsing$dCombinators from "../Parsing.Combinators/index.js";
import * as Parsing$dString from "../Parsing.String/index.js";
import * as Parsing$dString$dBasic from "../Parsing.String.Basic/index.js";
const manyRec = /* #__PURE__ */ Data$dList.manyRec(Parsing.monadRecParserT)(Parsing.alternativeParserT);
const URIPartParseError = x => x;
const wrapParser = dictMonad => parseA => p => (state1, more, lift1, $$throw, done) => more(v1 => Parsing.getParserT(
  state1,
  more,
  lift1,
  $$throw,
  (state2, a) => more(v2 => {
    const $0 = a._2;
    return more(v1$1 => p(
      state2,
      more,
      lift1,
      $$throw,
      (state2$1, a$1) => more(v2$1 => {
        const v1$2 = parseA(a$1);
        if (v1$2.tag === "Left") { return $$throw(state2$1, Parsing.$ParseError(v1$2._1, $0)); }
        if (v1$2.tag === "Right") { return done(state2$1, v1$2._1); }
        $runtime.fail();
      })
    ));
  })
));
const subDelims = /* #__PURE__ */ Parsing$dString$dBasic.oneOf(["!", "$", "&", "'", "(", ")", "*", "+", ";", "=", ","]);
const printEncoded = p => s => {
  const $0 = Parsing.runParserT1(s)((() => {
    const $0 = manyRec((v2, $0, $1, $2, $3) => {
      const $4 = v2._1;
      const $5 = v2._2;
      return $0(v3 => $0(v1 => p(
        Parsing.$ParseState($4, $5, false),
        $0,
        $1,
        (v4, $6) => {
          const $7 = v4._3;
          return $0(v5 => {
            if ($7) { return $2(v4, $6); }
            return $0(v1$1 => $0(v1$2 => Parsing$dString.anyChar(
              v2,
              $0,
              $1,
              $2,
              (state2, a) => $0(v2$1 => {
                const $8 = JSURI._encodeURIComponent(v => Data$dMaybe.Nothing, Data$dMaybe.Just, Data$dString$dCodeUnits.singleton(a));
                return $0(v2$2 => {
                  if ($8.tag === "Nothing") { return $2(state2, Parsing.$ParseError("Could not URI encode", Parsing.initialPos)); }
                  if ($8.tag === "Just") {
                    return $3(
                      state2,
                      (() => {
                        if ($8._1 === "") { $runtime.fail(); }
                        return $8._1;
                      })()
                    );
                  }
                  $runtime.fail();
                });
              })
            )));
          });
        },
        (state2, a) => $0(v2$1 => $3(state2, Data$dString$dCodeUnits.singleton(a)))
      )));
    });
    return (state1, more, lift1, $$throw, done) => more(v2 => more(v1 => more(v1$1 => $0(
      state1,
      more,
      lift1,
      $$throw,
      (state2, a) => more(v2$1 => {
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
        const $1 = go({init: true, acc: ""})(a).acc;
        return more(v2$2 => more(v3 => Parsing$dString.eof(state2, more, lift1, $$throw, (state3, a$1) => more(v4 => done(state3, $1)))));
      })
    ))));
  })());
  if ($0.tag === "Left") { return s; }
  if ($0.tag === "Right") { return $0._1; }
  $runtime.fail();
};
const printEncoded$p = p => x => {
  const $0 = printEncoded(p)(x);
  if ($0 === "") { $runtime.fail(); }
  return $0;
};
const pctEncoded = /* #__PURE__ */ (() => {
  const $0 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "%"))("'%'");
  return (state1, more, lift1, $$throw, done) => more(v1 => $0(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2 => more(v1$1 => Parsing$dString$dBasic.hexDigit(
      state2,
      more,
      lift1,
      $$throw,
      (state2$1, a$1) => more(v2$1 => more(v1$2 => Parsing$dString$dBasic.hexDigit(
        state2$1,
        more,
        lift1,
        $$throw,
        (state2$2, a$2) => more(v2$2 => done(state2$2, Data$dString$dCodeUnits.singleton(a) + Data$dString$dCodeUnits.singleton(a$1) + Data$dString$dCodeUnits.singleton(a$2)))
      )))
    )))
  ));
})();
const ordURIPartParseError = Data$dOrd.ordString;
const newtypeURIPartParseError = {Coercible0: () => {}};
const genericURIPartParseError = {to: x => x, from: x => x};
const showURIPartParseError = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor({genericShowArgs: v => [Data$dShow.showStringImpl(v)]})({reflectSymbol: () => "URIPartParseError"});
    return x => $0["genericShow'"](x);
  })()
};
const eqURIPartParseError = Data$dEq.eqString;
const decodeURIComponent$p = x => {
  const $0 = JSURI._decodeURIComponent(v => Data$dMaybe.Nothing, Data$dMaybe.Just, x);
  const $1 = (() => {
    if ($0.tag === "Just") { return $0._1; }
    $runtime.fail();
  })();
  if ($1 === "") { $runtime.fail(); }
  return $1;
};
const alpha = /* #__PURE__ */ Parsing$dString.satisfy(c => c >= "a" && c <= "z" || c >= "A" && c <= "Z");
const alphaNum = (v2, $0, $1, $2, $3) => {
  const $4 = v2._1;
  const $5 = v2._2;
  return $0(v3 => alpha(
    Parsing.$ParseState($4, $5, false),
    $0,
    $1,
    (v4, $6) => {
      const $7 = v4._3;
      return $0(v5 => {
        if ($7) { return $2(v4, $6); }
        return Parsing$dString$dBasic.digit(v2, $0, $1, $2, $3);
      });
    },
    $3
  ));
};
const unreserved = /* #__PURE__ */ (() => {
  const $0 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "-"))("'-'");
  const $1 = (() => {
    const $1 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "."))("'.'");
    const $2 = (() => {
      const $2 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "_"))("'_'");
      const $3 = (() => {
        const $3 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "~"))("'~'");
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
    return $2(v3 => alphaNum(
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
export {
  URIPartParseError,
  alpha,
  alphaNum,
  decodeURIComponent$p,
  eqURIPartParseError,
  genericURIPartParseError,
  manyRec,
  newtypeURIPartParseError,
  ordURIPartParseError,
  pctEncoded,
  printEncoded,
  printEncoded$p,
  showURIPartParseError,
  subDelims,
  unreserved,
  wrapParser
};
