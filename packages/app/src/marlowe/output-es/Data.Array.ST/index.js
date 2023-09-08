// | Helper functions for working with mutable arrays using the `ST` effect.
// |
// | This module can be used when performance is important and mutation is a local effect.
import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import {new as $$new, freeze, peekImpl, poke, popImpl, pushAll, shiftImpl, sortByImpl, splice, thaw, toAssocArray, unsafeFreeze, unsafeThaw, unshiftAll} from "./foreign.js";
const withArray = f => xs => {
  const $0 = thaw(xs);
  return () => {
    const result = $0();
    f(result)();
    return result;
  };
};
const unshift = a => unshiftAll([a]);
const sortBy = comp => sortByImpl(comp)(v => {
  if (v === "GT") { return 1; }
  if (v === "EQ") { return 0; }
  if (v === "LT") { return -1; }
  $runtime.fail();
});
const sortWith = dictOrd => f => sortBy(x => y => dictOrd.compare(f(x))(f(y)));
const sort = dictOrd => sortBy(dictOrd.compare);
const shift = /* #__PURE__ */ shiftImpl(Data$dMaybe.Just)(Data$dMaybe.Nothing);
const run = st => st();
const push = a => pushAll([a]);
const pop = /* #__PURE__ */ popImpl(Data$dMaybe.Just)(Data$dMaybe.Nothing);
const peek = /* #__PURE__ */ peekImpl(Data$dMaybe.Just)(Data$dMaybe.Nothing);
const modify = i => f => xs => {
  const $0 = peekImpl(Data$dMaybe.Just)(Data$dMaybe.Nothing)(i)(xs);
  return () => {
    const entry = $0();
    if (entry.tag === "Just") { return poke(i)(f(entry._1))(xs)(); }
    if (entry.tag === "Nothing") { return false; }
    $runtime.fail();
  };
};
export {modify, peek, pop, push, run, shift, sort, sortBy, sortWith, unshift, withArray};
export * from "./foreign.js";
