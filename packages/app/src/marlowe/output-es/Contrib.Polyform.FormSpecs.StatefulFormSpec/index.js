import * as $runtime from "../runtime.js";
import * as Control$dMonad$dState$dTrans from "../Control.Monad.State.Trans/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Polyform$dBatteries$dUrlEncoded$dTypes$dErrors from "../Polyform.Batteries.UrlEncoded.Types.Errors/index.js";
import * as Polyform$dBatteries$dUrlEncoded$dValidators from "../Polyform.Batteries.UrlEncoded.Validators/index.js";
import * as Polyform$dValidator from "../Polyform.Validator/index.js";
const StatefulFormSpec = x => x;
const semigroupoidStatefulFormS = dictMonad => dictSemigroup => (
  {
    compose: v => v1 => (
      {
        fields: [...v.fields, ...v1.fields],
        validator: i => Control$dMonad$dState$dTrans.bindStateT(dictMonad).bind(v1.validator(i))(res$p => {
          if (res$p.tag === "Left") { return Control$dMonad$dState$dTrans.applicativeStateT(dictMonad).pure(Data$dEither.$Either("Left", res$p._1)); }
          if (res$p.tag === "Right") { return v.validator(res$p._1); }
          $runtime.fail();
        }),
        render: x => dictSemigroup.append(v1.render(x))(v.render(x))
      }
    )
  }
);
const functorStatefulFormSpec = dictMonad => {
  const $0 = Control$dMonad$dState$dTrans.applicativeStateT(dictMonad).Apply0().Functor0();
  return {
    map: f => m => (
      {
        fields: m.fields,
        validator: x => $0.map(m$1 => {
          if (m$1.tag === "Left") { return Data$dEither.$Either("Left", m$1._1); }
          if (m$1.tag === "Right") { return Data$dEither.$Either("Right", f(m$1._1)); }
          $runtime.fail();
        })(m.validator(x)),
        render: m.render
      }
    )
  };
};
const categoryStatefulFormSpec = dictMonad => dictMonoid => {
  const semigroupoidStatefulFormS2 = semigroupoidStatefulFormS(dictMonad)(dictMonoid.Semigroup0());
  return {
    identity: {
      fields: [],
      validator: x => Control$dMonad$dState$dTrans.applicativeStateT(dictMonad).pure(Data$dEither.$Either("Right", x)),
      render: (() => {
        const mempty1 = dictMonoid.mempty;
        return v => mempty1;
      })()
    },
    Semigroupoid0: () => semigroupoidStatefulFormS2
  };
};
const applyStatefulFormSpec = dictMonad => {
  const functorStatefulFormSpec1 = functorStatefulFormSpec(dictMonad);
  return dictSemigroup => (
    {
      apply: v => v1 => (
        {
          fields: [...v.fields, ...v1.fields],
          validator: Polyform$dValidator.applyValidator(Control$dMonad$dState$dTrans.applicativeStateT(dictMonad))(Polyform$dBatteries$dUrlEncoded$dTypes$dErrors.semigroupErrors).apply(v.validator)(v1.validator),
          render: x => dictSemigroup.append(v.render(x))(v1.render(x))
        }
      ),
      Functor0: () => functorStatefulFormSpec1
    }
  );
};
const applicativeStatefulFormSp = dictMonad => {
  const applyStatefulFormSpec1 = applyStatefulFormSpec(dictMonad);
  return dictMonoid => {
    const mempty1 = dictMonoid.mempty;
    const applyStatefulFormSpec2 = applyStatefulFormSpec1(dictMonoid.Semigroup0());
    return {
      pure: a => (
        {
          fields: [],
          validator: Polyform$dValidator.applicativeValidator(Control$dMonad$dState$dTrans.applicativeStateT(dictMonad))(Polyform$dBatteries$dUrlEncoded$dTypes$dErrors.semigroupErrors).pure(a),
          render: v => mempty1
        }
      ),
      Apply0: () => applyStatefulFormSpec2
    };
  };
};
const toInputState = fieldState => (
  {
    errors: fieldState.errors,
    onChange: x => fieldState.onChange([x]),
    touched: fieldState.touched,
    value: (() => {
      const $0 = Data$dArray.index(fieldState.value)(0);
      if ($0.tag === "Nothing") { return ""; }
      if ($0.tag === "Just") { return $0._1; }
      $runtime.fail();
    })(),
    name: fieldState.name,
    initial: fieldState.initial
  }
);
const toFormValidator = dictMonad => {
  const monadStateT = {Applicative0: () => Control$dMonad$dState$dTrans.applicativeStateT(dictMonad), Bind1: () => Control$dMonad$dState$dTrans.bindStateT(dictMonad)};
  const $0 = Control$dMonad$dState$dTrans.applicativeStateT(dictMonad);
  return name => fieldValidator => Polyform$dValidator.lmapValidator(monadStateT)(Polyform$dBatteries$dUrlEncoded$dTypes$dErrors.singleton(name))(i => monadStateT.Bind1().bind($0.pure(Data$dEither.$Either(
    "Right",
    (() => {
      const $1 = Data$dMap$dInternal.lookup(Data$dOrd.ordString)(name)(i);
      if ($1.tag === "Just") { return Data$dArray.index($1._1)(0); }
      if ($1.tag === "Nothing") { return Data$dMaybe.Nothing; }
      $runtime.fail();
    })()
  )))(res$p => {
    if (res$p.tag === "Left") { return monadStateT.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
    if (res$p.tag === "Right") { return fieldValidator(res$p._1); }
    $runtime.fail();
  }));
};
const renderForm = v => v.render;
const optInput = dictMonad => {
  const optional = Polyform$dBatteries$dUrlEncoded$dValidators.optional({
    Applicative0: () => Control$dMonad$dState$dTrans.applicativeStateT(dictMonad),
    Bind1: () => Control$dMonad$dState$dTrans.bindStateT(dictMonad)
  });
  return dictMonoid => {
    const mempty1 = dictMonoid.mempty;
    return name => initial => render => touched => validator => (
      {
        fields: [{name, initial: [initial], touched}],
        validator: optional(name)(validator),
        render: state => {
          const $0 = Data$dMap$dInternal.lookup(Data$dOrd.ordString)(name)(state.fields);
          if ($0.tag === "Just") { return render(toInputState($0._1)); }
          return mempty1;
        }
      }
    );
  };
};
const multiSelect = dictMonad => {
  const requiredMulti = Polyform$dBatteries$dUrlEncoded$dValidators.requiredMulti({
    Applicative0: () => Control$dMonad$dState$dTrans.applicativeStateT(dictMonad),
    Bind1: () => Control$dMonad$dState$dTrans.bindStateT(dictMonad)
  });
  return name => initial => err => render => touched => validator => ({fields: [{name, initial, touched}], validator: requiredMulti(name)(err)(validator), render});
};
const mapRender = f => v => ({fields: v.fields, validator: v.validator, render: x => f(v.render(x))});
const liftValidator = dictMonoid => {
  const mempty1 = dictMonoid.mempty;
  return validator => ({fields: [], validator, render: v => mempty1});
};
const liftStatelessFormSpec = dictMonad => {
  const hoist1 = Polyform$dValidator.hoist(dictMonad.Bind1().Apply0().Functor0());
  return dictMonoid => v => (
    {
      fields: v.fields,
      validator: hoist1(m => s => dictMonad.Bind1().bind(m)(x => dictMonad.Applicative0().pure(Data$dTuple.$Tuple(x, s))))(v.validator),
      render: v1 => v.render({fields: v1.fields, errors: v1.errors, query: v1.query})
    }
  );
};
const input = dictMonad => {
  const toFormValidator1 = toFormValidator(dictMonad);
  return dictMonoid => {
    const mempty1 = dictMonoid.mempty;
    return name => initial => render => touched => validator => (
      {
        fields: [{name, initial: [initial], touched}],
        validator: toFormValidator1(name)(validator),
        render: state => {
          const $0 = Data$dMap$dInternal.lookup(Data$dOrd.ordString)(name)(state.fields);
          if ($0.tag === "Just") { return render(toInputState($0._1)); }
          return mempty1;
        }
      }
    );
  };
};
const hoist = dictFunctor => {
  const hoist1 = Polyform$dValidator.hoist({map: f => v => s => dictFunctor.map(v1 => Data$dTuple.$Tuple(f(v1._1), v1._2))(v(s))});
  return f => v => ({fields: v.fields, validator: hoist1(f)(v.validator), render: v.render});
};
export {
  StatefulFormSpec,
  applicativeStatefulFormSp,
  applyStatefulFormSpec,
  categoryStatefulFormSpec,
  functorStatefulFormSpec,
  hoist,
  input,
  liftStatelessFormSpec,
  liftValidator,
  mapRender,
  multiSelect,
  optInput,
  renderForm,
  semigroupoidStatefulFormS,
  toFormValidator,
  toInputState
};
