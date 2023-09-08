import * as React$dBasic from "../React.Basic/index.js";
import {_Text} from "./foreign.js";
const _internaltext = () => _Text;
const text = () => dictToJSX => () => props => children => React$dBasic.element(_Text)({...props, children: dictToJSX.toJSX(children)});
export {_internaltext, text};
export * from "./foreign.js";
