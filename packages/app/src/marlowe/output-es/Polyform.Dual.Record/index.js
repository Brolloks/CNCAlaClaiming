import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Polyform$dDual from "../Polyform.Dual/index.js";
import * as Record$dBuilder from "../Record.Builder/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
const identity = x => x;
const Builder = x => x;
const semigroupoidProductBuilder = dictSemigroup => {
  const append = dictSemigroup.append;
  return dictApplicative => {
    const $0 = dictApplicative.Apply0();
    return dictApplicative1 => {
      const Apply0 = dictApplicative1.Apply0();
      return {
        compose: v => v1 => Polyform$dDual.$DualD(
          Apply0.apply(Apply0.Functor0().map(Control$dSemigroupoid.semigroupoidFn.compose)(v._1))(v1._1),
          x => $0.apply($0.Functor0().map(append)(v1._2(x)))(v._2(x))
        )
      };
    };
  };
};
const insert = dictCons$p => {
  const IsSymbol0 = dictCons$p.IsSymbol0();
  return dictCons$p1 => dictFunctor => l => v => Polyform$dDual.$DualD(
    dictFunctor.map(Record$dBuilder.insert()()(IsSymbol0)(l))(v._1),
    x => v._2(Record$dUnsafe.unsafeGet(IsSymbol0.reflectSymbol(l))(x))
  );
};
const categoryProductBuilder = dictMonoid => {
  const mempty = dictMonoid.mempty;
  const semigroupoidProductBuilder1 = semigroupoidProductBuilder(dictMonoid.Semigroup0());
  return dictApplicative => {
    const semigroupoidProductBuilder2 = semigroupoidProductBuilder1(dictApplicative);
    return dictApplicative1 => {
      const semigroupoidProductBuilder3 = semigroupoidProductBuilder2(dictApplicative1);
      return {
        identity: Polyform$dDual.$DualD(
          dictApplicative1.pure(identity),
          (() => {
            const $0 = dictApplicative.pure(mempty);
            return v => $0;
          })()
        ),
        Semigroupoid0: () => semigroupoidProductBuilder3
      };
    };
  };
};
const build = dictFunctor => v => Polyform$dDual.$DualD(dictFunctor.map(a => a({}))(v._1), v._2);
export {Builder, build, categoryProductBuilder, identity, insert, semigroupoidProductBuilder};
