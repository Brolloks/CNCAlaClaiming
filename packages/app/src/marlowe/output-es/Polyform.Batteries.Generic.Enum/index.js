import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Polyform$dBatteries from "../Polyform.Batteries/index.js";
import * as Polyform$dDual from "../Polyform.Dual/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const error = /* #__PURE__ */ Polyform$dBatteries.error()({reflectSymbol: () => "invalidEnumIndex"});
const _invalidEnumIndex = Type$dProxy.Proxy;
const validator = dictApplicative => dictBoundedEnum => v => {
  const $0 = error(Type$dProxy.Proxy)(x => "Invalid enum index: " + Data$dShow.showIntImpl(x));
  return x => dictApplicative.pure((() => {
    const $1 = $0(x);
    const $2 = dictBoundedEnum.toEnum(x);
    if ($2.tag === "Nothing") { return Data$dEither.$Either("Left", $1); }
    if ($2.tag === "Just") { return Data$dEither.$Either("Right", $2._1); }
    $runtime.fail();
  })());
};
const dual = dictApplicative => dictBoundedEnum => p => Polyform$dDual.$DualD(validator(dictApplicative)(dictBoundedEnum)(p), x => dictBoundedEnum.fromEnum(x));
const dual$p = dictApplicative => dictBoundedEnum => Polyform$dDual.$DualD(validator(dictApplicative)(dictBoundedEnum)(Type$dProxy.Proxy), x => dictBoundedEnum.fromEnum(x));
const validator$p = dictApplicative => dictBoundedEnum => validator(dictApplicative)(dictBoundedEnum)(Type$dProxy.Proxy);
export {_invalidEnumIndex, dual, dual$p, error, validator, validator$p};
