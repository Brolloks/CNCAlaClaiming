import * as $runtime from "../runtime.js";
import * as Contrib$dCardano from "../Contrib.Cardano/index.js";
import * as Contrib$dWeb$dSubtleCrypto from "../Contrib.Web.SubtleCrypto/index.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dArgonaut$dDecode$dDecoders from "../Data.Argonaut.Decode.Decoders/index.js";
import * as Data$dArgonaut$dDecode$dError from "../Data.Argonaut.Decode.Error/index.js";
import * as Data$dArgonaut$dEncode$dClass from "../Data.Argonaut.Encode.Class/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as JS$dUnsafe$dStringify from "../JS.Unsafe.Stringify/index.js";
import * as Marlowe$dRuntime$dWeb$dTypes from "../Marlowe.Runtime.Web.Types/index.js";
const $RaffleTags = (tag, _1) => ({tag, _1});
const encodeJson = /* #__PURE__ */ (() => Data$dArgonaut$dEncode$dClass.encodeJsonArray(Data$dArgonaut$dEncode$dClass.encodeJsonJson).encodeJson)();
const encodeJson7 = /* #__PURE__ */ (() => Data$dArgonaut$dEncode$dClass.encodeJsonArray(Data$dArgonaut$dEncode$dClass.encodeJsonJString).encodeJson)();
const decodeJson = /* #__PURE__ */ Data$dArgonaut$dDecode$dDecoders.decodeArray(Data$dEither.Right);
const decodeJson6 = /* #__PURE__ */ (() => Contrib$dWeb$dSubtleCrypto.decodeJsonSha2Hex(Contrib$dWeb$dSubtleCrypto.reflectSha2LengthSha256).decodeJson)();
const decodeJson7 = /* #__PURE__ */ Data$dArgonaut$dDecode$dDecoders.decodeArray(/* #__PURE__ */ Data$dArgonaut$dCore.caseJsonString(/* #__PURE__ */ Data$dEither.$Either(
  "Left",
  /* #__PURE__ */ Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")
))(Data$dEither.Right));
const RaffleRound = x => x;
const InitialPriceChunkDeposit = value0 => $RaffleTags("InitialPriceChunkDeposit", value0);
const PriceChunkDeposit = value0 => $RaffleTags("PriceChunkDeposit", value0);
const Raffle = value0 => $RaffleTags("Raffle", value0);
const ExtraTags = x => x;
const AppTags = x => x;
const newtypeExtraTags_ = {Coercible0: () => {}};
const newtypeAppTags_ = {Coercible0: () => {}};
const eqRaffleRound = {eq: x => y => x.priceAssetName === y.priceAssetName && Contrib$dCardano.eq5(x.tokenBundle)(y.tokenBundle)};
const encodeJsonRaffleRound = {encodeJson: v => encodeJson([Data$dArgonaut$dCore.fromString(v.priceAssetName), Contrib$dCardano.encodeJsonNonAdaAssets.encodeJson(v.tokenBundle)])};
const encodeJson8 = /* #__PURE__ */ (() => Data$dArgonaut$dEncode$dClass.encodeJsonNonEmptyArray(encodeJsonRaffleRound).encodeJson)();
const encodeJsonRaffleTags = {
  encodeJson: v => {
    if (v.tag === "PriceChunkDeposit") {
      return encodeJson([
        Data$dArgonaut$dCore.fromString("deposit"),
        encodeJson([
          Data$dArgonaut$dCore.fromNumber(Data$dInt.toNumber(v._1.roundNo)),
          Data$dArgonaut$dCore.fromString(v._1.priceAssetName),
          Data$dArgonaut$dCore.fromString(v._1.raffleId.txId + "#" + Data$dShow.showIntImpl(v._1.raffleId.txIx))
        ])
      ]);
    }
    if (v.tag === "InitialPriceChunkDeposit") {
      return encodeJson([
        Data$dArgonaut$dCore.fromString("init"),
        encodeJson([
          encodeJson8(v._1.rounds),
          Data$dArgonaut$dCore.fromNumber(Data$dInt.toNumber(v._1.minted ? 1 : 0)),
          Data$dArgonaut$dCore.fromString(v._1.participantsFingerprint)
        ])
      ]);
    }
    if (v.tag === "Raffle") {
      return encodeJson([
        Data$dArgonaut$dCore.fromString("raffle"),
        encodeJson([
          Data$dArgonaut$dCore.fromString(v._1.raffleId.txId + "#" + Data$dShow.showIntImpl(v._1.raffleId.txIx)),
          Data$dArgonaut$dCore.fromNumber(Data$dInt.toNumber(v._1.roundNo))
        ])
      ]);
    }
    $runtime.fail();
  }
};
const encodeJsonAppTags = {encodeJson: v => encodeJson([encodeJson7(v.extraTags), encodeJsonRaffleTags.encodeJson(v.raffleTags)])};
const decodeJsonRaffleRound = {
  decodeJson: json => {
    const $0 = decodeJson(json);
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
    })()(v => {
      if (v.length === 2) {
        const $1 = v[1];
        const $2 = Data$dArgonaut$dCore._caseJson(
          v$1 => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
          v$1 => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
          v$1 => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
          Data$dEither.Right,
          v$1 => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
          v$1 => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
          v[0]
        );
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
        })()(priceAssetName => {
          const $3 = Contrib$dCardano.decodeJsonNonAdaAssets.decodeJson($1);
          return (() => {
            if ($3.tag === "Left") {
              const $4 = $3._1;
              return v$1 => Data$dEither.$Either("Left", $4);
            }
            if ($3.tag === "Right") {
              const $4 = $3._1;
              return f => f($4);
            }
            $runtime.fail();
          })()(tokenBundle => Data$dEither.$Either("Right", {priceAssetName, tokenBundle}));
        });
      }
      return Data$dEither.$Either(
        "Left",
        Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "RaffleRound decoding failed for json: " + Data$dArgonaut$dCore.stringify(json))
      );
    });
  }
};
const decodeJson8 = /* #__PURE__ */ (() => Data$dArgonaut$dDecode$dDecoders.decodeNonEmptyArray(decodeJsonRaffleRound.decodeJson))();
const decodeJsonRaffleTags = {
  decodeJson: json => {
    const $0 = decodeJson(json);
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
    })()(v => {
      if (v.length === 2) {
        const $1 = v[1];
        const $2 = Data$dArgonaut$dCore._caseJson(
          v$1 => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
          v$1 => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
          v$1 => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
          Data$dEither.Right,
          v$1 => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
          v$1 => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
          v[0]
        );
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
        })()(tag => {
          const $3 = decodeJson($1);
          return (() => {
            if ($3.tag === "Left") {
              const $4 = $3._1;
              return v$1 => Data$dEither.$Either("Left", $4);
            }
            if ($3.tag === "Right") {
              const $4 = $3._1;
              return f => f($4);
            }
            $runtime.fail();
          })()(payload => {
            if (payload.length === 3) {
              if (tag === "deposit") {
                const $4 = payload[1];
                const $5 = payload[2];
                const $6 = Data$dArgonaut$dDecode$dDecoders.decodeInt(payload[0]);
                const $7 = (() => {
                  if ($6.tag === "Left") {
                    const $7 = $6._1;
                    return v$1 => Data$dEither.$Either("Left", $7);
                  }
                  if ($6.tag === "Right") {
                    const $7 = $6._1;
                    return f => f($7);
                  }
                  $runtime.fail();
                })()(roundNo => {
                  const $7 = Data$dArgonaut$dCore._caseJson(
                    v$1 => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
                    v$1 => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
                    v$1 => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
                    Data$dEither.Right,
                    v$1 => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
                    v$1 => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
                    $4
                  );
                  return (() => {
                    if ($7.tag === "Left") {
                      const $8 = $7._1;
                      return v$1 => Data$dEither.$Either("Left", $8);
                    }
                    if ($7.tag === "Right") {
                      const $8 = $7._1;
                      return f => f($8);
                    }
                    $runtime.fail();
                  })()(priceAssetName => {
                    const $8 = Marlowe$dRuntime$dWeb$dTypes.decodeJsonTxOutRef.decodeJson($5);
                    return (() => {
                      if ($8.tag === "Left") {
                        const $9 = $8._1;
                        return v$1 => Data$dEither.$Either("Left", $9);
                      }
                      if ($8.tag === "Right") {
                        const $9 = $8._1;
                        return f => f($9);
                      }
                      $runtime.fail();
                    })()(raffleId => Data$dEither.$Either("Right", {roundNo, priceAssetName, raffleId}));
                  });
                });
                if ($7.tag === "Left") { return Data$dEither.$Either("Left", $7._1); }
                if ($7.tag === "Right") { return Data$dEither.$Either("Right", $RaffleTags("PriceChunkDeposit", $7._1)); }
                $runtime.fail();
              }
              if (tag === "init") {
                const $4 = payload[1];
                const $5 = payload[2];
                const $6 = decodeJson8(payload[0]);
                const $7 = (() => {
                  if ($6.tag === "Left") {
                    const $7 = $6._1;
                    return v$1 => Data$dEither.$Either("Left", $7);
                  }
                  if ($6.tag === "Right") {
                    const $7 = $6._1;
                    return f => f($7);
                  }
                  $runtime.fail();
                })()(rounds => {
                  const $7 = Data$dArgonaut$dDecode$dDecoders.decodeInt($4);
                  return (() => {
                    if ($7.tag === "Left") {
                      const $8 = $7._1;
                      return v$1 => Data$dEither.$Either("Left", $8);
                    }
                    if ($7.tag === "Right") {
                      const $8 = $7._1;
                      return f => f($8);
                    }
                    $runtime.fail();
                  })()(mintedInt => {
                    if (mintedInt === 0) {
                      const $8 = decodeJson6($5);
                      return (() => {
                        if ($8.tag === "Left") {
                          const $9 = $8._1;
                          return v$1 => Data$dEither.$Either("Left", $9);
                        }
                        if ($8.tag === "Right") {
                          const $9 = $8._1;
                          return f => f($9);
                        }
                        $runtime.fail();
                      })()(participantsFingerprint => Data$dEither.$Either("Right", {rounds, minted: false, participantsFingerprint}));
                    }
                    if (mintedInt === 1) {
                      const $8 = decodeJson6($5);
                      return (() => {
                        if ($8.tag === "Left") {
                          const $9 = $8._1;
                          return v$1 => Data$dEither.$Either("Left", $9);
                        }
                        if ($8.tag === "Right") {
                          const $9 = $8._1;
                          return f => f($9);
                        }
                        $runtime.fail();
                      })()(participantsFingerprint => Data$dEither.$Either("Right", {rounds, minted: true, participantsFingerprint}));
                    }
                    return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Invalid minted value"));
                  });
                });
                if ($7.tag === "Left") { return Data$dEither.$Either("Left", $7._1); }
                if ($7.tag === "Right") { return Data$dEither.$Either("Right", $RaffleTags("InitialPriceChunkDeposit", $7._1)); }
                $runtime.fail();
              }
              return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Invalid raffle JSON"));
            }
            if (tag === "raffle" && payload.length === 2) {
              const $4 = payload[1];
              const $5 = Marlowe$dRuntime$dWeb$dTypes.decodeJsonTxOutRef.decodeJson(payload[0]);
              const $6 = (() => {
                if ($5.tag === "Left") {
                  const $6 = $5._1;
                  return v$1 => Data$dEither.$Either("Left", $6);
                }
                if ($5.tag === "Right") {
                  const $6 = $5._1;
                  return f => f($6);
                }
                $runtime.fail();
              })()(raffleId => {
                const $6 = Data$dArgonaut$dDecode$dDecoders.decodeInt($4);
                return (() => {
                  if ($6.tag === "Left") {
                    const $7 = $6._1;
                    return v$1 => Data$dEither.$Either("Left", $7);
                  }
                  if ($6.tag === "Right") {
                    const $7 = $6._1;
                    return f => f($7);
                  }
                  $runtime.fail();
                })()(roundNo => Data$dEither.$Either("Right", {raffleId, roundNo}));
              });
              if ($6.tag === "Left") { return Data$dEither.$Either("Left", $6._1); }
              if ($6.tag === "Right") { return Data$dEither.$Either("Right", $RaffleTags("Raffle", $6._1)); }
              $runtime.fail();
            }
            return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Invalid raffle JSON"));
          });
        });
      }
      return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Invalid raffle JSON"));
    });
  }
};
const raffleAppTag = "marffaello-v1";
const toRuntimeTags = appTags => Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, "marffaello-v1", encodeJsonAppTags.encodeJson(appTags), Data$dMap$dInternal.Leaf);
const mkExtraTags = /* #__PURE__ */ Data$dArray.filter(v => v !== "");
const decodeJsonAppTags = {
  decodeJson: json => {
    const $0 = decodeJson(json);
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
    })()(v => {
      if (v.length === 2) {
        const $1 = v[1];
        const $2 = decodeJson7(v[0]);
        const $3 = (() => {
          if ($2.tag === "Left") {
            const $3 = $2._1;
            return v$1 => Data$dEither.$Either("Left", $3);
          }
          if ($2.tag === "Right") {
            const $3 = $2._1;
            return f => f($3);
          }
          $runtime.fail();
        })()(extraTags => {
          const $3 = decodeJsonRaffleTags.decodeJson($1);
          return (() => {
            if ($3.tag === "Left") {
              const $4 = $3._1;
              return v$1 => Data$dEither.$Either("Left", $4);
            }
            if ($3.tag === "Right") {
              const $4 = $3._1;
              return f => f($4);
            }
            $runtime.fail();
          })()(raffleTags => Data$dEither.$Either("Right", {extraTags: mkExtraTags(extraTags), raffleTags}));
        });
        if ($3.tag === "Left") { return Data$dEither.$Either("Left", $3._1); }
        if ($3.tag === "Right") { return Data$dEither.$Either("Right", $3._1); }
        $runtime.fail();
      }
      return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Invalid AppTags:" + JS$dUnsafe$dStringify.unsafeStringify(json)));
    });
  }
};
const fromRuntimeTags = v => {
  const $0 = Data$dMap$dInternal.lookup(Data$dOrd.ordString)("marffaello-v1")(v);
  if ($0.tag === "Just") {
    const $1 = decodeJsonAppTags.decodeJson($0._1);
    if ($1.tag === "Left") { return Data$dMaybe.Nothing; }
    if ($1.tag === "Right") { return Data$dMaybe.$Maybe("Just", $1._1); }
    $runtime.fail();
  }
  if ($0.tag === "Nothing") { return Data$dMaybe.Nothing; }
  $runtime.fail();
};
export {
  $RaffleTags,
  AppTags,
  ExtraTags,
  InitialPriceChunkDeposit,
  PriceChunkDeposit,
  Raffle,
  RaffleRound,
  decodeJson,
  decodeJson6,
  decodeJson7,
  decodeJson8,
  decodeJsonAppTags,
  decodeJsonRaffleRound,
  decodeJsonRaffleTags,
  encodeJson,
  encodeJson7,
  encodeJson8,
  encodeJsonAppTags,
  encodeJsonRaffleRound,
  encodeJsonRaffleTags,
  eqRaffleRound,
  fromRuntimeTags,
  mkExtraTags,
  newtypeAppTags_,
  newtypeExtraTags_,
  raffleAppTag,
  toRuntimeTags
};
