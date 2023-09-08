import * as React$dBasic from "../React.Basic/index.js";
import {_DropdownItem} from "./foreign.js";
const _internalDropdownItem = () => props => React$dBasic.element(_DropdownItem)(props);
const dropdownItem = dictToJSX => () => () => () => props => children => React$dBasic.element(_DropdownItem)({...props, children: dictToJSX.toJSX(children)});
export {_internalDropdownItem, dropdownItem};
export * from "./foreign.js";
