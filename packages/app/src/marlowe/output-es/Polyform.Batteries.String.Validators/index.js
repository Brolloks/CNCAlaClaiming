import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Polyform$dBatteries$dGeneric$dEq$dMessages from "../Polyform.Batteries.Generic.Eq.Messages/index.js";
import * as Polyform$dBatteries$dGeneric$dEq$dValidators from "../Polyform.Batteries.Generic.Eq.Validators/index.js";
import * as Polyform$dBatteries$dGeneric$dMonoid$dValidators from "../Polyform.Batteries.Generic.Monoid.Validators/index.js";
import * as Polyform$dBatteries$dGeneric$dOrd$dValidators from "../Polyform.Batteries.Generic.Ord.Validators/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const smallerThan1 = /* #__PURE__ */ Polyform$dBatteries$dGeneric$dOrd$dValidators.smallerThan()({reflectSymbol: () => "stringNotSmallerThan"})(Data$dOrd.ordString);
const notSmallerThan = v => "Given value " + Data$dShow.showStringImpl(v.value) + " is not smaller than " + Data$dShow.showStringImpl(v.max) + ".";
const oneOf1 = /* #__PURE__ */ Polyform$dBatteries$dGeneric$dEq$dValidators.oneOf()({reflectSymbol: () => "stringNotOneOf"})(Data$dEq.eqString);
const missingFrom1 = /* #__PURE__ */ Polyform$dBatteries$dGeneric$dEq$dValidators.missingFrom()({reflectSymbol: () => "stringNotMissingFrom"})(Data$dEq.eqString);
const inRange1 = /* #__PURE__ */ Polyform$dBatteries$dGeneric$dOrd$dValidators.inRange()({reflectSymbol: () => "stringNotInRange"})(Data$dOrd.ordString);
const notInRange = v => "Given value " + Data$dShow.showStringImpl(v.value) + " is not in expected range (" + Data$dShow.showStringImpl(v.min) + ", " + Data$dShow.showStringImpl(v.max) + ").";
const greaterThan1 = /* #__PURE__ */ Polyform$dBatteries$dGeneric$dOrd$dValidators.greaterThan()({reflectSymbol: () => "stringNotGreaterThan"})(Data$dOrd.ordString);
const notGreaterThan = v => "Given value " + Data$dShow.showStringImpl(v.value) + " is not greater than " + Data$dShow.showStringImpl(v.min) + ".";
const equalTo1 = /* #__PURE__ */ Polyform$dBatteries$dGeneric$dEq$dValidators.equalTo()({reflectSymbol: () => "stringNotEqualTo"})(Data$dEq.eqString);
const notEqualTo = v => "Expecting value " + Data$dShow.showStringImpl(v.expected) + " but got " + Data$dShow.showStringImpl(v.got) + ".";
const differentThan1 = /* #__PURE__ */ Polyform$dBatteries$dGeneric$dEq$dValidators.differentThan()({reflectSymbol: () => "stringNotDifferentThan"})(Data$dEq.eqString);
const notDifferentThan = value => "Expecting different value than " + Data$dShow.showStringImpl(value) + ".";
const isNotEmpty1 = /* #__PURE__ */ Polyform$dBatteries$dGeneric$dMonoid$dValidators.isNotEmpty()({reflectSymbol: () => "stringNotEmptyExpected"})(Data$dMonoid.monoidString)(Data$dEq.eqString);
const notEmptyExpected = v => "Expecting value different than: \"\".";
const isEmpty1 = /* #__PURE__ */ Polyform$dBatteries$dGeneric$dMonoid$dValidators.isEmpty()({reflectSymbol: () => "stringEmptyExpected"})(Data$dEq.eqString)(Data$dMonoid.monoidString);
const emptyExpected = a => "Expecting: \"\" but got " + Data$dShow.showStringImpl(a) + ".";
const _notSmallerThan = Type$dProxy.Proxy;
const smallerThan = dictApplicative => smallerThan1(dictApplicative)(Type$dProxy.Proxy)(notSmallerThan);
const _notOneOf = Type$dProxy.Proxy;
const oneOf = dictApplicative => oneOf1(dictApplicative)(Type$dProxy.Proxy)(Polyform$dBatteries$dGeneric$dEq$dMessages.notOneOf(Data$dShow.showString));
const _notMissingFrom = Type$dProxy.Proxy;
const missingFrom = dictApplicative => missingFrom1(dictApplicative)(Type$dProxy.Proxy)(Polyform$dBatteries$dGeneric$dEq$dMessages.notMissingFrom(Data$dShow.showString));
const _notInRange = Type$dProxy.Proxy;
const inRange = dictApplicative => inRange1(dictApplicative)(Type$dProxy.Proxy)(notInRange);
const _notGreaterThan = Type$dProxy.Proxy;
const greaterThan = dictApplicative => greaterThan1(dictApplicative)(Type$dProxy.Proxy)(notGreaterThan);
const _notEqualTo = Type$dProxy.Proxy;
const equalTo = dictApplicative => equalTo1(dictApplicative)(Type$dProxy.Proxy)(notEqualTo);
const _notDifferentThan = Type$dProxy.Proxy;
const differentThan = dictApplicative => differentThan1(dictApplicative)(Type$dProxy.Proxy)(notDifferentThan);
const _nonEmptyExpected = Type$dProxy.Proxy;
const isNotEmpty = dictApplicative => isNotEmpty1(dictApplicative)(Type$dProxy.Proxy)(notEmptyExpected);
const _emptyExpected = Type$dProxy.Proxy;
const isEmpty = dictApplicative => isEmpty1(dictApplicative)(Type$dProxy.Proxy)(emptyExpected);
export {
  _emptyExpected,
  _nonEmptyExpected,
  _notDifferentThan,
  _notEqualTo,
  _notGreaterThan,
  _notInRange,
  _notMissingFrom,
  _notOneOf,
  _notSmallerThan,
  differentThan,
  differentThan1,
  emptyExpected,
  equalTo,
  equalTo1,
  greaterThan,
  greaterThan1,
  inRange,
  inRange1,
  isEmpty,
  isEmpty1,
  isNotEmpty,
  isNotEmpty1,
  missingFrom,
  missingFrom1,
  notDifferentThan,
  notEmptyExpected,
  notEqualTo,
  notGreaterThan,
  notInRange,
  notSmallerThan,
  oneOf,
  oneOf1,
  smallerThan,
  smallerThan1
};
