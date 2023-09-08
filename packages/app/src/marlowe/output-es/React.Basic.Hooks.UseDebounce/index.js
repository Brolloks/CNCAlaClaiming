import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dNumber from "../Data.Number/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dTimer from "../Effect.Timer/index.js";
import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
const pure1 = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
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
      return pure1(a._1)();
    };
  };
};
export {pure1, useDebounce};
