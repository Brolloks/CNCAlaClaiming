import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dList from "../Data.List/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dTimer from "../Effect.Timer/index.js";
import * as Halogen$dSubscription from "../Halogen.Subscription/index.js";
import * as React$dBasic from "../React.Basic/index.js";
import * as React$dBasic$dDOM$dGenerated from "../React.Basic.DOM.Generated/index.js";
import * as React$dBasic$dDOM$dSimplified$dGenerated from "../React.Basic.DOM.Simplified.Generated/index.js";
import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as ReactBootstrap$dAlert from "../ReactBootstrap.Alert/index.js";
import * as ReactBootstrap$dCollapse from "../ReactBootstrap.Collapse/index.js";
import * as ReactBootstrap$dIcons from "../ReactBootstrap.Icons/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
import * as Utils$dReact$dBasic$dHooks from "../Utils.React.Basic.Hooks/index.js";
const $Action = (tag, _1) => ({tag, _1});
const useEffect = /* #__PURE__ */ React$dBasic$dHooks.useEffect({
  eq: x => y => {
    if (x.tag === "Nothing") { return y.tag === "Nothing"; }
    return x.tag === "Just" && y.tag === "Just" && x._1 === y._1;
  }
});
const pure2 = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const fromFoldable = /* #__PURE__ */ (() => Data$dArray.fromFoldableImpl(Data$dList$dTypes.foldableList.foldr))();
const Add = value0 => $Action("Add", value0);
const Remove = value0 => $Action("Remove", value0);
const renderMsg = onClose => extraClassName => v => {
  const onClose$p = onClose(v.id);
  const className = extraClassName + " d-flex align-items-center";
  if (v.msg.tag === "Info") {
    return React$dBasic.element(ReactBootstrap$dAlert._Alert)({
      children: [React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalspan$p)({children: [ReactBootstrap$dIcons.infoCircleFill], className: "me-2"}), v.msg._1],
      className,
      dismissible: true,
      onClose: onClose$p,
      transition: false,
      variant: "info"
    });
  }
  if (v.msg.tag === "Success") {
    return React$dBasic.element(ReactBootstrap$dAlert._Alert)({
      children: [React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalspan$p)({children: [ReactBootstrap$dIcons.checkCircleFill], className: "me-2"}), v.msg._1],
      className,
      dismissible: true,
      onClose: onClose$p,
      variant: "success"
    });
  }
  if (v.msg.tag === "Warning") {
    return React$dBasic.element(ReactBootstrap$dAlert._Alert)({
      children: [
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalspan$p)({children: [ReactBootstrap$dIcons.exclamationTriangleFill], className: "me-2"}),
        v.msg._1
      ],
      className,
      dismissible: true,
      onClose: onClose$p,
      variant: "warning"
    });
  }
  if (v.msg.tag === "Error") {
    return React$dBasic.element(ReactBootstrap$dAlert._Alert)({
      children: [
        React$dBasic.element(React$dBasic$dDOM$dSimplified$dGenerated._internalspan$p)({children: [ReactBootstrap$dIcons.exclamationTriangleFill], className: "me-2"}),
        v.msg._1
      ],
      className,
      dismissible: true,
      onClose: onClose$p,
      variant: "danger"
    });
  }
  $runtime.fail();
};
const mkMessagePreview = /* #__PURE__ */ React$dBasic$dHooks.component("MessageBox")(v => {
  const $0 = v.ctx;
  return () => {
    const a = React$dBasic$dHooks.useContext_($0);
    const a$1 = React$dBasic$dHooks.useState$p(Data$dMaybe.Nothing)();
    const a$2 = React$dBasic$dHooks.useState$p(true)();
    const a$3 = React$dBasic$dHooks.useState$p(Data$dMaybe.Nothing)();
    const $1 = a$3._1;
    const currHead = (() => {
      if (a.tag === "Nil") { return Data$dMaybe.Nothing; }
      if (a.tag === "Cons") { return Data$dMaybe.$Maybe("Just", a._1); }
      $runtime.fail();
    })();
    const $2 = (() => {
      if (a$1._1.tag === "Nothing") { return true; }
      if (a$1._1.tag === "Just") { return false; }
      $runtime.fail();
    })() && (() => {
      if (currHead.tag === "Nothing") { return false; }
      if (currHead.tag === "Just") { return true; }
      $runtime.fail();
    })();
    const newItem = (() => {
      if (currHead.tag === "Just") {
        if (a$1._1.tag === "Just") { return currHead._1.id > a$1._1._1.id; }
        if (a$1._1.tag === "Nothing") { return $2; }
        $runtime.fail();
      }
      if (currHead.tag === "Nothing") { return $2; }
      $runtime.fail();
    })();
    useEffect(currHead.tag === "Just" ? Data$dMaybe.$Maybe("Just", currHead._1.id) : Data$dMaybe.Nothing)((() => {
      const $3 = a$1._2(currHead);
      return () => {
        $3();
        Data$dTraversable.traversableMaybe.traverse(Effect.applicativeEffect)(tid => Effect$dTimer.clearTimeoutImpl(tid))($1)();
        a$3._2(Data$dMaybe.Nothing)();
        if (newItem) {
          a$2._2(true)();
          const tId = Effect$dTimer.setTimeoutImpl(1200)(a$2._2(false))();
          a$3._2(Data$dMaybe.$Maybe("Just", tId))();
        } else {
          a$2._2(false)();
        }
        const $4 = Data$dTraversable.traversableMaybe.traverse(Effect.applicativeEffect)(id => Effect$dTimer.clearTimeoutImpl(id))($1);
        return () => {$4();};
      };
    })())();
    return pure2((() => {
      if (a$1._1.tag === "Nothing") { return React$dBasic.empty; }
      if (a$1._1.tag === "Just") {
        return React$dBasic.element(ReactBootstrap$dCollapse._Collapse)({
          appear: true,
          children: React$dBasic$dDOM$dGenerated.div1({children: [renderMsg(id => v.remove(id))("shadow-lg")(a$1._1._1)]}),
          dimension: "height",
          in: a$2._1,
          mountOnEnter: true,
          timeout: 2000.0,
          unmountOnExit: true
        });
      }
      $runtime.fail();
    })())();
  };
});
const mkMessageHub = () => {
  const v = Halogen$dSubscription.create();
  const $0 = v.emitter;
  const msgCtx = React$dBasic.createContext(Data$dList$dTypes.Nil)();
  const hubComponent = React$dBasic$dHooks.component("MessageHub")(children => () => {
    const a = React$dBasic$dHooks.useState_(($1, $2) => Data$dTuple.$Tuple($1, $2), 0);
    const a$1 = pure2(Data$dTuple.$Tuple(a._1, a._2($1 => 1 + $1 | 0)))();
    const $1 = a$1._2;
    const a$2 = Utils$dReact$dBasic$dHooks.useStateRef(Data$dEq.eqInt)(a$1._1)(a$1._1)();
    const a$3 = React$dBasic$dHooks.useState_(($2, $3) => Data$dTuple.$Tuple($2, $3), Data$dList$dTypes.Nil);
    Utils$dReact$dBasic$dHooks.useEmitter($0)(v3 => {
      if (v3.tag === "Add") {
        const $2 = v3._1;
        return () => {
          $1();
          const currId = React$dBasic$dHooks.readRef(a$2)();
          return a$3._2(Data$dList$dTypes.Cons({id: currId, msg: $2}))();
        };
      }
      if (v3.tag === "Remove") {
        const $2 = v3._1;
        return a$3._2(Data$dList.filter(v4 => $2 !== v4.id));
      }
      $runtime.fail();
    })();
    return pure2(React$dBasic.element(React$dBasic.contextProvider(msgCtx))({value: a$3._1, children}))();
  })();
  return Data$dTuple.$Tuple(hubComponent, {remove: id => v.listener($Action("Remove", id)), add: msg => v.listener($Action("Add", msg)), ctx: msgCtx});
};
const mkMessageBox = /* #__PURE__ */ React$dBasic$dHooks.component("MessageBox")(v => {
  const $0 = v.ctx;
  return () => {
    const a = React$dBasic$dHooks.useContext_($0);
    return pure2(React$dBasic.fragment(fromFoldable(Data$dList$dTypes.listMap(renderMsg(id => v.remove(id))(""))(a))))();
  };
});
export {$Action, Add, Remove, fromFoldable, mkMessageBox, mkMessageHub, mkMessagePreview, pure2, renderMsg, useEffect};
