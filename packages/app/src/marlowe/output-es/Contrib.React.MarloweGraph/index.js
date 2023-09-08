import * as $runtime from "../runtime.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Foreign from "../Foreign/index.js";
import * as Language$dMarlowe$dCore$dV1$dSemantics$dTypes from "../Language.Marlowe.Core.V1.Semantics.Types/index.js";
import * as React$dBasic from "../React.Basic/index.js";
import {_MarloweGraph} from "./foreign.js";
const MarloweJson = x => x;
const toContractJson = x => Language$dMarlowe$dCore$dV1$dSemantics$dTypes.encodeJsonContract.encodeJson(x);
const branchIndex = v => {
  if (v.tag === "WhenBranch") { return v._1; }
  if (v.tag === "IfBranch") {
    if (v._1) { return Data$dMaybe.$Maybe("Just", 1); }
    return Data$dMaybe.$Maybe("Just", 0);
  }
  $runtime.fail();
};
const executionPathIndicies = /* #__PURE__ */ (() => Data$dList$dTypes.foldableList.foldMap(Data$dMonoid.monoidArray)(v => Data$dFunctor.arrayMap(branchIndex)(Data$dFunctor.arrayMap(Data$dTuple.fst)(v._2))))();
const marloweGraph = () => props => React$dBasic.element(_MarloweGraph)({
  contract: Language$dMarlowe$dCore$dV1$dSemantics$dTypes.encodeJsonContract.encodeJson(props.contract),
  path: Data$dFunctor.arrayMap(Data$dNullable.toNullable)(executionPathIndicies(Foreign.isUndefined(props.executionPath) ? Data$dList$dTypes.Nil : props.executionPath))
});
export {MarloweJson, branchIndex, executionPathIndicies, marloweGraph, toContractJson};
export * from "./foreign.js";
