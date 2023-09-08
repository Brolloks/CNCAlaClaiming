import * as $runtime from "../runtime.js";
import * as CardanoMultiplatformLib from "../CardanoMultiplatformLib/index.js";
import * as Contrib$dCardano from "../Contrib.Cardano/index.js";
import * as Contrib$dCardano$dCML from "../Contrib.Cardano.CML/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dBigInt from "../Data.BigInt/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Debug from "../Debug/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as HexString from "../HexString/index.js";
import * as Marlowe$dRuntime$dWeb$dTypes from "../Marlowe.Runtime.Web.Types/index.js";
import * as Wallet from "../Wallet/index.js";
const for2 = /* #__PURE__ */ (() => {
  const traverse2 = Data$dTraversable.traversableArray.traverse(Effect$dAff.applicativeAff);
  return x => f => traverse2(f)(x);
})();
const for3 = /* #__PURE__ */ (() => {
  const traverse2 = Data$dTraversable.traversableArray.traverse(CardanoMultiplatformLib.applicativeReaderT);
  return x => f => traverse2(f)(x);
})();
const eq = /* #__PURE__ */ (() => {
  const $0 = Data$dEq.eqArrayImpl(Marlowe$dRuntime$dWeb$dTypes.eqAnUTxO.eq);
  return x => y => {
    if (x.tag === "Nothing") { return y.tag === "Nothing"; }
    return x.tag === "Just" && y.tag === "Just" && $0(x._1)(y._1);
  };
})();
const traceM = /* #__PURE__ */ Debug.traceM()(Effect$dAff.monadAff);
const foldMap = /* #__PURE__ */ (() => Data$dFoldable.foldableArray.foldMap(Contrib$dCardano.monoidLovelace))();
const getCollateralUTxOs = cardanoMultiplatformLib => v => wallet => {
  const fetchPureLovelaceUTxOs = Effect$dAff._bind(Wallet.getUtxos(wallet))(possibleUTxOs => Effect$dAff._liftEffect(CardanoMultiplatformLib.runGarbageCollector(cardanoMultiplatformLib)((() => {
    const $0 = Data$dArray.filter(v1 => Contrib$dCardano.isLovelaceOnly(v1.txOut.value));
    const $1 = for3((() => {
      if (possibleUTxOs.tag === "Left") { return []; }
      if (possibleUTxOs.tag === "Right") {
        if (possibleUTxOs._1.tag === "Nothing") { return []; }
        if (possibleUTxOs._1.tag === "Just") { return possibleUTxOs._1._1; }
      }
      $runtime.fail();
    })())(v1 => Contrib$dCardano$dCML.transactionUnspentOutputCBorHexToUTxO(v1));
    return x => {
      const $2 = $1(x);
      return () => {
        const a$p = $2();
        return $0(a$p);
      };
    };
  })())));
  return Effect$dAff._bind(Effect$dAff._bind(Effect$dAff._catchError(Effect$dAff._bind(Effect$dAff._liftEffect(CardanoMultiplatformLib.runGarbageCollector(cardanoMultiplatformLib)(CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.toCoinCbor(v))(coinCbor => CardanoMultiplatformLib.applicativeReaderT.pure(HexString.encode(coinCbor))))))(coinCborHex => Effect$dAff._bind(Effect$dAff._map(Data$dEither.hush)(Wallet.getCollateral(wallet)(coinCborHex)))(possibleUTxOs => Data$dTraversable.traversableMaybe.traverse(Effect$dAff.applicativeAff)(utxos => for2(utxos)(utxoCborHex => Effect$dAff._liftEffect(CardanoMultiplatformLib.runGarbageCollector(cardanoMultiplatformLib)(Contrib$dCardano$dCML.transactionUnspentOutputCBorHexToUTxO(utxoCborHex)))))(possibleUTxOs))))(v1 => Effect$dAff._pure(Data$dMaybe.$Maybe(
    "Just",
    []
  ))))(utxos => {
    if (eq(utxos)(Data$dMaybe.$Maybe("Just", []))) { return Effect$dAff._map(Data$dMaybe.Just)(fetchPureLovelaceUTxOs); }
    return Effect$dAff._pure(utxos);
  }))(unsorted => {
    const $0 = Data$dFoldable.foldrArray(utxo => v1 => {
      if (Data$dBigInt.ordBigInt.compare(v1.total)(v) === "GT") { return v1; }
      return {utxos: [utxo, ...v1.utxos], total: Data$dBigInt.biAdd(v1.total)(Contrib$dCardano.selectAsset(utxo.txOut.value)(Contrib$dCardano.AdaAssetId))};
    })({utxos: [], total: Data$dBigInt.semiringBigInt.zero});
    const $1 = Data$dArray.sortBy(x => y => Data$dBigInt.ordBigInt.compare(Contrib$dCardano.selectAsset(x.txOut.value)(Contrib$dCardano.AdaAssetId))(Contrib$dCardano.selectAsset(y.txOut.value)(Contrib$dCardano.AdaAssetId)));
    const $2 = Data$dArray.filter(v1 => Contrib$dCardano.isLovelaceOnly(v1.txOut.value));
    const collaterals = unsorted.tag === "Just" ? Data$dMaybe.$Maybe("Just", $0($1($2(unsorted._1))).utxos) : Data$dMaybe.Nothing;
    return Effect$dAff._bind(traceM((() => {
      const $3 = foldMap(v1 => Contrib$dCardano.selectAsset(v1.txOut.value)(Contrib$dCardano.AdaAssetId));
      if (collaterals.tag === "Just") { return Data$dMaybe.$Maybe("Just", $3(collaterals._1)); }
      return Data$dMaybe.Nothing;
    })()))(() => Effect$dAff._pure(collaterals));
  });
};
export {eq, foldMap, for2, for3, getCollateralUTxOs, traceM};
