import * as React$dBasic from "../React.Basic/index.js";
import * as React$dBasic$dDOM$dSimplified$dGenerated from "../React.Basic.DOM.Simplified.Generated/index.js";
import * as ReactBootstrap$dIcons from "../ReactBootstrap.Icons/index.js";
const orderingHeader = dictEq => ordering => updateOrdering => {
  const orderingIcon = ordering.orderAsc ? ReactBootstrap$dIcons.arrowDownShort : ReactBootstrap$dIcons.arrowUpShort;
  return label => headerOrdering => {
    if (dictEq.eq(ordering.orderBy)(headerOrdering)) {
      return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalth$p)({
        children: [
          orderingIcon,
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internala$p)({
            children: [label],
            className: "text-decoration-none text-black text-decoration-underline-hover",
            href: "#",
            onClick: (() => {
              const $0 = updateOrdering(v => ({...v, orderAsc: !ordering.orderAsc}));
              return v => $0();
            })()
          })
        ],
        className: "text-center"
      });
    }
    return React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalth$p)({
      children: [
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalspan$p)({children: [orderingIcon], className: "invisible"}),
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internala$p)({
          children: [label],
          className: "text-decoration-none text-black text-decoration-underline-hover",
          href: "#",
          onClick: (() => {
            const $0 = updateOrdering(v => ({...v, orderBy: headerOrdering}));
            return v => $0();
          })()
        })
      ],
      className: "text-center"
    });
  };
};
export {orderingHeader};
