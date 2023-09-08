import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Random$dLCG from "../Random.LCG/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
import * as Test$dQuickCheck$dArbitrary from "../Test.QuickCheck.Arbitrary/index.js";
import * as Test$dQuickCheck$dGen from "../Test.QuickCheck.Gen/index.js";
const quickCheck$p = /* #__PURE__ */ Test$dQuickCheck.quickCheck$p({
  test: /* #__PURE__ */ (() => {
    const $0 = Test$dQuickCheck.testableFunction(Test$dQuickCheck$dArbitrary.arbOrdering)(Test$dQuickCheck.testableBoolean).test;
    return a => Test$dQuickCheck$dGen.bindStateT.bind(a)($0);
  })()
});
const checkMonadGen = dictMonad => {
  const $0 = dictMonad.Bind1();
  const pure = dictMonad.Applicative0().pure;
  return dictEq => gen => genf => {
    const $1 = Effect$dConsole.log("Checking 'Left identity' law for Monad");
    return () => {
      $1();
      quickCheck$p(1000)(s => {
        const $2 = genf(s);
        return Data$dTuple.$Tuple(
          (() => {
            const $3 = $2._1;
            return x => dictEq.eq($0.bind(pure(x))($3))($3(x));
          })(),
          $2._2
        );
      })();
      Effect$dConsole.log("Checking 'Right identity' law for Monad")();
      const seed = Random$dLCG.randomSeed();
      return Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed)(1000)(s => {
        const $2 = gen(s);
        return Data$dTuple.$Tuple(dictEq.eq($0.bind($2._1)(pure))($2._1), $2._2);
      })();
    };
  };
};
const checkMonad = dictMonad => {
  const checkMonadGen1 = checkMonadGen(dictMonad);
  return dictArbitrary => {
    const arbitrary = dictArbitrary.arbitrary;
    const arbitrary1 = dictArbitrary.arbitrary;
    const arbitrary1$1 = Test$dQuickCheck$dGen.repeatable(a => Test$dQuickCheck$dArbitrary.coarbOrdering.coarbitrary(a)(arbitrary1));
    return dictEq => {
      const checkMonadGen2 = checkMonadGen1(dictEq);
      return v => checkMonadGen2(arbitrary)(arbitrary1$1);
    };
  };
};
export {checkMonad, checkMonadGen, quickCheck$p};
