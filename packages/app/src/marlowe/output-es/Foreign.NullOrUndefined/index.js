import * as $runtime from "../runtime.js";
import * as Control$dMonad$dExcept$dTrans from "../Control.Monad.Except.Trans/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Foreign from "../Foreign/index.js";
import {nullImpl, undefinedImpl} from "./foreign.js";
const pure = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.applicativeExceptT(Data$dIdentity.monadIdentity).pure)();
const $$undefined = undefinedImpl;
const readNullOrUndefined = v => v1 => {
  if (Foreign.isNull(v1) || Foreign.isUndefined(v1)) { return pure(Data$dMaybe.Nothing); }
  const $0 = v(v1);
  if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
  if ($0.tag === "Right") { return Data$dEither.$Either("Right", Data$dMaybe.$Maybe("Just", $0._1)); }
  $runtime.fail();
};
const $$null = nullImpl;
export {$$null as null, pure, readNullOrUndefined, $$undefined as undefined};
export * from "./foreign.js";
