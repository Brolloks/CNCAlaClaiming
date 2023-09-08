import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dVariant from "../Data.Variant/index.js";
const tag = v => v.type;
const split = dictContractable => {
  const contract1 = Data$dVariant.contract(Data$dMaybe.alternativeMaybe)(dictContractable);
  return () => s => {
    const v = contract1(s);
    if (v.tag === "Just") { return Data$dEither.$Either("Left", v._1); }
    if (v.tag === "Nothing") { return Data$dEither.$Either("Right", s); }
    $runtime.fail();
  };
};
const merge = () => () => v => {
  if (v.tag === "Left") { return v._1; }
  if (v.tag === "Right") { return v._1; }
  $runtime.fail();
};
const append = () => () => v => v1 => v1;
export {append, merge, split, tag};
