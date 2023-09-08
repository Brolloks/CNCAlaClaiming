import * as Effect$dUncurried from "../Effect.Uncurried/index.js";
import {_fetch} from "./foreign.js";
const fetchWithOptions = () => Effect$dUncurried.runEffectFn2(_fetch);
const fetch = req => () => _fetch(req, {});
export {fetch, fetchWithOptions};
export * from "./foreign.js";
