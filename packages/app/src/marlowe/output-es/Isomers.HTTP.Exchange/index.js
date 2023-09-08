import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
const $Exchange = (_1, _2) => ({tag: "Exchange", _1, _2});
const ExchangeIsSymbol = {reflectSymbol: () => "Exchange"};
const $$Error = x => x;
const Exchange = value0 => value1 => $Exchange(value0, value1);
const showError = Data$dShow.showString;
const showEither = dictShow1 => (
  {
    show: v => {
      if (v.tag === "Left") { return "(Left " + Data$dShow.showStringImpl(v._1) + ")"; }
      if (v.tag === "Right") { return "(Right " + dictShow1.show(v._1) + ")"; }
      $runtime.fail();
    }
  }
);
const newtypeError_ = {Coercible0: () => {}};
const genericExchange_ = {to: x => $Exchange(x._1, x._2), from: x => Data$dGeneric$dRep.$Product(x._1, x._2)};
const showExchange = dictShow => {
  const genericShowArgsProduct = Data$dShow$dGeneric.genericShowArgsProduct({genericShowArgs: v => [dictShow.show(v)]});
  return dictShow1 => (
    {
      show: (() => {
        const $0 = Data$dShow$dGeneric.genericShowConstructor(genericShowArgsProduct((() => {
          const $0 = showEither(dictShow1);
          return {
            genericShowArgs: v => [
              (() => {
                if (v.tag === "Just") { return "(Just " + $0.show(v._1) + ")"; }
                if (v.tag === "Nothing") { return "Nothing"; }
                $runtime.fail();
              })()
            ]
          };
        })()))(ExchangeIsSymbol);
        return x => $0["genericShow'"](Data$dGeneric$dRep.$Product(x._1, x._2));
      })()
    }
  );
};
const functorExchange = {
  map: f => m => $Exchange(
    m._1,
    m._2.tag === "Just"
      ? Data$dMaybe.$Maybe(
          "Just",
          (() => {
            if (m._2._1.tag === "Left") { return Data$dEither.$Either("Left", m._2._1._1); }
            if (m._2._1.tag === "Right") { return Data$dEither.$Either("Right", f(m._2._1._1)); }
            $runtime.fail();
          })()
        )
      : Data$dMaybe.Nothing
  )
};
const foldableExchange = {
  foldMap: dictMonoid => {
    const mempty = dictMonoid.mempty;
    const mempty$1 = dictMonoid.mempty;
    return f => v => {
      if (v._2.tag === "Nothing") { return mempty; }
      if (v._2.tag === "Just") {
        if (v._2._1.tag === "Left") { return mempty$1; }
        if (v._2._1.tag === "Right") { return f(v._2._1._1); }
      }
      $runtime.fail();
    };
  },
  foldr: accum => Data$dFoldable.foldrDefault(foldableExchange)(accum),
  foldl: accum => Data$dFoldable.foldlDefault(foldableExchange)(accum)
};
const traversableExchange = {
  sequence: dictApplicative => v => dictApplicative.Apply0().Functor0().map(Exchange(v._1))(Data$dTraversable.traversableMaybe.traverse(dictApplicative)(Data$dTraversable.traversableEither.sequence(dictApplicative))(v._2)),
  traverse: dictApplicative => f => {
    const sequence3 = traversableExchange.sequence(dictApplicative);
    return ta => sequence3(traversableExchange.Functor0().map(f)(ta));
  },
  Functor0: () => functorExchange,
  Foldable1: () => foldableExchange
};
const bifunctorExchange = {
  bimap: f => g => v => $Exchange(
    f(v._1),
    v._2.tag === "Just"
      ? Data$dMaybe.$Maybe(
          "Just",
          (() => {
            if (v._2._1.tag === "Left") { return Data$dEither.$Either("Left", v._2._1._1); }
            if (v._2._1.tag === "Right") { return Data$dEither.$Either("Right", g(v._2._1._1)); }
            $runtime.fail();
          })()
        )
      : Data$dMaybe.Nothing
  )
};
export {
  $Exchange,
  $$Error as Error,
  Exchange,
  ExchangeIsSymbol,
  bifunctorExchange,
  foldableExchange,
  functorExchange,
  genericExchange_,
  newtypeError_,
  showEither,
  showError,
  showExchange,
  traversableExchange
};
