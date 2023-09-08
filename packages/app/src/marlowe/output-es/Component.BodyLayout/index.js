import * as React$dBasic from "../React.Basic/index.js";
import * as React$dBasic$dDOM$dGenerated from "../React.Basic.DOM.Generated/index.js";
import * as React$dBasic$dDOM$dSimplified$dGenerated from "../React.Basic.DOM.Simplified.Generated/index.js";
const hr = /* #__PURE__ */ React$dBasic.element(React$dBasic$dDOM$dGenerated._hr$p);
const i = /* #__PURE__ */ React$dBasic.element(React$dBasic$dDOM$dGenerated._i$p);
const wrappedContentWithFooter = body => footer => React$dBasic.fragment([
  React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({children: [body], className: "p-3"}),
  hr({}),
  React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({children: [footer], className: "p-3 mt-auto"})
]);
const descriptionLink = v => React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internala$p)({
  children: [i({className: "ms-2 me-1 h6 " + v.icon}), v.label],
  className: "white-color",
  href: v.href,
  target: "_blank"
});
const component = v => React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
  children: [
    React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
      children: [
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
          children: [
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
              children: [React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalh3$p)({children: [v.title], className: "h3 pb-3 fw-bold"}), v.description],
              className: "p-3"
            })
          ],
          className: "col-3 background-color-primary white-color overflow-auto vh-100 px-0 pt-59px pb-71px"
        }),
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
          children: [v.content],
          className: "col-9 px-0 overflow-auto vh-100 pt-59px pb-71px d-flex flex-column"
        })
      ],
      className: "row"
    })
  ],
  className: "container-fluid overflow-hidden"
});
export {component, descriptionLink, hr, i, wrappedContentWithFooter};
