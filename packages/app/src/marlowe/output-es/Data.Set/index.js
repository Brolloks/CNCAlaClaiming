// | This module defines a type of sets as balanced 2-3 trees, based on
// | <http://www.cs.princeton.edu/~dpw/courses/cos326-12/ass/2-3-trees.pdf>
// |
// | Qualified import is encouraged, so as to avoid name clashes with other modules.
import * as $runtime from "../runtime.js";
import * as Control$dMonad$dRec$dClass from "../Control.Monad.Rec.Class/index.js";
import * as Control$dMonad$dST$dInternal from "../Control.Monad.ST.Internal/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunction from "../Data.Function/index.js";
import * as Data$dList from "../Data.List/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dUnfoldable from "../Data.Unfoldable/index.js";
const fromFoldable1 = /* #__PURE__ */ (() => Data$dArray.fromFoldableImpl(Data$dList$dTypes.foldableList.foldr))();
const tailRecM2 = f => a => b => Control$dMonad$dST$dInternal.monadRecST.tailRecM(o => f(o.a)(o.b))({a, b});
const identity = x => x;
const $$Set = x => x;
const union = dictOrd => v => v1 => Data$dMap$dInternal.unionWith(dictOrd)(Data$dFunction.const)(v)(v1);
const toggle = dictOrd => a => v => Data$dMap$dInternal.alter(dictOrd)(v2 => {
  if (v2.tag === "Nothing") { return Data$dMaybe.$Maybe("Just", undefined); }
  if (v2.tag === "Just") { return Data$dMaybe.Nothing; }
  $runtime.fail();
})(a)(v);
const toMap = v => v;
const toUnfoldable = dictUnfoldable => {
  const $0 = Data$dList.toUnfoldable(dictUnfoldable);
  return x => $0(Data$dMap$dInternal.foldableWithIndexMap.foldrWithIndex(k => v => acc => Data$dList$dTypes.$List("Cons", k, acc))(Data$dList$dTypes.Nil)(x));
};
const toUnfoldable1 = /* #__PURE__ */ toUnfoldable(Data$dUnfoldable.unfoldableArray);
const size = v => Data$dMap$dInternal.size(v);
const singleton = a => Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, a, undefined, Data$dMap$dInternal.Leaf);
const showSet = dictShow => ({show: s => "(fromFoldable " + Data$dShow.showArrayImpl(dictShow.show)(toUnfoldable1(s)) + ")"});
const semigroupSet = dictOrd => ({append: union(dictOrd)});
const member = dictOrd => a => v => {
  const $0 = Data$dMap$dInternal.lookup(dictOrd)(a)(v);
  if ($0.tag === "Nothing") { return false; }
  if ($0.tag === "Just") { return true; }
  $runtime.fail();
};
const isEmpty = v => v.tag === "Leaf";
const insert = dictOrd => a => v => Data$dMap$dInternal.insert(dictOrd)(a)()(v);
const fromMap = $$Set;
const foldableSet = {
  foldMap: dictMonoid => {
    const foldMap1 = Data$dList$dTypes.foldableList.foldMap(dictMonoid);
    return f => {
      const $0 = foldMap1(f);
      return x => $0(Data$dMap$dInternal.foldableWithIndexMap.foldrWithIndex(k => v => acc => Data$dList$dTypes.$List("Cons", k, acc))(Data$dList$dTypes.Nil)(x));
    };
  },
  foldl: f => x => {
    const go = go$a0$copy => go$a1$copy => {
      let go$a0 = go$a0$copy, go$a1 = go$a1$copy, go$c = true, go$r;
      while (go$c) {
        const b = go$a0, v = go$a1;
        if (v.tag === "Nil") {
          go$c = false;
          go$r = b;
          continue;
        }
        if (v.tag === "Cons") {
          go$a0 = f(b)(v._1);
          go$a1 = v._2;
          continue;
        }
        $runtime.fail();
      }
      return go$r;
    };
    const $0 = go(x);
    return x$1 => $0(Data$dMap$dInternal.foldableWithIndexMap.foldrWithIndex(k => v => acc => Data$dList$dTypes.$List("Cons", k, acc))(Data$dList$dTypes.Nil)(x$1));
  },
  foldr: f => x => {
    const $0 = Data$dList$dTypes.foldableList.foldr(f)(x);
    return x$1 => $0(Data$dMap$dInternal.foldableWithIndexMap.foldrWithIndex(k => v => acc => Data$dList$dTypes.$List("Cons", k, acc))(Data$dList$dTypes.Nil)(x$1));
  }
};
const findMin = v => {
  const $0 = Data$dMap$dInternal.findMin(v);
  if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0._1.key); }
  return Data$dMaybe.Nothing;
};
const findMax = v => {
  const $0 = Data$dMap$dInternal.findMax(v);
  if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0._1.key); }
  return Data$dMaybe.Nothing;
};
const filter = dictOrd => {
  const filterWithKey = Data$dMap$dInternal.filterWithKey(dictOrd);
  return f => v => filterWithKey(k => v1 => f(k))(v);
};
const eqSet = dictEq => ({eq: v => v1 => Data$dMap$dInternal.eqMap(dictEq)(Data$dEq.eqUnit).eq(v)(v1)});
const ordSet = dictOrd => {
  const $0 = dictOrd.Eq0();
  const eqSet1 = {eq: v => v1 => Data$dMap$dInternal.eqMap($0)(Data$dEq.eqUnit).eq(v)(v1)};
  return {
    compare: s1 => s2 => Data$dList$dTypes.ordList(dictOrd).compare(Data$dMap$dInternal.foldableWithIndexMap.foldrWithIndex(k => v => acc => Data$dList$dTypes.$List("Cons", k, acc))(Data$dList$dTypes.Nil)(s1))(Data$dMap$dInternal.foldableWithIndexMap.foldrWithIndex(k => v => acc => Data$dList$dTypes.$List(
      "Cons",
      k,
      acc
    ))(Data$dList$dTypes.Nil)(s2)),
    Eq0: () => eqSet1
  };
};
const eq1Set = {eq1: dictEq => v => v1 => Data$dMap$dInternal.eqMap(dictEq)(Data$dEq.eqUnit).eq(v)(v1)};
const ord1Set = {compare1: dictOrd => ordSet(dictOrd).compare, Eq10: () => eq1Set};
const empty = Data$dMap$dInternal.Leaf;
const fromFoldable = dictFoldable => dictOrd => dictFoldable.foldl(m => a => Data$dMap$dInternal.insert(dictOrd)(a)()(m))(Data$dMap$dInternal.Leaf);
const intersection = dictOrd => {
  const fromFoldable3 = Data$dFoldable.foldlArray(m => a => Data$dMap$dInternal.insert(dictOrd)(a)()(m))(Data$dMap$dInternal.Leaf);
  return s1 => s2 => {
    const rs = fromFoldable1(Data$dMap$dInternal.foldableWithIndexMap.foldrWithIndex(k => v => acc => Data$dList$dTypes.$List("Cons", k, acc))(Data$dList$dTypes.Nil)(s2));
    const rl = rs.length;
    const ls = fromFoldable1(Data$dMap$dInternal.foldableWithIndexMap.foldrWithIndex(k => v => acc => Data$dList$dTypes.$List("Cons", k, acc))(Data$dList$dTypes.Nil)(s1));
    const ll = ls.length;
    return fromFoldable3((() => {
      const acc = [];
      return tailRecM2(l => r => {
        if (l < ll && r < rl) {
          const v = dictOrd.compare(ls[l])(rs[r]);
          if (v === "EQ") {
            const $0 = () => acc.push(ls[l]);
            return () => {
              $0();
              return Control$dMonad$dRec$dClass.$Step("Loop", {a: l + 1 | 0, b: r + 1 | 0});
            };
          }
          if (v === "LT") {
            const $0 = Control$dMonad$dRec$dClass.$Step("Loop", {a: l + 1 | 0, b: r});
            return () => $0;
          }
          if (v === "GT") {
            const $0 = Control$dMonad$dRec$dClass.$Step("Loop", {a: l, b: r + 1 | 0});
            return () => $0;
          }
          $runtime.fail();
        }
        return () => Control$dMonad$dRec$dClass.$Step("Done", acc);
      })(0)(0)();
    })());
  };
};
const map = dictOrd => f => foldableSet.foldl(m => a => Data$dMap$dInternal.insert(dictOrd)(f(a))()(m))(Data$dMap$dInternal.Leaf);
const mapMaybe = dictOrd => f => foldableSet.foldr(a => acc => {
  const $0 = f(a);
  if ($0.tag === "Nothing") { return acc; }
  if ($0.tag === "Just") { return Data$dMap$dInternal.insert(dictOrd)($0._1)()(acc); }
  $runtime.fail();
})(Data$dMap$dInternal.Leaf);
const monoidSet = dictOrd => ({mempty: Data$dMap$dInternal.Leaf, Semigroup0: () => ({append: union(dictOrd)})});
const unions = dictFoldable => dictOrd => dictFoldable.foldl(union(dictOrd))(Data$dMap$dInternal.Leaf);
const $$delete = dictOrd => a => v => Data$dMap$dInternal.delete(dictOrd)(a)(v);
const difference = dictOrd => s1 => s2 => {
  const go = go$a0$copy => go$a1$copy => {
    let go$a0 = go$a0$copy, go$a1 = go$a1$copy, go$c = true, go$r;
    while (go$c) {
      const b = go$a0, v = go$a1;
      if (v.tag === "Nil") {
        go$c = false;
        go$r = b;
        continue;
      }
      if (v.tag === "Cons") {
        go$a0 = Data$dMap$dInternal.delete(dictOrd)(v._1)(b);
        go$a1 = v._2;
        continue;
      }
      $runtime.fail();
    }
    return go$r;
  };
  return go(s1)(Data$dMap$dInternal.foldableWithIndexMap.foldrWithIndex(k => v => acc => Data$dList$dTypes.$List("Cons", k, acc))(Data$dList$dTypes.Nil)(s2));
};
const subset = dictOrd => s1 => s2 => difference(dictOrd)(s1)(s2).tag === "Leaf";
const properSubset = dictOrd => {
  const $0 = dictOrd.Eq0();
  return s1 => s2 => difference(dictOrd)(s1)(s2).tag === "Leaf" && !Data$dMap$dInternal.eqMap($0)(Data$dEq.eqUnit).eq(s1)(s2);
};
const checkValid = v => Data$dMap$dInternal.checkValid(v);
const catMaybes = dictOrd => mapMaybe(dictOrd)(identity);
export {
  $$Set as Set,
  catMaybes,
  checkValid,
  $$delete as delete,
  difference,
  empty,
  eq1Set,
  eqSet,
  filter,
  findMax,
  findMin,
  foldableSet,
  fromFoldable,
  fromFoldable1,
  fromMap,
  identity,
  insert,
  intersection,
  isEmpty,
  map,
  mapMaybe,
  member,
  monoidSet,
  ord1Set,
  ordSet,
  properSubset,
  semigroupSet,
  showSet,
  singleton,
  size,
  subset,
  tailRecM2,
  toMap,
  toUnfoldable,
  toUnfoldable1,
  toggle,
  union,
  unions
};
