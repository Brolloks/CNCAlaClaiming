import * as Control$dMonad$dExcept$dTrans from "../Control.Monad.Except.Trans/index.js";
import * as Control$dMonad$dReader$dTrans from "../Control.Monad.Reader.Trans/index.js";
import * as Control$dMonad$dState$dTrans from "../Control.Monad.State.Trans/index.js";
import * as Data$dVariant from "../Data.Variant/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Isomers$dResponse$dDuplex$dParser from "../Isomers.Response.Duplex.Parser/index.js";
import * as Isomers$dResponse$dDuplex$dType from "../Isomers.Response.Duplex.Type/index.js";
import * as JS$dUnsafe$dStringify from "../JS.Unsafe.Stringify/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const monadStateT = /* #__PURE__ */ (() => {
  const $0 = Control$dMonad$dReader$dTrans.monadReaderT(Effect$dAff.monadAff);
  return {Applicative0: () => Control$dMonad$dState$dTrans.applicativeStateT($0), Bind1: () => Control$dMonad$dState$dTrans.bindStateT($0)};
})();
const bind = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.bindExceptT(monadStateT).bind)();
const ask = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.monadAskExceptT(Control$dMonad$dState$dTrans.monadAskStateT((() => {
  const monadReaderT1 = Control$dMonad$dReader$dTrans.monadReaderT(Effect$dAff.monadAff);
  return {ask: Effect$dAff._pure, Monad0: () => monadReaderT1};
})())).ask)();
const throwError = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.monadThrowExceptT(monadStateT).throwError)();
const injInto = dictIsSymbol => () => () => () => () => () => () => l => v => v1 => Isomers$dResponse$dDuplex$dType.$Duplex(
  r => {
    if (r.type === dictIsSymbol.reflectSymbol(l)) { return v._1(r.value); }
    return v1._1(r);
  },
  Isomers$dResponse$dDuplex$dParser.bind1(Isomers$dResponse$dDuplex$dParser.functorParser.map(value => ({type: dictIsSymbol.reflectSymbol(l), value}))(v._2))(v2 => {
    if (v2.tag === "Right") { return Isomers$dResponse$dDuplex$dParser.pure2(v2); }
    return Isomers$dResponse$dDuplex$dParser.functorParser.map(Unsafe$dCoerce.unsafeCoerce)(v1._2);
  })
);
const empty = /* #__PURE__ */ Isomers$dResponse$dDuplex$dType.$Duplex(
  Data$dVariant.case_,
  s => bind(ask)(state => throwError(Isomers$dResponse$dDuplex$dParser.$ParsingError(
    "Expected",
    "Isomers.Response.Duplex.Variant.empty",
    JS$dUnsafe$dStringify.unsafeStringify(state)
  )))(s)
);
export {ask, bind, empty, injInto, monadStateT, throwError};
