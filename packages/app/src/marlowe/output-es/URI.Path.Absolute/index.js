import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dList from "../Data.List/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Parsing from "../Parsing/index.js";
import * as Parsing$dCombinators from "../Parsing.Combinators/index.js";
import * as Parsing$dString from "../Parsing.String/index.js";
import * as URI$dPath$dSegment from "../URI.Path.Segment/index.js";
const fromFoldable = /* #__PURE__ */ (() => Data$dArray.fromFoldableImpl(Data$dList$dTypes.foldableList.foldr))();
const manyRec = /* #__PURE__ */ Data$dList.manyRec(Parsing.monadRecParserT)(Parsing.alternativeParserT);
const eq = /* #__PURE__ */ (() => {
  const $0 = Data$dEq.eqArrayImpl(Data$dEq.eqStringImpl);
  return x => y => {
    if (x.tag === "Nothing") { return y.tag === "Nothing"; }
    return x.tag === "Just" && y.tag === "Just" && x._1._1 === y._1._1 && $0(x._1._2)(y._1._2);
  };
})();
const compare = /* #__PURE__ */ (() => Data$dMaybe.ordMaybe(Data$dTuple.ordTuple(Data$dOrd.ordString)(Data$dOrd.ordArray(Data$dOrd.ordString))).compare)();
const PathAbsolute = x => x;
const print = v => {
  if (v.tag === "Nothing") { return "/"; }
  if (v.tag === "Just") {
    if (v._1._2.length === 0) { return "/" + v._1._1; }
    return "/" + v._1._1 + "/" + Data$dString$dCommon.joinWith("/")(Data$dFunctor.arrayMap(URI$dPath$dSegment.unsafeSegmentToString)(v._1._2));
  }
  $runtime.fail();
};
const parse = /* #__PURE__ */ (() => {
  const $0 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "/"))("'/'");
  return (state1, more, lift1, $$throw, done) => more(v1 => $0(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2 => more(v1$1 => Parsing$dCombinators.optionMaybe(URI$dPath$dSegment.parseSegmentNZ)(
      state2,
      more,
      lift1,
      $$throw,
      (state2$1, a$1) => more(v2$1 => {
        if (a$1.tag === "Just") {
          const $1 = Data$dTuple.Tuple(a$1._1);
          const $2 = manyRec((() => {
            const $2 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "/"))("'/'");
            return (state1$1, more$1, lift1$1, throw$1, done$1) => more$1(v2$2 => more$1(v1$2 => $2(
              state1$1,
              more$1,
              lift1$1,
              throw$1,
              (state2$2, a$2) => more$1(v2$3 => more$1(v3 => URI$dPath$dSegment.parseSegment(state2$2, more$1, lift1$1, throw$1, (state3, a$3) => more$1(v4 => done$1(state3, a$3)))))
            )));
          })());
          return more(v1$2 => $2(state2$1, more, lift1, $$throw, (state2$2, a$2) => more(v2$2 => done(state2$2, Data$dMaybe.$Maybe("Just", $1(fromFoldable(a$2)))))));
        }
        if (a$1.tag === "Nothing") { return done(state2$1, Data$dMaybe.Nothing); }
        $runtime.fail();
      })
    )))
  ));
})();
const genericPathAbsolute = {to: x => x, from: x => x};
const showPathAbsolute = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor((() => {
      const $0 = Data$dShow.showArrayImpl(URI$dPath$dSegment.showPathSegment.show);
      return {
        genericShowArgs: v => [
          (() => {
            if (v.tag === "Just") {
              return "(Just (Tuple (Segment.unsafeSegmentNZFromString (NonEmptyString.unsafeFromString " + Data$dShow.showStringImpl(v._1._1) + ")) " + $0(v._1._2) + "))";
            }
            if (v.tag === "Nothing") { return "Nothing"; }
            $runtime.fail();
          })()
        ]
      };
    })())({reflectSymbol: () => "PathAbsolute"});
    return x => $0["genericShow'"](x);
  })()
};
const eqPathAbsolute = {eq: x => y => eq(x)(y)};
const ordPathAbsolute = {compare: x => y => compare(x)(y), Eq0: () => eqPathAbsolute};
export {PathAbsolute, compare, eq, eqPathAbsolute, fromFoldable, genericPathAbsolute, manyRec, ordPathAbsolute, parse, print, showPathAbsolute};
