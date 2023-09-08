import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Random$dLCG from "../Random.LCG/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
import * as Test$dQuickCheck$dArbitrary from "../Test.QuickCheck.Arbitrary/index.js";
import * as Test$dQuickCheck$dGen from "../Test.QuickCheck.Gen/index.js";
const checkMonadPlusGen = dictMonadPlus => {
  const $0 = dictMonadPlus.Monad0().Bind1();
  const $1 = dictMonadPlus.Alternative1().Plus1().Alt0();
  return dictEq => gen => genf => {
    const $2 = Effect$dConsole.log("Checking 'Distributivity' law for MonadPlus");
    return () => {
      $2();
      const seed = Random$dLCG.randomSeed();
      return Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(x => y => f => dictEq.eq($0.bind($1.alt(x)(y))(f))($1.alt($0.bind(x)(f))($0.bind(y)(f))))(gen))(gen))(genf))();
    };
  };
};
const checkMonadPlus = dictMonadPlus => {
  const checkMonadPlusGen1 = checkMonadPlusGen(dictMonadPlus);
  return dictArbitrary => {
    const arbitrary = dictArbitrary.arbitrary;
    return dictArbitrary1 => {
      const arbitrary1 = dictArbitrary1.arbitrary;
      const arbitrary1$1 = Test$dQuickCheck$dGen.repeatable(a => Test$dQuickCheck$dArbitrary.coarbOrdering.coarbitrary(a)(arbitrary1));
      return dictEq => {
        const checkMonadPlusGen2 = checkMonadPlusGen1(dictEq);
        return v => checkMonadPlusGen2(arbitrary)(arbitrary1$1);
      };
    };
  };
};
export {checkMonadPlus, checkMonadPlusGen};
