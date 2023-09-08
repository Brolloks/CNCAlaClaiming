// | This module defines a data type for _Leibniz equality_.
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const Leibniz = x => x;
const symm = v => Unsafe$dCoerce.unsafeCoerce;
const semigroupoidLeibniz = {compose: b => a => x => b(a(x))};
const runLeibniz = v => v;
const refl = x => x;
const lowerLeibniz3of3 = v => Unsafe$dCoerce.unsafeCoerce;
const lowerLeibniz2of3 = v => Unsafe$dCoerce.unsafeCoerce;
const lowerLeibniz2of2 = v => Unsafe$dCoerce.unsafeCoerce;
const lowerLeibniz1of3 = v => Unsafe$dCoerce.unsafeCoerce;
const lowerLeibniz1of2 = v => Unsafe$dCoerce.unsafeCoerce;
const lowerLeibniz = v => Unsafe$dCoerce.unsafeCoerce;
const distinguishRight = {};
const distinguishLeft = {};
const refute = () => l => {
  const spin = spin$a0$copy => {
    let spin$a0 = spin$a0$copy, spin$c = true, spin$r;
    while (spin$c) {
      const v = spin$a0;
      spin$a0 = v;
    }
    return spin$r;
  };
  return spin(l());
};
const coerceSymm = v => Unsafe$dCoerce.unsafeCoerce;
const coerce = v => Unsafe$dCoerce.unsafeCoerce;
const categoryLeibniz = {identity: refl, Semigroupoid0: () => semigroupoidLeibniz};
const applyLeibniz3of3 = v => v1 => Unsafe$dCoerce.unsafeCoerce;
const liftLeibniz3of3 = /* #__PURE__ */ applyLeibniz3of3(refl);
const applyLeibniz2of3 = v => v1 => Unsafe$dCoerce.unsafeCoerce;
const liftLeibniz2of3 = /* #__PURE__ */ applyLeibniz2of3(refl);
const applyLeibniz2of2 = v => v1 => Unsafe$dCoerce.unsafeCoerce;
const liftLeibniz2of2 = /* #__PURE__ */ applyLeibniz2of2(refl);
const applyLeibniz1of3 = v => v1 => Unsafe$dCoerce.unsafeCoerce;
const liftLeibniz1of3 = /* #__PURE__ */ applyLeibniz1of3(refl);
const applyLeibniz1of2 = v => v1 => Unsafe$dCoerce.unsafeCoerce;
const liftLeibniz1of2 = /* #__PURE__ */ applyLeibniz1of2(refl);
const applyLeibniz = v => v1 => Unsafe$dCoerce.unsafeCoerce;
const liftLeibniz = /* #__PURE__ */ applyLeibniz(refl);
export {
  Leibniz,
  applyLeibniz,
  applyLeibniz1of2,
  applyLeibniz1of3,
  applyLeibniz2of2,
  applyLeibniz2of3,
  applyLeibniz3of3,
  categoryLeibniz,
  coerce,
  coerceSymm,
  distinguishLeft,
  distinguishRight,
  liftLeibniz,
  liftLeibniz1of2,
  liftLeibniz1of3,
  liftLeibniz2of2,
  liftLeibniz2of3,
  liftLeibniz3of3,
  lowerLeibniz,
  lowerLeibniz1of2,
  lowerLeibniz1of3,
  lowerLeibniz2of2,
  lowerLeibniz2of3,
  lowerLeibniz3of3,
  refl,
  refute,
  runLeibniz,
  semigroupoidLeibniz,
  symm
};
