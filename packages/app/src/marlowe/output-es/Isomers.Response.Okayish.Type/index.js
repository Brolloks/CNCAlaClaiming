import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const _ok = Type$dProxy.Proxy;
const lmapOkayish = () => f => v => {
  if (v.type === "ok") { return {type: "ok", value: v.value}; }
  return f(v);
};
const notOk = () => v1 => v1;
const ok = a => ({type: "ok", value: a});
const fromEither = () => v => {
  if (v.tag === "Right") { return {type: "ok", value: v._1}; }
  if (v.tag === "Left") { return v._1; }
  $runtime.fail();
};
const toEither = v => {
  if (v.type === "ok") { return Data$dEither.$Either("Right", v.value); }
  return Data$dEither.$Either("Left", v);
};
const unsafeFromEither = v => {
  if (v.tag === "Right") { return {type: "ok", value: v._1}; }
  if (v.tag === "Left") { return v._1; }
  $runtime.fail();
};
const roundtripEither = f => x => {
  const $0 = f(x.type === "ok" ? Data$dEither.$Either("Right", x.value) : Data$dEither.$Either("Left", x));
  if ($0.tag === "Right") { return {type: "ok", value: $0._1}; }
  if ($0.tag === "Left") { return $0._1; }
  $runtime.fail();
};
const _notFound = Type$dProxy.Proxy;
const notFound = () => x => ({type: "notFound", value: x});
const _found = Type$dProxy.Proxy;
const found = value => ({type: "found", value});
const _badRequest = Type$dProxy.Proxy;
const badRequest = () => x => ({type: "badRequest", value: x});
export {_badRequest, _found, _notFound, _ok, badRequest, found, fromEither, lmapOkayish, notFound, notOk, ok, roundtripEither, toEither, unsafeFromEither};
