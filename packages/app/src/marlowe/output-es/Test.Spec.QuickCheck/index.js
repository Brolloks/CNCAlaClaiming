import * as $runtime from "../runtime.js";
import * as Data$dList from "../Data.List/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Random$dLCG from "../Random.LCG/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
const getErrorMessage = v => {
  if (v.tag === "Failed") { return Data$dMaybe.$Maybe("Just", v._1); }
  return Data$dMaybe.Nothing;
};
const quickCheckPure = dictTestable => seed => n => prop => {
  const msgs = Data$dList.mapMaybe(getErrorMessage)(Data$dList$dTypes.listMap(Data$dTuple.snd)(Test$dQuickCheck.quickCheckPure$p(dictTestable)(seed)(n)(prop)));
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
      return go(0)(msgs) > 0;
    })()
  ) {
    return Effect$dAff._throwError(Effect$dException.error((() => {
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
            go$a0 = b.init ? {init: false, acc: v._1} : {init: false, acc: b.acc + "\n  " + v._1};
            go$a1 = v._2;
            continue;
          }
          $runtime.fail();
        }
        return go$r;
      };
      return go({init: true, acc: ""})(msgs).acc;
    })()));
  }
  return Effect$dAff._pure();
};
const quickCheck$p = dictTestable => n => prop => Effect$dAff._bind(Effect$dAff._liftEffect(Random$dLCG.randomSeed))(seed => quickCheckPure(dictTestable)(seed)(n)(prop));
const quickCheck = dictTestable => quickCheck$p(dictTestable)(100);
export {getErrorMessage, quickCheck, quickCheck$p, quickCheckPure};
