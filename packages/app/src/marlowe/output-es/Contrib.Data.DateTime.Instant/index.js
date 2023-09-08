import * as Data$dInt from "../Data.Int/index.js";
import * as Effect$dNow from "../Effect.Now/index.js";
import * as JS$dUnsafe$dStringify from "../JS.Unsafe.Stringify/index.js";
import * as Partial from "../Partial/index.js";
const unsafeInstant = t => {
  if (t >= -8639977881600000.0 && t <= 8639977881599999.0) { return t; }
  return Partial._crashWith("Contrib.Data.DateTime.Instant.unsafeInstant: invalid instant value:" + JS$dUnsafe$dStringify.unsafeStringify(t));
};
const unsafeInstantFromInt = x => unsafeInstant(Data$dInt.toNumber(x));
const millisecondsFromNow = d => () => {
  const n = Effect$dNow.now();
  return unsafeInstant(n + d);
};
export {millisecondsFromNow, unsafeInstant, unsafeInstantFromInt};
