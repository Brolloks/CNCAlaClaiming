import * as Data$dFunction from "../Data.Function/index.js";
import * as Isomers$dRequest$dAccum$dType from "../Isomers.Request.Accum.Type/index.js";
import * as Isomers$dRequest$dDuplex$dParser from "../Isomers.Request.Duplex.Parser/index.js";
import * as Isomers$dRequest$dDuplex$dType from "../Isomers.Request.Duplex.Type/index.js";
const Spec = x => x;
const AccumSpec = x => x;
const unifyRoute = dictTypeEquals => v => ({request: Isomers$dRequest$dAccum$dType.unifyRoute(dictTypeEquals)(v.request), response: v.response});
const unRootSpec = v => (
  {
    request: Isomers$dRequest$dAccum$dType.$Accum(
      Isomers$dRequest$dDuplex$dType.$Duplex(v.request._1, Isomers$dRequest$dDuplex$dParser.functorParser.map(Data$dFunction.const)(v.request._2)),
      v$1 => ({})
    ),
    response: v.response
  }
);
const rootAccumSpec = v => ({request: Isomers$dRequest$dAccum$dType.rootDuplex(v.request), response: v.response});
const newtypeSpec = {Coercible0: () => {}};
const newtypeAccumSpec = {Coercible0: () => {}};
export {AccumSpec, Spec, newtypeAccumSpec, newtypeSpec, rootAccumSpec, unRootSpec, unifyRoute};
