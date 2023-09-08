import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
const identity = x => x;
const req = dictChoice => dictProfunctor => err => p => dictChoice.Profunctor0().dimap(v2 => {
  if (v2.tag === "Nothing") { return Data$dEither.$Either("Left", err); }
  if (v2.tag === "Just") { return Data$dEither.$Either("Right", v2._1); }
  $runtime.fail();
})(identity)(dictChoice.right(p));
const opt = dictChoice => dictProfunctor => p => dictChoice.Profunctor0().dimap(v2 => {
  if (v2.tag === "Nothing") { return Data$dEither.$Either("Left", undefined); }
  if (v2.tag === "Just") { return Data$dEither.$Either("Right", v2._1); }
  $runtime.fail();
})(v2 => {
  if (v2.tag === "Left") { return Data$dMaybe.Nothing; }
  if (v2.tag === "Right") { return Data$dMaybe.$Maybe("Just", v2._1); }
  $runtime.fail();
})(dictChoice.right(p));
export {identity, opt, req};
