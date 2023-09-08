import * as $runtime from "../runtime.js";
import * as Data$dBifunctor from "../Data.Bifunctor/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFunctor$dCompose from "../Data.Functor.Compose/index.js";
import * as Data$dProfunctor$dStar from "../Data.Profunctor.Star/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Data$dValidation$dSemigroup from "../Data.Validation.Semigroup/index.js";
const identity = x => x;
const Validator = x => x;
const strongValidator = dictMonad => {
  const strongStar = Data$dProfunctor$dStar.strongStar((() => {
    const $0 = dictMonad.Bind1().Apply0().Functor0();
    return {
      map: f => v => $0.map(m => {
        if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
        if (m.tag === "Right") { return Data$dEither.$Either("Right", f(m._1)); }
        $runtime.fail();
      })(v)
    };
  })());
  return dictSemigroup => strongStar;
};
const semigroupoidValidator = dictMonad => dictSemigroup => (
  {
    compose: v => v1 => i => dictMonad.Bind1().bind(v1(i))(res$p => {
      if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
      if (res$p.tag === "Right") { return v(res$p._1); }
      $runtime.fail();
    })
  }
);
const semigroupValidator = dictApply => {
  const Functor0 = dictApply.Functor0();
  const $0 = dictApply.Functor0();
  return dictSemigroup => {
    const apply1 = Data$dValidation$dSemigroup.applyV(dictSemigroup).apply;
    return dictSemigroup1 => (
      {
        append: v => v1 => a => dictApply.apply(Functor0.map(apply1)($0.map(m => {
          if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
          if (m.tag === "Right") { return Data$dEither.$Either("Right", dictSemigroup1.append(m._1)); }
          $runtime.fail();
        })(v(a))))(v1(a))
      }
    );
  };
};
const profunctorValidator = dictFunctor => (
  {
    dimap: f => g => v => x => dictFunctor.map(m => {
      if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
      if (m.tag === "Right") { return Data$dEither.$Either("Right", g(m._1)); }
      $runtime.fail();
    })(v(f(x)))
  }
);
const newtypeValidator = {Coercible0: () => {}};
const runValidator = x => x$1 => x(x$1);
const monoidValidator = dictApplicative => {
  const semigroupValidator1 = semigroupValidator(dictApplicative.Apply0());
  return dictMonoid => {
    const Semigroup0 = dictMonoid.Semigroup0();
    const monoidV = Data$dValidation$dSemigroup.monoidV(Semigroup0);
    const semigroupValidator2 = semigroupValidator1(Semigroup0);
    return dictMonoid1 => {
      const semigroupValidator3 = semigroupValidator2(dictMonoid1.Semigroup0());
      return {
        mempty: (() => {
          const $0 = dictApplicative.pure(monoidV(dictMonoid1).mempty);
          return v => $0;
        })(),
        Semigroup0: () => semigroupValidator3
      };
    };
  };
};
const liftFnV = dictApplicative => f => x => dictApplicative.pure(f(x));
const liftFnMaybe = dictApplicative => err => f => x => dictApplicative.pure((() => {
  const $0 = err(x);
  const $1 = f(x);
  if ($1.tag === "Nothing") { return Data$dEither.$Either("Left", $0); }
  if ($1.tag === "Just") { return Data$dEither.$Either("Right", $1._1); }
  $runtime.fail();
})());
const liftFnMV = f => x => f(x);
const lmapM = dictMonad => {
  const Bind1 = dictMonad.Bind1();
  return f => v => x => Bind1.bind(v(x))(v1 => {
    if (v1.tag === "Left") { return Bind1.Apply0().Functor0().map(Data$dValidation$dSemigroup.invalid)(f(v1._1)); }
    if (v1.tag === "Right") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Right", v1._1)); }
    $runtime.fail();
  });
};
const lmapMWithInput = dictMonad => {
  const Bind1 = dictMonad.Bind1();
  return f => v => x => Bind1.bind(v(x))(v1 => {
    if (v1.tag === "Left") { return Bind1.Apply0().Functor0().map(Data$dValidation$dSemigroup.invalid)(f(Data$dTuple.$Tuple(x, v1._1))); }
    if (v1.tag === "Right") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Right", v1._1)); }
    $runtime.fail();
  });
};
const liftFnMMaybe = dictApplicative => {
  const Apply0 = dictApplicative.Apply0();
  return err => f => x => Apply0.apply(Apply0.Functor0().map(v => v1 => {
    if (v.tag === "Nothing") { return Data$dEither.$Either("Left", v1); }
    if (v.tag === "Just") { return Data$dEither.$Either("Right", v._1); }
    $runtime.fail();
  })(f(x)))(err(x));
};
const liftFnMEither = dictMonad => {
  const $0 = dictMonad.Bind1();
  return dictSemigroup => f => a => $0.bind(f(a))(x => dictMonad.Applicative0().pure((() => {
    if (x.tag === "Left") { return Data$dEither.$Either("Left", x._1); }
    if (x.tag === "Right") { return Data$dEither.$Either("Right", x._1); }
    $runtime.fail();
  })()));
};
const liftFnM = dictApplicative => dictSemigroup => f => {
  const $0 = dictApplicative.Apply0().Functor0().map(x => Data$dEither.$Either("Right", x));
  return x => $0(f(x));
};
const liftFnEither = dictApplicative => dictSemigroup => f => x => dictApplicative.pure((() => {
  const $0 = f(x);
  if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
  if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
  $runtime.fail();
})());
const liftFn = dictApplicative => dictSemigroup => f => x => dictApplicative.pure(Data$dEither.$Either("Right", f(x)));
const liftEither = dictApplicative => dictSemigroup => x => dictApplicative.pure((() => {
  if (x.tag === "Left") { return Data$dEither.$Either("Left", x._1); }
  if (x.tag === "Right") { return Data$dEither.$Either("Right", x._1); }
  $runtime.fail();
})());
const lazyValidator = {defer: f => i => f()(i)};
const invalidate = dictApplicative => inv => x => dictApplicative.pure(Data$dEither.$Either("Left", inv(x)));
const hoist = dictFunctor => n => v => x => n(dictFunctor.map(identity)(v(x)));
const functorValidator = dictApplicative => {
  const $0 = dictApplicative.Apply0().Functor0();
  return {
    map: f => v => x => $0.map(m => {
      if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
      if (m.tag === "Right") { return Data$dEither.$Either("Right", f(m._1)); }
      $runtime.fail();
    })(v(x))
  };
};
const choiceValidator = dictSemigroup => {
  const applyV1 = Data$dValidation$dSemigroup.applyV(dictSemigroup);
  return dictApplicative => Data$dProfunctor$dStar.choiceStar(Data$dFunctor$dCompose.applicativeCompose(dictApplicative)({
    pure: x => Data$dEither.$Either("Right", x),
    Apply0: () => applyV1
  }));
};
const checkM = dictMonad => {
  const $0 = dictMonad.Applicative0();
  return dictSemigroup => e => c => x => dictMonad.Bind1().bind(c(x))(v => {
    if (v) { return $0.pure(Data$dEither.$Either("Right", x)); }
    return $0.pure(Data$dEither.$Either("Left", e(x)));
  });
};
const check = dictApplicative => dictSemigroup => e => c => x => dictApplicative.pure(c(x) ? Data$dEither.$Either("Right", x) : Data$dEither.$Either("Left", e(x)));
const categoryValidator = dictMonad => dictSemigroup => {
  const semigroupoidValidator2 = {
    compose: v => v1 => i => dictMonad.Bind1().bind(v1(i))(res$p => {
      if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
      if (res$p.tag === "Right") { return v(res$p._1); }
      $runtime.fail();
    })
  };
  return {identity: x => dictMonad.Applicative0().pure(Data$dEither.$Either("Right", x)), Semigroupoid0: () => semigroupoidValidator2};
};
const bimapMWithInput = dictMonad => {
  const Bind1 = dictMonad.Bind1();
  const $0 = Bind1.Apply0().Functor0();
  return dictSemigroup => f => g => v => x => Bind1.bind(v(x))(v1 => {
    if (v1.tag === "Left") { return $0.map(Data$dValidation$dSemigroup.invalid)(f(Data$dTuple.$Tuple(x, v1._1))); }
    if (v1.tag === "Right") { return $0.map(x$1 => Data$dEither.$Either("Right", x$1))(g(Data$dTuple.$Tuple(x, v1._1))); }
    $runtime.fail();
  });
};
const bimapM = dictMonad => {
  const $0 = dictMonad.Applicative0();
  const lmapM1 = lmapM(dictMonad);
  return dictSemigroup => l => r => v => {
    const $1 = $0.Apply0().Functor0().map(x => Data$dEither.$Either("Right", x));
    const $2 = lmapM1(l)(v);
    return i => dictMonad.Bind1().bind($2(i))(res$p => {
      if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
      if (res$p.tag === "Right") { return $1(r(res$p._1)); }
      $runtime.fail();
    });
  };
};
const bimapValidator = dictMonad => l => r => x => i => dictMonad.Bind1().Apply0().Functor0().map(v2 => {
  if (v2.tag === "Left") { return Data$dEither.$Either("Left", l(v2._1)); }
  if (v2.tag === "Right") { return Data$dEither.$Either("Right", r(v2._1)); }
  $runtime.fail();
})(x(i));
const lmapValidator = dictMonad => Data$dBifunctor.lmap({
  bimap: l => r => v => i => dictMonad.Bind1().Apply0().Functor0().map(v2 => {
    if (v2.tag === "Left") { return Data$dEither.$Either("Left", l(v2._1)); }
    if (v2.tag === "Right") { return Data$dEither.$Either("Right", r(v2._1)); }
    $runtime.fail();
  })(v(i))
});
const ask = dictMonad => {
  const $0 = dictMonad.Applicative0();
  return dictSemigroup => x => $0.pure(Data$dEither.$Either("Right", x));
};
const applyValidator = dictApplicative => {
  const $0 = dictApplicative.Apply0();
  const Functor0 = $0.Functor0();
  return dictSemigroup => {
    const $1 = Data$dValidation$dSemigroup.applyV(dictSemigroup);
    const apply1 = $1.apply;
    const $2 = (() => {
      const $2 = $1.Functor0();
      const functorCompose2 = {map: f => v => Functor0.map($2.map(f))(v)};
      return {apply: v => v1 => $0.apply(Functor0.map(apply1)(v))(v1), Functor0: () => functorCompose2};
    })();
    const $3 = $2.Functor0();
    const functorStar1 = {
      map: f => v => {
        const $4 = $3.map(f);
        return x => $4(v(x));
      }
    };
    return {apply: v => v1 => a => $2.apply(v(a))(v1(a)), Functor0: () => functorStar1};
  };
};
const applicativeValidator = dictApplicative => {
  const applicativeCompose = Data$dFunctor$dCompose.applicativeCompose(dictApplicative);
  return dictSemigroup => {
    const $0 = applicativeCompose((() => {
      const applyV1 = Data$dValidation$dSemigroup.applyV(dictSemigroup);
      return {pure: x => Data$dEither.$Either("Right", x), Apply0: () => applyV1};
    })());
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
};
const altValidator = dictSemigroup => dictMonad => {
  const $0 = dictMonad.Bind1();
  const Applicative0 = dictMonad.Applicative0();
  const $1 = Applicative0.Apply0().Functor0();
  const functorValidator1 = {
    map: f => v => x => $1.map(m => {
      if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
      if (m.tag === "Right") { return Data$dEither.$Either("Right", f(m._1)); }
      $runtime.fail();
    })(v(x))
  };
  return {
    alt: v => v1 => i => $0.bind(v(i))(v4 => {
      if (v4.tag === "Right") { return Applicative0.pure(Data$dEither.$Either("Right", v4._1)); }
      if (v4.tag === "Left") {
        const $2 = v4._1;
        return $0.bind(v1(i))(v6 => {
          if (v6.tag === "Right") { return Applicative0.pure(Data$dEither.$Either("Right", v6._1)); }
          if (v6.tag === "Left") { return Applicative0.pure(Data$dEither.$Either("Left", dictSemigroup.append($2)(v6._1))); }
          $runtime.fail();
        });
      }
      $runtime.fail();
    }),
    Functor0: () => functorValidator1
  };
};
const plusValidator = dictMonad => dictMonoid => {
  const altValidator1 = altValidator(dictMonoid.Semigroup0())(dictMonad);
  return {
    empty: (() => {
      const $0 = dictMonad.Applicative0().pure(Data$dEither.$Either("Left", dictMonoid.mempty));
      return v => $0;
    })(),
    Alt0: () => altValidator1
  };
};
export {
  Validator,
  altValidator,
  applicativeValidator,
  applyValidator,
  ask,
  bimapM,
  bimapMWithInput,
  bimapValidator,
  categoryValidator,
  check,
  checkM,
  choiceValidator,
  functorValidator,
  hoist,
  identity,
  invalidate,
  lazyValidator,
  liftEither,
  liftFn,
  liftFnEither,
  liftFnM,
  liftFnMEither,
  liftFnMMaybe,
  liftFnMV,
  liftFnMaybe,
  liftFnV,
  lmapM,
  lmapMWithInput,
  lmapValidator,
  monoidValidator,
  newtypeValidator,
  plusValidator,
  profunctorValidator,
  runValidator,
  semigroupValidator,
  semigroupoidValidator,
  strongValidator
};
