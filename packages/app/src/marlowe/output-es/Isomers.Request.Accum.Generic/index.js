import * as Isomers$dRequest$dAccum$dType from "../Isomers.Request.Accum.Type/index.js";
import * as Isomers$dRequest$dAccum$dVariant from "../Isomers.Request.Accum.Variant/index.js";
const identity = x => x;
const VariantStep = x => x;
const variant = dictHFoldlAccumVariant => prefixRoutes => rec => dictHFoldlAccumVariant.HFoldlWithIndex0().hfoldlWithIndex(dictIsSymbol => l => {
  if (prefixRoutes) { return Isomers$dRequest$dAccum$dType.prefix(dictIsSymbol.reflectSymbol(l)); }
  return identity;
})(Isomers$dRequest$dAccum$dVariant.empty)(rec);
const hfoldlVariantStep = dictHFoldlWithIndex => ({HFoldlWithIndex0: () => dictHFoldlWithIndex});
const foldingVariantStepAccum = () => () => () => dictIsSymbol => (
  {foldingWithIndex: v => l => vd => d => Isomers$dRequest$dAccum$dVariant.injInto(dictIsSymbol)()()()(l)(v(dictIsSymbol)(l)(d))(vd)}
);
export {VariantStep, foldingVariantStepAccum, hfoldlVariantStep, identity, variant};
