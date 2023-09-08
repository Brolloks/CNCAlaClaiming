import * as Data$dMaybe from "../Data.Maybe/index.js";
import {caseRuntimeImpl} from "./foreign.js";
const caseRuntime = $0 => $1 => $2 => $3 => caseRuntimeImpl($0, $1, $2, $3);
const onBrowser = f => caseRuntimeImpl(v => v$1 => Data$dMaybe.Nothing, v => x => Data$dMaybe.$Maybe("Just", f(x)), v => v$1 => Data$dMaybe.Nothing, v => Data$dMaybe.Nothing);
const onDeno = f => caseRuntimeImpl(v => v$1 => Data$dMaybe.Nothing, v => v$1 => Data$dMaybe.Nothing, v => x => Data$dMaybe.$Maybe("Just", f(x)), v => Data$dMaybe.Nothing);
const onNode = f => caseRuntimeImpl(v => x => Data$dMaybe.$Maybe("Just", f(x)), v => v$1 => Data$dMaybe.Nothing, v => v$1 => Data$dMaybe.Nothing, v => Data$dMaybe.Nothing);
export {caseRuntime, onBrowser, onDeno, onNode};
export * from "./foreign.js";
