import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Foreign from "../Foreign/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
import {undefined as $$undefined} from "./foreign.js";
const Req = x => x;
const showReq = dictShow => dictShow;
const newtypeReq_ = {Coercible0: () => {}};
const unsafeUnwrap = Unsafe$dCoerce.unsafeCoerce;
const typeMismatchErr = () => ({});
const renderPathSegment = () => ({});
const renderPathLast = {};
const renderPathEnd = {};
const opt = Unsafe$dCoerce.unsafeCoerce;
const isUndefined = undef => Foreign.isUndefined(undef);
const pseudoBind = o => f => {
  if (Foreign.isUndefined(o)) { return $$undefined; }
  return f(o);
};
const toMaybe = o => {
  if (Foreign.isUndefined(o)) { return Data$dMaybe.Nothing; }
  return Data$dMaybe.$Maybe("Just", o);
};
const showOpt = dictShow => (
  {
    show: x => {
      if (Foreign.isUndefined(x)) { return "undefined"; }
      return "Opt " + dictShow.show(x);
    }
  }
);
const fromOptFlipped = o => $$default => {
  if (Foreign.isUndefined(o)) { return $$default; }
  return o;
};
const fromOpt = b => a => {
  if (Foreign.isUndefined(a)) { return b; }
  return a;
};
const fromMaybe = v2 => {
  if (v2.tag === "Nothing") { return $$undefined; }
  if (v2.tag === "Just") { return v2._1; }
  $runtime.fail();
};
const pseudoMap = f => x => {
  if (Foreign.isUndefined(x)) { return $$undefined; }
  return f(x);
};
const eqOpt = dictEq => (
  {
    eq: u1 => u2 => {
      if (Foreign.isUndefined(u1)) { return Foreign.isUndefined(u2); }
      if (Foreign.isUndefined(u2)) { return false; }
      return dictEq.eq(u1)(u2);
    }
  }
);
const ordOpt = dictOrd => {
  const eqOpt1 = eqOpt(dictOrd.Eq0());
  return {
    compare: u1 => u2 => Data$dMaybe.ordMaybe(dictOrd).compare(Foreign.isUndefined(u1) ? Data$dMaybe.Nothing : Data$dMaybe.$Maybe("Just", u1))(Foreign.isUndefined(u2)
      ? Data$dMaybe.Nothing
      : Data$dMaybe.$Maybe("Just", u2)),
    Eq0: () => eqOpt1
  };
};
const eq1Opt = dictEq => (
  {
    eq1: dictEq1 => u1 => u2 => {
      if (Foreign.isUndefined(u1)) { return Foreign.isUndefined(u2); }
      if (Foreign.isUndefined(u2)) { return false; }
      return dictEq1.eq(u1)(u2);
    }
  }
);
export {
  Req,
  eq1Opt,
  eqOpt,
  fromMaybe,
  fromOpt,
  fromOptFlipped,
  isUndefined,
  newtypeReq_,
  opt,
  ordOpt,
  pseudoBind,
  pseudoMap,
  renderPathEnd,
  renderPathLast,
  renderPathSegment,
  showOpt,
  showReq,
  toMaybe,
  typeMismatchErr,
  unsafeUnwrap
};
export * from "./foreign.js";
