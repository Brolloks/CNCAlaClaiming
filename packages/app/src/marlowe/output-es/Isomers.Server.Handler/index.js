const $InterpretHandler = _1 => ({tag: "InterpretHandler", _1});
const InterpretHandler = value0 => $InterpretHandler(value0);
const unifyMonad = () => r => r;
const mappingInterpretHandlerRec = dictHMap => ({mapping: i => rec => dictHMap.hmap(i)(rec)});
const mappingInterpretHandler = dictTypeEquals => {
  const to = dictTypeEquals.proof(a => a);
  return {mapping: v => f => x => v._1(to(f(x)))};
};
const evalUnifyMonadRec = () => () => ({});
const evalMonad = dictTypeEquals => () => ({});
export {$InterpretHandler, InterpretHandler, evalMonad, evalUnifyMonadRec, mappingInterpretHandler, mappingInterpretHandlerRec, unifyMonad};
