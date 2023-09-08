import * as Effect$dUncurried from "../Effect.Uncurried/index.js";
import * as Heterogeneous$dFolding from "../Heterogeneous.Folding/index.js";
import * as JS$dObject from "../JS.Object/index.js";
import * as JS$dObject$dGeneric from "../JS.Object.Generic/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const addIsSymbol = {reflectSymbol: () => "add"};
const freeIsSymbol = {reflectSymbol: () => "free"};
const hfoldlWithIndexRowListCons = /* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(freeIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("free")
})()());
const getIsSymbol = {reflectSymbol: () => "get"};
const lenIsSymbol = {reflectSymbol: () => "len"};
const to_bytesIsSymbol = {reflectSymbol: () => "to_bytes"};
const hfoldlWithIndexRowListCons1 = /* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(to_bytesIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("to_bytes")
})()());
const to_js_valueIsSymbol = {reflectSymbol: () => "to_js_value"};
const to_jsonIsSymbol = {reflectSymbol: () => "to_json"};
const from_bytesIsSymbol = {reflectSymbol: () => "from_bytes"};
const hfoldlWithIndexRowListCons2 = /* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(from_bytesIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("from_bytes")
})()());
const from_jsonIsSymbol = {reflectSymbol: () => "from_json"};
const newIsSymbol = {reflectSymbol: () => "new"};
const to_bech32IsSymbol = {reflectSymbol: () => "to_bech32"};
const to_hexIsSymbol = {reflectSymbol: () => "to_hex"};
const from_bech32IsSymbol = {reflectSymbol: () => "from_bech32"};
const from_hexIsSymbol = {reflectSymbol: () => "from_hex"};
const ScriptHashObject = x => x;
const ScriptHashesObject = x => x;
const ScriptHashes = x => x;
const ScriptHash = x => x;
const newtypeScriptHashes_ = {Coercible0: () => {}};
const newtypeScriptHashesObject = {Coercible0: () => {}};
const newtypeScriptHash_ = {Coercible0: () => {}};
const newtypeScriptHashObject_ = {Coercible0: () => {}};
const scriptHashesObject = /* #__PURE__ */ (() => Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(addIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("add")
})()())(hfoldlWithIndexRowListCons(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(getIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("get")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(lenIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("len")
})()())(hfoldlWithIndexRowListCons1(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(to_js_valueIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("to_js_value")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(to_jsonIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("to_json")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil))))))).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const scriptHashes = /* #__PURE__ */ (() => hfoldlWithIndexRowListCons2(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(from_jsonIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("from_json")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(newIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("new")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil))).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const scriptHashObject = /* #__PURE__ */ (() => hfoldlWithIndexRowListCons(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(to_bech32IsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("to_bech32")
})()())(hfoldlWithIndexRowListCons1(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(to_hexIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("to_hex")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil)))).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const scriptHash = /* #__PURE__ */ (() => Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(from_bech32IsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("from_bech32")
})()())(hfoldlWithIndexRowListCons2(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(from_hexIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("from_hex")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil))).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
export {
  ScriptHash,
  ScriptHashObject,
  ScriptHashes,
  ScriptHashesObject,
  addIsSymbol,
  freeIsSymbol,
  from_bech32IsSymbol,
  from_bytesIsSymbol,
  from_hexIsSymbol,
  from_jsonIsSymbol,
  getIsSymbol,
  hfoldlWithIndexRowListCons,
  hfoldlWithIndexRowListCons1,
  hfoldlWithIndexRowListCons2,
  lenIsSymbol,
  newIsSymbol,
  newtypeScriptHashObject_,
  newtypeScriptHash_,
  newtypeScriptHashesObject,
  newtypeScriptHashes_,
  scriptHash,
  scriptHashObject,
  scriptHashes,
  scriptHashesObject,
  to_bech32IsSymbol,
  to_bytesIsSymbol,
  to_hexIsSymbol,
  to_js_valueIsSymbol,
  to_jsonIsSymbol
};
