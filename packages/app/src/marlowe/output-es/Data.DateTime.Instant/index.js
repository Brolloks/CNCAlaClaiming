import * as $runtime from "../runtime.js";
import * as Data$dDate from "../Data.Date/index.js";
import * as Data$dDate$dComponent from "../Data.Date.Component/index.js";
import * as Data$dDateTime from "../Data.DateTime/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTime from "../Data.Time/index.js";
import {fromDateTimeImpl, toDateTimeImpl} from "./foreign.js";
const unInstant = v => v;
const toDateTime = /* #__PURE__ */ toDateTimeImpl(y => mo => d => h => mi => s => ms => Data$dDateTime.$DateTime(
  Data$dDate.canonicalDate(y)((() => {
    const $0 = Data$dDate$dComponent.boundedEnumMonth.toEnum(mo);
    if ($0.tag === "Just") { return $0._1; }
    $runtime.fail();
  })())(d),
  Data$dTime.$Time(h, mi, s, ms)
));
const showInstant = {show: v => "(Instant (Milliseconds " + Data$dShow.showNumberImpl(v) + "))"};
const ordDateTime = Data$dOrd.ordNumber;
const instant = v => {
  if (v >= -8639977881600000.0 && v <= 8639977881599999.0) { return Data$dMaybe.$Maybe("Just", v); }
  return Data$dMaybe.Nothing;
};
const fromDateTime = v => fromDateTimeImpl(
  v._1._1,
  (() => {
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
  v._1._3,
  v._2._1,
  v._2._2,
  v._2._3,
  v._2._4
);
const fromDate = d => fromDateTimeImpl(
  d._1,
  (() => {
    if (d._2 === "January") { return 1; }
    if (d._2 === "February") { return 2; }
    if (d._2 === "March") { return 3; }
    if (d._2 === "April") { return 4; }
    if (d._2 === "May") { return 5; }
    if (d._2 === "June") { return 6; }
    if (d._2 === "July") { return 7; }
    if (d._2 === "August") { return 8; }
    if (d._2 === "September") { return 9; }
    if (d._2 === "October") { return 10; }
    if (d._2 === "November") { return 11; }
    if (d._2 === "December") { return 12; }
    $runtime.fail();
  })(),
  d._3,
  0,
  0,
  0,
  0
);
const eqDateTime = Data$dEq.eqNumber;
const diff = dictDuration => dt1 => dt2 => dictDuration.toDuration(dt1 + -dt2);
const boundedInstant = {bottom: -8639977881600000.0, top: 8639977881599999.0, Ord0: () => Data$dOrd.ordNumber};
export {boundedInstant, diff, eqDateTime, fromDate, fromDateTime, instant, ordDateTime, showInstant, toDateTime, unInstant};
export * from "./foreign.js";
