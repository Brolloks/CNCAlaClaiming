import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Random$dLCG from "../Random.LCG/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
import * as Test$dQuickCheck$dArbitrary from "../Test.QuickCheck.Arbitrary/index.js";
import * as Test$dQuickCheck$dGen from "../Test.QuickCheck.Gen/index.js";
const identity = x => x;
const testableFunction = /* #__PURE__ */ Test$dQuickCheck.testableFunction(Test$dQuickCheck$dArbitrary.arbOrdering)(Test$dQuickCheck.testableBoolean);
const quickCheck$p1 = /* #__PURE__ */ Test$dQuickCheck.quickCheck$p(/* #__PURE__ */ Test$dQuickCheck.testableFunction({
  arbitrary: /* #__PURE__ */ Test$dQuickCheck$dGen.repeatable(a => Test$dQuickCheck$dArbitrary.coarbOrdering.coarbitrary(a)(Test$dQuickCheck$dArbitrary.arbOrdering.arbitrary))
})(testableFunction));
const checkApplicativeGen = dictApplicative => {
  const $0 = dictApplicative.Apply0();
  return dictEq => dictEq1 => dictEq2 => gen => genab => genbc => {
    const $1 = Effect$dConsole.log("Checking 'Identity' law for Applicative");
    return () => {
      $1();
      const seed = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed)(1000)(s => {
        const $2 = gen(s);
        return Data$dTuple.$Tuple(dictEq.eq($0.apply(dictApplicative.pure(identity))($2._1))($2._1), $2._2);
      })();
      Effect$dConsole.log("Checking 'Composition' law for Applicative")();
      const seed$1 = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$1)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(f => g => x => dictEq2.eq($0.apply($0.apply($0.apply(dictApplicative.pure(Control$dSemigroupoid.semigroupoidFn.compose))(f))(g))(x))($0.apply(f)($0.apply(g)(x))))(genbc))(genab))(gen))();
      Effect$dConsole.log("Checking 'Homomorphism' law for Applicative")();
      quickCheck$p1(1000)(f => x => dictEq1.eq($0.apply(dictApplicative.pure(f))(dictApplicative.pure(x)))(dictApplicative.pure(f(x))))();
      Effect$dConsole.log("Checking 'Interchange' law for Applicative")();
      const seed$2 = Random$dLCG.randomSeed();
      return Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(testableFunction.test)})(seed$2)(1000)(s => {
        const $2 = genab(s);
        return Data$dTuple.$Tuple(
          (() => {
            const $3 = $2._1;
            return a => dictEq1.eq($0.apply($3)(dictApplicative.pure(a)))($0.apply(dictApplicative.pure(v => v(a)))($3));
          })(),
          $2._2
        );
      })();
    };
  };
};
const checkApplicative = dictApplicative => {
  const checkApplicativeGen1 = checkApplicativeGen(dictApplicative);
  return dictArbitrary => {
    const arbitrary = dictArbitrary.arbitrary;
    return dictArbitrary1 => {
      const arbitrary1 = dictArbitrary1.arbitrary;
      return dictArbitrary2 => {
        const arbitrary2 = dictArbitrary2.arbitrary;
        return dictEq => {
          const checkApplicativeGen2 = checkApplicativeGen1(dictEq);
          return dictEq1 => {
            const checkApplicativeGen3 = checkApplicativeGen2(dictEq1);
            return dictEq2 => {
              const checkApplicativeGen4 = checkApplicativeGen3(dictEq2);
              return v => checkApplicativeGen4(arbitrary)(arbitrary1)(arbitrary2);
            };
          };
        };
      };
    };
  };
};
export {checkApplicative, checkApplicativeGen, identity, quickCheck$p1, testableFunction};
