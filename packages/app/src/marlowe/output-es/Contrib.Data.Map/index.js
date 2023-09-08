import * as Control$dCategory from "../Control.Category/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dProfunctor$dStrong from "../Data.Profunctor.Strong/index.js";
const fanout = /* #__PURE__ */ Data$dProfunctor$dStrong.fanout(Control$dCategory.categoryFn)(Data$dProfunctor$dStrong.strongFn);
const identity = x => x;
const Old = x => x;
const New = x => x;
const newtypeOld_ = {Coercible0: () => {}};
const newtypeNew_ = {Coercible0: () => {}};
const updates = dictEq => dictOrd => {
  const filterWithKey1 = Data$dMap$dInternal.filterWithKey(dictOrd);
  return v => {
    const $0 = filterWithKey1(v$1 => v1 => !dictEq.eq(v1.old)(v1.new));
    return x => $0(Data$dMap$dInternal.intersectionWith(dictOrd)(v1 => v2 => ({old: v1, new: v2}))(v)(x));
  };
};
const fromFoldableBy = dictFunctor => dictFoldable => dictOrd => {
  const fromFoldable = Data$dMap$dInternal.fromFoldable(dictOrd)(dictFoldable);
  return f => {
    const $0 = dictFunctor.map(fanout(f)(identity));
    return x => fromFoldable($0(x));
  };
};
const deletions = dictOrd => v => v1 => Data$dMap$dInternal.difference(dictOrd)(v)(v1);
const additions = dictOrd => v => v1 => Data$dMap$dInternal.difference(dictOrd)(v1)(v);
export {New, Old, additions, deletions, fanout, fromFoldableBy, identity, newtypeNew_, newtypeOld_, updates};
