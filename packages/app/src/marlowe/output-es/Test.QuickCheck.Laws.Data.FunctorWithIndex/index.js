import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Random$dLCG from "../Random.LCG/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
import * as Test$dQuickCheck$dArbitrary from "../Test.QuickCheck.Arbitrary/index.js";
import * as Test$dQuickCheck$dGen from "../Test.QuickCheck.Gen/index.js";
const arbFunction = {
  arbitrary: /* #__PURE__ */ Test$dQuickCheck$dGen.repeatable(a => Test$dQuickCheck$dArbitrary.coarbOrdering.coarbitrary(a)(Test$dQuickCheck$dArbitrary.arbOrdering.arbitrary))
};
const arbFunction1 = {
  arbitrary: /* #__PURE__ */ Test$dQuickCheck$dGen.repeatable(a => Test$dQuickCheck$dArbitrary.coarbOrdering.coarbitrary(a)(Test$dQuickCheck$dArbitrary.arbOrdering.arbitrary))
};
const checkFunctorWithIndexGen = dictFunctorWithIndex => dictCoarbitrary => {
  const quickCheck$p1 = Test$dQuickCheck.quickCheck$p({
    test: (() => {
      const $0 = Test$dQuickCheck.testableFunction({arbitrary: Test$dQuickCheck$dGen.repeatable(a => dictCoarbitrary.coarbitrary(a)(arbFunction.arbitrary))})(Test$dQuickCheck.testableFunction({
        arbitrary: Test$dQuickCheck$dGen.repeatable(a => dictCoarbitrary.coarbitrary(a)(arbFunction1.arbitrary))
      })(Test$dQuickCheck.testableBoolean)).test;
      return a => Test$dQuickCheck$dGen.bindStateT.bind(a)($0);
    })()
  });
  return dictEq => gen => {
    const $0 = Effect$dConsole.log("Checking 'Identity' law for FunctorWithIndex");
    return () => {
      $0();
      const seed = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed)(1000)(s => {
        const $1 = gen(s);
        return Data$dTuple.$Tuple(dictEq.eq(dictFunctorWithIndex.mapWithIndex(v => a => a)($1._1))($1._1), $1._2);
      })();
      Effect$dConsole.log("Checking 'Composition' law for FunctorWithIndex")();
      return quickCheck$p1(1000)(s => {
        const $1 = gen(s);
        return Data$dTuple.$Tuple(
          (() => {
            const $2 = $1._1;
            return f => g => dictEq.eq(dictFunctorWithIndex.mapWithIndex(f)(dictFunctorWithIndex.mapWithIndex(g)($2)))(dictFunctorWithIndex.mapWithIndex(i => {
              const $3 = f(i);
              const $4 = g(i);
              return x => $3($4(x));
            })($2));
          })(),
          $1._2
        );
      })();
    };
  };
};
const checkFunctorWithIndex = dictFunctorWithIndex => dictArbitrary => {
  const arbitrary = dictArbitrary.arbitrary;
  return dictCoarbitrary => {
    const checkFunctorWithIndexGen2 = checkFunctorWithIndexGen(dictFunctorWithIndex)(dictCoarbitrary);
    return dictEq => {
      const checkFunctorWithIndexGen3 = checkFunctorWithIndexGen2(dictEq);
      return v => checkFunctorWithIndexGen3(arbitrary);
    };
  };
};
export {arbFunction, arbFunction1, checkFunctorWithIndex, checkFunctorWithIndexGen};
