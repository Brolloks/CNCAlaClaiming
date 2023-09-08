import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Random$dLCG from "../Random.LCG/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
import * as Test$dQuickCheck$dArbitrary from "../Test.QuickCheck.Arbitrary/index.js";
import * as Test$dQuickCheck$dGen from "../Test.QuickCheck.Gen/index.js";
const quickCheck$p1 = /* #__PURE__ */ Test$dQuickCheck.quickCheck$p({
  test: /* #__PURE__ */ (() => {
    const $0 = Test$dQuickCheck.testableFunction({
      arbitrary: Test$dQuickCheck$dGen.repeatable(a => Test$dQuickCheck$dArbitrary.coarbOrdering.coarbitrary(a)(Test$dQuickCheck$dArbitrary.arbOrdering.arbitrary))
    })(Test$dQuickCheck.testableBoolean).test;
    return a => Test$dQuickCheck$dGen.bindStateT.bind(a)($0);
  })()
});
const checkAltGen = dictAlt => {
  const $0 = dictAlt.Functor0();
  return dictEq => dictEq1 => gen => {
    const $1 = Effect$dConsole.log("Checking 'Associativity' law for Alt");
    return () => {
      $1();
      const seed = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(x => y => z => dictEq.eq(dictAlt.alt(dictAlt.alt(x)(y))(z))(dictAlt.alt(x)(dictAlt.alt(y)(z))))(gen))(gen))(gen))();
      Effect$dConsole.log("Checking 'Distributivity' law for Alt")();
      return quickCheck$p1(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(x => y => f => dictEq1.eq($0.map(f)(dictAlt.alt(x)(y)))(dictAlt.alt($0.map(f)(x))($0.map(f)(y))))(gen))(gen))();
    };
  };
};
const checkAlt = dictAlt => {
  const checkAltGen1 = checkAltGen(dictAlt);
  return dictArbitrary => {
    const arbitrary = dictArbitrary.arbitrary;
    return dictEq => {
      const checkAltGen2 = checkAltGen1(dictEq);
      return dictEq1 => {
        const checkAltGen3 = checkAltGen2(dictEq1);
        return v => checkAltGen3(arbitrary);
      };
    };
  };
};
export {checkAlt, checkAltGen, quickCheck$p1};
