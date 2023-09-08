import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dList from "../Data.List/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Parsing from "../Parsing/index.js";
import * as Parsing$dCombinators from "../Parsing.Combinators/index.js";
import * as Parsing$dString from "../Parsing.String/index.js";
import * as URI$dPath$dSegment from "../URI.Path.Segment/index.js";
const manyRec = /* #__PURE__ */ Data$dList.manyRec(Parsing.monadRecParserT)(Parsing.alternativeParserT);
const fromFoldable = /* #__PURE__ */ (() => Data$dArray.fromFoldableImpl(Data$dList$dTypes.foldableList.foldr))();
const eq = /* #__PURE__ */ (() => {
  const $0 = Data$dEq.eqArrayImpl(Data$dEq.eqStringImpl);
  return x => y => x._1 === y._1 && $0(x._2)(y._2);
})();
const compare = /* #__PURE__ */ (() => Data$dTuple.ordTuple(Data$dOrd.ordString)(Data$dOrd.ordArray(Data$dOrd.ordString)).compare)();
const PathRootless = x => x;
const print = v => {
  if (v._2.length === 0) { return v._1; }
  return v._1 + "/" + Data$dString$dCommon.joinWith("/")(Data$dFunctor.arrayMap(URI$dPath$dSegment.unsafeSegmentToString)(v._2));
};
const parse = (state1, more, lift1, $$throw, done) => more(v1 => URI$dPath$dSegment.parseSegmentNZ(
  state1,
  more,
  lift1,
  $$throw,
  (state2, a) => more(v2 => {
    const $0 = manyRec((() => {
      const $0 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "/"))("'/'");
      return (state1$1, more$1, lift1$1, throw$1, done$1) => more$1(v2$1 => more$1(v1$1 => $0(
        state1$1,
        more$1,
        lift1$1,
        throw$1,
        (state2$1, a$1) => more$1(v2$2 => more$1(v3 => URI$dPath$dSegment.parseSegment(state2$1, more$1, lift1$1, throw$1, (state3, a$2) => more$1(v4 => done$1(state3, a$2)))))
      )));
    })());
    return more(v1$1 => $0(state2, more, lift1, $$throw, (state2$1, a$1) => more(v2$1 => done(state2$1, Data$dTuple.$Tuple(a, fromFoldable(a$1))))));
  })
));
const genericPathRootless = {to: x => x, from: x => x};
const showPathRootless = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor((() => {
      const $0 = Data$dShow.showArrayImpl(URI$dPath$dSegment.showPathSegment.show);
      return {genericShowArgs: v => ["(Tuple (Segment.unsafeSegmentNZFromString (NonEmptyString.unsafeFromString " + Data$dShow.showStringImpl(v._1) + ")) " + $0(v._2) + ")"]};
    })())({reflectSymbol: () => "PathRootless"});
    return x => $0["genericShow'"](x);
  })()
};
const eqPathRootless = {eq: x => y => eq(x)(y)};
const ordPathRootless = {compare: x => y => compare(x)(y), Eq0: () => eqPathRootless};
export {PathRootless, compare, eq, eqPathRootless, fromFoldable, genericPathRootless, manyRec, ordPathRootless, parse, print, showPathRootless};
