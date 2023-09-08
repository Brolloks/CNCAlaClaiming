import * as $runtime from "../runtime.js";
import * as Data$dDateTime$dInstant from "../Data.DateTime.Instant/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Data$dNumber from "../Data.Number/index.js";
import * as Effect from "../Effect/index.js";
import * as Node$dBuffer$dInternal from "../Node.Buffer.Internal/index.js";
import * as Node$dFS$dPerms from "../Node.FS.Perms/index.js";
import * as Node$dFS$dStats from "../Node.FS.Stats/index.js";
import {
  appendFileSyncImpl,
  chmodSyncImpl,
  chownSyncImpl,
  closeSyncImpl,
  existsSyncImpl,
  fsyncSyncImpl,
  linkSyncImpl,
  lstatSyncImpl,
  mkdirSyncImpl,
  openSyncImpl,
  readFileSyncImpl,
  readSyncImpl,
  readdirSyncImpl,
  readlinkSyncImpl,
  realpathSyncImpl,
  renameSyncImpl,
  rmSyncImpl,
  rmdirSyncImpl,
  statSyncImpl,
  symlinkSyncImpl,
  truncateSyncImpl,
  unlinkSyncImpl,
  utimesSyncImpl,
  writeFileSyncImpl,
  writeSyncImpl
} from "./foreign.js";
const writeTextFile = encoding => file => text => {
  const $0 = {
    encoding: (() => {
      if (encoding === "ASCII") { return "ASCII"; }
      if (encoding === "UTF8") { return "UTF8"; }
      if (encoding === "UTF16LE") { return "UTF16LE"; }
      if (encoding === "UCS2") { return "UCS2"; }
      if (encoding === "Base64") { return "Base64"; }
      if (encoding === "Latin1") { return "Latin1"; }
      if (encoding === "Binary") { return "Binary"; }
      if (encoding === "Hex") { return "Hex"; }
      $runtime.fail();
    })()
  };
  return () => writeFileSyncImpl(file, text, $0);
};
const writeFile = file => buff => () => writeFileSyncImpl(file, buff, {});
const utimes = file => atime => mtime => {
  const $0 = $runtime.intDiv(Data$dInt.unsafeClamp(Data$dNumber.round(Data$dDateTime$dInstant.fromDateTime(atime))), 1000);
  const $1 = $runtime.intDiv(Data$dInt.unsafeClamp(Data$dNumber.round(Data$dDateTime$dInstant.fromDateTime(mtime))), 1000);
  return () => utimesSyncImpl(file, $0, $1);
};
const unlink = file => () => unlinkSyncImpl(file);
const truncate = file => len => () => truncateSyncImpl(file, len);
const symlink = src => dst => ty => {
  const $0 = (() => {
    if (ty === "FileLink") { return "file"; }
    if (ty === "DirLink") { return "dir"; }
    if (ty === "JunctionLink") { return "junction"; }
    $runtime.fail();
  })();
  return () => symlinkSyncImpl(src, dst, $0);
};
const stat = file => () => {
  const a$p = statSyncImpl(file);
  return Node$dFS$dStats.$Stats(a$p);
};
const rmdir$p = path => opts => () => rmdirSyncImpl(path, opts);
const rmdir = path => () => rmdirSyncImpl(path, {maxRetries: 0, retryDelay: 100});
const rm$p = path => opts => () => rmSyncImpl(path, opts);
const rm = path => () => rmSyncImpl(path, {force: false, maxRetries: 100, recursive: false, retryDelay: 1000});
const rename = oldFile => newFile => () => renameSyncImpl(oldFile, newFile);
const realpath$p = path => cache => () => realpathSyncImpl(path, cache);
const realpath = path => () => realpathSyncImpl(path, {});
const readlink = path => () => readlinkSyncImpl(path);
const readdir = file => () => readdirSyncImpl(file);
const readTextFile = encoding => file => {
  const $0 = {
    encoding: (() => {
      if (encoding === "ASCII") { return "ASCII"; }
      if (encoding === "UTF8") { return "UTF8"; }
      if (encoding === "UTF16LE") { return "UTF16LE"; }
      if (encoding === "UCS2") { return "UCS2"; }
      if (encoding === "Base64") { return "Base64"; }
      if (encoding === "Latin1") { return "Latin1"; }
      if (encoding === "Binary") { return "Binary"; }
      if (encoding === "Hex") { return "Hex"; }
      $runtime.fail();
    })()
  };
  return () => readFileSyncImpl(file, $0);
};
const readFile = file => () => readFileSyncImpl(file, {});
const mkdir$p = file => v => {
  const $0 = {recursive: v.recursive, mode: Node$dFS$dPerms.permsToString(v.mode)};
  return () => mkdirSyncImpl(file, $0);
};
const mkdir = path => {
  const $0 = {
    recursive: false,
    mode: Node$dFS$dPerms.permsToString({u: Node$dFS$dPerms.semiringPerm.one, g: Node$dFS$dPerms.semiringPerm.one, o: Node$dFS$dPerms.semiringPerm.one})
  };
  return () => mkdirSyncImpl(path, $0);
};
const lstat = file => () => {
  const a$p = lstatSyncImpl(file);
  return Node$dFS$dStats.$Stats(a$p);
};
const link = src => dst => () => linkSyncImpl(src, dst);
const fdWrite = fd => buff => off => len => pos => {
  const $0 = (() => {
    if (pos.tag === "Nothing") { return Data$dNullable.null; }
    if (pos.tag === "Just") { return Data$dNullable.notNull(pos._1); }
    $runtime.fail();
  })();
  return () => writeSyncImpl(fd, buff, off, len, $0);
};
const fdRead = fd => buff => off => len => pos => {
  const $0 = (() => {
    if (pos.tag === "Nothing") { return Data$dNullable.null; }
    if (pos.tag === "Just") { return Data$dNullable.notNull(pos._1); }
    $runtime.fail();
  })();
  return () => readSyncImpl(fd, buff, off, len, $0);
};
const fdOpen = file => flags => mode => {
  const $0 = (() => {
    if (flags === "R") { return "r"; }
    if (flags === "R_PLUS") { return "r+"; }
    if (flags === "RS") { return "rs"; }
    if (flags === "RS_PLUS") { return "rs+"; }
    if (flags === "W") { return "w"; }
    if (flags === "WX") { return "wx"; }
    if (flags === "W_PLUS") { return "w+"; }
    if (flags === "WX_PLUS") { return "wx+"; }
    if (flags === "A") { return "a"; }
    if (flags === "AX") { return "ax"; }
    if (flags === "A_PLUS") { return "a+"; }
    if (flags === "AX_PLUS") { return "ax+"; }
    $runtime.fail();
  })();
  const $1 = (() => {
    if (mode.tag === "Nothing") { return Data$dNullable.null; }
    if (mode.tag === "Just") { return Data$dNullable.notNull(mode._1); }
    $runtime.fail();
  })();
  return () => openSyncImpl(file, $0, $1);
};
const fdNext = fd => buff => {
  const $0 = Node$dBuffer$dInternal.size(Effect.monadEffect)(buff);
  return () => {
    const sz = $0();
    return fdRead(fd)(buff)(0)(sz)(Data$dMaybe.Nothing)();
  };
};
const fdFlush = fd => () => fsyncSyncImpl(fd);
const fdClose = fd => () => closeSyncImpl(fd);
const fdAppend = fd => buff => {
  const $0 = Node$dBuffer$dInternal.size(Effect.monadEffect)(buff);
  return () => {
    const sz = $0();
    return fdWrite(fd)(buff)(0)(sz)(Data$dMaybe.Nothing)();
  };
};
const exists = file => () => existsSyncImpl(file);
const chown = file => uid => gid => () => chownSyncImpl(file, uid, gid);
const chmod = file => perms => {
  const $0 = Node$dFS$dPerms.permsToString(perms);
  return () => chmodSyncImpl(file, $0);
};
const appendTextFile = encoding => file => buff => {
  const $0 = {
    encoding: (() => {
      if (encoding === "ASCII") { return "ASCII"; }
      if (encoding === "UTF8") { return "UTF8"; }
      if (encoding === "UTF16LE") { return "UTF16LE"; }
      if (encoding === "UCS2") { return "UCS2"; }
      if (encoding === "Base64") { return "Base64"; }
      if (encoding === "Latin1") { return "Latin1"; }
      if (encoding === "Binary") { return "Binary"; }
      if (encoding === "Hex") { return "Hex"; }
      $runtime.fail();
    })()
  };
  return () => appendFileSyncImpl(file, buff, $0);
};
const appendFile = file => buff => () => appendFileSyncImpl(file, buff, {});
export {
  appendFile,
  appendTextFile,
  chmod,
  chown,
  exists,
  fdAppend,
  fdClose,
  fdFlush,
  fdNext,
  fdOpen,
  fdRead,
  fdWrite,
  link,
  lstat,
  mkdir,
  mkdir$p,
  readFile,
  readTextFile,
  readdir,
  readlink,
  realpath,
  realpath$p,
  rename,
  rm,
  rm$p,
  rmdir,
  rmdir$p,
  stat,
  symlink,
  truncate,
  unlink,
  utimes,
  writeFile,
  writeTextFile
};
export * from "./foreign.js";
