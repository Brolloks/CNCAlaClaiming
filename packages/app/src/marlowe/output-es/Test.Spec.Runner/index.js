import * as $runtime from "../runtime.js";
import * as Control$dApply from "../Control.Apply/index.js";
import * as Control$dBind from "../Control.Bind/index.js";
import * as Control$dMonad$dError$dClass from "../Control.Monad.Error.Class/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunction from "../Data.Function/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNumber from "../Data.Number/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Effect$dAVar from "../Effect.AVar/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dAff$dAVar from "../Effect.Aff.AVar/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Effect$dNow from "../Effect.Now/index.js";
import * as Pipes from "../Pipes/index.js";
import * as Pipes$dCore from "../Pipes.Core/index.js";
import * as Pipes$dInternal from "../Pipes.Internal/index.js";
import * as Test$dSpec from "../Test.Spec/index.js";
import * as Test$dSpec$dConsole from "../Test.Spec.Console/index.js";
import * as Test$dSpec$dResult from "../Test.Spec.Result/index.js";
import * as Test$dSpec$dRunner$dEvent from "../Test.Spec.Runner.Event/index.js";
import * as Test$dSpec$dSpeed from "../Test.Spec.Speed/index.js";
import * as Test$dSpec$dStyle from "../Test.Spec.Style/index.js";
import * as Test$dSpec$dSummary from "../Test.Spec.Summary/index.js";
import * as Test$dSpec$dTree from "../Test.Spec.Tree/index.js";
import {exit} from "./foreign.js";
const bindProxy = /* #__PURE__ */ Pipes$dInternal.bindProxy(Effect$dAff.monadAff);
const applyProxy = /* #__PURE__ */ Pipes$dInternal.applyProxy(Effect$dAff.monadAff);
const applicativeProxy = /* #__PURE__ */ (() => {
  const applyProxy1 = Pipes$dInternal.applyProxy(Effect$dAff.monadAff);
  return {pure: Pipes$dInternal.Pure, Apply0: () => applyProxy1};
})();
const parTraverse = dictTraversable => {
  const traverse = dictTraversable.traverse(Effect$dAff.applicativeParAff);
  return f => {
    const $0 = traverse(x => f(x));
    return x => Effect$dAff._sequential($0(x));
  };
};
const runEffectRec = /* #__PURE__ */ Pipes$dCore.runEffectRec(Effect$dAff.monadRecAff);
const $$try = /* #__PURE__ */ Control$dMonad$dError$dClass.try(Effect$dAff.monadErrorAff);
const liftEffect1 = /* #__PURE__ */ (() => Pipes$dInternal.proxyMonadEffect(Effect$dAff.monadEffectAff).liftEffect)();
const map1 = /* #__PURE__ */ (() => Pipes$dInternal.functorProxy(Effect$dAff.monadAff).map)();
const $$for = /* #__PURE__ */ (() => {
  const traverse2 = Data$dTraversable.traversableArray.traverse(applicativeProxy);
  return x => f => traverse2(f)(x);
})();
const mergeProducers = dictTraversable => {
  const parTraverse1 = parTraverse(dictTraversable);
  return ps => bindProxy.bind(Pipes$dInternal.monadTransProxy.lift(Effect$dAff.monadAff)(Effect$dAff$dAVar.empty))($$var => bindProxy.bind(Pipes$dInternal.monadTransProxy.lift(Effect$dAff.monadAff)(Effect$dAff.forkAff(Effect$dAff._bind(parTraverse1(p => runEffectRec(Pipes$dCore.composeResponse(Effect$dAff.monadAff)(p)(i => applyProxy.apply(applyProxy.Functor0().map(v => Control$dApply.identity)(Pipes$dInternal.monadTransProxy.lift(Effect$dAff.monadAff)(Effect$dAff$dAVar.put(i)($$var))))(applicativeProxy.pure()))))(ps))(x => Effect$dAff._bind(Effect$dAff._liftEffect(Effect$dAVar._killVar(
    Effect$dAVar.ffiUtil,
    Effect$dException.error("finished"),
    $$var
  )))(() => Effect$dAff._pure(x))))))(fib => {
    const loop$lazy = $runtime.binding(() => bindProxy.bind(Pipes$dInternal.monadTransProxy.lift(Effect$dAff.monadAff)($$try(Effect$dAff$dAVar.take($$var))))(res => {
      if (res.tag === "Left") { return Pipes$dInternal.monadTransProxy.lift(Effect$dAff.monadAff)(Effect$dAff.joinFiber(fib)); }
      if (res.tag === "Right") { return bindProxy.bind(Pipes$dInternal.$$$Proxy("Respond", res._1, Pipes$dInternal.Pure))(() => loop$lazy()); }
      $runtime.fail();
    }));
    const loop = loop$lazy();
    return loop;
  }));
};
const mergeProducers1 = /* #__PURE__ */ mergeProducers(Data$dTraversable.traversableArray);
const makeTimeout = v => Effect$dAff._bind(Effect$dAff._delay(Data$dEither.Right, v))(() => Effect$dAff.makeAff(cb => {
  const $0 = cb(Data$dEither.$Either("Left", Effect$dException.error("test timed out after " + Data$dShow.showIntImpl(Data$dInt.unsafeClamp(Data$dNumber.round(v))) + "ms")));
  return () => {
    $0();
    return Effect$dAff.nonCanceler;
  };
}));
const timeout = time => t => Effect$dAff._bind(Effect$dAff._sequential(Effect$dAff._parAffAlt($$try(makeTimeout(time)))($$try(t))))(v2 => {
  if (v2.tag === "Left") { return Effect$dAff._throwError(v2._1); }
  if (v2.tag === "Right") { return Effect$dAff._pure(v2._1); }
  $runtime.fail();
});
const defaultConfig = {slow: 75.0, timeout: /* #__PURE__ */ Data$dMaybe.$Maybe("Just", 2000.0), exit: true};
const _run = dictFunctor => {
  const collect = Test$dSpec.collect(dictFunctor);
  return config => {
    const runGroup = v => {
      if (v.test.tag === "Leaf") {
        if (v.test._2.tag === "Just") {
          const $0 = v.test._2._1;
          const $1 = v.test._1;
          return bindProxy.bind(Pipes$dInternal.$$$Proxy(
            "Respond",
            Test$dSpec$dRunner$dEvent.$Event("Test", v.isParallelizable ? Test$dSpec$dRunner$dEvent.Parallel : Test$dSpec$dRunner$dEvent.Sequential, v.path, $1),
            Pipes$dInternal.Pure
          ))(() => {
            const example = $0.example(a => a());
            return bindProxy.bind(Pipes$dInternal.monadTransProxy.lift(Effect$dAff.monadAff)(Effect$dAff._liftEffect(Effect$dNow.now)))(start => bindProxy.bind(Pipes$dInternal.monadTransProxy.lift(Effect$dAff.monadAff)(Effect$dAff.try(config.timeout.tag === "Just"
              ? timeout(config.timeout._1)(example)
              : example)))(e => bindProxy.bind(liftEffect1(Effect$dNow.now))(end => {
              const duration = end - start;
              const $2 = Test$dSpec$dResult.$Result(
                "Success",
                (() => {
                  if (duration > config.slow) { return Test$dSpec$dSpeed.Slow; }
                  if (duration > config.slow / 2.0) { return Test$dSpec$dSpeed.Medium; }
                  return Test$dSpec$dSpeed.Fast;
                })(),
                duration
              );
              const res = (() => {
                if (e.tag === "Left") { return Test$dSpec$dResult.$Result("Failure", e._1); }
                if (e.tag === "Right") { return $2; }
                $runtime.fail();
              })();
              return bindProxy.bind(Pipes$dInternal.$$$Proxy("Respond", Test$dSpec$dRunner$dEvent.$Event("TestEnd", v.path, $1, res), Pipes$dInternal.Pure))(() => applicativeProxy.pure([
                Test$dSpec$dTree.$Tree("Leaf", $1, Data$dMaybe.$Maybe("Just", res))
              ]));
            })));
          });
        }
        if (v.test._2.tag === "Nothing") {
          const $0 = v.test._1;
          return bindProxy.bind(Pipes$dInternal.$$$Proxy("Respond", Test$dSpec$dRunner$dEvent.$Event("Pending", v.path, $0), Pipes$dInternal.Pure))(() => applicativeProxy.pure([
            Test$dSpec$dTree.$Tree("Leaf", $0, Data$dMaybe.Nothing)
          ]));
        }
        $runtime.fail();
      }
      if (v.test.tag === "Node") {
        if (v.test._1.tag === "Right") {
          return applyProxy.apply(applyProxy.Functor0().map(Data$dFunction.const)(loop(Data$dArray.zipWith(index => x => (
            {test: x, path: [...v.path, {name: Data$dMaybe.Nothing, index}]}
          ))(Data$dArray.range(0)(v.test._2.length - 1 | 0))(v.test._2))))(Pipes$dInternal.monadTransProxy.lift(Effect$dAff.monadAff)(v.test._1._1()));
        }
        if (v.test._1.tag === "Left") {
          const $0 = v.test._1._1;
          const $1 = v.test._2;
          return bindProxy.bind(Pipes$dInternal.$$$Proxy(
            "Respond",
            Test$dSpec$dRunner$dEvent.$Event("Suite", v.isParallelizable ? Test$dSpec$dRunner$dEvent.Parallel : Test$dSpec$dRunner$dEvent.Sequential, v.path, $0),
            Pipes$dInternal.Pure
          ))(() => bindProxy.bind(loop(Data$dArray.zipWith(index => x => ({test: x, path: [...v.path, {name: Data$dMaybe.$Maybe("Just", $0), index}]}))(Data$dArray.range(0)($1.length - 1 | 0))($1)))(res => bindProxy.bind(Pipes$dInternal.$$$Proxy(
            "Respond",
            Test$dSpec$dRunner$dEvent.$Event("SuiteEnd", v.path),
            Pipes$dInternal.Pure
          ))(() => applicativeProxy.pure([Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Left", $0), res)]))));
        }
      }
      $runtime.fail();
    };
    const loop = tests => map1(m => Control$dBind.arrayBind(m)(Control$dBind.identity))($$for(Data$dArray.groupBy(a => b => a.isParallelizable && b.isParallelizable)(Data$dFunctor.arrayMap(v => (
      {isParallelizable: Test$dSpec$dTree.isAllParallelizable(v.test), test: v.test, path: v.path}
    ))(tests)))(g => map1(m => Control$dBind.arrayBind(m)(Control$dBind.identity))((() => {
      const $0 = Data$dArray.index(g)(0);
      if ($0.tag === "Just") { return $0._1.isParallelizable; }
      $runtime.fail();
    })()
      ? mergeProducers1(Data$dFunctor.arrayMap(runGroup)(g))
      : $$for(g)(runGroup))));
    const $0 = dictFunctor.map(tests => bindProxy.bind(Pipes$dInternal.$$$Proxy(
      "Respond",
      Test$dSpec$dRunner$dEvent.$Event("Start", Test$dSpec$dTree.countTests(tests)),
      Pipes$dInternal.Pure
    ))(() => bindProxy.bind(loop(Data$dArray.zipWith(index => test => ({test, path: [{name: Data$dMaybe.Nothing, index}]}))(Data$dArray.range(0)(tests.length - 1 | 0))(tests)))(r => bindProxy.bind(Pipes$dInternal.$$$Proxy(
      "Respond",
      Test$dSpec$dRunner$dEvent.$Event("End", r),
      Pipes$dInternal.Pure
    ))(() => applicativeProxy.pure(r)))));
    return x => $0(collect(x));
  };
};
const runSpecT = dictFunctor => {
  const _run1 = _run(dictFunctor);
  return config => reporters => spec => dictFunctor.map(runner => {
    const reportedEvents = runEffectRec(Pipes$dCore.composeResponse(Effect$dAff.monadAff)(Data$dFoldable.foldlArray(Pipes.composePipes(Effect$dAff.monadAff))(runner)(reporters))((() => {
      const $0 = applicativeProxy.pure();
      return v => $0;
    })()));
    if (config.exit) {
      return Effect$dAff._bind($$try(reportedEvents))(v => {
        if (v.tag === "Left") {
          const $0 = v._1;
          return Effect$dAff._bind(Effect$dAff._liftEffect(Test$dSpec$dConsole.write(Test$dSpec$dStyle.styled(Test$dSpec$dStyle.red)(Effect$dException.showErrorImpl($0) + "\n"))))(() => Effect$dAff._bind(Effect$dAff._liftEffect(exit(1)))(() => Effect$dAff._throwError($0)));
        }
        if (v.tag === "Right") {
          const $0 = v._1;
          return Effect$dAff._liftEffect((() => {
            const $1 = exit(Test$dSpec$dSummary.summarize($0).failed === 0 ? 0 : 1);
            return () => {
              $1();
              return $0;
            };
          })());
        }
        $runtime.fail();
      });
    }
    return reportedEvents;
  })(_run1(config)(spec));
};
const runSpecT1 = /* #__PURE__ */ runSpecT(Data$dIdentity.functorIdentity);
const runSpec$p = config => reporters => spec => Effect$dAff._map(v => {})(runSpecT1(config)(reporters)(spec));
const run = () => runSpec$p(defaultConfig);
const runSpec = /* #__PURE__ */ runSpec$p(defaultConfig);
export {
  _run,
  applicativeProxy,
  applyProxy,
  bindProxy,
  defaultConfig,
  $$for as for,
  liftEffect1,
  makeTimeout,
  map1,
  mergeProducers,
  mergeProducers1,
  parTraverse,
  run,
  runEffectRec,
  runSpec,
  runSpec$p,
  runSpecT,
  runSpecT1,
  timeout,
  $$try as try
};
export * from "./foreign.js";
