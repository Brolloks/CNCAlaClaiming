import * as $runtime from "../runtime.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dArgonaut$dDecode$dError from "../Data.Argonaut.Decode.Error/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dDate from "../Data.Date/index.js";
import * as Data$dDate$dComponent from "../Data.Date.Component/index.js";
import * as Data$dDateTime from "../Data.DateTime/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dSemigroup from "../Data.Semigroup/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dString$dCodePoints from "../Data.String.CodePoints/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data$dTime from "../Data.Time/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Parsing from "../Parsing/index.js";
import * as Parsing$dCombinators from "../Parsing.Combinators/index.js";
import * as Parsing$dString from "../Parsing.String/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const choice = /* #__PURE__ */ Parsing$dCombinators.choice(Data$dFoldable.foldableArray);
const sequence = /* #__PURE__ */ (() => Data$dTraversable.traversableArray.traverse(Parsing.applicativeParserT)(Data$dTraversable.identity))();
const length = /* #__PURE__ */ Data$dFoldable.foldlArray(c => v => 1 + c | 0)(0);
const ISO = x => x;
const removeTrailingZeros = v => {
  if (v === "000") { return "0"; }
  return Data$dString$dCodePoints.fromCodePointArray(Data$dArray.reverse(Data$dArray.span(v1 => v1 === 48)(Data$dArray.reverse(Data$dString$dCodePoints.toCodePointArray(v))).rest));
};
const parseDigit = dictMonad => Parsing$dCombinators.withErrorMessage(choice([
  (() => {
    const $0 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "0"))("'0'");
    return (state1, more, lift1, $$throw, done) => more(v2 => more(v1 => $0(state1, more, lift1, $$throw, (state2, a) => more(v2$1 => more(v3 => more(v4 => done(state2, 0)))))));
  })(),
  (() => {
    const $0 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "1"))("'1'");
    return (state1, more, lift1, $$throw, done) => more(v2 => more(v1 => $0(state1, more, lift1, $$throw, (state2, a) => more(v2$1 => more(v3 => more(v4 => done(state2, 1)))))));
  })(),
  (() => {
    const $0 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "2"))("'2'");
    return (state1, more, lift1, $$throw, done) => more(v2 => more(v1 => $0(state1, more, lift1, $$throw, (state2, a) => more(v2$1 => more(v3 => more(v4 => done(state2, 2)))))));
  })(),
  (() => {
    const $0 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "3"))("'3'");
    return (state1, more, lift1, $$throw, done) => more(v2 => more(v1 => $0(state1, more, lift1, $$throw, (state2, a) => more(v2$1 => more(v3 => more(v4 => done(state2, 3)))))));
  })(),
  (() => {
    const $0 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "4"))("'4'");
    return (state1, more, lift1, $$throw, done) => more(v2 => more(v1 => $0(state1, more, lift1, $$throw, (state2, a) => more(v2$1 => more(v3 => more(v4 => done(state2, 4)))))));
  })(),
  (() => {
    const $0 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "5"))("'5'");
    return (state1, more, lift1, $$throw, done) => more(v2 => more(v1 => $0(state1, more, lift1, $$throw, (state2, a) => more(v2$1 => more(v3 => more(v4 => done(state2, 5)))))));
  })(),
  (() => {
    const $0 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "6"))("'6'");
    return (state1, more, lift1, $$throw, done) => more(v2 => more(v1 => $0(state1, more, lift1, $$throw, (state2, a) => more(v2$1 => more(v3 => more(v4 => done(state2, 6)))))));
  })(),
  (() => {
    const $0 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "7"))("'7'");
    return (state1, more, lift1, $$throw, done) => more(v2 => more(v1 => $0(state1, more, lift1, $$throw, (state2, a) => more(v2$1 => more(v3 => more(v4 => done(state2, 7)))))));
  })(),
  (() => {
    const $0 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "8"))("'8'");
    return (state1, more, lift1, $$throw, done) => more(v2 => more(v1 => $0(state1, more, lift1, $$throw, (state2, a) => more(v2$1 => more(v3 => more(v4 => done(state2, 8)))))));
  })(),
  (() => {
    const $0 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "9"))("'9'");
    return (state1, more, lift1, $$throw, done) => more(v2 => more(v1 => $0(state1, more, lift1, $$throw, (state2, a) => more(v2$1 => more(v3 => more(v4 => done(state2, 9)))))));
  })()
]))("expected digit (0-9)");
const padl$p = padl$p$a0$copy => padl$p$a1$copy => padl$p$a2$copy => {
  let padl$p$a0 = padl$p$a0$copy, padl$p$a1 = padl$p$a1$copy, padl$p$a2 = padl$p$a2$copy, padl$p$c = true, padl$p$r;
  while (padl$p$c) {
    const n = padl$p$a0, chr = padl$p$a1, chrs = padl$p$a2;
    if (n <= 0) {
      padl$p$c = false;
      padl$p$r = chrs;
      continue;
    }
    padl$p$a0 = n - 1 | 0;
    padl$p$a1 = chr;
    padl$p$a2 = [chr, ...chrs];
  }
  return padl$p$r;
};
const padl = n => chr => str => Data$dString$dCodeUnits.fromCharArray(padl$p(n - Data$dString$dCodePoints.toCodePointArray(str).length | 0)(chr)(Data$dString$dCodeUnits.toCharArray(str)));
const showISO = {
  show: v => Data$dFoldable.foldlArray(Data$dSemigroup.concatString)("")([
    Data$dShow.showIntImpl(v._1._1),
    "-",
    padl(2)("0")(Data$dShow.showIntImpl((() => {
      if (v._1._2 === "January") { return 1; }
      if (v._1._2 === "February") { return 2; }
      if (v._1._2 === "March") { return 3; }
      if (v._1._2 === "April") { return 4; }
      if (v._1._2 === "May") { return 5; }
      if (v._1._2 === "June") { return 6; }
      if (v._1._2 === "July") { return 7; }
      if (v._1._2 === "August") { return 8; }
      if (v._1._2 === "September") { return 9; }
      if (v._1._2 === "October") { return 10; }
      if (v._1._2 === "November") { return 11; }
      if (v._1._2 === "December") { return 12; }
      $runtime.fail();
    })())),
    "-",
    padl(2)("0")(Data$dShow.showIntImpl(v._1._3)),
    "T",
    padl(2)("0")(Data$dShow.showIntImpl(v._2._1)),
    ":",
    padl(2)("0")(Data$dShow.showIntImpl(v._2._2)),
    ":",
    padl(2)("0")(Data$dShow.showIntImpl(v._2._3)),
    ".",
    removeTrailingZeros(padl(3)("0")(Data$dShow.showIntImpl(v._2._4))),
    "Z"
  ])
};
const newtypeISO = {Coercible0: () => {}};
const unwrapISO = Unsafe$dCoerce.unsafeCoerce;
const maybeFail = dictMonad => str => v2 => {
  if (v2.tag === "Nothing") { return Parsing.fail(str); }
  if (v2.tag === "Just") {
    const $0 = v2._1;
    return (state1, v, v1, v2$1, done) => done(state1, $0);
  }
  $runtime.fail();
};
const foldDigits1 = /* #__PURE__ */ Data$dFoldable.foldlArray(acc => d => (acc * 10 | 0) + d | 0)(0);
const parseDigits = dictMonad => {
  const $0 = parseDigit(dictMonad);
  return x => {
    const $1 = sequence(Data$dArray.replicate(x)($0));
    return (state1, more, lift1, $$throw, done) => more(v1 => $1(state1, more, lift1, $$throw, (state2, a) => more(v2 => done(state2, foldDigits1(a)))));
  };
};
const parseISODate = dictMonad => {
  const parseDigits1 = parseDigits(dictMonad);
  const $0 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "-"))("'-'");
  const dash = (v2, $1, $2, $3, $4) => {
    const $5 = v2._1;
    const $6 = v2._2;
    return $1(v3 => $1(v1 => $0(Parsing.$ParseState($5, $6, false), $1, $2, (v2$1, $7) => $1(v5 => $4(v2, undefined)), (state2, a) => $1(v2$1 => $4(state2, undefined)))));
  };
  const $1 = parseDigits1(4);
  return (state1, more, lift1, $$throw, done) => more(v1 => more(v1$1 => more(v1$2 => $1(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2 => {
      const $2 = a >= -271820 && a <= 275759 ? Data$dMaybe.$Maybe("Just", a) : Data$dMaybe.Nothing;
      return more(v2$1 => maybeFail(dictMonad)("bad year")($2)(
        state2,
        more,
        lift1,
        $$throw,
        (state2$1, a$1) => more(v2$2 => more(v1$3 => dash(
          state2$1,
          more,
          lift1,
          $$throw,
          (state2$2, a$2) => more(v2$3 => {
            const $3 = parseDigits1(2);
            return more(v1$4 => more(v1$5 => more(v1$6 => $3(
              state2$2,
              more,
              lift1,
              $$throw,
              (state2$3, a$3) => more(v2$4 => {
                const $4 = Data$dDate$dComponent.boundedEnumMonth.toEnum(a$3);
                return more(v2$5 => maybeFail(dictMonad)("bad month")($4)(
                  state2$3,
                  more,
                  lift1,
                  $$throw,
                  (state2$4, a$4) => more(v2$6 => more(v1$7 => dash(
                    state2$4,
                    more,
                    lift1,
                    $$throw,
                    (state2$5, a$5) => more(v2$7 => {
                      const $5 = parseDigits1(2);
                      return more(v1$8 => more(v1$9 => more(v1$10 => $5(
                        state2$5,
                        more,
                        lift1,
                        $$throw,
                        (state2$6, a$6) => more(v2$8 => {
                          const $6 = a$6 >= 1 && a$6 <= 31 ? Data$dMaybe.$Maybe("Just", a$6) : Data$dMaybe.Nothing;
                          return more(v2$9 => maybeFail(dictMonad)("bad day")($6)(
                            state2$6,
                            more,
                            lift1,
                            $$throw,
                            (state2$7, a$7) => more(v2$10 => maybeFail(dictMonad)("bad date")(Data$dDate.exactDate(a$1)(a$4)(a$7))(state2$7, more, lift1, $$throw, done))
                          ));
                        })
                      ))));
                    })
                  )))
                ));
              })
            ))));
          })
        )))
      ));
    })
  ))));
};
const encodeJsonISO = {encodeJson: x => Data$dArgonaut$dCore.fromString(showISO.show(x))};
const doMilli = ns => {
  const $0 = foldDigits1(Data$dArray.slice(0)(3)([...ns, ...Data$dArray.replicate(3 - length(ns) | 0)(0)]));
  if ($0 >= 0 && $0 <= 999) { return $0; }
  return 999;
};
const parseISOTime = dictMonad => {
  const parseDigits1 = parseDigits(dictMonad);
  const parseDigit1 = parseDigit(dictMonad);
  const $0 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === ":"))("':'");
  const colon = (v2, $1, $2, $3, $4) => {
    const $5 = v2._1;
    const $6 = v2._2;
    return $1(v3 => $1(v1 => $0(Parsing.$ParseState($5, $6, false), $1, $2, (v2$1, $7) => $1(v5 => $4(v2, undefined)), (state2, a) => $1(v2$1 => $4(state2, undefined)))));
  };
  const $1 = parseDigits1(2);
  return (state1, more, lift1, $$throw, done) => more(v1 => more(v1$1 => more(v1$2 => $1(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2 => {
      const $2 = a >= 0 && a <= 23 ? Data$dMaybe.$Maybe("Just", a) : Data$dMaybe.Nothing;
      return more(v2$1 => maybeFail(dictMonad)("bad hour")($2)(
        state2,
        more,
        lift1,
        $$throw,
        (state2$1, a$1) => more(v2$2 => more(v1$3 => colon(
          state2$1,
          more,
          lift1,
          $$throw,
          (state2$2, a$2) => more(v2$3 => {
            const $3 = parseDigits1(2);
            return more(v1$4 => more(v1$5 => more(v1$6 => $3(
              state2$2,
              more,
              lift1,
              $$throw,
              (state2$3, a$3) => more(v2$4 => {
                const $4 = a$3 >= 0 && a$3 <= 59 ? Data$dMaybe.$Maybe("Just", a$3) : Data$dMaybe.Nothing;
                return more(v2$5 => maybeFail(dictMonad)("bad minute")($4)(
                  state2$3,
                  more,
                  lift1,
                  $$throw,
                  (state2$4, a$4) => more(v2$6 => more(v1$7 => colon(
                    state2$4,
                    more,
                    lift1,
                    $$throw,
                    (state2$5, a$5) => more(v2$7 => {
                      const $5 = parseDigits1(2);
                      return more(v1$8 => more(v1$9 => more(v1$10 => $5(
                        state2$5,
                        more,
                        lift1,
                        $$throw,
                        (state2$6, a$6) => more(v2$8 => {
                          const $6 = a$6 >= 0 && a$6 <= 59 ? Data$dMaybe.$Maybe("Just", a$6) : Data$dMaybe.Nothing;
                          return more(v2$9 => maybeFail(dictMonad)("bad second")($6)(
                            state2$6,
                            more,
                            lift1,
                            $$throw,
                            (state2$7, a$7) => more(v2$10 => {
                              const $7 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "."))("'.'");
                              const $8 = Data$dArray.some(Parsing.alternativeParserT)(Parsing.lazyParserT)(parseDigit1);
                              return more(v1$11 => {
                                const $9 = state2$7._1;
                                const $10 = state2$7._2;
                                return more(v3 => {
                                  const $11 = (v4, $11) => {
                                    const $12 = v4._3;
                                    return more(v5 => {
                                      if ($12) { return $$throw(v4, $11); }
                                      return more(v2$11 => done(state2$7, Data$dTime.$Time(a$1, a$4, a$7, 0)));
                                    });
                                  };
                                  return more(v1$12 => more(v2$11 => more(v1$13 => $7(
                                    Parsing.$ParseState($9, $10, false),
                                    more,
                                    lift1,
                                    (v2$12, $12) => $11(Parsing.$ParseState(v2$12._1, v2$12._2, false), $12),
                                    (state2$8, a$8) => more(v2$12 => more(v3$1 => $8(
                                      state2$8,
                                      more,
                                      lift1,
                                      $11,
                                      (state3, a$9) => more(v4 => more(v2$13 => {
                                        const $12 = doMilli(a$9);
                                        return more(v2$14 => done(state3, Data$dTime.$Time(a$1, a$4, a$7, $12)));
                                      }))
                                    )))
                                  ))));
                                });
                              });
                            })
                          ));
                        })
                      ))));
                    })
                  )))
                ));
              })
            ))));
          })
        )))
      ));
    })
  ))));
};
const parseISO = dictMonad => {
  const parseISOTime1 = parseISOTime(dictMonad);
  const $0 = parseISODate(dictMonad);
  return (state1, more, lift1, $$throw, done) => more(v1 => $0(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2 => {
      const $1 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "T"))("'T'");
      return more(v1$1 => $1(
        state2,
        more,
        lift1,
        $$throw,
        (state2$1, a$1) => more(v2$1 => more(v1$2 => parseISOTime1(
          state2$1,
          more,
          lift1,
          $$throw,
          (state2$2, a$2) => more(v2$2 => done(state2$2, Data$dDateTime.$DateTime(a, a$2)))
        )))
      ));
    })
  ));
};
const parseISO1 = /* #__PURE__ */ parseISO(Data$dIdentity.monadIdentity);
const decodeJsonISO = {
  decodeJson: json => {
    const $0 = Data$dArgonaut$dCore._caseJson(
      v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
      v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
      v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
      Data$dEither.Right,
      v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
      v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
      json
    );
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
    })()(string => {
      const $1 = Parsing.runParserT1(string)(parseISO1);
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "ISO-formatted date-time: " + $1._1._1)); }
      if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1); }
      $runtime.fail();
    });
  }
};
export {
  ISO,
  choice,
  decodeJsonISO,
  doMilli,
  encodeJsonISO,
  foldDigits1,
  length,
  maybeFail,
  newtypeISO,
  padl,
  padl$p,
  parseDigit,
  parseDigits,
  parseISO,
  parseISO1,
  parseISODate,
  parseISOTime,
  removeTrailingZeros,
  sequence,
  showISO,
  unwrapISO
};
