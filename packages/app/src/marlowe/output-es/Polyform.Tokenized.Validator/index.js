import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Polyform$dTokenized from "../Polyform.Tokenized/index.js";
import * as Polyform$dValidator from "../Polyform.Validator/index.js";
const run = dictFunctor => Polyform$dTokenized.unliftUntokenized({
  dimap: f => g => v => x => dictFunctor.map(m => {
    if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
    if (m.tag === "Right") { return Data$dEither.$Either("Right", g(m._1)); }
    $runtime.fail();
  })(v(f(x)))
});
const liftUntokenized = dictMonad => {
  const $0 = dictMonad.Applicative0();
  const strongValidator = Polyform$dValidator.strongValidator(dictMonad);
  return dictSemigroup => e => v => strongValidator(dictSemigroup).second(i => dictMonad.Bind1().bind($0.pure((() => {
    if (i.tag === "Just") { return Data$dEither.$Either("Right", i._1); }
    if (i.tag === "Nothing") { return Data$dEither.$Either("Left", e); }
    $runtime.fail();
  })()))(res$p => {
    if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
    if (res$p.tag === "Right") { return v(res$p._1); }
    $runtime.fail();
  }));
};
const end = dictMonad => {
  const strongValidator = Polyform$dValidator.strongValidator(dictMonad);
  const $0 = dictMonad.Applicative0();
  return dictSemigroup => err => strongValidator(dictSemigroup).second(x => $0.pure((() => {
    if (x.tag === "Nothing") { return Data$dEither.$Either("Right", undefined); }
    if (x.tag === "Just") { return Data$dEither.$Either("Left", err(x._1)); }
    $runtime.fail();
  })()));
};
export {end, liftUntokenized, run};
