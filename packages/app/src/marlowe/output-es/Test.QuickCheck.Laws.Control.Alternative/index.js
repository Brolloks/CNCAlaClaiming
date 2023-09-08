import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Random$dLCG from "../Random.LCG/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
import * as Test$dQuickCheck$dGen from "../Test.QuickCheck.Gen/index.js";
const checkAlternativeGen = dictAlternative => {
  const $0 = dictAlternative.Applicative0().Apply0();
  const Plus1 = dictAlternative.Plus1();
  const $1 = Plus1.Alt0();
  const empty = Plus1.empty;
  return dictEq => dictEq1 => gen => genf => v => {
    const $2 = Effect$dConsole.log("Checking 'Left identity' law for Alternative");
    return () => {
      $2();
      const seed = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(f => g => x => dictEq1.eq($0.apply($1.alt(f)(g))(x))($1.alt($0.apply(f)(x))($0.apply(g)(x))))(genf))(genf))(gen))();
      Effect$dConsole.log("Checking 'Annihilation' law for Alternative")();
      const seed$1 = Random$dLCG.randomSeed();
      return Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$1)(1000)(s => {
        const $3 = gen(s);
        return Data$dTuple.$Tuple(dictEq.eq($0.apply(empty)($3._1))(empty), $3._2);
      })();
    };
  };
};
const checkAlternative = dictAlternative => {
  const checkAlternativeGen1 = checkAlternativeGen(dictAlternative);
  return dictArbitrary => {
    const arbitrary = dictArbitrary.arbitrary;
    return dictArbitrary1 => {
      const arbitrary1 = dictArbitrary1.arbitrary;
      return dictEq => {
        const checkAlternativeGen2 = checkAlternativeGen1(dictEq);
        return dictEq1 => checkAlternativeGen2(dictEq1)(arbitrary1)(arbitrary);
      };
    };
  };
};
export {checkAlternative, checkAlternativeGen};
