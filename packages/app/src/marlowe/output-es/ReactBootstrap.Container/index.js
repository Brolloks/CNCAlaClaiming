import * as React$dBasic from "../React.Basic/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
import {_Container} from "./foreign.js";
const fluid = {boolean: Unsafe$dCoerce.unsafeCoerce, sm: "sm", md: "md", lg: "lg", xl: "xl", xxl: "xxl"};
const _internalcontainer = () => _Container;
const container = () => dictToJSX => () => () => props => children => React$dBasic.element(_Container)({...props, children: dictToJSX.toJSX(children)});
export {_internalcontainer, container, fluid};
export * from "./foreign.js";
