// | This module represents type-level mappings between `ArrayViewType`s
// | and meaningful data.
const showArrayViewTypeViewUint8 = {};
const showArrayViewTypeViewUint32 = {};
const showArrayViewTypeViewUint16 = {};
const showArrayViewTypeViewInt8 = {};
const showArrayViewTypeViewInt32 = {};
const showArrayViewTypeViewInt16 = {};
const showArrayViewTypeViewFloat64 = {};
const showArrayViewTypeViewFloat32 = {};
const showArrayViewTypeUint8Clamped = {};
const bytesPerTypeUint8Clamped = {byteWidth: v => 1};
const bytesPerTypeUint8 = {byteWidth: v => 1};
const bytesPerTypeUint32 = {byteWidth: v => 4};
const bytesPerTypeUint16 = {byteWidth: v => 2};
const bytesPerTypeInt8 = {byteWidth: v => 1};
const bytesPerTypeInt32 = {byteWidth: v => 4};
const bytesPerTypeInt16 = {byteWidth: v => 2};
const bytesPerTypeFloat64 = {byteWidth: v => 8};
const bytesPerTypeFloat32 = {byteWidth: v => 4};
const byteWidth = dict => dict.byteWidth;
const binaryValueUint8Clamped = {};
const binaryValueUint8 = {};
const binaryValueUint32 = {};
const binaryValueUint16 = {};
const binaryValueInt8 = {};
const binaryValueInt32 = {};
const binaryValueInt16 = {};
const binaryValueFloat64 = {};
const binaryValueFloat32 = {};
export {
  binaryValueFloat32,
  binaryValueFloat64,
  binaryValueInt16,
  binaryValueInt32,
  binaryValueInt8,
  binaryValueUint16,
  binaryValueUint32,
  binaryValueUint8,
  binaryValueUint8Clamped,
  byteWidth,
  bytesPerTypeFloat32,
  bytesPerTypeFloat64,
  bytesPerTypeInt16,
  bytesPerTypeInt32,
  bytesPerTypeInt8,
  bytesPerTypeUint16,
  bytesPerTypeUint32,
  bytesPerTypeUint8,
  bytesPerTypeUint8Clamped,
  showArrayViewTypeUint8Clamped,
  showArrayViewTypeViewFloat32,
  showArrayViewTypeViewFloat64,
  showArrayViewTypeViewInt16,
  showArrayViewTypeViewInt32,
  showArrayViewTypeViewInt8,
  showArrayViewTypeViewUint16,
  showArrayViewTypeViewUint32,
  showArrayViewTypeViewUint8
};
