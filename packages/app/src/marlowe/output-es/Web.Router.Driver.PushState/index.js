import * as Routing$dPushState from "../Routing.PushState/index.js";
const makeDriver_ = dictFoldable => parser => printer => $$interface => (
  {
    initialize: k => Routing$dPushState.matchesWith(dictFoldable)(parser)(v => k)($$interface),
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
const makeDriver = dictFoldable => parser => printer => () => {
  const a$p = Routing$dPushState.makeInterface();
  return makeDriver_(dictFoldable)(parser)(printer)(a$p);
};
export {makeDriver, makeDriver_};
