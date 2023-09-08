import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const optsAlias = () => ({CoerceProp0: () => {}});
const coercePropsUnexpected = () => () => ({});
const coercePropsNil = {};
const coercePropsMissing = () => () => ({});
const coercePropsMismatch = () => () => ({});
const coercePropsConsU = () => ({});
const coercePropsCons = () => () => ({});
const coercePropTuple = () => () => ({});
const coercePropStringGivenMismatch = () => () => () => ({});
const coercePropStringExpectedMismatch = () => () => () => ({});
const coercePropReq = dictTypeEquals => ({});
const coercePropRecord = () => () => () => ({});
const coercePropOptValuesMatch = {};
const coercePropOptValues = () => ({});
const coercePropOptValue = () => ({});
const coercePropNumberGivenMismatch = () => () => () => ({});
const coercePropNumberExpectedMismatch = () => () => () => ({});
const coercePropMaybe = () => ({});
const coercePropMatch = {};
const coercePropIntGivenMismatch = () => () => () => ({});
const coercePropIntExpectedMismatch = () => () => () => ({});
const coercePropEither = () => () => ({});
const coercePropEffect = () => ({});
const coercePropBooleanGivenMismatch = () => () => () => ({});
const coercePropBooleanExpectedMismatch = () => () => () => ({});
const coercePropArray = () => ({});
const coerce = () => Unsafe$dCoerce.unsafeCoerce;
export {
  coerce,
  coercePropArray,
  coercePropBooleanExpectedMismatch,
  coercePropBooleanGivenMismatch,
  coercePropEffect,
  coercePropEither,
  coercePropIntExpectedMismatch,
  coercePropIntGivenMismatch,
  coercePropMatch,
  coercePropMaybe,
  coercePropNumberExpectedMismatch,
  coercePropNumberGivenMismatch,
  coercePropOptValue,
  coercePropOptValues,
  coercePropOptValuesMatch,
  coercePropRecord,
  coercePropReq,
  coercePropStringExpectedMismatch,
  coercePropStringGivenMismatch,
  coercePropTuple,
  coercePropsCons,
  coercePropsConsU,
  coercePropsMismatch,
  coercePropsMissing,
  coercePropsNil,
  coercePropsUnexpected,
  optsAlias
};
