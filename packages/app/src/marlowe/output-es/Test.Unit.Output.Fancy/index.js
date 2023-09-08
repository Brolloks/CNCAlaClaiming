import * as $runtime from "../runtime.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Test$dUnit from "../Test.Unit/index.js";
import * as Test$dUnit$dConsole from "../Test.Unit.Console/index.js";
const traverse_ = /* #__PURE__ */ Data$dFoldable.traverse_(Effect.applicativeEffect)(Data$dList$dTypes.foldableList);
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
  if (v1.tag === "Left") {
    const $0 = v1._1;
    return Effect$dAff._liftEffect((() => {
      const $1 = Test$dUnit$dConsole.print(indent$p(v));
      return () => {
        $1();
        Test$dUnit$dConsole.print("→ Suite: ")();
        Test$dUnit$dConsole.printLabel($0)();
        Test$dUnit$dConsole.print("\n")();
      };
    })());
  }
  if (v1.tag === "Right") {
    const $0 = v1._1._1;
    const $1 = v1._1._2;
    return Effect$dAff._bind(Effect$dAff._liftEffect((() => {
      const $2 = Test$dUnit$dConsole.print(indent$p(v));
      return () => {
        $2();
        Test$dUnit$dConsole.savePos();
        Test$dUnit$dConsole.print("→ Running: ")();
        Test$dUnit$dConsole.printLabel($0)();
        return Test$dUnit$dConsole.restorePos();
      };
    })()))(() => Effect$dAff._bind(Effect$dAff.try($1))(result => Effect$dAff._map(v$1 => {})((() => {
      if (result.tag === "Right") {
        return Effect$dAff._liftEffect(() => {
          Test$dUnit$dConsole.eraseLine();
          Test$dUnit$dConsole.printPass("✓ Passed: ")();
          Test$dUnit$dConsole.printLabel($0)();
          return Test$dUnit$dConsole.print("\n")();
        });
      }
      if (result.tag === "Left") {
        const $2 = result._1;
        return Effect$dAff._liftEffect(() => {
          Test$dUnit$dConsole.eraseLine();
          Test$dUnit$dConsole.printFail("☠ Failed: ")();
          Test$dUnit$dConsole.printLabel($0)();
          Test$dUnit$dConsole.print(" because ")();
          Test$dUnit$dConsole.printFail(Effect$dException.message($2))();
          return Test$dUnit$dConsole.print("\n")();
        });
      }
      $runtime.fail();
    })())));
  }
  $runtime.fail();
})(tst);
const printErrors = tests => skCount => {
  const printHeader = level => path => {
    if (path.tag === "Nil") { return Test$dUnit$dConsole.print(level === 0 ? "" : "  " + indent(level - 1 | 0)); }
    if (path.tag === "Cons") {
      const $0 = path._2;
      const $1 = Test$dUnit$dConsole.print(level === 0 ? "In \"" + path._1 + "\":\n" : "  " + indent(level - 1 | 0) + "In \"" + path._1 + "\":\n");
      return () => {
        $1();
        return printHeader(level + 1 | 0)($0)();
      };
    }
    $runtime.fail();
  };
  const list = traverse_(v => {
    const $0 = v._2;
    const $1 = printHeader(0)(v._1);
    return () => {
      $1();
      const $2 = Test$dUnit$dConsole.printFail(Effect$dException.message($0));
      const $3 = Effect$dException.stack($0);
      if ($3.tag === "Nothing") {
        $2();
      } else if ($3.tag === "Just") {
        Test$dUnit$dConsole.printFail($3._1)();
      } else {
        $runtime.fail();
      }
      Test$dUnit$dConsole.print("\n")();
      return Test$dUnit$dConsole.print("\n")();
    };
  });
  return Effect$dAff._bind(Test$dUnit.collectResults(tests))(results => {
    const skMsg = (() => {
      if (skCount === 0) { return ""; }
      if (skCount === 1) { return " (1 test skipped)"; }
      return " (" + Data$dShow.showIntImpl(skCount) + " tests skipped)";
    })();
    const errors = Test$dUnit.keepErrors(results);
    return Effect$dAff._liftEffect((() => {
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
        return Test$dUnit$dConsole.printPass("\nAll " + Data$dShow.showIntImpl((() => {
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
        })()) + " tests passed" + skMsg + "! 🎉\n");
      }
      if (v === 1) {
        const $0 = Test$dUnit$dConsole.printFail("\n1 test failed" + skMsg + ":\n\n");
        return () => {
          $0();
          return list(errors)();
        };
      }
      const $0 = Test$dUnit$dConsole.printFail("\n" + Data$dShow.showIntImpl(v) + " tests failed" + skMsg + ":\n\n");
      return () => {
        $0();
        return list(errors)();
      };
    })());
  });
};
const runTest = suite => Effect$dAff._bind(printLive(suite))(tests => Effect$dAff._bind(printErrors(tests)(Test$dUnit.countSkippedTests(suite)))(() => Effect$dAff._pure(tests)));
export {indent, indent$p, printErrors, printLive, runTest, traverse_};
