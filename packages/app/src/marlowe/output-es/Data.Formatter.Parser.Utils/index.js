import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Parsing from "../Parsing/index.js";
import * as Parsing$dCombinators from "../Parsing.Combinators/index.js";
import * as Parsing$dString from "../Parsing.String/index.js";
const printPosition = v => "(line " + Data$dShow.showIntImpl(v.line) + ", col " + Data$dShow.showIntImpl(v.column) + ")";
const runP = p => s => {
  const $0 = Parsing.runParserT1(s)((state1, more, lift1, $$throw, done) => more(v2 => more(v1 => p(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2$1 => more(v3 => Parsing$dString.eof(state2, more, lift1, $$throw, (state3, a$1) => more(v4 => done(state3, a)))))
  ))));
  if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1._1 + " " + printPosition($0._1._2)); }
  if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
  $runtime.fail();
};
const oneOfAs = dictFunctor => dictFoldable => {
  const choice = Parsing$dCombinators.choice(dictFoldable);
  return dictMonad => p => xs => choice(dictFunctor.map(v => {
    const $0 = v._2;
    const $1 = p(v._1);
    return (state1, more, lift1, $$throw, done) => more(v1 => $1(state1, more, lift1, $$throw, (state2, a) => more(v2 => done(state2, $0))));
  })(xs));
};
export {oneOfAs, printPosition, runP};
