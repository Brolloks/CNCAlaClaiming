import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Parsing$dCombinators from "../Parsing.Combinators/index.js";
import * as Parsing$dString from "../Parsing.String/index.js";
import * as URI$dCommon from "../URI.Common/index.js";
import * as URI$dFragment from "../URI.Fragment/index.js";
import * as URI$dQuery from "../URI.Query/index.js";
import * as URI$dRelativePart from "../URI.RelativePart/index.js";
const $RelativeRef = (_1, _2, _3) => ({tag: "RelativeRef", _1, _2, _3});
const RelativeRefIsSymbol = {reflectSymbol: () => "RelativeRef"};
const RelativeRef = value0 => value1 => value2 => $RelativeRef(value0, value1, value2);
const print = opts => v => Data$dString$dCommon.joinWith("")(Data$dArray.mapMaybe(x => x)([
  Data$dMaybe.$Maybe("Just", URI$dRelativePart.print(opts)(v._1)),
  v._2.tag === "Just" ? Data$dMaybe.$Maybe("Just", "?" + opts.printQuery(v._2._1)) : Data$dMaybe.Nothing,
  v._3.tag === "Just" ? Data$dMaybe.$Maybe("Just", "#" + opts.printFragment(v._3._1)) : Data$dMaybe.Nothing
]));
const parser = opts => {
  const $0 = URI$dRelativePart.parser(opts);
  return (state1, more, lift1, $$throw, done) => more(v2 => more(v1 => more(v2$1 => more(v2$2 => more(v1$1 => $0(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2$3 => {
      const $1 = RelativeRef(a);
      return more(v3 => Parsing$dCombinators.optionMaybe(URI$dCommon.wrapParser(Data$dIdentity.monadIdentity)(opts.parseQuery)(URI$dQuery.parser))(
        state2,
        more,
        lift1,
        $$throw,
        (state3, a$1) => more(v4 => {
          const $2 = $1(a$1);
          return more(v3$1 => Parsing$dCombinators.optionMaybe(URI$dCommon.wrapParser(Data$dIdentity.monadIdentity)(opts.parseFragment)(URI$dFragment.parser))(
            state3,
            more,
            lift1,
            $$throw,
            (state3$1, a$2) => more(v4$1 => {
              const $3 = $2(a$2);
              return more(v2$4 => more(v3$2 => Parsing$dString.eof(state3$1, more, lift1, $$throw, (state3$2, a$3) => more(v4$2 => done(state3$2, $3)))));
            })
          ));
        })
      ));
    })
  ))))));
};
const genericRelativeRef = {to: x => $RelativeRef(x._1, x._2._1, x._2._2), from: x => Data$dGeneric$dRep.$Product(x._1, Data$dGeneric$dRep.$Product(x._2, x._3))};
const showRelativeRef = dictShow => {
  const showRelativePart = URI$dRelativePart.showRelativePart(dictShow);
  return dictShow1 => {
    const showRelativePart1 = showRelativePart(dictShow1);
    return dictShow2 => {
      const showRelativePart2 = showRelativePart1(dictShow2);
      return dictShow3 => {
        const genericShowArgsProduct = Data$dShow$dGeneric.genericShowArgsProduct((() => {
          const $0 = showRelativePart2(dictShow3);
          return {genericShowArgs: v => [$0.show(v)]};
        })());
        return dictShow4 => {
          const genericShowArgsProduct1 = Data$dShow$dGeneric.genericShowArgsProduct({
            genericShowArgs: v => [
              (() => {
                if (v.tag === "Just") { return "(Just " + dictShow4.show(v._1) + ")"; }
                if (v.tag === "Nothing") { return "Nothing"; }
                $runtime.fail();
              })()
            ]
          });
          return dictShow5 => (
            {
              show: (() => {
                const $0 = Data$dShow$dGeneric.genericShowConstructor(genericShowArgsProduct(genericShowArgsProduct1({
                  genericShowArgs: v => [
                    (() => {
                      if (v.tag === "Just") { return "(Just " + dictShow5.show(v._1) + ")"; }
                      if (v.tag === "Nothing") { return "Nothing"; }
                      $runtime.fail();
                    })()
                  ]
                })))(RelativeRefIsSymbol);
                return x => $0["genericShow'"](Data$dGeneric$dRep.$Product(x._1, Data$dGeneric$dRep.$Product(x._2, x._3)));
              })()
            }
          );
        };
      };
    };
  };
};
const eqRelativeRef = dictEq => dictEq1 => dictEq2 => dictEq3 => dictEq4 => dictEq5 => (
  {
    eq: x => y => URI$dRelativePart.eqRelativePart(dictEq)(dictEq1)(dictEq2)(dictEq3).eq(x._1)(y._1) && (x._2.tag === "Nothing"
      ? y._2.tag === "Nothing"
      : x._2.tag === "Just" && y._2.tag === "Just" && dictEq4.eq(x._2._1)(y._2._1)) && (x._3.tag === "Nothing"
      ? y._3.tag === "Nothing"
      : x._3.tag === "Just" && y._3.tag === "Just" && dictEq5.eq(x._3._1)(y._3._1))
  }
);
const ordRelativeRef = dictOrd => {
  const ordRelativePart = URI$dRelativePart.ordRelativePart(dictOrd);
  const eqRelativeRef1 = eqRelativeRef(dictOrd.Eq0());
  return dictOrd1 => {
    const ordRelativePart1 = ordRelativePart(dictOrd1);
    const eqRelativeRef2 = eqRelativeRef1(dictOrd1.Eq0());
    return dictOrd2 => {
      const ordRelativePart2 = ordRelativePart1(dictOrd2);
      const eqRelativeRef3 = eqRelativeRef2(dictOrd2.Eq0());
      return dictOrd3 => {
        const eqRelativeRef4 = eqRelativeRef3(dictOrd3.Eq0());
        return dictOrd4 => {
          const eqRelativeRef5 = eqRelativeRef4(dictOrd4.Eq0());
          return dictOrd5 => {
            const eqRelativeRef6 = eqRelativeRef5(dictOrd5.Eq0());
            return {
              compare: x => y => {
                const v = ordRelativePart2(dictOrd3).compare(x._1)(y._1);
                if (v === "LT") { return Data$dOrdering.LT; }
                if (v === "GT") { return Data$dOrdering.GT; }
                const v1 = Data$dMaybe.ordMaybe(dictOrd4).compare(x._2)(y._2);
                if (v1 === "LT") { return Data$dOrdering.LT; }
                if (v1 === "GT") { return Data$dOrdering.GT; }
                return Data$dMaybe.ordMaybe(dictOrd5).compare(x._3)(y._3);
              },
              Eq0: () => eqRelativeRef6
            };
          };
        };
      };
    };
  };
};
const _relPart = dictStrong => pab => dictStrong.Profunctor0().dimap(s => Data$dTuple.$Tuple(s._1, b => $RelativeRef(b, s._2, s._3)))(v => v._2(v._1))(dictStrong.first(pab));
const _query = dictStrong => pab => dictStrong.Profunctor0().dimap(s => Data$dTuple.$Tuple(s._2, b => $RelativeRef(s._1, b, s._3)))(v => v._2(v._1))(dictStrong.first(pab));
const _fragment = dictStrong => pab => dictStrong.Profunctor0().dimap(s => Data$dTuple.$Tuple(s._3, b => $RelativeRef(s._1, s._2, b)))(v => v._2(v._1))(dictStrong.first(pab));
export {$RelativeRef, RelativeRef, RelativeRefIsSymbol, _fragment, _query, _relPart, eqRelativeRef, genericRelativeRef, ordRelativeRef, parser, print, showRelativeRef};
