import * as $runtime from "../runtime.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dLazy from "../Data.Lazy/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dString$dCaseInsensitive from "../Data.String.CaseInsensitive/index.js";
import * as Debug from "../Debug/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Isomers$dContrib$dType$dEval$dFoldings from "../Isomers.Contrib.Type.Eval.Foldings/index.js";
import * as Isomers$dHTTP$dRequest$dHeaders$dAccept from "../Isomers.HTTP.Request.Headers.Accept/index.js";
import * as Isomers$dHTTP$dRequest$dHeaders$dAccept$dMediaPattern from "../Isomers.HTTP.Request.Headers.Accept.MediaPattern/index.js";
import * as Isomers$dRequest$dAccum$dType from "../Isomers.Request.Accum.Type/index.js";
import * as Isomers$dRequest$dDuplex$dParser from "../Isomers.Request.Duplex.Parser/index.js";
import * as Isomers$dRequest$dDuplex$dPrinter from "../Isomers.Request.Duplex.Printer/index.js";
import * as Isomers$dRequest$dDuplex$dType from "../Isomers.Request.Duplex.Type/index.js";
import * as JS$dUnsafe$dStringify from "../JS.Unsafe.Stringify/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const $RequestMediaPatternParser = _1 => ({tag: "RequestMediaPatternParser", _1});
const $ResponseContentTypeRecord = () => ({tag: "ResponseContentTypeRecord"});
const traceM = /* #__PURE__ */ Debug.traceM()(Effect$dAff.monadAff);
const ResponseContentTypeRecord = /* #__PURE__ */ $ResponseContentTypeRecord();
const RequestMediaPatternParser = value0 => $RequestMediaPatternParser(value0);
const responsePrinters = dictHFoldl => lst => dictHFoldl.hfoldl(ResponseContentTypeRecord)({})(lst);
const requestAccum = () => () => dictHFoldl => v => cts => {
  const buildParser = dictHFoldl.hfoldl($RequestMediaPatternParser(v._1._2))(mp => Isomers$dRequest$dDuplex$dParser.$Parser(
    "Chomp",
    v1 => Effect$dAff._pure(Isomers$dRequest$dDuplex$dParser.$Result(
      "Fail",
      Isomers$dRequest$dDuplex$dParser.$ParsingError("Expected", JS$dUnsafe$dStringify.unsafeStringify(cts), JS$dUnsafe$dStringify.unsafeStringify(mp))
    ))
  ))(cts);
  return Isomers$dRequest$dAccum$dType.$Accum(
    Isomers$dRequest$dDuplex$dType.$Duplex(
      i => {
        const $0 = v._1._1(i.value);
        return x => $0(Isomers$dRequest$dDuplex$dPrinter.header("Accept")(i.type)(x));
      },
      Isomers$dRequest$dDuplex$dParser.$Parser(
        "Chomp",
        v1 => {
          const $0 = Data$dFunctor.arrayMap(x => buildParser(x.pattern));
          const $1 = Data$dMap$dInternal.lookup(Data$dString$dCaseInsensitive.ordCaseInsensitiveString)("Accept")(Data$dLazy.force(v1.headers));
          const v2 = $1.tag === "Just" ? Data$dArray.uncons($0(Isomers$dHTTP$dRequest$dHeaders$dAccept.parse($1._1))) : Data$dMaybe.Nothing;
          const ps = (() => {
            if (v2.tag === "Just") { return v2._1; }
            if (v2.tag === "Nothing") { return {head: buildParser(Isomers$dHTTP$dRequest$dHeaders$dAccept$dMediaPattern.AnyMedia), tail: []}; }
            $runtime.fail();
          })();
          return Effect$dAff._catchError(Isomers$dRequest$dDuplex$dParser.runParser(v1)(Data$dFoldable.foldlArray(Isomers$dRequest$dDuplex$dParser.altParser.alt)(ps.head)(ps.tail)))(err => Effect$dAff._throwError(err));
        }
      )
    ),
    i => v._2(i.value)
  );
};
const parserBuilder = v => prs => pattern => {
  if (Isomers$dHTTP$dRequest$dHeaders$dAccept$dMediaPattern.matchedBy(v)(pattern)) { return prs; }
  return Isomers$dRequest$dDuplex$dParser.$Parser(
    "Chomp",
    v1 => Effect$dAff._bind(traceM("parseBuilder"))(() => Effect$dAff._pure(Isomers$dRequest$dDuplex$dParser.$Result(
      "Fail",
      Isomers$dRequest$dDuplex$dParser.$ParsingError(
        "Expected",
        v,
        (() => {
          if (pattern.tag === "AnyMedia") { return "*/*"; }
          if (pattern.tag === "AnySubtype") { return pattern._1 + "/*"; }
          if (pattern.tag === "ProperMediaType") { return pattern._1; }
          $runtime.fail();
        })()
      )
    )))
  );
};
const foldingResponseContentTypeRecord = dictIsSymbol => () => () => ({folding: v => acc => r => Record$dUnsafe.unsafeSet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(r)(acc)});
const foldingRequestMediaPatternParser = dictIsSymbol => () => () => () => (
  {
    folding: v => vprs => ct => {
      const prs$p = Isomers$dRequest$dDuplex$dParser.functorParser.map(Control$dSemigroupoid.semigroupoidFn.compose(value => ({type: dictIsSymbol.reflectSymbol(ct), value})))(v._1);
      const mt = dictIsSymbol.reflectSymbol(ct);
      return mp => Isomers$dRequest$dDuplex$dParser.altParser.alt(Isomers$dRequest$dDuplex$dParser.functorParser.map(Control$dSemigroupoid.semigroupoidFn.compose(Unsafe$dCoerce.unsafeCoerce))(vprs(mp)))(parserBuilder(mt)(prs$p)(mp));
    }
  }
);
const evalResponseContentTypeStep = dictTypeEquals => dictIsSymbol => ({});
const accumSpec = dictHFoldl => () => () => () => dictHFoldl1 => v => (
  {request: requestAccum()()(dictHFoldl1)(v._1)(Isomers$dContrib$dType$dEval$dFoldings.HListProxy), response: dictHFoldl.hfoldl(ResponseContentTypeRecord)({})(v._2)}
);
export {
  $RequestMediaPatternParser,
  $ResponseContentTypeRecord,
  RequestMediaPatternParser,
  ResponseContentTypeRecord,
  accumSpec,
  evalResponseContentTypeStep,
  foldingRequestMediaPatternParser,
  foldingResponseContentTypeRecord,
  parserBuilder,
  requestAccum,
  responsePrinters,
  traceM
};
