import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Polyform$dDual from "../Polyform.Dual/index.js";
import * as Polyform$dDual$dGeneric$dVariant from "../Polyform.Dual.Generic.Variant/index.js";
import * as Polyform$dValidator from "../Polyform.Validator/index.js";
const variant = dictMonad => {
  const $0 = dictMonad.Applicative0().Apply0().Functor0();
  const functorValidator = {
    map: f => v => x => $0.map(m => {
      if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
      if (m.tag === "Right") { return Data$dEither.$Either("Right", f(m._1)); }
      $runtime.fail();
    })(v(x))
  };
  return () => dictSemigroup => Polyform$dDual$dGeneric$dVariant.variant()(Polyform$dValidator.altValidator(dictSemigroup)(dictMonad))(functorValidator);
};
const sum = dictMonad => dictSemigroup => {
  const altValidator = Polyform$dValidator.altValidator(dictSemigroup)(dictMonad);
  return dictGeneric => {
    const to = dictGeneric.to;
    return dictGDualSum => {
      const Functor0 = altValidator.Functor0();
      const gDual2 = dictGDualSum.gDual(Functor0)(altValidator);
      return pre => {
        const $0 = gDual2(dictIsSymbol => pre(dictIsSymbol));
        return x => {
          const $1 = $0(x);
          return Polyform$dDual.$DualD(Functor0.map(to)($1._1), x$1 => $1._2(dictGeneric.from(x$1)));
        };
      };
    };
  };
};
export {sum, variant};
