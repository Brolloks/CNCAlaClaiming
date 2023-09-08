import * as $runtime from "../runtime.js";
import * as Data$dCommutativeRing from "../Data.CommutativeRing/index.js";
import * as Data$dDivisionRing from "../Data.DivisionRing/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dEuclideanRing from "../Data.EuclideanRing/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dRing from "../Data.Ring/index.js";
import * as Data$dSemiring from "../Data.Semiring/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import {float32Bottom, float32Top, fromNumberImpl} from "./foreign.js";
const toNumber = v => v;
const showFloat32 = Data$dShow.showNumber;
const semiringFloat32 = Data$dSemiring.semiringNumber;
const ringFloat32 = Data$dRing.ringNumber;
const ordFloat32 = Data$dOrd.ordNumber;
const fromNumber = x => {
  const r = fromNumberImpl(x);
  if (r === Infinity || r === -Infinity) { return Data$dMaybe.Nothing; }
  return Data$dMaybe.$Maybe("Just", r);
};
const fromNumber$p = x => {
  const v = fromNumber(x);
  if (v.tag === "Nothing") { return 0.0; }
  if (v.tag === "Just") { return v._1; }
  $runtime.fail();
};
const euclideanringFloat32 = Data$dEuclideanRing.euclideanRingNumber;
const eqFloat32 = Data$dEq.eqNumber;
const divisionringFloat32 = Data$dDivisionRing.divisionringNumber;
const commutativeringFloat32 = Data$dCommutativeRing.commutativeRingNumber;
const boundedFloat32 = {top: float32Top, bottom: float32Bottom, Ord0: () => Data$dOrd.ordNumber};
export {
  boundedFloat32,
  commutativeringFloat32,
  divisionringFloat32,
  eqFloat32,
  euclideanringFloat32,
  fromNumber,
  fromNumber$p,
  ordFloat32,
  ringFloat32,
  semiringFloat32,
  showFloat32,
  toNumber
};
export * from "./foreign.js";
