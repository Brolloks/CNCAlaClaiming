import * as $runtime from "../runtime.js";
import * as CardanoMultiplatformLib from "../CardanoMultiplatformLib/index.js";
import * as CardanoMultiplatformLib$dTransaction from "../CardanoMultiplatformLib.Transaction/index.js";
import * as Component$dUseWithdrawal$dBlockfrost from "../Component.UseWithdrawal.Blockfrost/index.js";
import * as Component$dUseWithdrawal$dTxBuilder from "../Component.UseWithdrawal.TxBuilder/index.js";
import * as Contrib$dCardano from "../Contrib.Cardano/index.js";
import * as Contrib$dCardano$dCML from "../Contrib.Cardano.CML/index.js";
import * as Contrib$dCardano$dWallet from "../Contrib.Cardano.Wallet/index.js";
import * as Contrib$dFetch from "../Contrib.Fetch/index.js";
import * as Control$dError$dUtil from "../Control.Error.Util/index.js";
import * as Control$dMonad$dExcept$dTrans from "../Control.Monad.Except.Trans/index.js";
import * as Control$dMonad$dMaybe$dTrans from "../Control.Monad.Maybe.Trans/index.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dArgonaut$dDecode$dClass from "../Data.Argonaut.Decode.Class/index.js";
import * as Data$dArgonaut$dDecode$dDecoders from "../Data.Argonaut.Decode.Decoders/index.js";
import * as Data$dArgonaut$dDecode$dError from "../Data.Argonaut.Decode.Error/index.js";
import * as Data$dArgonaut$dEncode$dClass from "../Data.Argonaut.Encode.Class/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dBigInt from "../Data.BigInt/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Foreign$dInternal$dStringify from "../Foreign.Internal.Stringify/index.js";
import * as HexString from "../HexString/index.js";
import * as Marlowe$dRuntime$dWeb$dTypes from "../Marlowe.Runtime.Web.Types/index.js";
import * as Partial from "../Partial/index.js";
import * as Record from "../Record/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Wallet from "../Wallet/index.js";
import * as WalletContext from "../WalletContext/index.js";
const $Action = (tag, _1) => ({tag, _1});
const $PayoutUTxOStatusCheckingError = (tag, _1) => ({tag, _1});
const $SigningTxError = (tag, _1) => ({tag, _1});
const $State = (tag, _1, _2) => ({tag, _1, _2});
const $SubmittingTxError = (tag, _1) => ({tag, _1});
const policyIdIsSymbol = {reflectSymbol: () => "policyId"};
const assetNameIsSymbol = {reflectSymbol: () => "assetName"};
const utxoIsSymbol = {reflectSymbol: () => "utxo"};
const roleTokenIsSymbol = {reflectSymbol: () => "roleToken"};
const $$for = /* #__PURE__ */ (() => {
  const traverse2 = Data$dTraversable.traversableArray.traverse(CardanoMultiplatformLib.applicativeReaderT);
  return x => f => traverse2(f)(x);
})();
const decodeForeignObject = {decodeJson: /* #__PURE__ */ Data$dArgonaut$dDecode$dDecoders.decodeForeignObject(Data$dEither.Right)};
const bind3 = /* #__PURE__ */ (() => Control$dMonad$dMaybe$dTrans.bindMaybeT(Effect$dAff.monadAff).bind)();
const show = record => "{ assetName: " + Data$dShow.showStringImpl(record.assetName) + ", policyId: " + Data$dShow.showStringImpl(record.policyId) + " }";
const bindExceptT = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.bindExceptT(Effect$dAff.monadAff);
const withExceptT = f => v => Effect$dAff._map(v2 => {
  if (v2.tag === "Right") { return Data$dEither.$Either("Right", v2._1); }
  if (v2.tag === "Left") { return Data$dEither.$Either("Left", f(v2._1)); }
  $runtime.fail();
})(v);
const map4 = f => Effect$dAff._map(m => {
  if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
  if (m.tag === "Right") { return Data$dEither.$Either("Right", f(m._1)); }
  $runtime.fail();
});
const fromFoldable = /* #__PURE__ */ (() => Data$dArray.fromFoldableImpl(Data$dList$dTypes.foldableList.foldr))();
const foldMFlipped = z => t => f => Data$dFoldable.foldlArray(b => a => Control$dMonad$dExcept$dTrans.bindExceptT(Effect$dAff.monadAff).bind(b)(a$1 => f(a$1)(a)))(Control$dMonad$dExcept$dTrans.applicativeExceptT(Effect$dAff.monadAff).pure(z))(t);
const pure3 = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.applicativeExceptT(Effect$dAff.monadAff).pure)();
const throwError = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.monadThrowExceptT(Effect$dAff.monadAff).throwError)();
const exceptNoteA = a => e => Effect$dAff._map(v2 => {
  if (v2.tag === "Nothing") { return Data$dEither.$Either("Left", e); }
  if (v2.tag === "Just") { return Data$dEither.$Either("Right", v2._1); }
  $runtime.fail();
})(a);
const catchError = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.monadErrorExceptT(Effect$dAff.monadAff).catchError)();
const WalletSubmitTxError = value0 => $SubmittingTxError("WalletSubmitTxError", value0);
const WitnessKeySetupFailed = value0 => $SubmittingTxError("WitnessKeySetupFailed", value0);
const BlockfrostSubmitTxError = value0 => $SubmittingTxError("BlockfrostSubmitTxError", value0);
const UserAborted = /* #__PURE__ */ $SigningTxError("UserAborted");
const SignTxOperationError = value0 => $SigningTxError("SignTxOperationError", value0);
const PayoutUTxOStatusCheckingError = value0 => $PayoutUTxOStatusCheckingError("PayoutUTxOStatusCheckingError", value0);
const PayoutUTxOAlreadySpent = value0 => $PayoutUTxOStatusCheckingError("PayoutUTxOAlreadySpent", value0);
const PayoutUTxO = x => x;
const PayoutTxOutRef = x => x;
const Initializing = value0 => value1 => $State("Initializing", value0, value1);
const FetchingPayoutUTxO = value0 => value1 => $State("FetchingPayoutUTxO", value0, value1);
const FindingRoleTokenUTxO = value0 => value1 => $State("FindingRoleTokenUTxO", value0, value1);
const PayoutUTxOStatusChecking = value0 => value1 => $State("PayoutUTxOStatusChecking", value0, value1);
const AwaitingWithdrawalTrigger = value0 => $State("AwaitingWithdrawalTrigger", value0);
const GrabbingCollateralUTxOs = value0 => value1 => $State("GrabbingCollateralUTxOs", value0, value1);
const BuildingTx = value0 => value1 => $State("BuildingTx", value0, value1);
const SigningTx = value0 => value1 => $State("SigningTx", value0, value1);
const SubmittingTx = value0 => value1 => $State("SubmittingTx", value0, value1);
const TxCreated = value0 => $State("TxCreated", value0);
const DriverFailure = value0 => $State("DriverFailure", value0);
const Trigger = /* #__PURE__ */ $Action("Trigger");
const InitializationError = value0 => $Action("InitializationError", value0);
const InitializationSuccess = value0 => $Action("InitializationSuccess", value0);
const FetchPayoutUTxOError = value0 => $Action("FetchPayoutUTxOError", value0);
const FetchPayoutUTxOSuccess = value0 => $Action("FetchPayoutUTxOSuccess", value0);
const FindRoleTokenUTxOError = value0 => $Action("FindRoleTokenUTxOError", value0);
const FindRoleTokenUTxOSuccess = value0 => $Action("FindRoleTokenUTxOSuccess", value0);
const WithdrawalTrigger = /* #__PURE__ */ $Action("WithdrawalTrigger");
const GrabCollateralUTxOs = value0 => $Action("GrabCollateralUTxOs", value0);
const GrabCollateralUTxOsError = value0 => $Action("GrabCollateralUTxOsError", value0);
const GrabCollateralUTxOsSuccess = value0 => $Action("GrabCollateralUTxOsSuccess", value0);
const PayoutUTxOStatusCheckError = value0 => $Action("PayoutUTxOStatusCheckError", value0);
const PayoutUTxOStatusCheckSuccess = /* #__PURE__ */ $Action("PayoutUTxOStatusCheckSuccess");
const BuildTxError = value0 => $Action("BuildTxError", value0);
const BuildTxSuccess = value0 => $Action("BuildTxSuccess", value0);
const SigningTxError = value0 => $Action("SigningTxError", value0);
const SigningTxSuccess = value0 => $Action("SigningTxSuccess", value0);
const SubmittingTxError = value0 => $Action("SubmittingTxError", value0);
const SubmittingTxSuccess = value0 => $Action("SubmittingTxSuccess", value0);
const DriverFailed = value0 => $Action("DriverFailed", value0);
const eqPayoutUTxO = {
  eq: x => y => x.roleToken.assetName === y.roleToken.assetName && x.roleToken.policyId === y.roleToken.policyId && Marlowe$dRuntime$dWeb$dTypes.eqAnUTxO.eq(x.utxo)(y.utxo)
};
const encodeJsonPayoutUTxO = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons((() => {
    const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Contrib$dCardano.encodeJsonPolicyId)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(policyIdIsSymbol)())(assetNameIsSymbol)();
    return {encodeJson: rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy))};
  })())(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Marlowe$dRuntime$dWeb$dTypes.encodeJsonAnUTxO)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(utxoIsSymbol)())(roleTokenIsSymbol)();
  return {encodeJson: rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy))};
})();
const decodeJsonPayoutUTxO = /* #__PURE__ */ Data$dArgonaut$dDecode$dClass.decodeRecord(/* #__PURE__ */ Data$dArgonaut$dDecode$dClass.gDecodeJsonCons(/* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dDecode$dClass.decodeRecord(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons({
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
  })(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons({
    decodeJsonField: j => {
      if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", Contrib$dCardano.decodeJsonPolicyId.decodeJson(j._1)); }
      return Data$dMaybe.Nothing;
    }
  })(Data$dArgonaut$dDecode$dClass.gDecodeJsonNil)(policyIdIsSymbol)()())(assetNameIsSymbol)()())();
  return {
    decodeJsonField: j => {
      if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0.decodeJson(j._1)); }
      return Data$dMaybe.Nothing;
    }
  };
})())(/* #__PURE__ */ Data$dArgonaut$dDecode$dClass.gDecodeJsonCons({
  decodeJsonField: j => {
    if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", Marlowe$dRuntime$dWeb$dTypes.decodeJsonAnUTxO.decodeJson(j._1)); }
    return Data$dMaybe.Nothing;
  }
})(Data$dArgonaut$dDecode$dClass.gDecodeJsonNil)(utxoIsSymbol)()())(roleTokenIsSymbol)()())();
const selectRoleTokenTxOutRef = cardanoMultiplatformLib => v => wallet => {
  const $0 = v.assetName;
  const $1 = v.policyId;
  return Effect$dAff._bind(Wallet.getUtxos(wallet))(possibleUTxOs => {
    const $2 = (() => {
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
    const utxos = $2.tag === "Right" ? $2._1 : [];
    return Effect$dAff._liftEffect(CardanoMultiplatformLib.runGarbageCollector(cardanoMultiplatformLib)(CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.asksLib(v1 => v1.TransactionUnspentOutput))(_TransactionUnspentOutput => {
      const $3 = $$for(utxos)(v1 => CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.allocate()(CardanoMultiplatformLib$dTransaction.transactionUnspentOutput.from_bytes(_TransactionUnspentOutput)(HexString.decode(v1))))(unspentTxOutObj => CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.allocate()(CardanoMultiplatformLib$dTransaction.transactionUnspentOutputObject.output(unspentTxOutObj)))(txOutObj => CardanoMultiplatformLib.bindReaderT.bind(CardanoMultiplatformLib.allocate()(CardanoMultiplatformLib$dTransaction.transactionOutputObject.amount(txOutObj)))(valueObj => CardanoMultiplatformLib.bindReaderT.bind((() => {
        const $3 = CardanoMultiplatformLib.valueMapFromValueObject(valueObj);
        return x => {
          const $4 = $3(x);
          return () => {
            const a$p = $4();
            return (() => {
              const $5 = Contrib$dCardano.valueFromNestedMaps(a$p);
              if ($5.tag === "Right") { return $5._1; }
              return Contrib$dCardano.monoidValue.mempty;
            })();
          };
        };
      })())(value => {
        if (Data$dBigInt.ordBigInt.compare(Contrib$dCardano.selectAsset(value)(Contrib$dCardano.$AssetId("AssetId", $1, $0)))(Data$dBigInt.semiringBigInt.zero) === "GT") {
          const $3 = Contrib$dCardano$dCML.transactionUnspentOutputToUTxO(unspentTxOutObj);
          return x => {
            const $4 = $3(x);
            return () => {
              const a$p = $4();
              return Data$dMaybe.$Maybe("Just", a$p);
            };
          };
        }
        return CardanoMultiplatformLib.applicativeReaderT.pure(Data$dMaybe.Nothing);
      })))));
      return x => {
        const $4 = $3(x);
        return () => {
          const a$p = $4();
          return Data$dArray.index(Data$dArray.mapMaybe(x$1 => x$1)(a$p))(0);
        };
      };
    })));
  });
};
const runExceptT$p = dictMonad => {
  const $0 = dictMonad.Bind1().Apply0().Functor0();
  return errAction => successAction => em => $0.map(v2 => {
    if (v2.tag === "Left") { return errAction(v2._1); }
    if (v2.tag === "Right") { return successAction(v2._1); }
    $runtime.fail();
  })(em);
};
const runExceptT$p1 = errAction => successAction => em => Effect$dAff._map(v2 => {
  if (v2.tag === "Left") { return errAction(v2._1); }
  if (v2.tag === "Right") { return successAction(v2._1); }
  $runtime.fail();
})(em);
const payoutReferenceInputForNetwork = network => {
  if (network === "mainnet") { return Data$dMaybe.$Maybe("Just", {txId: "672399f7d551d6e06fda70769f830e4e3783495c6250567c6ae97ecc788ad5a4", txIx: 2}); }
  if (network === "preprod") { return Data$dMaybe.$Maybe("Just", {txId: "9a8a6f387a3330b4141e1cb019380b9ac5c72151c0abc52aa4266245d3c555cd", txIx: 2}); }
  if (network === "preview") { return Data$dMaybe.$Maybe("Just", {txId: "69bfdb7cd911e930bfa073a8c45121e7690939d7680196181731d0dd609ecb73", txIx: 2}); }
  return Data$dMaybe.Nothing;
};
const parseRoleTokenInfo = json => {
  const $0 = decodeForeignObject.decodeJson(json);
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
  })()(rootObj => {
    const $1 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dEither.Right)(rootObj)("json_value");
    const $2 = (() => {
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
      if ($1.tag === "Right") { return decodeForeignObject.decodeJson($1._1); }
      $runtime.fail();
    })();
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
    })()(jsonValueObj => {
      const $3 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dArgonaut$dDecode$dDecoders.decodeArray(decodeForeignObject.decodeJson))(jsonValueObj)("fields");
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
      })()(v => {
        if (v.length === 2) {
          const $4 = v[1];
          const $5 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dArgonaut$dCore.caseJsonString(Data$dEither.$Either(
            "Left",
            Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")
          ))(Data$dEither.Right))(v[0])("bytes");
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
          })()(policyIdStr => {
            const $6 = Contrib$dCardano.policyIdFromHexString(policyIdStr);
            if ($6.tag === "Nothing") { return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Invalid policyId")); }
            if ($6.tag === "Just") { return Data$dEither.$Either("Right", $6._1); }
            $runtime.fail();
          });
          return (() => {
            if ($6.tag === "Left") {
              const $7 = $6._1;
              return v$1 => Data$dEither.$Either("Left", $7);
            }
            if ($6.tag === "Right") {
              const $7 = $6._1;
              return f => f($7);
            }
            $runtime.fail();
          })()(policyId => {
            const $7 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dArgonaut$dCore.caseJsonString(Data$dEither.$Either(
              "Left",
              Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")
            ))(Data$dEither.Right))($4)("bytes");
            const $8 = (() => {
              if ($7.tag === "Left") {
                const $8 = $7._1;
                return v$1 => Data$dEither.$Either("Left", $8);
              }
              if ($7.tag === "Right") {
                const $8 = $7._1;
                return f => f($8);
              }
              $runtime.fail();
            })()(assetNameStr => {
              const $8 = HexString.hex(assetNameStr);
              if ($8.tag === "Just") { return Data$dEither.$Either("Right", $8._1); }
              return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Invalid assetName"));
            });
            return (() => {
              if ($8.tag === "Left") {
                const $9 = $8._1;
                return v$1 => Data$dEither.$Either("Left", $9);
              }
              if ($8.tag === "Right") {
                const $9 = $8._1;
                return f => f($9);
              }
              $runtime.fail();
            })()(assetName => Data$dEither.$Either("Right", {policyId, assetName}));
          });
        }
        return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Invalid RoleTokenInfo"));
      });
    });
  });
};
const parsePayoutUTxOs = cardanoSerializationlib => v => v1 => {
  const $0 = v.txIx;
  const $1 = v1.utxos;
  const $2 = parseRoleTokenInfo(v1.datumJson);
  return (() => {
    if ($2.tag === "Left") {
      const $3 = $2._1;
      return v$1 => Data$dEither.$Either("Left", $3);
    }
    if ($2.tag === "Right") {
      const $3 = $2._1;
      return f => f($3);
    }
    $runtime.fail();
  })()(datum => {
    const $3 = Data$dArray.findIndex(v2 => v2.txOutRef.txIx === $0)($1);
    if ($3.tag === "Just") { return Data$dEither.$Either("Right", {roleToken: datum, utxo: $1[$3._1]}); }
    return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "UTxO not found - invalid index"));
  });
};
const parsePayoutDatumHash = v => utxos => {
  const $0 = v.txIx;
  const $1 = Data$dArray.findIndex(v1 => v1.txOutRef.txIx === $0)(utxos);
  if ($1.tag === "Just") {
    const $2 = utxos[$1._1];
    if ($2.txOut.datumHash.tag === "Just") { return Data$dEither.$Either("Right", $2.txOut.datumHash._1); }
    if ($2.txOut.datumHash.tag === "Nothing") { return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "DatumHash not found")); }
    $runtime.fail();
  }
  return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "UTxO not found - invalid index"));
};
const insert$p = dictIsSymbol => () => () => Record.insert(dictIsSymbol)()()(Type$dProxy.Proxy);
const fetchPayoutUTxO = cml => txOutRef => projectId => network => bind3(Control$dError$dUtil.hushT(Effect$dAff.monadAff)(Component$dUseWithdrawal$dBlockfrost.fetchTxUTxOs(cml)(projectId)(network)(txOutRef.txId)))(v => {
  const $0 = v.outputs;
  return bind3(Effect$dAff._pure((() => {
    const $1 = parsePayoutDatumHash(txOutRef)($0);
    if ($1.tag === "Left") { return Data$dMaybe.Nothing; }
    if ($1.tag === "Right") { return Data$dMaybe.$Maybe("Just", $1._1); }
    $runtime.fail();
  })()))(datumHash => bind3(Component$dUseWithdrawal$dBlockfrost.fetchDatum(projectId)(network)(datumHash))(datumJson => Effect$dAff._pure((() => {
    const $1 = parsePayoutUTxOs(cml)(txOutRef)({datumJson, utxos: $0});
    if ($1.tag === "Left") { return Data$dMaybe.Nothing; }
    if ($1.tag === "Right") { return Data$dMaybe.$Maybe("Just", $1._1); }
    $runtime.fail();
  })())));
});
const delete$p = dictIsSymbol => () => () => Record.delete(dictIsSymbol)()()(Type$dProxy.Proxy);
const step = v => v1 => {
  if (v.tag === "Initializing") {
    if (v1.tag === "Trigger") { return $State("Initializing", v._1, Data$dMaybe.Nothing); }
    if (v1.tag === "InitializationError") { return $State("Initializing", v._1, Data$dMaybe.$Maybe("Just", v1._1)); }
    if (v1.tag === "InitializationSuccess") {
      return $State("FetchingPayoutUTxO", {...v._1, cml: v1._1.cml, payoutReferenceInput: v1._1.payoutReferenceInput, walletContext: v1._1.walletContext}, Data$dMaybe.Nothing);
    }
    if (v1.tag === "DriverFailed") { return $State("DriverFailure", v1._1); }
    return v;
  }
  if (v.tag === "FetchingPayoutUTxO") {
    if (v1.tag === "FetchPayoutUTxOError") { return $State("FetchingPayoutUTxO", v._1, Data$dMaybe.$Maybe("Just", v1._1)); }
    if (v1.tag === "FetchPayoutUTxOSuccess") { return $State("FindingRoleTokenUTxO", {...Record$dUnsafe.unsafeDelete("txOutRef")(v._1), payoutUTxO: v1._1}, Data$dMaybe.Nothing); }
    if (v1.tag === "DriverFailed") { return $State("DriverFailure", v1._1); }
    return v;
  }
  if (v.tag === "FindingRoleTokenUTxO") {
    if (v1.tag === "FindRoleTokenUTxOError") { return $State("FindingRoleTokenUTxO", v._1, Data$dMaybe.$Maybe("Just", v1._1)); }
    if (v1.tag === "FindRoleTokenUTxOSuccess") { return $State("PayoutUTxOStatusChecking", {...v._1, roleTokenUTxO: v1._1}, Data$dMaybe.Nothing); }
    if (v1.tag === "DriverFailed") { return $State("DriverFailure", v1._1); }
    return v;
  }
  if (v.tag === "PayoutUTxOStatusChecking") {
    if (v1.tag === "PayoutUTxOStatusCheckError") { return $State("PayoutUTxOStatusChecking", v._1, Data$dMaybe.$Maybe("Just", v1._1)); }
    if (v1.tag === "PayoutUTxOStatusCheckSuccess") { return $State("AwaitingWithdrawalTrigger", v._1); }
    if (v1.tag === "DriverFailed") { return $State("DriverFailure", v1._1); }
    return v;
  }
  if (v.tag === "AwaitingWithdrawalTrigger") {
    if (v1.tag === "WithdrawalTrigger") { return $State("GrabbingCollateralUTxOs", v._1, Data$dMaybe.Nothing); }
    if (v1.tag === "DriverFailed") { return $State("DriverFailure", v1._1); }
    return v;
  }
  if (v.tag === "GrabbingCollateralUTxOs") {
    if (v1.tag === "GrabCollateralUTxOsError") { return $State("GrabbingCollateralUTxOs", v._1, Data$dMaybe.$Maybe("Just", v1._1)); }
    if (v1.tag === "GrabCollateralUTxOsSuccess") { return $State("BuildingTx", {...v._1, collateralUTxOs: v1._1}, Data$dMaybe.Nothing); }
    if (v1.tag === "DriverFailed") { return $State("DriverFailure", v1._1); }
    return v;
  }
  if (v.tag === "BuildingTx") {
    if (v1.tag === "BuildTxError") { return $State("BuildingTx", v._1, Data$dMaybe.$Maybe("Just", v1._1)); }
    if (v1.tag === "BuildTxSuccess") {
      return $State(
        "SigningTx",
        {
          tx: v1._1,
          wallet: v._1.wallet,
          walletContext: v._1.walletContext,
          network: v._1.network,
          payoutReferenceInput: v._1.payoutReferenceInput,
          cml: v._1.cml,
          blockfrostProjectId: v._1.blockfrostProjectId
        },
        Data$dMaybe.Nothing
      );
    }
    if (v1.tag === "DriverFailed") { return $State("DriverFailure", v1._1); }
    return v;
  }
  if (v.tag === "SigningTx") {
    if (v1.tag === "SigningTxError") { return $State("SigningTx", v._1, Data$dMaybe.$Maybe("Just", v1._1)); }
    if (v1.tag === "SigningTxSuccess") { return $State("SubmittingTx", {...v._1, txWitnessSet: v1._1}, Data$dMaybe.Nothing); }
    if (v1.tag === "DriverFailed") { return $State("DriverFailure", v1._1); }
    return v;
  }
  if (v.tag === "SubmittingTx") {
    if (v1.tag === "SubmittingTxError") { return $State("SubmittingTx", v._1, Data$dMaybe.$Maybe("Just", v1._1)); }
    if (v1.tag === "SubmittingTxSuccess") { return $State("TxCreated", v1._1); }
  }
  if (v1.tag === "DriverFailed") { return $State("DriverFailure", v1._1); }
  return v;
};
const actualDriver = v => {
  if (v.tag === "Initializing") {
    if (v._2.tag === "Nothing") {
      const $0 = v._1;
      return Data$dMaybe.$Maybe(
        "Just",
        Effect$dAff._bind(CardanoMultiplatformLib.importLib)(possibleCml => {
          if (possibleCml.tag === "Just") {
            const $1 = possibleCml._1;
            return Effect$dAff._bind(WalletContext.walletContext($1)($0.wallet))(possibleWalletContext => {
              if (possibleWalletContext.tag === "Just") {
                const possiblePayoutReferenceInput = payoutReferenceInputForNetwork($0.network);
                if (possiblePayoutReferenceInput.tag === "Just") {
                  return Effect$dAff._pure($Action(
                    "InitializationSuccess",
                    {walletContext: possibleWalletContext._1, payoutReferenceInput: possiblePayoutReferenceInput._1, cml: $1}
                  ));
                }
                if (possiblePayoutReferenceInput.tag === "Nothing") { return Effect$dAff._pure($Action("InitializationError", "Failed to initialize payout reference input")); }
                $runtime.fail();
              }
              if (possibleWalletContext.tag === "Nothing") { return Effect$dAff._pure($Action("InitializationError", "Failed to initialize wallet context")); }
              $runtime.fail();
            });
          }
          if (possibleCml.tag === "Nothing") { return Effect$dAff._pure($Action("InitializationError", "Failed to import CML")); }
          $runtime.fail();
        })
      );
    }
    return Data$dMaybe.Nothing;
  }
  if (v.tag === "FetchingPayoutUTxO") {
    if (v._2.tag === "Nothing") {
      return Data$dMaybe.$Maybe(
        "Just",
        Effect$dAff._map(v1 => {
          if (v1.tag === "Nothing") { return $Action("FetchPayoutUTxOError", "UTxO not found or parsing failed"); }
          if (v1.tag === "Just") { return $Action("FetchPayoutUTxOSuccess", v1._1); }
          $runtime.fail();
        })(fetchPayoutUTxO(v._1.cml)(v._1.txOutRef)(v._1.blockfrostProjectId)(v._1.network))
      );
    }
    return Data$dMaybe.Nothing;
  }
  if (v.tag === "FindingRoleTokenUTxO") {
    if (v._2.tag === "Nothing") {
      return Data$dMaybe.$Maybe(
        "Just",
        (() => {
          const $0 = v._1.payoutUTxO.roleToken;
          return Effect$dAff._bind(selectRoleTokenTxOutRef(v._1.cml)($0)(v._1.wallet))(v1 => {
            if (v1.tag === "Nothing") { return Effect$dAff._pure($Action("FindRoleTokenUTxOError", "Role token not found" + show($0))); }
            if (v1.tag === "Just") { return Effect$dAff._pure($Action("FindRoleTokenUTxOSuccess", v1._1)); }
            $runtime.fail();
          });
        })()
      );
    }
    return Data$dMaybe.Nothing;
  }
  if (v.tag === "GrabbingCollateralUTxOs") {
    if (v._2.tag === "Nothing") {
      return Data$dMaybe.$Maybe(
        "Just",
        Effect$dAff._bind(Contrib$dCardano$dWallet.getCollateralUTxOs(v._1.cml)((() => {
          const $0 = Data$dBigInt.fromString("2000000");
          if ($0.tag === "Just") { return $0._1; }
          return Partial._crashWith("twoAdaInLovelace");
        })())(v._1.wallet))(x => {
          if (x.tag === "Just") {
            if (x._1.length > 0) { return Effect$dAff._pure($Action("GrabCollateralUTxOsSuccess", x._1)); }
            return Effect$dAff._pure($Action("GrabCollateralUTxOsError", "Collateral UTxOs not found"));
          }
          if (x.tag === "Nothing") { return Effect$dAff._pure($Action("GrabCollateralUTxOsError", "Collateral UTxOs not found")); }
          $runtime.fail();
        })
      );
    }
    return Data$dMaybe.Nothing;
  }
  if (v.tag === "PayoutUTxOStatusChecking") {
    if (v._2.tag === "Nothing") {
      return Data$dMaybe.$Maybe(
        "Just",
        Effect$dAff._map(v2 => {
          if (v2.tag === "Left") { return $Action("PayoutUTxOStatusCheckError", v2._1); }
          if (v2.tag === "Right") { return PayoutUTxOStatusCheckSuccess; }
          $runtime.fail();
        })((() => {
          const $0 = v._1.blockfrostProjectId;
          const $1 = v._1.cml;
          const $2 = v._1.network;
          const $3 = v._1.payoutUTxO.utxo.txOutRef.txId;
          return bindExceptT.bind(withExceptT(x => $PayoutUTxOStatusCheckingError("PayoutUTxOStatusCheckingError", Foreign$dInternal$dStringify.unsafeStringify(x)))(bindExceptT.bind(map4(x => Data$dArray.reverse(fromFoldable(x)))(Component$dUseWithdrawal$dBlockfrost.foldPages(Component$dUseWithdrawal$dBlockfrost.fetchAssetTxs($0)($2)(Contrib$dCardano.$NonAdaAssetId(
            v._1.payoutUTxO.roleToken.policyId,
            v._1.payoutUTxO.roleToken.assetName
          )))(res => x => Component$dUseWithdrawal$dBlockfrost.$FoldResult("Continue", Data$dList$dTypes.$List("Cons", x, res)))(Data$dList$dTypes.Nil)))(txs => foldMFlipped(Data$dMaybe.Nothing)(txs)(v1 => v2 => {
            if (v1.tag === "Just") { return pure3(Data$dMaybe.$Maybe("Just", v1._1)); }
            if (v1.tag === "Nothing") {
              return bindExceptT.bind(Component$dUseWithdrawal$dBlockfrost.fetchTxUTxOs($1)($0)($2)(v2))(v3 => {
                if (Data$dArray.any(v4 => v4.txOutRef.txId === $3)(v3.inputs)) { return pure3(Data$dMaybe.$Maybe("Just", v2)); }
                return pure3(Data$dMaybe.Nothing);
              });
            }
            $runtime.fail();
          }))))(possibleConsumingTxId => {
            if (possibleConsumingTxId.tag === "Just") { return throwError($PayoutUTxOStatusCheckingError("PayoutUTxOAlreadySpent", possibleConsumingTxId._1)); }
            if (possibleConsumingTxId.tag === "Nothing") { return pure3(); }
            $runtime.fail();
          });
        })())
      );
    }
    return Data$dMaybe.Nothing;
  }
  if (v.tag === "BuildingTx") {
    if (v._2.tag === "Nothing") {
      return Data$dMaybe.$Maybe(
        "Just",
        runExceptT$p1(BuildTxError)(BuildTxSuccess)((() => {
          const $0 = v._1.payoutUTxO.utxo;
          const $1 = v._1.cml;
          const $2 = v._1.collateralUTxOs;
          const $3 = v._1.roleTokenUTxO;
          const $4 = v._1.payoutReferenceInput;
          const $5 = v._1.walletContext.changeAddress;
          const roleTokenAssetId = Contrib$dCardano.$NonAdaAssetId(v._1.payoutUTxO.roleToken.policyId, v._1.payoutUTxO.roleToken.assetName);
          return bindExceptT.bind(exceptNoteA(Effect$dAff._liftEffect(CardanoMultiplatformLib.pubKeyHashFromBech32($1)($5)))("bech32 to hash conversion failed"))(pubKeyHash => Effect$dAff._liftEffect(Component$dUseWithdrawal$dTxBuilder.buildTx($1)({
            bech32: $5,
            pubKeyHash
          })(roleTokenAssetId)({collaterals: $2, roleToken: $3, payout: $0})($4)(Data$dMaybe.Nothing)));
        })())
      );
    }
    return Data$dMaybe.Nothing;
  }
  if (v.tag === "SigningTx") {
    if (v._2.tag === "Nothing") {
      return Data$dMaybe.$Maybe(
        "Just",
        runExceptT$p1(x => $Action("SigningTxError", $SigningTxError("SignTxOperationError", x)))(SigningTxSuccess)(Wallet.signTx(v._1.wallet)(v._1.tx)(true))
      );
    }
    return Data$dMaybe.Nothing;
  }
  if (v.tag === "SubmittingTx") {
    if (v._2.tag === "Nothing") {
      const $0 = v._1;
      return Data$dMaybe.$Maybe(
        "Just",
        (() => {
          const $1 = $0.blockfrostProjectId;
          return runExceptT$p1(SubmittingTxError)(SubmittingTxSuccess)(bindExceptT.bind(withExceptT(x => $SubmittingTxError(
            "WitnessKeySetupFailed",
            Foreign$dInternal$dStringify.unsafeStringify(x)
          ))(Effect$dAff._liftEffect(Component$dUseWithdrawal$dTxBuilder.addWitnessSetVKeyToTx($0.cml)($0.txWitnessSet)($0.tx))))(tx1 => {
            const submitThroughBlockfrost = bindExceptT.bind(withExceptT(fetchError => $SubmittingTxError(
              "BlockfrostSubmitTxError",
              {msg: "Fetching error", info: Contrib$dFetch.fetchErrorToJson(fetchError)}
            ))(Component$dUseWithdrawal$dBlockfrost.submitTx($1)($0.network)(tx1)))(resJson => bindExceptT.bind(Effect$dAff._pure((() => {
              const $2 = Marlowe$dRuntime$dWeb$dTypes.decodeJsonTxId.decodeJson(resJson);
              if ($2.tag === "Left") { return Data$dEither.$Either("Left", $SubmittingTxError("BlockfrostSubmitTxError", {msg: "Response parsing failed", info: resJson})); }
              if ($2.tag === "Right") { return Data$dEither.$Either("Right", $2._1); }
              $runtime.fail();
            })()))(txId => pure3(txId)));
            return catchError(bindExceptT.bind(withExceptT(variant => $SubmittingTxError("WalletSubmitTxError", {msg: "Wallet error", info: variant}))(Wallet.submitTx($0.wallet)(tx1)))(txIdCborHex => pure3(txIdCborHex)))(err => bindExceptT.bind(Control$dMonad$dExcept$dTrans.monadEffectExceptT(Effect$dAff.monadEffectAff).liftEffect(Effect$dConsole.error("wallet submission failed:")))(() => bindExceptT.bind(Control$dMonad$dExcept$dTrans.monadEffectExceptT(Effect$dAff.monadEffectAff).liftEffect(Effect$dConsole.error(Foreign$dInternal$dStringify.unsafeStringify(err))))(() => bindExceptT.bind(Control$dMonad$dExcept$dTrans.monadEffectExceptT(Effect$dAff.monadEffectAff).liftEffect(Effect$dConsole.error("trying blockfrost submission...")))(() => submitThroughBlockfrost))));
          }));
        })()
      );
    }
    return Data$dMaybe.Nothing;
  }
  return Data$dMaybe.Nothing;
};
const driver = state => {
  const $0 = actualDriver(state);
  if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", Effect$dAff._catchError($0._1)(error1 => Effect$dAff._pure($Action("DriverFailed", {state, error: error1})))); }
  return Data$dMaybe.Nothing;
};
export {
  $Action,
  $PayoutUTxOStatusCheckingError,
  $SigningTxError,
  $State,
  $SubmittingTxError,
  AwaitingWithdrawalTrigger,
  BlockfrostSubmitTxError,
  BuildTxError,
  BuildTxSuccess,
  BuildingTx,
  DriverFailed,
  DriverFailure,
  FetchPayoutUTxOError,
  FetchPayoutUTxOSuccess,
  FetchingPayoutUTxO,
  FindRoleTokenUTxOError,
  FindRoleTokenUTxOSuccess,
  FindingRoleTokenUTxO,
  GrabCollateralUTxOs,
  GrabCollateralUTxOsError,
  GrabCollateralUTxOsSuccess,
  GrabbingCollateralUTxOs,
  InitializationError,
  InitializationSuccess,
  Initializing,
  PayoutTxOutRef,
  PayoutUTxO,
  PayoutUTxOAlreadySpent,
  PayoutUTxOStatusCheckError,
  PayoutUTxOStatusCheckSuccess,
  PayoutUTxOStatusChecking,
  PayoutUTxOStatusCheckingError,
  SignTxOperationError,
  SigningTx,
  SigningTxError,
  SigningTxSuccess,
  SubmittingTx,
  SubmittingTxError,
  SubmittingTxSuccess,
  Trigger,
  TxCreated,
  UserAborted,
  WalletSubmitTxError,
  WithdrawalTrigger,
  WitnessKeySetupFailed,
  actualDriver,
  assetNameIsSymbol,
  bind3,
  bindExceptT,
  catchError,
  decodeForeignObject,
  decodeJsonPayoutUTxO,
  delete$p,
  driver,
  encodeJsonPayoutUTxO,
  eqPayoutUTxO,
  exceptNoteA,
  fetchPayoutUTxO,
  foldMFlipped,
  $$for as for,
  fromFoldable,
  insert$p,
  map4,
  parsePayoutDatumHash,
  parsePayoutUTxOs,
  parseRoleTokenInfo,
  payoutReferenceInputForNetwork,
  policyIdIsSymbol,
  pure3,
  roleTokenIsSymbol,
  runExceptT$p,
  runExceptT$p1,
  selectRoleTokenTxOutRef,
  show,
  step,
  throwError,
  utxoIsSymbol,
  withExceptT
};
