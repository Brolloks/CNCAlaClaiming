import * as $runtime from "../runtime.js";
import {bigIntSchema, dumpImpl} from "./foreign.js";
const lessThan = -1;
const greaterThan = 1;
const equal = 0;
const toJsOrdering = v => {
  if (v === "LT") { return -1; }
  if (v === "EQ") { return 0; }
  if (v === "GT") { return 1; }
  $runtime.fail();
};
const dumpBigIntJson = () => () => () => opts => json => dumpImpl(json, {...opts, schema: bigIntSchema});
const dump = () => opts => json => dumpImpl(json, opts);
export {dump, dumpBigIntJson, equal, greaterThan, lessThan, toJsOrdering};
export * from "./foreign.js";
