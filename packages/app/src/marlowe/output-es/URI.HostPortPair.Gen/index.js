import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dThese from "../Data.These/index.js";
const genHostPortPair = dictMonadGen => {
  const Monad0 = dictMonadGen.Monad0();
  const Bind1 = Monad0.Bind1();
  const $0 = Monad0.Applicative0();
  return host => port => {
    const sometimes = (chance, g) => Bind1.bind(dictMonadGen.chooseFloat(0.0)(1.0))(n => {
      if (n > chance) { return Bind1.Apply0().Functor0().map(Data$dMaybe.Just)(g); }
      return $0.pure(Data$dMaybe.Nothing);
    });
    return Bind1.bind(sometimes(0.75, host))(h => Bind1.bind(sometimes(0.25, port))(p => $0.pure((() => {
      if (h.tag === "Just") {
        if (p.tag === "Just") { return Data$dMaybe.$Maybe("Just", Data$dThese.$These("Both", h._1, p._1)); }
        if (p.tag === "Nothing") { return Data$dMaybe.$Maybe("Just", Data$dThese.$These("This", h._1)); }
        $runtime.fail();
      }
      if (h.tag === "Nothing") {
        if (p.tag === "Just") { return Data$dMaybe.$Maybe("Just", Data$dThese.$These("That", p._1)); }
        if (p.tag === "Nothing") { return Data$dMaybe.Nothing; }
      }
      $runtime.fail();
    })())));
  };
};
export {genHostPortPair};
