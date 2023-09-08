import * as $runtime from "../runtime.js";
import * as CardanoMultiplatformLib from "../CardanoMultiplatformLib/index.js";
import * as CardanoMultiplatformLib$dAddress from "../CardanoMultiplatformLib.Address/index.js";
import * as CardanoMultiplatformLib$dTransaction from "../CardanoMultiplatformLib.Transaction/index.js";
import * as Contrib$dCardano from "../Contrib.Cardano/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dUndefined$dNoProblem from "../Data.Undefined.NoProblem/index.js";
import * as Foreign from "../Foreign/index.js";
import * as HexString from "../HexString/index.js";
const txIdFromCborHex = cborHex => cborHex;
const transactionUnspentOutputToUTxO = unspentTxOutObj => CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.asksLib(v => v.TransactionUnspentOutput))(_TransactionUnspentOutput => CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.allocate()(CardanoMultiplatformLib$dTransaction.transactionUnspentOutputObject.input(unspentTxOutObj)))(inputObj => CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.allocate()(CardanoMultiplatformLib$dTransaction.transactionInputObject.transaction_id(inputObj)))(txHashObj => CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.monadEffectReader.liftEffect(CardanoMultiplatformLib$dTransaction.transactionHashObject.to_hex(txHashObj)))(txHashCborHex => CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.allocate()(CardanoMultiplatformLib$dTransaction.transactionUnspentOutputObject.output(unspentTxOutObj)))(txOutObj => CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.allocate()(CardanoMultiplatformLib$dTransaction.transactionOutputObject.amount(txOutObj)))(valueObj => CardanoMultiplatformLib.bindReaderT.bind((() => {
  const $0 = CardanoMultiplatformLib.valueMapFromValueObject(valueObj);
  return x => {
    const $1 = $0(x);
    return () => {
      const a$p = $1();
      return (() => {
        const $2 = Contrib$dCardano.valueFromNestedMaps(a$p);
        if ($2.tag === "Right") { return $2._1; }
        return Contrib$dCardano.monoidValue.mempty;
      })();
    };
  };
})())(value => CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.allocateOpt()(CardanoMultiplatformLib$dTransaction.transactionOutputObject.datum(txOutObj)))(possibleDatumObj => CardanoMultiplatformLib.bindReaderT.bind(Foreign.isUndefined(possibleDatumObj)
  ? CardanoMultiplatformLib.applicativeReaderT.pure(Data$dMaybe.Nothing)
  : CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.allocate()(CardanoMultiplatformLib$dTransaction.datumObject.as_data_hash(possibleDatumObj)))(dataHashObj => CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.monadEffectReader.liftEffect(CardanoMultiplatformLib$dTransaction.dataHashObject.to_hex(dataHashObj)))(v1 => CardanoMultiplatformLib.applicativeReaderT.pure(Data$dMaybe.$Maybe(
      "Just",
      v1
    )))))(datumHash => CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.allocate()(CardanoMultiplatformLib$dTransaction.transactionOutputObject.address(txOutObj)))(addressObj => CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.monadEffectReader.liftEffect(CardanoMultiplatformLib$dAddress.addressObject.to_bech32(addressObj)(Data$dUndefined$dNoProblem.undefined)))(address => CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.allocate()(CardanoMultiplatformLib$dTransaction.transactionInputObject.index(inputObj)))(bigNumObj => CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.monadEffectReader.liftEffect(CardanoMultiplatformLib$dTransaction.bigNumObject.to_str(bigNumObj)))(txIxStr => CardanoMultiplatformLib.applicativeReaderT.pure({
  txOutRef: {
    txId: txHashCborHex,
    txIx: (() => {
      const $0 = Data$dInt.fromString(txIxStr);
      if ($0.tag === "Nothing") { return 0; }
      if ($0.tag === "Just") { return $0._1; }
      $runtime.fail();
    })()
  },
  txOut: {address, value, datumHash}
}))))))))))))));
const transactionUnspentOutputCBorHexToUTxO = cborHex => CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.asksLib(v => v.TransactionUnspentOutput))(_TransactionUnspentOutput => CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.allocate()(CardanoMultiplatformLib$dTransaction.transactionUnspentOutput.from_bytes(_TransactionUnspentOutput)(HexString.decode(cborHex))))(unspentTxOutObj => transactionUnspentOutputToUTxO(unspentTxOutObj)));
export {transactionUnspentOutputCBorHexToUTxO, transactionUnspentOutputToUTxO, txIdFromCborHex};
