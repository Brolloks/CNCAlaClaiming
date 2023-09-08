import * as Data$dThese from "../Data.These/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
const identity = x => x;
const checkAlignable = dictAlignable => {
  const Align0 = dictAlignable.Align0();
  const nil = dictAlignable.nil;
  const $0 = Align0.Functor0();
  return dictArbitrary => {
    const quickCheck$p = Test$dQuickCheck.quickCheck$p(Test$dQuickCheck.testableFunction(dictArbitrary)(Test$dQuickCheck.testableBoolean));
    return dictArbitrary1 => {
      const quickCheck$p1 = Test$dQuickCheck.quickCheck$p(Test$dQuickCheck.testableFunction(dictArbitrary1)(Test$dQuickCheck.testableBoolean));
      return dictEq => v => {
        const $1 = Effect$dConsole.log("Checking 'Left Identity' law for Alignable");
        return () => {
          $1();
          quickCheck$p1(1000)(fb => dictEq.eq(Align0.align(identity)(nil)(fb))($0.map(Data$dThese.That)(fb)))();
          Effect$dConsole.log("Checking 'Right Identity' law for Alignable")();
          return quickCheck$p(1000)(fa => dictEq.eq(Align0.align(identity)(fa)(nil))($0.map(Data$dThese.This)(fa)))();
        };
      };
    };
  };
};
export {checkAlignable, identity};
