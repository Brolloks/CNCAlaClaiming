import * as $runtime from "../runtime.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunction from "../Data.Function/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dSet from "../Data.Set/index.js";
import * as Language$dMarlowe$dCore$dV1$dSemantics$dTypes from "../Language.Marlowe.Core.V1.Semantics.Types/index.js";
const foldMap = /* #__PURE__ */ (() => Data$dFoldable.foldableArray.foldMap({
  mempty: Data$dMap$dInternal.Leaf,
  Semigroup0: () => ({append: Data$dSet.union(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)})
}))();
const semanticPartyHasParties = {getParties: party => Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, party, undefined, Data$dMap$dInternal.Leaf)};
const getParties = dict => dict.getParties;
const semanticChoiceIdHasParties = {getParties: v => Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, v._2, undefined, Data$dMap$dInternal.Leaf)};
const semanticPayeeHasParties = {
  getParties: v => {
    if (v.tag === "Account") { return Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, v._1, undefined, Data$dMap$dInternal.Leaf); }
    if (v.tag === "Party") { return Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, v._1, undefined, Data$dMap$dInternal.Leaf); }
    $runtime.fail();
  }
};
const semanticValueHasParties = {
  getParties: v => {
    if (v.tag === "AvailableMoney") { return Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, v._1, undefined, Data$dMap$dInternal.Leaf); }
    if (v.tag === "Constant") { return Data$dMap$dInternal.Leaf; }
    if (v.tag === "NegValue") { return semanticValueHasParties.getParties(v._1); }
    if (v.tag === "AddValue") {
      return Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(semanticValueHasParties.getParties(v._1))(semanticValueHasParties.getParties(v._2));
    }
    if (v.tag === "SubValue") {
      return Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(semanticValueHasParties.getParties(v._1))(semanticValueHasParties.getParties(v._2));
    }
    if (v.tag === "MulValue") {
      return Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(semanticValueHasParties.getParties(v._1))(semanticValueHasParties.getParties(v._2));
    }
    if (v.tag === "DivValue") {
      return Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(semanticValueHasParties.getParties(v._1))(semanticValueHasParties.getParties(v._2));
    }
    if (v.tag === "ChoiceValue") { return Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, v._1._2, undefined, Data$dMap$dInternal.Leaf); }
    if (v.tag === "TimeIntervalStart") { return Data$dMap$dInternal.Leaf; }
    if (v.tag === "TimeIntervalEnd") { return Data$dMap$dInternal.Leaf; }
    if (v.tag === "UseValue") { return Data$dMap$dInternal.Leaf; }
    if (v.tag === "Cond") {
      return Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(semanticObservationHasParties.getParties(v._1))(Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(semanticValueHasParties.getParties(v._2))(semanticValueHasParties.getParties(v._3)));
    }
    $runtime.fail();
  }
};
const semanticObservationHasParties = {
  getParties: v => {
    if (v.tag === "AndObs") {
      return Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(semanticObservationHasParties.getParties(v._1))(semanticObservationHasParties.getParties(v._2));
    }
    if (v.tag === "OrObs") {
      return Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(semanticObservationHasParties.getParties(v._1))(semanticObservationHasParties.getParties(v._2));
    }
    if (v.tag === "NotObs") { return semanticObservationHasParties.getParties(v._1); }
    if (v.tag === "ChoseSomething") { return Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, v._1._2, undefined, Data$dMap$dInternal.Leaf); }
    if (v.tag === "ValueGE") {
      return Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(semanticValueHasParties.getParties(v._1))(semanticValueHasParties.getParties(v._2));
    }
    if (v.tag === "ValueGT") {
      return Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(semanticValueHasParties.getParties(v._1))(semanticValueHasParties.getParties(v._2));
    }
    if (v.tag === "ValueLT") {
      return Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(semanticValueHasParties.getParties(v._1))(semanticValueHasParties.getParties(v._2));
    }
    if (v.tag === "ValueLE") {
      return Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(semanticValueHasParties.getParties(v._1))(semanticValueHasParties.getParties(v._2));
    }
    if (v.tag === "ValueEQ") {
      return Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(semanticValueHasParties.getParties(v._1))(semanticValueHasParties.getParties(v._2));
    }
    if (v.tag === "TrueObs") { return Data$dMap$dInternal.Leaf; }
    if (v.tag === "FalseObs") { return Data$dMap$dInternal.Leaf; }
    $runtime.fail();
  }
};
const semanticActionHasParties = {
  getParties: v => {
    if (v.tag === "Deposit") {
      return Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(Data$dMap$dInternal.$$$Map(
        "Two",
        Data$dMap$dInternal.Leaf,
        v._1,
        undefined,
        Data$dMap$dInternal.Leaf
      ))(Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(Data$dMap$dInternal.$$$Map(
        "Two",
        Data$dMap$dInternal.Leaf,
        v._2,
        undefined,
        Data$dMap$dInternal.Leaf
      ))(semanticValueHasParties.getParties(v._4)));
    }
    if (v.tag === "Choice") { return Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, v._1._2, undefined, Data$dMap$dInternal.Leaf); }
    if (v.tag === "Notify") { return semanticObservationHasParties.getParties(v._1); }
    $runtime.fail();
  }
};
const extendedPayeeHasParties = {
  getParties: v => {
    if (v.tag === "Account") { return Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, v._1, undefined, Data$dMap$dInternal.Leaf); }
    if (v.tag === "Party") { return Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, v._1, undefined, Data$dMap$dInternal.Leaf); }
    $runtime.fail();
  }
};
const extendedValueHasParties = {
  getParties: v => {
    if (v.tag === "AvailableMoney") { return Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, v._1, undefined, Data$dMap$dInternal.Leaf); }
    if (v.tag === "Constant") { return Data$dMap$dInternal.Leaf; }
    if (v.tag === "ConstantParam") { return Data$dMap$dInternal.Leaf; }
    if (v.tag === "NegValue") { return extendedValueHasParties.getParties(v._1); }
    if (v.tag === "AddValue") {
      return Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(extendedValueHasParties.getParties(v._1))(extendedValueHasParties.getParties(v._2));
    }
    if (v.tag === "SubValue") {
      return Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(extendedValueHasParties.getParties(v._1))(extendedValueHasParties.getParties(v._2));
    }
    if (v.tag === "MulValue") {
      return Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(extendedValueHasParties.getParties(v._1))(extendedValueHasParties.getParties(v._2));
    }
    if (v.tag === "DivValue") {
      return Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(extendedValueHasParties.getParties(v._1))(extendedValueHasParties.getParties(v._2));
    }
    if (v.tag === "ChoiceValue") { return Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, v._1._2, undefined, Data$dMap$dInternal.Leaf); }
    if (v.tag === "TimeIntervalStart") { return Data$dMap$dInternal.Leaf; }
    if (v.tag === "TimeIntervalEnd") { return Data$dMap$dInternal.Leaf; }
    if (v.tag === "UseValue") { return Data$dMap$dInternal.Leaf; }
    if (v.tag === "Cond") {
      return Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(extendedObservationHasParties.getParties(v._1))(Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(extendedValueHasParties.getParties(v._2))(extendedValueHasParties.getParties(v._3)));
    }
    $runtime.fail();
  }
};
const extendedObservationHasParties = {
  getParties: v => {
    if (v.tag === "AndObs") {
      return Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(extendedObservationHasParties.getParties(v._1))(extendedObservationHasParties.getParties(v._2));
    }
    if (v.tag === "OrObs") {
      return Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(extendedObservationHasParties.getParties(v._1))(extendedObservationHasParties.getParties(v._2));
    }
    if (v.tag === "NotObs") { return extendedObservationHasParties.getParties(v._1); }
    if (v.tag === "ChoseSomething") { return Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, v._1._2, undefined, Data$dMap$dInternal.Leaf); }
    if (v.tag === "ValueGE") {
      return Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(extendedValueHasParties.getParties(v._1))(extendedValueHasParties.getParties(v._2));
    }
    if (v.tag === "ValueGT") {
      return Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(extendedValueHasParties.getParties(v._1))(extendedValueHasParties.getParties(v._2));
    }
    if (v.tag === "ValueLT") {
      return Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(extendedValueHasParties.getParties(v._1))(extendedValueHasParties.getParties(v._2));
    }
    if (v.tag === "ValueLE") {
      return Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(extendedValueHasParties.getParties(v._1))(extendedValueHasParties.getParties(v._2));
    }
    if (v.tag === "ValueEQ") {
      return Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(extendedValueHasParties.getParties(v._1))(extendedValueHasParties.getParties(v._2));
    }
    if (v.tag === "TrueObs") { return Data$dMap$dInternal.Leaf; }
    if (v.tag === "FalseObs") { return Data$dMap$dInternal.Leaf; }
    $runtime.fail();
  }
};
const extendedActionHasParties = {
  getParties: v => {
    if (v.tag === "Deposit") {
      return Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(Data$dMap$dInternal.$$$Map(
        "Two",
        Data$dMap$dInternal.Leaf,
        v._1,
        undefined,
        Data$dMap$dInternal.Leaf
      ))(Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(Data$dMap$dInternal.$$$Map(
        "Two",
        Data$dMap$dInternal.Leaf,
        v._2,
        undefined,
        Data$dMap$dInternal.Leaf
      ))(extendedValueHasParties.getParties(v._4)));
    }
    if (v.tag === "Choice") { return Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, v._1._2, undefined, Data$dMap$dInternal.Leaf); }
    if (v.tag === "Notify") { return extendedObservationHasParties.getParties(v._1); }
    $runtime.fail();
  }
};
const arrayHasParties = dictHasParties => ({getParties: foldMap(dictHasParties.getParties)});
const extendedContractHasParties = {
  getParties: v => {
    if (v.tag === "Close") { return Data$dMap$dInternal.Leaf; }
    if (v.tag === "Pay") {
      return Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(Data$dMap$dInternal.$$$Map(
        "Two",
        Data$dMap$dInternal.Leaf,
        v._1,
        undefined,
        Data$dMap$dInternal.Leaf
      ))(Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(extendedPayeeHasParties.getParties(v._2))(Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(extendedValueHasParties.getParties(v._4))(extendedContractHasParties.getParties(v._5))));
    }
    if (v.tag === "If") {
      return Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(extendedObservationHasParties.getParties(v._1))(Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(extendedContractHasParties.getParties(v._2))(extendedContractHasParties.getParties(v._3)));
    }
    if (v.tag === "When") {
      return Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(foldMap(extendedCaseHasParties.getParties)(v._1))(extendedContractHasParties.getParties(v._3));
    }
    if (v.tag === "Let") {
      return Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(extendedValueHasParties.getParties(v._2))(extendedContractHasParties.getParties(v._3));
    }
    if (v.tag === "Assert") {
      return Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(extendedObservationHasParties.getParties(v._1))(extendedContractHasParties.getParties(v._2));
    }
    $runtime.fail();
  }
};
const extendedCaseHasParties = {
  getParties: v => Data$dMap$dInternal.unionWith(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ordParty)(Data$dFunction.const)(extendedActionHasParties.getParties(v._1))(extendedContractHasParties.getParties(v._2))
};
export {
  arrayHasParties,
  extendedActionHasParties,
  extendedCaseHasParties,
  extendedContractHasParties,
  extendedObservationHasParties,
  extendedPayeeHasParties,
  extendedValueHasParties,
  foldMap,
  getParties,
  semanticActionHasParties,
  semanticChoiceIdHasParties,
  semanticObservationHasParties,
  semanticPartyHasParties,
  semanticPayeeHasParties,
  semanticValueHasParties
};
