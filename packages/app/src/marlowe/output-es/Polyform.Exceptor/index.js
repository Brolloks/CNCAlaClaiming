import * as $runtime from "../runtime.js";
import * as Control$dMonad$dExcept$dTrans from "../Control.Monad.Except.Trans/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFunctor$dCompose from "../Data.Functor.Compose/index.js";
import * as Data$dProfunctor$dStar from "../Data.Profunctor.Star/index.js";
const ParExceptor = x => x;
const Exceptor = x => x;
const strongExceptor = dictMonad => Data$dProfunctor$dStar.strongStar((() => {
  const $0 = dictMonad.Bind1().Apply0().Functor0();
  return {
    map: f => $0.map(m => {
      if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
      if (m.tag === "Right") { return Data$dEither.$Either("Right", f(m._1)); }
      $runtime.fail();
    })
  };
})());
const semigroupoidExceptor = dictMonad => {
  const $0 = Control$dMonad$dExcept$dTrans.bindExceptT(dictMonad);
  return {compose: v => v1 => x => $0.bind(v1(x))(v)};
};
const profunctorExceptor = dictFunctor => (
  {
    dimap: f => g => v => {
      const $0 = dictFunctor.map(m => {
        if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
        if (m.tag === "Right") { return Data$dEither.$Either("Right", g(m._1)); }
        $runtime.fail();
      });
      return x => $0(v(f(x)));
    }
  }
);
const newtypeExceptor = {Coercible0: () => {}};
const monadExceptor = dictMonad => Data$dProfunctor$dStar.monadStar({
  Applicative0: () => Control$dMonad$dExcept$dTrans.applicativeExceptT(dictMonad),
  Bind1: () => Control$dMonad$dExcept$dTrans.bindExceptT(dictMonad)
});
const lazyExceptor = dictMonad => ({defer: f => i => f()(i)});
const functorParExceptor = dictApplicative => {
  const $0 = dictApplicative.Apply0().Functor0();
  return {
    map: f => v => x => $0.map(m => {
      if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
      if (m.tag === "Right") { return Data$dEither.$Either("Right", f(m._1)); }
      $runtime.fail();
    })(v(x))
  };
};
const functorExceptor = dictApplicative => {
  const $0 = dictApplicative.Apply0().Functor0();
  return {
    map: f => v => {
      const $1 = $0.map(m => {
        if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
        if (m.tag === "Right") { return Data$dEither.$Either("Right", f(m._1)); }
        $runtime.fail();
      });
      return x => $1(v(x));
    }
  };
};
const choiceExceptor = dictMonad => Data$dProfunctor$dStar.choiceStar(Control$dMonad$dExcept$dTrans.applicativeExceptT(dictMonad));
const categoryExceptor = dictMonad => {
  const $0 = Control$dMonad$dExcept$dTrans.bindExceptT(dictMonad);
  const semigroupoidStar1 = {compose: v => v1 => x => $0.bind(v1(x))(v)};
  return {identity: Control$dMonad$dExcept$dTrans.applicativeExceptT(dictMonad).pure, Semigroupoid0: () => semigroupoidStar1};
};
const bindExceptor = dictMonad => Data$dProfunctor$dStar.bindStar(Control$dMonad$dExcept$dTrans.bindExceptT(dictMonad));
const applyParExceptor = dictApplicative => {
  const $0 = dictApplicative.Apply0();
  const Functor0 = $0.Functor0();
  const functorStar1 = {
    map: f => v => x => Functor0.map(m => {
      if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
      if (m.tag === "Right") { return Data$dEither.$Either("Right", f(m._1)); }
      $runtime.fail();
    })(v(x))
  };
  return {apply: v => v1 => a => $0.apply(Functor0.map(Data$dEither.applyEither.apply)(v(a)))(v1(a)), Functor0: () => functorStar1};
};
const applyExceptor = dictMonad => {
  const $0 = Control$dMonad$dExcept$dTrans.applyExceptT(dictMonad);
  const $1 = $0.Functor0();
  const functorStar1 = {
    map: f => v => {
      const $2 = $1.map(f);
      return x => $2(v(x));
    }
  };
  return {apply: v => v1 => a => $0.apply(v(a))(v1(a)), Functor0: () => functorStar1};
};
const applicativeParExceptor = dictApplicative => {
  const $0 = Data$dFunctor$dCompose.applicativeCompose(dictApplicative)(Data$dEither.applicativeEither);
  const $1 = $0.Apply0();
  const $2 = $1.Functor0();
  const functorStar1 = {
    map: f => v => {
      const $3 = $2.map(f);
      return x => $3(v(x));
    }
  };
  const applyStar1 = {apply: v => v1 => a => $1.apply(v(a))(v1(a)), Functor0: () => functorStar1};
  return {pure: a => v => $0.pure(a), Apply0: () => applyStar1};
};
const parallelExceptor = dictApplicative => {
  const applicativeParExceptor1 = applicativeParExceptor(dictApplicative);
  return dictParallel => dictMonad => {
    const monadExceptor1 = Data$dProfunctor$dStar.monadStar({
      Applicative0: () => Control$dMonad$dExcept$dTrans.applicativeExceptT(dictMonad),
      Bind1: () => Control$dMonad$dExcept$dTrans.bindExceptT(dictMonad)
    });
    return {
      parallel: v => x => dictParallel.parallel(v(x)),
      sequential: v => x => dictParallel.sequential(v(x)),
      Monad0: () => monadExceptor1,
      Applicative1: () => applicativeParExceptor1
    };
  };
};
const applicativeExceptor = dictMonad => {
  const $0 = Control$dMonad$dExcept$dTrans.applicativeExceptT(dictMonad);
  const $1 = $0.Apply0();
  const $2 = $1.Functor0();
  const functorStar1 = {
    map: f => v => {
      const $3 = $2.map(f);
      return x => $3(v(x));
    }
  };
  const applyStar1 = {apply: v => v1 => a => $1.apply(v(a))(v1(a)), Functor0: () => functorStar1};
  return {pure: a => v => $0.pure(a), Apply0: () => applyStar1};
};
const altExceptor = dictMonad => {
  const Applicative0 = dictMonad.Applicative0();
  const $0 = Applicative0.Apply0().Functor0();
  const functorExceptor1 = {
    map: f => v => {
      const $1 = $0.map(m => {
        if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
        if (m.tag === "Right") { return Data$dEither.$Either("Right", f(m._1)); }
        $runtime.fail();
      });
      return x => $1(v(x));
    }
  };
  return {
    alt: v => v1 => i => dictMonad.Bind1().bind(v(i))(v3 => {
      if (v3.tag === "Right") { return Applicative0.pure(Data$dEither.$Either("Right", v3._1)); }
      if (v3.tag === "Left") { return v1(i); }
      $runtime.fail();
    }),
    Functor0: () => functorExceptor1
  };
};
export {
  Exceptor,
  ParExceptor,
  altExceptor,
  applicativeExceptor,
  applicativeParExceptor,
  applyExceptor,
  applyParExceptor,
  bindExceptor,
  categoryExceptor,
  choiceExceptor,
  functorExceptor,
  functorParExceptor,
  lazyExceptor,
  monadExceptor,
  newtypeExceptor,
  parallelExceptor,
  profunctorExceptor,
  semigroupoidExceptor,
  strongExceptor
};
