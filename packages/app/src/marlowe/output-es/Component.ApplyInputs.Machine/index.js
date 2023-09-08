import * as $runtime from "../runtime.js";
import * as Component$dInputHelper from "../Component.InputHelper/index.js";
import * as Contrib$dData$dArgonaut$dGeneric$dRecord from "../Contrib.Data.Argonaut.Generic.Record/index.js";
import * as Contrib$dData$dDateTime$dInstant from "../Contrib.Data.DateTime.Instant/index.js";
import * as Data$dArgonaut$dDecode$dClass from "../Data.Argonaut.Decode.Class/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dDateTime$dInstant from "../Data.DateTime.Instant/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Effect$dNow from "../Effect.Now/index.js";
import * as Heterogeneous$dFolding from "../Heterogeneous.Folding/index.js";
import * as JS$dUnsafe$dStringify from "../JS.Unsafe.Stringify/index.js";
import * as Language$dMarlowe$dCore$dV1$dSemantics$dTypes from "../Language.Marlowe.Core.V1.Semantics.Types/index.js";
import * as Marlowe$dRuntime$dWeb$dClient from "../Marlowe.Runtime.Web.Client/index.js";
import * as Marlowe$dRuntime$dWeb$dTypes from "../Marlowe.Runtime.Web.Types/index.js";
import * as Partial from "../Partial/index.js";
import * as Wallet from "../Wallet/index.js";
import * as WalletContext from "../WalletContext/index.js";
const $Action = (tag, _1) => ({tag, _1});
const $InputChoices = (tag, _1) => ({tag, _1});
const $Request = (tag, _1) => ({tag, _1});
const $RuntimeRequest = (tag, _1) => ({tag, _1});
const $State = (tag, _1) => ({tag, _1});
const $WalletRequest = (tag, _1) => ({tag, _1});
const put$p = /* #__PURE__ */ Marlowe$dRuntime$dWeb$dClient.put$p(Marlowe$dRuntime$dWeb$dTypes.encodeHeadersPutTransacti)(Marlowe$dRuntime$dWeb$dTypes.encodeJsonBodyPutTransact)()()()();
const post$p = /* #__PURE__ */ Marlowe$dRuntime$dWeb$dClient.post$p()(Marlowe$dRuntime$dWeb$dTypes.decodeJsonPostTransaction)(Marlowe$dRuntime$dWeb$dTypes.decodeJsonApiErrorPostCon)(/* #__PURE__ */ Contrib$dData$dArgonaut$dGeneric$dRecord.decodeRecord1()()(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2({
  reflectSymbol: () => "links"
})()()(/* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dDecode$dClass.decodeRecord(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons({
    decodeJsonField: j => {
      if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", Marlowe$dRuntime$dWeb$dTypes.decodeJsonResourceLink.decodeJson(j._1)); }
      return Data$dMaybe.Nothing;
    }
  })(Data$dArgonaut$dDecode$dClass.gDecodeJsonNil)({reflectSymbol: () => "transaction"})()())();
  return {
    decodeJsonField: j => {
      if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0.decodeJson(j._1)); }
      return Data$dMaybe.Nothing;
    }
  };
})()))(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte({
  reflectSymbol: () => "resource"
})()()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil))))(Marlowe$dRuntime$dWeb$dTypes.encodeHeadersPostTransact)(Marlowe$dRuntime$dWeb$dTypes.encodeJsonBodyPostTransac)()()();
const show1 = /* #__PURE__ */ (() => Marlowe$dRuntime$dWeb$dClient.showClientError(Marlowe$dRuntime$dWeb$dTypes.showPostContractsError).show)();
const FetchWalletContextRequest = value0 => $WalletRequest("FetchWalletContextRequest", value0);
const SignTxRequest = value0 => $WalletRequest("SignTxRequest", value0);
const DepositInputs = value0 => $InputChoices("DepositInputs", value0);
const ChoiceInputs = value0 => $InputChoices("ChoiceInputs", value0);
const SpecificNotifyInput = value0 => $InputChoices("SpecificNotifyInput", value0);
const AdvanceContract = value0 => $InputChoices("AdvanceContract", value0);
const AutoRun = x => x;
const CreateTxRequest = value0 => $RuntimeRequest("CreateTxRequest", value0);
const SubmitTxRequest = value0 => $RuntimeRequest("SubmitTxRequest", value0);
const WalletRequest = value0 => $Request("WalletRequest", value0);
const RuntimeRequest = value0 => $Request("RuntimeRequest", value0);
const PresentingContractDetails = value0 => $State("PresentingContractDetails", value0);
const FetchingRequiredWalletContext = value0 => $State("FetchingRequiredWalletContext", value0);
const ChoosingInputType = value0 => $State("ChoosingInputType", value0);
const PickingInput = value0 => $State("PickingInput", value0);
const CreatingTx = value0 => $State("CreatingTx", value0);
const SigningTx = value0 => $State("SigningTx", value0);
const SubmittingTx = value0 => $State("SubmittingTx", value0);
const InputApplied = value0 => $State("InputApplied", value0);
const FetchRequiredWalletContext = value0 => $Action("FetchRequiredWalletContext", value0);
const FetchRequiredWalletContextFailed = value0 => $Action("FetchRequiredWalletContextFailed", value0);
const FetchRequiredWalletContextSucceeded = value0 => $Action("FetchRequiredWalletContextSucceeded", value0);
const ChooseInputType = /* #__PURE__ */ $Action("ChooseInputType");
const ChooseInputTypeFailed = value0 => $Action("ChooseInputTypeFailed", value0);
const ChooseInputTypeSucceeded = value0 => $Action("ChooseInputTypeSucceeded", value0);
const PickInput = /* #__PURE__ */ $Action("PickInput");
const PickInputFailed = value0 => $Action("PickInputFailed", value0);
const PickInputSucceeded = value0 => $Action("PickInputSucceeded", value0);
const CreateTx = /* #__PURE__ */ $Action("CreateTx");
const CreateTxFailed = value0 => $Action("CreateTxFailed", value0);
const CreateTxSucceeded = value0 => $Action("CreateTxSucceeded", value0);
const SignTx = /* #__PURE__ */ $Action("SignTx");
const SignTxFailed = value0 => $Action("SignTxFailed", value0);
const SignTxSucceeded = value0 => $Action("SignTxSucceeded", value0);
const SubmitTx = /* #__PURE__ */ $Action("SubmitTx");
const SubmitTxFailed = value0 => $Action("SubmitTxFailed", value0);
const SubmitTxSucceeded = /* #__PURE__ */ $Action("SubmitTxSucceeded");
const submit = witnesses => serverUrl => transactionEndpoint => put$p(serverUrl)(transactionEndpoint)({type_: "ShelleyTxWitness BabbageEra", description: "", cborHex: witnesses});
const step = state => action => {
  if (state.tag === "PresentingContractDetails") {
    if (action.tag === "FetchRequiredWalletContext") {
      return $State(
        "FetchingRequiredWalletContext",
        {autoRun: action._1.autoRun, marloweContext: action._1.marloweContext, transactionsEndpoint: action._1.transactionsEndpoint, errors: Data$dMaybe.Nothing}
      );
    }
    return state;
  }
  if (state.tag === "FetchingRequiredWalletContext") {
    if (state._1.errors.tag === "Just") {
      if (action.tag === "FetchRequiredWalletContext") {
        return $State(
          "FetchingRequiredWalletContext",
          {autoRun: action._1.autoRun, marloweContext: action._1.marloweContext, transactionsEndpoint: action._1.transactionsEndpoint, errors: Data$dMaybe.Nothing}
        );
      }
      return state;
    }
    if (action.tag === "FetchRequiredWalletContextFailed") {
      return $State(
        "FetchingRequiredWalletContext",
        {autoRun: state._1.autoRun, marloweContext: state._1.marloweContext, transactionsEndpoint: state._1.transactionsEndpoint, errors: Data$dMaybe.$Maybe("Just", action._1)}
      );
    }
    if (action.tag === "FetchRequiredWalletContextSucceeded") {
      return $State(
        "ChoosingInputType",
        {
          autoRun: state._1.autoRun,
          errors: Data$dMaybe.Nothing,
          allInputsChoices: action._1.allInputsChoices,
          requiredWalletContext: action._1.requiredWalletContext,
          transactionsEndpoint: state._1.transactionsEndpoint
        }
      );
    }
    return state;
  }
  if (state.tag === "ChoosingInputType") {
    if (state._1.errors.tag === "Just") {
      if (action.tag === "ChooseInputType") {
        return $State(
          "ChoosingInputType",
          {
            autoRun: state._1.autoRun,
            errors: Data$dMaybe.Nothing,
            allInputsChoices: state._1.allInputsChoices,
            requiredWalletContext: state._1.requiredWalletContext,
            transactionsEndpoint: state._1.transactionsEndpoint
          }
        );
      }
      return state;
    }
    if (action.tag === "ChooseInputTypeFailed") {
      return $State(
        "ChoosingInputType",
        {
          autoRun: state._1.autoRun,
          errors: Data$dMaybe.$Maybe("Just", action._1),
          allInputsChoices: state._1.allInputsChoices,
          requiredWalletContext: state._1.requiredWalletContext,
          transactionsEndpoint: state._1.transactionsEndpoint
        }
      );
    }
    if (action.tag === "ChooseInputTypeSucceeded") {
      return $State(
        "PickingInput",
        {
          autoRun: state._1.autoRun,
          errors: Data$dMaybe.Nothing,
          allInputsChoices: state._1.allInputsChoices,
          inputChoices: action._1,
          requiredWalletContext: state._1.requiredWalletContext,
          transactionsEndpoint: state._1.transactionsEndpoint
        }
      );
    }
    return state;
  }
  if (state.tag === "PickingInput") {
    if (state._1.errors.tag === "Just") {
      if (action.tag === "PickInput") {
        return $State(
          "PickingInput",
          {
            autoRun: state._1.autoRun,
            errors: Data$dMaybe.Nothing,
            allInputsChoices: state._1.allInputsChoices,
            inputChoices: state._1.inputChoices,
            requiredWalletContext: state._1.requiredWalletContext,
            transactionsEndpoint: state._1.transactionsEndpoint
          }
        );
      }
      return state;
    }
    if (action.tag === "PickInputFailed") {
      return $State(
        "PickingInput",
        {
          autoRun: state._1.autoRun,
          errors: Data$dMaybe.$Maybe("Just", action._1),
          allInputsChoices: state._1.allInputsChoices,
          inputChoices: state._1.inputChoices,
          requiredWalletContext: state._1.requiredWalletContext,
          transactionsEndpoint: state._1.transactionsEndpoint
        }
      );
    }
    if (action.tag === "PickInputSucceeded") {
      return $State(
        "CreatingTx",
        {
          autoRun: state._1.autoRun,
          errors: Data$dMaybe.Nothing,
          allInputsChoices: state._1.allInputsChoices,
          inputChoices: state._1.inputChoices,
          input: action._1,
          requiredWalletContext: state._1.requiredWalletContext,
          transactionsEndpoint: state._1.transactionsEndpoint
        }
      );
    }
    return state;
  }
  if (state.tag === "CreatingTx") {
    if (state._1.errors.tag === "Just") {
      if (action.tag === "CreateTx") {
        return $State(
          "CreatingTx",
          {
            autoRun: state._1.autoRun,
            errors: Data$dMaybe.Nothing,
            allInputsChoices: state._1.allInputsChoices,
            transactionsEndpoint: state._1.transactionsEndpoint,
            inputChoices: state._1.inputChoices,
            input: state._1.input,
            requiredWalletContext: state._1.requiredWalletContext
          }
        );
      }
      return state;
    }
    if (action.tag === "CreateTxFailed") {
      return $State(
        "CreatingTx",
        {
          autoRun: state._1.autoRun,
          errors: Data$dMaybe.$Maybe("Just", action._1),
          allInputsChoices: state._1.allInputsChoices,
          transactionsEndpoint: state._1.transactionsEndpoint,
          inputChoices: state._1.inputChoices,
          input: state._1.input,
          requiredWalletContext: state._1.requiredWalletContext
        }
      );
    }
    if (action.tag === "CreateTxSucceeded") {
      return $State(
        "SigningTx",
        {
          autoRun: state._1.autoRun,
          errors: Data$dMaybe.Nothing,
          allInputsChoices: state._1.allInputsChoices,
          inputChoices: state._1.inputChoices,
          input: state._1.input,
          createTxResponse: action._1
        }
      );
    }
    return state;
  }
  if (state.tag === "SigningTx") {
    if (state._1.errors.tag === "Just") {
      if (action.tag === "SignTx") {
        return $State(
          "SigningTx",
          {
            autoRun: state._1.autoRun,
            errors: Data$dMaybe.Nothing,
            allInputsChoices: state._1.allInputsChoices,
            inputChoices: state._1.inputChoices,
            input: state._1.input,
            createTxResponse: state._1.createTxResponse
          }
        );
      }
      return state;
    }
    if (action.tag === "SignTxFailed") {
      return $State(
        "SigningTx",
        {
          autoRun: state._1.autoRun,
          errors: Data$dMaybe.$Maybe("Just", action._1),
          allInputsChoices: state._1.allInputsChoices,
          inputChoices: state._1.inputChoices,
          input: state._1.input,
          createTxResponse: state._1.createTxResponse
        }
      );
    }
    if (action.tag === "SignTxSucceeded") {
      return $State(
        "SubmittingTx",
        {
          autoRun: state._1.autoRun,
          errors: Data$dMaybe.Nothing,
          allInputsChoices: state._1.allInputsChoices,
          inputChoices: state._1.inputChoices,
          input: state._1.input,
          createTxResponse: state._1.createTxResponse,
          txWitnessSet: action._1
        }
      );
    }
    return state;
  }
  if (state.tag === "SubmittingTx") {
    if (state._1.errors.tag === "Just") {
      if (action.tag === "SubmitTx") {
        return $State(
          "SubmittingTx",
          {
            autoRun: state._1.autoRun,
            errors: Data$dMaybe.Nothing,
            allInputsChoices: state._1.allInputsChoices,
            inputChoices: state._1.inputChoices,
            input: state._1.input,
            createTxResponse: state._1.createTxResponse,
            txWitnessSet: state._1.txWitnessSet
          }
        );
      }
      return state;
    }
    if (action.tag === "SubmitTxFailed") {
      return $State(
        "SubmittingTx",
        {
          autoRun: state._1.autoRun,
          errors: Data$dMaybe.$Maybe("Just", action._1),
          allInputsChoices: state._1.allInputsChoices,
          inputChoices: state._1.inputChoices,
          input: state._1.input,
          createTxResponse: state._1.createTxResponse,
          txWitnessSet: state._1.txWitnessSet
        }
      );
    }
    if (action.tag === "SubmitTxSucceeded") {
      return $State(
        "InputApplied",
        {
          allInputsChoices: state._1.allInputsChoices,
          autoRun: state._1.autoRun,
          inputChoices: state._1.inputChoices,
          input: state._1.input,
          txWitnessSet: state._1.txWitnessSet,
          createTxResponse: state._1.createTxResponse
        }
      );
    }
    return state;
  }
  if (state.tag === "InputApplied") { return state; }
  $runtime.fail();
};
const sign = walletApi => tx => Wallet.signTx(walletApi)(tx.cborHex)(true);
const initialState = marloweContext => transactionsEndpoint => $State("PresentingContractDetails", {marloweContext, transactionsEndpoint});
const create = inputs => walletAddresses => serverUrl => transactionsEndpoint => Effect$dAff._bind(Effect$dAff._liftEffect(Effect$dNow.now))(nowInstant => post$p(serverUrl)(transactionsEndpoint)({
  metadata: Data$dMap$dInternal.Leaf,
  invalidBefore: Data$dDateTime$dInstant.toDateTime((() => {
    const $0 = nowInstant + -60000.0;
    if ($0 >= -8639977881600000.0 && $0 <= 8639977881599999.0) { return $0; }
    return Partial._crashWith("Component.ApplyInputs.Machine: Failed to add one hour to the current time");
  })()),
  invalidHereafter: Data$dDateTime$dInstant.toDateTime((() => {
    const $0 = nowInstant + 3600000.0;
    if ($0 >= -8639977881600000.0 && $0 <= 8639977881599999.0) { return $0; }
    return Partial._crashWith("Component.ApplyInputs.Machine: Failed to subtract one minute to the current time");
  })()),
  inputs,
  tags: Data$dMap$dInternal.Leaf,
  changeAddress: walletAddresses.changeAddress,
  addresses: walletAddresses.usedAddresses,
  collateralUTxOs: []
}));
const requestToAffAction = v => {
  if (v.tag === "WalletRequest") {
    if (v._1.tag === "FetchWalletContextRequest") {
      const $0 = v._1._1.marloweContext;
      return Effect$dAff._bind(Effect$dAff._catchError(Effect$dAff._map(Data$dEither.Right)(WalletContext.walletContext(v._1._1.cardanoMultiplatformLib)(v._1._1.walletInfo.wallet)))(x => Effect$dAff._pure(Data$dEither.$Either(
        "Left",
        x
      ))))(possibleWalletAddresses => {
        if (possibleWalletAddresses.tag === "Left") {
          return Effect$dAff._pure($Action("FetchRequiredWalletContextFailed", Effect$dException.showErrorImpl(possibleWalletAddresses._1)));
        }
        if (possibleWalletAddresses.tag === "Right") {
          if (possibleWalletAddresses._1.tag === "Nothing") { return Effect$dAff._pure($Action("FetchRequiredWalletContextFailed", "Wallet not found")); }
          if (possibleWalletAddresses._1.tag === "Just") {
            const $1 = possibleWalletAddresses._1._1.changeAddress;
            const $2 = possibleWalletAddresses._1._1.usedAddresses;
            return Effect$dAff._liftEffect((() => {
              const $3 = Data$dInt.toNumber(-600000);
              return () => {
                const n = Effect$dNow.now();
                const n$1 = Effect$dNow.now();
                const environment = {
                  timeInterval: Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$TimeInterval(
                    Contrib$dData$dDateTime$dInstant.unsafeInstant(n + $3),
                    Contrib$dData$dDateTime$dInstant.unsafeInstant(n$1 + Data$dInt.toNumber(300000))
                  )
                };
                return $Action(
                  "FetchRequiredWalletContextSucceeded",
                  {
                    requiredWalletContext: {changeAddress: $1, usedAddresses: $2},
                    allInputsChoices: (() => {
                      const v1 = Component$dInputHelper.nextTimeoutAdvance(environment)($0.state)($0.contract);
                      if (v1.tag === "Just") { return Data$dEither.$Either("Left", v1._1); }
                      if (v1.tag === "Nothing") {
                        return Data$dEither.$Either(
                          "Right",
                          {
                            deposits: (() => {
                              const $4 = Component$dInputHelper.nextDeposit(environment)($0.state)($0.contract);
                              if ($4.length > 0) { return Data$dMaybe.$Maybe("Just", $4); }
                              return Data$dMaybe.Nothing;
                            })(),
                            choices: (() => {
                              const $4 = Component$dInputHelper.nextChoice(environment)($0.state)($0.contract);
                              if ($4.length > 0) { return Data$dMaybe.$Maybe("Just", $4); }
                              return Data$dMaybe.Nothing;
                            })(),
                            notify: (() => {
                              const $4 = Component$dInputHelper.nextNotify(environment)($0.state)($0.contract);
                              if ($4.length > 0) {
                                return Data$dMaybe.$Maybe(
                                  "Just",
                                  (() => {
                                    const $5 = Data$dArray.index($4)(0);
                                    if ($5.tag === "Just") { return $5._1; }
                                    $runtime.fail();
                                  })()
                                );
                              }
                              return Data$dMaybe.Nothing;
                            })()
                          }
                        );
                      }
                      $runtime.fail();
                    })()
                  }
                );
              };
            })());
          }
        }
        $runtime.fail();
      });
    }
    if (v._1.tag === "SignTxRequest") {
      return Effect$dAff._bind(Wallet.signTx(v._1._1.walletInfo.wallet)(v._1._1.tx.cborHex)(true))(v1 => {
        if (v1.tag === "Left") { return Effect$dAff._pure($Action("SignTxFailed", JS$dUnsafe$dStringify.unsafeStringify(v1._1))); }
        if (v1.tag === "Right") { return Effect$dAff._pure($Action("SignTxSucceeded", v1._1)); }
        $runtime.fail();
      });
    }
    $runtime.fail();
  }
  if (v.tag === "RuntimeRequest") {
    if (v._1.tag === "CreateTxRequest") {
      return Effect$dAff._bind(create((() => {
        if (v._1._1.input.tag === "Nothing") { return []; }
        if (v._1._1.input.tag === "Just") { return [v._1._1.input._1]; }
        $runtime.fail();
      })())(v._1._1.requiredWalletContext)(v._1._1.serverURL)(v._1._1.transactionsEndpoint))(v1 => {
        if (v1.tag === "Right") { return Effect$dAff._pure($Action("CreateTxSucceeded", v1._1)); }
        if (v1.tag === "Left") { return Effect$dAff._pure($Action("CreateTxFailed", show1(v1._1))); }
        $runtime.fail();
      });
    }
    if (v._1.tag === "SubmitTxRequest") {
      return Effect$dAff._bind(put$p(v._1._1.serverURL)(v._1._1.createTxResponse.links.transaction)({
        type_: "ShelleyTxWitness BabbageEra",
        description: "",
        cborHex: v._1._1.txWitnessSet
      }))(v1 => {
        if (v1.tag === "Right") { return Effect$dAff._pure(SubmitTxSucceeded); }
        if (v1.tag === "Left") {
          return Effect$dAff._pure($Action(
            "SubmitTxFailed",
            (() => {
              if (v1._1.tag === "InvalidStatusCode") { return "InvalidStatusCode"; }
              if (v1._1.tag === "FetchError") { return "FetchError " + Effect$dException.showErrorImpl(v1._1._1); }
              $runtime.fail();
            })()
          ));
        }
        $runtime.fail();
      });
    }
  }
  $runtime.fail();
};
const canNotify = v => v.tag === "Right" && (() => {
  if (v._1.notify.tag === "Nothing") { return false; }
  if (v._1.notify.tag === "Just") { return true; }
  $runtime.fail();
})();
const canDeposit = v => v.tag === "Right" && (() => {
  if (v._1.deposits.tag === "Nothing") { return false; }
  if (v._1.deposits.tag === "Just") { return true; }
  $runtime.fail();
})();
const canChoose = v => v.tag === "Right" && (() => {
  if (v._1.choices.tag === "Nothing") { return false; }
  if (v._1.choices.tag === "Just") { return true; }
  $runtime.fail();
})();
const canAdvance = possibleInputs => {
  if (possibleInputs.tag === "Left") { return true; }
  if (possibleInputs.tag === "Right") { return false; }
  $runtime.fail();
};
const autoRunFromState = v => {
  if (v.tag === "PresentingContractDetails") { return Data$dMaybe.Nothing; }
  if (v.tag === "FetchingRequiredWalletContext") { return Data$dMaybe.$Maybe("Just", v._1.autoRun); }
  if (v.tag === "ChoosingInputType") { return Data$dMaybe.$Maybe("Just", v._1.autoRun); }
  if (v.tag === "PickingInput") { return Data$dMaybe.$Maybe("Just", v._1.autoRun); }
  if (v.tag === "CreatingTx") { return Data$dMaybe.$Maybe("Just", v._1.autoRun); }
  if (v.tag === "SigningTx") { return Data$dMaybe.$Maybe("Just", v._1.autoRun); }
  if (v.tag === "SubmittingTx") { return Data$dMaybe.$Maybe("Just", v._1.autoRun); }
  if (v.tag === "InputApplied") { return Data$dMaybe.$Maybe("Just", v._1.autoRun); }
  $runtime.fail();
};
const nextRequest = env => state => {
  if (
    (() => {
      const $0 = autoRunFromState(state);
      if ($0.tag === "Nothing") { return false; }
      if ($0.tag === "Just") { return $0._1; }
      $runtime.fail();
    })()
  ) {
    if (state.tag === "PresentingContractDetails") {
      return Data$dMaybe.$Maybe(
        "Just",
        $Request(
          "WalletRequest",
          $WalletRequest(
            "FetchWalletContextRequest",
            {marloweContext: state._1.marloweContext, cardanoMultiplatformLib: env.cardanoMultiplatformLib, walletInfo: env.connectedWallet}
          )
        )
      );
    }
    if (state.tag === "FetchingRequiredWalletContext") {
      if (state._1.errors.tag === "Nothing") {
        return Data$dMaybe.$Maybe(
          "Just",
          $Request(
            "WalletRequest",
            $WalletRequest(
              "FetchWalletContextRequest",
              {marloweContext: state._1.marloweContext, cardanoMultiplatformLib: env.cardanoMultiplatformLib, walletInfo: env.connectedWallet}
            )
          )
        );
      }
      return Data$dMaybe.Nothing;
    }
    if (state.tag === "CreatingTx") {
      if (state._1.errors.tag === "Nothing") {
        return Data$dMaybe.$Maybe(
          "Just",
          $Request(
            "RuntimeRequest",
            $RuntimeRequest(
              "CreateTxRequest",
              {
                allInputsChoices: state._1.allInputsChoices,
                inputChoices: state._1.inputChoices,
                input: state._1.input,
                requiredWalletContext: state._1.requiredWalletContext,
                serverURL: env.runtime.serverURL,
                transactionsEndpoint: state._1.transactionsEndpoint
              }
            )
          )
        );
      }
      return Data$dMaybe.Nothing;
    }
    if (state.tag === "SigningTx") {
      if (state._1.errors.tag === "Nothing") {
        return Data$dMaybe.$Maybe("Just", $Request("WalletRequest", $WalletRequest("SignTxRequest", {walletInfo: env.connectedWallet, tx: state._1.createTxResponse.resource.tx})));
      }
      return Data$dMaybe.Nothing;
    }
    if (state.tag === "SubmittingTx" && state._1.errors.tag === "Nothing") {
      return Data$dMaybe.$Maybe(
        "Just",
        $Request(
          "RuntimeRequest",
          $RuntimeRequest("SubmitTxRequest", {txWitnessSet: state._1.txWitnessSet, createTxResponse: state._1.createTxResponse, serverURL: env.runtime.serverURL})
        )
      );
    }
  }
  return Data$dMaybe.Nothing;
};
const driver = env => state => {
  const $0 = nextRequest(env)(state);
  if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", requestToAffAction($0._1)); }
  if ($0.tag === "Nothing") { return Data$dMaybe.Nothing; }
  $runtime.fail();
};
export {
  $Action,
  $InputChoices,
  $Request,
  $RuntimeRequest,
  $State,
  $WalletRequest,
  AdvanceContract,
  AutoRun,
  ChoiceInputs,
  ChooseInputType,
  ChooseInputTypeFailed,
  ChooseInputTypeSucceeded,
  ChoosingInputType,
  CreateTx,
  CreateTxFailed,
  CreateTxRequest,
  CreateTxSucceeded,
  CreatingTx,
  DepositInputs,
  FetchRequiredWalletContext,
  FetchRequiredWalletContextFailed,
  FetchRequiredWalletContextSucceeded,
  FetchWalletContextRequest,
  FetchingRequiredWalletContext,
  InputApplied,
  PickInput,
  PickInputFailed,
  PickInputSucceeded,
  PickingInput,
  PresentingContractDetails,
  RuntimeRequest,
  SignTx,
  SignTxFailed,
  SignTxRequest,
  SignTxSucceeded,
  SigningTx,
  SpecificNotifyInput,
  SubmitTx,
  SubmitTxFailed,
  SubmitTxRequest,
  SubmitTxSucceeded,
  SubmittingTx,
  WalletRequest,
  autoRunFromState,
  canAdvance,
  canChoose,
  canDeposit,
  canNotify,
  create,
  driver,
  initialState,
  nextRequest,
  post$p,
  put$p,
  requestToAffAction,
  show1,
  sign,
  step,
  submit
};
