import * as $runtime from "../runtime.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctorWithIndex from "../Data.FunctorWithIndex/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
const Sha256Hex = x => x;
const CurrencySymbol$p = x => x;
const eqSha256Hex = {eq: x => y => x === y};
const ordSha256Hex = {compare: x => y => Data$dOrd.ordString.compare(x)(y), Eq0: () => eqSha256Hex};
const eqCurrencySymbol$p = {eq: x => y => x === y};
const ordCurrencySymbol$p = {compare: x => y => Data$dOrd.ordString.compare(x)(y), Eq0: () => eqCurrencySymbol$p};
const sha256Hex = hex => {
  if (Data$dString$dCodeUnits.length(hex) === 64) { return Data$dMaybe.$Maybe("Just", hex); }
  return Data$dMaybe.Nothing;
};
const currencySymbolToString = v => v;
const compareMarloweJsonKeys = /* #__PURE__ */ (() => {
  const marloweKeysOrdering = Data$dMap$dInternal.fromFoldable(Data$dOrd.ordString)(Data$dFoldable.foldableArray)(Data$dFunctorWithIndex.mapWithIndexArray(b => a => Data$dTuple.$Tuple(
    a,
    b
  ))(["party", "deposits", "of_token", "into_account", "when", "timeout", "timeout_continuation", "for_choice", "choose_between", "pay", "token", "from_account", "to", "then"]));
  return a => b => {
    const $0 = Data$dMap$dInternal.lookup(Data$dOrd.ordString)(a)(marloweKeysOrdering);
    if ($0.tag === "Just") {
      const $1 = Data$dMap$dInternal.lookup(Data$dOrd.ordString)(b)(marloweKeysOrdering);
      if ($1.tag === "Just") { return Data$dOrd.ordInt.compare($0._1)($1._1); }
      if ($1.tag === "Nothing") { return Data$dOrd.ordString.compare(a)(b); }
      $runtime.fail();
    }
    if ($0.tag === "Nothing") { return Data$dOrd.ordString.compare(a)(b); }
    $runtime.fail();
  };
})();
export {CurrencySymbol$p, Sha256Hex, compareMarloweJsonKeys, currencySymbolToString, eqCurrencySymbol$p, eqSha256Hex, ordCurrencySymbol$p, ordSha256Hex, sha256Hex};
