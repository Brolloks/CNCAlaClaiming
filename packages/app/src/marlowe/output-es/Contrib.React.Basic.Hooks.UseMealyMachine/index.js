import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dAff from "../React.Basic.Hooks.Aff/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Utils$dReact$dBasic$dHooks from "../Utils.React.Basic.Hooks/index.js";
const pure1 = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const UseMealyMachine = x => x;
const newtypeUseMealyMachine_ = {Coercible0: () => {}};
const useMealyMachine = v => {
  const $0 = Utils$dReact$dBasic$dHooks.useVersionedState$p({state: v.initialState, output: Data$dMaybe.Nothing});
  return () => {
    const a = $0();
    const a$1 = Utils$dReact$dBasic$dHooks.useStateRef(Data$dEq.eqInt)(a._1.version)(a._1.state.state)();
    const a$2 = Utils$dReact$dBasic$dHooks.useVersionedState$p(Data$dMaybe.Nothing)();
    const a$3 = Utils$dReact$dBasic$dHooks.useStateRef(Data$dEq.eqInt)(a$2._1.version)(a$2._1.state)();
    const handleAction = action => {
      const $1 = React$dBasic$dHooks.readRef(a$1);
      return () => {
        const currState = $1();
        const v3 = v.step(currState)(action);
        a._2({state: v3._1, output: Data$dMaybe.$Maybe("Just", v3._2)})();
        return a$2._2(v.driver(v3._1))();
      };
    };
    React$dBasic$dHooks$dAff.useAff$p(Data$dEq.eqInt)(v$1 => Data$dMaybe.Nothing)(a$2._1.version)(Effect$dAff._bind(Effect$dAff._liftEffect(React$dBasic$dHooks.readRef(a$3)))(currPossibleAffAction => {
      if (currPossibleAffAction.tag === "Nothing") { return Effect$dAff._pure(); }
      if (currPossibleAffAction.tag === "Just") {
        const $1 = currPossibleAffAction._1;
        return Effect$dAff._bind(Effect$dAff._delay(Data$dEither.Right, 2000.0))(() => Effect$dAff._bind($1)(action => Effect$dAff._liftEffect(handleAction(action))));
      }
      $runtime.fail();
    }))();
    return pure1(Data$dTuple.$Tuple(a._1.state.state, Data$dTuple.$Tuple(a._1.state.output, $1 => handleAction($1))))();
  };
};
export {UseMealyMachine, newtypeUseMealyMachine_, pure1, useMealyMachine};
