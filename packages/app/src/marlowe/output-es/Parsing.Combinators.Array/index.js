// | These combinators will produce `Array`s, as opposed to the other combinators
// | of the same names in the __Parsing.Combinators__ module
// | which mostly produce `List`s. These `Array` combinators will run in a bit
// | less time (*~85% runtime*) than the similar `List` combinators, and they will run in a
// | lot less time (*~10% runtime*) than the similar combinators in __Data.Array__.
// |
// | If there is some other combinator which returns
// | a `List` but we want an `Array`, and there is no `Array` version of the
// | combinator in this module, then we can rely on the
// | [__`Data.Array.fromFoldable`__](https://pursuit.purescript.org/packages/purescript-arrays/docs/Data.Array#v:fromFoldable)
// | function for a pretty fast transformation from `List` to `Array`.
import * as $runtime from "../runtime.js";
import * as Control$dMonad$dRec$dClass from "../Control.Monad.Rec.Class/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Parsing from "../Parsing/index.js";
const fromFoldable = /* #__PURE__ */ (() => Data$dArray.fromFoldableImpl(Data$dList$dTypes.foldableList.foldr))();
const manyTill_ = p => end => (state1, more, lift1, $$throw, done) => more(v1 => {
  const loop = (state2, arg, gas) => {
    const $0 = (state3, step) => {
      if (step.tag === "Loop") {
        if (gas === 0) { return more(v1$1 => loop(state3, step._1, 30)); }
        return loop(state3, step._1, gas - 1 | 0);
      }
      if (step.tag === "Done") {
        const $0 = step._1;
        return more(v2 => done(state3, Data$dTuple.$Tuple(Data$dArray.reverse(fromFoldable($0._1)), $0._2)));
      }
      $runtime.fail();
    };
    const $1 = state2._1;
    const $2 = state2._2;
    return more(v3 => more(v1$1 => end(
      Parsing.$ParseState($1, $2, false),
      more,
      lift1,
      (v4, $3) => {
        const $4 = v4._3;
        return more(v5 => {
          if ($4) { return $$throw(v4, $3); }
          return more(v1$2 => p(
            state2,
            more,
            lift1,
            $$throw,
            (state2$1, a) => more(v2 => $0(state2$1, Control$dMonad$dRec$dClass.$Step("Loop", Data$dList$dTypes.$List("Cons", a, arg))))
          ));
        });
      },
      (state2$1, a) => more(v2 => $0(state2$1, Control$dMonad$dRec$dClass.$Step("Done", Data$dTuple.$Tuple(arg, a))))
    )));
  };
  return loop(state1, Data$dList$dTypes.Nil, 30);
});
const manyIndex = from => to => p => {
  if (from > to || from < 0) { return (state1, v, v1, v2, done) => done(state1, Data$dTuple.$Tuple(0, [])); }
  return (state1, more, lift1, $$throw, done) => more(v1 => {
    const loop = (state2, arg, gas) => (() => {
      if (arg._1 >= to) { return (state1$1, v, v1$1, v2, done$1) => done$1(state1$1, Control$dMonad$dRec$dClass.$Step("Done", Data$dTuple.$Tuple(arg._1, arg._2))); }
      const $0 = p(arg._1);
      return (state1$1, more$1, lift1$1, throw$1, done$1) => more$1(v1$1 => more$1(v1$2 => $0(
        state1$1,
        more$1,
        lift1$1,
        (state2$1, err) => {
          if (arg._1 >= from) { return done$1(state2$1, Control$dMonad$dRec$dClass.$Step("Done", Data$dTuple.$Tuple(arg._1, arg._2))); }
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
          if (gas === 0) { return more(v1$1 => loop(state3, step._1, 30)); }
          return loop(state3, step._1, gas - 1 | 0);
        }
        if (step.tag === "Done") {
          const $0 = step._1;
          return more(v2 => done(state3, Data$dTuple.$Tuple($0._1, Data$dArray.reverse(fromFoldable($0._2)))));
        }
        $runtime.fail();
      }
    );
    return loop(state1, Data$dTuple.$Tuple(0, Data$dList$dTypes.Nil), 30);
  });
};
const many = p => (state1, more, lift1, $$throw, done) => more(v1 => {
  const loop = (state2, arg, gas) => {
    const $0 = (state3, step) => {
      if (step.tag === "Loop") {
        if (gas === 0) { return more(v1$1 => loop(state3, step._1, 30)); }
        return loop(state3, step._1, gas - 1 | 0);
      }
      if (step.tag === "Done") {
        const $0 = step._1;
        return more(v2 => done(state3, Data$dArray.reverse(fromFoldable($0))));
      }
      $runtime.fail();
    };
    const $1 = state2._1;
    const $2 = state2._2;
    return more(v3 => more(v1$1 => p(
      Parsing.$ParseState($1, $2, false),
      more,
      lift1,
      (v2, $3) => more(v5 => $0(state2, Control$dMonad$dRec$dClass.$Step("Done", arg))),
      (state2$1, a) => more(v2 => $0(state2$1, Control$dMonad$dRec$dClass.$Step("Loop", Data$dList$dTypes.$List("Cons", a, arg))))
    )));
  };
  return loop(state1, Data$dList$dTypes.Nil, 30);
});
const many1 = p => (state1, more, lift1, $$throw, done) => more(v1 => many(p)(
  state1,
  more,
  lift1,
  $$throw,
  (state2, a) => more(v2 => {
    if (a.length > 0) { return done(state2, a); }
    return Parsing.fail("Expected at least 1")(state2, more, lift1, $$throw, done);
  })
));
export {fromFoldable, many, many1, manyIndex, manyTill_};
