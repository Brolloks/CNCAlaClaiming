import * as React$dBasic from "../React.Basic/index.js";
import {_Select} from "./foreign.js";
const size = {sm: "sm", lg: "lg"};
const _internalselect = () => _Select;
const select = () => dictToJSX => () => () => props => children => React$dBasic.element(_Select)({...props, children: dictToJSX.toJSX(children)});
export {_internalselect, select, size};
export * from "./foreign.js";
