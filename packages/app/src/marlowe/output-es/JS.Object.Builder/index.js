import * as JS$dObject from "../JS.Object/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const Person = x => x;
const Builder = x => x;
const semigroupBuilder = {
  append: v => v1 => obj => {
    const $0 = v(obj);
    return () => {
      $0();
      return v1(obj)();
    };
  }
};
const newtypePerson_ = {Coercible0: () => {}};
const monoidBuilder = {mempty: v => () => {}, Semigroup0: () => semigroupBuilder};
const contravariantBuilder = {cmap: f => v => x => v(f(x))};
const mkBuild = constructor => v => {
  const t = constructor();
  v(t)();
  return t;
};
const fakeConstructor = undefined;
const builderMth5 = dictIsSymbol => () => m => a1 => a2 => a3 => a4 => a5 => obj => {
  const $0 = dictIsSymbol.reflectSymbol(m);
  return () => {JS$dObject.unsafeRunEffectMth5($0, obj, a1, a2, a3, a4, a5);};
};
const builderMth4 = dictIsSymbol => () => m => a1 => a2 => a3 => a4 => obj => {
  const $0 = dictIsSymbol.reflectSymbol(m);
  return () => {JS$dObject.unsafeRunEffectMth4($0, obj, a1, a2, a3, a4);};
};
const builderMth3 = dictIsSymbol => () => m => a1 => a2 => a3 => obj => {
  const $0 = dictIsSymbol.reflectSymbol(m);
  return () => {JS$dObject.unsafeRunEffectMth3($0, obj, a1, a2, a3);};
};
const builderMth2 = dictIsSymbol => () => m => a1 => a2 => obj => {
  const $0 = dictIsSymbol.reflectSymbol(m);
  return () => {JS$dObject.unsafeRunEffectMth2($0, obj, a1, a2);};
};
const builderMth1 = dictIsSymbol => () => m => a1 => obj => {
  const $0 = dictIsSymbol.reflectSymbol(m);
  return () => {JS$dObject.unsafeRunEffectMth1($0, obj, a1);};
};
const setFirstName = x => x$1 => builderMth1({reflectSymbol: () => "setFirstName"})()(Type$dProxy.Proxy)(x)(x$1);
const setLastName = x => x$1 => builderMth1({reflectSymbol: () => "setFirstName"})()(Type$dProxy.Proxy)(x)(x$1);
const builderMth0 = dictIsSymbol => () => m => obj => {
  const $0 = dictIsSymbol.reflectSymbol(m);
  return () => {JS$dObject.unsafeRunEffectMth0($0, obj);};
};
const buildPerson = /* #__PURE__ */ mkBuild();
const mkPerson = firstName => lastName => {
  const t = undefined();
  builderMth1({reflectSymbol: () => "setFirstName"})()(Type$dProxy.Proxy)(firstName)(t)();
  builderMth1({reflectSymbol: () => "setFirstName"})()(Type$dProxy.Proxy)(lastName)(t)();
  return t;
};
export {
  Builder,
  Person,
  buildPerson,
  builderMth0,
  builderMth1,
  builderMth2,
  builderMth3,
  builderMth4,
  builderMth5,
  contravariantBuilder,
  fakeConstructor,
  mkBuild,
  mkPerson,
  monoidBuilder,
  newtypePerson_,
  semigroupBuilder,
  setFirstName,
  setLastName
};
