import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Random$dLCG from "../Random.LCG/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
import * as Test$dQuickCheck$dArbitrary from "../Test.QuickCheck.Arbitrary/index.js";
import * as Test$dQuickCheck$dGen from "../Test.QuickCheck.Gen/index.js";
const checkComonadGen = dictComonad => {
  const extract = dictComonad.extract;
  const $0 = dictComonad.Extend0();
  return dictEq => gen => cogen => {
    const $1 = Effect$dConsole.log("Checking 'Left identity' law for Comonad");
    return () => {
      $1();
      const seed = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed)(1000)(s => {
        const $2 = gen(s);
        return Data$dTuple.$Tuple(dictEq.eq($0.extend(extract)($2._1))($2._1), $2._2);
      })();
      Effect$dConsole.log("Checking 'Right identity' law for Comonad")();
      const seed$1 = Random$dLCG.randomSeed();
      return Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$1)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(f => x => {
        const $2 = extract($0.extend(f)(x));
        const $3 = f(x);
        if ($2 === "LT") { return $3 === "LT"; }
        if ($2 === "GT") { return $3 === "GT"; }
        return $2 === "EQ" && $3 === "EQ";
      })(cogen))(gen))();
    };
  };
};
const checkComonad = dictComonad => {
  const checkComonadGen1 = checkComonadGen(dictComonad);
  return dictArbitrary => {
    const arbitrary = dictArbitrary.arbitrary;
    return dictCoarbitrary => {
      const arbitrary1 = Test$dQuickCheck$dGen.repeatable(a => dictCoarbitrary.coarbitrary(a)(Test$dQuickCheck$dArbitrary.arbOrdering.arbitrary));
      return dictEq => {
        const checkComonadGen2 = checkComonadGen1(dictEq);
        return v => checkComonadGen2(arbitrary)(arbitrary1);
      };
    };
  };
};
export {checkComonad, checkComonadGen};
