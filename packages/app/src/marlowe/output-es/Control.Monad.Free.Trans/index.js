// | This module defines a stack-safe implementation of the _free monad transformer_.
import * as $runtime from "../runtime.js";
import * as Control$dBind from "../Control.Bind/index.js";
import * as Control$dMonad$dRec$dClass from "../Control.Monad.Rec.Class/index.js";
import * as Data$dEither from "../Data.Either/index.js";
const $Bound = (_1, _2) => ({tag: "Bound", _1, _2});
const $FreeT = (tag, _1) => ({tag, _1});
const identity = x => x;
const Bound = value0 => value1 => $Bound(value0, value1);
const FreeT = value0 => $FreeT("FreeT", value0);
const Bind = value0 => $FreeT("Bind", value0);
const monadTransFreeT = dictFunctor => ({lift: dictMonad => ma => $FreeT("FreeT", v => dictMonad.Bind1().Apply0().Functor0().map(Data$dEither.Left)(ma))});
const freeT = FreeT;
const functorFreeT = dictFunctor => dictFunctor1 => (
  {
    map: v => v1 => {
      if (v1.tag === "FreeT") {
        return $FreeT(
          "FreeT",
          v2 => dictFunctor1.map((() => {
            const $0 = dictFunctor.map(functorFreeT(dictFunctor)(dictFunctor1).map(v));
            return v2$1 => {
              if (v2$1.tag === "Left") { return Data$dEither.$Either("Left", v(v2$1._1)); }
              if (v2$1.tag === "Right") { return Data$dEither.$Either("Right", $0(v2$1._1)); }
              $runtime.fail();
            };
          })())(v1._1())
        );
      }
      if (v1.tag === "Bind") {
        return $FreeT(
          "Bind",
          $Bound(
            v1._1._1,
            (() => {
              const $0 = functorFreeT(dictFunctor)(dictFunctor1).map(v);
              return x => $0(v1._1._2(x));
            })()
          )
        );
      }
      $runtime.fail();
    }
  }
);
const bimapFreeT = dictFunctor => dictFunctor1 => v => v1 => v2 => {
  if (v2.tag === "Bind") {
    const $0 = bimapFreeT(dictFunctor)(dictFunctor1)(v)(v1);
    const $1 = bimapFreeT(dictFunctor)(dictFunctor1)(v)(v1);
    return $FreeT("Bind", $Bound(x => $0(v2._1._1(x)), x => $1(v2._1._2(x))));
  }
  if (v2.tag === "FreeT") {
    return $FreeT(
      "FreeT",
      v3 => dictFunctor1.map((() => {
        const $0 = dictFunctor.map(bimapFreeT(dictFunctor)(dictFunctor1)(v)(v1));
        return m => {
          if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
          if (m.tag === "Right") { return Data$dEither.$Either("Right", v($0(m._1))); }
          $runtime.fail();
        };
      })())(v1(v2._1()))
    );
  }
  $runtime.fail();
};
const hoistFreeT = dictFunctor => dictFunctor1 => bimapFreeT(dictFunctor)(dictFunctor1)(identity);
const interpret = dictFunctor => dictFunctor1 => nf => bimapFreeT(dictFunctor)(dictFunctor1)(nf)(identity);
const monadFreeT = dictFunctor => dictMonad => ({Applicative0: () => applicativeFreeT(dictFunctor)(dictMonad), Bind1: () => bindFreeT(dictFunctor)(dictMonad)});
const bindFreeT = dictFunctor => dictMonad => (
  {
    bind: v => v1 => {
      if (v.tag === "Bind") { return $FreeT("Bind", $Bound(v._1._1, x => $FreeT("Bind", $Bound(v3 => v._1._2(x), v1)))); }
      return $FreeT("Bind", $Bound(v2 => v, v1));
    },
    Apply0: () => applyFreeT(dictFunctor)(dictMonad)
  }
);
const applyFreeT = dictFunctor => dictMonad => {
  const functorFreeT2 = functorFreeT(dictFunctor)(dictMonad.Bind1().Apply0().Functor0());
  return {
    apply: (() => {
      const $0 = bindFreeT(dictFunctor)(dictMonad);
      return f => a => $0.bind(f)(f$p => $0.bind(a)(a$p => applicativeFreeT(dictFunctor)(dictMonad).pure(f$p(a$p))));
    })(),
    Functor0: () => functorFreeT2
  };
};
const applicativeFreeT = dictFunctor => dictMonad => (
  {pure: a => $FreeT("FreeT", v => dictMonad.Applicative0().pure(Data$dEither.$Either("Left", a))), Apply0: () => applyFreeT(dictFunctor)(dictMonad)}
);
const liftFreeT = dictFunctor => dictMonad => {
  const pure1 = applicativeFreeT(dictFunctor)(dictMonad).pure;
  return fa => $FreeT("FreeT", v => dictMonad.Applicative0().pure(Data$dEither.$Either("Right", dictFunctor.map(pure1)(fa))));
};
const resume = dictFunctor => dictMonadRec => {
  const Monad0 = dictMonadRec.Monad0();
  const Bind1 = Monad0.Bind1();
  const $0 = Monad0.Applicative0();
  const $1 = bindFreeT(dictFunctor)(Monad0);
  return dictMonadRec.tailRecM(v => {
    if (v.tag === "FreeT") { return Bind1.Apply0().Functor0().map(Control$dMonad$dRec$dClass.Done)(v._1()); }
    if (v.tag === "Bind") {
      const v2 = v._1._1();
      if (v2.tag === "FreeT") {
        return Bind1.bind(v2._1())(v3 => {
          if (v3.tag === "Left") { return $0.pure(Control$dMonad$dRec$dClass.$Step("Loop", v._1._2(v3._1))); }
          if (v3.tag === "Right") { return $0.pure(Control$dMonad$dRec$dClass.$Step("Done", Data$dEither.$Either("Right", dictFunctor.map(h => $1.bind(h)(v._1._2))(v3._1)))); }
          $runtime.fail();
        });
      }
      if (v2.tag === "Bind") { return $0.pure(Control$dMonad$dRec$dClass.$Step("Loop", $1.bind(v2._1._1())(z => $1.bind(v2._1._2(z))(v._1._2)))); }
    }
    $runtime.fail();
  });
};
const runFreeT = dictFunctor => dictMonadRec => {
  const Monad0 = dictMonadRec.Monad0();
  const Bind1 = Monad0.Bind1();
  const resume2 = resume(dictFunctor)(dictMonadRec);
  return interp => dictMonadRec.tailRecM(a => Bind1.bind(resume2(a))(v => {
    if (v.tag === "Left") { return Monad0.Applicative0().pure(Control$dMonad$dRec$dClass.$Step("Done", v._1)); }
    if (v.tag === "Right") { return Bind1.Apply0().Functor0().map(Control$dMonad$dRec$dClass.Loop)(interp(v._1)); }
    $runtime.fail();
  }));
};
const semigroupFreeT = dictFunctor => dictMonad => {
  const $0 = applyFreeT(dictFunctor)(dictMonad);
  return dictSemigroup => (
    {
      append: (() => {
        const $1 = dictSemigroup.append;
        return a => b => $0.apply($0.Functor0().map($1)(a))(b);
      })()
    }
  );
};
const monadAskFreeT = dictFunctor => dictMonadAsk => {
  const Monad0 = dictMonadAsk.Monad0();
  const monadFreeT2 = {Applicative0: () => applicativeFreeT(dictFunctor)(Monad0), Bind1: () => bindFreeT(dictFunctor)(Monad0)};
  return {ask: monadTransFreeT(dictFunctor).lift(Monad0)(dictMonadAsk.ask), Monad0: () => monadFreeT2};
};
const monadEffectFreeT = dictFunctor => dictMonadEffect => {
  const Monad0 = dictMonadEffect.Monad0();
  const monadFreeT2 = {Applicative0: () => applicativeFreeT(dictFunctor)(Monad0), Bind1: () => bindFreeT(dictFunctor)(Monad0)};
  return {
    liftEffect: (() => {
      const $0 = monadTransFreeT(dictFunctor).lift(Monad0);
      return x => $0(dictMonadEffect.liftEffect(x));
    })(),
    Monad0: () => monadFreeT2
  };
};
const monadAffFreeT = dictFunctor => dictMonadAff => {
  const MonadEffect0 = dictMonadAff.MonadEffect0();
  const monadEffectFreeT2 = monadEffectFreeT(dictFunctor)(MonadEffect0);
  return {
    liftAff: (() => {
      const $0 = monadTransFreeT(dictFunctor).lift(MonadEffect0.Monad0());
      return x => $0(dictMonadAff.liftAff(x));
    })(),
    MonadEffect0: () => monadEffectFreeT2
  };
};
const monadStateFreeT = dictFunctor => dictMonadState => {
  const Monad0 = dictMonadState.Monad0();
  const monadFreeT2 = {Applicative0: () => applicativeFreeT(dictFunctor)(Monad0), Bind1: () => bindFreeT(dictFunctor)(Monad0)};
  return {
    state: (() => {
      const $0 = monadTransFreeT(dictFunctor).lift(Monad0);
      return x => $0(dictMonadState.state(x));
    })(),
    Monad0: () => monadFreeT2
  };
};
const monadTellFreeT = dictFunctor => dictMonadTell => {
  const Monad1 = dictMonadTell.Monad1();
  const Semigroup0 = dictMonadTell.Semigroup0();
  const monadFreeT2 = {Applicative0: () => applicativeFreeT(dictFunctor)(Monad1), Bind1: () => bindFreeT(dictFunctor)(Monad1)};
  return {
    tell: (() => {
      const $0 = monadTransFreeT(dictFunctor).lift(Monad1);
      return x => $0(dictMonadTell.tell(x));
    })(),
    Semigroup0: () => Semigroup0,
    Monad1: () => monadFreeT2
  };
};
const monadThrowFreeT = dictFunctor => dictMonadThrow => {
  const Monad0 = dictMonadThrow.Monad0();
  const monadFreeT2 = {Applicative0: () => applicativeFreeT(dictFunctor)(Monad0), Bind1: () => bindFreeT(dictFunctor)(Monad0)};
  return {
    throwError: (() => {
      const $0 = monadTransFreeT(dictFunctor).lift(Monad0);
      return x => $0(dictMonadThrow.throwError(x));
    })(),
    Monad0: () => monadFreeT2
  };
};
const monadRecFreeT = dictFunctor => dictMonad => {
  const monadFreeT2 = {Applicative0: () => applicativeFreeT(dictFunctor)(dictMonad), Bind1: () => bindFreeT(dictFunctor)(dictMonad)};
  return {
    tailRecM: f => {
      const go = s => bindFreeT(dictFunctor)(dictMonad).bind(f(s))(v => {
        if (v.tag === "Loop") { return go(v._1); }
        if (v.tag === "Done") { return applicativeFreeT(dictFunctor)(dictMonad).pure(v._1); }
        $runtime.fail();
      });
      return go;
    },
    Monad0: () => monadFreeT2
  };
};
const monoidFreeT = dictFunctor => dictMonad => {
  const semigroupFreeT2 = semigroupFreeT(dictFunctor)(dictMonad);
  return dictMonoid => {
    const semigroupFreeT3 = semigroupFreeT2(dictMonoid.Semigroup0());
    return {mempty: applicativeFreeT(dictFunctor)(dictMonad).pure(dictMonoid.mempty), Semigroup0: () => semigroupFreeT3};
  };
};
const substFreeT = dictMonad => {
  const $0 = dictMonad.Bind1().Apply0().Functor0();
  return dictFunctor => {
    const $1 = bindFreeT(dictFunctor)(dictMonad);
    return v => v1 => {
      if (v1.tag === "Bind") {
        const $2 = substFreeT(dictMonad)(dictFunctor)(v);
        const $3 = substFreeT(dictMonad)(dictFunctor)(v);
        return $FreeT("Bind", $Bound(x => $2(v1._1._1(x)), x => $3(v1._1._2(x))));
      }
      if (v1.tag === "FreeT") {
        return $1.bind($FreeT(
          "FreeT",
          v2 => $0.map(v3 => {
            if (v3.tag === "Left") { return Data$dEither.$Either("Left", applicativeFreeT(dictFunctor)(dictMonad).pure(v3._1)); }
            if (v3.tag === "Right") {
              const $2 = v3._1;
              return Data$dEither.$Either("Left", $FreeT("Bind", $Bound(v4 => v($2), substFreeT(dictMonad)(dictFunctor)(v))));
            }
            $runtime.fail();
          })(v1._1())
        ))(Control$dBind.identity);
      }
      $runtime.fail();
    };
  };
};
export {
  $Bound,
  $FreeT,
  Bind,
  Bound,
  FreeT,
  applicativeFreeT,
  applyFreeT,
  bimapFreeT,
  bindFreeT,
  freeT,
  functorFreeT,
  hoistFreeT,
  identity,
  interpret,
  liftFreeT,
  monadAffFreeT,
  monadAskFreeT,
  monadEffectFreeT,
  monadFreeT,
  monadRecFreeT,
  monadStateFreeT,
  monadTellFreeT,
  monadThrowFreeT,
  monadTransFreeT,
  monoidFreeT,
  resume,
  runFreeT,
  semigroupFreeT,
  substFreeT
};
