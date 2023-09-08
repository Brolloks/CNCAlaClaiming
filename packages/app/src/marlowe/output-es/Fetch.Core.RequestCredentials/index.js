import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
const $RequestCredentials = tag => tag;
const Omit = /* #__PURE__ */ $RequestCredentials("Omit");
const SameOrigin = /* #__PURE__ */ $RequestCredentials("SameOrigin");
const Include = /* #__PURE__ */ $RequestCredentials("Include");
const toString = v => {
  if (v === "Omit") { return "omit"; }
  if (v === "SameOrigin") { return "same-origin"; }
  if (v === "Include") { return "include"; }
  $runtime.fail();
};
const fromString = v => {
  if (v === "omit") { return Data$dMaybe.$Maybe("Just", Omit); }
  if (v === "same-origin") { return Data$dMaybe.$Maybe("Just", SameOrigin); }
  if (v === "include") { return Data$dMaybe.$Maybe("Just", Include); }
  return Data$dMaybe.Nothing;
};
export {$RequestCredentials, Include, Omit, SameOrigin, fromString, toString};
