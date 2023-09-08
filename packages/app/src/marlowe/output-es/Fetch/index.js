import * as Control$dPromise from "../Control.Promise/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Fetch$dCore from "../Fetch.Core/index.js";
import * as Fetch$dCore$dRequest from "../Fetch.Core.Request/index.js";
import * as Fetch$dInternal$dResponse from "../Fetch.Internal.Response/index.js";
const fetchBody = dictToRequestBody => () => () => dictToCoreRequestOptions => url => r => Effect$dAff._bind(Effect$dAff._liftEffect((() => {
  const $0 = dictToCoreRequestOptions.convert(r);
  return () => Fetch$dCore$dRequest._unsafeNew(url, $0);
})()))(request => Effect$dAff._bind(Effect$dAff._bind(Effect$dAff._liftEffect(() => Fetch$dCore._fetch(request, {})))(Control$dPromise.toAff$p(Control$dPromise.coerce)))(cResponse => Effect$dAff._pure(Fetch$dInternal$dResponse.convert(cResponse))));
const fetch = () => () => dictToCoreRequestOptions => url => r => Effect$dAff._bind(Effect$dAff._liftEffect((() => {
  const $0 = dictToCoreRequestOptions.convert(r);
  return () => Fetch$dCore$dRequest._unsafeNew(url, $0);
})()))(request => Effect$dAff._bind(Effect$dAff._bind(Effect$dAff._liftEffect(() => Fetch$dCore._fetch(request, {})))(Control$dPromise.toAff$p(Control$dPromise.coerce)))(cResponse => Effect$dAff._pure(Fetch$dInternal$dResponse.convert(cResponse))));
export {fetch, fetchBody};
