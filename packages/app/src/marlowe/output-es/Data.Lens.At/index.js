import * as $runtime from "../runtime.js";
import * as Data$dLens$dIndex from "../Data.Lens.Index/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dProfunctor$dStrong from "../Data.Profunctor.Strong/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
const atSet = dictOrd => {
  const indexSet = Data$dLens$dIndex.indexSet(dictOrd);
  return {
    at: x => dictStrong => pab => dictStrong.Profunctor0().dimap(s => Data$dTuple.$Tuple(
      (() => {
        const $0 = Data$dMap$dInternal.lookup(dictOrd)(x)(s);
        if ($0.tag === "Nothing") { return false; }
        if ($0.tag === "Just") { return true; }
        $runtime.fail();
      })()
        ? Data$dMaybe.$Maybe("Just", undefined)
        : Data$dMaybe.Nothing,
      b => {
        if (b.tag === "Nothing") { return Data$dMap$dInternal.delete(dictOrd)(x)(s); }
        if (b.tag === "Just") { return Data$dMap$dInternal.insert(dictOrd)(x)()(s); }
        $runtime.fail();
      }
    ))(v => v._2(v._1))(dictStrong.first(pab)),
    Index0: () => indexSet
  };
};
const atMaybe = {
  at: v => dictStrong => pab => dictStrong.Profunctor0().dimap(s => Data$dTuple.$Tuple(s, b => b))(v$1 => v$1._2(v$1._1))(dictStrong.first(pab)),
  Index0: () => Data$dLens$dIndex.indexMaybe
};
const atMap = dictOrd => {
  const indexMap = Data$dLens$dIndex.indexMap(dictOrd);
  return {
    at: k => dictStrong => {
      const $0 = Data$dMap$dInternal.lookup(dictOrd)(k);
      return pab => dictStrong.Profunctor0().dimap(s => Data$dTuple.$Tuple(
        $0(s),
        b => {
          if (b.tag === "Nothing") { return Data$dMap$dInternal.delete(dictOrd)(k)(s); }
          if (b.tag === "Just") { return Data$dMap$dInternal.insert(dictOrd)(k)(b._1)(s); }
          $runtime.fail();
        }
      ))(v => v._2(v._1))(dictStrong.first(pab));
    },
    Index0: () => indexMap
  };
};
const atIdentity = {
  at: v => dictStrong => pab => dictStrong.Profunctor0().dimap(s => Data$dTuple.$Tuple(
    Data$dMaybe.$Maybe("Just", s),
    b => {
      if (b.tag === "Nothing") { return s; }
      if (b.tag === "Just") { return b._1; }
      $runtime.fail();
    }
  ))(v$1 => v$1._2(v$1._1))(dictStrong.first(pab)),
  Index0: () => Data$dLens$dIndex.indexIdentity
};
const atForeignObject = {
  at: k => dictStrong => pab => dictStrong.Profunctor0().dimap(s => Data$dTuple.$Tuple(
    Foreign$dObject._lookup(Data$dMaybe.Nothing, Data$dMaybe.Just, k, s),
    b => {
      if (b.tag === "Nothing") {
        return Foreign$dObject.mutate($0 => () => {
          delete $0[k];
          return $0;
        })(s);
      }
      if (b.tag === "Just") {
        const $0 = b._1;
        return Foreign$dObject.mutate($1 => () => {
          $1[k] = $0;
          return $1;
        })(s);
      }
      $runtime.fail();
    }
  ))(v => v._2(v._1))(dictStrong.first(pab)),
  Index0: () => Data$dLens$dIndex.indexForeignObject
};
const at = dict => dict.at;
const sans = dictAt => k => dictAt.at(k)(Data$dProfunctor$dStrong.strongFn)(v => Data$dMaybe.Nothing);
export {at, atForeignObject, atIdentity, atMap, atMaybe, atSet, sans};
