import * as Data$dTuple from "../Data.Tuple/index.js";
const NuF = x => x;
const Nu = x => x;
const unfold = pos => peek => Data$dTuple.$Tuple(peek, pos);
const observe = dictFunctor => v => {
  const $0 = v._1;
  return dictFunctor.map(a => Data$dTuple.$Tuple($0, a))($0(v._2));
};
const newtypeNu = {Coercible0: () => {}};
export {Nu, NuF, newtypeNu, observe, unfold};
