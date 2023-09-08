import * as React$dBasic from "../React.Basic/index.js";
import {_Offcanvas, _OffcanvasBody, _OffcanvasHeader, _OffcanvasTitle} from "./foreign.js";
const responsive = {sm: "sm", md: "md", lg: "lg", xl: "xl", xxl: "xxl"};
const placement = {start: "start", end: "end", top: "top", bottom: "bottom"};
const _internaloffcanvasTitle = () => _OffcanvasTitle;
const offcanvasTitle = () => dictToJSX => () => () => props => children => React$dBasic.element(_OffcanvasTitle)({...props, children: dictToJSX.toJSX(children)});
const _internaloffcanvasHeader = () => _OffcanvasHeader;
const offcanvasHeader = () => dictToJSX => () => () => props => children => React$dBasic.element(_OffcanvasHeader)({...props, children: dictToJSX.toJSX(children)});
const _internaloffcanvasBody = () => _OffcanvasBody;
const offcanvasBody = () => dictToJSX => () => () => props => children => React$dBasic.element(_OffcanvasBody)({...props, children: dictToJSX.toJSX(children)});
const _internaloffcanvas = () => _Offcanvas;
const offcanvas = () => dictToJSX => () => () => props => children => React$dBasic.element(_Offcanvas)({...props, children: dictToJSX.toJSX(children)});
export {
  _internaloffcanvas,
  _internaloffcanvasBody,
  _internaloffcanvasHeader,
  _internaloffcanvasTitle,
  offcanvas,
  offcanvasBody,
  offcanvasHeader,
  offcanvasTitle,
  placement,
  responsive
};
export * from "./foreign.js";
