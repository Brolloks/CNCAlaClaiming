import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const typeEqualsOnPathUnified = {};
const optsAlias = () => ({CoerceProp0: () => {}});
const coercePropsUnexpected = () => () => ({});
const coercePropsNil = {};
const coercePropsMissing = () => () => ({});
const coercePropsMismatch = () => () => ({});
const coercePropsConsU = () => ({});
const coercePropsCons = () => () => ({});
const coercePropUnify = () => ({});
const coercePropTuple = () => () => ({});
const coercePropReq = () => ({});
const coercePropRecord = () => () => () => ({});
const coercePropOptValuesMatch = {};
const coercePropOptValues = () => ({});
const coercePropOptValue = () => ({});
const coercePropMaybe = () => ({});
const coercePropEither = () => () => ({});
const coercePropEffect = () => ({});
const coercePropArray = () => ({});
const coerce = () => Unsafe$dCoerce.unsafeCoerce;
export {
  coerce,
  coercePropArray,
  coercePropEffect,
  coercePropEither,
  coercePropMaybe,
  coercePropOptValue,
  coercePropOptValues,
  coercePropOptValuesMatch,
  coercePropRecord,
  coercePropReq,
  coercePropTuple,
  coercePropUnify,
  coercePropsCons,
  coercePropsConsU,
  coercePropsMismatch,
  coercePropsMissing,
  coercePropsNil,
  coercePropsUnexpected,
  optsAlias,
  typeEqualsOnPathUnified
};
