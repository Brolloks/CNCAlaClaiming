import * as Isomers$dContrib$dHeterogeneous$dFoldings$dRecord from "../Isomers.Contrib.Heterogeneous.Foldings.Record/index.js";
import * as Isomers$dContrib$dHeterogeneous$dFoldings$dVariant from "../Isomers.Contrib.Heterogeneous.Foldings.Variant/index.js";
import * as Isomers$dRequest$dDuplex$dType from "../Isomers.Request.Duplex.Type/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const flatten = () => () => dictHFoldlWithIndex => () => () => () => dictHFoldlWithIndex1 => () => () => () => () => dictHFoldlWithIndex2 => v => (
  {
    request: Isomers$dRequest$dDuplex$dType.profunctorRequestDuplex.dimap(Isomers$dContrib$dHeterogeneous$dFoldings$dVariant.unflatten()(dictHFoldlWithIndex1)()()()(Type$dProxy.Proxy))(Isomers$dContrib$dHeterogeneous$dFoldings$dVariant.flatten()()(dictHFoldlWithIndex)()()())(v.request),
    response: dictHFoldlWithIndex2.hfoldlWithIndex(Isomers$dContrib$dHeterogeneous$dFoldings$dRecord.$FlattenRecStep(Type$dProxy.Proxy, v.response))({})(Type$dProxy.Proxy)
  }
);
export {flatten};
