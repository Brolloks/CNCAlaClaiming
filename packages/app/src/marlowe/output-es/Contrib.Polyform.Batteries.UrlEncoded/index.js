import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Polyform$dBatteries$dUrlEncoded$dTypes$dErrors from "../Polyform.Batteries.UrlEncoded.Types.Errors/index.js";
import * as Polyform$dValidator from "../Polyform.Validator/index.js";
const requiredV = dictMonad => {
  const $0 = dictMonad.Applicative0();
  return msg => v => i => dictMonad.Bind1().bind($0.pure((() => {
    if (i.tag === "Nothing") { return Data$dEither.$Either("Left", [msg]); }
    if (i.tag === "Just") { return Data$dEither.$Either("Right", i._1); }
    $runtime.fail();
  })()))(res$p => {
    if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
    if (res$p.tag === "Right") { return v(res$p._1); }
    $runtime.fail();
  });
};
const requiredV$p = dictMonad => {
  const $0 = dictMonad.Applicative0();
  return v => i => dictMonad.Bind1().bind($0.pure((() => {
    if (i.tag === "Nothing") { return Data$dEither.$Either("Left", ["This field is required"]); }
    if (i.tag === "Just") { return Data$dEither.$Either("Right", i._1); }
    $runtime.fail();
  })()))(res$p => {
    if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
    if (res$p.tag === "Right") { return v(res$p._1); }
    $runtime.fail();
  });
};
const fieldForm = dictMonad => {
  const $0 = dictMonad.Applicative0();
  return name => fieldValidator => Polyform$dValidator.lmapValidator(dictMonad)(Polyform$dBatteries$dUrlEncoded$dTypes$dErrors.singleton(name))(i => dictMonad.Bind1().bind($0.pure(Data$dEither.$Either(
    "Right",
    (() => {
      const $1 = Data$dMap$dInternal.lookup(Data$dOrd.ordString)(name)(i);
      if ($1.tag === "Just") { return Data$dArray.index($1._1)(0); }
      if ($1.tag === "Nothing") { return Data$dMaybe.Nothing; }
      $runtime.fail();
    })()
  )))(res$p => {
    if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
    if (res$p.tag === "Right") { return fieldValidator(res$p._1); }
    $runtime.fail();
  }));
};
export {fieldForm, requiredV, requiredV$p};
