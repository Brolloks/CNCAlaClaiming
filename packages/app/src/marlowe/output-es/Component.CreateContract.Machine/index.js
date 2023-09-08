import * as $runtime from "../runtime.js";
import * as Contrib$dData$dArgonaut$dGeneric$dRecord from "../Contrib.Data.Argonaut.Generic.Record/index.js";
import * as Data$dArgonaut$dDecode$dClass from "../Data.Argonaut.Decode.Class/index.js";
import * as Data$dBigInt from "../Data.BigInt/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Heterogeneous$dFolding from "../Heterogeneous.Folding/index.js";
import * as JS$dUnsafe$dStringify from "../JS.Unsafe.Stringify/index.js";
import * as Marlowe$dRuntime$dWeb$dClient from "../Marlowe.Runtime.Web.Client/index.js";
import * as Marlowe$dRuntime$dWeb$dTypes from "../Marlowe.Runtime.Web.Types/index.js";
import * as Wallet from "../Wallet/index.js";
import * as WalletContext from "../WalletContext/index.js";
const $Action = (tag, _1, _2, _3) => ({tag, _1, _2, _3});
const $ContractData = _1 => ({tag: "ContractData", _1});
const $Request = (tag, _1) => ({tag, _1});
const $RuntimeRequest = (tag, _1) => ({tag, _1});
const $State = (tag, _1) => ({tag, _1});
const $WalletRequest = (tag, _1) => ({tag, _1});
const put$p = /* #__PURE__ */ Marlowe$dRuntime$dWeb$dClient.put$p(Marlowe$dRuntime$dWeb$dTypes.encodeHeadersPutContractR)(Marlowe$dRuntime$dWeb$dTypes.encodeJsonBodyPutContract)()()()();
const post$p = /* #__PURE__ */ Marlowe$dRuntime$dWeb$dClient.post$p()(Marlowe$dRuntime$dWeb$dTypes.decodeJsonPostContractsRe)(Marlowe$dRuntime$dWeb$dTypes.decodeJsonApiErrorPostCon)(/* #__PURE__ */ Contrib$dData$dArgonaut$dGeneric$dRecord.decodeRecord1()()(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2({
  reflectSymbol: () => "links"
})()()(/* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dDecode$dClass.decodeRecord(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons({
    decodeJsonField: j => {
      if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", Marlowe$dRuntime$dWeb$dTypes.decodeJsonResourceLink.decodeJson(j._1)); }
      return Data$dMaybe.Nothing;
    }
  })(Data$dArgonaut$dDecode$dClass.gDecodeJsonNil)({reflectSymbol: () => "contract"})()())();
  return {
    decodeJsonField: j => {
      if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0.decodeJson(j._1)); }
      return Data$dMaybe.Nothing;
    }
  };
})()))(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte({
  reflectSymbol: () => "resource"
})()()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil))))(Marlowe$dRuntime$dWeb$dTypes.encodeHeadersPostContract)(Marlowe$dRuntime$dWeb$dTypes.encodeJsonBodyPostContrac)()()();
const show1 = /* #__PURE__ */ (() => Marlowe$dRuntime$dWeb$dClient.showClientError(Marlowe$dRuntime$dWeb$dTypes.showPostContractsError).show)();
const FetchWalletContextRequest = value0 => $WalletRequest("FetchWalletContextRequest", value0);
const SignTxRequest = value0 => $WalletRequest("SignTxRequest", value0);
const CreateTxRequest = value0 => $RuntimeRequest("CreateTxRequest", value0);
const SubmitTxRequest = value0 => $RuntimeRequest("SubmitTxRequest", value0);
const DefiningContract = /* #__PURE__ */ $State("DefiningContract");
const FetchingRequiredWalletContext = value0 => $State("FetchingRequiredWalletContext", value0);
const CreatingTx = value0 => $State("CreatingTx", value0);
const SigningTx = value0 => $State("SigningTx", value0);
const SubmittigTx = value0 => $State("SubmittigTx", value0);
const ContractCreated = value0 => $State("ContractCreated", value0);
const WalletRequest = value0 => $Request("WalletRequest", value0);
const RuntimeRequest = value0 => $Request("RuntimeRequest", value0);
const ContractData = value0 => $ContractData(value0);
const TriggerSubmission = value0 => value1 => value2 => $Action("TriggerSubmission", value0, value1, value2);
const FetchRequiredWalletContext = /* #__PURE__ */ $Action("FetchRequiredWalletContext");
const FetchRequiredWalletContextFailed = value0 => $Action("FetchRequiredWalletContextFailed", value0);
const FetchRequiredWalletContextSucceeded = value0 => $Action("FetchRequiredWalletContextSucceeded", value0);
const CreateTx = /* #__PURE__ */ $Action("CreateTx");
const CreateTxFailed = value0 => $Action("CreateTxFailed", value0);
const CreateTxSucceeded = value0 => $Action("CreateTxSucceeded", value0);
const SignTx = /* #__PURE__ */ $Action("SignTx");
const SignTxFailed = value0 => $Action("SignTxFailed", value0);
const SignTxSucceeded = value0 => $Action("SignTxSucceeded", value0);
const SubmitTx = /* #__PURE__ */ $Action("SubmitTx");
const SubmitTxFailed = value0 => $Action("SubmitTxFailed", value0);
const SubmitTxSucceeded = /* #__PURE__ */ $Action("SubmitTxSucceeded");
const triggerSubmission = TriggerSubmission;
const submit = witnesses => serverUrl => contractEndpoint => put$p(serverUrl)(contractEndpoint)({type_: "ShelleyTxWitness BabbageEra", description: "", cborHex: witnesses});
const step = state => action => {
  if (state.tag === "DefiningContract") {
    if (action.tag === "TriggerSubmission") {
      return $State("FetchingRequiredWalletContext", {contract: action._2, tags: action._3, rolesConfig: action._1, errors: Data$dMaybe.Nothing});
    }
    return state;
  }
  if (state.tag === "FetchingRequiredWalletContext") {
    if (action.tag === "FetchRequiredWalletContextFailed") {
      return $State(
        "FetchingRequiredWalletContext",
        {contract: state._1.contract, tags: state._1.tags, rolesConfig: state._1.rolesConfig, errors: Data$dMaybe.$Maybe("Just", action._1)}
      );
    }
    if (action.tag === "FetchRequiredWalletContextSucceeded") { return $State("CreatingTx", {...state._1, reqWalletContext: action._1}); }
    return state;
  }
  if (state.tag === "CreatingTx") {
    if (state._1.errors.tag === "Just") {
      if (action.tag === "CreateTx") {
        return $State(
          "CreatingTx",
          {contract: state._1.contract, tags: state._1.tags, rolesConfig: state._1.rolesConfig, errors: Data$dMaybe.Nothing, reqWalletContext: state._1.reqWalletContext}
        );
      }
      return state;
    }
    if (action.tag === "CreateTxFailed") {
      return $State(
        "CreatingTx",
        {
          contract: state._1.contract,
          tags: state._1.tags,
          rolesConfig: state._1.rolesConfig,
          errors: Data$dMaybe.$Maybe("Just", action._1),
          reqWalletContext: state._1.reqWalletContext
        }
      );
    }
    if (action.tag === "CreateTxSucceeded") {
      return $State("SigningTx", {contract: state._1.contract, createTxResponse: action._1, errors: Data$dMaybe.Nothing, rolesConfig: state._1.rolesConfig});
    }
    return state;
  }
  if (state.tag === "SigningTx") {
    if (state._1.errors.tag === "Just") {
      if (action.tag === "SignTx") {
        return $State("SigningTx", {contract: state._1.contract, rolesConfig: state._1.rolesConfig, errors: Data$dMaybe.Nothing, createTxResponse: state._1.createTxResponse});
      }
      return state;
    }
    if (action.tag === "SignTxFailed") {
      return $State(
        "SigningTx",
        {contract: state._1.contract, rolesConfig: state._1.rolesConfig, errors: Data$dMaybe.$Maybe("Just", action._1), createTxResponse: state._1.createTxResponse}
      );
    }
    if (action.tag === "SignTxSucceeded") {
      return $State(
        "SubmittigTx",
        {contract: state._1.contract, createTxResponse: state._1.createTxResponse, errors: Data$dMaybe.Nothing, txWitnessSet: action._1, rolesConfig: state._1.rolesConfig}
      );
    }
    return state;
  }
  if (state.tag === "SubmittigTx") {
    if (state._1.errors.tag === "Just") {
      if (action.tag === "SubmitTx") {
        return $State(
          "SubmittigTx",
          {
            contract: state._1.contract,
            rolesConfig: state._1.rolesConfig,
            errors: Data$dMaybe.Nothing,
            txWitnessSet: state._1.txWitnessSet,
            createTxResponse: state._1.createTxResponse
          }
        );
      }
      return state;
    }
    if (action.tag === "SubmitTxFailed") {
      return $State(
        "SubmittigTx",
        {
          contract: state._1.contract,
          createTxResponse: state._1.createTxResponse,
          errors: Data$dMaybe.$Maybe("Just", action._1),
          txWitnessSet: state._1.txWitnessSet,
          rolesConfig: state._1.rolesConfig
        }
      );
    }
    if (action.tag === "SubmitTxSucceeded") {
      return $State("ContractCreated", {contract: state._1.contract, createTxResponse: state._1.createTxResponse, rolesConfig: state._1.rolesConfig});
    }
    return state;
  }
  if (state.tag === "ContractCreated") { return state; }
  $runtime.fail();
};
const sign = walletApi => tx => Wallet.signTx(walletApi)(tx.cborHex)(false);
const nextRequest = env => {
  const $0 = env.cardanoMultiplatformLib;
  const $1 = env.runtime;
  const $2 = env.connectedWallet;
  return v => {
    if (v.tag === "FetchingRequiredWalletContext") {
      if (v._1.errors.tag === "Nothing") {
        return Data$dMaybe.$Maybe("Just", $Request("WalletRequest", $WalletRequest("FetchWalletContextRequest", {cardanoMultiplatformLib: $0, walletInfo: $2})));
      }
      return Data$dMaybe.Nothing;
    }
    if (v.tag === "CreatingTx") {
      if (v._1.errors.tag === "Nothing") {
        return Data$dMaybe.$Maybe(
          "Just",
          $Request(
            "RuntimeRequest",
            $RuntimeRequest("CreateTxRequest", {contract: v._1.contract, tags: v._1.tags, reqWalletContext: v._1.reqWalletContext, runtime: $1, rolesConfig: v._1.rolesConfig})
          )
        );
      }
      return Data$dMaybe.Nothing;
    }
    if (v.tag === "SigningTx") {
      if (v._1.errors.tag === "Nothing") {
        return Data$dMaybe.$Maybe("Just", $Request("WalletRequest", $WalletRequest("SignTxRequest", {walletInfo: $2, tx: v._1.createTxResponse.resource.tx})));
      }
      return Data$dMaybe.Nothing;
    }
    if (v.tag === "SubmittigTx" && v._1.errors.tag === "Nothing") {
      return Data$dMaybe.$Maybe(
        "Just",
        $Request("RuntimeRequest", $RuntimeRequest("SubmitTxRequest", {txWitnessSet: v._1.txWitnessSet, createTxResponse: v._1.createTxResponse, runtime: $1}))
      );
    }
    return Data$dMaybe.Nothing;
  };
};
const initialState = DefiningContract;
const create = contractData => serverUrl => contractsEndpoint => post$p(serverUrl)(contractsEndpoint)({
  metadata: Data$dMap$dInternal.Leaf,
  roles: contractData._1.rolesConfig,
  tags: contractData._1.tags,
  contract: contractData._1.contract,
  minUTxODeposit: Data$dBigInt.fromInt(2000000),
  changeAddress: contractData._1.walletAddresses.changeAddress,
  addresses: [...contractData._1.walletAddresses.usedAddresses, contractData._1.walletAddresses.changeAddress],
  collateralUTxOs: []
});
const requestToAffAction = v => {
  if (v.tag === "WalletRequest") {
    if (v._1.tag === "FetchWalletContextRequest") {
      return Effect$dAff._bind(Effect$dAff._catchError(Effect$dAff._map(Data$dEither.Right)(WalletContext.walletContext(v._1._1.cardanoMultiplatformLib)(v._1._1.walletInfo.wallet)))(x => Effect$dAff._pure(Data$dEither.$Either(
        "Left",
        x
      ))))(possibleWalletAddresses => {
        if (possibleWalletAddresses.tag === "Left") {
          return Effect$dAff._pure($Action("FetchRequiredWalletContextFailed", Effect$dException.showErrorImpl(possibleWalletAddresses._1)));
        }
        if (possibleWalletAddresses.tag === "Right") {
          if (possibleWalletAddresses._1.tag === "Nothing") {
            return Effect$dAff._pure($Action("FetchRequiredWalletContextFailed", "Wallet context fetching failed (invalid change address?)"));
          }
          if (possibleWalletAddresses._1.tag === "Just") {
            return Effect$dAff._pure($Action(
              "FetchRequiredWalletContextSucceeded",
              {changeAddress: possibleWalletAddresses._1._1.changeAddress, usedAddresses: possibleWalletAddresses._1._1.usedAddresses}
            ));
          }
        }
        $runtime.fail();
      });
    }
    if (v._1.tag === "SignTxRequest") {
      return Effect$dAff._bind(Wallet.signTx(v._1._1.walletInfo.wallet)(v._1._1.tx.cborHex)(false))(v1 => {
        if (v1.tag === "Left") { return Effect$dAff._pure($Action("SignTxFailed", JS$dUnsafe$dStringify.unsafeStringify(v1._1))); }
        if (v1.tag === "Right") { return Effect$dAff._pure($Action("SignTxSucceeded", v1._1)); }
        $runtime.fail();
      });
    }
    $runtime.fail();
  }
  if (v.tag === "RuntimeRequest") {
    if (v._1.tag === "CreateTxRequest") {
      return Effect$dAff._bind(create($ContractData({contract: v._1._1.contract, tags: v._1._1.tags, rolesConfig: v._1._1.rolesConfig, walletAddresses: v._1._1.reqWalletContext}))(v._1._1.runtime.serverURL)(v._1._1.runtime.root))(v1 => {
        if (v1.tag === "Right") { return Effect$dAff._pure($Action("CreateTxSucceeded", v1._1)); }
        if (v1.tag === "Left") { return Effect$dAff._pure($Action("CreateTxFailed", show1(v1._1))); }
        $runtime.fail();
      });
    }
    if (v._1.tag === "SubmitTxRequest") {
      return Effect$dAff._bind(put$p(v._1._1.runtime.serverURL)(v._1._1.createTxResponse.links.contract)({
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
const driver = env => state => {
  const $0 = nextRequest(env)(state);
  if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", requestToAffAction($0._1)); }
  if ($0.tag === "Nothing") { return Data$dMaybe.Nothing; }
  $runtime.fail();
};
export {
  $Action,
  $ContractData,
  $Request,
  $RuntimeRequest,
  $State,
  $WalletRequest,
  ContractCreated,
  ContractData,
  CreateTx,
  CreateTxFailed,
  CreateTxRequest,
  CreateTxSucceeded,
  CreatingTx,
  DefiningContract,
  FetchRequiredWalletContext,
  FetchRequiredWalletContextFailed,
  FetchRequiredWalletContextSucceeded,
  FetchWalletContextRequest,
  FetchingRequiredWalletContext,
  RuntimeRequest,
  SignTx,
  SignTxFailed,
  SignTxRequest,
  SignTxSucceeded,
  SigningTx,
  SubmitTx,
  SubmitTxFailed,
  SubmitTxRequest,
  SubmitTxSucceeded,
  SubmittigTx,
  TriggerSubmission,
  WalletRequest,
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
  submit,
  triggerSubmission
};
