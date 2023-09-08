import * as Data$dArrayBuffer$dTyped from "../Data.ArrayBuffer.Typed/index.js";
import * as Data$dArrayBuffer$dTyped$dGen from "../Data.ArrayBuffer.Typed.Gen/index.js";
const genArrayBuffer = dictMonadGen => dictMonadGen.Monad0().Bind1().Apply0().Functor0().map(Data$dArrayBuffer$dTyped.buffer)(Data$dArrayBuffer$dTyped$dGen.genTypedArray(dictMonadGen)(Data$dArrayBuffer$dTyped.typedArrayUint8)(Data$dArrayBuffer$dTyped$dGen.genUint8(dictMonadGen)));
export {genArrayBuffer};
