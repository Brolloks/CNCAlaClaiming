import * as Contrib$dPolyform$dFormSpecs$dStatefulFormSpec from "../Contrib.Polyform.FormSpecs.StatefulFormSpec/index.js";
import * as Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders from "../Contrib.ReactBootstrap.FormSpecBuilders.StatelessFormSpecBuilders/index.js";
import * as Control$dMonad$dReader$dTrans from "../Control.Monad.Reader.Trans/index.js";
import * as Control$dMonad$dState$dTrans from "../Control.Monad.State.Trans/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
const textInput = dictMonad => {
  const _genFieldId = Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders._genFieldId(dictMonad);
  const $0 = Control$dMonad$dState$dTrans.applicativeStateT(dictMonad);
  return dictMonad1 => {
    const input = Contrib$dPolyform$dFormSpecs$dStatefulFormSpec.input(dictMonad1)(Data$dMonoid.monoidArray);
    return dictDefaults => props => {
      const props$p = dictDefaults.defaults(Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.defaultTextInputProps)(props);
      return Control$dMonad$dReader$dTrans.bindReaderT(Control$dMonad$dState$dTrans.bindStateT(dictMonad)).bind(_genFieldId(props$p))(name => {
        const $1 = $0.pure(input(name)(props$p.initial)(x => [
          Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.renderTextInput({
            layout: props$p.layout,
            possibleLabel: props$p.label,
            possibleHelpText: props$p.helpText,
            name,
            placeholder: props$p.placeholder,
            type: props$p.type,
            max: props$p.max,
            min: props$p.min,
            sizing: props$p.sizing,
            step: props$p.step
          })(x)
        ])(props$p.touched)(props$p.validator));
        return v => $1;
      });
    };
  };
};
const fromStatlessFormSpec = dictFunctor => dictMonad => {
  const liftStatelessFormSpec = Contrib$dPolyform$dFormSpecs$dStatefulFormSpec.liftStatelessFormSpec(dictMonad);
  return dictMonoid => {
    const $0 = liftStatelessFormSpec(dictMonoid);
    return v => x => {
      const $1 = v(x);
      return s => dictFunctor.map(v1 => Data$dTuple.$Tuple($0(v1._1), v1._2))($1(s));
    };
  };
};
const dateTimeField = dictMonad => {
  const $0 = dictMonad.Bind1().Apply0().Functor0();
  const dateTimeField1 = Contrib$dReactBootstrap$dFormSpecBuilders$dStatelessFormSpecBuilders.dateTimeField(dictMonad);
  return dictMonad1 => {
    const liftStatelessFormSpec = Contrib$dPolyform$dFormSpecs$dStatefulFormSpec.liftStatelessFormSpec(dictMonad1)(Data$dMonoid.monoidArray);
    const dateTimeField2 = dateTimeField1(dictMonad1);
    return initial => possibleLabel => possibleHelpText => dateTimeValidator => {
      const $1 = dateTimeField2(initial)(possibleLabel)(possibleHelpText)(dateTimeValidator);
      return x => {
        const $2 = $1(x);
        return s => $0.map(v1 => Data$dTuple.$Tuple(liftStatelessFormSpec(v1._1), v1._2))($2(s));
      };
    };
  };
};
export {dateTimeField, fromStatlessFormSpec, textInput};
