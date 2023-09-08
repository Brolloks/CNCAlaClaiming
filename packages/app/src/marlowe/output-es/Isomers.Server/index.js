import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Isomers$dRequest$dDuplex$dParser from "../Isomers.Request.Duplex.Parser/index.js";
import * as Isomers$dResponse$dDuplex$dPrinter from "../Isomers.Response.Duplex.Printer/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
const $RouterStep = (_1, _2) => ({tag: "RouterStep", _1, _2});
const $RoutingError = _1 => ({tag: "NotFound", _1});
const ServerResponseWrapper = x => x;
const NotFound = value0 => $RoutingError(value0);
const RouterStep = value0 => value1 => $RouterStep(value0, value1);
const Router = x => x;
const semigroupRouter = dictMonad => (
  {
    append: v => v1 => req => dictMonad.Bind1().bind(v(req))(v2 => {
      if (v2.tag === "Left") { return v1(req); }
      return dictMonad.Applicative0().pure(v2);
    })
  }
);
const monoidRouter = dictMonad => {
  const semigroupRouter1 = {
    append: v => v1 => req => dictMonad.Bind1().bind(v(req))(v2 => {
      if (v2.tag === "Left") { return v1(req); }
      return dictMonad.Applicative0().pure(v2);
    })
  };
  return {
    mempty: (() => {
      const $0 = dictMonad.Applicative0().pure(Data$dEither.$Either("Left", $RoutingError(Isomers$dRequest$dDuplex$dParser.EndOfPath)));
      return v => $0;
    })(),
    Semigroup0: () => semigroupRouter1
  };
};
const genericRoutingError_ = {to: x => $RoutingError(x), from: x => x._1};
const showRoutingError = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor({genericShowArgs: v => [Isomers$dRequest$dDuplex$dParser.showParsingError.show(v)]})({reflectSymbol: () => "NotFound"});
    return x => $0["genericShow'"](x._1);
  })()
};
const eqRoutingError = {eq: x => y => Isomers$dRequest$dDuplex$dParser.eqParsingError.eq(x._1)(y._1)};
const routerFoldingRec = dictIsSymbol => () => () => dictHFoldlWithIndex => (
  {
    foldingWithIndex: v => prop => v1 => req => dictHFoldlWithIndex.hfoldlWithIndex($RouterStep(
      Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(prop))(v._1),
      Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(prop))(v._2)
    ))()(req)
  }
);
const routerFoldingNewtypeRec = dictIsSymbol => () => () => () => () => () => dictHFoldlWithIndex => (
  {
    foldingWithIndex: v => prop => v1 => req => dictHFoldlWithIndex.hfoldlWithIndex($RouterStep(
      Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(prop))(v._1),
      Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(prop))(v._2)
    ))()(req)
  }
);
const routerFoldingFun = dictIsSymbol => () => () => dictMonad => (
  {
    foldingWithIndex: v => prop => v1 => req => {
      const resDpl = Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(prop))(v._2);
      return dictMonad.Bind1().bind(Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(prop))(v._1)(req))(res => dictMonad.Applicative0().pure(resDpl._1(res)(Isomers$dResponse$dDuplex$dPrinter.defaultResponse)));
    }
  }
);
const newtypeServerResponseWrapper = {Coercible0: () => {}};
const router = dictHFoldlWithIndex => dictMonadAff => {
  const Monad0 = dictMonadAff.MonadEffect0().Monad0();
  const Bind1 = Monad0.Bind1();
  return v => handlers => {
    const $0 = v.request;
    const handle = dictHFoldlWithIndex.hfoldlWithIndex($RouterStep(handlers, v.response))();
    return raw => Bind1.bind(dictMonadAff.liftAff(Isomers$dRequest$dDuplex$dParser.run($0._2)(raw)))(v1 => {
      if (v1.tag === "Right") { return Bind1.Apply0().Functor0().map(x => Data$dEither.$Either("Right", x))(handle(v1._1)); }
      if (v1.tag === "Left") { return Monad0.Applicative0().pure(Data$dEither.$Either("Left", $RoutingError(v1._1))); }
      $runtime.fail();
    });
  };
};
export {
  $RouterStep,
  $RoutingError,
  NotFound,
  Router,
  RouterStep,
  ServerResponseWrapper,
  eqRoutingError,
  genericRoutingError_,
  monoidRouter,
  newtypeServerResponseWrapper,
  router,
  routerFoldingFun,
  routerFoldingNewtypeRec,
  routerFoldingRec,
  semigroupRouter,
  showRoutingError
};
