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
const textInput = /* #__PURE__ */ Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.textInput(Data$dIdentity.monadIdentity)(Effect.monadEffect)(defaultsRecord);
const dateTimeField = /* #__PURE__ */ Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.dateTimeField(Data$dIdentity.monadIdentity)(Effect.monadEffect);
const pure1 = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
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
const swapFormSpec = /* #__PURE__ */ (() => apply(apply(apply(apply(apply(apply(apply((() => {
  const $0 = intInput({helpText: Data$dMaybe.Nothing, initial: "", label: Data$dMaybe.$Maybe("Just", "Token A Amount"), touched: false});
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
                        return v1 => v2 => v3 => v4 => v5 => v6 => v7 => (
                          {
                            tokenAAmount: Data$dBigInt.fromInt($5),
                            tokenAName: v1,
                            tokenACurrencySymbol: v2,
                            tokenBAmount: Data$dBigInt.fromInt(v3),
                            tokenBName: v4,
                            tokenBCurrencySymbol: v5,
                            tokenADepositDeadline: Data$dDateTime$dInstant.fromDateTime(v6),
                            tokenBDepositDeadline: Data$dDateTime$dInstant.fromDateTime(v7)
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
})())(textInput({helpText: Data$dMaybe.Nothing, initial: "", label: Data$dMaybe.$Maybe("Just", "Token A Name"), touched: false, validator: reqValidator$p1})))(textInput({
  helpText: Data$dMaybe.Nothing,
  initial: "",
  label: Data$dMaybe.$Maybe("Just", "Token A Currency Symbol"),
  touched: false,
  validator: reqValidator$p1
})))(intInput({helpText: Data$dMaybe.Nothing, initial: "", label: Data$dMaybe.$Maybe("Just", "Token B Amount"), touched: false})))(textInput({
  helpText: Data$dMaybe.Nothing,
  initial: "",
  label: Data$dMaybe.$Maybe("Just", "Token B Name"),
  touched: false,
  validator: reqValidator$p1
})))(textInput({helpText: Data$dMaybe.Nothing, initial: "", label: Data$dMaybe.$Maybe("Just", "Token B Currency Symbol"), touched: false, validator: reqValidator$p1})))(dateTimeField(Data$dMaybe.Nothing)(Data$dMaybe.$Maybe(
  "Just",
  "Token A Deposit timeout"
))(Data$dMaybe.$Maybe("Just", "Token A timeout help"))(reqValidator$p1)))(dateTimeField(Data$dMaybe.Nothing)(Data$dMaybe.$Maybe("Just", "Token B Deposit timeout"))(Data$dMaybe.$Maybe(
  "Just",
  "Token B timeout help"
))(reqValidator$p1))(Data$dMaybe.Nothing)(0)._1)();
const mkSwapContract = v => Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Contract(
  "When",
  [
    Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Case(
      "Case",
      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Action(
        "Deposit",
        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Role", "Token A provider"),
        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Role", "Token A provider"),
        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Token(v.tokenACurrencySymbol, v.tokenAName),
        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("Constant", v.tokenAAmount)
      ),
      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Contract(
        "When",
        [
          Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Case(
            "Case",
            Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Action(
              "Deposit",
              Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Role", "Token B provider"),
              Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Role", "Token B provider"),
              Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Token(v.tokenBCurrencySymbol, v.tokenBName),
              Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("Constant", v.tokenBAmount)
            ),
            Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Contract(
              "Pay",
              Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Role", "Token A provider"),
              Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Payee("Party", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Role", "Token B provider")),
              Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Token(v.tokenACurrencySymbol, v.tokenAName),
              Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("Constant", v.tokenAAmount),
              Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Contract(
                "Pay",
                Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Role", "Token B provider"),
                Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Payee("Party", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Role", "Token A provider")),
                Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Token(v.tokenBCurrencySymbol, v.tokenBName),
                Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("Constant", v.tokenBAmount),
                Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Close
              )
            )
          )
        ],
        v.tokenBDepositDeadline,
        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Close
      )
    )
  ],
  v.tokenADepositDeadline,
  Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Close
);
const mkComponent = /* #__PURE__ */ (() => Control$dMonad$dReader$dTrans.monadEffectReader(Effect$dClass.monadEffectEffect).liftEffect(React$dBasic$dHooks.component("ContractTemplates.Swap")(v => {
  const $0 = v.onDismiss;
  const $1 = React$dBasic$dHooks.useState$p(Data$dMaybe.Nothing);
  return () => {
    const a = $1();
    const a$1 = React$dBasic$dHooks$dUseStatelessFormSpec.useStatelessFormSpec({
      spec: swapFormSpec,
      onSubmit: x => {
        if (x.result.tag === "Just" && x.result._1._1.tag === "Right") { return a._2(Data$dMaybe.$Maybe("Just", mkSwapContract(x.result._1._1._1))); }
        return () => {};
      },
      validationDebounce: 0.5
    })();
    const fields = swapFormSpec.render(a$1.formState);
    return pure1(Component$dBodyLayout.component({
      title: "Swap",
      description: "Takes currency amount from one party and another currency amount from another party, and it swaps them atomically.",
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
export {apply, dateTimeField, defaultsRecord, intInput, mkComponent, mkSwapContract, pure1, reqValidator, reqValidator$p, reqValidator$p1, swapFormSpec, textInput};
