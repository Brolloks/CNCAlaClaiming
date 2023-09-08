import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dArgonaut$dParser from "../Data.Argonaut.Parser/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Isomers$dNode$dRequest from "../Isomers.Node.Request/index.js";
import * as Isomers$dRequest$dDuplex$dType from "../Isomers.Request.Duplex.Type/index.js";
import * as Isomers$dRequest$dEncodings from "../Isomers.Request.Encodings/index.js";
const request = node => {
  const stringBody = Isomers$dRequest$dDuplex$dType.body(Isomers$dRequest$dEncodings.StringBody)(x => Isomers$dNode$dRequest.readBodyString(x));
  return {
    formUrlEncoded: Isomers$dRequest$dDuplex$dType.formUrlEncoded(stringBody),
    jsonBody: print => parse => Isomers$dRequest$dDuplex$dType.as({print, parse, show: Data$dArgonaut$dCore.stringify})(Isomers$dRequest$dDuplex$dType.as({
      print: Data$dArgonaut$dCore.stringify,
      parse: Data$dArgonaut$dParser.jsonParser,
      show: Data$dShow.showStringImpl
    })(stringBody)),
    stringBody
  };
};
export {request};
