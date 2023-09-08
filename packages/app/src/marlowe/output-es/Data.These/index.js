import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
const $These = (tag, _1, _2) => ({tag, _1, _2});
const identity = x => x;
const This = value0 => $These("This", value0);
const That = value0 => $These("That", value0);
const Both = value0 => value1 => $These("Both", value0, value1);
const thisOrBoth = v => v1 => {
  if (v1.tag === "Nothing") { return $These("This", v); }
  if (v1.tag === "Just") { return $These("Both", v, v1._1); }
  $runtime.fail();
};
const $$this = v => {
  if (v.tag === "This") { return Data$dMaybe.$Maybe("Just", v._1); }
  return Data$dMaybe.Nothing;
};
const theseRight = v => {
  if (v.tag === "Both") { return Data$dMaybe.$Maybe("Just", v._2); }
  if (v.tag === "That") { return Data$dMaybe.$Maybe("Just", v._1); }
  return Data$dMaybe.Nothing;
};
const theseLeft = v => {
  if (v.tag === "Both") { return Data$dMaybe.$Maybe("Just", v._1); }
  if (v.tag === "This") { return Data$dMaybe.$Maybe("Just", v._1); }
  return Data$dMaybe.Nothing;
};
const these = v => v1 => v2 => v3 => {
  if (v3.tag === "This") { return v(v3._1); }
  if (v3.tag === "That") { return v1(v3._1); }
  if (v3.tag === "Both") { return v2(v3._1)(v3._2); }
  $runtime.fail();
};
const thatOrBoth = v => v1 => {
  if (v1.tag === "Nothing") { return $These("That", v); }
  if (v1.tag === "Just") { return $These("Both", v1._1, v); }
  $runtime.fail();
};
const that = v => {
  if (v.tag === "That") { return Data$dMaybe.$Maybe("Just", v._1); }
  return Data$dMaybe.Nothing;
};
const swap = v3 => {
  if (v3.tag === "This") { return $These("That", v3._1); }
  if (v3.tag === "That") { return $These("This", v3._1); }
  if (v3.tag === "Both") { return $These("Both", v3._2, v3._1); }
  $runtime.fail();
};
const showThese = dictShow => dictShow1 => (
  {
    show: v => {
      if (v.tag === "This") { return "(This " + dictShow.show(v._1) + ")"; }
      if (v.tag === "That") { return "(That " + dictShow1.show(v._1) + ")"; }
      if (v.tag === "Both") { return "(Both " + dictShow.show(v._1) + " " + dictShow1.show(v._2) + ")"; }
      $runtime.fail();
    }
  }
);
const semigroupThese = dictSemigroup => dictSemigroup1 => (
  {
    append: v => v1 => {
      if (v.tag === "This") {
        if (v1.tag === "This") { return $These("This", dictSemigroup.append(v._1)(v1._1)); }
        if (v1.tag === "That") { return $These("Both", v._1, v1._1); }
        if (v1.tag === "Both") { return $These("Both", dictSemigroup.append(v._1)(v1._1), v1._2); }
        $runtime.fail();
      }
      if (v.tag === "That") {
        if (v1.tag === "This") { return $These("Both", v1._1, v._1); }
        if (v1.tag === "That") { return $These("That", dictSemigroup1.append(v._1)(v1._1)); }
        if (v1.tag === "Both") { return $These("Both", v1._1, dictSemigroup1.append(v._1)(v1._2)); }
        $runtime.fail();
      }
      if (v.tag === "Both") {
        if (v1.tag === "This") { return $These("Both", dictSemigroup.append(v._1)(v1._1), v._2); }
        if (v1.tag === "That") { return $These("Both", v._1, dictSemigroup1.append(v._2)(v1._1)); }
        if (v1.tag === "Both") { return $These("Both", dictSemigroup.append(v._1)(v1._1), dictSemigroup1.append(v._2)(v1._2)); }
      }
      $runtime.fail();
    }
  }
);
const maybeThese = v => v1 => {
  if (v.tag === "Just") {
    if (v1.tag === "Nothing") { return Data$dMaybe.$Maybe("Just", $These("This", v._1)); }
    if (v1.tag === "Just") { return Data$dMaybe.$Maybe("Just", $These("Both", v._1, v1._1)); }
    $runtime.fail();
  }
  if (v.tag === "Nothing") {
    if (v1.tag === "Just") { return Data$dMaybe.$Maybe("Just", $These("That", v1._1)); }
    if (v1.tag === "Nothing") { return Data$dMaybe.Nothing; }
  }
  $runtime.fail();
};
const isThis = x => x.tag === "This";
const isThat = x => x.tag === "That";
const functorThese = {
  map: v => v1 => {
    if (v1.tag === "Both") { return $These("Both", v1._1, v(v1._2)); }
    if (v1.tag === "That") { return $These("That", v(v1._1)); }
    if (v1.tag === "This") { return $These("This", v1._1); }
    $runtime.fail();
  }
};
const invariantThese = {
  imap: f => v => v1 => {
    if (v1.tag === "Both") { return $These("Both", v1._1, f(v1._2)); }
    if (v1.tag === "That") { return $These("That", f(v1._1)); }
    if (v1.tag === "This") { return $These("This", v1._1); }
    $runtime.fail();
  }
};
const fromThese = v => v1 => v2 => {
  if (v2.tag === "This") { return Data$dTuple.$Tuple(v2._1, v1); }
  if (v2.tag === "That") { return Data$dTuple.$Tuple(v, v2._1); }
  if (v2.tag === "Both") { return Data$dTuple.$Tuple(v2._1, v2._2); }
  $runtime.fail();
};
const foldableThese = {
  foldr: f => z => x => {
    if (x.tag === "Both") { return f(x._2)(z); }
    if (x.tag === "That") { return f(x._1)(z); }
    return z;
  },
  foldl: f => z => x => {
    if (x.tag === "Both") { return f(z)(x._2); }
    if (x.tag === "That") { return f(z)(x._1); }
    return z;
  },
  foldMap: dictMonoid => {
    const mempty = dictMonoid.mempty;
    return f => x => {
      if (x.tag === "Both") { return f(x._2); }
      if (x.tag === "That") { return f(x._1); }
      return mempty;
    };
  }
};
const traversableThese = {
  traverse: dictApplicative => {
    const $0 = dictApplicative.Apply0().Functor0();
    return v => v1 => {
      if (v1.tag === "This") { return dictApplicative.pure($These("This", v1._1)); }
      if (v1.tag === "That") { return $0.map(That)(v(v1._1)); }
      if (v1.tag === "Both") { return $0.map(Both(v1._1))(v(v1._2)); }
      $runtime.fail();
    };
  },
  sequence: dictApplicative => {
    const $0 = dictApplicative.Apply0().Functor0();
    return v => {
      if (v.tag === "This") { return dictApplicative.pure($These("This", v._1)); }
      if (v.tag === "That") { return $0.map(That)(v._1); }
      if (v.tag === "Both") { return $0.map(Both(v._1))(v._2); }
      $runtime.fail();
    };
  },
  Functor0: () => functorThese,
  Foldable1: () => foldableThese
};
const extendEither = {
  extend: v => v1 => {
    if (v1.tag === "This") { return $These("This", v1._1); }
    const $0 = v(v1);
    if (v1.tag === "Both") { return $These("Both", v1._1, $0); }
    if (v1.tag === "That") { return $These("That", $0); }
    if (v1.tag === "This") { return $These("This", v1._1); }
    $runtime.fail();
  },
  Functor0: () => functorThese
};
const eqThese = dictEq => dictEq1 => (
  {
    eq: x => y => {
      if (x.tag === "This") { return y.tag === "This" && dictEq.eq(x._1)(y._1); }
      if (x.tag === "That") { return y.tag === "That" && dictEq1.eq(x._1)(y._1); }
      return x.tag === "Both" && y.tag === "Both" && dictEq.eq(x._1)(y._1) && dictEq1.eq(x._2)(y._2);
    }
  }
);
const ordThese = dictOrd => {
  const $0 = dictOrd.Eq0();
  return dictOrd1 => {
    const $1 = dictOrd1.Eq0();
    const eqThese2 = {
      eq: x => y => {
        if (x.tag === "This") { return y.tag === "This" && $0.eq(x._1)(y._1); }
        if (x.tag === "That") { return y.tag === "That" && $1.eq(x._1)(y._1); }
        return x.tag === "Both" && y.tag === "Both" && $0.eq(x._1)(y._1) && $1.eq(x._2)(y._2);
      }
    };
    return {
      compare: x => y => {
        if (x.tag === "This") {
          if (y.tag === "This") { return dictOrd.compare(x._1)(y._1); }
          return Data$dOrdering.LT;
        }
        if (y.tag === "This") { return Data$dOrdering.GT; }
        if (x.tag === "That") {
          if (y.tag === "That") { return dictOrd1.compare(x._1)(y._1); }
          return Data$dOrdering.LT;
        }
        if (y.tag === "That") { return Data$dOrdering.GT; }
        if (x.tag === "Both" && y.tag === "Both") {
          const v = dictOrd.compare(x._1)(y._1);
          if (v === "LT") { return Data$dOrdering.LT; }
          if (v === "GT") { return Data$dOrdering.GT; }
          return dictOrd1.compare(x._2)(y._2);
        }
        $runtime.fail();
      },
      Eq0: () => eqThese2
    };
  };
};
const both = v => {
  if (v.tag === "Both") { return Data$dMaybe.$Maybe("Just", Data$dTuple.$Tuple(v._1, v._2)); }
  return Data$dMaybe.Nothing;
};
const isBoth = x => x.tag === "Both";
const bifunctorThese = {
  bimap: v => v1 => v2 => {
    if (v2.tag === "This") { return $These("This", v(v2._1)); }
    if (v2.tag === "That") { return $These("That", v1(v2._1)); }
    if (v2.tag === "Both") { return $These("Both", v(v2._1), v1(v2._2)); }
    $runtime.fail();
  }
};
const bifoldableThese = {
  bifoldr: f => g => z => v3 => {
    if (v3.tag === "This") { return f(v3._1)(z); }
    if (v3.tag === "That") { return g(v3._1)(z); }
    if (v3.tag === "Both") { return f(v3._1)(g(v3._2)(z)); }
    $runtime.fail();
  },
  bifoldl: f => g => z => v3 => {
    if (v3.tag === "This") { return f(z)(v3._1); }
    if (v3.tag === "That") { return g(z)(v3._1); }
    if (v3.tag === "Both") { return g(f(z)(v3._1))(v3._2); }
    $runtime.fail();
  },
  bifoldMap: dictMonoid => f => g => v3 => {
    if (v3.tag === "This") { return f(v3._1); }
    if (v3.tag === "That") { return g(v3._1); }
    if (v3.tag === "Both") { return dictMonoid.Semigroup0().append(f(v3._1))(g(v3._2)); }
    $runtime.fail();
  }
};
const bitraversableThese = {
  bitraverse: dictApplicative => {
    const Apply0 = dictApplicative.Apply0();
    const $0 = Apply0.Functor0();
    return v => v1 => v2 => {
      if (v2.tag === "This") { return $0.map(This)(v(v2._1)); }
      if (v2.tag === "That") { return $0.map(That)(v1(v2._1)); }
      if (v2.tag === "Both") { return Apply0.apply($0.map(Both)(v(v2._1)))(v1(v2._2)); }
      $runtime.fail();
    };
  },
  bisequence: dictApplicative => bitraversableThese.bitraverse(dictApplicative)(identity)(identity),
  Bifunctor0: () => bifunctorThese,
  Bifoldable1: () => bifoldableThese
};
const assoc = v => {
  if (v.tag === "This") {
    if (v._1.tag === "This") { return $These("This", v._1._1); }
    if (v._1.tag === "That") { return $These("That", $These("This", v._1._1)); }
    if (v._1.tag === "Both") { return $These("Both", v._1._1, $These("This", v._1._2)); }
    $runtime.fail();
  }
  if (v.tag === "That") { return $These("That", $These("That", v._1)); }
  if (v.tag === "Both") {
    if (v._1.tag === "This") { return $These("Both", v._1._1, $These("That", v._2)); }
    if (v._1.tag === "That") { return $These("That", $These("Both", v._1._1, v._2)); }
    if (v._1.tag === "Both") { return $These("Both", v._1._1, $These("Both", v._1._2, v._2)); }
  }
  $runtime.fail();
};
const applyThese = dictSemigroup => (
  {
    apply: v => v1 => {
      if (v.tag === "This") { return $These("This", v._1); }
      if (v.tag === "That") {
        if (v1.tag === "This") { return $These("This", v1._1); }
        if (v1.tag === "That") { return $These("That", v._1(v1._1)); }
        if (v1.tag === "Both") { return $These("Both", v1._1, v._1(v1._2)); }
        $runtime.fail();
      }
      if (v.tag === "Both") {
        if (v1.tag === "This") { return $These("This", dictSemigroup.append(v._1)(v1._1)); }
        if (v1.tag === "That") { return $These("Both", v._1, v._2(v1._1)); }
        if (v1.tag === "Both") { return $These("Both", dictSemigroup.append(v._1)(v1._1), v._2(v1._2)); }
      }
      $runtime.fail();
    },
    Functor0: () => functorThese
  }
);
const bindThese = dictSemigroup => {
  const applyThese1 = applyThese(dictSemigroup);
  return {
    bind: v => v1 => {
      if (v.tag === "This") { return $These("This", v._1); }
      if (v.tag === "That") { return v1(v._1); }
      if (v.tag === "Both") {
        const v2 = v1(v._2);
        if (v2.tag === "This") { return $These("This", dictSemigroup.append(v._1)(v2._1)); }
        if (v2.tag === "That") { return $These("Both", v._1, v2._1); }
        if (v2.tag === "Both") { return $These("Both", dictSemigroup.append(v._1)(v2._1), v2._2); }
      }
      $runtime.fail();
    },
    Apply0: () => applyThese1
  };
};
const applicativeThese = dictSemigroup => {
  const applyThese1 = applyThese(dictSemigroup);
  return {pure: That, Apply0: () => applyThese1};
};
const monadThese = dictSemigroup => {
  const applyThese1 = applyThese(dictSemigroup);
  const bindThese1 = bindThese(dictSemigroup);
  return {Applicative0: () => ({pure: That, Apply0: () => applyThese1}), Bind1: () => bindThese1};
};
export {
  $These,
  Both,
  That,
  This,
  applicativeThese,
  applyThese,
  assoc,
  bifoldableThese,
  bifunctorThese,
  bindThese,
  bitraversableThese,
  both,
  eqThese,
  extendEither,
  foldableThese,
  fromThese,
  functorThese,
  identity,
  invariantThese,
  isBoth,
  isThat,
  isThis,
  maybeThese,
  monadThese,
  ordThese,
  semigroupThese,
  showThese,
  swap,
  that,
  thatOrBoth,
  these,
  theseLeft,
  theseRight,
  $$this as this,
  thisOrBoth,
  traversableThese
};
