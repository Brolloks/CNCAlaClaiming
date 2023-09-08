import * as Isomers$dContrib$dRouting$dPushState from "../Isomers.Contrib.Routing.PushState/index.js";
import * as Routing$dPushState from "../Routing.PushState/index.js";
const makeDriverAff_ = dictFoldable => parser => printer => $$interface => (
  {
    initialize: k => Isomers$dContrib$dRouting$dPushState.matchesWithAff(dictFoldable)(parser)(v => k)($$interface),
    navigate: (() => {
      const $0 = $$interface.pushState({});
      return x => $0(printer(x));
    })(),
    redirect: (() => {
      const $0 = $$interface.replaceState({});
      return x => $0(printer(x));
    })()
  }
);
const makeDriverAff = dictFoldable => parser => printer => () => {
  const a$p = Routing$dPushState.makeInterface();
  return makeDriverAff_(dictFoldable)(parser)(printer)(a$p);
};
export {makeDriverAff, makeDriverAff_};
