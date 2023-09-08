import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
const $RequestMode = tag => tag;
const Cors = /* #__PURE__ */ $RequestMode("Cors");
const NoCors = /* #__PURE__ */ $RequestMode("NoCors");
const SameOrigin = /* #__PURE__ */ $RequestMode("SameOrigin");
const Navigate = /* #__PURE__ */ $RequestMode("Navigate");
const toString = v => {
  if (v === "Cors") { return "cors"; }
  if (v === "NoCors") { return "no-cors"; }
  if (v === "SameOrigin") { return "same-origin"; }
  if (v === "Navigate") { return "navigate"; }
  $runtime.fail();
};
const fromString = v => {
  if (v === "cors") { return Data$dMaybe.$Maybe("Just", Cors); }
  if (v === "no-cors") { return Data$dMaybe.$Maybe("Just", NoCors); }
  if (v === "same-origin") { return Data$dMaybe.$Maybe("Just", SameOrigin); }
  if (v === "navigate") { return Data$dMaybe.$Maybe("Just", Navigate); }
  return Data$dMaybe.Nothing;
};
export {$RequestMode, Cors, Navigate, NoCors, SameOrigin, fromString, toString};
