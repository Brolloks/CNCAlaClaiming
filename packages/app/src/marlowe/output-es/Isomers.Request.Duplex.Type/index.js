import * as $runtime from "../runtime.js";
import * as Control$dApply from "../Control.Apply/index.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dArgonaut$dParser from "../Data.Argonaut.Parser/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFormURLEncoded from "../Data.FormURLEncoded/index.js";
import * as Data$dHTTP$dMethod from "../Data.HTTP.Method/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Isomers$dRequest$dDuplex$dParser from "../Isomers.Request.Duplex.Parser/index.js";
import * as Isomers$dRequest$dDuplex$dPrinter from "../Isomers.Request.Duplex.Printer/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const $Duplex = (_1, _2) => ({tag: "Duplex", _1, _2});
const foldMap = /* #__PURE__ */ (() => Data$dFoldable.foldableArray.foldMap(Isomers$dRequest$dDuplex$dPrinter.monoidRoutePRinter))();
const foldMap1 = v => v1 => {
  if (v1.tag === "Nothing") { return Isomers$dRequest$dDuplex$dPrinter.monoidRoutePRinter.mempty; }
  if (v1.tag === "Just") { return v(v1._1); }
  $runtime.fail();
};
const Duplex = value0 => value1 => $Duplex(value0, value1);
const withMethod = m => v => $Duplex(
  x => {
    const $0 = v._1(x);
    return x$1 => $0({body: x$1.body, headers: x$1.headers, method: m, path: x$1.path});
  },
  Isomers$dRequest$dDuplex$dParser.$Parser("Method", Data$dHTTP$dMethod.print(Data$dEither.$Either("Left", m)), v._2)
);
const withAccept = m => v => $Duplex(
  x => {
    const $0 = v._1(x);
    return x$1 => $0(Isomers$dRequest$dDuplex$dPrinter.header("Accept")(m)(x$1));
  },
  Isomers$dRequest$dDuplex$dParser.applyParser.apply(Isomers$dRequest$dDuplex$dParser.functorParser.map(v$1 => Control$dApply.identity)(Isomers$dRequest$dDuplex$dParser.accept(m)))(v._2)
);
const segment = /* #__PURE__ */ $Duplex(Isomers$dRequest$dDuplex$dPrinter.put, Isomers$dRequest$dDuplex$dParser.take);
const rest = /* #__PURE__ */ $Duplex(/* #__PURE__ */ foldMap(Isomers$dRequest$dDuplex$dPrinter.put), Isomers$dRequest$dDuplex$dParser.rest);
const record = /* #__PURE__ */ $Duplex(
  v => Isomers$dRequest$dDuplex$dPrinter.monoidRoutePRinter.mempty,
  /* #__PURE__ */ Isomers$dRequest$dDuplex$dParser.$Parser("Chomp", state => Effect$dAff._pure(Isomers$dRequest$dDuplex$dParser.$Result("Success", state, {})))
);
const prop = dictIsSymbol => () => () => () => sym => v => v1 => $Duplex(
  r => {
    const $0 = v1._1(r);
    const $1 = v._1(Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(sym))(r));
    return x => $1($0(x));
  },
  Isomers$dRequest$dDuplex$dParser.applyParser.apply(Isomers$dRequest$dDuplex$dParser.functorParser.map(b => a => Record$dUnsafe.unsafeSet(dictIsSymbol.reflectSymbol(sym))(a)(b))(v1._2))(v._2)
);
const profunctorRequestDuplex = {dimap: f => g => v => $Duplex(x => v._1(f(x)), Isomers$dRequest$dDuplex$dParser.functorParser.map(g)(v._2))};
const print = v => x => Isomers$dRequest$dDuplex$dPrinter.run(v._1(x));
const prefix = s => v => $Duplex(x => Isomers$dRequest$dDuplex$dPrinter.prefix(s)(v._1(x)), Isomers$dRequest$dDuplex$dParser.$Parser("Prefix", s, v._2));
const path = /* #__PURE__ */ (() => {
  const $0 = Data$dFoldable.foldrArray(prefix);
  const $1 = Data$dString$dCommon.split("/");
  return x => {
    const $2 = $1(x);
    return a => $0(a)($2);
  };
})();
const root = /* #__PURE__ */ path("");
const parse = v => req => Isomers$dRequest$dDuplex$dParser.run(v._2)(req);
const params = /* #__PURE__ */ $Duplex(/* #__PURE__ */ foldMap(v => Isomers$dRequest$dDuplex$dPrinter.param(v._1)(v._2)), Isomers$dRequest$dDuplex$dParser.params);
const param = p => $Duplex(Isomers$dRequest$dDuplex$dPrinter.param(p), Isomers$dRequest$dDuplex$dParser.param(p));
const optional = v => $Duplex(foldMap1(v._1), Isomers$dRequest$dDuplex$dParser.optional(v._2));
const iso = f => g => v => $Duplex(x => v._1(g(x)), Isomers$dRequest$dDuplex$dParser.functorParser.map(f)(v._2));
const newtyped = () => iso(Unsafe$dCoerce.unsafeCoerce)(Unsafe$dCoerce.unsafeCoerce);
const functorRequestDuplex = {map: f => m => $Duplex(m._1, Isomers$dRequest$dDuplex$dParser.functorParser.map(f)(m._2))};
const flag = n => $Duplex(Isomers$dRequest$dDuplex$dPrinter.flag(n), Isomers$dRequest$dDuplex$dParser.flag(n));
const body = prtBody => prsBody => $Duplex(
  x => {
    const $0 = prtBody(x);
    return v => ({body: Data$dMaybe.$Maybe("Just", $0), headers: v.headers, method: v.method, path: v.path});
  },
  Isomers$dRequest$dDuplex$dParser.body(prsBody)
);
const as = v => v1 => $Duplex(x => v1._1(v.print(x)), Isomers$dRequest$dDuplex$dParser.as({show: v.show, parse: v.parse})(v1._2));
const as$p = dictShow => {
  const show1 = dictShow.show;
  return prt => prs => as({print: prt, parse: prs, show: show1});
};
const as$p1 = prt => prs => as({print: prt, parse: prs, show: Data$dShow.showStringImpl});
const $$enum = dictBoundedEnum => v => as$p1(x => Data$dShow.showIntImpl(dictBoundedEnum.fromEnum(x)))(x => {
  const $0 = Data$dInt.fromString(x);
  const $1 = (() => {
    if ($0.tag === "Just") { return dictBoundedEnum.toEnum($0._1); }
    if ($0.tag === "Nothing") { return Data$dMaybe.Nothing; }
    $runtime.fail();
  })();
  if ($1.tag === "Nothing") { return Data$dEither.$Either("Left", "Invalid breakpoint encoding"); }
  if ($1.tag === "Just") { return Data$dEither.$Either("Right", $1._1); }
  $runtime.fail();
});
const enumParam = dictBoundedEnum => p => n => $$enum(dictBoundedEnum)(p)($Duplex(Isomers$dRequest$dDuplex$dPrinter.param(n), Isomers$dRequest$dDuplex$dParser.param(n)));
const enumSegment = dictBoundedEnum => p => $$enum(dictBoundedEnum)(p)($Duplex(Isomers$dRequest$dDuplex$dPrinter.put, Isomers$dRequest$dDuplex$dParser.take));
const formUrlEncoded = /* #__PURE__ */ as$p1(x => {
  const $0 = Data$dFormURLEncoded.encode(x);
  if ($0.tag === "Nothing") { return "Unable to form-urlencode"; }
  if ($0.tag === "Just") { return $0._1; }
  $runtime.fail();
})(x => {
  const $0 = Data$dFormURLEncoded.decode(x);
  if ($0.tag === "Just") { return Data$dEither.$Either("Right", $0._1); }
  if ($0.tag === "Nothing") { return Data$dEither.$Either("Left", "form-urlencoded value"); }
  $runtime.fail();
});
const $$int = /* #__PURE__ */ as$p1(Data$dShow.showIntImpl)(Isomers$dRequest$dDuplex$dParser.int);
const json = /* #__PURE__ */ as$p1(Data$dArgonaut$dCore.stringify)(Data$dArgonaut$dParser.jsonParser);
const string = /* #__PURE__ */ as$p1(x => x)(Data$dEither.Right);
const applyRequestDuplex = {
  apply: v => v1 => $Duplex(
    x => {
      const $0 = v._1(x);
      const $1 = v1._1(x);
      return x$1 => $1($0(x$1));
    },
    Isomers$dRequest$dDuplex$dParser.applyParser.apply(v._2)(v1._2)
  ),
  Functor0: () => functorRequestDuplex
};
const applicativeRequestDuplex = {
  pure: /* #__PURE__ */ (() => {
    const $0 = Duplex(v => Isomers$dRequest$dDuplex$dPrinter.monoidRoutePRinter.mempty);
    return x => $0(Isomers$dRequest$dDuplex$dParser.$Parser("Chomp", state => Effect$dAff._pure(Isomers$dRequest$dDuplex$dParser.$Result("Success", state, x))));
  })(),
  Apply0: () => applyRequestDuplex
};
export {
  $Duplex,
  Duplex,
  applicativeRequestDuplex,
  applyRequestDuplex,
  as,
  as$p,
  as$p1,
  body,
  $$enum as enum,
  enumParam,
  enumSegment,
  flag,
  foldMap,
  foldMap1,
  formUrlEncoded,
  functorRequestDuplex,
  $$int as int,
  iso,
  json,
  newtyped,
  optional,
  param,
  params,
  parse,
  path,
  prefix,
  print,
  profunctorRequestDuplex,
  prop,
  record,
  rest,
  root,
  segment,
  string,
  withAccept,
  withMethod
};
