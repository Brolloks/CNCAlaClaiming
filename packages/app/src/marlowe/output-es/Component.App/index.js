import * as $runtime from "../runtime.js";
import * as App$dPages$dSplittedDeposit from "../App.Pages.SplittedDeposit/index.js";
import * as CardanoMultiplatformLib$dTypes from "../CardanoMultiplatformLib.Types/index.js";
import * as Component$dAssets$dSvgs from "../Component.Assets.Svgs/index.js";
import * as Component$dBodyLayout from "../Component.BodyLayout/index.js";
import * as Component$dConnectWallet from "../Component.ConnectWallet/index.js";
import * as Component$dContractList from "../Component.ContractList/index.js";
import * as Component$dInputHelper from "../Component.InputHelper/index.js";
import * as Component$dLandingPage from "../Component.LandingPage/index.js";
import * as Component$dMessageHub from "../Component.MessageHub/index.js";
import * as Component$dTypes from "../Component.Types/index.js";
import * as Component$dTypes$dAppTags from "../Component.Types.AppTags/index.js";
import * as Component$dUseWithdrawal from "../Component.UseWithdrawal/index.js";
import * as Component$dWidgets from "../Component.Widgets/index.js";
import * as Contrib$dCardano from "../Contrib.Cardano/index.js";
import * as Contrib$dHalogen$dSubscription from "../Contrib.Halogen.Subscription/index.js";
import * as Contrib$dReact$dSvg from "../Contrib.React.Svg/index.js";
import * as Contrib$dReactSyntaxHighlighter from "../Contrib.ReactSyntaxHighlighter/index.js";
import * as Control$dMonad$dReader$dTrans from "../Control.Monad.Reader.Trans/index.js";
import * as Data$dArgonaut$dEncode$dClass from "../Data.Argonaut.Encode.Class/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dList from "../Data.List/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Data$dUnfoldable from "../Data.Unfoldable/index.js";
import * as Debug from "../Debug/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dClass from "../Effect.Class/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Effect$dNow from "../Effect.Now/index.js";
import * as Language$dMarlowe$dCore$dV1$dSemantics from "../Language.Marlowe.Core.V1.Semantics/index.js";
import * as Marlowe$dRuntime$dWeb$dTypes from "../Marlowe.Runtime.Web.Types/index.js";
import * as React$dBasic from "../React.Basic/index.js";
import * as React$dBasic$dDOM$dGenerated from "../React.Basic.DOM.Generated/index.js";
import * as React$dBasic$dDOM$dSimplified$dGenerated from "../React.Basic.DOM.Simplified.Generated/index.js";
import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dAff from "../React.Basic.Hooks.Aff/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as ReactBootstrap$dIcons from "../ReactBootstrap.Icons/index.js";
import * as ReactBootstrap$dOffcanvas from "../ReactBootstrap.Offcanvas/index.js";
import * as Record$dUnsafe$dUnion from "../Record.Unsafe.Union/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Utils$dReact$dBasic$dHooks from "../Utils.React.Basic.Hooks/index.js";
import * as Wallet from "../Wallet/index.js";
import * as WalletContext from "../WalletContext/index.js";
import * as Web$dHTML from "../Web.HTML/index.js";
const $WalletBrand = tag => tag;
const liftEffect = /* #__PURE__ */ (() => Control$dMonad$dReader$dTrans.monadEffectReader(Effect$dClass.monadEffectEffect).liftEffect)();
const pure1 = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const bind4 = /* #__PURE__ */ (() => Control$dMonad$dReader$dTrans.bindReaderT(Effect.bindEffect).bind)();
const asks = /* #__PURE__ */ (() => {
  const monadReaderT1 = Control$dMonad$dReader$dTrans.monadReaderT(Effect.monadEffect);
  return f => monadReaderT1.Bind1().Apply0().Functor0().map(f)(Effect.pureE);
})();
const foldMapThrottle = /* #__PURE__ */ Contrib$dHalogen$dSubscription.foldMapThrottle(Data$dList$dTypes.monoidList);
const eqMaybe = {
  eq: x => y => {
    if (x.tag === "Nothing") { return y.tag === "Nothing"; }
    return x.tag === "Just" && y.tag === "Just" && x._1 === y._1;
  }
};
const eqMaybe1 = {
  eq: x => y => {
    if (x.tag === "Nothing") { return y.tag === "Nothing"; }
    return x.tag === "Just" && y.tag === "Just" && WalletContext.eqWalletContext.eq(x._1)(y._1);
  }
};
const traceM = /* #__PURE__ */ Debug.traceM()(Effect$dAff.monadAff);
const useEffect = /* #__PURE__ */ React$dBasic$dHooks.useEffect({eq: x => y => x._1 === y._1 && eqMaybe1.eq(x._2)(y._2)});
const defaultsRecord = {defaults: b => a => Record$dUnsafe$dUnion.unsafeUnionFn(a, b)};
const img = /* #__PURE__ */ React$dBasic.element(React$dBasic$dDOM$dGenerated._img$p);
const Lace = /* #__PURE__ */ $WalletBrand("Lace");
const Yoroi = /* #__PURE__ */ $WalletBrand("Yoroi");
const Nami = /* #__PURE__ */ $WalletBrand("Nami");
const Eternl = /* #__PURE__ */ $WalletBrand("Eternl");
const AppContractInfoMap = x => x;
const showWalletBrand = {
  show: v => {
    if (v === "Yoroi") { return "Yoroi"; }
    if (v === "Nami") { return "Nami"; }
    if (v === "Lace") { return "Lace"; }
    if (v === "Eternl") { return "Eternl"; }
    $runtime.fail();
  }
};
const policyIdsStr = /* #__PURE__ */ (() => {
  const $0 = Data$dFunctor.arrayMap(Contrib$dCardano.assetIdToString);
  return x => $0(Data$dFunctor.arrayMap(v1 => v1._1)(Data$dMap$dInternal.toUnfoldable(Data$dUnfoldable.unfoldableArray)(x)));
})();
const updateAppContractInfoMap = v => walletContext => updates => {
  const $0 = v.map;
  const walletCtx = walletContext.tag === "Just" ? Data$dMaybe.$Maybe("Just", walletContext._1) : Data$dMaybe.Nothing;
  const $1 = Data$dFunctor.arrayMap(CardanoMultiplatformLib$dTypes.bech32ToString)(walletCtx.tag === "Just" ? walletCtx._1.usedAddresses : []);
  const $2 = walletCtx.tag === "Just" ? Data$dMaybe.$Maybe("Just", policyIdsStr(walletCtx._1.balance)) : Data$dMaybe.Nothing;
  const $3 = (() => {
    if ($2.tag === "Nothing") { return []; }
    if ($2.tag === "Just") { return $2._1; }
    $runtime.fail();
  })();
  return {
    walletContext,
    map: Data$dMap$dInternal.mapMaybeWithKey(Marlowe$dRuntime$dWeb$dTypes.ordTxOutRef)(v$1 => Data$dMap$dInternal.identity)(Data$dMap$dInternal.functorMap.map(v3 => {
      const marloweInfo = (() => {
        if (v3.contractState.tag === "Just") {
          return Data$dMaybe.$Maybe(
            "Just",
            {
              initialContract: v3.contractState._1.initialContract,
              currencySymbol: v3.contract.resource.roleTokenMintingPolicyId === "" ? Data$dMaybe.Nothing : Data$dMaybe.$Maybe("Just", v3.contract.resource.roleTokenMintingPolicyId),
              state: v3.contractState._1.state,
              currentContract: v3.contractState._1.currentContract,
              initialState: Language$dMarlowe$dCore$dV1$dSemantics.emptyState,
              unclaimedPayouts: v3.contractState._1.unclaimedPayouts
            }
          );
        }
        if (v3.contractState.tag === "Nothing") { return Data$dMaybe.Nothing; }
        $runtime.fail();
      })();
      const possibleAppTags = Component$dTypes$dAppTags.fromRuntimeTags(v3.contract.resource.tags);
      if (
        marloweInfo.tag === "Just" && (
          Data$dArray.intersectBy(Data$dEq.eqStringImpl)($1)(Component$dInputHelper.addressesInContract(marloweInfo._1.initialContract)).length !== 0 || Data$dArray.intersectBy(Data$dEq.eqStringImpl)($3)(Component$dInputHelper.rolesInContract(marloweInfo._1.initialContract)).length !== 0
        )
      ) {
        const v6 = Data$dMap$dInternal.lookup(Marlowe$dRuntime$dWeb$dTypes.ordTxOutRef)(v3.contract.resource.contractId)($0);
        if (possibleAppTags.tag === "Just") {
          if (v6.tag === "Just") {
            return Data$dMaybe.$Maybe(
              "Just",
              {
                contractId: v6._1.contractId,
                marloweInfo,
                tags: possibleAppTags._1,
                endpoints: v6._1.endpoints,
                _runtime: {contractHeader: v3.contract.resource, transactions: v3.transactions}
              }
            );
          }
          if (v6.tag === "Nothing") {
            return Data$dMaybe.$Maybe(
              "Just",
              {
                contractId: v3.contract.resource.contractId,
                endpoints: v3.contract.links,
                marloweInfo,
                tags: possibleAppTags._1,
                _runtime: {contractHeader: v3.contract.resource, transactions: v3.transactions}
              }
            );
          }
        }
      }
      return Data$dMaybe.Nothing;
    })(updates))
  };
};
const mkWithdrawalWidget = /* #__PURE__ */ liftEffect(/* #__PURE__ */ React$dBasic$dHooks.component("WithdrawalWidget")(v => {
  const $0 = Component$dUseWithdrawal.useWithdrawal({
    wallet: v.wallet,
    network: "preprod",
    txOutRef: {txId: "c5d5e46a159c3caf563929ad7b5915f554cce0883e7790c4a11b20c808581cff", txIx: 2},
    blockfrostProjectId: "preprodD9cONxVqzHYtFEL4RObOZ46y4begqNHc"
  });
  return () => {
    const a = $0();
    return pure1((() => {
      if (a.status.status === "AwaitingWithdrawalTrigger") {
        const $1 = a.status.trigger;
        return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
          children: [React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalbutton$p)({children: ["Withdraw"], className: "btn btn-primary", onClick: v$1 => $1()})]
        });
      }
      if (a.status.status === "WithdrawalFailed") {
        return Contrib$dReactSyntaxHighlighter.yamlSyntaxHighlighter(Data$dArgonaut$dEncode$dClass.encodeJsonJson)()()()(a.status.error)({});
      }
      return Contrib$dReactSyntaxHighlighter.yamlSyntaxHighlighter(Data$dArgonaut$dEncode$dClass.encodeJsonJson)()()()(a.status)({});
    })())();
  };
}));
const debugWallet = /* #__PURE__ */ Data$dMaybe.$Maybe("Just", Eternl);
const autoConnectWallet = walletBrand => onSuccess => Effect$dAff._bind(Effect$dAff._liftEffect(() => {
  const $0 = Web$dHTML.window();
  return Wallet.cardano($0)();
}))(v => {
  if (v.tag === "Nothing") { return Effect$dAff._liftEffect(Effect$dException.throwException(Effect$dException.error("Missing \"cardano\" window attr"))); }
  if (v.tag === "Just") {
    return Effect$dAff._bind(Effect$dAff._bind(Effect$dAff._liftEffect((() => {
      if (walletBrand === "Lace") { return Wallet.lace(v._1); }
      if (walletBrand === "Nami") { return Wallet.nami(v._1); }
      if (walletBrand === "Yoroi") { return Wallet.yoroi(v._1); }
      if (walletBrand === "Eternl") { return Wallet.eternl(v._1); }
      $runtime.fail();
    })()))(Data$dTraversable.traversableMaybe.traverse(Effect$dAff.applicativeAff)(Component$dConnectWallet.walletInfo)))(v1 => {
      if (v1.tag === "Nothing") {
        return Effect$dAff._liftEffect(Effect$dException.throwException(Effect$dException.error((() => {
          if (walletBrand === "Yoroi") { return "Unable to extract wallet Yoroi"; }
          if (walletBrand === "Nami") { return "Unable to extract wallet Nami"; }
          if (walletBrand === "Lace") { return "Unable to extract wallet Lace"; }
          if (walletBrand === "Eternl") { return "Unable to extract wallet Eternl"; }
          $runtime.fail();
        })())));
      }
      if (v1.tag === "Just") {
        const $0 = v1._1;
        return Effect$dAff._bind(Wallet.enable(v1._1.wallet))(v2 => {
          if (v2.tag === "Right") { return Effect$dAff._liftEffect(onSuccess({...$0, wallet: v2._1})); }
          if (v2.tag === "Left") { return Effect$dAff._pure(); }
          $runtime.fail();
        });
      }
      $runtime.fail();
    });
  }
  $runtime.fail();
});
const mkApp = /* #__PURE__ */ bind4(Component$dLandingPage.mkLandingPage)(landingPage => bind4(liftEffect(Component$dMessageHub.mkMessageBox))(messageBox => bind4(liftEffect(Component$dMessageHub.mkMessagePreview))(messagePreview => bind4(asks(v => v.cardanoMultiplatformLib))(cardanoMultiplatformLib => bind4(bind4(Component$dContractList.mkContractList)(contractListComponent => bind4(Component$dConnectWallet.mkConnectWallet)(connectWallet => bind4(App$dPages$dSplittedDeposit.mkSplittedDeposit)(splittedDeposit => bind4(mkWithdrawalWidget)(withdrawalWidget => v => () => (
  {contractListComponent, connectWallet, messageBox, splittedDeposit, withdrawalWidget}
))))))(subcomponents => bind4(asks(v => v.contractStream))(v => bind4(liftEffect(foldMapThrottle(Data$dList.singleton)(1000.0)(v.emitter)))(v1 => bind4(liftEffect(Effect$dNow.now))(initialVersion => bind4(asks(v2 => v2.walletInfoCtx))(walletInfoCtx => bind4(asks(v2 => v2.msgHub))(v2 => liftEffect(React$dBasic$dHooks.component("App")(v3 => {
  const $0 = React$dBasic$dHooks.useState$p(Data$dMaybe.Nothing);
  return () => {
    const a = $0();
    const walletInfoName = a._1.tag === "Just" ? Data$dMaybe.$Maybe("Just", a._1._1.name) : Data$dMaybe.Nothing;
    const a$1 = Utils$dReact$dBasic$dHooks.useStateRef(eqMaybe)(walletInfoName)(a._1)();
    const a$2 = React$dBasic$dHooks.useState$p(Data$dMaybe.Nothing)();
    const $1 = a$2._1;
    const a$3 = Utils$dReact$dBasic$dHooks.useStateRef(eqMaybe1)($1)($1)();
    const $2 = Effect$dAff._makeFiber(Effect$dAff.ffiUtil, v.start);
    React$dBasic$dHooks.useEffect_(
      (v$1, v1$1) => true,
      undefined,
      () => {
        const fiber = $2();
        fiber.run();
        const $3 = Effect$dAff._makeFiber(Effect$dAff.ffiUtil, Effect$dAff.killFiber(Effect$dException.error("Unmounting component"))(fiber));
        return () => {
          const fiber$1 = $3();
          fiber$1.run();
        };
      }
    );
    Utils$dReact$dBasic$dHooks.useLoopAff(eqMaybe)(walletInfoName)(20000.0)(Effect$dAff._bind(Effect$dAff._liftEffect(React$dBasic$dHooks.readRef(a$1)))(pwi => Effect$dAff._bind(Effect$dAff._liftEffect(React$dBasic$dHooks.readRef(a$3)))(pwc => {
      if (pwi.tag === "Nothing") {
        if (pwc.tag === "Nothing") { return Effect$dAff._pure(); }
        if (pwc.tag === "Just") { return Effect$dAff._liftEffect(a$2._2(Data$dMaybe.Nothing)); }
        $runtime.fail();
      }
      if (pwi.tag === "Just") {
        return Effect$dAff._catchError(Effect$dAff._bind(WalletContext.walletContext(cardanoMultiplatformLib)(pwi._1.wallet))(walletContext => Effect$dAff._liftEffect(a$2._2(walletContext))))(v6 => Effect$dAff._bind(traceM("ERROR during wallet context construction"))(() => Effect$dAff._pure()));
      }
      $runtime.fail();
    })))();
    const a$4 = React$dBasic$dHooks.useState$p(false)();
    const a$5 = React$dBasic$dHooks.useState$p(false)();
    const a$6 = Utils$dReact$dBasic$dHooks.useEmitter$p(initialVersion)(k => v1(a$6 => () => {
      const $3 = Effect$dNow.now();
      return k($3)();
    }))();
    const a$7 = Utils$dReact$dBasic$dHooks.useStateRef(Data$dEq.eqNumber)(a$6)(a$6)();
    const a$8 = React$dBasic$dHooks.useState$p(Data$dTuple.$Tuple(a$6, {walletContext: $1, map: Data$dMap$dInternal.Leaf}))();
    const a$9 = Utils$dReact$dBasic$dHooks.useStateRef(Data$dEq.eqNumber)(a$8._1._1)(a$8._1._2)();
    useEffect(Data$dTuple.$Tuple(a$6, $1))((() => {
      const $3 = v.getLiveState;
      return () => {
        const updates = $3();
        const old = React$dBasic$dHooks.readRef(a$9)();
        const newVersion = React$dBasic$dHooks.readRef(a$7)();
        const $$new = updateAppContractInfoMap(old)($1)(updates);
        const $4 = Data$dMap$dInternal.foldableMap.foldl(c => v$1 => 1 + c | 0)(0)(Data$dMap$dInternal.difference(Marlowe$dRuntime$dWeb$dTypes.ordTxOutRef)($$new.map)(old.map));
        const $5 = Data$dMap$dInternal.foldableMap.foldl(c => v$1 => 1 + c | 0)(0)(Data$dMap$dInternal.difference(Marlowe$dRuntime$dWeb$dTypes.ordTxOutRef)(old.map)($$new.map));
        const $6 = v2.add(Component$dTypes.$MessageContent(
          "Info",
          ($5 === 0 ? "Update: " : "Update: " + Data$dShow.showIntImpl($5) + " contracts removed") + ($5 > 0 && $4 > 0 ? ", " : "") + ($4 === 0
            ? ""
            : Data$dShow.showIntImpl($4) + " contracts discovered") + "."
        ));
        if ($5 > 0 || $4 > 0) { $6(); }
        a$8._2(Data$dTuple.$Tuple(newVersion, $$new))();
        return () => {};
      };
    })())();
    React$dBasic$dHooks$dAff.useAff$p(Data$dEq.eqUnit)(v$1 => Data$dMaybe.Nothing)()(Data$dTraversable.traversableMaybe.traverse(Effect$dAff.applicativeAff)(walletBrand => autoConnectWallet(walletBrand)(walletInfo => a._2(Data$dMaybe.$Maybe(
      "Just",
      walletInfo
    ))))(Data$dMaybe.$Maybe("Just", Eternl)))();
    return pure1(a._1.tag === "Nothing"
      ? landingPage({setWalletInfo: x => a._2(Data$dMaybe.$Maybe("Just", x))})
      : React$dBasic.element(React$dBasic.contextProvider(walletInfoCtx))({
          value: Data$dMaybe.applyMaybe.apply(a._1.tag === "Just" ? Data$dMaybe.$Maybe("Just", Data$dTuple.Tuple(a._1._1)) : Data$dMaybe.Nothing)($1),
          children: [
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalnav$p)({
              children: [
                React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                  children: [
                    React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internala$p)({
                      children: [Contrib$dReact$dSvg.img({src: Component$dAssets$dSvgs.marloweLogoUrl})],
                      className: "navbar-brand p-0",
                      href: "#"
                    }),
                    React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                      children: [
                        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalul$p)({
                          children: [
                            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalli$p)({
                              children: [
                                (() => {
                                  if (a._1.tag === "Just") {
                                    return Component$dWidgets.link(defaultsRecord)({
                                      label: React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalspan$p)({
                                        children: [
                                          img({src: a._1._1.icon, alt: a._1._1.name, className: "w-1_2rem me-1"}),
                                          React$dBasic$dDOM$dGenerated.span1({children: [a._1._1.name + " wallet"]})
                                        ],
                                        className: "h5"
                                      }),
                                      extraClassNames: "nav-link",
                                      onClick: a$4._2(true)
                                    });
                                  }
                                  if (a._1.tag === "Nothing") {
                                    return Component$dWidgets.linkWithIcon(defaultsRecord)({
                                      icon: ReactBootstrap$dIcons.wallet2,
                                      label: "Connect Wallet",
                                      extraClassNames: "nav-link",
                                      onClick: a$4._2(true)
                                    });
                                  }
                                  $runtime.fail();
                                })()
                              ],
                              className: "nav-item"
                            })
                          ],
                          className: "navbar-nav gap-2"
                        })
                      ],
                      className: "navbar-collapse justify-content-end text-end"
                    })
                  ],
                  className: "container-fluid"
                })
              ],
              className: "navbar navbar-expand-sm navbar-light bg-light shadow-bottom fixed-top"
            }),
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
              children: [
                React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                  children: [React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({children: [messagePreview(v2)], className: "row"})],
                  className: "container-xl"
                })
              ],
              className: "position-fixed mt-2 position-left-50 transform-translate-x--50 z-index-popover"
            }),
            React$dBasic.element(React$dBasic.contextConsumer(v2.ctx))({
              children: v9 => [
                React$dBasic.element(ReactBootstrap$dOffcanvas._Offcanvas)({
                  children: [React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({children: [messageBox(v2)], className: "p-3 overflow-auto"})],
                  onHide: a$5._2(false),
                  placement: "end",
                  scroll: false,
                  show: a$5._1
                })
              ]
            }),
            (() => {
              const $3 = subcomponents.connectWallet({
                currentlyConnected: a._1,
                onWalletConnect: result => {
                  const $3 = (() => {
                    if (result.tag === "Connected") {
                      const $3 = result._1;
                      const $4 = v2.add(Component$dTypes.$MessageContent("Success", "Connected to " + $3.name));
                      return () => {
                        $4();
                        return a._2(Data$dMaybe.$Maybe("Just", $3))();
                      };
                    }
                    if (result.tag === "ConnectionError") { return () => {}; }
                    if (result.tag === "NoWallets") { return () => {}; }
                    $runtime.fail();
                  })();
                  return () => {
                    $3();
                    return a$4._2(false)();
                  };
                },
                onDismiss: a$4._2(false),
                inModal: true
              });
              if (a$4._1) { return $3; }
              return React$dBasic.empty;
            })(),
            Component$dBodyLayout.component({
              title: "Withdrawal widget",
              description: "Withdrawal widget",
              content: (() => {
                if (a._1.tag === "Just") { return subcomponents.withdrawalWidget(a._1._1); }
                if (a._1.tag === "Nothing") { return "Please connect your wallet to use this widget."; }
                $runtime.fail();
              })()
            })
          ]
        }))();
  };
}))))))))))));
export {
  $WalletBrand,
  AppContractInfoMap,
  Eternl,
  Lace,
  Nami,
  Yoroi,
  asks,
  autoConnectWallet,
  bind4,
  debugWallet,
  defaultsRecord,
  eqMaybe,
  eqMaybe1,
  foldMapThrottle,
  img,
  liftEffect,
  mkApp,
  mkWithdrawalWidget,
  policyIdsStr,
  pure1,
  showWalletBrand,
  traceM,
  updateAppContractInfoMap,
  useEffect
};
