import * as $runtime from "../runtime.js";
import * as Control$dMonad$dState$dTrans from "../Control.Monad.State.Trans/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
const $Tree = (tag, _1, _2) => ({tag, _1, _2});
const showEither = dictShow1 => (
  {
    show: v => {
      if (v.tag === "Left") { return "(Left " + Data$dShow.showStringImpl(v._1) + ")"; }
      if (v.tag === "Right") { return "(Right " + dictShow1.show(v._1) + ")"; }
      $runtime.fail();
    }
  }
);
const show1 = record => "{ example: " + Data$dShow.showStringImpl(record.example) + "," + (record.isFocused ? " isFocused: true" : " isFocused: false") + "," + (() => {
  if (record.isParallelizable.tag === "Just") {
    if (record.isParallelizable._1) { return " isParallelizable: (Just true)"; }
    return " isParallelizable: (Just false)";
  }
  if (record.isParallelizable.tag === "Nothing") { return " isParallelizable: Nothing"; }
  $runtime.fail();
})() + " }";
const all = /* #__PURE__ */ (() => Data$dFoldable.foldableArray.foldMap((() => {
  const semigroupConj1 = {append: v => v1 => v && v1};
  return {mempty: true, Semigroup0: () => semigroupConj1};
})()))();
const applicativeStateT = /* #__PURE__ */ Control$dMonad$dState$dTrans.applicativeStateT(Data$dIdentity.monadIdentity);
const for_ = /* #__PURE__ */ Data$dFoldable.for_(applicativeStateT)(Data$dFoldable.foldableArray);
const modify_ = /* #__PURE__ */ (() => {
  const $0 = Control$dMonad$dState$dTrans.monadStateStateT(Data$dIdentity.monadIdentity);
  return f => $0.state(s => Data$dTuple.$Tuple(undefined, f(s)));
})();
const $$for = /* #__PURE__ */ (() => {
  const traverse2 = Data$dTraversable.traversableArray.traverse(applicativeStateT);
  return x => f => traverse2(f)(x);
})();
const Node = value0 => value1 => $Tree("Node", value0, value1);
const Leaf = value0 => value1 => $Tree("Leaf", value0, value1);
const PathItem = x => x;
const Item = x => x;
const treeFoldable = {
  foldr: v => v1 => v2 => {
    if (v2.tag === "Leaf") {
      if (v2._2.tag === "Nothing") { return v1; }
      if (v2._2.tag === "Just") { return v(v2._2._1)(v1); }
      $runtime.fail();
    }
    if (v2.tag === "Node") { return Data$dFoldable.foldrArray(a => i$p => treeFoldable.foldr(v)(i$p)(a))(v1)(v2._2); }
    $runtime.fail();
  },
  foldl: v => v1 => v2 => {
    if (v2.tag === "Leaf") {
      if (v2._2.tag === "Nothing") { return v1; }
      if (v2._2.tag === "Just") { return v(v1)(v2._2._1); }
      $runtime.fail();
    }
    if (v2.tag === "Node") { return Data$dFoldable.foldlArray(i$p => a => treeFoldable.foldl(v)(i$p)(a))(v1)(v2._2); }
    $runtime.fail();
  },
  foldMap: dictMonoid => f => treeFoldable.foldl(acc => x => dictMonoid.Semigroup0().append(acc)(f(x)))(dictMonoid.mempty)
};
const showIdTerm = {
  show: record => "{ index: " + Data$dShow.showIntImpl(record.index) + "," + (() => {
    if (record.name.tag === "Just") { return " name: (Just " + Data$dShow.showStringImpl(record.name._1) + ")"; }
    if (record.name.tag === "Nothing") { return " name: Nothing"; }
    $runtime.fail();
  })() + " }"
};
const showGroup = dictShow => dictShow1 => (
  {
    show: v => {
      if (v.tag === "Node") { return "(Node " + showEither(dictShow).show(v._1) + " " + Data$dShow.showArrayImpl(showGroup(dictShow)(dictShow1).show)(v._2) + ")"; }
      if (v.tag === "Leaf") {
        return "(Leaf " + Data$dShow.showStringImpl(v._1) + " " + (() => {
          if (v._2.tag === "Just") { return "(Just " + dictShow1.show(v._2._1) + ")"; }
          if (v._2.tag === "Nothing") { return "Nothing"; }
          $runtime.fail();
        })() + ")";
      }
      $runtime.fail();
    }
  }
);
const pathItemOrd = /* #__PURE__ */ Data$dOrd.ordRecord()(/* #__PURE__ */ (() => {
  const $0 = Data$dMaybe.ordMaybe(Data$dOrd.ordString);
  const $1 = $0.Eq0();
  const eqRowCons2 = {eqRecord: v => ra => rb => ra.index === rb.index && $1.eq(ra.name)(rb.name)};
  return {
    compareRecord: v => ra => rb => {
      const left = Data$dOrd.ordInt.compare(ra.index)(rb.index);
      if (left === "LT" || left === "GT" || left !== "EQ") { return left; }
      const left$1 = $0.compare(ra.name)(rb.name);
      if (left$1 === "LT" || left$1 === "GT" || left$1 !== "EQ") { return left$1; }
      return Data$dOrdering.EQ;
    },
    EqRecord0: () => eqRowCons2
  };
})());
const pathItemEq = {
  eq: ra => rb => ra.index === rb.index && (ra.name.tag === "Nothing" ? rb.name.tag === "Nothing" : ra.name.tag === "Just" && rb.name.tag === "Just" && ra.name._1 === rb.name._1)
};
const parentSuite = /* #__PURE__ */ Data$dFoldable.foldrArray(v => v1 => {
  if (v1.tag === "Nothing") {
    if (v.name.tag === "Just") { return Data$dMaybe.$Maybe("Just", {path: [], name: v.name._1}); }
    if (v.name.tag === "Nothing") { return Data$dMaybe.Nothing; }
    $runtime.fail();
  }
  if (v1.tag === "Just") { return Data$dMaybe.$Maybe("Just", {path: [v, ...v1._1.path], name: v1._1.name}); }
  $runtime.fail();
})(Data$dMaybe.Nothing);
const newtypePathItem = {Coercible0: () => {}};
const parentSuiteName = /* #__PURE__ */ Data$dArray.mapMaybe(x => x.name);
const modifyAroundAction = action => v => ({isFocused: v.isFocused, isParallelizable: v.isParallelizable, example: aroundAction => v.example(x => aroundAction(action(x)))});
const itemShow = {show: v => "Item (" + show1({isFocused: v.isFocused, isParallelizable: v.isParallelizable, example: "Function"}) + ")"};
const itemNewtype = {Coercible0: () => {}};
const itemEq = {
  eq: v => v1 => v.isFocused === v1.isFocused && (v.isParallelizable.tag === "Nothing"
    ? v1.isParallelizable.tag === "Nothing"
    : v.isParallelizable.tag === "Just" && v1.isParallelizable.tag === "Just" && v.isParallelizable._1 === v1.isParallelizable._1)
};
const isAllParallelizable = v => {
  if (v.tag === "Node") { return all(isAllParallelizable)(v._2); }
  if (v.tag === "Leaf") {
    const $0 = (() => {
      if (v._2.tag === "Just") { return v._2._1.isParallelizable; }
      if (v._2.tag === "Nothing") { return Data$dMaybe.Nothing; }
      $runtime.fail();
    })();
    return v._2.tag === "Nothing" || ($0.tag === "Nothing" ? false : $0.tag === "Just" && $0._1);
  }
  $runtime.fail();
};
const eqGroup = dictEq => dictEq1 => (
  {
    eq: v => v1 => {
      if (v.tag === "Node") {
        return v1.tag === "Node" && (v._1.tag === "Left"
          ? v1._1.tag === "Left" && v._1._1 === v1._1._1
          : v._1.tag === "Right" && v1._1.tag === "Right" && dictEq.eq(v._1._1)(v1._1._1)) && Data$dEq.eqArrayImpl(eqGroup(dictEq)(dictEq1).eq)(v._2)(v1._2);
      }
      return v.tag === "Leaf" && v1.tag === "Leaf" && v._1 === v1._1 && (v._2.tag === "Nothing"
        ? v1._2.tag === "Nothing"
        : v._2.tag === "Just" && v1._2.tag === "Just" && dictEq1.eq(v._2._1)(v1._2._1));
    }
  }
);
const discardUnfocused = ts => {
  const findFocus = v => {
    if (v.tag === "Node") {
      const v1 = Data$dArray.mapMaybe(findFocus)(v._2);
      if (v1.length === 0) { return Data$dMaybe.Nothing; }
      return Data$dMaybe.$Maybe("Just", $Tree("Node", v._1, v1));
    }
    if (v.tag === "Leaf") {
      if (v._2.tag === "Just") {
        if (v._2._1.isFocused) { return Data$dMaybe.$Maybe("Just", v); }
        return Data$dMaybe.Nothing;
      }
      if (v._2.tag === "Nothing") { return Data$dMaybe.Nothing; }
    }
    $runtime.fail();
  };
  const v = Data$dArray.mapMaybe(findFocus)(ts);
  if (v.length === 0) { return ts; }
  return v;
};
const countTests = g => {
  const go = v => {
    if (v.tag === "Node") { return for_(v._2)(go); }
    if (v.tag === "Leaf") { return modify_(v1 => v1 + 1 | 0); }
    $runtime.fail();
  };
  return $$for(g)(go)(0)._2;
};
const bimapTree = g => f => {
  const go = namePath => spec => {
    if (spec.tag === "Node") {
      const namePath$p = (() => {
        if (spec._1.tag === "Left") { return Data$dArray.snoc(namePath)(spec._1._1); }
        if (spec._1.tag === "Right") { return namePath; }
        $runtime.fail();
      })();
      return $Tree(
        "Node",
        (() => {
          const $0 = g(namePath$p);
          if (spec._1.tag === "Left") { return Data$dEither.$Either("Left", spec._1._1); }
          if (spec._1.tag === "Right") { return Data$dEither.$Either("Right", $0(spec._1._1)); }
          $runtime.fail();
        })(),
        Data$dFunctor.arrayMap(go(namePath$p))(spec._2)
      );
    }
    if (spec.tag === "Leaf") {
      return $Tree(
        "Leaf",
        spec._1,
        (() => {
          const $0 = f(Data$dArray.snoc(namePath)(spec._1));
          if (spec._2.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0(spec._2._1)); }
          return Data$dMaybe.Nothing;
        })()
      );
    }
    $runtime.fail();
  };
  return go([]);
};
const treeBifunctor = {bimap: g => f => bimapTree(v => g)(v => f)};
export {
  $Tree,
  Item,
  Leaf,
  Node,
  PathItem,
  all,
  applicativeStateT,
  bimapTree,
  countTests,
  discardUnfocused,
  eqGroup,
  $$for as for,
  for_,
  isAllParallelizable,
  itemEq,
  itemNewtype,
  itemShow,
  modifyAroundAction,
  modify_,
  newtypePathItem,
  parentSuite,
  parentSuiteName,
  pathItemEq,
  pathItemOrd,
  show1,
  showEither,
  showGroup,
  showIdTerm,
  treeBifunctor,
  treeFoldable
};
