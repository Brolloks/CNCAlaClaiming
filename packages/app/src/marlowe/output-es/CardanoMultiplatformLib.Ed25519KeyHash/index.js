import * as Effect$dUncurried from "../Effect.Uncurried/index.js";
import * as Heterogeneous$dFolding from "../Heterogeneous.Folding/index.js";
import * as JS$dObject from "../JS.Object/index.js";
import * as JS$dObject$dGeneric from "../JS.Object.Generic/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const freeIsSymbol = {reflectSymbol: () => "free"};
const to_bech32IsSymbol = {reflectSymbol: () => "to_bech32"};
const to_bytesIsSymbol = {reflectSymbol: () => "to_bytes"};
const to_hexIsSymbol = {reflectSymbol: () => "to_hex"};
const from_bech32IsSymbol = {reflectSymbol: () => "from_bech32"};
const from_bytesIsSymbol = {reflectSymbol: () => "from_bytes"};
const from_hexIsSymbol = {reflectSymbol: () => "from_hex"};
const Ed25519KeyHashObject = x => x;
const Ed25519KeyHash = x => x;
const newtypeEd25519KeyHash_ = {Coercible0: () => {}};
const newtypeEd25519KeyHashObje = {Coercible0: () => {}};
const ed25519KeyHashObject = /* #__PURE__ */ (() => Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(freeIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("free")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(to_bech32IsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("to_bech32")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(to_bytesIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("to_bytes")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(to_hexIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("to_hex")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil)))).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const ed25519KeyHash = /* #__PURE__ */ (() => Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(from_bech32IsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("from_bech32")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(from_bytesIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("from_bytes")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(from_hexIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("from_hex")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil))).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
export {
  Ed25519KeyHash,
  Ed25519KeyHashObject,
  ed25519KeyHash,
  ed25519KeyHashObject,
  freeIsSymbol,
  from_bech32IsSymbol,
  from_bytesIsSymbol,
  from_hexIsSymbol,
  newtypeEd25519KeyHashObje,
  newtypeEd25519KeyHash_,
  to_bech32IsSymbol,
  to_bytesIsSymbol,
  to_hexIsSymbol
};
