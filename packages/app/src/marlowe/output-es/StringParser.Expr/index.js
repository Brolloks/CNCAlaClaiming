// | This module defines helper functions for defining parsers using operator tables.
import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
const $Assoc = tag => tag;
const $Operator = (tag, _1, _2) => ({tag, _1, _2});
const identity = x => x;
const AssocNone = /* #__PURE__ */ $Assoc("AssocNone");
const AssocLeft = /* #__PURE__ */ $Assoc("AssocLeft");
const AssocRight = /* #__PURE__ */ $Assoc("AssocRight");
const Infix = value0 => value1 => $Operator("Infix", value0, value1);
const Prefix = value0 => $Operator("Prefix", value0);
const Postfix = value0 => $Operator("Postfix", value0);
const buildExprParser = operators => simpleExpr => {
  const rassocP1 = x => rassocOp => prefixP => term => postfixP => {
    const $0 = rassocP(x)(rassocOp)(prefixP)(term)(postfixP);
    return s => {
      const v2 = $0(s);
      if (v2.tag === "Left") {
        if (s.position === v2._1.pos) { return Data$dEither.$Either("Right", {result: x, suffix: s}); }
        return Data$dEither.$Either("Left", {error: v2._1.error, pos: v2._1.pos});
      }
      return v2;
    };
  };
  const rassocP = x => rassocOp => prefixP => term => postfixP => s => {
    const $0 = rassocOp(s);
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
      const $1 = prefixP(v1.suffix);
      const $2 = (() => {
        if ($1.tag === "Left") {
          const $2 = $1._1;
          return v => Data$dEither.$Either("Left", $2);
        }
        if ($1.tag === "Right") {
          const $2 = $1._1;
          return f => f($2);
        }
        $runtime.fail();
      })()(v1$1 => {
        const $2 = term(v1$1.suffix);
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
        })()(v1$2 => {
          const $3 = v1$2.result;
          const $4 = postfixP(v1$2.suffix);
          return (() => {
            if ($4.tag === "Left") {
              const $5 = $4._1;
              return v => Data$dEither.$Either("Left", $5);
            }
            if ($4.tag === "Right") {
              const $5 = $4._1;
              return f => f($5);
            }
            $runtime.fail();
          })()(v1$3 => Data$dEither.$Either("Right", {result: v1$3.result(v1$1.result($3)), suffix: v1$3.suffix}));
        });
      });
      const $3 = (() => {
        if ($2.tag === "Left") {
          const $3 = $2._1;
          return v => Data$dEither.$Either("Left", $3);
        }
        if ($2.tag === "Right") {
          const $3 = $2._1;
          return f => f($3);
        }
        $runtime.fail();
      })()(v1$1 => rassocP1(v1$1.result)(rassocOp)(prefixP)(term)(postfixP)(v1$1.suffix));
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
      })()(v1$1 => Data$dEither.$Either("Right", {result: v1.result(x)(v1$1.result), suffix: v1$1.suffix}));
    });
  };
  const lassocP1 = x => lassocOp => prefixP => term => postfixP => {
    const $0 = lassocP(x)(lassocOp)(prefixP)(term)(postfixP);
    return s => {
      const v2 = $0(s);
      if (v2.tag === "Left") {
        if (s.position === v2._1.pos) { return Data$dEither.$Either("Right", {result: x, suffix: s}); }
        return Data$dEither.$Either("Left", {error: v2._1.error, pos: v2._1.pos});
      }
      return v2;
    };
  };
  const lassocP = x => lassocOp => prefixP => term => postfixP => s => {
    const $0 = lassocOp(s);
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
      const $1 = prefixP(v1.suffix);
      const $2 = (() => {
        if ($1.tag === "Left") {
          const $2 = $1._1;
          return v => Data$dEither.$Either("Left", $2);
        }
        if ($1.tag === "Right") {
          const $2 = $1._1;
          return f => f($2);
        }
        $runtime.fail();
      })()(v1$1 => {
        const $2 = term(v1$1.suffix);
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
        })()(v1$2 => {
          const $3 = v1$2.result;
          const $4 = postfixP(v1$2.suffix);
          return (() => {
            if ($4.tag === "Left") {
              const $5 = $4._1;
              return v => Data$dEither.$Either("Left", $5);
            }
            if ($4.tag === "Right") {
              const $5 = $4._1;
              return f => f($5);
            }
            $runtime.fail();
          })()(v1$3 => Data$dEither.$Either("Right", {result: v1$3.result(v1$1.result($3)), suffix: v1$3.suffix}));
        });
      });
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
      })()(v1$1 => lassocP1(v1.result(x)(v1$1.result))(lassocOp)(prefixP)(term)(postfixP)(v1$1.suffix));
    });
  };
  return Data$dFoldable.foldlArray(term => ops => {
    const accum = Data$dFoldable.foldrArray(v => v1 => {
      if (v.tag === "Infix") {
        if (v._2 === "AssocNone") {
          return {rassoc: v1.rassoc, lassoc: v1.lassoc, nassoc: Data$dList$dTypes.$List("Cons", v._1, v1.nassoc), prefix: v1.prefix, postfix: v1.postfix};
        }
        if (v._2 === "AssocLeft") {
          return {rassoc: v1.rassoc, lassoc: Data$dList$dTypes.$List("Cons", v._1, v1.lassoc), nassoc: v1.nassoc, prefix: v1.prefix, postfix: v1.postfix};
        }
        if (v._2 === "AssocRight") {
          return {rassoc: Data$dList$dTypes.$List("Cons", v._1, v1.rassoc), lassoc: v1.lassoc, nassoc: v1.nassoc, prefix: v1.prefix, postfix: v1.postfix};
        }
        $runtime.fail();
      }
      if (v.tag === "Prefix") { return {rassoc: v1.rassoc, lassoc: v1.lassoc, nassoc: v1.nassoc, prefix: Data$dList$dTypes.$List("Cons", v._1, v1.prefix), postfix: v1.postfix}; }
      if (v.tag === "Postfix") { return {rassoc: v1.rassoc, lassoc: v1.lassoc, nassoc: v1.nassoc, prefix: v1.prefix, postfix: Data$dList$dTypes.$List("Cons", v._1, v1.postfix)}; }
      $runtime.fail();
    })({rassoc: Data$dList$dTypes.Nil, lassoc: Data$dList$dTypes.Nil, nassoc: Data$dList$dTypes.Nil, prefix: Data$dList$dTypes.Nil, postfix: Data$dList$dTypes.Nil})(ops);
    const go = go$a0$copy => go$a1$copy => {
      let go$a0 = go$a0$copy, go$a1 = go$a1$copy, go$c = true, go$r;
      while (go$c) {
        const b = go$a0, v = go$a1;
        if (v.tag === "Nil") {
          go$c = false;
          go$r = b;
          continue;
        }
        if (v.tag === "Cons") {
          go$a0 = s => {
            const v2 = b(s);
            if (v2.tag === "Left") {
              if (s.position === v2._1.pos) { return v._1(s); }
              return Data$dEither.$Either("Left", {error: v2._1.error, pos: v2._1.pos});
            }
            return v2;
          };
          go$a1 = v._2;
          continue;
        }
        $runtime.fail();
      }
      return go$r;
    };
    const lassocOp = go(v => Data$dEither.$Either("Left", {pos: v.position, error: "Nothing to parse"}))(accum.lassoc);
    const go$1 = go$1$a0$copy => go$1$a1$copy => {
      let go$1$a0 = go$1$a0$copy, go$1$a1 = go$1$a1$copy, go$1$c = true, go$1$r;
      while (go$1$c) {
        const b = go$1$a0, v = go$1$a1;
        if (v.tag === "Nil") {
          go$1$c = false;
          go$1$r = b;
          continue;
        }
        if (v.tag === "Cons") {
          go$1$a0 = s => {
            const v2 = b(s);
            if (v2.tag === "Left") {
              if (s.position === v2._1.pos) { return v._1(s); }
              return Data$dEither.$Either("Left", {error: v2._1.error, pos: v2._1.pos});
            }
            return v2;
          };
          go$1$a1 = v._2;
          continue;
        }
        $runtime.fail();
      }
      return go$1$r;
    };
    const nassocOp = go$1(v => Data$dEither.$Either("Left", {pos: v.position, error: "Nothing to parse"}))(accum.nassoc);
    const go$2 = go$2$a0$copy => go$2$a1$copy => {
      let go$2$a0 = go$2$a0$copy, go$2$a1 = go$2$a1$copy, go$2$c = true, go$2$r;
      while (go$2$c) {
        const b = go$2$a0, v = go$2$a1;
        if (v.tag === "Nil") {
          go$2$c = false;
          go$2$r = b;
          continue;
        }
        if (v.tag === "Cons") {
          go$2$a0 = s => {
            const v2 = b(s);
            if (v2.tag === "Left") {
              if (s.position === v2._1.pos) { return v._1(s); }
              return Data$dEither.$Either("Left", {error: v2._1.error, pos: v2._1.pos});
            }
            return v2;
          };
          go$2$a1 = v._2;
          continue;
        }
        $runtime.fail();
      }
      return go$2$r;
    };
    const $0 = go$2(v => Data$dEither.$Either("Left", {pos: v.position, error: "Nothing to parse"}))(accum.postfix);
    const postfixOp = s => {
      const v2 = $0(s);
      if (v2.tag === "Left") {
        if (s.position === v2._1.pos) { return Data$dEither.$Either("Left", {pos: s.position, error: ""}); }
        return Data$dEither.$Either("Left", {error: v2._1.error, pos: v2._1.pos});
      }
      return v2;
    };
    const go$3 = go$3$a0$copy => go$3$a1$copy => {
      let go$3$a0 = go$3$a0$copy, go$3$a1 = go$3$a1$copy, go$3$c = true, go$3$r;
      while (go$3$c) {
        const b = go$3$a0, v = go$3$a1;
        if (v.tag === "Nil") {
          go$3$c = false;
          go$3$r = b;
          continue;
        }
        if (v.tag === "Cons") {
          go$3$a0 = s => {
            const v2 = b(s);
            if (v2.tag === "Left") {
              if (s.position === v2._1.pos) { return v._1(s); }
              return Data$dEither.$Either("Left", {error: v2._1.error, pos: v2._1.pos});
            }
            return v2;
          };
          go$3$a1 = v._2;
          continue;
        }
        $runtime.fail();
      }
      return go$3$r;
    };
    const $1 = go$3(v => Data$dEither.$Either("Left", {pos: v.position, error: "Nothing to parse"}))(accum.prefix);
    const prefixOp = s => {
      const v2 = $1(s);
      if (v2.tag === "Left") {
        if (s.position === v2._1.pos) { return Data$dEither.$Either("Left", {pos: s.position, error: ""}); }
        return Data$dEither.$Either("Left", {error: v2._1.error, pos: v2._1.pos});
      }
      return v2;
    };
    const go$4 = go$4$a0$copy => go$4$a1$copy => {
      let go$4$a0 = go$4$a0$copy, go$4$a1 = go$4$a1$copy, go$4$c = true, go$4$r;
      while (go$4$c) {
        const b = go$4$a0, v = go$4$a1;
        if (v.tag === "Nil") {
          go$4$c = false;
          go$4$r = b;
          continue;
        }
        if (v.tag === "Cons") {
          go$4$a0 = s => {
            const v2 = b(s);
            if (v2.tag === "Left") {
              if (s.position === v2._1.pos) { return v._1(s); }
              return Data$dEither.$Either("Left", {error: v2._1.error, pos: v2._1.pos});
            }
            return v2;
          };
          go$4$a1 = v._2;
          continue;
        }
        $runtime.fail();
      }
      return go$4$r;
    };
    const rassocOp = go$4(v => Data$dEither.$Either("Left", {pos: v.position, error: "Nothing to parse"}))(accum.rassoc);
    return s => {
      const v2 = prefixOp(s);
      const $2 = (() => {
        if (v2.tag === "Left") {
          if (s.position === v2._1.pos) { return Data$dEither.$Either("Right", {result: identity, suffix: s}); }
          return Data$dEither.$Either("Left", {error: v2._1.error, pos: v2._1.pos});
        }
        return v2;
      })();
      const $3 = (() => {
        if ($2.tag === "Left") {
          const $3 = $2._1;
          return v => Data$dEither.$Either("Left", $3);
        }
        if ($2.tag === "Right") {
          const $3 = $2._1;
          return f => f($3);
        }
        $runtime.fail();
      })()(v1 => {
        const $3 = term(v1.suffix);
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
        })()(v1$1 => {
          const v2$1 = postfixOp(v1$1.suffix);
          if (v2$1.tag === "Left") {
            if (v1$1.suffix.position === v2$1._1.pos) { return Data$dEither.$Either("Right", {result: v1.result(v1$1.result), suffix: v1$1.suffix}); }
            return Data$dEither.$Either("Left", {error: v2$1._1.error, pos: v2$1._1.pos});
          }
          return (() => {
            if (v2$1.tag === "Left") {
              const $4 = v2$1._1;
              return v => Data$dEither.$Either("Left", $4);
            }
            if (v2$1.tag === "Right") {
              const $4 = v2$1._1;
              return f => f($4);
            }
            $runtime.fail();
          })()(v1$2 => Data$dEither.$Either("Right", {result: v1$2.result(v1.result(v1$1.result)), suffix: v1$2.suffix}));
        });
      });
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
      })()(v1 => {
        const $4 = lassocP(v1.result)(lassocOp)(s$1 => {
          const v2$1 = prefixOp(s$1);
          if (v2$1.tag === "Left") {
            if (s$1.position === v2$1._1.pos) { return Data$dEither.$Either("Right", {result: identity, suffix: s$1}); }
            return Data$dEither.$Either("Left", {error: v2$1._1.error, pos: v2$1._1.pos});
          }
          return v2$1;
        })(term)(s$1 => {
          const v2$1 = postfixOp(s$1);
          if (v2$1.tag === "Left") {
            if (s$1.position === v2$1._1.pos) { return Data$dEither.$Either("Right", {result: identity, suffix: s$1}); }
            return Data$dEither.$Either("Left", {error: v2$1._1.error, pos: v2$1._1.pos});
          }
          return v2$1;
        });
        const v2$1 = rassocP(v1.result)(rassocOp)(s$1 => {
          const v2$1 = prefixOp(s$1);
          if (v2$1.tag === "Left") {
            if (s$1.position === v2$1._1.pos) { return Data$dEither.$Either("Right", {result: identity, suffix: s$1}); }
            return Data$dEither.$Either("Left", {error: v2$1._1.error, pos: v2$1._1.pos});
          }
          return v2$1;
        })(term)(s$1 => {
          const v2$1 = postfixOp(s$1);
          if (v2$1.tag === "Left") {
            if (s$1.position === v2$1._1.pos) { return Data$dEither.$Either("Right", {result: identity, suffix: s$1}); }
            return Data$dEither.$Either("Left", {error: v2$1._1.error, pos: v2$1._1.pos});
          }
          return v2$1;
        })(v1.suffix);
        if (v2$1.tag === "Left") {
          if (v1.suffix.position === v2$1._1.pos) {
            const v2$2 = $4(v1.suffix);
            if (v2$2.tag === "Left") {
              if (v1.suffix.position === v2$2._1.pos) {
                const $5 = nassocOp(v1.suffix);
                const v2$3 = (() => {
                  if ($5.tag === "Left") {
                    const $6 = $5._1;
                    return v => Data$dEither.$Either("Left", $6);
                  }
                  if ($5.tag === "Right") {
                    const $6 = $5._1;
                    return f => f($6);
                  }
                  $runtime.fail();
                })()(v1$1 => {
                  const v2$3 = prefixOp(v1$1.suffix);
                  const $6 = (() => {
                    if (v2$3.tag === "Left") {
                      if (v1$1.suffix.position === v2$3._1.pos) { return Data$dEither.$Either("Right", {result: identity, suffix: v1$1.suffix}); }
                      return Data$dEither.$Either("Left", {error: v2$3._1.error, pos: v2$3._1.pos});
                    }
                    return v2$3;
                  })();
                  const $7 = (() => {
                    if ($6.tag === "Left") {
                      const $7 = $6._1;
                      return v => Data$dEither.$Either("Left", $7);
                    }
                    if ($6.tag === "Right") {
                      const $7 = $6._1;
                      return f => f($7);
                    }
                    $runtime.fail();
                  })()(v1$2 => {
                    const $7 = term(v1$2.suffix);
                    return (() => {
                      if ($7.tag === "Left") {
                        const $8 = $7._1;
                        return v => Data$dEither.$Either("Left", $8);
                      }
                      if ($7.tag === "Right") {
                        const $8 = $7._1;
                        return f => f($8);
                      }
                      $runtime.fail();
                    })()(v1$3 => {
                      const v2$4 = postfixOp(v1$3.suffix);
                      if (v2$4.tag === "Left") {
                        if (v1$3.suffix.position === v2$4._1.pos) { return Data$dEither.$Either("Right", {result: v1$2.result(v1$3.result), suffix: v1$3.suffix}); }
                        return Data$dEither.$Either("Left", {error: v2$4._1.error, pos: v2$4._1.pos});
                      }
                      return (() => {
                        if (v2$4.tag === "Left") {
                          const $8 = v2$4._1;
                          return v => Data$dEither.$Either("Left", $8);
                        }
                        if (v2$4.tag === "Right") {
                          const $8 = v2$4._1;
                          return f => f($8);
                        }
                        $runtime.fail();
                      })()(v1$4 => Data$dEither.$Either("Right", {result: v1$4.result(v1$2.result(v1$3.result)), suffix: v1$4.suffix}));
                    });
                  });
                  return (() => {
                    if ($7.tag === "Left") {
                      const $8 = $7._1;
                      return v => Data$dEither.$Either("Left", $8);
                    }
                    if ($7.tag === "Right") {
                      const $8 = $7._1;
                      return f => f($8);
                    }
                    $runtime.fail();
                  })()(v1$2 => Data$dEither.$Either("Right", {result: v1$1.result(v1.result)(v1$2.result), suffix: v1$2.suffix}));
                });
                if (v2$3.tag === "Left") {
                  if (v1.suffix.position === v2$3._1.pos) { return Data$dEither.$Either("Right", {result: v1.result, suffix: v1.suffix}); }
                  return Data$dEither.$Either("Left", {error: v2$3._1.error, pos: v2$3._1.pos});
                }
                return v2$3;
              }
              return Data$dEither.$Either("Left", {error: v2$2._1.error, pos: v2$2._1.pos});
            }
            return v2$2;
          }
          return Data$dEither.$Either("Left", {error: v2$1._1.error, pos: v2$1._1.pos});
        }
        return v2$1;
      });
    };
  })(simpleExpr)(operators);
};
export {$Assoc, $Operator, AssocLeft, AssocNone, AssocRight, Infix, Postfix, Prefix, buildExprParser, identity};
