import * as Data$dBounded from "../Data.Bounded/index.js";
import * as Data$dEnum from "../Data.Enum/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Test$dQuickCheck$dArbitrary from "../Test.QuickCheck.Arbitrary/index.js";
const E = x => x;
const D = x => x;
const C = x => x;
const B = x => x;
const A = x => x;
const semigroupE = Data$dOrdering.semigroupOrdering;
const semigroupD = Data$dOrdering.semigroupOrdering;
const semigroupC = Data$dOrdering.semigroupOrdering;
const semigroupB = Data$dOrdering.semigroupOrdering;
const semigroupA = Data$dOrdering.semigroupOrdering;
const ordE = Data$dOrd.ordOrdering;
const ordD = Data$dOrd.ordOrdering;
const ordC = Data$dOrd.ordOrdering;
const ordB = Data$dOrd.ordOrdering;
const ordA = Data$dOrd.ordOrdering;
const monoidE = {mempty: Data$dOrdering.EQ, Semigroup0: () => Data$dOrdering.semigroupOrdering};
const monoidD = {mempty: Data$dOrdering.EQ, Semigroup0: () => Data$dOrdering.semigroupOrdering};
const monoidC = {mempty: Data$dOrdering.EQ, Semigroup0: () => Data$dOrdering.semigroupOrdering};
const monoidB = {mempty: Data$dOrdering.EQ, Semigroup0: () => Data$dOrdering.semigroupOrdering};
const monoidA = {mempty: Data$dOrdering.EQ, Semigroup0: () => Data$dOrdering.semigroupOrdering};
const eqE = Data$dOrdering.eqOrdering;
const eqD = Data$dOrdering.eqOrdering;
const eqC = Data$dOrdering.eqOrdering;
const eqB = Data$dOrdering.eqOrdering;
const eqA = Data$dOrdering.eqOrdering;
const enumE = Data$dEnum.enumOrdering;
const enumD = Data$dEnum.enumOrdering;
const enumC = Data$dEnum.enumOrdering;
const enumB = Data$dEnum.enumOrdering;
const enumA = Data$dEnum.enumOrdering;
const coarbitraryE = Test$dQuickCheck$dArbitrary.coarbOrdering;
const coarbitraryD = Test$dQuickCheck$dArbitrary.coarbOrdering;
const coarbitraryC = Test$dQuickCheck$dArbitrary.coarbOrdering;
const coarbitraryB = Test$dQuickCheck$dArbitrary.coarbOrdering;
const coarbitraryA = Test$dQuickCheck$dArbitrary.coarbOrdering;
const checkLaws = typeName => laws => {
  const $0 = Effect$dConsole.log("\n\nChecking laws of " + typeName + " instances...\n");
  return () => {
    $0();
    return laws();
  };
};
const boundedEnumE = Data$dEnum.boundedEnumOrdering;
const boundedEnumD = Data$dEnum.boundedEnumOrdering;
const boundedEnumC = Data$dEnum.boundedEnumOrdering;
const boundedEnumB = Data$dEnum.boundedEnumOrdering;
const boundedEnumA = Data$dEnum.boundedEnumOrdering;
const boundedE = Data$dBounded.boundedOrdering;
const boundedD = Data$dBounded.boundedOrdering;
const boundedC = Data$dBounded.boundedOrdering;
const boundedB = Data$dBounded.boundedOrdering;
const boundedA = Data$dBounded.boundedOrdering;
const arbitraryE = Test$dQuickCheck$dArbitrary.arbOrdering;
const arbitraryD = Test$dQuickCheck$dArbitrary.arbOrdering;
const arbitraryC = Test$dQuickCheck$dArbitrary.arbOrdering;
const arbitraryB = Test$dQuickCheck$dArbitrary.arbOrdering;
const arbitraryA = Test$dQuickCheck$dArbitrary.arbOrdering;
export {
  A,
  B,
  C,
  D,
  E,
  arbitraryA,
  arbitraryB,
  arbitraryC,
  arbitraryD,
  arbitraryE,
  boundedA,
  boundedB,
  boundedC,
  boundedD,
  boundedE,
  boundedEnumA,
  boundedEnumB,
  boundedEnumC,
  boundedEnumD,
  boundedEnumE,
  checkLaws,
  coarbitraryA,
  coarbitraryB,
  coarbitraryC,
  coarbitraryD,
  coarbitraryE,
  enumA,
  enumB,
  enumC,
  enumD,
  enumE,
  eqA,
  eqB,
  eqC,
  eqD,
  eqE,
  monoidA,
  monoidB,
  monoidC,
  monoidD,
  monoidE,
  ordA,
  ordB,
  ordC,
  ordD,
  ordE,
  semigroupA,
  semigroupB,
  semigroupC,
  semigroupD,
  semigroupE
};
