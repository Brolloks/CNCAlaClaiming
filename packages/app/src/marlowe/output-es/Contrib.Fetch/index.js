import * as $runtime from "../runtime.js";
import * as Contrib$dEffect$dException from "../Contrib.Effect.Exception/index.js";
import * as Control$dMonad$dExcept$dTrans from "../Control.Monad.Except.Trans/index.js";
import * as Control$dPromise from "../Control.Promise/index.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dArgonaut$dEncode$dClass from "../Data.Argonaut.Encode.Class/index.js";
import * as Data$dArgonaut$dEncode$dEncoders from "../Data.Argonaut.Encode.Encoders/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Fetch$dCore from "../Fetch.Core/index.js";
import * as Fetch$dCore$dHeaders from "../Fetch.Core.Headers/index.js";
import * as Fetch$dCore$dRequest from "../Fetch.Core.Request/index.js";
import * as Fetch$dInternal$dResponse from "../Fetch.Internal.Response/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const $FetchError = (tag, _1) => ({tag, _1});
const encodeJson = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons({encodeJson: Data$dArgonaut$dEncode$dEncoders.encodeForeignObject(Data$dArgonaut$dCore.fromString)})(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJBoolean)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJBoolean)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonInt)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({
    reflectSymbol: () => "url"
  })())({reflectSymbol: () => "statusText"})())({reflectSymbol: () => "status"})())({reflectSymbol: () => "redirected"})())({reflectSymbol: () => "ok"})())({
    reflectSymbol: () => "headers"
  })();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const fromFoldable = /* #__PURE__ */ Foreign$dObject.fromFoldable(Data$dFoldable.foldableArray);
const bind1 = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.bindExceptT(Effect$dAff.monadAff).bind)();
const pure1 = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.applicativeExceptT(Effect$dAff.monadAff).pure)();
const throwError = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.monadThrowExceptT(Effect$dAff.monadAff).throwError)();
const InvalidStatusCode = value0 => $FetchError("InvalidStatusCode", value0);
const FetchError = value0 => $FetchError("FetchError", value0);
const showFetchError = {
  show: v => {
    if (v.tag === "InvalidStatusCode") { return "InvalidStatusCode"; }
    if (v.tag === "FetchError") { return "FetchError " + Effect$dException.showErrorImpl(v._1); }
    $runtime.fail();
  }
};
const genericFetchError_ = {
  to: x => {
    if (x.tag === "Inl") { return $FetchError("InvalidStatusCode", x._1); }
    if (x.tag === "Inr") { return $FetchError("FetchError", x._1); }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "InvalidStatusCode") { return Data$dGeneric$dRep.$Sum("Inl", x._1); }
    if (x.tag === "FetchError") { return Data$dGeneric$dRep.$Sum("Inr", x._1); }
    $runtime.fail();
  }
};
const responseToJson = response => encodeJson({
  headers: fromFoldable(Fetch$dCore$dHeaders._toArray(Data$dTuple.Tuple, response.headers)),
  ok: response.ok,
  redirected: response.redirected,
  status: response.status,
  statusText: response.statusText,
  url: response.url
});
const jsonBody = response => Effect$dAff._map(Unsafe$dCoerce.unsafeCoerce)(response.json);
const fetchV = () => () => dictToCoreRequestOptions => url => r => allowedStatusCodes => bind1(Effect$dAff._catchError(Effect$dAff._map(Data$dEither.Right)(Effect$dAff._bind(Effect$dAff._liftEffect((() => {
  const $0 = dictToCoreRequestOptions.convert(r);
  return () => Fetch$dCore$dRequest._unsafeNew(url, $0);
})()))(request => Effect$dAff._bind(Effect$dAff._bind(Effect$dAff._liftEffect(() => Fetch$dCore._fetch(request, {})))(Control$dPromise.toAff$p(Control$dPromise.coerce)))(cResponse => Effect$dAff._pure(Fetch$dInternal$dResponse.convert(cResponse))))))(err => Effect$dAff._pure(Data$dEither.$Either(
  "Left",
  {type: "fetchError", value: $FetchError("FetchError", err)}
))))(res => {
  if (Data$dArray.elem(Data$dEq.eqInt)(res.status)(allowedStatusCodes)) { return pure1(res); }
  return throwError({type: "fetchError", value: $FetchError("InvalidStatusCode", res)});
});
const fetchErrorToJson = v => {
  if (v.tag === "InvalidStatusCode") { return responseToJson(v._1); }
  if (v.tag === "FetchError") { return Contrib$dEffect$dException.errorToJson(v._1); }
  $runtime.fail();
};
const fetchEither = () => () => dictToCoreRequestOptions => url => r => allowedStatusCodes => handleError => bind1(Effect$dAff._catchError(Effect$dAff._map(Data$dEither.Right)(Effect$dAff._bind(Effect$dAff._liftEffect((() => {
  const $0 = dictToCoreRequestOptions.convert(r);
  return () => Fetch$dCore$dRequest._unsafeNew(url, $0);
})()))(request => Effect$dAff._bind(Effect$dAff._bind(Effect$dAff._liftEffect(() => Fetch$dCore._fetch(request, {})))(Control$dPromise.toAff$p(Control$dPromise.coerce)))(cResponse => Effect$dAff._pure(Fetch$dInternal$dResponse.convert(cResponse))))))(err => Effect$dAff._pure(Data$dEither.$Either(
  "Left",
  handleError($FetchError("FetchError", err))
))))(res => {
  if (Data$dArray.elem(Data$dEq.eqInt)(res.status)(allowedStatusCodes)) { return pure1(res); }
  return throwError(handleError($FetchError("InvalidStatusCode", res)));
});
export {
  $FetchError,
  FetchError,
  InvalidStatusCode,
  bind1,
  encodeJson,
  fetchEither,
  fetchErrorToJson,
  fetchV,
  fromFoldable,
  genericFetchError_,
  jsonBody,
  pure1,
  responseToJson,
  showFetchError,
  throwError
};
