import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Record from "../Record/index.js";
const identity = x => x;
const IxBuilderT = x => x;
const newtypeIxBuilderT_ = {Coercible0: () => {}};
const ixFunctorIxBuilderT = dictFunctor => ({imap: f => v => dictFunctor.map(m => Data$dTuple.$Tuple(m._1, f(m._2)))(v)});
const ixApplyIxBuilderT = dictApply => {
  const Functor0 = dictApply.Functor0();
  const ixFunctorIxBuilderT1 = {imap: f => v => Functor0.map(m => Data$dTuple.$Tuple(m._1, f(m._2)))(v)};
  return {iapply: v => v1 => dictApply.apply(Functor0.map(x => x$1 => Data$dTuple.$Tuple(x$2 => x$1._1(x._1(x$2)), x._2(x$1._2)))(v))(v1), IxFunctor0: () => ixFunctorIxBuilderT1};
};
const ixBindIxBuilderT = dictApplicative => {
  const $0 = dictApplicative.Apply0();
  const Functor0 = $0.Functor0();
  const ixApplyIxBuilderT1 = (() => {
    const ixFunctorIxBuilderT1 = {imap: f => v => Functor0.map(m => Data$dTuple.$Tuple(m._1, f(m._2)))(v)};
    return {iapply: v => v1 => $0.apply(Functor0.map(x => x$1 => Data$dTuple.$Tuple(x$2 => x$1._1(x._1(x$2)), x._2(x$1._2)))(v))(v1), IxFunctor0: () => ixFunctorIxBuilderT1};
  })();
  return dictBind => (
    {
      ibind: v => f => dictBind.bind(v)(v1 => dictBind.bind(f(v1._2))(v2 => dictApplicative.pure(Data$dTuple.$Tuple(x => v2._1(v1._1(x)), v2._2)))),
      IxApply0: () => ixApplyIxBuilderT1
    }
  );
};
const ixApplicativeIxBuilderT = dictApplicative => {
  const $0 = dictApplicative.Apply0();
  const Functor0 = $0.Functor0();
  const ixApplyIxBuilderT1 = (() => {
    const ixFunctorIxBuilderT1 = {imap: f => v => Functor0.map(m => Data$dTuple.$Tuple(m._1, f(m._2)))(v)};
    return {iapply: v => v1 => $0.apply(Functor0.map(x => x$1 => Data$dTuple.$Tuple(x$2 => x$1._1(x._1(x$2)), x._2(x$1._2)))(v))(v1), IxFunctor0: () => ixFunctorIxBuilderT1};
  })();
  return {ipure: a => dictApplicative.pure(Data$dTuple.$Tuple(identity, a)), IxApply0: () => ixApplyIxBuilderT1};
};
const ixMonadIxBuilderT = dictMonad => {
  const Applicative0 = dictMonad.Applicative0();
  const ixApplicativeIxBuilderT1 = ixApplicativeIxBuilderT(Applicative0);
  const ixBindIxBuilderT1 = ixBindIxBuilderT(Applicative0)(dictMonad.Bind1());
  return {IxApplicative0: () => ixApplicativeIxBuilderT1, IxBind1: () => ixBindIxBuilderT1};
};
const functorIxBuilderT = dictFunctor => ({map: f => v => dictFunctor.map(m => Data$dTuple.$Tuple(m._1, f(m._2)))(v)});
const altIxBuilderT = dictAlt => {
  const $0 = dictAlt.Functor0();
  const functorIxBuilderT1 = {map: f => v => $0.map(m => Data$dTuple.$Tuple(m._1, f(m._2)))(v)};
  return {alt: v => v1 => dictAlt.alt(v)(v1), Functor0: () => functorIxBuilderT1};
};
const insert = dictMonad => dictIsSymbol => () => () => l => mv => dictMonad.Bind1().bind(mv)(v => dictMonad.Applicative0().pure(Data$dTuple.$Tuple(
  Record.insert(dictIsSymbol)()()(l)(v),
  undefined
)));
const execIxBuilderT = dictApplicative => v => i => dictApplicative.Apply0().Functor0().map(x => x._1(i))(v);
export {
  IxBuilderT,
  altIxBuilderT,
  execIxBuilderT,
  functorIxBuilderT,
  identity,
  insert,
  ixApplicativeIxBuilderT,
  ixApplyIxBuilderT,
  ixBindIxBuilderT,
  ixFunctorIxBuilderT,
  ixMonadIxBuilderT,
  newtypeIxBuilderT_
};
