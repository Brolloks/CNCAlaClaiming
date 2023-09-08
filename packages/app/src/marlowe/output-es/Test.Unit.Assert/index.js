import * as $runtime from "../runtime.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Test$dUnit from "../Test.Unit/index.js";
const expectFailure = reason => t => Effect$dAff._bind(Effect$dAff.try(t))(r => {
  const $0 = Effect$dAff._throwError(Effect$dException.error(reason));
  if (r.tag === "Left") { return Test$dUnit.success; }
  if (r.tag === "Right") { return $0; }
  $runtime.fail();
});
const equal$p = dictEq => reason => expected => actual => {
  if (dictEq.eq(expected)(actual)) { return Test$dUnit.success; }
  return Effect$dAff._throwError(Effect$dException.error(reason));
};
const equal = dictEq => dictShow => expected => actual => {
  if (dictEq.eq(expected)(actual)) { return Test$dUnit.success; }
  return Effect$dAff._throwError(Effect$dException.error("expected " + dictShow.show(expected) + ", got " + dictShow.show(actual)));
};
const shouldEqual = dictEq => dictShow => b => a => equal(dictEq)(dictShow)(a)(b);
const assertFalse = v => v1 => {
  if (!v1) { return Test$dUnit.success; }
  if (v1) { return Effect$dAff._throwError(Effect$dException.error(v)); }
  $runtime.fail();
};
const assert = v => v1 => {
  if (v1) { return Test$dUnit.success; }
  return Effect$dAff._throwError(Effect$dException.error(v));
};
export {assert, assertFalse, equal, equal$p, expectFailure, shouldEqual};
