import * as Data$dHTTP$dMethod from "../Data.HTTP.Method/index.js";
import * as Fetch$dCore$dHeaders from "../Fetch.Core.Headers/index.js";
import * as Fetch$dCore$dReferrer from "../Fetch.Core.Referrer/index.js";
import * as Fetch$dCore$dReferrerPolicy from "../Fetch.Core.ReferrerPolicy/index.js";
import * as Fetch$dCore$dRequest from "../Fetch.Core.Request/index.js";
import * as Fetch$dCore$dRequestCache from "../Fetch.Core.RequestCache/index.js";
import * as Fetch$dCore$dRequestCredentials from "../Fetch.Core.RequestCredentials/index.js";
import * as Fetch$dCore$dRequestMode from "../Fetch.Core.RequestMode/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const toCoreRequestOptionsHelpe = {convertHelper: v => v1 => ({})};
const toCoreRequestOptionsConve = {convertImpl: v => Unsafe$dCoerce.unsafeCoerce};
const toCoreRequestOptionsConve1 = {convertImpl: v => Fetch$dCore$dReferrerPolicy.toString};
const toCoreRequestOptionsConve2 = {convertImpl: v => Fetch$dCore$dReferrer.toString};
const toCoreRequestOptionsConve3 = {convertImpl: v => Fetch$dCore$dRequestMode.toString};
const toCoreRequestOptionsConve4 = {convertImpl: v => Fetch$dCore$dRequestCache.toString};
const toCoreRequestOptionsConve5 = {convertImpl: v => Fetch$dCore$dRequestCredentials.toString};
const toCoreRequestOptionsConve6 = dictToRequestBody => {
  const toRequestBody = dictToRequestBody.toRequestBody;
  return {convertImpl: v => toRequestBody};
};
const toCoreRequestOptionsConve7 = () => ({convertImpl: v => Fetch$dCore$dHeaders.unsafeFromRecord});
const toCoreRequestOptionsConve8 = {convertImpl: v => Data$dHTTP$dMethod.showMethod.show};
const $$new = () => url => options => () => Fetch$dCore$dRequest._unsafeNew(url, options);
const convertImpl = dict => dict.convertImpl;
const convertHelper = dict => dict.convertHelper;
const toCoreRequestOptionsHelpe1 = dictToCoreRequestOptionsConverter => () => () => () => dictIsSymbol => dictToCoreRequestOptionsHelper => () => () => (
  {
    convertHelper: v => r => Record$dUnsafe.unsafeSet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(dictToCoreRequestOptionsConverter.convertImpl(Type$dProxy.Proxy)(Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(r)))(dictToCoreRequestOptionsHelper.convertHelper(Type$dProxy.Proxy)(Record$dUnsafe.unsafeDelete(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(r)))
  }
);
const toCoreRequestOptionsRowRo = () => () => dictToCoreRequestOptionsHelper => ({convert: dictToCoreRequestOptionsHelper.convertHelper(Type$dProxy.Proxy)});
const convert = dict => dict.convert;
export {
  convert,
  convertHelper,
  convertImpl,
  $$new as new,
  toCoreRequestOptionsConve,
  toCoreRequestOptionsConve1,
  toCoreRequestOptionsConve2,
  toCoreRequestOptionsConve3,
  toCoreRequestOptionsConve4,
  toCoreRequestOptionsConve5,
  toCoreRequestOptionsConve6,
  toCoreRequestOptionsConve7,
  toCoreRequestOptionsConve8,
  toCoreRequestOptionsHelpe,
  toCoreRequestOptionsHelpe1,
  toCoreRequestOptionsRowRo
};
