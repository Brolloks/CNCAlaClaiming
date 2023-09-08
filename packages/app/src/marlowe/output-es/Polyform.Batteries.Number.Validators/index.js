import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Polyform$dBatteries$dGeneric$dEq$dMessages from "../Polyform.Batteries.Generic.Eq.Messages/index.js";
import * as Polyform$dBatteries$dGeneric$dEq$dValidators from "../Polyform.Batteries.Generic.Eq.Validators/index.js";
import * as Polyform$dBatteries$dGeneric$dOrd$dValidators from "../Polyform.Batteries.Generic.Ord.Validators/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const smallerThan1 = /* #__PURE__ */ Polyform$dBatteries$dGeneric$dOrd$dValidators.smallerThan()({reflectSymbol: () => "numberNotSmallerThan"})(Data$dOrd.ordNumber);
const notSmallerThan = v => "Given value " + Data$dShow.showNumberImpl(v.value) + " is not smaller than " + Data$dShow.showNumberImpl(v.max) + ".";
const oneOf1 = /* #__PURE__ */ Polyform$dBatteries$dGeneric$dEq$dValidators.oneOf()({reflectSymbol: () => "numberNotOneOf"})(Data$dEq.eqNumber);
const missingFrom1 = /* #__PURE__ */ Polyform$dBatteries$dGeneric$dEq$dValidators.missingFrom()({reflectSymbol: () => "numberNotMissingFrom"})(Data$dEq.eqNumber);
const inRange1 = /* #__PURE__ */ Polyform$dBatteries$dGeneric$dOrd$dValidators.inRange()({reflectSymbol: () => "numberNotInRange"})(Data$dOrd.ordNumber);
const notInRange = v => "Given value " + Data$dShow.showNumberImpl(v.value) + " is not in expected range (" + Data$dShow.showNumberImpl(v.min) + ", " + Data$dShow.showNumberImpl(v.max) + ").";
const greaterThan1 = /* #__PURE__ */ Polyform$dBatteries$dGeneric$dOrd$dValidators.greaterThan()({reflectSymbol: () => "numberNotGreaterThan"})(Data$dOrd.ordNumber);
const notGreaterThan = v => "Given value " + Data$dShow.showNumberImpl(v.value) + " is not greater than " + Data$dShow.showNumberImpl(v.min) + ".";
const equalTo1 = /* #__PURE__ */ Polyform$dBatteries$dGeneric$dEq$dValidators.equalTo()({reflectSymbol: () => "numberNotEqualTo"})(Data$dEq.eqNumber);
const notEqualTo = v => "Expecting value " + Data$dShow.showNumberImpl(v.expected) + " but got " + Data$dShow.showNumberImpl(v.got) + ".";
const differentThan1 = /* #__PURE__ */ Polyform$dBatteries$dGeneric$dEq$dValidators.differentThan()({reflectSymbol: () => "numberNotDifferentThan"})(Data$dEq.eqNumber);
const notDifferentThan = value => "Expecting different value than " + Data$dShow.showNumberImpl(value) + ".";
const _notSmallerThan = Type$dProxy.Proxy;
const smallerThan = dictApplicative => smallerThan1(dictApplicative)(Type$dProxy.Proxy)(notSmallerThan);
const _notOneOf = Type$dProxy.Proxy;
const oneOf = dictApplicative => oneOf1(dictApplicative)(Type$dProxy.Proxy)(Polyform$dBatteries$dGeneric$dEq$dMessages.notOneOf(Data$dShow.showNumber));
const _notMissingFrom = Type$dProxy.Proxy;
const missingFrom = dictApplicative => missingFrom1(dictApplicative)(Type$dProxy.Proxy)(Polyform$dBatteries$dGeneric$dEq$dMessages.notMissingFrom(Data$dShow.showNumber));
const _notInRange = Type$dProxy.Proxy;
const inRange = dictApplicative => inRange1(dictApplicative)(Type$dProxy.Proxy)(notInRange);
const _notGreaterThan = Type$dProxy.Proxy;
const greaterThan = dictApplicative => greaterThan1(dictApplicative)(Type$dProxy.Proxy)(notGreaterThan);
const _notEqualTo = Type$dProxy.Proxy;
const equalTo = dictApplicative => equalTo1(dictApplicative)(Type$dProxy.Proxy)(notEqualTo);
const _notDifferentThan = Type$dProxy.Proxy;
const differentThan = dictApplicative => differentThan1(dictApplicative)(Type$dProxy.Proxy)(notDifferentThan);
export {
  _notDifferentThan,
  _notEqualTo,
  _notGreaterThan,
  _notInRange,
  _notMissingFrom,
  _notOneOf,
  _notSmallerThan,
  differentThan,
  differentThan1,
  equalTo,
  equalTo1,
  greaterThan,
  greaterThan1,
  inRange,
  inRange1,
  missingFrom,
  missingFrom1,
  notDifferentThan,
  notEqualTo,
  notGreaterThan,
  notInRange,
  notSmallerThan,
  oneOf,
  oneOf1,
  smallerThan,
  smallerThan1
};
