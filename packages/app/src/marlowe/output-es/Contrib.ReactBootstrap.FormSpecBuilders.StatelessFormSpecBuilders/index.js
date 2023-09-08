import * as $runtime from "../runtime.js";
import * as Contrib$dPolyform$dFormSpecBuilder from "../Contrib.Polyform.FormSpecBuilder/index.js";
import * as Contrib$dPolyform$dFormSpecs$dStatelessFormSpec from "../Contrib.Polyform.FormSpecs.StatelessFormSpec/index.js";
import * as Control$dMonad$dReader$dTrans from "../Control.Monad.Reader.Trans/index.js";
import * as Control$dMonad$dState$dTrans from "../Control.Monad.State.Trans/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dArray$dArrayAL from "../Data.Array.ArrayAL/index.js";
import * as Data$dDateTime from "../Data.DateTime/index.js";
import * as Data$dDateTime$dISO from "../Data.DateTime.ISO/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFormatter$dDateTime from "../Data.Formatter.DateTime/index.js";
import * as Data$dFormatter$dParser$dNumber from "../Data.Formatter.Parser.Number/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dLazy from "../Data.Lazy/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import * as Data$dSemigroup from "../Data.Semigroup/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dTime from "../Data.Time/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Data$dUndefined$dNoProblem from "../Data.Undefined.NoProblem/index.js";
import * as Data$dUnfoldable1 from "../Data.Unfoldable1/index.js";
import * as Effect from "../Effect/index.js";
import * as Foreign from "../Foreign/index.js";
import * as Parsing from "../Parsing/index.js";
import * as Parsing$dCombinators from "../Parsing.Combinators/index.js";
import * as Parsing$dString from "../Parsing.String/index.js";
import * as Polyform$dBatteries$dDecimal from "../Polyform.Batteries.Decimal/index.js";
import * as Polyform$dBatteries$dInt from "../Polyform.Batteries.Int/index.js";
import * as Polyform$dBatteries$dNumber from "../Polyform.Batteries.Number/index.js";
import * as Polyform$dBatteries$dUrlEncoded$dDuals from "../Polyform.Batteries.UrlEncoded.Duals/index.js";
import * as Polyform$dBatteries$dUrlEncoded$dTypes$dErrors from "../Polyform.Batteries.UrlEncoded.Types.Errors/index.js";
import * as Polyform$dValidator from "../Polyform.Validator/index.js";
import * as React$dBasic from "../React.Basic/index.js";
import * as React$dBasic$dDOM$dGenerated from "../React.Basic.DOM.Generated/index.js";
import * as React$dBasic$dDOM$dSimplified$dGenerated from "../React.Basic.DOM.Simplified.Generated/index.js";
import * as ReactBootstrap$dForm$dCheck from "../ReactBootstrap.Form.Check/index.js";
import * as ReactBootstrap$dForm$dControl from "../ReactBootstrap.Form.Control/index.js";
import * as ReactBootstrap$dForm$dSelect from "../ReactBootstrap.Form.Select/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Record$dUnsafe$dUnion from "../Record.Unsafe.Union/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const $Breakpoint = tag => tag;
const $ChoiceFieldChoices = (tag, _1) => ({tag, _1});
const $FieldLayout = (tag, _1) => ({tag, _1});
const $FormControlSizing = tag => tag;
const $LabelSpacing = tag => tag;
const $UseChoiceField = (tag, _1) => ({tag, _1});
const filterKeys = /* #__PURE__ */ Data$dMap$dInternal.filterKeys(Data$dOrd.ordString);
const eq = /* #__PURE__ */ (() => Data$dMap$dInternal.eqMap(Data$dEq.eqString)({eq: Data$dEq.eqArrayImpl(Data$dEq.eqStringImpl)}).eq)();
const filterKeys1 = /* #__PURE__ */ Data$dMap$dInternal.filterKeys(Data$dOrd.ordString);
const foldMapWithIndex = /* #__PURE__ */ (() => Data$dMap$dInternal.foldableWithIndexMap.foldMapWithIndex(React$dBasic.monoidJSX))();
const $$null = /* #__PURE__ */ Data$dFoldable.foldrArray(v => v1 => false)(true);
const traverse_ = /* #__PURE__ */ Data$dFoldable.traverse_(Effect.applicativeEffect)(Data$dFoldable.foldableMaybe);
const fold3 = /* #__PURE__ */ (() => Data$dFoldable.foldableArray.foldMap(React$dBasic.monoidJSX)(Data$dFoldable.identity))();
const choiceValidator = /* #__PURE__ */ Polyform$dValidator.choiceValidator(Data$dSemigroup.semigroupArray);
const parseISODate = /* #__PURE__ */ Data$dDateTime$dISO.parseISODate(Data$dIdentity.monadIdentity);
const parseDigit = /* #__PURE__ */ Data$dFormatter$dParser$dNumber.parseDigit(Data$dIdentity.monadIdentity);
const defaultsRecord = {defaults: b => a => Record$dUnsafe$dUnion.unsafeUnionFn(a, b)};
const Col1Label = /* #__PURE__ */ $LabelSpacing("Col1Label");
const Col2Label = /* #__PURE__ */ $LabelSpacing("Col2Label");
const Col3Label = /* #__PURE__ */ $LabelSpacing("Col3Label");
const Col4Label = /* #__PURE__ */ $LabelSpacing("Col4Label");
const Col5Label = /* #__PURE__ */ $LabelSpacing("Col5Label");
const Col6Label = /* #__PURE__ */ $LabelSpacing("Col6Label");
const FormControlSm = /* #__PURE__ */ $FormControlSizing("FormControlSm");
const FormControlLg = /* #__PURE__ */ $FormControlSizing("FormControlLg");
const Inline = /* #__PURE__ */ $FieldLayout("Inline");
const MultiColumn = value0 => $FieldLayout("MultiColumn", value0);
const RadioButtonFieldChoices = value0 => $ChoiceFieldChoices("RadioButtonFieldChoices", value0);
const SelectFieldChoices = value0 => $ChoiceFieldChoices("SelectFieldChoices", value0);
const UseRadioButtonField = value0 => $UseChoiceField("UseRadioButtonField", value0);
const UseSelectField = value0 => $UseChoiceField("UseSelectField", value0);
const Sm = /* #__PURE__ */ $Breakpoint("Sm");
const Md = /* #__PURE__ */ $Breakpoint("Md");
const Lg = /* #__PURE__ */ $Breakpoint("Lg");
const eqLabelSpacing = {
  eq: x => y => {
    if (x === "Col1Label") { return y === "Col1Label"; }
    if (x === "Col2Label") { return y === "Col2Label"; }
    if (x === "Col3Label") { return y === "Col3Label"; }
    if (x === "Col4Label") { return y === "Col4Label"; }
    if (x === "Col5Label") { return y === "Col5Label"; }
    return x === "Col6Label" && y === "Col6Label";
  }
};
const ordLabelSpacing = {
  compare: x => y => {
    if (x === "Col1Label") {
      if (y === "Col1Label") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "Col1Label") { return Data$dOrdering.GT; }
    if (x === "Col2Label") {
      if (y === "Col2Label") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "Col2Label") { return Data$dOrdering.GT; }
    if (x === "Col3Label") {
      if (y === "Col3Label") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "Col3Label") { return Data$dOrdering.GT; }
    if (x === "Col4Label") {
      if (y === "Col4Label") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "Col4Label") { return Data$dOrdering.GT; }
    if (x === "Col5Label") {
      if (y === "Col5Label") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "Col5Label") { return Data$dOrdering.GT; }
    if (x === "Col6Label" && y === "Col6Label") { return Data$dOrdering.EQ; }
    $runtime.fail();
  },
  Eq0: () => eqLabelSpacing
};
const eqFieldLayout = {
  eq: x => y => {
    if (x.tag === "Inline") { return y.tag === "Inline"; }
    return x.tag === "MultiColumn" && y.tag === "MultiColumn" && (() => {
      if (x._1.lg === "Col1Label") { return y._1.lg === "Col1Label"; }
      if (x._1.lg === "Col2Label") { return y._1.lg === "Col2Label"; }
      if (x._1.lg === "Col3Label") { return y._1.lg === "Col3Label"; }
      if (x._1.lg === "Col4Label") { return y._1.lg === "Col4Label"; }
      if (x._1.lg === "Col5Label") { return y._1.lg === "Col5Label"; }
      return x._1.lg === "Col6Label" && y._1.lg === "Col6Label";
    })() && (() => {
      if (x._1.md === "Col1Label") { return y._1.md === "Col1Label"; }
      if (x._1.md === "Col2Label") { return y._1.md === "Col2Label"; }
      if (x._1.md === "Col3Label") { return y._1.md === "Col3Label"; }
      if (x._1.md === "Col4Label") { return y._1.md === "Col4Label"; }
      if (x._1.md === "Col5Label") { return y._1.md === "Col5Label"; }
      return x._1.md === "Col6Label" && y._1.md === "Col6Label";
    })() && (() => {
      if (x._1.sm === "Col1Label") { return y._1.sm === "Col1Label"; }
      if (x._1.sm === "Col2Label") { return y._1.sm === "Col2Label"; }
      if (x._1.sm === "Col3Label") { return y._1.sm === "Col3Label"; }
      if (x._1.sm === "Col4Label") { return y._1.sm === "Col4Label"; }
      if (x._1.sm === "Col5Label") { return y._1.sm === "Col5Label"; }
      return x._1.sm === "Col6Label" && y._1.sm === "Col6Label";
    })();
  }
};
const ordFieldLayout = {
  compare: x => y => {
    if (x.tag === "Inline") {
      if (y.tag === "Inline") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Inline") { return Data$dOrdering.GT; }
    if (x.tag === "MultiColumn" && y.tag === "MultiColumn") {
      const v = ordLabelSpacing.compare(x._1.lg)(y._1.lg);
      if (v === "LT") { return Data$dOrdering.LT; }
      if (v === "GT") { return Data$dOrdering.GT; }
      const v1 = ordLabelSpacing.compare(x._1.md)(y._1.md);
      if (v1 === "LT") { return Data$dOrdering.LT; }
      if (v1 === "GT") { return Data$dOrdering.GT; }
      return ordLabelSpacing.compare(x._1.sm)(y._1.sm);
    }
    $runtime.fail();
  },
  Eq0: () => eqFieldLayout
};
const selectFieldChoice = label3 => value => ({disabled: false, helpText: Data$dMaybe.Nothing, label: label3, value});
const requiredV = dictMonad => {
  const $0 = dictMonad.Applicative0();
  return msg => v => i => dictMonad.Bind1().bind($0.pure((() => {
    if (i.tag === "Nothing") { return Data$dEither.$Either("Left", [msg]); }
    if (i.tag === "Just") { return Data$dEither.$Either("Right", i._1); }
    $runtime.fail();
  })()))(res$p => {
    if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
    if (res$p.tag === "Right") { return v(res$p._1); }
    $runtime.fail();
  });
};
const requiredV$p = dictMonad => {
  const $0 = dictMonad.Applicative0();
  return v => i => dictMonad.Bind1().bind($0.pure((() => {
    if (i.tag === "Nothing") { return Data$dEither.$Either("Left", ["This field is required"]); }
    if (i.tag === "Just") { return Data$dEither.$Either("Right", i._1); }
    $runtime.fail();
  })()))(res$p => {
    if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
    if (res$p.tag === "Right") { return v(res$p._1); }
    $runtime.fail();
  });
};
const renderPossibleHelpText = v1 => {
  if (v1.tag === "Nothing") { return React$dBasic.empty; }
  if (v1.tag === "Just") {
    return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
      children: [React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalsmall$p)({children: [v1._1], className: "form-text text-muted"})],
      className: "m-1"
    });
  }
  $runtime.fail();
};
const radioFieldChoice = value => label3 => ({disabled: false, helpText: Data$dMaybe.Nothing, label: label3, value});
const multiField = dictMonad => {
  const $0 = Control$dMonad$dReader$dTrans.bindReaderT(Control$dMonad$dState$dTrans.bindStateT(dictMonad));
  const $1 = dictMonad.Bind1().Apply0().Functor0();
  const genId = Contrib$dPolyform$dFormSpecBuilder.genId(dictMonad);
  const $2 = Control$dMonad$dState$dTrans.applicativeStateT(dictMonad);
  return possibleLabel => possibleHelpText => fieldsFormBuilder => $0.bind(x => {
    const $3 = genId(x);
    return s => $1.map(v1 => Data$dTuple.$Tuple(v1._1, v1._2))($3(s));
  })(prefix => $0.bind((() => {
    const $3 = fieldsFormBuilder(prefix + "-");
    return x => $3(Data$dMaybe.$Maybe("Just", prefix));
  })())(form => {
    const matchesPrefix = x => {
      const $3 = Data$dString$dCodeUnits.stripPrefix(prefix + "-")(x);
      if ($3.tag === "Nothing") { return false; }
      if ($3.tag === "Just") { return true; }
      $runtime.fail();
    };
    const $3 = $2.pure({
      fields: form.fields,
      validator: form.validator,
      render: state => [
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
          children: [
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internallabel$p)({
              children: [
                (() => {
                  if (possibleLabel.tag === "Nothing") { return React$dBasic.empty; }
                  if (possibleLabel.tag === "Just") { return possibleLabel._1; }
                  $runtime.fail();
                })()
              ],
              className: "col-sm-3 col-form-label-sm"
            }),
            React$dBasic.fragment([
              React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                children: [
                  React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({children: form.render(state), className: "row row-cols-lg-auto align-items-center"}),
                  renderPossibleHelpText(possibleHelpText)
                ],
                className: "col-sm-9"
              }),
              (() => {
                if (state.errors.tag === "Just") {
                  const $3 = filterKeys1(x => {
                    const $3 = Data$dMap$dInternal.lookup(Data$dOrd.ordString)(x)(state.fields);
                    if ($3.tag === "Just") { return $3._1.touched && matchesPrefix(x); }
                    if ($3.tag === "Nothing") { return false; }
                    $runtime.fail();
                  })(state.errors._1._1);
                  if (eq(filterKeys(key => matchesPrefix(key))(state.query))(filterKeys(key => matchesPrefix(key))(state.errors._1._2))) {
                    return foldMapWithIndex(fieldId => errors => React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                      children: [
                        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                          children: Data$dFunctor.arrayMap(x => React$dBasic$dDOM$dGenerated.div1({children: [x]}))(errors),
                          className: "invalid-feedback d-block",
                          id: fieldId
                        })
                      ],
                      className: "col-sm-9 offset-sm-3"
                    }))($3);
                  }
                  return React$dBasic.empty;
                }
                if (state.errors.tag === "Nothing") { return React$dBasic.empty; }
                $runtime.fail();
              })()
            ])
          ],
          className: "row mb-lg-2 mb-md-1"
        })
      ]
    });
    return v => $3;
  }));
};
const isInline = /* #__PURE__ */ (() => eqFieldLayout.eq(Inline))();
const fieldValidity = dictEq => {
  const $0 = Data$dEq.eqArrayImpl(dictEq.eq);
  const eq3 = (x, y) => {
    if (x.tag === "Nothing") { return y.tag === "Nothing"; }
    return x.tag === "Just" && y.tag === "Just" && $0(x._1)(y._1);
  };
  return touched => value => errors => {
    if (errors.tag === "Just") {
      return {
        errors: errors._1._1,
        isInvalid: touched && (() => {
          const $1 = (() => {
            if (errors.tag === "Just") { return Data$dArray.index(errors._1._2)(0); }
            if (errors.tag === "Nothing") { return Data$dMaybe.Nothing; }
            $runtime.fail();
          })();
          return $1.tag === "Just" && dictEq.eq(value)($1._1);
        })() && !$$null(errors._1._1),
        isValid: eq3(Data$dMaybe.$Maybe("Just", []), errors.tag === "Just" ? Data$dMaybe.$Maybe("Just", errors._1._1) : Data$dMaybe.Nothing)
      };
    }
    return {
      errors: [],
      isInvalid: touched && (() => {
        const $1 = (() => {
          if (errors.tag === "Just") { return Data$dArray.index(errors._1._2)(0); }
          if (errors.tag === "Nothing") { return Data$dMaybe.Nothing; }
          $runtime.fail();
        })();
        return $1.tag === "Just" && dictEq.eq(value)($1._1);
      })() && !$$null([]),
      isValid: eq3(Data$dMaybe.$Maybe("Just", []), errors.tag === "Just" ? Data$dMaybe.$Maybe("Just", errors._1._1) : Data$dMaybe.Nothing)
    };
  };
};
const fieldValidity1 = /* #__PURE__ */ fieldValidity(Data$dEq.eqString);
const renderChoiceField = v => v1 => {
  const label3 = (() => {
    if (v.possibleLabel.tag === "Nothing") { return React$dBasic.empty; }
    if (v.possibleLabel.tag === "Just") {
      if (v.inline) { return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internallegend$p)({children: [v.possibleLabel._1]}); }
      return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internallegend$p)({children: [v.possibleLabel._1], className: "col-sm-3 col-form-label-sm"});
    }
    $runtime.fail();
  })();
  const body = (() => {
    if (v.choices.tag === "RadioButtonFieldChoices") {
      const $0 = v.choices._1.switch;
      return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
        children: Data$dFunctor.arrayMap(v2 => {
          const checked = v2.value === v1.value;
          const v3 = fieldValidity1(v1.touched)(v2.value)(v1.errors);
          return React$dBasic.element(ReactBootstrap$dForm$dCheck._Check)({
            disabled: v2.disabled,
            id: v.name + "-" + v2.value,
            label: React$dBasic.fragment([v2.label, renderPossibleHelpText(v2.helpText)]),
            isValid: v3.isValid,
            isInvalid: v3.isInvalid,
            name: v.name,
            type: $0 ? "switch" : "radio",
            value: v2.value,
            checked,
            onChange: (() => {
              const $1 = v1.onChange(v2.value);
              const $2 = !checked ? $1 : () => {};
              return v$1 => $2();
            })()
          });
        })(v.choices._1.choices),
        className: !v.inline ? "form-check col-sm-9" : "form-check"
      });
    }
    if (v.choices.tag === "SelectFieldChoices") {
      const v2 = fieldValidity1(v1.touched)(v1.value)(v1.errors);
      const select1 = React$dBasic.element(ReactBootstrap$dForm$dSelect._Select)({
        children: Data$dFunctor.arrayMap(v2$1 => React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaloption$p)({
          children: [v2$1.label],
          disabled: v2$1.disabled,
          value: v2$1.value
        }))(v.choices._1.choices),
        className: (() => {
          if (v.inline) { return "mb-md-1"; }
          if (v.choices._1.monospace) { return " font-monospace"; }
          return "";
        })(),
        id: v.name,
        isInvalid: v2.isInvalid,
        isValid: v2.isValid,
        name: v.name,
        onChange: x => traverse_(v1.onChange)(Data$dNullable.nullable(x.target.value, Data$dMaybe.Nothing, Data$dMaybe.Just))(),
        value: v1.value
      });
      if (v.inline) {
        if (v.possibleHelpText.tag === "Nothing") { return select1; }
        if (v.possibleHelpText.tag === "Just") { return React$dBasic$dDOM$dGenerated.div1({children: [select1, renderPossibleHelpText(v.possibleHelpText)]}); }
        $runtime.fail();
      }
      return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({children: [select1, renderPossibleHelpText(v.possibleHelpText)], className: "col-sm-9"});
    }
    $runtime.fail();
  })();
  return [
    v.inline
      ? React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({children: [label3, body], className: "col-12 flex-fill"})
      : React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({children: [label3, body], className: "row mb-2"})
  ];
};
const renderTextArea = v => v1 => React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
  children: [
    React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internallabel$p)({
      children: (() => {
        if (v.possibleLabel.tag === "Nothing") { return []; }
        if (v.possibleLabel.tag === "Just") { return [v.possibleLabel._1]; }
        $runtime.fail();
      })(),
      className: "col-form-label-sm col-sm-3",
      htmlFor: v.name
    }),
    (() => {
      const v2 = fieldValidity1(v1.touched)(v1.value)(v1.errors);
      return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
        children: [
          React$dBasic.fragment([
            React$dBasic.element(ReactBootstrap$dForm$dControl._Control)({
              as: "textarea",
              id: v.name,
              isInvalid: v2.isInvalid,
              isValid: v2.isValid,
              name: v.name,
              onChange: x => {
                const $0 = Data$dNullable.nullable(x.target.value, Data$dMaybe.Nothing, Data$dMaybe.Just);
                return v1.onChange((() => {
                  if ($0.tag === "Nothing") { return ""; }
                  if ($0.tag === "Just") { return $0._1; }
                  $runtime.fail();
                })())();
              },
              placeholder: v.placeholder,
              rows: v.rows,
              value: v1.value
            }),
            fold3([
              (() => {
                const $0 = React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                  children: [React$dBasic$dDOM$dGenerated.ul1({children: Data$dFunctor.arrayMap(x => React$dBasic$dDOM$dGenerated.li1({children: [x]}))(v2.errors)})],
                  className: "invalid-feedback"
                });
                if (v2.isInvalid) { return $0; }
                return React$dBasic.empty;
              })(),
              (() => {
                const $0 = renderPossibleHelpText(v.helpText);
                if (
                  (() => {
                    if (v.helpText.tag === "Nothing") { return false; }
                    if (v.helpText.tag === "Just") { return true; }
                    $runtime.fail();
                  })() && !v2.isInvalid
                ) {
                  return $0;
                }
                return React$dBasic.empty;
              })()
            ])
          ])
        ],
        className: "col-sm-9"
      });
    })()
  ],
  className: "mb-2 row"
});
const defaultChoiceFieldProps = {
  label: Data$dMaybe.Nothing,
  helpText: Data$dMaybe.Nothing,
  missingError: "This field is required",
  name: Data$dMaybe.Nothing,
  initial: "",
  inline: false,
  touched: false
};
const col3spacings = {sm: Col3Label, md: Col3Label, lg: Col3Label};
const defaultTextAreaProps = {
  label: Data$dMaybe.Nothing,
  missingError: "This field is required",
  name: Data$dMaybe.Nothing,
  initial: "",
  layout: /* #__PURE__ */ $FieldLayout("MultiColumn", col3spacings),
  placeholder: "",
  rows: 3,
  helpText: Data$dMaybe.Nothing,
  type: "textarea",
  touched: false,
  max: Data$dUndefined$dNoProblem.undefined,
  min: Data$dUndefined$dNoProblem.undefined,
  sizing: Data$dMaybe.Nothing,
  step: Data$dUndefined$dNoProblem.undefined
};
const defaultTextInputProps = {
  label: Data$dMaybe.Nothing,
  layout: /* #__PURE__ */ $FieldLayout("MultiColumn", col3spacings),
  missingError: "This field is required",
  name: Data$dMaybe.Nothing,
  initial: "",
  placeholder: "",
  helpText: Data$dMaybe.Nothing,
  type: "text",
  touched: false,
  max: Data$dUndefined$dNoProblem.undefined,
  min: Data$dUndefined$dNoProblem.undefined,
  sizing: Data$dMaybe.Nothing,
  step: Data$dUndefined$dNoProblem.undefined
};
const choiceOpt = dictChoice => dictProfunctor => p => dictChoice.Profunctor0().dimap(v2 => {
  if (v2.tag === "Nothing") { return Data$dEither.$Either("Left", undefined); }
  if (v2.tag === "Just") { return Data$dEither.$Either("Right", v2._1); }
  $runtime.fail();
})(v2 => {
  if (v2.tag === "Left") { return Data$dMaybe.Nothing; }
  if (v2.tag === "Right") { return Data$dMaybe.$Maybe("Just", v2._1); }
  $runtime.fail();
})(dictChoice.right(p));
const breakpointToString = v => {
  if (v === "Sm") { return "sm"; }
  if (v === "Md") { return "md"; }
  if (v === "Lg") { return "lg"; }
  $runtime.fail();
};
const labelSpacingToClasses = breakpoint => {
  const breakpointStr = (() => {
    if (breakpoint === "Sm") { return "sm"; }
    if (breakpoint === "Md") { return "md"; }
    if (breakpoint === "Lg") { return "lg"; }
    $runtime.fail();
  })();
  return v => {
    if (v === "Col1Label") { return {labelColClass: "col-" + breakpointStr + "-1", inputColClass: "col-" + breakpointStr + "-11"}; }
    if (v === "Col2Label") { return {labelColClass: "col-" + breakpointStr + "-2", inputColClass: "col-" + breakpointStr + "-10"}; }
    if (v === "Col3Label") { return {labelColClass: "col-" + breakpointStr + "-3", inputColClass: "col-" + breakpointStr + "-9"}; }
    if (v === "Col4Label") { return {labelColClass: "col-" + breakpointStr + "-4", inputColClass: "col-" + breakpointStr + "-8"}; }
    if (v === "Col5Label") { return {labelColClass: "col-" + breakpointStr + "-5", inputColClass: "col-" + breakpointStr + "-7"}; }
    if (v === "Col6Label") { return {labelColClass: "col-" + breakpointStr + "-6", inputColClass: "col-" + breakpointStr + "-6"}; }
    $runtime.fail();
  };
};
const labelSpacingsToClasses = v => {
  const smClasses = labelSpacingToClasses(Sm)(v.sm);
  const mdClasses = labelSpacingToClasses(Md)(v.md);
  const lgClasses = labelSpacingToClasses(Lg)(v.lg);
  return {
    labelColClass: smClasses.labelColClass + " " + mdClasses.labelColClass + " " + lgClasses.labelColClass,
    inputColClass: smClasses.inputColClass + " " + mdClasses.inputColClass + " " + lgClasses.inputColClass
  };
};
const renderBooleanField = v => v1 => {
  const v2 = (() => {
    if (v.layout.tag === "MultiColumn") { return labelSpacingsToClasses(v.layout._1); }
    if (v.layout.tag === "Inline") { return {labelColClass: "", inputColClass: ""}; }
    $runtime.fail();
  })();
  const v3 = Foreign.isUndefined(v.label) ? Data$dMaybe.Nothing : Data$dMaybe.$Maybe("Just", v.label);
  const label$p = (() => {
    if (v3.tag === "Nothing") { return React$dBasic.empty; }
    if (v3.tag === "Just") {
      if (eqFieldLayout.eq(Inline)(v.layout)) { return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internallabel$p)({children: [v3._1]}); }
      return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internallabel$p)({
        children: [v3._1],
        className: "col-form-label-sm " + v2.labelColClass,
        htmlFor: v.name
      });
    }
    $runtime.fail();
  })();
  const checked = "on" === v1.value;
  const v3$1 = fieldValidity1(v1.touched)("on")(v1.errors);
  const body = React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
    children: [
      React$dBasic.element(ReactBootstrap$dForm$dCheck._Check)({
        className: "min-h-1_2rem",
        disabled: v.disabled,
        id: v.name,
        isValid: v3$1.isValid,
        isInvalid: v3$1.isInvalid,
        name: v.name,
        type: v.switch ? "switch" : "radio",
        value: "on",
        checked,
        onChange: (() => {
          const $0 = v1.onChange(checked ? "off" : "on");
          return v$1 => $0();
        })()
      }),
      renderPossibleHelpText(Foreign.isUndefined(v.possibleHelpText) ? Data$dMaybe.Nothing : Data$dMaybe.$Maybe("Just", v.possibleHelpText))
    ],
    className: eqFieldLayout.eq(Inline)(v.layout) ? "form-check " + v2.inputColClass + " ps-0" : "form-check " + v2.inputColClass + " ps-12px"
  });
  return [
    eqFieldLayout.eq(Inline)(v.layout)
      ? React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({children: [label$p, body], className: "col-12 flex-fill"})
      : React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({children: [label$p, body], className: "row mb-2"})
  ];
};
const renderTextInput = v => v1 => {
  const label3 = (() => {
    if (v.possibleLabel.tag === "Nothing") { return React$dBasic.empty; }
    if (v.possibleLabel.tag === "Just") {
      if (v.layout.tag === "Inline") { return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internallabel$p)({children: [v.possibleLabel._1]}); }
      if (v.layout.tag === "MultiColumn") {
        return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internallabel$p)({
          children: [v.possibleLabel._1],
          className: labelSpacingsToClasses(v.layout._1).labelColClass + " col-form-label-sm"
        });
      }
    }
    $runtime.fail();
  })();
  const v2 = fieldValidity1(v1.touched)(v1.value)(v1.errors);
  const input = React$dBasic.element(ReactBootstrap$dForm$dControl._Control)({
    as: "input",
    className: Data$dString$dCommon.joinWith(" ")(Data$dArray.mapMaybe(x => x)([
      eqFieldLayout.eq(Inline)(v.layout) ? Data$dMaybe.$Maybe("Just", "mb-md-1") : Data$dMaybe.Nothing,
      (() => {
        if (v.sizing.tag === "Nothing") { return Data$dMaybe.Nothing; }
        if (v.sizing.tag === "Just") {
          if (v.sizing._1 === "FormControlSm") { return Data$dMaybe.$Maybe("Just", "form-control-sm"); }
          if (v.sizing._1 === "FormControlLg") { return Data$dMaybe.$Maybe("Just", "form-control-lg"); }
        }
        $runtime.fail();
      })()
    ])),
    isInvalid: v2.isInvalid,
    isValid: v2.isValid,
    max: v.max,
    min: v.min,
    name: v.name,
    onChange: x => {
      const $0 = Data$dNullable.nullable(x.target.value, Data$dMaybe.Nothing, Data$dMaybe.Just);
      return v1.onChange((() => {
        if ($0.tag === "Nothing") { return ""; }
        if ($0.tag === "Just") { return $0._1; }
        $runtime.fail();
      })())();
    },
    placeholder: v.placeholder,
    step: v.step,
    type: v.type,
    value: v1.value
  });
  const body = (() => {
    if (v.layout.tag === "Inline") {
      if (v.possibleHelpText.tag === "Nothing") { return input; }
      if (v.possibleHelpText.tag === "Just") { return React$dBasic$dDOM$dGenerated.div1({children: [input, renderPossibleHelpText(v.possibleHelpText)]}); }
      $runtime.fail();
    }
    if (v.layout.tag === "MultiColumn") {
      return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
        children: [
          React$dBasic.fragment([
            input,
            (() => {
              const $0 = React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                children: [React$dBasic$dDOM$dGenerated.ul1({children: Data$dFunctor.arrayMap(x => React$dBasic$dDOM$dGenerated.li1({children: [x]}))(v2.errors)})],
                className: "invalid-feedback"
              });
              return React$dBasic.fragment([
                v2.isInvalid ? $0 : React$dBasic.empty,
                (() => {
                  const $1 = renderPossibleHelpText(v.possibleHelpText);
                  if (!v2.isInvalid) { return $1; }
                  return React$dBasic.empty;
                })()
              ]);
            })()
          ])
        ],
        className: labelSpacingsToClasses(v.layout._1).inputColClass
      });
    }
    $runtime.fail();
  })();
  if (eqFieldLayout.eq(Inline)(v.layout)) {
    return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({children: [label3, body], className: "col-12 flex-fill"});
  }
  return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({children: [label3, body], className: "row mb-2"});
};
const booleanField = dictMonad => {
  const Applicative0 = dictMonad.Applicative0();
  const optInput = Contrib$dPolyform$dFormSpecs$dStatelessFormSpec.optInput(dictMonad)(Data$dMonoid.monoidArray);
  const $0 = Contrib$dPolyform$dFormSpecs$dStatelessFormSpec.semigroupoidStatelessForm(dictMonad)(Data$dSemigroup.semigroupArray);
  return dictMonad1 => {
    const $1 = Control$dMonad$dState$dTrans.applicativeStateT(dictMonad1);
    const $2 = dictMonad1.Bind1().Apply0().Functor0();
    const genId = Contrib$dPolyform$dFormSpecBuilder.genId(dictMonad1);
    return () => props => Control$dMonad$dReader$dTrans.bindReaderT(Control$dMonad$dState$dTrans.bindStateT(dictMonad1)).bind((() => {
      if (Foreign.isUndefined(props.name)) {
        return x => {
          const $3 = genId(x);
          return s => $2.map(v1 => Data$dTuple.$Tuple(v1._1, v1._2))($3(s));
        };
      }
      const $3 = $1.pure(props.name);
      return v => $3;
    })())(name => {
      const $3 = $1.pure($0.compose({
        fields: [],
        validator: x => Applicative0.pure(Data$dEither.$Either(
          "Right",
          (() => {
            if (x.tag === "Just") { return x._1; }
            if (x.tag === "Nothing") { return false; }
            $runtime.fail();
          })()
        )),
        render: v => []
      })(optInput(name)((Foreign.isUndefined(props.initial) ? false : props.initial) ? "on" : "off")(renderBooleanField({
        disabled: Foreign.isUndefined(props.disabled) ? false : props.disabled,
        layout: Foreign.isUndefined(props.layout) ? $FieldLayout("MultiColumn", col3spacings) : props.layout,
        name,
        label: props.label,
        possibleHelpText: props.helpText,
        switch: Foreign.isUndefined(props.switch) ? true : props.switch
      }))(Foreign.isUndefined(props.touched) ? false : props.touched)(x => Applicative0.pure(x === "on" ? Data$dEither.$Either("Right", true) : Data$dEither.$Either("Right", false)))));
      return v => $3;
    });
  };
};
const _validator = Type$dProxy.Proxy;
const _type = Type$dProxy.Proxy;
const _genFieldId = dictMonad => {
  const $0 = Control$dMonad$dState$dTrans.applicativeStateT(dictMonad);
  const $1 = dictMonad.Bind1().Apply0().Functor0();
  const genId = Contrib$dPolyform$dFormSpecBuilder.genId(dictMonad);
  return props => {
    if (props.name.tag === "Just") {
      const $2 = $0.pure(props.name._1);
      return v => $2;
    }
    if (props.name.tag === "Nothing") {
      return x => {
        const $2 = genId(x);
        return s => $1.map(v1 => Data$dTuple.$Tuple(v1._1, v1._2))($2(s));
      };
    }
    $runtime.fail();
  };
};
const choiceField = dictMonad => {
  const input = Contrib$dPolyform$dFormSpecs$dStatelessFormSpec.input(dictMonad)(Data$dMonoid.monoidArray);
  return dictMonad1 => {
    const _genFieldId1 = _genFieldId(dictMonad1);
    const $0 = Control$dMonad$dState$dTrans.applicativeStateT(dictMonad1);
    return dictDefaults => props => {
      const props$p = dictDefaults.defaults(defaultChoiceFieldProps)(props);
      return Control$dMonad$dReader$dTrans.bindReaderT(Control$dMonad$dState$dTrans.bindStateT(dictMonad1)).bind(_genFieldId1(props$p))(name => {
        const $1 = $0.pure(input(name)(props$p.initial)(renderChoiceField({
          inline: props$p.inline,
          possibleLabel: props$p.label,
          name,
          choices: props$p.choices,
          possibleHelpText: props$p.helpText
        }))(props$p.touched)(props$p.validator));
        return v => $1;
      });
    };
  };
};
const choiceField$p = dictMonad => {
  const $$enum = Polyform$dBatteries$dUrlEncoded$dDuals.enum(dictMonad);
  const $0 = dictMonad.Applicative0();
  const choiceField1 = choiceField(dictMonad);
  return dictMonad1 => {
    const choiceField2 = choiceField1(dictMonad1);
    return dictBoundedEnum => {
      const enum1 = $$enum(dictBoundedEnum);
      const $1 = dictBoundedEnum.Enum1();
      const upFromIncluding = Data$dUnfoldable1.unfoldable1Array.unfoldr1(x => Data$dTuple.$Tuple(x, $1.succ(x)));
      const bottom2 = dictBoundedEnum.Bounded0().bottom;
      return dictDefaults => {
        const choiceField3 = choiceField2(dictDefaults);
        return () => useElement => possibleArr => props => {
          const $2 = enum1(Type$dProxy.Proxy);
          const $3 = Polyform$dValidator.lmapValidator(dictMonad)(Data$dFunctor.arrayMap(x => Data$dLazy.force(x.msg)))($2._1);
          const asChoice = mkCfg => a => {
            const cfg = mkCfg(a);
            return {label: cfg.label, value: $2._2(a), disabled: cfg.disabled, helpText: cfg.helpText};
          };
          const arr = (() => {
            if (possibleArr.tag === "Nothing") { return upFromIncluding(bottom2); }
            if (possibleArr.tag === "Just") { return possibleArr._1; }
            $runtime.fail();
          })();
          return choiceField3({
            ...props,
            choices: (() => {
              if (useElement.tag === "UseRadioButtonField") {
                return $ChoiceFieldChoices("RadioButtonFieldChoices", {switch: true, choices: Data$dFunctor.arrayMap(asChoice(useElement._1))(arr)});
              }
              if (useElement.tag === "UseSelectField") {
                return $ChoiceFieldChoices("SelectFieldChoices", {choices: Data$dFunctor.arrayMap(asChoice(useElement._1))(arr), monospace: false});
              }
              $runtime.fail();
            })(),
            validator: i => dictMonad.Bind1().bind($0.pure((() => {
              if (i.tag === "Nothing") { return Data$dEither.$Either("Left", ["This field is required"]); }
              if (i.tag === "Just") { return Data$dEither.$Either("Right", i._1); }
              $runtime.fail();
            })()))(res$p => {
              if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
              if (res$p.tag === "Right") { return $3(res$p._1); }
              $runtime.fail();
            }),
            initial: $2._2(Data$dArray$dArrayAL.rawIndex(0)(arr))
          });
        };
      };
    };
  };
};
const textArea = dictMonad => {
  const _genFieldId1 = _genFieldId(dictMonad);
  const $0 = Control$dMonad$dState$dTrans.applicativeStateT(dictMonad);
  return dictMonad1 => {
    const input = Contrib$dPolyform$dFormSpecs$dStatelessFormSpec.input(dictMonad1)(Data$dMonoid.monoidArray);
    return dictDefaults => props => {
      const props$p = dictDefaults.defaults(defaultTextAreaProps)(props);
      return Control$dMonad$dReader$dTrans.bindReaderT(Control$dMonad$dState$dTrans.bindStateT(dictMonad)).bind(_genFieldId1(props$p))(name => {
        const $1 = $0.pure(input(name)(props$p.initial)(x => [
          renderTextArea({possibleLabel: props$p.label, name, helpText: props$p.helpText, placeholder: props$p.placeholder, rows: props$p.rows})(x)
        ])(props$p.touched)(props$p.validator));
        return v => $1;
      });
    };
  };
};
const textInput = dictMonad => {
  const _genFieldId1 = _genFieldId(dictMonad);
  const $0 = Control$dMonad$dState$dTrans.applicativeStateT(dictMonad);
  return dictMonad1 => {
    const input = Contrib$dPolyform$dFormSpecs$dStatelessFormSpec.input(dictMonad1)(Data$dMonoid.monoidArray);
    return dictDefaults => props => {
      const props$p = dictDefaults.defaults(defaultTextInputProps)(props);
      return Control$dMonad$dReader$dTrans.bindReaderT(Control$dMonad$dState$dTrans.bindStateT(dictMonad)).bind(_genFieldId1(props$p))(name => {
        const $1 = $0.pure(input(name)(props$p.initial)(x => [
          renderTextInput({
            layout: props$p.layout,
            possibleLabel: props$p.label,
            possibleHelpText: props$p.helpText,
            name,
            placeholder: props$p.placeholder,
            type: props$p.type,
            max: props$p.max,
            min: props$p.min,
            sizing: props$p.sizing,
            step: props$p.step
          })(x)
        ])(props$p.touched)(props$p.validator));
        return v => $1;
      });
    };
  };
};
const _typedTextInput = dictMonad => {
  const textInput2 = textInput(dictMonad);
  return dictMonad1 => {
    const textInput3 = textInput2(dictMonad1);
    return () => () => dictDefaults => {
      const textInput4 = textInput3(dictDefaults);
      return props => type_ => validator => textInput4({...props, type: type_, validator});
    };
  };
};
const dateInput = dictMonad => {
  const _typedTextInput1 = _typedTextInput(dictMonad);
  return dictMonad1 => {
    const Applicative0 = dictMonad1.Applicative0();
    const choiceOpt1 = choiceOpt(choiceValidator(Applicative0))((() => {
      const $0 = dictMonad1.Bind1().Apply0().Functor0();
      return {
        dimap: f => g => v => x => $0.map(m => {
          if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
          if (m.tag === "Right") { return Data$dEither.$Either("Right", g(m._1)); }
          $runtime.fail();
        })(v(f(x)))
      };
    })());
    const _typedTextInput2 = _typedTextInput1(dictMonad1)()();
    return () => () => dictDefaults => {
      const _typedTextInput3 = _typedTextInput2(dictDefaults);
      return props => _typedTextInput3(Record$dUnsafe.unsafeDelete("validator")(props))("date")((() => {
        const $0 = choiceOpt1(x => Applicative0.pure((() => {
          const $0 = Parsing.runParserT1(x)(parseISODate);
          if ($0.tag === "Left") { return Data$dEither.$Either("Left", ["Invalid date"]); }
          if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
          $runtime.fail();
        })()));
        return i => dictMonad1.Bind1().bind($0(i))(res$p => {
          if (res$p.tag === "Left") { return dictMonad1.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
          if (res$p.tag === "Right") { return props.validator(res$p._1); }
          $runtime.fail();
        });
      })());
    };
  };
};
const decimalInput = dictMonad => {
  const _typedTextInput1 = _typedTextInput(dictMonad);
  return dictMonad1 => {
    const Applicative0 = dictMonad1.Applicative0();
    const choiceOpt1 = choiceOpt(choiceValidator(Applicative0))((() => {
      const $0 = dictMonad1.Bind1().Apply0().Functor0();
      return {
        dimap: f => g => v => x => $0.map(m => {
          if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
          if (m.tag === "Right") { return Data$dEither.$Either("Right", g(m._1)); }
          $runtime.fail();
        })(v(f(x)))
      };
    })());
    const stringifyValidator = Polyform$dValidator.lmapValidator(dictMonad1)(Data$dFunctor.arrayMap(x => Data$dLazy.force(x.msg)));
    const _typedTextInput2 = _typedTextInput1(dictMonad1)()();
    return () => () => dictDefaults => {
      const _typedTextInput3 = _typedTextInput2(dictDefaults);
      return props => _typedTextInput3(Record$dUnsafe.unsafeDelete("validator")(props))("text")((() => {
        const $0 = choiceOpt1(stringifyValidator(Polyform$dBatteries$dDecimal.validator(Applicative0)(Polyform$dBatteries$dDecimal.formatting({
          decimalSeparator: Data$dMaybe.$Maybe("Just", "."),
          separators: [" ", ","]
        }))));
        return i => dictMonad1.Bind1().bind($0(i))(res$p => {
          if (res$p.tag === "Left") { return dictMonad1.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
          if (res$p.tag === "Right") { return props.validator(res$p._1); }
          $runtime.fail();
        });
      })());
    };
  };
};
const intInput = dictMonad => {
  const stringifyValidator = Polyform$dValidator.lmapValidator(dictMonad)(Data$dFunctor.arrayMap(x => Data$dLazy.force(x.msg)));
  const validator = Polyform$dBatteries$dInt.validator(dictMonad.Applicative0());
  const $0 = dictMonad.Applicative0();
  return dictMonad1 => {
    const _typedTextInput1 = _typedTextInput(dictMonad1)(dictMonad)()();
    return () => () => dictDefaults => {
      const _typedTextInput2 = _typedTextInput1(dictDefaults);
      return props => _typedTextInput2(props)("number")((() => {
        const $1 = stringifyValidator(validator);
        return i => dictMonad.Bind1().bind($0.pure((() => {
          if (i.tag === "Nothing") { return Data$dEither.$Either("Left", ["This field is required"]); }
          if (i.tag === "Just") { return Data$dEither.$Either("Right", i._1); }
          $runtime.fail();
        })()))(res$p => {
          if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
          if (res$p.tag === "Right") { return $1(res$p._1); }
          $runtime.fail();
        });
      })());
    };
  };
};
const numberInput = dictMonad => {
  const stringifyValidator = Polyform$dValidator.lmapValidator(dictMonad)(Data$dFunctor.arrayMap(x => Data$dLazy.force(x.msg)));
  const validator = Polyform$dBatteries$dNumber.validator(dictMonad);
  const $0 = dictMonad.Applicative0();
  return dictMonad1 => {
    const _typedTextInput1 = _typedTextInput(dictMonad1)(dictMonad)()();
    return () => () => dictDefaults => {
      const _typedTextInput2 = _typedTextInput1(dictDefaults);
      return props => _typedTextInput2(props)("number")((() => {
        const $1 = stringifyValidator(validator);
        return i => dictMonad.Bind1().bind($0.pure((() => {
          if (i.tag === "Nothing") { return Data$dEither.$Either("Left", ["This field is required"]); }
          if (i.tag === "Just") { return Data$dEither.$Either("Right", i._1); }
          $runtime.fail();
        })()))(res$p => {
          if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
          if (res$p.tag === "Right") { return $1(res$p._1); }
          $runtime.fail();
        });
      })());
    };
  };
};
const timeInput = dictMonad => {
  const _typedTextInput1 = _typedTextInput(dictMonad);
  return dictMonad1 => {
    const $0 = dictMonad1.Applicative0();
    const _typedTextInput2 = _typedTextInput1(dictMonad1)()();
    return () => () => dictDefaults => {
      const _typedTextInput3 = _typedTextInput2(dictDefaults);
      return props => {
        const $1 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === ":"))("':'");
        return _typedTextInput3(Record$dUnsafe.unsafeDelete("validator")(props))("time")(i => dictMonad1.Bind1().bind($0.pure((() => {
          if (i.tag === "Nothing") { return Data$dEither.$Either("Right", Data$dMaybe.Nothing); }
          if (i.tag === "Just") {
            const $2 = Parsing.runParserT1(i._1)((state1, more, lift1, $$throw, done) => more(v1 => more(v1$1 => more(v1$2 => parseDigit(
              state1,
              more,
              lift1,
              $$throw,
              (state2, a) => more(v2 => more(v1$3 => parseDigit(
                state2,
                more,
                lift1,
                $$throw,
                (state2$1, a$1) => more(v2$1 => {
                  const $2 = (10 * a | 0) + a$1 | 0;
                  return more(v2$2 => {
                    if ($2 >= 0 && $2 <= 23) {
                      return more(v2$3 => more(v1$4 => {
                        const $3 = (state2$2, a$2) => more(v2$4 => more(v1$5 => more(v1$6 => more(v1$7 => parseDigit(
                          state2$2,
                          more,
                          lift1,
                          $$throw,
                          (state2$3, a$3) => more(v2$5 => more(v1$8 => parseDigit(
                            state2$3,
                            more,
                            lift1,
                            $$throw,
                            (state2$4, a$4) => more(v2$6 => {
                              const $3 = (10 * a$3 | 0) + a$4 | 0;
                              return more(v2$7 => {
                                if ($3 >= 0 && $3 <= 59) { return more(v2$8 => done(state2$4, Data$dTime.$Time($2, $3, 0, 0))); }
                                return Parsing.fail("Invalid minute")(
                                  state2$4,
                                  more,
                                  lift1,
                                  $$throw,
                                  (state2$5, a$5) => more(v2$8 => done(state2$5, Data$dTime.$Time($2, a$5, 0, 0)))
                                );
                              });
                            })
                          )))
                        )))));
                        const $4 = state2$1._1;
                        const $5 = state2$1._2;
                        return more(v3 => more(v1$5 => $1(
                          Parsing.$ParseState($4, $5, false),
                          more,
                          lift1,
                          (v2$4, $6) => more(v5 => $3(state2$1, undefined)),
                          (state2$2, a$2) => more(v2$4 => $3(state2$2, undefined))
                        )));
                      }));
                    }
                    return Parsing.fail("Invalid hour")(
                      state2$1,
                      more,
                      lift1,
                      $$throw,
                      (state2$2, a$2) => more(v2$3 => more(v1$4 => {
                        const $3 = (state2$3, a$3) => more(v2$4 => more(v1$5 => more(v1$6 => more(v1$7 => parseDigit(
                          state2$3,
                          more,
                          lift1,
                          $$throw,
                          (state2$4, a$4) => more(v2$5 => more(v1$8 => parseDigit(
                            state2$4,
                            more,
                            lift1,
                            $$throw,
                            (state2$5, a$5) => more(v2$6 => {
                              const $3 = (10 * a$4 | 0) + a$5 | 0;
                              return more(v2$7 => {
                                if ($3 >= 0 && $3 <= 59) { return more(v2$8 => done(state2$5, Data$dTime.$Time(a$2, $3, 0, 0))); }
                                return Parsing.fail("Invalid minute")(
                                  state2$5,
                                  more,
                                  lift1,
                                  $$throw,
                                  (state2$6, a$6) => more(v2$8 => done(state2$6, Data$dTime.$Time(a$2, a$6, 0, 0)))
                                );
                              });
                            })
                          )))
                        )))));
                        const $4 = state2$2._1;
                        const $5 = state2$2._2;
                        return more(v3 => more(v1$5 => $1(
                          Parsing.$ParseState($4, $5, false),
                          more,
                          lift1,
                          (v2$4, $6) => more(v5 => $3(state2$2, undefined)),
                          (state2$3, a$3) => more(v2$4 => $3(state2$3, undefined))
                        )));
                      }))
                    );
                  });
                })
              )))
            )))));
            if ($2.tag === "Left") { return Data$dEither.$Either("Left", ["Invalid time"]); }
            if ($2.tag === "Right") { return Data$dEither.$Either("Right", Data$dMaybe.$Maybe("Just", $2._1)); }
          }
          $runtime.fail();
        })()))(res$p => {
          if (res$p.tag === "Left") { return dictMonad1.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
          if (res$p.tag === "Right") { return props.validator(res$p._1); }
          $runtime.fail();
        }));
      };
    };
  };
};
const dateTimeField = dictMonad => {
  const $0 = Control$dMonad$dState$dTrans.applicativeStateT(dictMonad);
  const semigroupoidFormSpecBuild = Contrib$dPolyform$dFormSpecBuilder.semigroupoidFormSpecBuild(dictMonad);
  const applyFormSpecBuilderT = Contrib$dPolyform$dFormSpecBuilder.applyFormSpecBuilderT(dictMonad);
  const $1 = dictMonad.Applicative0().Apply0().Functor0();
  const dateInput1 = dateInput(dictMonad);
  const timeInput1 = timeInput(dictMonad);
  const multiField1 = multiField(dictMonad);
  return dictMonad1 => {
    const dateInput2 = dateInput1(dictMonad1)()()(defaultsRecord);
    const timeInput2 = timeInput1(dictMonad1)()()(defaultsRecord);
    return possibleInitial => possibleLabel => possibleHelpText => dateTimeValidator => {
      const $2 = (() => {
        if (possibleInitial.tag === "Just") {
          const $2 = Data$dFormatter$dDateTime.formatDateTime("YYYY-MM-DD")(possibleInitial._1);
          if ($2.tag === "Left") { return Data$dMaybe.Nothing; }
          if ($2.tag === "Right") {
            const $3 = Data$dFormatter$dDateTime.formatDateTime("hh:mm:ss")(possibleInitial._1);
            if ($3.tag === "Left") { return Data$dMaybe.Nothing; }
            if ($3.tag === "Right") { return Data$dMaybe.$Maybe("Just", Data$dTuple.$Tuple($2._1, $3._1)); }
          }
          $runtime.fail();
        }
        if (possibleInitial.tag === "Nothing") { return Data$dMaybe.Nothing; }
        $runtime.fail();
      })();
      const initials = (() => {
        if ($2.tag === "Nothing") { return Data$dTuple.$Tuple("", ""); }
        if ($2.tag === "Just") { return $2._1; }
        $runtime.fail();
      })();
      return multiField1(possibleLabel)(possibleHelpText)(multiFieldErrorId => semigroupoidFormSpecBuild(Contrib$dPolyform$dFormSpecs$dStatelessFormSpec.semigroupoidStatelessForm(dictMonad1)(Data$dSemigroup.semigroupArray)).compose((() => {
        const $3 = $0.pure({
          fields: [],
          validator: Polyform$dValidator.lmapValidator(dictMonad1)(Polyform$dBatteries$dUrlEncoded$dTypes$dErrors.singleton(multiFieldErrorId))(dateTimeValidator),
          render: v => []
        });
        return v => $3;
      })())(applyFormSpecBuilderT(Contrib$dPolyform$dFormSpecs$dStatelessFormSpec.applyStatelessFormSpec(dictMonad1)(Data$dSemigroup.semigroupArray)).apply((() => {
        const $3 = dictMonad1.Applicative0().Apply0().Functor0();
        const $4 = dateInput2({layout: Inline, initial: initials._1, validator: x => dictMonad1.Applicative0().pure(Data$dEither.$Either("Right", x)), touched: false});
        return x => {
          const $5 = $4(x);
          return s => $1.map(v1 => Data$dTuple.$Tuple(
            (() => {
              const $6 = v1._1;
              return {
                fields: $6.fields,
                validator: x$1 => $3.map(m => {
                  if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
                  if (m.tag === "Right") {
                    return Data$dEither.$Either(
                      "Right",
                      (() => {
                        const $7 = m._1;
                        return v1$1 => Data$dMaybe.applyMaybe.apply($7.tag === "Just" ? Data$dMaybe.$Maybe("Just", Data$dDateTime.DateTime($7._1)) : Data$dMaybe.Nothing)(v1$1);
                      })()
                    );
                  }
                  $runtime.fail();
                })($6.validator(x$1)),
                render: $6.render
              };
            })(),
            v1._2
          ))($5(s));
        };
      })())(timeInput2({layout: Inline, initial: initials._2, validator: x => dictMonad1.Applicative0().pure(Data$dEither.$Either("Right", x)), touched: false}))));
    };
  };
};
export {
  $Breakpoint,
  $ChoiceFieldChoices,
  $FieldLayout,
  $FormControlSizing,
  $LabelSpacing,
  $UseChoiceField,
  Col1Label,
  Col2Label,
  Col3Label,
  Col4Label,
  Col5Label,
  Col6Label,
  FormControlLg,
  FormControlSm,
  Inline,
  Lg,
  Md,
  MultiColumn,
  RadioButtonFieldChoices,
  SelectFieldChoices,
  Sm,
  UseRadioButtonField,
  UseSelectField,
  _genFieldId,
  _type,
  _typedTextInput,
  _validator,
  booleanField,
  breakpointToString,
  choiceField,
  choiceField$p,
  choiceOpt,
  choiceValidator,
  col3spacings,
  dateInput,
  dateTimeField,
  decimalInput,
  defaultChoiceFieldProps,
  defaultTextAreaProps,
  defaultTextInputProps,
  defaultsRecord,
  eq,
  eqFieldLayout,
  eqLabelSpacing,
  fieldValidity,
  fieldValidity1,
  filterKeys,
  filterKeys1,
  fold3,
  foldMapWithIndex,
  intInput,
  isInline,
  labelSpacingToClasses,
  labelSpacingsToClasses,
  multiField,
  $$null as null,
  numberInput,
  ordFieldLayout,
  ordLabelSpacing,
  parseDigit,
  parseISODate,
  radioFieldChoice,
  renderBooleanField,
  renderChoiceField,
  renderPossibleHelpText,
  renderTextArea,
  renderTextInput,
  requiredV,
  requiredV$p,
  selectFieldChoice,
  textArea,
  textInput,
  timeInput,
  traverse_
};
