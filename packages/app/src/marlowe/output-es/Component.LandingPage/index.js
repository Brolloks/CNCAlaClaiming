import * as $runtime from "../runtime.js";
import * as Component$dConnectWallet from "../Component.ConnectWallet/index.js";
import * as Contrib$dReact$dSvg from "../Contrib.React.Svg/index.js";
import * as Control$dMonad$dReader$dTrans from "../Control.Monad.Reader.Trans/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dClass from "../Effect.Class/index.js";
import * as JS$dUnsafe$dStringify from "../JS.Unsafe.Stringify/index.js";
import * as React$dBasic from "../React.Basic/index.js";
import * as React$dBasic$dDOM$dSimplified$dGenerated from "../React.Basic.DOM.Simplified.Generated/index.js";
import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
const $ConnectionErrors = (tag, _1) => ({tag, _1});
const liftEffect = /* #__PURE__ */ (() => Control$dMonad$dReader$dTrans.monadEffectReader(Effect$dClass.monadEffectEffect).liftEffect)();
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const NoWallets = /* #__PURE__ */ $ConnectionErrors("NoWallets");
const ConnectionError = value0 => $ConnectionErrors("ConnectionError", value0);
const AppContractInfoMap = x => x;
const marloweLogoUrl = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjQyIiB2aWV3Qm94PSIwIDAgMTYwIDQyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbG9nbz0idHJ1ZSI+PGcgY2xpcC1wYXRoPSJ1cmwoI2xvZ29fX2EpIj48cGF0aCBkPSJNNjkuNzEgMjIuMzUydjkuMTJoLTIuOXYtOC43MzRjMC0yLjgzNi0xLjg2OS0zLjc3Mi0zLjQ0OS0zLjc3Mi0xLjU4IDAtMy40MTcuOTM2LTMuNDE3IDMuNzcydjguNzM1aC0yLjkwMXYtOC43MzVjMC0yLjgzNi0xLjg2OS0zLjc3Mi0zLjQ4LTMuNzcyLTEuNjEgMC0zLjQxNy45MzYtMy40MTcgMy43NzJ2OC43MzVoLTIuOTAxVjE2LjY0NmgyLjkwMXYxLjc3MmMxLjA2My0xLjM4NyAyLjY3NC0yIDQuMjU0LTIgMS44NjggMCAzLjgwMy43MSA0LjggMi42MTMgMS4xMy0xLjkzNSAzLjE2LTIuNjEzIDQuOTk4LTIuNjEzIDIuNzA4IDAgNS41MSAxLjQ4NCA1LjUxIDUuOTNsLjAwMy4wMDNaTTg3LjQ2OSAxNi42NXYxNC44MjZoLTIuOTAxdi0yLjI4OWMtMS4wOTUgMS41OC0yLjgwNSAyLjU0Ny01LjA5NCAyLjU0Ny00LjE4OCAwLTcuMTg1LTMuMjU2LTcuMTg1LTcuNjcxIDAtNC40MTUgMi45OTctNy42NCA3LjE4NS03LjY0IDIuMjg5IDAgMy45OTYuOTY3IDUuMDk0IDIuNTEydi0yLjI4OGgyLjkwMXYuMDAzWm0tMi45MDEgNy40MTNjMC0yLjg2Ny0xLjg2OS00Ljg5Ny00LjcwNS00Ljg5Ny0yLjgzNSAwLTQuNzM5IDIuMDMtNC43MzkgNC44OTcgMCAyLjg2NyAxLjg3IDQuOTMyIDQuNzQgNC45MzJzNC43MDQtMi4wOTYgNC43MDQtNC45MzJaTTk4LjY1IDE2LjQyM3YyLjc0Yy0yIC4wMy01LjIyLjktNS4yMiA0LjcwNHY3LjYwNWgtMi45MDJWMTYuNjQ2aDIuOTAydjIuNzRjMS4xNi0yLjAzIDMuMTU5LTIuOTMyIDUuMjItMi45Njd2LjAwNFpNMTAwLjc0NiAzMS40NzZWMTAuNTI0aDIuOTMybC0uMDMxIDIwLjk0OWgtMi45MDF2LjAwM1pNMTA1Ljk1MyAyNC4wNjNjMC00LjQ4IDMuMTI1LTcuNzAyIDcuNjA2LTcuNzAyczcuNTQgMy4yMjQgNy41NCA3LjcwMmMwIDQuNDc3LTMuMDk0IDcuNzAyLTcuNTQgNy43MDJzLTcuNjA2LTMuMjg3LTcuNjA2LTcuNzAyWm0xMi4yOCAwYzAtMi44MzYtMS44NjktNC44OTctNC42NzQtNC44OTctMi44MDUgMC00LjcwNSAyLjA2MS00LjcwNSA0Ljg5NyAwIDIuODM2IDEuODY5IDQuOTMyIDQuNzA1IDQuOTMyIDIuODM2IDAgNC42NzQtMi4xMjcgNC42NzQtNC45MzJaTTE0NC4yODEgMTYuNjVsLTQuOTMxIDE0LjgyNmgtMi44NjdsLTMuNDgtMTAuMjQ5LTMuNTEzIDEwLjI0OWgtMi44NjdsLTQuODY2LTE0LjgyNmgzLjAyOGwzLjQ0OCAxMC43MzQgMy43MzgtMTAuNzM0aDIuMTI3bDMuNjc1IDEwLjczNCAzLjQ4LTEwLjczNGgzLjAyOFpNMTU5LjI0NSAyNC4wNjN2LjgzNmgtMTEuNjY3Yy4yODkgMi42NDMgMi4xNTggNC4zNSA0LjczOSA0LjM1IDIuMTI3IDAgMy40NzktLjk2NyA0LjE4OC0ybDIuMDMxIDEuNDVjLTEuMjkxIDEuODY4LTMuNTE0IDMuMDYzLTYuMjE5IDMuMDYzLTQuNTEyIDAtNy41NC0zLjI4Ny03LjU0LTcuNzAzIDAtNC40MTUgMi45MDEtNy42NyA3LjM0Ny03LjY3IDQuNDQ3IDAgNy4xMjQgMy4yNTUgNy4xMjQgNy42N2wtLjAwMy4wMDRaTTE0Ny41NzggMjNoOC45NThjLS4zNTQtMi40ODItMS45MzQtNC4yODktNC40MTUtNC4yODlzLTQuMTg4IDEuNzA3LTQuNTQzIDQuMjg5WiIgZmlsbD0idmFyKC0tdGV4dC1jb2xvciwjMUMxQzFDKSI+PC9wYXRoPjxwYXRoIGQ9Ik0yMS4yMTcgMS43NDggMTguMTg1IDAgMCAxMC41djIxbC42OTkuNDAzIDIuMzMzIDEuMzQ1TDE4LjE4NSA0Mmw2LjA2NC0zLjV2LTIxbC0xMi4xMjUtNy0zLjAzMiAxLjc0OCAxMi4xMjUgN3YxNy41TDE4LjE4NSAzOC41IDMuMDMyIDI5Ljc0OHYtMTcuNUwxOC4xODUgMy41bDE1LjE1NiA4Ljc0OHYyMWwzLjAzMi0xLjc0OHYtMjFMMjEuMjE3IDEuNzQ4WiIgZmlsbD0iIzUxMUNGNyI+PC9wYXRoPjxwYXRoIGQ9Im0xNS4xNTYgOC43NDggMTIuMTIxIDd2MjFMMzAuMzEgMzVWMTRMMTguMTg1IDdsLTMuMDI5IDEuNzQ4WiIgZmlsbD0iIzUxMUNGNyI+PC9wYXRoPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImxvZ29fX2EiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMTU5LjI0NXY0MkgweiI+PC9wYXRoPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==";
const mkLandingPage = /* #__PURE__ */ (() => Control$dMonad$dReader$dTrans.bindReaderT(Effect.bindEffect).bind(Component$dConnectWallet.mkConnectWallet)(connectWallet => liftEffect(React$dBasic$dHooks.component("LandingPage")(v => {
  const $0 = React$dBasic$dHooks.useState$p(Data$dMaybe.Nothing);
  return () => {
    const a = $0();
    return pure(React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
      children: [
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalnav$p)({
          children: [
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
              children: [
                React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internala$p)({
                  children: [Contrib$dReact$dSvg.img({src: marloweLogoUrl})],
                  className: "navbar-brand",
                  href: "#"
                })
              ],
              className: "container-fluid"
            })
          ],
          className: "navbar navbar-expand-sm navbar-light bg-light shadow-bottom fix-top"
        }),
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
          children: [
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
              children: [
                React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                  children: [
                    (() => {
                      if (a._1.tag === "Just") {
                        if (a._1._1.tag === "NoWallets") { return "NO WALLETS?"; }
                        if (a._1._1.tag === "ConnectionError") { return JS$dUnsafe$dStringify.unsafeStringify(a._1._1._1); }
                        $runtime.fail();
                      }
                      if (a._1.tag === "Nothing") {
                        return connectWallet({
                          currentlyConnected: Data$dMaybe.Nothing,
                          onWalletConnect: v2 => {
                            if (v2.tag === "Connected") { return v.setWalletInfo(v2._1); }
                            if (v2.tag === "NoWallets") { return a._2(Data$dMaybe.$Maybe("Just", NoWallets)); }
                            if (v2.tag === "ConnectionError") { return a._2(Data$dMaybe.$Maybe("Just", $ConnectionErrors("ConnectionError", v2._1))); }
                            $runtime.fail();
                          },
                          onDismiss: () => {},
                          inModal: false
                        });
                      }
                      $runtime.fail();
                    })()
                  ],
                  className: "col-xl-5 col-lg-8 col-12"
                })
              ],
              className: "row justify-content-center"
            })
          ],
          className: "container-fluid"
        })
      ]
    }))();
  };
}))))();
export {$ConnectionErrors, AppContractInfoMap, ConnectionError, NoWallets, liftEffect, marloweLogoUrl, mkLandingPage, pure};
