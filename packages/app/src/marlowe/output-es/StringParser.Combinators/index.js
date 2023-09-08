// | This module defines combinators for building string parsers.
import * as $runtime from "../runtime.js";
import * as Control$dApply from "../Control.Apply/index.js";
import * as Control$dMonad$dRec$dClass from "../Control.Monad.Rec.Class/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dList from "../Data.List/index.js";
import * as Data$dList$dNonEmpty from "../Data.List.NonEmpty/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNonEmpty from "../Data.NonEmpty/index.js";
import * as StringParser$dParser from "../StringParser.Parser/index.js";
const withError = p => msg => s => {
  const v2 = p(s);
  if (v2.tag === "Left") {
    if (s.position === v2._1.pos) { return Data$dEither.$Either("Left", {pos: s.position, error: msg}); }
    return Data$dEither.$Either("Left", {error: v2._1.error, pos: v2._1.pos});
  }
  return v2;
};
const $$try = v => s => {
  const v1 = v(s);
  if (v1.tag === "Left") { return Data$dEither.$Either("Left", {pos: s.position, error: v1._1.error}); }
  return v1;
};
const optional = p => s => {
  const $0 = p(s);
  const v2 = (() => {
    if ($0.tag === "Left") {
      const $1 = $0._1;
      return v => Data$dEither.$Either("Left", $1);
    }
    if ($0.tag === "Right") {
      const $1 = $0._1;
      return f => f($1);
    }
    $runtime.fail();
  })()(v1 => Data$dEither.$Either("Right", {result: undefined, suffix: v1.suffix}));
  if (v2.tag === "Left") {
    if (s.position === v2._1.pos) { return Data$dEither.$Either("Right", {result: undefined, suffix: s}); }
    return Data$dEither.$Either("Left", {error: v2._1.error, pos: v2._1.pos});
  }
  return v2;
};
const option = a => p => s => {
  const v2 = p(s);
  if (v2.tag === "Left") {
    if (s.position === v2._1.pos) { return Data$dEither.$Either("Right", {result: a, suffix: s}); }
    return Data$dEither.$Either("Left", {error: v2._1.error, pos: v2._1.pos});
  }
  return v2;
};
const optionMaybe = p => s => {
  const $0 = p(s);
  const v2 = (() => {
    if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
    if ($0.tag === "Right") { return Data$dEither.$Either("Right", {result: Data$dMaybe.$Maybe("Just", $0._1.result), suffix: $0._1.suffix}); }
    $runtime.fail();
  })();
  if (v2.tag === "Left") {
    if (s.position === v2._1.pos) { return Data$dEither.$Either("Right", {result: Data$dMaybe.Nothing, suffix: s}); }
    return Data$dEither.$Either("Left", {error: v2._1.error, pos: v2._1.pos});
  }
  return v2;
};
const lookAhead = v => s => {
  const v1 = v(s);
  if (v1.tag === "Right") { return Data$dEither.$Either("Right", {result: v1._1.result, suffix: s}); }
  return v1;
};
const tryAhead = x => s => {
  const v1 = x(s);
  const v1$1 = v1.tag === "Right" ? Data$dEither.$Either("Right", {result: v1._1.result, suffix: s}) : v1;
  if (v1$1.tag === "Left") { return Data$dEither.$Either("Left", {pos: s.position, error: v1$1._1.error}); }
  return v1$1;
};
const sepEndBy1 = p => sep => s => {
  const $0 = p(s);
  return (() => {
    if ($0.tag === "Left") {
      const $1 = $0._1;
      return v => Data$dEither.$Either("Left", $1);
    }
    if ($0.tag === "Right") {
      const $1 = $0._1;
      return f => f($1);
    }
    $runtime.fail();
  })()(v1 => {
    const $1 = v1.result;
    const $2 = sep(v1.suffix);
    const v2 = (() => {
      if ($2.tag === "Left") {
        const $3 = $2._1;
        return v => Data$dEither.$Either("Left", $3);
      }
      if ($2.tag === "Right") {
        const $3 = $2._1;
        return f => f($3);
      }
      $runtime.fail();
    })()(v1$1 => {
      const $3 = sepEndBy(p)(sep)(v1$1.suffix);
      return (() => {
        if ($3.tag === "Left") {
          const $4 = $3._1;
          return v => Data$dEither.$Either("Left", $4);
        }
        if ($3.tag === "Right") {
          const $4 = $3._1;
          return f => f($4);
        }
        $runtime.fail();
      })()(v1$2 => Data$dEither.$Either("Right", {result: Data$dNonEmpty.$NonEmpty($1, v1$2.result), suffix: v1$2.suffix}));
    });
    if (v2.tag === "Left") {
      if (v1.suffix.position === v2._1.pos) { return Data$dEither.$Either("Right", {result: Data$dNonEmpty.$NonEmpty($1, Data$dList$dTypes.Nil), suffix: v1.suffix}); }
      return Data$dEither.$Either("Left", {error: v2._1.error, pos: v2._1.pos});
    }
    return v2;
  });
};
const sepEndBy = p => sep => s => {
  const $0 = sepEndBy1(p)(sep)(s);
  const v2 = (() => {
    if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
    if ($0.tag === "Right") { return Data$dEither.$Either("Right", {result: Data$dList$dTypes.$List("Cons", $0._1.result._1, $0._1.result._2), suffix: $0._1.suffix}); }
    $runtime.fail();
  })();
  if (v2.tag === "Left") {
    if (s.position === v2._1.pos) {
      const $1 = sep(s);
      const v2$1 = (() => {
        if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
        if ($1.tag === "Right") { return Data$dEither.$Either("Right", {result: Data$dList$dTypes.Nil, suffix: $1._1.suffix}); }
        $runtime.fail();
      })();
      if (v2$1.tag === "Left") {
        if (s.position === v2$1._1.pos) { return Data$dEither.$Either("Right", {result: Data$dList$dTypes.Nil, suffix: s}); }
        return Data$dEither.$Either("Left", {error: v2$1._1.error, pos: v2$1._1.pos});
      }
      return v2$1;
    }
    return Data$dEither.$Either("Left", {error: v2._1.error, pos: v2._1.pos});
  }
  return v2;
};
const choice = dictFoldable => dictFoldable.foldl(StringParser$dParser.altParser.alt)(v => Data$dEither.$Either("Left", {pos: v.position, error: "Nothing to parse"}));
const chainr1$p = p => f => a => s => {
  const $0 = f(s);
  const v2 = (() => {
    if ($0.tag === "Left") {
      const $1 = $0._1;
      return v => Data$dEither.$Either("Left", $1);
    }
    if ($0.tag === "Right") {
      const $1 = $0._1;
      return f$1 => f$1($1);
    }
    $runtime.fail();
  })()(v1 => {
    const $1 = chainr1(p)(f)(v1.suffix);
    return (() => {
      if ($1.tag === "Left") {
        const $2 = $1._1;
        return v => Data$dEither.$Either("Left", $2);
      }
      if ($1.tag === "Right") {
        const $2 = $1._1;
        return f$1 => f$1($2);
      }
      $runtime.fail();
    })()(v1$1 => Data$dEither.$Either("Right", {result: v1.result(a)(v1$1.result), suffix: v1$1.suffix}));
  });
  if (v2.tag === "Left") {
    if (s.position === v2._1.pos) { return Data$dEither.$Either("Right", {result: a, suffix: s}); }
    return Data$dEither.$Either("Left", {error: v2._1.error, pos: v2._1.pos});
  }
  return v2;
};
const chainr1 = p => f => s => {
  const $0 = p(s);
  return (() => {
    if ($0.tag === "Left") {
      const $1 = $0._1;
      return v => Data$dEither.$Either("Left", $1);
    }
    if ($0.tag === "Right") {
      const $1 = $0._1;
      return f$1 => f$1($1);
    }
    $runtime.fail();
  })()(v1 => chainr1$p(p)(f)(v1.result)(v1.suffix));
};
const chainr = p => f => a => s => {
  const v2 = chainr1(p)(f)(s);
  if (v2.tag === "Left") {
    if (s.position === v2._1.pos) { return Data$dEither.$Either("Right", {result: a, suffix: s}); }
    return Data$dEither.$Either("Left", {error: v2._1.error, pos: v2._1.pos});
  }
  return v2;
};
const chainl1$p = p => f => a => s => {
  const $0 = f(s);
  const v2 = (() => {
    if ($0.tag === "Left") {
      const $1 = $0._1;
      return v => Data$dEither.$Either("Left", $1);
    }
    if ($0.tag === "Right") {
      const $1 = $0._1;
      return f$1 => f$1($1);
    }
    $runtime.fail();
  })()(v1 => {
    const $1 = p(v1.suffix);
    return (() => {
      if ($1.tag === "Left") {
        const $2 = $1._1;
        return v => Data$dEither.$Either("Left", $2);
      }
      if ($1.tag === "Right") {
        const $2 = $1._1;
        return f$1 => f$1($2);
      }
      $runtime.fail();
    })()(v1$1 => chainl1$p(p)(f)(v1.result(a)(v1$1.result))(v1$1.suffix));
  });
  if (v2.tag === "Left") {
    if (s.position === v2._1.pos) { return Data$dEither.$Either("Right", {result: a, suffix: s}); }
    return Data$dEither.$Either("Left", {error: v2._1.error, pos: v2._1.pos});
  }
  return v2;
};
const chainl1 = p => f => s => {
  const $0 = p(s);
  return (() => {
    if ($0.tag === "Left") {
      const $1 = $0._1;
      return v => Data$dEither.$Either("Left", $1);
    }
    if ($0.tag === "Right") {
      const $1 = $0._1;
      return f$1 => f$1($1);
    }
    $runtime.fail();
  })()(v1 => chainl1$p(p)(f)(v1.result)(v1.suffix));
};
const chainl = p => f => a => s => {
  const v2 = chainl1(p)(f)(s);
  if (v2.tag === "Left") {
    if (s.position === v2._1.pos) { return Data$dEither.$Either("Right", {result: a, suffix: s}); }
    return Data$dEither.$Either("Left", {error: v2._1.error, pos: v2._1.pos});
  }
  return v2;
};
const between = open => close => p => {
  const $0 = StringParser$dParser.applyParser.apply(x => {
    const $0 = open(x);
    if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
    if ($0.tag === "Right") { return Data$dEither.$Either("Right", {result: Control$dApply.identity, suffix: $0._1.suffix}); }
    $runtime.fail();
  })(p);
  return StringParser$dParser.applyParser.apply(x => {
    const $1 = $0(x);
    if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
    if ($1.tag === "Right") {
      return Data$dEither.$Either(
        "Right",
        {
          result: (() => {
            const $2 = $1._1.result;
            return v => $2;
          })(),
          suffix: $1._1.suffix
        }
      );
    }
    $runtime.fail();
  })(close);
};
const assertConsume = v => s => {
  const v1 = v(s);
  if (v1.tag === "Right") {
    if (s.position < v1._1.suffix.position) { return Data$dEither.$Either("Right", v1._1); }
    return Data$dEither.$Either("Left", {pos: s.position, error: "Consumed no input."});
  }
  return v1;
};
const many = /* #__PURE__ */ (() => {
  const $0 = Data$dList.manyRec(StringParser$dParser.monadRecParser)(StringParser$dParser.alternativeParser);
  return x => $0(s => {
    const v1 = x(s);
    if (v1.tag === "Right") {
      if (s.position < v1._1.suffix.position) { return Data$dEither.$Either("Right", v1._1); }
      return Data$dEither.$Either("Left", {pos: s.position, error: "Consumed no input."});
    }
    return v1;
  });
})();
const many1 = p => StringParser$dParser.applyParser.apply(x => {
  const $0 = p(x);
  if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
  if ($0.tag === "Right") {
    return Data$dEither.$Either(
      "Right",
      {
        result: (() => {
          const $1 = $0._1.result;
          return t => Data$dNonEmpty.$NonEmpty($1, t);
        })(),
        suffix: $0._1.suffix
      }
    );
  }
  $runtime.fail();
})(many(p));
const endBy1 = p => sep => many1(StringParser$dParser.applyParser.apply(x => {
  const $0 = p(x);
  if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
  if ($0.tag === "Right") {
    return Data$dEither.$Either(
      "Right",
      {
        result: (() => {
          const $1 = $0._1.result;
          return v => $1;
        })(),
        suffix: $0._1.suffix
      }
    );
  }
  $runtime.fail();
})(sep));
const endBy = p => sep => s => {
  const $0 = endBy1(p)(sep)(s);
  const v2 = (() => {
    if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
    if ($0.tag === "Right") { return Data$dEither.$Either("Right", {result: Data$dList$dTypes.$List("Cons", $0._1.result._1, $0._1.result._2), suffix: $0._1.suffix}); }
    $runtime.fail();
  })();
  if (v2.tag === "Left") {
    if (s.position === v2._1.pos) {
      const $1 = sep(s);
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
      if ($1.tag === "Right") { return Data$dEither.$Either("Right", {result: Data$dList$dTypes.Nil, suffix: $1._1.suffix}); }
      $runtime.fail();
    }
    return Data$dEither.$Either("Left", {error: v2._1.error, pos: v2._1.pos});
  }
  return v2;
};
const sepBy1 = p => sep => s => {
  const $0 = p(s);
  return (() => {
    if ($0.tag === "Left") {
      const $1 = $0._1;
      return v => Data$dEither.$Either("Left", $1);
    }
    if ($0.tag === "Right") {
      const $1 = $0._1;
      return f => f($1);
    }
    $runtime.fail();
  })()(v1 => {
    const $1 = v1.result;
    const $2 = many(StringParser$dParser.applyParser.apply(x => {
      const $2 = sep(x);
      if ($2.tag === "Left") { return Data$dEither.$Either("Left", $2._1); }
      if ($2.tag === "Right") { return Data$dEither.$Either("Right", {result: Control$dApply.identity, suffix: $2._1.suffix}); }
      $runtime.fail();
    })(p))(v1.suffix);
    return (() => {
      if ($2.tag === "Left") {
        const $3 = $2._1;
        return v => Data$dEither.$Either("Left", $3);
      }
      if ($2.tag === "Right") {
        const $3 = $2._1;
        return f => f($3);
      }
      $runtime.fail();
    })()(v1$1 => Data$dEither.$Either("Right", {result: Data$dNonEmpty.$NonEmpty($1, v1$1.result), suffix: v1$1.suffix}));
  });
};
const sepBy = p => sep => s => {
  const $0 = sepBy1(p)(sep)(s);
  const v2 = (() => {
    if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
    if ($0.tag === "Right") { return Data$dEither.$Either("Right", {result: Data$dList$dTypes.$List("Cons", $0._1.result._1, $0._1.result._2), suffix: $0._1.suffix}); }
    $runtime.fail();
  })();
  if (v2.tag === "Left") {
    if (s.position === v2._1.pos) { return Data$dEither.$Either("Right", {result: Data$dList$dTypes.Nil, suffix: s}); }
    return Data$dEither.$Either("Left", {error: v2._1.error, pos: v2._1.pos});
  }
  return v2;
};
const many1Till = p => end => s => {
  const $0 = p(s);
  return (() => {
    if ($0.tag === "Left") {
      const $1 = $0._1;
      return v => Data$dEither.$Either("Left", $1);
    }
    if ($0.tag === "Right") {
      const $1 = $0._1;
      return f => f($1);
    }
    $runtime.fail();
  })()(v1 => StringParser$dParser.monadRecParser.tailRecM(acc => s$1 => {
    const $1 = end(s$1);
    const v2 = (() => {
      if ($1.tag === "Left") {
        const $2 = $1._1;
        return v => Data$dEither.$Either("Left", $2);
      }
      if ($1.tag === "Right") {
        const $2 = $1._1;
        return f => f($2);
      }
      $runtime.fail();
    })()(v1$1 => Data$dEither.$Either(
      "Right",
      {result: Control$dMonad$dRec$dClass.$Step("Done", Data$dList$dNonEmpty.wrappedOperation("reverse")(Data$dList.reverse)(acc)), suffix: v1$1.suffix}
    ));
    if (v2.tag === "Left") {
      if (s$1.position === v2._1.pos) {
        const v1$1 = p(s$1);
        if (v1$1.tag === "Right") {
          if (s$1.position < v1$1._1.suffix.position) {
            return Data$dEither.$Either(
              "Right",
              {result: Control$dMonad$dRec$dClass.$Step("Loop", Data$dNonEmpty.$NonEmpty(v1$1._1.result, Data$dList$dTypes.$List("Cons", acc._1, acc._2))), suffix: v1$1._1.suffix}
            );
          }
          return Data$dEither.$Either("Left", {pos: s$1.position, error: "Consumed no input."});
        }
        return (() => {
          if (v1$1.tag === "Left") {
            const $2 = v1$1._1;
            return v => Data$dEither.$Either("Left", $2);
          }
          if (v1$1.tag === "Right") {
            const $2 = v1$1._1;
            return f => f($2);
          }
          $runtime.fail();
        })()(v1$2 => Data$dEither.$Either(
          "Right",
          {result: Control$dMonad$dRec$dClass.$Step("Loop", Data$dNonEmpty.$NonEmpty(v1$2.result, Data$dList$dTypes.$List("Cons", acc._1, acc._2))), suffix: v1$2.suffix}
        ));
      }
      return Data$dEither.$Either("Left", {error: v2._1.error, pos: v2._1.pos});
    }
    return v2;
  })(Data$dNonEmpty.$NonEmpty(v1.result, Data$dList$dTypes.Nil))(v1.suffix));
};
const manyTill = p => end => {
  const $0 = StringParser$dParser.applyParser.apply(x => {
    const $0 = end(x);
    if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
    if ($0.tag === "Right") { return Data$dEither.$Either("Right", {result: Control$dApply.identity, suffix: $0._1.suffix}); }
    $runtime.fail();
  })(s => Data$dEither.$Either("Right", {result: Data$dList$dTypes.Nil, suffix: s}));
  return s => {
    const v2 = $0(s);
    if (v2.tag === "Left") {
      if (s.position === v2._1.pos) {
        const $1 = many1Till(p)(end)(s);
        if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
        if ($1.tag === "Right") { return Data$dEither.$Either("Right", {result: Data$dList$dTypes.$List("Cons", $1._1.result._1, $1._1.result._2), suffix: $1._1.suffix}); }
        $runtime.fail();
      }
      return Data$dEither.$Either("Left", {error: v2._1.error, pos: v2._1.pos});
    }
    return v2;
  };
};
export {
  assertConsume,
  between,
  chainl,
  chainl1,
  chainl1$p,
  chainr,
  chainr1,
  chainr1$p,
  choice,
  endBy,
  endBy1,
  lookAhead,
  many,
  many1,
  many1Till,
  manyTill,
  option,
  optionMaybe,
  optional,
  sepBy,
  sepBy1,
  sepEndBy,
  sepEndBy1,
  $$try as try,
  tryAhead,
  withError
};
