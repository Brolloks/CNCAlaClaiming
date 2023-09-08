import * as React$dBasic from "../React.Basic/index.js";
import {_Tab} from "./foreign.js";
const _internaltab = () => _Tab;
const tab = () => dictToJSX => () => () => props => children => React$dBasic.element(_Tab)({...props, children: dictToJSX.toJSX(children)});
export {_internaltab, tab};
export * from "./foreign.js";
