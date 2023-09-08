import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Isomers$dRequest$dAccum$dType from "../Isomers.Request.Accum.Type/index.js";
import * as Isomers$dRequest$dAccum$dVariant from "../Isomers.Request.Accum.Variant/index.js";
import * as Isomers$dRequest$dDuplex$dType from "../Isomers.Request.Duplex.Type/index.js";
import * as Isomers$dSpec$dAccept from "../Isomers.Spec.Accept/index.js";
import * as Isomers$dSpec$dMethod from "../Isomers.Spec.Method/index.js";
import * as Isomers$dSpec$dRecord from "../Isomers.Spec.Record/index.js";
import * as Isomers$dSpec$dTypes from "../Isomers.Spec.Types/index.js";
import * as Record$dUnsafe$dUnion from "../Record.Unsafe.Union/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const $FoldSpecStep = () => ({tag: "FoldSpecStep"});
const $Insert = (_1, _2) => ({tag: "Insert", _1, _2});
const $Scalar = (_1, _2) => ({tag: "Scalar", _1, _2});
const $WithBody = _1 => ({tag: "WithBody", _1});
const identity = x => x;
const WithBody = value0 => $WithBody(value0);
const Scalar = value0 => value1 => $Scalar(value0, value1);
const Insert = value0 => value1 => $Insert(value0, value1);
const FoldSpecStep = /* #__PURE__ */ $FoldSpecStep();
const DontPrefixPath = x => x;
const mergeSpecs = () => () => () => () => () => ({Union0: () => {}, Union1: () => {}, Union2: () => {}, Union3: () => {}, Nub4: () => {}});
const foldSpecRecordVariantVari = dictHMap => dictHMap1 => dictHMap2 => dictHFoldlAccumVariant => (
  {accumSpec: s => r => Isomers$dSpec$dRecord.accumSpec(dictHMap1)(dictHMap2)(dictHFoldlAccumVariant)(true)(dictHMap.hmap(s)(r))}
);
const foldSpecMethodRecordVaria = dictHMap => dictHMap1 => dictHMap2 => dictHMapWithIndex => {
  const accumSpec3 = Isomers$dSpec$dMethod.accumSpec(dictHMap1)(dictHMap2)(dictHMapWithIndex);
  return dictHFoldlAccumVariant => {
    const accumSpec4 = accumSpec3(dictHFoldlAccumVariant);
    return {accumSpec: s => v => accumSpec4(dictHMap.hmap(s)(v))};
  };
};
const foldSpecDontPrefixPathVar = dictHMap => dictHMap1 => dictHMap2 => dictHFoldlAccumVariant => (
  {accumSpec: s => v => Isomers$dSpec$dRecord.accumSpec(dictHMap1)(dictHMap2)(dictHFoldlAccumVariant)(false)(dictHMap.hmap(s)(v))}
);
const foldSpecAccumSpec = {accumSpec: v => s => s};
const foldSpecAccum$x47$x92$x58VariantVa = dictHFoldl => () => () => () => dictHFoldl1 => dictTypeEquals => (
  {accumSpec: v => x => Isomers$dSpec$dAccept.accumSpec(dictHFoldl)()()()(dictHFoldl1)(Data$dTuple.$Tuple(Isomers$dRequest$dAccum$dType.unifyRoute(dictTypeEquals)(x._1), x._2))}
);
const foldSpec$x47$x92Duplex = dictTypeEquals => {
  const to = dictTypeEquals.proof(a => a);
  return dictTypeEquals1 => {
    const to1 = dictTypeEquals1.proof(a => a);
    return {accumSpec: v => v1 => ({request: to(v1._1), response: to1(v1._2)})};
  };
};
const withBody = v => dpl => $WithBody(dpl);
const unifyRoute = dictTypeEquals => v => ({request: Isomers$dRequest$dAccum$dType.unifyRoute(dictTypeEquals)(v.request), response: v.response});
const setScalarSpec = dpl => v => ({request: Isomers$dRequest$dAccum$dType.scalar(dpl)(v.request), response: v.response});
const foldSpecScalarAccumSpec = dictTypeEquals => (
  {
    accumSpec: v => v1 => (
      {request: Isomers$dRequest$dAccum$dType.unifyRoute(dictTypeEquals)(Isomers$dRequest$dAccum$dType.scalar(v1._1)(v1._2.request)), response: v1._2.response}
    )
  }
);
const pass = /* #__PURE__ */ (() => Isomers$dRequest$dAccum$dType.$Accum(Isomers$dRequest$dDuplex$dType.applicativeRequestDuplex.pure(identity), identity))();
const merge = () => dictContractable => {
  const merge4 = Isomers$dRequest$dAccum$dVariant.merge()()()(dictContractable);
  return dictContractable1 => {
    const merge5 = merge4(dictContractable1);
    return () => () => v => v1 => ({request: merge5(v.request)(v1.request), response: Record$dUnsafe$dUnion.unsafeUnionFn(v.response, v1.response)});
  };
};
const mergeApis = () => dictContractable => {
  const merge4 = merge()(dictContractable);
  return dictContractable1 => {
    const merge5 = merge4(dictContractable1)()();
    return () => () => () => () => () => apiA => apiB => {
      const $0 = merge5(Isomers$dSpec$dTypes.unRootSpec(apiA))(Isomers$dSpec$dTypes.unRootSpec(apiB));
      return {request: Isomers$dRequest$dAccum$dType.rootDuplex($0.request), response: $0.response};
    };
  };
};
const insertIntoAccumSpec = dictIsSymbol => () => () => l => dpl => v => (
  {request: Isomers$dRequest$dAccum$dType.insert(dictIsSymbol)()()(l)(dpl)(v.request), response: v.response}
);
const foldSpecInsertAccumSpecRe = () => dictIsSymbol => () => (
  {accumSpec: v => v1 => ({request: Isomers$dRequest$dAccum$dType.insert(dictIsSymbol)()()(Type$dProxy.Proxy)(v1._1)(v1._2.request), response: v1._2.response})}
);
const insert = v => dpl => sub => $Insert(dpl, sub);
const accumSpec = dict => dict.accumSpec;
const foldSpec = dictFoldSpec => {
  const $0 = dictFoldSpec.accumSpec(FoldSpecStep);
  return x => {
    const $1 = $0(x);
    return {request: Isomers$dRequest$dAccum$dType.rootDuplex($1.request), response: $1.response};
  };
};
const foldSpecApi = () => dictFoldSpec => (
  {
    accumSpec: step => {
      const $0 = dictFoldSpec.accumSpec(step);
      return x => $0(Isomers$dSpec$dTypes.unRootSpec(x));
    }
  }
);
const foldSpecDuplex = dictFoldSpec => ({accumSpec: s => response => dictFoldSpec.accumSpec(s)(Data$dTuple.$Tuple(pass, response))});
const foldSpecInsertRecord = () => dictIsSymbol => () => dictFoldSpec => (
  {
    accumSpec: v => v1 => {
      const $0 = dictFoldSpec.accumSpec(FoldSpecStep)(v1._2);
      return {request: Isomers$dRequest$dAccum$dType.insert(dictIsSymbol)()()(Type$dProxy.Proxy)(v1._1)($0.request), response: $0.response};
    }
  }
);
const foldSpecScalar = dictFoldSpec => dictTypeEquals => (
  {
    accumSpec: v => v1 => {
      const $0 = dictFoldSpec.accumSpec(FoldSpecStep)(v1._2);
      return {request: Isomers$dRequest$dAccum$dType.unifyRoute(dictTypeEquals)(Isomers$dRequest$dAccum$dType.scalar(v1._1)($0.request)), response: $0.response};
    }
  }
);
const foldSpecSpec = dictTypeEquals => dictFoldSpec => ({accumSpec: step => spec => dictFoldSpec.accumSpec(step)(Isomers$dSpec$dTypes.unRootSpec(spec))});
const foldSpecWithBody$x47$x92RecordR = () => () => () => dictIsSymbol => dictFoldSpec => (
  {accumSpec: s => v => dictFoldSpec.accumSpec(s)(Data$dTuple.$Tuple(Isomers$dRequest$dAccum$dType.insertReq(dictIsSymbol)()()()(Type$dProxy.Proxy)(v._1._1), v._2))}
);
const mappingFoldSpecStepAccumS = dictFoldSpec => ({mapping: dictFoldSpec.accumSpec});
export {
  $FoldSpecStep,
  $Insert,
  $Scalar,
  $WithBody,
  DontPrefixPath,
  FoldSpecStep,
  Insert,
  Scalar,
  WithBody,
  accumSpec,
  foldSpec,
  foldSpec$x47$x92Duplex,
  foldSpecAccum$x47$x92$x58VariantVa,
  foldSpecAccumSpec,
  foldSpecApi,
  foldSpecDontPrefixPathVar,
  foldSpecDuplex,
  foldSpecInsertAccumSpecRe,
  foldSpecInsertRecord,
  foldSpecMethodRecordVaria,
  foldSpecRecordVariantVari,
  foldSpecScalar,
  foldSpecScalarAccumSpec,
  foldSpecSpec,
  foldSpecWithBody$x47$x92RecordR,
  identity,
  insert,
  insertIntoAccumSpec,
  mappingFoldSpecStepAccumS,
  merge,
  mergeApis,
  mergeSpecs,
  pass,
  setScalarSpec,
  unifyRoute,
  withBody
};
