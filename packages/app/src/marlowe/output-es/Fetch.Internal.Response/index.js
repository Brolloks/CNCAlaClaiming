import * as Control$dPromise from "../Control.Promise/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Fetch$dCore$dResponse from "../Fetch.Core.Response/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const promiseToPromise = Unsafe$dCoerce.unsafeCoerce;
const text = response => {
  const $0 = Fetch$dCore$dResponse.text(response);
  return Effect$dAff._bind(Effect$dAff._liftEffect(() => $0()))(Control$dPromise.toAff$p(Control$dPromise.coerce));
};
const json = response => {
  const $0 = Fetch$dCore$dResponse.json(response);
  return Effect$dAff._bind(Effect$dAff._liftEffect(() => $0()))(Control$dPromise.toAff$p(Control$dPromise.coerce));
};
const body = Fetch$dCore$dResponse.body;
const blob = response => {
  const $0 = Fetch$dCore$dResponse.blob(response);
  return Effect$dAff._bind(Effect$dAff._liftEffect(() => $0()))(Control$dPromise.toAff$p(Control$dPromise.coerce));
};
const arrayBuffer = response => {
  const $0 = Fetch$dCore$dResponse.arrayBuffer(response);
  return Effect$dAff._bind(Effect$dAff._liftEffect(() => $0()))(Control$dPromise.toAff$p(Control$dPromise.coerce));
};
const convert = response => (
  {
    headers: Fetch$dCore$dResponse.headers(response),
    ok: Fetch$dCore$dResponse.ok(response),
    redirected: Fetch$dCore$dResponse.redirected(response),
    status: Fetch$dCore$dResponse.status(response),
    statusText: Fetch$dCore$dResponse.statusText(response),
    url: Fetch$dCore$dResponse.url(response),
    text: text(response),
    json: json(response),
    body: Fetch$dCore$dResponse.body(response),
    arrayBuffer: arrayBuffer(response),
    blob: blob(response)
  }
);
export {arrayBuffer, blob, body, convert, json, promiseToPromise, text};
