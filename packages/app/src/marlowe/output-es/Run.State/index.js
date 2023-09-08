import * as $runtime from "../runtime.js";
import * as Control$dMonad$dFree from "../Control.Monad.Free/index.js";
import * as Data$dCatList from "../Data.CatList/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Run from "../Run/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const $State = (_1, _2) => ({tag: "State", _1, _2});
const identity = x => x;
const stateIsSymbol = {reflectSymbol: () => "state"};
const State = value0 => value1 => $State(value0, value1);
const runStateAt = dictIsSymbol => () => sym => {
  const loop = loop$a0$copy => loop$a1$copy => {
    let loop$a0 = loop$a0$copy, loop$a1 = loop$a1$copy, loop$c = true, loop$r;
    while (loop$c) {
      const s = loop$a0, r = loop$a1;
      const v = Run.resume(Data$dEither.Left)(Data$dEither.Right)(r);
      if (v.tag === "Left") {
        if (v._1.type === dictIsSymbol.reflectSymbol(sym)) {
          const s$p = v._1.value._1(s);
          loop$a0 = s$p;
          loop$a1 = v._1.value._2(s$p);
          continue;
        }
        loop$c = false;
        loop$r = Control$dMonad$dFree.$Free(
          Control$dMonad$dFree.$FreeView("Bind", v._1, x => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x), Data$dCatList.CatNil)),
          Data$dCatList.snoc(Data$dCatList.CatNil)(runStateAt(dictIsSymbol)()(sym)(s))
        );
        continue;
      }
      if (v.tag === "Right") {
        loop$c = false;
        loop$r = Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", Data$dTuple.$Tuple(s, v._1)), Data$dCatList.CatNil);
        continue;
      }
      $runtime.fail();
    }
    return loop$r;
  };
  return loop;
};
const functorState = {map: f => m => $State(m._1, x => f(m._2(x)))};
const liftStateAt = dictIsSymbol => {
  const lift1 = Run.lift()(dictIsSymbol)(functorState);
  return () => lift1;
};
const getAt = dictIsSymbol => {
  const lift1 = Run.lift()(dictIsSymbol)(functorState);
  return () => sym => lift1(sym)($State(identity, identity));
};
const getsAt = dictIsSymbol => {
  const getAt1 = getAt(dictIsSymbol)();
  return () => sym => {
    const $0 = getAt1(sym);
    return a => Control$dMonad$dFree.$Free($0._1, Data$dCatList.snoc($0._2)(x => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", a(x)), Data$dCatList.CatNil)));
  };
};
const modifyAt = dictIsSymbol => {
  const lift1 = Run.lift()(dictIsSymbol)(functorState);
  return () => sym => f => lift1(sym)($State(f, v => {}));
};
const putAt = dictIsSymbol => {
  const modifyAt1 = modifyAt(dictIsSymbol)();
  return () => sym => {
    const $0 = modifyAt1(sym);
    return x => $0(v => x);
  };
};
const execStateAt = dictIsSymbol => () => sym => s => {
  const $0 = runStateAt(dictIsSymbol)()(sym)(s);
  return x => {
    const $1 = $0(x);
    return Control$dMonad$dFree.$Free($1._1, Data$dCatList.snoc($1._2)(x$1 => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x$1._1), Data$dCatList.CatNil)));
  };
};
const evalStateAt = dictIsSymbol => () => sym => s => {
  const $0 = runStateAt(dictIsSymbol)()(sym)(s);
  return x => {
    const $1 = $0(x);
    return Control$dMonad$dFree.$Free($1._1, Data$dCatList.snoc($1._2)(x$1 => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x$1._2), Data$dCatList.CatNil)));
  };
};
const _state = Type$dProxy.Proxy;
const evalState = /* #__PURE__ */ evalStateAt(stateIsSymbol)()(Type$dProxy.Proxy);
const execState = /* #__PURE__ */ execStateAt(stateIsSymbol)()(Type$dProxy.Proxy);
const $$get = /* #__PURE__ */ getAt(stateIsSymbol)()(Type$dProxy.Proxy);
const gets = /* #__PURE__ */ getsAt(stateIsSymbol)()(Type$dProxy.Proxy);
const liftState = /* #__PURE__ */ Run.lift()(stateIsSymbol)(functorState)(Type$dProxy.Proxy);
const modify = /* #__PURE__ */ modifyAt(stateIsSymbol)()(Type$dProxy.Proxy);
const put = /* #__PURE__ */ putAt(stateIsSymbol)()(Type$dProxy.Proxy);
const runState = /* #__PURE__ */ runStateAt(stateIsSymbol)()(Type$dProxy.Proxy);
export {
  $State,
  State,
  _state,
  evalState,
  evalStateAt,
  execState,
  execStateAt,
  functorState,
  $$get as get,
  getAt,
  gets,
  getsAt,
  identity,
  liftState,
  liftStateAt,
  modify,
  modifyAt,
  put,
  putAt,
  runState,
  runStateAt,
  stateIsSymbol
};
