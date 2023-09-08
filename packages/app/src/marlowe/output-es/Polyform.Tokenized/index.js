import * as $runtime from "../runtime.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dProfunctor from "../Data.Profunctor/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
const Tokenized = x => x;
const uncons = v => {
  if (v.tag === "Cons") { return Data$dTuple.$Tuple(v._2, Data$dMaybe.$Maybe("Just", v._1)); }
  if (v.tag === "Nil") { return Data$dTuple.$Tuple(Data$dList$dTypes.Nil, Data$dMaybe.Nothing); }
  $runtime.fail();
};
const unliftUntokenized = dictProfunctor => v => dictProfunctor.dimap(uncons)(Data$dTuple.snd)(v);
const liftUntokenized = dictStrong => dictStrong.second;
const functorTokenized = dictProfunctor => ({map: f => v => dictProfunctor.dimap(Data$dProfunctor.identity)(m => Data$dTuple.$Tuple(m._1, f(m._2)))(v)});
const applyTokenized = dictProfunctor => {
  const functorTokenized1 = functorTokenized(dictProfunctor);
  return dictSemigroupoid => dictStrong => (
    {
      apply: v => v1 => dictProfunctor.dimap(Data$dProfunctor.identity)(v2 => Data$dTuple.$Tuple(v2._1._1, v2._2(v2._1._2)))(dictSemigroupoid.compose(dictStrong.first(v1))(dictProfunctor.dimap(Data$dProfunctor.identity)(v2 => {
        if (v2._1.tag === "Cons") { return Data$dTuple.$Tuple(Data$dTuple.$Tuple(v2._1._2, Data$dMaybe.$Maybe("Just", v2._1._1)), v2._2); }
        if (v2._1.tag === "Nil") { return Data$dTuple.$Tuple(Data$dTuple.$Tuple(Data$dList$dTypes.Nil, Data$dMaybe.Nothing), v2._2); }
        $runtime.fail();
      })(v))),
      Functor0: () => functorTokenized1
    }
  );
};
const applicativeTokenized = dictCategory => {
  const identity = dictCategory.identity;
  const Semigroupoid0 = dictCategory.Semigroupoid0();
  return dictProfunctor => {
    const applyTokenized1 = applyTokenized(dictProfunctor)(Semigroupoid0);
    return dictStrong => {
      const applyTokenized2 = applyTokenized1(dictStrong);
      return {
        pure: i => dictProfunctor.dimap(Data$dProfunctor.identity)(v => {
          if (v._2.tag === "Just") { return Data$dTuple.$Tuple(Data$dList$dTypes.$List("Cons", v._2._1, v._1), i); }
          if (v._2.tag === "Nothing") { return Data$dTuple.$Tuple(v._1, i); }
          $runtime.fail();
        })(identity),
        Apply0: () => applyTokenized2
      };
    };
  };
};
const altTokenized = dictAlt => dictCategory => {
  const $0 = dictCategory.Semigroupoid0();
  return dictCostrong => {
    const Profunctor0 = dictCostrong.Profunctor0();
    const functorTokenized1 = functorTokenized(Profunctor0);
    return dictStrong => (
      {
        alt: v => v1 => $0.compose(dictStrong.second(dictAlt.alt(dictCostrong.unsecond(v))(dictCostrong.unsecond(v1))))(dictStrong.first(dictCostrong.unfirst(Profunctor0.dimap(Data$dProfunctor.identity)(m => Data$dTuple.$Tuple(
          m._1,
          Data$dMaybe.Nothing
        ))(v)))),
        Functor0: () => functorTokenized1
      }
    );
  };
};
export {Tokenized, altTokenized, applicativeTokenized, applyTokenized, functorTokenized, liftUntokenized, uncons, unliftUntokenized};
