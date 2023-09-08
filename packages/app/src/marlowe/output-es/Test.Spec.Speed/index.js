import * as $runtime from "../runtime.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Test$dSpec$dStyle from "../Test.Spec.Style/index.js";
const $Speed = tag => tag;
const Fast = /* #__PURE__ */ $Speed("Fast");
const Medium = /* #__PURE__ */ $Speed("Medium");
const Slow = /* #__PURE__ */ $Speed("Slow");
const toStyle = v => {
  if (v === "Fast") { return Test$dSpec$dStyle.dim; }
  if (v === "Medium") { return Test$dSpec$dStyle.yellow; }
  if (v === "Slow") { return Test$dSpec$dStyle.red; }
  $runtime.fail();
};
const speedOf = v => v1 => {
  if (v1 > v) { return Slow; }
  if (v1 > v / 2.0) { return Medium; }
  return Fast;
};
const genericSpeed = {
  to: x => {
    if (x.tag === "Inl") { return Fast; }
    if (x.tag === "Inr") {
      if (x._1.tag === "Inl") { return Medium; }
      if (x._1.tag === "Inr") { return Slow; }
    }
    $runtime.fail();
  },
  from: x => {
    if (x === "Fast") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments); }
    if (x === "Medium") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)); }
    if (x === "Slow") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments)); }
    $runtime.fail();
  }
};
const showEq = {
  eq: x => y => {
    const $0 = genericSpeed.from(x);
    const $1 = genericSpeed.from(y);
    if ($0.tag === "Inl") { return $1.tag === "Inl"; }
    return $0.tag === "Inr" && $1.tag === "Inr" && ($0._1.tag === "Inl" ? $1._1.tag === "Inl" : $0._1.tag === "Inr" && $1._1.tag === "Inr");
  }
};
const showSpeed = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "Fast"});
    const $1 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "Medium"});
    const $2 = (() => {
      const $2 = (() => {
        const $2 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "Slow"});
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
    return x => $2["genericShow'"](genericSpeed.from(x));
  })()
};
export {$Speed, Fast, Medium, Slow, genericSpeed, showEq, showSpeed, speedOf, toStyle};
