import * as $runtime from "../runtime.js";
import * as Data$dBigInt from "../Data.BigInt/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dLens$dInternal$dForget from "../Data.Lens.Internal.Forget/index.js";
import * as Data$dList from "../Data.List/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNumber from "../Data.Number/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dProfunctor$dStrong from "../Data.Profunctor.Strong/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Language$dMarlowe$dCore$dV1$dSemantics$dTypes from "../Language.Marlowe.Core.V1.Semantics.Types/index.js";
import * as Marlowe$dTime from "../Marlowe.Time/index.js";
const $ApplyAction = (tag, _1, _2) => ({tag, _1, _2});
const ordTuple = /* #__PURE__ */ Data$dTuple.ordTuple(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordToken);
const fromFoldable = /* #__PURE__ */ Data$dMap$dInternal.fromFoldable(ordTuple)(Data$dList$dTypes.foldableList);
const foldMapWithIndex = /* #__PURE__ */ (() => Data$dMap$dInternal.foldableWithIndexMap.foldMapWithIndex(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.monoidAssets))();
const any = /* #__PURE__ */ (() => Data$dFoldable.foldableArray.foldMap((() => {
  const semigroupDisj1 = {append: v => v1 => v || v1};
  return {mempty: false, Semigroup0: () => semigroupDisj1};
})()))();
const min = x => y => {
  const v = Data$dBigInt.ordBigInt.compare(x)(y);
  if (v === "LT") { return x; }
  if (v === "EQ") { return x; }
  if (v === "GT") { return y; }
  $runtime.fail();
};
const max = x => y => {
  const v = Data$dBigInt.ordBigInt.compare(x)(y);
  if (v === "LT") { return y; }
  if (v === "EQ") { return x; }
  if (v === "GT") { return x; }
  $runtime.fail();
};
const _choices = /* #__PURE__ */ Language$dMarlowe$dCore$dV1$dSemantics$dTypes._choices(Data$dProfunctor$dStrong.strongFn);
const fromFoldable1 = /* #__PURE__ */ Data$dFoldable.foldrArray(Data$dList$dTypes.Cons)(Data$dList$dTypes.Nil);
const _timeInterval = /* #__PURE__ */ Language$dMarlowe$dCore$dV1$dSemantics$dTypes._timeInterval(Data$dLens$dInternal$dForget.strongForget);
const _boundValues = /* #__PURE__ */ Language$dMarlowe$dCore$dV1$dSemantics$dTypes._boundValues(Data$dProfunctor$dStrong.strongFn);
const max1 = x => y => {
  const v = Data$dOrd.ordNumber.compare(x)(y);
  if (v === "LT") { return y; }
  if (v === "EQ") { return x; }
  if (v === "GT") { return x; }
  $runtime.fail();
};
const _minTime = /* #__PURE__ */ Language$dMarlowe$dCore$dV1$dSemantics$dTypes._minTime(Data$dProfunctor$dStrong.strongFn);
const AppliedAction = value0 => value1 => $ApplyAction("AppliedAction", value0, value1);
const NotAppliedAction = /* #__PURE__ */ $ApplyAction("NotAppliedAction");
const validInterval = v => v._1 <= v._2;
const updateMoneyInAccount = accId => token => amount => {
  if (Data$dBigInt.ordBigInt.compare(amount)(Data$dBigInt.semiringBigInt.zero) !== "GT") { return Data$dMap$dInternal.delete(ordTuple)(Data$dTuple.$Tuple(accId, token)); }
  return Data$dMap$dInternal.insert(ordTuple)(Data$dTuple.$Tuple(accId, token))(amount);
};
const refundOne = refundOne$a0$copy => {
  let refundOne$a0 = refundOne$a0$copy, refundOne$c = true, refundOne$r;
  while (refundOne$c) {
    const accounts = refundOne$a0;
    const v = Data$dMap$dInternal.toUnfoldable(Data$dList$dTypes.unfoldableList)(accounts);
    if (v.tag === "Nil") {
      refundOne$c = false;
      refundOne$r = Data$dMaybe.Nothing;
      continue;
    }
    if (v.tag === "Cons") {
      if (Data$dBigInt.ordBigInt.compare(v._1._2)(Data$dBigInt.semiringBigInt.zero) === "GT") {
        refundOne$c = false;
        refundOne$r = Data$dMaybe.$Maybe("Just", Data$dTuple.$Tuple(v._1._1._1, Data$dTuple.$Tuple(v._1._1._2, Data$dTuple.$Tuple(v._1._2, fromFoldable(v._2)))));
        continue;
      }
      refundOne$a0 = fromFoldable(v._2);
      continue;
    }
    $runtime.fail();
  }
  return refundOne$r;
};
const moneyInContract = state => foldMapWithIndex(v => {
  const $0 = v._2._1;
  const $1 = v._2._2;
  return balance => Data$dMap$dInternal.$$$Map(
    "Two",
    Data$dMap$dInternal.Leaf,
    $0,
    Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, $1, balance, Data$dMap$dInternal.Leaf),
    Data$dMap$dInternal.Leaf
  );
})(state.accounts);
const moneyInAccount = accId => token => accounts => {
  const $0 = Data$dMap$dInternal.lookup(ordTuple)(Data$dTuple.$Tuple(accId, token))(accounts);
  if ($0.tag === "Nothing") { return Data$dBigInt.semiringBigInt.zero; }
  if ($0.tag === "Just") { return $0._1; }
  $runtime.fail();
};
const makeEnvironment = l => h => ({timeInterval: Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$TimeInterval(l, h)});
const isClose = v => v.tag === "Close";
const inBounds = num => any(v => Data$dBigInt.ordBigInt.compare(num)(v._1) !== "LT" && Data$dBigInt.ordBigInt.compare(num)(v._2) !== "GT");
const getEncompassBound = dictFoldable => dictFunctor => bounds => Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Bound(
  dictFoldable.foldl(min)(Data$dBigInt.fromInt(2147483647))(dictFunctor.map(v => v._1)(bounds)),
  dictFoldable.foldl(max)(Data$dBigInt.fromInt(-2147483648))(dictFunctor.map(v => v._2)(bounds))
);
const getContinuation = v => v1 => {
  if (v.tag === "NormalInput") {
    if (v1.tag === "Case") { return Data$dMaybe.$Maybe("Just", v1._2); }
    return Data$dMaybe.Nothing;
  }
  if (v.tag === "MerkleizedInput" && v1.tag === "MerkleizedCase" && v._2 === v1._2) { return Data$dMaybe.$Maybe("Just", v._3); }
  return Data$dMaybe.Nothing;
};
const genericApplyAction = {
  to: x => {
    if (x.tag === "Inl") { return $ApplyAction("AppliedAction", x._1._1, x._1._2); }
    if (x.tag === "Inr") { return NotAppliedAction; }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "AppliedAction") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, x._2)); }
    if (x.tag === "NotAppliedAction") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments); }
    $runtime.fail();
  }
};
const showApplyAction = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct({
      genericShowArgs: v => [Language$dMarlowe$dCore$dV1$dSemantics$dTypes.showApplyWarning.show(v)]
    })({genericShowArgs: v => [Language$dMarlowe$dCore$dV1$dSemantics$dTypes.genericShow3(v)]}))({reflectSymbol: () => "AppliedAction"});
    const $1 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "NotAppliedAction"});
    return x => {
      if (x.tag === "AppliedAction") { return $0["genericShow'"](Data$dGeneric$dRep.$Product(x._1, x._2)); }
      if (x.tag === "NotAppliedAction") { return $1["genericShow'"](Data$dGeneric$dRep.NoArguments); }
      $runtime.fail();
    };
  })()
};
const evalValue = env => state => value => {
  const $$eval = evalValue(env)(state);
  if (value.tag === "AvailableMoney") { return moneyInAccount(value._1)(value._2)(state.accounts); }
  if (value.tag === "Constant") { return value._1; }
  if (value.tag === "NegValue") { return Data$dBigInt.biSub(Data$dBigInt.semiringBigInt.zero)($$eval(value._1)); }
  if (value.tag === "AddValue") { return Data$dBigInt.biAdd($$eval(value._1))($$eval(value._2)); }
  if (value.tag === "SubValue") { return Data$dBigInt.biSub($$eval(value._1))($$eval(value._2)); }
  if (value.tag === "MulValue") { return Data$dBigInt.biMul($$eval(value._1))($$eval(value._2)); }
  if (value.tag === "DivValue") {
    const n = $$eval(value._1);
    const d = $$eval(value._2);
    if (Data$dBigInt.biEquals(d)(Data$dBigInt.fromInt(0))) { return Data$dBigInt.fromInt(0); }
    return Data$dBigInt.biDiv(n)(d);
  }
  if (value.tag === "ChoiceValue") {
    const $0 = Data$dMap$dInternal.lookup(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordChoiceId)(value._1)(state.choices);
    if ($0.tag === "Nothing") { return Data$dBigInt.semiringBigInt.zero; }
    if ($0.tag === "Just") { return $0._1; }
    $runtime.fail();
  }
  if (value.tag === "TimeIntervalStart") { return Data$dBigInt.fromInt(Data$dInt.unsafeClamp(Data$dNumber.round(env.timeInterval._1))); }
  if (value.tag === "TimeIntervalEnd") { return Data$dBigInt.fromInt(Data$dInt.unsafeClamp(Data$dNumber.round(env.timeInterval._2))); }
  if (value.tag === "UseValue") {
    const $0 = Data$dMap$dInternal.lookup(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordValueId)(value._1)(state.boundValues);
    if ($0.tag === "Nothing") { return Data$dBigInt.semiringBigInt.zero; }
    if ($0.tag === "Just") { return $0._1; }
    $runtime.fail();
  }
  if (value.tag === "Cond") {
    if (evalObservation(env)(state)(value._1)) { return $$eval(value._2); }
    return $$eval(value._3);
  }
  $runtime.fail();
};
const evalObservation = env => state => obs => {
  const evalObs = evalObservation(env)(state);
  if (obs.tag === "AndObs") { return evalObs(obs._1) && evalObs(obs._2); }
  if (obs.tag === "OrObs") { return evalObs(obs._1) || evalObs(obs._2); }
  if (obs.tag === "NotObs") { return !evalObs(obs._1); }
  if (obs.tag === "ChoseSomething") {
    const $0 = Data$dMap$dInternal.lookup(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordChoiceId)(obs._1)(state.choices);
    if ($0.tag === "Nothing") { return false; }
    if ($0.tag === "Just") { return true; }
    $runtime.fail();
  }
  if (obs.tag === "ValueGE") { return Data$dBigInt.ordBigInt.compare(evalValue(env)(state)(obs._1))(evalValue(env)(state)(obs._2)) !== "LT"; }
  if (obs.tag === "ValueGT") { return Data$dBigInt.ordBigInt.compare(evalValue(env)(state)(obs._1))(evalValue(env)(state)(obs._2)) === "GT"; }
  if (obs.tag === "ValueLT") { return Data$dBigInt.ordBigInt.compare(evalValue(env)(state)(obs._1))(evalValue(env)(state)(obs._2)) === "LT"; }
  if (obs.tag === "ValueLE") { return Data$dBigInt.ordBigInt.compare(evalValue(env)(state)(obs._1))(evalValue(env)(state)(obs._2)) !== "GT"; }
  if (obs.tag === "ValueEQ") { return Data$dBigInt.biEquals(evalValue(env)(state)(obs._1))(evalValue(env)(state)(obs._2)); }
  if (obs.tag === "TrueObs") { return true; }
  if (obs.tag === "FalseObs") { return false; }
  $runtime.fail();
};
const eqApplyAction = {
  eq: x => y => {
    if (x.tag === "AppliedAction") {
      return y.tag === "AppliedAction" && Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqApplyWarning.eq(x._1)(y._1) && Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqState.eq(x._2)(y._2);
    }
    return x.tag === "NotAppliedAction" && y.tag === "NotAppliedAction";
  }
};
const emptyState = {accounts: Data$dMap$dInternal.Leaf, choices: Data$dMap$dInternal.Leaf, boundValues: Data$dMap$dInternal.Leaf, minTime: Marlowe$dTime.unixEpoch};
const convertReduceWarnings = v => {
  if (v.tag === "Nil") { return Data$dList$dTypes.Nil; }
  if (v.tag === "Cons") {
    return Data$dList$dTypes.foldableList.foldr(Data$dList$dTypes.Cons)(convertReduceWarnings(v._2))((() => {
      if (v._1.tag === "ReduceNoWarning") { return Data$dList$dTypes.Nil; }
      if (v._1.tag === "ReduceNonPositivePay") {
        return Data$dList$dTypes.$List(
          "Cons",
          Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$TransactionWarning("TransactionNonPositivePay", v._1._1, v._1._2, v._1._3, v._1._4),
          Data$dList$dTypes.Nil
        );
      }
      if (v._1.tag === "ReducePartialPay") {
        return Data$dList$dTypes.$List(
          "Cons",
          Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$TransactionWarning("TransactionPartialPay", v._1._1, v._1._2, v._1._3, v._1._4, v._1._5),
          Data$dList$dTypes.Nil
        );
      }
      if (v._1.tag === "ReduceShadowing") {
        return Data$dList$dTypes.$List(
          "Cons",
          Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$TransactionWarning("TransactionShadowing", v._1._1, v._1._2, v._1._3),
          Data$dList$dTypes.Nil
        );
      }
      if (v._1.tag === "ReduceAssertionFailed") {
        return Data$dList$dTypes.$List("Cons", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.TransactionAssertionFailed, Data$dList$dTypes.Nil);
      }
      $runtime.fail();
    })());
  }
  $runtime.fail();
};
const convertApplyWarning = warn => {
  if (warn.tag === "ApplyNoWarning") { return Data$dList$dTypes.Nil; }
  if (warn.tag === "ApplyNonPositiveDeposit") {
    return Data$dList$dTypes.$List(
      "Cons",
      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$TransactionWarning("TransactionNonPositiveDeposit", warn._1, warn._2, warn._3, warn._4),
      Data$dList$dTypes.Nil
    );
  }
  $runtime.fail();
};
const boundTo = v => v._2;
const boundFrom = v => v._1;
const anyWithin = dictFoldable => {
  const any1 = dictFoldable.foldMap((() => {
    const semigroupDisj1 = {append: v => v1 => v || v1};
    return {mempty: false, Semigroup0: () => semigroupDisj1};
  })());
  return v => any1(v1 => v >= v1._1 && v <= v1._2);
};
const addMoneyToAccount = accId => token => amount => accounts => {
  const newBalance = Data$dBigInt.biAdd(moneyInAccount(accId)(token)(accounts))(amount);
  if (Data$dBigInt.ordBigInt.compare(amount)(Data$dBigInt.semiringBigInt.zero) !== "GT") { return accounts; }
  return updateMoneyInAccount(accId)(token)(newBalance)(accounts);
};
const applyAction = v => v1 => v2 => v3 => {
  if (v2.tag === "IDeposit") {
    if (
      v3.tag === "Deposit" && (v2._1.tag === "Address" ? v3._1.tag === "Address" && v2._1._1 === v3._1._1 : v2._1.tag === "Role" && v3._1.tag === "Role" && v2._1._1 === v3._1._1) && (v2._2.tag === "Address"
        ? v3._2.tag === "Address" && v2._2._1 === v3._2._1
        : v2._2.tag === "Role" && v3._2.tag === "Role" && v2._2._1 === v3._2._1) && Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqToken.eq(v2._3)(v3._3) && Data$dBigInt.biEquals(v2._4)(evalValue(v)(v1)(v3._4))
    ) {
      return $ApplyAction(
        "AppliedAction",
        Data$dBigInt.ordBigInt.compare(v2._4)(Data$dBigInt.semiringBigInt.zero) === "GT"
          ? Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ApplyNoWarning
          : Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$ApplyWarning("ApplyNonPositiveDeposit", v3._2, v3._1, v3._3, v2._4),
        {...v1, accounts: addMoneyToAccount(v2._1)(v2._3)(v2._4)(v1.accounts)}
      );
    }
    return NotAppliedAction;
  }
  if (v2.tag === "IChoice") {
    if (
      v3.tag === "Choice" && v2._1._1 === v3._1._1 && (v2._1._2.tag === "Address"
        ? v3._1._2.tag === "Address" && v2._1._2._1 === v3._1._2._1
        : v2._1._2.tag === "Role" && v3._1._2.tag === "Role" && v2._1._2._1 === v3._1._2._1) && inBounds(v2._2)(v3._2)
    ) {
      return $ApplyAction(
        "AppliedAction",
        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ApplyNoWarning,
        _choices(Data$dMap$dInternal.insert(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordChoiceId)(v2._1)(v2._2))(v1)
      );
    }
    return NotAppliedAction;
  }
  if (v2.tag === "INotify" && v3.tag === "Notify" && evalObservation(v)(v1)(v3._1)) {
    return $ApplyAction("AppliedAction", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ApplyNoWarning, v1);
  }
  return NotAppliedAction;
};
const applyCases = applyCases$a0$copy => applyCases$a1$copy => applyCases$a2$copy => applyCases$a3$copy => {
  let applyCases$a0 = applyCases$a0$copy;
  let applyCases$a1 = applyCases$a1$copy;
  let applyCases$a2 = applyCases$a2$copy;
  let applyCases$a3 = applyCases$a3$copy;
  let applyCases$c = true;
  let applyCases$r;
  while (applyCases$c) {
    const v = applyCases$a0, v1 = applyCases$a1, v2 = applyCases$a2, v3 = applyCases$a3;
    if (v3.tag === "Cons") {
      const maybeContinuation = getContinuation(v2)(v3._1);
      const v4 = applyAction(v)(v1)((() => {
        if (v2.tag === "NormalInput") { return v2._1; }
        if (v2.tag === "MerkleizedInput") { return v2._1; }
        $runtime.fail();
      })())((() => {
        if (v3._1.tag === "Case") { return v3._1._1; }
        if (v3._1.tag === "MerkleizedCase") { return v3._1._1; }
        $runtime.fail();
      })());
      if (v4.tag === "AppliedAction") {
        if (maybeContinuation.tag === "Just") {
          applyCases$c = false;
          applyCases$r = Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$ApplyResult("Applied", v4._1, v4._2, maybeContinuation._1);
          continue;
        }
        if (maybeContinuation.tag === "Nothing") {
          applyCases$c = false;
          applyCases$r = Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ApplyHashMismatch;
          continue;
        }
        $runtime.fail();
      }
      if (v4.tag === "NotAppliedAction") {
        applyCases$a0 = v;
        applyCases$a1 = v1;
        applyCases$a2 = v2;
        applyCases$a3 = v3._2;
        continue;
      }
      $runtime.fail();
    }
    if (v3.tag === "Nil") {
      applyCases$c = false;
      applyCases$r = Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ApplyNoMatchError;
      continue;
    }
    $runtime.fail();
  }
  return applyCases$r;
};
const applyInput = v => v1 => v2 => v3 => {
  if (v3.tag === "When") { return applyCases(v)(v1)(v2)(fromFoldable1(v3._1)); }
  return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ApplyNoMatchError;
};
const giveMoney = accountId => payee => token => amount => accounts => Data$dTuple.$Tuple(
  Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$ReduceEffect("ReduceWithPayment", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Payment(accountId, payee, token, amount)),
  (() => {
    if (payee.tag === "Party") { return accounts; }
    if (payee.tag === "Account") { return addMoneyToAccount(payee._1)(token)(amount)(accounts); }
    $runtime.fail();
  })()
);
const reduceContractStep = env => state => contract => {
  if (contract.tag === "Close") {
    const v = refundOne(state.accounts);
    if (v.tag === "Just") {
      return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$ReduceStepResult(
        "Reduced",
        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ReduceNoWarning,
        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$ReduceEffect(
          "ReduceWithPayment",
          Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Payment(v._1._1, Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Payee("Party", v._1._1), v._1._2._1, v._1._2._2._1)
        ),
        {...state, accounts: v._1._2._2._2},
        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Close
      );
    }
    if (v.tag === "Nothing") { return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.NotReduced; }
    $runtime.fail();
  }
  if (contract.tag === "Pay") {
    const amountToPay = evalValue(env)(state)(contract._4);
    if (Data$dBigInt.ordBigInt.compare(amountToPay)(Data$dBigInt.semiringBigInt.zero) !== "GT") {
      return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$ReduceStepResult(
        "Reduced",
        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$ReduceWarning("ReduceNonPositivePay", contract._1, contract._2, contract._3, amountToPay),
        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ReduceNoPayment,
        state,
        contract._5
      );
    }
    const balance = moneyInAccount(contract._1)(contract._3)(state.accounts);
    const paidAmount = min(balance)(amountToPay);
    const v = giveMoney(contract._1)(contract._2)(contract._3)(paidAmount)(updateMoneyInAccount(contract._1)(contract._3)(Data$dBigInt.biSub(balance)(paidAmount))(state.accounts));
    return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$ReduceStepResult(
      "Reduced",
      Data$dBigInt.ordBigInt.compare(paidAmount)(amountToPay) === "LT"
        ? Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$ReduceWarning("ReducePartialPay", contract._1, contract._2, contract._3, paidAmount, amountToPay)
        : Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ReduceNoWarning,
      v._1,
      {...state, accounts: v._2},
      contract._5
    );
  }
  if (contract.tag === "If") {
    return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$ReduceStepResult(
      "Reduced",
      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ReduceNoWarning,
      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ReduceNoPayment,
      state,
      evalObservation(env)(state)(contract._1) ? contract._2 : contract._3
    );
  }
  if (contract.tag === "When") {
    const startTime = _timeInterval(x => x._1)(env);
    if (_timeInterval(x => x._2)(env) < contract._2) { return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.NotReduced; }
    if (contract._2 <= startTime) {
      return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$ReduceStepResult(
        "Reduced",
        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ReduceNoWarning,
        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ReduceNoPayment,
        state,
        contract._3
      );
    }
    return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.AmbiguousTimeIntervalReductionError;
  }
  if (contract.tag === "Let") {
    const evaluatedValue = evalValue(env)(state)(contract._2);
    return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$ReduceStepResult(
      "Reduced",
      (() => {
        const v = Data$dMap$dInternal.lookup(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordValueId)(contract._1)(state.boundValues);
        if (v.tag === "Just") { return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$ReduceWarning("ReduceShadowing", contract._1, v._1, evaluatedValue); }
        if (v.tag === "Nothing") { return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ReduceNoWarning; }
        $runtime.fail();
      })(),
      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ReduceNoPayment,
      _boundValues(Data$dMap$dInternal.insert(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordValueId)(contract._1)(evaluatedValue))(state),
      contract._3
    );
  }
  if (contract.tag === "Assert") {
    return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$ReduceStepResult(
      "Reduced",
      evalObservation(env)(state)(contract._1) ? Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ReduceNoWarning : Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ReduceAssertionFailed,
      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ReduceNoPayment,
      state,
      contract._2
    );
  }
  $runtime.fail();
};
const reduceContractUntilQuiescent = startEnv => startState => startContract => {
  const reductionLoop = reductionLoop$a0$copy => reductionLoop$a1$copy => reductionLoop$a2$copy => reductionLoop$a3$copy => reductionLoop$a4$copy => reductionLoop$a5$copy => {
    let reductionLoop$a0 = reductionLoop$a0$copy;
    let reductionLoop$a1 = reductionLoop$a1$copy;
    let reductionLoop$a2 = reductionLoop$a2$copy;
    let reductionLoop$a3 = reductionLoop$a3$copy;
    let reductionLoop$a4 = reductionLoop$a4$copy;
    let reductionLoop$a5 = reductionLoop$a5$copy;
    let reductionLoop$c = true;
    let reductionLoop$r;
    while (reductionLoop$c) {
      const reduced = reductionLoop$a0, env = reductionLoop$a1, state = reductionLoop$a2, contract = reductionLoop$a3, warnings = reductionLoop$a4, payments = reductionLoop$a5;
      const v = reduceContractStep(env)(state)(contract);
      if (v.tag === "Reduced") {
        reductionLoop$a0 = true;
        reductionLoop$a1 = env;
        reductionLoop$a2 = v._3;
        reductionLoop$a3 = v._4;
        reductionLoop$a4 = Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqReduceWarning.eq(v._1)(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ReduceNoWarning)
          ? warnings
          : Data$dList$dTypes.$List("Cons", v._1, warnings);
        reductionLoop$a5 = (() => {
          if (v._2.tag === "ReduceWithPayment") { return Data$dList$dTypes.$List("Cons", v._2._1, payments); }
          if (v._2.tag === "ReduceNoPayment") { return payments; }
          $runtime.fail();
        })();
        continue;
      }
      if (v.tag === "AmbiguousTimeIntervalReductionError") {
        reductionLoop$c = false;
        reductionLoop$r = Language$dMarlowe$dCore$dV1$dSemantics$dTypes.RRAmbiguousTimeIntervalError;
        continue;
      }
      if (v.tag === "NotReduced") {
        reductionLoop$c = false;
        reductionLoop$r = Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$ReduceResult(
          "ContractQuiescent",
          reduced,
          Data$dList.reverse(warnings),
          Data$dList.reverse(payments),
          state,
          contract
        );
        continue;
      }
      $runtime.fail();
    }
    return reductionLoop$r;
  };
  return reductionLoop(false)(startEnv)(startState)(startContract)(Data$dList$dTypes.Nil)(Data$dList$dTypes.Nil);
};
const applyAllInputs = startEnv => startState => startContract => startInputs => {
  const applyAllLoop = applyAllLoop$a0$copy => applyAllLoop$a1$copy => applyAllLoop$a2$copy => applyAllLoop$a3$copy => applyAllLoop$a4$copy => applyAllLoop$a5$copy => applyAllLoop$a6$copy => {
    let applyAllLoop$a0 = applyAllLoop$a0$copy;
    let applyAllLoop$a1 = applyAllLoop$a1$copy;
    let applyAllLoop$a2 = applyAllLoop$a2$copy;
    let applyAllLoop$a3 = applyAllLoop$a3$copy;
    let applyAllLoop$a4 = applyAllLoop$a4$copy;
    let applyAllLoop$a5 = applyAllLoop$a5$copy;
    let applyAllLoop$a6 = applyAllLoop$a6$copy;
    let applyAllLoop$c = true;
    let applyAllLoop$r;
    while (applyAllLoop$c) {
      const contractChanged = applyAllLoop$a0;
      const env = applyAllLoop$a1;
      const state = applyAllLoop$a2;
      const contract = applyAllLoop$a3;
      const inputs = applyAllLoop$a4;
      const warnings = applyAllLoop$a5;
      const payments = applyAllLoop$a6;
      const v = reduceContractUntilQuiescent(env)(state)(contract);
      if (v.tag === "RRAmbiguousTimeIntervalError") {
        applyAllLoop$c = false;
        applyAllLoop$r = Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ApplyAllAmbiguousTimeIntervalError;
        continue;
      }
      if (v.tag === "ContractQuiescent") {
        if (inputs.tag === "Nil") {
          applyAllLoop$c = false;
          applyAllLoop$r = Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$ApplyAllResult(
            "ApplyAllSuccess",
            contractChanged || v._1,
            Data$dList$dTypes.foldableList.foldr(Data$dList$dTypes.Cons)(convertReduceWarnings(v._2))(warnings),
            Data$dList$dTypes.foldableList.foldr(Data$dList$dTypes.Cons)(v._3)(payments),
            v._4,
            v._5
          );
          continue;
        }
        if (inputs.tag === "Cons") {
          const v1 = v._5.tag === "When" ? applyCases(env)(v._4)(inputs._1)(fromFoldable1(v._5._1)) : Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ApplyNoMatchError;
          if (v1.tag === "Applied") {
            applyAllLoop$a0 = true;
            applyAllLoop$a1 = env;
            applyAllLoop$a2 = v1._2;
            applyAllLoop$a3 = v1._3;
            applyAllLoop$a4 = inputs._2;
            applyAllLoop$a5 = Data$dList$dTypes.foldableList.foldr(Data$dList$dTypes.Cons)(Data$dList$dTypes.foldableList.foldr(Data$dList$dTypes.Cons)(convertApplyWarning(v1._1))(convertReduceWarnings(v._2)))(warnings);
            applyAllLoop$a6 = Data$dList$dTypes.foldableList.foldr(Data$dList$dTypes.Cons)(v._3)(payments);
            continue;
          }
          if (v1.tag === "ApplyNoMatchError") {
            applyAllLoop$c = false;
            applyAllLoop$r = Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ApplyAllNoMatchError;
            continue;
          }
          if (v1.tag === "ApplyHashMismatch") {
            applyAllLoop$c = false;
            applyAllLoop$r = Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ApplyAllHashMismatch;
            continue;
          }
        }
      }
      $runtime.fail();
    }
    return applyAllLoop$r;
  };
  return applyAllLoop(false)(startEnv)(startState)(startContract)(startInputs)(Data$dList$dTypes.Nil)(Data$dList$dTypes.Nil);
};
const above = v => v1 => v > v1._2;
const fixInterval = v => v1 => {
  if (v._1 > v._2) {
    return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$IntervalResult("IntervalError", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$IntervalError("InvalidInterval", v));
  }
  if (v1.minTime > v._2) {
    return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$IntervalResult(
      "IntervalError",
      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$IntervalError("IntervalInPastError", v1.minTime, v)
    );
  }
  const newLow = max1(v._1)(v1.minTime);
  return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$IntervalResult(
    "IntervalTrimmed",
    {timeInterval: Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$TimeInterval(newLow, v._2)},
    {accounts: v1.accounts, choices: v1.choices, boundValues: v1.boundValues, minTime: newLow}
  );
};
const computeTransaction = tx => state => contract => {
  const v = fixInterval(tx.interval)(state);
  if (v.tag === "IntervalTrimmed") {
    const v1 = applyAllInputs(v._1)(v._2)(contract)(tx.inputs);
    if (v1.tag === "ApplyAllSuccess") {
      if (!v1._1 && (contract.tag !== "Close" || state.accounts.tag === "Leaf")) {
        return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$TransactionOutput("Error", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.TEUselessTransaction);
      }
      return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$TransactionOutput(
        "TransactionOutput",
        {txOutWarnings: v1._2, txOutPayments: v1._3, txOutState: v1._4, txOutContract: v1._5}
      );
    }
    if (v1.tag === "ApplyAllNoMatchError") {
      return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$TransactionOutput("Error", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.TEApplyNoMatchError);
    }
    if (v1.tag === "ApplyAllAmbiguousTimeIntervalError") {
      return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$TransactionOutput("Error", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.TEAmbiguousTimeIntervalError);
    }
    if (v1.tag === "ApplyAllHashMismatch") {
      return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$TransactionOutput("Error", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.TEHashMismatch);
    }
    $runtime.fail();
  }
  if (v.tag === "IntervalError") {
    return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$TransactionOutput("Error", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$TransactionError("TEIntervalError", v._1));
  }
  $runtime.fail();
};
const playTrace = initialTime => contract => inputs => {
  const go = go$a0$copy => go$a1$copy => {
    let go$a0 = go$a0$copy, go$a1 = go$a1$copy, go$c = true, go$r;
    while (go$c) {
      const v = go$a0, v1 = go$a1;
      if (v1.tag === "Nil") {
        go$c = false;
        go$r = Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$TransactionOutput("TransactionOutput", v);
        continue;
      }
      if (v1.tag === "Cons") {
        const transRes = computeTransaction(v1._1)(v.txOutState)(v.txOutContract);
        if (transRes.tag === "TransactionOutput") {
          go$a0 = {
            txOutWarnings: Data$dList$dTypes.foldableList.foldr(Data$dList$dTypes.Cons)(transRes._1.txOutWarnings)(v.txOutWarnings),
            txOutPayments: Data$dList$dTypes.foldableList.foldr(Data$dList$dTypes.Cons)(transRes._1.txOutPayments)(v.txOutPayments),
            txOutState: transRes._1.txOutState,
            txOutContract: transRes._1.txOutContract
          };
          go$a1 = v1._2;
          continue;
        }
        if (transRes.tag === "Error") {
          go$c = false;
          go$r = transRes;
          continue;
        }
      }
      $runtime.fail();
    }
    return go$r;
  };
  return go({txOutWarnings: Data$dList$dTypes.Nil, txOutPayments: Data$dList$dTypes.Nil, txOutState: _minTime(v => initialTime)(emptyState), txOutContract: contract})(inputs);
};
export {
  $ApplyAction,
  AppliedAction,
  NotAppliedAction,
  _boundValues,
  _choices,
  _minTime,
  _timeInterval,
  above,
  addMoneyToAccount,
  any,
  anyWithin,
  applyAction,
  applyAllInputs,
  applyCases,
  applyInput,
  boundFrom,
  boundTo,
  computeTransaction,
  convertApplyWarning,
  convertReduceWarnings,
  emptyState,
  eqApplyAction,
  evalObservation,
  evalValue,
  fixInterval,
  foldMapWithIndex,
  fromFoldable,
  fromFoldable1,
  genericApplyAction,
  getContinuation,
  getEncompassBound,
  giveMoney,
  inBounds,
  isClose,
  makeEnvironment,
  max,
  max1,
  min,
  moneyInAccount,
  moneyInContract,
  ordTuple,
  playTrace,
  reduceContractStep,
  reduceContractUntilQuiescent,
  refundOne,
  showApplyAction,
  updateMoneyInAccount,
  validInterval
};
