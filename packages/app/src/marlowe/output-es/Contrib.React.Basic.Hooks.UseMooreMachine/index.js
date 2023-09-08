import * as $runtime from "../runtime.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dAff from "../React.Basic.Hooks.Aff/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Utils$dReact$dBasic$dHooks from "../Utils.React.Basic.Hooks/index.js";
const pure1 = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const UseMooreMachine = x => x;
const newtypeUseMooreMachine_ = {Coercible0: () => {}};
const useMooreMachine = initialSpec => {
  const $0 = Utils$dReact$dBasic$dHooks.useVersionedState$p(initialSpec);
  return () => {
    const a = $0();
    const a$1 = Utils$dReact$dBasic$dHooks.useStateRef(Data$dEq.eqInt)(a._1.version)(a._1.state)();
    const a$2 = Utils$dReact$dBasic$dHooks.useVersionedState$p(initialSpec.initialState)();
    const a$3 = Utils$dReact$dBasic$dHooks.useStateRef(Data$dEq.eqInt)(a$2._1.version)(a$2._1.state)();
    const a$4 = Utils$dReact$dBasic$dHooks.useVersionedState$p(Data$dMaybe.Nothing)();
    const a$5 = Utils$dReact$dBasic$dHooks.useStateRef(Data$dEq.eqInt)(a$4._1.version)(a$4._1.state)();
    const applyActionFn = (action, currState, currSpec) => {
      const state$p = currSpec.step(currState)(action);
      const possibleNextRequest$p = currSpec.driver(state$p);
      const $1 = a$2._2(state$p);
      return () => {
        $1();
        return a$4._2(possibleNextRequest$p)();
      };
    };
    const applyAction = action => {
      const $1 = React$dBasic$dHooks.readRef(a$3);
      return () => {
        const currState = $1();
        const currSpec = React$dBasic$dHooks.readRef(a$1)();
        return applyActionFn(action, currState, currSpec)();
      };
    };
    React$dBasic$dHooks$dAff.useAff$p(Data$dEq.eqInt)(v => Data$dMaybe.Nothing)(a$4._1.version)(Effect$dAff._bind(Effect$dAff._liftEffect(React$dBasic$dHooks.readRef(a$5)))(currPossibleRequest => {
      if (currPossibleRequest.tag === "Nothing") { return Effect$dAff._pure(); }
      if (currPossibleRequest.tag === "Just") { return Effect$dAff._bind(currPossibleRequest._1)(action => Effect$dAff._liftEffect(applyAction(action))); }
      $runtime.fail();
    }))();
    return pure1({
      state: a$2._1.state,
      output: a._1.state.output(a$2._1.state),
      applyAction: $1 => applyAction($1),
      reset: possibleNewSpec => {
        const $1 = React$dBasic$dHooks.readRef(a$1);
        return () => {
          const currSpec = $1();
          const spec$p = (() => {
            if (possibleNewSpec.tag === "Nothing") { return currSpec; }
            if (possibleNewSpec.tag === "Just") { return possibleNewSpec._1; }
            $runtime.fail();
          })();
          a._2(spec$p)();
          a$2._2(spec$p.initialState)();
          a$4._2(Data$dMaybe.Nothing)();
          return action => applyActionFn(action, spec$p.initialState, spec$p);
        };
      }
    })();
  };
};
export {UseMooreMachine, newtypeUseMooreMachine_, pure1, useMooreMachine};
