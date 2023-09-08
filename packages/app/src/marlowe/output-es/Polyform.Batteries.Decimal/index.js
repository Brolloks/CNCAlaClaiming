import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dDecimal from "../Data.Decimal/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dString$dRegex from "../Data.String.Regex/index.js";
import * as Data$dString$dRegex$dFlags from "../Data.String.Regex.Flags/index.js";
import * as Data$dString$dRegex$dUnsafe from "../Data.String.Regex.Unsafe/index.js";
import * as Polyform$dBatteries from "../Polyform.Batteries/index.js";
import * as Polyform$dData$dString from "../Polyform.Data.String/index.js";
import * as Polyform$dData$dString$dRegex from "../Polyform.Data.String.Regex/index.js";
import * as Polyform$dDual from "../Polyform.Dual/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const identity = x => x;
const error = /* #__PURE__ */ Polyform$dBatteries.error()({reflectSymbol: () => "decimal"});
const Formatting = x => x;
const print = v => v.print;
const parse = v => v.parse;
const formatting = config => (
  {
    parse: (() => {
      if (config.decimalSeparator.tag === "Just") {
        const $0 = Data$dString$dRegex.replace(Data$dString$dRegex$dUnsafe.unsafeRegex(Data$dString$dRegex.replace(Data$dString$dRegex$dUnsafe.unsafeRegex("[.*+?^${}()|[\\]\\\\]")(Data$dString$dRegex$dFlags.global))("\\$&")(config.decimalSeparator._1))(Data$dString$dRegex$dFlags.noFlags))(".");
        const v1 = Data$dFunctor.arrayMap(Polyform$dData$dString$dRegex.escape)(config.separators);
        const $1 = v1.length === 0
          ? identity
          : Data$dString$dRegex.replace(Data$dString$dRegex$dUnsafe.unsafeRegex("(" + Data$dString$dCommon.joinWith("|")(v1) + ")")(Data$dString$dRegex$dFlags.global))("");
        return x => Data$dDecimal.fromString($0($1(x)));
      }
      if (config.decimalSeparator.tag === "Nothing") {
        const v1 = Data$dFunctor.arrayMap(Polyform$dData$dString$dRegex.escape)(config.separators);
        const $0 = v1.length === 0
          ? identity
          : Data$dString$dRegex.replace(Data$dString$dRegex$dUnsafe.unsafeRegex("(" + Data$dString$dCommon.joinWith("|")(v1) + ")")(Data$dString$dRegex$dFlags.global))("");
        return x => Data$dDecimal.fromString($0(x));
      }
      $runtime.fail();
    })(),
    print: (() => {
      const $0 = config.separators;
      const triplets = Data$dString$dRegex.match(Data$dString$dRegex$dUnsafe.unsafeRegex("([0-9]{1,3})")(Data$dString$dRegex$dFlags.global));
      const insertSep = (s, sep) => Polyform$dData$dString.reverseCodeUnits(Data$dString$dCommon.joinWith(sep)((() => {
        const $1 = triplets(Polyform$dData$dString.reverseCodeUnits(s));
        if ($1.tag === "Nothing") { return []; }
        if ($1.tag === "Just") { return Data$dArray.mapMaybe(x => x)($1._1); }
        $runtime.fail();
      })()));
      const decimalSeparator$p = (() => {
        if (config.decimalSeparator.tag === "Nothing") { return "."; }
        if (config.decimalSeparator.tag === "Just") { return config.decimalSeparator._1; }
        $runtime.fail();
      })();
      return x => {
        const $1 = Data$dDecimal.toString(x);
        const v1 = Data$dString$dCommon.split(".")($1);
        const v2 = Data$dArray.uncons($0);
        if (v1.length === 2) {
          if (v2.tag === "Just") { return insertSep(v1[0], v2._1.head) + decimalSeparator$p + v1[1]; }
          if (v2.tag === "Nothing") { return v1[0] + decimalSeparator$p + v1[1]; }
          return $1;
        }
        if (v2.tag === "Just") { return insertSep(v2._1.head, $1); }
        return $1;
      };
    })()
  }
);
const _decimal = Type$dProxy.Proxy;
const validator = dictApplicative => v => {
  const $0 = error(Type$dProxy.Proxy)($0 => "Expecting a decimal number got: " + $0);
  return x => dictApplicative.pure((() => {
    const $1 = $0(x);
    const $2 = v.parse(x);
    if ($2.tag === "Nothing") { return Data$dEither.$Either("Left", $1); }
    if ($2.tag === "Just") { return Data$dEither.$Either("Right", $2._1); }
    $runtime.fail();
  })());
};
const dual = dictApplicative => v => Polyform$dDual.$DualD(validator(dictApplicative)(v), x => v.print(x));
export {Formatting, _decimal, dual, error, formatting, identity, parse, print, validator};
