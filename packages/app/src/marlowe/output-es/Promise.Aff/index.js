import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Effect$dUncurried from "../Effect.Uncurried/index.js";
import * as Foreign from "../Foreign/index.js";
import * as Promise$dInternal from "../Promise.Internal/index.js";
import * as Promise$dRejection from "../Promise.Rejection/index.js";
const toAff$p = customCoerce => p => Effect$dAff.makeAff(cb => () => {
  Promise$dInternal.thenOrCatch(
    $0 => {
      const $1 = cb(Data$dEither.$Either("Right", $0));
      const a$p = $1();
      return Promise$dInternal.resolve(a$p);
    },
    $0 => {
      const $1 = cb(Data$dEither.$Either("Left", customCoerce($0)));
      const a$p = $1();
      return Promise$dInternal.resolve(a$p);
    },
    p
  );
  return Effect$dAff.nonCanceler;
});
const fromAff = () => aff => () => Promise$dInternal.new((onResolve, onReject) => {
  const $0 = Effect$dUncurried.runEffectFn1(onResolve);
  const $1 = Effect$dUncurried.runEffectFn1(onReject);
  const $2 = Effect$dAff.runAff(v2 => {
    if (v2.tag === "Left") { return $1(Promise$dRejection.fromError(v2._1)); }
    if (v2.tag === "Right") { return $0(v2._1); }
    $runtime.fail();
  })(aff);
  $2();
});
const coerce = rej => {
  const $0 = Promise$dRejection._toError(Data$dMaybe.Just, Data$dMaybe.Nothing, rej);
  const $1 = Foreign.unsafeReadTagged(Data$dIdentity.monadIdentity)("String")(rej);
  const $2 = (() => {
    const $2 = (() => {
      if ($1.tag === "Left") { return Data$dMaybe.Nothing; }
      if ($1.tag === "Right") { return Data$dMaybe.$Maybe("Just", Effect$dException.error($1._1)); }
      $runtime.fail();
    })();
    if ($0.tag === "Nothing") { return $2; }
    return $0;
  })();
  if ($2.tag === "Nothing") { return Effect$dException.error("Promise failed, couldn't extract JS Error or String"); }
  if ($2.tag === "Just") { return $2._1; }
  $runtime.fail();
};
const toAff = /* #__PURE__ */ toAff$p(coerce);
const toAffE = f => Effect$dAff._bind(Effect$dAff._liftEffect(f))(toAff$p(coerce));
export {coerce, fromAff, toAff, toAff$p, toAffE};
