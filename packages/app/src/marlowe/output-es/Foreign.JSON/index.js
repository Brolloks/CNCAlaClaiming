import * as $runtime from "../runtime.js";
import * as Control$dMonad$dExcept$dTrans from "../Control.Monad.Except.Trans/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dNonEmpty from "../Data.NonEmpty/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Effect$dUncurried from "../Effect.Uncurried/index.js";
import * as Foreign from "../Foreign/index.js";
import {parseJSONImpl} from "./foreign.js";
const parseJSON = /* #__PURE__ */ (() => {
  const $0 = Effect$dUncurried.runEffectFn1(parseJSONImpl);
  return x => {
    const $1 = (() => {
      const $1 = $0(x);
      return Effect$dException.catchException(x$1 => () => Data$dEither.$Either("Left", x$1))(() => {
        const a$p = $1();
        return Data$dEither.$Either("Right", a$p);
      });
    })()();
    if ($1.tag === "Left") {
      return Data$dEither.$Either("Left", Data$dNonEmpty.$NonEmpty(Foreign.$ForeignError("ForeignError", Effect$dException.message($1._1)), Data$dList$dTypes.Nil));
    }
    if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1); }
    $runtime.fail();
  };
})();
const decodeJSONWith = f => {
  const $0 = Control$dMonad$dExcept$dTrans.bindExceptT(Data$dIdentity.monadIdentity);
  return a => $0.bind(parseJSON(a))(f);
};
export {decodeJSONWith, parseJSON};
export * from "./foreign.js";
