import * as $runtime from "../runtime.js";
import * as Control$dMonad$dRec$dClass from "../Control.Monad.Rec.Class/index.js";
import * as Data$dBigInt from "../Data.BigInt/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Language$dMarlowe$dCore$dV1$dSemantics$dTypes from "../Language.Marlowe.Core.V1.Semantics.Types/index.js";
const fix = dictEq => f => {
  const go = go$a0$copy => {
    let go$a0 = go$a0$copy, go$c = true, go$r;
    while (go$c) {
      const v = go$a0;
      if (v.tag === "Loop") {
        go$a0 = (() => {
          const result = f(v._1);
          if (dictEq.eq(result)(v._1)) { return Control$dMonad$dRec$dClass.$Step("Done", v._1); }
          return Control$dMonad$dRec$dClass.$Step("Loop", result);
        })();
        continue;
      }
      if (v.tag === "Done") {
        go$c = false;
        go$r = v._1;
        continue;
      }
      $runtime.fail();
    }
    return go$r;
  };
  return x => go((() => {
    const result = f(x);
    if (dictEq.eq(result)(x)) { return Control$dMonad$dRec$dClass.$Step("Done", x); }
    return Control$dMonad$dRec$dClass.$Step("Loop", result);
  })());
};
const fix1 = f => {
  const go = go$a0$copy => {
    let go$a0 = go$a0$copy, go$c = true, go$r;
    while (go$c) {
      const v = go$a0;
      if (v.tag === "Loop") {
        go$a0 = (() => {
          const result = f(v._1);
          if (Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqValue.eq(result)(v._1)) { return Control$dMonad$dRec$dClass.$Step("Done", v._1); }
          return Control$dMonad$dRec$dClass.$Step("Loop", result);
        })();
        continue;
      }
      if (v.tag === "Done") {
        go$c = false;
        go$r = v._1;
        continue;
      }
      $runtime.fail();
    }
    return go$r;
  };
  return x => go((() => {
    const result = f(x);
    if (Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqValue.eq(result)(x)) { return Control$dMonad$dRec$dClass.$Step("Done", x); }
    return Control$dMonad$dRec$dClass.$Step("Loop", result);
  })());
};
const fix2 = f => {
  const go = go$a0$copy => {
    let go$a0 = go$a0$copy, go$c = true, go$r;
    while (go$c) {
      const v = go$a0;
      if (v.tag === "Loop") {
        go$a0 = (() => {
          const result = f(v._1);
          if (Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqObservation.eq(result)(v._1)) { return Control$dMonad$dRec$dClass.$Step("Done", v._1); }
          return Control$dMonad$dRec$dClass.$Step("Loop", result);
        })();
        continue;
      }
      if (v.tag === "Done") {
        go$c = false;
        go$r = v._1;
        continue;
      }
      $runtime.fail();
    }
    return go$r;
  };
  return x => go((() => {
    const result = f(x);
    if (Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqObservation.eq(result)(x)) { return Control$dMonad$dRec$dClass.$Step("Done", x); }
    return Control$dMonad$dRec$dClass.$Step("Loop", result);
  })());
};
const fix3 = f => {
  const go = go$a0$copy => {
    let go$a0 = go$a0$copy, go$c = true, go$r;
    while (go$c) {
      const v = go$a0;
      if (v.tag === "Loop") {
        go$a0 = (() => {
          const result = f(v._1);
          if (Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqContract.eq(result)(v._1)) { return Control$dMonad$dRec$dClass.$Step("Done", v._1); }
          return Control$dMonad$dRec$dClass.$Step("Loop", result);
        })();
        continue;
      }
      if (v.tag === "Done") {
        go$c = false;
        go$r = v._1;
        continue;
      }
      $runtime.fail();
    }
    return go$r;
  };
  return x => go((() => {
    const result = f(x);
    if (Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqContract.eq(result)(x)) { return Control$dMonad$dRec$dClass.$Step("Done", x); }
    return Control$dMonad$dRec$dClass.$Step("Loop", result);
  })());
};
const fix4 = f => {
  const go = go$a0$copy => {
    let go$a0 = go$a0$copy, go$c = true, go$r;
    while (go$c) {
      const v = go$a0;
      if (v.tag === "Loop") {
        go$a0 = (() => {
          const result = f(v._1);
          if (Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqCase.eq(result)(v._1)) { return Control$dMonad$dRec$dClass.$Step("Done", v._1); }
          return Control$dMonad$dRec$dClass.$Step("Loop", result);
        })();
        continue;
      }
      if (v.tag === "Done") {
        go$c = false;
        go$r = v._1;
        continue;
      }
      $runtime.fail();
    }
    return go$r;
  };
  return x => go((() => {
    const result = f(x);
    if (Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqCase.eq(result)(x)) { return Control$dMonad$dRec$dClass.$Step("Done", x); }
    return Control$dMonad$dRec$dClass.$Step("Loop", result);
  })());
};
const rewriteValue = v => {
  const loop = v1 => {
    if (v1.tag === "Constant") { return v1; }
    if (v1.tag === "TimeIntervalStart") { return v1; }
    if (v1.tag === "TimeIntervalEnd") { return v1; }
    if (v1.tag === "UseValue") {
      const $0 = Data$dMap$dInternal.lookup(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordValueId)(v1._1)(v.boundValues);
      if ($0.tag === "Nothing") { return v1; }
      if ($0.tag === "Just") { return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("Constant", $0._1); }
      $runtime.fail();
    }
    if (v1.tag === "ChoiceValue") {
      const $0 = Data$dMap$dInternal.lookup(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordChoiceId)(v1._1)(v.choices);
      if ($0.tag === "Nothing") { return v1; }
      if ($0.tag === "Just") { return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("Constant", $0._1); }
      $runtime.fail();
    }
    if (v1.tag === "AvailableMoney") {
      const $0 = Data$dMap$dInternal.lookup(Data$dTuple.ordTuple(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordToken))(Data$dTuple.$Tuple(
        v1._1,
        v1._2
      ))(v.accounts);
      if ($0.tag === "Nothing") { return v1; }
      if ($0.tag === "Just") { return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("Constant", $0._1); }
      $runtime.fail();
    }
    if (v1.tag === "AddValue") {
      if (v1._1.tag === "Constant" && v1._2.tag === "Constant") { return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("Constant", Data$dBigInt.biAdd(v1._1._1)(v1._2._1)); }
      return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("AddValue", loop(v1._1), loop(v1._2));
    }
    if (v1.tag === "SubValue") {
      if (v1._1.tag === "Constant" && v1._2.tag === "Constant") { return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("Constant", Data$dBigInt.biSub(v1._1._1)(v1._2._1)); }
      return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("SubValue", loop(v1._1), loop(v1._2));
    }
    if (v1.tag === "MulValue") {
      if (v1._1.tag === "Constant" && v1._2.tag === "Constant") { return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("Constant", Data$dBigInt.biMul(v1._1._1)(v1._2._1)); }
      return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("MulValue", loop(v1._1), loop(v1._2));
    }
    if (v1.tag === "DivValue") {
      if (v1._1.tag === "Constant" && v1._2.tag === "Constant") {
        return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value(
          "Constant",
          Data$dBigInt.biDiv(Data$dBigInt.biSub(v1._1._1)(Data$dBigInt.euclideanRingBigInt.mod(v1._1._1)(v1._2._1)))(v1._2._1)
        );
      }
      return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("DivValue", loop(v1._1), loop(v1._2));
    }
    if (v1.tag === "NegValue") {
      if (v1._1.tag === "Constant") { return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("Constant", Data$dBigInt.biSub(Data$dBigInt.semiringBigInt.zero)(v1._1._1)); }
      return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("NegValue", loop(v1._1));
    }
    if (v1.tag === "Cond") {
      if (v1._1.tag === "TrueObs") { return loop(v1._2); }
      if (v1._1.tag === "FalseObs") { return loop(v1._3); }
      return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("Cond", rewriteObservation(v)(v1._1), loop(v1._2), loop(v1._3));
    }
    $runtime.fail();
  };
  return fix1(loop);
};
const rewriteObservation = v => {
  const loop = v1 => {
    if (v1.tag === "AndObs") {
      if (v1._1.tag === "TrueObs") { return loop(v1._2); }
      if (v1._1.tag === "FalseObs") { return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.FalseObs; }
      return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Observation("AndObs", loop(v1._1), loop(v1._2));
    }
    if (v1.tag === "OrObs") {
      if (v1._1.tag === "FalseObs") { return loop(v1._2); }
      if (v1._1.tag === "TrueObs") { return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.TrueObs; }
      return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Observation("OrObs", loop(v1._1), loop(v1._2));
    }
    if (v1.tag === "NotObs") {
      if (v1._1.tag === "TrueObs") { return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.FalseObs; }
      if (v1._1.tag === "FalseObs") { return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.TrueObs; }
      return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Observation("NotObs", loop(v1._1));
    }
    if (v1.tag === "ChoseSomething") {
      if (
        (() => {
          const $0 = Data$dMap$dInternal.lookup(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordChoiceId)(v1._1)(v.choices);
          if ($0.tag === "Nothing") { return false; }
          if ($0.tag === "Just") { return true; }
          $runtime.fail();
        })()
      ) {
        return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.TrueObs;
      }
      return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.FalseObs;
    }
    if (v1.tag === "ValueGE") {
      if (v1._1.tag === "Constant" && v1._2.tag === "Constant") {
        if (Data$dBigInt.ordBigInt.compare(v1._1._1)(v1._2._1) !== "LT") { return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.TrueObs; }
        return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.FalseObs;
      }
      return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Observation("ValueGE", rewriteValue(v)(v1._1), rewriteValue(v)(v1._2));
    }
    if (v1.tag === "ValueGT") {
      if (v1._1.tag === "Constant" && v1._2.tag === "Constant") {
        if (Data$dBigInt.ordBigInt.compare(v1._1._1)(v1._2._1) === "GT") { return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.TrueObs; }
        return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.FalseObs;
      }
      return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Observation("ValueGT", rewriteValue(v)(v1._1), rewriteValue(v)(v1._2));
    }
    if (v1.tag === "ValueLT") {
      if (v1._1.tag === "Constant" && v1._2.tag === "Constant") {
        if (Data$dBigInt.ordBigInt.compare(v1._1._1)(v1._2._1) === "LT") { return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.TrueObs; }
        return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.FalseObs;
      }
      return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Observation("ValueLT", rewriteValue(v)(v1._1), rewriteValue(v)(v1._2));
    }
    if (v1.tag === "ValueLE") {
      if (v1._1.tag === "Constant" && v1._2.tag === "Constant") {
        if (Data$dBigInt.ordBigInt.compare(v1._1._1)(v1._2._1) !== "GT") { return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.TrueObs; }
        return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.FalseObs;
      }
      return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Observation("ValueLE", rewriteValue(v)(v1._1), rewriteValue(v)(v1._2));
    }
    if (v1.tag === "ValueEQ") {
      if (v1._1.tag === "Constant" && v1._2.tag === "Constant") {
        if (Data$dBigInt.biEquals(v1._1._1)(v1._2._1)) { return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.TrueObs; }
        return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.FalseObs;
      }
      return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Observation("ValueEQ", rewriteValue(v)(v1._1), rewriteValue(v)(v1._2));
    }
    if (v1.tag === "TrueObs") { return v1; }
    if (v1.tag === "FalseObs") { return v1; }
    $runtime.fail();
  };
  return fix2(loop);
};
const rewriteContract = v => {
  const loop = v1 => {
    if (v1.tag === "Close") { return v1; }
    if (v1.tag === "Assert") { return v1; }
    if (v1.tag === "Pay") { return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Contract("Pay", v1._1, v1._2, v1._3, rewriteValue(v)(v1._4), loop(v1._5)); }
    if (v1.tag === "If") {
      if (v1._1.tag === "TrueObs") { return loop(v1._2); }
      if (v1._1.tag === "FalseObs") { return loop(v1._3); }
      return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Contract("If", rewriteObservation(v)(v1._1), loop(v1._2), loop(v1._3));
    }
    if (v1.tag === "When") { return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Contract("When", Data$dFunctor.arrayMap(rewriteCase(v))(v1._1), v1._2, loop(v1._3)); }
    if (v1.tag === "Let") {
      if (v1._2.tag === "Constant") {
        return rewriteContract({
          accounts: v.accounts,
          choices: v.choices,
          boundValues: Data$dMap$dInternal.insert(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordValueId)(v1._1)(v1._2._1)(v.boundValues),
          minTime: v.minTime
        })(v1._3);
      }
      return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Contract("Let", v1._1, rewriteValue(v)(v1._2), loop(v1._3));
    }
    $runtime.fail();
  };
  return fix3(loop);
};
const rewriteCase = state => fix4(v => {
  if (v.tag === "Case") { return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Case("Case", v._1, rewriteContract(state)(v._2)); }
  if (v.tag === "MerkleizedCase") { return v; }
  $runtime.fail();
});
export {fix, fix1, fix2, fix3, fix4, rewriteCase, rewriteContract, rewriteObservation, rewriteValue};
