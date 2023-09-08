import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dList from "../Data.List/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dSemigroup from "../Data.Semigroup/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Parsing from "../Parsing/index.js";
import * as Parsing$dCombinators from "../Parsing.Combinators/index.js";
import * as Parsing$dString from "../Parsing.String/index.js";
import * as URI$dPath$dSegment from "../URI.Path.Segment/index.js";
const Path = x => x;
const semigroupPath = Data$dSemigroup.semigroupArray;
const print = v => {
  if (v.length === 0) { return ""; }
  return "/" + Data$dString$dCommon.joinWith("/")(Data$dFunctor.arrayMap(URI$dPath$dSegment.unsafeSegmentToString)(v));
};
const parser = /* #__PURE__ */ (() => {
  const $0 = Data$dArray.fromFoldableImpl(Data$dList$dTypes.foldableList.foldr);
  const $1 = Data$dList.manyRec(Parsing.monadRecParserT)(Parsing.alternativeParserT)((() => {
    const $1 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "/"))("'/'");
    return (state1, more, lift1, $$throw, done) => more(v2 => more(v1 => $1(
      state1,
      more,
      lift1,
      $$throw,
      (state2, a) => more(v2$1 => more(v3 => URI$dPath$dSegment.parseSegment(state2, more, lift1, $$throw, (state3, a$1) => more(v4 => done(state3, a$1)))))
    )));
  })());
  return (state1, more, lift1, $$throw, done) => more(v1 => $1(state1, more, lift1, $$throw, (state2, a) => more(v2 => done(state2, $0(a)))));
})();
const ordPath = /* #__PURE__ */ Data$dOrd.ordArray(Data$dOrd.ordString);
const monoidPath = Data$dMonoid.monoidArray;
const genericPath = {to: x => x, from: x => x};
const showPath = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor((() => {
      const $0 = Data$dShow.showArrayImpl(URI$dPath$dSegment.showPathSegment.show);
      return {genericShowArgs: v => [$0(v)]};
    })())({reflectSymbol: () => "Path"});
    return x => $0["genericShow'"](x);
  })()
};
const eqPath = {eq: /* #__PURE__ */ Data$dEq.eqArrayImpl(Data$dEq.eqStringImpl)};
export {Path, eqPath, genericPath, monoidPath, ordPath, parser, print, semigroupPath, showPath};
