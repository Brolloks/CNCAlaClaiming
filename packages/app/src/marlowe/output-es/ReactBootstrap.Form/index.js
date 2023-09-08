import * as React$dBasic from "../React.Basic/index.js";
import {_Form} from "./foreign.js";
const form = dictToJSX => () => () => () => props => children => React$dBasic.element(_Form)({...props, children: dictToJSX.toJSX(children)});
export {form};
export * from "./foreign.js";
