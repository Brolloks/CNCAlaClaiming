import * as $runtime from "../runtime.js";
import * as Control$dMonad$dReader$dTrans from "../Control.Monad.Reader.Trans/index.js";
import * as Control$dMonad$dRec$dClass from "../Control.Monad.Rec.Class/index.js";
import * as Control$dMonad$dState$dTrans from "../Control.Monad.State.Trans/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dDate from "../Data.Date/index.js";
import * as Data$dDate$dComponent from "../Data.Date.Component/index.js";
import * as Data$dDateTime from "../Data.DateTime/index.js";
import * as Data$dDateTime$dInstant from "../Data.DateTime.Instant/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dEuclideanRing from "../Data.EuclideanRing/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFormatter$dParser$dNumber from "../Data.Formatter.Parser.Number/index.js";
import * as Data$dFormatter$dParser$dUtils from "../Data.Formatter.Parser.Utils/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dList from "../Data.List/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dNumber from "../Data.Number/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Data$dString$dCodePoints from "../Data.String.CodePoints/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data$dTime from "../Data.Time/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Parsing from "../Parsing/index.js";
import * as Parsing$dCombinators from "../Parsing.Combinators/index.js";
import * as Parsing$dString from "../Parsing.String/index.js";
import * as Parsing$dString$dBasic from "../Parsing.String.Basic/index.js";
const $FormatterCommand = (tag, _1) => ({tag, _1});
const $Meridiem = tag => tag;
const bind = /* #__PURE__ */ (() => Control$dMonad$dReader$dTrans.bindReaderT(Data$dEither.bindEither).bind)();
const for_ = /* #__PURE__ */ Data$dFoldable.for_(Data$dEither.applicativeEither)(Data$dFoldable.foldableArray);
const foldMap1 = /* #__PURE__ */ (() => Data$dList$dTypes.foldableList.foldMap(Data$dMonoid.monoidString))();
const oneOfAs = /* #__PURE__ */ Data$dFormatter$dParser$dUtils.oneOfAs(Data$dFunctor.functorArray)(Data$dFoldable.foldableArray);
const negate = a => -a;
const identity = x => x;
const monadStateT = {
  Applicative0: () => Control$dMonad$dState$dTrans.applicativeStateT(Data$dIdentity.monadIdentity),
  Bind1: () => Control$dMonad$dState$dTrans.bindStateT(Data$dIdentity.monadIdentity)
};
const lift1 = m => (state1, v, lift$p, v1, done) => lift$p(Control$dMonad$dState$dTrans.bindStateT(Data$dIdentity.monadIdentity).Apply0().Functor0().map(a => v2 => done(state1, a))(m));
const monadStateStateT = /* #__PURE__ */ Control$dMonad$dState$dTrans.monadStateStateT(Data$dIdentity.monadIdentity);
const parseDigit = /* #__PURE__ */ Data$dFormatter$dParser$dNumber.parseDigit(monadStateT);
const mapParserT = /* #__PURE__ */ Parsing.mapParserT(/* #__PURE__ */ Control$dMonad$dState$dTrans.monadRecStateT(Control$dMonad$dRec$dClass.monadRecIdentity));
const foldMap2 = /* #__PURE__ */ (() => Data$dList$dTypes.foldableList.foldMap(Parsing.monoidParserT(Data$dMonoid.monoidUnit)))();
const AM = /* #__PURE__ */ $Meridiem("AM");
const PM = /* #__PURE__ */ $Meridiem("PM");
const YearFull = /* #__PURE__ */ $FormatterCommand("YearFull");
const YearTwoDigits = /* #__PURE__ */ $FormatterCommand("YearTwoDigits");
const YearAbsolute = /* #__PURE__ */ $FormatterCommand("YearAbsolute");
const MonthFull = /* #__PURE__ */ $FormatterCommand("MonthFull");
const MonthShort = /* #__PURE__ */ $FormatterCommand("MonthShort");
const MonthTwoDigits = /* #__PURE__ */ $FormatterCommand("MonthTwoDigits");
const DayOfMonthTwoDigits = /* #__PURE__ */ $FormatterCommand("DayOfMonthTwoDigits");
const DayOfMonth = /* #__PURE__ */ $FormatterCommand("DayOfMonth");
const UnixTimestamp = /* #__PURE__ */ $FormatterCommand("UnixTimestamp");
const DayOfWeek = /* #__PURE__ */ $FormatterCommand("DayOfWeek");
const DayOfWeekName = /* #__PURE__ */ $FormatterCommand("DayOfWeekName");
const DayOfWeekNameShort = /* #__PURE__ */ $FormatterCommand("DayOfWeekNameShort");
const Hours24 = /* #__PURE__ */ $FormatterCommand("Hours24");
const Hours12 = /* #__PURE__ */ $FormatterCommand("Hours12");
const Meridiem = /* #__PURE__ */ $FormatterCommand("Meridiem");
const Minutes = /* #__PURE__ */ $FormatterCommand("Minutes");
const MinutesTwoDigits = /* #__PURE__ */ $FormatterCommand("MinutesTwoDigits");
const Seconds = /* #__PURE__ */ $FormatterCommand("Seconds");
const SecondsTwoDigits = /* #__PURE__ */ $FormatterCommand("SecondsTwoDigits");
const Milliseconds = /* #__PURE__ */ $FormatterCommand("Milliseconds");
const MillisecondsShort = /* #__PURE__ */ $FormatterCommand("MillisecondsShort");
const MillisecondsTwoDigits = /* #__PURE__ */ $FormatterCommand("MillisecondsTwoDigits");
const Placeholder = value0 => $FormatterCommand("Placeholder", value0);
const validateRange = min => max => bind(Data$dEither.Right)(v => {
  const $0 = v.num < min || v.num > max
    ? Data$dEither.$Either("Left", "Number is out of range [ " + Data$dShow.showIntImpl(min) + ", " + Data$dShow.showIntImpl(max) + " ]")
    : Data$dEither.$Either("Right", undefined);
  return v$1 => $0;
});
const validAccum = v => {
  if (v.hour.tag === "Just" && v.hour._1 === 24) {
    return for_([v.minute, v.second, v.millisecond])(val => {
      if (
        (() => {
          if (val.tag === "Nothing") { return false; }
          if (val.tag === "Just") { return val._1 > 0; }
          $runtime.fail();
        })()
      ) {
        return Data$dEither.$Either("Left", "When hour is 24, other time components must be 0");
      }
      return Data$dEither.$Either("Right", undefined);
    });
  }
  return Data$dEither.$Either("Right", undefined);
};
const takeSome = dictAlternative => {
  const Applicative0 = dictAlternative.Applicative0();
  return dictLazy => v => v1 => {
    if (v === 0) { return Applicative0.pure(Data$dList$dTypes.Nil); }
    return Applicative0.Apply0().apply(dictAlternative.Plus1().Alt0().Functor0().map(Data$dList$dTypes.Cons)(v1))(dictLazy.defer(v3 => takeMany(dictAlternative)(dictLazy)(v - 1 | 0)(v1)));
  };
};
const takeMany = dictAlternative => {
  const $0 = dictAlternative.Applicative0();
  return dictLazy => v => v1 => {
    if (v === 0) { return $0.pure(Data$dList$dTypes.Nil); }
    return dictAlternative.Plus1().Alt0().alt(takeSome(dictAlternative)(dictLazy)(v)(v1))($0.pure(Data$dList$dTypes.Nil));
  };
};
const takeSome1 = /* #__PURE__ */ takeSome(Parsing.alternativeParserT)(Parsing.lazyParserT);
const printFormatterCommand = v => {
  if (v.tag === "YearFull") { return "YYYY"; }
  if (v.tag === "YearTwoDigits") { return "YY"; }
  if (v.tag === "YearAbsolute") { return "Y"; }
  if (v.tag === "MonthFull") { return "MMMM"; }
  if (v.tag === "MonthShort") { return "MMM"; }
  if (v.tag === "MonthTwoDigits") { return "MM"; }
  if (v.tag === "DayOfMonthTwoDigits") { return "DD"; }
  if (v.tag === "DayOfMonth") { return "D"; }
  if (v.tag === "UnixTimestamp") { return "X"; }
  if (v.tag === "DayOfWeek") { return "E"; }
  if (v.tag === "DayOfWeekName") { return "dddd"; }
  if (v.tag === "DayOfWeekNameShort") { return "ddd"; }
  if (v.tag === "Hours24") { return "HH"; }
  if (v.tag === "Hours12") { return "hh"; }
  if (v.tag === "Meridiem") { return "a"; }
  if (v.tag === "Minutes") { return "m"; }
  if (v.tag === "MinutesTwoDigits") { return "mm"; }
  if (v.tag === "Seconds") { return "s"; }
  if (v.tag === "SecondsTwoDigits") { return "ss"; }
  if (v.tag === "MillisecondsShort") { return "S"; }
  if (v.tag === "MillisecondsTwoDigits") { return "SS"; }
  if (v.tag === "Milliseconds") { return "SSS"; }
  if (v.tag === "Placeholder") { return v._1; }
  $runtime.fail();
};
const printFormatter = /* #__PURE__ */ foldMap1(printFormatterCommand);
const placeholderContent = /* #__PURE__ */ (() => {
  const $0 = Data$dArray.some(Parsing.alternativeParserT)(Parsing.lazyParserT)(Parsing$dString$dBasic.noneOf(Data$dString$dCodeUnits.toCharArray("YMDEHhamsS")));
  return (state1, more, lift1$1, $$throw, done) => more(v1 => $0(state1, more, lift1$1, $$throw, (state2, a) => more(v2 => done(state2, Data$dString$dCodeUnits.fromCharArray(a)))));
})();
const parseShortMonth = dictMonad => oneOfAs(dictMonad)(x => (v1, $0, $1, $2, $3) => {
  const $4 = v1._3;
  return Parsing$dString.string(x)(v1, $0, $1, (v2, $5) => $2(Parsing.$ParseState(v2._1, v2._2, $4), $5), $3);
})([
  Data$dTuple.$Tuple("Jan", Data$dDate$dComponent.January),
  Data$dTuple.$Tuple("Feb", Data$dDate$dComponent.February),
  Data$dTuple.$Tuple("Mar", Data$dDate$dComponent.March),
  Data$dTuple.$Tuple("Apr", Data$dDate$dComponent.April),
  Data$dTuple.$Tuple("May", Data$dDate$dComponent.May),
  Data$dTuple.$Tuple("Jun", Data$dDate$dComponent.June),
  Data$dTuple.$Tuple("Jul", Data$dDate$dComponent.July),
  Data$dTuple.$Tuple("Aug", Data$dDate$dComponent.August),
  Data$dTuple.$Tuple("Sep", Data$dDate$dComponent.September),
  Data$dTuple.$Tuple("Oct", Data$dDate$dComponent.October),
  Data$dTuple.$Tuple("Nov", Data$dDate$dComponent.November),
  Data$dTuple.$Tuple("Dec", Data$dDate$dComponent.December)
]);
const parseShortMonth1 = /* #__PURE__ */ parseShortMonth(monadStateT);
const parseMonth = dictMonad => oneOfAs(dictMonad)(x => (v1, $0, $1, $2, $3) => {
  const $4 = v1._3;
  return Parsing$dString.string(x)(v1, $0, $1, (v2, $5) => $2(Parsing.$ParseState(v2._1, v2._2, $4), $5), $3);
})([
  Data$dTuple.$Tuple("January", Data$dDate$dComponent.January),
  Data$dTuple.$Tuple("February", Data$dDate$dComponent.February),
  Data$dTuple.$Tuple("March", Data$dDate$dComponent.March),
  Data$dTuple.$Tuple("April", Data$dDate$dComponent.April),
  Data$dTuple.$Tuple("May", Data$dDate$dComponent.May),
  Data$dTuple.$Tuple("June", Data$dDate$dComponent.June),
  Data$dTuple.$Tuple("July", Data$dDate$dComponent.July),
  Data$dTuple.$Tuple("August", Data$dDate$dComponent.August),
  Data$dTuple.$Tuple("September", Data$dDate$dComponent.September),
  Data$dTuple.$Tuple("October", Data$dDate$dComponent.October),
  Data$dTuple.$Tuple("November", Data$dDate$dComponent.November),
  Data$dTuple.$Tuple("December", Data$dDate$dComponent.December)
]);
const parseMonth1 = /* #__PURE__ */ parseMonth(monadStateT);
const parseMeridiem = dictMonad => oneOfAs(dictMonad)(x => (v1, $0, $1, $2, $3) => {
  const $4 = v1._3;
  return Parsing$dString.string(x)(v1, $0, $1, (v2, $5) => $2(Parsing.$ParseState(v2._1, v2._2, $4), $5), $3);
})([Data$dTuple.$Tuple("am", AM), Data$dTuple.$Tuple("AM", AM), Data$dTuple.$Tuple("pm", PM), Data$dTuple.$Tuple("PM", PM)]);
const parseMeridiem1 = /* #__PURE__ */ parseMeridiem(monadStateT);
const parseInt = dictMonad => {
  const parseDigit1 = Data$dFormatter$dParser$dNumber.parseDigit(dictMonad);
  return maxLength => validators => errMsg => {
    const $0 = takeSome1(maxLength)(parseDigit1);
    return (state1, more, lift1$1, $$throw, done) => more(v1 => $0(
      state1,
      more,
      lift1$1,
      $$throw,
      (state2, a) => more(v2 => (() => {
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
              go$a0 = (b * 10 | 0) + v._1 | 0;
              go$a1 = v._2;
              continue;
            }
            $runtime.fail();
          }
          return go$r;
        };
        const num = go(0)(a);
        const v = validators({
          length: (() => {
            const go$1 = go$1$a0$copy => go$1$a1$copy => {
              let go$1$a0 = go$1$a0$copy, go$1$a1 = go$1$a1$copy, go$1$c = true, go$1$r;
              while (go$1$c) {
                const b = go$1$a0, v = go$1$a1;
                if (v.tag === "Nil") {
                  go$1$c = false;
                  go$1$r = b;
                  continue;
                }
                if (v.tag === "Cons") {
                  go$1$a0 = b + 1 | 0;
                  go$1$a1 = v._2;
                  continue;
                }
                $runtime.fail();
              }
              return go$1$r;
            };
            return go$1(0)(a);
          })(),
          num,
          maxLength
        });
        if (v.tag === "Left") { return Parsing.fail(errMsg + "(" + v._1 + ")"); }
        if (v.tag === "Right") { return (state1$1, v$1, v1$1, v2$1, done$1) => done$1(state1$1, num); }
        $runtime.fail();
      })()(state2, more, lift1$1, $$throw, done))
    ));
  };
};
const parseInt1 = /* #__PURE__ */ parseInt(monadStateT);
const parseSignedInt = dictMonad => {
  const parseInt2 = parseInt(dictMonad);
  return maxLength => validators => errMsg => {
    const $0 = Parsing$dCombinators.optionMaybe(Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "-"))("'-'"));
    return (state1, more, lift1$1, $$throw, done) => more(v1 => more(v1$1 => $0(
      state1,
      more,
      lift1$1,
      $$throw,
      (state2, a) => more(v2 => {
        const $1 = (() => {
          if (a.tag === "Nothing") { return false; }
          if (a.tag === "Just") { return true; }
          $runtime.fail();
        })();
        return more(v2$1 => {
          const $2 = $1 ? negate : identity;
          const $3 = parseInt2(maxLength)(validators)(errMsg);
          return more(v1$2 => $3(state2, more, lift1$1, $$throw, (state2$1, a$1) => more(v2$2 => done(state2$1, $2(a$1)))));
        });
      })
    )));
  };
};
const parseSignedInt1 = /* #__PURE__ */ parseSignedInt(monadStateT);
const parseDayOfWeekNameShort = dictMonad => oneOfAs(dictMonad)(x => (v1, $0, $1, $2, $3) => {
  const $4 = v1._3;
  return Parsing$dString.string(x)(v1, $0, $1, (v2, $5) => $2(Parsing.$ParseState(v2._1, v2._2, $4), $5), $3);
})([
  Data$dTuple.$Tuple("Mon", Data$dDate$dComponent.Monday),
  Data$dTuple.$Tuple("Tue", Data$dDate$dComponent.Tuesday),
  Data$dTuple.$Tuple("Wed", Data$dDate$dComponent.Wednesday),
  Data$dTuple.$Tuple("Thu", Data$dDate$dComponent.Thursday),
  Data$dTuple.$Tuple("Fri", Data$dDate$dComponent.Friday),
  Data$dTuple.$Tuple("Sat", Data$dDate$dComponent.Saturday),
  Data$dTuple.$Tuple("Sun", Data$dDate$dComponent.Sunday)
]);
const parseDayOfWeekNameShort1 = /* #__PURE__ */ parseDayOfWeekNameShort(monadStateT);
const parseDayOfWeekName = dictMonad => oneOfAs(dictMonad)(x => (v1, $0, $1, $2, $3) => {
  const $4 = v1._3;
  return Parsing$dString.string(x)(v1, $0, $1, (v2, $5) => $2(Parsing.$ParseState(v2._1, v2._2, $4), $5), $3);
})([
  Data$dTuple.$Tuple("Monday", Data$dDate$dComponent.Monday),
  Data$dTuple.$Tuple("Tuesday", Data$dDate$dComponent.Tuesday),
  Data$dTuple.$Tuple("Wednesday", Data$dDate$dComponent.Wednesday),
  Data$dTuple.$Tuple("Thursday", Data$dDate$dComponent.Thursday),
  Data$dTuple.$Tuple("Friday", Data$dDate$dComponent.Friday),
  Data$dTuple.$Tuple("Saturday", Data$dDate$dComponent.Saturday),
  Data$dTuple.$Tuple("Sunday", Data$dDate$dComponent.Sunday)
]);
const parseDayOfWeekName1 = /* #__PURE__ */ parseDayOfWeekName(monadStateT);
const padSingleDigit = i => {
  if (i < 0) { return "-" + padSingleDigit(-i); }
  if (i < 10) { return "0" + Data$dShow.showIntImpl(i); }
  return Data$dShow.showIntImpl(i);
};
const padQuadrupleDigit = i => {
  if (i < 0) { return "-" + padQuadrupleDigit(-i); }
  if (i < 10) { return "000" + Data$dShow.showIntImpl(i); }
  if (i < 100) { return "00" + Data$dShow.showIntImpl(i); }
  if (i < 1000) { return "0" + Data$dShow.showIntImpl(i); }
  return Data$dShow.showIntImpl(i);
};
const padDoubleDigit = i => {
  if (i < 0) { return "-" + padDoubleDigit(-i); }
  if (i < 10) { return "00" + Data$dShow.showIntImpl(i); }
  if (i < 100) { return "0" + Data$dShow.showIntImpl(i); }
  return Data$dShow.showIntImpl(i);
};
const initialAccum = {
  year: Data$dMaybe.Nothing,
  month: Data$dMaybe.Nothing,
  day: Data$dMaybe.Nothing,
  hour: Data$dMaybe.Nothing,
  minute: Data$dMaybe.Nothing,
  second: Data$dMaybe.Nothing,
  millisecond: Data$dMaybe.Nothing,
  meridiem: Data$dMaybe.Nothing
};
const genericFormatter = {
  to: x => {
    if (x.tag === "Inl") { return YearFull; }
    if (x.tag === "Inr") {
      if (x._1.tag === "Inl") { return YearTwoDigits; }
      if (x._1.tag === "Inr") {
        if (x._1._1.tag === "Inl") { return YearAbsolute; }
        if (x._1._1.tag === "Inr") {
          if (x._1._1._1.tag === "Inl") { return MonthFull; }
          if (x._1._1._1.tag === "Inr") {
            if (x._1._1._1._1.tag === "Inl") { return MonthShort; }
            if (x._1._1._1._1.tag === "Inr") {
              if (x._1._1._1._1._1.tag === "Inl") { return MonthTwoDigits; }
              if (x._1._1._1._1._1.tag === "Inr") {
                if (x._1._1._1._1._1._1.tag === "Inl") { return DayOfMonthTwoDigits; }
                if (x._1._1._1._1._1._1.tag === "Inr") {
                  if (x._1._1._1._1._1._1._1.tag === "Inl") { return DayOfMonth; }
                  if (x._1._1._1._1._1._1._1.tag === "Inr") {
                    if (x._1._1._1._1._1._1._1._1.tag === "Inl") { return UnixTimestamp; }
                    if (x._1._1._1._1._1._1._1._1.tag === "Inr") {
                      if (x._1._1._1._1._1._1._1._1._1.tag === "Inl") { return DayOfWeek; }
                      if (x._1._1._1._1._1._1._1._1._1.tag === "Inr") {
                        if (x._1._1._1._1._1._1._1._1._1._1.tag === "Inl") { return DayOfWeekName; }
                        if (x._1._1._1._1._1._1._1._1._1._1.tag === "Inr") {
                          if (x._1._1._1._1._1._1._1._1._1._1._1.tag === "Inl") { return DayOfWeekNameShort; }
                          if (x._1._1._1._1._1._1._1._1._1._1._1.tag === "Inr") {
                            if (x._1._1._1._1._1._1._1._1._1._1._1._1.tag === "Inl") { return Hours24; }
                            if (x._1._1._1._1._1._1._1._1._1._1._1._1.tag === "Inr") {
                              if (x._1._1._1._1._1._1._1._1._1._1._1._1._1.tag === "Inl") { return Hours12; }
                              if (x._1._1._1._1._1._1._1._1._1._1._1._1._1.tag === "Inr") {
                                if (x._1._1._1._1._1._1._1._1._1._1._1._1._1._1.tag === "Inl") { return Meridiem; }
                                if (x._1._1._1._1._1._1._1._1._1._1._1._1._1._1.tag === "Inr") {
                                  if (x._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1.tag === "Inl") { return Minutes; }
                                  if (x._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1.tag === "Inr") {
                                    if (x._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1.tag === "Inl") { return MinutesTwoDigits; }
                                    if (x._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1.tag === "Inr") {
                                      if (x._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1.tag === "Inl") { return Seconds; }
                                      if (x._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1.tag === "Inr") {
                                        if (x._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1.tag === "Inl") { return SecondsTwoDigits; }
                                        if (x._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1.tag === "Inr") {
                                          if (x._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1.tag === "Inl") { return Milliseconds; }
                                          if (x._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1.tag === "Inr") {
                                            if (x._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1.tag === "Inl") { return MillisecondsShort; }
                                            if (x._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1.tag === "Inr") {
                                              if (x._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1.tag === "Inl") { return MillisecondsTwoDigits; }
                                              if (x._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1.tag === "Inr") {
                                                return $FormatterCommand("Placeholder", x._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1);
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "YearFull") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments); }
    if (x.tag === "YearTwoDigits") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)); }
    if (x.tag === "YearAbsolute") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments))); }
    if (x.tag === "MonthFull") {
      return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments))));
    }
    if (x.tag === "MonthShort") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments))))
      );
    }
    if (x.tag === "MonthTwoDigits") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments))))
        )
      );
    }
    if (x.tag === "DayOfMonthTwoDigits") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments))))
          )
        )
      );
    }
    if (x.tag === "DayOfMonth") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum(
              "Inr",
              Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments))))
            )
          )
        )
      );
    }
    if (x.tag === "UnixTimestamp") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum(
              "Inr",
              Data$dGeneric$dRep.$Sum(
                "Inr",
                Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments))))
              )
            )
          )
        )
      );
    }
    if (x.tag === "DayOfWeek") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum(
              "Inr",
              Data$dGeneric$dRep.$Sum(
                "Inr",
                Data$dGeneric$dRep.$Sum(
                  "Inr",
                  Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments))))
                )
              )
            )
          )
        )
      );
    }
    if (x.tag === "DayOfWeekName") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum(
              "Inr",
              Data$dGeneric$dRep.$Sum(
                "Inr",
                Data$dGeneric$dRep.$Sum(
                  "Inr",
                  Data$dGeneric$dRep.$Sum(
                    "Inr",
                    Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments))))
                  )
                )
              )
            )
          )
        )
      );
    }
    if (x.tag === "DayOfWeekNameShort") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum(
              "Inr",
              Data$dGeneric$dRep.$Sum(
                "Inr",
                Data$dGeneric$dRep.$Sum(
                  "Inr",
                  Data$dGeneric$dRep.$Sum(
                    "Inr",
                    Data$dGeneric$dRep.$Sum(
                      "Inr",
                      Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments))))
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
    if (x.tag === "Hours24") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum(
              "Inr",
              Data$dGeneric$dRep.$Sum(
                "Inr",
                Data$dGeneric$dRep.$Sum(
                  "Inr",
                  Data$dGeneric$dRep.$Sum(
                    "Inr",
                    Data$dGeneric$dRep.$Sum(
                      "Inr",
                      Data$dGeneric$dRep.$Sum(
                        "Inr",
                        Data$dGeneric$dRep.$Sum(
                          "Inr",
                          Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)))
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
    if (x.tag === "Hours12") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum(
              "Inr",
              Data$dGeneric$dRep.$Sum(
                "Inr",
                Data$dGeneric$dRep.$Sum(
                  "Inr",
                  Data$dGeneric$dRep.$Sum(
                    "Inr",
                    Data$dGeneric$dRep.$Sum(
                      "Inr",
                      Data$dGeneric$dRep.$Sum(
                        "Inr",
                        Data$dGeneric$dRep.$Sum(
                          "Inr",
                          Data$dGeneric$dRep.$Sum(
                            "Inr",
                            Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)))
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
    if (x.tag === "Meridiem") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum(
              "Inr",
              Data$dGeneric$dRep.$Sum(
                "Inr",
                Data$dGeneric$dRep.$Sum(
                  "Inr",
                  Data$dGeneric$dRep.$Sum(
                    "Inr",
                    Data$dGeneric$dRep.$Sum(
                      "Inr",
                      Data$dGeneric$dRep.$Sum(
                        "Inr",
                        Data$dGeneric$dRep.$Sum(
                          "Inr",
                          Data$dGeneric$dRep.$Sum(
                            "Inr",
                            Data$dGeneric$dRep.$Sum(
                              "Inr",
                              Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)))
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
    if (x.tag === "Minutes") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum(
              "Inr",
              Data$dGeneric$dRep.$Sum(
                "Inr",
                Data$dGeneric$dRep.$Sum(
                  "Inr",
                  Data$dGeneric$dRep.$Sum(
                    "Inr",
                    Data$dGeneric$dRep.$Sum(
                      "Inr",
                      Data$dGeneric$dRep.$Sum(
                        "Inr",
                        Data$dGeneric$dRep.$Sum(
                          "Inr",
                          Data$dGeneric$dRep.$Sum(
                            "Inr",
                            Data$dGeneric$dRep.$Sum(
                              "Inr",
                              Data$dGeneric$dRep.$Sum(
                                "Inr",
                                Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)))
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
    if (x.tag === "MinutesTwoDigits") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum(
              "Inr",
              Data$dGeneric$dRep.$Sum(
                "Inr",
                Data$dGeneric$dRep.$Sum(
                  "Inr",
                  Data$dGeneric$dRep.$Sum(
                    "Inr",
                    Data$dGeneric$dRep.$Sum(
                      "Inr",
                      Data$dGeneric$dRep.$Sum(
                        "Inr",
                        Data$dGeneric$dRep.$Sum(
                          "Inr",
                          Data$dGeneric$dRep.$Sum(
                            "Inr",
                            Data$dGeneric$dRep.$Sum(
                              "Inr",
                              Data$dGeneric$dRep.$Sum(
                                "Inr",
                                Data$dGeneric$dRep.$Sum(
                                  "Inr",
                                  Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)))
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
    if (x.tag === "Seconds") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum(
              "Inr",
              Data$dGeneric$dRep.$Sum(
                "Inr",
                Data$dGeneric$dRep.$Sum(
                  "Inr",
                  Data$dGeneric$dRep.$Sum(
                    "Inr",
                    Data$dGeneric$dRep.$Sum(
                      "Inr",
                      Data$dGeneric$dRep.$Sum(
                        "Inr",
                        Data$dGeneric$dRep.$Sum(
                          "Inr",
                          Data$dGeneric$dRep.$Sum(
                            "Inr",
                            Data$dGeneric$dRep.$Sum(
                              "Inr",
                              Data$dGeneric$dRep.$Sum(
                                "Inr",
                                Data$dGeneric$dRep.$Sum(
                                  "Inr",
                                  Data$dGeneric$dRep.$Sum(
                                    "Inr",
                                    Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)))
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
    if (x.tag === "SecondsTwoDigits") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum(
              "Inr",
              Data$dGeneric$dRep.$Sum(
                "Inr",
                Data$dGeneric$dRep.$Sum(
                  "Inr",
                  Data$dGeneric$dRep.$Sum(
                    "Inr",
                    Data$dGeneric$dRep.$Sum(
                      "Inr",
                      Data$dGeneric$dRep.$Sum(
                        "Inr",
                        Data$dGeneric$dRep.$Sum(
                          "Inr",
                          Data$dGeneric$dRep.$Sum(
                            "Inr",
                            Data$dGeneric$dRep.$Sum(
                              "Inr",
                              Data$dGeneric$dRep.$Sum(
                                "Inr",
                                Data$dGeneric$dRep.$Sum(
                                  "Inr",
                                  Data$dGeneric$dRep.$Sum(
                                    "Inr",
                                    Data$dGeneric$dRep.$Sum(
                                      "Inr",
                                      Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)))
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
    if (x.tag === "Milliseconds") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum(
              "Inr",
              Data$dGeneric$dRep.$Sum(
                "Inr",
                Data$dGeneric$dRep.$Sum(
                  "Inr",
                  Data$dGeneric$dRep.$Sum(
                    "Inr",
                    Data$dGeneric$dRep.$Sum(
                      "Inr",
                      Data$dGeneric$dRep.$Sum(
                        "Inr",
                        Data$dGeneric$dRep.$Sum(
                          "Inr",
                          Data$dGeneric$dRep.$Sum(
                            "Inr",
                            Data$dGeneric$dRep.$Sum(
                              "Inr",
                              Data$dGeneric$dRep.$Sum(
                                "Inr",
                                Data$dGeneric$dRep.$Sum(
                                  "Inr",
                                  Data$dGeneric$dRep.$Sum(
                                    "Inr",
                                    Data$dGeneric$dRep.$Sum(
                                      "Inr",
                                      Data$dGeneric$dRep.$Sum(
                                        "Inr",
                                        Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)))
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
    if (x.tag === "MillisecondsShort") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum(
              "Inr",
              Data$dGeneric$dRep.$Sum(
                "Inr",
                Data$dGeneric$dRep.$Sum(
                  "Inr",
                  Data$dGeneric$dRep.$Sum(
                    "Inr",
                    Data$dGeneric$dRep.$Sum(
                      "Inr",
                      Data$dGeneric$dRep.$Sum(
                        "Inr",
                        Data$dGeneric$dRep.$Sum(
                          "Inr",
                          Data$dGeneric$dRep.$Sum(
                            "Inr",
                            Data$dGeneric$dRep.$Sum(
                              "Inr",
                              Data$dGeneric$dRep.$Sum(
                                "Inr",
                                Data$dGeneric$dRep.$Sum(
                                  "Inr",
                                  Data$dGeneric$dRep.$Sum(
                                    "Inr",
                                    Data$dGeneric$dRep.$Sum(
                                      "Inr",
                                      Data$dGeneric$dRep.$Sum(
                                        "Inr",
                                        Data$dGeneric$dRep.$Sum(
                                          "Inr",
                                          Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)))
                                        )
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
    if (x.tag === "MillisecondsTwoDigits") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum(
              "Inr",
              Data$dGeneric$dRep.$Sum(
                "Inr",
                Data$dGeneric$dRep.$Sum(
                  "Inr",
                  Data$dGeneric$dRep.$Sum(
                    "Inr",
                    Data$dGeneric$dRep.$Sum(
                      "Inr",
                      Data$dGeneric$dRep.$Sum(
                        "Inr",
                        Data$dGeneric$dRep.$Sum(
                          "Inr",
                          Data$dGeneric$dRep.$Sum(
                            "Inr",
                            Data$dGeneric$dRep.$Sum(
                              "Inr",
                              Data$dGeneric$dRep.$Sum(
                                "Inr",
                                Data$dGeneric$dRep.$Sum(
                                  "Inr",
                                  Data$dGeneric$dRep.$Sum(
                                    "Inr",
                                    Data$dGeneric$dRep.$Sum(
                                      "Inr",
                                      Data$dGeneric$dRep.$Sum(
                                        "Inr",
                                        Data$dGeneric$dRep.$Sum(
                                          "Inr",
                                          Data$dGeneric$dRep.$Sum(
                                            "Inr",
                                            Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)))
                                          )
                                        )
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
    if (x.tag === "Placeholder") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum(
              "Inr",
              Data$dGeneric$dRep.$Sum(
                "Inr",
                Data$dGeneric$dRep.$Sum(
                  "Inr",
                  Data$dGeneric$dRep.$Sum(
                    "Inr",
                    Data$dGeneric$dRep.$Sum(
                      "Inr",
                      Data$dGeneric$dRep.$Sum(
                        "Inr",
                        Data$dGeneric$dRep.$Sum(
                          "Inr",
                          Data$dGeneric$dRep.$Sum(
                            "Inr",
                            Data$dGeneric$dRep.$Sum(
                              "Inr",
                              Data$dGeneric$dRep.$Sum(
                                "Inr",
                                Data$dGeneric$dRep.$Sum(
                                  "Inr",
                                  Data$dGeneric$dRep.$Sum(
                                    "Inr",
                                    Data$dGeneric$dRep.$Sum(
                                      "Inr",
                                      Data$dGeneric$dRep.$Sum(
                                        "Inr",
                                        Data$dGeneric$dRep.$Sum(
                                          "Inr",
                                          Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", x._1))))
                                        )
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
    $runtime.fail();
  }
};
const showFormatter = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "YearFull"});
    const $1 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "YearTwoDigits"});
    const $2 = (() => {
      const $2 = (() => {
        const $2 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "YearAbsolute"});
        const $3 = (() => {
          const $3 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "MonthFull"});
          const $4 = (() => {
            const $4 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "MonthShort"});
            const $5 = (() => {
              const $5 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "MonthTwoDigits"});
              const $6 = (() => {
                const $6 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "DayOfMonthTwoDigits"});
                const $7 = (() => {
                  const $7 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "DayOfMonth"});
                  const $8 = (() => {
                    const $8 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "UnixTimestamp"});
                    const $9 = (() => {
                      const $9 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "DayOfWeek"});
                      const $10 = (() => {
                        const $10 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "DayOfWeekName"});
                        const $11 = (() => {
                          const $11 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "DayOfWeekNameShort"});
                          const $12 = (() => {
                            const $12 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "Hours24"});
                            const $13 = (() => {
                              const $13 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "Hours12"});
                              const $14 = (() => {
                                const $14 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "Meridiem"});
                                const $15 = (() => {
                                  const $15 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "Minutes"});
                                  const $16 = (() => {
                                    const $16 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "MinutesTwoDigits"});
                                    const $17 = (() => {
                                      const $17 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "Seconds"});
                                      const $18 = (() => {
                                        const $18 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({
                                          reflectSymbol: () => "SecondsTwoDigits"
                                        });
                                        const $19 = (() => {
                                          const $19 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({
                                            reflectSymbol: () => "Milliseconds"
                                          });
                                          const $20 = (() => {
                                            const $20 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({
                                              reflectSymbol: () => "MillisecondsShort"
                                            });
                                            const $21 = (() => {
                                              const $21 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({
                                                reflectSymbol: () => "MillisecondsTwoDigits"
                                              });
                                              const $22 = (() => {
                                                const $22 = Data$dShow$dGeneric.genericShowConstructor({genericShowArgs: v => [Data$dShow.showStringImpl(v)]})({
                                                  reflectSymbol: () => "Placeholder"
                                                });
                                                return {
                                                  "genericShow'": v => {
                                                    if (v.tag === "Inl") { return $21["genericShow'"](v._1); }
                                                    if (v.tag === "Inr") { return $22["genericShow'"](v._1); }
                                                    $runtime.fail();
                                                  }
                                                };
                                              })();
                                              return {
                                                "genericShow'": v => {
                                                  if (v.tag === "Inl") { return $20["genericShow'"](v._1); }
                                                  if (v.tag === "Inr") { return $22["genericShow'"](v._1); }
                                                  $runtime.fail();
                                                }
                                              };
                                            })();
                                            return {
                                              "genericShow'": v => {
                                                if (v.tag === "Inl") { return $19["genericShow'"](v._1); }
                                                if (v.tag === "Inr") { return $21["genericShow'"](v._1); }
                                                $runtime.fail();
                                              }
                                            };
                                          })();
                                          return {
                                            "genericShow'": v => {
                                              if (v.tag === "Inl") { return $18["genericShow'"](v._1); }
                                              if (v.tag === "Inr") { return $20["genericShow'"](v._1); }
                                              $runtime.fail();
                                            }
                                          };
                                        })();
                                        return {
                                          "genericShow'": v => {
                                            if (v.tag === "Inl") { return $17["genericShow'"](v._1); }
                                            if (v.tag === "Inr") { return $19["genericShow'"](v._1); }
                                            $runtime.fail();
                                          }
                                        };
                                      })();
                                      return {
                                        "genericShow'": v => {
                                          if (v.tag === "Inl") { return $16["genericShow'"](v._1); }
                                          if (v.tag === "Inr") { return $18["genericShow'"](v._1); }
                                          $runtime.fail();
                                        }
                                      };
                                    })();
                                    return {
                                      "genericShow'": v => {
                                        if (v.tag === "Inl") { return $15["genericShow'"](v._1); }
                                        if (v.tag === "Inr") { return $17["genericShow'"](v._1); }
                                        $runtime.fail();
                                      }
                                    };
                                  })();
                                  return {
                                    "genericShow'": v => {
                                      if (v.tag === "Inl") { return $14["genericShow'"](v._1); }
                                      if (v.tag === "Inr") { return $16["genericShow'"](v._1); }
                                      $runtime.fail();
                                    }
                                  };
                                })();
                                return {
                                  "genericShow'": v => {
                                    if (v.tag === "Inl") { return $13["genericShow'"](v._1); }
                                    if (v.tag === "Inr") { return $15["genericShow'"](v._1); }
                                    $runtime.fail();
                                  }
                                };
                              })();
                              return {
                                "genericShow'": v => {
                                  if (v.tag === "Inl") { return $12["genericShow'"](v._1); }
                                  if (v.tag === "Inr") { return $14["genericShow'"](v._1); }
                                  $runtime.fail();
                                }
                              };
                            })();
                            return {
                              "genericShow'": v => {
                                if (v.tag === "Inl") { return $11["genericShow'"](v._1); }
                                if (v.tag === "Inr") { return $13["genericShow'"](v._1); }
                                $runtime.fail();
                              }
                            };
                          })();
                          return {
                            "genericShow'": v => {
                              if (v.tag === "Inl") { return $10["genericShow'"](v._1); }
                              if (v.tag === "Inr") { return $12["genericShow'"](v._1); }
                              $runtime.fail();
                            }
                          };
                        })();
                        return {
                          "genericShow'": v => {
                            if (v.tag === "Inl") { return $9["genericShow'"](v._1); }
                            if (v.tag === "Inr") { return $11["genericShow'"](v._1); }
                            $runtime.fail();
                          }
                        };
                      })();
                      return {
                        "genericShow'": v => {
                          if (v.tag === "Inl") { return $8["genericShow'"](v._1); }
                          if (v.tag === "Inr") { return $10["genericShow'"](v._1); }
                          $runtime.fail();
                        }
                      };
                    })();
                    return {
                      "genericShow'": v => {
                        if (v.tag === "Inl") { return $7["genericShow'"](v._1); }
                        if (v.tag === "Inr") { return $9["genericShow'"](v._1); }
                        $runtime.fail();
                      }
                    };
                  })();
                  return {
                    "genericShow'": v => {
                      if (v.tag === "Inl") { return $6["genericShow'"](v._1); }
                      if (v.tag === "Inr") { return $8["genericShow'"](v._1); }
                      $runtime.fail();
                    }
                  };
                })();
                return {
                  "genericShow'": v => {
                    if (v.tag === "Inl") { return $5["genericShow'"](v._1); }
                    if (v.tag === "Inr") { return $7["genericShow'"](v._1); }
                    $runtime.fail();
                  }
                };
              })();
              return {
                "genericShow'": v => {
                  if (v.tag === "Inl") { return $4["genericShow'"](v._1); }
                  if (v.tag === "Inr") { return $6["genericShow'"](v._1); }
                  $runtime.fail();
                }
              };
            })();
            return {
              "genericShow'": v => {
                if (v.tag === "Inl") { return $3["genericShow'"](v._1); }
                if (v.tag === "Inr") { return $5["genericShow'"](v._1); }
                $runtime.fail();
              }
            };
          })();
          return {
            "genericShow'": v => {
              if (v.tag === "Inl") { return $2["genericShow'"](v._1); }
              if (v.tag === "Inr") { return $4["genericShow'"](v._1); }
              $runtime.fail();
            }
          };
        })();
        return {
          "genericShow'": v => {
            if (v.tag === "Inl") { return $1["genericShow'"](v._1); }
            if (v.tag === "Inr") { return $3["genericShow'"](v._1); }
            $runtime.fail();
          }
        };
      })();
      return {
        "genericShow'": v => {
          if (v.tag === "Inl") { return $0["genericShow'"](v._1); }
          if (v.tag === "Inr") { return $2["genericShow'"](v._1); }
          $runtime.fail();
        }
      };
    })();
    return x => $2["genericShow'"](genericFormatter.from(x));
  })()
};
const formatterCommandParser = /* #__PURE__ */ (() => {
  const $0 = oneOfAs(Data$dIdentity.monadIdentity)(x => (v1, $0, $1, $2, $3) => {
    const $4 = v1._3;
    return Parsing$dString.string(x)(v1, $0, $1, (v2, $5) => $2(Parsing.$ParseState(v2._1, v2._2, $4), $5), $3);
  })([
    Data$dTuple.$Tuple("YYYY", YearFull),
    Data$dTuple.$Tuple("YY", YearTwoDigits),
    Data$dTuple.$Tuple("Y", YearAbsolute),
    Data$dTuple.$Tuple("MMMM", MonthFull),
    Data$dTuple.$Tuple("MMM", MonthShort),
    Data$dTuple.$Tuple("MM", MonthTwoDigits),
    Data$dTuple.$Tuple("DD", DayOfMonthTwoDigits),
    Data$dTuple.$Tuple("D", DayOfMonth),
    Data$dTuple.$Tuple("E", DayOfWeek),
    Data$dTuple.$Tuple("X", UnixTimestamp),
    Data$dTuple.$Tuple("dddd", DayOfWeekName),
    Data$dTuple.$Tuple("ddd", DayOfWeekNameShort),
    Data$dTuple.$Tuple("HH", Hours24),
    Data$dTuple.$Tuple("hh", Hours12),
    Data$dTuple.$Tuple("a", Meridiem),
    Data$dTuple.$Tuple("mm", MinutesTwoDigits),
    Data$dTuple.$Tuple("m", Minutes),
    Data$dTuple.$Tuple("ss", SecondsTwoDigits),
    Data$dTuple.$Tuple("s", Seconds),
    Data$dTuple.$Tuple("SSS", Milliseconds),
    Data$dTuple.$Tuple("SS", MillisecondsTwoDigits),
    Data$dTuple.$Tuple("S", MillisecondsShort)
  ]);
  return (v2, $1, $2, $3, $4) => {
    const $5 = v2._1;
    const $6 = v2._2;
    return $1(v3 => $0(
      Parsing.$ParseState($5, $6, false),
      $1,
      $2,
      (v4, $7) => {
        const $8 = v4._3;
        return $1(v5 => {
          if ($8) { return $3(v4, $7); }
          return $1(v1 => placeholderContent(v2, $1, $2, $3, (state2, a) => $1(v2$1 => $4(state2, $FormatterCommand("Placeholder", a)))));
        });
      },
      $4
    ));
  };
})();
const formatYearTwoDigits = i => {
  const dateString = Data$dShow.showIntImpl(i >= 0 ? i : -i);
  const dateLength = Data$dString$dCodePoints.toCodePointArray(dateString).length;
  if (dateLength === 1) { return "0" + dateString; }
  if (dateLength === 2) { return dateString; }
  return Data$dString$dCodeUnits.drop(Data$dString$dCodeUnits.length(Data$dString$dCodePoints.take(dateLength - 2 | 0)(dateString)))(dateString);
};
const formatParser = /* #__PURE__ */ Data$dList.some(Parsing.alternativeParserT)(Parsing.lazyParserT)(formatterCommandParser);
const parseFormatString = /* #__PURE__ */ Data$dFormatter$dParser$dUtils.runP(formatParser);
const formatCommand = v => {
  const $0 = v._1;
  const $1 = v._2;
  return v1 => {
    if (v1.tag === "YearFull") { return padQuadrupleDigit($0._1); }
    if (v1.tag === "YearTwoDigits") { return formatYearTwoDigits($0._1); }
    if (v1.tag === "YearAbsolute") { return Data$dShow.showIntImpl($0._1); }
    if (v1.tag === "MonthFull") {
      if ($0._2 === "January") { return "January"; }
      if ($0._2 === "February") { return "February"; }
      if ($0._2 === "March") { return "March"; }
      if ($0._2 === "April") { return "April"; }
      if ($0._2 === "May") { return "May"; }
      if ($0._2 === "June") { return "June"; }
      if ($0._2 === "July") { return "July"; }
      if ($0._2 === "August") { return "August"; }
      if ($0._2 === "September") { return "September"; }
      if ($0._2 === "October") { return "October"; }
      if ($0._2 === "November") { return "November"; }
      if ($0._2 === "December") { return "December"; }
      $runtime.fail();
    }
    if (v1.tag === "MonthShort") {
      if ($0._2 === "January") { return "Jan"; }
      if ($0._2 === "February") { return "Feb"; }
      if ($0._2 === "March") { return "Mar"; }
      if ($0._2 === "April") { return "Apr"; }
      if ($0._2 === "May") { return "May"; }
      if ($0._2 === "June") { return "Jun"; }
      if ($0._2 === "July") { return "Jul"; }
      if ($0._2 === "August") { return "Aug"; }
      if ($0._2 === "September") { return "Sep"; }
      if ($0._2 === "October") { return "Oct"; }
      if ($0._2 === "November") { return "Nov"; }
      if ($0._2 === "December") { return "Dec"; }
      $runtime.fail();
    }
    if (v1.tag === "MonthTwoDigits") {
      return padSingleDigit((() => {
        if ($0._2 === "January") { return 1; }
        if ($0._2 === "February") { return 2; }
        if ($0._2 === "March") { return 3; }
        if ($0._2 === "April") { return 4; }
        if ($0._2 === "May") { return 5; }
        if ($0._2 === "June") { return 6; }
        if ($0._2 === "July") { return 7; }
        if ($0._2 === "August") { return 8; }
        if ($0._2 === "September") { return 9; }
        if ($0._2 === "October") { return 10; }
        if ($0._2 === "November") { return 11; }
        if ($0._2 === "December") { return 12; }
        $runtime.fail();
      })());
    }
    if (v1.tag === "DayOfMonthTwoDigits") { return padSingleDigit($0._3); }
    if (v1.tag === "DayOfMonth") { return Data$dShow.showIntImpl($0._3); }
    if (v1.tag === "UnixTimestamp") { return Data$dShow.showIntImpl(Data$dInt.unsafeClamp(Data$dNumber.floor(Data$dDateTime$dInstant.fromDateTime(v) / 1000.0))); }
    if (v1.tag === "DayOfWeek") {
      return Data$dShow.showIntImpl((() => {
        const $2 = Data$dDate.weekday($0);
        if ($2 === "Monday") { return 1; }
        if ($2 === "Tuesday") { return 2; }
        if ($2 === "Wednesday") { return 3; }
        if ($2 === "Thursday") { return 4; }
        if ($2 === "Friday") { return 5; }
        if ($2 === "Saturday") { return 6; }
        if ($2 === "Sunday") { return 7; }
        $runtime.fail();
      })());
    }
    if (v1.tag === "DayOfWeekName") {
      const $2 = Data$dDate.weekday($0);
      if ($2 === "Monday") { return "Monday"; }
      if ($2 === "Tuesday") { return "Tuesday"; }
      if ($2 === "Wednesday") { return "Wednesday"; }
      if ($2 === "Thursday") { return "Thursday"; }
      if ($2 === "Friday") { return "Friday"; }
      if ($2 === "Saturday") { return "Saturday"; }
      if ($2 === "Sunday") { return "Sunday"; }
      $runtime.fail();
    }
    if (v1.tag === "DayOfWeekNameShort") {
      return Data$dString$dCodePoints.take(3)((() => {
        const $2 = Data$dDate.weekday($0);
        if ($2 === "Monday") { return "Monday"; }
        if ($2 === "Tuesday") { return "Tuesday"; }
        if ($2 === "Wednesday") { return "Wednesday"; }
        if ($2 === "Thursday") { return "Thursday"; }
        if ($2 === "Friday") { return "Friday"; }
        if ($2 === "Saturday") { return "Saturday"; }
        if ($2 === "Sunday") { return "Sunday"; }
        $runtime.fail();
      })());
    }
    if (v1.tag === "Hours24") { return padSingleDigit($1._1); }
    if (v1.tag === "Hours12") {
      return padSingleDigit((() => {
        const $2 = Data$dEuclideanRing.intMod($1._1)(12);
        if ($2 === 0) { return 12; }
        return $2;
      })());
    }
    if (v1.tag === "Meridiem") {
      if ($1._1 >= 12) { return "PM"; }
      return "AM";
    }
    if (v1.tag === "Minutes") { return Data$dShow.showIntImpl($1._2); }
    if (v1.tag === "MinutesTwoDigits") { return padSingleDigit($1._2); }
    if (v1.tag === "Seconds") { return Data$dShow.showIntImpl($1._3); }
    if (v1.tag === "SecondsTwoDigits") { return padSingleDigit($1._3); }
    if (v1.tag === "Milliseconds") { return padDoubleDigit($1._4); }
    if (v1.tag === "MillisecondsShort") { return Data$dShow.showIntImpl($runtime.intDiv($1._4, 100)); }
    if (v1.tag === "MillisecondsTwoDigits") { return padSingleDigit($runtime.intDiv($1._4, 10)); }
    if (v1.tag === "Placeholder") { return v1._1; }
    $runtime.fail();
  };
};
const format = f => d => foldMap1(formatCommand(d))(f);
const formatDateTime = pattern => datetime => {
  const $0 = Data$dFormatter$dParser$dUtils.runP(formatParser)(pattern);
  if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
  if ($0.tag === "Right") { return Data$dEither.$Either("Right", foldMap1(formatCommand(datetime))($0._1)); }
  $runtime.fail();
};
const exactLength = /* #__PURE__ */ bind(Data$dEither.Right)(v => {
  const $0 = v.maxLength !== v.length
    ? Data$dEither.$Either("Left", "Expected " + Data$dShow.showIntImpl(v.maxLength) + " digits but got " + Data$dShow.showIntImpl(v.length))
    : Data$dEither.$Either("Right", undefined);
  return v$1 => $0;
});
const unformatCommandParser = v => {
  if (v.tag === "YearFull") {
    const $0 = parseSignedInt1(4)(exactLength)("Incorrect full year");
    return (state1, more, lift1$1, $$throw, done) => more(v1 => $0(
      state1,
      more,
      lift1$1,
      $$throw,
      (state2, a) => more(v2 => lift1(monadStateStateT.state(s => Data$dTuple.$Tuple(
        undefined,
        {year: Data$dMaybe.$Maybe("Just", a), day: s.day, hour: s.hour, meridiem: s.meridiem, millisecond: s.millisecond, minute: s.minute, month: s.month, second: s.second}
      )))(state2, more, lift1$1, $$throw, done))
    ));
  }
  if (v.tag === "YearTwoDigits") {
    const $0 = parseSignedInt1(2)(exactLength)("Incorrect 2-digit year");
    return (state1, more, lift1$1, $$throw, done) => more(v1 => $0(
      state1,
      more,
      lift1$1,
      $$throw,
      (state2, a) => more(v2 => lift1(monadStateStateT.state(s => Data$dTuple.$Tuple(
        undefined,
        {year: Data$dMaybe.$Maybe("Just", a), day: s.day, hour: s.hour, meridiem: s.meridiem, millisecond: s.millisecond, minute: s.minute, month: s.month, second: s.second}
      )))(state2, more, lift1$1, $$throw, done))
    ));
  }
  if (v.tag === "YearAbsolute") {
    const $0 = Data$dList.some(Parsing.alternativeParserT)(Parsing.lazyParserT)(parseDigit);
    return (state1, more, lift1$1, $$throw, done) => more(v1 => more(v2 => more(v1$1 => {
      const $1 = (state2, a) => more(v2$1 => more(v3 => more(v1$2 => $0(
        state2,
        more,
        lift1$1,
        $$throw,
        (state2$1, a$1) => more(v2$2 => {
          const go = go$a0$copy => go$a1$copy => {
            let go$a0 = go$a0$copy, go$a1 = go$a1$copy, go$c = true, go$r;
            while (go$c) {
              const b = go$a0, v$1 = go$a1;
              if (v$1.tag === "Nil") {
                go$c = false;
                go$r = b;
                continue;
              }
              if (v$1.tag === "Cons") {
                go$a0 = (b * 10 | 0) + v$1._1 | 0;
                go$a1 = v$1._2;
                continue;
              }
              $runtime.fail();
            }
            return go$r;
          };
          const $1 = go(0)(a$1);
          return more(v4 => {
            const $2 = a * $1 | 0;
            return more(v2$3 => lift1(monadStateStateT.state(s => Data$dTuple.$Tuple(
              undefined,
              {year: Data$dMaybe.$Maybe("Just", $2), day: s.day, hour: s.hour, meridiem: s.meridiem, millisecond: s.millisecond, minute: s.minute, month: s.month, second: s.second}
            )))(state2$1, more, lift1$1, $$throw, done));
          });
        })
      ))));
      const $2 = state1._1;
      const $3 = state1._2;
      return more(v3 => more(v1$2 => Parsing$dString.string("-")(
        Parsing.$ParseState($2, $3, false),
        more,
        lift1$1,
        (v2$1, $4) => more(v5 => $1(state1, 1)),
        (state2, a) => more(v2$1 => $1(state2, -1))
      )));
    })));
  }
  if (v.tag === "MonthFull") {
    return (state1, more, lift1$1, $$throw, done) => more(v1 => more(v1$1 => parseMonth1(
      state1,
      more,
      lift1$1,
      $$throw,
      (state2, a) => more(v2 => {
        const $0 = (() => {
          if (a === "January") { return 1; }
          if (a === "February") { return 2; }
          if (a === "March") { return 3; }
          if (a === "April") { return 4; }
          if (a === "May") { return 5; }
          if (a === "June") { return 6; }
          if (a === "July") { return 7; }
          if (a === "August") { return 8; }
          if (a === "September") { return 9; }
          if (a === "October") { return 10; }
          if (a === "November") { return 11; }
          if (a === "December") { return 12; }
          $runtime.fail();
        })();
        return more(v2$1 => lift1(monadStateStateT.state(s => Data$dTuple.$Tuple(
          undefined,
          {month: Data$dMaybe.$Maybe("Just", $0), day: s.day, hour: s.hour, meridiem: s.meridiem, millisecond: s.millisecond, minute: s.minute, second: s.second, year: s.year}
        )))(state2, more, lift1$1, $$throw, done));
      })
    )));
  }
  if (v.tag === "MonthShort") {
    return (state1, more, lift1$1, $$throw, done) => more(v1 => more(v1$1 => parseShortMonth1(
      state1,
      more,
      lift1$1,
      $$throw,
      (state2, a) => more(v2 => {
        const $0 = (() => {
          if (a === "January") { return 1; }
          if (a === "February") { return 2; }
          if (a === "March") { return 3; }
          if (a === "April") { return 4; }
          if (a === "May") { return 5; }
          if (a === "June") { return 6; }
          if (a === "July") { return 7; }
          if (a === "August") { return 8; }
          if (a === "September") { return 9; }
          if (a === "October") { return 10; }
          if (a === "November") { return 11; }
          if (a === "December") { return 12; }
          $runtime.fail();
        })();
        return more(v2$1 => lift1(monadStateStateT.state(s => Data$dTuple.$Tuple(
          undefined,
          {month: Data$dMaybe.$Maybe("Just", $0), day: s.day, hour: s.hour, meridiem: s.meridiem, millisecond: s.millisecond, minute: s.minute, second: s.second, year: s.year}
        )))(state2, more, lift1$1, $$throw, done));
      })
    )));
  }
  if (v.tag === "MonthTwoDigits") {
    const $0 = parseInt1(2)((() => {
      const $0 = validateRange(1)(12);
      return r => {
        const $1 = $0(r);
        if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
        if ($1.tag === "Right") {
          const $2 = exactLength(r);
          if ($2.tag === "Left") { return Data$dEither.$Either("Left", $2._1); }
          if ($2.tag === "Right") { return Data$dEither.$Either("Right", undefined); }
        }
        $runtime.fail();
      };
    })())("Incorrect 2-digit month");
    return (state1, more, lift1$1, $$throw, done) => more(v1 => $0(
      state1,
      more,
      lift1$1,
      $$throw,
      (state2, a) => more(v2 => lift1(monadStateStateT.state(s => Data$dTuple.$Tuple(
        undefined,
        {month: Data$dMaybe.$Maybe("Just", a), day: s.day, hour: s.hour, meridiem: s.meridiem, millisecond: s.millisecond, minute: s.minute, second: s.second, year: s.year}
      )))(state2, more, lift1$1, $$throw, done))
    ));
  }
  if (v.tag === "DayOfMonthTwoDigits") {
    const $0 = parseInt1(2)((() => {
      const $0 = validateRange(1)(31);
      return r => {
        const $1 = $0(r);
        if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
        if ($1.tag === "Right") {
          const $2 = exactLength(r);
          if ($2.tag === "Left") { return Data$dEither.$Either("Left", $2._1); }
          if ($2.tag === "Right") { return Data$dEither.$Either("Right", undefined); }
        }
        $runtime.fail();
      };
    })())("Incorrect day of month");
    return (state1, more, lift1$1, $$throw, done) => more(v1 => $0(
      state1,
      more,
      lift1$1,
      $$throw,
      (state2, a) => more(v2 => lift1(monadStateStateT.state(s => Data$dTuple.$Tuple(
        undefined,
        {day: Data$dMaybe.$Maybe("Just", a), hour: s.hour, meridiem: s.meridiem, millisecond: s.millisecond, minute: s.minute, month: s.month, second: s.second, year: s.year}
      )))(state2, more, lift1$1, $$throw, done))
    ));
  }
  if (v.tag === "DayOfMonth") {
    const $0 = parseInt1(2)(validateRange(1)(31))("Incorrect day of month");
    return (state1, more, lift1$1, $$throw, done) => more(v1 => $0(
      state1,
      more,
      lift1$1,
      $$throw,
      (state2, a) => more(v2 => lift1(monadStateStateT.state(s => Data$dTuple.$Tuple(
        undefined,
        {day: Data$dMaybe.$Maybe("Just", a), hour: s.hour, meridiem: s.meridiem, millisecond: s.millisecond, minute: s.minute, month: s.month, second: s.second, year: s.year}
      )))(state2, more, lift1$1, $$throw, done))
    ));
  }
  if (v.tag === "UnixTimestamp") {
    const $0 = Data$dList.some(Parsing.alternativeParserT)(Parsing.lazyParserT)(parseDigit);
    return (state1, more, lift1$1, $$throw, done) => more(v1 => more(v1$1 => $0(
      state1,
      more,
      lift1$1,
      $$throw,
      (state2, a) => more(v2 => {
        const go = go$a0$copy => go$a1$copy => {
          let go$a0 = go$a0$copy, go$a1 = go$a1$copy, go$c = true, go$r;
          while (go$c) {
            const b = go$a0, v$1 = go$a1;
            if (v$1.tag === "Nil") {
              go$c = false;
              go$r = b;
              continue;
            }
            if (v$1.tag === "Cons") {
              go$a0 = (b * 10 | 0) + v$1._1 | 0;
              go$a1 = v$1._2;
              continue;
            }
            $runtime.fail();
          }
          return go$r;
        };
        const $1 = go(0)(a);
        return more(v2$1 => {
          const $2 = 1000.0 * Data$dInt.toNumber($1);
          const v1$2 = $2 >= -8639977881600000.0 && $2 <= 8639977881599999.0 ? Data$dMaybe.$Maybe("Just", Data$dDateTime$dInstant.toDateTime($2)) : Data$dMaybe.Nothing;
          if (v1$2.tag === "Nothing") { return Parsing.fail("Incorrect timestamp")(state2, more, lift1$1, $$throw, done); }
          if (v1$2.tag === "Just") {
            return lift1((() => {
              const $3 = {
                year: Data$dMaybe.$Maybe("Just", v1$2._1._1._1),
                month: Data$dMaybe.$Maybe(
                  "Just",
                  (() => {
                    if (v1$2._1._1._2 === "January") { return 1; }
                    if (v1$2._1._1._2 === "February") { return 2; }
                    if (v1$2._1._1._2 === "March") { return 3; }
                    if (v1$2._1._1._2 === "April") { return 4; }
                    if (v1$2._1._1._2 === "May") { return 5; }
                    if (v1$2._1._1._2 === "June") { return 6; }
                    if (v1$2._1._1._2 === "July") { return 7; }
                    if (v1$2._1._1._2 === "August") { return 8; }
                    if (v1$2._1._1._2 === "September") { return 9; }
                    if (v1$2._1._1._2 === "October") { return 10; }
                    if (v1$2._1._1._2 === "November") { return 11; }
                    if (v1$2._1._1._2 === "December") { return 12; }
                    $runtime.fail();
                  })()
                ),
                day: Data$dMaybe.$Maybe("Just", v1$2._1._1._3),
                hour: Data$dMaybe.$Maybe("Just", v1$2._1._2._1),
                minute: Data$dMaybe.$Maybe("Just", v1$2._1._2._2),
                second: Data$dMaybe.$Maybe("Just", v1$2._1._2._3),
                millisecond: Data$dMaybe.$Maybe("Just", v1$2._1._2._4),
                meridiem: Data$dMaybe.Nothing
              };
              return monadStateStateT.state(v$1 => Data$dTuple.$Tuple(undefined, $3));
            })())(state2, more, lift1$1, $$throw, done);
          }
          $runtime.fail();
        });
      })
    )));
  }
  if (v.tag === "DayOfWeek") {
    const $0 = parseInt1(1)(validateRange(1)(7))("Incorrect day of week");
    return (state1, more, lift1$1, $$throw, done) => more(v1 => $0(state1, more, lift1$1, $$throw, (state2, a) => more(v2 => done(state2, undefined))));
  }
  if (v.tag === "DayOfWeekName") {
    return (state1, more, lift1$1, $$throw, done) => more(v1 => more(v1$1 => parseDayOfWeekName1(
      state1,
      more,
      lift1$1,
      $$throw,
      (state2, a) => more(v2 => {
        const $0 = (() => {
          if (a === "Monday") { return 1; }
          if (a === "Tuesday") { return 2; }
          if (a === "Wednesday") { return 3; }
          if (a === "Thursday") { return 4; }
          if (a === "Friday") { return 5; }
          if (a === "Saturday") { return 6; }
          if (a === "Sunday") { return 7; }
          $runtime.fail();
        })();
        return more(v2$1 => lift1(monadStateStateT.state(s => Data$dTuple.$Tuple(
          undefined,
          {day: Data$dMaybe.$Maybe("Just", $0), hour: s.hour, meridiem: s.meridiem, millisecond: s.millisecond, minute: s.minute, month: s.month, second: s.second, year: s.year}
        )))(state2, more, lift1$1, $$throw, done));
      })
    )));
  }
  if (v.tag === "DayOfWeekNameShort") {
    return (state1, more, lift1$1, $$throw, done) => more(v1 => more(v1$1 => parseDayOfWeekNameShort1(
      state1,
      more,
      lift1$1,
      $$throw,
      (state2, a) => more(v2 => {
        const $0 = (() => {
          if (a === "Monday") { return 1; }
          if (a === "Tuesday") { return 2; }
          if (a === "Wednesday") { return 3; }
          if (a === "Thursday") { return 4; }
          if (a === "Friday") { return 5; }
          if (a === "Saturday") { return 6; }
          if (a === "Sunday") { return 7; }
          $runtime.fail();
        })();
        return more(v2$1 => lift1(monadStateStateT.state(s => Data$dTuple.$Tuple(
          undefined,
          {day: Data$dMaybe.$Maybe("Just", $0), hour: s.hour, meridiem: s.meridiem, millisecond: s.millisecond, minute: s.minute, month: s.month, second: s.second, year: s.year}
        )))(state2, more, lift1$1, $$throw, done));
      })
    )));
  }
  if (v.tag === "Hours24") {
    const $0 = parseInt1(2)((() => {
      const $0 = validateRange(0)(24);
      return r => {
        const $1 = $0(r);
        if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
        if ($1.tag === "Right") {
          const $2 = exactLength(r);
          if ($2.tag === "Left") { return Data$dEither.$Either("Left", $2._1); }
          if ($2.tag === "Right") { return Data$dEither.$Either("Right", undefined); }
        }
        $runtime.fail();
      };
    })())("Incorrect 24 hour");
    return (state1, more, lift1$1, $$throw, done) => more(v1 => $0(
      state1,
      more,
      lift1$1,
      $$throw,
      (state2, a) => more(v2 => lift1(monadStateStateT.state(s => Data$dTuple.$Tuple(
        undefined,
        {hour: Data$dMaybe.$Maybe("Just", a), day: s.day, meridiem: s.meridiem, millisecond: s.millisecond, minute: s.minute, month: s.month, second: s.second, year: s.year}
      )))(state2, more, lift1$1, $$throw, done))
    ));
  }
  if (v.tag === "Hours12") {
    const $0 = parseInt1(2)((() => {
      const $0 = validateRange(0)(12);
      return r => {
        const $1 = $0(r);
        if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
        if ($1.tag === "Right") {
          const $2 = exactLength(r);
          if ($2.tag === "Left") { return Data$dEither.$Either("Left", $2._1); }
          if ($2.tag === "Right") { return Data$dEither.$Either("Right", undefined); }
        }
        $runtime.fail();
      };
    })())("Incorrect 12 hour");
    return (state1, more, lift1$1, $$throw, done) => more(v1 => $0(
      state1,
      more,
      lift1$1,
      $$throw,
      (state2, a) => more(v2 => lift1(monadStateStateT.state(s => Data$dTuple.$Tuple(
        undefined,
        {hour: Data$dMaybe.$Maybe("Just", a), day: s.day, meridiem: s.meridiem, millisecond: s.millisecond, minute: s.minute, month: s.month, second: s.second, year: s.year}
      )))(state2, more, lift1$1, $$throw, done))
    ));
  }
  if (v.tag === "Meridiem") {
    return (state1, more, lift1$1, $$throw, done) => more(v1 => parseMeridiem1(
      state1,
      more,
      lift1$1,
      $$throw,
      (state2, a) => more(v2 => lift1(monadStateStateT.state(s => Data$dTuple.$Tuple(
        undefined,
        {meridiem: Data$dMaybe.$Maybe("Just", a), day: s.day, hour: s.hour, millisecond: s.millisecond, minute: s.minute, month: s.month, second: s.second, year: s.year}
      )))(state2, more, lift1$1, $$throw, done))
    ));
  }
  if (v.tag === "MinutesTwoDigits") {
    const $0 = parseInt1(2)((() => {
      const $0 = validateRange(0)(59);
      return r => {
        const $1 = $0(r);
        if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
        if ($1.tag === "Right") {
          const $2 = exactLength(r);
          if ($2.tag === "Left") { return Data$dEither.$Either("Left", $2._1); }
          if ($2.tag === "Right") { return Data$dEither.$Either("Right", undefined); }
        }
        $runtime.fail();
      };
    })())("Incorrect 2-digit minute");
    return (state1, more, lift1$1, $$throw, done) => more(v1 => $0(
      state1,
      more,
      lift1$1,
      $$throw,
      (state2, a) => more(v2 => lift1(monadStateStateT.state(s => Data$dTuple.$Tuple(
        undefined,
        {minute: Data$dMaybe.$Maybe("Just", a), day: s.day, hour: s.hour, meridiem: s.meridiem, millisecond: s.millisecond, month: s.month, second: s.second, year: s.year}
      )))(state2, more, lift1$1, $$throw, done))
    ));
  }
  if (v.tag === "Minutes") {
    const $0 = parseInt1(2)(validateRange(0)(59))("Incorrect minute");
    return (state1, more, lift1$1, $$throw, done) => more(v1 => $0(
      state1,
      more,
      lift1$1,
      $$throw,
      (state2, a) => more(v2 => lift1(monadStateStateT.state(s => Data$dTuple.$Tuple(
        undefined,
        {minute: Data$dMaybe.$Maybe("Just", a), day: s.day, hour: s.hour, meridiem: s.meridiem, millisecond: s.millisecond, month: s.month, second: s.second, year: s.year}
      )))(state2, more, lift1$1, $$throw, done))
    ));
  }
  if (v.tag === "SecondsTwoDigits") {
    const $0 = parseInt1(2)((() => {
      const $0 = validateRange(0)(59);
      return r => {
        const $1 = $0(r);
        if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
        if ($1.tag === "Right") {
          const $2 = exactLength(r);
          if ($2.tag === "Left") { return Data$dEither.$Either("Left", $2._1); }
          if ($2.tag === "Right") { return Data$dEither.$Either("Right", undefined); }
        }
        $runtime.fail();
      };
    })())("Incorrect 2-digit second");
    return (state1, more, lift1$1, $$throw, done) => more(v1 => $0(
      state1,
      more,
      lift1$1,
      $$throw,
      (state2, a) => more(v2 => lift1(monadStateStateT.state(s => Data$dTuple.$Tuple(
        undefined,
        {second: Data$dMaybe.$Maybe("Just", a), day: s.day, hour: s.hour, meridiem: s.meridiem, millisecond: s.millisecond, minute: s.minute, month: s.month, year: s.year}
      )))(state2, more, lift1$1, $$throw, done))
    ));
  }
  if (v.tag === "Seconds") {
    const $0 = parseInt1(2)(validateRange(0)(59))("Incorrect second");
    return (state1, more, lift1$1, $$throw, done) => more(v1 => $0(
      state1,
      more,
      lift1$1,
      $$throw,
      (state2, a) => more(v2 => lift1(monadStateStateT.state(s => Data$dTuple.$Tuple(
        undefined,
        {second: Data$dMaybe.$Maybe("Just", a), day: s.day, hour: s.hour, meridiem: s.meridiem, millisecond: s.millisecond, minute: s.minute, month: s.month, year: s.year}
      )))(state2, more, lift1$1, $$throw, done))
    ));
  }
  if (v.tag === "Milliseconds") {
    const $0 = parseInt1(3)(exactLength)("Incorrect millisecond");
    return (state1, more, lift1$1, $$throw, done) => more(v1 => $0(
      state1,
      more,
      lift1$1,
      $$throw,
      (state2, a) => more(v2 => lift1(monadStateStateT.state(s => Data$dTuple.$Tuple(
        undefined,
        {millisecond: Data$dMaybe.$Maybe("Just", a), day: s.day, hour: s.hour, meridiem: s.meridiem, minute: s.minute, month: s.month, second: s.second, year: s.year}
      )))(state2, more, lift1$1, $$throw, done))
    ));
  }
  if (v.tag === "Placeholder") {
    return (state1, more, lift1$1, $$throw, done) => more(v1 => Parsing$dString.string(v._1)(state1, more, lift1$1, $$throw, (state2, a) => more(v2 => done(state2, undefined))));
  }
  if (v.tag === "MillisecondsShort") {
    const $0 = parseInt1(1)(exactLength)("Incorrect 1-digit millisecond");
    return (state1, more, lift1$1, $$throw, done) => more(v1 => more(v1$1 => $0(
      state1,
      more,
      lift1$1,
      $$throw,
      (state2, a) => more(v2 => {
        const $1 = a * 100 | 0;
        return more(v2$1 => lift1(monadStateStateT.state(s => Data$dTuple.$Tuple(
          undefined,
          {millisecond: Data$dMaybe.$Maybe("Just", $1), day: s.day, hour: s.hour, meridiem: s.meridiem, minute: s.minute, month: s.month, second: s.second, year: s.year}
        )))(state2, more, lift1$1, $$throw, done));
      })
    )));
  }
  if (v.tag === "MillisecondsTwoDigits") {
    const $0 = parseInt1(2)(exactLength)("Incorrect 2-digit millisecond");
    return (state1, more, lift1$1, $$throw, done) => more(v1 => more(v1$1 => $0(
      state1,
      more,
      lift1$1,
      $$throw,
      (state2, a) => more(v2 => {
        const $1 = a * 10 | 0;
        return more(v2$1 => lift1(monadStateStateT.state(s => Data$dTuple.$Tuple(
          undefined,
          {millisecond: Data$dMaybe.$Maybe("Just", $1), day: s.day, hour: s.hour, meridiem: s.meridiem, minute: s.minute, month: s.month, second: s.second, year: s.year}
        )))(state2, more, lift1$1, $$throw, done));
      })
    )));
  }
  $runtime.fail();
};
const eqMeridiem = {
  eq: x => y => {
    if (x === "AM") { return y === "AM"; }
    return x === "PM" && y === "PM";
  }
};
const eqFormatterCommand = {
  eq: x => y => {
    if (x.tag === "YearFull") { return y.tag === "YearFull"; }
    if (x.tag === "YearTwoDigits") { return y.tag === "YearTwoDigits"; }
    if (x.tag === "YearAbsolute") { return y.tag === "YearAbsolute"; }
    if (x.tag === "MonthFull") { return y.tag === "MonthFull"; }
    if (x.tag === "MonthShort") { return y.tag === "MonthShort"; }
    if (x.tag === "MonthTwoDigits") { return y.tag === "MonthTwoDigits"; }
    if (x.tag === "DayOfMonthTwoDigits") { return y.tag === "DayOfMonthTwoDigits"; }
    if (x.tag === "DayOfMonth") { return y.tag === "DayOfMonth"; }
    if (x.tag === "UnixTimestamp") { return y.tag === "UnixTimestamp"; }
    if (x.tag === "DayOfWeek") { return y.tag === "DayOfWeek"; }
    if (x.tag === "DayOfWeekName") { return y.tag === "DayOfWeekName"; }
    if (x.tag === "DayOfWeekNameShort") { return y.tag === "DayOfWeekNameShort"; }
    if (x.tag === "Hours24") { return y.tag === "Hours24"; }
    if (x.tag === "Hours12") { return y.tag === "Hours12"; }
    if (x.tag === "Meridiem") { return y.tag === "Meridiem"; }
    if (x.tag === "Minutes") { return y.tag === "Minutes"; }
    if (x.tag === "MinutesTwoDigits") { return y.tag === "MinutesTwoDigits"; }
    if (x.tag === "Seconds") { return y.tag === "Seconds"; }
    if (x.tag === "SecondsTwoDigits") { return y.tag === "SecondsTwoDigits"; }
    if (x.tag === "Milliseconds") { return y.tag === "Milliseconds"; }
    if (x.tag === "MillisecondsShort") { return y.tag === "MillisecondsShort"; }
    if (x.tag === "MillisecondsTwoDigits") { return y.tag === "MillisecondsTwoDigits"; }
    return x.tag === "Placeholder" && y.tag === "Placeholder" && x._1 === y._1;
  }
};
const ordFormatterCommand = {
  compare: x => y => {
    if (x.tag === "YearFull") {
      if (y.tag === "YearFull") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "YearFull") { return Data$dOrdering.GT; }
    if (x.tag === "YearTwoDigits") {
      if (y.tag === "YearTwoDigits") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "YearTwoDigits") { return Data$dOrdering.GT; }
    if (x.tag === "YearAbsolute") {
      if (y.tag === "YearAbsolute") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "YearAbsolute") { return Data$dOrdering.GT; }
    if (x.tag === "MonthFull") {
      if (y.tag === "MonthFull") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "MonthFull") { return Data$dOrdering.GT; }
    if (x.tag === "MonthShort") {
      if (y.tag === "MonthShort") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "MonthShort") { return Data$dOrdering.GT; }
    if (x.tag === "MonthTwoDigits") {
      if (y.tag === "MonthTwoDigits") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "MonthTwoDigits") { return Data$dOrdering.GT; }
    if (x.tag === "DayOfMonthTwoDigits") {
      if (y.tag === "DayOfMonthTwoDigits") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "DayOfMonthTwoDigits") { return Data$dOrdering.GT; }
    if (x.tag === "DayOfMonth") {
      if (y.tag === "DayOfMonth") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "DayOfMonth") { return Data$dOrdering.GT; }
    if (x.tag === "UnixTimestamp") {
      if (y.tag === "UnixTimestamp") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "UnixTimestamp") { return Data$dOrdering.GT; }
    if (x.tag === "DayOfWeek") {
      if (y.tag === "DayOfWeek") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "DayOfWeek") { return Data$dOrdering.GT; }
    if (x.tag === "DayOfWeekName") {
      if (y.tag === "DayOfWeekName") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "DayOfWeekName") { return Data$dOrdering.GT; }
    if (x.tag === "DayOfWeekNameShort") {
      if (y.tag === "DayOfWeekNameShort") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "DayOfWeekNameShort") { return Data$dOrdering.GT; }
    if (x.tag === "Hours24") {
      if (y.tag === "Hours24") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Hours24") { return Data$dOrdering.GT; }
    if (x.tag === "Hours12") {
      if (y.tag === "Hours12") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Hours12") { return Data$dOrdering.GT; }
    if (x.tag === "Meridiem") {
      if (y.tag === "Meridiem") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Meridiem") { return Data$dOrdering.GT; }
    if (x.tag === "Minutes") {
      if (y.tag === "Minutes") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Minutes") { return Data$dOrdering.GT; }
    if (x.tag === "MinutesTwoDigits") {
      if (y.tag === "MinutesTwoDigits") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "MinutesTwoDigits") { return Data$dOrdering.GT; }
    if (x.tag === "Seconds") {
      if (y.tag === "Seconds") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Seconds") { return Data$dOrdering.GT; }
    if (x.tag === "SecondsTwoDigits") {
      if (y.tag === "SecondsTwoDigits") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "SecondsTwoDigits") { return Data$dOrdering.GT; }
    if (x.tag === "Milliseconds") {
      if (y.tag === "Milliseconds") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Milliseconds") { return Data$dOrdering.GT; }
    if (x.tag === "MillisecondsShort") {
      if (y.tag === "MillisecondsShort") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "MillisecondsShort") { return Data$dOrdering.GT; }
    if (x.tag === "MillisecondsTwoDigits") {
      if (y.tag === "MillisecondsTwoDigits") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "MillisecondsTwoDigits") { return Data$dOrdering.GT; }
    if (x.tag === "Placeholder" && y.tag === "Placeholder") { return Data$dOrd.ordString.compare(x._1)(y._1); }
    $runtime.fail();
  },
  Eq0: () => eqFormatterCommand
};
const unformatAccumToDateTime = a => {
  const $0 = validAccum(a);
  const $1 = (() => {
    if (a.year.tag === "Nothing") { return 0; }
    if (a.year.tag === "Just") { return a.year._1; }
    $runtime.fail();
  })();
  const $2 = $1 >= -271820 && $1 <= 275759 ? Data$dEither.$Either("Right", $1) : Data$dEither.$Either("Left", "Incorrect year");
  const $3 = (() => {
    if ($2.tag === "Left") { return Data$dEither.$Either("Left", $2._1); }
    if ($2.tag === "Right") {
      const $3 = Data$dDate$dComponent.boundedEnumMonth.toEnum((() => {
        if (a.month.tag === "Nothing") { return 1; }
        if (a.month.tag === "Just") { return a.month._1; }
        $runtime.fail();
      })());
      if ($3.tag === "Nothing") { return Data$dEither.$Either("Left", "Incorrect month"); }
      if ($3.tag === "Just") { return Data$dEither.$Either("Right", Data$dDate.canonicalDate($2._1)($3._1)); }
    }
    $runtime.fail();
  })();
  const $4 = (() => {
    const $4 = (() => {
      if (a.day.tag === "Nothing") { return 1; }
      if (a.day.tag === "Just") { return a.day._1; }
      $runtime.fail();
    })();
    const $5 = a.hour.tag === "Just" && a.hour._1 === 24 ? $4 + 1 | 0 : $4;
    const $6 = $5 >= 1 && $5 <= 31 ? Data$dEither.$Either("Right", $5) : Data$dEither.$Either("Left", "Incorrect day");
    const $7 = (() => {
      if ($3.tag === "Left") { return Data$dEither.$Either("Left", $3._1); }
      if ($3.tag === "Right") {
        if ($6.tag === "Left") { return Data$dEither.$Either("Left", $6._1); }
        if ($6.tag === "Right") { return Data$dEither.$Either("Right", $3._1($6._1)); }
      }
      $runtime.fail();
    })();
    const $8 = (() => {
      if ($7.tag === "Left") { return Data$dEither.$Either("Left", $7._1); }
      if ($7.tag === "Right") { return Data$dEither.$Either("Right", Data$dDateTime.DateTime($7._1)); }
      $runtime.fail();
    })();
    const $9 = (() => {
      if (a.hour.tag === "Just") {
        if (a.meridiem.tag === "Just") {
          if (a.hour._1 === 12) {
            if (a.meridiem._1 === "AM") { return 0; }
            if (a.meridiem._1 === "PM") { return 12; }
            $runtime.fail();
          }
          if (a.meridiem._1 === "PM") { return a.hour._1 + 12 | 0; }
          if (a.meridiem._1 === "AM") { return a.hour._1; }
          $runtime.fail();
        }
        if (a.meridiem.tag === "Nothing") {
          if (a.hour._1 === 24) { return 0; }
          return a.hour._1;
        }
        $runtime.fail();
      }
      return 0;
    })();
    const $10 = $9 >= 0 && $9 <= 23 ? Data$dEither.$Either("Right", $9) : Data$dEither.$Either("Left", "Incorrect hour");
    if ($10.tag === "Left") {
      if ($8.tag === "Left") { return Data$dEither.$Either("Left", $8._1); }
      if ($8.tag === "Right") { return Data$dEither.$Either("Left", $10._1); }
      $runtime.fail();
    }
    if ($10.tag === "Right") {
      const $11 = (() => {
        if (a.minute.tag === "Nothing") { return 0; }
        if (a.minute.tag === "Just") { return a.minute._1; }
        $runtime.fail();
      })();
      if ($11 >= 0 && $11 <= 59) {
        const $12 = (() => {
          if (a.second.tag === "Nothing") { return 0; }
          if (a.second.tag === "Just") { return a.second._1; }
          $runtime.fail();
        })();
        if ($12 >= 0 && $12 <= 59) {
          const $13 = (() => {
            if (a.millisecond.tag === "Nothing") { return 0; }
            if (a.millisecond.tag === "Just") { return a.millisecond._1; }
            $runtime.fail();
          })();
          if ($13 >= 0 && $13 <= 999) {
            if ($8.tag === "Left") { return Data$dEither.$Either("Left", $8._1); }
            if ($8.tag === "Right") { return Data$dEither.$Either("Right", $8._1(Data$dTime.$Time($10._1, $11, $12, $13))); }
            $runtime.fail();
          }
          if ($8.tag === "Left") { return Data$dEither.$Either("Left", $8._1); }
          if ($8.tag === "Right") { return Data$dEither.$Either("Left", "Incorrect millisecond"); }
          $runtime.fail();
        }
        const $13 = (() => {
          if (a.millisecond.tag === "Nothing") { return 0; }
          if (a.millisecond.tag === "Just") { return a.millisecond._1; }
          $runtime.fail();
        })();
        if ($8.tag === "Left") { return Data$dEither.$Either("Left", $8._1); }
        if ($8.tag === "Right") { return Data$dEither.$Either("Left", "Incorrect second"); }
        $runtime.fail();
      }
      if ($8.tag === "Left") { return Data$dEither.$Either("Left", $8._1); }
      if ($8.tag === "Right") { return Data$dEither.$Either("Left", "Incorrect minute"); }
      $runtime.fail();
    }
    if ($8.tag === "Left") { return Data$dEither.$Either("Left", $8._1); }
    $runtime.fail();
  })();
  if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
  if ($0.tag === "Right") {
    if ($4.tag === "Left") { return Data$dEither.$Either("Left", $4._1); }
    if ($4.tag === "Right") { return Data$dEither.$Either("Right", $4._1); }
  }
  $runtime.fail();
};
const unformatParser = dictMonad => {
  const mapParserT1 = mapParserT(dictMonad.Bind1().Apply0().Functor0());
  return f => {
    const $0 = mapParserT1(s => {
      const v = s(initialAccum);
      return dictMonad.Applicative0().pure(Data$dTuple.$Tuple(
        (() => {
          if (v._1._1.tag === "Left") { return Data$dEither.$Either("Left", v._1._1._1); }
          if (v._1._1.tag === "Right") { return Data$dEither.$Either("Right", v._2); }
          $runtime.fail();
        })(),
        v._1._2
      ));
    })(foldMap2(unformatCommandParser)(f));
    return (state1, more, lift1$1, $$throw, done) => more(v1 => $0(
      state1,
      more,
      lift1$1,
      $$throw,
      (state2, a) => more(v2 => {
        const $1 = unformatAccumToDateTime(a);
        if ($1.tag === "Left") { return Parsing.fail($1._1)(state2, more, lift1$1, $$throw, done); }
        if ($1.tag === "Right") { return done(state2, $1._1); }
        $runtime.fail();
      })
    ));
  };
};
const unformat = /* #__PURE__ */ (() => {
  const $0 = unformatParser(Data$dIdentity.monadIdentity);
  return x => Data$dFormatter$dParser$dUtils.runP($0(x));
})();
const unformatDateTime = pattern => str => {
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
  })()(v => unformat(v)(str));
};
export {
  $FormatterCommand,
  $Meridiem,
  AM,
  DayOfMonth,
  DayOfMonthTwoDigits,
  DayOfWeek,
  DayOfWeekName,
  DayOfWeekNameShort,
  Hours12,
  Hours24,
  Meridiem,
  Milliseconds,
  MillisecondsShort,
  MillisecondsTwoDigits,
  Minutes,
  MinutesTwoDigits,
  MonthFull,
  MonthShort,
  MonthTwoDigits,
  PM,
  Placeholder,
  Seconds,
  SecondsTwoDigits,
  UnixTimestamp,
  YearAbsolute,
  YearFull,
  YearTwoDigits,
  bind,
  eqFormatterCommand,
  eqMeridiem,
  exactLength,
  foldMap1,
  foldMap2,
  for_,
  format,
  formatCommand,
  formatDateTime,
  formatParser,
  formatYearTwoDigits,
  formatterCommandParser,
  genericFormatter,
  identity,
  initialAccum,
  lift1,
  mapParserT,
  monadStateStateT,
  monadStateT,
  negate,
  oneOfAs,
  ordFormatterCommand,
  padDoubleDigit,
  padQuadrupleDigit,
  padSingleDigit,
  parseDayOfWeekName,
  parseDayOfWeekName1,
  parseDayOfWeekNameShort,
  parseDayOfWeekNameShort1,
  parseDigit,
  parseFormatString,
  parseInt,
  parseInt1,
  parseMeridiem,
  parseMeridiem1,
  parseMonth,
  parseMonth1,
  parseShortMonth,
  parseShortMonth1,
  parseSignedInt,
  parseSignedInt1,
  placeholderContent,
  printFormatter,
  printFormatterCommand,
  showFormatter,
  takeMany,
  takeSome,
  takeSome1,
  unformat,
  unformatAccumToDateTime,
  unformatCommandParser,
  unformatDateTime,
  unformatParser,
  validAccum,
  validateRange
};
