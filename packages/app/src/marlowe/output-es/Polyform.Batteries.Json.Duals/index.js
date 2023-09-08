import * as $runtime from "../runtime.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dProfunctor from "../Data.Profunctor/index.js";
import * as Data$dProfunctor$dChoice from "../Data.Profunctor.Choice/index.js";
import * as Data$dProfunctor$dStar from "../Data.Profunctor.Star/index.js";
import * as Data$dSemigroup from "../Data.Semigroup/index.js";
import * as Data$dSemigroup$dFirst from "../Data.Semigroup.First/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
import * as Polyform$dBatteries from "../Polyform.Batteries/index.js";
import * as Polyform$dBatteries$dGeneric$dEnum from "../Polyform.Batteries.Generic.Enum/index.js";
import * as Polyform$dBatteries$dJson$dValidators from "../Polyform.Batteries.Json.Validators/index.js";
import * as Polyform$dDual from "../Polyform.Dual/index.js";
import * as Polyform$dDual$dRecord from "../Polyform.Dual.Record/index.js";
import * as Polyform$dDual$dVariant from "../Polyform.Dual.Variant/index.js";
import * as Polyform$dValidator from "../Polyform.Validator/index.js";
import * as Polyform$dValidator$dDual$dGeneric from "../Polyform.Validator.Dual.Generic/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const fanin = /* #__PURE__ */ Data$dProfunctor$dChoice.fanin(/* #__PURE__ */ (() => {
  const semigroupoidStar1 = {compose: v => v1 => x => v(v1(x))};
  return {identity: Data$dIdentity.Identity, Semigroupoid0: () => semigroupoidStar1};
})())(/* #__PURE__ */ Data$dProfunctor$dStar.choiceStar(Data$dIdentity.applicativeIdentity));
const traverse = /* #__PURE__ */ (() => {
  const $0 = Foreign$dObject.traversableWithIndexObject.traverseWithIndex(Data$dIdentity.applicativeIdentity);
  return x => $0(v => x);
})();
const semigroupObject = /* #__PURE__ */ (() => ({append: Foreign$dObject.unionWith(Data$dSemigroup$dFirst.semigroupFirst.append)}))();
const traverse1 = /* #__PURE__ */ (() => Data$dTraversable.traversableArray.traverse(Data$dIdentity.applicativeIdentity))();
const toBatteriesDual = dictMonad => {
  const $0 = Polyform$dBatteries$dJson$dValidators.toBatteriesValidator(dictMonad);
  return v => Polyform$dDual.$DualD($0(v._1), v._2);
};
const string = dictMonad => Polyform$dDual.$DualD(Polyform$dBatteries$dJson$dValidators.string(dictMonad), x => Data$dArgonaut$dCore.fromString(x));
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
  const optionalField1 = Polyform$dBatteries$dJson$dValidators.optionalField(dictMonad);
  return label => d => Polyform$dDual.$DualD(
    lcmap(Foreign$dObject.functorObject.map(Unsafe$dCoerce.unsafeCoerce))(optionalField1(label)(d._1)),
    (() => {
      const $0 = fanin(Data$dIdentity.Identity)(d._2);
      return a => {
        const $1 = $0((() => {
          if (a.tag === "Nothing") { return Data$dEither.$Either("Left", Data$dArgonaut$dCore.jsonNull); }
          if (a.tag === "Just") { return Data$dEither.$Either("Right", a._1); }
          $runtime.fail();
        })());
        return (() => {
          const $2 = {};
          $2[label] = $1;
          return $2;
        })();
      };
    })()
  );
};
const objectOf = dictMonad => {
  const objectOf1 = Polyform$dBatteries$dJson$dValidators.objectOf(dictMonad);
  return v => Polyform$dDual.$DualD(
    objectOf1(v._1),
    (() => {
      const $0 = traverse(v._2);
      return x => Data$dArgonaut$dCore.fromObject($0(x));
    })()
  );
};
const object = dictMonad => {
  const $0 = dictMonad.Applicative0().Apply0().Functor0();
  return Polyform$dDual.$DualD(
    (() => {
      const $1 = Polyform$dBatteries$dJson$dValidators.object(dictMonad);
      return x => $0.map(m => {
        if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
        if (m.tag === "Right") { return Data$dEither.$Either("Right", Foreign$dObject._fmapObject(m._1, Data$dSemigroup$dFirst.First)); }
        $runtime.fail();
      })($1(x));
    })(),
    x => Data$dArgonaut$dCore.fromObject(Foreign$dObject._fmapObject(x, v => v))
  );
};
const number = dictMonad => Polyform$dDual.$DualD(Polyform$dBatteries$dJson$dValidators.number(dictMonad), x => Data$dArgonaut$dCore.fromNumber(x));
const nullable = dictMonad => {
  const nullable1 = Polyform$dBatteries$dJson$dValidators.nullable(dictMonad);
  return d => Polyform$dDual.$DualD(
    nullable1(d._1),
    v1 => {
      if (v1.tag === "Just") { return d._2(v1._1); }
      if (v1.tag === "Nothing") { return Data$dArgonaut$dCore.jsonNull; }
      $runtime.fail();
    }
  );
};
const nullableOptionalField = dictMonad => {
  const $0 = dictMonad.Applicative0();
  const optionalField1 = optionalField(dictMonad);
  const nullable1 = nullable(dictMonad);
  return label => d => {
    const $1 = optionalField1(label)(nullable1(d));
    return Polyform$dDual.$DualD(
      i => dictMonad.Bind1().bind($1._1(i))(res$p => {
        if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
        if (res$p.tag === "Right") {
          return $0.pure(Data$dEither.$Either(
            "Right",
            (() => {
              if (res$p._1.tag === "Just") { return res$p._1._1; }
              if (res$p._1.tag === "Nothing") { return Data$dMaybe.Nothing; }
              $runtime.fail();
            })()
          ));
        }
        $runtime.fail();
      }),
      a => $1._2(Data$dMaybe.$Maybe("Just", a))
    );
  };
};
const $$null = dictMonad => Polyform$dDual.$DualD(Polyform$dBatteries$dJson$dValidators.null(dictMonad), x => x);
const noArgs = dictMonad => Polyform$dDual.$DualD(
  Polyform$dValidator.applicativeValidator(dictMonad.Applicative0())(Data$dSemigroup.semigroupArray).pure(Data$dGeneric$dRep.NoArguments),
  v => Data$dArgonaut$dCore.jsonNull
);
const mapOf$p = dictMonad => {
  const mapOf1 = Polyform$dBatteries$dJson$dValidators.mapOf(dictMonad);
  return d => Polyform$dDual.$DualD(
    mapOf1(d._1),
    (() => {
      const $0 = traverse(d._2);
      const $1 = Data$dMap$dInternal.foldableWithIndexMap.foldlWithIndex(k => m => v => Foreign$dObject.mutate($1 => () => {
        $1[k] = v;
        return $1;
      })(m))(Foreign$dObject.empty);
      return x => Data$dArgonaut$dCore.fromObject($0($1(x)));
    })()
  );
};
const mapOf = dictMonad => {
  const mapOf1 = Polyform$dBatteries$dJson$dValidators.mapOf(dictMonad);
  return d => Polyform$dDual.$DualD(
    mapOf1(d._1),
    (() => {
      const $0 = traverse(d._2);
      const $1 = Data$dMap$dInternal.foldableWithIndexMap.foldlWithIndex(k => m => v => Foreign$dObject.mutate($1 => () => {
        $1[k] = v;
        return $1;
      })(m))(Foreign$dObject.empty);
      return x => Data$dArgonaut$dCore.fromObject($0($1(x)));
    })()
  );
};
const lmapDualVariant = dictMonad => f => {
  const $0 = Polyform$dValidator.lmapValidator(dictMonad)(Polyform$dBatteries$dJson$dValidators.mapErrors(f));
  return v => Polyform$dDual.$DualD($0(v._1), v._2);
};
const $$int = dictMonad => Polyform$dDual.$DualD(Polyform$dBatteries$dJson$dValidators.int(dictMonad), x => Data$dArgonaut$dCore.fromNumber(Data$dInt.toNumber(x)));
const insertOptional = dictCons$p => {
  const IsSymbol0 = dictCons$p.IsSymbol0();
  const insert1 = Polyform$dDual$dRecord.insert({IsSymbol0: () => IsSymbol0, Lacks1: () => {}, Cons2: () => {}});
  return dictCons$p1 => {
    const insert2 = insert1(dictCons$p1);
    return dictIsSymbol => dictMonad => {
      const insert3 = insert2((() => {
        const $0 = dictMonad.Applicative0().Apply0().Functor0();
        return {
          map: f => v => x => $0.map(m => {
            if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
            if (m.tag === "Right") { return Data$dEither.$Either("Right", f(m._1)); }
            $runtime.fail();
          })(v(x))
        };
      })());
      const optionalField1 = optionalField(dictMonad);
      return label => dual => insert3(label)(optionalField1(IsSymbol0.reflectSymbol(label))(dual));
    };
  };
};
const fromDual = dictMonad => {
  const $0 = Polyform$dValidator.lmapValidator(dictMonad)(Polyform$dBatteries$dJson$dValidators.liftErrors);
  return v => Polyform$dDual.$DualD($0(v._1), v._2);
};
const field = dictMonad => {
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
  const field1 = Polyform$dBatteries$dJson$dValidators.field(dictMonad);
  return label => d => Polyform$dDual.$DualD(
    lcmap(Foreign$dObject.functorObject.map(Unsafe$dCoerce.unsafeCoerce))(field1(label)(d._1)),
    x => {
      const $0 = d._2(x);
      return (() => {
        const $1 = {};
        $1[label] = $0;
        return $1;
      })();
    }
  );
};
const insert = dictCons$p => {
  const IsSymbol0 = dictCons$p.IsSymbol0();
  const insert1 = Polyform$dDual$dRecord.insert({IsSymbol0: () => IsSymbol0, Lacks1: () => {}, Cons2: () => {}});
  return dictCons$p1 => {
    const insert2 = insert1(dictCons$p1);
    return dictIsSymbol => dictMonad => {
      const insert3 = insert2((() => {
        const $0 = dictMonad.Applicative0().Apply0().Functor0();
        return {
          map: f => v => x => $0.map(m => {
            if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
            if (m.tag === "Right") { return Data$dEither.$Either("Right", f(m._1)); }
            $runtime.fail();
          })(v(x))
        };
      })());
      const field1 = field(dictMonad);
      return label => dual => insert3(label)(field1(IsSymbol0.reflectSymbol(label))(dual));
    };
  };
};
const insertConst = dictCons$p => {
  const IsSymbol0 = dictCons$p.IsSymbol0();
  const insert1 = insert({IsSymbol0: () => IsSymbol0, Lacks1: () => {}, Cons2: () => {}});
  return dictCons$p1 => {
    const insert2 = insert1(dictCons$p1)(IsSymbol0);
    return dictIsSymbol => dictMonad => {
      const $0 = dictMonad.Applicative0();
      const insert3 = insert2(dictMonad);
      return label => a => insert3(label)(Polyform$dDual.$DualD(x => $0.pure(Data$dEither.$Either("Right", a)), v => Data$dArgonaut$dCore.jsonNull));
    };
  };
};
const enum$p = dictMonad => {
  const fromDual1 = fromDual(dictMonad);
  const dual = Polyform$dBatteries$dGeneric$dEnum.dual(dictMonad.Applicative0());
  const $0 = Polyform$dBatteries$dJson$dValidators.int(dictMonad);
  return dictBoundedEnum => {
    const $1 = fromDual1(dual(dictBoundedEnum)(Type$dProxy.Proxy));
    return Polyform$dDual.$DualD(
      i => dictMonad.Bind1().bind($0(i))(res$p => {
        if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
        if (res$p.tag === "Right") { return $1._1(res$p._1); }
        $runtime.fail();
      }),
      a => Data$dArgonaut$dCore.fromNumber(Data$dInt.toNumber($1._2(a)))
    );
  };
};
const $$enum = dictMonad => {
  const fromDual1 = fromDual(dictMonad);
  const dual = Polyform$dBatteries$dGeneric$dEnum.dual(dictMonad.Applicative0());
  const $0 = Polyform$dBatteries$dJson$dValidators.int(dictMonad);
  return dictBoundedEnum => {
    const dual1 = dual(dictBoundedEnum);
    return p => {
      const $1 = fromDual1(dual1(p));
      return Polyform$dDual.$DualD(
        i => dictMonad.Bind1().bind($0(i))(res$p => {
          if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
          if (res$p.tag === "Right") { return $1._1(res$p._1); }
          $runtime.fail();
        }),
        a => Data$dArgonaut$dCore.fromNumber(Data$dInt.toNumber($1._2(a)))
      );
    };
  };
};
const defaultTagging = dictMonad => {
  const Applicative0 = dictMonad.Applicative0();
  const $0 = Applicative0.Apply0().Functor0();
  const functorValidator = {
    map: f => v => x => $0.map(m => {
      if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
      if (m.tag === "Right") { return Data$dEither.$Either("Right", f(m._1)); }
      $runtime.fail();
    })(v(x))
  };
  const diverge = Polyform$dDual.diverge(functorValidator)((() => {
    const $1 = dictMonad.Bind1().Apply0().Functor0();
    return {
      dimap: f => g => v => x => $1.map(m => {
        if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
        if (m.tag === "Right") { return Data$dEither.$Either("Right", g(m._1)); }
        $runtime.fail();
      })(v(f(x)))
    };
  })());
  const field1 = field(dictMonad);
  return Polyform$dDual.applyDualD(Polyform$dValidator.applyValidator(Applicative0)(Data$dSemigroup.semigroupArray))(Data$dIdentity.applicativeIdentity)(semigroupObject).apply((() => {
    const $1 = diverge(v => v.t)(field1("tag")(Polyform$dDual.$DualD(Polyform$dBatteries$dJson$dValidators.string(dictMonad), x => Data$dArgonaut$dCore.fromString(x))));
    return Polyform$dDual.$DualD(functorValidator.map(v => v1 => ({t: v, v: v1}))($1._1), $1._2);
  })())(diverge(v => v.v)(field1("value")(Polyform$dDual.$DualD(x => dictMonad.Applicative0().pure(Data$dEither.$Either("Right", x)), Data$dIdentity.Identity))));
};
const $$boolean = dictMonad => Polyform$dDual.$DualD(Polyform$dBatteries$dJson$dValidators.boolean(dictMonad), x => Data$dArgonaut$dCore.fromBoolean(x));
const arrayOf = dictMonad => {
  const arrayOf1 = Polyform$dBatteries$dJson$dValidators.arrayOf(dictMonad);
  return v => Polyform$dDual.$DualD(
    arrayOf1(v._1),
    (() => {
      const $0 = traverse1(v._2);
      return x => Data$dArgonaut$dCore.fromArray($0(x));
    })()
  );
};
const array = dictMonad => Polyform$dDual.$DualD(Polyform$dBatteries$dJson$dValidators.array(dictMonad), x => Data$dArgonaut$dCore.fromArray(x));
const argonaut = dictMonad => {
  const argonaut1 = Polyform$dBatteries$dJson$dValidators.argonaut(dictMonad);
  return dictEncodeJson => dictDecodeJson => Polyform$dDual.$DualD(argonaut1(dictDecodeJson), x => dictEncodeJson.encodeJson(x));
};
const _incorrectTag = Type$dProxy.Proxy;
const taggedWith = dictMonad => {
  const $0 = v => v1 => i => dictMonad.Bind1().bind(v1(i))(res$p => {
    if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
    if (res$p.tag === "Right") { return v(res$p._1); }
    $runtime.fail();
  });
  const $1 = dictMonad.Applicative0();
  const $2 = (v, v1) => Polyform$dDual.$DualD($0(v._1)(v1._1), a => v1._2(v._2(a)));
  const object1 = object(dictMonad);
  return dictIsSymbol => label => tag => v => {
    const fieldName = dictIsSymbol.reflectSymbol(label);
    return $2(
      $2(
        Polyform$dDual.$DualD(
          $0(v._1)(x => $1.pure(fieldName !== x.t
            ? Data$dEither.$Either(
                "Left",
                [
                  {
                    path: Data$dList$dTypes.Nil,
                    errors: Polyform$dBatteries.error()({reflectSymbol: () => "incorrectTag"})(Type$dProxy.Proxy)(x$1 => "Incorrect tag: " + Data$dShow.showStringImpl(x$1))(x.t)
                  }
                ]
              )
            : Data$dEither.$Either("Right", x.v))),
          x => ({t: fieldName, v: v._2(x)})
        ),
        tag
      ),
      object1
    );
  };
};
const tagged = dictMonad => {
  const taggedWith1 = taggedWith(dictMonad);
  const defaultTagging1 = defaultTagging(dictMonad);
  return dictIsSymbol => {
    const taggedWith2 = taggedWith1(dictIsSymbol);
    return label => taggedWith2(label)(defaultTagging1);
  };
};
const on = dictMonad => {
  const altValidator1 = Polyform$dValidator.altValidator(Data$dSemigroup.semigroupArray)(dictMonad);
  const tagged1 = tagged(dictMonad);
  return () => dictIsSymbol => {
    const on2 = Polyform$dDual$dVariant.on()(dictIsSymbol)(altValidator1);
    return label => d => rest => on2(dictIsSymbol1 => tagged1(dictIsSymbol1))(label)(d)(rest);
  };
};
const sum = dictMonad => {
  const sum1 = Polyform$dValidator$dDual$dGeneric.sum(dictMonad)(Data$dSemigroup.semigroupArray);
  const tagged1 = tagged(dictMonad);
  return dictGeneric => {
    const sum2 = sum1(dictGeneric);
    return dictGDualSum => {
      const sum3 = sum2(dictGDualSum);
      return r => sum3(dictIsSymbol => tagged1(dictIsSymbol))(r);
    };
  };
};
const variant = dictMonad => {
  const variant1 = Polyform$dValidator$dDual$dGeneric.variant(dictMonad)()(Data$dSemigroup.semigroupArray);
  const tagged1 = tagged(dictMonad);
  return () => dictGDualVariant => variant1(dictGDualVariant)(dictIsSymbol => tagged1(dictIsSymbol));
};
export {
  _incorrectTag,
  argonaut,
  array,
  arrayOf,
  $$boolean as boolean,
  defaultTagging,
  $$enum as enum,
  enum$p,
  fanin,
  field,
  fromDual,
  insert,
  insertConst,
  insertOptional,
  $$int as int,
  lmapDualVariant,
  mapOf,
  mapOf$p,
  noArgs,
  $$null as null,
  nullable,
  nullableOptionalField,
  number,
  object,
  objectOf,
  on,
  optionalField,
  semigroupObject,
  string,
  sum,
  tagged,
  taggedWith,
  toBatteriesDual,
  traverse,
  traverse1,
  variant
};
