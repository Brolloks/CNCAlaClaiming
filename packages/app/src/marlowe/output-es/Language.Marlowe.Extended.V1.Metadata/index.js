import * as $runtime from "../runtime.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMap$dOrdered$dOMap from "../Data.Map.Ordered.OMap/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dSet from "../Data.Set/index.js";
import * as Data$dSet$dOrdered$dOSet from "../Data.Set.Ordered.OSet/index.js";
import * as Language$dMarlowe$dExtended$dV1 from "../Language.Marlowe.Extended.V1/index.js";
import * as Language$dMarlowe$dExtended$dV1$dMetadata$dTypes from "../Language.Marlowe.Extended.V1.Metadata.Types/index.js";
import * as Marlowe$dHasParties from "../Marlowe.HasParties/index.js";
const fromFoldable = /* #__PURE__ */ Data$dSet$dOrdered$dOSet.fromFoldable(Data$dOrd.ordString)(Data$dSet.foldableSet);
const keys = /* #__PURE__ */ Data$dMap$dOrdered$dOMap.keys(Data$dOrd.ordString);
const alter = /* #__PURE__ */ Data$dMap$dOrdered$dOMap.alter(Data$dOrd.ordString);
const toString = v => {
  if (v === "DefaultFormatType") { return "DefaultFormatType"; }
  if (v === "DecimalFormatType") { return "DecimalFormatType"; }
  if (v === "TimeFormatType") { return "TimeFormatType"; }
  $runtime.fail();
};
const oracleRatioFormat = str => Language$dMarlowe$dExtended$dV1$dMetadata$dTypes.$NumberFormat("DecimalFormat", 8, str);
const lovelaceFormat = /* #__PURE__ */ Language$dMarlowe$dExtended$dV1$dMetadata$dTypes.$NumberFormat("DecimalFormat", 6, "₳");
const isDefaultFormat = v => v.tag === "DefaultFormat";
const isDecimalFormat = v => v.tag === "DecimalFormat";
const integerFormat = /* #__PURE__ */ Language$dMarlowe$dExtended$dV1$dMetadata$dTypes.$NumberFormat("DecimalFormat", 0, "");
const initialsToContractType = v => {
  if (v === "ES") { return Language$dMarlowe$dExtended$dV1$dMetadata$dTypes.Escrow; }
  if (v === "EC") { return Language$dMarlowe$dExtended$dV1$dMetadata$dTypes.EscrowWithCollateral; }
  if (v === "ZC") { return Language$dMarlowe$dExtended$dV1$dMetadata$dTypes.ZeroCouponBond; }
  if (v === "CB") { return Language$dMarlowe$dExtended$dV1$dMetadata$dTypes.CouponBondGuaranteed; }
  if (v === "S") { return Language$dMarlowe$dExtended$dV1$dMetadata$dTypes.Swap; }
  if (v === "CD") { return Language$dMarlowe$dExtended$dV1$dMetadata$dTypes.ContractForDifferences; }
  return Language$dMarlowe$dExtended$dV1$dMetadata$dTypes.Other;
};
const getMetadataHintInfo = contract => {
  const $0 = Language$dMarlowe$dExtended$dV1.templateContract.getPlaceholderIds(contract);
  return {
    roles: Data$dSet.mapMaybe(Data$dOrd.ordString)(v1 => {
      if (v1.tag === "Role") { return Data$dMaybe.$Maybe("Just", v1._1); }
      return Data$dMaybe.Nothing;
    })(Marlowe$dHasParties.extendedContractHasParties.getParties(contract)),
    timeParameters: fromFoldable($0.timeoutPlaceholderIds),
    valueParameters: fromFoldable($0.valuePlaceholderIds),
    choiceNames: Language$dMarlowe$dExtended$dV1.contractHasChoices.getChoiceNames(contract)
  };
};
const getHintsFromMetadata = v => (
  {
    roles: Data$dMap$dInternal.functorMap.map(v$1 => {})(v.roleDescriptions),
    timeParameters: keys(v.timeParameterDescriptions),
    valueParameters: keys(v.valueParameterInfo),
    choiceNames: Data$dMap$dInternal.functorMap.map(v$1 => {})(v.choiceInfo)
  }
);
const getFormatType = v => {
  if (v.tag === "DefaultFormat") { return Language$dMarlowe$dExtended$dV1$dMetadata$dTypes.DefaultFormatType; }
  if (v.tag === "DecimalFormat") { return Language$dMarlowe$dExtended$dV1$dMetadata$dTypes.DecimalFormatType; }
  if (v.tag === "TimeFormat") { return Language$dMarlowe$dExtended$dV1$dMetadata$dTypes.TimeFormatType; }
  $runtime.fail();
};
const getChoiceFormat = v => choiceName => {
  const $0 = Data$dMap$dInternal.lookup(Data$dOrd.ordString)(choiceName)(v.choiceInfo);
  if ($0.tag === "Nothing") { return Language$dMarlowe$dExtended$dV1$dMetadata$dTypes.DefaultFormat; }
  if ($0.tag === "Just") { return $0._1.choiceFormat; }
  $runtime.fail();
};
const fromString = v => {
  if (v === "DefaultFormatType") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dExtended$dV1$dMetadata$dTypes.DefaultFormatType); }
  if (v === "DecimalFormatType") { return Data$dMaybe.$Maybe("Just", Language$dMarlowe$dExtended$dV1$dMetadata$dTypes.DecimalFormatType); }
  return Data$dMaybe.Nothing;
};
const emptyValueParameterInfo = {valueParameterFormat: Language$dMarlowe$dExtended$dV1$dMetadata$dTypes.DefaultFormat, valueParameterDescription: ""};
const getValueParameterInfo = str => x => {
  const $0 = Data$dMap$dOrdered$dOMap.lookup(Data$dOrd.ordString)(str)(x);
  if ($0.tag === "Nothing") { return emptyValueParameterInfo; }
  if ($0.tag === "Just") { return $0._1; }
  $runtime.fail();
};
const updateValueParameterInfo = f => alter(mValueParameterInfo => Data$dMaybe.$Maybe(
  "Just",
  f((() => {
    if (mValueParameterInfo.tag === "Nothing") { return emptyValueParameterInfo; }
    if (mValueParameterInfo.tag === "Just") { return mValueParameterInfo._1; }
    $runtime.fail();
  })())
));
const emptyContractMetadata = {
  contractType: Language$dMarlowe$dExtended$dV1$dMetadata$dTypes.Other,
  contractName: "Unknown",
  contractShortDescription: "Unknown",
  contractLongDescription: "We couldn't find information about this contract",
  roleDescriptions: Data$dMap$dInternal.Leaf,
  timeParameterDescriptions: [],
  valueParameterInfo: [],
  choiceInfo: Data$dMap$dInternal.Leaf
};
const emptyChoiceInfo = {choiceFormat: Language$dMarlowe$dExtended$dV1$dMetadata$dTypes.DefaultFormat, choiceDescription: ""};
const getChoiceInfo = str => {
  const $0 = Data$dMap$dInternal.lookup(Data$dOrd.ordString)(str);
  return x => {
    const $1 = $0(x);
    if ($1.tag === "Nothing") { return emptyChoiceInfo; }
    if ($1.tag === "Just") { return $1._1; }
    $runtime.fail();
  };
};
const updateChoiceInfo = f => Data$dMap$dInternal.alter(Data$dOrd.ordString)(mChoiceInfo => Data$dMaybe.$Maybe(
  "Just",
  f((() => {
    if (mChoiceInfo.tag === "Nothing") { return emptyChoiceInfo; }
    if (mChoiceInfo.tag === "Just") { return mChoiceInfo._1; }
    $runtime.fail();
  })())
));
const defaultForFormatType = v => {
  if (v === "DefaultFormatType") { return Language$dMarlowe$dExtended$dV1$dMetadata$dTypes.DefaultFormat; }
  if (v === "DecimalFormatType") { return Language$dMarlowe$dExtended$dV1$dMetadata$dTypes.$NumberFormat("DecimalFormat", 0, ""); }
  if (v === "TimeFormatType") { return Language$dMarlowe$dExtended$dV1$dMetadata$dTypes.TimeFormat; }
  $runtime.fail();
};
const contractTypeName = v => {
  if (v === "Escrow") { return "Escrow"; }
  if (v === "EscrowWithCollateral") { return "Escrow with Collateral"; }
  if (v === "ZeroCouponBond") { return "Zero Coupon Bond"; }
  if (v === "CouponBondGuaranteed") { return "Coupon Bond Guaranteed"; }
  if (v === "Swap") { return "Swap"; }
  if (v === "ContractForDifferences") { return "Contract for Differences"; }
  if (v === "Other") { return "Other"; }
  $runtime.fail();
};
const contractTypeInitials = v => {
  if (v === "Escrow") { return "ES"; }
  if (v === "EscrowWithCollateral") { return "EC"; }
  if (v === "ZeroCouponBond") { return "ZC"; }
  if (v === "CouponBondGuaranteed") { return "CB"; }
  if (v === "Swap") { return "S"; }
  if (v === "ContractForDifferences") { return "CD"; }
  if (v === "Other") { return "O"; }
  $runtime.fail();
};
const contractTypeArray = [
  Language$dMarlowe$dExtended$dV1$dMetadata$dTypes.Escrow,
  Language$dMarlowe$dExtended$dV1$dMetadata$dTypes.EscrowWithCollateral,
  Language$dMarlowe$dExtended$dV1$dMetadata$dTypes.ZeroCouponBond,
  Language$dMarlowe$dExtended$dV1$dMetadata$dTypes.CouponBondGuaranteed,
  Language$dMarlowe$dExtended$dV1$dMetadata$dTypes.Swap,
  Language$dMarlowe$dExtended$dV1$dMetadata$dTypes.ContractForDifferences,
  Language$dMarlowe$dExtended$dV1$dMetadata$dTypes.Other
];
export {
  alter,
  contractTypeArray,
  contractTypeInitials,
  contractTypeName,
  defaultForFormatType,
  emptyChoiceInfo,
  emptyContractMetadata,
  emptyValueParameterInfo,
  fromFoldable,
  fromString,
  getChoiceFormat,
  getChoiceInfo,
  getFormatType,
  getHintsFromMetadata,
  getMetadataHintInfo,
  getValueParameterInfo,
  initialsToContractType,
  integerFormat,
  isDecimalFormat,
  isDefaultFormat,
  keys,
  lovelaceFormat,
  oracleRatioFormat,
  toString,
  updateChoiceInfo,
  updateValueParameterInfo
};
