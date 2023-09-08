import * as $runtime from "../runtime.js";
import * as Component$dBodyLayout from "../Component.BodyLayout/index.js";
import * as Component$dCreateContract$dMachine from "../Component.CreateContract.Machine/index.js";
import * as Component$dMarloweYaml from "../Component.MarloweYaml/index.js";
import * as Component$dTypes$dAppTags from "../Component.Types.AppTags/index.js";
import * as Component$dTypes$dRaffle from "../Component.Types.Raffle/index.js";
import * as Component$dWidgets from "../Component.Widgets/index.js";
import * as Component$dWidgets$dForm from "../Component.Widgets.Form/index.js";
import * as Contrib$dCardano from "../Contrib.Cardano/index.js";
import * as Contrib$dPolyform$dFormSpecBuilder from "../Contrib.Polyform.FormSpecBuilder/index.js";
import * as Contrib$dPolyform$dFormSpecs$dStatelessFormSpec from "../Contrib.Polyform.FormSpecs.StatelessFormSpec/index.js";
import * as Contrib$dReact$dBasic$dHooks$dUseMooreMachine from "../Contrib.React.Basic.Hooks.UseMooreMachine/index.js";
import * as Contrib$dReact$dMarloweGraph from "../Contrib.React.MarloweGraph/index.js";
import * as Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders from "../Contrib.ReactBootstrap.FormSpecBuilders.StatelessFormSpecBuilders/index.js";
import * as Control$dBind from "../Control.Bind/index.js";
import * as Control$dCategory from "../Control.Category/index.js";
import * as Control$dMonad$dReader$dTrans from "../Control.Monad.Reader.Trans/index.js";
import * as Control$dMonad$dState$dTrans from "../Control.Monad.State.Trans/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dBigInt from "../Data.BigInt/index.js";
import * as Data$dDateTime$dInstant from "../Data.DateTime.Instant/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dEnum from "../Data.Enum/index.js";
import * as Data$dEnum$dGeneric from "../Data.Enum.Generic/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFoldableWithIndex from "../Data.FoldableWithIndex/index.js";
import * as Data$dFormURLEncoded$dQuery from "../Data.FormURLEncoded.Query/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dFunctorWithIndex from "../Data.FunctorWithIndex/index.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dNumber from "../Data.Number/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import * as Data$dSemigroup from "../Data.Semigroup/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Data$dUnfoldable from "../Data.Unfoldable/index.js";
import * as Data$dUnfoldable1 from "../Data.Unfoldable1/index.js";
import * as Debug from "../Debug/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dClass from "../Effect.Class/index.js";
import * as HexString from "../HexString/index.js";
import * as JS$dUnsafe$dStringify from "../JS.Unsafe.Stringify/index.js";
import * as React$dBasic from "../React.Basic/index.js";
import * as React$dBasic$dDOM$dGenerated from "../React.Basic.DOM.Generated/index.js";
import * as React$dBasic$dDOM$dSimplified$dGenerated from "../React.Basic.DOM.Simplified.Generated/index.js";
import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as React$dBasic$dHooks$dUseStatelessFormSpec from "../React.Basic.Hooks.UseStatelessFormSpec/index.js";
import * as ReactBootstrap$dTab from "../ReactBootstrap.Tab/index.js";
import * as ReactBootstrap$dTabs from "../ReactBootstrap.Tabs/index.js";
import * as Record$dUnsafe$dUnion from "../Record.Unsafe.Union/index.js";
import * as Text$dCSV from "../Text.CSV/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Utils$dReact$dBasic$dHooks from "../Utils.React.Basic.Hooks/index.js";
import * as Web$dEncoding$dTextEncoder from "../Web.Encoding.TextEncoder/index.js";
const $CurrentRun = (tag, _1) => ({tag, _1});
const $RaffleRoundsNumber = tag => tag;
const eqTuple = {eq: x => y => x._1 === y._1 && x._2._1 === y._2._1 && Data$dBigInt.biEquals(x._2._2)(y._2._2)};
const genericEnumConstructor = /* #__PURE__ */ Data$dEnum$dGeneric.genericEnumConstructor(Data$dEnum$dGeneric.genericEnumNoArguments);
const genericTopConstructor = {"genericTop'": Data$dGeneric$dRep.NoArguments};
const genericEnumSum = /* #__PURE__ */ Data$dEnum$dGeneric.genericEnumSum(genericEnumConstructor)(genericTopConstructor);
const genericBottomConstructor = {"genericBottom'": Data$dGeneric$dRep.NoArguments};
const genericBottomSum = {"genericBottom'": /* #__PURE__ */ Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)};
const genericEnumSum1 = /* #__PURE__ */ genericEnumSum(/* #__PURE__ */ genericEnumSum(/* #__PURE__ */ genericEnumSum(/* #__PURE__ */ genericEnumSum(/* #__PURE__ */ genericEnumSum(/* #__PURE__ */ genericEnumSum(/* #__PURE__ */ genericEnumSum(/* #__PURE__ */ genericEnumSum(/* #__PURE__ */ genericEnumSum(genericEnumConstructor)(genericBottomConstructor))(genericBottomSum))(genericBottomSum))(genericBottomSum))(genericBottomSum))(genericBottomSum))(genericBottomSum))(genericBottomSum))(genericBottomSum);
const genericBoundedEnumConstructor = /* #__PURE__ */ Data$dEnum$dGeneric.genericBoundedEnumConstructor(Data$dEnum$dGeneric.genericBoundedEnumNoArguments);
const genericBoundedEnumSum = /* #__PURE__ */ Data$dEnum$dGeneric.genericBoundedEnumSum(genericBoundedEnumConstructor);
const genericBoundedEnumSum1 = /* #__PURE__ */ genericBoundedEnumSum(/* #__PURE__ */ genericBoundedEnumSum(/* #__PURE__ */ genericBoundedEnumSum(/* #__PURE__ */ genericBoundedEnumSum(/* #__PURE__ */ genericBoundedEnumSum(/* #__PURE__ */ genericBoundedEnumSum(/* #__PURE__ */ genericBoundedEnumSum(/* #__PURE__ */ genericBoundedEnumSum(/* #__PURE__ */ genericBoundedEnumSum(genericBoundedEnumConstructor)))))))));
const identity = x => x;
const $$for = /* #__PURE__ */ (() => {
  const traverse2 = Data$dTraversable.traversableArray.traverse(Contrib$dPolyform$dFormSpecBuilder.applicativeFormSpecBuilde(Data$dIdentity.monadIdentity)(Contrib$dPolyform$dFormSpecs$dStatelessFormSpec.applicativeStatelessFormS(Effect.monadEffect)(Data$dMonoid.monoidArray)));
  return x => f => traverse2(f)(x);
})();
const apply = /* #__PURE__ */ (() => Contrib$dPolyform$dFormSpecBuilder.applyFormSpecBuilderT(Data$dIdentity.monadIdentity)(Contrib$dPolyform$dFormSpecs$dStatelessFormSpec.applyStatelessFormSpec(Effect.monadEffect)(Data$dSemigroup.semigroupArray)).apply)();
const defaultsRecord = {defaults: b => a => Record$dUnsafe$dUnion.unsafeUnionFn(a, b)};
const textInput = /* #__PURE__ */ Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.textInput(Data$dIdentity.monadIdentity)(Effect.monadEffect)(defaultsRecord);
const textArea = /* #__PURE__ */ Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.textArea(Data$dIdentity.monadIdentity)(Effect.monadEffect)(defaultsRecord);
const for1 = /* #__PURE__ */ (() => {
  const traverse2 = Data$dTraversable.traversableArray.traverse(Data$dEither.applicativeEither);
  return x => f => traverse2(f)(x);
})();
const bind1 = /* #__PURE__ */ (() => Control$dMonad$dReader$dTrans.bindReaderT(Effect.bindEffect).bind)();
const asks = /* #__PURE__ */ (() => {
  const monadReaderT1 = Control$dMonad$dReader$dTrans.monadReaderT(Effect.monadEffect);
  return f => monadReaderT1.Bind1().Apply0().Functor0().map(f)(Effect.pureE);
})();
const liftEffect = /* #__PURE__ */ (() => Control$dMonad$dReader$dTrans.monadEffectReader(Effect$dClass.monadEffectEffect).liftEffect)();
const fold1 = /* #__PURE__ */ (() => Data$dFoldable.foldableArray.foldMap(Contrib$dCardano.monoidNonAdaAssets)(Data$dFoldable.identity))();
const pure2 = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const foldMapWithIndex = /* #__PURE__ */ (() => Data$dFoldableWithIndex.foldableWithIndexArray.foldMapWithIndex(Data$dMonoid.monoidArray))();
const booleanField = /* #__PURE__ */ Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.booleanField(Effect.monadEffect)(Data$dIdentity.monadIdentity)();
const choiceField = /* #__PURE__ */ Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.choiceField(Effect.monadEffect)(Data$dIdentity.monadIdentity)(defaultsRecord);
const br = /* #__PURE__ */ React$dBasic.element(React$dBasic$dDOM$dGenerated._br$p);
const pure3 = /* #__PURE__ */ (() => {
  const $0 = Control$dMonad$dState$dTrans.applicativeStateT(Data$dIdentity.monadIdentity);
  return x => {
    const $1 = $0.pure(x);
    return v => $1;
  };
})();
const multiAddressInput = /* #__PURE__ */ Component$dWidgets$dForm.multiAddressInput(Data$dIdentity.monadIdentity)(Effect$dClass.monadEffectEffect)()()(defaultsRecord);
const useStateWithRef$p = /* #__PURE__ */ Utils$dReact$dBasic$dHooks.useStateWithRef$p(/* #__PURE__ */ (() => {
  const $0 = Data$dEq.eqArrayImpl(Component$dTypes$dAppTags.eqRaffleRound.eq);
  return {
    eq: x => y => {
      if (x.tag === "Nothing") { return y.tag === "Nothing"; }
      return x.tag === "Just" && y.tag === "Just" && $0(x._1)(y._1);
    }
  };
})());
const traceM1 = /* #__PURE__ */ Debug.traceM()(Effect.monadEffect);
const traceM2 = /* #__PURE__ */ Debug.traceM()(Effect$dAff.monadAff);
const useStateRef$p = /* #__PURE__ */ Utils$dReact$dBasic$dHooks.useStateRef$p({
  eq: x => y => {
    if (x.tag === "Nothing") { return y.tag === "Nothing"; }
    return x.tag === "Just" && y.tag === "Just" && Component$dTypes$dRaffle.eqRaffleContracts.eq(x._1)(y._1);
  }
});
const hr = /* #__PURE__ */ React$dBasic.element(React$dBasic$dDOM$dGenerated._hr$p);
const fold2 = /* #__PURE__ */ (() => Data$dFoldable.foldableArray.foldMap(Data$dMonoid.monoidArray)(Data$dFoldable.identity))();
const div4 = /* #__PURE__ */ React$dBasic.element(React$dBasic$dDOM$dGenerated._div$p);
const StepIndex = x => x;
const OneRound = /* #__PURE__ */ $RaffleRoundsNumber("OneRound");
const TwoRounds = /* #__PURE__ */ $RaffleRoundsNumber("TwoRounds");
const ThreeRounds = /* #__PURE__ */ $RaffleRoundsNumber("ThreeRounds");
const FourRounds = /* #__PURE__ */ $RaffleRoundsNumber("FourRounds");
const FiveRounds = /* #__PURE__ */ $RaffleRoundsNumber("FiveRounds");
const SixRounds = /* #__PURE__ */ $RaffleRoundsNumber("SixRounds");
const SevenRounds = /* #__PURE__ */ $RaffleRoundsNumber("SevenRounds");
const EightRounds = /* #__PURE__ */ $RaffleRoundsNumber("EightRounds");
const NineRounds = /* #__PURE__ */ $RaffleRoundsNumber("NineRounds");
const TenRounds = /* #__PURE__ */ $RaffleRoundsNumber("TenRounds");
const RaffleRoundConfigBase = x => x;
const Now = x => x;
const Automatic = /* #__PURE__ */ $CurrentRun("Automatic");
const Manual = value0 => $CurrentRun("Manual", value0);
const AutoRun = x => x;
const genericRaffleRoundsNumber = {
  to: x => {
    if (x.tag === "Inl") { return OneRound; }
    if (x.tag === "Inr") {
      if (x._1.tag === "Inl") { return TwoRounds; }
      if (x._1.tag === "Inr") {
        if (x._1._1.tag === "Inl") { return ThreeRounds; }
        if (x._1._1.tag === "Inr") {
          if (x._1._1._1.tag === "Inl") { return FourRounds; }
          if (x._1._1._1.tag === "Inr") {
            if (x._1._1._1._1.tag === "Inl") { return FiveRounds; }
            if (x._1._1._1._1.tag === "Inr") {
              if (x._1._1._1._1._1.tag === "Inl") { return SixRounds; }
              if (x._1._1._1._1._1.tag === "Inr") {
                if (x._1._1._1._1._1._1.tag === "Inl") { return SevenRounds; }
                if (x._1._1._1._1._1._1.tag === "Inr") {
                  if (x._1._1._1._1._1._1._1.tag === "Inl") { return EightRounds; }
                  if (x._1._1._1._1._1._1._1.tag === "Inr") {
                    if (x._1._1._1._1._1._1._1._1.tag === "Inl") { return NineRounds; }
                    if (x._1._1._1._1._1._1._1._1.tag === "Inr") { return TenRounds; }
                  }
                }
              }
            }
          }
        }
      }
    }
    $runtime.fail();
  },
  from: x => {
    if (x === "OneRound") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments); }
    if (x === "TwoRounds") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)); }
    if (x === "ThreeRounds") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments))); }
    if (x === "FourRounds") {
      return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments))));
    }
    if (x === "FiveRounds") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments))))
      );
    }
    if (x === "SixRounds") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments))))
        )
      );
    }
    if (x === "SevenRounds") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments))))
          )
        )
      );
    }
    if (x === "EightRounds") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum(
              "Inr",
              Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments))))
            )
          )
        )
      );
    }
    if (x === "NineRounds") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum(
              "Inr",
              Data$dGeneric$dRep.$Sum(
                "Inr",
                Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments))))
              )
            )
          )
        )
      );
    }
    if (x === "TenRounds") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum(
              "Inr",
              Data$dGeneric$dRep.$Sum(
                "Inr",
                Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments))))
              )
            )
          )
        )
      );
    }
    $runtime.fail();
  }
};
const showRaffleRoundsNumber = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "OneRound"});
    const $1 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "TwoRounds"});
    const $2 = (() => {
      const $2 = (() => {
        const $2 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "ThreeRounds"});
        const $3 = (() => {
          const $3 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "FourRounds"});
          const $4 = (() => {
            const $4 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "FiveRounds"});
            const $5 = (() => {
              const $5 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "SixRounds"});
              const $6 = (() => {
                const $6 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "SevenRounds"});
                const $7 = (() => {
                  const $7 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "EightRounds"});
                  const $8 = (() => {
                    const $8 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "NineRounds"});
                    const $9 = (() => {
                      const $9 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "TenRounds"});
                      return {
                        "genericShow'": v => {
                          if (v.tag === "Inl") { return $8["genericShow'"](v._1); }
                          if (v.tag === "Inr") { return $9["genericShow'"](v._1); }
                          $runtime.fail();
                        }
                      };
                    })();
                    return {
                      "genericShow'": v => {
                        if (v.tag === "Inl") { return $7["genericShow'"](v._1); }
                        if (v.tag === "Inr") { return $9["genericShow'"](v._1); }
                        $runtime.fail();
                      }
                    };
                  })();
                  return {
                    "genericShow'": v => {
                      if (v.tag === "Inl") { return $6["genericShow'"](v._1); }
                      if (v.tag === "Inr") { return $8["genericShow'"](v._1); }
                      $runtime.fail();
                    }
                  };
                })();
                return {
                  "genericShow'": v => {
                    if (v.tag === "Inl") { return $5["genericShow'"](v._1); }
                    if (v.tag === "Inr") { return $7["genericShow'"](v._1); }
                    $runtime.fail();
                  }
                };
              })();
              return {
                "genericShow'": v => {
                  if (v.tag === "Inl") { return $4["genericShow'"](v._1); }
                  if (v.tag === "Inr") { return $6["genericShow'"](v._1); }
                  $runtime.fail();
                }
              };
            })();
            return {
              "genericShow'": v => {
                if (v.tag === "Inl") { return $3["genericShow'"](v._1); }
                if (v.tag === "Inr") { return $5["genericShow'"](v._1); }
                $runtime.fail();
              }
            };
          })();
          return {
            "genericShow'": v => {
              if (v.tag === "Inl") { return $2["genericShow'"](v._1); }
              if (v.tag === "Inr") { return $4["genericShow'"](v._1); }
              $runtime.fail();
            }
          };
        })();
        return {
          "genericShow'": v => {
            if (v.tag === "Inl") { return $1["genericShow'"](v._1); }
            if (v.tag === "Inr") { return $3["genericShow'"](v._1); }
            $runtime.fail();
          }
        };
      })();
      return {
        "genericShow'": v => {
          if (v.tag === "Inl") { return $0["genericShow'"](v._1); }
          if (v.tag === "Inr") { return $2["genericShow'"](v._1); }
          $runtime.fail();
        }
      };
    })();
    return x => $2["genericShow'"](genericRaffleRoundsNumber.from(x));
  })()
};
const eqRaffleRoundsNumber = {
  eq: x => y => {
    if (x === "OneRound") { return y === "OneRound"; }
    if (x === "TwoRounds") { return y === "TwoRounds"; }
    if (x === "ThreeRounds") { return y === "ThreeRounds"; }
    if (x === "FourRounds") { return y === "FourRounds"; }
    if (x === "FiveRounds") { return y === "FiveRounds"; }
    if (x === "SixRounds") { return y === "SixRounds"; }
    if (x === "SevenRounds") { return y === "SevenRounds"; }
    if (x === "EightRounds") { return y === "EightRounds"; }
    if (x === "NineRounds") { return y === "NineRounds"; }
    return x === "TenRounds" && y === "TenRounds";
  }
};
const ordRaffleRoundsNumber = {
  compare: x => y => {
    if (x === "OneRound") {
      if (y === "OneRound") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "OneRound") { return Data$dOrdering.GT; }
    if (x === "TwoRounds") {
      if (y === "TwoRounds") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "TwoRounds") { return Data$dOrdering.GT; }
    if (x === "ThreeRounds") {
      if (y === "ThreeRounds") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "ThreeRounds") { return Data$dOrdering.GT; }
    if (x === "FourRounds") {
      if (y === "FourRounds") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "FourRounds") { return Data$dOrdering.GT; }
    if (x === "FiveRounds") {
      if (y === "FiveRounds") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "FiveRounds") { return Data$dOrdering.GT; }
    if (x === "SixRounds") {
      if (y === "SixRounds") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "SixRounds") { return Data$dOrdering.GT; }
    if (x === "SevenRounds") {
      if (y === "SevenRounds") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "SevenRounds") { return Data$dOrdering.GT; }
    if (x === "EightRounds") {
      if (y === "EightRounds") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "EightRounds") { return Data$dOrdering.GT; }
    if (x === "NineRounds") {
      if (y === "NineRounds") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "NineRounds") { return Data$dOrdering.GT; }
    if (x === "TenRounds" && y === "TenRounds") { return Data$dOrdering.EQ; }
    $runtime.fail();
  },
  Eq0: () => eqRaffleRoundsNumber
};
const eqRaffleRoundConfigBase = dictEq1 => {
  const eq1 = dictEq1.eq1(eqTuple);
  return {eq: x => y => eq1(x.priceBundle)(y.priceBundle) && x.priceTokenName === y.priceTokenName};
};
const eqMaybe = /* #__PURE__ */ (() => {
  const $0 = Data$dMap$dInternal.eqMap(Data$dEq.eqString)({eq: Data$dEq.eqArrayImpl(Data$dEq.eqStringImpl)});
  const $1 = Data$dEq.eqArrayImpl(eqRaffleRoundConfigBase(Data$dEq.eq1Array).eq);
  return {
    eq: x => y => {
      if (x.tag === "Nothing") { return y.tag === "Nothing"; }
      return x.tag === "Just" && y.tag === "Just" && (x._1._1.tag === "Left"
        ? y._1._1.tag === "Left" && $0.eq(x._1._1._1)(y._1._1._1)
        : x._1._1.tag === "Right" && y._1._1.tag === "Right" && $1(x._1._1._1)(y._1._1._1)) && Data$dFormURLEncoded$dQuery.eqQuery.eq(x._1._2)(y._1._2);
    }
  };
})();
const enumRaffleRoundsNumber = {
  succ: /* #__PURE__ */ Data$dEnum$dGeneric.genericSucc(genericRaffleRoundsNumber)(genericEnumSum1),
  pred: /* #__PURE__ */ Data$dEnum$dGeneric.genericPred(genericRaffleRoundsNumber)(genericEnumSum1),
  Ord0: () => ordRaffleRoundsNumber
};
const enumFromTo = /* #__PURE__ */ Data$dEnum.enumFromTo(enumRaffleRoundsNumber)(Data$dUnfoldable1.unfoldable1Array);
const boundedRaffleRoundsNumber = /* #__PURE__ */ (() => (
  {
    bottom: genericRaffleRoundsNumber.to(Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)),
    top: genericRaffleRoundsNumber.to(Data$dGeneric$dRep.$Sum(
      "Inr",
      Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum(
              "Inr",
              Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments))))
            )
          )
        )
      )
    )),
    Ord0: () => ordRaffleRoundsNumber
  }
))();
const boundedEnumRaffleRoundsNu = /* #__PURE__ */ (() => (
  {
    cardinality: genericBoundedEnumSum1["genericCardinality'"],
    toEnum: Data$dEnum$dGeneric.genericToEnum(genericRaffleRoundsNumber)(genericBoundedEnumSum1),
    fromEnum: x => genericBoundedEnumSum1["genericFromEnum'"](genericRaffleRoundsNumber.from(x)),
    Bounded0: () => boundedRaffleRoundsNumber,
    Enum1: () => enumRaffleRoundsNumber
  }
))();
const choiceField$p = /* #__PURE__ */ Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.choiceField$p(Effect.monadEffect)(Data$dIdentity.monadIdentity)(boundedEnumRaffleRoundsNu)(defaultsRecord)();
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
const reqDateTimeField = dictMonad => {
  const dateTimeField = Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.dateTimeField(dictMonad);
  return dictMonad1 => {
    const dateTimeField1 = dateTimeField(dictMonad1);
    const $0 = dictMonad1.Applicative0();
    return initial => label => helpText => dateTimeField1(initial)(Data$dMaybe.$Maybe("Just", label))(helpText)(x => $0.pure((() => {
      if (x.tag === "Nothing") { return Data$dEither.$Either("Left", ["This field is required"]); }
      if (x.tag === "Just") { return Data$dEither.$Either("Right", x._1); }
      $runtime.fail();
    })()));
  };
};
const reqDateTimeField1 = /* #__PURE__ */ reqDateTimeField(Data$dIdentity.monadIdentity)(Effect.monadEffect);
const raffleRoundsNumberToLabel = v => {
  if (v === "OneRound") { return "One round"; }
  if (v === "TwoRounds") { return "Two rounds"; }
  if (v === "ThreeRounds") { return "Three rounds"; }
  if (v === "FourRounds") { return "Four rounds"; }
  if (v === "FiveRounds") { return "Five rounds"; }
  if (v === "SixRounds") { return "Six rounds"; }
  if (v === "SevenRounds") { return "Seven rounds"; }
  if (v === "EightRounds") { return "Eight rounds"; }
  if (v === "NineRounds") { return "Nine rounds"; }
  if (v === "TenRounds") { return "Ten rounds"; }
  $runtime.fail();
};
const mkRaffleRoundsFormSpec = v => {
  const $0 = v.mintTokens;
  return $$for(v.roundsInitials)(roundInitials => {
    const $1 = apply((() => {
      const $1 = textInput({
        missingError: "Please provide an name of price token for this round",
        helpText: Data$dMaybe.$Maybe(
          "Just",
          React$dBasic$dDOM$dGenerated.div1({
            children: [
              $0
                ? "Price token name which should be minted for this round winner and used for the final price withdrawal."
                : "Price token name which you probably already minted or will mint for a provided currency."
            ]
          })
        ),
        initial: roundInitials.priceTokenName,
        label: Data$dMaybe.$Maybe("Just", "Price token name"),
        touched: false,
        validator: i => {
          if (i.tag === "Nothing") { return () => Data$dEither.$Either("Left", ["This field is required"]); }
          if (i.tag === "Just") { return () => Data$dEither.$Either("Right", i._1); }
          $runtime.fail();
        }
      });
      return x => {
        const $2 = $1(x);
        return s => {
          const $3 = $2(s);
          return Data$dTuple.$Tuple(
            (() => {
              const $4 = $3._1;
              return {
                fields: $4.fields,
                validator: x$1 => {
                  const $5 = $4.validator(x$1);
                  return () => {
                    const a$p = $5();
                    return (() => {
                      if (a$p.tag === "Left") { return Data$dEither.$Either("Left", a$p._1); }
                      if (a$p.tag === "Right") {
                        return Data$dEither.$Either(
                          "Right",
                          (() => {
                            const $6 = a$p._1;
                            return v2 => ({priceBundle: v2, priceTokenName: $6});
                          })()
                        );
                      }
                      $runtime.fail();
                    })();
                  };
                },
                render: $4.render
              };
            })(),
            $3._2
          );
        };
      };
    })())(textArea({
      missingError: "Please provide token bundle CSV value",
      helpText: Data$dMaybe.$Maybe("Just", "Please provide a list of tokens: currency symbol, token name, amount. We will use your wallet address as a source of funds."),
      placeholder: "currency symbol, token name, amount",
      initial: Data$dString$dCommon.joinWith("\n")(Data$dFunctor.arrayMap(v1 => v1._1 + "," + Component$dTypes$dRaffle.unsafeDecodeAssetName(v1._2._1) + "," + Data$dBigInt.toString(v1._2._2))(roundInitials.priceBundle)),
      label: Data$dMaybe.$Maybe("Just", "Price bundle CSV"),
      touched: false,
      validator: i => {
        if (i.tag === "Nothing") { return () => Data$dEither.$Either("Left", ["This field is required"]); }
        if (i.tag === "Just") {
          return () => {
            const $1 = Text$dCSV.parse(i._1);
            if ($1.tag === "Left") { return Data$dEither.$Either("Left", ["Invalid CSV"]); }
            if ($1.tag === "Right") {
              const $2 = for1($1._1)(v1 => {
                if (v1.length === 3) {
                  const $2 = Data$dBigInt.fromString(v1[2]);
                  if ($2.tag === "Just") {
                    const v2 = Contrib$dCardano.policyIdFromHexString(v1[0]);
                    if (v2.tag === "Just") {
                      return Data$dEither.$Either(
                        "Right",
                        Data$dTuple.$Tuple(
                          v2._1,
                          Data$dTuple.$Tuple(
                            (() => {
                              const textEncoder = Web$dEncoding$dTextEncoder.new();
                              return HexString.encode(Web$dEncoding$dTextEncoder.encode(v1[1])(textEncoder));
                            })(),
                            $2._1
                          )
                        )
                      );
                    }
                    if (v2.tag === "Nothing") { return Data$dEither.$Either("Left", ["Invalid policy ID"]); }
                    $runtime.fail();
                  }
                  return Data$dEither.$Either("Left", ["Invalid amount"]);
                }
                return Data$dEither.$Either("Left", ["Invalid CSV"]);
              });
              const $3 = (() => {
                if ($2.tag === "Left") {
                  const $3 = $2._1;
                  return v$1 => Data$dEither.$Either("Left", $3);
                }
                if ($2.tag === "Right") {
                  const $3 = $2._1;
                  return f => f($3);
                }
                $runtime.fail();
              })()(tokens => {
                if (tokens.length > 0) { return Data$dEither.$Either("Right", tokens); }
                return Data$dEither.$Either("Left", ["Token bundle cannot be empty"]);
              });
              return (() => {
                if ($3.tag === "Left") { return Data$dEither.$Either("Left", $3._1); }
                if ($3.tag === "Right") { return Data$dEither.$Either("Right", $3._1); }
                $runtime.fail();
              })();
            }
            $runtime.fail();
          };
        }
        $runtime.fail();
      },
      rows: 5
    }));
    return x => {
      const $2 = $1(x);
      return s => {
        const $3 = $2(s);
        return Data$dTuple.$Tuple(
          (() => {
            const $4 = $3._1;
            return {fields: $4.fields, validator: $4.validator, render: x$1 => [$4.render(x$1)]};
          })(),
          $3._2
        );
      };
    };
  })(Data$dMaybe.$Maybe("Just", "raffle-rounds"))(0)._1;
};
const mkRaffleRoundsComponent = /* #__PURE__ */ bind1(/* #__PURE__ */ asks(v => v.cardanoMultiplatformLib))(cardanoMultiplatformLib => liftEffect(React$dBasic$dHooks.component("RoleTokensAssignment")(v => {
  const handlePossibleResult = v1 => {
    if (v1.tag === "Just" && v1._1._1.tag === "Right") {
      return v.onRoundsConfigChange(Data$dMaybe.$Maybe(
        "Just",
        Data$dFunctor.arrayMap(v2 => {
          const $0 = v2.priceTokenName;
          return {
            priceAssetName: (() => {
              const textEncoder = Web$dEncoding$dTextEncoder.new();
              return HexString.encode(Web$dEncoding$dTextEncoder.encode($0)(textEncoder));
            })(),
            tokenBundle: fold1(Data$dFunctor.arrayMap(v3 => Data$dMap$dInternal.$$$Map(
              "Two",
              Data$dMap$dInternal.Leaf,
              Data$dTuple.$Tuple(v3._1, v3._2._1),
              v3._2._2,
              Data$dMap$dInternal.Leaf
            ))(v2.priceBundle))
          };
        })(v1._1._1._1)
      ));
    }
    return v.onRoundsConfigChange(Data$dMaybe.Nothing);
  };
  const formSpec = mkRaffleRoundsFormSpec({mintTokens: v.mintTokens, roundsInitials: v.roundsInitials});
  const $0 = React$dBasic$dHooks$dUseStatelessFormSpec.useStatelessFormSpec({spec: formSpec, onSubmit: v1 => handlePossibleResult(v1.result), validationDebounce: 0.5});
  return () => {
    const a = $0();
    const a$1 = Utils$dReact$dBasic$dHooks.useStateRef(eqMaybe)(a.result)(a.result)();
    const $1 = React$dBasic$dHooks.readRef(a$1);
    React$dBasic$dHooks.useEffect_(
      ($2, $3) => eqMaybe.eq($2)($3),
      a.result,
      () => {
        const $2 = $1();
        handlePossibleResult($2)();
        return () => {};
      }
    );
    return pure2(React$dBasic.fragment(foldMapWithIndex(idx => fieldsSet => [
      React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalh4$p)({children: ["Round " + Data$dShow.showIntImpl(idx + 1 | 0)], className: "mt-4 mb-3"}),
      ...fieldsSet
    ])(formSpec.render(a.formState))))();
  };
})));
const mkRaffleConfigFormSpec = cardanoMultiplatformLib => roundsNumber => v => v1 => policyIds => apply(apply(apply(apply(apply((() => {
  const $0 = choiceField$p(Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.$UseChoiceField(
    "UseSelectField",
    a1 => (
      {
        label: (() => {
          if (a1 === "OneRound") { return "One round"; }
          if (a1 === "TwoRounds") { return "Two rounds"; }
          if (a1 === "ThreeRounds") { return "Three rounds"; }
          if (a1 === "FourRounds") { return "Four rounds"; }
          if (a1 === "FiveRounds") { return "Five rounds"; }
          if (a1 === "SixRounds") { return "Six rounds"; }
          if (a1 === "SevenRounds") { return "Seven rounds"; }
          if (a1 === "EightRounds") { return "Eight rounds"; }
          if (a1 === "NineRounds") { return "Nine rounds"; }
          if (a1 === "TenRounds") { return "Ten rounds"; }
          $runtime.fail();
        })(),
        helpText: Data$dMaybe.Nothing,
        disabled: false
      }
    )
  ))(Data$dMaybe.Nothing)({label: Data$dMaybe.$Maybe("Just", "Number of raffle rounds"), initial: roundsNumber, touched: true});
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
                        return v3 => v4 => v5 => v6 => v7 => (
                          {organizer: v3, possiblePriceTokensCurrency: v4, contractsTimeout: v5, participants: v6, extraTags: v7, roundsNumber: $5}
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
})())((() => {
  const $0 = booleanField({
    helpText: React$dBasic$dDOM$dGenerated.div1({children: ["Organizer will coordinate the raffle and will receive a role tokens if we need to mint them."]}),
    initial: true,
    label: "Use current wallet as raffle organizer",
    touched: false,
    disabled: true
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
                  if (a$p.tag === "Right") { return Data$dEither.$Either("Right", v1); }
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
})()))(choiceField({
  choices: Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.$ChoiceFieldChoices(
    "SelectFieldChoices",
    {
      choices: [
        {disabled: false, helpText: Data$dMaybe.Nothing, label: "", value: ""},
        ...Data$dFunctor.arrayMap(pId => ({disabled: false, helpText: Data$dMaybe.Nothing, label: pId, value: pId}))(policyIds)
      ],
      monospace: true
    }
  ),
  initial: "",
  label: Data$dMaybe.$Maybe("Just", "Price token currency symbol"),
  helpText: Data$dMaybe.$Maybe("Just", "Please provide a currency symbol for the price tokens. If you don't provide one we will mint the tokens ourselves."),
  validator: x => {
    if (x.tag === "Nothing") { return () => Data$dEither.$Either("Right", Data$dMaybe.Nothing); }
    if (x.tag === "Just") {
      if (x._1 === "") { return () => Data$dEither.$Either("Right", Data$dMaybe.Nothing); }
      const $0 = Contrib$dCardano.policyIdFromHexString(x._1);
      if ($0.tag === "Just") {
        const $1 = Data$dEither.$Either("Right", Data$dMaybe.$Maybe("Just", $0._1));
        return () => $1;
      }
      return () => Data$dEither.$Either("Left", ["Invalid policy id"]);
    }
    $runtime.fail();
  },
  touched: true
})))((() => {
  const $0 = reqDateTimeField1((() => {
    const $0 = v + 31536000000.0;
    if ($0 >= -8639977881600000.0 && $0 <= 8639977881599999.0) { return Data$dMaybe.$Maybe("Just", Data$dDateTime$dInstant.toDateTime($0)); }
    return Data$dMaybe.Nothing;
  })())("Contracts timeout")(Data$dMaybe.$Maybe(
    "Just",
    React$dBasic$dDOM$dGenerated.p1({
      children: [
        "We use a single timeout to simplify configuration - in the case of the timeout:",
        br({}),
        "* All already deposited tokens will be paid out to the winner token in the case of deposit.",
        br({}),
        "* All price raffle tokens would be paid back without finalization in the case of Raffle."
      ]
    })
  ));
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
                  if (a$p.tag === "Right") { return Data$dEither.$Either("Right", Data$dDateTime$dInstant.fromDateTime(a$p._1)); }
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
})()))(Contrib$dPolyform$dFormSpecBuilder.semigroupoidFormSpecBuild(Data$dIdentity.monadIdentity)(Contrib$dPolyform$dFormSpecs$dStatelessFormSpec.semigroupoidStatelessForm(Effect.monadEffect)(Data$dSemigroup.semigroupArray)).compose(pure3({
  fields: [],
  validator: x => {
    const $0 = Data$dArray.uncons(x);
    if ($0.tag === "Nothing") {
      return () => Data$dEither.$Either(
        "Left",
        Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, "participants", ["Please provide at least one participant"], Data$dMap$dInternal.Leaf)
      );
    }
    if ($0.tag === "Just") {
      const $1 = Data$dEither.$Either("Right", [$0._1.head, ...$0._1.tail]);
      return () => $1;
    }
    $runtime.fail();
  },
  render: v$1 => []
}))(multiAddressInput(cardanoMultiplatformLib)({
  missingError: "Please provide participants list separating addresses with a comma, white space or a new line",
  helpText: Data$dMaybe.$Maybe("Just", "Please provide a list of participants addresses. We will use your wallet address as a source of funds."),
  placeholder: "Participant addresses",
  initial: v1,
  touched: true,
  label: Data$dMaybe.$Maybe("Just", "Raffle participants"),
  rows: 3,
  name: Data$dMaybe.$Maybe("Just", "participants")
}))))(textInput({
  helpText: Data$dMaybe.$Maybe(
    "Just",
    "Tag can be used to uniquely identify particular raffle scenario. We will assign unique Id to the raffle contract bundle after the initial tx deployment but if you want to have human readable id then please provide one."
  ),
  initial: "",
  label: Data$dMaybe.$Maybe("Just", "Tag"),
  touched: false,
  validator: x => {
    const $0 = Data$dEither.$Either(
      "Right",
      (() => {
        if (x.tag === "Nothing") { return []; }
        if (x.tag === "Just") { return Data$dArray.filter(v3 => v3 !== "")(Data$dFunctor.arrayMap(Data$dString$dCommon.trim)(Data$dString$dCommon.split(",")(x._1))); }
        $runtime.fail();
      })()
    );
    return () => $0;
  }
}))(Data$dMaybe.Nothing)(0)._1;
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
  const identity2 = dictCategory.identity;
  return connectedWallet => cardanoMultiplatformLib => runtime => (
    {
      initialState: Component$dCreateContract$dMachine.DefiningContract,
      step: Component$dCreateContract$dMachine.step,
      driver: Component$dCreateContract$dMachine.driver({connectedWallet, cardanoMultiplatformLib, runtime}),
      output: identity2
    }
  );
};
const machineProps1 = /* #__PURE__ */ machineProps(Control$dCategory.categoryFn);
const hoistMaybe = dictApplicative => x => dictApplicative.pure(x);
const four = /* #__PURE__ */ Data$dBigInt.fromInt(4);
const configFromFormResult = result => {
  if (result.tag === "Just") {
    if (result._1._1.tag === "Left") { return Data$dMaybe.Nothing; }
    if (result._1._1.tag === "Right") { return Data$dMaybe.$Maybe("Just", result._1._1._1); }
    $runtime.fail();
  }
  if (result.tag === "Nothing") { return Data$dMaybe.Nothing; }
  $runtime.fail();
};
const mkComponent = /* #__PURE__ */ bind1(/* #__PURE__ */ asks(v => v.runtime))(runtime => bind1(asks(v => v.cardanoMultiplatformLib))(cardanoMultiplatformLib => bind1(asks(v => v.walletInfoCtx))(walletInfoCtx => bind1(mkRaffleRoundsComponent)(raffleRoundsComponent => liftEffect(React$dBasic$dHooks.component("CreateContract")(v => {
  const $0 = v.now;
  const $1 = v.onDismiss;
  const $2 = v.walletContext;
  const $3 = v.walletInfo;
  const $4 = React$dBasic$dHooks.useState$p(Data$dMaybe.Nothing);
  return () => {
    const a = $4();
    const a$1 = Contrib$dReact$dBasic$dHooks$dUseMooreMachine.useMooreMachine(machineProps1($3)(cardanoMultiplatformLib)(runtime))();
    const a$2 = React$dBasic$dHooks.useMemo_(
      ($5, $6) => true,
      undefined,
      v3 => mkRaffleConfigFormSpec(cardanoMultiplatformLib)(OneRound)($0)($2.changeAddress)(Data$dArray.nubBy(Contrib$dCardano.ordPolicyId.compare)(Data$dArray.sortBy(Contrib$dCardano.ordPolicyId.compare)(Data$dArray.mapMaybe(x => x)(Data$dFunctor.arrayMap(v4 => {
        if (v4.tag === "AdaAssetId") { return Data$dMaybe.Nothing; }
        if (v4.tag === "AssetId") { return Data$dMaybe.$Maybe("Just", v4._1); }
        $runtime.fail();
      })(Data$dFunctor.arrayMap(v1 => v1._1)(Data$dMap$dInternal.toUnfoldable(Data$dUnfoldable.unfoldableArray)($2.balance)))))))
    );
    const a$3 = useStateWithRef$p(Data$dMaybe.Nothing)();
    const $5 = a$3._2._1;
    const a$4 = React$dBasic$dHooks$dUseStatelessFormSpec.useStatelessFormSpec({
      spec: a$2,
      onSubmit: v4 => {
        const $6 = v4.result;
        const $7 = React$dBasic$dHooks.readRef($5);
        return () => {
          const possibleRounds = $7();
          const $8 = configFromFormResult($6);
          if ($8.tag === "Just") {
            if (possibleRounds.tag === "Just") {
              const plan = {
                organizer: $8._1.organizer,
                contractsTimeout: $8._1.contractsTimeout,
                priceTokensCurrency: $8._1.possiblePriceTokensCurrency,
                rounds: possibleRounds._1,
                participants: $8._1.participants
              };
              const rolesConfig = Component$dTypes$dRaffle.rolesConfigFromPlan(plan);
              const encodeTags = Component$dTypes$dRaffle.initialDepositTagsFromPlan(plan);
              const $9 = Component$dTypes$dRaffle.mkRaffleContracts(plan)(Data$dMaybe.Nothing);
              if ($9.tag === "Left") {
                traceM1("Failed to create contracts from:")();
                traceM1($6)();
                return traceM1(possibleRounds)();
              }
              if ($9.tag === "Right") {
                const $10 = Data$dArray.index($9._1.rounds)(0);
                const $11 = $8._1.extraTags;
                const $12 = Data$dArray.index((() => {
                  if ($10.tag === "Just") { return $10._1._2.initialContracts; }
                  $runtime.fail();
                })())(0);
                const $13 = (() => {
                  if ($12.tag === "Just") { return $12._1._1; }
                  $runtime.fail();
                })();
                const fiber = Effect$dAff._makeFiber(
                  Effect$dAff.ffiUtil,
                  Effect$dAff._bind(encodeTags)(v5 => {
                    if (v5.tag === "Just") {
                      return Effect$dAff._liftEffect(a$1.applyAction(Component$dCreateContract$dMachine.$Action(
                        "TriggerSubmission",
                        Data$dMaybe.$Maybe("Just", rolesConfig),
                        $13,
                        Data$dMap$dInternal.$$$Map(
                          "Two",
                          Data$dMap$dInternal.Leaf,
                          "marffaello-v1",
                          Component$dTypes$dAppTags.encodeJsonAppTags.encodeJson({extraTags: $11, raffleTags: v5._1}),
                          Data$dMap$dInternal.Leaf
                        )
                      )));
                    }
                    if (v5.tag === "Nothing") { return traceM2("Failed to encode tags"); }
                    $runtime.fail();
                  })
                )();
                fiber.run();
                return;
              }
              $runtime.fail();
            }
            if (possibleRounds.tag === "Nothing") {
              traceM1("Failed to create contracts from:")();
              traceM1($6)();
              return traceM1(possibleRounds)();
            }
            $runtime.fail();
          }
          if ($8.tag === "Nothing") {
            traceM1("Failed to create contracts from:")();
            traceM1($6)();
            return traceM1(possibleRounds)();
          }
          $runtime.fail();
        };
      },
      validationDebounce: 0.5
    })();
    const possibleRaffleConfig = configFromFormResult(a$4.result);
    const $6 = Data$dMaybe.applyMaybe.apply(possibleRaffleConfig.tag === "Just"
      ? Data$dMaybe.$Maybe(
          "Just",
          (() => {
            const $6 = possibleRaffleConfig._1;
            return rounds => {
              const $7 = Component$dTypes$dRaffle.mkRaffleContracts({
                organizer: $6.organizer,
                contractsTimeout: $6.contractsTimeout,
                priceTokensCurrency: $6.possiblePriceTokensCurrency,
                rounds,
                participants: $6.participants
              })(Data$dMaybe.Nothing);
              if ($7.tag === "Left") { return Data$dMaybe.Nothing; }
              if ($7.tag === "Right") { return Data$dMaybe.$Maybe("Just", $7._1); }
              $runtime.fail();
            };
          })()
        )
      : Data$dMaybe.Nothing)(a$3._1);
    const possibleRaffleContracts = (() => {
      if ($6.tag === "Just") { return $6._1; }
      if ($6.tag === "Nothing") { return Data$dMaybe.Nothing; }
      $runtime.fail();
    })();
    useStateRef$p(possibleRaffleContracts)();
    const a$5 = React$dBasic$dHooks.useState$p(Data$dFunctor.arrayMap(roundNumber => (
      {
        priceBundle: Data$dArray.mapMaybe(x => x)(Data$dFunctor.arrayMap(v5 => {
          if (v5._1.tag === "AdaAssetId") { return Data$dMaybe.Nothing; }
          if (v5._1.tag === "AssetId") { return Data$dMaybe.$Maybe("Just", Data$dTuple.$Tuple(v5._1._1, Data$dTuple.$Tuple(v5._1._2, v5._2))); }
          $runtime.fail();
        })(Data$dMap$dInternal.toUnfoldable(Data$dUnfoldable.unfoldableArray)($2.balance))),
        priceTokenName: "Price number " + Data$dShow.showIntImpl(genericBoundedEnumSum1["genericFromEnum'"](genericRaffleRoundsNumber.from(roundNumber)) + 1 | 0)
      }
    ))(enumFromTo(boundedRaffleRoundsNumber.bottom)(boundedRaffleRoundsNumber.top)))();
    return pure2((() => {
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
            children: [
              React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                children: [
                  React$dBasic.element(ReactBootstrap$dTabs._Tabs)({
                    children: [
                      React$dBasic.element(ReactBootstrap$dTab._Tab)({
                        children: [
                          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                            children: [
                              React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                                children: [
                                  ...a$2.render(a$4.formState),
                                  hr({}),
                                  ...(() => {
                                    if (possibleRaffleConfig.tag === "Just") {
                                      return [
                                        React$dBasic.keyed(Data$dShow.showIntImpl(genericBoundedEnumSum1["genericFromEnum'"](genericRaffleRoundsNumber.from(possibleRaffleConfig._1.roundsNumber))))(raffleRoundsComponent({
                                          walletInfo: $3,
                                          walletContext: $2,
                                          onRoundsConfigChange: a$3._2._2,
                                          mintTokens: (() => {
                                            if (possibleRaffleConfig._1.possiblePriceTokensCurrency.tag === "Nothing") { return false; }
                                            if (possibleRaffleConfig._1.possiblePriceTokensCurrency.tag === "Just") { return true; }
                                            $runtime.fail();
                                          })(),
                                          roundsInitials: (() => {
                                            const $7 = genericBoundedEnumSum1["genericFromEnum'"](genericRaffleRoundsNumber.from(possibleRaffleConfig._1.roundsNumber)) + 1 | 0;
                                            const $8 = $7 < 1 ? [] : Data$dArray.slice(0)($7)(a$5._1);
                                            if ($8.length > 0) { return $8; }
                                            return a$5._1;
                                          })()
                                        }))
                                      ];
                                    }
                                    if (possibleRaffleConfig.tag === "Nothing") { return ["Please finish up the main configuration to set up the rounds"]; }
                                    $runtime.fail();
                                  })()
                                ],
                                className: "form-group container"
                              })
                            ],
                            className: "pt-4 h-vh60 overflow-auto"
                          })
                        ],
                        disabled: false,
                        eventKey: "form",
                        title: React$dBasic$dDOM$dGenerated.span1({
                          children: [React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalspan$p)({children: [], className: "bi-filetype-yml"}), " Raffle form"]
                        })
                      }),
                      (() => {
                        if (possibleRaffleContracts.tag === "Nothing") {
                          return React$dBasic.element(ReactBootstrap$dTab._Tab)({
                            children: [React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({children: [], className: "pt-4 h-vh60 overflow-auto"})],
                            disabled: true,
                            eventKey: "graph",
                            title: React$dBasic$dDOM$dGenerated.span1({
                              children: [
                                React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalspan$p)({children: [], className: "bi-diagram-2"}),
                                " Contract graphs"
                              ]
                            })
                          });
                        }
                        if (possibleRaffleContracts.tag === "Just") {
                          return React$dBasic.element(ReactBootstrap$dTab._Tab)({
                            children: [
                              React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                                children: fold2(Data$dFunctorWithIndex.mapWithIndexArray(roundNo => v6 => (roundNo !== 0
                                  ? Data$dArray.cons(hr({className: "dropdown-divider"}))
                                  : identity)([
                                  React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalh5$p)({children: ["Round #" + Data$dShow.showIntImpl(roundNo + 1 | 0)]}),
                                  ...Control$dBind.arrayBind(v6._2.initialContracts)(v7 => [Contrib$dReact$dMarloweGraph.marloweGraph()({contract: v7._1})])
                                ]))(possibleRaffleContracts._1.rounds)),
                                className: "pt-4 h-vh60 overflow-auto"
                              })
                            ],
                            disabled: false,
                            eventKey: "graph",
                            title: React$dBasic$dDOM$dGenerated.span1({
                              children: [
                                React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalspan$p)({children: [], className: "bi-diagram-2"}),
                                " Source graphs"
                              ]
                            })
                          });
                        }
                        $runtime.fail();
                      })()
                    ],
                    defaultActiveKey: "form",
                    fill: true,
                    justify: true,
                    variant: "pills"
                  })
                ],
                className: "col-12"
              })
            ],
            className: "row"
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
                      disabled: (() => {
                        if (possibleRaffleContracts.tag === "Nothing") { return true; }
                        if (possibleRaffleContracts.tag === "Just") { return false; }
                        $runtime.fail();
                      })(),
                      onClick: a$4.onSubmit
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
                        const $7 = v.onSuccess(a$1.state._1.createTxResponse.links.contract);
                        return v$1 => $7();
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
          if (a._1._1.tag === "Manual") { return Component$dCreateContract$dMachine.driver({connectedWallet: $3, cardanoMultiplatformLib, runtime})(a$1.state); }
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
            const $7 = (() => {
              if (a$1.state.tag === "DefiningContract") { return 1; }
              if (a$1.state.tag === "FetchingRequiredWalletContext") { return 3; }
              if (a$1.state.tag === "CreatingTx") { return 4; }
              if (a$1.state.tag === "SigningTx") { return 5; }
              if (a$1.state.tag === "SubmittigTx") { return 6; }
              if (a$1.state.tag === "ContractCreated") { return 7; }
              $runtime.fail();
            })();
            if ($7 < 7) {
              return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                children: [
                  div4({
                    className: "progress-bar",
                    style: {width: Data$dShow.showIntImpl(Data$dInt.unsafeClamp(Data$dNumber.ceil(Data$dInt.toNumber($7 - 1 | 0) / Data$dInt.toNumber(6) * 100.0))) + "%"},
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
            const $7 = possibleRequest._1;
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
                          const $8 = a._2(Data$dMaybe.$Maybe("Just", $CurrentRun("Manual", true)));
                          return v$1 => {
                            $8();
                            const fiber = Effect$dAff._makeFiber(
                              Effect$dAff.ffiUtil,
                              Effect$dAff._bind($7)(action => Effect$dAff._liftEffect((() => {
                                const $9 = a$1.applyAction(action);
                                return () => {
                                  $9();
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
export {
  $CurrentRun,
  $RaffleRoundsNumber,
  AutoRun,
  Automatic,
  EightRounds,
  FiveRounds,
  FourRounds,
  Manual,
  NineRounds,
  Now,
  OneRound,
  RaffleRoundConfigBase,
  SevenRounds,
  SixRounds,
  StepIndex,
  TenRounds,
  ThreeRounds,
  TwoRounds,
  apply,
  asks,
  bind1,
  booleanField,
  boundedEnumRaffleRoundsNu,
  boundedRaffleRoundsNumber,
  br,
  choiceField,
  choiceField$p,
  configFromFormResult,
  defaultsRecord,
  div4,
  enumFromTo,
  enumRaffleRoundsNumber,
  eqMaybe,
  eqRaffleRoundConfigBase,
  eqRaffleRoundsNumber,
  eqTuple,
  fold1,
  fold2,
  foldMapWithIndex,
  $$for as for,
  for1,
  four,
  genericBottomConstructor,
  genericBottomSum,
  genericBoundedEnumConstructor,
  genericBoundedEnumSum,
  genericBoundedEnumSum1,
  genericEnumConstructor,
  genericEnumSum,
  genericEnumSum1,
  genericRaffleRoundsNumber,
  genericTopConstructor,
  hoistMaybe,
  hr,
  identity,
  liftEffect,
  machineProps,
  machineProps1,
  machineStateToStepIndex,
  machineStepsCardinality,
  mkComponent,
  mkRaffleConfigFormSpec,
  mkRaffleRoundsComponent,
  mkRaffleRoundsFormSpec,
  multiAddressInput,
  ordRaffleRoundsNumber,
  pure2,
  pure3,
  raffleRoundsNumberToLabel,
  reqDateTimeField,
  reqDateTimeField1,
  reqValidator,
  reqValidator$p,
  showRaffleRoundsNumber,
  stateToDescription,
  stateToDetailedDescription,
  stateToTitle,
  textArea,
  textInput,
  three,
  traceM1,
  traceM2,
  useStateRef$p,
  useStateWithRef$p
};
