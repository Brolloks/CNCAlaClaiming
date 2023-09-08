import * as $runtime from "../runtime.js";
import * as Effect$dException from "../Effect.Exception/index.js";
const liftEither = dictMonadEffect => {
  const pure1 = dictMonadEffect.Monad0().Applicative0().pure;
  return dictShow => v2 => {
    if (v2.tag === "Left") { return dictMonadEffect.liftEffect(Effect$dException.throwException(Effect$dException.error(dictShow.show(v2._1)))); }
    if (v2.tag === "Right") { return pure1(v2._1); }
    $runtime.fail();
  };
};
const bracket = acquire => release => action => () => {
  const resource = acquire();
  const b = Effect$dException.catchException(error => {
    const $0 = release(resource);
    return () => {
      $0();
      return Effect$dException.throwException(error)();
    };
  })(action(resource))();
  release(resource)();
  return b;
};
export {bracket, liftEither};
