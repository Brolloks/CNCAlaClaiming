// | This module represents the functional bindings to JavaScript's `TypedArray` and other
// | objects. See [MDN's spec](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) for details.
// |
// | #### Creation
// |
// | - `whole`, `remainder`, and `part` are functions for building a typed array accessible interface
// |   on top of an existing `ArrayBuffer`
// | - `empty` and `fromArray` are functions for creating pure typed arrays
// |
// | #### Modification
// |
// | - `fill`, `set`, and `setTyped` are functions for assigning values from external sources
// | - `map` and `traverse` allow you to create a new array from the existing values in another
// | - `copyWithin` allows you to set values to the array that exist in other parts of the array
// | - `filter` creates a new array without the values that don't pass a predicate
// | - `reverse` modifies an existing array in-place, with all values reversed
// | - `sort` modifies an existing array in-place, with all values sorted
// |
// | #### Access
// |
// | - `elem`, `all`, and `any` are functions for testing the contents of an array
// | - `unsafeAt`, `hasIndex`, and `at` are used to get values from an array, with an index
// | - `foldr`, `foldrM`, `foldr1`, `foldr1M`, `foldl`, `foldlM`, `foldl1`, `foldl1M` all can reduce an array
// | - `find` and `findIndex` are searching functions via a predicate
// | - `indexOf` and `lastIndexOf` are searching functions via equality
// | - `slice` returns a new typed array on the same array buffer content as the input
// | - `subArray` returns a new typed array with a separate array buffer
// | - `toString` prints to a CSV, `join` allows you to supply the delimiter
// | - `toArray` returns an array of numeric values
import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import {
  buffer,
  byteLength,
  byteOffset,
  copyWithinImpl,
  everyImpl,
  fillImpl,
  filterImpl,
  findImpl,
  findIndexImpl,
  forEachImpl,
  hasIndexImpl,
  includesImpl,
  indexOfImpl,
  joinImpl,
  lastIndexOfImpl,
  lengthImpl,
  mapImpl,
  newFloat32Array,
  newFloat64Array,
  newInt16Array,
  newInt32Array,
  newInt8Array,
  newUint16Array,
  newUint32Array,
  newUint8Array,
  newUint8ClampedArray,
  reduce1Impl,
  reduceImpl,
  reduceRight1Impl,
  reduceRightImpl,
  reverseImpl,
  setImpl,
  sliceImpl,
  someImpl,
  sortImpl,
  subArrayImpl,
  toArrayImpl,
  toStringImpl,
  unsafeAtImpl
} from "./foreign.js";
const unsafeAt = dictTypedArray => () => a => o => () => unsafeAtImpl(a, o);
const typedArrayUint8Clamped = {create: newUint8ClampedArray, BinaryValue0: () => {}};
const typedArrayUint8 = {create: newUint8Array, BinaryValue0: () => {}};
const typedArrayUint32 = {create: newUint32Array, BinaryValue0: () => {}};
const typedArrayUint16 = {create: newUint16Array, BinaryValue0: () => {}};
const typedArrayInt8 = {create: newInt8Array, BinaryValue0: () => {}};
const typedArrayInt32 = {create: newInt32Array, BinaryValue0: () => {}};
const typedArrayInt16 = {create: newInt16Array, BinaryValue0: () => {}};
const typedArrayFloat64 = {create: newFloat64Array, BinaryValue0: () => {}};
const typedArrayFloat32 = {create: newFloat32Array, BinaryValue0: () => {}};
const traverseWithIndex_$p = dictTypedArray => f => a => () => forEachImpl(a, ($0, $1) => f($0)($1)());
const traverseWithIndex_ = dictTypedArray => x => traverseWithIndex_$p(dictTypedArray)(b => a => x(a)(b));
const traverseWithIndex$p = dictTypedArray => f => a => () => mapImpl(a, ($0, $1) => f($0)($1)());
const traverseWithIndex = dictTypedArray => x => traverseWithIndex$p(dictTypedArray)(b => a => x(a)(b));
const toString = a => () => toStringImpl(a);
const toArray = dictTypedArray => a => () => toArrayImpl(a);
const subArray = s => e => a => subArrayImpl(a, s, e);
const sort = a => () => sortImpl(a);
const some = dictTypedArray => p => a => () => someImpl(a, ($0, $1) => p($0)($1));
const slice = s => e => a => () => sliceImpl(a, s, e);
const reverse = a => () => reverseImpl(a);
const reduceRight1 = () => dictTypedArray => f => a => () => reduceRight1Impl(a, (acc, x, o) => f(x)(acc)(o)());
const reduceRight = dictTypedArray => f => i => a => () => reduceRightImpl(a, (acc, x, o) => f(x)(acc)(o)(), i);
const reduce1 = () => dictTypedArray => f => a => () => reduce1Impl(a, ($0, $1, $2) => f($0)($1)($2)());
const reduce = dictTypedArray => f => i => a => () => reduceImpl(a, ($0, $1, $2) => f($0)($1)($2)(), i);
const mapWithIndex$p = dictTypedArray => f => a => mapImpl(
  a,
  (x, o) => {
    const $0 = f(x)(o);
    return $0;
  }
);
const mapWithIndex = dictTypedArray => x => mapWithIndex$p(dictTypedArray)(b => a => x(a)(b));
const length = lengthImpl;
const setInternal = lenfn => a => mo => b => {
  const o = (() => {
    if (mo.tag === "Nothing") { return 0; }
    if (mo.tag === "Just") { return mo._1; }
    $runtime.fail();
  })();
  if (o >= 0 && lenfn(b) <= (lengthImpl(a) - o | 0)) {
    return () => {
      setImpl(a, o, b);
      return true;
    };
  }
  return () => false;
};
const $$set = dictTypedArray => setInternal(Data$dArray.length);
const setTyped = /* #__PURE__ */ setInternal(lengthImpl);
const lastIndexOf = dictTypedArray => x => mo => a => {
  const $0 = (() => {
    if (mo.tag === "Nothing") { return Data$dNullable.null; }
    if (mo.tag === "Just") { return Data$dNullable.notNull(mo._1); }
    $runtime.fail();
  })();
  return () => {
    const a$p = lastIndexOfImpl(a, x, $0);
    return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
  };
};
const join = s => a => () => joinImpl(a, s);
const indexOf = dictTypedArray => x => mo => a => {
  const $0 = (() => {
    if (mo.tag === "Nothing") { return Data$dNullable.null; }
    if (mo.tag === "Just") { return Data$dNullable.notNull(mo._1); }
    $runtime.fail();
  })();
  return () => {
    const a$p = indexOfImpl(a, x, $0);
    return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
  };
};
const hasIndex = a => o => hasIndexImpl(a, o);
const foldrWithIndex = dictTypedArray => f => reduceRight(dictTypedArray)(a => x => o => {
  const $0 = f(o)(a)(x);
  return () => $0;
});
const foldr1 = () => dictTypedArray => f => reduceRight1()(dictTypedArray)(x => a => v => {
  const $0 = f(a)(x);
  return () => $0;
});
const foldr = dictTypedArray => f => reduceRight(dictTypedArray)(a => x => v => {
  const $0 = f(a)(x);
  return () => $0;
});
const foldlWithIndex = dictTypedArray => f => reduce(dictTypedArray)(a => x => o => {
  const $0 = f(o)(a)(x);
  return () => $0;
});
const foldl1 = () => dictTypedArray => f => reduce1()(dictTypedArray)(a => x => v => {
  const $0 = f(a)(x);
  return () => $0;
});
const foldl = dictTypedArray => f => reduce(dictTypedArray)(a => x => v => {
  const $0 = f(a)(x);
  return () => $0;
});
const findWithIndex$p = dictTypedArray => f => a => () => {
  const a$p = findImpl(a, ($0, $1) => f($0)($1));
  return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
};
const findWithIndex = dictTypedArray => x => findWithIndex$p(dictTypedArray)(b => a => x(a)(b));
const findIndex = dictTypedArray => f => a => () => {
  const a$p = findIndexImpl(a, ($0, $1) => f($0)($1));
  return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
};
const filterWithIndex$p = dictTypedArray => p => a => () => filterImpl(a, ($0, $1) => p($0)($1));
const filterWithIndex = dictTypedArray => x => filterWithIndex$p(dictTypedArray)(b => a => x(a)(b));
const fill = dictTypedArray => x => s => e => a => () => fillImpl(x, s, e, a);
const every = dictTypedArray => p => a => () => everyImpl(a, ($0, $1) => p($0)($1));
const eq = dictTypedArray => dictEq => a => b => () => {
  const a$p = toArrayImpl(a);
  const a$p$1 = toArrayImpl(b);
  return Data$dEq.eqArrayImpl(dictEq.eq)(a$p)(a$p$1);
};
const elem = dictTypedArray => x => mo => a => {
  const $0 = (() => {
    if (mo.tag === "Nothing") { return Data$dNullable.null; }
    if (mo.tag === "Just") { return Data$dNullable.notNull(mo._1); }
    $runtime.fail();
  })();
  return () => includesImpl(a, x, $0);
};
const create = dict => dict.create;
const empty = dictTypedArray => n => () => dictTypedArray.create(n, Data$dNullable.null, Data$dNullable.null);
const fromArray = dictTypedArray => a => () => dictTypedArray.create(a, Data$dNullable.null, Data$dNullable.null);
const part$p = dictTypedArray => a => x => y => {
  const $0 = Data$dNullable.notNull(x);
  const $1 = Data$dNullable.notNull(y);
  return () => dictTypedArray.create(a, $0, $1);
};
const part = dictTypedArray => dictBytesPerType => a => x => y => part$p(dictTypedArray)(a)(x * dictBytesPerType.byteWidth(Type$dProxy.Proxy) | 0)(y);
const remainder = dictTypedArray => dictBytesPerType => a => x => {
  const $0 = Data$dNullable.notNull(x * dictBytesPerType.byteWidth(Type$dProxy.Proxy) | 0);
  return () => dictTypedArray.create(a, $0, Data$dNullable.null);
};
const whole = dictTypedArray => a => () => dictTypedArray.create(a, Data$dNullable.null, Data$dNullable.null);
const copyWithin = a => t => s => me => {
  const $0 = (() => {
    if (me.tag === "Nothing") { return Data$dNullable.null; }
    if (me.tag === "Just") { return Data$dNullable.notNull(me._1); }
    $runtime.fail();
  })();
  return () => copyWithinImpl(a, t, s, $0);
};
const compare = dictTypedArray => dictOrd => a => b => () => {
  const a$p = toArrayImpl(a);
  const a$p$1 = toArrayImpl(b);
  return Data$dOrd.ordArray(dictOrd).compare(a$p)(a$p$1);
};
const at = dictTypedArray => a => n => () => {
  const a$p = unsafeAtImpl(a, n);
  return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
};
const filter = dictTypedArray => x => filterWithIndex$p(dictTypedArray)(x$1 => v => x(x$1));
const find = dictTypedArray => x => findWithIndex$p(dictTypedArray)(x$1 => v => x(x$1));
const map = dictTypedArray => x => mapWithIndex$p(dictTypedArray)(x$1 => v => x(x$1));
const traverse = dictTypedArray => x => traverseWithIndex$p(dictTypedArray)(x$1 => v => x(x$1));
const traverse_ = dictTypedArray => x => traverseWithIndex_$p(dictTypedArray)(x$1 => v => x(x$1));
const anyWithIndex = dictTypedArray => x => some(dictTypedArray)(b => a => x(a)(b));
const any = dictTypedArray => x => some(dictTypedArray)(x$1 => v => x(x$1));
const allWithIndex = dictTypedArray => x => every(dictTypedArray)(b => a => x(a)(b));
const all = dictTypedArray => x => every(dictTypedArray)(x$1 => v => x(x$1));
export {
  all,
  allWithIndex,
  any,
  anyWithIndex,
  at,
  compare,
  copyWithin,
  create,
  elem,
  empty,
  eq,
  every,
  fill,
  filter,
  filterWithIndex,
  filterWithIndex$p,
  find,
  findIndex,
  findWithIndex,
  findWithIndex$p,
  foldl,
  foldl1,
  foldlWithIndex,
  foldr,
  foldr1,
  foldrWithIndex,
  fromArray,
  hasIndex,
  indexOf,
  join,
  lastIndexOf,
  length,
  map,
  mapWithIndex,
  mapWithIndex$p,
  part,
  part$p,
  reduce,
  reduce1,
  reduceRight,
  reduceRight1,
  remainder,
  reverse,
  $$set as set,
  setInternal,
  setTyped,
  slice,
  some,
  sort,
  subArray,
  toArray,
  toString,
  traverse,
  traverseWithIndex,
  traverseWithIndex$p,
  traverseWithIndex_,
  traverseWithIndex_$p,
  traverse_,
  typedArrayFloat32,
  typedArrayFloat64,
  typedArrayInt16,
  typedArrayInt32,
  typedArrayInt8,
  typedArrayUint16,
  typedArrayUint32,
  typedArrayUint8,
  typedArrayUint8Clamped,
  unsafeAt,
  whole
};
export * from "./foreign.js";
