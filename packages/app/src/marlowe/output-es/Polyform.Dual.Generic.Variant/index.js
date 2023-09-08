import * as Partial from "../Partial/index.js";
import * as Polyform$dDual from "../Polyform.Dual/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const gDualVariantLast = dictIsSymbol => () => () => (
  {
    gDualV: dictAlt => dictFunctor => v => pre => {
      const pre1 = pre(dictIsSymbol);
      return duals => {
        const v1 = pre1(Type$dProxy.Proxy)(Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(duals));
        return Polyform$dDual.$DualD(
          dictAlt.Functor0().map(value => ({type: dictIsSymbol.reflectSymbol(Type$dProxy.Proxy), value}))(v1._1),
          r => {
            if (r.type === dictIsSymbol.reflectSymbol(Type$dProxy.Proxy)) { return v1._2(r.value); }
            return Partial._crashWith("Data.Variant: pattern match failure [" + r.type + "]");
          }
        );
      };
    }
  }
);
const gDualV = dict => dict.gDualV;
const gDualVariantCons = dictIsSymbol => () => () => () => () => () => dictGDualVariant => (
  {
    gDualV: dictAlt => {
      const Functor0 = dictAlt.Functor0();
      const gDualV2 = dictGDualVariant.gDualV(dictAlt)(Functor0);
      return dictFunctor => v => pre => {
        const pre1 = pre(dictIsSymbol);
        return duals => {
          const v1 = gDualV2(Type$dProxy.Proxy)(dictIsSymbol1 => pre(dictIsSymbol1))(Record$dUnsafe.unsafeDelete(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(duals));
          const v2 = pre1(Type$dProxy.Proxy)(Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(duals));
          return Polyform$dDual.$DualD(
            dictAlt.alt(Functor0.map(value => ({type: dictIsSymbol.reflectSymbol(Type$dProxy.Proxy), value}))(v2._1))(Functor0.map(Unsafe$dCoerce.unsafeCoerce)(v1._1)),
            r => {
              if (r.type === dictIsSymbol.reflectSymbol(Type$dProxy.Proxy)) { return v2._2(r.value); }
              return v1._2(r);
            }
          );
        };
      };
    }
  }
);
const variant = () => dictAlt => {
  const Functor0 = dictAlt.Functor0();
  return dictFunctor => dictGDualVariant => {
    const gDualV1 = dictGDualVariant.gDualV(dictAlt)(Functor0);
    return pre => duals => gDualV1(Type$dProxy.Proxy)(dictIsSymbol => pre(dictIsSymbol))(duals);
  };
};
export {gDualV, gDualVariantCons, gDualVariantLast, variant};
