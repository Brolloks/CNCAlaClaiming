import * as $runtime from "../runtime.js";
import * as Control$dMonad$dRec$dClass from "../Control.Monad.Rec.Class/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNumber from "../Data.Number/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dTimer from "../Effect.Timer/index.js";
import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dAff from "../React.Basic.Hooks.Aff/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
const pure = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const UseVersionedState = x => x;
const UseStateRef = x => x;
const UseVersionedStateWithRef = x => x;
const UseSequence = x => x;
const UseEmitter$p = x => x;
const UseEmitter = x => x;
const newtypeUseVersionedState_ = {Coercible0: () => {}};
const newtypeUseVersionedStateW = {Coercible0: () => {}};
const newtypeUseStateRef_ = {Coercible0: () => {}};
const newtypeUseSequence_ = {Coercible0: () => {}};
const newtypeUseEmitter_ = {Coercible0: () => {}};
const newtypeUseEmitter$p_ = {Coercible0: () => {}};
const useVersionedState = a => () => {
  const a$1 = React$dBasic$dHooks.useMemo_(($0, $1) => true, undefined, v => ({value: 0}));
  const a$2 = React$dBasic$dHooks.useState_(($0, $1) => Data$dTuple.$Tuple($0, $1), {version: 0, state: a});
  return pure(Data$dTuple.$Tuple(
    a$2._1,
    f => () => {
      const $0 = a$1.value;
      const version$p = a$1.value = $0 + 1 | 0;
      return a$2._2(v1 => ({version: version$p, state: f(v1.state)}))();
    }
  ))();
};
const useVersionedState$p = a => {
  const $0 = useVersionedState(a);
  return () => {
    const a$1 = $0();
    return pure(Data$dTuple.$Tuple(a$1._1, x => a$1._2(v => x)))();
  };
};
const useStateRef = dictEq => version => state => () => {
  const a = React$dBasic$dHooks.useRef_(state);
  const $0 = React$dBasic$dHooks.writeRef(a)(state);
  React$dBasic$dHooks.useEffect_(
    ($1, $2) => dictEq.eq($1)($2),
    version,
    () => {
      $0();
      return () => {};
    }
  );
  return pure(a)();
};
const useStateRef$p = dictEq => st => useStateRef(dictEq)(st)(st);
const useStateWithRef = dictEq => initialState => () => {
  const a = React$dBasic$dHooks.useState_(($0, $1) => Data$dTuple.$Tuple($0, $1), initialState);
  const a$1 = useStateRef(dictEq)(a._1)(a._1)();
  return pure(Data$dTuple.$Tuple(a._1, Data$dTuple.$Tuple(a$1, a._2)))();
};
const useStateWithRef$p = dictEq => initialState => {
  const $0 = React$dBasic$dHooks.useState$p(initialState);
  return () => {
    const a = $0();
    const a$1 = useStateRef(dictEq)(a._1)(a._1)();
    return pure(Data$dTuple.$Tuple(a._1, Data$dTuple.$Tuple(a$1, a._2)))();
  };
};
const useVersionedStateWithRef = a => {
  const $0 = useVersionedState(a);
  return () => {
    const a$1 = $0();
    const a$2 = useStateRef(Data$dEq.eqInt)(a$1._1.version)(a$1._1.state)();
    return pure(Data$dTuple.$Tuple(a$1._1, Data$dTuple.$Tuple(a$2, a$1._2)))();
  };
};
const useSetInterval = dictEq => deps => v => action => () => React$dBasic$dHooks.useEffect_(
  ($0, $1) => dictEq.eq($0)($1),
  deps,
  () => {
    let cleanupRef = Data$dMaybe.Nothing;
    const intervalId = Effect$dTimer.setIntervalImpl(Data$dInt.unsafeClamp(Data$dNumber.floor(v)))(() => {
      const cleanup = action();
      return cleanupRef = Data$dMaybe.$Maybe("Just", cleanup);
    })();
    return () => {
      const $0 = cleanupRef;
      if ($0.tag === "Nothing") {

      } else if ($0.tag === "Just") {
        $0._1();
      } else {
        $runtime.fail();
      }
      return Effect$dTimer.clearIntervalImpl(intervalId)();
    };
  }
);
const useSequence = dictSemiring => {
  const one = dictSemiring.one;
  return a => () => {
    const a$1 = React$dBasic$dHooks.useState_(($0, $1) => Data$dTuple.$Tuple($0, $1), a);
    return pure({curr: a$1._1, next: a$1._2(v1 => dictSemiring.add(v1)(one))})();
  };
};
const useMaybeValue = value => {
  const $0 = React$dBasic$dHooks.useState$p(value);
  return () => {
    const a = $0();
    return pure(Data$dTuple.$Tuple(a._1, Data$dTuple.$Tuple(x => a._2(Data$dMaybe.$Maybe("Just", x)), a._2(Data$dMaybe.Nothing))))();
  };
};
const useMaybeValue$p = /* #__PURE__ */ useMaybeValue(Data$dMaybe.Nothing);
const useLoopAff = dictEq => deps => interval => action => {
  const $0 = React$dBasic$dHooks$dAff.useAff$p(dictEq)(v => Data$dMaybe.Nothing)(deps)((() => {
    const $0 = Effect$dAff._bind(action)(() => Effect$dAff._delay(Data$dEither.Right, interval));
    return Effect$dAff.monadRecAff.tailRecM(u => Effect$dAff._map(v => Control$dMonad$dRec$dClass.$Step("Loop", u))($0))();
  })());
  return () => {$0();};
};
const useFirstRender = () => {
  const a = React$dBasic$dHooks.useRef_(true);
  const $0 = React$dBasic$dHooks.writeRef(a)(false);
  React$dBasic$dHooks.useEffect_(
    (v, v1) => true,
    undefined,
    () => {
      $0();
      return () => {};
    }
  );
  return pure(a)();
};
const useEmitter$p = $$default => emitter => {
  const $0 = React$dBasic$dHooks.useState$p($$default);
  return () => {
    const a = $0();
    React$dBasic$dHooks.useEffect_(
      (v, v1) => true,
      undefined,
      emitter(x => {
        const $1 = a._2(x);
        return () => {$1();};
      })
    );
    return pure(a._1)();
  };
};
const useEmitter = emitter => handler => () => React$dBasic$dHooks.useEffect_(
  (v, v1) => true,
  undefined,
  emitter(x => {
    const $0 = handler(x);
    return () => {$0();};
  })
);
const useDebounce = dictEq => {
  const useEffect = React$dBasic$dHooks.useEffect({eq: x => y => dictEq.eq(x._1)(y._1) && x._2 === y._2});
  return value => delay => {
    const delay$p = Data$dInt.unsafeClamp(Data$dNumber.floor(delay * 1000.0));
    return () => {
      const a = React$dBasic$dHooks.useState_(($0, $1) => Data$dTuple.$Tuple($0, $1), value);
      useEffect(Data$dTuple.$Tuple(value, delay))((() => {
        const $0 = Effect$dTimer.setTimeoutImpl(delay$p)(a._2(v => value));
        return () => {
          const i = $0();
          return Effect$dTimer.clearTimeoutImpl(i);
        };
      })())();
      return pure(a._1)();
    };
  };
};
export {
  UseEmitter,
  UseEmitter$p,
  UseSequence,
  UseStateRef,
  UseVersionedState,
  UseVersionedStateWithRef,
  newtypeUseEmitter$p_,
  newtypeUseEmitter_,
  newtypeUseSequence_,
  newtypeUseStateRef_,
  newtypeUseVersionedStateW,
  newtypeUseVersionedState_,
  pure,
  useDebounce,
  useEmitter,
  useEmitter$p,
  useFirstRender,
  useLoopAff,
  useMaybeValue,
  useMaybeValue$p,
  useSequence,
  useSetInterval,
  useStateRef,
  useStateRef$p,
  useStateWithRef,
  useStateWithRef$p,
  useVersionedState,
  useVersionedState$p,
  useVersionedStateWithRef
};
