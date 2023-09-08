import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Effect from "../Effect/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
import * as Unsafe$dReference from "../Unsafe.Reference/index.js";
const traverse_ = /* #__PURE__ */ Data$dFoldable.traverse_(Effect.applicativeEffect);
const traverse_1 = /* #__PURE__ */ traverse_(Data$dFoldable.foldableArray);
const traverse_2 = /* #__PURE__ */ traverse_(Data$dFoldable.foldableMaybe);
const unsubscribe = v => v;
const subscribe = v => k => v(x => {
  const $0 = k(x);
  return () => {$0();};
});
const semigroupSubscription = {
  append: a => b => () => {
    a();
    b();
  }
};
const notify = v => a => v(a);
const monoidSubscription = /* #__PURE__ */ (() => {
  const semigroupEffect1 = {
    append: a => b => () => {
      a();
      b();
    }
  };
  return {mempty: () => {}, Semigroup0: () => semigroupEffect1};
})();
const mempty = v => () => monoidSubscription.mempty;
const makeEmitter = Unsafe$dCoerce.unsafeCoerce;
const functorEmitter = {map: f => v => k => v(x => k(f(x)))};
const fold = f => v => b => k => () => {
  let result = b;
  return v(a => {
    const $0 = f(a);
    return () => {
      const $1 = result;
      const $2 = result = $0($1);
      return k($2)();
    };
  })();
};
const filter = p => v => k => v(a => {
  if (p(a)) { return k(a); }
  return () => {};
});
const create = () => {
  let subscribers = [];
  return {
    emitter: k => () => {
      const $0 = subscribers;
      subscribers = [...$0, k];
      return () => {
        const $1 = subscribers;
        subscribers = Data$dArray.deleteBy(Unsafe$dReference.reallyUnsafeRefEq)(k)($1);
      };
    },
    listener: a => {
      const $0 = traverse_1(k => k(a));
      return () => {
        const $1 = subscribers;
        return $0($1)();
      };
    }
  };
};
const fix = f => {
  const v = create();
  const v1 = f(v.emitter);
  return k => {
    const $0 = v1.input(x => {
      const $0 = v.listener(x);
      return () => {$0();};
    });
    return () => {
      const v2 = $0();
      const v3 = v1.output(x => {
        const $1 = k(x);
        return () => {$1();};
      })();
      return () => {
        v2();
        return v3();
      };
    };
  };
};
const contravariantListener = {cmap: f => v => x => v(f(x))};
const applyEmitter = {
  apply: v => v1 => k => () => {
    let latestA = Data$dMaybe.Nothing;
    let latestB = Data$dMaybe.Nothing;
    const v2 = v(a => () => {
      latestA = Data$dMaybe.$Maybe("Just", a);
      const $0 = latestB;
      return traverse_2(x => k(a(x)))($0)();
    })();
    const v3 = v1(b => () => {
      latestB = Data$dMaybe.$Maybe("Just", b);
      const $0 = latestA;
      return traverse_2(x => k(x(b)))($0)();
    })();
    return () => {
      v2();
      return v3();
    };
  },
  Functor0: () => functorEmitter
};
const semigroupEmitter = dictSemigroup => ({append: a => b => applyEmitter.apply(k => a(x => k(dictSemigroup.append(x))))(b)});
const monoidEmitter = dictMonoid => {
  const semigroupEmitter1 = semigroupEmitter(dictMonoid.Semigroup0());
  return {mempty, Semigroup0: () => semigroupEmitter1};
};
const applicativeEmitter = {
  pure: a => k => {
    const $0 = k(a);
    return () => {
      $0();
      return () => {};
    };
  },
  Apply0: () => applyEmitter
};
const altEmitter = {
  alt: v => v1 => k => {
    const $0 = v(k);
    return () => {
      const v2 = $0();
      const v3 = v1(k)();
      return () => {
        v2();
        return v3();
      };
    };
  },
  Functor0: () => functorEmitter
};
const plusEmitter = {empty: v => () => () => {}, Alt0: () => altEmitter};
const alternativeEmitter = {Applicative0: () => applicativeEmitter, Plus1: () => plusEmitter};
export {
  altEmitter,
  alternativeEmitter,
  applicativeEmitter,
  applyEmitter,
  contravariantListener,
  create,
  filter,
  fix,
  fold,
  functorEmitter,
  makeEmitter,
  mempty,
  monoidEmitter,
  monoidSubscription,
  notify,
  plusEmitter,
  semigroupEmitter,
  semigroupSubscription,
  subscribe,
  traverse_,
  traverse_1,
  traverse_2,
  unsubscribe
};
