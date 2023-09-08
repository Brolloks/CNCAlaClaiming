import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dLazy from "../Data.Lazy/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dString$dCaseInsensitive from "../Data.String.CaseInsensitive/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Data$dVariant from "../Data.Variant/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Halogen$dSubscription from "../Halogen.Subscription/index.js";
import * as Isomers$dClient from "../Isomers.Client/index.js";
import * as Isomers$dClient$dFetch from "../Isomers.Client.Fetch/index.js";
import * as Isomers$dContrib$dWeb$dRouter$dDriver$dPushState from "../Isomers.Contrib.Web.Router.Driver.PushState/index.js";
import * as Isomers$dRequest$dDuplex$dParser from "../Isomers.Request.Duplex.Parser/index.js";
import * as Isomers$dRequest$dDuplex$dPrinter from "../Isomers.Request.Duplex.Printer/index.js";
import * as Isomers$dRequest$dDuplex$dType from "../Isomers.Request.Duplex.Type/index.js";
import * as Isomers$dWeb$dClient$dRender from "../Isomers.Web.Client.Render/index.js";
import * as JS$dUnsafe$dStringify from "../JS.Unsafe.Stringify/index.js";
import * as Routing$dPushState from "../Routing.PushState/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Web$dRouter from "../Web.Router/index.js";
const fromFoldable = /* #__PURE__ */ Data$dMap$dInternal.fromFoldable(Data$dString$dCaseInsensitive.ordCaseInsensitiveString)(Data$dFoldable.foldableArray);
const webRequest = dictHFoldlWithIndex => dictHFoldlWithIndex1 => {
  const requestBuilders = dictHFoldlWithIndex1.hfoldlWithIndex(Isomers$dClient.$RequestBuildersStep(Isomers$dClient.identity))({});
  return v => requestBuilders(Type$dProxy.Proxy);
};
const unsafePrint = requestDuplex => request => Isomers$dRequest$dDuplex$dPrinter.run(requestDuplex._1(request)).path;
const serverRequest = accept => path => (
  {path, body: Data$dMaybe.Nothing, headers: Data$dLazy.defer(v => fromFoldable([Data$dTuple.$Tuple("Accept", accept)])), httpVersion: "HTTP/1.1", method: "GET"}
);
const webServerRequest = /* #__PURE__ */ serverRequest("text/html");
const parseWebURL = dictHFoldlWithIndex => requestDuplex => renderers => path => Effect$dAff._map((() => {
  const $0 = dictHFoldlWithIndex.hfoldlWithIndex(Isomers$dWeb$dClient$dRender.ContractRequest)(v => Data$dMaybe.Nothing)(renderers);
  return a => {
    if (a.tag === "Left") { return Data$dMaybe.Nothing; }
    if (a.tag === "Right") { return $0(a._1); }
    $runtime.fail();
  };
})())(Isomers$dRequest$dDuplex$dParser.run(requestDuplex._2)(serverRequest("text/html")(path)));
const apiServerRequest = /* #__PURE__ */ serverRequest("application/json");
const parseSpecReq = specReqDpl => x => Isomers$dRequest$dDuplex$dParser.run(specReqDpl._2)(serverRequest("application/json")(x));
const parseWebReq = dictHFoldlWithIndex => dictHFoldlWithIndex1 => specReqDpl => render => {
  const $0 = Isomers$dRequest$dDuplex$dType.parse(Isomers$dRequest$dDuplex$dType.as({
    print: dictHFoldlWithIndex.hfoldlWithIndex(Isomers$dWeb$dClient$dRender.ExpandRequest)(Data$dVariant.case_)(render),
    parse: (() => {
      const $0 = dictHFoldlWithIndex1.hfoldlWithIndex(Isomers$dWeb$dClient$dRender.ContractRequest)(v => Data$dMaybe.Nothing)(render);
      return x => {
        const $1 = $0(x);
        if ($1.tag === "Nothing") { return Data$dEither.$Either("Left", "Given URL is not a web route but a spec route."); }
        if ($1.tag === "Just") { return Data$dEither.$Either("Right", $1._1); }
        $runtime.fail();
      };
    })(),
    show: JS$dUnsafe$dStringify.unsafeStringify
  })(specReqDpl));
  return x => $0(serverRequest("application/json")(x));
};
const fakeWebRouter = dictHFoldlWithIndex => dictHFoldlWithIndex1 => dictHFoldlWithIndex2 => {
  const requestBuilders = dictHFoldlWithIndex2.hfoldlWithIndex(Isomers$dClient.$RequestBuildersStep(Isomers$dClient.identity))({});
  return dictHFoldlWithIndex3 => {
    const client = Isomers$dClient.client(dictHFoldlWithIndex3);
    return dictHFoldlWithIndex4 => {
      const client1 = client(dictHFoldlWithIndex4);
      return fetch => doc => v => (
        {
          client: client1(fetch)(v.spec.request)(v.spec.response),
          navigate: v$1 => () => {},
          parse: {spec: parseSpecReq(v.spec.request), web: parseWebReq(dictHFoldlWithIndex1)(dictHFoldlWithIndex)(v.spec.request)(v.render._1)},
          print: {
            spec: unsafePrint(v.spec.request),
            web: (() => {
              const $0 = dictHFoldlWithIndex1.hfoldlWithIndex(Isomers$dWeb$dClient$dRender.ExpandRequest)(Data$dVariant.case_)(v.render._1);
              return x => Isomers$dRequest$dDuplex$dPrinter.run(v.spec.request._1($0(x))).path;
            })()
          },
          redirect: v$1 => () => {},
          request: requestBuilders(Type$dProxy.Proxy),
          __redirected: v$1 => () => {},
          __replace: v$1 => () => {}
        }
      );
    };
  };
};
const webRouter = dictFoldRender => dictHFoldlWithIndex => dictHFoldlWithIndex1 => dictHFoldlWithIndex2 => {
  const requestBuilders = dictHFoldlWithIndex2.hfoldlWithIndex(Isomers$dClient.$RequestBuildersStep(Isomers$dClient.identity))({});
  return dictHFoldlWithIndex3 => {
    const client = Isomers$dClient.client(dictHFoldlWithIndex3);
    return dictHFoldlWithIndex4 => {
      const client1 = client(dictHFoldlWithIndex4);
      return v => v1 => hostInfo => toClientRouter => {
        const $0 = v1.render._1;
        const $1 = v1.spec.request;
        const $2 = v1.spec.response;
        const render = dictFoldRender.foldRender(Type$dProxy.Proxy)(v1);
        return () => {
          const a$p = Routing$dPushState.makeInterface();
          let reqRef = Data$dMaybe.Nothing;
          const v2 = Halogen$dSubscription.create();
          let ref = {initialize: () => () => {}, navigate: v$1 => () => {}, redirect: v$1 => () => {}};
          const router = Web$dRouter.makeRouter(v2$1 => v3 => Web$dRouter.continue)(st => () => {
            const router = ref;
            if (st.tag === "Transitioning") { return; }
            if (st.tag === "Resolved") {
              const currReq = reqRef;
              const self$p = toClientRouter({
                client: client1(Isomers$dClient$dFetch.fetch(hostInfo))($1)($2),
                navigate: router.navigate,
                parse: {spec: parseSpecReq($1), web: parseWebReq(dictHFoldlWithIndex1)(dictHFoldlWithIndex)($1)($0)},
                print: {
                  spec: req => Isomers$dRequest$dDuplex$dPrinter.run($1._1(req)).path,
                  web: req => Isomers$dRequest$dDuplex$dPrinter.run($1._1(dictHFoldlWithIndex1.hfoldlWithIndex(Isomers$dWeb$dClient$dRender.ExpandRequest)(Data$dVariant.case_)($0)(req))).path
                },
                request: requestBuilders(Type$dProxy.Proxy),
                redirect: router.redirect,
                __replace: req1 => {
                  const $3 = Data$dMaybe.$Maybe(
                    "Just",
                    Isomers$dRequest$dDuplex$dPrinter.run($1._1(dictHFoldlWithIndex1.hfoldlWithIndex(Isomers$dWeb$dClient$dRender.ExpandRequest)(Data$dVariant.case_)($0)(req1))).path
                  );
                  return () => {
                    reqRef = $3;
                    return router.redirect(req1)();
                  };
                },
                __redirected: v4 => () => {}
              });
              const $3 = Data$dMaybe.$Maybe(
                "Just",
                Isomers$dRequest$dDuplex$dPrinter.run($1._1(dictHFoldlWithIndex1.hfoldlWithIndex(Isomers$dWeb$dClient$dRender.ExpandRequest)(Data$dVariant.case_)($0)(st._2))).path
              );
              if (
                currReq.tag === "Nothing" || !(
                  currReq.tag === "Just" && currReq._1 === Isomers$dRequest$dDuplex$dPrinter.run($1._1(dictHFoldlWithIndex1.hfoldlWithIndex(Isomers$dWeb$dClient$dRender.ExpandRequest)(Data$dVariant.case_)($0)(st._2))).path
                )
              ) {
                reqRef = $3;
                const fiber = Effect$dAff._makeFiber(
                  Effect$dAff.ffiUtil,
                  Effect$dAff._bind(render(Isomers$dClient$dFetch.fetch(hostInfo))(st._2)(self$p))(doc => Effect$dAff._liftEffect(v2.listener(doc)))
                )();
                fiber.run();
              }
              return;
            }
            $runtime.fail();
          })(Isomers$dContrib$dWeb$dRouter$dDriver$dPushState.makeDriverAff_(Data$dFoldable.foldableMaybe)(parseWebURL(dictHFoldlWithIndex)($1)($0))(req => Isomers$dRequest$dDuplex$dPrinter.run($1._1(dictHFoldlWithIndex1.hfoldlWithIndex(Isomers$dWeb$dClient$dRender.ExpandRequest)(Data$dVariant.case_)($0)(req))).path)(a$p))();
          ref = router;
          return Data$dEither.$Either("Right", {initialize: router.initialize, navigate: router.navigate, redirect: router.redirect, emitter: v2.emitter});
        };
      };
    };
  };
};
export {apiServerRequest, fakeWebRouter, fromFoldable, parseSpecReq, parseWebReq, parseWebURL, serverRequest, unsafePrint, webRequest, webRouter, webServerRequest};
