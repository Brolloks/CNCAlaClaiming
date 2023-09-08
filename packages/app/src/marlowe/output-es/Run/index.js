import * as $runtime from "../runtime.js";
import * as Control$dMonad$dFree from "../Control.Monad.Free/index.js";
import * as Control$dMonad$dRec$dClass from "../Control.Monad.Rec.Class/index.js";
import * as Data$dCatList from "../Data.CatList/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFunctor$dVariant from "../Data.Functor.Variant/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Partial from "../Partial/index.js";
import * as Run$dInternal from "../Run.Internal/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const identity = x => x;
const Run = x => x;
const send = x => Control$dMonad$dFree.$Free(
  Control$dMonad$dFree.$FreeView("Bind", x, x$1 => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x$1), Data$dCatList.CatNil)),
  Data$dCatList.CatNil
);
const newtypeRun = {Coercible0: () => {}};
const resume = k1 => k2 => Control$dMonad$dFree.resume$p(x => f => k1({type: x.type, value: x.map(x$1 => f(x$1))(x.value), map: x.map}))(k2);
const peel = /* #__PURE__ */ resume(Data$dEither.Left)(Data$dEither.Right);
const run = dictMonad => {
  const $0 = dictMonad.Bind1();
  const pure1 = dictMonad.Applicative0().pure;
  return k => {
    const loop$lazy = $runtime.binding(() => resume(a => $0.bind(k(a))(loop$lazy()))(pure1));
    const loop = loop$lazy();
    return loop;
  };
};
const run1 = /* #__PURE__ */ run(Effect$dAff.monadAff);
const runBaseAff = /* #__PURE__ */ run1(/* #__PURE__ */ Data$dFunctor$dVariant.match()()()({aff: a => a}));
const runBaseAff$p = /* #__PURE__ */ run1(/* #__PURE__ */ Data$dFunctor$dVariant.match()()()({aff: a => a, effect: a => Effect$dAff._liftEffect(a)}));
const runAccum = dictMonad => {
  const $0 = dictMonad.Bind1();
  const pure1 = dictMonad.Applicative0().pure;
  return k => {
    const loop = s => resume(b => $0.bind(k(s)(b))(v => loop(v._1)(v._2)))(pure1);
    return loop;
  };
};
const runAccumCont = k1 => k2 => {
  const loop = s => resume(b => k1(s)({type: b.type, value: b.map(b$1 => a => loop(a)(b$1))(b.value), map: b.map}))(k2(s));
  return loop;
};
const runAccumRec = dictMonadRec => {
  const Monad0 = dictMonadRec.Monad0();
  return k => {
    const $0 = dictMonadRec.tailRecM(v => {
      const $0 = v._1;
      return resume(b => Monad0.Bind1().Apply0().Functor0().map(Control$dMonad$dRec$dClass.Loop)(k($0)(b)))(x => Monad0.Applicative0().pure(Control$dMonad$dRec$dClass.$Step(
        "Done",
        x
      )))(v._2);
    });
    return a => b => $0(Data$dTuple.$Tuple(a, b));
  };
};
const runCont = k1 => k2 => {
  const loop$lazy = $runtime.binding(() => resume(b => k1({type: b.type, value: b.map(loop$lazy())(b.value), map: b.map}))(k2));
  const loop = loop$lazy();
  return loop;
};
const runRec = dictMonadRec => Control$dMonad$dFree.runFreeM(Data$dFunctor$dVariant.functorVariantF)(dictMonadRec);
const runBaseEffect = /* #__PURE__ */ Control$dMonad$dFree.runFreeM(Data$dFunctor$dVariant.functorVariantF)(Control$dMonad$dRec$dClass.monadRecEffect)(/* #__PURE__ */ Data$dFunctor$dVariant.match()()()({
  effect: a => a
}));
const monadRun = Control$dMonad$dFree.freeMonad;
const lift = () => dictIsSymbol => dictFunctor => {
  const map1 = dictFunctor.map;
  return p => x => Control$dMonad$dFree.$Free(
    Control$dMonad$dFree.$FreeView(
      "Bind",
      {type: dictIsSymbol.reflectSymbol(p), value: x, map: map1},
      x$1 => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x$1), Data$dCatList.CatNil)
    ),
    Data$dCatList.CatNil
  );
};
const liftAff = /* #__PURE__ */ lift()({reflectSymbol: () => "aff"})(Effect$dAff.functorAff)(Type$dProxy.Proxy);
const liftChoose = /* #__PURE__ */ lift()({reflectSymbol: () => "choose"})(Run$dInternal.functorChoose)(Type$dProxy.Proxy);
const liftEffect = /* #__PURE__ */ lift()({reflectSymbol: () => "effect"})(Effect.functorEffect)(Type$dProxy.Proxy);
const runMonadEffect = dictTypeEquals => ({liftEffect: x => liftEffect(x), Monad0: () => Control$dMonad$dFree.freeMonad});
const runMonadAff = dictTypeEquals => {
  const runMonadEffect1 = {liftEffect: x => liftEffect(x), Monad0: () => Control$dMonad$dFree.freeMonad};
  return {liftAff: x => liftAff(x), MonadEffect0: () => runMonadEffect1};
};
const interpretRec = dictMonadRec => Control$dMonad$dFree.runFreeM(Data$dFunctor$dVariant.functorVariantF)(dictMonadRec);
const interpret = dictMonad => run(dictMonad);
const functorRun = Control$dMonad$dFree.freeFunctor;
const extract = /* #__PURE__ */ Control$dMonad$dFree.runFree(Data$dFunctor$dVariant.functorVariantF)(v => Partial._crashWith("Run: the impossible happened"));
const expand = () => Unsafe$dCoerce.unsafeCoerce;
const bindRun = Control$dMonad$dFree.freeBind;
const runAlt = dictTypeEquals => (
  {
    alt: a => b => {
      const $0 = liftChoose(Run$dInternal.$Choose("Alt", identity));
      return Control$dMonad$dFree.$Free(
        $0._1,
        Data$dCatList.snoc($0._2)(v => {
          if (v) { return a; }
          return b;
        })
      );
    },
    Functor0: () => Control$dMonad$dFree.freeFunctor
  }
);
const runPlus = dictTypeEquals => {
  const runAlt1 = runAlt(dictTypeEquals);
  return {empty: liftChoose(Run$dInternal.Empty), Alt0: () => runAlt1};
};
const applyRun = Control$dMonad$dFree.freeApply;
const applicativeRun = Control$dMonad$dFree.freeApplicative;
const monadRecRun = {
  tailRecM: f => {
    const loop = a => {
      const $0 = f(a);
      return Control$dMonad$dFree.$Free(
        $0._1,
        Data$dCatList.snoc($0._2)(b => {
          if (b.tag === "Done") { return Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", b._1), Data$dCatList.CatNil); }
          if (b.tag === "Loop") { return loop(b._1); }
          $runtime.fail();
        })
      );
    };
    return loop;
  },
  Monad0: () => Control$dMonad$dFree.freeMonad
};
const runAccumPure = k1 => k2 => {
  const loop = loop$a0$copy => loop$a1$copy => {
    let loop$a0 = loop$a0$copy, loop$a1 = loop$a1$copy, loop$c = true, loop$r;
    while (loop$c) {
      const s = loop$a0, r = loop$a1;
      const v = resume(Data$dEither.Left)(Data$dEither.Right)(r);
      if (v.tag === "Left") {
        const v1 = k1(s)(v._1);
        if (v1.tag === "Loop") {
          loop$a0 = v1._1._1;
          loop$a1 = v1._1._2;
          continue;
        }
        if (v1.tag === "Done") {
          loop$c = false;
          loop$r = Control$dMonad$dFree.$Free(
            Control$dMonad$dFree.$FreeView("Bind", v1._1, x => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x), Data$dCatList.CatNil)),
            Data$dCatList.snoc(Data$dCatList.CatNil)(runAccumPure(k1)(k2)(s))
          );
          continue;
        }
        $runtime.fail();
      }
      if (v.tag === "Right") {
        loop$c = false;
        loop$r = Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", k2(s)(v._1)), Data$dCatList.CatNil);
        continue;
      }
      $runtime.fail();
    }
    return loop$r;
  };
  return loop;
};
const runAlternative = dictTypeEquals => {
  const runAlt1 = runAlt(dictTypeEquals);
  const runPlus1 = {empty: liftChoose(Run$dInternal.Empty), Alt0: () => runAlt1};
  return {Applicative0: () => Control$dMonad$dFree.freeApplicative, Plus1: () => runPlus1};
};
const runPure = k => {
  const loop = loop$a0$copy => {
    let loop$a0 = loop$a0$copy, loop$c = true, loop$r;
    while (loop$c) {
      const r = loop$a0;
      const v = resume(Data$dEither.Left)(Data$dEither.Right)(r);
      if (v.tag === "Left") {
        const v1 = k(v._1);
        if (v1.tag === "Loop") {
          loop$a0 = v1._1;
          continue;
        }
        if (v1.tag === "Done") {
          loop$c = false;
          loop$r = Control$dMonad$dFree.$Free(
            Control$dMonad$dFree.$FreeView("Bind", v1._1, x => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x), Data$dCatList.CatNil)),
            Data$dCatList.snoc(Data$dCatList.CatNil)(runPure(k))
          );
          continue;
        }
        $runtime.fail();
      }
      if (v.tag === "Right") {
        loop$c = false;
        loop$r = Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", v._1), Data$dCatList.CatNil);
        continue;
      }
      $runtime.fail();
    }
    return loop$r;
  };
  return loop;
};
export {
  Run,
  applicativeRun,
  applyRun,
  bindRun,
  expand,
  extract,
  functorRun,
  identity,
  interpret,
  interpretRec,
  lift,
  liftAff,
  liftChoose,
  liftEffect,
  monadRecRun,
  monadRun,
  newtypeRun,
  peel,
  resume,
  run,
  run1,
  runAccum,
  runAccumCont,
  runAccumPure,
  runAccumRec,
  runAlt,
  runAlternative,
  runBaseAff,
  runBaseAff$p,
  runBaseEffect,
  runCont,
  runMonadAff,
  runMonadEffect,
  runPlus,
  runPure,
  runRec,
  send
};
