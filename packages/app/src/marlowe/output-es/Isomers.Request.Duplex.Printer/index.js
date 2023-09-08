import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dHTTP$dMethod from "../Data.HTTP.Method/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as JSURI from "../JSURI/index.js";
import * as Partial from "../Partial/index.js";
const Printer = x => x;
const semigroupPrinter = {append: v => v1 => x => v1(v(x))};
const put = str => state => (
  {body: state.body, headers: state.headers, method: state.method, path: {segments: Data$dArray.snoc(state.path.segments)(str), params: state.path.params, hash: state.path.hash}}
);
const printPath = v => (v.segments.length === 1 && v.segments[0] === ""
  ? "/"
  : Data$dString$dCommon.joinWith("/")(Data$dFunctor.arrayMap(s => {
      const v1 = JSURI._encodeURIComponent(v$1 => Data$dMaybe.Nothing, Data$dMaybe.Just, s);
      if (v1.tag === "Just") { return v1._1; }
      if (v1.tag === "Nothing") { return Partial._crashWith("URI encoding failed: " + s); }
      $runtime.fail();
    })(v.segments))) + (v.params.length === 0
  ? ""
  : "?" + Data$dString$dCommon.joinWith("&")(Data$dFunctor.arrayMap(v$1 => {
      if (v$1._2 === "") {
        const v1 = JSURI._encodeURIComponent(v$2 => Data$dMaybe.Nothing, Data$dMaybe.Just, v$1._1);
        if (v1.tag === "Just") { return v1._1; }
        if (v1.tag === "Nothing") { return Partial._crashWith("URI encoding failed: " + v$1._1); }
        $runtime.fail();
      }
      const v1 = JSURI._encodeURIComponent(v$2 => Data$dMaybe.Nothing, Data$dMaybe.Just, v$1._1);
      const v1$1 = JSURI._encodeURIComponent(v$2 => Data$dMaybe.Nothing, Data$dMaybe.Just, v$1._2);
      return (() => {
        if (v1.tag === "Just") { return v1._1 + "="; }
        if (v1.tag === "Nothing") { return Partial._crashWith("URI encoding failed: " + v$1._1) + "="; }
        $runtime.fail();
      })() + (() => {
        if (v1$1.tag === "Just") { return v1$1._1; }
        if (v1$1.tag === "Nothing") { return Partial._crashWith("URI encoding failed: " + v$1._2); }
        $runtime.fail();
      })();
    })(v.params))) + (v.hash === "" ? "" : "#" + v.hash);
const prefix = s => prt => x => prt(put(s)(x));
const param = key => val => state => (
  {
    body: state.body,
    headers: state.headers,
    method: state.method,
    path: {segments: state.path.segments, params: [Data$dTuple.$Tuple(key, val), ...state.path.params], hash: state.path.hash}
  }
);
const newtypePrinter = {Coercible0: () => {}};
const monoidRoutePRinter = {mempty: x => x, Semigroup0: () => semigroupPrinter};
const method = str => state => ({body: state.body, headers: state.headers, method: str, path: state.path});
const header = name => val => state => ({body: state.body, headers: [Data$dTuple.$Tuple(name, val), ...state.headers], method: state.method, path: state.path});
const hash = h => v => ({body: v.body, headers: v.headers, method: v.method, path: {segments: v.path.segments, params: v.path.params, hash: h}});
const flag = key => val => {
  if (val) { return param(key)(""); }
  return monoidRoutePRinter.mempty;
};
const emptyUrlParts = {segments: [], params: [], hash: ""};
const emptyRequestState = {body: Data$dMaybe.Nothing, headers: [], method: Data$dHTTP$dMethod.GET, path: emptyUrlParts};
const run = v => {
  const $0 = v(emptyRequestState);
  return {path: printPath($0.path), body: $0.body, headers: $0.headers, method: $0.method};
};
const body = b => v => ({body: Data$dMaybe.$Maybe("Just", b), headers: v.headers, method: v.method, path: v.path});
const accept = x => header("Accept")(x);
export {
  Printer,
  accept,
  body,
  emptyRequestState,
  emptyUrlParts,
  flag,
  hash,
  header,
  method,
  monoidRoutePRinter,
  newtypePrinter,
  param,
  prefix,
  printPath,
  put,
  run,
  semigroupPrinter
};
