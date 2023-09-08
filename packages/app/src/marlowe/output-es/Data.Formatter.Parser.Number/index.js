import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFormatter$dParser$dUtils from "../Data.Formatter.Parser.Utils/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dNumber from "../Data.Number/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Parsing from "../Parsing/index.js";
import * as Parsing$dCombinators from "../Parsing.Combinators/index.js";
import * as Parsing$dString from "../Parsing.String/index.js";
import * as Parsing$dString$dBasic from "../Parsing.String.Basic/index.js";
const oneOfAs = /* #__PURE__ */ Data$dFormatter$dParser$dUtils.oneOfAs(Data$dFunctor.functorArray)(Data$dFoldable.foldableArray);
const foldMap = /* #__PURE__ */ (() => Data$dFoldable.foldableArray.foldMap(Data$dMonoid.monoidString))();
const foldDigits = /* #__PURE__ */ Data$dFoldable.foldlArray(acc => d => (acc * 10 | 0) + d | 0)(0);
const parseDigit = dictMonad => {
  const $0 = oneOfAs(dictMonad)(Parsing$dString.char)([
    Data$dTuple.$Tuple("0", 0),
    Data$dTuple.$Tuple("1", 1),
    Data$dTuple.$Tuple("2", 2),
    Data$dTuple.$Tuple("3", 3),
    Data$dTuple.$Tuple("4", 4),
    Data$dTuple.$Tuple("5", 5),
    Data$dTuple.$Tuple("6", 6),
    Data$dTuple.$Tuple("7", 7),
    Data$dTuple.$Tuple("8", 8),
    Data$dTuple.$Tuple("9", 9)
  ]);
  return (v1, $1, $2, $3, $4) => {
    const $5 = v1._3;
    return $0(v1, $1, $2, (v2, $6) => $3(Parsing.$ParseState(v2._1, v2._2, $5), $6), $4);
  };
};
const parseFractional = dictMonad => {
  const $0 = Data$dArray.some(Parsing.alternativeParserT)(Parsing.lazyParserT)(parseDigit(dictMonad));
  const $1 = foldMap(Data$dShow.showIntImpl);
  return (state1, more, lift1, $$throw, done) => more(v1 => more(v1$1 => $0(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2 => {
      const $2 = "0." + $1(a);
      return more(v2$1 => {
        const v = Data$dNumber.fromStringImpl($2, Data$dNumber.isFinite, Data$dMaybe.Just, Data$dMaybe.Nothing);
        if (v.tag === "Just") { return done(state2, v._1); }
        if (v.tag === "Nothing") { return Parsing.fail("Not a number: " + $2)(state2, more, lift1, $$throw, done); }
        $runtime.fail();
      });
    })
  )));
};
const parseInteger = dictMonad => {
  const $0 = Data$dArray.some(Parsing.alternativeParserT)(Parsing.lazyParserT)(parseDigit(dictMonad));
  return (state1, more, lift1, $$throw, done) => more(v1 => $0(state1, more, lift1, $$throw, (state2, a) => more(v2 => done(state2, foldDigits(a)))));
};
const parseMaybeInteger = dictMonad => Parsing$dCombinators.optionMaybe(parseInteger(dictMonad));
const parseNumber = dictMonad => {
  const $0 = parseInteger(dictMonad);
  const $1 = Parsing$dString$dBasic.oneOf([".", ","]);
  const $2 = parseFractional(dictMonad);
  return (state1, more, lift1, $$throw, done) => more(v2 => more(v1 => more(v1$1 => $0(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2$1 => {
      const $3 = Data$dInt.toNumber(a);
      return more(v2$2 => more(v3 => {
        const $4 = state2._1;
        const $5 = state2._2;
        return more(v3$1 => {
          const $6 = (v4, $6) => {
            const $7 = v4._3;
            return more(v5 => {
              if ($7) { return $$throw(v4, $6); }
              return more(v4$1 => done(state2, $3 + 0.0));
            });
          };
          return more(v2$3 => more(v1$2 => $1(
            Parsing.$ParseState($4, $5, false),
            more,
            lift1,
            (v2$4, $7) => $6(Parsing.$ParseState(v2$4._1, v2$4._2, false), $7),
            (state2$1, a$1) => more(v2$4 => more(v3$2 => $2(
              state2$1,
              more,
              lift1,
              (v2$5, $7) => $6(Parsing.$ParseState(v2$5._1, v2$5._2, false), $7),
              (state3, a$2) => more(v4 => more(v4$1 => done(state3, $3 + a$2)))
            )))
          )));
        });
      }));
    })
  ))));
};
export {foldDigits, foldMap, oneOfAs, parseDigit, parseFractional, parseInteger, parseMaybeInteger, parseNumber};
