import * as $runtime from "../runtime.js";
import * as Component$dBodyLayout from "../Component.BodyLayout/index.js";
import * as Component$dMarloweYaml from "../Component.MarloweYaml/index.js";
import * as Component$dWidgets from "../Component.Widgets/index.js";
import * as Component$dWidgets$dForm from "../Component.Widgets.Form/index.js";
import * as Contrib$dPolyform$dFormSpecBuilder from "../Contrib.Polyform.FormSpecBuilder/index.js";
import * as Contrib$dPolyform$dFormSpecs$dStatelessFormSpec from "../Contrib.Polyform.FormSpecs.StatelessFormSpec/index.js";
import * as Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders from "../Contrib.ReactBootstrap.FormSpecBuilders.StatelessFormSpecBuilders/index.js";
import * as Control$dMonad$dReader$dTrans from "../Control.Monad.Reader.Trans/index.js";
import * as Control$dMonad$dState$dTrans from "../Control.Monad.State.Trans/index.js";
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
import * as React$dBasic from "../React.Basic/index.js";
import * as React$dBasic$dDOM$dSimplified$dGenerated from "../React.Basic.DOM.Simplified.Generated/index.js";
import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as React$dBasic$dHooks$dUseStatelessFormSpec from "../React.Basic.Hooks.UseStatelessFormSpec/index.js";
import * as Record$dUnsafe$dUnion from "../Record.Unsafe.Union/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
const $RoleTokenUsage = (tag, _1) => ({tag, _1});
const defaultsRecord = {defaults: b => a => Record$dUnsafe$dUnion.unsafeUnionFn(a, b)};
const apply = /* #__PURE__ */ (() => Contrib$dPolyform$dFormSpecBuilder.applyFormSpecBuilderT(Data$dIdentity.monadIdentity)(Contrib$dPolyform$dFormSpecs$dStatelessFormSpec.applyStatelessFormSpec(Effect.monadEffect)(Data$dSemigroup.semigroupArray)).apply)();
const intInput = /* #__PURE__ */ Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.intInput(Effect.monadEffect)(Data$dIdentity.monadIdentity)()()(defaultsRecord);
const dateTimeField = /* #__PURE__ */ Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.dateTimeField(Data$dIdentity.monadIdentity)(Effect.monadEffect);
const liftEffect = /* #__PURE__ */ (() => Control$dMonad$dReader$dTrans.monadEffectReader(Effect$dClass.monadEffectEffect).liftEffect)();
const pure1 = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const UseRoleTokens = /* #__PURE__ */ $RoleTokenUsage("UseRoleTokens");
const UseAddress = value0 => $RoleTokenUsage("UseAddress", value0);
const roleTokenUsageField = dictMonad => {
  const $0 = Control$dMonad$dState$dTrans.applicativeStateT(dictMonad);
  const applyFormSpecBuilderT = Contrib$dPolyform$dFormSpecBuilder.applyFormSpecBuilderT(dictMonad);
  const $1 = dictMonad.Applicative0().Apply0().Functor0();
  const semigroupoidFormSpecBuild = Contrib$dPolyform$dFormSpecBuilder.semigroupoidFormSpecBuild(dictMonad);
  const addressInput = Component$dWidgets$dForm.addressInput(dictMonad);
  const multiField = Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.multiField(dictMonad);
  return dictMonadEffect => {
    const Monad0 = dictMonadEffect.Monad0();
    const Applicative0 = Monad0.Applicative0();
    const booleanField = Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.booleanField(Monad0)(dictMonad)();
    const addressInput1 = addressInput(dictMonadEffect)()()(defaultsRecord);
    return cardanoMultiplatformLib => possibleLabel => possibleHelpText => multiField(possibleLabel)(possibleHelpText)(v => applyFormSpecBuilderT(Contrib$dPolyform$dFormSpecs$dStatelessFormSpec.applyStatelessFormSpec(Monad0)(Data$dSemigroup.semigroupArray)).apply((() => {
      const $2 = Applicative0.Apply0().Functor0();
      const $3 = semigroupoidFormSpecBuild(Contrib$dPolyform$dFormSpecs$dStatelessFormSpec.semigroupoidStatelessForm(Monad0)(Data$dSemigroup.semigroupArray)).compose((() => {
        const $3 = Applicative0.Apply0().Functor0().map(x => Data$dEither.$Either("Right", x));
        const $4 = $0.pure({fields: [], validator: x => $3(Applicative0.pure(x)), render: v$1 => []});
        return v$1 => $4;
      })())(booleanField({layout: Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.Inline, initial: true}));
      return x => {
        const $4 = $3(x);
        return s => $1.map(v1 => Data$dTuple.$Tuple(
          (() => {
            const $5 = v1._1;
            return {
              fields: $5.fields,
              validator: x$1 => $2.map(m => {
                if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
                if (m.tag === "Right") {
                  return Data$dEither.$Either(
                    "Right",
                    (() => {
                      const $6 = m._1;
                      return v2 => ({useRoleTokens: $6, possibleAddress: v2});
                    })()
                  );
                }
                $runtime.fail();
              })($5.validator(x$1)),
              render: $5.render
            };
          })(),
          v1._2
        ))($4(s));
      };
    })())(addressInput1(cardanoMultiplatformLib)({layout: Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.Inline, name: Data$dMaybe.$Maybe("Just", "addr")})));
  };
};
const reqValidator = dictApplicative => missingError => x => dictApplicative.pure((() => {
  if (x.tag === "Nothing") { return Data$dEither.$Either("Left", [missingError]); }
  if (x.tag === "Just") { return Data$dEither.$Either("Right", x._1); }
  $runtime.fail();
})());
const reqValidator$p = dictApplicative => x => dictApplicative.pure((() => {
  if (x.tag === "Nothing") { return Data$dEither.$Either("Left", ["This field is required"]); }
  if (x.tag === "Just") { return Data$dEither.$Either("Right", x._1); }
  $runtime.fail();
})());
const reqValidator$p1 = x => {
  const $0 = (() => {
    if (x.tag === "Nothing") { return Data$dEither.$Either("Left", ["This field is required"]); }
    if (x.tag === "Just") { return Data$dEither.$Either("Right", x._1); }
    $runtime.fail();
  })();
  return () => $0;
};
const mkEscrowForm = cardanoMultiplatformLib => apply(apply(apply(apply((() => {
  const $0 = intInput({helpText: Data$dMaybe.Nothing, initial: "", label: Data$dMaybe.$Maybe("Just", "Price"), touched: false});
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
                        return v1 => v2 => v3 => v4 => (
                          {
                            price: Data$dBigInt.fromInt($5),
                            mediationDeadline: Data$dDateTime$dInstant.fromDateTime(v1),
                            complaintDeadline: Data$dDateTime$dInstant.fromDateTime(v2),
                            complaintResponseDeadline: Data$dDateTime$dInstant.fromDateTime(v3),
                            paymentDeadline: Data$dDateTime$dInstant.fromDateTime(v4)
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
})())(dateTimeField(Data$dMaybe.Nothing)(Data$dMaybe.$Maybe("Just", "Mediation timeout"))(Data$dMaybe.$Maybe("Just", "MEDIATOR timeout help"))(reqValidator$p1)))(dateTimeField(Data$dMaybe.Nothing)(Data$dMaybe.$Maybe(
  "Just",
  "Complaint Deadline timeout"
))(Data$dMaybe.$Maybe("Just", "COMPLAINT timeout help"))(reqValidator$p1)))(dateTimeField(Data$dMaybe.Nothing)(Data$dMaybe.$Maybe("Just", "Complaint Response Deadline timeout"))(Data$dMaybe.$Maybe(
  "Just",
  "COMPLAINT RESPONSE timeout help"
))(reqValidator$p1)))(dateTimeField(Data$dMaybe.Nothing)(Data$dMaybe.$Maybe("Just", "Payment Deadline timeout"))(Data$dMaybe.$Maybe("Just", "PAYMENT timeout help"))(reqValidator$p1))(Data$dMaybe.Nothing)(0)._1;
const mkEscrowContract = v => Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Contract(
  "When",
  [
    Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Case(
      "Case",
      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Action(
        "Deposit",
        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Role", "Seller"),
        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Role", "Buyer"),
        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Token("", ""),
        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("Constant", v.price)
      ),
      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Contract(
        "When",
        [
          Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Case(
            "Case",
            Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Action(
              "Choice",
              Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$ChoiceId("Everything is alright", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Role", "Buyer")),
              [Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Bound(Data$dBigInt.semiringBigInt.zero, Data$dBigInt.semiringBigInt.zero)]
            ),
            Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Close
          ),
          Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Case(
            "Case",
            Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Action(
              "Choice",
              Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$ChoiceId("Report problem", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Role", "Buyer")),
              [Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Bound(Data$dBigInt.semiringBigInt.one, Data$dBigInt.semiringBigInt.one)]
            ),
            Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Contract(
              "Pay",
              Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Role", "Seller"),
              Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Payee("Account", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Role", "Buyer")),
              Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Token("", ""),
              Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("Constant", v.price),
              Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Contract(
                "When",
                [
                  Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Case(
                    "Case",
                    Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Action(
                      "Choice",
                      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$ChoiceId("Confirm problem", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Role", "Seller")),
                      [Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Bound(Data$dBigInt.semiringBigInt.one, Data$dBigInt.semiringBigInt.one)]
                    ),
                    Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Close
                  ),
                  Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Case(
                    "Case",
                    Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Action(
                      "Choice",
                      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$ChoiceId("Dispute problem", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Role", "Seller")),
                      [Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Bound(Data$dBigInt.semiringBigInt.zero, Data$dBigInt.semiringBigInt.zero)]
                    ),
                    Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Contract(
                      "When",
                      [
                        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Case(
                          "Case",
                          Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Action(
                            "Choice",
                            Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$ChoiceId("Dismiss claim", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Role", "Mediator")),
                            [Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Bound(Data$dBigInt.semiringBigInt.zero, Data$dBigInt.semiringBigInt.zero)]
                          ),
                          Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Contract(
                            "Pay",
                            Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Role", "Buyer"),
                            Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Payee("Party", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Role", "Seller")),
                            Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Token("", ""),
                            Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("Constant", v.price),
                            Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Close
                          )
                        ),
                        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Case(
                          "Case",
                          Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Action(
                            "Choice",
                            Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$ChoiceId("Confirm problem", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Role", "Mediator")),
                            [Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Bound(Data$dBigInt.semiringBigInt.one, Data$dBigInt.semiringBigInt.one)]
                          ),
                          Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Close
                        )
                      ],
                      v.mediationDeadline,
                      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Close
                    )
                  )
                ],
                v.complaintResponseDeadline,
                Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Close
              )
            )
          )
        ],
        v.complaintDeadline,
        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Close
      )
    )
  ],
  v.paymentDeadline,
  Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Close
);
const mkComponent = /* #__PURE__ */ (() => Control$dMonad$dReader$dTrans.bindReaderT(Effect.bindEffect).bind(Control$dMonad$dReader$dTrans.monadReaderT(Effect.monadEffect).Bind1().Apply0().Functor0().map(v => v.cardanoMultiplatformLib)(Effect.pureE))(cardanoMultiplatformLib => {
  const formSpec = mkEscrowForm(cardanoMultiplatformLib);
  return liftEffect(React$dBasic$dHooks.component("ContractTemplates.Escrow")(v => {
    const $0 = v.onDismiss;
    const $1 = React$dBasic$dHooks.useState$p(Data$dMaybe.Nothing);
    return () => {
      const a = $1();
      const a$1 = React$dBasic$dHooks$dUseStatelessFormSpec.useStatelessFormSpec({
        spec: formSpec,
        onSubmit: x => {
          if (x.result.tag === "Just" && x.result._1._1.tag === "Right") { return a._2(Data$dMaybe.$Maybe("Just", mkEscrowContract(x.result._1._1._1))); }
          return () => {};
        },
        validationDebounce: 0.5
      })();
      const fields = formSpec.render(a$1.formState);
      return pure1(Component$dBodyLayout.component({
        title: "Escrow",
        description: "Regulates a money exchange between a \"Buyer\" and a \"Seller\". If there is a disagreement, an \"Mediator\" will decide whether the money is refunded or paid to the \"Seller\".",
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
  }));
}))();
export {
  $RoleTokenUsage,
  UseAddress,
  UseRoleTokens,
  apply,
  dateTimeField,
  defaultsRecord,
  intInput,
  liftEffect,
  mkComponent,
  mkEscrowContract,
  mkEscrowForm,
  pure1,
  reqValidator,
  reqValidator$p,
  reqValidator$p1,
  roleTokenUsageField
};
