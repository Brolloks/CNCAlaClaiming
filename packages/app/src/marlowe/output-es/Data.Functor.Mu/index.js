const In = x => x;
const unroll = v => v;
const showMu = dictShow => dictFunctor => ({show: v => dictShow.show(dictFunctor.map(x => showMu(dictShow)(dictFunctor).show(x))(v))});
const semigroupMu = dictAlt => ({append: v => v1 => dictAlt.alt(v)(v1)});
const roll = In;
const transMu = dictFunctor => η => {
  const $0 = dictFunctor.map(transMu(dictFunctor)(η));
  return x => $0(η(x));
};
const newtypeMu = {Coercible0: () => {}};
const monoidMu = dictPlus => {
  const $0 = dictPlus.Alt0();
  const semigroupMu1 = {append: v => v1 => $0.alt(v)(v1)};
  return {mempty: dictPlus.empty, Semigroup0: () => semigroupMu1};
};
const eqMu = dictEq1 => ({eq: v => v1 => dictEq1.eq1(eqMu(dictEq1))(v)(v1)});
const ordMu = dictEq1 => {
  const eqMu1 = {eq: v => v1 => dictEq1.eq1(eqMu(dictEq1))(v)(v1)};
  return dictOrd1 => ({compare: v => v1 => dictOrd1.compare1(ordMu(dictEq1)(dictOrd1))(v)(v1), Eq0: () => eqMu1});
};
export {In, eqMu, monoidMu, newtypeMu, ordMu, roll, semigroupMu, showMu, transMu, unroll};
