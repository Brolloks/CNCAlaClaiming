import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Polyform$dBatteries from "../Polyform.Batteries/index.js";
const oneOf = () => dictIsSymbol => dictEq => dictApplicative => l => msg => arr => x => dictApplicative.pure(Data$dArray.elem(dictEq)(x)(arr)
  ? Data$dEither.$Either("Right", x)
  : Data$dEither.$Either("Left", Polyform$dBatteries.error()(dictIsSymbol)(l)(msg)({expected: arr, got: x})));
const missingFrom = () => dictIsSymbol => dictEq => dictApplicative => l => msg => arr => x => dictApplicative.pure(!Data$dArray.elem(dictEq)(x)(arr)
  ? Data$dEither.$Either("Right", x)
  : Data$dEither.$Either("Left", Polyform$dBatteries.error()(dictIsSymbol)(l)(msg)({unexpected: arr, got: x})));
const equalTo = () => dictIsSymbol => dictEq => dictApplicative => l => msg => expected => x => dictApplicative.pure(dictEq.eq(x)(expected)
  ? Data$dEither.$Either("Right", x)
  : Data$dEither.$Either("Left", Polyform$dBatteries.error()(dictIsSymbol)(l)(msg)({expected, got: x})));
const differentThan = () => dictIsSymbol => dictEq => dictApplicative => l => msg => a => {
  const $0 = Polyform$dBatteries.error()(dictIsSymbol)(l)(msg)(a);
  return x => dictApplicative.pure(!dictEq.eq(x)(a) ? Data$dEither.$Either("Right", x) : Data$dEither.$Either("Left", $0));
};
export {differentThan, equalTo, missingFrom, oneOf};
