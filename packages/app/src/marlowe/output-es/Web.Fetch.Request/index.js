import * as $runtime from "../runtime.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dHTTP$dMethod from "../Data.HTTP.Method/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Effect$dUncurried from "../Effect.Uncurried/index.js";
import * as Record$dBuilder from "../Record.Builder/index.js";
import * as Record$dUnsafe$dUnion from "../Record.Unsafe.Union/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Web$dFetch$dHeaders from "../Web.Fetch.Headers/index.js";
import * as Web$dFetch$dReferrerPolicy from "../Web.Fetch.ReferrerPolicy/index.js";
import * as Web$dFetch$dRequestBody from "../Web.Fetch.RequestBody/index.js";
import * as Web$dFetch$dRequestCache from "../Web.Fetch.RequestCache/index.js";
import * as Web$dFetch$dRequestCredentials from "../Web.Fetch.RequestCredentials/index.js";
import * as Web$dFetch$dRequestMode from "../Web.Fetch.RequestMode/index.js";
import {_unsafeNew} from "./foreign.js";
const identity = x => x;
const identity1 = x => x;
const unsafeNew = /* #__PURE__ */ Effect$dUncurried.runEffectFn2(_unsafeNew);
const toUnsafeOptions = opts => (
  {
    method: (() => {
      if (opts.method === "OPTIONS") { return "OPTIONS"; }
      if (opts.method === "GET") { return "GET"; }
      if (opts.method === "HEAD") { return "HEAD"; }
      if (opts.method === "POST") { return "POST"; }
      if (opts.method === "PUT") { return "PUT"; }
      if (opts.method === "DELETE") { return "DELETE"; }
      if (opts.method === "TRACE") { return "TRACE"; }
      if (opts.method === "CONNECT") { return "CONNECT"; }
      if (opts.method === "PROPFIND") { return "PROPFIND"; }
      if (opts.method === "PROPPATCH") { return "PROPPATCH"; }
      if (opts.method === "MKCOL") { return "MKCOL"; }
      if (opts.method === "COPY") { return "COPY"; }
      if (opts.method === "MOVE") { return "MOVE"; }
      if (opts.method === "LOCK") { return "LOCK"; }
      if (opts.method === "UNLOCK") { return "UNLOCK"; }
      if (opts.method === "PATCH") { return "PATCH"; }
      $runtime.fail();
    })(),
    headers: opts.headers,
    body: opts.body,
    credentials: (() => {
      if (opts.credentials === "Omit") { return "omit"; }
      if (opts.credentials === "SameOrigin") { return "same-origin"; }
      if (opts.credentials === "Include") { return "include"; }
      $runtime.fail();
    })(),
    cache: (() => {
      if (opts.cache === "Default") { return "default"; }
      if (opts.cache === "NoStore") { return "no-store"; }
      if (opts.cache === "Reload") { return "reload"; }
      if (opts.cache === "NoCache") { return "no-cache"; }
      if (opts.cache === "ForceCache") { return "force-cache"; }
      if (opts.cache === "OnlyIfCached") { return "only-if-cached"; }
      $runtime.fail();
    })(),
    mode: (() => {
      if (opts.mode === "Cors") { return "cors"; }
      if (opts.mode === "NoCors") { return "no-cors"; }
      if (opts.mode === "SameOrigin") { return "same-origin"; }
      if (opts.mode === "Navigate") { return "navigate"; }
      $runtime.fail();
    })(),
    referrer: opts.referrer.tag === "Just"
      ? Data$dNullable.notNull((() => {
          if (opts.referrer._1.tag === "ReferrerNone") { return "none"; }
          if (opts.referrer._1.tag === "ReferrerClient") { return "client"; }
          if (opts.referrer._1.tag === "ReferrerUrl") { return opts.referrer._1._1; }
          $runtime.fail();
        })())
      : Data$dNullable.null,
    referrerPolicy: (() => {
      if (opts.referrerPolicy === "Default") { return ""; }
      if (opts.referrerPolicy === "NoReferrer") { return "no-referrer"; }
      if (opts.referrerPolicy === "NoReferrerWhenDowngrade") { return "no-referrer-when-downgrade"; }
      if (opts.referrerPolicy === "SameOrigin") { return "same-origin"; }
      if (opts.referrerPolicy === "StrictOrigin") { return "strict-origin"; }
      if (opts.referrerPolicy === "OriginWhenCrossOrigin") { return "origin-when-cross-origin"; }
      if (opts.referrerPolicy === "StrictOriginWhenCrossOrigin") { return "strict-origin-when-cross-origin"; }
      if (opts.referrerPolicy === "UnsafeUrl") { return "unsafe-url"; }
      $runtime.fail();
    })(),
    integrity: opts.integrity
  }
);
const $$new = url => options => {
  const $0 = toUnsafeOptions(options);
  return () => _unsafeNew(url, $0);
};
const defaultOptions = {
  method: Data$dHTTP$dMethod.GET,
  headers: Web$dFetch$dHeaders.empty,
  body: Web$dFetch$dRequestBody.empty,
  credentials: Web$dFetch$dRequestCredentials.SameOrigin,
  cache: Web$dFetch$dRequestCache.Default,
  mode: Web$dFetch$dRequestMode.Cors,
  referrer: Data$dMaybe.Nothing,
  referrerPolicy: Web$dFetch$dReferrerPolicy.NoReferrer,
  integrity: ""
};
const defaultUnsafeOptions = /* #__PURE__ */ toUnsafeOptions(defaultOptions);
const convertReferrerPolicy = {convertOption: v => identity};
const convertReferrer = {convertOption: v => Data$dMaybe.Just};
const convertOptionsNil = {convertOptions: v => identity1};
const convertOptions = dict => dict.convertOptions;
const convertOption = dict => dict.convertOption;
const convertOptionsCons = dictConvertOptions => dictConvertOption => () => () => dictIsSymbol => (
  {
    convertOptions: v => {
      const $0 = dictConvertOptions.convertOptions(Type$dProxy.Proxy);
      const $1 = Record$dBuilder.modify()()(dictIsSymbol)(Type$dProxy.Proxy)(dictConvertOption.convertOption(Type$dProxy.Proxy));
      return x => $0($1(x));
    }
  }
);
const convertMode = {convertOption: v => identity};
const convertMethod = {convertOption: v => identity};
const convertIntegrity = {convertOption: v => identity};
const convertHeadersRecord = () => ({convertOption: v => Web$dFetch$dHeaders.unsafeFromRecord});
const convertHeadersObject = {convertOption: v => Web$dFetch$dHeaders.fromObject};
const convertHeadersArray = {convertOption: v => Web$dFetch$dHeaders.fromFoldable(Data$dFoldable.foldableArray)};
const convertHeaders = {convertOption: v => identity};
const convertCache = {convertOption: v => identity};
const convertBodyView = {convertOption: v => Web$dFetch$dRequestBody.fromArrayView};
const convertBodyString = {convertOption: v => Web$dFetch$dRequestBody.fromString};
const convertBodyBuffer = {convertOption: v => Web$dFetch$dRequestBody.fromArrayBuffer};
const convertBody = {convertOption: v => identity};
const buildRequestOptionsRecord = () => dictConvertOptions => () => () => (
  {buildRequestOptions: r => Record$dUnsafe$dUnion.unsafeUnionFn(dictConvertOptions.convertOptions(Type$dProxy.Proxy)(Record$dBuilder.copyRecord(r)), defaultOptions)}
);
const buildRequestOptions = dict => dict.buildRequestOptions;
const new$p = dictBuildRequestOptions => url => options => {
  const $0 = toUnsafeOptions(dictBuildRequestOptions.buildRequestOptions(options));
  return () => _unsafeNew(url, $0);
};
export {
  buildRequestOptions,
  buildRequestOptionsRecord,
  convertBody,
  convertBodyBuffer,
  convertBodyString,
  convertBodyView,
  convertCache,
  convertHeaders,
  convertHeadersArray,
  convertHeadersObject,
  convertHeadersRecord,
  convertIntegrity,
  convertMethod,
  convertMode,
  convertOption,
  convertOptions,
  convertOptionsCons,
  convertOptionsNil,
  convertReferrer,
  convertReferrerPolicy,
  defaultOptions,
  defaultUnsafeOptions,
  identity,
  identity1,
  $$new as new,
  new$p,
  toUnsafeOptions,
  unsafeNew
};
export * from "./foreign.js";
