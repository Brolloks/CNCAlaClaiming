import * as Data$dProfunctor from "../Data.Profunctor/index.js";
const $DualD = (_1, _2) => ({tag: "DualD", _1, _2});
const DualD = value0 => value1 => $DualD(value0, value1);
const Dual = x => x;
const serializer = v => v._2;
const profunctorDualD = dictFunctor => ({dimap: l => r => v => $DualD(dictFunctor.map(r)(v._1), x => v._2(l(x)))});
const parser = v => v._1;
const newtypeDual = {Coercible0: () => {}};
const lazyDualD = dictLazy => ({defer: f => $DualD(dictLazy.defer(v => f()._1), x => f()._2(x))});
const lazyDual = dictLazy => ({defer: f => $DualD(dictLazy.defer(v => f()._1), x => f()._2(x))});
const invariantFunctor = dictFunctor => ({imap: f => g => v => $DualD(dictFunctor.map(f)(v._1), x => v._2(g(x)))});
const functorDualD = dictFunctor => ({map: f => m => $DualD(dictFunctor.map(f)(m._1), m._2)});
const dual = prs => DualD(prs);
const dual$p = dictApplicative => {
  const pure = dictApplicative.pure;
  return prs => $DualD(prs, pure);
};
const hoistParser = f => v => $DualD(f(v._1), v._2);
const hoistSerializer = f => v => $DualD(v._1, x => f(v._2(x)));
const semigroupoidDual = dictMonad => {
  const $0 = dictMonad.Bind1();
  return dictSemigroupoid => (
    {
      compose: v => v1 => $DualD(
        dictSemigroupoid.compose(v._1)(v1._1),
        (() => {
          const $1 = v1._2;
          return a => $0.bind(v._2(a))($1);
        })()
      )
    }
  );
};
const diverge = dictFunctor => {
  const lcmap = Data$dProfunctor.lcmap({dimap: l => r => v => $DualD(dictFunctor.map(r)(v._1), x => v._2(l(x)))});
  return dictProfunctor => f => lcmap(f);
};
const categoryDual = dictCategory => {
  const identity = dictCategory.identity;
  const Semigroupoid0 = dictCategory.Semigroupoid0();
  return dictMonad => {
    const $0 = dictMonad.Bind1();
    const semigroupoidDual1 = {
      compose: v => v1 => $DualD(
        Semigroupoid0.compose(v._1)(v1._1),
        (() => {
          const $1 = v1._2;
          return a => $0.bind(v._2(a))($1);
        })()
      )
    };
    return {identity: $DualD(identity, dictMonad.Applicative0().pure), Semigroupoid0: () => semigroupoidDual1};
  };
};
const applyDualD = dictApply => {
  const $0 = dictApply.Functor0();
  const functorDualD1 = {map: f => m => $DualD($0.map(f)(m._1), m._2)};
  return dictApplicative => {
    const Apply0 = dictApplicative.Apply0();
    return dictSemigroup => {
      const append = dictSemigroup.append;
      return {apply: v => v1 => $DualD(dictApply.apply(v._1)(v1._1), i => Apply0.apply(Apply0.Functor0().map(append)(v._2(i)))(v1._2(i))), Functor0: () => functorDualD1};
    };
  };
};
const applicativeDualD = dictApplicative => {
  const applyDualD1 = applyDualD(dictApplicative.Apply0());
  return dictApplicative1 => {
    const applyDualD2 = applyDualD1(dictApplicative1);
    return dictMonoid => {
      const mempty = dictMonoid.mempty;
      const applyDualD3 = applyDualD2(dictMonoid.Semigroup0());
      return {
        pure: a => $DualD(
          dictApplicative.pure(a),
          (() => {
            const $0 = dictApplicative1.pure(mempty);
            return v => $0;
          })()
        ),
        Apply0: () => applyDualD3
      };
    };
  };
};
const pureDual = dictApplicative => {
  const applicativeDualD1 = applicativeDualD(dictApplicative);
  return dictApplicative1 => {
    const applicativeDualD2 = applicativeDualD1(dictApplicative1);
    return dictMonoid => applicativeDualD2(dictMonoid).pure;
  };
};
const altDualD = dictAlt => {
  const $0 = dictAlt.Functor0();
  const functorDualD1 = {map: f => m => $DualD($0.map(f)(m._1), m._2)};
  return {alt: v => v1 => $DualD(dictAlt.alt(v._1)(v1._1), v._2), Functor0: () => functorDualD1};
};
const plusDualD = dictPlus => {
  const empty = dictPlus.empty;
  return dictAlt => {
    const $0 = dictAlt.Functor0();
    const functorDualD1 = {map: f => m => $DualD($0.map(f)(m._1), m._2)};
    const altDualD1 = {alt: v => v1 => $DualD(dictAlt.alt(v._1)(v1._1), v._2), Functor0: () => functorDualD1};
    return dictMonoid => (
      {
        empty: $DualD(
          empty,
          (() => {
            const $1 = dictMonoid.mempty;
            return v => $1;
          })()
        ),
        Alt0: () => altDualD1
      }
    );
  };
};
export {
  $DualD,
  Dual,
  DualD,
  altDualD,
  applicativeDualD,
  applyDualD,
  categoryDual,
  diverge,
  dual,
  dual$p,
  functorDualD,
  hoistParser,
  hoistSerializer,
  invariantFunctor,
  lazyDual,
  lazyDualD,
  newtypeDual,
  parser,
  plusDualD,
  profunctorDualD,
  pureDual,
  semigroupoidDual,
  serializer
};
