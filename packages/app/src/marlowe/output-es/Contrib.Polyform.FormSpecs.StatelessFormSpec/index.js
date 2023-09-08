import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Polyform$dBatteries$dUrlEncoded$dTypes$dErrors from "../Polyform.Batteries.UrlEncoded.Types.Errors/index.js";
import * as Polyform$dBatteries$dUrlEncoded$dValidators from "../Polyform.Batteries.UrlEncoded.Validators/index.js";
import * as Polyform$dValidator from "../Polyform.Validator/index.js";
const StatelessFormSpec = x => x;
const semigroupoidStatelessForm = dictMonad => dictSemigroup => (
  {
    compose: v => v1 => (
      {
        fields: [...v.fields, ...v1.fields],
        validator: i => dictMonad.Bind1().bind(v1.validator(i))(res$p => {
          if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
          if (res$p.tag === "Right") { return v.validator(res$p._1); }
          $runtime.fail();
        }),
        render: x => dictSemigroup.append(v1.render(x))(v.render(x))
      }
    )
  }
);
const functorStatelessFormSpec = dictApplicative => {
  const $0 = dictApplicative.Apply0().Functor0();
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
const categoryStatelessFormSpec = dictMonad => dictMonoid => {
  const semigroupoidStatelessForm2 = semigroupoidStatelessForm(dictMonad)(dictMonoid.Semigroup0());
  return {
    identity: {
      fields: [],
      validator: x => dictMonad.Applicative0().pure(Data$dEither.$Either("Right", x)),
      render: (() => {
        const mempty1 = dictMonoid.mempty;
        return v => mempty1;
      })()
    },
    Semigroupoid0: () => semigroupoidStatelessForm2
  };
};
const applyStatelessFormSpec = dictMonad => {
  const Applicative0 = dictMonad.Applicative0();
  const $0 = Applicative0.Apply0().Functor0();
  const functorStatelessFormSpec1 = {
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
  return dictSemigroup => (
    {
      apply: v => v1 => (
        {
          fields: [...v.fields, ...v1.fields],
          validator: Polyform$dValidator.applyValidator(Applicative0)(Polyform$dBatteries$dUrlEncoded$dTypes$dErrors.semigroupErrors).apply(v.validator)(v1.validator),
          render: x => dictSemigroup.append(v.render(x))(v1.render(x))
        }
      ),
      Functor0: () => functorStatelessFormSpec1
    }
  );
};
const applicativeStatelessFormS = dictMonad => {
  const applyStatelessFormSpec1 = applyStatelessFormSpec(dictMonad);
  return dictMonoid => {
    const mempty1 = dictMonoid.mempty;
    const applyStatelessFormSpec2 = applyStatelessFormSpec1(dictMonoid.Semigroup0());
    return {
      pure: a => (
        {
          fields: [],
          validator: Polyform$dValidator.applicativeValidator(dictMonad.Applicative0())(Polyform$dBatteries$dUrlEncoded$dTypes$dErrors.semigroupErrors).pure(a),
          render: v => mempty1
        }
      ),
      Apply0: () => applyStatelessFormSpec2
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
  const $0 = dictMonad.Applicative0();
  return name => fieldValidator => Polyform$dValidator.lmapValidator(dictMonad)(Polyform$dBatteries$dUrlEncoded$dTypes$dErrors.singleton(name))(i => dictMonad.Bind1().bind($0.pure(Data$dEither.$Either(
    "Right",
    (() => {
      const $1 = Data$dMap$dInternal.lookup(Data$dOrd.ordString)(name)(i);
      if ($1.tag === "Just") { return Data$dArray.index($1._1)(0); }
      if ($1.tag === "Nothing") { return Data$dMaybe.Nothing; }
      $runtime.fail();
    })()
  )))(res$p => {
    if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
    if (res$p.tag === "Right") { return fieldValidator(res$p._1); }
    $runtime.fail();
  }));
};
const renderFormSpec = v => v.render;
const optInput = dictMonad => {
  const optional = Polyform$dBatteries$dUrlEncoded$dValidators.optional(dictMonad);
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
  const requiredMulti = Polyform$dBatteries$dUrlEncoded$dValidators.requiredMulti(dictMonad);
  return name => initial => err => render => touched => validator => ({fields: [{name, initial, touched}], validator: requiredMulti(name)(err)(validator), render});
};
const mapRender = f => v => ({fields: v.fields, validator: v.validator, render: x => f(v.render(x))});
const liftValidator = dictMonoid => {
  const mempty1 = dictMonoid.mempty;
  return validator => ({fields: [], validator, render: v => mempty1});
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
const hoist = dictFunctor => f => v => ({fields: v.fields, validator: Polyform$dValidator.hoist(dictFunctor)(f)(v.validator), render: v.render});
export {
  StatelessFormSpec,
  applicativeStatelessFormS,
  applyStatelessFormSpec,
  categoryStatelessFormSpec,
  functorStatelessFormSpec,
  hoist,
  input,
  liftValidator,
  mapRender,
  multiSelect,
  optInput,
  renderFormSpec,
  semigroupoidStatelessForm,
  toFormValidator,
  toInputState
};
