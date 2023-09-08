import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
import * as Test$dQuickCheck$dArbitrary from "../Test.QuickCheck.Arbitrary/index.js";
import * as Test$dQuickCheck$dGen from "../Test.QuickCheck.Gen/index.js";
import * as Test$dQuickCheck$dLaws from "../Test.QuickCheck.Laws/index.js";
const testableFunction = /* #__PURE__ */ Test$dQuickCheck.testableFunction(Test$dQuickCheck$dArbitrary.arbOrdering)(Test$dQuickCheck.testableBoolean);
const quickCheck$p = /* #__PURE__ */ Test$dQuickCheck.quickCheck$p({
  test: /* #__PURE__ */ (() => {
    const $0 = Test$dQuickCheck.testableFunction((() => {
      const arbitrary1 = Test$dQuickCheck$dGen.repeatable(a => Test$dQuickCheck$dArbitrary.coarbOrdering.coarbitrary(a)(Test$dQuickCheck$dArbitrary.arbOrdering.arbitrary));
      return {arbitrary: Test$dQuickCheck$dGen.repeatable(a => Test$dQuickCheck$dArbitrary.coarbOrdering.coarbitrary(a)(arbitrary1))};
    })())(testableFunction).test;
    return a => Test$dQuickCheck$dGen.bindStateT.bind(a)($0);
  })()
});
const arbFunction2 = {
  arbitrary: /* #__PURE__ */ Test$dQuickCheck$dGen.repeatable(a => Test$dQuickCheck$dArbitrary.coarbOrdering.coarbitrary(a)(Test$dQuickCheck$dArbitrary.arbOrdering.arbitrary))
};
const quickCheck$p1 = /* #__PURE__ */ Test$dQuickCheck.quickCheck$p({
  test: /* #__PURE__ */ (() => {
    const $0 = Test$dQuickCheck.testableFunction({
      arbitrary: Test$dQuickCheck$dGen.repeatable(a => Test$dQuickCheck$dArbitrary.coarbOrdering.coarbitrary(a)(arbFunction2.arbitrary))
    })(testableFunction).test;
    return a => Test$dQuickCheck$dGen.bindStateT.bind(a)($0);
  })()
});
const quickCheck$p2 = /* #__PURE__ */ Test$dQuickCheck.quickCheck$p({
  test: /* #__PURE__ */ (() => {
    const $0 = Test$dQuickCheck.testableFunction(arbFunction2)(Test$dQuickCheck.testableBoolean).test;
    return a => Test$dQuickCheck$dGen.bindStateT.bind(a)($0);
  })()
});
const checkFoldableGen = dictFoldable => {
  const foldrDefault = Data$dFoldable.foldrDefault(dictFoldable);
  const foldlDefault = Data$dFoldable.foldlDefault(dictFoldable);
  return gen => {
    const $0 = Effect$dConsole.log("Checking 'foldr' law for Foldable");
    return () => {
      $0();
      quickCheck$p(1000)(s => {
        const $1 = gen(s);
        return Data$dTuple.$Tuple(
          (() => {
            const $2 = $1._1;
            return f => b => {
              const $3 = dictFoldable.foldr(f)(b)($2);
              const $4 = foldrDefault(f)(b)($2);
              if ($3 === "LT") { return $4 === "LT"; }
              if ($3 === "GT") { return $4 === "GT"; }
              return $3 === "EQ" && $4 === "EQ";
            };
          })(),
          $1._2
        );
      })();
      Effect$dConsole.log("Checking 'foldl' law for Foldable")();
      return quickCheck$p1(1000)(s => {
        const $1 = gen(s);
        return Data$dTuple.$Tuple(
          (() => {
            const $2 = $1._1;
            return f => b => {
              const $3 = dictFoldable.foldl(f)(b)($2);
              const $4 = foldlDefault(f)(b)($2);
              if ($3 === "LT") { return $4 === "LT"; }
              if ($3 === "GT") { return $4 === "GT"; }
              return $3 === "EQ" && $4 === "EQ";
            };
          })(),
          $1._2
        );
      })();
    };
  };
};
const checkFoldableFunctorGen = dictFoldable => {
  const foldMap = dictFoldable.foldMap(Test$dQuickCheck$dLaws.monoidB);
  const fold = dictFoldable.foldMap(Test$dQuickCheck$dLaws.monoidB)(Data$dFoldable.identity);
  const checkFoldableGen1 = checkFoldableGen(dictFoldable);
  return dictFunctor => gen => {
    const $0 = checkFoldableGen1(gen);
    return () => {
      $0();
      Effect$dConsole.log("Checking 'foldMap' law for Foldable")();
      return quickCheck$p2(1000)(s => {
        const $1 = gen(s);
        return Data$dTuple.$Tuple(
          (() => {
            const $2 = $1._1;
            return a => {
              const $3 = foldMap(a)($2);
              const $4 = fold(dictFunctor.map(a)($2));
              if ($3 === "LT") { return $4 === "LT"; }
              if ($3 === "GT") { return $4 === "GT"; }
              return $3 === "EQ" && $4 === "EQ";
            };
          })(),
          $1._2
        );
      })();
    };
  };
};
const checkFoldableFunctor = dictFoldable => {
  const checkFoldableFunctorGen1 = checkFoldableFunctorGen(dictFoldable);
  return dictFunctor => {
    const checkFoldableFunctorGen2 = checkFoldableFunctorGen1(dictFunctor);
    return dictArbitrary => {
      const arbitrary = dictArbitrary.arbitrary;
      return v => checkFoldableFunctorGen2(arbitrary);
    };
  };
};
const checkFoldable = dictFoldable => {
  const checkFoldableGen1 = checkFoldableGen(dictFoldable);
  return dictArbitrary => {
    const arbitrary = dictArbitrary.arbitrary;
    return v => checkFoldableGen1(arbitrary);
  };
};
export {arbFunction2, checkFoldable, checkFoldableFunctor, checkFoldableFunctorGen, checkFoldableGen, quickCheck$p, quickCheck$p1, quickCheck$p2, testableFunction};
