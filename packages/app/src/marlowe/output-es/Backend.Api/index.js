import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dPosix$dSignal from "../Data.Posix.Signal/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dAff$dClass from "../Effect.Aff.Class/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Heterogeneous$dFolding from "../Heterogeneous.Folding/index.js";
import * as Heterogeneous$dMapping from "../Heterogeneous.Mapping/index.js";
import * as Isomers$dContrib$dHeterogeneous$dFoldings$dRecord from "../Isomers.Contrib.Heterogeneous.Foldings.Record/index.js";
import * as Isomers$dContrib$dHeterogeneous$dFoldings$dVariant from "../Isomers.Contrib.Heterogeneous.Foldings.Variant/index.js";
import * as Isomers$dNode$dServer from "../Isomers.Node.Server/index.js";
import * as Isomers$dRequest$dAccum$dGeneric from "../Isomers.Request.Accum.Generic/index.js";
import * as Isomers$dRequest$dAccum$dType from "../Isomers.Request.Accum.Type/index.js";
import * as Isomers$dResponse$dDuplex from "../Isomers.Response.Duplex/index.js";
import * as Isomers$dServer from "../Isomers.Server/index.js";
import * as Isomers$dSpec$dFlatten from "../Isomers.Spec.Flatten/index.js";
import * as Isomers$dSpec$dFoldSpec from "../Isomers.Spec.FoldSpec/index.js";
import * as Node$dProcess from "../Node.Process/index.js";
import * as Record$dPrefix from "../Record.Prefix/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const IsSymbol = {reflectSymbol: () => ""};
const test$dIsSymbol = {reflectSymbol: () => "test."};
const test$dtestIsSymbol = {reflectSymbol: () => "test.test"};
const testIsSymbol = {reflectSymbol: () => "test"};
const constMapping = {mappingWithIndex: v => v1 => v1$1 => ({request: v1$1._1, response: v1$1._2})};
const constMapping1 = {mappingWithIndex: v => v1 => r => r.response};
const hmapRecord1 = /* #__PURE__ */ Heterogeneous$dMapping.hmapRecord()(/* #__PURE__ */ Heterogeneous$dMapping.mapRecordWithIndexCons(IsSymbol)(constMapping1)(/* #__PURE__ */ Heterogeneous$dMapping.mapRecordWithIndexCons(testIsSymbol)(constMapping1)(Heterogeneous$dMapping.mapRecordWithIndexNil)()())()());
const constMapping2 = {mappingWithIndex: v => v1 => r => r.request};
const hmapRecord2 = /* #__PURE__ */ Heterogeneous$dMapping.hmapRecord()(/* #__PURE__ */ Heterogeneous$dMapping.mapRecordWithIndexCons(IsSymbol)(constMapping2)(/* #__PURE__ */ Heterogeneous$dMapping.mapRecordWithIndexCons(testIsSymbol)(constMapping2)(Heterogeneous$dMapping.mapRecordWithIndexNil)()())()());
const hfoldlVariantStep = /* #__PURE__ */ (() => {
  const $0 = Heterogeneous$dFolding.foldlRecordCons(IsSymbol)()(Isomers$dRequest$dAccum$dGeneric.foldingVariantStepAccum()()()(IsSymbol))(Heterogeneous$dFolding.foldlRecordCons(testIsSymbol)()(Isomers$dRequest$dAccum$dGeneric.foldingVariantStepAccum()()()(testIsSymbol))(Heterogeneous$dFolding.foldlRecordNil));
  const $1 = {hfoldlWithIndex: f => x => $0.foldlRecordRowList(f)(x)(Type$dProxy.Proxy)};
  return {HFoldlWithIndex0: () => $1};
})();
const handlers = {"": v => Effect$dAff._pure("Hello, world!"), "test.": v => Effect$dAff._pure("Test path"), "test.test": v => Effect$dAff._pure("Test/test path")};
const api = /* #__PURE__ */ Isomers$dSpec$dFlatten.flatten()()(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ Isomers$dContrib$dHeterogeneous$dFoldings$dVariant.foldingWithIndexFlattenRe()(IsSymbol)()(IsSymbol)()())(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ Isomers$dContrib$dHeterogeneous$dFoldings$dVariant.foldingWithIndexFlattenRe2()()()(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ Isomers$dContrib$dHeterogeneous$dFoldings$dVariant.foldingWithIndexFlattenRe()(test$dIsSymbol)()(IsSymbol)()())(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ Isomers$dContrib$dHeterogeneous$dFoldings$dVariant.foldingWithIndexFlattenRe()(test$dtestIsSymbol)()(testIsSymbol)()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil)))()()()(testIsSymbol)()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil)))()()()(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ Isomers$dContrib$dHeterogeneous$dFoldings$dVariant.foldingWithIndexUnflatten(IsSymbol)()()(IsSymbol)()())(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ Isomers$dContrib$dHeterogeneous$dFoldings$dVariant.foldingWithIndexUnflatten2()()()(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ Isomers$dContrib$dHeterogeneous$dFoldings$dVariant.foldingWithIndexUnflatten(IsSymbol)()()(test$dIsSymbol)()())(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ Isomers$dContrib$dHeterogeneous$dFoldings$dVariant.foldingWithIndexUnflatten(testIsSymbol)()()(test$dtestIsSymbol)()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil)))(testIsSymbol)())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil)))()()()()(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ Isomers$dContrib$dHeterogeneous$dFoldings$dRecord.foldingWithIndexFlattenRe(IsSymbol)()()())(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ Isomers$dContrib$dHeterogeneous$dFoldings$dRecord.foldingWithIndexFlattenRe1(testIsSymbol)()()(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ Isomers$dContrib$dHeterogeneous$dFoldings$dRecord.foldingWithIndexFlattenRe(IsSymbol)()()())(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ Isomers$dContrib$dHeterogeneous$dFoldings$dRecord.foldingWithIndexFlattenRe(testIsSymbol)()()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil)))()(/* #__PURE__ */ (() => {
  const $0 = Heterogeneous$dFolding.foldlRecordCons(IsSymbol)()(Record$dPrefix.prefixProps(test$dIsSymbol)()()())(Heterogeneous$dFolding.foldlRecordCons(testIsSymbol)()(Record$dPrefix.prefixProps(test$dtestIsSymbol)()()())(Heterogeneous$dFolding.foldlRecordNil));
  return {hfoldlWithIndex: f => x => $0.foldlRecordRowList(f)(x)(Type$dProxy.Proxy)};
})())())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil)))(/* #__PURE__ */ Isomers$dSpec$dFoldSpec.foldSpec(/* #__PURE__ */ Isomers$dSpec$dFoldSpec.foldSpecRecordVariantVari(/* #__PURE__ */ Heterogeneous$dMapping.hmapRecord()(/* #__PURE__ */ Heterogeneous$dMapping.mapRecordWithIndexCons(IsSymbol)(constMapping)(/* #__PURE__ */ Heterogeneous$dMapping.mapRecordWithIndexCons(testIsSymbol)({
  mappingWithIndex: v => v1 => Isomers$dSpec$dFoldSpec.foldSpecRecordVariantVari(Heterogeneous$dMapping.hmapRecord()(Heterogeneous$dMapping.mapRecordWithIndexCons(IsSymbol)(constMapping)(Heterogeneous$dMapping.mapRecordWithIndexCons(testIsSymbol)(constMapping)(Heterogeneous$dMapping.mapRecordWithIndexNil)()())()()))(hmapRecord1)(hmapRecord2)(hfoldlVariantStep).accumSpec(v)
})(Heterogeneous$dMapping.mapRecordWithIndexNil)()())()()))(hmapRecord1)(hmapRecord2)(hfoldlVariantStep))({
  "": /* #__PURE__ */ Data$dTuple.$Tuple(Isomers$dRequest$dAccum$dType.pass, Isomers$dResponse$dDuplex.string),
  test: {
    "": /* #__PURE__ */ Data$dTuple.$Tuple(Isomers$dRequest$dAccum$dType.pass, Isomers$dResponse$dDuplex.string),
    test: /* #__PURE__ */ Data$dTuple.$Tuple(Isomers$dRequest$dAccum$dType.pass, Isomers$dResponse$dDuplex.string)
  }
}));
const server = /* #__PURE__ */ (() => Effect$dAff._bind(Effect$dAff._liftEffect(Isomers$dNode$dServer.serve(Effect$dAff$dClass.monadAffAff)(Isomers$dServer.router({
  hfoldlWithIndex: Heterogeneous$dFolding.foldlVariantCons(IsSymbol)()(Isomers$dServer.routerFoldingFun(IsSymbol)()()(Effect$dAff.monadAff))(Heterogeneous$dFolding.foldlVariantCons(test$dIsSymbol)()(Isomers$dServer.routerFoldingFun(test$dIsSymbol)()()(Effect$dAff.monadAff))(Heterogeneous$dFolding.foldlVariantCons(test$dtestIsSymbol)()(Isomers$dServer.routerFoldingFun(test$dtestIsSymbol)()()(Effect$dAff.monadAff))(Heterogeneous$dFolding.foldlVariantNil))).foldlVariantRowList(Type$dProxy.Proxy)
})(Effect$dAff$dClass.monadAffAff)(api)(handlers))(x => x)({hostname: "127.0.0.1", port: 8080, backlog: Data$dMaybe.Nothing})(Effect$dConsole.log("TEST"))))(onClose => Effect$dAff._pure(onClose(Effect$dConsole.log("Closed")))))();
const main = /* #__PURE__ */ (() => {
  const $0 = Effect$dAff._makeFiber(
    Effect$dAff.ffiUtil,
    Effect$dAff._bind(server)(closeServer => Effect$dAff._liftEffect(Node$dProcess.onSignalImpl(Data$dPosix$dSignal.toString(Data$dPosix$dSignal.SIGINT))((() => {
      const $0 = Effect$dConsole.log("Closing servers...");
      return () => {
        $0();
        closeServer();
        return Node$dProcess.exit(0)();
      };
    })())))
  );
  return () => {
    const fiber = $0();
    fiber.run();
  };
})();
export {
  IsSymbol,
  api,
  constMapping,
  constMapping1,
  constMapping2,
  handlers,
  hfoldlVariantStep,
  hmapRecord1,
  hmapRecord2,
  main,
  server,
  test$dIsSymbol,
  test$dtestIsSymbol,
  testIsSymbol
};
