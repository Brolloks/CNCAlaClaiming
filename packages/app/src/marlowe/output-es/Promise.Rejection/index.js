import * as Data$dMaybe from "../Data.Maybe/index.js";
import {_toError, fromError} from "./foreign.js";
const toError = $0 => _toError(Data$dMaybe.Just, Data$dMaybe.Nothing, $0);
export {toError};
export * from "./foreign.js";
