import * as $runtime from "../runtime.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Routing$dDuplex from "../Routing.Duplex/index.js";
import * as Routing$dDuplex$dParser from "../Routing.Duplex.Parser/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const identity = x => x;
const noArgs = /* #__PURE__ */ (() => Routing$dDuplex.applicativeRouteDuplex.pure(Data$dGeneric$dRep.NoArguments))();
const gRouteProduct = {gRouteDuplexCtr: identity};
const gRouteNoArguments = {gRouteDuplexCtr: identity};
const gRouteDuplexCtr = dict => dict.gRouteDuplexCtr;
const product = dictGRouteDuplexCtr => v => l => {
  const v1 = dictGRouteDuplexCtr.gRouteDuplexCtr(l);
  return Routing$dDuplex.$RouteDuplex(
    v2 => {
      const $0 = v._1(v2._1);
      const $1 = v1._1(v2._2);
      return x => $1($0(x));
    },
    Routing$dDuplex$dParser.applyRouteParser.apply(Routing$dDuplex$dParser.functorRouteParser.map(Data$dGeneric$dRep.Product)(Routing$dDuplex$dParser.functorRouteParser.map(Data$dGeneric$dRep.Argument)(v._2)))(v1._2)
  );
};
const gRouteDuplex = dict => dict.gRouteDuplex;
const gRouteSum = dictGRouteDuplex => dictGRouteDuplex1 => (
  {
    gRouteDuplex: end$p => r => {
      const v = dictGRouteDuplex.gRouteDuplex(end$p)(r);
      const v1 = dictGRouteDuplex1.gRouteDuplex(end$p)(r);
      return Routing$dDuplex.$RouteDuplex(
        v2 => {
          if (v2.tag === "Inl") { return v._1(v2._1); }
          if (v2.tag === "Inr") { return v1._1(v2._1); }
          $runtime.fail();
        },
        Routing$dDuplex$dParser.altRouteParser.alt(Routing$dDuplex$dParser.functorRouteParser.map(Data$dGeneric$dRep.Inl)(v._2))(Routing$dDuplex$dParser.functorRouteParser.map(Data$dGeneric$dRep.Inr)(v1._2))
      );
    }
  }
);
const sum = dictGeneric => {
  const from = dictGeneric.from;
  const to = dictGeneric.to;
  return dictGRouteDuplex => {
    const $0 = dictGRouteDuplex.gRouteDuplex(Routing$dDuplex.end);
    return x => Routing$dDuplex.profunctorRouteDuplex.dimap(from)(to)($0(x));
  };
};
const sumPrefix = dictGeneric => {
  const from = dictGeneric.from;
  const to = dictGeneric.to;
  return dictGRouteDuplex => {
    const $0 = dictGRouteDuplex.gRouteDuplex(identity);
    return x => Routing$dDuplex.profunctorRouteDuplex.dimap(from)(to)($0(x));
  };
};
const gRouteConstructor = dictIsSymbol => () => dictGRouteDuplexCtr => (
  {
    gRouteDuplex: end$p => r => {
      const v = end$p(dictGRouteDuplexCtr.gRouteDuplexCtr(Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(r)));
      return Routing$dDuplex.$RouteDuplex(v1 => v._1(v1), Routing$dDuplex$dParser.functorRouteParser.map(Data$dGeneric$dRep.Constructor)(v._2));
    }
  }
);
const gRouteArgument = {gRouteDuplexCtr: identity};
const gRouteAll = {gRouteDuplexCtr: v => Routing$dDuplex.$RouteDuplex(v1 => v._1(v1), Routing$dDuplex$dParser.functorRouteParser.map(Data$dGeneric$dRep.Argument)(v._2))};
export {gRouteAll, gRouteArgument, gRouteConstructor, gRouteDuplex, gRouteDuplexCtr, gRouteNoArguments, gRouteProduct, gRouteSum, identity, noArgs, product, sum, sumPrefix};
