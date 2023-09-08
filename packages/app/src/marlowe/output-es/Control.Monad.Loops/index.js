import * as $runtime from "../runtime.js";
import * as Control$dApplicative from "../Control.Applicative/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
const whileM_ = dictMonad => {
  const $0 = dictMonad.Bind1();
  return p => f => $0.bind(p)(v => {
    if (v) { return $0.bind(f)(v1 => whileM_(dictMonad)(p)(f)); }
    return dictMonad.Applicative0().pure();
  });
};
const whileM$p = dictMonad => {
  const $0 = dictMonad.Bind1();
  return dictApplicative => dictMonoid => {
    const mempty = dictMonoid.mempty;
    return p => f => {
      const loop = acc => $0.bind(p)(v => {
        if (v) { return $0.bind(f)(x => loop(dictMonoid.Semigroup0().append(dictApplicative.pure(x))(acc))); }
        return dictMonad.Applicative0().pure(acc);
      });
      return loop(mempty);
    };
  };
};
const whileM = dictMonad => {
  const $0 = dictMonad.Bind1();
  return p => f => {
    const loop = acc => $0.bind(p)(v => {
      if (v) { return $0.bind(f)(x => loop([x, ...acc])); }
      return dictMonad.Applicative0().pure(acc);
    });
    return loop([]);
  };
};
const whileJust_ = dictMonad => {
  const $0 = dictMonad.Bind1();
  return p => f => $0.bind(p)((() => {
    const $1 = dictMonad.Applicative0().pure();
    return v2 => {
      if (v2.tag === "Nothing") { return $1; }
      if (v2.tag === "Just") { return $0.bind(f(v2._1))(v1 => whileJust_(dictMonad)(p)(f)); }
      $runtime.fail();
    };
  })());
};
const whileJust$p = dictMonad => {
  const $0 = dictMonad.Bind1();
  const $1 = dictMonad.Applicative0();
  return dictApplicative => dictMonoid => {
    const mempty = dictMonoid.mempty;
    return p => f => $0.bind(p)((() => {
      const $2 = $1.pure(mempty);
      return v2 => {
        if (v2.tag === "Nothing") { return $2; }
        if (v2.tag === "Just") {
          return $0.bind(f(v2._1))(x => $0.bind(whileJust$p(dictMonad)(dictApplicative)(dictMonoid)(p)(f))(x$1 => $1.pure(dictMonoid.Semigroup0().append(dictApplicative.pure(x))(x$1))));
        }
        $runtime.fail();
      };
    })());
  };
};
const whileJust = dictMonad => whileJust$p(dictMonad)(Control$dApplicative.applicativeArray)(Data$dMonoid.monoidArray);
const untilM_ = dictMonad => {
  const $0 = dictMonad.Bind1();
  return f => p => $0.bind(f)(v => $0.bind(p)(v1 => {
    if (v1) { return untilM_(dictMonad)(f)(p); }
    return dictMonad.Applicative0().pure();
  }));
};
const untilM$p = dictMonad => {
  const Bind1 = dictMonad.Bind1();
  return dictApplicative => dictMonoid => {
    const mempty = dictMonoid.mempty;
    return f => p => {
      const loop = acc => Bind1.bind(Bind1.Apply0().Functor0().map(x => dictMonoid.Semigroup0().append(dictApplicative.pure(x))(acc))(f))(acc$p => Bind1.bind(p)(v => {
        if (v) { return dictMonad.Applicative0().pure(acc$p); }
        return loop(acc$p);
      }));
      return loop(mempty);
    };
  };
};
const untilM = dictMonad => untilM$p(dictMonad)(Control$dApplicative.applicativeArray)(Data$dMonoid.monoidArray);
const untilJust = dictMonad => {
  const pure = dictMonad.Applicative0().pure;
  return m => dictMonad.Bind1().bind(m)(x => {
    const $0 = untilJust(dictMonad)(m);
    if (x.tag === "Nothing") { return $0; }
    if (x.tag === "Just") { return pure(x._1); }
    $runtime.fail();
  });
};
const unfoldrM$p = dictMonad => {
  const $0 = dictMonad.Bind1();
  const $1 = dictMonad.Applicative0();
  return dictApplicative => dictMonoid => {
    const mempty = dictMonoid.mempty;
    return f => {
      const go = z => $0.bind(f(z))((() => {
        const $2 = $1.pure(mempty);
        return v2 => {
          if (v2.tag === "Nothing") { return $2; }
          if (v2.tag === "Just") {
            const $3 = v2._1._1;
            return $0.bind(go(v2._1._2))(x => $1.pure(dictMonoid.Semigroup0().append(dictApplicative.pure($3))(x)));
          }
          $runtime.fail();
        };
      })());
      return go;
    };
  };
};
const unfoldrM = dictMonad => unfoldrM$p(dictMonad)(Control$dApplicative.applicativeArray)(Data$dMonoid.monoidArray);
const unfoldM_ = dictMonad => {
  const $0 = whileJust_(dictMonad);
  const $1 = dictMonad.Applicative0().pure;
  return a => $0(a)($1);
};
const unfoldM$p = dictMonad => {
  const whileJust$p1 = whileJust$p(dictMonad);
  const pure = dictMonad.Applicative0().pure;
  return dictApplicative => {
    const whileJust$p2 = whileJust$p1(dictApplicative);
    return dictMonoid => {
      const $0 = whileJust$p2(dictMonoid);
      return a => $0(a)(pure);
    };
  };
};
const unfoldM = dictMonad => unfoldM$p(dictMonad)(Control$dApplicative.applicativeArray)(Data$dMonoid.monoidArray);
const orM = dictMonad => {
  const $0 = dictMonad.Applicative0();
  return v => {
    if (v.tag === "Nil") { return $0.pure(false); }
    if (v.tag === "Cons") {
      const $1 = v._2;
      return dictMonad.Bind1().bind(v._1)(v1 => {
        if (v1) { return $0.pure(true); }
        return orM(dictMonad)($1);
      });
    }
    $runtime.fail();
  };
};
const iterateUntilM = dictMonad => p => f => v => {
  if (p(v)) { return dictMonad.Applicative0().pure(v); }
  return dictMonad.Bind1().bind(f(v))(iterateUntilM(dictMonad)(p)(f));
};
const iterateUntil = dictMonad => p => x => dictMonad.Bind1().bind(x)(iterateUntilM(dictMonad)(p)(v => x));
const iterateWhile = dictMonad => p => iterateUntil(dictMonad)(a => !p(a));
const anyPM = dictMonad => {
  const $0 = dictMonad.Applicative0();
  return v => v1 => {
    if (v.tag === "Nil") { return $0.pure(false); }
    if (v.tag === "Cons") {
      const $1 = v._2;
      return dictMonad.Bind1().bind(v._1(v1))(v2 => {
        if (v2) { return $0.pure(true); }
        return anyPM(dictMonad)($1)(v1);
      });
    }
    $runtime.fail();
  };
};
const anyM = dictMonad => {
  const $0 = dictMonad.Applicative0();
  return v => v1 => {
    if (v1.tag === "Nil") { return $0.pure(false); }
    if (v1.tag === "Cons") {
      const $1 = v1._2;
      return dictMonad.Bind1().bind(v(v1._1))(v2 => {
        if (v2) { return $0.pure(true); }
        return anyM(dictMonad)(v)($1);
      });
    }
    $runtime.fail();
  };
};
const andM = dictMonad => {
  const $0 = dictMonad.Applicative0();
  return v => {
    if (v.tag === "Nil") { return $0.pure(true); }
    if (v.tag === "Cons") {
      const $1 = v._2;
      return dictMonad.Bind1().bind(v._1)(v1 => {
        if (v1) { return andM(dictMonad)($1); }
        return $0.pure(false);
      });
    }
    $runtime.fail();
  };
};
const allPM = dictMonad => {
  const $0 = dictMonad.Applicative0();
  return v => v1 => {
    if (v.tag === "Nil") { return $0.pure(true); }
    if (v.tag === "Cons") {
      const $1 = v._2;
      return dictMonad.Bind1().bind(v._1(v1))(v2 => {
        if (v2) { return allPM(dictMonad)($1)(v1); }
        return $0.pure(false);
      });
    }
    $runtime.fail();
  };
};
const allM = dictMonad => {
  const $0 = dictMonad.Applicative0();
  return v => v1 => {
    if (v1.tag === "Nil") { return $0.pure(true); }
    if (v1.tag === "Cons") {
      const $1 = v1._2;
      return dictMonad.Bind1().bind(v(v1._1))(v2 => {
        if (v2) { return allM(dictMonad)(v)($1); }
        return $0.pure(false);
      });
    }
    $runtime.fail();
  };
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
