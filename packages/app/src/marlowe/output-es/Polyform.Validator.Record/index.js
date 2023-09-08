import * as $runtime from "../runtime.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Polyform$dValidator from "../Polyform.Validator/index.js";
import * as Record from "../Record/index.js";
import * as Record$dBuilder from "../Record.Builder/index.js";
const $MapLookup = _1 => ({tag: "MapLookup", _1});
const $Sequence = () => ({tag: "Sequence"});
const identity = x => x;
const Sequence = /* #__PURE__ */ $Sequence();
const MapLookup = value0 => $MapLookup(value0);
const Builder = x => x;
const mappingWithIndexMapLookup = dictIsSymbol => dictMonad => {
  const $0 = dictMonad.Applicative0();
  return dictSemigroup => (
    {
      mappingWithIndex: v => l => v1 => {
        const k = dictIsSymbol.reflectSymbol(l);
        return Polyform$dValidator.lmapValidator(dictMonad)(Data$dMap$dInternal.singleton(k))((() => {
          const $1 = v._1(k);
          const $2 = Data$dMap$dInternal.lookup(Data$dOrd.ordString)(k);
          return i => dictMonad.Bind1().bind($0.pure((() => {
            const $3 = $2(i);
            if ($3.tag === "Nothing") { return Data$dEither.$Either("Left", $1); }
            if ($3.tag === "Just") { return Data$dEither.$Either("Right", $3._1); }
            $runtime.fail();
          })()))(res$p => {
            if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
            if (res$p.tag === "Right") { return v1(res$p._1); }
            $runtime.fail();
          });
        })());
      }
    }
  );
};
const foldingWithIndexSequenceP = () => () => dictIsSymbol => dictApply => dictTypeEquals => {
  const from = dictTypeEquals.proof(a => a);
  return {foldingWithIndex: v => l => mr => ma => dictApply.apply(dictApply.Functor0().map(Record.insert(dictIsSymbol)()()(l))(from(ma)))(mr)};
};
const sequence = dictApplicative => dictHFoldlWithIndex => r => dictHFoldlWithIndex.hfoldlWithIndex(Sequence)(dictApplicative.pure({}))(r);
const semigroupoidBuilder = dictSemigroup => dictSemigroup1 => dictMonad => {
  const Applicative0 = dictMonad.Applicative0();
  const $0 = Applicative0.Apply0().Functor0();
  return {
    compose: v => v1 => Polyform$dValidator.applyValidator(Applicative0)(dictSemigroup1).apply(x => $0.map(m => {
      if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
      if (m.tag === "Right") { return Data$dEither.$Either("Right", Control$dSemigroupoid.semigroupoidFn.compose(m._1)); }
      $runtime.fail();
    })(v(x)))(v1)
  };
};
const mapLookup = dictMappingWithIndex => mkErr => dictMappingWithIndex.mappingWithIndex($MapLookup(mkErr));
const insert = dictCons$p => {
  const insert2 = Record$dBuilder.insert()()(dictCons$p.IsSymbol0());
  return dictSemigroup => dictApplicative => {
    const $0 = dictApplicative.Apply0().Functor0();
    return l => v => {
      const $1 = insert2(l);
      return x => $0.map(m => {
        if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
        if (m.tag === "Right") { return Data$dEither.$Either("Right", $1(m._1)); }
        $runtime.fail();
      })(v(x));
    };
  };
};
const categoryBuilder = dictMonoid => {
  const semigroupoidBuilder1 = semigroupoidBuilder(dictMonoid.Semigroup0());
  return dictSemigroup => {
    const semigroupoidBuilder2 = semigroupoidBuilder1(dictSemigroup);
    return dictMonad => {
      const semigroupoidBuilder3 = semigroupoidBuilder2(dictMonad);
      return {identity: Polyform$dValidator.applicativeValidator(dictMonad.Applicative0())(dictSemigroup).pure(identity), Semigroupoid0: () => semigroupoidBuilder3};
    };
  };
};
const build = dictApplicative => {
  const $0 = dictApplicative.Apply0().Functor0();
  return dictSemigroup => v => x => $0.map(m => {
    if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
    if (m.tag === "Right") { return Data$dEither.$Either("Right", m._1({})); }
    $runtime.fail();
  })(v(x));
};
export {
  $MapLookup,
  $Sequence,
  Builder,
  MapLookup,
  Sequence,
  build,
  categoryBuilder,
  foldingWithIndexSequenceP,
  identity,
  insert,
  mapLookup,
  mappingWithIndexMapLookup,
  semigroupoidBuilder,
  sequence
};
