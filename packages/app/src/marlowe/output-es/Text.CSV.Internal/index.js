import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dString$dRegex from "../Data.String.Regex/index.js";
import * as Data$dString$dRegex$dFlags from "../Data.String.Regex.Flags/index.js";
import * as Data$dString$dRegex$dUnsafe from "../Data.String.Regex.Unsafe/index.js";
import * as StringParser$dCodeUnits from "../StringParser.CodeUnits/index.js";
import * as StringParser$dCombinators from "../StringParser.Combinators/index.js";
import * as StringParser$dParser from "../StringParser.Parser/index.js";
const $CSVType = tag => tag;
const oneOf = /* #__PURE__ */ StringParser$dCodeUnits.oneOf(Data$dFoldable.foldableArray);
const noneOf = /* #__PURE__ */ StringParser$dCodeUnits.noneOf(Data$dFoldable.foldableArray);
const fromFoldable = /* #__PURE__ */ (() => Data$dArray.fromFoldableImpl(Data$dList$dTypes.foldableList.foldr))();
const fromFoldable1 = /* #__PURE__ */ (() => Data$dArray.fromFoldableImpl(Data$dList$dTypes.foldableNonEmptyList.foldr))();
const CommaSeparated = /* #__PURE__ */ $CSVType("CommaSeparated");
const TabSeparated = /* #__PURE__ */ $CSVType("TabSeparated");
const escapeField = csvType => s => {
  if (
    Data$dString$dRegex.test(Data$dString$dRegex$dUnsafe.unsafeRegex((() => {
      if (csvType === "CommaSeparated") { return "(,|\"|\n)"; }
      if (csvType === "TabSeparated") { return "(\t|\"|\n)"; }
      $runtime.fail();
    })())(Data$dString$dRegex$dFlags.noFlags))(s)
  ) {
    return "\"" + Data$dString$dCommon.replaceAll("\"")("\"\"")(s) + "\"";
  }
  return s;
};
const csvParser = csvType => {
  const separator = (() => {
    if (csvType === "CommaSeparated") { return ","; }
    if (csvType === "TabSeparated") { return "\t"; }
    $runtime.fail();
  })();
  const $0 = StringParser$dCombinators.sepBy1((() => {
    const $0 = StringParser$dCombinators.sepBy((() => {
      const $0 = Data$dString$dCommon.joinWith("\"");
      const $1 = Data$dArray.some(StringParser$dParser.alternativeParser)(StringParser$dParser.lazyParser)((() => {
        const $1 = StringParser$dCodeUnits.char("\"");
        return s => {
          const $2 = $1(s);
          if ($2.tag === "Left") { return Data$dEither.$Either("Left", $2._1); }
          if ($2.tag === "Right") {
            const $3 = StringParser$dCombinators.manyTill(StringParser$dCodeUnits.anyChar)(StringParser$dCodeUnits.char("\""))($2._1.suffix);
            if ($3.tag === "Left") { return Data$dEither.$Either("Left", $3._1); }
            if ($3.tag === "Right") { return Data$dEither.$Either("Right", {result: Data$dString$dCodeUnits.fromCharArray(fromFoldable($3._1.result)), suffix: $3._1.suffix}); }
          }
          $runtime.fail();
        };
      })());
      const $2 = Data$dArray.many(StringParser$dParser.alternativeParser)(StringParser$dParser.lazyParser)(noneOf([separator, "\r", "\n"]));
      return s => {
        const $3 = $1(s);
        const v2 = (() => {
          if ($3.tag === "Left") { return Data$dEither.$Either("Left", $3._1); }
          if ($3.tag === "Right") { return Data$dEither.$Either("Right", {result: $0($3._1.result), suffix: $3._1.suffix}); }
          $runtime.fail();
        })();
        if (v2.tag === "Left") {
          if (s.position === v2._1.pos) {
            const $4 = $2(s);
            if ($4.tag === "Left") { return Data$dEither.$Either("Left", $4._1); }
            if ($4.tag === "Right") { return Data$dEither.$Either("Right", {result: Data$dString$dCodeUnits.fromCharArray($4._1.result), suffix: $4._1.suffix}); }
            $runtime.fail();
          }
          return Data$dEither.$Either("Left", {error: v2._1.error, pos: v2._1.pos});
        }
        return v2;
      };
    })())(StringParser$dCodeUnits.char(separator));
    return x => {
      const $1 = $0(x);
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
      if ($1.tag === "Right") { return Data$dEither.$Either("Right", {result: fromFoldable($1._1.result), suffix: $1._1.suffix}); }
      $runtime.fail();
    };
  })())((() => {
    const $0 = oneOf(["\r", "\n"]);
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
      })()(v1 => {
        if (v1.result === "\r") {
          const $2 = StringParser$dCodeUnits.char("\n")(v1.suffix);
          const v2 = (() => {
            if ($2.tag === "Left") {
              const $3 = $2._1;
              return v => Data$dEither.$Either("Left", $3);
            }
            if ($2.tag === "Right") {
              const $3 = $2._1;
              return f => f($3);
            }
            $runtime.fail();
          })()(v1$1 => Data$dEither.$Either("Right", {result: undefined, suffix: v1$1.suffix}));
          if (v2.tag === "Left") {
            if (v1.suffix.position === v2._1.pos) { return Data$dEither.$Either("Right", {result: undefined, suffix: v1.suffix}); }
            return Data$dEither.$Either("Left", {error: v2._1.error, pos: v2._1.pos});
          }
          return v2;
        }
        return Data$dEither.$Either("Right", {result: undefined, suffix: v1.suffix});
      });
    };
  })());
  return s => {
    const $1 = $0(s);
    if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
    if ($1.tag === "Right") {
      const $2 = fromFoldable1($1._1.result);
      const v = Data$dArray.index(Data$dArray.reverse($2))(0);
      if (v.tag === "Just" && v._1.length === 1 && v._1[0] === "") { return Data$dEither.$Either("Right", {result: Data$dArray.dropEnd(1)($2), suffix: $1._1.suffix}); }
      return Data$dEither.$Either("Right", {result: $2, suffix: $1._1.suffix});
    }
    $runtime.fail();
  };
};
export {$CSVType, CommaSeparated, TabSeparated, csvParser, escapeField, fromFoldable, fromFoldable1, noneOf, oneOf};
