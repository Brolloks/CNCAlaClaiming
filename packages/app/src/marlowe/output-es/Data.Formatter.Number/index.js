// | This module has no support of percents and currencies.
// | Please, note that using simple formatter that tabulates number with
// | zeros and put commas between thousands should be enough for everything
// | because one could just compose it with `flip append "%"` or whatever
import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFormatter$dParser$dNumber from "../Data.Formatter.Parser.Number/index.js";
import * as Data$dFormatter$dParser$dUtils from "../Data.Formatter.Parser.Utils/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dNumber from "../Data.Number/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Data$dString$dCodePoints from "../Data.String.CodePoints/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Parsing from "../Parsing/index.js";
import * as Parsing$dCombinators from "../Parsing.Combinators/index.js";
import * as Parsing$dString from "../Parsing.String/index.js";
import * as Parsing$dString$dBasic from "../Parsing.String.Basic/index.js";
import {showNumberAsInt} from "./foreign.js";
const parseDigit = /* #__PURE__ */ Data$dFormatter$dParser$dNumber.parseDigit(Data$dIdentity.monadIdentity);
const foldDigits = /* #__PURE__ */ Data$dFoldable.foldlArray(acc => d => (acc * 10 | 0) + d | 0)(0);
const max = x => y => {
  const v = Data$dOrd.ordInt.compare(x)(y);
  if (v === "LT") { return y; }
  if (v === "EQ") { return x; }
  if (v === "GT") { return x; }
  $runtime.fail();
};
const Formatter = x => x;
const unformatParser = v => {
  const $0 = Parsing$dCombinators.optionMaybe((v1, $0, $1, $2, $3) => {
    const $4 = v1._3;
    return Parsing$dString.string("-")(v1, $0, $1, (v2, $5) => $2(Parsing.$ParseState(v2._1, v2._2, $4), $5), $3);
  });
  return (state1, more, lift1, $$throw, done) => more(v1 => $0(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2 => {
      const $1 = (() => {
        if (a.tag === "Nothing") {
          if (v.sign) {
            return (state1$1, more$1, lift1$1, throw$1, done$1) => more$1(v1$1 => Parsing$dString.string("+")(
              state1$1,
              more$1,
              lift1$1,
              throw$1,
              (state2$1, a$1) => more$1(v2$1 => done$1(state2$1, 1.0))
            ));
          }
          return (state1$1, v$1, v1$1, v2$1, done$1) => done$1(state1$1, 1.0);
        }
        if (a.tag === "Just") { return (state1$1, v$1, v1$1, v2$1, done$1) => done$1(state1$1, -1.0); }
        $runtime.fail();
      })();
      return more(v1$1 => $1(
        state2,
        more,
        lift1,
        $$throw,
        (state2$1, a$1) => more(v2$1 => (() => {
          const digitsWithCommas$p = accum => {
            const $2 = Data$dArray.some(Parsing.alternativeParserT)(Parsing.lazyParserT)(parseDigit);
            return (state1$1, more$1, lift1$1, throw$1, done$1) => more$1(v1$2 => $2(
              state1$1,
              more$1,
              lift1$1,
              throw$1,
              (state2$2, a$2) => more$1(v2$2 => {
                const $3 = accum.length === 0 && a$2.length > 3
                  ? Parsing.fail("Wrong number of digits between thousand separators")
                  : (state1$2, v$1, v1$3, v2$3, done$2) => done$2(state1$2, undefined);
                return more$1(v1$3 => $3(
                  state2$2,
                  more$1,
                  lift1$1,
                  throw$1,
                  (state2$3, a$3) => more$1(v2$3 => {
                    const $4 = a$2.length !== 3
                      ? Parsing.fail("Wrong number of digits between thousand separators")
                      : (state1$2, v$1, v1$4, v2$4, done$2) => done$2(state1$2, undefined);
                    return more$1(v1$4 => $4(
                      state2$3,
                      more$1,
                      lift1$1,
                      throw$1,
                      (state2$4, a$4) => more$1(v2$4 => {
                        const $5 = Parsing$dString$dBasic.oneOf([",", "."]);
                        return more$1(v1$5 => $5(
                          state2$4,
                          more$1,
                          lift1$1,
                          throw$1,
                          (state2$5, a$5) => more$1(v2$5 => {
                            if (a$5 === ".") { return done$1(state2$5, [...accum, ...a$2]); }
                            if (a$5 === ",") { return digitsWithCommas$p([...accum, ...a$2])(state2$5, more$1, lift1$1, throw$1, done$1); }
                            return Parsing.fail("Incorrect symbol, expected ',' or '.'")(state2$5, more$1, lift1$1, throw$1, done$1);
                          })
                        ));
                      })
                    ));
                  })
                ));
              })
            ));
          };
          const $2 = (() => {
            if (!v.comma) {
              const $2 = Data$dArray.some(Parsing.alternativeParserT)(Parsing.lazyParserT)(parseDigit);
              return (state1$1, more$1, lift1$1, throw$1, done$1) => more$1(v2$2 => more$1(v1$2 => $2(
                state1$1,
                more$1,
                lift1$1,
                throw$1,
                (state2$2, a$2) => more$1(v2$3 => more$1(v3 => Parsing$dString.string(".")(state2$2, more$1, lift1$1, throw$1, (state3, a$3) => more$1(v4 => done$1(state3, a$2)))))
              )));
            }
            return digitsWithCommas$p([]);
          })();
          return (state1$1, more$1, lift1$1, throw$1, done$1) => more$1(v1$2 => $2(
            state1$1,
            more$1,
            lift1$1,
            throw$1,
            (state2$2, a$2) => more$1(v2$2 => {
              const $3 = (() => {
                if (a$2.length < v.before) { return Parsing.fail("Error: too few digits before dot"); }
                const $3 = Data$dInt.toNumber(foldDigits(a$2));
                return (state1$2, v$1, v1$3, v2$3, done$2) => done$2(state1$2, $3);
              })();
              return more$1(v1$3 => $3(
                state2$2,
                more$1,
                lift1$1,
                throw$1,
                (state2$3, a$3) => more$1(v2$3 => {
                  const $4 = Data$dArray.some(Parsing.alternativeParserT)(Parsing.lazyParserT)(parseDigit);
                  return more$1(v1$4 => $4(
                    state2$3,
                    more$1,
                    lift1$1,
                    throw$1,
                    (state2$4, a$4) => more$1(v2$4 => {
                      const $5 = (() => {
                        if (a$4.length < v.after) { return Parsing.fail("Error: too few digits after dot"); }
                        const $5 = Data$dInt.toNumber(foldDigits(a$4));
                        return (state1$2, v$1, v1$5, v2$5, done$2) => done$2(state1$2, $5);
                      })();
                      return more$1(v1$5 => $5(
                        state2$4,
                        more$1,
                        lift1$1,
                        throw$1,
                        (state2$5, a$5) => more$1(v2$5 => {
                          const $6 = (() => {
                            if (v.abbreviations) {
                              const $6 = Parsing$dCombinators.optionMaybe((() => {
                                const $6 = Parsing$dString$dBasic.oneOf(["K", "M", "G", "T", "P", "E", "Z", "Y"]);
                                return (v1$6, $7, $8, $9, $10) => {
                                  const $11 = v1$6._3;
                                  return $6(v1$6, $7, $8, (v2$6, $12) => $9(Parsing.$ParseState(v2$6._1, v2$6._2, $11), $12), $10);
                                };
                              })());
                              return (state1$2, more$2, lift1$2, throw$2, done$2) => more$2(v1$6 => $6(
                                state1$2,
                                more$2,
                                lift1$2,
                                throw$2,
                                (state2$6, a$6) => more$2(v2$6 => {
                                  if (a$6.tag === "Nothing") {
                                    return more$2(v1$7 => Parsing$dCombinators.optionMaybe(Parsing$dString.string("10e+"))(
                                      state2$6,
                                      more$2,
                                      lift1$2,
                                      throw$2,
                                      (state2$7, a$7) => more$2(v2$7 => {
                                        if (a$7.tag === "Nothing") { return done$2(state2$7, 0); }
                                        if (a$7.tag === "Just") {
                                          const $7 = Data$dArray.many(Parsing.alternativeParserT)(Parsing.lazyParserT)(parseDigit);
                                          return more$2(v1$8 => $7(state2$7, more$2, lift1$2, throw$2, (state2$8, a$8) => more$2(v2$8 => done$2(state2$8, foldDigits(a$8)))));
                                        }
                                        $runtime.fail();
                                      })
                                    ));
                                  }
                                  if (a$6.tag === "Just") {
                                    if (a$6._1 === "K") { return done$2(state2$6, 3); }
                                    if (a$6._1 === "M") { return done$2(state2$6, 6); }
                                    if (a$6._1 === "G") { return done$2(state2$6, 9); }
                                    if (a$6._1 === "T") { return done$2(state2$6, 12); }
                                    if (a$6._1 === "P") { return done$2(state2$6, 15); }
                                    if (a$6._1 === "E") { return done$2(state2$6, 18); }
                                    if (a$6._1 === "Z") { return done$2(state2$6, 21); }
                                    if (a$6._1 === "Y") { return done$2(state2$6, 24); }
                                  }
                                  return done$2(state2$6, 0);
                                })
                              ));
                            }
                            return (state1$2, v$1, v1$6, v2$6, done$2) => done$2(state1$2, 0);
                          })();
                          return more$1(v1$6 => $6(
                            state2$5,
                            more$1,
                            lift1$1,
                            throw$1,
                            (state2$6, a$6) => more$1(v2$6 => done$1(
                              state2$6,
                              Data$dNumber.pow(10.0)(Data$dInt.toNumber(a$6)) * a$1 * (a$3 + a$5 / Data$dNumber.pow(10.0)(Data$dInt.toNumber(v.after)))
                            ))
                          ));
                        })
                      ));
                    })
                  ));
                })
              ));
            })
          ));
        })()(state2$1, more, lift1, $$throw, done))
      ));
    })
  ));
};
const unformat = x => Data$dFormatter$dParser$dUtils.runP(unformatParser(x));
const printFormatter = v => {
  const repeat$p = repeat$p$a0$copy => repeat$p$a1$copy => repeat$p$a2$copy => {
    let repeat$p$a0 = repeat$p$a0$copy, repeat$p$a1 = repeat$p$a1$copy, repeat$p$a2 = repeat$p$a2$copy, repeat$p$c = true, repeat$p$r;
    while (repeat$p$c) {
      const v$1 = repeat$p$a0, v1 = repeat$p$a1, v2 = repeat$p$a2;
      if (v2 < 1) {
        repeat$p$c = false;
        repeat$p$r = v$1;
        continue;
      }
      repeat$p$a0 = v$1 + v1;
      repeat$p$a1 = v1;
      repeat$p$a2 = v2 - 1 | 0;
    }
    return repeat$p$r;
  };
  const repeat$p$1 = repeat$p$1$a0$copy => repeat$p$1$a1$copy => repeat$p$1$a2$copy => {
    let repeat$p$1$a0 = repeat$p$1$a0$copy, repeat$p$1$a1 = repeat$p$1$a1$copy, repeat$p$1$a2 = repeat$p$1$a2$copy, repeat$p$1$c = true, repeat$p$1$r;
    while (repeat$p$1$c) {
      const v$1 = repeat$p$1$a0, v1 = repeat$p$1$a1, v2 = repeat$p$1$a2;
      if (v2 < 1) {
        repeat$p$1$c = false;
        repeat$p$1$r = v$1;
        continue;
      }
      repeat$p$1$a0 = v$1 + v1;
      repeat$p$1$a1 = v1;
      repeat$p$1$a2 = v2 - 1 | 0;
    }
    return repeat$p$1$r;
  };
  if (v.sign) {
    return "+" + repeat$p("")("0")(v.before - 1 | 0) + (v.comma
      ? (v.after > 0 ? "0,0." + repeat$p$1("")("0")(v.after) : "0,0" + repeat$p$1("")("0")(v.after)) + (v.abbreviations ? "a" : "")
      : (v.after > 0 ? "0." + repeat$p$1("")("0")(v.after) : "0" + repeat$p$1("")("0")(v.after)) + (v.abbreviations ? "a" : ""));
  }
  return "" + repeat$p("")("0")(v.before - 1 | 0) + (v.comma
    ? (v.after > 0 ? "0,0." + repeat$p$1("")("0")(v.after) : "0,0" + repeat$p$1("")("0")(v.after)) + (v.abbreviations ? "a" : "")
    : (v.after > 0 ? "0." + repeat$p$1("")("0")(v.after) : "0" + repeat$p$1("")("0")(v.after)) + (v.abbreviations ? "a" : ""));
};
const newtypeFormatter = {Coercible0: () => {}};
const genericFormatter = {to: x => x, from: x => x};
const showFormatter = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor({
      genericShowArgs: v => [
        (v.abbreviations ? "{ abbreviations: true, after: " : "{ abbreviations: false, after: ") + Data$dShow.showIntImpl(v.after) + ", before: " + Data$dShow.showIntImpl(v.before) + "," + (v.comma
          ? " comma: true"
          : " comma: false") + ", sign: " + (v.sign ? "true" : "false") + " }"
      ]
    })({reflectSymbol: () => "Formatter"});
    return x => $0["genericShow'"](x);
  })()
};
const formatParser = /* #__PURE__ */ (() => {
  const $0 = Parsing$dCombinators.optionMaybe((v1, $0, $1, $2, $3) => {
    const $4 = v1._3;
    return Parsing$dString.string("+")(v1, $0, $1, (v2, $5) => $2(Parsing.$ParseState(v2._1, v2._2, $4), $5), $3);
  });
  return (state1, more, lift1, $$throw, done) => more(v1 => $0(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2 => {
      const $1 = Data$dArray.some(Parsing.alternativeParserT)(Parsing.lazyParserT)(Parsing$dString.string("0"));
      return more(v1$1 => $1(
        state2,
        more,
        lift1,
        $$throw,
        (state2$1, a$1) => more(v2$1 => {
          const $2 = Parsing$dCombinators.optionMaybe((v1$2, $2, $3, $4, $5) => {
            const $6 = v1$2._3;
            return Parsing$dString.string(",0")(v1$2, $2, $3, (v2$2, $7) => $4(Parsing.$ParseState(v2$2._1, v2$2._2, $6), $7), $5);
          });
          return more(v1$2 => $2(
            state2$1,
            more,
            lift1,
            $$throw,
            (state2$2, a$2) => more(v2$2 => {
              const $3 = Parsing$dCombinators.optionMaybe((v1$3, $3, $4, $5, $6) => {
                const $7 = v1$3._3;
                return Parsing$dString.string(".")(v1$3, $3, $4, (v2$3, $8) => $5(Parsing.$ParseState(v2$3._1, v2$3._2, $7), $8), $6);
              });
              return more(v1$3 => $3(
                state2$2,
                more,
                lift1,
                $$throw,
                (state2$3, a$3) => more(v2$3 => {
                  const $4 = Data$dTraversable.traversableMaybe.traverse(Parsing.applicativeParserT)(v => {
                    const $4 = Data$dArray.many(Parsing.alternativeParserT)(Parsing.lazyParserT)(Parsing$dString.string("0"));
                    return (v1$4, $5, $6, $7, $8) => {
                      const $9 = v1$4._3;
                      return $4(v1$4, $5, $6, (v2$4, $10) => $7(Parsing.$ParseState(v2$4._1, v2$4._2, $9), $10), $8);
                    };
                  })(a$3);
                  return more(v1$4 => $4(
                    state2$3,
                    more,
                    lift1,
                    $$throw,
                    (state2$4, a$4) => more(v2$4 => {
                      const $5 = Parsing$dCombinators.optionMaybe((v1$5, $5, $6, $7, $8) => {
                        const $9 = v1$5._3;
                        return Parsing$dString.string("a")(v1$5, $5, $6, (v2$5, $10) => $7(Parsing.$ParseState(v2$5._1, v2$5._2, $9), $10), $8);
                      });
                      return more(v1$5 => $5(
                        state2$4,
                        more,
                        lift1,
                        $$throw,
                        (state2$5, a$5) => more(v2$5 => done(
                          state2$5,
                          {
                            sign: (() => {
                              if (a.tag === "Nothing") { return false; }
                              if (a.tag === "Just") { return true; }
                              $runtime.fail();
                            })(),
                            before: a$1.length,
                            comma: (() => {
                              if (a$2.tag === "Nothing") { return false; }
                              if (a$2.tag === "Just") { return true; }
                              $runtime.fail();
                            })(),
                            after: a$4.tag === "Just" ? a$4._1.length : 0,
                            abbreviations: (() => {
                              if (a$5.tag === "Nothing") { return false; }
                              if (a$5.tag === "Just") { return true; }
                              $runtime.fail();
                            })()
                          }
                        ))
                      ));
                    })
                  ));
                })
              ));
            })
          ));
        })
      ));
    })
  ));
})();
const parseFormatString = /* #__PURE__ */ Data$dFormatter$dParser$dUtils.runP(formatParser);
const unformatNumber = pattern => str => {
  const $0 = Data$dFormatter$dParser$dUtils.runP(formatParser)(pattern);
  return (() => {
    if ($0.tag === "Left") {
      const $1 = $0._1;
      return v => Data$dEither.$Either("Left", $1);
    }
    if ($0.tag === "Right") {
      const $1 = $0._1;
      return f => f($1);
    }
    $runtime.fail();
  })()(a => Data$dFormatter$dParser$dUtils.runP(unformatParser(a))(str));
};
const format = v => num => {
  const absed = Data$dNumber.abs(num);
  const tens = absed > 0.0 ? max(Data$dInt.unsafeClamp(Data$dNumber.floor(Data$dNumber.log(absed) / 2.302585092994046)))(0) : 0;
  if (v.abbreviations) {
    const thousands = $runtime.intDiv(tens, 3);
    return format({comma: v.comma, before: v.before, after: v.after, abbreviations: false, sign: v.sign})(thousands < 1
      ? num
      : num / Data$dNumber.pow(1000.0)(Data$dInt.toNumber(thousands))) + (() => {
      if (thousands === 0) { return ""; }
      if (thousands === 1) { return "K"; }
      if (thousands === 2) { return "M"; }
      if (thousands === 3) { return "G"; }
      if (thousands === 4) { return "T"; }
      if (thousands === 5) { return "P"; }
      if (thousands === 6) { return "E"; }
      if (thousands === 7) { return "Z"; }
      if (thousands === 8) { return "Y"; }
      return "10e+" + Data$dShow.showIntImpl(thousands * 3 | 0);
    })();
  }
  const zeros = (v.before - tens | 0) - 1 | 0;
  const factor = Data$dNumber.pow(10.0)(Data$dInt.toNumber(max(0)(v.after)));
  const rounded = Data$dNumber.round(absed * factor) / factor;
  const integer = Data$dNumber.floor(rounded);
  const leftover = Data$dNumber.round((rounded - integer) * factor);
  const leftoverString = showNumberAsInt(leftover);
  const repeat$p = repeat$p$a0$copy => repeat$p$a1$copy => repeat$p$a2$copy => {
    let repeat$p$a0 = repeat$p$a0$copy, repeat$p$a1 = repeat$p$a1$copy, repeat$p$a2 = repeat$p$a2$copy, repeat$p$c = true, repeat$p$r;
    while (repeat$p$c) {
      const v$1 = repeat$p$a0, v1 = repeat$p$a1, v2 = repeat$p$a2;
      if (v2 < 1) {
        repeat$p$c = false;
        repeat$p$r = v$1;
        continue;
      }
      repeat$p$a0 = v$1 + v1;
      repeat$p$a1 = v1;
      repeat$p$a2 = v2 - 1 | 0;
    }
    return repeat$p$r;
  };
  const leftoverWithZeros = repeat$p("")("0")(v.after - Data$dString$dCodePoints.toCodePointArray(leftoverString).length | 0) + leftoverString;
  const addCommas = addCommas$a0$copy => addCommas$a1$copy => addCommas$a2$copy => {
    let addCommas$a0 = addCommas$a0$copy, addCommas$a1 = addCommas$a1$copy, addCommas$a2 = addCommas$a2$copy, addCommas$c = true, addCommas$r;
    while (addCommas$c) {
      const acc = addCommas$a0, counter = addCommas$a1, input = addCommas$a2;
      const v1 = Data$dArray.uncons(input);
      if (v1.tag === "Nothing") {
        addCommas$c = false;
        addCommas$r = Data$dString$dCodeUnits.fromCharArray(acc);
        continue;
      }
      if (v1.tag === "Just" && counter < 3) {
        addCommas$a0 = [v1._1.head, ...acc];
        addCommas$a1 = counter + 1 | 0;
        addCommas$a2 = v1._1.tail;
        continue;
      }
      addCommas$a0 = [",", ...acc];
      addCommas$a1 = 0;
      addCommas$a2 = input;
    }
    return addCommas$r;
  };
  return (() => {
    if (num < 0.0) { return "-"; }
    if (num > 0.0 && v.sign) { return "+"; }
    return "";
  })() + (() => {
    if (v.comma) {
      return addCommas([])(0)(Data$dArray.reverse(Data$dString$dCodeUnits.toCharArray((() => {
        const repeat$p$1 = repeat$p$1$a0$copy => repeat$p$1$a1$copy => repeat$p$1$a2$copy => {
          let repeat$p$1$a0 = repeat$p$1$a0$copy, repeat$p$1$a1 = repeat$p$1$a1$copy, repeat$p$1$a2 = repeat$p$1$a2$copy, repeat$p$1$c = true, repeat$p$1$r;
          while (repeat$p$1$c) {
            const v$1 = repeat$p$1$a0, v1 = repeat$p$1$a1, v2 = repeat$p$1$a2;
            if (v2 < 1) {
              repeat$p$1$c = false;
              repeat$p$1$r = v$1;
              continue;
            }
            repeat$p$1$a0 = v$1 + v1;
            repeat$p$1$a1 = v1;
            repeat$p$1$a2 = v2 - 1 | 0;
          }
          return repeat$p$1$r;
        };
        return repeat$p$1("")("0")(zeros) + showNumberAsInt(integer);
      })())));
    }
    const repeat$p$1 = repeat$p$1$a0$copy => repeat$p$1$a1$copy => repeat$p$1$a2$copy => {
      let repeat$p$1$a0 = repeat$p$1$a0$copy, repeat$p$1$a1 = repeat$p$1$a1$copy, repeat$p$1$a2 = repeat$p$1$a2$copy, repeat$p$1$c = true, repeat$p$1$r;
      while (repeat$p$1$c) {
        const v$1 = repeat$p$1$a0, v1 = repeat$p$1$a1, v2 = repeat$p$1$a2;
        if (v2 < 1) {
          repeat$p$1$c = false;
          repeat$p$1$r = v$1;
          continue;
        }
        repeat$p$1$a0 = v$1 + v1;
        repeat$p$1$a1 = v1;
        repeat$p$1$a2 = v2 - 1 | 0;
      }
      return repeat$p$1$r;
    };
    return repeat$p$1("")("0")(zeros) + showNumberAsInt(integer);
  })() + (v.after < 1
    ? ""
    : (() => {
        if (leftover === 0.0) {
          const repeat$p$1 = repeat$p$1$a0$copy => repeat$p$1$a1$copy => repeat$p$1$a2$copy => {
            let repeat$p$1$a0 = repeat$p$1$a0$copy, repeat$p$1$a1 = repeat$p$1$a1$copy, repeat$p$1$a2 = repeat$p$1$a2$copy, repeat$p$1$c = true, repeat$p$1$r;
            while (repeat$p$1$c) {
              const v$1 = repeat$p$1$a0, v1 = repeat$p$1$a1, v2 = repeat$p$1$a2;
              if (v2 < 1) {
                repeat$p$1$c = false;
                repeat$p$1$r = v$1;
                continue;
              }
              repeat$p$1$a0 = v$1 + v1;
              repeat$p$1$a1 = v1;
              repeat$p$1$a2 = v2 - 1 | 0;
            }
            return repeat$p$1$r;
          };
          return "." + repeat$p$1("")("0")(v.after);
        }
        return ".";
      })() + (leftover > 0.0 ? leftoverWithZeros : ""));
};
const formatNumber = pattern => number => {
  const $0 = Data$dFormatter$dParser$dUtils.runP(formatParser)(pattern);
  if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
  if ($0.tag === "Right") { return Data$dEither.$Either("Right", format($0._1)(number)); }
  $runtime.fail();
};
const formatOrShowNumber = patter => number => {
  const $0 = Data$dShow.showNumberImpl(number);
  const $1 = formatNumber(patter)(number);
  if ($1.tag === "Left") { return $0; }
  if ($1.tag === "Right") { return $1._1; }
  $runtime.fail();
};
const eqFormatter = {eq: x => y => x.abbreviations === y.abbreviations && x.after === y.after && x.before === y.before && x.comma === y.comma && x.sign === y.sign};
export {
  Formatter,
  eqFormatter,
  foldDigits,
  format,
  formatNumber,
  formatOrShowNumber,
  formatParser,
  genericFormatter,
  max,
  newtypeFormatter,
  parseDigit,
  parseFormatString,
  printFormatter,
  showFormatter,
  unformat,
  unformatNumber,
  unformatParser
};
export * from "./foreign.js";
