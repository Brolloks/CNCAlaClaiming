import * as React$dBasic from "../React.Basic/index.js";
import {_DropdownButton} from "./foreign.js";
const rootCloseEvent = {click: "click", mousedown: "mousedown"};
const _internalDropdownButton = () => props => React$dBasic.element(_DropdownButton)(props);
const dropdownButton = dictToJSX => () => () => () => props => children => React$dBasic.element(_DropdownButton)({...props, children: dictToJSX.toJSX(children)});
export {_internalDropdownButton, dropdownButton, rootCloseEvent};
export * from "./foreign.js";
