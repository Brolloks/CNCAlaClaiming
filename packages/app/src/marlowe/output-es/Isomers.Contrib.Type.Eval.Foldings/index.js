import * as Type$dProxy from "../Type.Proxy/index.js";
const $HListProxy = () => ({tag: "HListProxy"});
const HListProxy = /* #__PURE__ */ $HListProxy();
const liftHListHNilHNil$p = {};
const liftHListHConsHCons$p = () => ({});
const hFoldlHListProxyHNil$p = {hfoldl: v => acc => v1 => acc};
const hFoldlHListProxyHCons$p = dictFolding => dictHFoldl => ({hfoldl: f => acc => v => dictHFoldl.hfoldl(f)(dictFolding.folding(f)(acc)(Type$dProxy.Proxy))(HListProxy)});
const evalFromHListTypeHNilHNil = {};
const evalFromHListTypeHConsHCo = () => ({});
const dispatch1HListMapHNil$pHNi = {};
const dispatch1HListMapHCons$pHC = () => () => ({});
const dispatch1HListFoldrHNil$p = () => ({});
const dispatch1HListFoldrHCons$p = () => ({});
const evalHomogeneousRowListStep = () => ({});
export {
  $HListProxy,
  HListProxy,
  dispatch1HListFoldrHCons$p,
  dispatch1HListFoldrHNil$p,
  dispatch1HListMapHCons$pHC,
  dispatch1HListMapHNil$pHNi,
  evalFromHListTypeHConsHCo,
  evalFromHListTypeHNilHNil,
  evalHomogeneousRowListStep,
  hFoldlHListProxyHCons$p,
  hFoldlHListProxyHNil$p,
  liftHListHConsHCons$p,
  liftHListHNilHNil$p
};
