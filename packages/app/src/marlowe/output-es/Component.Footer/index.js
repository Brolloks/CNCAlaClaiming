import * as React$dBasic from "../React.Basic/index.js";
import * as React$dBasic$dDOM$dGenerated from "../React.Basic.DOM.Generated/index.js";
const footer1 = /* #__PURE__ */ React$dBasic.element(React$dBasic$dDOM$dGenerated._footer$p);
const div = /* #__PURE__ */ React$dBasic.element(React$dBasic$dDOM$dGenerated._div$p);
const span = /* #__PURE__ */ React$dBasic.element(React$dBasic$dDOM$dGenerated._span$p);
const a = /* #__PURE__ */ React$dBasic.element(React$dBasic$dDOM$dGenerated._a$p);
const i = /* #__PURE__ */ React$dBasic.element(React$dBasic$dDOM$dGenerated._i$p);
const Fixed = x => x;
const footer = v => footer1({
  className: v ? "footer mt-auto py-2 bg-light shadow-top z-index-sticky" : "mt-auto py-2 bg-light shadow-top z-index-sticky",
  children: [
    div({
      className: "container",
      children: [
        span({
          className: "text-muted d-flex justify-content-around",
          children: [
            a({
              className: "btn btn-link text-muted text-primary-hover text-decoration-none",
              href: "http://marlowescan.com",
              target: "_blank",
              children: [i({className: "h5 bi-globe2"}), "  Marlowe Explorer"]
            }),
            a({
              className: "btn btn-link text-muted text-primary-hover text-decoration-none",
              href: "https://docs.marlowe.iohk.io",
              target: "_blank",
              children: [i({className: "h5 bi-book"}), "  Marlowe Documentation"]
            }),
            a({
              className: "btn btn-link text-muted text-primary-hover text-decoration-none",
              href: "https://github.com/input-output-hk/marlowe-cardano",
              target: "_blank",
              children: [i({className: "h5 bi-github"}), "  Marlowe Cardano Github"]
            }),
            a({
              className: "btn btn-link text-muted text-primary-hover text-decoration-none",
              href: "https://play.marlowe.iohk.io",
              target: "_blank",
              children: [i({className: "h5 bi-play-circle"}), "  Marlowe Playground"]
            })
          ]
        })
      ]
    })
  ]
});
export {Fixed, a, div, footer, footer1, i, span};
