import * as $runtime from "../runtime.js";
import * as Control$dApply from "../Control.Apply/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunction from "../Data.Function/index.js";
import * as Data$dHTTP$dMethod from "../Data.HTTP.Method/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Isomers$dContrib$dHeterogeneous$dList from "../Isomers.Contrib.Heterogeneous.List/index.js";
import * as Isomers$dRequest$dDuplex$dParser from "../Isomers.Request.Duplex.Parser/index.js";
import * as Isomers$dRequest$dDuplex$dPrinter from "../Isomers.Request.Duplex.Printer/index.js";
import * as Isomers$dRequest$dDuplex$dType from "../Isomers.Request.Duplex.Type/index.js";
import * as Record from "../Record/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const $Accum = (_1, _2) => ({tag: "Accum", _1, _2});
const identity = x => x;
const Accum = value0 => value1 => $Accum(value0, value1);
const RouteAccum = x => x;
const withMethod = m => v => $Accum(
  Isomers$dRequest$dDuplex$dType.$Duplex(
    x => {
      const $0 = v._1._1(x);
      return x$1 => $0({body: x$1.body, headers: x$1.headers, method: m, path: x$1.path});
    },
    Isomers$dRequest$dDuplex$dParser.$Parser("Method", Data$dHTTP$dMethod.print(Data$dEither.$Either("Left", m)), v._1._2)
  ),
  v._2
);
const withAccept = m => v => $Accum(
  Isomers$dRequest$dDuplex$dType.$Duplex(
    x => {
      const $0 = v._1._1(x);
      return x$1 => $0(Isomers$dRequest$dDuplex$dPrinter.header("Accept")(m)(x$1));
    },
    Isomers$dRequest$dDuplex$dParser.applyParser.apply(Isomers$dRequest$dDuplex$dParser.functorParser.map(v$1 => Control$dApply.identity)(Isomers$dRequest$dDuplex$dParser.accept(m)))(v._1._2)
  ),
  v._2
);
const unRootDuplex = v => $Accum(Isomers$dRequest$dDuplex$dType.$Duplex(v._1, Isomers$dRequest$dDuplex$dParser.functorParser.map(Data$dFunction.const)(v._2)), v$1 => ({}));
const tupleCons = v => v1 => $Accum(
  Isomers$dRequest$dDuplex$dType.$Duplex(
    ireq => {
      const $0 = v._1(v1._2(ireq)._1);
      const $1 = v1._1._1(ireq);
      return x => $1($0(x));
    },
    Isomers$dRequest$dDuplex$dParser.applyParser.apply(Isomers$dRequest$dDuplex$dParser.functorParser.map(v2 => v3 => b => v3(Data$dTuple.$Tuple(v2, b)))(v._2))(v1._1._2)
  ),
  x => v1._2(x)._2
);
const semigroupoidRouteAccum = {
  compose: v => v1 => $Accum(
    Isomers$dRequest$dDuplex$dType.$Duplex(
      i => {
        const $0 = v._1._1(i);
        const $1 = v1._1._1(v._2(i));
        return x => $1($0(x));
      },
      Isomers$dRequest$dDuplex$dParser.applyParser.apply(Isomers$dRequest$dDuplex$dParser.functorParser.map(v2 => v3 => x => v3(v2(x)))(v1._1._2))(v._1._2)
    ),
    x => v1._2(v._2(x))
  )
};
const scalarFlipped = v => v1 => $Accum(
  Isomers$dRequest$dDuplex$dType.$Duplex(
    ireq => {
      const $0 = v1._1._1(ireq);
      const $1 = v._1(v1._2(ireq));
      return x => $1($0(x));
    },
    Isomers$dRequest$dDuplex$dParser.applyParser.apply(Isomers$dRequest$dDuplex$dParser.functorParser.map(v2 => v3 => {
      const $0 = v2(v3);
      return v$1 => $0;
    })(v1._1._2))(v._2)
  ),
  v$1 => ({})
);
const scalar = v => v1 => $Accum(
  Isomers$dRequest$dDuplex$dType.$Duplex(
    ireq => {
      const $0 = v._1(v1._2(ireq));
      const $1 = v1._1._1(ireq);
      return x => $1($0(x));
    },
    Isomers$dRequest$dDuplex$dParser.applyParser.apply(Isomers$dRequest$dDuplex$dParser.functorParser.map(v2 => v3 => {
      const $0 = v3(v2);
      return v$1 => $0;
    })(v._2))(v1._1._2)
  ),
  v$1 => ({})
);
const rootDuplex = accum => Isomers$dRequest$dDuplex$dType.$Duplex(accum._1._1, Isomers$dRequest$dDuplex$dParser.functorParser.map(f => f({}))(accum._1._2));
const profunctorAccum = {
  dimap: f => g => v => $Accum(Isomers$dRequest$dDuplex$dType.profunctorRequestDuplex.dimap(f)(Control$dSemigroupoid.semigroupoidFn.compose(g))(v._1), x => v._2(f(x)))
};
const print = v => x => Isomers$dRequest$dDuplex$dPrinter.run(v._1._1(x));
const prefix = s => v => $Accum(
  Isomers$dRequest$dDuplex$dType.$Duplex(x => Isomers$dRequest$dDuplex$dPrinter.prefix(s)(v._1._1(x)), Isomers$dRequest$dDuplex$dParser.$Parser("Prefix", s, v._1._2)),
  v._2
);
const path = /* #__PURE__ */ (() => {
  const $0 = Data$dFoldable.foldrArray(prefix);
  const $1 = Data$dString$dCommon.split("/");
  return x => {
    const $2 = $1(x);
    return a => $0(a)($2);
  };
})();
const pass = /* #__PURE__ */ (() => $Accum(Isomers$dRequest$dDuplex$dType.applicativeRequestDuplex.pure(identity), identity))();
const parse = v => req => r => Effect$dAff._map(v1 => {
  if (v1.tag === "Left") { return Data$dEither.$Either("Left", v1._1); }
  if (v1.tag === "Right") { return Data$dEither.$Either("Right", v1._1(r)); }
  $runtime.fail();
})(Isomers$dRequest$dDuplex$dParser.run(v._1._2)(req));
const isoAccum = f => g => $Accum(Isomers$dRequest$dDuplex$dType.applicativeRequestDuplex.pure(g), f);
const newtypeAccum = () => $Accum(Isomers$dRequest$dDuplex$dType.applicativeRequestDuplex.pure(Unsafe$dCoerce.unsafeCoerce), Unsafe$dCoerce.unsafeCoerce);
const insertReq = dictIsSymbol => () => () => () => l => v => $Accum(
  Isomers$dRequest$dDuplex$dType.$Duplex(
    ireq => v._1(Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(l))(ireq)),
    Isomers$dRequest$dDuplex$dParser.functorParser.map(v1 => acc => Record$dUnsafe.unsafeSet(dictIsSymbol.reflectSymbol(l))(v1)(acc))(v._2)
  ),
  Record.delete(dictIsSymbol)()()(l)
);
const insertFlipped = dictIsSymbol => () => () => l => v => v1 => $Accum(
  Isomers$dRequest$dDuplex$dType.$Duplex(
    ireq => {
      const $0 = v1._1._1(ireq);
      const $1 = v._1(Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(l))(v1._2(ireq)));
      return x => $1($0(x));
    },
    Isomers$dRequest$dDuplex$dParser.applyParser.apply(Isomers$dRequest$dDuplex$dParser.functorParser.map(v2 => v3 => acc => v2(Record$dUnsafe.unsafeSet(dictIsSymbol.reflectSymbol(l))(v3)(acc)))(v1._1._2))(v._2)
  ),
  x => Record$dUnsafe.unsafeDelete(dictIsSymbol.reflectSymbol(l))(v1._2(x))
);
const insert = dictIsSymbol => () => () => l => v => v1 => $Accum(
  Isomers$dRequest$dDuplex$dType.$Duplex(
    ireq => {
      const $0 = v._1(Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(l))(v1._2(ireq)));
      const $1 = v1._1._1(ireq);
      return x => $1($0(x));
    },
    Isomers$dRequest$dDuplex$dParser.applyParser.apply(Isomers$dRequest$dDuplex$dParser.functorParser.map(v2 => v3 => acc => v3(Record$dUnsafe.unsafeSet(dictIsSymbol.reflectSymbol(l))(v2)(acc)))(v._2))(v1._1._2)
  ),
  x => Record$dUnsafe.unsafeDelete(dictIsSymbol.reflectSymbol(l))(v1._2(x))
);
const imapRoute = f => g => v => $Accum(
  Isomers$dRequest$dDuplex$dType.$Duplex(v._1._1, Isomers$dRequest$dDuplex$dParser.functorParser.map(b2c => x => b2c(f(x)))(v._1._2)),
  x => g(v._2(x))
);
const unifyRoute = dictTypeEquals => imapRoute(dictTypeEquals.proof(a => a))(dictTypeEquals.proof(a => a));
const hnil = accum => scalar(Isomers$dRequest$dDuplex$dType.applicativeRequestDuplex.pure(Isomers$dContrib$dHeterogeneous$dList.HNil))(accum);
const hcons = v => v1 => $Accum(
  Isomers$dRequest$dDuplex$dType.$Duplex(
    ireq => {
      const $0 = v._1(v1._2(ireq)._1);
      const $1 = v1._1._1(ireq);
      return x => $1($0(x));
    },
    Isomers$dRequest$dDuplex$dParser.applyParser.apply(Isomers$dRequest$dDuplex$dParser.functorParser.map(v2 => v3 => t => v3(Isomers$dContrib$dHeterogeneous$dList.$HCons(v2, t)))(v._2))(v1._1._2)
  ),
  x => v1._2(x)._2
);
const functorAccum = {
  map: f => m => $Accum(
    Isomers$dRequest$dDuplex$dType.$Duplex(m._1._1, Isomers$dRequest$dDuplex$dParser.functorParser.map(Control$dSemigroupoid.semigroupoidFn.compose(f))(m._1._2)),
    m._2
  )
};
const categoryRouteAccum = /* #__PURE__ */ (() => (
  {identity: $Accum(Isomers$dRequest$dDuplex$dType.applicativeRequestDuplex.pure(identity), identity), Semigroupoid0: () => semigroupoidRouteAccum}
))();
const applyAccum = {
  apply: v => v1 => $Accum(
    Isomers$dRequest$dDuplex$dType.applyRequestDuplex.apply(Isomers$dRequest$dDuplex$dType.$Duplex(
      v._1._1,
      Isomers$dRequest$dDuplex$dParser.functorParser.map(Control$dApply.applyFn.apply)(v._1._2)
    ))(v1._1),
    v._2
  ),
  Functor0: () => functorAccum
};
export {
  $Accum,
  Accum,
  RouteAccum,
  applyAccum,
  categoryRouteAccum,
  functorAccum,
  hcons,
  hnil,
  identity,
  imapRoute,
  insert,
  insertFlipped,
  insertReq,
  isoAccum,
  newtypeAccum,
  parse,
  pass,
  path,
  prefix,
  print,
  profunctorAccum,
  rootDuplex,
  scalar,
  scalarFlipped,
  semigroupoidRouteAccum,
  tupleCons,
  unRootDuplex,
  unifyRoute,
  withAccept,
  withMethod
};
