import * as $runtime from "../runtime.js";
import * as Control$dApply from "../Control.Apply/index.js";
import * as Control$dMonad$dExcept$dTrans from "../Control.Monad.Except.Trans/index.js";
import * as Control$dMonad$dReader$dTrans from "../Control.Monad.Reader.Trans/index.js";
import * as Control$dMonad$dState$dTrans from "../Control.Monad.State.Trans/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dAff$dClass from "../Effect.Aff.Class/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const $ParsingError = (tag, _1, _2) => ({tag, _1, _2});
const monadAskExceptT = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.monadAskExceptT(/* #__PURE__ */ Control$dMonad$dState$dTrans.monadAskStateT(/* #__PURE__ */ (() => {
  const monadReaderT1 = Control$dMonad$dReader$dTrans.monadReaderT(Effect$dAff.monadAff);
  return {ask: Effect$dAff._pure, Monad0: () => monadReaderT1};
})()));
const asks = f => monadAskExceptT.Monad0().Bind1().Apply0().Functor0().map(f)(monadAskExceptT.ask);
const monadReaderT = /* #__PURE__ */ Control$dMonad$dReader$dTrans.monadReaderT(Effect$dAff.monadAff);
const monadStateT = {Applicative0: () => Control$dMonad$dState$dTrans.applicativeStateT(monadReaderT), Bind1: () => Control$dMonad$dState$dTrans.bindStateT(monadReaderT)};
const bindExceptT = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.bindExceptT(monadStateT);
const monadStateExceptT = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.monadStateExceptT(/* #__PURE__ */ Control$dMonad$dState$dTrans.monadStateStateT(monadReaderT));
const $$get = /* #__PURE__ */ (() => monadStateExceptT.state(s => Data$dTuple.$Tuple(s, s)))();
const monadThrowExceptT = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.monadThrowExceptT(monadStateT);
const applicativeExceptT = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.applicativeExceptT(monadStateT);
const liftAff = /* #__PURE__ */ (() => Effect$dAff$dClass.monadAffExceptT(Effect$dAff$dClass.monadAffState(Effect$dAff$dClass.monadAffReader(Effect$dAff$dClass.monadAffAff))).liftAff)();
const bind1 = /* #__PURE__ */ (() => Control$dMonad$dState$dTrans.bindStateT(monadReaderT).bind)();
const pure2 = /* #__PURE__ */ (() => Control$dMonad$dState$dTrans.applicativeStateT(monadReaderT).pure)();
const Expected = value0 => value1 => $ParsingError("Expected", value0, value1);
const BodyParsingError = value0 => $ParsingError("BodyParsingError", value0);
const HeaderMissing = value0 => $ParsingError("HeaderMissing", value0);
const JSError = value0 => $ParsingError("JSError", value0);
const Parser = x => x;
const url = /* #__PURE__ */ asks(x => x.url);
const unreadBody = /* #__PURE__ */ (() => bindExceptT.bind($$get)(v => {
  if (v.tag === "Just") { return monadThrowExceptT.throwError($ParsingError("Expected", "unread body", v._1.type)); }
  if (v.tag === "Nothing") { return bindExceptT.bind(monadAskExceptT.ask)(v1 => applicativeExceptT.pure(v1.body)); }
  $runtime.fail();
}))();
const status = /* #__PURE__ */ asks(x => x.status);
const run = v => i => Effect$dAff._catchError(Effect$dAff._map(Data$dTuple.fst)(v(Data$dMaybe.Nothing)(i)))(x => Effect$dAff._pure(Data$dEither.$Either(
  "Left",
  $ParsingError("JSError", x)
)));
const redirected = /* #__PURE__ */ asks(x => x.redirected);
const printHeaderName = Unsafe$dCoerce.unsafeCoerce;
const newtypeParser = {Coercible0: () => {}};
const monadParserThrow = monadThrowExceptT;
const readBody = () => dictIsSymbol => l => bindExceptT.bind(bindExceptT.bind($$get)(v => {
  if (v.tag === "Just") {
    const $0 = monadThrowExceptT.throwError($ParsingError("Expected", dictIsSymbol.reflectSymbol(l), v._1.type));
    if (v._1.type === dictIsSymbol.reflectSymbol(l)) { return applicativeExceptT.pure(v._1.value); }
    return $0;
  }
  if (v.tag === "Nothing") {
    return bindExceptT.bind(monadAskExceptT.ask)(v1 => {
      const fb = Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(l))(v1.body);
      return bindExceptT.bind((() => {
        const $0 = Data$dMaybe.$Maybe("Just", {type: dictIsSymbol.reflectSymbol(l), value: fb});
        return monadStateExceptT.state(v$1 => Data$dTuple.$Tuple(undefined, $0));
      })())(() => applicativeExceptT.pure(fb));
    });
  }
  $runtime.fail();
}))(fb => liftAff(Effect$dAff.joinFiber(fb)));
const string = /* #__PURE__ */ readBody()({reflectSymbol: () => "string"})(Type$dProxy.Proxy);
const monadParser = {Applicative0: () => Control$dMonad$dExcept$dTrans.applicativeExceptT(monadStateT), Bind1: () => Control$dMonad$dExcept$dTrans.bindExceptT(monadStateT)};
const lazyParser = {defer: f => s => f()(s)};
const json = /* #__PURE__ */ readBody()({reflectSymbol: () => "json"})(Type$dProxy.Proxy);
const headers = /* #__PURE__ */ asks(x => x.headers);
const functorParser = {
  map: f => v => s => {
    const $0 = Effect$dAff._map(v1 => Data$dTuple.$Tuple(
      (() => {
        if (v1._1.tag === "Left") { return Data$dEither.$Either("Left", v1._1._1); }
        if (v1._1.tag === "Right") { return Data$dEither.$Either("Right", f(v1._1._1)); }
        $runtime.fail();
      })(),
      v1._2
    ));
    const $1 = v(s);
    return x => $0($1(x));
  }
};
const header = hn => functorParser.map(Data$dMaybe.functorMaybe.map(Data$dTuple.snd))(functorParser.map(Data$dArray.find(x => Data$dString$dCommon.toLower(hn) === Data$dString$dCommon.toLower(x._1)))(headers));
const blob = /* #__PURE__ */ readBody()({reflectSymbol: () => "blob"})(Type$dProxy.Proxy);
const bindParser = bindExceptT;
const arrayBuffer = /* #__PURE__ */ readBody()({reflectSymbol: () => "arrayBuffer"})(Type$dProxy.Proxy);
const applyParser = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.applyExceptT(monadStateT);
const untouchedResponse = /* #__PURE__ */ (() => applyParser.apply(applyParser.Functor0().map(v => Control$dApply.identity)(unreadBody))(monadAskExceptT.ask))();
const applicativeParser = applicativeExceptT;
const fromJson = decode => bindExceptT.bind(json)(j => {
  const v = decode(j);
  if (v.tag === "Left") { return monadThrowExceptT.throwError($ParsingError("BodyParsingError", v._1)); }
  if (v.tag === "Right") { return applicativeExceptT.pure(v._1); }
  $runtime.fail();
});
const fromString = print => decode => p => bindExceptT.bind(p)(a => {
  const v = decode(a);
  if (v.tag === "Left") { return monadThrowExceptT.throwError($ParsingError("Expected", v._1, print(a))); }
  if (v.tag === "Right") { return applicativeExceptT.pure(v._1); }
  $runtime.fail();
});
const reqHeader = hn => bindExceptT.bind(header(hn))(v => {
  if (v.tag === "Nothing") { return monadThrowExceptT.throwError($ParsingError("HeaderMissing", hn)); }
  if (v.tag === "Just") { return applicativeExceptT.pure(v._1); }
  $runtime.fail();
});
const withContentType = expected => prs => bindExceptT.bind(reqHeader("Content-Type"))((() => {
  const $0 = Data$dString$dCommon.split(";");
  return x => {
    const $1 = Data$dArray.uncons($0(x));
    if ($1.tag === "Just") {
      if (expected !== $1._1.head) { return monadThrowExceptT.throwError($ParsingError("Expected", "Content-Type:" + expected, $1._1.head)); }
      return prs;
    }
    if ($1.tag === "Nothing") { return monadThrowExceptT.throwError($ParsingError("Expected", "Content-Type:" + expected, "")); }
    $runtime.fail();
  };
})());
const withHeaderPassing = hn => check => err => prs => bindExceptT.bind(reqHeader(hn))(got => {
  if (check(got)) { return monadThrowExceptT.throwError($ParsingError("Expected", hn + ":" + err, got)); }
  return prs;
});
const withHeaderValue = hn => expected => prs => withHeaderPassing(hn)($0 => expected === $0)(expected)(prs);
const statusEquals = v => {
  const $0 = v.code;
  return bindExceptT.bind(status)(v1 => {
    const $1 = monadThrowExceptT.throwError($ParsingError("Expected", "Status code: " + Data$dShow.showIntImpl($0), Data$dShow.showIntImpl(v1.code)));
    if ($0 !== v1.code) { return $1; }
    return applicativeExceptT.pure();
  });
};
const altParser = {
  alt: v => v1 => bind1(v)(v2 => {
    if (v2.tag === "Right") { return pure2(v2); }
    return v1;
  }),
  Functor0: () => functorParser
};
const _responseParserError = Type$dProxy.Proxy;
export {
  $ParsingError,
  BodyParsingError,
  Expected,
  HeaderMissing,
  JSError,
  Parser,
  _responseParserError,
  altParser,
  applicativeExceptT,
  applicativeParser,
  applyParser,
  arrayBuffer,
  asks,
  bind1,
  bindExceptT,
  bindParser,
  blob,
  fromJson,
  fromString,
  functorParser,
  $$get as get,
  header,
  headers,
  json,
  lazyParser,
  liftAff,
  monadAskExceptT,
  monadParser,
  monadParserThrow,
  monadReaderT,
  monadStateExceptT,
  monadStateT,
  monadThrowExceptT,
  newtypeParser,
  printHeaderName,
  pure2,
  readBody,
  redirected,
  reqHeader,
  run,
  status,
  statusEquals,
  string,
  unreadBody,
  untouchedResponse,
  url,
  withContentType,
  withHeaderPassing,
  withHeaderValue
};
