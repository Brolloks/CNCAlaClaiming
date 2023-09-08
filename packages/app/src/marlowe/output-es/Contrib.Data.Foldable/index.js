const foldMapWithIndexFlipped = dictFoldableWithIndex => dictMonoid => {
  const $0 = dictFoldableWithIndex.foldMapWithIndex(dictMonoid);
  return b => a => $0(a)(b);
};
const foldMapFlipped = dictFoldable => dictMonoid => {
  const $0 = dictFoldable.foldMap(dictMonoid);
  return b => a => $0(a)(b);
};
const foldMFlipped = dictFoldable => dictMonad => z => t => f => dictFoldable.foldl(b => a => dictMonad.Bind1().bind(b)(a$1 => f(a$1)(a)))(dictMonad.Applicative0().pure(z))(t);
export {foldMFlipped, foldMapFlipped, foldMapWithIndexFlipped};
