import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
const $RequestCache = tag => tag;
const Default = /* #__PURE__ */ $RequestCache("Default");
const NoStore = /* #__PURE__ */ $RequestCache("NoStore");
const Reload = /* #__PURE__ */ $RequestCache("Reload");
const NoCache = /* #__PURE__ */ $RequestCache("NoCache");
const ForceCache = /* #__PURE__ */ $RequestCache("ForceCache");
const OnlyIfCached = /* #__PURE__ */ $RequestCache("OnlyIfCached");
const toString = v => {
  if (v === "Default") { return "default"; }
  if (v === "NoStore") { return "no-store"; }
  if (v === "Reload") { return "reload"; }
  if (v === "NoCache") { return "no-cache"; }
  if (v === "ForceCache") { return "force-cache"; }
  if (v === "OnlyIfCached") { return "only-if-cached"; }
  $runtime.fail();
};
const fromString = v => {
  if (v === "default") { return Data$dMaybe.$Maybe("Just", Default); }
  if (v === "no-store") { return Data$dMaybe.$Maybe("Just", NoStore); }
  if (v === "reload") { return Data$dMaybe.$Maybe("Just", Reload); }
  if (v === "no-cache") { return Data$dMaybe.$Maybe("Just", NoCache); }
  if (v === "force-cache") { return Data$dMaybe.$Maybe("Just", ForceCache); }
  if (v === "only-if-cached") { return Data$dMaybe.$Maybe("Just", OnlyIfCached); }
  return Data$dMaybe.Nothing;
};
export {$RequestCache, Default, ForceCache, NoCache, NoStore, OnlyIfCached, Reload, fromString, toString};
