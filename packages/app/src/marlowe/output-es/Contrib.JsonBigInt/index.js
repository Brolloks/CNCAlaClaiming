import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dBigInt from "../Data.BigInt/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
import {isBigInt, patchersImpl} from "./foreign.js";
const unsafeToJson = Unsafe$dCoerce.unsafeCoerce;
const toBigInt = json => {
  if (isBigInt(json)) { return Data$dMaybe.$Maybe("Just", json); }
  return Data$dMaybe.Nothing;
};
const patchers = /* #__PURE__ */ (() => (
  {
    parse: $0 => $1 => patchersImpl.parseImpl({failure: Data$dEither.Left, success: Data$dEither.Right}, $0, $1),
    patchStringify: patchersImpl.patchStringify,
    patchParse: patchersImpl.patchParse
  }
))();
const fromJson = Unsafe$dCoerce.unsafeCoerce;
const replacer = v => value => {
  if (isBigInt(value)) { return Data$dArgonaut$dCore.fromString("(fromString \"" + Data$dBigInt.toString(value) + "\")"); }
  return value;
};
export {fromJson, patchers, replacer, toBigInt, unsafeToJson};
export * from "./foreign.js";
