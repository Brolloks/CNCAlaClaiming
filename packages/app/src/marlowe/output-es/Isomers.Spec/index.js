import * as Isomers$dClient from "../Isomers.Client/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const requestBuilders = dictHFoldlWithIndex => {
  const requestBuilders1 = dictHFoldlWithIndex.hfoldlWithIndex(Isomers$dClient.$RequestBuildersStep(Isomers$dClient.identity))({});
  return v => requestBuilders1(Type$dProxy.Proxy);
};
const client = dictHFoldlWithIndex => {
  const client1 = Isomers$dClient.client(dictHFoldlWithIndex);
  return dictHFoldlWithIndex1 => {
    const client2 = client1(dictHFoldlWithIndex1);
    return fetch => v => client2(fetch)(v.request)(v.response);
  };
};
export {client, requestBuilders};
