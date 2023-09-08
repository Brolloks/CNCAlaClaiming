import * as $runtime from "../runtime.js";
import * as Control$dMonad$dFree$dTrans from "../Control.Monad.Free.Trans/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dAff$dClass from "../Effect.Aff.Class/index.js";
const $Command = (tag, _1) => ({tag, _1});
const $RouterState = (tag, _1, _2) => ({tag, _1, _2});
const Transitioning = value0 => value1 => $RouterState("Transitioning", value0, value1);
const Resolved = value0 => value1 => $RouterState("Resolved", value0, value1);
const Driver = x => x;
const Override = value0 => $Command("Override", value0);
const Redirect = value0 => $Command("Redirect", value0);
const Continue = /* #__PURE__ */ $Command("Continue");
const Transition = x => x;
const newtypeTransition = {Coercible0: () => {}};
const functorCommand = {
  map: f => m => {
    if (m.tag === "Override") { return $Command("Override", m._1); }
    if (m.tag === "Redirect") { return $Command("Redirect", m._1); }
    if (m.tag === "Continue") { return Continue; }
    $runtime.fail();
  }
};
const map = /* #__PURE__ */ (() => Control$dMonad$dFree$dTrans.functorFreeT(functorCommand)(Effect$dAff.functorAff).map)();
const bind = /* #__PURE__ */ (() => Control$dMonad$dFree$dTrans.bindFreeT(functorCommand)(Effect$dAff.monadAff).bind)();
const pure = /* #__PURE__ */ (() => Control$dMonad$dFree$dTrans.applicativeFreeT(functorCommand)(Effect$dAff.monadAff).pure)();
const liftEffect = /* #__PURE__ */ (() => Control$dMonad$dFree$dTrans.monadEffectFreeT(functorCommand)(Effect$dAff.monadEffectAff).liftEffect)();
const liftAff = /* #__PURE__ */ (() => Control$dMonad$dFree$dTrans.monadAffFreeT(functorCommand)(Effect$dAff$dClass.monadAffAff).liftAff)();
const functorTransition = dictTypeEquals => dictTypeEquals1 => ({map: f => v => map(f)(v)});
const ixFunctorTransition = {imap: f => v => map(f)(v)};
const ixMonadTransition = {IxApplicative0: () => ixApplicativeTransition, IxBind1: () => ixBindTransition};
const ixBindTransition = {ibind: v => f => bind(v)(a => f(a)), IxApply0: () => ixApplyTransition};
const ixApplyTransition = {iapply: f => a => bind(f)(a$1 => bind(a)(a$2 => ixApplicativeTransition.ipure(a$1(a$2)))), IxFunctor0: () => ixFunctorTransition};
const ixApplicativeTransition = {ipure: a => pure(a), IxApply0: () => ixApplyTransition};
const eqRoute = dictEq => {
  const $0 = (x, y) => {
    if (x.tag === "Nothing") { return y.tag === "Nothing"; }
    return x.tag === "Just" && y.tag === "Just" && dictEq.eq(x._1)(y._1);
  };
  return {
    eq: x => y => {
      if (x.tag === "Transitioning") { return y.tag === "Transitioning" && $0(x._1, y._1) && dictEq.eq(x._2)(y._2); }
      return x.tag === "Resolved" && y.tag === "Resolved" && $0(x._1, y._1) && dictEq.eq(x._2)(y._2);
    }
  };
};
const monadTransition = dictTypeEquals => dictTypeEquals1 => (
  {Applicative0: () => applicativeTransition(dictTypeEquals)(dictTypeEquals1), Bind1: () => bindTransition(dictTypeEquals)(dictTypeEquals1)}
);
const bindTransition = dictTypeEquals => dictTypeEquals1 => ({bind: v => f => bind(v)(a => f(a)), Apply0: () => applyTransition(dictTypeEquals)(dictTypeEquals1)});
const applyTransition = dictTypeEquals => dictTypeEquals1 => {
  const functorTransition2 = {map: f => v => map(f)(v)};
  return {
    apply: (() => {
      const $0 = bindTransition(dictTypeEquals)(dictTypeEquals1);
      return f => a => $0.bind(f)(f$p => $0.bind(a)(a$p => applicativeTransition(dictTypeEquals)(dictTypeEquals1).pure(f$p(a$p))));
    })(),
    Functor0: () => functorTransition2
  };
};
const applicativeTransition = dictTypeEquals => dictTypeEquals1 => ({pure: a => pure(a), Apply0: () => applyTransition(dictTypeEquals)(dictTypeEquals1)});
const monadEffectTransition = dictTypeEquals => dictTypeEquals1 => {
  const monadTransition2 = {
    Applicative0: () => ({pure: a => pure(a), Apply0: () => applyTransition(dictTypeEquals)(dictTypeEquals1)}),
    Bind1: () => bindTransition(dictTypeEquals)(dictTypeEquals1)
  };
  return {liftEffect: eff => liftEffect(eff), Monad0: () => monadTransition2};
};
const monadAffTransition = dictTypeEquals => dictTypeEquals1 => {
  const monadEffectTransition2 = monadEffectTransition(dictTypeEquals)(dictTypeEquals1);
  return {liftAff: aff => liftAff(aff), MonadEffect0: () => monadEffectTransition2};
};
export {
  $Command,
  $RouterState,
  Continue,
  Driver,
  Override,
  Redirect,
  Resolved,
  Transition,
  Transitioning,
  applicativeTransition,
  applyTransition,
  bind,
  bindTransition,
  eqRoute,
  functorCommand,
  functorTransition,
  ixApplicativeTransition,
  ixApplyTransition,
  ixBindTransition,
  ixFunctorTransition,
  ixMonadTransition,
  liftAff,
  liftEffect,
  map,
  monadAffTransition,
  monadEffectTransition,
  monadTransition,
  newtypeTransition,
  pure
};
