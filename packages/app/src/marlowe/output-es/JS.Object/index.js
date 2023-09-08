// | By using helpers from this module you should be able to bind to JS object
// | methods without actually writing any JS.
// | Please use curring when using `runEffectMth*` so your binding can stay performant.
// | When you pass the symbol to a particular helper it compiles down to a single function call
// | (reflection of the `Symbol` value and other dicts are resolved and allready applied to it):
// | ```
// | type Counter = JSObject (increase :: EffectMth0 Unit)
// |
// | increase :: Counter -> Effect Unit
// | increase = runEffectMth1 (Proxy :: Proxy "increase")
// | ```
import * as Effect$dUncurried from "../Effect.Uncurried/index.js";
import {
  unsafeRunEffectMth0,
  unsafeRunEffectMth1,
  unsafeRunEffectMth2,
  unsafeRunEffectMth3,
  unsafeRunEffectMth4,
  unsafeRunEffectMth5,
  unsafeRunEffectMth6,
  unsafeRunEffectMth7,
  unsafeRunEffectProp
} from "./foreign.js";
const runEffectProp = dictIsSymbol => () => m => Effect$dUncurried.runEffectFn2(unsafeRunEffectProp)(dictIsSymbol.reflectSymbol(m));
const runEffectMth7 = dictIsSymbol => () => m => Effect$dUncurried.runEffectFn9(unsafeRunEffectMth7)(dictIsSymbol.reflectSymbol(m));
const runEffectMth6 = dictIsSymbol => () => m => Effect$dUncurried.runEffectFn8(unsafeRunEffectMth6)(dictIsSymbol.reflectSymbol(m));
const runEffectMth5 = dictIsSymbol => () => m => Effect$dUncurried.runEffectFn7(unsafeRunEffectMth5)(dictIsSymbol.reflectSymbol(m));
const runEffectMth4 = dictIsSymbol => () => m => Effect$dUncurried.runEffectFn6(unsafeRunEffectMth4)(dictIsSymbol.reflectSymbol(m));
const runEffectMth3 = dictIsSymbol => () => m => Effect$dUncurried.runEffectFn5(unsafeRunEffectMth3)(dictIsSymbol.reflectSymbol(m));
const runEffectMth2 = dictIsSymbol => () => m => Effect$dUncurried.runEffectFn4(unsafeRunEffectMth2)(dictIsSymbol.reflectSymbol(m));
const runEffectMth1 = dictIsSymbol => () => m => Effect$dUncurried.runEffectFn3(unsafeRunEffectMth1)(dictIsSymbol.reflectSymbol(m));
const runEffectMth0 = dictIsSymbol => () => m => Effect$dUncurried.runEffectFn2(unsafeRunEffectMth0)(dictIsSymbol.reflectSymbol(m));
export {runEffectMth0, runEffectMth1, runEffectMth2, runEffectMth3, runEffectMth4, runEffectMth5, runEffectMth6, runEffectMth7, runEffectProp};
export * from "./foreign.js";
