import * as $runtime from "../runtime.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Effect from "../Effect/index.js";
import * as Isomers$dContrib$dNode$dStream from "../Isomers.Contrib.Node.Stream/index.js";
import * as Node$dHTTP from "../Node.HTTP/index.js";
import * as Node$dStream from "../Node.Stream/index.js";
const for_ = /* #__PURE__ */ Data$dFoldable.for_(Effect.applicativeEffect)(Data$dFoldable.foldableArray);
const setStatus = res => v => {
  const $0 = v.message;
  const $1 = Node$dHTTP.setStatusCode(res)(v.code);
  return () => {
    $1();
    return Node$dHTTP.setStatusMessage(res)($0)();
  };
};
const writeNodeResponse = sr => response => {
  const $0 = setStatus(response)(sr.status);
  return () => {
    $0();
    for_(sr.headers)(v => Node$dHTTP.setHeader(response)(v._1)(v._2))();
    const end = Node$dStream.endImpl(response)(x => Isomers$dContrib$dNode$dStream.handleStreamError("Iso.Node.Response.writeNodeResponse: end error")(Data$dNullable.nullable(
      x,
      Data$dMaybe.Nothing,
      Data$dMaybe.Just
    ))());
    if (sr.body.tag === "Just") {
      if (sr.body._1.tag === "NodeBuffer") {
        Node$dStream.writeImpl(response)(sr.body._1._1)(x => {
          Isomers$dContrib$dNode$dStream.handleStreamError("Isomers.Node.Response.writeNodeResponse: write error")(Data$dNullable.nullable(x, Data$dMaybe.Nothing, Data$dMaybe.Just))();
          return end();
        })();
        return;
      }
      if (sr.body._1.tag === "NodeStream") {
        Node$dStream.pipe(sr.body._1._1)(response)();
        return;
      }
      if (sr.body._1.tag === "NodeWriter") { return sr.body._1._1(response)(); }
      $runtime.fail();
    }
    if (sr.body.tag === "Nothing") { return end(); }
    $runtime.fail();
  };
};
export {for_, setStatus, writeNodeResponse};
