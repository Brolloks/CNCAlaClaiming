import * as $runtime from "../runtime.js";
import * as Control$dPromise from "../Control.Promise/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Debug from "../Debug/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Isomers$dContrib$dWeb$dFetch$dRequest from "../Isomers.Contrib.Web.Fetch.Request/index.js";
import * as Isomers$dContrib$dWeb$dFetch$dResponse from "../Isomers.Contrib.Web.Fetch.Response/index.js";
import * as JS$dUnsafe$dStringify from "../JS.Unsafe.Stringify/index.js";
import * as Web$dFetch from "../Web.Fetch/index.js";
import * as Web$dFetch$dHeaders from "../Web.Fetch.Headers/index.js";
import * as Web$dFetch$dReferrer from "../Web.Fetch.Referrer/index.js";
import * as Web$dFetch$dReferrerPolicy from "../Web.Fetch.ReferrerPolicy/index.js";
import * as Web$dFetch$dRequest from "../Web.Fetch.Request/index.js";
import * as Web$dFetch$dRequestBody from "../Web.Fetch.RequestBody/index.js";
import * as Web$dFetch$dRequestCache from "../Web.Fetch.RequestCache/index.js";
import * as Web$dFetch$dRequestCredentials from "../Web.Fetch.RequestCredentials/index.js";
import * as Web$dFetch$dRequestMode from "../Web.Fetch.RequestMode/index.js";
import * as Web$dFetch$dResponse from "../Web.Fetch.Response/index.js";
import {unsafePatch} from "./foreign.js";
const $Scheme = tag => tag;
const traceM1 = /* #__PURE__ */ Debug.traceM()(Effect.monadEffect);
const traceM2 = /* #__PURE__ */ Debug.traceM()(Effect$dAff.monadAff);
const HTTP = /* #__PURE__ */ $Scheme("HTTP");
const HTTPS = /* #__PURE__ */ $Scheme("HTTPS");
const toFetchRequest = hostInfo => c => {
  const url = (() => {
    if (hostInfo.scheme === "HTTP") { return "http://" + hostInfo.hostName + ":"; }
    if (hostInfo.scheme === "HTTPS") { return "https://" + hostInfo.hostName + ":"; }
    $runtime.fail();
  })() + Data$dShow.showIntImpl(hostInfo.port) + c.path;
  const opts = {
    body: (() => {
      if (c.body.tag === "Just") {
        if (c.body._1.tag === "ArrayBufferBody") { return Web$dFetch$dRequestBody.fromArrayBuffer(c.body._1._1); }
        if (c.body._1.tag === "JsonBody") { return Isomers$dContrib$dWeb$dFetch$dRequest.fromJson(c.body._1._1); }
        if (c.body._1.tag === "StringBody") { return Web$dFetch$dRequestBody.fromString(c.body._1._1); }
        $runtime.fail();
      }
      return Web$dFetch$dRequestBody.empty;
    })(),
    headers: Web$dFetch$dHeaders.fromFoldable(Data$dFoldable.foldableArray)(Data$dFunctor.arrayMap(v => Data$dTuple.$Tuple(v._1, v._2))(c.headers)),
    method: c.method,
    referrer: Data$dMaybe.$Maybe("Just", Web$dFetch$dReferrer.$Referrer("ReferrerUrl", "http://localhost")),
    cache: Web$dFetch$dRequestCache.Default,
    credentials: Web$dFetch$dRequestCredentials.SameOrigin,
    integrity: "",
    mode: Web$dFetch$dRequestMode.Cors,
    referrerPolicy: Web$dFetch$dReferrerPolicy.NoReferrer
  };
  const $0 = traceM1("toFetchRequest:");
  return () => {
    $0();
    traceM1(url)();
    const req = Web$dFetch$dRequest._unsafeNew(url, Web$dFetch$dRequest.toUnsafeOptions(opts));
    traceM1("CREATD")();
    return req;
  };
};
const printScheme = v => {
  if (v === "HTTP") { return "http"; }
  if (v === "HTTPS") { return "https"; }
  $runtime.fail();
};
const fromFetchResponse = res => {
  const $0 = traceM1("RAW RESPONSE");
  return () => {
    $0();
    traceM1(res)();
    const $1 = Web$dFetch$dResponse.arrayBuffer(res);
    const $2 = Web$dFetch$dResponse.blob(res);
    const $3 = Web$dFetch$dResponse.text(res);
    const $4 = Isomers$dContrib$dWeb$dFetch$dResponse.json(res);
    const a$p = Effect$dAff._makeFiber(Effect$dAff.ffiUtil, Effect$dAff._bind(Effect$dAff._liftEffect(() => $1()))(Control$dPromise.toAff$p(Control$dPromise.coerce)))();
    const a$p$1 = Effect$dAff._makeFiber(Effect$dAff.ffiUtil, Effect$dAff._bind(Effect$dAff._liftEffect(() => $2()))(Control$dPromise.toAff$p(Control$dPromise.coerce)))();
    const a$p$2 = Effect$dAff._makeFiber(Effect$dAff.ffiUtil, Effect$dAff._bind(Effect$dAff._liftEffect(() => $4()))(Control$dPromise.toAff$p(Control$dPromise.coerce)))();
    const a$p$3 = Effect$dAff._makeFiber(Effect$dAff.ffiUtil, Effect$dAff._bind(Effect$dAff._liftEffect(() => $3()))(Control$dPromise.toAff$p(Control$dPromise.coerce)))();
    return {
      body: {arrayBuffer: a$p, blob: a$p$1, json: a$p$2, string: a$p$3},
      headers: Data$dFunctor.arrayMap(v => Data$dTuple.$Tuple(v._1, v._2))(Web$dFetch$dHeaders._toArray(Data$dTuple.Tuple, Web$dFetch$dResponse.headers(res))),
      status: {code: Web$dFetch$dResponse.status(res), message: Web$dFetch$dResponse.statusText(res)},
      redirected: Web$dFetch$dResponse.redirected(res),
      url: Web$dFetch$dResponse.url(res)
    };
  };
};
const fetch = hostInfo => req => Effect$dAff._bind(traceM2("FETCH"))(() => Effect$dAff._bind(traceM2("hostInfo:"))(() => Effect$dAff._bind(traceM2(hostInfo))(() => Effect$dAff._bind(Effect$dAff._liftEffect(toFetchRequest(hostInfo)(req)))(req$p => Effect$dAff._bind(traceM2(req$p))(() => Effect$dAff._catchError(Effect$dAff._bind(Effect$dAff._catchError(Effect$dAff._bind(Effect$dAff._liftEffect(() => Web$dFetch._fetch(
  req$p,
  {}
)))(Control$dPromise.toAff$p(Control$dPromise.coerce)))(err => Effect$dAff._bind(traceM2("RESPONSE FAILED"))(() => Effect$dAff._bind(traceM2(err))(() => Effect$dAff._throwError(err)))))(x => {
  const $0 = fromFetchResponse(x);
  return Effect$dAff._liftEffect(() => {
    const a$p = $0();
    return Data$dEither.$Either("Right", a$p);
  });
}))(err => Effect$dAff._bind(traceM2(JS$dUnsafe$dStringify.unsafeStringify(err)))(() => Effect$dAff._bind(traceM2("EXCEPTION?"))(() => Effect$dAff._pure(Data$dEither.$Either(
  "Left",
  JS$dUnsafe$dStringify.unsafeStringify(err)
))))))))));
export {$Scheme, HTTP, HTTPS, fetch, fromFetchResponse, printScheme, toFetchRequest, traceM1, traceM2};
export * from "./foreign.js";
