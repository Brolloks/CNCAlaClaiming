import * as $runtime from "../runtime.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Test$dUnit from "../Test.Unit/index.js";
import * as Test$dUnit$dConsole from "../Test.Unit.Console/index.js";
import * as Test$dUnit$dOutput$dFancy from "../Test.Unit.Output.Fancy/index.js";
import * as Test$dUnit$dOutput$dSimple from "../Test.Unit.Output.Simple/index.js";
import * as Test$dUnit$dOutput$dTAP from "../Test.Unit.Output.TAP/index.js";
import {exit} from "./foreign.js";
const runTestWith = runner => suite => Effect$dAff._bind(Effect$dAff._bind(runner(Test$dUnit.filterTests(suite)))(Test$dUnit.collectResults))(results => {
  if (
    (() => {
      const go = go$a0$copy => go$a1$copy => {
        let go$a0 = go$a0$copy, go$a1 = go$a1$copy, go$c = true, go$r;
        while (go$c) {
          const b = go$a0, v = go$a1;
          if (v.tag === "Nil") {
            go$c = false;
            go$r = b;
            continue;
          }
          if (v.tag === "Cons") {
            go$a0 = b + 1 | 0;
            go$a1 = v._2;
            continue;
          }
          $runtime.fail();
        }
        return go$r;
      };
      return go(0)(Test$dUnit.keepErrors(results)) > 0;
    })()
  ) {
    return Effect$dAff._liftEffect(exit(1));
  }
  return Effect$dAff._pure();
});
const run = e => {
  const $0 = Effect$dAff.runAff(v2 => {
    if (v2.tag === "Left") { return exit(1); }
    if (v2.tag === "Right") { return () => {}; }
    $runtime.fail();
  })(e);
  return () => {$0();};
};
const runTest = suite => run(runTestWith((() => {
  if (Test$dUnit$dOutput$dTAP.requested) { return Test$dUnit$dOutput$dTAP.runTest; }
  if (Test$dUnit$dConsole.hasStderr && Test$dUnit$dConsole.hasColours) { return Test$dUnit$dOutput$dFancy.runTest; }
  return Test$dUnit$dOutput$dSimple.runTest;
})())(suite));
export {run, runTest, runTestWith};
export * from "./foreign.js";
