// | This module is for finding patterns in a `String`, and also
// | replacing or splitting on the found patterns.
// | This activity is traditionally done with
// | [__Regex__](https://pursuit.purescript.org/packages/purescript-strings/docs/Data.String.Regex),
// | but this module uses parsers instead for the pattern matching.
// |
// | Functions in this module are *ways to run a parser* on an input `String`,
// | like `runParser` or `runParserT`.
// |
// | #### Why would we want to do pattern matching and substitution with parsers instead of regular expressions?
// |
// | * Monadic parsers have a nicer syntax than
// |   [regular expressions](https://en.wikipedia.org/wiki/Regular_expression),
// |   which are notoriously
// |   [difficult to read](https://en.wikipedia.org/wiki/Write-only_language).
// |   With monadic parsers we can perform textual pattern-matching in plain
// |   PureScript rather than using a special regex domain-specific
// |   programming language.
// |
// | * Regular expressions can do “group capture” on sections of the matched
// |   pattern, but they can only return stringy lists of the capture groups. Parsers
// |   can construct typed data structures based on the capture groups, guaranteeing
// |   no disagreement between the pattern rules and the rules that we're using
// |   to build data structures based on the pattern matches.
// |
// |   For example, consider
// |   scanning a string for numbers. A lot of different things can look like a number,
// |   and can have leading plus or minus signs, or be in scientific notation, or
// |   have commas, or whatever. If we try to parse all of the numbers out of a string
// |   using regular expressions, then we have to make sure that the regular expression
// |   and the string-to-number conversion function agree about exactly what is
// |   and what isn't a numeric string. We can get into an awkward situation in which
// |   the regular expression says it has found a numeric string but the
// |   string-to-number conversion function fails. A typed parser will perform both
// |   the pattern match and the conversion, so it will never be in that situation.
// |   [Parse, don't validate.](https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/)
// |
// | * Regular expressions are only able to pattern-match
// |   [regular grammars](https://en.wikipedia.org/wiki/Chomsky_hierarchy#The_hierarchy).
// |   Monadic parsers are able pattern-match context-free (by recursion)
// |   or context-sensitive (by monad transformer) grammars.
// |
// | * The replacement expression for a traditional regular expression-based
// |   substitution command is usually just a string template in which
// |   the *Nth* “capture group” can be inserted with the syntax `\N`. With
// |   this library, instead of a template, we
// |   can perform any replacement computation, including `Effect`s.
// |
// | #### Implementation Notes
// |
// | All of the functions in this module work by calling `runParserT`
// | with the `anyTill` combinator.
// | We can expect the speed of parser-based pattern matching to be
// | about 10× worse than regex-based pattern matching in a JavaScript
// | runtime environment.
// | This module is based on the Haskell packages
// | [__replace-megaparsec__](https://hackage.haskell.org/package/replace-megaparsec)
// | and
// | [__replace-attoparsec__](https://hackage.haskell.org/package/replace-attoparsec).
// |
import * as $runtime from "../runtime.js";
import * as Control$dMonad$dRec$dClass from "../Control.Monad.Rec.Class/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dArray$dST from "../Data.Array.ST/index.js";
import * as Data$dArray$dST$dPartial from "../Data.Array.ST.Partial/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNonEmpty from "../Data.NonEmpty/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Data$dString$dCodePoints from "../Data.String.CodePoints/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Parsing from "../Parsing/index.js";
import * as Parsing$dCombinators from "../Parsing.Combinators/index.js";
import * as Parsing$dString from "../Parsing.String/index.js";
const splitCapCombinator = dictMonad => sep => (state1, more, lift1, $$throw, done) => {
  const loop = (state2, arg, gas) => {
    const $0 = arg.arraySize;
    const $1 = arg.carry;
    const $2 = arg.rlist;
    const $3 = Parsing$dCombinators.optionMaybe((v1, $3, $4, $5, $6) => {
      const $7 = v1._3;
      return Parsing$dString.anyTill(dictMonad)((state1$1, more$1, lift1$1, throw$1, done$1) => more$1(v1$1 => Parsing.position(
        state1$1,
        more$1,
        lift1$1,
        throw$1,
        (state2$1, a) => more$1(v2 => {
          const $8 = a.index;
          return more$1(v1$2 => sep(
            state2$1,
            more$1,
            lift1$1,
            throw$1,
            (state2$2, a$1) => more$1(v2$1 => more$1(v1$3 => Parsing.position(
              state2$2,
              more$1,
              lift1$1,
              throw$1,
              (state2$3, a$2) => more$1(v2$2 => done$1(state2$3, Data$dTuple.$Tuple($8, Data$dTuple.$Tuple(a$1, a$2.index))))
            )))
          ));
        })
      )))(v1, $3, $4, (v2, $8) => $5(Parsing.$ParseState(v2._1, v2._2, $7), $8), $6);
    });
    const $4 = (state3, step) => {
      if (step.tag === "Loop") {
        if (gas === 0) { return more(v1 => loop(state3, step._1, 30)); }
        return loop(state3, step._1, gas - 1 | 0);
      }
      if (step.tag === "Done") { return done(state3, step._1); }
      $runtime.fail();
    };
    return more(v1 => $3(
      state2,
      more,
      lift1,
      $$throw,
      (state2$1, a) => more(v2 => {
        if (a.tag === "Just") {
          const $5 = a._1._2._2._1;
          const carry_unmatched = (() => {
            if ($1.tag === "Nothing") { return a._1._1; }
            if ($1.tag === "Just") { return Data$dString$dCodePoints.singleton($1._1) + a._1._1; }
            $runtime.fail();
          })();
          if (a._1._2._2._2 === a._1._2._1) {
            return more(v1$1 => Parsing$dCombinators.optionMaybe(Parsing$dString.anyCodePoint)(
              state2$1,
              more,
              lift1,
              $$throw,
              (state2$2, a$1) => more(v2$1 => {
                if (
                  (() => {
                    if (a$1.tag === "Nothing") { return false; }
                    if (a$1.tag === "Just") { return true; }
                    $runtime.fail();
                  })()
                ) {
                  return $4(
                    state2$2,
                    Control$dMonad$dRec$dClass.$Step(
                      "Loop",
                      {carry: a$1, rlist: Data$dList$dTypes.$List("Cons", Data$dTuple.$Tuple(carry_unmatched, $5), $2), arraySize: carry_unmatched === "" ? $0 + 1 | 0 : $0 + 2 | 0}
                    )
                  );
                }
                return $4(
                  state2$2,
                  Control$dMonad$dRec$dClass.$Step(
                    "Done",
                    {carry: a$1, rlist: Data$dList$dTypes.$List("Cons", Data$dTuple.$Tuple(carry_unmatched, $5), $2), arraySize: carry_unmatched === "" ? $0 + 1 | 0 : $0 + 2 | 0}
                  )
                );
              })
            ));
          }
          return $4(
            state2$1,
            Control$dMonad$dRec$dClass.$Step(
              "Loop",
              {
                carry: Data$dMaybe.Nothing,
                rlist: Data$dList$dTypes.$List("Cons", Data$dTuple.$Tuple(carry_unmatched, $5), $2),
                arraySize: carry_unmatched === "" ? $0 + 1 | 0 : $0 + 2 | 0
              }
            )
          );
        }
        if (a.tag === "Nothing") { return $4(state2$1, Control$dMonad$dRec$dClass.$Step("Done", {carry: $1, rlist: $2, arraySize: $0})); }
        $runtime.fail();
      })
    ));
  };
  return loop(state1, {carry: Data$dMaybe.Nothing, rlist: Data$dList$dTypes.Nil, arraySize: 0}, 30);
};
const splitCapT = dictMonad => {
  const $0 = dictMonad.Applicative0();
  return dictMonadRec => {
    const runParserT = Parsing.runParserT(dictMonadRec);
    return input => sep => dictMonad.Bind1().bind(runParserT(input)((state1, more, lift1, $$throw, done) => more(v2 => more(v1 => splitCapCombinator(dictMonad)(sep)(
      state1,
      more,
      lift1,
      $$throw,
      (state2, a) => more(v2$1 => {
        const $1 = Data$dTuple.Tuple(a);
        return more(v3 => Parsing$dString.rest(state2, more, lift1, $$throw, (state3, a$1) => more(v4 => done(state3, $1(a$1)))));
      })
    )))))(v => {
      if (v.tag === "Left") { return $0.pure(Data$dNonEmpty.$NonEmpty(Data$dEither.$Either("Left", input), Data$dList$dTypes.Nil)); }
      if (v.tag === "Right") {
        const term = (() => {
          if (v._1._1.carry.tag === "Nothing") { return v._1._2; }
          if (v._1._1.carry.tag === "Just") { return Data$dString$dCodePoints.singleton(v._1._1.carry._1) + v._1._2; }
          $runtime.fail();
        })();
        if (v._1._1.rlist.tag === "Nil") {
          if (term === "") { return $0.pure(Data$dNonEmpty.$NonEmpty(Data$dEither.$Either("Left", input), Data$dList$dTypes.Nil)); }
          return $0.pure(Data$dNonEmpty.$NonEmpty(Data$dEither.$Either("Left", term), Data$dList$dTypes.Nil));
        }
        return $0.pure((() => {
          const go = go$a0$copy => go$a1$copy => {
            let go$a0 = go$a0$copy, go$a1 = go$a1$copy, go$c = true, go$r;
            while (go$c) {
              const b = go$a0, v$1 = go$a1;
              if (v$1.tag === "Nil") {
                go$c = false;
                go$r = b;
                continue;
              }
              if (v$1.tag === "Cons") {
                go$a0 = v$1._1._1 === ""
                  ? Data$dList$dTypes.$List("Cons", Data$dEither.$Either("Right", v$1._1._2), b)
                  : Data$dList$dTypes.$List("Cons", Data$dEither.$Either("Left", v$1._1._1), Data$dList$dTypes.$List("Cons", Data$dEither.$Either("Right", v$1._1._2), b));
                go$a1 = v$1._2;
                continue;
              }
              $runtime.fail();
            }
            return go$r;
          };
          const $1 = go(term === "" ? Data$dList$dTypes.Nil : Data$dList$dTypes.$List("Cons", Data$dEither.$Either("Left", term), Data$dList$dTypes.Nil))(v._1._1.rlist);
          if ($1.tag === "Nil") { $runtime.fail(); }
          if ($1.tag === "Cons") { return Data$dNonEmpty.$NonEmpty($1._1, $1._2); }
          $runtime.fail();
        })());
      }
      $runtime.fail();
    });
  };
};
const splitCapT1 = /* #__PURE__ */ splitCapT(Data$dIdentity.monadIdentity)(Control$dMonad$dRec$dClass.monadRecIdentity);
const splitCap = input => sep => splitCapT1(input)(sep);
const replaceT = dictMonad => {
  const $0 = dictMonad.Applicative0();
  const Bind1 = dictMonad.Bind1();
  return dictMonadRec => {
    const runParserT = Parsing.runParserT(dictMonadRec);
    return input => sep => Bind1.bind(runParserT(input)((state1, more, lift1, $$throw, done) => more(v2 => more(v1 => splitCapCombinator(dictMonad)(sep)(
      state1,
      more,
      lift1,
      $$throw,
      (state2, a) => more(v2$1 => {
        const $1 = Data$dTuple.Tuple(a);
        return more(v3 => Parsing$dString.rest(state2, more, lift1, $$throw, (state3, a$1) => more(v4 => done(state3, $1(a$1)))));
      })
    )))))(v => {
      if (v.tag === "Left") { return $0.pure(input); }
      if (v.tag === "Right") {
        const $1 = v._1._1.arraySize;
        const $2 = v._1._1.rlist;
        const term = (() => {
          if (v._1._1.carry.tag === "Nothing") { return v._1._2; }
          if (v._1._1.carry.tag === "Just") { return Data$dString$dCodePoints.singleton(v._1._1.carry._1) + v._1._2; }
          $runtime.fail();
        })();
        return Bind1.bind($0.pure((() => {
          if (term === "") { return Data$dArray$dST.unsafeThaw(Data$dArray.replicate($1)(Data$dNullable.null)); }
          const $3 = Data$dArray$dST.unsafeThaw(Data$dArray.replicate($1 + 1 | 0)(Data$dNullable.null));
          return () => {
            const arr = $3();
            Data$dArray$dST$dPartial.pokeImpl($1)(Data$dNullable.notNull(term))(arr)();
            return arr;
          };
        })()()))(v1 => Bind1.bind(dictMonadRec.tailRecM(v2 => {
          if (v2["rlist'"].tag === "Nil") { return $0.pure(Control$dMonad$dRec$dClass.$Step("Done", undefined)); }
          if (v2["rlist'"].tag === "Cons") {
            const $3 = v2["rlist'"]._2;
            const $4 = v2["rlist'"]._1._1;
            return Bind1.bind($0.pure(Data$dArray$dST$dPartial.pokeImpl(v2.index)(Data$dNullable.notNull(v2["rlist'"]._1._2))(v1)()))(() => {
              if ($4 === "") { return $0.pure(Control$dMonad$dRec$dClass.$Step("Loop", {index: v2.index - 1 | 0, "rlist'": $3})); }
              return Bind1.bind($0.pure(Data$dArray$dST$dPartial.pokeImpl(v2.index - 1 | 0)(Data$dNullable.notNull($4))(v1)()))(() => $0.pure(Control$dMonad$dRec$dClass.$Step(
                "Loop",
                {index: v2.index - 2 | 0, "rlist'": $3}
              )));
            });
          }
          $runtime.fail();
        })({index: $1 - 1 | 0, "rlist'": $2}))(() => Bind1.Apply0().Functor0().map(Data$dString$dCommon.joinWith(""))($0.pure(v1))));
      }
      $runtime.fail();
    });
  };
};
const replaceT1 = /* #__PURE__ */ replaceT(Data$dIdentity.monadIdentity)(Control$dMonad$dRec$dClass.monadRecIdentity);
const replace = input => sep => replaceT1(input)(sep);
const breakCapT = dictMonad => dictMonadRec => {
  const runParserT = Parsing.runParserT(dictMonadRec);
  return input => sep => dictMonad.Bind1().Apply0().Functor0().map(Data$dEither.hush)(runParserT(input)((state1, more, lift1, $$throw, done) => more(v1 => Parsing$dString.anyTill(dictMonad)(sep)(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2 => {
      const $0 = a._2;
      const $1 = a._1;
      return more(v1$1 => Parsing.getParserT(state2, more, lift1, $$throw, (state2$1, a$1) => more(v2$1 => done(state2$1, Data$dTuple.$Tuple($1, Data$dTuple.$Tuple($0, a$1._1))))));
    })
  ))));
};
const breakCapT1 = /* #__PURE__ */ breakCapT(Data$dIdentity.monadIdentity)(Control$dMonad$dRec$dClass.monadRecIdentity);
const breakCap = input => sep => breakCapT1(input)(sep);
export {breakCap, breakCapT, breakCapT1, replace, replaceT, replaceT1, splitCap, splitCapCombinator, splitCapT, splitCapT1};
