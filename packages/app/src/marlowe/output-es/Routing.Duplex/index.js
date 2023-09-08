import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunction from "../Data.Function/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Routing$dDuplex$dParser from "../Routing.Duplex.Parser/index.js";
import * as Routing$dDuplex$dPrinter from "../Routing.Duplex.Printer/index.js";
import * as Routing$dDuplex$dTypes from "../Routing.Duplex.Types/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const $RouteDuplex = (_1, _2) => ({tag: "RouteDuplex", _1, _2});
const identity = x => x;
const foldMap = v => v1 => {
  if (v1.tag === "Nothing") { return Routing$dDuplex$dPrinter.monoidRoutePRinter.mempty; }
  if (v1.tag === "Just") { return v(v1._1); }
  $runtime.fail();
};
const RouteDuplex = value0 => value1 => $RouteDuplex(value0, value1);
const suffix = v => s => $RouteDuplex(
  a => {
    const $0 = v._1(a);
    return x => {
      const $1 = $0(x);
      return {segments: Data$dArray.snoc($1.segments)(s), params: $1.params, hash: $1.hash};
    };
  },
  Routing$dDuplex$dParser.applyRouteParser.apply(Routing$dDuplex$dParser.functorRouteParser.map(Data$dFunction.const)(v._2))(Routing$dDuplex$dParser.$RouteParser(
    "Prefix",
    s,
    Routing$dDuplex$dParser.$RouteParser("Chomp", a => Routing$dDuplex$dParser.$RouteResult("Success", a, undefined))
  ))
);
const string = identity;
const segment = /* #__PURE__ */ $RouteDuplex(Routing$dDuplex$dPrinter.put, Routing$dDuplex$dParser.take);
const rest = /* #__PURE__ */ (() => $RouteDuplex(
  Data$dFoldable.foldableArray.foldMap(Routing$dDuplex$dPrinter.monoidRoutePRinter)(Routing$dDuplex$dPrinter.put),
  Routing$dDuplex$dParser.rest
))();
const record = /* #__PURE__ */ $RouteDuplex(
  v => Routing$dDuplex$dPrinter.monoidRoutePRinter.mempty,
  /* #__PURE__ */ Routing$dDuplex$dParser.$RouteParser("Chomp", a => Routing$dDuplex$dParser.$RouteResult("Success", a, {}))
);
const prop = dictIsSymbol => () => () => () => sym => v => v1 => $RouteDuplex(
  r => {
    const $0 = v1._1(r);
    const $1 = v._1(Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(sym))(r));
    return x => $1($0(x));
  },
  Routing$dDuplex$dParser.applyRouteParser.apply(Routing$dDuplex$dParser.functorRouteParser.map(b => a => Record$dUnsafe.unsafeSet(dictIsSymbol.reflectSymbol(sym))(a)(b))(v1._2))(v._2)
);
const profunctorRouteDuplex = {dimap: f => g => v => $RouteDuplex(x => v._1(f(x)), Routing$dDuplex$dParser.functorRouteParser.map(g)(v._2))};
const print = v => x => Routing$dDuplex$dPrinter.printPath(v._1(x)(Routing$dDuplex$dTypes.emptyRouteState));
const prefix = s => v => $RouteDuplex(
  a => {
    const $0 = v._1(a);
    return x => $0({segments: Data$dArray.snoc(x.segments)(s), params: x.params, hash: x.hash});
  },
  Routing$dDuplex$dParser.$RouteParser("Prefix", s, v._2)
);
const path = /* #__PURE__ */ (() => {
  const $0 = Data$dFoldable.foldrArray(prefix);
  const $1 = Data$dString$dCommon.split("/");
  return x => {
    const $2 = $1(x);
    return a => $0(a)($2);
  };
})();
const root = /* #__PURE__ */ path("");
const parse = v => Routing$dDuplex$dParser.run(v._2);
const params = dict => dict.params;
const param = p => $RouteDuplex(Routing$dDuplex$dPrinter.param(p), Routing$dDuplex$dParser.param(p));
const optional = v => $RouteDuplex(foldMap(v._1), Routing$dDuplex$dParser.optional(v._2));
const many1 = dictFoldable => {
  const foldMap1 = dictFoldable.foldMap(Routing$dDuplex$dPrinter.monoidRoutePRinter);
  return dictAlt => dictApplicative => v => $RouteDuplex(foldMap1(v._1), Routing$dDuplex$dParser.many1(dictAlt)(dictApplicative)(v._2));
};
const many = dictFoldable => {
  const foldMap1 = dictFoldable.foldMap(Routing$dDuplex$dPrinter.monoidRoutePRinter);
  return dictAlternative => {
    const many2 = Routing$dDuplex$dParser.many(dictAlternative);
    return v => $RouteDuplex(foldMap1(v._1), many2(v._2));
  };
};
const hash = /* #__PURE__ */ $RouteDuplex(Routing$dDuplex$dPrinter.hash, Routing$dDuplex$dParser.hash);
const functorRouteDuplex = {map: f => m => $RouteDuplex(m._1, Routing$dDuplex$dParser.functorRouteParser.map(f)(m._2))};
const flag = v => $RouteDuplex(
  v1 => {
    if (v1) { return v._1(""); }
    return Routing$dDuplex$dPrinter.monoidRoutePRinter.mempty;
  },
  Routing$dDuplex$dParser.altRouteParser.alt(Routing$dDuplex$dParser.functorRouteParser.map(v$1 => true)(v._2))(Routing$dDuplex$dParser.$RouteParser(
    "Chomp",
    a => Routing$dDuplex$dParser.$RouteResult("Success", a, false)
  ))
);
const end = v => $RouteDuplex(
  v._1,
  Routing$dDuplex$dParser.applyRouteParser.apply(Routing$dDuplex$dParser.functorRouteParser.map(Data$dFunction.const)(v._2))(Routing$dDuplex$dParser.end)
);
const $$default = d => v => $RouteDuplex(
  v._1,
  Routing$dDuplex$dParser.altRouteParser.alt(v._2)(Routing$dDuplex$dParser.$RouteParser("Chomp", a => Routing$dDuplex$dParser.$RouteResult("Success", a, d)))
);
const buildParamsNil = {buildParams: v => v1 => identity};
const buildParams = dict => dict.buildParams;
const buildParamsCons = dictIsSymbol => () => () => () => () => dictRouteDuplexBuildParams => (
  {
    buildParams: v => r => prev => dictRouteDuplexBuildParams.buildParams(Type$dProxy.Proxy)(r)(prop(dictIsSymbol)()()()(Type$dProxy.Proxy)(Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(r)((() => {
      const $0 = dictIsSymbol.reflectSymbol(Type$dProxy.Proxy);
      return $RouteDuplex(Routing$dDuplex$dPrinter.param($0), Routing$dDuplex$dParser.param($0));
    })()))(prev))
  }
);
const routeDuplexParams = () => dictRouteDuplexBuildParams => ({params: r => dictRouteDuplexBuildParams.buildParams(Type$dProxy.Proxy)(r)(record)});
const as = f => g => v => $RouteDuplex(x => v._1(f(x)), Routing$dDuplex$dParser.as(identity)(g)(v._2));
const $$boolean = /* #__PURE__ */ (() => as(Data$dShow.showBoolean.show)(Routing$dDuplex$dParser.boolean))();
const $$int = /* #__PURE__ */ as(Data$dShow.showIntImpl)(Routing$dDuplex$dParser.int);
const applyRouteDuplex = {
  apply: v => v1 => $RouteDuplex(
    x => {
      const $0 = v._1(x);
      const $1 = v1._1(x);
      return x$1 => $1($0(x$1));
    },
    Routing$dDuplex$dParser.applyRouteParser.apply(v._2)(v1._2)
  ),
  Functor0: () => functorRouteDuplex
};
const applicativeRouteDuplex = {
  pure: /* #__PURE__ */ (() => {
    const $0 = RouteDuplex(v => Routing$dDuplex$dPrinter.monoidRoutePRinter.mempty);
    return x => $0(Routing$dDuplex$dParser.$RouteParser("Chomp", a => Routing$dDuplex$dParser.$RouteResult("Success", a, x)));
  })(),
  Apply0: () => applyRouteDuplex
};
export {
  $RouteDuplex,
  RouteDuplex,
  applicativeRouteDuplex,
  applyRouteDuplex,
  as,
  $$boolean as boolean,
  buildParams,
  buildParamsCons,
  buildParamsNil,
  $$default as default,
  end,
  flag,
  foldMap,
  functorRouteDuplex,
  hash,
  identity,
  $$int as int,
  many,
  many1,
  optional,
  param,
  params,
  parse,
  path,
  prefix,
  print,
  profunctorRouteDuplex,
  prop,
  record,
  rest,
  root,
  routeDuplexParams,
  segment,
  string,
  suffix
};
