import * as URI$dPort from "../URI.Port/index.js";
const genPort = dictMonadGen => dictMonadGen.Monad0().Bind1().Apply0().Functor0().map(URI$dPort.unsafeFromInt)(dictMonadGen.chooseInt(0)(65535));
export {genPort};
