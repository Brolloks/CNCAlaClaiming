// | This module represents the functional bindings to JavaScript's `ArrayBuffer`
// | objects. See [MDN's spec](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) for details.
import {byteLength, emptyImpl, sliceImpl} from "./foreign.js";
const slice = s => e => a => sliceImpl(a, s, e);
const empty = l => () => emptyImpl(l);
export {empty, slice};
export * from "./foreign.js";
