import * as Control$dCategory from "../Control.Category/index.js";
import * as Data$dProfunctor$dStrong from "../Data.Profunctor.Strong/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
const $DoApply = _1 => ({tag: "DoApply", _1});
const $DoConst = _1 => ({tag: "DoConst", _1});
const $DoFanout = (_1, _2) => ({tag: "DoFanout", _1, _2});
const $DoFirst = _1 => ({tag: "DoFirst", _1});
const $DoHFilter = _1 => ({tag: "DoHFilter", _1});
const $DoHFoldl = (_1, _2) => ({tag: "DoHFoldl", _1, _2});
const $DoHIfThenElse = (_1, _2, _3) => ({tag: "DoHIfThenElse", _1, _2, _3});
const $DoHMap = _1 => ({tag: "DoHMap", _1});
const $DoHMapWithIndex = _1 => ({tag: "DoHMapWithIndex", _1});
const $DoIdentity = () => ({tag: "DoIdentity"});
const $DoSecond = _1 => ({tag: "DoSecond", _1});
const $DoSplit = (_1, _2) => ({tag: "DoSplit", _1, _2});
const $HCompose = (_1, _2) => ({tag: "HCompose", _1, _2});
const identity = x => x;
const fanout = /* #__PURE__ */ Data$dProfunctor$dStrong.fanout(Control$dCategory.categoryFn)(Data$dProfunctor$dStrong.strongFn);
const HCompose = value0 => value1 => $HCompose(value0, value1);
const DoSplit = value0 => value1 => $DoSplit(value0, value1);
const DoSecond = value0 => $DoSecond(value0);
const DoIdentity = /* #__PURE__ */ $DoIdentity();
const DoHMapWithIndex = value0 => $DoHMapWithIndex(value0);
const DoHMap = value0 => $DoHMap(value0);
const DoHIfThenElse = value0 => value1 => value2 => $DoHIfThenElse(value0, value1, value2);
const DoHFoldl = value0 => value1 => $DoHFoldl(value0, value1);
const DoHFilter = value0 => $DoHFilter(value0);
const DoFirst = value0 => $DoFirst(value0);
const DoFanout = value0 => value1 => $DoFanout(value0, value1);
const DoConst = value0 => $DoConst(value0);
const DoApply = value0 => $DoApply(value0);
const mappingCompose = dictMapping => dictMapping1 => (
  {
    mapping: v => {
      const $0 = dictMapping1.mapping(v._1);
      const $1 = dictMapping.mapping(v._2);
      return x => $0($1(x));
    }
  }
);
const hifThenElseTrue = {hifThenElse: v => t => v1 => t};
const hifThenElse = dict => dict.hifThenElse;
const hifFalse = {hifThenElse: v => v1 => f => f};
const hevalDoIdentity = {heval: v => identity};
const hevalDoHMapWithIndex = dictHMapWithIndex => ({heval: v => dictHMapWithIndex.hmapWithIndex(v._1)});
const hevalDoHMap = dictHMap => ({heval: v => dictHMap.hmap(v._1)});
const hevalDoHFoldl = dictHFoldl => ({heval: v => dictHFoldl.hfoldl(v._1)(v._2)});
const hevalDoHFilter = dictHFilter => ({heval: v => dictHFilter.hfilter(v._1)});
const hevalDoConst = {heval: v => v1 => v._1};
const hevalDoApply = {heval: v => i => v._1(i)};
const heval = dict => dict.heval;
const hevalCompose = dictHEval => dictHEval1 => (
  {
    heval: v => {
      const $0 = dictHEval.heval(v._1);
      const $1 = dictHEval1.heval(v._2);
      return x => $0($1(x));
    }
  }
);
const hevalDoFanout = dictHEval => dictHEval1 => ({heval: v => fanout(dictHEval.heval(v._1))(dictHEval1.heval(v._2))});
const hevalDoFirst = dictHEval => (
  {
    heval: v => {
      const $0 = dictHEval.heval(v._1);
      return v$1 => Data$dTuple.$Tuple($0(v$1._1), v$1._2);
    }
  }
);
const hevalDoSecond = dictHEval => (
  {
    heval: v => {
      const $0 = dictHEval.heval(v._1);
      return m => Data$dTuple.$Tuple(m._1, $0(m._2));
    }
  }
);
const hevalDoSplit = dictHEval => dictHEval1 => (
  {
    heval: v => {
      const $0 = dictHEval.heval(v._1);
      const $1 = dictHEval1.heval(v._2);
      return x => Data$dTuple.$Tuple($0(x._1), $1(x._2));
    }
  }
);
const heavalDoHIfThenElse = dictHEval => dictHEval1 => dictHEval2 => dictHIfThenElse => (
  {heval: v => i => dictHIfThenElse.hifThenElse(dictHEval.heval(v._1)(i))(dictHEval1.heval(v._2)(i))(dictHEval2.heval(v._3)(i))}
);
const foldingCompose = dictFolding => dictFolding1 => (
  {
    folding: v => v1 => {
      const $0 = dictFolding1.folding(v._1._1)(v._1._2);
      const $1 = dictFolding.folding(v._2._1)(v._2._2);
      return x => $0($1(x));
    }
  }
);
export {
  $DoApply,
  $DoConst,
  $DoFanout,
  $DoFirst,
  $DoHFilter,
  $DoHFoldl,
  $DoHIfThenElse,
  $DoHMap,
  $DoHMapWithIndex,
  $DoIdentity,
  $DoSecond,
  $DoSplit,
  $HCompose,
  DoApply,
  DoConst,
  DoFanout,
  DoFirst,
  DoHFilter,
  DoHFoldl,
  DoHIfThenElse,
  DoHMap,
  DoHMapWithIndex,
  DoIdentity,
  DoSecond,
  DoSplit,
  HCompose,
  fanout,
  foldingCompose,
  heavalDoHIfThenElse,
  heval,
  hevalCompose,
  hevalDoApply,
  hevalDoConst,
  hevalDoFanout,
  hevalDoFirst,
  hevalDoHFilter,
  hevalDoHFoldl,
  hevalDoHMap,
  hevalDoHMapWithIndex,
  hevalDoIdentity,
  hevalDoSecond,
  hevalDoSplit,
  hifFalse,
  hifThenElse,
  hifThenElseTrue,
  identity,
  mappingCompose
};
