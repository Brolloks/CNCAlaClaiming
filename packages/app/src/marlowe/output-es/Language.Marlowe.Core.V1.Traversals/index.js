import * as $runtime from "../runtime.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Language$dMarlowe$dCore$dV1$dSemantics$dTypes from "../Language.Marlowe.Core.V1.Semantics.Types/index.js";
const $Visitor = _1 => ({tag: "Visitor", _1});
const Visitor = value0 => $Visitor(value0);
const traverseValue = dictApplicative => {
  const Apply0 = dictApplicative.Apply0();
  const $0 = Apply0.Functor0();
  return v => v1 => {
    if (v1.tag === "AvailableMoney") { return dictApplicative.pure(v1); }
    if (v1.tag === "Constant") { return dictApplicative.pure(v1); }
    if (v1.tag === "NegValue") { return $0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.NegValue)(v._1.onValue(v1._1)); }
    if (v1.tag === "AddValue") { return Apply0.apply($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.AddValue)(v._1.onValue(v1._1)))(v._1.onValue(v1._2)); }
    if (v1.tag === "SubValue") { return Apply0.apply($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.SubValue)(v._1.onValue(v1._1)))(v._1.onValue(v1._2)); }
    if (v1.tag === "MulValue") { return Apply0.apply($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.MulValue)(v._1.onValue(v1._1)))(v._1.onValue(v1._2)); }
    if (v1.tag === "DivValue") { return Apply0.apply($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.DivValue)(v._1.onValue(v1._1)))(v._1.onValue(v1._2)); }
    if (v1.tag === "ChoiceValue") { return dictApplicative.pure(v1); }
    if (v1.tag === "TimeIntervalStart") { return dictApplicative.pure(v1); }
    if (v1.tag === "TimeIntervalEnd") { return dictApplicative.pure(v1); }
    if (v1.tag === "UseValue") { return dictApplicative.pure(v1); }
    if (v1.tag === "Cond") {
      return Apply0.apply(Apply0.apply($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Cond)(v._1.onObservation(v1._1)))(v._1.onValue(v1._2)))(v._1.onValue(v1._3));
    }
    $runtime.fail();
  };
};
const traverseObservation = dictApplicative => {
  const Apply0 = dictApplicative.Apply0();
  const $0 = Apply0.Functor0();
  return v => v1 => {
    if (v1.tag === "AndObs") { return Apply0.apply($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.AndObs)(v._1.onObservation(v1._1)))(v._1.onObservation(v1._2)); }
    if (v1.tag === "OrObs") { return Apply0.apply($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.OrObs)(v._1.onObservation(v1._1)))(v._1.onObservation(v1._2)); }
    if (v1.tag === "NotObs") { return $0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.NotObs)(v._1.onObservation(v1._1)); }
    if (v1.tag === "ValueGE") { return Apply0.apply($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ValueGE)(v._1.onValue(v1._1)))(v._1.onValue(v1._2)); }
    if (v1.tag === "ValueGT") { return Apply0.apply($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ValueGT)(v._1.onValue(v1._1)))(v._1.onValue(v1._2)); }
    if (v1.tag === "ValueLE") { return Apply0.apply($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ValueLE)(v._1.onValue(v1._1)))(v._1.onValue(v1._2)); }
    if (v1.tag === "ValueLT") { return Apply0.apply($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ValueLT)(v._1.onValue(v1._1)))(v._1.onValue(v1._2)); }
    if (v1.tag === "ValueEQ") { return Apply0.apply($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ValueEQ)(v._1.onValue(v1._1)))(v._1.onValue(v1._2)); }
    if (v1.tag === "TrueObs") { return dictApplicative.pure(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.TrueObs); }
    if (v1.tag === "FalseObs") { return dictApplicative.pure(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.FalseObs); }
    if (v1.tag === "ChoseSomething") { return dictApplicative.pure(v1); }
    $runtime.fail();
  };
};
const traverseContract = dictApplicative => {
  const Apply0 = dictApplicative.Apply0();
  const $0 = Apply0.Functor0();
  const traverse2 = Data$dTraversable.traversableArray.traverse(dictApplicative);
  return v => {
    const $1 = v._1.onCase;
    return v1 => {
      if (v1.tag === "Close") { return dictApplicative.pure(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Close); }
      if (v1.tag === "Pay") { return Apply0.apply($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Pay(v1._1)(v1._2)(v1._3))(v._1.onValue(v1._4)))(v._1.onContract(v1._5)); }
      if (v1.tag === "If") {
        return Apply0.apply(Apply0.apply($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.If)(v._1.onObservation(v1._1)))(v._1.onContract(v1._2)))(v._1.onContract(v1._3));
      }
      if (v1.tag === "When") {
        return Apply0.apply(Apply0.apply($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.When)(traverse2($1)(v1._1)))(dictApplicative.pure(v1._2)))(v._1.onContract(v1._3));
      }
      if (v1.tag === "Let") { return Apply0.apply($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Let(v1._1))(v._1.onValue(v1._2)))(v._1.onContract(v1._3)); }
      if (v1.tag === "Assert") { return Apply0.apply($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Assert)(v._1.onObservation(v1._1)))(v._1.onContract(v1._2)); }
      $runtime.fail();
    };
  };
};
const traverseCase = dictApplicative => {
  const Apply0 = dictApplicative.Apply0();
  const $0 = Apply0.Functor0();
  return v => v1 => {
    if (v1.tag === "Case") {
      if (v1._1.tag === "Deposit") {
        return Apply0.apply($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Case)($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Deposit(v1._1._1)(v1._1._2)(v1._1._3))(v._1.onValue(v1._1._4))))(v._1.onContract(v1._2));
      }
      return $0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Case(v1._1))(v._1.onContract(v1._2));
    }
    if (v1.tag === "MerkleizedCase" && v1._1.tag === "Deposit") {
      return Apply0.apply($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.MerkleizedCase)($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Deposit(v1._1._1)(v1._1._2)(v1._1._3))(v._1.onValue(v1._1._4))))(dictApplicative.pure(v1._2));
    }
    return dictApplicative.pure(v1);
  };
};
const topDownVisitor = dictMonad => {
  const $0 = dictMonad.Bind1();
  const Applicative0 = dictMonad.Applicative0();
  const traverseContract1 = traverseContract(Applicative0);
  const traverseValue1 = traverseValue(Applicative0);
  const traverseCase1 = traverseCase(Applicative0);
  const traverseObservation1 = traverseObservation(Applicative0);
  return v => {
    const visitor = $Visitor({
      onContract: c => $0.bind(v._1.onContract(c))(traverseContract1(visitor)),
      onValue: c => $0.bind(v._1.onValue(c))(traverseValue1(visitor)),
      onCase: c => $0.bind(v._1.onCase(c))(traverseCase1(visitor)),
      onObservation: c => $0.bind(v._1.onObservation(c))(traverseObservation1(visitor))
    });
    return visitor;
  };
};
const rewriteContractTopDown = dictMonad => {
  const topDownVisitor1 = topDownVisitor(dictMonad);
  return visitor => contract => topDownVisitor1(visitor)._1.onContract(contract);
};
const forContractTopDown = dictMonad => {
  const $0 = rewriteContractTopDown(dictMonad);
  return b => a => $0(a)(b);
};
const defaultVisitor = dictApplicative => $Visitor({
  onCase: dictApplicative.pure,
  onContract: dictApplicative.pure,
  onObservation: dictApplicative.pure,
  onValue: dictApplicative.pure
});
const bottomUpVisitor = dictMonad => {
  const $0 = dictMonad.Bind1();
  const Applicative0 = dictMonad.Applicative0();
  const traverseContract1 = traverseContract(Applicative0);
  const traverseValue1 = traverseValue(Applicative0);
  const traverseCase1 = traverseCase(Applicative0);
  const traverseObservation1 = traverseObservation(Applicative0);
  return v => {
    const $1 = v._1.onCase;
    const $2 = v._1.onContract;
    const $3 = v._1.onObservation;
    const $4 = v._1.onValue;
    const visitor = $Visitor({
      onContract: c => $0.bind(traverseContract1(visitor)(c))($2),
      onValue: c => $0.bind(traverseValue1(visitor)(c))($4),
      onCase: c => $0.bind(traverseCase1(visitor)(c))($1),
      onObservation: c => $0.bind(traverseObservation1(visitor)(c))($3)
    });
    return visitor;
  };
};
const rewriteContractBottomUp = dictMonad => {
  const bottomUpVisitor1 = bottomUpVisitor(dictMonad);
  return visitor => contract => bottomUpVisitor1(visitor)._1.onContract(contract);
};
const forContractBottomUp = dictMonad => {
  const $0 = rewriteContractBottomUp(dictMonad);
  return b => a => $0(a)(b);
};
export {
  $Visitor,
  Visitor,
  bottomUpVisitor,
  defaultVisitor,
  forContractBottomUp,
  forContractTopDown,
  rewriteContractBottomUp,
  rewriteContractTopDown,
  topDownVisitor,
  traverseCase,
  traverseContract,
  traverseObservation,
  traverseValue
};
