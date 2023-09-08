import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Random$dLCG from "../Random.LCG/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
import * as Test$dQuickCheck$dGen from "../Test.QuickCheck.Gen/index.js";
const checkEnumGen = dictEnum => {
  const Ord0 = dictEnum.Ord0();
  const $0 = Ord0.Eq0();
  const eq = (x, y) => {
    if (x.tag === "Nothing") { return y.tag === "Nothing"; }
    return x.tag === "Just" && y.tag === "Just" && $0.eq(x._1)(y._1);
  };
  return dictOrd => gen => {
    const $1 = Effect$dConsole.log("Checking 'Successor' law for Enum");
    return () => {
      $1();
      const seed = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed)(1000)(s => {
        const $2 = gen(s);
        return Data$dTuple.$Tuple(
          (() => {
            const $3 = dictEnum.succ($2._1);
            if ($3.tag === "Nothing") { return true; }
            if ($3.tag === "Just") { return Ord0.compare($2._1)($3._1) === "LT"; }
            $runtime.fail();
          })(),
          $2._2
        );
      })();
      Effect$dConsole.log("Checking 'Predecessor' law for Enum")();
      const seed$1 = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$1)(1000)(s => {
        const $2 = gen(s);
        return Data$dTuple.$Tuple(
          (() => {
            const $3 = dictEnum.pred($2._1);
            if ($3.tag === "Nothing") { return true; }
            if ($3.tag === "Just") { return Ord0.compare($3._1)($2._1) === "LT"; }
            $runtime.fail();
          })(),
          $2._2
        );
      })();
      Effect$dConsole.log("Checking 'Succ retracts pred' law for Enum")();
      const seed$2 = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$2)(1000)(s => {
        const $2 = gen(s);
        return Data$dTuple.$Tuple(
          (() => {
            const $3 = dictEnum.pred($2._1);
            return eq(
              (() => {
                const $4 = (() => {
                  if ($3.tag === "Just") { return dictEnum.succ($3._1); }
                  if ($3.tag === "Nothing") { return Data$dMaybe.Nothing; }
                  $runtime.fail();
                })();
                if ($4.tag === "Just") { return dictEnum.pred($4._1); }
                if ($4.tag === "Nothing") { return Data$dMaybe.Nothing; }
                $runtime.fail();
              })(),
              dictEnum.pred($2._1)
            );
          })(),
          $2._2
        );
      })();
      Effect$dConsole.log("Checking 'Pred retracts succ' law for Enum")();
      const seed$3 = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$3)(1000)(s => {
        const $2 = gen(s);
        return Data$dTuple.$Tuple(
          (() => {
            const $3 = dictEnum.succ($2._1);
            return eq(
              (() => {
                const $4 = (() => {
                  if ($3.tag === "Just") { return dictEnum.pred($3._1); }
                  if ($3.tag === "Nothing") { return Data$dMaybe.Nothing; }
                  $runtime.fail();
                })();
                if ($4.tag === "Just") { return dictEnum.succ($4._1); }
                if ($4.tag === "Nothing") { return Data$dMaybe.Nothing; }
                $runtime.fail();
              })(),
              dictEnum.succ($2._1)
            );
          })(),
          $2._2
        );
      })();
      Effect$dConsole.log("Checking 'Non-skipping succ' law for Enum")();
      const seed$4 = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$4)(1000)(Test$dQuickCheck$dGen.applyGen.apply(s => {
        const $2 = gen(s);
        return Data$dTuple.$Tuple(
          (() => {
            const $3 = $2._1;
            return b => Ord0.compare(b)($3) !== "GT" || (() => {
              const $4 = dictEnum.succ($3);
              if ($4.tag === "Nothing") { return false; }
              if ($4.tag === "Just") { return Ord0.compare($4._1)(b) !== "GT"; }
              $runtime.fail();
            })();
          })(),
          $2._2
        );
      })(gen))();
      Effect$dConsole.log("Checking 'Non-skipping pred' law for Enum")();
      const seed$5 = Random$dLCG.randomSeed();
      return Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$5)(1000)(Test$dQuickCheck$dGen.applyGen.apply(s => {
        const $2 = gen(s);
        return Data$dTuple.$Tuple(
          (() => {
            const $3 = $2._1;
            return b => Ord0.compare($3)(b) !== "GT" || (() => {
              const $4 = dictEnum.pred($3);
              if ($4.tag === "Nothing") { return false; }
              if ($4.tag === "Just") { return Ord0.compare(b)($4._1) !== "GT"; }
              $runtime.fail();
            })();
          })(),
          $2._2
        );
      })(gen))();
    };
  };
};
const checkEnum = dictArbitrary => {
  const arbitrary = dictArbitrary.arbitrary;
  return dictEnum => {
    const checkEnumGen1 = checkEnumGen(dictEnum)(dictEnum.Ord0());
    return dictOrd => v => checkEnumGen1(arbitrary);
  };
};
export {checkEnum, checkEnumGen};
