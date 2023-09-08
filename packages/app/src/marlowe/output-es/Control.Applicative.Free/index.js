import * as $runtime from "../runtime.js";
import * as Data$dConst from "../Data.Const/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dNonEmpty from "../Data.NonEmpty/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
const $FreeAp = (tag, _1, _2) => ({tag, _1, _2});
const identity = x => x;
const Pure = value0 => $FreeAp("Pure", value0);
const Lift = value0 => $FreeAp("Lift", value0);
const Ap = value0 => value1 => $FreeAp("Ap", value0, value1);
const liftFreeAp = Lift;
const goLeft = goLeft$a0$copy => goLeft$a1$copy => goLeft$a2$copy => goLeft$a3$copy => goLeft$a4$copy => goLeft$a5$copy => {
  let goLeft$a0 = goLeft$a0$copy;
  let goLeft$a1 = goLeft$a1$copy;
  let goLeft$a2 = goLeft$a2$copy;
  let goLeft$a3 = goLeft$a3$copy;
  let goLeft$a4 = goLeft$a4$copy;
  let goLeft$a5 = goLeft$a5$copy;
  let goLeft$c = true;
  let goLeft$r;
  while (goLeft$c) {
    const dictApplicative = goLeft$a0, fStack = goLeft$a1, valStack = goLeft$a2, nat = goLeft$a3, func = goLeft$a4, count = goLeft$a5;
    if (func.tag === "Pure") {
      goLeft$c = false;
      goLeft$r = Data$dTuple.$Tuple(Data$dList$dTypes.$List("Cons", {func: dictApplicative.pure(func._1), count}, fStack), valStack);
      continue;
    }
    if (func.tag === "Lift") {
      goLeft$c = false;
      goLeft$r = Data$dTuple.$Tuple(Data$dList$dTypes.$List("Cons", {func: nat(func._1), count}, fStack), valStack);
      continue;
    }
    if (func.tag === "Ap") {
      goLeft$a0 = dictApplicative;
      goLeft$a1 = fStack;
      goLeft$a2 = Data$dNonEmpty.$NonEmpty(func._2, Data$dList$dTypes.$List("Cons", valStack._1, valStack._2));
      goLeft$a3 = nat;
      goLeft$a4 = func._1;
      goLeft$a5 = count + 1 | 0;
      continue;
    }
    $runtime.fail();
  }
  return goLeft$r;
};
const goApply = goApply$a0$copy => goApply$a1$copy => goApply$a2$copy => goApply$a3$copy => {
  let goApply$a0 = goApply$a0$copy, goApply$a1 = goApply$a1$copy, goApply$a2 = goApply$a2$copy, goApply$a3 = goApply$a3$copy, goApply$c = true, goApply$r;
  while (goApply$c) {
    const dictApplicative = goApply$a0, fStack = goApply$a1, vals = goApply$a2, gVal = goApply$a3;
    if (fStack.tag === "Nil") {
      goApply$c = false;
      goApply$r = Data$dEither.$Either("Left", gVal);
      continue;
    }
    if (fStack.tag === "Cons") {
      const gRes = dictApplicative.Apply0().apply(fStack._1.func)(gVal);
      if (fStack._1.count === 1) {
        if (fStack._2.tag === "Nil") {
          goApply$c = false;
          goApply$r = Data$dEither.$Either("Left", gRes);
          continue;
        }
        goApply$a0 = dictApplicative;
        goApply$a1 = fStack._2;
        goApply$a2 = vals;
        goApply$a3 = gRes;
        continue;
      }
      if (vals.tag === "Nil") {
        goApply$c = false;
        goApply$r = Data$dEither.$Either("Left", gRes);
        continue;
      }
      if (vals.tag === "Cons") {
        goApply$c = false;
        goApply$r = Data$dEither.$Either(
          "Right",
          Data$dTuple.$Tuple(Data$dList$dTypes.$List("Cons", {func: gRes, count: fStack._1.count - 1 | 0}, fStack._2), Data$dNonEmpty.$NonEmpty(vals._1, vals._2))
        );
        continue;
      }
    }
    $runtime.fail();
  }
  return goApply$r;
};
const functorFreeAp = {map: f => x => $FreeAp("Ap", $FreeAp("Pure", f), x)};
const foldFreeAp = dictApplicative => nat => z => {
  const go = go$a0$copy => {
    let go$a0 = go$a0$copy, go$c = true, go$r;
    while (go$c) {
      const v = go$a0;
      if (v._2._1.tag === "Pure") {
        const v1 = goApply(dictApplicative)(v._1)(v._2._2)(dictApplicative.pure(v._2._1._1));
        if (v1.tag === "Left") {
          go$c = false;
          go$r = v1._1;
          continue;
        }
        if (v1.tag === "Right") {
          go$a0 = v1._1;
          continue;
        }
        $runtime.fail();
      }
      if (v._2._1.tag === "Lift") {
        const v1 = goApply(dictApplicative)(v._1)(v._2._2)(nat(v._2._1._1));
        if (v1.tag === "Left") {
          go$c = false;
          go$r = v1._1;
          continue;
        }
        if (v1.tag === "Right") {
          go$a0 = v1._1;
          continue;
        }
        $runtime.fail();
      }
      if (v._2._1.tag === "Ap") {
        go$a0 = goLeft(dictApplicative)(v._1)(Data$dNonEmpty.$NonEmpty(v._2._1._2, v._2._2))(nat)(v._2._1._1)(1);
        continue;
      }
      $runtime.fail();
    }
    return go$r;
  };
  return go(Data$dTuple.$Tuple(Data$dList$dTypes.Nil, Data$dNonEmpty.$NonEmpty(z, Data$dList$dTypes.Nil)));
};
const retractFreeAp = dictApplicative => foldFreeAp(dictApplicative)(identity);
const applyFreeAp = {apply: fba => fb => $FreeAp("Ap", fba, fb), Functor0: () => functorFreeAp};
const applicativeFreeAp = {pure: Pure, Apply0: () => applyFreeAp};
const hoistFreeAp = f => foldFreeAp(applicativeFreeAp)(x => $FreeAp("Lift", f(x)));
const analyzeFreeAp = dictMonoid => {
  const foldFreeAp2 = foldFreeAp(Data$dConst.applicativeConst(dictMonoid));
  return k => foldFreeAp2(x => k(x));
};
export {$FreeAp, Ap, Lift, Pure, analyzeFreeAp, applicativeFreeAp, applyFreeAp, foldFreeAp, functorFreeAp, goApply, goLeft, hoistFreeAp, identity, liftFreeAp, retractFreeAp};
