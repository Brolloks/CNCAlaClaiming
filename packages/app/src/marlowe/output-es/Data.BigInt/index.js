// | This module defines a `BigInt` data type for arbitrary length integers.
import * as $runtime from "../runtime.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNumber from "../Data.Number/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import {
  abs,
  and,
  biAdd,
  biCompare,
  biDiv,
  biEquals,
  biMod,
  biMul,
  biSub,
  digitsInBase,
  even,
  fromBaseImpl,
  fromInt,
  fromNumberImpl,
  fromTypeLevelInt,
  not,
  odd,
  or,
  pow,
  prime,
  shl,
  shr,
  toBase,
  toNumber,
  xor
} from "./foreign.js";
const toString = /* #__PURE__ */ toBase(10);
const toInt = x => Data$dInt.fromNumber(toNumber(x));
const toBase$p = i => bi => {
  const $0 = toBase(i)(bi);
  if ($0 === "") { $runtime.fail(); }
  return $0;
};
const toNonEmptyString = /* #__PURE__ */ toBase$p(10);
const showBigInt = {show: x => "(fromString \"" + toString(x) + "\")"};
const semiringBigInt = {add: biAdd, zero: /* #__PURE__ */ fromInt(0), mul: biMul, one: /* #__PURE__ */ fromInt(1)};
const ringBigInt = {sub: biSub, Semiring0: () => semiringBigInt};
const rem = biMod;
const quot = biDiv;
const fromTLInt = () => dictReflectable => v => fromTypeLevelInt(dictReflectable.reflectType(Type$dProxy.Proxy));
const fromNumber = /* #__PURE__ */ fromNumberImpl(Data$dMaybe.Just)(Data$dMaybe.Nothing);
const fromBase = /* #__PURE__ */ fromBaseImpl(Data$dMaybe.Just)(Data$dMaybe.Nothing);
const fromString = /* #__PURE__ */ fromBase(10);
const eqBigInt = {eq: biEquals};
const ordBigInt = {
  compare: x => y => {
    const v = biCompare(x)(y);
    if (v === 1) { return Data$dOrdering.GT; }
    if (v === 0) { return Data$dOrdering.EQ; }
    return Data$dOrdering.LT;
  },
  Eq0: () => eqBigInt
};
const commutativeRingBigInt = {Ring0: () => ringBigInt};
const euclideanRingBigInt = {
  div: x => y => biDiv(biSub(x)(euclideanRingBigInt.mod(x)(y)))(y),
  mod: x => y => {
    const yy = abs(y);
    return biMod(biAdd(biMod(x)(yy))(yy))(yy);
  },
  degree: x => Data$dInt.unsafeClamp(Data$dNumber.floor(toNumber(abs(x)))),
  CommutativeRing0: () => commutativeRingBigInt
};
export {
  commutativeRingBigInt,
  eqBigInt,
  euclideanRingBigInt,
  fromBase,
  fromNumber,
  fromString,
  fromTLInt,
  ordBigInt,
  quot,
  rem,
  ringBigInt,
  semiringBigInt,
  showBigInt,
  toBase$p,
  toInt,
  toNonEmptyString,
  toString
};
export * from "./foreign.js";
