import * as $runtime from "../runtime.js";
import * as Control$dMonad$dFree from "../Control.Monad.Free/index.js";
import * as Data$dCatList from "../Data.CatList/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Run from "../Run/index.js";
import * as Run$dInternal from "../Run.Internal/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const chooseIsSymbol = {reflectSymbol: () => "choose"};
const runChoose = dictAlternative => {
  const Plus1 = dictAlternative.Plus1();
  const empty = Plus1.empty;
  const loop = r => {
    const v = Run.resume(Data$dEither.Left)(Data$dEither.Right)(r);
    if (v.tag === "Left") {
      if (v._1.type === "choose") {
        if (v._1.value.tag === "Empty") { return Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", empty), Data$dCatList.CatNil); }
        if (v._1.value.tag === "Alt") {
          const $0 = loop(v._1.value._1(true));
          return Control$dMonad$dFree.$Free(
            $0._1,
            Data$dCatList.snoc($0._2)(x => {
              const $1 = loop(v._1.value._1(false));
              return Control$dMonad$dFree.$Free(
                $1._1,
                Data$dCatList.snoc($1._2)(y => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", Plus1.Alt0().alt(x)(y)), Data$dCatList.CatNil))
              );
            })
          );
        }
        $runtime.fail();
      }
      return Control$dMonad$dFree.$Free(
        Control$dMonad$dFree.$FreeView("Bind", v._1, x => Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", x), Data$dCatList.CatNil)),
        Data$dCatList.snoc(Data$dCatList.CatNil)(loop)
      );
    }
    if (v.tag === "Right") { return Control$dMonad$dFree.$Free(Control$dMonad$dFree.$FreeView("Return", dictAlternative.Applicative0().pure(v._1)), Data$dCatList.CatNil); }
    $runtime.fail();
  };
  return loop;
};
const liftChoose = /* #__PURE__ */ Run.lift()(chooseIsSymbol)(Run$dInternal.functorChoose)(Type$dProxy.Proxy);
const cempty = /* #__PURE__ */ Run.liftChoose(Run$dInternal.Empty);
const calt = /* #__PURE__ */ (() => Run.runAlt(Type$dEquality.refl).alt)();
export {calt, cempty, chooseIsSymbol, liftChoose, runChoose};
