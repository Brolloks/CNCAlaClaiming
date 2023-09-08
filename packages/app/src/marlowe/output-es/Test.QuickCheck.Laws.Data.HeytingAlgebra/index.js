import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Random$dLCG from "../Random.LCG/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
import * as Test$dQuickCheck$dGen from "../Test.QuickCheck.Gen/index.js";
const checkHeytingAlgebraGen = dictHeytingAlgebra => {
  const conj1 = dictHeytingAlgebra.conj;
  const tt = dictHeytingAlgebra.tt;
  const ff = dictHeytingAlgebra.ff;
  const disj = dictHeytingAlgebra.disj;
  return dictEq => gen => {
    const associativity = op => a => b => c => dictEq.eq(op(a)(op(b)(c)))(op(op(a)(b))(c));
    const $0 = Effect$dConsole.log("Checking 'Associativity of disjunction' law for HeytingAlgebra");
    return () => {
      $0();
      const seed = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(associativity(disj))(gen))(gen))(gen))();
      Effect$dConsole.log("Checking 'Associativity of conjunction' law for HeytingAlgebra")();
      const seed$1 = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$1)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(associativity(conj1))(gen))(gen))(gen))();
      Effect$dConsole.log("Checking 'Commutativity of disjunction' law for HeytingAlgebra")();
      const seed$2 = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$2)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(a => b => dictEq.eq(disj(a)(b))(disj(b)(a)))(gen))(gen))();
      Effect$dConsole.log("Checking 'Commutativity of conjunction' law for HeytingAlgebra")();
      const seed$3 = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$3)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(a => b => dictEq.eq(conj1(a)(b))(conj1(b)(a)))(gen))(gen))();
      Effect$dConsole.log("Checking 'Absorption of disjunction' law for HeytingAlgebra")();
      const seed$4 = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$4)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(a => b => dictEq.eq(disj(a)(conj1(a)(b)))(a))(gen))(gen))();
      Effect$dConsole.log("Checking 'Absorption of conjunction' law for HeytingAlgebra")();
      const seed$5 = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$5)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(a => b => dictEq.eq(conj1(a)(disj(a)(b)))(a))(gen))(gen))();
      Effect$dConsole.log("Checking 'Idempotent disjunction' law for HeytingAlgebra")();
      const seed$6 = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$6)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(a => v => dictEq.eq(disj(a)(a))(a))(gen))(gen))();
      Effect$dConsole.log("Checking 'Idempotent conjunction' law for HeytingAlgebra")();
      const seed$7 = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$7)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(a => v => dictEq.eq(conj1(a)(a))(a))(gen))(gen))();
      Effect$dConsole.log("Checking 'Disjunction identity' law for HeytingAlgebra")();
      const seed$8 = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$8)(1000)(s => {
        const $1 = gen(s);
        return Data$dTuple.$Tuple(dictEq.eq(disj($1._1)(ff))($1._1), $1._2);
      })();
      Effect$dConsole.log("Checking 'Conjunction identity' law for HeytingAlgebra")();
      const seed$9 = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$9)(1000)(s => {
        const $1 = gen(s);
        return Data$dTuple.$Tuple(dictEq.eq(conj1($1._1)(tt))($1._1), $1._2);
      })();
      Effect$dConsole.log("Checking 'Implication' laws for HeytingAlgebra")();
      const seed$10 = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$10)(1000)(s => {
        const $1 = gen(s);
        return Data$dTuple.$Tuple(dictEq.eq(dictHeytingAlgebra.implies($1._1)($1._1))(tt), $1._2);
      })();
      const seed$11 = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$11)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(a => b => dictEq.eq(conj1(a)(dictHeytingAlgebra.implies(a)(b)))(conj1(a)(b)) && dictEq.eq(conj1(b)(dictHeytingAlgebra.implies(a)(b)))(b))(gen))(gen))();
      const seed$12 = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$12)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(a => b => c => dictEq.eq(dictHeytingAlgebra.implies(a)(conj1(b)(c)))(conj1(dictHeytingAlgebra.implies(a)(b))(dictHeytingAlgebra.implies(a)(c))))(gen))(gen))(gen))();
      Effect$dConsole.log("Checking 'Complemented' law for HeytingAlgebra")();
      const seed$13 = Random$dLCG.randomSeed();
      return Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$13)(1000)(s => {
        const $1 = gen(s);
        return Data$dTuple.$Tuple(dictEq.eq(dictHeytingAlgebra.not($1._1))(dictHeytingAlgebra.implies($1._1)(ff)), $1._2);
      })();
    };
  };
};
const checkHeytingAlgebra = dictArbitrary => {
  const arbitrary = dictArbitrary.arbitrary;
  return dictHeytingAlgebra => {
    const checkHeytingAlgebraGen1 = checkHeytingAlgebraGen(dictHeytingAlgebra);
    return dictEq => {
      const checkHeytingAlgebraGen2 = checkHeytingAlgebraGen1(dictEq);
      return v => checkHeytingAlgebraGen2(arbitrary);
    };
  };
};
export {checkHeytingAlgebra, checkHeytingAlgebraGen};
