import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Isomers$dRequest$dDuplex$dPrinter from "../Isomers.Request.Duplex.Printer/index.js";
import * as Isomers$dResponse$dDuplex$dParser from "../Isomers.Response.Duplex.Parser/index.js";
import * as JS$dUnsafe$dStringify from "../JS.Unsafe.Stringify/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const $ClientStep = (_1, _2, _3) => ({tag: "ClientStep", _1, _2, _3});
const $RequestBuildersStep = _1 => ({tag: "RequestBuildersStep", _1});
const showEither = dictShow1 => (
  {
    show: v => {
      if (v.tag === "Left") { return "(Left " + Data$dShow.showStringImpl(v._1) + ")"; }
      if (v.tag === "Right") { return "(Right " + dictShow1.show(v._1) + ")"; }
      $runtime.fail();
    }
  }
);
const ClientResponseIsSymbol = {reflectSymbol: () => "ClientResponse"};
const identity = x => x;
const RequestPrintersStep = x => x;
const RequestBuildersStep = value0 => $RequestBuildersStep(value0);
const ClientStep = value0 => value1 => value2 => $ClientStep(value0, value1, value2);
const ClientResponse = x => x;
const newtypeClientResponse_ = {Coercible0: () => {}};
const mappingRequestPrintersSte = {mapping: v => requestBuilder => x => v(requestBuilder(x))};
const genericClientResponse_ = {to: x => x, from: x => x};
const showClientResponse = dictShow => (
  {
    show: (() => {
      const $0 = Data$dShow$dGeneric.genericShowConstructor((() => {
        const $0 = showEither(dictShow);
        return {genericShowArgs: v => [$0.show(v)]};
      })())(ClientResponseIsSymbol);
      return x => $0["genericShow'"](x);
    })()
  }
);
const requestFoldingVariant = dictIsSymbol => () => () => () => () => dictHFoldlWithIndex => (
  {
    foldingWithIndex: v => prop => rb => v1 => Record$dUnsafe.unsafeSet(dictIsSymbol.reflectSymbol(prop))(dictHFoldlWithIndex.hfoldlWithIndex($RequestBuildersStep(x => v._1({
      type: dictIsSymbol.reflectSymbol(prop),
      value: x
    })))({})(Type$dProxy.Proxy))(rb)
  }
);
const requestFoldingData = dictIsSymbol => () => () => () => (
  {foldingWithIndex: v => prop => rb => v1 => Record$dUnsafe.unsafeSet(dictIsSymbol.reflectSymbol(prop))(x => v._1({type: dictIsSymbol.reflectSymbol(prop), value: x}))(rb)}
);
const requestBuilders = dictHFoldlWithIndex => dictHFoldlWithIndex.hfoldlWithIndex($RequestBuildersStep(identity))({});
const mkRequestUnsafePrinters = dictHFoldlWithIndex => {
  const requestBuilders1 = dictHFoldlWithIndex.hfoldlWithIndex($RequestBuildersStep(identity))({});
  return dictHMap => v => dictHMap.hmap(i => Isomers$dRequest$dDuplex$dPrinter.run(Isomers$dRequest$dDuplex$dPrinter.prefix("")(v._1(i))).path)(requestBuilders1(Type$dProxy.Proxy));
};
const mkRequestPrinters = dictHFoldlWithIndex => {
  const requestBuilders1 = dictHFoldlWithIndex.hfoldlWithIndex($RequestBuildersStep(identity))({});
  return dictHMap => v => dictHMap.hmap(i => Isomers$dRequest$dDuplex$dPrinter.run(Isomers$dRequest$dDuplex$dPrinter.prefix("")(v._1(i))))(requestBuilders1(Type$dProxy.Proxy));
};
const hfoldlWithIndexRequestBuildersStepVariantWrapper = dictHFoldlWithIndex => () => () => (
  {hfoldlWithIndex: v => v1 => v2 => dictHFoldlWithIndex.hfoldlWithIndex($RequestBuildersStep(x => v._1(x)))({})(Type$dProxy.Proxy)}
);
const hfoldlWithIndexRequestBuildersStepVariant = dictHFoldlWithIndex => () => ({hfoldlWithIndex: cf => v => v1 => dictHFoldlWithIndex.hfoldlWithIndex(cf)({})(Type$dProxy.Proxy)});
const clientFoldingResponseDuplexRec = dictIsSymbol => () => () => () => dictHFoldlWithIndex => (
  {
    foldingWithIndex: v => prop => c => reqBld => Record$dUnsafe.unsafeSet(dictIsSymbol.reflectSymbol(prop))(dictHFoldlWithIndex.hfoldlWithIndex($ClientStep(
      v._1,
      v._2,
      Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(prop))(v._3)
    ))({})(reqBld))(c)
  }
);
const clientFoldingResponseDuplexNewtypeWrapper = () => dictFoldingWithIndex => (
  {foldingWithIndex: v => prop => c => reqBld => dictFoldingWithIndex.foldingWithIndex($ClientStep(v._1, v._2, v._3))(prop)(c)(reqBld)}
);
const clientFoldingResponseConstructor = dictIsSymbol => () => () => () => (
  {
    foldingWithIndex: v => prop => c => reqBld => {
      const resDpl = Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(prop))(v._3);
      return Record$dUnsafe.unsafeSet(dictIsSymbol.reflectSymbol(prop))(d => Effect$dAff._map(ClientResponse)(Effect$dAff._bind(Effect$dAff._bind(v._1(Isomers$dRequest$dDuplex$dPrinter.run(v._2(reqBld(d)))))(v1 => {
        if (v1.tag === "Right") {
          return Effect$dAff._map(v2 => {
            if (v2.tag === "Left") { return Data$dEither.$Either("Left", JS$dUnsafe$dStringify.unsafeStringify(v2._1)); }
            if (v2.tag === "Right") { return Data$dEither.$Either("Right", v2._1); }
            $runtime.fail();
          })(Isomers$dResponse$dDuplex$dParser.run(resDpl._2)(v1._1));
        }
        if (v1.tag === "Left") { return Effect$dAff._pure(Data$dEither.$Either("Left", v1._1)); }
        $runtime.fail();
      }))(res => Effect$dAff._pure(res))))(c);
    }
  }
);
const client = dictHFoldlWithIndex => {
  const requestBuilders1 = dictHFoldlWithIndex.hfoldlWithIndex($RequestBuildersStep(identity))({});
  return dictHFoldlWithIndex1 => fetch => v => resDpl => dictHFoldlWithIndex1.hfoldlWithIndex($ClientStep(fetch, i => Isomers$dRequest$dDuplex$dPrinter.prefix("")(v._1(i)), resDpl))({})(requestBuilders1(Type$dProxy.Proxy));
};
export {
  $ClientStep,
  $RequestBuildersStep,
  ClientResponse,
  ClientResponseIsSymbol,
  ClientStep,
  RequestBuildersStep,
  RequestPrintersStep,
  client,
  clientFoldingResponseConstructor,
  clientFoldingResponseDuplexNewtypeWrapper,
  clientFoldingResponseDuplexRec,
  genericClientResponse_,
  hfoldlWithIndexRequestBuildersStepVariant,
  hfoldlWithIndexRequestBuildersStepVariantWrapper,
  identity,
  mappingRequestPrintersSte,
  mkRequestPrinters,
  mkRequestUnsafePrinters,
  newtypeClientResponse_,
  requestBuilders,
  requestFoldingData,
  requestFoldingVariant,
  showClientResponse,
  showEither
};
