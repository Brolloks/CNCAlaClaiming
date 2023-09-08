import * as $runtime from "../runtime.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dSemigroup from "../Data.Semigroup/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as JSURI from "../JSURI/index.js";
const show = /* #__PURE__ */ Data$dShow.showArrayImpl(v => "(Tuple " + Data$dShow.showStringImpl(v._1) + " " + (() => {
  if (v._2.tag === "Just") { return "(Just " + Data$dShow.showStringImpl(v._2._1) + ")"; }
  if (v._2.tag === "Nothing") { return "Nothing"; }
  $runtime.fail();
})() + ")");
const traverse = /* #__PURE__ */ (() => Data$dTraversable.traversableArray.traverse(Data$dMaybe.applicativeMaybe))();
const FormURLEncoded = x => x;
const toArray = v => v;
const showFormUrlEncoded = {show: v => "(FormURLEncoded " + show(v) + ")"};
const semigroupFormUrlEncoded = Data$dSemigroup.semigroupArray;
const ordFormUrlEncoded = /* #__PURE__ */ Data$dOrd.ordArray(/* #__PURE__ */ Data$dTuple.ordTuple(Data$dOrd.ordString)(/* #__PURE__ */ Data$dMaybe.ordMaybe(Data$dOrd.ordString)));
const newtypeFormUrlEncoded = {Coercible0: () => {}};
const monoidFormUrlEncoded = Data$dMonoid.monoidArray;
const fromArray = FormURLEncoded;
const eqFormUrlEncoded = {
  eq: /* #__PURE__ */ Data$dEq.eqArrayImpl(x => y => x._1 === y._1 && (x._2.tag === "Nothing"
    ? y._2.tag === "Nothing"
    : x._2.tag === "Just" && y._2.tag === "Just" && x._2._1 === y._2._1))
};
const encode = /* #__PURE__ */ (() => {
  const $0 = Data$dMaybe.functorMaybe.map(Data$dString$dCommon.joinWith("&"));
  const $1 = traverse(v => {
    if (v._2.tag === "Nothing") { return JSURI._encodeFormURLComponent(v$1 => Data$dMaybe.Nothing, Data$dMaybe.Just, v._1); }
    if (v._2.tag === "Just") {
      return Data$dMaybe.applyMaybe.apply((() => {
        const $1 = JSURI._encodeFormURLComponent(v$1 => Data$dMaybe.Nothing, Data$dMaybe.Just, v._1);
        if ($1.tag === "Just") {
          return Data$dMaybe.$Maybe(
            "Just",
            (() => {
              const $2 = $1._1;
              return val => $2 + "=" + val;
            })()
          );
        }
        return Data$dMaybe.Nothing;
      })())(JSURI._encodeFormURLComponent(v$1 => Data$dMaybe.Nothing, Data$dMaybe.Just, v._2._1));
    }
    $runtime.fail();
  });
  return x => $0($1(x));
})();
const decode = /* #__PURE__ */ (() => {
  const $0 = traverse((() => {
    const $0 = Data$dString$dCommon.split("=");
    return x => {
      const $1 = $0(x);
      if ($1.length === 2) {
        return Data$dMaybe.applyMaybe.apply((() => {
          const $2 = JSURI._decodeFormURLComponent(v => Data$dMaybe.Nothing, Data$dMaybe.Just, $1[0]);
          if ($2.tag === "Just") {
            return Data$dMaybe.$Maybe(
              "Just",
              (() => {
                const $3 = $2._1;
                return val => Data$dTuple.$Tuple($3, Data$dMaybe.$Maybe("Just", val));
              })()
            );
          }
          return Data$dMaybe.Nothing;
        })())(JSURI._decodeFormURLComponent(v => Data$dMaybe.Nothing, Data$dMaybe.Just, $1[1]));
      }
      if ($1.length === 1) {
        return Data$dMaybe.applyMaybe.apply((() => {
          const $2 = JSURI._decodeFormURLComponent(v => Data$dMaybe.Nothing, Data$dMaybe.Just, $1[0]);
          if ($2.tag === "Just") { return Data$dMaybe.$Maybe("Just", Data$dTuple.Tuple($2._1)); }
          return Data$dMaybe.Nothing;
        })())(Data$dMaybe.$Maybe("Just", Data$dMaybe.Nothing));
      }
      return Data$dMaybe.Nothing;
    };
  })());
  const $1 = Data$dString$dCommon.split("&");
  return x => {
    const $2 = $0($1(x));
    if ($2.tag === "Just") { return Data$dMaybe.$Maybe("Just", $2._1); }
    return Data$dMaybe.Nothing;
  };
})();
export {
  FormURLEncoded,
  decode,
  encode,
  eqFormUrlEncoded,
  fromArray,
  monoidFormUrlEncoded,
  newtypeFormUrlEncoded,
  ordFormUrlEncoded,
  semigroupFormUrlEncoded,
  show,
  showFormUrlEncoded,
  toArray,
  traverse
};
