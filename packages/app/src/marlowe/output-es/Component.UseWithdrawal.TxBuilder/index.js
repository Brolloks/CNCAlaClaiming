import * as $runtime from "../runtime.js";
import * as CardanoMultiplatformLib from "../CardanoMultiplatformLib/index.js";
import * as CardanoMultiplatformLib$dTransaction from "../CardanoMultiplatformLib.Transaction/index.js";
import * as Contrib$dCardano from "../Contrib.Cardano/index.js";
import * as Control$dMonad$dExcept$dTrans from "../Control.Monad.Except.Trans/index.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dArgonaut$dDecode$dDecoders from "../Data.Argonaut.Decode.Decoders/index.js";
import * as Data$dArgonaut$dDecode$dError from "../Data.Argonaut.Decode.Error/index.js";
import * as Data$dArgonaut$dEncode$dClass from "../Data.Argonaut.Encode.Class/index.js";
import * as Data$dArgonaut$dEncode$dEncoders from "../Data.Argonaut.Encode.Encoders/index.js";
import * as Data$dArgonaut$dParser from "../Data.Argonaut.Parser/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dBigInt from "../Data.BigInt/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Debug from "../Debug/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dClass from "../Effect.Class/index.js";
import * as Foreign from "../Foreign/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
import * as HexString from "../HexString/index.js";
import * as Marlowe$dRuntime$dWeb$dTypes from "../Marlowe.Runtime.Web.Types/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const encodeForeignObject = /* #__PURE__ */ (() => ({encodeJson: Data$dArgonaut$dEncode$dEncoders.encodeForeignObject(Data$dArgonaut$dEncode$dClass.encodeJsonJson.encodeJson)}))();
const indexIsSymbol = {reflectSymbol: () => "index"};
const encodeJson3 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Marlowe$dRuntime$dWeb$dTypes.encodeJsonTxId)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
    reflectSymbol: () => "transaction_id"
  })())(indexIsSymbol)();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const bindExceptT = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.bindExceptT(Effect.monadEffect);
const traceM1 = /* #__PURE__ */ Debug.traceM()({
  Applicative0: () => Control$dMonad$dExcept$dTrans.applicativeExceptT(Effect.monadEffect),
  Bind1: () => Control$dMonad$dExcept$dTrans.bindExceptT(Effect.monadEffect)
});
const foldMap = /* #__PURE__ */ (() => Data$dFoldable.foldableArray.foldMap(Contrib$dCardano.monoidValue))();
const encodeJson4 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons((() => {
    const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJBoolean)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonArray(Data$dArgonaut$dEncode$dClass.encodeJsonJString))(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
      reflectSymbol: () => "elems"
    })())({reflectSymbol: () => "definite_encoding"})();
    return {encodeJson: rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy))};
  })())(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonArray((() => {
    const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons((() => {
      const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
        reflectSymbol: () => "steps"
      })())({reflectSymbol: () => "mem"})();
      return {encodeJson: rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy))};
    })())(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
      reflectSymbol: () => "tag"
    })())(indexIsSymbol)())({reflectSymbol: () => "ex_units"})())({reflectSymbol: () => "data"})();
    return {encodeJson: rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy))};
  })()))(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({reflectSymbol: () => "vkeys"})())({
    reflectSymbol: () => "redeemers"
  })())({reflectSymbol: () => "plutus_v2_scripts"})())({reflectSymbol: () => "plutus_v1_scripts"})())({reflectSymbol: () => "plutus_data"})())({
    reflectSymbol: () => "native_scripts"
  })())({reflectSymbol: () => "bootstraps"})();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const fieldsIsSymbol = {reflectSymbol: () => "fields"};
const constructorIsSymbol = {reflectSymbol: () => "constructor"};
const encodeJson5 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonInt)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonArray((() => {
    const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
      reflectSymbol: () => "bytes"
    })();
    return {encodeJson: rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy))};
  })()))(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(fieldsIsSymbol)())(constructorIsSymbol)();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const encodeJsonArray = /* #__PURE__ */ Data$dArgonaut$dEncode$dClass.encodeJsonArray(Data$dArgonaut$dEncode$dClass.encodeJsonJson);
const encodeJson6 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonInt)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonArray)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(fieldsIsSymbol)())(constructorIsSymbol)();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const liftEffect1 = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.monadEffectExceptT(Effect$dClass.monadEffectEffect).liftEffect)();
const throwError = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.monadThrowExceptT(Effect.monadEffect).throwError)();
const pure1 = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.applicativeExceptT(Effect.monadEffect).pure)();
const foldMap1 = /* #__PURE__ */ (() => Data$dFoldable.foldableArray.foldMap(Contrib$dCardano.monoidValue))();
const encodeRecord = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons((() => {
    const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
      reflectSymbol: () => "multiasset"
    })())({reflectSymbol: () => "coin"})();
    return {encodeJson: rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy))};
  })())(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
    reflectSymbol: () => "script_ref"
  })())({reflectSymbol: () => "datum_option"})())({reflectSymbol: () => "amount"})())({reflectSymbol: () => "address"})();
  return {encodeJson: rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy))};
})();
const encodeJson7 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons((() => {
    const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonNonEmptyArray(Data$dArgonaut$dEncode$dClass.encodeJsonJson))(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeRecord)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonArray)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonArray(encodeRecord))(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonArray)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonArray(Data$dArgonaut$dEncode$dClass.encodeJsonJString))(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
      reflectSymbol: () => "withdrawals"
    })())({reflectSymbol: () => "validity_start_interval"})())({reflectSymbol: () => "update"})())({reflectSymbol: () => "ttl"})())({reflectSymbol: () => "total_collateral"})())({
      reflectSymbol: () => "script_data_hash"
    })())({reflectSymbol: () => "required_signers"})())({reflectSymbol: () => "reference_inputs"})())({reflectSymbol: () => "outputs"})())({reflectSymbol: () => "network_id"})())({
      reflectSymbol: () => "mint"
    })())({reflectSymbol: () => "inputs"})())({reflectSymbol: () => "fee"})())({reflectSymbol: () => "collateral_return"})())({reflectSymbol: () => "collateral"})())({
      reflectSymbol: () => "certs"
    })())({reflectSymbol: () => "auxiliary_data_hash"})();
    return {encodeJson: rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy))};
  })())(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
    reflectSymbol: () => "witness_set"
  })())({reflectSymbol: () => "is_valid"})())({reflectSymbol: () => "body"})())({reflectSymbol: () => "auxiliary_data"})();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const traceM2 = /* #__PURE__ */ Debug.traceM()(CardanoMultiplatformLib.monadGarbageCollector);
const decodeForeignObject = {decodeJson: /* #__PURE__ */ Data$dArgonaut$dDecode$dDecoders.decodeForeignObject(Data$dEither.Right)};
const VKeysJson = x => x;
const PayoutReferenceScriptTxOutRef = x => x;
const newtypeVKeysJson_ = {Coercible0: () => {}};
const newtypePayoutReferenceScr = {Coercible0: () => {}};
const encodeJsonPayoutReference = Marlowe$dRuntime$dWeb$dTypes.encodeJsonTxOutRef;
const witnessSetToScriptDataHash = witnessSetObj => CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.plutusVasilCostModels)(costModels => CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.monadEffectReader.liftEffect(CardanoMultiplatformLib$dTransaction.transactionWitnessSetObject.redeemers(witnessSetObj)))(possibleRedeemersObj => CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.monadEffectReader.liftEffect(CardanoMultiplatformLib$dTransaction.transactionWitnessSetObject.plutus_data(witnessSetObj)))(possiblePlutusDataObj => Data$dTraversable.traversableMaybe.traverse(CardanoMultiplatformLib.applicativeReaderT)(redeemersObj => CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.asksLib(v => v.hash_script_data))(hash_script_data => CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.allocate()((() => {
  const $0 = costModels.pv2;
  return () => hash_script_data(redeemersObj, $0, possiblePlutusDataObj);
})()))(scriptDataHashObj => CardanoMultiplatformLib.monadEffectReader.liftEffect(CardanoMultiplatformLib$dTransaction.scriptDataHashObject.to_hex(scriptDataHashObj)))))(Foreign.isUndefined(possibleRedeemersObj)
  ? Data$dMaybe.Nothing
  : Data$dMaybe.$Maybe("Just", possibleRedeemersObj)))));
const witnessSetJsonToWitnessSet = witnessSetJson => CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.asksLib(v => v.TransactionWitnessSet))(witnessSetClass => CardanoMultiplatformLib.allocate()(CardanoMultiplatformLib$dTransaction.transactionWitnessSet.from_json(witnessSetClass)(Data$dArgonaut$dCore.stringify(witnessSetJson))));
const lookupOptDecode = dictDecodeJson => n => obj => {
  const v = Foreign$dObject._lookup(Data$dMaybe.Nothing, Data$dMaybe.Just, n, obj);
  if (v.tag === "Just") {
    if (Data$dArgonaut$dCore._caseJson(v$1 => true, v$1 => false, v$1 => false, v$1 => false, v$1 => false, v$1 => false, v._1)) {
      return Data$dEither.$Either("Right", Data$dMaybe.Nothing);
    }
    const $0 = dictDecodeJson.decodeJson(v._1);
    if ($0.tag === "Left") {
      return Data$dEither.$Either(
        "Left",
        "Could not decode key " + n + Data$dArgonaut$dDecode$dError.showJsonDecodeError.show($0._1) + " in an object: " + Data$dArgonaut$dCore.stringify(Data$dArgonaut$dCore.fromObject(Foreign$dObject._fmapObject(
          obj,
          Data$dArgonaut$dEncode$dClass.encodeJsonJson.encodeJson
        )))
      );
    }
    if ($0.tag === "Right") { return Data$dEither.$Either("Right", Data$dMaybe.$Maybe("Just", $0._1)); }
    $runtime.fail();
  }
  if (v.tag === "Nothing") { return Data$dEither.$Either("Right", Data$dMaybe.Nothing); }
  $runtime.fail();
};
const lookupDecode = dictDecodeJson => n => obj => {
  const v = Foreign$dObject._lookup(Data$dMaybe.Nothing, Data$dMaybe.Just, n, obj);
  if (v.tag === "Just") {
    const $0 = dictDecodeJson.decodeJson(v._1);
    if ($0.tag === "Left") {
      return Data$dEither.$Either(
        "Left",
        "Could not decode key " + n + Data$dArgonaut$dDecode$dError.showJsonDecodeError.show($0._1) + " in an object: " + Data$dArgonaut$dCore.stringify(Data$dArgonaut$dCore.fromObject(Foreign$dObject._fmapObject(
          obj,
          Data$dArgonaut$dEncode$dClass.encodeJsonJson.encodeJson
        )))
      );
    }
    if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
    $runtime.fail();
  }
  if (v.tag === "Nothing") {
    return Data$dEither.$Either(
      "Left",
      "Could not find key " + n + "in an object: " + Data$dArgonaut$dCore.stringify(Data$dArgonaut$dCore.fromObject(Foreign$dObject._fmapObject(
        obj,
        Data$dArgonaut$dEncode$dClass.encodeJsonJson.encodeJson
      )))
    );
  }
  $runtime.fail();
};
const jsonParser$p = x => {
  const $0 = Data$dArgonaut$dParser._jsonParser(Data$dEither.Left, Data$dEither.Right, x);
  if ($0.tag === "Left") { return Data$dEither.$Either("Left", Data$dShow.showStringImpl($0._1)); }
  if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
  $runtime.fail();
};
const encodeInsert = dictEncodeJson => k => v => obj => {
  const $0 = dictEncodeJson.encodeJson(v);
  return Foreign$dObject.mutate($1 => () => {
    $1[k] = $0;
    return $1;
  })(obj);
};
const decodeJson$p = dictDecodeJson => x => {
  const $0 = dictDecodeJson.decodeJson(x);
  if ($0.tag === "Left") { return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.showJsonDecodeError.show($0._1)); }
  if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
  $runtime.fail();
};
const buildTxJson = cml => address => roleTokenInfo => v => referenceTxOutRef => possibleVKeysJson => {
  const $0 = v.collaterals;
  const origInputs = [...$0, v.roleToken, v.payout];
  const $1 = v.payout.txOutRef;
  const $2 = Data$dArray.findIndex(v$1 => v$1.txId === $1.txId && v$1.txIx === $1.txIx)(Data$dArray.sortBy(Marlowe$dRuntime$dWeb$dTypes.ordTxOutRef.compare)(Data$dFunctor.arrayMap(v1 => v1.txOutRef)(origInputs)));
  const redeemerIndex = (() => {
    if ($2.tag === "Nothing") { return 0; }
    if ($2.tag === "Just") { return $2._1; }
    $runtime.fail();
  })();
  const inputs = Data$dFunctor.arrayMap(v1 => encodeJson3({transaction_id: v1.txOutRef.txId, index: Data$dShow.showIntImpl(v1.txOutRef.txIx)}))(origInputs);
  const fee = Data$dBigInt.fromInt(500000);
  return bindExceptT.bind(traceM1("totalCollateral"))(() => bindExceptT.bind(traceM1("750000"))(() => bindExceptT.bind((() => {
    const $3 = Contrib$dCardano.subtractValues(foldMap(v1 => v1.txOut.value)(origInputs))(Data$dMap$dInternal.$$$Map(
      "Two",
      Data$dMap$dInternal.Leaf,
      Contrib$dCardano.AdaAssetId,
      fee,
      Data$dMap$dInternal.Leaf
    ));
    const $4 = Contrib$dCardano.selectAsset($3)(Contrib$dCardano.AdaAssetId);
    const $5 = Contrib$dCardano.valueFromNestedMaps(Data$dMap$dInternal.delete(Data$dOrd.ordString)("")(Contrib$dCardano.valueToNestedMaps($3)));
    const $6 = (() => {
      if ($5.tag === "Left") {
        const $6 = $5._1;
        return v$1 => Data$dEither.$Either("Left", $6);
      }
      if ($5.tag === "Right") {
        const $6 = $5._1;
        return f => f($6);
      }
      $runtime.fail();
    })()(nonAdaValue => Data$dEither.$Either(
      "Right",
      {
        coin: Data$dBigInt.toString($4),
        multiasset: Contrib$dCardano.eqValue.eq(nonAdaValue)(Contrib$dCardano.monoidValue.mempty)
          ? Data$dArgonaut$dCore.jsonNull
          : Contrib$dCardano.encodeJsonValue.encodeJson(nonAdaValue)
      }
    ));
    return () => $6;
  })())(amount => {
    const witnessSetJson = encodeJson4({
      vkeys: (() => {
        if (possibleVKeysJson.tag === "Nothing") { return Data$dArgonaut$dCore.jsonNull; }
        if (possibleVKeysJson.tag === "Just") { return possibleVKeysJson._1; }
        $runtime.fail();
      })(),
      native_scripts: Data$dArgonaut$dCore.jsonNull,
      bootstraps: Data$dArgonaut$dCore.jsonNull,
      plutus_v1_scripts: Data$dArgonaut$dCore.jsonNull,
      plutus_data: {
        elems: Data$dFunctor.arrayMap(x => Data$dArgonaut$dCore.stringify(encodeJson5(x)))([{constructor: 0, fields: [{bytes: roleTokenInfo._1}, {bytes: roleTokenInfo._2}]}]),
        definite_encoding: true
      },
      redeemers: [
        {
          tag: "Spend",
          index: Data$dShow.showIntImpl(redeemerIndex),
          data: Data$dArgonaut$dCore.stringify(encodeJson6({constructor: 0, fields: []})),
          ex_units: {mem: "3237238", steps: "809068390"}
        }
      ],
      plutus_v2_scripts: Data$dArgonaut$dCore.jsonNull
    });
    return bindExceptT.bind(bindExceptT.bind(liftEffect1(CardanoMultiplatformLib.runGarbageCollector(cml)(CardanoMultiplatformLib.bindReaderT.bind(witnessSetJsonToWitnessSet(witnessSetJson))(witnessSetObject => witnessSetToScriptDataHash(witnessSetObject)))))(possibleHash => {
      if (possibleHash.tag === "Nothing") { return throwError("Could not compute script data hash"); }
      if (possibleHash.tag === "Just") { return pure1(possibleHash._1); }
      $runtime.fail();
    }))(scriptDataHashStr => bindExceptT.bind((() => {
      const $3 = Contrib$dCardano.subtractValues(foldMap1(v1 => v1.txOut.value)($0))(Data$dMap$dInternal.$$$Map(
        "Two",
        Data$dMap$dInternal.Leaf,
        Contrib$dCardano.AdaAssetId,
        Data$dBigInt.fromInt(750000),
        Data$dMap$dInternal.Leaf
      ));
      const $4 = Contrib$dCardano.selectAsset($3)(Contrib$dCardano.AdaAssetId);
      const $5 = Contrib$dCardano.valueFromNestedMaps(Data$dMap$dInternal.delete(Data$dOrd.ordString)("")(Contrib$dCardano.valueToNestedMaps($3)));
      const $6 = (() => {
        if ($5.tag === "Left") {
          const $6 = $5._1;
          return v$1 => Data$dEither.$Either("Left", $6);
        }
        if ($5.tag === "Right") {
          const $6 = $5._1;
          return f => f($6);
        }
        $runtime.fail();
      })()(nonAdaValue => Data$dEither.$Either(
        "Right",
        {
          coin: Data$dBigInt.toString($4),
          multiasset: Contrib$dCardano.eqValue.eq(nonAdaValue)(Contrib$dCardano.monoidValue.mempty)
            ? Data$dArgonaut$dCore.jsonNull
            : Contrib$dCardano.encodeJsonValue.encodeJson(nonAdaValue)
        }
      ));
      return () => $6;
    })())(collateralReturnAmount => pure1(encodeJson7({
      body: {
        inputs,
        outputs: [{address: address.bech32, amount, datum_option: Data$dArgonaut$dCore.jsonNull, script_ref: Data$dArgonaut$dCore.jsonNull}],
        fee: Data$dBigInt.toString(fee),
        collateral: Data$dFunctor.arrayMap(v1 => encodeJson3({transaction_id: v1.txOutRef.txId, index: Data$dShow.showIntImpl(v1.txOutRef.txIx)}))($0),
        required_signers: [address.pubKeyHash],
        network_id: Data$dArgonaut$dCore.jsonNull,
        total_collateral: "750000",
        collateral_return: {address: address.bech32, amount: collateralReturnAmount, datum_option: Data$dArgonaut$dCore.jsonNull, script_ref: Data$dArgonaut$dCore.jsonNull},
        reference_inputs: [encodeJson3({transaction_id: referenceTxOutRef.txId, index: Data$dShow.showIntImpl(referenceTxOutRef.txIx)})],
        script_data_hash: scriptDataHashStr,
        ttl: Data$dArgonaut$dCore.jsonNull,
        certs: Data$dArgonaut$dCore.jsonNull,
        withdrawals: Data$dArgonaut$dCore.jsonNull,
        update: Data$dArgonaut$dCore.jsonNull,
        auxiliary_data_hash: Data$dArgonaut$dCore.jsonNull,
        validity_start_interval: Data$dArgonaut$dCore.jsonNull,
        mint: Data$dArgonaut$dCore.jsonNull
      },
      witness_set: witnessSetJson,
      is_valid: Data$dArgonaut$dCore.fromBoolean(true),
      auxiliary_data: Data$dArgonaut$dCore.jsonNull
    }))));
  })));
};
const buildTx = cml => address => roleTokenInfo => utxos => referenceTxOutRef => possibleVKeysJson => bindExceptT.bind(buildTxJson(cml)(address)(roleTokenInfo)(utxos)(referenceTxOutRef)(possibleVKeysJson))(txJson => {
  const $0 = CardanoMultiplatformLib.runGarbageCollector(cml)(CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.asksLib(v => v.Transaction))(_Transaction => CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.allocate()(CardanoMultiplatformLib$dTransaction.transaction.from_json(_Transaction)(Data$dArgonaut$dCore.stringify(txJson))))(transactionObj => CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.monadEffectReader.liftEffect(CardanoMultiplatformLib$dTransaction.transactionObject.to_bytes(transactionObj)))(cbor => CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.monadEffectReader.liftEffect(CardanoMultiplatformLib$dTransaction.transactionObject.to_json(transactionObj)))(json => CardanoMultiplatformLib.bindReaderT.bind(traceM2(json))(() => CardanoMultiplatformLib.applicativeReaderT.pure(HexString.encode(cbor))))))));
  return () => {
    const a = $0();
    return Data$dEither.$Either("Right", a);
  };
});
const addWitnessSetVKeyToTx = cml => txWitnessSetHex => txHex => {
  const txHexToJson = CardanoMultiplatformLib.runGarbageCollector(cml)(CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.asksLib(v => v.Transaction))(_Transaction => CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.allocate()(CardanoMultiplatformLib$dTransaction.transaction.from_bytes(_Transaction)(HexString.decode(txHex))))(txObj => CardanoMultiplatformLib.monadEffectReader.liftEffect(CardanoMultiplatformLib$dTransaction.transactionObject.to_json(txObj)))));
  return bindExceptT.bind(liftEffect1(CardanoMultiplatformLib.runGarbageCollector(cml)(CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.asksLib(v => v.TransactionWitnessSet))(_TransactionWitnessSet => CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.allocate()(CardanoMultiplatformLib$dTransaction.transactionWitnessSet.from_bytes(_TransactionWitnessSet)(HexString.decode(txWitnessSetHex))))(txWitnessSetObj => CardanoMultiplatformLib.monadEffectReader.liftEffect(CardanoMultiplatformLib$dTransaction.transactionWitnessSetObject.to_json(txWitnessSetObj)))))))(txWitnessSetJsonStr => bindExceptT.bind(liftEffect1(txHexToJson))(txJsonStr => bindExceptT.bind((() => {
    const $0 = jsonParser$p(txJsonStr);
    const $1 = (() => {
      if ($0.tag === "Left") {
        const $1 = $0._1;
        return v => Data$dEither.$Either("Left", $1);
      }
      if ($0.tag === "Right") {
        const $1 = $0._1;
        return f => f($1);
      }
      $runtime.fail();
    })()(txJson => {
      const $1 = jsonParser$p(txWitnessSetJsonStr);
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
      })()(txWitnessSetJson => {
        const $2 = decodeJson$p(decodeForeignObject)(txJson);
        return (() => {
          if ($2.tag === "Left") {
            const $3 = $2._1;
            return v => Data$dEither.$Either("Left", $3);
          }
          if ($2.tag === "Right") {
            const $3 = $2._1;
            return f => f($3);
          }
          $runtime.fail();
        })()(txObj => {
          const $3 = decodeJson$p(decodeForeignObject)(txWitnessSetJson);
          const $4 = (() => {
            if ($3.tag === "Left") {
              const $4 = $3._1;
              return v => Data$dEither.$Either("Left", $4);
            }
            if ($3.tag === "Right") {
              const $4 = $3._1;
              return f => f($4);
            }
            $runtime.fail();
          })()(obj => {
            const $4 = lookupOptDecode({decodeJson: Data$dArgonaut$dDecode$dDecoders.decodeArray(Data$dEither.Right)})("vkeys")(obj);
            if ($4.tag === "Left") { return Data$dEither.$Either("Left", $4._1); }
            if ($4.tag === "Right") {
              return Data$dEither.$Either(
                "Right",
                (() => {
                  if ($4._1.tag === "Nothing") { return []; }
                  if ($4._1.tag === "Just") { return $4._1._1; }
                  $runtime.fail();
                })()
              );
            }
            $runtime.fail();
          });
          return (() => {
            if ($4.tag === "Left") {
              const $5 = $4._1;
              return v => Data$dEither.$Either("Left", $5);
            }
            if ($4.tag === "Right") {
              const $5 = $4._1;
              return f => f($5);
            }
            $runtime.fail();
          })()(v => {
            const $5 = lookupDecode(decodeForeignObject)("witness_set")(txObj);
            return (() => {
              if ($5.tag === "Left") {
                const $6 = $5._1;
                return v$1 => Data$dEither.$Either("Left", $6);
              }
              if ($5.tag === "Right") {
                const $6 = $5._1;
                return f => f($6);
              }
              $runtime.fail();
            })()(witnessSet => {
              const $6 = lookupOptDecode({decodeJson: Data$dArgonaut$dDecode$dDecoders.decodeArray(Data$dEither.Right)})("vkeys")(witnessSet);
              if ($6.tag === "Left") { return Data$dEither.$Either("Left", $6._1); }
              if ($6.tag === "Right") {
                return Data$dEither.$Either(
                  "Right",
                  Data$dArgonaut$dCore.fromObject(Foreign$dObject._fmapObject(
                    encodeInsert(encodeForeignObject)("witness_set")(encodeInsert(encodeJsonArray)("vkeys")([
                      ...(() => {
                        if ($6._1.tag === "Nothing") { return []; }
                        if ($6._1.tag === "Just") { return $6._1._1; }
                        $runtime.fail();
                      })(),
                      ...v
                    ])(witnessSet))(txObj),
                    Data$dArgonaut$dEncode$dClass.encodeJsonJson.encodeJson
                  ))
                );
              }
              $runtime.fail();
            });
          });
        });
      });
    });
    const $2 = (() => {
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", "Witness set update failed on Json operations: " + $1._1); }
      if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1); }
      $runtime.fail();
    })();
    return () => $2;
  })())(txJson$p => bindExceptT.bind(liftEffect1(CardanoMultiplatformLib.runGarbageCollector(cml)(CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.asksLib(v => v.Transaction))(_Transaction => CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.allocate()(CardanoMultiplatformLib$dTransaction.transaction.from_json(_Transaction)(Data$dArgonaut$dCore.stringify(txJson$p))))(txObj => CardanoMultiplatformLib.monadEffectReader.liftEffect(CardanoMultiplatformLib$dTransaction.transactionObject.to_bytes(txObj)))))))(cbor => pure1(HexString.encode(cbor))))));
};
export {
  PayoutReferenceScriptTxOutRef,
  VKeysJson,
  addWitnessSetVKeyToTx,
  bindExceptT,
  buildTx,
  buildTxJson,
  constructorIsSymbol,
  decodeForeignObject,
  decodeJson$p,
  encodeForeignObject,
  encodeInsert,
  encodeJson3,
  encodeJson4,
  encodeJson5,
  encodeJson6,
  encodeJson7,
  encodeJsonArray,
  encodeJsonPayoutReference,
  encodeRecord,
  fieldsIsSymbol,
  foldMap,
  foldMap1,
  indexIsSymbol,
  jsonParser$p,
  liftEffect1,
  lookupDecode,
  lookupOptDecode,
  newtypePayoutReferenceScr,
  newtypeVKeysJson_,
  pure1,
  throwError,
  traceM1,
  traceM2,
  witnessSetJsonToWitnessSet,
  witnessSetToScriptDataHash
};
