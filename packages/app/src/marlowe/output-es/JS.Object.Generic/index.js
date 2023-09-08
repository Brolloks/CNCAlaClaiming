import * as Effect$dUncurried from "../Effect.Uncurried/index.js";
import * as Heterogeneous$dFolding from "../Heterogeneous.Folding/index.js";
import * as JS$dObject from "../JS.Object/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const $MkFFIStep = () => ({tag: "MkFFIStep"});
const firstNameIsSymbol = {reflectSymbol: () => "firstName"};
const lastNameIsSymbol = {reflectSymbol: () => "lastName"};
const setFirstNameIsSymbol = {reflectSymbol: () => "setFirstName"};
const setLastNameIsSymbol = {reflectSymbol: () => "setLastName"};
const Person = x => x;
const MkFFIStep = /* #__PURE__ */ $MkFFIStep();
const unsafeEffectMthToEffectFn = dictIsSymbol => ({mthFn: mthName => v => Effect$dUncurried.runEffectFn5(JS$dObject.unsafeRunEffectMth3)(dictIsSymbol.reflectSymbol(mthName))});
const unsafeEffectMthToEffectFn1 = dictIsSymbol => ({mthFn: mthName => v => Effect$dUncurried.runEffectFn4(JS$dObject.unsafeRunEffectMth2)(dictIsSymbol.reflectSymbol(mthName))});
const unsafeEffectMthToEffectFn2 = dictIsSymbol => ({mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)(dictIsSymbol.reflectSymbol(mthName))});
const unsafeEffectMthToEffectFn3 = dictIsSymbol => ({mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)(dictIsSymbol.reflectSymbol(mthName))});
const unsafeEffectMthToEffectFn4 = dictIsSymbol => ({mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectProp)(dictIsSymbol.reflectSymbol(mthName))});
const newtypePerson_ = {Coercible0: () => {}};
const mthFn = dict => dict.mthFn;
const foldingWithIndexMkFFIStep = dictIsSymbol => () => dictUnsafeEffectMthToEffectFn => () => () => (
  {
    foldingWithIndex: v => mthName => ffi => v1 => Record$dUnsafe.unsafeSet(dictIsSymbol.reflectSymbol(mthName))(dictUnsafeEffectMthToEffectFn.mthFn(mthName)(Type$dProxy.Proxy))(ffi)
  }
);
const foldingWithIndexMkFFIStep1 = dictIsSymbol => () => () => dictUnsafeEffectMthToEffectFn => () => () => (
  {
    foldingWithIndex: v => mthName => ffi => v1 => Record$dUnsafe.unsafeSet(dictIsSymbol.reflectSymbol(mthName))(dictUnsafeEffectMthToEffectFn.mthFn(mthName)(Type$dProxy.Proxy))(ffi)
  }
);
const mkNewtypedFFI = () => () => dictHFoldlWithIndex => v => dictHFoldlWithIndex.hfoldlWithIndex(MkFFIStep)({})(Type$dProxy.Proxy);
const mkFFI = () => dictHFoldlWithIndex => v => dictHFoldlWithIndex.hfoldlWithIndex(MkFFIStep)({})(Type$dProxy.Proxy);
const _Person = /* #__PURE__ */ (() => Heterogeneous$dFolding.hfoldlWithIndexRowListCons(foldingWithIndexMkFFIStep1(firstNameIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectProp)("firstName")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(foldingWithIndexMkFFIStep1(lastNameIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectProp)("lastName")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(foldingWithIndexMkFFIStep1(setFirstNameIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("setFirstName")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(foldingWithIndexMkFFIStep1(setLastNameIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("setLastName")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil)))).hfoldlWithIndex(MkFFIStep)({})(Type$dProxy.Proxy))();
export {
  $MkFFIStep,
  MkFFIStep,
  Person,
  _Person,
  firstNameIsSymbol,
  foldingWithIndexMkFFIStep,
  foldingWithIndexMkFFIStep1,
  lastNameIsSymbol,
  mkFFI,
  mkNewtypedFFI,
  mthFn,
  newtypePerson_,
  setFirstNameIsSymbol,
  setLastNameIsSymbol,
  unsafeEffectMthToEffectFn,
  unsafeEffectMthToEffectFn1,
  unsafeEffectMthToEffectFn2,
  unsafeEffectMthToEffectFn3,
  unsafeEffectMthToEffectFn4
};
