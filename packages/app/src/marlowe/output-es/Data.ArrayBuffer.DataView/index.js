// | This module represents the functional bindings to JavaScript's `DataView`
// | objects. See [MDN's spec](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) for details.
import * as Data$dArrayBuffer$dValueMapping from "../Data.ArrayBuffer.ValueMapping/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Effect$dUncurried from "../Effect.Uncurried/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import {buffer, byteLength, byteOffset, getterImpl, partImpl, remainderImpl, setterImpl, whole} from "./foreign.js";
const $Endian = tag => tag;
const Float32IsSymbol = {reflectSymbol: () => "Float32"};
const Float64IsSymbol = {reflectSymbol: () => "Float64"};
const Int16IsSymbol = {reflectSymbol: () => "Int16"};
const Int32IsSymbol = {reflectSymbol: () => "Int32"};
const Uint16IsSymbol = {reflectSymbol: () => "Uint16"};
const Uint32IsSymbol = {reflectSymbol: () => "Uint32"};
const Int8IsSymbol = {reflectSymbol: () => "Int8"};
const Uint8IsSymbol = {reflectSymbol: () => "Uint8"};
const LE = /* #__PURE__ */ $Endian("LE");
const BE = /* #__PURE__ */ $Endian("BE");
const setter = dataView => offset => t => Effect$dUncurried.runEffectFn4(setterImpl)(dataView)(offset)(t);
const remainder = a => o => () => remainderImpl(a, o);
const part = a => o => l => () => partImpl(a, o, l);
const getter = data$p => dataView => offset => () => {
  const a$p = getterImpl({functionName: data$p.functionName, littleEndian: data$p.littleEndian, bytesPerValue: data$p.bytesPerValue}, dataView, offset);
  return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
};
const eqEndian = {
  eq: v => v1 => {
    if (v === "LE") { return v1 === "LE"; }
    return v === "BE" && v1 === "BE";
  }
};
const $$get = () => dictBytesPerType => () => dictIsSymbol => endian => prx => getter({
  functionName: "get" + dictIsSymbol.reflectSymbol(Type$dProxy.Proxy),
  bytesPerValue: dictBytesPerType.byteWidth(prx),
  littleEndian: endian === "LE"
});
const getBE = () => dictBytesPerType => () => dictIsSymbol => $$get()(dictBytesPerType)()(dictIsSymbol)(BE);
const getFloat32be = /* #__PURE__ */ getBE()(Data$dArrayBuffer$dValueMapping.bytesPerTypeFloat32)()(Float32IsSymbol)(Type$dProxy.Proxy);
const getFloat64be = /* #__PURE__ */ getBE()(Data$dArrayBuffer$dValueMapping.bytesPerTypeFloat64)()(Float64IsSymbol)(Type$dProxy.Proxy);
const getInt16be = /* #__PURE__ */ getBE()(Data$dArrayBuffer$dValueMapping.bytesPerTypeInt16)()(Int16IsSymbol)(Type$dProxy.Proxy);
const getInt32be = /* #__PURE__ */ getBE()(Data$dArrayBuffer$dValueMapping.bytesPerTypeInt32)()(Int32IsSymbol)(Type$dProxy.Proxy);
const getUint16be = /* #__PURE__ */ getBE()(Data$dArrayBuffer$dValueMapping.bytesPerTypeUint16)()(Uint16IsSymbol)(Type$dProxy.Proxy);
const getUint32be = /* #__PURE__ */ getBE()(Data$dArrayBuffer$dValueMapping.bytesPerTypeUint32)()(Uint32IsSymbol)(Type$dProxy.Proxy);
const getLE = () => dictBytesPerType => () => dictIsSymbol => $$get()(dictBytesPerType)()(dictIsSymbol)(LE);
const getFloat32le = /* #__PURE__ */ getLE()(Data$dArrayBuffer$dValueMapping.bytesPerTypeFloat32)()(Float32IsSymbol)(Type$dProxy.Proxy);
const getFloat64le = /* #__PURE__ */ getLE()(Data$dArrayBuffer$dValueMapping.bytesPerTypeFloat64)()(Float64IsSymbol)(Type$dProxy.Proxy);
const getInt16le = /* #__PURE__ */ getLE()(Data$dArrayBuffer$dValueMapping.bytesPerTypeInt16)()(Int16IsSymbol)(Type$dProxy.Proxy);
const getInt32le = /* #__PURE__ */ getLE()(Data$dArrayBuffer$dValueMapping.bytesPerTypeInt32)()(Int32IsSymbol)(Type$dProxy.Proxy);
const getInt8 = /* #__PURE__ */ getLE()(Data$dArrayBuffer$dValueMapping.bytesPerTypeInt8)()(Int8IsSymbol)(Type$dProxy.Proxy);
const getUint16le = /* #__PURE__ */ getLE()(Data$dArrayBuffer$dValueMapping.bytesPerTypeUint16)()(Uint16IsSymbol)(Type$dProxy.Proxy);
const getUint32le = /* #__PURE__ */ getLE()(Data$dArrayBuffer$dValueMapping.bytesPerTypeUint32)()(Uint32IsSymbol)(Type$dProxy.Proxy);
const getUint8 = /* #__PURE__ */ getLE()(Data$dArrayBuffer$dValueMapping.bytesPerTypeUint8)()(Uint8IsSymbol)(Type$dProxy.Proxy);
const $$set = () => dictBytesPerType => () => dictIsSymbol => endian => prx => setter({
  functionName: "set" + dictIsSymbol.reflectSymbol(Type$dProxy.Proxy),
  bytesPerValue: dictBytesPerType.byteWidth(prx),
  littleEndian: endian === "LE"
});
const setBE = () => dictBytesPerType => () => dictIsSymbol => $$set()(dictBytesPerType)()(dictIsSymbol)(BE);
const setFloat32be = /* #__PURE__ */ setBE()(Data$dArrayBuffer$dValueMapping.bytesPerTypeFloat32)()(Float32IsSymbol)(Type$dProxy.Proxy);
const setFloat64be = /* #__PURE__ */ setBE()(Data$dArrayBuffer$dValueMapping.bytesPerTypeFloat64)()(Float64IsSymbol)(Type$dProxy.Proxy);
const setInt16be = /* #__PURE__ */ setBE()(Data$dArrayBuffer$dValueMapping.bytesPerTypeInt16)()(Int16IsSymbol)(Type$dProxy.Proxy);
const setInt32be = /* #__PURE__ */ setBE()(Data$dArrayBuffer$dValueMapping.bytesPerTypeInt32)()(Int32IsSymbol)(Type$dProxy.Proxy);
const setUint16be = /* #__PURE__ */ setBE()(Data$dArrayBuffer$dValueMapping.bytesPerTypeUint16)()(Uint16IsSymbol)(Type$dProxy.Proxy);
const setUint32be = /* #__PURE__ */ setBE()(Data$dArrayBuffer$dValueMapping.bytesPerTypeUint32)()(Uint32IsSymbol)(Type$dProxy.Proxy);
const setLE = () => dictBytesPerType => () => dictIsSymbol => $$set()(dictBytesPerType)()(dictIsSymbol)(LE);
const setFloat32le = /* #__PURE__ */ setLE()(Data$dArrayBuffer$dValueMapping.bytesPerTypeFloat32)()(Float32IsSymbol)(Type$dProxy.Proxy);
const setFloat64le = /* #__PURE__ */ setLE()(Data$dArrayBuffer$dValueMapping.bytesPerTypeFloat64)()(Float64IsSymbol)(Type$dProxy.Proxy);
const setInt16le = /* #__PURE__ */ setLE()(Data$dArrayBuffer$dValueMapping.bytesPerTypeInt16)()(Int16IsSymbol)(Type$dProxy.Proxy);
const setInt32le = /* #__PURE__ */ setLE()(Data$dArrayBuffer$dValueMapping.bytesPerTypeInt32)()(Int32IsSymbol)(Type$dProxy.Proxy);
const setInt8 = /* #__PURE__ */ setLE()(Data$dArrayBuffer$dValueMapping.bytesPerTypeInt8)()(Int8IsSymbol)(Type$dProxy.Proxy);
const setUint16le = /* #__PURE__ */ setLE()(Data$dArrayBuffer$dValueMapping.bytesPerTypeUint16)()(Uint16IsSymbol)(Type$dProxy.Proxy);
const setUint32le = /* #__PURE__ */ setLE()(Data$dArrayBuffer$dValueMapping.bytesPerTypeUint32)()(Uint32IsSymbol)(Type$dProxy.Proxy);
const setUint8 = /* #__PURE__ */ setLE()(Data$dArrayBuffer$dValueMapping.bytesPerTypeUint8)()(Uint8IsSymbol)(Type$dProxy.Proxy);
export {
  $Endian,
  BE,
  Float32IsSymbol,
  Float64IsSymbol,
  Int16IsSymbol,
  Int32IsSymbol,
  Int8IsSymbol,
  LE,
  Uint16IsSymbol,
  Uint32IsSymbol,
  Uint8IsSymbol,
  eqEndian,
  $$get as get,
  getBE,
  getFloat32be,
  getFloat32le,
  getFloat64be,
  getFloat64le,
  getInt16be,
  getInt16le,
  getInt32be,
  getInt32le,
  getInt8,
  getLE,
  getUint16be,
  getUint16le,
  getUint32be,
  getUint32le,
  getUint8,
  getter,
  part,
  remainder,
  $$set as set,
  setBE,
  setFloat32be,
  setFloat32le,
  setFloat64be,
  setFloat64le,
  setInt16be,
  setInt16le,
  setInt32be,
  setInt32le,
  setInt8,
  setLE,
  setUint16be,
  setUint16le,
  setUint32be,
  setUint32le,
  setUint8,
  setter
};
export * from "./foreign.js";
