import * as $runtime from "../runtime.js";
import * as Contrib$dLanguage$dMarlowe$dCore$dV1 from "../Contrib.Language.Marlowe.Core.V1/index.js";
import * as Contrib$dReactSyntaxHighlighter from "../Contrib.ReactSyntaxHighlighter/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Language$dMarlowe$dCore$dV1$dSemantics$dTypes from "../Language.Marlowe.Core.V1.Semantics.Types/index.js";
import * as React$dBasic from "../React.Basic/index.js";
import * as React$dBasic$dDOM$dSimplified$dGenerated from "../React.Basic.DOM.Simplified.Generated/index.js";
const sortStateKeys = a => b => {
  const $0 = Data$dOrd.ordString.compare(a)(b);
  if ($0 === "LT") { return -1; }
  if ($0 === "EQ") { return 0; }
  if ($0 === "GT") { return 1; }
  $runtime.fail();
};
const sortMarloweKeys = a => b => {
  const $0 = Contrib$dLanguage$dMarlowe$dCore$dV1.compareMarloweJsonKeys(a)(b);
  if ($0 === "LT") { return -1; }
  if ($0 === "EQ") { return 0; }
  if ($0 === "GT") { return 1; }
  $runtime.fail();
};
const marloweYaml = contract => React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
  children: [
    Contrib$dReactSyntaxHighlighter.yamlSyntaxHighlighter(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.encodeJsonContract)()()()(contract)({
      sortKeys: ($0, $1) => sortMarloweKeys($0)($1)
    })
  ],
  className: "child-pre-m-0 child-pre-px-2 child-pre-y-0 child-pre-bg-transparent"
});
const marloweStateYaml = state => React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
  children: [
    Contrib$dReactSyntaxHighlighter.yamlSyntaxHighlighter(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.encodeState)()()()(state)({sortKeys: ($0, $1) => sortMarloweKeys($0)($1)})
  ],
  className: "child-pre-m-0 child-pre-px-2 child-pre-y-0 child-pre-bg-transparent"
});
export {marloweStateYaml, marloweYaml, sortMarloweKeys, sortStateKeys};
