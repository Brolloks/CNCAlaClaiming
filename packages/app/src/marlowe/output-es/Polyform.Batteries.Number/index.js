import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNumber from "../Data.Number/index.js";
import * as Data$dNumber$dFormat from "../Data.Number.Format/index.js";
import * as Polyform$dBatteries from "../Polyform.Batteries/index.js";
import * as Polyform$dDual from "../Polyform.Dual/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const error = /* #__PURE__ */ Polyform$dBatteries.error()({reflectSymbol: () => "numberExpected"});
const _numberExpected = Type$dProxy.Proxy;
const validator = dictMonad => {
  const $0 = dictMonad.Applicative0();
  const $1 = error(Type$dProxy.Proxy)($1 => "Expecting a number but got: " + $1);
  return x => $0.pure((() => {
    const $2 = $1(x);
    const $3 = Data$dNumber.fromStringImpl(x, Data$dNumber.isFinite, Data$dMaybe.Just, Data$dMaybe.Nothing);
    if ($3.tag === "Nothing") { return Data$dEither.$Either("Left", $2); }
    if ($3.tag === "Just") { return Data$dEither.$Either("Right", $3._1); }
    $runtime.fail();
  })());
};
const dual = dictMonad => {
  const validator1 = validator(dictMonad);
  return format => Polyform$dDual.$DualD(
    validator1,
    (() => {
      if (format.tag === "Nothing") { return Data$dNumber$dFormat.toString; }
      if (format.tag === "Just") { return Data$dNumber$dFormat.toStringWith(format._1); }
      $runtime.fail();
    })()
  );
};
export {_numberExpected, dual, error, validator};
