import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Random$dLCG from "../Random.LCG/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
import * as Test$dQuickCheck$dGen from "../Test.QuickCheck.Gen/index.js";
const checkCategoryGen = dictCategory => {
  const $0 = dictCategory.Semigroupoid0();
  const identity = dictCategory.identity;
  return dictArbitrary => dictEq => gen => {
    const $1 = Effect$dConsole.log("Checking 'Identity' law for Category");
    return () => {
      $1();
      const seed = Random$dLCG.randomSeed();
      return Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed)(1000)(s => {
        const $2 = gen(s);
        return Data$dTuple.$Tuple(dictEq.eq($0.compose(identity)($2._1))($2._1) && dictEq.eq($0.compose($2._1)(identity))($2._1), $2._2);
      })();
    };
  };
};
const checkCategory = dictCategory => {
  const checkCategoryGen1 = checkCategoryGen(dictCategory);
  return dictArbitrary => {
    const checkCategoryGen2 = checkCategoryGen1(dictArbitrary);
    const arbitrary = dictArbitrary.arbitrary;
    return dictEq => {
      const checkCategoryGen3 = checkCategoryGen2(dictEq);
      return v => checkCategoryGen3(arbitrary);
    };
  };
};
export {checkCategory, checkCategoryGen};
