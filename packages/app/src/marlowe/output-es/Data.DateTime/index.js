import * as $runtime from "../runtime.js";
import * as Data$dDate from "../Data.Date/index.js";
import * as Data$dDate$dComponent from "../Data.Date.Component/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import * as Data$dTime from "../Data.Time/index.js";
import {adjustImpl, calcDiff} from "./foreign.js";
const $DateTime = (_1, _2) => ({tag: "DateTime", _1, _2});
const DateTime = value0 => value1 => $DateTime(value0, value1);
const toRecord = v => (
  {
    year: v._1._1,
    month: (() => {
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
    })(),
    day: v._1._3,
    hour: v._2._1,
    minute: v._2._2,
    second: v._2._3,
    millisecond: v._2._4
  }
);
const time = v => v._2;
const showDateTime = {show: v => "(DateTime " + Data$dDate.showDate.show(v._1) + " " + Data$dTime.showTime.show(v._2) + ")"};
const modifyTimeF = dictFunctor => f => v => dictFunctor.map(DateTime(v._1))(f(v._2));
const modifyTime = f => v => $DateTime(v._1, f(v._2));
const modifyDateF = dictFunctor => f => v => {
  const $0 = v._2;
  return dictFunctor.map(a => $DateTime(a, $0))(f(v._1));
};
const modifyDate = f => v => $DateTime(f(v._1), v._2);
const eqDateTime = {eq: x => y => Data$dDate.eqDate.eq(x._1)(y._1) && x._2._1 === y._2._1 && x._2._2 === y._2._2 && x._2._3 === y._2._3 && x._2._4 === y._2._4};
const ordDateTime = {
  compare: x => y => {
    const v = Data$dDate.ordDate.compare(x._1)(y._1);
    if (v === "LT") { return Data$dOrdering.LT; }
    if (v === "GT") { return Data$dOrdering.GT; }
    return Data$dTime.ordTime.compare(x._2)(y._2);
  },
  Eq0: () => eqDateTime
};
const diff = dictDuration => dt1 => dt2 => dictDuration.toDuration(calcDiff(toRecord(dt1), toRecord(dt2)));
const date = v => v._1;
const boundedDateTime = {
  bottom: /* #__PURE__ */ $DateTime(/* #__PURE__ */ Data$dDate.$$$Date(-271820, Data$dDate$dComponent.January, 1), /* #__PURE__ */ Data$dTime.$Time(0, 0, 0, 0)),
  top: /* #__PURE__ */ $DateTime(/* #__PURE__ */ Data$dDate.$$$Date(275759, Data$dDate$dComponent.December, 31), /* #__PURE__ */ Data$dTime.$Time(23, 59, 59, 999)),
  Ord0: () => ordDateTime
};
const adjust = dictDuration => d => dt => {
  const $0 = adjustImpl(Data$dMaybe.Just)(Data$dMaybe.Nothing)(dictDuration.fromDuration(d))(toRecord(dt));
  if ($0.tag === "Just") {
    return Data$dMaybe.applyMaybe.apply((() => {
      const $1 = Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply($0._1.year >= -271820 && $0._1.year <= 275759
        ? Data$dMaybe.$Maybe("Just", Data$dDate.exactDate($0._1.year))
        : Data$dMaybe.Nothing)(Data$dDate$dComponent.boundedEnumMonth.toEnum($0._1.month)))($0._1.day >= 1 && $0._1.day <= 31
        ? Data$dMaybe.$Maybe("Just", $0._1.day)
        : Data$dMaybe.Nothing);
      const $2 = (() => {
        if ($1.tag === "Just") { return $1._1; }
        if ($1.tag === "Nothing") { return Data$dMaybe.Nothing; }
        $runtime.fail();
      })();
      if ($2.tag === "Just") { return Data$dMaybe.$Maybe("Just", DateTime($2._1)); }
      return Data$dMaybe.Nothing;
    })())(Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply($0._1.hour >= 0 && $0._1.hour <= 23
      ? Data$dMaybe.$Maybe("Just", Data$dTime.Time($0._1.hour))
      : Data$dMaybe.Nothing)($0._1.minute >= 0 && $0._1.minute <= 59 ? Data$dMaybe.$Maybe("Just", $0._1.minute) : Data$dMaybe.Nothing))($0._1.second >= 0 && $0._1.second <= 59
      ? Data$dMaybe.$Maybe("Just", $0._1.second)
      : Data$dMaybe.Nothing))($0._1.millisecond >= 0 && $0._1.millisecond <= 999 ? Data$dMaybe.$Maybe("Just", $0._1.millisecond) : Data$dMaybe.Nothing));
  }
  if ($0.tag === "Nothing") { return Data$dMaybe.Nothing; }
  $runtime.fail();
};
export {$DateTime, DateTime, adjust, boundedDateTime, date, diff, eqDateTime, modifyDate, modifyDateF, modifyTime, modifyTimeF, ordDateTime, showDateTime, time, toRecord};
export * from "./foreign.js";
