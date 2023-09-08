import * as Data$dString$dCodePoints from "../Data.String.CodePoints/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import {padStartWithImpl} from "./foreign.js";
const padStartWith = n => c => s => padStartWithImpl((n + Data$dString$dCodeUnits.length(s) | 0) - Data$dString$dCodePoints.toCodePointArray(s).length | 0, c, s);
export {padStartWith};
export * from "./foreign.js";
