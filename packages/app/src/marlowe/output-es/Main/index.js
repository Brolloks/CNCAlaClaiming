import * as $runtime from "../runtime.js";
import * as CardanoMultiplatformLib from "../CardanoMultiplatformLib/index.js";
import * as Component$dApp from "../Component.App/index.js";
import * as Component$dMessageHub from "../Component.MessageHub/index.js";
import * as Contrib$dEffect from "../Contrib.Effect/index.js";
import * as Contrib$dJsonBigInt from "../Contrib.JsonBigInt/index.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dArgonaut$dDecode$dDecoders from "../Data.Argonaut.Decode.Decoders/index.js";
import * as Data$dArgonaut$dDecode$dError from "../Data.Argonaut.Decode.Error/index.js";
import * as Data$dBigInt from "../Data.BigInt/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dClass from "../Effect.Class/index.js";
import * as Effect$dClass$dConsole from "../Effect.Class.Console/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Marlowe$dRuntime$dWeb$dStreaming from "../Marlowe.Runtime.Web.Streaming/index.js";
import * as Marlowe$dRuntime$dWeb$dTypes from "../Marlowe.Runtime.Web.Types/index.js";
import * as React$dBasic from "../React.Basic/index.js";
import * as React$dBasic$dDOM$dClient from "../React.Basic.DOM.Client/index.js";
import * as Web$dDOM$dNonElementParentNode from "../Web.DOM.NonElementParentNode/index.js";
import * as Web$dHTML from "../Web.HTML/index.js";
import * as Web$dHTML$dWindow from "../Web.HTML.Window/index.js";
const decodeJson = /* #__PURE__ */ Data$dArgonaut$dDecode$dDecoders.decodeForeignObject(Data$dEither.Right);
const liftEither = /* #__PURE__ */ Contrib$dEffect.liftEither(Effect$dClass.monadEffectEffect)(Data$dArgonaut$dDecode$dError.showJsonDecodeError);
const mkContractsWithTransactions = /* #__PURE__ */ Marlowe$dRuntime$dWeb$dStreaming.mkContractsWithTransactions(Marlowe$dRuntime$dWeb$dTypes.queryParamsContractsEndpo);
const decodeConfig = json => {
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
  })()(obj => {
    const $1 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dArgonaut$dCore.caseJsonString(Data$dEither.$Either(
      "Left",
      Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")
    ))(Data$dEither.Right))(obj)("marloweWebServerUrl");
    return (() => {
      if ($1.tag === "Left") {
        const $2 = $1._1;
        return v => Data$dEither.$Either("Left", $2);
      }
      if ($1.tag === "Right") {
        const $2 = $1._1;
        return f => f($2);
      }
      $runtime.fail();
    })()(marloweWebServerUrl => {
      const $2 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dArgonaut$dCore.caseJsonBoolean(Data$dEither.$Either(
        "Left",
        Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Boolean")
      ))(Data$dEither.Right))(obj)("develMode");
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
      })()(develMode => {
        const $3 = Data$dArgonaut$dDecode$dDecoders.getField(Data$dArgonaut$dCore.caseJsonString(Data$dEither.$Either(
          "Left",
          Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")
        ))(Data$dEither.Right))(obj)("network");
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
        })()(network => Data$dEither.$Either("Right", {marloweWebServerUrl, develMode, network}));
      });
    });
  });
};
const main = configJson => {
  const $0 = liftEither(decodeConfig(configJson));
  return () => {
    const config = $0();
    Contrib$dJsonBigInt.patchersImpl.patchStringify();
    Contrib$dJsonBigInt.patchersImpl.patchParse();
    const slotting = config.network === "mainnet"
      ? {
          slotLength: Data$dBigInt.fromInt(1000),
          slotZeroTime: (() => {
            const $1 = Data$dBigInt.fromString("1591566291000");
            if ($1.tag === "Just") { return $1._1; }
            $runtime.fail();
          })()
        }
      : {
          slotLength: Data$dBigInt.fromInt(1000),
          slotZeroTime: (() => {
            const $1 = Data$dBigInt.fromString("1666656000000");
            if ($1.tag === "Just") { return $1._1; }
            $runtime.fail();
          })()
        };
    const logger = config.develMode ? Effect$dClass$dConsole.log(Effect$dClass.monadEffectEffect) : v => () => {};
    const $1 = Web$dHTML.window();
    const v = Web$dHTML$dWindow.document($1)();
    const $2 = Effect$dException.throwException(Effect$dException.error("Could not find element with id 'app-root'"));
    const $3 = Web$dDOM$dNonElementParentNode.getElementById("app-root")(v)();
    const v1 = (() => {
      if ($3.tag === "Nothing") { return $2(); }
      if ($3.tag === "Just") { return $3._1; }
      $runtime.fail();
    })();
    const reactRoot = React$dBasic$dDOM$dClient.createRoot(v1)();
    const fiber = Effect$dAff._makeFiber(
      Effect$dAff.ffiUtil,
      Effect$dAff._bind(mkContractsWithTransactions(60000.0)(50.0)({tags: ["marffaello-v1"]})(v2 => true)(Data$dMaybe.Nothing)(config.marloweWebServerUrl))(contractStream => Effect$dAff._bind(CardanoMultiplatformLib.importLib)(v2 => {
        if (v2.tag === "Nothing") { return Effect$dAff._liftEffect(logger("Cardano serialization lib loading failed")); }
        if (v2.tag === "Just") {
          const $4 = v2._1;
          return Effect$dAff._bind(Effect$dAff._liftEffect(React$dBasic.createContext(Data$dMaybe.Nothing)))(walletInfoCtx => Effect$dAff._bind(Effect$dAff._liftEffect(Component$dMessageHub.mkMessageHub))(v3 => Effect$dAff._bind(Effect$dAff._liftEffect(Component$dApp.mkApp({
            cardanoMultiplatformLib: $4,
            walletInfoCtx,
            logger,
            contractStream,
            msgHub: v3._2,
            runtime: {root: "contracts", withdrawalsEndpoint: "withdrawals", serverURL: config.marloweWebServerUrl},
            aboutMarkdown: "placeholder",
            slotting
          })))(app => Effect$dAff._liftEffect(React$dBasic$dDOM$dClient.renderRoot(reactRoot)(v3._1([app()]))))));
        }
        $runtime.fail();
      }))
    )();
    fiber.run();
  };
};
export {decodeConfig, decodeJson, liftEither, main, mkContractsWithTransactions};
