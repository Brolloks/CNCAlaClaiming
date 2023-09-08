import * as $runtime from "../runtime.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dArgonaut$dParser from "../Data.Argonaut.Parser/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Polyform$dBatteries from "../Polyform.Batteries/index.js";
import * as Polyform$dBatteries$dJson$dDuals from "../Polyform.Batteries.Json.Duals/index.js";
import * as Polyform$dDual from "../Polyform.Dual/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const _decodingError = Type$dProxy.Proxy;
const validator = dictMonad => {
  const $0 = dictMonad.Applicative0();
  return x => $0.pure((() => {
    const $1 = Data$dArgonaut$dParser._jsonParser(Data$dEither.Left, Data$dEither.Right, x);
    if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1); }
    if ($1.tag === "Left") {
      return Data$dEither.$Either("Left", Polyform$dBatteries.error()({reflectSymbol: () => "jsonDecodingError"})(Type$dProxy.Proxy)(v => "Invalid JSON")($1._1));
    }
    $runtime.fail();
  })());
};
const dual = dictMonad => Polyform$dDual.$DualD(validator(dictMonad), x => Data$dArgonaut$dCore.stringify(x));
const dual$p = dictMonad => Polyform$dBatteries$dJson$dDuals.fromDual(dictMonad)(Polyform$dDual.$DualD(validator(dictMonad), x => Data$dArgonaut$dCore.stringify(x)));
export {_decodingError, dual, dual$p, validator};
