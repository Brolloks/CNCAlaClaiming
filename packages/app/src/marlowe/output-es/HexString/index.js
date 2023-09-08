import * as Data$dArgonaut$dDecode$dClass from "../Data.Argonaut.Decode.Class/index.js";
import * as Data$dArgonaut$dEncode$dClass from "../Data.Argonaut.Encode.Class/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dString$dRegex from "../Data.String.Regex/index.js";
import * as Data$dString$dRegex$dFlags from "../Data.String.Regex.Flags/index.js";
import * as Data$dString$dRegex$dUnsafe from "../Data.String.Regex.Unsafe/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Web$dEncoding$dTextDecoder from "../Web.Encoding.TextDecoder/index.js";
import * as Web$dEncoding$dTextEncoder from "../Web.Encoding.TextEncoder/index.js";
import {decode, encode} from "./foreign.js";
const Hex = x => x;
const showHex = Data$dShow.showString;
const ordHex = Data$dOrd.ordString;
const eqHex = Data$dEq.eqString;
const encodeJsonHex = Data$dArgonaut$dEncode$dClass.encodeJsonJString;
const decodeJsonHex = Data$dArgonaut$dDecode$dClass.decodeJsonString;
const utf8HexToString = h => (() => {
  const uint8Array = decode(h);
  const $0 = Web$dEncoding$dTextDecoder.new("utf8");
  return () => {
    const textDecoder = $0();
    return Effect$dException.catchException(v => () => Data$dMaybe.Nothing)(() => {
      const a$p = Web$dEncoding$dTextDecoder._decode(uint8Array, {}, textDecoder);
      return Data$dMaybe.$Maybe("Just", a$p);
    })();
  };
})()();
const stringToUtf8Hex = str => {
  const textEncoder = Web$dEncoding$dTextEncoder.new();
  return encode(Web$dEncoding$dTextEncoder.encode(str)(textEncoder));
};
const hexToString = v => v;
const hex = /* #__PURE__ */ (() => {
  const lowerCaseHexPattern = Data$dString$dRegex$dUnsafe.unsafeRegex("^[0-9a-f]*$")(Data$dString$dRegex$dFlags.noFlags);
  const anyHexPattern = Data$dString$dRegex$dUnsafe.unsafeRegex("^[0-9a-fA-F]*$")(Data$dString$dRegex$dFlags.noFlags);
  return v => {
    if (Data$dString$dRegex.test(lowerCaseHexPattern)(v)) { return Data$dMaybe.$Maybe("Just", v); }
    if (Data$dString$dRegex.test(anyHexPattern)(v)) { return Data$dMaybe.$Maybe("Just", Data$dString$dCommon.toLower(v)); }
    return Data$dMaybe.Nothing;
  };
})();
export {Hex, decodeJsonHex, encodeJsonHex, eqHex, hex, hexToString, ordHex, showHex, stringToUtf8Hex, utf8HexToString};
export * from "./foreign.js";
