import * as Control$dBind from "../Control.Bind/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Isomers$dHTTP$dRequest$dHeaders$dAccept$dMediaPattern from "../Isomers.HTTP.Request.Headers.Accept.MediaPattern/index.js";
const parse = h => Control$dBind.arrayBind(Data$dString$dCommon.split(",")(h))(v => {
  const v1 = Data$dString$dCommon.split(";")(v);
  if (v1.length === 1) { return [{pattern: Isomers$dHTTP$dRequest$dHeaders$dAccept$dMediaPattern.parse(v1[0]), q: Data$dMaybe.Nothing}]; }
  if (v1.length === 2) { return [{pattern: Isomers$dHTTP$dRequest$dHeaders$dAccept$dMediaPattern.parse(v1[0]), q: Data$dMaybe.$Maybe("Just", v1[1])}]; }
  return [];
});
export {parse};
