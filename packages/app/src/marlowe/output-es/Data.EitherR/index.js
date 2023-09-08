// | This module provides `throwEither` and `cachEither` for Either. These
// | functions reside here because `throwEither` and `catchEither` correspond
// | to `return` and `bind` for flipped `Either` monad: `EitherR`.
// |
// | `catchEither` differs from `MonadError` (`cacheError`) - `catchEither` is
// | more general as it allows you to change the left value's type.
// |
// | `throwEither` is just `throwError` but exists here for consistency.
// |
// | More advanced users can use `EitherR` and `ExceptRT` to program in an
// | entirely symmetric "success monad" where exceptional results are the norm
// | and successful results terminate the computation.  This allows you to chain
// | error-handlers using `do` notation and pass around exceptional values of
// | varying types until you can finally recover from the error:
// |
// |     runExceptRT $ do
// |       e2   <- ioExceptionHandler e1
// |       bool <- arithmeticExceptionhandler e2
// |       when bool $ lift $ putStrLn "DEBUG: Arithmetic handler did something"
// |
// | If any of the above error handlers 'succeed', no other handlers are tried.
// | If you choose not to typefully distinguish between the error and sucess
// | monad, then use `flipEither` and `flipET`, which swap the type variables without
// | changing the type.
import * as $runtime from "../runtime.js";
import * as Control$dMonad$dExcept$dTrans from "../Control.Monad.Except.Trans/index.js";
import * as Data$dEither from "../Data.Either/index.js";
const ExceptRT = x => x;
const EitherR = x => x;
const succeedT = dictMonad => Control$dMonad$dExcept$dTrans.applicativeExceptT(dictMonad).pure;
const succeed = r => Data$dEither.$Either("Right", r);
const runExceptRT = v => v;
const runEitherR = v => v;
const monadTrans = {lift: dictMonad => x => dictMonad.Bind1().Apply0().Functor0().map(Data$dEither.Left)(x)};
const flipEither = e => {
  if (e.tag === "Left") { return Data$dEither.$Either("Right", e._1); }
  if (e.tag === "Right") { return Data$dEither.$Either("Left", e._1); }
  $runtime.fail();
};
const flipET = dictMonad => x => dictMonad.Bind1().bind(x)(a$p => dictMonad.Applicative0().pure((() => {
  if (a$p.tag === "Left") { return Data$dEither.$Either("Right", a$p._1); }
  if (a$p.tag === "Right") { return Data$dEither.$Either("Left", a$p._1); }
  $runtime.fail();
})()));
const monadExceptRT = dictMonad => ({Applicative0: () => applicativeExceptRT(dictMonad), Bind1: () => bindExceptRT(dictMonad)});
const functorExceptRT = dictMonad => ({map: f => a => bindExceptRT(dictMonad).bind(a)(a$p => applicativeExceptRT(dictMonad).pure(f(a$p)))});
const bindExceptRT = dictMonad => (
  {
    bind: m => f => dictMonad.Bind1().bind(m)(e => {
      if (e.tag === "Left") { return f(e._1); }
      if (e.tag === "Right") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Right", e._1)); }
      $runtime.fail();
    }),
    Apply0: () => applyExceptRT(dictMonad)
  }
);
const applyExceptRT = dictMonad => (
  {
    apply: (() => {
      const $0 = bindExceptRT(dictMonad);
      return f => a => $0.bind(f)(f$p => $0.bind(a)(a$p => applicativeExceptRT(dictMonad).pure(f$p(a$p))));
    })(),
    Functor0: () => functorExceptRT(dictMonad)
  }
);
const applicativeExceptRT = dictMonad => ({pure: e => Control$dMonad$dExcept$dTrans.monadThrowExceptT(dictMonad).throwError(e), Apply0: () => applyExceptRT(dictMonad)});
const fmapLT = dictMonad => f => a => bindExceptRT(dictMonad).bind(a)(a$p => applicativeExceptRT(dictMonad).pure(f(a$p)));
const monadEffExceptRT = dictMonadEffect => {
  const Monad0 = dictMonadEffect.Monad0();
  const monadExceptRT1 = {Applicative0: () => applicativeExceptRT(Monad0), Bind1: () => bindExceptRT(Monad0)};
  return {liftEffect: x => monadTrans.lift(Monad0)(dictMonadEffect.liftEffect(x)), Monad0: () => monadExceptRT1};
};
const monadEitherR = {Applicative0: () => applicativeEitherR, Bind1: () => bindEitherR};
const functorEitherR = {map: f => a => bindEitherR.bind(a)(a$p => applicativeEitherR.pure(f(a$p)))};
const bindEitherR = {
  bind: v => f => {
    if (v.tag === "Left") { return f(v._1); }
    if (v.tag === "Right") { return Data$dEither.$Either("Right", v._1); }
    $runtime.fail();
  },
  Apply0: () => applyEitherR
};
const applyEitherR = {
  apply: f => a => {
    if (f.tag === "Left") {
      if (a.tag === "Left") { return applicativeEitherR.pure(f._1(a._1)); }
      if (a.tag === "Right") { return Data$dEither.$Either("Right", a._1); }
      $runtime.fail();
    }
    if (f.tag === "Right") { return Data$dEither.$Either("Right", f._1); }
    $runtime.fail();
  },
  Functor0: () => functorEitherR
};
const applicativeEitherR = {pure: e => Data$dEither.$Either("Left", e), Apply0: () => applyEitherR};
const catchEither = e => f => {
  if (e.tag === "Left") { return f(e._1); }
  if (e.tag === "Right") { return Data$dEither.$Either("Right", e._1); }
  $runtime.fail();
};
const handleEither = b => a => {
  if (a.tag === "Left") { return b(a._1); }
  if (a.tag === "Right") { return Data$dEither.$Either("Right", a._1); }
  $runtime.fail();
};
const fmapL = f => e => {
  if (e.tag === "Left") { return Data$dEither.$Either("Left", f(e._1)); }
  if (e.tag === "Right") { return Data$dEither.$Either("Right", e._1); }
  $runtime.fail();
};
const throwEither = e => Data$dEither.$Either("Left", e);
const altExceptRT = dictMonoid => dictMonad => {
  const $0 = dictMonad.Bind1();
  const $1 = dictMonad.Applicative0();
  const functorExceptRT1 = functorExceptRT(dictMonad);
  return {
    alt: e1 => e2 => $0.bind(e1)(e1$p => {
      if (e1$p.tag === "Left") { return $1.pure(e1$p); }
      if (e1$p.tag === "Right") {
        const $2 = e1$p._1;
        return $0.bind(e2)(e2$p => {
          if (e2$p.tag === "Left") { return $1.pure(e2$p); }
          if (e2$p.tag === "Right") { return $1.pure(Data$dEither.$Either("Right", dictMonoid.Semigroup0().append($2)(e2$p._1))); }
          $runtime.fail();
        });
      }
      $runtime.fail();
    }),
    Functor0: () => functorExceptRT1
  };
};
const plusExceptRT = dictMonoid => {
  const mempty = dictMonoid.mempty;
  return dictMonad => {
    const altExceptRT2 = altExceptRT(dictMonoid)(dictMonad);
    return {empty: Control$dMonad$dExcept$dTrans.applicativeExceptT(dictMonad).pure(mempty), Alt0: () => altExceptRT2};
  };
};
const alternativeExceptRT = dictMonoid => {
  const plusExceptRT1 = plusExceptRT(dictMonoid);
  return dictMonad => {
    const applicativeExceptRT1 = applicativeExceptRT(dictMonad);
    const plusExceptRT2 = plusExceptRT1(dictMonad);
    return {Applicative0: () => applicativeExceptRT1, Plus1: () => plusExceptRT2};
  };
};
const monadPlusExceptRT = dictMonoid => {
  const alternativeExceptRT1 = alternativeExceptRT(dictMonoid);
  return dictMonad => {
    const monadExceptRT1 = {Applicative0: () => applicativeExceptRT(dictMonad), Bind1: () => bindExceptRT(dictMonad)};
    const alternativeExceptRT2 = alternativeExceptRT1(dictMonad);
    return {Monad0: () => monadExceptRT1, Alternative1: () => alternativeExceptRT2};
  };
};
const altEitherR = dictMonoid => (
  {
    alt: v => v1 => {
      if (v.tag === "Left") { return v; }
      if (v1.tag === "Left") { return v1; }
      if (v.tag === "Right" && v1.tag === "Right") { return Data$dEither.$Either("Right", dictMonoid.Semigroup0().append(v._1)(v1._1)); }
      $runtime.fail();
    },
    Functor0: () => functorEitherR
  }
);
const plusEitherR = dictMonoid => {
  const altEitherR1 = altEitherR(dictMonoid);
  return {empty: Data$dEither.$Either("Right", dictMonoid.mempty), Alt0: () => altEitherR1};
};
const alternativeEitherR = dictMonoid => {
  const altEitherR1 = altEitherR(dictMonoid);
  return {Applicative0: () => applicativeEitherR, Plus1: () => ({empty: Data$dEither.$Either("Right", dictMonoid.mempty), Alt0: () => altEitherR1})};
};
const monadPlusEitherR = dictMonoid => {
  const alternativeEitherR1 = alternativeEitherR(dictMonoid);
  return {Monad0: () => monadEitherR, Alternative1: () => alternativeEitherR1};
};
export {
  EitherR,
  ExceptRT,
  altEitherR,
  altExceptRT,
  alternativeEitherR,
  alternativeExceptRT,
  applicativeEitherR,
  applicativeExceptRT,
  applyEitherR,
  applyExceptRT,
  bindEitherR,
  bindExceptRT,
  catchEither,
  flipET,
  flipEither,
  fmapL,
  fmapLT,
  functorEitherR,
  functorExceptRT,
  handleEither,
  monadEffExceptRT,
  monadEitherR,
  monadExceptRT,
  monadPlusEitherR,
  monadPlusExceptRT,
  monadTrans,
  plusEitherR,
  plusExceptRT,
  runEitherR,
  runExceptRT,
  succeed,
  succeedT,
  throwEither
};
