const evalOr = () => () => ({});
const evalNotTrueFalse = {};
const evalNotFalseTrue = {};
const evalNotEqTrue = {};
const evalNotEqFalse = {};
const evalEqTrue = {};
const evalEqFalse = {};
const evalBoolTrue = () => ({});
const evalBoolFalse = () => ({});
const evalAssertTrueUnit$p = {};
const evalAssertFalse = () => ({});
const evalAnd = () => () => ({});
const xor = () => () => () => ({});
export {
  evalAnd,
  evalAssertFalse,
  evalAssertTrueUnit$p,
  evalBoolFalse,
  evalBoolTrue,
  evalEqFalse,
  evalEqTrue,
  evalNotEqFalse,
  evalNotEqTrue,
  evalNotFalseTrue,
  evalNotTrueFalse,
  evalOr,
  xor
};
