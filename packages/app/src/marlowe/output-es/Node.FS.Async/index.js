import * as $runtime from "../runtime.js";
import * as Data$dDateTime$dInstant from "../Data.DateTime.Instant/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Data$dNumber from "../Data.Number/index.js";
import * as Effect from "../Effect/index.js";
import * as Node$dBuffer$dInternal from "../Node.Buffer.Internal/index.js";
import * as Node$dFS$dPerms from "../Node.FS.Perms/index.js";
import * as Node$dFS$dStats from "../Node.FS.Stats/index.js";
import {
  appendFileImpl,
  chmodImpl,
  chownImpl,
  closeImpl,
  linkImpl,
  lstatImpl,
  mkdirImpl,
  openImpl,
  readFileImpl,
  readImpl,
  readdirImpl,
  readlinkImpl,
  realpathImpl,
  renameImpl,
  rmImpl,
  rmdirImpl,
  statImpl,
  symlinkImpl,
  truncateImpl,
  unlinkImpl,
  utimesImpl,
  writeFileImpl,
  writeImpl
} from "./foreign.js";
const handleCallback = cb => (err, a) => {
  const v = Data$dNullable.nullable(err, Data$dMaybe.Nothing, Data$dMaybe.Just);
  if (v.tag === "Nothing") { return cb(Data$dEither.$Either("Right", a))(); }
  if (v.tag === "Just") { return cb(Data$dEither.$Either("Left", v._1))(); }
  $runtime.fail();
};
const link = src => dst => cb => () => linkImpl(src, dst, handleCallback(cb));
const lstat = file => cb => {
  const $0 = handleCallback(x => cb((() => {
    if (x.tag === "Left") { return Data$dEither.$Either("Left", x._1); }
    if (x.tag === "Right") { return Data$dEither.$Either("Right", Node$dFS$dStats.$Stats(x._1)); }
    $runtime.fail();
  })()));
  return () => lstatImpl(file, $0);
};
const mkdir$p = file => v => cb => {
  const $0 = {recursive: v.recursive, mode: Node$dFS$dPerms.permsToString(v.mode)};
  return () => mkdirImpl(file, $0, handleCallback(cb));
};
const mkdir = path => mkdir$p(path)({recursive: false, mode: {u: Node$dFS$dPerms.semiringPerm.one, g: Node$dFS$dPerms.semiringPerm.one, o: Node$dFS$dPerms.semiringPerm.one}});
const readFile = file => cb => () => readFileImpl(file, {}, handleCallback(cb));
const readTextFile = encoding => file => cb => {
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
  return () => readFileImpl(file, $0, handleCallback(cb));
};
const readdir = file => cb => () => readdirImpl(file, handleCallback(cb));
const readlink = path => cb => () => readlinkImpl(path, handleCallback(cb));
const realpath = path => cb => () => realpathImpl(path, {}, handleCallback(cb));
const realpath$p = path => cache => cb => () => realpathImpl(path, cache, handleCallback(cb));
const rename = oldFile => newFile => cb => () => renameImpl(oldFile, newFile, handleCallback(cb));
const rm$p = path => opts => cb => () => rmImpl(path, opts, handleCallback(cb));
const rm = path => rm$p(path)({force: false, maxRetries: 100, recursive: false, retryDelay: 1000});
const rmdir$p = path => opts => cb => () => rmdirImpl(path, opts, handleCallback(cb));
const rmdir = path => cb => () => rmdirImpl(path, {maxRetries: 0, retryDelay: 100}, handleCallback(cb));
const stat = file => cb => {
  const $0 = handleCallback(x => cb((() => {
    if (x.tag === "Left") { return Data$dEither.$Either("Left", x._1); }
    if (x.tag === "Right") { return Data$dEither.$Either("Right", Node$dFS$dStats.$Stats(x._1)); }
    $runtime.fail();
  })()));
  return () => statImpl(file, $0);
};
const symlink = src => dest => ty => cb => {
  const $0 = (() => {
    if (ty === "FileLink") { return "file"; }
    if (ty === "DirLink") { return "dir"; }
    if (ty === "JunctionLink") { return "junction"; }
    $runtime.fail();
  })();
  return () => symlinkImpl(src, dest, $0, handleCallback(cb));
};
const truncate = file => len => cb => () => truncateImpl(file, len, handleCallback(cb));
const unlink = file => cb => () => unlinkImpl(file, handleCallback(cb));
const utimes = file => atime => mtime => cb => {
  const $0 = $runtime.intDiv(Data$dInt.unsafeClamp(Data$dNumber.round(Data$dDateTime$dInstant.fromDateTime(atime))), 1000);
  const $1 = $runtime.intDiv(Data$dInt.unsafeClamp(Data$dNumber.round(Data$dDateTime$dInstant.fromDateTime(mtime))), 1000);
  return () => utimesImpl(file, $0, $1, handleCallback(cb));
};
const writeFile = file => buff => cb => () => writeFileImpl(file, buff, {}, handleCallback(cb));
const writeTextFile = encoding => file => buff => cb => {
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
  return () => writeFileImpl(file, buff, $0, handleCallback(cb));
};
const fdWrite = fd => buff => off => len => pos => cb => {
  const $0 = (() => {
    if (pos.tag === "Nothing") { return Data$dNullable.null; }
    if (pos.tag === "Just") { return Data$dNullable.notNull(pos._1); }
    $runtime.fail();
  })();
  return () => writeImpl(fd, buff, off, len, $0, handleCallback(cb));
};
const fdRead = fd => buff => off => len => pos => cb => {
  const $0 = (() => {
    if (pos.tag === "Nothing") { return Data$dNullable.null; }
    if (pos.tag === "Just") { return Data$dNullable.notNull(pos._1); }
    $runtime.fail();
  })();
  return () => readImpl(fd, buff, off, len, $0, handleCallback(cb));
};
const fdOpen = file => flags => mode => cb => {
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
  return () => openImpl(file, $0, $1, handleCallback(cb));
};
const fdNext = fd => buff => cb => {
  const $0 = Node$dBuffer$dInternal.size(Effect.monadEffect)(buff);
  return () => {
    const sz = $0();
    return fdRead(fd)(buff)(0)(sz)(Data$dMaybe.Nothing)(cb)();
  };
};
const fdClose = fd => cb => () => closeImpl(fd, handleCallback(cb));
const fdAppend = fd => buff => cb => {
  const $0 = Node$dBuffer$dInternal.size(Effect.monadEffect)(buff);
  return () => {
    const sz = $0();
    return fdWrite(fd)(buff)(0)(sz)(Data$dMaybe.Nothing)(cb)();
  };
};
const chown = file => uid => gid => cb => () => chownImpl(file, uid, gid, handleCallback(cb));
const chmod = file => perms => cb => {
  const $0 = Node$dFS$dPerms.permsToString(perms);
  return () => chmodImpl(file, $0, handleCallback(cb));
};
const appendTextFile = encoding => file => buff => cb => {
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
  return () => appendFileImpl(file, buff, $0, handleCallback(cb));
};
const appendFile = file => buff => cb => () => appendFileImpl(file, buff, {}, handleCallback(cb));
export {
  appendFile,
  appendTextFile,
  chmod,
  chown,
  fdAppend,
  fdClose,
  fdNext,
  fdOpen,
  fdRead,
  fdWrite,
  handleCallback,
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
