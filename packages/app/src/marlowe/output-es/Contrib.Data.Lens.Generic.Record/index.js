import * as Data$dLens$dIso$dNewtype from "../Data.Lens.Iso.Newtype/index.js";
import * as Data$dLens$dRecord from "../Data.Lens.Record/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const $MkLensesStep = () => ({tag: "MkLensesStep"});
const $MkNewtyped1LensesStep = () => ({tag: "MkNewtyped1LensesStep"});
const $MkNewtypedLensesStep = () => ({tag: "MkNewtypedLensesStep"});
const MkNewtypedLensesStep = /* #__PURE__ */ $MkNewtypedLensesStep();
const MkNewtyped1LensesStep = /* #__PURE__ */ $MkNewtyped1LensesStep();
const MkLensesStep = /* #__PURE__ */ $MkLensesStep();
const foldingWithIndexMkNewtype = dictIsSymbol => () => () => () => () => dictStrong => {
  const _Newtype1 = Data$dLens$dIso$dNewtype._Newtype()()(dictStrong.Profunctor0());
  return {
    foldingWithIndex: v => l => acc => v1 => Record$dUnsafe.unsafeSet(dictIsSymbol.reflectSymbol(l))(x => _Newtype1(Data$dLens$dRecord.prop(dictIsSymbol)()()(l)(dictStrong)(x)))(acc)
  };
};
const foldingWithIndexMkNewtype1 = dictIsSymbol => () => () => () => () => dictStrong => {
  const _Newtype1 = Data$dLens$dIso$dNewtype._Newtype()()(dictStrong.Profunctor0());
  return {
    foldingWithIndex: v => l => acc => v1 => Record$dUnsafe.unsafeSet(dictIsSymbol.reflectSymbol(l))(x => _Newtype1(Data$dLens$dRecord.prop(dictIsSymbol)()()(l)(dictStrong)(x)))(acc)
  };
};
const foldingWithIndexMkLensesS = dictIsSymbol => () => () => () => () => dictStrong => (
  {foldingWithIndex: v => l => acc => v1 => Record$dUnsafe.unsafeSet(dictIsSymbol.reflectSymbol(l))(Data$dLens$dRecord.prop(dictIsSymbol)()()(l)(dictStrong))(acc)}
);
const mkNewtypedLenses = dictStrong => () => () => dictHFoldlWithIndex => v => dictHFoldlWithIndex.hfoldlWithIndex(MkNewtypedLensesStep)({})(Type$dProxy.Proxy);
const mkNewtyped1Lenses = dictStrong => () => () => dictHFoldlWithIndex => v => dictHFoldlWithIndex.hfoldlWithIndex(MkNewtyped1LensesStep)({})(Type$dProxy.Proxy);
const mkLenses = dictStrong => () => dictHFoldlWithIndex => v => dictHFoldlWithIndex.hfoldlWithIndex(MkLensesStep)({})(Type$dProxy.Proxy);
export {
  $MkLensesStep,
  $MkNewtyped1LensesStep,
  $MkNewtypedLensesStep,
  MkLensesStep,
  MkNewtyped1LensesStep,
  MkNewtypedLensesStep,
  foldingWithIndexMkLensesS,
  foldingWithIndexMkNewtype,
  foldingWithIndexMkNewtype1,
  mkLenses,
  mkNewtyped1Lenses,
  mkNewtypedLenses
};
