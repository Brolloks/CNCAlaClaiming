import * as React$dBasic from "../React.Basic/index.js";
import {_Markdown} from "./foreign.js";
const _internalmarkdown = () => _Markdown;
const markdown = () => dictToJSX => () => () => props => children => React$dBasic.element(_Markdown)({...props, children: dictToJSX.toJSX(children)});
export {_internalmarkdown, markdown};
export * from "./foreign.js";
