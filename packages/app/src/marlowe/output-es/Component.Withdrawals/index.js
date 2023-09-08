import * as $runtime from "../runtime.js";
import * as Component$dModal from "../Component.Modal/index.js";
import * as Contrib$dData$dArgonaut$dGeneric$dRecord from "../Contrib.Data.Argonaut.Generic.Record/index.js";
import * as Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders from "../Contrib.ReactBootstrap.FormSpecBuilders.StatelessFormSpecBuilders/index.js";
import * as Control$dMonad$dReader$dTrans from "../Control.Monad.Reader.Trans/index.js";
import * as Data$dArgonaut$dDecode$dClass from "../Data.Argonaut.Decode.Class/index.js";
import * as Data$dBigInt from "../Data.BigInt/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldableWithIndex from "../Data.FoldableWithIndex/index.js";
import * as Data$dFunctorWithIndex from "../Data.FunctorWithIndex/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Debug from "../Debug/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dClass from "../Effect.Class/index.js";
import * as Heterogeneous$dFolding from "../Heterogeneous.Folding/index.js";
import * as Marlowe$dRuntime$dWeb$dClient from "../Marlowe.Runtime.Web.Client/index.js";
import * as Marlowe$dRuntime$dWeb$dTypes from "../Marlowe.Runtime.Web.Types/index.js";
import * as React$dBasic from "../React.Basic/index.js";
import * as React$dBasic$dDOM$dSimplified$dGenerated from "../React.Basic.DOM.Simplified.Generated/index.js";
import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as React$dBasic$dHooks$dUseStatelessFormSpec from "../React.Basic.Hooks.UseStatelessFormSpec/index.js";
import * as Record$dUnsafe$dUnion from "../Record.Unsafe.Union/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Wallet from "../Wallet/index.js";
const post$p = /* #__PURE__ */ Marlowe$dRuntime$dWeb$dClient.post$p()(Marlowe$dRuntime$dWeb$dTypes.decodeJsonPostWithdrawals1)(Marlowe$dRuntime$dWeb$dTypes.decodeJsonApiErrorString)(/* #__PURE__ */ Contrib$dData$dArgonaut$dGeneric$dRecord.decodeRecord1()()(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2({
  reflectSymbol: () => "links"
})()()(/* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dDecode$dClass.decodeRecord(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons({
    decodeJsonField: j => {
      if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", Marlowe$dRuntime$dWeb$dTypes.decodeJsonResourceLink.decodeJson(j._1)); }
      return Data$dMaybe.Nothing;
    }
  })(Data$dArgonaut$dDecode$dClass.gDecodeJsonNil)({reflectSymbol: () => "withdrawal"})()())();
  return {
    decodeJsonField: j => {
      if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0.decodeJson(j._1)); }
      return Data$dMaybe.Nothing;
    }
  };
})()))(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte({
  reflectSymbol: () => "resource"
})()()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil))))(Marlowe$dRuntime$dWeb$dTypes.encodeHeadersPostWithdraw)(Marlowe$dRuntime$dWeb$dTypes.encodeJsonBodyPostWithdra)()()();
const put$p = /* #__PURE__ */ Marlowe$dRuntime$dWeb$dClient.put$p(Marlowe$dRuntime$dWeb$dTypes.encodeHeadersPutWithdrawa)(Marlowe$dRuntime$dWeb$dTypes.encodeJsonBodyPutWithdraw)()()()();
const bind = /* #__PURE__ */ (() => Control$dMonad$dReader$dTrans.bindReaderT(Effect.bindEffect).bind)();
const asks = /* #__PURE__ */ (() => {
  const monadReaderT1 = Control$dMonad$dReader$dTrans.monadReaderT(Effect.monadEffect);
  return f => monadReaderT1.Bind1().Apply0().Functor0().map(f)(Effect.pureE);
})();
const liftEffect = /* #__PURE__ */ (() => Control$dMonad$dReader$dTrans.monadEffectReader(Effect$dClass.monadEffectEffect).liftEffect)();
const defaultsRecord = {defaults: b => a => Record$dUnsafe$dUnion.unsafeUnionFn(a, b)};
const mkModal = /* #__PURE__ */ Component$dModal.mkModal(defaultsRecord);
const fromFoldableWithIndex = /* #__PURE__ */ (() => Data$dFoldableWithIndex.foldableWithIndexArray.foldlWithIndex(k => m => v => Data$dMap$dInternal.insert(Data$dOrd.ordInt)(k)(v)(m))(Data$dMap$dInternal.Leaf))();
const traceM1 = /* #__PURE__ */ Debug.traceM()(Effect$dAff.monadAff);
const show = /* #__PURE__ */ (() => Marlowe$dRuntime$dWeb$dClient.showClientError(Data$dShow.showString).show)();
const traceM2 = /* #__PURE__ */ Debug.traceM()(Effect.monadEffect);
const choiceField = /* #__PURE__ */ Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.choiceField(Effect.monadEffect)(Data$dIdentity.monadIdentity)(defaultsRecord);
const pure1 = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const WithdrawalContext = x => x;
const withdrawal = v => serverURL => withdrawalsEndpoint => post$p(serverURL)(withdrawalsEndpoint)({
  role: v.role,
  contractId: v.contractId,
  changeAddress: v.wallet.changeAddress,
  addresses: v.wallet.usedAddresses,
  minUTxODeposit: Data$dBigInt.fromInt(2000000),
  collateralUTxOs: []
});
const submit = witnesses => serverUrl => contractEndpoint => put$p(serverUrl)(contractEndpoint)({type_: "ShelleyTxWitness BabbageEra", description: "", cborHex: witnesses});
const sign = walletApi => tx => Wallet.signTx(walletApi)(tx.cborHex)(false);
const mkComponent = /* #__PURE__ */ bind(/* #__PURE__ */ asks(v => v.runtime))(v => bind(liftEffect(mkModal))(modal => bind(asks(v1 => v1.walletInfoCtx))(walletInfoCtx => liftEffect(React$dBasic$dHooks.component("Withdrawal")(v1 => {
  const $0 = v1.connectedWallet;
  const $1 = v1.contractId;
  const $2 = v1.onDismiss;
  const $3 = v1.roles;
  return () => {
    const a$p = React$dBasic$dHooks.useContext_(walletInfoCtx);
    const $4 = a$p.tag === "Just" ? Data$dMaybe.$Maybe("Just", a$p._1._2) : Data$dMaybe.Nothing;
    const rolesMap = fromFoldableWithIndex($3);
    const $5 = choiceField({
      choices: Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.$ChoiceFieldChoices(
        "RadioButtonFieldChoices",
        {
          switch: true,
          choices: Data$dFunctorWithIndex.mapWithIndexArray(idx => role => ({disabled: false, helpText: Data$dMaybe.Nothing, label: role, value: Data$dShow.showIntImpl(idx)}))($3)
        }
      ),
      validator: x => {
        const $5 = Data$dEither.$Either(
          "Right",
          (() => {
            const $5 = (() => {
              if (x.tag === "Just") { return Data$dInt.fromString(x._1); }
              if (x.tag === "Nothing") { return Data$dMaybe.Nothing; }
              $runtime.fail();
            })();
            const $6 = (() => {
              if ($5.tag === "Just") { return Data$dMap$dInternal.lookup(Data$dOrd.ordInt)($5._1)(rolesMap); }
              if ($5.tag === "Nothing") { return Data$dMaybe.Nothing; }
              $runtime.fail();
            })();
            if ($6.tag === "Nothing") { return ""; }
            if ($6.tag === "Just") { return $6._1; }
            $runtime.fail();
          })()
        );
        return () => $5;
      }
    })(Data$dMaybe.Nothing)(0)._1;
    const formSpec = {
      fields: $5.fields,
      validator: x => {
        const $6 = $5.validator(x);
        return () => {
          const a$p$1 = $6();
          return (() => {
            if (a$p$1.tag === "Left") { return Data$dEither.$Either("Left", a$p$1._1); }
            if (a$p$1.tag === "Right") { return Data$dEither.$Either("Right", {role: a$p$1._1}); }
            $runtime.fail();
          })();
        };
      },
      render: $5.render
    };
    const a = React$dBasic$dHooks$dUseStatelessFormSpec.useStatelessFormSpec({
      spec: formSpec,
      onSubmit: x => {
        if (x.result.tag === "Just" && x.result._1._1.tag === "Right" && $4.tag === "Just") {
          const $6 = Effect$dAff._makeFiber(
            Effect$dAff.ffiUtil,
            Effect$dAff._bind(withdrawal({wallet: {changeAddress: $4._1.changeAddress, usedAddresses: $4._1.usedAddresses}, contractId: $1, role: x.result._1._1._1.role})(v.serverURL)(v.withdrawalsEndpoint))(v3 => {
              if (v3.tag === "Right") {
                const $6 = v3._1.links.withdrawal;
                return Effect$dAff._bind(Wallet.signTx($0.wallet)(v3._1.resource.tx.cborHex)(true))(v4 => {
                  if (v4.tag === "Right") {
                    return Effect$dAff._bind(put$p(v.serverURL)($6)({type_: "ShelleyTxWitness BabbageEra", description: "", cborHex: v4._1}))(v5 => {
                      if (v5.tag === "Right") { return Effect$dAff._liftEffect(v1.onSuccess($6)); }
                      if (v5.tag === "Left") {
                        const $7 = v5._1;
                        return Effect$dAff._bind(traceM1("Error while submitting the transaction"))(() => traceM1($7));
                      }
                      $runtime.fail();
                    });
                  }
                  if (v4.tag === "Left") {
                    const $7 = v4._1;
                    return Effect$dAff._bind(traceM1("Failed to sign transaction"))(() => traceM1($7));
                  }
                  $runtime.fail();
                });
              }
              if (v3.tag === "Left") { return traceM1("Error: " + show(v3._1)); }
              $runtime.fail();
            })
          );
          return () => {
            const fiber = $6();
            fiber.run();
            traceM2("withdrawal")();
            traceM2($1)();
          };
        }
        const $6 = traceM2("withdrawal error");
        return () => {$6();};
      },
      validationDebounce: 0.5
    })();
    return pure1(modal({
      title: "Withdrawal",
      onDismiss: $2,
      body: React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
        children: [
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
            children: [React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({children: formSpec.render(a.formState), className: "form-group"})],
            className: "col-12"
          })
        ],
        className: "row"
      }),
      footer: React$dBasic.fragment([
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalbutton$p)({
          children: ["Submit"],
          className: "btn btn-primary",
          disabled: a.result.tag === "Just" ? a.result._1._1.tag !== "Right" : true,
          onClick: a.onSubmit
        })
      ]),
      size: Component$dModal.ExtraLarge
    }))();
  };
})))));
export {
  WithdrawalContext,
  asks,
  bind,
  choiceField,
  defaultsRecord,
  fromFoldableWithIndex,
  liftEffect,
  mkComponent,
  mkModal,
  post$p,
  pure1,
  put$p,
  show,
  sign,
  submit,
  traceM1,
  traceM2,
  withdrawal
};
