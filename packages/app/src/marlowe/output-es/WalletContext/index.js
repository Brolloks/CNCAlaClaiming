import * as $runtime from "../runtime.js";
import * as CardanoMultiplatformLib from "../CardanoMultiplatformLib/index.js";
import * as CardanoMultiplatformLib$dAddress from "../CardanoMultiplatformLib.Address/index.js";
import * as CardanoMultiplatformLib$dTransaction from "../CardanoMultiplatformLib.Transaction/index.js";
import * as Contrib$dCardano from "../Contrib.Cardano/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dUndefined$dNoProblem from "../Data.Undefined.NoProblem/index.js";
import * as Debug from "../Debug/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as HexString from "../HexString/index.js";
import * as Wallet from "../Wallet/index.js";
const $$for = /* #__PURE__ */ (() => {
  const traverse2 = Data$dTraversable.traversableArray.traverse(CardanoMultiplatformLib.applicativeReaderT);
  return x => f => traverse2(f)(x);
})();
const for1 = /* #__PURE__ */ (() => {
  const traverse2 = Data$dTraversable.traversableArray.traverse(Effect.applicativeEffect);
  return x => f => traverse2(f)(x);
})();
const traceM = /* #__PURE__ */ Debug.traceM()(Data$dMaybe.monadMaybe);
const WalletContext = x => x;
const showWalletContext = /* #__PURE__ */ (() => {
  const $0 = Data$dShow.showArrayImpl(Data$dShow.showStringImpl);
  return {
    show: record => "{ balance: " + Contrib$dCardano.showValue.show(record.balance) + ", changeAddress: " + Data$dShow.showStringImpl(record.changeAddress) + ", usedAddresses: " + $0(record.usedAddresses) + " }"
  };
})();
const newtypeWalletContext_ = {Coercible0: () => {}};
const eqWalletContext = {
  eq: /* #__PURE__ */ (() => {
    const $0 = Data$dEq.eqArrayImpl(Data$dEq.eqStringImpl);
    return ra => rb => Contrib$dCardano.eqValue.eq(ra.balance)(rb.balance) && ra.changeAddress === rb.changeAddress && $0(ra.usedAddresses)(rb.usedAddresses);
  })()
};
const walletBalance = cardanoMultiplatformLib => wallet => Effect$dAff._bind(Wallet.getBalance(wallet))(v => {
  if (v.tag === "Right") {
    return Effect$dAff._liftEffect(CardanoMultiplatformLib.runGarbageCollector(cardanoMultiplatformLib)(CardanoMultiplatformLib.valueFromCbor(HexString.decode(v._1))));
  }
  if (v.tag === "Left") { return Effect$dAff._pure(Data$dMap$dInternal.Leaf); }
  $runtime.fail();
});
const walletAddresses = cardanoMultiplatformLib => wallet => Effect$dAff._bind(Wallet.getUsedAddresses(wallet))(possibleUsedAddresses => Effect$dAff._bind(Wallet.getUtxos(wallet))(possibleUTxOs => {
  const $0 = (() => {
    if (possibleUTxOs.tag === "Left") { return Data$dEither.$Either("Left", possibleUTxOs._1); }
    if (possibleUTxOs.tag === "Right") {
      return Data$dEither.$Either(
        "Right",
        (() => {
          if (possibleUTxOs._1.tag === "Nothing") { return []; }
          if (possibleUTxOs._1.tag === "Just") { return possibleUTxOs._1._1; }
          $runtime.fail();
        })()
      );
    }
    $runtime.fail();
  })();
  const utxos = $0.tag === "Right" ? $0._1 : [];
  const addresses = possibleUsedAddresses.tag === "Right" ? possibleUsedAddresses._1 : [];
  return Effect$dAff._bind(Effect$dAff._liftEffect(CardanoMultiplatformLib.runGarbageCollector(cardanoMultiplatformLib)(CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.asksLib(v => v.TransactionUnspentOutput))(_TransactionUnspentOutput => $$for(utxos)(v => CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.allocate()(CardanoMultiplatformLib$dTransaction.transactionUnspentOutput.from_bytes(_TransactionUnspentOutput)(HexString.decode(v))))(unspentTxOutObj => CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.allocate()(CardanoMultiplatformLib$dTransaction.transactionUnspentOutputObject.output(unspentTxOutObj)))(txOutObj => CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.allocate()(CardanoMultiplatformLib$dTransaction.transactionOutputObject.address(txOutObj)))(addressObj => CardanoMultiplatformLib.monadEffectReader.liftEffect(CardanoMultiplatformLib$dAddress.addressObject.to_bech32(addressObj)(Data$dUndefined$dNoProblem.undefined))))))))))(utxoAddresses$p => Effect$dAff._bind(Effect$dAff._liftEffect((() => {
    const $1 = for1(addresses)(someAddress => Wallet.fromSomeAddress(cardanoMultiplatformLib)(someAddress));
    return () => {
      const a$p = $1();
      return Data$dArray.mapMaybe(x => x)(a$p);
    };
  })()))(addresses$p => Effect$dAff._pure(Data$dArray.nubBy(Data$dOrd.ordString.compare)([...utxoAddresses$p, ...addresses$p]))));
}));
const changeAddress = cardanoMultiplatformLib => wallet => Effect$dAff._bind(Wallet.getChangeAddress(wallet))(possibleChangeAddress => {
  if (possibleChangeAddress.tag === "Right") { return Effect$dAff._liftEffect(Wallet.fromSomeAddress(cardanoMultiplatformLib)(possibleChangeAddress._1)); }
  return Effect$dAff._pure(Data$dMaybe.Nothing);
});
const walletContext = cardanoMultiplatformLib => wallet => Effect$dAff._bind(walletBalance(cardanoMultiplatformLib)(wallet))(balance => Effect$dAff._bind(walletAddresses(cardanoMultiplatformLib)(wallet))(usedAddresses => Effect$dAff._bind(changeAddress(cardanoMultiplatformLib)(wallet))(possibleAddress => Effect$dAff._pure((() => {
  if (possibleAddress.tag === "Just") {
    const $0 = traceM(balance);
    if ($0.tag === "Just") {
      const eb = Contrib$dCardano.valueFromNestedMaps(balance);
      const $1 = traceM("Balance:");
      if ($1.tag === "Just") {
        const $2 = traceM(eb);
        if ($2.tag === "Just") {
          if (eb.tag === "Left") { return Data$dMaybe.Nothing; }
          if (eb.tag === "Right") { return Data$dMaybe.$Maybe("Just", {balance: eb._1, changeAddress: possibleAddress._1, usedAddresses}); }
          $runtime.fail();
        }
        if ($2.tag === "Nothing") { return Data$dMaybe.Nothing; }
        $runtime.fail();
      }
      if ($1.tag === "Nothing") { return Data$dMaybe.Nothing; }
      $runtime.fail();
    }
    if ($0.tag === "Nothing") { return Data$dMaybe.Nothing; }
    $runtime.fail();
  }
  if (possibleAddress.tag === "Nothing") { return Data$dMaybe.Nothing; }
  $runtime.fail();
})()))));
export {WalletContext, changeAddress, eqWalletContext, $$for as for, for1, newtypeWalletContext_, showWalletContext, traceM, walletAddresses, walletBalance, walletContext};
