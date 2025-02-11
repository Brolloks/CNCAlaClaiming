const $HCons = (_1, _2) => ({tag: "HCons", _1, _2});
const $HNil = () => ({tag: "HNil"});
const HNil = /* #__PURE__ */ $HNil();
const HCons = value0 => value1 => $HCons(value0, value1);
const hmapHNil = {hmap: v => x => x};
const hmapHConsOne = dictMapping => ({hmap: f => v => $HCons(dictMapping.mapping(f)(v._1), HNil)});
const hmapHCons = dictMapping => dictHMap => ({hmap: f => v => $HCons(dictMapping.mapping(f)(v._1), dictHMap.hmap(f)(v._2))});
const hfoldlHNil = {hfoldl: v => acc => v1 => acc};
const hfoldlHConsOne = dictFolding => ({hfoldl: f => acc => v => dictFolding.folding(f)(acc)(v._1)});
const hfoldlHConsMany = dictFolding => dictHFoldl => ({hfoldl: f => acc => v => dictHFoldl.hfoldl(f)(dictFolding.folding(f)(acc)(v._1))(v._2)});
export {$HCons, $HNil, HCons, HNil, hfoldlHConsMany, hfoldlHConsOne, hfoldlHNil, hmapHCons, hmapHConsOne, hmapHNil};
