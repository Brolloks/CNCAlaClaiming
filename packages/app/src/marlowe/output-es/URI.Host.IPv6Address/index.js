import * as $runtime from "../runtime.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dList from "../Data.List/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Parsing from "../Parsing/index.js";
import * as Parsing$dCombinators from "../Parsing.Combinators/index.js";
import * as Parsing$dString from "../Parsing.String/index.js";
import * as Parsing$dString$dBasic from "../Parsing.String.Basic/index.js";
const IPv6Address = x => x;
const unsafeToString = v => "[" + v + "]";
const unsafeFromString = IPv6Address;
const showIPv6Address = {show: v => "(IPv6Address.unsafeFromString " + Data$dShow.showStringImpl(v) + ")"};
const parser = /* #__PURE__ */ Parsing$dCombinators.withErrorMessage(/* #__PURE__ */ (() => {
  const $0 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "["))("'['");
  const $1 = Data$dList.someRec(Parsing.monadRecParserT)(Parsing.alternativeParserT)((() => {
    const $1 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === ":"))("':'");
    const $2 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "."))("'.'");
    return (state1, more, lift1, $$throw, done) => more(v1 => {
      const $3 = state1._1;
      const $4 = state1._2;
      return more(v3 => Parsing$dString$dBasic.hexDigit(
        Parsing.$ParseState($3, $4, false),
        more,
        lift1,
        (v4, $5) => {
          const $6 = v4._3;
          return more(v5 => {
            if ($6) { return $$throw(v4, $5); }
            const $7 = state1._1;
            const $8 = state1._2;
            return more(v3$1 => $1(
              Parsing.$ParseState($7, $8, false),
              more,
              lift1,
              (v4$1, $9) => {
                const $10 = v4$1._3;
                return more(v5$1 => {
                  if ($10) { return $$throw(v4$1, $9); }
                  return $2(state1, more, lift1, $$throw, (state2, a) => more(v2 => done(state2, Data$dString$dCodeUnits.singleton(a))));
                });
              },
              (state2, a) => more(v2 => done(state2, Data$dString$dCodeUnits.singleton(a)))
            ));
          });
        },
        (state2, a) => more(v2 => done(state2, Data$dString$dCodeUnits.singleton(a)))
      ));
    });
  })());
  const $2 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "]"))("']'");
  return (state1, more, lift1, $$throw, done) => more(v1 => more(v2 => more(v1$1 => more(v2$1 => more(v1$2 => $0(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2$2 => more(v3 => more(v1$3 => $1(
      state2,
      more,
      lift1,
      $$throw,
      (state2$1, a$1) => more(v2$3 => {
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
        const $3 = go({init: true, acc: ""})(a$1).acc;
        return more(v4 => more(v2$4 => more(v3$1 => $2(state2$1, more, lift1, $$throw, (state3, a$2) => more(v4$1 => more(v2$5 => done(state3, $3)))))));
      })
    ))))
  ))))));
})())("IPv6 address");
const ordIPv6Address = Data$dOrd.ordString;
const eqIPv6Address = Data$dEq.eqString;
export {IPv6Address, eqIPv6Address, ordIPv6Address, parser, showIPv6Address, unsafeFromString, unsafeToString};
