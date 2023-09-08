import * as React$dBasic from "../React.Basic/index.js";
import {_Tooltip} from "./foreign.js";
const _internaltooltip = () => _Tooltip;
const tooltip = () => dictToJSX => () => () => props => children => React$dBasic.element(_Tooltip)({...props, children: dictToJSX.toJSX(children)});
export {_internaltooltip, tooltip};
export * from "./foreign.js";
