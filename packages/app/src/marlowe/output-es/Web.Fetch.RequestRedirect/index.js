import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
const $RequestRedirect = tag => tag;
const Follow = /* #__PURE__ */ $RequestRedirect("Follow");
const $$Error = /* #__PURE__ */ $RequestRedirect("Error");
const Manual = /* #__PURE__ */ $RequestRedirect("Manual");
const toString = v => {
  if (v === "Follow") { return "follow"; }
  if (v === "Error") { return "error"; }
  if (v === "Manual") { return "manual"; }
  $runtime.fail();
};
const fromString = v => {
  if (v === "follow") { return Data$dMaybe.$Maybe("Just", Follow); }
  if (v === "error") { return Data$dMaybe.$Maybe("Just", $$Error); }
  if (v === "manual") { return Data$dMaybe.$Maybe("Just", Manual); }
  return Data$dMaybe.Nothing;
};
export {$RequestRedirect, $$Error as Error, Follow, Manual, fromString, toString};
