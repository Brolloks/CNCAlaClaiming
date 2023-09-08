// | This module is a port of the Haskell
// | [__Text.Parsec.Indent__](https://hackage.haskell.org/package/indents-0.3.3/docs/Text-Parsec-Indent.html)
// | module from 2016-05-07.
// |
// | A module to construct indentation aware parsers. Many programming
// | language have indentation based syntax rules e.g. python and Haskell.
// | This module exports combinators to create such parsers.
// |
// | The input source can be thought of as a list of tokens. Abstractly
// | each token occurs at a line and a column and has a width. The column
// | number of a token measures is indentation. If t1 and t2 are two tokens
// | then we say that indentation of t1 is more than t2 if the column
// | number of occurrence of t1 is greater than that of t2.
// |
// | Currently this module supports two kind of indentation based syntactic
// | structures which we now describe:
// |
// | - **Block**
// |
// |   A block of indentation /c/ is a sequence of tokens with
// |   indentation at least /c/.  Examples for a block is a where clause of
// |   Haskell with no explicit braces.
// |
// | - **Line fold**
// |
// |   A line fold starting at line /l/ and indentation /c/ is a
// |   sequence of tokens that start at line /l/ and possibly continue to
// |   subsequent lines as long as the indentation is greater than /c/. Such
// |   a sequence of lines need to be /folded/ to a single line. An example
// |   is MIME headers. Line folding based binding separation is used in
// |   Haskell as well.
import * as $runtime from "../runtime.js";
import * as Control$dMonad$dState$dTrans from "../Control.Monad.State.Trans/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dList from "../Data.List/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Parsing from "../Parsing/index.js";
import * as Parsing$dCombinators from "../Parsing.Combinators/index.js";
import * as Parsing$dString from "../Parsing.String/index.js";
import * as Parsing$dString$dBasic from "../Parsing.String.Basic/index.js";
const $Optional = (_1, _2) => ({tag: "Opt", _1, _2});
const lift = m => (state1, v, lift$p, v1, done) => lift$p(Control$dMonad$dState$dTrans.bindStateT(Data$dIdentity.monadIdentity).Apply0().Functor0().map(a => v2 => done(state1, a))(m));
const monadStateStateT = /* #__PURE__ */ Control$dMonad$dState$dTrans.monadStateStateT(Data$dIdentity.monadIdentity);
const identity = x => x;
const Opt = value0 => value1 => $Optional(value0, value1);
const symbol = name => {
  const $0 = Data$dList.many(Parsing.alternativeParserT)(Parsing.lazyParserT)(Parsing$dString$dBasic.oneOf([" ", "\t"]));
  return (state1, more, lift1, $$throw, done) => more(v2 => more(v1 => $0(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2$1 => more(v3 => Parsing$dString.string(name)(state2, more, lift1, $$throw, (state3, a$1) => more(v4 => done(state3, a$1)))))
  )));
};
const runIndent = a => a(Parsing.initialPos)._1;
const put$p = p => lift(monadStateStateT.state(v => Data$dTuple.$Tuple(undefined, p)));
const many1 = p => {
  const $0 = Data$dList.many(Parsing.alternativeParserT)(Parsing.lazyParserT)(p);
  return (state1, more, lift1, $$throw, done) => more(v2 => more(v1 => p(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2$1 => {
      const $1 = Data$dList$dTypes.Cons(a);
      return more(v3 => $0(state2, more, lift1, $$throw, (state3, a$1) => more(v4 => done(state3, $1(a$1)))));
    })
  )));
};
const get$p = /* #__PURE__ */ (() => {
  const $0 = lift(monadStateStateT.state(s => Data$dTuple.$Tuple(s, s)));
  return (state1, more, lift1, $$throw, done) => more(v1 => $0(state1, more, lift1, $$throw, (state2, a) => more(v2 => done(state2, a))));
})();
const indented = (state1, more, lift1, $$throw, done) => more(v1 => Parsing.position(
  state1,
  more,
  lift1,
  $$throw,
  (state2, a) => more(v2 => more(v1$1 => get$p(
    state2,
    more,
    lift1,
    $$throw,
    (state2$1, a$1) => more(v2$1 => {
      if (a.column <= a$1.column) { return Parsing.fail("not indented")(state2$1, more, lift1, $$throw, done); }
      return put$p({index: 0, line: a.line, column: a$1.column})(state2$1, more, lift1, $$throw, done);
    })
  )))
));
const indented$p = (state1, more, lift1, $$throw, done) => more(v1 => Parsing.position(
  state1,
  more,
  lift1,
  $$throw,
  (state2, a) => more(v2 => more(v1$1 => get$p(
    state2,
    more,
    lift1,
    $$throw,
    (state2$1, a$1) => more(v2$1 => {
      if (a.column <= a$1.column) { return Parsing.fail("not indented")(state2$1, more, lift1, $$throw, done); }
      return done(state2$1, undefined);
    })
  )))
));
const sameLine = (state1, more, lift1, $$throw, done) => more(v1 => Parsing.position(
  state1,
  more,
  lift1,
  $$throw,
  (state2, a) => more(v2 => more(v1$1 => get$p(
    state2,
    more,
    lift1,
    $$throw,
    (state2$1, a$1) => more(v2$1 => {
      if (a.line === a$1.line) { return done(state2$1, undefined); }
      return Parsing.fail("over one line")(state2$1, more, lift1, $$throw, done);
    })
  )))
));
const sameOrIndented = (v2, $0, $1, $2, $3) => {
  const $4 = v2._1;
  const $5 = v2._2;
  return $0(v3 => sameLine(
    Parsing.$ParseState($4, $5, false),
    $0,
    $1,
    (v4, $6) => {
      const $7 = v4._3;
      return $0(v5 => {
        if ($7) { return $2(v4, $6); }
        return indented(v2, $0, $1, $2, $3);
      });
    },
    $3
  ));
};
const indentAp = a => b => (state1, more, lift1, $$throw, done) => more(v1 => a(
  state1,
  more,
  lift1,
  $$throw,
  (state2, a$1) => more(v2 => more(v1$1 => more(v2$1 => more(v1$2 => sameOrIndented(
    state2,
    more,
    lift1,
    $$throw,
    (state2$1, a$2) => more(v2$2 => more(v3 => b(state2$1, more, lift1, $$throw, (state3, a$3) => more(v4 => more(v2$3 => done(state3, a$1(a$3)))))))
  )))))
));
const indentMany = a => b => {
  const $0 = Data$dList.many(Parsing.alternativeParserT)(Parsing.lazyParserT)((state1, more, lift1, $$throw, done) => more(v2 => more(v1 => sameOrIndented(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a$1) => more(v2$1 => more(v3 => b(state2, more, lift1, $$throw, (state3, a$2) => more(v4 => done(state3, a$2)))))
  ))));
  return (state1, more, lift1, $$throw, done) => more(v1 => a(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a$1) => more(v2 => more(v1$1 => $0(state2, more, lift1, $$throw, (state2$1, a$2) => more(v2$1 => done(state2$1, a$1(a$2))))))
  ));
};
const indentNoAp = a => b => (state1, more, lift1, $$throw, done) => more(v2 => more(v1 => a(
  state1,
  more,
  lift1,
  $$throw,
  (state2, a$1) => more(v2$1 => more(v3 => more(v2$2 => more(v1$1 => sameOrIndented(
    state2,
    more,
    lift1,
    $$throw,
    (state2$1, a$2) => more(v2$3 => more(v3$1 => b(state2$1, more, lift1, $$throw, (state3, a$3) => more(v4 => more(v4$1 => done(state3, a$1))))))
  )))))
)));
const indentOp = a => v => {
  const $0 = v._1;
  return (state1, more, lift1, $$throw, done) => more(v1 => a(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a$1) => more(v2 => more(v1$1 => {
      const $1 = state2._1;
      const $2 = state2._2;
      return more(v3 => {
        const $3 = (v4, $3) => {
          const $4 = v4._3;
          return more(v5 => {
            if ($4) { return $$throw(v4, $3); }
            return more(v2$1 => done(state2, a$1($0)));
          });
        };
        return more(v2$1 => more(v1$2 => sameOrIndented(
          Parsing.$ParseState($1, $2, false),
          more,
          lift1,
          $3,
          (state2$1, a$2) => more(v2$2 => more(v3$1 => v._2(state2$1, more, lift1, $3, (state3, a$3) => more(v4 => more(v2$3 => done(state3, a$1(a$3)))))))
        )));
      });
    }))
  ));
};
const withPos = x => (state1, more, lift1, $$throw, done) => more(v1 => get$p(
  state1,
  more,
  lift1,
  $$throw,
  (state2, a) => more(v2 => more(v1$1 => Parsing.position(
    state2,
    more,
    lift1,
    $$throw,
    (state2$1, a$1) => more(v2$1 => more(v1$2 => more(v2$2 => more(v1$3 => put$p(a$1)(
      state2$1,
      more,
      lift1,
      $$throw,
      (state2$2, a$2) => more(v2$3 => more(v3 => x(
        state2$2,
        more,
        lift1,
        $$throw,
        (state3, a$3) => more(v4 => more(v2$4 => more(v2$5 => more(v1$4 => put$p(a)(
          state3,
          more,
          lift1,
          $$throw,
          (state2$3, a$4) => more(v2$6 => more(v3$1 => more(v4$1 => done(state2$3, a$3))))
        )))))
      )))
    )))))
  )))
));
const indentAngles = p => withPos(indentAp(indentNoAp((state1, v, v1, v2, done) => done(state1, identity))(symbol("<")))(indentNoAp(p)(symbol(">"))));
const indentBraces = p => withPos(indentAp(indentNoAp((state1, v, v1, v2, done) => done(state1, identity))(symbol("{")))(indentNoAp(p)(symbol("}"))));
const indentBrackets = p => withPos(indentAp(indentNoAp((state1, v, v1, v2, done) => done(state1, identity))(symbol("[")))(indentNoAp(p)(symbol("]"))));
const indentParens = p => withPos(indentAp(indentNoAp((state1, v, v1, v2, done) => done(state1, identity))(symbol("(")))(indentNoAp(p)(symbol(")"))));
const checkIndent = (state1, more, lift1, $$throw, done) => more(v1 => Parsing.position(
  state1,
  more,
  lift1,
  $$throw,
  (state2, a) => more(v2 => more(v1$1 => get$p(
    state2,
    more,
    lift1,
    $$throw,
    (state2$1, a$1) => more(v2$1 => {
      if (a.column === a$1.column) { return done(state2$1, undefined); }
      return Parsing.fail("indentation doesn't match")(state2$1, more, lift1, $$throw, done);
    })
  )))
));
const block1 = p => withPos((() => {
  const $0 = many1((state1, more, lift1, $$throw, done) => more(v2 => more(v1 => checkIndent(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2$1 => more(v3 => p(state2, more, lift1, $$throw, (state3, a$1) => more(v4 => done(state3, a$1)))))
  ))));
  return (state1, more, lift1, $$throw, done) => more(v1 => $0(state1, more, lift1, $$throw, (state2, a) => more(v2 => done(state2, a))));
})());
const block = p => withPos((() => {
  const $0 = Data$dList.many(Parsing.alternativeParserT)(Parsing.lazyParserT)((state1, more, lift1, $$throw, done) => more(v2 => more(v1 => checkIndent(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2$1 => more(v3 => p(state2, more, lift1, $$throw, (state3, a$1) => more(v4 => done(state3, a$1)))))
  ))));
  return (state1, more, lift1, $$throw, done) => more(v1 => $0(state1, more, lift1, $$throw, (state2, a) => more(v2 => done(state2, a))));
})());
const withBlock = f => a => p => withPos((state1, more, lift1, $$throw, done) => more(v1 => a(
  state1,
  more,
  lift1,
  $$throw,
  (state2, a$1) => more(v2 => {
    const $0 = Parsing$dCombinators.optionMaybe((state1$1, more$1, lift1$1, throw$1, done$1) => more$1(v2$1 => more$1(v1$1 => indented(
      state1$1,
      more$1,
      lift1$1,
      throw$1,
      (state2$1, a$2) => more$1(v2$2 => more$1(v3 => block(p)(state2$1, more$1, lift1$1, throw$1, (state3, a$3) => more$1(v4 => done$1(state3, a$3)))))
    ))));
    return more(v1$1 => $0(
      state2,
      more,
      lift1,
      $$throw,
      (state2$1, a$2) => more(v2$1 => {
        if (a$2.tag === "Nothing") { return done(state2$1, f(a$1)(Data$dList$dTypes.Nil)); }
        if (a$2.tag === "Just") { return done(state2$1, f(a$1)(a$2._1)); }
        $runtime.fail();
      })
    ));
  })
)));
const withBlock$p = /* #__PURE__ */ withBlock(b => a => a);
export {
  $Optional,
  Opt,
  block,
  block1,
  checkIndent,
  get$p,
  identity,
  indentAngles,
  indentAp,
  indentBraces,
  indentBrackets,
  indentMany,
  indentNoAp,
  indentOp,
  indentParens,
  indented,
  indented$p,
  lift,
  many1,
  monadStateStateT,
  put$p,
  runIndent,
  sameLine,
  sameOrIndented,
  symbol,
  withBlock,
  withBlock$p,
  withPos
};
