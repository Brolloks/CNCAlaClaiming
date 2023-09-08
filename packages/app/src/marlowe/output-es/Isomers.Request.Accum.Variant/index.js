import * as $runtime from "../runtime.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Debug from "../Debug/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Isomers$dContrib$dData$dVariant from "../Isomers.Contrib.Data.Variant/index.js";
import * as Isomers$dRequest$dAccum$dType from "../Isomers.Request.Accum.Type/index.js";
import * as Isomers$dRequest$dDuplex$dParser from "../Isomers.Request.Duplex.Parser/index.js";
import * as Isomers$dRequest$dDuplex$dPrinter from "../Isomers.Request.Duplex.Printer/index.js";
import * as Isomers$dRequest$dDuplex$dType from "../Isomers.Request.Duplex.Type/index.js";
import * as Partial from "../Partial/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const traceM = /* #__PURE__ */ Debug.traceM()(Effect$dAff.monadAff);
const merge = () => () => () => dictContractable => {
  const split = Isomers$dContrib$dData$dVariant.split(dictContractable)();
  return dictContractable1 => v => v1 => Isomers$dRequest$dAccum$dType.$Accum(
    Isomers$dRequest$dDuplex$dType.$Duplex(
      v2 => {
        const v3 = split(v2);
        if (v3.tag === "Right") { return v._1._1(v3._1); }
        if (v3.tag === "Left") { return v1._1._1(v3._1); }
        $runtime.fail();
      },
      Isomers$dRequest$dDuplex$dParser.altParser.alt(Isomers$dRequest$dDuplex$dParser.functorParser.map(Control$dSemigroupoid.semigroupoidFn.compose(Unsafe$dCoerce.unsafeCoerce))(v._1._2))(Isomers$dRequest$dDuplex$dParser.functorParser.map(Control$dSemigroupoid.semigroupoidFn.compose(Unsafe$dCoerce.unsafeCoerce))(v1._1._2))
    ),
    v2 => {
      const v3 = split(v2);
      if (v3.tag === "Right") { return v._2(v3._1); }
      if (v3.tag === "Left") { return v1._2(v3._1); }
      $runtime.fail();
    }
  );
};
const injInto = dictIsSymbol => () => () => () => l => v => v1 => Isomers$dRequest$dAccum$dType.$Accum(
  Isomers$dRequest$dDuplex$dType.$Duplex(
    r => {
      if (r.type === dictIsSymbol.reflectSymbol(l)) { return v._1._1(r.value); }
      return v1._1._1(r);
    },
    Isomers$dRequest$dDuplex$dParser.altParser.alt(Isomers$dRequest$dDuplex$dParser.functorParser.map(Control$dSemigroupoid.semigroupoidFn.compose(Unsafe$dCoerce.unsafeCoerce))(v1._1._2))(Isomers$dRequest$dDuplex$dParser.functorParser.map(Control$dSemigroupoid.semigroupoidFn.compose(value => (
      {type: dictIsSymbol.reflectSymbol(l), value}
    )))(v._1._2))
  ),
  r => {
    if (r.type === dictIsSymbol.reflectSymbol(l)) { return v._2(r.value); }
    return v1._2(r);
  }
);
const empty = /* #__PURE__ */ Isomers$dRequest$dAccum$dType.$Accum(
  /* #__PURE__ */ Isomers$dRequest$dDuplex$dType.$Duplex(
    v => Isomers$dRequest$dDuplex$dPrinter.monoidRoutePRinter.mempty,
    /* #__PURE__ */ Isomers$dRequest$dDuplex$dParser.$Parser(
      "Chomp",
      state => Effect$dAff._bind(traceM("empty"))(() => Effect$dAff._pure(Isomers$dRequest$dDuplex$dParser.$Result(
        "Fail",
        Isomers$dRequest$dDuplex$dParser.$ParsingError("Expected", "Empty Variant match", "WTF")
      )))
    )
  ),
  v => Partial._crashWith("Accum.Variant.emtpy")
);
export {empty, injInto, merge, traceM};
