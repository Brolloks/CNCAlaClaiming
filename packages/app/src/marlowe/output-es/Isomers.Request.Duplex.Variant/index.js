import * as Debug from "../Debug/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Isomers$dRequest$dDuplex$dParser from "../Isomers.Request.Duplex.Parser/index.js";
import * as Isomers$dRequest$dDuplex$dPrinter from "../Isomers.Request.Duplex.Printer/index.js";
import * as Isomers$dRequest$dDuplex$dType from "../Isomers.Request.Duplex.Type/index.js";
import * as JS$dUnsafe$dStringify from "../JS.Unsafe.Stringify/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const traceM = /* #__PURE__ */ Debug.traceM()(Effect$dAff.monadAff);
const injInto = dictIsSymbol => () => () => () => l => v => v1 => Isomers$dRequest$dDuplex$dType.$Duplex(
  r => {
    if (r.type === dictIsSymbol.reflectSymbol(l)) { return v._1(r.value); }
    return v1._1(r);
  },
  Isomers$dRequest$dDuplex$dParser.altParser.alt(Isomers$dRequest$dDuplex$dParser.functorParser.map(Unsafe$dCoerce.unsafeCoerce)(v1._2))(Isomers$dRequest$dDuplex$dParser.functorParser.map(value => (
    {type: dictIsSymbol.reflectSymbol(l), value}
  ))(v._2))
);
const empty = /* #__PURE__ */ Isomers$dRequest$dDuplex$dType.$Duplex(
  v => Isomers$dRequest$dDuplex$dPrinter.monoidRoutePRinter.mempty,
  /* #__PURE__ */ Isomers$dRequest$dDuplex$dParser.$Parser(
    "Chomp",
    state => Effect$dAff._bind(traceM("variant"))(() => Effect$dAff._pure(Isomers$dRequest$dDuplex$dParser.$Result(
      "Fail",
      Isomers$dRequest$dDuplex$dParser.$ParsingError("Expected", "Variant", JS$dUnsafe$dStringify.unsafeStringify(state))
    )))
  )
);
export {empty, injInto, traceM};
