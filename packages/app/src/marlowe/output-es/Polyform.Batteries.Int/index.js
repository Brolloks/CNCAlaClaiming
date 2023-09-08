import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Polyform$dBatteries from "../Polyform.Batteries/index.js";
import * as Polyform$dDual from "../Polyform.Dual/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const error = /* #__PURE__ */ Polyform$dBatteries.error()({reflectSymbol: () => "intExpected"});
const _intExpected = Type$dProxy.Proxy;
const validator = dictApplicative => {
  const $0 = error(Type$dProxy.Proxy)($0 => "Expecting a string but got: " + $0);
  return x => dictApplicative.pure((() => {
    const $1 = $0(x);
    const $2 = Data$dInt.fromString(x);
    if ($2.tag === "Nothing") { return Data$dEither.$Either("Left", $1); }
    if ($2.tag === "Just") { return Data$dEither.$Either("Right", $2._1); }
    $runtime.fail();
  })());
};
const dual = dictApplicative => Polyform$dDual.$DualD(validator(dictApplicative), x => Data$dShow.showIntImpl(x));
export {_intExpected, dual, error, validator};
