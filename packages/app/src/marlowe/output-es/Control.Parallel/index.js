import * as Data$dFoldable from "../Data.Foldable/index.js";
const identity = x => x;
const parTraverse_ = dictParallel => {
  const traverse_ = Data$dFoldable.traverse_(dictParallel.Applicative1());
  return dictFoldable => {
    const traverse_1 = traverse_(dictFoldable);
    return f => {
      const $0 = traverse_1(x => dictParallel.parallel(f(x)));
      return x => dictParallel.sequential($0(x));
    };
  };
};
const parTraverse = dictParallel => {
  const Applicative1 = dictParallel.Applicative1();
  return dictTraversable => {
    const traverse = dictTraversable.traverse(Applicative1);
    return f => {
      const $0 = traverse(x => dictParallel.parallel(f(x)));
      return x => dictParallel.sequential($0(x));
    };
  };
};
const parSequence_ = dictParallel => {
  const parTraverse_1 = parTraverse_(dictParallel);
  return dictFoldable => parTraverse_1(dictFoldable)(identity);
};
const parSequence = dictParallel => {
  const Applicative1 = dictParallel.Applicative1();
  return dictTraversable => {
    const $0 = dictTraversable.traverse(Applicative1)(x => dictParallel.parallel(x));
    return x => dictParallel.sequential($0(x));
  };
};
const parOneOfMap = dictParallel => dictAlternative => {
  const Plus1 = dictAlternative.Plus1();
  return dictFoldable => {
    const empty = Plus1.empty;
    return dictFunctor => f => {
      const $0 = dictFoldable.foldr(x => Plus1.Alt0().alt(dictParallel.parallel(f(x))))(empty);
      return x => dictParallel.sequential($0(x));
    };
  };
};
const parOneOf = dictParallel => dictAlternative => {
  const Plus1 = dictAlternative.Plus1();
  return dictFoldable => {
    const empty = Plus1.empty;
    return dictFunctor => {
      const $0 = dictFoldable.foldr(x => Plus1.Alt0().alt(dictParallel.parallel(x)))(empty);
      return x => dictParallel.sequential($0(x));
    };
  };
};
const parApply = dictParallel => mf => ma => dictParallel.sequential(dictParallel.Applicative1().Apply0().apply(dictParallel.parallel(mf))(dictParallel.parallel(ma)));
export {identity, parApply, parOneOf, parOneOfMap, parSequence, parSequence_, parTraverse, parTraverse_};
