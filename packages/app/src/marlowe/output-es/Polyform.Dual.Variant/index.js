import * as JS$dUnsafe$dStringify from "../JS.Unsafe.Stringify/index.js";
import * as Partial from "../Partial/index.js";
import * as Polyform$dDual from "../Polyform.Dual/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const on = () => dictIsSymbol => dictAlt => {
  const $0 = dictAlt.Functor0();
  return prefix => label => d => v => {
    const v1 = prefix(dictIsSymbol)(label)(d);
    return Polyform$dDual.$DualD(
      dictAlt.alt($0.map(value => ({type: dictIsSymbol.reflectSymbol(label), value}))(v1._1))($0.map(Unsafe$dCoerce.unsafeCoerce)(v._1)),
      r => {
        if (r.type === dictIsSymbol.reflectSymbol(label)) { return v1._2(r.value); }
        return v._2(r);
      }
    );
  };
};
const case_ = dictApplicative => Polyform$dDual.$DualD(
  v => Partial._crashWith("Dual.Variant.case_: trying to parse empty Variant"),
  i => Partial._crashWith("Dual.Variant.case_: serializing empty Variant: " + JS$dUnsafe$dStringify.unsafeStringify(i))
);
export {case_, on};
