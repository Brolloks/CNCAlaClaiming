import * as React$dBasic from "../React.Basic/index.js";
import {_SSRProvider} from "./foreign.js";
const ssrProvider = children => React$dBasic.element(_SSRProvider)({children});
export {ssrProvider};
export * from "./foreign.js";
