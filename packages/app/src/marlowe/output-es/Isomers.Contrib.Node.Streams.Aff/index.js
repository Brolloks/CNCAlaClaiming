import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Node$dStream from "../Node.Stream/index.js";
const writeString = dictMonadAff => stream => encoding => str => dictMonadAff.liftAff(Effect$dAff.makeAff(handler => {
  const $0 = Node$dStream.writeString(stream)(encoding)(str)(err => handler((() => {
    if (err.tag === "Nothing") { return Data$dEither.$Either("Right", undefined); }
    if (err.tag === "Just") { return Data$dEither.$Either("Left", err._1); }
    $runtime.fail();
  })()));
  return () => {
    $0();
    return Effect$dAff.nonCanceler;
  };
}));
export {writeString};
