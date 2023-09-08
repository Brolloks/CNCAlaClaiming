import * as $runtime from "../runtime.js";
import * as Contrib$dRecord$dBuilderT from "../Contrib.Record.BuilderT/index.js";
import * as Control$dMonad$dReader$dTrans from "../Control.Monad.Reader.Trans/index.js";
import * as Data$dArgonaut$dDecode$dDecoders from "../Data.Argonaut.Decode.Decoders/index.js";
import * as Data$dArgonaut$dDecode$dError from "../Data.Argonaut.Decode.Error/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
import * as Record from "../Record/index.js";
const bind = /* #__PURE__ */ (() => Control$dMonad$dReader$dTrans.bindReaderT(Data$dEither.bindEither).bind)();
const applicativeReaderT = /* #__PURE__ */ (() => {
  const functorReaderT1 = {
    map: x => v => x$1 => {
      const $0 = v(x$1);
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") { return Data$dEither.$Either("Right", x($0._1)); }
      $runtime.fail();
    }
  };
  const applyReaderT1 = {
    apply: v => v1 => r => {
      const $0 = v(r);
      const $1 = v1(r);
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") {
        if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
        if ($1.tag === "Right") { return Data$dEither.$Either("Right", $0._1($1._1)); }
      }
      $runtime.fail();
    },
    Functor0: () => functorReaderT1
  };
  return {pure: x => v => Data$dEither.$Either("Right", x), Apply0: () => applyReaderT1};
})();
const identity = x => x;
const decodeJson = /* #__PURE__ */ Data$dArgonaut$dDecode$dDecoders.decodeForeignObject(Data$dEither.Right);
const execBuilderT = v => i => applicativeReaderT.Apply0().Functor0().map(x => x._1(i))(v);
const bind2 = /* #__PURE__ */ (() => Contrib$dRecord$dBuilderT.ixMonadBuilderT(Control$dMonad$dReader$dTrans.monadReaderT(Data$dEither.monadEither)).IxBind1().ibind)();
const liftEither = v => bind(v$1 => v)(v$p => applicativeReaderT.pure(Data$dTuple.$Tuple(identity, v$p)));
const insertProp = dictIsSymbol => () => () => l => a => applicativeReaderT.pure(Data$dTuple.$Tuple(Record.insert(dictIsSymbol)()()(l)(a), undefined));
const execRecordBuilderM = json => builder => {
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
  })()(obj => execBuilderT(builder)({})(obj));
};
const decodeFieldOptionalDefault = dictIsSymbol => () => () => l => decode => $$default => bind(Data$dEither.Right)(obj => {
  const l$p = dictIsSymbol.reflectSymbol(l);
  return bind((() => {
    const $0 = Data$dArgonaut$dDecode$dDecoders.getFieldOptional(Data$dEither.Right)(obj)(l$p);
    return v => $0;
  })())(json => bind((() => {
    const $0 = Data$dArgonaut$dDecode$dError.AtKey(l$p);
    const $1 = (() => {
      if (json.tag === "Nothing") { return Data$dEither.$Either("Right", $$default); }
      if (json.tag === "Just") { return decode(json._1); }
      $runtime.fail();
    })();
    const $2 = (() => {
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", $0($1._1)); }
      if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1); }
      $runtime.fail();
    })();
    return v => $2;
  })())(v => applicativeReaderT.pure(Data$dTuple.$Tuple(Record.insert(dictIsSymbol)()()(l)(Data$dMaybe.$Maybe("Just", v)), undefined))));
});
const decodeFieldOptional = dictIsSymbol => () => () => l => decode => bind(Data$dEither.Right)(obj => {
  const l$p = dictIsSymbol.reflectSymbol(l);
  return bind((() => {
    const $0 = Data$dArgonaut$dDecode$dDecoders.getFieldOptional$p(Data$dEither.Right)(obj)(l$p);
    return v => $0;
  })())(json => bind((() => {
    const $0 = Data$dArgonaut$dDecode$dError.AtKey(l$p);
    const $1 = Data$dTraversable.traversableMaybe.traverse(Data$dEither.applicativeEither)(decode)(json);
    const $2 = (() => {
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", $0($1._1)); }
      if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1); }
      $runtime.fail();
    })();
    return v => $2;
  })())(v => applicativeReaderT.pure(Data$dTuple.$Tuple(Record.insert(dictIsSymbol)()()(l)(v), undefined))));
});
const decodeFieldDefault = dictIsSymbol => () => () => l => decode => $$default => bind(Data$dEither.Right)(obj => {
  const l$p = dictIsSymbol.reflectSymbol(l);
  return bind((() => {
    const $0 = Data$dArgonaut$dDecode$dDecoders.getFieldOptional(Data$dEither.Right)(obj)(l$p);
    return v => $0;
  })())(json => bind((() => {
    const $0 = Data$dArgonaut$dDecode$dError.AtKey(l$p);
    const $1 = (() => {
      if (json.tag === "Nothing") { return Data$dEither.$Either("Right", $$default); }
      if (json.tag === "Just") { return decode(json._1); }
      $runtime.fail();
    })();
    const $2 = (() => {
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", $0($1._1)); }
      if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1); }
      $runtime.fail();
    })();
    return v => $2;
  })())(v => applicativeReaderT.pure(Data$dTuple.$Tuple(Record.insert(dictIsSymbol)()()(l)(v), undefined))));
});
const decodeField = dictIsSymbol => () => () => l => decode => bind(Data$dEither.Right)(obj => bind((() => {
  const $0 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dEither.Right)(obj)(dictIsSymbol.reflectSymbol(l));
  return v => $0;
})())(json => bind((() => {
  const $0 = decode(json);
  return v => $0;
})())(v => applicativeReaderT.pure(Data$dTuple.$Tuple(Record.insert(dictIsSymbol)()()(l)(v), undefined)))));
const askObject = /* #__PURE__ */ bind(Data$dEither.Right)(obj => applicativeReaderT.pure(Data$dTuple.$Tuple(identity, obj)));
const decodeJsonProp = dictIsSymbol => () => () => dictDecodeJson => l => bind2(askObject)(obj => bind2((() => {
  const $0 = Data$dArgonaut$dDecode$dDecoders.getField(dictDecodeJson.decodeJson)(obj)(dictIsSymbol.reflectSymbol(l));
  return bind(v => $0)(v$p => applicativeReaderT.pure(Data$dTuple.$Tuple(identity, v$p)));
})())(v => applicativeReaderT.pure(Data$dTuple.$Tuple(Record.insert(dictIsSymbol)()()(l)(v), undefined))));
const askFieldOptional = fieldName => bind(Data$dEither.Right)(obj => applicativeReaderT.pure(Data$dTuple.$Tuple(
  identity,
  Foreign$dObject._lookup(Data$dMaybe.Nothing, Data$dMaybe.Just, fieldName, obj)
)));
const askField = fieldName => bind(Data$dEither.Right)(obj => {
  const $0 = Data$dArgonaut$dDecode$dDecoders.getField(json => Data$dEither.$Either("Right", Data$dTuple.$Tuple(identity, json)))(obj)(fieldName);
  return v => $0;
});
export {
  applicativeReaderT,
  askField,
  askFieldOptional,
  askObject,
  bind,
  bind2,
  decodeField,
  decodeFieldDefault,
  decodeFieldOptional,
  decodeFieldOptionalDefault,
  decodeJson,
  decodeJsonProp,
  execBuilderT,
  execRecordBuilderM,
  identity,
  insertProp,
  liftEither
};
