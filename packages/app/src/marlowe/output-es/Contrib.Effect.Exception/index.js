import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dArgonaut$dEncode$dClass from "../Data.Argonaut.Encode.Class/index.js";
import * as Data$dArgonaut$dEncode$dEncoders from "../Data.Argonaut.Encode.Encoders/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const encodeJson = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJString)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons({
    encodeJson: Data$dArgonaut$dEncode$dEncoders.encodeMaybe(Data$dArgonaut$dCore.fromString)
  })(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)({reflectSymbol: () => "stack"})())({reflectSymbol: () => "name"})())({reflectSymbol: () => "msg"})();
  return rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy));
})();
const errorToJson = err => encodeJson({name: Effect$dException.name(err), msg: Effect$dException.message(err), stack: Effect$dException.stack(err)});
export {encodeJson, errorToJson};
