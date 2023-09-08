import * as $runtime from "../runtime.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFormatter$dDateTime from "../Data.Formatter.DateTime/index.js";
import * as Data$dFormatter$dParser$dNumber from "../Data.Formatter.Parser.Number/index.js";
import * as Data$dFormatter$dParser$dUtils from "../Data.Formatter.Parser.Utils/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dInterval from "../Data.Interval/index.js";
import * as Data$dInterval$dDuration from "../Data.Interval.Duration/index.js";
import * as Data$dInterval$dDuration$dIso from "../Data.Interval.Duration.Iso/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Parsing from "../Parsing/index.js";
import * as Parsing$dCombinators from "../Parsing.Combinators/index.js";
import * as Parsing$dString from "../Parsing.String/index.js";
import * as Partial from "../Partial/index.js";
const choice = /* #__PURE__ */ Parsing$dCombinators.choice(Data$dFoldable.foldableArray);
const parseNumber = /* #__PURE__ */ Data$dFormatter$dParser$dNumber.parseNumber(Data$dIdentity.monadIdentity);
const sequence = /* #__PURE__ */ (() => Data$dTraversable.traversableArray.traverse(Parsing.applicativeParserT)(Data$dTraversable.identity))();
const show = /* #__PURE__ */ Data$dShow.showArrayImpl(Data$dShow.showStringImpl);
const parseInterval = duration => date => choice(Data$dFunctor.arrayMap(Parsing$dCombinators.try)([
  (state1, more, lift1, $$throw, done) => more(v2 => more(v2$1 => more(v1 => more(v1$1 => date(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2$2 => {
      const $0 = Data$dInterval.StartEnd(a);
      return more(v2$3 => more(v3 => Parsing$dString.string("/")(
        state2,
        more,
        lift1,
        $$throw,
        (state3, a$1) => more(v4 => more(v3$1 => date(state3, more, lift1, $$throw, (state3$1, a$2) => more(v4$1 => done(state3$1, $0(a$2))))))
      )));
    })
  ))))),
  (state1, more, lift1, $$throw, done) => more(v2 => more(v2$1 => more(v1 => more(v1$1 => duration(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2$2 => {
      const $0 = Data$dInterval.DurationEnd(a);
      return more(v2$3 => more(v3 => Parsing$dString.string("/")(
        state2,
        more,
        lift1,
        $$throw,
        (state3, a$1) => more(v4 => more(v3$1 => date(state3, more, lift1, $$throw, (state3$1, a$2) => more(v4$1 => done(state3$1, $0(a$2))))))
      )));
    })
  ))))),
  (state1, more, lift1, $$throw, done) => more(v2 => more(v2$1 => more(v1 => more(v1$1 => date(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2$2 => {
      const $0 = Data$dInterval.StartDuration(a);
      return more(v2$3 => more(v3 => Parsing$dString.string("/")(
        state2,
        more,
        lift1,
        $$throw,
        (state3, a$1) => more(v4 => more(v3$1 => duration(state3, more, lift1, $$throw, (state3$1, a$2) => more(v4$1 => done(state3$1, $0(a$2))))))
      )));
    })
  ))))),
  (state1, more, lift1, $$throw, done) => more(v1 => duration(state1, more, lift1, $$throw, (state2, a) => more(v2 => done(state2, Data$dInterval.$Interval("DurationOnly", a)))))
]));
const parseRecurringInterval = duration => date => {
  const $0 = parseInterval(duration)(date);
  return (state1, more, lift1, $$throw, done) => more(v2 => more(v1 => more(v2$1 => more(v1$1 => Parsing$dString.string("R")(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2$2 => more(v3 => Data$dFormatter$dParser$dNumber.parseMaybeInteger(Data$dIdentity.monadIdentity)(
      state2,
      more,
      lift1,
      $$throw,
      (state3, a$1) => more(v4 => more(v2$3 => {
        const $1 = Data$dInterval.RecurringInterval(a$1);
        return more(v3$1 => more(v2$4 => more(v1$2 => Parsing$dString.string("/")(
          state3,
          more,
          lift1,
          $$throw,
          (state2$1, a$2) => more(v2$5 => more(v3$2 => $0(state2$1, more, lift1, $$throw, (state3$1, a$3) => more(v4$1 => more(v4$2 => done(state3$1, $1(a$3)))))))
        ))));
      }))
    )))
  )))));
};
const failIfEmpty = dictMonoid => {
  const mempty1 = dictMonoid.mempty;
  return dictEq => p => str => (state1, more, lift1, $$throw, done) => more(v1 => p(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2 => {
      if (dictEq.eq(a)(mempty1)) { return Parsing.fail(str)(state2, more, lift1, $$throw, done); }
      return done(state2, a);
    })
  ));
};
const failIfEmpty1 = /* #__PURE__ */ failIfEmpty(Data$dInterval$dDuration.monoidDuration)(Data$dInterval$dDuration.eqDuration);
const mkComponentsParser = arr => failIfEmpty1((() => {
  const $0 = sequence(Data$dFunctor.arrayMap(v => Parsing$dCombinators.optionMaybe((v1, $0, $1, $2, $3) => {
    const $4 = v1._3;
    return $0(v1$1 => $0(v2 => $0(v1$2 => parseNumber(
      v1,
      $0,
      $1,
      (v2$1, $5) => $2(Parsing.$ParseState(v2$1._1, v2$1._2, $4), $5),
      (state2, a) => $0(v2$1 => $0(v3 => Parsing$dString.string(v._2)(
        state2,
        $0,
        $1,
        (v2$2, $5) => $2(Parsing.$ParseState(v2$2._1, v2$2._2, $4), $5),
        (state3, a$1) => $0(v4 => $0(v2$2 => $3(state3, v._1(a))))
      )))
    ))));
  }))(arr));
  const $1 = Data$dFoldable.foldableArray.foldMap(Data$dInterval$dDuration.monoidDuration)(v1 => {
    if (v1.tag === "Nothing") { return Data$dMap$dInternal.Leaf; }
    if (v1.tag === "Just") { return v1._1; }
    $runtime.fail();
  });
  return (state1, more, lift1, $$throw, done) => more(v1 => $0(state1, more, lift1, $$throw, (state2, a) => more(v2 => done(state2, $1(a)))));
})())("None of valid duration components (" + show(Data$dFunctor.arrayMap(Data$dTuple.snd)(arr)) + ") were present");
const parseDuration = /* #__PURE__ */ (() => {
  const $0 = mkComponentsParser([Data$dTuple.$Tuple(Data$dInterval$dDuration.durationFromComponent(Data$dInterval$dDuration.Week), "W")]);
  const $1 = failIfEmpty1((() => {
    const $1 = mkComponentsParser([
      Data$dTuple.$Tuple(Data$dInterval$dDuration.durationFromComponent(Data$dInterval$dDuration.Year), "Y"),
      Data$dTuple.$Tuple(Data$dInterval$dDuration.durationFromComponent(Data$dInterval$dDuration.Month), "M"),
      Data$dTuple.$Tuple(Data$dInterval$dDuration.durationFromComponent(Data$dInterval$dDuration.Day), "D")
    ]);
    const $2 = mkComponentsParser([
      Data$dTuple.$Tuple(Data$dInterval$dDuration.durationFromComponent(Data$dInterval$dDuration.Hour), "H"),
      Data$dTuple.$Tuple(Data$dInterval$dDuration.durationFromComponent(Data$dInterval$dDuration.Minute), "M"),
      Data$dTuple.$Tuple(Data$dInterval$dDuration.durationFromComponent(Data$dInterval$dDuration.Second), "S")
    ]);
    return (state1, more, lift1, $$throw, done) => more(v2 => {
      const $3 = (state2, f) => more(v3 => {
        const $3 = state2._1;
        const $4 = state2._2;
        return more(v3$1 => {
          const $5 = (v4, $5) => {
            const $6 = v4._3;
            return more(v5 => {
              if ($6) { return $$throw(v4, $5); }
              return more(v4$1 => done(state2, f(Data$dMap$dInternal.Leaf)));
            });
          };
          return more(v2$1 => more(v1 => Parsing$dString.string("T")(
            Parsing.$ParseState($3, $4, false),
            more,
            lift1,
            (v2$2, $6) => $5(Parsing.$ParseState(v2$2._1, v2$2._2, false), $6),
            (state2$1, a) => more(v2$2 => more(v3$2 => $2(state2$1, more, lift1, $5, (state3, a$1) => more(v4 => more(v4$1 => done(state3, f(a$1)))))))
          )));
        });
      });
      return more(v1 => {
        const $4 = state1._1;
        const $5 = state1._2;
        return more(v3 => $1(
          Parsing.$ParseState($4, $5, false),
          more,
          lift1,
          (v2$1, $6) => more(v5 => more(v2$2 => $3(state1, Data$dInterval$dDuration.semigroupDuration.append(Data$dMap$dInternal.Leaf)))),
          (state2, a) => more(v2$1 => $3(state2, Data$dInterval$dDuration.semigroupDuration.append(a)))
        ));
      });
    });
  })())("Must contain valid duration components");
  return (state1, more, lift1, $$throw, done) => more(v2 => more(v1 => Parsing$dString.string("P")(
    state1,
    more,
    lift1,
    $$throw,
    (state2, a) => more(v2$1 => more(v3 => {
      const $2 = state2._1;
      const $3 = state2._2;
      return more(v3$1 => $0(
        Parsing.$ParseState($2, $3, false),
        more,
        lift1,
        (v4, $4) => {
          const $5 = v4._3;
          return more(v5 => {
            if ($5) { return $$throw(v4, $4); }
            return $1(state2, more, lift1, $$throw, (state3, a$1) => more(v4$1 => done(state3, a$1)));
          });
        },
        (state3, a$1) => more(v4 => done(state3, a$1))
      ));
    }))
  )));
})();
const parseIsoDuration = (state1, more, lift1, $$throw, done) => more(v1 => parseDuration(
  state1,
  more,
  lift1,
  $$throw,
  (state2, a) => more(v2 => {
    const v = Data$dInterval$dDuration$dIso.mkIsoDuration(a);
    if (v.tag === "Left") {
      return Parsing.fail((() => {
        const go = go$a0$copy => go$a1$copy => {
          let go$a0 = go$a0$copy, go$a1 = go$a1$copy, go$c = true, go$r;
          while (go$c) {
            const b = go$a0, v$1 = go$a1;
            if (v$1.tag === "Nil") {
              go$c = false;
              go$r = b;
              continue;
            }
            if (v$1.tag === "Cons") {
              go$a0 = b.init ? {init: false, acc: v$1._1} : {init: false, acc: b.acc + ", " + v$1._1};
              go$a1 = v$1._2;
              continue;
            }
            $runtime.fail();
          }
          return go$r;
        };
        return "Extracted Duration is not valid ISO duration (" + go({init: false, acc: Data$dInterval$dDuration$dIso.prettyError(v._1._1)})(Data$dList$dTypes.listMap(Data$dInterval$dDuration$dIso.prettyError)(v._1._2)).acc + ")";
      })())(state2, more, lift1, $$throw, done);
    }
    if (v.tag === "Right") { return done(state2, v._1); }
    $runtime.fail();
  })
));
const extendedDateTimeFormatInUTC = /* #__PURE__ */ (() => {
  const $0 = Data$dFormatter$dParser$dUtils.runP(Data$dFormatter$dDateTime.formatParser)("YYYY-MM-DDTHH:mm:ssZ");
  if ($0.tag === "Left") { return Partial._crashWith($0._1); }
  if ($0.tag === "Right") { return $0._1; }
  $runtime.fail();
})();
const parseDateTime = dictMonad => Data$dFormatter$dDateTime.unformatParser(dictMonad)(extendedDateTimeFormatInUTC);
export {
  choice,
  extendedDateTimeFormatInUTC,
  failIfEmpty,
  failIfEmpty1,
  mkComponentsParser,
  parseDateTime,
  parseDuration,
  parseInterval,
  parseIsoDuration,
  parseNumber,
  parseRecurringInterval,
  sequence,
  show
};
