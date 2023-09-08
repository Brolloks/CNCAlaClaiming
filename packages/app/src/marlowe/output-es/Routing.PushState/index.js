import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Effect from "../Effect/index.js";
import * as Routing from "../Routing/index.js";
import * as Web$dDOM$dDocument from "../Web.DOM.Document/index.js";
import * as Web$dDOM$dMutationObserver from "../Web.DOM.MutationObserver/index.js";
import * as Web$dDOM$dNode from "../Web.DOM.Node/index.js";
import * as Web$dEvent$dEventTarget from "../Web.Event.EventTarget/index.js";
import * as Web$dHTML from "../Web.HTML/index.js";
import * as Web$dHTML$dHistory from "../Web.HTML.History/index.js";
import * as Web$dHTML$dLocation from "../Web.HTML.Location/index.js";
import * as Web$dHTML$dWindow from "../Web.HTML.Window/index.js";
const traverse_ = /* #__PURE__ */ Data$dFoldable.traverse_(Effect.applicativeEffect);
const traverse_1 = /* #__PURE__ */ traverse_(Data$dFoldable.foldableEither);
const traverse_2 = /* #__PURE__ */ traverse_(Data$dMap$dInternal.foldableMap);
const makeImmediate = run => () => {
  const $0 = Web$dHTML.window();
  const document = Web$dHTML$dWindow.document($0)();
  let nextTick = Data$dEither.$Either("Right", 0);
  const obsvNode = Web$dDOM$dDocument.createTextNode("")(document)();
  const observer = Web$dDOM$dMutationObserver.mutationObserver(v => v1 => () => {
    const $1 = nextTick;
    nextTick = (() => {
      if ($1.tag === "Left") { return Data$dEither.$Either("Right", 1 + $1._1 | 0); }
      if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1); }
      $runtime.fail();
    })();
    return run();
  })();
  Web$dDOM$dMutationObserver._observe(obsvNode)({characterData: true})(observer)();
  const $1 = traverse_1(tick => {
    const $1 = Data$dEither.$Either("Left", tick + 1 | 0);
    return () => {
      nextTick = $1;
      return Web$dDOM$dNode.setNodeValue(Data$dShow.showIntImpl(tick))(obsvNode)();
    };
  });
  return () => {
    const $2 = nextTick;
    return $1($2)();
  };
};
const makeInterface = () => {
  let freshRef = 0;
  let listenersRef = Data$dMap$dInternal.Leaf;
  const notify = ev => {
    const $0 = traverse_2(v => v(ev));
    return () => {
      const $1 = listenersRef;
      return $0($1)();
    };
  };
  const locationState = () => {
    const $0 = Web$dHTML.window();
    const loc = Web$dHTML$dWindow.location($0)();
    const $1 = Web$dHTML.window();
    const $2 = Web$dHTML$dWindow.history($1)();
    const state = Web$dHTML$dHistory.state($2)();
    const pathname = Web$dHTML$dLocation.pathname(loc)();
    const search = Web$dHTML$dLocation.search(loc)();
    const hash = Web$dHTML$dLocation.hash(loc)();
    return {state, pathname, search, hash, path: pathname + search + hash};
  };
  const schedule = makeImmediate(() => {
    const $0 = locationState();
    return notify($0)();
  })();
  const stateFn = op => state => path => {
    const $0 = op(state)("")(path);
    return () => {
      const $1 = Web$dHTML.window();
      const $2 = Web$dHTML$dWindow.history($1)();
      $0($2)();
      return schedule();
    };
  };
  const listener = Web$dEvent$dEventTarget.eventListener(v => () => {
    const $0 = locationState();
    return notify($0)();
  })();
  const $0 = Web$dHTML.window();
  Web$dEvent$dEventTarget.addEventListener("popstate")(listener)(false)($0)();
  return {
    pushState: stateFn(Web$dHTML$dHistory.pushState),
    replaceState: stateFn(Web$dHTML$dHistory.replaceState),
    locationState,
    listen: k => () => {
      const fresh = freshRef;
      freshRef = fresh + 1 | 0;
      const $1 = listenersRef;
      listenersRef = Data$dMap$dInternal.insert(Data$dOrd.ordInt)(fresh)(k)($1);
      return () => {
        const $2 = listenersRef;
        listenersRef = Data$dMap$dInternal.delete(Data$dOrd.ordInt)(fresh)($2);
      };
    }
  };
};
const foldLocations = cb => init => psi => {
  const $0 = psi.locationState;
  return () => {
    const $1 = $0();
    const $2 = init($1)();
    let ref = $2;
    return psi.listen(loc => () => {
      const $3 = ref;
      const $4 = cb($3)(loc)();
      return ref = $4;
    })();
  };
};
const foldPaths = cb => init => psi => {
  const $0 = psi.locationState;
  return () => {
    const $1 = $0();
    const $2 = init($1.path)();
    let ref = $2;
    return psi.listen(loc => () => {
      const $3 = ref;
      const $4 = cb($3)(loc.path)();
      return ref = $4;
    })();
  };
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
  const $0 = go(Data$dMaybe.Nothing);
  return psi => {
    const $1 = psi.locationState;
    return () => {
      const $2 = $1();
      const $3 = $0($2.path)();
      let ref = $3;
      return psi.listen(loc => () => {
        const $4 = ref;
        const $5 = go($4)(loc.path)();
        return ref = $5;
      })();
    };
  };
};
const matches = x => matchesWith(Data$dFoldable.foldableEither)(Routing.match(x));
const paths = /* #__PURE__ */ matchesWith(Data$dFoldable.foldableMaybe)(Data$dMaybe.Just);
const locations = cb => psi => {
  const $0 = psi.locationState;
  return () => {
    const $1 = $0();
    cb(Data$dMaybe.Nothing)($1)();
    let ref = Data$dMaybe.$Maybe("Just", $1);
    return psi.listen(loc => () => {
      const $2 = ref;
      cb($2)(loc)();
      return ref = Data$dMaybe.$Maybe("Just", loc);
    })();
  };
};
export {foldLocations, foldPaths, locations, makeImmediate, makeInterface, matches, matchesWith, paths, traverse_, traverse_1, traverse_2};
