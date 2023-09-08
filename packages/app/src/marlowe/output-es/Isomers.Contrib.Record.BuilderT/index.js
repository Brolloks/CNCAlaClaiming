import * as Data$dTuple from "../Data.Tuple/index.js";
const identity = x => x;
const BuilderT = x => x;
const newtypeBuilderT_ = {Coercible0: () => {}};
const ixFunctorBuilderT = dictFunctor => ({imap: f => v => dictFunctor.map(m => Data$dTuple.$Tuple(m._1, f(m._2)))(v)});
const ixApplyBuilderT = dictApply => {
  const Functor0 = dictApply.Functor0();
  const ixFunctorBuilderT1 = {imap: f => v => Functor0.map(m => Data$dTuple.$Tuple(m._1, f(m._2)))(v)};
  return {iapply: v => v1 => dictApply.apply(Functor0.map(x => x$1 => Data$dTuple.$Tuple(x$2 => x$1._1(x._1(x$2)), x._2(x$1._2)))(v))(v1), IxFunctor0: () => ixFunctorBuilderT1};
};
const ixBindBuilderT = dictApplicative => {
  const $0 = dictApplicative.Apply0();
  const Functor0 = $0.Functor0();
  const ixApplyBuilderT1 = (() => {
    const ixFunctorBuilderT1 = {imap: f => v => Functor0.map(m => Data$dTuple.$Tuple(m._1, f(m._2)))(v)};
    return {iapply: v => v1 => $0.apply(Functor0.map(x => x$1 => Data$dTuple.$Tuple(x$2 => x$1._1(x._1(x$2)), x._2(x$1._2)))(v))(v1), IxFunctor0: () => ixFunctorBuilderT1};
  })();
  return dictBind => (
    {
      ibind: v => f => dictBind.bind(v)(v1 => dictBind.bind(f(v1._2))(v2 => dictApplicative.pure(Data$dTuple.$Tuple(x => v2._1(v1._1(x)), v2._2)))),
      IxApply0: () => ixApplyBuilderT1
    }
  );
};
const ixApplicativeBuilderT = dictApplicative => {
  const $0 = dictApplicative.Apply0();
  const Functor0 = $0.Functor0();
  const ixApplyBuilderT1 = (() => {
    const ixFunctorBuilderT1 = {imap: f => v => Functor0.map(m => Data$dTuple.$Tuple(m._1, f(m._2)))(v)};
    return {iapply: v => v1 => $0.apply(Functor0.map(x => x$1 => Data$dTuple.$Tuple(x$2 => x$1._1(x._1(x$2)), x._2(x$1._2)))(v))(v1), IxFunctor0: () => ixFunctorBuilderT1};
  })();
  return {ipure: a => dictApplicative.pure(Data$dTuple.$Tuple(identity, a)), IxApply0: () => ixApplyBuilderT1};
};
const ixMonadBuilderT = dictMonad => {
  const Applicative0 = dictMonad.Applicative0();
  const ixApplicativeBuilderT1 = ixApplicativeBuilderT(Applicative0);
  const ixBindBuilderT1 = ixBindBuilderT(Applicative0)(dictMonad.Bind1());
  return {IxApplicative0: () => ixApplicativeBuilderT1, IxBind1: () => ixBindBuilderT1};
};
const functorBuilderT = dictFunctor => ({map: f => v => dictFunctor.map(m => Data$dTuple.$Tuple(m._1, f(m._2)))(v)});
const altBuilderT = dictAlt => {
  const $0 = dictAlt.Functor0();
  const functorBuilderT1 = {map: f => v => $0.map(m => Data$dTuple.$Tuple(m._1, f(m._2)))(v)};
  return {alt: v => v1 => dictAlt.alt(v)(v1), Functor0: () => functorBuilderT1};
};
const execBuilderT = dictApplicative => v => i => dictApplicative.Apply0().Functor0().map(x => x._1(i))(v);
export {
  BuilderT,
  altBuilderT,
  execBuilderT,
  functorBuilderT,
  identity,
  ixApplicativeBuilderT,
  ixApplyBuilderT,
  ixBindBuilderT,
  ixFunctorBuilderT,
  ixMonadBuilderT,
  newtypeBuilderT_
};
