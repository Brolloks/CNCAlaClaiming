import * as React$dBasic from "../React.Basic/index.js";
import {_Label} from "./foreign.js";
const column = {true: true, sm: "sm", lg: "lg", false: false};
const _internallabel = () => _Label;
const label = () => dictToJSX => () => props => children => React$dBasic.element(_Label)({...props, children: dictToJSX.toJSX(children)});
export {_internallabel, column, label};
export * from "./foreign.js";
