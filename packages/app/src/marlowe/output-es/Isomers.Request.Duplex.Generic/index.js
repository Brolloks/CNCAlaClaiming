import * as Isomers$dHTTP$dRequest$dMethod from "../Isomers.HTTP.Request.Method/index.js";
import * as Isomers$dRequest$dDuplex$dType from "../Isomers.Request.Duplex.Type/index.js";
import * as Isomers$dRequest$dDuplex$dVariant from "../Isomers.Request.Duplex.Variant/index.js";
const $MethodStep = () => ({tag: "MethodStep"});
const identity = x => x;
const VariantStep = x => x;
const MethodStep = /* #__PURE__ */ $MethodStep();
const variant = dictHFoldlVariantStep => prefixRoutes => rec => dictHFoldlVariantStep.HFoldlWithIndex0().hfoldlWithIndex(dictIsSymbol => l => {
  if (prefixRoutes) { return Isomers$dRequest$dDuplex$dType.prefix(dictIsSymbol.reflectSymbol(l)); }
  return identity;
})(Isomers$dRequest$dDuplex$dVariant.empty)(rec);
const mappingMethodStep = dictIsSymbol => () => (
  {
    mappingWithIndex: v => l => v1 => Isomers$dRequest$dDuplex$dType.withMethod(Isomers$dHTTP$dRequest$dMethod.toHTTPMethod({type: dictIsSymbol.reflectSymbol(l), value: undefined}))(v1)
  }
);
const hfoldlVariantStep = dictHFoldlWithIndex => ({HFoldlWithIndex0: () => dictHFoldlWithIndex});
const foldingVariantStepDuplex = () => () => () => () => dictIsSymbol => (
  {foldingWithIndex: v => l => vd => d => Isomers$dRequest$dDuplex$dVariant.injInto(dictIsSymbol)()()()(l)(v(dictIsSymbol)(l)(d))(vd)}
);
const byMethod = dictHMapWithIndex => dictHFoldlVariantStep => rec => dictHFoldlVariantStep.HFoldlWithIndex0().hfoldlWithIndex(dictIsSymbol => v => identity)(Isomers$dRequest$dDuplex$dVariant.empty)(dictHMapWithIndex.hmapWithIndex(MethodStep)(rec));
export {$MethodStep, MethodStep, VariantStep, byMethod, foldingVariantStepDuplex, hfoldlVariantStep, identity, mappingMethodStep, variant};
