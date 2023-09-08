import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dBitraversable from "../Data.Bitraversable/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dLazy from "../Data.Lazy/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as JSURI from "../JSURI/index.js";
const $RouteError = (tag, _1, _2) => ({tag, _1, _2});
const $RouteParser = (tag, _1, _2) => ({tag, _1, _2});
const $RouteResult = (tag, _1, _2) => ({tag, _1, _2});
const bitraverse = /* #__PURE__ */ (() => Data$dBitraversable.bitraversableTuple.bitraverse(Data$dEither.applicativeEither))();
const traverse = /* #__PURE__ */ (() => Data$dTraversable.traversableArray.traverse(Data$dEither.applicativeEither))();
const lookup = /* #__PURE__ */ Data$dFoldable.lookup(Data$dFoldable.foldableArray)(Data$dEq.eqString);
const genericShowArgsArgument = {genericShowArgs: v => [Data$dShow.showStringImpl(v)]};
const genericShowArgsProduct = /* #__PURE__ */ Data$dShow$dGeneric.genericShowArgsProduct(/* #__PURE__ */ (() => {
  const $0 = Data$dShow.showArrayImpl(Data$dShow.showStringImpl);
  const $1 = Data$dShow.showArrayImpl(v => "(Tuple " + Data$dShow.showStringImpl(v._1) + " " + Data$dShow.showStringImpl(v._2) + ")");
  return {genericShowArgs: v => ["{ hash: " + Data$dShow.showStringImpl(v.hash) + ", params: " + $1(v.params) + ", segments: " + $0(v.segments) + " }"]};
})());
const SuccessIsSymbol = {reflectSymbol: () => "Success"};
const eq1 = /* #__PURE__ */ Data$dEq.eqArrayImpl(x => y => x._1 === y._1 && x._2 === y._2);
const eq2 = /* #__PURE__ */ Data$dEq.eqArrayImpl(Data$dEq.eqStringImpl);
const Expected = value0 => value1 => $RouteError("Expected", value0, value1);
const ExpectedEndOfPath = value0 => $RouteError("ExpectedEndOfPath", value0);
const MissingParam = value0 => $RouteError("MissingParam", value0);
const MalformedURIComponent = value0 => $RouteError("MalformedURIComponent", value0);
const EndOfPath = /* #__PURE__ */ $RouteError("EndOfPath");
const Fail = value0 => $RouteResult("Fail", value0);
const Success = value0 => value1 => $RouteResult("Success", value0, value1);
const Alt = value0 => $RouteParser("Alt", value0);
const Chomp = value0 => $RouteParser("Chomp", value0);
const Prefix = value0 => value1 => $RouteParser("Prefix", value0, value1);
const take = /* #__PURE__ */ $RouteParser(
  "Chomp",
  state => {
    const v = Data$dArray.uncons(state.segments);
    if (v.tag === "Just") { return $RouteResult("Success", {segments: v._1.tail, params: state.params, hash: state.hash}, v._1.head); }
    return $RouteResult("Fail", EndOfPath);
  }
);
const rest = /* #__PURE__ */ $RouteParser("Chomp", state => $RouteResult("Success", {segments: [], params: state.params, hash: state.hash}, state.segments));
const prefix = Prefix;
const parsePath = /* #__PURE__ */ (() => {
  const $0 = Data$dBitraversable.bitraversableTuple.bitraverse(Data$dEither.applicativeEither)((() => {
    const $0 = bitraverse(x => {
      const $0 = x === "" ? [] : Data$dString$dCommon.split("/")(x);
      if ($0.length === 2 && $0[0] === "" && $0[1] === "") { return Data$dEither.$Either("Right", [""]); }
      return traverse(str => {
        const v = JSURI._decodeURIComponent(v => Data$dMaybe.Nothing, Data$dMaybe.Just, str);
        if (v.tag === "Nothing") { return Data$dEither.$Either("Left", $RouteError("MalformedURIComponent", str)); }
        if (v.tag === "Just") { return Data$dEither.$Either("Right", v._1); }
        $runtime.fail();
      })($0);
    })((() => {
      const $0 = traverse((() => {
        const $0 = bitraverse(str => {
          const v = JSURI._decodeURIComponent(v => Data$dMaybe.Nothing, Data$dMaybe.Just, str);
          if (v.tag === "Nothing") { return Data$dEither.$Either("Left", $RouteError("MalformedURIComponent", str)); }
          if (v.tag === "Just") { return Data$dEither.$Either("Right", v._1); }
          $runtime.fail();
        })(str => {
          const v = JSURI._decodeURIComponent(v => Data$dMaybe.Nothing, Data$dMaybe.Just, str);
          if (v.tag === "Nothing") { return Data$dEither.$Either("Left", $RouteError("MalformedURIComponent", str)); }
          if (v.tag === "Just") { return Data$dEither.$Either("Right", v._1); }
          $runtime.fail();
        });
        return x => $0((() => {
          const v = Data$dString$dCodeUnits.indexOf("=")(x);
          if (v.tag === "Just") {
            return Data$dTuple.$Tuple(Data$dString$dCodeUnits.take(v._1)(x), Data$dString$dCodeUnits.drop(v._1 + Data$dString$dCodeUnits.length("=") | 0)(x));
          }
          if (v.tag === "Nothing") { return Data$dTuple.$Tuple(x, ""); }
          $runtime.fail();
        })());
      })());
      return x => $0(x === "" ? [] : Data$dString$dCommon.split("&")(x));
    })());
    return x => $0((() => {
      const v = Data$dString$dCodeUnits.indexOf("?")(x);
      if (v.tag === "Just") { return Data$dTuple.$Tuple(Data$dString$dCodeUnits.take(v._1)(x), Data$dString$dCodeUnits.drop(v._1 + Data$dString$dCodeUnits.length("?") | 0)(x)); }
      if (v.tag === "Nothing") { return Data$dTuple.$Tuple(x, ""); }
      $runtime.fail();
    })());
  })())(Data$dEither.Right);
  return x => {
    const v = Data$dString$dCodeUnits.indexOf("#")(x);
    const $1 = $0((() => {
      if (v.tag === "Just") { return Data$dTuple.$Tuple(Data$dString$dCodeUnits.take(v._1)(x), Data$dString$dCodeUnits.drop(v._1 + Data$dString$dCodeUnits.length("#") | 0)(x)); }
      if (v.tag === "Nothing") { return Data$dTuple.$Tuple(x, ""); }
      $runtime.fail();
    })());
    if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
    if ($1.tag === "Right") { return Data$dEither.$Either("Right", {segments: $1._1._1._1, params: $1._1._1._2, hash: $1._1._2}); }
    $runtime.fail();
  };
})();
const param = key => $RouteParser(
  "Chomp",
  state => {
    const v = lookup(key)(state.params);
    if (v.tag === "Just") { return $RouteResult("Success", state, v._1); }
    return $RouteResult("Fail", $RouteError("MissingParam", key));
  }
);
const $$int = x => {
  const $0 = Data$dInt.fromString(x);
  if ($0.tag === "Nothing") { return Data$dEither.$Either("Left", "Int"); }
  if ($0.tag === "Just") { return Data$dEither.$Either("Right", $0._1); }
  $runtime.fail();
};
const hash = /* #__PURE__ */ $RouteParser("Chomp", state => $RouteResult("Success", state, state.hash));
const genericRouteResult = {
  to: x => {
    if (x.tag === "Inl") { return $RouteResult("Fail", x._1); }
    if (x.tag === "Inr") { return $RouteResult("Success", x._1._1, x._1._2); }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "Fail") { return Data$dGeneric$dRep.$Sum("Inl", x._1); }
    if (x.tag === "Success") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Product(x._1, x._2)); }
    $runtime.fail();
  }
};
const genericRouteError = {
  to: x => {
    if (x.tag === "Inl") { return $RouteError("Expected", x._1._1, x._1._2); }
    if (x.tag === "Inr") {
      if (x._1.tag === "Inl") { return $RouteError("ExpectedEndOfPath", x._1._1); }
      if (x._1.tag === "Inr") {
        if (x._1._1.tag === "Inl") { return $RouteError("MissingParam", x._1._1._1); }
        if (x._1._1.tag === "Inr") {
          if (x._1._1._1.tag === "Inl") { return $RouteError("MalformedURIComponent", x._1._1._1._1); }
          if (x._1._1._1.tag === "Inr") { return EndOfPath; }
        }
      }
    }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "Expected") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, x._2)); }
    if (x.tag === "ExpectedEndOfPath") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", x._1)); }
    if (x.tag === "MissingParam") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", x._1))); }
    if (x.tag === "MalformedURIComponent") {
      return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", x._1))));
    }
    if (x.tag === "EndOfPath") {
      return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments))));
    }
    $runtime.fail();
  }
};
const showRouteError = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument)(genericShowArgsArgument))({
      reflectSymbol: () => "Expected"
    });
    const $1 = Data$dShow$dGeneric.genericShowConstructor(genericShowArgsArgument)({reflectSymbol: () => "ExpectedEndOfPath"});
    const $2 = (() => {
      const $2 = (() => {
        const $2 = Data$dShow$dGeneric.genericShowConstructor(genericShowArgsArgument)({reflectSymbol: () => "MissingParam"});
        const $3 = (() => {
          const $3 = Data$dShow$dGeneric.genericShowConstructor(genericShowArgsArgument)({reflectSymbol: () => "MalformedURIComponent"});
          const $4 = (() => {
            const $4 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "EndOfPath"});
            return {
              "genericShow'": v => {
                if (v.tag === "Inl") { return $3["genericShow'"](v._1); }
                if (v.tag === "Inr") { return $4["genericShow'"](v._1); }
                $runtime.fail();
              }
            };
          })();
          return {
            "genericShow'": v => {
              if (v.tag === "Inl") { return $2["genericShow'"](v._1); }
              if (v.tag === "Inr") { return $4["genericShow'"](v._1); }
              $runtime.fail();
            }
          };
        })();
        return {
          "genericShow'": v => {
            if (v.tag === "Inl") { return $1["genericShow'"](v._1); }
            if (v.tag === "Inr") { return $3["genericShow'"](v._1); }
            $runtime.fail();
          }
        };
      })();
      return {
        "genericShow'": v => {
          if (v.tag === "Inl") { return $0["genericShow'"](v._1); }
          if (v.tag === "Inr") { return $2["genericShow'"](v._1); }
          $runtime.fail();
        }
      };
    })();
    return x => $2["genericShow'"](genericRouteError.from(x));
  })()
};
const genericShowSum = /* #__PURE__ */ (() => {
  const $0 = Data$dShow$dGeneric.genericShowConstructor({genericShowArgs: v => [showRouteError.show(v)]})({reflectSymbol: () => "Fail"});
  return dictGenericShow1 => (
    {
      "genericShow'": v => {
        if (v.tag === "Inl") { return $0["genericShow'"](v._1); }
        if (v.tag === "Inr") { return dictGenericShow1["genericShow'"](v._1); }
        $runtime.fail();
      }
    }
  );
})();
const showRouteResult = dictShow => (
  {
    show: (() => {
      const $0 = genericShowSum(Data$dShow$dGeneric.genericShowConstructor(genericShowArgsProduct({genericShowArgs: v => [dictShow.show(v)]}))(SuccessIsSymbol));
      return x => $0["genericShow'"]((() => {
        if (x.tag === "Fail") { return Data$dGeneric$dRep.$Sum("Inl", x._1); }
        if (x.tag === "Success") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Product(x._1, x._2)); }
        $runtime.fail();
      })());
    })()
  }
);
const functorRouteResult = {
  map: f => m => {
    if (m.tag === "Fail") { return $RouteResult("Fail", m._1); }
    if (m.tag === "Success") { return $RouteResult("Success", m._1, f(m._2)); }
    $runtime.fail();
  }
};
const functorRouteParser = {
  map: f => m => {
    if (m.tag === "Alt") { return $RouteParser("Alt", Data$dFunctor.arrayMap(functorRouteParser.map(f))(m._1)); }
    if (m.tag === "Chomp") {
      return $RouteParser(
        "Chomp",
        x => {
          const $0 = m._1(x);
          if ($0.tag === "Fail") { return $RouteResult("Fail", $0._1); }
          if ($0.tag === "Success") { return $RouteResult("Success", $0._1, f($0._2)); }
          $runtime.fail();
        }
      );
    }
    if (m.tag === "Prefix") { return $RouteParser("Prefix", m._1, functorRouteParser.map(f)(m._2)); }
    $runtime.fail();
  }
};
const eqRouteError = {
  eq: x => y => {
    if (x.tag === "Expected") { return y.tag === "Expected" && x._1 === y._1 && x._2 === y._2; }
    if (x.tag === "ExpectedEndOfPath") { return y.tag === "ExpectedEndOfPath" && x._1 === y._1; }
    if (x.tag === "MissingParam") { return y.tag === "MissingParam" && x._1 === y._1; }
    if (x.tag === "MalformedURIComponent") { return y.tag === "MalformedURIComponent" && x._1 === y._1; }
    return x.tag === "EndOfPath" && y.tag === "EndOfPath";
  }
};
const eqRouteResult = dictEq => (
  {
    eq: x => y => {
      if (x.tag === "Fail") {
        return y.tag === "Fail" && (() => {
          if (x._1.tag === "Expected") { return y._1.tag === "Expected" && x._1._1 === y._1._1 && x._1._2 === y._1._2; }
          if (x._1.tag === "ExpectedEndOfPath") { return y._1.tag === "ExpectedEndOfPath" && x._1._1 === y._1._1; }
          if (x._1.tag === "MissingParam") { return y._1.tag === "MissingParam" && x._1._1 === y._1._1; }
          if (x._1.tag === "MalformedURIComponent") { return y._1.tag === "MalformedURIComponent" && x._1._1 === y._1._1; }
          return x._1.tag === "EndOfPath" && y._1.tag === "EndOfPath";
        })();
      }
      return x.tag === "Success" && y.tag === "Success" && x._1.hash === y._1.hash && eq1(x._1.params)(y._1.params) && eq2(x._1.segments)(y._1.segments) && dictEq.eq(x._2)(y._2);
    }
  }
);
const end = /* #__PURE__ */ $RouteParser(
  "Chomp",
  state => {
    const v = Data$dArray.index(state.segments)(0);
    if (v.tag === "Nothing") { return $RouteResult("Success", state, undefined); }
    if (v.tag === "Just") { return $RouteResult("Fail", $RouteError("ExpectedEndOfPath", v._1)); }
    $runtime.fail();
  }
);
const chompPrefix = pre => state => {
  const v = Data$dArray.index(state.segments)(0);
  if (v.tag === "Just") {
    if (pre === v._1) {
      return $RouteResult("Success", {segments: Data$dArray.slice(1)(state.segments.length)(state.segments), params: state.params, hash: state.hash}, undefined);
    }
    return $RouteResult("Fail", $RouteError("Expected", pre, v._1));
  }
  return $RouteResult("Fail", EndOfPath);
};
const runRouteParser$lazy = /* #__PURE__ */ $runtime.binding(() => {
  const go = go$a0$copy => go$a1$copy => {
    let go$a0 = go$a0$copy, go$a1 = go$a1$copy, go$c = true, go$r;
    while (go$c) {
      const state = go$a0, v = go$a1;
      if (v.tag === "Alt") {
        go$c = false;
        go$r = Data$dFoldable.foldlArray(v1 => v2 => {
          if (v1.tag === "Fail") { return runRouteParser$lazy()(state)(v2); }
          return v1;
        })($RouteResult("Fail", EndOfPath))(v._1);
        continue;
      }
      if (v.tag === "Chomp") {
        go$c = false;
        go$r = v._1(state);
        continue;
      }
      if (v.tag === "Prefix") {
        const v1 = chompPrefix(v._1)(state);
        if (v1.tag === "Fail") {
          go$c = false;
          go$r = $RouteResult("Fail", v1._1);
          continue;
        }
        if (v1.tag === "Success") {
          go$a0 = v1._1;
          go$a1 = v._2;
          continue;
        }
      }
      $runtime.fail();
    }
    return go$r;
  };
  return go;
});
const runRouteParser = /* #__PURE__ */ runRouteParser$lazy();
const lazyRouteParser = {
  defer: k => {
    const parser = Data$dLazy.defer(k);
    return $RouteParser("Chomp", state => runRouteParser(state)(Data$dLazy.force(parser)));
  }
};
const many1 = dictAlt => dictApplicative => p => {
  const go$p = go$p$a0$copy => go$p$a1$copy => {
    let go$p$a0 = go$p$a0$copy, go$p$a1 = go$p$a1$copy, go$p$c = true, go$p$r;
    while (go$p$c) {
      const state = go$p$a0, xs = go$p$a1;
      const v = runRouteParser(state)(p);
      if (v.tag === "Fail") {
        go$p$c = false;
        go$p$r = $RouteResult("Success", state, xs);
        continue;
      }
      if (v.tag === "Success") {
        go$p$a0 = v._1;
        go$p$a1 = dictAlt.alt(xs)(dictApplicative.pure(v._2));
        continue;
      }
      $runtime.fail();
    }
    return go$p$r;
  };
  return $RouteParser(
    "Chomp",
    state => {
      const v = runRouteParser(state)(p);
      if (v.tag === "Fail") { return $RouteResult("Fail", v._1); }
      if (v.tag === "Success") { return go$p(v._1)(dictApplicative.pure(v._2)); }
      $runtime.fail();
    }
  );
};
const run = p => a => {
  const $0 = parsePath(a);
  if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
  if ($0.tag === "Right") {
    const $1 = runRouteParser($0._1)(p);
    if ($1.tag === "Fail") { return Data$dEither.$Either("Left", $1._1); }
    if ($1.tag === "Success") { return Data$dEither.$Either("Right", $1._2); }
  }
  $runtime.fail();
};
const $$boolean = v => {
  if (v === "true") { return Data$dEither.$Either("Right", true); }
  if (v === "false") { return Data$dEither.$Either("Right", false); }
  return Data$dEither.$Either("Left", "Boolean");
};
const as = print => decode => p => $RouteParser(
  "Chomp",
  state => {
    const v = runRouteParser(state)(p);
    if (v.tag === "Fail") { return $RouteResult("Fail", v._1); }
    if (v.tag === "Success") {
      const v1 = decode(v._2);
      if (v1.tag === "Left") { return $RouteResult("Fail", $RouteError("Expected", v1._1, print(v._2))); }
      if (v1.tag === "Right") { return $RouteResult("Success", v._1, v1._1); }
    }
    $runtime.fail();
  }
);
const applyRouteParser = {
  apply: fx => x => $RouteParser(
    "Chomp",
    state => {
      const v = runRouteParser(state)(fx);
      if (v.tag === "Fail") { return $RouteResult("Fail", v._1); }
      if (v.tag === "Success") {
        const $0 = runRouteParser(v._1)(x);
        if ($0.tag === "Fail") { return $RouteResult("Fail", $0._1); }
        if ($0.tag === "Success") { return $RouteResult("Success", $0._1, v._2($0._2)); }
      }
      $runtime.fail();
    }
  ),
  Functor0: () => functorRouteParser
};
const applicativeRouteParser = {pure: x => $RouteParser("Chomp", a => $RouteResult("Success", a, x)), Apply0: () => applyRouteParser};
const altSnoc = v => v1 => {
  if (v1.tag === "Prefix") {
    const $0 = Data$dArray.index(v)(v.length - 1 | 0);
    const $1 = (() => {
      if ($0.tag === "Just") { return $0._1; }
      $runtime.fail();
    })();
    if ($1.tag === "Prefix" && v1._1 === $1._1) {
      const $2 = Data$dArray.init(v);
      return Data$dArray.snoc((() => {
        if ($2.tag === "Just") { return $2._1; }
        $runtime.fail();
      })())($RouteParser("Prefix", v1._1, altRouteParser.alt($1._2)(v1._2)));
    }
  }
  return Data$dArray.snoc(v)(v1);
};
const altRouteParser = {
  alt: v => v1 => {
    if (v.tag === "Alt") {
      if (v1.tag === "Alt") { return $RouteParser("Alt", altAppend(v._1)(v1._1)); }
      return $RouteParser("Alt", altSnoc(v._1)(v1));
    }
    if (v1.tag === "Alt") { return $RouteParser("Alt", altCons(v)(v1._1)); }
    if (v.tag === "Prefix" && v1.tag === "Prefix" && v._1 === v1._1) { return $RouteParser("Prefix", v._1, altRouteParser.alt(v._2)(v1._2)); }
    return $RouteParser("Alt", [v, v1]);
  },
  Functor0: () => functorRouteParser
};
const altCons = v => v1 => {
  if (v.tag === "Prefix") {
    const $0 = Data$dArray.index(v1)(0);
    const $1 = (() => {
      if ($0.tag === "Just") { return $0._1; }
      $runtime.fail();
    })();
    if ($1.tag === "Prefix" && v._1 === $1._1) {
      const $2 = Data$dArray.tail(v1);
      return [
        $RouteParser("Prefix", v._1, altRouteParser.alt(v._2)($1._2)),
        ...(() => {
          if ($2.tag === "Just") { return $2._1; }
          $runtime.fail();
        })()
      ];
    }
  }
  return [v, ...v1];
};
const altAppend = ls => rs => {
  const $0 = Data$dArray.index(ls)(ls.length - 1 | 0);
  const $1 = (() => {
    if ($0.tag === "Just") { return $0._1; }
    $runtime.fail();
  })();
  if ($1.tag === "Prefix") {
    const $2 = Data$dArray.index(rs)(0);
    const $3 = (() => {
      if ($2.tag === "Just") { return $2._1; }
      $runtime.fail();
    })();
    if ($3.tag === "Prefix" && $1._1 === $3._1) {
      const $4 = Data$dArray.tail(rs);
      const rs$p = [
        $RouteParser("Prefix", $1._1, altRouteParser.alt($1._2)($3._2)),
        ...(() => {
          if ($4.tag === "Just") { return $4._1; }
          $runtime.fail();
        })()
      ];
      const $5 = Data$dArray.init(ls);
      const $6 = (() => {
        if ($5.tag === "Just") { return $5._1; }
        $runtime.fail();
      })();
      if ($6.length > 0) { return altAppend($6)(rs$p); }
      return rs$p;
    }
  }
  return [...ls, ...rs];
};
const $$default = x => a => altRouteParser.alt(a)($RouteParser("Chomp", a$1 => $RouteResult("Success", a$1, x)));
const flag = x => altRouteParser.alt(functorRouteParser.map(v => true)(param(x)))($RouteParser("Chomp", a => $RouteResult("Success", a, false)));
const optional = x => altRouteParser.alt(functorRouteParser.map(Data$dMaybe.Just)(x))($RouteParser("Chomp", a => $RouteResult("Success", a, Data$dMaybe.Nothing)));
const many = dictAlternative => {
  const Plus1 = dictAlternative.Plus1();
  const many11 = many1(Plus1.Alt0())(dictAlternative.Applicative0());
  const empty = Plus1.empty;
  return p => altRouteParser.alt(many11(p))($RouteParser("Chomp", a => $RouteResult("Success", a, empty)));
};
export {
  $RouteError,
  $RouteParser,
  $RouteResult,
  Alt,
  Chomp,
  EndOfPath,
  Expected,
  ExpectedEndOfPath,
  Fail,
  MalformedURIComponent,
  MissingParam,
  Prefix,
  Success,
  SuccessIsSymbol,
  altAppend,
  altCons,
  altRouteParser,
  altSnoc,
  applicativeRouteParser,
  applyRouteParser,
  as,
  bitraverse,
  $$boolean as boolean,
  chompPrefix,
  $$default as default,
  end,
  eq1,
  eq2,
  eqRouteError,
  eqRouteResult,
  flag,
  functorRouteParser,
  functorRouteResult,
  genericRouteError,
  genericRouteResult,
  genericShowArgsArgument,
  genericShowArgsProduct,
  genericShowSum,
  hash,
  $$int as int,
  lazyRouteParser,
  lookup,
  many,
  many1,
  optional,
  param,
  parsePath,
  prefix,
  rest,
  run,
  runRouteParser,
  showRouteError,
  showRouteResult,
  take,
  traverse
};
