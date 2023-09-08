import * as $runtime from "../runtime.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Routing from "../Routing/index.js";
import * as Web$dEvent$dEventTarget from "../Web.Event.EventTarget/index.js";
import * as Web$dHTML from "../Web.HTML/index.js";
import * as Web$dHTML$dLocation from "../Web.HTML.Location/index.js";
import * as Web$dHTML$dWindow from "../Web.HTML.Window/index.js";
const setHash = h => {
  const $0 = Web$dHTML$dLocation.setHash(h);
  return () => {
    const $1 = Web$dHTML.window();
    const $2 = Web$dHTML$dWindow.location($1)();
    return $0($2)();
  };
};
const getHash = () => {
  const $0 = Web$dHTML.window();
  const $1 = Web$dHTML$dWindow.location($0)();
  const a$p = Web$dHTML$dLocation.hash($1)();
  return (() => {
    const $2 = Data$dString$dCodeUnits.stripPrefix("#")(a$p);
    if ($2.tag === "Nothing") { return ""; }
    if ($2.tag === "Just") { return $2._1; }
    $runtime.fail();
  })();
};
const modifyHash = fn => () => {
  const a$p = getHash();
  return setHash(fn(a$p))();
};
const foldHashes = cb => init => () => {
  const $0 = getHash();
  const $1 = init($0)();
  let ref = $1;
  const win = Web$dHTML.window();
  const listener = Web$dEvent$dEventTarget.eventListener(v => () => {
    const a$p = ref;
    const a$p$1 = getHash();
    const $2 = cb(a$p)(a$p$1)();
    return ref = $2;
  })();
  Web$dEvent$dEventTarget.addEventListener("hashchange")(listener)(false)(win)();
  return Web$dEvent$dEventTarget.removeEventListener("hashchange")(listener)(false)(win);
};
const matchesWith = dictFoldable => parser => cb => {
  const go = a => {
    const $0 = Data$dFoldable.indexl(dictFoldable)(0);
    return x => {
      const $1 = $0(parser(x));
      if ($1.tag === "Nothing") { return () => a; }
      if ($1.tag === "Just") {
        const $2 = $1._1;
        const $3 = cb(a)($2);
        return () => {
          $3();
          return Data$dMaybe.$Maybe("Just", $2);
        };
      }
      $runtime.fail();
    };
  };
  return foldHashes($0 => go($0))(go(Data$dMaybe.Nothing));
};
const hashes = /* #__PURE__ */ matchesWith(Data$dFoldable.foldableMaybe)(Data$dMaybe.Just);
const matches = x => matchesWith(Data$dFoldable.foldableEither)(Routing.match(x));
export {foldHashes, getHash, hashes, matches, matchesWith, modifyHash, setHash};
