import * as $runtime from "../runtime.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
import * as React$dBasic from "../React.Basic/index.js";
import * as React$dBasic$dDOM$dSimplified$dGenerated from "../React.Basic.DOM.Simplified.Generated/index.js";
import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Web$dDOM$dDocument from "../Web.DOM.Document/index.js";
import * as Web$dDOM$dElement from "../Web.DOM.Element/index.js";
import * as Web$dDOM$dHTMLCollection from "../Web.DOM.HTMLCollection/index.js";
import * as Web$dDOM$dNode from "../Web.DOM.Node/index.js";
import * as Web$dHTML from "../Web.HTML/index.js";
import * as Web$dHTML$dWindow from "../Web.HTML.Window/index.js";
const $Size = tag => tag;
const pure1 = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const Small = /* #__PURE__ */ $Size("Small");
const Medium = /* #__PURE__ */ $Size("Medium");
const Large = /* #__PURE__ */ $Size("Large");
const ExtraLarge = /* #__PURE__ */ $Size("ExtraLarge");
const defaultModalOptionalProps = {footer: React$dBasic.empty, onDismiss: () => {}, size: Medium, fullscreen: false};
const mkModal = dictDefaults => React$dBasic$dHooks.component("Modal")(props => {
  const v = dictDefaults.defaults(defaultModalOptionalProps)(props);
  const $0 = v.body;
  const $1 = v.footer;
  const $2 = v.fullscreen;
  const $3 = v.onDismiss;
  const $4 = v.size;
  const $5 = v.title;
  return () => {
    React$dBasic$dHooks.useEffect_(
      (v$1, v1) => true,
      undefined,
      () => {
        const $6 = Web$dHTML.window();
        const doc = Web$dHTML$dWindow.document($6)();
        const $7 = Web$dDOM$dDocument.getElementsByTagName("body")(doc)();
        const v1 = Web$dDOM$dHTMLCollection.toArray($7)();
        if (v1.length === 1) {
          const $8 = v1[0];
          Web$dDOM$dElement.setAttribute("class")("modal-open")($8)();
          const backdrop = Web$dDOM$dDocument.createElement("div")(doc)();
          Web$dDOM$dElement.setAttribute("class")("modal-backdrop fade show")(backdrop)();
          const $9 = Effect$dConsole.log("Close Click");
          Web$dDOM$dNode.appendChild(backdrop)($8)();
          return () => {
            $9();
            Web$dDOM$dElement.removeAttribute("style")($8)();
            Web$dDOM$dElement.removeAttribute("class")($8)();
            return Web$dDOM$dNode.removeChild(backdrop)($8)();
          };
        }
        return () => {};
      }
    );
    return pure1(React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
      _aria: {modal: "true"},
      children: [
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
          children: [
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
              children: [
                React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                  children: [
                    React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalh5$p)({children: [$5], className: "modal-title"}),
                    React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalbutton$p)({
                      _aria: {label: "Close"},
                      _data: {"bs-dismiss": "modal"},
                      children: [],
                      className: "btn-close",
                      onClick: v$1 => $3(),
                      type: "button"
                    })
                  ],
                  className: "modal-header"
                }),
                React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({children: [$0], className: "modal-body"}),
                React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({children: [$1], className: "modal-footer"})
              ],
              className: "modal-content"
            })
          ],
          className: (() => {
            if ($2) { return "modal-dialog modal-fullscreen"; }
            if ($4 === "Small") { return "modal-dialog modal-sm"; }
            if ($4 === "Medium") { return "modal-dialog modal-md"; }
            if ($4 === "Large") { return "modal-dialog modal-lg"; }
            if ($4 === "ExtraLarge") { return "modal-dialog modal-xl"; }
            $runtime.fail();
          })(),
          onClick: x => {}
        })
      ],
      className: "modal fade show",
      onClick: v$1 => $3(),
      role: "dialog",
      style: {display: "block"}
    }))();
  };
});
export {$Size, ExtraLarge, Large, Medium, Small, defaultModalOptionalProps, mkModal, pure1};
