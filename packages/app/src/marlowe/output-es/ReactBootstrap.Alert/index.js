import * as React$dBasic from "../React.Basic/index.js";
import {_Alert} from "./foreign.js";
const _internalalert = () => _Alert;
const alert = () => dictToJSX => () => () => props => children => React$dBasic.element(_Alert)({...props, children: dictToJSX.toJSX(children)});
export {_internalalert, alert};
export * from "./foreign.js";
