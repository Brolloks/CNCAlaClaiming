import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Parsing from "../Parsing/index.js";
import * as URI$dRelativeRef from "../URI.RelativeRef/index.js";
import * as URI$dURI from "../URI.URI/index.js";
const print = opts => v2 => {
  if (v2.tag === "Left") { return URI$dURI.print(opts)(v2._1); }
  if (v2.tag === "Right") { return URI$dRelativeRef.print(opts)(v2._1); }
  $runtime.fail();
};
const parser = opts => {
  const $0 = URI$dURI.parser(opts);
  const $1 = URI$dRelativeRef.parser(opts);
  return (v2, $2, $3, $4, $5) => {
    const $6 = v2._1;
    const $7 = v2._2;
    return $2(v3 => $2(v1 => $0(
      Parsing.$ParseState($6, $7, false),
      $2,
      $3,
      (v2$1, $8) => $2(v5 => $2(v1$1 => $1(v2, $2, $3, $4, (state2, a) => $2(v2$2 => $5(state2, Data$dEither.$Either("Right", a)))))),
      (state2, a) => $2(v2$1 => $5(state2, Data$dEither.$Either("Left", a)))
    )));
  };
};
export {parser, print};
