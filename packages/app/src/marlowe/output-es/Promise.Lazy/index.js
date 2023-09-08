import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dUncurried from "../Effect.Uncurried/index.js";
import * as Promise$dInternal from "../Promise.Internal/index.js";
const $Box = _1 => ({tag: "Box", _1});
const traverse = /* #__PURE__ */ (() => Data$dTraversable.traversableArray.traverse(Effect.applicativeEffect))();
const Box = value0 => $Box(value0);
const LazyPromise = x => x;
const toPromise = () => v => {
  const $0 = Effect$dUncurried.runEffectFn2(Promise$dInternal.then_)(v1 => {
    const $0 = Promise$dInternal.resolve(v1._1);
    return $0;
  });
  return () => {
    const $1 = v();
    return $0($1)();
  };
};
const race = as => {
  const $0 = traverse(v => v)(as);
  return () => {
    const as$p = $0();
    return Promise$dInternal.race(as$p);
  };
};
const newtypeLazyPromise = {Coercible0: () => {}};
const $$new = k => () => Promise$dInternal.new((onResolve, onReject) => k((() => {
  const $0 = Effect$dUncurried.runEffectFn1(onResolve);
  return x => $0($Box(x));
})())(Effect$dUncurried.runEffectFn1(onReject))());
const fromPromise = p => {
  const $0 = Effect$dUncurried.runEffectFn2(Promise$dInternal.then_)($0 => {
    const $1 = Promise$dInternal.resolve($Box($0));
    return $1;
  });
  return () => {
    const $1 = p();
    return $0($1)();
  };
};
const $$finally = v => v1 => () => {
  const p2$p = v1();
  return Promise$dInternal.finally(
    () => {
      const p1$p = v();
      return Promise$dInternal.then_(
        v2 => {
          const $0 = Promise$dInternal.resolve(v2._1);
          return $0;
        },
        p1$p
      );
    },
    p2$p
  );
};
const $$catch = k => v => () => {
  const p$p = v();
  return Promise$dInternal.catch(a => k(a)(), p$p);
};
const monadLazyPromise = {Applicative0: () => applicativeLazyPromise, Bind1: () => bindLazyPromise};
const functorLazyPromise = {map: f => a => bindLazyPromise.bind(a)(a$p => applicativeLazyPromise.pure(f(a$p)))};
const bindLazyPromise = {
  bind: v => k => () => {
    const p$p = v();
    return Promise$dInternal.then_(v1 => k(v1._1)(), p$p);
  },
  Apply0: () => applyLazyPromise
};
const applyLazyPromise = {
  apply: f => a => () => {
    const p$p = f();
    return Promise$dInternal.then_(
      v1 => {
        const p$p$1 = a();
        return Promise$dInternal.then_(v1$1 => applicativeLazyPromise.pure(v1._1(v1$1._1))(), p$p$1);
      },
      p$p
    );
  },
  Functor0: () => functorLazyPromise
};
const applicativeLazyPromise = {
  pure: x => {
    const $0 = Promise$dInternal.resolve($Box(x));
    return () => $0;
  },
  Apply0: () => applyLazyPromise
};
const monadEffectLazyPromise = {
  liftEffect: x => () => {
    const a$p = x();
    return Promise$dInternal.resolve($Box(a$p));
  },
  Monad0: () => monadLazyPromise
};
const all = as => {
  const $0 = traverse(v => v)(as);
  return () => {
    const as$p = $0();
    const as$p$p = Promise$dInternal.all(as$p);
    return Promise$dInternal.then_(
      bs => {
        const $1 = Promise$dInternal.resolve($Box(Data$dFunctor.arrayMap(v => v._1)(bs)));
        return $1;
      },
      as$p$p
    );
  };
};
export {
  $Box,
  Box,
  LazyPromise,
  all,
  applicativeLazyPromise,
  applyLazyPromise,
  bindLazyPromise,
  $$catch as catch,
  $$finally as finally,
  fromPromise,
  functorLazyPromise,
  monadEffectLazyPromise,
  monadLazyPromise,
  $$new as new,
  newtypeLazyPromise,
  race,
  toPromise,
  traverse
};
