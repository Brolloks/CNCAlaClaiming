import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as JsYaml from "../JsYaml/index.js";
import * as React$dBasic from "../React.Basic/index.js";
import {_SyntaxHighlighter} from "./foreign.js";
const syntaxHighlighter = () => props => React$dBasic.element(_SyntaxHighlighter)(props);
const yamlSyntaxHighlighter = dictEncodeJson => () => () => () => a => opts => React$dBasic.element(_SyntaxHighlighter)({
  language: "yaml",
  children: JsYaml.dumpImpl(dictEncodeJson.encodeJson(a), {...opts, schema: JsYaml.bigIntSchema}),
  wrapLongLines: true
});
const jsonSyntaxHighlighter = dictEncodeJson => a => React$dBasic.element(_SyntaxHighlighter)({
  language: "json",
  children: Data$dArgonaut$dCore.stringifyWithIndent(2)(dictEncodeJson.encodeJson(a)),
  wrapLongLines: true
});
export {jsonSyntaxHighlighter, syntaxHighlighter, yamlSyntaxHighlighter};
export * from "./foreign.js";
