import * as $runtime from "../runtime.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Polyform$dDual from "../Polyform.Dual/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const identity = x => x;
const unit$p = dictApplicative => dictApplicative1 => i => Polyform$dDual.$DualD(
  dictApplicative.pure(),
  (() => {
    const $0 = dictApplicative1.pure(i);
    return v => $0;
  })()
);
const unit = dictApplicative => {
  const applicativeDualD = Polyform$dDual.applicativeDualD(dictApplicative);
  return dictApplicative1 => {
    const applicativeDualD1 = applicativeDualD(dictApplicative1);
    return dictMonoid => applicativeDualD1(dictMonoid).pure();
  };
};
const noArgs$p = dictApplicative => dictApplicative1 => i => Polyform$dDual.$DualD(
  dictApplicative.pure(Data$dGeneric$dRep.NoArguments),
  (() => {
    const $0 = dictApplicative1.pure(i);
    return v => $0;
  })()
);
const noArgs = dictApplicative => {
  const applicativeDualD = Polyform$dDual.applicativeDualD(dictApplicative);
  return dictApplicative1 => {
    const applicativeDualD1 = applicativeDualD(dictApplicative1);
    return dictMonoid => applicativeDualD1(dictMonoid).pure(Data$dGeneric$dRep.NoArguments);
  };
};
const gDualProduct = {gDualCtr: dictFunctor => identity};
const gDualNoArguments = {gDualCtr: dictFunctor => identity};
const gDualCtr = dict => dict.gDualCtr;
const gDualConstructor = dictIsSymbol => () => dictGDualCtr => (
  {
    gDual: dictFunctor => dictAlt => {
      const Functor0 = dictAlt.Functor0();
      const gDualCtr2 = dictGDualCtr.gDualCtr(Functor0);
      return pre => {
        const pre1 = pre(dictIsSymbol);
        return r => {
          const v = pre1(Type$dProxy.Proxy)(gDualCtr2(Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(r)));
          return Polyform$dDual.$DualD(Functor0.map(Data$dGeneric$dRep.Constructor)(v._1), v1 => v._2(v1));
        };
      };
    }
  }
);
const gDualArgument = {gDualCtr: dictFunctor => identity};
const gDualAll = {gDualCtr: dictFunctor => v => Polyform$dDual.$DualD(dictFunctor.map(Data$dGeneric$dRep.Argument)(v._1), v1 => v._2(v1))};
const gDual = dict => dict.gDual;
const gDualSum = dictGDualSum => dictGDualSum1 => (
  {
    gDual: dictFunctor => dictAlt => {
      const Functor0 = dictAlt.Functor0();
      const gDual3 = dictGDualSum.gDual(Functor0)(dictAlt);
      const gDual4 = dictGDualSum1.gDual(Functor0)(dictAlt);
      return pre => r => {
        const v = gDual3(dictIsSymbol => pre(dictIsSymbol))(r);
        const v1 = gDual4(dictIsSymbol => pre(dictIsSymbol))(r);
        return Polyform$dDual.$DualD(
          dictAlt.alt(Functor0.map(Data$dGeneric$dRep.Inl)(v._1))(Functor0.map(Data$dGeneric$dRep.Inr)(v1._1)),
          v2 => {
            if (v2.tag === "Inl") { return v._2(v2._1); }
            if (v2.tag === "Inr") { return v1._2(v2._1); }
            $runtime.fail();
          }
        );
      };
    }
  }
);
const sum = dictGeneric => {
  const to = dictGeneric.to;
  return dictGDualSum => dictFunctor => dictAlt => {
    const Functor0 = dictAlt.Functor0();
    const gDual2 = dictGDualSum.gDual(Functor0)(dictAlt);
    return dictProfunctor => pre => {
      const $0 = gDual2(dictIsSymbol => pre(dictIsSymbol));
      return x => {
        const $1 = $0(x);
        return Polyform$dDual.$DualD(Functor0.map(to)($1._1), x$1 => $1._2(dictGeneric.from(x$1)));
      };
    };
  };
};
export {gDual, gDualAll, gDualArgument, gDualConstructor, gDualCtr, gDualNoArguments, gDualProduct, gDualSum, identity, noArgs, noArgs$p, sum, unit, unit$p};
