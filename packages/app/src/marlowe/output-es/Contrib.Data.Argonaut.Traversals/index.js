import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
const traverseJson = dictMonad => {
  const Bind1 = dictMonad.Bind1();
  const $0 = Bind1.Apply0().Functor0();
  const Applicative0 = dictMonad.Applicative0();
  const $1 = Foreign$dObject.traversableWithIndexObject.traverseWithIndex(Applicative0);
  const traverse3 = Data$dTraversable.traversableArray.traverse(Applicative0);
  return f => a => Bind1.bind((() => {
    const $2 = Applicative0.pure(a);
    return Data$dArgonaut$dCore._caseJson(v => $2, v => $2, v => $2, v => $2, arr => $0.map(Data$dArgonaut$dCore.fromArray)(traverse3(f)(arr)), v => $2, a);
  })())(json => {
    const $2 = Applicative0.pure(json);
    return Data$dArgonaut$dCore._caseJson(v => $2, v => $2, v => $2, v => $2, v => $2, obj => $0.map(Data$dArgonaut$dCore.fromObject)($1(v => f)(obj)), json);
  });
};
const rewriteTopDown = dictMonad => {
  const traverseJson1 = traverseJson(dictMonad);
  return f => {
    const visitor = json => dictMonad.Bind1().bind(f(json))(json$p => traverseJson1(visitor)(json$p));
    return visitor;
  };
};
const rewriteBottomUp = dictMonad => {
  const traverseJson1 = traverseJson(dictMonad);
  return f => {
    const visitor = json => dictMonad.Bind1().bind(traverseJson1(visitor)(json))(json$p => f(json$p));
    return visitor;
  };
};
export {rewriteBottomUp, rewriteTopDown, traverseJson};
