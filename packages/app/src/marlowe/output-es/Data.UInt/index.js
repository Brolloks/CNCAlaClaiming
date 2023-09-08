import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNumber from "../Data.Number/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import {
  and,
  complement,
  exact,
  from,
  fromStringImpl,
  or,
  pow,
  shl,
  shr,
  toInt,
  toNumber,
  toString,
  uintAdd,
  uintCmp,
  uintDegree,
  uintDiv,
  uintEq,
  uintMod,
  uintMul,
  uintSub,
  xor,
  zshr
} from "./foreign.js";
const uintShowInstance = {show: u => toString(u) + "u"};
const uintEqInstance = {eq: uintEq};
const uintOrd = {compare: /* #__PURE__ */ uintCmp(Data$dOrdering.LT)(Data$dOrdering.EQ)(Data$dOrdering.GT), Eq0: () => uintEqInstance};
const toInt$p = /* #__PURE__ */ exact(Data$dMaybe.Just)(Data$dMaybe.Nothing)(toInt);
const fromNumber = from;
const fromNumber$p = /* #__PURE__ */ exact(Data$dMaybe.Just)(Data$dMaybe.Nothing)(from);
const fromString = x => fromNumber$p(fromStringImpl(x));
const fromInt = from;
const fromInt$p = /* #__PURE__ */ exact(Data$dMaybe.Just)(Data$dMaybe.Nothing)(from);
const uintBounded = {bottom: /* #__PURE__ */ from(0), top: /* #__PURE__ */ from(-1), Ord0: () => uintOrd};
const uintSemiring = {zero: /* #__PURE__ */ from(0), add: uintAdd, one: /* #__PURE__ */ from(1), mul: uintMul};
const uintRing = {sub: uintSub, Semiring0: () => uintSemiring};
const uintCommutativeRing = {Ring0: () => uintRing};
const uintEuclideanRing = {div: uintDiv, mod: uintMod, degree: uintDegree, CommutativeRing0: () => uintCommutativeRing};
const odd = u => uintEq(uintMod(u)(from(2)))(from(1));
const even = u => uintEq(uintMod(u)(from(2)))(from(0));
const enumUInt = {
  succ: n => {
    if (uintOrd.compare(n)(uintBounded.top) === "LT") { return Data$dMaybe.$Maybe("Just", uintAdd(n)(from(1))); }
    return Data$dMaybe.Nothing;
  },
  pred: n => {
    if (uintOrd.compare(n)(uintBounded.bottom) === "GT") { return Data$dMaybe.$Maybe("Just", uintSub(n)(from(1))); }
    return Data$dMaybe.Nothing;
  },
  Ord0: () => uintOrd
};
const clamp$p = /* #__PURE__ */ (() => {
  const $0 = toNumber(uintBounded.bottom);
  const $1 = toNumber(uintBounded.top);
  return x => {
    const v = Data$dOrd.ordNumber.compare($0)(x);
    const $2 = (() => {
      if (v === "LT") { return x; }
      if (v === "EQ") { return $0; }
      if (v === "GT") { return $0; }
      $runtime.fail();
    })();
    const v$1 = Data$dOrd.ordNumber.compare($1)($2);
    if (v$1 === "LT") { return $1; }
    if (v$1 === "EQ") { return $1; }
    if (v$1 === "GT") { return $2; }
    $runtime.fail();
  };
})();
const floor = x => from(Data$dNumber.floor(clamp$p(x)));
const round = x => from(Data$dNumber.round(clamp$p(x)));
const ceil = x => from(Data$dNumber.ceil(clamp$p(x)));
export {
  ceil,
  clamp$p,
  enumUInt,
  even,
  floor,
  fromInt,
  fromInt$p,
  fromNumber,
  fromNumber$p,
  fromString,
  odd,
  round,
  toInt$p,
  uintBounded,
  uintCommutativeRing,
  uintEqInstance,
  uintEuclideanRing,
  uintOrd,
  uintRing,
  uintSemiring,
  uintShowInstance
};
export * from "./foreign.js";
