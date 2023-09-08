import * as Type$dProxy from "../Type.Proxy/index.js";
const on$p = () => dictIsSymbol => f => g => r => {
  if (r.type === dictIsSymbol.reflectSymbol(Type$dProxy.Proxy)) { return f(r.value); }
  return g(r);
};
const inj$p = () => dictIsSymbol => value => ({type: dictIsSymbol.reflectSymbol(Type$dProxy.Proxy), value});
export {inj$p, on$p};
