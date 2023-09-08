import * as Data$dOrd from "../Data.Ord/index.js";
const TacitString = x => x;
const showTacitString = {show: v => v};
const hush = TacitString;
const eqTacitString = {eq: x => y => x === y};
const ordTacitString = {compare: x => y => Data$dOrd.ordString.compare(x)(y), Eq0: () => eqTacitString};
export {TacitString, eqTacitString, hush, ordTacitString, showTacitString};
