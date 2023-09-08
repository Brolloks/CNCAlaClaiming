import * as Effect$dUncurried from "../Effect.Uncurried/index.js";
import * as Heterogeneous$dFolding from "../Heterogeneous.Folding/index.js";
import * as JS$dObject from "../JS.Object/index.js";
import * as JS$dObject$dGeneric from "../JS.Object.Generic/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const freeIsSymbol = {reflectSymbol: () => "free"};
const hfoldlWithIndexRowListCons = /* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(freeIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("free")
})()());
const kindIsSymbol = {reflectSymbol: () => "kind"};
const to_bytesIsSymbol = {reflectSymbol: () => "to_bytes"};
const hfoldlWithIndexRowListCons1 = /* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(to_bytesIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("to_bytes")
})()());
const to_js_valueIsSymbol = {reflectSymbol: () => "to_js_value"};
const hfoldlWithIndexRowListCons2 = /* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(to_js_valueIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("to_js_value")
})()());
const to_jsonIsSymbol = {reflectSymbol: () => "to_json"};
const hfoldlWithIndexRowListCons3 = /* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(to_jsonIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("to_json")
})()());
const to_keyhashIsSymbol = {reflectSymbol: () => "to_keyhash"};
const to_scripthashIsSymbol = {reflectSymbol: () => "to_scripthash"};
const from_bytesIsSymbol = {reflectSymbol: () => "from_bytes"};
const hfoldlWithIndexRowListCons4 = /* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(from_bytesIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("from_bytes")
})()());
const from_jsonIsSymbol = {reflectSymbol: () => "from_json"};
const hfoldlWithIndexRowListCons5 = /* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(from_jsonIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("from_json")
})()());
const from_keyhashIsSymbol = {reflectSymbol: () => "from_keyhash"};
const headerIsSymbol = {reflectSymbol: () => "header"};
const network_idIsSymbol = {reflectSymbol: () => "network_id"};
const payment_credIsSymbol = {reflectSymbol: () => "payment_cred"};
const to_bech32IsSymbol = {reflectSymbol: () => "to_bech32"};
const from_bech32IsSymbol = {reflectSymbol: () => "from_bech32"};
const header_matches_kindIsSymbol = {reflectSymbol: () => "header_matches_kind"};
const is_validIsSymbol = {reflectSymbol: () => "is_valid"};
const is_valid_bech32IsSymbol = {reflectSymbol: () => "is_valid_bech32"};
const is_valid_byronIsSymbol = {reflectSymbol: () => "is_valid_byron"};
const StakeCredentialObject = x => x;
const StakeCredential = x => x;
const AddressObject = x => x;
const Address = x => x;
const newtypeStakeCredential_ = {Coercible0: () => {}};
const newtypeStakeCredentialObj = {Coercible0: () => {}};
const newtypeAddress_ = {Coercible0: () => {}};
const newtypeAddressObject_ = {Coercible0: () => {}};
const stakeCredentialObject = /* #__PURE__ */ (() => hfoldlWithIndexRowListCons(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(kindIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("kind")
})()())(hfoldlWithIndexRowListCons1(hfoldlWithIndexRowListCons2(hfoldlWithIndexRowListCons3(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(to_keyhashIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("to_keyhash")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(to_scripthashIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("to_scripthash")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil))))))).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const stakeCredential = /* #__PURE__ */ (() => hfoldlWithIndexRowListCons4(hfoldlWithIndexRowListCons5(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(from_keyhashIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("from_keyhash")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil))).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const addressObject = /* #__PURE__ */ (() => hfoldlWithIndexRowListCons(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(headerIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("header")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(network_idIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("network_id")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(payment_credIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("payment_cred")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(to_bech32IsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("to_bech32")
})()())(hfoldlWithIndexRowListCons1(hfoldlWithIndexRowListCons2(hfoldlWithIndexRowListCons3(Heterogeneous$dFolding.hfoldlWithIndexRowListNil)))))))).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const address = /* #__PURE__ */ (() => Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(from_bech32IsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("from_bech32")
})()())(hfoldlWithIndexRowListCons4(hfoldlWithIndexRowListCons5(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(header_matches_kindIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn4(JS$dObject.unsafeRunEffectMth2)("header_matches_kind")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(is_validIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("is_valid")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(is_valid_bech32IsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("is_valid_bech32")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(is_valid_byronIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("is_valid_byron")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil))))))).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
export {
  Address,
  AddressObject,
  StakeCredential,
  StakeCredentialObject,
  address,
  addressObject,
  freeIsSymbol,
  from_bech32IsSymbol,
  from_bytesIsSymbol,
  from_jsonIsSymbol,
  from_keyhashIsSymbol,
  headerIsSymbol,
  header_matches_kindIsSymbol,
  hfoldlWithIndexRowListCons,
  hfoldlWithIndexRowListCons1,
  hfoldlWithIndexRowListCons2,
  hfoldlWithIndexRowListCons3,
  hfoldlWithIndexRowListCons4,
  hfoldlWithIndexRowListCons5,
  is_validIsSymbol,
  is_valid_bech32IsSymbol,
  is_valid_byronIsSymbol,
  kindIsSymbol,
  network_idIsSymbol,
  newtypeAddressObject_,
  newtypeAddress_,
  newtypeStakeCredentialObj,
  newtypeStakeCredential_,
  payment_credIsSymbol,
  stakeCredential,
  stakeCredentialObject,
  to_bech32IsSymbol,
  to_bytesIsSymbol,
  to_js_valueIsSymbol,
  to_jsonIsSymbol,
  to_keyhashIsSymbol,
  to_scripthashIsSymbol
};
