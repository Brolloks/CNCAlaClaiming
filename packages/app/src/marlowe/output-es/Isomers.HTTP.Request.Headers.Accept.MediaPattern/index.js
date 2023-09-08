import * as $runtime from "../runtime.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
const $MediaPattern = (tag, _1) => ({tag, _1});
const MediaTypeType = x => x;
const MediaTypeSubtype = x => x;
const ProperMediaType = value0 => $MediaPattern("ProperMediaType", value0);
const AnySubtype = value0 => $MediaPattern("AnySubtype", value0);
const AnyMedia = /* #__PURE__ */ $MediaPattern("AnyMedia");
const genericMediaTypeType_ = {to: x => x, from: x => x};
const showMediaTypeType = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor({genericShowArgs: v => [Data$dShow.showStringImpl(v)]})({reflectSymbol: () => "MediaTypeType"});
    return x => $0["genericShow'"](x);
  })()
};
const genericMediaPattern_ = {
  to: x => {
    if (x.tag === "Inl") { return $MediaPattern("ProperMediaType", x._1); }
    if (x.tag === "Inr") {
      if (x._1.tag === "Inl") { return $MediaPattern("AnySubtype", x._1._1); }
      if (x._1.tag === "Inr") { return AnyMedia; }
    }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "ProperMediaType") { return Data$dGeneric$dRep.$Sum("Inl", x._1); }
    if (x.tag === "AnySubtype") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", x._1)); }
    if (x.tag === "AnyMedia") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments)); }
    $runtime.fail();
  }
};
const showMediaPattern = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor({genericShowArgs: v => ["(MediaType " + Data$dShow.showStringImpl(v) + ")"]})({reflectSymbol: () => "ProperMediaType"});
    const $1 = Data$dShow$dGeneric.genericShowConstructor({genericShowArgs: v => [showMediaTypeType.show(v)]})({reflectSymbol: () => "AnySubtype"});
    const $2 = (() => {
      const $2 = (() => {
        const $2 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "AnyMedia"});
        return {
          "genericShow'": v => {
            if (v.tag === "Inl") { return $1["genericShow'"](v._1); }
            if (v.tag === "Inr") { return $2["genericShow'"](v._1); }
            $runtime.fail();
          }
        };
      })();
      return {
        "genericShow'": v => {
          if (v.tag === "Inl") { return $0["genericShow'"](v._1); }
          if (v.tag === "Inr") { return $2["genericShow'"](v._1); }
          $runtime.fail();
        }
      };
    })();
    return x => $2["genericShow'"](genericMediaPattern_.from(x));
  })()
};
const eqMediaTypeType = {eq: x => y => x === y};
const eqMediaPattern = {
  eq: x => y => {
    if (x.tag === "ProperMediaType") { return y.tag === "ProperMediaType" && x._1 === y._1; }
    if (x.tag === "AnySubtype") { return y.tag === "AnySubtype" && x._1 === y._1; }
    return x.tag === "AnyMedia" && y.tag === "AnyMedia";
  }
};
const print = v => {
  if (v.tag === "AnyMedia") { return "*/*"; }
  if (v.tag === "AnySubtype") { return v._1 + "/*"; }
  if (v.tag === "ProperMediaType") { return v._1; }
  $runtime.fail();
};
const parse = p => {
  if (p === "*/*") { return AnyMedia; }
  const $0 = Data$dString$dCommon.split("/")(p);
  if ($0.length === 2 && $0[1] === "*") { return $MediaPattern("AnySubtype", $0[0]); }
  return $MediaPattern("ProperMediaType", p);
};
const mediaTypeType = v => {
  const v1 = Data$dString$dCommon.split("/")(v);
  if (v1.length === 2) { return v1[0]; }
  return v;
};
const mediaTypeSubtype = v => {
  const v1 = Data$dString$dCommon.split("/")(v);
  if (v1.length === 2) { return v1[1]; }
  return v;
};
const matchedBy = mt => {
  const v1 = Data$dString$dCommon.split("/")(mt);
  const mtt = v1.length === 2 ? v1[0] : mt;
  return v => {
    if (v.tag === "ProperMediaType") { return v._1 === mt; }
    if (v.tag === "AnySubtype") { return mtt === v._1; }
    if (v.tag === "AnyMedia") { return true; }
    $runtime.fail();
  };
};
const eqMediaTypeSubtype = {eq: x => y => x === y};
export {
  $MediaPattern,
  AnyMedia,
  AnySubtype,
  MediaTypeSubtype,
  MediaTypeType,
  ProperMediaType,
  eqMediaPattern,
  eqMediaTypeSubtype,
  eqMediaTypeType,
  genericMediaPattern_,
  genericMediaTypeType_,
  matchedBy,
  mediaTypeSubtype,
  mediaTypeType,
  parse,
  print,
  showMediaPattern,
  showMediaTypeType
};
