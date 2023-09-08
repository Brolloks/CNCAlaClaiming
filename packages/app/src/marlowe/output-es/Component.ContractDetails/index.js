import * as $runtime from "../runtime.js";
import * as Component$dBodyLayout from "../Component.BodyLayout/index.js";
import * as Component$dInputHelper from "../Component.InputHelper/index.js";
import * as Component$dMarloweYaml from "../Component.MarloweYaml/index.js";
import * as Component$dTypes$dContractInfo from "../Component.Types.ContractInfo/index.js";
import * as Contrib$dReact$dMarloweGraph from "../Contrib.React.MarloweGraph/index.js";
import * as Control$dMonad$dReader$dTrans from "../Control.Monad.Reader.Trans/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Debug from "../Debug/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dClass from "../Effect.Class/index.js";
import * as Language$dMarlowe$dCore$dV1$dSemantics$dTypes from "../Language.Marlowe.Core.V1.Semantics.Types/index.js";
import * as Marlowe$dRuntime$dWeb$dTypes from "../Marlowe.Runtime.Web.Types/index.js";
import * as React$dBasic from "../React.Basic/index.js";
import * as React$dBasic$dDOM$dGenerated from "../React.Basic.DOM.Generated/index.js";
import * as React$dBasic$dDOM$dSimplified$dGenerated from "../React.Basic.DOM.Simplified.Generated/index.js";
import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dAff from "../React.Basic.Hooks.Aff/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as ReactBootstrap$dTab from "../ReactBootstrap.Tab/index.js";
import * as ReactBootstrap$dTabs from "../ReactBootstrap.Tabs/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
const $ContractView = (tag, _1) => ({tag, _1});
const liftEffect = /* #__PURE__ */ (() => Control$dMonad$dReader$dTrans.monadEffectReader(Effect$dClass.monadEffectEffect).liftEffect)();
const useAff = /* #__PURE__ */ React$dBasic$dHooks$dAff.useAff(/* #__PURE__ */ (() => {
  const $0 = Data$dEq.eqArrayImpl(Marlowe$dRuntime$dWeb$dTypes.eqTransactionEndpoint.eq);
  return {
    eq: x => y => $0(x._1)(y._1) && (x._2._1.tag === "Nothing"
      ? y._2._1.tag === "Nothing"
      : x._2._1.tag === "Just" && y._2._1.tag === "Just" && Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqContract.eq(x._2._1._1)(y._2._1._1)) && (x._2._2.tag === "Nothing"
      ? y._2._2.tag === "Nothing"
      : x._2._2.tag === "Just" && y._2._2.tag === "Just" && Language$dMarlowe$dCore$dV1$dSemantics$dTypes.eqState.eq(x._2._2._1)(y._2._2._1))
  };
})());
const traceM = /* #__PURE__ */ Debug.traceM()(Effect$dAff.monadAff);
const pure1 = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const SourceCode = /* #__PURE__ */ $ContractView("SourceCode");
const Graph = value0 => $ContractView("Graph", value0);
const mkComponent = /* #__PURE__ */ (() => Control$dMonad$dReader$dTrans.bindReaderT(Effect.bindEffect).bind(Control$dMonad$dReader$dTrans.monadReaderT(Effect.monadEffect).Bind1().Apply0().Functor0().map(v => v.runtime)(Effect.pureE))(v => {
  const $0 = v.serverURL;
  return liftEffect(React$dBasic$dHooks.component("ContractDetails")(v1 => {
    const $1 = v1.contract;
    const $2 = v1.initialContract;
    const $3 = v1.initialState;
    const $4 = v1.onClose;
    const $5 = v1.state;
    const $6 = v1.transactionEndpoints;
    const $7 = React$dBasic$dHooks.useState$p(Data$dMaybe.Nothing);
    return () => {
      const a = $7();
      useAff(Data$dTuple.$Tuple($6, Data$dTuple.$Tuple($1, $5)))(Effect$dAff._bind(Component$dTypes$dContractInfo.fetchAppliedInputs($0)(Data$dArray.reverse($6)))(v3 => {
        if (v3.tag === "Right") {
          const v4 = Component$dInputHelper.executionPath(v3._1)($2)($3);
          if (v4.tag === "Right") { return Effect$dAff._liftEffect(a._2(Data$dMaybe.$Maybe("Just", v4._1))); }
          if (v4.tag === "Left") {
            const $8 = v4._1;
            return Effect$dAff._bind(traceM("ContractDetails: failed to compute execution path"))(() => Effect$dAff._bind(traceM($8))(() => Effect$dAff._pure()));
          }
          $runtime.fail();
        }
        if (v3.tag === "Left") {
          const $8 = v3._1;
          return Effect$dAff._bind(traceM("ContractDetails: failed to fetch applied inputs"))(() => Effect$dAff._bind(traceM($8))(() => Effect$dAff._pure()));
        }
        $runtime.fail();
      }))();
      return pure1(Component$dBodyLayout.component({
        title: "Contract details",
        description: React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
          children: [
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
              children: [
                "This page shows the details of the selected contract. The page is divided into three tabs: Source Code, Source Graph, and Contract State. Each tab provides a different view of the contract."
              ]
            }),
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: ["Source Code"], className: "h3 fw-bold my-3"}),
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
              children: [
                "In the Source Code tab, you can view the remaining part of the contract that is on the blockchain. This includes the logic and conditions that are yet to be executed. It's a textual representation of the contract, allowing you to understand the contract's structure and logic."
              ]
            }),
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: ["Source Graph"], className: "h3 fw-bold my-3"}),
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
              children: [
                "The Source Graph tab provides a visual representation of the contract. It displays the contract as a graph, with nodes representing the different states and actions of the contract. The paths that have already been executed (transactions) are highlighted, allowing you to see the progression of the contract over time."
              ]
            }),
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: ["Contract State"], className: "h3 fw-bold my-3"}),
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
              children: [
                "In the Contract State tab, you can view the current status of the participant's account, as well as the chosen values and variables that have been set within the contract (using 'let' statements). This tab provides a snapshot of the contract's current state and the participant's interaction with it."
              ]
            }),
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({children: ["Marlowe Explorer"], className: "h3 fw-bold my-3"}),
            React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalp$p)({
              children: [
                "To view the state of the contract on the Cardano blockchain, visit the ",
                React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internala$p)({
                  children: ["Marlowe Explorer"],
                  className: "white-color",
                  href: "https://preview.marlowescan.com/contractView?tab=info&contractId=09127ec2bd83d20dc108e67fe73f7e40280f6f48ea947606a7b73ac5268985a0%231",
                  target: "_blank"
                }),
                "."
              ]
            })
          ]
        }),
        content: Component$dBodyLayout.wrappedContentWithFooter(React$dBasic.fragment([
          React$dBasic.element(ReactBootstrap$dTabs._Tabs)({
            children: [
              (() => {
                if ($1.tag === "Nothing") { return React$dBasic.empty; }
                if ($1.tag === "Just") {
                  return React$dBasic.element(ReactBootstrap$dTab._Tab)({
                    children: [
                      React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                        children: [Component$dMarloweYaml.marloweYaml($1._1)],
                        className: "pt-4 w-100 h-vh50 overflow-auto"
                      })
                    ],
                    eventKey: "source",
                    title: React$dBasic$dDOM$dGenerated.span1({
                      children: [React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalspan$p)({children: [], className: "bi-filetype-yml"}), " Source code"]
                    })
                  });
                }
                $runtime.fail();
              })(),
              (() => {
                if (a._1.tag === "Nothing") { return React$dBasic.empty; }
                if (a._1.tag === "Just") {
                  return React$dBasic.element(ReactBootstrap$dTab._Tab)({
                    children: [
                      React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                        children: [Contrib$dReact$dMarloweGraph.marloweGraph()({contract: $2, executionPath: a._1._1})],
                        className: "pt-4 w-100 h-vh50 overflow-auto"
                      })
                    ],
                    eventKey: "graph",
                    title: React$dBasic$dDOM$dGenerated.span1({
                      children: [React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalspan$p)({children: [], className: "bi-diagram-2"}), " Source graph"]
                    })
                  });
                }
                $runtime.fail();
              })(),
              (() => {
                if ($5.tag === "Nothing") { return React$dBasic.empty; }
                if ($5.tag === "Just") {
                  return React$dBasic.element(ReactBootstrap$dTab._Tab)({
                    children: [
                      React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internaldiv$p)({
                        children: [Component$dMarloweYaml.marloweStateYaml($5._1)],
                        className: "pt-4 w-100 h-vh50 overflow-auto"
                      })
                    ],
                    eventKey: "state",
                    title: React$dBasic$dDOM$dGenerated.span1({
                      children: [React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalspan$p)({children: [], className: "bi-bank"}), " Contract state"]
                    })
                  });
                }
                $runtime.fail();
              })()
            ],
            defaultActiveKey: (() => {
              if ($1.tag === "Nothing") { return "graph"; }
              if ($1.tag === "Just") { return "source"; }
              $runtime.fail();
            })(),
            fill: true,
            justify: true,
            variant: "pills"
          })
        ]))(React$dBasic.fragment([
          React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalbutton$p)({children: ["Ok"], className: "btn btn-primary", onClick: v$1 => $4()})
        ]))
      }))();
    };
  }));
}))();
export {$ContractView, Graph, SourceCode, liftEffect, mkComponent, pure1, traceM, useAff};
