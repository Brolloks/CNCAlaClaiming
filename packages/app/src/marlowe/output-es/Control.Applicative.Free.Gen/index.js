import * as Control$dApplicative$dFree from "../Control.Applicative.Free/index.js";
import * as Control$dMonad$dGen from "../Control.Monad.Gen/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dNonEmpty from "../Data.NonEmpty/index.js";
const foldable1NonEmpty = /* #__PURE__ */ Data$dNonEmpty.foldable1NonEmpty(Data$dFoldable.foldableArray);
const genFree = dictMonadGen => {
  const oneOf = Control$dMonad$dGen.oneOf(dictMonadGen)(foldable1NonEmpty);
  const Monad0 = dictMonadGen.Monad0();
  const Bind1 = Monad0.Bind1();
  const $0 = Bind1.Apply0().Functor0();
  const $1 = Monad0.Applicative0();
  return dictMonadRec => genF => genA => genA2A => oneOf(Data$dNonEmpty.$NonEmpty(
    $0.map(Control$dApplicative$dFree.Pure)(genA),
    [
      Bind1.bind(genF)(fUnit => Bind1.bind(genA)(a => $1.pure(Control$dApplicative$dFree.$FreeAp(
        "Ap",
        Control$dApplicative$dFree.$FreeAp("Pure", v => a),
        Control$dApplicative$dFree.$FreeAp("Lift", fUnit)
      )))),
      Bind1.bind(genF)(fUnit => Bind1.bind(genA)(a => Bind1.bind(genA2A)(a2a => $1.pure(Control$dApplicative$dFree.$FreeAp(
        "Ap",
        Control$dApplicative$dFree.$FreeAp("Pure", a2a),
        Control$dApplicative$dFree.$FreeAp("Ap", Control$dApplicative$dFree.$FreeAp("Pure", v => a), Control$dApplicative$dFree.$FreeAp("Lift", fUnit))
      ))))),
      Bind1.bind(genF)(fUnit => Bind1.bind(genA)(a => Bind1.bind(genA2A)(a2a => $1.pure(Control$dApplicative$dFree.$FreeAp(
        "Ap",
        Control$dApplicative$dFree.$FreeAp("Pure", a2a),
        Control$dApplicative$dFree.$FreeAp("Ap", Control$dApplicative$dFree.$FreeAp("Pure", v => a), Control$dApplicative$dFree.$FreeAp("Lift", fUnit))
      ))))),
      Bind1.bind(genA)(a => Bind1.bind(genA2A)(a2a => $1.pure(Control$dApplicative$dFree.$FreeAp(
        "Ap",
        Control$dApplicative$dFree.$FreeAp("Pure", a2a),
        Control$dApplicative$dFree.$FreeAp("Pure", a)
      ))))
    ]
  ));
};
export {foldable1NonEmpty, genFree};
