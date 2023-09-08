import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Polyform$dBatteries$dGeneric$dEq$dValidators from "../Polyform.Batteries.Generic.Eq.Validators/index.js";
import * as Polyform$dBatteries$dGeneric$dOrd$dValidators from "../Polyform.Batteries.Generic.Ord.Validators/index.js";
import * as Polyform$dBatteries$dNumber$dValidators from "../Polyform.Batteries.Number.Validators/index.js";
import * as Polyform$dDual from "../Polyform.Dual/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const smallerThan = dictApplicative => min => Polyform$dDual.$DualD(Polyform$dBatteries$dNumber$dValidators.smallerThan(dictApplicative)(min), Data$dIdentity.Identity);
const oneOf = dictApplicative => arr => Polyform$dDual.$DualD(Polyform$dBatteries$dNumber$dValidators.oneOf(dictApplicative)(arr), Data$dIdentity.Identity);
const missingFrom = dictApplicative => arr => Polyform$dDual.$DualD(Polyform$dBatteries$dNumber$dValidators.missingFrom(dictApplicative)(arr), Data$dIdentity.Identity);
const inRange = dictApplicative => range => Polyform$dDual.$DualD(
  Polyform$dBatteries$dGeneric$dOrd$dValidators.inRange()({reflectSymbol: () => "numberNotInRange"})(Data$dOrd.ordNumber)(dictApplicative)(Type$dProxy.Proxy)(Polyform$dBatteries$dNumber$dValidators.notInRange)(range),
  Data$dIdentity.Identity
);
const greaterThan = dictApplicative => max => Polyform$dDual.$DualD(Polyform$dBatteries$dNumber$dValidators.greaterThan(dictApplicative)(max), Data$dIdentity.Identity);
const equalTo = dictApplicative => min => Polyform$dDual.$DualD(Polyform$dBatteries$dNumber$dValidators.equalTo(dictApplicative)(min), Data$dIdentity.Identity);
const differentThan = dictApplicative => n => Polyform$dDual.$DualD(
  Polyform$dBatteries$dGeneric$dEq$dValidators.differentThan()({reflectSymbol: () => "numberNotDifferentThan"})(Data$dEq.eqNumber)(dictApplicative)(Type$dProxy.Proxy)(Polyform$dBatteries$dNumber$dValidators.notDifferentThan)(n),
  Data$dIdentity.Identity
);
export {differentThan, equalTo, greaterThan, inRange, missingFrom, oneOf, smallerThan};
