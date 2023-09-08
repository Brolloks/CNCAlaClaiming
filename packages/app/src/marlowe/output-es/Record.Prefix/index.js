import * as Record$dBuilder from "../Record.Builder/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const $PrefixProps = _1 => ({tag: "PrefixProps", _1});
const $UnPrefixProps = _1 => ({tag: "UnPrefixProps", _1});
const identity = x => x;
const UnPrefixProps = value0 => $UnPrefixProps(value0);
const PrefixProps = value0 => $PrefixProps(value0);
const unprefixProps = dictIsSymbol => () => () => () => (
  {foldingWithIndex: v => v1 => rin => a => x => Record$dBuilder.unsafeInsert(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(a)(rin(x))}
);
const remove = dictHFoldlWithIndex => pre => {
  const $0 = dictHFoldlWithIndex.hfoldlWithIndex($UnPrefixProps(pre))(identity);
  return x => $0(x)({});
};
const prefixProps = dictIsSymbol => () => () => () => (
  {foldingWithIndex: v => v1 => rin => a => x => Record$dBuilder.unsafeInsert(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(a)(rin(x))}
);
const add = dictHFoldlWithIndex => pre => {
  const $0 = dictHFoldlWithIndex.hfoldlWithIndex($PrefixProps(pre))(identity);
  return x => $0(x)({});
};
export {$PrefixProps, $UnPrefixProps, PrefixProps, UnPrefixProps, add, identity, prefixProps, remove, unprefixProps};
