import * as $runtime from "../runtime.js";
import * as Control$dMonad$dFree from "../Control.Monad.Free/index.js";
import * as Control$dMonad$dRec$dClass from "../Control.Monad.Rec.Class/index.js";
import * as Control$dMonad$dState$dTrans from "../Control.Monad.State.Trans/index.js";
import * as Data$dCatList from "../Data.CatList/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dHeytingAlgebra from "../Data.HeytingAlgebra/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dList from "../Data.List/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dAVar from "../Effect.AVar/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dAff$dAVar from "../Effect.Aff.AVar/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
const $Group = (_1, _2) => ({tag: "Group", _1, _2});
const $TestF = (tag, _1, _2, _3, _4, _5) => ({tag, _1, _2, _3, _4, _5});
const modify = /* #__PURE__ */ (() => {
  const $0 = Control$dMonad$dState$dTrans.monadStateStateT(Data$dIdentity.monadIdentity);
  return f => $0.state(s => {
    const s$p = f(s);
    return Data$dTuple.$Tuple(s$p, s$p);
  });
})();
const pure1 = /* #__PURE__ */ (() => Control$dMonad$dState$dTrans.applicativeStateT(Data$dIdentity.monadIdentity).pure)();
const foldFree = /* #__PURE__ */ Control$dMonad$dFree.foldFree(/* #__PURE__ */ Control$dMonad$dState$dTrans.monadRecStateT(Control$dMonad$dRec$dClass.monadRecIdentity));
const $$for = /* #__PURE__ */ (() => {
  const traverse2 = Data$dList$dTypes.traversableList.traverse(Effect$dAff.applicativeAff);
  return x => f => traverse2(f)(x);
})();
const Skip = x => x;
const Only = x => x;
const Group = value0 => value1 => $Group(value0, value1);
const TestGroup = value0 => value1 => value2 => value3 => $TestF("TestGroup", value0, value1, value2, value3);
const TestUnit = value0 => value1 => value2 => value3 => value4 => $TestF("TestUnit", value0, value1, value2, value3, value4);
const SkipUnit = value0 => value1 => $TestF("SkipUnit", value0, value1);
const testSkip = l => t => Control$dMonad$dFree.$Free(
  Control$dMonad$dFree.$FreeView(
    "Bind",
    $TestF("TestUnit", l, true, false, t, undefined),
    x => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x), Data$dCatList.CatNil)
  ),
  Data$dCatList.CatNil
);
const testOnly = l => t => Control$dMonad$dFree.$Free(
  Control$dMonad$dFree.$FreeView(
    "Bind",
    $TestF("TestUnit", l, false, true, t, undefined),
    x => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x), Data$dCatList.CatNil)
  ),
  Data$dCatList.CatNil
);
const test = l => t => Control$dMonad$dFree.$Free(
  Control$dMonad$dFree.$FreeView(
    "Bind",
    $TestF("TestUnit", l, false, false, t, undefined),
    x => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x), Data$dCatList.CatNil)
  ),
  Data$dCatList.CatNil
);
const suiteSkip = label => tests => Control$dMonad$dFree.$Free(
  Control$dMonad$dFree.$FreeView(
    "Bind",
    $TestF("TestGroup", $Group(label, tests), true, false, undefined),
    x => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x), Data$dCatList.CatNil)
  ),
  Data$dCatList.CatNil
);
const suiteOnly = label => tests => Control$dMonad$dFree.$Free(
  Control$dMonad$dFree.$FreeView(
    "Bind",
    $TestF("TestGroup", $Group(label, tests), false, true, undefined),
    x => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x), Data$dCatList.CatNil)
  ),
  Data$dCatList.CatNil
);
const suite = label => tests => Control$dMonad$dFree.$Free(
  Control$dMonad$dFree.$FreeView(
    "Bind",
    $TestF("TestGroup", $Group(label, tests), false, false, undefined),
    x => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x), Data$dCatList.CatNil)
  ),
  Data$dCatList.CatNil
);
const success = /* #__PURE__ */ Effect$dAff._pure();
const showOnly = {
  show: v => {
    if (v) { return "true"; }
    return "false";
  }
};
const newtypeSkip = {Coercible0: () => {}};
const newtypeOnly = {Coercible0: () => {}};
const makeTimeout = time => Effect$dAff._bind(Effect$dAff._delay(Data$dEither.Right, Data$dInt.toNumber(time)))(() => Effect$dAff._throwError(Effect$dException.error("test timed out after " + Data$dShow.showIntImpl(time) + "ms")));
const timeout = time => t => Effect$dAff._bind(Effect$dAff._sequential(Effect$dAff._parAffAlt(Effect$dAff.try(makeTimeout(time)))(Effect$dAff.try(t))))(r => {
  if (r.tag === "Left") { return Effect$dAff._throwError(r._1); }
  if (r.tag === "Right") { return success; }
  $runtime.fail();
});
const keepErrors = /* #__PURE__ */ (() => {
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
        go$a0 = v._1._2.tag === "Left"
          ? Data$dList$dTypes.foldableList.foldr(Data$dList$dTypes.Cons)(Data$dList$dTypes.$List("Cons", Data$dTuple.$Tuple(v._1._1, v._1._2._1), Data$dList$dTypes.Nil))(b)
          : b;
        go$a1 = v._2;
        continue;
      }
      $runtime.fail();
    }
    return go$r;
  };
  return go(Data$dList$dTypes.Nil);
})();
const it = test;
const haytingAlgebraOnly = /* #__PURE__ */ (() => (
  {
    ff: false,
    tt: true,
    implies: Data$dHeytingAlgebra.heytingAlgebraBoolean.implies,
    conj: Data$dHeytingAlgebra.boolConj,
    disj: Data$dHeytingAlgebra.boolDisj,
    not: Data$dHeytingAlgebra.boolNot
  }
))();
const heytingAlgebraTuple = /* #__PURE__ */ Data$dTuple.heytingAlgebraTuple(haytingAlgebraOnly)(haytingAlgebraOnly);
const hasOnly = t => foldFree(v => {
  if (v.tag === "TestGroup") {
    const $0 = v._4;
    const $1 = modify((() => {
      const $1 = heytingAlgebraTuple.disj(hasOnly(v._1._2));
      const $2 = heytingAlgebraTuple.disj(Data$dTuple.$Tuple(v._3, false));
      return x => $1($2(x));
    })());
    return s => Data$dTuple.$Tuple($0, $1(s)._2);
  }
  if (v.tag === "TestUnit") {
    const $0 = v._5;
    const $1 = modify(heytingAlgebraTuple.disj(Data$dTuple.$Tuple(false, v._3)));
    return s => Data$dTuple.$Tuple($0, $1(s)._2);
  }
  if (v.tag === "SkipUnit") { return pure1(v._2); }
  $runtime.fail();
})(t)(heytingAlgebraTuple.ff)._2;
const functorTestF = {
  map: v => v1 => {
    if (v1.tag === "TestGroup") { return $TestF("TestGroup", v1._1, v1._2, v1._3, v(v1._4)); }
    if (v1.tag === "TestUnit") { return $TestF("TestUnit", v1._1, v1._2, v1._3, v1._4, v(v1._5)); }
    if (v1.tag === "SkipUnit") { return $TestF("SkipUnit", functorTestF.map(v)(v1._1), v(v1._2)); }
    $runtime.fail();
  }
};
const runFreeM = /* #__PURE__ */ Control$dMonad$dFree.runFreeM(functorTestF)(Effect$dAff.monadRecAff);
const walkSuite = runItem => tests => Effect$dAff._bind(Effect$dAff._liftEffect(Effect$dAVar._newVar(Data$dList$dTypes.Nil)))(coll => {
  const walkItem = v => v1 => {
    if (v1.tag === "TestGroup") {
      const $0 = v1._1._2;
      const $1 = v1._1._1;
      const $2 = v1._4;
      return Effect$dAff._bind(runItem(v)(Data$dEither.$Either("Left", $1)))(() => Effect$dAff._bind(runFreeM(walkItem(Data$dList$dTypes.foldableList.foldr(Data$dList$dTypes.Cons)(Data$dList$dTypes.$List(
        "Cons",
        $1,
        Data$dList$dTypes.Nil
      ))(v)))($0))(() => Effect$dAff._pure($2)));
    }
    if (v1.tag === "TestUnit") {
      const $0 = v1._1;
      const $1 = v1._5;
      return Effect$dAff._bind(Effect$dAff.suspendAff(v1._4))(fiber => Effect$dAff._bind(Effect$dAff$dAVar.take(coll))(cs => Effect$dAff._bind(Effect$dAff$dAVar.put(Data$dList$dTypes.$List(
        "Cons",
        Data$dTuple.$Tuple(
          Data$dList$dTypes.foldableList.foldr(Data$dList$dTypes.Cons)(Data$dList$dTypes.$List("Cons", $0, Data$dList$dTypes.Nil))(v),
          Effect$dAff.joinFiber(fiber)
        ),
        cs
      ))(coll))(() => Effect$dAff._bind(runItem(v)(Data$dEither.$Either("Right", Data$dTuple.$Tuple($0, Effect$dAff.joinFiber(fiber)))))(() => Effect$dAff._pure($1)))));
    }
    if (v1.tag === "SkipUnit") { return Effect$dAff._pure(v1._2); }
    $runtime.fail();
  };
  return Effect$dAff._bind(runFreeM(walkItem(Data$dList$dTypes.Nil))(tests))(() => Effect$dAff._bind(Effect$dAff$dAVar.take(coll))(res => Effect$dAff._pure(res)));
});
const filterEmptyNodes = /* #__PURE__ */ (() => {
  const isEmpty = t => foldFree(empty)(t)(true)._2;
  const empty = v => {
    if (v.tag === "TestGroup") {
      const $0 = v._4;
      const $1 = modify((() => {
        const $1 = isEmpty(v._1._2);
        return $2 => $1 && $2;
      })());
      return s => Data$dTuple.$Tuple($0, $1(s)._2);
    }
    if (v.tag === "TestUnit") {
      const $0 = v._5;
      const $1 = modify($1 => false);
      return s => Data$dTuple.$Tuple($0, $1(s)._2);
    }
    if (v.tag === "SkipUnit") { return pure1(v._2); }
    $runtime.fail();
  };
  return Control$dMonad$dFree.substFree(v => {
    if (v.tag === "TestGroup" && isEmpty(v._1._2)) {
      return Control$dMonad$dFree.$Free(
        Control$dMonad$dFree.$FreeView("Bind", $TestF("SkipUnit", v, v._4), x => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x), Data$dCatList.CatNil)),
        Data$dCatList.CatNil
      );
    }
    return Control$dMonad$dFree.$Free(
      Control$dMonad$dFree.$FreeView("Bind", v, x => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x), Data$dCatList.CatNil)),
      Data$dCatList.CatNil
    );
  });
})();
const filterTests = t => {
  const v = hasOnly(t);
  const $0 = v._1;
  const $1 = v._2;
  const go = v1 => v2 => {
    if (v2.tag === "TestGroup") {
      if (v2._2) {
        return Control$dMonad$dFree.$Free(
          Control$dMonad$dFree.$FreeView("Bind", $TestF("SkipUnit", v2, v2._4), x => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x), Data$dCatList.CatNil)),
          Data$dCatList.CatNil
        );
      }
      return Control$dMonad$dFree.$Free(
        Control$dMonad$dFree.$FreeView(
          "Bind",
          $TestF("TestGroup", $Group(v2._1._1, Control$dMonad$dFree.substFree(go(v2._3))(v2._1._2)), v2._2, v2._3, v2._4),
          x => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x), Data$dCatList.CatNil)
        ),
        Data$dCatList.CatNil
      );
    }
    if (v2.tag === "TestUnit") {
      if ((!$0 || v1) && (!$1 || v2._3) && !v2._2) {
        return Control$dMonad$dFree.$Free(
          Control$dMonad$dFree.$FreeView("Bind", v2, x => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x), Data$dCatList.CatNil)),
          Data$dCatList.CatNil
        );
      }
      return Control$dMonad$dFree.$Free(
        Control$dMonad$dFree.$FreeView("Bind", $TestF("SkipUnit", v2, v2._5), x => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x), Data$dCatList.CatNil)),
        Data$dCatList.CatNil
      );
    }
    if (v2.tag === "SkipUnit") {
      return Control$dMonad$dFree.$Free(
        Control$dMonad$dFree.$FreeView("Bind", v2, x => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x), Data$dCatList.CatNil)),
        Data$dCatList.CatNil
      );
    }
    $runtime.fail();
  };
  return filterEmptyNodes(Control$dMonad$dFree.substFree(go(false))(t));
};
const failure = x => Effect$dAff._throwError(Effect$dException.error(x));
const describe = suite;
const countTests = ts => foldFree(v => {
  if (v.tag === "SkipUnit") { return pure1(v._2); }
  if (v.tag === "TestUnit") {
    const $0 = v._5;
    const $1 = modify($1 => 1 + $1 | 0);
    return s => Data$dTuple.$Tuple($0, $1(s)._2);
  }
  if (v.tag === "TestGroup") {
    const $0 = v._4;
    const $1 = modify((() => {
      const $1 = countTests(v._1._2);
      return $2 => $1 + $2 | 0;
    })());
    return s => Data$dTuple.$Tuple($0, $1(s)._2);
  }
  $runtime.fail();
})(ts)(0)._2;
const countSkippedTests = ts => foldFree(v => {
  if (v.tag === "SkipUnit") {
    if (v._1.tag === "TestUnit") {
      const $0 = v._2;
      const $1 = modify($1 => 1 + $1 | 0);
      return s => Data$dTuple.$Tuple($0, $1(s)._2);
    }
    if (v._1.tag === "TestGroup") {
      const $0 = v._2;
      const $1 = modify((() => {
        const $1 = countTests(v._1._1._2);
        return $2 => $1 + $2 | 0;
      })());
      return s => Data$dTuple.$Tuple($0, $1(s)._2);
    }
    if (v._1.tag === "SkipUnit") { return pure1(v._2); }
    $runtime.fail();
  }
  if (v.tag === "TestUnit") { return pure1(v._5); }
  if (v.tag === "TestGroup") {
    const $0 = v._4;
    const $1 = modify((() => {
      const $1 = countSkippedTests(v._1._2);
      return $2 => $1 + $2 | 0;
    })());
    return s => Data$dTuple.$Tuple($0, $1(s)._2);
  }
  $runtime.fail();
})(ts)(0)._2;
const collectTests = /* #__PURE__ */ (() => {
  const $0 = Effect$dAff._map(Data$dList.reverse);
  const $1 = walkSuite(v => v1 => Effect$dAff._pure());
  return x => $0($1(x));
})();
const collectResults = tests => $$for(tests)(v => Effect$dAff._map(Data$dTuple.Tuple(v._1))(Effect$dAff.try(v._2)));
export {
  $Group,
  $TestF,
  Group,
  Only,
  Skip,
  SkipUnit,
  TestGroup,
  TestUnit,
  collectResults,
  collectTests,
  countSkippedTests,
  countTests,
  describe,
  failure,
  filterEmptyNodes,
  filterTests,
  foldFree,
  $$for as for,
  functorTestF,
  hasOnly,
  haytingAlgebraOnly,
  heytingAlgebraTuple,
  it,
  keepErrors,
  makeTimeout,
  modify,
  newtypeOnly,
  newtypeSkip,
  pure1,
  runFreeM,
  showOnly,
  success,
  suite,
  suiteOnly,
  suiteSkip,
  test,
  testOnly,
  testSkip,
  timeout,
  walkSuite
};
