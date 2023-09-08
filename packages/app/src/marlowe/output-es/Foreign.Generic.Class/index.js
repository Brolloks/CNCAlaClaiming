import * as $runtime from "../runtime.js";
import * as Control$dMonad$dExcept$dTrans from "../Control.Monad.Except.Trans/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dList from "../Data.List/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNonEmpty from "../Data.NonEmpty/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dUnfoldable from "../Data.Unfoldable/index.js";
import * as Data$dVoid from "../Data.Void/index.js";
import * as Foreign from "../Foreign/index.js";
import * as Foreign$dGeneric$dInternal from "../Foreign.Generic.Internal/index.js";
import * as Foreign$dIndex from "../Foreign.Index/index.js";
import * as Foreign$dNullOrUndefined from "../Foreign.NullOrUndefined/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
import * as Record$dBuilder from "../Record.Builder/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const $SumEncoding = _1 => ({tag: "TaggedObject", _1});
const mempty = v => Data$dList$dTypes.Nil;
const applicativeExceptT = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.applicativeExceptT(Data$dIdentity.monadIdentity);
const identity = x => x;
const identity1 = x => x;
const toUnfoldable = /* #__PURE__ */ Data$dList.toUnfoldable(Data$dUnfoldable.unfoldableArray);
const bindExceptT = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.bindExceptT(Data$dIdentity.monadIdentity);
const index = /* #__PURE__ */ (() => Foreign$dIndex.indexString(Data$dIdentity.monadIdentity).index)();
const alt = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.altExceptT(Data$dList$dTypes.semigroupNonEmptyList)(Data$dIdentity.monadIdentity).alt)();
const sequence = /* #__PURE__ */ (() => Data$dTraversable.traversableArray.traverse(applicativeExceptT)(Data$dTraversable.identity))();
const sequence1 = /* #__PURE__ */ (() => Foreign$dObject.traversableWithIndexObject.traverseWithIndex(applicativeExceptT)(v => Foreign$dObject.identity))();
const fromFoldable = /* #__PURE__ */ Data$dFoldable.foldrArray(Data$dList$dTypes.Cons)(Data$dList$dTypes.Nil);
const TaggedObject = value0 => $SumEncoding(value0);
const genericEncodeArgsNoArgume = {encodeArgs: v => mempty};
const genericDecodeNoConstructo = {
  decodeOpts: v => v1 => Control$dMonad$dExcept$dTrans.monadThrowExceptT(Data$dIdentity.monadIdentity).throwError(Data$dNonEmpty.$NonEmpty(
    Foreign.$ForeignError("ForeignError", "No constructors"),
    Data$dList$dTypes.Nil
  ))
};
const genericDecodeArgsNoArgume = {
  decodeArgs: v => v1 => v2 => {
    if (v2.tag === "Nil") { return applicativeExceptT.pure({result: Data$dGeneric$dRep.NoArguments, rest: Data$dList$dTypes.Nil, next: v1}); }
    return Control$dMonad$dExcept$dTrans.monadThrowExceptT(Data$dIdentity.monadIdentity).throwError(Data$dNonEmpty.$NonEmpty(
      Foreign.$ForeignError("ForeignError", "Too many constructor arguments"),
      Data$dList$dTypes.Nil
    ));
  }
};
const genericCountArgsNoArgumen = {countArgs: v => Data$dEither.$Either("Left", Data$dGeneric$dRep.NoArguments)};
const genericCountArgsArgument = {countArgs: v => Data$dEither.$Either("Right", 1)};
const encodeVoid = {encode: Data$dVoid.absurd};
const encodeUnit = {encode: v => ({})};
const encodeString = {encode: Unsafe$dCoerce.unsafeCoerce};
const encodeRecordRowNil = {encodeRecordWithOptions: v => v1 => v2 => Foreign$dObject.empty};
const encodeNumber = {encode: Unsafe$dCoerce.unsafeCoerce};
const encodeInt = {encode: Unsafe$dCoerce.unsafeCoerce};
const encodeForeign = {encode: identity};
const encodeChar = {encode: Unsafe$dCoerce.unsafeCoerce};
const encodeBoolean = {encode: Unsafe$dCoerce.unsafeCoerce};
const decodeVoid = {decode: v => Data$dEither.$Either("Left", Data$dNonEmpty.$NonEmpty(Foreign.$ForeignError("ForeignError", "Decode: void"), Data$dList$dTypes.Nil))};
const decodeUnit = {decode: v => applicativeExceptT.pure()};
const decodeString = {decode: /* #__PURE__ */ Foreign.readString(Data$dIdentity.monadIdentity)};
const decodeRecordRowNil = {decodeRecordWithOptions: v => v1 => v2 => applicativeExceptT.pure(identity1)};
const decodeNumber = {decode: /* #__PURE__ */ Foreign.readNumber(Data$dIdentity.monadIdentity)};
const decodeInt = {decode: /* #__PURE__ */ Foreign.readInt(Data$dIdentity.monadIdentity)};
const decodeForeign = /* #__PURE__ */ (() => ({decode: applicativeExceptT.pure}))();
const decodeChar = {decode: /* #__PURE__ */ Foreign.readChar(Data$dIdentity.monadIdentity)};
const decodeBoolean = {decode: /* #__PURE__ */ Foreign.readBoolean(Data$dIdentity.monadIdentity)};
const encodeWithOptions = dict => dict.encodeWithOptions;
const genericEncodeArgsArgument = dictEncodeWithOptions => (
  {encodeArgs: opts => v => Data$dList$dTypes.$List("Cons", dictEncodeWithOptions.encodeWithOptions(opts)(v), Data$dList$dTypes.Nil)}
);
const encodeRecordWithOptions = dict => dict.encodeRecordWithOptions;
const encodeWithOptionsRecord = () => dictEncodeRecord => ({encodeWithOptions: opts => dictEncodeRecord.encodeRecordWithOptions(Type$dProxy.Proxy)(opts)});
const encodeRecordCons = () => dictEncodeRecord => dictIsSymbol => dictEncodeWithOptions => (
  {
    encodeRecordWithOptions: v => opts => rec => {
      const $0 = opts.fieldTransform(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy));
      const $1 = dictEncodeWithOptions.encodeWithOptions(opts)(Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(rec));
      return Foreign$dObject.mutate($2 => () => {
        $2[$0] = $1;
        return $2;
      })(dictEncodeRecord.encodeRecordWithOptions(Type$dProxy.Proxy)(opts)(rec));
    }
  }
);
const encodeOpts = dict => dict.encodeOpts;
const genericEncodeNoConstructo = {encodeOpts: opts => a => genericEncodeNoConstructo.encodeOpts(opts)(a)};
const genericEncodeSum = dictGenericEncode => dictGenericEncode1 => (
  {
    encodeOpts: v => v1 => {
      if (v1.tag === "Inl") {
        return dictGenericEncode.encodeOpts({
          sumEncoding: v.sumEncoding,
          unwrapSingleConstructors: false,
          unwrapSingleArguments: v.unwrapSingleArguments,
          fieldTransform: v.fieldTransform
        })(v1._1);
      }
      if (v1.tag === "Inr") {
        return dictGenericEncode1.encodeOpts({
          sumEncoding: v.sumEncoding,
          unwrapSingleConstructors: false,
          unwrapSingleArguments: v.unwrapSingleArguments,
          fieldTransform: v.fieldTransform
        })(v1._1);
      }
      $runtime.fail();
    }
  }
);
const encodeArgs = dict => dict.encodeArgs;
const genericEncodeArgsProduct = dictGenericEncodeArgs => dictGenericEncodeArgs1 => (
  {
    encodeArgs: opts => v => Data$dList$dTypes.foldableList.foldr(Data$dList$dTypes.Cons)(dictGenericEncodeArgs1.encodeArgs(opts)(v._2))(dictGenericEncodeArgs.encodeArgs(opts)(v._1))
  }
);
const genericEncodeConstructor = dictIsSymbol => dictGenericEncodeArgs => (
  {
    encodeOpts: opts => v => {
      const $0 = dictGenericEncodeArgs.encodeArgs(opts);
      const encodeArgsArray = x => {
        const $1 = toUnfoldable($0(x));
        if ($1.length === 0) { return Data$dMaybe.Nothing; }
        if ($1.length === 1 && opts.unwrapSingleArguments) { return Data$dMaybe.$Maybe("Just", $1[0]); }
        return Data$dMaybe.$Maybe("Just", $1);
      };
      const ctorName = dictIsSymbol.reflectSymbol(Type$dProxy.Proxy);
      if (opts.unwrapSingleConstructors) {
        const $1 = encodeArgsArray(v);
        if ($1.tag === "Nothing") { return {}; }
        if ($1.tag === "Just") { return $1._1; }
        $runtime.fail();
      }
      const $1 = opts.sumEncoding._1.tagFieldName;
      return Foreign$dObject.union((() => {
        const $2 = opts.sumEncoding._1.constructorTagTransform(ctorName);
        return (() => {
          const $3 = {};
          $3[$1] = $2;
          return $3;
        })();
      })())((() => {
        const $2 = encodeArgsArray(v);
        if ($2.tag === "Nothing") { return Foreign$dObject.empty; }
        if ($2.tag === "Just") {
          const $3 = opts.sumEncoding._1.contentsFieldName;
          const $4 = $2._1;
          return (() => {
            const $5 = {};
            $5[$3] = $4;
            return $5;
          })();
        }
        $runtime.fail();
      })());
    }
  }
);
const encode = dict => dict.encode;
const encodeArray = dictEncode => ({encode: Data$dFunctor.arrayMap(dictEncode.encode)});
const encodeIdentity = dictEncode => ({encode: x => dictEncode.encode(x)});
const encodeMaybe = dictEncode => (
  {
    encode: v2 => {
      if (v2.tag === "Nothing") { return Foreign$dNullOrUndefined.nullImpl; }
      if (v2.tag === "Just") { return dictEncode.encode(v2._1); }
      $runtime.fail();
    }
  }
);
const encodeObject = dictEncode => {
  const encode1 = dictEncode.encode;
  return {encode: x => Foreign$dObject._mapWithKey(x, v => encode1)};
};
const encodeWithOptions1 = dictEncode => {
  const encode1 = dictEncode.encode;
  return {encodeWithOptions: v => encode1};
};
const defaultOptions = {
  sumEncoding: /* #__PURE__ */ $SumEncoding({tagFieldName: "tag", contentsFieldName: "contents", constructorTagTransform: identity}),
  unwrapSingleConstructors: false,
  unwrapSingleArguments: true,
  fieldTransform: identity
};
const encodeRecord = () => dictEncodeRecord => ({encode: dictEncodeRecord.encodeRecordWithOptions(Type$dProxy.Proxy)(defaultOptions)});
const decodeWithOptions = dict => dict.decodeWithOptions;
const genericDecodeArgsArgument = dictDecodeWithOptions => (
  {
    decodeArgs: v => v1 => v2 => {
      if (v2.tag === "Cons") {
        const $0 = v2._2;
        return bindExceptT.bind((() => {
          const $1 = Data$dList$dTypes.functorNonEmptyList.map(Foreign.ErrorAtIndex(v1));
          const $2 = dictDecodeWithOptions.decodeWithOptions(v)(v2._1);
          if ($2.tag === "Left") { return Data$dEither.$Either("Left", $1($2._1)); }
          if ($2.tag === "Right") { return Data$dEither.$Either("Right", $2._1); }
          $runtime.fail();
        })())(a => applicativeExceptT.pure({result: a, rest: $0, next: v1 + 1 | 0}));
      }
      return Control$dMonad$dExcept$dTrans.monadThrowExceptT(Data$dIdentity.monadIdentity).throwError(Data$dNonEmpty.$NonEmpty(
        Foreign.$ForeignError("ForeignError", "Not enough constructor arguments"),
        Data$dList$dTypes.Nil
      ));
    }
  }
);
const decodeRecordWithOptions = dict => dict.decodeRecordWithOptions;
const decodeWithOptionsRecord = () => dictDecodeRecord => (
  {
    decodeWithOptions: opts => {
      const $0 = dictDecodeRecord.decodeRecordWithOptions(Type$dProxy.Proxy)(opts);
      return x => {
        const $1 = $0(x);
        if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
        if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1({})); }
        $runtime.fail();
      };
    }
  }
);
const decodeRecord = () => dictDecodeRecord => ({decode: decodeWithOptionsRecord()(dictDecodeRecord).decodeWithOptions(defaultOptions)});
const decodeRecordCons = () => dictDecodeRecord => dictIsSymbol => dictDecodeWithOptions => () => (
  {
    decodeRecordWithOptions: v => opts => f => bindExceptT.bind(dictDecodeRecord.decodeRecordWithOptions(Type$dProxy.Proxy)(opts)(f))(builder => {
      const l_transformed = opts.fieldTransform(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy));
      return bindExceptT.bind(index(f)(l_transformed))(f_ => bindExceptT.bind((() => {
        const $0 = Data$dList$dTypes.functorNonEmptyList.map(Foreign.ErrorAtProperty(l_transformed));
        const $1 = dictDecodeWithOptions.decodeWithOptions(opts)(f_);
        if ($1.tag === "Left") { return Data$dEither.$Either("Left", $0($1._1)); }
        if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1); }
        $runtime.fail();
      })())(a => applicativeExceptT.pure(x => Record$dBuilder.unsafeInsert(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(a)(builder(x)))));
    })
  }
);
const decodeOpts = dict => dict.decodeOpts;
const genericDecodeSum = dictGenericDecode => dictGenericDecode1 => (
  {
    decodeOpts: opts => f => {
      const opts$p = {unwrapSingleConstructors: false, fieldTransform: opts.fieldTransform, sumEncoding: opts.sumEncoding, unwrapSingleArguments: opts.unwrapSingleArguments};
      return alt((() => {
        const $0 = dictGenericDecode.decodeOpts(opts$p)(f);
        if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
        if ($0.tag === "Right") { return Data$dEither.$Either("Right", Data$dGeneric$dRep.$Sum("Inl", $0._1)); }
        $runtime.fail();
      })())((() => {
        const $0 = dictGenericDecode1.decodeOpts(opts$p)(f);
        if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
        if ($0.tag === "Right") { return Data$dEither.$Either("Right", Data$dGeneric$dRep.$Sum("Inr", $0._1)); }
        $runtime.fail();
      })());
    }
  }
);
const decodeArgs = dict => dict.decodeArgs;
const genericDecodeArgsProduct = dictGenericDecodeArgs => dictGenericDecodeArgs1 => (
  {
    decodeArgs: opts => i => xs => bindExceptT.bind(dictGenericDecodeArgs.decodeArgs(opts)(i)(xs))(v => {
      const $0 = v.result;
      return bindExceptT.bind(dictGenericDecodeArgs1.decodeArgs(opts)(v.next)(v.rest))(v1 => applicativeExceptT.pure({
        result: Data$dGeneric$dRep.$Product($0, v1.result),
        rest: v1.rest,
        next: v1.next
      }));
    })
  }
);
const decode = dict => dict.decode;
const decodeArray = dictDecode => (
  {
    decode: a => bindExceptT.bind(Foreign.readArray(Data$dIdentity.monadIdentity)(a))(arr => sequence(Data$dArray.zipWith(i => value => {
      const $0 = Data$dList$dTypes.functorNonEmptyList.map(Foreign.ErrorAtIndex(i));
      const $1 = dictDecode.decode(value);
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", $0($1._1)); }
      if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1); }
      $runtime.fail();
    })(Data$dArray.range(0)(arr.length))(arr)))
  }
);
const decodeIdentity = dictDecode => (
  {
    decode: x => {
      const $0 = dictDecode.decode(x);
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
      $runtime.fail();
    }
  }
);
const decodeMaybe = dictDecode => ({decode: Foreign$dNullOrUndefined.readNullOrUndefined(dictDecode.decode)});
const decodeObject = dictDecode => {
  const decode1 = dictDecode.decode;
  return {decode: a => bindExceptT.bind(Foreign$dGeneric$dInternal.readObject(a))(x => sequence1(Foreign$dObject._mapWithKey(x, v => decode1)))};
};
const decodeWithOptions1 = dictDecode => {
  const decode1 = dictDecode.decode;
  return {decodeWithOptions: v => decode1};
};
const countArgs = dict => dict.countArgs;
const genericCountArgsProduct = dictGenericCountArgs => dictGenericCountArgs1 => (
  {
    countArgs: v => {
      const v1 = dictGenericCountArgs1.countArgs(Type$dProxy.Proxy);
      const v2 = dictGenericCountArgs.countArgs(Type$dProxy.Proxy);
      if (v2.tag === "Left") {
        if (v1.tag === "Left") { return Data$dEither.$Either("Left", Data$dGeneric$dRep.$Product(v2._1, v1._1)); }
        if (v1.tag === "Right") { return Data$dEither.$Either("Right", v1._1); }
        $runtime.fail();
      }
      if (v2.tag === "Right") {
        if (v1.tag === "Left") { return Data$dEither.$Either("Right", v2._1); }
        if (v1.tag === "Right") { return Data$dEither.$Either("Right", v2._1 + v1._1 | 0); }
      }
      $runtime.fail();
    }
  }
);
const genericDecodeConstructor = dictIsSymbol => dictGenericDecodeArgs => dictGenericCountArgs => (
  {
    decodeOpts: opts => f => {
      const numArgs = dictGenericCountArgs.countArgs(Type$dProxy.Proxy);
      const readArguments = args => {
        if (numArgs.tag === "Left") { return applicativeExceptT.pure(numArgs._1); }
        if (numArgs.tag === "Right") {
          if (numArgs._1 === 1 && opts.unwrapSingleArguments) {
            return bindExceptT.bind(dictGenericDecodeArgs.decodeArgs(opts)(0)(Data$dList$dTypes.$List("Cons", args, Data$dList$dTypes.Nil)))(v => {
              const $0 = v.result;
              return bindExceptT.bind((() => {
                const $1 = v.rest.tag === "Nil";
                const $2 = Control$dMonad$dExcept$dTrans.monadThrowExceptT(Data$dIdentity.monadIdentity).throwError(Data$dNonEmpty.$NonEmpty(
                  Foreign.$ForeignError("ForeignError", "Expected a single argument"),
                  Data$dList$dTypes.Nil
                ));
                if (!$1) { return $2; }
                if ($1) { return applicativeExceptT.pure(); }
                $runtime.fail();
              })())(() => applicativeExceptT.pure($0));
            });
          }
          const $0 = numArgs._1;
          return bindExceptT.bind(Foreign.readArray(Data$dIdentity.monadIdentity)(args))(vals => bindExceptT.bind(dictGenericDecodeArgs.decodeArgs(opts)(0)(fromFoldable(vals)))(v => {
            const $1 = v.result;
            return bindExceptT.bind((() => {
              const $2 = v.rest.tag === "Nil";
              const $3 = Control$dMonad$dExcept$dTrans.monadThrowExceptT(Data$dIdentity.monadIdentity).throwError(Data$dNonEmpty.$NonEmpty(
                Foreign.$ForeignError("ForeignError", "Expected " + Data$dShow.showIntImpl($0) + " constructor arguments"),
                Data$dList$dTypes.Nil
              ));
              if (!$2) { return $3; }
              if ($2) { return applicativeExceptT.pure(); }
              $runtime.fail();
            })())(() => applicativeExceptT.pure($1));
          }));
        }
        $runtime.fail();
      };
      const ctorName = dictIsSymbol.reflectSymbol(Type$dProxy.Proxy);
      if (opts.unwrapSingleConstructors) {
        const $0 = readArguments(f);
        if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
        if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
        $runtime.fail();
      }
      const $0 = opts.sumEncoding._1.contentsFieldName;
      return bindExceptT.bind((() => {
        const $1 = Data$dList$dTypes.functorNonEmptyList.map(Foreign.ErrorAtProperty(opts.sumEncoding._1.tagFieldName));
        const $2 = bindExceptT.bind(bindExceptT.bind(index(f)(opts.sumEncoding._1.tagFieldName))(Foreign.readString(Data$dIdentity.monadIdentity)))(tag => {
          const expected = opts.sumEncoding._1.constructorTagTransform(ctorName);
          return bindExceptT.bind((() => {
            const $2 = tag === expected;
            const $3 = Control$dMonad$dExcept$dTrans.monadThrowExceptT(Data$dIdentity.monadIdentity).throwError(Data$dNonEmpty.$NonEmpty(
              Foreign.$ForeignError("ForeignError", "Expected " + Data$dShow.showStringImpl(expected) + " tag"),
              Data$dList$dTypes.Nil
            ));
            if (!$2) { return $3; }
            if ($2) { return applicativeExceptT.pure(); }
            $runtime.fail();
          })())(() => applicativeExceptT.pure(tag));
        });
        if ($2.tag === "Left") { return Data$dEither.$Either("Left", $1($2._1)); }
        if ($2.tag === "Right") { return Data$dEither.$Either("Right", $2._1); }
        $runtime.fail();
      })())(() => bindExceptT.bind((() => {
        const $1 = Data$dList$dTypes.functorNonEmptyList.map(Foreign.ErrorAtProperty($0));
        const $2 = bindExceptT.bind(index(f)($0))($2 => readArguments($2));
        if ($2.tag === "Left") { return Data$dEither.$Either("Left", $1($2._1)); }
        if ($2.tag === "Right") { return Data$dEither.$Either("Right", $2._1); }
        $runtime.fail();
      })())(args => applicativeExceptT.pure(args)));
    }
  }
);
export {
  $SumEncoding,
  TaggedObject,
  alt,
  applicativeExceptT,
  bindExceptT,
  countArgs,
  decode,
  decodeArgs,
  decodeArray,
  decodeBoolean,
  decodeChar,
  decodeForeign,
  decodeIdentity,
  decodeInt,
  decodeMaybe,
  decodeNumber,
  decodeObject,
  decodeOpts,
  decodeRecord,
  decodeRecordCons,
  decodeRecordRowNil,
  decodeRecordWithOptions,
  decodeString,
  decodeUnit,
  decodeVoid,
  decodeWithOptions,
  decodeWithOptions1,
  decodeWithOptionsRecord,
  defaultOptions,
  encode,
  encodeArgs,
  encodeArray,
  encodeBoolean,
  encodeChar,
  encodeForeign,
  encodeIdentity,
  encodeInt,
  encodeMaybe,
  encodeNumber,
  encodeObject,
  encodeOpts,
  encodeRecord,
  encodeRecordCons,
  encodeRecordRowNil,
  encodeRecordWithOptions,
  encodeString,
  encodeUnit,
  encodeVoid,
  encodeWithOptions,
  encodeWithOptions1,
  encodeWithOptionsRecord,
  fromFoldable,
  genericCountArgsArgument,
  genericCountArgsNoArgumen,
  genericCountArgsProduct,
  genericDecodeArgsArgument,
  genericDecodeArgsNoArgume,
  genericDecodeArgsProduct,
  genericDecodeConstructor,
  genericDecodeNoConstructo,
  genericDecodeSum,
  genericEncodeArgsArgument,
  genericEncodeArgsNoArgume,
  genericEncodeArgsProduct,
  genericEncodeConstructor,
  genericEncodeNoConstructo,
  genericEncodeSum,
  identity,
  identity1,
  index,
  mempty,
  sequence,
  sequence1,
  toUnfoldable
};
