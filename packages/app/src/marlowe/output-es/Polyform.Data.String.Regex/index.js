import * as Data$dString$dRegex from "../Data.String.Regex/index.js";
import * as Data$dString$dRegex$dFlags from "../Data.String.Regex.Flags/index.js";
import * as Data$dString$dRegex$dUnsafe from "../Data.String.Regex.Unsafe/index.js";
const escape = s => Data$dString$dRegex.replace(Data$dString$dRegex$dUnsafe.unsafeRegex("[.*+?^${}()|[\\]\\\\]")(Data$dString$dRegex$dFlags.global))("\\$&")(s);
export {escape};
