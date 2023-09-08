import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Parsing from "../Parsing/index.js";
import * as Parsing$dCombinators from "../Parsing.Combinators/index.js";
import * as Parsing$dString from "../Parsing.String/index.js";
import * as Parsing$dString$dBasic from "../Parsing.String.Basic/index.js";
import * as Partial from "../Partial/index.js";
import * as URI$dCommon from "../URI.Common/index.js";
const $IPv4Address = (_1, _2, _3, _4) => ({tag: "IPv4Address", _1, _2, _3, _4});
const IPv4Address = value0 => value1 => value2 => value3 => $IPv4Address(value0, value1, value2, value3);
const toInt = s => {
  const v = Data$dInt.fromString(s);
  if (v.tag === "Just" && v._1 >= 0 && v._1 <= 255) { return Data$dEither.$Either("Right", v._1); }
  return Data$dEither.$Either("Left", "Invalid IPv4 address octet");
};
const showIPv4Address = {
  show: v => "(IPv4Address.unsafeFromInts " + Data$dShow.showIntImpl(v._1) + " " + Data$dShow.showIntImpl(v._2) + " " + Data$dShow.showIntImpl(v._3) + " " + Data$dShow.showIntImpl(v._4) + ")"
};
const print = v => Data$dShow.showIntImpl(v._1) + "." + Data$dShow.showIntImpl(v._2) + "." + Data$dShow.showIntImpl(v._3) + "." + Data$dShow.showIntImpl(v._4);
const nzDigit = /* #__PURE__ */ Parsing$dString.satisfy(c => c >= "1" && c <= "9");
const octet = /* #__PURE__ */ URI$dCommon.wrapParser(Data$dIdentity.monadIdentity)(toInt)((v2, $0, $1, $2, $3) => {
  const $4 = v2._1;
  const $5 = v2._2;
  return $0(v3 => {
    const $6 = (v4, $6) => {
      const $7 = v4._3;
      return $0(v5 => {
        if ($7) { return $2(v4, $6); }
        const $8 = v2._1;
        const $9 = v2._2;
        return $0(v3$1 => {
          const $10 = (v4$1, $10) => {
            const $11 = v4$1._3;
            return $0(v5$1 => {
              if ($11) { return $2(v4$1, $10); }
              return $0(v1 => Parsing$dString$dBasic.digit(v2, $0, $1, $2, (state2, a) => $0(v2$1 => $3(state2, Data$dString$dCodeUnits.singleton(a)))));
            });
          };
          return $0(v2$1 => $0(v1 => nzDigit(
            Parsing.$ParseState($8, $9, false),
            $0,
            $1,
            (v2$2, $11) => $10(Parsing.$ParseState(v2$2._1, v2$2._2, false), $11),
            (state2, a) => $0(v2$2 => $0(v3$2 => Parsing$dString$dBasic.digit(
              state2,
              $0,
              $1,
              (v2$3, $11) => $10(Parsing.$ParseState(v2$3._1, v2$3._2, false), $11),
              (state3, a$1) => $0(v4$1 => $3(state3, Data$dString$dCodeUnits.fromCharArray([a, a$1])))
            )))
          )));
        });
      });
    };
    return $0(v2$1 => $0(v2$2 => $0(v1 => nzDigit(
      Parsing.$ParseState($4, $5, false),
      $0,
      $1,
      (v2$3, $7) => $6(Parsing.$ParseState(v2$3._1, v2$3._2, false), $7),
      (state2, a) => $0(v2$3 => $0(v3$1 => Parsing$dString$dBasic.digit(
        state2,
        $0,
        $1,
        (v2$4, $7) => $6(Parsing.$ParseState(v2$4._1, v2$4._2, false), $7),
        (state3, a$1) => $0(v4 => $0(v3$2 => Parsing$dString$dBasic.digit(
          state3,
          $0,
          $1,
          (v2$4, $7) => $6(Parsing.$ParseState(v2$4._1, v2$4._2, false), $7),
          (state3$1, a$2) => $0(v4$1 => $3(state3$1, Data$dString$dCodeUnits.fromCharArray([a, a$1, a$2])))
        )))
      )))
    ))));
  });
});
const parser = /* #__PURE__ */ (() => {
  const $0 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "."))("'.'");
  return (state1, more, lift1, $$throw, done) => more(v1 => more(v2 => more(v1$1 => octet(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2$1 => more(v3 => $0(
      state2,
      more,
      lift1,
      $$throw,
      (state3, a$1) => more(v4 => more(v2$2 => {
        const $1 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "."))("'.'");
        return more(v1$2 => more(v2$3 => more(v1$3 => octet(
          state3,
          more,
          lift1,
          $$throw,
          (state2$1, a$2) => more(v2$4 => more(v3$1 => $1(
            state2$1,
            more,
            lift1,
            $$throw,
            (state3$1, a$3) => more(v4$1 => more(v2$5 => {
              const $2 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "."))("'.'");
              return more(v1$4 => more(v2$6 => more(v1$5 => octet(
                state3$1,
                more,
                lift1,
                $$throw,
                (state2$2, a$4) => more(v2$7 => more(v3$2 => $2(
                  state2$2,
                  more,
                  lift1,
                  $$throw,
                  (state3$2, a$5) => more(v4$2 => more(v2$8 => more(v1$6 => octet(
                    state3$2,
                    more,
                    lift1,
                    $$throw,
                    (state2$3, a$6) => more(v2$9 => done(state2$3, $IPv4Address(a, a$2, a$4, a$6)))
                  ))))
                )))
              ))));
            }))
          )))
        ))));
      }))
    )))
  ))));
})();
const fromInts = o1 => o2 => o3 => o4 => Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(o1 >= 0 && o1 <= 255
  ? Data$dMaybe.$Maybe("Just", IPv4Address(o1))
  : Data$dMaybe.Nothing)(o2 >= 0 && o2 <= 255 ? Data$dMaybe.$Maybe("Just", o2) : Data$dMaybe.Nothing))(o3 >= 0 && o3 <= 255 ? Data$dMaybe.$Maybe("Just", o3) : Data$dMaybe.Nothing))(o4 >= 0 && o4 <= 255
  ? Data$dMaybe.$Maybe("Just", o4)
  : Data$dMaybe.Nothing);
const unsafeFromInts = o1 => o2 => o3 => o4 => {
  const v = fromInts(o1)(o2)(o3)(o4);
  if (v.tag === "Just") { return v._1; }
  if (v.tag === "Nothing") { return Partial._crashWith("IPv4Address octet was out of range"); }
  $runtime.fail();
};
const eqIPv4Address = {eq: x => y => x._1 === y._1 && x._2 === y._2 && x._3 === y._3 && x._4 === y._4};
const ordIPv4Address = {
  compare: x => y => {
    const v = Data$dOrd.ordInt.compare(x._1)(y._1);
    if (v === "LT") { return Data$dOrdering.LT; }
    if (v === "GT") { return Data$dOrdering.GT; }
    const v1 = Data$dOrd.ordInt.compare(x._2)(y._2);
    if (v1 === "LT") { return Data$dOrdering.LT; }
    if (v1 === "GT") { return Data$dOrdering.GT; }
    const v2 = Data$dOrd.ordInt.compare(x._3)(y._3);
    if (v2 === "LT") { return Data$dOrdering.LT; }
    if (v2 === "GT") { return Data$dOrdering.GT; }
    return Data$dOrd.ordInt.compare(x._4)(y._4);
  },
  Eq0: () => eqIPv4Address
};
export {$IPv4Address, IPv4Address, eqIPv4Address, fromInts, nzDigit, octet, ordIPv4Address, parser, print, showIPv4Address, toInt, unsafeFromInts};
