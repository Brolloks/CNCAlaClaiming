import * as React$dBasic from "../React.Basic/index.js";
import {_Check} from "./foreign.js";
const checkType = {radio: "radio", checkbox: "checkbox", switch: "switch"};
const _internalcheck = () => _Check;
const check = () => props => React$dBasic.element(_Check)(props);
const checkWithChildren = () => dictToJSX => () => () => props => children => React$dBasic.element(_Check)({...props, children: dictToJSX.toJSX(children)});
export {_internalcheck, check, checkType, checkWithChildren};
export * from "./foreign.js";
