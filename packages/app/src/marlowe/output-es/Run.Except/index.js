import * as $runtime from "../runtime.js";
import * as Control$dMonad$dFree from "../Control.Monad.Free/index.js";
import * as Data$dCatList from "../Data.CatList/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Run from "../Run/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const exceptIsSymbol = {reflectSymbol: () => "except"};
const Except = x => x;
const runExceptAt = dictIsSymbol => () => sym => {
  const loop = r => {
    const v = Run.resume(Data$dEither.Left)(Data$dEither.Right)(r);
    if (v.tag === "Left") {
      if (v._1.type === dictIsSymbol.reflectSymbol(sym)) {
        return Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", Data$dEither.$Either("Left", v._1.value)), Data$dCatList.CatNil);
      }
      return Control$dMonad$dFree.$Free(
        Control$dMonad$dFree.$FreeView("Bind", v._1, x => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x), Data$dCatList.CatNil)),
        Data$dCatList.snoc(Data$dCatList.CatNil)(loop)
      );
    }
    if (v.tag === "Right") { return Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", Data$dEither.$Either("Right", v._1)), Data$dCatList.CatNil); }
    $runtime.fail();
  };
  return loop;
};
const runFailAt = dictIsSymbol => () => sym => {
  const $0 = Control$dMonad$dFree.freeFunctor.map(v2 => {
    if (v2.tag === "Left") { return Data$dMaybe.Nothing; }
    if (v2.tag === "Right") { return Data$dMaybe.$Maybe("Just", v2._1); }
    $runtime.fail();
  });
  const $1 = runExceptAt(dictIsSymbol)()(sym);
  return x => $0($1(x));
};
const functorExcept = {map: f => m => m};
const liftExceptAt = dictIsSymbol => {
  const lift1 = Run.lift()(dictIsSymbol)(functorExcept);
  return () => lift1;
};
const throwAt = dictIsSymbol => {
  const lift1 = Run.lift()(dictIsSymbol)(functorExcept);
  return () => sym => lift1(sym);
};
const noteAt = dictIsSymbol => {
  const lift1 = Run.lift()(dictIsSymbol)(functorExcept);
  return () => sym => e => v2 => {
    if (v2.tag === "Nothing") { return lift1(sym)(e); }
    if (v2.tag === "Just") { return Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", v2._1), Data$dCatList.CatNil); }
    $runtime.fail();
  };
};
const rethrowAt = dictIsSymbol => {
  const lift1 = Run.lift()(dictIsSymbol)(functorExcept);
  return () => sym => {
    const $0 = lift1(sym);
    return v2 => {
      if (v2.tag === "Left") { return $0(v2._1); }
      if (v2.tag === "Right") { return Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", v2._1), Data$dCatList.CatNil); }
      $runtime.fail();
    };
  };
};
const fromJustAt = dictIsSymbol => {
  const noteAt1 = noteAt(dictIsSymbol)();
  return () => sym => noteAt1(sym)();
};
const failAt = dictIsSymbol => {
  const lift1 = Run.lift()(dictIsSymbol)(functorExcept);
  return () => sym => lift1(sym)();
};
const catchAt = dictIsSymbol => () => sym => {
  const loop = k => r => {
    const v = Run.resume(Data$dEither.Left)(Data$dEither.Right)(r);
    if (v.tag === "Left") {
      if (v._1.type === dictIsSymbol.reflectSymbol(sym)) { return k(v._1.value); }
      return Control$dMonad$dFree.$Free(
        Control$dMonad$dFree.$FreeView("Bind", v._1, x => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x), Data$dCatList.CatNil)),
        Data$dCatList.snoc(Data$dCatList.CatNil)(loop(k))
      );
    }
    if (v.tag === "Right") { return Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", v._1), Data$dCatList.CatNil); }
    $runtime.fail();
  };
  return loop;
};
const _except = Type$dProxy.Proxy;
const $$catch = /* #__PURE__ */ catchAt(exceptIsSymbol)()(Type$dProxy.Proxy);
const fail = /* #__PURE__ */ Run.lift()(exceptIsSymbol)(functorExcept)(Type$dProxy.Proxy)();
const fromJust = /* #__PURE__ */ noteAt(exceptIsSymbol)()(Type$dProxy.Proxy)();
const liftExcept = /* #__PURE__ */ Run.lift()(exceptIsSymbol)(functorExcept)(Type$dProxy.Proxy);
const note = /* #__PURE__ */ noteAt(exceptIsSymbol)()(Type$dProxy.Proxy);
const rethrow = /* #__PURE__ */ rethrowAt(exceptIsSymbol)()(Type$dProxy.Proxy);
const runExcept = /* #__PURE__ */ runExceptAt(exceptIsSymbol)()(Type$dProxy.Proxy);
const runFail = /* #__PURE__ */ runFailAt(exceptIsSymbol)()(Type$dProxy.Proxy);
const $$throw = /* #__PURE__ */ Run.lift()(exceptIsSymbol)(functorExcept)(Type$dProxy.Proxy);
export {
  Except,
  _except,
  $$catch as catch,
  catchAt,
  exceptIsSymbol,
  fail,
  failAt,
  fromJust,
  fromJustAt,
  functorExcept,
  liftExcept,
  liftExceptAt,
  note,
  noteAt,
  rethrow,
  rethrowAt,
  runExcept,
  runExceptAt,
  runFail,
  runFailAt,
  $$throw as throw,
  throwAt
};
