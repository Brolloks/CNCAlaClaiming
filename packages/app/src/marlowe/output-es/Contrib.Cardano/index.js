import * as $runtime from "../runtime.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dArgonaut$dDecode$dClass from "../Data.Argonaut.Decode.Class/index.js";
import * as Data$dArgonaut$dDecode$dDecoders from "../Data.Argonaut.Decode.Decoders/index.js";
import * as Data$dArgonaut$dDecode$dError from "../Data.Argonaut.Decode.Error/index.js";
import * as Data$dArgonaut$dEncode$dClass from "../Data.Argonaut.Encode.Class/index.js";
import * as Data$dArgonaut$dEncode$dEncoders from "../Data.Argonaut.Encode.Encoders/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dBigInt from "../Data.BigInt/index.js";
import * as Data$dBigInt$dArgonaut from "../Data.BigInt.Argonaut/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Data$dUnfoldable from "../Data.Unfoldable/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
import * as HexString from "../HexString/index.js";
import * as Web$dEncoding$dTextEncoder from "../Web.Encoding.TextEncoder/index.js";
const $AssetId = (tag, _1, _2) => ({tag, _1, _2});
const $NonAdaAssetId = (_1, _2) => ({tag: "NonAdaAssetId", _1, _2});
const encodeJson1 = /* #__PURE__ */ (() => Data$dArgonaut$dEncode$dClass.encodeJsonArray(Data$dArgonaut$dEncode$dClass.encodeJsonArray(Data$dArgonaut$dEncode$dClass.encodeJsonJson)).encodeJson)();
const decodeJson1 = /* #__PURE__ */ Data$dArgonaut$dDecode$dDecoders.decodeArray(/* #__PURE__ */ Data$dArgonaut$dDecode$dDecoders.decodeArray(Data$dEither.Right));
const for1 = /* #__PURE__ */ (() => {
  const traverse2 = Data$dTraversable.traversableArray.traverse(Data$dEither.applicativeEither);
  return x => f => traverse2(f)(x);
})();
const fromFoldable = /* #__PURE__ */ Foreign$dObject.fromFoldable(Data$dFoldable.foldableArray);
const fold = /* #__PURE__ */ (() => Data$dFoldable.foldableArray.foldMap(Data$dMonoid.monoidArray)(Data$dFoldable.identity))();
const decodeJson2 = /* #__PURE__ */ Data$dArgonaut$dDecode$dDecoders.decodeForeignObject(/* #__PURE__ */ Data$dArgonaut$dDecode$dDecoders.decodeForeignObject(/* #__PURE__ */ Data$dArgonaut$dCore.caseJsonString(/* #__PURE__ */ Data$dEither.$Either(
  "Left",
  /* #__PURE__ */ Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")
))(Data$dEither.Right)));
const for2 = /* #__PURE__ */ (() => {
  const $0 = Foreign$dObject.traversableWithIndexObject.traverseWithIndex(Data$dEither.applicativeEither);
  return x => f => $0(v => f)(x);
})();
const toUnfoldable1 = /* #__PURE__ */ (() => {
  const $0 = Foreign$dObject.toArrayWithKey(Data$dTuple.Tuple);
  return x => Data$dArray.toUnfoldable(Data$dUnfoldable.unfoldableArray)($0(x));
})();
const fromFoldable1 = /* #__PURE__ */ Data$dMap$dInternal.fromFoldable(Data$dOrd.ordString)(Data$dFoldable.foldableArray);
const Quantity = x => x;
const Lovelace = x => x;
const Blake224Hex = x => x;
const PolicyId = x => x;
const AssetName = x => x;
const NonAdaAssetId = value0 => value1 => $NonAdaAssetId(value0, value1);
const NonAdaAssets = x => x;
const AdaAssetId = /* #__PURE__ */ $AssetId("AdaAssetId");
const AssetId = value0 => value1 => $AssetId("AssetId", value0, value1);
const Value = x => x;
const showQuantity = Data$dBigInt.showBigInt;
const showBlake224Hex = Data$dShow.showString;
const showPolicyId = Data$dShow.showString;
const showAssetName = Data$dShow.showString;
const semigroupQuantity = {append: v => v1 => Data$dBigInt.biAdd(v)(v1)};
const semigroupLovelace = {append: v => v1 => Data$dBigInt.biAdd(v)(v1)};
const newtypeQuantity_ = {Coercible0: () => {}};
const newtypeNonAdaAssets_ = {Coercible0: () => {}};
const newtypeAssetName_ = {Coercible0: () => {}};
const monoidQuantity = /* #__PURE__ */ (() => ({mempty: Data$dBigInt.semiringBigInt.zero, Semigroup0: () => semigroupQuantity}))();
const monoidLovelace = /* #__PURE__ */ (() => ({mempty: Data$dBigInt.semiringBigInt.zero, Semigroup0: () => semigroupLovelace}))();
const genericAssetId_ = {
  to: x => {
    if (x.tag === "Inl") { return AdaAssetId; }
    if (x.tag === "Inr") { return $AssetId("AssetId", x._1._1, x._1._2); }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "AdaAssetId") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments); }
    if (x.tag === "AssetId") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Product(x._1, x._2)); }
    $runtime.fail();
  }
};
const showAssetId = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "AdaAssetId"});
    const $1 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct({genericShowArgs: v => [Data$dShow.showStringImpl(v)]})({
      genericShowArgs: v => [Data$dShow.showStringImpl(v)]
    }))({reflectSymbol: () => "AssetId"});
    return x => {
      if (x.tag === "AdaAssetId") { return $0["genericShow'"](Data$dGeneric$dRep.NoArguments); }
      if (x.tag === "AssetId") { return $1["genericShow'"](Data$dGeneric$dRep.$Product(x._1, x._2)); }
      $runtime.fail();
    };
  })()
};
const showValue = /* #__PURE__ */ Data$dMap$dInternal.showMap(showAssetId)(Data$dBigInt.showBigInt);
const eqQuantity = {eq: x => y => Data$dBigInt.biEquals(x)(y)};
const ordQuantity = {compare: x => y => Data$dBigInt.ordBigInt.compare(x)(y), Eq0: () => eqQuantity};
const eqLovelace = {eq: x => y => Data$dBigInt.biEquals(x)(y)};
const ordLovelace = {compare: x => y => Data$dBigInt.ordBigInt.compare(x)(y), Eq0: () => eqLovelace};
const eqBlake224Hex = {eq: x => y => x === y};
const eqPolicyId = {eq: x => y => x === y};
const ordBlake224Hex = {compare: x => y => Data$dOrd.ordString.compare(x)(y), Eq0: () => eqBlake224Hex};
const ordPolicyId = {compare: x => y => Data$dOrd.ordString.compare(x)(y), Eq0: () => eqPolicyId};
const eqAssetName = {eq: x => y => x === y};
const eq5 = /* #__PURE__ */ (() => Data$dMap$dInternal.eqMap({eq: x => y => x._1 === y._1 && x._2 === y._2})(eqQuantity).eq)();
const eqNonAdaAssets = {eq: x => y => eq5(x)(y)};
const ordAssetName = {compare: x => y => Data$dOrd.ordString.compare(x)(y), Eq0: () => eqAssetName};
const ordTuple = /* #__PURE__ */ Data$dTuple.ordTuple(ordPolicyId)(ordAssetName);
const compare4 = /* #__PURE__ */ (() => Data$dMap$dInternal.ordMap(ordTuple)(ordQuantity).compare)();
const sort = /* #__PURE__ */ (() => {
  const compare = Data$dTuple.ordTuple(ordTuple)(ordQuantity).compare;
  return xs => Data$dArray.sortBy(compare)(xs);
})();
const fromFoldable2 = /* #__PURE__ */ Data$dMap$dInternal.fromFoldable(ordTuple)(Data$dFoldable.foldableArray);
const monoidNonAdaAssets = /* #__PURE__ */ Data$dMap$dInternal.monoidSemigroupMap()(ordTuple)(semigroupQuantity);
const ordNonAdaAssets = {compare: x => y => compare4(x)(y), Eq0: () => eqNonAdaAssets};
const semigroupNonAdaAssets = {append: l => r => Data$dMap$dInternal.unionWith(ordTuple)(semigroupQuantity.append)(l)(r)};
const eqAssetId = {
  eq: x => y => {
    if (x.tag === "AdaAssetId") { return y.tag === "AdaAssetId"; }
    return x.tag === "AssetId" && y.tag === "AssetId" && x._1 === y._1 && x._2 === y._2;
  }
};
const eqValue = /* #__PURE__ */ Data$dMap$dInternal.eqMap(eqAssetId)(eqQuantity);
const ordAssetId = {
  compare: x => y => {
    if (x.tag === "AdaAssetId") {
      if (y.tag === "AdaAssetId") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "AdaAssetId") { return Data$dOrdering.GT; }
    if (x.tag === "AssetId" && y.tag === "AssetId") {
      const v = Data$dOrd.ordString.compare(x._1)(y._1);
      if (v === "LT") { return Data$dOrdering.LT; }
      if (v === "GT") { return Data$dOrdering.GT; }
      return Data$dOrd.ordString.compare(x._2)(y._2);
    }
    $runtime.fail();
  },
  Eq0: () => eqAssetId
};
const filter = /* #__PURE__ */ (() => {
  const filterWithKey1 = Data$dMap$dInternal.filterWithKey(ordAssetId);
  return predicate => filterWithKey1(v => predicate);
})();
const fromFoldable4 = /* #__PURE__ */ Data$dMap$dInternal.fromFoldable(ordAssetId)(Data$dFoldable.foldableArray);
const monoidValue = /* #__PURE__ */ Data$dMap$dInternal.monoidSemigroupMap()(ordAssetId)(semigroupQuantity);
const semigroupValue = {append: l => r => Data$dMap$dInternal.unionWith(ordAssetId)(semigroupQuantity.append)(l)(r)};
const encodeJsonQuantity = Data$dBigInt$dArgonaut.encodeJsonBitInt;
const encodeJsonPolicyId = {encodeJson: v => Data$dArgonaut$dCore.fromString(v)};
const encodeJsonAssetName = Data$dArgonaut$dEncode$dClass.encodeJsonJString;
const encodeJsonNonAdaAssets = {
  encodeJson: v => encodeJson1(Data$dFunctor.arrayMap(v1 => [
    Data$dArgonaut$dCore.fromString(v1._1._1),
    Data$dArgonaut$dCore.fromString(v1._1._2),
    Data$dBigInt$dArgonaut.encodeBigInt(v1._2)
  ])(sort(Data$dMap$dInternal.toUnfoldable(Data$dUnfoldable.unfoldableArray)(v))))
};
const decodeJsonQuantity = Data$dBigInt$dArgonaut.decodeJsonBigInt;
const decodeJsonAssetName = Data$dArgonaut$dDecode$dClass.decodeJsonString;
const valueToUnfoldable = dictUnfoldable => v => Data$dMap$dInternal.toUnfoldable(dictUnfoldable)(v);
const valueFromFoldable = dictFoldable => Data$dMap$dInternal.fromFoldable(ordAssetId)(dictFoldable);
const valueAssetIds = v => Data$dFunctor.arrayMap(v1 => v1._1)(Data$dMap$dInternal.toUnfoldable(Data$dUnfoldable.unfoldableArray)(v));
const subtractValues = v => v1 => filter(v2 => Data$dBigInt.ordBigInt.compare(v2)(Data$dBigInt.semiringBigInt.zero) === "GT")(Data$dMap$dInternal.unionWith(ordAssetId)(v2 => v3 => Data$dBigInt.biSub(v2)(v3))(v)(v1));
const selectAsset = v => a => {
  const $0 = Data$dMap$dInternal.lookup(ordAssetId)(a)(v);
  if ($0.tag === "Nothing") { return Data$dBigInt.semiringBigInt.zero; }
  if ($0.tag === "Just") { return $0._1; }
  $runtime.fail();
};
const quantityToLovelace = v => v;
const selectLovelace = x => selectAsset(x)(AdaAssetId);
const policyIdToHexString = v => v;
const nonAdaAssets = v => fromFoldable2(Data$dArray.mapMaybe(x => x)(Data$dFunctor.arrayMap(v1 => {
  if (v1._1.tag === "AdaAssetId") { return Data$dMaybe.Nothing; }
  if (v1._1.tag === "AssetId") { return Data$dMaybe.$Maybe("Just", Data$dTuple.$Tuple(Data$dTuple.$Tuple(v1._1._1, v1._1._2), v1._2)); }
  $runtime.fail();
})(Data$dMap$dInternal.toUnfoldable(Data$dUnfoldable.unfoldableArray)(v))));
const lovelaceToString = v => Data$dBigInt.toString(v);
const lovelaceToQuantity = v => v;
const lovelaceToValue = x => Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, AdaAssetId, x, Data$dMap$dInternal.Leaf);
const lovelaceFromInt = x => Data$dBigInt.fromInt(x);
const isLovelaceOnly = v => {
  const $0 = Data$dMap$dInternal.lookup(ordAssetId)(AdaAssetId)(v);
  return Data$dMap$dInternal.size(v) === 1 && (() => {
    if ($0.tag === "Nothing") { return false; }
    if ($0.tag === "Just") { return true; }
    $runtime.fail();
  })();
};
const blake224Hex = hex => {
  if (Data$dString$dCodeUnits.length(hex) === 56) { return Data$dMaybe.$Maybe("Just", hex); }
  return Data$dMaybe.Nothing;
};
const policyIdFromHexString = str => {
  const $0 = HexString.hex(str);
  if ($0.tag === "Just") {
    if (Data$dString$dCodeUnits.length($0._1) === 56) { return Data$dMaybe.$Maybe("Just", $0._1); }
    return Data$dMaybe.Nothing;
  }
  if ($0.tag === "Nothing") { return Data$dMaybe.Nothing; }
  $runtime.fail();
};
const decodeJsonPolicyId = {
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
    })()(str => {
      const v = policyIdFromHexString(str);
      if (v.tag === "Just") { return Data$dEither.$Either("Right", v._1); }
      if (v.tag === "Nothing") { return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "PolicyId must be a 32-byte hex string")); }
      $runtime.fail();
    });
  }
};
const decodeJsonNonAdaAssets = {
  decodeJson: json => {
    const $0 = decodeJson1(json);
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
      const $1 = for1(v)(v1 => {
        if (v1.length === 3) {
          const $1 = v1[1];
          const $2 = v1[2];
          const $3 = decodeJsonPolicyId.decodeJson(v1[0]);
          return (() => {
            if ($3.tag === "Left") {
              const $4 = $3._1;
              return v$1 => Data$dEither.$Either("Left", $4);
            }
            if ($3.tag === "Right") {
              const $4 = $3._1;
              return f => f($4);
            }
            $runtime.fail();
          })()(policyId => {
            const $4 = Data$dArgonaut$dCore._caseJson(
              v$1 => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
              v$1 => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
              v$1 => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
              Data$dEither.Right,
              v$1 => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
              v$1 => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
              $1
            );
            return (() => {
              if ($4.tag === "Left") {
                const $5 = $4._1;
                return v$1 => Data$dEither.$Either("Left", $5);
              }
              if ($4.tag === "Right") {
                const $5 = $4._1;
                return f => f($5);
              }
              $runtime.fail();
            })()(assetName => {
              const $5 = Data$dBigInt$dArgonaut.decodeJsonBigInt.decodeJson($2);
              return (() => {
                if ($5.tag === "Left") {
                  const $6 = $5._1;
                  return v$1 => Data$dEither.$Either("Left", $6);
                }
                if ($5.tag === "Right") {
                  const $6 = $5._1;
                  return f => f($6);
                }
                $runtime.fail();
              })()(quantity => Data$dEither.$Either("Right", Data$dTuple.$Tuple(Data$dTuple.$Tuple(policyId, assetName), quantity)));
            });
          });
        }
        return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "NonAdaAssets must be an array of [policyId, assetName, quantity]"));
      });
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
      if ($1.tag === "Right") { return Data$dEither.$Either("Right", fromFoldable2($1._1)); }
      $runtime.fail();
    });
  }
};
const assetNameToString = v => HexString.utf8HexToString(v);
const assetNameToHexString = v => v;
const valueToNestedMaps = v => Data$dMap$dInternal.fromFoldableWith(Data$dOrd.ordString)(Data$dFoldable.foldableArray)(Data$dMap$dInternal.unionWith(Data$dOrd.ordString)(Data$dBigInt.biAdd))(Data$dFunctor.arrayMap(v1 => {
  if (v1._1.tag === "AdaAssetId") { return Data$dTuple.$Tuple("", Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, "", v1._2, Data$dMap$dInternal.Leaf)); }
  if (v1._1.tag === "AssetId") { return Data$dTuple.$Tuple(v1._1._1, Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, v1._1._2, v1._2, Data$dMap$dInternal.Leaf)); }
  $runtime.fail();
})(Data$dMap$dInternal.toUnfoldable(Data$dUnfoldable.unfoldableArray)(v)));
const encodeJsonValue = {
  encodeJson: v => Data$dArgonaut$dCore.fromObject(Foreign$dObject._fmapObject(
    fromFoldable(Data$dMap$dInternal.toUnfoldable(Data$dUnfoldable.unfoldableArray)(Data$dMap$dInternal.functorMap.map(x => fromFoldable(Data$dMap$dInternal.toUnfoldable(Data$dUnfoldable.unfoldableArray)(Data$dMap$dInternal.functorMap.map(Data$dBigInt$dArgonaut.toString)(x))))(valueToNestedMaps(v)))),
    Data$dArgonaut$dEncode$dEncoders.encodeForeignObject(Data$dArgonaut$dCore.fromString)
  ))
};
const assetNameFromString = str => {
  const textEncoder = Web$dEncoding$dTextEncoder.new();
  return HexString.encode(Web$dEncoding$dTextEncoder.encode(str)(textEncoder));
};
const assetNameFromHexString = str => {
  const $0 = HexString.hex(str);
  if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0._1); }
  return Data$dMaybe.Nothing;
};
const valueFromNestedMaps = m => {
  const $0 = for1(Data$dMap$dInternal.toUnfoldable(Data$dUnfoldable.unfoldableArray)(Data$dMap$dInternal.functorMap.map(Data$dMap$dInternal.toUnfoldable(Data$dUnfoldable.unfoldableArray))(m)))(v => {
    if (v._1 === "") {
      if (v._2.length === 1 && v._2[0]._1 === "") { return Data$dEither.$Either("Right", [Data$dTuple.$Tuple(AdaAssetId, v._2[0]._2)]); }
      return Data$dEither.$Either("Left", "Only \"\" is allowed as token name for ADA.");
    }
    const v1 = policyIdFromHexString(v._1);
    if (v1.tag === "Nothing") { return Data$dEither.$Either("Left", "Invalid policy ID: " + v._1); }
    if (v1.tag === "Just") {
      const $0 = v1._1;
      return for1(v._2)(v2 => {
        const $1 = "Invalid asset name - expecting hex: " + v2._1;
        const $2 = HexString.hex(v2._1);
        if ($2.tag === "Just") { return Data$dEither.$Either("Right", Data$dTuple.$Tuple($AssetId("AssetId", $0, $2._1), v2._2)); }
        return Data$dEither.$Either("Left", $1);
      });
    }
    $runtime.fail();
  });
  if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
  if ($0.tag === "Right") { return Data$dEither.$Either("Right", fromFoldable4(fold($0._1))); }
  $runtime.fail();
};
const decodeJsonValue = {
  decodeJson: json => {
    const $0 = decodeJson2(json);
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
      const $1 = for2(v)(m => for2(m)(s => {
        const $1 = Data$dBigInt.fromString(s);
        if ($1.tag === "Just") { return Data$dEither.$Either("Right", $1._1); }
        return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Value must be a map of maps of strings representing integers"));
      }));
      return (() => {
        if ($1.tag === "Left") {
          const $2 = $1._1;
          return v$1 => Data$dEither.$Either("Left", $2);
        }
        if ($1.tag === "Right") {
          const $2 = $1._1;
          return f => f($2);
        }
        $runtime.fail();
      })()(obj$p => {
        const $2 = valueFromNestedMaps(fromFoldable1(toUnfoldable1(Foreign$dObject._fmapObject(obj$p, o => fromFoldable1(toUnfoldable1(o))))));
        if ($2.tag === "Left") { return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", $2._1)); }
        if ($2.tag === "Right") { return Data$dEither.$Either("Right", $2._1); }
        $runtime.fail();
      });
    });
  }
};
const assetIdToString = v => {
  if (v.tag === "AdaAssetId") { return ""; }
  if (v.tag === "AssetId") { return v._1; }
  $runtime.fail();
};
export {
  $AssetId,
  $NonAdaAssetId,
  AdaAssetId,
  AssetId,
  AssetName,
  Blake224Hex,
  Lovelace,
  NonAdaAssetId,
  NonAdaAssets,
  PolicyId,
  Quantity,
  Value,
  assetIdToString,
  assetNameFromHexString,
  assetNameFromString,
  assetNameToHexString,
  assetNameToString,
  blake224Hex,
  compare4,
  decodeJson1,
  decodeJson2,
  decodeJsonAssetName,
  decodeJsonNonAdaAssets,
  decodeJsonPolicyId,
  decodeJsonQuantity,
  decodeJsonValue,
  encodeJson1,
  encodeJsonAssetName,
  encodeJsonNonAdaAssets,
  encodeJsonPolicyId,
  encodeJsonQuantity,
  encodeJsonValue,
  eq5,
  eqAssetId,
  eqAssetName,
  eqBlake224Hex,
  eqLovelace,
  eqNonAdaAssets,
  eqPolicyId,
  eqQuantity,
  eqValue,
  filter,
  fold,
  for1,
  for2,
  fromFoldable,
  fromFoldable1,
  fromFoldable2,
  fromFoldable4,
  genericAssetId_,
  isLovelaceOnly,
  lovelaceFromInt,
  lovelaceToQuantity,
  lovelaceToString,
  lovelaceToValue,
  monoidLovelace,
  monoidNonAdaAssets,
  monoidQuantity,
  monoidValue,
  newtypeAssetName_,
  newtypeNonAdaAssets_,
  newtypeQuantity_,
  nonAdaAssets,
  ordAssetId,
  ordAssetName,
  ordBlake224Hex,
  ordLovelace,
  ordNonAdaAssets,
  ordPolicyId,
  ordQuantity,
  ordTuple,
  policyIdFromHexString,
  policyIdToHexString,
  quantityToLovelace,
  selectAsset,
  selectLovelace,
  semigroupLovelace,
  semigroupNonAdaAssets,
  semigroupQuantity,
  semigroupValue,
  showAssetId,
  showAssetName,
  showBlake224Hex,
  showPolicyId,
  showQuantity,
  showValue,
  sort,
  subtractValues,
  toUnfoldable1,
  valueAssetIds,
  valueFromFoldable,
  valueFromNestedMaps,
  valueToNestedMaps,
  valueToUnfoldable
};
