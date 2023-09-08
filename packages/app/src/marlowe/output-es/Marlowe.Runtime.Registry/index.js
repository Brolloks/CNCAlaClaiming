import * as $runtime from "../runtime.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Marlowe$dRuntime$dWeb$dTypes from "../Marlowe.Runtime.Web.Types/index.js";
const $NetworkId = (tag, _1) => ({tag, _1});
const ScriptHash = x => x;
const ReferenceScriptUtxo = x => x;
const NetworkMagic = x => x;
const Mainnet = /* #__PURE__ */ $NetworkId("Mainnet");
const Testnet = value0 => $NetworkId("Testnet", value0);
const MarloweScripts = x => x;
const eqScriptHash = {eq: x => y => x === y};
const ordScriptHash = {compare: x => y => Data$dOrd.ordString.compare(x)(y), Eq0: () => eqScriptHash};
const eqReferenceScriptUtxo = {eq: x => y => x.txId === y.txId && x.txIx === y.txIx};
const ordReferenceScriptUtxo = {
  compare: x => y => Marlowe$dRuntime$dWeb$dTypes.compare4(Data$dTuple.$Tuple(x.txId, x.txIx))(Data$dTuple.$Tuple(y.txId, y.txIx)),
  Eq0: () => eqReferenceScriptUtxo
};
const eqNetworkMagic = {eq: x => y => x === y};
const ordNetworkMagic = {compare: x => y => Data$dOrd.ordInt.compare(x)(y), Eq0: () => eqNetworkMagic};
const eqNetworkId = {
  eq: x => y => {
    if (x.tag === "Mainnet") { return y.tag === "Mainnet"; }
    return x.tag === "Testnet" && y.tag === "Testnet" && x._1 === y._1;
  }
};
const eq5 = /* #__PURE__ */ (() => Data$dMap$dInternal.eqMap(eqNetworkId)(eqReferenceScriptUtxo).eq)();
const ordNetworkId = {
  compare: v => v1 => {
    if (v.tag === "Mainnet") {
      if (v1.tag === "Mainnet") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (v1.tag === "Mainnet") { return Data$dOrdering.GT; }
    if (v.tag === "Testnet" && v1.tag === "Testnet") { return Data$dOrd.ordInt.compare(v._1)(v1._1); }
    $runtime.fail();
  },
  Eq0: () => eqNetworkId
};
const compare4 = /* #__PURE__ */ (() => Data$dMap$dInternal.ordMap(ordNetworkId)(ordReferenceScriptUtxo).compare)();
const fromFoldable = /* #__PURE__ */ Data$dMap$dInternal.fromFoldable(ordNetworkId)(Data$dFoldable.foldableArray);
const eqMarloweScripts = {
  eq: x => y => x.marloweScript === y.marloweScript && eq5(x.marloweScriptUTxOs)(y.marloweScriptUTxOs) && x.payoutScript === y.payoutScript && eq5(x.payoutScriptUTxOs)(y.payoutScriptUTxOs)
};
const ordMarloweScripts = {
  compare: x => y => {
    const v = Data$dOrd.ordString.compare(x.marloweScript)(y.marloweScript);
    if (v === "LT") { return Data$dOrdering.LT; }
    if (v === "GT") { return Data$dOrdering.GT; }
    const v1 = compare4(x.marloweScriptUTxOs)(y.marloweScriptUTxOs);
    if (v1 === "LT") { return Data$dOrdering.LT; }
    if (v1 === "GT") { return Data$dOrdering.GT; }
    const v2 = Data$dOrd.ordString.compare(x.payoutScript)(y.payoutScript);
    if (v2 === "LT") { return Data$dOrdering.LT; }
    if (v2 === "GT") { return Data$dOrdering.GT; }
    return compare4(x.payoutScriptUTxOs)(y.payoutScriptUTxOs);
  },
  Eq0: () => eqMarloweScripts
};
const previewNetworkId = /* #__PURE__ */ $NetworkId("Testnet", 2);
const preprodNetworkId = /* #__PURE__ */ $NetworkId("Testnet", 1);
const mainnetNetworkId = Mainnet;
const currentV1Scripts = {
  marloweScript: "2ed2631dbb277c84334453c5c437b86325d371f0835a28b910a91a6e",
  payoutScript: "e165610232235bbbbeff5b998b233daae42979dec92a6722d9cda989",
  marloweScriptUTxOs: /* #__PURE__ */ fromFoldable([
    /* #__PURE__ */ Data$dTuple.$Tuple(Mainnet, {txId: "672399f7d551d6e06fda70769f830e4e3783495c6250567c6ae97ecc788ad5a4", txIx: 1}),
    /* #__PURE__ */ Data$dTuple.$Tuple(/* #__PURE__ */ $NetworkId("Testnet", 1), {txId: "9a8a6f387a3330b4141e1cb019380b9ac5c72151c0abc52aa4266245d3c555cd", txIx: 1}),
    /* #__PURE__ */ Data$dTuple.$Tuple(/* #__PURE__ */ $NetworkId("Testnet", 2), {txId: "69bfdb7cd911e930bfa073a8c45121e7690939d7680196181731d0dd609ecb73", txIx: 1})
  ]),
  payoutScriptUTxOs: /* #__PURE__ */ fromFoldable([
    /* #__PURE__ */ Data$dTuple.$Tuple(Mainnet, {txId: "672399f7d551d6e06fda70769f830e4e3783495c6250567c6ae97ecc788ad5a4", txIx: 2}),
    /* #__PURE__ */ Data$dTuple.$Tuple(/* #__PURE__ */ $NetworkId("Testnet", 1), {txId: "9a8a6f387a3330b4141e1cb019380b9ac5c72151c0abc52aa4266245d3c555cd", txIx: 2}),
    /* #__PURE__ */ Data$dTuple.$Tuple(/* #__PURE__ */ $NetworkId("Testnet", 2), {txId: "69bfdb7cd911e930bfa073a8c45121e7690939d7680196181731d0dd609ecb73", txIx: 2})
  ])
};
export {
  $NetworkId,
  Mainnet,
  MarloweScripts,
  NetworkMagic,
  ReferenceScriptUtxo,
  ScriptHash,
  Testnet,
  compare4,
  currentV1Scripts,
  eq5,
  eqMarloweScripts,
  eqNetworkId,
  eqNetworkMagic,
  eqReferenceScriptUtxo,
  eqScriptHash,
  fromFoldable,
  mainnetNetworkId,
  ordMarloweScripts,
  ordNetworkId,
  ordNetworkMagic,
  ordReferenceScriptUtxo,
  ordScriptHash,
  preprodNetworkId,
  previewNetworkId
};
