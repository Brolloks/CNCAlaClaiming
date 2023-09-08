import * as Control$dMonad$dWriter$dTrans from "../Control.Monad.Writer.Trans/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dProfunctor$dStar from "../Data.Profunctor.Star/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Polyform$dDual from "../Polyform.Dual/index.js";
import * as Polyform$dReporter from "../Polyform.Reporter/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const runSerializer = x => x$1 => x._2(x$1);
const runReporter = x => x$1 => x._1(x$1);
const mapReport = dictMonad => {
  const lmapM = Polyform$dReporter.lmapM(dictMonad);
  return f => v => Polyform$dDual.$DualD(
    lmapM(x => dictMonad.Applicative0().pure(f(x)))(v._1),
    x => {
      const $0 = v._2(x);
      return Data$dTuple.$Tuple($0._1, f($0._2));
    }
  );
};
const liftValidatorDualWith = dictMonad => {
  const liftValidatorWith = Polyform$dReporter.liftValidatorWith(dictMonad.Bind1().Apply0().Functor0());
  return dictMonoid => {
    const bindWriterT = Control$dMonad$dWriter$dTrans.bindWriterT(dictMonoid.Semigroup0())(Data$dIdentity.bindIdentity);
    const mempty = dictMonoid.mempty;
    return fe => fo => d => Polyform$dDual.$DualD(
      liftValidatorWith(fe)(fo)(d._1),
      (() => {
        const $0 = Data$dProfunctor$dStar.strongStar(Data$dIdentity.functorIdentity).first(d._2);
        return a => bindWriterT.bind(Data$dTuple.$Tuple($0(Data$dTuple.$Tuple(a, a)), mempty))(v => {
          const $1 = v._1;
          return bindWriterT.bind(Control$dMonad$dWriter$dTrans.monadTellWriterT(dictMonoid)(Data$dIdentity.monadIdentity).tell(fo(v)))(() => Control$dMonad$dWriter$dTrans.applicativeWriterT(dictMonoid)(Data$dIdentity.applicativeIdentity).pure($1));
        });
      })()
    );
  };
};
const liftValidatorDual = dictMonad => {
  const liftValidator = Polyform$dReporter.liftValidator(dictMonad.Bind1().Apply0().Functor0());
  return dictMonoid => {
    const liftValidator1 = liftValidator(dictMonoid);
    const mempty = dictMonoid.mempty;
    return d => Polyform$dDual.$DualD(liftValidator1(d._1), x => Data$dTuple.$Tuple(d._2(x), mempty));
  };
};
const iso = dictMonoid => dictMonad => {
  const liftValidatorDual1 = liftValidatorDual(dictMonad)(dictMonoid);
  const $0 = dictMonad.Applicative0();
  return p => s => liftValidatorDual1(Polyform$dDual.$DualD(x => $0.pure(Data$dEither.$Either("Right", p(x))), x => s(x)));
};
const newtypeIso = dictMonad => dictMonoid => {
  const iso1 = iso(dictMonoid)(dictMonad);
  return () => iso1(Unsafe$dCoerce.unsafeCoerce)(Unsafe$dCoerce.unsafeCoerce);
};
const hoist = dictFunctor => nt => v => Polyform$dDual.$DualD(x => nt(v._1(x)), v._2);
export {hoist, iso, liftValidatorDual, liftValidatorDualWith, mapReport, newtypeIso, runReporter, runSerializer};
