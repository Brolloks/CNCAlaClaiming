import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
const UtfLabel = x => x;
const utf8 = "utf8";
const ordUtfLabel = Data$dOrd.ordString;
const newtypeUtfLabel = {Coercible0: () => {}};
const eqUtfLabel = Data$dEq.eqString;
export {UtfLabel, eqUtfLabel, newtypeUtfLabel, ordUtfLabel, utf8};
