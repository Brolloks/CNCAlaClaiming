import * as $runtime from "../runtime.js";
import * as Control$dMonad$dReader$dTrans from "../Control.Monad.Reader.Trans/index.js";
import * as Control$dMonad$dState$dTrans from "../Control.Monad.State.Trans/index.js";
import * as Data$dFunctor$dCompose from "../Data.Functor.Compose/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
const FieldIdPrefix = x => x;
const FormSpecBuilderT = x => x;
const newtypeFormSpecBuilderT_ = {Coercible0: () => {}};
const functorFormSpecBuilderT = dictApplicative => {
  const $0 = dictApplicative.Apply0().Functor0();
  return dictFunctor1 => (
    {
      map: f => v => {
        const $1 = dictFunctor1.map(f);
        return x => {
          const $2 = v(x);
          return s => $0.map(v1 => Data$dTuple.$Tuple($1(v1._1), v1._2))($2(s));
        };
      }
    }
  );
};
const applyFormSpecBuilderT = dictMonad => {
  const $0 = Control$dMonad$dState$dTrans.applyStateT(dictMonad);
  const $1 = $0.Functor0();
  return dictApply1 => {
    const apply1 = dictApply1.apply;
    const $2 = dictApply1.Functor0();
    const functorCompose2 = {
      map: f => v => {
        const $3 = $1.map($2.map(f));
        return x => $3(v(x));
      }
    };
    return {
      apply: v => v1 => {
        const $3 = $1.map(apply1);
        return r => $0.apply($3(v(r)))(v1(r));
      },
      Functor0: () => functorCompose2
    };
  };
};
const applicativeFormSpecBuilde = dictMonad => Data$dFunctor$dCompose.applicativeCompose((() => {
  const $0 = Control$dMonad$dState$dTrans.applicativeStateT(dictMonad);
  const $1 = $0.Apply0();
  const $2 = $1.Functor0();
  const functorReaderT1 = {
    map: x => {
      const $3 = $2.map(x);
      return v => x$1 => $3(v(x$1));
    }
  };
  const applyReaderT1 = {apply: v => v1 => r => $1.apply(v(r))(v1(r)), Functor0: () => functorReaderT1};
  return {
    pure: x => {
      const $3 = $0.pure(x);
      return v => $3;
    },
    Apply0: () => applyReaderT1
  };
})());
const unFormSpecBuilder = v => v;
const hoistFormSpec = dictFunctor => x => v => x$1 => {
  const $0 = v(x$1);
  return s => dictFunctor.map(v1 => Data$dTuple.$Tuple(x(v1._1), v1._2))($0(s));
};
const formSpecBuilderT = x => x;
const liftBuilderM = dictMonad => x => v => s => dictMonad.Bind1().bind(x)(x$1 => dictMonad.Applicative0().pure(Data$dTuple.$Tuple(x$1, s)));
const semigroupoidFormSpecBuild = dictMonad => {
  const $0 = Control$dMonad$dReader$dTrans.bindReaderT(Control$dMonad$dState$dTrans.bindStateT(dictMonad));
  const $1 = Control$dMonad$dState$dTrans.applicativeStateT(dictMonad);
  return dictSemigroupoid => (
    {
      compose: v => v1 => $0.bind(v)(formSpec1 => $0.bind(v1)(formSpec2 => {
        const $2 = $1.pure(dictSemigroupoid.compose(formSpec1)(formSpec2));
        return v$1 => $2;
      }))
    }
  );
};
const categoryFormSpecBuilderT = dictMonad => {
  const $0 = Control$dMonad$dState$dTrans.applicativeStateT(dictMonad);
  const semigroupoidFormSpecBuild1 = semigroupoidFormSpecBuild(dictMonad);
  return dictCategory => {
    const semigroupoidFormSpecBuild2 = semigroupoidFormSpecBuild1(dictCategory.Semigroupoid0());
    return {
      identity: (() => {
        const $1 = $0.pure(dictCategory.identity);
        return v => $1;
      })(),
      Semigroupoid0: () => semigroupoidFormSpecBuild2
    };
  };
};
const evalBuilderT = dictFunctor => possiblePrefix => v => dictFunctor.map(Data$dTuple.fst)(v(possiblePrefix)(0));
const evalBuilder = possiblePrefix => x => x(possiblePrefix)(0)._1;
const evalBuilder$p = x => x(Data$dMaybe.Nothing)(0)._1;
const _fullPrefix = v => v + "-";
const prefixString = prefix => str => prefix + "-" + str;
const genId = dictMonad => {
  const bindReaderT = Control$dMonad$dReader$dTrans.bindReaderT(Control$dMonad$dState$dTrans.bindStateT(dictMonad));
  const monadStateReaderT = Control$dMonad$dReader$dTrans.monadStateReaderT(Control$dMonad$dState$dTrans.monadStateStateT(dictMonad));
  const $$get = monadStateReaderT.state(s => Data$dTuple.$Tuple(s, s));
  const $0 = Control$dMonad$dState$dTrans.applicativeStateT(dictMonad);
  return bindReaderT.bind(Control$dMonad$dState$dTrans.applicativeStateT(dictMonad).pure)(possiblePrefix => bindReaderT.bind($$get)(counter => bindReaderT.bind((() => {
    const $1 = counter + 1 | 0;
    return monadStateReaderT.state(v => Data$dTuple.$Tuple(undefined, $1));
  })())(() => {
    const $1 = Data$dShow.showIntImpl(counter);
    const $2 = $0.pure((() => {
      if (possiblePrefix.tag === "Nothing") { return $1; }
      if (possiblePrefix.tag === "Just") { return possiblePrefix._1 + "-" + $1; }
      $runtime.fail();
    })());
    return v => $2;
  })));
};
const prefixFieldId = prefix => v => prefix + "-" + v;
export {
  FieldIdPrefix,
  FormSpecBuilderT,
  _fullPrefix,
  applicativeFormSpecBuilde,
  applyFormSpecBuilderT,
  categoryFormSpecBuilderT,
  evalBuilder,
  evalBuilder$p,
  evalBuilderT,
  formSpecBuilderT,
  functorFormSpecBuilderT,
  genId,
  hoistFormSpec,
  liftBuilderM,
  newtypeFormSpecBuilderT_,
  prefixFieldId,
  prefixString,
  semigroupoidFormSpecBuild,
  unFormSpecBuilder
};
