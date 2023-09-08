import * as Data$dLazy from "../Data.Lazy/index.js";
import * as Polyform$dBatteries$dUrlEncoded$dTypes$dErrors from "../Polyform.Batteries.UrlEncoded.Types.Errors/index.js";
import * as Polyform$dDual from "../Polyform.Dual/index.js";
import * as Polyform$dValidator from "../Polyform.Validator/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const stringifyValidator = dictMonad => Polyform$dValidator.lmapValidator(dictMonad)(Polyform$dBatteries$dUrlEncoded$dTypes$dErrors.functorErrors.map(x => Data$dLazy.force(x.msg)));
const fromValidator = dictMonad => v => Polyform$dValidator.lmapValidator(dictMonad)(Polyform$dBatteries$dUrlEncoded$dTypes$dErrors.singleton(v));
const fromDual = dictMonad => name => {
  const $0 = Polyform$dValidator.lmapValidator(dictMonad)(Polyform$dBatteries$dUrlEncoded$dTypes$dErrors.singleton(name));
  return v => Polyform$dDual.$DualD($0(v._1), v._2);
};
const _urlEncoded = Type$dProxy.Proxy;
export {_urlEncoded, fromDual, fromValidator, stringifyValidator};
