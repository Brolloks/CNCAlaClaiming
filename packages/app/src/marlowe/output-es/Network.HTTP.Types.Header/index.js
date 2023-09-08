import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dCodePoint$dUnicode from "../Data.CodePoint.Unicode/index.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Data$dString$dCodePoints from "../Data.String.CodePoints/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
const $ByteRange = (tag, _1, _2) => ({tag, _1, _2});
const genericShowArgsArgument = {genericShowArgs: v => [Data$dShow.showIntImpl(v)]};
const ByteRangeFrom = value0 => $ByteRange("ByteRangeFrom", value0);
const ByteRangeFromTo = value0 => value1 => $ByteRange("ByteRangeFromTo", value0, value1);
const ByteRangeSuffix = value0 => $ByteRange("ByteRangeSuffix", value0);
const readInt = str => {
  if (str === "") { return Data$dMaybe.Nothing; }
  const negDash = Data$dString$dCodePoints.take(1)(str);
  const ints = (() => {
    if (negDash === "-") {
      const $0 = Data$dString$dCodeUnits.drop(Data$dString$dCodeUnits.length(Data$dString$dCodePoints.take(1)(str)))(str);
      return negDash + Data$dString$dCodePoints.take(Data$dString$dCodePoints.countPrefix(Data$dCodePoint$dUnicode.isDecDigit)($0))($0);
    }
    return Data$dString$dCodePoints.take(Data$dString$dCodePoints.countPrefix(Data$dCodePoint$dUnicode.isDecDigit)(str))(str);
  })();
  const $0 = Data$dInt.fromString(ints);
  if ($0.tag === "Just") {
    return Data$dMaybe.$Maybe(
      "Just",
      Data$dTuple.$Tuple(
        $0._1,
        Data$dString$dCodeUnits.drop(Data$dString$dCodeUnits.length(Data$dString$dCodePoints.take(Data$dString$dCodePoints.toCodePointArray(ints).length)(str)))(str)
      )
    );
  }
  if ($0.tag === "Nothing") { return Data$dMaybe.Nothing; }
  $runtime.fail();
};
const parseByteRanges = str => {
  const ranges = ranges$a0$copy => ranges$a1$copy => {
    let ranges$a0 = ranges$a0$copy, ranges$a1 = ranges$a1$copy, ranges$c = true, ranges$r;
    while (ranges$c) {
      const front = ranges$a0, str3 = ranges$a1;
      if (str3 === "") {
        ranges$c = false;
        ranges$r = Data$dMaybe.$Maybe("Just", front([]));
        continue;
      }
      const $0 = Data$dString$dCodeUnits.stripPrefix(",")(str3);
      if ($0.tag === "Just") {
        const $1 = readInt($0._1);
        if ($1.tag === "Just") {
          if ($1._1._1 < 0) {
            const $2 = $ByteRange("ByteRangeSuffix", $1._1._1);
            ranges$a0 = x => front([$2, ...x]);
            ranges$a1 = $1._1._2;
            continue;
          }
          const $2 = Data$dString$dCodeUnits.stripPrefix("-")($1._1._2);
          if ($2.tag === "Just") {
            const v1 = readInt($2._1);
            if (v1.tag === "Just" && v1._1._1 >= $1._1._1) {
              const $3 = $ByteRange("ByteRangeFromTo", $1._1._1, v1._1._1);
              ranges$a0 = x => front([$3, ...x]);
              ranges$a1 = v1._1._2;
              continue;
            }
            const $3 = $ByteRange("ByteRangeFrom", $1._1._1);
            ranges$a0 = x => front([$3, ...x]);
            ranges$a1 = $2._1;
            continue;
          }
          if ($2.tag === "Nothing") {
            ranges$c = false;
            ranges$r = Data$dMaybe.Nothing;
            continue;
          }
          $runtime.fail();
        }
        if ($1.tag === "Nothing") {
          ranges$c = false;
          ranges$r = Data$dMaybe.Nothing;
          continue;
        }
        $runtime.fail();
      }
      if ($0.tag === "Nothing") {
        ranges$c = false;
        ranges$r = Data$dMaybe.Nothing;
        continue;
      }
      $runtime.fail();
    }
    return ranges$r;
  };
  const $0 = Data$dString$dCodeUnits.stripPrefix("bytes=")(str);
  if ($0.tag === "Just") {
    const $1 = readInt($0._1);
    if ($1.tag === "Just") {
      if ($1._1._1 < 0) { return ranges(Data$dArray.cons($ByteRange("ByteRangeSuffix", $1._1._1)))($1._1._2); }
      const $2 = Data$dString$dCodeUnits.stripPrefix("-")($1._1._2);
      if ($2.tag === "Just") {
        const v1 = readInt($2._1);
        if (v1.tag === "Just" && v1._1._1 >= $1._1._1) { return ranges(Data$dArray.cons($ByteRange("ByteRangeFromTo", $1._1._1, v1._1._1)))(v1._1._2); }
        return ranges(Data$dArray.cons($ByteRange("ByteRangeFrom", $1._1._1)))($2._1);
      }
      if ($2.tag === "Nothing") { return Data$dMaybe.Nothing; }
      $runtime.fail();
    }
    if ($1.tag === "Nothing") { return Data$dMaybe.Nothing; }
    $runtime.fail();
  }
  if ($0.tag === "Nothing") { return Data$dMaybe.Nothing; }
  $runtime.fail();
};
const hWarning = "Warning";
const hWWWAuthenticate = "WWW-Authenticate";
const hVia = "Via";
const hVary = "Vary";
const hUserAgent = "User-Agent";
const hUpgrade = "Upgrade";
const hTransferEncoding = "Transfer-Encoding";
const hTrailer = "Trailer";
const hTE = "TE";
const hServer = "Server";
const hRetryAfter = "Retry-After";
const hReferer = "Referer";
const hRange = "Range";
const hProxyAuthorization = "Proxy-Authorization";
const hProxyAuthenticate = "Proxy-Authenticate";
const hPragma = "Pragma";
const hMaxForwards = "Max-Forwards";
const hLocation = "Location";
const hLastModified = "Last-Modified";
const hIfUnmodifiedSince = "If-Unmodified-Since";
const hIfRange = "If-Range";
const hIfNoneMatch = "If-None-Match";
const hIfModifiedSince = "If-Modified-Since";
const hIfMatch = "If-Match";
const hHost = "Host";
const hFrom = "From";
const hExpires = "Expires";
const hExpect = "Expect";
const hETag = "ETag";
const hDate = "Date";
const hContentType = "Content-Type";
const hContentRange = "Content-Range";
const hContentMD5 = "Content-MD5";
const hContentLocation = "Content-Location";
const hContentLength = "Content-Length";
const hContentLanguage = "Content-Language";
const hContentEncoding = "Content-Encoding";
const hConnection = "Connection";
const hCacheControl = "Cache-Control";
const hAuthorization = "Authorization";
const hAllow = "Allow";
const hAge = "Age";
const hAcceptRanges = "Accept-Ranges";
const hAcceptLanguage = "Accept-Language";
const hAcceptEncoding = "Accept-Encoding";
const hAcceptCharset = "Accept-Charset";
const hAccept = "Accept";
const genericByteRange = {
  to: x => {
    if (x.tag === "Inl") { return $ByteRange("ByteRangeFrom", x._1); }
    if (x.tag === "Inr") {
      if (x._1.tag === "Inl") { return $ByteRange("ByteRangeFromTo", x._1._1._1, x._1._1._2); }
      if (x._1.tag === "Inr") { return $ByteRange("ByteRangeSuffix", x._1._1); }
    }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "ByteRangeFrom") { return Data$dGeneric$dRep.$Sum("Inl", x._1); }
    if (x.tag === "ByteRangeFromTo") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, x._2))); }
    if (x.tag === "ByteRangeSuffix") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", x._1)); }
    $runtime.fail();
  }
};
const showByteRange = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor(genericShowArgsArgument)({reflectSymbol: () => "ByteRangeFrom"});
    const $1 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument)(genericShowArgsArgument))({
      reflectSymbol: () => "ByteRangeFromTo"
    });
    const $2 = (() => {
      const $2 = (() => {
        const $2 = Data$dShow$dGeneric.genericShowConstructor(genericShowArgsArgument)({reflectSymbol: () => "ByteRangeSuffix"});
        return {
          "genericShow'": v => {
            if (v.tag === "Inl") { return $1["genericShow'"](v._1); }
            if (v.tag === "Inr") { return $2["genericShow'"](v._1); }
            $runtime.fail();
          }
        };
      })();
      return {
        "genericShow'": v => {
          if (v.tag === "Inl") { return $0["genericShow'"](v._1); }
          if (v.tag === "Inr") { return $2["genericShow'"](v._1); }
          $runtime.fail();
        }
      };
    })();
    return x => $2["genericShow'"]((() => {
      if (x.tag === "ByteRangeFrom") { return Data$dGeneric$dRep.$Sum("Inl", x._1); }
      if (x.tag === "ByteRangeFromTo") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, x._2))); }
      if (x.tag === "ByteRangeSuffix") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", x._1)); }
      $runtime.fail();
    })());
  })()
};
const eqByteRange = {
  eq: x => y => {
    if (x.tag === "ByteRangeFrom") { return y.tag === "ByteRangeFrom" && x._1 === y._1; }
    if (x.tag === "ByteRangeFromTo") { return y.tag === "ByteRangeFromTo" && x._1 === y._1 && x._2 === y._2; }
    return x.tag === "ByteRangeSuffix" && y.tag === "ByteRangeSuffix" && x._1 === y._1;
  }
};
const ordByteRange = {
  compare: x => y => {
    if (x.tag === "ByteRangeFrom") {
      if (y.tag === "ByteRangeFrom") { return Data$dOrd.ordInt.compare(x._1)(y._1); }
      return Data$dOrdering.LT;
    }
    if (y.tag === "ByteRangeFrom") { return Data$dOrdering.GT; }
    if (x.tag === "ByteRangeFromTo") {
      if (y.tag === "ByteRangeFromTo") {
        const v = Data$dOrd.ordInt.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        return Data$dOrd.ordInt.compare(x._2)(y._2);
      }
      return Data$dOrdering.LT;
    }
    if (y.tag === "ByteRangeFromTo") { return Data$dOrdering.GT; }
    if (x.tag === "ByteRangeSuffix" && y.tag === "ByteRangeSuffix") { return Data$dOrd.ordInt.compare(x._1)(y._1); }
    $runtime.fail();
  },
  Eq0: () => eqByteRange
};
export {
  $ByteRange,
  ByteRangeFrom,
  ByteRangeFromTo,
  ByteRangeSuffix,
  eqByteRange,
  genericByteRange,
  genericShowArgsArgument,
  hAccept,
  hAcceptCharset,
  hAcceptEncoding,
  hAcceptLanguage,
  hAcceptRanges,
  hAge,
  hAllow,
  hAuthorization,
  hCacheControl,
  hConnection,
  hContentEncoding,
  hContentLanguage,
  hContentLength,
  hContentLocation,
  hContentMD5,
  hContentRange,
  hContentType,
  hDate,
  hETag,
  hExpect,
  hExpires,
  hFrom,
  hHost,
  hIfMatch,
  hIfModifiedSince,
  hIfNoneMatch,
  hIfRange,
  hIfUnmodifiedSince,
  hLastModified,
  hLocation,
  hMaxForwards,
  hPragma,
  hProxyAuthenticate,
  hProxyAuthorization,
  hRange,
  hReferer,
  hRetryAfter,
  hServer,
  hTE,
  hTrailer,
  hTransferEncoding,
  hUpgrade,
  hUserAgent,
  hVary,
  hVia,
  hWWWAuthenticate,
  hWarning,
  ordByteRange,
  parseByteRanges,
  readInt,
  showByteRange
};
