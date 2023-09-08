import * as $runtime from "../runtime.js";
import * as Control$dMonad$dFree$dTrans from "../Control.Monad.Free.Trans/index.js";
import * as Data$dHeytingAlgebra from "../Data.HeytingAlgebra/index.js";
import * as Data$dLens$dInternal$dMarket from "../Data.Lens.Internal.Market/index.js";
import * as Data$dLens$dPrism from "../Data.Lens.Prism/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Web$dRouter$dTypes from "../Web.Router.Types/index.js";
const liftFreeT = /* #__PURE__ */ Control$dMonad$dFree$dTrans.liftFreeT(Web$dRouter$dTypes.functorCommand)(Effect$dAff.monadAff);
const runFreeT = /* #__PURE__ */ Control$dMonad$dFree$dTrans.runFreeT(Web$dRouter$dTypes.functorCommand)(Effect$dAff.monadRecAff);
const mempty = /* #__PURE__ */ (() => Effect$dAff.monoidAff(Control$dMonad$dFree$dTrans.monoidFreeT(Web$dRouter$dTypes.functorCommand)(Effect$dAff.monadAff)(Data$dMonoid.monoidUnit)).mempty)();
const is = /* #__PURE__ */ Data$dLens$dPrism.is(Data$dHeytingAlgebra.heytingAlgebraBoolean);
const redirect = route => liftFreeT(Web$dRouter$dTypes.$Command("Redirect", route));
const override = route => liftFreeT(Web$dRouter$dTypes.$Command("Override", route));
const makeRouter = handleTransition => handleState => v => {
  const $0 = Effect$dAff._makeFiber(Effect$dAff.ffiUtil, Effect$dAff._pure())();
  return () => {
    let fiberRef = $0;
    let previousRouteRef = Data$dMaybe.Nothing;
    return {
      initialize: v.initialize(route => () => {
        const oldFiber = fiberRef;
        const fiber = Effect$dAff._makeFiber(Effect$dAff.ffiUtil, Effect$dAff.killFiber(Effect$dException.error("Transition cancelled"))(oldFiber))();
        fiber.run();
        const previousRoute = previousRouteRef;
        handleState(Web$dRouter$dTypes.$RouterState("Transitioning", previousRoute, route))();
        const fiber$1 = Effect$dAff._makeFiber(
          Effect$dAff.ffiUtil,
          runFreeT(cmd => Effect$dAff._bind((() => {
            if (cmd.tag === "Redirect") { return Effect$dAff._liftEffect(v.redirect(cmd._1)); }
            if (cmd.tag === "Override") {
              const $1 = cmd._1;
              return Effect$dAff._liftEffect(() => {
                previousRouteRef = Data$dMaybe.$Maybe("Just", $1);
                return handleState(Web$dRouter$dTypes.$RouterState("Resolved", previousRoute, $1))();
              });
            }
            if (cmd.tag === "Continue") {
              return Effect$dAff._liftEffect(() => {
                previousRouteRef = Data$dMaybe.$Maybe("Just", route);
                return handleState(Web$dRouter$dTypes.$RouterState("Resolved", previousRoute, route))();
              });
            }
            $runtime.fail();
          })())(() => mempty))(handleTransition(previousRoute)(route))
        )();
        fiber$1.run();
        return fiberRef = fiber$1;
      }),
      navigate: v.navigate,
      redirect: v.redirect
    };
  };
};
const $$continue = /* #__PURE__ */ liftFreeT(Web$dRouter$dTypes.Continue);
const _Transitioning = dictChoice => Data$dLens$dPrism.prism$p(Web$dRouter$dTypes.Transitioning(Data$dMaybe.Nothing))(v => {
  if (v.tag === "Transitioning") { return Data$dMaybe.$Maybe("Just", v._2); }
  return Data$dMaybe.Nothing;
})(dictChoice);
const isTransitioning = /* #__PURE__ */ is(/* #__PURE__ */ _Transitioning(Data$dLens$dInternal$dMarket.choiceMarket));
const _RouterState = dictStrong => pab => dictStrong.Profunctor0().dimap(s => Data$dTuple.$Tuple(
  (() => {
    if (s.tag === "Transitioning") { return s._2; }
    if (s.tag === "Resolved") { return s._2; }
    $runtime.fail();
  })(),
  b => {
    if (s.tag === "Transitioning") { return Web$dRouter$dTypes.$RouterState("Transitioning", s._1, b); }
    if (s.tag === "Resolved") { return Web$dRouter$dTypes.$RouterState("Resolved", s._1, b); }
    $runtime.fail();
  }
))(v => v._2(v._1))(dictStrong.first(pab));
const _Resolved = dictChoice => Data$dLens$dPrism.prism$p(Web$dRouter$dTypes.Resolved(Data$dMaybe.Nothing))(v => {
  if (v.tag === "Resolved") { return Data$dMaybe.$Maybe("Just", v._2); }
  return Data$dMaybe.Nothing;
})(dictChoice);
const isResolved = /* #__PURE__ */ is(/* #__PURE__ */ _Resolved(Data$dLens$dInternal$dMarket.choiceMarket));
export {_Resolved, _RouterState, _Transitioning, $$continue as continue, is, isResolved, isTransitioning, liftFreeT, makeRouter, mempty, override, redirect, runFreeT};
