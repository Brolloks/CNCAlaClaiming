import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Random$dLCG from "../Random.LCG/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
import * as Test$dQuickCheck$dGen from "../Test.QuickCheck.Gen/index.js";
const checkRingGen = dictRing => {
  const Semiring0 = dictRing.Semiring0();
  const zero = Semiring0.zero;
  const zero$1 = dictRing.Semiring0().zero;
  return dictEq => gen => {
    const $0 = Effect$dConsole.log("Checking 'Additive inverse' law for Ring");
    return () => {
      $0();
      const seed = Random$dLCG.randomSeed();
      return Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed)(1000)(s => {
        const $1 = gen(s);
        return Data$dTuple.$Tuple(
          dictEq.eq(dictRing.sub($1._1)($1._1))(zero) && dictEq.eq(Semiring0.add($1._1)(dictRing.sub(zero$1)($1._1)))(zero) && dictEq.eq(Semiring0.add(dictRing.sub(zero$1)($1._1))($1._1))(zero),
          $1._2
        );
      })();
    };
  };
};
const checkRing = dictRing => {
  const checkRingGen1 = checkRingGen(dictRing);
  return dictArbitrary => {
    const arbitrary = dictArbitrary.arbitrary;
    return dictEq => {
      const checkRingGen2 = checkRingGen1(dictEq);
      return v => checkRingGen2(arbitrary);
    };
  };
};
export {checkRing, checkRingGen};
