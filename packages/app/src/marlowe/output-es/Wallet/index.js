import * as $runtime from "../runtime.js";
import * as CardanoMultiplatformLib from "../CardanoMultiplatformLib/index.js";
import * as Control$dMonad$dExcept$dTrans from "../Control.Monad.Except.Trans/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNonEmpty from "../Data.NonEmpty/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Data$dUndefined$dNoProblem from "../Data.Undefined.NoProblem/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Effect$dUncurried from "../Effect.Uncurried/index.js";
import * as Foreign from "../Foreign/index.js";
import * as Foreign$dGeneric$dInternal from "../Foreign.Generic.Internal/index.js";
import * as Foreign$dIndex from "../Foreign.Index/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
import * as Heterogeneous$dFolding from "../Heterogeneous.Folding/index.js";
import * as HexString from "../HexString/index.js";
import * as JS$dObject from "../JS.Object/index.js";
import * as JS$dObject$dGeneric from "../JS.Object.Generic/index.js";
import * as Promise$dAff from "../Promise.Aff/index.js";
import * as Promise$dInternal from "../Promise.Internal/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const bind1 = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.bindExceptT(Data$dIdentity.monadIdentity).bind)();
const pure = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.applicativeExceptT(Data$dIdentity.monadIdentity).pure)();
const readProp = /* #__PURE__ */ Foreign$dIndex.unsafeReadProp(Effect.monadEffect);
const show1 = /* #__PURE__ */ (() => Data$dList$dTypes.showNonEmptyList(Foreign.showForeignError).show)();
const apiVersionIsSymbol = {reflectSymbol: () => "apiVersion"};
const enableIsSymbol = {reflectSymbol: () => "enable"};
const iconIsSymbol = {reflectSymbol: () => "icon"};
const isEnabledIsSymbol = {reflectSymbol: () => "isEnabled"};
const nameIsSymbol = {reflectSymbol: () => "name"};
const eternlIsSymbol = {reflectSymbol: () => "eternl"};
const gerowalletIsSymbol = {reflectSymbol: () => "gerowallet"};
const laceIsSymbol = {reflectSymbol: () => "lace"};
const namiIsSymbol = {reflectSymbol: () => "nami"};
const yoroiIsSymbol = {reflectSymbol: () => "yoroi"};
const getBalanceIsSymbol = {reflectSymbol: () => "getBalance"};
const getChangeAddressIsSymbol = {reflectSymbol: () => "getChangeAddress"};
const getCollateralIsSymbol = {reflectSymbol: () => "getCollateral"};
const getNetworkIdIsSymbol = {reflectSymbol: () => "getNetworkId"};
const getRewardAddressesIsSymbol = {reflectSymbol: () => "getRewardAddresses"};
const getUnusedAddressesIsSymbol = {reflectSymbol: () => "getUnusedAddresses"};
const getUsedAddressesIsSymbol = {reflectSymbol: () => "getUsedAddresses"};
const getUtxosIsSymbol = {reflectSymbol: () => "getUtxos"};
const signDataIsSymbol = {reflectSymbol: () => "signData"};
const signTxIsSymbol = {reflectSymbol: () => "signTx"};
const submitTxIsSymbol = {reflectSymbol: () => "submitTx"};
const SomeAddress = x => x;
const Cbor = x => x;
const Bytes = x => x;
const showCbor = {show: v => "(Cbor " + Data$dShow.showStringImpl(v) + ")"};
const toAffEither = customCoerce => p => Effect$dAff.makeAff(cb => () => {
  Promise$dInternal.thenOrCatch(
    $0 => {
      const $1 = cb(Data$dEither.$Either("Right", Data$dEither.$Either("Right", $0)));
      const a$p = $1();
      return Promise$dInternal.resolve(a$p);
    },
    $0 => {
      const $1 = cb(Data$dEither.$Either("Right", Data$dEither.$Either("Left", customCoerce($0))));
      const a$p = $1();
      return Promise$dInternal.resolve(a$p);
    },
    p
  );
  return Effect$dAff.nonCanceler;
});
const lookupForeign = str => obj => {
  const $0 = Foreign$dObject._lookup(Data$dMaybe.Nothing, Data$dMaybe.Just, str, obj);
  if ($0.tag === "Nothing") { return Data$dEither.$Either("Left", Data$dNonEmpty.$NonEmpty(Foreign.$ForeignError("ForeignError", "Missing " + str), Data$dList$dTypes.Nil)); }
  if ($0.tag === "Just") { return Data$dEither.$Either("Right", $0._1); }
  $runtime.fail();
};
const readWalletError = rejection => bind1(Foreign$dGeneric$dInternal.readObject(rejection))(obj => bind1(lookupForeign("info")(obj))(info$p => bind1(lookupForeign("code")(obj))(code$p => bind1(Foreign.unsafeReadTagged(Data$dIdentity.monadIdentity)("String")(info$p))(info => bind1(Foreign.readInt(Data$dIdentity.monadIdentity)(code$p))(code => pure({
  info,
  code
}))))));
const fromSomeAddress = lib => v => {
  const $0 = CardanoMultiplatformLib.bech32FromString(lib)(v);
  const $1 = CardanoMultiplatformLib.runGarbageCollector(lib)(Data$dTraversable.traversableMaybe.traverse(CardanoMultiplatformLib.applicativeReaderT)(hex => CardanoMultiplatformLib.bech32FromCbor(HexString.decode(hex))(Data$dUndefined$dNoProblem.undefined))(HexString.hex(v)));
  return () => {
    const a$p = $0();
    const a$p$1 = $1();
    return a$p.tag === "Nothing" ? a$p$1 : a$p;
  };
};
const cardano = w => {
  const $0 = readProp("cardano")(w);
  return () => {
    const eProp = $0();
    if (eProp.tag === "Left") { return Effect$dException.throwException(Effect$dException.error(show1(eProp._1)))(); }
    if (eProp.tag === "Right") {
      if (Foreign.isUndefined(eProp._1)) { return Data$dMaybe.Nothing; }
      return Data$dMaybe.$Maybe("Just", eProp._1);
    }
    $runtime.fail();
  };
};
const toTxSignError = v => {
  if (v.code === 1) { return Data$dMaybe.$Maybe("Just", {type: "proofGeneration", value: v.info}); }
  if (v.code === 2) { return Data$dMaybe.$Maybe("Just", {type: "userDeclined", value: v.info}); }
  return Data$dMaybe.Nothing;
};
const toTxSendError = v => {
  if (v.code === 1) { return Data$dMaybe.$Maybe("Just", {type: "refused", value: v.info}); }
  if (v.code === 2) { return Data$dMaybe.$Maybe("Just", {type: "failure", value: v.info}); }
  return Data$dMaybe.Nothing;
};
const toDataSignError = v => {
  if (v.code === 1) { return Data$dMaybe.$Maybe("Just", {type: "proofGeneration", value: v.info}); }
  if (v.code === 2) { return Data$dMaybe.$Maybe("Just", {type: "addressNotPK", value: v.info}); }
  if (v.code === 3) { return Data$dMaybe.$Maybe("Just", {type: "userDeclined", value: v.info}); }
  return Data$dMaybe.Nothing;
};
const toApiError = v => {
  if (v.code === -1) { return Data$dMaybe.$Maybe("Just", {type: "invalidRequest", value: v.info}); }
  if (v.code === -2) { return Data$dMaybe.$Maybe("Just", {type: "internalError", value: v.info}); }
  if (v.code === -3) { return Data$dMaybe.$Maybe("Just", {type: "refused", value: v.info}); }
  if (v.code === -4) { return Data$dMaybe.$Maybe("Just", {type: "accountChange", value: v.info}); }
  return Data$dMaybe.Nothing;
};
const rejectionAPIError = rejection => {
  const $0 = readWalletError(rejection);
  if ($0.tag === "Left") { return {type: "foreignErrors", value: {value: rejection, parsingErrors: $0._1}}; }
  if ($0.tag === "Right") {
    const $1 = toApiError($0._1);
    if ($1.tag === "Nothing") { return {type: "unknownError", value: rejection}; }
    if ($1.tag === "Just") { return $1._1; }
  }
  $runtime.fail();
};
const rejectionDataSignError = rejection => {
  const $0 = readWalletError(rejection);
  if ($0.tag === "Left") { return {type: "foreignErrors", value: {value: rejection, parsingErrors: $0._1}}; }
  if ($0.tag === "Right") {
    const $1 = toApiError($0._1);
    const $2 = toDataSignError($0._1);
    if ($1.tag === "Nothing") {
      if ($2.tag === "Nothing") { return {type: "unknownError", value: rejection}; }
      if ($2.tag === "Just") { return $2._1; }
      $runtime.fail();
    }
    if ($1.tag === "Nothing") { return {type: "unknownError", value: rejection}; }
    if ($1.tag === "Just") { return $1._1; }
  }
  $runtime.fail();
};
const rejectionPaginateError = rejection => Data$dTuple.$Tuple(
  (() => {
    const $0 = Foreign.unsafeReadTagged(Data$dIdentity.monadIdentity)("Number")(rejection);
    if ($0.tag === "Left") { return Data$dMaybe.Nothing; }
    if ($0.tag === "Right") { return Data$dMaybe.$Maybe("Just", $0._1); }
    $runtime.fail();
  })(),
  (() => {
    const $0 = readWalletError(rejection);
    if ($0.tag === "Left") { return {type: "foreignErrors", value: {value: rejection, parsingErrors: $0._1}}; }
    if ($0.tag === "Right") {
      const $1 = toApiError($0._1);
      if ($1.tag === "Nothing") { return {type: "unknownError", value: rejection}; }
      if ($1.tag === "Just") { return $1._1; }
    }
    $runtime.fail();
  })()
);
const rejectionTxSendError = rejection => {
  const $0 = readWalletError(rejection);
  if ($0.tag === "Left") { return {type: "foreignErrors", value: {value: rejection, parsingErrors: $0._1}}; }
  if ($0.tag === "Right") {
    const $1 = toApiError($0._1);
    const $2 = toTxSendError($0._1);
    if ($1.tag === "Nothing") {
      if ($2.tag === "Nothing") { return {type: "unknownError", value: rejection}; }
      if ($2.tag === "Just") { return $2._1; }
      $runtime.fail();
    }
    if ($1.tag === "Nothing") { return {type: "unknownError", value: rejection}; }
    if ($1.tag === "Just") { return $1._1; }
  }
  $runtime.fail();
};
const rejectionTxSignError = rejection => {
  const $0 = readWalletError(rejection);
  if ($0.tag === "Left") { return {type: "foreignErrors", value: {value: rejection, parsingErrors: $0._1}}; }
  if ($0.tag === "Right") {
    const $1 = toApiError($0._1);
    const $2 = toTxSignError($0._1);
    if ($1.tag === "Nothing") {
      if ($2.tag === "Nothing") { return {type: "unknownError", value: rejection}; }
      if ($2.tag === "Just") { return $2._1; }
      $runtime.fail();
    }
    if ($1.tag === "Nothing") { return {type: "unknownError", value: rejection}; }
    if ($1.tag === "Just") { return $1._1; }
  }
  $runtime.fail();
};
const _Wallet = /* #__PURE__ */ (() => Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep(apiVersionIsSymbol)()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectProp)("apiVersion")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep(enableIsSymbol)()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("enable")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep(iconIsSymbol)()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectProp)("icon")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep(isEnabledIsSymbol)()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("isEnabled")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep(nameIsSymbol)()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectProp)("name")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil))))).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const apiVersion = /* #__PURE__ */ (() => _Wallet.apiVersion)();
const enable = x => Effect$dAff._bind(Effect$dAff._liftEffect(_Wallet.enable(x)))(toAffEither(rejectionAPIError));
const enable_ = () => x => Effect$dAff._bind(Effect$dAff._liftEffect(_Wallet.enable(x)))(Promise$dAff.toAff$p(Promise$dAff.coerce));
const icon = /* #__PURE__ */ (() => _Wallet.icon)();
const isEnabled = x => Effect$dAff._bind(Effect$dAff._liftEffect(_Wallet.isEnabled(x)))(toAffEither(rejectionAPIError));
const isEnabled_ = () => x => Effect$dAff._bind(Effect$dAff._liftEffect(_Wallet.isEnabled(x)))(Promise$dAff.toAff$p(Promise$dAff.coerce));
const name = /* #__PURE__ */ (() => _Wallet.name)();
const _Cardano = /* #__PURE__ */ (() => Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep(eternlIsSymbol)()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectProp)("eternl")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep(gerowalletIsSymbol)()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectProp)("gerowallet")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep(laceIsSymbol)()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectProp)("lace")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep(namiIsSymbol)()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectProp)("nami")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep(yoroiIsSymbol)()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectProp)("yoroi")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil))))).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const eternl = x => {
  const $0 = _Cardano.eternl(x);
  return () => {
    const a$p = $0();
    return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
  };
};
const gerowallet = x => {
  const $0 = _Cardano.gerowallet(x);
  return () => {
    const a$p = $0();
    return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
  };
};
const lace = x => {
  const $0 = _Cardano.lace(x);
  return () => {
    const a$p = $0();
    return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
  };
};
const nami = x => {
  const $0 = _Cardano.nami(x);
  return () => {
    const a$p = $0();
    return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
  };
};
const yoroi = x => {
  const $0 = _Cardano.yoroi(x);
  return () => {
    const a$p = $0();
    return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
  };
};
const _Api = /* #__PURE__ */ (() => Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep(getBalanceIsSymbol)()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("getBalance")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep(getChangeAddressIsSymbol)()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("getChangeAddress")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep(getCollateralIsSymbol)()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("getCollateral")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep(getNetworkIdIsSymbol)()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("getNetworkId")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep(getRewardAddressesIsSymbol)()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("getRewardAddresses")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep(getUnusedAddressesIsSymbol)()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("getUnusedAddresses")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep(getUsedAddressesIsSymbol)()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("getUsedAddresses")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep(getUtxosIsSymbol)()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("getUtxos")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep(signDataIsSymbol)()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn4(JS$dObject.unsafeRunEffectMth2)("signData")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep(signTxIsSymbol)()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn4(JS$dObject.unsafeRunEffectMth2)("signTx")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep(submitTxIsSymbol)()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("submitTx")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil))))))))))).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const getBalance = x => Effect$dAff._bind(Effect$dAff._liftEffect(_Api.getBalance(x)))(toAffEither(rejectionAPIError));
const getChangeAddress = x => Effect$dAff._bind(Effect$dAff._liftEffect(_Api.getChangeAddress(x)))(toAffEither(rejectionAPIError));
const getCollateral = api => {
  const $0 = Effect$dAff._map(m => {
    if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
    if (m.tag === "Right") {
      return Data$dEither.$Either(
        "Right",
        (() => {
          const $0 = Data$dNullable.nullable(m._1, Data$dMaybe.Nothing, Data$dMaybe.Just);
          if ($0.tag === "Nothing") { return []; }
          if ($0.tag === "Just") { return $0._1; }
          $runtime.fail();
        })()
      );
    }
    $runtime.fail();
  });
  const $1 = _Api.getCollateral(api);
  return x => $0(Effect$dAff._bind(Effect$dAff._liftEffect($1(x)))(toAffEither(rejectionAPIError)));
};
const getNetworkId = x => Effect$dAff._bind(Effect$dAff._liftEffect(_Api.getNetworkId(x)))(toAffEither(rejectionAPIError));
const getRewardAddresses = x => Effect$dAff._bind(Effect$dAff._liftEffect(_Api.getRewardAddresses(x)))(toAffEither(rejectionAPIError));
const getUnusedAddresses = x => Effect$dAff._bind(Effect$dAff._liftEffect(_Api.getUnusedAddresses(x)))(toAffEither(rejectionAPIError));
const getUsedAddresses = api => Effect$dAff._bind(Effect$dAff._liftEffect(_Api.getUsedAddresses(api)))(toAffEither(rejectionAPIError));
const getUtxos = /* #__PURE__ */ (() => {
  const $0 = Effect$dAff._map(m => {
    if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
    if (m.tag === "Right") { return Data$dEither.$Either("Right", Data$dNullable.nullable(m._1, Data$dMaybe.Nothing, Data$dMaybe.Just)); }
    $runtime.fail();
  });
  return x => $0(Effect$dAff._bind(Effect$dAff._liftEffect(_Api.getUtxos(x)))(toAffEither(rejectionPaginateError)));
})();
const signData = api => address => {
  const $0 = _Api.signData(api)(address);
  return x => Effect$dAff._bind(Effect$dAff._liftEffect($0(x)))(toAffEither(rejectionDataSignError));
};
const signTx = api => cbor => {
  const $0 = _Api.signTx(api)(cbor);
  return x => Effect$dAff._bind(Effect$dAff._liftEffect($0(x)))(toAffEither(rejectionTxSignError));
};
const submitTx = api => {
  const $0 = _Api.submitTx(api);
  return x => Effect$dAff._bind(Effect$dAff._liftEffect($0(x)))(toAffEither(rejectionTxSendError));
};
export {
  Bytes,
  Cbor,
  SomeAddress,
  _Api,
  _Cardano,
  _Wallet,
  apiVersion,
  apiVersionIsSymbol,
  bind1,
  cardano,
  enable,
  enableIsSymbol,
  enable_,
  eternl,
  eternlIsSymbol,
  fromSomeAddress,
  gerowallet,
  gerowalletIsSymbol,
  getBalance,
  getBalanceIsSymbol,
  getChangeAddress,
  getChangeAddressIsSymbol,
  getCollateral,
  getCollateralIsSymbol,
  getNetworkId,
  getNetworkIdIsSymbol,
  getRewardAddresses,
  getRewardAddressesIsSymbol,
  getUnusedAddresses,
  getUnusedAddressesIsSymbol,
  getUsedAddresses,
  getUsedAddressesIsSymbol,
  getUtxos,
  getUtxosIsSymbol,
  icon,
  iconIsSymbol,
  isEnabled,
  isEnabledIsSymbol,
  isEnabled_,
  lace,
  laceIsSymbol,
  lookupForeign,
  name,
  nameIsSymbol,
  nami,
  namiIsSymbol,
  pure,
  readProp,
  readWalletError,
  rejectionAPIError,
  rejectionDataSignError,
  rejectionPaginateError,
  rejectionTxSendError,
  rejectionTxSignError,
  show1,
  showCbor,
  signData,
  signDataIsSymbol,
  signTx,
  signTxIsSymbol,
  submitTx,
  submitTxIsSymbol,
  toAffEither,
  toApiError,
  toDataSignError,
  toTxSendError,
  toTxSignError,
  yoroi,
  yoroiIsSymbol
};
