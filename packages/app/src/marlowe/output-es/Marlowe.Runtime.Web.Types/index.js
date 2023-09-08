import * as $runtime from "../runtime.js";
import * as CardanoMultiplatformLib$dTypes from "../CardanoMultiplatformLib.Types/index.js";
import * as Contrib$dCardano from "../Contrib.Cardano/index.js";
import * as Contrib$dData$dArgonaut from "../Contrib.Data.Argonaut/index.js";
import * as Contrib$dData$dArgonaut$dGeneric$dRecord from "../Contrib.Data.Argonaut.Generic.Record/index.js";
import * as Control$dBind from "../Control.Bind/index.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dArgonaut$dDecode$dClass from "../Data.Argonaut.Decode.Class/index.js";
import * as Data$dArgonaut$dDecode$dDecoders from "../Data.Argonaut.Decode.Decoders/index.js";
import * as Data$dArgonaut$dDecode$dError from "../Data.Argonaut.Decode.Error/index.js";
import * as Data$dArgonaut$dEncode$dClass from "../Data.Argonaut.Encode.Class/index.js";
import * as Data$dArgonaut$dEncode$dEncoders from "../Data.Argonaut.Encode.Encoders/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dBigInt from "../Data.BigInt/index.js";
import * as Data$dBigInt$dArgonaut from "../Data.BigInt.Argonaut/index.js";
import * as Data$dDateTime from "../Data.DateTime/index.js";
import * as Data$dDateTime$dISO from "../Data.DateTime.ISO/index.js";
import * as Data$dDateTime$dInstant from "../Data.DateTime.Instant/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunction from "../Data.Function/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dJSDate from "../Data.JSDate/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Data$dUnfoldable from "../Data.Unfoldable/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
import * as Heterogeneous$dFolding from "../Heterogeneous.Folding/index.js";
import * as Language$dMarlowe$dCore$dV1$dSemantics$dTypes from "../Language.Marlowe.Core.V1.Semantics.Types/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const $MarloweVersion = () => ({tag: "V1"});
const $PostContractsError = (tag, _1) => ({tag, _1});
const $RoleTokenConfig = (tag, _1, _2) => ({tag, _1, _2});
const $RolesConfig = (tag, _1) => ({tag, _1});
const $TxStatus = tag => tag;
const identity = x => x;
const compare1 = /* #__PURE__ */ (() => Data$dMaybe.ordMaybe(Data$dOrd.ordString).compare)();
const eq4 = /* #__PURE__ */ (() => Data$dMap$dInternal.eqMap(Data$dEq.eqString)(Data$dArgonaut$dCore.eqJson).eq)();
const eq5 = /* #__PURE__ */ Data$dEq.eqArrayImpl(Data$dEq.eqStringImpl);
const eq8 = /* #__PURE__ */ (() => Data$dMap$dInternal.eqMap(Data$dEq.eqInt)(Data$dArgonaut$dCore.eqJson).eq)();
const eq10 = x => y => {
  if (x.tag === "Nothing") { return y.tag === "Nothing"; }
  return x.tag === "Just" && y.tag === "Just" && Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqContract.eq(x._1)(y._1);
};
const eq12 = x => y => {
  if (x.tag === "Nothing") { return y.tag === "Nothing"; }
  return x.tag === "Just" && y.tag === "Just" && Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqState.eq(x._1)(y._1);
};
const eq13 = /* #__PURE__ */ (() => Data$dEq.eqArrayImpl(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqInput.eq))();
const srcIsSymbol = {reflectSymbol: () => "src"};
const nameIsSymbol = {reflectSymbol: () => "name"};
const mediaTypeIsSymbol = {reflectSymbol: () => "mediaType"};
const imageIsSymbol = {reflectSymbol: () => "image"};
const filesIsSymbol = {reflectSymbol: () => "files"};
const descriptionIsSymbol = {reflectSymbol: () => "description"};
const encodeJson1 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
    reflectSymbol: () => "type"
  })())(descriptionIsSymbol)())({reflectSymbol: () => "cborHex"})();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const fromFoldable = /* #__PURE__ */ Foreign$dObject.fromFoldable(Data$dFoldable.foldableArray);
const metadataIsSymbol = {reflectSymbol: () => "metadata"};
const addressIsSymbol = {reflectSymbol: () => "address"};
const encodeJson4 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(metadataIsSymbol)())(addressIsSymbol)();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const valueIsSymbol = {reflectSymbol: () => "value"};
const datumHashIsSymbol = {reflectSymbol: () => "datumHash"};
const versionIsSymbol = {reflectSymbol: () => "version"};
const tagsIsSymbol = {reflectSymbol: () => "tags"};
const invalidHereafterIsSymbol = {reflectSymbol: () => "invalidHereafter"};
const invalidBeforeIsSymbol = {reflectSymbol: () => "invalidBefore"};
const inputsIsSymbol = {reflectSymbol: () => "inputs"};
const contractIsSymbol = {reflectSymbol: () => "contract"};
const encodeJson5 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.encodeJsonContract)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(contractIsSymbol)();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const minUTxODepositIsSymbol = {reflectSymbol: () => "minUTxODeposit"};
const txOutRefIsSymbol = {reflectSymbol: () => "txOutRef"};
const txOutIsSymbol = {reflectSymbol: () => "txOut"};
const decodeFieldId = {
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
};
const decodeJson1 = /* #__PURE__ */ Data$dArgonaut$dDecode$dDecoders.decodeForeignObject(Data$dEither.Right);
const fromFoldableWithIndex = /* #__PURE__ */ Foreign$dObject.fold(b => a => v => Data$dMap$dInternal.insert(Data$dOrd.ordString)(a)(v)(b))(Data$dMap$dInternal.Leaf);
const gDecodeJsonCons3 = /* #__PURE__ */ Data$dArgonaut$dDecode$dClass.gDecodeJsonCons({
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
const roleIsSymbol = {reflectSymbol: () => "role"};
const gDecodeJsonCons4 = /* #__PURE__ */ Data$dArgonaut$dDecode$dClass.gDecodeJsonCons(decodeFieldId)(Data$dArgonaut$dDecode$dClass.gDecodeJsonNil)(roleIsSymbol)()();
const contractIdIsSymbol = {reflectSymbol: () => "contractId"};
const decodeMap = /* #__PURE__ */ Data$dArgonaut$dDecode$dClass.decodeMap(Data$dOrd.ordString)(Data$dArgonaut$dDecode$dClass.decodeJsonString);
const decodeFieldId1 = {
  decodeJsonField: j => {
    if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.decodeJsonContract.decodeJson(j._1)); }
    return Data$dMaybe.Nothing;
  }
};
const $$for = /* #__PURE__ */ (() => {
  const traverse2 = Data$dTraversable.traversableArray.traverse(Data$dEither.applicativeEither);
  return x => f => traverse2(f)(x);
})();
const toUnfoldable1 = /* #__PURE__ */ (() => {
  const $0 = Foreign$dObject.toArrayWithKey(Data$dTuple.Tuple);
  return x => Data$dArray.toUnfoldable(Data$dUnfoldable.unfoldableArray)($0(x));
})();
const fromFoldable1 = /* #__PURE__ */ Data$dMap$dInternal.fromFoldable(Data$dOrd.ordInt)(Data$dFoldable.foldableArray);
const utxoIsSymbol = {reflectSymbol: () => "utxo"};
const transactionIdIsSymbol = {reflectSymbol: () => "transactionId"};
const statusIsSymbol = {reflectSymbol: () => "status"};
const blockIsSymbol = {reflectSymbol: () => "block"};
const encodeJson6 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dBigInt$dArgonaut.encodeJsonBitInt)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(roleIsSymbol)())(minUTxODepositIsSymbol)())(contractIdIsSymbol)();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const decodeFieldMaybe = /* #__PURE__ */ Data$dArgonaut$dDecode$dClass.decodeFieldMaybe(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.decodeJsonContract);
const decodeFieldMaybe1 = /* #__PURE__ */ Data$dArgonaut$dDecode$dClass.decodeFieldMaybe(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.decodeState);
const txIsSymbol = {reflectSymbol: () => "tx"};
const Unsigned = /* #__PURE__ */ $TxStatus("Unsigned");
const Submitted = /* #__PURE__ */ $TxStatus("Submitted");
const Confirmed = /* #__PURE__ */ $TxStatus("Confirmed");
const TxId = x => x;
const TxOutRef = x => x;
const TxBody = x => x;
const TokenMetadataFile = x => x;
const TokenMetadata = x => x;
const TextEnvelope = x => x;
const Tags = x => x;
const SlotNumber = x => x;
const ServerURL = x => x;
const RoleTokenSimple = value0 => $RoleTokenConfig("RoleTokenSimple", value0);
const RoleTokenAdvanced = value0 => value1 => $RoleTokenConfig("RoleTokenAdvanced", value0, value1);
const ResourceLink = x => x;
const ResourceEndpoint = x => x;
const PutWithdrawalRequest = x => x;
const PutTransactionRequest = x => x;
const PutContractRequest = x => x;
const PostWithdrawalsResponseContent = x => x;
const PostWithdrawalsRequest = x => x;
const PostTransactionsResponse = x => x;
const PostMerkleizationResponse = x => x;
const PostMerkleizationRequest = x => x;
const PostContractsResponseContent = x => x;
const MintingUtxoNotFound = /* #__PURE__ */ $PostContractsError("MintingUtxoNotFound");
const RoleTokenNotFound = /* #__PURE__ */ $PostContractsError("RoleTokenNotFound");
const ToCardanoError = /* #__PURE__ */ $PostContractsError("ToCardanoError");
const MissingMarloweInput = /* #__PURE__ */ $PostContractsError("MissingMarloweInput");
const PayoutInputNotFound = /* #__PURE__ */ $PostContractsError("PayoutInputNotFound");
const CalculateMinUtxoFailed = /* #__PURE__ */ $PostContractsError("CalculateMinUtxoFailed");
const CoinSelectionFailed = /* #__PURE__ */ $PostContractsError("CoinSelectionFailed");
const BalancingError = /* #__PURE__ */ $PostContractsError("BalancingError");
const MarloweContractNotFound = /* #__PURE__ */ $PostContractsError("MarloweContractNotFound");
const MarloweContractVersionMismatch = /* #__PURE__ */ $PostContractsError("MarloweContractVersionMismatch");
const LoadMarloweContextToCardanoError = /* #__PURE__ */ $PostContractsError("LoadMarloweContextToCardanoError");
const MarloweScriptNotPublished = /* #__PURE__ */ $PostContractsError("MarloweScriptNotPublished");
const PayoutScriptNotPublished = /* #__PURE__ */ $PostContractsError("PayoutScriptNotPublished");
const ExtractCreationError = /* #__PURE__ */ $PostContractsError("ExtractCreationError");
const ExtractMarloweTransactionError = /* #__PURE__ */ $PostContractsError("ExtractMarloweTransactionError");
const MintingUtxoSelectionFailed = /* #__PURE__ */ $PostContractsError("MintingUtxoSelectionFailed");
const AddressDecodingFailed = /* #__PURE__ */ $PostContractsError("AddressDecodingFailed");
const MintingScriptDecodingFailed = /* #__PURE__ */ $PostContractsError("MintingScriptDecodingFailed");
const CreateToCardanoError = /* #__PURE__ */ $PostContractsError("CreateToCardanoError");
const InternalError = /* #__PURE__ */ $PostContractsError("InternalError");
const UnknownError = value0 => $PostContractsError("UnknownError", value0);
const PolicyId = x => x;
const UsePolicy = value0 => $RolesConfig("UsePolicy", value0);
const Mint = value0 => $RolesConfig("Mint", value0);
const PayoutRef = x => x;
const Payout = x => x;
const Metadata = x => x;
const PostContractsRequest = x => x;
const PostTransactionsRequest = x => x;
const V1 = /* #__PURE__ */ $MarloweVersion();
const IndexEndpoint = x => x;
const DatumHash = x => x;
const TxOut = x => x;
const BlockNumber = x => x;
const BlockHeader = x => x;
const ContractHeader = x => x;
const ContractState = x => x;
const TxHeader = x => x;
const Tx = x => x;
const TransactionEndpoint = x => x;
const TransactionsEndpoint = x => x;
const ContractEndpoint = x => x;
const ContractsEndpoint = x => x;
const Withdrawal = x => x;
const WithdrawalHeader = x => x;
const WithdrawalState = x => x;
const WithdrawalEndpoint = x => x;
const WithdrawalsEndpoint = x => x;
const Runtime = x => x;
const ApiError = x => x;
const AnUTxO = x => x;
const toResourceLinkResourceLin = {toResourceLink: identity};
const showTxStatus = {
  show: v => {
    if (v === "Unsigned") { return "Unsigned"; }
    if (v === "Submitted") { return "Submitted"; }
    if (v === "Confirmed") { return "Confirmed"; }
    $runtime.fail();
  }
};
const showPostContractsError = {
  show: v => {
    if (v.tag === "MintingUtxoNotFound") { return "MintingUtxoNotFound"; }
    if (v.tag === "RoleTokenNotFound") { return "RoleTokenNotFound"; }
    if (v.tag === "ToCardanoError") { return "ToCardanoError"; }
    if (v.tag === "MissingMarloweInput") { return "MissingMarloweInput"; }
    if (v.tag === "PayoutInputNotFound") { return "PayoutInputNotFound"; }
    if (v.tag === "CalculateMinUtxoFailed") { return "CalculateMinUtxoFailed"; }
    if (v.tag === "CoinSelectionFailed") { return "CoinSelectionFailed"; }
    if (v.tag === "BalancingError") { return "BalancingError"; }
    if (v.tag === "MarloweContractNotFound") { return "MarloweContractNotFound"; }
    if (v.tag === "MarloweContractVersionMismatch") { return "MarloweContractVersionMismatch"; }
    if (v.tag === "LoadMarloweContextToCardanoError") { return "LoadMarloweContextToCardanoError"; }
    if (v.tag === "MarloweScriptNotPublished") { return "MarloweScriptNotPublished"; }
    if (v.tag === "PayoutScriptNotPublished") { return "PayoutScriptNotPublished"; }
    if (v.tag === "ExtractCreationError") { return "ExtractCreationError"; }
    if (v.tag === "ExtractMarloweTransactionError") { return "ExtractMarloweTransactionError"; }
    if (v.tag === "MintingUtxoSelectionFailed") { return "MintingUtxoSelectionFailed"; }
    if (v.tag === "AddressDecodingFailed") { return "AddressDecodingFailed"; }
    if (v.tag === "MintingScriptDecodingFailed") { return "MintingScriptDecodingFailed"; }
    if (v.tag === "CreateToCardanoError") { return "CreateToCardanoError"; }
    if (v.tag === "InternalError") { return "InternalError"; }
    if (v.tag === "UnknownError") { return "(UnknownError " + v._1 + ")"; }
    $runtime.fail();
  }
};
const showApiError = dictShow => ({show: v => "ApiError { message: " + Data$dShow.showStringImpl(v.message) + ", error: " + dictShow.show(v.error) + " }"});
const semigroupTags = {append: v => v1 => Data$dMap$dInternal.unionWith(Data$dOrd.ordString)(Data$dFunction.const)(v)(v1)};
const semigroupMetadata = {append: v => v1 => Data$dMap$dInternal.unionWith(Data$dOrd.ordInt)(Data$dFunction.const)(v)(v1)};
const queryParamsTransactionsEn = {toQueryParams: v => v1 => []};
const queryParamsTransactionEnd = {toQueryParams: v => v1 => []};
const queryParamsContractsEndpo = {toQueryParams: v => v1 => Control$dBind.arrayBind(v1.tags)(tag => [Data$dTuple.$Tuple("tag", Data$dMaybe.$Maybe("Just", tag))])};
const queryParamsContractEndpoi = {toQueryParams: v => v1 => []};
const newtypeWithdrawalsEndpoin = {Coercible0: () => {}};
const newtypeWithdrawal_ = {Coercible0: () => {}};
const newtypeWithdrawalState_ = {Coercible0: () => {}};
const newtypeWithdrawalHeader_ = {Coercible0: () => {}};
const newtypeWithdrawalEndpoint = {Coercible0: () => {}};
const newtypeTx_ = {Coercible0: () => {}};
const newtypeTxOutRef_ = {Coercible0: () => {}};
const newtypeTxId_ = {Coercible0: () => {}};
const newtypeTxHeader_ = {Coercible0: () => {}};
const newtypeTxBody_ = {Coercible0: () => {}};
const newtypeTransactionsEndpoi = {Coercible0: () => {}};
const newtypeTransactionEndpoin = {Coercible0: () => {}};
const newtypeTokenMetadata_ = {Coercible0: () => {}};
const newtypeTokenMetadataFile_ = {Coercible0: () => {}};
const newtypeTextEnvelope_ = {Coercible0: () => {}};
const newtypeTags_ = {Coercible0: () => {}};
const newtypeSlotNumber_ = {Coercible0: () => {}};
const newtypeResourceLink_ = {Coercible0: () => {}};
const newtypeResourceEndpoint_ = {Coercible0: () => {}};
const newtypePostWithdrawalsRes = {Coercible0: () => {}};
const newtypePostWithdrawalsReq = {Coercible0: () => {}};
const newtypePostTransactionsRe = {Coercible0: () => {}};
const newtypePostMerkleizationR = {Coercible0: () => {}};
const newtypePostContractsRespo = {Coercible0: () => {}};
const newtypePolicyId_ = {Coercible0: () => {}};
const newtypePayout_ = {Coercible0: () => {}};
const newtypePayoutRef_ = {Coercible0: () => {}};
const newtypeMetadata_ = {Coercible0: () => {}};
const newtypeIndexEndpoint_ = {Coercible0: () => {}};
const newtypeContractsEndpoint_ = {Coercible0: () => {}};
const newtypeContractState_ = {Coercible0: () => {}};
const newtypeContractHeader_ = {Coercible0: () => {}};
const newtypeContractEndpoint_ = {Coercible0: () => {}};
const newtypeBlockNumber_ = {Coercible0: () => {}};
const newtypeBlockHeader_ = {Coercible0: () => {}};
const newtypeApiError_ = {Coercible0: () => {}};
const monoidTags = {mempty: Data$dMap$dInternal.Leaf, Semigroup0: () => semigroupTags};
const monoidMetadata = {mempty: Data$dMap$dInternal.Leaf, Semigroup0: () => semigroupMetadata};
const hasTextEnvelopeTransactio = {textEnvelopeType: v => "Tx BabbageEra"};
const hasTextEnvelopeTransactio1 = {textEnvelopeType: v => "ShelleyTxWitness BabbageEra"};
const genericWithdrawal_ = {to: x => x, from: x => x};
const genericWithdrawalState_ = {to: x => x, from: x => x};
const genericWithdrawalHeader_ = {to: x => x, from: x => x};
const genericTx_ = {to: x => x, from: x => x};
const genericTxOutRef_ = {to: x => x, from: x => x};
const genericTxId_ = {to: x => x, from: x => x};
const genericTxHeader_ = {to: x => x, from: x => x};
const genericTxBody_ = {to: x => x, from: x => x};
const genericTokenMetadata_ = {to: x => x, from: x => x};
const genericTokenMetadataFile_ = {to: x => x, from: x => x};
const genericTextEnvelope_ = {to: x => x, from: x => x};
const genericTags_ = {to: x => x, from: x => x};
const genericSlotNumber_ = {to: x => x, from: x => x};
const genericResourceLink_ = {to: x => x, from: x => x};
const genericPolicyId_ = {to: x => x, from: x => x};
const showPolicyId = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor({genericShowArgs: v => [Data$dShow.showStringImpl(v)]})({reflectSymbol: () => "PolicyId"});
    return x => $0["genericShow'"](x);
  })()
};
const genericPayout_ = {to: x => x, from: x => x};
const genericPayoutRef_ = {to: x => x, from: x => x};
const genericMetadata_ = {to: x => x, from: x => x};
const genericMarloweVersion_ = {to: x => V1, from: x => Data$dGeneric$dRep.NoArguments};
const genericContractState_ = {to: x => x, from: x => x};
const genericContractHeader_ = {to: x => x, from: x => x};
const genericBlockNumber_ = {to: x => x, from: x => x};
const genericBlockHeader_ = {to: x => x, from: x => x};
const genericApiError_ = {to: x => x, from: x => x};
const eqTxStatus = {
  eq: x => y => {
    if (x === "Unsigned") { return y === "Unsigned"; }
    if (x === "Submitted") { return y === "Submitted"; }
    return x === "Confirmed" && y === "Confirmed";
  }
};
const ordTxStatus = {
  compare: x => y => {
    if (x === "Unsigned") {
      if (y === "Unsigned") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "Unsigned") { return Data$dOrdering.GT; }
    if (x === "Submitted") {
      if (y === "Submitted") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "Submitted") { return Data$dOrdering.GT; }
    if (x === "Confirmed" && y === "Confirmed") { return Data$dOrdering.EQ; }
    $runtime.fail();
  },
  Eq0: () => eqTxStatus
};
const eqTxId = {eq: x => y => x === y};
const eqTxOutRef = {eq: x => y => x.txId === y.txId && x.txIx === y.txIx};
const eq18 = /* #__PURE__ */ (() => Data$dEq.eqArrayImpl(eqTxOutRef.eq))();
const ordTxId = {compare: x => y => Data$dOrd.ordString.compare(x)(y), Eq0: () => eqTxId};
const compare4 = /* #__PURE__ */ (() => Data$dTuple.ordTuple(ordTxId)(Data$dOrd.ordInt).compare)();
const ordTxOutRef = {compare: v => v1 => compare4(Data$dTuple.$Tuple(v.txId, v.txIx))(Data$dTuple.$Tuple(v1.txId, v1.txIx)), Eq0: () => eqTxOutRef};
const compare7 = /* #__PURE__ */ (() => Data$dMaybe.ordMaybe(ordTxOutRef).compare)();
const eqTxBody = {eq: x => y => x === y};
const eqTokenMetadataFile = {eq: x => y => x.mediaType === y.mediaType && x.name === y.name && x.src === y.src};
const eq21 = /* #__PURE__ */ (() => {
  const $0 = Data$dEq.eqArrayImpl(eqTokenMetadataFile.eq);
  return x => y => {
    if (x.tag === "Nothing") { return y.tag === "Nothing"; }
    return x.tag === "Just" && y.tag === "Just" && $0(x._1)(y._1);
  };
})();
const ordTokenMetadataFile = {
  compare: x => y => {
    const v = Data$dOrd.ordString.compare(x.mediaType)(y.mediaType);
    if (v === "LT") { return Data$dOrdering.LT; }
    if (v === "GT") { return Data$dOrdering.GT; }
    const v1 = Data$dOrd.ordString.compare(x.name)(y.name);
    if (v1 === "LT") { return Data$dOrdering.LT; }
    if (v1 === "GT") { return Data$dOrdering.GT; }
    return Data$dOrd.ordString.compare(x.src)(y.src);
  },
  Eq0: () => eqTokenMetadataFile
};
const compare8 = /* #__PURE__ */ (() => Data$dMaybe.ordMaybe(Data$dOrd.ordArray(ordTokenMetadataFile)).compare)();
const eqTokenMetadata = {
  eq: x => y => (x.description.tag === "Nothing"
    ? y.description.tag === "Nothing"
    : x.description.tag === "Just" && y.description.tag === "Just" && x.description._1 === y.description._1) && eq21(x.files)(y.files) && x.image === y.image && (x.mediaType.tag === "Nothing"
    ? y.mediaType.tag === "Nothing"
    : x.mediaType.tag === "Just" && y.mediaType.tag === "Just" && x.mediaType._1 === y.mediaType._1) && x.name === y.name
};
const ordTokenMetadata = {
  compare: x => y => {
    const v = compare1(x.description)(y.description);
    if (v === "LT") { return Data$dOrdering.LT; }
    if (v === "GT") { return Data$dOrdering.GT; }
    const v1 = compare8(x.files)(y.files);
    if (v1 === "LT") { return Data$dOrdering.LT; }
    if (v1 === "GT") { return Data$dOrdering.GT; }
    const v2 = Data$dOrd.ordString.compare(x.image)(y.image);
    if (v2 === "LT") { return Data$dOrdering.LT; }
    if (v2 === "GT") { return Data$dOrdering.GT; }
    const v3 = compare1(x.mediaType)(y.mediaType);
    if (v3 === "LT") { return Data$dOrdering.LT; }
    if (v3 === "GT") { return Data$dOrdering.GT; }
    return Data$dOrd.ordString.compare(x.name)(y.name);
  },
  Eq0: () => eqTokenMetadata
};
const eqTextEnvelope = {eq: x => y => x.cborHex === y.cborHex && x.description === y.description && x.type_ === y.type_};
const eqTags = {eq: x => y => eq4(x)(y)};
const eqSlotNumber = {eq: x => y => x === y};
const ordSlotNumber = {compare: x => y => Data$dOrd.ordInt.compare(x)(y), Eq0: () => eqSlotNumber};
const eqResourceLink = {eq: x => y => x === y};
const ordResourceLink = {compare: x => y => Data$dOrd.ordString.compare(x)(y), Eq0: () => eqResourceLink};
const eqResourceEndpoint = {eq: x => y => x === y};
const eqTransactionEndpoint = {eq: x => y => x === y};
const eqWithdrawalEndpoint = {eq: x => y => x === y};
const eqPostWithdrawalsRequest = {
  eq: x => y => eq5(x.addresses)(y.addresses) && x.changeAddress === y.changeAddress && eq18(x.collateralUTxOs)(y.collateralUTxOs) && x.contractId.txId === y.contractId.txId && x.contractId.txIx === y.contractId.txIx && Data$dBigInt.biEquals(x.minUTxODeposit)(y.minUTxODeposit) && x.role === y.role
};
const eqPolicyId = {eq: x => y => x === y};
const ordPolicyId = {compare: x => y => Data$dOrd.ordString.compare(x)(y), Eq0: () => eqPolicyId};
const eqPayoutRef = {
  eq: x => y => x.contractId.txId === y.contractId.txId && x.contractId.txIx === y.contractId.txIx && x.payout.txId === y.payout.txId && x.payout.txIx === y.payout.txIx && x.role === y.role && x.roleTokenMintingPolicyId === y.roleTokenMintingPolicyId
};
const eqPayout = {eq: x => y => x.payoutId.txId === y.payoutId.txId && x.payoutId.txIx === y.payoutId.txIx && x.role === y.role};
const eq29 = /* #__PURE__ */ (() => Data$dEq.eqArrayImpl(eqPayout.eq))();
const ordPayout = {
  compare: x => y => {
    const v = compare4(Data$dTuple.$Tuple(x.payoutId.txId, x.payoutId.txIx))(Data$dTuple.$Tuple(y.payoutId.txId, y.payoutId.txIx));
    if (v === "LT") { return Data$dOrdering.LT; }
    if (v === "GT") { return Data$dOrdering.GT; }
    return Data$dOrd.ordString.compare(x.role)(y.role);
  },
  Eq0: () => eqPayout
};
const eqMetadata = {eq: x => y => eq8(x)(y)};
const eqMarloweVersion = {eq: x => y => true};
const ordMarloweVersion = {compare: x => y => Data$dOrdering.EQ, Eq0: () => eqMarloweVersion};
const eqIndexEndpoint = {eq: x => y => x === y};
const eqTransactionsEndpoint = {eq: x => y => x === y};
const eqWithdrawalsEndpoint = {eq: x => y => x === y};
const eqDatumHash = {eq: x => y => x === y};
const eqTxOut = {
  eq: x => y => x.address === y.address && (x.datumHash.tag === "Nothing"
    ? y.datumHash.tag === "Nothing"
    : x.datumHash.tag === "Just" && y.datumHash.tag === "Just" && x.datumHash._1 === y.datumHash._1) && Contrib$dCardano.eqValue.eq(x.value)(y.value)
};
const eqContractsEndpoint = {eq: x => y => x === y};
const eqContractEndpoint = {eq: x => y => x === y};
const eqBlockNumber = {eq: x => y => x === y};
const ordBlockNumber = {compare: x => y => Data$dOrd.ordInt.compare(x)(y), Eq0: () => eqBlockNumber};
const eqBlockHeader = {eq: x => y => x.blockHeaderHash === y.blockHeaderHash && x.blockNo === y.blockNo && x.slotNo === y.slotNo};
const eqContractHeader = {
  eq: x => y => (x.block.tag === "Nothing"
    ? y.block.tag === "Nothing"
    : x.block.tag === "Just" && y.block.tag === "Just" && x.block._1.blockHeaderHash === y.block._1.blockHeaderHash && x.block._1.blockNo === y.block._1.blockNo && x.block._1.slotNo === y.block._1.slotNo) && x.contractId.txId === y.contractId.txId && x.contractId.txIx === y.contractId.txIx && eq8(x.metadata)(y.metadata) && x.roleTokenMintingPolicyId === y.roleTokenMintingPolicyId && (() => {
    if (x.status === "Unsigned") { return y.status === "Unsigned"; }
    if (x.status === "Submitted") { return y.status === "Submitted"; }
    return x.status === "Confirmed" && y.status === "Confirmed";
  })() && eq4(x.tags)(y.tags)
};
const eqContractState = {
  eq: x => y => (x.block.tag === "Nothing"
    ? y.block.tag === "Nothing"
    : x.block.tag === "Just" && y.block.tag === "Just" && x.block._1.blockHeaderHash === y.block._1.blockHeaderHash && x.block._1.blockNo === y.block._1.blockNo && x.block._1.slotNo === y.block._1.slotNo) && x.contractId.txId === y.contractId.txId && x.contractId.txIx === y.contractId.txIx && eq10(x.currentContract)(y.currentContract) && Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqContract.eq(x.initialContract)(y.initialContract) && eq8(x.metadata)(y.metadata) && x.roleTokenMintingPolicyId === y.roleTokenMintingPolicyId && eq12(x.state)(y.state) && (() => {
    if (x.status === "Unsigned") { return y.status === "Unsigned"; }
    if (x.status === "Submitted") { return y.status === "Submitted"; }
    return x.status === "Confirmed" && y.status === "Confirmed";
  })() && eq4(x.tags)(y.tags) && (x.txBody.tag === "Nothing"
    ? y.txBody.tag === "Nothing"
    : x.txBody.tag === "Just" && y.txBody.tag === "Just" && x.txBody._1.cborHex === y.txBody._1.cborHex && x.txBody._1.description === y.txBody._1.description && x.txBody._1.type_ === y.txBody._1.type_) && eq29(x.unclaimedPayouts)(y.unclaimedPayouts) && (x.utxo.tag === "Nothing"
    ? y.utxo.tag === "Nothing"
    : x.utxo.tag === "Just" && y.utxo.tag === "Just" && x.utxo._1.txId === y.utxo._1.txId && x.utxo._1.txIx === y.utxo._1.txIx)
};
const eqTx = {
  eq: x => y => (x.block.tag === "Nothing"
    ? y.block.tag === "Nothing"
    : x.block.tag === "Just" && y.block.tag === "Just" && x.block._1.blockHeaderHash === y.block._1.blockHeaderHash && x.block._1.blockNo === y.block._1.blockNo && x.block._1.slotNo === y.block._1.slotNo) && (x.consumingTx.tag === "Nothing"
    ? y.consumingTx.tag === "Nothing"
    : x.consumingTx.tag === "Just" && y.consumingTx.tag === "Just" && x.consumingTx._1 === y.consumingTx._1) && x.contractId.txId === y.contractId.txId && x.contractId.txIx === y.contractId.txIx && x.inputUtxo.txId === y.inputUtxo.txId && x.inputUtxo.txIx === y.inputUtxo.txIx && eq13(x.inputs)(y.inputs) && Data$dDateTime.eqDateTime.eq(x.invalidBefore)(y.invalidBefore) && Data$dDateTime.eqDateTime.eq(x.invalidHereafter)(y.invalidHereafter) && eq10(x.outputContract)(y.outputContract) && eq12(x.outputState)(y.outputState) && (x.outputUtxo.tag === "Nothing"
    ? y.outputUtxo.tag === "Nothing"
    : x.outputUtxo.tag === "Just" && y.outputUtxo.tag === "Just" && x.outputUtxo._1.txId === y.outputUtxo._1.txId && x.outputUtxo._1.txIx === y.outputUtxo._1.txIx) && (() => {
    if (x.status === "Unsigned") { return y.status === "Unsigned"; }
    if (x.status === "Submitted") { return y.status === "Submitted"; }
    return x.status === "Confirmed" && y.status === "Confirmed";
  })() && x.transactionId === y.transactionId && (x.txBody.tag === "Nothing"
    ? y.txBody.tag === "Nothing"
    : x.txBody.tag === "Just" && y.txBody.tag === "Just" && x.txBody._1.cborHex === y.txBody._1.cborHex && x.txBody._1.description === y.txBody._1.description && x.txBody._1.type_ === y.txBody._1.type_)
};
const eqTxHeader = {
  eq: x => y => (x.block.tag === "Nothing"
    ? y.block.tag === "Nothing"
    : x.block.tag === "Just" && y.block.tag === "Just" && x.block._1.blockHeaderHash === y.block._1.blockHeaderHash && x.block._1.blockNo === y.block._1.blockNo && x.block._1.slotNo === y.block._1.slotNo) && x.contractId.txId === y.contractId.txId && x.contractId.txIx === y.contractId.txIx && (() => {
    if (x.status === "Unsigned") { return y.status === "Unsigned"; }
    if (x.status === "Submitted") { return y.status === "Submitted"; }
    return x.status === "Confirmed" && y.status === "Confirmed";
  })() && x.transactionId === y.transactionId && (x.utxo.tag === "Nothing"
    ? y.utxo.tag === "Nothing"
    : x.utxo.tag === "Just" && y.utxo.tag === "Just" && x.utxo._1.txId === y.utxo._1.txId && x.utxo._1.txIx === y.utxo._1.txIx)
};
const eqWithdrawal = {
  eq: x => y => (x.block.tag === "Nothing"
    ? y.block.tag === "Nothing"
    : x.block.tag === "Just" && y.block.tag === "Just" && x.block._1.blockHeaderHash === y.block._1.blockHeaderHash && x.block._1.blockNo === y.block._1.blockNo && x.block._1.slotNo === y.block._1.slotNo) && Data$dMap$dInternal.eqMap(eqPayoutRef)(Data$dEq.eqUnit).eq(x.payouts)(y.payouts) && (() => {
    if (x.status === "Unsigned") { return y.status === "Unsigned"; }
    if (x.status === "Submitted") { return y.status === "Submitted"; }
    return x.status === "Confirmed" && y.status === "Confirmed";
  })() && x.withdrawalId === y.withdrawalId
};
const eqWithdrawalHeader = {
  eq: x => y => (x.block.tag === "Nothing"
    ? y.block.tag === "Nothing"
    : x.block.tag === "Just" && y.block.tag === "Just" && x.block._1.blockHeaderHash === y.block._1.blockHeaderHash && x.block._1.blockNo === y.block._1.blockNo && x.block._1.slotNo === y.block._1.slotNo) && (() => {
    if (x.status === "Unsigned") { return y.status === "Unsigned"; }
    if (x.status === "Submitted") { return y.status === "Submitted"; }
    return x.status === "Confirmed" && y.status === "Confirmed";
  })() && x.withdrawalId === y.withdrawalId
};
const eqWithdrawalState = {
  eq: x => y => (x.block.tag === "Nothing"
    ? y.block.tag === "Nothing"
    : x.block.tag === "Just" && y.block.tag === "Just" && x.block._1.blockHeaderHash === y.block._1.blockHeaderHash && x.block._1.blockNo === y.block._1.blockNo && x.block._1.slotNo === y.block._1.slotNo) && (() => {
    if (x.status === "Unsigned") { return y.status === "Unsigned"; }
    if (x.status === "Submitted") { return y.status === "Submitted"; }
    return x.status === "Confirmed" && y.status === "Confirmed";
  })() && (x.txBody.tag === "Nothing"
    ? y.txBody.tag === "Nothing"
    : x.txBody.tag === "Just" && y.txBody.tag === "Just" && x.txBody._1.cborHex === y.txBody._1.cborHex && x.txBody._1.description === y.txBody._1.description && x.txBody._1.type_ === y.txBody._1.type_) && x.withdrawalId === y.withdrawalId && x.withdrawalId === y.withdrawalId
};
const ordBlockHeader = {
  compare: x => y => {
    const v = Data$dOrd.ordString.compare(x.blockHeaderHash)(y.blockHeaderHash);
    if (v === "LT") { return Data$dOrdering.LT; }
    if (v === "GT") { return Data$dOrdering.GT; }
    const v1 = Data$dOrd.ordInt.compare(x.blockNo)(y.blockNo);
    if (v1 === "LT") { return Data$dOrdering.LT; }
    if (v1 === "GT") { return Data$dOrdering.GT; }
    return Data$dOrd.ordInt.compare(x.slotNo)(y.slotNo);
  },
  Eq0: () => eqBlockHeader
};
const compare11 = /* #__PURE__ */ (() => Data$dMaybe.ordMaybe(ordBlockHeader).compare)();
const ordTxHeader = {
  compare: x => y => {
    const v = compare11(x.block)(y.block);
    if (v === "LT") { return Data$dOrdering.LT; }
    if (v === "GT") { return Data$dOrdering.GT; }
    const v1 = compare4(Data$dTuple.$Tuple(x.contractId.txId, x.contractId.txIx))(Data$dTuple.$Tuple(y.contractId.txId, y.contractId.txIx));
    if (v1 === "LT") { return Data$dOrdering.LT; }
    if (v1 === "GT") { return Data$dOrdering.GT; }
    const v2 = ordTxStatus.compare(x.status)(y.status);
    if (v2 === "LT") { return Data$dOrdering.LT; }
    if (v2 === "GT") { return Data$dOrdering.GT; }
    const v3 = Data$dOrd.ordString.compare(x.transactionId)(y.transactionId);
    if (v3 === "LT") { return Data$dOrdering.LT; }
    if (v3 === "GT") { return Data$dOrdering.GT; }
    return compare7(x.utxo)(y.utxo);
  },
  Eq0: () => eqTxHeader
};
const eqAnUTxO = {eq: x => y => eqTxOut.eq(x.txOut)(y.txOut) && x.txOutRef.txId === y.txOutRef.txId && x.txOutRef.txIx === y.txOutRef.txIx};
const encodeJsonTxOutRef = {encodeJson: v => Data$dArgonaut$dCore.fromString(v.txId + "#" + Data$dShow.showIntImpl(v.txIx))};
const encodeJsonTxId = {encodeJson: v => Data$dArgonaut$dCore.fromString(v)};
const encodeJsonTokenMetadataFi = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(srcIsSymbol)())(nameIsSymbol)())(mediaTypeIsSymbol)();
  return {encodeJson: rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy))};
})();
const encodeJsonTokenMetadata = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons({encodeJson: Data$dArgonaut$dEncode$dEncoders.encodeMaybe(Data$dArgonaut$dCore.fromString)})(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons({
    encodeJson: Data$dArgonaut$dEncode$dEncoders.encodeMaybe(Data$dArgonaut$dEncode$dClass.encodeJsonArray(encodeJsonTokenMetadataFi).encodeJson)
  })(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons({
    encodeJson: Data$dArgonaut$dEncode$dEncoders.encodeMaybe(Data$dArgonaut$dCore.fromString)
  })(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(nameIsSymbol)())(mediaTypeIsSymbol)())(imageIsSymbol)())(filesIsSymbol)())(descriptionIsSymbol)();
  return {encodeJson: rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy))};
})();
const encodeJsonTextEnvelope = {encodeJson: v => encodeJson1({type: v.type_, description: v.description, cborHex: v.cborHex})};
const encodeJsonTags = {
  encodeJson: x => Data$dArgonaut$dCore.fromObject(Foreign$dObject._fmapObject(
    fromFoldable(Data$dMap$dInternal.toUnfoldable(Data$dUnfoldable.unfoldableArray)(x)),
    Data$dArgonaut$dEncode$dClass.encodeJsonJson.encodeJson
  ))
};
const encodeJsonRoleTokenConfig = {
  encodeJson: v => {
    if (v.tag === "RoleTokenSimple") { return Data$dArgonaut$dCore.fromString(v._1); }
    if (v.tag === "RoleTokenAdvanced") { return encodeJson4({address: Data$dArgonaut$dCore.fromString(v._1), metadata: encodeJsonTokenMetadata.encodeJson(v._2)}); }
    $runtime.fail();
  }
};
const encodeJsonPolicyId = {encodeJson: v => Data$dArgonaut$dCore.fromString(v)};
const encodeJsonRolesConfig = {
  encodeJson: v => {
    if (v.tag === "UsePolicy") { return Data$dArgonaut$dCore.fromString(v._1); }
    if (v.tag === "Mint") {
      return Data$dArgonaut$dCore.fromObject(Foreign$dObject._fmapObject(
        fromFoldable(Data$dMap$dInternal.toUnfoldable(Data$dUnfoldable.unfoldableArray)(v._1)),
        encodeJsonRoleTokenConfig.encodeJson
      ));
    }
    $runtime.fail();
  }
};
const encodeJsonMetadata = {
  encodeJson: /* #__PURE__ */ (() => {
    const $0 = Data$dFunctor.arrayMap(x => Data$dTuple.$Tuple(Data$dShow.showIntImpl(x._1), x._2));
    return x => Data$dArgonaut$dCore.fromObject(Foreign$dObject._fmapObject(
      fromFoldable($0(Data$dMap$dInternal.toUnfoldable(Data$dUnfoldable.unfoldableArray)(x))),
      Data$dArgonaut$dEncode$dClass.encodeJsonJson.encodeJson
    ));
  })()
};
const encodeJsonMarloweVersion = {encodeJson: x => Data$dArgonaut$dCore.fromString("v1")};
const gEncodeJsonCons8 = /* #__PURE__ */ Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonTags)(/* #__PURE__ */ Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonMarloweVersion)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(versionIsSymbol)())(tagsIsSymbol)();
const encodeJson11 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonArray(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.encodeJsonInput))(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dDateTime$dISO.encodeJsonISO)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dDateTime$dISO.encodeJsonISO)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonMetadata)(gEncodeJsonCons8)(metadataIsSymbol)())(invalidHereafterIsSymbol)())(invalidBeforeIsSymbol)())(inputsIsSymbol)();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const encodeJson12 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.encodeJsonContract)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonMetadata)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dBigInt$dArgonaut.encodeJsonBitInt)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons({
    encodeJson: Data$dArgonaut$dEncode$dEncoders.encodeMaybe(encodeJsonRolesConfig.encodeJson)
  })(gEncodeJsonCons8)({reflectSymbol: () => "roles"})())(minUTxODepositIsSymbol)())(metadataIsSymbol)())(contractIsSymbol)();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const encodeJsonDatumHash = Data$dArgonaut$dEncode$dClass.encodeJsonJString;
const encodeJsonTxOut = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons({
    encodeJson: Data$dArgonaut$dEncode$dEncoders.encodeMaybe(Data$dArgonaut$dCore.fromString)
  })(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Contrib$dCardano.encodeJsonValue)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(valueIsSymbol)())(datumHashIsSymbol)())(addressIsSymbol)();
  return {encodeJson: rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy))};
})();
const encodeJsonBodyPutWithdraw = {encodeJsonBody: v => encodeJson1({type: v.type_, description: v.description, cborHex: v.cborHex})};
const encodeJsonBodyPutTransact = {encodeJsonBody: v => encodeJson1({type: v.type_, description: v.description, cborHex: v.cborHex})};
const encodeJsonBodyPutContract = {encodeJsonBody: v => encodeJson1({type: v.type_, description: v.description, cborHex: v.cborHex})};
const encodeJsonBodyPostTransac = {
  encodeJsonBody: v => encodeJson11({inputs: v.inputs, invalidBefore: v.invalidBefore, invalidHereafter: v.invalidHereafter, metadata: v.metadata, tags: v.tags, version: V1})
};
const encodeJsonBodyPostMerklei = {encodeJsonBody: v => encodeJson5({contract: v.contract})};
const encodeJsonBodyPostContrac = {
  encodeJsonBody: v => encodeJson12({metadata: v.metadata, tags: v.tags, version: V1, roles: v.roles, contract: v.contract, minUTxODeposit: v.minUTxODeposit})
};
const encodeJsonAnUTxO = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonTxOut)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonTxOutRef)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(txOutRefIsSymbol)())(txOutIsSymbol)();
  return {encodeJson: rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy))};
})();
const encodeHeadersPutWithdrawa = {encodeHeaders: () => v => ({})};
const encodeHeadersPutTransacti = {encodeHeaders: () => v => ({})};
const encodeHeadersPutContractR = {encodeHeaders: () => v => ({})};
const encodeHeadersPostWithdraw = {
  encodeHeaders: () => v => (
    {
      "X-Change-Address": v.changeAddress,
      "X-Address": Data$dString$dCommon.joinWith(",")(Data$dFunctor.arrayMap(CardanoMultiplatformLib$dTypes.bech32ToString)(v.addresses)),
      Accept: "application/vendor.iog.marlowe-runtime.withdraw-tx-json"
    }
  )
};
const encodeHeadersPostTransact = {
  encodeHeaders: () => v => (
    {
      "X-Change-Address": v.changeAddress,
      "X-Address": Data$dString$dCommon.joinWith(",")(Data$dFunctor.arrayMap(CardanoMultiplatformLib$dTypes.bech32ToString)(v.addresses)),
      Accept: "application/vendor.iog.marlowe-runtime.apply-inputs-tx-json"
    }
  )
};
const encodeHeadersPostContract = {
  encodeHeaders: () => v => (
    {
      "X-Change-Address": v.changeAddress,
      "X-Address": Data$dString$dCommon.joinWith(",")(Data$dFunctor.arrayMap(CardanoMultiplatformLib$dTypes.bech32ToString)(v.addresses)),
      Accept: "application/vendor.iog.marlowe-runtime.contract-tx-json"
    }
  )
};
const decodeJsonTxStatus = {
  decodeJson: /* #__PURE__ */ Contrib$dData$dArgonaut.decodeFromString(v => {
    if (v === "unsigned") { return Data$dMaybe.$Maybe("Just", Unsigned); }
    if (v === "submitted") { return Data$dMaybe.$Maybe("Just", Submitted); }
    if (v === "confirmed") { return Data$dMaybe.$Maybe("Just", Confirmed); }
    return Data$dMaybe.Nothing;
  })
};
const decodeFieldId2 = {
  decodeJsonField: j => {
    if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", decodeJsonTxStatus.decodeJson(j._1)); }
    return Data$dMaybe.Nothing;
  }
};
const decodeJsonTxOutRef = {
  decodeJson: /* #__PURE__ */ Contrib$dData$dArgonaut.decodeFromString(/* #__PURE__ */ (() => {
    const $0 = Data$dString$dCommon.split("#");
    return x => {
      const $1 = $0(x);
      if ($1.length === 2) {
        const $2 = Data$dInt.fromString($1[1]);
        if ($2.tag === "Just") { return Data$dMaybe.$Maybe("Just", {txId: $1[0], txIx: $2._1}); }
        if ($2.tag === "Nothing") { return Data$dMaybe.Nothing; }
        $runtime.fail();
      }
      return Data$dMaybe.Nothing;
    };
  })())
};
const decodeFieldId3 = {
  decodeJsonField: j => {
    if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", decodeJsonTxOutRef.decodeJson(j._1)); }
    return Data$dMaybe.Nothing;
  }
};
const decodeFieldMaybe2 = /* #__PURE__ */ Data$dArgonaut$dDecode$dClass.decodeFieldMaybe(decodeJsonTxOutRef);
const decodeJsonTxId = {
  decodeJson: x => {
    const $0 = Data$dArgonaut$dCore._caseJson(
      v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
      v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
      v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
      Data$dEither.Right,
      v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
      v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
      x
    );
    if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
    if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
    $runtime.fail();
  }
};
const decodeFieldId4 = {
  decodeJsonField: j => {
    if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", decodeJsonTxId.decodeJson(j._1)); }
    return Data$dMaybe.Nothing;
  }
};
const decodeJsonTokenMetadataFi = /* #__PURE__ */ Data$dArgonaut$dDecode$dClass.decodeRecord(/* #__PURE__ */ Data$dArgonaut$dDecode$dClass.gDecodeJsonCons(decodeFieldId)(/* #__PURE__ */ Data$dArgonaut$dDecode$dClass.gDecodeJsonCons(decodeFieldId)(/* #__PURE__ */ Data$dArgonaut$dDecode$dClass.gDecodeJsonCons(decodeFieldId)(Data$dArgonaut$dDecode$dClass.gDecodeJsonNil)(srcIsSymbol)()())(nameIsSymbol)()())(mediaTypeIsSymbol)()())();
const decodeJsonTokenMetadata = /* #__PURE__ */ (() => Data$dArgonaut$dDecode$dClass.decodeRecord(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons(Data$dArgonaut$dDecode$dClass.decodeFieldMaybe(Data$dArgonaut$dDecode$dClass.decodeJsonString))(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons(Data$dArgonaut$dDecode$dClass.decodeFieldMaybe({
  decodeJson: Data$dArgonaut$dDecode$dDecoders.decodeArray(decodeJsonTokenMetadataFi.decodeJson)
}))(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons(decodeFieldId)(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons(Data$dArgonaut$dDecode$dClass.decodeFieldMaybe(Data$dArgonaut$dDecode$dClass.decodeJsonString))(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons(decodeFieldId)(Data$dArgonaut$dDecode$dClass.gDecodeJsonNil)(nameIsSymbol)()())(mediaTypeIsSymbol)()())(imageIsSymbol)()())(filesIsSymbol)()())(descriptionIsSymbol)()())())();
const decodeJsonTags = {
  decodeJson: json => {
    const $0 = decodeJson1(json);
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
    })()(v => Data$dEither.$Either("Right", fromFoldableWithIndex(v)));
  }
};
const hfoldlWithIndexRowListCons7 = /* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2(tagsIsSymbol)()()({
  decodeJsonField: j => {
    if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", decodeJsonTags.decodeJson(j._1)); }
    return Data$dMaybe.Nothing;
  }
}));
const decodeJsonSlotNumber = {
  decodeJson: json => {
    const $0 = Data$dArgonaut$dDecode$dDecoders.decodeInt(json);
    if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
    if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
    $runtime.fail();
  }
};
const decodeJsonRoleTokenConfig = {
  decodeJson: v => {
    if (Data$dArgonaut$dCore._caseJson(v$1 => false, v$1 => false, v$1 => false, v$1 => true, v$1 => false, v$1 => false, v)) {
      const $0 = Data$dArgonaut$dCore._caseJson(
        v$1 => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
        v$1 => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
        v$1 => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
        Data$dEither.Right,
        v$1 => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
        v$1 => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
        v
      );
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") { return Data$dEither.$Either("Right", $RoleTokenConfig("RoleTokenSimple", $0._1)); }
      $runtime.fail();
    }
    const $0 = Data$dArgonaut$dDecode$dDecoders.decodeJObject(v);
    return (() => {
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
      const $1 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dArgonaut$dCore.caseJsonString(Data$dEither.$Either(
        "Left",
        Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")
      ))(Data$dEither.Right))(obj)("address");
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
      })()(address => {
        const $2 = Data$dArgonaut$dDecode$dDecoders.getField(decodeJsonTokenMetadata.decodeJson)(obj)("metadata");
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
        })()(metadata => Data$dEither.$Either("Right", $RoleTokenConfig("RoleTokenAdvanced", address, metadata)));
      });
    });
  }
};
const decodeJson4 = /* #__PURE__ */ (() => decodeMap(decodeJsonRoleTokenConfig).decodeJson)();
const decodeJsonResourceLink = {
  decodeJson: json => {
    const $0 = Data$dArgonaut$dCore._caseJson(
      v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
      v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
      v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
      Data$dEither.Right,
      v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
      v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
      json
    );
    if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
    if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
    $runtime.fail();
  }
};
const decodeJsonResourceEndpoin = decodeJsonResourceLink;
const decodeJsonTransactionEndp = decodeJsonResourceLink;
const decodeJsonWithdrawalEndpo = decodeJsonResourceLink;
const decodeJsonPostWithdrawals = /* #__PURE__ */ Data$dArgonaut$dDecode$dClass.decodeRecord(/* #__PURE__ */ Data$dArgonaut$dDecode$dClass.gDecodeJsonCons(/* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dDecode$dDecoders.decodeArray(Data$dArgonaut$dCore.caseJsonString(Data$dEither.$Either(
    "Left",
    Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")
  ))(Data$dEither.Right));
  return {
    decodeJsonField: j => {
      if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0(j._1)); }
      return Data$dMaybe.Nothing;
    }
  };
})())(/* #__PURE__ */ gDecodeJsonCons3(/* #__PURE__ */ Data$dArgonaut$dDecode$dClass.gDecodeJsonCons(/* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dDecode$dDecoders.decodeArray(decodeJsonTxOutRef.decodeJson);
  return {
    decodeJsonField: j => {
      if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0(j._1)); }
      return Data$dMaybe.Nothing;
    }
  };
})())(/* #__PURE__ */ Data$dArgonaut$dDecode$dClass.gDecodeJsonCons(decodeFieldId3)(/* #__PURE__ */ Data$dArgonaut$dDecode$dClass.gDecodeJsonCons({
  decodeJsonField: j => {
    if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", Data$dBigInt$dArgonaut.decodeJsonBigInt.decodeJson(j._1)); }
    return Data$dMaybe.Nothing;
  }
})(gDecodeJsonCons4)(minUTxODepositIsSymbol)()())(contractIdIsSymbol)()())({reflectSymbol: () => "collateralUTxOs"})()())({reflectSymbol: () => "changeAddress"})()())({
  reflectSymbol: () => "addresses"
})()())();
const decodeJsonPostMerkleizati = /* #__PURE__ */ Data$dArgonaut$dDecode$dClass.decodeRecord(/* #__PURE__ */ Data$dArgonaut$dDecode$dClass.gDecodeJsonCons(/* #__PURE__ */ (() => {
  const $0 = decodeMap(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.decodeJsonContract);
  return {
    decodeJsonField: j => {
      if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0.decodeJson(j._1)); }
      return Data$dMaybe.Nothing;
    }
  };
})())(/* #__PURE__ */ Data$dArgonaut$dDecode$dClass.gDecodeJsonCons(decodeFieldId1)(Data$dArgonaut$dDecode$dClass.gDecodeJsonNil)(contractIsSymbol)()())({
  reflectSymbol: () => "continuations"
})()())();
const decodeJsonPolicyId = {
  decodeJson: x => {
    const $0 = Data$dArgonaut$dCore._caseJson(
      v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
      v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
      v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
      Data$dEither.Right,
      v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
      v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
      x
    );
    if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
    if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
    $runtime.fail();
  }
};
const hfoldlWithIndexRowListCons8 = /* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2({
  reflectSymbol: () => "roleTokenMintingPolicyId"
})()()({
  decodeJsonField: j => {
    if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", decodeJsonPolicyId.decodeJson(j._1)); }
    return Data$dMaybe.Nothing;
  }
}));
const decodeJsonRolesConfig = {
  decodeJson: v => {
    if (Data$dArgonaut$dCore._caseJson(v$1 => false, v$1 => false, v$1 => false, v$1 => true, v$1 => false, v$1 => false, v)) {
      const $0 = decodeJsonPolicyId.decodeJson(v);
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") { return Data$dEither.$Either("Right", $RolesConfig("UsePolicy", $0._1)); }
      $runtime.fail();
    }
    const $0 = decodeJson4(v);
    if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
    if ($0.tag === "Right") { return Data$dEither.$Either("Right", $RolesConfig("Mint", $0._1)); }
    $runtime.fail();
  }
};
const decodeJsonPayout = /* #__PURE__ */ Data$dArgonaut$dDecode$dClass.decodeRecord(/* #__PURE__ */ Data$dArgonaut$dDecode$dClass.gDecodeJsonCons(decodeFieldId3)(gDecodeJsonCons4)({
  reflectSymbol: () => "payoutId"
})()())();
const decodeJsonMetadata = {
  decodeJson: json => {
    const $0 = decodeJson1(json);
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
    })()(v => {
      const $1 = $$for(toUnfoldable1(v))(v1 => {
        const $1 = Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Expecting an integer metadata label but got: " + Data$dShow.showStringImpl(v1._1));
        const $2 = Data$dInt.fromString(v1._1);
        if ($2.tag === "Nothing") { return Data$dEither.$Either("Left", $1); }
        if ($2.tag === "Just") { return Data$dEither.$Either("Right", Data$dTuple.$Tuple($2._1, v1._2)); }
        $runtime.fail();
      });
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
      })()(v1 => Data$dEither.$Either("Right", fromFoldable1(v1)));
    });
  }
};
const decodeJsonMarloweVersion = {
  decodeJson: /* #__PURE__ */ Contrib$dData$dArgonaut.decodeFromString(v => {
    if (v === "v1") { return Data$dMaybe.$Maybe("Just", V1); }
    return Data$dMaybe.Nothing;
  })
};
const hfoldlWithIndexRowListCons9 = /* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2(versionIsSymbol)()()({
  decodeJsonField: j => {
    if (j.tag === "Just") {
      return Data$dMaybe.$Maybe(
        "Just",
        Contrib$dData$dArgonaut.decodeFromString(v => {
          if (v === "v1") { return Data$dMaybe.$Maybe("Just", V1); }
          return Data$dMaybe.Nothing;
        })(j._1)
      );
    }
    return Data$dMaybe.Nothing;
  }
}))(Heterogeneous$dFolding.hfoldlWithIndexRowListNil);
const decodeJsonIndexEndpoint = decodeJsonResourceLink;
const decodeJsonTransactionsEnd = decodeJsonResourceLink;
const decodeJsonWithdrawalsEndp = decodeJsonResourceLink;
const decodeJsonDatumHash = Data$dArgonaut$dDecode$dClass.decodeJsonString;
const decodeJsonTxOut = /* #__PURE__ */ Data$dArgonaut$dDecode$dClass.decodeRecord(/* #__PURE__ */ gDecodeJsonCons3(/* #__PURE__ */ Data$dArgonaut$dDecode$dClass.gDecodeJsonCons(/* #__PURE__ */ Data$dArgonaut$dDecode$dClass.decodeFieldMaybe(Data$dArgonaut$dDecode$dClass.decodeJsonString))(/* #__PURE__ */ Data$dArgonaut$dDecode$dClass.gDecodeJsonCons({
  decodeJsonField: j => {
    if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", Contrib$dCardano.decodeJsonValue.decodeJson(j._1)); }
    return Data$dMaybe.Nothing;
  }
})(Data$dArgonaut$dDecode$dClass.gDecodeJsonNil)(valueIsSymbol)()())(datumHashIsSymbol)()())(addressIsSymbol)()())();
const decodeJsonContractsEndpoi = decodeJsonResourceLink;
const decodeJsonContractEndpoin = decodeJsonResourceLink;
const decodeJsonBlockNumber = {
  decodeJson: json => {
    const $0 = Data$dArgonaut$dDecode$dDecoders.decodeInt(json);
    if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
    if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
    $runtime.fail();
  }
};
const decodeJson6 = /* #__PURE__ */ (() => Data$dArgonaut$dDecode$dClass.decodeRecord(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons(decodeFieldId)(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons({
  decodeJsonField: j => {
    if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", decodeJsonBlockNumber.decodeJson(j._1)); }
    return Data$dMaybe.Nothing;
  }
})(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons({
  decodeJsonField: j => {
    if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", decodeJsonSlotNumber.decodeJson(j._1)); }
    return Data$dMaybe.Nothing;
  }
})(Data$dArgonaut$dDecode$dClass.gDecodeJsonNil)({reflectSymbol: () => "slotNo"})()())({reflectSymbol: () => "blockNo"})()())({reflectSymbol: () => "blockHeaderHash"})()())().decodeJson)();
const decodeJsonBlockHeader = {
  decodeJson: json => {
    const $0 = decodeJson6(json);
    if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
    if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
    $runtime.fail();
  }
};
const decodeFieldMaybe3 = /* #__PURE__ */ Data$dArgonaut$dDecode$dClass.decodeFieldMaybe(decodeJsonBlockHeader);
const decodeJsonTxHeader = {
  decodeJson: x => {
    const $0 = Data$dArgonaut$dDecode$dClass.decodeRecord(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons(decodeFieldMaybe3)(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons(decodeFieldId3)(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons(decodeFieldId2)(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons(decodeFieldId4)(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons(decodeFieldMaybe2)(Data$dArgonaut$dDecode$dClass.gDecodeJsonNil)(utxoIsSymbol)()())(transactionIdIsSymbol)()())(statusIsSymbol)()())(contractIdIsSymbol)()())(blockIsSymbol)()())().decodeJson(x);
    if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
    if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
    $runtime.fail();
  }
};
const decodeJsonAnUTxO = /* #__PURE__ */ Data$dArgonaut$dDecode$dClass.decodeRecord(/* #__PURE__ */ Data$dArgonaut$dDecode$dClass.gDecodeJsonCons({
  decodeJsonField: j => {
    if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", decodeJsonTxOut.decodeJson(j._1)); }
    return Data$dMaybe.Nothing;
  }
})(/* #__PURE__ */ Data$dArgonaut$dDecode$dClass.gDecodeJsonCons(decodeFieldId3)(Data$dArgonaut$dDecode$dClass.gDecodeJsonNil)(txOutRefIsSymbol)()())(txOutIsSymbol)()())();
const withdrawalsApi = "withdrawals";
const unsafeDecodeTextEnvelope = json => {
  const $0 = decodeJson1(json);
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
  })()(v => {
    const $1 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dArgonaut$dCore.caseJsonString(Data$dEither.$Either(
      "Left",
      Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")
    ))(Data$dEither.Right))(v)("type");
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
    })()(type_ => {
      const $2 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dArgonaut$dCore.caseJsonString(Data$dEither.$Either(
        "Left",
        Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")
      ))(Data$dEither.Right))(v)("description");
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
      })()(description => {
        const $3 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dArgonaut$dCore.caseJsonString(Data$dEither.$Either(
          "Left",
          Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")
        ))(Data$dEither.Right))(v)("cborHex");
        return (() => {
          if ($3.tag === "Left") {
            const $4 = $3._1;
            return v$1 => Data$dEither.$Either("Left", $4);
          }
          if ($3.tag === "Right") {
            const $4 = $3._1;
            return f => f($4);
          }
          $runtime.fail();
        })()(cborHex => Data$dEither.$Either("Right", {type_, description, cborHex}));
      });
    });
  });
  if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
  if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1); }
  $runtime.fail();
};
const decodeJsonTextEnvelope = {decodeJson: unsafeDecodeTextEnvelope};
const txOutRefToUrlEncodedString = v => v.txId + "%23" + Data$dShow.showIntImpl(v.txIx);
const txOutRefToString = v => v.txId + "#" + Data$dShow.showIntImpl(v.txIx);
const encodeJsonBodyPostWithdra = {
  encodeJsonBody: v => encodeJson6({role: v.role, contractId: v.contractId.txId + "#" + Data$dShow.showIntImpl(v.contractId.txIx), minUTxODeposit: v.minUTxODeposit})
};
const txOutRefFromString = /* #__PURE__ */ (() => {
  const $0 = Data$dString$dCommon.split("#");
  return x => {
    const $1 = $0(x);
    if ($1.length === 2) {
      const $2 = Data$dInt.fromString($1[1]);
      if ($2.tag === "Just") { return Data$dMaybe.$Maybe("Just", {txId: $1[0], txIx: $2._1}); }
      if ($2.tag === "Nothing") { return Data$dMaybe.Nothing; }
      $runtime.fail();
    }
    return Data$dMaybe.Nothing;
  };
})();
const toResourceLink = dict => dict.toResourceLink;
const toResourceLink2 = () => dictToResourceLink => ({toResourceLink: x => dictToResourceLink.toResourceLink(x)});
const toResourceLinkIndexEndpoi = {toResourceLink: v => v};
const toResourceLinkResourceEnd = {toResourceLink: v => v};
const toQueryParams = dict => dict.toQueryParams;
const textEnvelopeType = dict => dict.textEnvelopeType;
const toTextEnvelope = dictHasTextEnvelope => cborHex => description => ({type_: dictHasTextEnvelope.textEnvelopeType(cborHex), description, cborHex});
const postContractsFromString = v => {
  if (v === "MintingUtxoNotFound") { return MintingUtxoNotFound; }
  if (v === "RoleTokenNotFound") { return RoleTokenNotFound; }
  if (v === "ToCardanoError") { return ToCardanoError; }
  if (v === "MissingMarloweInput") { return MissingMarloweInput; }
  if (v === "PayoutInputNotFound") { return PayoutInputNotFound; }
  if (v === "CalculateMinUtxoFailed") { return CalculateMinUtxoFailed; }
  if (v === "CoinSelectionFailed") { return CoinSelectionFailed; }
  if (v === "BalancingError") { return BalancingError; }
  if (v === "MarloweContractNotFound") { return MarloweContractNotFound; }
  if (v === "MarloweContractVersionMismatch") { return MarloweContractVersionMismatch; }
  if (v === "LoadMarloweContextToCardanoError") { return LoadMarloweContextToCardanoError; }
  if (v === "MarloweScriptNotPublished") { return MarloweScriptNotPublished; }
  if (v === "PayoutScriptNotPublished") { return PayoutScriptNotPublished; }
  if (v === "ExtractCreationError") { return ExtractCreationError; }
  if (v === "ExtractMarloweTransactionError") { return ExtractMarloweTransactionError; }
  if (v === "MintingUtxoSelectionFailed") { return MintingUtxoSelectionFailed; }
  if (v === "AddressDecodingFailed") { return AddressDecodingFailed; }
  if (v === "MintingScriptDecodingFailed") { return MintingScriptDecodingFailed; }
  if (v === "CreateToCardanoError") { return CreateToCardanoError; }
  if (v === "InternalError") { return InternalError; }
  return $PostContractsError("UnknownError", v);
};
const partyToBech32 = v => {
  if (v.tag === "Address") { return Data$dMaybe.$Maybe("Just", v._1); }
  return Data$dMaybe.Nothing;
};
const metadataFieldDecoder = /* #__PURE__ */ (() => ({metadata: Data$dMaybe.functorMaybe.map(decodeJsonMetadata.decodeJson)}))();
const decodeJsonContractHeader = /* #__PURE__ */ (() => (
  {
    decodeJson: Contrib$dData$dArgonaut$dGeneric$dRecord.decodeNewtypedRecord1()()()(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2(blockIsSymbol)()()(decodeFieldMaybe3))(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2(contractIdIsSymbol)()()(decodeFieldId3))(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte(metadataIsSymbol)()()())(hfoldlWithIndexRowListCons8(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2(statusIsSymbol)()()(decodeFieldId2))(hfoldlWithIndexRowListCons7(hfoldlWithIndexRowListCons9))))))).decodeNewtypedRecord(metadataFieldDecoder)
  }
))();
const decodeJsonWithdrawalHeade = /* #__PURE__ */ (() => (
  {
    decodeJson: Contrib$dData$dArgonaut$dGeneric$dRecord.decodeNewtypedRecord1()()()(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2(blockIsSymbol)()()(decodeFieldMaybe3))(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte1)(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2(statusIsSymbol)()()(decodeFieldId2))(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2({
      reflectSymbol: () => "withdrawalId"
    })()()(decodeFieldId4))(Heterogeneous$dFolding.hfoldlWithIndexRowListNil))))).decodeNewtypedRecord(metadataFieldDecoder)
  }
))();
const encodeJsonBody = dict => dict.encodeJsonBody;
const encodeHeaders = dict => dict.encodeHeaders;
const decodeUTCDateTime = json => {
  const $0 = Data$dArgonaut$dCore._caseJson(
    v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
    v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
    v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
    Data$dEither.Right,
    v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
    v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
    json
  );
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
  })()(str => {
    const $1 = Data$dString$dCodeUnits.stripSuffix("Z")(str);
    if ($1.tag === "Just") {
      const $2 = Data$dJSDate.toInstant(Data$dJSDate.parse(str)());
      if ($2.tag === "Just") { return Data$dEither.$Either("Right", Data$dDateTime$dInstant.toDateTime($2._1)); }
      return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("UnexpectedValue", json));
    }
    if ($1.tag === "Nothing") { return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("UnexpectedValue", json)); }
    $runtime.fail();
  });
};
const decodeTransactionObjectTextEnvelope = unsafeDecodeTextEnvelope;
const decodeJsonContractState = /* #__PURE__ */ (() => (
  {
    decodeJson: Contrib$dData$dArgonaut$dGeneric$dRecord.decodeNewtypedRecord1()()()(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2(blockIsSymbol)()()(decodeFieldMaybe3))(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2(contractIdIsSymbol)()()(decodeFieldId3))(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2({
      reflectSymbol: () => "currentContract"
    })()()(decodeFieldMaybe))(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2({
      reflectSymbol: () => "initialContract"
    })()()(decodeFieldId1))(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte(metadataIsSymbol)()()())(hfoldlWithIndexRowListCons8(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2({
      reflectSymbol: () => "state"
    })()()(decodeFieldMaybe1))(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2(statusIsSymbol)()()(decodeFieldId2))(hfoldlWithIndexRowListCons7(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte({
      reflectSymbol: () => "txBody"
    })()()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2({reflectSymbol: () => "unclaimedPayouts"})()()((() => {
      const $0 = Data$dArgonaut$dDecode$dDecoders.decodeArray(decodeJsonPayout.decodeJson);
      return {
        decodeJsonField: j => {
          if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0(j._1)); }
          return Data$dMaybe.Nothing;
        }
      };
    })()))(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2(utxoIsSymbol)()()(decodeFieldMaybe2))(hfoldlWithIndexRowListCons9))))))))))))).decodeNewtypedRecord({
      txBody: Data$dMaybe.functorMaybe.map(Data$dArgonaut$dDecode$dDecoders.decodeMaybe(unsafeDecodeTextEnvelope)),
      ...metadataFieldDecoder
    })
  }
))();
const decodeJsonPostContractsRe = /* #__PURE__ */ (() => (
  {
    decodeJson: Contrib$dData$dArgonaut$dGeneric$dRecord.decodeNewtypedRecord1()()()(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2(contractIdIsSymbol)()()(decodeFieldId3))(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte(txIsSymbol)()()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil))).decodeNewtypedRecord({
      tx: Data$dMaybe.functorMaybe.map(unsafeDecodeTextEnvelope)
    })
  }
))();
const decodeJsonPostTransaction = /* #__PURE__ */ (() => (
  {
    decodeJson: Contrib$dData$dArgonaut$dGeneric$dRecord.decodeNewtypedRecord1()()()(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2(contractIdIsSymbol)()()(decodeFieldId3))(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2(transactionIdIsSymbol)()()(decodeFieldId4))(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2(txIsSymbol)()()({
      decodeJsonField: j => {
        if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", unsafeDecodeTextEnvelope(j._1)); }
        return Data$dMaybe.Nothing;
      }
    }))(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte1)(Heterogeneous$dFolding.hfoldlWithIndexRowListNil))))).decodeNewtypedRecord({
      txBody: Data$dMaybe.functorMaybe.map(unsafeDecodeTextEnvelope)
    })
  }
))();
const decodeJsonPostWithdrawals1 = /* #__PURE__ */ (() => (
  {
    decodeJson: Contrib$dData$dArgonaut$dGeneric$dRecord.decodeNewtypedRecord1()()()(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte(txIsSymbol)()()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2({
      reflectSymbol: () => "withdrawalId"
    })()()(decodeFieldId))(Heterogeneous$dFolding.hfoldlWithIndexRowListNil))).decodeNewtypedRecord({tx: Data$dMaybe.functorMaybe.map(unsafeDecodeTextEnvelope)})
  }
))();
const decodeJsonTx = /* #__PURE__ */ (() => (
  {
    decodeJson: Contrib$dData$dArgonaut$dGeneric$dRecord.decodeNewtypedRecord1()()()(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2(blockIsSymbol)()()(decodeFieldMaybe3))(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2({
      reflectSymbol: () => "consumingTx"
    })()()(Data$dArgonaut$dDecode$dClass.decodeFieldMaybe(decodeJsonTxId)))(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2(contractIdIsSymbol)()()(decodeFieldId3))(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2({
      reflectSymbol: () => "inputUtxo"
    })()()(decodeFieldId3))(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2(inputsIsSymbol)()()((() => {
      const $0 = Data$dArgonaut$dDecode$dDecoders.decodeArray(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.decodeJsonInput.decodeJson);
      return {
        decodeJsonField: j => {
          if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0(j._1)); }
          return Data$dMaybe.Nothing;
        }
      };
    })()))(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte(invalidBeforeIsSymbol)()()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte(invalidHereafterIsSymbol)()()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2({
      reflectSymbol: () => "outputContract"
    })()()(decodeFieldMaybe))(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2({
      reflectSymbol: () => "outputState"
    })()()(decodeFieldMaybe1))(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2({
      reflectSymbol: () => "outputUtxo"
    })()()(decodeFieldMaybe2))(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2(statusIsSymbol)()()(decodeFieldId2))(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte2(transactionIdIsSymbol)()()(decodeFieldId4))(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(Contrib$dData$dArgonaut$dGeneric$dRecord.foldingWithIndexDecodeSte({
      reflectSymbol: () => "txBody"
    })()()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil)))))))))))))).decodeNewtypedRecord({
      invalidBefore: Data$dMaybe.functorMaybe.map(decodeUTCDateTime),
      invalidHereafter: Data$dMaybe.functorMaybe.map(decodeUTCDateTime),
      txBody: Data$dMaybe.functorMaybe.map(Data$dArgonaut$dDecode$dDecoders.decodeMaybe(unsafeDecodeTextEnvelope))
    })
  }
))();
const decodeResourceWithLink = dictDecodeRecord => decodeResource => dictDecodeRecord.decodeRecord({resource: decodeResource});
const decodeApiError = decodeError => json => {
  const $0 = decodeJson1(json);
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
    ))(Data$dEither.Right))(obj)("message");
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
    })()(message => {
      const $2 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dArgonaut$dCore.caseJsonString(Data$dEither.$Either(
        "Left",
        Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")
      ))(Data$dEither.Right))(obj)("errorCode");
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
      })()(errorCode => {
        const $3 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dEither.Right)(obj)("details");
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
        })()(details => Data$dEither.$Either("Right", {message, error: decodeError(errorCode)(details)}));
      });
    });
  });
};
const decodeJsonApiErrorPostCon = {decodeJson: /* #__PURE__ */ decodeApiError(code => v => postContractsFromString(code))};
const decodeJsonApiErrorString = {decodeJson: /* #__PURE__ */ decodeApiError(errorCode => details => errorCode + ": " + Data$dArgonaut$dCore.stringify(details))};
const bech32ToParty = bech32 => Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Address", bech32);
const api = "contracts";
const runtime = serverURL => ({root: "contracts", withdrawalsEndpoint: "withdrawals", serverURL});
export {
  $MarloweVersion,
  $PostContractsError,
  $RoleTokenConfig,
  $RolesConfig,
  $TxStatus,
  AddressDecodingFailed,
  AnUTxO,
  ApiError,
  BalancingError,
  BlockHeader,
  BlockNumber,
  CalculateMinUtxoFailed,
  CoinSelectionFailed,
  Confirmed,
  ContractEndpoint,
  ContractHeader,
  ContractState,
  ContractsEndpoint,
  CreateToCardanoError,
  DatumHash,
  ExtractCreationError,
  ExtractMarloweTransactionError,
  IndexEndpoint,
  InternalError,
  LoadMarloweContextToCardanoError,
  MarloweContractNotFound,
  MarloweContractVersionMismatch,
  MarloweScriptNotPublished,
  Metadata,
  Mint,
  MintingScriptDecodingFailed,
  MintingUtxoNotFound,
  MintingUtxoSelectionFailed,
  MissingMarloweInput,
  Payout,
  PayoutInputNotFound,
  PayoutRef,
  PayoutScriptNotPublished,
  PolicyId,
  PostContractsRequest,
  PostContractsResponseContent,
  PostMerkleizationRequest,
  PostMerkleizationResponse,
  PostTransactionsRequest,
  PostTransactionsResponse,
  PostWithdrawalsRequest,
  PostWithdrawalsResponseContent,
  PutContractRequest,
  PutTransactionRequest,
  PutWithdrawalRequest,
  ResourceEndpoint,
  ResourceLink,
  RoleTokenAdvanced,
  RoleTokenNotFound,
  RoleTokenSimple,
  Runtime,
  ServerURL,
  SlotNumber,
  Submitted,
  Tags,
  TextEnvelope,
  ToCardanoError,
  TokenMetadata,
  TokenMetadataFile,
  TransactionEndpoint,
  TransactionsEndpoint,
  Tx,
  TxBody,
  TxHeader,
  TxId,
  TxOut,
  TxOutRef,
  UnknownError,
  Unsigned,
  UsePolicy,
  V1,
  Withdrawal,
  WithdrawalEndpoint,
  WithdrawalHeader,
  WithdrawalState,
  WithdrawalsEndpoint,
  addressIsSymbol,
  api,
  bech32ToParty,
  blockIsSymbol,
  compare1,
  compare11,
  compare4,
  compare7,
  compare8,
  contractIdIsSymbol,
  contractIsSymbol,
  datumHashIsSymbol,
  decodeApiError,
  decodeFieldId,
  decodeFieldId1,
  decodeFieldId2,
  decodeFieldId3,
  decodeFieldId4,
  decodeFieldMaybe,
  decodeFieldMaybe1,
  decodeFieldMaybe2,
  decodeFieldMaybe3,
  decodeJson1,
  decodeJson4,
  decodeJson6,
  decodeJsonAnUTxO,
  decodeJsonApiErrorPostCon,
  decodeJsonApiErrorString,
  decodeJsonBlockHeader,
  decodeJsonBlockNumber,
  decodeJsonContractEndpoin,
  decodeJsonContractHeader,
  decodeJsonContractState,
  decodeJsonContractsEndpoi,
  decodeJsonDatumHash,
  decodeJsonIndexEndpoint,
  decodeJsonMarloweVersion,
  decodeJsonMetadata,
  decodeJsonPayout,
  decodeJsonPolicyId,
  decodeJsonPostContractsRe,
  decodeJsonPostMerkleizati,
  decodeJsonPostTransaction,
  decodeJsonPostWithdrawals,
  decodeJsonPostWithdrawals1,
  decodeJsonResourceEndpoin,
  decodeJsonResourceLink,
  decodeJsonRoleTokenConfig,
  decodeJsonRolesConfig,
  decodeJsonSlotNumber,
  decodeJsonTags,
  decodeJsonTextEnvelope,
  decodeJsonTokenMetadata,
  decodeJsonTokenMetadataFi,
  decodeJsonTransactionEndp,
  decodeJsonTransactionsEnd,
  decodeJsonTx,
  decodeJsonTxHeader,
  decodeJsonTxId,
  decodeJsonTxOut,
  decodeJsonTxOutRef,
  decodeJsonTxStatus,
  decodeJsonWithdrawalEndpo,
  decodeJsonWithdrawalHeade,
  decodeJsonWithdrawalsEndp,
  decodeMap,
  decodeResourceWithLink,
  decodeTransactionObjectTextEnvelope,
  decodeUTCDateTime,
  descriptionIsSymbol,
  encodeHeaders,
  encodeHeadersPostContract,
  encodeHeadersPostTransact,
  encodeHeadersPostWithdraw,
  encodeHeadersPutContractR,
  encodeHeadersPutTransacti,
  encodeHeadersPutWithdrawa,
  encodeJson1,
  encodeJson11,
  encodeJson12,
  encodeJson4,
  encodeJson5,
  encodeJson6,
  encodeJsonAnUTxO,
  encodeJsonBody,
  encodeJsonBodyPostContrac,
  encodeJsonBodyPostMerklei,
  encodeJsonBodyPostTransac,
  encodeJsonBodyPostWithdra,
  encodeJsonBodyPutContract,
  encodeJsonBodyPutTransact,
  encodeJsonBodyPutWithdraw,
  encodeJsonDatumHash,
  encodeJsonMarloweVersion,
  encodeJsonMetadata,
  encodeJsonPolicyId,
  encodeJsonRoleTokenConfig,
  encodeJsonRolesConfig,
  encodeJsonTags,
  encodeJsonTextEnvelope,
  encodeJsonTokenMetadata,
  encodeJsonTokenMetadataFi,
  encodeJsonTxId,
  encodeJsonTxOut,
  encodeJsonTxOutRef,
  eq10,
  eq12,
  eq13,
  eq18,
  eq21,
  eq29,
  eq4,
  eq5,
  eq8,
  eqAnUTxO,
  eqBlockHeader,
  eqBlockNumber,
  eqContractEndpoint,
  eqContractHeader,
  eqContractState,
  eqContractsEndpoint,
  eqDatumHash,
  eqIndexEndpoint,
  eqMarloweVersion,
  eqMetadata,
  eqPayout,
  eqPayoutRef,
  eqPolicyId,
  eqPostWithdrawalsRequest,
  eqResourceEndpoint,
  eqResourceLink,
  eqSlotNumber,
  eqTags,
  eqTextEnvelope,
  eqTokenMetadata,
  eqTokenMetadataFile,
  eqTransactionEndpoint,
  eqTransactionsEndpoint,
  eqTx,
  eqTxBody,
  eqTxHeader,
  eqTxId,
  eqTxOut,
  eqTxOutRef,
  eqTxStatus,
  eqWithdrawal,
  eqWithdrawalEndpoint,
  eqWithdrawalHeader,
  eqWithdrawalState,
  eqWithdrawalsEndpoint,
  filesIsSymbol,
  $$for as for,
  fromFoldable,
  fromFoldable1,
  fromFoldableWithIndex,
  gDecodeJsonCons3,
  gDecodeJsonCons4,
  gEncodeJsonCons8,
  genericApiError_,
  genericBlockHeader_,
  genericBlockNumber_,
  genericContractHeader_,
  genericContractState_,
  genericMarloweVersion_,
  genericMetadata_,
  genericPayoutRef_,
  genericPayout_,
  genericPolicyId_,
  genericResourceLink_,
  genericSlotNumber_,
  genericTags_,
  genericTextEnvelope_,
  genericTokenMetadataFile_,
  genericTokenMetadata_,
  genericTxBody_,
  genericTxHeader_,
  genericTxId_,
  genericTxOutRef_,
  genericTx_,
  genericWithdrawalHeader_,
  genericWithdrawalState_,
  genericWithdrawal_,
  hasTextEnvelopeTransactio,
  hasTextEnvelopeTransactio1,
  hfoldlWithIndexRowListCons7,
  hfoldlWithIndexRowListCons8,
  hfoldlWithIndexRowListCons9,
  identity,
  imageIsSymbol,
  inputsIsSymbol,
  invalidBeforeIsSymbol,
  invalidHereafterIsSymbol,
  mediaTypeIsSymbol,
  metadataFieldDecoder,
  metadataIsSymbol,
  minUTxODepositIsSymbol,
  monoidMetadata,
  monoidTags,
  nameIsSymbol,
  newtypeApiError_,
  newtypeBlockHeader_,
  newtypeBlockNumber_,
  newtypeContractEndpoint_,
  newtypeContractHeader_,
  newtypeContractState_,
  newtypeContractsEndpoint_,
  newtypeIndexEndpoint_,
  newtypeMetadata_,
  newtypePayoutRef_,
  newtypePayout_,
  newtypePolicyId_,
  newtypePostContractsRespo,
  newtypePostMerkleizationR,
  newtypePostTransactionsRe,
  newtypePostWithdrawalsReq,
  newtypePostWithdrawalsRes,
  newtypeResourceEndpoint_,
  newtypeResourceLink_,
  newtypeSlotNumber_,
  newtypeTags_,
  newtypeTextEnvelope_,
  newtypeTokenMetadataFile_,
  newtypeTokenMetadata_,
  newtypeTransactionEndpoin,
  newtypeTransactionsEndpoi,
  newtypeTxBody_,
  newtypeTxHeader_,
  newtypeTxId_,
  newtypeTxOutRef_,
  newtypeTx_,
  newtypeWithdrawalEndpoint,
  newtypeWithdrawalHeader_,
  newtypeWithdrawalState_,
  newtypeWithdrawal_,
  newtypeWithdrawalsEndpoin,
  ordBlockHeader,
  ordBlockNumber,
  ordMarloweVersion,
  ordPayout,
  ordPolicyId,
  ordResourceLink,
  ordSlotNumber,
  ordTokenMetadata,
  ordTokenMetadataFile,
  ordTxHeader,
  ordTxId,
  ordTxOutRef,
  ordTxStatus,
  partyToBech32,
  postContractsFromString,
  queryParamsContractEndpoi,
  queryParamsContractsEndpo,
  queryParamsTransactionEnd,
  queryParamsTransactionsEn,
  roleIsSymbol,
  runtime,
  semigroupMetadata,
  semigroupTags,
  showApiError,
  showPolicyId,
  showPostContractsError,
  showTxStatus,
  srcIsSymbol,
  statusIsSymbol,
  tagsIsSymbol,
  textEnvelopeType,
  toQueryParams,
  toResourceLink,
  toResourceLink2,
  toResourceLinkIndexEndpoi,
  toResourceLinkResourceEnd,
  toResourceLinkResourceLin,
  toTextEnvelope,
  toUnfoldable1,
  transactionIdIsSymbol,
  txIsSymbol,
  txOutIsSymbol,
  txOutRefFromString,
  txOutRefIsSymbol,
  txOutRefToString,
  txOutRefToUrlEncodedString,
  unsafeDecodeTextEnvelope,
  utxoIsSymbol,
  valueIsSymbol,
  versionIsSymbol,
  withdrawalsApi
};
