import * as Routing$dHash from "../Routing.Hash/index.js";
const makeDriver = dictFoldable => parser => printer => (
  {initialize: x => Routing$dHash.matchesWith(dictFoldable)(parser)(v => x), navigate: x => Routing$dHash.setHash(printer(x)), redirect: x => Routing$dHash.setHash(printer(x))}
);
export {makeDriver};
