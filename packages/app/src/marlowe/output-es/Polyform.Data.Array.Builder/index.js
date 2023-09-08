import {unsafeCons, unsafeSnoc} from "./foreign.js";
const Builder = x => x;
const snoc = a => unsafeSnoc(a);
const semigroupBuilder = {append: v => v1 => x => v(v1(x))};
const monoidBuilder = {mempty: x => x, Semigroup0: () => semigroupBuilder};
const cons = a => unsafeCons(a);
const build = v => v([]);
export {Builder, build, cons, monoidBuilder, semigroupBuilder, snoc};
export * from "./foreign.js";
