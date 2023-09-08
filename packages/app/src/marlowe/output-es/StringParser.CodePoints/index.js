// | Primitive parsers for strings, parsing based on code points.
// |
// | These functions will be much slower than the `CodeUnits` alternatives, but
// | will behave correctly in the presence of Unicode characters made up of
// | multiple code units.
import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dEnum from "../Data.Enum/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dString$dCodePoints from "../Data.String.CodePoints/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dString$dRegex from "../Data.String.Regex/index.js";
import * as Data$dString$dRegex$dFlags from "../Data.String.Regex.Flags/index.js";
import * as StringParser$dCodeUnits from "../StringParser.CodeUnits/index.js";
import * as StringParser$dCombinators from "../StringParser.Combinators/index.js";
const elem = /* #__PURE__ */ (() => {
  const any1 = Data$dFoldable.foldableArray.foldMap((() => {
    const semigroupDisj1 = {append: v => v1 => v || v1};
    return {mempty: false, Semigroup0: () => semigroupDisj1};
  })());
  return x => any1($0 => x === $0);
})();
const foldMap = /* #__PURE__ */ (() => Data$dList$dTypes.foldableList.foldMap(Data$dMonoid.monoidString))();
const upperCaseChar = s => {
  const $0 = StringParser$dCodeUnits.anyChar(s);
  const v1 = (() => {
    if ($0.tag === "Left") {
      const $1 = $0._1;
      return v => Data$dEither.$Either("Left", $1);
    }
    if ($0.tag === "Right") {
      const $1 = $0._1;
      return f => f($1);
    }
    $runtime.fail();
  })()(v1 => {
    if (elem(Data$dEnum.toCharCode(v1.result))(Data$dArray.range(65)(90))) { return Data$dEither.$Either("Right", {result: v1.result, suffix: v1.suffix}); }
    return Data$dEither.$Either("Left", {pos: v1.suffix.position, error: "Expected an upper case character but found " + Data$dShow.showCharImpl(v1.result)});
  });
  if (v1.tag === "Left") { return Data$dEither.$Either("Left", {pos: s.position, error: v1._1.error}); }
  return v1;
};
const string = pattern => v => {
  const length = Data$dString$dCodePoints.toCodePointArray(pattern).length;
  const v1 = Data$dString$dCodePoints.splitAt(length)(v.substring);
  if (v1.before === pattern) { return Data$dEither.$Either("Right", {result: pattern, suffix: {substring: v1.after, position: v.position + length | 0}}); }
  return Data$dEither.$Either("Left", {pos: v.position, error: "Expected '" + pattern + "'."});
};
const regex = pat => {
  const v = Data$dString$dRegex.regex("^(" + pat + ")")(Data$dString$dRegex$dFlags.noFlags);
  if (v.tag === "Left") {
    const $0 = "StringParser.String.regex': illegal regex " + pat;
    return v$1 => Data$dEither.$Either("Left", {pos: v$1.position, error: $0});
  }
  if (v.tag === "Right") {
    const $0 = v._1;
    return v$1 => {
      const $1 = Data$dString$dRegex.match($0)(v$1.substring);
      if (
        $1.tag === "Just" && (() => {
          const $2 = Data$dArray.index($1._1)(0);
          if ($2.tag === "Just") { return $2._1.tag === "Just"; }
          $runtime.fail();
        })()
      ) {
        return Data$dEither.$Either(
          "Right",
          {
            result: (() => {
              const $2 = Data$dArray.index($1._1)(0);
              if ($2.tag === "Just") { return $2._1._1; }
              $runtime.fail();
            })(),
            suffix: {
              substring: Data$dString$dCodeUnits.drop(Data$dString$dCodeUnits.length(Data$dString$dCodePoints.take(Data$dString$dCodePoints.toCodePointArray((() => {
                const $2 = Data$dArray.index($1._1)(0);
                if ($2.tag === "Just") { return $2._1._1; }
                $runtime.fail();
              })()).length)(v$1.substring)))(v$1.substring),
              position: v$1.position + Data$dString$dCodePoints.toCodePointArray((() => {
                const $2 = Data$dArray.index($1._1)(0);
                if ($2.tag === "Just") { return $2._1._1; }
                $runtime.fail();
              })()).length | 0
            }
          }
        );
      }
      return Data$dEither.$Either("Left", {pos: v$1.position, error: "no match"});
    };
  }
  $runtime.fail();
};
const lowerCaseChar = s => {
  const $0 = StringParser$dCodeUnits.anyChar(s);
  const v1 = (() => {
    if ($0.tag === "Left") {
      const $1 = $0._1;
      return v => Data$dEither.$Either("Left", $1);
    }
    if ($0.tag === "Right") {
      const $1 = $0._1;
      return f => f($1);
    }
    $runtime.fail();
  })()(v1 => {
    if (elem(Data$dEnum.toCharCode(v1.result))(Data$dArray.range(97)(122))) { return Data$dEither.$Either("Right", {result: v1.result, suffix: v1.suffix}); }
    return Data$dEither.$Either("Left", {pos: v1.suffix.position, error: "Expected a lower case character but found " + Data$dShow.showCharImpl(v1.result)});
  });
  if (v1.tag === "Left") { return Data$dEither.$Either("Left", {pos: s.position, error: v1._1.error}); }
  return v1;
};
const eof = s => {
  if (0 < Data$dString$dCodePoints.toCodePointArray(s.substring).length) { return Data$dEither.$Either("Left", {pos: s.position, error: "Expected EOF"}); }
  return Data$dEither.$Either("Right", {result: undefined, suffix: s});
};
const anyLetter = s => {
  const v2 = lowerCaseChar(s);
  if (v2.tag === "Left") {
    if (s.position === v2._1.pos) {
      const v2$1 = upperCaseChar(s);
      if (v2$1.tag === "Left") {
        if (s.position === v2$1._1.pos) { return Data$dEither.$Either("Left", {pos: s.position, error: "Expected a letter"}); }
        return Data$dEither.$Either("Left", {error: v2$1._1.error, pos: v2$1._1.pos});
      }
      return v2$1;
    }
    return Data$dEither.$Either("Left", {error: v2._1.error, pos: v2._1.pos});
  }
  return v2;
};
const anyDigit = s => {
  const $0 = StringParser$dCodeUnits.anyChar(s);
  const v1 = (() => {
    if ($0.tag === "Left") {
      const $1 = $0._1;
      return v => Data$dEither.$Either("Left", $1);
    }
    if ($0.tag === "Right") {
      const $1 = $0._1;
      return f => f($1);
    }
    $runtime.fail();
  })()(v1 => {
    if (v1.result >= "0" && v1.result <= "9") { return Data$dEither.$Either("Right", {result: v1.result, suffix: v1.suffix}); }
    return Data$dEither.$Either("Left", {pos: v1.suffix.position, error: "Character " + Data$dShow.showCharImpl(v1.result) + " is not a digit"});
  });
  if (v1.tag === "Left") { return Data$dEither.$Either("Left", {pos: s.position, error: v1._1.error}); }
  return v1;
};
const anyCodePoint = v => {
  const v1 = Data$dString$dCodePoints.uncons(v.substring);
  if (v1.tag === "Nothing") { return Data$dEither.$Either("Left", {pos: v.position, error: "Unexpected EOF"}); }
  if (v1.tag === "Just") { return Data$dEither.$Either("Right", {result: v1._1.head, suffix: {substring: v1._1.tail, position: v.position + 1 | 0}}); }
  $runtime.fail();
};
const satisfyCodePoint = f => s => {
  const $0 = anyCodePoint(s);
  const v1 = (() => {
    if ($0.tag === "Left") {
      const $1 = $0._1;
      return v => Data$dEither.$Either("Left", $1);
    }
    if ($0.tag === "Right") {
      const $1 = $0._1;
      return f$1 => f$1($1);
    }
    $runtime.fail();
  })()(v1 => {
    if (f(v1.result)) { return Data$dEither.$Either("Right", {result: v1.result, suffix: v1.suffix}); }
    return Data$dEither.$Either(
      "Left",
      {pos: v1.suffix.position, error: "Code point (CodePoint 0x" + Data$dString$dCommon.toUpper(Data$dInt.toStringAs(16)(v1.result)) + ") did not satisfy predicate"}
    );
  });
  if (v1.tag === "Left") { return Data$dEither.$Either("Left", {pos: s.position, error: v1._1.error}); }
  return v1;
};
const codePoint = c => {
  const $0 = satisfyCodePoint(v => v === c);
  const $1 = "Could not match code point (CodePoint 0x" + Data$dString$dCommon.toUpper(Data$dInt.toStringAs(16)(c)) + ")";
  return s => {
    const v2 = $0(s);
    if (v2.tag === "Left") {
      if (s.position === v2._1.pos) { return Data$dEither.$Either("Left", {pos: s.position, error: $1}); }
      return Data$dEither.$Either("Left", {error: v2._1.error, pos: v2._1.pos});
    }
    return v2;
  };
};
const anyChar = s => {
  const $0 = anyCodePoint(s);
  if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
  if ($0.tag === "Right") {
    if ($0._1.result >= 0 && $0._1.result <= 65535) {
      if ($0._1.result > 65535) {
        return Data$dEither.$Either("Left", {pos: $0._1.suffix.position, error: "Code point " + Data$dShow.showIntImpl($0._1.result) + " is not a character"});
      }
      return Data$dEither.$Either("Right", {result: Data$dEnum.fromCharCode($0._1.result), suffix: $0._1.suffix});
    }
    return Data$dEither.$Either("Left", {pos: $0._1.suffix.position, error: "Code point " + Data$dShow.showIntImpl($0._1.result) + " is not a character"});
  }
  $runtime.fail();
};
const satisfy = f => s => {
  const $0 = anyChar(s);
  const v1 = (() => {
    if ($0.tag === "Left") {
      const $1 = $0._1;
      return v => Data$dEither.$Either("Left", $1);
    }
    if ($0.tag === "Right") {
      const $1 = $0._1;
      return f$1 => f$1($1);
    }
    $runtime.fail();
  })()(v1 => {
    if (f(v1.result)) { return Data$dEither.$Either("Right", {result: v1.result, suffix: v1.suffix}); }
    return Data$dEither.$Either("Left", {pos: v1.suffix.position, error: "Character " + Data$dShow.showCharImpl(v1.result) + " did not satisfy predicate"});
  });
  if (v1.tag === "Left") { return Data$dEither.$Either("Left", {pos: s.position, error: v1._1.error}); }
  return v1;
};
const $$char = c => {
  const $0 = satisfy(v => v === c);
  const $1 = "Could not match character " + Data$dShow.showCharImpl(c);
  return s => {
    const v2 = $0(s);
    if (v2.tag === "Left") {
      if (s.position === v2._1.pos) { return Data$dEither.$Either("Left", {pos: s.position, error: $1}); }
      return Data$dEither.$Either("Left", {error: v2._1.error, pos: v2._1.pos});
    }
    return v2;
  };
};
const noneOf = dictFoldable => {
  const any1 = dictFoldable.foldMap((() => {
    const semigroupDisj1 = {append: v => v1 => v || v1};
    return {mempty: false, Semigroup0: () => semigroupDisj1};
  })());
  return x => satisfy(a => !any1($0 => a === $0)(x));
};
const oneOf = dictFoldable => {
  const any1 = dictFoldable.foldMap((() => {
    const semigroupDisj1 = {append: v => v1 => v || v1};
    return {mempty: false, Semigroup0: () => semigroupDisj1};
  })());
  return x => satisfy(a => any1($0 => a === $0)(x));
};
const whiteSpace = /* #__PURE__ */ (() => {
  const $0 = StringParser$dCombinators.many(satisfy(c => c === "\n" || c === "\r" || c === " " || c === "\t"));
  return s => {
    const $1 = $0(s);
    return (() => {
      if ($1.tag === "Left") {
        const $2 = $1._1;
        return v => Data$dEither.$Either("Left", $2);
      }
      if ($1.tag === "Right") {
        const $2 = $1._1;
        return f => f($2);
      }
      $runtime.fail();
    })()(v1 => Data$dEither.$Either("Right", {result: foldMap(Data$dString$dCodeUnits.singleton)(v1.result), suffix: v1.suffix}));
  };
})();
const skipSpaces = x => {
  const $0 = whiteSpace(x);
  if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
  if ($0.tag === "Right") { return Data$dEither.$Either("Right", {result: undefined, suffix: $0._1.suffix}); }
  $runtime.fail();
};
const alphaNum = s => {
  const v2 = anyLetter(s);
  if (v2.tag === "Left") {
    if (s.position === v2._1.pos) {
      const v2$1 = anyDigit(s);
      if (v2$1.tag === "Left") {
        if (s.position === v2$1._1.pos) { return Data$dEither.$Either("Left", {pos: s.position, error: "Expected a letter or a number"}); }
        return Data$dEither.$Either("Left", {error: v2$1._1.error, pos: v2$1._1.pos});
      }
      return v2$1;
    }
    return Data$dEither.$Either("Left", {error: v2._1.error, pos: v2._1.pos});
  }
  return v2;
};
export {
  alphaNum,
  anyChar,
  anyCodePoint,
  anyDigit,
  anyLetter,
  $$char as char,
  codePoint,
  elem,
  eof,
  foldMap,
  lowerCaseChar,
  noneOf,
  oneOf,
  regex,
  satisfy,
  satisfyCodePoint,
  skipSpaces,
  string,
  upperCaseChar,
  whiteSpace
};
