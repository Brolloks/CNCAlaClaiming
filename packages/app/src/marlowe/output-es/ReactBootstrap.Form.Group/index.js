import * as React$dBasic from "../React.Basic/index.js";
import {_Group} from "./foreign.js";
const _internalgroup = () => _Group;
const group = () => dictToJSX => () => () => props => children => React$dBasic.element(_Group)({...props, children: dictToJSX.toJSX(children)});
export {_internalgroup, group};
export * from "./foreign.js";
