import * as Control$dMonad$dGen from "../Control.Monad.Gen/index.js";
import * as Data$dArrayBuffer$dArrayBuffer$dGen from "../Data.ArrayBuffer.ArrayBuffer.Gen/index.js";
import * as Data$dArrayBuffer$dDataView from "../Data.ArrayBuffer.DataView/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dUnfoldable from "../Data.Unfoldable/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const $WithOffsetAndValue = (_1, _2, _3) => ({tag: "WithOffsetAndValue", _1, _2, _3});
const WithOffsetAndValue = value0 => value1 => value2 => $WithOffsetAndValue(value0, value1, value2);
const genWithOffsetAndValue = dictMonadGen => {
  const Monad0 = dictMonadGen.Monad0();
  const $0 = Monad0.Bind1();
  const Applicative0 = Monad0.Applicative0();
  const replicateA = Data$dUnfoldable.replicateA(Applicative0)(Data$dUnfoldable.unfoldableArray)(Data$dTraversable.traversableArray);
  return dictMonadRec => {
    const suchThat = Control$dMonad$dGen.suchThat(dictMonadRec)(dictMonadGen);
    return dictBytesPerType => () => n => gen => genT => {
      const b = dictBytesPerType.byteWidth(Type$dProxy.Proxy);
      return $0.bind(suchThat(gen)(xs => b <= Data$dArrayBuffer$dDataView.byteLength(xs)))(xs => $0.bind(replicateA(n)(dictMonadGen.chooseInt(0)(Data$dArrayBuffer$dDataView.byteLength(xs) - b | 0)))(os => $0.bind(genT)(t => Applicative0.pure($WithOffsetAndValue(
        os,
        t,
        xs
      )))));
    };
  };
};
const genDataView = dictMonadGen => dictMonadGen.Monad0().Bind1().Apply0().Functor0().map(Data$dArrayBuffer$dDataView.whole)(Data$dArrayBuffer$dArrayBuffer$dGen.genArrayBuffer(dictMonadGen));
export {$WithOffsetAndValue, WithOffsetAndValue, genDataView, genWithOffsetAndValue};
