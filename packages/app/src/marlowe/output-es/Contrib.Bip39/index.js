import * as Effect$dUncurried from "../Effect.Uncurried/index.js";
import {generateMnemonicImpl} from "./foreign.js";
const strength = {"128": 128, "160": 160, "192": 192, "224": 224, "256": 256, "512": 512};
const mnemonicToString = v => v;
const generateMnemonic = /* #__PURE__ */ Effect$dUncurried.runEffectFn1(generateMnemonicImpl);
export {generateMnemonic, mnemonicToString, strength};
export * from "./foreign.js";
