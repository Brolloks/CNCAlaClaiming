import * as $runtime from "../runtime.js";
import * as Control$dMonad$dFree from "../Control.Monad.Free/index.js";
import * as Data$dCatList from "../Data.CatList/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Run from "../Run/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const $Writer = (_1, _2) => ({tag: "Writer", _1, _2});
const writerIsSymbol = {reflectSymbol: () => "writer"};
const Writer = value0 => value1 => $Writer(value0, value1);
const functorWriter = {map: f => m => $Writer(m._1, f(m._2))};
const liftWriterAt = dictIsSymbol => {
  const lift1 = Run.lift()(dictIsSymbol)(functorWriter);
  return () => lift1;
};
const tellAt = dictIsSymbol => {
  const lift1 = Run.lift()(dictIsSymbol)(functorWriter);
  return () => sym => w => lift1(sym)($Writer(w, undefined));
};
const foldWriterAt = dictIsSymbol => () => sym => {
  const loop = loop$a0$copy => loop$a1$copy => loop$a2$copy => {
    let loop$a0 = loop$a0$copy, loop$a1 = loop$a1$copy, loop$a2 = loop$a2$copy, loop$c = true, loop$r;
    while (loop$c) {
      const k = loop$a0, w = loop$a1, r = loop$a2;
      const v = Run.resume(Data$dEither.Left)(Data$dEither.Right)(r);
      if (v.tag === "Left") {
        if (v._1.type === dictIsSymbol.reflectSymbol(sym)) {
          loop$a0 = k;
          loop$a1 = k(w)(v._1.value._1);
          loop$a2 = v._1.value._2;
          continue;
        }
        loop$c = false;
        loop$r = Control$dMonad$dFree.$Free(
          Control$dMonad$dFree.$FreeView("Bind", v._1, x => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x), Data$dCatList.CatNil)),
          Data$dCatList.snoc(Data$dCatList.CatNil)(foldWriterAt(dictIsSymbol)()(sym)(k)(w))
        );
        continue;
      }
      if (v.tag === "Right") {
        loop$c = false;
        loop$r = Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", Data$dTuple.$Tuple(w, v._1)), Data$dCatList.CatNil);
        continue;
      }
      $runtime.fail();
    }
    return loop$r;
  };
  return loop;
};
const runWriterAt = dictIsSymbol => dictMonoid => {
  const append = dictMonoid.Semigroup0().append;
  const mempty = dictMonoid.mempty;
  return () => sym => foldWriterAt(dictIsSymbol)()(sym)(append)(mempty);
};
const censorAt = dictIsSymbol => {
  const tellAt1 = tellAt(dictIsSymbol)();
  return () => sym => {
    const loop = f => r => {
      const v = Run.resume(Data$dEither.Left)(Data$dEither.Right)(r);
      if (v.tag === "Left") {
        if (v._1.type === dictIsSymbol.reflectSymbol(sym)) {
          const $0 = v._1.value._2;
          const $1 = tellAt1(sym)(f(v._1.value._1));
          return Control$dMonad$dFree.$Free($1._1, Data$dCatList.snoc($1._2)(() => loop(f)($0)));
        }
        return Control$dMonad$dFree.$Free(
          Control$dMonad$dFree.$FreeView("Bind", v._1, x => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x), Data$dCatList.CatNil)),
          Data$dCatList.snoc(Data$dCatList.CatNil)(loop(f))
        );
      }
      if (v.tag === "Right") { return Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", v._1), Data$dCatList.CatNil); }
      $runtime.fail();
    };
    return loop;
  };
};
const _writer = Type$dProxy.Proxy;
const censor = /* #__PURE__ */ censorAt(writerIsSymbol)()(Type$dProxy.Proxy);
const foldWriter = /* #__PURE__ */ foldWriterAt(writerIsSymbol)()(Type$dProxy.Proxy);
const liftWriter = /* #__PURE__ */ Run.lift()(writerIsSymbol)(functorWriter)(Type$dProxy.Proxy);
const runWriter = dictMonoid => runWriterAt(writerIsSymbol)(dictMonoid)()(Type$dProxy.Proxy);
const tell = /* #__PURE__ */ tellAt(writerIsSymbol)()(Type$dProxy.Proxy);
export {$Writer, Writer, _writer, censor, censorAt, foldWriter, foldWriterAt, functorWriter, liftWriter, liftWriterAt, runWriter, runWriterAt, tell, tellAt, writerIsSymbol};
