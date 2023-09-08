import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Random$dLCG from "../Random.LCG/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
import * as Test$dQuickCheck$dGen from "../Test.QuickCheck.Gen/index.js";
const checkBooleanAlgebraGen = dictBooleanAlgebra => {
  const HeytingAlgebra0 = dictBooleanAlgebra.HeytingAlgebra0();
  const tt = HeytingAlgebra0.tt;
  return dictEq => gen => {
    const $0 = Effect$dConsole.log("Checking 'Excluded middle' law for BooleanAlgebra");
    return () => {
      $0();
      const seed = Random$dLCG.randomSeed();
      return Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed)(1000)(s => {
        const $1 = gen(s);
        return Data$dTuple.$Tuple(dictEq.eq(HeytingAlgebra0.disj($1._1)(HeytingAlgebra0.not($1._1)))(tt), $1._2);
      })();
    };
  };
};
const checkBooleanAlgebra = dictArbitrary => {
  const arbitrary = dictArbitrary.arbitrary;
  return dictBooleanAlgebra => {
    const checkBooleanAlgebraGen1 = checkBooleanAlgebraGen(dictBooleanAlgebra);
    return dictEq => {
      const checkBooleanAlgebraGen2 = checkBooleanAlgebraGen1(dictEq);
      return v => checkBooleanAlgebraGen2(arbitrary);
    };
  };
};
export {checkBooleanAlgebra, checkBooleanAlgebraGen};
