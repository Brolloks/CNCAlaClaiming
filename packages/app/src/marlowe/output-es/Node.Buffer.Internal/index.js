// | Functions and types to support the other modules. Not for public use.
import * as $runtime from "../runtime.js";
import * as Node$dBuffer$dImmutable from "../Node.Buffer.Immutable/index.js";
import {copy, copyAll, fill, setAtOffset, writeInternal, writeStringInternal} from "./foreign.js";
const writeString = dictMonad => x => writeStringInternal((() => {
  if (x === "ASCII") { return "ascii"; }
  if (x === "UTF8") { return "utf8"; }
  if (x === "UTF16LE") { return "utf16le"; }
  if (x === "UCS2") { return "ucs2"; }
  if (x === "Base64") { return "base64"; }
  if (x === "Latin1") { return "latin1"; }
  if (x === "Binary") { return "binary"; }
  if (x === "Hex") { return "hex"; }
  $runtime.fail();
})());
const write = dictMonad => x => writeInternal((() => {
  if (x === "UInt8") { return "UInt8"; }
  if (x === "UInt16LE") { return "UInt16LE"; }
  if (x === "UInt16BE") { return "UInt16BE"; }
  if (x === "UInt32LE") { return "UInt32LE"; }
  if (x === "UInt32BE") { return "UInt32BE"; }
  if (x === "Int8") { return "Int8"; }
  if (x === "Int16LE") { return "Int16LE"; }
  if (x === "Int16BE") { return "Int16BE"; }
  if (x === "Int32LE") { return "Int32LE"; }
  if (x === "Int32BE") { return "Int32BE"; }
  if (x === "FloatLE") { return "FloatLE"; }
  if (x === "FloatBE") { return "FloatBE"; }
  if (x === "DoubleLE") { return "DoubleLE"; }
  if (x === "DoubleBE") { return "DoubleBE"; }
  $runtime.fail();
})());
const unsafeThaw = dictMonad => x => dictMonad.Applicative0().pure(x);
const usingToImmutable = dictMonad => f => x => dictMonad.Applicative0().pure(f(x));
const unsafeFreeze = dictMonad => x => dictMonad.Applicative0().pure(x);
const usingFromImmutable = dictMonad => f => buf => dictMonad.Bind1().Apply0().Functor0().map(f)(dictMonad.Applicative0().pure(buf));
const toString = dictMonad => m => {
  const $0 = Node$dBuffer$dImmutable.toString(m);
  return buf => dictMonad.Bind1().Apply0().Functor0().map($0)(dictMonad.Applicative0().pure(buf));
};
const toArrayBuffer = dictMonad => buf => dictMonad.Bind1().Apply0().Functor0().map(Node$dBuffer$dImmutable.toArrayBuffer)(dictMonad.Applicative0().pure(buf));
const toArray = dictMonad => buf => dictMonad.Bind1().Apply0().Functor0().map(Node$dBuffer$dImmutable.toArray)(dictMonad.Applicative0().pure(buf));
const slice = Node$dBuffer$dImmutable.slice;
const size = dictMonad => buf => dictMonad.Bind1().Apply0().Functor0().map(Node$dBuffer$dImmutable.size)(dictMonad.Applicative0().pure(buf));
const readString = dictMonad => m => o => o$p => {
  const $0 = Node$dBuffer$dImmutable.readString(m)(o)(o$p);
  return buf => dictMonad.Bind1().Apply0().Functor0().map($0)(dictMonad.Applicative0().pure(buf));
};
const read = dictMonad => t => o => {
  const $0 = Node$dBuffer$dImmutable.read(t)(o);
  return buf => dictMonad.Bind1().Apply0().Functor0().map($0)(dictMonad.Applicative0().pure(buf));
};
const getAtOffset = dictMonad => o => {
  const $0 = Node$dBuffer$dImmutable.getAtOffset(o);
  return buf => dictMonad.Bind1().Apply0().Functor0().map($0)(dictMonad.Applicative0().pure(buf));
};
const fromString = dictMonad => s => {
  const $0 = Node$dBuffer$dImmutable.fromString(s);
  return x => dictMonad.Applicative0().pure($0(x));
};
const fromArrayBuffer = dictMonad => x => dictMonad.Applicative0().pure(Node$dBuffer$dImmutable.fromArrayBuffer(x));
const fromArray = dictMonad => x => dictMonad.Applicative0().pure(Node$dBuffer$dImmutable.fromArray(x));
const create = dictMonad => x => dictMonad.Applicative0().pure(Node$dBuffer$dImmutable.create(x));
const concat$p = dictMonad => arrs => n => v => Node$dBuffer$dImmutable.concatToLength(arrs)(n);
const concat = arrs => v => Node$dBuffer$dImmutable.concat(arrs);
export {
  concat,
  concat$p,
  create,
  fromArray,
  fromArrayBuffer,
  fromString,
  getAtOffset,
  read,
  readString,
  size,
  slice,
  toArray,
  toArrayBuffer,
  toString,
  unsafeFreeze,
  unsafeThaw,
  usingFromImmutable,
  usingToImmutable,
  write,
  writeString
};
export * from "./foreign.js";
