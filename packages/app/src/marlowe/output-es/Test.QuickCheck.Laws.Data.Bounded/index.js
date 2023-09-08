import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Random$dLCG from "../Random.LCG/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
import * as Test$dQuickCheck$dGen from "../Test.QuickCheck.Gen/index.js";
const checkBoundedGen = dictBounded => {
  const $0 = dictBounded.Ord0();
  const bottom = dictBounded.bottom;
  const top = dictBounded.top;
  return dictOrd => gen => {
    const $1 = Effect$dConsole.log("Checking 'Ordering' law for Bounded");
    return () => {
      $1();
      const seed = Random$dLCG.randomSeed();
      return Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed)(1000)(s => {
        const $2 = gen(s);
        return Data$dTuple.$Tuple($0.compare(bottom)($2._1) !== "GT" && $0.compare($2._1)(top) !== "GT", $2._2);
      })();
    };
  };
};
const checkBounded = dictArbitrary => {
  const arbitrary = dictArbitrary.arbitrary;
  return dictBounded => {
    const checkBoundedGen1 = checkBoundedGen(dictBounded)(dictBounded.Ord0());
    return dictOrd => v => checkBoundedGen1(arbitrary);
  };
};
export {checkBounded, checkBoundedGen};
