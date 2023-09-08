import * as Type$dProxy from "../Type.Proxy/index.js";
const evalTypeError = () => ({});
const evalThrow = () => ({});
const evalLift = {};
const proxyEval = () => v => Type$dProxy.Proxy;
export {evalLift, evalThrow, evalTypeError, proxyEval};
