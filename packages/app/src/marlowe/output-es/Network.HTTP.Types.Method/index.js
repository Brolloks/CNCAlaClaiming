import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
const $StdMethod = tag => tag;
const GET = /* #__PURE__ */ $StdMethod("GET");
const HEAD = /* #__PURE__ */ $StdMethod("HEAD");
const POST = /* #__PURE__ */ $StdMethod("POST");
const PUT = /* #__PURE__ */ $StdMethod("PUT");
const DELETE = /* #__PURE__ */ $StdMethod("DELETE");
const CONNECT = /* #__PURE__ */ $StdMethod("CONNECT");
const OPTIONS = /* #__PURE__ */ $StdMethod("OPTIONS");
const TRACE = /* #__PURE__ */ $StdMethod("TRACE");
const PATCH = /* #__PURE__ */ $StdMethod("PATCH");
const showMethod = {
  show: v => {
    if (v === "GET") { return "GET"; }
    if (v === "HEAD") { return "HEAD"; }
    if (v === "POST") { return "POST"; }
    if (v === "PUT") { return "PUT"; }
    if (v === "DELETE") { return "DELETE"; }
    if (v === "CONNECT") { return "CONNECT"; }
    if (v === "OPTIONS") { return "OPTIONS"; }
    if (v === "TRACE") { return "TRACE"; }
    if (v === "PATCH") { return "PATCH"; }
    $runtime.fail();
  }
};
const parseMethod = v => {
  if (v === "GET") { return Data$dMaybe.$Maybe("Just", GET); }
  if (v === "HEAD") { return Data$dMaybe.$Maybe("Just", HEAD); }
  if (v === "POST") { return Data$dMaybe.$Maybe("Just", POST); }
  if (v === "PUT") { return Data$dMaybe.$Maybe("Just", PUT); }
  if (v === "DELETE") { return Data$dMaybe.$Maybe("Just", DELETE); }
  if (v === "CONNECT") { return Data$dMaybe.$Maybe("Just", CONNECT); }
  if (v === "OPTIONS") { return Data$dMaybe.$Maybe("Just", OPTIONS); }
  if (v === "TRACE") { return Data$dMaybe.$Maybe("Just", TRACE); }
  if (v === "PATCH") { return Data$dMaybe.$Maybe("Just", PATCH); }
  return Data$dMaybe.Nothing;
};
const methodTrace = "TRACE";
const methodPut = "PUT";
const methodPost = "POST";
const methodPatch = "PATCH";
const methodOptions = "OPTIONS";
const methodHead = "HEAD";
const methodGet = "GET";
const methodDelete = "DELETE";
const methodConnect = "CONNECT";
export {
  $StdMethod,
  CONNECT,
  DELETE,
  GET,
  HEAD,
  OPTIONS,
  PATCH,
  POST,
  PUT,
  TRACE,
  methodConnect,
  methodDelete,
  methodGet,
  methodHead,
  methodOptions,
  methodPatch,
  methodPost,
  methodPut,
  methodTrace,
  parseMethod,
  showMethod
};
