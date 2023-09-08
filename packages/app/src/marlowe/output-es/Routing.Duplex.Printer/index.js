import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as JSURI from "../JSURI/index.js";
import * as Routing$dDuplex$dTypes from "../Routing.Duplex.Types/index.js";
const RoutePrinter = x => x;
const semigroupRoutePrinter = {append: v => v1 => x => v1(v(x))};
const put = str => state => ({segments: Data$dArray.snoc(state.segments)(str), params: state.params, hash: state.hash});
const printPath = v => (v.segments.length === 1 && v.segments[0] === "" ? "/" : Data$dString$dCommon.joinWith("/")(Data$dArray.mapMaybe(JSURI.encodeURIComponent)(v.segments))) + (v.params.length === 0
  ? ""
  : "?" + Data$dString$dCommon.joinWith("&")(Data$dArray.mapMaybe(v$1 => {
      if (v$1._2 === "") { return JSURI._encodeURIComponent(v$2 => Data$dMaybe.Nothing, Data$dMaybe.Just, v$1._1); }
      const $0 = JSURI._encodeURIComponent(v$2 => Data$dMaybe.Nothing, Data$dMaybe.Just, v$1._1);
      const $1 = JSURI._encodeURIComponent(v$2 => Data$dMaybe.Nothing, Data$dMaybe.Just, v$1._2);
      const $2 = (() => {
        if ($1.tag === "Nothing") { return Data$dMaybe.$Maybe("Just", "="); }
        if ($1.tag === "Just") { return Data$dMaybe.$Maybe("Just", "=" + $1._1); }
        $runtime.fail();
      })();
      if ($0.tag === "Nothing") { return $2; }
      if ($2.tag === "Nothing") { return $0; }
      if ($0.tag === "Just" && $2.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0._1 + $2._1); }
      $runtime.fail();
    })(v.params))) + (v.hash === "" ? "" : "#" + v.hash);
const param = key => val => state => ({segments: state.segments, params: [Data$dTuple.$Tuple(key, val), ...state.params], hash: state.hash});
const newtypeRoutePrinter = {Coercible0: () => {}};
const run = x => printPath(x(Routing$dDuplex$dTypes.emptyRouteState));
const monoidRoutePRinter = {mempty: x => x, Semigroup0: () => semigroupRoutePrinter};
const hash = h => v => ({segments: v.segments, params: v.params, hash: h});
const flag = key => val => {
  if (val) { return param(key)(""); }
  return monoidRoutePRinter.mempty;
};
export {RoutePrinter, flag, hash, monoidRoutePRinter, newtypeRoutePrinter, param, printPath, put, run, semigroupRoutePrinter};
