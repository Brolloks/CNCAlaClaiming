import * as Data$dEither from "../Data.Either/index.js";
import * as Polyform$dBatteries from "../Polyform.Batteries/index.js";
const isNotEmpty = () => dictIsSymbol => dictMonoid => {
  const mempty = dictMonoid.mempty;
  return dictEq => dictApplicative => l => msg => x => dictApplicative.pure(!dictEq.eq(x)(mempty)
    ? Data$dEither.$Either("Right", x)
    : Data$dEither.$Either(
        "Left",
        Polyform$dBatteries.error()(dictIsSymbol)(l)((() => {
          const $0 = msg(x);
          return v => $0;
        })())()
      ));
};
const isEmpty = () => dictIsSymbol => dictEq => dictMonoid => {
  const mempty = dictMonoid.mempty;
  return dictApplicative => l => msg => x => dictApplicative.pure(dictEq.eq(x)(mempty)
    ? Data$dEither.$Either("Right", x)
    : Data$dEither.$Either("Left", Polyform$dBatteries.error()(dictIsSymbol)(l)(msg)(x)));
};
export {isEmpty, isNotEmpty};
