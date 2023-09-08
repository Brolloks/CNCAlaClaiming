import * as $runtime from "../runtime.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Test$dUnit from "../Test.Unit/index.js";
const traverse_ = /* #__PURE__ */ Data$dFoldable.traverse_(Effect$dAff.applicativeAff)(Data$dList$dTypes.foldableList);
const indent = v => {
  if (v === 0) { return ""; }
  return "  " + indent(v - 1 | 0);
};
const indent$p = x => {
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
  const $0 = go(0)(x);
  if ($0 === 0) { return ""; }
  return "  " + indent($0 - 1 | 0);
};
const printLive = tst => Test$dUnit.walkSuite(v => v1 => {
  if (v1.tag === "Left") { return Effect$dAff._bind(Effect$dAff._liftEffect(Effect$dConsole.log(indent$p(v) + "- Suite: " + v1._1)))(() => Effect$dAff._pure()); }
  if (v1.tag === "Right") {
    const $0 = v1._1._1;
    return Effect$dAff._bind(Effect$dAff.try(v1._1._2))(result => Effect$dAff._bind((() => {
      if (result.tag === "Right") { return Effect$dAff._liftEffect(Effect$dConsole.log(indent$p(v) + "✓ Passed: " + $0)); }
      if (result.tag === "Left") { return Effect$dAff._liftEffect(Effect$dConsole.log(indent$p(v) + "☠ Failed: " + $0 + " because " + Effect$dException.message(result._1))); }
      $runtime.fail();
    })())(() => Effect$dAff._pure()));
  }
  $runtime.fail();
})(tst);
const printErrors = tests => skCount => {
  const printHeader = level => path => {
    if (path.tag === "Nil") { return Effect$dAff._pure(); }
    if (path.tag === "Cons") {
      const $0 = path._2;
      return Effect$dAff._bind(Effect$dAff._liftEffect(Effect$dConsole.log(level === 0 ? "In \"" + path._1 + "\":" : "  " + indent(level - 1 | 0) + "In \"" + path._1 + "\":")))(() => printHeader(level + 1 | 0)($0));
    }
    $runtime.fail();
  };
  const list = traverse_(v => {
    const $0 = v._2;
    return Effect$dAff._bind(printHeader(0)(v._1))(() => Effect$dAff._bind(Effect$dAff._liftEffect(Effect$dConsole.log((() => {
      const $1 = Effect$dException.message($0);
      const $2 = Effect$dException.stack($0);
      if ($2.tag === "Nothing") { return "Error: " + $1; }
      if ($2.tag === "Just") { return "Error: " + $2._1; }
      $runtime.fail();
    })())))(() => Effect$dAff._liftEffect(Effect$dConsole.log(""))));
  });
  return Effect$dAff._bind(Test$dUnit.collectResults(tests))(results => {
    const skMsg = (() => {
      if (skCount === 0) { return ""; }
      if (skCount === 1) { return " (1 test skipped)"; }
      return " (" + Data$dShow.showIntImpl(skCount) + " tests skipped)";
    })();
    const errors = Test$dUnit.keepErrors(results);
    return Effect$dAff._bind(Effect$dAff._liftEffect(Effect$dConsole.log("")))(() => {
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
      const v = go(0)(errors);
      if (v === 0) {
        return Effect$dAff._liftEffect(Effect$dConsole.log("All " + Data$dShow.showIntImpl((() => {
          const go$1 = go$1$a0$copy => go$1$a1$copy => {
            let go$1$a0 = go$1$a0$copy, go$1$a1 = go$1$a1$copy, go$1$c = true, go$1$r;
            while (go$1$c) {
              const b = go$1$a0, v$1 = go$1$a1;
              if (v$1.tag === "Nil") {
                go$1$c = false;
                go$1$r = b;
                continue;
              }
              if (v$1.tag === "Cons") {
                go$1$a0 = b + 1 | 0;
                go$1$a1 = v$1._2;
                continue;
              }
              $runtime.fail();
            }
            return go$1$r;
          };
          return go$1(0)(results);
        })()) + " tests passed" + skMsg + "!"));
      }
      if (v === 1) { return Effect$dAff._bind(Effect$dAff._liftEffect(Effect$dConsole.log("1 test failed" + skMsg + ":\n")))(() => list(errors)); }
      return Effect$dAff._bind(Effect$dAff._liftEffect(Effect$dConsole.log(Data$dShow.showIntImpl(v) + " tests failed" + skMsg + ":\n")))(() => list(errors));
    });
  });
};
const runTest = suite => Effect$dAff._bind(printLive(suite))(tests => Effect$dAff._bind(printErrors(tests)(Test$dUnit.countSkippedTests(suite)))(() => Effect$dAff._pure(tests)));
export {indent, indent$p, printErrors, printLive, runTest, traverse_};
