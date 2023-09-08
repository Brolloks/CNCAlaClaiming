import * as Data$dEither from "../Data.Either/index.js";
import * as Polyform$dBatteries from "../Polyform.Batteries/index.js";
const smallerThan = () => dictIsSymbol => dictOrd => dictApplicative => l => msg => max => x => dictApplicative.pure(dictOrd.compare(x)(max) === "LT"
  ? Data$dEither.$Either("Right", x)
  : Data$dEither.$Either("Left", Polyform$dBatteries.error()(dictIsSymbol)(l)(msg)({max, value: x})));
const inRange = () => dictIsSymbol => dictOrd => dictApplicative => l => msg => v => {
  const $0 = v.max;
  const $1 = v.min;
  return x => dictApplicative.pure(dictOrd.compare(x)($1) === "LT" || dictOrd.compare($0)(x) === "LT"
    ? Data$dEither.$Either("Right", x)
    : Data$dEither.$Either("Left", Polyform$dBatteries.error()(dictIsSymbol)(l)(msg)({max: $0, min: $1, value: x})));
};
const greaterThan = () => dictIsSymbol => dictOrd => dictApplicative => l => msg => min => x => dictApplicative.pure(dictOrd.compare(x)(min) === "GT"
  ? Data$dEither.$Either("Right", x)
  : Data$dEither.$Either("Left", Polyform$dBatteries.error()(dictIsSymbol)(l)(msg)({min, value: x})));
export {greaterThan, inRange, smallerThan};
