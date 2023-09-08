import * as $runtime from "../runtime.js";
import * as CardanoMultiplatformLib from "../CardanoMultiplatformLib/index.js";
import * as Component$dBodyLayout from "../Component.BodyLayout/index.js";
import * as Component$dCreateContract$dMachine from "../Component.CreateContract.Machine/index.js";
import * as Component$dMarloweYaml from "../Component.MarloweYaml/index.js";
import * as Component$dWidgets from "../Component.Widgets/index.js";
import * as Contrib$dPolyform$dFormSpecBuilder from "../Contrib.Polyform.FormSpecBuilder/index.js";
import * as Contrib$dPolyform$dFormSpecs$dStatelessFormSpec from "../Contrib.Polyform.FormSpecs.StatelessFormSpec/index.js";
import * as Contrib$dReact$dBasic$dHooks$dUseMooreMachine from "../Contrib.React.Basic.Hooks.UseMooreMachine/index.js";
import * as Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders from "../Contrib.ReactBootstrap.FormSpecBuilders.StatelessFormSpecBuilders/index.js";
import * as Control$dCategory from "../Control.Category/index.js";
import * as Control$dMonad$dMaybe$dTrans from "../Control.Monad.Maybe.Trans/index.js";
import * as Control$dMonad$dReader$dTrans from "../Control.Monad.Reader.Trans/index.js";
import * as Control$dPromise from "../Control.Promise/index.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dArgonaut$dDecode$dError from "../Data.Argonaut.Decode.Error/index.js";
import * as Data$dArgonaut$dDecode$dParser from "../Data.Argonaut.Decode.Parser/index.js";
import * as Data$dArgonaut$dEncode$dClass from "../Data.Argonaut.Encode.Class/index.js";
import * as Data$dArgonaut$dEncode$dEncoders from "../Data.Argonaut.Encode.Encoders/index.js";
import * as Data$dBigInt from "../Data.BigInt/index.js";
import * as Data$dBigInt$dArgonaut from "../Data.BigInt.Argonaut/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Data$dNumber from "../Data.Number/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dSemigroup from "../Data.Semigroup/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dClass from "../Effect.Class/index.js";
import * as Effect$dNow from "../Effect.Now/index.js";
import * as JS$dUnsafe$dStringify from "../JS.Unsafe.Stringify/index.js";
import * as Language$dMarlowe$dCore$dV1$dSemantics$dTypes from "../Language.Marlowe.Core.V1.Semantics.Types/index.js";
import * as Marlowe$dRuntime$dWeb$dTypes from "../Marlowe.Runtime.Web.Types/index.js";
import * as Partial from "../Partial/index.js";
import * as React$dBasic from "../React.Basic/index.js";
import * as React$dBasic$dDOM$dGenerated from "../React.Basic.DOM.Generated/index.js";
import * as React$dBasic$dDOM$dSimplified$dGenerated from "../React.Basic.DOM.Simplified.Generated/index.js";
import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as React$dBasic$dHooks$dUseStatelessFormSpec from "../React.Basic.Hooks.UseStatelessFormSpec/index.js";
import * as Record$dUnsafe$dUnion from "../Record.Unsafe.Union/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Web$dFile$dFileList from "../Web.File.FileList/index.js";
import * as Web$dHTML$dHTMLInputElement from "../Web.HTML.HTMLInputElement/index.js";
import * as Web$dInternal$dFFI from "../Web.Internal.FFI/index.js";
import {_loadFile} from "./foreign.js";
const $CurrentRun = (tag, _1) => ({tag, _1});
const fromFoldable = /* #__PURE__ */ Data$dMap$dInternal.fromFoldable(Data$dOrd.ordString)(Data$dFoldable.foldableArray);
const $$for = /* #__PURE__ */ (() => {
  const traverse2 = Data$dTraversable.traversableArray.traverse(Contrib$dPolyform$dFormSpecBuilder.applicativeFormSpecBuilde(Data$dIdentity.monadIdentity)(Contrib$dPolyform$dFormSpecs$dStatelessFormSpec.applicativeStatelessFormS(Effect.monadEffect)(Data$dMonoid.monoidArray)));
  return x => f => traverse2(f)(x);
})();
const defaultsRecord = {defaults: b => a => Record$dUnsafe$dUnion.unsafeUnionFn(a, b)};
const textInput = /* #__PURE__ */ Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.textInput(Data$dIdentity.monadIdentity)(Effect.monadEffect)(defaultsRecord);
const bind = /* #__PURE__ */ (() => Control$dMonad$dReader$dTrans.bindReaderT(Effect.bindEffect).bind)();
const asks = /* #__PURE__ */ (() => {
  const monadReaderT1 = Control$dMonad$dReader$dTrans.monadReaderT(Effect.monadEffect);
  return f => monadReaderT1.Bind1().Apply0().Functor0().map(f)(Effect.pureE);
})();
const liftEffect = /* #__PURE__ */ (() => Control$dMonad$dReader$dTrans.monadEffectReader(Effect$dClass.monadEffectEffect).liftEffect)();
const pure1 = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const bind2 = /* #__PURE__ */ (() => Control$dMonad$dMaybe$dTrans.bindMaybeT(Effect.monadEffect).bind)();
const liftEffect1 = /* #__PURE__ */ (() => Control$dMonad$dMaybe$dTrans.monadEffectMaybe(Effect$dClass.monadEffectEffect).liftEffect)();
const input = /* #__PURE__ */ React$dBasic.element(React$dBasic$dDOM$dGenerated._input$p);
const apply = /* #__PURE__ */ (() => Contrib$dPolyform$dFormSpecBuilder.applyFormSpecBuilderT(Data$dIdentity.monadIdentity)(Contrib$dPolyform$dFormSpecs$dStatelessFormSpec.applyStatelessFormSpec(Effect.monadEffect)(Data$dSemigroup.semigroupArray)).apply)();
const textArea = /* #__PURE__ */ Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.textArea(Data$dIdentity.monadIdentity)(Effect.monadEffect)(defaultsRecord);
const encodeJson1 = /* #__PURE__ */ (() => Data$dArgonaut$dEncode$dClass.encodeJsonArray(Data$dArgonaut$dEncode$dClass.encodeJsonJson).encodeJson)();
const booleanField = /* #__PURE__ */ Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.booleanField(Effect.monadEffect)(Data$dIdentity.monadIdentity)();
const useEffect = /* #__PURE__ */ React$dBasic$dHooks.useEffect({
  eq: x => y => {
    if (x.tag === "Nothing") { return y.tag === "Nothing"; }
    return x.tag === "Just" && y.tag === "Just" && x._1 === y._1;
  }
});
const div4 = /* #__PURE__ */ React$dBasic.element(React$dBasic$dDOM$dGenerated._div$p);
const gEncodeJsonCons4 = /* #__PURE__ */ Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(/* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
    reflectSymbol: () => "address"
  })();
  return {encodeJson: rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy))};
})());
const thenIsSymbol = {reflectSymbol: () => "then"};
const caseIsSymbol = {reflectSymbol: () => "case"};
const whenIsSymbol = {reflectSymbol: () => "when"};
const timeout_continuationIsSymbol = {reflectSymbol: () => "timeout_continuation"};
const timeoutIsSymbol = {reflectSymbol: () => "timeout"};
const encodeJson3 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons({encodeJson: Data$dArgonaut$dEncode$dEncoders.encodeMaybe(Data$dBigInt$dArgonaut.encodeJsonBitInt.encodeJson)})(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonArray((() => {
    const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons((() => {
      const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonInt)(gEncodeJsonCons4(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons((() => {
        const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
          reflectSymbol: () => "token_name"
        })())({reflectSymbol: () => "currency_symbol"})();
        return {encodeJson: rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy))};
      })())(gEncodeJsonCons4(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({reflectSymbol: () => "party"})())({reflectSymbol: () => "of_token"})())({
        reflectSymbol: () => "into_account"
      })())({reflectSymbol: () => "deposits"})();
      return {encodeJson: rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy))};
    })())(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons((() => {
      const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons({encodeJson: Data$dArgonaut$dEncode$dEncoders.encodeMaybe(Data$dBigInt$dArgonaut.encodeJsonBitInt.encodeJson)})(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonArray((() => {
        const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons((() => {
          const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonArray((() => {
            const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonInt)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonInt)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
              reflectSymbol: () => "to"
            })())({reflectSymbol: () => "from"})();
            return {encodeJson: rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy))};
          })()))(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons((() => {
            const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(gEncodeJsonCons4(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
              reflectSymbol: () => "choice_owner"
            })())({reflectSymbol: () => "choice_name"})();
            return {encodeJson: rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy))};
          })())(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({reflectSymbol: () => "for_choice"})())({reflectSymbol: () => "choose_between"})();
          return {encodeJson: rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy))};
        })())(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons((() => {
          const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons({encodeJson: Data$dArgonaut$dEncode$dEncoders.encodeMaybe(Data$dBigInt$dArgonaut.encodeJsonBitInt.encodeJson)})(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonArray((() => {
            const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons((() => {
              const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJBoolean)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
                reflectSymbol: () => "notify_if"
              })();
              return {encodeJson: rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy))};
            })())(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(thenIsSymbol)())(caseIsSymbol)();
            return {encodeJson: rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy))};
          })()))(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(whenIsSymbol)())(timeout_continuationIsSymbol)())(timeoutIsSymbol)();
          return {encodeJson: rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy))};
        })())(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(thenIsSymbol)())(caseIsSymbol)();
        return {encodeJson: rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy))};
      })()))(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(whenIsSymbol)())(timeout_continuationIsSymbol)())(timeoutIsSymbol)();
      return {encodeJson: rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy))};
    })())(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(thenIsSymbol)())(caseIsSymbol)();
    return {encodeJson: rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy))};
  })()))(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(whenIsSymbol)())(timeout_continuationIsSymbol)())(timeoutIsSymbol)();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const StepIndex = x => x;
const Automatic = /* #__PURE__ */ $CurrentRun("Automatic");
const Manual = value0 => $CurrentRun("Manual", value0);
const AutoRun = x => x;
const three = /* #__PURE__ */ Data$dBigInt.fromInt(3);
const stateToTitle = state => {
  if (state.tag === "DefiningContract") { return "Defining contract"; }
  if (state.tag === "FetchingRequiredWalletContext") { return "Fetching required wallet context"; }
  if (state.tag === "CreatingTx") { return "Creating transaction"; }
  if (state.tag === "SigningTx") { return "Signing transaction"; }
  if (state.tag === "SubmittigTx") { return "Submitting transaction"; }
  if (state.tag === "ContractCreated") { return "Contract created"; }
  $runtime.fail();
};
const stateToDetailedDescription = state => {
  if (state.tag === "DefiningContract") {
    return React$dBasic$dDOM$dGenerated.div1({
      children: [
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
          children: ["We are currently in the initial state, awaiting the user to initiate the contract creation process."]
        }),
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
          children: ["When we receive the correct contract value in JSON format, it will be utilized as part of the request to the Marlowe runtime"]
        }),
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: ["As a user, you have two options for providing the contract:"]}),
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalul$p)({
          children: [
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalli$p)({children: ["Enter a valid contract in JSON format in the input field to the right"]}),
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalli$p)({children: ["Upload a contract JSON file using the \"Upload\" button."]})
          ]
        }),
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: ["How to Provide a Contract in JSON Format:"], className: "h3 fw-bold py-3"}),
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
          children: [
            "Please provide a contract in a JSON format. To generate it, you can use a Marlowe library for your language of choice (for example, ",
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internala$p)({
              children: [" marlowe-ts-sdk"],
              className: "white-color",
              href: "https://github.com/input-output-hk/marlowe-ts-sdk",
              target: "_blank"
            }),
            "), or you can use the ",
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internala$p)({
              children: [" Marlowe Playground"],
              className: "white-color",
              href: "https://play.marlowe.iohk.io/#/",
              target: "_blank"
            }),
            " to generate it. After creating a contract in the simulator within the Marlowe Playground, you can use the \"Download JSON\" button to obtain the contract in JSON format. Once you have the JSON file, you can either enter it in the input field to the right or upload it using the \"Upload\" button."
          ]
        })
      ]
    });
  }
  if (state.tag === "FetchingRequiredWalletContext") {
    if (state._1.errors.tag === "Nothing") {
      return React$dBasic$dDOM$dGenerated.div1({
        children: [
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
            children: ["We are currently fetching the required wallet context for creating the Marlowe Contract on chain."]
          }),
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
            children: [
              "The marlowe-runtime requires information about wallet addresses in order to select the appropriate UTxOs to pay for the initial transaction. To obtain the set of addresses from the wallet, we utilize the ",
              React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalcode$p)({children: ["getUsedAddresses"]}),
              " method from CIP-30. The addresses are then re-encoded from the lower-level Cardano CBOR hex format into Bech32 format (",
              React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalcode$p)({children: ["addr_test..."]}),
              ")."
            ]
          }),
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
            children: ["Please wait while we fetch the wallet context. This process may take a few moments."]
          })
        ]
      });
    }
    if (state._1.errors.tag === "Just") {
      return React$dBasic$dDOM$dGenerated.div1({
        children: [
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
            children: ["It seems that the provided wallet is lacking addresses or failed to execute the method:"]
          }),
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: [state._1.errors._1]})
        ]
      });
    }
    $runtime.fail();
  }
  if (state.tag === "CreatingTx") {
    if (state._1.errors.tag === "Nothing") {
      return React$dBasic$dDOM$dGenerated.div1({
        children: [
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
            children: [
              "Utilizing the Marlowe-runtime, this interface enables you to generate an initial transaction. The generated transaction needs to be signed using the wallet you've connected. By doing so, you are authorizing and verifying the transaction's intent and ensuring its secure execution."
            ]
          }),
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
            children: ["Please review all the details carefully before proceeding with the transaction confirmation."]
          })
        ]
      });
    }
    if (state._1.errors.tag === "Just") {
      return React$dBasic$dDOM$dGenerated.div1({
        children: [
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: ["It seems that the marlowe-runtime failed to create the initial transaction:"]}),
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: [state._1.errors._1]}),
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: ["The wallet context we used:"]}),
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: [JS$dUnsafe$dStringify.unsafeStringify(state._1.reqWalletContext)]})
        ]
      });
    }
    $runtime.fail();
  }
  if (state.tag === "SigningTx") {
    if (state._1.errors.tag === "Nothing") {
      return React$dBasic$dDOM$dGenerated.div1({
        children: [
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
            children: [
              "You are currently in the process of digitally signing your initial transaction. This step is critical in validating the transaction's authenticity, confirming that it has indeed originated from you. By signing, you are ensuring the transaction's integrity and non-repudiation."
            ]
          }),
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
            children: ["Carefully review all details to confirm they are correct before finalizing your signature."]
          })
        ]
      });
    }
    if (state._1.errors.tag === "Just") {
      return React$dBasic$dDOM$dGenerated.div1({
        children: [
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: ["It seems that the wallet failed to sign the initial transaction:"]}),
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: [state._1.errors._1]})
        ]
      });
    }
    $runtime.fail();
  }
  if (state.tag === "SubmittigTx") {
    if (state._1.errors.tag === "Nothing") {
      return React$dBasic$dDOM$dGenerated.div1({
        children: [
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
            children: [
              "You have now reached the transaction submission phase. Having signed your initial transaction, it's time to submit it into the system for processing. This step essentially sends the transaction to the network where it's queued for inclusion in the blockchain. Please ensure all details are correct. Once submitted, the transaction is irreversible and will be permanently recorded."
            ]
          }),
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
            children: ["Your transaction journey is almost complete. Press 'Submit' when you are ready."]
          })
        ]
      });
    }
    if (state._1.errors.tag === "Just") {
      return React$dBasic$dDOM$dGenerated.div1({
        children: [
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: ["It seems that the marlowe-runtime failed to submit the initial transaction:"]}),
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: [state._1.errors._1]})
        ]
      });
    }
    $runtime.fail();
  }
  if (state.tag === "ContractCreated") {
    return React$dBasic$dDOM$dGenerated.div1({
      children: [
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
          children: [
            "Congratulations! Your contract has been successfully created and recorded on the blockchain. This marks the successful completion of your transaction, now encapsulated into a secure, immutable contract. From here, the contract's terms will govern the further actions and transactions. You may want to keep a record of the contract details for future reference. Remember, the blockchain's nature of immutability makes this contract permanent and transparent."
          ]
        }),
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
          children: ["Thank you for using our platform, and feel free to create more contracts as needed."]
        })
      ]
    });
  }
  $runtime.fail();
};
const stateToDescription = state => {
  if (state.tag === "DefiningContract") { return "Please define your contract."; }
  if (state.tag === "FetchingRequiredWalletContext") {
    if (state._1.errors.tag === "Nothing") { return "Fetching required wallet context."; }
    if (state._1.errors.tag === "Just") { return "Fetching required wallet context failed: " + state._1.errors._1; }
    $runtime.fail();
  }
  if (state.tag === "CreatingTx") {
    if (state._1.errors.tag === "Nothing") { return "Creating transaction."; }
    if (state._1.errors.tag === "Just") { return "Creating transaction failed: " + state._1.errors._1; }
    $runtime.fail();
  }
  if (state.tag === "SigningTx") {
    if (state._1.errors.tag === "Nothing") { return "Signing transaction."; }
    if (state._1.errors.tag === "Just") { return "Signing transaction failed: " + state._1.errors._1; }
    $runtime.fail();
  }
  if (state.tag === "SubmittigTx") {
    if (state._1.errors.tag === "Nothing") { return "Submitting transaction."; }
    if (state._1.errors.tag === "Just") { return "Submitting transaction failed: " + state._1.errors._1; }
    $runtime.fail();
  }
  if (state.tag === "ContractCreated") { return "Contract created."; }
  $runtime.fail();
};
const runLiteTag = "run-lite";
const mkRolesConfigForm = roleNames => cardanoMultiplatformLib => {
  const $0 = $$for(roleNames)(roleName => {
    const $0 = textInput({
      missingError: "Please provide an address for a role token",
      helpText: Data$dMaybe.$Maybe("Just", React$dBasic$dDOM$dGenerated.div1({children: ["Role token destination address"]})),
      initial: "",
      label: Data$dMaybe.$Maybe("Just", roleName),
      touched: false,
      validator: i => {
        if (i.tag === "Nothing") { return () => Data$dEither.$Either("Left", ["This field is required"]); }
        if (i.tag === "Just") {
          return () => {
            const a$p = CardanoMultiplatformLib.bech32FromString(cardanoMultiplatformLib)(i._1)();
            return (() => {
              if (a$p.tag === "Nothing") { return Data$dEither.$Either("Left", ["Invalid address"]); }
              if (a$p.tag === "Just") { return Data$dEither.$Either("Right", a$p._1); }
              $runtime.fail();
            })();
          };
        }
        $runtime.fail();
      }
    });
    return x => {
      const $1 = $0(x);
      return s => {
        const $2 = $1(s);
        return Data$dTuple.$Tuple(
          (() => {
            const $3 = $2._1;
            return {
              fields: $3.fields,
              validator: x$1 => {
                const $4 = $3.validator(x$1);
                return () => {
                  const a$p = $4();
                  return (() => {
                    if (a$p.tag === "Left") { return Data$dEither.$Either("Left", a$p._1); }
                    if (a$p.tag === "Right") {
                      return Data$dEither.$Either("Right", Data$dTuple.$Tuple(roleName, Marlowe$dRuntime$dWeb$dTypes.$RoleTokenConfig("RoleTokenSimple", a$p._1)));
                    }
                    $runtime.fail();
                  })();
                };
              },
              render: $3.render
            };
          })(),
          $2._2
        );
      };
    };
  })(Data$dMaybe.Nothing)(0)._1;
  return {
    fields: $0.fields,
    validator: x => {
      const $1 = $0.validator(x);
      return () => {
        const a$p = $1();
        return (() => {
          if (a$p.tag === "Left") { return Data$dEither.$Either("Left", a$p._1); }
          if (a$p.tag === "Right") { return Data$dEither.$Either("Right", Marlowe$dRuntime$dWeb$dTypes.$RolesConfig("Mint", fromFoldable(a$p._1))); }
          $runtime.fail();
        })();
      };
    },
    render: $0.render
  };
};
const mkRoleTokensComponent = /* #__PURE__ */ bind(/* #__PURE__ */ asks(v => v.cardanoMultiplatformLib))(cardanoMultiplatformLib => liftEffect(React$dBasic$dHooks.component("RoleTokensAssignment")(v => {
  const $0 = v.onDismiss;
  const formSpec = mkRolesConfigForm(v.roleNames)(cardanoMultiplatformLib);
  const $1 = React$dBasic$dHooks$dUseStatelessFormSpec.useStatelessFormSpec({
    spec: formSpec,
    onSubmit: x => {
      if (x.result.tag === "Just" && x.result._1._1.tag === "Right") { return v.onSuccess(x.result._1._1._1); }
      return () => {};
    },
    validationDebounce: 0.5
  });
  return () => {
    const a = $1();
    return pure1(Component$dBodyLayout.wrappedContentWithFooter(React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
      children: formSpec.render(a.formState),
      className: "form-group"
    }))(React$dBasic.fragment([
      React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
        children: [
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
            children: [Component$dWidgets.link(defaultsRecord)({label: "Cancel", onClick: $0, showBorders: true, extraClassNames: "me-3"})],
            className: "col-6 text-start"
          }),
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
            children: [
              React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalbutton$p)({
                children: ["Ok"],
                className: "btn btn-primary",
                disabled: a.result.tag === "Just" ? a.result._1._1.tag !== "Right" : true,
                onClick: a.onSubmit
              })
            ],
            className: "col-6 text-end"
          })
        ],
        className: "row"
      })
    ])))();
  };
})));
const machineStepsCardinality = 7;
const machineStateToStepIndex = state => {
  if (state.tag === "DefiningContract") { return 1; }
  if (state.tag === "FetchingRequiredWalletContext") { return 3; }
  if (state.tag === "CreatingTx") { return 4; }
  if (state.tag === "SigningTx") { return 5; }
  if (state.tag === "SubmittigTx") { return 6; }
  if (state.tag === "ContractCreated") { return 7; }
  $runtime.fail();
};
const machineProps = dictCategory => {
  const identity = dictCategory.identity;
  return v => connectedWallet => cardanoMultiplatformLib => runtime => (
    {
      initialState: Component$dCreateContract$dMachine.DefiningContract,
      step: Component$dCreateContract$dMachine.step,
      driver: v ? Component$dCreateContract$dMachine.driver({connectedWallet, cardanoMultiplatformLib, runtime}) : v$1 => Data$dMaybe.Nothing,
      output: identity
    }
  );
};
const machineProps1 = /* #__PURE__ */ machineProps(Control$dCategory.categoryFn);
const loadFile = /* #__PURE__ */ (() => {
  const $0 = Effect$dAff._map(Data$dNullable.toMaybe);
  return x => $0(Control$dPromise.toAff$p(Control$dPromise.coerce)(_loadFile(x)));
})();
const hoistMaybe = dictApplicative => x => dictApplicative.pure(x);
const mkLoadFileButtonComponent = /* #__PURE__ */ liftEffect(/* #__PURE__ */ React$dBasic$dHooks.component("LoadFileButton")(v => () => {
  const a = React$dBasic$dHooks.useRef_(Data$dNullable.null);
  return pure1(input({
    type: "file",
    onChange: (() => {
      const $0 = bind2((() => {
        const $0 = React$dBasic$dHooks.readRef(a);
        return () => {
          const a$p = $0();
          return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
        };
      })())(v2 => bind2((() => {
        const $0 = Web$dInternal$dFFI._unsafeReadProtoTagged(Data$dMaybe.Nothing, Data$dMaybe.Just, "HTMLInputElement", v2);
        return () => $0;
      })())(v3 => bind2((() => {
        const $0 = Web$dHTML$dHTMLInputElement._files(v3);
        return () => {
          const a$p = $0();
          return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
        };
      })())(v4 => bind2((() => {
        const $0 = Data$dNullable.nullable(Web$dFile$dFileList._item(0)(v4), Data$dMaybe.Nothing, Data$dMaybe.Just);
        return () => $0;
      })())(v5 => liftEffect1((() => {
        const $0 = Effect$dAff._makeFiber(Effect$dAff.ffiUtil, Effect$dAff._bind(loadFile(v5))(x => Effect$dAff._liftEffect(v.onFileload(x))));
        return () => {
          const fiber = $0();
          fiber.run();
        };
      })())))));
      return v$1 => {
        const a$p = $0();
        return (() => {
          if (a$p.tag === "Nothing") { return; }
          if (a$p.tag === "Just") { return a$p._1; }
          $runtime.fail();
        })();
      };
    })(),
    ref: a
  }))();
}));
const four = /* #__PURE__ */ Data$dBigInt.fromInt(4);
const mkMultiChoiceTest = bech32 => timeout => Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Contract(
  "When",
  [
    Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Case(
      "Case",
      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Action(
        "Choice",
        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$ChoiceId("Everything is alright", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Address", bech32)),
        [Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Bound(Data$dBigInt.semiringBigInt.zero, Data$dBigInt.semiringBigInt.zero)]
      ),
      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Close
    ),
    Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Case(
      "Case",
      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Action(
        "Choice",
        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$ChoiceId("Report problem", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Address", bech32)),
        [Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Bound(Data$dBigInt.semiringBigInt.one, Data$dBigInt.semiringBigInt.one)]
      ),
      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Close
    ),
    Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Case(
      "Case",
      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Action(
        "Choice",
        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$ChoiceId("Choice between 1-3", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Address", bech32)),
        [Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Bound(Data$dBigInt.semiringBigInt.one, three)]
      ),
      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Close
    ),
    Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Case(
      "Case",
      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Action(
        "Choice",
        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$ChoiceId("Choice between 1-4", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Address", bech32)),
        [Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Bound(Data$dBigInt.semiringBigInt.one, four)]
      ),
      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Close
    )
  ],
  timeout,
  Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Close
);
const mkInitialContracts = bech32 => () => {
  const nowMilliseconds = Effect$dNow.now();
  return {
    multiChoiceTest: mkMultiChoiceTest(bech32)((() => {
      const $0 = nowMilliseconds + Data$dInt.toNumber(1200000);
      if ($0 >= -8639977881600000.0 && $0 <= 8639977881599999.0) { return $0; }
      return Partial._crashWith("Invalid instant");
    })())
  };
};
const contractFieldId = "contract-json";
const mkContractFormSpec = v => apply(apply((() => {
  const $0 = textArea({
    missingError: "Please provide contract terms JSON value",
    initial: (() => {
      if (v._1.tag === "Nothing") { return ""; }
      if (v._1.tag === "Just") { return Data$dArgonaut$dCore.stringifyWithIndent(2)(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.encodeJsonContract.encodeJson(v._1._1)); }
      $runtime.fail();
    })(),
    label: Data$dMaybe.$Maybe("Just", "Contract JSON"),
    touched: (() => {
      if (v._1.tag === "Nothing") { return false; }
      if (v._1.tag === "Just") { return true; }
      $runtime.fail();
    })(),
    validator: i => {
      if (i.tag === "Nothing") { return () => Data$dEither.$Either("Left", ["This field is required"]); }
      if (i.tag === "Just") {
        return () => {
          const $0 = Data$dArgonaut$dDecode$dParser.parseJson(i._1);
          if ($0.tag === "Left") { return Data$dEither.$Either("Left", ["Invalid JSON"]); }
          if ($0.tag === "Right") {
            const $1 = Language$dMarlowe$dCore$dV1$dSemantics$dTypes.decodeJsonContract.decodeJson($0._1);
            if ($1.tag === "Left") { return Data$dEither.$Either("Left", [Data$dArgonaut$dDecode$dError.showJsonDecodeError.show($1._1)]); }
            if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1); }
          }
          $runtime.fail();
        };
      }
      $runtime.fail();
    },
    rows: 15,
    name: Data$dMaybe.$Maybe("Just", "contract-json")
  });
  return x => {
    const $1 = $0(x);
    return s => {
      const $2 = $1(s);
      return Data$dTuple.$Tuple(
        (() => {
          const $3 = $2._1;
          return {
            fields: $3.fields,
            validator: x$1 => {
              const $4 = $3.validator(x$1);
              return () => {
                const a$p = $4();
                return (() => {
                  if (a$p.tag === "Left") { return Data$dEither.$Either("Left", a$p._1); }
                  if (a$p.tag === "Right") {
                    return Data$dEither.$Either(
                      "Right",
                      (() => {
                        const $5 = a$p._1;
                        return v2 => v3 => Data$dTuple.$Tuple($5, Data$dTuple.$Tuple(v2, v3));
                      })()
                    );
                  }
                  $runtime.fail();
                })();
              };
            },
            render: $3.render
          };
        })(),
        $2._2
      );
    };
  };
})())(textInput({
  helpText: Data$dMaybe.$Maybe("Just", React$dBasic$dDOM$dGenerated.div1({children: ["Tags"]})),
  initial: "",
  label: Data$dMaybe.$Maybe("Just", "Tags"),
  touched: false,
  validator: x => {
    const $0 = Data$dEither.$Either(
      "Right",
      (() => {
        if (x.tag === "Nothing") { return Data$dMap$dInternal.Leaf; }
        if (x.tag === "Just") {
          return Data$dMap$dInternal.$$$Map(
            "Two",
            Data$dMap$dInternal.Leaf,
            "run-lite",
            encodeJson1(Data$dFunctor.arrayMap(x$1 => Data$dArgonaut$dCore.fromString(Data$dString$dCommon.trim(x$1)))(Data$dString$dCommon.split(",")(x._1))),
            Data$dMap$dInternal.Leaf
          );
        }
        $runtime.fail();
      })()
    );
    return () => $0;
  }
})))((() => {
  const $0 = booleanField({label: "Auto run", helpText: "Whether to run the contract creation process automatically", initial: v._2});
  return x => {
    const $1 = $0(x);
    return s => {
      const $2 = $1(s);
      return Data$dTuple.$Tuple(
        (() => {
          const $3 = $2._1;
          return {
            fields: $3.fields,
            validator: x$1 => {
              const $4 = $3.validator(x$1);
              return () => {
                const a$p = $4();
                return (() => {
                  if (a$p.tag === "Left") { return Data$dEither.$Either("Left", a$p._1); }
                  if (a$p.tag === "Right") { return Data$dEither.$Either("Right", a$p._1); }
                  $runtime.fail();
                })();
              };
            },
            render: $3.render
          };
        })(),
        $2._2
      );
    };
  };
})())(Data$dMaybe.Nothing)(0)._1;
const mkComponent = /* #__PURE__ */ bind(/* #__PURE__ */ asks(v => v.runtime))(runtime => bind(asks(v => v.cardanoMultiplatformLib))(cardanoMultiplatformLib => bind(asks(v => v.walletInfoCtx))(walletInfoCtx => bind(mkRoleTokensComponent)(roleTokenComponent => liftEffect(React$dBasic$dHooks.component("CreateContract")(v => {
  const $0 = v.connectedWallet;
  const $1 = v.onDismiss;
  const $2 = React$dBasic$dHooks.useState$p(Data$dMaybe.Nothing);
  return () => {
    const a = $2();
    const a$1 = Contrib$dReact$dBasic$dHooks$dUseMooreMachine.useMooreMachine(machineProps1(true)($0)(cardanoMultiplatformLib)(runtime))();
    const a$2 = React$dBasic$dHooks.useMemo_(($3, $4) => true, undefined, v3 => mkContractFormSpec(Data$dTuple.$Tuple(Data$dMaybe.Nothing, true)));
    const a$3 = React$dBasic$dHooks$dUseStatelessFormSpec.useStatelessFormSpec({
      spec: a$2,
      onSubmit: x => {
        if (x.result.tag === "Just" && x.result._1._1.tag === "Right") {
          const $3 = x.result._1._1._1._2._2;
          const $4 = x.result._1._1._1._1;
          const $5 = x.result._1._1._1._2._1;
          const $6 = a$1.reset(Data$dMaybe.$Maybe("Just", machineProps1($3)($0)(cardanoMultiplatformLib)(runtime)));
          return () => {
            const applyAction$p = $6();
            if ($3) {
              a._2(Data$dMaybe.$Maybe("Just", Automatic))();
            } else {
              a._2(Data$dMaybe.$Maybe("Just", $CurrentRun("Manual", false)))();
            }
            return applyAction$p(Component$dCreateContract$dMachine.$Action("TriggerSubmission", Data$dMaybe.Nothing, $4, $5))();
          };
        }
        return () => {};
      },
      validationDebounce: 0.5
    })();
    const a$4 = React$dBasic$dHooks.useContext_(walletInfoCtx);
    useEffect(a$4.tag === "Just" ? Data$dMaybe.$Maybe("Just", a$4._1._2.changeAddress) : Data$dMaybe.Nothing)((() => {
      const $3 = (() => {
        if (a$4.tag === "Just") {
          const $3 = mkInitialContracts(a$4._1._2.changeAddress);
          return () => {
            const v4 = $3();
            const v5 = Data$dMap$dInternal.lookup(Data$dOrd.ordString)("contract-json")(a$3.formState.fields);
            if (v5.tag === "Just") {
              const $4 = v5._1.onChange([
                Data$dArgonaut$dCore.stringifyWithIndent(2)(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.encodeJsonContract.encodeJson(v4.multiChoiceTest))
              ]);
              if (!v5._1.touched) { return $4(); }
              return;
            }
            if (v5.tag === "Nothing") { return; }
            $runtime.fail();
          };
        }
        return () => {};
      })();
      return () => {
        $3();
        return () => {};
      };
    })())();
    return pure1((() => {
      if (a$1.state.tag === "DefiningContract") {
        return Component$dBodyLayout.component({
          title: (() => {
            if (a$1.state.tag === "DefiningContract") { return "Defining contract"; }
            if (a$1.state.tag === "FetchingRequiredWalletContext") { return "Fetching required wallet context"; }
            if (a$1.state.tag === "CreatingTx") { return "Creating transaction"; }
            if (a$1.state.tag === "SigningTx") { return "Signing transaction"; }
            if (a$1.state.tag === "SubmittigTx") { return "Submitting transaction"; }
            if (a$1.state.tag === "ContractCreated") { return "Contract created"; }
            $runtime.fail();
          })(),
          description: stateToDetailedDescription(a$1.state),
          content: Component$dBodyLayout.wrappedContentWithFooter(React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
            children: a$2.render(a$3.formState),
            className: "form-group"
          }))(React$dBasic.fragment([
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
              children: [
                React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                  children: [Component$dWidgets.link(defaultsRecord)({label: "Cancel", onClick: $1, showBorders: true, extraClassNames: "me-3"})],
                  className: "col-6 text-start"
                }),
                React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                  children: [
                    React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalbutton$p)({
                      children: ["Submit"],
                      className: "btn btn-primary",
                      disabled: a$3.result.tag === "Just" ? a$3.result._1._1.tag !== "Right" : true,
                      onClick: a$3.onSubmit
                    })
                  ],
                  className: "col-6 text-end"
                })
              ],
              className: "row"
            })
          ]))
        });
      }
      if (a$1.state.tag === "ContractCreated") {
        return Component$dBodyLayout.component({
          title: (() => {
            if (a$1.state.tag === "DefiningContract") { return "Defining contract"; }
            if (a$1.state.tag === "FetchingRequiredWalletContext") { return "Fetching required wallet context"; }
            if (a$1.state.tag === "CreatingTx") { return "Creating transaction"; }
            if (a$1.state.tag === "SigningTx") { return "Signing transaction"; }
            if (a$1.state.tag === "SubmittigTx") { return "Submitting transaction"; }
            if (a$1.state.tag === "ContractCreated") { return "Contract created"; }
            $runtime.fail();
          })(),
          description: stateToDetailedDescription(a$1.state),
          content: Component$dBodyLayout.wrappedContentWithFooter(Component$dMarloweYaml.marloweYaml(a$1.state._1.contract))(React$dBasic.fragment([
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
              children: [
                React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                  children: [
                    React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalbutton$p)({
                      children: ["Done"],
                      className: "btn btn-primary",
                      onClick: (() => {
                        const $3 = v.onSuccess(a$1.state._1.createTxResponse.links.contract);
                        return v$1 => $3();
                      })()
                    })
                  ],
                  className: "col-12 text-end"
                })
              ],
              className: "row"
            })
          ]))
        });
      }
      const possibleRequest = (() => {
        if (a._1.tag === "Just") {
          if (a._1._1.tag === "Manual") { return Component$dCreateContract$dMachine.driver({connectedWallet: $0, cardanoMultiplatformLib, runtime})(a$1.state); }
          return Data$dMaybe.Nothing;
        }
        if (a._1.tag === "Nothing") { return Data$dMaybe.Nothing; }
        $runtime.fail();
      })();
      return Component$dBodyLayout.component({
        title: (() => {
          if (a$1.state.tag === "DefiningContract") { return "Defining contract"; }
          if (a$1.state.tag === "FetchingRequiredWalletContext") { return "Fetching required wallet context"; }
          if (a$1.state.tag === "CreatingTx") { return "Creating transaction"; }
          if (a$1.state.tag === "SigningTx") { return "Signing transaction"; }
          if (a$1.state.tag === "SubmittigTx") { return "Submitting transaction"; }
          if (a$1.state.tag === "ContractCreated") { return "Contract created"; }
          $runtime.fail();
        })(),
        description: stateToDetailedDescription(a$1.state),
        content: Component$dBodyLayout.wrappedContentWithFooter(React$dBasic.fragment([
          (() => {
            const $3 = (() => {
              if (a$1.state.tag === "DefiningContract") { return 1; }
              if (a$1.state.tag === "FetchingRequiredWalletContext") { return 3; }
              if (a$1.state.tag === "CreatingTx") { return 4; }
              if (a$1.state.tag === "SigningTx") { return 5; }
              if (a$1.state.tag === "SubmittigTx") { return 6; }
              if (a$1.state.tag === "ContractCreated") { return 7; }
              $runtime.fail();
            })();
            if ($3 < 7) {
              return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                children: [
                  div4({
                    className: "progress-bar",
                    style: {width: Data$dShow.showIntImpl(Data$dInt.unsafeClamp(Data$dNumber.ceil(Data$dInt.toNumber($3 - 1 | 0) / Data$dInt.toNumber(6) * 100.0))) + "%"},
                    children: []
                  })
                ],
                className: "progress mb-3"
              });
            }
            return React$dBasic.empty;
          })(),
          a._1.tag === "Just" && a._1._1.tag === "Manual" && a._1._1._1
            ? React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                children: [Component$dWidgets.spinner(Data$dMaybe.Nothing)],
                className: "d-flex justify-content-center"
              })
            : React$dBasic.empty
        ]))((() => {
          if (possibleRequest.tag === "Nothing") { return React$dBasic.empty; }
          if (possibleRequest.tag === "Just") {
            const $3 = possibleRequest._1;
            return React$dBasic.fragment([
              React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                children: [
                  React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                    children: [Component$dWidgets.link(defaultsRecord)({label: "Cancel", onClick: $1, showBorders: true, extraClassNames: "me-3"})],
                    className: "col-6 text-start"
                  }),
                  React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                    children: [
                      React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalbutton$p)({
                        children: ["Run"],
                        className: "btn btn-primary",
                        disabled: a._1.tag === "Just" && a._1._1.tag === "Manual" && a._1._1._1,
                        onClick: (() => {
                          const $4 = a._2(Data$dMaybe.$Maybe("Just", $CurrentRun("Manual", true)));
                          return v$1 => {
                            $4();
                            const fiber = Effect$dAff._makeFiber(
                              Effect$dAff.ffiUtil,
                              Effect$dAff._bind($3)(action => Effect$dAff._liftEffect((() => {
                                const $5 = a$1.applyAction(action);
                                return () => {
                                  $5();
                                  return a._2(Data$dMaybe.$Maybe("Just", $CurrentRun("Manual", false)))();
                                };
                              })()))
                            )();
                            fiber.run();
                          };
                        })()
                      })
                    ],
                    className: "col-6 text-end"
                  })
                ],
                className: "row"
              })
            ]);
          }
          $runtime.fail();
        })())
      });
    })())();
  };
}))))));
const brianContract = bech32 => {
  const $0 = Data$dBigInt.fromString("1684937880000");
  const timeout = $0.tag === "Just" ? Data$dMaybe.$Maybe("Just", $0._1) : Data$dMaybe.Nothing;
  const possibleContract = Language$dMarlowe$dCore$dV1$dSemantics$dTypes.decodeJsonContract.decodeJson(encodeJson3({
    when: [
      {
        then: {
          when: [
            {
              then: {when: [{then: "close", case: {notify_if: true}}], timeout_continuation: "close", timeout},
              case: {for_choice: {choice_owner: {address: bech32}, choice_name: "Release"}, choose_between: [{to: 1, from: 1}]}
            }
          ],
          timeout_continuation: "close",
          timeout
        },
        case: {party: {address: bech32}, of_token: {token_name: "", currency_symbol: ""}, into_account: {address: bech32}, deposits: 10000000}
      }
    ],
    timeout_continuation: "close",
    timeout
  }));
  if (possibleContract.tag === "Left") { return Partial._crashWith("Failed to decode contract: " + Data$dArgonaut$dDecode$dError.showJsonDecodeError.show(possibleContract._1)); }
  if (possibleContract.tag === "Right") { return possibleContract._1; }
  $runtime.fail();
};
export {
  $CurrentRun,
  AutoRun,
  Automatic,
  Manual,
  StepIndex,
  apply,
  asks,
  bind,
  bind2,
  booleanField,
  brianContract,
  caseIsSymbol,
  contractFieldId,
  defaultsRecord,
  div4,
  encodeJson1,
  encodeJson3,
  $$for as for,
  four,
  fromFoldable,
  gEncodeJsonCons4,
  hoistMaybe,
  input,
  liftEffect,
  liftEffect1,
  loadFile,
  machineProps,
  machineProps1,
  machineStateToStepIndex,
  machineStepsCardinality,
  mkComponent,
  mkContractFormSpec,
  mkInitialContracts,
  mkLoadFileButtonComponent,
  mkMultiChoiceTest,
  mkRoleTokensComponent,
  mkRolesConfigForm,
  pure1,
  runLiteTag,
  stateToDescription,
  stateToDetailedDescription,
  stateToTitle,
  textArea,
  textInput,
  thenIsSymbol,
  three,
  timeoutIsSymbol,
  timeout_continuationIsSymbol,
  useEffect,
  whenIsSymbol
};
export * from "./foreign.js";
