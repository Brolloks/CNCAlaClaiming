import * as $runtime from "../runtime.js";
import * as CardanoMultiplatformLib$dTypes from "../CardanoMultiplatformLib.Types/index.js";
import * as Component$dTypes$dAppTags from "../Component.Types.AppTags/index.js";
import * as Contrib$dCardano from "../Contrib.Cardano/index.js";
import * as Contrib$dData$dArray$dNonEmpty from "../Contrib.Data.Array.NonEmpty/index.js";
import * as Contrib$dWeb$dSubtleCrypto from "../Contrib.Web.SubtleCrypto/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Data$dUnfoldable from "../Data.Unfoldable/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as HexString from "../HexString/index.js";
import * as Language$dMarlowe$dCore$dV1$dSemantics$dTypes from "../Language.Marlowe.Core.V1.Semantics.Types/index.js";
import * as Marlowe$dRuntime$dWeb$dTypes from "../Marlowe.Runtime.Web.Types/index.js";
import * as Partial from "../Partial/index.js";
const $ContractStatus = (tag, _1) => ({tag, _1});
const $OnChainContractThreadContinuation = (tag, _1) => ({tag, _1});
const $OnChainContractsThread = (tag, _1) => ({tag, _1});
const $PricePolicy = (tag, _1) => ({tag, _1});
const $RaffleOnChainStatus = _1 => ({tag: "RaffleOnChainStatus", _1});
const $RaffleRoundContract = (tag, _1) => ({tag, _1});
const eq2 = /* #__PURE__ */ Data$dEq.eqArrayImpl(x => y => Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqContract.eq(x._1)(y._1) && Contrib$dCardano.eq5(x._2)(y._2));
const fromFoldable = /* #__PURE__ */ Data$dMap$dInternal.fromFoldable(Data$dOrd.ordString)(Data$dFoldable.foldableArray);
const $$for = /* #__PURE__ */ (() => {
  const traverse2 = Data$dTraversable.traversableArray.traverse(Data$dEither.applicativeEither);
  return x => f => traverse2(f)(x);
})();
const ordTuple = /* #__PURE__ */ Data$dTuple.ordTuple(Contrib$dCardano.ordPolicyId)(Contrib$dCardano.ordAssetName);
const sort = /* #__PURE__ */ (() => {
  const compare = Data$dTuple.ordTuple(ordTuple)(Contrib$dCardano.ordQuantity).compare;
  return x => Data$dArray.sortBy(compare)(x);
})();
const fromFoldable1 = /* #__PURE__ */ Data$dMap$dInternal.fromFoldable(ordTuple)(Data$dFoldable.foldableArray);
const RaffleOrganizer = x => x;
const RaffleDeploymentPlan = x => x;
const PremintedPricePolicy = value0 => $PricePolicy("PremintedPricePolicy", value0);
const MintPricePolicy = value0 => $PricePolicy("MintPricePolicy", value0);
const OngoingContract = /* #__PURE__ */ $OnChainContractThreadContinuation("OngoingContract");
const ClosedWithoutSuccessor = /* #__PURE__ */ $OnChainContractThreadContinuation("ClosedWithoutSuccessor");
const ClosedWithSuccessor = value0 => $OnChainContractThreadContinuation("ClosedWithSuccessor", value0);
const OnChainPriceChunkDeposit = value0 => $OnChainContractsThread("OnChainPriceChunkDeposit", value0);
const OnChainRaffle = value0 => $OnChainContractsThread("OnChainRaffle", value0);
const RaffleOnChainStatus = value0 => $RaffleOnChainStatus(value0);
const OffChain = /* #__PURE__ */ $ContractStatus("OffChain");
const Ongoing = value0 => $ContractStatus("Ongoing", value0);
const Closed = value0 => $ContractStatus("Closed", value0);
const PriceFundingContracts = x => x;
const AwaitsPreviousRoundContract = value0 => $RaffleRoundContract("AwaitsPreviousRoundContract", value0);
const RaffleInitialRoundContract = value0 => $RaffleRoundContract("RaffleInitialRoundContract", value0);
const RaffleContracts = x => x;
const showRaffleOrganizer = Data$dShow.showString;
const eqRaffleOrganizer = {eq: x => y => x === y};
const ordRaffleOrganizer = {compare: x => y => Data$dOrd.ordString.compare(x)(y), Eq0: () => eqRaffleOrganizer};
const eqPricePolicy = {
  eq: x => y => {
    if (x.tag === "PremintedPricePolicy") { return y.tag === "PremintedPricePolicy" && x._1 === y._1; }
    return x.tag === "MintPricePolicy" && y.tag === "MintPricePolicy" && x._1 === y._1;
  }
};
const eqContractStatus = dictEq => dictEq1 => (
  {
    eq: x => y => {
      if (x.tag === "OffChain") { return y.tag === "OffChain"; }
      if (x.tag === "Ongoing") { return y.tag === "Ongoing" && dictEq.eq(x._1)(y._1); }
      return x.tag === "Closed" && y.tag === "Closed" && dictEq1.eq(x._1)(y._1);
    }
  }
);
const eqPriceFundingContracts = {
  eq: x => y => (() => {
    if (x.contractStatus.tag === "OffChain") { return y.contractStatus.tag === "OffChain"; }
    if (x.contractStatus.tag === "Ongoing") { return y.contractStatus.tag === "Ongoing"; }
    return x.contractStatus.tag === "Closed" && y.contractStatus.tag === "Closed";
  })() && eq2(x.initialContracts)(y.initialContracts) && x.priceAssetName === y.priceAssetName
};
const eqRaffleRoundContract = {
  eq: x => y => {
    if (x.tag === "AwaitsPreviousRoundContract") { return y.tag === "AwaitsPreviousRoundContract" && x._1.priceAssetName === y._1.priceAssetName; }
    return x.tag === "RaffleInitialRoundContract" && y.tag === "RaffleInitialRoundContract" && (() => {
      if (x._1.contractStatus.tag === "OffChain") { return y._1.contractStatus.tag === "OffChain"; }
      if (x._1.contractStatus.tag === "Ongoing") { return y._1.contractStatus.tag === "Ongoing"; }
      return x._1.contractStatus.tag === "Closed" && y._1.contractStatus.tag === "Closed";
    })() && Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqContract.eq(x._1.initilContract)(y._1.initilContract) && x._1.priceAssetName === y._1.priceAssetName;
  }
};
const eq8 = /* #__PURE__ */ Data$dEq.eqArrayImpl(x => y => eqRaffleRoundContract.eq(x._1)(y._1) && eqPriceFundingContracts.eq(x._2)(y._2));
const eqRaffleContracts = {
  eq: x => y => (x.pricePolicy.tag === "PremintedPricePolicy"
    ? y.pricePolicy.tag === "PremintedPricePolicy" && x.pricePolicy._1 === y.pricePolicy._1
    : x.pricePolicy.tag === "MintPricePolicy" && y.pricePolicy.tag === "MintPricePolicy" && x.pricePolicy._1 === y.pricePolicy._1) && eq8(x.rounds)(y.rounds)
};
const unsafeDecodeAssetName = v => {
  const v1 = HexString.utf8HexToString(v);
  if (v1.tag === "Nothing") { return Partial._crashWith("Component.Types.rolesConfigFromPlan: Invalid encoding of asset name?"); }
  if (v1.tag === "Just") { return v1._1; }
  $runtime.fail();
};
const rolesConfigFromPlan = v => {
  if (v.priceTokensCurrency.tag === "Just") { return Marlowe$dRuntime$dWeb$dTypes.$RolesConfig("UsePolicy", v.priceTokensCurrency._1); }
  if (v.priceTokensCurrency.tag === "Nothing") {
    return Marlowe$dRuntime$dWeb$dTypes.$RolesConfig(
      "Mint",
      fromFoldable(Data$dFunctor.arrayMap(an => Data$dTuple.$Tuple(unsafeDecodeAssetName(an), Marlowe$dRuntime$dWeb$dTypes.$RoleTokenConfig("RoleTokenSimple", v.organizer)))(Data$dFunctor.arrayMap(v1 => v1.priceAssetName)(v.rounds)))
    );
  }
  $runtime.fail();
};
const mkRaffleContracts = v => possibleStatus => {
  const $0 = (() => {
    if (possibleStatus.tag === "Just") {
      if (possibleStatus._1._1.minted) { return Data$dEither.$Either("Right", $PricePolicy("PremintedPricePolicy", possibleStatus._1._1.pricePolicyId)); }
      if (v.priceTokensCurrency.tag === "Just") { return Data$dEither.$Either("Right", $PricePolicy("PremintedPricePolicy", v.priceTokensCurrency._1)); }
      if (v.priceTokensCurrency.tag === "Nothing") { return Data$dEither.$Either("Left", "Component.Types.raffleContratcs: Invalid initialization"); }
      $runtime.fail();
    }
    if (possibleStatus.tag === "Nothing") { return Data$dEither.$Either("Right", $PricePolicy("MintPricePolicy", v.organizer)); }
    $runtime.fail();
  })();
  return (() => {
    if ($0.tag === "Left") {
      const $1 = $0._1;
      return v$1 => Data$dEither.$Either("Left", $1);
    }
    if ($0.tag === "Right") {
      const $1 = $0._1;
      return f => f($1);
    }
    $runtime.fail();
  })()(pricePolicy => {
    const $1 = Data$dArray.uncons(v.rounds);
    const v1 = (() => {
      if ($1.tag === "Just") { return $1._1; }
      $runtime.fail();
    })();
    const rounds = [
      $RaffleRoundContract(
        "RaffleInitialRoundContract",
        {contractStatus: OffChain, initilContract: Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Close, priceAssetName: v1.head.priceAssetName}
      ),
      ...Data$dFunctor.arrayMap(v2 => $RaffleRoundContract("AwaitsPreviousRoundContract", {priceAssetName: v2.priceAssetName}))(v1.tail)
    ];
    const $2 = $$for(v.rounds)(v1$1 => {
      const $2 = Data$dMap$dInternal.toUnfoldable(Data$dUnfoldable.unfoldableArray)(v1$1.tokenBundle);
      if ($2.length > 0) {
        return Data$dEither.$Either(
          "Right",
          {
            contractStatus: OffChain,
            initialContracts: Data$dFunctor.arrayMap(tokenBundleChunk => Data$dTuple.$Tuple(
              Data$dFoldable.foldrArray(v2 => accContract => Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Contract(
                "When",
                [
                  Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Case(
                    "Case",
                    Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Action(
                      "Deposit",
                      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Role", unsafeDecodeAssetName(v1$1.priceAssetName)),
                      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Party("Address", v.organizer),
                      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Token(v2._1._1, unsafeDecodeAssetName(v2._1._2)),
                      Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Value("Constant", v2._2)
                    ),
                    accContract
                  )
                ],
                v.contractsTimeout,
                Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Close
              ))(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Close)(tokenBundleChunk),
              fromFoldable1(tokenBundleChunk)
            ))(Contrib$dData$dArray$dNonEmpty.chunks(5)(sort($2))),
            priceAssetName: v1$1.priceAssetName
          }
        );
      }
      return Data$dEither.$Either("Left", "Component.Types.mkRaffleContracts: Invalid token bundle");
    });
    return (() => {
      if ($2.tag === "Left") {
        const $3 = $2._1;
        return v$1 => Data$dEither.$Either("Left", $3);
      }
      if ($2.tag === "Right") {
        const $3 = $2._1;
        return f => f($3);
      }
      $runtime.fail();
    })()(priceFunding => Data$dEither.$Either("Right", {rounds: Data$dArray.zip(rounds)(priceFunding), pricePolicy}));
  });
};
const initialDepositTagsFromPlan = v => Effect$dAff._bind(Contrib$dWeb$dSubtleCrypto.digestString("SHA-256")(Data$dString$dCommon.joinWith(",")(Data$dFunctor.arrayMap(CardanoMultiplatformLib$dTypes.bech32ToString)(v.participants))))(possibleParticipantsFingerprint => Data$dTraversable.traversableMaybe.traverse(Effect$dAff.applicativeAff)(participantsFingerprint => Effect$dAff._pure(Component$dTypes$dAppTags.$RaffleTags(
  "InitialPriceChunkDeposit",
  {
    rounds: v.rounds,
    minted: (() => {
      if (v.priceTokensCurrency.tag === "Nothing") { return true; }
      if (v.priceTokensCurrency.tag === "Just") { return false; }
      $runtime.fail();
    })(),
    participantsFingerprint
  }
)))(possibleParticipantsFingerprint));
export {
  $ContractStatus,
  $OnChainContractThreadContinuation,
  $OnChainContractsThread,
  $PricePolicy,
  $RaffleOnChainStatus,
  $RaffleRoundContract,
  AwaitsPreviousRoundContract,
  Closed,
  ClosedWithSuccessor,
  ClosedWithoutSuccessor,
  MintPricePolicy,
  OffChain,
  OnChainPriceChunkDeposit,
  OnChainRaffle,
  Ongoing,
  OngoingContract,
  PremintedPricePolicy,
  PriceFundingContracts,
  RaffleContracts,
  RaffleDeploymentPlan,
  RaffleInitialRoundContract,
  RaffleOnChainStatus,
  RaffleOrganizer,
  eq2,
  eq8,
  eqContractStatus,
  eqPriceFundingContracts,
  eqPricePolicy,
  eqRaffleContracts,
  eqRaffleOrganizer,
  eqRaffleRoundContract,
  $$for as for,
  fromFoldable,
  fromFoldable1,
  initialDepositTagsFromPlan,
  mkRaffleContracts,
  ordRaffleOrganizer,
  ordTuple,
  rolesConfigFromPlan,
  showRaffleOrganizer,
  sort,
  unsafeDecodeAssetName
};
