import * as $runtime from "../runtime.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFormatter$dDateTime from "../Data.Formatter.DateTime/index.js";
import * as Data$dFormatter$dParser$dInterval from "../Data.Formatter.Parser.Interval/index.js";
import * as Data$dFormatter$dParser$dUtils from "../Data.Formatter.Parser.Utils/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dInterval$dDuration from "../Data.Interval.Duration/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dNumber from "../Data.Number/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
const parseDateTime = /* #__PURE__ */ Data$dFormatter$dDateTime.unformatParser(Data$dIdentity.monadIdentity)(Data$dFormatter$dParser$dInterval.extendedDateTimeFormatInUTC);
const foldMap = /* #__PURE__ */ (() => Data$dFoldable.foldableArray.foldMap(Data$dMonoid.monoidString))();
const unformatRecurringInterval = /* #__PURE__ */ Data$dFormatter$dParser$dUtils.runP(/* #__PURE__ */ Data$dFormatter$dParser$dInterval.parseRecurringInterval(Data$dFormatter$dParser$dInterval.parseIsoDuration)(parseDateTime));
const unformatInterval = /* #__PURE__ */ Data$dFormatter$dParser$dUtils.runP(/* #__PURE__ */ Data$dFormatter$dParser$dInterval.parseInterval(Data$dFormatter$dParser$dInterval.parseIsoDuration)(parseDateTime));
const formatNumber = n => {
  if (Data$dInt.toNumber(Data$dInt.unsafeClamp(Data$dNumber.floor(n))) === n) { return Data$dShow.showIntImpl(Data$dInt.unsafeClamp(Data$dNumber.floor(n))); }
  return Data$dShow.showNumberImpl(n);
};
const formatDuration = v => {
  const componentToString = v1 => {
    const $0 = Data$dMap$dInternal.lookup(Data$dInterval$dDuration.ordDurationComponent)(v1._1)(v);
    if ($0.tag === "Nothing") { return ""; }
    if ($0.tag === "Just") { return formatNumber($0._1) + v1._2; }
    $runtime.fail();
  };
  const $0 = foldMap(componentToString)([
    Data$dTuple.$Tuple(Data$dInterval$dDuration.Hour, "H"),
    Data$dTuple.$Tuple(Data$dInterval$dDuration.Minute, "M"),
    Data$dTuple.$Tuple(Data$dInterval$dDuration.Second, "S")
  ]);
  return "P" + foldMap(componentToString)([
    Data$dTuple.$Tuple(Data$dInterval$dDuration.Year, "Y"),
    Data$dTuple.$Tuple(Data$dInterval$dDuration.Month, "M"),
    Data$dTuple.$Tuple(Data$dInterval$dDuration.Week, "W"),
    Data$dTuple.$Tuple(Data$dInterval$dDuration.Day, "D")
  ]) + ($0 === "" ? "" : "T" + $0);
};
const formatInterval = v => {
  if (v.tag === "StartEnd") {
    return Data$dFormatter$dDateTime.foldMap1(Data$dFormatter$dDateTime.formatCommand(v._1))(Data$dFormatter$dParser$dInterval.extendedDateTimeFormatInUTC) + "/" + Data$dFormatter$dDateTime.foldMap1(Data$dFormatter$dDateTime.formatCommand(v._2))(Data$dFormatter$dParser$dInterval.extendedDateTimeFormatInUTC);
  }
  if (v.tag === "DurationEnd") {
    return formatDuration(v._1) + "/" + Data$dFormatter$dDateTime.foldMap1(Data$dFormatter$dDateTime.formatCommand(v._2))(Data$dFormatter$dParser$dInterval.extendedDateTimeFormatInUTC);
  }
  if (v.tag === "StartDuration") {
    return Data$dFormatter$dDateTime.foldMap1(Data$dFormatter$dDateTime.formatCommand(v._1))(Data$dFormatter$dParser$dInterval.extendedDateTimeFormatInUTC) + "/" + formatDuration(v._2);
  }
  if (v.tag === "DurationOnly") { return formatDuration(v._1); }
  $runtime.fail();
};
const formatRecurringInterval = v => (() => {
  if (v._1.tag === "Nothing") { return "R/"; }
  if (v._1.tag === "Just") { return "R" + Data$dShow.showIntImpl(v._1._1) + "/"; }
  $runtime.fail();
})() + formatInterval(v._2);
export {foldMap, formatDuration, formatInterval, formatNumber, formatRecurringInterval, parseDateTime, unformatInterval, unformatRecurringInterval};
