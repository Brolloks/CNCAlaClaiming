import * as React$dBasic from "../React.Basic/index.js";
import {_Collapse} from "./foreign.js";
const dimension = {height: "height", width: "width"};
const _internalcollapse = () => _Collapse;
const collapse = () => () => () => props => children => React$dBasic.element(_Collapse)({...props, children: children});
export {_internalcollapse, collapse, dimension};
export * from "./foreign.js";
