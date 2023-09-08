import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Record$dBuilder from "../Record.Builder/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import {pickFn} from "./foreign.js";
const identity = x => x;
const fromFoldable = /* #__PURE__ */ (() => Data$dArray.fromFoldableImpl(Data$dList$dTypes.foldableList.foldr))();
const zipRecordNil = {zipRecordImpl: v => v1 => v2 => v3 => identity};
const zipRecordImpl = dict => dict.zipRecordImpl;
const zipRecordCons = dictIsSymbol => () => () => () => () => dictZipRecord => (
  {
    zipRecordImpl: v => ra => v1 => rb => {
      const $0 = Record$dBuilder.insert()()(dictIsSymbol)(Type$dProxy.Proxy)(Data$dTuple.$Tuple(
        Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(ra),
        Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(rb)
      ));
      const $1 = dictZipRecord.zipRecordImpl(Type$dProxy.Proxy)(ra)(Type$dProxy.Proxy)(rb);
      return x => $0($1(x));
    }
  }
);
const zipRecord = () => () => dictZipRecord => ra => rb => dictZipRecord.zipRecordImpl(Type$dProxy.Proxy)(ra)(Type$dProxy.Proxy)(rb)({});
const slToRlSNil = {};
const slToRlSCons = () => ({});
const sequenceRecordSingle = dictIsSymbol => () => dictFunctor => () => () => (
  {
    sequenceRecordImpl: v => a => dictFunctor.map(Record$dBuilder.insert()()(dictIsSymbol)(Type$dProxy.Proxy))(Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(a)),
    Functor0: () => dictFunctor
  }
);
const sequenceRecordNil = dictApplicative => {
  const Functor0 = dictApplicative.Apply0().Functor0();
  return {sequenceRecordImpl: v => v1 => dictApplicative.pure(identity), Functor0: () => Functor0};
};
const sequenceRecordImpl = dict => dict.sequenceRecordImpl;
const sequenceRecordCons = dictIsSymbol => () => dictApply => {
  const Functor0 = dictApply.Functor0();
  return dictSequenceRecord => () => () => (
    {
      sequenceRecordImpl: v => a => dictApply.apply(Functor0.map(valA$p => rest$p => x => Record$dBuilder.unsafeInsert(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(valA$p)(rest$p(x)))(Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(a)))(dictSequenceRecord.sequenceRecordImpl(Type$dProxy.Proxy)(a)),
      Functor0: () => Functor0
    }
  );
};
const sequenceRecord = () => dictSequenceRecord => a => dictSequenceRecord.Functor0().map(x => x({}))(dictSequenceRecord.sequenceRecordImpl(Type$dProxy.Proxy)(a));
const ordRecordNil = {compareRecordImpl: v => v1 => v2 => Data$dOrdering.EQ};
const nilKeys = {keysImpl: v => Data$dList$dTypes.Nil};
const mapRecordNil = {mapRecordBuilder: v => v1 => v2 => identity};
const mapRecordBuilder = dict => dict.mapRecordBuilder;
const mapRecordCons = dictIsSymbol => () => dictMapRecord => () => () => (
  {
    mapRecordBuilder: v => f => r => {
      const $0 = Record$dBuilder.insert()()(dictIsSymbol)(Type$dProxy.Proxy)(f(Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(r)));
      const $1 = dictMapRecord.mapRecordBuilder(Type$dProxy.Proxy)(f)(r);
      return x => $0($1(x));
    }
  }
);
const mapRecord = () => dictMapRecord => f => r => dictMapRecord.mapRecordBuilder(Type$dProxy.Proxy)(f)(r)({});
const keysImpl = dict => dict.keysImpl;
const slistKeys = () => dictKeys => v => dictKeys.keysImpl(Type$dProxy.Proxy);
const keys = () => dictKeys => v => dictKeys.keysImpl(Type$dProxy.Proxy);
const pick = () => () => dictKeys => {
  const $0 = fromFoldable(dictKeys.keysImpl(Type$dProxy.Proxy));
  return $1 => pickFn($0, $1);
};
const consKeys = dictIsSymbol => dictKeys => ({keysImpl: v => Data$dList$dTypes.$List("Cons", dictIsSymbol.reflectSymbol(Type$dProxy.Proxy), dictKeys.keysImpl(Type$dProxy.Proxy))});
const compareRecordImpl = dict => dict.compareRecordImpl;
const ordRecordCons = dictIsSymbol => dictOrd => () => dictOrdRecord => (
  {
    compareRecordImpl: v => a => b => {
      const v1 = dictOrd.compare(Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(a))(Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(b));
      if (v1 === "EQ") { return dictOrdRecord.compareRecordImpl(Type$dProxy.Proxy)(a)(b); }
      return v1;
    }
  }
);
const compareRecord = () => dictOrdRecord => a => b => dictOrdRecord.compareRecordImpl(Type$dProxy.Proxy)(a)(b);
export {
  compareRecord,
  compareRecordImpl,
  consKeys,
  fromFoldable,
  identity,
  keys,
  keysImpl,
  mapRecord,
  mapRecordBuilder,
  mapRecordCons,
  mapRecordNil,
  nilKeys,
  ordRecordCons,
  ordRecordNil,
  pick,
  sequenceRecord,
  sequenceRecordCons,
  sequenceRecordImpl,
  sequenceRecordNil,
  sequenceRecordSingle,
  slToRlSCons,
  slToRlSNil,
  slistKeys,
  zipRecord,
  zipRecordCons,
  zipRecordImpl,
  zipRecordNil
};
export * from "./foreign.js";
