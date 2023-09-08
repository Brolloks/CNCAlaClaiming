import * as $runtime from "../runtime.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dArgonaut$dDecode$dClass from "../Data.Argonaut.Decode.Class/index.js";
import * as Data$dArgonaut$dDecode$dParser from "../Data.Argonaut.Decode.Parser/index.js";
import * as Data$dArgonaut$dEncode$dClass from "../Data.Argonaut.Encode.Class/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as HexString from "../HexString/index.js";
const JsonString = x => x;
const CborHex = x => x;
const Bech32 = x => x;
const showBech32 = Data$dShow.showString;
const ordBech32 = Data$dOrd.ordString;
const eqCborHex = {eq: x => y => x === y};
const eqBech32 = Data$dEq.eqString;
const encodeJsonCborHex = Data$dArgonaut$dEncode$dClass.encodeJsonJString;
const encodeJsonBech32 = Data$dArgonaut$dEncode$dClass.encodeJsonJString;
const decodeJsonCborHex = Data$dArgonaut$dDecode$dClass.decodeJsonString;
const decodeJsonBech32 = Data$dArgonaut$dDecode$dClass.decodeJsonString;
const unsafeJsonString = JsonString;
const unsafeCborHex = CborHex;
const unsafeBech32 = Bech32;
const jsonStringToString = v => v;
const jsonStringFromString = x => {
  const $0 = Data$dArgonaut$dDecode$dParser.parseJson(x);
  if ($0.tag === "Left") { return Data$dMaybe.Nothing; }
  if ($0.tag === "Right") { return Data$dMaybe.$Maybe("Just", Data$dArgonaut$dCore.stringify($0._1)); }
  $runtime.fail();
};
const jsonStringFromJson = x => Data$dArgonaut$dCore.stringify(x);
const cborToUint8Array = v => v;
const cborToCborHex = x => HexString.encode(x);
const cborHexToHex = v => v;
const cborHexToCbor = x => HexString.decode(x);
const bech32ToString = v => v;
export {
  Bech32,
  CborHex,
  JsonString,
  bech32ToString,
  cborHexToCbor,
  cborHexToHex,
  cborToCborHex,
  cborToUint8Array,
  decodeJsonBech32,
  decodeJsonCborHex,
  encodeJsonBech32,
  encodeJsonCborHex,
  eqBech32,
  eqCborHex,
  jsonStringFromJson,
  jsonStringFromString,
  jsonStringToString,
  ordBech32,
  showBech32,
  unsafeBech32,
  unsafeCborHex,
  unsafeJsonString
};
