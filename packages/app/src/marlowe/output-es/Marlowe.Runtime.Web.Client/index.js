import * as $runtime from "../runtime.js";
import * as Contrib$dFetch from "../Contrib.Fetch/index.js";
import * as Control$dApplicative from "../Control.Applicative/index.js";
import * as Control$dBind from "../Control.Bind/index.js";
import * as Control$dMonad$dExcept$dTrans from "../Control.Monad.Except.Trans/index.js";
import * as Control$dMonad$dLoops from "../Control.Monad.Loops/index.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dArgonaut$dDecode$dClass from "../Data.Argonaut.Decode.Class/index.js";
import * as Data$dArgonaut$dDecode$dDecoders from "../Data.Argonaut.Decode.Decoders/index.js";
import * as Data$dArgonaut$dDecode$dError from "../Data.Argonaut.Decode.Error/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dHTTP$dMethod from "../Data.HTTP.Method/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Data$dString$dCaseInsensitive from "../Data.String.CaseInsensitive/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Data$dUnfoldable from "../Data.Unfoldable/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dAff$dClass from "../Effect.Aff.Class/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Fetch$dCore$dHeaders from "../Fetch.Core.Headers/index.js";
import * as Fetch$dCore$dRequestBody from "../Fetch.Core.RequestBody/index.js";
import * as Fetch$dCore$dRequestMode from "../Fetch.Core.RequestMode/index.js";
import * as Fetch$dInternal$dRequest from "../Fetch.Internal.Request/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
import * as JSURI from "../JSURI/index.js";
import * as Marlowe$dRuntime$dWeb$dTypes from "../Marlowe.Runtime.Web.Types/index.js";
import * as Parsing from "../Parsing/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as URI$dExtra$dQueryPairs from "../URI.Extra.QueryPairs/index.js";
import * as URI$dHostPortPair from "../URI.HostPortPair/index.js";
import * as URI$dRelativeRef from "../URI.RelativeRef/index.js";
import * as URI$dURI from "../URI.URI/index.js";
import * as URI$dURIRef from "../URI.URIRef/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const $ClientError = (tag, _1) => ({tag, _1});
const $FoldPageStep = (tag, _1) => ({tag, _1});
const genericShowSum = /* #__PURE__ */ (() => {
  const $0 = Data$dShow$dGeneric.genericShowConstructor({
    genericShowArgs: v => [
      (() => {
        if (v.tag === "InvalidStatusCode") { return "InvalidStatusCode"; }
        if (v.tag === "FetchError") { return "FetchError " + Effect$dException.showErrorImpl(v._1); }
        $runtime.fail();
      })()
    ]
  })({reflectSymbol: () => "FetchError"});
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
const genericShowSum1 = /* #__PURE__ */ (() => {
  const $0 = Data$dShow$dGeneric.genericShowConstructor({genericShowArgs: v => [Data$dArgonaut$dDecode$dError.showJsonDecodeError.show(v)]})({
    reflectSymbol: () => "ResponseDecodingError"
  });
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
const genericShowSum2 = /* #__PURE__ */ (() => {
  const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "MerkleizationError"});
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
const ServerApiErrorIsSymbol = {reflectSymbol: () => "ServerApiError"};
const identity = x => x;
const toUnfoldable = /* #__PURE__ */ (() => {
  const $0 = Foreign$dObject.toArrayWithKey(Data$dTuple.Tuple);
  return x => Data$dArray.toUnfoldable(Data$dUnfoldable.unfoldableArray)($0(x));
})();
const decodeJson = /* #__PURE__ */ Data$dArgonaut$dDecode$dDecoders.decodeForeignObject(Data$dEither.Right);
const bind2 = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.bindExceptT(Effect$dAff.monadAff).bind)();
const fetchEither1 = /* #__PURE__ */ (() => Contrib$dFetch.fetchEither()()({
  convert: Fetch$dInternal$dRequest.toCoreRequestOptionsHelpe1({convertImpl: v => Fetch$dCore$dHeaders.unsafeFromRecord})()()()({reflectSymbol: () => "headers"})(Fetch$dInternal$dRequest.toCoreRequestOptionsHelpe1(Fetch$dInternal$dRequest.toCoreRequestOptionsConve3)()()()({
    reflectSymbol: () => "mode"
  })(Fetch$dInternal$dRequest.toCoreRequestOptionsHelpe)()())()().convertHelper(Type$dProxy.Proxy)
}))();
const throwError = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.monadThrowExceptT(Effect$dAff.monadAff).throwError)();
const pure2 = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.applicativeExceptT(Effect$dAff.monadAff).pure)();
const fromFoldable = /* #__PURE__ */ Data$dMap$dInternal.fromFoldable(Data$dString$dCaseInsensitive.ordCaseInsensitiveString)(Data$dFoldable.foldableArray);
const fetchEither2 = /* #__PURE__ */ (() => Contrib$dFetch.fetchEither()()({
  convert: Fetch$dInternal$dRequest.toCoreRequestOptionsHelpe1({convertImpl: v => Fetch$dCore$dRequestBody.fromString})()()()({reflectSymbol: () => "body"})(Fetch$dInternal$dRequest.toCoreRequestOptionsHelpe1({
    convertImpl: v => Fetch$dCore$dHeaders.unsafeFromRecord
  })()()()({reflectSymbol: () => "headers"})(Fetch$dInternal$dRequest.toCoreRequestOptionsHelpe1(Fetch$dInternal$dRequest.toCoreRequestOptionsConve8)()()()({
    reflectSymbol: () => "method"
  })(Fetch$dInternal$dRequest.toCoreRequestOptionsHelpe)()())()())()().convertHelper(Type$dProxy.Proxy)
}))();
const Range = x => x;
const FetchPage = value0 => $FoldPageStep("FetchPage", value0);
const StopFetching = /* #__PURE__ */ $FoldPageStep("StopFetching");
const FetchError = value0 => $ClientError("FetchError", value0);
const ResponseDecodingError = value0 => $ClientError("ResponseDecodingError", value0);
const MerkleizationError = /* #__PURE__ */ $ClientError("MerkleizationError");
const ServerApiError = value0 => $ClientError("ServerApiError", value0);
const genericClientError_ = {
  to: x => {
    if (x.tag === "Inl") { return $ClientError("FetchError", x._1); }
    if (x.tag === "Inr") {
      if (x._1.tag === "Inl") { return $ClientError("ResponseDecodingError", x._1._1); }
      if (x._1.tag === "Inr") {
        if (x._1._1.tag === "Inl") { return MerkleizationError; }
        if (x._1._1.tag === "Inr") { return $ClientError("ServerApiError", x._1._1._1); }
      }
    }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "FetchError") { return Data$dGeneric$dRep.$Sum("Inl", x._1); }
    if (x.tag === "ResponseDecodingError") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", x._1)); }
    if (x.tag === "MerkleizationError") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments))); }
    if (x.tag === "ServerApiError") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", x._1))); }
    $runtime.fail();
  }
};
const genericShow = dictGenericShow => x => dictGenericShow["genericShow'"](genericClientError_.from(x));
const showClientError = dictShow => (
  {
    show: genericShow(genericShowSum(genericShowSum1(genericShowSum2(Data$dShow$dGeneric.genericShowConstructor((() => {
      const $0 = Marlowe$dRuntime$dWeb$dTypes.showApiError(dictShow);
      return {genericShowArgs: v => [$0.show(v)]};
    })())(ServerApiErrorIsSymbol)))))
  }
);
const uriOpts = {
  parseUserInfo: Data$dEither.Right,
  printUserInfo: identity,
  parseHosts: /* #__PURE__ */ URI$dHostPortPair.parser(Data$dEither.Right)(Data$dEither.Right),
  printHosts: /* #__PURE__ */ URI$dHostPortPair.print(identity)(identity),
  parsePath: Data$dEither.Right,
  printPath: identity,
  parseHierPath: Data$dEither.Right,
  printHierPath: identity,
  parseRelPath: Data$dEither.Right,
  printRelPath: identity,
  parseQuery: /* #__PURE__ */ URI$dExtra$dQueryPairs.parse(x => Data$dEither.$Either(
    "Right",
    (() => {
      const $0 = JSURI._decodeURIComponent(v => Data$dMaybe.Nothing, Data$dMaybe.Just, x);
      if ($0.tag === "Just") { return $0._1; }
      $runtime.fail();
    })()
  ))(x => Data$dEither.$Either(
    "Right",
    (() => {
      const $0 = JSURI._decodeURIComponent(v => Data$dMaybe.Nothing, Data$dMaybe.Just, x);
      if ($0.tag === "Just") { return $0._1; }
      $runtime.fail();
    })()
  )),
  printQuery: /* #__PURE__ */ URI$dExtra$dQueryPairs.print(URI$dExtra$dQueryPairs.keyFromString)(URI$dExtra$dQueryPairs.valueFromString),
  parseFragment: Data$dEither.Right,
  printFragment: identity
};
const toResourceLinkWithParams = dictQueryParams => dictToResourceLink => endpoint => params => {
  const v = dictToResourceLink.toResourceLink(endpoint);
  const extraQueryParams = dictQueryParams.toQueryParams(Type$dProxy.Proxy)(params);
  const $0 = Parsing.runParserT1(v)(URI$dURIRef.parser(uriOpts));
  const $1 = (() => {
    if ($0.tag === "Left") {
      const $1 = $0._1;
      return v$1 => Data$dEither.$Either("Left", $1);
    }
    if ($0.tag === "Right") {
      const $1 = $0._1;
      return f => f($1);
    }
    $runtime.fail();
  })()(uriRef => Data$dEither.$Either(
    "Right",
    URI$dURIRef.print(uriOpts)((() => {
      if (uriRef.tag === "Right") {
        return Data$dEither.$Either(
          "Right",
          URI$dRelativeRef.$RelativeRef(
            uriRef._1._1,
            (() => {
              if (uriRef._1._2.tag === "Nothing") { return Data$dMaybe.$Maybe("Just", extraQueryParams); }
              if (uriRef._1._2.tag === "Just") { return Data$dMaybe.$Maybe("Just", [...uriRef._1._2._1, ...extraQueryParams]); }
              $runtime.fail();
            })(),
            uriRef._1._3
          )
        );
      }
      if (uriRef.tag === "Left") {
        return Data$dEither.$Either(
          "Left",
          URI$dURI.$URI(
            uriRef._1._1,
            uriRef._1._2,
            (() => {
              if (uriRef._1._3.tag === "Nothing") { return Data$dMaybe.$Maybe("Just", extraQueryParams); }
              if (uriRef._1._3.tag === "Just") { return Data$dMaybe.$Maybe("Just", [...uriRef._1._3._1, ...extraQueryParams]); }
              $runtime.fail();
            })(),
            uriRef._1._4
          )
        );
      }
      $runtime.fail();
    })())
  ));
  if ($1.tag === "Right") { return $1._1; }
  return v;
};
const toExtraQueryParmas = () => paramsRecord => Control$dBind.arrayBind(toUnfoldable(paramsRecord))(v => {
  if (v._2.tag === "Just") { return Control$dBind.arrayBind(v._2._1)(v1 => [Data$dTuple.$Tuple(v._1, Data$dMaybe.$Maybe("Just", v1))]); }
  if (v._2.tag === "Nothing") { return [Data$dTuple.$Tuple(v._1, Data$dMaybe.Nothing)]; }
  $runtime.fail();
});
const decodeResponse = dictDecodeJson => parseA => v => v1 => {
  if (v >= 200 && v < 300) {
    const $0 = decodeJson(v1);
    const $1 = (() => {
      if ($0.tag === "Left") {
        const $1 = $0._1;
        return v$1 => Data$dEither.$Either("Left", $1);
      }
      if ($0.tag === "Right") {
        const $1 = $0._1;
        return f => f($1);
      }
      $runtime.fail();
    })()(obj => {
      const $1 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dEither.Right)(obj)("results");
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
      })()(res => parseA(res));
    });
    const $2 = parseA(v1);
    if ($1.tag === "Left") {
      if ($2.tag === "Left") { return Data$dEither.$Either("Left", $ClientError("ResponseDecodingError", $2._1)); }
      if ($2.tag === "Right") { return Data$dEither.$Either("Right", $2._1); }
      $runtime.fail();
    }
    if ($1.tag === "Left") { return Data$dEither.$Either("Left", $ClientError("ResponseDecodingError", $1._1)); }
    if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1); }
    $runtime.fail();
  }
  return Data$dEither.$Either(
    "Left",
    (() => {
      const $0 = dictDecodeJson.decodeJson(v1);
      if ($0.tag === "Left") { return $ClientError("ResponseDecodingError", $0._1); }
      if ($0.tag === "Right") { return $ClientError("ServerApiError", $0._1); }
      $runtime.fail();
    })()
  );
};
const decodeResponse$p = dictDecodeJson => {
  const decodeJson1 = dictDecodeJson.decodeJson;
  return dictDecodeJson1 => decodeResponse(dictDecodeJson1)(decodeJson1);
};
const decodeResponseWithLink = dictDecodeRecord => dictDecodeJson => decodeResource => statusCode => decodeResponse(dictDecodeJson)(dictDecodeRecord.decodeRecord({
  resource: decodeResource
}))(statusCode);
const allowedStatusCodes = [200, 201, 202, 206, 400, 401, 403, 404, 500];
const getResource = dictDecodeJson => {
  const decodeJson1 = dictDecodeJson.decodeJson;
  return dictDecodeJson1 => () => () => dictQueryParams => dictToResourceLink => v => endpoint => extraParams => extraHeaders => bind2(fetchEither1(v + "/" + toResourceLinkWithParams(dictQueryParams)(dictToResourceLink)(endpoint)(extraParams))({
    headers: {...extraHeaders, "Access-Control-Request-Headers": "Range, Accept"},
    mode: Fetch$dCore$dRequestMode.Cors
  })(allowedStatusCodes)(FetchError))(v2 => {
    const $0 = v2.headers;
    const $1 = v2.status;
    return bind2(Effect$dAff._bind(Effect$dAff._map(Unsafe$dCoerce.unsafeCoerce)(v2.json))(a => Effect$dAff._pure(Data$dEither.$Either("Right", a))))(x => {
      const $2 = decodeResponse(dictDecodeJson1)(decodeJson1)($1)(x);
      if ($2.tag === "Left") { return throwError($2._1); }
      if ($2.tag === "Right") { return pure2({payload: $2._1, headers: $0, status: $1}); }
      $runtime.fail();
    });
  });
};
const getPage = dictDecodeJson => {
  const getResource1 = getResource(dictDecodeJson);
  return dictDecodeJson1 => {
    const getResource2 = getResource1(dictDecodeJson1)()();
    return dictQueryParams => {
      const getResource3 = getResource2(dictQueryParams);
      return dictToResourceLink => {
        const getResource4 = getResource3(dictToResourceLink);
        return serverUrl => path => extraParams => possibleRange => bind2((() => {
          if (possibleRange.tag === "Just") { return getResource4(serverUrl)(path)(extraParams)({Range: possibleRange._1}); }
          if (possibleRange.tag === "Nothing") { return getResource4(serverUrl)(path)(extraParams)({}); }
          $runtime.fail();
        })())(v => pure2({
          page: v.payload,
          nextRange: (() => {
            if (v.status === 206) {
              const $0 = Data$dMap$dInternal.lookup(Data$dString$dCaseInsensitive.ordCaseInsensitiveString)("Next-Range")(fromFoldable(Data$dFunctor.arrayMap(v$1 => Data$dTuple.$Tuple(
                v$1._1,
                v$1._2
              ))(Fetch$dCore$dHeaders._toArray(Data$dTuple.Tuple, v.headers))));
              if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0._1); }
            }
            return Data$dMaybe.Nothing;
          })()
        }));
      };
    };
  };
};
const foldMapMPages = dictDecodeJson => {
  const getPage1 = getPage(dictDecodeJson);
  return dictDecodeJson1 => {
    const getPage2 = getPage1(dictDecodeJson1);
    return dictMonadAff => {
      const Monad0 = dictMonadAff.MonadEffect0().Monad0();
      const unfoldrM = Control$dMonad$dLoops.unfoldrM$p({
        Applicative0: () => Control$dMonad$dExcept$dTrans.applicativeExceptT(Monad0),
        Bind1: () => Control$dMonad$dExcept$dTrans.bindExceptT(Monad0)
      })(Control$dApplicative.applicativeArray)(Data$dMonoid.monoidArray);
      const $0 = Control$dMonad$dExcept$dTrans.applicativeExceptT(Monad0);
      const $1 = Control$dMonad$dExcept$dTrans.bindExceptT(Monad0);
      return dictMonoid => {
        const fold1 = Data$dFoldable.foldableArray.foldMap(dictMonoid)(Data$dFoldable.identity);
        return dictQueryParams => {
          const getPage3 = getPage2(dictQueryParams);
          return dictToResourceLink => {
            const getPage4 = getPage3(dictToResourceLink);
            return serverUrl => path => extraParams => f => startRange => Monad0.Bind1().bind(unfoldrM(v => {
              if (v.tag === "StopFetching") { return $0.pure(Data$dMaybe.Nothing); }
              if (v.tag === "FetchPage") {
                const $2 = v._1;
                return $1.bind(dictMonadAff.liftAff(getPage4(serverUrl)(path)(extraParams)($2)))(v1 => {
                  const $3 = v1.nextRange;
                  return $1.bind(Monad0.Bind1().bind(f({page: v1.page, currRange: $2}))(a => Monad0.Applicative0().pure(Data$dEither.$Either("Right", a))))(v2 => $0.pure(Data$dMaybe.$Maybe(
                    "Just",
                    (() => {
                      if ($3.tag === "Just") { return Data$dTuple.$Tuple(v2.result, v2.stopFetching ? StopFetching : $FoldPageStep("FetchPage", $3)); }
                      if ($3.tag === "Nothing") { return Data$dTuple.$Tuple(v2.result, StopFetching); }
                      $runtime.fail();
                    })()
                  )));
                });
              }
              $runtime.fail();
            })($FoldPageStep("FetchPage", startRange)))(bs => Monad0.Applicative0().pure((() => {
              if (bs.tag === "Left") { return Data$dEither.$Either("Left", bs._1); }
              if (bs.tag === "Right") { return Data$dEither.$Either("Right", fold1(bs._1)); }
              $runtime.fail();
            })()));
          };
        };
      };
    };
  };
};
const foldMapMPages$p = dictDecodeJson => {
  const foldMapMPages1 = foldMapMPages(dictDecodeJson);
  return dictDecodeJson1 => {
    const foldMapMPages2 = foldMapMPages1(dictDecodeJson1);
    return dictMonadAff => {
      const foldMapMPages3 = foldMapMPages2(dictMonadAff);
      return dictMonoid => {
        const foldMapMPages4 = foldMapMPages3(dictMonoid);
        return dictToResourceLink => dictQueryParams => foldMapMPages4(dictQueryParams)(dictToResourceLink);
      };
    };
  };
};
const foldMapMPages$p1 = /* #__PURE__ */ (() => foldMapMPages$p({
  decodeJson: Data$dArgonaut$dDecode$dDecoders.decodeArray(Data$dArgonaut$dDecode$dClass.decodeRecord(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons((() => {
    const $0 = Data$dArgonaut$dDecode$dClass.decodeRecord(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons({
      decodeJsonField: j => {
        if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", Marlowe$dRuntime$dWeb$dTypes.decodeJsonResourceLink.decodeJson(j._1)); }
        return Data$dMaybe.Nothing;
      }
    })(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons(Data$dArgonaut$dDecode$dClass.decodeFieldMaybe(Marlowe$dRuntime$dWeb$dTypes.decodeJsonResourceLink))(Data$dArgonaut$dDecode$dClass.gDecodeJsonNil)({
      reflectSymbol: () => "transactions"
    })()())({reflectSymbol: () => "contract"})()())();
    return {
      decodeJsonField: j => {
        if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0.decodeJson(j._1)); }
        return Data$dMaybe.Nothing;
      }
    };
  })())(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons({
    decodeJsonField: j => {
      if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", Marlowe$dRuntime$dWeb$dTypes.decodeJsonContractHeader.decodeJson(j._1)); }
      return Data$dMaybe.Nothing;
    }
  })(Data$dArgonaut$dDecode$dClass.gDecodeJsonNil)({reflectSymbol: () => "resource"})()())({reflectSymbol: () => "links"})()())().decodeJson)
}))();
const foldMapMContractPages = dictToResourceLink => dictDecodeJson => {
  const foldMapMPages$p2 = foldMapMPages$p1(dictDecodeJson)(Effect$dAff$dClass.monadAffAff)(Data$dMonoid.monoidArray)(dictToResourceLink);
  return dictQueryParams => {
    const foldMapMPages$p3 = foldMapMPages$p2(dictQueryParams);
    return serverUrl => endpoint => extraParams => start => f => foldMapMPages$p3(serverUrl)(endpoint)(extraParams)(x => f(x.page))(start);
  };
};
const getPages = dictDecodeJson => {
  const foldMapMPages1 = foldMapMPages(dictDecodeJson);
  return dictDecodeJson1 => {
    const foldMapMPages2 = foldMapMPages1(dictDecodeJson1);
    return dictMonadAff => {
      const foldMapMPages3 = foldMapMPages2(dictMonadAff)(Data$dList$dTypes.monoidList);
      return dictQueryParams => {
        const foldMapMPages4 = foldMapMPages3(dictQueryParams);
        return dictToResourceLink => {
          const foldMapMPages5 = foldMapMPages4(dictToResourceLink);
          return serverUrl => path => paramsRecord => foldMapMPages5(serverUrl)(path)(paramsRecord)(x => dictMonadAff.MonadEffect0().Monad0().Applicative0().pure({
            result: Data$dList$dTypes.$List("Cons", x, Data$dList$dTypes.Nil),
            stopFetching: false
          }));
        };
      };
    };
  };
};
const getItems = dictDecodeJson => {
  const getPages1 = getPages(dictDecodeJson);
  return dictDecodeJson1 => {
    const getPages2 = getPages1(dictDecodeJson1);
    return dictMonadAff => {
      const $0 = dictMonadAff.MonadEffect0().Monad0().Bind1().Apply0().Functor0();
      const getPages3 = getPages2(dictMonadAff);
      return dictToResourceLink => dictQueryParams => {
        const getPages4 = getPages3(dictQueryParams)(dictToResourceLink);
        return dictMonoid => {
          const foldMap1 = Data$dList$dTypes.foldableList.foldMap(dictMonoid);
          return serverUrl => endpoint => extraParams => range => $0.map(v => {
            if (v.tag === "Left") { return Data$dEither.$Either("Left", v._1); }
            if (v.tag === "Right") { return Data$dEither.$Either("Right", foldMap1(v1 => v1.page)(v._1)); }
            $runtime.fail();
          })(getPages4(serverUrl)(endpoint)(extraParams)(range));
        };
      };
    };
  };
};
const getPages$p = dictDecodeJson => {
  const getPages1 = getPages(dictDecodeJson);
  return dictDecodeJson1 => {
    const getPages2 = getPages1(dictDecodeJson1);
    return dictMonadAff => {
      const getPages3 = getPages2(dictMonadAff);
      return dictToResourceLink => dictQueryParams => getPages3(dictQueryParams)(dictToResourceLink);
    };
  };
};
const getItems$p = dictMonadAff => {
  const $0 = dictMonadAff.MonadEffect0().Monad0().Bind1().Apply0().Functor0();
  return dictDecodeJson => {
    const getPages$p1 = getPages$p(dictDecodeJson);
    return dictDecodeJson1 => {
      const getPages$p2 = getPages$p1(dictDecodeJson1)(dictMonadAff);
      return dictToResourceLink => {
        const getPages$p3 = getPages$p2(dictToResourceLink);
        return dictQueryParams => {
          const getPages$p4 = getPages$p3(dictQueryParams);
          return dictMonoid => {
            const foldMap1 = Data$dList$dTypes.foldableList.foldMap(dictMonoid);
            return serverUrl => endpoint => extraParams => range => $0.map(v => {
              if (v.tag === "Left") { return Data$dEither.$Either("Left", v._1); }
              if (v.tag === "Right") { return Data$dEither.$Either("Right", foldMap1(v1 => v1.page)(v._1)); }
              $runtime.fail();
            })(getPages$p4(serverUrl)(endpoint)(extraParams)(range));
          };
        };
      };
    };
  };
};
const getPage$p = dictDecodeJson => {
  const getPage1 = getPage(dictDecodeJson);
  return dictDecodeJson1 => {
    const getPage2 = getPage1(dictDecodeJson1);
    return dictToResourceLink => dictQueryParams => getPage2(dictQueryParams)(dictToResourceLink);
  };
};
const getResource$p = dictDecodeJson => {
  const getResource1 = getResource(dictDecodeJson);
  return dictDecodeJson1 => {
    const getResource2 = getResource1(dictDecodeJson1)()();
    return () => () => dictToResourceLink => dictQueryParams => getResource2(dictQueryParams)(dictToResourceLink);
  };
};
const merkleize = dictDecodeJson => v => req => bind2(fetchEither2(v + "/contracts/merkleize")({
  method: Data$dHTTP$dMethod.POST,
  body: Data$dArgonaut$dCore.stringify(Marlowe$dRuntime$dWeb$dTypes.encodeJson5({contract: req.contract})),
  headers: {Accept: "application/json", "Content-Type": "application/json"}
})(allowedStatusCodes)(FetchError))(v1 => {
  const $0 = v1.headers;
  const $1 = v1.status;
  return bind2(Effect$dAff._bind(Effect$dAff._map(Unsafe$dCoerce.unsafeCoerce)(v1.json))(a => Effect$dAff._pure(Data$dEither.$Either("Right", a))))(x => {
    const $2 = decodeResponse(dictDecodeJson)(Marlowe$dRuntime$dWeb$dTypes.decodeJsonPostMerkleizati.decodeJson)($1)(x);
    if ($2.tag === "Left") { return throwError($2._1); }
    if ($2.tag === "Right") { return pure2({payload: $2._1, headers: $0, status: $1}); }
    $runtime.fail();
  });
});
const post = dictDecodeJson => {
  const decodeJson1 = dictDecodeJson.decodeJson;
  return dictDecodeJson1 => dictEncodeHeaders => {
    const encodeHeaders = dictEncodeHeaders.encodeHeaders();
    return dictEncodeJsonBody => dictDecodeRecord => () => () => () => v => v1 => req => bind2(fetchEither2(v + "/" + v1)({
      method: Data$dHTTP$dMethod.POST,
      body: Data$dArgonaut$dCore.stringify(dictEncodeJsonBody.encodeJsonBody(req)),
      headers: {...encodeHeaders(req), "Content-Type": "application/json"}
    })(allowedStatusCodes)(FetchError))(v2 => bind2(Effect$dAff._bind(Effect$dAff._map(Unsafe$dCoerce.unsafeCoerce)(v2.json))(a => Effect$dAff._pure(Data$dEither.$Either(
      "Right",
      a
    ))))(x => {
      const $0 = decodeResponse(dictDecodeJson1)(dictDecodeRecord.decodeRecord({resource: Data$dMaybe.functorMaybe.map(decodeJson1)}))(v2.status)(x);
      if ($0.tag === "Left") { return throwError($0._1); }
      if ($0.tag === "Right") { return pure2($0._1); }
      $runtime.fail();
    }));
  };
};
const post$p = () => dictDecodeJson => {
  const post1 = post(dictDecodeJson);
  return dictDecodeJson1 => {
    const post2 = post1(dictDecodeJson1);
    return dictDecodeRecord => dictEncodeHeaders => {
      const post3 = post2(dictEncodeHeaders);
      return dictEncodeJsonBody => {
        const post4 = post3(dictEncodeJsonBody)(dictDecodeRecord)()()();
        return () => () => () => serverUrl => endpoint => req => post4(serverUrl)(endpoint)(req);
      };
    };
  };
};
const put = dictEncodeHeaders => {
  const encodeHeaders = dictEncodeHeaders.encodeHeaders();
  return dictEncodeJsonBody => () => () => () => v => v1 => req => Effect$dAff._map(m => {
    if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
    if (m.tag === "Right") { return Data$dEither.$Either("Right", undefined); }
    $runtime.fail();
  })(fetchEither2(v + "/" + v1)({
    method: Data$dHTTP$dMethod.PUT,
    body: Data$dArgonaut$dCore.stringify(dictEncodeJsonBody.encodeJsonBody(req)),
    headers: {...encodeHeaders(req), "Content-Type": "application/json"}
  })(allowedStatusCodes)(identity));
};
const put$p = dictEncodeHeaders => {
  const put1 = put(dictEncodeHeaders);
  return dictEncodeJsonBody => {
    const put2 = put1(dictEncodeJsonBody)()()();
    return () => () => () => () => serverUrl => endpoint => req => put2(serverUrl)(endpoint)(req);
  };
};
export {
  $ClientError,
  $FoldPageStep,
  FetchError,
  FetchPage,
  MerkleizationError,
  Range,
  ResponseDecodingError,
  ServerApiError,
  ServerApiErrorIsSymbol,
  StopFetching,
  allowedStatusCodes,
  bind2,
  decodeJson,
  decodeResponse,
  decodeResponse$p,
  decodeResponseWithLink,
  fetchEither1,
  fetchEither2,
  foldMapMContractPages,
  foldMapMPages,
  foldMapMPages$p,
  foldMapMPages$p1,
  fromFoldable,
  genericClientError_,
  genericShow,
  genericShowSum,
  genericShowSum1,
  genericShowSum2,
  getItems,
  getItems$p,
  getPage,
  getPage$p,
  getPages,
  getPages$p,
  getResource,
  getResource$p,
  identity,
  merkleize,
  post,
  post$p,
  pure2,
  put,
  put$p,
  showClientError,
  throwError,
  toExtraQueryParmas,
  toResourceLinkWithParams,
  toUnfoldable,
  uriOpts
};
