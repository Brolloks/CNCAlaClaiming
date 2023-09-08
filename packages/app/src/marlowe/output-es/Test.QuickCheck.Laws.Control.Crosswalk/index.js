import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
const checkCrosswalk = dictCrosswalk => dictAlignable => {
  const crosswalk1 = dictCrosswalk.crosswalk(dictAlignable);
  const nil = dictAlignable.nil;
  return dictArbitrary => {
    const quickCheck$p = Test$dQuickCheck.quickCheck$p(Test$dQuickCheck.testableFunction(dictArbitrary)(Test$dQuickCheck.testableBoolean));
    return dictEq => v => v1 => {
      const $0 = Effect$dConsole.log("Checking 'Annihilation' law for Crosswalk");
      return () => {
        $0();
        return quickCheck$p(1000)(fa => dictEq.eq(crosswalk1(v$1 => nil)(fa))(nil))();
      };
    };
  };
};
export {checkCrosswalk};
