import * as Data$dHTTP$dMethod from "../Data.HTTP.Method/index.js";
import * as Effect$dUncurried from "../Effect.Uncurried/index.js";
import * as Fetch$dCore$dReferrer from "../Fetch.Core.Referrer/index.js";
import * as Fetch$dCore$dReferrerPolicy from "../Fetch.Core.ReferrerPolicy/index.js";
import * as Fetch$dCore$dRequestCache from "../Fetch.Core.RequestCache/index.js";
import * as Fetch$dCore$dRequestCredentials from "../Fetch.Core.RequestCredentials/index.js";
import * as Fetch$dCore$dRequestMode from "../Fetch.Core.RequestMode/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
import {_unsafeNew} from "./foreign.js";
const identity = x => x;
const toInternalHelperNilRow = {convertHelper: v => v1 => ({})};
const toInternalConverterReques = {convertImpl: Fetch$dCore$dRequestMode.toString};
const toInternalConverterReques1 = {convertImpl: Fetch$dCore$dRequestCache.toString};
const toInternalConverterReques2 = {convertImpl: Fetch$dCore$dRequestCredentials.toString};
const toInternalConverterReques3 = {convertImpl: identity};
const toInternalConverterReferr = {convertImpl: Fetch$dCore$dReferrerPolicy.toString};
const toInternalConverterReferr1 = {convertImpl: Fetch$dCore$dReferrer.toString};
const toInternalConverterMethod = /* #__PURE__ */ (() => ({convertImpl: Data$dHTTP$dMethod.showMethod.show}))();
const toInternalConverterIntegr = {convertImpl: Unsafe$dCoerce.unsafeCoerce};
const toInternalConverterHeader = {convertImpl: identity};
const unsafeNew = /* #__PURE__ */ Effect$dUncurried.runEffectFn2(_unsafeNew);
const convertImpl = dict => dict.convertImpl;
const convertHelper = dict => dict.convertHelper;
const toInternalHelperCons = dictToInternalConverter => () => () => () => dictIsSymbol => dictToInternalHelper => () => () => (
  {
    convertHelper: v => r => Record$dUnsafe.unsafeSet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(dictToInternalConverter.convertImpl(Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(r)))(dictToInternalHelper.convertHelper(Type$dProxy.Proxy)(Record$dUnsafe.unsafeDelete(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(r)))
  }
);
const toInternalRowRow = () => () => dictToInternalHelper => ({convert: dictToInternalHelper.convertHelper(Type$dProxy.Proxy)});
const convert = dict => dict.convert;
const $$new = () => () => dictToInternal => url => options => {
  const $0 = dictToInternal.convert(options);
  return () => _unsafeNew(url, $0);
};
export {
  convert,
  convertHelper,
  convertImpl,
  identity,
  $$new as new,
  toInternalConverterHeader,
  toInternalConverterIntegr,
  toInternalConverterMethod,
  toInternalConverterReferr,
  toInternalConverterReferr1,
  toInternalConverterReques,
  toInternalConverterReques1,
  toInternalConverterReques2,
  toInternalConverterReques3,
  toInternalHelperCons,
  toInternalHelperNilRow,
  toInternalRowRow,
  unsafeNew
};
export * from "./foreign.js";
