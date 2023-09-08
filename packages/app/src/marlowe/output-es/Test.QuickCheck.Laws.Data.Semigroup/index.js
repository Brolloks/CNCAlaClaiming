import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Random$dLCG from "../Random.LCG/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
import * as Test$dQuickCheck$dGen from "../Test.QuickCheck.Gen/index.js";
const checkSemigroupGen = dictSemigroup => dictEq => gen => {
  const $0 = Effect$dConsole.log("Checking 'Associativity' law for Semigroup");
  return () => {
    $0();
    const seed = Random$dLCG.randomSeed();
    return Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(x => y => z => dictEq.eq(dictSemigroup.append(dictSemigroup.append(x)(y))(z))(dictSemigroup.append(x)(dictSemigroup.append(y)(z))))(gen))(gen))(gen))();
  };
};
const checkSemigroup = dictSemigroup => dictArbitrary => {
  const arbitrary = dictArbitrary.arbitrary;
  return dictEq => v => checkSemigroupGen(dictSemigroup)(dictEq)(arbitrary);
};
export {checkSemigroup, checkSemigroupGen};
