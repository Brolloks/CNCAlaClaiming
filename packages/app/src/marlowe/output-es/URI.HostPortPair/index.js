import * as $runtime from "../runtime.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dThese from "../Data.These/index.js";
import * as Parsing$dCombinators from "../Parsing.Combinators/index.js";
import * as URI$dCommon from "../URI.Common/index.js";
import * as URI$dHost from "../URI.Host/index.js";
import * as URI$dPort from "../URI.Port/index.js";
const print = printHost => printPort => v => {
  if (v.tag === "Nothing") { return ""; }
  if (v.tag === "Just") {
    if (v._1.tag === "This") { return URI$dHost.print(printHost(v._1._1)); }
    if (v._1.tag === "That") { return ":" + Data$dShow.showIntImpl(printPort(v._1._1)); }
    if (v._1.tag === "Both") { return URI$dHost.print(printHost(v._1._1)) + ":" + Data$dShow.showIntImpl(printPort(v._1._2)); }
  }
  $runtime.fail();
};
const parser = parseHost => parsePort => (state1, more, lift1, $$throw, done) => more(v1 => Parsing$dCombinators.optionMaybe(URI$dCommon.wrapParser(Data$dIdentity.monadIdentity)(parseHost)(URI$dHost.parser))(
  state1,
  more,
  lift1,
  $$throw,
  (state2, a) => more(v2 => more(v1$1 => Parsing$dCombinators.optionMaybe(URI$dCommon.wrapParser(Data$dIdentity.monadIdentity)(parsePort)(URI$dPort.parser))(
    state2,
    more,
    lift1,
    $$throw,
    (state2$1, a$1) => more(v2$1 => done(
      state2$1,
      (() => {
        if (a.tag === "Just") {
          if (a$1.tag === "Nothing") { return Data$dMaybe.$Maybe("Just", Data$dThese.$These("This", a._1)); }
          if (a$1.tag === "Just") { return Data$dMaybe.$Maybe("Just", Data$dThese.$These("Both", a._1, a$1._1)); }
          $runtime.fail();
        }
        if (a.tag === "Nothing") {
          if (a$1.tag === "Just") { return Data$dMaybe.$Maybe("Just", Data$dThese.$These("That", a$1._1)); }
          if (a$1.tag === "Nothing") { return Data$dMaybe.Nothing; }
        }
        $runtime.fail();
      })()
    ))
  )))
));
export {parser, print};
