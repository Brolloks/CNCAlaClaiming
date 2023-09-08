import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Polyform$dTokenized$dValidator$dDual from "../Polyform.Tokenized.Validator.Dual/index.js";
const runValidator = /* #__PURE__ */ Polyform$dTokenized$dValidator$dDual.runValidator(Data$dIdentity.monadIdentity);
const runSerializer = x => x$1 => x._2(x$1);
export {runSerializer, runValidator};
