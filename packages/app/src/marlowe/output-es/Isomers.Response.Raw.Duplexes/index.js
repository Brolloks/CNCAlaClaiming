import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Isomers$dResponse$dDuplex$dParser from "../Isomers.Response.Duplex.Parser/index.js";
import * as Isomers$dResponse$dDuplex$dPrinter from "../Isomers.Response.Duplex.Printer/index.js";
import * as Isomers$dResponse$dDuplex$dType from "../Isomers.Response.Duplex.Type/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const foldMap = /* #__PURE__ */ (() => Data$dFoldable.foldableArray.foldMap(Isomers$dResponse$dDuplex$dPrinter.monoidPrinter))();
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
const string = /* #__PURE__ */ (() => withContentType({reflectSymbol: () => "text/plain"})(Type$dProxy.Proxy)(Isomers$dResponse$dDuplex$dType.$Duplex(
  v => {
    const $0 = v.status;
    const $1 = foldMap(v$1 => Isomers$dResponse$dDuplex$dPrinter.header(v$1._1)(Data$dMaybe.$Maybe("Just", v$1._2)))(v.headers);
    const $2 = Isomers$dResponse$dDuplex$dPrinter.string(v.body);
    return x => {
      const $3 = $1(x);
      return $2({body: $3.body, status: $0, headers: $3.headers});
    };
  },
  Isomers$dResponse$dDuplex$dParser.bindExceptT.bind(Isomers$dResponse$dDuplex$dParser.status)(status => Isomers$dResponse$dDuplex$dParser.bindExceptT.bind(Isomers$dResponse$dDuplex$dParser.readBody()({
    reflectSymbol: () => "string"
  })(Type$dProxy.Proxy))(body => Isomers$dResponse$dDuplex$dParser.bindExceptT.bind(Isomers$dResponse$dDuplex$dParser.headers)(headers => Isomers$dResponse$dDuplex$dParser.applicativeExceptT.pure({
    body,
    headers,
    status
  }))))
)))();
const html = /* #__PURE__ */ (() => withContentType({reflectSymbol: () => "text/html"})(Type$dProxy.Proxy)(Isomers$dResponse$dDuplex$dType.$Duplex(
  v => {
    const $0 = v.status;
    const $1 = foldMap(v$1 => Isomers$dResponse$dDuplex$dPrinter.header(v$1._1)(Data$dMaybe.$Maybe("Just", v$1._2)))(v.headers);
    const $2 = Isomers$dResponse$dDuplex$dPrinter.string(v.body);
    return x => {
      const $3 = $1(x);
      return $2({body: $3.body, status: $0, headers: $3.headers});
    };
  },
  Isomers$dResponse$dDuplex$dParser.bindExceptT.bind(Isomers$dResponse$dDuplex$dParser.status)(status => Isomers$dResponse$dDuplex$dParser.bindExceptT.bind(Isomers$dResponse$dDuplex$dParser.readBody()({
    reflectSymbol: () => "string"
  })(Type$dProxy.Proxy))(body => Isomers$dResponse$dDuplex$dParser.bindExceptT.bind(Isomers$dResponse$dDuplex$dParser.headers)(headers => Isomers$dResponse$dDuplex$dParser.applicativeExceptT.pure({
    body,
    headers,
    status
  }))))
)))();
export {foldMap, html, string, withContentType};
