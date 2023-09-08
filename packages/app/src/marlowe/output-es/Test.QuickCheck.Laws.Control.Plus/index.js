import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Random$dLCG from "../Random.LCG/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
import * as Test$dQuickCheck$dArbitrary from "../Test.QuickCheck.Arbitrary/index.js";
import * as Test$dQuickCheck$dGen from "../Test.QuickCheck.Gen/index.js";
const quickCheck$p1 = /* #__PURE__ */ Test$dQuickCheck.quickCheck$p(/* #__PURE__ */ Test$dQuickCheck.testableFunction({
  arbitrary: /* #__PURE__ */ Test$dQuickCheck$dGen.repeatable(a => Test$dQuickCheck$dArbitrary.coarbOrdering.coarbitrary(a)(Test$dQuickCheck$dArbitrary.arbOrdering.arbitrary))
})(Test$dQuickCheck.testableBoolean));
const checkPlusGen = dictPlus => {
  const Alt0 = dictPlus.Alt0();
  const empty = dictPlus.empty;
  return dictEq => dictEq1 => gen => {
    const $0 = Effect$dConsole.log("Checking 'Left identity' law for Plus");
    return () => {
      $0();
      const seed = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed)(1000)(s => {
        const $1 = gen(s);
        return Data$dTuple.$Tuple(dictEq.eq(Alt0.alt(empty)($1._1))($1._1), $1._2);
      })();
      Effect$dConsole.log("Checking 'Right identity' law for Plus")();
      const seed$1 = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$1)(1000)(s => {
        const $1 = gen(s);
        return Data$dTuple.$Tuple(dictEq.eq(Alt0.alt($1._1)(empty))($1._1), $1._2);
      })();
      Effect$dConsole.log("Checking 'Annihilation' law for Plus")();
      return quickCheck$p1(1000)(f => dictEq1.eq(Alt0.Functor0().map(f)(empty))(empty))();
    };
  };
};
const checkPlus = dictPlus => {
  const checkPlusGen1 = checkPlusGen(dictPlus);
  return dictArbitrary => {
    const arbitrary = dictArbitrary.arbitrary;
    return dictEq => {
      const checkPlusGen2 = checkPlusGen1(dictEq);
      return dictEq1 => {
        const checkPlusGen3 = checkPlusGen2(dictEq1);
        return v => checkPlusGen3(arbitrary);
      };
    };
  };
};
export {checkPlus, checkPlusGen, quickCheck$p1};
