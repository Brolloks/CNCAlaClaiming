import * as $runtime from "../runtime.js";
import * as CardanoMultiplatformLib$dAddress from "../CardanoMultiplatformLib.Address/index.js";
import * as CardanoMultiplatformLib$dCostModel from "../CardanoMultiplatformLib.CostModel/index.js";
import * as CardanoMultiplatformLib$dEd25519KeyHash from "../CardanoMultiplatformLib.Ed25519KeyHash/index.js";
import * as CardanoMultiplatformLib$dTransaction from "../CardanoMultiplatformLib.Transaction/index.js";
import * as Contrib$dCardanoMultiplatformLib$dScriptHash from "../Contrib.CardanoMultiplatformLib.ScriptHash/index.js";
import * as Control$dMonad$dReader$dTrans from "../Control.Monad.Reader.Trans/index.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dArgonaut$dEncode$dClass from "../Data.Argonaut.Encode.Class/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dBigInt from "../Data.BigInt/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTraversableWithIndex from "../Data.TraversableWithIndex/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dClass from "../Effect.Class/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Foreign from "../Foreign/index.js";
import * as HexString from "../HexString/index.js";
import * as JS$dObject from "../JS.Object/index.js";
import * as Promise$dAff from "../Promise.Aff/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Web$dEncoding$dTextDecoder from "../Web.Encoding.TextDecoder/index.js";
import {importLibImpl} from "./foreign.js";
const monadEffectReader = /* #__PURE__ */ Control$dMonad$dReader$dTrans.monadEffectReader(Effect$dClass.monadEffectEffect);
const bindReaderT = /* #__PURE__ */ Control$dMonad$dReader$dTrans.bindReaderT(Effect.bindEffect);
const applicativeReaderT = /* #__PURE__ */ (() => {
  const functorReaderT1 = {
    map: x => v => x$1 => {
      const $0 = v(x$1);
      return () => {
        const a$p = $0();
        return x(a$p);
      };
    }
  };
  const applyReaderT1 = {
    apply: v => v1 => r => {
      const $0 = v(r);
      const $1 = v1(r);
      return () => {
        const f$p = $0();
        const a$p = $1();
        return f$p(a$p);
      };
    },
    Functor0: () => functorReaderT1
  };
  return {pure: x => v => () => x, Apply0: () => applyReaderT1};
})();
const sequence_ = /* #__PURE__ */ Data$dFoldable.traverse_(Effect.applicativeEffect)(Data$dList$dTypes.foldableList)(Data$dFoldable.identity);
const asks = /* #__PURE__ */ (() => {
  const monadReaderT1 = Control$dMonad$dReader$dTrans.monadReaderT(Effect.monadEffect);
  return f => monadReaderT1.Bind1().Apply0().Functor0().map(f)(Effect.pureE);
})();
const gEncodeJsonCons = /* #__PURE__ */ Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(/* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonArray(Data$dArgonaut$dEncode$dClass.encodeJsonJString))(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
    reflectSymbol: () => "op_costs"
  })())({reflectSymbol: () => "language"})();
  return {encodeJson: rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy))};
})());
const PlutusV1IsSymbol = {reflectSymbol: () => "PlutusV1"};
const encodeJson = /* #__PURE__ */ (() => {
  const $0 = gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(PlutusV1IsSymbol)();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const gEncodeJsonCons2 = /* #__PURE__ */ gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({reflectSymbol: () => "PlutusV2"})();
const encodeJson2 = /* #__PURE__ */ (() => {
  const $0 = gEncodeJsonCons(gEncodeJsonCons2)(PlutusV1IsSymbol)();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const fromFoldable = /* #__PURE__ */ Data$dMap$dInternal.fromFoldable(Data$dOrd.ordString)(Data$dFoldable.foldableArray);
const monadGarbageCollector = /* #__PURE__ */ Control$dMonad$dReader$dTrans.monadReaderT(Effect.monadEffect);
const monadEffectGarbageCollect = monadEffectReader;
const functorGarbageCollector = {
  map: x => v => x$1 => {
    const $0 = v(x$1);
    return () => {
      const a$p = $0();
      return x(a$p);
    };
  }
};
const bindGarbageCollector = bindReaderT;
const applyGarbageCollector = /* #__PURE__ */ (() => {
  const functorReaderT1 = {
    map: x => v => x$1 => {
      const $0 = v(x$1);
      return () => {
        const a$p = $0();
        return x(a$p);
      };
    }
  };
  return {
    apply: v => v1 => r => {
      const $0 = v(r);
      const $1 = v1(r);
      return () => {
        const f$p = $0();
        const a$p = $1();
        return f$p(a$p);
      };
    },
    Functor0: () => functorReaderT1
  };
})();
const applicativeGarbageCollect = applicativeReaderT;
const forWithIndex = /* #__PURE__ */ (() => {
  const $0 = Data$dTraversableWithIndex.traversableWithIndexArray.traverseWithIndex(applicativeReaderT);
  return b => a => $0(a)(b);
})();
const runGarbageCollector = lib => v => () => {
  const freesRef = {value: Data$dList$dTypes.Nil};
  const release = () => {
    const frees = freesRef.value;
    return sequence_(frees)();
  };
  const $0 = v({frees: freesRef, lib});
  return Effect$dException.catchException(err => () => {
    release();
    return Effect$dException.throwException(err)();
  })(() => {
    const a = $0();
    release();
    return a;
  })();
};
const importLib = /* #__PURE__ */ Effect$dAff._bind(/* #__PURE__ */ Effect$dAff._liftEffect(importLibImpl))(x => {
  const $0 = Data$dNullable.nullable(x, Data$dMaybe.Nothing, Data$dMaybe.Just);
  if ($0.tag === "Nothing") { return Effect$dAff._pure(Data$dMaybe.Nothing); }
  if ($0.tag === "Just") {
    return Effect$dAff._catchError(Effect$dAff._map(Data$dMaybe.Just)(Promise$dAff.toAff$p(Promise$dAff.coerce)($0._1)))((() => {
      const $1 = Effect$dAff._pure(Data$dMaybe.Nothing);
      return v => $1;
    })());
  }
  $runtime.fail();
});
const bigNumObjToBigInt = bigNumObj => bindReaderT.bind(monadEffectReader.liftEffect(CardanoMultiplatformLib$dTransaction.bigNumObject.to_str(bigNumObj)))(numStr => {
  const $0 = Data$dBigInt.fromString(numStr);
  if ($0.tag === "Just") { return applicativeReaderT.pure($0._1); }
  return monadEffectReader.liftEffect(Effect$dException.throwException(Effect$dException.error("CardanoMultiplatformLib.valueFromCbor: Failed to parse BigInt: " + numStr)));
});
const bech32FromString = lib => addrStr => {
  const $0 = CardanoMultiplatformLib$dAddress.address.is_valid_bech32(lib.Address)(addrStr);
  return () => {
    const v1 = $0();
    if (v1) { return Data$dMaybe.$Maybe("Just", addrStr); }
    return Data$dMaybe.Nothing;
  };
};
const askLib = /* #__PURE__ */ asks(v => v.lib);
const asksLib = f => x => {
  const $0 = askLib(x);
  return () => {
    const a$p = $0();
    return f(a$p);
  };
};
const allocateOpt = () => alloc => bindReaderT.bind(asks(v => v.frees))(freesRef => bindReaderT.bind(monadEffectReader.liftEffect(alloc))(possibleObj => bindReaderT.bind(Foreign.isUndefined(possibleObj)
  ? applicativeReaderT.pure()
  : monadEffectReader.liftEffect((() => {
      const $0 = Data$dList$dTypes.Cons(() => JS$dObject.unsafeRunEffectMth0("free", possibleObj));
      return () => {
        const $1 = freesRef.value;
        freesRef.value = $0($1);
      };
    })()))(() => applicativeReaderT.pure(possibleObj))));
const allocate = () => alloc => bindReaderT.bind(asks(v => v.frees))(freesRef => bindReaderT.bind(monadEffectReader.liftEffect(alloc))(obj => bindReaderT.bind(monadEffectReader.liftEffect((() => {
  const $0 = Data$dList$dTypes.Cons(() => JS$dObject.unsafeRunEffectMth0("free", obj));
  return () => {
    const $1 = freesRef.value;
    freesRef.value = $0($1);
  };
})()))(() => applicativeReaderT.pure(obj))));
const bech32FromCbor = cbor => prefix => bindReaderT.bind(asks(x => x.lib))(v => bindReaderT.bind(allocate()(CardanoMultiplatformLib$dAddress.address.from_bytes(v.Address)(cbor)))(addrObject => monadEffectReader.liftEffect(CardanoMultiplatformLib$dAddress.addressObject.to_bech32(addrObject)(prefix))));
const bech32FromCborHex = cborHex => prefix => bech32FromCbor(HexString.decode(cborHex))(prefix);
const plutusVasilCostModels = /* #__PURE__ */ (() => {
  const plutusV2 = {
    language: "PlutusV2",
    op_costs: Data$dFunctor.arrayMap(Data$dShow.showIntImpl)([
      205665,
      812,
      1,
      1,
      1000,
      571,
      0,
      1,
      1000,
      24177,
      4,
      1,
      1000,
      32,
      117366,
      10475,
      4,
      23000,
      100,
      23000,
      100,
      23000,
      100,
      23000,
      100,
      23000,
      100,
      23000,
      100,
      100,
      100,
      23000,
      100,
      19537,
      32,
      175354,
      32,
      46417,
      4,
      221973,
      511,
      0,
      1,
      89141,
      32,
      497525,
      14068,
      4,
      2,
      196500,
      453240,
      220,
      0,
      1,
      1,
      1000,
      28662,
      4,
      2,
      245000,
      216773,
      62,
      1,
      1060367,
      12586,
      1,
      208512,
      421,
      1,
      187000,
      1000,
      52998,
      1,
      80436,
      32,
      43249,
      32,
      1000,
      32,
      80556,
      1,
      57667,
      4,
      1000,
      10,
      197145,
      156,
      1,
      197145,
      156,
      1,
      204924,
      473,
      1,
      208896,
      511,
      1,
      52467,
      32,
      64832,
      32,
      65493,
      32,
      22558,
      32,
      16563,
      32,
      76511,
      32,
      196500,
      453240,
      220,
      0,
      1,
      1,
      69522,
      11687,
      0,
      1,
      60091,
      32,
      196500,
      453240,
      220,
      0,
      1,
      1,
      196500,
      453240,
      220,
      0,
      1,
      1,
      1159724,
      392670,
      0,
      2,
      806990,
      30482,
      4,
      1927926,
      82523,
      4,
      265318,
      0,
      4,
      0,
      85931,
      32,
      205665,
      812,
      1,
      1,
      41182,
      32,
      212342,
      32,
      31220,
      32,
      32696,
      32,
      43357,
      32,
      32247,
      32,
      38314,
      32,
      35892428,
      10,
      57996947,
      18975,
      10,
      38887044,
      32947,
      10
    ])
  };
  const plutusV1 = {
    language: "PlutusV1",
    op_costs: Data$dFunctor.arrayMap(Data$dShow.showIntImpl)([
      205665,
      812,
      1,
      1,
      1000,
      571,
      0,
      1,
      1000,
      24177,
      4,
      1,
      1000,
      32,
      117366,
      10475,
      4,
      23000,
      100,
      23000,
      100,
      23000,
      100,
      23000,
      100,
      23000,
      100,
      23000,
      100,
      100,
      100,
      23000,
      100,
      19537,
      32,
      175354,
      32,
      46417,
      4,
      221973,
      511,
      0,
      1,
      89141,
      32,
      497525,
      14068,
      4,
      2,
      196500,
      453240,
      220,
      0,
      1,
      1,
      1000,
      28662,
      4,
      2,
      245000,
      216773,
      62,
      1,
      1060367,
      12586,
      1,
      208512,
      421,
      1,
      187000,
      1000,
      52998,
      1,
      80436,
      32,
      43249,
      32,
      1000,
      32,
      80556,
      1,
      57667,
      4,
      1000,
      10,
      197145,
      156,
      1,
      197145,
      156,
      1,
      204924,
      473,
      1,
      208896,
      511,
      1,
      52467,
      32,
      64832,
      32,
      65493,
      32,
      22558,
      32,
      16563,
      32,
      76511,
      32,
      196500,
      453240,
      220,
      0,
      1,
      1,
      69522,
      11687,
      0,
      1,
      60091,
      32,
      196500,
      453240,
      220,
      0,
      1,
      1,
      196500,
      453240,
      220,
      0,
      1,
      1,
      806990,
      30482,
      4,
      1927926,
      82523,
      4,
      265318,
      0,
      4,
      0,
      85931,
      32,
      205665,
      812,
      1,
      1,
      41182,
      32,
      212342,
      32,
      31220,
      32,
      32696,
      32,
      43357,
      32,
      32247,
      32,
      38314,
      32,
      57996947,
      18975,
      10
    ])
  };
  return bindReaderT.bind(asksLib(v => v.Costmdls))(costModelsClass => bindReaderT.bind(allocate()(CardanoMultiplatformLib$dCostModel.costmdls.from_json(costModelsClass)(Data$dArgonaut$dCore.stringify(encodeJson({
    PlutusV1: plutusV2
  })))))(pv1 => bindReaderT.bind(allocate()(CardanoMultiplatformLib$dCostModel.costmdls.from_json(costModelsClass)(Data$dArgonaut$dCore.stringify(Data$dArgonaut$dCore.fromObject(gEncodeJsonCons2.gEncodeJson({
    PlutusV2: plutusV2
  })(Type$dProxy.Proxy))))))(pv2 => bindReaderT.bind(allocate()(CardanoMultiplatformLib$dCostModel.costmdls.from_json(costModelsClass)(Data$dArgonaut$dCore.stringify(encodeJson2({
    PlutusV1: plutusV1,
    PlutusV2: plutusV2
  })))))(pv1AndPv2 => applicativeReaderT.pure({pv1, pv2, pv1AndPv2})))));
})();
const pubKeyHashFromBech32 = lib => bech32 => runGarbageCollector(lib)(bindReaderT.bind(asksLib(v => v.Address))(addressClass => bindReaderT.bind(allocate()(CardanoMultiplatformLib$dAddress.address.from_bech32(addressClass)(bech32)))(addrObj => bindReaderT.bind(allocateOpt()(CardanoMultiplatformLib$dAddress.addressObject.payment_cred(addrObj)))(possibleStakeCredObj => {
  const $0 = Data$dTraversable.traversableMaybe.traverse(applicativeReaderT)(stakeCredObj => bindReaderT.bind(allocateOpt()(CardanoMultiplatformLib$dAddress.stakeCredentialObject.to_keyhash(stakeCredObj)))(h => Data$dTraversable.traversableMaybe.traverse(applicativeReaderT)(h$p => monadEffectReader.liftEffect(CardanoMultiplatformLib$dEd25519KeyHash.ed25519KeyHashObject.to_hex(h$p)))(Foreign.isUndefined(h)
    ? Data$dMaybe.Nothing
    : Data$dMaybe.$Maybe("Just", h))))(Foreign.isUndefined(possibleStakeCredObj) ? Data$dMaybe.Nothing : Data$dMaybe.$Maybe("Just", possibleStakeCredObj));
  return x => {
    const $1 = $0(x);
    return () => {
      const a$p = $1();
      return (() => {
        if (a$p.tag === "Just") { return a$p._1; }
        if (a$p.tag === "Nothing") { return Data$dMaybe.Nothing; }
        $runtime.fail();
      })();
    };
  };
}))));
const scriptHashFromBech32 = lib => bech32 => runGarbageCollector(lib)(bindReaderT.bind(asksLib(v => v.Address))(addressClass => bindReaderT.bind(allocate()(CardanoMultiplatformLib$dAddress.address.from_bech32(addressClass)(bech32)))(addrObj => bindReaderT.bind(allocateOpt()(CardanoMultiplatformLib$dAddress.addressObject.payment_cred(addrObj)))(possibleStakeCredObj => {
  const $0 = Data$dTraversable.traversableMaybe.traverse(applicativeReaderT)(stakeCredObj => bindReaderT.bind(allocateOpt()(CardanoMultiplatformLib$dAddress.stakeCredentialObject.to_scripthash(stakeCredObj)))(h => Data$dTraversable.traversableMaybe.traverse(applicativeReaderT)(h$p => monadEffectReader.liftEffect(Contrib$dCardanoMultiplatformLib$dScriptHash.scriptHashObject.to_hex(h$p)))(Foreign.isUndefined(h)
    ? Data$dMaybe.Nothing
    : Data$dMaybe.$Maybe("Just", h))))(Foreign.isUndefined(possibleStakeCredObj) ? Data$dMaybe.Nothing : Data$dMaybe.$Maybe("Just", possibleStakeCredObj));
  return x => {
    const $1 = $0(x);
    return () => {
      const a$p = $1();
      return (() => {
        if (a$p.tag === "Just") { return a$p._1; }
        if (a$p.tag === "Nothing") { return Data$dMaybe.Nothing; }
        $runtime.fail();
      })();
    };
  };
}))));
const toCoinCbor = num => bindReaderT.bind(asks(x => x.lib))(v => bindReaderT.bind(allocate()(CardanoMultiplatformLib$dTransaction.bigNum.from_str(v.BigNum)(Data$dBigInt.toString(num))))(bigNum => monadEffectReader.liftEffect(CardanoMultiplatformLib$dTransaction.bigNumObject.to_bytes(bigNum))));
const transactionBodyFromCbor = cbor => bindReaderT.bind(asks(x => x.lib))(v => allocate()(CardanoMultiplatformLib$dTransaction.transactionBody.from_bytes(v.TransactionBody)(cbor)));
const transactionFromCbor = cbor => bindReaderT.bind(asksLib(v => v.Transaction))(txClass => allocate()(CardanoMultiplatformLib$dTransaction.transaction.from_bytes(txClass)(cbor)));
const transactionWitnessSetFromBytes = twCbor => bindReaderT.bind(asks(x => x.lib))(v => allocate()(CardanoMultiplatformLib$dTransaction.transactionWitnessSet.from_bytes(v.TransactionWitnessSet)(twCbor)));
const valueMapFromValueObject = valObj => bindReaderT.bind(monadEffectReader.liftEffect(Web$dEncoding$dTextDecoder.new("utf8")))(textDecoder => bindReaderT.bind(allocateOpt()(CardanoMultiplatformLib$dTransaction.valueObject.multiasset(valObj)))(possibleMultiAssetObj => bindReaderT.bind(allocate()(CardanoMultiplatformLib$dTransaction.valueObject.coin(valObj)))(coinObj => bindReaderT.bind(bigNumObjToBigInt(coinObj))(lovelace => {
  const v = Foreign.isUndefined(possibleMultiAssetObj) ? Data$dMaybe.Nothing : Data$dMaybe.$Maybe("Just", possibleMultiAssetObj);
  const $0 = (() => {
    if (v.tag === "Nothing") { return applicativeReaderT.pure(Data$dMap$dInternal.Leaf); }
    if (v.tag === "Just") {
      const $0 = v._1;
      return bindReaderT.bind(allocate()(CardanoMultiplatformLib$dTransaction.multiAssetObject.keys($0)))(scriptHashesObj => bindReaderT.bind(monadEffectReader.liftEffect(Contrib$dCardanoMultiplatformLib$dScriptHash.scriptHashesObject.len(scriptHashesObj)))(len => {
        const $1 = forWithIndex(Data$dArray.replicate(len)())(idx => v1 => bindReaderT.bind(allocate()(Contrib$dCardanoMultiplatformLib$dScriptHash.scriptHashesObject.get(scriptHashesObj)(idx)))(scriptHashObj => bindReaderT.bind(monadEffectReader.liftEffect(Contrib$dCardanoMultiplatformLib$dScriptHash.scriptHashObject.to_hex(scriptHashObj)))(hex => bindReaderT.bind(allocateOpt()(CardanoMultiplatformLib$dTransaction.multiAssetObject.get($0)(scriptHashObj)))(possibleAssets => {
          const v2 = Foreign.isUndefined(possibleAssets) ? Data$dMaybe.Nothing : Data$dMaybe.$Maybe("Just", possibleAssets);
          if (v2.tag === "Nothing") { return applicativeReaderT.pure(Data$dTuple.$Tuple(hex, Data$dMap$dInternal.Leaf)); }
          if (v2.tag === "Just") {
            return bindReaderT.bind(allocate()(CardanoMultiplatformLib$dTransaction.assetsObject.keys(v2._1)))(assetNamesObj => bindReaderT.bind(monadEffectReader.liftEffect(CardanoMultiplatformLib$dTransaction.assetNamesObject.len(assetNamesObj)))(assetNamesLen => {
              const $1 = forWithIndex(Data$dArray.replicate(assetNamesLen)())(idx$p => v3 => bindReaderT.bind(allocate()(CardanoMultiplatformLib$dTransaction.assetNamesObject.get(assetNamesObj)(idx$p)))(assetNameObj => bindReaderT.bind(monadEffectReader.liftEffect(CardanoMultiplatformLib$dTransaction.assetNameObject.name(assetNameObj)))(nameUint8Array => {
                const $1 = HexString.encode(nameUint8Array);
                return bindReaderT.bind(allocate()(CardanoMultiplatformLib$dTransaction.multiAssetObject.get_asset($0)(scriptHashObj)(assetNameObj)))(bigNumObj => bindReaderT.bind(monadEffectReader.liftEffect(CardanoMultiplatformLib$dTransaction.bigNumObject.to_str(bigNumObj)))(numStr => {
                  const $2 = Data$dBigInt.fromString(numStr);
                  if ($2.tag === "Just") { return applicativeReaderT.pure(Data$dTuple.$Tuple($1, $2._1)); }
                  return monadEffectReader.liftEffect(Effect$dException.throwException(Effect$dException.error("CardanoMultiplatformLib.valueFromCbor: Failed to parse BigInt: " + numStr)));
                }));
              })));
              return x => {
                const $2 = $1(x);
                return () => {
                  const a$p = $2();
                  return Data$dTuple.$Tuple(hex, fromFoldable(a$p));
                };
              };
            }));
          }
          $runtime.fail();
        }))));
        return x => {
          const $2 = $1(x);
          return () => {
            const a$p = $2();
            return fromFoldable(a$p);
          };
        };
      }));
    }
    $runtime.fail();
  })();
  return x => {
    const $1 = $0(x);
    return () => {
      const a$p = $1();
      return Data$dMap$dInternal.unionWith(Data$dOrd.ordString)(Data$dMap$dInternal.unionWith(Data$dOrd.ordString)(Data$dBigInt.biAdd))(Data$dMap$dInternal.$$$Map(
        "Two",
        Data$dMap$dInternal.Leaf,
        "",
        Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, "", lovelace, Data$dMap$dInternal.Leaf),
        Data$dMap$dInternal.Leaf
      ))(a$p);
    };
  };
}))));
const valueFromCbor = cbor => bindReaderT.bind(asks(x => x.lib))(v => bindReaderT.bind(allocate()(CardanoMultiplatformLib$dTransaction.value.from_bytes(v.Value)(cbor)))(valObj => valueMapFromValueObject(valObj)));
export {
  PlutusV1IsSymbol,
  allocate,
  allocateOpt,
  applicativeGarbageCollect,
  applicativeReaderT,
  applyGarbageCollector,
  askLib,
  asks,
  asksLib,
  bech32FromCbor,
  bech32FromCborHex,
  bech32FromString,
  bigNumObjToBigInt,
  bindGarbageCollector,
  bindReaderT,
  encodeJson,
  encodeJson2,
  forWithIndex,
  fromFoldable,
  functorGarbageCollector,
  gEncodeJsonCons,
  gEncodeJsonCons2,
  importLib,
  monadEffectGarbageCollect,
  monadEffectReader,
  monadGarbageCollector,
  plutusVasilCostModels,
  pubKeyHashFromBech32,
  runGarbageCollector,
  scriptHashFromBech32,
  sequence_,
  toCoinCbor,
  transactionBodyFromCbor,
  transactionFromCbor,
  transactionWitnessSetFromBytes,
  valueFromCbor,
  valueMapFromValueObject
};
export * from "./foreign.js";
