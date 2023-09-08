import * as $runtime from "../runtime.js";
import * as Control$dMonad$dExcept$dTrans from "../Control.Monad.Except.Trans/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dNonEmpty from "../Data.NonEmpty/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Foreign from "../Foreign/index.js";
import * as Partial from "../Partial/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const bindExceptT = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.bindExceptT(Data$dIdentity.monadIdentity);
const applicativeExceptT = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.applicativeExceptT(Data$dIdentity.monadIdentity);
const alt = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.altExceptT(Data$dList$dTypes.semigroupNonEmptyList)(Data$dIdentity.monadIdentity).alt)();
const genericEncodeEnumConstruc = () => ({encodeEnum: v => v1 => Partial._crashWith("unreachable encodeEnum was reached.")});
const genericEncodeEnumConstruc1 = () => ({encodeEnum: v => v1 => Partial._crashWith("unreachable encodeEnum was reached.")});
const genericEncodeEnumConstruc2 = dictIsSymbol => ({encodeEnum: v => v1 => v.constructorTagTransform(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))});
const genericDecodeEnumConstruc = () => ({decodeEnum: v => v1 => Partial._crashWith("unreachable decodeEnum was reached.")});
const genericDecodeEnumConstruc1 = () => ({decodeEnum: v => v1 => Partial._crashWith("unreachable decodeEnum was reached.")});
const genericDecodeEnumConstruc2 = dictIsSymbol => (
  {
    decodeEnum: v => f => {
      const ctorName = v.constructorTagTransform(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy));
      return bindExceptT.bind(Foreign.unsafeReadTagged(Data$dIdentity.monadIdentity)("String")(f))(tag => bindExceptT.bind((() => {
        const $0 = tag === ctorName;
        const $1 = Control$dMonad$dExcept$dTrans.monadThrowExceptT(Data$dIdentity.monadIdentity).throwError(Data$dNonEmpty.$NonEmpty(
          Foreign.$ForeignError("ForeignError", "Expected " + Data$dShow.showStringImpl(ctorName) + " tag for unary constructor literal " + ctorName),
          Data$dList$dTypes.Nil
        ));
        if (!$0) { return $1; }
        if ($0) { return applicativeExceptT.pure(); }
        $runtime.fail();
      })())(() => applicativeExceptT.pure(Data$dGeneric$dRep.NoArguments)));
    }
  }
);
const encodeEnum = dict => dict.encodeEnum;
const genericEncodeEnum = dictGeneric => dictGenericEncodeEnum => opts => {
  const $0 = dictGenericEncodeEnum.encodeEnum(opts);
  return x => $0(dictGeneric.from(x));
};
const genericEncodeEnumSum = dictGenericEncodeEnum => dictGenericEncodeEnum1 => (
  {
    encodeEnum: v => v1 => {
      if (v1.tag === "Inl") { return dictGenericEncodeEnum.encodeEnum(v)(v1._1); }
      if (v1.tag === "Inr") { return dictGenericEncodeEnum1.encodeEnum(v)(v1._1); }
      $runtime.fail();
    }
  }
);
const defaultGenericEnumOptions = {constructorTagTransform: x => x};
const decodeEnum = dict => dict.decodeEnum;
const genericDecodeEnum = dictGeneric => dictGenericDecodeEnum => opts => {
  const $0 = dictGenericDecodeEnum.decodeEnum(opts);
  return x => {
    const $1 = $0(x);
    if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
    if ($1.tag === "Right") { return Data$dEither.$Either("Right", dictGeneric.to($1._1)); }
    $runtime.fail();
  };
};
const genericDecodeEnumSum = dictGenericDecodeEnum => dictGenericDecodeEnum1 => (
  {
    decodeEnum: opts => f => alt((() => {
      const $0 = dictGenericDecodeEnum.decodeEnum(opts)(f);
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") { return Data$dEither.$Either("Right", Data$dGeneric$dRep.$Sum("Inl", $0._1)); }
      $runtime.fail();
    })())((() => {
      const $0 = dictGenericDecodeEnum1.decodeEnum(opts)(f);
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") { return Data$dEither.$Either("Right", Data$dGeneric$dRep.$Sum("Inr", $0._1)); }
      $runtime.fail();
    })())
  }
);
export {
  alt,
  applicativeExceptT,
  bindExceptT,
  decodeEnum,
  defaultGenericEnumOptions,
  encodeEnum,
  genericDecodeEnum,
  genericDecodeEnumConstruc,
  genericDecodeEnumConstruc1,
  genericDecodeEnumConstruc2,
  genericDecodeEnumSum,
  genericEncodeEnum,
  genericEncodeEnumConstruc,
  genericEncodeEnumConstruc1,
  genericEncodeEnumConstruc2,
  genericEncodeEnumSum
};
