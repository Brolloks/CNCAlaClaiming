import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Data$dOptions from "../Data.Options/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import {
  bufferSizeImpl,
  bytesReadImpl,
  bytesWrittenImpl,
  connectImpl,
  connectingImpl,
  createConnectionImpl,
  destroyImpl,
  destroyedImpl,
  endImpl,
  endStringImpl,
  localAddressImpl,
  localPortImpl,
  onDataImpl,
  onImpl,
  pauseImpl,
  pendingImpl,
  remoteAddressImpl,
  remoteFamilyImpl,
  remotePortImpl,
  resumeImpl,
  setEncodingImpl,
  setKeepAliveImpl,
  setNoDelayImpl,
  setTimeoutImpl,
  writeImpl,
  writeStringImpl
} from "./foreign.js";
const writeString = socket => str => encoding => callback => {
  const $0 = (() => {
    if (encoding === "ASCII") { return "ascii"; }
    if (encoding === "UTF8") { return "utf8"; }
    if (encoding === "UTF16LE") { return "utf16le"; }
    if (encoding === "UCS2") { return "ucs2"; }
    if (encoding === "Base64") { return "base64"; }
    if (encoding === "Latin1") { return "latin1"; }
    if (encoding === "Binary") { return "binary"; }
    if (encoding === "Hex") { return "hex"; }
    $runtime.fail();
  })();
  return () => writeStringImpl(socket, str, $0, callback);
};
const write = socket => buffer => callback => () => writeImpl(socket, buffer, callback);
const socketWritable = v => [Data$dTuple.$Tuple("writable", v)];
const socketTimeout = v => [Data$dTuple.$Tuple("timeout", v)];
const socketReadable = v => [Data$dTuple.$Tuple("readable", v)];
const socketPort = v => [Data$dTuple.$Tuple("port", v)];
const socketPath = v => [Data$dTuple.$Tuple("path", v)];
const socketHost = v => [Data$dTuple.$Tuple("host", v)];
const socketFd = v => [Data$dTuple.$Tuple("fd", v)];
const socketAllowHalfOpen = v => [Data$dTuple.$Tuple("allowHalfOpen", v)];
const setTimeout = socket => timeout => callback => () => setTimeoutImpl(socket, timeout, callback);
const setNoDelay = socket => noDelay => () => setNoDelayImpl(socket, noDelay);
const setKeepAlive = socket => enable => initialDelay => () => setKeepAliveImpl(socket, enable, initialDelay);
const setEncoding = socket => encoding => {
  const $0 = (() => {
    if (encoding === "ASCII") { return "ascii"; }
    if (encoding === "UTF8") { return "utf8"; }
    if (encoding === "UTF16LE") { return "utf16le"; }
    if (encoding === "UCS2") { return "ucs2"; }
    if (encoding === "Base64") { return "base64"; }
    if (encoding === "Latin1") { return "latin1"; }
    if (encoding === "Binary") { return "binary"; }
    if (encoding === "Hex") { return "hex"; }
    $runtime.fail();
  })();
  return () => setEncodingImpl(socket, $0);
};
const resume = socket => () => resumeImpl(socket);
const remotePort = socket => () => {
  const port = remotePortImpl(socket);
  return Data$dNullable.nullable(port, Data$dMaybe.Nothing, Data$dMaybe.Just);
};
const remoteFamily = socket => () => {
  const family = remoteFamilyImpl(socket);
  return Data$dNullable.nullable(family, Data$dMaybe.Nothing, Data$dMaybe.Just);
};
const remoteAddress = socket => () => {
  const address$p = remoteAddressImpl(socket);
  return Data$dNullable.nullable(address$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
};
const pending = socket => () => pendingImpl(socket);
const pause = socket => () => pauseImpl(socket);
const onTimeout = socket => callback => () => onImpl("timeout", socket, callback);
const onReady = socket => callback => () => onImpl("ready", socket, callback);
const onLookup = socket => callback => () => onImpl(
  "lookup",
  socket,
  (err$p, address$p$p, family$p, host$p) => {
    const v = Data$dNullable.nullable(host$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
    const v1 = Data$dNullable.nullable(family$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
    const v2 = Data$dNullable.nullable(address$p$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
    const v3 = Data$dNullable.nullable(err$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
    if (v3.tag === "Just") { return callback(Data$dEither.$Either("Left", v3._1))(); }
    if (v3.tag === "Nothing" && v2.tag === "Just" && v1.tag === "Just" && v.tag === "Just") {
      return callback(Data$dEither.$Either("Right", {address: v2._1, family: Data$dNullable.nullable(v1._1, Data$dMaybe.Nothing, Data$dMaybe.Just), host: v._1}))();
    }
  }
);
const onError = socket => callback => () => onImpl("error", socket, err => callback(err)());
const onEnd = socket => callback => () => onImpl("end", socket, callback);
const onDrain = socket => callback => () => onImpl("drain", socket, callback);
const onData = socket => callback => () => onDataImpl(socket, buffer => callback(Data$dEither.$Either("Left", buffer))(), str => callback(Data$dEither.$Either("Right", str))());
const onConnect = socket => callback => () => onImpl("connect", socket, callback);
const onClose = socket => callback => () => onImpl("close", socket, hadError => callback(hadError)());
const localPort = socket => () => {
  const port = localPortImpl(socket);
  return Data$dNullable.nullable(port, Data$dMaybe.Nothing, Data$dMaybe.Just);
};
const localAddress = socket => () => {
  const address$p = localAddressImpl(socket);
  return Data$dNullable.nullable(address$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
};
const endString = socket => str => encoding => callback => {
  const $0 = (() => {
    if (encoding === "ASCII") { return "ascii"; }
    if (encoding === "UTF8") { return "utf8"; }
    if (encoding === "UTF16LE") { return "utf16le"; }
    if (encoding === "UCS2") { return "ucs2"; }
    if (encoding === "Base64") { return "base64"; }
    if (encoding === "Latin1") { return "latin1"; }
    if (encoding === "Binary") { return "binary"; }
    if (encoding === "Hex") { return "hex"; }
    $runtime.fail();
  })();
  return () => endStringImpl(socket, str, $0, callback);
};
const end = socket => buffer => callback => () => endImpl(socket, buffer, callback);
const destroyed = socket => () => destroyedImpl(socket);
const destroy = socket => err => {
  const $0 = (() => {
    if (err.tag === "Nothing") { return Data$dNullable.null; }
    if (err.tag === "Just") { return Data$dNullable.notNull(err._1); }
    $runtime.fail();
  })();
  return () => destroyImpl(socket, $0);
};
const createConnectionTCP = port => host => callback => {
  const $0 = Data$dOptions.fromFoldable([Data$dTuple.$Tuple("host", host), Data$dTuple.$Tuple("port", port)]);
  return () => createConnectionImpl($0, callback);
};
const createConnectionICP = path => callback => {
  const $0 = Data$dOptions.fromFoldable([Data$dTuple.$Tuple("path", path)]);
  return () => createConnectionImpl($0, callback);
};
const createConnection = opts => callback => {
  const $0 = Data$dOptions.fromFoldable(opts);
  return () => createConnectionImpl($0, callback);
};
const connecting = socket => () => connectingImpl(socket);
const connectPort = v => [Data$dTuple.$Tuple("port", v)];
const connectPath = v => [Data$dTuple.$Tuple("path", v)];
const connectLocalPort = v => [Data$dTuple.$Tuple("localPort", v)];
const connectLocalAddress = v => [Data$dTuple.$Tuple("localAddress", v)];
const connectICP = socket => path => callback => {
  const $0 = Data$dOptions.fromFoldable([Data$dTuple.$Tuple("path", path)]);
  return () => connectImpl(socket, $0, callback);
};
const connectHost = v => [Data$dTuple.$Tuple("host", v)];
const connectTCP = socket => port => host => callback => {
  const $0 = Data$dOptions.fromFoldable([Data$dTuple.$Tuple("host", host), Data$dTuple.$Tuple("port", port)]);
  return () => connectImpl(socket, $0, callback);
};
const connectHints = v => [Data$dTuple.$Tuple("hints", v)];
const connectFamily = v => [Data$dTuple.$Tuple("family", v)];
const connect = socket => opts => callback => {
  const $0 = Data$dOptions.fromFoldable(opts);
  return () => connectImpl(socket, $0, callback);
};
const bytesWritten = socket => () => bytesWrittenImpl(socket);
const bytesRead = socket => () => bytesReadImpl(socket);
const bufferSize = socket => () => {
  const size = bufferSizeImpl(socket);
  return Data$dNullable.nullable(size, Data$dMaybe.Nothing, Data$dMaybe.Just);
};
export {
  bufferSize,
  bytesRead,
  bytesWritten,
  connect,
  connectFamily,
  connectHints,
  connectHost,
  connectICP,
  connectLocalAddress,
  connectLocalPort,
  connectPath,
  connectPort,
  connectTCP,
  connecting,
  createConnection,
  createConnectionICP,
  createConnectionTCP,
  destroy,
  destroyed,
  end,
  endString,
  localAddress,
  localPort,
  onClose,
  onConnect,
  onData,
  onDrain,
  onEnd,
  onError,
  onLookup,
  onReady,
  onTimeout,
  pause,
  pending,
  remoteAddress,
  remoteFamily,
  remotePort,
  resume,
  setEncoding,
  setKeepAlive,
  setNoDelay,
  setTimeout,
  socketAllowHalfOpen,
  socketFd,
  socketHost,
  socketPath,
  socketPort,
  socketReadable,
  socketTimeout,
  socketWritable,
  write,
  writeString
};
export * from "./foreign.js";
