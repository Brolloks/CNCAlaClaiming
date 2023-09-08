import * as $runtime from "../runtime.js";
import * as Control$dMonad$dFree from "../Control.Monad.Free/index.js";
import * as Data$dCatList from "../Data.CatList/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Run from "../Run/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const identity = x => x;
const readerIsSymbol = {reflectSymbol: () => "reader"};
const Reader = x => x;
const runReaderAt = dictIsSymbol => () => sym => {
  const loop = loop$a0$copy => loop$a1$copy => {
    let loop$a0 = loop$a0$copy, loop$a1 = loop$a1$copy, loop$c = true, loop$r;
    while (loop$c) {
      const e = loop$a0, r = loop$a1;
      const v = Run.resume(Data$dEither.Left)(Data$dEither.Right)(r);
      if (v.tag === "Left") {
        if (v._1.type === dictIsSymbol.reflectSymbol(sym)) {
          loop$a0 = e;
          loop$a1 = v._1.value(e);
          continue;
        }
        loop$c = false;
        loop$r = Control$dMonad$dFree.$Free(
          Control$dMonad$dFree.$FreeView("Bind", v._1, x => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x), Data$dCatList.CatNil)),
          Data$dCatList.snoc(Data$dCatList.CatNil)(runReaderAt(dictIsSymbol)()(sym)(e))
        );
        continue;
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
const functorReader = Data$dFunctor.functorFn;
const liftReaderAt = dictIsSymbol => {
  const lift1 = Run.lift()(dictIsSymbol)(Data$dFunctor.functorFn);
  return () => lift1;
};
const asksAt = dictIsSymbol => {
  const lift1 = Run.lift()(dictIsSymbol)(Data$dFunctor.functorFn);
  return () => sym => f => lift1(sym)(f);
};
const askAt = dictIsSymbol => {
  const lift1 = Run.lift()(dictIsSymbol)(Data$dFunctor.functorFn);
  return () => sym => lift1(sym)(identity);
};
const localAt = dictIsSymbol => {
  const lift1 = Run.lift()(dictIsSymbol)(Data$dFunctor.functorFn);
  return () => sym => {
    const runLocal$lazy = $runtime.binding(() => {
      const loop = loop$a0$copy => loop$a1$copy => {
        let loop$a0 = loop$a0$copy, loop$a1 = loop$a1$copy, loop$c = true, loop$r;
        while (loop$c) {
          const e = loop$a0, r = loop$a1;
          const v = Run.resume(Data$dEither.Left)(Data$dEither.Right)(r);
          if (v.tag === "Left") {
            if (v._1.type === dictIsSymbol.reflectSymbol(sym)) {
              loop$a0 = e;
              loop$a1 = v._1.value(e);
              continue;
            }
            loop$c = false;
            loop$r = Control$dMonad$dFree.$Free(
              Control$dMonad$dFree.$FreeView("Bind", v._1, x => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x), Data$dCatList.CatNil)),
              Data$dCatList.snoc(Data$dCatList.CatNil)(runLocal$lazy()(e))
            );
            continue;
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
    });
    const runLocal = runLocal$lazy();
    return f => r => {
      const $0 = lift1(sym)(identity);
      return Control$dMonad$dFree.$Free(
        $0._1,
        Data$dCatList.snoc(Data$dCatList.snoc($0._2)(x => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", f(x)), Data$dCatList.CatNil)))(a => runLocal(a)(r))
      );
    };
  };
};
const _reader = Type$dProxy.Proxy;
const ask = /* #__PURE__ */ Run.lift()(readerIsSymbol)(Data$dFunctor.functorFn)(Type$dProxy.Proxy)(identity);
const asks = /* #__PURE__ */ (() => {
  const lift1 = Run.lift()(readerIsSymbol)(Data$dFunctor.functorFn);
  return f => lift1(Type$dProxy.Proxy)(f);
})();
const liftReader = /* #__PURE__ */ Run.lift()(readerIsSymbol)(Data$dFunctor.functorFn)(Type$dProxy.Proxy);
const local = /* #__PURE__ */ localAt(readerIsSymbol)()(Type$dProxy.Proxy);
const runReader = /* #__PURE__ */ runReaderAt(readerIsSymbol)()(Type$dProxy.Proxy);
export {Reader, _reader, ask, askAt, asks, asksAt, functorReader, identity, liftReader, liftReaderAt, local, localAt, readerIsSymbol, runReader, runReaderAt};
