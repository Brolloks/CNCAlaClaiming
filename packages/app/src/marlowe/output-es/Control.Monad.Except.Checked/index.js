// | ## Extensible checked exceptions with polymorphic variants
// |
// | This module provides helpers for using `Variant` with `ExceptT`. When
// | combined, we get a mechanism for extensible, checked exceptions. That
// | is, exceptions can be defined and used anywhere, and handled as needed.
// | Handling an exception eliminates it from the type, giving us proof
// | that it no longer occurs.
import * as $runtime from "../runtime.js";
import * as Control$dMonad$dExcept$dTrans from "../Control.Monad.Except.Trans/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dVariant from "../Data.Variant/index.js";
import * as Partial from "../Partial/index.js";
const safe = dictFunctor => dictFunctor.map(v2 => {
  if (v2.tag === "Left") { return Partial._crashWith("Data.Variant: pattern match failure [" + v2._1.type + "]"); }
  if (v2.tag === "Right") { return v2._1; }
  $runtime.fail();
});
const handleErrors = () => () => () => dictMonad => {
  const $0 = dictMonad.Bind1();
  const pure = dictMonad.Applicative0().pure;
  return cases => a => $0.bind(a)(v2 => {
    if (v2.tag === "Left") { return Data$dVariant.onMatch()()()(cases)(Data$dVariant.case_)(v2._1); }
    if (v2.tag === "Right") { return pure(v2._1); }
    $runtime.fail();
  });
};
const handleError = () => () => () => dictMonad => {
  const $0 = Control$dMonad$dExcept$dTrans.bindExceptT(dictMonad);
  const throwError = Control$dMonad$dExcept$dTrans.monadThrowExceptT(dictMonad).throwError;
  const pure = Control$dMonad$dExcept$dTrans.applicativeExceptT(dictMonad).pure;
  return cases => a => $0.bind(dictMonad.Bind1().bind(a)(a$1 => dictMonad.Applicative0().pure(Data$dEither.$Either("Right", a$1))))(v2 => {
    if (v2.tag === "Left") { return Data$dVariant.onMatch()()()(cases)(throwError)(v2._1); }
    if (v2.tag === "Right") { return pure(v2._1); }
    $runtime.fail();
  });
};
export {handleError, handleErrors, safe};
