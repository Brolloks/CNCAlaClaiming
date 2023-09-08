import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFoldableWithIndex from "../Data.FoldableWithIndex/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dSemigroup$dFoldable from "../Data.Semigroup.Foldable/index.js";
import * as Data$dVariant from "../Data.Variant/index.js";
const functorHomogeneous = {map: f => v => ({type: v.type, value: f(v.value)})};
const foldableHomogeneous = {
  foldl: f => z => v => f(z)(v.value),
  foldr: f => Data$dFoldable.foldrDefault(foldableHomogeneous)(f),
  foldMap: dictMonoid => f => foldableHomogeneous.foldl(acc => x => dictMonoid.Semigroup0().append(acc)(f(x)))(dictMonoid.mempty)
};
const foldableWithIndexStringHo = {
  foldlWithIndex: f => z => v => f(v.type)(z)(v.value),
  foldrWithIndex: f => Data$dFoldableWithIndex.foldrWithIndexDefault(foldableWithIndexStringHo)(f),
  foldMapWithIndex: dictMonoid => f => foldableWithIndexStringHo.foldlWithIndex(i => acc => x => dictMonoid.Semigroup0().append(acc)(f(i)(x)))(dictMonoid.mempty),
  Foldable0: () => foldableHomogeneous
};
const foldable1Homogeneous = {
  foldl1: v => v1 => v1.value,
  foldr1: v => Data$dSemigroup$dFoldable.foldr1Default(foldable1Homogeneous)(v),
  foldMap1: dictSemigroup => f => {
    const $0 = foldable1Homogeneous.foldl1(dictSemigroup.append);
    return x => $0({type: x.type, value: f(x.value)});
  },
  Foldable0: () => foldableHomogeneous
};
const extendHomogeneous = {extend: f => v => ({type: v.type, value: f(v)}), Functor0: () => functorHomogeneous};
const comonadHomogeneous = {extract: v => v.value, Extend0: () => extendHomogeneous};
const homogeneous$p = () => x => x;
const homogeneous = () => x => x;
const fromHomogeneous = () => v => v;
const eqHomogeneous = () => dictEq => () => dictVariantTags => dictVariantEqs => ({eq: h1 => h2 => Data$dVariant.eqVariant()(dictVariantTags)(dictVariantEqs).eq(h1)(h2)});
const ordHomogeneous = () => dictOrd => {
  const eqHomogeneous2 = eqHomogeneous()(dictOrd.Eq0())();
  return () => dictVariantTags => {
    const eqHomogeneous3 = eqHomogeneous2(dictVariantTags);
    return dictVariantEqs => {
      const ordVariant2 = Data$dVariant.ordVariant()(dictVariantTags)(dictVariantEqs);
      const eqHomogeneous4 = eqHomogeneous3(dictVariantEqs);
      return dictVariantOrds => ({compare: h1 => h2 => ordVariant2(dictVariantOrds).compare(h1)(h2), Eq0: () => eqHomogeneous4});
    };
  };
};
const boundedHomogeneous = () => () => dictOrd => {
  const ordHomogeneous2 = ordHomogeneous()(dictOrd)();
  return () => dictVariantTags => {
    const ordHomogeneous3 = ordHomogeneous2(dictVariantTags);
    return dictVariantEqs => {
      const boundedVariant2 = Data$dVariant.boundedVariant()(dictVariantTags)(dictVariantEqs);
      const ordHomogeneous4 = ordHomogeneous3(dictVariantEqs);
      return dictVariantOrds => {
        const boundedVariant3 = boundedVariant2(dictVariantOrds);
        const ordHomogeneous5 = ordHomogeneous4(dictVariantOrds);
        return dictVariantBounded => {
          const boundedVariant4 = boundedVariant3(dictVariantBounded);
          return {top: boundedVariant4.top, bottom: boundedVariant4.bottom, Ord0: () => ordHomogeneous5};
        };
      };
    };
  };
};
const enumHomogeneous = () => () => dictOrd => {
  const ordHomogeneous2 = ordHomogeneous()(dictOrd)();
  return () => dictVariantTags => {
    const ordHomogeneous3 = ordHomogeneous2(dictVariantTags);
    return dictVariantEqs => {
      const enumVariant2 = Data$dVariant.enumVariant()(dictVariantTags)(dictVariantEqs);
      const ordHomogeneous4 = ordHomogeneous3(dictVariantEqs);
      return dictVariantOrds => {
        const enumVariant3 = enumVariant2(dictVariantOrds);
        const ordHomogeneous5 = ordHomogeneous4(dictVariantOrds);
        return dictVariantBoundedEnums => {
          const enumVariant4 = enumVariant3(dictVariantBoundedEnums);
          return {
            pred: h => {
              const $0 = enumVariant4.pred(h);
              if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0._1); }
              return Data$dMaybe.Nothing;
            },
            succ: h => {
              const $0 = enumVariant4.succ(h);
              if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0._1); }
              return Data$dMaybe.Nothing;
            },
            Ord0: () => ordHomogeneous5
          };
        };
      };
    };
  };
};
const boundedEnumHomogeneous = () => () => () => dictOrd => {
  const boundedHomogeneous2 = boundedHomogeneous()()(dictOrd)();
  const enumHomogeneous2 = enumHomogeneous()()(dictOrd)();
  return () => () => dictVariantTags => {
    const boundedHomogeneous3 = boundedHomogeneous2(dictVariantTags);
    const enumHomogeneous3 = enumHomogeneous2(dictVariantTags);
    return dictVariantEqs => {
      const boundedEnumVariant2 = Data$dVariant.boundedEnumVariant()(dictVariantTags)(dictVariantEqs);
      const boundedHomogeneous4 = boundedHomogeneous3(dictVariantEqs);
      const enumHomogeneous4 = enumHomogeneous3(dictVariantEqs);
      return dictVariantOrds => {
        const boundedEnumVariant3 = boundedEnumVariant2(dictVariantOrds);
        const boundedHomogeneous5 = boundedHomogeneous4(dictVariantOrds);
        const enumHomogeneous5 = enumHomogeneous4(dictVariantOrds);
        return dictVariantBoundedEnums => {
          const boundedEnumVariant4 = boundedEnumVariant3(dictVariantBoundedEnums);
          const boundedHomogeneous6 = boundedHomogeneous5(dictVariantBoundedEnums.VariantBounded0());
          const enumHomogeneous6 = enumHomogeneous5(dictVariantBoundedEnums);
          return {
            cardinality: boundedEnumVariant4.cardinality,
            fromEnum: h => boundedEnumVariant4.fromEnum(h),
            toEnum: i => {
              const $0 = boundedEnumVariant4.toEnum(i);
              if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0._1); }
              return Data$dMaybe.Nothing;
            },
            Bounded0: () => boundedHomogeneous6,
            Enum1: () => enumHomogeneous6
          };
        };
      };
    };
  };
};
const showHomogeneous = () => () => () => dictShow => dictVariantTags => dictVariantShows => (
  {show: v => "Homogeneous (" + Data$dVariant.showVariant()(dictVariantTags)(dictVariantShows).show(v) + ")"}
);
export {
  boundedEnumHomogeneous,
  boundedHomogeneous,
  comonadHomogeneous,
  enumHomogeneous,
  eqHomogeneous,
  extendHomogeneous,
  foldable1Homogeneous,
  foldableHomogeneous,
  foldableWithIndexStringHo,
  fromHomogeneous,
  functorHomogeneous,
  homogeneous,
  homogeneous$p,
  ordHomogeneous,
  showHomogeneous
};
