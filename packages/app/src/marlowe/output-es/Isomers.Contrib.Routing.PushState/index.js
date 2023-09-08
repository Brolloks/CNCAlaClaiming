import * as $runtime from "../runtime.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
const foldLocationsAff = cb => init => psi => () => {
  let ref = init;
  const handle = loc => {
    const $0 = Effect$dAff._makeFiber(
      Effect$dAff.ffiUtil,
      Effect$dAff._bind(Effect$dAff._liftEffect(() => ref))(prev => Effect$dAff._bind(cb(prev)(loc))($$new => Effect$dAff._liftEffect(() => ref = $$new)))
    );
    return () => {
      const fiber = $0();
      fiber.run();
    };
  };
  const $0 = psi.locationState();
  handle($0)();
  return psi.listen($1 => handle($1))();
};
const foldPathsAff = cb => init => foldLocationsAff(a => {
  const $0 = cb(a);
  return x => $0(x.path);
})(init);
const matchesWithAff = dictFoldable => parser => cb => foldPathsAff(a => {
  const $0 = Data$dFoldable.indexl(dictFoldable)(0);
  return a$1 => Effect$dAff._bind(Effect$dAff._bind(parser(a$1))(x => Effect$dAff._pure($0(x))))(v => {
    if (v.tag === "Just") {
      const $1 = v._1;
      return Effect$dAff._bind(Effect$dAff._liftEffect(cb(a)($1)))(() => Effect$dAff._pure(Data$dMaybe.$Maybe("Just", $1)));
    }
    if (v.tag === "Nothing") { return Effect$dAff._pure(a); }
    $runtime.fail();
  });
})(Data$dMaybe.Nothing);
export {foldLocationsAff, foldPathsAff, matchesWithAff};
