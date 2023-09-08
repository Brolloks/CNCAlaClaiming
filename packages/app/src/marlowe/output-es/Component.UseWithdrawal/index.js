import * as $runtime from "../runtime.js";
import * as Component$dUseWithdrawal$dMachine from "../Component.UseWithdrawal.Machine/index.js";
import * as Contrib$dEffect$dException from "../Contrib.Effect.Exception/index.js";
import * as Contrib$dReact$dBasic$dHooks$dUseMooreMachine from "../Contrib.React.Basic.Hooks.UseMooreMachine/index.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dArgonaut$dEncode$dClass from "../Data.Argonaut.Encode.Class/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Foreign$dInternal$dStringify from "../Foreign.Internal.Stringify/index.js";
import * as Partial from "../Partial/index.js";
import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const $HookStatus = (tag, _1) => ({tag, _1});
const encodeJson1 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
    reflectSymbol: () => "tag"
  })())({reflectSymbol: () => "msg"})())({reflectSymbol: () => "info"})();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const identity = x => x;
const pure1 = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const Initializing = value0 => $HookStatus("Initializing", value0);
const InitializationFailed = value0 => $HookStatus("InitializationFailed", value0);
const AwaitingWithdrawalTrigger = value0 => $HookStatus("AwaitingWithdrawalTrigger", value0);
const ProcessingWithdrawal = value0 => $HookStatus("ProcessingWithdrawal", value0);
const WithdrawalFailed = value0 => $HookStatus("WithdrawalFailed", value0);
const WithdrawalSucceeded = value0 => $HookStatus("WithdrawalSucceeded", value0);
const FatalError = value0 => $HookStatus("FatalError", value0);
const UseWithdrawal = x => x;
const newtypeUseWithdrawal_ = {Coercible0: () => {}};
const payoutReferenceInputForNetwork = network => {
  if (network === "mainnet") { return {txId: "672399f7d551d6e06fda70769f830e4e3783495c6250567c6ae97ecc788ad5a4", txIx: 2}; }
  if (network === "preprod") { return {txId: "9a8a6f387a3330b4141e1cb019380b9ac5c72151c0abc52aa4266245d3c555cd", txIx: 2}; }
  if (network === "preview") { return {txId: "69bfdb7cd911e930bfa073a8c45121e7690939d7680196181731d0dd609ecb73", txIx: 2}; }
  return Partial._crashWith("Blockfrost.payoutReferenceInput: Unknown network");
};
const noInfoError = tag => msg => ({tag, msg, info: Data$dArgonaut$dCore.jsonNull});
const machineStateToHookStatus = trigger => v => {
  if (v.tag === "Initializing") {
    if (v._2.tag === "Nothing") { return $HookStatus("Initializing", "Setup"); }
    if (v._2.tag === "Just") { return $HookStatus("InitializationFailed", {tag: "InitializeError", msg: v._2._1, info: Data$dArgonaut$dCore.jsonNull}); }
    $runtime.fail();
  }
  if (v.tag === "FetchingPayoutUTxO") {
    if (v._2.tag === "Nothing") { return $HookStatus("Initializing", "FetchingPayoutUTxO"); }
    if (v._2.tag === "Just") { return $HookStatus("InitializationFailed", {tag: "FetchPayoutUTxOError", msg: v._2._1, info: Data$dArgonaut$dCore.jsonNull}); }
    $runtime.fail();
  }
  if (v.tag === "FindingRoleTokenUTxO") {
    if (v._2.tag === "Nothing") { return $HookStatus("Initializing", "FindingRoleTokenUTxO"); }
    if (v._2.tag === "Just") { return $HookStatus("InitializationFailed", {tag: "FindRoleTokenUTxOError", msg: v._2._1, info: Data$dArgonaut$dCore.jsonNull}); }
    $runtime.fail();
  }
  if (v.tag === "PayoutUTxOStatusChecking") {
    if (v._2.tag === "Nothing") { return $HookStatus("Initializing", "PayoutUTxOStatusChecking"); }
    if (v._2.tag === "Just") {
      return $HookStatus(
        "InitializationFailed",
        (() => {
          if (v._2._1.tag === "PayoutUTxOStatusCheckingError") { return {tag: "PayoutUTxOStatusCheckError", msg: v._2._1._1, info: Data$dArgonaut$dCore.jsonNull}; }
          if (v._2._1.tag === "PayoutUTxOAlreadySpent") {
            return {tag: "PayoutUTxOAlreadySpentError", msg: "Payout UTxO already spent", info: Data$dArgonaut$dCore.fromString(v._2._1._1)};
          }
          $runtime.fail();
        })()
      );
    }
    $runtime.fail();
  }
  if (v.tag === "AwaitingWithdrawalTrigger") { return $HookStatus("AwaitingWithdrawalTrigger", trigger); }
  if (v.tag === "GrabbingCollateralUTxOs") {
    if (v._2.tag === "Nothing") { return $HookStatus("ProcessingWithdrawal", "GrabbingCollateralUTxOs"); }
    if (v._2.tag === "Just") {
      return $HookStatus("WithdrawalFailed", {error: {tag: "GrabCollateralUTxOsError", msg: v._2._1, info: Data$dArgonaut$dCore.jsonNull}, retry: trigger});
    }
    $runtime.fail();
  }
  if (v.tag === "BuildingTx") {
    if (v._2.tag === "Nothing") { return $HookStatus("ProcessingWithdrawal", "BuildingTx"); }
    if (v._2.tag === "Just") { return $HookStatus("WithdrawalFailed", {error: {tag: "BuildTxError", msg: v._2._1, info: Data$dArgonaut$dCore.jsonNull}, retry: trigger}); }
    $runtime.fail();
  }
  if (v.tag === "SigningTx") {
    if (v._2.tag === "Nothing") { return $HookStatus("ProcessingWithdrawal", "SigningTx"); }
    if (v._2.tag === "Just") {
      return $HookStatus(
        "WithdrawalFailed",
        {
          error: (() => {
            if (v._2._1.tag === "UserAborted") { return {tag: "UserAbortedError", msg: "User aborted signing operation", info: Data$dArgonaut$dCore.jsonNull}; }
            if (v._2._1.tag === "SignTxOperationError") { return {tag: "SignTxOperationError", msg: "Some error occured while signing the transaction", info: v._2._1._1}; }
            $runtime.fail();
          })(),
          retry: trigger
        }
      );
    }
    $runtime.fail();
  }
  if (v.tag === "SubmittingTx") {
    if (v._2.tag === "Nothing") { return $HookStatus("ProcessingWithdrawal", "SubmittingTx"); }
    if (v._2.tag === "Just") {
      return $HookStatus(
        "WithdrawalFailed",
        {
          retry: trigger,
          error: (() => {
            if (v._2._1.tag === "WalletSubmitTxError") { return {tag: "WalletSubmitTxError", msg: v._2._1._1.msg, info: v._2._1._1.info}; }
            if (v._2._1.tag === "WitnessKeySetupFailed") { return {tag: "WitnessKeySetupFailed", msg: v._2._1._1, info: Data$dArgonaut$dCore.jsonNull}; }
            if (v._2._1.tag === "BlockfrostSubmitTxError") { return {tag: "BlockfrostSubmitTxError", msg: v._2._1._1.msg, info: v._2._1._1.info}; }
            $runtime.fail();
          })()
        }
      );
    }
    $runtime.fail();
  }
  if (v.tag === "TxCreated") { return $HookStatus("WithdrawalSucceeded", v._1); }
  if (v.tag === "DriverFailure") {
    return $HookStatus(
      "FatalError",
      {
        tag: "FatalError",
        info: Contrib$dEffect$dException.errorToJson(v._1.error),
        msg: "An unhandled exception during execution with internal state: " + Foreign$dInternal$dStringify.unsafeStringify(v._1.state)
      }
    );
  }
  $runtime.fail();
};
const encodeTsHookStatus = v => {
  if (v.tag === "Initializing") { return {status: "Initializing", step: v._1}; }
  if (v.tag === "InitializationFailed") { return {status: "InitializationFailed", error: encodeJson1(v._1)}; }
  if (v.tag === "AwaitingWithdrawalTrigger") { return {status: "AwaitingWithdrawalTrigger", trigger: v._1}; }
  if (v.tag === "ProcessingWithdrawal") { return {status: "ProcessingWithdrawal", msg: v._1}; }
  if (v.tag === "WithdrawalFailed") { return {status: "WithdrawalFailed", error: encodeJson1(v._1.error), retry: v._1.retry}; }
  if (v.tag === "WithdrawalSucceeded") { return {status: "WithdrawalSucceeded", txId: Data$dArgonaut$dCore.fromString(v._1)}; }
  if (v.tag === "FatalError") { return {status: "FatalError", error: encodeJson1(v._1)}; }
  $runtime.fail();
};
const useWithdrawal = ctx => {
  const $0 = Contrib$dReact$dBasic$dHooks$dUseMooreMachine.useMooreMachine({
    initialState: Component$dUseWithdrawal$dMachine.$State("Initializing", ctx, Data$dMaybe.Nothing),
    driver: Component$dUseWithdrawal$dMachine.driver,
    output: identity,
    step: Component$dUseWithdrawal$dMachine.step
  });
  return () => {
    const a = $0();
    const $1 = a.applyAction(Component$dUseWithdrawal$dMachine.Trigger);
    React$dBasic$dHooks.useEffect_(
      ($2, $3) => true,
      undefined,
      () => {
        $1();
        return () => {};
      }
    );
    return pure1({
      status: encodeTsHookStatus(machineStateToHookStatus(a.applyAction(Component$dUseWithdrawal$dMachine.WithdrawalTrigger))(a.state)),
      reset: newCtx => {
        const $2 = a.reset(Data$dMaybe.$Maybe(
          "Just",
          {
            initialState: Component$dUseWithdrawal$dMachine.$State("Initializing", newCtx, Data$dMaybe.Nothing),
            driver: Component$dUseWithdrawal$dMachine.driver,
            output: identity,
            step: Component$dUseWithdrawal$dMachine.step
          }
        ));
        return () => {
          const applyAction$p = $2();
          applyAction$p(Component$dUseWithdrawal$dMachine.Trigger)();
        };
      }
    })();
  };
};
export {
  $HookStatus,
  AwaitingWithdrawalTrigger,
  FatalError,
  InitializationFailed,
  Initializing,
  ProcessingWithdrawal,
  UseWithdrawal,
  WithdrawalFailed,
  WithdrawalSucceeded,
  encodeJson1,
  encodeTsHookStatus,
  identity,
  machineStateToHookStatus,
  newtypeUseWithdrawal_,
  noInfoError,
  payoutReferenceInputForNetwork,
  pure1,
  useWithdrawal
};
