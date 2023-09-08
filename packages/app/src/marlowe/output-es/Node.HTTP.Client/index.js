// | This module defines low-level bindings to the Node HTTP client.
import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOptions from "../Data.Options/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
import * as Node$dURL from "../Node.URL/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
import {requestImpl, setTimeout} from "./foreign.js";
const $RequestFamily = tag => tag;
const RequestHeaders = x => x;
const IPV4 = /* #__PURE__ */ $RequestFamily("IPV4");
const IPV6 = /* #__PURE__ */ $RequestFamily("IPV6");
const statusMessage = x => x.statusMessage;
const statusCode = x => x.statusCode;
const responseAsStream = Unsafe$dCoerce.unsafeCoerce;
const requestFromURI = x => requestImpl(Node$dURL.parse(x));
const requestAsStream = Unsafe$dCoerce.unsafeCoerce;
const request = x => requestImpl(Data$dOptions.fromFoldable(x));
const rejectUnauthorized = v => [Data$dTuple.$Tuple("rejectUnauthorized", v)];
const protocol = v => [Data$dTuple.$Tuple("protocol", v)];
const port = v => [Data$dTuple.$Tuple("port", v)];
const path = v => [Data$dTuple.$Tuple("path", v)];
const method = v => [Data$dTuple.$Tuple("method", v)];
const key = v => [Data$dTuple.$Tuple("key", v)];
const httpVersion = x => x.httpVersion;
const hostname = v => [Data$dTuple.$Tuple("hostname", v)];
const responseCookies = res => Foreign$dObject._lookup(Data$dMaybe.Nothing, Data$dMaybe.Just, "set-cookie", res.headers);
const responseHeaders = res => Foreign$dObject.mutate($0 => () => {
  delete $0["set-cookie"];
  return $0;
})(res.headers);
const headers = v => [Data$dTuple.$Tuple("headers", v)];
const family = x => [
  Data$dTuple.$Tuple(
    "family",
    (() => {
      if (x === "IPV4") { return 4; }
      if (x === "IPV6") { return 6; }
      $runtime.fail();
    })()
  )
];
const cert = v => [Data$dTuple.$Tuple("cert", v)];
const auth = v => [Data$dTuple.$Tuple("auth", v)];
export {
  $RequestFamily,
  IPV4,
  IPV6,
  RequestHeaders,
  auth,
  cert,
  family,
  headers,
  hostname,
  httpVersion,
  key,
  method,
  path,
  port,
  protocol,
  rejectUnauthorized,
  request,
  requestAsStream,
  requestFromURI,
  responseAsStream,
  responseCookies,
  responseHeaders,
  statusCode,
  statusMessage
};
export * from "./foreign.js";
