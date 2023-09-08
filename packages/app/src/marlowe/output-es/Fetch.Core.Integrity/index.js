import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
const Integrity = x => x;
const ordIntegrity = Data$dOrd.ordString;
const newtypeIntegrity_ = {Coercible0: () => {}};
const eqIntegrity = Data$dEq.eqString;
export {Integrity, eqIntegrity, newtypeIntegrity_, ordIntegrity};
