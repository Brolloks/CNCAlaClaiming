import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
const toChecked = v2 => {
  if (v2.tag === "Left") { return Data$dEither.$Either("Left", {type: "jsonDecodeError", value: v2._1}); }
  if (v2.tag === "Right") { return Data$dEither.$Either("Right", v2._1); }
  $runtime.fail();
};
const decodeJsonV = dictDecodeJson => json => {
  const $0 = dictDecodeJson.decodeJson(json);
  if ($0.tag === "Left") { return Data$dEither.$Either("Left", {type: "jsonDecodeError", value: $0._1}); }
  if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
  $runtime.fail();
};
export {decodeJsonV, toChecked};
