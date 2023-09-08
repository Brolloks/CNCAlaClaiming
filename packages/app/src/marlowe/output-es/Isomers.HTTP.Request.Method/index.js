import * as Data$dHTTP$dMethod from "../Data.HTTP.Method/index.js";
import * as Partial from "../Partial/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const Method = x => x;
const newtypeMethod = {Coercible0: () => {}};
const hmapWithIndexMethod = dictHMapWithIndex => ({hmapWithIndex: f => v => dictHMapWithIndex.hmapWithIndex(f)(v)});
const hmapMethod = dictHMap => ({hmap: f => v => dictHMap.hmap(f)(v)});
const hfoldlWithIndexMethod = dictHFoldlWithIndex => ({hfoldlWithIndex: f => acc => v => dictHFoldlWithIndex.hfoldlWithIndex(f)(acc)(v)});
const hfoldlMethod = dictHFoldl => ({hfoldl: f => acc => v => dictHFoldl.hfoldl(f)(acc)(v)});
const functorMethod = {map: f => m => f(m)};
const extendIdentity = {extend: f => m => f(m), Functor0: () => functorMethod};
const comonadIdentity = {extract: v => v, Extend0: () => extendIdentity};
const _put = Type$dProxy.Proxy;
const put = x => ({type: "PUT", value: x});
const _post = Type$dProxy.Proxy;
const post = x => ({type: "POST", value: x});
const _get = Type$dProxy.Proxy;
const $$get = x => ({type: "GET", value: x});
const _delete = Type$dProxy.Proxy;
const $$delete = x => ({type: "DELETE", value: x});
const toHTTPMethod = v => {
  if (v.type === "GET") { return Data$dHTTP$dMethod.GET; }
  if (v.type === "POST") { return Data$dHTTP$dMethod.POST; }
  if (v.type === "PUT") { return Data$dHTTP$dMethod.PUT; }
  if (v.type === "DELETE") { return Data$dHTTP$dMethod.DELETE; }
  return Partial._crashWith("Data.Variant: pattern match failure [" + v.type + "]");
};
export {
  Method,
  _delete,
  _get,
  _post,
  _put,
  comonadIdentity,
  $$delete as delete,
  extendIdentity,
  functorMethod,
  $$get as get,
  hfoldlMethod,
  hfoldlWithIndexMethod,
  hmapMethod,
  hmapWithIndexMethod,
  newtypeMethod,
  post,
  put,
  toHTTPMethod
};
