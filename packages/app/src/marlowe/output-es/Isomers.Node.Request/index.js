import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dLazy from "../Data.Lazy/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dString$dCaseInsensitive from "../Data.String.CaseInsensitive/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Data$dUnfoldable from "../Data.Unfoldable/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
import * as Isomers$dNode$dRequest$dBody from "../Isomers.Node.Request.Body/index.js";
import * as JS$dUnsafe$dStringify from "../JS.Unsafe.Stringify/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const fromFoldable = /* #__PURE__ */ Data$dMap$dInternal.fromFoldable(Data$dString$dCaseInsensitive.ordCaseInsensitiveString)(Data$dFoldable.foldableArray);
const toUnfoldable = /* #__PURE__ */ (() => {
  const $0 = Foreign$dObject.toArrayWithKey(Data$dTuple.Tuple);
  return x => Data$dArray.toUnfoldable(Data$dUnfoldable.unfoldableArray)($0(x));
})();
const NodeBody = x => x;
const toServerBody = Unsafe$dCoerce.unsafeCoerce;
const readBodyString = v => Effect$dAff._catchError(Effect$dAff._map(Data$dEither.Right)(Isomers$dNode$dRequest$dBody.str(v.maxBodySize)(v.stream)))(err => Effect$dAff._pure(Data$dEither.$Either(
  "Left",
  JS$dUnsafe$dStringify.unsafeStringify(err)
)));
const fromServerBody = v => req => req;
const fromNodeRequest = maxBodySize => request => (
  {
    body: Data$dMaybe.$Maybe("Just", {stream: request, maxBodySize}),
    headers: Data$dLazy.defer(v => fromFoldable(Data$dFunctor.arrayMap(v$1 => Data$dTuple.$Tuple(v$1._1, v$1._2))(toUnfoldable(request.headers)))),
    httpVersion: request.httpVersion,
    method: request.method,
    path: request.url
  }
);
export {NodeBody, fromFoldable, fromNodeRequest, fromServerBody, readBodyString, toServerBody, toUnfoldable};
