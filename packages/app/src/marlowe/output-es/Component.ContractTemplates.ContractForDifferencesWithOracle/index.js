import * as $runtime from "../runtime.js";
import * as Component$dBodyLayout from "../Component.BodyLayout/index.js";
import * as Component$dMarloweYaml from "../Component.MarloweYaml/index.js";
import * as Component$dWidgets from "../Component.Widgets/index.js";
import * as Contrib$dPolyform$dFormSpecBuilder from "../Contrib.Polyform.FormSpecBuilder/index.js";
import * as Contrib$dPolyform$dFormSpecs$dStatelessFormSpec from "../Contrib.Polyform.FormSpecs.StatelessFormSpec/index.js";
import * as Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders from "../Contrib.ReactBootstrap.FormSpecBuilders.StatelessFormSpecBuilders/index.js";
import * as Control$dMonad$dReader$dTrans from "../Control.Monad.Reader.Trans/index.js";
import * as Data$dBigInt from "../Data.BigInt/index.js";
import * as Data$dDateTime$dInstant from "../Data.DateTime.Instant/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dSemigroup from "../Data.Semigroup/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dClass from "../Effect.Class/index.js";
import * as Language$dMarlowe$dCore$dV1$dSemantics$dTypes from "../Language.Marlowe.Core.V1.Semantics.Types/index.js";
import * as Partial from "../Partial/index.js";
import * as React$dBasic from "../React.Basic/index.js";
import * as React$dBasic$dDOM$dSimplified$dGenerated from "../React.Basic.DOM.Simplified.Generated/index.js";
import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as React$dBasic$dHooks$dUseStatelessFormSpec from "../React.Basic.Hooks.UseStatelessFormSpec/index.js";
import * as Record$dUnsafe$dUnion from "../Record.Unsafe.Union/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
const apply = /* #__PURE__ */ (() => Contrib$dPolyform$dFormSpecBuilder.applyFormSpecBuilderT(Data$dIdentity.monadIdentity)(Contrib$dPolyform$dFormSpecs$dStatelessFormSpec.applyStatelessFormSpec(Effect.monadEffect)(Data$dSemigroup.semigroupArray)).apply)();
const defaultsRecord = {defaults: b => a => Record$dUnsafe$dUnion.unsafeUnionFn(a, b)};
const intInput = /* #__PURE__ */ Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.intInput(Effect.monadEffect)(Data$dIdentity.monadIdentity)()()(defaultsRecord);
const dateTimeField = /* #__PURE__ */ Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.dateTimeField(Data$dIdentity.monadIdentity)(Effect.monadEffect);
const pure1 = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const unsafeBigIntFromString = str => {
  const $0 = Data$dBigInt.fromString(str);
  if ($0.tag === "Just") { return $0._1; }
  return Partial._crashWith("unsafeBigIntFromString failed for input: " + str);
};
const mkContractForDifferencesWithOracleContract = v => Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Contract(
  "When",
  [
    Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Case(
      "Case",
      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Action(
        "Deposit",
        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Role", "Party"),
        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Role", "Party"),
        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Token("", ""),
        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("Constant", v.partyTokenAmount)
      ),
      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Contract(
        "When",
        [
          Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Case(
            "Case",
            Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Action(
              "Deposit",
              Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Role", "Counterparty"),
              Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Role", "Counterparty"),
              Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Token("", ""),
              Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("Constant", v.counterPartyTokenAmount)
            ),
            Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Contract(
              "When",
              [],
              v.firstWindowBeginning,
              Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Contract(
                "When",
                [
                  Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Case(
                    "Case",
                    Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Action(
                      "Choice",
                      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$ChoiceId("dir-adausd", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Role", "kraken")),
                      [Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Bound(Data$dBigInt.semiringBigInt.zero, unsafeBigIntFromString("100000000000"))]
                    ),
                    Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Contract(
                      "When",
                      [],
                      v.secondWindowBeginning,
                      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Contract(
                        "When",
                        [
                          Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Case(
                            "Case",
                            Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Action(
                              "Choice",
                              Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$ChoiceId("inv-adausd", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Role", "kraken")),
                              [Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Bound(Data$dBigInt.semiringBigInt.zero, unsafeBigIntFromString("100000000000"))]
                            ),
                            Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Contract(
                              "Let",
                              "Price in second window",
                              Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value(
                                "DivValue",
                                Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value(
                                  "MulValue",
                                  Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("Constant", v.adaAmountToUseAsAsset),
                                  Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value(
                                    "MulValue",
                                    Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value(
                                      "ChoiceValue",
                                      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$ChoiceId("dir-adausd", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Role", "kraken"))
                                    ),
                                    Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value(
                                      "ChoiceValue",
                                      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$ChoiceId("inv-adausd", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Role", "kraken"))
                                    )
                                  )
                                ),
                                Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("Constant", unsafeBigIntFromString("100000000000"))
                              ),
                              Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Contract(
                                "If",
                                Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Observation(
                                  "ValueGT",
                                  Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("Constant", v.adaAmountToUseAsAsset),
                                  Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("UseValue", "Price in second window")
                                ),
                                Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Contract(
                                  "Let",
                                  "Decrease in price",
                                  Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value(
                                    "SubValue",
                                    Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("Constant", v.adaAmountToUseAsAsset),
                                    Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("UseValue", "Price in second window")
                                  ),
                                  Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Contract(
                                    "Pay",
                                    Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Role", "Counterparty"),
                                    Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Payee("Account", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Role", "Party")),
                                    Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Token("", ""),
                                    Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value(
                                      "Cond",
                                      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Observation(
                                        "ValueLT",
                                        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("UseValue", "Decrease in price"),
                                        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("Constant", v.adaAmountToUseAsAsset)
                                      ),
                                      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("UseValue", "Decrease in price"),
                                      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("Constant", v.adaAmountToUseAsAsset)
                                    ),
                                    Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Close
                                  )
                                ),
                                Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Contract(
                                  "If",
                                  Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Observation(
                                    "ValueLT",
                                    Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("Constant", v.adaAmountToUseAsAsset),
                                    Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("UseValue", "Price in second window")
                                  ),
                                  Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Contract(
                                    "Let",
                                    "Increase in price",
                                    Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value(
                                      "SubValue",
                                      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("UseValue", "Price in second window"),
                                      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("Constant", v.adaAmountToUseAsAsset)
                                    ),
                                    Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Contract(
                                      "Pay",
                                      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Role", "Party"),
                                      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Payee("Account", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Role", "Counterparty")),
                                      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Token("", ""),
                                      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value(
                                        "Cond",
                                        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Observation(
                                          "ValueLT",
                                          Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("UseValue", "Increase in price"),
                                          Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("Constant", v.partyTokenAmount)
                                        ),
                                        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("UseValue", "Increase in price"),
                                        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("Constant", v.partyTokenAmount)
                                      ),
                                      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Close
                                    )
                                  ),
                                  Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Close
                                )
                              )
                            )
                          )
                        ],
                        v.secondWindowDeadline,
                        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Close
                      )
                    )
                  )
                ],
                v.firstWindowDeadline,
                Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Close
              )
            )
          )
        ],
        v.counterPartyDepositDeadline,
        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Close
      )
    )
  ],
  v.partyDepositDeadline,
  Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Close
);
const contractFormSpec = /* #__PURE__ */ (() => apply(apply(apply(apply(apply(apply(apply(apply((() => {
  const $0 = intInput({helpText: Data$dMaybe.Nothing, initial: "", label: Data$dMaybe.$Maybe("Just", "Party Token Amount"), touched: false});
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
                        return v1 => v2 => v3 => v4 => v5 => v6 => v7 => v8 => (
                          {
                            partyTokenAmount: Data$dBigInt.fromInt($5),
                            counterPartyTokenAmount: Data$dBigInt.fromInt(v1),
                            adaAmountToUseAsAsset: Data$dBigInt.fromInt(v2),
                            partyDepositDeadline: Data$dDateTime$dInstant.fromDateTime(v3),
                            counterPartyDepositDeadline: Data$dDateTime$dInstant.fromDateTime(v4),
                            firstWindowBeginning: Data$dDateTime$dInstant.fromDateTime(v5),
                            firstWindowDeadline: Data$dDateTime$dInstant.fromDateTime(v6),
                            secondWindowBeginning: Data$dDateTime$dInstant.fromDateTime(v7),
                            secondWindowDeadline: Data$dDateTime$dInstant.fromDateTime(v8)
                          }
                        );
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
})())(intInput({helpText: Data$dMaybe.Nothing, initial: "", label: Data$dMaybe.$Maybe("Just", "Counter-Party Token Amount"), touched: false})))(intInput({
  helpText: Data$dMaybe.Nothing,
  initial: "",
  label: Data$dMaybe.$Maybe("Just", "ADA Amount to use as asset"),
  touched: false
})))(dateTimeField(Data$dMaybe.Nothing)(Data$dMaybe.$Maybe("Just", "Party Deposit timeout"))(Data$dMaybe.$Maybe("Just", "Party timeout help"))(x => {
  const $0 = (() => {
    if (x.tag === "Nothing") { return Data$dEither.$Either("Left", ["This field is required"]); }
    if (x.tag === "Just") { return Data$dEither.$Either("Right", x._1); }
    $runtime.fail();
  })();
  return () => $0;
})))(dateTimeField(Data$dMaybe.Nothing)(Data$dMaybe.$Maybe("Just", "Counter-Party Deposit timeout"))(Data$dMaybe.$Maybe("Just", "Counter-Party timeout help"))(x => {
  const $0 = (() => {
    if (x.tag === "Nothing") { return Data$dEither.$Either("Left", ["This field is required"]); }
    if (x.tag === "Just") { return Data$dEither.$Either("Right", x._1); }
    $runtime.fail();
  })();
  return () => $0;
})))(dateTimeField(Data$dMaybe.Nothing)(Data$dMaybe.$Maybe("Just", "First Window Beginning timeout"))(Data$dMaybe.$Maybe("Just", "First Window Beginning timeout help"))(x => {
  const $0 = (() => {
    if (x.tag === "Nothing") { return Data$dEither.$Either("Left", ["This field is required"]); }
    if (x.tag === "Just") { return Data$dEither.$Either("Right", x._1); }
    $runtime.fail();
  })();
  return () => $0;
})))(dateTimeField(Data$dMaybe.Nothing)(Data$dMaybe.$Maybe("Just", "First Window Deadline timeout"))(Data$dMaybe.$Maybe("Just", "First Window Deadline timeout help"))(x => {
  const $0 = (() => {
    if (x.tag === "Nothing") { return Data$dEither.$Either("Left", ["This field is required"]); }
    if (x.tag === "Just") { return Data$dEither.$Either("Right", x._1); }
    $runtime.fail();
  })();
  return () => $0;
})))(dateTimeField(Data$dMaybe.Nothing)(Data$dMaybe.$Maybe("Just", "Second Window Beginning timeout"))(Data$dMaybe.$Maybe("Just", "Second Window Beginning timeout help"))(x => {
  const $0 = (() => {
    if (x.tag === "Nothing") { return Data$dEither.$Either("Left", ["This field is required"]); }
    if (x.tag === "Just") { return Data$dEither.$Either("Right", x._1); }
    $runtime.fail();
  })();
  return () => $0;
})))(dateTimeField(Data$dMaybe.Nothing)(Data$dMaybe.$Maybe("Just", "Second Window Ending timeout"))(Data$dMaybe.$Maybe("Just", "Second Window Deadline timeout help"))(x => {
  const $0 = (() => {
    if (x.tag === "Nothing") { return Data$dEither.$Either("Left", ["This field is required"]); }
    if (x.tag === "Just") { return Data$dEither.$Either("Right", x._1); }
    $runtime.fail();
  })();
  return () => $0;
}))(Data$dMaybe.Nothing)(0)._1)();
const mkComponent = /* #__PURE__ */ (() => Control$dMonad$dReader$dTrans.monadEffectReader(Effect$dClass.monadEffectEffect).liftEffect(React$dBasic$dHooks.component("ContractTemplates.ContractForDifferencesWithOracle")(v => {
  const $0 = v.onDismiss;
  const $1 = React$dBasic$dHooks.useState$p(Data$dMaybe.Nothing);
  return () => {
    const a = $1();
    const a$1 = React$dBasic$dHooks$dUseStatelessFormSpec.useStatelessFormSpec({
      spec: contractFormSpec,
      onSubmit: x => {
        if (x.result.tag === "Just" && x.result._1._1.tag === "Right") { return a._2(Data$dMaybe.$Maybe("Just", mkContractForDifferencesWithOracleContract(x.result._1._1._1))); }
        return () => {};
      },
      validationDebounce: 0.5
    })();
    const fields = contractFormSpec.render(a$1.formState);
    return pure1(Component$dBodyLayout.component({
      title: "Contract For Differences With Oracle",
      description: "\"Party\" and \"Counterparty\" deposit 100 Ada and after 60 slots these assets are redistributed depending on the change in price of 100 Ada worth of dollars between the start and the end of the contract. If the price increases, the difference goes to \"Counterparty\"; if it decreases, the difference goes to \"Party\", up to a maximum of 100 Ada.",
      content: Component$dBodyLayout.wrappedContentWithFooter((() => {
        if (a._1.tag === "Nothing") { return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({children: fields, className: "form-group"}); }
        if (a._1.tag === "Just") { return Component$dMarloweYaml.marloweYaml(a._1._1); }
        $runtime.fail();
      })())(React$dBasic.fragment([
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
          children: [
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
              children: [Component$dWidgets.link(defaultsRecord)({label: "Cancel", onClick: $0, showBorders: true, extraClassNames: "me-3"})],
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
})))();
export {apply, contractFormSpec, dateTimeField, defaultsRecord, intInput, mkComponent, mkContractForDifferencesWithOracleContract, pure1, unsafeBigIntFromString};
