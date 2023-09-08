import * as $runtime from "../runtime.js";
import * as Control$dMonad$dRWS$dTrans from "../Control.Monad.RWS.Trans/index.js";
import * as Control$dMonad$dReader$dTrans from "../Control.Monad.Reader.Trans/index.js";
import * as Data$dArgonaut$dAeson from "../Data.Argonaut.Aeson/index.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dArgonaut$dDecode$dDecoders from "../Data.Argonaut.Decode.Decoders/index.js";
import * as Data$dArgonaut$dDecode$dError from "../Data.Argonaut.Decode.Error/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dBitraversable from "../Data.Bitraversable/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Data$dUnfoldable from "../Data.Unfoldable/index.js";
import * as Data$dUnfoldable1 from "../Data.Unfoldable1/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const apply1 = /* #__PURE__ */ (() => Control$dMonad$dRWS$dTrans.applyRWST(Data$dEither.bindEither)(Data$dMonoid.monoidUnit).apply)();
const bitraverse = /* #__PURE__ */ (() => Data$dBitraversable.bitraversableTuple.bitraverse(Data$dEither.applicativeEither))();
const traverse = /* #__PURE__ */ (() => Data$dTraversable.traversableArray.traverse(Data$dEither.applicativeEither))();
const toUnfoldable = /* #__PURE__ */ (() => {
  const $0 = Foreign$dObject.toArrayWithKey(Data$dTuple.Tuple);
  return x => Data$dArray.toUnfoldable(Data$dUnfoldable.unfoldableArray)($0(x));
})();
const value = dictDecodeJson => dictDecodeJson.decodeJson;
const unit = json => {
  const $0 = Data$dArgonaut$dDecode$dDecoders.decodeArray(x => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("UnexpectedValue", x)))(json);
  if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
  if ($0.tag === "Right") { return Data$dEither.$Either("Right", undefined); }
  $runtime.fail();
};
const tuple = decoder => a => {
  const $0 = Data$dArgonaut$dDecode$dDecoders.decodeJArray(a);
  if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
  if ($0.tag === "Right") {
    const $1 = decoder($0._1)(0);
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
    })()(v1 => Data$dEither.$Either("Right", Data$dTuple.$Tuple(v1._2, v1._3)));
    if ($2.tag === "Left") { return Data$dEither.$Either("Left", $2._1); }
    if ($2.tag === "Right") { return Data$dEither.$Either("Right", $2._1._1); }
  }
  $runtime.fail();
};
const toTupleDecoderTupleDecoder = {toTupleDecoder: x => x};
const toTupleDecoderDecoder = {
  toTupleDecoder: decoder => arr => i => {
    const $0 = Control$dMonad$dRWS$dTrans.RWSResult(i + 1 | 0);
    const $1 = Data$dArgonaut$dDecode$dError.AtIndex(i);
    const $2 = Data$dArray.index(arr)(i);
    const $3 = (() => {
      const $3 = (() => {
        const $3 = (() => {
          if ($2.tag === "Nothing") { return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.MissingValue); }
          if ($2.tag === "Just") { return decoder($2._1); }
          $runtime.fail();
        })();
        if ($3.tag === "Left") { return Data$dEither.$Either("Left", $1($3._1)); }
        if ($3.tag === "Right") { return Data$dEither.$Either("Right", $3._1); }
        $runtime.fail();
      })();
      if ($3.tag === "Left") { return Data$dEither.$Either("Left", $3._1); }
      if ($3.tag === "Right") { return Data$dEither.$Either("Right", $0($3._1)); }
      $runtime.fail();
    })();
    if ($3.tag === "Left") { return Data$dEither.$Either("Left", $3._1); }
    if ($3.tag === "Right") { return Data$dEither.$Either("Right", $3._1()); }
    $runtime.fail();
  }
};
const toTupleDecoder = dict => dict.toTupleDecoder;
const tupleApply = dictToTupleDecoder => f => a => apply1(f)(dictToTupleDecoder.toTupleDecoder(a));
const tupleConjoin = dictToTupleDecoder => d1 => d2 => apply1(r => s => {
  const $0 = toTupleDecoderDecoder.toTupleDecoder(d1)(r)(s);
  if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
  if ($0.tag === "Right") { return Data$dEither.$Either("Right", Control$dMonad$dRWS$dTrans.$RWSResult($0._1._1, Data$dTuple.Tuple($0._1._2), $0._1._3)); }
  $runtime.fail();
})(dictToTupleDecoder.toTupleDecoder(d2));
const tupleMap = dictToTupleDecoder => f => a => {
  const $0 = dictToTupleDecoder.toTupleDecoder(a);
  return r => s => {
    const $1 = $0(r)(s);
    if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
    if ($1.tag === "Right") { return Data$dEither.$Either("Right", Control$dMonad$dRWS$dTrans.$RWSResult($1._1._1, f($1._1._2), $1._1._3)); }
    $runtime.fail();
  };
};
const sumType = name => decoders => json => {
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
    const $2 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dArgonaut$dCore.caseJsonString(Data$dEither.$Either(
      "Left",
      Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")
    ))(Data$dEither.Right))(obj)("tag");
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
    })()(tag => {
      const $3 = Data$dEither.$Either(
        "Left",
        Data$dArgonaut$dDecode$dError.$JsonDecodeError("AtKey", "tag", Data$dArgonaut$dDecode$dError.$JsonDecodeError("UnexpectedValue", Data$dArgonaut$dCore.fromString(tag)))
      );
      const $4 = Data$dMap$dInternal.lookup(Data$dOrd.ordString)(tag)(decoders);
      if ($4.tag === "Just") { return $4._1(obj); }
      return $3;
    });
  });
  if ($2.tag === "Left") { return Data$dEither.$Either("Left", $0($2._1)); }
  if ($2.tag === "Right") { return Data$dEither.$Either("Right", $2._1); }
  $runtime.fail();
};
const rowListDecoderNil = {rowListDecoder: v => v1 => v$1 => Data$dEither.$Either("Right", {})};
const rowListDecoder = dict => dict.rowListDecoder;
const propDecoder = dictIsSymbol => p => decoder => {
  const key = dictIsSymbol.reflectSymbol(p);
  const $0 = Data$dArgonaut$dDecode$dError.AtKey(key);
  return a => {
    const $1 = Foreign$dObject._lookup(Data$dMaybe.Nothing, Data$dMaybe.Just, key, a);
    if ($1.tag === "Nothing") { return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.MissingValue); }
    if ($1.tag === "Just") {
      const $2 = decoder($1._1);
      if ($2.tag === "Left") { return Data$dEither.$Either("Left", $0($2._1)); }
      if ($2.tag === "Right") { return Data$dEither.$Either("Right", $2._1); }
    }
    $runtime.fail();
  };
};
const rowListDecoderDecoderCons = dictIsSymbol => () => () => () => () => dictRowListDecoder => (
  {
    rowListDecoder: v => decoders => {
      const v1 = Data$dArgonaut$dAeson.unconsRecord(dictIsSymbol)()()(Type$dProxy.Proxy)(decoders);
      const $0 = propDecoder(dictIsSymbol)(Type$dProxy.Proxy)(v1._1);
      const $1 = dictRowListDecoder.rowListDecoder(Type$dProxy.Proxy)(v1._2);
      return r => {
        const $2 = $0(r);
        if ($2.tag === "Left") { return Data$dEither.$Either("Left", $2._1); }
        if ($2.tag === "Right") {
          const $3 = $1(r);
          if ($3.tag === "Left") { return Data$dEither.$Either("Left", $3._1); }
          if ($3.tag === "Right") { return Data$dEither.$Either("Right", Record$dUnsafe.unsafeSet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))($2._1)($3._1)); }
        }
        $runtime.fail();
      };
    }
  }
);
const object = () => dictRowListDecoder => name => decoders => {
  const $0 = Data$dArgonaut$dDecode$dError.Named(name);
  const $1 = dictRowListDecoder.rowListDecoder(Type$dProxy.Proxy)(decoders);
  return x => {
    const $2 = $1(x);
    if ($2.tag === "Left") { return Data$dEither.$Either("Left", $0($2._1)); }
    if ($2.tag === "Right") { return Data$dEither.$Either("Right", $2._1); }
    $runtime.fail();
  };
};
const record = () => dictRowListDecoder => name => decoders => {
  const $0 = object()(dictRowListDecoder)(name)(decoders);
  return a => {
    const $1 = Data$dArgonaut$dDecode$dDecoders.decodeJObject(a);
    if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
    if ($1.tag === "Right") { return $0($1._1); }
    $runtime.fail();
  };
};
const $$null = Data$dArgonaut$dDecode$dDecoders.decodeNull;
const maybe = decoder => r => {
  const $0 = Data$dArgonaut$dCore._caseJson(
    v => Data$dEither.$Either("Right", undefined),
    v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "null")),
    v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "null")),
    v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "null")),
    v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "null")),
    v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "null")),
    r
  );
  const $1 = (() => {
    if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
    if ($0.tag === "Right") { return Data$dEither.$Either("Right", Data$dMaybe.Nothing); }
    $runtime.fail();
  })();
  const $2 = decoder(r);
  const $3 = (() => {
    if ($2.tag === "Left") { return Data$dEither.$Either("Left", $2._1); }
    if ($2.tag === "Right") { return Data$dEither.$Either("Right", Data$dMaybe.$Maybe("Just", $2._1)); }
    $runtime.fail();
  })();
  if ($1.tag === "Left") { return $3; }
  return $1;
};
const $$enum = dictEnum => {
  const upFromIncluding = Data$dUnfoldable1.unfoldable1Array.unfoldr1(x => Data$dTuple.$Tuple(x, dictEnum.succ(x)));
  return dictBounded => {
    const bottom = dictBounded.bottom;
    return dictShow => json => {
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
      })()(v => {
        const $1 = upFromIncluding(bottom);
        const $2 = Data$dArray.findIndex(x => v === dictShow.show(x))($1);
        if ($2.tag === "Just") { return Data$dEither.$Either("Right", $1[$2._1]); }
        return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("UnexpectedValue", json));
      });
    };
  };
};
const either = decoderA => decoderB => a => {
  const $0 = Data$dArgonaut$dDecode$dDecoders.decodeJObject(a);
  if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
  if ($0.tag === "Right") {
    const $1 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dEither.Right)($0._1)("Left");
    const $2 = (() => {
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
      if ($1.tag === "Right") { return decoderA($1._1); }
      $runtime.fail();
    })();
    const $3 = (() => {
      if ($2.tag === "Left") { return Data$dEither.$Either("Left", $2._1); }
      if ($2.tag === "Right") { return Data$dEither.$Either("Right", Data$dEither.$Either("Left", $2._1)); }
      $runtime.fail();
    })();
    const $4 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dEither.Right)($0._1)("Right");
    const $5 = (() => {
      if ($4.tag === "Left") { return Data$dEither.$Either("Left", $4._1); }
      if ($4.tag === "Right") { return decoderB($4._1); }
      $runtime.fail();
    })();
    const $6 = (() => {
      if ($5.tag === "Left") { return Data$dEither.$Either("Left", $5._1); }
      if ($5.tag === "Right") { return Data$dEither.$Either("Right", Data$dEither.$Either("Right", $5._1)); }
      $runtime.fail();
    })();
    if ($3.tag === "Left") { return $6; }
    return $3;
  }
  $runtime.fail();
};
const decode = Control$dMonad$dReader$dTrans.runReaderT;
const dictionary = dictOrd => {
  const fromFoldable = Data$dMap$dInternal.fromFoldable(dictOrd)(Data$dFoldable.foldableArray);
  return decoderA => decoderB => {
    const readArray = Data$dArgonaut$dDecode$dDecoders.decodeArray(tuple(tupleConjoin(toTupleDecoderDecoder)(decoderA)(decoderB)));
    return a => {
      const $0 = readArray(a);
      const $1 = traverse(v => {
        const $1 = Data$dArgonaut$dDecode$dError.AtKey(v._1);
        const $2 = bitraverse(x => decoderA(Data$dArgonaut$dCore.fromString(x)))(decoderB)(v);
        if ($2.tag === "Left") { return Data$dEither.$Either("Left", $1($2._1)); }
        if ($2.tag === "Right") { return Data$dEither.$Either("Right", $2._1); }
        $runtime.fail();
      });
      const $2 = Data$dArgonaut$dCore._caseJson(v => $0, v => $0, v => $0, v => $0, v => $0, x => $1(toUnfoldable(x)), a);
      if ($2.tag === "Left") { return Data$dEither.$Either("Left", $2._1); }
      if ($2.tag === "Right") { return Data$dEither.$Either("Right", fromFoldable($2._1)); }
      $runtime.fail();
    };
  };
};
const content = decoder => obj => {
  const $0 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dEither.Right)(obj)("contents");
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
  })()(contents => {
    const $1 = Data$dArgonaut$dDecode$dError.AtKey("contents");
    const $2 = decoder(contents);
    if ($2.tag === "Left") { return Data$dEither.$Either("Left", $1($2._1)); }
    if ($2.tag === "Right") { return Data$dEither.$Either("Right", $2._1); }
    $runtime.fail();
  });
};
export {
  apply1,
  bitraverse,
  content,
  decode,
  dictionary,
  either,
  $$enum as enum,
  maybe,
  $$null as null,
  object,
  propDecoder,
  record,
  rowListDecoder,
  rowListDecoderDecoderCons,
  rowListDecoderNil,
  sumType,
  toTupleDecoder,
  toTupleDecoderDecoder,
  toTupleDecoderTupleDecoder,
  toUnfoldable,
  traverse,
  tuple,
  tupleApply,
  tupleConjoin,
  tupleMap,
  unit,
  value
};
