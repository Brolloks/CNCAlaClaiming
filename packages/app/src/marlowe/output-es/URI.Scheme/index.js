import * as $runtime from "../runtime.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dList from "../Data.List/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Parsing from "../Parsing/index.js";
import * as Parsing$dCombinators from "../Parsing.Combinators/index.js";
import * as Parsing$dString from "../Parsing.String/index.js";
import * as Partial from "../Partial/index.js";
import * as URI$dCommon from "../URI.Common/index.js";
const manyRec = /* #__PURE__ */ Data$dList.manyRec(Parsing.monadRecParserT)(Parsing.alternativeParserT);
const toString = v => v;
const showScheme = {show: v => "(Scheme.unsafeFromString " + Data$dShow.showStringImpl(v) + ")"};
const print = v => v + ":";
const parseScheme = (state1, more, lift1, $$throw, done) => more(v1 => URI$dCommon.alpha(
  state1,
  more,
  lift1,
  $$throw,
  (state2, a) => more(v2 => {
    const $0 = manyRec((() => {
      const $0 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "+"))("'+'");
      const $1 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "-"))("'-'");
      const $2 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "."))("'.'");
      return (state1$1, more$1, lift1$1, throw$1, done$1) => more$1(v1$1 => {
        const $3 = state1$1._1;
        const $4 = state1$1._2;
        return more$1(v3 => URI$dCommon.alphaNum(
          Parsing.$ParseState($3, $4, false),
          more$1,
          lift1$1,
          (v4, $5) => {
            const $6 = v4._3;
            return more$1(v5 => {
              if ($6) { return throw$1(v4, $5); }
              const $7 = state1$1._1;
              const $8 = state1$1._2;
              return more$1(v3$1 => $0(
                Parsing.$ParseState($7, $8, false),
                more$1,
                lift1$1,
                (v4$1, $9) => {
                  const $10 = v4$1._3;
                  return more$1(v5$1 => {
                    if ($10) { return throw$1(v4$1, $9); }
                    const $11 = state1$1._1;
                    const $12 = state1$1._2;
                    return more$1(v3$2 => $1(
                      Parsing.$ParseState($11, $12, false),
                      more$1,
                      lift1$1,
                      (v4$2, $13) => {
                        const $14 = v4$2._3;
                        return more$1(v5$2 => {
                          if ($14) { return throw$1(v4$2, $13); }
                          return $2(state1$1, more$1, lift1$1, throw$1, (state2$1, a$1) => more$1(v2$1 => done$1(state2$1, Data$dString$dCodeUnits.singleton(a$1))));
                        });
                      },
                      (state2$1, a$1) => more$1(v2$1 => done$1(state2$1, Data$dString$dCodeUnits.singleton(a$1)))
                    ));
                  });
                },
                (state2$1, a$1) => more$1(v2$1 => done$1(state2$1, Data$dString$dCodeUnits.singleton(a$1)))
              ));
            });
          },
          (state2$1, a$1) => more$1(v2$1 => done$1(state2$1, Data$dString$dCodeUnits.singleton(a$1)))
        ));
      });
    })());
    return more(v1$1 => more(v1$2 => $0(
      state2,
      more,
      lift1,
      $$throw,
      (state2$1, a$1) => more(v2$1 => {
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
        const $1 = go({init: true, acc: ""})(a$1).acc;
        return more(v2$2 => done(state2$1, Data$dString$dCodeUnits.singleton(a) + $1));
      })
    )));
  })
));
const parser = /* #__PURE__ */ (() => {
  const $0 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === ":"))("':'");
  return (state1, more, lift1, $$throw, done) => more(v2 => more(v1 => more(v1$1 => parseScheme(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2$1 => more(v2$2 => more(v3 => $0(state2, more, lift1, $$throw, (state3, a$1) => more(v4 => done(state3, a))))))
  ))));
})();
const ordScheme = Data$dOrd.ordString;
const fromString = x => {
  const $0 = Parsing.runParserT1(x)((state1, more, lift1, $$throw, done) => more(v2 => more(v1 => parseScheme(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2$1 => more(v3 => Parsing$dString.eof(state2, more, lift1, $$throw, (state3, a$1) => more(v4 => done(state3, a)))))
  ))));
  if ($0.tag === "Left") { return Data$dMaybe.Nothing; }
  if ($0.tag === "Right") { return Data$dMaybe.$Maybe("Just", $0._1); }
  $runtime.fail();
};
const unsafeFromString = s => {
  const v = fromString(s);
  if (v.tag === "Just") { return v._1; }
  if (v.tag === "Nothing") { return Partial._crashWith("Scheme value is invalid: `" + Data$dShow.showStringImpl(s) + "`"); }
  $runtime.fail();
};
const eqScheme = Data$dEq.eqString;
export {eqScheme, fromString, manyRec, ordScheme, parseScheme, parser, print, showScheme, toString, unsafeFromString};
