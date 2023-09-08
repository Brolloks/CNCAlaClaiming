import * as $runtime from "../runtime.js";
import * as CardanoMultiplatformLib from "../CardanoMultiplatformLib/index.js";
import * as Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders from "../Contrib.ReactBootstrap.FormSpecBuilders.StatelessFormSpecBuilders/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dFunctorWithIndex from "../Data.FunctorWithIndex/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dString$dRegex from "../Data.String.Regex/index.js";
import * as Data$dString$dRegex$dFlags from "../Data.String.Regex.Flags/index.js";
import * as Data$dString$dRegex$dUnsafe from "../Data.String.Regex.Unsafe/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dRandom from "../Effect.Random/index.js";
import * as HexString from "../HexString/index.js";
import * as React$dBasic from "../React.Basic/index.js";
import * as React$dBasic$dDOM$dGenerated from "../React.Basic.DOM.Generated/index.js";
import * as React$dBasic$dDOM$dSimplified$dGenerated from "../React.Basic.DOM.Simplified.Generated/index.js";
import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
const $Field = (tag, _1) => ({tag, _1});
const $MultiChoiceField = (tag, _1) => ({tag, _1});
const $SingleChoiceField = (tag, _1) => ({tag, _1});
const $$for = /* #__PURE__ */ (() => {
  const traverse2 = Data$dTraversable.traversableArray.traverse(Effect.applicativeEffect);
  return x => f => traverse2(f)(x);
})();
const sequence = /* #__PURE__ */ (() => Data$dTraversable.traversableArray.traverse(Data$dEither.applicativeEither)(Data$dTraversable.identity))();
const length = /* #__PURE__ */ Data$dFoldable.foldlArray(c => v => 1 + c | 0)(0);
const input = /* #__PURE__ */ React$dBasic.element(React$dBasic$dDOM$dGenerated._input$p);
const pure1 = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const RadioButtonField = value0 => $SingleChoiceField("RadioButtonField", value0);
const SelectField = value0 => $SingleChoiceField("SelectField", value0);
const SelectMultipleField = value0 => $MultiChoiceField("SelectMultipleField", value0);
const CheckboxField = value0 => $MultiChoiceField("CheckboxField", value0);
const SingleChoiceField = value0 => $Field("SingleChoiceField", value0);
const MultiChoiceField = value0 => $Field("MultiChoiceField", value0);
const InputField = /* #__PURE__ */ $Field("InputField");
const TextArea = /* #__PURE__ */ $Field("TextArea");
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
const option = value => label1 => Data$dTuple.$Tuple(value, Data$dTuple.$Tuple(label1, false));
const multiAddressInput = dictMonad => {
  const textArea = Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.textArea(dictMonad);
  return dictMonadEffect => {
    const Monad0 = dictMonadEffect.Monad0();
    const $0 = Monad0.Bind1();
    const $1 = Monad0.Applicative0();
    const textArea1 = textArea(Monad0);
    return () => () => dictDefaults => {
      const textArea2 = textArea1(dictDefaults);
      return cardanoMultiplatformLib => props => {
        const separator = Data$dString$dRegex$dUnsafe.unsafeRegex("[, \n]+")(Data$dString$dRegex$dFlags.noFlags);
        return textArea2({
          ...props,
          validator: a => $0.bind((() => {
            if (a.tag === "Just") {
              if (Data$dString$dCommon.trim(a._1) === "") { return $1.pure(Data$dEither.$Either("Right", [])); }
              return dictMonadEffect.liftEffect((() => {
                const $2 = $$for(Data$dString$dRegex.split(separator)(Data$dString$dCommon.trim(a._1)))(address => {
                  const $2 = CardanoMultiplatformLib.bech32FromString(cardanoMultiplatformLib)(address);
                  return () => {
                    const v1 = $2();
                    if (v1.tag === "Nothing") { return Data$dEither.$Either("Left", ["Invalid bech32 address: " + address]); }
                    if (v1.tag === "Just") { return Data$dEither.$Either("Right", v1._1); }
                    $runtime.fail();
                  };
                });
                return () => {
                  const addresses$p = $2();
                  return sequence(addresses$p);
                };
              })());
            }
            return $1.pure(Data$dEither.$Either("Right", []));
          })())(x => Monad0.Applicative0().pure((() => {
            if (x.tag === "Left") { return Data$dEither.$Either("Left", x._1); }
            if (x.tag === "Right") { return Data$dEither.$Either("Right", x._1); }
            $runtime.fail();
          })()))
        });
      };
    };
  };
};
const mkSingleChoiceField = () => {
  const a$p = Effect$dRandom.random();
  const widgetPrefix = "single-choice-widget-" + Data$dShow.showNumberImpl(a$p) + "-";
  let counterRef = 0;
  return React$dBasic$dHooks.component("SingleChoiceField")(v => {
    const $0 = v.initialValue;
    const $1 = v.type;
    return () => {
      const a = React$dBasic$dHooks.useState_(($2, $3) => Data$dTuple.$Tuple($2, $3), $0);
      const a$1 = React$dBasic$dHooks.useState_(($2, $3) => Data$dTuple.$Tuple($2, $3), Data$dMaybe.Nothing);
      React$dBasic$dHooks.useEffect_(
        (v$1, v1) => true,
        undefined,
        () => {
          const counter = counterRef;
          counterRef = counter + 1 | 0;
          a$1._2((() => {
            const $2 = Data$dMaybe.$Maybe("Just", widgetPrefix + Data$dShow.showIntImpl(counter) + "-");
            return v$1 => $2;
          })())();
          return () => {};
        }
      );
      return pure1((() => {
        if ($1.tag === "SelectField") {
          return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalselect$p)({
            children: Data$dFunctor.arrayMap(v3 => React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaloption$p)({
              children: [v3._2._1],
              disabled: v3._2._2,
              value: v3._1
            }))($1._1),
            className: "form-control",
            onChange: (() => {
              const $2 = Data$dTraversable.traversableMaybe.traverse(Effect.applicativeEffect)($2 => {
                const $3 = v.onValueChange($2);
                return () => {
                  $3();
                  return a._2(v$1 => $2)();
                };
              });
              return x => {
                const $3 = $2(Data$dNullable.nullable(x.target.value, Data$dMaybe.Nothing, Data$dMaybe.Just));
                $3();
              };
            })(),
            value: a._1
          });
        }
        if ($1.tag === "RadioButtonField") {
          if (a$1._1.tag === "Just") {
            const $2 = a$1._1._1;
            const inputType = length($1._1) === 1 ? "checkbox" : "radio";
            return React$dBasic$dDOM$dGenerated.div1({
              children: Data$dFunctorWithIndex.mapWithIndexArray(idx => v3 => {
                const id = $2 + Data$dShow.showIntImpl(idx);
                const checked = a._1 === v3._1;
                return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                  children: [
                    React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                      children: [
                        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                          children: [
                            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internallabel$p)({children: [v3._2._1], className: "form-check-label", htmlFor: id})
                          ],
                          className: "col-6"
                        }),
                        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                          children: [
                            input({
                              className: "form-check-input large-switch",
                              type: inputType,
                              checked,
                              id,
                              onChange: (() => {
                                const $3 = (() => {
                                  if (checked) {
                                    const $3 = v.onValueChange("");
                                    return () => {
                                      $3();
                                      return a._2(v$1 => "")();
                                    };
                                  }
                                  const $3 = v3._1;
                                  const $4 = v.onValueChange($3);
                                  return () => {
                                    $4();
                                    return a._2(v$1 => $3)();
                                  };
                                })();
                                return v$1 => $3();
                              })(),
                              disabled: v3._2._2,
                              name: "radio"
                            })
                          ],
                          className: "col-6 d-flex justify-content-end"
                        })
                      ],
                      className: "row"
                    })
                  ],
                  className: "form-check form-switch my-3 p-0"
                });
              })($1._1)
            });
          }
          if (a$1._1.tag === "Nothing") { return React$dBasic.empty; }
        }
        $runtime.fail();
      })())();
    };
  })();
};
const mkBooleanField = () => {
  const singleChoiceField = mkSingleChoiceField();
  return v => singleChoiceField({
    initialValue: v.initialValue ? "on" : "",
    onValueChange: value => v.onToggle(value === "on"),
    type: $SingleChoiceField("RadioButtonField", [Data$dTuple.$Tuple("on", Data$dTuple.$Tuple(v.label, v.disabled))])
  });
};
const currencySymbolInput = dictMonad => {
  const textInput = Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.textInput(dictMonad);
  return dictMonadEffect => {
    const Monad0 = dictMonadEffect.Monad0();
    const $0 = Monad0.Bind1();
    const textInput1 = textInput(Monad0);
    return () => () => dictDefaults => {
      const textInput2 = textInput1(dictDefaults);
      return props => textInput2({
        ...props,
        validator: a => $0.bind((() => {
          if (a.tag === "Nothing") { return Monad0.Applicative0().pure(Data$dEither.$Either("Right", Data$dMaybe.Nothing)); }
          if (a.tag === "Just") {
            return dictMonadEffect.liftEffect((() => {
              const $1 = HexString.hex(Data$dString$dCommon.trim(a._1));
              if ($1.tag === "Just") {
                if (Data$dString$dCodeUnits.length($1._1) === 64) { return () => Data$dEither.$Either("Right", Data$dMaybe.$Maybe("Just", $1._1)); }
                return () => Data$dEither.$Either("Left", ["Invalid hex value"]);
              }
              if ($1.tag === "Nothing") { return () => Data$dEither.$Either("Left", ["Invalid hex value"]); }
              $runtime.fail();
            })());
          }
          $runtime.fail();
        })())(x => Monad0.Applicative0().pure((() => {
          if (x.tag === "Left") { return Data$dEither.$Either("Left", x._1); }
          if (x.tag === "Right") { return Data$dEither.$Either("Right", x._1); }
          $runtime.fail();
        })()))
      });
    };
  };
};
const choice = value => label1 => Data$dTuple.$Tuple(value, Data$dTuple.$Tuple(label1, false));
const addressInput = dictMonad => {
  const textInput = Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.textInput(dictMonad);
  return dictMonadEffect => {
    const Monad0 = dictMonadEffect.Monad0();
    const $0 = Monad0.Bind1();
    const textInput1 = textInput(Monad0);
    return () => () => dictDefaults => {
      const textInput2 = textInput1(dictDefaults);
      return cardanoMultiplatformLib => props => textInput2({
        ...props,
        validator: a => $0.bind((() => {
          if (a.tag === "Nothing") { return Monad0.Applicative0().pure(Data$dEither.$Either("Right", Data$dMaybe.Nothing)); }
          if (a.tag === "Just") {
            return dictMonadEffect.liftEffect((() => {
              const $1 = CardanoMultiplatformLib.bech32FromString(cardanoMultiplatformLib)(a._1);
              return () => {
                const v1 = $1();
                if (v1.tag === "Nothing") { return Data$dEither.$Either("Left", ["Invalid bech32 address"]); }
                if (v1.tag === "Just") { return Data$dEither.$Either("Right", Data$dMaybe.$Maybe("Just", v1._1)); }
                $runtime.fail();
              };
            })());
          }
          $runtime.fail();
        })())(x => Monad0.Applicative0().pure((() => {
          if (x.tag === "Left") { return Data$dEither.$Either("Left", x._1); }
          if (x.tag === "Right") { return Data$dEither.$Either("Right", x._1); }
          $runtime.fail();
        })()))
      });
    };
  };
};
export {
  $Field,
  $MultiChoiceField,
  $SingleChoiceField,
  CheckboxField,
  InputField,
  MultiChoiceField,
  RadioButtonField,
  SelectField,
  SelectMultipleField,
  SingleChoiceField,
  TextArea,
  addressInput,
  choice,
  currencySymbolInput,
  $$for as for,
  input,
  length,
  mkBooleanField,
  mkSingleChoiceField,
  multiAddressInput,
  option,
  pure1,
  reqValidator,
  reqValidator$p,
  sequence
};
