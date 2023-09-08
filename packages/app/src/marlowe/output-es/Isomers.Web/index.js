import * as Isomers$dClient from "../Isomers.Client/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const toSpec = v => v.spec;
const requestBuilders = dictHFoldlWithIndex => {
  const requestBuilders1 = dictHFoldlWithIndex.hfoldlWithIndex(Isomers$dClient.$RequestBuildersStep(Isomers$dClient.identity))({});
  return v => requestBuilders1(Type$dProxy.Proxy);
};
export {requestBuilders, toSpec};
