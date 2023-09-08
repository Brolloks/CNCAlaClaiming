import * as $runtime from "../runtime.js";
import * as Data$dArgonaut$dDecode$dDecoders from "../Data.Argonaut.Decode.Decoders/index.js";
import * as Data$dArgonaut$dDecode$dError from "../Data.Argonaut.Decode.Error/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const decodeJson = /* #__PURE__ */ Data$dArgonaut$dDecode$dDecoders.decodeForeignObject(Data$dEither.Right);
const DecodeStep = x => x;
const foldingWithIndexDecodeSte = dictIsSymbol => () => () => () => (
  {
    foldingWithIndex: v => l => acc => v1 => obj => {
      const $0 = acc(obj);
      return (() => {
        if ($0.tag === "Left") {
          const $1 = $0._1;
          return v$1 => Data$dEither.$Either("Left", $1);
        }
        if ($0.tag === "Right") {
          const $1 = $0._1;
          return f => f($1);
        }
        $runtime.fail();
      })()(r => {
        const key = dictIsSymbol.reflectSymbol(l);
        const v2 = Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(l))(v)(Foreign$dObject._lookup(Data$dMaybe.Nothing, Data$dMaybe.Just, key, obj));
        if (v2.tag === "Just") {
          const $1 = Data$dArgonaut$dDecode$dError.AtKey(key);
          if (v2._1.tag === "Left") { return Data$dEither.$Either("Left", $1(v2._1._1)); }
          if (v2._1.tag === "Right") { return Data$dEither.$Either("Right", Record$dUnsafe.unsafeSet(dictIsSymbol.reflectSymbol(l))(v2._1._1)(r)); }
          $runtime.fail();
        }
        if (v2.tag === "Nothing") { return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("AtKey", key, Data$dArgonaut$dDecode$dError.MissingValue)); }
        $runtime.fail();
      });
    }
  }
);
const foldingWithIndexDecodeSte1 = {foldingWithIndex: v => v1 => acc => v2 => acc};
const foldingWithIndexDecodeSte2 = dictIsSymbol => () => () => dictDecodeJsonField => (
  {
    foldingWithIndex: v => l => acc => v1 => obj => {
      const $0 = acc(obj);
      return (() => {
        if ($0.tag === "Left") {
          const $1 = $0._1;
          return v$1 => Data$dEither.$Either("Left", $1);
        }
        if ($0.tag === "Right") {
          const $1 = $0._1;
          return f => f($1);
        }
        $runtime.fail();
      })()(r => {
        const key = dictIsSymbol.reflectSymbol(l);
        const v2 = dictDecodeJsonField.decodeJsonField(Foreign$dObject._lookup(Data$dMaybe.Nothing, Data$dMaybe.Just, key, obj));
        if (v2.tag === "Just") {
          const $1 = Data$dArgonaut$dDecode$dError.AtKey(key);
          if (v2._1.tag === "Left") { return Data$dEither.$Either("Left", $1(v2._1._1)); }
          if (v2._1.tag === "Right") { return Data$dEither.$Either("Right", Record$dUnsafe.unsafeSet(dictIsSymbol.reflectSymbol(l))(v2._1._1)(r)); }
          $runtime.fail();
        }
        if (v2.tag === "Nothing") { return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("AtKey", key, Data$dArgonaut$dDecode$dError.MissingValue)); }
        $runtime.fail();
      });
    }
  }
);
const decodeRecord1 = () => () => dictHFoldlWithIndex => (
  {
    decodeRecord: decoders => {
      const decodeObject = dictHFoldlWithIndex.hfoldlWithIndex(decoders)(v => Data$dEither.$Either("Right", {}))(Type$dProxy.Proxy);
      return json => {
        const $0 = decodeJson(json);
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
        })()(obj => decodeObject(obj));
      };
    }
  }
);
const decodeRecord = dict => dict.decodeRecord;
const decodeNewtypedRecord1 = () => () => () => dictHFoldlWithIndex => (
  {
    decodeNewtypedRecord: decoders => {
      const $0 = decodeRecord1()()(dictHFoldlWithIndex).decodeRecord(decoders);
      return x => {
        const $1 = $0(x);
        if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
        if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1); }
        $runtime.fail();
      };
    }
  }
);
const decodeNewtypedRecord = dict => dict.decodeNewtypedRecord;
export {
  DecodeStep,
  decodeJson,
  decodeNewtypedRecord,
  decodeNewtypedRecord1,
  decodeRecord,
  decodeRecord1,
  foldingWithIndexDecodeSte,
  foldingWithIndexDecodeSte1,
  foldingWithIndexDecodeSte2
};
