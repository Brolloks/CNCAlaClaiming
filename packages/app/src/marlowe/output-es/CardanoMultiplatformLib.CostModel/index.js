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
const from_bytesIsSymbol = {reflectSymbol: () => "from_bytes"};
const new_plutus_v1IsSymbol = {reflectSymbol: () => "new_plutus_v1"};
const new_plutus_v2IsSymbol = {reflectSymbol: () => "new_plutus_v2"};
const getIsSymbol = {reflectSymbol: () => "get"};
const hfoldlWithIndexRowListCons2 = /* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(getIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("get")
})()());
const insertIsSymbol = {reflectSymbol: () => "insert"};
const keysIsSymbol = {reflectSymbol: () => "keys"};
const lenIsSymbol = {reflectSymbol: () => "len"};
const to_js_valueIsSymbol = {reflectSymbol: () => "to_js_value"};
const to_jsonIsSymbol = {reflectSymbol: () => "to_json"};
const hfoldlWithIndexRowListCons3 = /* #__PURE__ */ hfoldlWithIndexRowListCons1(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(to_js_valueIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("to_js_value")
})()())(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(to_jsonIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("to_json")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil)));
const from_jsonIsSymbol = {reflectSymbol: () => "from_json"};
const hfoldlWithIndexRowListCons4 = /* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(from_jsonIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("from_json")
})()());
const newIsSymbol = {reflectSymbol: () => "new"};
const languageIsSymbol = {reflectSymbol: () => "language"};
const setIsSymbol = {reflectSymbol: () => "set"};
const empty_modelIsSymbol = {reflectSymbol: () => "empty_model"};
const LanguageObject = x => x;
const Language = x => x;
const CostModelObject = x => x;
const CostModel = x => x;
const CostmdlsObject = x => x;
const Costmdls = x => x;
const newtypeLanguage_ = {Coercible0: () => {}};
const newtypeLanguageObject_ = {Coercible0: () => {}};
const newtypeCostmdls_ = {Coercible0: () => {}};
const newtypeCostmdlsObject_ = {Coercible0: () => {}};
const newtypeCostModel_ = {Coercible0: () => {}};
const newtypeCostModelObject_ = {Coercible0: () => {}};
const languageObject = /* #__PURE__ */ (() => hfoldlWithIndexRowListCons(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(kindIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("kind")
})()())(hfoldlWithIndexRowListCons1(Heterogeneous$dFolding.hfoldlWithIndexRowListNil))).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const language = /* #__PURE__ */ (() => Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(from_bytesIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("from_bytes")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(new_plutus_v1IsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("new_plutus_v1")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(new_plutus_v2IsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("new_plutus_v2")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil))).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const costmdlsObject = /* #__PURE__ */ (() => hfoldlWithIndexRowListCons(hfoldlWithIndexRowListCons2(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(insertIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("insert")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(keysIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("keys")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(lenIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("len")
})()())(hfoldlWithIndexRowListCons3))))).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const costmdls = /* #__PURE__ */ (() => hfoldlWithIndexRowListCons4(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(newIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("new")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil)).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const costModelObject = /* #__PURE__ */ (() => hfoldlWithIndexRowListCons(hfoldlWithIndexRowListCons2(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(languageIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("language")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(setIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn4(JS$dObject.unsafeRunEffectMth2)("set")
})()())(hfoldlWithIndexRowListCons3)))).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const costModel = /* #__PURE__ */ (() => Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(empty_modelIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("empty_model")
})()())(hfoldlWithIndexRowListCons4(Heterogeneous$dFolding.hfoldlWithIndexRowListNil)).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
export {
  CostModel,
  CostModelObject,
  Costmdls,
  CostmdlsObject,
  Language,
  LanguageObject,
  costModel,
  costModelObject,
  costmdls,
  costmdlsObject,
  empty_modelIsSymbol,
  freeIsSymbol,
  from_bytesIsSymbol,
  from_jsonIsSymbol,
  getIsSymbol,
  hfoldlWithIndexRowListCons,
  hfoldlWithIndexRowListCons1,
  hfoldlWithIndexRowListCons2,
  hfoldlWithIndexRowListCons3,
  hfoldlWithIndexRowListCons4,
  insertIsSymbol,
  keysIsSymbol,
  kindIsSymbol,
  language,
  languageIsSymbol,
  languageObject,
  lenIsSymbol,
  newIsSymbol,
  new_plutus_v1IsSymbol,
  new_plutus_v2IsSymbol,
  newtypeCostModelObject_,
  newtypeCostModel_,
  newtypeCostmdlsObject_,
  newtypeCostmdls_,
  newtypeLanguageObject_,
  newtypeLanguage_,
  setIsSymbol,
  to_bytesIsSymbol,
  to_js_valueIsSymbol,
  to_jsonIsSymbol
};
