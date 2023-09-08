// | This module provides validators for urlencoded values.
// | In general it follows "browsers standard" for encoding
// | so it should be useful in the context of HTML form validation.
// |
// | You can use `Batteries.Integer.validator` or `Batteries.Number.validator`
// | directly as field value validator.
import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Polyform$dBatteries from "../Polyform.Batteries/index.js";
import * as Polyform$dBatteries$dGeneric$dEnum from "../Polyform.Batteries.Generic.Enum/index.js";
import * as Polyform$dBatteries$dInt from "../Polyform.Batteries.Int/index.js";
import * as Polyform$dBatteries$dUrlEncoded$dTypes$dErrors from "../Polyform.Batteries.UrlEncoded.Types.Errors/index.js";
import * as Polyform$dValidator from "../Polyform.Validator/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const valueArray = dictMonad => {
  const $0 = dictMonad.Applicative0();
  return x => $0.pure(Data$dEither.$Either(
    "Right",
    (() => {
      if (x.tag === "Just") { return x._1; }
      if (x.tag === "Nothing") { return []; }
      $runtime.fail();
    })()
  ));
};
const value = dictApplicative => err => x => dictApplicative.pure((() => {
  const v = (() => {
    if (x.tag === "Just") { return Data$dArray.index(x._1)(0); }
    if (x.tag === "Nothing") { return Data$dMaybe.Nothing; }
    $runtime.fail();
  })();
  if (v.tag === "Just") {
    if (v._1 === "") { return Data$dEither.$Either("Left", [err]); }
    return Data$dEither.$Either("Right", v._1);
  }
  if (v.tag === "Nothing") { return Data$dEither.$Either("Left", [err]); }
  $runtime.fail();
})());
const requiredMulti = dictMonad => {
  const Applicative0 = dictMonad.Applicative0();
  const $0 = v => v1 => i => dictMonad.Bind1().bind(v1(i))(res$p => {
    if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
    if (res$p.tag === "Right") { return v(res$p._1); }
    $runtime.fail();
  });
  const $1 = dictMonad.Applicative0();
  return name => err => fieldValidator => Polyform$dValidator.lmapValidator(dictMonad)(Polyform$dBatteries$dUrlEncoded$dTypes$dErrors.singleton(name))($0(fieldValidator)($0(x => Applicative0.pure(x.length > 0
    ? Data$dEither.$Either("Right", x)
    : Data$dEither.$Either("Left", [err])))($0(x => $1.pure(Data$dEither.$Either(
    "Right",
    (() => {
      if (x.tag === "Just") { return x._1; }
      if (x.tag === "Nothing") { return []; }
      $runtime.fail();
    })()
  )))(x => Applicative0.pure(Data$dEither.$Either("Right", Data$dMap$dInternal.lookup(Data$dOrd.ordString)(name)(x)))))));
};
const required = dictMonad => {
  const $0 = v => v1 => i => dictMonad.Bind1().bind(v1(i))(res$p => {
    if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
    if (res$p.tag === "Right") { return v(res$p._1); }
    $runtime.fail();
  });
  const Applicative0 = dictMonad.Applicative0();
  return name => err => fieldValidator => Polyform$dValidator.lmapValidator(dictMonad)(Polyform$dBatteries$dUrlEncoded$dTypes$dErrors.singleton(name))($0(fieldValidator)($0(value(Applicative0)(err))(x => Applicative0.pure(Data$dEither.$Either(
    "Right",
    Data$dMap$dInternal.lookup(Data$dOrd.ordString)(name)(x)
  )))));
};
const optionalMulti = dictMonad => {
  const $0 = v => v1 => i => dictMonad.Bind1().bind(v1(i))(res$p => {
    if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
    if (res$p.tag === "Right") { return v(res$p._1); }
    $runtime.fail();
  });
  const $1 = dictMonad.Applicative0();
  const $2 = dictMonad.Applicative0();
  return name => fieldValidator => Polyform$dValidator.lmapValidator(dictMonad)(Polyform$dBatteries$dUrlEncoded$dTypes$dErrors.singleton(name))($0(fieldValidator)($0(x => $1.pure(Data$dEither.$Either(
    "Right",
    (() => {
      if (x.tag === "Just") { return x._1; }
      if (x.tag === "Nothing") { return []; }
      $runtime.fail();
    })()
  )))(x => $2.pure(Data$dEither.$Either("Right", Data$dMap$dInternal.lookup(Data$dOrd.ordString)(name)(x))))));
};
const optValidator = dictMonad => {
  const Applicative0 = dictMonad.Applicative0();
  const $0 = Applicative0.Apply0().Functor0();
  return fieldValidator => x => {
    const v1 = (() => {
      if (x.tag === "Just") { return Data$dArray.index(x._1)(0); }
      if (x.tag === "Nothing") { return Data$dMaybe.Nothing; }
      $runtime.fail();
    })();
    if (v1.tag === "Nothing") { return Applicative0.pure(Data$dEither.$Either("Right", Data$dMaybe.Nothing)); }
    if (v1.tag === "Just") {
      if (v1._1 === "") { return Applicative0.pure(Data$dEither.$Either("Right", Data$dMaybe.Nothing)); }
      return $0.map(m => {
        if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
        if (m.tag === "Right") { return Data$dEither.$Either("Right", Data$dMaybe.$Maybe("Just", m._1)); }
        $runtime.fail();
      })(fieldValidator(v1._1));
    }
    $runtime.fail();
  };
};
const optional = dictMonad => {
  const optValidator1 = optValidator(dictMonad);
  const $0 = dictMonad.Applicative0();
  return name => fieldValidator => Polyform$dValidator.lmapValidator(dictMonad)(Polyform$dBatteries$dUrlEncoded$dTypes$dErrors.singleton(name))((() => {
    const $1 = optValidator1(fieldValidator);
    return i => dictMonad.Bind1().bind($0.pure(Data$dEither.$Either("Right", Data$dMap$dInternal.lookup(Data$dOrd.ordString)(name)(i))))(res$p => {
      if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
      if (res$p.tag === "Right") { return $1(res$p._1); }
      $runtime.fail();
    });
  })());
};
const _missingValue = Type$dProxy.Proxy;
const missingValue = msg => Polyform$dBatteries.msg$p({reflectSymbol: () => "missingValue"})()(msg)(Type$dProxy.Proxy)({});
const required$p = dictMonad => {
  const $0 = v => v1 => i => dictMonad.Bind1().bind(v1(i))(res$p => {
    if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
    if (res$p.tag === "Right") { return v(res$p._1); }
    $runtime.fail();
  });
  const Applicative0 = dictMonad.Applicative0();
  return name => fieldValidator => Polyform$dValidator.lmapValidator(dictMonad)(Polyform$dBatteries$dUrlEncoded$dTypes$dErrors.singleton(name))($0(fieldValidator)($0(value(Applicative0)(Polyform$dBatteries.msg$p({
    reflectSymbol: () => "missingValue"
  })()("Missing value")(Type$dProxy.Proxy)({})))(x => Applicative0.pure(Data$dEither.$Either("Right", Data$dMap$dInternal.lookup(Data$dOrd.ordString)(name)(x))))));
};
const requiredMulti$p = dictMonad => {
  const requiredMulti1 = requiredMulti(dictMonad);
  return name => fieldValidator => requiredMulti1(name)(Polyform$dBatteries.msg$p({reflectSymbol: () => "missingValue"})()("Missing value")(Type$dProxy.Proxy)({}))(fieldValidator);
};
const flattenEnumErr = /* #__PURE__ */ (() => {
  const reMsg = Polyform$dBatteries.msg$p({reflectSymbol: () => "invalidEnumValue"})()("Invalid choice")(Type$dProxy.Proxy);
  return v => {
    if (v.info.type === "intExpected") { return reMsg(v.info.value); }
    if (v.info.type === "invalidEnumIndex") { return reMsg(Data$dShow.showIntImpl(v.info.value)); }
    return {msg: v.msg, info: v.info};
  };
})();
const $$enum = dictMonad => {
  const Applicative0 = dictMonad.Applicative0();
  const validator1 = Polyform$dBatteries$dInt.validator(Applicative0);
  return dictBoundedEnum => p => Polyform$dValidator.lmapValidator(dictMonad)(Data$dFunctor.arrayMap(flattenEnumErr))((() => {
    const $0 = Polyform$dBatteries$dGeneric$dEnum.validator(Applicative0)(dictBoundedEnum)(p);
    return i => dictMonad.Bind1().bind(validator1(i))(res$p => {
      if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
      if (res$p.tag === "Right") { return $0(res$p._1); }
      $runtime.fail();
    });
  })());
};
const enum$p = dictMonad => {
  const Applicative0 = dictMonad.Applicative0();
  const validator = Polyform$dBatteries$dInt.validator(Applicative0);
  return dictBoundedEnum => Polyform$dValidator.lmapValidator(dictMonad)(Data$dFunctor.arrayMap(flattenEnumErr))((() => {
    const $0 = Polyform$dBatteries$dGeneric$dEnum.validator(Applicative0)(dictBoundedEnum)(Type$dProxy.Proxy);
    return i => dictMonad.Bind1().bind(validator(i))(res$p => {
      if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
      if (res$p.tag === "Right") { return $0(res$p._1); }
      $runtime.fail();
    });
  })());
};
const _booleanExpected = Type$dProxy.Proxy;
const $$boolean = dictApplicative => x => dictApplicative.pure((() => {
  if (x.tag === "Just") {
    if (x._1.length === 1 && x._1[0] === "on") { return Data$dEither.$Either("Right", true); }
    return Data$dEither.$Either("Left", Polyform$dBatteries.error()({reflectSymbol: () => "booleanExpected"})(Type$dProxy.Proxy)(v => "Boolean expected")(x._1));
  }
  if (x.tag === "Nothing") { return Data$dEither.$Either("Right", false); }
  $runtime.fail();
})());
export {
  _booleanExpected,
  _missingValue,
  $$boolean as boolean,
  $$enum as enum,
  enum$p,
  flattenEnumErr,
  missingValue,
  optValidator,
  optional,
  optionalMulti,
  required,
  required$p,
  requiredMulti,
  requiredMulti$p,
  value,
  valueArray
};
