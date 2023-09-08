import {new as $$new, _decode} from "./foreign.js";
const decodeWithOptions = () => arr => options => decoder => () => _decode(arr, options, decoder);
const decode = arr => decoder => () => _decode(arr, {}, decoder);
export {decode, decodeWithOptions};
export * from "./foreign.js";
