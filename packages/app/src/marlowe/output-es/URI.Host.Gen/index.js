import * as $runtime from "../runtime.js";
import * as Data$dChar$dGen from "../Data.Char.Gen/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data$dString$dGen from "../Data.String.Gen/index.js";
import * as URI$dCommon from "../URI.Common/index.js";
import * as URI$dHost from "../URI.Host/index.js";
import * as URI$dHost$dIPv4Address from "../URI.Host.IPv4Address/index.js";
import * as URI$dHost$dRegName from "../URI.Host.RegName/index.js";
const genRegName = dictMonadGen => {
  const chooseBool = dictMonadGen.chooseBool;
  const genAlpha = Data$dChar$dGen.genAlpha(dictMonadGen);
  const genDigitChar = Data$dChar$dGen.genDigitChar(dictMonadGen);
  const Monad0 = dictMonadGen.Monad0();
  const $0 = Monad0.Bind1();
  return dictMonadRec => {
    const genString = Data$dString$dGen.genString(dictMonadRec)(dictMonadGen);
    const genAlphaNumeric = dictMonadGen.Monad0().Bind1().bind(chooseBool)(v => {
      if (v) { return genAlpha; }
      return genDigitChar;
    });
    return $0.bind(genAlphaNumeric)(head => $0.bind(genString(genAlphaNumeric))(tail => Monad0.Applicative0().pure((() => {
      const $1 = URI$dCommon.printEncoded(URI$dHost$dRegName.regNameChar)(Data$dString$dCodeUnits.singleton(head) + tail);
      if ($1 === "") { $runtime.fail(); }
      return $1;
    })())));
  };
};
const genIPv4 = dictMonadGen => {
  const Monad0 = dictMonadGen.Monad0();
  const $0 = Monad0.Bind1();
  return $0.bind(dictMonadGen.chooseInt(0)(255))(a => $0.bind(dictMonadGen.chooseInt(0)(255))(b => $0.bind(dictMonadGen.chooseInt(0)(255))(c => $0.bind(dictMonadGen.chooseInt(0)(255))(d => Monad0.Applicative0().pure(URI$dHost$dIPv4Address.unsafeFromInts(a)(b)(c)(d))))));
};
const genHost = dictMonadGen => {
  const chooseBool = dictMonadGen.chooseBool;
  const $0 = dictMonadGen.Monad0().Bind1().Apply0().Functor0();
  const genRegName1 = genRegName(dictMonadGen);
  const genIPv41 = genIPv4(dictMonadGen);
  return dictMonadRec => {
    const $1 = $0.map(URI$dHost.NameAddress)(genRegName1(dictMonadRec));
    const $2 = $0.map(URI$dHost.IPv4Address)(genIPv41);
    return dictMonadGen.Monad0().Bind1().bind(chooseBool)(v => {
      if (v) { return $1; }
      return $2;
    });
  };
};
export {genHost, genIPv4, genRegName};
