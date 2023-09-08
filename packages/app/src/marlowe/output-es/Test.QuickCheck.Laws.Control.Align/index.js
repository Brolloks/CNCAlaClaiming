import * as $runtime from "../runtime.js";
import * as Data$dThese from "../Data.These/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
import * as Test$dQuickCheck$dArbitrary from "../Test.QuickCheck.Arbitrary/index.js";
import * as Test$dQuickCheck$dGen from "../Test.QuickCheck.Gen/index.js";
const identity = x => x;
const testableFunction = /* #__PURE__ */ Test$dQuickCheck.testableFunction({
  arbitrary: /* #__PURE__ */ Test$dQuickCheck$dGen.repeatable(a => Test$dQuickCheck$dArbitrary.coarbOrdering.coarbitrary(a)(Test$dQuickCheck$dArbitrary.arbOrdering.arbitrary))
})(/* #__PURE__ */ Test$dQuickCheck.testableFunction({
  arbitrary: /* #__PURE__ */ Test$dQuickCheck$dGen.repeatable(a => Test$dQuickCheck$dArbitrary.coarbOrdering.coarbitrary(a)(Test$dQuickCheck$dArbitrary.arbOrdering.arbitrary))
})(Test$dQuickCheck.testableBoolean));
const checkAlign = dictAlign => {
  const $0 = dictAlign.Functor0();
  return dictArbitrary => {
    const testableFunction1 = Test$dQuickCheck.testableFunction(dictArbitrary);
    const quickCheck$p = Test$dQuickCheck.quickCheck$p(testableFunction1(Test$dQuickCheck.testableBoolean));
    return dictArbitrary1 => {
      const testableFunction2 = Test$dQuickCheck.testableFunction(dictArbitrary1);
      const quickCheck$p1 = Test$dQuickCheck.quickCheck$p(testableFunction1(testableFunction2(Test$dQuickCheck.testableBoolean)));
      const quickCheck$p2 = Test$dQuickCheck.quickCheck$p(testableFunction1(testableFunction2(testableFunction)));
      return dictArbitrary2 => {
        const quickCheck$p3 = Test$dQuickCheck.quickCheck$p(testableFunction1(testableFunction2(Test$dQuickCheck.testableFunction(dictArbitrary2)(Test$dQuickCheck.testableBoolean))));
        return dictEq => dictEq1 => dictEq2 => dictEq3 => v => {
          const $1 = Effect$dConsole.log("Checking 'Idempotency' law for Align");
          return () => {
            $1();
            quickCheck$p(1000)(fa => dictEq.eq(dictAlign.align(identity)(fa)(fa))($0.map(x => Data$dThese.$These("Both", x, x))(fa)))();
            Effect$dConsole.log("Checking 'Commutativity' law for Align")();
            quickCheck$p1(1000)(fa => fb => dictEq1.eq(dictAlign.align(identity)(fa)(fb))($0.map(Data$dThese.swap)(dictAlign.align(identity)(fb)(fa))))();
            Effect$dConsole.log("Checking 'Associativity' law for Align")();
            quickCheck$p3(1000)(fa => fb => fc => dictEq3.eq(dictAlign.align(identity)(fa)(dictAlign.align(identity)(fb)(fc)))($0.map(Data$dThese.assoc)(dictAlign.align(identity)(dictAlign.align(identity)(fa)(fb))(fc))))();
            Effect$dConsole.log("Checking 'Functoriality' law for Align")();
            return quickCheck$p2(1000)(a => b => f => g => dictEq2.eq(dictAlign.align(identity)($0.map(f)(a))($0.map(g)(b)))($0.map(v2 => {
              if (v2.tag === "This") { return Data$dThese.$These("This", f(v2._1)); }
              if (v2.tag === "That") { return Data$dThese.$These("That", g(v2._1)); }
              if (v2.tag === "Both") { return Data$dThese.$These("Both", f(v2._1), g(v2._2)); }
              $runtime.fail();
            })(dictAlign.align(identity)(a)(b))))();
          };
        };
      };
    };
  };
};
export {checkAlign, identity, testableFunction};
