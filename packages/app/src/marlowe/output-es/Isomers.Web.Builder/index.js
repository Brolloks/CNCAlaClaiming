import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Isomers$dContrib$dHeterogeneous$dFiltering from "../Isomers.Contrib.Heterogeneous.Filtering/index.js";
import * as Isomers$dContrib$dHeterogeneous$dHEval from "../Isomers.Contrib.Heterogeneous.HEval/index.js";
import * as Isomers$dContrib$dHeterogeneous$dHMaybe from "../Isomers.Contrib.Heterogeneous.HMaybe/index.js";
import * as Isomers$dContrib$dHeterogeneous$dList from "../Isomers.Contrib.Heterogeneous.List/index.js";
import * as Isomers$dContrib$dHeterogeneous$dMappings$dNewtype from "../Isomers.Contrib.Heterogeneous.Mappings.Newtype/index.js";
import * as Isomers$dHTTP$dRequest$dMethod from "../Isomers.HTTP.Request.Method/index.js";
import * as Isomers$dRequest$dAccum$dType from "../Isomers.Request.Accum.Type/index.js";
import * as Isomers$dResponse$dRaw$dDuplexes from "../Isomers.Response.Raw.Duplexes/index.js";
import * as Isomers$dSpec$dFoldSpec from "../Isomers.Spec.FoldSpec/index.js";
import * as Isomers$dWeb$dBuilder$dHEval from "../Isomers.Web.Builder.HEval/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const $DoBuildAccumSpec = _1 => ({tag: "DoBuildAccumSpec", _1});
const $DropRender = () => ({tag: "DropRender"});
const $Rendered = (_1, _2) => ({tag: "Rendered", _1, _2});
const $ResponseRenderer = () => ({tag: "ResponseRenderer"});
const $WebBuilderStep = () => ({tag: "WebBuilderStep"});
const WebBuilderStep = /* #__PURE__ */ $WebBuilderStep();
const Tagged = x => x;
const ResponseRenderer = /* #__PURE__ */ $ResponseRenderer();
const Rendered = value0 => value1 => $Rendered(value0, value1);
const DropRender = /* #__PURE__ */ $DropRender();
const DoBuildAccumSpec = value0 => $DoBuildAccumSpec(value0);
const mappingDropRenderRendered = {mapping: v => v1 => v1._1};
const mappingDropRender = {mapping: v => resDpl => resDpl};
const hEvalDoBuildAccumSpecFunc = dictFoldSpec => ({heval: v => i => dictFoldSpec.accumSpec(v._1)(i)});
const foldingResponseRendererRe = dictTypeEquals => dictTypeEquals1 => dictTypeEquals2 => dictTypeEquals$p => (
  {folding: v => v1 => v2 => Isomers$dContrib$dHeterogeneous$dHMaybe.$HJust(dictTypeEquals$p["to'"](Type$dProxy.Proxy)(v2._2))}
);
const foldingResponseRenderer = {folding: v => acc => v1 => acc};
const builderAccumWebSpec = {accumWebSpec: v => s => s};
const toBuilderStep = v => Isomers$dSpec$dFoldSpec.FoldSpecStep;
const builder$x47$x92$x58 = dictHFoldl => dictTypeEquals => {
  const to = dictTypeEquals.proof(a => a);
  return dictHEval => dictTypeEquals1 => dictFoldSpec => dictHEval1 => (
    {
      accumWebSpec: step => v => {
        const $0 = v._1;
        const l = to(Isomers$dContrib$dHeterogeneous$dList.$HCons(v._2._1, v._2._2));
        const render = dictHFoldl.hfoldl(ResponseRenderer)(Isomers$dContrib$dHeterogeneous$dHMaybe.HNothing)(l);
        return {
          render,
          spec: dictHEval1.heval(Isomers$dContrib$dHeterogeneous$dHEval.$HCompose(
            $DoBuildAccumSpec(Isomers$dSpec$dFoldSpec.FoldSpecStep),
            Isomers$dContrib$dHeterogeneous$dHEval.$HCompose(
              Isomers$dContrib$dHeterogeneous$dHEval.$DoApply(v1 => Data$dTuple.$Tuple($0, v1)),
              Isomers$dContrib$dHeterogeneous$dHEval.$HCompose(
                Isomers$dContrib$dHeterogeneous$dHEval.$DoHIfThenElse(
                  Isomers$dContrib$dHeterogeneous$dHEval.$DoConst(dictHEval.heval(Isomers$dWeb$dBuilder$dHEval.DoIsHJust)(render)),
                  Isomers$dContrib$dHeterogeneous$dHEval.$DoApply(v1 => Isomers$dContrib$dHeterogeneous$dList.$HCons(Isomers$dResponse$dRaw$dDuplexes.html, v1)),
                  Isomers$dContrib$dHeterogeneous$dHEval.DoIdentity
                ),
                Isomers$dContrib$dHeterogeneous$dHEval.$DoHMap(DropRender)
              )
            )
          ))(l)
        };
      }
    }
  );
};
const builder$x47$x92HNothing = dictFoldSpec => (
  {accumWebSpec: step => t => ({spec: dictFoldSpec.accumSpec(Isomers$dSpec$dFoldSpec.FoldSpecStep)(t), render: Isomers$dContrib$dHeterogeneous$dHMaybe.HNothing})}
);
const accumWebSpec = dict => dict.accumWebSpec;
const webSpec = dictBuilder => {
  const $0 = dictBuilder.accumWebSpec(WebBuilderStep);
  return x => {
    const $1 = $0(x);
    return {spec: {request: Isomers$dRequest$dAccum$dType.rootDuplex($1.spec.request), response: $1.spec.response}, render: $1.render};
  };
};
const builder$x58 = dictBuilder => ({accumWebSpec: v => response => dictBuilder.accumWebSpec(WebBuilderStep)(Data$dTuple.$Tuple(Isomers$dSpec$dFoldSpec.pass, response))});
const builderDuplex = dictBuilder => ({accumWebSpec: v => response => dictBuilder.accumWebSpec(WebBuilderStep)(Data$dTuple.$Tuple(Isomers$dSpec$dFoldSpec.pass, response))});
const builderInsertRecord = dictBuilder => () => dictIsSymbol => () => dictFoldSpec => (
  {
    accumWebSpec: step => v => {
      const v1 = dictBuilder.accumWebSpec(WebBuilderStep)(v._2);
      return {render: v1.render, spec: dictFoldSpec.accumSpec(Isomers$dSpec$dFoldSpec.FoldSpecStep)(Isomers$dSpec$dFoldSpec.$Insert(v._1, v1.spec))};
    }
  }
);
const builderScalar = dictBuilder => dictTypeEquals => dictFoldSpec => (
  {
    accumWebSpec: step => v => {
      const v1 = dictBuilder.accumWebSpec(WebBuilderStep)(v._2);
      return {render: v1.render, spec: dictFoldSpec.accumSpec(Isomers$dSpec$dFoldSpec.FoldSpecStep)(Isomers$dSpec$dFoldSpec.$Scalar(v._1, v1.spec))};
    }
  }
);
const builderWithBody$x47$x92RecordRe = () => () => () => dictIsSymbol => dictBuilder => (
  {
    accumWebSpec: v => v1 => dictBuilder.accumWebSpec(WebBuilderStep)(Data$dTuple.$Tuple(
      Isomers$dRequest$dAccum$dType.insertReq(dictIsSymbol)()()()(Type$dProxy.Proxy)(v1._1._1),
      v1._2
    ))
  }
);
const mappingWebBuilderStepAccu = dictBuilder => ({mapping: step => a => dictBuilder.accumWebSpec(step)(a)});
const mappingWithIndexWebBuilde = dictBuilder => ({mappingWithIndex: v => v1 => a => dictBuilder.accumWebSpec(WebBuilderStep)(a)});
const _DoFoldRender = /* #__PURE__ */ Isomers$dContrib$dHeterogeneous$dHEval.$HCompose(
  /* #__PURE__ */ Isomers$dContrib$dHeterogeneous$dHEval.$DoHIfThenElse(
    Isomers$dWeb$dBuilder$dHEval.DoNull,
    /* #__PURE__ */ Isomers$dContrib$dHeterogeneous$dHEval.$DoConst(Isomers$dContrib$dHeterogeneous$dHMaybe.HNothing),
    /* #__PURE__ */ Isomers$dContrib$dHeterogeneous$dHEval.$DoApply(Isomers$dContrib$dHeterogeneous$dHMaybe.HJust)
  ),
  /* #__PURE__ */ Isomers$dContrib$dHeterogeneous$dHEval.$HCompose(
    /* #__PURE__ */ Isomers$dContrib$dHeterogeneous$dHEval.$DoHMap(Isomers$dWeb$dBuilder$dHEval.FromHJust),
    /* #__PURE__ */ Isomers$dContrib$dHeterogeneous$dHEval.$HCompose(
      /* #__PURE__ */ Isomers$dContrib$dHeterogeneous$dHEval.$DoHFilter(Isomers$dContrib$dHeterogeneous$dFiltering.CatMaybes),
      /* #__PURE__ */ Isomers$dContrib$dHeterogeneous$dHEval.$DoHMap(/* #__PURE__ */ Isomers$dContrib$dHeterogeneous$dHEval.$HCompose(
        Type$dProxy.Proxy,
        Isomers$dContrib$dHeterogeneous$dMappings$dNewtype.Unwrap
      ))
    )
  )
);
const builderMethodRecord = dictHEval => dictFoldSpec => (
  {
    accumWebSpec: step => v => {
      const v1 = dictHEval.heval(Isomers$dContrib$dHeterogeneous$dHEval.$HCompose(
        Isomers$dContrib$dHeterogeneous$dHEval.$DoFanout(
          Isomers$dContrib$dHeterogeneous$dHEval.$HCompose(
            $DoBuildAccumSpec(Isomers$dSpec$dFoldSpec.FoldSpecStep),
            Isomers$dContrib$dHeterogeneous$dHEval.$HCompose(
              Isomers$dContrib$dHeterogeneous$dHEval.$DoApply(Isomers$dHTTP$dRequest$dMethod.Method),
              Isomers$dContrib$dHeterogeneous$dHEval.$DoHMap(Isomers$dContrib$dHeterogeneous$dHEval.$HCompose(
                Type$dProxy.Proxy,
                Isomers$dContrib$dHeterogeneous$dMappings$dNewtype.Unwrap
              ))
            )
          ),
          _DoFoldRender
        ),
        Isomers$dContrib$dHeterogeneous$dHEval.$DoHMap(step)
      ))(v);
      return {render: v1._2, spec: v1._1};
    }
  }
);
const builderRecord = dictHEval => (
  {
    accumWebSpec: step => rec => {
      const v = dictHEval.heval(Isomers$dContrib$dHeterogeneous$dHEval.$HCompose(
        Isomers$dContrib$dHeterogeneous$dHEval.$DoFanout(
          Isomers$dContrib$dHeterogeneous$dHEval.$HCompose(
            $DoBuildAccumSpec(Isomers$dSpec$dFoldSpec.FoldSpecStep),
            Isomers$dContrib$dHeterogeneous$dHEval.$DoHMap(Isomers$dContrib$dHeterogeneous$dHEval.$HCompose(
              Type$dProxy.Proxy,
              Isomers$dContrib$dHeterogeneous$dMappings$dNewtype.Unwrap
            ))
          ),
          _DoFoldRender
        ),
        Isomers$dContrib$dHeterogeneous$dHEval.$DoHMapWithIndex(step)
      ))(rec);
      return {render: v._2, spec: v._1};
    }
  }
);
export {
  $DoBuildAccumSpec,
  $DropRender,
  $Rendered,
  $ResponseRenderer,
  $WebBuilderStep,
  DoBuildAccumSpec,
  DropRender,
  Rendered,
  ResponseRenderer,
  Tagged,
  WebBuilderStep,
  _DoFoldRender,
  accumWebSpec,
  builder$x47$x92$x58,
  builder$x47$x92HNothing,
  builder$x58,
  builderAccumWebSpec,
  builderDuplex,
  builderInsertRecord,
  builderMethodRecord,
  builderRecord,
  builderScalar,
  builderWithBody$x47$x92RecordRe,
  foldingResponseRenderer,
  foldingResponseRendererRe,
  hEvalDoBuildAccumSpecFunc,
  mappingDropRender,
  mappingDropRenderRendered,
  mappingWebBuilderStepAccu,
  mappingWithIndexWebBuilde,
  toBuilderStep,
  webSpec
};
