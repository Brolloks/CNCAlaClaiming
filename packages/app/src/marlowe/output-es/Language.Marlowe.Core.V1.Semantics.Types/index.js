import * as $runtime from "../runtime.js";
import * as Control$dMonad$dRWS$dTrans from "../Control.Monad.RWS.Trans/index.js";
import * as Control$dMonad$dReader$dTrans from "../Control.Monad.Reader.Trans/index.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dArgonaut$dDecode$dClass from "../Data.Argonaut.Decode.Class/index.js";
import * as Data$dArgonaut$dDecode$dDecoders from "../Data.Argonaut.Decode.Decoders/index.js";
import * as Data$dArgonaut$dDecode$dError from "../Data.Argonaut.Decode.Error/index.js";
import * as Data$dArgonaut$dEncode$dClass from "../Data.Argonaut.Encode.Class/index.js";
import * as Data$dArgonaut$dEncode$dEncoders from "../Data.Argonaut.Encode.Encoders/index.js";
import * as Data$dArgonaut$dExtra from "../Data.Argonaut.Extra/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dBigInt from "../Data.BigInt/index.js";
import * as Data$dBigInt$dArgonaut from "../Data.BigInt.Argonaut/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dLens$dIso$dNewtype from "../Data.Lens.Iso.Newtype/index.js";
import * as Data$dLens$dRecord from "../Data.Lens.Record/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
import * as Marlowe$dTime from "../Marlowe.Time/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const $Action = (tag, _1, _2, _3, _4) => ({tag, _1, _2, _3, _4});
const $ApplyAllResult = (tag, _1, _2, _3, _4, _5) => ({tag, _1, _2, _3, _4, _5});
const $ApplyResult = (tag, _1, _2, _3) => ({tag, _1, _2, _3});
const $ApplyWarning = (tag, _1, _2, _3, _4) => ({tag, _1, _2, _3, _4});
const $Bound = (_1, _2) => ({tag: "Bound", _1, _2});
const $Case = (tag, _1, _2) => ({tag, _1, _2});
const $ChoiceId = (_1, _2) => ({tag: "ChoiceId", _1, _2});
const $Contract = (tag, _1, _2, _3, _4, _5) => ({tag, _1, _2, _3, _4, _5});
const $Input = (tag, _1, _2, _3) => ({tag, _1, _2, _3});
const $InputContent = (tag, _1, _2, _3, _4) => ({tag, _1, _2, _3, _4});
const $IntervalError = (tag, _1, _2) => ({tag, _1, _2});
const $IntervalResult = (tag, _1, _2) => ({tag, _1, _2});
const $Observation = (tag, _1, _2) => ({tag, _1, _2});
const $Party = (tag, _1) => ({tag, _1});
const $Payee = (tag, _1) => ({tag, _1});
const $Payment = (_1, _2, _3, _4) => ({tag: "Payment", _1, _2, _3, _4});
const $Rational = (_1, _2) => ({tag: "Rational", _1, _2});
const $ReduceEffect = (tag, _1) => ({tag, _1});
const $ReduceResult = (tag, _1, _2, _3, _4, _5) => ({tag, _1, _2, _3, _4, _5});
const $ReduceStepResult = (tag, _1, _2, _3, _4) => ({tag, _1, _2, _3, _4});
const $ReduceWarning = (tag, _1, _2, _3, _4, _5) => ({tag, _1, _2, _3, _4, _5});
const $TimeInterval = (_1, _2) => ({tag: "TimeInterval", _1, _2});
const $Token = (_1, _2) => ({tag: "Token", _1, _2});
const $TransactionError = (tag, _1) => ({tag, _1});
const $TransactionOutput = (tag, _1) => ({tag, _1});
const $TransactionWarning = (tag, _1, _2, _3, _4, _5) => ({tag, _1, _2, _3, _4, _5});
const $Value = (tag, _1, _2, _3) => ({tag, _1, _2, _3});
const toIsSymbol = {reflectSymbol: () => "to"};
const fromIsSymbol = {reflectSymbol: () => "from"};
const encodeRecord = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(toIsSymbol)())(fromIsSymbol)();
  return {encodeJson: rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy))};
})();
const minTimeIsSymbol = {reflectSymbol: () => "minTime"};
const rolePayoutValidatorHashIsSymbol = {reflectSymbol: () => "rolePayoutValidatorHash"};
const rolesCurrencyIsSymbol = {reflectSymbol: () => "rolesCurrency"};
const unCurrencySymbolIsSymbol = {reflectSymbol: () => "unCurrencySymbol"};
const minimum = /* #__PURE__ */ (() => Data$dFoldable.minimumBy(Data$dFoldable.foldableArray)(Data$dOrd.ordNumber.compare))();
const genericShowArgsArgument = {genericShowArgs: v => [Data$dShow.showStringImpl(v)]};
const genericShowArgsArgument1 = {genericShowArgs: v => ["(fromString \"" + Data$dBigInt.toString(v) + "\")"]};
const genericShowArgsProduct1 = /* #__PURE__ */ Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument1)(genericShowArgsArgument1);
const accountsIsSymbol = {reflectSymbol: () => "accounts"};
const boundValuesIsSymbol = {reflectSymbol: () => "boundValues"};
const choicesIsSymbol = {reflectSymbol: () => "choices"};
const genericShowSum = /* #__PURE__ */ (() => {
  const $0 = Data$dShow$dGeneric.genericShowConstructor(genericShowArgsArgument1)({reflectSymbol: () => "Constant"});
  return dictGenericShow1 => (
    {
      "genericShow'": v => {
        if (v.tag === "Inl") { return $0["genericShow'"](v._1); }
        if (v.tag === "Inr") { return dictGenericShow1["genericShow'"](v._1); }
        $runtime.fail();
      }
    }
  );
})();
const NegValueIsSymbol = {reflectSymbol: () => "NegValue"};
const AddValueIsSymbol = {reflectSymbol: () => "AddValue"};
const SubValueIsSymbol = {reflectSymbol: () => "SubValue"};
const MulValueIsSymbol = {reflectSymbol: () => "MulValue"};
const DivValueIsSymbol = {reflectSymbol: () => "DivValue"};
const genericShowSum1 = /* #__PURE__ */ (() => {
  const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "TimeIntervalStart"});
  return dictGenericShow1 => (
    {
      "genericShow'": v => {
        if (v.tag === "Inl") { return $0["genericShow'"](v._1); }
        if (v.tag === "Inr") { return dictGenericShow1["genericShow'"](v._1); }
        $runtime.fail();
      }
    }
  );
})();
const genericShowSum2 = /* #__PURE__ */ (() => {
  const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "TimeIntervalEnd"});
  return dictGenericShow1 => (
    {
      "genericShow'": v => {
        if (v.tag === "Inl") { return $0["genericShow'"](v._1); }
        if (v.tag === "Inr") { return dictGenericShow1["genericShow'"](v._1); }
        $runtime.fail();
      }
    }
  );
})();
const CondIsSymbol = {reflectSymbol: () => "Cond"};
const AndObsIsSymbol = {reflectSymbol: () => "AndObs"};
const OrObsIsSymbol = {reflectSymbol: () => "OrObs"};
const NotObsIsSymbol = {reflectSymbol: () => "NotObs"};
const ValueGEIsSymbol = {reflectSymbol: () => "ValueGE"};
const ValueGTIsSymbol = {reflectSymbol: () => "ValueGT"};
const ValueLTIsSymbol = {reflectSymbol: () => "ValueLT"};
const ValueLEIsSymbol = {reflectSymbol: () => "ValueLE"};
const ValueEQIsSymbol = {reflectSymbol: () => "ValueEQ"};
const genericShowSum3 = /* #__PURE__ */ (() => {
  const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "TrueObs"});
  const $1 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "FalseObs"});
  return {
    "genericShow'": v => {
      if (v.tag === "Inl") { return $0["genericShow'"](v._1); }
      if (v.tag === "Inr") { return $1["genericShow'"](v._1); }
      $runtime.fail();
    }
  };
})();
const timeIntervalIsSymbol = {reflectSymbol: () => "timeInterval"};
const encodeJson1 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeRecord)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({reflectSymbol: () => "invalidInterval"})();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const encodeJson2 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons((() => {
    const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(toIsSymbol)())(minTimeIsSymbol)())(fromIsSymbol)();
    return {encodeJson: rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy))};
  })())(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({reflectSymbol: () => "intervalInPastError"})();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const encodeJson4 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
    reflectSymbol: () => "error"
  })())({reflectSymbol: () => "context"})();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const genericShowSum4 = /* #__PURE__ */ (() => {
  const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "Close"});
  return dictGenericShow1 => (
    {
      "genericShow'": v => {
        if (v.tag === "Inl") { return $0["genericShow'"](v._1); }
        if (v.tag === "Inr") { return dictGenericShow1["genericShow'"](v._1); }
        $runtime.fail();
      }
    }
  );
})();
const PayIsSymbol = {reflectSymbol: () => "Pay"};
const IfIsSymbol = {reflectSymbol: () => "If"};
const WhenIsSymbol = {reflectSymbol: () => "When"};
const LetIsSymbol = {reflectSymbol: () => "Let"};
const AssertIsSymbol = {reflectSymbol: () => "Assert"};
const marloweContractIsSymbol = {reflectSymbol: () => "marloweContract"};
const marloweStateIsSymbol = {reflectSymbol: () => "marloweState"};
const eq3 = /* #__PURE__ */ (() => Data$dMap$dInternal.eqMap(Data$dEq.eqString)(Data$dMap$dInternal.eqMap(Data$dEq.eqString)(Data$dBigInt$dArgonaut.eqBigInt)).eq)();
const ordMap = /* #__PURE__ */ Data$dMap$dInternal.ordMap(Data$dOrd.ordString);
const compare3 = /* #__PURE__ */ (() => ordMap(ordMap(Data$dBigInt$dArgonaut.ordBigInt)).compare)();
const encodeJson5 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
    reflectSymbol: () => "token_name"
  })())({reflectSymbol: () => "currency_symbol"})();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const encodeJson6 = /* #__PURE__ */ (() => Data$dArgonaut$dEncode$dClass.encodeJsonArray(Data$dBigInt$dArgonaut.encodeJsonBitInt).encodeJson)();
const encodeJson7 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
    reflectSymbol: () => "address"
  })();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const encodeJson8 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
    reflectSymbol: () => "role_token"
  })();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const accountIsSymbol = {reflectSymbol: () => "account"};
const of_tokenIsSymbol = {reflectSymbol: () => "of_token"};
const in_accountIsSymbol = {reflectSymbol: () => "in_account"};
const asked_to_payIsSymbol = {reflectSymbol: () => "asked_to_pay"};
const into_accountIsSymbol = {reflectSymbol: () => "into_account"};
const negateIsSymbol = {reflectSymbol: () => "negate"};
const andIsSymbol = {reflectSymbol: () => "and"};
const addIsSymbol = {reflectSymbol: () => "add"};
const valueIsSymbol = {reflectSymbol: () => "value"};
const minusIsSymbol = {reflectSymbol: () => "minus"};
const timesIsSymbol = {reflectSymbol: () => "times"};
const multiplyIsSymbol = {reflectSymbol: () => "multiply"};
const divideIsSymbol = {reflectSymbol: () => "divide"};
const byIsSymbol = {reflectSymbol: () => "by"};
const thenIsSymbol = {reflectSymbol: () => "then"};
const ifIsSymbol = {reflectSymbol: () => "if"};
const elseIsSymbol = {reflectSymbol: () => "else"};
const bothIsSymbol = {reflectSymbol: () => "both"};
const orIsSymbol = {reflectSymbol: () => "or"};
const eitherIsSymbol = {reflectSymbol: () => "either"};
const notIsSymbol = {reflectSymbol: () => "not"};
const ge_thanIsSymbol = {reflectSymbol: () => "ge_than"};
const gtIsSymbol = {reflectSymbol: () => "gt"};
const ltIsSymbol = {reflectSymbol: () => "lt"};
const le_thanIsSymbol = {reflectSymbol: () => "le_than"};
const equal_toIsSymbol = {reflectSymbol: () => "equal_to"};
const encodeJson11 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dBigInt$dArgonaut.encodeJsonBitInt)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dBigInt$dArgonaut.encodeJsonBitInt)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(toIsSymbol)())(fromIsSymbol)();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const payIsSymbol = {reflectSymbol: () => "pay"};
const from_accountIsSymbol = {reflectSymbol: () => "from_account"};
const whenIsSymbol = {reflectSymbol: () => "when"};
const timeout_continuationIsSymbol = {reflectSymbol: () => "timeout_continuation"};
const timeoutIsSymbol = {reflectSymbol: () => "timeout"};
const letIsSymbol = {reflectSymbol: () => "let"};
const beIsSymbol = {reflectSymbol: () => "be"};
const assertIsSymbol = {reflectSymbol: () => "assert"};
const caseIsSymbol = {reflectSymbol: () => "case"};
const encodeJson12 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
    reflectSymbol: () => "merkleized_continuation"
  })())({reflectSymbol: () => "continuation_hash"})();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const encodeJson13 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
    reflectSymbol: () => "transaction_error"
  })();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const encodeJson14 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
    reflectSymbol: () => "warnings"
  })())({reflectSymbol: () => "state"})())({reflectSymbol: () => "payments"})())({reflectSymbol: () => "contract"})();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
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
const bindReaderT = /* #__PURE__ */ Control$dMonad$dReader$dTrans.bindReaderT(Data$dEither.bindEither);
const caseConstantFrom = /* #__PURE__ */ Data$dArgonaut$dExtra.caseConstantFrom(Data$dOrd.ordString)(Data$dShow.showString)(Data$dArgonaut$dDecode$dClass.decodeJsonString);
const fromFoldable = /* #__PURE__ */ Data$dMap$dInternal.fromFoldable(Data$dOrd.ordBoolean)(Data$dFoldable.foldableArray);
const caseConstantFrom1 = /* #__PURE__ */ Data$dArgonaut$dExtra.caseConstantFrom(Data$dOrd.ordBoolean)(Data$dShow.showBoolean)(Data$dArgonaut$dDecode$dClass.decodeJsonBoolean);
const decodeMap = /* #__PURE__ */ Data$dArgonaut$dDecode$dClass.decodeMap(Data$dOrd.ordString)(Data$dArgonaut$dDecode$dClass.decodeJsonString);
const ValueId = x => x;
const Timeouts = x => x;
const TimeInterval = value0 => value1 => $TimeInterval(value0, value1);
const Rational = value0 => value1 => $Rational(value0, value1);
const InvalidInterval = value0 => $IntervalError("InvalidInterval", value0);
const IntervalInPastError = value0 => value1 => $IntervalError("IntervalInPastError", value0, value1);
const TEAmbiguousTimeIntervalError = /* #__PURE__ */ $TransactionError("TEAmbiguousTimeIntervalError");
const TEApplyNoMatchError = /* #__PURE__ */ $TransactionError("TEApplyNoMatchError");
const TEIntervalError = value0 => $TransactionError("TEIntervalError", value0);
const TEUselessTransaction = /* #__PURE__ */ $TransactionError("TEUselessTransaction");
const TEHashMismatch = /* #__PURE__ */ $TransactionError("TEHashMismatch");
const Environment = x => x;
const MarloweParams = x => x;
const Token = value0 => value1 => $Token(value0, value1);
const Bound = value0 => value1 => $Bound(value0, value1);
const Assets = x => x;
const Address = value0 => $Party("Address", value0);
const Role = value0 => $Party("Role", value0);
const ChoiceId = value0 => value1 => $ChoiceId(value0, value1);
const Lovelace = x => x;
const State = x => x;
const IntervalTrimmed = value0 => value1 => $IntervalResult("IntervalTrimmed", value0, value1);
const IntervalError = value0 => $IntervalResult("IntervalError", value0);
const ApplyNoWarning = /* #__PURE__ */ $ApplyWarning("ApplyNoWarning");
const ApplyNonPositiveDeposit = value0 => value1 => value2 => value3 => $ApplyWarning("ApplyNonPositiveDeposit", value0, value1, value2, value3);
const IDeposit = value0 => value1 => value2 => value3 => $InputContent("IDeposit", value0, value1, value2, value3);
const IChoice = value0 => value1 => $InputContent("IChoice", value0, value1);
const INotify = /* #__PURE__ */ $InputContent("INotify");
const Account = value0 => $Payee("Account", value0);
const Party = value0 => $Payee("Party", value0);
const Payment = value0 => value1 => value2 => value3 => $Payment(value0, value1, value2, value3);
const ReduceWithPayment = value0 => $ReduceEffect("ReduceWithPayment", value0);
const ReduceNoPayment = /* #__PURE__ */ $ReduceEffect("ReduceNoPayment");
const ReduceNoWarning = /* #__PURE__ */ $ReduceWarning("ReduceNoWarning");
const ReduceNonPositivePay = value0 => value1 => value2 => value3 => $ReduceWarning("ReduceNonPositivePay", value0, value1, value2, value3);
const ReducePartialPay = value0 => value1 => value2 => value3 => value4 => $ReduceWarning("ReducePartialPay", value0, value1, value2, value3, value4);
const ReduceShadowing = value0 => value1 => value2 => $ReduceWarning("ReduceShadowing", value0, value1, value2);
const ReduceAssertionFailed = /* #__PURE__ */ $ReduceWarning("ReduceAssertionFailed");
const TransactionNonPositiveDeposit = value0 => value1 => value2 => value3 => $TransactionWarning("TransactionNonPositiveDeposit", value0, value1, value2, value3);
const TransactionNonPositivePay = value0 => value1 => value2 => value3 => $TransactionWarning("TransactionNonPositivePay", value0, value1, value2, value3);
const TransactionPartialPay = value0 => value1 => value2 => value3 => value4 => $TransactionWarning("TransactionPartialPay", value0, value1, value2, value3, value4);
const TransactionShadowing = value0 => value1 => value2 => $TransactionWarning("TransactionShadowing", value0, value1, value2);
const TransactionAssertionFailed = /* #__PURE__ */ $TransactionWarning("TransactionAssertionFailed");
const AvailableMoney = value0 => value1 => $Value("AvailableMoney", value0, value1);
const Constant = value0 => $Value("Constant", value0);
const NegValue = value0 => $Value("NegValue", value0);
const AddValue = value0 => value1 => $Value("AddValue", value0, value1);
const SubValue = value0 => value1 => $Value("SubValue", value0, value1);
const MulValue = value0 => value1 => $Value("MulValue", value0, value1);
const DivValue = value0 => value1 => $Value("DivValue", value0, value1);
const ChoiceValue = value0 => $Value("ChoiceValue", value0);
const TimeIntervalStart = /* #__PURE__ */ $Value("TimeIntervalStart");
const TimeIntervalEnd = /* #__PURE__ */ $Value("TimeIntervalEnd");
const UseValue = value0 => $Value("UseValue", value0);
const Cond = value0 => value1 => value2 => $Value("Cond", value0, value1, value2);
const AndObs = value0 => value1 => $Observation("AndObs", value0, value1);
const OrObs = value0 => value1 => $Observation("OrObs", value0, value1);
const NotObs = value0 => $Observation("NotObs", value0);
const ChoseSomething = value0 => $Observation("ChoseSomething", value0);
const ValueGE = value0 => value1 => $Observation("ValueGE", value0, value1);
const ValueGT = value0 => value1 => $Observation("ValueGT", value0, value1);
const ValueLT = value0 => value1 => $Observation("ValueLT", value0, value1);
const ValueLE = value0 => value1 => $Observation("ValueLE", value0, value1);
const ValueEQ = value0 => value1 => $Observation("ValueEQ", value0, value1);
const TrueObs = /* #__PURE__ */ $Observation("TrueObs");
const FalseObs = /* #__PURE__ */ $Observation("FalseObs");
const Deposit = value0 => value1 => value2 => value3 => $Action("Deposit", value0, value1, value2, value3);
const Choice = value0 => value1 => $Action("Choice", value0, value1);
const Notify = value0 => $Action("Notify", value0);
const Close = /* #__PURE__ */ $Contract("Close");
const Pay = value0 => value1 => value2 => value3 => value4 => $Contract("Pay", value0, value1, value2, value3, value4);
const If = value0 => value1 => value2 => $Contract("If", value0, value1, value2);
const When = value0 => value1 => value2 => $Contract("When", value0, value1, value2);
const Let = value0 => value1 => value2 => $Contract("Let", value0, value1, value2);
const Assert = value0 => value1 => $Contract("Assert", value0, value1);
const Case = value0 => value1 => $Case("Case", value0, value1);
const MerkleizedCase = value0 => value1 => $Case("MerkleizedCase", value0, value1);
const ApplyAllSuccess = value0 => value1 => value2 => value3 => value4 => $ApplyAllResult("ApplyAllSuccess", value0, value1, value2, value3, value4);
const ApplyAllNoMatchError = /* #__PURE__ */ $ApplyAllResult("ApplyAllNoMatchError");
const ApplyAllAmbiguousTimeIntervalError = /* #__PURE__ */ $ApplyAllResult("ApplyAllAmbiguousTimeIntervalError");
const ApplyAllHashMismatch = /* #__PURE__ */ $ApplyAllResult("ApplyAllHashMismatch");
const Applied = value0 => value1 => value2 => $ApplyResult("Applied", value0, value1, value2);
const ApplyNoMatchError = /* #__PURE__ */ $ApplyResult("ApplyNoMatchError");
const ApplyHashMismatch = /* #__PURE__ */ $ApplyResult("ApplyHashMismatch");
const NormalInput = value0 => $Input("NormalInput", value0);
const MerkleizedInput = value0 => value1 => value2 => $Input("MerkleizedInput", value0, value1, value2);
const TransactionInput = x => x;
const MarloweData = x => x;
const ContractQuiescent = value0 => value1 => value2 => value3 => value4 => $ReduceResult("ContractQuiescent", value0, value1, value2, value3, value4);
const RRAmbiguousTimeIntervalError = /* #__PURE__ */ $ReduceResult("RRAmbiguousTimeIntervalError");
const Reduced = value0 => value1 => value2 => value3 => $ReduceStepResult("Reduced", value0, value1, value2, value3);
const NotReduced = /* #__PURE__ */ $ReduceStepResult("NotReduced");
const AmbiguousTimeIntervalReductionError = /* #__PURE__ */ $ReduceStepResult("AmbiguousTimeIntervalReductionError");
const TransactionOutput = value0 => $TransactionOutput("TransactionOutput", value0);
const $$Error = value0 => $TransactionOutput("Error", value0);
const newtypeMarloweData_ = {Coercible0: () => {}};
const genericMarloweData_ = {to: x => x, from: x => x};
const encodeJsonTimeInterval = {encodeJson: v => encodeRecord.encodeJson({from: Data$dArgonaut$dCore.fromNumber(v._1), to: Data$dArgonaut$dCore.fromNumber(v._2)})};
const decodeJsonTimeInterval = {
  decodeJson: json => {
    const $0 = Data$dArgonaut$dDecode$dDecoders.decodeJObject(json);
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
      const $1 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dEither.Right)(obj)("from");
      const $2 = (() => {
        if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
        if ($1.tag === "Right") { return Marlowe$dTime.instantFromJson($1._1); }
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
      })()(from => {
        const $3 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dEither.Right)(obj)("to");
        const $4 = (() => {
          if ($3.tag === "Left") { return Data$dEither.$Either("Left", $3._1); }
          if ($3.tag === "Right") { return Marlowe$dTime.instantFromJson($3._1); }
          $runtime.fail();
        })();
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
        })()(to => Data$dEither.$Either("Right", $TimeInterval(from, to)));
      });
    });
  }
};
const decodeJsonEnvironment = {
  decodeJson: json => {
    const $0 = Data$dArgonaut$dDecode$dDecoders.decodeJObject(json);
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
      const $1 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dEither.Right)(obj)("timeInterval");
      const $2 = (() => {
        if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
        if ($1.tag === "Right") { return decodeJsonTimeInterval.decodeJson($1._1); }
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
      })()(timeInterval => Data$dEither.$Either("Right", {timeInterval}));
    });
  }
};
const timeouts = dict => dict.timeouts;
const showValueId = {show: v => Data$dShow.showStringImpl(v)};
const genericShowArgsArgument2 = {genericShowArgs: v => [Data$dShow.showStringImpl(v)]};
const genericShowSum5 = /* #__PURE__ */ (() => {
  const $0 = Data$dShow$dGeneric.genericShowConstructor(genericShowArgsArgument2)({reflectSymbol: () => "UseValue"});
  return dictGenericShow1 => (
    {
      "genericShow'": v => {
        if (v.tag === "Inl") { return $0["genericShow'"](v._1); }
        if (v.tag === "Inr") { return dictGenericShow1["genericShow'"](v._1); }
        $runtime.fail();
      }
    }
  );
})();
const showTimeouts = {
  show: record => "{ maxTime: (Instant (Milliseconds " + Data$dShow.showNumberImpl(record.maxTime) + "))," + (() => {
    if (record.minTime.tag === "Just") { return " minTime: (Just (Instant (Milliseconds " + Data$dShow.showNumberImpl(record.minTime._1) + ")))"; }
    if (record.minTime.tag === "Nothing") { return " minTime: Nothing"; }
    $runtime.fail();
  })() + " }"
};
const showTimeInterval = {
  show: v => "(TimeInterval (Instant (Milliseconds " + Data$dShow.showNumberImpl(v._1) + ")) (Instant (Milliseconds " + Data$dShow.showNumberImpl(v._2) + ")))"
};
const showRational = {show: v => "(" + Data$dBigInt.toString(v._1) + "%" + Data$dBigInt.toString(v._2) + ")"};
const showMarloweParams = {
  show: record => "{ rolePayoutValidatorHash: " + Data$dShow.showStringImpl(record.rolePayoutValidatorHash) + ", rolesCurrency: { unCurrencySymbol: " + Data$dShow.showStringImpl(record.rolesCurrency.unCurrencySymbol) + " } }"
};
const showIntervalError = {
  show: v => {
    if (v.tag === "InvalidInterval") { return "Invalid interval: " + showTimeInterval.show(v._1); }
    if (v.tag === "IntervalInPastError") {
      return "Interval is in the past, the current time is (Instant (Milliseconds " + Data$dShow.showNumberImpl(v._1) + ")) but the interval is " + showTimeInterval.show(v._2);
    }
    $runtime.fail();
  }
};
const showTransactionError = {
  show: v => {
    if (v.tag === "TEAmbiguousTimeIntervalError") { return "Ambiguous time interval"; }
    if (v.tag === "TEApplyNoMatchError") { return "At least one of the inputs in the transaction is not allowed by the contract"; }
    if (v.tag === "TEIntervalError") { return showIntervalError.show(v._1); }
    if (v.tag === "TEUselessTransaction") { return "Useless Transaction"; }
    if (v.tag === "TEHashMismatch") { return "Merkleization Hash mismatch"; }
    $runtime.fail();
  }
};
const showBound = {show: v => "(Bound " + Data$dBigInt.toString(v._1) + " " + Data$dBigInt.toString(v._2) + ")"};
const showArray = /* #__PURE__ */ (() => ({show: Data$dShow.showArrayImpl(showBound.show)}))();
const showAssets = /* #__PURE__ */ Data$dMap$dInternal.showMap(Data$dShow.showString)(/* #__PURE__ */ Data$dMap$dInternal.showMap(Data$dShow.showString)(Data$dBigInt.showBigInt));
const showAda = {show: v => Data$dBigInt.toString(v)};
const semiringAda = Data$dBigInt.semiringBigInt;
const semigroupAssets = {append: v => v1 => Data$dMap$dInternal.unionWith(Data$dOrd.ordString)(Data$dMap$dInternal.unionWith(Data$dOrd.ordString)(Data$dBigInt.biAdd))(v)(v1)};
const ringAda = Data$dBigInt.ringBigInt;
const newtypeValueId = {Coercible0: () => {}};
const newtypeTransactionInput = {Coercible0: () => {}};
const newtypeTimeouts = {Coercible0: () => {}};
const newtypeState = {Coercible0: () => {}};
const newtypeMarloweParams = {Coercible0: () => {}};
const newtypeEnvironment = {Coercible0: () => {}};
const newtypeAssets = {Coercible0: () => {}};
const newtypeAda = {Coercible0: () => {}};
const monoidAssets = {mempty: Data$dMap$dInternal.Leaf, Semigroup0: () => semigroupAssets};
const minOf = as => minimum(Data$dArray.mapMaybe(x => x)(as));
const maxOf = /* #__PURE__ */ (() => {
  const $0 = Data$dFoldable.maximumBy(Data$dFoldable.foldableArray)(Data$dOrd.ordNumber.compare);
  return x => {
    const $1 = $0(x);
    if ($1.tag === "Nothing") { return Marlowe$dTime.unixEpoch; }
    if ($1.tag === "Just") { return $1._1; }
    $runtime.fail();
  };
})();
const ivTo = v => v._2;
const ivFrom = v => v._1;
const hasTimeoutArrayOfTimeouts = {
  timeouts: ts => ({maxTime: maxOf(Data$dFunctor.arrayMap(x => x.maxTime)(ts)), minTime: minimum(Data$dArray.mapMaybe(x => x)(Data$dFunctor.arrayMap(x => x.minTime)(ts)))})
};
const hasTimeoutArray = dictHasTimeout => {
  const timeouts2 = dictHasTimeout.timeouts;
  return {timeouts: vs => hasTimeoutArrayOfTimeouts.timeouts(Data$dFunctor.arrayMap(timeouts2)(vs))};
};
const hasTimeoutContract = {
  timeouts: v => {
    if (v.tag === "Close") { return {maxTime: Marlowe$dTime.unixEpoch, minTime: Data$dMaybe.Nothing}; }
    if (v.tag === "Pay") { return hasTimeoutContract.timeouts(v._5); }
    if (v.tag === "If") { return hasTimeoutArrayOfTimeouts.timeouts(Data$dFunctor.arrayMap(hasTimeoutContract.timeouts)([v._2, v._3])); }
    if (v.tag === "When") {
      const $0 = v._2;
      return hasTimeoutArrayOfTimeouts.timeouts([
        hasTimeoutArrayOfTimeouts.timeouts(Data$dFunctor.arrayMap(v1 => {
          if (v1.tag === "Case") { return hasTimeoutContract.timeouts(v1._2); }
          if (v1.tag === "MerkleizedCase") { return {maxTime: $0, minTime: Data$dMaybe.Nothing}; }
          $runtime.fail();
        })(v._1)),
        {maxTime: $0, minTime: Data$dMaybe.$Maybe("Just", $0)},
        hasTimeoutContract.timeouts(v._3)
      ]);
    }
    if (v.tag === "Let") { return hasTimeoutContract.timeouts(v._3); }
    if (v.tag === "Assert") { return hasTimeoutContract.timeouts(v._2); }
    $runtime.fail();
  }
};
const getInputContent = v => {
  if (v.tag === "NormalInput") { return v._1; }
  if (v.tag === "MerkleizedInput") { return v._1; }
  $runtime.fail();
};
const getAction = v => {
  if (v.tag === "Case") { return v._1; }
  if (v.tag === "MerkleizedCase") { return v._1; }
  $runtime.fail();
};
const genericValueId = {to: x => x, from: x => x};
const genericValue = {
  to: x => {
    if (x.tag === "Inl") { return $Value("AvailableMoney", x._1._1, x._1._2); }
    if (x.tag === "Inr") {
      if (x._1.tag === "Inl") { return $Value("Constant", x._1._1); }
      if (x._1.tag === "Inr") {
        if (x._1._1.tag === "Inl") { return $Value("NegValue", x._1._1._1); }
        if (x._1._1.tag === "Inr") {
          if (x._1._1._1.tag === "Inl") { return $Value("AddValue", x._1._1._1._1._1, x._1._1._1._1._2); }
          if (x._1._1._1.tag === "Inr") {
            if (x._1._1._1._1.tag === "Inl") { return $Value("SubValue", x._1._1._1._1._1._1, x._1._1._1._1._1._2); }
            if (x._1._1._1._1.tag === "Inr") {
              if (x._1._1._1._1._1.tag === "Inl") { return $Value("MulValue", x._1._1._1._1._1._1._1, x._1._1._1._1._1._1._2); }
              if (x._1._1._1._1._1.tag === "Inr") {
                if (x._1._1._1._1._1._1.tag === "Inl") { return $Value("DivValue", x._1._1._1._1._1._1._1._1, x._1._1._1._1._1._1._1._2); }
                if (x._1._1._1._1._1._1.tag === "Inr") {
                  if (x._1._1._1._1._1._1._1.tag === "Inl") { return $Value("ChoiceValue", x._1._1._1._1._1._1._1._1); }
                  if (x._1._1._1._1._1._1._1.tag === "Inr") {
                    if (x._1._1._1._1._1._1._1._1.tag === "Inl") { return TimeIntervalStart; }
                    if (x._1._1._1._1._1._1._1._1.tag === "Inr") {
                      if (x._1._1._1._1._1._1._1._1._1.tag === "Inl") { return TimeIntervalEnd; }
                      if (x._1._1._1._1._1._1._1._1._1.tag === "Inr") {
                        if (x._1._1._1._1._1._1._1._1._1._1.tag === "Inl") { return $Value("UseValue", x._1._1._1._1._1._1._1._1._1._1._1); }
                        if (x._1._1._1._1._1._1._1._1._1._1.tag === "Inr") {
                          return $Value("Cond", x._1._1._1._1._1._1._1._1._1._1._1._1, x._1._1._1._1._1._1._1._1._1._1._1._2._1, x._1._1._1._1._1._1._1._1._1._1._1._2._2);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "AvailableMoney") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, x._2)); }
    if (x.tag === "Constant") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", x._1)); }
    if (x.tag === "NegValue") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", x._1))); }
    if (x.tag === "AddValue") {
      return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, x._2)))));
    }
    if (x.tag === "SubValue") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, x._2)))))
      );
    }
    if (x.tag === "MulValue") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, x._2)))))
        )
      );
    }
    if (x.tag === "DivValue") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, x._2)))))
          )
        )
      );
    }
    if (x.tag === "ChoiceValue") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", x._1)))))
          )
        )
      );
    }
    if (x.tag === "TimeIntervalStart") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum(
              "Inr",
              Data$dGeneric$dRep.$Sum(
                "Inr",
                Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments))))
              )
            )
          )
        )
      );
    }
    if (x.tag === "TimeIntervalEnd") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum(
              "Inr",
              Data$dGeneric$dRep.$Sum(
                "Inr",
                Data$dGeneric$dRep.$Sum(
                  "Inr",
                  Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments))))
                )
              )
            )
          )
        )
      );
    }
    if (x.tag === "UseValue") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum(
              "Inr",
              Data$dGeneric$dRep.$Sum(
                "Inr",
                Data$dGeneric$dRep.$Sum(
                  "Inr",
                  Data$dGeneric$dRep.$Sum(
                    "Inr",
                    Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", x._1))))
                  )
                )
              )
            )
          )
        )
      );
    }
    if (x.tag === "Cond") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum(
              "Inr",
              Data$dGeneric$dRep.$Sum(
                "Inr",
                Data$dGeneric$dRep.$Sum(
                  "Inr",
                  Data$dGeneric$dRep.$Sum(
                    "Inr",
                    Data$dGeneric$dRep.$Sum(
                      "Inr",
                      Data$dGeneric$dRep.$Sum(
                        "Inr",
                        Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Product(x._1, Data$dGeneric$dRep.$Product(x._2, x._3))))
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
    $runtime.fail();
  }
};
const genericTransactionWarning = {
  to: x => {
    if (x.tag === "Inl") { return $TransactionWarning("TransactionNonPositiveDeposit", x._1._1, x._1._2._1, x._1._2._2._1, x._1._2._2._2); }
    if (x.tag === "Inr") {
      if (x._1.tag === "Inl") { return $TransactionWarning("TransactionNonPositivePay", x._1._1._1, x._1._1._2._1, x._1._1._2._2._1, x._1._1._2._2._2); }
      if (x._1.tag === "Inr") {
        if (x._1._1.tag === "Inl") {
          return $TransactionWarning("TransactionPartialPay", x._1._1._1._1, x._1._1._1._2._1, x._1._1._1._2._2._1, x._1._1._1._2._2._2._1, x._1._1._1._2._2._2._2);
        }
        if (x._1._1.tag === "Inr") {
          if (x._1._1._1.tag === "Inl") { return $TransactionWarning("TransactionShadowing", x._1._1._1._1._1, x._1._1._1._1._2._1, x._1._1._1._1._2._2); }
          if (x._1._1._1.tag === "Inr") { return TransactionAssertionFailed; }
        }
      }
    }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "TransactionNonPositiveDeposit") {
      return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, Data$dGeneric$dRep.$Product(x._2, Data$dGeneric$dRep.$Product(x._3, x._4))));
    }
    if (x.tag === "TransactionNonPositivePay") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, Data$dGeneric$dRep.$Product(x._2, Data$dGeneric$dRep.$Product(x._3, x._4))))
      );
    }
    if (x.tag === "TransactionPartialPay") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inl",
            Data$dGeneric$dRep.$Product(x._1, Data$dGeneric$dRep.$Product(x._2, Data$dGeneric$dRep.$Product(x._3, Data$dGeneric$dRep.$Product(x._4, x._5))))
          )
        )
      );
    }
    if (x.tag === "TransactionShadowing") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, Data$dGeneric$dRep.$Product(x._2, x._3)))))
      );
    }
    if (x.tag === "TransactionAssertionFailed") {
      return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments))));
    }
    $runtime.fail();
  }
};
const genericTransactionOutput = {
  to: x => {
    if (x.tag === "Inl") { return $TransactionOutput("TransactionOutput", x._1); }
    if (x.tag === "Inr") { return $TransactionOutput("Error", x._1); }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "TransactionOutput") { return Data$dGeneric$dRep.$Sum("Inl", x._1); }
    if (x.tag === "Error") { return Data$dGeneric$dRep.$Sum("Inr", x._1); }
    $runtime.fail();
  }
};
const genericTransactionInput = {to: x => x, from: x => x};
const genericTransactionError = {
  to: x => {
    if (x.tag === "Inl") { return TEAmbiguousTimeIntervalError; }
    if (x.tag === "Inr") {
      if (x._1.tag === "Inl") { return TEApplyNoMatchError; }
      if (x._1.tag === "Inr") {
        if (x._1._1.tag === "Inl") { return $TransactionError("TEIntervalError", x._1._1._1); }
        if (x._1._1.tag === "Inr") {
          if (x._1._1._1.tag === "Inl") { return TEUselessTransaction; }
          if (x._1._1._1.tag === "Inr") { return TEHashMismatch; }
        }
      }
    }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "TEAmbiguousTimeIntervalError") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments); }
    if (x.tag === "TEApplyNoMatchError") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)); }
    if (x.tag === "TEIntervalError") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", x._1))); }
    if (x.tag === "TEUselessTransaction") {
      return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments))));
    }
    if (x.tag === "TEHashMismatch") {
      return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments))));
    }
    $runtime.fail();
  }
};
const genericToken = {to: x => $Token(x._1, x._2), from: x => Data$dGeneric$dRep.$Product(x._1, x._2)};
const genericShow1 = /* #__PURE__ */ (() => {
  const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument)(genericShowArgsArgument))({reflectSymbol: () => "Token"});
  return x => $0["genericShow'"](Data$dGeneric$dRep.$Product(x._1, x._2));
})();
const showToken = {show: v => genericShow1($Token(Data$dString$dCommon.toLower(v._1), v._2))};
const genericShowArgsArgument3 = {genericShowArgs: v => [genericShow1($Token(Data$dString$dCommon.toLower(v._1), v._2))]};
const genericShowArgsProduct6 = /* #__PURE__ */ Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument3)(genericShowArgsArgument1);
const genericTimeInterval = {to: x => $TimeInterval(x._1, x._2), from: x => Data$dGeneric$dRep.$Product(x._1, x._2)};
const genericState = {to: x => x, from: x => x};
const genericReduceWarning = {
  to: x => {
    if (x.tag === "Inl") { return ReduceNoWarning; }
    if (x.tag === "Inr") {
      if (x._1.tag === "Inl") { return $ReduceWarning("ReduceNonPositivePay", x._1._1._1, x._1._1._2._1, x._1._1._2._2._1, x._1._1._2._2._2); }
      if (x._1.tag === "Inr") {
        if (x._1._1.tag === "Inl") {
          return $ReduceWarning("ReducePartialPay", x._1._1._1._1, x._1._1._1._2._1, x._1._1._1._2._2._1, x._1._1._1._2._2._2._1, x._1._1._1._2._2._2._2);
        }
        if (x._1._1.tag === "Inr") {
          if (x._1._1._1.tag === "Inl") { return $ReduceWarning("ReduceShadowing", x._1._1._1._1._1, x._1._1._1._1._2._1, x._1._1._1._1._2._2); }
          if (x._1._1._1.tag === "Inr") { return ReduceAssertionFailed; }
        }
      }
    }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "ReduceNoWarning") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments); }
    if (x.tag === "ReduceNonPositivePay") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, Data$dGeneric$dRep.$Product(x._2, Data$dGeneric$dRep.$Product(x._3, x._4))))
      );
    }
    if (x.tag === "ReducePartialPay") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inl",
            Data$dGeneric$dRep.$Product(x._1, Data$dGeneric$dRep.$Product(x._2, Data$dGeneric$dRep.$Product(x._3, Data$dGeneric$dRep.$Product(x._4, x._5))))
          )
        )
      );
    }
    if (x.tag === "ReduceShadowing") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, Data$dGeneric$dRep.$Product(x._2, x._3)))))
      );
    }
    if (x.tag === "ReduceAssertionFailed") {
      return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments))));
    }
    $runtime.fail();
  }
};
const genericReduceStepResult = {
  to: x => {
    if (x.tag === "Inl") { return $ReduceStepResult("Reduced", x._1._1, x._1._2._1, x._1._2._2._1, x._1._2._2._2); }
    if (x.tag === "Inr") {
      if (x._1.tag === "Inl") { return NotReduced; }
      if (x._1.tag === "Inr") { return AmbiguousTimeIntervalReductionError; }
    }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "Reduced") {
      return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, Data$dGeneric$dRep.$Product(x._2, Data$dGeneric$dRep.$Product(x._3, x._4))));
    }
    if (x.tag === "NotReduced") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)); }
    if (x.tag === "AmbiguousTimeIntervalReductionError") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments)); }
    $runtime.fail();
  }
};
const genericReduceResult = {
  to: x => {
    if (x.tag === "Inl") { return $ReduceResult("ContractQuiescent", x._1._1, x._1._2._1, x._1._2._2._1, x._1._2._2._2._1, x._1._2._2._2._2); }
    if (x.tag === "Inr") { return RRAmbiguousTimeIntervalError; }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "ContractQuiescent") {
      return Data$dGeneric$dRep.$Sum(
        "Inl",
        Data$dGeneric$dRep.$Product(x._1, Data$dGeneric$dRep.$Product(x._2, Data$dGeneric$dRep.$Product(x._3, Data$dGeneric$dRep.$Product(x._4, x._5))))
      );
    }
    if (x.tag === "RRAmbiguousTimeIntervalError") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments); }
    $runtime.fail();
  }
};
const genericReduceEffect = {
  to: x => {
    if (x.tag === "Inl") { return $ReduceEffect("ReduceWithPayment", x._1); }
    if (x.tag === "Inr") { return ReduceNoPayment; }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "ReduceWithPayment") { return Data$dGeneric$dRep.$Sum("Inl", x._1); }
    if (x.tag === "ReduceNoPayment") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments); }
    $runtime.fail();
  }
};
const genericRational = {to: x => $Rational(x._1, x._2), from: x => Data$dGeneric$dRep.$Product(x._1, x._2)};
const genericPayment = {
  to: x => $Payment(x._1, x._2._1, x._2._2._1, x._2._2._2),
  from: x => Data$dGeneric$dRep.$Product(x._1, Data$dGeneric$dRep.$Product(x._2, Data$dGeneric$dRep.$Product(x._3, x._4)))
};
const genericPayee = {
  to: x => {
    if (x.tag === "Inl") { return $Payee("Account", x._1); }
    if (x.tag === "Inr") { return $Payee("Party", x._1); }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "Account") { return Data$dGeneric$dRep.$Sum("Inl", x._1); }
    if (x.tag === "Party") { return Data$dGeneric$dRep.$Sum("Inr", x._1); }
    $runtime.fail();
  }
};
const genericParty = {
  to: x => {
    if (x.tag === "Inl") { return $Party("Address", x._1); }
    if (x.tag === "Inr") { return $Party("Role", x._1); }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "Address") { return Data$dGeneric$dRep.$Sum("Inl", x._1); }
    if (x.tag === "Role") { return Data$dGeneric$dRep.$Sum("Inr", x._1); }
    $runtime.fail();
  }
};
const showParty = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor(genericShowArgsArgument)({reflectSymbol: () => "Address"});
    const $1 = Data$dShow$dGeneric.genericShowConstructor(genericShowArgsArgument)({reflectSymbol: () => "Role"});
    return x => {
      if (x.tag === "Address") { return $0["genericShow'"](x._1); }
      if (x.tag === "Role") { return $1["genericShow'"](x._1); }
      $runtime.fail();
    };
  })()
};
const genericShowArgsArgument4 = {genericShowArgs: v => [showParty.show(v)]};
const genericShow2 = /* #__PURE__ */ (() => {
  const $0 = Data$dShow$dGeneric.genericShowConstructor(genericShowArgsArgument4)({reflectSymbol: () => "Account"});
  const $1 = Data$dShow$dGeneric.genericShowConstructor(genericShowArgsArgument4)({reflectSymbol: () => "Party"});
  return x => {
    if (x.tag === "Account") { return $0["genericShow'"](x._1); }
    if (x.tag === "Party") { return $1["genericShow'"](x._1); }
    $runtime.fail();
  };
})();
const genericShowSum6 = /* #__PURE__ */ (() => {
  const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument4)(genericShowArgsArgument3))({
    reflectSymbol: () => "AvailableMoney"
  });
  return dictGenericShow1 => (
    {
      "genericShow'": v => {
        if (v.tag === "Inl") { return $0["genericShow'"](v._1); }
        if (v.tag === "Inr") { return dictGenericShow1["genericShow'"](v._1); }
        $runtime.fail();
      }
    }
  );
})();
const showChoiceId = {show: v => "(ChoiceId " + Data$dShow.showStringImpl(v._1) + " " + showParty.show(v._2) + ")"};
const genericShow3 = /* #__PURE__ */ (() => {
  const $0 = Data$dShow$dGeneric.genericShowConstructor((() => {
    const $0 = Data$dMap$dInternal.showMap(showChoiceId)(Data$dBigInt.showBigInt);
    const $1 = Data$dMap$dInternal.showMap(showValueId)(Data$dBigInt.showBigInt);
    const $2 = Data$dMap$dInternal.showMap({show: v => "(Tuple " + showParty.show(v._1) + " " + genericShow1($Token(Data$dString$dCommon.toLower(v._2._1), v._2._2)) + ")"})(Data$dBigInt.showBigInt);
    return {
      genericShowArgs: v => [
        "{ accounts: " + $2.show(v.accounts) + ", boundValues: " + $1.show(v.boundValues) + ", choices: " + $0.show(v.choices) + ", minTime: (Instant (Milliseconds " + Data$dShow.showNumberImpl(v.minTime) + ")) }"
      ]
    };
  })())({reflectSymbol: () => "State"});
  return x => $0["genericShow'"](x);
})();
const genericShowArgsArgument5 = {genericShowArgs: v => [showChoiceId.show(v)]};
const genericShowSum7 = /* #__PURE__ */ (() => {
  const $0 = Data$dShow$dGeneric.genericShowConstructor(genericShowArgsArgument5)({reflectSymbol: () => "ChoiceValue"});
  return dictGenericShow1 => (
    {
      "genericShow'": v => {
        if (v.tag === "Inl") { return $0["genericShow'"](v._1); }
        if (v.tag === "Inr") { return dictGenericShow1["genericShow'"](v._1); }
        $runtime.fail();
      }
    }
  );
})();
const genericShowSum8 = /* #__PURE__ */ (() => {
  const $0 = Data$dShow$dGeneric.genericShowConstructor(genericShowArgsArgument5)({reflectSymbol: () => "ChoseSomething"});
  return dictGenericShow1 => (
    {
      "genericShow'": v => {
        if (v.tag === "Inl") { return $0["genericShow'"](v._1); }
        if (v.tag === "Inr") { return dictGenericShow1["genericShow'"](v._1); }
        $runtime.fail();
      }
    }
  );
})();
const showPayee = {show: v => genericShow2(v)};
const genericShowConstructor6 = /* #__PURE__ */ Data$dShow$dGeneric.genericShowConstructor(/* #__PURE__ */ Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument4)(/* #__PURE__ */ Data$dShow$dGeneric.genericShowArgsProduct({
  genericShowArgs: v => [genericShow2(v)]
})(genericShowArgsProduct6)));
const genericShowConstructor7 = /* #__PURE__ */ Data$dShow$dGeneric.genericShowConstructor(/* #__PURE__ */ Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument4)(/* #__PURE__ */ Data$dShow$dGeneric.genericShowArgsProduct({
  genericShowArgs: v => [genericShow2(v)]
})(/* #__PURE__ */ Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument3)(genericShowArgsProduct1))));
const showPayment = {
  show: /* #__PURE__ */ (() => {
    const $0 = genericShowConstructor6({reflectSymbol: () => "Payment"});
    return x => $0["genericShow'"](Data$dGeneric$dRep.$Product(x._1, Data$dGeneric$dRep.$Product(x._2, Data$dGeneric$dRep.$Product(x._3, x._4))));
  })()
};
const showList = /* #__PURE__ */ Data$dList$dTypes.showList(showPayment);
const showReduceEffect = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor({genericShowArgs: v => [showPayment.show(v)]})({reflectSymbol: () => "ReduceWithPayment"});
    const $1 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "ReduceNoPayment"});
    return x => {
      if (x.tag === "ReduceWithPayment") { return $0["genericShow'"](x._1); }
      if (x.tag === "ReduceNoPayment") { return $1["genericShow'"](Data$dGeneric$dRep.NoArguments); }
      $runtime.fail();
    };
  })()
};
const showReduceWarning = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "ReduceNoWarning"});
    const $1 = genericShowConstructor6({reflectSymbol: () => "ReduceNonPositivePay"});
    const $2 = (() => {
      const $2 = (() => {
        const $2 = genericShowConstructor7({reflectSymbol: () => "ReducePartialPay"});
        const $3 = (() => {
          const $3 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument2)(genericShowArgsProduct1))({
            reflectSymbol: () => "ReduceShadowing"
          });
          const $4 = (() => {
            const $4 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "ReduceAssertionFailed"});
            return {
              "genericShow'": v => {
                if (v.tag === "Inl") { return $3["genericShow'"](v._1); }
                if (v.tag === "Inr") { return $4["genericShow'"](v._1); }
                $runtime.fail();
              }
            };
          })();
          return {
            "genericShow'": v => {
              if (v.tag === "Inl") { return $2["genericShow'"](v._1); }
              if (v.tag === "Inr") { return $4["genericShow'"](v._1); }
              $runtime.fail();
            }
          };
        })();
        return {
          "genericShow'": v => {
            if (v.tag === "Inl") { return $1["genericShow'"](v._1); }
            if (v.tag === "Inr") { return $3["genericShow'"](v._1); }
            $runtime.fail();
          }
        };
      })();
      return {
        "genericShow'": v => {
          if (v.tag === "Inl") { return $0["genericShow'"](v._1); }
          if (v.tag === "Inr") { return $2["genericShow'"](v._1); }
          $runtime.fail();
        }
      };
    })();
    return x => $2["genericShow'"](genericReduceWarning.from(x));
  })()
};
const showState = {show: v => genericShow3(v)};
const genericShowArgsArgument6 = {genericShowArgs: v => [genericShow3(v)]};
const showTransactionWarning = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument4)(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument4)(genericShowArgsProduct6)))({
      reflectSymbol: () => "TransactionNonPositiveDeposit"
    });
    const $1 = genericShowConstructor6({reflectSymbol: () => "TransactionNonPositivePay"});
    const $2 = (() => {
      const $2 = (() => {
        const $2 = genericShowConstructor7({reflectSymbol: () => "TransactionPartialPay"});
        const $3 = (() => {
          const $3 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument2)(genericShowArgsProduct1))({
            reflectSymbol: () => "TransactionShadowing"
          });
          const $4 = (() => {
            const $4 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "TransactionAssertionFailed"});
            return {
              "genericShow'": v => {
                if (v.tag === "Inl") { return $3["genericShow'"](v._1); }
                if (v.tag === "Inr") { return $4["genericShow'"](v._1); }
                $runtime.fail();
              }
            };
          })();
          return {
            "genericShow'": v => {
              if (v.tag === "Inl") { return $2["genericShow'"](v._1); }
              if (v.tag === "Inr") { return $4["genericShow'"](v._1); }
              $runtime.fail();
            }
          };
        })();
        return {
          "genericShow'": v => {
            if (v.tag === "Inl") { return $1["genericShow'"](v._1); }
            if (v.tag === "Inr") { return $3["genericShow'"](v._1); }
            $runtime.fail();
          }
        };
      })();
      return {
        "genericShow'": v => {
          if (v.tag === "Inl") { return $0["genericShow'"](v._1); }
          if (v.tag === "Inr") { return $2["genericShow'"](v._1); }
          $runtime.fail();
        }
      };
    })();
    return x => $2["genericShow'"](genericTransactionWarning.from(x));
  })()
};
const showList1 = /* #__PURE__ */ Data$dList$dTypes.showList(showTransactionWarning);
const genericObservation = {
  to: x => {
    if (x.tag === "Inl") { return $Observation("AndObs", x._1._1, x._1._2); }
    if (x.tag === "Inr") {
      if (x._1.tag === "Inl") { return $Observation("OrObs", x._1._1._1, x._1._1._2); }
      if (x._1.tag === "Inr") {
        if (x._1._1.tag === "Inl") { return $Observation("NotObs", x._1._1._1); }
        if (x._1._1.tag === "Inr") {
          if (x._1._1._1.tag === "Inl") { return $Observation("ChoseSomething", x._1._1._1._1); }
          if (x._1._1._1.tag === "Inr") {
            if (x._1._1._1._1.tag === "Inl") { return $Observation("ValueGE", x._1._1._1._1._1._1, x._1._1._1._1._1._2); }
            if (x._1._1._1._1.tag === "Inr") {
              if (x._1._1._1._1._1.tag === "Inl") { return $Observation("ValueGT", x._1._1._1._1._1._1._1, x._1._1._1._1._1._1._2); }
              if (x._1._1._1._1._1.tag === "Inr") {
                if (x._1._1._1._1._1._1.tag === "Inl") { return $Observation("ValueLT", x._1._1._1._1._1._1._1._1, x._1._1._1._1._1._1._1._2); }
                if (x._1._1._1._1._1._1.tag === "Inr") {
                  if (x._1._1._1._1._1._1._1.tag === "Inl") { return $Observation("ValueLE", x._1._1._1._1._1._1._1._1._1, x._1._1._1._1._1._1._1._1._2); }
                  if (x._1._1._1._1._1._1._1.tag === "Inr") {
                    if (x._1._1._1._1._1._1._1._1.tag === "Inl") { return $Observation("ValueEQ", x._1._1._1._1._1._1._1._1._1._1, x._1._1._1._1._1._1._1._1._1._2); }
                    if (x._1._1._1._1._1._1._1._1.tag === "Inr") {
                      if (x._1._1._1._1._1._1._1._1._1.tag === "Inl") { return TrueObs; }
                      if (x._1._1._1._1._1._1._1._1._1.tag === "Inr") { return FalseObs; }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "AndObs") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, x._2)); }
    if (x.tag === "OrObs") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, x._2))); }
    if (x.tag === "NotObs") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", x._1))); }
    if (x.tag === "ChoseSomething") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", x._1)))); }
    if (x.tag === "ValueGE") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, x._2)))))
      );
    }
    if (x.tag === "ValueGT") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, x._2)))))
        )
      );
    }
    if (x.tag === "ValueLT") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, x._2)))))
          )
        )
      );
    }
    if (x.tag === "ValueLE") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum(
              "Inr",
              Data$dGeneric$dRep.$Sum(
                "Inr",
                Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, x._2))))
              )
            )
          )
        )
      );
    }
    if (x.tag === "ValueEQ") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum(
              "Inr",
              Data$dGeneric$dRep.$Sum(
                "Inr",
                Data$dGeneric$dRep.$Sum(
                  "Inr",
                  Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, x._2))))
                )
              )
            )
          )
        )
      );
    }
    if (x.tag === "TrueObs") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum(
              "Inr",
              Data$dGeneric$dRep.$Sum(
                "Inr",
                Data$dGeneric$dRep.$Sum(
                  "Inr",
                  Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments))))
                )
              )
            )
          )
        )
      );
    }
    if (x.tag === "FalseObs") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum(
              "Inr",
              Data$dGeneric$dRep.$Sum(
                "Inr",
                Data$dGeneric$dRep.$Sum(
                  "Inr",
                  Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments))))
                )
              )
            )
          )
        )
      );
    }
    $runtime.fail();
  }
};
const showValue = {
  show: v => genericShowSum6(genericShowSum((() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor({genericShowArgs: v$1 => [showValue.show(v$1)]})(NegValueIsSymbol);
    const $1 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct({genericShowArgs: v$1 => [showValue.show(v$1)]})({
      genericShowArgs: v$1 => [showValue.show(v$1)]
    }))(AddValueIsSymbol);
    const $2 = (() => {
      const $2 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct({genericShowArgs: v$1 => [showValue.show(v$1)]})({
        genericShowArgs: v$1 => [showValue.show(v$1)]
      }))(SubValueIsSymbol);
      const $3 = (() => {
        const $3 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct({genericShowArgs: v$1 => [showValue.show(v$1)]})({
          genericShowArgs: v$1 => [showValue.show(v$1)]
        }))(MulValueIsSymbol);
        const $4 = (() => {
          const $4 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct({genericShowArgs: v$1 => [showValue.show(v$1)]})({
            genericShowArgs: v$1 => [showValue.show(v$1)]
          }))(DivValueIsSymbol);
          const $5 = (() => {
            const $5 = genericShowSum7(genericShowSum1(genericShowSum2(genericShowSum5(Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct({
              genericShowArgs: v$1 => [showObservation.show(v$1)]
            })(Data$dShow$dGeneric.genericShowArgsProduct({genericShowArgs: v$1 => [showValue.show(v$1)]})({genericShowArgs: v$1 => [showValue.show(v$1)]})))(CondIsSymbol)))));
            return {
              "genericShow'": v$1 => {
                if (v$1.tag === "Inl") { return $4["genericShow'"](v$1._1); }
                if (v$1.tag === "Inr") { return $5["genericShow'"](v$1._1); }
                $runtime.fail();
              }
            };
          })();
          return {
            "genericShow'": v$1 => {
              if (v$1.tag === "Inl") { return $3["genericShow'"](v$1._1); }
              if (v$1.tag === "Inr") { return $5["genericShow'"](v$1._1); }
              $runtime.fail();
            }
          };
        })();
        return {
          "genericShow'": v$1 => {
            if (v$1.tag === "Inl") { return $2["genericShow'"](v$1._1); }
            if (v$1.tag === "Inr") { return $4["genericShow'"](v$1._1); }
            $runtime.fail();
          }
        };
      })();
      return {
        "genericShow'": v$1 => {
          if (v$1.tag === "Inl") { return $1["genericShow'"](v$1._1); }
          if (v$1.tag === "Inr") { return $3["genericShow'"](v$1._1); }
          $runtime.fail();
        }
      };
    })();
    return {
      "genericShow'": v$1 => {
        if (v$1.tag === "Inl") { return $0["genericShow'"](v$1._1); }
        if (v$1.tag === "Inr") { return $2["genericShow'"](v$1._1); }
        $runtime.fail();
      }
    };
  })()))["genericShow'"](genericValue.from(v))
};
const showObservation = {
  show: o => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct({genericShowArgs: v => [showObservation.show(v)]})({
      genericShowArgs: v => [showObservation.show(v)]
    }))(AndObsIsSymbol);
    const $1 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct({genericShowArgs: v => [showObservation.show(v)]})({
      genericShowArgs: v => [showObservation.show(v)]
    }))(OrObsIsSymbol);
    const $2 = Data$dShow$dGeneric.genericShowConstructor({genericShowArgs: v => [showObservation.show(v)]})(NotObsIsSymbol);
    const $3 = genericShowSum8((() => {
      const $3 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct({genericShowArgs: v => [showValue.show(v)]})({
        genericShowArgs: v => [showValue.show(v)]
      }))(ValueGEIsSymbol);
      const $4 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct({genericShowArgs: v => [showValue.show(v)]})({
        genericShowArgs: v => [showValue.show(v)]
      }))(ValueGTIsSymbol);
      const $5 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct({genericShowArgs: v => [showValue.show(v)]})({
        genericShowArgs: v => [showValue.show(v)]
      }))(ValueLTIsSymbol);
      const $6 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct({genericShowArgs: v => [showValue.show(v)]})({
        genericShowArgs: v => [showValue.show(v)]
      }))(ValueLEIsSymbol);
      const $7 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct({genericShowArgs: v => [showValue.show(v)]})({
        genericShowArgs: v => [showValue.show(v)]
      }))(ValueEQIsSymbol);
      return {
        "genericShow'": v => {
          if (v.tag === "Inl") { return $3["genericShow'"](v._1); }
          if (v.tag === "Inr") {
            if (v._1.tag === "Inl") { return $4["genericShow'"](v._1._1); }
            if (v._1.tag === "Inr") {
              if (v._1._1.tag === "Inl") { return $5["genericShow'"](v._1._1._1); }
              if (v._1._1.tag === "Inr") {
                if (v._1._1._1.tag === "Inl") { return $6["genericShow'"](v._1._1._1._1); }
                if (v._1._1._1.tag === "Inr") {
                  if (v._1._1._1._1.tag === "Inl") { return $7["genericShow'"](v._1._1._1._1._1); }
                  if (v._1._1._1._1.tag === "Inr") { return genericShowSum3["genericShow'"](v._1._1._1._1._1); }
                }
              }
            }
          }
          $runtime.fail();
        }
      };
    })());
    const $4 = genericObservation.from(o);
    if ($4.tag === "Inl") { return $0["genericShow'"]($4._1); }
    if ($4.tag === "Inr") {
      if ($4._1.tag === "Inl") { return $1["genericShow'"]($4._1._1); }
      if ($4._1.tag === "Inr") {
        if ($4._1._1.tag === "Inl") { return $2["genericShow'"]($4._1._1._1); }
        if ($4._1._1.tag === "Inr") { return $3["genericShow'"]($4._1._1._1); }
      }
    }
    $runtime.fail();
  }
};
const genericShowArgsArgument7 = {genericShowArgs: v => [showValue.show(v)]};
const genericShowArgsArgument8 = {genericShowArgs: v => [showObservation.show(v)]};
const genericMarloweParams = {to: x => x, from: x => x};
const genericIntervalResult = {
  to: x => {
    if (x.tag === "Inl") { return $IntervalResult("IntervalTrimmed", x._1._1, x._1._2); }
    if (x.tag === "Inr") { return $IntervalResult("IntervalError", x._1); }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "IntervalTrimmed") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, x._2)); }
    if (x.tag === "IntervalError") { return Data$dGeneric$dRep.$Sum("Inr", x._1); }
    $runtime.fail();
  }
};
const genericIntervalError = {
  to: x => {
    if (x.tag === "Inl") { return $IntervalError("InvalidInterval", x._1); }
    if (x.tag === "Inr") { return $IntervalError("IntervalInPastError", x._1._1, x._1._2); }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "InvalidInterval") { return Data$dGeneric$dRep.$Sum("Inl", x._1); }
    if (x.tag === "IntervalInPastError") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Product(x._1, x._2)); }
    $runtime.fail();
  }
};
const genericInputContent = {
  to: x => {
    if (x.tag === "Inl") { return $InputContent("IDeposit", x._1._1, x._1._2._1, x._1._2._2._1, x._1._2._2._2); }
    if (x.tag === "Inr") {
      if (x._1.tag === "Inl") { return $InputContent("IChoice", x._1._1._1, x._1._1._2); }
      if (x._1.tag === "Inr") { return INotify; }
    }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "IDeposit") {
      return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, Data$dGeneric$dRep.$Product(x._2, Data$dGeneric$dRep.$Product(x._3, x._4))));
    }
    if (x.tag === "IChoice") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, x._2))); }
    if (x.tag === "INotify") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments)); }
    $runtime.fail();
  }
};
const genericShow5 = /* #__PURE__ */ (() => {
  const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument4)(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument4)(genericShowArgsProduct6)))({
    reflectSymbol: () => "IDeposit"
  });
  const $1 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument5)(genericShowArgsArgument1))({
    reflectSymbol: () => "IChoice"
  });
  const $2 = (() => {
    const $2 = (() => {
      const $2 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "INotify"});
      return {
        "genericShow'": v => {
          if (v.tag === "Inl") { return $1["genericShow'"](v._1); }
          if (v.tag === "Inr") { return $2["genericShow'"](v._1); }
          $runtime.fail();
        }
      };
    })();
    return {
      "genericShow'": v => {
        if (v.tag === "Inl") { return $0["genericShow'"](v._1); }
        if (v.tag === "Inr") { return $2["genericShow'"](v._1); }
        $runtime.fail();
      }
    };
  })();
  return x => $2["genericShow'"](genericInputContent.from(x));
})();
const showInputContent = {show: v => genericShow5(v)};
const genericShowArgsArgument9 = {genericShowArgs: v => [genericShow5(v)]};
const genericInput = {
  to: x => {
    if (x.tag === "Inl") { return $Input("NormalInput", x._1); }
    if (x.tag === "Inr") { return $Input("MerkleizedInput", x._1._1, x._1._2._1, x._1._2._2); }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "NormalInput") { return Data$dGeneric$dRep.$Sum("Inl", x._1); }
    if (x.tag === "MerkleizedInput") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Product(x._1, Data$dGeneric$dRep.$Product(x._2, x._3))); }
    $runtime.fail();
  }
};
const genericEnvironment = {to: x => x, from: x => x};
const genericShow6 = /* #__PURE__ */ (() => {
  const $0 = Data$dShow$dGeneric.genericShowConstructor({genericShowArgs: v => ["{ timeInterval: " + showTimeInterval.show(v.timeInterval) + " }"]})({
    reflectSymbol: () => "Environment"
  });
  return x => $0["genericShow'"](x);
})();
const showEnvironment = {show: v => genericShow6(v)};
const genericShow7 = /* #__PURE__ */ (() => {
  const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct({genericShowArgs: v => [genericShow6(v)]})(genericShowArgsArgument6))({
    reflectSymbol: () => "IntervalTrimmed"
  });
  const $1 = Data$dShow$dGeneric.genericShowConstructor({genericShowArgs: v => [showIntervalError.show(v)]})({reflectSymbol: () => "IntervalError"});
  return x => {
    if (x.tag === "IntervalTrimmed") { return $0["genericShow'"](Data$dGeneric$dRep.$Product(x._1, x._2)); }
    if (x.tag === "IntervalError") { return $1["genericShow'"](x._1); }
    $runtime.fail();
  };
})();
const showIntervalResult = {show: v => genericShow7(v)};
const genericEncodeIntervalError = {
  encodeJson: v => {
    if (v.tag === "InvalidInterval") { return encodeJson1({invalidInterval: {from: Data$dArgonaut$dCore.fromNumber(v._1._1), to: Data$dArgonaut$dCore.fromNumber(v._1._2)}}); }
    if (v.tag === "IntervalInPastError") {
      return encodeJson2({
        intervalInPastError: {from: Data$dArgonaut$dCore.fromNumber(v._2._1), to: Data$dArgonaut$dCore.fromNumber(v._2._2), minTime: Data$dArgonaut$dCore.fromNumber(v._1)}
      });
    }
    $runtime.fail();
  }
};
const genericEncodeTransactionError = {
  encodeJson: v => {
    if (v.tag === "TEAmbiguousTimeIntervalError") { return Data$dArgonaut$dCore.fromString("TEAmbiguousTimeIntervalError"); }
    if (v.tag === "TEApplyNoMatchError") { return Data$dArgonaut$dCore.fromString("TEApplyNoMatchError"); }
    if (v.tag === "TEUselessTransaction") { return Data$dArgonaut$dCore.fromString("TEUselessTransaction"); }
    if (v.tag === "TEIntervalError") { return encodeJson4({error: "TEIntervalError", context: genericEncodeIntervalError.encodeJson(v._1)}); }
    if (v.tag === "TEHashMismatch") { return Data$dArgonaut$dCore.fromString("TEHashMismatch"); }
    $runtime.fail();
  }
};
const genericDecodeJsonIntervalError = {
  decodeJson: json => {
    const $0 = Data$dArgonaut$dDecode$dDecoders.decodeJObject(json);
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
      const $1 = Data$dArgonaut$dDecode$dDecoders.getFieldOptional$p(Data$dArgonaut$dDecode$dDecoders.decodeForeignObject(Data$dEither.Right))(obj)("invalidInterval");
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
      })()(mInvalidInterval => {
        const $2 = Data$dArgonaut$dDecode$dDecoders.getFieldOptional$p(Data$dArgonaut$dDecode$dDecoders.decodeForeignObject(Data$dEither.Right))(obj)("intervalInPastError");
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
        })()(mIntervalInPastError => {
          if (mInvalidInterval.tag === "Just") {
            if (mIntervalInPastError.tag === "Nothing") {
              const $3 = mInvalidInterval._1;
              const $4 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dEither.Right)($3)("from");
              const $5 = (() => {
                if ($4.tag === "Left") { return Data$dEither.$Either("Left", $4._1); }
                if ($4.tag === "Right") { return Marlowe$dTime.instantFromJson($4._1); }
                $runtime.fail();
              })();
              return (() => {
                if ($5.tag === "Left") {
                  const $6 = $5._1;
                  return v => Data$dEither.$Either("Left", $6);
                }
                if ($5.tag === "Right") {
                  const $6 = $5._1;
                  return f => f($6);
                }
                $runtime.fail();
              })()(f => {
                const $6 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dEither.Right)($3)("to");
                const $7 = (() => {
                  if ($6.tag === "Left") { return Data$dEither.$Either("Left", $6._1); }
                  if ($6.tag === "Right") { return Marlowe$dTime.instantFromJson($6._1); }
                  $runtime.fail();
                })();
                return (() => {
                  if ($7.tag === "Left") {
                    const $8 = $7._1;
                    return v => Data$dEither.$Either("Left", $8);
                  }
                  if ($7.tag === "Right") {
                    const $8 = $7._1;
                    return f$1 => f$1($8);
                  }
                  $runtime.fail();
                })()(t => Data$dEither.$Either("Right", $IntervalError("InvalidInterval", $TimeInterval(f, t))));
              });
            }
            return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "IntervalError"));
          }
          if (mInvalidInterval.tag === "Nothing" && mIntervalInPastError.tag === "Just") {
            const $3 = mIntervalInPastError._1;
            const $4 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dEither.Right)($3)("from");
            const $5 = (() => {
              if ($4.tag === "Left") { return Data$dEither.$Either("Left", $4._1); }
              if ($4.tag === "Right") { return Marlowe$dTime.instantFromJson($4._1); }
              $runtime.fail();
            })();
            return (() => {
              if ($5.tag === "Left") {
                const $6 = $5._1;
                return v => Data$dEither.$Either("Left", $6);
              }
              if ($5.tag === "Right") {
                const $6 = $5._1;
                return f => f($6);
              }
              $runtime.fail();
            })()(f => {
              const $6 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dEither.Right)($3)("to");
              const $7 = (() => {
                if ($6.tag === "Left") { return Data$dEither.$Either("Left", $6._1); }
                if ($6.tag === "Right") { return Marlowe$dTime.instantFromJson($6._1); }
                $runtime.fail();
              })();
              return (() => {
                if ($7.tag === "Left") {
                  const $8 = $7._1;
                  return v => Data$dEither.$Either("Left", $8);
                }
                if ($7.tag === "Right") {
                  const $8 = $7._1;
                  return f$1 => f$1($8);
                }
                $runtime.fail();
              })()(t => {
                const $8 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dEither.Right)($3)("minTime");
                const $9 = (() => {
                  if ($8.tag === "Left") { return Data$dEither.$Either("Left", $8._1); }
                  if ($8.tag === "Right") { return Marlowe$dTime.instantFromJson($8._1); }
                  $runtime.fail();
                })();
                return (() => {
                  if ($9.tag === "Left") {
                    const $10 = $9._1;
                    return v => Data$dEither.$Either("Left", $10);
                  }
                  if ($9.tag === "Right") {
                    const $10 = $9._1;
                    return f$1 => f$1($10);
                  }
                  $runtime.fail();
                })()(m => Data$dEither.$Either("Right", $IntervalError("IntervalInPastError", m, $TimeInterval(f, t))));
              });
            });
          }
          return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "IntervalError"));
        });
      });
    });
  }
};
const genericDecodeJsonTransactionError = {
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
    })()(str => {
      if (str === "TEAmbiguousTimeIntervalError") { return Data$dEither.$Either("Right", TEAmbiguousTimeIntervalError); }
      if (str === "TEApplyNoMatchError") { return Data$dEither.$Either("Right", TEApplyNoMatchError); }
      if (str === "TEUselessTransaction") { return Data$dEither.$Either("Right", TEUselessTransaction); }
      if (str === "TEHashMismatch") { return Data$dEither.$Either("Right", TEHashMismatch); }
      return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "TransactionError"));
    });
    const $2 = Data$dArgonaut$dDecode$dDecoders.decodeJObject(json);
    const $3 = (() => {
      if ($2.tag === "Left") {
        const $3 = $2._1;
        return v => Data$dEither.$Either("Left", $3);
      }
      if ($2.tag === "Right") {
        const $3 = $2._1;
        return f => f($3);
      }
      $runtime.fail();
    })()(obj => {
      const $3 = Data$dArgonaut$dDecode$dDecoders.getField(genericDecodeJsonIntervalError.decodeJson)(obj)("context");
      if ($3.tag === "Left") { return Data$dEither.$Either("Left", $3._1); }
      if ($3.tag === "Right") { return Data$dEither.$Either("Right", $TransactionError("TEIntervalError", $3._1)); }
      $runtime.fail();
    });
    if ($1.tag === "Left") { return $3; }
    return $1;
  }
};
const genericContract = {
  to: x => {
    if (x.tag === "Inl") { return Close; }
    if (x.tag === "Inr") {
      if (x._1.tag === "Inl") { return $Contract("Pay", x._1._1._1, x._1._1._2._1, x._1._1._2._2._1, x._1._1._2._2._2._1, x._1._1._2._2._2._2); }
      if (x._1.tag === "Inr") {
        if (x._1._1.tag === "Inl") { return $Contract("If", x._1._1._1._1, x._1._1._1._2._1, x._1._1._1._2._2); }
        if (x._1._1.tag === "Inr") {
          if (x._1._1._1.tag === "Inl") { return $Contract("When", x._1._1._1._1._1, x._1._1._1._1._2._1, x._1._1._1._1._2._2); }
          if (x._1._1._1.tag === "Inr") {
            if (x._1._1._1._1.tag === "Inl") { return $Contract("Let", x._1._1._1._1._1._1, x._1._1._1._1._1._2._1, x._1._1._1._1._1._2._2); }
            if (x._1._1._1._1.tag === "Inr") { return $Contract("Assert", x._1._1._1._1._1._1, x._1._1._1._1._1._2); }
          }
        }
      }
    }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "Close") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments); }
    if (x.tag === "Pay") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inl",
          Data$dGeneric$dRep.$Product(x._1, Data$dGeneric$dRep.$Product(x._2, Data$dGeneric$dRep.$Product(x._3, Data$dGeneric$dRep.$Product(x._4, x._5))))
        )
      );
    }
    if (x.tag === "If") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, Data$dGeneric$dRep.$Product(x._2, x._3))))
      );
    }
    if (x.tag === "When") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, Data$dGeneric$dRep.$Product(x._2, x._3)))))
      );
    }
    if (x.tag === "Let") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, Data$dGeneric$dRep.$Product(x._2, x._3)))))
        )
      );
    }
    if (x.tag === "Assert") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Product(x._1, x._2)))))
      );
    }
    $runtime.fail();
  }
};
const genericChoiceId = {to: x => $ChoiceId(x._1, x._2), from: x => Data$dGeneric$dRep.$Product(x._1, x._2)};
const genericCase = {
  to: x => {
    if (x.tag === "Inl") { return $Case("Case", x._1._1, x._1._2); }
    if (x.tag === "Inr") { return $Case("MerkleizedCase", x._1._1, x._1._2); }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "Case") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, x._2)); }
    if (x.tag === "MerkleizedCase") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Product(x._1, x._2)); }
    $runtime.fail();
  }
};
const genericBound = {to: x => $Bound(x._1, x._2), from: x => Data$dGeneric$dRep.$Product(x._1, x._2)};
const genericAssets = {to: x => x, from: x => x};
const genericApplyWarning = {
  to: x => {
    if (x.tag === "Inl") { return ApplyNoWarning; }
    if (x.tag === "Inr") { return $ApplyWarning("ApplyNonPositiveDeposit", x._1._1, x._1._2._1, x._1._2._2._1, x._1._2._2._2); }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "ApplyNoWarning") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments); }
    if (x.tag === "ApplyNonPositiveDeposit") {
      return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Product(x._1, Data$dGeneric$dRep.$Product(x._2, Data$dGeneric$dRep.$Product(x._3, x._4))));
    }
    $runtime.fail();
  }
};
const showApplyWarning = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "ApplyNoWarning"});
    const $1 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument4)(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument4)(genericShowArgsProduct6)))({
      reflectSymbol: () => "ApplyNonPositiveDeposit"
    });
    return x => {
      const $2 = genericApplyWarning.from(x);
      if ($2.tag === "Inl") { return $0["genericShow'"]($2._1); }
      if ($2.tag === "Inr") { return $1["genericShow'"]($2._1); }
      $runtime.fail();
    };
  })()
};
const genericApplyResult = {
  to: x => {
    if (x.tag === "Inl") { return $ApplyResult("Applied", x._1._1, x._1._2._1, x._1._2._2); }
    if (x.tag === "Inr") {
      if (x._1.tag === "Inl") { return ApplyNoMatchError; }
      if (x._1.tag === "Inr") { return ApplyHashMismatch; }
    }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "Applied") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, Data$dGeneric$dRep.$Product(x._2, x._3))); }
    if (x.tag === "ApplyNoMatchError") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)); }
    if (x.tag === "ApplyHashMismatch") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments)); }
    $runtime.fail();
  }
};
const genericApplyAllResult = {
  to: x => {
    if (x.tag === "Inl") { return $ApplyAllResult("ApplyAllSuccess", x._1._1, x._1._2._1, x._1._2._2._1, x._1._2._2._2._1, x._1._2._2._2._2); }
    if (x.tag === "Inr") {
      if (x._1.tag === "Inl") { return ApplyAllNoMatchError; }
      if (x._1.tag === "Inr") {
        if (x._1._1.tag === "Inl") { return ApplyAllAmbiguousTimeIntervalError; }
        if (x._1._1.tag === "Inr") { return ApplyAllHashMismatch; }
      }
    }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "ApplyAllSuccess") {
      return Data$dGeneric$dRep.$Sum(
        "Inl",
        Data$dGeneric$dRep.$Product(x._1, Data$dGeneric$dRep.$Product(x._2, Data$dGeneric$dRep.$Product(x._3, Data$dGeneric$dRep.$Product(x._4, x._5))))
      );
    }
    if (x.tag === "ApplyAllNoMatchError") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)); }
    if (x.tag === "ApplyAllAmbiguousTimeIntervalError") {
      return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)));
    }
    if (x.tag === "ApplyAllHashMismatch") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments))); }
    $runtime.fail();
  }
};
const genericAda = {to: x => x, from: x => x};
const genericAction = {
  to: x => {
    if (x.tag === "Inl") { return $Action("Deposit", x._1._1, x._1._2._1, x._1._2._2._1, x._1._2._2._2); }
    if (x.tag === "Inr") {
      if (x._1.tag === "Inl") { return $Action("Choice", x._1._1._1, x._1._1._2); }
      if (x._1.tag === "Inr") { return $Action("Notify", x._1._1); }
    }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "Deposit") {
      return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, Data$dGeneric$dRep.$Product(x._2, Data$dGeneric$dRep.$Product(x._3, x._4))));
    }
    if (x.tag === "Choice") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, x._2))); }
    if (x.tag === "Notify") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", x._1)); }
    $runtime.fail();
  }
};
const genericShow9 = /* #__PURE__ */ (() => {
  const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument4)(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument4)(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument3)(genericShowArgsArgument7))))({
    reflectSymbol: () => "Deposit"
  });
  const $1 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument5)({genericShowArgs: v => [showArray.show(v)]}))({
    reflectSymbol: () => "Choice"
  });
  const $2 = (() => {
    const $2 = (() => {
      const $2 = Data$dShow$dGeneric.genericShowConstructor(genericShowArgsArgument8)({reflectSymbol: () => "Notify"});
      return {
        "genericShow'": v => {
          if (v.tag === "Inl") { return $1["genericShow'"](v._1); }
          if (v.tag === "Inr") { return $2["genericShow'"](v._1); }
          $runtime.fail();
        }
      };
    })();
    return {
      "genericShow'": v => {
        if (v.tag === "Inl") { return $0["genericShow'"](v._1); }
        if (v.tag === "Inr") { return $2["genericShow'"](v._1); }
        $runtime.fail();
      }
    };
  })();
  return x => $2["genericShow'"]((() => {
    if (x.tag === "Deposit") {
      return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, Data$dGeneric$dRep.$Product(x._2, Data$dGeneric$dRep.$Product(x._3, x._4))));
    }
    if (x.tag === "Choice") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, x._2))); }
    if (x.tag === "Notify") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", x._1)); }
    $runtime.fail();
  })());
})();
const showAction = {
  show: v => {
    if (v.tag === "Choice") { return "(Choice " + showChoiceId.show(v._1) + " " + showArray.show(v._2) + ")"; }
    return genericShow9(v);
  }
};
const showContract = {
  show: v => genericShowSum4((() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument4)(Data$dShow$dGeneric.genericShowArgsProduct({
      genericShowArgs: v$1 => [genericShow2(v$1)]
    })(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument3)(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument7)({
      genericShowArgs: v$1 => [showContract.show(v$1)]
    })))))(PayIsSymbol);
    const $1 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument8)(Data$dShow$dGeneric.genericShowArgsProduct({
      genericShowArgs: v$1 => [showContract.show(v$1)]
    })({genericShowArgs: v$1 => [showContract.show(v$1)]})))(IfIsSymbol);
    const $2 = (() => {
      const $2 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct((() => {
        const $2 = Data$dShow.showArrayImpl(showCase.show);
        return {genericShowArgs: v$1 => [$2(v$1)]};
      })())(Data$dShow$dGeneric.genericShowArgsProduct({genericShowArgs: v$1 => ["(Instant (Milliseconds " + Data$dShow.showNumberImpl(v$1) + "))"]})({
        genericShowArgs: v$1 => [showContract.show(v$1)]
      })))(WhenIsSymbol);
      const $3 = (() => {
        const $3 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument2)(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument7)({
          genericShowArgs: v$1 => [showContract.show(v$1)]
        })))(LetIsSymbol);
        const $4 = (() => {
          const $4 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument8)({
            genericShowArgs: v$1 => [showContract.show(v$1)]
          }))(AssertIsSymbol);
          return {
            "genericShow'": v$1 => {
              if (v$1.tag === "Inl") { return $3["genericShow'"](v$1._1); }
              if (v$1.tag === "Inr") { return $4["genericShow'"](v$1._1); }
              $runtime.fail();
            }
          };
        })();
        return {
          "genericShow'": v$1 => {
            if (v$1.tag === "Inl") { return $2["genericShow'"](v$1._1); }
            if (v$1.tag === "Inr") { return $4["genericShow'"](v$1._1); }
            $runtime.fail();
          }
        };
      })();
      return {
        "genericShow'": v$1 => {
          if (v$1.tag === "Inl") { return $1["genericShow'"](v$1._1); }
          if (v$1.tag === "Inr") { return $3["genericShow'"](v$1._1); }
          $runtime.fail();
        }
      };
    })();
    return {
      "genericShow'": v$1 => {
        if (v$1.tag === "Inl") { return $0["genericShow'"](v$1._1); }
        if (v$1.tag === "Inr") { return $2["genericShow'"](v$1._1); }
        $runtime.fail();
      }
    };
  })())["genericShow'"](genericContract.from(v))
};
const showCase = {
  show: v => {
    if (v.tag === "Case") { return "Case " + showAction.show(v._1) + " " + showContract.show(v._2); }
    if (v.tag === "MerkleizedCase") { return "MerkleizedCase " + showAction.show(v._1) + " " + Data$dShow.showStringImpl(v._2); }
    $runtime.fail();
  }
};
const genericShowArgsArgument10 = {genericShowArgs: v => [showContract.show(v)]};
const genericShowArgsProduct12 = /* #__PURE__ */ Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument6)(genericShowArgsArgument10);
const genericShowArgsProduct13 = /* #__PURE__ */ Data$dShow$dGeneric.genericShowArgsProduct({genericShowArgs: v => [showList.show(v)]})(genericShowArgsProduct12);
const genericShow10 = /* #__PURE__ */ (() => {
  const $0 = Data$dShow$dGeneric.genericShowConstructor(genericShowArgsArgument9)({reflectSymbol: () => "NormalInput"});
  const $1 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument9)(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument)(genericShowArgsArgument10)))({
    reflectSymbol: () => "MerkleizedInput"
  });
  return x => {
    if (x.tag === "NormalInput") { return $0["genericShow'"](x._1); }
    if (x.tag === "MerkleizedInput") { return $1["genericShow'"](Data$dGeneric$dRep.$Product(x._1, Data$dGeneric$dRep.$Product(x._2, x._3))); }
    $runtime.fail();
  };
})();
const showApplyAllResult = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct({genericShowArgs: v => [v ? "true" : "false"]})(Data$dShow$dGeneric.genericShowArgsProduct({
      genericShowArgs: v => [showList1.show(v)]
    })(genericShowArgsProduct13)))({reflectSymbol: () => "ApplyAllSuccess"});
    const $1 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "ApplyAllNoMatchError"});
    const $2 = (() => {
      const $2 = (() => {
        const $2 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "ApplyAllAmbiguousTimeIntervalError"});
        const $3 = (() => {
          const $3 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "ApplyAllHashMismatch"});
          return {
            "genericShow'": v => {
              if (v.tag === "Inl") { return $2["genericShow'"](v._1); }
              if (v.tag === "Inr") { return $3["genericShow'"](v._1); }
              $runtime.fail();
            }
          };
        })();
        return {
          "genericShow'": v => {
            if (v.tag === "Inl") { return $1["genericShow'"](v._1); }
            if (v.tag === "Inr") { return $3["genericShow'"](v._1); }
            $runtime.fail();
          }
        };
      })();
      return {
        "genericShow'": v => {
          if (v.tag === "Inl") { return $0["genericShow'"](v._1); }
          if (v.tag === "Inr") { return $2["genericShow'"](v._1); }
          $runtime.fail();
        }
      };
    })();
    return x => $2["genericShow'"](genericApplyAllResult.from(x));
  })()
};
const showApplyResult = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct({genericShowArgs: v => [showApplyWarning.show(v)]})(genericShowArgsProduct12))({
      reflectSymbol: () => "Applied"
    });
    const $1 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "ApplyNoMatchError"});
    const $2 = (() => {
      const $2 = (() => {
        const $2 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "ApplyHashMismatch"});
        return {
          "genericShow'": v => {
            if (v.tag === "Inl") { return $1["genericShow'"](v._1); }
            if (v.tag === "Inr") { return $2["genericShow'"](v._1); }
            $runtime.fail();
          }
        };
      })();
      return {
        "genericShow'": v => {
          if (v.tag === "Inl") { return $0["genericShow'"](v._1); }
          if (v.tag === "Inr") { return $2["genericShow'"](v._1); }
          $runtime.fail();
        }
      };
    })();
    return x => $2["genericShow'"](genericApplyResult.from(x));
  })()
};
const showInput = {show: v => genericShow10(v)};
const showTransactionInput = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor((() => {
      const $0 = Data$dList$dTypes.showList(showInput);
      return {genericShowArgs: v => ["{ inputs: " + $0.show(v.inputs) + ", interval: " + showTimeInterval.show(v.interval) + " }"]};
    })())({reflectSymbol: () => "TransactionInput"});
    return x => $0["genericShow'"](x);
  })()
};
const showReduceResult = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct({genericShowArgs: v => [v ? "true" : "false"]})(Data$dShow$dGeneric.genericShowArgsProduct((() => {
      const $0 = Data$dList$dTypes.showList(showReduceWarning);
      return {genericShowArgs: v => [$0.show(v)]};
    })())(genericShowArgsProduct13)))({reflectSymbol: () => "ContractQuiescent"});
    const $1 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "RRAmbiguousTimeIntervalError"});
    return x => {
      const $2 = genericReduceResult.from(x);
      if ($2.tag === "Inl") { return $0["genericShow'"]($2._1); }
      if ($2.tag === "Inr") { return $1["genericShow'"]($2._1); }
      $runtime.fail();
    };
  })()
};
const showReduceStepResult = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct({genericShowArgs: v => [showReduceWarning.show(v)]})(Data$dShow$dGeneric.genericShowArgsProduct({
      genericShowArgs: v => [showReduceEffect.show(v)]
    })(genericShowArgsProduct12)))({reflectSymbol: () => "Reduced"});
    const $1 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "NotReduced"});
    const $2 = (() => {
      const $2 = (() => {
        const $2 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "AmbiguousTimeIntervalReductionError"});
        return {
          "genericShow'": v => {
            if (v.tag === "Inl") { return $1["genericShow'"](v._1); }
            if (v.tag === "Inr") { return $2["genericShow'"](v._1); }
            $runtime.fail();
          }
        };
      })();
      return {
        "genericShow'": v => {
          if (v.tag === "Inl") { return $0["genericShow'"](v._1); }
          if (v.tag === "Inr") { return $2["genericShow'"](v._1); }
          $runtime.fail();
        }
      };
    })();
    return x => $2["genericShow'"](genericReduceStepResult.from(x));
  })()
};
const showTransactionOutput = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor({
      genericShowArgs: v => [
        "{ txOutContract: " + showContract.show(v.txOutContract) + ", txOutPayments: " + showList.show(v.txOutPayments) + ", txOutState: " + genericShow3(v.txOutState) + ", txOutWarnings: " + showList1.show(v.txOutWarnings) + " }"
      ]
    })({reflectSymbol: () => "TransactionOutput"});
    const $1 = Data$dShow$dGeneric.genericShowConstructor({genericShowArgs: v => [showTransactionError.show(v)]})({reflectSymbol: () => "Error"});
    return x => {
      if (x.tag === "TransactionOutput") { return $0["genericShow'"](x._1); }
      if (x.tag === "Error") { return $1["genericShow'"](x._1); }
      $runtime.fail();
    };
  })()
};
const showMarloweData = {show: record => "{ marloweContract: " + showContract.show(record.marloweContract) + ", marloweState: " + genericShow3(record.marloweState) + " }"};
const euclideanRingAda = Data$dBigInt.euclideanRingBigInt;
const eqValueId = {eq: x => y => x === y};
const eq6 = /* #__PURE__ */ (() => Data$dMap$dInternal.eqMap(eqValueId)(Data$dBigInt$dArgonaut.eqBigInt).eq)();
const ordValueId = {compare: x => y => Data$dOrd.ordString.compare(x)(y), Eq0: () => eqValueId};
const eqToken = {eq: v => v1 => Data$dString$dCommon.toLower(v._1) === Data$dString$dCommon.toLower(v1._1) && v._2 === v1._2};
const ordToken = {
  compare: v => v1 => {
    const v2 = Data$dOrd.ordString.compare(Data$dString$dCommon.toLower(v._1))(Data$dString$dCommon.toLower(v1._1));
    if (v2 === "EQ") { return Data$dOrd.ordString.compare(v._2)(v1._2); }
    return v2;
  },
  Eq0: () => eqToken
};
const eqTimeouts = {
  eq: ra => rb => ra.maxTime === rb.maxTime && (ra.minTime.tag === "Nothing"
    ? rb.minTime.tag === "Nothing"
    : ra.minTime.tag === "Just" && rb.minTime.tag === "Just" && ra.minTime._1 === rb.minTime._1)
};
const eqTimeInterval = {eq: x => y => x._1 === y._1 && x._2 === y._2};
const ordTimeInterval = {
  compare: x => y => {
    const v = Data$dOrd.ordNumber.compare(x._1)(y._1);
    if (v === "LT") { return Data$dOrdering.LT; }
    if (v === "GT") { return Data$dOrdering.GT; }
    return Data$dOrd.ordNumber.compare(x._2)(y._2);
  },
  Eq0: () => eqTimeInterval
};
const eqRational = {eq: x => y => Data$dBigInt.biEquals(x._1)(y._1) && Data$dBigInt.biEquals(x._2)(y._2)};
const ordRational = {
  compare: x => y => {
    const v = Data$dBigInt.ordBigInt.compare(x._1)(y._1);
    if (v === "LT") { return Data$dOrdering.LT; }
    if (v === "GT") { return Data$dOrdering.GT; }
    return Data$dBigInt.ordBigInt.compare(x._2)(y._2);
  },
  Eq0: () => eqRational
};
const eqParty = {
  eq: x => y => {
    if (x.tag === "Address") { return y.tag === "Address" && x._1 === y._1; }
    return x.tag === "Role" && y.tag === "Role" && x._1 === y._1;
  }
};
const eq10 = /* #__PURE__ */ (() => Data$dMap$dInternal.eqMap({
  eq: x => y => (x._1.tag === "Address" ? y._1.tag === "Address" && x._1._1 === y._1._1 : x._1.tag === "Role" && y._1.tag === "Role" && x._1._1 === y._1._1) && eqToken.eq(x._2)(y._2)
})(Data$dBigInt$dArgonaut.eqBigInt).eq)();
const eqPayee = {
  eq: x => y => {
    if (x.tag === "Account") {
      return y.tag === "Account" && (x._1.tag === "Address" ? y._1.tag === "Address" && x._1._1 === y._1._1 : x._1.tag === "Role" && y._1.tag === "Role" && x._1._1 === y._1._1);
    }
    return x.tag === "Party" && y.tag === "Party" && (x._1.tag === "Address"
      ? y._1.tag === "Address" && x._1._1 === y._1._1
      : x._1.tag === "Role" && y._1.tag === "Role" && x._1._1 === y._1._1);
  }
};
const eqPayment = {
  eq: x => y => (x._1.tag === "Address" ? y._1.tag === "Address" && x._1._1 === y._1._1 : x._1.tag === "Role" && y._1.tag === "Role" && x._1._1 === y._1._1) && eqPayee.eq(x._2)(y._2) && eqToken.eq(x._3)(y._3) && Data$dBigInt.biEquals(x._4)(y._4)
};
const eq13 = xs => ys => {
  const go = v => v1 => v2 => {
    if (!v2) { return false; }
    if (v.tag === "Nil") { return v1.tag === "Nil" && v2; }
    return v.tag === "Cons" && v1.tag === "Cons" && go(v._2)(v1._2)(v2 && eqPayment.eq(v1._1)(v._1));
  };
  return go(xs)(ys)(true);
};
const eqReduceEffect = {
  eq: x => y => {
    if (x.tag === "ReduceWithPayment") { return y.tag === "ReduceWithPayment" && eqPayment.eq(x._1)(y._1); }
    return x.tag === "ReduceNoPayment" && y.tag === "ReduceNoPayment";
  }
};
const eqReduceWarning = {
  eq: x => y => {
    if (x.tag === "ReduceNoWarning") { return y.tag === "ReduceNoWarning"; }
    if (x.tag === "ReduceNonPositivePay") {
      return y.tag === "ReduceNonPositivePay" && (x._1.tag === "Address"
        ? y._1.tag === "Address" && x._1._1 === y._1._1
        : x._1.tag === "Role" && y._1.tag === "Role" && x._1._1 === y._1._1) && eqPayee.eq(x._2)(y._2) && eqToken.eq(x._3)(y._3) && Data$dBigInt.biEquals(x._4)(y._4);
    }
    if (x.tag === "ReducePartialPay") {
      return y.tag === "ReducePartialPay" && (x._1.tag === "Address"
        ? y._1.tag === "Address" && x._1._1 === y._1._1
        : x._1.tag === "Role" && y._1.tag === "Role" && x._1._1 === y._1._1) && eqPayee.eq(x._2)(y._2) && eqToken.eq(x._3)(y._3) && Data$dBigInt.biEquals(x._4)(y._4) && Data$dBigInt.biEquals(x._5)(y._5);
    }
    if (x.tag === "ReduceShadowing") { return y.tag === "ReduceShadowing" && x._1 === y._1 && Data$dBigInt.biEquals(x._2)(y._2) && Data$dBigInt.biEquals(x._3)(y._3); }
    return x.tag === "ReduceAssertionFailed" && y.tag === "ReduceAssertionFailed";
  }
};
const eq15 = xs => ys => {
  const go = v => v1 => v2 => {
    if (!v2) { return false; }
    if (v.tag === "Nil") { return v1.tag === "Nil" && v2; }
    return v.tag === "Cons" && v1.tag === "Cons" && go(v._2)(v1._2)(v2 && eqReduceWarning.eq(v1._1)(v._1));
  };
  return go(xs)(ys)(true);
};
const eqTransactionWarning = {
  eq: x => y => {
    if (x.tag === "TransactionNonPositiveDeposit") {
      return y.tag === "TransactionNonPositiveDeposit" && (x._1.tag === "Address"
        ? y._1.tag === "Address" && x._1._1 === y._1._1
        : x._1.tag === "Role" && y._1.tag === "Role" && x._1._1 === y._1._1) && (x._2.tag === "Address"
        ? y._2.tag === "Address" && x._2._1 === y._2._1
        : x._2.tag === "Role" && y._2.tag === "Role" && x._2._1 === y._2._1) && eqToken.eq(x._3)(y._3) && Data$dBigInt.biEquals(x._4)(y._4);
    }
    if (x.tag === "TransactionNonPositivePay") {
      return y.tag === "TransactionNonPositivePay" && (x._1.tag === "Address"
        ? y._1.tag === "Address" && x._1._1 === y._1._1
        : x._1.tag === "Role" && y._1.tag === "Role" && x._1._1 === y._1._1) && eqPayee.eq(x._2)(y._2) && eqToken.eq(x._3)(y._3) && Data$dBigInt.biEquals(x._4)(y._4);
    }
    if (x.tag === "TransactionPartialPay") {
      return y.tag === "TransactionPartialPay" && (x._1.tag === "Address"
        ? y._1.tag === "Address" && x._1._1 === y._1._1
        : x._1.tag === "Role" && y._1.tag === "Role" && x._1._1 === y._1._1) && eqPayee.eq(x._2)(y._2) && eqToken.eq(x._3)(y._3) && Data$dBigInt.biEquals(x._4)(y._4) && Data$dBigInt.biEquals(x._5)(y._5);
    }
    if (x.tag === "TransactionShadowing") { return y.tag === "TransactionShadowing" && x._1 === y._1 && Data$dBigInt.biEquals(x._2)(y._2) && Data$dBigInt.biEquals(x._3)(y._3); }
    return x.tag === "TransactionAssertionFailed" && y.tag === "TransactionAssertionFailed";
  }
};
const eq17 = xs => ys => {
  const go = v => v1 => v2 => {
    if (!v2) { return false; }
    if (v.tag === "Nil") { return v1.tag === "Nil" && v2; }
    return v.tag === "Cons" && v1.tag === "Cons" && go(v._2)(v1._2)(v2 && eqTransactionWarning.eq(v1._1)(v._1));
  };
  return go(xs)(ys)(true);
};
const ordParty = {
  compare: x => y => {
    if (x.tag === "Address") {
      if (y.tag === "Address") { return Data$dOrd.ordString.compare(x._1)(y._1); }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Address") { return Data$dOrdering.GT; }
    if (x.tag === "Role" && y.tag === "Role") { return Data$dOrd.ordString.compare(x._1)(y._1); }
    $runtime.fail();
  },
  Eq0: () => eqParty
};
const ordTuple = /* #__PURE__ */ Data$dTuple.ordTuple(ordParty)(ordToken);
const ordPayee = {
  compare: x => y => {
    if (x.tag === "Account") {
      if (y.tag === "Account") { return ordParty.compare(x._1)(y._1); }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Account") { return Data$dOrdering.GT; }
    if (x.tag === "Party" && y.tag === "Party") { return ordParty.compare(x._1)(y._1); }
    $runtime.fail();
  },
  Eq0: () => eqPayee
};
const ordPayment = {
  compare: x => y => {
    const v = ordParty.compare(x._1)(y._1);
    if (v === "LT") { return Data$dOrdering.LT; }
    if (v === "GT") { return Data$dOrdering.GT; }
    const v1 = ordPayee.compare(x._2)(y._2);
    if (v1 === "LT") { return Data$dOrdering.LT; }
    if (v1 === "GT") { return Data$dOrdering.GT; }
    const v2 = ordToken.compare(x._3)(y._3);
    if (v2 === "LT") { return Data$dOrdering.LT; }
    if (v2 === "GT") { return Data$dOrdering.GT; }
    return Data$dBigInt.ordBigInt.compare(x._4)(y._4);
  },
  Eq0: () => eqPayment
};
const ordReduceWarning = {
  compare: x => y => {
    if (x.tag === "ReduceNoWarning") {
      if (y.tag === "ReduceNoWarning") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "ReduceNoWarning") { return Data$dOrdering.GT; }
    if (x.tag === "ReduceNonPositivePay") {
      if (y.tag === "ReduceNonPositivePay") {
        const v = ordParty.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        const v1 = ordPayee.compare(x._2)(y._2);
        if (v1 === "LT") { return Data$dOrdering.LT; }
        if (v1 === "GT") { return Data$dOrdering.GT; }
        const v2 = ordToken.compare(x._3)(y._3);
        if (v2 === "LT") { return Data$dOrdering.LT; }
        if (v2 === "GT") { return Data$dOrdering.GT; }
        return Data$dBigInt.ordBigInt.compare(x._4)(y._4);
      }
      return Data$dOrdering.LT;
    }
    if (y.tag === "ReduceNonPositivePay") { return Data$dOrdering.GT; }
    if (x.tag === "ReducePartialPay") {
      if (y.tag === "ReducePartialPay") {
        const v = ordParty.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        const v1 = ordPayee.compare(x._2)(y._2);
        if (v1 === "LT") { return Data$dOrdering.LT; }
        if (v1 === "GT") { return Data$dOrdering.GT; }
        const v2 = ordToken.compare(x._3)(y._3);
        if (v2 === "LT") { return Data$dOrdering.LT; }
        if (v2 === "GT") { return Data$dOrdering.GT; }
        const v3 = Data$dBigInt.ordBigInt.compare(x._4)(y._4);
        if (v3 === "LT") { return Data$dOrdering.LT; }
        if (v3 === "GT") { return Data$dOrdering.GT; }
        return Data$dBigInt.ordBigInt.compare(x._5)(y._5);
      }
      return Data$dOrdering.LT;
    }
    if (y.tag === "ReducePartialPay") { return Data$dOrdering.GT; }
    if (x.tag === "ReduceShadowing") {
      if (y.tag === "ReduceShadowing") {
        const v = Data$dOrd.ordString.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        const v1 = Data$dBigInt.ordBigInt.compare(x._2)(y._2);
        if (v1 === "LT") { return Data$dOrdering.LT; }
        if (v1 === "GT") { return Data$dOrdering.GT; }
        return Data$dBigInt.ordBigInt.compare(x._3)(y._3);
      }
      return Data$dOrdering.LT;
    }
    if (y.tag === "ReduceShadowing") { return Data$dOrdering.GT; }
    if (x.tag === "ReduceAssertionFailed" && y.tag === "ReduceAssertionFailed") { return Data$dOrdering.EQ; }
    $runtime.fail();
  },
  Eq0: () => eqReduceWarning
};
const ordTransactionWarning = {
  compare: x => y => {
    if (x.tag === "TransactionNonPositiveDeposit") {
      if (y.tag === "TransactionNonPositiveDeposit") {
        const v = ordParty.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        const v1 = ordParty.compare(x._2)(y._2);
        if (v1 === "LT") { return Data$dOrdering.LT; }
        if (v1 === "GT") { return Data$dOrdering.GT; }
        const v2 = ordToken.compare(x._3)(y._3);
        if (v2 === "LT") { return Data$dOrdering.LT; }
        if (v2 === "GT") { return Data$dOrdering.GT; }
        return Data$dBigInt.ordBigInt.compare(x._4)(y._4);
      }
      return Data$dOrdering.LT;
    }
    if (y.tag === "TransactionNonPositiveDeposit") { return Data$dOrdering.GT; }
    if (x.tag === "TransactionNonPositivePay") {
      if (y.tag === "TransactionNonPositivePay") {
        const v = ordParty.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        const v1 = ordPayee.compare(x._2)(y._2);
        if (v1 === "LT") { return Data$dOrdering.LT; }
        if (v1 === "GT") { return Data$dOrdering.GT; }
        const v2 = ordToken.compare(x._3)(y._3);
        if (v2 === "LT") { return Data$dOrdering.LT; }
        if (v2 === "GT") { return Data$dOrdering.GT; }
        return Data$dBigInt.ordBigInt.compare(x._4)(y._4);
      }
      return Data$dOrdering.LT;
    }
    if (y.tag === "TransactionNonPositivePay") { return Data$dOrdering.GT; }
    if (x.tag === "TransactionPartialPay") {
      if (y.tag === "TransactionPartialPay") {
        const v = ordParty.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        const v1 = ordPayee.compare(x._2)(y._2);
        if (v1 === "LT") { return Data$dOrdering.LT; }
        if (v1 === "GT") { return Data$dOrdering.GT; }
        const v2 = ordToken.compare(x._3)(y._3);
        if (v2 === "LT") { return Data$dOrdering.LT; }
        if (v2 === "GT") { return Data$dOrdering.GT; }
        const v3 = Data$dBigInt.ordBigInt.compare(x._4)(y._4);
        if (v3 === "LT") { return Data$dOrdering.LT; }
        if (v3 === "GT") { return Data$dOrdering.GT; }
        return Data$dBigInt.ordBigInt.compare(x._5)(y._5);
      }
      return Data$dOrdering.LT;
    }
    if (y.tag === "TransactionPartialPay") { return Data$dOrdering.GT; }
    if (x.tag === "TransactionShadowing") {
      if (y.tag === "TransactionShadowing") {
        const v = Data$dOrd.ordString.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        const v1 = Data$dBigInt.ordBigInt.compare(x._2)(y._2);
        if (v1 === "LT") { return Data$dOrdering.LT; }
        if (v1 === "GT") { return Data$dOrdering.GT; }
        return Data$dBigInt.ordBigInt.compare(x._3)(y._3);
      }
      return Data$dOrdering.LT;
    }
    if (y.tag === "TransactionShadowing") { return Data$dOrdering.GT; }
    if (x.tag === "TransactionAssertionFailed" && y.tag === "TransactionAssertionFailed") { return Data$dOrdering.EQ; }
    $runtime.fail();
  },
  Eq0: () => eqTransactionWarning
};
const eqMarloweParams = {eq: x => y => x.rolePayoutValidatorHash === y.rolePayoutValidatorHash && x.rolesCurrency.unCurrencySymbol === y.rolesCurrency.unCurrencySymbol};
const ordMarloweParams = {
  compare: x => y => {
    const v = Data$dOrd.ordString.compare(x.rolePayoutValidatorHash)(y.rolePayoutValidatorHash);
    if (v === "LT") { return Data$dOrdering.LT; }
    if (v === "GT") { return Data$dOrdering.GT; }
    return Data$dOrd.ordString.compare(x.rolesCurrency.unCurrencySymbol)(y.rolesCurrency.unCurrencySymbol);
  },
  Eq0: () => eqMarloweParams
};
const eqIntervalError = {
  eq: x => y => {
    if (x.tag === "InvalidInterval") { return y.tag === "InvalidInterval" && x._1._1 === y._1._1 && x._1._2 === y._1._2; }
    return x.tag === "IntervalInPastError" && y.tag === "IntervalInPastError" && x._1 === y._1 && x._2._1 === y._2._1 && x._2._2 === y._2._2;
  }
};
const eqTransactionError = {
  eq: x => y => {
    if (x.tag === "TEAmbiguousTimeIntervalError") { return y.tag === "TEAmbiguousTimeIntervalError"; }
    if (x.tag === "TEApplyNoMatchError") { return y.tag === "TEApplyNoMatchError"; }
    if (x.tag === "TEIntervalError") {
      return y.tag === "TEIntervalError" && (x._1.tag === "InvalidInterval"
        ? y._1.tag === "InvalidInterval" && x._1._1._1 === y._1._1._1 && x._1._1._2 === y._1._1._2
        : x._1.tag === "IntervalInPastError" && y._1.tag === "IntervalInPastError" && x._1._1 === y._1._1 && x._1._2._1 === y._1._2._1 && x._1._2._2 === y._1._2._2);
    }
    if (x.tag === "TEUselessTransaction") { return y.tag === "TEUselessTransaction"; }
    return x.tag === "TEHashMismatch" && y.tag === "TEHashMismatch";
  }
};
const ordIntervalError = {
  compare: x => y => {
    if (x.tag === "InvalidInterval") {
      if (y.tag === "InvalidInterval") { return ordTimeInterval.compare(x._1)(y._1); }
      return Data$dOrdering.LT;
    }
    if (y.tag === "InvalidInterval") { return Data$dOrdering.GT; }
    if (x.tag === "IntervalInPastError" && y.tag === "IntervalInPastError") {
      const v = Data$dOrd.ordNumber.compare(x._1)(y._1);
      if (v === "LT") { return Data$dOrdering.LT; }
      if (v === "GT") { return Data$dOrdering.GT; }
      return ordTimeInterval.compare(x._2)(y._2);
    }
    $runtime.fail();
  },
  Eq0: () => eqIntervalError
};
const ordTransactionError = {
  compare: x => y => {
    if (x.tag === "TEAmbiguousTimeIntervalError") {
      if (y.tag === "TEAmbiguousTimeIntervalError") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "TEAmbiguousTimeIntervalError") { return Data$dOrdering.GT; }
    if (x.tag === "TEApplyNoMatchError") {
      if (y.tag === "TEApplyNoMatchError") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "TEApplyNoMatchError") { return Data$dOrdering.GT; }
    if (x.tag === "TEIntervalError") {
      if (y.tag === "TEIntervalError") { return ordIntervalError.compare(x._1)(y._1); }
      return Data$dOrdering.LT;
    }
    if (y.tag === "TEIntervalError") { return Data$dOrdering.GT; }
    if (x.tag === "TEUselessTransaction") {
      if (y.tag === "TEUselessTransaction") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "TEUselessTransaction") { return Data$dOrdering.GT; }
    if (x.tag === "TEHashMismatch" && y.tag === "TEHashMismatch") { return Data$dOrdering.EQ; }
    $runtime.fail();
  },
  Eq0: () => eqTransactionError
};
const eqEnvironment = {eq: x => y => x.timeInterval._1 === y.timeInterval._1 && x.timeInterval._2 === y.timeInterval._2};
const ordEnvironment = {compare: x => y => ordTimeInterval.compare(x.timeInterval)(y.timeInterval), Eq0: () => eqEnvironment};
const eqChoiceId = {
  eq: x => y => x._1 === y._1 && (x._2.tag === "Address" ? y._2.tag === "Address" && x._2._1 === y._2._1 : x._2.tag === "Role" && y._2.tag === "Role" && x._2._1 === y._2._1)
};
const eq22 = /* #__PURE__ */ (() => Data$dMap$dInternal.eqMap(eqChoiceId)(Data$dBigInt$dArgonaut.eqBigInt).eq)();
const eqInputContent = {
  eq: x => y => {
    if (x.tag === "IDeposit") {
      return y.tag === "IDeposit" && (x._1.tag === "Address" ? y._1.tag === "Address" && x._1._1 === y._1._1 : x._1.tag === "Role" && y._1.tag === "Role" && x._1._1 === y._1._1) && (x._2.tag === "Address"
        ? y._2.tag === "Address" && x._2._1 === y._2._1
        : x._2.tag === "Role" && y._2.tag === "Role" && x._2._1 === y._2._1) && eqToken.eq(x._3)(y._3) && Data$dBigInt.biEquals(x._4)(y._4);
    }
    if (x.tag === "IChoice") {
      return y.tag === "IChoice" && x._1._1 === y._1._1 && (x._1._2.tag === "Address"
        ? y._1._2.tag === "Address" && x._1._2._1 === y._1._2._1
        : x._1._2.tag === "Role" && y._1._2.tag === "Role" && x._1._2._1 === y._1._2._1) && Data$dBigInt.biEquals(x._2)(y._2);
    }
    return x.tag === "INotify" && y.tag === "INotify";
  }
};
const eqState = {eq: x => y => eq10(x.accounts)(y.accounts) && eq6(x.boundValues)(y.boundValues) && eq22(x.choices)(y.choices) && x.minTime === y.minTime};
const eqIntervalResult = {
  eq: x => y => {
    if (x.tag === "IntervalTrimmed") {
      return y.tag === "IntervalTrimmed" && x._1.timeInterval._1 === y._1.timeInterval._1 && x._1.timeInterval._2 === y._1.timeInterval._2 && eqState.eq(x._2)(y._2);
    }
    return x.tag === "IntervalError" && y.tag === "IntervalError" && (x._1.tag === "InvalidInterval"
      ? y._1.tag === "InvalidInterval" && x._1._1._1 === y._1._1._1 && x._1._1._2 === y._1._1._2
      : x._1.tag === "IntervalInPastError" && y._1.tag === "IntervalInPastError" && x._1._1 === y._1._1 && x._1._2._1 === y._1._2._1 && x._1._2._2 === y._1._2._2);
  }
};
const eqValue = {
  eq: x => y => {
    if (x.tag === "AvailableMoney") {
      return y.tag === "AvailableMoney" && (x._1.tag === "Address"
        ? y._1.tag === "Address" && x._1._1 === y._1._1
        : x._1.tag === "Role" && y._1.tag === "Role" && x._1._1 === y._1._1) && eqToken.eq(x._2)(y._2);
    }
    if (x.tag === "Constant") { return y.tag === "Constant" && Data$dBigInt.biEquals(x._1)(y._1); }
    if (x.tag === "NegValue") { return y.tag === "NegValue" && eqValue.eq(x._1)(y._1); }
    if (x.tag === "AddValue") { return y.tag === "AddValue" && eqValue.eq(x._1)(y._1) && eqValue.eq(x._2)(y._2); }
    if (x.tag === "SubValue") { return y.tag === "SubValue" && eqValue.eq(x._1)(y._1) && eqValue.eq(x._2)(y._2); }
    if (x.tag === "MulValue") { return y.tag === "MulValue" && eqValue.eq(x._1)(y._1) && eqValue.eq(x._2)(y._2); }
    if (x.tag === "DivValue") { return y.tag === "DivValue" && eqValue.eq(x._1)(y._1) && eqValue.eq(x._2)(y._2); }
    if (x.tag === "ChoiceValue") {
      return y.tag === "ChoiceValue" && x._1._1 === y._1._1 && (x._1._2.tag === "Address"
        ? y._1._2.tag === "Address" && x._1._2._1 === y._1._2._1
        : x._1._2.tag === "Role" && y._1._2.tag === "Role" && x._1._2._1 === y._1._2._1);
    }
    if (x.tag === "TimeIntervalStart") { return y.tag === "TimeIntervalStart"; }
    if (x.tag === "TimeIntervalEnd") { return y.tag === "TimeIntervalEnd"; }
    if (x.tag === "UseValue") { return y.tag === "UseValue" && x._1 === y._1; }
    return x.tag === "Cond" && y.tag === "Cond" && eqObservation.eq(x._1)(y._1) && eqValue.eq(x._2)(y._2) && eqValue.eq(x._3)(y._3);
  }
};
const eqObservation = {
  eq: x => y => {
    if (x.tag === "AndObs") { return y.tag === "AndObs" && eqObservation.eq(x._1)(y._1) && eqObservation.eq(x._2)(y._2); }
    if (x.tag === "OrObs") { return y.tag === "OrObs" && eqObservation.eq(x._1)(y._1) && eqObservation.eq(x._2)(y._2); }
    if (x.tag === "NotObs") { return y.tag === "NotObs" && eqObservation.eq(x._1)(y._1); }
    if (x.tag === "ChoseSomething") {
      return y.tag === "ChoseSomething" && x._1._1 === y._1._1 && (x._1._2.tag === "Address"
        ? y._1._2.tag === "Address" && x._1._2._1 === y._1._2._1
        : x._1._2.tag === "Role" && y._1._2.tag === "Role" && x._1._2._1 === y._1._2._1);
    }
    if (x.tag === "ValueGE") { return y.tag === "ValueGE" && eqValue.eq(x._1)(y._1) && eqValue.eq(x._2)(y._2); }
    if (x.tag === "ValueGT") { return y.tag === "ValueGT" && eqValue.eq(x._1)(y._1) && eqValue.eq(x._2)(y._2); }
    if (x.tag === "ValueLT") { return y.tag === "ValueLT" && eqValue.eq(x._1)(y._1) && eqValue.eq(x._2)(y._2); }
    if (x.tag === "ValueLE") { return y.tag === "ValueLE" && eqValue.eq(x._1)(y._1) && eqValue.eq(x._2)(y._2); }
    if (x.tag === "ValueEQ") { return y.tag === "ValueEQ" && eqValue.eq(x._1)(y._1) && eqValue.eq(x._2)(y._2); }
    if (x.tag === "TrueObs") { return y.tag === "TrueObs"; }
    return x.tag === "FalseObs" && y.tag === "FalseObs";
  }
};
const ordChoiceId = {
  compare: x => y => {
    const v = Data$dOrd.ordString.compare(x._1)(y._1);
    if (v === "LT") { return Data$dOrdering.LT; }
    if (v === "GT") { return Data$dOrdering.GT; }
    return ordParty.compare(x._2)(y._2);
  },
  Eq0: () => eqChoiceId
};
const ordInputContent = {
  compare: x => y => {
    if (x.tag === "IDeposit") {
      if (y.tag === "IDeposit") {
        const v = ordParty.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        const v1 = ordParty.compare(x._2)(y._2);
        if (v1 === "LT") { return Data$dOrdering.LT; }
        if (v1 === "GT") { return Data$dOrdering.GT; }
        const v2 = ordToken.compare(x._3)(y._3);
        if (v2 === "LT") { return Data$dOrdering.LT; }
        if (v2 === "GT") { return Data$dOrdering.GT; }
        return Data$dBigInt.ordBigInt.compare(x._4)(y._4);
      }
      return Data$dOrdering.LT;
    }
    if (y.tag === "IDeposit") { return Data$dOrdering.GT; }
    if (x.tag === "IChoice") {
      if (y.tag === "IChoice") {
        const v = ordChoiceId.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        return Data$dBigInt.ordBigInt.compare(x._2)(y._2);
      }
      return Data$dOrdering.LT;
    }
    if (y.tag === "IChoice") { return Data$dOrdering.GT; }
    if (x.tag === "INotify" && y.tag === "INotify") { return Data$dOrdering.EQ; }
    $runtime.fail();
  },
  Eq0: () => eqInputContent
};
const ordValue = {
  compare: x => y => {
    if (x.tag === "AvailableMoney") {
      if (y.tag === "AvailableMoney") {
        const v = ordParty.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        return ordToken.compare(x._2)(y._2);
      }
      return Data$dOrdering.LT;
    }
    if (y.tag === "AvailableMoney") { return Data$dOrdering.GT; }
    if (x.tag === "Constant") {
      if (y.tag === "Constant") { return Data$dBigInt.ordBigInt.compare(x._1)(y._1); }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Constant") { return Data$dOrdering.GT; }
    if (x.tag === "NegValue") {
      if (y.tag === "NegValue") { return ordValue.compare(x._1)(y._1); }
      return Data$dOrdering.LT;
    }
    if (y.tag === "NegValue") { return Data$dOrdering.GT; }
    if (x.tag === "AddValue") {
      if (y.tag === "AddValue") {
        const v = ordValue.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        return ordValue.compare(x._2)(y._2);
      }
      return Data$dOrdering.LT;
    }
    if (y.tag === "AddValue") { return Data$dOrdering.GT; }
    if (x.tag === "SubValue") {
      if (y.tag === "SubValue") {
        const v = ordValue.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        return ordValue.compare(x._2)(y._2);
      }
      return Data$dOrdering.LT;
    }
    if (y.tag === "SubValue") { return Data$dOrdering.GT; }
    if (x.tag === "MulValue") {
      if (y.tag === "MulValue") {
        const v = ordValue.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        return ordValue.compare(x._2)(y._2);
      }
      return Data$dOrdering.LT;
    }
    if (y.tag === "MulValue") { return Data$dOrdering.GT; }
    if (x.tag === "DivValue") {
      if (y.tag === "DivValue") {
        const v = ordValue.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        return ordValue.compare(x._2)(y._2);
      }
      return Data$dOrdering.LT;
    }
    if (y.tag === "DivValue") { return Data$dOrdering.GT; }
    if (x.tag === "ChoiceValue") {
      if (y.tag === "ChoiceValue") { return ordChoiceId.compare(x._1)(y._1); }
      return Data$dOrdering.LT;
    }
    if (y.tag === "ChoiceValue") { return Data$dOrdering.GT; }
    if (x.tag === "TimeIntervalStart") {
      if (y.tag === "TimeIntervalStart") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "TimeIntervalStart") { return Data$dOrdering.GT; }
    if (x.tag === "TimeIntervalEnd") {
      if (y.tag === "TimeIntervalEnd") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "TimeIntervalEnd") { return Data$dOrdering.GT; }
    if (x.tag === "UseValue") {
      if (y.tag === "UseValue") { return Data$dOrd.ordString.compare(x._1)(y._1); }
      return Data$dOrdering.LT;
    }
    if (y.tag === "UseValue") { return Data$dOrdering.GT; }
    if (x.tag === "Cond" && y.tag === "Cond") {
      const v = ordObservation.compare(x._1)(y._1);
      if (v === "LT") { return Data$dOrdering.LT; }
      if (v === "GT") { return Data$dOrdering.GT; }
      const v1 = ordValue.compare(x._2)(y._2);
      if (v1 === "LT") { return Data$dOrdering.LT; }
      if (v1 === "GT") { return Data$dOrdering.GT; }
      return ordValue.compare(x._3)(y._3);
    }
    $runtime.fail();
  },
  Eq0: () => eqValue
};
const ordObservation = {
  compare: x => y => {
    if (x.tag === "AndObs") {
      if (y.tag === "AndObs") {
        const v = ordObservation.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        return ordObservation.compare(x._2)(y._2);
      }
      return Data$dOrdering.LT;
    }
    if (y.tag === "AndObs") { return Data$dOrdering.GT; }
    if (x.tag === "OrObs") {
      if (y.tag === "OrObs") {
        const v = ordObservation.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        return ordObservation.compare(x._2)(y._2);
      }
      return Data$dOrdering.LT;
    }
    if (y.tag === "OrObs") { return Data$dOrdering.GT; }
    if (x.tag === "NotObs") {
      if (y.tag === "NotObs") { return ordObservation.compare(x._1)(y._1); }
      return Data$dOrdering.LT;
    }
    if (y.tag === "NotObs") { return Data$dOrdering.GT; }
    if (x.tag === "ChoseSomething") {
      if (y.tag === "ChoseSomething") { return ordChoiceId.compare(x._1)(y._1); }
      return Data$dOrdering.LT;
    }
    if (y.tag === "ChoseSomething") { return Data$dOrdering.GT; }
    if (x.tag === "ValueGE") {
      if (y.tag === "ValueGE") {
        const v = ordValue.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        return ordValue.compare(x._2)(y._2);
      }
      return Data$dOrdering.LT;
    }
    if (y.tag === "ValueGE") { return Data$dOrdering.GT; }
    if (x.tag === "ValueGT") {
      if (y.tag === "ValueGT") {
        const v = ordValue.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        return ordValue.compare(x._2)(y._2);
      }
      return Data$dOrdering.LT;
    }
    if (y.tag === "ValueGT") { return Data$dOrdering.GT; }
    if (x.tag === "ValueLT") {
      if (y.tag === "ValueLT") {
        const v = ordValue.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        return ordValue.compare(x._2)(y._2);
      }
      return Data$dOrdering.LT;
    }
    if (y.tag === "ValueLT") { return Data$dOrdering.GT; }
    if (x.tag === "ValueLE") {
      if (y.tag === "ValueLE") {
        const v = ordValue.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        return ordValue.compare(x._2)(y._2);
      }
      return Data$dOrdering.LT;
    }
    if (y.tag === "ValueLE") { return Data$dOrdering.GT; }
    if (x.tag === "ValueEQ") {
      if (y.tag === "ValueEQ") {
        const v = ordValue.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        return ordValue.compare(x._2)(y._2);
      }
      return Data$dOrdering.LT;
    }
    if (y.tag === "ValueEQ") { return Data$dOrdering.GT; }
    if (x.tag === "TrueObs") {
      if (y.tag === "TrueObs") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "TrueObs") { return Data$dOrdering.GT; }
    if (x.tag === "FalseObs" && y.tag === "FalseObs") { return Data$dOrdering.EQ; }
    $runtime.fail();
  },
  Eq0: () => eqObservation
};
const eqBound = {eq: x => y => Data$dBigInt.biEquals(x._1)(y._1) && Data$dBigInt.biEquals(x._2)(y._2)};
const eq27 = /* #__PURE__ */ (() => Data$dEq.eqArrayImpl(eqBound.eq))();
const orBound = {
  compare: x => y => {
    const v = Data$dBigInt.ordBigInt.compare(x._1)(y._1);
    if (v === "LT") { return Data$dOrdering.LT; }
    if (v === "GT") { return Data$dOrdering.GT; }
    return Data$dBigInt.ordBigInt.compare(x._2)(y._2);
  },
  Eq0: () => eqBound
};
const compare14 = /* #__PURE__ */ (() => Data$dOrd.ordArray(orBound).compare)();
const eqAssets = {eq: x => y => eq3(x)(y)};
const ordAssets = {compare: x => y => compare3(x)(y), Eq0: () => eqAssets};
const eqApplyWarning = {
  eq: x => y => {
    if (x.tag === "ApplyNoWarning") { return y.tag === "ApplyNoWarning"; }
    return x.tag === "ApplyNonPositiveDeposit" && y.tag === "ApplyNonPositiveDeposit" && (x._1.tag === "Address"
      ? y._1.tag === "Address" && x._1._1 === y._1._1
      : x._1.tag === "Role" && y._1.tag === "Role" && x._1._1 === y._1._1) && (x._2.tag === "Address"
      ? y._2.tag === "Address" && x._2._1 === y._2._1
      : x._2.tag === "Role" && y._2.tag === "Role" && x._2._1 === y._2._1) && eqToken.eq(x._3)(y._3) && Data$dBigInt.biEquals(x._4)(y._4);
  }
};
const ordApplyWarning = {
  compare: x => y => {
    if (x.tag === "ApplyNoWarning") {
      if (y.tag === "ApplyNoWarning") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "ApplyNoWarning") { return Data$dOrdering.GT; }
    if (x.tag === "ApplyNonPositiveDeposit" && y.tag === "ApplyNonPositiveDeposit") {
      const v = ordParty.compare(x._1)(y._1);
      if (v === "LT") { return Data$dOrdering.LT; }
      if (v === "GT") { return Data$dOrdering.GT; }
      const v1 = ordParty.compare(x._2)(y._2);
      if (v1 === "LT") { return Data$dOrdering.LT; }
      if (v1 === "GT") { return Data$dOrdering.GT; }
      const v2 = ordToken.compare(x._3)(y._3);
      if (v2 === "LT") { return Data$dOrdering.LT; }
      if (v2 === "GT") { return Data$dOrdering.GT; }
      return Data$dBigInt.ordBigInt.compare(x._4)(y._4);
    }
    $runtime.fail();
  },
  Eq0: () => eqApplyWarning
};
const eqAda = {eq: x => y => Data$dBigInt.biEquals(x)(y)};
const ordAda = {compare: x => y => Data$dBigInt.ordBigInt.compare(x)(y), Eq0: () => eqAda};
const eqAction = {
  eq: x => y => {
    if (x.tag === "Deposit") {
      return y.tag === "Deposit" && (x._1.tag === "Address" ? y._1.tag === "Address" && x._1._1 === y._1._1 : x._1.tag === "Role" && y._1.tag === "Role" && x._1._1 === y._1._1) && (x._2.tag === "Address"
        ? y._2.tag === "Address" && x._2._1 === y._2._1
        : x._2.tag === "Role" && y._2.tag === "Role" && x._2._1 === y._2._1) && eqToken.eq(x._3)(y._3) && eqValue.eq(x._4)(y._4);
    }
    if (x.tag === "Choice") {
      return y.tag === "Choice" && x._1._1 === y._1._1 && (x._1._2.tag === "Address"
        ? y._1._2.tag === "Address" && x._1._2._1 === y._1._2._1
        : x._1._2.tag === "Role" && y._1._2.tag === "Role" && x._1._2._1 === y._1._2._1) && eq27(x._2)(y._2);
    }
    return x.tag === "Notify" && y.tag === "Notify" && eqObservation.eq(x._1)(y._1);
  }
};
const eqContract = {
  eq: x => y => {
    if (x.tag === "Close") { return y.tag === "Close"; }
    if (x.tag === "Pay") {
      return y.tag === "Pay" && (x._1.tag === "Address" ? y._1.tag === "Address" && x._1._1 === y._1._1 : x._1.tag === "Role" && y._1.tag === "Role" && x._1._1 === y._1._1) && eqPayee.eq(x._2)(y._2) && eqToken.eq(x._3)(y._3) && eqValue.eq(x._4)(y._4) && eqContract.eq(x._5)(y._5);
    }
    if (x.tag === "If") { return y.tag === "If" && eqObservation.eq(x._1)(y._1) && eqContract.eq(x._2)(y._2) && eqContract.eq(x._3)(y._3); }
    if (x.tag === "When") { return y.tag === "When" && Data$dEq.eqArrayImpl(eqCase.eq)(x._1)(y._1) && x._2 === y._2 && eqContract.eq(x._3)(y._3); }
    if (x.tag === "Let") { return y.tag === "Let" && x._1 === y._1 && eqValue.eq(x._2)(y._2) && eqContract.eq(x._3)(y._3); }
    return x.tag === "Assert" && y.tag === "Assert" && eqObservation.eq(x._1)(y._1) && eqContract.eq(x._2)(y._2);
  }
};
const eqCase = {
  eq: x => y => {
    if (x.tag === "Case") { return y.tag === "Case" && eqAction.eq(x._1)(y._1) && eqContract.eq(x._2)(y._2); }
    return x.tag === "MerkleizedCase" && y.tag === "MerkleizedCase" && eqAction.eq(x._1)(y._1) && x._2 === y._2;
  }
};
const eqApplyAllResult = {
  eq: x => y => {
    if (x.tag === "ApplyAllSuccess") {
      return y.tag === "ApplyAllSuccess" && x._1 === y._1 && eq17(x._2)(y._2) && eq13(x._3)(y._3) && eqState.eq(x._4)(y._4) && eqContract.eq(x._5)(y._5);
    }
    if (x.tag === "ApplyAllNoMatchError") { return y.tag === "ApplyAllNoMatchError"; }
    if (x.tag === "ApplyAllAmbiguousTimeIntervalError") { return y.tag === "ApplyAllAmbiguousTimeIntervalError"; }
    return x.tag === "ApplyAllHashMismatch" && y.tag === "ApplyAllHashMismatch";
  }
};
const eqApplyResult = {
  eq: x => y => {
    if (x.tag === "Applied") { return y.tag === "Applied" && eqApplyWarning.eq(x._1)(y._1) && eqState.eq(x._2)(y._2) && eqContract.eq(x._3)(y._3); }
    if (x.tag === "ApplyNoMatchError") { return y.tag === "ApplyNoMatchError"; }
    return x.tag === "ApplyHashMismatch" && y.tag === "ApplyHashMismatch";
  }
};
const eqInput = {
  eq: x => y => {
    if (x.tag === "NormalInput") { return y.tag === "NormalInput" && eqInputContent.eq(x._1)(y._1); }
    return x.tag === "MerkleizedInput" && y.tag === "MerkleizedInput" && eqInputContent.eq(x._1)(y._1) && x._2 === y._2 && eqContract.eq(x._3)(y._3);
  }
};
const eq31 = xs => ys => {
  const go = v => v1 => v2 => {
    if (!v2) { return false; }
    if (v.tag === "Nil") { return v1.tag === "Nil" && v2; }
    return v.tag === "Cons" && v1.tag === "Cons" && go(v._2)(v1._2)(v2 && eqInput.eq(v1._1)(v._1));
  };
  return go(xs)(ys)(true);
};
const eqTransactionInput = {eq: x => y => eq31(x.inputs)(y.inputs) && x.interval._1 === y.interval._1 && x.interval._2 === y.interval._2};
const eqReduceResult = {
  eq: x => y => {
    if (x.tag === "ContractQuiescent") {
      return y.tag === "ContractQuiescent" && x._1 === y._1 && eq15(x._2)(y._2) && eq13(x._3)(y._3) && eqState.eq(x._4)(y._4) && eqContract.eq(x._5)(y._5);
    }
    return x.tag === "RRAmbiguousTimeIntervalError" && y.tag === "RRAmbiguousTimeIntervalError";
  }
};
const eqReduceStepResult = {
  eq: x => y => {
    if (x.tag === "Reduced") {
      return y.tag === "Reduced" && eqReduceWarning.eq(x._1)(y._1) && eqReduceEffect.eq(x._2)(y._2) && eqState.eq(x._3)(y._3) && eqContract.eq(x._4)(y._4);
    }
    if (x.tag === "NotReduced") { return y.tag === "NotReduced"; }
    return x.tag === "AmbiguousTimeIntervalReductionError" && y.tag === "AmbiguousTimeIntervalReductionError";
  }
};
const eqTransactionOutput = {
  eq: x => y => {
    if (x.tag === "TransactionOutput") {
      return y.tag === "TransactionOutput" && eqContract.eq(x._1.txOutContract)(y._1.txOutContract) && eq13(x._1.txOutPayments)(y._1.txOutPayments) && eqState.eq(x._1.txOutState)(y._1.txOutState) && eq17(x._1.txOutWarnings)(y._1.txOutWarnings);
    }
    return x.tag === "Error" && y.tag === "Error" && eqTransactionError.eq(x._1)(y._1);
  }
};
const eqMarloweData = {eq: x => y => eqContract.eq(x.marloweContract)(y.marloweContract) && eqState.eq(x.marloweState)(y.marloweState)};
const ordAction = {
  compare: x => y => {
    if (x.tag === "Deposit") {
      if (y.tag === "Deposit") {
        const v = ordParty.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        const v1 = ordParty.compare(x._2)(y._2);
        if (v1 === "LT") { return Data$dOrdering.LT; }
        if (v1 === "GT") { return Data$dOrdering.GT; }
        const v2 = ordToken.compare(x._3)(y._3);
        if (v2 === "LT") { return Data$dOrdering.LT; }
        if (v2 === "GT") { return Data$dOrdering.GT; }
        return ordValue.compare(x._4)(y._4);
      }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Deposit") { return Data$dOrdering.GT; }
    if (x.tag === "Choice") {
      if (y.tag === "Choice") {
        const v = ordChoiceId.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        return compare14(x._2)(y._2);
      }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Choice") { return Data$dOrdering.GT; }
    if (x.tag === "Notify" && y.tag === "Notify") { return ordObservation.compare(x._1)(y._1); }
    $runtime.fail();
  },
  Eq0: () => eqAction
};
const ordContract = {
  compare: x => y => {
    if (x.tag === "Close") {
      if (y.tag === "Close") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Close") { return Data$dOrdering.GT; }
    if (x.tag === "Pay") {
      if (y.tag === "Pay") {
        const v = ordParty.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        const v1 = ordPayee.compare(x._2)(y._2);
        if (v1 === "LT") { return Data$dOrdering.LT; }
        if (v1 === "GT") { return Data$dOrdering.GT; }
        const v2 = ordToken.compare(x._3)(y._3);
        if (v2 === "LT") { return Data$dOrdering.LT; }
        if (v2 === "GT") { return Data$dOrdering.GT; }
        const v3 = ordValue.compare(x._4)(y._4);
        if (v3 === "LT") { return Data$dOrdering.LT; }
        if (v3 === "GT") { return Data$dOrdering.GT; }
        return ordContract.compare(x._5)(y._5);
      }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Pay") { return Data$dOrdering.GT; }
    if (x.tag === "If") {
      if (y.tag === "If") {
        const v = ordObservation.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        const v1 = ordContract.compare(x._2)(y._2);
        if (v1 === "LT") { return Data$dOrdering.LT; }
        if (v1 === "GT") { return Data$dOrdering.GT; }
        return ordContract.compare(x._3)(y._3);
      }
      return Data$dOrdering.LT;
    }
    if (y.tag === "If") { return Data$dOrdering.GT; }
    if (x.tag === "When") {
      if (y.tag === "When") {
        const v = Data$dOrd.ordArray(ordCase).compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        const v1 = Data$dOrd.ordNumber.compare(x._2)(y._2);
        if (v1 === "LT") { return Data$dOrdering.LT; }
        if (v1 === "GT") { return Data$dOrdering.GT; }
        return ordContract.compare(x._3)(y._3);
      }
      return Data$dOrdering.LT;
    }
    if (y.tag === "When") { return Data$dOrdering.GT; }
    if (x.tag === "Let") {
      if (y.tag === "Let") {
        const v = Data$dOrd.ordString.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        const v1 = ordValue.compare(x._2)(y._2);
        if (v1 === "LT") { return Data$dOrdering.LT; }
        if (v1 === "GT") { return Data$dOrdering.GT; }
        return ordContract.compare(x._3)(y._3);
      }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Let") { return Data$dOrdering.GT; }
    if (x.tag === "Assert" && y.tag === "Assert") {
      const v = ordObservation.compare(x._1)(y._1);
      if (v === "LT") { return Data$dOrdering.LT; }
      if (v === "GT") { return Data$dOrdering.GT; }
      return ordContract.compare(x._2)(y._2);
    }
    $runtime.fail();
  },
  Eq0: () => eqContract
};
const ordCase = {
  compare: x => y => {
    if (x.tag === "Case") {
      if (y.tag === "Case") {
        const v = ordAction.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        return ordContract.compare(x._2)(y._2);
      }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Case") { return Data$dOrdering.GT; }
    if (x.tag === "MerkleizedCase" && y.tag === "MerkleizedCase") {
      const v = ordAction.compare(x._1)(y._1);
      if (v === "LT") { return Data$dOrdering.LT; }
      if (v === "GT") { return Data$dOrdering.GT; }
      return Data$dOrd.ordString.compare(x._2)(y._2);
    }
    $runtime.fail();
  },
  Eq0: () => eqCase
};
const ordInput = {
  compare: x => y => {
    if (x.tag === "NormalInput") {
      if (y.tag === "NormalInput") { return ordInputContent.compare(x._1)(y._1); }
      return Data$dOrdering.LT;
    }
    if (y.tag === "NormalInput") { return Data$dOrdering.GT; }
    if (x.tag === "MerkleizedInput" && y.tag === "MerkleizedInput") {
      const v = ordInputContent.compare(x._1)(y._1);
      if (v === "LT") { return Data$dOrdering.LT; }
      if (v === "GT") { return Data$dOrdering.GT; }
      const v1 = Data$dOrd.ordString.compare(x._2)(y._2);
      if (v1 === "LT") { return Data$dOrdering.LT; }
      if (v1 === "GT") { return Data$dOrdering.GT; }
      return ordContract.compare(x._3)(y._3);
    }
    $runtime.fail();
  },
  Eq0: () => eqInput
};
const compare17 = /* #__PURE__ */ (() => Data$dList$dTypes.ordList(ordInput).compare)();
const ordTransactionInput = {
  compare: x => y => {
    const v = compare17(x.inputs)(y.inputs);
    if (v === "LT") { return Data$dOrdering.LT; }
    if (v === "GT") { return Data$dOrdering.GT; }
    return ordTimeInterval.compare(x.interval)(y.interval);
  },
  Eq0: () => eqTransactionInput
};
const encodeJsonValueId = Data$dArgonaut$dEncode$dClass.encodeJsonJString;
const encodeJson17 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dBigInt$dArgonaut.encodeJsonBitInt)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dBigInt$dArgonaut.encodeJsonBitInt)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
    reflectSymbol: () => "value_id"
  })())({reflectSymbol: () => "is_now_assigned"})())({reflectSymbol: () => "had_value"})();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const encodeJson18 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
    reflectSymbol: () => "use_value"
  })();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const encodeJsonToken = {encodeJson: v => encodeJson5({currency_symbol: v._1, token_name: v._2})};
const gEncodeJsonCons10 = /* #__PURE__ */ Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonToken)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
  reflectSymbol: () => "token"
})();
const encodeJson19 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dBigInt$dArgonaut.encodeJsonBitInt)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(gEncodeJsonCons10)(toIsSymbol)())({
    reflectSymbol: () => "payment_from"
  })())({reflectSymbol: () => "amount"})();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const encodeJsonRational = {encodeJson: v => encodeJson6([v._1, v._2])};
const encodeJsonParty = {
  encodeJson: v => {
    if (v.tag === "Address") { return encodeJson7({address: v._1}); }
    if (v.tag === "Role") { return encodeJson8({role_token: v._1}); }
    $runtime.fail();
  }
};
const encodeJson20 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonParty)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(accountIsSymbol)();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const gEncodeJsonCons13 = /* #__PURE__ */ Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonParty)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
  reflectSymbol: () => "party"
})();
const encodeJson22 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dBigInt$dArgonaut.encodeJsonBitInt)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonParty)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonToken)(gEncodeJsonCons13)(of_tokenIsSymbol)())(in_accountIsSymbol)())({
    reflectSymbol: () => "asked_to_deposit"
  })();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const encodeJson24 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonParty)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
    reflectSymbol: () => "choice_owner"
  })())({reflectSymbol: () => "choice_name"})();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const encodeJson25 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonParty)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonParty)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonToken)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dBigInt$dArgonaut.encodeJsonBitInt)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
    reflectSymbol: () => "that_deposits"
  })())(of_tokenIsSymbol)())(into_accountIsSymbol)())({reflectSymbol: () => "input_from_party"})();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const encodeJson26 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonToken)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonParty)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(in_accountIsSymbol)())({
    reflectSymbol: () => "amount_of_token"
  })();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const encodeJsonPayee = {
  encodeJson: v => {
    if (v.tag === "Account") { return encodeJson20({account: v._1}); }
    if (v.tag === "Party") { return Data$dArgonaut$dCore.fromObject(gEncodeJsonCons13.gEncodeJson({party: v._1})(Type$dProxy.Proxy)); }
    $runtime.fail();
  }
};
const gEncodeJsonCons16 = /* #__PURE__ */ Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dBigInt$dArgonaut.encodeJsonBitInt)(/* #__PURE__ */ Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonToken)(/* #__PURE__ */ Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonPayee)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
  reflectSymbol: () => "to_payee"
})())(of_tokenIsSymbol)());
const encodeJson27 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonParty)(gEncodeJsonCons16(asked_to_payIsSymbol)())(accountIsSymbol)();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const encodeJson28 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonParty)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dBigInt$dArgonaut.encodeJsonBitInt)(gEncodeJsonCons16({
    reflectSymbol: () => "but_only_paid"
  })())(asked_to_payIsSymbol)())(accountIsSymbol)();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const gEncodeJsonCons17 = /* #__PURE__ */ Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonPayee)(gEncodeJsonCons10)(toIsSymbol)();
const encodeTransactionWarning = {
  encodeJson: v => {
    if (v.tag === "TransactionAssertionFailed") { return Data$dArgonaut$dCore.fromString("assertion_failed"); }
    if (v.tag === "TransactionNonPositiveDeposit") { return encodeJson22({party: v._1, asked_to_deposit: v._4, of_token: v._3, in_account: v._2}); }
    if (v.tag === "TransactionNonPositivePay") { return encodeJson27({account: v._1, asked_to_pay: v._4, of_token: v._3, to_payee: v._2}); }
    if (v.tag === "TransactionPartialPay") { return encodeJson28({account: v._1, asked_to_pay: v._5, of_token: v._3, to_payee: v._2, but_only_paid: v._4}); }
    if (v.tag === "TransactionShadowing") { return encodeJson17({value_id: v._1, had_value: v._2, is_now_assigned: v._3}); }
    $runtime.fail();
  }
};
const encodeJson30 = /* #__PURE__ */ (() => Data$dArgonaut$dEncode$dEncoders.encodeList(encodeTransactionWarning.encodeJson))();
const encodeJsonPayment = {encodeJson: v => encodeJson19({amount: v._4, payment_from: encodeJsonParty.encodeJson(v._1), to: encodeJsonPayee.encodeJson(v._2), token: v._3})};
const encodeJson31 = /* #__PURE__ */ (() => Data$dArgonaut$dEncode$dEncoders.encodeList(encodeJsonPayment.encodeJson))();
const encodeJsonMarloweParams = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons((() => {
    const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(unCurrencySymbolIsSymbol)();
    return {encodeJson: rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy))};
  })())(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(rolesCurrencyIsSymbol)())(rolePayoutValidatorHashIsSymbol)();
  return {encodeJson: rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy))};
})();
const encodeJsonChoiceId = {encodeJson: v => encodeJson24({choice_name: v._1, choice_owner: v._2})};
const encodeJson32 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonChoiceId)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dBigInt$dArgonaut.encodeJsonBitInt)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
    reflectSymbol: () => "input_that_chooses_num"
  })())({reflectSymbol: () => "for_choice_id"})();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const encodeJson33 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonChoiceId)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({reflectSymbol: () => "value_of_choice"})();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const encodeJson34 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonChoiceId)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({reflectSymbol: () => "chose_something_for"})();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const encodeJson35 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons({
    encodeJson: Data$dArgonaut$dEncode$dEncoders.encodeMap(ordTuple)(Data$dArgonaut$dEncode$dEncoders.encodeTuple(encodeJsonParty.encodeJson)(encodeJsonToken.encodeJson))(Data$dBigInt$dArgonaut.encodeJsonBitInt.encodeJson)
  })(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons({
    encodeJson: Data$dArgonaut$dEncode$dEncoders.encodeMap(ordValueId)(Data$dArgonaut$dCore.fromString)(Data$dBigInt$dArgonaut.encodeJsonBitInt.encodeJson)
  })(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons({
    encodeJson: Data$dArgonaut$dEncode$dEncoders.encodeMap(ordChoiceId)(encodeJsonChoiceId.encodeJson)(Data$dBigInt$dArgonaut.encodeJsonBitInt.encodeJson)
  })(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(minTimeIsSymbol)())(choicesIsSymbol)())(boundValuesIsSymbol)())(accountsIsSymbol)();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const encodeJsonInputContent = {
  encodeJson: v => {
    if (v.tag === "IDeposit") { return encodeJson25({input_from_party: v._2, that_deposits: v._4, of_token: v._3, into_account: v._1}); }
    if (v.tag === "IChoice") { return encodeJson32({input_that_chooses_num: v._2, for_choice_id: v._1}); }
    if (v.tag === "INotify") { return Data$dArgonaut$dCore.fromString("input_notify"); }
    $runtime.fail();
  }
};
const encodeJsonValue = {
  encodeJson: v => {
    if (v.tag === "AvailableMoney") { return encodeJson26({amount_of_token: v._2, in_account: v._1}); }
    if (v.tag === "Constant") { return Data$dBigInt$dArgonaut.encodeBigInt(v._1); }
    if (v.tag === "NegValue") {
      return Data$dArgonaut$dCore.fromObject(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonValue)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(negateIsSymbol)().gEncodeJson({
        negate: v._1
      })(Type$dProxy.Proxy));
    }
    if (v.tag === "AddValue") {
      return Data$dArgonaut$dCore.fromObject(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonValue)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonValue)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(andIsSymbol)())(addIsSymbol)().gEncodeJson({
        add: v._1,
        and: v._2
      })(Type$dProxy.Proxy));
    }
    if (v.tag === "SubValue") {
      return Data$dArgonaut$dCore.fromObject(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonValue)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonValue)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(valueIsSymbol)())(minusIsSymbol)().gEncodeJson({
        value: v._1,
        minus: v._2
      })(Type$dProxy.Proxy));
    }
    if (v.tag === "MulValue") {
      return Data$dArgonaut$dCore.fromObject(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonValue)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonValue)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(timesIsSymbol)())(multiplyIsSymbol)().gEncodeJson({
        multiply: v._1,
        times: v._2
      })(Type$dProxy.Proxy));
    }
    if (v.tag === "DivValue") {
      return Data$dArgonaut$dCore.fromObject(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonValue)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonValue)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(divideIsSymbol)())(byIsSymbol)().gEncodeJson({
        divide: v._1,
        by: v._2
      })(Type$dProxy.Proxy));
    }
    if (v.tag === "ChoiceValue") { return encodeJson33({value_of_choice: v._1}); }
    if (v.tag === "TimeIntervalStart") { return Data$dArgonaut$dCore.fromString("time_interval_start"); }
    if (v.tag === "TimeIntervalEnd") { return Data$dArgonaut$dCore.fromString("time_interval_end"); }
    if (v.tag === "UseValue") { return encodeJson18({use_value: v._1}); }
    if (v.tag === "Cond") {
      return Data$dArgonaut$dCore.fromObject(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonValue)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonObservation)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonValue)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(thenIsSymbol)())(ifIsSymbol)())(elseIsSymbol)().gEncodeJson({
        if: v._1,
        then: v._2,
        else: v._3
      })(Type$dProxy.Proxy));
    }
    $runtime.fail();
  }
};
const encodeJsonObservation = {
  encodeJson: v => {
    if (v.tag === "AndObs") {
      return Data$dArgonaut$dCore.fromObject(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonObservation)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonObservation)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(bothIsSymbol)())(andIsSymbol)().gEncodeJson({
        both: v._1,
        and: v._2
      })(Type$dProxy.Proxy));
    }
    if (v.tag === "OrObs") {
      return Data$dArgonaut$dCore.fromObject(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonObservation)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonObservation)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(orIsSymbol)())(eitherIsSymbol)().gEncodeJson({
        either: v._1,
        or: v._2
      })(Type$dProxy.Proxy));
    }
    if (v.tag === "NotObs") {
      return Data$dArgonaut$dCore.fromObject(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonObservation)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(notIsSymbol)().gEncodeJson({
        not: v._1
      })(Type$dProxy.Proxy));
    }
    if (v.tag === "ChoseSomething") { return encodeJson34({chose_something_for: v._1}); }
    if (v.tag === "ValueGE") {
      return Data$dArgonaut$dCore.fromObject(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonValue)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonValue)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(valueIsSymbol)())(ge_thanIsSymbol)().gEncodeJson({
        value: v._1,
        ge_than: v._2
      })(Type$dProxy.Proxy));
    }
    if (v.tag === "ValueGT") {
      return Data$dArgonaut$dCore.fromObject(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonValue)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonValue)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(valueIsSymbol)())(gtIsSymbol)().gEncodeJson({
        value: v._1,
        gt: v._2
      })(Type$dProxy.Proxy));
    }
    if (v.tag === "ValueLT") {
      return Data$dArgonaut$dCore.fromObject(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonValue)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonValue)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(valueIsSymbol)())(ltIsSymbol)().gEncodeJson({
        value: v._1,
        lt: v._2
      })(Type$dProxy.Proxy));
    }
    if (v.tag === "ValueLE") {
      return Data$dArgonaut$dCore.fromObject(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonValue)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonValue)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(valueIsSymbol)())(le_thanIsSymbol)().gEncodeJson({
        value: v._1,
        le_than: v._2
      })(Type$dProxy.Proxy));
    }
    if (v.tag === "ValueEQ") {
      return Data$dArgonaut$dCore.fromObject(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonValue)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonValue)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(valueIsSymbol)())(equal_toIsSymbol)().gEncodeJson({
        value: v._1,
        equal_to: v._2
      })(Type$dProxy.Proxy));
    }
    if (v.tag === "TrueObs") { return Data$dArgonaut$dCore.fromBoolean(true); }
    if (v.tag === "FalseObs") { return Data$dArgonaut$dCore.fromBoolean(false); }
    $runtime.fail();
  }
};
const encodeJson37 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonValue)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonParty)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonToken)(gEncodeJsonCons13)(of_tokenIsSymbol)())(into_accountIsSymbol)())({
    reflectSymbol: () => "deposits"
  })();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const encodeJson38 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonObservation)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({reflectSymbol: () => "notify_if"})();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const encodeState = {encodeJson: v => encodeJson35({minTime: Data$dArgonaut$dCore.fromNumber(v.minTime), accounts: v.accounts, boundValues: v.boundValues, choices: v.choices})};
const encodeJsonBound = {encodeJson: v => encodeJson11({from: v._1, to: v._2})};
const encodeJson40 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonArray(encodeJsonBound))(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonChoiceId)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
    reflectSymbol: () => "for_choice"
  })())({reflectSymbol: () => "choose_between"})();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const encodeJsonAda = Data$dBigInt$dArgonaut.encodeJsonBitInt;
const encodeJsonAction = {
  encodeJson: v => {
    if (v.tag === "Deposit") { return encodeJson37({party: v._2, deposits: v._4, of_token: v._3, into_account: v._1}); }
    if (v.tag === "Choice") { return encodeJson40({choose_between: v._2, for_choice: v._1}); }
    if (v.tag === "Notify") { return encodeJson38({notify_if: v._1}); }
    $runtime.fail();
  }
};
const encodeJson41 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonAction)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
    reflectSymbol: () => "merkleized_then"
  })())(caseIsSymbol)();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const encodeJsonContract = {
  encodeJson: v => {
    if (v.tag === "Close") { return Data$dArgonaut$dCore.fromString("close"); }
    if (v.tag === "Pay") {
      return Data$dArgonaut$dCore.fromObject(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonParty)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonValue)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonContract)(gEncodeJsonCons17)(thenIsSymbol)())(payIsSymbol)())(from_accountIsSymbol)().gEncodeJson({
        pay: v._4,
        token: v._3,
        from_account: v._1,
        to: v._2,
        then: v._5
      })(Type$dProxy.Proxy));
    }
    if (v.tag === "If") {
      return Data$dArgonaut$dCore.fromObject(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonContract)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonObservation)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonContract)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(thenIsSymbol)())(ifIsSymbol)())(elseIsSymbol)().gEncodeJson({
        if: v._1,
        then: v._2,
        else: v._3
      })(Type$dProxy.Proxy));
    }
    if (v.tag === "When") {
      return Data$dArgonaut$dCore.fromObject(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJson)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonContract)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonArray(encodeJsonCase))(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(whenIsSymbol)())(timeout_continuationIsSymbol)())(timeoutIsSymbol)().gEncodeJson({
        when: v._1,
        timeout: Data$dArgonaut$dCore.fromNumber(v._2),
        timeout_continuation: v._3
      })(Type$dProxy.Proxy));
    }
    if (v.tag === "Let") {
      return Data$dArgonaut$dCore.fromObject(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonValue)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonContract)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(thenIsSymbol)())(letIsSymbol)())(beIsSymbol)().gEncodeJson({
        let: v._1,
        be: v._2,
        then: v._3
      })(Type$dProxy.Proxy));
    }
    if (v.tag === "Assert") {
      return Data$dArgonaut$dCore.fromObject(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonObservation)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonContract)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(thenIsSymbol)())(assertIsSymbol)().gEncodeJson({
        assert: v._1,
        then: v._2
      })(Type$dProxy.Proxy));
    }
    $runtime.fail();
  }
};
const encodeJsonCase = {
  encodeJson: v => {
    if (v.tag === "Case") {
      return Data$dArgonaut$dCore.fromObject(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonAction)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonContract)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(thenIsSymbol)())(caseIsSymbol)().gEncodeJson({
        case: v._1,
        then: v._2
      })(Type$dProxy.Proxy));
    }
    if (v.tag === "MerkleizedCase") { return encodeJson41({case: v._1, merkleized_then: v._2}); }
    $runtime.fail();
  }
};
const encodeJsonInput = {
  encodeJson: v => {
    if (v.tag === "NormalInput") { return encodeJsonInputContent.encodeJson(v._1); }
    if (v.tag === "MerkleizedInput") {
      const $0 = Data$dMaybe.applyMaybe.apply((() => {
        const $0 = Data$dArgonaut$dCore._caseJson(
          v$1 => Data$dMaybe.Nothing,
          v$1 => Data$dMaybe.Nothing,
          v$1 => Data$dMaybe.Nothing,
          v$1 => Data$dMaybe.Nothing,
          v$1 => Data$dMaybe.Nothing,
          Data$dMaybe.Just,
          encodeJsonInputContent.encodeJson(v._1)
        );
        if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", Foreign$dObject.union($0._1)); }
        return Data$dMaybe.Nothing;
      })())(Data$dArgonaut$dCore._caseJson(
        v$1 => Data$dMaybe.Nothing,
        v$1 => Data$dMaybe.Nothing,
        v$1 => Data$dMaybe.Nothing,
        v$1 => Data$dMaybe.Nothing,
        v$1 => Data$dMaybe.Nothing,
        Data$dMaybe.Just,
        encodeJson12({merkleized_continuation: encodeJsonContract.encodeJson(v._3), continuation_hash: Data$dArgonaut$dCore.fromString(v._2)})
      ));
      if ($0.tag === "Just") { return Data$dArgonaut$dCore.fromObject($0._1); }
      return Data$dArgonaut$dCore.jsonNull;
    }
    $runtime.fail();
  }
};
const encodeJson43 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons({encodeJson: Data$dArgonaut$dEncode$dEncoders.encodeList(encodeJsonInput.encodeJson)})(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonTimeInterval)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
    reflectSymbol: () => "tx_interval"
  })())({reflectSymbol: () => "tx_inputs"})();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const encodeTransactionInput = {encodeJson: v => encodeJson43({tx_interval: v.interval, tx_inputs: v.inputs})};
const encodeJsonMarloweData = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonContract)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeState)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(marloweStateIsSymbol)())(marloweContractIsSymbol)();
  return {encodeJson: rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy))};
})();
const encodeJsonTransactionOutp = {
  encodeJson: v => {
    if (v.tag === "Error") { return encodeJson13({transaction_error: genericEncodeTransactionError.encodeJson(v._1)}); }
    if (v.tag === "TransactionOutput") {
      return encodeJson14({
        warnings: encodeJson30(v._1.txOutWarnings),
        payments: encodeJson31(v._1.txOutPayments),
        state: encodeState.encodeJson(v._1.txOutState),
        contract: encodeJsonContract.encodeJson(v._1.txOutContract)
      });
    }
    $runtime.fail();
  }
};
const encodeAssets = /* #__PURE__ */ (() => (
  {
    encodeJson: Data$dArgonaut$dEncode$dEncoders.encodeMap(Data$dOrd.ordString)(Data$dArgonaut$dCore.fromString)(Data$dArgonaut$dEncode$dEncoders.encodeMap(Data$dOrd.ordString)(Data$dArgonaut$dCore.fromString)(Data$dBigInt$dArgonaut.encodeJsonBitInt.encodeJson))
  }
))();
const decodeMarloweParams = /* #__PURE__ */ Data$dArgonaut$dDecode$dClass.decodeRecord(/* #__PURE__ */ gDecodeJsonCons(/* #__PURE__ */ Data$dArgonaut$dDecode$dClass.gDecodeJsonCons(/* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dDecode$dClass.decodeRecord(gDecodeJsonCons(Data$dArgonaut$dDecode$dClass.gDecodeJsonNil)(unCurrencySymbolIsSymbol)()())();
  return {
    decodeJsonField: j => {
      if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0.decodeJson(j._1)); }
      return Data$dMaybe.Nothing;
    }
  };
})())(Data$dArgonaut$dDecode$dClass.gDecodeJsonNil)(rolesCurrencyIsSymbol)()())(rolePayoutValidatorHashIsSymbol)()())();
const decodeJsonValueId = Data$dArgonaut$dDecode$dClass.decodeJsonString;
const decodeJsonToken = {
  decodeJson: /* #__PURE__ */ Data$dArgonaut$dExtra.object("Token")(x => {
    const $0 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dArgonaut$dCore.caseJsonString(Data$dEither.$Either(
      "Left",
      Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")
    ))(Data$dEither.Right))(x)("currency_symbol");
    if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
    if ($0.tag === "Right") {
      const $1 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dArgonaut$dCore.caseJsonString(Data$dEither.$Either(
        "Left",
        Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")
      ))(Data$dEither.Right))(x)("token_name");
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
      if ($1.tag === "Right") { return Data$dEither.$Either("Right", Data$dMaybe.$Maybe("Just", $Token($0._1, $1._1))); }
    }
    $runtime.fail();
  })
};
const decodeJsonRational = /* #__PURE__ */ (() => (
  {
    decodeJson: Data$dArgonaut$dExtra.array("Rational")(Control$dMonad$dRWS$dTrans.applyRWST(Data$dEither.bindEither)(Data$dMonoid.monoidUnit).apply(r => s => {
      const $0 = Data$dArgonaut$dExtra.next(Data$dBigInt$dArgonaut.decodeJsonBigInt)(r)(s);
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") { return Data$dEither.$Either("Right", Control$dMonad$dRWS$dTrans.$RWSResult($0._1._1, Rational($0._1._2), $0._1._3)); }
      $runtime.fail();
    })(Data$dArgonaut$dExtra.next(Data$dBigInt$dArgonaut.decodeJsonBigInt)))
  }
))();
const decodeJsonParty = /* #__PURE__ */ (() => (
  {
    decodeJson: Data$dArgonaut$dExtra.object("Party")(bindReaderT.bind(Data$dArgonaut$dExtra.getProp(Data$dArgonaut$dDecode$dClass.decodeJsonString)("address"))(address => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(Data$dArgonaut$dDecode$dClass.decodeJsonString)("role_token"))(roleToken => {
      const $0 = address.tag === "Just" ? Data$dMaybe.$Maybe("Just", $Party("Address", address._1)) : Data$dMaybe.Nothing;
      const $1 = roleToken.tag === "Just" ? Data$dMaybe.$Maybe("Just", $Party("Role", roleToken._1)) : Data$dMaybe.Nothing;
      const $2 = $0.tag === "Nothing" ? $1 : $0;
      return v => Data$dEither.$Either("Right", $2);
    })))
  }
))();
const decodeJsonPayee = /* #__PURE__ */ (() => (
  {
    decodeJson: Data$dArgonaut$dExtra.object("Payee")(bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonParty)("account"))(account => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonParty)("party"))(party => {
      const $0 = account.tag === "Just" ? Data$dMaybe.$Maybe("Just", $Payee("Account", account._1)) : Data$dMaybe.Nothing;
      const $1 = party.tag === "Just" ? Data$dMaybe.$Maybe("Just", $Payee("Party", party._1)) : Data$dMaybe.Nothing;
      const $2 = $0.tag === "Nothing" ? $1 : $0;
      return v => Data$dEither.$Either("Right", $2);
    })))
  }
))();
const decodeTransactionWarning = /* #__PURE__ */ (() => (
  {
    decodeJson: caseConstantFrom(Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, "assertion_failed", TransactionAssertionFailed, Data$dMap$dInternal.Leaf))(Data$dArgonaut$dExtra.object("TransactionWarning")(bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonParty)("party"))(party => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonParty)("in_account"))(inAccount => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonToken)("of_token"))(ofToken => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(Data$dBigInt$dArgonaut.decodeJsonBigInt)("asked_to_deposit"))(askedToDeposit => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonParty)("account"))(account => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonPayee)("to_payee"))(toPayee => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(Data$dBigInt$dArgonaut.decodeJsonBigInt)("but_only_paid"))(butOnlyPaid => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(Data$dBigInt$dArgonaut.decodeJsonBigInt)("asked_to_pay"))(askedToPay => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(Data$dArgonaut$dDecode$dClass.decodeJsonString)("value_id"))(valueId => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(Data$dBigInt$dArgonaut.decodeJsonBigInt)("had_value"))(hadValue => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(Data$dBigInt$dArgonaut.decodeJsonBigInt)("is_now_assigned"))(isNowAssigned => {
      const $0 = Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(party.tag === "Just"
        ? Data$dMaybe.$Maybe("Just", TransactionNonPositiveDeposit(party._1))
        : Data$dMaybe.Nothing)(inAccount))(ofToken))(askedToDeposit);
      const $1 = Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(account.tag === "Just"
        ? Data$dMaybe.$Maybe("Just", TransactionPartialPay(account._1))
        : Data$dMaybe.Nothing)(toPayee))(ofToken))(butOnlyPaid))(askedToPay);
      const $2 = (() => {
        const $2 = (() => {
          const $2 = Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(account.tag === "Just"
            ? Data$dMaybe.$Maybe("Just", TransactionNonPositivePay(account._1))
            : Data$dMaybe.Nothing)(toPayee))(ofToken))(askedToPay);
          const $3 = (() => {
            const $3 = Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(valueId.tag === "Just"
              ? Data$dMaybe.$Maybe("Just", TransactionShadowing(valueId._1))
              : Data$dMaybe.Nothing)(hadValue))(isNowAssigned);
            if ($2.tag === "Nothing") { return $3; }
            return $2;
          })();
          if ($1.tag === "Nothing") { return $3; }
          return $1;
        })();
        if ($0.tag === "Nothing") { return $2; }
        return $0;
      })();
      return v => Data$dEither.$Either("Right", $2);
    })))))))))))))
  }
))();
const decodeJsonPayment = /* #__PURE__ */ (() => (
  {
    decodeJson: Data$dArgonaut$dExtra.object("Payment")(bindReaderT.bind(Data$dArgonaut$dExtra.requireProp(Data$dBigInt$dArgonaut.decodeJsonBigInt)("amount"))(amount => bindReaderT.bind(Data$dArgonaut$dExtra.requireProp(decodeJsonParty)("payment_from"))(payment_from => bindReaderT.bind(Data$dArgonaut$dExtra.requireProp(decodeJsonPayee)("to"))(payee => bindReaderT.bind(Data$dArgonaut$dExtra.requireProp(decodeJsonToken)("token"))(token => v => Data$dEither.$Either(
      "Right",
      Data$dMaybe.$Maybe("Just", $Payment(payment_from, payee, token, amount))
    ))))))
  }
))();
const requireProp5 = /* #__PURE__ */ (() => Data$dArgonaut$dExtra.requireProp({decodeJson: Data$dArgonaut$dDecode$dDecoders.decodeList(decodeJsonPayment.decodeJson)}))();
const decodeJsonChoiceId = {
  decodeJson: /* #__PURE__ */ Data$dArgonaut$dExtra.object("ChoiceId")(x => {
    const $0 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dArgonaut$dCore.caseJsonString(Data$dEither.$Either(
      "Left",
      Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")
    ))(Data$dEither.Right))(x)("choice_name");
    if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
    if ($0.tag === "Right") {
      const $1 = Data$dArgonaut$dDecode$dDecoders.getField(decodeJsonParty.decodeJson)(x)("choice_owner");
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
      if ($1.tag === "Right") { return Data$dEither.$Either("Right", Data$dMaybe.$Maybe("Just", $ChoiceId($0._1, $1._1))); }
    }
    $runtime.fail();
  })
};
const decodeJson2 = /* #__PURE__ */ (() => Data$dArgonaut$dDecode$dClass.decodeRecord(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons((() => {
  const $0 = Data$dArgonaut$dDecode$dClass.decodeMap(ordTuple)({decodeJson: Data$dArgonaut$dDecode$dDecoders.decodeTuple(decodeJsonParty.decodeJson)(decodeJsonToken.decodeJson)})(Data$dBigInt$dArgonaut.decodeJsonBigInt);
  return {
    decodeJsonField: j => {
      if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0.decodeJson(j._1)); }
      return Data$dMaybe.Nothing;
    }
  };
})())(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons((() => {
  const $0 = Data$dArgonaut$dDecode$dClass.decodeMap(ordValueId)(Data$dArgonaut$dDecode$dClass.decodeJsonString)(Data$dBigInt$dArgonaut.decodeJsonBigInt);
  return {
    decodeJsonField: j => {
      if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0.decodeJson(j._1)); }
      return Data$dMaybe.Nothing;
    }
  };
})())(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons((() => {
  const $0 = Data$dArgonaut$dDecode$dClass.decodeMap(ordChoiceId)(decodeJsonChoiceId)(Data$dBigInt$dArgonaut.decodeJsonBigInt);
  return {
    decodeJsonField: j => {
      if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0.decodeJson(j._1)); }
      return Data$dMaybe.Nothing;
    }
  };
})())(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons({
  decodeJsonField: j => {
    if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", Data$dEither.$Either("Right", j._1)); }
    return Data$dMaybe.Nothing;
  }
})(Data$dArgonaut$dDecode$dClass.gDecodeJsonNil)(minTimeIsSymbol)()())(choicesIsSymbol)()())(boundValuesIsSymbol)()())(accountsIsSymbol)()())().decodeJson)();
const decodeJsonInputContent = /* #__PURE__ */ (() => (
  {
    decodeJson: caseConstantFrom(Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, "input_notify", INotify, Data$dMap$dInternal.Leaf))(Data$dArgonaut$dExtra.object("Action")(bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonParty)("into_account"))(intoAccount => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonParty)("input_from_party"))(inputFromParty => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonToken)("of_token"))(ofToken => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(Data$dBigInt$dArgonaut.decodeJsonBigInt)("that_deposits"))(thatDeposits => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonChoiceId)("for_choice_id"))(forChoiceId => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(Data$dBigInt$dArgonaut.decodeJsonBigInt)("input_that_chooses_num"))(inputThatChoosesNum => {
      const $0 = Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(intoAccount.tag === "Just"
        ? Data$dMaybe.$Maybe("Just", IDeposit(intoAccount._1))
        : Data$dMaybe.Nothing)(inputFromParty))(ofToken))(thatDeposits);
      const $1 = Data$dMaybe.applyMaybe.apply(forChoiceId.tag === "Just" ? Data$dMaybe.$Maybe("Just", IChoice(forChoiceId._1)) : Data$dMaybe.Nothing)(inputThatChoosesNum);
      const $2 = $0.tag === "Nothing" ? $1 : $0;
      return v => Data$dEither.$Either("Right", $2);
    }))))))))
  }
))();
const decodeJsonObservation = {
  decodeJson: json => caseConstantFrom1(fromFoldable([Data$dTuple.$Tuple(true, TrueObs), Data$dTuple.$Tuple(false, FalseObs)]))(Data$dArgonaut$dExtra.object("Observation")(bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonObservation)("both"))(both => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonObservation)("and"))(and => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonObservation)("either"))(either => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonObservation)("or"))(or => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonObservation)("not"))(not => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonChoiceId)("chose_something_for"))(choseSomethingFor => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue$lazy())("value"))(value => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue$lazy())("ge_than"))(gte => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue$lazy())("gt"))(gt => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue$lazy())("lt"))(lt => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue$lazy())("le_than"))(lte => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue$lazy())("equal_to"))(equalTo => {
    const $0 = Data$dMaybe.applyMaybe.apply(both.tag === "Just" ? Data$dMaybe.$Maybe("Just", AndObs(both._1)) : Data$dMaybe.Nothing)(and);
    const $1 = Data$dMaybe.applyMaybe.apply(either.tag === "Just" ? Data$dMaybe.$Maybe("Just", OrObs(either._1)) : Data$dMaybe.Nothing)(or);
    const $2 = (() => {
      const $2 = (() => {
        const $2 = not.tag === "Just" ? Data$dMaybe.$Maybe("Just", $Observation("NotObs", not._1)) : Data$dMaybe.Nothing;
        const $3 = (() => {
          const $3 = choseSomethingFor.tag === "Just" ? Data$dMaybe.$Maybe("Just", $Observation("ChoseSomething", choseSomethingFor._1)) : Data$dMaybe.Nothing;
          const $4 = (() => {
            const $4 = Data$dMaybe.applyMaybe.apply(value.tag === "Just" ? Data$dMaybe.$Maybe("Just", ValueGE(value._1)) : Data$dMaybe.Nothing)(gte);
            const $5 = (() => {
              const $5 = Data$dMaybe.applyMaybe.apply(value.tag === "Just" ? Data$dMaybe.$Maybe("Just", ValueGT(value._1)) : Data$dMaybe.Nothing)(gt);
              const $6 = (() => {
                const $6 = Data$dMaybe.applyMaybe.apply(value.tag === "Just" ? Data$dMaybe.$Maybe("Just", ValueLT(value._1)) : Data$dMaybe.Nothing)(lt);
                const $7 = (() => {
                  const $7 = Data$dMaybe.applyMaybe.apply(value.tag === "Just" ? Data$dMaybe.$Maybe("Just", ValueLE(value._1)) : Data$dMaybe.Nothing)(lte);
                  const $8 = (() => {
                    const $8 = Data$dMaybe.applyMaybe.apply(value.tag === "Just" ? Data$dMaybe.$Maybe("Just", ValueEQ(value._1)) : Data$dMaybe.Nothing)(equalTo);
                    if ($7.tag === "Nothing") { return $8; }
                    return $7;
                  })();
                  if ($6.tag === "Nothing") { return $8; }
                  return $6;
                })();
                if ($5.tag === "Nothing") { return $7; }
                return $5;
              })();
              if ($4.tag === "Nothing") { return $6; }
              return $4;
            })();
            if ($3.tag === "Nothing") { return $5; }
            return $3;
          })();
          if ($2.tag === "Nothing") { return $4; }
          return $2;
        })();
        if ($1.tag === "Nothing") { return $3; }
        return $1;
      })();
      if ($0.tag === "Nothing") { return $2; }
      return $0;
    })();
    return v => Data$dEither.$Either("Right", $2);
  }))))))))))))))(json)
};
const decodeJsonValue$lazy = /* #__PURE__ */ $runtime.binding(() => (
  {
    decodeJson: (() => {
      const decodeObject = Data$dArgonaut$dExtra.object("Value")(bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonParty)("in_account"))(inAccount => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonToken)("amount_of_token"))(amountOfToken => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue$lazy())("negate"))(negate => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue$lazy())("add"))(add1 => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue$lazy())("and"))(and => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue$lazy())("value"))(value => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue$lazy())("minus"))(minus => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue$lazy())("divide"))(divide => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue$lazy())("multiply"))(multiply => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue$lazy())("by"))(by => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue$lazy())("times"))(times => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonChoiceId)("value_of_choice"))(valueOfChoices => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(Data$dArgonaut$dDecode$dClass.decodeJsonString)("use_value"))(useValue => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonObservation)("if"))(if_ => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue$lazy())("then"))(then_ => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue$lazy())("else"))(else_ => {
        const $0 = Data$dMaybe.applyMaybe.apply(inAccount.tag === "Just" ? Data$dMaybe.$Maybe("Just", AvailableMoney(inAccount._1)) : Data$dMaybe.Nothing)(amountOfToken);
        const $1 = negate.tag === "Just" ? Data$dMaybe.$Maybe("Just", $Value("NegValue", negate._1)) : Data$dMaybe.Nothing;
        const $2 = (() => {
          const $2 = (() => {
            const $2 = Data$dMaybe.applyMaybe.apply(add1.tag === "Just" ? Data$dMaybe.$Maybe("Just", AddValue(add1._1)) : Data$dMaybe.Nothing)(and);
            const $3 = (() => {
              const $3 = Data$dMaybe.applyMaybe.apply(value.tag === "Just" ? Data$dMaybe.$Maybe("Just", SubValue(value._1)) : Data$dMaybe.Nothing)(minus);
              const $4 = (() => {
                const $4 = Data$dMaybe.applyMaybe.apply(divide.tag === "Just" ? Data$dMaybe.$Maybe("Just", DivValue(divide._1)) : Data$dMaybe.Nothing)(by);
                const $5 = (() => {
                  const $5 = Data$dMaybe.applyMaybe.apply(multiply.tag === "Just" ? Data$dMaybe.$Maybe("Just", MulValue(multiply._1)) : Data$dMaybe.Nothing)(times);
                  const $6 = (() => {
                    const $6 = valueOfChoices.tag === "Just" ? Data$dMaybe.$Maybe("Just", $Value("ChoiceValue", valueOfChoices._1)) : Data$dMaybe.Nothing;
                    const $7 = (() => {
                      const $7 = useValue.tag === "Just" ? Data$dMaybe.$Maybe("Just", $Value("UseValue", useValue._1)) : Data$dMaybe.Nothing;
                      const $8 = (() => {
                        const $8 = Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(if_.tag === "Just" ? Data$dMaybe.$Maybe("Just", Cond(if_._1)) : Data$dMaybe.Nothing)(then_))(else_);
                        if ($7.tag === "Nothing") { return $8; }
                        return $7;
                      })();
                      if ($6.tag === "Nothing") { return $8; }
                      return $6;
                    })();
                    if ($5.tag === "Nothing") { return $7; }
                    return $5;
                  })();
                  if ($4.tag === "Nothing") { return $6; }
                  return $4;
                })();
                if ($3.tag === "Nothing") { return $5; }
                return $3;
              })();
              if ($2.tag === "Nothing") { return $4; }
              return $2;
            })();
            if ($1.tag === "Nothing") { return $3; }
            return $1;
          })();
          if ($0.tag === "Nothing") { return $2; }
          return $0;
        })();
        return v => Data$dEither.$Either("Right", $2);
      })))))))))))))))));
      return caseConstantFrom(Data$dMap$dInternal.fromFoldable(Data$dOrd.ordString)(Data$dFoldable.foldableArray)([
        Data$dTuple.$Tuple("time_interval_start", TimeIntervalStart),
        Data$dTuple.$Tuple("time_interval_end", TimeIntervalEnd)
      ]))(json => {
        const v = Data$dBigInt$dArgonaut.decodeJsonBigInt.decodeJson(json);
        if (v.tag === "Right") { return Data$dEither.$Either("Right", $Value("Constant", v._1)); }
        if (v.tag === "Left") { return decodeObject(json); }
        $runtime.fail();
      });
    })()
  }
));
const decodeJsonValue = /* #__PURE__ */ decodeJsonValue$lazy();
const decodeState = {
  decodeJson: json => {
    const $0 = decodeJson2(json);
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
    })()(state => {
      const $1 = Marlowe$dTime.instantFromJson(state.minTime);
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
      })()(minTime => Data$dEither.$Either("Right", {accounts: state.accounts, choices: state.choices, boundValues: state.boundValues, minTime}));
    });
  }
};
const decodeJsonBound = {
  decodeJson: /* #__PURE__ */ Data$dArgonaut$dExtra.object("Bound")(x => {
    const $0 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dBigInt$dArgonaut.decodeJsonBigInt.decodeJson)(x)("from");
    if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
    if ($0.tag === "Right") {
      const $1 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dBigInt$dArgonaut.decodeJsonBigInt.decodeJson)(x)("to");
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
      if ($1.tag === "Right") { return Data$dEither.$Either("Right", Data$dMaybe.$Maybe("Just", $Bound($0._1, $1._1))); }
    }
    $runtime.fail();
  })
};
const getProp10 = /* #__PURE__ */ (() => Data$dArgonaut$dExtra.getProp({decodeJson: Data$dArgonaut$dDecode$dDecoders.decodeArray(decodeJsonBound.decodeJson)}))();
const decodeJsonAda = Data$dBigInt$dArgonaut.decodeJsonBigInt;
const decodeJsonAction = /* #__PURE__ */ (() => (
  {
    decodeJson: Data$dArgonaut$dExtra.object("Action")(bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonParty)("into_account"))(intoAccount => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonParty)("party"))(party => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonToken)("of_token"))(ofToken => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue)("deposits"))(deposits => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonChoiceId)("for_choice"))(forChoice => bindReaderT.bind(getProp10("choose_between"))(chooseBetween => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonObservation)("notify_if"))(notifyIf => {
      const $0 = Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(intoAccount.tag === "Just"
        ? Data$dMaybe.$Maybe("Just", Deposit(intoAccount._1))
        : Data$dMaybe.Nothing)(party))(ofToken))(deposits);
      const $1 = Data$dMaybe.applyMaybe.apply(forChoice.tag === "Just" ? Data$dMaybe.$Maybe("Just", Choice(forChoice._1)) : Data$dMaybe.Nothing)(chooseBetween);
      const $2 = (() => {
        const $2 = (() => {
          const $2 = notifyIf.tag === "Just" ? Data$dMaybe.$Maybe("Just", $Action("Notify", notifyIf._1)) : Data$dMaybe.Nothing;
          if ($1.tag === "Nothing") { return $2; }
          return $1;
        })();
        if ($0.tag === "Nothing") { return $2; }
        return $0;
      })();
      return v => Data$dEither.$Either("Right", $2);
    }))))))))
  }
))();
const decodeJsonContract$lazy = /* #__PURE__ */ $runtime.binding(() => (
  {
    decodeJson: caseConstantFrom(Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, "close", Close, Data$dMap$dInternal.Leaf))(Data$dArgonaut$dExtra.object("Contract")(bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonParty)("from_account"))(fromAccount => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonPayee)("to"))(to => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonToken)("token"))(token => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue)("pay"))(pay => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonContract$lazy())("then"))(_then => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonObservation)("if"))(_if => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonContract$lazy())("else"))(_else => bindReaderT.bind(Data$dArgonaut$dExtra.getProp({
      decodeJson: Data$dArgonaut$dDecode$dDecoders.decodeArray(decodeJsonCase$lazy().decodeJson)
    })("when"))(when => bindReaderT.bind(bindReaderT.bind(Data$dArgonaut$dExtra.getProp(Data$dArgonaut$dDecode$dClass.decodeJsonJson)("timeout"))(x => {
      const $0 = Data$dTraversable.traversableMaybe.traverse(Data$dEither.applicativeEither)(Marlowe$dTime.instantFromJson)(x);
      return v => $0;
    }))(timeout => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonContract$lazy())("timeout_continuation"))(timeoutContinuation => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(Data$dArgonaut$dDecode$dClass.decodeJsonString)("let"))(_let => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue)("be"))(be => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonObservation)("assert"))(assert => {
      const $0 = Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(fromAccount.tag === "Just"
        ? Data$dMaybe.$Maybe("Just", Pay(fromAccount._1))
        : Data$dMaybe.Nothing)(to))(token))(pay))(_then);
      const $1 = Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(_if.tag === "Just" ? Data$dMaybe.$Maybe("Just", If(_if._1)) : Data$dMaybe.Nothing)(_then))(_else);
      const $2 = (() => {
        const $2 = (() => {
          const $2 = Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(when.tag === "Just" ? Data$dMaybe.$Maybe("Just", When(when._1)) : Data$dMaybe.Nothing)(timeout))(timeoutContinuation);
          const $3 = (() => {
            const $3 = Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(_let.tag === "Just" ? Data$dMaybe.$Maybe("Just", Let(_let._1)) : Data$dMaybe.Nothing)(be))(_then);
            const $4 = (() => {
              const $4 = Data$dMaybe.applyMaybe.apply(assert.tag === "Just" ? Data$dMaybe.$Maybe("Just", Assert(assert._1)) : Data$dMaybe.Nothing)(_then);
              if ($3.tag === "Nothing") { return $4; }
              return $3;
            })();
            if ($2.tag === "Nothing") { return $4; }
            return $2;
          })();
          if ($1.tag === "Nothing") { return $3; }
          return $1;
        })();
        if ($0.tag === "Nothing") { return $2; }
        return $0;
      })();
      return v => Data$dEither.$Either("Right", $2);
    })))))))))))))))
  }
));
const decodeJsonCase$lazy = /* #__PURE__ */ $runtime.binding(() => (
  {
    decodeJson: Data$dArgonaut$dExtra.object("Case")(bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonAction)("case"))(_case => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonContract$lazy())("then"))(_then => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(Data$dArgonaut$dDecode$dClass.decodeJsonString)("merkleized_then"))(merkleized_then => {
      const $0 = Data$dMaybe.applyMaybe.apply(_case.tag === "Just" ? Data$dMaybe.$Maybe("Just", Case(_case._1)) : Data$dMaybe.Nothing)(_then);
      const $1 = Data$dMaybe.applyMaybe.apply(_case.tag === "Just" ? Data$dMaybe.$Maybe("Just", MerkleizedCase(_case._1)) : Data$dMaybe.Nothing)(merkleized_then);
      const $2 = $0.tag === "Nothing" ? $1 : $0;
      return v => Data$dEither.$Either("Right", $2);
    }))))
  }
));
const decodeJsonContract = /* #__PURE__ */ decodeJsonContract$lazy();
const decodeJsonCase = /* #__PURE__ */ decodeJsonCase$lazy();
const decodeJsonInput = {
  decodeJson: v => {
    if (Data$dArgonaut$dCore._caseJson(v$1 => false, v$1 => false, v$1 => false, v$1 => false, v$1 => false, v$1 => true, v)) {
      const $0 = decodeJsonInputContent.decodeJson(v);
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
      })()(inputContent => {
        const $1 = Data$dArgonaut$dDecode$dDecoders.decodeJObject(v);
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
        })()(obj => {
          const $2 = Data$dArgonaut$dDecode$dDecoders.getFieldOptional$p(Data$dArgonaut$dCore.caseJsonString(Data$dEither.$Either(
            "Left",
            Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")
          ))(Data$dEither.Right))(obj)("continuation_hash");
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
          })()(hash => {
            const $3 = Data$dArgonaut$dDecode$dDecoders.getFieldOptional$p(decodeJsonContract.decodeJson)(obj)("merkleized_continuation");
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
            })()(continuation => {
              if (hash.tag === "Just" && continuation.tag === "Just") { return Data$dEither.$Either("Right", $Input("MerkleizedInput", inputContent, hash._1, continuation._1)); }
              return Data$dEither.$Either("Right", $Input("NormalInput", inputContent));
            });
          });
        });
      });
    }
    const $0 = decodeJsonInputContent.decodeJson(v);
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
    })()(x => Data$dEither.$Either("Right", $Input("NormalInput", x)));
  }
};
const requireProp8 = /* #__PURE__ */ (() => Data$dArgonaut$dExtra.requireProp({decodeJson: Data$dArgonaut$dDecode$dDecoders.decodeList(decodeJsonInput.decodeJson)}))();
const decodeTransactionInput = /* #__PURE__ */ (() => (
  {
    decodeJson: Data$dArgonaut$dExtra.object("TransactionInput")(bindReaderT.bind(Data$dArgonaut$dExtra.requireProp(decodeJsonTimeInterval)("tx_interval"))(interval => bindReaderT.bind(requireProp8("tx_inputs"))(inputs => v => Data$dEither.$Either(
      "Right",
      Data$dMaybe.$Maybe("Just", {interval, inputs})
    ))))
  }
))();
const decodeJsonMarloweData = /* #__PURE__ */ Data$dArgonaut$dDecode$dClass.decodeRecord(/* #__PURE__ */ Data$dArgonaut$dDecode$dClass.gDecodeJsonCons({
  decodeJsonField: j => {
    if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", decodeJsonContract.decodeJson(j._1)); }
    return Data$dMaybe.Nothing;
  }
})(/* #__PURE__ */ Data$dArgonaut$dDecode$dClass.gDecodeJsonCons({
  decodeJsonField: j => {
    if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", decodeState.decodeJson(j._1)); }
    return Data$dMaybe.Nothing;
  }
})(Data$dArgonaut$dDecode$dClass.gDecodeJsonNil)(marloweStateIsSymbol)()())(marloweContractIsSymbol)()())();
const decodeJsonTransactionOutp = {
  decodeJson: /* #__PURE__ */ Data$dArgonaut$dExtra.object("TransactionOutput")(/* #__PURE__ */ (() => {
    const $0 = bindReaderT.bind(Data$dArgonaut$dExtra.requireProp({decodeJson: Data$dArgonaut$dDecode$dDecoders.decodeList(decodeTransactionWarning.decodeJson)})("warnings"))(txOutWarnings => bindReaderT.bind(requireProp5("payments"))(txOutPayments => bindReaderT.bind(Data$dArgonaut$dExtra.requireProp(decodeState)("state"))(txOutState => bindReaderT.bind(Data$dArgonaut$dExtra.requireProp(decodeJsonContract)("contract"))(txOutContract => v => Data$dEither.$Either(
      "Right",
      Data$dMaybe.$Maybe("Just", $TransactionOutput("TransactionOutput", {txOutWarnings, txOutPayments, txOutState, txOutContract}))
    )))));
    return r => {
      const $1 = Data$dArgonaut$dDecode$dDecoders.getField(genericDecodeJsonTransactionError.decodeJson)(r)("transaction_error");
      const $2 = (() => {
        if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
        if ($1.tag === "Right") { return Data$dEither.$Either("Right", Data$dMaybe.$Maybe("Just", $TransactionOutput("Error", $1._1))); }
        $runtime.fail();
      })();
      const $3 = $0(r);
      if ($2.tag === "Left") { return $3; }
      return $2;
    };
  })())
};
const decodeAssets = /* #__PURE__ */ decodeMap(/* #__PURE__ */ decodeMap(Data$dBigInt$dArgonaut.decodeJsonBigInt));
const commutativeRingAda = {Ring0: () => Data$dBigInt.ringBigInt};
const choiceOwner = v => v._2;
const asset = cur => tok => balance => Data$dMap$dInternal.$$$Map(
  "Two",
  Data$dMap$dInternal.Leaf,
  cur,
  Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, tok, balance, Data$dMap$dInternal.Leaf),
  Data$dMap$dInternal.Leaf
);
const adaTokenName = "";
const adaCurrencySymbol = "";
const adaToken = /* #__PURE__ */ $Token("", "");
const getAda = assets => {
  const $0 = Data$dMap$dInternal.lookup(Data$dOrd.ordString)("");
  const $1 = (() => {
    const $1 = Data$dMap$dInternal.lookup(Data$dOrd.ordString)("")(assets);
    if ($1.tag === "Just") { return $0($1._1); }
    if ($1.tag === "Nothing") { return Data$dMaybe.Nothing; }
    $runtime.fail();
  })();
  if ($1.tag === "Nothing") { return Data$dBigInt.semiringBigInt.zero; }
  if ($1.tag === "Just") { return $1._1; }
  $runtime.fail();
};
const ada = /* #__PURE__ */ asset("")("");
const _timeInterval = dictStrong => {
  const $0 = Data$dLens$dIso$dNewtype._Newtype()()(dictStrong.Profunctor0());
  return x => $0(Data$dLens$dRecord.prop(timeIntervalIsSymbol)()()(Type$dProxy.Proxy)(dictStrong)(x));
};
const _rolesCurrency = dictStrong => {
  const $0 = Data$dLens$dIso$dNewtype._Newtype()()(dictStrong.Profunctor0());
  return x => $0(Data$dLens$dRecord.prop(rolesCurrencyIsSymbol)()()(Type$dProxy.Proxy)(dictStrong)(Data$dLens$dRecord.prop(unCurrencySymbolIsSymbol)()()(Type$dProxy.Proxy)(dictStrong)(x)));
};
const _rolePayoutValidatorHash = dictStrong => {
  const $0 = Data$dLens$dIso$dNewtype._Newtype()()(dictStrong.Profunctor0());
  return x => $0(Data$dLens$dRecord.prop(rolePayoutValidatorHashIsSymbol)()()(Type$dProxy.Proxy)(dictStrong)(x));
};
const _minTime = dictStrong => {
  const $0 = Data$dLens$dIso$dNewtype._Newtype()()(dictStrong.Profunctor0());
  return x => $0(Data$dLens$dRecord.prop(minTimeIsSymbol)()()(Type$dProxy.Proxy)(dictStrong)(x));
};
const _marloweState = dictStrong => {
  const $0 = Data$dLens$dIso$dNewtype._Newtype()()(dictStrong.Profunctor0());
  return x => $0(Data$dLens$dRecord.prop(marloweStateIsSymbol)()()(Type$dProxy.Proxy)(dictStrong)(x));
};
const _marloweContract = dictStrong => {
  const $0 = Data$dLens$dIso$dNewtype._Newtype()()(dictStrong.Profunctor0());
  return x => $0(Data$dLens$dRecord.prop(marloweContractIsSymbol)()()(Type$dProxy.Proxy)(dictStrong)(x));
};
const _choices = dictStrong => {
  const $0 = Data$dLens$dIso$dNewtype._Newtype()()(dictStrong.Profunctor0());
  return x => $0(Data$dLens$dRecord.prop(choicesIsSymbol)()()(Type$dProxy.Proxy)(dictStrong)(x));
};
const _boundValues = dictStrong => {
  const $0 = Data$dLens$dIso$dNewtype._Newtype()()(dictStrong.Profunctor0());
  return x => $0(Data$dLens$dRecord.prop(boundValuesIsSymbol)()()(Type$dProxy.Proxy)(dictStrong)(x));
};
const _accounts = dictStrong => {
  const $0 = Data$dLens$dIso$dNewtype._Newtype()()(dictStrong.Profunctor0());
  return x => $0(Data$dLens$dRecord.prop(accountsIsSymbol)()()(Type$dProxy.Proxy)(dictStrong)(x));
};
export {
  $Action,
  $ApplyAllResult,
  $ApplyResult,
  $ApplyWarning,
  $Bound,
  $Case,
  $ChoiceId,
  $Contract,
  $Input,
  $InputContent,
  $IntervalError,
  $IntervalResult,
  $Observation,
  $Party,
  $Payee,
  $Payment,
  $Rational,
  $ReduceEffect,
  $ReduceResult,
  $ReduceStepResult,
  $ReduceWarning,
  $TimeInterval,
  $Token,
  $TransactionError,
  $TransactionOutput,
  $TransactionWarning,
  $Value,
  Account,
  AddValue,
  AddValueIsSymbol,
  Address,
  AmbiguousTimeIntervalReductionError,
  AndObs,
  AndObsIsSymbol,
  Applied,
  ApplyAllAmbiguousTimeIntervalError,
  ApplyAllHashMismatch,
  ApplyAllNoMatchError,
  ApplyAllSuccess,
  ApplyHashMismatch,
  ApplyNoMatchError,
  ApplyNoWarning,
  ApplyNonPositiveDeposit,
  Assert,
  AssertIsSymbol,
  Assets,
  AvailableMoney,
  Bound,
  Case,
  Choice,
  ChoiceId,
  ChoiceValue,
  ChoseSomething,
  Close,
  Cond,
  CondIsSymbol,
  Constant,
  ContractQuiescent,
  Deposit,
  DivValue,
  DivValueIsSymbol,
  Environment,
  $$Error as Error,
  FalseObs,
  IChoice,
  IDeposit,
  INotify,
  If,
  IfIsSymbol,
  IntervalError,
  IntervalInPastError,
  IntervalTrimmed,
  InvalidInterval,
  Let,
  LetIsSymbol,
  Lovelace,
  MarloweData,
  MarloweParams,
  MerkleizedCase,
  MerkleizedInput,
  MulValue,
  MulValueIsSymbol,
  NegValue,
  NegValueIsSymbol,
  NormalInput,
  NotObs,
  NotObsIsSymbol,
  NotReduced,
  Notify,
  OrObs,
  OrObsIsSymbol,
  Party,
  Pay,
  PayIsSymbol,
  Payment,
  RRAmbiguousTimeIntervalError,
  Rational,
  ReduceAssertionFailed,
  ReduceNoPayment,
  ReduceNoWarning,
  ReduceNonPositivePay,
  ReducePartialPay,
  ReduceShadowing,
  ReduceWithPayment,
  Reduced,
  Role,
  State,
  SubValue,
  SubValueIsSymbol,
  TEAmbiguousTimeIntervalError,
  TEApplyNoMatchError,
  TEHashMismatch,
  TEIntervalError,
  TEUselessTransaction,
  TimeInterval,
  TimeIntervalEnd,
  TimeIntervalStart,
  Timeouts,
  Token,
  TransactionAssertionFailed,
  TransactionInput,
  TransactionNonPositiveDeposit,
  TransactionNonPositivePay,
  TransactionOutput,
  TransactionPartialPay,
  TransactionShadowing,
  TrueObs,
  UseValue,
  ValueEQ,
  ValueEQIsSymbol,
  ValueGE,
  ValueGEIsSymbol,
  ValueGT,
  ValueGTIsSymbol,
  ValueId,
  ValueLE,
  ValueLEIsSymbol,
  ValueLT,
  ValueLTIsSymbol,
  When,
  WhenIsSymbol,
  _accounts,
  _boundValues,
  _choices,
  _marloweContract,
  _marloweState,
  _minTime,
  _rolePayoutValidatorHash,
  _rolesCurrency,
  _timeInterval,
  accountIsSymbol,
  accountsIsSymbol,
  ada,
  adaCurrencySymbol,
  adaToken,
  adaTokenName,
  addIsSymbol,
  andIsSymbol,
  asked_to_payIsSymbol,
  assertIsSymbol,
  asset,
  beIsSymbol,
  bindReaderT,
  bothIsSymbol,
  boundValuesIsSymbol,
  byIsSymbol,
  caseConstantFrom,
  caseConstantFrom1,
  caseIsSymbol,
  choiceOwner,
  choicesIsSymbol,
  commutativeRingAda,
  compare14,
  compare17,
  compare3,
  decodeAssets,
  decodeJson2,
  decodeJsonAction,
  decodeJsonAda,
  decodeJsonBound,
  decodeJsonCase,
  decodeJsonChoiceId,
  decodeJsonContract,
  decodeJsonEnvironment,
  decodeJsonInput,
  decodeJsonInputContent,
  decodeJsonMarloweData,
  decodeJsonObservation,
  decodeJsonParty,
  decodeJsonPayee,
  decodeJsonPayment,
  decodeJsonRational,
  decodeJsonTimeInterval,
  decodeJsonToken,
  decodeJsonTransactionOutp,
  decodeJsonValue,
  decodeJsonValueId,
  decodeMap,
  decodeMarloweParams,
  decodeState,
  decodeTransactionInput,
  decodeTransactionWarning,
  divideIsSymbol,
  eitherIsSymbol,
  elseIsSymbol,
  encodeAssets,
  encodeJson1,
  encodeJson11,
  encodeJson12,
  encodeJson13,
  encodeJson14,
  encodeJson17,
  encodeJson18,
  encodeJson19,
  encodeJson2,
  encodeJson20,
  encodeJson22,
  encodeJson24,
  encodeJson25,
  encodeJson26,
  encodeJson27,
  encodeJson28,
  encodeJson30,
  encodeJson31,
  encodeJson32,
  encodeJson33,
  encodeJson34,
  encodeJson35,
  encodeJson37,
  encodeJson38,
  encodeJson4,
  encodeJson40,
  encodeJson41,
  encodeJson43,
  encodeJson5,
  encodeJson6,
  encodeJson7,
  encodeJson8,
  encodeJsonAction,
  encodeJsonAda,
  encodeJsonBound,
  encodeJsonCase,
  encodeJsonChoiceId,
  encodeJsonContract,
  encodeJsonInput,
  encodeJsonInputContent,
  encodeJsonMarloweData,
  encodeJsonMarloweParams,
  encodeJsonObservation,
  encodeJsonParty,
  encodeJsonPayee,
  encodeJsonPayment,
  encodeJsonRational,
  encodeJsonTimeInterval,
  encodeJsonToken,
  encodeJsonTransactionOutp,
  encodeJsonValue,
  encodeJsonValueId,
  encodeRecord,
  encodeState,
  encodeTransactionInput,
  encodeTransactionWarning,
  eq10,
  eq13,
  eq15,
  eq17,
  eq22,
  eq27,
  eq3,
  eq31,
  eq6,
  eqAction,
  eqAda,
  eqApplyAllResult,
  eqApplyResult,
  eqApplyWarning,
  eqAssets,
  eqBound,
  eqCase,
  eqChoiceId,
  eqContract,
  eqEnvironment,
  eqInput,
  eqInputContent,
  eqIntervalError,
  eqIntervalResult,
  eqMarloweData,
  eqMarloweParams,
  eqObservation,
  eqParty,
  eqPayee,
  eqPayment,
  eqRational,
  eqReduceEffect,
  eqReduceResult,
  eqReduceStepResult,
  eqReduceWarning,
  eqState,
  eqTimeInterval,
  eqTimeouts,
  eqToken,
  eqTransactionError,
  eqTransactionInput,
  eqTransactionOutput,
  eqTransactionWarning,
  eqValue,
  eqValueId,
  equal_toIsSymbol,
  euclideanRingAda,
  fromFoldable,
  fromIsSymbol,
  from_accountIsSymbol,
  gDecodeJsonCons,
  gEncodeJsonCons10,
  gEncodeJsonCons13,
  gEncodeJsonCons16,
  gEncodeJsonCons17,
  ge_thanIsSymbol,
  genericAction,
  genericAda,
  genericApplyAllResult,
  genericApplyResult,
  genericApplyWarning,
  genericAssets,
  genericBound,
  genericCase,
  genericChoiceId,
  genericContract,
  genericDecodeJsonIntervalError,
  genericDecodeJsonTransactionError,
  genericEncodeIntervalError,
  genericEncodeTransactionError,
  genericEnvironment,
  genericInput,
  genericInputContent,
  genericIntervalError,
  genericIntervalResult,
  genericMarloweData_,
  genericMarloweParams,
  genericObservation,
  genericParty,
  genericPayee,
  genericPayment,
  genericRational,
  genericReduceEffect,
  genericReduceResult,
  genericReduceStepResult,
  genericReduceWarning,
  genericShow1,
  genericShow10,
  genericShow2,
  genericShow3,
  genericShow5,
  genericShow6,
  genericShow7,
  genericShow9,
  genericShowArgsArgument,
  genericShowArgsArgument1,
  genericShowArgsArgument10,
  genericShowArgsArgument2,
  genericShowArgsArgument3,
  genericShowArgsArgument4,
  genericShowArgsArgument5,
  genericShowArgsArgument6,
  genericShowArgsArgument7,
  genericShowArgsArgument8,
  genericShowArgsArgument9,
  genericShowArgsProduct1,
  genericShowArgsProduct12,
  genericShowArgsProduct13,
  genericShowArgsProduct6,
  genericShowConstructor6,
  genericShowConstructor7,
  genericShowSum,
  genericShowSum1,
  genericShowSum2,
  genericShowSum3,
  genericShowSum4,
  genericShowSum5,
  genericShowSum6,
  genericShowSum7,
  genericShowSum8,
  genericState,
  genericTimeInterval,
  genericToken,
  genericTransactionError,
  genericTransactionInput,
  genericTransactionOutput,
  genericTransactionWarning,
  genericValue,
  genericValueId,
  getAction,
  getAda,
  getInputContent,
  getProp10,
  gtIsSymbol,
  hasTimeoutArray,
  hasTimeoutArrayOfTimeouts,
  hasTimeoutContract,
  ifIsSymbol,
  in_accountIsSymbol,
  into_accountIsSymbol,
  ivFrom,
  ivTo,
  le_thanIsSymbol,
  letIsSymbol,
  ltIsSymbol,
  marloweContractIsSymbol,
  marloweStateIsSymbol,
  maxOf,
  minOf,
  minTimeIsSymbol,
  minimum,
  minusIsSymbol,
  monoidAssets,
  multiplyIsSymbol,
  negateIsSymbol,
  newtypeAda,
  newtypeAssets,
  newtypeEnvironment,
  newtypeMarloweData_,
  newtypeMarloweParams,
  newtypeState,
  newtypeTimeouts,
  newtypeTransactionInput,
  newtypeValueId,
  notIsSymbol,
  of_tokenIsSymbol,
  orBound,
  orIsSymbol,
  ordAction,
  ordAda,
  ordApplyWarning,
  ordAssets,
  ordCase,
  ordChoiceId,
  ordContract,
  ordEnvironment,
  ordInput,
  ordInputContent,
  ordIntervalError,
  ordMap,
  ordMarloweParams,
  ordObservation,
  ordParty,
  ordPayee,
  ordPayment,
  ordRational,
  ordReduceWarning,
  ordTimeInterval,
  ordToken,
  ordTransactionError,
  ordTransactionInput,
  ordTransactionWarning,
  ordTuple,
  ordValue,
  ordValueId,
  payIsSymbol,
  requireProp5,
  requireProp8,
  ringAda,
  rolePayoutValidatorHashIsSymbol,
  rolesCurrencyIsSymbol,
  semigroupAssets,
  semiringAda,
  showAction,
  showAda,
  showApplyAllResult,
  showApplyResult,
  showApplyWarning,
  showArray,
  showAssets,
  showBound,
  showCase,
  showChoiceId,
  showContract,
  showEnvironment,
  showInput,
  showInputContent,
  showIntervalError,
  showIntervalResult,
  showList,
  showList1,
  showMarloweData,
  showMarloweParams,
  showObservation,
  showParty,
  showPayee,
  showPayment,
  showRational,
  showReduceEffect,
  showReduceResult,
  showReduceStepResult,
  showReduceWarning,
  showState,
  showTimeInterval,
  showTimeouts,
  showToken,
  showTransactionError,
  showTransactionInput,
  showTransactionOutput,
  showTransactionWarning,
  showValue,
  showValueId,
  thenIsSymbol,
  timeIntervalIsSymbol,
  timeoutIsSymbol,
  timeout_continuationIsSymbol,
  timeouts,
  timesIsSymbol,
  toIsSymbol,
  unCurrencySymbolIsSymbol,
  valueIsSymbol,
  whenIsSymbol
};
