import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Random$dLCG from "../Random.LCG/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
import * as Test$dQuickCheck$dArbitrary from "../Test.QuickCheck.Arbitrary/index.js";
import * as Test$dQuickCheck$dGen from "../Test.QuickCheck.Gen/index.js";
const identity = x => x;
const quickCheck$p1 = /* #__PURE__ */ Test$dQuickCheck.quickCheck$p({
  test: /* #__PURE__ */ (() => {
    const $0 = Test$dQuickCheck.testableFunction({
      arbitrary: Test$dQuickCheck$dGen.repeatable(a => Test$dQuickCheck$dArbitrary.coarbOrdering.coarbitrary(a)(Test$dQuickCheck$dArbitrary.arbOrdering.arbitrary))
    })(Test$dQuickCheck.testableFunction({
      arbitrary: Test$dQuickCheck$dGen.repeatable(a => Test$dQuickCheck$dArbitrary.coarbOrdering.coarbitrary(a)(Test$dQuickCheck$dArbitrary.arbOrdering.arbitrary))
    })(Test$dQuickCheck.testableBoolean)).test;
    return a => Test$dQuickCheck$dGen.bindStateT.bind(a)($0);
  })()
});
const checkFunctorGen = dictFunctor => dictEq => gen => {
  const $0 = Effect$dConsole.log("Checking 'Identity' law for Functor");
  return () => {
    $0();
    const seed = Random$dLCG.randomSeed();
    Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed)(1000)(s => {
      const $1 = gen(s);
      return Data$dTuple.$Tuple(dictEq.eq(dictFunctor.map(identity)($1._1))($1._1), $1._2);
    })();
    Effect$dConsole.log("Checking 'Composition' law for Functor")();
    return quickCheck$p1(1000)(s => {
      const $1 = gen(s);
      return Data$dTuple.$Tuple(
        (() => {
          const $2 = $1._1;
          return f => g => dictEq.eq(dictFunctor.map(x => f(g(x)))($2))(dictFunctor.map(f)(dictFunctor.map(g)($2)));
        })(),
        $1._2
      );
    })();
  };
};
const checkFunctor = dictFunctor => dictArbitrary => {
  const arbitrary = dictArbitrary.arbitrary;
  return dictEq => v => checkFunctorGen(dictFunctor)(dictEq)(arbitrary);
};
export {checkFunctor, checkFunctorGen, identity, quickCheck$p1};
