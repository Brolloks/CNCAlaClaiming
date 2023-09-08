import * as $runtime from "../runtime.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dArgonaut$dDecode$dAeson from "../Data.Argonaut.Decode.Aeson/index.js";
import * as Data$dArgonaut$dDecode$dDecoders from "../Data.Argonaut.Decode.Decoders/index.js";
import * as Data$dArgonaut$dDecode$dError from "../Data.Argonaut.Decode.Error/index.js";
import * as Data$dArgonaut$dEncode$dAeson from "../Data.Argonaut.Encode.Aeson/index.js";
import * as Data$dArgonaut$dEncode$dEncoders from "../Data.Argonaut.Encode.Encoders/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dEnum$dGeneric from "../Data.Enum.Generic/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
const $ContractType = tag => tag;
const $NumberFormat = (tag, _1, _2) => ({tag, _1, _2});
const $NumberFormatType = tag => tag;
const genericEnumConstructor = /* #__PURE__ */ Data$dEnum$dGeneric.genericEnumConstructor(Data$dEnum$dGeneric.genericEnumNoArguments);
const genericTopConstructor = {"genericTop'": Data$dGeneric$dRep.NoArguments};
const genericEnumSum = /* #__PURE__ */ Data$dEnum$dGeneric.genericEnumSum(genericEnumConstructor)(genericTopConstructor);
const genericBottomConstructor = {"genericBottom'": Data$dGeneric$dRep.NoArguments};
const genericBottomSum = {"genericBottom'": /* #__PURE__ */ Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)};
const genericEnumSum1 = /* #__PURE__ */ genericEnumSum(/* #__PURE__ */ genericEnumSum(/* #__PURE__ */ genericEnumSum(/* #__PURE__ */ genericEnumSum(/* #__PURE__ */ genericEnumSum(/* #__PURE__ */ genericEnumSum(genericEnumConstructor)(genericBottomConstructor))(genericBottomSum))(genericBottomSum))(genericBottomSum))(genericBottomSum))(genericBottomSum);
const DefaultFormatType = /* #__PURE__ */ $NumberFormatType("DefaultFormatType");
const DecimalFormatType = /* #__PURE__ */ $NumberFormatType("DecimalFormatType");
const TimeFormatType = /* #__PURE__ */ $NumberFormatType("TimeFormatType");
const DefaultFormat = /* #__PURE__ */ $NumberFormat("DefaultFormat");
const DecimalFormat = value0 => value1 => $NumberFormat("DecimalFormat", value0, value1);
const TimeFormat = /* #__PURE__ */ $NumberFormat("TimeFormat");
const Escrow = /* #__PURE__ */ $ContractType("Escrow");
const EscrowWithCollateral = /* #__PURE__ */ $ContractType("EscrowWithCollateral");
const ZeroCouponBond = /* #__PURE__ */ $ContractType("ZeroCouponBond");
const CouponBondGuaranteed = /* #__PURE__ */ $ContractType("CouponBondGuaranteed");
const Swap = /* #__PURE__ */ $ContractType("Swap");
const ContractForDifferences = /* #__PURE__ */ $ContractType("ContractForDifferences");
const Other = /* #__PURE__ */ $ContractType("Other");
const genericNumberFormat = {
  to: x => {
    if (x.tag === "Inl") { return DefaultFormat; }
    if (x.tag === "Inr") {
      if (x._1.tag === "Inl") { return $NumberFormat("DecimalFormat", x._1._1._1, x._1._1._2); }
      if (x._1.tag === "Inr") { return TimeFormat; }
    }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "DefaultFormat") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments); }
    if (x.tag === "DecimalFormat") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, x._2))); }
    if (x.tag === "TimeFormat") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments)); }
    $runtime.fail();
  }
};
const showNumberFormat = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "DefaultFormat"});
    const $1 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct({genericShowArgs: v => [Data$dShow.showIntImpl(v)]})({
      genericShowArgs: v => [Data$dShow.showStringImpl(v)]
    }))({reflectSymbol: () => "DecimalFormat"});
    const $2 = (() => {
      const $2 = (() => {
        const $2 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "TimeFormat"});
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
    return x => $2["genericShow'"](genericNumberFormat.from(x));
  })()
};
const genericContractType = {
  to: x => {
    if (x.tag === "Inl") { return Escrow; }
    if (x.tag === "Inr") {
      if (x._1.tag === "Inl") { return EscrowWithCollateral; }
      if (x._1.tag === "Inr") {
        if (x._1._1.tag === "Inl") { return ZeroCouponBond; }
        if (x._1._1.tag === "Inr") {
          if (x._1._1._1.tag === "Inl") { return CouponBondGuaranteed; }
          if (x._1._1._1.tag === "Inr") {
            if (x._1._1._1._1.tag === "Inl") { return Swap; }
            if (x._1._1._1._1.tag === "Inr") {
              if (x._1._1._1._1._1.tag === "Inl") { return ContractForDifferences; }
              if (x._1._1._1._1._1.tag === "Inr") { return Other; }
            }
          }
        }
      }
    }
    $runtime.fail();
  },
  from: x => {
    if (x === "Escrow") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments); }
    if (x === "EscrowWithCollateral") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)); }
    if (x === "ZeroCouponBond") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments))); }
    if (x === "CouponBondGuaranteed") {
      return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments))));
    }
    if (x === "Swap") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments))))
      );
    }
    if (x === "ContractForDifferences") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments))))
        )
      );
    }
    if (x === "Other") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments))))
        )
      );
    }
    $runtime.fail();
  }
};
const genericShow = /* #__PURE__ */ (() => {
  const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "Escrow"});
  const $1 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "EscrowWithCollateral"});
  const $2 = (() => {
    const $2 = (() => {
      const $2 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "ZeroCouponBond"});
      const $3 = (() => {
        const $3 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "CouponBondGuaranteed"});
        const $4 = (() => {
          const $4 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "Swap"});
          const $5 = (() => {
            const $5 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "ContractForDifferences"});
            const $6 = (() => {
              const $6 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "Other"});
              return {
                "genericShow'": v => {
                  if (v.tag === "Inl") { return $5["genericShow'"](v._1); }
                  if (v.tag === "Inr") { return $6["genericShow'"](v._1); }
                  $runtime.fail();
                }
              };
            })();
            return {
              "genericShow'": v => {
                if (v.tag === "Inl") { return $4["genericShow'"](v._1); }
                if (v.tag === "Inr") { return $6["genericShow'"](v._1); }
                $runtime.fail();
              }
            };
          })();
          return {
            "genericShow'": v => {
              if (v.tag === "Inl") { return $3["genericShow'"](v._1); }
              if (v.tag === "Inr") { return $5["genericShow'"](v._1); }
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
  return x => $2["genericShow'"](genericContractType.from(x));
})();
const showContractType = {show: v => genericShow(v)};
const eqNumberFormatType = {
  eq: x => y => {
    if (x === "DefaultFormatType") { return y === "DefaultFormatType"; }
    if (x === "DecimalFormatType") { return y === "DecimalFormatType"; }
    return x === "TimeFormatType" && y === "TimeFormatType";
  }
};
const eqNumberFormat = {
  eq: x => y => {
    if (x.tag === "DefaultFormat") { return y.tag === "DefaultFormat"; }
    if (x.tag === "DecimalFormat") { return y.tag === "DecimalFormat" && x._1 === y._1 && x._2 === y._2; }
    return x.tag === "TimeFormat" && y.tag === "TimeFormat";
  }
};
const eqContractType = {
  eq: x => y => {
    if (x === "Escrow") { return y === "Escrow"; }
    if (x === "EscrowWithCollateral") { return y === "EscrowWithCollateral"; }
    if (x === "ZeroCouponBond") { return y === "ZeroCouponBond"; }
    if (x === "CouponBondGuaranteed") { return y === "CouponBondGuaranteed"; }
    if (x === "Swap") { return y === "Swap"; }
    if (x === "ContractForDifferences") { return y === "ContractForDifferences"; }
    return x === "Other" && y === "Other";
  }
};
const ordContractType = {
  compare: x => y => {
    if (x === "Escrow") {
      if (y === "Escrow") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "Escrow") { return Data$dOrdering.GT; }
    if (x === "EscrowWithCollateral") {
      if (y === "EscrowWithCollateral") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "EscrowWithCollateral") { return Data$dOrdering.GT; }
    if (x === "ZeroCouponBond") {
      if (y === "ZeroCouponBond") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "ZeroCouponBond") { return Data$dOrdering.GT; }
    if (x === "CouponBondGuaranteed") {
      if (y === "CouponBondGuaranteed") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "CouponBondGuaranteed") { return Data$dOrdering.GT; }
    if (x === "Swap") {
      if (y === "Swap") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "Swap") { return Data$dOrdering.GT; }
    if (x === "ContractForDifferences") {
      if (y === "ContractForDifferences") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "ContractForDifferences") { return Data$dOrdering.GT; }
    if (x === "Other" && y === "Other") { return Data$dOrdering.EQ; }
    $runtime.fail();
  },
  Eq0: () => eqContractType
};
const enumContractType = {
  succ: /* #__PURE__ */ Data$dEnum$dGeneric.genericSucc(genericContractType)(genericEnumSum1),
  pred: /* #__PURE__ */ Data$dEnum$dGeneric.genericPred(genericContractType)(genericEnumSum1),
  Ord0: () => ordContractType
};
const encodeJsonNumberFormat = {
  encodeJson: v => {
    if (v.tag === "DefaultFormat") { return Data$dArgonaut$dEncode$dAeson.encodeTagged("DefaultFormat")()(Data$dArgonaut$dEncode$dAeson.null); }
    if (v.tag === "DecimalFormat") {
      return Data$dArgonaut$dEncode$dAeson.encodeTagged("DecimalFormat")(Data$dTuple.$Tuple(v._1, v._2))(Data$dArgonaut$dEncode$dEncoders.encodeTuple(Data$dArgonaut$dEncode$dEncoders.encodeInt)(Data$dArgonaut$dCore.fromString));
    }
    if (v.tag === "TimeFormat") { return Data$dArgonaut$dEncode$dAeson.encodeTagged("TimeFormat")()(Data$dArgonaut$dEncode$dAeson.null); }
    $runtime.fail();
  }
};
const encodeJsonContractType = {encodeJson: /* #__PURE__ */ Data$dArgonaut$dEncode$dAeson.enum(showContractType)};
const decodeJsonNumberFormat = {
  decodeJson: /* #__PURE__ */ Data$dArgonaut$dDecode$dAeson.sumType("NumberFormat")(/* #__PURE__ */ Data$dMap$dInternal.fromFoldable(Data$dOrd.ordString)(Data$dFoldable.foldableArray)([
    /* #__PURE__ */ Data$dTuple.$Tuple(
      "DefaultFormat",
      /* #__PURE__ */ Data$dArgonaut$dDecode$dAeson.content(x => {
        const $0 = Data$dArgonaut$dCore._caseJson(
          v => Data$dEither.$Either("Right", undefined),
          v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "null")),
          v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "null")),
          v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "null")),
          v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "null")),
          v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "null")),
          x
        );
        if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
        if ($0.tag === "Right") { return Data$dEither.$Either("Right", DefaultFormat); }
        $runtime.fail();
      })
    ),
    /* #__PURE__ */ Data$dTuple.$Tuple(
      "DecimalFormat",
      /* #__PURE__ */ Data$dArgonaut$dDecode$dAeson.content(x => {
        const $0 = Data$dArgonaut$dDecode$dDecoders.decodeTuple(Data$dArgonaut$dDecode$dDecoders.decodeInt)(Data$dArgonaut$dCore.caseJsonString(Data$dEither.$Either(
          "Left",
          Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")
        ))(Data$dEither.Right))(x);
        if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
        if ($0.tag === "Right") { return Data$dEither.$Either("Right", $NumberFormat("DecimalFormat", $0._1._1, $0._1._2)); }
        $runtime.fail();
      })
    ),
    /* #__PURE__ */ Data$dTuple.$Tuple(
      "TimeFormat",
      /* #__PURE__ */ Data$dArgonaut$dDecode$dAeson.content(x => {
        const $0 = Data$dArgonaut$dCore._caseJson(
          v => Data$dEither.$Either("Right", undefined),
          v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "null")),
          v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "null")),
          v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "null")),
          v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "null")),
          v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "null")),
          x
        );
        if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
        if ($0.tag === "Right") { return Data$dEither.$Either("Right", TimeFormat); }
        $runtime.fail();
      })
    )
  ]))
};
const boundedContractType = /* #__PURE__ */ (() => (
  {
    bottom: genericContractType.to(Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)),
    top: genericContractType.to(Data$dGeneric$dRep.$Sum(
      "Inr",
      Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments))))
      )
    )),
    Ord0: () => ordContractType
  }
))();
const decodeJsonContractType = {decodeJson: /* #__PURE__ */ Data$dArgonaut$dDecode$dAeson.enum(enumContractType)(boundedContractType)(showContractType)};
export {
  $ContractType,
  $NumberFormat,
  $NumberFormatType,
  ContractForDifferences,
  CouponBondGuaranteed,
  DecimalFormat,
  DecimalFormatType,
  DefaultFormat,
  DefaultFormatType,
  Escrow,
  EscrowWithCollateral,
  Other,
  Swap,
  TimeFormat,
  TimeFormatType,
  ZeroCouponBond,
  boundedContractType,
  decodeJsonContractType,
  decodeJsonNumberFormat,
  encodeJsonContractType,
  encodeJsonNumberFormat,
  enumContractType,
  eqContractType,
  eqNumberFormat,
  eqNumberFormatType,
  genericBottomConstructor,
  genericBottomSum,
  genericContractType,
  genericEnumConstructor,
  genericEnumSum,
  genericEnumSum1,
  genericNumberFormat,
  genericShow,
  genericTopConstructor,
  ordContractType,
  showContractType,
  showNumberFormat
};
