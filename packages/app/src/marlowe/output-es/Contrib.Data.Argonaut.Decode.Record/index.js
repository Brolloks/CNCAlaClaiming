import * as $runtime from "../runtime.js";
import * as Data$dArgonaut$dDecode$dDecoders from "../Data.Argonaut.Decode.Decoders/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Record from "../Record/index.js";
const getFieldOptional$p = dictDecodeJson => dictIsSymbol => () => () => obj => l => {
  const $0 = Data$dArgonaut$dDecode$dDecoders.getFieldOptional$p(dictDecodeJson.decodeJson)(obj)(dictIsSymbol.reflectSymbol(l));
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
  })()(v => Data$dEither.$Either("Right", Data$dTuple.$Tuple(Record.insert(dictIsSymbol)()()(l)(v), undefined)));
};
const getFieldOptional = dictDecodeJson => dictIsSymbol => () => () => obj => l => {
  const $0 = Data$dArgonaut$dDecode$dDecoders.getFieldOptional(dictDecodeJson.decodeJson)(obj)(dictIsSymbol.reflectSymbol(l));
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
  })()(v => Data$dEither.$Either("Right", Data$dTuple.$Tuple(Record.insert(dictIsSymbol)()()(l)(v), undefined)));
};
const getField = dictDecodeJson => dictIsSymbol => () => () => obj => l => {
  const $0 = Data$dArgonaut$dDecode$dDecoders.getField(dictDecodeJson.decodeJson)(obj)(dictIsSymbol.reflectSymbol(l));
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
  })()(v => Data$dEither.$Either("Right", Data$dTuple.$Tuple(Record.insert(dictIsSymbol)()()(l)(v), undefined)));
};
export {getField, getFieldOptional, getFieldOptional$p};
