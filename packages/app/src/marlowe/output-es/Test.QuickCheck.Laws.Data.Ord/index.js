import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Random$dLCG from "../Random.LCG/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
import * as Test$dQuickCheck$dGen from "../Test.QuickCheck.Gen/index.js";
const checkOrdGen = dictOrd => {
  const Eq0 = dictOrd.Eq0();
  return gen => {
    const $0 = Effect$dConsole.log("Checking 'Reflexivity' law for Ord");
    return () => {
      $0();
      const seed = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed)(1000)(s => {
        const $1 = gen(s);
        return Data$dTuple.$Tuple(dictOrd.compare($1._1)($1._1) !== "GT", $1._2);
      })();
      Effect$dConsole.log("Checking 'Antisymmetry' law for Ord")();
      const seed$1 = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$1)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(a => b => {
        if (dictOrd.compare(a)(b) !== "GT" && dictOrd.compare(b)(a) !== "GT") { return Eq0.eq(a)(b); }
        return !Eq0.eq(a)(b);
      })(gen))(gen))();
      Effect$dConsole.log("Checking 'Transitivity' law for Ord")();
      const seed$2 = Random$dLCG.randomSeed();
      return Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$2)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(a => b => c => {
        if (dictOrd.compare(a)(b) !== "GT" && dictOrd.compare(b)(c) !== "GT") { return dictOrd.compare(a)(c) !== "GT"; }
        return true;
      })(gen))(gen))(gen))();
    };
  };
};
const checkOrd = dictArbitrary => {
  const arbitrary = dictArbitrary.arbitrary;
  return dictOrd => {
    const checkOrdGen1 = checkOrdGen(dictOrd);
    return v => checkOrdGen1(arbitrary);
  };
};
export {checkOrd, checkOrdGen};
