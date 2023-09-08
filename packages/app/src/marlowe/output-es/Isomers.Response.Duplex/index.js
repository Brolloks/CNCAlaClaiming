import * as Control$dApply from "../Control.Apply/index.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Isomers$dResponse$dDuplex$dParser from "../Isomers.Response.Duplex.Parser/index.js";
import * as Isomers$dResponse$dDuplex$dPrinter from "../Isomers.Response.Duplex.Printer/index.js";
import * as Isomers$dResponse$dDuplex$dType from "../Isomers.Response.Duplex.Type/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const withStatus = s => v => Isomers$dResponse$dDuplex$dType.$Duplex(
  i => {
    const $0 = v._1(i);
    return x => $0({body: x.body, status: s, headers: x.headers});
  },
  Isomers$dResponse$dDuplex$dParser.applyParser.apply(Isomers$dResponse$dDuplex$dParser.applyParser.Functor0().map(v$1 => Control$dApply.identity)(Isomers$dResponse$dDuplex$dParser.statusEquals(s)))(v._2)
);
const withHeaderValue = v => expected => v1 => {
  const $0 = v1._2;
  return Isomers$dResponse$dDuplex$dType.$Duplex(
    i => {
      const $1 = Isomers$dResponse$dDuplex$dPrinter.header(v)(Data$dMaybe.$Maybe("Just", expected));
      const $2 = v1._1(i);
      return x => $2($1(x));
    },
    Isomers$dResponse$dDuplex$dParser.bindExceptT.bind(Isomers$dResponse$dDuplex$dParser.reqHeader(v))(got => Isomers$dResponse$dDuplex$dParser.bindExceptT.bind((() => {
      const $1 = Isomers$dResponse$dDuplex$dParser.monadThrowExceptT.throwError(Isomers$dResponse$dDuplex$dParser.$ParsingError("Expected", v + ":" + expected, got));
      if (expected !== got) { return $1; }
      return Isomers$dResponse$dDuplex$dParser.applicativeExceptT.pure();
    })())(() => $0))
  );
};
const withContentType = dictIsSymbol => proxy => v => {
  const ct = dictIsSymbol.reflectSymbol(proxy);
  return Isomers$dResponse$dDuplex$dType.$Duplex(
    i => {
      const $0 = Isomers$dResponse$dDuplex$dPrinter.header("Content-Type")(Data$dMaybe.$Maybe("Just", ct));
      const $1 = v._1(i);
      return x => $1($0(x));
    },
    Isomers$dResponse$dDuplex$dParser.withContentType(ct)(v._2)
  );
};
const svgString = /* #__PURE__ */ (() => withContentType({reflectSymbol: () => "image/svg+xml"})(Type$dProxy.Proxy)(Isomers$dResponse$dDuplex$dType.profunctorDuplex.dimap(Unsafe$dCoerce.unsafeCoerce)(Unsafe$dCoerce.unsafeCoerce)(Isomers$dResponse$dDuplex$dType.$Duplex(
  Isomers$dResponse$dDuplex$dPrinter.string,
  Isomers$dResponse$dDuplex$dParser.string
))))();
const string = /* #__PURE__ */ withContentType({reflectSymbol: () => "text/plain"})(Type$dProxy.Proxy)(/* #__PURE__ */ Isomers$dResponse$dDuplex$dType.$Duplex(
  Isomers$dResponse$dDuplex$dPrinter.string,
  Isomers$dResponse$dDuplex$dParser.string
));
const status = /* #__PURE__ */ Isomers$dResponse$dDuplex$dType.$Duplex(Isomers$dResponse$dDuplex$dPrinter.status, Isomers$dResponse$dDuplex$dParser.status);
const reqHeader = headerName => Isomers$dResponse$dDuplex$dType.$Duplex(
  Isomers$dResponse$dDuplex$dPrinter.reqHeader(headerName),
  Isomers$dResponse$dDuplex$dParser.reqHeader(headerName)
);
const json = /* #__PURE__ */ withContentType({reflectSymbol: () => "application/json"})(Type$dProxy.Proxy)(/* #__PURE__ */ Isomers$dResponse$dDuplex$dType.$Duplex(
  Isomers$dResponse$dDuplex$dPrinter.json,
  Isomers$dResponse$dDuplex$dParser.json
));
const javascript = /* #__PURE__ */ (() => withContentType({reflectSymbol: () => "application/javascript"})(Type$dProxy.Proxy)(Isomers$dResponse$dDuplex$dType.profunctorDuplex.dimap(Unsafe$dCoerce.unsafeCoerce)(Unsafe$dCoerce.unsafeCoerce)(Isomers$dResponse$dDuplex$dType.$Duplex(
  Isomers$dResponse$dDuplex$dPrinter.string,
  Isomers$dResponse$dDuplex$dParser.string
))))();
const html = /* #__PURE__ */ (() => withContentType({reflectSymbol: () => "text/html"})(Type$dProxy.Proxy)(Isomers$dResponse$dDuplex$dType.profunctorDuplex.dimap(Unsafe$dCoerce.unsafeCoerce)(Unsafe$dCoerce.unsafeCoerce)(Isomers$dResponse$dDuplex$dType.$Duplex(
  Isomers$dResponse$dDuplex$dPrinter.string,
  Isomers$dResponse$dDuplex$dParser.string
))))();
const header = headerName => Isomers$dResponse$dDuplex$dType.$Duplex(Isomers$dResponse$dDuplex$dPrinter.header(headerName), Isomers$dResponse$dDuplex$dParser.header(headerName));
const asJson = f => g => withContentType({reflectSymbol: () => "application/json"})(Type$dProxy.Proxy)(Isomers$dResponse$dDuplex$dType.$Duplex(
  x => Isomers$dResponse$dDuplex$dPrinter.string(Data$dArgonaut$dCore.stringify(f(x))),
  Isomers$dResponse$dDuplex$dParser.fromJson(g)
));
export {asJson, header, html, javascript, json, reqHeader, status, string, svgString, withContentType, withHeaderValue, withStatus};
