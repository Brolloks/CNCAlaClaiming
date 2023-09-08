import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Random$dLCG from "../Random.LCG/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
import * as Test$dQuickCheck$dGen from "../Test.QuickCheck.Gen/index.js";
const checkBoundedEnumGen = dictBoundedEnum => {
  const Enum1 = dictBoundedEnum.Enum1();
  const Ord0 = Enum1.Ord0();
  const Eq0 = Ord0.Eq0();
  const $0 = (x, y) => {
    if (x.tag === "Nothing") { return y.tag === "Nothing"; }
    return x.tag === "Just" && y.tag === "Just" && Eq0.eq(x._1)(y._1);
  };
  const Bounded0 = dictBoundedEnum.Bounded0();
  const top = Bounded0.top;
  const succ1 = Enum1.succ;
  const pred1 = Enum1.pred;
  const bottom = Bounded0.bottom;
  const cardinality = dictBoundedEnum.cardinality;
  return dictOrd => gen => {
    const predLaw = $0(
      Data$dMaybe.$Maybe("Just", bottom),
      Data$dFoldable.foldlArray(Data$dMaybe.bindMaybe.bind)(Data$dMaybe.$Maybe("Just", top))(Data$dArray.replicate(cardinality - 1 | 0)(pred1))
    );
    const succLaw = $0(
      Data$dMaybe.$Maybe("Just", top),
      Data$dFoldable.foldlArray(Data$dMaybe.bindMaybe.bind)(Data$dMaybe.$Maybe("Just", bottom))(Data$dArray.replicate(cardinality - 1 | 0)(succ1))
    );
    const $1 = Effect$dConsole.log("Checking 'succ' law for BoundedEnum");
    return () => {
      $1();
      const seed = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed(Test$dQuickCheck.testableBoolean)(seed)(1)(succLaw)();
      Effect$dConsole.log("Checking 'pred' law for BoundedEnum")();
      const seed$1 = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed(Test$dQuickCheck.testableBoolean)(seed$1)(1)(predLaw)();
      Effect$dConsole.log("Checking 'predsucc' law for BoundedEnum")();
      const seed$2 = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$2)(1000)(s => {
        const $2 = gen(s);
        return Data$dTuple.$Tuple(
          Eq0.eq($2._1)(bottom) || (() => {
            const $3 = pred1($2._1);
            return $0(
              (() => {
                if ($3.tag === "Just") { return succ1($3._1); }
                if ($3.tag === "Nothing") { return Data$dMaybe.Nothing; }
                $runtime.fail();
              })(),
              Data$dMaybe.$Maybe("Just", $2._1)
            );
          })(),
          $2._2
        );
      })();
      Effect$dConsole.log("Checking 'succpred' law for BoundedEnum")();
      const seed$3 = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$3)(1000)(s => {
        const $2 = gen(s);
        return Data$dTuple.$Tuple(
          Eq0.eq($2._1)(top) || (() => {
            const $3 = succ1($2._1);
            return $0(
              (() => {
                if ($3.tag === "Just") { return pred1($3._1); }
                if ($3.tag === "Nothing") { return Data$dMaybe.Nothing; }
                $runtime.fail();
              })(),
              Data$dMaybe.$Maybe("Just", $2._1)
            );
          })(),
          $2._2
        );
      })();
      Effect$dConsole.log("Checking 'enumpred' law for BoundedEnum")();
      const seed$4 = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$4)(1000)(s => {
        const $2 = gen(s);
        return Data$dTuple.$Tuple(
          (() => {
            const $3 = pred1($2._1);
            return Eq0.eq($2._1)(bottom) || (() => {
              if ($3.tag === "Just") {
                const $4 = dictBoundedEnum.fromEnum($2._1);
                return $4 > -2147483648 && dictBoundedEnum.fromEnum($3._1) === ($4 - 1 | 0);
              }
              return dictBoundedEnum.fromEnum($2._1) <= -2147483648;
            })();
          })(),
          $2._2
        );
      })();
      Effect$dConsole.log("Checking 'enumsucc' law for BoundedEnum")();
      const seed$5 = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$5)(1000)(s => {
        const $2 = gen(s);
        return Data$dTuple.$Tuple(
          (() => {
            const $3 = succ1($2._1);
            return Eq0.eq($2._1)(top) || (() => {
              if ($3.tag === "Just") {
                const $4 = dictBoundedEnum.fromEnum($2._1);
                return $4 < 2147483647 && dictBoundedEnum.fromEnum($3._1) === ($4 + 1 | 0);
              }
              return dictBoundedEnum.fromEnum($2._1) >= 2147483647;
            })();
          })(),
          $2._2
        );
      })();
      Effect$dConsole.log("Checking 'compare' law for BoundedEnum")();
      const seed$6 = Random$dLCG.randomSeed();
      Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$6)(1000)(Test$dQuickCheck$dGen.applyGen.apply(Test$dQuickCheck$dGen.applyGen.Functor0().map(a => b => {
        const $2 = Ord0.compare(a)(b);
        const $3 = Data$dOrd.ordInt.compare(dictBoundedEnum.fromEnum(a))(dictBoundedEnum.fromEnum(b));
        if ($2 === "LT") { return $3 === "LT"; }
        if ($2 === "GT") { return $3 === "GT"; }
        return $2 === "EQ" && $3 === "EQ";
      })(gen))(gen))();
      Effect$dConsole.log("Checking 'tofromenum' law for BoundedEnum")();
      const seed$7 = Random$dLCG.randomSeed();
      return Test$dQuickCheck.quickCheckWithSeed({test: a => Test$dQuickCheck$dGen.bindStateT.bind(a)(Test$dQuickCheck.testableBoolean.test)})(seed$7)(1000)(s => {
        const $2 = gen(s);
        return Data$dTuple.$Tuple($0(dictBoundedEnum.toEnum(dictBoundedEnum.fromEnum($2._1)), Data$dMaybe.$Maybe("Just", $2._1)), $2._2);
      })();
    };
  };
};
const checkBoundedEnum = dictArbitrary => {
  const arbitrary = dictArbitrary.arbitrary;
  return dictBoundedEnum => {
    const checkBoundedEnumGen1 = checkBoundedEnumGen(dictBoundedEnum)(dictBoundedEnum.Enum1().Ord0());
    return dictOrd => v => checkBoundedEnumGen1(arbitrary);
  };
};
export {checkBoundedEnum, checkBoundedEnumGen};
