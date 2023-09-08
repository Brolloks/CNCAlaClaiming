import * as $runtime from "../runtime.js";
import * as Control$dMonad$dExcept$dTrans from "../Control.Monad.Except.Trans/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Data$dOptions from "../Data.Options/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Foreign from "../Foreign/index.js";
import * as Foreign$dIndex from "../Foreign.Index/index.js";
import {addressImpl, closeImpl, createServerImpl, getConnectionsImpl, listenImpl, listeningImpl, onImpl} from "./foreign.js";
const apply = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.applyExceptT(Data$dIdentity.monadIdentity).apply)();
const bind = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.bindExceptT(Data$dIdentity.monadIdentity).bind)();
const readProp = /* #__PURE__ */ Foreign$dIndex.unsafeReadProp(Data$dIdentity.monadIdentity);
const serverPauseOnConnect = v => [Data$dTuple.$Tuple("pauseOnConnect", v)];
const serverAllowHalfOpen = v => [Data$dTuple.$Tuple("allowHalfOpen", v)];
const onListening = server => callback => () => onImpl("listening", server, callback);
const onError = server => callback => () => onImpl("error", server, error => callback(error)());
const onConnection = server => callback => () => onImpl("connection", server, socket => callback(socket)());
const onClose = server => callback => () => onImpl("close", server, callback);
const listening = server => () => listeningImpl(server);
const listenWritableAll = v => [Data$dTuple.$Tuple("writableAll", v)];
const listenReadableAll = v => [Data$dTuple.$Tuple("readableAll", v)];
const listenPort = v => [Data$dTuple.$Tuple("port", v)];
const listenPath = v => [Data$dTuple.$Tuple("path", v)];
const listenIpv6Only = v => [Data$dTuple.$Tuple("ipv6Only", v)];
const listenHost = v => [Data$dTuple.$Tuple("host", v)];
const listenExclusive = v => [Data$dTuple.$Tuple("exclusive", v)];
const listenBacklog = v => [Data$dTuple.$Tuple("backlog", v)];
const listenICP = server => path => backlog => callback => {
  const $0 = Data$dOptions.fromFoldable([Data$dTuple.$Tuple("backlog", backlog), Data$dTuple.$Tuple("path", path)]);
  return () => listenImpl(server, $0, callback);
};
const listenTCP = server => port => host => backlog => callback => {
  const $0 = Data$dOptions.fromFoldable([Data$dTuple.$Tuple("backlog", backlog), Data$dTuple.$Tuple("host", host), Data$dTuple.$Tuple("port", port)]);
  return () => listenImpl(server, $0, callback);
};
const listen = server => opts => callback => {
  const $0 = Data$dOptions.fromFoldable(opts);
  return () => listenImpl(server, $0, callback);
};
const getConnections = server => callback => () => getConnectionsImpl(
  server,
  (err$p, count$p) => {
    const v = Data$dNullable.nullable(count$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
    const v1 = Data$dNullable.nullable(err$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
    if (v1.tag === "Just") { return callback(Data$dEither.$Either("Left", v1._1))(); }
    if (v.tag === "Just") { return callback(Data$dEither.$Either("Right", v._1))(); }
  }
);
const createServer = opts => callback => {
  const $0 = Data$dOptions.fromFoldable(opts);
  return () => createServerImpl($0, socket => callback(socket)());
};
const close = server => callback => () => closeImpl(server, err => callback(Data$dNullable.nullable(err, Data$dMaybe.Nothing, Data$dMaybe.Just))());
const address = server => () => {
  const x = addressImpl(server);
  const $0 = Data$dNullable.nullable(x, Data$dMaybe.Nothing, Data$dMaybe.Just);
  return (() => {
    if ($0.tag === "Just") {
      const $1 = apply(apply((() => {
        const $1 = bind(readProp("address")($0._1))(Foreign.readString(Data$dIdentity.monadIdentity));
        if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
        if ($1.tag === "Right") {
          return Data$dEither.$Either(
            "Right",
            (() => {
              const $2 = $1._1;
              return v1 => v2 => ({address: $2, family: v1, port: v2});
            })()
          );
        }
        $runtime.fail();
      })())(bind(readProp("family")($0._1))(Foreign.readString(Data$dIdentity.monadIdentity))))(bind(readProp("port")($0._1))(Foreign.readInt(Data$dIdentity.monadIdentity)));
      if ($1.tag === "Left") {
        const $2 = Foreign.unsafeReadTagged(Data$dIdentity.monadIdentity)("String")($0._1);
        if ($2.tag === "Left") { return Data$dMaybe.Nothing; }
        if ($2.tag === "Right") { return Data$dMaybe.$Maybe("Just", Data$dEither.$Either("Right", $2._1)); }
        $runtime.fail();
      }
      if ($1.tag === "Right") { return Data$dMaybe.$Maybe("Just", Data$dEither.$Either("Left", $1._1)); }
      $runtime.fail();
    }
    if ($0.tag === "Nothing") { return Data$dMaybe.Nothing; }
    $runtime.fail();
  })();
};
export {
  address,
  apply,
  bind,
  close,
  createServer,
  getConnections,
  listen,
  listenBacklog,
  listenExclusive,
  listenHost,
  listenICP,
  listenIpv6Only,
  listenPath,
  listenPort,
  listenReadableAll,
  listenTCP,
  listenWritableAll,
  listening,
  onClose,
  onConnection,
  onError,
  onListening,
  readProp,
  serverAllowHalfOpen,
  serverPauseOnConnect
};
export * from "./foreign.js";
