import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dSemigroup from "../Data.Semigroup/index.js";
import * as Polyform$dBatteries from "../Polyform.Batteries/index.js";
import * as Polyform$dBatteries$dJson$dValidators from "../Polyform.Batteries.Json.Validators/index.js";
import * as Polyform$dTokenized$dValidator$dDual from "../Polyform.Tokenized.Validator.Dual/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const error2 = /* #__PURE__ */ Polyform$dBatteries$dJson$dValidators.error()({reflectSymbol: () => "endExpected"});
const item = dictMonad => Polyform$dTokenized$dValidator$dDual.liftUntokenized(Data$dSemigroup.semigroupArray)(dictMonad)([
  {path: Data$dList$dTypes.Nil, errors: Polyform$dBatteries.error()({reflectSymbol: () => "fieldMissing"})(Type$dProxy.Proxy)(v => "Unexpected end of input")("<tokenized index>")}
]);
const end = dictMonad => Polyform$dTokenized$dValidator$dDual.end(dictMonad)(Data$dMonoid.monoidArray)(error2(Type$dProxy.Proxy)(v => "Expecting an end of input"));
export {end, error2, item};
