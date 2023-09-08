import * as $runtime from "../runtime.js";
import * as Control$dApplicative from "../Control.Applicative/index.js";
import * as Control$dApply from "../Control.Apply/index.js";
import * as Control$dMonad$dRec$dClass from "../Control.Monad.Rec.Class/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dSemigroup from "../Data.Semigroup/index.js";
const iterateUntilM = dictMonadRec => p => f => dictMonadRec.tailRecM(v => {
  if (p(v)) { return dictMonadRec.Monad0().Applicative0().pure(Control$dMonad$dRec$dClass.$Step("Done", v)); }
  return dictMonadRec.Monad0().Bind1().Apply0().Functor0().map(Control$dMonad$dRec$dClass.Loop)(f(v));
});
const iterateUntil = dictMonadRec => p => x => dictMonadRec.Monad0().Bind1().bind(x)(iterateUntilM(dictMonadRec)(p)(v => x));
const iterateWhile = dictMonadRec => p => iterateUntil(dictMonadRec)(a => !p(a));
const orM = dictMonadRec => {
  const $0 = dictMonadRec.Monad0().Bind1();
  return dictMonadRec.tailRecM(v => {
    if (v.tag === "Nil") { return dictMonadRec.Monad0().Applicative0().pure(Control$dMonad$dRec$dClass.$Step("Done", false)); }
    if (v.tag === "Cons") {
      const $1 = dictMonadRec.Monad0().Applicative0().pure(Control$dMonad$dRec$dClass.$Step("Done", true));
      const $2 = dictMonadRec.Monad0().Applicative0().pure(Control$dMonad$dRec$dClass.$Step("Loop", v._2));
      return $0.bind(v._1)(cond$p => {
        if (cond$p) { return $1; }
        return $2;
      });
    }
    $runtime.fail();
  });
};
const unfoldrM$p = dictMonadRec => dictApplicative => dictMonoid => {
  const mempty = dictMonoid.mempty;
  return f => b => dictMonadRec.tailRecM(o => {
    const $0 = o.a;
    return dictMonadRec.Monad0().Bind1().bind(f(o.b))((() => {
      const $1 = dictMonadRec.Monad0().Applicative0().pure(Control$dMonad$dRec$dClass.$Step("Done", $0));
      return v2 => {
        if (v2.tag === "Nothing") { return $1; }
        if (v2.tag === "Just") {
          return dictMonadRec.Monad0().Applicative0().pure(Control$dMonad$dRec$dClass.$Step(
            "Loop",
            {a: dictMonoid.Semigroup0().append($0)(dictApplicative.pure(v2._1._1)), b: v2._1._2}
          ));
        }
        $runtime.fail();
      };
    })());
  })({a: mempty, b});
};
const unfoldrM = dictMonadRec => unfoldrM$p(dictMonadRec)(Control$dApplicative.applicativeArray)(Data$dMonoid.monoidArray);
const untilJust = dictMonadRec => m => dictMonadRec.tailRecM((() => {
  const $0 = dictMonadRec.Monad0().Bind1().bind(m)((() => {
    const $0 = dictMonadRec.Monad0().Applicative0().pure(Control$dMonad$dRec$dClass.$Step("Loop", undefined));
    return v2 => {
      if (v2.tag === "Nothing") { return $0; }
      if (v2.tag === "Just") { return dictMonadRec.Monad0().Applicative0().pure(Control$dMonad$dRec$dClass.$Step("Done", v2._1)); }
      $runtime.fail();
    };
  })());
  return v => $0;
})())();
const untilM_ = dictMonadRec => {
  const Bind1 = dictMonadRec.Monad0().Bind1();
  const Apply0 = Bind1.Apply0();
  const $0 = Apply0.Functor0();
  return f => p => Apply0.apply(Apply0.Functor0().map(v => Control$dApply.identity)(f))(dictMonadRec.tailRecM(x => {
    const $1 = dictMonadRec.Monad0().Applicative0().pure(Control$dMonad$dRec$dClass.$Step("Done", x));
    const $2 = $0.map(v => Control$dMonad$dRec$dClass.$Step("Loop", x))(f);
    return Bind1.bind(p)(cond$p => {
      if (cond$p) { return $1; }
      return $2;
    });
  })());
};
const whileJust_ = dictMonadRec => {
  const Bind1 = dictMonadRec.Monad0().Bind1();
  const $0 = Bind1.Apply0().Functor0();
  return p => f => dictMonadRec.tailRecM((() => {
    const $1 = Bind1.bind(p)((() => {
      const $1 = dictMonadRec.Monad0().Applicative0().pure(Control$dMonad$dRec$dClass.$Step("Done", undefined));
      return v2 => {
        if (v2.tag === "Nothing") { return $1; }
        if (v2.tag === "Just") { return $0.map(v => Control$dMonad$dRec$dClass.$Step("Loop", undefined))(f(v2._1)); }
        $runtime.fail();
      };
    })());
    return v => $1;
  })())();
};
const unfoldM_ = dictMonadRec => {
  const $0 = whileJust_(dictMonadRec);
  const $1 = dictMonadRec.Monad0().Applicative0().pure;
  return a => $0(a)($1);
};
const whileM_ = dictMonadRec => {
  const Bind1 = dictMonadRec.Monad0().Bind1();
  const $0 = Bind1.Apply0().Functor0();
  return p => f => dictMonadRec.tailRecM(x => {
    const $1 = $0.map(v => Control$dMonad$dRec$dClass.$Step("Loop", x))(f);
    const $2 = dictMonadRec.Monad0().Applicative0().pure(Control$dMonad$dRec$dClass.$Step("Done", x));
    return Bind1.bind(p)(cond$p => {
      if (cond$p) { return $1; }
      return $2;
    });
  })();
};
const untilM$p = dictMonadRec => {
  const Bind1 = dictMonadRec.Monad0().Bind1();
  return dictApplicative => dictSemigroup => f => p => Bind1.bind(f)((() => {
    const $0 = dictMonadRec.tailRecM(x => {
      const $0 = dictMonadRec.Monad0().Applicative0().pure(Control$dMonad$dRec$dClass.$Step("Done", x));
      const $1 = dictMonadRec.Monad0().Bind1().bind(f)(x$1 => dictMonadRec.Monad0().Applicative0().pure(Control$dMonad$dRec$dClass.$Step(
        "Loop",
        dictSemigroup.append(x)(dictApplicative.pure(x$1))
      )));
      return Bind1.bind(p)(cond$p => {
        if (cond$p) { return $0; }
        return $1;
      });
    });
    return x => $0(dictApplicative.pure(x));
  })());
};
const untilM = dictMonadRec => untilM$p(dictMonadRec)(Control$dApplicative.applicativeArray)(Data$dSemigroup.semigroupArray);
const whileJust$p = dictMonadRec => dictApplicative => dictMonoid => {
  const $0 = dictMonoid.Semigroup0();
  const mempty = dictMonoid.mempty;
  return p => f => dictMonadRec.tailRecM(xs => dictMonadRec.Monad0().Bind1().bind(p)((() => {
    const $1 = dictMonadRec.Monad0().Applicative0().pure(Control$dMonad$dRec$dClass.$Step("Done", xs));
    return v2 => {
      if (v2.tag === "Nothing") { return $1; }
      if (v2.tag === "Just") {
        return dictMonadRec.Monad0().Bind1().bind(f(v2._1))(x => dictMonadRec.Monad0().Applicative0().pure(Control$dMonad$dRec$dClass.$Step(
          "Loop",
          $0.append(xs)(dictApplicative.pure(x))
        )));
      }
      $runtime.fail();
    };
  })()))(mempty);
};
const unfoldM$p = dictMonadRec => {
  const pure = dictMonadRec.Monad0().Applicative0().pure;
  return dictApplicative => dictMonoid => {
    const $0 = whileJust$p(dictMonadRec)(dictApplicative)(dictMonoid);
    return a => $0(a)(pure);
  };
};
const unfoldM = dictMonadRec => unfoldM$p(dictMonadRec)(Control$dApplicative.applicativeArray)(Data$dMonoid.monoidArray);
const whileJust = dictMonadRec => whileJust$p(dictMonadRec)(Control$dApplicative.applicativeArray)(Data$dMonoid.monoidArray);
const whileM$p = dictMonadRec => {
  const $0 = dictMonadRec.Monad0().Bind1();
  return dictApplicative => dictMonoid => {
    const $1 = dictMonoid.Semigroup0();
    const mempty = dictMonoid.mempty;
    return p => f => dictMonadRec.tailRecM(x => {
      const $2 = dictMonadRec.Monad0().Bind1().bind(f)(x$1 => dictMonadRec.Monad0().Applicative0().pure(Control$dMonad$dRec$dClass.$Step(
        "Loop",
        $1.append(x)(dictApplicative.pure(x$1))
      )));
      const $3 = dictMonadRec.Monad0().Applicative0().pure(Control$dMonad$dRec$dClass.$Step("Done", x));
      return $0.bind(p)(cond$p => {
        if (cond$p) { return $2; }
        return $3;
      });
    })(mempty);
  };
};
const whileM = dictMonadRec => whileM$p(dictMonadRec)(Control$dApplicative.applicativeArray)(Data$dMonoid.monoidArray);
const anyPM = dictMonadRec => {
  const $0 = dictMonadRec.Monad0().Bind1();
  return mps => x => dictMonadRec.tailRecM(v => {
    if (v.tag === "Nil") { return dictMonadRec.Monad0().Applicative0().pure(Control$dMonad$dRec$dClass.$Step("Done", false)); }
    if (v.tag === "Cons") {
      const $1 = dictMonadRec.Monad0().Applicative0().pure(Control$dMonad$dRec$dClass.$Step("Done", true));
      const $2 = dictMonadRec.Monad0().Applicative0().pure(Control$dMonad$dRec$dClass.$Step("Loop", v._2));
      return $0.bind(v._1(x))(cond$p => {
        if (cond$p) { return $1; }
        return $2;
      });
    }
    $runtime.fail();
  })(mps);
};
const anyM = dictMonadRec => {
  const $0 = dictMonadRec.Monad0().Bind1();
  return p => dictMonadRec.tailRecM(v => {
    if (v.tag === "Nil") { return dictMonadRec.Monad0().Applicative0().pure(Control$dMonad$dRec$dClass.$Step("Done", false)); }
    if (v.tag === "Cons") {
      const $1 = dictMonadRec.Monad0().Applicative0().pure(Control$dMonad$dRec$dClass.$Step("Done", true));
      const $2 = dictMonadRec.Monad0().Applicative0().pure(Control$dMonad$dRec$dClass.$Step("Loop", v._2));
      return $0.bind(p(v._1))(cond$p => {
        if (cond$p) { return $1; }
        return $2;
      });
    }
    $runtime.fail();
  });
};
const andM = dictMonadRec => {
  const $0 = dictMonadRec.Monad0().Bind1();
  return dictMonadRec.tailRecM(v => {
    if (v.tag === "Nil") { return dictMonadRec.Monad0().Applicative0().pure(Control$dMonad$dRec$dClass.$Step("Done", true)); }
    if (v.tag === "Cons") {
      const $1 = dictMonadRec.Monad0().Applicative0().pure(Control$dMonad$dRec$dClass.$Step("Loop", v._2));
      const $2 = dictMonadRec.Monad0().Applicative0().pure(Control$dMonad$dRec$dClass.$Step("Done", false));
      return $0.bind(v._1)(cond$p => {
        if (cond$p) { return $1; }
        return $2;
      });
    }
    $runtime.fail();
  });
};
const allPM = dictMonadRec => {
  const $0 = dictMonadRec.Monad0().Bind1();
  return mps => x => dictMonadRec.tailRecM(v => {
    if (v.tag === "Nil") { return dictMonadRec.Monad0().Applicative0().pure(Control$dMonad$dRec$dClass.$Step("Done", true)); }
    if (v.tag === "Cons") {
      const $1 = dictMonadRec.Monad0().Applicative0().pure(Control$dMonad$dRec$dClass.$Step("Loop", v._2));
      const $2 = dictMonadRec.Monad0().Applicative0().pure(Control$dMonad$dRec$dClass.$Step("Done", false));
      return $0.bind(v._1(x))(cond$p => {
        if (cond$p) { return $1; }
        return $2;
      });
    }
    $runtime.fail();
  })(mps);
};
const allM = dictMonadRec => {
  const $0 = dictMonadRec.Monad0().Bind1();
  return p => dictMonadRec.tailRecM(v => {
    if (v.tag === "Nil") { return dictMonadRec.Monad0().Applicative0().pure(Control$dMonad$dRec$dClass.$Step("Done", true)); }
    if (v.tag === "Cons") {
      const $1 = dictMonadRec.Monad0().Applicative0().pure(Control$dMonad$dRec$dClass.$Step("Loop", v._2));
      const $2 = dictMonadRec.Monad0().Applicative0().pure(Control$dMonad$dRec$dClass.$Step("Done", false));
      return $0.bind(p(v._1))(cond$p => {
        if (cond$p) { return $1; }
        return $2;
      });
    }
    $runtime.fail();
  });
};
export {
  allM,
  allPM,
  andM,
  anyM,
  anyPM,
  iterateUntil,
  iterateUntilM,
  iterateWhile,
  orM,
  unfoldM,
  unfoldM$p,
  unfoldM_,
  unfoldrM,
  unfoldrM$p,
  untilJust,
  untilM,
  untilM$p,
  untilM_,
  whileJust,
  whileJust$p,
  whileJust_,
  whileM,
  whileM$p,
  whileM_
};
