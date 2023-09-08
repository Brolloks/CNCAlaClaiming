// | You can use `Batteries.Integer.dual` or `Batteries.Number.dual` or any
// | other `String` based dual as value dual here.
import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Polyform$dBatteries from "../Polyform.Batteries/index.js";
import * as Polyform$dBatteries$dGeneric$dEnum from "../Polyform.Batteries.Generic.Enum/index.js";
import * as Polyform$dBatteries$dInt from "../Polyform.Batteries.Int/index.js";
import * as Polyform$dBatteries$dUrlEncoded$dValidators from "../Polyform.Batteries.UrlEncoded.Validators/index.js";
import * as Polyform$dDual from "../Polyform.Dual/index.js";
import * as Polyform$dValidator from "../Polyform.Validator/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const valueArray = dictMonad => {
  const $0 = dictMonad.Applicative0();
  return Polyform$dDual.$DualD(
    x => $0.pure(Data$dEither.$Either(
      "Right",
      (() => {
        if (x.tag === "Just") { return x._1; }
        if (x.tag === "Nothing") { return []; }
        $runtime.fail();
      })()
    )),
    x => Data$dMaybe.$Maybe("Just", x)
  );
};
const value = dictMonad => {
  const value1 = Polyform$dBatteries$dUrlEncoded$dValidators.value(dictMonad.Applicative0());
  return err => Polyform$dDual.$DualD(value1(err), x => Data$dMaybe.$Maybe("Just", [x]));
};
const required = dictMonad => {
  const required1 = Polyform$dBatteries$dUrlEncoded$dValidators.required(dictMonad);
  return name => err => d => Polyform$dDual.$DualD(
    required1(name)(err)(d._1),
    o => Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, name, [d._2(o)], Data$dMap$dInternal.Leaf)
  );
};
const required$p = dictMonad => {
  const required1 = required(dictMonad);
  return name => d => required1(name)(Polyform$dBatteries.msg$p({reflectSymbol: () => "missingValue"})()("Missing value")(Type$dProxy.Proxy)({}))(d);
};
const optional = dictMonad => {
  const optional1 = Polyform$dBatteries$dUrlEncoded$dValidators.optional(dictMonad);
  return name => d => Polyform$dDual.$DualD(
    optional1(name)(d._1),
    v => {
      if (v.tag === "Just") { return Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, name, [d._2(v._1)], Data$dMap$dInternal.Leaf); }
      if (v.tag === "Nothing") { return Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, name, [], Data$dMap$dInternal.Leaf); }
      $runtime.fail();
    }
  );
};
const enum$p = dictMonad => {
  const Applicative0 = dictMonad.Applicative0();
  const $0 = Polyform$dBatteries$dInt.validator(Applicative0);
  return dictBoundedEnum => {
    const $1 = Polyform$dBatteries$dGeneric$dEnum.validator(Applicative0)(dictBoundedEnum)(Type$dProxy.Proxy);
    return Polyform$dDual.$DualD(
      Polyform$dValidator.lmapValidator(dictMonad)(Data$dFunctor.arrayMap(Polyform$dBatteries$dUrlEncoded$dValidators.flattenEnumErr))(i => dictMonad.Bind1().bind($0(i))(res$p => {
        if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
        if (res$p.tag === "Right") { return $1(res$p._1); }
        $runtime.fail();
      })),
      a => Data$dShow.showIntImpl(dictBoundedEnum.fromEnum(a))
    );
  };
};
const $$enum = dictMonad => {
  const Applicative0 = dictMonad.Applicative0();
  const $0 = Polyform$dBatteries$dInt.validator(Applicative0);
  return dictBoundedEnum => p => {
    const $1 = Polyform$dBatteries$dGeneric$dEnum.validator(Applicative0)(dictBoundedEnum)(p);
    return Polyform$dDual.$DualD(
      Polyform$dValidator.lmapValidator(dictMonad)(Data$dFunctor.arrayMap(Polyform$dBatteries$dUrlEncoded$dValidators.flattenEnumErr))(i => dictMonad.Bind1().bind($0(i))(res$p => {
        if (res$p.tag === "Left") { return dictMonad.Applicative0().pure(Data$dEither.$Either("Left", res$p._1)); }
        if (res$p.tag === "Right") { return $1(res$p._1); }
        $runtime.fail();
      })),
      a => Data$dShow.showIntImpl(dictBoundedEnum.fromEnum(a))
    );
  };
};
const $$boolean = dictMonad => Polyform$dDual.$DualD(
  Polyform$dBatteries$dUrlEncoded$dValidators.boolean(dictMonad.Applicative0()),
  x => {
    if (x) { return Data$dMaybe.$Maybe("Just", ["on"]); }
    return Data$dMaybe.$Maybe("Just", ["off"]);
  }
);
export {$$boolean as boolean, $$enum as enum, enum$p, optional, required, required$p, value, valueArray};
