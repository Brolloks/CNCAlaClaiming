import * as Isomers$dResponse$dDuplex$dParser from "../Isomers.Response.Duplex.Parser/index.js";
import * as Isomers$dResponse$dDuplex$dPrinter from "../Isomers.Response.Duplex.Printer/index.js";
const print = v => i => v._1(i)(Isomers$dResponse$dDuplex$dPrinter.defaultResponse);
const parse = v => Isomers$dResponse$dDuplex$dParser.run(v._2);
export {parse, print};
