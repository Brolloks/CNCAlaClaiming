import * as $runtime from "../runtime.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Parsing from "../Parsing/index.js";
import * as Parsing$dCombinators from "../Parsing.Combinators/index.js";
import * as Parsing$dString from "../Parsing.String/index.js";
import * as URI$dCommon from "../URI.Common/index.js";
import * as URI$dUserInfo from "../URI.UserInfo/index.js";
const $Authority = (_1, _2) => ({tag: "Authority", _1, _2});
const AuthorityIsSymbol = {reflectSymbol: () => "Authority"};
const Authority = value0 => value1 => $Authority(value0, value1);
const print = opts => v => {
  if (v._1.tag === "Just") { return "//" + opts.printUserInfo(v._1._1) + "@" + opts.printHosts(v._2); }
  if (v._1.tag === "Nothing") { return "//" + opts.printHosts(v._2); }
  $runtime.fail();
};
const parser = opts => (state1, more, lift1, $$throw, done) => more(v1 => Parsing$dString.string("//")(
  state1,
  more,
  lift1,
  $$throw,
  (state2, a) => more(v2 => {
    const $0 = Parsing$dCombinators.optionMaybe((() => {
      const $0 = Parsing$dCombinators.withErrorMessage(Parsing$dString.satisfy(v => v === "@"))("'@'");
      return (v1$1, $1, $2, $3, $4) => {
        const $5 = v1$1._3;
        return $1(v2$1 => $1(v1$2 => URI$dCommon.wrapParser(Data$dIdentity.monadIdentity)(opts.parseUserInfo)(URI$dUserInfo.parser)(
          v1$1,
          $1,
          $2,
          (v2$2, $6) => $3(Parsing.$ParseState(v2$2._1, v2$2._2, $5), $6),
          (state2$1, a$1) => $1(v2$2 => $1(v3 => $0(state2$1, $1, $2, (v2$3, $6) => $3(Parsing.$ParseState(v2$3._1, v2$3._2, $5), $6), (state3, a$2) => $1(v4 => $4(state3, a$1)))))
        )));
      };
    })());
    return more(v1$1 => $0(
      state2,
      more,
      lift1,
      $$throw,
      (state2$1, a$1) => more(v2$1 => more(v1$2 => opts.parseHosts(state2$1, more, lift1, $$throw, (state2$2, a$2) => more(v2$2 => done(state2$2, $Authority(a$1, a$2))))))
    ));
  })
));
const genericAuthority = {to: x => $Authority(x._1, x._2), from: x => Data$dGeneric$dRep.$Product(x._1, x._2)};
const showAuthority = dictShow => {
  const genericShowArgsProduct = Data$dShow$dGeneric.genericShowArgsProduct({
    genericShowArgs: v => [
      (() => {
        if (v.tag === "Just") { return "(Just " + dictShow.show(v._1) + ")"; }
        if (v.tag === "Nothing") { return "Nothing"; }
        $runtime.fail();
      })()
    ]
  });
  return dictShow1 => (
    {
      show: (() => {
        const $0 = Data$dShow$dGeneric.genericShowConstructor(genericShowArgsProduct({genericShowArgs: v => [dictShow1.show(v)]}))(AuthorityIsSymbol);
        return x => $0["genericShow'"](Data$dGeneric$dRep.$Product(x._1, x._2));
      })()
    }
  );
};
const eqAuthority = dictEq => dictEq1 => (
  {eq: x => y => (x._1.tag === "Nothing" ? y._1.tag === "Nothing" : x._1.tag === "Just" && y._1.tag === "Just" && dictEq.eq(x._1._1)(y._1._1)) && dictEq1.eq(x._2)(y._2)}
);
const ordAuthority = dictOrd => {
  const $0 = dictOrd.Eq0();
  return dictOrd1 => {
    const $1 = dictOrd1.Eq0();
    const eqAuthority2 = {
      eq: x => y => (x._1.tag === "Nothing" ? y._1.tag === "Nothing" : x._1.tag === "Just" && y._1.tag === "Just" && $0.eq(x._1._1)(y._1._1)) && $1.eq(x._2)(y._2)
    };
    return {
      compare: x => y => {
        const v = Data$dMaybe.ordMaybe(dictOrd).compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        return dictOrd1.compare(x._2)(y._2);
      },
      Eq0: () => eqAuthority2
    };
  };
};
const _userInfo = dictStrong => pab => dictStrong.Profunctor0().dimap(s => Data$dTuple.$Tuple(s._1, b => $Authority(b, s._2)))(v => v._2(v._1))(dictStrong.first(pab));
const _hosts = dictStrong => pab => dictStrong.Profunctor0().dimap(s => Data$dTuple.$Tuple(s._2, b => $Authority(s._1, b)))(v => v._2(v._1))(dictStrong.first(pab));
export {$Authority, Authority, AuthorityIsSymbol, _hosts, _userInfo, eqAuthority, genericAuthority, ordAuthority, parser, print, showAuthority};
