import * as $runtime from "../runtime.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dList from "../Data.List/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Parsing from "../Parsing/index.js";
import * as Parsing$dCombinators from "../Parsing.Combinators/index.js";
import * as Parsing$dString from "../Parsing.String/index.js";
import * as Parsing$dString$dBasic from "../Parsing.String.Basic/index.js";
import * as Partial from "../Partial/index.js";
const toInt = v => v;
const showPort = {show: v => "(Port.unsafeFromInt " + Data$dShow.showIntImpl(v) + ")"};
const print = v => ":" + Data$dShow.showIntImpl(v);
const parser = /* #__PURE__ */ (() => {
  const $0 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === ":"))("':'");
  const $1 = Data$dList.someRec(Parsing.monadRecParserT)(Parsing.alternativeParserT)((state1, more, lift1, $$throw, done) => more(v1 => Parsing$dString$dBasic.digit(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2 => done(state2, Data$dString$dCodeUnits.singleton(a)))
  )));
  return (state1, more, lift1, $$throw, done) => more(v1 => more(v1$1 => more(v2 => more(v1$2 => $0(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2$1 => more(v3 => $1(
      state2,
      more,
      lift1,
      $$throw,
      (state3, a$1) => more(v4 => more(v2$2 => {
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
        return more(v2$3 => {
          const v = Data$dInt.fromStringAs(10)($2);
          if (v.tag === "Just") { return done(state3, v._1); }
          return Parsing.fail("Expected a valid port number")(state3, more, lift1, $$throw, done);
        });
      }))
    )))
  )))));
})();
const ordPort = Data$dOrd.ordInt;
const fromInt = i => {
  if (i >= 0 && i <= 65535) { return Data$dMaybe.$Maybe("Just", i); }
  return Data$dMaybe.Nothing;
};
const unsafeFromInt = i => {
  if (i >= 0 && i <= 65535) { return i; }
  return Partial._crashWith("Port value " + Data$dShow.showIntImpl(i) + " is out of range");
};
const eqPort = Data$dEq.eqInt;
export {eqPort, fromInt, ordPort, parser, print, showPort, toInt, unsafeFromInt};
