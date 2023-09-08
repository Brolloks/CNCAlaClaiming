import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Random$dLCG from "../Random.LCG/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
import * as Test$dQuickCheck$dGen from "../Test.QuickCheck.Gen/index.js";
const checkSemigroupoidGen = dictSemigroupoid => dictEq => genbc => gencd => gende => {
  const $0 = Effect$dConsole.log("Checking 'Associativity' law for Semigroupoid");
  return () => {
    $0();
    const seed = Random$dLCG.randomSeed();
    return Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(p => q => r => dictEq.eq(dictSemigroupoid.compose(p)(dictSemigroupoid.compose(q)(r)))(dictSemigroupoid.compose(dictSemigroupoid.compose(p)(q))(r)))(gende))(gencd))(genbc))();
  };
};
const checkSemigroupoid = dictSemigroupoid => dictArbitrary => {
  const arbitrary = dictArbitrary.arbitrary;
  return dictArbitrary1 => {
    const arbitrary1 = dictArbitrary1.arbitrary;
    return dictArbitrary2 => {
      const arbitrary2 = dictArbitrary2.arbitrary;
      return dictEq => v => checkSemigroupoidGen(dictSemigroupoid)(dictEq)(arbitrary)(arbitrary1)(arbitrary2);
    };
  };
};
export {checkSemigroupoid, checkSemigroupoidGen};
