// | This module defines low-level bindings to the Node HTTP module.
import * as $runtime from "../runtime.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
import {closeImpl, createServer, listenImpl, listenSocket, onConnect, onUpgrade, setHeader, setHeaders, setStatusCode, setStatusMessage} from "./foreign.js";
const responseAsStream = Unsafe$dCoerce.unsafeCoerce;
const requestURL = x => x.url;
const requestMethod = x => x.method;
const requestHeaders = x => x.headers;
const requestAsStream = Unsafe$dCoerce.unsafeCoerce;
const listen = server => opts => done => listenImpl(server)(opts.port)(opts.hostname)((() => {
  if (opts.backlog.tag === "Nothing") { return Data$dNullable.null; }
  if (opts.backlog.tag === "Just") { return Data$dNullable.notNull(opts.backlog._1); }
  $runtime.fail();
})())(done);
const httpVersion = x => x.httpVersion;
const close = server => done => closeImpl(server)(done);
export {close, httpVersion, listen, requestAsStream, requestHeaders, requestMethod, requestURL, responseAsStream};
export * from "./foreign.js";
