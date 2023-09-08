import * as $runtime from "../runtime.js";
import * as Data$dArgonaut$dDecode$dClass from "../Data.Argonaut.Decode.Class/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dDateTime$dInstant from "../Data.DateTime.Instant/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dSemigroup from "../Data.Semigroup/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Data$dValidation$dSemigroup from "../Data.Validation.Semigroup/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Language$dMarlowe$dCore$dV1$dSemantics$dTypes from "../Language.Marlowe.Core.V1.Semantics.Types/index.js";
import * as Marlowe$dRuntime$dWeb$dClient from "../Marlowe.Runtime.Web.Client/index.js";
import * as Marlowe$dRuntime$dWeb$dTypes from "../Marlowe.Runtime.Web.Types/index.js";
const $UserContractRole = tag => tag;
const eq1 = x => y => {
  if (x.tag === "Nothing") { return y.tag === "Nothing"; }
  return x.tag === "Just" && y.tag === "Just" && Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqContract.eq(x._1)(y._1);
};
const eq4 = x => y => {
  if (x.tag === "Nothing") { return y.tag === "Nothing"; }
  return x.tag === "Just" && y.tag === "Just" && Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqState.eq(x._1)(y._1);
};
const eq5 = /* #__PURE__ */ (() => Data$dEq.eqArrayImpl(Marlowe$dRuntime$dWeb$dTypes.eqPayout.eq))();
const parTraverse = /* #__PURE__ */ (() => {
  const traverse = Data$dTraversable.traversableArray.traverse(Effect$dAff.applicativeParAff);
  return f => {
    const $0 = traverse(x => f(x));
    return x => Effect$dAff._sequential($0(x));
  };
})();
const getResource$p = /* #__PURE__ */ Marlowe$dRuntime$dWeb$dClient.getResource$p(/* #__PURE__ */ Data$dArgonaut$dDecode$dClass.decodeRecord(/* #__PURE__ */ Data$dArgonaut$dDecode$dClass.gDecodeJsonCons(/* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dDecode$dClass.decodeRecord(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons(Data$dArgonaut$dDecode$dClass.decodeFieldMaybe(Marlowe$dRuntime$dWeb$dTypes.decodeJsonResourceLink))(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons(Data$dArgonaut$dDecode$dClass.decodeFieldMaybe(Marlowe$dRuntime$dWeb$dTypes.decodeJsonResourceLink))(Data$dArgonaut$dDecode$dClass.gDecodeJsonNil)({
    reflectSymbol: () => "previous"
  })()())({reflectSymbol: () => "next"})()())();
  return {
    decodeJsonField: j => {
      if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0.decodeJson(j._1)); }
      return Data$dMaybe.Nothing;
    }
  };
})())(/* #__PURE__ */ Data$dArgonaut$dDecode$dClass.gDecodeJsonCons({
  decodeJsonField: j => {
    if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", Marlowe$dRuntime$dWeb$dTypes.decodeJsonTx.decodeJson(j._1)); }
    return Data$dMaybe.Nothing;
  }
})(Data$dArgonaut$dDecode$dClass.gDecodeJsonNil)({reflectSymbol: () => "resource"})()())({reflectSymbol: () => "links"})()())())(Marlowe$dRuntime$dWeb$dTypes.decodeJsonApiErrorString)()()({
  toResourceLink: x => x
})(Marlowe$dRuntime$dWeb$dTypes.queryParamsTransactionEnd);
const foldMapFlipped = /* #__PURE__ */ (() => {
  const $0 = Data$dFoldable.foldableArray.foldMap(Data$dValidation$dSemigroup.monoidV(Data$dSemigroup.semigroupArray)(Data$dMonoid.monoidArray));
  return b => a => $0(a)(b);
})();
const ContractParty = /* #__PURE__ */ $UserContractRole("ContractParty");
const ContractCounterParty = /* #__PURE__ */ $UserContractRole("ContractCounterParty");
const BothParties = /* #__PURE__ */ $UserContractRole("BothParties");
const MarloweInfo = x => x;
const ContractInfo = x => x;
const newtypeContractInfo_ = {Coercible0: () => {}};
const genericUserContractRole_ = {
  to: x => {
    if (x.tag === "Inl") { return ContractParty; }
    if (x.tag === "Inr") {
      if (x._1.tag === "Inl") { return ContractCounterParty; }
      if (x._1.tag === "Inr") { return BothParties; }
    }
    $runtime.fail();
  },
  from: x => {
    if (x === "ContractParty") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments); }
    if (x === "ContractCounterParty") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)); }
    if (x === "BothParties") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments)); }
    $runtime.fail();
  }
};
const showUserContractRole = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "ContractParty"});
    const $1 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "ContractCounterParty"});
    const $2 = (() => {
      const $2 = (() => {
        const $2 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "BothParties"});
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
    return x => $2["genericShow'"](genericUserContractRole_.from(x));
  })()
};
const eqMarloweInfo = {
  eq: x => y => (x.currencySymbol.tag === "Nothing"
    ? y.currencySymbol.tag === "Nothing"
    : x.currencySymbol.tag === "Just" && y.currencySymbol.tag === "Just" && x.currencySymbol._1 === y.currencySymbol._1) && eq1(x.currentContract)(y.currentContract) && Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqContract.eq(x.initialContract)(y.initialContract) && Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqState.eq(x.initialState)(y.initialState) && eq4(x.state)(y.state) && eq5(x.unclaimedPayouts)(y.unclaimedPayouts)
};
const fetchAppliedInputs = serverURL => transactionEndpoints => Effect$dAff._bind(parTraverse(transactionEndpoint => getResource$p(serverURL)(transactionEndpoint)({})({}))(transactionEndpoints))(results => Effect$dAff._pure(foldMapFlipped(results)(v => {
  if (v.tag === "Left") { return Data$dEither.$Either("Left", [v._1]); }
  if (v.tag === "Right") {
    const $0 = v._1.payload.resource.inputs;
    const timeInterval = Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$TimeInterval(
      Data$dDateTime$dInstant.fromDateTime(v._1.payload.resource.invalidBefore),
      Data$dDateTime$dInstant.fromDateTime(v._1.payload.resource.invalidHereafter)
    );
    return Data$dEither.$Either(
      "Right",
      (() => {
        const v1 = Data$dArray.uncons($0);
        if (v1.tag === "Just") {
          return Data$dFunctor.arrayMap(input => Data$dTuple.$Tuple(
            Data$dMaybe.$Maybe(
              "Just",
              (() => {
                if (input.tag === "NormalInput") { return input._1; }
                if (input.tag === "MerkleizedInput") { return input._1; }
                $runtime.fail();
              })()
            ),
            timeInterval
          ))($0);
        }
        if (v1.tag === "Nothing") { return [Data$dTuple.$Tuple(Data$dMaybe.Nothing, timeInterval)]; }
        $runtime.fail();
      })()
    );
  }
  $runtime.fail();
})));
const createdAt = v => v._runtime.contractHeader.block;
const updatedAt = v => {
  const $0 = Data$dArray.index(v._runtime.transactions)(0);
  const $1 = (() => {
    if ($0.tag === "Just") { return $0._1._1.block; }
    if ($0.tag === "Nothing") { return Data$dMaybe.Nothing; }
    $runtime.fail();
  })();
  if ($1.tag === "Nothing") { return v._runtime.contractHeader.block; }
  return $1;
};
export {
  $UserContractRole,
  BothParties,
  ContractCounterParty,
  ContractInfo,
  ContractParty,
  MarloweInfo,
  createdAt,
  eq1,
  eq4,
  eq5,
  eqMarloweInfo,
  fetchAppliedInputs,
  foldMapFlipped,
  genericUserContractRole_,
  getResource$p,
  newtypeContractInfo_,
  parTraverse,
  showUserContractRole,
  updatedAt
};
