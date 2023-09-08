import * as $runtime from "../runtime.js";
import * as Component$dApplyInputs$dMachine from "../Component.ApplyInputs.Machine/index.js";
import * as Component$dBodyLayout from "../Component.BodyLayout/index.js";
import * as Component$dMarloweYaml from "../Component.MarloweYaml/index.js";
import * as Component$dWidgets from "../Component.Widgets/index.js";
import * as Contrib$dData$dArgonaut$dGeneric$dRecord from "../Contrib.Data.Argonaut.Generic.Record/index.js";
import * as Contrib$dPolyform$dFormSpecBuilder from "../Contrib.Polyform.FormSpecBuilder/index.js";
import * as Contrib$dPolyform$dFormSpecs$dStatelessFormSpec from "../Contrib.Polyform.FormSpecs.StatelessFormSpec/index.js";
import * as Contrib$dReact$dBasic$dHooks$dUseMooreMachine from "../Contrib.React.Basic.Hooks.UseMooreMachine/index.js";
import * as Contrib$dReact$dMarloweGraph from "../Contrib.React.MarloweGraph/index.js";
import * as Contrib$dReact$dSvg from "../Contrib.React.Svg/index.js";
import * as Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders from "../Contrib.ReactBootstrap.FormSpecBuilders.StatelessFormSpecBuilders/index.js";
import * as Contrib$dReactSyntaxHighlighter from "../Contrib.ReactSyntaxHighlighter/index.js";
import * as Control$dCategory from "../Control.Category/index.js";
import * as Control$dMonad$dMaybe$dTrans from "../Control.Monad.Maybe.Trans/index.js";
import * as Control$dMonad$dReader$dTrans from "../Control.Monad.Reader.Trans/index.js";
import * as Data$dArgonaut$dDecode$dClass from "../Data.Argonaut.Decode.Class/index.js";
import * as Data$dArgonaut$dEncode$dClass from "../Data.Argonaut.Encode.Class/index.js";
import * as Data$dBigInt from "../Data.BigInt/index.js";
import * as Data$dDateTime$dInstant from "../Data.DateTime.Instant/index.js";
import * as Data$dDecimal from "../Data.Decimal/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctorWithIndex from "../Data.FunctorWithIndex/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dSemigroup from "../Data.Semigroup/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Debug from "../Debug/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dClass from "../Effect.Class/index.js";
import * as Effect$dNow from "../Effect.Now/index.js";
import * as Heterogeneous$dFolding from "../Heterogeneous.Folding/index.js";
import * as JS$dUnsafe$dStringify from "../JS.Unsafe.Stringify/index.js";
import * as Language$dMarlowe$dCore$dV1$dSemantics$dTypes from "../Language.Marlowe.Core.V1.Semantics.Types/index.js";
import * as Marlowe$dRuntime$dWeb$dClient from "../Marlowe.Runtime.Web.Client/index.js";
import * as Marlowe$dRuntime$dWeb$dTypes from "../Marlowe.Runtime.Web.Types/index.js";
import * as Partial from "../Partial/index.js";
import * as React$dBasic from "../React.Basic/index.js";
import * as React$dBasic$dDOM$dGenerated from "../React.Basic.DOM.Generated/index.js";
import * as React$dBasic$dDOM$dSimplified$dGenerated from "../React.Basic.DOM.Simplified.Generated/index.js";
import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as React$dBasic$dHooks$dUseStatelessFormSpec from "../React.Basic.Hooks.UseStatelessFormSpec/index.js";
import * as ReactBootstrap$dTab from "../ReactBootstrap.Tab/index.js";
import * as ReactBootstrap$dTabs from "../ReactBootstrap.Tabs/index.js";
import * as Record$dUnsafe$dUnion from "../Record.Unsafe.Union/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
const $ContractData = _1 => ({tag: "ContractData", _1});
const $CreateInputStep = (tag, _1) => ({tag, _1});
const $PreviewMode = (tag, _1) => ({tag, _1});
const $Step = _1 => ({tag: "Creating", _1});
const defaultsRecord = {defaults: b => a => Record$dUnsafe$dUnion.unsafeUnionFn(a, b)};
const put$p = /* #__PURE__ */ Marlowe$dRuntime$dWeb$dClient.put$p(Marlowe$dRuntime$dWeb$dTypes.encodeHeadersPutTransacti)(Marlowe$dRuntime$dWeb$dTypes.encodeJsonBodyPutTransact)()()()();
const hfoldlWithIndexRowListCons = /* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte({
  reflectSymbol: () => "resource"
})()()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil);
const post$p1 = /* #__PURE__ */ Marlowe$dRuntime$dWeb$dClient.post$p()(Marlowe$dRuntime$dWeb$dTypes.decodeJsonPostContractsRe)(Marlowe$dRuntime$dWeb$dTypes.decodeJsonApiErrorString)(/* #__PURE__ */ Contrib$dData$dArgonaut$dGeneric$dRecord.decodeRecord1()()(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2({
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
})()))(hfoldlWithIndexRowListCons)))(Marlowe$dRuntime$dWeb$dTypes.encodeHeadersPostContract)(Marlowe$dRuntime$dWeb$dTypes.encodeJsonBodyPostContrac)()()();
const hr = /* #__PURE__ */ React$dBasic.element(React$dBasic$dDOM$dGenerated._hr$p);
const liftEffect = /* #__PURE__ */ (() => Control$dMonad$dReader$dTrans.monadEffectReader(Effect$dClass.monadEffectEffect).liftEffect)();
const pure1 = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const bind1 = /* #__PURE__ */ (() => Control$dMonad$dReader$dTrans.bindReaderT(Effect.bindEffect).bind)();
const asks = /* #__PURE__ */ (() => {
  const monadReaderT1 = Control$dMonad$dReader$dTrans.monadReaderT(Effect.monadEffect);
  return f => monadReaderT1.Bind1().Apply0().Functor0().map(f)(Effect.pureE);
})();
const fromFoldable = /* #__PURE__ */ Data$dMap$dInternal.fromFoldable(Data$dOrd.ordString)(Data$dFoldable.foldableArray);
const show1 = v => {
  if (v.tag === "Just") { return "(Just " + Data$dShow.showStringImpl(v._1) + ")"; }
  if (v.tag === "Nothing") { return "Nothing"; }
  $runtime.fail();
};
const bindMaybeT = /* #__PURE__ */ Control$dMonad$dMaybe$dTrans.bindMaybeT(Effect.monadEffect);
const liftEffect1 = /* #__PURE__ */ (() => Control$dMonad$dMaybe$dTrans.monadEffectMaybe(Effect$dClass.monadEffectEffect).liftEffect)();
const pure2 = /* #__PURE__ */ (() => Control$dMonad$dMaybe$dTrans.applicativeMaybeT(Effect.monadEffect).pure)();
const apply = /* #__PURE__ */ (() => Contrib$dPolyform$dFormSpecBuilder.applyFormSpecBuilderT(Data$dIdentity.monadIdentity)(Contrib$dPolyform$dFormSpecs$dStatelessFormSpec.applyStatelessFormSpec(Effect.monadEffect)(Data$dSemigroup.semigroupArray)).apply)();
const choiceField = /* #__PURE__ */ Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.choiceField(Effect.monadEffect)(Data$dIdentity.monadIdentity)(defaultsRecord);
const intInput = /* #__PURE__ */ Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.intInput(Effect.monadEffect)(Data$dIdentity.monadIdentity)()()(defaultsRecord);
const br = /* #__PURE__ */ React$dBasic.element(React$dBasic$dDOM$dGenerated._br$p);
const traceM = /* #__PURE__ */ Debug.traceM()(Effect.monadEffect);
const post$p2 = /* #__PURE__ */ Marlowe$dRuntime$dWeb$dClient.post$p()(Marlowe$dRuntime$dWeb$dTypes.decodeJsonPostTransaction)(Marlowe$dRuntime$dWeb$dTypes.decodeJsonApiErrorString)(/* #__PURE__ */ Contrib$dData$dArgonaut$dGeneric$dRecord.decodeRecord1()()(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2({
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
})()))(hfoldlWithIndexRowListCons)))(Marlowe$dRuntime$dWeb$dTypes.encodeHeadersPostTransact)(Marlowe$dRuntime$dWeb$dTypes.encodeJsonBodyPostTransac)()()();
const DetailedFlow = value0 => $PreviewMode("DetailedFlow", value0);
const SimplifiedFlow = /* #__PURE__ */ $PreviewMode("SimplifiedFlow");
const SelectingInputType = /* #__PURE__ */ $CreateInputStep("SelectingInputType");
const PerformingDeposit = value0 => $CreateInputStep("PerformingDeposit", value0);
const PerformingNotify = value0 => $CreateInputStep("PerformingNotify", value0);
const PerformingChoice = value0 => $CreateInputStep("PerformingChoice", value0);
const PerformingAdvance = value0 => $CreateInputStep("PerformingAdvance", value0);
const Creating = value0 => $Step(value0);
const ContractData = value0 => $ContractData(value0);
const ApplyInputsContext = x => x;
const submittingTransaction = onDismiss => runtimeRequest => possibleRuntimeResponse => React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
  children: [
    Component$dBodyLayout.component({
      title: "Submitting transaction signatures",
      description: React$dBasic.fragment([
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
          children: ["We are submitting the signatures for the transaction to the Marlowe Runtime now using its REST API."]
        }),
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
          children: ["Marlowe Runtime will verify the signatures and if they are correct, it will attach them to the transaction and submit the transaction to the blockchain."]
        })
      ]),
      content: Component$dBodyLayout.wrappedContentWithFooter(React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
        children: [
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
            children: [
              React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: ["We are submitting the final transaction"], className: "h3"}),
              React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
                children: [
                  Contrib$dReactSyntaxHighlighter.jsonSyntaxHighlighter(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(JS$dUnsafe$dStringify.unsafeStringify(runtimeRequest))
                ]
              })
            ],
            className: "col-6"
          }),
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
            children: [
              (() => {
                if (possibleRuntimeResponse.tag === "Nothing") {
                  return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: ["No response yet."]});
                }
                if (possibleRuntimeResponse.tag === "Just") {
                  return React$dBasic.fragment([
                    React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: ["API response:"], className: "h3"}),
                    React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
                      children: [
                        Contrib$dReactSyntaxHighlighter.jsonSyntaxHighlighter(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(JS$dUnsafe$dStringify.unsafeStringify(possibleRuntimeResponse._1))
                      ]
                    })
                  ]);
                }
                $runtime.fail();
              })()
            ],
            className: "col-6"
          })
        ],
        className: "row"
      }))(React$dBasic.fragment([Component$dWidgets.link(defaultsRecord)({label: "Cancel", onClick: onDismiss, showBorders: true, extraClassNames: "me-3"})]))
    })
  ],
  className: "row"
});
const submit = witnesses => serverUrl => contractEndpoint => put$p(serverUrl)(contractEndpoint)({type_: "ShelleyTxWitness BabbageEra", description: "", cborHex: witnesses});
const signingTransaction = possibleOnNext => onDismiss => possibleWalletResponse => React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
  children: [
    Component$dBodyLayout.component({
      title: "Signing transaction",
      description: React$dBasic.fragment([
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
          children: [
            "We are now signing the transaction with the wallet. While the wallet currently does not provide detailed information about the Marlowe contract within the transaction, all transaction details, including the contract, are readily accessible and can be decoded for verification:"
          ]
        }),
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalul$p)({
          children: [
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalli$p)({
              children: [
                "A consistent Marlowe validator is used across all transactions. As the UTxO with Marlowe is available on the chain, it can be cheaply referenced - please check ",
                Component$dBodyLayout.descriptionLink({icon: "bi-github", href: "https://github.com/cardano-foundation/CIPs/tree/master/CIP-0031", label: "CIP-0031"}),
                " for more details."
              ]
            }),
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalli$p)({
              children: ["The Marlowe contract, along with its state, is encoded in the datum of the UTxO with the validator."]
            }),
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalli$p)({
              children: ["The value on the UTxO should represent the amount of money that is locked in the contract."]
            })
          ]
        })
      ]),
      content: Component$dBodyLayout.wrappedContentWithFooter(React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
        children: [
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
            children: [
              (() => {
                if (possibleWalletResponse.tag === "Nothing") {
                  return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                    children: [Contrib$dReact$dSvg.loadingSpinnerLogo({})],
                    className: "col-12 position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center blur-bg z-index-sticky"
                  });
                }
                if (possibleWalletResponse.tag === "Just") {
                  return React$dBasic.fragment([
                    React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: ["API response:"], className: "h3"}),
                    React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
                      children: [
                        Contrib$dReactSyntaxHighlighter.jsonSyntaxHighlighter(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(JS$dUnsafe$dStringify.unsafeStringify(possibleWalletResponse._1))
                      ]
                    })
                  ]);
                }
                $runtime.fail();
              })()
            ],
            className: "col-6"
          })
        ],
        className: "row"
      }))(React$dBasic.fragment([
        Component$dWidgets.link(defaultsRecord)({label: "Cancel", onClick: onDismiss, showBorders: true, extraClassNames: "me-3"}),
        (() => {
          if (possibleOnNext.tag === "Nothing") {
            return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalbutton$p)({children: ["Dismiss"], className: "btn btn-primary", disabled: true});
          }
          if (possibleOnNext.tag === "Just") {
            const $0 = possibleOnNext._1;
            return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalbutton$p)({
              children: ["Next"],
              className: "btn btn-primary",
              disabled: false,
              onClick: v => $0()
            });
          }
          $runtime.fail();
        })()
      ]))
    })
  ],
  className: "row"
});
const showPossibleErrorAndDismiss = title => description => body => onDismiss => errors => React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
  children: [
    Component$dBodyLayout.component({
      title,
      description: "We are submitting the final signed transaction.",
      content: Component$dBodyLayout.wrappedContentWithFooter((() => {
        if (errors.tag === "Just") {
          return React$dBasic.fragment([
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: ["Error:"]}),
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: [JS$dUnsafe$dStringify.unsafeStringify(errors._1)]})
          ]);
        }
        if (errors.tag === "Nothing") { return body; }
        $runtime.fail();
      })())((() => {
        if (errors.tag === "Just") {
          return React$dBasic.fragment([Component$dWidgets.link(defaultsRecord)({label: "Cancel", onClick: onDismiss, showBorders: true, extraClassNames: "me-3"})]);
        }
        if (errors.tag === "Nothing") { return React$dBasic.empty; }
        $runtime.fail();
      })())
    })
  ],
  className: "row"
});
const shouldShowPrevStep = v => {
  if (v.tag === "DetailedFlow") { return v._1.showPrevStep; }
  if (v.tag === "SimplifiedFlow") { return false; }
  $runtime.fail();
};
const setShowPrevStep = v => v1 => {
  if (v.tag === "DetailedFlow") { return $PreviewMode("DetailedFlow", {showPrevStep: v1}); }
  if (v.tag === "SimplifiedFlow") { return SimplifiedFlow; }
  $runtime.fail();
};
const machineProps = dictCategory => {
  const identity = dictCategory.identity;
  return marloweContext => transactionsEndpoint => connectedWallet => cardanoMultiplatformLib => runtime => (
    {
      initialState: Component$dApplyInputs$dMachine.$State("PresentingContractDetails", {marloweContext, transactionsEndpoint}),
      step: Component$dApplyInputs$dMachine.step,
      driver: Component$dApplyInputs$dMachine.driver({connectedWallet, cardanoMultiplatformLib, runtime}),
      output: identity
    }
  );
};
const machineProps1 = /* #__PURE__ */ machineProps(Control$dCategory.categoryFn);
const inputApplied = onNext => React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
  children: [
    Component$dBodyLayout.component({
      title: "Inputs applied successfully",
      description: "We are submitting the final signed transaction.",
      content: Component$dBodyLayout.wrappedContentWithFooter(React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
        children: [
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
            children: [React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: ["Input applied successfully"], className: "h3"})],
            className: "col-6"
          }),
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
            children: [
              React$dBasic.fragment([
                React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: ["API response:"], className: "h3"}),
                React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: [JS$dUnsafe$dStringify.unsafeStringify("201")]})
              ])
            ],
            className: "col-6"
          })
        ],
        className: "row"
      }))(React$dBasic.fragment([
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalbutton$p)({children: ["Ok"], className: "btn btn-primary", disabled: false, onClick: v => onNext()})
      ]))
    })
  ],
  className: "row"
});
const defaultTimeInterval = () => {
  const nowInstant = Effect$dNow.now();
  return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$TimeInterval(
    nowInstant,
    (() => {
      const $0 = nowInstant + Data$dInt.toNumber(600000);
      if ($0 >= -8639977881600000.0 && $0 <= 8639977881599999.0) { return $0; }
      return Partial._crashWith("Invalid instant");
    })()
  );
};
const creatingTxDetails = possibleOnNext => onDismiss => runtimeRequest => possibleRuntimeResponse => React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
  children: [
    Component$dBodyLayout.component({
      title: "Creating Transaction",
      description: React$dBasic$dDOM$dGenerated.div1({
        children: [
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
            children: ["We use the Marlowe Runtime to request a transaction that will apply the chosen input."]
          }),
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
            children: [
              "In order to build the required transaction we use Marlowe Runtime REST API. We encode the input which we wish to apply and also provide the addresses which we were able to collect in the previous step from the wallet. The addresses are re-encoded from the lower-level Cardano CBOR hex format into Bech32 format (",
              React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalcode$p)({children: ["addr_test..."]}),
              ") and sent to the backend as part of the request."
            ]
          }),
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
            children: [
              "On the transction level this application of input is carried out by providing a redeemer, which encodes the chosen input and supplies it to the Marlowe script to execute the contract step(s). The transaction outputs must fulfill the requirements of the effects of this input application. Specifically, they need to handle all payouts if any are made, or deposit the required deposit, or finalize the contract and payout all the money according to the accounting state."
            ]
          })
        ]
      }),
      content: Component$dBodyLayout.wrappedContentWithFooter(React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
        children: [
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
            children: [
              React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: ["API request:"], className: "h3"}),
              React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
                children: [
                  Contrib$dReactSyntaxHighlighter.jsonSyntaxHighlighter(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(JS$dUnsafe$dStringify.unsafeStringify(runtimeRequest))
                ]
              })
            ],
            className: "col-6"
          }),
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
            children: [
              (() => {
                if (possibleRuntimeResponse.tag === "Nothing") {
                  return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: ["No response yet."]});
                }
                if (possibleRuntimeResponse.tag === "Just") {
                  return React$dBasic.fragment([
                    React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: ["API response:"], className: "h3"}),
                    React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
                      children: [
                        Contrib$dReactSyntaxHighlighter.jsonSyntaxHighlighter(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(JS$dUnsafe$dStringify.unsafeStringify(possibleRuntimeResponse._1))
                      ]
                    })
                  ]);
                }
                $runtime.fail();
              })()
            ],
            className: "col-6"
          })
        ],
        className: "row"
      }))(React$dBasic.fragment([
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
          children: [
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
              children: [Component$dWidgets.link(defaultsRecord)({label: "Cancel", onClick: onDismiss, showBorders: true, extraClassNames: "me-3"})],
              className: "col-6 text-start"
            }),
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
              children: [
                (() => {
                  if (possibleOnNext.tag === "Nothing") {
                    return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalbutton$p)({children: ["Dismiss"], className: "btn btn-primary", disabled: true});
                  }
                  if (possibleOnNext.tag === "Just") {
                    const $0 = possibleOnNext._1;
                    return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalbutton$p)({
                      children: ["Next"],
                      className: "btn btn-primary",
                      disabled: false,
                      onClick: v => $0()
                    });
                  }
                  $runtime.fail();
                })()
              ],
              className: "col-6 text-end"
            })
          ],
          className: "row"
        })
      ]))
    })
  ],
  className: "row"
});
const create = contractData => serverUrl => contractsEndpoint => post$p1(serverUrl)(contractsEndpoint)({
  metadata: Data$dMap$dInternal.Leaf,
  roles: Data$dMaybe.Nothing,
  tags: Data$dMap$dInternal.Leaf,
  contract: contractData._1.contract,
  minUTxODeposit: Data$dBigInt.fromInt(2000000),
  changeAddress: contractData._1.changeAddress,
  addresses: [...contractData._1.usedAddresses, contractData._1.changeAddress],
  collateralUTxOs: []
});
const contractSection = contract => state => React$dBasic.element(ReactBootstrap$dTabs._Tabs)({
  children: [
    React$dBasic.element(ReactBootstrap$dTab._Tab)({
      children: [
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
          children: [Contrib$dReact$dMarloweGraph.marloweGraph()({contract})],
          className: "pt-4 w-100 h-vh50 overflow-auto"
        })
      ],
      eventKey: "graph",
      title: React$dBasic$dDOM$dGenerated.span1({
        children: [React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalspan$p)({children: [], className: "bi-diagram-2"}), " Source graph"]
      })
    }),
    React$dBasic.element(ReactBootstrap$dTab._Tab)({
      children: [
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
          children: [Component$dMarloweYaml.marloweYaml(contract)],
          className: "pt-4 w-100 h-vh50 overflow-auto"
        })
      ],
      eventKey: "source",
      title: React$dBasic$dDOM$dGenerated.span1({
        children: [React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalspan$p)({children: [], className: "bi-filetype-yml"}), " Source code"]
      })
    }),
    React$dBasic.element(ReactBootstrap$dTab._Tab)({
      children: [
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
          children: [Component$dMarloweYaml.marloweStateYaml(state)],
          className: "pt-4 w-100 h-vh50 overflow-auto"
        })
      ],
      eventKey: "state",
      title: React$dBasic$dDOM$dGenerated.span1({
        children: [React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalspan$p)({children: [], className: "bi-bank"}), " Contract state"]
      })
    })
  ],
  defaultActiveKey: "graph",
  fill: true,
  justify: true,
  variant: "pills"
});
const fetchingRequiredWalletContextDetails = marloweContext => possibleOnNext => onDismiss => possibleWalletResponse => Component$dBodyLayout.component({
  title: "Fetching Wallet Context",
  description: React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
    children: [
      React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
        children: [
          "We are currently fetching the required wallet context for interacting with the contract. This information is essential for confirming your participation in the contract and facilitating the necessary transactions."
        ]
      }),
      React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
        children: [
          "The marlowe-runtime requires information about wallet addresses in order to select the appropriate UTxOs to pay for the initial transaction. To obtain the set of addresses from the wallet, we utilize the ",
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalcode$p)({children: ["getUsedAddresses"]}),
          " method from ",
          Component$dBodyLayout.descriptionLink({label: "CIP-30", href: "https://github.com/cardano-foundation/CIPs/tree/master/CIP-0030", icon: "bi-github"})
        ]
      })
    ]
  }),
  content: Component$dBodyLayout.wrappedContentWithFooter(React$dBasic.fragment([
    contractSection(marloweContext.contract)(marloweContext.state),
    hr({}),
    React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
      children: [
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
          children: [
            (() => {
              if (possibleWalletResponse.tag === "Nothing") {
                return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                  children: [Contrib$dReact$dSvg.loadingSpinnerLogo({})],
                  className: "w-100 d-flex justify-content-center align-items-center"
                });
              }
              if (possibleWalletResponse.tag === "Just") {
                return React$dBasic.fragment([
                  React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: ["Wallet response:"], className: "h3"}),
                  React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
                    children: [
                      Contrib$dReactSyntaxHighlighter.jsonSyntaxHighlighter(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(JS$dUnsafe$dStringify.unsafeStringify(possibleWalletResponse._1))
                    ]
                  })
                ]);
              }
              $runtime.fail();
            })()
          ],
          className: "col-12"
        })
      ],
      className: "row"
    })
  ]))(React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
    children: [
      React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
        children: [Component$dWidgets.link(defaultsRecord)({label: "Cancel", onClick: onDismiss, showBorders: true, extraClassNames: "me-3"})],
        className: "col-6 text-start"
      }),
      React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
        children: [
          (() => {
            if (possibleOnNext.tag === "Nothing") {
              return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalbutton$p)({children: ["Next"], className: "btn btn-primary", disabled: true});
            }
            if (possibleOnNext.tag === "Just") {
              const $0 = possibleOnNext._1;
              return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalbutton$p)({
                children: ["Next"],
                className: "btn btn-primary",
                disabled: false,
                onClick: v => $0()
              });
            }
            $runtime.fail();
          })()
        ],
        className: "col-6 text-end"
      })
    ],
    className: "row"
  }))
});
const mkAdvanceFormComponent = /* #__PURE__ */ liftEffect(/* #__PURE__ */ React$dBasic$dHooks.component("ApplyInputs.AdvanceFormComponent")(v => {
  const $0 = v.onSuccess;
  return pure1(Component$dBodyLayout.component({
    title: "Advance the Contract",
    description: React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
      children: [
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
          children: [
            "Advancing the contract is a crucial action in Marlowe that moves the contract forward to its next state. This action is used when the contract is waiting for something to happen and needs to be manually pushed forward. It's like turning the page to the next chapter in a book. "
          ],
          className: "white-color h5 pb-5"
        }),
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
          children: [
            "This can be particularly useful in situations where the contract is waiting for an external data feed or an event to occur. By advancing the contract, you are ensuring that the contract stays on course and progresses through its intended sequence of states and actions."
          ],
          className: "white-color h5 pb-5"
        })
      ]
    }),
    content: Component$dBodyLayout.wrappedContentWithFooter(React$dBasic$dDOM$dGenerated.div1({
      children: [contractSection(v.marloweContext.contract)(v.marloweContext.state), hr({})]
    }))(React$dBasic.fragment([
      React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
        children: [
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
            children: [Component$dWidgets.link(defaultsRecord)({label: "Cancel", onClick: v.onDismiss, showBorders: true, extraClassNames: "me-3"})],
            className: "col-6 text-start"
          }),
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
            children: [
              React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalbutton$p)({
                children: ["Submit"],
                className: "btn btn-primary",
                disabled: false,
                onClick: v$1 => $0()
              })
            ],
            className: "col-6 text-end"
          })
        ],
        className: "row"
      })
    ]))
  }));
}));
const mkChoiceFormComponent = /* #__PURE__ */ bind1(/* #__PURE__ */ asks(v => v.runtime))(v => bind1(asks(v1 => v1.cardanoMultiplatformLib))(cardanoMultiplatformLib => bind1(asks(v1 => v1.walletInfoCtx))(walletInfoCtx => liftEffect(React$dBasic$dHooks.component("ApplyInputs.DepositFormComponent")(v1 => {
  const $0 = v1.choiceInputs;
  const $1 = v1.marloweContext;
  const $2 = v1.onDismiss;
  return () => {
    React$dBasic$dHooks.useContext_(walletInfoCtx);
    const a = React$dBasic$dHooks.useState$p(Data$dMaybe.Nothing)();
    const formSpec = apply((() => {
      const $3 = choiceField({
        choices: Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.$ChoiceFieldChoices(
          "SelectFieldChoices",
          {
            choices: Data$dFunctorWithIndex.mapWithIndexArray(idx => v3 => ({disabled: false, helpText: Data$dMaybe.Nothing, label: v3._1._1, value: Data$dShow.showIntImpl(idx)}))($0),
            monospace: false
          }
        ),
        validator: (() => {
          const value2Deposit = fromFoldable(Data$dFunctorWithIndex.mapWithIndexArray(idx => choiceInput => Data$dTuple.$Tuple(Data$dShow.showIntImpl(idx), choiceInput))($0));
          return x => {
            const $3 = bindMaybeT.bind((() => {
              const $3 = (() => {
                if (x.tag === "Just") { return Data$dMap$dInternal.lookup(Data$dOrd.ordString)(x._1)(value2Deposit); }
                if (x.tag === "Nothing") { return Data$dMaybe.Nothing; }
                $runtime.fail();
              })();
              return () => $3;
            })())(deposit => bindMaybeT.bind(liftEffect1(a._2(Data$dMaybe.$Maybe("Just", deposit))))(() => pure2(deposit)));
            const $4 = ["Invalid choice: " + show1(x)];
            return () => {
              const a$p = $3();
              return (() => {
                if (a$p.tag === "Nothing") { return Data$dEither.$Either("Left", $4); }
                if (a$p.tag === "Just") { return Data$dEither.$Either("Right", a$p._1); }
                $runtime.fail();
              })();
            };
          };
        })(),
        touched: true,
        initial: "0"
      });
      return x => {
        const $4 = $3(x);
        return s => {
          const $5 = $4(s);
          return Data$dTuple.$Tuple(
            (() => {
              const $6 = $5._1;
              return {
                fields: $6.fields,
                validator: x$1 => {
                  const $7 = $6.validator(x$1);
                  return () => {
                    const a$p = $7();
                    return (() => {
                      if (a$p.tag === "Left") { return Data$dEither.$Either("Left", a$p._1); }
                      if (a$p.tag === "Right") {
                        return Data$dEither.$Either(
                          "Right",
                          (() => {
                            const $8 = a$p._1;
                            return v4 => ({choice: $8, value: v4});
                          })()
                        );
                      }
                      $runtime.fail();
                    })();
                  };
                },
                render: $6.render
              };
            })(),
            $5._2
          );
        };
      };
    })())(intInput({}))(Data$dMaybe.Nothing)(0)._1;
    const a$1 = React$dBasic$dHooks$dUseStatelessFormSpec.useStatelessFormSpec({
      spec: formSpec,
      onSubmit: x => {
        if (x.result.tag === "Just" && x.result._1._1.tag === "Right") {
          const $3 = x.result._1._1._1.choice;
          const $4 = Data$dBigInt.fromInt(x.result._1._1._1.value);
          if ($3._3.tag === "Just") {
            return v1.onSuccess(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Input(
              "NormalInput",
              Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$InputContent("IChoice", $3._1, $4)
            ));
          }
        }
        return () => {};
      },
      validationDebounce: 0.5
    })();
    return pure1(Component$dBodyLayout.component({
      title: "Apply a Choice",
      description: React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
        children: [
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
            children: ["Select a choice from the dropdown menu to proceed. Each choice represents a decision that a participant can make at a particular point in the contract."],
            className: "white-color h5 pb-3"
          }),
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
            children: [
              "Keep in mind that the choices available are defined within the Marlowe contract and may have different consequences or lead to different outcomes. Make sure you understand the implications of each choice before making a selection."
            ],
            className: "white-color h5 pb-3"
          })
        ]
      }),
      content: Component$dBodyLayout.wrappedContentWithFooter(React$dBasic$dDOM$dGenerated.div1({
        children: [
          contractSection($1.contract)($1.state),
          hr({}),
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({children: formSpec.render(a$1.formState), className: "form-group"})
        ]
      }))(React$dBasic.fragment([
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
          children: [
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
              children: [Component$dWidgets.link(defaultsRecord)({label: "Cancel", onClick: $2, showBorders: true, extraClassNames: "me-3"})],
              className: "col-6 text-start"
            }),
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
              children: [
                React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalbutton$p)({
                  children: ["Submit"],
                  className: "btn btn-primary",
                  disabled: a$1.result.tag === "Just" ? a$1.result._1._1.tag !== "Right" : true,
                  onClick: a$1.onSubmit
                })
              ],
              className: "col-6 text-end"
            })
          ],
          className: "row"
        })
      ]))
    }))();
  };
})))));
const mkContractDetailsComponent = /* #__PURE__ */ (() => {
  const $0 = Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.booleanField(Effect.monadEffect)(Data$dIdentity.monadIdentity)()({
    label: "Auto run",
    layout: Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.$FieldLayout(
      "MultiColumn",
      {
        sm: Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.Col3Label,
        md: Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.Col2Label,
        lg: Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.Col2Label
      }
    ),
    helpText: React$dBasic.fragment([
      "Whether to run some of the steps automatically.",
      br({}),
      "In non-auto mode, we provide technical details about the requests and responses",
      br({}),
      "which deal with during the contract execution."
    ]),
    initial: true,
    touched: true
  })(Data$dMaybe.Nothing)(0)._1;
  const autoRunFormSpec = {
    fields: $0.fields,
    validator: x => {
      const $1 = $0.validator(x);
      return () => {
        const a$p = $1();
        return (() => {
          if (a$p.tag === "Left") { return Data$dEither.$Either("Left", a$p._1); }
          if (a$p.tag === "Right") { return Data$dEither.$Either("Right", a$p._1); }
          $runtime.fail();
        })();
      };
    },
    render: $0.render
  };
  return liftEffect(React$dBasic$dHooks.component("ApplyInputs.ContractDetailsComponent")(v => {
    const $1 = v.marloweContext.contract;
    const $2 = v.onDismiss;
    const $3 = v.marloweContext.state;
    const $4 = React$dBasic$dHooks$dUseStatelessFormSpec.useStatelessFormSpec({
      spec: autoRunFormSpec,
      onSubmit: x => {
        if (x.result.tag === "Just" && x.result._1._1.tag === "Right") { return v.onSuccess(x.result._1._1._1); }
        return () => {};
      },
      validationDebounce: 0.5
    });
    return () => {
      const a = $4();
      return pure1(Component$dBodyLayout.component({
        title: "Apply Input",
        description: React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
          children: [
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
              children: [
                "This page allows contract participants to interact with the contract and take actions to progress through it. On the right side of the page, you will see a representation of the contract state as it currently exists on the blockchain. The page is divided into three tabs: Source Graph, Source Code, and Contract State. Each tab provides a different view of the contract."
              ]
            }),
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: ["Source Graph"], className: "h3 fw-bold my-3"}),
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
              children: [
                "The Source Graph tab provides a visual representation of the contract. It displays the contract as a graph, with nodes representing the different states and actions of the contract. The paths that have already been executed (transactions) are highlighted, allowing you to see the progression of the contract over time."
              ]
            }),
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: ["Source Code"], className: "h3 fw-bold my-3"}),
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
              children: [
                "In the Source Code tab, you can view the remaining part of the contract that is on the blockchain. This includes the logic and conditions that are yet to be executed. It's a textual representation of the contract, allowing you to understand the contract's structure and logic."
              ]
            }),
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: ["Contract State"], className: "h3 fw-bold my-3"}),
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
              children: [
                "In the Contract State tab, you can view the current status of the participant's account, as well as the chosen values and variables that have been set within the contract (using 'let' statements). This tab provides a snapshot of the contract's current state and the participant's interaction with it."
              ]
            }),
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: ["Marlowe Explorer"], className: "h3 fw-bold my-3"}),
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
              children: [
                "To view the state of the contract on the Cardano blockchain, visit the ",
                React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internala$p)({
                  children: ["Marlowe Explorer"],
                  className: "white-color",
                  href: "https://preview.marlowescan.com/contractView?tab=info&contractId=09127ec2bd83d20dc108e67fe73f7e40280f6f48ea947606a7b73ac5268985a0%231",
                  target: "_blank"
                }),
                "."
              ]
            })
          ]
        }),
        content: Component$dBodyLayout.wrappedContentWithFooter(React$dBasic.fragment([contractSection($1)($3), hr({}), ...autoRunFormSpec.render(a.formState)]))(React$dBasic.fragment([
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
            children: [
              React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                children: [Component$dWidgets.link(defaultsRecord)({label: "Cancel", onClick: $2, showBorders: true, extraClassNames: "me-3"})],
                className: "col-6 text-start"
              }),
              React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                children: [
                  React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalbutton$p)({
                    children: ["Submit"],
                    className: "btn btn-primary",
                    disabled: false,
                    onClick: a.onSubmit
                  })
                ],
                className: "col-6 text-end"
              })
            ],
            className: "row"
          })
        ]))
      }))();
    };
  }));
})();
const mkDepositFormComponent = /* #__PURE__ */ liftEffect(/* #__PURE__ */ React$dBasic$dHooks.component("ApplyInputs.DepositFormComponent")(v => {
  const $0 = v.marloweContext;
  const $1 = v.onDismiss;
  const formSpec = choiceField({
    choices: Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.$ChoiceFieldChoices(
      "RadioButtonFieldChoices",
      {
        switch: true,
        choices: Data$dFunctorWithIndex.mapWithIndexArray(idx => v1 => (
          {
            disabled: false,
            helpText: Data$dMaybe.Nothing,
            label: (() => {
              if (v1._3._1 === "" && v1._3._2 === "") {
                const $2 = Data$dDecimal.fromString("1000000");
                if ($2.tag === "Just") {
                  const $3 = Data$dDecimal.fromString(Data$dBigInt.toString(v1._4));
                  if ($3.tag === "Just") { return "Deposit " + Data$dDecimal.toString(Data$dDecimal.dDiv($3._1)($2._1)) + " ₳"; }
                  if ($3.tag === "Nothing") { return "Deposit " + Data$dBigInt.toString(v1._4) + " of Lovelace"; }
                  $runtime.fail();
                }
                if ($2.tag === "Nothing") { return "Deposit " + Data$dBigInt.toString(v1._4) + " of Lovelace"; }
                $runtime.fail();
              }
              return "Deposit " + Data$dBigInt.toString(v1._4) + " of  currency " + v1._3._1 + " of token " + v1._3._2;
            })(),
            value: Data$dShow.showIntImpl(idx)
          }
        ))(v.depositInputs)
      }
    ),
    validator: (() => {
      const value2Deposit = fromFoldable(Data$dFunctorWithIndex.mapWithIndexArray(idx => deposit => Data$dTuple.$Tuple(Data$dShow.showIntImpl(idx), deposit))(v.depositInputs));
      return x => {
        const $2 = ["Invalid choice: " + show1(x)];
        const $3 = (() => {
          if (x.tag === "Just") { return Data$dMap$dInternal.lookup(Data$dOrd.ordString)(x._1)(value2Deposit); }
          if (x.tag === "Nothing") { return Data$dMaybe.Nothing; }
          $runtime.fail();
        })();
        const $4 = (() => {
          if ($3.tag === "Nothing") { return Data$dEither.$Either("Left", $2); }
          if ($3.tag === "Just") { return Data$dEither.$Either("Right", $3._1); }
          $runtime.fail();
        })();
        return () => $4;
      };
    })()
  })(Data$dMaybe.Nothing)(0)._1;
  const $2 = React$dBasic$dHooks$dUseStatelessFormSpec.useStatelessFormSpec({
    spec: formSpec,
    onSubmit: x => {
      if (x.result.tag === "Just" && x.result._1._1.tag === "Right" && x.result._1._1._1._5.tag === "Just") {
        return v.onSuccess(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Input(
          "NormalInput",
          Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$InputContent("IDeposit", x.result._1._1._1._1, x.result._1._1._1._2, x.result._1._1._1._3, x.result._1._1._1._4)
        ));
      }
      return () => {};
    },
    validationDebounce: 0.5
  });
  return () => {
    const a = $2();
    return pure1(Component$dBodyLayout.component({
      title: "Select a Deposit to Perform",
      description: React$dBasic.fragment([
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
          children: ["On the right, you can view all the deposits available for performance at this stage."]
        }),
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
          children: [
            "While it's relatively uncommon to have multiple deposit choices at a given point in the contract, it remains a feasible and potentially useful option in certain cases."
          ]
        })
      ]),
      content: Component$dBodyLayout.wrappedContentWithFooter(React$dBasic.fragment([
        contractSection($0.contract)($0.state),
        hr({}),
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({children: formSpec.render(a.formState), className: "form-group"})
      ]))(React$dBasic.fragment([
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
                  disabled: a.result.tag === "Just" ? a.result._1._1.tag !== "Right" : true,
                  onClick: a.onSubmit
                })
              ],
              className: "col-6 text-end"
            })
          ],
          className: "row"
        })
      ]))
    }))();
  };
}));
const mkNotifyFormComponent = /* #__PURE__ */ bind1(/* #__PURE__ */ asks(v => v.runtime))(v => bind1(asks(v1 => v1.cardanoMultiplatformLib))(cardanoMultiplatformLib => bind1(asks(v1 => v1.walletInfoCtx))(walletInfoCtx => liftEffect(React$dBasic$dHooks.component("ApplyInputs.NotifyFormComponent")(v1 => {
  const $0 = v1.marloweContext;
  const $1 = v1.onDismiss;
  const $2 = v1.onSuccess;
  return () => {
    React$dBasic$dHooks.useContext_(walletInfoCtx);
    return pure1(Component$dBodyLayout.component({
      title: "Perform a Notify Action",
      description: React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
        children: [
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
            children: [
              "The Notify action in Marlowe is used to continue the execution of the contract when a certain condition is satisfied. It essentially acts as a gatekeeper, ensuring that the contract only proceeds when the specified observations hold true. "
            ],
            className: "white-color h5 pb-3"
          }),
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
            children: [
              "This is useful for creating contracts that have conditional flows, where the next steps depend on certain criteria being met. By performing a Notify action, you are signaling that the required conditions are fulfilled and the contract can move forward to the next state."
            ],
            className: "white-color h5 pb-3"
          })
        ]
      }),
      content: Component$dBodyLayout.wrappedContentWithFooter(React$dBasic$dDOM$dGenerated.div1({children: [contractSection($0.contract)($0.state), hr({})]}))(React$dBasic.fragment([
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
                  disabled: false,
                  onClick: v$1 => $2()
                })
              ],
              className: "col-6 text-end"
            })
          ],
          className: "row"
        })
      ]))
    }))();
  };
})))));
const mkComponent = /* #__PURE__ */ bind1(/* #__PURE__ */ asks(v => v.runtime))(runtime => bind1(asks(v => v.cardanoMultiplatformLib))(cardanoMultiplatformLib => bind1(mkContractDetailsComponent)(contractDetailsComponent => bind1(mkDepositFormComponent)(depositFormComponent => bind1(mkChoiceFormComponent)(choiceFormComponent => bind1(mkNotifyFormComponent)(notifyFormComponent => bind1(mkAdvanceFormComponent)(advanceFormComponent => liftEffect(React$dBasic$dHooks.component("ApplyInputs")(v => {
  const $0 = v.connectedWallet;
  const $1 = v.marloweContext;
  const $2 = v.onDismiss;
  const $3 = v.transactionsEndpoint;
  return () => {
    const a = React$dBasic$dHooks.useRef_($0);
    const a$1 = React$dBasic$dHooks.useState$p($PreviewMode("DetailedFlow", {showPrevStep: true}))();
    const $4 = React$dBasic$dHooks.writeRef(a)($0);
    React$dBasic$dHooks.useEffect_(
      ($5, $6) => $5 === $6,
      $0.name,
      () => {
        $4();
        return () => {};
      }
    );
    const a$2 = Contrib$dReact$dBasic$dHooks$dUseMooreMachine.useMooreMachine(machineProps1($1)($3)($0)(cardanoMultiplatformLib)(runtime))();
    const setNextFlow = (() => {
      if (a$1._1.tag === "DetailedFlow") {
        if (a$1._1._1.showPrevStep) {
          const $5 = traceM("NEXT STEP");
          return () => {
            $5();
            traceM(a$1._1)();
            return a$1._2($PreviewMode("DetailedFlow", {showPrevStep: false}))();
          };
        }
        const $5 = traceM("NEXT STEP");
        return () => {
          $5();
          traceM(a$1._1)();
          return a$1._2($PreviewMode("DetailedFlow", {showPrevStep: true}))();
        };
      }
      if (a$1._1.tag === "SimplifiedFlow") { return () => {}; }
      $runtime.fail();
    })();
    return pure1((() => {
      if (a$2.state.tag === "PresentingContractDetails") {
        return contractDetailsComponent({
          marloweContext: $1,
          onSuccess: v2 => {
            const $5 = a$2.applyAction(Component$dApplyInputs$dMachine.$Action("FetchRequiredWalletContext", {autoRun: true, marloweContext: $1, transactionsEndpoint: $3}));
            return () => {
              $5();
              traceM("AUTO RUN:")();
              traceM(v2)();
              if (v2) { return a$1._2(SimplifiedFlow)(); }
              return a$1._2($PreviewMode("DetailedFlow", {showPrevStep: true}))();
            };
          },
          onDismiss: $2
        });
      }
      if (a$2.state.tag === "FetchingRequiredWalletContext") {
        if (a$1._1.tag === "DetailedFlow") { return fetchingRequiredWalletContextDetails($1)(Data$dMaybe.Nothing)($2)(Data$dMaybe.Nothing); }
        if (a$1._1.tag === "SimplifiedFlow") {
          return showPossibleErrorAndDismiss("Fetching wallet context")("")(React$dBasic.fragment([contractSection($1.contract)($1.state), hr({})]))($2)(a$2.state._1.errors);
        }
        $runtime.fail();
      }
      if (a$2.state.tag === "ChoosingInputType") {
        if (a$1._1.tag === "DetailedFlow" && a$1._1._1.showPrevStep) {
          return fetchingRequiredWalletContextDetails($1)(Data$dMaybe.$Maybe("Just", setNextFlow))($2)(Data$dMaybe.$Maybe("Just", a$2.state._1.requiredWalletContext));
        }
        return Component$dBodyLayout.component({
          title: "Select Input Type",
          description: React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
            children: [
              React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
                children: [
                  "You have reached a point in the contract where an input is required to proceed. The contract may allow for various types of inputs depending on its current state and the logic it contains. Below, you will find a selection of input types that you can choose from to interact with the contract. Note that not all input types may be available at this point in the contract. The available input types are enabled, while the others are disabled."
                ]
              }),
              React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalul$p)({
                children: [
                  React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalli$p)({
                    children: [
                      React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalstrong$p)({children: ["Deposit:"]}),
                      " If enabled, this option allows you to make a deposit into the contract. This might be required for certain conditions or actions within the contract."
                    ]
                  }),
                  React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalli$p)({
                    children: [
                      React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalstrong$p)({children: ["Choice:"]}),
                      " If enabled, this option allows you to make a choice from a set of predefined options. This choice can affect the flow of the contract."
                    ]
                  }),
                  React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalli$p)({
                    children: [
                      React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalstrong$p)({children: ["Notify:"]}),
                      " If enabled, this option allows you to notify the contract of a certain event or condition. This can be used to trigger specific actions within the contract."
                    ]
                  }),
                  React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalli$p)({
                    children: [
                      React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalstrong$p)({children: ["Advance:"]}),
                      " If enabled, this option allows you to move the contract forward to the next state without making any other input."
                    ]
                  })
                ]
              }),
              React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
                children: [
                  "Please select the appropriate input type based on the current state of the contract and the action you wish to take. After selecting an input type, you may be required to provide additional information or make a choice before the contract can proceed."
                ]
              })
            ]
          }),
          content: Component$dBodyLayout.wrappedContentWithFooter(React$dBasic.fragment([contractSection($1.contract)($1.state)]))(React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
            children: [
              React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                children: [Component$dWidgets.link(defaultsRecord)({label: "Cancel", onClick: $2, showBorders: true, extraClassNames: "me-3"})],
                className: "col-6 text-start"
              }),
              React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                children: [
                  React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalbutton$p)({
                    children: ["Deposit"],
                    className: "btn btn-primary me-2",
                    disabled: !(
                      a$2.state._1.allInputsChoices.tag === "Right" && (() => {
                        if (a$2.state._1.allInputsChoices._1.deposits.tag === "Nothing") { return false; }
                        if (a$2.state._1.allInputsChoices._1.deposits.tag === "Just") { return true; }
                        $runtime.fail();
                      })()
                    ),
                    onClick: (() => {
                      const $5 = a$2.state._1.allInputsChoices.tag === "Right" && a$2.state._1.allInputsChoices._1.deposits.tag === "Just"
                        ? a$2.applyAction(Component$dApplyInputs$dMachine.$Action(
                            "ChooseInputTypeSucceeded",
                            Component$dApplyInputs$dMachine.$InputChoices("DepositInputs", a$2.state._1.allInputsChoices._1.deposits._1)
                          ))
                        : () => {};
                      return v$1 => $5();
                    })()
                  }),
                  React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalbutton$p)({
                    children: ["Choice"],
                    className: "btn btn-primary me-2",
                    disabled: !(
                      a$2.state._1.allInputsChoices.tag === "Right" && (() => {
                        if (a$2.state._1.allInputsChoices._1.choices.tag === "Nothing") { return false; }
                        if (a$2.state._1.allInputsChoices._1.choices.tag === "Just") { return true; }
                        $runtime.fail();
                      })()
                    ),
                    onClick: (() => {
                      const $5 = a$2.state._1.allInputsChoices.tag === "Right" && a$2.state._1.allInputsChoices._1.choices.tag === "Just"
                        ? a$2.applyAction(Component$dApplyInputs$dMachine.$Action(
                            "ChooseInputTypeSucceeded",
                            Component$dApplyInputs$dMachine.$InputChoices("ChoiceInputs", a$2.state._1.allInputsChoices._1.choices._1)
                          ))
                        : () => {};
                      return v$1 => $5();
                    })()
                  }),
                  React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalbutton$p)({
                    children: ["Notify"],
                    className: "btn btn-primary me-2",
                    disabled: !(
                      a$2.state._1.allInputsChoices.tag === "Right" && (() => {
                        if (a$2.state._1.allInputsChoices._1.notify.tag === "Nothing") { return false; }
                        if (a$2.state._1.allInputsChoices._1.notify.tag === "Just") { return true; }
                        $runtime.fail();
                      })()
                    ),
                    onClick: (() => {
                      const $5 = a$2.state._1.allInputsChoices.tag === "Right" && a$2.state._1.allInputsChoices._1.notify.tag === "Just"
                        ? a$2.applyAction(Component$dApplyInputs$dMachine.$Action(
                            "ChooseInputTypeSucceeded",
                            Component$dApplyInputs$dMachine.$InputChoices("SpecificNotifyInput", a$2.state._1.allInputsChoices._1.notify._1)
                          ))
                        : () => {};
                      return v$1 => $5();
                    })()
                  }),
                  React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalbutton$p)({
                    children: ["Advance"],
                    className: "btn btn-primary me-2",
                    disabled: (() => {
                      if (a$2.state._1.allInputsChoices.tag === "Left") { return false; }
                      if (a$2.state._1.allInputsChoices.tag === "Right") { return true; }
                      $runtime.fail();
                    })(),
                    onClick: (() => {
                      const $5 = a$2.state._1.allInputsChoices.tag === "Left"
                        ? a$2.applyAction(Component$dApplyInputs$dMachine.$Action(
                            "ChooseInputTypeSucceeded",
                            Component$dApplyInputs$dMachine.$InputChoices("AdvanceContract", a$2.state._1.allInputsChoices._1)
                          ))
                        : () => {};
                      return v$1 => $5();
                    })()
                  })
                ],
                className: "col-6 text-end"
              })
            ],
            className: "row"
          }))
        });
      }
      if (a$2.state.tag === "PickingInput") {
        if (a$2.state._1.inputChoices.tag === "DepositInputs") {
          return depositFormComponent({
            depositInputs: a$2.state._1.inputChoices._1,
            connectedWallet: $0,
            marloweContext: $1,
            onDismiss: $2,
            onSuccess: x => () => {
              setNextFlow();
              return a$2.applyAction(Component$dApplyInputs$dMachine.$Action("PickInputSucceeded", Data$dMaybe.$Maybe("Just", x)))();
            }
          });
        }
        if (a$2.state._1.inputChoices.tag === "ChoiceInputs") {
          return choiceFormComponent({
            choiceInputs: a$2.state._1.inputChoices._1,
            connectedWallet: $0,
            marloweContext: $1,
            onDismiss: $2,
            onSuccess: x => () => {
              setNextFlow();
              return a$2.applyAction(Component$dApplyInputs$dMachine.$Action("PickInputSucceeded", Data$dMaybe.$Maybe("Just", x)))();
            }
          });
        }
        if (a$2.state._1.inputChoices.tag === "SpecificNotifyInput") {
          return notifyFormComponent({
            notifyInput: a$2.state._1.inputChoices._1,
            connectedWallet: $0,
            marloweContext: $1,
            onDismiss: $2,
            onSuccess: () => {
              setNextFlow();
              return a$2.applyAction(Component$dApplyInputs$dMachine.$Action(
                "PickInputSucceeded",
                Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Input("NormalInput", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.INotify))
              ))();
            }
          });
        }
        if (a$2.state._1.inputChoices.tag === "AdvanceContract") {
          return advanceFormComponent({
            marloweContext: $1,
            onDismiss: $2,
            onSuccess: () => {
              setNextFlow();
              return a$2.applyAction(Component$dApplyInputs$dMachine.$Action("PickInputSucceeded", Data$dMaybe.Nothing))();
            }
          });
        }
        $runtime.fail();
      }
      if (a$2.state.tag === "CreatingTx") {
        if (a$1._1.tag === "DetailedFlow") {
          return creatingTxDetails(Data$dMaybe.Nothing)($2)("createTx placeholder")((() => {
            if (a$2.state._1.errors.tag === "Just") { return Data$dMaybe.$Maybe("Just", a$2.state._1.errors._1); }
            if (a$2.state._1.errors.tag === "Nothing") { return Data$dMaybe.Nothing; }
            $runtime.fail();
          })());
        }
        if (a$1._1.tag === "SimplifiedFlow") { return showPossibleErrorAndDismiss("Creating Transaction")("")("Auto creating tx...")($2)(a$2.state._1.errors); }
        $runtime.fail();
      }
      if (a$2.state.tag === "SigningTx") {
        if (a$1._1.tag === "DetailedFlow") {
          if (a$1._1._1.showPrevStep) {
            return creatingTxDetails(Data$dMaybe.$Maybe("Just", setNextFlow))($2)("createTx placeholder")(Data$dMaybe.$Maybe("Just", a$2.state._1.createTxResponse));
          }
          return signingTransaction(Data$dMaybe.Nothing)($2)(Data$dMaybe.Nothing);
        }
        if (a$1._1.tag === "SimplifiedFlow") { return showPossibleErrorAndDismiss("Signing Transaction")("")("Auto signing tx... (progress bar?)")($2)(a$2.state._1.errors); }
        $runtime.fail();
      }
      if (a$2.state.tag === "SubmittingTx") {
        if (a$1._1.tag === "DetailedFlow") {
          if (a$1._1._1.showPrevStep) { return signingTransaction(Data$dMaybe.$Maybe("Just", setNextFlow))($2)(Data$dMaybe.$Maybe("Just", a$2.state._1.txWitnessSet)); }
          return submittingTransaction($2)("Final request placeholder")(a$2.state._1.errors);
        }
        if (a$1._1.tag === "SimplifiedFlow") {
          return Component$dBodyLayout.component({
            title: "Submitting transaction",
            description: "We are submitting the initial transaction.",
            content: "Auto submitting tx... (progress bar?)"
          });
        }
        $runtime.fail();
      }
      if (a$2.state.tag === "InputApplied") {
        if (a$1._1.tag === "DetailedFlow" && a$1._1._1.showPrevStep) { return submittingTransaction($2)("Final request placeholder")(Data$dMaybe.$Maybe("Just", "201")); }
        return inputApplied($2);
      }
      $runtime.fail();
    })())();
  };
})))))))));
const applyInputs = v => serverURL => transactionsEndpoint => post$p2(serverURL)(transactionsEndpoint)({
  inputs: v.inputs,
  invalidBefore: Data$dDateTime$dInstant.toDateTime(v.timeInterval._1),
  invalidHereafter: Data$dDateTime$dInstant.toDateTime(v.timeInterval._2),
  metadata: Data$dMap$dInternal.Leaf,
  tags: Data$dMap$dInternal.Leaf,
  changeAddress: v.wallet.changeAddress,
  addresses: v.wallet.usedAddresses,
  collateralUTxOs: []
});
const address = "addr_test1qz4y0hs2kwmlpvwc6xtyq6m27xcd3rx5v95vf89q24a57ux5hr7g3tkp68p0g099tpuf3kyd5g80wwtyhr8klrcgmhasu26qcn";
const mkInitialContract = () => {
  const nowMilliseconds = Effect$dNow.now();
  return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Contract(
    "When",
    [
      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Case(
        "Case",
        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Action(
          "Deposit",
          Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party(
            "Address",
            "addr_test1qz4y0hs2kwmlpvwc6xtyq6m27xcd3rx5v95vf89q24a57ux5hr7g3tkp68p0g099tpuf3kyd5g80wwtyhr8klrcgmhasu26qcn"
          ),
          Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party(
            "Address",
            "addr_test1qz4y0hs2kwmlpvwc6xtyq6m27xcd3rx5v95vf89q24a57ux5hr7g3tkp68p0g099tpuf3kyd5g80wwtyhr8klrcgmhasu26qcn"
          ),
          Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Token("", ""),
          Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("Constant", Data$dBigInt.fromInt(1000000))
        ),
        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Close
      )
    ],
    (() => {
      const $0 = nowMilliseconds + Data$dInt.toNumber(300000);
      if ($0 >= -8639977881600000.0 && $0 <= 8639977881599999.0) { return $0; }
      return Partial._crashWith("Invalid instant");
    })(),
    Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Close
  );
};
export {
  $ContractData,
  $CreateInputStep,
  $PreviewMode,
  $Step,
  ApplyInputsContext,
  ContractData,
  Creating,
  DetailedFlow,
  PerformingAdvance,
  PerformingChoice,
  PerformingDeposit,
  PerformingNotify,
  SelectingInputType,
  SimplifiedFlow,
  address,
  apply,
  applyInputs,
  asks,
  bind1,
  bindMaybeT,
  br,
  choiceField,
  contractSection,
  create,
  creatingTxDetails,
  defaultTimeInterval,
  defaultsRecord,
  fetchingRequiredWalletContextDetails,
  fromFoldable,
  hfoldlWithIndexRowListCons,
  hr,
  inputApplied,
  intInput,
  liftEffect,
  liftEffect1,
  machineProps,
  machineProps1,
  mkAdvanceFormComponent,
  mkChoiceFormComponent,
  mkComponent,
  mkContractDetailsComponent,
  mkDepositFormComponent,
  mkInitialContract,
  mkNotifyFormComponent,
  post$p1,
  post$p2,
  pure1,
  pure2,
  put$p,
  setShowPrevStep,
  shouldShowPrevStep,
  show1,
  showPossibleErrorAndDismiss,
  signingTransaction,
  submit,
  submittingTransaction,
  traceM
};
