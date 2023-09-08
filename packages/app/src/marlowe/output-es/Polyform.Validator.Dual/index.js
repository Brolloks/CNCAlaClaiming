import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Polyform$dDual from "../Polyform.Dual/index.js";
import * as Polyform$dValidator from "../Polyform.Validator/index.js";
const smartNewtypeIso = dictMonad => {
  const $0 = dictMonad.Applicative0();
  return dictSemigroup => () => constructor => e => Polyform$dDual.$DualD(
    x => $0.pure((() => {
      const $1 = e(x);
      const $2 = constructor(x);
      if ($2.tag === "Nothing") { return Data$dEither.$Either("Left", $1); }
      if ($2.tag === "Just") { return Data$dEither.$Either("Right", $2._1); }
      $runtime.fail();
    })()),
    x => x
  );
};
const runValidator = dictMonad => x => x$1 => x._1(x$1);
const runSerializer = x => x$1 => x._2(x$1);
const lmapM = dictMonad => {
  const lmapM1 = Polyform$dValidator.lmapM(dictMonad);
  return f => v => Polyform$dDual.$DualD(lmapM1(f)(v._1), v._2);
};
const lmapDualD = dictMonad => f => v => Polyform$dDual.$DualD(Polyform$dValidator.lmapValidator(dictMonad)(f)(v._1), v._2);
const lmapDual = dictMonad => f => v => Polyform$dDual.$DualD(Polyform$dValidator.lmapValidator(dictMonad)(f)(v._1), v._2);
const liftEither = dictApplicative => dictSemigroup => Polyform$dDual.$DualD(
  x => dictApplicative.pure((() => {
    if (x.tag === "Left") { return Data$dEither.$Either("Left", x._1); }
    if (x.tag === "Right") { return Data$dEither.$Either("Right", x._1); }
    $runtime.fail();
  })()),
  x => Data$dEither.$Either("Right", x)
);
const iso = dictSemigroup => dictApplicative => p => s => Polyform$dDual.$DualD(x => dictApplicative.pure(Data$dEither.$Either("Right", p(x))), x => s(x));
const newtypeIso = dictMonad => {
  const Applicative0 = dictMonad.Applicative0();
  return dictSemigroup => () => Polyform$dDual.$DualD(x => Applicative0.pure(Data$dEither.$Either("Right", x)), x => x);
};
const invalidate = dictApplicative => e => Polyform$dDual.$DualD(x => dictApplicative.pure(Data$dEither.$Either("Left", e(x))), x => x);
const hoist = dictFunctor => nt => v => Polyform$dDual.$DualD(Polyform$dValidator.hoist(dictFunctor)(nt)(v._1), v._2);
const checkM = dictMonad => {
  const $0 = dictMonad.Applicative0();
  return dictSemigroup => e => c => Polyform$dDual.$DualD(
    x => dictMonad.Bind1().bind(c(x))(v => {
      if (v) { return $0.pure(Data$dEither.$Either("Right", x)); }
      return $0.pure(Data$dEither.$Either("Left", e(x)));
    }),
    Data$dIdentity.Identity
  );
};
const check = dictApplicative => dictSemigroup => e => c => Polyform$dDual.$DualD(
  x => dictApplicative.pure(c(x) ? Data$dEither.$Either("Right", x) : Data$dEither.$Either("Left", e(x))),
  Data$dIdentity.Identity
);
export {check, checkM, hoist, invalidate, iso, liftEither, lmapDual, lmapDualD, lmapM, newtypeIso, runSerializer, runValidator, smartNewtypeIso};
