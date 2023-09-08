import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Isomers$dContrib$dRecord$dIxBuilderT from "../Isomers.Contrib.Record.IxBuilderT/index.js";
const insert = dictIsSymbol => () => () => l => x => Isomers$dContrib$dRecord$dIxBuilderT.insert(Data$dIdentity.monadIdentity)(dictIsSymbol)()()(l)(x);
const execIxBuilder = b => x => b._1(x);
const execIxBuilder$p = b => b._1({});
export {execIxBuilder, execIxBuilder$p, insert};
