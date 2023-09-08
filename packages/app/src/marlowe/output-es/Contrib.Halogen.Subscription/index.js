import * as $runtime from "../runtime.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNumber from "../Data.Number/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dTimer from "../Effect.Timer/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const traverse_ = /* #__PURE__ */ Data$dFoldable.traverse_(Effect.applicativeEffect)(Data$dFoldable.foldableMaybe);
const MinInterval = x => x;
const unEmitter = Unsafe$dCoerce.unsafeCoerce;
const _Emitter = Unsafe$dCoerce.unsafeCoerce;
const bindEffect = f => origEmitter => k => origEmitter(a => {
  const $0 = f(a);
  return () => {
    const $1 = $0();
    return k($1)();
  };
});
const foldMapThrottle = dictMonoid => {
  const mempty = dictMonoid.mempty;
  return f => v => origEmitter => () => {
    let valueRef = mempty;
    let timeoutIdRef = Data$dMaybe.Nothing;
    return k => origEmitter(a => {
      const $0 = f(a);
      return () => {
        const $1 = valueRef;
        valueRef = dictMonoid.Semigroup0().append($1)($0);
        const $2 = Effect$dTimer.setTimeoutImpl(Data$dInt.unsafeClamp(Data$dNumber.floor(v)))(() => {
          timeoutIdRef = Data$dMaybe.Nothing;
          const $2 = valueRef;
          k($2)();
          return valueRef = mempty;
        });
        const $3 = timeoutIdRef;
        if (
          (() => {
            if ($3.tag === "Nothing") { return true; }
            if ($3.tag === "Just") { return false; }
            $runtime.fail();
          })()
        ) {
          const timeoutId = $2();
          return timeoutIdRef = Data$dMaybe.$Maybe("Just", timeoutId);
        }
      };
    });
  };
};
const throttle = v => origEmitter => () => {
  let valueRef = Data$dMaybe.Nothing;
  let timeoutIdRef = Data$dMaybe.Nothing;
  return k => origEmitter(a => () => {
    valueRef = Data$dMaybe.$Maybe("Just", a);
    const $0 = Effect$dTimer.setTimeoutImpl(Data$dInt.unsafeClamp(Data$dNumber.floor(v)))(() => {
      timeoutIdRef = Data$dMaybe.Nothing;
      const $0 = valueRef;
      traverse_(k)($0)();
      return valueRef = Data$dMaybe.Nothing;
    });
    const $1 = timeoutIdRef;
    if (
      (() => {
        if ($1.tag === "Nothing") { return true; }
        if ($1.tag === "Just") { return false; }
        $runtime.fail();
      })()
    ) {
      const timeoutId = $0();
      return timeoutIdRef = Data$dMaybe.$Maybe("Just", timeoutId);
    }
  });
};
export {MinInterval, _Emitter, bindEffect, foldMapThrottle, throttle, traverse_, unEmitter};
