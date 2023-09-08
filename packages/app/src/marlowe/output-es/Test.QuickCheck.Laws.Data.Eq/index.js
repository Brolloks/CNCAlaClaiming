import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Random$dLCG from "../Random.LCG/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
import * as Test$dQuickCheck$dGen from "../Test.QuickCheck.Gen/index.js";
const checkEqGen = dictEq => gen => {
  const $0 = Effect$dConsole.log("Checking 'Reflexivity' law for Eq");
  return () => {
    $0();
    const seed = Random$dLCG.randomSeed();
    Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed)(1000)(s => {
      const $1 = gen(s);
      return Data$dTuple.$Tuple(dictEq.eq($1._1)($1._1), $1._2);
    })();
    Effect$dConsole.log("Checking 'Symmetry' law for Eq")();
    const seed$1 = Random$dLCG.randomSeed();
    Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$1)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(x => y => dictEq.eq(x)(y) === dictEq.eq(y)(x))(gen))(gen))();
    Effect$dConsole.log("Checking 'Transitivity' law for Eq")();
    const seed$2 = Random$dLCG.randomSeed();
    Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$2)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(x => y => z => {
      if (dictEq.eq(x)(y) && dictEq.eq(y)(z)) { return dictEq.eq(x)(z); }
      return true;
    })(gen))(gen))(gen))();
    Effect$dConsole.log("Checking 'Negation' law for Eq")();
    const seed$3 = Random$dLCG.randomSeed();
    return Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$3)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(x => y => !dictEq.eq(x)(y) === !dictEq.eq(x)(y))(gen))(gen))();
  };
};
const checkEq = dictArbitrary => {
  const arbitrary = dictArbitrary.arbitrary;
  return dictEq => v => checkEqGen(dictEq)(arbitrary);
};
export {checkEq, checkEqGen};
