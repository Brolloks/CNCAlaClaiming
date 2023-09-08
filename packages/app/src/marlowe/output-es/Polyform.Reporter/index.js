import * as $runtime from "../runtime.js";
import * as Control$dMonad$dMaybe$dTrans from "../Control.Monad.Maybe.Trans/index.js";
import * as Control$dMonad$dWriter$dTrans from "../Control.Monad.Writer.Trans/index.js";
import * as Data$dBifunctor from "../Data.Bifunctor/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dProfunctor$dStar from "../Data.Profunctor.Star/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
const Reporter = x => x;
const toV = v => {
  if (v._1.tag === "Just") { return Data$dEither.$Either("Right", v._1._1); }
  return Data$dEither.$Either("Left", v._2);
};
const toValidator = dictFunctor => dictMonoid => v => {
  const $0 = dictFunctor.map(toV);
  return x => $0(v(x));
};
const strongReporter = dictMonad => {
  const strongStar = Data$dProfunctor$dStar.strongStar((() => {
    const $0 = dictMonad.Bind1().Apply0().Functor0();
    return {map: f => v => $0.map(v$1 => Data$dTuple.$Tuple(v$1._1.tag === "Just" ? Data$dMaybe.$Maybe("Just", f(v$1._1._1)) : Data$dMaybe.Nothing, v$1._2))(v)};
  })());
  return dictSemigroup => strongStar;
};
const semigroupoidReporter = dictMonad => dictMonoid => {
  const $0 = Control$dMonad$dMaybe$dTrans.bindMaybeT(Control$dMonad$dWriter$dTrans.monadWriterT(dictMonoid)(dictMonad));
  return {compose: v => v1 => x => $0.bind(v1(x))(v)};
};
const semigroupReporter = dictMonad => {
  const $0 = dictMonad.Bind1().Apply0().Functor0();
  return dictMonoid => dictMonoid1 => {
    const append = dictMonoid1.Semigroup0().append;
    return {
      append: v => v1 => i => Control$dMonad$dMaybe$dTrans.applyMaybeT(Control$dMonad$dWriter$dTrans.monadWriterT(dictMonoid)(dictMonad)).apply($0.map(v$1 => Data$dTuple.$Tuple(
        v$1._1.tag === "Just" ? Data$dMaybe.$Maybe("Just", append(v$1._1._1)) : Data$dMaybe.Nothing,
        v$1._2
      ))(v(i)))(v1(i))
    };
  };
};
const runReporter = v => x => v(x);
const profunctorReporter = dictFunctor => (
  {dimap: f => g => v => x => dictFunctor.map(v$1 => Data$dTuple.$Tuple(v$1._1.tag === "Just" ? Data$dMaybe.$Maybe("Just", g(v$1._1._1)) : Data$dMaybe.Nothing, v$1._2))(v(f(x)))}
);
const plusReporter = dictMonad => dictMonoid => {
  const $0 = Control$dMonad$dMaybe$dTrans.plusMaybeT(Control$dMonad$dWriter$dTrans.monadWriterT(dictMonoid)(dictMonad));
  const empty = $0.empty;
  const $1 = $0.Alt0();
  const $2 = $1.Functor0();
  const functorStar1 = {
    map: f => v => {
      const $3 = $2.map(f);
      return x => $3(v(x));
    }
  };
  const altStar1 = {alt: v => v1 => a => $1.alt(v(a))(v1(a)), Functor0: () => functorStar1};
  return {empty: v => empty, Alt0: () => altStar1};
};
const newtypeReporter = {Coercible0: () => {}};
const monoidReporter = dictMonad => {
  const semigroupReporter1 = semigroupReporter(dictMonad);
  return dictMonoid => {
    const semigroupReporter2 = semigroupReporter1(dictMonoid);
    return dictMonoid1 => {
      const semigroupReporter3 = semigroupReporter2(dictMonoid1);
      return {
        mempty: (() => {
          const $0 = Control$dMonad$dMaybe$dTrans.applicativeMaybeT(Control$dMonad$dWriter$dTrans.monadWriterT(dictMonoid)(dictMonad)).pure(dictMonoid1.mempty);
          return v => $0;
        })(),
        Semigroup0: () => semigroupReporter3
      };
    };
  };
};
const liftValidatorWithM = dictMonad => {
  const $0 = dictMonad.Bind1();
  const $1 = dictMonad.Applicative0();
  return f => g => validator => i => $0.bind(validator(i))(v => {
    if (v.tag === "Left") {
      return $0.bind(f(Data$dTuple.$Tuple(i, v._1)))((() => {
        const $2 = Data$dTuple.Tuple(Data$dMaybe.Nothing);
        return x => $1.pure($2(x));
      })());
    }
    if (v.tag === "Right") {
      return $0.bind(g(Data$dTuple.$Tuple(i, v._1)))((() => {
        const $2 = Data$dTuple.Tuple(Data$dMaybe.$Maybe("Just", v._1));
        return x => $1.pure($2(x));
      })());
    }
    $runtime.fail();
  });
};
const liftVWith = f => g => {
  const $0 = Data$dTuple.Tuple(Data$dMaybe.Nothing);
  return v2 => {
    if (v2.tag === "Left") { return $0(f(v2._1)); }
    if (v2.tag === "Right") { return Data$dTuple.$Tuple(Data$dMaybe.$Maybe("Just", v2._1), g(v2._1)); }
    $runtime.fail();
  };
};
const liftValidatorWith = dictFunctor => f => g => v => i => dictFunctor.map(liftVWith((() => {
  const $0 = Data$dTuple.Tuple(i);
  return x => f($0(x));
})())((() => {
  const $0 = Data$dTuple.Tuple(i);
  return x => g($0(x));
})()))(v(i));
const liftV = dictMonoid => {
  const mempty = dictMonoid.mempty;
  return v => {
    if (v.tag === "Right") { return Data$dTuple.$Tuple(Data$dMaybe.$Maybe("Just", v._1), mempty); }
    if (v.tag === "Left") { return Data$dTuple.$Tuple(Data$dMaybe.Nothing, v._1); }
    $runtime.fail();
  };
};
const liftValidator = dictFunctor => dictMonoid => {
  const liftV1 = liftV(dictMonoid);
  return v => {
    const $0 = dictFunctor.map(liftV1);
    return x => $0(v(x));
  };
};
const liftFnR = dictMonad => dictSemigroup => f => x => dictMonad.Applicative0().pure(f(x));
const liftFnMR = f => x => f(x);
const lmapM = dictMonad => {
  const Bind1 = dictMonad.Bind1();
  const $0 = Bind1.Apply0().Functor0();
  return f => reporter => x => Bind1.bind(reporter(x))(v => {
    if (v._1.tag === "Just") { return $0.map(Data$dTuple.Tuple(Data$dMaybe.$Maybe("Just", v._1._1)))(f(v._2)); }
    return $0.map(Data$dTuple.Tuple(Data$dMaybe.Nothing))(f(v._2));
  });
};
const liftFnEither = dictMonad => dictMonoid => {
  const mempty = dictMonoid.mempty;
  return f => x => dictMonad.Applicative0().pure((() => {
    const $0 = f(x);
    if ($0.tag === "Left") { return Data$dTuple.$Tuple(Data$dMaybe.Nothing, $0._1); }
    if ($0.tag === "Right") { return Data$dTuple.$Tuple(Data$dMaybe.$Maybe("Just", $0._1), mempty); }
    $runtime.fail();
  })());
};
const liftFn = dictMonad => dictMonoid => f => x => Control$dMonad$dMaybe$dTrans.applicativeMaybeT(Control$dMonad$dWriter$dTrans.monadWriterT(dictMonoid)(dictMonad)).pure(f(x));
const lazyReporter = {defer: f => i => f()(i)};
const hoist = dictFunctor => nt => v => x => nt(v(x));
const functorReporter = dictFunctor => (
  {map: f => v => x => dictFunctor.map(v$1 => Data$dTuple.$Tuple(v$1._1.tag === "Just" ? Data$dMaybe.$Maybe("Just", f(v$1._1._1)) : Data$dMaybe.Nothing, v$1._2))(v(x))}
);
const choiceReporter = dictMonoid => {
  const monadWriterT = Control$dMonad$dWriter$dTrans.monadWriterT(dictMonoid);
  return dictMonad => Data$dProfunctor$dStar.choiceStar(Control$dMonad$dMaybe$dTrans.applicativeMaybeT(monadWriterT(dictMonad)));
};
const categoryReporter = dictMonad => dictMonoid => {
  const semigroupoidReporter2 = semigroupoidReporter(dictMonad)(dictMonoid);
  return {
    identity: Control$dMonad$dMaybe$dTrans.applicativeMaybeT(Control$dMonad$dWriter$dTrans.monadWriterT(dictMonoid)(dictMonad)).pure,
    Semigroupoid0: () => semigroupoidReporter2
  };
};
const bifunctorBifunctorReporter = dictMonad => (
  {
    bimap: l => r => v => i => dictMonad.Bind1().bind(v(i))(v1 => dictMonad.Applicative0().pure(Data$dTuple.$Tuple(
      v1._1.tag === "Just" ? Data$dMaybe.$Maybe("Just", r(v1._1._1)) : Data$dMaybe.Nothing,
      l(v1._2)
    )))
  }
);
const bimapReporter = dictMonad => l => r => bifunctorBifunctorReporter(dictMonad).bimap(l)(r);
const lmapReporter = dictMonad => Data$dBifunctor.lmap(bifunctorBifunctorReporter(dictMonad));
const applyReporter = dictMonad => {
  const Bind1 = dictMonad.Bind1();
  const Applicative0 = dictMonad.Applicative0();
  const functorReporter1 = functorReporter(Bind1.Apply0().Functor0());
  return dictMonoid => {
    const $0 = Control$dMonad$dWriter$dTrans.bindWriterT(dictMonoid.Semigroup0())(Bind1);
    return {
      apply: v => v1 => i => $0.bind(v(i))(mf => $0.bind(v1(i))(ma => Control$dMonad$dWriter$dTrans.applicativeWriterT(dictMonoid)(Applicative0).pure(Data$dMaybe.applyMaybe.apply(mf)(ma)))),
      Functor0: () => functorReporter1
    };
  };
};
const applicativeReporter = dictMonad => dictMonoid => {
  const $0 = Control$dMonad$dMaybe$dTrans.applicativeMaybeT(Control$dMonad$dWriter$dTrans.monadWriterT(dictMonoid)(dictMonad));
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
const altReporter = dictMonad => dictMonoid => {
  const $0 = Control$dMonad$dMaybe$dTrans.altMaybeT(Control$dMonad$dWriter$dTrans.monadWriterT(dictMonoid)(dictMonad));
  const $1 = $0.Functor0();
  const functorStar1 = {
    map: f => v => {
      const $2 = $1.map(f);
      return x => $2(v(x));
    }
  };
  return {alt: v => v1 => a => $0.alt(v(a))(v1(a)), Functor0: () => functorStar1};
};
export {
  Reporter,
  altReporter,
  applicativeReporter,
  applyReporter,
  bifunctorBifunctorReporter,
  bimapReporter,
  categoryReporter,
  choiceReporter,
  functorReporter,
  hoist,
  lazyReporter,
  liftFn,
  liftFnEither,
  liftFnMR,
  liftFnR,
  liftV,
  liftVWith,
  liftValidator,
  liftValidatorWith,
  liftValidatorWithM,
  lmapM,
  lmapReporter,
  monoidReporter,
  newtypeReporter,
  plusReporter,
  profunctorReporter,
  runReporter,
  semigroupReporter,
  semigroupoidReporter,
  strongReporter,
  toV,
  toValidator
};
