import * as Isomers$dContrib$dHeterogeneous$dHEval from "../Isomers.Contrib.Heterogeneous.HEval/index.js";
import * as Isomers$dContrib$dHeterogeneous$dMappings$dNewtype from "../Isomers.Contrib.Heterogeneous.Mappings.Newtype/index.js";
import * as Isomers$dHTTP$dRequest$dMethod from "../Isomers.HTTP.Request.Method/index.js";
import * as Isomers$dRequest$dAccum$dType from "../Isomers.Request.Accum.Type/index.js";
import * as Isomers$dRequest$dAccum$dVariant from "../Isomers.Request.Accum.Variant/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const $MethodStep = () => ({tag: "MethodStep"});
const identity = x => x;
const MethodStep = /* #__PURE__ */ $MethodStep();
const withMethod = dictHMapWithIndex => dictHFoldlAccumVariant => rec => dictHFoldlAccumVariant.HFoldlWithIndex0().hfoldlWithIndex(dictIsSymbol => v => identity)(Isomers$dRequest$dAccum$dVariant.empty)(dictHMapWithIndex.hmapWithIndex(MethodStep)(rec));
const mappingMethodStep = dictIsSymbol => () => (
  {
    mappingWithIndex: v => l => v1 => Isomers$dRequest$dAccum$dType.withMethod(Isomers$dHTTP$dRequest$dMethod.toHTTPMethod({type: dictIsSymbol.reflectSymbol(l), value: undefined}))(v1)
  }
);
const accumSpec = dictHMap => dictHMap1 => dictHMapWithIndex => {
  const withMethod1 = withMethod({hmapWithIndex: f => v => dictHMapWithIndex.hmapWithIndex(f)(v)});
  return dictHFoldlAccumVariant => {
    const withMethod2 = withMethod1((() => {
      const $0 = dictHFoldlAccumVariant.HFoldlWithIndex0();
      const $1 = {hfoldlWithIndex: f => acc => v => $0.hfoldlWithIndex(f)(acc)(v)};
      return {HFoldlWithIndex0: () => $1};
    })());
    return v => (
      {
        request: withMethod2(dictHMap1.hmap(Isomers$dContrib$dHeterogeneous$dHEval.$HCompose(Type$dProxy.Proxy, Isomers$dContrib$dHeterogeneous$dMappings$dNewtype.Unwrap))(v)),
        response: dictHMap.hmap(Isomers$dContrib$dHeterogeneous$dHEval.$HCompose(Type$dProxy.Proxy, Isomers$dContrib$dHeterogeneous$dMappings$dNewtype.Unwrap))(v)
      }
    );
  };
};
const _PUT = Type$dProxy.Proxy;
const _POST = Type$dProxy.Proxy;
const _GET = Type$dProxy.Proxy;
const _DELETE = Type$dProxy.Proxy;
export {$MethodStep, MethodStep, _DELETE, _GET, _POST, _PUT, accumSpec, identity, mappingMethodStep, withMethod};
