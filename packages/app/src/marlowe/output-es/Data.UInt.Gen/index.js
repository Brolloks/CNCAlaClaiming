import * as Data$dUInt from "../Data.UInt/index.js";
const genUInt = dictMonadGen => a => b => dictMonadGen.Monad0().Bind1().Apply0().Functor0().map(Data$dUInt.from)(dictMonadGen.chooseFloat(Data$dUInt.toNumber(a))(Data$dUInt.toNumber(b)));
export {genUInt};
