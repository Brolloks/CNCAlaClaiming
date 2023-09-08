import * as Data$dBigInt from "../Data.BigInt/index.js";
import * as Data$dBigInt$dArgonaut from "../Data.BigInt.Argonaut/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
const PositiveBigInt = x => x;
const semiringPositiveBigInt = Data$dBigInt.semiringBigInt;
const ordPositiveBigInt = Data$dBigInt$dArgonaut.ordBigInt;
const newtypePositiveBigInt_ = {Coercible0: () => {}};
const eqPositiveBigInt = Data$dBigInt$dArgonaut.eqBigInt;
const fromBigInt = n => {
  if (Data$dBigInt.ordBigInt.compare(n)(Data$dBigInt.fromInt(0)) !== "LT") { return Data$dMaybe.$Maybe("Just", n); }
  return Data$dMaybe.Nothing;
};
export {PositiveBigInt, eqPositiveBigInt, fromBigInt, newtypePositiveBigInt_, ordPositiveBigInt, semiringPositiveBigInt};
