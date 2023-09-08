import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dValidation$dSemigroup from "../Data.Validation.Semigroup/index.js";
import * as Polyform$dValidator from "../Polyform.Validator/index.js";
const Par = x => x;
const sequential = v => v;
const semigroupoidPar = dictMonad => dictSemigroup => (
  {
    compose: v => v1 => i => dictMonad.Bind1().bind(v1(i))(res$p => {
      if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
      if (res$p.tag === "Right") { return v(res$p._1); }
      $runtime.fail();
    })
  }
);
const semigroupPar = dictParallel => {
  const Apply0 = dictParallel.Applicative1().Apply0();
  return dictSemigroup => {
    const semigroupV = Data$dValidation$dSemigroup.semigroupV(dictSemigroup);
    return dictSemigroup1 => (
      {
        append: v => v1 => i => dictParallel.sequential(Apply0.apply(Apply0.Functor0().map(v3 => v4 => semigroupV(dictSemigroup1).append(v3)(v4))(dictParallel.parallel(v(i))))(dictParallel.parallel(v1(i))))
      }
    );
  };
};
const parallel = Par;
const newtypeVaildation = {Coercible0: () => {}};
const monoidPar = dictApplicative => {
  const monoidValidator = Polyform$dValidator.monoidValidator(dictApplicative);
  return dictMonoid => {
    const monoidValidator1 = monoidValidator(dictMonoid);
    const Semigroup0 = dictMonoid.Semigroup0();
    return dictMonoid1 => {
      const mempty = monoidValidator1(dictMonoid1).mempty;
      const Semigroup01 = dictMonoid1.Semigroup0();
      return dictParallel => {
        const semigroupPar1 = semigroupPar(dictParallel)(Semigroup0)(Semigroup01);
        return {mempty, Semigroup0: () => semigroupPar1};
      };
    };
  };
};
const functorPar = dictApplicative => {
  const $0 = dictApplicative.Apply0().Functor0();
  return dictSemigroup => (
    {
      map: f => m => x => $0.map(m$1 => {
        if (m$1.tag === "Left") { return Data$dEither.$Either("Left", m$1._1); }
        if (m$1.tag === "Right") { return Data$dEither.$Either("Right", f(m$1._1)); }
        $runtime.fail();
      })(m(x))
    }
  );
};
const categoryValidator = dictMonad => dictMonoid => {
  const semigroupoidPar2 = {
    compose: v => v1 => i => dictMonad.Bind1().bind(v1(i))(res$p => {
      if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
      if (res$p.tag === "Right") { return v(res$p._1); }
      $runtime.fail();
    })
  };
  return {identity: x => dictMonad.Applicative0().pure(Data$dEither.$Either("Right", x)), Semigroupoid0: () => semigroupoidPar2};
};
const applyPar = dictMonad => {
  const $0 = dictMonad.Applicative0().Apply0().Functor0();
  return dictParallel => {
    const Apply0 = dictParallel.Applicative1().Apply0();
    return dictSemigroup => {
      const functorPar2 = {
        map: f => m => x => $0.map(m$1 => {
          if (m$1.tag === "Left") { return Data$dEither.$Either("Left", m$1._1); }
          if (m$1.tag === "Right") { return Data$dEither.$Either("Right", f(m$1._1)); }
          $runtime.fail();
        })(m(x))
      };
      return {
        apply: v => v1 => i => dictParallel.sequential(Apply0.apply(Apply0.Functor0().map(v2 => v3 => Data$dValidation$dSemigroup.applyV(dictSemigroup).apply(v2)(v3))(dictParallel.parallel(v(i))))(dictParallel.parallel(v1(i)))),
        Functor0: () => functorPar2
      };
    };
  };
};
const applicativePar = dictMonad => {
  const applicativeValidator = Polyform$dValidator.applicativeValidator(dictMonad.Applicative0());
  const applyPar1 = applyPar(dictMonad);
  return dictParallel => {
    const applyPar2 = applyPar1(dictParallel);
    return dictMonoid => {
      const Semigroup0 = dictMonoid.Semigroup0();
      const applyPar3 = applyPar2(Semigroup0);
      return {pure: x => applicativeValidator(Semigroup0).pure(x), Apply0: () => applyPar3};
    };
  };
};
const altPar = dictMonad => {
  const $0 = dictMonad.Applicative0().Apply0().Functor0();
  return dictParallel => {
    const Apply0 = dictParallel.Applicative1().Apply0();
    return dictMonoid => {
      const functorPar2 = {
        map: f => m => x => $0.map(m$1 => {
          if (m$1.tag === "Left") { return Data$dEither.$Either("Left", m$1._1); }
          if (m$1.tag === "Right") { return Data$dEither.$Either("Right", f(m$1._1)); }
          $runtime.fail();
        })(m(x))
      };
      return {
        alt: v => v1 => i => dictParallel.sequential(Apply0.apply(Apply0.Functor0().map(v2 => v3 => {
          if (v2.tag === "Left") { return v3; }
          if (v2.tag === "Right") { return Data$dEither.$Either("Right", v2._1); }
          $runtime.fail();
        })(dictParallel.parallel(v(i))))(dictParallel.parallel(v1(i)))),
        Functor0: () => functorPar2
      };
    };
  };
};
const plusPar = dictMonad => {
  const altPar1 = altPar(dictMonad);
  return dictMonoid => {
    const empty = Polyform$dValidator.plusValidator(dictMonad)(dictMonoid).empty;
    return dictParallel => {
      const altPar2 = altPar1(dictParallel)(dictMonoid);
      return {empty, Alt0: () => altPar2};
    };
  };
};
export {Par, altPar, applicativePar, applyPar, categoryValidator, functorPar, monoidPar, newtypeVaildation, parallel, plusPar, semigroupPar, semigroupoidPar, sequential};
