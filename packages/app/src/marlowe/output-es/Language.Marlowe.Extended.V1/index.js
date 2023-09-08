import * as $runtime from "../runtime.js";
import * as Control$dMonad$dError$dClass from "../Control.Monad.Error.Class/index.js";
import * as Control$dMonad$dReader$dTrans from "../Control.Monad.Reader.Trans/index.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dArgonaut$dDecode$dClass from "../Data.Argonaut.Decode.Class/index.js";
import * as Data$dArgonaut$dDecode$dDecoders from "../Data.Argonaut.Decode.Decoders/index.js";
import * as Data$dArgonaut$dDecode$dError from "../Data.Argonaut.Decode.Error/index.js";
import * as Data$dArgonaut$dEncode$dClass from "../Data.Argonaut.Encode.Class/index.js";
import * as Data$dArgonaut$dEncode$dEncoders from "../Data.Argonaut.Encode.Encoders/index.js";
import * as Data$dArgonaut$dExtra from "../Data.Argonaut.Extra/index.js";
import * as Data$dBigInt from "../Data.BigInt/index.js";
import * as Data$dBigInt$dArgonaut from "../Data.BigInt.Argonaut/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunction from "../Data.Function/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dLens$dIso$dNewtype from "../Data.Lens.Iso.Newtype/index.js";
import * as Data$dLens$dRecord from "../Data.Lens.Record/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMap$dOrdered$dOMap from "../Data.Map.Ordered.OMap/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNumber from "../Data.Number/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import * as Data$dSet from "../Data.Set/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Language$dMarlowe$dCore$dV1$dSemantics$dTypes from "../Language.Marlowe.Core.V1.Semantics.Types/index.js";
import * as Language$dMarlowe$dExtended$dV1$dMetadata$dTypes from "../Language.Marlowe.Extended.V1.Metadata.Types/index.js";
import * as Marlowe$dTemplate from "../Marlowe.Template/index.js";
import * as Marlowe$dTime from "../Marlowe.Time/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const $Action = (tag, _1, _2, _3, _4) => ({tag, _1, _2, _3, _4});
const $Case = (_1, _2) => ({tag: "Case", _1, _2});
const $Contract = (tag, _1, _2, _3, _4, _5) => ({tag, _1, _2, _3, _4, _5});
const $Observation = (tag, _1, _2) => ({tag, _1, _2});
const $Payee = (tag, _1) => ({tag, _1});
const $Timeout = (tag, _1) => ({tag, _1});
const $Value = (tag, _1, _2, _3) => ({tag, _1, _2, _3});
const traverse = /* #__PURE__ */ (() => Data$dTraversable.traversableArray.traverse(Data$dMaybe.applicativeMaybe))();
const foldMap1 = /* #__PURE__ */ (() => Data$dFoldable.foldableArray.foldMap(Marlowe$dTemplate.monoidPlaceholders))();
const genericShowArgsArgument = {genericShowArgs: v => [Language$dMarlowe$dCore$dV1$dSemantics$dTypes.showParty.show(v)]};
const genericShowArgsArgument1 = {
  genericShowArgs: v => [Language$dMarlowe$dCore$dV1$dSemantics$dTypes.genericShow1(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Token(Data$dString$dCommon.toLower(v._1), v._2))]
};
const genericShowSum = /* #__PURE__ */ (() => {
  const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument)(genericShowArgsArgument1))({
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
const genericShowSum1 = /* #__PURE__ */ (() => {
  const $0 = Data$dShow$dGeneric.genericShowConstructor({genericShowArgs: v => ["(fromString \"" + Data$dBigInt.toString(v) + "\")"]})({reflectSymbol: () => "Constant"});
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
  const $0 = Data$dShow$dGeneric.genericShowConstructor({genericShowArgs: v => [Data$dShow.showStringImpl(v)]})({reflectSymbol: () => "ConstantParam"});
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
const genericShowArgsArgument2 = {genericShowArgs: v => [Language$dMarlowe$dCore$dV1$dSemantics$dTypes.showChoiceId.show(v)]};
const genericShowSum3 = /* #__PURE__ */ (() => {
  const $0 = Data$dShow$dGeneric.genericShowConstructor(genericShowArgsArgument2)({reflectSymbol: () => "ChoiceValue"});
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
const genericShowSum4 = /* #__PURE__ */ (() => {
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
const genericShowSum5 = /* #__PURE__ */ (() => {
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
const genericShowArgsArgument3 = {genericShowArgs: v => [Data$dShow.showStringImpl(v)]};
const genericShowSum6 = /* #__PURE__ */ (() => {
  const $0 = Data$dShow$dGeneric.genericShowConstructor(genericShowArgsArgument3)({reflectSymbol: () => "UseValue"});
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
const genericShowSum7 = /* #__PURE__ */ (() => {
  const $0 = Data$dShow$dGeneric.genericShowConstructor(genericShowArgsArgument2)({reflectSymbol: () => "ChoseSomething"});
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
const ValueGEIsSymbol = {reflectSymbol: () => "ValueGE"};
const ValueGTIsSymbol = {reflectSymbol: () => "ValueGT"};
const ValueLTIsSymbol = {reflectSymbol: () => "ValueLT"};
const ValueLEIsSymbol = {reflectSymbol: () => "ValueLE"};
const ValueEQIsSymbol = {reflectSymbol: () => "ValueEQ"};
const genericShowSum8 = /* #__PURE__ */ (() => {
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
const showArray = /* #__PURE__ */ (() => ({show: Data$dShow.showArrayImpl(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.showBound.show)}))();
const genericShowSum9 = /* #__PURE__ */ (() => {
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
const eq7 = /* #__PURE__ */ (() => Data$dEq.eqArrayImpl(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqBound.eq))();
const metadataIsSymbol = {reflectSymbol: () => "metadata"};
const valueParameterInfoIsSymbol = {reflectSymbol: () => "valueParameterInfo"};
const valueParameterFormatIsSymbol = {reflectSymbol: () => "valueParameterFormat"};
const valueParameterDescriptionIsSymbol = {reflectSymbol: () => "valueParameterDescription"};
const timeParameterDescriptionsIsSymbol = {reflectSymbol: () => "timeParameterDescriptions"};
const roleDescriptionsIsSymbol = {reflectSymbol: () => "roleDescriptions"};
const contractTypeIsSymbol = {reflectSymbol: () => "contractType"};
const contractShortDescriptionIsSymbol = {reflectSymbol: () => "contractShortDescription"};
const contractNameIsSymbol = {reflectSymbol: () => "contractName"};
const contractLongDescriptionIsSymbol = {reflectSymbol: () => "contractLongDescription"};
const choiceInfoIsSymbol = {reflectSymbol: () => "choiceInfo"};
const choiceFormatIsSymbol = {reflectSymbol: () => "choiceFormat"};
const choiceDescriptionIsSymbol = {reflectSymbol: () => "choiceDescription"};
const contractIsSymbol = {reflectSymbol: () => "contract"};
const compare7 = /* #__PURE__ */ (() => Data$dOrd.ordArray(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.orBound).compare)();
const encodeJson = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
    reflectSymbol: () => "time_param"
  })();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const encodeJson1 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.encodeJsonParty)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
    reflectSymbol: () => "account"
  })();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const gEncodeJsonCons4 = /* #__PURE__ */ Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.encodeJsonParty)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
  reflectSymbol: () => "party"
})();
const encodeJson3 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.encodeJsonToken)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.encodeJsonParty)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
    reflectSymbol: () => "in_account"
  })())({reflectSymbol: () => "amount_of_token"})();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const encodeJson5 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
    reflectSymbol: () => "constant_param"
  })();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const negateIsSymbol = {reflectSymbol: () => "negate"};
const andIsSymbol = {reflectSymbol: () => "and"};
const addIsSymbol = {reflectSymbol: () => "add"};
const valueIsSymbol = {reflectSymbol: () => "value"};
const minusIsSymbol = {reflectSymbol: () => "minus"};
const timesIsSymbol = {reflectSymbol: () => "times"};
const multiplyIsSymbol = {reflectSymbol: () => "multiply"};
const divideIsSymbol = {reflectSymbol: () => "divide"};
const byIsSymbol = {reflectSymbol: () => "by"};
const encodeJson6 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.encodeJsonChoiceId)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
    reflectSymbol: () => "value_of_choice"
  })();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const encodeJson8 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
    reflectSymbol: () => "use_value"
  })();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const thenIsSymbol = {reflectSymbol: () => "then"};
const ifIsSymbol = {reflectSymbol: () => "if"};
const elseIsSymbol = {reflectSymbol: () => "else"};
const bothIsSymbol = {reflectSymbol: () => "both"};
const orIsSymbol = {reflectSymbol: () => "or"};
const eitherIsSymbol = {reflectSymbol: () => "either"};
const notIsSymbol = {reflectSymbol: () => "not"};
const encodeJson9 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.encodeJsonChoiceId)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
    reflectSymbol: () => "chose_something_for"
  })();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const ge_thanIsSymbol = {reflectSymbol: () => "ge_than"};
const gtIsSymbol = {reflectSymbol: () => "gt"};
const ltIsSymbol = {reflectSymbol: () => "lt"};
const le_thanIsSymbol = {reflectSymbol: () => "le_than"};
const equal_toIsSymbol = {reflectSymbol: () => "equal_to"};
const encodeJson11 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonArray(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.encodeJsonBound))(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.encodeJsonChoiceId)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
    reflectSymbol: () => "for_choice"
  })())({reflectSymbol: () => "choose_between"})();
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
const bindReaderT = /* #__PURE__ */ Control$dMonad$dReader$dTrans.bindReaderT(Data$dEither.bindEither);
const applicativeReaderT = /* #__PURE__ */ (() => {
  const functorReaderT1 = {
    map: x => v => x$1 => {
      const $0 = v(x$1);
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") { return Data$dEither.$Either("Right", x($0._1)); }
      $runtime.fail();
    }
  };
  const applyReaderT1 = {
    apply: v => v1 => r => {
      const $0 = v(r);
      const $1 = v1(r);
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") {
        if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
        if ($1.tag === "Right") { return Data$dEither.$Either("Right", $0._1($1._1)); }
      }
      $runtime.fail();
    },
    Functor0: () => functorReaderT1
  };
  return {pure: x => v => Data$dEither.$Either("Right", x), Apply0: () => applyReaderT1};
})();
const caseConstantFrom = /* #__PURE__ */ Data$dArgonaut$dExtra.caseConstantFrom(Data$dOrd.ordString)(Data$dShow.showString)(Data$dArgonaut$dDecode$dClass.decodeJsonString);
const fromFoldable = /* #__PURE__ */ Data$dMap$dInternal.fromFoldable(Data$dOrd.ordBoolean)(Data$dFoldable.foldableArray);
const caseConstantFrom1 = /* #__PURE__ */ Data$dArgonaut$dExtra.caseConstantFrom(Data$dOrd.ordBoolean)(Data$dShow.showBoolean)(Data$dArgonaut$dDecode$dClass.decodeJsonBoolean);
const getProp5 = /* #__PURE__ */ (() => Data$dArgonaut$dExtra.getProp({
  decodeJson: Data$dArgonaut$dDecode$dDecoders.decodeArray(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.decodeJsonBound.decodeJson)
}))();
const throwError = /* #__PURE__ */ (() => Control$dMonad$dReader$dTrans.monadThrowReaderT(Control$dMonad$dError$dClass.monadThrowEither).throwError)();
const decodeMap = /* #__PURE__ */ Data$dArgonaut$dDecode$dClass.decodeMap(Data$dOrd.ordString)(Data$dArgonaut$dDecode$dClass.decodeJsonString);
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
const gDecodeJsonCons1 = /* #__PURE__ */ Data$dArgonaut$dDecode$dClass.gDecodeJsonCons({
  decodeJsonField: j => {
    if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dExtended$dV1$dMetadata$dTypes.decodeJsonNumberFormat.decodeJson(j._1)); }
    return Data$dMaybe.Nothing;
  }
})(Data$dArgonaut$dDecode$dClass.gDecodeJsonNil);
const decodeSession = dictDecodeJson1 => (
  {
    decodeJson: Data$dArgonaut$dDecode$dDecoders.decodeArray(Data$dArgonaut$dDecode$dDecoders.decodeTuple(Data$dArgonaut$dCore.caseJsonString(Data$dEither.$Either(
      "Left",
      Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")
    ))(Data$dEither.Right))(dictDecodeJson1.decodeJson))
  }
);
const requireProp1 = /* #__PURE__ */ Data$dArgonaut$dExtra.requireProp(/* #__PURE__ */ Data$dArgonaut$dDecode$dClass.decodeRecord(/* #__PURE__ */ Data$dArgonaut$dDecode$dClass.gDecodeJsonCons(/* #__PURE__ */ (() => {
  const $0 = decodeMap(Data$dArgonaut$dDecode$dClass.decodeRecord(gDecodeJsonCons(gDecodeJsonCons1(choiceFormatIsSymbol)()())(choiceDescriptionIsSymbol)()())());
  return {
    decodeJsonField: j => {
      if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0.decodeJson(j._1)); }
      return Data$dMaybe.Nothing;
    }
  };
})())(/* #__PURE__ */ gDecodeJsonCons(/* #__PURE__ */ gDecodeJsonCons(/* #__PURE__ */ gDecodeJsonCons(/* #__PURE__ */ Data$dArgonaut$dDecode$dClass.gDecodeJsonCons({
  decodeJsonField: j => {
    if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dExtended$dV1$dMetadata$dTypes.decodeJsonContractType.decodeJson(j._1)); }
    return Data$dMaybe.Nothing;
  }
})(/* #__PURE__ */ Data$dArgonaut$dDecode$dClass.gDecodeJsonCons(/* #__PURE__ */ (() => {
  const $0 = decodeMap(Data$dArgonaut$dDecode$dClass.decodeJsonString);
  return {
    decodeJsonField: j => {
      if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0.decodeJson(j._1)); }
      return Data$dMaybe.Nothing;
    }
  };
})())(/* #__PURE__ */ Data$dArgonaut$dDecode$dClass.gDecodeJsonCons(/* #__PURE__ */ (() => {
  const $0 = decodeSession(Data$dArgonaut$dDecode$dClass.decodeJsonString);
  return {
    decodeJsonField: j => {
      if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0.decodeJson(j._1)); }
      return Data$dMaybe.Nothing;
    }
  };
})())(/* #__PURE__ */ Data$dArgonaut$dDecode$dClass.gDecodeJsonCons(/* #__PURE__ */ (() => {
  const $0 = decodeSession(Data$dArgonaut$dDecode$dClass.decodeRecord(gDecodeJsonCons(gDecodeJsonCons1(valueParameterFormatIsSymbol)()())(valueParameterDescriptionIsSymbol)()())());
  return {
    decodeJsonField: j => {
      if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0.decodeJson(j._1)); }
      return Data$dMaybe.Nothing;
    }
  };
})())(Data$dArgonaut$dDecode$dClass.gDecodeJsonNil)(valueParameterInfoIsSymbol)()())(timeParameterDescriptionsIsSymbol)()())(roleDescriptionsIsSymbol)()())(contractTypeIsSymbol)()())(contractShortDescriptionIsSymbol)()())(contractNameIsSymbol)()())(contractLongDescriptionIsSymbol)()())(choiceInfoIsSymbol)()())());
const foldMap2 = /* #__PURE__ */ (() => Data$dFoldable.foldableArray.foldMap({mempty: Data$dMap$dInternal.Leaf, Semigroup0: () => ({append: Data$dSet.union(Data$dOrd.ordString)})}))();
const TimeParam = value0 => $Timeout("TimeParam", value0);
const TimeValue = value0 => $Timeout("TimeValue", value0);
const Account = value0 => $Payee("Account", value0);
const Party = value0 => $Payee("Party", value0);
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
const AvailableMoney = value0 => value1 => $Value("AvailableMoney", value0, value1);
const Constant = value0 => $Value("Constant", value0);
const ConstantParam = value0 => $Value("ConstantParam", value0);
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
const Deposit = value0 => value1 => value2 => value3 => $Action("Deposit", value0, value1, value2, value3);
const Choice = value0 => value1 => $Action("Choice", value0, value1);
const Notify = value0 => $Action("Notify", value0);
const Case = value0 => value1 => $Case(value0, value1);
const Close = /* #__PURE__ */ $Contract("Close");
const Pay = value0 => value1 => value2 => value3 => value4 => $Contract("Pay", value0, value1, value2, value3, value4);
const If = value0 => value1 => value2 => $Contract("If", value0, value1, value2);
const When = value0 => value1 => value2 => $Contract("When", value0, value1, value2);
const Let = value0 => value1 => value2 => $Contract("Let", value0, value1, value2);
const Assert = value0 => value1 => $Contract("Assert", value0, value1);
const Module = x => x;
const showModule = {show: v => "(Module " + v.metadata.contractName + ")"};
const newtypeModule_ = {Coercible0: () => {}};
const toCoreTimeout = {
  toCore: v => {
    if (v.tag === "TimeParam") { return Data$dMaybe.Nothing; }
    if (v.tag === "TimeValue") { return Data$dMaybe.$Maybe("Just", v._1); }
    $runtime.fail();
  }
};
const toCorePayee = {
  toCore: v => {
    if (v.tag === "Account") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Payee("Account", v._1)); }
    if (v.tag === "Party") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Payee("Party", v._1)); }
    $runtime.fail();
  }
};
const toCore = dict => dict.toCore;
const toCoreValue = {
  toCore: v => {
    if (v.tag === "Constant") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("Constant", v._1)); }
    if (v.tag === "ConstantParam") { return Data$dMaybe.Nothing; }
    if (v.tag === "AvailableMoney") {
      return Data$dMaybe.applyMaybe.apply(Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.AvailableMoney(v._1)))(Data$dMaybe.$Maybe("Just", v._2));
    }
    if (v.tag === "NegValue") {
      const $0 = toCoreValue.toCore(v._1);
      if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("NegValue", $0._1)); }
      return Data$dMaybe.Nothing;
    }
    if (v.tag === "AddValue") {
      return Data$dMaybe.applyMaybe.apply((() => {
        const $0 = toCoreValue.toCore(v._1);
        if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.AddValue($0._1)); }
        return Data$dMaybe.Nothing;
      })())(toCoreValue.toCore(v._2));
    }
    if (v.tag === "SubValue") {
      return Data$dMaybe.applyMaybe.apply((() => {
        const $0 = toCoreValue.toCore(v._1);
        if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.SubValue($0._1)); }
        return Data$dMaybe.Nothing;
      })())(toCoreValue.toCore(v._2));
    }
    if (v.tag === "MulValue") {
      return Data$dMaybe.applyMaybe.apply((() => {
        const $0 = toCoreValue.toCore(v._1);
        if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.MulValue($0._1)); }
        return Data$dMaybe.Nothing;
      })())(toCoreValue.toCore(v._2));
    }
    if (v.tag === "DivValue") {
      return Data$dMaybe.applyMaybe.apply((() => {
        const $0 = toCoreValue.toCore(v._1);
        if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.DivValue($0._1)); }
        return Data$dMaybe.Nothing;
      })())(toCoreValue.toCore(v._2));
    }
    if (v.tag === "ChoiceValue") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("ChoiceValue", v._1)); }
    if (v.tag === "TimeIntervalStart") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.TimeIntervalStart); }
    if (v.tag === "TimeIntervalEnd") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.TimeIntervalEnd); }
    if (v.tag === "UseValue") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("UseValue", v._1)); }
    if (v.tag === "Cond") {
      return Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply((() => {
        const $0 = toCoreObservation.toCore(v._1);
        if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Cond($0._1)); }
        return Data$dMaybe.Nothing;
      })())(toCoreValue.toCore(v._2)))(toCoreValue.toCore(v._3));
    }
    $runtime.fail();
  }
};
const toCoreObservation = {
  toCore: v => {
    if (v.tag === "AndObs") {
      return Data$dMaybe.applyMaybe.apply((() => {
        const $0 = toCoreObservation.toCore(v._1);
        if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.AndObs($0._1)); }
        return Data$dMaybe.Nothing;
      })())(toCoreObservation.toCore(v._2));
    }
    if (v.tag === "OrObs") {
      return Data$dMaybe.applyMaybe.apply((() => {
        const $0 = toCoreObservation.toCore(v._1);
        if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.OrObs($0._1)); }
        return Data$dMaybe.Nothing;
      })())(toCoreObservation.toCore(v._2));
    }
    if (v.tag === "NotObs") {
      const $0 = toCoreObservation.toCore(v._1);
      if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Observation("NotObs", $0._1)); }
      return Data$dMaybe.Nothing;
    }
    if (v.tag === "ChoseSomething") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Observation("ChoseSomething", v._1)); }
    if (v.tag === "ValueGE") {
      return Data$dMaybe.applyMaybe.apply((() => {
        const $0 = toCoreValue.toCore(v._1);
        if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ValueGE($0._1)); }
        return Data$dMaybe.Nothing;
      })())(toCoreValue.toCore(v._2));
    }
    if (v.tag === "ValueGT") {
      return Data$dMaybe.applyMaybe.apply((() => {
        const $0 = toCoreValue.toCore(v._1);
        if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ValueGT($0._1)); }
        return Data$dMaybe.Nothing;
      })())(toCoreValue.toCore(v._2));
    }
    if (v.tag === "ValueLT") {
      return Data$dMaybe.applyMaybe.apply((() => {
        const $0 = toCoreValue.toCore(v._1);
        if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ValueLT($0._1)); }
        return Data$dMaybe.Nothing;
      })())(toCoreValue.toCore(v._2));
    }
    if (v.tag === "ValueLE") {
      return Data$dMaybe.applyMaybe.apply((() => {
        const $0 = toCoreValue.toCore(v._1);
        if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ValueLE($0._1)); }
        return Data$dMaybe.Nothing;
      })())(toCoreValue.toCore(v._2));
    }
    if (v.tag === "ValueEQ") {
      return Data$dMaybe.applyMaybe.apply((() => {
        const $0 = toCoreValue.toCore(v._1);
        if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ValueEQ($0._1)); }
        return Data$dMaybe.Nothing;
      })())(toCoreValue.toCore(v._2));
    }
    if (v.tag === "TrueObs") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.TrueObs); }
    if (v.tag === "FalseObs") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.FalseObs); }
    $runtime.fail();
  }
};
const toCoreAction = {
  toCore: v => {
    if (v.tag === "Deposit") {
      return Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(Data$dMaybe.$Maybe(
        "Just",
        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Deposit(v._1)
      ))(Data$dMaybe.$Maybe("Just", v._2)))(Data$dMaybe.$Maybe("Just", v._3)))(toCoreValue.toCore(v._4));
    }
    if (v.tag === "Choice") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Action("Choice", v._1, v._2)); }
    if (v.tag === "Notify") {
      const $0 = toCoreObservation.toCore(v._1);
      if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Action("Notify", $0._1)); }
      return Data$dMaybe.Nothing;
    }
    $runtime.fail();
  }
};
const toCoreContract = {
  toCore: v => {
    if (v.tag === "Close") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Close); }
    if (v.tag === "Pay") {
      return Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(Data$dMaybe.$Maybe(
        "Just",
        Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Pay(v._1)
      ))((() => {
        if (v._2.tag === "Account") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Payee("Account", v._2._1)); }
        if (v._2.tag === "Party") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Payee("Party", v._2._1)); }
        $runtime.fail();
      })()))(Data$dMaybe.$Maybe("Just", v._3)))(toCoreValue.toCore(v._4)))(toCoreContract.toCore(v._5));
    }
    if (v.tag === "If") {
      return Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply((() => {
        const $0 = toCoreObservation.toCore(v._1);
        if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.If($0._1)); }
        return Data$dMaybe.Nothing;
      })())(toCoreContract.toCore(v._2)))(toCoreContract.toCore(v._3));
    }
    if (v.tag === "When") {
      return Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply((() => {
        const $0 = traverse(toCoreCase.toCore)(v._1);
        if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.When($0._1)); }
        return Data$dMaybe.Nothing;
      })())((() => {
        if (v._2.tag === "TimeParam") { return Data$dMaybe.Nothing; }
        if (v._2.tag === "TimeValue") { return Data$dMaybe.$Maybe("Just", v._2._1); }
        $runtime.fail();
      })()))(toCoreContract.toCore(v._3));
    }
    if (v.tag === "Let") {
      return Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Let(v._1)))(toCoreValue.toCore(v._2)))(toCoreContract.toCore(v._3));
    }
    if (v.tag === "Assert") {
      return Data$dMaybe.applyMaybe.apply((() => {
        const $0 = toCoreObservation.toCore(v._1);
        if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Assert($0._1)); }
        return Data$dMaybe.Nothing;
      })())(toCoreContract.toCore(v._2));
    }
    $runtime.fail();
  }
};
const toCoreCase = {
  toCore: v => Data$dMaybe.applyMaybe.apply((() => {
    const $0 = toCoreAction.toCore(v._1);
    if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Case($0._1)); }
    return Data$dMaybe.Nothing;
  })())(toCoreContract.toCore(v._2))
};
const templateTimeout = {
  getPlaceholderIds: v => {
    if (v.tag === "TimeParam") {
      return {
        timeoutPlaceholderIds: Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, v._1, undefined, Data$dMap$dInternal.Leaf),
        valuePlaceholderIds: Marlowe$dTemplate.monoidPlaceholders.mempty.valuePlaceholderIds
      };
    }
    if (v.tag === "TimeValue") { return Marlowe$dTemplate.monoidPlaceholders.mempty; }
    $runtime.fail();
  }
};
const templateValue = {
  getPlaceholderIds: v => {
    if (v.tag === "ConstantParam") {
      return {
        timeoutPlaceholderIds: Marlowe$dTemplate.monoidPlaceholders.mempty.timeoutPlaceholderIds,
        valuePlaceholderIds: Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, v._1, undefined, Data$dMap$dInternal.Leaf)
      };
    }
    if (v.tag === "Constant") { return Marlowe$dTemplate.monoidPlaceholders.mempty; }
    if (v.tag === "AvailableMoney") { return Marlowe$dTemplate.monoidPlaceholders.mempty; }
    if (v.tag === "NegValue") { return templateValue.getPlaceholderIds(v._1); }
    if (v.tag === "AddValue") { return Marlowe$dTemplate.semigroupPlaceholders.append(templateValue.getPlaceholderIds(v._1))(templateValue.getPlaceholderIds(v._2)); }
    if (v.tag === "SubValue") { return Marlowe$dTemplate.semigroupPlaceholders.append(templateValue.getPlaceholderIds(v._1))(templateValue.getPlaceholderIds(v._2)); }
    if (v.tag === "MulValue") { return Marlowe$dTemplate.semigroupPlaceholders.append(templateValue.getPlaceholderIds(v._1))(templateValue.getPlaceholderIds(v._2)); }
    if (v.tag === "DivValue") { return Marlowe$dTemplate.semigroupPlaceholders.append(templateValue.getPlaceholderIds(v._1))(templateValue.getPlaceholderIds(v._2)); }
    if (v.tag === "ChoiceValue") { return Marlowe$dTemplate.monoidPlaceholders.mempty; }
    if (v.tag === "TimeIntervalStart") { return Marlowe$dTemplate.monoidPlaceholders.mempty; }
    if (v.tag === "TimeIntervalEnd") { return Marlowe$dTemplate.monoidPlaceholders.mempty; }
    if (v.tag === "UseValue") { return Marlowe$dTemplate.monoidPlaceholders.mempty; }
    if (v.tag === "Cond") {
      return Marlowe$dTemplate.semigroupPlaceholders.append(templateObservation.getPlaceholderIds(v._1))(Marlowe$dTemplate.semigroupPlaceholders.append(templateValue.getPlaceholderIds(v._2))(templateValue.getPlaceholderIds(v._3)));
    }
    $runtime.fail();
  }
};
const templateObservation = {
  getPlaceholderIds: v => {
    if (v.tag === "AndObs") { return Marlowe$dTemplate.semigroupPlaceholders.append(templateObservation.getPlaceholderIds(v._1))(templateObservation.getPlaceholderIds(v._2)); }
    if (v.tag === "OrObs") { return Marlowe$dTemplate.semigroupPlaceholders.append(templateObservation.getPlaceholderIds(v._1))(templateObservation.getPlaceholderIds(v._2)); }
    if (v.tag === "NotObs") { return templateObservation.getPlaceholderIds(v._1); }
    if (v.tag === "ChoseSomething") { return Marlowe$dTemplate.monoidPlaceholders.mempty; }
    if (v.tag === "ValueGE") { return Marlowe$dTemplate.semigroupPlaceholders.append(templateValue.getPlaceholderIds(v._1))(templateValue.getPlaceholderIds(v._2)); }
    if (v.tag === "ValueGT") { return Marlowe$dTemplate.semigroupPlaceholders.append(templateValue.getPlaceholderIds(v._1))(templateValue.getPlaceholderIds(v._2)); }
    if (v.tag === "ValueLT") { return Marlowe$dTemplate.semigroupPlaceholders.append(templateValue.getPlaceholderIds(v._1))(templateValue.getPlaceholderIds(v._2)); }
    if (v.tag === "ValueLE") { return Marlowe$dTemplate.semigroupPlaceholders.append(templateValue.getPlaceholderIds(v._1))(templateValue.getPlaceholderIds(v._2)); }
    if (v.tag === "ValueEQ") { return Marlowe$dTemplate.semigroupPlaceholders.append(templateValue.getPlaceholderIds(v._1))(templateValue.getPlaceholderIds(v._2)); }
    if (v.tag === "TrueObs") { return Marlowe$dTemplate.monoidPlaceholders.mempty; }
    if (v.tag === "FalseObs") { return Marlowe$dTemplate.monoidPlaceholders.mempty; }
    $runtime.fail();
  }
};
const templateAction = {
  getPlaceholderIds: v => {
    if (v.tag === "Deposit") { return templateValue.getPlaceholderIds(v._4); }
    if (v.tag === "Choice") { return Marlowe$dTemplate.monoidPlaceholders.mempty; }
    if (v.tag === "Notify") { return templateObservation.getPlaceholderIds(v._1); }
    $runtime.fail();
  }
};
const templateContract = {
  getPlaceholderIds: v => {
    if (v.tag === "Close") { return Marlowe$dTemplate.monoidPlaceholders.mempty; }
    if (v.tag === "Pay") { return Marlowe$dTemplate.semigroupPlaceholders.append(templateValue.getPlaceholderIds(v._4))(templateContract.getPlaceholderIds(v._5)); }
    if (v.tag === "If") {
      return Marlowe$dTemplate.semigroupPlaceholders.append(templateObservation.getPlaceholderIds(v._1))(Marlowe$dTemplate.semigroupPlaceholders.append(templateContract.getPlaceholderIds(v._2))(templateContract.getPlaceholderIds(v._3)));
    }
    if (v.tag === "When") {
      return Marlowe$dTemplate.semigroupPlaceholders.append(foldMap1(templateCase.getPlaceholderIds)(v._1))(Marlowe$dTemplate.semigroupPlaceholders.append(templateTimeout.getPlaceholderIds(v._2))(templateContract.getPlaceholderIds(v._3)));
    }
    if (v.tag === "Let") { return Marlowe$dTemplate.semigroupPlaceholders.append(templateValue.getPlaceholderIds(v._2))(templateContract.getPlaceholderIds(v._3)); }
    if (v.tag === "Assert") { return Marlowe$dTemplate.semigroupPlaceholders.append(templateObservation.getPlaceholderIds(v._1))(templateContract.getPlaceholderIds(v._2)); }
    $runtime.fail();
  }
};
const templateCase = {getPlaceholderIds: v => Marlowe$dTemplate.semigroupPlaceholders.append(templateAction.getPlaceholderIds(v._1))(templateContract.getPlaceholderIds(v._2))};
const sChoiceIdHasChoices = {getChoiceNames: v => Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, v._1, undefined, Data$dMap$dInternal.Leaf)};
const getChoiceNames = dict => dict.getChoiceNames;
const valueHasChoices = {
  getChoiceNames: v => {
    if (v.tag === "AvailableMoney") { return Data$dMap$dInternal.Leaf; }
    if (v.tag === "Constant") { return Data$dMap$dInternal.Leaf; }
    if (v.tag === "ConstantParam") { return Data$dMap$dInternal.Leaf; }
    if (v.tag === "NegValue") { return valueHasChoices.getChoiceNames(v._1); }
    if (v.tag === "AddValue") {
      return Data$dMap$dInternal.unionWith(Data$dOrd.ordString)(Data$dFunction.const)(valueHasChoices.getChoiceNames(v._1))(valueHasChoices.getChoiceNames(v._2));
    }
    if (v.tag === "SubValue") {
      return Data$dMap$dInternal.unionWith(Data$dOrd.ordString)(Data$dFunction.const)(valueHasChoices.getChoiceNames(v._1))(valueHasChoices.getChoiceNames(v._2));
    }
    if (v.tag === "MulValue") {
      return Data$dMap$dInternal.unionWith(Data$dOrd.ordString)(Data$dFunction.const)(valueHasChoices.getChoiceNames(v._1))(valueHasChoices.getChoiceNames(v._2));
    }
    if (v.tag === "DivValue") {
      return Data$dMap$dInternal.unionWith(Data$dOrd.ordString)(Data$dFunction.const)(valueHasChoices.getChoiceNames(v._1))(valueHasChoices.getChoiceNames(v._2));
    }
    if (v.tag === "ChoiceValue") { return Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, v._1._1, undefined, Data$dMap$dInternal.Leaf); }
    if (v.tag === "TimeIntervalStart") { return Data$dMap$dInternal.Leaf; }
    if (v.tag === "TimeIntervalEnd") { return Data$dMap$dInternal.Leaf; }
    if (v.tag === "UseValue") { return Data$dMap$dInternal.Leaf; }
    if (v.tag === "Cond") {
      return Data$dMap$dInternal.unionWith(Data$dOrd.ordString)(Data$dFunction.const)(observationHasChoices.getChoiceNames(v._1))(Data$dMap$dInternal.unionWith(Data$dOrd.ordString)(Data$dFunction.const)(valueHasChoices.getChoiceNames(v._2))(valueHasChoices.getChoiceNames(v._3)));
    }
    $runtime.fail();
  }
};
const observationHasChoices = {
  getChoiceNames: v => {
    if (v.tag === "AndObs") {
      return Data$dMap$dInternal.unionWith(Data$dOrd.ordString)(Data$dFunction.const)(observationHasChoices.getChoiceNames(v._1))(observationHasChoices.getChoiceNames(v._2));
    }
    if (v.tag === "OrObs") {
      return Data$dMap$dInternal.unionWith(Data$dOrd.ordString)(Data$dFunction.const)(observationHasChoices.getChoiceNames(v._1))(observationHasChoices.getChoiceNames(v._2));
    }
    if (v.tag === "NotObs") { return observationHasChoices.getChoiceNames(v._1); }
    if (v.tag === "ChoseSomething") { return Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, v._1._1, undefined, Data$dMap$dInternal.Leaf); }
    if (v.tag === "ValueGE") {
      return Data$dMap$dInternal.unionWith(Data$dOrd.ordString)(Data$dFunction.const)(valueHasChoices.getChoiceNames(v._1))(valueHasChoices.getChoiceNames(v._2));
    }
    if (v.tag === "ValueGT") {
      return Data$dMap$dInternal.unionWith(Data$dOrd.ordString)(Data$dFunction.const)(valueHasChoices.getChoiceNames(v._1))(valueHasChoices.getChoiceNames(v._2));
    }
    if (v.tag === "ValueLT") {
      return Data$dMap$dInternal.unionWith(Data$dOrd.ordString)(Data$dFunction.const)(valueHasChoices.getChoiceNames(v._1))(valueHasChoices.getChoiceNames(v._2));
    }
    if (v.tag === "ValueLE") {
      return Data$dMap$dInternal.unionWith(Data$dOrd.ordString)(Data$dFunction.const)(valueHasChoices.getChoiceNames(v._1))(valueHasChoices.getChoiceNames(v._2));
    }
    if (v.tag === "ValueEQ") {
      return Data$dMap$dInternal.unionWith(Data$dOrd.ordString)(Data$dFunction.const)(valueHasChoices.getChoiceNames(v._1))(valueHasChoices.getChoiceNames(v._2));
    }
    if (v.tag === "TrueObs") { return Data$dMap$dInternal.Leaf; }
    if (v.tag === "FalseObs") { return Data$dMap$dInternal.Leaf; }
    $runtime.fail();
  }
};
const genericValue = {
  to: x => {
    if (x.tag === "Inl") { return $Value("AvailableMoney", x._1._1, x._1._2); }
    if (x.tag === "Inr") {
      if (x._1.tag === "Inl") { return $Value("Constant", x._1._1); }
      if (x._1.tag === "Inr") {
        if (x._1._1.tag === "Inl") { return $Value("ConstantParam", x._1._1._1); }
        if (x._1._1.tag === "Inr") {
          if (x._1._1._1.tag === "Inl") { return $Value("NegValue", x._1._1._1._1); }
          if (x._1._1._1.tag === "Inr") {
            if (x._1._1._1._1.tag === "Inl") { return $Value("AddValue", x._1._1._1._1._1._1, x._1._1._1._1._1._2); }
            if (x._1._1._1._1.tag === "Inr") {
              if (x._1._1._1._1._1.tag === "Inl") { return $Value("SubValue", x._1._1._1._1._1._1._1, x._1._1._1._1._1._1._2); }
              if (x._1._1._1._1._1.tag === "Inr") {
                if (x._1._1._1._1._1._1.tag === "Inl") { return $Value("MulValue", x._1._1._1._1._1._1._1._1, x._1._1._1._1._1._1._1._2); }
                if (x._1._1._1._1._1._1.tag === "Inr") {
                  if (x._1._1._1._1._1._1._1.tag === "Inl") { return $Value("DivValue", x._1._1._1._1._1._1._1._1._1, x._1._1._1._1._1._1._1._1._2); }
                  if (x._1._1._1._1._1._1._1.tag === "Inr") {
                    if (x._1._1._1._1._1._1._1._1.tag === "Inl") { return $Value("ChoiceValue", x._1._1._1._1._1._1._1._1._1); }
                    if (x._1._1._1._1._1._1._1._1.tag === "Inr") {
                      if (x._1._1._1._1._1._1._1._1._1.tag === "Inl") { return TimeIntervalStart; }
                      if (x._1._1._1._1._1._1._1._1._1.tag === "Inr") {
                        if (x._1._1._1._1._1._1._1._1._1._1.tag === "Inl") { return TimeIntervalEnd; }
                        if (x._1._1._1._1._1._1._1._1._1._1.tag === "Inr") {
                          if (x._1._1._1._1._1._1._1._1._1._1._1.tag === "Inl") { return $Value("UseValue", x._1._1._1._1._1._1._1._1._1._1._1._1); }
                          if (x._1._1._1._1._1._1._1._1._1._1._1.tag === "Inr") {
                            return $Value(
                              "Cond",
                              x._1._1._1._1._1._1._1._1._1._1._1._1._1,
                              x._1._1._1._1._1._1._1._1._1._1._1._1._2._1,
                              x._1._1._1._1._1._1._1._1._1._1._1._1._2._2
                            );
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
    }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "AvailableMoney") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, x._2)); }
    if (x.tag === "Constant") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", x._1)); }
    if (x.tag === "ConstantParam") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", x._1))); }
    if (x.tag === "NegValue") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", x._1)))); }
    if (x.tag === "AddValue") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, x._2)))))
      );
    }
    if (x.tag === "SubValue") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, x._2)))))
        )
      );
    }
    if (x.tag === "MulValue") {
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
    if (x.tag === "DivValue") {
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
    if (x.tag === "ChoiceValue") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum(
              "Inr",
              Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", x._1)))))
            )
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
                  Data$dGeneric$dRep.$Sum(
                    "Inr",
                    Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments))))
                  )
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
                    Data$dGeneric$dRep.$Sum(
                      "Inr",
                      Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", x._1))))
                    )
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
        )
      );
    }
    $runtime.fail();
  }
};
const genericTimeout = {
  to: x => {
    if (x.tag === "Inl") { return $Timeout("TimeParam", x._1); }
    if (x.tag === "Inr") { return $Timeout("TimeValue", x._1); }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "TimeParam") { return Data$dGeneric$dRep.$Sum("Inl", x._1); }
    if (x.tag === "TimeValue") { return Data$dGeneric$dRep.$Sum("Inr", x._1); }
    $runtime.fail();
  }
};
const genericShow1 = /* #__PURE__ */ (() => {
  const $0 = Data$dShow$dGeneric.genericShowConstructor({genericShowArgs: v => [Data$dShow.showStringImpl(v)]})({reflectSymbol: () => "TimeParam"});
  const $1 = Data$dShow$dGeneric.genericShowConstructor({genericShowArgs: v => ["(Instant (Milliseconds " + Data$dShow.showNumberImpl(v) + "))"]})({
    reflectSymbol: () => "TimeValue"
  });
  return x => {
    if (x.tag === "TimeParam") { return $0["genericShow'"](x._1); }
    if (x.tag === "TimeValue") { return $1["genericShow'"](x._1); }
    $runtime.fail();
  };
})();
const showTimeout = {
  show: v => {
    if (v.tag === "TimeValue") { return Data$dShow.showIntImpl(Data$dInt.unsafeClamp(Data$dNumber.round(v._1))); }
    return genericShow1(v);
  }
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
const genericShow2 = /* #__PURE__ */ (() => {
  const $0 = Data$dShow$dGeneric.genericShowConstructor(genericShowArgsArgument)({reflectSymbol: () => "Account"});
  const $1 = Data$dShow$dGeneric.genericShowConstructor(genericShowArgsArgument)({reflectSymbol: () => "Party"});
  return x => {
    if (x.tag === "Account") { return $0["genericShow'"](x._1); }
    if (x.tag === "Party") { return $1["genericShow'"](x._1); }
    $runtime.fail();
  };
})();
const showPayee = {show: v => genericShow2(v)};
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
  show: v => {
    if (v.tag === "Constant") { return Data$dBigInt.toString(v._1); }
    return genericShowSum(genericShowSum1(genericShowSum2((() => {
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
              const $5 = genericShowSum3(genericShowSum4(genericShowSum5(genericShowSum6(Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct({
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
    })())))["genericShow'"](genericValue.from(v));
  }
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
    const $3 = genericShowSum7((() => {
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
                  if (v._1._1._1._1.tag === "Inr") { return genericShowSum8["genericShow'"](v._1._1._1._1._1); }
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
const genericShowArgsArgument4 = {genericShowArgs: v => [showValue.show(v)]};
const genericShowArgsArgument5 = {genericShowArgs: v => [showObservation.show(v)]};
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
const genericCase = {to: x => $Case(x._1, x._2), from: x => Data$dGeneric$dRep.$Product(x._1, x._2)};
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
const genericShow5 = /* #__PURE__ */ (() => {
  const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument)(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument)(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument1)(genericShowArgsArgument4))))({
    reflectSymbol: () => "Deposit"
  });
  const $1 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument2)({genericShowArgs: v => [showArray.show(v)]}))({
    reflectSymbol: () => "Choice"
  });
  const $2 = (() => {
    const $2 = (() => {
      const $2 = Data$dShow$dGeneric.genericShowConstructor(genericShowArgsArgument5)({reflectSymbol: () => "Notify"});
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
    if (v.tag === "Choice") { return "(Choice " + Language$dMarlowe$dCore$dV1$dSemantics$dTypes.showChoiceId.show(v._1) + " " + showArray.show(v._2) + ")"; }
    return genericShow5(v);
  }
};
const showContract = {
  show: v => genericShowSum9((() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument)(Data$dShow$dGeneric.genericShowArgsProduct({
      genericShowArgs: v$1 => [genericShow2(v$1)]
    })(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument1)(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument4)({
      genericShowArgs: v$1 => [showContract.show(v$1)]
    })))))(PayIsSymbol);
    const $1 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument5)(Data$dShow$dGeneric.genericShowArgsProduct({
      genericShowArgs: v$1 => [showContract.show(v$1)]
    })({genericShowArgs: v$1 => [showContract.show(v$1)]})))(IfIsSymbol);
    const $2 = (() => {
      const $2 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct((() => {
        const $2 = Data$dShow.showArrayImpl(showCase.show);
        return {genericShowArgs: v$1 => [$2(v$1)]};
      })())(Data$dShow$dGeneric.genericShowArgsProduct({genericShowArgs: v$1 => [showTimeout.show(v$1)]})({genericShowArgs: v$1 => [showContract.show(v$1)]})))(WhenIsSymbol);
      const $3 = (() => {
        const $3 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument3)(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument4)({
          genericShowArgs: v$1 => [showContract.show(v$1)]
        })))(LetIsSymbol);
        const $4 = (() => {
          const $4 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument5)({
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
const showCase = {show: v => "Case " + showAction.show(v._1) + " " + showContract.show(v._2)};
const fillableTimeout = {
  fillTemplate: v => v1 => {
    if (v1.tag === "TimeParam") {
      const $0 = Data$dMap$dInternal.lookup(Data$dOrd.ordString)(v1._1)(v.timeContent);
      if ($0.tag === "Nothing") { return v1; }
      if ($0.tag === "Just") { return $Timeout("TimeValue", $0._1); }
      $runtime.fail();
    }
    if (v1.tag === "TimeValue") { return $Timeout("TimeValue", v1._1); }
    $runtime.fail();
  }
};
const fillableValue = {
  fillTemplate: placeholders => val => {
    if (val.tag === "Constant") { return val; }
    if (val.tag === "ConstantParam") {
      const $0 = Data$dMap$dInternal.lookup(Data$dOrd.ordString)(val._1)(placeholders.valueContent);
      if ($0.tag === "Nothing") { return val; }
      if ($0.tag === "Just") { return $Value("Constant", $0._1); }
      $runtime.fail();
    }
    if (val.tag === "AvailableMoney") { return val; }
    if (val.tag === "NegValue") { return $Value("NegValue", fillableValue.fillTemplate(placeholders)(val._1)); }
    if (val.tag === "AddValue") { return $Value("AddValue", fillableValue.fillTemplate(placeholders)(val._1), fillableValue.fillTemplate(placeholders)(val._2)); }
    if (val.tag === "SubValue") { return $Value("SubValue", fillableValue.fillTemplate(placeholders)(val._1), fillableValue.fillTemplate(placeholders)(val._2)); }
    if (val.tag === "MulValue") { return $Value("MulValue", fillableValue.fillTemplate(placeholders)(val._1), fillableValue.fillTemplate(placeholders)(val._2)); }
    if (val.tag === "DivValue") { return $Value("DivValue", fillableValue.fillTemplate(placeholders)(val._1), fillableValue.fillTemplate(placeholders)(val._2)); }
    if (val.tag === "ChoiceValue") { return val; }
    if (val.tag === "TimeIntervalStart") { return val; }
    if (val.tag === "TimeIntervalEnd") { return val; }
    if (val.tag === "UseValue") { return val; }
    if (val.tag === "Cond") {
      return $Value(
        "Cond",
        fillableObservation.fillTemplate(placeholders)(val._1),
        fillableValue.fillTemplate(placeholders)(val._2),
        fillableValue.fillTemplate(placeholders)(val._3)
      );
    }
    $runtime.fail();
  }
};
const fillableObservation = {
  fillTemplate: placeholders => obs => {
    if (obs.tag === "AndObs") { return $Observation("AndObs", fillableObservation.fillTemplate(placeholders)(obs._1), fillableObservation.fillTemplate(placeholders)(obs._2)); }
    if (obs.tag === "OrObs") { return $Observation("OrObs", fillableObservation.fillTemplate(placeholders)(obs._1), fillableObservation.fillTemplate(placeholders)(obs._2)); }
    if (obs.tag === "NotObs") { return $Observation("NotObs", fillableObservation.fillTemplate(placeholders)(obs._1)); }
    if (obs.tag === "ChoseSomething") { return obs; }
    if (obs.tag === "ValueGE") { return $Observation("ValueGE", fillableValue.fillTemplate(placeholders)(obs._1), fillableValue.fillTemplate(placeholders)(obs._2)); }
    if (obs.tag === "ValueGT") { return $Observation("ValueGT", fillableValue.fillTemplate(placeholders)(obs._1), fillableValue.fillTemplate(placeholders)(obs._2)); }
    if (obs.tag === "ValueLT") { return $Observation("ValueLT", fillableValue.fillTemplate(placeholders)(obs._1), fillableValue.fillTemplate(placeholders)(obs._2)); }
    if (obs.tag === "ValueLE") { return $Observation("ValueLE", fillableValue.fillTemplate(placeholders)(obs._1), fillableValue.fillTemplate(placeholders)(obs._2)); }
    if (obs.tag === "ValueEQ") { return $Observation("ValueEQ", fillableValue.fillTemplate(placeholders)(obs._1), fillableValue.fillTemplate(placeholders)(obs._2)); }
    if (obs.tag === "TrueObs") { return obs; }
    if (obs.tag === "FalseObs") { return obs; }
    $runtime.fail();
  }
};
const fillableAction = {
  fillTemplate: placeholders => action => {
    if (action.tag === "Deposit") { return $Action("Deposit", action._1, action._2, action._3, fillableValue.fillTemplate(placeholders)(action._4)); }
    if (action.tag === "Choice") { return action; }
    if (action.tag === "Notify") { return $Action("Notify", fillableObservation.fillTemplate(placeholders)(action._1)); }
    $runtime.fail();
  }
};
const fillableContract = {
  fillTemplate: placeholders => contract => {
    if (contract.tag === "Close") { return Close; }
    if (contract.tag === "Pay") {
      return $Contract(
        "Pay",
        contract._1,
        contract._2,
        contract._3,
        fillableValue.fillTemplate(placeholders)(contract._4),
        fillableContract.fillTemplate(placeholders)(contract._5)
      );
    }
    if (contract.tag === "If") {
      return $Contract(
        "If",
        fillableObservation.fillTemplate(placeholders)(contract._1),
        fillableContract.fillTemplate(placeholders)(contract._2),
        fillableContract.fillTemplate(placeholders)(contract._3)
      );
    }
    if (contract.tag === "When") {
      return $Contract(
        "When",
        Data$dFunctor.arrayMap(fillableCase.fillTemplate(placeholders))(contract._1),
        fillableTimeout.fillTemplate(placeholders)(contract._2),
        fillableContract.fillTemplate(placeholders)(contract._3)
      );
    }
    if (contract.tag === "Let") {
      return $Contract("Let", contract._1, fillableValue.fillTemplate(placeholders)(contract._2), fillableContract.fillTemplate(placeholders)(contract._3));
    }
    if (contract.tag === "Assert") {
      return $Contract("Assert", fillableObservation.fillTemplate(placeholders)(contract._1), fillableContract.fillTemplate(placeholders)(contract._2));
    }
    $runtime.fail();
  }
};
const fillableCase = {fillTemplate: placeholders => v => $Case(fillableAction.fillTemplate(placeholders)(v._1), fillableContract.fillTemplate(placeholders)(v._2))};
const eqTimeout = {
  eq: x => y => {
    if (x.tag === "TimeParam") { return y.tag === "TimeParam" && x._1 === y._1; }
    return x.tag === "TimeValue" && y.tag === "TimeValue" && x._1 === y._1;
  }
};
const ordTimeout = {
  compare: x => y => {
    if (x.tag === "TimeParam") {
      if (y.tag === "TimeParam") { return Data$dOrd.ordString.compare(x._1)(y._1); }
      return Data$dOrdering.LT;
    }
    if (y.tag === "TimeParam") { return Data$dOrdering.GT; }
    if (x.tag === "TimeValue" && y.tag === "TimeValue") { return Data$dOrd.ordNumber.compare(x._1)(y._1); }
    $runtime.fail();
  },
  Eq0: () => eqTimeout
};
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
const ordPayee = {
  compare: x => y => {
    if (x.tag === "Account") {
      if (y.tag === "Account") { return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty.compare(x._1)(y._1); }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Account") { return Data$dOrdering.GT; }
    if (x.tag === "Party" && y.tag === "Party") { return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty.compare(x._1)(y._1); }
    $runtime.fail();
  },
  Eq0: () => eqPayee
};
const eqValue = {
  eq: x => y => {
    if (x.tag === "AvailableMoney") {
      return y.tag === "AvailableMoney" && (x._1.tag === "Address"
        ? y._1.tag === "Address" && x._1._1 === y._1._1
        : x._1.tag === "Role" && y._1.tag === "Role" && x._1._1 === y._1._1) && Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqToken.eq(x._2)(y._2);
    }
    if (x.tag === "Constant") { return y.tag === "Constant" && Data$dBigInt.biEquals(x._1)(y._1); }
    if (x.tag === "ConstantParam") { return y.tag === "ConstantParam" && x._1 === y._1; }
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
const ordValue = {
  compare: x => y => {
    if (x.tag === "AvailableMoney") {
      if (y.tag === "AvailableMoney") {
        const v = Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordToken.compare(x._2)(y._2);
      }
      return Data$dOrdering.LT;
    }
    if (y.tag === "AvailableMoney") { return Data$dOrdering.GT; }
    if (x.tag === "Constant") {
      if (y.tag === "Constant") { return Data$dBigInt.ordBigInt.compare(x._1)(y._1); }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Constant") { return Data$dOrdering.GT; }
    if (x.tag === "ConstantParam") {
      if (y.tag === "ConstantParam") { return Data$dOrd.ordString.compare(x._1)(y._1); }
      return Data$dOrdering.LT;
    }
    if (y.tag === "ConstantParam") { return Data$dOrdering.GT; }
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
      if (y.tag === "ChoiceValue") { return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordChoiceId.compare(x._1)(y._1); }
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
      if (y.tag === "ChoseSomething") { return Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordChoiceId.compare(x._1)(y._1); }
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
const eqAction = {
  eq: x => y => {
    if (x.tag === "Deposit") {
      return y.tag === "Deposit" && (x._1.tag === "Address" ? y._1.tag === "Address" && x._1._1 === y._1._1 : x._1.tag === "Role" && y._1.tag === "Role" && x._1._1 === y._1._1) && (x._2.tag === "Address"
        ? y._2.tag === "Address" && x._2._1 === y._2._1
        : x._2.tag === "Role" && y._2.tag === "Role" && x._2._1 === y._2._1) && Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqToken.eq(x._3)(y._3) && eqValue.eq(x._4)(y._4);
    }
    if (x.tag === "Choice") {
      return y.tag === "Choice" && x._1._1 === y._1._1 && (x._1._2.tag === "Address"
        ? y._1._2.tag === "Address" && x._1._2._1 === y._1._2._1
        : x._1._2.tag === "Role" && y._1._2.tag === "Role" && x._1._2._1 === y._1._2._1) && eq7(x._2)(y._2);
    }
    return x.tag === "Notify" && y.tag === "Notify" && eqObservation.eq(x._1)(y._1);
  }
};
const eqContract = {
  eq: x => y => {
    if (x.tag === "Close") { return y.tag === "Close"; }
    if (x.tag === "Pay") {
      return y.tag === "Pay" && (x._1.tag === "Address" ? y._1.tag === "Address" && x._1._1 === y._1._1 : x._1.tag === "Role" && y._1.tag === "Role" && x._1._1 === y._1._1) && eqPayee.eq(x._2)(y._2) && Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqToken.eq(x._3)(y._3) && eqValue.eq(x._4)(y._4) && eqContract.eq(x._5)(y._5);
    }
    if (x.tag === "If") { return y.tag === "If" && eqObservation.eq(x._1)(y._1) && eqContract.eq(x._2)(y._2) && eqContract.eq(x._3)(y._3); }
    if (x.tag === "When") {
      return y.tag === "When" && Data$dEq.eqArrayImpl(eqCase.eq)(x._1)(y._1) && (x._2.tag === "TimeParam"
        ? y._2.tag === "TimeParam" && x._2._1 === y._2._1
        : x._2.tag === "TimeValue" && y._2.tag === "TimeValue" && x._2._1 === y._2._1) && eqContract.eq(x._3)(y._3);
    }
    if (x.tag === "Let") { return y.tag === "Let" && x._1 === y._1 && eqValue.eq(x._2)(y._2) && eqContract.eq(x._3)(y._3); }
    return x.tag === "Assert" && y.tag === "Assert" && eqObservation.eq(x._1)(y._1) && eqContract.eq(x._2)(y._2);
  }
};
const eqCase = {eq: x => y => eqAction.eq(x._1)(y._1) && eqContract.eq(x._2)(y._2)};
const eqModule = {
  eq: /* #__PURE__ */ (() => {
    const $0 = Data$dMap$dOrdered$dOMap.eqOMap(Data$dEq.eqString)({
      eq: ra => rb => ra.valueParameterDescription === rb.valueParameterDescription && (() => {
        if (ra.valueParameterFormat.tag === "DefaultFormat") { return rb.valueParameterFormat.tag === "DefaultFormat"; }
        if (ra.valueParameterFormat.tag === "DecimalFormat") {
          return rb.valueParameterFormat.tag === "DecimalFormat" && ra.valueParameterFormat._1 === rb.valueParameterFormat._1 && ra.valueParameterFormat._2 === rb.valueParameterFormat._2;
        }
        return ra.valueParameterFormat.tag === "TimeFormat" && rb.valueParameterFormat.tag === "TimeFormat";
      })()
    });
    const $1 = Data$dMap$dOrdered$dOMap.eqOMap(Data$dEq.eqString)(Data$dEq.eqString);
    const $2 = Data$dMap$dInternal.eqMap(Data$dEq.eqString)(Data$dEq.eqString);
    const $3 = Data$dMap$dInternal.eqMap(Data$dEq.eqString)({
      eq: ra => rb => ra.choiceDescription === rb.choiceDescription && (() => {
        if (ra.choiceFormat.tag === "DefaultFormat") { return rb.choiceFormat.tag === "DefaultFormat"; }
        if (ra.choiceFormat.tag === "DecimalFormat") {
          return rb.choiceFormat.tag === "DecimalFormat" && ra.choiceFormat._1 === rb.choiceFormat._1 && ra.choiceFormat._2 === rb.choiceFormat._2;
        }
        return ra.choiceFormat.tag === "TimeFormat" && rb.choiceFormat.tag === "TimeFormat";
      })()
    });
    return ra => rb => eqContract.eq(ra.contract)(rb.contract) && $3.eq(ra.metadata.choiceInfo)(rb.metadata.choiceInfo) && ra.metadata.contractLongDescription === rb.metadata.contractLongDescription && ra.metadata.contractName === rb.metadata.contractName && ra.metadata.contractShortDescription === rb.metadata.contractShortDescription && (() => {
      if (ra.metadata.contractType === "Escrow") { return rb.metadata.contractType === "Escrow"; }
      if (ra.metadata.contractType === "EscrowWithCollateral") { return rb.metadata.contractType === "EscrowWithCollateral"; }
      if (ra.metadata.contractType === "ZeroCouponBond") { return rb.metadata.contractType === "ZeroCouponBond"; }
      if (ra.metadata.contractType === "CouponBondGuaranteed") { return rb.metadata.contractType === "CouponBondGuaranteed"; }
      if (ra.metadata.contractType === "Swap") { return rb.metadata.contractType === "Swap"; }
      if (ra.metadata.contractType === "ContractForDifferences") { return rb.metadata.contractType === "ContractForDifferences"; }
      return ra.metadata.contractType === "Other" && rb.metadata.contractType === "Other";
    })() && $2.eq(ra.metadata.roleDescriptions)(rb.metadata.roleDescriptions) && $1.eq(ra.metadata.timeParameterDescriptions)(rb.metadata.timeParameterDescriptions) && $0.eq(ra.metadata.valueParameterInfo)(rb.metadata.valueParameterInfo);
  })()
};
const ordAction = {
  compare: x => y => {
    if (x.tag === "Deposit") {
      if (y.tag === "Deposit") {
        const v = Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        const v1 = Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty.compare(x._2)(y._2);
        if (v1 === "LT") { return Data$dOrdering.LT; }
        if (v1 === "GT") { return Data$dOrdering.GT; }
        const v2 = Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordToken.compare(x._3)(y._3);
        if (v2 === "LT") { return Data$dOrdering.LT; }
        if (v2 === "GT") { return Data$dOrdering.GT; }
        return ordValue.compare(x._4)(y._4);
      }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Deposit") { return Data$dOrdering.GT; }
    if (x.tag === "Choice") {
      if (y.tag === "Choice") {
        const v = Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordChoiceId.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        return compare7(x._2)(y._2);
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
        const v = Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        const v1 = ordPayee.compare(x._2)(y._2);
        if (v1 === "LT") { return Data$dOrdering.LT; }
        if (v1 === "GT") { return Data$dOrdering.GT; }
        const v2 = Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordToken.compare(x._3)(y._3);
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
        const v1 = ordTimeout.compare(x._2)(y._2);
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
    const v = ordAction.compare(x._1)(y._1);
    if (v === "LT") { return Data$dOrdering.LT; }
    if (v === "GT") { return Data$dOrdering.GT; }
    return ordContract.compare(x._2)(y._2);
  },
  Eq0: () => eqCase
};
const encodeJsonTimeout = {
  encodeJson: v => {
    if (v.tag === "TimeParam") { return encodeJson({time_param: v._1}); }
    if (v.tag === "TimeValue") { return Data$dArgonaut$dCore.fromNumber(v._1); }
    $runtime.fail();
  }
};
const encodeJsonPayee = {
  encodeJson: v => {
    if (v.tag === "Account") { return encodeJson1({account: v._1}); }
    if (v.tag === "Party") { return Data$dArgonaut$dCore.fromObject(gEncodeJsonCons4.gEncodeJson({party: v._1})(Type$dProxy.Proxy)); }
    $runtime.fail();
  }
};
const gEncodeJsonCons10 = /* #__PURE__ */ Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonPayee)(/* #__PURE__ */ Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.encodeJsonToken)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
  reflectSymbol: () => "token"
})())({reflectSymbol: () => "to"})();
const encodeJsonValue = {
  encodeJson: v => {
    if (v.tag === "AvailableMoney") { return encodeJson3({amount_of_token: v._2, in_account: v._1}); }
    if (v.tag === "Constant") { return Data$dBigInt$dArgonaut.encodeBigInt(v._1); }
    if (v.tag === "ConstantParam") { return encodeJson5({constant_param: v._1}); }
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
    if (v.tag === "ChoiceValue") { return encodeJson6({value_of_choice: v._1}); }
    if (v.tag === "TimeIntervalStart") { return Data$dArgonaut$dCore.fromString("time_interval_start"); }
    if (v.tag === "TimeIntervalEnd") { return Data$dArgonaut$dCore.fromString("time_interval_end"); }
    if (v.tag === "UseValue") { return encodeJson8({use_value: v._1}); }
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
    if (v.tag === "ChoseSomething") { return encodeJson9({chose_something_for: v._1}); }
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
const encodeJson12 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonValue)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.encodeJsonParty)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.encodeJsonToken)(gEncodeJsonCons4)({
    reflectSymbol: () => "of_token"
  })())({reflectSymbol: () => "into_account"})())({reflectSymbol: () => "deposits"})();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const encodeJson13 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonObservation)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({reflectSymbol: () => "notify_if"})();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const encodeJsonAction = {
  encodeJson: v => {
    if (v.tag === "Deposit") { return encodeJson12({party: v._2, deposits: v._4, of_token: v._3, into_account: v._1}); }
    if (v.tag === "Choice") { return encodeJson11({choose_between: v._2, for_choice: v._1}); }
    if (v.tag === "Notify") { return encodeJson13({notify_if: v._1}); }
    $runtime.fail();
  }
};
const encodeJsonContract = {
  encodeJson: v => {
    if (v.tag === "Close") { return Data$dArgonaut$dCore.fromString("close"); }
    if (v.tag === "Pay") {
      return Data$dArgonaut$dCore.fromObject(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.encodeJsonParty)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonValue)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonContract)(gEncodeJsonCons10)(thenIsSymbol)())(payIsSymbol)())(from_accountIsSymbol)().gEncodeJson({
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
      return Data$dArgonaut$dCore.fromObject(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonTimeout)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonContract)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonArray(encodeJsonCase))(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(whenIsSymbol)())(timeout_continuationIsSymbol)())(timeoutIsSymbol)().gEncodeJson({
        when: v._1,
        timeout: v._2,
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
  encodeJson: v => Data$dArgonaut$dCore.fromObject(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonAction)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonContract)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(thenIsSymbol)())(caseIsSymbol)().gEncodeJson({
    case: v._1,
    then: v._2
  })(Type$dProxy.Proxy))
};
const encodeJson14 = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonContract)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonInt)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons((() => {
    const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons((() => {
      const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Language$dMarlowe$dExtended$dV1$dMetadata$dTypes.encodeJsonNumberFormat)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(choiceFormatIsSymbol)())(choiceDescriptionIsSymbol)();
      return {
        encodeJson: Data$dArgonaut$dEncode$dEncoders.encodeMap(Data$dOrd.ordString)(Data$dArgonaut$dCore.fromString)(rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy)))
      };
    })())(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Language$dMarlowe$dExtended$dV1$dMetadata$dTypes.encodeJsonContractType)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons({
      encodeJson: Data$dArgonaut$dEncode$dEncoders.encodeMap(Data$dOrd.ordString)(Data$dArgonaut$dCore.fromString)(Data$dArgonaut$dCore.fromString)
    })(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonArray({
      encodeJson: Data$dArgonaut$dEncode$dEncoders.encodeTuple(Data$dArgonaut$dCore.fromString)(Data$dArgonaut$dCore.fromString)
    }))(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons((() => {
      const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Language$dMarlowe$dExtended$dV1$dMetadata$dTypes.encodeJsonNumberFormat)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(valueParameterFormatIsSymbol)())(valueParameterDescriptionIsSymbol)();
      return Data$dArgonaut$dEncode$dClass.encodeJsonArray({
        encodeJson: v => Data$dArgonaut$dCore.fromArray([Data$dArgonaut$dCore.fromString(v._1), Data$dArgonaut$dCore.fromObject($0.gEncodeJson(v._2)(Type$dProxy.Proxy))])
      });
    })())(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(valueParameterInfoIsSymbol)())(timeParameterDescriptionsIsSymbol)())(roleDescriptionsIsSymbol)())(contractTypeIsSymbol)())(contractShortDescriptionIsSymbol)())(contractNameIsSymbol)())(contractLongDescriptionIsSymbol)())(choiceInfoIsSymbol)();
    return {encodeJson: rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy))};
  })())(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(metadataIsSymbol)())({reflectSymbol: () => "me_version"})())(contractIsSymbol)();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const encodeJsonModule = {encodeJson: v => encodeJson14({me_version: 1, contract: v.contract, metadata: v.metadata})};
const decodeJsonTimeout = {
  decodeJson: json => {
    const $0 = Data$dArgonaut$dDecode$dError.Named("Timeout");
    const $1 = Data$dArgonaut$dDecode$dError.Named("constructor TimeValue");
    const $2 = Marlowe$dTime.instantFromJson(json);
    const $3 = (() => {
      if ($2.tag === "Left") { return Data$dEither.$Either("Left", $1($2._1)); }
      if ($2.tag === "Right") { return Data$dEither.$Either("Right", $Timeout("TimeValue", $2._1)); }
      $runtime.fail();
    })();
    const $4 = Data$dArgonaut$dDecode$dError.Named("constructor TimeParam");
    const $5 = Data$dArgonaut$dCore._caseJson(
      v => $3,
      v => $3,
      v => $3,
      v => $3,
      v => $3,
      x => {
        const $5 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dArgonaut$dCore.caseJsonString(Data$dEither.$Either(
          "Left",
          Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")
        ))(Data$dEither.Right))(x)("time_param");
        if ($5.tag === "Left") { return Data$dEither.$Either("Left", $4($5._1)); }
        if ($5.tag === "Right") { return Data$dEither.$Either("Right", $Timeout("TimeParam", $5._1)); }
        $runtime.fail();
      },
      json
    );
    if ($5.tag === "Left") { return Data$dEither.$Either("Left", $0($5._1)); }
    if ($5.tag === "Right") { return Data$dEither.$Either("Right", $5._1); }
    $runtime.fail();
  }
};
const decodeJsonPayee = /* #__PURE__ */ (() => (
  {
    decodeJson: Data$dArgonaut$dExtra.object("Payee")(bindReaderT.bind(Data$dArgonaut$dExtra.getProp(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.decodeJsonParty)("account"))(account => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.decodeJsonParty)("party"))(party => applicativeReaderT.pure((() => {
      const $0 = account.tag === "Just" ? Data$dMaybe.$Maybe("Just", $Payee("Account", account._1)) : Data$dMaybe.Nothing;
      const $1 = party.tag === "Just" ? Data$dMaybe.$Maybe("Just", $Payee("Party", party._1)) : Data$dMaybe.Nothing;
      if ($0.tag === "Nothing") { return $1; }
      return $0;
    })()))))
  }
))();
const decodeJsonObservation = {
  decodeJson: json => caseConstantFrom1(fromFoldable([Data$dTuple.$Tuple(true, TrueObs), Data$dTuple.$Tuple(false, FalseObs)]))(Data$dArgonaut$dExtra.object("Observation")(bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonObservation)("both"))(both => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonObservation)("and"))(and => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonObservation)("either"))(either => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonObservation)("or"))(or => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonObservation)("not"))(not => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.decodeJsonChoiceId)("chose_something_for"))(choseSomethingFor => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue$lazy())("value"))(value => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue$lazy())("ge_than"))(gte => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue$lazy())("gt"))(gt => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue$lazy())("lt"))(lt => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue$lazy())("le_than"))(lte => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue$lazy())("equal_to"))(equalTo => applicativeReaderT.pure((() => {
    const $0 = Data$dMaybe.applyMaybe.apply(both.tag === "Just" ? Data$dMaybe.$Maybe("Just", AndObs(both._1)) : Data$dMaybe.Nothing)(and);
    const $1 = Data$dMaybe.applyMaybe.apply(either.tag === "Just" ? Data$dMaybe.$Maybe("Just", OrObs(either._1)) : Data$dMaybe.Nothing)(or);
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
  })())))))))))))))))(json)
};
const decodeJsonValue$lazy = /* #__PURE__ */ $runtime.binding(() => (
  {
    decodeJson: (() => {
      const decodeObject = Data$dArgonaut$dExtra.object("Value")(bindReaderT.bind(Data$dArgonaut$dExtra.getProp(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.decodeJsonParty)("in_account"))(inAccount => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.decodeJsonToken)("amount_of_token"))(amountOfToken => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(Data$dArgonaut$dDecode$dClass.decodeJsonString)("constant_param"))(constantParam => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue$lazy())("negate"))(negate => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue$lazy())("add"))(add => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue$lazy())("and"))(and => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue$lazy())("value"))(value => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue$lazy())("minus"))(minus => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue$lazy())("divide"))(divide => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue$lazy())("multiply"))(multiply => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue$lazy())("by"))(by => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue$lazy())("times"))(times => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.decodeJsonChoiceId)("value_of_choice"))(valueOfChoices => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(Data$dArgonaut$dDecode$dClass.decodeJsonString)("use_value"))(useValue => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonObservation)("if"))(if_ => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue$lazy())("then"))(then_ => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue$lazy())("else"))(else_ => applicativeReaderT.pure((() => {
        const $0 = Data$dMaybe.applyMaybe.apply(inAccount.tag === "Just" ? Data$dMaybe.$Maybe("Just", AvailableMoney(inAccount._1)) : Data$dMaybe.Nothing)(amountOfToken);
        const $1 = negate.tag === "Just" ? Data$dMaybe.$Maybe("Just", $Value("NegValue", negate._1)) : Data$dMaybe.Nothing;
        const $2 = (() => {
          const $2 = Data$dMaybe.applyMaybe.apply(add.tag === "Just" ? Data$dMaybe.$Maybe("Just", AddValue(add._1)) : Data$dMaybe.Nothing)(and);
          const $3 = (() => {
            const $3 = constantParam.tag === "Just" ? Data$dMaybe.$Maybe("Just", $Value("ConstantParam", constantParam._1)) : Data$dMaybe.Nothing;
            const $4 = (() => {
              const $4 = Data$dMaybe.applyMaybe.apply(value.tag === "Just" ? Data$dMaybe.$Maybe("Just", SubValue(value._1)) : Data$dMaybe.Nothing)(minus);
              const $5 = (() => {
                const $5 = Data$dMaybe.applyMaybe.apply(divide.tag === "Just" ? Data$dMaybe.$Maybe("Just", DivValue(divide._1)) : Data$dMaybe.Nothing)(by);
                const $6 = (() => {
                  const $6 = Data$dMaybe.applyMaybe.apply(multiply.tag === "Just" ? Data$dMaybe.$Maybe("Just", MulValue(multiply._1)) : Data$dMaybe.Nothing)(times);
                  const $7 = (() => {
                    const $7 = valueOfChoices.tag === "Just" ? Data$dMaybe.$Maybe("Just", $Value("ChoiceValue", valueOfChoices._1)) : Data$dMaybe.Nothing;
                    const $8 = (() => {
                      const $8 = useValue.tag === "Just" ? Data$dMaybe.$Maybe("Just", $Value("UseValue", useValue._1)) : Data$dMaybe.Nothing;
                      const $9 = (() => {
                        const $9 = Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(if_.tag === "Just" ? Data$dMaybe.$Maybe("Just", Cond(if_._1)) : Data$dMaybe.Nothing)(then_))(else_);
                        if ($8.tag === "Nothing") { return $9; }
                        return $8;
                      })();
                      if ($7.tag === "Nothing") { return $9; }
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
      })())))))))))))))))))));
      return caseConstantFrom(Data$dMap$dInternal.fromFoldable(Data$dOrd.ordString)(Data$dFoldable.foldableArray)([
        Data$dTuple.$Tuple("time_interval_start", TimeIntervalStart),
        Data$dTuple.$Tuple("time_interval_end", TimeIntervalEnd)
      ]))(json => {
        const $0 = Data$dBigInt$dArgonaut.decodeJsonBigInt.decodeJson(json);
        const $1 = (() => {
          if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
          if ($0.tag === "Right") { return Data$dEither.$Either("Right", $Value("Constant", $0._1)); }
          $runtime.fail();
        })();
        const $2 = decodeObject(json);
        if ($1.tag === "Left") { return $2; }
        return $1;
      });
    })()
  }
));
const decodeJsonValue = /* #__PURE__ */ decodeJsonValue$lazy();
const decodeJsonAction = /* #__PURE__ */ (() => (
  {
    decodeJson: Data$dArgonaut$dExtra.object("Action")(bindReaderT.bind(Data$dArgonaut$dExtra.getProp(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.decodeJsonParty)("into_account"))(intoAccount => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.decodeJsonParty)("party"))(party => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.decodeJsonToken)("of_token"))(ofToken => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue)("deposits"))(deposits => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.decodeJsonChoiceId)("for_choice"))(forChoice => bindReaderT.bind(getProp5("choose_between"))(chooseBetween => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonObservation)("notify_if"))(notifyIf => applicativeReaderT.pure((() => {
      const $0 = Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(intoAccount.tag === "Just"
        ? Data$dMaybe.$Maybe("Just", Deposit(intoAccount._1))
        : Data$dMaybe.Nothing)(party))(ofToken))(deposits);
      const $1 = Data$dMaybe.applyMaybe.apply(forChoice.tag === "Just" ? Data$dMaybe.$Maybe("Just", Choice(forChoice._1)) : Data$dMaybe.Nothing)(chooseBetween);
      const $2 = (() => {
        const $2 = notifyIf.tag === "Just" ? Data$dMaybe.$Maybe("Just", $Action("Notify", notifyIf._1)) : Data$dMaybe.Nothing;
        if ($1.tag === "Nothing") { return $2; }
        return $1;
      })();
      if ($0.tag === "Nothing") { return $2; }
      return $0;
    })())))))))))
  }
))();
const decodeJsonContract$lazy = /* #__PURE__ */ $runtime.binding(() => (
  {
    decodeJson: caseConstantFrom(Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, "close", Close, Data$dMap$dInternal.Leaf))(Data$dArgonaut$dExtra.object("Contract")(bindReaderT.bind(Data$dArgonaut$dExtra.getProp(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.decodeJsonParty)("from_account"))(fromAccount => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonPayee)("to"))(to => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.decodeJsonToken)("token"))(token => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue)("pay"))(pay => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonContract$lazy())("then"))(_then => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonObservation)("if"))(_if => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonContract$lazy())("else"))(_else => bindReaderT.bind(Data$dArgonaut$dExtra.getProp({
      decodeJson: Data$dArgonaut$dDecode$dDecoders.decodeArray(decodeJsonCase$lazy().decodeJson)
    })("when"))(when1 => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonTimeout)("timeout"))(timeout => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonContract$lazy())("timeout_continuation"))(timeoutContinuation => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(Data$dArgonaut$dDecode$dClass.decodeJsonString)("let"))(_let => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonValue)("be"))(be => bindReaderT.bind(Data$dArgonaut$dExtra.getProp(decodeJsonObservation)("assert"))(assert => applicativeReaderT.pure((() => {
      const $0 = Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(fromAccount.tag === "Just"
        ? Data$dMaybe.$Maybe("Just", Pay(fromAccount._1))
        : Data$dMaybe.Nothing)(to))(token))(pay))(_then);
      const $1 = Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(_if.tag === "Just" ? Data$dMaybe.$Maybe("Just", If(_if._1)) : Data$dMaybe.Nothing)(_then))(_else);
      const $2 = (() => {
        const $2 = Data$dMaybe.applyMaybe.apply(Data$dMaybe.applyMaybe.apply(when1.tag === "Just" ? Data$dMaybe.$Maybe("Just", When(when1._1)) : Data$dMaybe.Nothing)(timeout))(timeoutContinuation);
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
    })()))))))))))))))))
  }
));
const decodeJsonCase$lazy = /* #__PURE__ */ $runtime.binding(() => (
  {
    decodeJson: Data$dArgonaut$dExtra.object("Case")(x => {
      const $0 = Data$dArgonaut$dDecode$dDecoders.getField(decodeJsonAction.decodeJson)(x)("case");
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") {
        const $1 = Data$dArgonaut$dDecode$dDecoders.getField(decodeJsonContract$lazy().decodeJson)(x)("then");
        if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
        if ($1.tag === "Right") { return Data$dEither.$Either("Right", Data$dMaybe.$Maybe("Just", $Case($0._1, $1._1))); }
      }
      $runtime.fail();
    })
  }
));
const decodeJsonContract = /* #__PURE__ */ decodeJsonContract$lazy();
const decodeJsonCase = /* #__PURE__ */ decodeJsonCase$lazy();
const decodeJsonModule = /* #__PURE__ */ (() => (
  {
    decodeJson: Data$dArgonaut$dExtra.object("Module")(bindReaderT.bind(Data$dArgonaut$dExtra.requireProp(Data$dArgonaut$dDecode$dClass.decodeJsonInt)("me_version"))(version => bindReaderT.bind((() => {
      const $0 = throwError(Data$dArgonaut$dDecode$dError.$JsonDecodeError("AtKey", "me_version", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "1")));
      if (version !== 1) { return $0; }
      return applicativeReaderT.pure();
    })())(() => bindReaderT.bind(Data$dArgonaut$dExtra.requireProp(decodeJsonContract)("contract"))(contract => bindReaderT.bind(requireProp1("metadata"))(metadata => applicativeReaderT.pure(Data$dMaybe.$Maybe(
      "Just",
      {metadata, contract}
    )))))))
  }
))();
const arrayHasChoices = dictHasChoices => ({getChoiceNames: foldMap2(dictHasChoices.getChoiceNames)});
const actionHasChoices = {
  getChoiceNames: v => {
    if (v.tag === "Deposit") { return valueHasChoices.getChoiceNames(v._4); }
    if (v.tag === "Choice") { return Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, v._1._1, undefined, Data$dMap$dInternal.Leaf); }
    if (v.tag === "Notify") { return observationHasChoices.getChoiceNames(v._1); }
    $runtime.fail();
  }
};
const contractHasChoices = {
  getChoiceNames: v => {
    if (v.tag === "Close") { return Data$dMap$dInternal.Leaf; }
    if (v.tag === "Pay") {
      return Data$dMap$dInternal.unionWith(Data$dOrd.ordString)(Data$dFunction.const)(valueHasChoices.getChoiceNames(v._4))(contractHasChoices.getChoiceNames(v._5));
    }
    if (v.tag === "If") {
      return Data$dMap$dInternal.unionWith(Data$dOrd.ordString)(Data$dFunction.const)(observationHasChoices.getChoiceNames(v._1))(Data$dMap$dInternal.unionWith(Data$dOrd.ordString)(Data$dFunction.const)(contractHasChoices.getChoiceNames(v._2))(contractHasChoices.getChoiceNames(v._3)));
    }
    if (v.tag === "When") {
      return Data$dMap$dInternal.unionWith(Data$dOrd.ordString)(Data$dFunction.const)(foldMap2(caseHasChoices.getChoiceNames)(v._1))(contractHasChoices.getChoiceNames(v._3));
    }
    if (v.tag === "Let") {
      return Data$dMap$dInternal.unionWith(Data$dOrd.ordString)(Data$dFunction.const)(valueHasChoices.getChoiceNames(v._2))(contractHasChoices.getChoiceNames(v._3));
    }
    if (v.tag === "Assert") {
      return Data$dMap$dInternal.unionWith(Data$dOrd.ordString)(Data$dFunction.const)(observationHasChoices.getChoiceNames(v._1))(contractHasChoices.getChoiceNames(v._2));
    }
    $runtime.fail();
  }
};
const caseHasChoices = {
  getChoiceNames: v => Data$dMap$dInternal.unionWith(Data$dOrd.ordString)(Data$dFunction.const)(actionHasChoices.getChoiceNames(v._1))(contractHasChoices.getChoiceNames(v._2))
};
const _metadata = dictStrong => {
  const $0 = Data$dLens$dIso$dNewtype._Newtype()()(dictStrong.Profunctor0());
  return x => $0(Data$dLens$dRecord.prop(metadataIsSymbol)()()(Type$dProxy.Proxy)(dictStrong)(x));
};
const _contract = dictStrong => {
  const $0 = Data$dLens$dIso$dNewtype._Newtype()()(dictStrong.Profunctor0());
  return x => $0(Data$dLens$dRecord.prop(contractIsSymbol)()()(Type$dProxy.Proxy)(dictStrong)(x));
};
export {
  $Action,
  $Case,
  $Contract,
  $Observation,
  $Payee,
  $Timeout,
  $Value,
  Account,
  AddValue,
  AddValueIsSymbol,
  AndObs,
  AndObsIsSymbol,
  Assert,
  AssertIsSymbol,
  AvailableMoney,
  Case,
  Choice,
  ChoiceValue,
  ChoseSomething,
  Close,
  Cond,
  CondIsSymbol,
  Constant,
  ConstantParam,
  Deposit,
  DivValue,
  DivValueIsSymbol,
  FalseObs,
  If,
  IfIsSymbol,
  Let,
  LetIsSymbol,
  Module,
  MulValue,
  MulValueIsSymbol,
  NegValue,
  NegValueIsSymbol,
  NotObs,
  NotObsIsSymbol,
  Notify,
  OrObs,
  OrObsIsSymbol,
  Party,
  Pay,
  PayIsSymbol,
  SubValue,
  SubValueIsSymbol,
  TimeIntervalEnd,
  TimeIntervalStart,
  TimeParam,
  TimeValue,
  TrueObs,
  UseValue,
  ValueEQ,
  ValueEQIsSymbol,
  ValueGE,
  ValueGEIsSymbol,
  ValueGT,
  ValueGTIsSymbol,
  ValueLE,
  ValueLEIsSymbol,
  ValueLT,
  ValueLTIsSymbol,
  When,
  WhenIsSymbol,
  _contract,
  _metadata,
  actionHasChoices,
  addIsSymbol,
  andIsSymbol,
  applicativeReaderT,
  arrayHasChoices,
  assertIsSymbol,
  beIsSymbol,
  bindReaderT,
  bothIsSymbol,
  byIsSymbol,
  caseConstantFrom,
  caseConstantFrom1,
  caseHasChoices,
  caseIsSymbol,
  choiceDescriptionIsSymbol,
  choiceFormatIsSymbol,
  choiceInfoIsSymbol,
  compare7,
  contractHasChoices,
  contractIsSymbol,
  contractLongDescriptionIsSymbol,
  contractNameIsSymbol,
  contractShortDescriptionIsSymbol,
  contractTypeIsSymbol,
  decodeJsonAction,
  decodeJsonCase,
  decodeJsonContract,
  decodeJsonModule,
  decodeJsonObservation,
  decodeJsonPayee,
  decodeJsonTimeout,
  decodeJsonValue,
  decodeMap,
  decodeSession,
  divideIsSymbol,
  eitherIsSymbol,
  elseIsSymbol,
  encodeJson,
  encodeJson1,
  encodeJson11,
  encodeJson12,
  encodeJson13,
  encodeJson14,
  encodeJson3,
  encodeJson5,
  encodeJson6,
  encodeJson8,
  encodeJson9,
  encodeJsonAction,
  encodeJsonCase,
  encodeJsonContract,
  encodeJsonModule,
  encodeJsonObservation,
  encodeJsonPayee,
  encodeJsonTimeout,
  encodeJsonValue,
  eq7,
  eqAction,
  eqCase,
  eqContract,
  eqModule,
  eqObservation,
  eqPayee,
  eqTimeout,
  eqValue,
  equal_toIsSymbol,
  fillableAction,
  fillableCase,
  fillableContract,
  fillableObservation,
  fillableTimeout,
  fillableValue,
  foldMap1,
  foldMap2,
  fromFoldable,
  from_accountIsSymbol,
  gDecodeJsonCons,
  gDecodeJsonCons1,
  gEncodeJsonCons10,
  gEncodeJsonCons4,
  ge_thanIsSymbol,
  genericAction,
  genericCase,
  genericContract,
  genericObservation,
  genericPayee,
  genericShow1,
  genericShow2,
  genericShow5,
  genericShowArgsArgument,
  genericShowArgsArgument1,
  genericShowArgsArgument2,
  genericShowArgsArgument3,
  genericShowArgsArgument4,
  genericShowArgsArgument5,
  genericShowSum,
  genericShowSum1,
  genericShowSum2,
  genericShowSum3,
  genericShowSum4,
  genericShowSum5,
  genericShowSum6,
  genericShowSum7,
  genericShowSum8,
  genericShowSum9,
  genericTimeout,
  genericValue,
  getChoiceNames,
  getProp5,
  gtIsSymbol,
  ifIsSymbol,
  le_thanIsSymbol,
  letIsSymbol,
  ltIsSymbol,
  metadataIsSymbol,
  minusIsSymbol,
  multiplyIsSymbol,
  negateIsSymbol,
  newtypeModule_,
  notIsSymbol,
  observationHasChoices,
  orIsSymbol,
  ordAction,
  ordCase,
  ordContract,
  ordObservation,
  ordPayee,
  ordTimeout,
  ordValue,
  payIsSymbol,
  requireProp1,
  roleDescriptionsIsSymbol,
  sChoiceIdHasChoices,
  showAction,
  showArray,
  showCase,
  showContract,
  showModule,
  showObservation,
  showPayee,
  showTimeout,
  showValue,
  templateAction,
  templateCase,
  templateContract,
  templateObservation,
  templateTimeout,
  templateValue,
  thenIsSymbol,
  throwError,
  timeParameterDescriptionsIsSymbol,
  timeoutIsSymbol,
  timeout_continuationIsSymbol,
  timesIsSymbol,
  toCore,
  toCoreAction,
  toCoreCase,
  toCoreContract,
  toCoreObservation,
  toCorePayee,
  toCoreTimeout,
  toCoreValue,
  traverse,
  valueHasChoices,
  valueIsSymbol,
  valueParameterDescriptionIsSymbol,
  valueParameterFormatIsSymbol,
  valueParameterInfoIsSymbol,
  whenIsSymbol
};
