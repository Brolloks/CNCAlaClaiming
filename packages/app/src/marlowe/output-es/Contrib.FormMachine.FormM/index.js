import * as $runtime from "../runtime.js";
import * as Control$dMonad$dFree from "../Control.Monad.Free/index.js";
import * as Data$dCatList from "../Data.CatList/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
const $FormF = (tag, _1, _2) => ({tag, _1, _2});
const identity = x => x;
const ForkId = x => x;
const State = value0 => $FormF("State", value0);
const Lift = value0 => $FormF("Lift", value0);
const Fork = value0 => value1 => $FormF("Fork", value0, value1);
const FormM = x => x;
const semigroupFormM = dictSemigroup => Control$dMonad$dFree.semigroupFree(dictSemigroup);
const ordForkId = Data$dOrd.ordInt;
const monoidFormM = dictMonoid => Control$dMonad$dFree.monoidFree(dictMonoid);
const monadTransFormM = {
  lift: dictMonad => x => Control$dMonad$dFree.$Free(
    Control$dMonad$dFree.$FreeView("Bind", $FormF("Lift", x), x$1 => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x$1), Data$dCatList.CatNil)),
    Data$dCatList.CatNil
  )
};
const monadFormM = Control$dMonad$dFree.freeMonad;
const monadStateFormM = {
  state: x => Control$dMonad$dFree.$Free(
    Control$dMonad$dFree.$FreeView("Bind", $FormF("State", x), x$1 => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x$1), Data$dCatList.CatNil)),
    Data$dCatList.CatNil
  ),
  Monad0: () => Control$dMonad$dFree.freeMonad
};
const monadTellFormM = dictMonadTell => {
  const Semigroup0 = dictMonadTell.Semigroup0();
  return {
    tell: x => Control$dMonad$dFree.$Free(
      Control$dMonad$dFree.$FreeView(
        "Bind",
        $FormF("Lift", dictMonadTell.tell(x)),
        x$1 => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x$1), Data$dCatList.CatNil)
      ),
      Data$dCatList.CatNil
    ),
    Semigroup0: () => Semigroup0,
    Monad1: () => Control$dMonad$dFree.freeMonad
  };
};
const monadThrowFormM = dictMonadThrow => (
  {
    throwError: x => Control$dMonad$dFree.$Free(
      Control$dMonad$dFree.$FreeView(
        "Bind",
        $FormF("Lift", dictMonadThrow.throwError(x)),
        x$1 => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x$1), Data$dCatList.CatNil)
      ),
      Data$dCatList.CatNil
    ),
    Monad0: () => Control$dMonad$dFree.freeMonad
  }
);
const monadEffectFormM = dictMonadEffect => (
  {
    liftEffect: x => Control$dMonad$dFree.$Free(
      Control$dMonad$dFree.$FreeView(
        "Bind",
        $FormF("Lift", dictMonadEffect.liftEffect(x)),
        x$1 => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x$1), Data$dCatList.CatNil)
      ),
      Data$dCatList.CatNil
    ),
    Monad0: () => Control$dMonad$dFree.freeMonad
  }
);
const monadAskFormM = dictMonadAsk => (
  {
    ask: Control$dMonad$dFree.$Free(
      Control$dMonad$dFree.$FreeView("Bind", $FormF("Lift", dictMonadAsk.ask), x => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x), Data$dCatList.CatNil)),
      Data$dCatList.CatNil
    ),
    Monad0: () => Control$dMonad$dFree.freeMonad
  }
);
const monadAffFormM = dictMonadAff => {
  const monadEffectFormM1 = monadEffectFormM(dictMonadAff.MonadEffect0());
  return {
    liftAff: x => Control$dMonad$dFree.$Free(
      Control$dMonad$dFree.$FreeView(
        "Bind",
        $FormF("Lift", dictMonadAff.liftAff(x)),
        x$1 => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x$1), Data$dCatList.CatNil)
      ),
      Data$dCatList.CatNil
    ),
    MonadEffect0: () => monadEffectFormM1
  };
};
const functorFormM = Control$dMonad$dFree.freeFunctor;
const functorFormF = dictFunctor => (
  {
    map: f => v => {
      if (v.tag === "State") {
        return $FormF(
          "State",
          x => {
            const $0 = v._1(x);
            return Data$dTuple.$Tuple(f($0._1), $0._2);
          }
        );
      }
      if (v.tag === "Lift") { return $FormF("Lift", dictFunctor.map(f)(v._1)); }
      if (v.tag === "Fork") { return $FormF("Fork", v._1, x => f(v._2(x))); }
      $runtime.fail();
    }
  }
);
const eqForkId = Data$dEq.eqInt;
const bindFormM = Control$dMonad$dFree.freeBind;
const applyFormM = Control$dMonad$dFree.freeApply;
const applicativeFormM = Control$dMonad$dFree.freeApplicative;
const monadRecFormM = {
  tailRecM: k => a => {
    const $0 = k(a);
    return Control$dMonad$dFree.$Free(
      $0._1,
      Data$dCatList.snoc($0._2)(v => {
        if (v.tag === "Loop") { return monadRecFormM.tailRecM(k)(v._1); }
        if (v.tag === "Done") { return Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", v._1), Data$dCatList.CatNil); }
        $runtime.fail();
      })
    );
  },
  Monad0: () => Control$dMonad$dFree.freeMonad
};
const fork = hmu => Control$dMonad$dFree.$Free(
  Control$dMonad$dFree.$FreeView("Bind", $FormF("Fork", hmu, identity), x => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x), Data$dCatList.CatNil)),
  Data$dCatList.CatNil
);
export {
  $FormF,
  Fork,
  ForkId,
  FormM,
  Lift,
  State,
  applicativeFormM,
  applyFormM,
  bindFormM,
  eqForkId,
  fork,
  functorFormF,
  functorFormM,
  identity,
  monadAffFormM,
  monadAskFormM,
  monadEffectFormM,
  monadFormM,
  monadRecFormM,
  monadStateFormM,
  monadTellFormM,
  monadThrowFormM,
  monadTransFormM,
  monoidFormM,
  ordForkId,
  semigroupFormM
};
