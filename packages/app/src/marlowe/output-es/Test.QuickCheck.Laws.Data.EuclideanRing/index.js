import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Random$dLCG from "../Random.LCG/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
import * as Test$dQuickCheck$dArbitrary from "../Test.QuickCheck.Arbitrary/index.js";
import * as Test$dQuickCheck$dGen from "../Test.QuickCheck.Gen/index.js";
const checkEuclideanRingGen = dictEuclideanRing => {
  const Semiring0 = dictEuclideanRing.CommutativeRing0().Ring0().Semiring0();
  const zero1 = Semiring0.zero;
  const one = Semiring0.one;
  return dictEq => gen => {
    const $0 = Effect$dConsole.log("Checking 'Integral domain' law for EuclideanRing");
    return () => {
      $0();
      Effect$dConsole.log("one /= zero:")();
      const seed = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed(Test$dQuickCheck.testableFunction(Test$dQuickCheck$dArbitrary.arbUnit)(Test$dQuickCheck.testableBoolean))(seed)(1)(v => !dictEq.eq(zero1)(one))();
      Effect$dConsole.log("product of nonzero elements is nonzero:")();
      const seed$1 = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$1)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(a => b => {
        if (!dictEq.eq(a)(zero1) && !dictEq.eq(b)(zero1)) { return !dictEq.eq(Semiring0.mul(a)(b))(zero1); }
        return true;
      })(gen))(gen))();
      Effect$dConsole.log("Checking 'Nonnegative euclidean function' law for EuclideanRing")();
      const seed$2 = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$2)(1000)(s => {
        const $1 = gen(s);
        return Data$dTuple.$Tuple(!dictEq.eq($1._1)(zero1) ? dictEuclideanRing.degree($1._1) >= 0 : true, $1._2);
      })();
      Effect$dConsole.log("Checking 'Quotient/remainder' law for EuclideanRing")();
      const seed$3 = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$3)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(a => b => {
        if (!dictEq.eq(b)(zero1)) {
          const r = dictEuclideanRing.mod(a)(b);
          return dictEq.eq(a)(Semiring0.add(Semiring0.mul(dictEuclideanRing.div(a)(b))(b))(r)) && (dictEq.eq(r)(zero1) || dictEuclideanRing.degree(r) < dictEuclideanRing.degree(b));
        }
        return true;
      })(gen))(gen))();
      Effect$dConsole.log("Checking 'Submultiplicative euclidean function' law for EuclideanRing")();
      const seed$4 = Random$dLCG.randomSeed();
      return Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$4)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(a => b => dictEq.eq(a)(zero1) || dictEq.eq(b)(zero1) || dictEuclideanRing.degree(a) <= dictEuclideanRing.degree(Semiring0.mul(a)(b)))(gen))(gen))();
    };
  };
};
const checkEuclideanRing = dictEuclideanRing => {
  const checkEuclideanRingGen1 = checkEuclideanRingGen(dictEuclideanRing);
  return dictArbitrary => {
    const arbitrary = dictArbitrary.arbitrary;
    return dictEq => {
      const checkEuclideanRingGen2 = checkEuclideanRingGen1(dictEq);
      return v => checkEuclideanRingGen2(arbitrary);
    };
  };
};
export {checkEuclideanRing, checkEuclideanRingGen};
