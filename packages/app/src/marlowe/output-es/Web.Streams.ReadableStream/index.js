import * as $runtime from "../runtime.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dUncurried from "../Effect.Uncurried/index.js";
import {_new, _tee, cancel, getReader, locked} from "./foreign.js";
const tee = /* #__PURE__ */ Effect$dUncurried.runEffectFn2(_tee)(Data$dTuple.Tuple);
const $$new = source => strategy => {
  const $0 = (() => {
    if (strategy.tag === "Nothing") { return Data$dNullable.null; }
    if (strategy.tag === "Just") { return Data$dNullable.notNull(strategy._1); }
    $runtime.fail();
  })();
  return () => _new(source, $0);
};
export {$$new as new, tee};
export * from "./foreign.js";
