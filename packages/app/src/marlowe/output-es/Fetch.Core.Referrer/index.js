import * as $runtime from "../runtime.js";
const $Referrer = (tag, _1) => ({tag, _1});
const ReferrerNone = /* #__PURE__ */ $Referrer("ReferrerNone");
const ReferrerClient = /* #__PURE__ */ $Referrer("ReferrerClient");
const ReferrerUrl = value0 => $Referrer("ReferrerUrl", value0);
const toString = v => {
  if (v.tag === "ReferrerNone") { return "none"; }
  if (v.tag === "ReferrerClient") { return "client"; }
  if (v.tag === "ReferrerUrl") { return v._1; }
  $runtime.fail();
};
const fromString = v => {
  if (v === "none") { return ReferrerNone; }
  if (v === "client") { return ReferrerClient; }
  return $Referrer("ReferrerUrl", v);
};
export {$Referrer, ReferrerClient, ReferrerNone, ReferrerUrl, fromString, toString};
