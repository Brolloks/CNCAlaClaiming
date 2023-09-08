import * as React$dBasic from "../React.Basic/index.js";
import {_Tabs} from "./foreign.js";
const variant = {tabs: "tabs", pills: "pills"};
const _internaltabs = () => _Tabs;
const tabs = () => dictToJSX => () => () => props => children => React$dBasic.element(_Tabs)({...props, children: dictToJSX.toJSX(children)});
export {_internaltabs, tabs, variant};
export * from "./foreign.js";
