import * as React$dBasic from "../React.Basic/index.js";
import {_Fade} from "./foreign.js";
const _internalfade = () => _Fade;
const fade = () => () => () => props => children => React$dBasic.element(_Fade)({...props, children: children});
export {_internalfade, fade};
export * from "./foreign.js";
