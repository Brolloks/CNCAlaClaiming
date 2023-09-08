// | This module defines an applicative functor for _applicative validation_.
// |
// | Applicative validation differs from monadic validation using `Either` in
// | that it allows us to collect multiple errors using a `Semigroup`, whereas
// | `Either` terminates on the first error.
import * as $runtime from "../runtime.js";
import * as Data$dBifunctor from "../Data.Bifunctor/index.js";
import * as Data$dEither from "../Data.Either/index.js";
const V = x => x;
const validation = v => v1 => v2 => {
  if (v2.tag === "Left") { return v(v2._1); }
  if (v2.tag === "Right") { return v1(v2._1); }
  $runtime.fail();
};
const toEither = v => v;
const showV = dictShow => dictShow1 => (
  {
    show: v => {
      if (v.tag === "Left") { return "invalid (" + dictShow.show(v._1) + ")"; }
      if (v.tag === "Right") { return "pure (" + dictShow1.show(v._1) + ")"; }
      $runtime.fail();
    }
  }
);
const newtypeV = {Coercible0: () => {}};
const isValid = v => v.tag === "Right";
const invalid = x => Data$dEither.$Either("Left", x);
const functorV = Data$dEither.functorEither;
const foldableV = {
  foldMap: dictMonoid => {
    const $0 = dictMonoid.mempty;
    return v1 => v2 => {
      if (v2.tag === "Left") { return $0; }
      if (v2.tag === "Right") { return v1(v2._1); }
      $runtime.fail();
    };
  },
  foldr: f => b => v2 => {
    if (v2.tag === "Left") { return b; }
    if (v2.tag === "Right") { return f(v2._1)(b); }
    $runtime.fail();
  },
  foldl: f => b => {
    const $0 = f(b);
    return v2 => {
      if (v2.tag === "Left") { return b; }
      if (v2.tag === "Right") { return $0(v2._1); }
      $runtime.fail();
    };
  }
};
const traversableV = {
  sequence: dictApplicative => {
    const $0 = dictApplicative.Apply0().Functor0().map(x => Data$dEither.$Either("Right", x));
    return v2 => {
      if (v2.tag === "Left") { return dictApplicative.pure(Data$dEither.$Either("Left", v2._1)); }
      if (v2.tag === "Right") { return $0(v2._1); }
      $runtime.fail();
    };
  },
  traverse: dictApplicative => f => {
    const $0 = dictApplicative.Apply0().Functor0().map(x => Data$dEither.$Either("Right", x));
    return v2 => {
      if (v2.tag === "Left") { return dictApplicative.pure(Data$dEither.$Either("Left", v2._1)); }
      if (v2.tag === "Right") { return $0(f(v2._1)); }
      $runtime.fail();
    };
  },
  Functor0: () => Data$dEither.functorEither,
  Foldable1: () => foldableV
};
const eqV = dictEq => dictEq1 => (
  {
    eq: x => y => {
      if (x.tag === "Left") { return y.tag === "Left" && dictEq.eq(x._1)(y._1); }
      return x.tag === "Right" && y.tag === "Right" && dictEq1.eq(x._1)(y._1);
    }
  }
);
const ordV = dictOrd => {
  const ordEither = Data$dEither.ordEither(dictOrd);
  const $0 = dictOrd.Eq0();
  return dictOrd1 => {
    const $1 = dictOrd1.Eq0();
    const eqV2 = {
      eq: x => y => {
        if (x.tag === "Left") { return y.tag === "Left" && $0.eq(x._1)(y._1); }
        return x.tag === "Right" && y.tag === "Right" && $1.eq(x._1)(y._1);
      }
    };
    return {compare: x => y => ordEither(dictOrd1).compare(x)(y), Eq0: () => eqV2};
  };
};
const eq1V = dictEq => (
  {
    eq1: dictEq1 => x => y => {
      if (x.tag === "Left") { return y.tag === "Left" && dictEq.eq(x._1)(y._1); }
      return x.tag === "Right" && y.tag === "Right" && dictEq1.eq(x._1)(y._1);
    }
  }
);
const ord1V = dictOrd => {
  const ordV1 = ordV(dictOrd);
  const $0 = dictOrd.Eq0();
  const eq1V1 = {
    eq1: dictEq1 => x => y => {
      if (x.tag === "Left") { return y.tag === "Left" && $0.eq(x._1)(y._1); }
      return x.tag === "Right" && y.tag === "Right" && dictEq1.eq(x._1)(y._1);
    }
  };
  return {compare1: dictOrd1 => ordV1(dictOrd1).compare, Eq10: () => eq1V1};
};
const bifunctorV = Data$dBifunctor.bifunctorEither;
const applyV = dictSemigroup => (
  {
    apply: v => v1 => {
      if (v.tag === "Left") {
        if (v1.tag === "Left") { return Data$dEither.$Either("Left", dictSemigroup.append(v._1)(v1._1)); }
        return Data$dEither.$Either("Left", v._1);
      }
      if (v1.tag === "Left") { return Data$dEither.$Either("Left", v1._1); }
      if (v.tag === "Right" && v1.tag === "Right") { return Data$dEither.$Either("Right", v._1(v1._1)); }
      $runtime.fail();
    },
    Functor0: () => Data$dEither.functorEither
  }
);
const semigroupV = dictSemigroup => {
  const $0 = applyV(dictSemigroup);
  return dictSemigroup1 => (
    {
      append: (() => {
        const $1 = dictSemigroup1.append;
        return a => b => $0.apply($0.Functor0().map($1)(a))(b);
      })()
    }
  );
};
const applicativeV = dictSemigroup => {
  const applyV1 = applyV(dictSemigroup);
  return {pure: x => Data$dEither.$Either("Right", x), Apply0: () => applyV1};
};
const monoidV = dictSemigroup => {
  const semigroupV1 = semigroupV(dictSemigroup);
  return dictMonoid => {
    const semigroupV2 = semigroupV1(dictMonoid.Semigroup0());
    return {mempty: Data$dEither.$Either("Right", dictMonoid.mempty), Semigroup0: () => semigroupV2};
  };
};
const andThen = v1 => f => {
  if (v1.tag === "Left") { return Data$dEither.$Either("Left", v1._1); }
  if (v1.tag === "Right") { return f(v1._1); }
  $runtime.fail();
};
export {
  V,
  andThen,
  applicativeV,
  applyV,
  bifunctorV,
  eq1V,
  eqV,
  foldableV,
  functorV,
  invalid,
  isValid,
  monoidV,
  newtypeV,
  ord1V,
  ordV,
  semigroupV,
  showV,
  toEither,
  traversableV,
  validation
};
