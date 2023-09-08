import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Random$dLCG from "../Random.LCG/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
import * as Test$dQuickCheck$dGen from "../Test.QuickCheck.Gen/index.js";
const checkDivisionRingGen = dictDivisionRing => {
  const Semiring0 = dictDivisionRing.Ring0().Semiring0();
  const one = Semiring0.one;
  const zero = Semiring0.zero;
  return dictEq => gen => {
    const nonZero = !dictEq.eq(one)(zero);
    const $0 = Effect$dConsole.log("Checking 'Non-zero ring' law for DivisionRing");
    return () => {
      $0();
      const seed = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed(Test$dQuickCheck.testableBoolean)(seed)(1000)(nonZero)();
      Effect$dConsole.log("Checking 'Non-zero multiplicative inverse' law for DivisionRing")();
      const seed$1 = Random$dLCG.randomSeed();
      return Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$1)(1000)(s => {
        const $1 = gen(s);
        return Data$dTuple.$Tuple(
          dictEq.eq($1._1)(zero) || dictEq.eq(Semiring0.mul(dictDivisionRing.recip($1._1))($1._1))(Semiring0.mul($1._1)(dictDivisionRing.recip($1._1))) && dictEq.eq(Semiring0.mul(dictDivisionRing.recip($1._1))($1._1))(one) && dictEq.eq(Semiring0.mul($1._1)(dictDivisionRing.recip($1._1)))(one),
          $1._2
        );
      })();
    };
  };
};
const checkDivisionRing = dictDivisionRing => {
  const checkDivisionRingGen1 = checkDivisionRingGen(dictDivisionRing);
  return dictArbitrary => {
    const arbitrary = dictArbitrary.arbitrary;
    return dictEq => {
      const checkDivisionRingGen2 = checkDivisionRingGen1(dictEq);
      return v => checkDivisionRingGen2(arbitrary);
    };
  };
};
export {checkDivisionRing, checkDivisionRingGen};
