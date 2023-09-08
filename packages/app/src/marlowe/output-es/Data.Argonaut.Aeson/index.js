import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
const identity = x => x;
const unconsRecord = dictIsSymbol => () => () => p => record => Data$dTuple.$Tuple(
  Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(p))(record),
  Record$dUnsafe.unsafeDelete(dictIsSymbol.reflectSymbol(p))(record)
);
const tagProp = "tag";
const rightProp = "Right";
const maybeToEither = a => v2 => {
  if (v2.tag === "Nothing") { return Data$dEither.$Either("Left", a); }
  if (v2.tag === "Just") { return Data$dEither.$Either("Right", v2._1); }
  $runtime.fail();
};
const mapP = dictProfunctor => dictProfunctor.dimap(identity);
const leftProp = "Left";
const contentsProp = "contents";
const cmapP = dictProfunctor => f => dictProfunctor.dimap(f)(identity);
export {cmapP, contentsProp, identity, leftProp, mapP, maybeToEither, rightProp, tagProp, unconsRecord};
