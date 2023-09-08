// | Functions for generating typed arrays and values.
import * as Data$dArrayBuffer$dTyped from "../Data.ArrayBuffer.Typed/index.js";
import * as Data$dFloat32 from "../Data.Float32/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dUInt from "../Data.UInt/index.js";
import * as Data$dUInt$dGen from "../Data.UInt.Gen/index.js";
import * as Data$dUnfoldable from "../Data.Unfoldable/index.js";
const $WithIndices = (_1, _2) => ({tag: "WithIndices", _1, _2});
const WithIndices = value0 => value1 => $WithIndices(value0, value1);
const genWithIndices = dictMonadGen => {
  const Monad0 = dictMonadGen.Monad0();
  const $0 = Monad0.Bind1();
  const Applicative0 = Monad0.Applicative0();
  const replicateA = Data$dUnfoldable.replicateA(Applicative0)(Data$dUnfoldable.unfoldableArray)(Data$dTraversable.traversableArray);
  return dictBytesPerType => n => gen => $0.bind(gen)(xs => $0.bind(replicateA(n)(dictMonadGen.chooseInt(0)(Data$dArrayBuffer$dTyped.lengthImpl(xs) - 1 | 0)))(os => Applicative0.pure($WithIndices(
    os,
    xs
  ))));
};
const genUint8 = dictMonadGen => dictMonadGen.Monad0().Bind1().Apply0().Functor0().map(Data$dUInt.from)(dictMonadGen.chooseInt(0)(255));
const genUint32 = dictMonadGen => Data$dUInt$dGen.genUInt(dictMonadGen)(Data$dUInt.uintBounded.bottom)(Data$dUInt.uintBounded.top);
const genUint16 = dictMonadGen => dictMonadGen.Monad0().Bind1().Apply0().Functor0().map(Data$dUInt.from)(dictMonadGen.chooseInt(0)(65535));
const genTypedArray = dictMonadGen => {
  const Monad0 = dictMonadGen.Monad0();
  const $0 = Monad0.Bind1();
  const Applicative0 = Monad0.Applicative0();
  const replicateA = Data$dUnfoldable.replicateA(Applicative0)(Data$dUnfoldable.unfoldableArray)(Data$dTraversable.traversableArray);
  return dictTypedArray => gen => dictMonadGen.sized(s => $0.bind(dictMonadGen.chooseInt(0)(s))(n => $0.bind(replicateA(n)(gen))(a => Applicative0.pure(dictTypedArray.create(
    a,
    Data$dNullable.null,
    Data$dNullable.null
  )))));
};
const genInt8 = dictMonadGen => dictMonadGen.chooseInt(-128)(127);
const genInt32 = dictMonadGen => dictMonadGen.chooseInt(-2147483648)(2147483647);
const genInt16 = dictMonadGen => dictMonadGen.chooseInt(-32768)(32767);
const genFloat64 = dictMonadGen => dictMonadGen.chooseFloat(-4.4942328371557893e+307)(4.4942328371557893e+307);
const genFloat32 = dictMonadGen => dictMonadGen.Monad0().Bind1().Apply0().Functor0().map(Data$dFloat32.fromNumber$p)(dictMonadGen.chooseFloat(-3.40282347e+38)(3.40282347e+38));
export {$WithIndices, WithIndices, genFloat32, genFloat64, genInt16, genInt32, genInt8, genTypedArray, genUint16, genUint32, genUint8, genWithIndices};
