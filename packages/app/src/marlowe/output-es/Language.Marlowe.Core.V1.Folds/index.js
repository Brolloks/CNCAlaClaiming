import * as $runtime from "../runtime.js";
import * as Control$dMonad$dState$dTrans from "../Control.Monad.State.Trans/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Language$dMarlowe$dCore$dV1$dTraversals from "../Language.Marlowe.Core.V1.Traversals/index.js";
const $MapStep = _1 => ({tag: "MapStep", _1});
const $Step = _1 => ({tag: "Step", _1});
const bind = /* #__PURE__ */ (() => Control$dMonad$dState$dTrans.bindStateT(Data$dIdentity.monadIdentity).bind)();
const modify = /* #__PURE__ */ (() => {
  const $0 = Control$dMonad$dState$dTrans.monadStateStateT(Data$dIdentity.monadIdentity);
  return f => $0.state(s => {
    const s$p = f(s);
    return Data$dTuple.$Tuple(s$p, s$p);
  });
})();
const pure = /* #__PURE__ */ (() => Control$dMonad$dState$dTrans.applicativeStateT(Data$dIdentity.monadIdentity).pure)();
const monadStateT = {
  Applicative0: () => Control$dMonad$dState$dTrans.applicativeStateT(Data$dIdentity.monadIdentity),
  Bind1: () => Control$dMonad$dState$dTrans.bindStateT(Data$dIdentity.monadIdentity)
};
const rewriteContractTopDown = /* #__PURE__ */ Language$dMarlowe$dCore$dV1$dTraversals.rewriteContractTopDown(monadStateT);
const rewriteContractBottomUp = /* #__PURE__ */ Language$dMarlowe$dCore$dV1$dTraversals.rewriteContractBottomUp(monadStateT);
const StepArgs = x => x;
const Step = value0 => $Step(value0);
const MapStep = value0 => $MapStep(value0);
const newtypeStepArgs_ = {Coercible0: () => {}};
const foldingVisitor = v => {
  const stepValue$p = (() => {
    if (v._1.stepValue.tag === "Nothing") { return x => x.accum; }
    if (v._1.stepValue.tag === "Just") { return v._1.stepValue._1; }
    $runtime.fail();
  })();
  const stepObservation$p = (() => {
    if (v._1.stepObservation.tag === "Nothing") { return x => x.accum; }
    if (v._1.stepObservation.tag === "Just") { return v._1.stepObservation._1; }
    $runtime.fail();
  })();
  const stepContract$p = (() => {
    if (v._1.stepContract.tag === "Nothing") { return x => x.accum; }
    if (v._1.stepContract.tag === "Just") { return v._1.stepContract._1; }
    $runtime.fail();
  })();
  const stepCase$p = (() => {
    if (v._1.stepCase.tag === "Nothing") { return x => x.accum; }
    if (v._1.stepCase.tag === "Just") { return v._1.stepCase._1; }
    $runtime.fail();
  })();
  return Language$dMarlowe$dCore$dV1$dTraversals.$Visitor({
    onCase: c => bind(modify(x => stepCase$p({node: c, accum: x})))(() => pure(c)),
    onContract: c => bind(modify(x => stepContract$p({node: c, accum: x})))(() => pure(c)),
    onObservation: c => bind(modify(x => stepObservation$p({node: c, accum: x})))(() => pure(c)),
    onValue: c => bind(modify(x => stepValue$p({node: c, accum: x})))(() => pure(c))
  });
};
const foldlContract = step => a => cntr => rewriteContractTopDown(foldingVisitor(step))(cntr)(a)._2;
const foldrContract = step => a => cntr => rewriteContractBottomUp(foldingVisitor(step))(cntr)(a)._2;
const foldMapContract = dictMonoid => {
  const $0 = dictMonoid.Semigroup0();
  const mempty = dictMonoid.mempty;
  return v => foldlContract($Step({
    stepCase: Data$dMaybe.$Maybe("Just", v1 => $0.append(v._1.mapCase(v1.node))(v1.accum)),
    stepContract: Data$dMaybe.$Maybe("Just", v1 => $0.append(v._1.mapContract(v1.node))(v1.accum)),
    stepObservation: Data$dMaybe.$Maybe("Just", v1 => $0.append(v._1.mapObservation(v1.node))(v1.accum)),
    stepValue: Data$dMaybe.$Maybe("Just", v1 => $0.append(v._1.mapValue(v1.node))(v1.accum))
  }))(mempty);
};
const foldMapContractFlipped = dictMonoid => {
  const $0 = foldMapContract(dictMonoid);
  return b => a => $0(a)(b);
};
const defaultStep = /* #__PURE__ */ $Step({stepCase: Data$dMaybe.Nothing, stepContract: Data$dMaybe.Nothing, stepObservation: Data$dMaybe.Nothing, stepValue: Data$dMaybe.Nothing});
const defaultMapStep = dictMonoid => {
  const mempty = dictMonoid.mempty;
  return $MapStep({mapCase: v => mempty, mapContract: v => mempty, mapObservation: v => mempty, mapValue: v => mempty});
};
export {
  $MapStep,
  $Step,
  MapStep,
  Step,
  StepArgs,
  bind,
  defaultMapStep,
  defaultStep,
  foldMapContract,
  foldMapContractFlipped,
  foldingVisitor,
  foldlContract,
  foldrContract,
  modify,
  monadStateT,
  newtypeStepArgs_,
  pure,
  rewriteContractBottomUp,
  rewriteContractTopDown
};
