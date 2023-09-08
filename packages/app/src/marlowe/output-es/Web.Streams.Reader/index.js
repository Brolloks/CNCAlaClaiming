import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Effect$dUncurried from "../Effect.Uncurried/index.js";
import {_read} from "./foreign.js";
const read = /* #__PURE__ */ Effect$dUncurried.runEffectFn3(_read)(Data$dMaybe.Nothing)(Data$dMaybe.Just);
export {read};
export * from "./foreign.js";
