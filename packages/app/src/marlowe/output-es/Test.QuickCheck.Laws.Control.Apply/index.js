import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Random$dLCG from "../Random.LCG/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
import * as Test$dQuickCheck$dGen from "../Test.QuickCheck.Gen/index.js";
const checkApplyGen = dictApply => dictEq => gen => genab => genbc => {
  const $0 = Effect$dConsole.log("Checking 'Associative composition' law for Apply");
  return () => {
    $0();
    const seed = Random$dLCG.randomSeed();
    return Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(f => g => x => dictEq.eq(dictApply.apply(dictApply.apply(dictApply.Functor0().map(Control$dSemigroupoid.semigroupoidFn.compose)(f))(g))(x))(dictApply.apply(f)(dictApply.apply(g)(x))))(genbc))(genab))(gen))();
  };
};
const checkApply = dictApply => dictArbitrary => {
  const arbitrary = dictArbitrary.arbitrary;
  return dictArbitrary1 => {
    const arbitrary1 = dictArbitrary1.arbitrary;
    return dictArbitrary2 => {
      const arbitrary2 = dictArbitrary2.arbitrary;
      return dictEq => v => checkApplyGen(dictApply)(dictEq)(arbitrary)(arbitrary1)(arbitrary2);
    };
  };
};
export {checkApply, checkApplyGen};
