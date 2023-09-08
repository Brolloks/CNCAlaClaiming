import * as Data$dEither from "../Data.Either/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Node$dBuffer$dInternal from "../Node.Buffer.Internal/index.js";
import * as Node$dEncoding from "../Node.Encoding/index.js";
import * as Node$dStream from "../Node.Stream/index.js";
const _buffs = maxBodySize => stream => Effect$dAff.makeAff(done => () => {
  let ref = {bufs: [], size: 0};
  Node$dStream.onData(stream)(buf => () => {
    const accum = ref;
    const size1 = Node$dBuffer$dInternal.size(Effect.monadEffect)(buf)();
    const size$p = accum.size + size1 | 0;
    if (size1 > maxBodySize) { return Effect$dException.throwException(Effect$dException.error("Body to large"))(); }
    return ref = {bufs: [...accum.bufs, buf], size: size$p};
  })();
  Node$dStream.onEnd(stream)(() => {
    const $0 = ref;
    return done(Data$dEither.$Either("Right", $0.bufs))();
  })();
  return Effect$dAff.nonCanceler;
});
const buff = maxBodySize => stream => Effect$dAff._bind(_buffs(maxBodySize)(stream))(x => Effect$dAff._liftEffect(Node$dBuffer$dInternal.concat(x)));
const str = maxBodySize => stream => Effect$dAff._bind(buff(maxBodySize)(stream))((() => {
  const $0 = Node$dBuffer$dInternal.toString(Effect.monadEffect)(Node$dEncoding.UTF8);
  return x => Effect$dAff._liftEffect($0(x));
})());
export {_buffs, buff, str};
