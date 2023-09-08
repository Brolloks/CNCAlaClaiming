import * as Effect$dConsole from "../Effect.Console/index.js";
import {consoleError, consoleLog, eraseLine, hasColours, hasStderr, print, printFail, printLabel, printPass, restorePos, savePos} from "./foreign.js";
const log = dictMonadEffect => x => dictMonadEffect.liftEffect(Effect$dConsole.log(x));
export {log};
export * from "./foreign.js";
