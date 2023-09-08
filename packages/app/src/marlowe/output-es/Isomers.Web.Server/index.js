import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Isomers$dHTTP$dExchange from "../Isomers.HTTP.Exchange/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const $RenderHandlerStep = (_1, _2) => ({tag: "RenderHandlerStep", _1, _2});
const RenderHandlerStep = value0 => value1 => $RenderHandlerStep(value0, value1);
const renderToApi = dictHFoldlWithIndex => v => handlers => renderToHtml => router => dictHFoldlWithIndex.hfoldlWithIndex($RenderHandlerStep(renderToHtml, router))(handlers)(v.render._1);
const foldingRenderHandlerStepLeaf = () => () => () => () => () => dictTypeEquals => {
  const to1 = dictTypeEquals.proof(a => a);
  return dictIsSymbol => dictIsSymbol1 => dictMonad => {
    const $0 = dictMonad.Applicative0();
    const $1 = dictMonad.Bind1();
    return {
      foldingWithIndex: v => ix => handlers => v1 => {
        const $2 = v._2;
        const mimeHandlers = Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(ix))(handlers);
        const sourceHandler = Record$dUnsafe.unsafeGet(dictIsSymbol1.reflectSymbol(Type$dProxy.Proxy))(mimeHandlers);
        const $3 = to1(v1);
        return Record$dUnsafe.unsafeSet(dictIsSymbol.reflectSymbol(ix))({
          ...mimeHandlers,
          "text/html": req => {
            const $4 = Data$dTuple.Tuple($2);
            return $1.bind(sourceHandler(req))((() => {
              const $5 = Isomers$dHTTP$dExchange.Exchange(req);
              return x => {
                const $6 = $3($4($5(Data$dMaybe.$Maybe("Just", Data$dEither.$Either("Right", x)))));
                return $0.Apply0().Functor0().map(v1$1 => ({body: v1$1, headers: $6.headers, status: $6.status}))(v._1($6.body));
              };
            })());
          }
        })(handlers);
      }
    };
  };
};
const foldingRenderHandlerStep = () => dictIsSymbol => dictHFoldlWithIndex => () => (
  {
    foldingWithIndex: step => ix => handlers => rec => Record$dUnsafe.unsafeSet(dictIsSymbol.reflectSymbol(ix))(dictHFoldlWithIndex.hfoldlWithIndex(step)(Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(ix))(handlers))(rec))(handlers)
  }
);
export {$RenderHandlerStep, RenderHandlerStep, foldingRenderHandlerStep, foldingRenderHandlerStepLeaf, renderToApi};
