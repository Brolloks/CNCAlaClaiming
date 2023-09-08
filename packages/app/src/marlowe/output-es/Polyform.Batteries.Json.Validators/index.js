import * as $runtime from "../runtime.js";
import * as Control$dApply from "../Control.Apply/index.js";
import * as Control$dBind from "../Control.Bind/index.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import * as Data$dProfunctor from "../Data.Profunctor/index.js";
import * as Data$dProfunctor$dChoice from "../Data.Profunctor.Choice/index.js";
import * as Data$dSemigroup from "../Data.Semigroup/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTraversableWithIndex from "../Data.TraversableWithIndex/index.js";
import * as Data$dValidation$dSemigroup from "../Data.Validation.Semigroup/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
import * as Polyform$dBatteries from "../Polyform.Batteries/index.js";
import * as Polyform$dBatteries$dGeneric$dEnum from "../Polyform.Batteries.Generic.Enum/index.js";
import * as Polyform$dValidator from "../Polyform.Validator/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const $Segment = (tag, _1) => ({tag, _1});
const choiceValidator = /* #__PURE__ */ Polyform$dValidator.choiceValidator(Data$dSemigroup.semigroupArray);
const applicativeV = /* #__PURE__ */ (() => {
  const applyV1 = Data$dValidation$dSemigroup.applyV(Data$dSemigroup.semigroupArray);
  return {pure: x => Data$dEither.$Either("Right", x), Apply0: () => applyV1};
})();
const sequence = /* #__PURE__ */ (() => Foreign$dObject.traversableWithIndexObject.traverseWithIndex(applicativeV)(v => Foreign$dObject.identity))();
const fromFoldableWithIndex = /* #__PURE__ */ Foreign$dObject.fold(b => a => v => Data$dMap$dInternal.insert(Data$dOrd.ordString)(a)(v)(b))(Data$dMap$dInternal.Leaf);
const sequence1 = /* #__PURE__ */ (() => Data$dTraversable.traversableArray.traverse(applicativeV)(Data$dTraversable.identity))();
const Key = value0 => $Segment("Key", value0);
const Index = value0 => $Segment("Index", value0);
const toBatteriesValidator = dictMonad => Polyform$dValidator.lmapValidator(dictMonad)((() => {
  const $0 = Data$dFunctor.arrayMap(v => v.errors);
  return x => Control$dBind.arrayBind($0(x))(Control$dBind.identity);
})());
const printPath = /* #__PURE__ */ (() => {
  const $0 = Data$dString$dCommon.joinWith(".");
  const $1 = Data$dFunctor.arrayMap(v => {
    if (v.tag === "Key") { return v._1; }
    if (v.tag === "Index") { return Data$dShow.showIntImpl(v._1); }
    $runtime.fail();
  });
  const $2 = Data$dArray.fromFoldableImpl(Data$dList$dTypes.foldableList.foldr);
  return x => $0($1($2(x)));
})();
const mapErrors = f => Data$dFunctor.arrayMap(v => ({path: v.path, errors: Data$dFunctor.arrayMap(v$1 => ({info: f(v$1.info), msg: v$1.msg}))(v.errors)}));
const lmapValidatorVariant = dictMonad => f => Polyform$dValidator.lmapValidator(dictMonad)(mapErrors(f));
const liftErrors = x => [{path: Data$dList$dTypes.Nil, errors: x}];
const jnull = Data$dArgonaut$dCore.jsonNull;
const toNull = x => {
  if (Data$dArgonaut$dCore._caseJson(v => true, v => false, v => false, v => false, v => false, v => false, x)) {
    return Data$dMaybe.$Maybe("Just", Data$dArgonaut$dCore.jsonNull);
  }
  return Data$dMaybe.Nothing;
};
const genericSegment = {
  to: x => {
    if (x.tag === "Inl") { return $Segment("Key", x._1); }
    if (x.tag === "Inr") { return $Segment("Index", x._1); }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "Key") { return Data$dGeneric$dRep.$Sum("Inl", x._1); }
    if (x.tag === "Index") { return Data$dGeneric$dRep.$Sum("Inr", x._1); }
    $runtime.fail();
  }
};
const genericShow = /* #__PURE__ */ (() => {
  const $0 = Data$dShow$dGeneric.genericShowConstructor({genericShowArgs: v => [Data$dShow.showStringImpl(v)]})({reflectSymbol: () => "Key"});
  const $1 = Data$dShow$dGeneric.genericShowConstructor({genericShowArgs: v => [Data$dShow.showIntImpl(v)]})({reflectSymbol: () => "Index"});
  return x => {
    if (x.tag === "Key") { return $0["genericShow'"](x._1); }
    if (x.tag === "Index") { return $1["genericShow'"](x._1); }
    $runtime.fail();
  };
})();
const showSegment = {show: s => genericShow(s)};
const fromValidator = dictMonad => Polyform$dValidator.lmapValidator(dictMonad)(liftErrors);
const fromNull = Unsafe$dCoerce.unsafeCoerce;
const error = () => dictIsSymbol => label => msg => x => [{path: Data$dList$dTypes.Nil, errors: Polyform$dBatteries.error()(dictIsSymbol)(label)(msg)(x)}];
const error3 = /* #__PURE__ */ error()({reflectSymbol: () => "stringExpected"});
const error4 = /* #__PURE__ */ error()({reflectSymbol: () => "objectExpected"});
const error5 = /* #__PURE__ */ error()({reflectSymbol: () => "numberExpected"});
const error6 = /* #__PURE__ */ error()({reflectSymbol: () => "nullExpected"});
const error7 = /* #__PURE__ */ error()({reflectSymbol: () => "intExpected"});
const error10 = /* #__PURE__ */ error()({reflectSymbol: () => "booleanExpected"});
const error11 = /* #__PURE__ */ error()({reflectSymbol: () => "arrayExpected"});
const eqSegment = {
  eq: x => y => {
    if (x.tag === "Key") { return y.tag === "Key" && x._1 === y._1; }
    return x.tag === "Index" && y.tag === "Index" && x._1 === y._1;
  }
};
const eqJNull = {eq: v => v1 => true};
const ordJNull = {compare: v => v1 => Data$dOrdering.EQ, Eq0: () => eqJNull};
const consErrorsPath = segment => Data$dFunctor.arrayMap(v => ({path: Data$dList$dTypes.$List("Cons", segment, v.path), errors: v.errors}));
const field_ = dictMonad => {
  const $0 = dictMonad.Applicative0();
  return name => fv => {
    const $1 = Polyform$dValidator.lmapValidator(dictMonad)(Data$dFunctor.arrayMap(v => ({path: Data$dList$dTypes.$List("Cons", $Segment("Key", name), v.path), errors: v.errors})))(fv);
    return i => dictMonad.Bind1().bind($0.pure(Data$dEither.$Either("Right", Foreign$dObject._lookup(Data$dMaybe.Nothing, Data$dMaybe.Just, name, i))))(res$p => {
      if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
      if (res$p.tag === "Right") { return $1(res$p._1); }
      $runtime.fail();
    });
  };
};
const optionalField = dictMonad => {
  const lcmap = Data$dProfunctor.lcmap((() => {
    const $0 = dictMonad.Bind1().Apply0().Functor0();
    return {
      dimap: f => g => v => x => $0.map(m => {
        if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
        if (m.tag === "Right") { return Data$dEither.$Either("Right", g(m._1)); }
        $runtime.fail();
      })(v(f(x)))
    };
  })());
  const Applicative0 = dictMonad.Applicative0();
  const fanin = Data$dProfunctor$dChoice.fanin((() => {
    const semigroupoidValidator2 = {
      compose: v => v1 => i => dictMonad.Bind1().bind(v1(i))(res$p => {
        if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
        if (res$p.tag === "Right") { return v(res$p._1); }
        $runtime.fail();
      })
    };
    return {identity: x => dictMonad.Applicative0().pure(Data$dEither.$Either("Right", x)), Semigroupoid0: () => semigroupoidValidator2};
  })())(choiceValidator(Applicative0));
  const $0 = Applicative0.Apply0().Functor0();
  const field_1 = field_(dictMonad);
  return name => fv => field_1(name)(lcmap(v2 => {
    if (v2.tag === "Nothing") { return Data$dEither.$Either("Left", undefined); }
    if (v2.tag === "Just") { return Data$dEither.$Either("Right", v2._1); }
    $runtime.fail();
  })(fanin(Polyform$dValidator.applicativeValidator(Applicative0)(Data$dSemigroup.semigroupArray).pure(Data$dMaybe.Nothing))(x => $0.map(m => {
    if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
    if (m.tag === "Right") { return Data$dEither.$Either("Right", Data$dMaybe.$Maybe("Just", m._1)); }
    $runtime.fail();
  })(fv(x)))));
};
const _stringExpected = Type$dProxy.Proxy;
const string = dictMonad => {
  const $0 = dictMonad.Applicative0();
  const $1 = error3(Type$dProxy.Proxy)(x => "String expected but got: " + Data$dArgonaut$dCore.stringify(x));
  return x => $0.pure((() => {
    const $2 = $1(x);
    const $3 = Data$dArgonaut$dCore._caseJson(
      v => Data$dMaybe.Nothing,
      v => Data$dMaybe.Nothing,
      v => Data$dMaybe.Nothing,
      Data$dMaybe.Just,
      v => Data$dMaybe.Nothing,
      v => Data$dMaybe.Nothing,
      x
    );
    if ($3.tag === "Nothing") { return Data$dEither.$Either("Left", $2); }
    if ($3.tag === "Just") { return Data$dEither.$Either("Right", $3._1); }
    $runtime.fail();
  })());
};
const _objectExpected = Type$dProxy.Proxy;
const object = dictMonad => {
  const $0 = dictMonad.Applicative0();
  const $1 = error4(Type$dProxy.Proxy)(x => "Object expected but got: " + Data$dArgonaut$dCore.stringify(x));
  return x => $0.pure((() => {
    const $2 = $1(x);
    const $3 = Data$dArgonaut$dCore._caseJson(
      v => Data$dMaybe.Nothing,
      v => Data$dMaybe.Nothing,
      v => Data$dMaybe.Nothing,
      v => Data$dMaybe.Nothing,
      v => Data$dMaybe.Nothing,
      Data$dMaybe.Just,
      x
    );
    if ($3.tag === "Nothing") { return Data$dEither.$Either("Left", $2); }
    if ($3.tag === "Just") { return Data$dEither.$Either("Right", $3._1); }
    $runtime.fail();
  })());
};
const objectOf = dictMonad => {
  const traverseWithIndex2 = Foreign$dObject.traversableWithIndexObject.traverseWithIndex(dictMonad.Applicative0());
  const object1 = object(dictMonad);
  return v => {
    const $0 = traverseWithIndex2(idx => Polyform$dValidator.lmapValidator(dictMonad)(Data$dFunctor.arrayMap(v$1 => (
      {path: Data$dList$dTypes.$List("Cons", $Segment("Key", idx), v$1.path), errors: v$1.errors}
    )))(v));
    const $1 = (() => {
      const $1 = dictMonad.Bind1().Apply0().Functor0().map(sequence);
      return x => $1($0(x));
    })();
    return i => dictMonad.Bind1().bind(object1(i))(res$p => {
      if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
      if (res$p.tag === "Right") { return $1(res$p._1); }
      $runtime.fail();
    });
  };
};
const mapOf = dictMonad => {
  const $0 = dictMonad.Applicative0();
  const objectOf1 = objectOf(dictMonad);
  return v => {
    const $1 = objectOf1(v);
    return i => dictMonad.Bind1().bind($1(i))(res$p => {
      if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
      if (res$p.tag === "Right") { return $0.pure(Data$dEither.$Either("Right", fromFoldableWithIndex(res$p._1))); }
      $runtime.fail();
    });
  };
};
const _numberExpected = Type$dProxy.Proxy;
const number = dictMonad => {
  const $0 = dictMonad.Applicative0();
  const $1 = error5(Type$dProxy.Proxy)(x => "Number expected but got: " + Data$dArgonaut$dCore.stringify(x));
  return x => $0.pure((() => {
    const $2 = $1(x);
    const $3 = Data$dArgonaut$dCore._caseJson(
      v => Data$dMaybe.Nothing,
      v => Data$dMaybe.Nothing,
      Data$dMaybe.Just,
      v => Data$dMaybe.Nothing,
      v => Data$dMaybe.Nothing,
      v => Data$dMaybe.Nothing,
      x
    );
    if ($3.tag === "Nothing") { return Data$dEither.$Either("Left", $2); }
    if ($3.tag === "Just") { return Data$dEither.$Either("Right", $3._1); }
    $runtime.fail();
  })());
};
const _nullExpected = Type$dProxy.Proxy;
const $$null = dictMonad => {
  const $0 = dictMonad.Applicative0();
  const $1 = error6(Type$dProxy.Proxy)(x => "Null expected but got: " + Data$dArgonaut$dCore.stringify(x));
  return x => $0.pure((() => {
    const $2 = $1(x);
    const $3 = toNull(x);
    if ($3.tag === "Nothing") { return Data$dEither.$Either("Left", $2); }
    if ($3.tag === "Just") { return Data$dEither.$Either("Right", $3._1); }
    $runtime.fail();
  })());
};
const nullable = dictMonad => {
  const Applicative0 = dictMonad.Applicative0();
  const $0 = Polyform$dValidator.applyValidator(Applicative0)(Data$dSemigroup.semigroupArray);
  const null1 = $$null(dictMonad);
  const $1 = Applicative0.Apply0().Functor0();
  return fv => Polyform$dValidator.altValidator(Data$dSemigroup.semigroupArray)(dictMonad).alt($0.apply($0.Functor0().map(v => Control$dApply.identity)(null1))(Polyform$dValidator.applicativeValidator(Applicative0)(Data$dSemigroup.semigroupArray).pure(Data$dMaybe.Nothing)))(x => $1.map(m => {
    if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
    if (m.tag === "Right") { return Data$dEither.$Either("Right", Data$dMaybe.$Maybe("Just", m._1)); }
    $runtime.fail();
  })(fv(x)));
};
const nullableOptionalField = dictMonad => {
  const $0 = dictMonad.Applicative0().Apply0().Functor0();
  const optionalField1 = optionalField(dictMonad);
  const nullable1 = nullable(dictMonad);
  return name => fv => {
    const $1 = optionalField1(name)(nullable1(fv));
    return x => $0.map(m => {
      if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
      if (m.tag === "Right") {
        return Data$dEither.$Either(
          "Right",
          (() => {
            if (m._1.tag === "Just") { return m._1._1; }
            if (m._1.tag === "Nothing") { return Data$dMaybe.Nothing; }
            $runtime.fail();
          })()
        );
      }
      $runtime.fail();
    })($1(x));
  };
};
const _intExpected = Type$dProxy.Proxy;
const $$int = dictMonad => {
  const $0 = dictMonad.Applicative0();
  const $1 = error7(Type$dProxy.Proxy)(x => "Int expected but got: " + Data$dArgonaut$dCore.stringify(x));
  return x => $0.pure((() => {
    const $2 = $1(x);
    const $3 = Data$dArgonaut$dCore._caseJson(
      v => Data$dMaybe.Nothing,
      v => Data$dMaybe.Nothing,
      Data$dMaybe.Just,
      v => Data$dMaybe.Nothing,
      v => Data$dMaybe.Nothing,
      v => Data$dMaybe.Nothing,
      x
    );
    const $4 = (() => {
      if ($3.tag === "Just") { return Data$dInt.fromNumber($3._1); }
      if ($3.tag === "Nothing") { return Data$dMaybe.Nothing; }
      $runtime.fail();
    })();
    if ($4.tag === "Nothing") { return Data$dEither.$Either("Left", $2); }
    if ($4.tag === "Just") { return Data$dEither.$Either("Right", $4._1); }
    $runtime.fail();
  })());
};
const $$enum = dictMonad => {
  const fromValidator1 = Polyform$dValidator.lmapValidator(dictMonad)(liftErrors);
  const validator = Polyform$dBatteries$dGeneric$dEnum.validator(dictMonad.Applicative0());
  const int1 = $$int(dictMonad);
  return dictBoundedEnum => {
    const validator1 = validator(dictBoundedEnum);
    return p => {
      const $0 = fromValidator1(validator1(p));
      return i => dictMonad.Bind1().bind(int1(i))(res$p => {
        if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
        if (res$p.tag === "Right") { return $0(res$p._1); }
        $runtime.fail();
      });
    };
  };
};
const enum$p = dictMonad => {
  const fromValidator1 = Polyform$dValidator.lmapValidator(dictMonad)(liftErrors);
  const validator = Polyform$dBatteries$dGeneric$dEnum.validator(dictMonad.Applicative0());
  const int1 = $$int(dictMonad);
  return dictBoundedEnum => {
    const $0 = fromValidator1(validator(dictBoundedEnum)(Type$dProxy.Proxy));
    return i => dictMonad.Bind1().bind(int1(i))(res$p => {
      if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
      if (res$p.tag === "Right") { return $0(res$p._1); }
      $runtime.fail();
    });
  };
};
const index = dictMonad => {
  const $0 = dictMonad.Applicative0();
  return idx => x => $0.pure((() => {
    const $1 = Data$dFunctor.arrayMap(v => ({path: Data$dList$dTypes.$List("Cons", $Segment("Index", idx), v.path), errors: v.errors}))([
      {
        path: Data$dList$dTypes.Nil,
        errors: Polyform$dBatteries.error()({reflectSymbol: () => "indexMissing"})(Type$dProxy.Proxy)(e => "Given array array: " + Data$dArgonaut$dCore.stringify(Data$dArgonaut$dCore.fromArray(e.arr)) + " is missing an element at index : " + Data$dShow.showIntImpl(e.idx))({
          arr: x,
          idx
        })
      }
    ]);
    const $2 = Data$dArray.index(x)(idx);
    if ($2.tag === "Nothing") { return Data$dEither.$Either("Left", $1); }
    if ($2.tag === "Just") { return Data$dEither.$Either("Right", $2._1); }
    $runtime.fail();
  })());
};
const _fieldMissing = Type$dProxy.Proxy;
const field = dictMonad => {
  const field_1 = field_(dictMonad);
  const $0 = dictMonad.Applicative0();
  return name => fv => field_1(name)((() => {
    const $1 = [
      {
        path: Data$dList$dTypes.Nil,
        errors: Polyform$dBatteries.error()({reflectSymbol: () => "fieldMissing"})(Type$dProxy.Proxy)((() => {
          const $1 = "Object is missing a required field: " + name;
          return v => $1;
        })())(name)
      }
    ];
    return i => dictMonad.Bind1().bind($0.pure((() => {
      if (i.tag === "Nothing") { return Data$dEither.$Either("Left", $1); }
      if (i.tag === "Just") { return Data$dEither.$Either("Right", i._1); }
      $runtime.fail();
    })()))(res$p => {
      if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
      if (res$p.tag === "Right") { return fv(res$p._1); }
      $runtime.fail();
    });
  })());
};
const _booleanExpected = Type$dProxy.Proxy;
const $$boolean = dictMonad => {
  const $0 = dictMonad.Applicative0();
  const $1 = error10(Type$dProxy.Proxy)(x => "Boolean expected but got: " + Data$dArgonaut$dCore.stringify(x));
  return x => $0.pure((() => {
    const $2 = $1(x);
    const $3 = Data$dArgonaut$dCore._caseJson(
      v => Data$dMaybe.Nothing,
      Data$dMaybe.Just,
      v => Data$dMaybe.Nothing,
      v => Data$dMaybe.Nothing,
      v => Data$dMaybe.Nothing,
      v => Data$dMaybe.Nothing,
      x
    );
    if ($3.tag === "Nothing") { return Data$dEither.$Either("Left", $2); }
    if ($3.tag === "Just") { return Data$dEither.$Either("Right", $3._1); }
    $runtime.fail();
  })());
};
const _arrayExpected = Type$dProxy.Proxy;
const array = dictMonad => {
  const $0 = dictMonad.Applicative0();
  const $1 = error11(Type$dProxy.Proxy)(x => "Array expected but got: " + Data$dArgonaut$dCore.stringify(x));
  return x => $0.pure((() => {
    const $2 = $1(x);
    const $3 = Data$dArgonaut$dCore._caseJson(
      v => Data$dMaybe.Nothing,
      v => Data$dMaybe.Nothing,
      v => Data$dMaybe.Nothing,
      v => Data$dMaybe.Nothing,
      Data$dMaybe.Just,
      v => Data$dMaybe.Nothing,
      x
    );
    if ($3.tag === "Nothing") { return Data$dEither.$Either("Left", $2); }
    if ($3.tag === "Just") { return Data$dEither.$Either("Right", $3._1); }
    $runtime.fail();
  })());
};
const arrayOf = dictMonad => {
  const traverseWithIndex2 = Data$dTraversableWithIndex.traversableWithIndexArray.traverseWithIndex(dictMonad.Applicative0());
  const array1 = array(dictMonad);
  return v => {
    const $0 = traverseWithIndex2(idx => Polyform$dValidator.lmapValidator(dictMonad)(Data$dFunctor.arrayMap(v$1 => (
      {path: Data$dList$dTypes.$List("Cons", $Segment("Index", idx), v$1.path), errors: v$1.errors}
    )))(v));
    const $1 = (() => {
      const $1 = dictMonad.Bind1().Apply0().Functor0().map(sequence1);
      return x => $1($0(x));
    })();
    return i => dictMonad.Bind1().bind(array1(i))(res$p => {
      if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
      if (res$p.tag === "Right") { return $1(res$p._1); }
      $runtime.fail();
    });
  };
};
const argonaut = dictMonad => {
  const $0 = dictMonad.Applicative0();
  return dictDecodeJson => x => $0.pure((() => {
    const $1 = dictDecodeJson.decodeJson(x);
    if ($1.tag === "Left") {
      return Data$dEither.$Either(
        "Left",
        [{path: Data$dList$dTypes.Nil, errors: Polyform$dBatteries.error()({reflectSymbol: () => "argonautError"})(Type$dProxy.Proxy)(v => "Argonaut decoding error.")($1._1)}]
      );
    }
    if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1); }
    $runtime.fail();
  })());
};
export {
  $Segment,
  Index,
  Key,
  _arrayExpected,
  _booleanExpected,
  _fieldMissing,
  _intExpected,
  _nullExpected,
  _numberExpected,
  _objectExpected,
  _stringExpected,
  applicativeV,
  argonaut,
  array,
  arrayOf,
  $$boolean as boolean,
  choiceValidator,
  consErrorsPath,
  $$enum as enum,
  enum$p,
  eqJNull,
  eqSegment,
  error,
  error10,
  error11,
  error3,
  error4,
  error5,
  error6,
  error7,
  field,
  field_,
  fromFoldableWithIndex,
  fromNull,
  fromValidator,
  genericSegment,
  genericShow,
  index,
  $$int as int,
  jnull,
  liftErrors,
  lmapValidatorVariant,
  mapErrors,
  mapOf,
  $$null as null,
  nullable,
  nullableOptionalField,
  number,
  object,
  objectOf,
  optionalField,
  ordJNull,
  printPath,
  sequence,
  sequence1,
  showSegment,
  string,
  toBatteriesValidator,
  toNull
};
