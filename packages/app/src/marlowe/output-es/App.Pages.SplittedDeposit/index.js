import * as $runtime from "../runtime.js";
import * as Component$dBodyLayout from "../Component.BodyLayout/index.js";
import * as Component$dContractDetails from "../Component.ContractDetails/index.js";
import * as Component$dSplittedDeposit$dCreateContract from "../Component.SplittedDeposit.CreateContract/index.js";
import * as Component$dTypes from "../Component.Types/index.js";
import * as Component$dTypes$dContractInfo from "../Component.Types.ContractInfo/index.js";
import * as Component$dWidget$dTable from "../Component.Widget.Table/index.js";
import * as Component$dWidgets from "../Component.Widgets/index.js";
import * as Contrib$dData$dJSDate from "../Contrib.Data.JSDate/index.js";
import * as Contrib$dReact$dSvg from "../Contrib.React.Svg/index.js";
import * as Control$dMonad$dReader$dTrans from "../Control.Monad.Reader.Trans/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dBigInt from "../Data.BigInt/index.js";
import * as Data$dDate from "../Data.Date/index.js";
import * as Data$dDate$dComponent from "../Data.Date.Component/index.js";
import * as Data$dDateTime from "../Data.DateTime/index.js";
import * as Data$dDateTime$dInstant from "../Data.DateTime.Instant/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dJSDate from "../Data.JSDate/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTime from "../Data.Time/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dClass from "../Effect.Class/index.js";
import * as Effect$dNow from "../Effect.Now/index.js";
import * as Language$dMarlowe$dCore$dV1$dSemantics$dTypes from "../Language.Marlowe.Core.V1.Semantics.Types/index.js";
import * as Marlowe$dRuntime$dWeb$dTypes from "../Marlowe.Runtime.Web.Types/index.js";
import * as React$dBasic from "../React.Basic/index.js";
import * as React$dBasic$dDOM$dGenerated from "../React.Basic.DOM.Generated/index.js";
import * as React$dBasic$dDOM$dSimplified$dGenerated from "../React.Basic.DOM.Simplified.Generated/index.js";
import * as React$dBasic$dDOM$dSimplified$dToJSX from "../React.Basic.DOM.Simplified.ToJSX/index.js";
import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as ReactBootstrap$dOverlayTrigger from "../ReactBootstrap.OverlayTrigger/index.js";
import * as ReactBootstrap$dTable from "../ReactBootstrap.Table/index.js";
import * as ReactBootstrap$dTooltip from "../ReactBootstrap.Tooltip/index.js";
import * as Record$dUnsafe$dUnion from "../Record.Unsafe.Union/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Utils$dReact$dBasic$dHooks from "../Utils.React.Basic.Hooks/index.js";
const $ModalAction = (tag, _1) => ({tag, _1});
const $OrderBy = tag => tag;
const eq1 = x => y => {
  if (x.tag === "Nothing") { return y.tag === "Nothing"; }
  return x.tag === "Just" && y.tag === "Just" && Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqContract.eq(x._1)(y._1);
};
const eq4 = x => y => {
  if (x.tag === "Nothing") { return y.tag === "Nothing"; }
  return x.tag === "Just" && y.tag === "Just" && Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqState.eq(x._1)(y._1);
};
const eq5 = /* #__PURE__ */ (() => Data$dEq.eqArrayImpl(Marlowe$dRuntime$dWeb$dTypes.eqTransactionEndpoint.eq))();
const bind1 = /* #__PURE__ */ (() => Control$dMonad$dReader$dTrans.bindReaderT(Effect.bindEffect).bind)();
const asks = /* #__PURE__ */ (() => {
  const monadReaderT1 = Control$dMonad$dReader$dTrans.monadReaderT(Effect.monadEffect);
  return f => monadReaderT1.Bind1().Apply0().Functor0().map(f)(Effect.pureE);
})();
const liftEffect = /* #__PURE__ */ (() => Control$dMonad$dReader$dTrans.monadEffectReader(Effect$dClass.monadEffectEffect).liftEffect)();
const pure1 = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const fold = /* #__PURE__ */ (() => Data$dFoldable.foldableArray.foldMap(Data$dMonoid.monoidString)(Data$dFoldable.identity))();
const $$null = /* #__PURE__ */ Data$dFoldable.foldrArray(v => v1 => false)(true);
const br = /* #__PURE__ */ React$dBasic.element(React$dBasic$dDOM$dGenerated._br$p);
const intercalate = sep => xs => Data$dFoldable.foldlArray(v => v1 => {
  if (v.init) { return {init: false, acc: v1}; }
  return {init: false, acc: v.acc + sep + v1};
})({init: true, acc: ""})(xs).acc;
const OrderByCreationDate = /* #__PURE__ */ $OrderBy("OrderByCreationDate");
const OrderByLastUpdateDate = /* #__PURE__ */ $OrderBy("OrderByLastUpdateDate");
const NewContract = value0 => $ModalAction("NewContract", value0);
const ContractDetails = value0 => $ModalAction("ContractDetails", value0);
const eqOrderBy = {
  eq: x => y => {
    if (x === "OrderByCreationDate") { return y === "OrderByCreationDate"; }
    return x === "OrderByLastUpdateDate" && y === "OrderByLastUpdateDate";
  }
};
const eqModalAction = {
  eq: x => y => {
    if (x.tag === "NewContract") { return y.tag === "NewContract" && x._1 === y._1; }
    return x.tag === "ContractDetails" && y.tag === "ContractDetails" && eq1(x._1.contract)(y._1.contract) && Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqContract.eq(x._1.initialContract)(y._1.initialContract) && Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqState.eq(x._1.initialState)(y._1.initialState) && eq4(x._1.state)(y._1.state) && eq5(x._1.transactionEndpoints)(y._1.transactionEndpoints);
  }
};
const useStateRef$p = /* #__PURE__ */ Utils$dReact$dBasic$dHooks.useStateRef$p({
  eq: x => y => {
    if (x.tag === "Nothing") { return y.tag === "Nothing"; }
    return x.tag === "Just" && y.tag === "Just" && eqModalAction.eq(x._1)(y._1);
  }
});
const instantFromMillis = ms => {
  if (ms >= -8639977881600000.0 && ms <= 8639977881599999.0) { return Data$dMaybe.$Maybe("Just", ms); }
  return Data$dMaybe.Nothing;
};
const slotToTimestamp = v => v1 => {
  const $0 = Data$dBigInt.toNumber(Data$dBigInt.biAdd(v.slotZeroTime)(Data$dBigInt.biMul(Data$dBigInt.fromInt(v1))(v.slotLength)));
  if ($0 >= -8639977881600000.0 && $0 <= 8639977881599999.0) { return Data$dDateTime$dInstant.toDateTime($0); }
  return Data$dDateTime.$DateTime(Data$dDate.$$$Date(-271820, Data$dDate$dComponent.January, 1), Data$dTime.$Time(0, 0, 0, 0));
};
const mkSplittedDeposit = /* #__PURE__ */ bind1(/* #__PURE__ */ asks(v => v.msgHub))(v => bind1(Component$dContractDetails.mkComponent)(contractDetails => bind1(Component$dSplittedDeposit$dCreateContract.mkComponent)(createContractComponent => bind1(asks(v1 => v1.walletInfoCtx))(walletInfoCtx => bind1(asks(v1 => v1.slotting))(slotting => liftEffect(React$dBasic$dHooks.component("SplittedDeposit")(v1 => {
  const $0 = v1.possibleContracts;
  const $1 = Utils$dReact$dBasic$dHooks.useMaybeValue(Data$dMaybe.Nothing);
  return () => {
    const a = $1();
    const a$1 = useStateRef$p(a._1)();
    const a$2 = React$dBasic$dHooks.useContext_(walletInfoCtx);
    const a$3 = (() => {
      if (a$2.tag === "Nothing") { return pure1(Data$dTuple.$Tuple(Data$dMaybe.Nothing, Data$dMaybe.Nothing))(); }
      if (a$2.tag === "Just") { return pure1(Data$dTuple.$Tuple(Data$dMaybe.$Maybe("Just", a$2._1._1), Data$dMaybe.$Maybe("Just", a$2._1._2)))(); }
      $runtime.fail();
    })();
    const $2 = a$3._1;
    const a$4 = React$dBasic$dHooks.useState_(($3, $4) => Data$dTuple.$Tuple($3, $4), {orderBy: OrderByCreationDate, orderAsc: false});
    const $3 = a$4._1;
    const $4 = a$4._2;
    return pure1((() => {
      const $5 = () => Component$dBodyLayout.component({
        title: "Splitted deposit",
        description: "This app allows you to split simple but too heavy deposit / payout scenario so Marlowe can handle it.",
        content: React$dBasic.fragment([
          (() => {
            const disabled = (() => {
              if ($2.tag === "Nothing") { return true; }
              if ($2.tag === "Just") { return false; }
              $runtime.fail();
            })();
            return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
              children: [
                React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                  children: (() => {
                    const $5 = React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                      children: [
                        Component$dWidgets.buttonWithIcon({defaults: b => a$5 => Record$dUnsafe$dUnion.unsafeUnionFn(a$5, b)})({
                          icon: React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalspan$p)({children: [], className: "bi-file-earmark-plus h5 me-1"}),
                          label: "Create Contract",
                          extraClassNames: "font-weight-bold me-2",
                          disabled,
                          onClick: () => {
                            const now = Effect$dNow.now();
                            const v5 = React$dBasic$dHooks.readRef(a$1)();
                            if (v5.tag === "Nothing") { return a._2._1($ModalAction("NewContract", now))(); }
                          }
                        })
                      ],
                      className: "text-end"
                    });
                    return [
                      disabled
                        ? React$dBasic.element(ReactBootstrap$dOverlayTrigger._OverlayTrigger)({
                            children: [$5],
                            overlay: React$dBasic.element(ReactBootstrap$dTooltip._Tooltip)({children: ["Connect to a wallet to add a contract"], placement: "left"}),
                            placement: "bottom"
                          })
                        : $5
                    ];
                  })(),
                  className: "col-12"
                })
              ],
              className: "row p-4"
            });
          })(),
          (() => {
            const possibleContracts$p = (() => {
              if ($0.tag === "Just") {
                const sortedContracts = (() => {
                  if ($3.orderBy === "OrderByCreationDate") {
                    return Data$dArray.sortBy(x => y => Data$dOrd.ordInt.compare(x._runtime.contractHeader.block.tag === "Just"
                      ? x._runtime.contractHeader.block._1.blockNo
                      : 19058430)(y._runtime.contractHeader.block.tag === "Just" ? y._runtime.contractHeader.block._1.blockNo : 19058430))($0._1);
                  }
                  if ($3.orderBy === "OrderByLastUpdateDate") {
                    return Data$dArray.sortBy(x => y => Data$dOrd.ordInt.compare((() => {
                      const $5 = Component$dTypes$dContractInfo.updatedAt(x);
                      if ($5.tag === "Just") { return $5._1.blockNo; }
                      return 19058430;
                    })())((() => {
                      const $5 = Component$dTypes$dContractInfo.updatedAt(y);
                      if ($5.tag === "Just") { return $5._1.blockNo; }
                      return 19058430;
                    })()))($0._1);
                  }
                  $runtime.fail();
                })();
                return Data$dMaybe.$Maybe("Just", $3.orderAsc ? sortedContracts : Data$dArray.reverse(sortedContracts));
              }
              if ($0.tag === "Nothing") { return Data$dMaybe.Nothing; }
              $runtime.fail();
            })();
            if (possibleContracts$p.tag === "Just") {
              if (possibleContracts$p._1.length === 0) { return "No contracts yet"; }
              if (!$$null(possibleContracts$p._1)) {
                return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                  children: [
                    React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                      children: [
                        React$dBasic.element(ReactBootstrap$dTable._Table)({
                          children: [
                            (() => {
                              const orderingTh = Component$dWidget$dTable.orderingHeader(eqOrderBy)($3)($4);
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
                              children: Data$dFunctor.arrayMap(v5 => {
                                const tdCentered = React$dBasic$dDOM$dSimplified$dGenerated.td()(React$dBasic$dDOM$dSimplified$dToJSX.toJSXArrayJSX)()()({className: "text-center"});
                                const tdSlotInfo = v6 => {
                                  if (v6.tag === "Nothing") { return tdCentered([]); }
                                  if (v6.tag === "Just") {
                                    return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaltd$p)({
                                      children: [
                                        (() => {
                                          const jsDate = Data$dJSDate.fromDateTime(slotToTimestamp(slotting)(v6._1));
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
                                    tdSlotInfo(v5._runtime.contractHeader.block.tag === "Just"
                                      ? Data$dMaybe.$Maybe("Just", v5._runtime.contractHeader.block._1.slotNo)
                                      : Data$dMaybe.Nothing),
                                    tdSlotInfo((() => {
                                      const $5 = Component$dTypes$dContractInfo.updatedAt(v5);
                                      if ($5.tag === "Just") { return Data$dMaybe.$Maybe("Just", $5._1.slotNo); }
                                      return Data$dMaybe.Nothing;
                                    })()),
                                    React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaltd$p)({
                                      children: [
                                        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalspan$p)({
                                          children: [
                                            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internala$p)({
                                              children: [v5._runtime.contractHeader.contractId.txId + "#" + Data$dShow.showIntImpl(v5._runtime.contractHeader.contractId.txIx)],
                                              className: "cursor-pointer text-decoration-none text-reset text-decoration-underline-hover truncate-text w-16rem d-inline-block",
                                              onClick: (() => {
                                                const $5 = v5.marloweInfo.tag === "Just"
                                                  ? a._2._1($ModalAction(
                                                      "ContractDetails",
                                                      {
                                                        contract: v5.marloweInfo._1.currentContract,
                                                        state: v5.marloweInfo._1.state,
                                                        initialState: v5.marloweInfo._1.initialState,
                                                        initialContract: v5.marloweInfo._1.initialContract,
                                                        transactionEndpoints: Data$dFunctor.arrayMap(v6 => v6._2)(v5._runtime.transactions)
                                                      }
                                                    ))
                                                  : () => {};
                                                return v$1 => $5();
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
                                    tdCentered([intercalate(", ")(v5.tags.extraTags)]),
                                    tdCentered([])
                                  ],
                                  className: "align-middle"
                                });
                              })(possibleContracts$p._1)
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
                });
              }
            }
            return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
              children: [Contrib$dReact$dSvg.loadingSpinnerLogo({})],
              className: "col-12 position-relative d-flex justify-content-center align-items-center blur-bg z-index-sticky"
            });
          })()
        ])
      });
      if (a._1.tag === "Just") {
        if ($2.tag === "Just" && a$3._2.tag === "Just" && a._1._1.tag === "NewContract") {
          return createContractComponent({
            walletInfo: $2._1,
            walletContext: a$3._2._1,
            onDismiss: a._2._2,
            onSuccess: v5 => {
              const $6 = v.add(Component$dTypes.$MessageContent(
                "Success",
                fold([
                  "Successfully created and submitted the contract. Contract transaction awaits to be included in the blockchain.",
                  "Contract status should change to 'Confirmed' at that point."
                ])
              ));
              return () => {
                $6();
                return a._2._2();
              };
            },
            now: a._1._1._1
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
      }
      return $5();
    })())();
  };
})))))));
const actionIconSizing = " h4";
export {
  $ModalAction,
  $OrderBy,
  ContractDetails,
  NewContract,
  OrderByCreationDate,
  OrderByLastUpdateDate,
  actionIconSizing,
  asks,
  bind1,
  br,
  eq1,
  eq4,
  eq5,
  eqModalAction,
  eqOrderBy,
  fold,
  instantFromMillis,
  intercalate,
  liftEffect,
  mkSplittedDeposit,
  $$null as null,
  pure1,
  slotToTimestamp,
  useStateRef$p
};
