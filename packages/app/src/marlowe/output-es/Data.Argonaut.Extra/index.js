import * as $runtime from "../runtime.js";
import * as Control$dMonad$dRWS$dTrans from "../Control.Monad.RWS.Trans/index.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dArgonaut$dDecode$dDecoders from "../Data.Argonaut.Decode.Decoders/index.js";
import * as Data$dArgonaut$dDecode$dError from "../Data.Argonaut.Decode.Error/index.js";
import * as Data$dArgonaut$dDecode$dParser from "../Data.Argonaut.Decode.Parser/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dSet from "../Data.Set/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
const fromFoldable = /* #__PURE__ */ (() => Data$dArray.fromFoldableImpl(Data$dSet.foldableSet.foldr))();
const requireProp = dictDecodeJson => key => a => Data$dArgonaut$dDecode$dDecoders.getField(dictDecodeJson.decodeJson)(a)(key);
const parseDecodeJson = dictDecodeJson => a => {
  const $0 = Data$dArgonaut$dDecode$dParser.parseJson(a);
  if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
  if ($0.tag === "Right") { return dictDecodeJson.decodeJson($0._1); }
  $runtime.fail();
};
const object = name => decoder => json => {
  const $0 = Data$dArgonaut$dDecode$dError.Named(name);
  const $1 = Data$dArgonaut$dDecode$dDecoders.decodeJObject(json);
  const $2 = (() => {
    if ($1.tag === "Left") {
      const $2 = $1._1;
      return v => Data$dEither.$Either("Left", $2);
    }
    if ($1.tag === "Right") {
      const $2 = $1._1;
      return f => f($2);
    }
    $runtime.fail();
  })()(obj => {
    const $2 = decoder(obj);
    return (() => {
      if ($2.tag === "Left") {
        const $3 = $2._1;
        return v => Data$dEither.$Either("Left", $3);
      }
      if ($2.tag === "Right") {
        const $3 = $2._1;
        return f => f($3);
      }
      $runtime.fail();
    })()(result => {
      if (result.tag === "Nothing") { return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("UnexpectedValue", json)); }
      if (result.tag === "Just") { return Data$dEither.$Either("Right", result._1); }
      $runtime.fail();
    });
  });
  if ($2.tag === "Left") { return Data$dEither.$Either("Left", $0($2._1)); }
  if ($2.tag === "Right") { return Data$dEither.$Either("Right", $2._1); }
  $runtime.fail();
};
const next = dictDecodeJson => arr => ix => {
  const $0 = Control$dMonad$dRWS$dTrans.RWSResult(ix + 1 | 0);
  const $1 = Data$dArray.index(arr)(ix);
  const $2 = (() => {
    if ($1.tag === "Nothing") { return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("AtIndex", ix, Data$dArgonaut$dDecode$dError.MissingValue)); }
    if ($1.tag === "Just") { return dictDecodeJson.decodeJson($1._1); }
    $runtime.fail();
  })();
  if ($2.tag === "Left") { return Data$dEither.$Either("Left", $2._1); }
  if ($2.tag === "Right") { return Data$dEither.$Either("Right", $0($2._1)()); }
  $runtime.fail();
};
const getProp = dictDecodeJson => key => a => Data$dArgonaut$dDecode$dDecoders.getFieldOptional(dictDecodeJson.decodeJson)(a)(key);
const encodeStringifyJson = dictEncodeJson => x => Data$dArgonaut$dCore.stringify(dictEncodeJson.encodeJson(x));
const caseConstantFrom = dictOrd => dictShow => {
  const show = dictShow.show;
  return dictDecodeJson => values => onFail => json => {
    const v = dictDecodeJson.decodeJson(json);
    if (v.tag === "Left") { return onFail(json); }
    if (v.tag === "Right") {
      const $0 = Data$dMap$dInternal.lookup(dictOrd)(v._1)(values);
      if ($0.tag === "Nothing") {
        return Data$dEither.$Either(
          "Left",
          Data$dArgonaut$dDecode$dError.$JsonDecodeError(
            "TypeMismatch",
            Data$dString$dCommon.joinWith(" | ")(Data$dFunctor.arrayMap(show)(fromFoldable(Data$dMap$dInternal.functorMap.map(v$1 => {})(values))))
          )
        );
      }
      if ($0.tag === "Just") { return Data$dEither.$Either("Right", $0._1); }
    }
    $runtime.fail();
  };
};
const array = name => decoder => json => {
  const $0 = Data$dArgonaut$dDecode$dError.Named(name);
  const $1 = Data$dArgonaut$dDecode$dDecoders.decodeJArray(json);
  const $2 = (() => {
    if ($1.tag === "Left") {
      const $2 = $1._1;
      return v => Data$dEither.$Either("Left", $2);
    }
    if ($1.tag === "Right") {
      const $2 = $1._1;
      return f => f($2);
    }
    $runtime.fail();
  })()(arr => {
    const $2 = decoder(arr)(0);
    const $3 = (() => {
      if ($2.tag === "Left") {
        const $3 = $2._1;
        return v => Data$dEither.$Either("Left", $3);
      }
      if ($2.tag === "Right") {
        const $3 = $2._1;
        return f => f($3);
      }
      $runtime.fail();
    })()(v1 => Data$dEither.$Either("Right", Data$dTuple.$Tuple(v1._2, v1._3)));
    if ($3.tag === "Left") { return Data$dEither.$Either("Left", $3._1); }
    if ($3.tag === "Right") { return Data$dEither.$Either("Right", $3._1._1); }
    $runtime.fail();
  });
  if ($2.tag === "Left") { return Data$dEither.$Either("Left", $0($2._1)); }
  if ($2.tag === "Right") { return Data$dEither.$Either("Right", $2._1); }
  $runtime.fail();
};
export {array, caseConstantFrom, encodeStringifyJson, fromFoldable, getProp, next, object, parseDecodeJson, requireProp};
