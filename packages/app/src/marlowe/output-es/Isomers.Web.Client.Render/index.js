import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Data$dVariant from "../Data.Variant/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Isomers$dHTTP$dExchange from "../Isomers.HTTP.Exchange/index.js";
import * as Isomers$dSpec from "../Isomers.Spec/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const $ContractRequest = () => ({tag: "ContractRequest"});
const $ExpandRequest = () => ({tag: "ExpandRequest"});
const $RenderStep = _1 => ({tag: "RenderStep", _1});
const RenderStep = value0 => $RenderStep(value0);
const ExpandRequest = /* #__PURE__ */ $ExpandRequest();
const ContractRequest = /* #__PURE__ */ $ContractRequest();
const mappingRenderNode = dictIsSymbol => () => dictHMapWithIndex => () => () => () => (
  {
    mappingWithIndex: v => prop => renderers => Data$dVariant.match()()()(dictHMapWithIndex.hmapWithIndex($RenderStep(Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(prop))(v._1)))(renderers))
  }
);
const mappingRenderLeaf = dictIsSymbol => dictIsSymbol1 => () => () => dictTypeEquals => {
  const to = dictTypeEquals.proof(a => a);
  return dictTypeEquals1 => {
    const to1 = dictTypeEquals1.proof(a => a);
    return dictTypeEquals2 => {
      const from = dictTypeEquals2.proof(a => a);
      return {
        mappingWithIndex: v => prop => v1 => creq => clientRouter => Effect$dAff._bind(Record$dUnsafe.unsafeGet(dictIsSymbol1.reflectSymbol(Type$dProxy.Proxy))(Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(prop))(v._1))(creq))(res => Effect$dAff._pure(v1(Data$dTuple.$Tuple(
          from(clientRouter),
          Isomers$dHTTP$dExchange.$Exchange(
            to(creq),
            Data$dMaybe.$Maybe(
              "Just",
              (() => {
                if (res.tag === "Left") { return Data$dEither.$Either("Left", res._1); }
                if (res.tag === "Right") { return Data$dEither.$Either("Right", to1(res._1)); }
                $runtime.fail();
              })()
            )
          )
        ))))
      };
    };
  };
};
const instanceFoldRender = dictHFoldlWithIndex => dictHFoldlWithIndex1 => {
  const client = Isomers$dSpec.client(dictHFoldlWithIndex1);
  return dictHFoldlWithIndex2 => {
    const client1 = client(dictHFoldlWithIndex2);
    return dictHMapWithIndex => () => () => () => (
      {foldRender: v => v1 => fetch => Data$dVariant.match()()()(dictHMapWithIndex.hmapWithIndex($RenderStep(client1(fetch)(v1.spec)))(v1.render._1))}
    );
  };
};
const foldingExpandRequestRec = dictIsSymbol => dictHFoldlWithIndex => () => () => (
  {
    foldingWithIndex: v => prop => expandRndReq => rs => {
      const $0 = dictHFoldlWithIndex.hfoldlWithIndex(ExpandRequest)(Data$dVariant.case_)(rs);
      return r => {
        if (r.type === dictIsSymbol.reflectSymbol(prop)) { return {type: dictIsSymbol.reflectSymbol(prop), value: $0(r.value)}; }
        return expandRndReq(r);
      };
    }
  }
);
const foldingExpandRequest = dictIsSymbol => dictIsSymbol1 => () => () => () => (
  {
    foldingWithIndex: v => prop => expandRndReq => v1 => r => {
      if (r.type === dictIsSymbol.reflectSymbol(prop)) {
        return {type: dictIsSymbol.reflectSymbol(prop), value: {type: dictIsSymbol1.reflectSymbol(Type$dProxy.Proxy), value: r.value}};
      }
      return expandRndReq(r);
    }
  }
);
const foldingContractRequestRec = dictIsSymbol => () => dictHFoldlWithIndex => () => () => () => (
  {
    foldingWithIndex: v => prop => contractSpecReq => v1 => {
      const $0 = dictHFoldlWithIndex.hfoldlWithIndex(ContractRequest)(v$1 => Data$dMaybe.Nothing)(v1);
      return r => {
        if (r.type === dictIsSymbol.reflectSymbol(prop)) {
          const $1 = $0(r.value);
          if ($1.tag === "Just") { return Data$dMaybe.$Maybe("Just", {type: dictIsSymbol.reflectSymbol(prop), value: $1._1}); }
          return Data$dMaybe.Nothing;
        }
        const $1 = contractSpecReq(r);
        if ($1.tag === "Just") { return Data$dMaybe.$Maybe("Just", $1._1); }
        return Data$dMaybe.Nothing;
      };
    }
  }
);
const foldingContractRequest = dictIsSymbol => dictIsSymbol1 => () => () => () => () => () => (
  {
    foldingWithIndex: v => prop => contractAcc => v1 => r => {
      if (r.type === dictIsSymbol.reflectSymbol(prop)) {
        if (r.value.type === dictIsSymbol1.reflectSymbol(Type$dProxy.Proxy)) { return Data$dMaybe.$Maybe("Just", {type: dictIsSymbol.reflectSymbol(prop), value: r.value.value}); }
        if (r.value.type === "text/html") { return Data$dMaybe.$Maybe("Just", {type: dictIsSymbol.reflectSymbol(prop), value: r.value.value}); }
        return Data$dMaybe.Nothing;
      }
      const $0 = contractAcc(r);
      if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0._1); }
      return Data$dMaybe.Nothing;
    }
  }
);
const foldRender = dict => dict.foldRender;
const expandRequest = dictHFoldlWithIndex => v => dictHFoldlWithIndex.hfoldlWithIndex(ExpandRequest)(Data$dVariant.case_);
const contractRequest = dictHFoldlWithIndex => v => renderers => dictHFoldlWithIndex.hfoldlWithIndex(ContractRequest)(v$1 => Data$dMaybe.Nothing)(renderers);
export {
  $ContractRequest,
  $ExpandRequest,
  $RenderStep,
  ContractRequest,
  ExpandRequest,
  RenderStep,
  contractRequest,
  expandRequest,
  foldRender,
  foldingContractRequest,
  foldingContractRequestRec,
  foldingExpandRequest,
  foldingExpandRequestRec,
  instanceFoldRender,
  mappingRenderLeaf,
  mappingRenderNode
};
