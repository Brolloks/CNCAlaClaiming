import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Random$dLCG from "../Random.LCG/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
import * as Test$dQuickCheck$dGen from "../Test.QuickCheck.Gen/index.js";
const checkCommutativeRingGen = dictCommutativeRing => {
  const $0 = dictCommutativeRing.Ring0().Semiring0();
  return dictEq => gen => {
    const $1 = Effect$dConsole.log("Checking 'Commutative multiplication' law for CommutativeRing");
    return () => {
      $1();
      const seed = Random$dLCG.randomSeed();
      return Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(a => b => dictEq.eq($0.mul(a)(b))($0.mul(b)(a)))(gen))(gen))();
    };
  };
};
const checkCommutativeRing = dictCommutativeRing => {
  const checkCommutativeRingGen1 = checkCommutativeRingGen(dictCommutativeRing);
  return dictArbitrary => {
    const arbitrary = dictArbitrary.arbitrary;
    return dictEq => {
      const checkCommutativeRingGen2 = checkCommutativeRingGen1(dictEq);
      return v => checkCommutativeRingGen2(arbitrary);
    };
  };
};
export {checkCommutativeRing, checkCommutativeRingGen};
