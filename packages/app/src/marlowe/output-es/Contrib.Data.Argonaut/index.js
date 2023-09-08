import * as $runtime from "../runtime.js";
import * as Contrib$dData$dString from "../Contrib.Data.String/index.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dArgonaut$dDecode$dError from "../Data.Argonaut.Decode.Error/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import {parseImpl} from "./foreign.js";
const JsonString = x => x;
const encodeJsonEnumWith = dictShow => adaptConstructorName => x => Data$dArgonaut$dCore.fromString(adaptConstructorName(dictShow.show(x)));
const eitherHandlers = {failure: Data$dEither.Left, success: Data$dEither.Right};
const parse = $0 => $1 => parseImpl(eitherHandlers, $0, $1);
const decodeFromString = decode => json => {
  const $0 = Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Unexpected json value: " + Data$dArgonaut$dCore.stringify(json)));
  return Data$dArgonaut$dCore._caseJson(
    v => $0,
    v => $0,
    v => $0,
    str => {
      const $1 = Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Unexpected constructor name:" + str);
      const $2 = decode(str);
      if ($2.tag === "Nothing") { return Data$dEither.$Either("Left", $1); }
      if ($2.tag === "Just") { return Data$dEither.$Either("Right", $2._1); }
      $runtime.fail();
    },
    v => $0,
    v => $0,
    json
  );
};
const decodeJsonEnumWith = dictShow => dictBoundedEnum => {
  const decodeEnumWith1 = Contrib$dData$dString.decodeEnumWith(dictShow)(dictBoundedEnum);
  return adaptConstructorName => decodeFromString(decodeEnumWith1(adaptConstructorName));
};
export {JsonString, decodeFromString, decodeJsonEnumWith, eitherHandlers, encodeJsonEnumWith, parse};
export * from "./foreign.js";
