import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
const liftMaybe = dictApplicative => err => mv => x => dictApplicative.pure((() => {
  if (mv.tag === "Nothing") { return Data$dEither.$Either("Left", err); }
  if (mv.tag === "Just") { return Data$dEither.$Either("Right", mv._1); }
  $runtime.fail();
})());
export {liftMaybe};
