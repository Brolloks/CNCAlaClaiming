import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
const $ReferrerPolicy = tag => tag;
const Default = /* #__PURE__ */ $ReferrerPolicy("Default");
const NoReferrer = /* #__PURE__ */ $ReferrerPolicy("NoReferrer");
const NoReferrerWhenDowngrade = /* #__PURE__ */ $ReferrerPolicy("NoReferrerWhenDowngrade");
const SameOrigin = /* #__PURE__ */ $ReferrerPolicy("SameOrigin");
const StrictOrigin = /* #__PURE__ */ $ReferrerPolicy("StrictOrigin");
const OriginWhenCrossOrigin = /* #__PURE__ */ $ReferrerPolicy("OriginWhenCrossOrigin");
const StrictOriginWhenCrossOrigin = /* #__PURE__ */ $ReferrerPolicy("StrictOriginWhenCrossOrigin");
const UnsafeUrl = /* #__PURE__ */ $ReferrerPolicy("UnsafeUrl");
const toString = v => {
  if (v === "Default") { return ""; }
  if (v === "NoReferrer") { return "no-referrer"; }
  if (v === "NoReferrerWhenDowngrade") { return "no-referrer-when-downgrade"; }
  if (v === "SameOrigin") { return "same-origin"; }
  if (v === "StrictOrigin") { return "strict-origin"; }
  if (v === "OriginWhenCrossOrigin") { return "origin-when-cross-origin"; }
  if (v === "StrictOriginWhenCrossOrigin") { return "strict-origin-when-cross-origin"; }
  if (v === "UnsafeUrl") { return "unsafe-url"; }
  $runtime.fail();
};
const fromString = v => {
  if (v === "") { return Data$dMaybe.$Maybe("Just", Default); }
  if (v === "no-referrer") { return Data$dMaybe.$Maybe("Just", NoReferrer); }
  if (v === "no-referrer-when-downgrade") { return Data$dMaybe.$Maybe("Just", NoReferrerWhenDowngrade); }
  if (v === "same-origin") { return Data$dMaybe.$Maybe("Just", SameOrigin); }
  if (v === "strict-origin") { return Data$dMaybe.$Maybe("Just", StrictOrigin); }
  if (v === "origin-when-cross-origin") { return Data$dMaybe.$Maybe("Just", OriginWhenCrossOrigin); }
  if (v === "strict-origin-when-cross-origin") { return Data$dMaybe.$Maybe("Just", StrictOriginWhenCrossOrigin); }
  if (v === "unsafe-url") { return Data$dMaybe.$Maybe("Just", UnsafeUrl); }
  return Data$dMaybe.Nothing;
};
export {
  $ReferrerPolicy,
  Default,
  NoReferrer,
  NoReferrerWhenDowngrade,
  OriginWhenCrossOrigin,
  SameOrigin,
  StrictOrigin,
  StrictOriginWhenCrossOrigin,
  UnsafeUrl,
  fromString,
  toString
};
