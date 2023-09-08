import * as $runtime from "../runtime.js";
import * as Control$dMonad$dGen$dCommon from "../Control.Monad.Gen.Common/index.js";
import * as Control$dMonad$dRec$dClass from "../Control.Monad.Rec.Class/index.js";
import * as Data$dThese from "../Data.These/index.js";
const genThese = dictMonadGen => {
  const Apply0 = dictMonadGen.Monad0().Bind1().Apply0();
  const genMaybe = Control$dMonad$dGen$dCommon.genMaybe$p(dictMonadGen)(0.75);
  return dictMonadRec => {
    const $0 = dictMonadGen.Monad0().Bind1().Apply0().Functor0();
    return ga => gb => {
      const $1 = Apply0.apply(Apply0.Functor0().map(Data$dThese.maybeThese)(genMaybe(ga)))(genMaybe(gb));
      return dictMonadRec.tailRecM(v => $0.map(a => {
        if (a.tag === "Nothing") { return Control$dMonad$dRec$dClass.$Step("Loop", undefined); }
        if (a.tag === "Just") { return Control$dMonad$dRec$dClass.$Step("Done", a._1); }
        $runtime.fail();
      })($1))();
    };
  };
};
export {genThese};
