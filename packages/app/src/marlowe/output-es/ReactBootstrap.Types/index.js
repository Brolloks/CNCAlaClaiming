import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const eqEventKey = {eq: e1 => e2 => e1 === e2};
const variant = {primary: "primary", secondary: "secondary", success: "success", danger: "danger", warning: "warning", info: "info", dark: "dark", light: "light"};
const placement = {
  top: "top",
  bottom: "bottom",
  right: "right",
  left: "left",
  auto: "auto",
  "top-start": "top-start",
  "top-end": "top-end",
  "bottom-start": "bottom-start",
  "bottom-end": "bottom-end",
  "right-start": "right-start",
  "right-end": "right-end",
  "left-start": "left-start",
  "left-end": "left-end",
  "auto-start": "auto-start",
  "auto-end": "auto-end"
};
const eventKey = Unsafe$dCoerce.unsafeCoerce;
const color = {primary: "primary", secondary: "secondary", danger: "danger", warning: "warning", info: "info", dark: "dark", light: "light", white: "white", muted: "muted"};
const backdrop = {static: "static", true: true, false: false};
export {backdrop, color, eqEventKey, eventKey, placement, variant};
