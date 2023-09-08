import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as React$dBasic from "../React.Basic/index.js";
import * as React$dBasic$dDOM$dSimplified$dGenerated from "../React.Basic.DOM.Simplified.Generated/index.js";
import * as ReactBootstrap$dOverlayTrigger from "../ReactBootstrap.OverlayTrigger/index.js";
import * as ReactBootstrap$dTooltip from "../ReactBootstrap.Tooltip/index.js";
const spinner = possibleBody => React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
  children: [
    React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalspan$p)({
      children: [
        (() => {
          if (possibleBody.tag === "Nothing") { return "Loading..."; }
          if (possibleBody.tag === "Just") { return possibleBody._1; }
          $runtime.fail();
        })()
      ],
      className: "visually-hidden"
    })
  ],
  className: "spinner-border",
  role: "status"
});
const defaultLinkOptionalProps = {extraClassNames: "", disabled: false, showBorders: false, tooltipText: Data$dMaybe.Nothing, tooltipPlacement: Data$dMaybe.Nothing};
const link = dictDefaults => provided => {
  const v = dictDefaults.defaults(defaultLinkOptionalProps)(provided);
  const $0 = v.onClick;
  return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalbutton$p)({
    children: [v.label],
    className: "btn btn-link text-decoration-none text-reset " + v.extraClassNames + (v.showBorders ? " border border-1 bg-light-hover" : " text-decoration-underline-hover") + (v.disabled
      ? " disabled"
      : ""),
    onClick: x => $0(),
    type: "button"
  });
};
const linkWithIcon = dictDefaults => provided => {
  const v = dictDefaults.defaults(defaultLinkOptionalProps)(provided);
  const $0 = v.onClick;
  const button1 = React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalbutton$p)({
    children: [v.icon, v.label],
    className: "btn btn-link  " + v.extraClassNames + (v.showBorders ? " border border-1 bg-light-hover" : " text-decoration-underline-hover") + (v.disabled ? " disabled" : ""),
    onClick: x => $0(),
    type: "button"
  });
  if (v.tooltipText.tag === "Just") {
    const placement = (() => {
      if (v.tooltipPlacement.tag === "Nothing") { return "left"; }
      if (v.tooltipPlacement.tag === "Just") { return v.tooltipPlacement._1; }
      $runtime.fail();
    })();
    return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
      children: [
        React$dBasic.element(ReactBootstrap$dOverlayTrigger._OverlayTrigger)({
          children: [button1],
          overlay: React$dBasic.element(ReactBootstrap$dTooltip._Tooltip)({children: [v.tooltipText._1], className: "p-fixed", placement}),
          placement
        })
      ],
      className: "d-inline-block"
    });
  }
  if (v.tooltipText.tag === "Nothing") { return button1; }
  $runtime.fail();
};
const buttonWithIcon = dictDefaults => provided => {
  const v = dictDefaults.defaults(defaultLinkOptionalProps)(provided);
  const $0 = v.onClick;
  return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalbutton$p)({
    children: [v.icon, v.label],
    className: v.disabled ? "btn btn-primary " + v.extraClassNames + " disabled" : "btn btn-primary " + v.extraClassNames + "",
    onClick: x => $0(),
    type: "button"
  });
};
export {buttonWithIcon, defaultLinkOptionalProps, link, linkWithIcon, spinner};
