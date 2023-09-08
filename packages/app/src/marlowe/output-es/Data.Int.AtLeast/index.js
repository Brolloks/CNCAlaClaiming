import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dEuclideanRing from "../Data.EuclideanRing/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Partial from "../Partial/index.js";
import * as Test$dQuickCheck$dGen from "../Test.QuickCheck.Gen/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const IntAL = x => x;
const showIntAL = dictReflectable => ({show: v => "IntAL " + Data$dShow.showIntImpl(dictReflectable.reflectType(Type$dProxy.Proxy)) + " " + Data$dShow.showIntImpl(v)});
const eqIntAL = {eq: x => y => x === y};
const ordIntAL = {compare: x => y => Data$dOrd.ordInt.compare(x)(y), Eq0: () => eqIntAL};
const enumIntAL = dictReflectable => (
  {
    succ: v => {
      if (v < 2147483647) { return Data$dMaybe.$Maybe("Just", v + 1 | 0); }
      return Data$dMaybe.Nothing;
    },
    pred: v => {
      if (v > dictReflectable.reflectType(Type$dProxy.Proxy)) { return Data$dMaybe.$Maybe("Just", v - 1 | 0); }
      return Data$dMaybe.Nothing;
    },
    Ord0: () => ordIntAL
  }
);
const boundedIntAL = dictReflectable => ({bottom: dictReflectable.reflectType(Type$dProxy.Proxy), top: 2147483647, Ord0: () => ordIntAL});
const arbitraryIntAL = dictReflectable => (
  {
    arbitrary: (() => {
      const n = dictReflectable.reflectType(Type$dProxy.Proxy);
      const $0 = Test$dQuickCheck$dGen.oneOf([
        Test$dQuickCheck$dGen.elements([n]),
        (() => {
          const $0 = n + 1 | 0;
          const $1 = n + 10 | 0;
          if ($0 <= $1) { return Test$dQuickCheck$dGen.chooseInt$p($0)($1); }
          return Test$dQuickCheck$dGen.chooseInt$p($1)($0);
        })(),
        (() => {
          const $0 = n + 11 | 0;
          const $1 = n + 100 | 0;
          if ($0 <= $1) { return Test$dQuickCheck$dGen.chooseInt$p($0)($1); }
          return Test$dQuickCheck$dGen.chooseInt$p($1)($0);
        })(),
        (() => {
          const $0 = n + 101 | 0;
          const $1 = n + 10000 | 0;
          if ($0 <= $1) { return Test$dQuickCheck$dGen.chooseInt$p($0)($1); }
          return Test$dQuickCheck$dGen.chooseInt$p($1)($0);
        })()
      ]);
      return s => {
        const $1 = $0(s);
        return Data$dTuple.$Tuple($1._1, $1._2);
      };
    })()
  }
);
const weaken = () => () => v => v;
const toNumber = v => Data$dInt.toNumber(v);
const toInt = v => v;
const times = () => () => () => v => v1 => v * v1 | 0;
const remainder = i => j => Data$dEuclideanRing.intMod(i)(j);
const quotient = () => () => v => v1 => $runtime.intDiv(v, v1);
const pullUp = dictReflectable => i => {
  const minInt = dictReflectable.reflectType(Type$dProxy.Proxy);
  if (i >= minInt) { return i; }
  return minInt;
};
const pullUp$p = dictReflectable => v => {
  const minInt = dictReflectable.reflectType(Type$dProxy.Proxy);
  if (v >= minInt) { return v; }
  return minInt;
};
const plus = () => v => v1 => v + v1 | 0;
const modulo = v => v1 => Data$dEuclideanRing.intMod(v)(v1);
const minus = v => v1 => v - v1 | 0;
const lengthNonEmptyArray = xs => xs.length;
const lengthArray = xs => xs.length;
const lcm = () => () => () => v => v1 => {
  if (v1 === 0) { return v * $runtime.intDiv(v1, v) | 0; }
  return v * $runtime.intDiv(v1, Data$dEuclideanRing.gcd(Data$dEq.eqInt)(Data$dEuclideanRing.euclideanRingInt)(v1)(Data$dEuclideanRing.intMod(v)(v1))) | 0;
};
const gcd = () => () => v => v1 => {
  if (v1 === 0) { return v; }
  return Data$dEuclideanRing.gcd(Data$dEq.eqInt)(Data$dEuclideanRing.euclideanRingInt)(v1)(Data$dEuclideanRing.intMod(v)(v1));
};
const fromMin = dictReflectable => dictReflectable.reflectType(Type$dProxy.Proxy);
const fromLength = () => v => v1 => {
  if (v1 === 0) { return []; }
  return Data$dFunctor.arrayMap(IntAL)(Data$dArray.range(v)((v + v1 | 0) - 1 | 0));
};
const fromInt$p = dictReflectable => () => i => {
  const minInt = dictReflectable.reflectType(Type$dProxy.Proxy);
  if (i >= minInt) { return i; }
  return Partial._crashWith("Cannot convert Int " + Data$dShow.showIntImpl(i) + " to IntAL " + Data$dShow.showIntImpl(minInt));
};
const fromInt = dictReflectable => i => {
  if (i >= dictReflectable.reflectType(Type$dProxy.Proxy)) { return Data$dMaybe.$Maybe("Just", i); }
  return Data$dMaybe.Nothing;
};
const strengthen = dictReflectable => v => {
  if (v >= dictReflectable.reflectType(Type$dProxy.Proxy)) { return Data$dMaybe.$Maybe("Just", v); }
  return Data$dMaybe.Nothing;
};
const extent = dictReflectable => v => dictReflectable.reflectType(Type$dProxy.Proxy) - v | 0;
const divide = i => j => Data$dInt.toNumber(i) / Data$dInt.toNumber(j);
const clamp = () => dictReflectable => i => {
  const minInt = dictReflectable.reflectType(Type$dProxy.Proxy);
  if (i >= minInt) { return i; }
  return minInt;
};
const checkValid = dictReflectable => v => v >= dictReflectable.reflectType(Type$dProxy.Proxy);
export {
  IntAL,
  arbitraryIntAL,
  boundedIntAL,
  checkValid,
  clamp,
  divide,
  enumIntAL,
  eqIntAL,
  extent,
  fromInt,
  fromInt$p,
  fromLength,
  fromMin,
  gcd,
  lcm,
  lengthArray,
  lengthNonEmptyArray,
  minus,
  modulo,
  ordIntAL,
  plus,
  pullUp,
  pullUp$p,
  quotient,
  remainder,
  showIntAL,
  strengthen,
  times,
  toInt,
  toNumber,
  weaken
};
