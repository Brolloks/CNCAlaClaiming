import * as $runtime from "../runtime.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Isomers$dHTTP$dExchange from "../Isomers.HTTP.Exchange/index.js";
const traversableCompose = /* #__PURE__ */ Data$dTraversable.traversableCompose(Isomers$dHTTP$dExchange.traversableExchange);
const foldableCompose = dictFoldable1 => (
  {
    foldr: f => i => v => {
      const $0 = dictFoldable1.foldr(f);
      return Data$dFoldable.foldrDefault(Isomers$dHTTP$dExchange.foldableExchange)(b => a => $0(a)(b))(i)(v);
    },
    foldl: f => i => v => Data$dFoldable.foldlDefault(Isomers$dHTTP$dExchange.foldableExchange)(dictFoldable1.foldl(f))(i)(v),
    foldMap: dictMonoid => {
      const mempty = dictMonoid.mempty;
      const mempty$1 = dictMonoid.mempty;
      const foldMap5 = dictFoldable1.foldMap(dictMonoid);
      return f => v => {
        const $0 = foldMap5(f);
        if (v._2.tag === "Nothing") { return mempty; }
        if (v._2.tag === "Just") {
          if (v._2._1.tag === "Left") { return mempty$1; }
          if (v._2._1.tag === "Right") { return $0(v._2._1._1); }
        }
        $runtime.fail();
      };
    }
  }
);
const ExchangeF = x => x;
const traversableExchange = dictTraversable => traversableCompose(dictTraversable);
const toExchange = v => v;
const response = v => {
  if (v._2.tag === "Just" && v._2._1.tag === "Right") { return Data$dMaybe.$Maybe("Just", v._2._1._1); }
  return Data$dMaybe.Nothing;
};
const request = v => v._1;
const newtypeExchangeF = {Coercible0: () => {}};
const functorEchangeF = dictFunctor => ({map: f => v => Isomers$dHTTP$dExchange.functorExchange.map(dictFunctor.map(f))(v)});
const fromExchange = ex => ex;
const foldableExchange = dictFoldable => foldableCompose(dictFoldable);
export {ExchangeF, foldableCompose, foldableExchange, fromExchange, functorEchangeF, newtypeExchangeF, request, response, toExchange, traversableCompose, traversableExchange};
