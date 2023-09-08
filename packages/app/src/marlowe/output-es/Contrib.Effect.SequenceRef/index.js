const SequenceRef = x => x;
const next = dictSemiring => {
  const one = dictSemiring.one;
  return v => () => {
    const $0 = v.value;
    return v.value = dictSemiring.add($0)(one);
  };
};
const $$new = seed => () => ({value: seed});
export {SequenceRef, $$new as new, next};
