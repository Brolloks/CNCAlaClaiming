import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
import * as JS$dUnsafe$dStringify from "../JS.Unsafe.Stringify/index.js";
const for_ = /* #__PURE__ */ Data$dFoldable.for_(Effect.applicativeEffect)(Data$dFoldable.foldableMaybe);
const handleStreamError = msg => possibleError => {
  const $0 = for_(possibleError)(err => {
    const $0 = Effect$dConsole.log(msg);
    return () => {
      $0();
      return Effect$dConsole.log(JS$dUnsafe$dStringify.unsafeStringify(err))();
    };
  });
  return () => {$0();};
};
export {for_, handleStreamError};
