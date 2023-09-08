// | Use these functions to convert between `Maybe`, `Either`, `MaybeT`, and
// | `ExceptT`.
import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
const noteT = dictMonad => a => x => dictMonad.Bind1().bind(x)(a$p => dictMonad.Applicative0().pure((() => {
  if (a$p.tag === "Nothing") { return Data$dEither.$Either("Left", a); }
  if (a$p.tag === "Just") { return Data$dEither.$Either("Right", a$p._1); }
  $runtime.fail();
})()));
const hushT = dictMonad => x => dictMonad.Bind1().bind(x)(a$p => dictMonad.Applicative0().pure((() => {
  if (a$p.tag === "Left") { return Data$dMaybe.Nothing; }
  if (a$p.tag === "Right") { return Data$dMaybe.$Maybe("Just", a$p._1); }
  $runtime.fail();
})()));
const hoistMaybe = dictMonad => x => dictMonad.Applicative0().pure(x);
const fromMaybe$p = b => a => {
  if (b.tag === "Nothing") { return a; }
  if (b.tag === "Just") { return b._1; }
  $runtime.fail();
};
const exceptNoteM = dictApplicative => a => e => dictApplicative.pure((() => {
  if (a.tag === "Nothing") { return Data$dEither.$Either("Left", e); }
  if (a.tag === "Just") { return Data$dEither.$Either("Right", a._1); }
  $runtime.fail();
})());
const exceptNoteA = dictApply => a => e => dictApply.Functor0().map(v2 => {
  if (v2.tag === "Nothing") { return Data$dEither.$Either("Left", e); }
  if (v2.tag === "Just") { return Data$dEither.$Either("Right", v2._1); }
  $runtime.fail();
})(a);
const bool = a => b => c => {
  if (c) { return b; }
  return a;
};
export {bool, exceptNoteA, exceptNoteM, fromMaybe$p, hoistMaybe, hushT, noteT};
