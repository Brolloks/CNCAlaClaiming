import * as $runtime from "../runtime.js";
import * as Control$dMonad$dCont$dTrans from "../Control.Monad.Cont.Trans/index.js";
import * as Control$dMonad$dExcept$dTrans from "../Control.Monad.Except.Trans/index.js";
import * as Control$dMonad$dMaybe$dTrans from "../Control.Monad.Maybe.Trans/index.js";
import * as Control$dMonad$dReader$dTrans from "../Control.Monad.Reader.Trans/index.js";
import * as Control$dMonad$dWriter$dTrans from "../Control.Monad.Writer.Trans/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFunctor$dCompose from "../Data.Functor.Compose/index.js";
import * as Data$dFunctor$dCostar from "../Data.Functor.Costar/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dProfunctor$dStar from "../Data.Profunctor.Star/index.js";
const ParCont = x => x;
const sequential = dict => dict.sequential;
const parallel = dict => dict.parallel;
const newtypeParCont = {Coercible0: () => {}};
const monadParWriterT = dictMonoid => {
  const monadWriterT = Control$dMonad$dWriter$dTrans.monadWriterT(dictMonoid);
  const applicativeWriterT = Control$dMonad$dWriter$dTrans.applicativeWriterT(dictMonoid);
  return dictParallel => {
    const monadWriterT1 = monadWriterT(dictParallel.Monad0());
    const applicativeWriterT1 = applicativeWriterT(dictParallel.Applicative1());
    return {parallel: v => dictParallel.parallel(v), sequential: v => dictParallel.sequential(v), Monad0: () => monadWriterT1, Applicative1: () => applicativeWriterT1};
  };
};
const monadParStar = dictParallel => {
  const monadStar = Data$dProfunctor$dStar.monadStar(dictParallel.Monad0());
  const $0 = dictParallel.Applicative1();
  const $1 = $0.Apply0();
  const applicativeStar = (() => {
    const $2 = $1.Functor0();
    const functorStar1 = {
      map: f => v => {
        const $3 = $2.map(f);
        return x => $3(v(x));
      }
    };
    const applyStar1 = {apply: v => v1 => a => $1.apply(v(a))(v1(a)), Functor0: () => functorStar1};
    return {pure: a => v => $0.pure(a), Apply0: () => applyStar1};
  })();
  return {parallel: v => x => dictParallel.parallel(v(x)), sequential: v => x => dictParallel.sequential(v(x)), Monad0: () => monadStar, Applicative1: () => applicativeStar};
};
const monadParReaderT = dictParallel => {
  const monadReaderT = Control$dMonad$dReader$dTrans.monadReaderT(dictParallel.Monad0());
  const $0 = dictParallel.Applicative1();
  const $1 = $0.Apply0();
  const applicativeReaderT = (() => {
    const $2 = $1.Functor0();
    const functorReaderT1 = {
      map: x => {
        const $3 = $2.map(x);
        return v => x$1 => $3(v(x$1));
      }
    };
    const applyReaderT1 = {apply: v => v1 => r => $1.apply(v(r))(v1(r)), Functor0: () => functorReaderT1};
    return {
      pure: x => {
        const $3 = $0.pure(x);
        return v => $3;
      },
      Apply0: () => applyReaderT1
    };
  })();
  return {parallel: v => x => dictParallel.parallel(v(x)), sequential: v => x => dictParallel.sequential(v(x)), Monad0: () => monadReaderT, Applicative1: () => applicativeReaderT};
};
const monadParMaybeT = dictParallel => {
  const $0 = dictParallel.Monad0();
  const monadMaybeT = {Applicative0: () => Control$dMonad$dMaybe$dTrans.applicativeMaybeT($0), Bind1: () => Control$dMonad$dMaybe$dTrans.bindMaybeT($0)};
  const applicativeCompose = Data$dFunctor$dCompose.applicativeCompose(dictParallel.Applicative1())(Data$dMaybe.applicativeMaybe);
  return {parallel: v => dictParallel.parallel(v), sequential: v => dictParallel.sequential(v), Monad0: () => monadMaybeT, Applicative1: () => applicativeCompose};
};
const monadParExceptT = dictParallel => {
  const $0 = dictParallel.Monad0();
  const monadExceptT = {Applicative0: () => Control$dMonad$dExcept$dTrans.applicativeExceptT($0), Bind1: () => Control$dMonad$dExcept$dTrans.bindExceptT($0)};
  const applicativeCompose = Data$dFunctor$dCompose.applicativeCompose(dictParallel.Applicative1())(Data$dEither.applicativeEither);
  return {parallel: v => dictParallel.parallel(v), sequential: v => dictParallel.sequential(v), Monad0: () => monadExceptT, Applicative1: () => applicativeCompose};
};
const monadParCostar = dictParallel => (
  {
    parallel: v => x => v(dictParallel.sequential(x)),
    sequential: v => x => v(dictParallel.parallel(x)),
    Monad0: () => Data$dFunctor$dCostar.monadCostar,
    Applicative1: () => Data$dFunctor$dCostar.applicativeCostar
  }
);
const monadParParCont = dictMonadEffect => {
  const monadContT = Control$dMonad$dCont$dTrans.monadContT(dictMonadEffect.Monad0());
  return {parallel: ParCont, sequential: v => v, Monad0: () => monadContT, Applicative1: () => applicativeParCont(dictMonadEffect)};
};
const functorParCont = dictMonadEffect => (
  {
    map: f => x => monadParParCont(dictMonadEffect).parallel((() => {
      const $0 = monadParParCont(dictMonadEffect).sequential(x);
      return k => $0(a => k(f(a)));
    })())
  }
);
const applyParCont = dictMonadEffect => {
  const Bind1 = dictMonadEffect.Monad0().Bind1();
  return {
    apply: v => v1 => k => Bind1.bind(dictMonadEffect.liftEffect(() => ({value: Data$dMaybe.Nothing})))(ra => Bind1.bind(dictMonadEffect.liftEffect(() => (
      {value: Data$dMaybe.Nothing}
    )))(rb => Bind1.bind(v(a => Bind1.bind(dictMonadEffect.liftEffect(() => rb.value))(mb => {
      if (mb.tag === "Nothing") { return dictMonadEffect.liftEffect(() => ra.value = Data$dMaybe.$Maybe("Just", a)); }
      if (mb.tag === "Just") { return k(a(mb._1)); }
      $runtime.fail();
    })))(() => v1(b => Bind1.bind(dictMonadEffect.liftEffect(() => ra.value))(ma => {
      if (ma.tag === "Nothing") { return dictMonadEffect.liftEffect(() => rb.value = Data$dMaybe.$Maybe("Just", b)); }
      if (ma.tag === "Just") { return k(ma._1(b)); }
      $runtime.fail();
    }))))),
    Functor0: () => functorParCont(dictMonadEffect)
  };
};
const applicativeParCont = dictMonadEffect => ({pure: x => monadParParCont(dictMonadEffect).parallel(k => k(x)), Apply0: () => applyParCont(dictMonadEffect)});
const altParCont = dictMonadEffect => {
  const Monad0 = dictMonadEffect.Monad0();
  const Bind1 = Monad0.Bind1();
  const $0 = Monad0.Applicative0();
  const functorParCont1 = functorParCont(dictMonadEffect);
  return {
    alt: v => v1 => k => Bind1.bind(dictMonadEffect.liftEffect(() => ({value: false})))(done => Bind1.bind(v(a => Bind1.bind(dictMonadEffect.liftEffect(() => done.value))(b => {
      if (b) { return $0.pure(); }
      return Bind1.bind(dictMonadEffect.liftEffect(() => done.value = true))(() => k(a));
    })))(() => v1(a => Bind1.bind(dictMonadEffect.liftEffect(() => done.value))(b => {
      if (b) { return $0.pure(); }
      return Bind1.bind(dictMonadEffect.liftEffect(() => done.value = true))(() => k(a));
    })))),
    Functor0: () => functorParCont1
  };
};
const plusParCont = dictMonadEffect => {
  const altParCont1 = altParCont(dictMonadEffect);
  return {empty: v => dictMonadEffect.Monad0().Applicative0().pure(), Alt0: () => altParCont1};
};
const alternativeParCont = dictMonadEffect => {
  const applicativeParCont1 = applicativeParCont(dictMonadEffect);
  const plusParCont1 = plusParCont(dictMonadEffect);
  return {Applicative0: () => applicativeParCont1, Plus1: () => plusParCont1};
};
export {
  ParCont,
  altParCont,
  alternativeParCont,
  applicativeParCont,
  applyParCont,
  functorParCont,
  monadParCostar,
  monadParExceptT,
  monadParMaybeT,
  monadParParCont,
  monadParReaderT,
  monadParStar,
  monadParWriterT,
  newtypeParCont,
  parallel,
  plusParCont,
  sequential
};
