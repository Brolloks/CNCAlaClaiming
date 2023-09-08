// | A “parser combinator” is a function which takes some
// | parsers as arguments and returns a new parser.
// |
// | ## Combinators in other packages
// |
// | Many variations of well-known monadic and applicative combinators used for parsing are
// | defined in other PureScript packages. We list some of them here.
// |
// | If you use a combinator from some other package for parsing, keep in mind
// | this surprising truth about the __parsing__ package:
// | All other combinators used with this package will be stack-safe,
// | but usually the combinators with a `MonadRec` constraint will run faster.
// | So you should prefer `MonadRec` versions of combinators, but for reasons
// | of speed, not stack-safety.
// |
// | ### Data.Array
// |
// | The `many` and `many1` combinators in the __Parsing.Combinators.Array__
// | module are faster.
// |
// | * [Data.Array.many](https://pursuit.purescript.org/packages/purescript-arrays/docs/Data.Array#v:many)
// | * [Data.Array.some](https://pursuit.purescript.org/packages/purescript-arrays/docs/Data.Array#v:some)
// | * [Data.Array.NonEmpty.some](https://pursuit.purescript.org/packages/purescript-arrays/docs/Data.Array.NonEmpty#v:some)
// |
// | ### Data.List
// |
// | The `many` and `many1` combinators in this package
// | are redeclarations of
// | the `manyRec` and `someRec` combinators in __Data.List__.
// |
// | ### Data.List.Lazy
// |
// | * [Data.List.Lazy.many](https://pursuit.purescript.org/packages/purescript-lists/docs/Data.List.Lazy#v:many)
// | * [Data.List.Lazy.some](https://pursuit.purescript.org/packages/purescript-lists/docs/Data.List.Lazy#v:some)
// |
// | ## Combinators in this package
// |
// | the __replicateA__ and __replicateM__ combinators are re-exported from
// | this module. `replicateA n p` or `replicateM n p`
// | will repeat parser `p` exactly `n` times. The `replicateA` combinator can
// | produce either an `Array` or a `List`.
import * as $runtime from "../runtime.js";
import * as Control$dMonad$dRec$dClass from "../Control.Monad.Rec.Class/index.js";
import * as Data$dList from "../Data.List/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNonEmpty from "../Data.NonEmpty/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Parsing from "../Parsing/index.js";
const manyRec = /* #__PURE__ */ Data$dList.manyRec(Parsing.monadRecParserT)(Parsing.alternativeParserT);
const withLazyErrorMessage = p => msg => {
  const $0 = Parsing.lazyParserT.defer(v => Parsing.fail("Expected " + msg()));
  return (v2, $1, $2, $3, $4) => {
    const $5 = v2._1;
    const $6 = v2._2;
    return $1(v3 => p(
      Parsing.$ParseState($5, $6, false),
      $1,
      $2,
      (v4, $7) => {
        const $8 = v4._3;
        return $1(v5 => {
          if ($8) { return $3(v4, $7); }
          return $0(v2, $1, $2, $3, $4);
        });
      },
      $4
    ));
  };
};
const withErrorMessage = p => msg => {
  const $0 = Parsing.fail("Expected " + msg);
  return (v2, $1, $2, $3, $4) => {
    const $5 = v2._1;
    const $6 = v2._2;
    return $1(v3 => p(
      Parsing.$ParseState($5, $6, false),
      $1,
      $2,
      (v4, $7) => {
        const $8 = v4._3;
        return $1(v5 => {
          if ($8) { return $3(v4, $7); }
          return $0(v2, $1, $2, $3, $4);
        });
      },
      $4
    ));
  };
};
const tryRethrow = v => (v1, $0, $1, $2, $3) => {
  const $4 = v1._3;
  const $5 = v1._2;
  return v(v1, $0, $1, (v2, $6) => $2(Parsing.$ParseState(v2._1, v2._2, $4), Parsing.$ParseError($6._1, $5)), $3);
};
const $$try = v => (v1, $0, $1, $2, $3) => {
  const $4 = v1._3;
  return v(v1, $0, $1, (v2, $5) => $2(Parsing.$ParseState(v2._1, v2._2, $4), $5), $3);
};
const skipMany1 = p => (state1, more, lift1, $$throw, done) => more(v2 => more(v1 => p(
  state1,
  more,
  lift1,
  $$throw,
  (state2, a) => more(v2$1 => more(v3 => {
    const loop = (state2$1, arg, gas) => {
      const $0 = (state3, step) => {
        if (step.tag === "Loop") {
          if (gas === 0) { return more(v1$1 => loop(state3, step._1, 30)); }
          return loop(state3, step._1, gas - 1 | 0);
        }
        if (step.tag === "Done") {
          const $0 = step._1;
          return more(v4 => done(state3, $0));
        }
        $runtime.fail();
      };
      const $1 = state2$1._1;
      const $2 = state2$1._2;
      return more(v3$1 => more(v1$1 => p(
        Parsing.$ParseState($1, $2, false),
        more,
        lift1,
        (v4, $3) => {
          const $4 = v4._3;
          return more(v5 => {
            if ($4) { return $$throw(v4, $3); }
            return $0(state2$1, Control$dMonad$dRec$dClass.$Step("Done", undefined));
          });
        },
        (state2$2, a$1) => more(v2$2 => $0(state2$2, Control$dMonad$dRec$dClass.$Step("Loop", undefined)))
      )));
    };
    return loop(state2, undefined, 30);
  }))
)));
const skipMany = p => (v2, $0, $1, $2, $3) => {
  const $4 = v2._1;
  const $5 = v2._2;
  return $0(v3 => skipMany1(p)(
    Parsing.$ParseState($4, $5, false),
    $0,
    $1,
    (v4, $6) => {
      const $7 = v4._3;
      return $0(v5 => {
        if ($7) { return $2(v4, $6); }
        return $3(v2, undefined);
      });
    },
    $3
  ));
};
const sepEndBy1 = p => sep => (state1, more, lift1, $$throw, done) => more(v1 => p(
  state1,
  more,
  lift1,
  $$throw,
  (state2, a) => more(v2 => {
    const $0 = state2._1;
    const $1 = state2._2;
    return more(v3 => {
      const $2 = (v4, $2) => {
        const $3 = v4._3;
        return more(v5 => {
          if ($3) { return $$throw(v4, $2); }
          return done(state2, Data$dNonEmpty.$NonEmpty(a, Data$dList$dTypes.Nil));
        });
      };
      return more(v1$1 => {
        const loop = (state2$1, arg, gas) => {
          const done$1 = Parsing.lazyParserT.defer(v => {
            const $3 = Control$dMonad$dRec$dClass.$Step("Done", Data$dList.reverse(arg));
            return (state1$1, v$1, v1$2, v2$1, done$1) => done$1(state1$1, $3);
          });
          const $3 = (state3, step) => {
            if (step.tag === "Loop") {
              if (gas === 0) { return more(v1$2 => loop(state3, step._1, 30)); }
              return loop(state3, step._1, gas - 1 | 0);
            }
            if (step.tag === "Done") {
              const $3 = step._1;
              return more(v2$1 => done(state3, Data$dNonEmpty.$NonEmpty(a, $3)));
            }
            $runtime.fail();
          };
          const $4 = state2$1._1;
          const $5 = state2$1._2;
          return more(v3$1 => {
            const $6 = (v4, $6) => {
              const $7 = v4._3;
              return more(v5 => {
                if ($7) { return $2(v4, $6); }
                return done$1(state2$1, more, lift1, $2, $3);
              });
            };
            return more(v1$2 => sep(
              Parsing.$ParseState($4, $5, false),
              more,
              lift1,
              $6,
              (state2$2, a$1) => more(v2$1 => {
                const $7 = state2$2._1;
                const $8 = state2$2._2;
                return more(v3$2 => more(v1$3 => p(
                  Parsing.$ParseState($7, $8, false),
                  more,
                  lift1,
                  (v4, $9) => {
                    const $10 = v4._3;
                    return more(v5 => {
                      if ($10) { return $6(v4, $9); }
                      return done$1(state2$2, more, lift1, $6, $3);
                    });
                  },
                  (state2$3, a$2) => more(v2$2 => $3(state2$3, Control$dMonad$dRec$dClass.$Step("Loop", Data$dList$dTypes.$List("Cons", a$2, arg))))
                )));
              })
            ));
          });
        };
        return loop(Parsing.$ParseState($0, $1, false), Data$dList$dTypes.Nil, 30);
      });
    });
  })
));
const sepEndBy = p => sep => (v2, $0, $1, $2, $3) => {
  const $4 = v2._1;
  const $5 = v2._2;
  return $0(v3 => $0(v1 => sepEndBy1(p)(sep)(
    Parsing.$ParseState($4, $5, false),
    $0,
    $1,
    (v4, $6) => {
      const $7 = v4._3;
      return $0(v5 => {
        if ($7) { return $2(v4, $6); }
        return $3(v2, Data$dList$dTypes.Nil);
      });
    },
    (state2, a) => $0(v2$1 => $3(state2, Data$dList$dTypes.$List("Cons", a._1, a._2)))
  )));
};
const sepBy1 = p => sep => (state1, more, lift1, $$throw, done) => more(v1 => p(
  state1,
  more,
  lift1,
  $$throw,
  (state2, a) => more(v2 => {
    const $0 = manyRec((state1$1, more$1, lift1$1, throw$1, done$1) => more$1(v2$1 => more$1(v1$1 => sep(
      state1$1,
      more$1,
      lift1$1,
      throw$1,
      (state2$1, a$1) => more$1(v2$2 => more$1(v3 => p(state2$1, more$1, lift1$1, throw$1, (state3, a$2) => more$1(v4 => done$1(state3, a$2)))))
    ))));
    return more(v1$1 => $0(state2, more, lift1, $$throw, (state2$1, a$1) => more(v2$1 => done(state2$1, Data$dNonEmpty.$NonEmpty(a, a$1)))));
  })
));
const sepBy = p => sep => (v2, $0, $1, $2, $3) => {
  const $4 = v2._1;
  const $5 = v2._2;
  return $0(v3 => $0(v1 => sepBy1(p)(sep)(
    Parsing.$ParseState($4, $5, false),
    $0,
    $1,
    (v4, $6) => {
      const $7 = v4._3;
      return $0(v5 => {
        if ($7) { return $2(v4, $6); }
        return $3(v2, Data$dList$dTypes.Nil);
      });
    },
    (state2, a) => $0(v2$1 => $3(state2, Data$dList$dTypes.$List("Cons", a._1, a._2)))
  )));
};
const optional = p => (v2, $0, $1, $2, $3) => {
  const $4 = v2._1;
  const $5 = v2._2;
  return $0(v3 => $0(v1 => p(
    Parsing.$ParseState($4, $5, false),
    $0,
    $1,
    (v4, $6) => {
      const $7 = v4._3;
      return $0(v5 => {
        if ($7) { return $2(v4, $6); }
        return $3(v2, undefined);
      });
    },
    (state2, a) => $0(v2$1 => $3(state2, undefined))
  )));
};
const option = a => p => (v2, $0, $1, $2, $3) => {
  const $4 = v2._1;
  const $5 = v2._2;
  return $0(v3 => p(
    Parsing.$ParseState($4, $5, false),
    $0,
    $1,
    (v4, $6) => {
      const $7 = v4._3;
      return $0(v5 => {
        if ($7) { return $2(v4, $6); }
        return $3(v2, a);
      });
    },
    $3
  ));
};
const optionMaybe = p => (v2, $0, $1, $2, $3) => {
  const $4 = v2._1;
  const $5 = v2._2;
  return $0(v3 => $0(v1 => p(
    Parsing.$ParseState($4, $5, false),
    $0,
    $1,
    (v4, $6) => {
      const $7 = v4._3;
      return $0(v5 => {
        if ($7) { return $2(v4, $6); }
        return $3(v2, Data$dMaybe.Nothing);
      });
    },
    (state2, a) => $0(v2$1 => $3(state2, Data$dMaybe.$Maybe("Just", a)))
  )));
};
const notFollowedBy = p => (v1, $0, $1, $2, $3) => {
  const $4 = v1._3;
  const $5 = v1._1;
  const $6 = v1._2;
  return $0(v3 => {
    const $7 = (v4, $7) => {
      const $8 = v4._3;
      return $0(v5 => {
        if ($8) { return $2(Parsing.$ParseState(v4._1, v4._2, $4), $7); }
        return $3(v1, undefined);
      });
    };
    return $0(v2 => $0(v1$1 => p(
      Parsing.$ParseState($5, $6, false),
      $0,
      $1,
      (v2$1, $8) => $7(Parsing.$ParseState(v2$1._1, v2$1._2, false), $8),
      (state2, a) => $0(v2$1 => $0(v3$1 => Parsing.fail("Negated parser succeeded")(state2, $0, $1, $7, (state3, a$1) => $0(v4 => $3(state3, a$1)))))
    )));
  });
};
const manyTill_ = p => end => (state1, more, lift1, $$throw, done) => {
  const loop = (state2, arg, gas) => {
    const $0 = (state3, step) => {
      if (step.tag === "Loop") {
        if (gas === 0) { return more(v1 => loop(state3, step._1, 30)); }
        return loop(state3, step._1, gas - 1 | 0);
      }
      if (step.tag === "Done") { return done(state3, step._1); }
      $runtime.fail();
    };
    const $1 = state2._1;
    const $2 = state2._2;
    return more(v3 => more(v1 => end(
      Parsing.$ParseState($1, $2, false),
      more,
      lift1,
      (v4, $3) => {
        const $4 = v4._3;
        return more(v5 => {
          if ($4) { return $$throw(v4, $3); }
          return more(v1$1 => p(
            state2,
            more,
            lift1,
            $$throw,
            (state2$1, a) => more(v2 => $0(state2$1, Control$dMonad$dRec$dClass.$Step("Loop", Data$dList$dTypes.$List("Cons", a, arg))))
          ));
        });
      },
      (state2$1, a) => more(v2 => $0(state2$1, Control$dMonad$dRec$dClass.$Step("Done", Data$dTuple.$Tuple(Data$dList.reverse(arg), a))))
    )));
  };
  return loop(state1, Data$dList$dTypes.Nil, 30);
};
const manyTill = p => end => (state1, more, lift1, $$throw, done) => {
  const loop = (state2, arg, gas) => {
    const $0 = (state3, step) => {
      if (step.tag === "Loop") {
        if (gas === 0) { return more(v1 => loop(state3, step._1, 30)); }
        return loop(state3, step._1, gas - 1 | 0);
      }
      if (step.tag === "Done") { return done(state3, step._1); }
      $runtime.fail();
    };
    const $1 = state2._1;
    const $2 = state2._2;
    return more(v3 => more(v1 => end(
      Parsing.$ParseState($1, $2, false),
      more,
      lift1,
      (v4, $3) => {
        const $4 = v4._3;
        return more(v5 => {
          if ($4) { return $$throw(v4, $3); }
          return more(v1$1 => p(
            state2,
            more,
            lift1,
            $$throw,
            (state2$1, a) => more(v2 => $0(state2$1, Control$dMonad$dRec$dClass.$Step("Loop", Data$dList$dTypes.$List("Cons", a, arg))))
          ));
        });
      },
      (state2$1, a) => more(v2 => $0(state2$1, Control$dMonad$dRec$dClass.$Step("Done", Data$dList.reverse(arg))))
    )));
  };
  return loop(state1, Data$dList$dTypes.Nil, 30);
};
const manyIndex = from => to => p => {
  if (from > to || from < 0) { return (state1, v, v1, v2, done) => done(state1, Data$dTuple.$Tuple(0, Data$dList$dTypes.Nil)); }
  return (state1, more, lift1, $$throw, done) => {
    const loop = (state2, arg, gas) => (() => {
      if (arg._1 >= to) {
        const $0 = Control$dMonad$dRec$dClass.$Step("Done", Data$dTuple.$Tuple(arg._1, Data$dList.reverse(arg._2)));
        return (state1$1, v, v1, v2, done$1) => done$1(state1$1, $0);
      }
      const $0 = p(arg._1);
      return (state1$1, more$1, lift1$1, throw$1, done$1) => more$1(v1 => more$1(v1$1 => $0(
        state1$1,
        more$1,
        lift1$1,
        (state2$1, err) => {
          if (arg._1 >= from) { return done$1(state2$1, Control$dMonad$dRec$dClass.$Step("Done", Data$dTuple.$Tuple(arg._1, Data$dList.reverse(arg._2)))); }
          return throw$1(state2$1, Parsing.$ParseError(err._1 + " (at least " + Data$dShow.showIntImpl(from) + ", but only parsed " + Data$dShow.showIntImpl(arg._1) + ")", err._2));
        },
        (state2$1, a) => more$1(v2 => done$1(state2$1, Control$dMonad$dRec$dClass.$Step("Loop", Data$dTuple.$Tuple(arg._1 + 1 | 0, Data$dList$dTypes.$List("Cons", a, arg._2)))))
      )));
    })()(
      state2,
      more,
      lift1,
      $$throw,
      (state3, step) => {
        if (step.tag === "Loop") {
          if (gas === 0) { return more(v1 => loop(state3, step._1, 30)); }
          return loop(state3, step._1, gas - 1 | 0);
        }
        if (step.tag === "Done") { return done(state3, step._1); }
        $runtime.fail();
      }
    );
    return loop(state1, Data$dTuple.$Tuple(0, Data$dList$dTypes.Nil), 30);
  };
};
const many1Till_ = p => end => (state1, more, lift1, $$throw, done) => more(v1 => p(
  state1,
  more,
  lift1,
  $$throw,
  (state2, a) => more(v2 => more(v1$1 => manyTill_(p)(end)(
    state2,
    more,
    lift1,
    $$throw,
    (state2$1, a$1) => more(v2$1 => done(state2$1, Data$dTuple.$Tuple(Data$dNonEmpty.$NonEmpty(a, a$1._1), a$1._2)))
  )))
));
const many1Till = p => end => (state1, more, lift1, $$throw, done) => more(v2 => more(v1 => p(
  state1,
  more,
  lift1,
  $$throw,
  (state2, a) => more(v2$1 => more(v3 => manyTill(p)(end)(state2, more, lift1, $$throw, (state3, a$1) => more(v4 => done(state3, Data$dNonEmpty.$NonEmpty(a, a$1))))))
)));
const many1 = p => {
  const $0 = manyRec(p);
  return (state1, more, lift1, $$throw, done) => more(v2 => more(v1 => p(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2$1 => more(v3 => $0(state2, more, lift1, $$throw, (state3, a$1) => more(v4 => done(state3, Data$dNonEmpty.$NonEmpty(a, a$1))))))
  )));
};
const many = manyRec;
const lookAhead = v => (state1, more, lift, $$throw, done) => v(state1, more, lift, (v1, err) => $$throw(state1, err), (v1, res) => done(state1, res));
const endBy1 = p => sep => many1((state1, more, lift1, $$throw, done) => more(v2 => more(v1 => p(
  state1,
  more,
  lift1,
  $$throw,
  (state2, a) => more(v2$1 => more(v3 => sep(state2, more, lift1, $$throw, (state3, a$1) => more(v4 => done(state3, a)))))
))));
const endBy = p => sep => manyRec((state1, more, lift1, $$throw, done) => more(v2 => more(v1 => p(
  state1,
  more,
  lift1,
  $$throw,
  (state2, a) => more(v2$1 => more(v3 => sep(state2, more, lift1, $$throw, (state3, a$1) => more(v4 => done(state3, a)))))
))));
const choice = dictFoldable => {
  const $0 = dictFoldable.foldr(p1 => v => {
    if (v.tag === "Nothing") { return Data$dMaybe.$Maybe("Just", p1); }
    if (v.tag === "Just") {
      return Data$dMaybe.$Maybe(
        "Just",
        (v2, $0, $1, $2, $3) => {
          const $4 = v2._1;
          const $5 = v2._2;
          return $0(v3 => p1(
            Parsing.$ParseState($4, $5, false),
            $0,
            $1,
            (v4, $6) => {
              const $7 = v4._3;
              return $0(v5 => {
                if ($7) { return $2(v4, $6); }
                return v._1(v2, $0, $1, $2, $3);
              });
            },
            $3
          ));
        }
      );
    }
    $runtime.fail();
  })(Data$dMaybe.Nothing);
  return x => {
    const $1 = $0(x);
    if ($1.tag === "Nothing") { return Parsing.fail("No alternative"); }
    if ($1.tag === "Just") { return $1._1; }
    $runtime.fail();
  };
};
const chainr1 = p => f => (state1, more, lift1, $$throw, done) => more(v1 => p(
  state1,
  more,
  lift1,
  $$throw,
  (state2, a) => more(v2 => {
    const loop = (state2$1, arg, gas) => {
      const $0 = arg.init;
      const $1 = arg.last;
      const $2 = Parsing.lazyParserT.defer(v1$1 => {
        const $2 = Control$dMonad$dRec$dClass.$Step(
          "Done",
          (() => {
            const go = go$a0$copy => go$a1$copy => {
              let go$a0 = go$a0$copy, go$a1 = go$a1$copy, go$c = true, go$r;
              while (go$c) {
                const b = go$a0, v = go$a1;
                if (v.tag === "Nil") {
                  go$c = false;
                  go$r = b;
                  continue;
                }
                if (v.tag === "Cons") {
                  go$a0 = v._1._2(v._1._1)(b);
                  go$a1 = v._2;
                  continue;
                }
                $runtime.fail();
              }
              return go$r;
            };
            return go($1)($0);
          })()
        );
        return (state1$1, v, v1$2, v2$1, done$1) => done$1(state1$1, $2);
      });
      const $3 = (state3, step) => {
        if (step.tag === "Loop") {
          if (gas === 0) { return more(v1$1 => loop(state3, step._1, 30)); }
          return loop(state3, step._1, gas - 1 | 0);
        }
        if (step.tag === "Done") { return done(state3, step._1); }
        $runtime.fail();
      };
      const $4 = state2$1._1;
      const $5 = state2$1._2;
      return more(v3 => {
        const $6 = (v4, $6) => {
          const $7 = v4._3;
          return more(v5 => {
            if ($7) { return $$throw(v4, $6); }
            return $2(state2$1, more, lift1, $$throw, $3);
          });
        };
        return more(v1$1 => f(
          Parsing.$ParseState($4, $5, false),
          more,
          lift1,
          $6,
          (state2$2, a$1) => more(v2$1 => more(v1$2 => p(
            state2$2,
            more,
            lift1,
            $6,
            (state2$3, a$2) => more(v2$2 => $3(
              state2$3,
              Control$dMonad$dRec$dClass.$Step("Loop", {last: a$2, init: Data$dList$dTypes.$List("Cons", Data$dTuple.$Tuple($1, a$1), $0)})
            ))
          )))
        ));
      });
    };
    return loop(state2, {last: a, init: Data$dList$dTypes.Nil}, 30);
  })
));
const chainr = p => f => a => (v2, $0, $1, $2, $3) => {
  const $4 = v2._1;
  const $5 = v2._2;
  return $0(v3 => chainr1(p)(f)(
    Parsing.$ParseState($4, $5, false),
    $0,
    $1,
    (v4, $6) => {
      const $7 = v4._3;
      return $0(v5 => {
        if ($7) { return $2(v4, $6); }
        return $3(v2, a);
      });
    },
    $3
  ));
};
const chainl1 = p => f => (state1, more, lift1, $$throw, done) => more(v1 => p(
  state1,
  more,
  lift1,
  $$throw,
  (state2, a) => more(v2 => {
    const loop = (state2$1, arg, gas) => {
      const $0 = (state3, step) => {
        if (step.tag === "Loop") {
          if (gas === 0) { return more(v1$1 => loop(state3, step._1, 30)); }
          return loop(state3, step._1, gas - 1 | 0);
        }
        if (step.tag === "Done") { return done(state3, step._1); }
        $runtime.fail();
      };
      const $1 = state2$1._1;
      const $2 = state2$1._2;
      return more(v3 => {
        const $3 = (v4, $3) => {
          const $4 = v4._3;
          return more(v5 => {
            if ($4) { return $$throw(v4, $3); }
            return $0(state2$1, Control$dMonad$dRec$dClass.$Step("Done", arg));
          });
        };
        return more(v1$1 => f(
          Parsing.$ParseState($1, $2, false),
          more,
          lift1,
          $3,
          (state2$2, a$1) => more(v2$1 => more(v1$2 => p(
            state2$2,
            more,
            lift1,
            $3,
            (state2$3, a$2) => more(v2$2 => $0(state2$3, Control$dMonad$dRec$dClass.$Step("Loop", a$1(arg)(a$2))))
          )))
        ));
      });
    };
    return loop(state2, a, 30);
  })
));
const chainl = p => f => a => (v2, $0, $1, $2, $3) => {
  const $4 = v2._1;
  const $5 = v2._2;
  return $0(v3 => chainl1(p)(f)(
    Parsing.$ParseState($4, $5, false),
    $0,
    $1,
    (v4, $6) => {
      const $7 = v4._3;
      return $0(v5 => {
        if ($7) { return $2(v4, $6); }
        return $3(v2, a);
      });
    },
    $3
  ));
};
const between = open => close => p => (state1, more, lift1, $$throw, done) => more(v2 => more(v1 => more(v2$1 => more(v1$1 => open(
  state1,
  more,
  lift1,
  $$throw,
  (state2, a) => more(v2$2 => more(v3 => p(
    state2,
    more,
    lift1,
    $$throw,
    (state3, a$1) => more(v4 => more(v2$3 => more(v3$1 => close(state3, more, lift1, $$throw, (state3$1, a$2) => more(v4$1 => done(state3$1, a$1))))))
  )))
)))));
const asErrorMessage = b => a => withErrorMessage(a)(b);
const advance = p => (state1, more, lift1, $$throw, done) => more(v1 => Parsing.position(
  state1,
  more,
  lift1,
  $$throw,
  (state2, a) => more(v2 => {
    const $0 = a.index;
    return more(v1$1 => p(
      state2,
      more,
      lift1,
      $$throw,
      (state2$1, a$1) => more(v2$1 => more(v1$2 => Parsing.position(
        state2$1,
        more,
        lift1,
        $$throw,
        (state2$2, a$2) => more(v2$2 => {
          if (a$2.index > $0) { return done(state2$2, a$1); }
          return Parsing.fail("Expected progress")(state2$2, more, lift1, $$throw, done);
        })
      )))
    ));
  })
));
export {
  advance,
  asErrorMessage,
  between,
  chainl,
  chainl1,
  chainr,
  chainr1,
  choice,
  endBy,
  endBy1,
  lookAhead,
  many,
  many1,
  many1Till,
  many1Till_,
  manyIndex,
  manyRec,
  manyTill,
  manyTill_,
  notFollowedBy,
  option,
  optionMaybe,
  optional,
  sepBy,
  sepBy1,
  sepEndBy,
  sepEndBy1,
  skipMany,
  skipMany1,
  $$try as try,
  tryRethrow,
  withErrorMessage,
  withLazyErrorMessage
};
