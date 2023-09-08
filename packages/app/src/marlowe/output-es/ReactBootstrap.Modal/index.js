import * as React$dBasic from "../React.Basic/index.js";
import {_Modal, _ModalBody, _ModalDialog, _ModalFooter, _ModalHeader, _ModalTitle} from "./foreign.js";
const size = {sm: "sm", lg: "lg", xl: "xl"};
const fullscreen = {true: true, "sm-down": "sm-down", "md-down": "md-down", "lg-down": "lg-down", "xl-down": "xl-down", "xxl-down": "xxl-down"};
const _internalmodalTitle = () => _ModalTitle;
const modalTitle = () => dictToJSX => () => () => props => children => React$dBasic.element(_ModalTitle)({...props, children: dictToJSX.toJSX(children)});
const _internalmodalHeader = () => _ModalHeader;
const modalHeader = () => dictToJSX => () => () => props => children => React$dBasic.element(_ModalHeader)({...props, children: dictToJSX.toJSX(children)});
const _internalmodalFooter = () => _ModalFooter;
const modalFooter = () => dictToJSX => () => () => props => children => React$dBasic.element(_ModalFooter)({...props, children: dictToJSX.toJSX(children)});
const _internalmodalDialog = () => _ModalDialog;
const modalDialog = () => dictToJSX => () => () => props => children => React$dBasic.element(_ModalDialog)({...props, children: dictToJSX.toJSX(children)});
const _internalmodalBody = () => _ModalBody;
const modalBody = () => dictToJSX => () => () => props => children => React$dBasic.element(_ModalBody)({...props, children: dictToJSX.toJSX(children)});
const _internalmodal = () => _Modal;
const modal = () => dictToJSX => () => () => props => children => React$dBasic.element(_Modal)({...props, children: dictToJSX.toJSX(children)});
export {
  _internalmodal,
  _internalmodalBody,
  _internalmodalDialog,
  _internalmodalFooter,
  _internalmodalHeader,
  _internalmodalTitle,
  fullscreen,
  modal,
  modalBody,
  modalDialog,
  modalFooter,
  modalHeader,
  modalTitle,
  size
};
export * from "./foreign.js";
