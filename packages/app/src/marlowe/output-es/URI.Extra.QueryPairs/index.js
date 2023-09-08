import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dList from "../Data.List/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dSemigroup from "../Data.Semigroup/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as JSURI from "../JSURI/index.js";
import * as Parsing from "../Parsing/index.js";
import * as Parsing$dCombinators from "../Parsing.Combinators/index.js";
import * as Parsing$dString from "../Parsing.String/index.js";
import * as Parsing$dString$dBasic from "../Parsing.String.Basic/index.js";
import * as URI$dCommon from "../URI.Common/index.js";
const fromFoldable = /* #__PURE__ */ Data$dArray.fromFoldableImpl(Data$dFoldable.foldrArray);
const someRec = /* #__PURE__ */ Data$dList.someRec(Parsing.monadRecParserT)(Parsing.alternativeParserT);
const manyRec = /* #__PURE__ */ Data$dList.manyRec(Parsing.monadRecParserT)(Parsing.alternativeParserT);
const fromFoldable1 = /* #__PURE__ */ (() => Data$dArray.fromFoldableImpl(Data$dList$dTypes.foldableList.foldr))();
const QueryPairsIsSymbol = {reflectSymbol: () => "QueryPairs"};
const Value = x => x;
const QueryPairs = x => x;
const Key = x => x;
const valueToString = v => {
  const $0 = JSURI._decodeURIComponent(v$1 => Data$dMaybe.Nothing, Data$dMaybe.Just, v);
  if ($0.tag === "Just") { return $0._1; }
  $runtime.fail();
};
const unsafeValueToString = v => v;
const unsafeValueFromString = Value;
const unsafeKeyToString = v => v;
const unsafeKeyFromString = Key;
const showValue = {show: v => "(QueryPairs.unsafeValueFromString " + Data$dShow.showStringImpl(v) + ")"};
const showKey = {show: v => "(QueryPairs.unsafeKeyFromString " + Data$dShow.showStringImpl(v) + ")"};
const semigroupValue = Data$dSemigroup.semigroupString;
const semigroupQueryPairs = Data$dSemigroup.semigroupArray;
const semigroupKey = Data$dSemigroup.semigroupString;
const print = printK => printV => v => Data$dString$dCommon.joinWith("&")(fromFoldable(Data$dFunctor.arrayMap(v1 => {
  if (v1._2.tag === "Nothing") { return printK(v1._1); }
  if (v1._2.tag === "Just") { return printK(v1._1) + "=" + printV(v1._2._1); }
  $runtime.fail();
})(v)));
const ordValue = Data$dOrd.ordString;
const ordQueryPairs = dictOrd => {
  const ordTuple = Data$dTuple.ordTuple(dictOrd);
  return dictOrd1 => Data$dOrd.ordArray(ordTuple(Data$dMaybe.ordMaybe(dictOrd1)));
};
const ordKey = Data$dOrd.ordString;
const monoidValue = Data$dMonoid.monoidString;
const monoidQueryPairs = Data$dMonoid.monoidArray;
const monoidKey = Data$dMonoid.monoidString;
const keyToString = v => {
  const $0 = JSURI._decodeURIComponent(v$1 => Data$dMaybe.Nothing, Data$dMaybe.Just, v);
  if ($0.tag === "Just") { return $0._1; }
  $runtime.fail();
};
const keyPartChar = /* #__PURE__ */ (() => {
  const $0 = Parsing$dString$dBasic.oneOf(["!", "$", "'", "(", ")", "*", "+", ",", ":", "@", "/", "?"]);
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
          return $0(v2, $1, $2, $3, $4);
        });
      },
      $4
    ));
  };
})();
const valueFromString = x => URI$dCommon.printEncoded(keyPartChar)(x);
const valuePartChar = /* #__PURE__ */ (() => {
  const $0 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "="))("'='");
  return (v2, $1, $2, $3, $4) => {
    const $5 = v2._1;
    const $6 = v2._2;
    return $1(v3 => keyPartChar(
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
const parsePart = parseK => parseV => {
  const $0 = URI$dCommon.wrapParser(Data$dIdentity.monadIdentity)(x => parseK(x))((() => {
    const $0 = someRec((v2, $0, $1, $2, $3) => {
      const $4 = v2._1;
      const $5 = v2._2;
      return $0(v3 => $0(v1 => keyPartChar(
        Parsing.$ParseState($4, $5, false),
        $0,
        $1,
        (v4, $6) => {
          const $7 = v4._3;
          return $0(v5 => {
            if ($7) { return $2(v4, $6); }
            return URI$dCommon.pctEncoded(v2, $0, $1, $2, $3);
          });
        },
        (state2, a) => $0(v2$1 => $3(state2, Data$dString$dCodeUnits.singleton(a)))
      )));
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
  })());
  return (state1, more, lift1, $$throw, done) => more(v1 => $0(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2 => {
      const $1 = URI$dCommon.wrapParser(Data$dIdentity.monadIdentity)(Data$dTraversable.traversableMaybe.traverse(Data$dEither.applicativeEither)(x => parseV(x)))(Parsing$dCombinators.optionMaybe((() => {
        const $1 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "="))("'='");
        return (state1$1, more$1, lift1$1, throw$1, done$1) => more$1(v1$1 => $1(
          state1$1,
          more$1,
          lift1$1,
          throw$1,
          (state2$1, a$1) => more$1(v2$1 => {
            const $2 = manyRec((v2$2, $2, $3, $4, $5) => {
              const $6 = v2$2._1;
              const $7 = v2$2._2;
              return $2(v3 => $2(v1$2 => valuePartChar(
                Parsing.$ParseState($6, $7, false),
                $2,
                $3,
                (v4, $8) => {
                  const $9 = v4._3;
                  return $2(v5 => {
                    if ($9) { return $4(v4, $8); }
                    return URI$dCommon.pctEncoded(v2$2, $2, $3, $4, $5);
                  });
                },
                (state2$2, a$2) => $2(v2$3 => $5(state2$2, Data$dString$dCodeUnits.singleton(a$2)))
              )));
            });
            return more$1(v1$2 => $2(
              state2$1,
              more$1,
              lift1$1,
              throw$1,
              (state2$2, a$2) => more$1(v2$2 => done$1(
                state2$2,
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
                  return go({init: true, acc: ""})(a$2).acc;
                })()
              ))
            ));
          })
        ));
      })()));
      return more(v1$1 => $1(state2, more, lift1, $$throw, (state2$1, a$1) => more(v2$1 => done(state2$1, Data$dTuple.$Tuple(a, a$1)))));
    })
  ));
};
const parse = parseK => parseV => {
  const $0 = Parsing$dCombinators.sepBy(parsePart(parseK)(parseV))(Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "&"))("'&'"));
  return x => {
    const $1 = Parsing.runParserT1(x)((state1, more, lift1, $$throw, done) => more(v1 => $0(state1, more, lift1, $$throw, (state2, a) => more(v2 => done(state2, fromFoldable1(a))))));
    if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1._1); }
    if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1); }
    $runtime.fail();
  };
};
const keyFromString = x => URI$dCommon.printEncoded(keyPartChar)(x);
const genericQueryPairs = {to: x => x, from: x => x};
const showQueryPairs = dictShow => dictShow1 => (
  {
    show: (() => {
      const $0 = Data$dShow$dGeneric.genericShowConstructor((() => {
        const $0 = Data$dShow.showArrayImpl(v => "(Tuple " + dictShow.show(v._1) + " " + (() => {
          if (v._2.tag === "Just") { return "(Just " + dictShow1.show(v._2._1) + ")"; }
          if (v._2.tag === "Nothing") { return "Nothing"; }
          $runtime.fail();
        })() + ")");
        return {genericShowArgs: v => [$0(v)]};
      })())(QueryPairsIsSymbol);
      return x => $0["genericShow'"](x);
    })()
  }
);
const eqValue = Data$dEq.eqString;
const eqQueryPairs = dictEq => dictEq1 => (
  {
    eq: Data$dEq.eqArrayImpl(x => y => dictEq.eq(x._1)(y._1) && (x._2.tag === "Nothing"
      ? y._2.tag === "Nothing"
      : x._2.tag === "Just" && y._2.tag === "Just" && dictEq1.eq(x._2._1)(y._2._1)))
  }
);
const eqKey = Data$dEq.eqString;
export {
  Key,
  QueryPairs,
  QueryPairsIsSymbol,
  Value,
  eqKey,
  eqQueryPairs,
  eqValue,
  fromFoldable,
  fromFoldable1,
  genericQueryPairs,
  keyFromString,
  keyPartChar,
  keyToString,
  manyRec,
  monoidKey,
  monoidQueryPairs,
  monoidValue,
  ordKey,
  ordQueryPairs,
  ordValue,
  parse,
  parsePart,
  print,
  semigroupKey,
  semigroupQueryPairs,
  semigroupValue,
  showKey,
  showQueryPairs,
  showValue,
  someRec,
  unsafeKeyFromString,
  unsafeKeyToString,
  unsafeValueFromString,
  unsafeValueToString,
  valueFromString,
  valuePartChar,
  valueToString
};
