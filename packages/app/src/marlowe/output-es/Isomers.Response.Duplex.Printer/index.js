import * as $runtime from "../runtime.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Isomers$dResponse$dEncodings from "../Isomers.Response.Encodings/index.js";
import * as Network$dHTTP$dTypes$dStatus from "../Network.HTTP.Types.Status/index.js";
import * as Node$dBuffer$dImmutable from "../Node.Buffer.Immutable/index.js";
import * as Node$dBuffer$dInternal from "../Node.Buffer.Internal/index.js";
import * as Node$dEncoding from "../Node.Encoding/index.js";
const Printer = x => x;
const status = s => state => ({body: state.body, status: s, headers: state.headers});
const semigroupPrinter = {append: v => v1 => x => v1(v(x))};
const newtypePrinter = {Coercible0: () => {}};
const monoidPrinter = {mempty: x => x, Semigroup0: () => semigroupPrinter};
const header = name => v => {
  if (v.tag === "Just") {
    const $0 = v._1;
    return state => ({body: state.body, status: state.status, headers: [Data$dTuple.$Tuple(name, $0), ...state.headers]});
  }
  if (v.tag === "Nothing") { return monoidPrinter.mempty; }
  $runtime.fail();
};
const reqHeader = name => val => header(name)(Data$dMaybe.$Maybe("Just", val));
const defaultResponse = {body: Data$dMaybe.Nothing, headers: [], status: Network$dHTTP$dTypes$dStatus.status200};
const run = v => v(defaultResponse);
const body = b => v => ({body: Data$dMaybe.$Maybe("Just", b), status: v.status, headers: v.headers});
const buffer = buff => {
  const $0 = Node$dBuffer$dInternal.copyAll(buff);
  return () => {
    const buff$p = $0();
    return v => ({body: Data$dMaybe.$Maybe("Just", Isomers$dResponse$dEncodings.$NodeBody("NodeBuffer", buff$p)), status: v.status, headers: v.headers});
  };
};
const immutableBuffer = buff => v => ({body: Data$dMaybe.$Maybe("Just", Isomers$dResponse$dEncodings.$NodeBody("NodeBuffer", buff)), status: v.status, headers: v.headers});
const stream = s => v => ({body: Data$dMaybe.$Maybe("Just", Isomers$dResponse$dEncodings.$NodeBody("NodeStream", s)), status: v.status, headers: v.headers});
const string = str => {
  const $0 = Isomers$dResponse$dEncodings.$NodeBody("NodeBuffer", Node$dBuffer$dImmutable.fromString(str)(Node$dEncoding.UTF8));
  return v => ({body: Data$dMaybe.$Maybe("Just", $0), status: v.status, headers: v.headers});
};
const json = json1 => string(Data$dArgonaut$dCore.stringify(json1));
const unsafeBuffer = buff => v => ({body: Data$dMaybe.$Maybe("Just", Isomers$dResponse$dEncodings.$NodeBody("NodeBuffer", buff)), status: v.status, headers: v.headers});
const writer = w => v => ({body: Data$dMaybe.$Maybe("Just", Isomers$dResponse$dEncodings.$NodeBody("NodeWriter", w)), status: v.status, headers: v.headers});
export {
  Printer,
  body,
  buffer,
  defaultResponse,
  header,
  immutableBuffer,
  json,
  monoidPrinter,
  newtypePrinter,
  reqHeader,
  run,
  semigroupPrinter,
  status,
  stream,
  string,
  unsafeBuffer,
  writer
};
