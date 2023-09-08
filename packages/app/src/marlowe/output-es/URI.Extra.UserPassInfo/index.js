import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data$dString$dNonEmpty$dCodeUnits from "../Data.String.NonEmpty.CodeUnits/index.js";
import * as Parsing from "../Parsing/index.js";
import * as URI$dCommon from "../URI.Common/index.js";
const show1 = v => {
  if (v.tag === "Just") { return "(Just (NonEmptyString.unsafeFromString " + Data$dShow.showStringImpl(v._1) + "))"; }
  if (v.tag === "Nothing") { return "Nothing"; }
  $runtime.fail();
};
const compare = /* #__PURE__ */ (() => Data$dMaybe.ordMaybe(Data$dOrd.ordString).compare)();
const UserPassInfo = x => x;
const userPassInfoChar = (v2, $0, $1, $2, $3) => {
  const $4 = v2._1;
  const $5 = v2._2;
  return $0(v3 => URI$dCommon.unreserved(
    Parsing.$ParseState($4, $5, false),
    $0,
    $1,
    (v4, $6) => {
      const $7 = v4._3;
      return $0(v5 => {
        if ($7) { return $2(v4, $6); }
        return URI$dCommon.subDelims(v2, $0, $1, $2, $3);
      });
    },
    $3
  ));
};
const showUserPassInfo = {show: v => "(UserPassInfo { user: (NonEmptyString.unsafeFromString " + Data$dShow.showStringImpl(v.user) + "), password: " + show1(v.password) + "})"};
const print = v => {
  if (v.password.tag === "Nothing") {
    const $0 = URI$dCommon.printEncoded(userPassInfoChar)(v.user);
    if ($0 === "") { $runtime.fail(); }
    return $0;
  }
  if (v.password.tag === "Just") {
    const $0 = URI$dCommon.printEncoded(userPassInfoChar)(v.user);
    const $1 = URI$dCommon.printEncoded(userPassInfoChar)(v.password._1);
    return (() => {
      if ($0 === "") { $runtime.fail(); }
      return $0;
    })() + Data$dString$dCodeUnits.singleton(":") + (() => {
      if ($1 === "") { $runtime.fail(); }
      return $1;
    })();
  }
  $runtime.fail();
};
const parse = ui => {
  const $0 = Data$dString$dCodeUnits.indexOf(":")(ui);
  if ($0.tag === "Just") {
    if (Data$dString$dNonEmpty$dCodeUnits.splitAt($0._1)(ui).before.tag === "Nothing") { return Data$dEither.$Either("Left", "Expected a username before a password segment"); }
    if (Data$dString$dNonEmpty$dCodeUnits.splitAt($0._1)(ui).after.tag === "Just" && Data$dString$dNonEmpty$dCodeUnits.splitAt($0._1)(ui).before.tag === "Just") {
      return Data$dEither.$Either(
        "Right",
        {
          user: URI$dCommon.decodeURIComponent$p(Data$dString$dNonEmpty$dCodeUnits.splitAt($0._1)(ui).before._1),
          password: 1 >= Data$dString$dCodeUnits.length(Data$dString$dNonEmpty$dCodeUnits.splitAt($0._1)(ui).after._1)
            ? Data$dMaybe.Nothing
            : Data$dMaybe.$Maybe("Just", URI$dCommon.decodeURIComponent$p(Data$dString$dCodeUnits.drop(1)(Data$dString$dNonEmpty$dCodeUnits.splitAt($0._1)(ui).after._1)))
        }
      );
    }
  }
  return Data$dEither.$Either("Right", {user: URI$dCommon.decodeURIComponent$p(ui), password: Data$dMaybe.Nothing});
};
const newtypeUserPassInfo = {Coercible0: () => {}};
const eqUserPassInfo = {
  eq: x => y => (x.password.tag === "Nothing" ? y.password.tag === "Nothing" : x.password.tag === "Just" && y.password.tag === "Just" && x.password._1 === y.password._1) && x.user === y.user
};
const ordUserPassInfo = {
  compare: x => y => {
    const v = compare(x.password)(y.password);
    if (v === "LT") { return Data$dOrdering.LT; }
    if (v === "GT") { return Data$dOrdering.GT; }
    return Data$dOrd.ordString.compare(x.user)(y.user);
  },
  Eq0: () => eqUserPassInfo
};
export {UserPassInfo, compare, eqUserPassInfo, newtypeUserPassInfo, ordUserPassInfo, parse, print, show1, showUserPassInfo, userPassInfoChar};
