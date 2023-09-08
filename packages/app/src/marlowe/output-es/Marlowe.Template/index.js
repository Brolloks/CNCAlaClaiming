import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dBigInt from "../Data.BigInt/index.js";
import * as Data$dDateTime from "../Data.DateTime/index.js";
import * as Data$dDateTime$dInstant from "../Data.DateTime.Instant/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunction from "../Data.Function/index.js";
import * as Data$dLens$dIso$dNewtype from "../Data.Lens.Iso.Newtype/index.js";
import * as Data$dLens$dRecord from "../Data.Lens.Record/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMap$dOrdered$dOMap from "../Data.Map.Ordered.OMap/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dSet from "../Data.Set/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Data$dUnfoldable from "../Data.Unfoldable/index.js";
import * as Marlowe$dTime from "../Marlowe.Time/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const showSet = /* #__PURE__ */ Data$dSet.showSet(Data$dShow.showString);
const identity = x => x;
const monoidOMap = /* #__PURE__ */ (() => {
  const semigroupOMap1 = {append: Data$dMap$dOrdered$dOMap.appendOMap(Data$dOrd.ordString)};
  return {mempty: [], Semigroup0: () => semigroupOMap1};
})();
const foldMap = /* #__PURE__ */ (() => Data$dFoldable.foldableArray.foldMap(monoidOMap))();
const filterKeys = /* #__PURE__ */ Data$dMap$dInternal.filterKeys(Data$dOrd.ordString);
const append = /* #__PURE__ */ Data$dMap$dOrdered$dOMap.appendOMap(Data$dOrd.ordString);
const fromFoldable1 = /* #__PURE__ */ Data$dMap$dInternal.fromFoldable(Data$dOrd.ordString)(Data$dFoldable.foldableArray);
const scanl = /* #__PURE__ */ Data$dTraversable.scanl(Data$dTraversable.traversableArray);
const TemplateContent = x => x;
const Placeholders = x => x;
const showPlaceholders = {
  show: record => "{ timeoutPlaceholderIds: " + showSet.show(record.timeoutPlaceholderIds) + ", valuePlaceholderIds: " + showSet.show(record.valuePlaceholderIds) + " }"
};
const semigroupTemplateContent = {
  append: v => v1 => (
    {
      timeContent: Data$dMap$dInternal.unionWith(Data$dOrd.ordString)(v$1 => identity)(v.timeContent)(v1.timeContent),
      valueContent: Data$dMap$dInternal.unionWith(Data$dOrd.ordString)(v$1 => identity)(v.valueContent)(v1.valueContent)
    }
  )
};
const semigroupPlaceholders = {
  append: ra => rb => (
    {
      timeoutPlaceholderIds: Data$dMap$dInternal.unionWith(Data$dOrd.ordString)(Data$dFunction.const)(ra.timeoutPlaceholderIds)(rb.timeoutPlaceholderIds),
      valuePlaceholderIds: Data$dMap$dInternal.unionWith(Data$dOrd.ordString)(Data$dFunction.const)(ra.valuePlaceholderIds)(rb.valuePlaceholderIds)
    }
  )
};
const orderContentUsingMetadata = content => orderedMetadataSet => {
  const metadataSet = Data$dFoldable.foldlArray(m => a => Data$dMap$dInternal.insert(Data$dOrd.ordString)(a)()(m))(Data$dMap$dInternal.Leaf)(orderedMetadataSet);
  return append(foldMap(x => {
    const $0 = Data$dMap$dInternal.lookup(Data$dOrd.ordString)(x)(content);
    if ($0.tag === "Nothing") { return monoidOMap.mempty; }
    if ($0.tag === "Just") { return [Data$dTuple.$Tuple(x, $0._1)]; }
    $runtime.fail();
  })(orderedMetadataSet))(Data$dMap$dInternal.foldableWithIndexMap.foldlWithIndex(k => m => v => Data$dMap$dOrdered$dOMap.insert(Data$dOrd.ordString)(k)(v)(m))([])(filterKeys(x => {
    const $0 = Data$dMap$dInternal.lookup(Data$dOrd.ordString)(x)(metadataSet);
    if ($0.tag === "Nothing") { return true; }
    if ($0.tag === "Just") { return false; }
    $runtime.fail();
  })(content)));
};
const newTypeTemplateContent = {Coercible0: () => {}};
const newTypePlaceholders = {Coercible0: () => {}};
const monoidTemplateContent = {mempty: {timeContent: Data$dMap$dInternal.Leaf, valueContent: Data$dMap$dInternal.Leaf}, Semigroup0: () => semigroupTemplateContent};
const monoidPlaceholders = /* #__PURE__ */ Data$dMonoid.monoidRecord()(/* #__PURE__ */ (() => {
  const semigroupRecordCons1 = {
    appendRecord: v => ra => rb => (
      {
        timeoutPlaceholderIds: Data$dMap$dInternal.unionWith(Data$dOrd.ordString)(Data$dFunction.const)(ra.timeoutPlaceholderIds)(rb.timeoutPlaceholderIds),
        valuePlaceholderIds: Data$dMap$dInternal.unionWith(Data$dOrd.ordString)(Data$dFunction.const)(ra.valuePlaceholderIds)(rb.valuePlaceholderIds)
      }
    )
  };
  return {memptyRecord: v => ({timeoutPlaceholderIds: Data$dMap$dInternal.Leaf, valuePlaceholderIds: Data$dMap$dInternal.Leaf}), SemigroupRecord0: () => semigroupRecordCons1};
})());
const initializeWith = dictOrd => f => Data$dSet.foldableSet.foldl(m => x => Data$dMap$dInternal.insert(dictOrd)(x)(f(x))(m))(Data$dMap$dInternal.Leaf);
const initializeTemplateContent = v => (
  {
    timeContent: initializeWith(Data$dOrd.ordString)(v$1 => Marlowe$dTime.unixEpoch)(v.timeoutPlaceholderIds),
    valueContent: initializeWith(Data$dOrd.ordString)(v$1 => Data$dBigInt.semiringBigInt.zero)(v.valuePlaceholderIds)
  }
);
const getPlaceholderIds = dict => dict.getPlaceholderIds;
const fillTemplate = dict => dict.fillTemplate;
const eqPlaceholders = {
  eq: ra => rb => Data$dMap$dInternal.eqMap(Data$dEq.eqString)(Data$dEq.eqUnit).eq(ra.timeoutPlaceholderIds)(rb.timeoutPlaceholderIds) && Data$dMap$dInternal.eqMap(Data$dEq.eqString)(Data$dEq.eqUnit).eq(ra.valuePlaceholderIds)(rb.valuePlaceholderIds)
};
const adjustInstantIfPossible = dictDuration => duration => instant => {
  const $0 = Data$dDateTime.adjust(dictDuration)(duration)(Data$dDateTime$dInstant.toDateTime(instant));
  if ($0.tag === "Nothing") { return instant; }
  if ($0.tag === "Just") { return Data$dDateTime$dInstant.fromDateTime($0._1); }
  $runtime.fail();
};
const initializeTemplateContentWithIncreasingTime = dictDuration => initialTime => d => orderSet => placeholders => (
  {
    timeContent: fromFoldable1(scanl(v => {
      const $0 = v._2;
      return v1 => Data$dTuple.$Tuple(v1._1, adjustInstantIfPossible(dictDuration)(d)($0));
    })(Data$dTuple.$Tuple("discarded", initialTime))(Data$dArray.toUnfoldable(Data$dUnfoldable.unfoldableArray)(orderContentUsingMetadata(initializeWith(Data$dOrd.ordString)(v => initialTime)(placeholders.timeoutPlaceholderIds))(orderSet)))),
    valueContent: initializeWith(Data$dOrd.ordString)(v => Data$dBigInt.semiringBigInt.zero)(placeholders.valuePlaceholderIds)
  }
);
const updateTemplateContent = dictDuration => initialTime => d => orderSet => placeholders => prevTemplateContent => {
  const $0 = prevTemplateContent.timeContent;
  const $1 = prevTemplateContent.valueContent;
  return {
    timeContent: fromFoldable1(scanl(v => {
      const $2 = v._2;
      return v1 => {
        const thisTime = (() => {
          if (v1._2.tag === "Nothing") { return Marlowe$dTime.unixEpoch; }
          if (v1._2.tag === "Just") { return v1._2._1; }
          $runtime.fail();
        })();
        const prevTimePlusDuration = adjustInstantIfPossible(dictDuration)(d)($2);
        return Data$dTuple.$Tuple(v1._1, thisTime > $2 ? thisTime : prevTimePlusDuration);
      };
    })(Data$dTuple.$Tuple("discarded", initialTime))(Data$dArray.toUnfoldable(Data$dUnfoldable.unfoldableArray)(orderContentUsingMetadata(initializeWith(Data$dOrd.ordString)(x => Data$dMap$dInternal.lookup(Data$dOrd.ordString)(x)($0))(placeholders.timeoutPlaceholderIds))(orderSet)))),
    valueContent: initializeWith(Data$dOrd.ordString)(x => {
      const $2 = Data$dMap$dInternal.lookup(Data$dOrd.ordString)(x)($1);
      if ($2.tag === "Nothing") { return Data$dBigInt.semiringBigInt.zero; }
      if ($2.tag === "Just") { return $2._1; }
      $runtime.fail();
    })(placeholders.valuePlaceholderIds)
  };
};
const _valueContent = dictStrong => {
  const $0 = Data$dLens$dIso$dNewtype._Newtype()()(dictStrong.Profunctor0());
  return x => $0(Data$dLens$dRecord.prop({reflectSymbol: () => "valueContent"})()()(Type$dProxy.Proxy)(dictStrong)(x));
};
const _timeContent = dictStrong => {
  const $0 = Data$dLens$dIso$dNewtype._Newtype()()(dictStrong.Profunctor0());
  return x => $0(Data$dLens$dRecord.prop({reflectSymbol: () => "timeContent"})()()(Type$dProxy.Proxy)(dictStrong)(x));
};
export {
  Placeholders,
  TemplateContent,
  _timeContent,
  _valueContent,
  adjustInstantIfPossible,
  append,
  eqPlaceholders,
  fillTemplate,
  filterKeys,
  foldMap,
  fromFoldable1,
  getPlaceholderIds,
  identity,
  initializeTemplateContent,
  initializeTemplateContentWithIncreasingTime,
  initializeWith,
  monoidOMap,
  monoidPlaceholders,
  monoidTemplateContent,
  newTypePlaceholders,
  newTypeTemplateContent,
  orderContentUsingMetadata,
  scanl,
  semigroupPlaceholders,
  semigroupTemplateContent,
  showPlaceholders,
  showSet,
  updateTemplateContent
};
