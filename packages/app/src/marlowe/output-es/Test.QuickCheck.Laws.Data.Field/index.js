import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Random$dLCG from "../Random.LCG/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
import * as Test$dQuickCheck$dGen from "../Test.QuickCheck.Gen/index.js";
const checkFieldGen = dictField => {
  const zero = dictField.DivisionRing1().Ring0().Semiring0().zero;
  return dictEq => gen => {
    const $0 = Effect$dConsole.log("Checking 'Non-zero multiplicative inverse' law for Field");
    return () => {
      $0();
      const seed = Random$dLCG.randomSeed();
      return Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(x => y => dictEq.eq(dictField.EuclideanRing0().mod(x)(y))(zero))(gen))(gen))();
    };
  };
};
const checkField = dictField => {
  const checkFieldGen1 = checkFieldGen(dictField);
  return dictArbitrary => {
    const arbitrary = dictArbitrary.arbitrary;
    return dictEq => {
      const checkFieldGen2 = checkFieldGen1(dictEq);
      return v => checkFieldGen2(arbitrary);
    };
  };
};
export {checkField, checkFieldGen};
