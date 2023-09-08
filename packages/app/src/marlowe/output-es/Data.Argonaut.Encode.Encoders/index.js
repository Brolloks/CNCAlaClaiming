import * as $runtime from "../runtime.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dList from "../Data.List/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dSet from "../Data.Set/index.js";
import * as Data$dString$dCodePoints from "../Data.String.CodePoints/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Data$dUnfoldable from "../Data.Unfoldable/index.js";
import * as Data$dVoid from "../Data.Void/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
const toUnfoldable = /* #__PURE__ */ Data$dList.toUnfoldable(Data$dUnfoldable.unfoldableArray);
const toUnfoldable2 = /* #__PURE__ */ Data$dSet.toUnfoldable(Data$dList$dTypes.unfoldableList);
const fromFoldable = /* #__PURE__ */ Foreign$dObject.fromFoldable(Data$dList$dTypes.foldableList);
const extend = encoder => v => {
  const $0 = Data$dArgonaut$dCore.caseJsonObject(Data$dArgonaut$dCore.jsonSingletonObject(v._1)(v._2))(x => Data$dArgonaut$dCore.fromObject((() => {
    const $0 = v._1;
    const $1 = v._2;
    return Foreign$dObject.mutate($2 => () => {
      $2[$0] = $1;
      return $2;
    })(x);
  })()));
  return x => $0(encoder(x));
};
const extendOptional = encoder => v => {
  if (v.tag === "Just") { return extend(encoder)(v._1); }
  if (v.tag === "Nothing") { return encoder; }
  $runtime.fail();
};
const encodeVoid = Data$dVoid.absurd;
const encodeUnit = v => Data$dArgonaut$dCore.jsonNull;
const encodeTuple = encoderA => encoderB => v => Data$dArgonaut$dCore.fromArray([encoderA(v._1), encoderB(v._2)]);
const encodeString = Data$dArgonaut$dCore.fromString;
const encodeNumber = Data$dArgonaut$dCore.fromNumber;
const encodeNonEmptyString = x => Data$dArgonaut$dCore.fromString(x);
const encodeMaybe = encoder => v => {
  if (v.tag === "Nothing") { return Data$dArgonaut$dCore.jsonNull; }
  if (v.tag === "Just") { return encoder(v._1); }
  $runtime.fail();
};
const encodeList = encoder => {
  const $0 = Data$dFunctor.arrayMap(encoder);
  return x => Data$dArgonaut$dCore.fromArray($0(toUnfoldable(x)));
};
const encodeMap = dictOrd => encoderA => encoderB => {
  const $0 = encodeList(encodeTuple(encoderA)(encoderB));
  return x => $0(Data$dMap$dInternal.toUnfoldable(Data$dList$dTypes.unfoldableList)(x));
};
const encodeNonEmptyList = encoder => {
  const $0 = encodeList(encoder);
  return x => $0(Data$dList$dTypes.$List("Cons", x._1, x._2));
};
const encodeNonEmpty_List = encoder => v => encodeList(encoder)(Data$dList$dTypes.$List("Cons", v._1, v._2));
const encodeSet = dictOrd => encoder => {
  const $0 = encodeList(encoder);
  return x => $0(toUnfoldable2(x));
};
const encodeInt = x => Data$dArgonaut$dCore.fromNumber(Data$dInt.toNumber(x));
const encodeIdentity = encoder => v => encoder(v);
const encodeForeignObject = encoder => x => Data$dArgonaut$dCore.fromObject(Foreign$dObject._fmapObject(x, encoder));
const encodeEither = encoderA => encoderB => v2 => {
  if (v2.tag === "Left") {
    return Data$dArgonaut$dCore.fromObject(fromFoldable(Data$dList$dTypes.$List(
      "Cons",
      Data$dTuple.$Tuple("tag", Data$dArgonaut$dCore.fromString("Left")),
      Data$dList$dTypes.$List("Cons", Data$dTuple.$Tuple("value", encoderA(v2._1)), Data$dList$dTypes.Nil)
    )));
  }
  if (v2.tag === "Right") {
    return Data$dArgonaut$dCore.fromObject(fromFoldable(Data$dList$dTypes.$List(
      "Cons",
      Data$dTuple.$Tuple("tag", Data$dArgonaut$dCore.fromString("Right")),
      Data$dList$dTypes.$List("Cons", Data$dTuple.$Tuple("value", encoderB(v2._1)), Data$dList$dTypes.Nil)
    )));
  }
  $runtime.fail();
};
const encodeCodePoint = x => Data$dArgonaut$dCore.fromString(Data$dString$dCodePoints.singleton(x));
const encodeChar = x => Data$dArgonaut$dCore.fromString(Data$dString$dCodeUnits.singleton(x));
const encodeBoolean = Data$dArgonaut$dCore.fromBoolean;
const encodeArray = encoder => {
  const $0 = Data$dFunctor.arrayMap(encoder);
  return x => Data$dArgonaut$dCore.fromArray($0(x));
};
const encodeNonEmptyArray = encoder => {
  const $0 = Data$dFunctor.arrayMap(encoder);
  return x => Data$dArgonaut$dCore.fromArray($0(x));
};
const encodeNonEmpty_Array = encoder => v => Data$dArgonaut$dCore.fromArray(Data$dFunctor.arrayMap(encoder)([v._1, ...v._2]));
const assocOptional = encoder => k => Data$dMaybe.functorMaybe.map((() => {
  const $0 = Data$dTuple.Tuple(k);
  return x => $0(encoder(x));
})());
const assoc = encoder => k => {
  const $0 = Data$dTuple.Tuple(k);
  return x => $0(encoder(x));
};
export {
  assoc,
  assocOptional,
  encodeArray,
  encodeBoolean,
  encodeChar,
  encodeCodePoint,
  encodeEither,
  encodeForeignObject,
  encodeIdentity,
  encodeInt,
  encodeList,
  encodeMap,
  encodeMaybe,
  encodeNonEmptyArray,
  encodeNonEmptyList,
  encodeNonEmptyString,
  encodeNonEmpty_Array,
  encodeNonEmpty_List,
  encodeNumber,
  encodeSet,
  encodeString,
  encodeTuple,
  encodeUnit,
  encodeVoid,
  extend,
  extendOptional,
  fromFoldable,
  toUnfoldable,
  toUnfoldable2
};
