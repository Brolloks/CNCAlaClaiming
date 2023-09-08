import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dHTTP$dMethod from "../Data.HTTP.Method/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dLazy from "../Data.Lazy/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Data$dString$dCaseInsensitive from "../Data.String.CaseInsensitive/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Isomers$dHTTP$dRequest$dHeaders$dAccept$dMediaPattern from "../Isomers.HTTP.Request.Headers.Accept.MediaPattern/index.js";
import * as Isomers$dRequest$dDuplex$dPath from "../Isomers.Request.Duplex.Path/index.js";
const $Parser = (tag, _1, _2) => ({tag, _1, _2});
const $ParsingError = (tag, _1, _2) => ({tag, _1, _2});
const $Result = (tag, _1, _2) => ({tag, _1, _2});
const genericShowArgsArgument = {genericShowArgs: v => [Data$dShow.showStringImpl(v)]};
const genericShowArgsArgument1 = {genericShowArgs: v => ["(CaseInsensitiveString " + Data$dShow.showStringImpl(v) + ")"]};
const lookup = /* #__PURE__ */ Data$dFoldable.lookup(Data$dFoldable.foldableArray)(Data$dEq.eqString);
const $$delete = /* #__PURE__ */ Data$dArray.delete({eq: x => y => x._1 === y._1 && x._2 === y._2});
const BodyAlreadyConsumed = /* #__PURE__ */ $ParsingError("BodyAlreadyConsumed");
const BodyParsingError = value0 => $ParsingError("BodyParsingError", value0);
const Expected = value0 => value1 => $ParsingError("Expected", value0, value1);
const ExpectedEndOfPath = value0 => $ParsingError("ExpectedEndOfPath", value0);
const ExpectedMethod = value0 => value1 => $ParsingError("ExpectedMethod", value0, value1);
const ExpectedHeaderValue = value0 => value1 => $ParsingError("ExpectedHeaderValue", value0, value1);
const MissingHeader = value0 => $ParsingError("MissingHeader", value0);
const MissingParam = value0 => $ParsingError("MissingParam", value0);
const InnacceptableMediaType = value0 => value1 => $ParsingError("InnacceptableMediaType", value0, value1);
const EndOfPath = /* #__PURE__ */ $ParsingError("EndOfPath");
const Fail = value0 => $Result("Fail", value0);
const Success = value0 => value1 => $Result("Success", value0, value1);
const Alt = value0 => $Parser("Alt", value0);
const Chomp = value0 => $Parser("Chomp", value0);
const Prefix = value0 => value1 => $Parser("Prefix", value0, value1);
const Method = value0 => value1 => $Parser("Method", value0, value1);
const genericParsingError_ = {
  to: x => {
    if (x.tag === "Inl") { return BodyAlreadyConsumed; }
    if (x.tag === "Inr") {
      if (x._1.tag === "Inl") { return $ParsingError("BodyParsingError", x._1._1); }
      if (x._1.tag === "Inr") {
        if (x._1._1.tag === "Inl") { return $ParsingError("Expected", x._1._1._1._1, x._1._1._1._2); }
        if (x._1._1.tag === "Inr") {
          if (x._1._1._1.tag === "Inl") { return $ParsingError("ExpectedEndOfPath", x._1._1._1._1); }
          if (x._1._1._1.tag === "Inr") {
            if (x._1._1._1._1.tag === "Inl") { return $ParsingError("ExpectedMethod", x._1._1._1._1._1._1, x._1._1._1._1._1._2); }
            if (x._1._1._1._1.tag === "Inr") {
              if (x._1._1._1._1._1.tag === "Inl") { return $ParsingError("ExpectedHeaderValue", x._1._1._1._1._1._1._1, x._1._1._1._1._1._1._2); }
              if (x._1._1._1._1._1.tag === "Inr") {
                if (x._1._1._1._1._1._1.tag === "Inl") { return $ParsingError("MissingHeader", x._1._1._1._1._1._1._1); }
                if (x._1._1._1._1._1._1.tag === "Inr") {
                  if (x._1._1._1._1._1._1._1.tag === "Inl") { return $ParsingError("MissingParam", x._1._1._1._1._1._1._1._1); }
                  if (x._1._1._1._1._1._1._1.tag === "Inr") {
                    if (x._1._1._1._1._1._1._1._1.tag === "Inl") {
                      return $ParsingError("InnacceptableMediaType", x._1._1._1._1._1._1._1._1._1._1, x._1._1._1._1._1._1._1._1._1._2);
                    }
                    if (x._1._1._1._1._1._1._1._1.tag === "Inr") { return EndOfPath; }
                  }
                }
              }
            }
          }
        }
      }
    }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "BodyAlreadyConsumed") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments); }
    if (x.tag === "BodyParsingError") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", x._1)); }
    if (x.tag === "Expected") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, x._2)))); }
    if (x.tag === "ExpectedEndOfPath") {
      return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", x._1))));
    }
    if (x.tag === "ExpectedMethod") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, x._2)))))
      );
    }
    if (x.tag === "ExpectedHeaderValue") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, x._2)))))
        )
      );
    }
    if (x.tag === "MissingHeader") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", x._1)))))
        )
      );
    }
    if (x.tag === "MissingParam") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", x._1)))))
          )
        )
      );
    }
    if (x.tag === "InnacceptableMediaType") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum(
              "Inr",
              Data$dGeneric$dRep.$Sum(
                "Inr",
                Data$dGeneric$dRep.$Sum(
                  "Inr",
                  Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, x._2))))
                )
              )
            )
          )
        )
      );
    }
    if (x.tag === "EndOfPath") {
      return Data$dGeneric$dRep.$Sum(
        "Inr",
        Data$dGeneric$dRep.$Sum(
          "Inr",
          Data$dGeneric$dRep.$Sum(
            "Inr",
            Data$dGeneric$dRep.$Sum(
              "Inr",
              Data$dGeneric$dRep.$Sum(
                "Inr",
                Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments))))
              )
            )
          )
        )
      );
    }
    $runtime.fail();
  }
};
const showParsingError = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "BodyAlreadyConsumed"});
    const $1 = Data$dShow$dGeneric.genericShowConstructor(genericShowArgsArgument)({reflectSymbol: () => "BodyParsingError"});
    const $2 = (() => {
      const $2 = (() => {
        const $2 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument)(genericShowArgsArgument))({
          reflectSymbol: () => "Expected"
        });
        const $3 = (() => {
          const $3 = Data$dShow$dGeneric.genericShowConstructor(genericShowArgsArgument)({reflectSymbol: () => "ExpectedEndOfPath"});
          const $4 = (() => {
            const $4 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument)(genericShowArgsArgument))({
              reflectSymbol: () => "ExpectedMethod"
            });
            const $5 = (() => {
              const $5 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument1)(genericShowArgsArgument))({
                reflectSymbol: () => "ExpectedHeaderValue"
              });
              const $6 = (() => {
                const $6 = Data$dShow$dGeneric.genericShowConstructor(genericShowArgsArgument1)({reflectSymbol: () => "MissingHeader"});
                const $7 = (() => {
                  const $7 = Data$dShow$dGeneric.genericShowConstructor(genericShowArgsArgument)({reflectSymbol: () => "MissingParam"});
                  const $8 = (() => {
                    const $8 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct({
                      genericShowArgs: v => ["(MediaType " + Data$dShow.showStringImpl(v) + ")"]
                    })({genericShowArgs: v => [Isomers$dHTTP$dRequest$dHeaders$dAccept$dMediaPattern.showMediaPattern.show(v)]}))({reflectSymbol: () => "InnacceptableMediaType"});
                    const $9 = (() => {
                      const $9 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "EndOfPath"});
                      return {
                        "genericShow'": v => {
                          if (v.tag === "Inl") { return $8["genericShow'"](v._1); }
                          if (v.tag === "Inr") { return $9["genericShow'"](v._1); }
                          $runtime.fail();
                        }
                      };
                    })();
                    return {
                      "genericShow'": v => {
                        if (v.tag === "Inl") { return $7["genericShow'"](v._1); }
                        if (v.tag === "Inr") { return $9["genericShow'"](v._1); }
                        $runtime.fail();
                      }
                    };
                  })();
                  return {
                    "genericShow'": v => {
                      if (v.tag === "Inl") { return $6["genericShow'"](v._1); }
                      if (v.tag === "Inr") { return $8["genericShow'"](v._1); }
                      $runtime.fail();
                    }
                  };
                })();
                return {
                  "genericShow'": v => {
                    if (v.tag === "Inl") { return $5["genericShow'"](v._1); }
                    if (v.tag === "Inr") { return $7["genericShow'"](v._1); }
                    $runtime.fail();
                  }
                };
              })();
              return {
                "genericShow'": v => {
                  if (v.tag === "Inl") { return $4["genericShow'"](v._1); }
                  if (v.tag === "Inr") { return $6["genericShow'"](v._1); }
                  $runtime.fail();
                }
              };
            })();
            return {
              "genericShow'": v => {
                if (v.tag === "Inl") { return $3["genericShow'"](v._1); }
                if (v.tag === "Inr") { return $5["genericShow'"](v._1); }
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
    return x => $2["genericShow'"](genericParsingError_.from(x));
  })()
};
const eqParsingError = {
  eq: x => y => {
    if (x.tag === "BodyAlreadyConsumed") { return y.tag === "BodyAlreadyConsumed"; }
    if (x.tag === "BodyParsingError") { return y.tag === "BodyParsingError" && x._1 === y._1; }
    if (x.tag === "Expected") { return y.tag === "Expected" && x._1 === y._1 && x._2 === y._2; }
    if (x.tag === "ExpectedEndOfPath") { return y.tag === "ExpectedEndOfPath" && x._1 === y._1; }
    if (x.tag === "ExpectedMethod") { return y.tag === "ExpectedMethod" && x._1 === y._1 && x._2 === y._2; }
    if (x.tag === "ExpectedHeaderValue") { return y.tag === "ExpectedHeaderValue" && Data$dString$dCommon.toLower(x._1) === Data$dString$dCommon.toLower(y._1) && x._2 === y._2; }
    if (x.tag === "MissingHeader") { return y.tag === "MissingHeader" && Data$dString$dCommon.toLower(x._1) === Data$dString$dCommon.toLower(y._1); }
    if (x.tag === "MissingParam") { return y.tag === "MissingParam" && x._1 === y._1; }
    if (x.tag === "InnacceptableMediaType") {
      return y.tag === "InnacceptableMediaType" && x._1 === y._1 && (() => {
        if (x._2.tag === "ProperMediaType") { return y._2.tag === "ProperMediaType" && x._2._1 === y._2._1; }
        if (x._2.tag === "AnySubtype") { return y._2.tag === "AnySubtype" && x._2._1 === y._2._1; }
        return x._2.tag === "AnyMedia" && y._2.tag === "AnyMedia";
      })();
    }
    return x.tag === "EndOfPath" && y.tag === "EndOfPath";
  }
};
const take = /* #__PURE__ */ $Parser(
  "Chomp",
  state => Effect$dAff._pure((() => {
    const v = Data$dArray.uncons(state.path.segments);
    if (v.tag === "Just") {
      return $Result(
        "Success",
        {
          body: state.body,
          headers: state.headers,
          httpVersion: state.httpVersion,
          method: state.method,
          path: {segments: v._1.tail, params: state.path.params, hash: state.path.hash},
          _fullPath: state._fullPath
        },
        v._1.head
      );
    }
    return $Result("Fail", EndOfPath);
  })())
);
const rest = /* #__PURE__ */ $Parser(
  "Chomp",
  state => Effect$dAff._pure($Result(
    "Success",
    {
      body: state.body,
      headers: state.headers,
      httpVersion: state.httpVersion,
      method: state.method,
      path: {segments: [], params: state.path.params, hash: state.path.hash},
      _fullPath: state._fullPath
    },
    state.path.segments
  ))
);
const prefix = Prefix;
const params = /* #__PURE__ */ $Parser("Chomp", state => Effect$dAff._pure($Result("Success", state, state.path.params)));
const paramLookup = key => $Parser(
  "Chomp",
  state => Effect$dAff._pure((() => {
    const v = lookup(key)(state.path.params);
    if (v.tag === "Just") { return $Result("Success", state, v._1); }
    return $Result("Fail", $ParsingError("MissingParam", key));
  })())
);
const param = key => $Parser(
  "Chomp",
  state => Effect$dAff._pure((() => {
    const v = lookup(key)(state.path.params);
    if (v.tag === "Just") {
      return $Result(
        "Success",
        {
          path: {params: $$delete(Data$dTuple.$Tuple(key, v._1))(state.path.params), hash: state.path.hash, segments: state.path.segments},
          _fullPath: state._fullPath,
          body: state.body,
          headers: state.headers,
          httpVersion: state.httpVersion,
          method: state.method
        },
        v._1
      );
    }
    return $Result("Fail", $ParsingError("MissingParam", key));
  })())
);
const optHeader = name => $Parser(
  "Chomp",
  state => Effect$dAff._pure($Result("Success", state, Data$dMap$dInternal.lookup(Data$dString$dCaseInsensitive.ordCaseInsensitiveString)(name)(Data$dLazy.force(state.headers))))
);
const method = x => Method(Data$dHTTP$dMethod.print(Data$dEither.$Either("Left", x)));
const $$int = x => {
  const $0 = Data$dInt.fromString(x);
  if ($0.tag === "Nothing") { return Data$dEither.$Either("Left", "Int"); }
  if ($0.tag === "Just") { return Data$dEither.$Either("Right", $0._1); }
  $runtime.fail();
};
const hash = /* #__PURE__ */ $Parser("Chomp", state => Effect$dAff._pure($Result("Success", state, state.path.hash)));
const genericResult = {
  to: x => {
    if (x.tag === "Inl") { return $Result("Fail", x._1); }
    if (x.tag === "Inr") { return $Result("Success", x._1._1, x._1._2); }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "Fail") { return Data$dGeneric$dRep.$Sum("Inl", x._1); }
    if (x.tag === "Success") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Product(x._1, x._2)); }
    $runtime.fail();
  }
};
const functorResult = {
  map: f => m => {
    if (m.tag === "Fail") { return $Result("Fail", m._1); }
    if (m.tag === "Success") { return $Result("Success", m._1, f(m._2)); }
    $runtime.fail();
  }
};
const functorParser = {
  map: f => m => {
    if (m.tag === "Alt") { return $Parser("Alt", Data$dFunctor.arrayMap(functorParser.map(f))(m._1)); }
    if (m.tag === "Chomp") {
      return $Parser(
        "Chomp",
        (() => {
          const $0 = Effect$dAff._map(m$1 => {
            if (m$1.tag === "Fail") { return $Result("Fail", m$1._1); }
            if (m$1.tag === "Success") { return $Result("Success", m$1._1, f(m$1._2)); }
            $runtime.fail();
          });
          return x => $0(m._1(x));
        })()
      );
    }
    if (m.tag === "Prefix") { return $Parser("Prefix", m._1, functorParser.map(f)(m._2)); }
    if (m.tag === "Method") { return $Parser("Method", m._1, functorParser.map(f)(m._2)); }
    $runtime.fail();
  }
};
const fullPath = /* #__PURE__ */ $Parser("Chomp", state => Effect$dAff._pure($Result("Success", state, state._fullPath)));
const end = /* #__PURE__ */ $Parser(
  "Chomp",
  state => Effect$dAff._pure((() => {
    const v = Data$dArray.index(state.path.segments)(0);
    if (v.tag === "Nothing") { return $Result("Success", state, undefined); }
    if (v.tag === "Just") { return $Result("Fail", $ParsingError("ExpectedEndOfPath", v._1)); }
    $runtime.fail();
  })())
);
const chompPrefix = pre => state => {
  const v = Data$dArray.index(state.path.segments)(0);
  if (v.tag === "Just") {
    if (pre === v._1) {
      return $Result(
        "Success",
        {
          body: state.body,
          headers: state.headers,
          httpVersion: state.httpVersion,
          method: state.method,
          path: {segments: Data$dArray.slice(1)(state.path.segments.length)(state.path.segments), params: state.path.params, hash: state.path.hash},
          _fullPath: state._fullPath
        },
        undefined
      );
    }
    return $Result("Fail", $ParsingError("Expected", pre, v._1));
  }
  return $Result("Fail", EndOfPath);
};
const runParser$lazy = /* #__PURE__ */ $runtime.binding(() => {
  const go = go$a0$copy => go$a1$copy => {
    let go$a0 = go$a0$copy, go$a1 = go$a1$copy, go$c = true, go$r;
    while (go$c) {
      const state = go$a0, v = go$a1;
      if (v.tag === "Alt") {
        go$c = false;
        go$r = Data$dFoldable.foldlArray(acc => p => Effect$dAff._bind(acc)(v2 => {
          if (v2.tag === "Fail") { return runParser$lazy()(state)(p); }
          return Effect$dAff._pure(v2);
        }))(Effect$dAff._pure($Result("Fail", EndOfPath)))(v._1);
        continue;
      }
      if (v.tag === "Chomp") {
        go$c = false;
        go$r = Effect$dAff._bind(v._1(state))(res => Effect$dAff._pure(res));
        continue;
      }
      if (v.tag === "Method") {
        if (state.method !== v._1) {
          go$c = false;
          go$r = Effect$dAff._pure($Result("Fail", $ParsingError("ExpectedMethod", v._1, state.method)));
          continue;
        }
        go$a0 = state;
        go$a1 = v._2;
        continue;
      }
      if (v.tag === "Prefix") {
        const v1 = chompPrefix(v._1)(state);
        if (v1.tag === "Fail") {
          go$c = false;
          go$r = Effect$dAff._pure($Result("Fail", v1._1));
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
const runParser = /* #__PURE__ */ runParser$lazy();
const lazyParser = {
  defer: k => {
    const parser = Data$dLazy.defer(k);
    return $Parser("Chomp", state => runParser(state)(Data$dLazy.force(parser)));
  }
};
const many1 = dictAlt => dictApplicative => p => {
  const go$p = state => xs => Effect$dAff._bind(runParser(state)(p))(v => {
    if (v.tag === "Fail") { return Effect$dAff._pure($Result("Success", state, xs)); }
    if (v.tag === "Success") { return go$p(v._1)(dictAlt.alt(xs)(dictApplicative.pure(v._2))); }
    $runtime.fail();
  });
  return $Parser(
    "Chomp",
    state => Effect$dAff._bind(runParser(state)(p))(v => {
      if (v.tag === "Fail") { return Effect$dAff._pure($Result("Fail", v._1)); }
      if (v.tag === "Success") { return go$p(v._1)(dictApplicative.pure(v._2)); }
      $runtime.fail();
    })
  );
};
const parserBind = p => f => $Parser(
  "Chomp",
  state => Effect$dAff._bind(runParser(state)(p))(v => {
    if (v.tag === "Fail") { return Effect$dAff._pure($Result("Fail", v._1)); }
    if (v.tag === "Success") {
      const v1 = f(v._2);
      if (v1.tag === "Left") { return Effect$dAff._pure($Result("Fail", v1._1)); }
      if (v1.tag === "Right") { return Effect$dAff._pure($Result("Success", v._1, v1._1)); }
    }
    $runtime.fail();
  })
);
const header = name => parserBind(optHeader(name))(v => {
  if (v.tag === "Just") { return Data$dEither.$Either("Right", v._1); }
  return Data$dEither.$Either("Left", $ParsingError("MissingHeader", name));
});
const run = p => x => Effect$dAff._map(v => {
  if (v.tag === "Fail") { return Data$dEither.$Either("Left", v._1); }
  if (v.tag === "Success") { return Data$dEither.$Either("Right", v._2); }
  $runtime.fail();
})(runParser({body: x.body, headers: x.headers, httpVersion: x.httpVersion, method: x.method, _fullPath: x.path, path: Isomers$dRequest$dDuplex$dPath.parse(x.path)})(p));
const $$boolean = v => {
  if (v === "true") { return Data$dEither.$Either("Right", true); }
  if (v === "false") { return Data$dEither.$Either("Right", false); }
  return Data$dEither.$Either("Left", "Boolean");
};
const body = f => $Parser(
  "Chomp",
  state => {
    if (state.body.tag === "Just") {
      return Effect$dAff._bind(f(state.body._1))(v => {
        if (v.tag === "Right") {
          return Effect$dAff._pure($Result(
            "Success",
            {body: Data$dMaybe.Nothing, _fullPath: state._fullPath, headers: state.headers, httpVersion: state.httpVersion, method: state.method, path: state.path},
            v._1
          ));
        }
        if (v.tag === "Left") { return Effect$dAff._pure($Result("Fail", $ParsingError("BodyParsingError", v._1))); }
        $runtime.fail();
      });
    }
    if (state.body.tag === "Nothing") { return Effect$dAff._pure($Result("Fail", BodyAlreadyConsumed)); }
    $runtime.fail();
  }
);
const as = v => p => parserBind(p)(a => {
  const v1 = v.parse(a);
  if (v1.tag === "Left") { return Data$dEither.$Either("Left", $ParsingError("Expected", v1._1, v.show(a))); }
  if (v1.tag === "Right") { return Data$dEither.$Either("Right", v1._1); }
  $runtime.fail();
});
const applyParser = {
  apply: fx => x => $Parser(
    "Chomp",
    state => Effect$dAff._bind(runParser(state)(fx))(v => {
      if (v.tag === "Fail") { return Effect$dAff._pure($Result("Fail", v._1)); }
      if (v.tag === "Success") {
        return Effect$dAff._map(m => {
          if (m.tag === "Fail") { return $Result("Fail", m._1); }
          if (m.tag === "Success") { return $Result("Success", m._1, v._2(m._2)); }
          $runtime.fail();
        })(runParser(v._1)(x));
      }
      $runtime.fail();
    })
  ),
  Functor0: () => functorParser
};
const applicativeParser = {pure: a => $Parser("Chomp", state => Effect$dAff._pure($Result("Success", state, a))), Apply0: () => applyParser};
const altSnoc = v => v1 => {
  const v2 = v3 => {
    const v4 = v5 => {
      if (v1.tag === "Method") { const $0 = Data$dArray.index(v)(v.length - 1 | 0); }
      return Data$dArray.snoc(v)(v1);
    };
    if (v1.tag === "Method") {
      const $0 = Data$dArray.index(v)(v.length - 1 | 0);
      const $1 = (() => {
        if ($0.tag === "Just") { return $0._1; }
        $runtime.fail();
      })();
      if ($1.tag === "Method" && v1._1 === $1._1) {
        const $2 = Data$dArray.init(v);
        return Data$dArray.snoc((() => {
          if ($2.tag === "Just") { return $2._1; }
          $runtime.fail();
        })())($Parser("Method", v1._1, altParser.alt($1._2)(v1._2)));
      }
    }
    return v4(true);
  };
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
      })())($Parser("Prefix", v1._1, altParser.alt($1._2)(v1._2)));
    }
  }
  return v2(true);
};
const altParser = {
  alt: v => v1 => {
    if (v.tag === "Alt") {
      if (v1.tag === "Alt") { return $Parser("Alt", altAppend(v._1)(v1._1)); }
      return $Parser("Alt", altSnoc(v._1)(v1));
    }
    if (v1.tag === "Alt") { return $Parser("Alt", altCons(v)(v1._1)); }
    if (v.tag === "Prefix") {
      if (v1.tag === "Prefix" && v._1 === v1._1) { return $Parser("Prefix", v._1, altParser.alt(v._2)(v1._2)); }
      return $Parser("Alt", [v, v1]);
    }
    if (v.tag === "Method" && v1.tag === "Method" && v._1 === v1._1) { return $Parser("Method", v._1, altParser.alt(v._2)(v1._2)); }
    return $Parser("Alt", [v, v1]);
  },
  Functor0: () => functorParser
};
const altCons = v => v1 => {
  const v2 = v3 => {
    if (v.tag === "Method") {
      const $0 = Data$dArray.index(v1)(0);
      const $1 = (() => {
        if ($0.tag === "Just") { return $0._1; }
        $runtime.fail();
      })();
      if ($1.tag === "Method" && v._1 === $1._1) {
        const $2 = Data$dArray.tail(v1);
        return [
          $Parser("Method", v._1, altParser.alt(v._2)($1._2)),
          ...(() => {
            if ($2.tag === "Just") { return $2._1; }
            $runtime.fail();
          })()
        ];
      }
    }
    return [v, ...v1];
  };
  if (v.tag === "Prefix") {
    const $0 = Data$dArray.index(v1)(0);
    const $1 = (() => {
      if ($0.tag === "Just") { return $0._1; }
      $runtime.fail();
    })();
    if ($1.tag === "Prefix" && v._1 === $1._1) {
      const $2 = Data$dArray.tail(v1);
      return [
        $Parser("Prefix", v._1, altParser.alt(v._2)($1._2)),
        ...(() => {
          if ($2.tag === "Just") { return $2._1; }
          $runtime.fail();
        })()
      ];
    }
  }
  return v2(true);
};
const altAppend = ls => rs => {
  const v = v1 => {
    const $0 = Data$dArray.index(ls)(ls.length - 1 | 0);
    const $1 = (() => {
      if ($0.tag === "Just") { return $0._1; }
      $runtime.fail();
    })();
    if ($1.tag === "Method") {
      const $2 = Data$dArray.index(rs)(0);
      const $3 = (() => {
        if ($2.tag === "Just") { return $2._1; }
        $runtime.fail();
      })();
      if ($3.tag === "Method" && $1._1 === $3._1) {
        const $4 = Data$dArray.tail(rs);
        const rs$p = [
          $Parser("Method", $1._1, altParser.alt($1._2)($3._2)),
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
        $Parser("Prefix", $1._1, altParser.alt($1._2)($3._2)),
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
  return v(true);
};
const $$default = x => {
  const $0 = $Parser("Chomp", state => Effect$dAff._pure($Result("Success", state, x)));
  return a => altParser.alt(a)($0);
};
const flag = /* #__PURE__ */ (() => {
  const $0 = $$default(false);
  return x => $0(functorParser.map(v => true)(param(x)));
})();
const optional = /* #__PURE__ */ (() => {
  const $0 = $$default(Data$dMaybe.Nothing);
  return x => $0(functorParser.map(Data$dMaybe.Just)(x));
})();
const many = dictAlternative => {
  const Plus1 = dictAlternative.Plus1();
  const many11 = many1(Plus1.Alt0())(dictAlternative.Applicative0());
  const empty = Plus1.empty;
  return p => altParser.alt(many11(p))($Parser("Chomp", state => Effect$dAff._pure($Result("Success", state, empty))));
};
const accept = mediaType => parserBind(header("Accept"))(x => {
  const $0 = Isomers$dHTTP$dRequest$dHeaders$dAccept$dMediaPattern.parse(x);
  if (Isomers$dHTTP$dRequest$dHeaders$dAccept$dMediaPattern.matchedBy(mediaType)($0)) { return Data$dEither.$Either("Right", undefined); }
  return Data$dEither.$Either("Left", $ParsingError("InnacceptableMediaType", mediaType, $0));
});
export {
  $Parser,
  $ParsingError,
  $Result,
  Alt,
  BodyAlreadyConsumed,
  BodyParsingError,
  Chomp,
  EndOfPath,
  Expected,
  ExpectedEndOfPath,
  ExpectedHeaderValue,
  ExpectedMethod,
  Fail,
  InnacceptableMediaType,
  Method,
  MissingHeader,
  MissingParam,
  Prefix,
  Success,
  accept,
  altAppend,
  altCons,
  altParser,
  altSnoc,
  applicativeParser,
  applyParser,
  as,
  body,
  $$boolean as boolean,
  chompPrefix,
  $$default as default,
  $$delete as delete,
  end,
  eqParsingError,
  flag,
  fullPath,
  functorParser,
  functorResult,
  genericParsingError_,
  genericResult,
  genericShowArgsArgument,
  genericShowArgsArgument1,
  hash,
  header,
  $$int as int,
  lazyParser,
  lookup,
  many,
  many1,
  method,
  optHeader,
  optional,
  param,
  paramLookup,
  params,
  parserBind,
  prefix,
  rest,
  run,
  runParser,
  showParsingError,
  take
};
