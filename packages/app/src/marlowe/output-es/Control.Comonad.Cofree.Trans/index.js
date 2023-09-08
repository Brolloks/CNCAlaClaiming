// | This module defines a lazy implementation of the _cofree monad transformer_.
// | Given a `CofreeT` f w a:
// | - 'f' is a `Functor`, generally representing an AST,
// | - 'w' is a 'Comonad',
// | - and 'a' is the type of the annotation.
// |
// | Usually, you would use `CofreeT` to annotate an existing AST with
// | metadata such as source locations, file names, etc.
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
const identity = x => x;
const CofreeT = x => x;
const runCofreeT = v => v();
const tail = dictFunctor => {
  const $0 = dictFunctor.map(Data$dTuple.snd);
  return x => $0(x());
};
const head = dictFunctor => {
  const $0 = dictFunctor.map(Data$dTuple.fst);
  return x => $0(x());
};
const functorCofreeT = dictFunctor => dictFunctor1 => (
  {
    map: f => v => {
      const $0 = dictFunctor.map((() => {
        const $0 = dictFunctor1.map(functorCofreeT(dictFunctor)(dictFunctor1).map(f));
        return v$1 => Data$dTuple.$Tuple(f(v$1._1), $0(v$1._2));
      })());
      return x => $0(v(x));
    }
  }
);
const foldableCofreeT = dictFoldable => dictFoldable1 => (
  {
    foldMap: dictMonoid => {
      const foldMap2 = dictFoldable1.foldMap(dictMonoid);
      const foldMap3 = dictFoldable.foldMap(dictMonoid);
      return f => v => foldMap3(v1 => dictMonoid.Semigroup0().append(f(v1._1))(foldMap2(foldableCofreeT(dictFoldable)(dictFoldable1).foldMap(dictMonoid)(f))(v1._2)))(v());
    },
    foldr: abb => b => Data$dFoldable.foldrDefault(foldableCofreeT(dictFoldable)(dictFoldable1))(abb)(b),
    foldl: bab => b => Data$dFoldable.foldlDefault(foldableCofreeT(dictFoldable)(dictFoldable1))(bab)(b)
  }
);
const comonadTransCofreeT = {
  lower: dictComonad => {
    const $0 = dictComonad.Extend0().Functor0().map(Data$dTuple.fst);
    return x => $0(x());
  }
};
const cofreeT$p = t => v => t;
const extendCofreeT = dictComonad => {
  const Extend0 = dictComonad.Extend0();
  const functorCofreeT1 = functorCofreeT(Extend0.Functor0());
  return dictFunctor => {
    const functorCofreeT2 = functorCofreeT1(dictFunctor);
    return {
      extend: f => v => v1 => Extend0.extend(w => Data$dTuple.$Tuple(f(v$1 => w), dictFunctor.map(extendCofreeT(dictComonad)(dictFunctor).extend(f))(dictComonad.extract(w)._2)))(v()),
      Functor0: () => functorCofreeT2
    };
  };
};
const comonadCofreeT = dictComonad => {
  const $0 = dictComonad.Extend0().Functor0().map(Data$dTuple.fst);
  const extendCofreeT1 = extendCofreeT(dictComonad);
  return dictFunctor => {
    const extendCofreeT2 = extendCofreeT1(dictFunctor);
    return {extract: x => dictComonad.extract($0(x())), Extend0: () => extendCofreeT2};
  };
};
const comonadAskCofreeT = dictFunctor => dictComonadAsk => {
  const Comonad0 = dictComonadAsk.Comonad0();
  const comonadCofreeT1 = comonadCofreeT(Comonad0)(dictFunctor);
  return {
    ask: (() => {
      const $0 = Comonad0.Extend0().Functor0().map(Data$dTuple.snd);
      return x => dictComonadAsk.ask($0(x()));
    })(),
    Comonad0: () => comonadCofreeT1
  };
};
const comonadCofreeCofreeT = dictComonad => {
  const $0 = dictComonad.Extend0().Functor0().map(Data$dTuple.snd);
  const comonadCofreeT1 = comonadCofreeT(dictComonad);
  return dictFunctor => {
    const comonadCofreeT2 = comonadCofreeT1(dictFunctor);
    return {unwrapCofree: x => dictComonad.extract($0(x())), Functor0: () => dictFunctor, Comonad1: () => comonadCofreeT2};
  };
};
const monadTransCofreeT = dictPlus => {
  const empty = dictPlus.empty;
  return {
    lift: dictMonad => {
      const $0 = dictMonad.Bind1().Apply0().Functor0().map(x => Data$dTuple.$Tuple(x, empty));
      return x => {
        const $1 = $0(x);
        return v => $1;
      };
    }
  };
};
const traversableCofreeT = dictTraversable => {
  const functorCofreeT1 = functorCofreeT(dictTraversable.Functor0());
  const foldableCofreeT1 = foldableCofreeT(dictTraversable.Foldable1());
  return dictTraversable1 => {
    const functorCofreeT2 = functorCofreeT1(dictTraversable1.Functor0());
    const foldableCofreeT2 = foldableCofreeT1(dictTraversable1.Foldable1());
    return {
      traverse: dictApplicative => {
        const Apply0 = dictApplicative.Apply0();
        const $0 = Apply0.Functor0();
        const traverse2 = dictTraversable1.traverse(dictApplicative);
        const traverse3 = dictTraversable.traverse(dictApplicative);
        return f => v => $0.map(cofreeT$p)(traverse3(v1 => Apply0.apply($0.map(Data$dTuple.Tuple)(f(v1._1)))(traverse2(traversableCofreeT(dictTraversable)(dictTraversable1).traverse(dictApplicative)(f))(v1._2)))(v()));
      },
      sequence: dictApplicative => traversableCofreeT(dictTraversable)(dictTraversable1).traverse(dictApplicative)(Data$dTraversable.identity),
      Functor0: () => functorCofreeT2,
      Foldable1: () => foldableCofreeT2
    };
  };
};
const cofreeT = CofreeT;
const bimapCofreeT = dictFunctor => dictFunctor1 => nf => nm => v => {
  const $0 = dictFunctor.map((() => {
    const $0 = dictFunctor1.map(bimapCofreeT(dictFunctor)(dictFunctor1)(nf)(nm));
    return m => Data$dTuple.$Tuple(m._1, $0(nf(m._2)));
  })());
  return x => $0(nm(v(x)));
};
const hoistCofreeT = dictFunctor => dictFunctor1 => nm => bimapCofreeT(dictFunctor1)(dictFunctor)(identity)(nm);
const interpretCofreeT = dictFunctor => dictFunctor1 => nf => bimapCofreeT(dictFunctor1)(dictFunctor)(nf)(identity);
const applyCofreeT = dictApply => {
  const Functor0 = dictApply.Functor0();
  return dictApply1 => {
    const functorCofreeT2 = functorCofreeT(Functor0)(dictApply1.Functor0());
    return {
      apply: v => v1 => v2 => dictApply.apply(Functor0.map(v2$1 => v3 => Data$dTuple.$Tuple(
        v2$1._1(v3._1),
        dictApply1.apply(dictApply1.Functor0().map(applyCofreeT(dictApply)(dictApply1).apply)(v2$1._2))(v3._2)
      ))(v()))(v1()),
      Functor0: () => functorCofreeT2
    };
  };
};
const bindCofreeT = dictMonad => {
  const Bind1 = dictMonad.Bind1();
  const applyCofreeT1 = applyCofreeT(Bind1.Apply0());
  return dictAlt => dictApply => {
    const applyCofreeT2 = applyCofreeT1(dictApply);
    return {
      bind: v => f => v1 => Bind1.bind(v())(v2 => {
        const $0 = v2._2;
        return Bind1.bind(f(v2._1)())(v4 => dictMonad.Applicative0().pure(Data$dTuple.$Tuple(
          v4._1,
          dictAlt.alt(v4._2)(dictAlt.Functor0().map(v5 => bindCofreeT(dictMonad)(dictAlt)(dictApply).bind(v5)(f))($0))
        )));
      }),
      Apply0: () => applyCofreeT2
    };
  };
};
const applicativeCofreeT = dictApplicative => {
  const applyCofreeT1 = applyCofreeT(dictApplicative.Apply0());
  return dictApply => {
    const applyCofreeT2 = applyCofreeT1(dictApply);
    return dictPlus => {
      const empty = dictPlus.empty;
      return {pure: a => v => dictApplicative.pure(Data$dTuple.$Tuple(a, empty)), Apply0: () => applyCofreeT2};
    };
  };
};
const monadCofreeT = dictMonad => {
  const applicativeCofreeT1 = applicativeCofreeT(dictMonad.Applicative0());
  const bindCofreeT1 = bindCofreeT(dictMonad);
  return dictPlus => {
    const bindCofreeT2 = bindCofreeT1(dictPlus.Alt0());
    return dictApply => {
      const applicativeCofreeT2 = applicativeCofreeT1(dictApply)(dictPlus);
      const bindCofreeT3 = bindCofreeT2(dictApply);
      return {Applicative0: () => applicativeCofreeT2, Bind1: () => bindCofreeT3};
    };
  };
};
const monadEffectCofreeT = dictMonadEffect => {
  const Monad0 = dictMonadEffect.Monad0();
  const monadCofreeT1 = monadCofreeT(Monad0);
  return dictPlus => {
    const empty = dictPlus.empty;
    const monadCofreeT2 = monadCofreeT1(dictPlus);
    return dictApply => {
      const monadCofreeT3 = monadCofreeT2(dictApply);
      return {
        liftEffect: eff => {
          const $0 = Monad0.Bind1().Apply0().Functor0().map(a => Data$dTuple.$Tuple(a, empty))(dictMonadEffect.liftEffect(eff));
          return v => $0;
        },
        Monad0: () => monadCofreeT3
      };
    };
  };
};
const monadAffCofreeT = dictMonadAff => {
  const MonadEffect0 = dictMonadAff.MonadEffect0();
  const monadEffectCofreeT1 = monadEffectCofreeT(MonadEffect0);
  return dictPlus => {
    const empty = dictPlus.empty;
    const monadEffectCofreeT2 = monadEffectCofreeT1(dictPlus);
    return dictApply => {
      const monadEffectCofreeT3 = monadEffectCofreeT2(dictApply);
      return {
        liftAff: aff => {
          const $0 = MonadEffect0.Monad0().Bind1().Apply0().Functor0().map(a => Data$dTuple.$Tuple(a, empty))(dictMonadAff.liftAff(aff));
          return v => $0;
        },
        MonadEffect0: () => monadEffectCofreeT3
      };
    };
  };
};
export {
  CofreeT,
  applicativeCofreeT,
  applyCofreeT,
  bimapCofreeT,
  bindCofreeT,
  cofreeT,
  cofreeT$p,
  comonadAskCofreeT,
  comonadCofreeCofreeT,
  comonadCofreeT,
  comonadTransCofreeT,
  extendCofreeT,
  foldableCofreeT,
  functorCofreeT,
  head,
  hoistCofreeT,
  identity,
  interpretCofreeT,
  monadAffCofreeT,
  monadCofreeT,
  monadEffectCofreeT,
  monadTransCofreeT,
  runCofreeT,
  tail,
  traversableCofreeT
};
