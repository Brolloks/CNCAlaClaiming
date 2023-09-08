import * as $runtime from "../runtime.js";
import * as Contrib$dData$dMap from "../Contrib.Data.Map/index.js";
import * as Contrib$dEffect from "../Contrib.Effect/index.js";
import * as Control$dMonad$dRec$dClass from "../Control.Monad.Rec.Class/index.js";
import * as Data$dArgonaut$dDecode$dClass from "../Data.Argonaut.Decode.Class/index.js";
import * as Data$dArgonaut$dDecode$dDecoders from "../Data.Argonaut.Decode.Decoders/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunction from "../Data.Function/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dAVar from "../Effect.AVar/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dAff$dAVar from "../Effect.Aff.AVar/index.js";
import * as Effect$dAff$dClass from "../Effect.Aff.Class/index.js";
import * as Halogen$dSubscription from "../Halogen.Subscription/index.js";
import * as Marlowe$dRuntime$dWeb$dClient from "../Marlowe.Runtime.Web.Client/index.js";
import * as Marlowe$dRuntime$dWeb$dTypes from "../Marlowe.Runtime.Web.Types/index.js";
const $ContractEvent = (tag, _1) => ({tag, _1});
const $ContractWithTransactionsEvent = (tag, _1) => ({tag, _1});
const forWithIndex = /* #__PURE__ */ (() => {
  const $0 = Data$dMap$dInternal.traversableWithIndexMap.traverseWithIndex(Effect$dAff.applicativeAff);
  return b => a => $0(a)(b);
})();
const resourceIsSymbol = {reflectSymbol: () => "resource"};
const linksIsSymbol = {reflectSymbol: () => "links"};
const toResourceLink21 = {toResourceLink: x => x};
const getPages$p = /* #__PURE__ */ (() => Marlowe$dRuntime$dWeb$dClient.getPages$p({
  decodeJson: Data$dArgonaut$dDecode$dDecoders.decodeArray(Data$dArgonaut$dDecode$dClass.decodeRecord(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons((() => {
    const $0 = Data$dArgonaut$dDecode$dClass.decodeRecord(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons({
      decodeJsonField: j => {
        if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", Marlowe$dRuntime$dWeb$dTypes.decodeJsonResourceLink.decodeJson(j._1)); }
        return Data$dMaybe.Nothing;
      }
    })(Data$dArgonaut$dDecode$dClass.gDecodeJsonNil)({reflectSymbol: () => "transaction"})()())();
    return {
      decodeJsonField: j => {
        if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0.decodeJson(j._1)); }
        return Data$dMaybe.Nothing;
      }
    };
  })())(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons({
    decodeJsonField: j => {
      if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", Marlowe$dRuntime$dWeb$dTypes.decodeJsonTxHeader.decodeJson(j._1)); }
      return Data$dMaybe.Nothing;
    }
  })(Data$dArgonaut$dDecode$dClass.gDecodeJsonNil)(resourceIsSymbol)()())(linksIsSymbol)()())().decodeJson)
})(Marlowe$dRuntime$dWeb$dTypes.decodeJsonApiErrorString)(Effect$dAff$dClass.monadAffAff)(toResourceLink21)(Marlowe$dRuntime$dWeb$dTypes.queryParamsTransactionsEn))();
const liftEither = /* #__PURE__ */ Contrib$dEffect.liftEither(Effect$dAff.monadEffectAff)(/* #__PURE__ */ Marlowe$dRuntime$dWeb$dClient.showClientError(Data$dShow.showString));
const foldMap = /* #__PURE__ */ (() => Data$dList$dTypes.foldableList.foldMap(Data$dMonoid.monoidArray))();
const eq = /* #__PURE__ */ (() => {
  const $0 = Data$dEq.eqArrayImpl(Marlowe$dRuntime$dWeb$dTypes.eqTxHeader.eq);
  return x => y => {
    if (x.tag === "Nothing") { return y.tag === "Nothing"; }
    return x.tag === "Just" && y.tag === "Just" && $0(x._1)(y._1);
  };
})();
const for_ = /* #__PURE__ */ Data$dFoldable.for_(Effect.applicativeEffect)(Data$dMap$dInternal.foldableMap);
const fromFoldable = /* #__PURE__ */ Data$dMap$dInternal.fromFoldable(Marlowe$dRuntime$dWeb$dTypes.ordTxOutRef)(Data$dMap$dInternal.foldableMap);
const transactionsIsSymbol = {reflectSymbol: () => "transactions"};
const getResource$p = /* #__PURE__ */ Marlowe$dRuntime$dWeb$dClient.getResource$p(/* #__PURE__ */ Data$dArgonaut$dDecode$dClass.decodeRecord(/* #__PURE__ */ Data$dArgonaut$dDecode$dClass.gDecodeJsonCons(/* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dDecode$dClass.decodeRecord(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons({
    decodeJsonField: j => {
      if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", Marlowe$dRuntime$dWeb$dTypes.decodeJsonResourceLink.decodeJson(j._1)); }
      return Data$dMaybe.Nothing;
    }
  })(Data$dArgonaut$dDecode$dClass.gDecodeJsonNil)(transactionsIsSymbol)()())();
  return {
    decodeJsonField: j => {
      if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0.decodeJson(j._1)); }
      return Data$dMaybe.Nothing;
    }
  };
})())(/* #__PURE__ */ Data$dArgonaut$dDecode$dClass.gDecodeJsonCons({
  decodeJsonField: j => {
    if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", Marlowe$dRuntime$dWeb$dTypes.decodeJsonContractState.decodeJson(j._1)); }
    return Data$dMaybe.Nothing;
  }
})(Data$dArgonaut$dDecode$dClass.gDecodeJsonNil)(resourceIsSymbol)()())(linksIsSymbol)()())())(Marlowe$dRuntime$dWeb$dTypes.decodeJsonApiErrorString)()()({toResourceLink: x => x})(Marlowe$dRuntime$dWeb$dTypes.queryParamsContractEndpoi);
const parSequence = /* #__PURE__ */ (() => {
  const $0 = Data$dTraversable.traversableArray.traverse(Effect$dAff.applicativeParAff)(x => x);
  return x => Effect$dAff._sequential($0(x));
})();
const forWithIndex1 = /* #__PURE__ */ (() => {
  const $0 = Data$dMap$dInternal.traversableWithIndexMap.traverseWithIndex(Effect.applicativeEffect);
  return b => a => $0(a)(b);
})();
const foldMapMContractPages = /* #__PURE__ */ Marlowe$dRuntime$dWeb$dClient.foldMapMContractPages(toResourceLink21)(Marlowe$dRuntime$dWeb$dTypes.decodeJsonApiErrorString);
const updates = /* #__PURE__ */ Contrib$dData$dMap.updates({
  eq: ra => rb => ra.links.contract === rb.links.contract && (ra.links.transactions.tag === "Nothing"
    ? rb.links.transactions.tag === "Nothing"
    : ra.links.transactions.tag === "Just" && rb.links.transactions.tag === "Just" && ra.links.transactions._1 === rb.links.transactions._1) && Marlowe$dRuntime$dWeb$dTypes.eqContractHeader.eq(ra.resource)(rb.resource)
})(Marlowe$dRuntime$dWeb$dTypes.ordTxOutRef);
const filter1 = /* #__PURE__ */ (() => {
  const filterWithKey1 = Data$dMap$dInternal.filterWithKey(Marlowe$dRuntime$dWeb$dTypes.ordTxOutRef);
  return predicate => filterWithKey1(v => predicate);
})();
const RequestInterval = x => x;
const PollingInterval = x => x;
const MaxPages = x => x;
const ContractTransactionsStream = x => x;
const ContractStateStream = x => x;
const Addition = value0 => $ContractEvent("Addition", value0);
const Deletion = value0 => $ContractEvent("Deletion", value0);
const Update = value0 => $ContractEvent("Update", value0);
const ContractStream = x => x;
const ContractEvent = value0 => $ContractWithTransactionsEvent("ContractEvent", value0);
const ContractStateEvent = value0 => $ContractWithTransactionsEvent("ContractStateEvent", value0);
const ContractTransactionsEvent = value0 => $ContractWithTransactionsEvent("ContractTransactionsEvent", value0);
const ContractWithTransactionsStream = x => x;
const fetchContractsTransactions = endpoints => prevContractTransactionMap => listener => v => serverUrl => Effect$dAff._bind(Effect$dAff._map(Data$dMap$dInternal.catMaybes(Marlowe$dRuntime$dWeb$dTypes.ordTxOutRef))(forWithIndex(endpoints)(contractId => transactionEndpoint => Effect$dAff._catchError(Effect$dAff._bind(Effect$dAff._bind(Effect$dAff._bind(getPages$p(serverUrl)(transactionEndpoint)({})(Data$dMaybe.Nothing))(liftEither))(pages => Effect$dAff._pure(foldMap(v1 => v1.page)(pages))))(v1 => Effect$dAff._bind(Effect$dAff._delay(
  Data$dEither.Right,
  v
))(() => {
  const prevTransactions = Data$dMap$dInternal.lookup(Marlowe$dRuntime$dWeb$dTypes.ordTxOutRef)(contractId)(prevContractTransactionMap);
  const newTransactions = Data$dFunctor.arrayMap(v2 => Data$dTuple.$Tuple(v2.resource, v2.links.transaction))(v1);
  return Effect$dAff._pure(Data$dMaybe.$Maybe(
    "Just",
    Data$dTuple.$Tuple(
      eq(Data$dMaybe.$Maybe("Just", Data$dFunctor.arrayMap(Data$dTuple.fst)(newTransactions)))((() => {
        const $0 = Data$dFunctor.arrayMap(Data$dTuple.fst);
        if (prevTransactions.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0(prevTransactions._1)); }
        return Data$dMaybe.Nothing;
      })())
        ? Data$dMaybe.Nothing
        : Data$dMaybe.$Maybe("Just", {old: prevTransactions, new: newTransactions}),
      Data$dTuple.$Tuple(contractId, newTransactions)
    )
  ));
})))(v1 => Effect$dAff._pure(Data$dMaybe.Nothing)))))(items => Effect$dAff._pure({
  contractsTransactions: fromFoldable(Data$dMap$dInternal.functorMap.map(Data$dTuple.snd)(items)),
  notify: for_(items)(v1 => {
    if (v1._1.tag === "Just") { return listener(Data$dTuple.$Tuple(v1._2._1, v1._1._1)); }
    return () => {};
  })
}));
const fetchContractsStates = endpoints => prevContractStateMap => listener => v => serverUrl => Effect$dAff._bind(Effect$dAff._map(Data$dMap$dInternal.catMaybes(Marlowe$dRuntime$dWeb$dTypes.ordTxOutRef))(forWithIndex(endpoints)(contractId => endpoint => Effect$dAff._catchError(Effect$dAff._bind(Effect$dAff._map(v1 => v1.payload.resource)(Effect$dAff._bind(getResource$p(serverUrl)(endpoint)({})({}))(liftEither)))(v1 => Effect$dAff._bind(Effect$dAff._delay(
  Data$dEither.Right,
  v
))(() => {
  const oldContractState = Data$dMap$dInternal.lookup(Marlowe$dRuntime$dWeb$dTypes.ordTxOutRef)(contractId)(prevContractStateMap);
  return Effect$dAff._pure(Data$dMaybe.$Maybe(
    "Just",
    Data$dTuple.$Tuple(
      oldContractState.tag === "Nothing" || !(oldContractState.tag === "Just" && Marlowe$dRuntime$dWeb$dTypes.eqContractState.eq(oldContractState._1)(v1))
        ? Data$dMaybe.Nothing
        : Data$dMaybe.$Maybe("Just", {old: oldContractState, new: v1}),
      Data$dTuple.$Tuple(contractId, v1)
    )
  ));
})))(v1 => Effect$dAff._pure(Data$dMaybe.Nothing)))))(items => Effect$dAff._pure({
  contractsStates: fromFoldable(Data$dMap$dInternal.functorMap.map(Data$dTuple.snd)(items)),
  notify: for_(items)(v1 => {
    if (v1._1.tag === "Just") { return listener(Data$dTuple.$Tuple(v1._2._1, v1._1._1)); }
    return () => {};
  })
}));
const contractsWithTransactions = v => v1 => v2 => (
  {
    emitter: k => {
      const $0 = v.emitter(x => k($ContractWithTransactionsEvent("ContractEvent", x)));
      return () => {
        const v2$1 = $0();
        const v2$2 = v2.emitter(x => k($ContractWithTransactionsEvent("ContractTransactionsEvent", x)))();
        const v3 = v1.emitter(x => k($ContractWithTransactionsEvent("ContractStateEvent", x)))();
        return () => {
          v2$1();
          v2$2();
          return v3();
        };
      };
    },
    getLiveState: (() => {
      const $0 = v.getLiveState;
      return () => {
        const contractMap = $0();
        const contractTransactionsMap = v2.getLiveState();
        const contractStateMap = v1.getLiveState();
        return forWithIndex1(contractMap)(contractId => contract => {
          const $1 = {
            contract,
            contractState: Data$dMap$dInternal.lookup(Marlowe$dRuntime$dWeb$dTypes.ordTxOutRef)(contractId)(contractStateMap),
            transactions: (() => {
              const $1 = Data$dMap$dInternal.lookup(Marlowe$dRuntime$dWeb$dTypes.ordTxOutRef)(contractId)(contractTransactionsMap);
              if ($1.tag === "Nothing") { return []; }
              if ($1.tag === "Just") { return $1._1; }
              $runtime.fail();
            })()
          };
          return () => $1;
        })();
      };
    })(),
    getState: Effect$dAff._bind(v.getState)(contractMap => Effect$dAff._bind(v1.getState)(contractStateMap => Effect$dAff._bind(v2.getState)(contractTransactionsMap => forWithIndex(contractMap)(contractId => contract => Effect$dAff._pure({
      contract,
      contractState: Data$dMap$dInternal.lookup(Marlowe$dRuntime$dWeb$dTypes.ordTxOutRef)(contractId)(contractStateMap),
      transactions: (() => {
        const $0 = Data$dMap$dInternal.lookup(Marlowe$dRuntime$dWeb$dTypes.ordTxOutRef)(contractId)(contractTransactionsMap);
        if ($0.tag === "Nothing") { return []; }
        if ($0.tag === "Just") { return $0._1; }
        $runtime.fail();
      })()
    }))))),
    start: Effect$dAff._map(v$1 => {})(parSequence([Effect$dAff._map(v$1 => {})(v1.start), Effect$dAff._map(v$1 => {})(v2.start), Effect$dAff._map(v$1 => {})(v.start)]))
  }
);
const contractsTransactions = v => requestInterval => getEndpoints => serverUrl => Effect$dAff._bind(Effect$dAff._liftEffect(() => ({value: Data$dMap$dInternal.Leaf})))(stateRef => Effect$dAff._bind(Effect$dAff$dAVar.empty)(stateAVar => Effect$dAff._bind(Effect$dAff._liftEffect(Halogen$dSubscription.create))(v1 => {
  const $0 = v1.listener;
  return Effect$dAff._pure({
    emitter: v1.emitter,
    getLiveState: () => stateRef.value,
    getState: Effect$dAff$dAVar.read(stateAVar),
    start: (() => {
      const $1 = Effect$dAff._bind(Effect$dAff._map(v$1 => {})(Effect$dAff._liftEffect(Effect$dAVar._tryTakeVar(Effect$dAVar.ffiUtil, stateAVar))))(() => Effect$dAff._bind(Effect$dAff._liftEffect(() => stateRef.value))(previousState => Effect$dAff._bind(getEndpoints)(endpoints => Effect$dAff._bind(fetchContractsTransactions(endpoints)(previousState)($0)(requestInterval)(serverUrl))(v2 => {
        const $1 = v2.contractsTransactions;
        const $2 = v2.notify;
        return Effect$dAff._bind(Effect$dAff._liftEffect(() => {
          stateRef.value = $1;
          return $2();
        }))(() => Effect$dAff._bind(Effect$dAff$dAVar.put($1)(stateAVar))(() => Effect$dAff._delay(Data$dEither.Right, v)));
      }))));
      return Effect$dAff.monadRecAff.tailRecM(u => Effect$dAff._map(v$1 => Control$dMonad$dRec$dClass.$Step("Loop", u))($1))();
    })()
  });
})));
const contractsStates = v => requestInterval => getEndpoints => serverUrl => Effect$dAff._bind(Effect$dAff._liftEffect(() => ({value: Data$dMap$dInternal.Leaf})))(stateRef => Effect$dAff._bind(Effect$dAff$dAVar.empty)(stateAVar => Effect$dAff._bind(Effect$dAff._liftEffect(Halogen$dSubscription.create))(v1 => {
  const $0 = v1.listener;
  return Effect$dAff._pure({
    emitter: v1.emitter,
    getLiveState: () => stateRef.value,
    getState: Effect$dAff$dAVar.read(stateAVar),
    start: (() => {
      const $1 = Effect$dAff._bind(Effect$dAff._map(v$1 => {})(Effect$dAff._liftEffect(Effect$dAVar._tryTakeVar(Effect$dAVar.ffiUtil, stateAVar))))(() => Effect$dAff._bind(Effect$dAff._liftEffect(() => stateRef.value))(previousState => Effect$dAff._bind(getEndpoints)(endpoints => Effect$dAff._bind(fetchContractsStates(endpoints)(previousState)($0)(requestInterval)(serverUrl))(v2 => {
        const $1 = v2.contractsStates;
        const $2 = v2.notify;
        return Effect$dAff._bind(Effect$dAff._liftEffect(() => {
          stateRef.value = $1;
          return $2();
        }))(() => Effect$dAff._bind(Effect$dAff$dAVar.put($1)(stateAVar))(() => Effect$dAff._delay(Data$dEither.Right, v)));
      }))));
      return Effect$dAff.monadRecAff.tailRecM(u => Effect$dAff._map(v$1 => Control$dMonad$dRec$dClass.$Step("Loop", u))($1))();
    })()
  });
})));
const contractsById = /* #__PURE__ */ Contrib$dData$dMap.fromFoldableBy(Data$dFunctor.functorArray)(Data$dFoldable.foldableArray)(Marlowe$dRuntime$dWeb$dTypes.ordTxOutRef)(x => x.resource.contractId);
const contracts = dictQueryParams => {
  const foldMapMContractPages1 = foldMapMContractPages(dictQueryParams);
  return v => v1 => params => filterContracts => possibleMaxPages => serverUrl => Effect$dAff._bind(Effect$dAff._liftEffect(() => ({value: Data$dMap$dInternal.Leaf})))(contractsRef => Effect$dAff._bind(Effect$dAff._liftEffect(() => (
    {value: 0}
  )))(pageNumberRef => Effect$dAff._bind(Effect$dAff$dAVar.empty)(contractsAVar => Effect$dAff._bind(Effect$dAff._liftEffect(Halogen$dSubscription.create))(v2 => Effect$dAff._pure({
    emitter: v2.emitter,
    getLiveState: () => contractsRef.value,
    getState: Effect$dAff$dAVar.read(contractsAVar),
    start: (() => {
      const $0 = Effect$dAff._bind(Effect$dAff._liftEffect(() => pageNumberRef.value = 0))(() => Effect$dAff._bind(Effect$dAff._map(v$1 => {})(Effect$dAff._liftEffect(Effect$dAVar._tryTakeVar(
        Effect$dAVar.ffiUtil,
        contractsAVar
      ))))(() => Effect$dAff._bind(Effect$dAff._liftEffect(() => contractsRef.value))(previousContracts => Effect$dAff._bind(Effect$dAff._map(contractsById)(Effect$dAff._bind(foldMapMContractPages1(serverUrl)("contracts")(params)(Data$dMaybe.Nothing)(pageContracts => {
        const pageContracts$p = Data$dArray.filter(filterContracts)(pageContracts);
        return Effect$dAff._bind(Effect$dAff._liftEffect((() => {
          const cs = contractsById(pageContracts$p);
          return () => {
            const $0 = contractsRef.value;
            contractsRef.value = Data$dMap$dInternal.unionWith(Marlowe$dRuntime$dWeb$dTypes.ordTxOutRef)(Data$dFunction.const)(cs)($0);
            for_(Data$dMap$dInternal.difference(Marlowe$dRuntime$dWeb$dTypes.ordTxOutRef)(cs)(previousContracts))(x => v2.listener($ContractEvent("Addition", x)))();
            return for_(updates(previousContracts)(cs))(x => v2.listener($ContractEvent("Update", x)))();
          };
        })()))(() => Effect$dAff._bind(Effect$dAff._liftEffect(() => {
          const $0 = pageNumberRef.value;
          return pageNumberRef.value = 1 + $0 | 0;
        }))(pageNumber => Effect$dAff._bind(Effect$dAff._delay(Data$dEither.Right, v1))(() => Effect$dAff._pure({
          result: pageContracts$p,
          stopFetching: (() => {
            if (possibleMaxPages.tag === "Nothing") { return false; }
            if (possibleMaxPages.tag === "Just") { return pageNumber >= possibleMaxPages._1; }
            $runtime.fail();
          })()
        }))));
      }))(liftEither)))(v3 => Effect$dAff._bind(Effect$dAff._liftEffect(() => {
        contractsRef.value = v3;
        return for_(Data$dMap$dInternal.difference(Marlowe$dRuntime$dWeb$dTypes.ordTxOutRef)(previousContracts)(v3))(x => v2.listener($ContractEvent("Deletion", x)))();
      }))(() => Effect$dAff._bind(Effect$dAff$dAVar.put(v3)(contractsAVar))(() => Effect$dAff._delay(Data$dEither.Right, v)))))));
      return Effect$dAff.monadRecAff.tailRecM(u => Effect$dAff._map(v$1 => Control$dMonad$dRec$dClass.$Step("Loop", u))($0))();
    })()
  })))));
};
const mkContractsWithTransactions = dictQueryParams => {
  const contracts1 = contracts(dictQueryParams);
  return pollingInterval => requestInterval => params => filterContracts => possibleMaxPages => serverUrl => Effect$dAff._bind(contracts1(pollingInterval)(requestInterval)(params)(filterContracts)(possibleMaxPages)(serverUrl))(v => {
    const transactionEndpointsSource = Effect$dAff._map((() => {
      const $0 = filter1(filterContracts);
      return x => Data$dMap$dInternal.mapMaybeWithKey(Marlowe$dRuntime$dWeb$dTypes.ordTxOutRef)(v$1 => Data$dMap$dInternal.identity)(Data$dMap$dInternal.functorMap.map(v1 => v1.links.transactions)($0(x)));
    })())(v.getState);
    return Effect$dAff._bind(contractsStates(pollingInterval)(requestInterval)(Effect$dAff._map((() => {
      const $0 = filter1(filterContracts);
      return x => Data$dMap$dInternal.functorMap.map(v1 => v1.links.contract)($0(x));
    })())(v.getState))(serverUrl))(contractStateStream => Effect$dAff._bind(contractsTransactions(pollingInterval)(requestInterval)(transactionEndpointsSource)(serverUrl))(contractTransactionsStream => Effect$dAff._pure(contractsWithTransactions(v)(contractStateStream)(contractTransactionsStream))));
  });
};
export {
  $ContractEvent,
  $ContractWithTransactionsEvent,
  Addition,
  ContractEvent,
  ContractStateEvent,
  ContractStateStream,
  ContractStream,
  ContractTransactionsEvent,
  ContractTransactionsStream,
  ContractWithTransactionsStream,
  Deletion,
  MaxPages,
  PollingInterval,
  RequestInterval,
  Update,
  contracts,
  contractsById,
  contractsStates,
  contractsTransactions,
  contractsWithTransactions,
  eq,
  fetchContractsStates,
  fetchContractsTransactions,
  filter1,
  foldMap,
  foldMapMContractPages,
  forWithIndex,
  forWithIndex1,
  for_,
  fromFoldable,
  getPages$p,
  getResource$p,
  liftEither,
  linksIsSymbol,
  mkContractsWithTransactions,
  parSequence,
  resourceIsSymbol,
  toResourceLink21,
  transactionsIsSymbol,
  updates
};
