import * as $runtime from "../runtime.js";
import * as Component$dTypes from "../Component.Types/index.js";
import * as Component$dWidgets from "../Component.Widgets/index.js";
import * as Component$dWidgets$dForm from "../Component.Widgets.Form/index.js";
import * as Contrib$dReact$dSvg from "../Contrib.React.Svg/index.js";
import * as Control$dMonad$dReader$dTrans from "../Control.Monad.Reader.Trans/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Debug from "../Debug/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dClass from "../Effect.Class/index.js";
import * as React$dBasic from "../React.Basic/index.js";
import * as React$dBasic$dDOM$dGenerated from "../React.Basic.DOM.Generated/index.js";
import * as React$dBasic$dDOM$dSimplified$dGenerated from "../React.Basic.DOM.Simplified.Generated/index.js";
import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as ReactBootstrap$dModal from "../ReactBootstrap.Modal/index.js";
import * as Record$dUnsafe$dUnion from "../Record.Unsafe.Union/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Wallet from "../Wallet/index.js";
import * as Web$dHTML from "../Web.HTML/index.js";
const $Response = (tag, _1) => ({tag, _1});
const liftEffect1 = /* #__PURE__ */ (() => Control$dMonad$dReader$dTrans.monadEffectReader(Effect$dClass.monadEffectEffect).liftEffect)();
const traceM = /* #__PURE__ */ Debug.traceM()(Effect$dAff.monadAff);
const pure2 = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const img = /* #__PURE__ */ React$dBasic.element(React$dBasic$dDOM$dGenerated._img$p);
const button = /* #__PURE__ */ React$dBasic.element(React$dBasic$dDOM$dGenerated._button$p);
const NoWallets = /* #__PURE__ */ $Response("NoWallets");
const ConnectionError = value0 => $Response("ConnectionError", value0);
const Connected = value0 => $Response("Connected", value0);
const walletInfo = wallet => Effect$dAff._map(Component$dTypes.WalletInfo)(Effect$dAff.applyAff.apply(Effect$dAff.applyAff.apply(Effect$dAff.applyAff.apply(Effect$dAff._map(v => v1 => v2 => v3 => (
  {name: v, icon: v1, isEnabled: v2, apiVersion: v3, wallet}
))(Effect$dAff._liftEffect(Wallet._Wallet.name(wallet))))(Effect$dAff._liftEffect(Wallet._Wallet.icon(wallet))))(Wallet.isEnabled_()(wallet)))(Effect$dAff._liftEffect(Wallet._Wallet.apiVersion(wallet))));
const mkConnectWallet = /* #__PURE__ */ (() => Control$dMonad$dReader$dTrans.bindReaderT(Effect.bindEffect).bind(liftEffect1(Component$dWidgets$dForm.mkSingleChoiceField))(singleChoiceField => liftEffect1(React$dBasic$dHooks.component("Wallet")(v => {
  const $0 = v.currentlyConnected;
  const $1 = v.inModal;
  const $2 = v.onDismiss;
  const $3 = React$dBasic$dHooks.useState$p(Data$dMaybe.Nothing);
  return () => {
    const a = $3();
    const a$1 = React$dBasic$dHooks.useState$p(Data$dMaybe.Nothing)();
    React$dBasic$dHooks.useEffect_(
      (v$1, v1) => true,
      undefined,
      () => {
        const $4 = Web$dHTML.window();
        const v3 = Wallet.cardano($4)();
        if (v3.tag === "Nothing") {

        } else if (v3.tag === "Just") {
          const $5 = v3._1;
          const fiber = Effect$dAff._makeFiber(
            Effect$dAff.ffiUtil,
            Effect$dAff._bind(Effect$dAff._bind(Effect$dAff._liftEffect(Wallet.eternl($5)))(Data$dTraversable.traversableMaybe.traverse(Effect$dAff.applicativeAff)(walletInfo)))(eternl => Effect$dAff._bind(Effect$dAff._bind(Effect$dAff._liftEffect(Wallet.gerowallet($5)))(Data$dTraversable.traversableMaybe.traverse(Effect$dAff.applicativeAff)(walletInfo)))(gerowallet => Effect$dAff._bind(Effect$dAff._bind(Effect$dAff._liftEffect(Wallet.lace($5)))(Data$dTraversable.traversableMaybe.traverse(Effect$dAff.applicativeAff)(walletInfo)))(lace => Effect$dAff._bind(Effect$dAff._bind(Effect$dAff._liftEffect(Wallet.nami($5)))(Data$dTraversable.traversableMaybe.traverse(Effect$dAff.applicativeAff)(walletInfo)))(nami => Effect$dAff._bind(Effect$dAff._bind(Effect$dAff._liftEffect(Wallet.yoroi($5)))(Data$dTraversable.traversableMaybe.traverse(Effect$dAff.applicativeAff)(walletInfo)))(yoroi => {
              const $6 = Data$dArray.mapMaybe(x => x)([lace, nami, gerowallet, yoroi, eternl]);
              if ($6.length >= 1) {
                return Effect$dAff._liftEffect((() => {
                  const $7 = a._2(Data$dMaybe.$Maybe("Just", $6));
                  return () => {
                    $7();
                    return a$1._2((() => {
                      if ($0.tag === "Just") {
                        const $8 = $0._1.name;
                        const $9 = Data$dArray.findIndex(v6 => v6.name === $8)($6);
                        if ($9.tag === "Just") { return Data$dMaybe.$Maybe("Just", $6[$9._1]); }
                      }
                      return Data$dMaybe.Nothing;
                    })())();
                  };
                })());
              }
              return Effect$dAff._liftEffect(v.onWalletConnect(NoWallets));
            })))))
          )();
          fiber.run();
        } else {
          $runtime.fail();
        }
        return () => {};
      }
    );
    const onSubmit = (() => {
      if (a$1._1.tag === "Just") {
        if ($0.tag === "Just" && a$1._1._1.name === $0._1.name) { return $2; }
        const $4 = Effect$dAff._makeFiber(
          Effect$dAff.ffiUtil,
          Effect$dAff._bind(Effect$dAff._catchError(Effect$dAff._map(Data$dMaybe.Just)(Wallet.enable_()(a$1._1._1.wallet)))(error => Effect$dAff._bind(Effect$dAff._liftEffect(v.onWalletConnect($Response(
            "ConnectionError",
            error
          ))))(() => Effect$dAff._pure(Data$dMaybe.Nothing))))(possibleApi => {
            if (possibleApi.tag === "Just") { return Effect$dAff._liftEffect(v.onWalletConnect($Response("Connected", {...a$1._1._1, wallet: possibleApi._1}))); }
            if (possibleApi.tag === "Nothing") { return Effect$dAff._bind(traceM("Error connecting wallet - no api returned"))(() => Effect$dAff._liftEffect($2)); }
            $runtime.fail();
          })
        );
        return () => {
          const fiber = $4();
          fiber.run();
        };
      }
      if (a$1._1.tag === "Nothing") { return $2; }
      $runtime.fail();
    })();
    return pure2((() => {
      if (a._1.tag === "Nothing") {
        if ($1) {
          return React$dBasic.element(ReactBootstrap$dModal._Modal)({
            children: [
              React$dBasic.element(ReactBootstrap$dModal._ModalHeader)({children: ["Choose a wallet"]}),
              React$dBasic.element(ReactBootstrap$dModal._ModalBody)({
                children: [
                  React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                    children: [Contrib$dReact$dSvg.loadingSpinnerLogo({})],
                    className: "d-flex justify-content-center"
                  })
                ]
              }),
              React$dBasic.element(ReactBootstrap$dModal._ModalFooter)({children: [React$dBasic.empty]})
            ],
            onHide: $2,
            show: true
          });
        }
        return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
          children: [
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: ["Choose a wallet"], className: "h3 font-weight-bold"}),
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalspan$p)({children: ["Please select a wallet to deploy a contract"], className: "h5 text-muted"}),
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
              children: [Contrib$dReact$dSvg.loadingSpinnerLogo({})],
              className: "d-flex justify-content-center"
            }),
            React$dBasic.empty
          ],
          className: "card p-5 m-5"
        });
      }
      if (a._1.tag === "Just") {
        if ($1) {
          return React$dBasic.element(ReactBootstrap$dModal._Modal)({
            children: [
              React$dBasic.element(ReactBootstrap$dModal._ModalHeader)({children: ["Choose a wallet"]}),
              React$dBasic.element(ReactBootstrap$dModal._ModalBody)({
                children: [
                  singleChoiceField({
                    initialValue: a$1._1.tag === "Just" ? a$1._1._1.name : "",
                    onValueChange: walletName => a$1._2((() => {
                      const $4 = Data$dArray.findIndex(v4 => v4.name === walletName)(a._1._1);
                      if ($4.tag === "Just") { return Data$dMaybe.$Maybe("Just", a._1._1[$4._1]); }
                      return Data$dMaybe.Nothing;
                    })()),
                    type: Component$dWidgets$dForm.$SingleChoiceField(
                      "RadioButtonField",
                      Data$dFunctor.arrayMap(v4 => Data$dTuple.$Tuple(
                        v4.name,
                        Data$dTuple.$Tuple(
                          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalspan$p)({
                            children: [img({src: v4.icon, alt: v4.name, className: "w-2rem me-2"}), React$dBasic$dDOM$dGenerated.span1({children: [v4.name]})],
                            className: "h5"
                          }),
                          false
                        )
                      ))(a._1._1)
                    )
                  })
                ]
              }),
              React$dBasic.element(ReactBootstrap$dModal._ModalFooter)({
                children: [
                  React$dBasic.fragment($1
                    ? [
                        Component$dWidgets.link({defaults: b => a$2 => Record$dUnsafe$dUnion.unsafeUnionFn(a$2, b)})({label: "Cancel", onClick: $2, showBorders: true}),
                        button({
                          type: "button",
                          className: "btn btn-primary",
                          onClick: v$1 => onSubmit(),
                          disabled: a$1._1.tag === "Just" ? $0.tag === "Just" && a$1._1._1.name === $0._1.name : $0.tag !== "Just",
                          children: ["Connect wallet"]
                        })
                      ]
                    : [
                        button({
                          type: "button",
                          className: "btn btn-primary mt-3",
                          onClick: v$1 => onSubmit(),
                          disabled: a$1._1.tag === "Just" ? $0.tag === "Just" && a$1._1._1.name === $0._1.name : $0.tag !== "Just",
                          children: [React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: ["Connect wallet"], className: "h4 font-weight-bold"})]
                        })
                      ])
                ]
              })
            ],
            onHide: $2,
            show: true
          });
        }
        return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
          children: [
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: ["Choose a wallet"], className: "h3 font-weight-bold"}),
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalspan$p)({children: ["Please select a wallet to deploy a contract"], className: "h5 text-muted"}),
            singleChoiceField({
              initialValue: a$1._1.tag === "Just" ? a$1._1._1.name : "",
              onValueChange: walletName => a$1._2((() => {
                const $4 = Data$dArray.findIndex(v4 => v4.name === walletName)(a._1._1);
                if ($4.tag === "Just") { return Data$dMaybe.$Maybe("Just", a._1._1[$4._1]); }
                return Data$dMaybe.Nothing;
              })()),
              type: Component$dWidgets$dForm.$SingleChoiceField(
                "RadioButtonField",
                Data$dFunctor.arrayMap(v4 => Data$dTuple.$Tuple(
                  v4.name,
                  Data$dTuple.$Tuple(
                    React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalspan$p)({
                      children: [img({src: v4.icon, alt: v4.name, className: "w-2rem me-2"}), React$dBasic$dDOM$dGenerated.span1({children: [v4.name]})],
                      className: "h5"
                    }),
                    false
                  )
                ))(a._1._1)
              )
            }),
            React$dBasic.fragment($1
              ? [
                  Component$dWidgets.link({defaults: b => a$2 => Record$dUnsafe$dUnion.unsafeUnionFn(a$2, b)})({label: "Cancel", onClick: $2, showBorders: true}),
                  button({
                    type: "button",
                    className: "btn btn-primary",
                    onClick: v$1 => onSubmit(),
                    disabled: a$1._1.tag === "Just" ? $0.tag === "Just" && a$1._1._1.name === $0._1.name : $0.tag !== "Just",
                    children: ["Connect wallet"]
                  })
                ]
              : [
                  button({
                    type: "button",
                    className: "btn btn-primary mt-3",
                    onClick: v$1 => onSubmit(),
                    disabled: a$1._1.tag === "Just" ? $0.tag === "Just" && a$1._1._1.name === $0._1.name : $0.tag !== "Just",
                    children: [React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: ["Connect wallet"], className: "h4 font-weight-bold"})]
                  })
                ])
          ],
          className: "card p-5 m-5"
        });
      }
      $runtime.fail();
    })())();
  };
}))))();
export {$Response, Connected, ConnectionError, NoWallets, button, img, liftEffect1, mkConnectWallet, pure2, traceM, walletInfo};
