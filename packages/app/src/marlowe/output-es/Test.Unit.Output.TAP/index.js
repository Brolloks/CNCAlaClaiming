import * as $runtime from "../runtime.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dList from "../Data.List/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Data$dUnfoldable from "../Data.Unfoldable/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Test$dUnit from "../Test.Unit/index.js";
import {requested} from "./foreign.js";
const toUnfoldable = /* #__PURE__ */ Data$dList.toUnfoldable(Data$dUnfoldable.unfoldableArray);
const sequence_ = /* #__PURE__ */ Data$dFoldable.traverse_(Effect$dAff.applicativeAff)(Data$dList$dTypes.foldableList)(Data$dFoldable.identity);
const printStack = err => {
  const v = Effect$dException.stack(err);
  if (v.tag === "Nothing") { return Effect$dAff._pure(); }
  if (v.tag === "Just") {
    const $0 = v._1;
    return Effect$dAff._bind(Effect$dAff._liftEffect(Effect$dConsole.log("  stack: |-")))(() => Effect$dAff._liftEffect(Effect$dConsole.log(Data$dString$dCommon.joinWith("\n")(Data$dFunctor.arrayMap($1 => "    " + $1)(Data$dString$dCommon.split("\n")($0))))));
  }
  $runtime.fail();
};
const runTest = suite => Effect$dAff._bind(Test$dUnit.collectTests(suite))(tests => Effect$dAff._bind(Effect$dAff._liftEffect(Effect$dConsole.log("1.." + Data$dShow.showIntImpl((() => {
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
  return go(0)(tests);
})()))))(() => Effect$dAff._bind(sequence_((() => {
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
        go$a0 = (() => {
          const $0 = b._1;
          return Data$dTuple.$Tuple(
            $0 + 1 | 0,
            (() => {
              const label = Data$dString$dCommon.joinWith(" / ")(toUnfoldable(v._1._1));
              return Data$dList$dTypes.foldableList.foldr(Data$dList$dTypes.Cons)(Data$dList$dTypes.$List(
                "Cons",
                Effect$dAff._bind(Effect$dAff.try(v._1._2))(result => {
                  if (result.tag === "Left") {
                    const $1 = result._1;
                    return Effect$dAff._bind(Effect$dAff._liftEffect(Effect$dConsole.log("not ok " + Data$dShow.showIntImpl($0) + " " + label)))(() => Effect$dAff._bind(Effect$dAff._liftEffect(Effect$dConsole.log("  ---")))(() => Effect$dAff._bind(Effect$dAff._liftEffect(Effect$dConsole.log("  message: " + Effect$dException.message($1))))(() => Effect$dAff._bind(printStack($1))(() => Effect$dAff._liftEffect(Effect$dConsole.log("  ..."))))));
                  }
                  if (result.tag === "Right") { return Effect$dAff._liftEffect(Effect$dConsole.log("ok " + Data$dShow.showIntImpl($0) + " " + label)); }
                  $runtime.fail();
                }),
                Data$dList$dTypes.Nil
              ))(b._2);
            })()
          );
        })();
        go$a1 = v._2;
        continue;
      }
      $runtime.fail();
    }
    return go$r;
  };
  return go(Data$dTuple.$Tuple(1, Data$dList$dTypes.Nil))(tests)._2;
})()))(() => Effect$dAff._pure(tests))));
export {printStack, runTest, sequence_, toUnfoldable};
export * from "./foreign.js";
