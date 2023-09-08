import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Polyform$dBatteries$dGeneric$dEq$dValidators from "../Polyform.Batteries.Generic.Eq.Validators/index.js";
import * as Polyform$dBatteries$dGeneric$dOrd$dValidators from "../Polyform.Batteries.Generic.Ord.Validators/index.js";
import * as Polyform$dBatteries$dString$dValidators from "../Polyform.Batteries.String.Validators/index.js";
import * as Polyform$dDual from "../Polyform.Dual/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const smallerThan = dictApplicative => min => Polyform$dDual.$DualD(Polyform$dBatteries$dString$dValidators.smallerThan(dictApplicative)(min), Data$dIdentity.Identity);
const oneOf = dictApplicative => arr => Polyform$dDual.$DualD(Polyform$dBatteries$dString$dValidators.oneOf(dictApplicative)(arr), Data$dIdentity.Identity);
const missingFrom = dictApplicative => arr => Polyform$dDual.$DualD(Polyform$dBatteries$dString$dValidators.missingFrom(dictApplicative)(arr), Data$dIdentity.Identity);
const isNotEmpty = dictApplicative => Polyform$dDual.$DualD(
  Polyform$dBatteries$dString$dValidators.isNotEmpty1(dictApplicative)(Type$dProxy.Proxy)(Polyform$dBatteries$dString$dValidators.notEmptyExpected),
  Data$dIdentity.Identity
);
const isEmpty = dictApplicative => Polyform$dDual.$DualD(
  Polyform$dBatteries$dString$dValidators.isEmpty1(dictApplicative)(Type$dProxy.Proxy)(Polyform$dBatteries$dString$dValidators.emptyExpected),
  Data$dIdentity.Identity
);
const inRange = dictApplicative => range => Polyform$dDual.$DualD(
  Polyform$dBatteries$dGeneric$dOrd$dValidators.inRange()({reflectSymbol: () => "stringNotInRange"})(Data$dOrd.ordString)(dictApplicative)(Type$dProxy.Proxy)(Polyform$dBatteries$dString$dValidators.notInRange)(range),
  Data$dIdentity.Identity
);
const greaterThan = dictApplicative => max => Polyform$dDual.$DualD(Polyform$dBatteries$dString$dValidators.greaterThan(dictApplicative)(max), Data$dIdentity.Identity);
const equalTo = dictApplicative => min => Polyform$dDual.$DualD(Polyform$dBatteries$dString$dValidators.equalTo(dictApplicative)(min), Data$dIdentity.Identity);
const differentThan = dictApplicative => n => Polyform$dDual.$DualD(
  Polyform$dBatteries$dGeneric$dEq$dValidators.differentThan()({reflectSymbol: () => "stringNotDifferentThan"})(Data$dEq.eqString)(dictApplicative)(Type$dProxy.Proxy)(Polyform$dBatteries$dString$dValidators.notDifferentThan)(n),
  Data$dIdentity.Identity
);
export {differentThan, equalTo, greaterThan, inRange, isEmpty, isNotEmpty, missingFrom, oneOf, smallerThan};
