const statusIsSuccessful = v => v.code >= 200 && v.code < 300;
const statusIsServerError = v => v.code >= 500 && v.code < 600;
const statusIsRedirection = v => v.code >= 300 && v.code < 400;
const statusIsInformational = v => v.code >= 100 && v.code < 200;
const statusIsClientError = v => v.code >= 400 && v.code < 500;
const status511 = {code: 511, message: "Network Authentication Required"};
const status505 = {code: 505, message: "Http Version Not Supported"};
const status504 = {code: 504, message: "Gateway Timeout"};
const status503 = {code: 503, message: "Service Unavailable"};
const status502 = {code: 502, message: "Bad Gateway"};
const status501 = {code: 501, message: "Not Implemented"};
const status500 = {code: 500, message: "Internal Server Error"};
const status431 = {code: 431, message: "Request Header Fields Too Large"};
const status429 = {code: 429, message: "Too Many Requests"};
const tooManyRequests429 = status429;
const status428 = {code: 428, message: "Precondition Required"};
const status426 = {code: 426, message: "Upgrade Required"};
const upgradeRequired426 = status426;
const status422 = {code: 422, message: "Unprocessable Entity"};
const unprocessableEntity422 = status422;
const status418 = {code: 418, message: "I'm a teapot"};
const status417 = {code: 417, message: "Expectation Failed"};
const status416 = {code: 416, message: "Range Not Satisfiable"};
const status415 = {code: 415, message: "Unsupported Mediatype"};
const unsupportedMediaType415 = status415;
const status414 = {code: 414, message: "Uri Too Long"};
const status413 = {code: 413, message: "Payload Too Large"};
const status412 = {code: 412, message: "Precondition Faileds"};
const status411 = {code: 411, message: "Length Required"};
const status410 = {code: 410, message: "Gone"};
const status409 = {code: 409, message: "Conflict"};
const status408 = {code: 408, message: "Request Timeout"};
const status407 = {code: 407, message: "Proxy Authentication Required"};
const status406 = {code: 406, message: "Not Acceptable"};
const status405 = {code: 405, message: "Method Not Allowed"};
const status404 = {code: 404, message: "Not Found"};
const status403 = {code: 403, message: "Forbidden"};
const status402 = {code: 402, message: "Payment Required"};
const status401 = {code: 401, message: "Unauthorized"};
const unauthorized401 = status401;
const status400 = {code: 400, message: "Bad Request"};
const status308 = {code: 308, message: "Permanent Redirect"};
const status307 = {code: 307, message: "Temporary Redirect"};
const temporaryRedirect307 = status307;
const status305 = {code: 305, message: "Use Proxy"};
const useProxy305 = status305;
const status304 = {code: 304, message: "Not Modified"};
const status303 = {code: 304, message: "See Other"};
const status302 = {code: 302, message: "Found"};
const status301 = {code: 301, message: "Moved Permanently"};
const status300 = {code: 300, message: "Multiple Choices"};
const status206 = {code: 206, message: "Partial Content"};
const status205 = {code: 205, message: "Reset Content"};
const status204 = {code: 204, message: "No Content"};
const status203 = {code: 203, message: "Non-Authoritative Information"};
const status202 = {code: 202, message: "Accepted"};
const status201 = {code: 201, message: "Created"};
const status200 = {code: 200, message: "OK"};
const status101 = {code: 101, message: "Switching Protocols"};
const switchingProtocols101 = status101;
const status100 = {code: 100, message: "Continue"};
const serviceUnavailable503 = status503;
const seeOther303 = status303;
const resetContent205 = status205;
const requestedRangeNotSatisfiable416 = status416;
const requestURITooLong414 = status414;
const requestTimeout408 = status408;
const requestHeaderFieldsTooLarge431 = status431;
const requestEntityTooLarge413 = status413;
const proxyAuthenticationRequired407 = status407;
const preconditionRequired428 = status428;
const preconditionFailed412 = status412;
const permanentRedirect308 = status308;
const paymentRequired402 = status402;
const partialContent206 = status206;
const ok200 = status200;
const notModified304 = status304;
const notImplemented501 = status501;
const notFound404 = status404;
const notAcceptable406 = status406;
const nonAuthoritative203 = status203;
const noContent204 = status204;
const networkAuthenticationRequired511 = status511;
const multipleChoices300 = status300;
const movedPermanently301 = status301;
const methodNotAllowed405 = status405;
const lengthRequired411 = status411;
const internalServerError500 = status500;
const imATeapot418 = status418;
const httpVersionNotSupported505 = status505;
const gone410 = status410;
const gatewayTimeout504 = status504;
const found302 = status302;
const forbidden403 = status403;
const expectationFailed417 = status417;
const created201 = status201;
const continue100 = status100;
const conflict409 = status409;
const badRequest400 = status400;
const badGateway502 = status502;
const accepted202 = status202;
export {
  accepted202,
  badGateway502,
  badRequest400,
  conflict409,
  continue100,
  created201,
  expectationFailed417,
  forbidden403,
  found302,
  gatewayTimeout504,
  gone410,
  httpVersionNotSupported505,
  imATeapot418,
  internalServerError500,
  lengthRequired411,
  methodNotAllowed405,
  movedPermanently301,
  multipleChoices300,
  networkAuthenticationRequired511,
  noContent204,
  nonAuthoritative203,
  notAcceptable406,
  notFound404,
  notImplemented501,
  notModified304,
  ok200,
  partialContent206,
  paymentRequired402,
  permanentRedirect308,
  preconditionFailed412,
  preconditionRequired428,
  proxyAuthenticationRequired407,
  requestEntityTooLarge413,
  requestHeaderFieldsTooLarge431,
  requestTimeout408,
  requestURITooLong414,
  requestedRangeNotSatisfiable416,
  resetContent205,
  seeOther303,
  serviceUnavailable503,
  status100,
  status101,
  status200,
  status201,
  status202,
  status203,
  status204,
  status205,
  status206,
  status300,
  status301,
  status302,
  status303,
  status304,
  status305,
  status307,
  status308,
  status400,
  status401,
  status402,
  status403,
  status404,
  status405,
  status406,
  status407,
  status408,
  status409,
  status410,
  status411,
  status412,
  status413,
  status414,
  status415,
  status416,
  status417,
  status418,
  status422,
  status426,
  status428,
  status429,
  status431,
  status500,
  status501,
  status502,
  status503,
  status504,
  status505,
  status511,
  statusIsClientError,
  statusIsInformational,
  statusIsRedirection,
  statusIsServerError,
  statusIsSuccessful,
  switchingProtocols101,
  temporaryRedirect307,
  tooManyRequests429,
  unauthorized401,
  unprocessableEntity422,
  unsupportedMediaType415,
  upgradeRequired426,
  useProxy305
};
