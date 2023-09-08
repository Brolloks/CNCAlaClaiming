import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Debug from "../Debug/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Isomers$dContrib$dNode$dStream from "../Isomers.Contrib.Node.Stream/index.js";
import * as Isomers$dNode$dRequest from "../Isomers.Node.Request/index.js";
import * as Isomers$dNode$dResponse from "../Isomers.Node.Response/index.js";
import * as Isomers$dRuntime from "../Isomers.Runtime/index.js";
import * as Isomers$dServer from "../Isomers.Server/index.js";
import * as Node$dEncoding from "../Node.Encoding/index.js";
import * as Node$dHTTP from "../Node.HTTP/index.js";
import * as Node$dStream from "../Node.Stream/index.js";
const onNode = /* #__PURE__ */ Isomers$dRuntime.caseRuntimeImpl(Data$dMaybe.Just, v => Data$dMaybe.Nothing, v => Data$dMaybe.Nothing, Data$dMaybe.Nothing);
const mkRequestHandler = dictMonadAff => {
  const MonadEffect0 = dictMonadAff.MonadEffect0();
  const Monad0 = MonadEffect0.Monad0();
  const Bind1 = Monad0.Bind1();
  const traceM1 = Debug.traceM()(Monad0);
  return v => nreq => nres => {
    const req = Isomers$dNode$dRequest.fromNodeRequest(1000000)(nreq);
    return Bind1.bind(traceM1("request:"))(() => Bind1.bind(traceM1(req))(() => Bind1.bind(v(req))(v1 => {
      if (v1.tag === "Right") { return MonadEffect0.liftEffect(Isomers$dNode$dResponse.writeNodeResponse(v1._1)(nres)); }
      if (v1.tag === "Left") {
        const $0 = v1._1;
        return MonadEffect0.liftEffect((() => {
          const $1 = Node$dHTTP.setStatusCode(nres)(404);
          return () => {
            $1();
            Node$dHTTP.setStatusMessage(nres)("Not Found")();
            Node$dStream.writeString(nres)(Node$dEncoding.UTF8)(Isomers$dServer.showRoutingError.show($0))(nerr => {
              const $2 = Isomers$dContrib$dNode$dStream.handleStreamError("Isomers.Node.Server: Error writing error response")(nerr);
              return () => {
                $2();
                return Node$dStream.endImpl(nres)(x => Isomers$dContrib$dNode$dStream.handleStreamError("Isomers.Node.Server: Error while ending response")(Data$dNullable.nullable(
                  x,
                  Data$dMaybe.Nothing,
                  Data$dMaybe.Just
                ))())();
              };
            })();
          };
        })());
      }
      $runtime.fail();
    })));
  };
};
const serve = dictMonadAff => {
  const mkRequestHandler1 = mkRequestHandler(dictMonadAff);
  return router => interpret => options => onStarted => {
    const reqHandler = mkRequestHandler1(router);
    const $0 = Node$dHTTP.createServer(nreq => nres => {
      const $0 = Effect$dAff._makeFiber(
        Effect$dAff.ffiUtil,
        Effect$dAff._catchError(interpret(reqHandler(nreq)(nres)))(err => Effect$dAff._liftEffect((() => {
          const $0 = Effect$dConsole.error(Effect$dException.message(err));
          return () => {
            $0();
            Node$dHTTP.setStatusCode(nres)(500)();
            return Node$dHTTP.setStatusMessage(nres)("Internal Server Error")();
          };
        })()))
      );
      return () => {
        const fiber = $0();
        fiber.run();
      };
    });
    return () => {
      const server = $0();
      Node$dHTTP.listen(server)(options)(onStarted)();
      return Node$dHTTP.close(server);
    };
  };
};
export {mkRequestHandler, onNode, serve};
