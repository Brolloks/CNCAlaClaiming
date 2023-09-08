import * as $runtime from "../runtime.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
const append = f => g => x => {
  const $0 = f(x);
  const $1 = g(x);
  return x$1 => {
    const $2 = $0(x$1);
    const $3 = $1(x$1);
    if ($2 === "LT") { return Data$dOrdering.LT; }
    if ($2 === "GT") { return Data$dOrdering.GT; }
    if ($2 === "EQ") { return $3; }
    $runtime.fail();
  };
};
const Comparison = x => x;
const semigroupComparison = {append: v => v1 => append(v)(v1)};
const newtypeComparison = {Coercible0: () => {}};
const monoidComparison = {mempty: v => v1 => Data$dOrdering.EQ, Semigroup0: () => semigroupComparison};
const defaultComparison = dictOrd => dictOrd.compare;
const contravariantComparison = {cmap: f => v => x => y => v(f(x))(f(y))};
export {Comparison, append, contravariantComparison, defaultComparison, monoidComparison, newtypeComparison, semigroupComparison};
