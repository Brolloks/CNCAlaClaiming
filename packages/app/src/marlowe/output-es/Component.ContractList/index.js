import * as $runtime from "../runtime.js";
import * as Component$dApplyInputs from "../Component.ApplyInputs/index.js";
import * as Component$dBodyLayout from "../Component.BodyLayout/index.js";
import * as Component$dContractDetails from "../Component.ContractDetails/index.js";
import * as Component$dContractTemplates$dContractForDifferencesWithOracle from "../Component.ContractTemplates.ContractForDifferencesWithOracle/index.js";
import * as Component$dContractTemplates$dEscrow from "../Component.ContractTemplates.Escrow/index.js";
import * as Component$dContractTemplates$dSwap from "../Component.ContractTemplates.Swap/index.js";
import * as Component$dCreateContract from "../Component.CreateContract/index.js";
import * as Component$dTypes from "../Component.Types/index.js";
import * as Component$dTypes$dContractInfo from "../Component.Types.ContractInfo/index.js";
import * as Component$dWidget$dTable from "../Component.Widget.Table/index.js";
import * as Component$dWidgets from "../Component.Widgets/index.js";
import * as Component$dWithdrawals from "../Component.Withdrawals/index.js";
import * as Contrib$dData$dJSDate from "../Contrib.Data.JSDate/index.js";
import * as Contrib$dReact$dSvg from "../Contrib.React.Svg/index.js";
import * as Contrib$dReactBootstrap$dDropdownButton from "../Contrib.ReactBootstrap.DropdownButton/index.js";
import * as Contrib$dReactBootstrap$dDropdownItem from "../Contrib.ReactBootstrap.DropdownItem/index.js";
import * as Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders from "../Contrib.ReactBootstrap.FormSpecBuilders.StatelessFormSpecBuilders/index.js";
import * as Control$dMonad$dReader$dTrans from "../Control.Monad.Reader.Trans/index.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dArgonaut$dDecode$dDecoders from "../Data.Argonaut.Decode.Decoders/index.js";
import * as Data$dArgonaut$dDecode$dError from "../Data.Argonaut.Decode.Error/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dBigInt from "../Data.BigInt/index.js";
import * as Data$dDate from "../Data.Date/index.js";
import * as Data$dDate$dComponent from "../Data.Date.Component/index.js";
import * as Data$dDateTime from "../Data.DateTime/index.js";
import * as Data$dDateTime$dInstant from "../Data.DateTime.Instant/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dHeytingAlgebra from "../Data.HeytingAlgebra/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dJSDate from "../Data.JSDate/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dString$dCodePoints from "../Data.String.CodePoints/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data$dTime from "../Data.Time/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dClass from "../Effect.Class/index.js";
import * as Language$dMarlowe$dCore$dV1$dSemantics$dTypes from "../Language.Marlowe.Core.V1.Semantics.Types/index.js";
import * as Marlowe$dRuntime$dWeb$dClient from "../Marlowe.Runtime.Web.Client/index.js";
import * as Marlowe$dRuntime$dWeb$dTypes from "../Marlowe.Runtime.Web.Types/index.js";
import * as React$dBasic from "../React.Basic/index.js";
import * as React$dBasic$dDOM$dGenerated from "../React.Basic.DOM.Generated/index.js";
import * as React$dBasic$dDOM$dSimplified$dGenerated from "../React.Basic.DOM.Simplified.Generated/index.js";
import * as React$dBasic$dDOM$dSimplified$dToJSX from "../React.Basic.DOM.Simplified.ToJSX/index.js";
import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as React$dBasic$dHooks$dUseStatelessFormSpec from "../React.Basic.Hooks.UseStatelessFormSpec/index.js";
import * as ReactBootstrap$dOverlayTrigger from "../ReactBootstrap.OverlayTrigger/index.js";
import * as ReactBootstrap$dTable from "../ReactBootstrap.Table/index.js";
import * as ReactBootstrap$dTooltip from "../ReactBootstrap.Tooltip/index.js";
import * as Record$dUnsafe$dUnion from "../Record.Unsafe.Union/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Utils$dReact$dBasic$dHooks from "../Utils.React.Basic.Hooks/index.js";
const $ContractTemplate = tag => tag;
const $FormState = (tag, _1) => ({tag, _1});
const $ModalAction = (tag, _1, _2, _3) => ({tag, _1, _2, _3});
const $OrderBy = tag => tag;
const eq = x => y => {
  if (x.tag === "Nothing") { return y.tag === "Nothing"; }
  return x.tag === "Just" && y.tag === "Just" && Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqContract.eq(x._1)(y._1);
};
const eq3 = x => y => {
  if (x.tag === "Nothing") { return y.tag === "Nothing"; }
  return x.tag === "Just" && y.tag === "Just" && Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqState.eq(x._1)(y._1);
};
const eq4 = /* #__PURE__ */ (() => Data$dEq.eqArrayImpl(Marlowe$dRuntime$dWeb$dTypes.eqTransactionEndpoint.eq))();
const eq7 = /* #__PURE__ */ Data$dEq.eqArrayImpl(Data$dEq.eqStringImpl);
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const put$p = /* #__PURE__ */ Marlowe$dRuntime$dWeb$dClient.put$p(Marlowe$dRuntime$dWeb$dTypes.encodeHeadersPutTransacti)(Marlowe$dRuntime$dWeb$dTypes.encodeJsonBodyPutTransact)()()()();
const decodeJson = /* #__PURE__ */ Data$dArgonaut$dDecode$dDecoders.decodeArray(/* #__PURE__ */ Data$dArgonaut$dCore.caseJsonString(/* #__PURE__ */ Data$dEither.$Either(
  "Left",
  /* #__PURE__ */ Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")
))(Data$dEither.Right));
const defaultsRecord = {defaults: b => a => Record$dUnsafe$dUnion.unsafeUnionFn(a, b)};
const textInput = /* #__PURE__ */ Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.textInput(Data$dIdentity.monadIdentity)(Effect.monadEffect)(defaultsRecord);
const bind2 = /* #__PURE__ */ (() => Control$dMonad$dReader$dTrans.bindReaderT(Effect.bindEffect).bind)();
const asks = /* #__PURE__ */ (() => {
  const monadReaderT1 = Control$dMonad$dReader$dTrans.monadReaderT(Effect.monadEffect);
  return f => monadReaderT1.Bind1().Apply0().Functor0().map(f)(Effect.pureE);
})();
const liftEffect = /* #__PURE__ */ (() => Control$dMonad$dReader$dTrans.monadEffectReader(Effect$dClass.monadEffectEffect).liftEffect)();
const or = /* #__PURE__ */ Data$dFoldable.or(Data$dFoldable.foldableArray)(Data$dHeytingAlgebra.heytingAlgebraBoolean);
const fold = /* #__PURE__ */ (() => Data$dFoldable.foldableArray.foldMap(Data$dMonoid.monoidString)(Data$dFoldable.identity))();
const br = /* #__PURE__ */ React$dBasic.element(React$dBasic$dDOM$dGenerated._br$p);
const intercalate = sep => xs => Data$dFoldable.foldlArray(v => v1 => {
  if (v.init) { return {init: false, acc: v1}; }
  return {init: false, acc: v.acc + sep + v1};
})({init: true, acc: ""})(xs).acc;
const OrderByCreationDate = /* #__PURE__ */ $OrderBy("OrderByCreationDate");
const OrderByLastUpdateDate = /* #__PURE__ */ $OrderBy("OrderByLastUpdateDate");
const NotValidated = /* #__PURE__ */ $FormState("NotValidated");
const Failure = value0 => $FormState("Failure", value0);
const Validated = value0 => $FormState("Validated", value0);
const Escrow = /* #__PURE__ */ $ContractTemplate("Escrow");
const Swap = /* #__PURE__ */ $ContractTemplate("Swap");
const ContractForDifferencesWithOracle = /* #__PURE__ */ $ContractTemplate("ContractForDifferencesWithOracle");
const NewContract = /* #__PURE__ */ $ModalAction("NewContract");
const ContractDetails = value0 => $ModalAction("ContractDetails", value0);
const ApplyInputs = value0 => value1 => $ModalAction("ApplyInputs", value0, value1);
const Withdrawal = value0 => value1 => value2 => $ModalAction("Withdrawal", value0, value1, value2);
const ContractTemplate = value0 => $ModalAction("ContractTemplate", value0);
const eqOrderBy = {
  eq: x => y => {
    if (x === "OrderByCreationDate") { return y === "OrderByCreationDate"; }
    return x === "OrderByLastUpdateDate" && y === "OrderByLastUpdateDate";
  }
};
const eqContractTemplate = {
  eq: x => y => {
    if (x === "Escrow") { return y === "Escrow"; }
    if (x === "Swap") { return y === "Swap"; }
    return x === "ContractForDifferencesWithOracle" && y === "ContractForDifferencesWithOracle";
  }
};
const eqModalAction = {
  eq: x => y => {
    if (x.tag === "NewContract") { return y.tag === "NewContract"; }
    if (x.tag === "ContractDetails") {
      return y.tag === "ContractDetails" && eq(x._1.contract)(y._1.contract) && Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqContract.eq(x._1.initialContract)(y._1.initialContract) && Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqState.eq(x._1.initialState)(y._1.initialState) && eq3(x._1.state)(y._1.state) && eq4(x._1.transactionEndpoints)(y._1.transactionEndpoints);
    }
    if (x.tag === "ApplyInputs") {
      return y.tag === "ApplyInputs" && x._1 === y._1 && Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqContract.eq(x._2.contract)(y._2.contract) && Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqContract.eq(x._2.initialContract)(y._2.initialContract) && Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqState.eq(x._2.state)(y._2.state);
    }
    if (x.tag === "Withdrawal") { return y.tag === "Withdrawal" && x._1 === y._1 && eq7(x._2)(y._2) && x._3.txId === y._3.txId && x._3.txIx === y._3.txIx; }
    return x.tag === "ContractTemplate" && y.tag === "ContractTemplate" && (() => {
      if (x._1 === "Escrow") { return y._1 === "Escrow"; }
      if (x._1 === "Swap") { return y._1 === "Swap"; }
      return x._1 === "ContractForDifferencesWithOracle" && y._1 === "ContractForDifferencesWithOracle";
    })();
  }
};
const useStateRef$p = /* #__PURE__ */ Utils$dReact$dBasic$dHooks.useStateRef$p({
  eq: x => y => {
    if (x.tag === "Nothing") { return y.tag === "Nothing"; }
    return x.tag === "Just" && y.tag === "Just" && eqModalAction.eq(x._1)(y._1);
  }
});
const useInput = initialValue => () => {
  const a = React$dBasic$dHooks.useState_(($0, $1) => Data$dTuple.$Tuple($0, $1), initialValue);
  return pure(Data$dTuple.$Tuple(
    a._1,
    x => {
      const $0 = Data$dNullable.nullable(x.target.value, Data$dMaybe.Nothing, Data$dMaybe.Just);
      return a._2((() => {
        const $1 = (() => {
          if ($0.tag === "Nothing") { return ""; }
          if ($0.tag === "Just") { return $0._1; }
          $runtime.fail();
        })();
        return v => $1;
      })())();
    }
  ))();
};
const submit = witnesses => serverUrl => transactionEndpoint => put$p(serverUrl)(transactionEndpoint)({type_: "ShelleyTxWitness BabbageEra", description: "", cborHex: witnesses});
const runLiteTags = v => {
  const $0 = Data$dMap$dInternal.lookup(Data$dOrd.ordString)("run-lite")(v);
  if ($0.tag === "Just") {
    const $1 = decodeJson($0._1);
    if ($1.tag === "Left") { return []; }
    if ($1.tag === "Right") { return Data$dArray.filter(x => Data$dString$dCodePoints.toCodePointArray(x).length > 2)($1._1); }
    $runtime.fail();
  }
  if ($0.tag === "Nothing") { return []; }
  $runtime.fail();
};
const queryFieldId = "query";
const prettyState = x => Data$dArgonaut$dCore.stringify(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.encodeState.encodeJson(x));
const mkForm = onFieldValueChange => {
  const $0 = textInput({
    validator: x => {
      const $0 = onFieldValueChange(x);
      return () => {
        $0();
        return Data$dEither.$Either("Right", x);
      };
    },
    name: Data$dMaybe.$Maybe("Just", "query"),
    placeholder: "Filter contracts...",
    sizing: Data$dMaybe.$Maybe("Just", Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.FormControlLg)
  })(Data$dMaybe.Nothing)(0)._1;
  return {
    fields: $0.fields,
    validator: x => {
      const $1 = $0.validator(x);
      return () => {
        const a$p = $1();
        return (() => {
          if (a$p.tag === "Left") { return Data$dEither.$Either("Left", a$p._1); }
          if (a$p.tag === "Right") { return Data$dEither.$Either("Right", {query: a$p._1}); }
          $runtime.fail();
        })();
      };
    },
    render: $0.render
  };
};
const instantFromMillis = ms => {
  if (ms >= -8639977881600000.0 && ms <= 8639977881599999.0) { return Data$dMaybe.$Maybe("Just", ms); }
  return Data$dMaybe.Nothing;
};
const slotToTimestamp = v => v1 => {
  const $0 = Data$dBigInt.toNumber(Data$dBigInt.biAdd(v.slotZeroTime)(Data$dBigInt.biMul(Data$dBigInt.fromInt(v1))(v.slotLength)));
  if ($0 >= -8639977881600000.0 && $0 <= 8639977881599999.0) { return Data$dDateTime$dInstant.toDateTime($0); }
  return Data$dDateTime.$DateTime(Data$dDate.$$$Date(-271820, Data$dDate$dComponent.January, 1), Data$dTime.$Time(0, 0, 0, 0));
};
const actionIconSizing = " h4";
const mkContractList = /* #__PURE__ */ bind2(/* #__PURE__ */ asks(v => v.msgHub))(v => bind2(asks(v1 => v1.runtime))(v1 => bind2(asks(v2 => v2.walletInfoCtx))(walletInfoCtx => bind2(asks(v2 => v2.slotting))(slotting => bind2(Component$dCreateContract.mkComponent)(createContractComponent => bind2(Component$dApplyInputs.mkComponent)(applyInputsComponent => bind2(Component$dWithdrawals.mkComponent)(withdrawalsComponent => bind2(Component$dContractDetails.mkComponent)(contractDetails => bind2(Component$dContractTemplates$dEscrow.mkComponent)(escrowComponent => bind2(Component$dContractTemplates$dSwap.mkComponent)(swapComponent => bind2(Component$dContractTemplates$dContractForDifferencesWithOracle.mkComponent)(contractForDifferencesWithOracleComponent => liftEffect(React$dBasic$dHooks.component("ContractList")(v2 => {
  const $0 = v2.connectedWallet;
  const $1 = v2.possibleContracts;
  return () => {
    React$dBasic$dHooks.useContext_(walletInfoCtx);
    const a = Utils$dReact$dBasic$dHooks.useMaybeValue$p();
    const a$1 = useStateRef$p(a._1)();
    const a$2 = React$dBasic$dHooks.useState_(($2, $3) => Data$dTuple.$Tuple($2, $3), {orderBy: OrderByCreationDate, orderAsc: false});
    const a$3 = React$dBasic$dHooks.useState$p(Data$dMaybe.Nothing)();
    const form = mkForm(a$3._2);
    const a$4 = React$dBasic$dHooks$dUseStatelessFormSpec.useStatelessFormSpec({spec: form, onSubmit: v$1 => () => {}, validationDebounce: 0.5})();
    const possibleContracts$p = (() => {
      if ($1.tag === "Just") {
        const sortedContracts = (() => {
          if (a$2._1.orderBy === "OrderByCreationDate") {
            return Data$dArray.sortBy(x => y => Data$dOrd.ordInt.compare(x._runtime.contractHeader.block.tag === "Just" ? x._runtime.contractHeader.block._1.blockNo : 19058430)(y._runtime.contractHeader.block.tag === "Just"
              ? y._runtime.contractHeader.block._1.blockNo
              : 19058430))($1._1);
          }
          if (a$2._1.orderBy === "OrderByLastUpdateDate") {
            return Data$dArray.sortBy(x => y => Data$dOrd.ordInt.compare((() => {
              const $2 = Component$dTypes$dContractInfo.updatedAt(x);
              if ($2.tag === "Just") { return $2._1.blockNo; }
              return 19058430;
            })())((() => {
              const $2 = Component$dTypes$dContractInfo.updatedAt(y);
              if ($2.tag === "Just") { return $2._1.blockNo; }
              return 19058430;
            })()))($1._1);
          }
          $runtime.fail();
        })();
        return Data$dMaybe.$Maybe("Just", a$2._1.orderAsc ? sortedContracts : Data$dArray.reverse(sortedContracts));
      }
      if ($1.tag === "Nothing") { return Data$dMaybe.Nothing; }
      $runtime.fail();
    })();
    const $2 = (() => {
      if (a$3._1.tag === "Just") {
        if (possibleContracts$p.tag === "Just") {
          return Data$dMaybe.$Maybe(
            "Just",
            Data$dArray.filter(v7 => Data$dString$dCodeUnits.contains(a$3._1._1)(v7.contractId.txId + "#" + Data$dShow.showIntImpl(v7.contractId.txIx)) || or(Data$dFunctor.arrayMap(Data$dString$dCodeUnits.contains(a$3._1._1))(v7.tags.extraTags)))(possibleContracts$p._1)
          );
        }
        if (possibleContracts$p.tag === "Nothing") { return Data$dMaybe.Nothing; }
        $runtime.fail();
      }
      if (a$3._1.tag === "Nothing") { return Data$dMaybe.Nothing; }
      $runtime.fail();
    })();
    const possibleContracts$p$p = $2.tag === "Nothing" ? possibleContracts$p : $2;
    return pure((() => {
      if (a._1.tag === "Just") {
        if ($0.tag === "Just") {
          if (a._1._1.tag === "NewContract") {
            return createContractComponent({
              connectedWallet: $0._1,
              onDismiss: a._2._2,
              onSuccess: v7 => {
                const $3 = v.add(Component$dTypes.$MessageContent(
                  "Success",
                  fold([
                    "Successfully created and submitted the contract. Contract transaction awaits to be included in the blockchain.",
                    "Contract status should change to 'Confirmed' at that point."
                  ])
                ));
                return () => {
                  $3();
                  return a._2._2();
                };
              }
            });
          }
          if (a._1._1.tag === "ApplyInputs") {
            return applyInputsComponent({
              transactionsEndpoint: a._1._1._1,
              marloweContext: a._1._1._2,
              connectedWallet: $0._1,
              onSuccess: v7 => {
                const $3 = v.add(Component$dTypes.$MessageContent(
                  "Success",
                  fold(["Successfully applied the inputs. Input application transaction awaits to be included in the blockchain."])
                ));
                return () => {
                  $3();
                  return a._2._2();
                };
              },
              onDismiss: a._2._2
            });
          }
          if (a._1._1.tag === "Withdrawal") {
            return withdrawalsComponent({
              inModal: true,
              withdrawalsEndpoint: a._1._1._1,
              roles: a._1._1._2,
              contractId: a._1._1._3,
              connectedWallet: $0._1,
              onSuccess: v7 => {
                const $3 = v.add(Component$dTypes.$MessageContent(
                  "Success",
                  fold(["Successfully applied the inputs. Input application transaction awaits to be included in the blockchain."])
                ));
                return () => {
                  $3();
                  return a._2._2();
                };
              },
              onDismiss: a._2._2
            });
          }
          if (a._1._1.tag === "ContractDetails") {
            return contractDetails({
              contract: a._1._1._1.contract,
              onClose: a._2._2,
              state: a._1._1._1.state,
              transactionEndpoints: a._1._1._1.transactionEndpoints,
              initialContract: a._1._1._1.initialContract,
              initialState: a._1._1._1.initialState
            });
          }
          if (a._1._1.tag === "ContractTemplate") {
            if (a._1._1._1 === "Escrow") { return escrowComponent({onSuccess: v7 => a._2._2, onDismiss: a._2._2}); }
            if (a._1._1._1 === "Swap") { return swapComponent({onSuccess: v7 => a._2._2, onDismiss: a._2._2}); }
            if (a._1._1._1 === "ContractForDifferencesWithOracle") { return contractForDifferencesWithOracleComponent({onSuccess: v7 => a._2._2, onDismiss: a._2._2}); }
          }
          return React$dBasic.empty;
        }
        if (a._1._1.tag === "ContractDetails") {
          return contractDetails({
            contract: a._1._1._1.contract,
            onClose: a._2._2,
            state: a._1._1._1.state,
            transactionEndpoints: a._1._1._1.transactionEndpoints,
            initialContract: a._1._1._1.initialContract,
            initialState: a._1._1._1.initialState
          });
        }
        if (a._1._1.tag === "ContractTemplate") {
          if (a._1._1._1 === "Escrow") { return escrowComponent({onSuccess: v7 => a._2._2, onDismiss: a._2._2}); }
          if (a._1._1._1 === "Swap") { return swapComponent({onSuccess: v7 => a._2._2, onDismiss: a._2._2}); }
          if (a._1._1._1 === "ContractForDifferencesWithOracle") { return contractForDifferencesWithOracleComponent({onSuccess: v7 => a._2._2, onDismiss: a._2._2}); }
        }
        return React$dBasic.empty;
      }
      if (a._1.tag === "Nothing") {
        return Component$dBodyLayout.component({
          title: "Your Marlowe Contracts",
          description: React$dBasic$dDOM$dGenerated.div1({
            children: [
              React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                children: [
                  React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
                    children: ["To the right, you will find a list of all contracts that your wallet is involved in on the Cardano Blockchain's `preview` network."],
                    className: "white-color h5"
                  })
                ],
                className: "pb-3"
              }),
              React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                children: [
                  React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
                    children: [
                      "Your involvement means that one of your wallet addresses is a part of the contract (some contracts are non fully public) or that you have a token (so called \"role token\") which gives you permission to act as a party in some contract."
                    ],
                    className: "white-color h5"
                  })
                ],
                className: "pb-3"
              }),
              React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                children: [
                  React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
                    children: ["Click on the 'New Contract' button to upload a new contract or try out one of our contract templates."],
                    className: "white-color h5"
                  })
                ],
                className: "pb-3"
              })
            ]
          }),
          content: React$dBasic.fragment([
            (() => {
              const disabled = (() => {
                if ($0.tag === "Nothing") { return true; }
                if ($0.tag === "Just") { return false; }
                $runtime.fail();
              })();
              return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                children: [
                  React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                    children: [React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({children: form.render(a$4.formState), className: "form-group"})],
                    className: "col-7 text-end"
                  }),
                  React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                    children: (() => {
                      const $3 = React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                        children: [
                          Component$dWidgets.buttonWithIcon(defaultsRecord)({
                            icon: React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalspan$p)({children: [], className: "bi-file-earmark-plus h5 me-1"}),
                            label: "Create Contract",
                            extraClassNames: "font-weight-bold me-2",
                            disabled,
                            onClick: (() => {
                              const $3 = React$dBasic$dHooks.readRef(a$1);
                              return () => {
                                const v7 = $3();
                                if (v7.tag === "Nothing") { return a._2._1(NewContract)(); }
                              };
                            })()
                          }),
                          React$dBasic.element(Contrib$dReactBootstrap$dDropdownButton._DropdownButton)({
                            children: [
                              React$dBasic.element(Contrib$dReactBootstrap$dDropdownItem._DropdownItem)({
                                children: ["Escrow"],
                                onClick: (() => {
                                  const $3 = a._2._1($ModalAction("ContractTemplate", Escrow));
                                  return v$1 => $3();
                                })()
                              }),
                              React$dBasic.element(Contrib$dReactBootstrap$dDropdownItem._DropdownItem)({
                                children: ["Swap"],
                                onClick: (() => {
                                  const $3 = a._2._1($ModalAction("ContractTemplate", Swap));
                                  return v$1 => $3();
                                })()
                              }),
                              React$dBasic.element(Contrib$dReactBootstrap$dDropdownItem._DropdownItem)({
                                children: ["Contract For Differences with Oracle"],
                                onClick: (() => {
                                  const $3 = a._2._1($ModalAction("ContractTemplate", ContractForDifferencesWithOracle));
                                  return v$1 => $3();
                                })()
                              })
                            ],
                            className: "d-inline-block",
                            title: React$dBasic.fragment([
                              React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalspan$p)({children: [], className: "bi-file-earmark-medical h5 me-1"}),
                              "Use Contract Template"
                            ])
                          })
                        ],
                        className: "text-end"
                      });
                      return [
                        disabled
                          ? React$dBasic.element(ReactBootstrap$dOverlayTrigger._OverlayTrigger)({
                              children: [$3],
                              overlay: React$dBasic.element(ReactBootstrap$dTooltip._Tooltip)({children: ["Connect to a wallet to add a contract"], placement: "left"}),
                              placement: "bottom"
                            })
                          : $3
                      ];
                    })(),
                    className: "col-5"
                  })
                ],
                className: "row p-4"
              });
            })(),
            possibleContracts$p$p.tag === "Just" && possibleContracts$p$p._1.length !== 0
              ? React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                  children: [
                    React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                      children: [
                        React$dBasic.element(ReactBootstrap$dTable._Table)({
                          children: [
                            (() => {
                              const orderingTh = Component$dWidget$dTable.orderingHeader(eqOrderBy)(a$2._1)(a$2._2);
                              return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalthead$p)({
                                children: [
                                  React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaltr$p)({
                                    children: [
                                      orderingTh(React$dBasic.fragment(["Created"]))(OrderByCreationDate),
                                      orderingTh(React$dBasic.fragment(["Updated"]))(OrderByLastUpdateDate),
                                      React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalth$p)({children: ["Contract Id"], className: "text-center w-16rem"}),
                                      React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalth$p)({children: ["Tags"], className: "text-center text-muted"}),
                                      React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalth$p)({children: ["Actions"], className: "text-center text-muted"})
                                    ]
                                  })
                                ]
                              });
                            })(),
                            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaltbody$p)({
                              children: Data$dFunctor.arrayMap(v7 => {
                                const tdCentered = React$dBasic$dDOM$dSimplified$dGenerated.td()(React$dBasic$dDOM$dSimplified$dToJSX.toJSXArrayJSX)()()({className: "text-center"});
                                const tdSlotInfo = v8 => {
                                  if (v8.tag === "Nothing") { return tdCentered([]); }
                                  if (v8.tag === "Just") {
                                    return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaltd$p)({
                                      children: [
                                        (() => {
                                          const jsDate = Data$dJSDate.fromDateTime(slotToTimestamp(slotting)(v8._1));
                                          return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalsmall$p)({
                                            children: [Contrib$dData$dJSDate.toLocaleDateString(jsDate), br({}), Contrib$dData$dJSDate.toLocaleTimeString(jsDate)]
                                          });
                                        })()
                                      ],
                                      className: "text-center"
                                    });
                                  }
                                  $runtime.fail();
                                };
                                return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaltr$p)({
                                  children: [
                                    tdSlotInfo(v7._runtime.contractHeader.block.tag === "Just"
                                      ? Data$dMaybe.$Maybe("Just", v7._runtime.contractHeader.block._1.slotNo)
                                      : Data$dMaybe.Nothing),
                                    tdSlotInfo((() => {
                                      const $3 = Component$dTypes$dContractInfo.updatedAt(v7);
                                      if ($3.tag === "Just") { return Data$dMaybe.$Maybe("Just", $3._1.slotNo); }
                                      return Data$dMaybe.Nothing;
                                    })()),
                                    React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaltd$p)({
                                      children: [
                                        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalspan$p)({
                                          children: [
                                            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internala$p)({
                                              children: [v7._runtime.contractHeader.contractId.txId + "#" + Data$dShow.showIntImpl(v7._runtime.contractHeader.contractId.txIx)],
                                              className: "cursor-pointer text-decoration-none text-reset text-decoration-underline-hover truncate-text w-16rem d-inline-block",
                                              onClick: (() => {
                                                const $3 = v7.marloweInfo.tag === "Just"
                                                  ? a._2._1($ModalAction(
                                                      "ContractDetails",
                                                      {
                                                        contract: v7.marloweInfo._1.currentContract,
                                                        state: v7.marloweInfo._1.state,
                                                        initialState: v7.marloweInfo._1.initialState,
                                                        initialContract: v7.marloweInfo._1.initialContract,
                                                        transactionEndpoints: Data$dFunctor.arrayMap(v8 => v8._2)(v7._runtime.transactions)
                                                      }
                                                    ))
                                                  : () => {};
                                                return v$1 => $3();
                                              })()
                                            }),
                                            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internala$p)({
                                              children: [
                                                React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalspan$p)({
                                                  children: [],
                                                  className: "bi-clipboard-plus ms-1 d-inline-block"
                                                })
                                              ],
                                              className: "cursor-pointer text-decoration-none text-decoration-underline-hover text-reset",
                                              href: "#"
                                            })
                                          ],
                                          className: "d-flex"
                                        })
                                      ],
                                      className: "text-center"
                                    }),
                                    tdCentered([intercalate(", ")(v7.tags.extraTags)]),
                                    tdCentered([
                                      (() => {
                                        if (v7.marloweInfo.tag === "Just") {
                                          if (v7.endpoints.transactions.tag === "Just" && v7.marloweInfo._1.currentContract.tag === "Just") {
                                            if (v7.marloweInfo._1.state.tag === "Just") {
                                              return Component$dWidgets.linkWithIcon(defaultsRecord)({
                                                icon: React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalspan$p)({
                                                  children: [],
                                                  className: "bi-fast-forward-fill h4"
                                                }),
                                                label: React$dBasic.empty,
                                                tooltipText: Data$dMaybe.$Maybe("Just", "Apply available inputs to the contract"),
                                                tooltipPlacement: Data$dMaybe.$Maybe("Just", "left"),
                                                onClick: a._2._1($ModalAction(
                                                  "ApplyInputs",
                                                  v7.endpoints.transactions._1,
                                                  {
                                                    initialContract: v7.marloweInfo._1.initialContract,
                                                    state: v7.marloweInfo._1.state._1,
                                                    contract: v7.marloweInfo._1.currentContract._1
                                                  }
                                                ))
                                              });
                                            }
                                            return React$dBasic.empty;
                                          }
                                          if (v7.marloweInfo._1.currentContract.tag === "Nothing" && v7.marloweInfo._1.state.tag === "Nothing") {
                                            return Component$dWidgets.linkWithIcon(defaultsRecord)({
                                              icon: React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalspan$p)({
                                                children: [],
                                                className: "bi-file-earmark-check-fill success-color h4"
                                              }),
                                              tooltipText: Data$dMaybe.$Maybe("Just", "Contract is completed - click on contract id to see in Marlowe Explorer"),
                                              tooltipPlacement: Data$dMaybe.$Maybe("Just", "left"),
                                              label: React$dBasic.empty,
                                              onClick: () => {}
                                            });
                                          }
                                        }
                                        return React$dBasic.empty;
                                      })()
                                    ])
                                  ],
                                  className: "align-middle"
                                });
                              })(possibleContracts$p$p._1)
                            })
                          ],
                          hover: true,
                          striped: true
                        })
                      ],
                      className: "col-12 mt-3"
                    })
                  ],
                  className: "row"
                })
              : React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                  children: [Contrib$dReact$dSvg.loadingSpinnerLogo({})],
                  className: "col-12 position-relative d-flex justify-content-center align-items-center blur-bg z-index-sticky"
                })
          ])
        });
      }
      return React$dBasic.empty;
    })())();
  };
})))))))))))));
export {
  $ContractTemplate,
  $FormState,
  $ModalAction,
  $OrderBy,
  ApplyInputs,
  ContractDetails,
  ContractForDifferencesWithOracle,
  ContractTemplate,
  Escrow,
  Failure,
  NewContract,
  NotValidated,
  OrderByCreationDate,
  OrderByLastUpdateDate,
  Swap,
  Validated,
  Withdrawal,
  actionIconSizing,
  asks,
  bind2,
  br,
  decodeJson,
  defaultsRecord,
  eq,
  eq3,
  eq4,
  eq7,
  eqContractTemplate,
  eqModalAction,
  eqOrderBy,
  fold,
  instantFromMillis,
  intercalate,
  liftEffect,
  mkContractList,
  mkForm,
  or,
  prettyState,
  pure,
  put$p,
  queryFieldId,
  runLiteTags,
  slotToTimestamp,
  submit,
  textInput,
  useInput,
  useStateRef$p
};
