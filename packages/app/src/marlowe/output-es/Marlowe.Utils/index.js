import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Language$dMarlowe$dCore$dV1$dFolds from "../Language.Marlowe.Core.V1.Folds/index.js";
const mapValue = v => {
  if (v.tag === "AvailableMoney") {
    if (v._1.tag === "Role") { return [v._1._1]; }
    return [];
  }
  if (v.tag === "ChoiceValue" && v._1._2.tag === "Role") { return [v._1._2._1]; }
  return [];
};
const mapObservation = v => {
  if (v.tag === "ChoseSomething" && v._1._2.tag === "Role") { return [v._1._2._1]; }
  return [];
};
const mapContract = v => {
  if (v.tag === "Pay") {
    if (v._2.tag === "Party" && v._2._1.tag === "Role") {
      if (v._1.tag === "Role") { return [v._1._1, v._2._1._1]; }
      return [v._2._1._1];
    }
    if (v._1.tag === "Role") { return [v._1._1]; }
  }
  return [];
};
const getRoleTokenStep = /* #__PURE__ */ Language$dMarlowe$dCore$dV1$dFolds.$MapStep({mapCase: v => [], mapContract, mapObservation, mapValue});
const allRolesInContract = /* #__PURE__ */ Language$dMarlowe$dCore$dV1$dFolds.foldMapContract(Data$dMonoid.monoidArray)(getRoleTokenStep);
export {allRolesInContract, getRoleTokenStep, mapContract, mapObservation, mapValue};
