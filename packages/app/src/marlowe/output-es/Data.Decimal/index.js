// | This module defines a `Decimal` data type for arbitrary precision numbers.
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import {
  abs,
  acos,
  acosh,
  asin,
  asinh,
  atan,
  atan2,
  atanh,
  ceil,
  clamp,
  cos,
  cosh,
  dAdd,
  dCompare,
  dDiv,
  dEquals,
  dMul,
  dSub,
  e,
  exp,
  floor,
  fromInt,
  fromNumber,
  fromStringImpl,
  gamma,
  isFinite,
  isInteger,
  ln,
  log10,
  log2,
  max,
  min,
  modulo,
  pi,
  pow,
  round,
  sin,
  sinh,
  sqrt,
  tan,
  tanh,
  toFixed,
  toNumber,
  toPrecision,
  toSignificantDigits,
  toString,
  truncated
} from "./foreign.js";
const showDecimal = {show: x => "(fromString \"" + toString(x) + "\")"};
const semiringDecimal = {add: dAdd, zero: /* #__PURE__ */ fromInt(0), mul: dMul, one: /* #__PURE__ */ fromInt(1)};
const ringDecimal = {sub: dSub, Semiring0: () => semiringDecimal};
const eqDecimal = {eq: dEquals};
const ordDecimal = {
  compare: x => y => {
    const v = dCompare(x)(y);
    if (v === 1) { return Data$dOrdering.GT; }
    if (v === 0) { return Data$dOrdering.EQ; }
    return Data$dOrdering.LT;
  },
  Eq0: () => eqDecimal
};
const divisionRingDecimal = /* #__PURE__ */ (() => ({recip: dDiv(semiringDecimal.one), Ring0: () => ringDecimal}))();
const commutativeRingDecimal = {Ring0: () => ringDecimal};
const euclideanRingDecimal = {div: dDiv, mod: v => v1 => semiringDecimal.zero, degree: v => 1, CommutativeRing0: () => commutativeRingDecimal};
const sech = x => dDiv(semiringDecimal.one)(cosh(x));
const sec = x => dDiv(semiringDecimal.one)(cos(x));
const fromString = /* #__PURE__ */ fromStringImpl(Data$dMaybe.Nothing)(Data$dMaybe.Just);
const factorial = n => {
  if (ordDecimal.compare(n)(semiringDecimal.zero) === "LT") { return dDiv(semiringDecimal.one)(semiringDecimal.zero); }
  return gamma(ceil(dAdd(n)(semiringDecimal.one)));
};
const csch = x => dDiv(semiringDecimal.one)(sinh(x));
const csc = x => dDiv(semiringDecimal.one)(sin(x));
const coth = x => dDiv(semiringDecimal.one)(tanh(x));
const cot = x => dDiv(semiringDecimal.one)(tan(x));
const asech = x => acosh(dDiv(semiringDecimal.one)(x));
const asec = x => acos(dDiv(semiringDecimal.one)(x));
const acsch = x => asinh(dDiv(semiringDecimal.one)(x));
const acsc = x => asin(dDiv(semiringDecimal.one)(x));
const acoth = x => atanh(dDiv(semiringDecimal.one)(x));
const acot = x => {
  if (ordDecimal.compare(x)(semiringDecimal.zero) === "GT") { return atan(dDiv(semiringDecimal.one)(x)); }
  return dAdd(atan(dDiv(semiringDecimal.one)(x)))(pi);
};
export {
  acot,
  acoth,
  acsc,
  acsch,
  asec,
  asech,
  commutativeRingDecimal,
  cot,
  coth,
  csc,
  csch,
  divisionRingDecimal,
  eqDecimal,
  euclideanRingDecimal,
  factorial,
  fromString,
  ordDecimal,
  ringDecimal,
  sec,
  sech,
  semiringDecimal,
  showDecimal
};
export * from "./foreign.js";
