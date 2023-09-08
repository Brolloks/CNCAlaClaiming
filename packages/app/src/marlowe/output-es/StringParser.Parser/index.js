// | This module defines the `Parser` type of string parsers, and its instances.
import * as $runtime from "../runtime.js";
import * as Control$dMonad$dRec$dClass from "../Control.Monad.Rec.Class/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dShow from "../Data.Show/index.js";
const Parser = x => x;
const unParser = v => v;
const runParser = v => s => {
  const $0 = v({substring: s, position: 0});
  if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
  if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1.result); }
  $runtime.fail();
};
const printParserError = rec => rec.error + "; pos = " + Data$dShow.showIntImpl(rec.pos);
const lazyParser = {defer: f => str => f()(str)};
const functorParser = {
  map: f => v => x => {
    const $0 = v(x);
    if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
    if ($0.tag === "Right") { return Data$dEither.$Either("Right", {result: f($0._1.result), suffix: $0._1.suffix}); }
    $runtime.fail();
  }
};
const fail = error => v => Data$dEither.$Either("Left", {pos: v.position, error});
const applyParser = {
  apply: v => v1 => s => {
    const $0 = v(s);
    return (() => {
      if ($0.tag === "Left") {
        const $1 = $0._1;
        return v$1 => Data$dEither.$Either("Left", $1);
      }
      if ($0.tag === "Right") {
        const $1 = $0._1;
        return f => f($1);
      }
      $runtime.fail();
    })()(v2 => {
      const $1 = v1(v2.suffix);
      return (() => {
        if ($1.tag === "Left") {
          const $2 = $1._1;
          return v$1 => Data$dEither.$Either("Left", $2);
        }
        if ($1.tag === "Right") {
          const $2 = $1._1;
          return f => f($2);
        }
        $runtime.fail();
      })()(v3 => Data$dEither.$Either("Right", {result: v2.result(v3.result), suffix: v3.suffix}));
    });
  },
  Functor0: () => functorParser
};
const bindParser = {
  bind: v => f => s => {
    const $0 = v(s);
    return (() => {
      if ($0.tag === "Left") {
        const $1 = $0._1;
        return v$1 => Data$dEither.$Either("Left", $1);
      }
      if ($0.tag === "Right") {
        const $1 = $0._1;
        return f$1 => f$1($1);
      }
      $runtime.fail();
    })()(v1 => f(v1.result)(v1.suffix));
  },
  Apply0: () => applyParser
};
const semigroupParser = dictSemigroup => (
  {
    append: a => b => applyParser.apply(x => {
      const $0 = a(x);
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") { return Data$dEither.$Either("Right", {result: dictSemigroup.append($0._1.result), suffix: $0._1.suffix}); }
      $runtime.fail();
    })(b)
  }
);
const applicativeParser = {pure: a => s => Data$dEither.$Either("Right", {result: a, suffix: s}), Apply0: () => applyParser};
const monadParser = {Applicative0: () => applicativeParser, Bind1: () => bindParser};
const monadRecParser = {
  tailRecM: f => a => str => {
    const $0 = st => {
      const $0 = f(st.state)(st.str);
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") {
        return Data$dEither.$Either(
          "Right",
          (() => {
            if ($0._1.result.tag === "Loop") { return Control$dMonad$dRec$dClass.$Step("Loop", {state: $0._1.result._1, str: $0._1.suffix}); }
            if ($0._1.result.tag === "Done") { return Control$dMonad$dRec$dClass.$Step("Done", {result: $0._1.result._1, suffix: $0._1.suffix}); }
            $runtime.fail();
          })()
        );
      }
      $runtime.fail();
    };
    const $1 = v => {
      if (v.tag === "Left") { return Control$dMonad$dRec$dClass.$Step("Done", Data$dEither.$Either("Left", v._1)); }
      if (v.tag === "Right") {
        if (v._1.tag === "Loop") { return Control$dMonad$dRec$dClass.$Step("Loop", $0(v._1._1)); }
        if (v._1.tag === "Done") { return Control$dMonad$dRec$dClass.$Step("Done", Data$dEither.$Either("Right", v._1._1)); }
      }
      $runtime.fail();
    };
    const go = go$a0$copy => {
      let go$a0 = go$a0$copy, go$c = true, go$r;
      while (go$c) {
        const v = go$a0;
        if (v.tag === "Loop") {
          go$a0 = $1(v._1);
          continue;
        }
        if (v.tag === "Done") {
          go$c = false;
          go$r = v._1;
          continue;
        }
        $runtime.fail();
      }
      return go$r;
    };
    return go($1($0({state: a, str})));
  },
  Monad0: () => monadParser
};
const monoidParser = dictMonoid => {
  const semigroupParser1 = semigroupParser(dictMonoid.Semigroup0());
  return {
    mempty: (() => {
      const $0 = dictMonoid.mempty;
      return s => Data$dEither.$Either("Right", {result: $0, suffix: s});
    })(),
    Semigroup0: () => semigroupParser1
  };
};
const altParser = {
  alt: v => v1 => s => {
    const v2 = v(s);
    if (v2.tag === "Left") {
      if (s.position === v2._1.pos) { return v1(s); }
      return Data$dEither.$Either("Left", {error: v2._1.error, pos: v2._1.pos});
    }
    return v2;
  },
  Functor0: () => functorParser
};
const plusParser = {empty: v => Data$dEither.$Either("Left", {pos: v.position, error: "No alternative"}), Alt0: () => altParser};
const alternativeParser = {Applicative0: () => applicativeParser, Plus1: () => plusParser};
const monadPlusParser = {Monad0: () => monadParser, Alternative1: () => alternativeParser};
export {
  Parser,
  altParser,
  alternativeParser,
  applicativeParser,
  applyParser,
  bindParser,
  fail,
  functorParser,
  lazyParser,
  monadParser,
  monadPlusParser,
  monadRecParser,
  monoidParser,
  plusParser,
  printParserError,
  runParser,
  semigroupParser,
  unParser
};
