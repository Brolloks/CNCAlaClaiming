import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dLazy from "../Data.Lazy/index.js";
import * as Polyform$dValidator from "../Polyform.Validator/index.js";
import * as Polyform$dValidator$dDual from "../Polyform.Validator.Dual/index.js";
const stringifyValidator = dictMonad => Polyform$dValidator.lmapValidator(dictMonad)(Data$dFunctor.arrayMap(x => Data$dLazy.force(x.msg)));
const stringifyDual = dictMonad => Polyform$dValidator$dDual.lmapDual(dictMonad)(Data$dFunctor.arrayMap(x => Data$dLazy.force(x.msg)));
export {stringifyDual, stringifyValidator};
