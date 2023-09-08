import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dList from "../Data.List/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as JSURI from "../JSURI/index.js";
import * as Parsing from "../Parsing/index.js";
import * as Parsing$dCombinators from "../Parsing.Combinators/index.js";
import * as Parsing$dString from "../Parsing.String/index.js";
import * as URI$dCommon from "../URI.Common/index.js";
const join1With = splice => xs => Data$dFoldable.foldlArray(v => v1 => {
  if (v.init) { return {init: false, acc: v1}; }
  return {init: false, acc: v.acc + splice + v1};
})({init: true, acc: ""})(xs).acc;
const PathSegmentNZNC = x => x;
const PathSegmentNZ = x => x;
const PathSegment = x => x;
const unsafeSegmentToString = v => v;
const unsafeSegmentNZToString = v => v;
const unsafeSegmentNZNCToString = v => v;
const unsafeSegmentNZNCFromString = PathSegmentNZNC;
const unsafeSegmentNZFromString = PathSegmentNZ;
const unsafeSegmentFromString = PathSegment;
const showPathSegmentNZNC = {show: v => "(Segment.unsafeSegmentNZNCToString (NonEmptyString.unsafeFromString " + Data$dShow.showStringImpl(v) + "))"};
const showPathSegmentNZ = {show: v => "(Segment.unsafeSegmentNZFromString (NonEmptyString.unsafeFromString " + Data$dShow.showStringImpl(v) + "))"};
const showPathSegment = {show: v => "(Segment.unsafeSegmentToString " + Data$dShow.showStringImpl(v) + ")"};
const segmentToString = v => {
  const $0 = JSURI._decodeURIComponent(v$1 => Data$dMaybe.Nothing, Data$dMaybe.Just, v);
  if ($0.tag === "Just") { return $0._1; }
  $runtime.fail();
};
const segmentNZToString = v => URI$dCommon.decodeURIComponent$p(v);
const segmentNZNCToString = v => URI$dCommon.decodeURIComponent$p(v);
const segmentNCChar = /* #__PURE__ */ (() => {
  const $0 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "@"))("'@'");
  return (v2, $1, $2, $3, $4) => {
    const $5 = v2._1;
    const $6 = v2._2;
    return $1(v3 => URI$dCommon.unreserved(
      Parsing.$ParseState($5, $6, false),
      $1,
      $2,
      (v4, $7) => {
        const $8 = v4._3;
        return $1(v5 => {
          if ($8) { return $3(v4, $7); }
          const $9 = v2._1;
          const $10 = v2._2;
          return $1(v3$1 => URI$dCommon.subDelims(
            Parsing.$ParseState($9, $10, false),
            $1,
            $2,
            (v4$1, $11) => {
              const $12 = v4$1._3;
              return $1(v5$1 => {
                if ($12) { return $3(v4$1, $11); }
                return $0(v2, $1, $2, $3, $4);
              });
            },
            $4
          ));
        });
      },
      $4
    ));
  };
})();
const segmentNZNCFromString = x => {
  const $0 = URI$dCommon.printEncoded(segmentNCChar)(x);
  if ($0 === "") { $runtime.fail(); }
  return $0;
};
const segmentChar = /* #__PURE__ */ (() => {
  const $0 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === ":"))("':'");
  return (v2, $1, $2, $3, $4) => {
    const $5 = v2._1;
    const $6 = v2._2;
    return $1(v3 => segmentNCChar(
      Parsing.$ParseState($5, $6, false),
      $1,
      $2,
      (v4, $7) => {
        const $8 = v4._3;
        return $1(v5 => {
          if ($8) { return $3(v4, $7); }
          return $0(v2, $1, $2, $3, $4);
        });
      },
      $4
    ));
  };
})();
const segmentFromString = x => URI$dCommon.printEncoded(segmentChar)(x);
const segmentNZFromString = x => {
  const $0 = URI$dCommon.printEncoded(segmentChar)(x);
  if ($0 === "") { $runtime.fail(); }
  return $0;
};
const printSegmentNZNC = x => x;
const printSegmentNZ = x => x;
const printSegment = unsafeSegmentToString;
const parseSegmentNZNC = /* #__PURE__ */ (() => {
  const $0 = Data$dArray.some(Parsing.alternativeParserT)(Parsing.lazyParserT)((v2, $0, $1, $2, $3) => {
    const $4 = v2._1;
    const $5 = v2._2;
    return $0(v3 => URI$dCommon.pctEncoded(
      Parsing.$ParseState($4, $5, false),
      $0,
      $1,
      (v4, $6) => {
        const $7 = v4._3;
        return $0(v5 => {
          if ($7) { return $2(v4, $6); }
          return $0(v1 => segmentNCChar(v2, $0, $1, $2, (state2, a) => $0(v2$1 => $3(state2, Data$dString$dCodeUnits.singleton(a)))));
        });
      },
      $3
    ));
  });
  return (state1, more, lift1, $$throw, done) => more(v1 => $0(state1, more, lift1, $$throw, (state2, a) => more(v2 => done(state2, join1With("")(a)))));
})();
const parseSegmentNZ = /* #__PURE__ */ (() => {
  const $0 = Data$dArray.some(Parsing.alternativeParserT)(Parsing.lazyParserT)((v2, $0, $1, $2, $3) => {
    const $4 = v2._1;
    const $5 = v2._2;
    return $0(v3 => URI$dCommon.pctEncoded(
      Parsing.$ParseState($4, $5, false),
      $0,
      $1,
      (v4, $6) => {
        const $7 = v4._3;
        return $0(v5 => {
          if ($7) { return $2(v4, $6); }
          return $0(v1 => segmentChar(v2, $0, $1, $2, (state2, a) => $0(v2$1 => $3(state2, Data$dString$dCodeUnits.singleton(a)))));
        });
      },
      $3
    ));
  });
  return (state1, more, lift1, $$throw, done) => more(v1 => $0(state1, more, lift1, $$throw, (state2, a) => more(v2 => done(state2, join1With("")(a)))));
})();
const parseSegment = /* #__PURE__ */ (() => {
  const $0 = Data$dList.manyRec(Parsing.monadRecParserT)(Parsing.alternativeParserT)((v2, $0, $1, $2, $3) => {
    const $4 = v2._1;
    const $5 = v2._2;
    return $0(v3 => URI$dCommon.pctEncoded(
      Parsing.$ParseState($4, $5, false),
      $0,
      $1,
      (v4, $6) => {
        const $7 = v4._3;
        return $0(v5 => {
          if ($7) { return $2(v4, $6); }
          return $0(v1 => segmentChar(v2, $0, $1, $2, (state2, a) => $0(v2$1 => $3(state2, Data$dString$dCodeUnits.singleton(a)))));
        });
      },
      $3
    ));
  });
  return (state1, more, lift1, $$throw, done) => more(v1 => $0(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2 => done(
      state2,
      (() => {
        const go = go$a0$copy => go$a1$copy => {
          let go$a0 = go$a0$copy, go$a1 = go$a1$copy, go$c = true, go$r;
          while (go$c) {
            const b = go$a0, v = go$a1;
            if (v.tag === "Nil") {
              go$c = false;
              go$r = b;
              continue;
            }
            if (v.tag === "Cons") {
              go$a0 = b.init ? {init: false, acc: v._1} : {init: false, acc: b.acc + "" + v._1};
              go$a1 = v._2;
              continue;
            }
            $runtime.fail();
          }
          return go$r;
        };
        return go({init: true, acc: ""})(a).acc;
      })()
    ))
  ));
})();
const ordPathSegmentNZNC = Data$dOrd.ordString;
const ordPathSegmentNZ = Data$dOrd.ordString;
const ordPathSegment = Data$dOrd.ordString;
const eqPathSegmentNZNC = Data$dEq.eqString;
const eqPathSegmentNZ = Data$dEq.eqString;
const eqPathSegment = Data$dEq.eqString;
export {
  PathSegment,
  PathSegmentNZ,
  PathSegmentNZNC,
  eqPathSegment,
  eqPathSegmentNZ,
  eqPathSegmentNZNC,
  join1With,
  ordPathSegment,
  ordPathSegmentNZ,
  ordPathSegmentNZNC,
  parseSegment,
  parseSegmentNZ,
  parseSegmentNZNC,
  printSegment,
  printSegmentNZ,
  printSegmentNZNC,
  segmentChar,
  segmentFromString,
  segmentNCChar,
  segmentNZFromString,
  segmentNZNCFromString,
  segmentNZNCToString,
  segmentNZToString,
  segmentToString,
  showPathSegment,
  showPathSegmentNZ,
  showPathSegmentNZNC,
  unsafeSegmentFromString,
  unsafeSegmentNZFromString,
  unsafeSegmentNZNCFromString,
  unsafeSegmentNZNCToString,
  unsafeSegmentNZToString,
  unsafeSegmentToString
};
