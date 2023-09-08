import * as $runtime from "../runtime.js";
import * as Contrib$dString from "../Contrib.String/index.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dArgonaut$dDecode$dError from "../Data.Argonaut.Decode.Error/index.js";
import * as Data$dArrayBuffer$dTyped from "../Data.ArrayBuffer.Typed/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dString$dCodePoints from "../Data.String.CodePoints/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dUInt from "../Data.UInt/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as HexString from "../HexString/index.js";
import * as Promise$dAff from "../Promise.Aff/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
import * as Web$dEncoding$dTextEncoder from "../Web.Encoding.TextEncoder/index.js";
import {digestImpl} from "./foreign.js";
const Sha2Hex = x => x;
const Sha2ArrayBuffer = x => x;
const showSha2Hex = Data$dShow.showString;
const reflectSha2LengthSha512 = {reflectSha2Length: v => 128};
const reflectSha2LengthSha384 = {reflectSha2Length: v => 96};
const reflectSha2LengthSha256 = {reflectSha2Length: v => 64};
const eqSha2Hex = {eq: x => y => x === y};
const ordSha2Hex = {compare: x => y => Data$dOrd.ordString.compare(x)(y), Eq0: () => eqSha2Hex};
const encodeJsonSha2Hex = {encodeJson: v => Data$dArgonaut$dCore.fromString(v)};
const sha512 = "SHA-512";
const sha384 = "SHA-384";
const sha256 = "SHA-256";
const reflectSha2Length = dict => dict.reflectSha2Length;
const sha2Hex = dictReflectSha2Length => hex => {
  if (Data$dString$dCodePoints.toCodePointArray(hex).length === dictReflectSha2Length.reflectSha2Length(Type$dProxy.Proxy)) { return Data$dMaybe.$Maybe("Just", hex); }
  return Data$dMaybe.Nothing;
};
const decodeJsonSha2Hex = dictReflectSha2Length => (
  {
    decodeJson: json => {
      const $0 = Data$dArgonaut$dCore._caseJson(
        v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
        v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
        v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
        Data$dEither.Right,
        v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
        v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
        json
      );
      return (() => {
        if ($0.tag === "Left") {
          const $1 = $0._1;
          return v => Data$dEither.$Either("Left", $1);
        }
        if ($0.tag === "Right") {
          const $1 = $0._1;
          return f => f($1);
        }
        $runtime.fail();
      })()(s => {
        if (Data$dString$dCodePoints.toCodePointArray(s).length === dictReflectSha2Length.reflectSha2Length(Type$dProxy.Proxy)) { return Data$dEither.$Either("Right", s); }
        return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Invalid sha256 hex: " + s));
      });
    }
  }
);
const digest = alg => d => Effect$dAff._bind(Effect$dAff._liftEffect(() => digestImpl(alg, d)))(pp => {
  const v = Data$dNullable.nullable(pp, Data$dMaybe.Nothing, Data$dMaybe.Just);
  if (v.tag === "Nothing") { return Effect$dAff._pure(Data$dMaybe.Nothing); }
  if (v.tag === "Just") { return Effect$dAff._bind(Promise$dAff.toAff$p(Promise$dAff.coerce)(v._1))(res => Effect$dAff._pure(Data$dMaybe.$Maybe("Just", res))); }
  $runtime.fail();
});
const dataFromDataView = Unsafe$dCoerce.unsafeCoerce;
const dataFromArrayView = Unsafe$dCoerce.unsafeCoerce;
const digestString = alg => inStr => Effect$dAff._bind(Effect$dAff._liftEffect(() => {
  const textEncoder = Web$dEncoding$dTextEncoder.new();
  return Web$dEncoding$dTextEncoder.encode(inStr)(textEncoder);
}))(uintArray => Effect$dAff._bind(digest(alg)(uintArray))(possibleBuf => Effect$dAff._map(m => {
  if (m.tag === "Just") { return m._1; }
  if (m.tag === "Nothing") { return Data$dMaybe.Nothing; }
  $runtime.fail();
})(Data$dTraversable.traversableMaybe.traverse(Effect$dAff.applicativeAff)(v => Effect$dAff._liftEffect(() => {
  const v1 = Data$dArrayBuffer$dTyped.newUint8Array(v, Data$dNullable.null, Data$dNullable.null);
  const arr = Data$dArrayBuffer$dTyped.toArrayImpl(v1);
  const $0 = HexString.hex(Data$dString$dCommon.joinWith("")(Data$dFunctor.arrayMap(n => Contrib$dString.padStartWith(2)("0")(Data$dInt.toStringAs(16)(Data$dUInt.toInt(n))))(arr)));
  return $0.tag === "Just" ? Data$dMaybe.$Maybe("Just", $0._1) : Data$dMaybe.Nothing;
}))(possibleBuf))));
const dataFromArrayBuffer = Unsafe$dCoerce.unsafeCoerce;
export {
  Sha2ArrayBuffer,
  Sha2Hex,
  dataFromArrayBuffer,
  dataFromArrayView,
  dataFromDataView,
  decodeJsonSha2Hex,
  digest,
  digestString,
  encodeJsonSha2Hex,
  eqSha2Hex,
  ordSha2Hex,
  reflectSha2Length,
  reflectSha2LengthSha256,
  reflectSha2LengthSha384,
  reflectSha2LengthSha512,
  sha256,
  sha2Hex,
  sha384,
  sha512,
  showSha2Hex
};
export * from "./foreign.js";
