import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Random$dLCG from "../Random.LCG/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
import * as Test$dQuickCheck$dArbitrary from "../Test.QuickCheck.Arbitrary/index.js";
import * as Test$dQuickCheck$dGen from "../Test.QuickCheck.Gen/index.js";
const checkExtendGen = dictExtend => dictArbitrary => dictCoarbitrary => dictCoarbitrary1 => dictEq => gen => genwbc => genwab => {
  const $0 = Effect$dConsole.log("Checking 'Associativity' law for Extend");
  return () => {
    $0();
    const seed = Random$dLCG.randomSeed();
    return Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(f => g => x => dictEq.eq(dictExtend.extend(f)(dictExtend.extend(g)(x)))(dictExtend.extend(x$1 => f(dictExtend.extend(g)(x$1)))(x)))(genwbc))(genwab))(gen))();
  };
};
const checkExtend = dictExtend => dictArbitrary => {
  const arbitrary = dictArbitrary.arbitrary;
  return dictCoarbitrary => {
    const arbitrary1 = Test$dQuickCheck$dGen.repeatable(a => dictCoarbitrary.coarbitrary(a)(Test$dQuickCheck$dArbitrary.arbOrdering.arbitrary));
    return dictCoarbitrary1 => {
      const arbitrary2 = Test$dQuickCheck$dGen.repeatable(a => dictCoarbitrary1.coarbitrary(a)(Test$dQuickCheck$dArbitrary.arbOrdering.arbitrary));
      return dictEq => v => checkExtendGen(dictExtend)(dictArbitrary)(dictCoarbitrary)(dictCoarbitrary1)(dictEq)(arbitrary)(arbitrary2)(arbitrary1);
    };
  };
};
export {checkExtend, checkExtendGen};
