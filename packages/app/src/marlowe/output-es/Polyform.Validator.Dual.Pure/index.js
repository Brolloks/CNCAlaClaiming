import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Polyform$dValidator$dDual from "../Polyform.Validator.Dual/index.js";
const runValidator = dual => x => dual._1(x);
const runSerializer = dual => x => dual._2(x);
const generalize = dictApplicative => Polyform$dValidator$dDual.hoist(Data$dIdentity.functorIdentity)(v => dictApplicative.pure(v));
export {generalize, runSerializer, runValidator};
