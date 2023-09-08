import * as Isomers$dContrib$dHeterogeneous$dHEval from "../Isomers.Contrib.Heterogeneous.HEval/index.js";
import * as Isomers$dContrib$dHeterogeneous$dMappings$dNewtype from "../Isomers.Contrib.Heterogeneous.Mappings.Newtype/index.js";
import * as Isomers$dRequest$dAccum$dGeneric from "../Isomers.Request.Accum.Generic/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const accumSpec = dictHMap => dictHMap1 => dictHFoldlAccumVariant => b => r => (
  {
    response: dictHMap.hmap(Isomers$dContrib$dHeterogeneous$dHEval.$HCompose(Type$dProxy.Proxy, Isomers$dContrib$dHeterogeneous$dMappings$dNewtype.Unwrap))(r),
    request: Isomers$dRequest$dAccum$dGeneric.variant(dictHFoldlAccumVariant)(b)(dictHMap1.hmap(Isomers$dContrib$dHeterogeneous$dHEval.$HCompose(
      Type$dProxy.Proxy,
      Isomers$dContrib$dHeterogeneous$dMappings$dNewtype.Unwrap
    ))(r))
  }
);
export {accumSpec};
