import * as $runtime from "../runtime.js";
import * as Data$dArgonaut$dDecode$dError from "../Data.Argonaut.Decode.Error/index.js";
import * as Data$dBigInt from "../Data.BigInt/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import {decodeBigInt, encodeBigInt} from "./foreign.js";
const $$BigInt = x => x;
const showBigInt = Data$dBigInt.showBigInt;
const semiringBigInt = Data$dBigInt.semiringBigInt;
const ringBigInt = Data$dBigInt.ringBigInt;
const newtypeBigInt = {Coercible0: () => {}};
const not = Data$dBigInt.not;
const odd = x => Data$dBigInt.odd(x);
const or = a => b => Data$dBigInt.or(a)(b);
const pow = a => n => Data$dBigInt.pow(a)(n);
const prime = x => Data$dBigInt.prime(x);
const quot = a => b => Data$dBigInt.biDiv(a)(b);
const rem = a => b => Data$dBigInt.biMod(a)(b);
const shl = a => Data$dBigInt.shl(a);
const shr = a => Data$dBigInt.shr(a);
const toBase = base => Data$dBigInt.toBase(base);
const toBase$p = base => x => {
  const $0 = Data$dBigInt.toBase(base)(x);
  if ($0 === "") { $runtime.fail(); }
  return $0;
};
const toNonEmptyString = x => {
  const $0 = Data$dBigInt.toBase(10)(x);
  if ($0 === "") { $runtime.fail(); }
  return $0;
};
const toNumber = x => Data$dBigInt.toNumber(x);
const toString = x => Data$dBigInt.toString(x);
const xor = a => b => Data$dBigInt.xor(a)(b);
const genericBigInt = {to: x => x, from: x => x};
const fromString = x => {
  const $0 = Data$dBigInt.fromString(x);
  if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0._1); }
  return Data$dMaybe.Nothing;
};
const fromNumber = x => {
  const $0 = Data$dBigInt.fromNumber(x);
  if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0._1); }
  return Data$dMaybe.Nothing;
};
const fromInt = x => Data$dBigInt.fromInt(x);
const fromBase = base => {
  const $0 = Data$dBigInt.fromBase(base);
  return x => {
    const $1 = $0(x);
    if ($1.tag === "Just") { return Data$dMaybe.$Maybe("Just", $1._1); }
    return Data$dMaybe.Nothing;
  };
};
const even = x => Data$dBigInt.even(x);
const euclideanRingBigInt = Data$dBigInt.euclideanRingBigInt;
const eqBigInt = {eq: x => y => Data$dBigInt.biEquals(x)(y)};
const ordBigInt = {compare: x => y => Data$dBigInt.ordBigInt.compare(x)(y), Eq0: () => eqBigInt};
const encodeJsonBitInt = {encodeJson: x => encodeBigInt(x)};
const digitsInBase = base => Data$dBigInt.digitsInBase(base);
const decodeJsonBigInt = {
  decodeJson: x => {
    const $0 = decodeBigInt(Data$dMaybe.Nothing, x$1 => Data$dMaybe.$Maybe("Just", x$1), x);
    if ($0.tag === "Nothing") { return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "BigInt or Number")); }
    if ($0.tag === "Just") { return Data$dEither.$Either("Right", $0._1); }
    $runtime.fail();
  }
};
const commutativeRingBigInt = Data$dBigInt.commutativeRingBigInt;
const and = a => b => Data$dBigInt.and(a)(b);
const abs = Data$dBigInt.abs;
export {
  $$BigInt as BigInt,
  abs,
  and,
  commutativeRingBigInt,
  decodeJsonBigInt,
  digitsInBase,
  encodeJsonBitInt,
  eqBigInt,
  euclideanRingBigInt,
  even,
  fromBase,
  fromInt,
  fromNumber,
  fromString,
  genericBigInt,
  newtypeBigInt,
  not,
  odd,
  or,
  ordBigInt,
  pow,
  prime,
  quot,
  rem,
  ringBigInt,
  semiringBigInt,
  shl,
  showBigInt,
  shr,
  toBase,
  toBase$p,
  toNonEmptyString,
  toNumber,
  toString,
  xor
};
export * from "./foreign.js";
