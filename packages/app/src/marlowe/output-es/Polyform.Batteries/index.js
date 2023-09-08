import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dLazy from "../Data.Lazy/index.js";
import * as Polyform$dValidator from "../Polyform.Validator/index.js";
import * as Polyform$dValidator$dDual from "../Polyform.Validator.Dual/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const stringifyValidator = dictMonad => Polyform$dValidator.lmapValidator(dictMonad)(Data$dFunctor.arrayMap(x => Data$dLazy.force(x.msg)));
const stringifyDual = dictMonad => Polyform$dValidator$dDual.lmapDual(dictMonad)(Data$dFunctor.arrayMap(x => Data$dLazy.force(x.msg)));
const onErr = () => dictIsSymbol => p => f => g => v => {
  if (v.info.type === dictIsSymbol.reflectSymbol(p)) { return f({info: v.info.value, msg: v.msg}); }
  return g({msg: v.msg, info: v.info});
};
const msg = dictIsSymbol => () => m => l => i => ({msg: m, info: {type: dictIsSymbol.reflectSymbol(l), value: i}});
const msg$p = dictIsSymbol => () => m => {
  const $0 = Data$dLazy.defer(v => m);
  return l => i => ({msg: $0, info: {type: dictIsSymbol.reflectSymbol(l), value: i}});
};
const error = () => dictIsSymbol => l => prt => x => [{msg: Data$dLazy.defer(v => prt(x)), info: {type: dictIsSymbol.reflectSymbol(l), value: x}}];
const invalid = () => dictIsSymbol => l => prt => x => Data$dEither.$Either("Left", error()(dictIsSymbol)(l)(prt)(x));
const _raw = Type$dProxy.Proxy;
const rawError = m => msg$p({reflectSymbol: () => "raw"})()(m)(Type$dProxy.Proxy)([m]);
export {_raw, error, invalid, msg, msg$p, onErr, rawError, stringifyDual, stringifyValidator};
