import * as $runtime from "../runtime.js";
import * as CardanoMultiplatformLib from "../CardanoMultiplatformLib/index.js";
import * as Contrib$dCardano from "../Contrib.Cardano/index.js";
import * as Contrib$dFetch from "../Contrib.Fetch/index.js";
import * as Control$dMonad$dExcept$dTrans from "../Control.Monad.Except.Trans/index.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dArgonaut$dDecode$dClass from "../Data.Argonaut.Decode.Class/index.js";
import * as Data$dArgonaut$dDecode$dCombinators from "../Data.Argonaut.Decode.Combinators/index.js";
import * as Data$dArgonaut$dDecode$dDecoders from "../Data.Argonaut.Decode.Decoders/index.js";
import * as Data$dArgonaut$dDecode$dError from "../Data.Argonaut.Decode.Error/index.js";
import * as Data$dArgonaut$dEncode$dClass from "../Data.Argonaut.Encode.Class/index.js";
import * as Data$dBigInt from "../Data.BigInt/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFormURLEncoded from "../Data.FormURLEncoded/index.js";
import * as Data$dFormURLEncoded$dQuery from "../Data.FormURLEncoded.Query/index.js";
import * as Data$dHTTP$dMethod from "../Data.HTTP.Method/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dString$dCodePoints from "../Data.String.CodePoints/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dAff$dClass from "../Effect.Aff.Class/index.js";
import * as Fetch$dCore$dHeaders from "../Fetch.Core.Headers/index.js";
import * as Fetch$dCore$dRequestBody from "../Fetch.Core.RequestBody/index.js";
import * as Fetch$dInternal$dRequest from "../Fetch.Internal.Request/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
import * as HexString from "../HexString/index.js";
import * as Marlowe$dRuntime$dWeb$dTypes from "../Marlowe.Runtime.Web.Types/index.js";
import * as Partial from "../Partial/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const $FoldResult = (tag, _1) => ({tag, _1});
const $Purpose = tag => tag;
const $TODO = () => ({tag: "TODO"});
const applicativeExceptT = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.applicativeExceptT(Effect$dAff.monadAff);
const valueFromFoldable = /* #__PURE__ */ Data$dMap$dInternal.fromFoldable(Contrib$dCardano.ordAssetId)(Data$dFoldable.foldableArray);
const $$for = /* #__PURE__ */ (() => {
  const traverse2 = Data$dTraversable.traversableArray.traverse(Data$dMaybe.applicativeMaybe);
  return x => f => traverse2(f)(x);
})();
const decodeJson = /* #__PURE__ */ Data$dArgonaut$dDecode$dDecoders.decodeForeignObject(Data$dEither.Right);
const gDecodeJsonCons = /* #__PURE__ */ Data$dArgonaut$dDecode$dClass.gDecodeJsonCons({
  decodeJsonField: j => {
    if (j.tag === "Just") {
      return Data$dMaybe.$Maybe(
        "Just",
        Data$dArgonaut$dCore._caseJson(
          v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
          v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
          v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
          Data$dEither.Right,
          v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
          v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
          j._1
        )
      );
    }
    return Data$dMaybe.Nothing;
  }
});
const getField1 = /* #__PURE__ */ (() => Data$dArgonaut$dDecode$dCombinators.getField({
  decodeJson: Data$dArgonaut$dDecode$dDecoders.decodeArray(Data$dArgonaut$dDecode$dClass.decodeRecord(gDecodeJsonCons(gDecodeJsonCons(Data$dArgonaut$dDecode$dClass.gDecodeJsonNil)({
    reflectSymbol: () => "unit"
  })()())({reflectSymbol: () => "quantity"})()())().decodeJson)
}))();
const bind2 = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.bindExceptT(Effect$dAff.monadAff).bind)();
const fetchEither1 = /* #__PURE__ */ (() => Contrib$dFetch.fetchEither()()({
  convert: Fetch$dInternal$dRequest.toCoreRequestOptionsHelpe1({convertImpl: v => Fetch$dCore$dRequestBody.fromArrayView})()()()({reflectSymbol: () => "body"})(Fetch$dInternal$dRequest.toCoreRequestOptionsHelpe1({
    convertImpl: v => Fetch$dCore$dHeaders.unsafeFromRecord
  })()()()({reflectSymbol: () => "headers"})(Fetch$dInternal$dRequest.toCoreRequestOptionsHelpe1(Fetch$dInternal$dRequest.toCoreRequestOptionsConve8)()()()({
    reflectSymbol: () => "method"
  })(Fetch$dInternal$dRequest.toCoreRequestOptionsHelpe)()())()())()().convertHelper(Type$dProxy.Proxy)
}))();
const identity = x => x;
const fromHomogeneous = /* #__PURE__ */ (() => {
  const $0 = Foreign$dObject.toArrayWithKey(Data$dTuple.Tuple);
  return x => Data$dFormURLEncoded$dQuery.fromFoldable2($0(x));
})();
const toCoreRequestOptionsRowRo1 = /* #__PURE__ */ (() => (
  {
    convert: Fetch$dInternal$dRequest.toCoreRequestOptionsHelpe1({convertImpl: v => Fetch$dCore$dHeaders.unsafeFromRecord})()()()({reflectSymbol: () => "headers"})(Fetch$dInternal$dRequest.toCoreRequestOptionsHelpe)()().convertHelper(Type$dProxy.Proxy)
  }
))();
const liftAff = /* #__PURE__ */ (() => Effect$dAff$dClass.monadAffExceptT(Effect$dAff$dClass.monadAffAff).liftAff)();
const decodeArray = {decodeJson: /* #__PURE__ */ Data$dArgonaut$dDecode$dDecoders.decodeArray(Data$dEither.Right)};
const for3 = /* #__PURE__ */ (() => {
  const traverse2 = Data$dTraversable.traversableArray.traverse(Data$dEither.applicativeEither);
  return x => f => traverse2(f)(x);
})();
const decodeJsonV = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dDecode$dDecoders.decodeArray(Marlowe$dRuntime$dWeb$dTypes.decodeJsonTxId.decodeJson);
  return json => {
    const $1 = $0(json);
    if ($1.tag === "Left") { return Data$dEither.$Either("Left", {type: "jsonDecodeError", value: $1._1}); }
    if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1); }
    $runtime.fail();
  };
})();
const decodeJsonV1 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dDecode$dDecoders.decodeArray(Data$dArgonaut$dDecode$dClass.decodeRecord(gDecodeJsonCons(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons({
    decodeJsonField: j => {
      if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", Data$dArgonaut$dDecode$dDecoders.decodeInt(j._1)); }
      return Data$dMaybe.Nothing;
    }
  })(Data$dArgonaut$dDecode$dClass.gDecodeJsonNil)({reflectSymbol: () => "tx_index"})()())({reflectSymbol: () => "tx_hash"})()())().decodeJson);
  return json => {
    const $1 = $0(json);
    if ($1.tag === "Left") { return Data$dEither.$Either("Left", {type: "jsonDecodeError", value: $1._1}); }
    if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1); }
    $runtime.fail();
  };
})();
const for5 = /* #__PURE__ */ (() => {
  const traverse2 = Data$dTraversable.traversableArray.traverse(applicativeExceptT);
  return x => f => traverse2(f)(x);
})();
const TODO = /* #__PURE__ */ $TODO();
const ScriptRedeemer = x => x;
const Mint = /* #__PURE__ */ $Purpose("Mint");
const Spend = /* #__PURE__ */ $Purpose("Spend");
const ProjectId = x => x;
const PageNumber = x => x;
const Continue = value0 => $FoldResult("Continue", value0);
const StopFolding = value0 => $FoldResult("StopFolding", value0);
const ExUnits = x => x;
const newtypeProjectId_ = {Coercible0: () => {}};
const eqProjectId = {eq: x => y => x === y};
const ordProjectId = {compare: x => y => Data$dOrd.ordString.compare(x)(y), Eq0: () => eqProjectId};
const eqNetwork = {eq: n1 => n2 => n1 === n2};
const encodeJsonProjectId = Data$dArgonaut$dEncode$dClass.encodeJsonJString;
const decodeJsonProjectId = Data$dArgonaut$dDecode$dClass.decodeJsonString;
const preview = "preview";
const preprod = "preprod";
const parseBlockfrostUnit = v => {
  if (v === "lovelace") { return Data$dMaybe.$Maybe("Just", Contrib$dCardano.AdaAssetId); }
  const v1 = Data$dString$dCodePoints.splitAt(56)(v);
  const $0 = Contrib$dCardano.policyIdFromHexString(v1.before);
  if ($0.tag === "Just") {
    const $1 = HexString.hex(v1.after);
    if ($1.tag === "Just") { return Data$dMaybe.$Maybe("Just", Contrib$dCardano.$AssetId("AssetId", $0._1, $1._1)); }
    return Data$dMaybe.Nothing;
  }
  if ($0.tag === "Nothing") { return Data$dMaybe.Nothing; }
  $runtime.fail();
};
const parseBlockfrostScriptRedeemer = v => applicativeExceptT.pure({txOutRef: {txId: v.tx_hash, txIx: v.tx_index}});
const parseBlockfrostAmount = amount => {
  const $0 = $$for(amount)(v => {
    const $0 = parseBlockfrostUnit(v.unit);
    if ($0.tag === "Just") {
      const $1 = Data$dBigInt.fromString(v.quantity);
      if ($1.tag === "Just") { return Data$dMaybe.$Maybe("Just", Data$dTuple.$Tuple($0._1, $1._1)); }
      return Data$dMaybe.Nothing;
    }
    if ($0.tag === "Nothing") { return Data$dMaybe.Nothing; }
    $runtime.fail();
  });
  if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", valueFromFoldable($0._1)); }
  return Data$dMaybe.Nothing;
};
const parseBlockfrostUTxO = cardanoSerializationlib => possibleTxId => json => {
  const $0 = decodeJson(json);
  return (() => {
    if ($0.tag === "Left") {
      const $1 = $0._1;
      return v => Data$dEither.$Either("Left", $1);
    }
    if ($0.tag === "Right") {
      const $1 = $0._1;
      return f => f($1);
    }
    $runtime.fail();
  })()(obj => {
    const $1 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dArgonaut$dCore.caseJsonString(Data$dEither.$Either(
      "Left",
      Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")
    ))(Data$dEither.Right))(obj)("address");
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
    })()(addressStr => {
      const $2 = CardanoMultiplatformLib.bech32FromString(cardanoSerializationlib)(addressStr)();
      const $3 = (() => {
        if ($2.tag === "Nothing") { return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Invalid Bech32")); }
        if ($2.tag === "Just") { return Data$dEither.$Either("Right", $2._1); }
        $runtime.fail();
      })();
      return (() => {
        if ($3.tag === "Left") {
          const $4 = $3._1;
          return v => Data$dEither.$Either("Left", $4);
        }
        if ($3.tag === "Right") {
          const $4 = $3._1;
          return f => f($4);
        }
        $runtime.fail();
      })()(address => {
        const $4 = getField1(obj)("amount");
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
        })()(amount => {
          const $5 = parseBlockfrostAmount(amount);
          if ($5.tag === "Nothing") { return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Invalid amount value")); }
          if ($5.tag === "Just") {
            const $6 = Data$dArgonaut$dDecode$dDecoders.getFieldOptional$p(Data$dArgonaut$dCore.caseJsonString(Data$dEither.$Either(
              "Left",
              Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")
            ))(Data$dEither.Right))(obj)("data_hash");
            if ($6.tag === "Left") { return Data$dEither.$Either("Left", $6._1); }
            if ($6.tag === "Right") {
              const $7 = $6._1.tag === "Just" ? Data$dMaybe.$Maybe("Just", $6._1._1) : Data$dMaybe.Nothing;
              const $8 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dArgonaut$dDecode$dDecoders.decodeInt)(obj)("output_index");
              return (() => {
                if ($8.tag === "Left") {
                  const $9 = $8._1;
                  return v => Data$dEither.$Either("Left", $9);
                }
                if ($8.tag === "Right") {
                  const $9 = $8._1;
                  return f => f($9);
                }
                $runtime.fail();
              })()(txIx => {
                if (possibleTxId.tag === "Just") { return Data$dEither.$Either("Right", {txOutRef: {txId: possibleTxId._1, txIx}, txOut: {address, value: $5._1, datumHash: $7}}); }
                if (possibleTxId.tag === "Nothing") {
                  const $9 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dArgonaut$dCore.caseJsonString(Data$dEither.$Either(
                    "Left",
                    Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")
                  ))(Data$dEither.Right))(obj)("tx_hash");
                  if ($9.tag === "Left") { return Data$dEither.$Either("Left", $9._1); }
                  if ($9.tag === "Right") { return Data$dEither.$Either("Right", {txOutRef: {txId: $9._1, txIx}, txOut: {address, value: $5._1, datumHash: $7}}); }
                }
                $runtime.fail();
              });
            }
          }
          $runtime.fail();
        });
      });
    });
  });
};
const mainnet = "mainnet";
const foldPages = fetchPage => f => a => {
  const go = accum => currPageNumber => bind2(fetchPage(currPageNumber))(page => {
    if (page.length === 0) { return applicativeExceptT.pure(accum); }
    const res = Data$dFoldable.foldrArray(item => pageAccum => {
      if (pageAccum.tag === "StopFolding") { return pageAccum; }
      if (pageAccum.tag === "Continue") { return f(pageAccum._1)(item); }
      $runtime.fail();
    })($FoldResult("Continue", accum))(page);
    if (res.tag === "StopFolding") { return applicativeExceptT.pure(res._1); }
    if (res.tag === "Continue") { return go(res._1)(currPageNumber + 1 | 0); }
    $runtime.fail();
  });
  return go(a)(1);
};
const encodeBlockfrostUnit = v => {
  if (v.tag === "AdaAssetId") { return "lovelace"; }
  if (v.tag === "AssetId") { return v._1 + v._2; }
  $runtime.fail();
};
const apiURL = network => {
  if (network === "preprod") { return "https://cardano-preprod.blockfrost.io/api/v0"; }
  if (network === "preview") { return "https://cardano-testnet.blockfrost.io/api/v0"; }
  if (network === "mainnet") { return "https://cardano-mainnet.blockfrost.io/api/v0"; }
  return Partial._crashWith("Blockfrost.apiURL: Unknown network");
};
const allowedStatusCodes = [200, 201, 202, 206];
const evaluateTx = v => network => cborHex => Effect$dAff._bind(fetchEither1(apiURL(network) + "/utils/txs/evaluate")({
  headers: {project_id: v, "Content-Type": "application/cbor"},
  body: HexString.decode(cborHex),
  method: Data$dHTTP$dMethod.POST
})(allowedStatusCodes)(identity))(res => Data$dTraversable.traversableEither.traverse(Effect$dAff.applicativeAff)(v1 => Effect$dAff._map(Unsafe$dCoerce.unsafeCoerce)(v1.json))(res));
const fetchAddressUTxOs = cml => v => network => address => v1 => bind2(Contrib$dFetch.fetchV()()(toCoreRequestOptionsRowRo1)((() => {
  const $0 = Data$dFormURLEncoded.encode(Data$dFormURLEncoded$dQuery.toFormURLEncoded(fromHomogeneous({page: [Data$dShow.showIntImpl(v1)]})));
  return apiURL(network) + "/addresses/" + address + "/utxos?" + (() => {
    if ($0.tag === "Just") { return $0._1; }
    $runtime.fail();
  })();
})())({headers: {project_id: v}})(allowedStatusCodes))(v2 => bind2(liftAff(Effect$dAff._map(Unsafe$dCoerce.unsafeCoerce)(v2.json)))(json => {
  const $0 = decodeArray.decodeJson(json);
  const $1 = (() => {
    if ($0.tag === "Left") {
      const $1 = $0._1;
      return v$1 => Data$dEither.$Either("Left", $1);
    }
    if ($0.tag === "Right") {
      const $1 = $0._1;
      return f => f($1);
    }
    $runtime.fail();
  })()(utxos => for3(utxos)(parseBlockfrostUTxO(cml)(Data$dMaybe.Nothing)));
  return Effect$dAff._pure((() => {
    if ($1.tag === "Left") { return Data$dEither.$Either("Left", {type: "jsonDecodeError", value: $1._1}); }
    if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1); }
    $runtime.fail();
  })());
}));
const foldAddressUTxOs = cml => projectId => network => address => f => a => foldPages(fetchAddressUTxOs(cml)(projectId)(network)(address))(f)(a);
const fetchAssetTxs = v => network => v1 => v2 => bind2(Contrib$dFetch.fetchV()()(toCoreRequestOptionsRowRo1)((() => {
  const $0 = Data$dFormURLEncoded.encode(Data$dFormURLEncoded$dQuery.toFormURLEncoded(fromHomogeneous({page: [Data$dShow.showIntImpl(v2)]})));
  return apiURL(network) + "/assets/" + v1._1 + v1._2 + "/txs?" + (() => {
    if ($0.tag === "Just") { return $0._1; }
    $runtime.fail();
  })();
})())({headers: {project_id: v}})(allowedStatusCodes))(v3 => bind2(liftAff(Effect$dAff._map(Unsafe$dCoerce.unsafeCoerce)(v3.json)))(json => Effect$dAff._pure(decodeJsonV(json))));
const foldAssetTxs = projectId => network => assetId => f => a => foldPages(fetchAssetTxs(projectId)(network)(assetId))(f)(a);
const fetchDatum = v => network => v1 => Effect$dAff._bind(Effect$dAff._map(Data$dEither.hush)(Contrib$dFetch.fetchEither()()(toCoreRequestOptionsRowRo1)(apiURL(network) + "/scripts/datum/" + v1)({
  headers: {project_id: v}
})(allowedStatusCodes)(identity)))(res => Data$dTraversable.traversableMaybe.traverse(Effect$dAff.applicativeAff)(v2 => Effect$dAff._map(Unsafe$dCoerce.unsafeCoerce)(v2.json))(res));
const fetchScriptRedeemers = v => network => scriptHash => v1 => bind2(Contrib$dFetch.fetchV()()(toCoreRequestOptionsRowRo1)((() => {
  const $0 = Data$dFormURLEncoded.encode(Data$dFormURLEncoded$dQuery.toFormURLEncoded(fromHomogeneous({page: [Data$dShow.showIntImpl(v1)]})));
  return apiURL(network) + "/scripts/" + scriptHash + "/redeemers?" + (() => {
    if ($0.tag === "Just") { return $0._1; }
    $runtime.fail();
  })();
})())({headers: {project_id: v}})(allowedStatusCodes))(v2 => bind2(liftAff(Effect$dAff._map(Unsafe$dCoerce.unsafeCoerce)(v2.json)))(json => bind2(Effect$dAff._pure(decodeJsonV1(json)))(redeemers => for5(redeemers)(parseBlockfrostScriptRedeemer))));
const foldScriptRedeemers = projectId => network => scriptHash => f => a => foldPages(pageNumber => fetchScriptRedeemers(projectId)(network)(scriptHash)(pageNumber))(f)(a);
const fetchTxUTxOs = cml => v => network => v1 => bind2(Contrib$dFetch.fetchV()()(toCoreRequestOptionsRowRo1)(apiURL(network) + "/txs/" + v1 + "/utxos")({headers: {project_id: v}})(allowedStatusCodes))(v2 => bind2(liftAff(Effect$dAff._map(Unsafe$dCoerce.unsafeCoerce)(v2.json)))(json => {
  const parseUTxOs = (prop, possibleTxId) => {
    const $0 = decodeJson(json);
    const $1 = (() => {
      if ($0.tag === "Left") {
        const $1 = $0._1;
        return v$1 => Data$dEither.$Either("Left", $1);
      }
      if ($0.tag === "Right") {
        const $1 = $0._1;
        return f => f($1);
      }
      $runtime.fail();
    })()(obj => {
      const $1 = Data$dArgonaut$dDecode$dDecoders.getField(decodeArray.decodeJson)(obj)(prop);
      return (() => {
        if ($1.tag === "Left") {
          const $2 = $1._1;
          return v$1 => Data$dEither.$Either("Left", $2);
        }
        if ($1.tag === "Right") {
          const $2 = $1._1;
          return f => f($2);
        }
        $runtime.fail();
      })()(outputs => for3(outputs)(parseBlockfrostUTxO(cml)(possibleTxId)));
    });
    if ($1.tag === "Left") { return Data$dEither.$Either("Left", {type: "jsonDecodeError", value: $1._1}); }
    if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1); }
    $runtime.fail();
  };
  const $0 = parseUTxOs("outputs", Data$dMaybe.$Maybe("Just", v1));
  return Effect$dAff._pure((() => {
    if ($0.tag === "Left") {
      const $1 = $0._1;
      return v$1 => Data$dEither.$Either("Left", $1);
    }
    if ($0.tag === "Right") {
      const $1 = $0._1;
      return f => f($1);
    }
    $runtime.fail();
  })()(outputs => {
    const $1 = parseUTxOs("inputs", Data$dMaybe.Nothing);
    return (() => {
      if ($1.tag === "Left") {
        const $2 = $1._1;
        return v$1 => Data$dEither.$Either("Left", $2);
      }
      if ($1.tag === "Right") {
        const $2 = $1._1;
        return f => f($2);
      }
      $runtime.fail();
    })()(inputs => Data$dEither.$Either("Right", {inputs, outputs}));
  }));
}));
const submitTx = v => network => cborHex => Effect$dAff._bind(fetchEither1(apiURL(network) + "/tx/submit")({
  headers: {project_id: v, "Content-Type": "application/cbor"},
  body: HexString.decode(cborHex),
  method: Data$dHTTP$dMethod.POST
})(allowedStatusCodes)(identity))(res => Data$dTraversable.traversableEither.traverse(Effect$dAff.applicativeAff)(v1 => Effect$dAff._map(Unsafe$dCoerce.unsafeCoerce)(v1.json))(res));
export {
  $FoldResult,
  $Purpose,
  $TODO,
  Continue,
  ExUnits,
  Mint,
  PageNumber,
  ProjectId,
  ScriptRedeemer,
  Spend,
  StopFolding,
  TODO,
  allowedStatusCodes,
  apiURL,
  applicativeExceptT,
  bind2,
  decodeArray,
  decodeJson,
  decodeJsonProjectId,
  decodeJsonV,
  decodeJsonV1,
  encodeBlockfrostUnit,
  encodeJsonProjectId,
  eqNetwork,
  eqProjectId,
  evaluateTx,
  fetchAddressUTxOs,
  fetchAssetTxs,
  fetchDatum,
  fetchEither1,
  fetchScriptRedeemers,
  fetchTxUTxOs,
  foldAddressUTxOs,
  foldAssetTxs,
  foldPages,
  foldScriptRedeemers,
  $$for as for,
  for3,
  for5,
  fromHomogeneous,
  gDecodeJsonCons,
  getField1,
  identity,
  liftAff,
  mainnet,
  newtypeProjectId_,
  ordProjectId,
  parseBlockfrostAmount,
  parseBlockfrostScriptRedeemer,
  parseBlockfrostUTxO,
  parseBlockfrostUnit,
  preprod,
  preview,
  submitTx,
  toCoreRequestOptionsRowRo1,
  valueFromFoldable
};
