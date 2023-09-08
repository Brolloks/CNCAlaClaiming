import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Isomers$dResponse$dDuplex from "../Isomers.Response.Duplex/index.js";
import * as Isomers$dResponse$dDuplex$dParser from "../Isomers.Response.Duplex.Parser/index.js";
import * as Isomers$dResponse$dDuplex$dPrinter from "../Isomers.Response.Duplex.Printer/index.js";
import * as Isomers$dResponse$dDuplex$dType from "../Isomers.Response.Duplex.Type/index.js";
import * as Isomers$dResponse$dDuplex$dVariant from "../Isomers.Response.Duplex.Variant/index.js";
import * as Network$dHTTP$dTypes$dStatus from "../Network.HTTP.Types.Status/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const show = record => "{ code: " + Data$dShow.showIntImpl(record.code) + ", message: " + Data$dShow.showStringImpl(record.message) + " }";
const ok = d => Isomers$dResponse$dDuplex$dVariant.injInto({reflectSymbol: () => "ok"})()()()()()()(Type$dProxy.Proxy)(Isomers$dResponse$dDuplex.withStatus(Network$dHTTP$dTypes$dStatus.status200)(d))(Isomers$dResponse$dDuplex$dVariant.empty);
const svgString = /* #__PURE__ */ ok(Isomers$dResponse$dDuplex.svgString);
const notFound = () => () => nf => res => Isomers$dResponse$dDuplex$dVariant.injInto({reflectSymbol: () => "notFound"})()()()()()()(Type$dProxy.Proxy)(Isomers$dResponse$dDuplex.withStatus(Network$dHTTP$dTypes$dStatus.status404)(nf))(res);
const json = /* #__PURE__ */ ok(Isomers$dResponse$dDuplex.json);
const javascript = /* #__PURE__ */ (() => ok(Isomers$dResponse$dDuplex$dType.profunctorDuplex.dimap(Unsafe$dCoerce.unsafeCoerce)(Unsafe$dCoerce.unsafeCoerce)(Isomers$dResponse$dDuplex$dType.$Duplex(
  Isomers$dResponse$dDuplex$dPrinter.string,
  Isomers$dResponse$dDuplex$dParser.string
))))();
const htmlString = /* #__PURE__ */ ok(Isomers$dResponse$dDuplex.html);
const foundDuplex = /* #__PURE__ */ (() => Isomers$dResponse$dDuplex$dType.$Duplex(
  x => Isomers$dResponse$dDuplex$dPrinter.header("Location")(Data$dMaybe.$Maybe("Just", x._1)),
  Isomers$dResponse$dDuplex$dParser.bindExceptT.bind(Isomers$dResponse$dDuplex$dParser.redirected)(v => {
    if (v) {
      return Isomers$dResponse$dDuplex$dParser.bindExceptT.bind(Isomers$dResponse$dDuplex$dParser.url)(location => Isomers$dResponse$dDuplex$dParser.bindExceptT.bind(Isomers$dResponse$dDuplex$dParser.untouchedResponse)(clientResponse => Isomers$dResponse$dDuplex$dParser.applicativeExceptT.pure(Data$dTuple.$Tuple(
        location,
        Data$dMaybe.$Maybe("Just", clientResponse)
      ))));
    }
    return Isomers$dResponse$dDuplex$dParser.bindExceptT.bind(Isomers$dResponse$dDuplex$dParser.status)(s => Isomers$dResponse$dDuplex$dParser.monadThrowExceptT.throwError(Isomers$dResponse$dDuplex$dParser.$ParsingError(
      "Expected",
      "redirect",
      show(s)
    )));
  })
))();
const found = () => () => res => Isomers$dResponse$dDuplex$dVariant.injInto({reflectSymbol: () => "found"})()()()()()()(Type$dProxy.Proxy)(Isomers$dResponse$dDuplex.withStatus(Network$dHTTP$dTypes$dStatus.status302)(foundDuplex))(res);
const badRequest = () => () => nf => res => Isomers$dResponse$dDuplex$dVariant.injInto({reflectSymbol: () => "badRequest"})()()()()()()(Type$dProxy.Proxy)(Isomers$dResponse$dDuplex.withStatus(Network$dHTTP$dTypes$dStatus.status400)(nf))(res);
const asJson = f => g => ok(Isomers$dResponse$dDuplex.asJson(f)(g));
export {asJson, badRequest, found, foundDuplex, htmlString, javascript, json, notFound, ok, show, svgString};
