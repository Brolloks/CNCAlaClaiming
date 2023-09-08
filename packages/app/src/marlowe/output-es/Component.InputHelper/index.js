import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dFunctorWithIndex from "../Data.FunctorWithIndex/index.js";
import * as Data$dList from "../Data.List/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Language$dMarlowe$dCore$dV1$dFolds from "../Language.Marlowe.Core.V1.Folds/index.js";
import * as Language$dMarlowe$dCore$dV1$dSemantics from "../Language.Marlowe.Core.V1.Semantics/index.js";
import * as Language$dMarlowe$dCore$dV1$dSemantics$dTypes from "../Language.Marlowe.Core.V1.Semantics.Types/index.js";
const $ChoiceInput = (_1, _2, _3) => ({tag: "ChoiceInput", _1, _2, _3});
const $DepositInput = (_1, _2, _3, _4, _5) => ({tag: "DepositInput", _1, _2, _3, _4, _5});
const $ExecutionBranch = (tag, _1) => ({tag, _1});
const $NotifyInput = _1 => ({tag: "NotifyInput", _1});
const foldMapContract = /* #__PURE__ */ Language$dMarlowe$dCore$dV1$dFolds.foldMapContract(Data$dMonoid.monoidArray);
const show1 = /* #__PURE__ */ (() => Data$dShow.showArrayImpl(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.showCase.show))();
const foldM = f => b0 => Data$dFoldable.foldlArray(b => a => (() => {
  if (b.tag === "Left") {
    const $0 = b._1;
    return v => Data$dEither.$Either("Left", $0);
  }
  if (b.tag === "Right") {
    const $0 = b._1;
    return f$1 => f$1($0);
  }
  $runtime.fail();
})()(a$1 => f(a$1)(a)))(Data$dEither.$Either("Right", b0));
const NotifyInput = value0 => $NotifyInput(value0);
const WhenBranch = value0 => $ExecutionBranch("WhenBranch", value0);
const IfBranch = value0 => $ExecutionBranch("IfBranch", value0);
const DepositInput = value0 => value1 => value2 => value3 => value4 => $DepositInput(value0, value1, value2, value3, value4);
const ChoiceInput = value0 => value1 => value2 => $ChoiceInput(value0, value1, value2);
const whenTimeoutBranch = /* #__PURE__ */ $ExecutionBranch("WhenBranch", Data$dMaybe.Nothing);
const whenCaseBranch = x => $ExecutionBranch("WhenBranch", Data$dMaybe.$Maybe("Just", x));
const toINotify = v => {
  if (v._1.tag === "Just") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.INotify); }
  return Data$dMaybe.Nothing;
};
const toIDeposit = v => {
  if (v._5.tag === "Just") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$InputContent("IDeposit", v._1, v._2, v._3, v._4)); }
  return Data$dMaybe.Nothing;
};
const toIChoice = v => v1 => {
  if (v._3.tag === "Just") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$InputContent("IChoice", v._1, v1)); }
  return Data$dMaybe.Nothing;
};
const rolesInContract = /* #__PURE__ */ (() => {
  const $0 = foldMapContract(Language$dMarlowe$dCore$dV1$dFolds.$MapStep({
    mapCase: v => {
      if (v.tag === "Case") {
        if (v._1.tag === "Deposit") {
          if (v._1._1.tag === "Role") {
            if (v._1._2.tag === "Role") { return [v._1._1._1, v._1._2._1]; }
            return [v._1._1._1];
          }
          if (v._1._2.tag === "Role") { return [v._1._2._1]; }
          return [];
        }
        if (v._1.tag === "Choice") {
          if (v._1._1._2.tag === "Role") { return [v._1._1._2._1]; }
          return [];
        }
        if (v._1.tag === "Notify") { return []; }
        $runtime.fail();
      }
      if (v.tag === "MerkleizedCase") {
        if (v._1.tag === "Deposit") {
          if (v._1._1.tag === "Role") {
            if (v._1._2.tag === "Role") { return [v._1._1._1, v._1._2._1]; }
            return [v._1._1._1];
          }
          if (v._1._2.tag === "Role") { return [v._1._2._1]; }
          return [];
        }
        if (v._1.tag === "Choice") {
          if (v._1._1._2.tag === "Role") { return [v._1._1._2._1]; }
          return [];
        }
        if (v._1.tag === "Notify") { return []; }
      }
      $runtime.fail();
    },
    mapContract: v => {
      if (v.tag === "Close") { return []; }
      if (v.tag === "When") { return []; }
      if (v.tag === "Pay") {
        if (v._1.tag === "Role") {
          if (v._2.tag === "Party" && v._2._1.tag === "Role") { return [v._1._1, v._2._1._1]; }
          return [v._1._1];
        }
        if (v._2.tag === "Party" && v._2._1.tag === "Role") { return [v._2._1._1]; }
        return [];
      }
      if (v.tag === "If") { return []; }
      if (v.tag === "Let") { return []; }
      if (v.tag === "Assert") { return []; }
      $runtime.fail();
    },
    mapObservation: v => {
      if (v.tag === "ChoseSomething" && v._1._2.tag === "Role") { return [v._1._2._1]; }
      return [];
    },
    mapValue: v => {
      if (v.tag === "AvailableMoney") {
        if (v._1.tag === "Role") { return [v._1._1]; }
        return [];
      }
      if (v.tag === "ChoiceValue" && v._1._2.tag === "Role") { return [v._1._2._1]; }
      return [];
    }
  }));
  return x => Data$dArray.nubBy(Data$dOrd.ordString.compare)($0(x));
})();
const reduceContract = env => state => contract => {
  const v = Language$dMarlowe$dCore$dV1$dSemantics.reduceContractUntilQuiescent(env)(state)(contract);
  if (v.tag === "ContractQuiescent") { return Data$dTuple.$Tuple(v._5, v._4); }
  return Data$dTuple.$Tuple(contract, state);
};
const nextTimeoutAdvance = v => state => contract => {
  const $0 = reduceContract(v)(state)(contract)._1;
  if ($0.tag === "When") {
    if (v.timeInterval._1 >= $0._2) { return Data$dMaybe.$Maybe("Just", $0._3); }
    return Data$dMaybe.Nothing;
  }
  if ($0.tag === "Close") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Close); }
  return Data$dMaybe.Nothing;
};
const nextNotify = env => state => contract => {
  const v = reduceContract(env)(state)(contract);
  if (v._1.tag === "When") {
    return Data$dArray.concat(Data$dFunctor.arrayMap(v1 => {
      if (v1.tag === "Case") {
        if (v1._1.tag === "Notify" && Language$dMarlowe$dCore$dV1$dSemantics.evalObservation(env)(v._2)(v1._1._1)) { return [$NotifyInput(Data$dMaybe.$Maybe("Just", v1._2))]; }
        return [];
      }
      if (v1.tag === "MerkleizedCase" && v1._1.tag === "Notify" && Language$dMarlowe$dCore$dV1$dSemantics.evalObservation(env)(v._2)(v1._1._1)) {
        return [$NotifyInput(Data$dMaybe.Nothing)];
      }
      return [];
    })(v._1._1));
  }
  return [];
};
const nextDeposit = env => state => contract => {
  const v = reduceContract(env)(state)(contract);
  if (v._1.tag === "When") {
    return Data$dArray.concat(Data$dFunctor.arrayMap(v1 => {
      if (v1.tag === "Case") {
        if (v1._1.tag === "Deposit") {
          return [$DepositInput(v1._1._1, v1._1._2, v1._1._3, Language$dMarlowe$dCore$dV1$dSemantics.evalValue(env)(v._2)(v1._1._4), Data$dMaybe.$Maybe("Just", v1._2))];
        }
        return [];
      }
      if (v1.tag === "MerkleizedCase" && v1._1.tag === "Deposit") {
        return [$DepositInput(v1._1._1, v1._1._2, v1._1._3, Language$dMarlowe$dCore$dV1$dSemantics.evalValue(env)(v._2)(v1._1._4), Data$dMaybe.Nothing)];
      }
      return [];
    })(v._1._1));
  }
  return [];
};
const nextChoice = env => state => contract => {
  const $0 = reduceContract(env)(state)(contract)._1;
  if ($0.tag === "When") {
    return Data$dArray.concat(Data$dFunctor.arrayMap(v1 => {
      if (v1.tag === "Case") {
        if (v1._1.tag === "Choice") { return [$ChoiceInput(v1._1._1, v1._1._2, Data$dMaybe.$Maybe("Just", v1._2))]; }
        return [];
      }
      if (v1.tag === "MerkleizedCase" && v1._1.tag === "Choice") { return [$ChoiceInput(v1._1._1, v1._1._2, Data$dMaybe.Nothing)]; }
      return [];
    })($0._1));
  }
  return [];
};
const ifTrueBranch = /* #__PURE__ */ $ExecutionBranch("IfBranch", true);
const ifFalseBranch = /* #__PURE__ */ $ExecutionBranch("IfBranch", false);
const inputExecutionPath = v => {
  const $0 = v._1;
  const $1 = v._2;
  const env = {timeInterval: $1};
  return v1 => v2 => {
    if (v1.tag === "When") {
      const v3 = Language$dMarlowe$dCore$dV1$dSemantics.reduceContractStep(env)(v2)(v1);
      if (v3.tag === "AmbiguousTimeIntervalReductionError") { return Data$dEither.$Either("Left", "AmbiguousTimeIntervalReductionError"); }
      if (v3.tag === "NotReduced") {
        if ($0.tag === "Just") {
          const $2 = $0._1;
          const v4 = Data$dArray.index(Data$dArray.mapMaybe(x => x)(Data$dFunctorWithIndex.mapWithIndexArray(idx => c => {
            const v4 = Language$dMarlowe$dCore$dV1$dSemantics.applyCases(env)(v2)(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Input("NormalInput", $2))(Data$dList$dTypes.$List(
              "Cons",
              c,
              Data$dList$dTypes.Nil
            ));
            if (v4.tag === "Applied") {
              return Data$dMaybe.$Maybe("Just", Data$dTuple.$Tuple($ExecutionBranch("WhenBranch", Data$dMaybe.$Maybe("Just", idx)), Data$dTuple.$Tuple(v4._3, v4._2)));
            }
            return Data$dMaybe.Nothing;
          })(v1._1)))(0);
          if (v4.tag === "Just") { return Data$dEither.$Either("Right", [v4._1]); }
          if (v4.tag === "Nothing") {
            return Data$dEither.$Either(
              "Left",
              "No match found for input " + Language$dMarlowe$dCore$dV1$dSemantics$dTypes.genericShow5($2) + " in when with cases " + show1(v1._1)
            );
          }
          $runtime.fail();
        }
        if ($0.tag === "Nothing") { return Data$dEither.$Either("Left", "Expecting an input"); }
        $runtime.fail();
      }
      if (v3.tag === "Reduced") {
        if ($0.tag === "Just") {
          const $2 = inputExecutionPath(Data$dTuple.$Tuple(Data$dMaybe.$Maybe("Just", $0._1), $1))(v3._4)(v3._3);
          if ($2.tag === "Left") { return Data$dEither.$Either("Left", $2._1); }
          if ($2.tag === "Right") {
            return Data$dEither.$Either("Right", [Data$dTuple.$Tuple($ExecutionBranch("WhenBranch", Data$dMaybe.Nothing), Data$dTuple.$Tuple(v3._4, v3._3)), ...$2._1]);
          }
          $runtime.fail();
        }
        if ($0.tag === "Nothing") {
          return Data$dEither.$Either("Right", [Data$dTuple.$Tuple($ExecutionBranch("WhenBranch", Data$dMaybe.Nothing), Data$dTuple.$Tuple(v3._4, v3._3))]);
        }
      }
      $runtime.fail();
    }
    if (v1.tag === "If") {
      const idx = Language$dMarlowe$dCore$dV1$dSemantics.evalObservation(env)(v2)(v1._1) ? $ExecutionBranch("IfBranch", true) : $ExecutionBranch("IfBranch", false);
      const v3 = Language$dMarlowe$dCore$dV1$dSemantics.reduceContractStep(env)(v2)(v1);
      if (v3.tag === "AmbiguousTimeIntervalReductionError") { return Data$dEither.$Either("Left", "AmbiguousTimeIntervalReductionError"); }
      if (v3.tag === "NotReduced") { return Data$dEither.$Either("Left", "Contract already reduced"); }
      if (v3.tag === "Reduced") {
        if ($0.tag === "Just") {
          const $2 = inputExecutionPath(Data$dTuple.$Tuple(Data$dMaybe.$Maybe("Just", $0._1), $1))(v3._4)(v3._3);
          if ($2.tag === "Left") { return Data$dEither.$Either("Left", $2._1); }
          if ($2.tag === "Right") { return Data$dEither.$Either("Right", [Data$dTuple.$Tuple(idx, Data$dTuple.$Tuple(v3._4, v3._3)), ...$2._1]); }
          $runtime.fail();
        }
        if ($0.tag === "Nothing") { return Data$dEither.$Either("Right", [Data$dTuple.$Tuple(idx, Data$dTuple.$Tuple(v3._4, v3._3))]); }
      }
      $runtime.fail();
    }
    const v3 = Language$dMarlowe$dCore$dV1$dSemantics.reduceContractStep({timeInterval: $1})(v2)(v1);
    if (v3.tag === "AmbiguousTimeIntervalReductionError") { return Data$dEither.$Either("Left", "AmbiguousTimeIntervalReductionError"); }
    if (v3.tag === "NotReduced") { return Data$dEither.$Either("Left", "Contract already reduced"); }
    if (v3.tag === "Reduced") {
      if ($0.tag === "Just") {
        const $2 = inputExecutionPath(Data$dTuple.$Tuple(Data$dMaybe.$Maybe("Just", $0._1), $1))(v3._4)(v3._3);
        if ($2.tag === "Left") { return Data$dEither.$Either("Left", $2._1); }
        if ($2.tag === "Right") { return Data$dEither.$Either("Right", [Data$dTuple.$Tuple($ExecutionBranch("IfBranch", true), Data$dTuple.$Tuple(v3._4, v3._3)), ...$2._1]); }
        $runtime.fail();
      }
      if ($0.tag === "Nothing") { return Data$dEither.$Either("Right", [Data$dTuple.$Tuple($ExecutionBranch("IfBranch", true), Data$dTuple.$Tuple(v3._4, v3._3))]); }
    }
    $runtime.fail();
  };
};
const executionPath = inputs => contract => state => {
  const $0 = foldM(acc => input => {
    const $0 = inputExecutionPath(input)(acc.contract)(acc.state);
    return (() => {
      if ($0.tag === "Left") {
        const $1 = $0._1;
        return v => Data$dEither.$Either("Left", $1);
      }
      if ($0.tag === "Right") {
        const $1 = $0._1;
        return f => f($1);
      }
      $runtime.fail();
    })()(sub => {
      const $1 = Data$dArray.index(sub)(0);
      const v = (() => {
        if ($1.tag === "Just") { return $1._1; }
        $runtime.fail();
      })();
      return Data$dEither.$Either("Right", {contract: v._2._1, state: v._2._2, executionPath: Data$dList$dTypes.$List("Cons", Data$dTuple.$Tuple(input, sub), acc.executionPath)});
    });
  })({contract, state, executionPath: Data$dList$dTypes.Nil})(inputs);
  return (() => {
    if ($0.tag === "Left") {
      const $1 = $0._1;
      return v => Data$dEither.$Either("Left", $1);
    }
    if ($0.tag === "Right") {
      const $1 = $0._1;
      return f => f($1);
    }
    $runtime.fail();
  })()(v => Data$dEither.$Either("Right", Data$dList.reverse(v.executionPath)));
};
const addressesInContract = /* #__PURE__ */ (() => {
  const $0 = foldMapContract(Language$dMarlowe$dCore$dV1$dFolds.$MapStep({
    mapCase: v => {
      if (v.tag === "Case") {
        if (v._1.tag === "Deposit") {
          if (v._1._1.tag === "Address") {
            if (v._1._2.tag === "Address") { return [v._1._1._1, v._1._2._1]; }
            return [v._1._1._1];
          }
          if (v._1._2.tag === "Address") { return [v._1._2._1]; }
          return [];
        }
        if (v._1.tag === "Choice") {
          if (v._1._1._2.tag === "Address") { return [v._1._1._2._1]; }
          return [];
        }
        if (v._1.tag === "Notify") { return []; }
        $runtime.fail();
      }
      if (v.tag === "MerkleizedCase") {
        if (v._1.tag === "Deposit") {
          if (v._1._1.tag === "Address") {
            if (v._1._2.tag === "Address") { return [v._1._1._1, v._1._2._1]; }
            return [v._1._1._1];
          }
          if (v._1._2.tag === "Address") { return [v._1._2._1]; }
          return [];
        }
        if (v._1.tag === "Choice") {
          if (v._1._1._2.tag === "Address") { return [v._1._1._2._1]; }
          return [];
        }
        if (v._1.tag === "Notify") { return []; }
      }
      $runtime.fail();
    },
    mapContract: v => {
      if (v.tag === "Close") { return []; }
      if (v.tag === "When") { return []; }
      if (v.tag === "Pay") {
        if (v._1.tag === "Address") {
          if (v._2.tag === "Party" && v._2._1.tag === "Address") { return [v._1._1, v._2._1._1]; }
          return [v._1._1];
        }
        if (v._2.tag === "Party" && v._2._1.tag === "Address") { return [v._2._1._1]; }
        return [];
      }
      if (v.tag === "If") { return []; }
      if (v.tag === "Let") { return []; }
      if (v.tag === "Assert") { return []; }
      $runtime.fail();
    },
    mapObservation: v => {
      if (v.tag === "ChoseSomething" && v._1._2.tag === "Address") { return [v._1._2._1]; }
      return [];
    },
    mapValue: v => {
      if (v.tag === "AvailableMoney") {
        if (v._1.tag === "Address") { return [v._1._1]; }
        return [];
      }
      if (v.tag === "ChoiceValue" && v._1._2.tag === "Address") { return [v._1._2._1]; }
      return [];
    }
  }));
  return x => Data$dArray.nubBy(Data$dOrd.ordString.compare)($0(x));
})();
export {
  $ChoiceInput,
  $DepositInput,
  $ExecutionBranch,
  $NotifyInput,
  ChoiceInput,
  DepositInput,
  IfBranch,
  NotifyInput,
  WhenBranch,
  addressesInContract,
  executionPath,
  foldM,
  foldMapContract,
  ifFalseBranch,
  ifTrueBranch,
  inputExecutionPath,
  nextChoice,
  nextDeposit,
  nextNotify,
  nextTimeoutAdvance,
  reduceContract,
  rolesInContract,
  show1,
  toIChoice,
  toIDeposit,
  toINotify,
  whenCaseBranch,
  whenTimeoutBranch
};
