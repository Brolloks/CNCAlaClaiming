import * as $runtime from "../runtime.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dArgonaut$dDecode$dError from "../Data.Argonaut.Decode.Error/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dInt from "../Data.Int/index.js";
const unsafeInstantFromInt = ms => {
  const $0 = Data$dInt.toNumber(ms);
  if ($0 >= -8639977881600000.0 && $0 <= 8639977881599999.0) { return $0; }
  $runtime.fail();
};
const unixEpoch = /* #__PURE__ */ (() => {
  const $0 = Data$dInt.toNumber(0);
  if ($0 >= -8639977881600000.0 && $0 <= 8639977881599999.0) { return $0; }
  $runtime.fail();
})();
const instantToJson = x => Data$dArgonaut$dCore.fromNumber(x);
const instantFromJson = json => {
  const $0 = Data$dArgonaut$dCore._caseJson(
    v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Number")),
    v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Number")),
    Data$dEither.Right,
    v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Number")),
    v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Number")),
    v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Number")),
    json
  );
  return (() => {
    if ($0.tag === "Left") {
      const $1 = $0._1;
      return v => Data$dEither.$Either("Left", $1);
    }
    if ($0.tag === "Right") {
      const $1 = $0._1;
      return f => f($1);
    }
    $runtime.fail();
  })()(ms => {
    if (ms >= -8639977881600000.0 && ms <= 8639977881599999.0) { return Data$dEither.$Either("Right", ms); }
    return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "UNIX timestamp"));
  });
};
const instantEncoder = instantToJson;
const instantDecoder = instantFromJson;
export {instantDecoder, instantEncoder, instantFromJson, instantToJson, unixEpoch, unsafeInstantFromInt};
