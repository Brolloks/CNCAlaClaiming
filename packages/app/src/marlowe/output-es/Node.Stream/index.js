// | This module provides a low-level wrapper for the [Node Stream API](https://nodejs.org/api/stream.html).
import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Node$dBuffer$dInternal from "../Node.Buffer.Internal/index.js";
import {
  undefined as $$undefined,
  cork,
  destroy,
  destroyWithError,
  endImpl,
  isPaused,
  onClose,
  onDataEitherImpl,
  onEnd,
  onError,
  onFinish,
  onReadable,
  pause,
  pipe,
  readChunkImpl,
  readImpl,
  resume,
  setDefaultEncodingImpl,
  setEncodingImpl,
  uncork,
  unpipe,
  unpipeAll,
  writeImpl,
  writeStringImpl
} from "./foreign.js";
const writeString = w => enc => s => cb => writeStringImpl(w)((() => {
  if (enc === "ASCII") { return "ASCII"; }
  if (enc === "UTF8") { return "UTF8"; }
  if (enc === "UTF16LE") { return "UTF16LE"; }
  if (enc === "UCS2") { return "UCS2"; }
  if (enc === "Base64") { return "Base64"; }
  if (enc === "Latin1") { return "Latin1"; }
  if (enc === "Binary") { return "Binary"; }
  if (enc === "Hex") { return "Hex"; }
  $runtime.fail();
})())(s)(x => cb(Data$dNullable.nullable(x, Data$dMaybe.Nothing, Data$dMaybe.Just))());
const write = w => b => cb => writeImpl(w)(b)(x => cb(Data$dNullable.nullable(x, Data$dMaybe.Nothing, Data$dMaybe.Just))());
const setEncoding = r => enc => setEncodingImpl(r)((() => {
  if (enc === "ASCII") { return "ASCII"; }
  if (enc === "UTF8") { return "UTF8"; }
  if (enc === "UTF16LE") { return "UTF16LE"; }
  if (enc === "UCS2") { return "UCS2"; }
  if (enc === "Base64") { return "Base64"; }
  if (enc === "Latin1") { return "Latin1"; }
  if (enc === "Binary") { return "Binary"; }
  if (enc === "Hex") { return "Hex"; }
  $runtime.fail();
})());
const setDefaultEncoding = r => enc => setDefaultEncodingImpl(r)((() => {
  if (enc === "ASCII") { return "ASCII"; }
  if (enc === "UTF8") { return "UTF8"; }
  if (enc === "UTF16LE") { return "UTF16LE"; }
  if (enc === "UCS2") { return "UCS2"; }
  if (enc === "Base64") { return "Base64"; }
  if (enc === "Latin1") { return "Latin1"; }
  if (enc === "Binary") { return "Binary"; }
  if (enc === "Hex") { return "Hex"; }
  $runtime.fail();
})());
const readChunk = /* #__PURE__ */ readChunkImpl(Data$dEither.Left)(Data$dEither.Right);
const readEither = r => size => readImpl(readChunk)(Data$dMaybe.Nothing)(Data$dMaybe.Just)(r)((() => {
  if (size.tag === "Nothing") { return $$undefined; }
  if (size.tag === "Just") { return size._1; }
  $runtime.fail();
})());
const readString = r => size => enc => {
  const $0 = readEither(r)(size);
  return () => {
    const v = $0();
    if (v.tag === "Nothing") { return Data$dMaybe.Nothing; }
    if (v.tag === "Just") {
      if (v._1.tag === "Left") { return Effect$dException.throwException(Effect$dException.error("Stream encoding should not be set"))(); }
      if (v._1.tag === "Right") {
        const a$p = Node$dBuffer$dInternal.toString(Effect.monadEffect)(enc)(v._1._1)();
        return Data$dMaybe.$Maybe("Just", a$p);
      }
    }
    $runtime.fail();
  };
};
const read = r => size => {
  const $0 = readEither(r)(size);
  return () => {
    const v = $0();
    if (v.tag === "Nothing") { return Data$dMaybe.Nothing; }
    if (v.tag === "Just") {
      if (v._1.tag === "Left") { return Effect$dException.throwException(Effect$dException.error("Stream encoding should not be set"))(); }
      if (v._1.tag === "Right") { return Data$dMaybe.$Maybe("Just", v._1._1); }
    }
    $runtime.fail();
  };
};
const onDataEither = r => cb => onDataEitherImpl(readChunk)(r)(cb);
const onData = r => cb => onDataEitherImpl(readChunk)(r)(a => {
  const $0 = (() => {
    if (a.tag === "Left") { return Effect$dException.throwException(Effect$dException.error("Stream encoding should not be set")); }
    if (a.tag === "Right") {
      const $0 = a._1;
      return () => $0;
    }
    $runtime.fail();
  })();
  return () => {
    const $1 = $0();
    return cb($1)();
  };
});
const onDataString = r => enc => cb => onData(r)((() => {
  const $0 = Node$dBuffer$dInternal.toString(Effect.monadEffect)(enc);
  return a => {
    const $1 = $0(a);
    return () => {
      const $2 = $1();
      return cb($2)();
    };
  };
})());
const end = w => cb => endImpl(w)(x => cb(Data$dNullable.nullable(x, Data$dMaybe.Nothing, Data$dMaybe.Just))());
export {end, onData, onDataEither, onDataString, read, readChunk, readEither, readString, setDefaultEncoding, setEncoding, write, writeString};
export * from "./foreign.js";
