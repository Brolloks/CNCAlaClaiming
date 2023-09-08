import * as $runtime from "../runtime.js";
import * as Control$dMonad$dGen from "../Control.Monad.Gen/index.js";
import * as Data$dBigInt from "../Data.BigInt/index.js";
import * as Data$dBigInt$dArgonaut from "../Data.BigInt.Argonaut/index.js";
import * as Data$dChar$dGen from "../Data.Char.Gen/index.js";
import * as Data$dEnum from "../Data.Enum/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dNonEmpty from "../Data.NonEmpty/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data$dUnfoldable from "../Data.Unfoldable/index.js";
import * as Language$dMarlowe$dCore$dV1$dSemantics$dTypes from "../Language.Marlowe.Core.V1.Semantics.Types/index.js";
import * as Language$dMarlowe$dExtended$dV1 from "../Language.Marlowe.Extended.V1/index.js";
const oneOf = dictFoldable => dictMonadGen => Data$dNonEmpty.foldable1NonEmpty(dictFoldable).foldl1((() => {
  const chooseBool = dictMonadGen.chooseBool;
  return genA => genB => dictMonadGen.Monad0().Bind1().bind(chooseBool)(v => {
    if (v) { return genA; }
    return genB;
  });
})());
const oneOf1 = /* #__PURE__ */ oneOf({
  foldMap: dictMonoid => {
    const foldMap1 = Data$dFoldable.foldableArray.foldMap(dictMonoid);
    return f => v => dictMonoid.Semigroup0().append(f(v._1))(foldMap1(f)(v._2));
  },
  foldl: f => b => v => Data$dFoldable.foldlArray(f)(f(b)(v._1))(v._2),
  foldr: f => b => v => f(v._1)(Data$dFoldable.foldrArray(f)(b)(v._2))
});
const genTimeInterval = dictMonadGen => {
  const Monad0 = dictMonadGen.Monad0();
  const $0 = Monad0.Bind1();
  return dictMonadRec => {
    const suchThat = Control$dMonad$dGen.suchThat(dictMonadRec)(dictMonadGen);
    return gen => $0.bind(gen)(from => $0.bind(suchThat(gen)(v => v > from))(to => Monad0.Applicative0().pure(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$TimeInterval(from, to))));
  };
};
const genInstant = dictMonadGen => {
  const Monad0 = dictMonadGen.Monad0();
  return dictMonadRec => Monad0.Bind1().bind(dictMonadGen.chooseFloat(-8639977881600000.0)(8639977881599999.0))(n => Monad0.Applicative0().pure((() => {
    if (n >= -8639977881600000.0 && n <= 8639977881599999.0) { return n; }
    $runtime.fail();
  })()));
};
const genTimeout = dictMonadGen => {
  const Monad0 = dictMonadGen.Monad0();
  return dictMonadRec => Monad0.Bind1().bind(dictMonadGen.chooseFloat(-8639977881600000.0)(8639977881599999.0))(n => Monad0.Applicative0().pure((() => {
    if (n >= -8639977881600000.0 && n <= 8639977881599999.0) { return n; }
    $runtime.fail();
  })()));
};
const genHexit = dictMonadGen => {
  const $0 = dictMonadGen.Monad0().Bind1().Apply0().Functor0();
  return oneOf1(dictMonadGen)(Data$dNonEmpty.$NonEmpty(
    $0.map(v2 => {
      if (v2.tag === "Nothing") { return "a"; }
      if (v2.tag === "Just") { return v2._1; }
      $runtime.fail();
    })($0.map(Data$dEnum.charToEnum)(dictMonadGen.chooseInt(97)(102))),
    Data$dNonEmpty.$NonEmpty(
      $0.map(v2 => {
        if (v2.tag === "Nothing") { return "A"; }
        if (v2.tag === "Just") { return v2._1; }
        $runtime.fail();
      })($0.map(Data$dEnum.charToEnum)(dictMonadGen.chooseInt(65)(70))),
      [Data$dChar$dGen.genDigitChar(dictMonadGen)]
    )
  ));
};
const genBigInt = dictMonadGen => dictMonadRec => dictMonadGen.Monad0().Bind1().Apply0().Functor0().map(Data$dBigInt$dArgonaut.fromInt)(dictMonadGen.chooseInt(-2147483648)(2147483647));
const genBound = dictMonadGen => {
  const Monad0 = dictMonadGen.Monad0();
  const $0 = Monad0.Bind1();
  return dictMonadRec => {
    const genBigInt2 = genBigInt(dictMonadGen)(dictMonadRec);
    const suchThat = Control$dMonad$dGen.suchThat(dictMonadRec)(dictMonadGen);
    return $0.bind(genBigInt2)(from => $0.bind(suchThat(genBigInt2)(v => Data$dBigInt.ordBigInt.compare(v)(from) === "GT"))(to => Monad0.Applicative0().pure(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Bound(
      from,
      to
    ))));
  };
};
const genRational = dictMonadGen => {
  const Monad0 = dictMonadGen.Monad0();
  const $0 = Monad0.Bind1();
  return dictMonadRec => {
    const genBigInt2 = genBigInt(dictMonadGen)(dictMonadRec);
    return $0.bind(genBigInt2)(n => $0.bind(genBigInt2)(d => Monad0.Applicative0().pure(Data$dBigInt.ordBigInt.compare(d)(Data$dBigInt.semiringBigInt.zero) === "GT"
      ? Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Rational(n, d)
      : Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Rational(Data$dBigInt.biSub(Data$dBigInt.semiringBigInt.zero)(n), Data$dBigInt.biSub(Data$dBigInt.semiringBigInt.zero)(d)))));
  };
};
const genBase16 = dictMonadGen => {
  const genHexit1 = genHexit(dictMonadGen);
  return dictMonadRec => dictMonadGen.Monad0().Bind1().Apply0().Functor0().map(Data$dString$dCodeUnits.fromCharArray)(dictMonadGen.resize(s => s - Data$dInt.rem(s)(2) | 0)(Control$dMonad$dGen.unfoldable(dictMonadRec)(dictMonadGen)(Data$dUnfoldable.unfoldableArray)(genHexit1)));
};
const genCurrencySymbol = dictMonadGen => genBase16(dictMonadGen);
const genCurrencySymbolValue = dictMonadGen => genBase16(dictMonadGen);
const genPubKey = dictMonadGen => genBase16(dictMonadGen);
const genAlphaNum = dictMonadGen => {
  const oneOf3 = oneOf(Data$dFoldable.foldableArray)(dictMonadGen);
  const genAlpha = Data$dChar$dGen.genAlpha(dictMonadGen);
  const genDigitChar = Data$dChar$dGen.genDigitChar(dictMonadGen);
  return dictMonadRec => oneOf3(Data$dNonEmpty.$NonEmpty(genAlpha, [genDigitChar]));
};
const genString = dictMonadGen => {
  const genAlphaNum1 = genAlphaNum(dictMonadGen);
  return dictMonadRec => dictMonadGen.Monad0().Bind1().Apply0().Functor0().map(Data$dString$dCodeUnits.fromCharArray)(dictMonadGen.resize(v => v - 1 | 0)(Control$dMonad$dGen.unfoldable(dictMonadRec)(dictMonadGen)(Data$dUnfoldable.unfoldableArray)(genAlphaNum1(dictMonadRec))));
};
const genTokenName = dictMonadGen => genString(dictMonadGen);
const genParty = dictMonadGen => {
  const $0 = dictMonadGen.Monad0().Bind1().Apply0().Functor0();
  const genTokenName1 = genString(dictMonadGen);
  const genPubKey1 = genBase16(dictMonadGen);
  const oneOf3 = oneOf(Data$dFoldable.foldableArray)(dictMonadGen);
  return dictMonadRec => oneOf3(Data$dNonEmpty.$NonEmpty(
    $0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Address)(genPubKey1(dictMonadRec)),
    [$0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Role)(genTokenName1(dictMonadRec))]
  ));
};
const genChoiceId = dictMonadGen => {
  const Monad0 = dictMonadGen.Monad0();
  const $0 = Monad0.Bind1();
  const genString1 = genString(dictMonadGen);
  const genParty1 = genParty(dictMonadGen);
  return dictMonadRec => {
    const genParty2 = genParty1(dictMonadRec);
    return $0.bind(genString1(dictMonadRec))(choiceName => $0.bind(genParty2)(choiceOwner => Monad0.Applicative0().pure(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$ChoiceId(
      choiceName,
      choiceOwner
    ))));
  };
};
const genPayee = dictMonadGen => {
  const oneOf3 = oneOf(Data$dFoldable.foldableArray)(dictMonadGen);
  const $0 = dictMonadGen.Monad0().Bind1().Apply0().Functor0();
  const genParty1 = genParty(dictMonadGen);
  return dictMonadRec => {
    const genParty2 = genParty1(dictMonadRec);
    return oneOf3(Data$dNonEmpty.$NonEmpty(
      $0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Account)(genParty2),
      [$0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Party)(genParty2)]
    ));
  };
};
const genToken = dictMonadGen => {
  const oneOf3 = oneOf(Data$dFoldable.foldableArray)(dictMonadGen);
  const Monad0 = dictMonadGen.Monad0();
  const Apply0 = Monad0.Bind1().Apply0();
  const genCurrencySymbol1 = genBase16(dictMonadGen);
  const genTokenName1 = genString(dictMonadGen);
  return dictMonadRec => oneOf3(Data$dNonEmpty.$NonEmpty(
    Monad0.Applicative0().pure(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Token("", "")),
    [Apply0.apply(Apply0.Functor0().map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Token)(genCurrencySymbol1(dictMonadRec)))(genTokenName1(dictMonadRec))]
  ));
};
const genTokenValue = dictMonadGen => {
  const Monad0 = dictMonadGen.Monad0();
  const $0 = Monad0.Bind1();
  const genCurrencySymbolValue1 = genBase16(dictMonadGen);
  const genTokenName1 = genString(dictMonadGen);
  return dictMonadRec => {
    const genTokenName2 = genTokenName1(dictMonadRec);
    return $0.bind(genCurrencySymbolValue1(dictMonadRec))(currencySymbol => $0.bind(genTokenName2)(tokenName => Monad0.Applicative0().pure(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Token(
      currencySymbol,
      tokenName
    ))));
  };
};
const genTokenNameValue = dictMonadGen => genString(dictMonadGen);
const genPartyValue = dictMonadGen => {
  const $0 = dictMonadGen.Monad0().Bind1().Apply0().Functor0();
  const genTokenNameValue1 = genString(dictMonadGen);
  const genPubKey1 = genBase16(dictMonadGen);
  const oneOf3 = oneOf(Data$dFoldable.foldableArray)(dictMonadGen);
  return dictMonadRec => oneOf3(Data$dNonEmpty.$NonEmpty(
    $0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Address)(genPubKey1(dictMonadRec)),
    [$0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Role)(genTokenNameValue1(dictMonadRec))]
  ));
};
const genChoiceIdValue = dictMonadGen => {
  const Monad0 = dictMonadGen.Monad0();
  const $0 = Monad0.Bind1();
  const genString1 = genString(dictMonadGen);
  const genPartyValue1 = genPartyValue(dictMonadGen);
  return dictMonadRec => {
    const genPartyValue2 = genPartyValue1(dictMonadRec);
    return $0.bind(genString1(dictMonadRec))(choiceName => $0.bind(genPartyValue2)(choiceOwner => Monad0.Applicative0().pure(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$ChoiceId(
      choiceName,
      choiceOwner
    ))));
  };
};
const genInputContent = dictMonadGen => {
  const oneOf3 = oneOf(Data$dFoldable.foldableArray)(dictMonadGen);
  const Monad0 = dictMonadGen.Monad0();
  const Apply0 = Monad0.Bind1().Apply0();
  const $0 = Apply0.Functor0();
  const genPartyValue1 = genPartyValue(dictMonadGen);
  const genTokenValue1 = genTokenValue(dictMonadGen);
  const genChoiceIdValue1 = genChoiceIdValue(dictMonadGen);
  return dictMonadRec => {
    const genPartyValue2 = genPartyValue1(dictMonadRec);
    const genBigInt2 = genBigInt(dictMonadGen)(dictMonadRec);
    return oneOf3(Data$dNonEmpty.$NonEmpty(
      Apply0.apply(Apply0.apply(Apply0.apply($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.IDeposit)(genPartyValue2))(genPartyValue2))(genTokenValue1(dictMonadRec)))(genBigInt2),
      [
        Apply0.apply($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.IChoice)(genChoiceIdValue1(dictMonadRec)))(genBigInt2),
        Monad0.Applicative0().pure(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.INotify)
      ]
    ));
  };
};
const genPayeeValueCore = dictMonadGen => {
  const oneOf3 = oneOf(Data$dFoldable.foldableArray)(dictMonadGen);
  const $0 = dictMonadGen.Monad0().Bind1().Apply0().Functor0();
  const genPartyValue1 = genPartyValue(dictMonadGen);
  return dictMonadRec => {
    const genPartyValue2 = genPartyValue1(dictMonadRec);
    return oneOf3(Data$dNonEmpty.$NonEmpty(
      $0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Account)(genPartyValue2),
      [$0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Party)(genPartyValue2)]
    ));
  };
};
const genPayeeValueExtended = dictMonadGen => {
  const oneOf3 = oneOf(Data$dFoldable.foldableArray)(dictMonadGen);
  const $0 = dictMonadGen.Monad0().Bind1().Apply0().Functor0();
  const genPartyValue1 = genPartyValue(dictMonadGen);
  return dictMonadRec => {
    const genPartyValue2 = genPartyValue1(dictMonadRec);
    return oneOf3(Data$dNonEmpty.$NonEmpty($0.map(Language$dMarlowe$dExtended$dV1.Account)(genPartyValue2), [$0.map(Language$dMarlowe$dExtended$dV1.Party)(genPartyValue2)]));
  };
};
const genValueId = dictMonadGen => {
  const genString1 = genString(dictMonadGen);
  return dictMonadRec => dictMonadGen.Monad0().Bind1().Apply0().Functor0().map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ValueId)(genString1(dictMonadRec));
};
const genValue$p = dictMonadGen => {
  const oneOf3 = oneOf(Data$dFoldable.foldableArray)(dictMonadGen);
  const Monad0 = dictMonadGen.Monad0();
  const $0 = Monad0.Applicative0();
  const Apply0 = Monad0.Bind1().Apply0();
  const $1 = Apply0.Functor0();
  const genParty1 = genParty(dictMonadGen);
  const genToken1 = genToken(dictMonadGen);
  const genChoiceId1 = genChoiceId(dictMonadGen);
  const genValueId1 = genValueId(dictMonadGen);
  return dictMonadRec => {
    const genParty2 = genParty1(dictMonadRec);
    const genToken2 = genToken1(dictMonadRec);
    const genBigInt2 = genBigInt(dictMonadGen)(dictMonadRec);
    const genChoiceId2 = genChoiceId1(dictMonadRec);
    const genValueId2 = genValueId1(dictMonadRec);
    return dictLazy => dictLazy1 => size => {
      if (size > 1) {
        return dictLazy.defer(v => {
          const newSize = size - 1 | 0;
          return oneOf3(Data$dNonEmpty.$NonEmpty(
            $0.pure(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.TimeIntervalStart),
            [
              $0.pure(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.TimeIntervalEnd),
              Apply0.apply($1.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.AvailableMoney)(genParty2))(genToken2),
              $1.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Constant)(genBigInt2),
              $1.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.NegValue)(genValue$p(dictMonadGen)(dictMonadRec)(dictLazy)(dictLazy1)(newSize)),
              Apply0.apply($1.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.AddValue)(genValue$p(dictMonadGen)(dictMonadRec)(dictLazy)(dictLazy1)(newSize)))(genValue$p(dictMonadGen)(dictMonadRec)(dictLazy)(dictLazy1)(newSize)),
              Apply0.apply($1.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.SubValue)(genValue$p(dictMonadGen)(dictMonadRec)(dictLazy)(dictLazy1)(newSize)))(genValue$p(dictMonadGen)(dictMonadRec)(dictLazy)(dictLazy1)(newSize)),
              Apply0.apply($1.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.MulValue)(genValue$p(dictMonadGen)(dictMonadRec)(dictLazy)(dictLazy1)(newSize)))(genValue$p(dictMonadGen)(dictMonadRec)(dictLazy)(dictLazy1)(newSize)),
              Apply0.apply($1.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.DivValue)(genValue$p(dictMonadGen)(dictMonadRec)(dictLazy)(dictLazy1)(newSize)))(genValue$p(dictMonadGen)(dictMonadRec)(dictLazy)(dictLazy1)(newSize)),
              $1.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ChoiceValue)(genChoiceId2),
              $1.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.UseValue)(genValueId2),
              Apply0.apply(Apply0.apply($1.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Cond)(genObservation$p(dictMonadGen)(dictMonadRec)(dictLazy1)(dictLazy)(newSize)))(genValue$p(dictMonadGen)(dictMonadRec)(dictLazy)(dictLazy1)(newSize)))(genValue$p(dictMonadGen)(dictMonadRec)(dictLazy)(dictLazy1)(newSize))
            ]
          ));
        });
      }
      return oneOf3(Data$dNonEmpty.$NonEmpty(
        $0.pure(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.TimeIntervalStart),
        [
          $0.pure(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.TimeIntervalEnd),
          Apply0.apply($1.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.AvailableMoney)(genParty2))(genToken2),
          $1.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Constant)(genBigInt2),
          $1.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.UseValue)(genValueId2)
        ]
      ));
    };
  };
};
const genObservation$p = dictMonadGen => {
  const oneOf3 = oneOf(Data$dFoldable.foldableArray)(dictMonadGen);
  const Apply0 = dictMonadGen.Monad0().Bind1().Apply0();
  const $0 = Apply0.Functor0();
  const genChoiceId1 = genChoiceId(dictMonadGen);
  return dictMonadRec => {
    const genChoiceId2 = genChoiceId1(dictMonadRec);
    return dictLazy => dictLazy1 => size => {
      if (size > 1) {
        return dictLazy.defer(v => {
          const newSize = size - 1 | 0;
          const genNewValue = genValue$p(dictMonadGen)(dictMonadRec)(dictLazy1)(dictLazy)(newSize);
          const genNewObservationIndexed = genObservation$p(dictMonadGen)(dictMonadRec)(dictLazy)(dictLazy1)(newSize);
          return oneOf3(Data$dNonEmpty.$NonEmpty(
            Apply0.apply($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.AndObs)(genNewObservationIndexed))(genNewObservationIndexed),
            [
              Apply0.apply($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.OrObs)(genNewObservationIndexed))(genNewObservationIndexed),
              $0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.NotObs)(genObservation$p(dictMonadGen)(dictMonadRec)(dictLazy)(dictLazy1)(newSize)),
              $0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ChoseSomething)(genChoiceId2),
              Apply0.apply($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ValueGE)(genNewValue))(genNewValue),
              Apply0.apply($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ValueGT)(genNewValue))(genNewValue),
              Apply0.apply($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ValueLT)(genNewValue))(genNewValue),
              Apply0.apply($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ValueLE)(genNewValue))(genNewValue),
              Apply0.apply($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ValueEQ)(genNewValue))(genNewValue)
            ]
          ));
        });
      }
      return $0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ChoseSomething)(genChoiceId2);
    };
  };
};
const genObservation = dictMonadGen => {
  const genObservation$p1 = genObservation$p(dictMonadGen);
  return dictMonadRec => {
    const genObservation$p2 = genObservation$p1(dictMonadRec);
    return dictLazy => {
      const genObservation$p3 = genObservation$p2(dictLazy);
      return dictLazy1 => genObservation$p3(dictLazy1)(5);
    };
  };
};
const genValue = dictMonadGen => {
  const genValue$p1 = genValue$p(dictMonadGen);
  return dictMonadRec => {
    const genValue$p2 = genValue$p1(dictMonadRec);
    return dictLazy => {
      const genValue$p3 = genValue$p2(dictLazy);
      return dictLazy1 => genValue$p3(dictLazy1)(5);
    };
  };
};
const genValueIdValue = dictMonadGen => {
  const genString1 = genString(dictMonadGen);
  return dictMonadRec => dictMonadGen.Monad0().Bind1().Apply0().Functor0().map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.ValueId)(genString1(dictMonadRec));
};
const genTransactionWarning = dictMonadGen => {
  const oneOf3 = oneOf(Data$dFoldable.foldableArray)(dictMonadGen);
  const Apply0 = dictMonadGen.Monad0().Bind1().Apply0();
  const $0 = Apply0.Functor0();
  const genPartyValue1 = genPartyValue(dictMonadGen);
  const genTokenValue1 = genTokenValue(dictMonadGen);
  const genPayeeValueCore1 = genPayeeValueCore(dictMonadGen);
  const genValueIdValue1 = genValueIdValue(dictMonadGen);
  return dictMonadRec => {
    const genPartyValue2 = genPartyValue1(dictMonadRec);
    const genTokenValue2 = genTokenValue1(dictMonadRec);
    const genBigInt2 = genBigInt(dictMonadGen)(dictMonadRec);
    const genPayeeValueCore2 = genPayeeValueCore1(dictMonadRec);
    return oneOf3(Data$dNonEmpty.$NonEmpty(
      Apply0.apply(Apply0.apply(Apply0.apply($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.TransactionNonPositiveDeposit)(genPartyValue2))(genPartyValue2))(genTokenValue2))(genBigInt2),
      [
        Apply0.apply(Apply0.apply(Apply0.apply($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.TransactionNonPositivePay)(genPartyValue2))(genPayeeValueCore2))(genTokenValue2))(genBigInt2),
        Apply0.apply(Apply0.apply(Apply0.apply(Apply0.apply($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.TransactionPartialPay)(genPartyValue2))(genPayeeValueCore2))(genTokenValue2))(genBigInt2))(genBigInt2),
        Apply0.apply(Apply0.apply($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.TransactionShadowing)(genValueIdValue1(dictMonadRec)))(genBigInt2))(genBigInt2)
      ]
    ));
  };
};
const genAction = dictMonadGen => {
  const oneOf3 = oneOf(Data$dFoldable.foldableArray)(dictMonadGen);
  const Apply0 = dictMonadGen.Monad0().Bind1().Apply0();
  const $0 = Apply0.Functor0();
  const genParty1 = genParty(dictMonadGen);
  const genToken1 = genToken(dictMonadGen);
  const genValue$p1 = genValue$p(dictMonadGen);
  const genChoiceId1 = genChoiceId(dictMonadGen);
  const genBound1 = genBound(dictMonadGen);
  const genObservation$p1 = genObservation$p(dictMonadGen);
  return dictMonadRec => {
    const genParty2 = genParty1(dictMonadRec);
    const genToken2 = genToken1(dictMonadRec);
    const genValue$p2 = genValue$p1(dictMonadRec);
    const genChoiceId2 = genChoiceId1(dictMonadRec);
    const unfoldable = Control$dMonad$dGen.unfoldable(dictMonadRec)(dictMonadGen)(Data$dUnfoldable.unfoldableArray);
    const genBound2 = genBound1(dictMonadRec);
    const genObservation$p2 = genObservation$p1(dictMonadRec);
    return dictLazy => {
      const genObservation$p3 = genObservation$p2(dictLazy);
      return dictLazy1 => {
        const genValue$p3 = genValue$p2(dictLazy1)(dictLazy);
        const genObservation$p4 = genObservation$p3(dictLazy1);
        return size => oneOf3(Data$dNonEmpty.$NonEmpty(
          Apply0.apply(Apply0.apply(Apply0.apply($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Deposit)(genParty2))(genParty2))(genToken2))(genValue$p3(size)),
          [
            Apply0.apply($0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Choice)(genChoiceId2))(dictMonadGen.resize(v => v - 1 | 0)(unfoldable(genBound2))),
            $0.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Notify)(genObservation$p4(size))
          ]
        ));
      };
    };
  };
};
const genContract$p = dictMonadGen => {
  const genValue$p1 = genValue$p(dictMonadGen);
  const genObservation$p1 = genObservation$p(dictMonadGen);
  const oneOf3 = oneOf(Data$dFoldable.foldableArray)(dictMonadGen);
  const Monad0 = dictMonadGen.Monad0();
  const $0 = Monad0.Applicative0();
  const Apply0 = Monad0.Bind1().Apply0();
  const $1 = Apply0.Functor0();
  const genParty1 = genParty(dictMonadGen);
  const genPayee1 = genPayee(dictMonadGen);
  const genToken1 = genToken(dictMonadGen);
  const genValueId1 = genValueId(dictMonadGen);
  return dictMonadRec => {
    const genValue$p2 = genValue$p1(dictMonadRec);
    const genObservation$p2 = genObservation$p1(dictMonadRec);
    const genParty2 = genParty1(dictMonadRec);
    const genPayee2 = genPayee1(dictMonadRec);
    const genToken2 = genToken1(dictMonadRec);
    const genValueId2 = genValueId1(dictMonadRec);
    return dictLazy => dictLazy1 => {
      const genObservation$p3 = genObservation$p2(dictLazy1);
      return dictLazy2 => {
        const genValue$p3 = genValue$p2(dictLazy2)(dictLazy1);
        const genObservation$p4 = genObservation$p3(dictLazy2);
        return size => {
          if (size > 1) {
            return dictLazy.defer(v => {
              const newSize = size - 1 | 0;
              const genNewValue = genValue$p3(newSize);
              const genNewObservation = genObservation$p4(newSize);
              const genNewContract = genContract$p(dictMonadGen)(dictMonadRec)(dictLazy)(dictLazy1)(dictLazy2)(newSize);
              return oneOf3(Data$dNonEmpty.$NonEmpty(
                $0.pure(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Close),
                [
                  Apply0.apply(Apply0.apply(Apply0.apply(Apply0.apply($1.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Pay)(genParty2))(genPayee2))(genToken2))(genNewValue))(genNewContract),
                  Apply0.apply(Apply0.apply($1.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.If)(genNewObservation))(genContract$p(dictMonadGen)(dictMonadRec)(dictLazy)(dictLazy1)(dictLazy2)(newSize)))(genContract$p(dictMonadGen)(dictMonadRec)(dictLazy)(dictLazy1)(dictLazy2)(newSize)),
                  Apply0.apply(Apply0.apply($1.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.When)(genCases(dictMonadGen)(dictMonadRec)(dictLazy2)(dictLazy1)(dictLazy)(newSize)))((() => {
                    const Monad0$1 = dictMonadGen.Monad0();
                    return Monad0$1.Bind1().bind(dictMonadGen.chooseFloat(-8639977881600000.0)(8639977881599999.0))(n => Monad0$1.Applicative0().pure((() => {
                      if (n >= -8639977881600000.0 && n <= 8639977881599999.0) { return n; }
                      $runtime.fail();
                    })()));
                  })()))(genNewContract),
                  Apply0.apply(Apply0.apply($1.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Let)(genValueId2))(genNewValue))(genNewContract),
                  Apply0.apply($1.map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Assert)(genNewObservation))(genNewContract)
                ]
              ));
            });
          }
          return $0.pure(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.Close);
        };
      };
    };
  };
};
const genCases = dictMonadGen => dictMonadRec => {
  const unfoldable = Control$dMonad$dGen.unfoldable(dictMonadRec)(dictMonadGen)(Data$dUnfoldable.unfoldableArray);
  return dictLazy => dictLazy1 => dictLazy2 => size => dictMonadGen.resize(v => v - 1 | 0)(unfoldable(genCase(dictMonadGen)(dictMonadRec)(dictLazy)(dictLazy1)(dictLazy2)(size)));
};
const genCase = dictMonadGen => {
  const Monad0 = dictMonadGen.Monad0();
  const $0 = Monad0.Bind1();
  const genAction1 = genAction(dictMonadGen);
  return dictMonadRec => {
    const genAction2 = genAction1(dictMonadRec);
    return dictLazy => dictLazy1 => {
      const genAction3 = genAction2(dictLazy1)(dictLazy);
      return dictLazy2 => size => {
        const newSize = size - 1 | 0;
        return $0.bind(genAction3(newSize))(action => $0.bind(genContract$p(dictMonadGen)(dictMonadRec)(dictLazy2)(dictLazy1)(dictLazy)(newSize))(contract => Monad0.Applicative0().pure(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Case(
          "Case",
          action,
          contract
        ))));
      };
    };
  };
};
const genContract = dictMonadGen => {
  const genContract$p1 = genContract$p(dictMonadGen);
  return dictMonadRec => {
    const genContract$p2 = genContract$p1(dictMonadRec);
    return dictLazy => {
      const genContract$p3 = genContract$p2(dictLazy);
      return dictLazy1 => {
        const genContract$p4 = genContract$p3(dictLazy1);
        return dictLazy2 => genContract$p4(dictLazy2)(3);
      };
    };
  };
};
const genInput = dictMonadGen => {
  const oneOf3 = oneOf(Data$dFoldable.foldableArray)(dictMonadGen);
  const Monad0 = dictMonadGen.Monad0();
  const Bind1 = Monad0.Bind1();
  const genInputContent1 = genInputContent(dictMonadGen);
  const genContract1 = genContract(dictMonadGen);
  const genBase161 = genBase16(dictMonadGen);
  return dictMonadRec => {
    const genInputContent2 = genInputContent1(dictMonadRec);
    const genContract2 = genContract1(dictMonadRec);
    const genBase162 = genBase161(dictMonadRec);
    return dictLazy => {
      const genContract3 = genContract2(dictLazy);
      return dictLazy1 => {
        const genContract4 = genContract3(dictLazy1);
        return dictLazy2 => {
          const genContract5 = genContract4(dictLazy2);
          return oneOf3(Data$dNonEmpty.$NonEmpty(
            Bind1.Apply0().Functor0().map(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.NormalInput)(genInputContent2),
            [
              Bind1.bind(dictLazy.defer(v => genContract5))(contract => Bind1.bind(genInputContent2)(inputContent => Bind1.bind(genBase162)(hash => Monad0.Applicative0().pure(Language$dMarlowe$dCore$dV1$dSemantics$dTypes.$Input(
                "MerkleizedInput",
                inputContent,
                hash,
                contract
              )))))
            ]
          ));
        };
      };
    };
  };
};
const genTransactionInput = dictMonadGen => {
  const Monad0 = dictMonadGen.Monad0();
  const $0 = Monad0.Bind1();
  const genTimeInterval1 = genTimeInterval(dictMonadGen);
  const Monad0$1 = dictMonadGen.Monad0();
  const genInput1 = genInput(dictMonadGen);
  return dictMonadRec => {
    const genTimeInterval2 = genTimeInterval1(dictMonadRec);
    const genInstant2 = Monad0$1.Bind1().bind(dictMonadGen.chooseFloat(-8639977881600000.0)(8639977881599999.0))(n => Monad0$1.Applicative0().pure((() => {
      if (n >= -8639977881600000.0 && n <= 8639977881599999.0) { return n; }
      $runtime.fail();
    })()));
    const unfoldable = Control$dMonad$dGen.unfoldable(dictMonadRec)(dictMonadGen)(Data$dList$dTypes.unfoldableList);
    const genInput2 = genInput1(dictMonadRec);
    return dictLazy => {
      const genInput3 = genInput2(dictLazy);
      return dictLazy1 => {
        const genInput4 = genInput3(dictLazy1);
        return dictLazy2 => {
          const genInput5 = genInput4(dictLazy2);
          return $0.bind(genTimeInterval2(genInstant2))(interval => $0.bind(unfoldable(genInput5))(inputs => Monad0.Applicative0().pure({interval, inputs})));
        };
      };
    };
  };
};
export {
  genAction,
  genAlphaNum,
  genBase16,
  genBigInt,
  genBound,
  genCase,
  genCases,
  genChoiceId,
  genChoiceIdValue,
  genContract,
  genContract$p,
  genCurrencySymbol,
  genCurrencySymbolValue,
  genHexit,
  genInput,
  genInputContent,
  genInstant,
  genObservation,
  genObservation$p,
  genParty,
  genPartyValue,
  genPayee,
  genPayeeValueCore,
  genPayeeValueExtended,
  genPubKey,
  genRational,
  genString,
  genTimeInterval,
  genTimeout,
  genToken,
  genTokenName,
  genTokenNameValue,
  genTokenValue,
  genTransactionInput,
  genTransactionWarning,
  genValue,
  genValue$p,
  genValueId,
  genValueIdValue,
  oneOf,
  oneOf1
};
