import * as $runtime from "../runtime.js";
import * as Control$dMonad$dExcept$dTrans from "../Control.Monad.Except.Trans/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Foreign$dInternal$dStringify from "../Foreign.Internal.Stringify/index.js";
import * as Foreign$dJSON from "../Foreign.JSON/index.js";
const genericEncode = dictGeneric => dictGenericEncode => opts => {
  const $0 = dictGenericEncode.encodeOpts(opts);
  return x => $0(dictGeneric.from(x));
};
const genericEncodeJSON = dictGeneric => dictGenericEncode => opts => {
  const $0 = dictGenericEncode.encodeOpts(opts);
  return x => Foreign$dInternal$dStringify.unsafeStringify($0(dictGeneric.from(x)));
};
const genericDecode = dictGeneric => dictGenericDecode => opts => {
  const $0 = dictGenericDecode.decodeOpts(opts);
  return x => {
    const $1 = $0(x);
    if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
    if ($1.tag === "Right") { return Data$dEither.$Either("Right", dictGeneric.to($1._1)); }
    $runtime.fail();
  };
};
const genericDecodeJSON = dictGeneric => dictGenericDecode => opts => {
  const $0 = Control$dMonad$dExcept$dTrans.bindExceptT(Data$dIdentity.monadIdentity);
  const $1 = dictGenericDecode.decodeOpts(opts);
  return a => $0.bind(Foreign$dJSON.parseJSON(a))(x => {
    const $2 = $1(x);
    if ($2.tag === "Left") { return Data$dEither.$Either("Left", $2._1); }
    if ($2.tag === "Right") { return Data$dEither.$Either("Right", dictGeneric.to($2._1)); }
    $runtime.fail();
  });
};
const encodeJSON = dictEncode => x => Foreign$dInternal$dStringify.unsafeStringify(dictEncode.encode(x));
const decodeJSON = dictDecode => Foreign$dJSON.decodeJSONWith(dictDecode.decode);
export {decodeJSON, encodeJSON, genericDecode, genericDecodeJSON, genericEncode, genericEncodeJSON};
