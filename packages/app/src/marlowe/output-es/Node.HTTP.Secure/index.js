// | This module defines low-level bindings to the Node HTTPS module.
import * as Data$dOptions from "../Data.Options/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
import {createServerImpl} from "./foreign.js";
const ticketKeys = v => [Data$dTuple.$Tuple("ticketKeys", v)];
const sessionTimeout = v => [Data$dTuple.$Tuple("sessionTimeout", v)];
const sessionIdContext = v => [Data$dTuple.$Tuple("sessionIdContext", v)];
const secureProtocol = v => [Data$dTuple.$Tuple("secureProtocol", v)];
const secureOptions = v => [Data$dTuple.$Tuple("secureOptions", v)];
const requestCert = v => [Data$dTuple.$Tuple("requestCert", v)];
const rejectUnauthorized = v => [Data$dTuple.$Tuple("rejectUnauthorized", v)];
const pfxString = Unsafe$dCoerce.unsafeCoerce;
const pfxBuffer = Unsafe$dCoerce.unsafeCoerce;
const pfx = v => [Data$dTuple.$Tuple("pfx", v)];
const passphrase = v => [Data$dTuple.$Tuple("passphrase", v)];
const npnProtocolsUint8ArrayArray = Unsafe$dCoerce.unsafeCoerce;
const npnProtocolsUint8Array = Unsafe$dCoerce.unsafeCoerce;
const npnProtocolsStringArray = Unsafe$dCoerce.unsafeCoerce;
const npnProtocolsString = Unsafe$dCoerce.unsafeCoerce;
const npnProtocolsBufferArray = Unsafe$dCoerce.unsafeCoerce;
const npnProtocolsBuffer = Unsafe$dCoerce.unsafeCoerce;
const npnProtocols = v => [Data$dTuple.$Tuple("NPNProtocols", v)];
const keyStringArray = Unsafe$dCoerce.unsafeCoerce;
const keyString = Unsafe$dCoerce.unsafeCoerce;
const keyBufferArray = Unsafe$dCoerce.unsafeCoerce;
const keyBuffer = Unsafe$dCoerce.unsafeCoerce;
const key = v => [Data$dTuple.$Tuple("key", v)];
const honorCipherOrder = v => [Data$dTuple.$Tuple("honorCipherOrder", v)];
const handshakeTimeout = v => [Data$dTuple.$Tuple("handshakeTimeout", v)];
const ecdhCurve = v => [Data$dTuple.$Tuple("ecdhCurve", v)];
const dhparamString = Unsafe$dCoerce.unsafeCoerce;
const dhparamBuffer = Unsafe$dCoerce.unsafeCoerce;
const dhparam = v => [Data$dTuple.$Tuple("dhparam", v)];
const crlStringArray = Unsafe$dCoerce.unsafeCoerce;
const crlString = Unsafe$dCoerce.unsafeCoerce;
const crlBufferArray = Unsafe$dCoerce.unsafeCoerce;
const crlBuffer = Unsafe$dCoerce.unsafeCoerce;
const crl = v => [Data$dTuple.$Tuple("crl", v)];
const createServer = x => createServerImpl(Data$dOptions.fromFoldable(x));
const ciphers = v => [Data$dTuple.$Tuple("ciphers", v)];
const certStringArray = Unsafe$dCoerce.unsafeCoerce;
const certString = Unsafe$dCoerce.unsafeCoerce;
const certBufferArray = Unsafe$dCoerce.unsafeCoerce;
const certBuffer = Unsafe$dCoerce.unsafeCoerce;
const cert = v => [Data$dTuple.$Tuple("cert", v)];
const caStringArray = Unsafe$dCoerce.unsafeCoerce;
const caString = Unsafe$dCoerce.unsafeCoerce;
const caBufferArray = Unsafe$dCoerce.unsafeCoerce;
const caBuffer = Unsafe$dCoerce.unsafeCoerce;
const ca = v => [Data$dTuple.$Tuple("ca", v)];
const alpnProtocolsUint8ArrayArray = Unsafe$dCoerce.unsafeCoerce;
const alpnProtocolsUint8Array = Unsafe$dCoerce.unsafeCoerce;
const alpnProtocolsStringArray = Unsafe$dCoerce.unsafeCoerce;
const alpnProtocolsString = Unsafe$dCoerce.unsafeCoerce;
const alpnProtocolsBufferArray = Unsafe$dCoerce.unsafeCoerce;
const alpnProtocolsBuffer = Unsafe$dCoerce.unsafeCoerce;
const alpnProtocols = v => [Data$dTuple.$Tuple("ALPNProtocols", v)];
export {
  alpnProtocols,
  alpnProtocolsBuffer,
  alpnProtocolsBufferArray,
  alpnProtocolsString,
  alpnProtocolsStringArray,
  alpnProtocolsUint8Array,
  alpnProtocolsUint8ArrayArray,
  ca,
  caBuffer,
  caBufferArray,
  caString,
  caStringArray,
  cert,
  certBuffer,
  certBufferArray,
  certString,
  certStringArray,
  ciphers,
  createServer,
  crl,
  crlBuffer,
  crlBufferArray,
  crlString,
  crlStringArray,
  dhparam,
  dhparamBuffer,
  dhparamString,
  ecdhCurve,
  handshakeTimeout,
  honorCipherOrder,
  key,
  keyBuffer,
  keyBufferArray,
  keyString,
  keyStringArray,
  npnProtocols,
  npnProtocolsBuffer,
  npnProtocolsBufferArray,
  npnProtocolsString,
  npnProtocolsStringArray,
  npnProtocolsUint8Array,
  npnProtocolsUint8ArrayArray,
  passphrase,
  pfx,
  pfxBuffer,
  pfxString,
  rejectUnauthorized,
  requestCert,
  secureOptions,
  secureProtocol,
  sessionIdContext,
  sessionTimeout,
  ticketKeys
};
export * from "./foreign.js";
