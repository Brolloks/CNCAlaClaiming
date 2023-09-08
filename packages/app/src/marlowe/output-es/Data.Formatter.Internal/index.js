const repeat = dictMonoid => {
  const repeat$p = repeat$p$a0$copy => repeat$p$a1$copy => repeat$p$a2$copy => {
    let repeat$p$a0 = repeat$p$a0$copy, repeat$p$a1 = repeat$p$a1$copy, repeat$p$a2 = repeat$p$a2$copy, repeat$p$c = true, repeat$p$r;
    while (repeat$p$c) {
      const v = repeat$p$a0, v1 = repeat$p$a1, v2 = repeat$p$a2;
      if (v2 < 1) {
        repeat$p$c = false;
        repeat$p$r = v;
        continue;
      }
      repeat$p$a0 = dictMonoid.Semigroup0().append(v)(v1);
      repeat$p$a1 = v1;
      repeat$p$a2 = v2 - 1 | 0;
    }
    return repeat$p$r;
  };
  return repeat$p(dictMonoid.mempty);
};
const foldDigits = dictFoldable => dictFoldable.foldl(acc => d => (acc * 10 | 0) + d | 0)(0);
export {foldDigits, repeat};
