import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dThese from "../Data.These/index.js";
import * as Parsing from "../Parsing/index.js";
import * as Parsing$dCombinators from "../Parsing.Combinators/index.js";
import * as Parsing$dString from "../Parsing.String/index.js";
import * as Parsing$dString$dBasic from "../Parsing.String.Basic/index.js";
import * as URI$dCommon from "../URI.Common/index.js";
import * as URI$dHost from "../URI.Host/index.js";
import * as URI$dHost$dIPv4Address from "../URI.Host.IPv4Address/index.js";
import * as URI$dHost$dIPv6Address from "../URI.Host.IPv6Address/index.js";
import * as URI$dHostPortPair from "../URI.HostPortPair/index.js";
import * as URI$dPort from "../URI.Port/index.js";
const fromFoldable = /* #__PURE__ */ (() => Data$dArray.fromFoldableImpl(Data$dList$dTypes.foldableList.foldr))();
const print = printHost => printPort => {
  const $0 = Data$dString$dCommon.joinWith(",");
  const $1 = Data$dFunctor.arrayMap(x => URI$dHostPortPair.print(printHost)(printPort)(Data$dMaybe.$Maybe("Just", x)));
  return x => $0($1(x));
};
const parseRegName$p = /* #__PURE__ */ (() => {
  const $0 = Parsing$dString$dBasic.oneOf(["!", "$", "&", "'", "(", ")", "*", "+", ";", "="]);
  const $1 = Data$dArray.some(Parsing.alternativeParserT)(Parsing.lazyParserT)((v2, $1, $2, $3, $4) => {
    const $5 = v2._1;
    const $6 = v2._2;
    return $1(v3 => URI$dCommon.pctEncoded(
      Parsing.$ParseState($5, $6, false),
      $1,
      $2,
      (v4, $7) => {
        const $8 = v4._3;
        return $1(v5 => {
          if ($8) { return $3(v4, $7); }
          return $1(v1 => {
            const $9 = v2._1;
            const $10 = v2._2;
            return $1(v3$1 => URI$dCommon.unreserved(
              Parsing.$ParseState($9, $10, false),
              $1,
              $2,
              (v4$1, $11) => {
                const $12 = v4$1._3;
                return $1(v5$1 => {
                  if ($12) { return $3(v4$1, $11); }
                  return $0(v2, $1, $2, $3, (state2, a) => $1(v2$1 => $4(state2, Data$dString$dCodeUnits.singleton(a))));
                });
              },
              (state2, a) => $1(v2$1 => $4(state2, Data$dString$dCodeUnits.singleton(a)))
            ));
          });
        });
      },
      $4
    ));
  });
  return (state1, more, lift1, $$throw, done) => more(v1 => $1(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2 => done(
      state2,
      Data$dFoldable.foldlArray(v => v1$1 => {
        if (v.init) { return {init: false, acc: v1$1}; }
        return {init: false, acc: v.acc + "" + v1$1};
      })({init: true, acc: ""})(a).acc
    ))
  ));
})();
const parseHost$p = p => URI$dCommon.wrapParser(Data$dIdentity.monadIdentity)(p)((v2, $0, $1, $2, $3) => {
  const $4 = v2._1;
  const $5 = v2._2;
  return $0(v3 => $0(v1 => URI$dHost$dIPv6Address.parser(
    Parsing.$ParseState($4, $5, false),
    $0,
    $1,
    (v4, $6) => {
      const $7 = v4._3;
      return $0(v5 => {
        if ($7) { return $2(v4, $6); }
        const $8 = v2._1;
        const $9 = v2._2;
        return $0(v3$1 => $0(v1$1 => URI$dHost$dIPv4Address.parser(
          Parsing.$ParseState($8, $9, false),
          $0,
          $1,
          (v2$1, $10) => $0(v5$1 => $0(v1$2 => parseRegName$p(v2, $0, $1, $2, (state2, a) => $0(v2$2 => $3(state2, URI$dHost.$Host("NameAddress", a)))))),
          (state2, a) => $0(v2$1 => $3(state2, URI$dHost.$Host("IPv4Address", a)))
        )));
      });
    },
    (state2, a) => $0(v2$1 => $3(state2, URI$dHost.$Host("IPv6Address", a)))
  )));
});
const parsePair = parseHost => parsePort => (state1, more, lift1, $$throw, done) => more(v1 => Parsing$dCombinators.optionMaybe(parseHost$p(parseHost))(
  state1,
  more,
  lift1,
  $$throw,
  (state2, a) => more(v2 => more(v1$1 => Parsing$dCombinators.optionMaybe(URI$dCommon.wrapParser(Data$dIdentity.monadIdentity)(parsePort)(URI$dPort.parser))(
    state2,
    more,
    lift1,
    $$throw,
    (state2$1, a$1) => more(v2$1 => {
      if (a.tag === "Just") {
        if (a$1.tag === "Nothing") { return done(state2$1, Data$dThese.$These("This", a._1)); }
        if (a$1.tag === "Just") { return done(state2$1, Data$dThese.$These("Both", a._1, a$1._1)); }
        $runtime.fail();
      }
      if (a.tag === "Nothing") {
        if (a$1.tag === "Just") { return done(state2$1, Data$dThese.$These("That", a$1._1)); }
        if (a$1.tag === "Nothing") { return Parsing.fail("Neither host nor port present")(state2$1, more, lift1, $$throw, done); }
      }
      $runtime.fail();
    })
  )))
));
const parser = parseHost => parsePort => {
  const $0 = Parsing$dCombinators.sepBy(parsePair(parseHost)(parsePort))(Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === ","))("','"));
  return (state1, more, lift1, $$throw, done) => more(v1 => $0(state1, more, lift1, $$throw, (state2, a) => more(v2 => done(state2, fromFoldable(a)))));
};
export {fromFoldable, parseHost$p, parsePair, parseRegName$p, parser, print};
