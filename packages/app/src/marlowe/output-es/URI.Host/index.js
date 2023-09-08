import * as $runtime from "../runtime.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dLens$dPrism from "../Data.Lens.Prism/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Parsing from "../Parsing/index.js";
import * as URI$dHost$dIPv4Address from "../URI.Host.IPv4Address/index.js";
import * as URI$dHost$dIPv6Address from "../URI.Host.IPv6Address/index.js";
import * as URI$dHost$dRegName from "../URI.Host.RegName/index.js";
const $Host = (tag, _1) => ({tag, _1});
const IPv6Address = value0 => $Host("IPv6Address", value0);
const IPv4Address = value0 => $Host("IPv4Address", value0);
const NameAddress = value0 => $Host("NameAddress", value0);
const print = v => {
  if (v.tag === "IPv6Address") { return "[" + v._1 + "]"; }
  if (v.tag === "IPv4Address") { return URI$dHost$dIPv4Address.print(v._1); }
  if (v.tag === "NameAddress") { return v._1; }
  $runtime.fail();
};
const parser = (v2, $0, $1, $2, $3) => {
  const $4 = v2._1;
  const $5 = v2._2;
  return $0(v3 => $0(v1 => URI$dHost$dIPv6Address.parser(
    Parsing.$ParseState($4, $5, false),
    $0,
    $1,
    (v4, $6) => {
      const $7 = v4._3;
      return $0(v5 => {
        if ($7) { return $2(v4, $6); }
        const $8 = v2._1;
        const $9 = v2._2;
        return $0(v3$1 => $0(v1$1 => URI$dHost$dIPv4Address.parser(
          Parsing.$ParseState($8, $9, false),
          $0,
          $1,
          (v2$1, $10) => $0(v5$1 => $0(v1$2 => URI$dHost$dRegName.parser(v2, $0, $1, $2, (state2, a) => $0(v2$2 => $3(state2, $Host("NameAddress", a)))))),
          (state2, a) => $0(v2$1 => $3(state2, $Host("IPv4Address", a)))
        )));
      });
    },
    (state2, a) => $0(v2$1 => $3(state2, $Host("IPv6Address", a)))
  )));
};
const genericHost = {
  to: x => {
    if (x.tag === "Inl") { return $Host("IPv6Address", x._1); }
    if (x.tag === "Inr") {
      if (x._1.tag === "Inl") { return $Host("IPv4Address", x._1._1); }
      if (x._1.tag === "Inr") { return $Host("NameAddress", x._1._1); }
    }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "IPv6Address") { return Data$dGeneric$dRep.$Sum("Inl", x._1); }
    if (x.tag === "IPv4Address") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", x._1)); }
    if (x.tag === "NameAddress") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", x._1)); }
    $runtime.fail();
  }
};
const showHost = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor({genericShowArgs: v => ["(IPv6Address.unsafeFromString " + Data$dShow.showStringImpl(v) + ")"]})({
      reflectSymbol: () => "IPv6Address"
    });
    const $1 = Data$dShow$dGeneric.genericShowConstructor({genericShowArgs: v => [URI$dHost$dIPv4Address.showIPv4Address.show(v)]})({reflectSymbol: () => "IPv4Address"});
    const $2 = (() => {
      const $2 = (() => {
        const $2 = Data$dShow$dGeneric.genericShowConstructor({
          genericShowArgs: v => ["(RegName.unsafeFromString (NonEmptyString.unsafeFromString " + Data$dShow.showStringImpl(v) + "))"]
        })({reflectSymbol: () => "NameAddress"});
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
    return x => $2["genericShow'"]((() => {
      if (x.tag === "IPv6Address") { return Data$dGeneric$dRep.$Sum("Inl", x._1); }
      if (x.tag === "IPv4Address") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", x._1)); }
      if (x.tag === "NameAddress") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", x._1)); }
      $runtime.fail();
    })());
  })()
};
const eqHost = {
  eq: x => y => {
    if (x.tag === "IPv6Address") { return y.tag === "IPv6Address" && x._1 === y._1; }
    if (x.tag === "IPv4Address") { return y.tag === "IPv4Address" && x._1._1 === y._1._1 && x._1._2 === y._1._2 && x._1._3 === y._1._3 && x._1._4 === y._1._4; }
    return x.tag === "NameAddress" && y.tag === "NameAddress" && x._1 === y._1;
  }
};
const ordHost = {
  compare: x => y => {
    if (x.tag === "IPv6Address") {
      if (y.tag === "IPv6Address") { return Data$dOrd.ordString.compare(x._1)(y._1); }
      return Data$dOrdering.LT;
    }
    if (y.tag === "IPv6Address") { return Data$dOrdering.GT; }
    if (x.tag === "IPv4Address") {
      if (y.tag === "IPv4Address") { return URI$dHost$dIPv4Address.ordIPv4Address.compare(x._1)(y._1); }
      return Data$dOrdering.LT;
    }
    if (y.tag === "IPv4Address") { return Data$dOrdering.GT; }
    if (x.tag === "NameAddress" && y.tag === "NameAddress") { return Data$dOrd.ordString.compare(x._1)(y._1); }
    $runtime.fail();
  },
  Eq0: () => eqHost
};
const _NameAddress = dictChoice => Data$dLens$dPrism.prism$p(NameAddress)(v => {
  if (v.tag === "NameAddress") { return Data$dMaybe.$Maybe("Just", v._1); }
  return Data$dMaybe.Nothing;
})(dictChoice);
const _IPv6Address = dictChoice => Data$dLens$dPrism.prism$p(IPv6Address)(v => {
  if (v.tag === "IPv6Address") { return Data$dMaybe.$Maybe("Just", v._1); }
  return Data$dMaybe.Nothing;
})(dictChoice);
const _IPv4Address = dictChoice => Data$dLens$dPrism.prism$p(IPv4Address)(v => {
  if (v.tag === "IPv4Address") { return Data$dMaybe.$Maybe("Just", v._1); }
  return Data$dMaybe.Nothing;
})(dictChoice);
export {$Host, IPv4Address, IPv6Address, NameAddress, _IPv4Address, _IPv6Address, _NameAddress, eqHost, genericHost, ordHost, parser, print, showHost};
