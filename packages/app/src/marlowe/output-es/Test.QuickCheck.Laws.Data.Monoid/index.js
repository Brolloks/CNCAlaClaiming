import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Random$dLCG from "../Random.LCG/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
import * as Test$dQuickCheck$dGen from "../Test.QuickCheck.Gen/index.js";
const checkMonoidGen = dictMonoid => {
  const $0 = dictMonoid.Semigroup0();
  const mempty = dictMonoid.mempty;
  return dictEq => gen => {
    const $1 = Effect$dConsole.log("Checking 'Left identity' law for Monoid");
    return () => {
      $1();
      const seed = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed)(1000)(s => {
        const $2 = gen(s);
        return Data$dTuple.$Tuple(dictEq.eq($0.append(mempty)($2._1))($2._1), $2._2);
      })();
      Effect$dConsole.log("Checking 'Right identity' law for Monoid")();
      const seed$1 = Random$dLCG.randomSeed();
      return Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$1)(1000)(s => {
        const $2 = gen(s);
        return Data$dTuple.$Tuple(dictEq.eq($0.append($2._1)(mempty))($2._1), $2._2);
      })();
    };
  };
};
const checkMonoid = dictMonoid => {
  const checkMonoidGen1 = checkMonoidGen(dictMonoid);
  return dictArbitrary => {
    const arbitrary = dictArbitrary.arbitrary;
    return dictEq => {
      const checkMonoidGen2 = checkMonoidGen1(dictEq);
      return v => checkMonoidGen2(arbitrary);
    };
  };
};
export {checkMonoid, checkMonoidGen};
