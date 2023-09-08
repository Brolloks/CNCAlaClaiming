import * as $runtime from "../runtime.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dArgonaut$dAeson from "../Data.Argonaut.Aeson/index.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dArgonaut$dEncode$dClass from "../Data.Argonaut.Encode.Class/index.js";
import * as Data$dArgonaut$dEncode$dEncoders from "../Data.Argonaut.Encode.Encoders/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dBitraversable from "../Data.Bitraversable/index.js";
import * as Data$dDivide from "../Data.Divide/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dSemigroup from "../Data.Semigroup/index.js";
import * as Data$dSemigroup$dLast from "../Data.Semigroup.Last/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Data$dUnfoldable from "../Data.Unfoldable/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const divided = /* #__PURE__ */ (() => Data$dDivide.divideOp(Data$dSemigroup.semigroupArray).divide(Data$dDivide.identity))();
const divided1 = /* #__PURE__ */ (() => Data$dDivide.divideOp({append: Foreign$dObject.unionWith(Data$dSemigroup$dLast.semigroupLast.append)}).divide(Data$dDivide.identity))();
const traverse = /* #__PURE__ */ (() => Data$dTraversable.traversableArray.traverse(Data$dMaybe.applicativeMaybe))();
const ltraverse = /* #__PURE__ */ (() => {
  const bitraverse2 = Data$dBitraversable.bitraversableTuple.bitraverse(Data$dMaybe.applicativeMaybe);
  return f => bitraverse2(f)(Data$dMaybe.Just);
})();
const encodeJson = /* #__PURE__ */ (() => Data$dArgonaut$dEncode$dClass.encodeJsonArray({
  encodeJson: Data$dArgonaut$dEncode$dEncoders.encodeTuple(Data$dArgonaut$dEncode$dClass.encodeJsonJson.encodeJson)(Data$dArgonaut$dEncode$dClass.encodeJsonJson.encodeJson)
}).encodeJson)();
const fromFoldable = /* #__PURE__ */ Foreign$dObject.fromFoldable(Data$dFoldable.foldableArray);
const value = dictEncodeJson => dictEncodeJson.encodeJson;
const unit = v => Data$dArgonaut$dCore.jsonEmptyArray;
const tuple = /* #__PURE__ */ (() => Control$dSemigroupoid.semigroupoidFn.compose(Data$dArgonaut$dCore.fromArray))();
const toTupleEncoderTupleEncoder = {toTupleEncoder: x => x};
const toTupleEncoder = dict => dict.toTupleEncoder;
const rowListEncoderNil = {rowListEncoder: v => v1 => v$1 => Foreign$dObject.empty};
const rowListEncoder = dict => dict.rowListEncoder;
const $$null = v => Data$dArgonaut$dCore.jsonNull;
const mapEncoder = x => Control$dSemigroupoid.semigroupoidFn.compose(x);
const record = () => dictRowListEncoder => encoders => mapEncoder(x => Data$dArgonaut$dCore.fromObject(Foreign$dObject._fmapObject(x, Unsafe$dCoerce.unsafeCoerce)))(dictRowListEncoder.rowListEncoder(Type$dProxy.Proxy)(encoders));
const toTupleEncoderEncoder = {toTupleEncoder: /* #__PURE__ */ mapEncoder(Data$dArray.singleton)};
const tupleDivided = dictToTupleEncoder => encoder => {
  const $0 = divided(mapEncoder(Data$dArray.singleton)(encoder));
  return x => $0(dictToTupleEncoder.toTupleEncoder(x));
};
const $$enum = dictShow => x => Data$dArgonaut$dCore.fromString(dictShow.show(x));
const encode = Unsafe$dCoerce.unsafeCoerce;
const encodeTagged = tag => a => encoder => Data$dArgonaut$dEncode$dEncoders.extend(Data$dArgonaut$dEncode$dClass.encodeJsonJson.encodeJson)(Data$dTuple.$Tuple(
  "tag",
  Data$dArgonaut$dCore.fromString(tag)
))(Data$dArgonaut$dEncode$dEncoders.extend(Data$dArgonaut$dEncode$dClass.encodeJsonJson.encodeJson)(Data$dTuple.$Tuple("contents", encoder(a)))(Data$dArgonaut$dCore.jsonEmptyObject));
const maybe = encoder => v => {
  if (v.tag === "Just") { return encoder(v._1); }
  if (v.tag === "Nothing") { return Data$dArgonaut$dCore.jsonNull; }
  $runtime.fail();
};
const propEncoder = dictIsSymbol => p => encoder => {
  const $0 = Foreign$dObject.singleton(dictIsSymbol.reflectSymbol(p));
  return x => $0(encoder(x));
};
const rowListEncoderEncoderCons = dictIsSymbol => () => () => () => () => dictRowListEncoder => (
  {
    rowListEncoder: v => encoders => {
      const v1 = Data$dArgonaut$dAeson.unconsRecord(dictIsSymbol)()()(Type$dProxy.Proxy)(encoders);
      const $0 = divided1(propEncoder(dictIsSymbol)(Type$dProxy.Proxy)(v1._1))(dictRowListEncoder.rowListEncoder(Type$dProxy.Proxy)(v1._2));
      return x => $0(Data$dArgonaut$dAeson.unconsRecord(dictIsSymbol)()()(Type$dProxy.Proxy)(x));
    }
  }
);
const either = encoderA => encoderB => v => {
  if (v.tag === "Left") {
    return Data$dArgonaut$dEncode$dEncoders.extend(Data$dArgonaut$dEncode$dClass.encodeJsonJson.encodeJson)(Data$dTuple.$Tuple("Left", encoderA(v._1)))(Data$dArgonaut$dCore.jsonEmptyObject);
  }
  if (v.tag === "Right") {
    return Data$dArgonaut$dEncode$dEncoders.extend(Data$dArgonaut$dEncode$dClass.encodeJsonJson.encodeJson)(Data$dTuple.$Tuple("Right", encoderB(v._1)))(Data$dArgonaut$dCore.jsonEmptyObject);
  }
  $runtime.fail();
};
const dictionary = encoderA => encoderB => {
  const $0 = Data$dFunctor.arrayMap(v => Data$dTuple.$Tuple(encoderA(v._1), encoderB(v._2)));
  return x => {
    const $1 = $0(Data$dMap$dInternal.toUnfoldable(Data$dUnfoldable.unfoldableArray)(x));
    const v = traverse(ltraverse(Data$dArgonaut$dCore.caseJson(v => Data$dMaybe.Nothing)(v => Data$dMaybe.Nothing)(v => Data$dMaybe.Nothing)(Data$dMaybe.Just)(v => Data$dMaybe.Nothing)(v => Data$dMaybe.Nothing)))($1);
    if (v.tag === "Nothing") { return encodeJson($1); }
    if (v.tag === "Just") { return Data$dArgonaut$dCore.fromObject(fromFoldable(v._1)); }
    $runtime.fail();
  };
};
export {
  dictionary,
  divided,
  divided1,
  either,
  encode,
  encodeJson,
  encodeTagged,
  $$enum as enum,
  fromFoldable,
  ltraverse,
  mapEncoder,
  maybe,
  $$null as null,
  propEncoder,
  record,
  rowListEncoder,
  rowListEncoderEncoderCons,
  rowListEncoderNil,
  toTupleEncoder,
  toTupleEncoderEncoder,
  toTupleEncoderTupleEncoder,
  traverse,
  tuple,
  tupleDivided,
  unit,
  value
};
