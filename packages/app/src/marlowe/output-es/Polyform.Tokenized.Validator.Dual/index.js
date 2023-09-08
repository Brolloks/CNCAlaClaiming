import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Polyform$dTokenized$dDual from "../Polyform.Tokenized.Dual/index.js";
import * as Polyform$dTokenized$dValidator from "../Polyform.Tokenized.Validator/index.js";
const runValidator = dictMonad => {
  const $0 = Polyform$dTokenized$dValidator.run(dictMonad.Bind1().Apply0().Functor0());
  return x => $0(x._1);
};
const runSerializer = dictApplicative => x => x$1 => x._2(x$1);
const liftUntokenized = dictSemigroup => dictMonad => {
  const liftUntokenized1 = Polyform$dTokenized$dValidator.liftUntokenized(dictMonad)(dictSemigroup);
  return err => d => Polyform$dTokenized$dDual.$DualD(liftUntokenized1(err)(d._1), x => Data$dList$dTypes.$List("Cons", d._2(x), Data$dList$dTypes.Nil));
};
const end = dictMonad => {
  const end1 = Polyform$dTokenized$dValidator.end(dictMonad);
  return dictMonoid => {
    const end2 = end1(dictMonoid.Semigroup0());
    return err => Polyform$dTokenized$dDual.$DualD(end2(err), v => Data$dList$dTypes.Nil);
  };
};
export {end, liftUntokenized, runSerializer, runValidator};
