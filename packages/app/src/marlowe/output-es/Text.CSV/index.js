import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Text$dCSV$dInternal from "../Text.CSV.Internal/index.js";
const print = csv => Data$dString$dCommon.joinWith("\r\n")(Data$dFunctor.arrayMap((() => {
  const $0 = Data$dString$dCommon.joinWith(",");
  const $1 = Data$dFunctor.arrayMap(Text$dCSV$dInternal.escapeField(Text$dCSV$dInternal.CommaSeparated));
  return x => $0($1(x));
})())(csv));
const parse = cs => {
  const $0 = Text$dCSV$dInternal.csvParser(Text$dCSV$dInternal.CommaSeparated)({substring: cs, position: 0});
  if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
  if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1.result); }
  $runtime.fail();
};
export {parse, print};
