import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Random$dLCG from "../Random.LCG/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
import * as Test$dQuickCheck$dGen from "../Test.QuickCheck.Gen/index.js";
const checkSemiringGen = dictSemiring => {
  const one = dictSemiring.one;
  const zero = dictSemiring.zero;
  return dictEq => gen => {
    const $0 = Effect$dConsole.log("Checking 'Associativity' law for Semiring addition");
    return () => {
      $0();
      const seed = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(a => b => c => dictEq.eq(dictSemiring.add(dictSemiring.add(a)(b))(c))(dictSemiring.add(a)(dictSemiring.add(b)(c))))(gen))(gen))(gen))();
      Effect$dConsole.log("Checking 'Identity' law for Semiring addition")();
      const seed$1 = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$1)(1000)(s => {
        const $1 = gen(s);
        return Data$dTuple.$Tuple(dictEq.eq(dictSemiring.add(zero)($1._1))($1._1) && dictEq.eq(dictSemiring.add($1._1)(zero))($1._1), $1._2);
      })();
      Effect$dConsole.log("Checking 'Commutative' law for Semiring addition")();
      const seed$2 = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$2)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(a => b => dictEq.eq(dictSemiring.add(a)(b))(dictSemiring.add(b)(a)))(gen))(gen))();
      Effect$dConsole.log("Checking 'Associativity' law for Semiring multiplication")();
      const seed$3 = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$3)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(a => b => c => dictEq.eq(dictSemiring.mul(dictSemiring.mul(a)(b))(c))(dictSemiring.mul(a)(dictSemiring.mul(b)(c))))(gen))(gen))(gen))();
      Effect$dConsole.log("Checking 'Identity' law for Semiring multiplication")();
      const seed$4 = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$4)(1000)(s => {
        const $1 = gen(s);
        return Data$dTuple.$Tuple(dictEq.eq(dictSemiring.mul(one)($1._1))($1._1) && dictEq.eq(dictSemiring.mul($1._1)(one))($1._1), $1._2);
      })();
      Effect$dConsole.log("Checking 'Left distribution' law for Semiring")();
      const seed$5 = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$5)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(a => b => c => dictEq.eq(dictSemiring.mul(a)(dictSemiring.add(b)(c)))(dictSemiring.add(dictSemiring.mul(a)(b))(dictSemiring.mul(a)(c))))(gen))(gen))(gen))();
      Effect$dConsole.log("Checking 'Right distribution' law for Semiring")();
      const seed$6 = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$6)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(a => b => c => dictEq.eq(dictSemiring.mul(dictSemiring.add(a)(b))(c))(dictSemiring.add(dictSemiring.mul(a)(c))(dictSemiring.mul(b)(c))))(gen))(gen))(gen))();
      Effect$dConsole.log("Checking 'Annihilation' law for Semiring")();
      const seed$7 = Random$dLCG.randomSeed();
      return Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$7)(1000)(s => {
        const $1 = gen(s);
        return Data$dTuple.$Tuple(dictEq.eq(dictSemiring.mul($1._1)(zero))(zero) && dictEq.eq(dictSemiring.mul(zero)($1._1))(zero), $1._2);
      })();
    };
  };
};
const checkSemiring = dictSemiring => {
  const checkSemiringGen1 = checkSemiringGen(dictSemiring);
  return dictArbitrary => {
    const arbitrary = dictArbitrary.arbitrary;
    return dictEq => {
      const checkSemiringGen2 = checkSemiringGen1(dictEq);
      return v => checkSemiringGen2(arbitrary);
    };
  };
};
export {checkSemiring, checkSemiringGen};
