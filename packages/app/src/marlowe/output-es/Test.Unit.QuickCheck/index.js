import * as $runtime from "../runtime.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Random$dLCG from "../Random.LCG/index.js";
import * as Test$dQuickCheck from "../Test.QuickCheck/index.js";
import * as Test$dUnit from "../Test.Unit/index.js";
const quickCheck$p = dictTestable => tries => prop => Effect$dAff._bind(Effect$dAff._liftEffect(Random$dLCG.randomSeed))(seed => {
  const results = Data$dList$dTypes.listMap(Data$dTuple.snd)(Test$dQuickCheck.quickCheckPure$p(dictTestable)(seed)(tries)(prop));
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
        go$a0 = v._1.tag === "Success" ? b + 1 | 0 : b;
        go$a1 = v._2;
        continue;
      }
      $runtime.fail();
    }
    return go$r;
  };
  const wins = go(0)(results);
  const findErr = findErr$a0$copy => {
    let findErr$a0 = findErr$a0$copy, findErr$c = true, findErr$r;
    while (findErr$c) {
      const v = findErr$a0;
      if (v.tag === "Nil") {
        findErr$c = false;
        findErr$r = Data$dMaybe.Nothing;
        continue;
      }
      if (v.tag === "Cons") {
        if (v._1.tag === "Failed") {
          findErr$c = false;
          findErr$r = Data$dMaybe.$Maybe("Just", v._1._1);
          continue;
        }
        findErr$a0 = v._2;
        continue;
      }
      $runtime.fail();
    }
    return findErr$r;
  };
  const v = findErr(results);
  if (v.tag === "Nothing") { return Test$dUnit.success; }
  if (v.tag === "Just") {
    return Effect$dAff._throwError(Effect$dException.error(Data$dShow.showIntImpl(tries - wins | 0) + "/" + Data$dShow.showIntImpl(tries) + " tests failed: " + v._1));
  }
  $runtime.fail();
});
const quickCheck = dictTestable => quickCheck$p(dictTestable)(100);
export {quickCheck, quickCheck$p};
