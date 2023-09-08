import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Parsing$dCombinators from "../Parsing.Combinators/index.js";
import * as Parsing$dString from "../Parsing.String/index.js";
import * as URI$dCommon from "../URI.Common/index.js";
import * as URI$dFragment from "../URI.Fragment/index.js";
import * as URI$dHierarchicalPart from "../URI.HierarchicalPart/index.js";
import * as URI$dQuery from "../URI.Query/index.js";
import * as URI$dScheme from "../URI.Scheme/index.js";
const $URI = (_1, _2, _3, _4) => ({tag: "URI", _1, _2, _3, _4});
const URIIsSymbol = {reflectSymbol: () => "URI"};
const URI = value0 => value1 => value2 => value3 => $URI(value0, value1, value2, value3);
const print = opts => v => Data$dString$dCommon.joinWith("")(Data$dArray.mapMaybe(x => x)([
  Data$dMaybe.$Maybe("Just", v._1 + ":"),
  Data$dMaybe.$Maybe("Just", URI$dHierarchicalPart.print(opts)(v._2)),
  v._3.tag === "Just" ? Data$dMaybe.$Maybe("Just", "?" + opts.printQuery(v._3._1)) : Data$dMaybe.Nothing,
  v._4.tag === "Just" ? Data$dMaybe.$Maybe("Just", "#" + opts.printFragment(v._4._1)) : Data$dMaybe.Nothing
]));
const parser = opts => {
  const $0 = URI$dHierarchicalPart.parser(opts);
  return (state1, more, lift1, $$throw, done) => more(v2 => more(v1 => more(v2$1 => more(v2$2 => more(v2$3 => more(v1$1 => URI$dScheme.parser(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2$4 => {
      const $1 = URI(a);
      return more(v3 => $0(
        state2,
        more,
        lift1,
        $$throw,
        (state3, a$1) => more(v4 => {
          const $2 = $1(a$1);
          return more(v3$1 => Parsing$dCombinators.optionMaybe(URI$dCommon.wrapParser(Data$dIdentity.monadIdentity)(opts.parseQuery)(URI$dQuery.parser))(
            state3,
            more,
            lift1,
            $$throw,
            (state3$1, a$2) => more(v4$1 => {
              const $3 = $2(a$2);
              return more(v3$2 => Parsing$dCombinators.optionMaybe(URI$dCommon.wrapParser(Data$dIdentity.monadIdentity)(opts.parseFragment)(URI$dFragment.parser))(
                state3$1,
                more,
                lift1,
                $$throw,
                (state3$2, a$3) => more(v4$2 => {
                  const $4 = $3(a$3);
                  return more(v2$5 => more(v3$3 => Parsing$dString.eof(state3$2, more, lift1, $$throw, (state3$3, a$4) => more(v4$3 => done(state3$3, $4)))));
                })
              ));
            })
          ));
        })
      ));
    })
  )))))));
};
const genericURI = {
  to: x => $URI(x._1, x._2._1, x._2._2._1, x._2._2._2),
  from: x => Data$dGeneric$dRep.$Product(x._1, Data$dGeneric$dRep.$Product(x._2, Data$dGeneric$dRep.$Product(x._3, x._4)))
};
const showURI = dictShow => {
  const showHierarchicalPart = URI$dHierarchicalPart.showHierarchicalPart(dictShow);
  return dictShow1 => {
    const showHierarchicalPart1 = showHierarchicalPart(dictShow1);
    return dictShow2 => {
      const showHierarchicalPart2 = showHierarchicalPart1(dictShow2);
      return dictShow3 => {
        const genericShowArgsProduct1 = Data$dShow$dGeneric.genericShowArgsProduct((() => {
          const $0 = showHierarchicalPart2(dictShow3);
          return {genericShowArgs: v => [$0.show(v)]};
        })());
        return dictShow4 => {
          const genericShowArgsProduct2 = Data$dShow$dGeneric.genericShowArgsProduct({
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
                const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct({
                  genericShowArgs: v => ["(Scheme.unsafeFromString " + Data$dShow.showStringImpl(v) + ")"]
                })(genericShowArgsProduct1(genericShowArgsProduct2({
                  genericShowArgs: v => [
                    (() => {
                      if (v.tag === "Just") { return "(Just " + dictShow5.show(v._1) + ")"; }
                      if (v.tag === "Nothing") { return "Nothing"; }
                      $runtime.fail();
                    })()
                  ]
                }))))(URIIsSymbol);
                return x => $0["genericShow'"](Data$dGeneric$dRep.$Product(x._1, Data$dGeneric$dRep.$Product(x._2, Data$dGeneric$dRep.$Product(x._3, x._4))));
              })()
            }
          );
        };
      };
    };
  };
};
const eqURI = dictEq => dictEq1 => dictEq2 => dictEq3 => dictEq4 => dictEq5 => (
  {
    eq: x => y => x._1 === y._1 && URI$dHierarchicalPart.eqHierarchicalPart(dictEq)(dictEq1)(dictEq2)(dictEq3).eq(x._2)(y._2) && (x._3.tag === "Nothing"
      ? y._3.tag === "Nothing"
      : x._3.tag === "Just" && y._3.tag === "Just" && dictEq4.eq(x._3._1)(y._3._1)) && (x._4.tag === "Nothing"
      ? y._4.tag === "Nothing"
      : x._4.tag === "Just" && y._4.tag === "Just" && dictEq5.eq(x._4._1)(y._4._1))
  }
);
const ordURI = dictOrd => {
  const ordHierarchicalPart = URI$dHierarchicalPart.ordHierarchicalPart(dictOrd);
  const eqURI1 = eqURI(dictOrd.Eq0());
  return dictOrd1 => {
    const ordHierarchicalPart1 = ordHierarchicalPart(dictOrd1);
    const eqURI2 = eqURI1(dictOrd1.Eq0());
    return dictOrd2 => {
      const ordHierarchicalPart2 = ordHierarchicalPart1(dictOrd2);
      const eqURI3 = eqURI2(dictOrd2.Eq0());
      return dictOrd3 => {
        const eqURI4 = eqURI3(dictOrd3.Eq0());
        return dictOrd4 => {
          const eqURI5 = eqURI4(dictOrd4.Eq0());
          return dictOrd5 => {
            const eqURI6 = eqURI5(dictOrd5.Eq0());
            return {
              compare: x => y => {
                const v = Data$dOrd.ordString.compare(x._1)(y._1);
                if (v === "LT") { return Data$dOrdering.LT; }
                if (v === "GT") { return Data$dOrdering.GT; }
                const v1 = ordHierarchicalPart2(dictOrd3).compare(x._2)(y._2);
                if (v1 === "LT") { return Data$dOrdering.LT; }
                if (v1 === "GT") { return Data$dOrdering.GT; }
                const v2 = Data$dMaybe.ordMaybe(dictOrd4).compare(x._3)(y._3);
                if (v2 === "LT") { return Data$dOrdering.LT; }
                if (v2 === "GT") { return Data$dOrdering.GT; }
                return Data$dMaybe.ordMaybe(dictOrd5).compare(x._4)(y._4);
              },
              Eq0: () => eqURI6
            };
          };
        };
      };
    };
  };
};
const _scheme = dictStrong => pab => dictStrong.Profunctor0().dimap(s => Data$dTuple.$Tuple(s._1, b => $URI(b, s._2, s._3, s._4)))(v => v._2(v._1))(dictStrong.first(pab));
const _query = dictStrong => pab => dictStrong.Profunctor0().dimap(s => Data$dTuple.$Tuple(s._3, b => $URI(s._1, s._2, b, s._4)))(v => v._2(v._1))(dictStrong.first(pab));
const _hierPart = dictStrong => pab => dictStrong.Profunctor0().dimap(s => Data$dTuple.$Tuple(s._2, b => $URI(s._1, b, s._3, s._4)))(v => v._2(v._1))(dictStrong.first(pab));
const _fragment = dictStrong => pab => dictStrong.Profunctor0().dimap(s => Data$dTuple.$Tuple(s._4, b => $URI(s._1, s._2, s._3, b)))(v => v._2(v._1))(dictStrong.first(pab));
export {$URI, URI, URIIsSymbol, _fragment, _hierPart, _query, _scheme, eqURI, genericURI, ordURI, parser, print, showURI};
