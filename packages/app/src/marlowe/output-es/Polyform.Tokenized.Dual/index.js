import * as $runtime from "../runtime.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dProfunctor from "../Data.Profunctor/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Polyform$dDual from "../Polyform.Dual/index.js";
import * as Polyform$dTokenized from "../Polyform.Tokenized/index.js";
const $DualD = (_1, _2) => ({tag: "DualD", _1, _2});
const fromFoldable = v2 => {
  if (v2.tag === "Nothing") { return Data$dList$dTypes.Nil; }
  if (v2.tag === "Just") { return Data$dList$dTypes.$List("Cons", v2._1, Data$dList$dTypes.Nil); }
  $runtime.fail();
};
const DualD = value0 => value1 => $DualD(value0, value1);
const Dual = x => x;
const serializer = v => v._2;
const profunctorDualD = dictProfunctor => ({dimap: l => r => v => $DualD(Polyform$dTokenized.functorTokenized(dictProfunctor).map(r)(v._1), x => v._2(l(x)))});
const parser = v => v._1;
const unliftUntokenized = dictProfunctor => d => Polyform$dDual.$DualD(dictProfunctor.dimap(Polyform$dTokenized.uncons)(Data$dTuple.snd)(d._1), d._2);
const newtypeDual = {Coercible0: () => {}};
const functorDualD = dictProfunctor => ({map: f => m => $DualD(Polyform$dTokenized.functorTokenized(dictProfunctor).map(f)(m._1), m._2)});
const dual = p => s => $DualD(p, s);
const liftUntokenized = dictFunctor => dictStrong => d => {
  const $0 = dictFunctor.map(fromFoldable);
  return $DualD(dictStrong.second(d._1), x => $0(d._2(x)));
};
const diverge = dictFunctor => dictProfunctor => Data$dProfunctor.lcmap(profunctorDualD(dictProfunctor));
const applyDualD = dictApplicative => {
  const Apply0 = dictApplicative.Apply0();
  return dictProfunctor => {
    const applyTokenized = Polyform$dTokenized.applyTokenized(dictProfunctor);
    const functorDualD1 = functorDualD(dictProfunctor);
    return dictSemigroupoid => {
      const applyTokenized1 = applyTokenized(dictSemigroupoid);
      return dictStrong => (
        {
          apply: v => v1 => $DualD(
            applyTokenized1(dictStrong).apply(v._1)(v1._1),
            o => Apply0.apply(Apply0.Functor0().map(Data$dList$dTypes.semigroupList.append)(v._2(o)))(v1._2(o))
          ),
          Functor0: () => functorDualD1
        }
      );
    };
  };
};
const applicativeDualD = dictApplicative => {
  const applyDualD1 = applyDualD(dictApplicative);
  return dictCategory => {
    const applicativeTokenized = Polyform$dTokenized.applicativeTokenized(dictCategory);
    const Semigroupoid0 = dictCategory.Semigroupoid0();
    return dictProfunctor => {
      const applicativeTokenized1 = applicativeTokenized(dictProfunctor);
      const applyDualD2 = applyDualD1(dictProfunctor)(Semigroupoid0);
      return dictStrong => {
        const applyDualD3 = applyDualD2(dictStrong);
        return {
          pure: a => $DualD(
            applicativeTokenized1(dictStrong).pure(a),
            (() => {
              const $0 = dictApplicative.pure(Data$dList$dTypes.Nil);
              return v => $0;
            })()
          ),
          Apply0: () => applyDualD3
        };
      };
    };
  };
};
const pureDual = dictCategory => dictStrong => {
  const Profunctor0 = dictStrong.Profunctor0();
  return dictApplicative => applicativeDualD(dictApplicative)(dictCategory)(Profunctor0)(dictStrong).pure;
};
export {
  $DualD,
  Dual,
  DualD,
  applicativeDualD,
  applyDualD,
  diverge,
  dual,
  fromFoldable,
  functorDualD,
  liftUntokenized,
  newtypeDual,
  parser,
  profunctorDualD,
  pureDual,
  serializer,
  unliftUntokenized
};
