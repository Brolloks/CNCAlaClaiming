import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Random$dLCG from "../Random.LCG/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
import * as Test$dQuickCheck$dArbitrary from "../Test.QuickCheck.Arbitrary/index.js";
import * as Test$dQuickCheck$dGen from "../Test.QuickCheck.Gen/index.js";
const checkBindGen = dictBind => dictEq => gen => genF => {
  const $0 = Effect$dConsole.log("Checking 'Associativity' law for Bind");
  return () => {
    $0();
    const seed = Random$dLCG.randomSeed();
    return Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(m => f => g => dictEq.eq(dictBind.bind(dictBind.bind(m)(f))(g))(dictBind.bind(m)(x => dictBind.bind(f(x))(g))))(gen))(genF))(genF))();
  };
};
const checkBind = dictBind => dictArbitrary => {
  const arbitrary = dictArbitrary.arbitrary;
  const arbitrary1 = dictArbitrary.arbitrary;
  const arbitrary1$1 = Test$dQuickCheck$dGen.repeatable(a => Test$dQuickCheck$dArbitrary.coarbOrdering.coarbitrary(a)(arbitrary1));
  return dictEq => v => checkBindGen(dictBind)(dictEq)(arbitrary)(arbitrary1$1);
};
export {checkBind, checkBindGen};
