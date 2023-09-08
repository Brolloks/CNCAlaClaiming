import * as React$dBasic from "../React.Basic/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
import {_OverlayTrigger} from "./foreign.js";
const overlayTriggerType = {hover: "hover", click: "click", focus: "focus"};
const overlayDelay = {number: Unsafe$dCoerce.unsafeCoerce, showHide: Unsafe$dCoerce.unsafeCoerce};
const _internalOverlayTrigger = () => _OverlayTrigger;
const overlayTrigger = () => dictToJSX => () => () => props => children => React$dBasic.element(_OverlayTrigger)({...props, children: dictToJSX.toJSX(children)});
export {_internalOverlayTrigger, overlayDelay, overlayTrigger, overlayTriggerType};
export * from "./foreign.js";
