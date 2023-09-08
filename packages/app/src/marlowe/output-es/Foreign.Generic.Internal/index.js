import * as Control$dMonad$dExcept$dTrans from "../Control.Monad.Except.Trans/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dNonEmpty from "../Data.NonEmpty/index.js";
import * as Foreign from "../Foreign/index.js";
const pure = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.applicativeExceptT(Data$dIdentity.monadIdentity).pure)();
const isObject = v => Foreign.tagOf(v) === "Object";
const readObject = value => {
  if (Foreign.tagOf(value) === "Object") { return pure(value); }
  return Control$dMonad$dExcept$dTrans.monadThrowExceptT(Data$dIdentity.monadIdentity).throwError(Data$dNonEmpty.$NonEmpty(
    Foreign.$ForeignError("TypeMismatch", "Object", Foreign.tagOf(value)),
    Data$dList$dTypes.Nil
  ));
};
export {isObject, pure, readObject};
