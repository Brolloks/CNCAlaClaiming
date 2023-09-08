import * as Isomers$dResponse$dDuplex$dParser from "../Isomers.Response.Duplex.Parser/index.js";
import * as Isomers$dResponse$dDuplex$dPrinter from "../Isomers.Response.Duplex.Printer/index.js";
const $Duplex = (_1, _2) => ({tag: "Duplex", _1, _2});
const mempty = v => Isomers$dResponse$dDuplex$dPrinter.monoidPrinter.mempty;
const Duplex = value0 => value1 => $Duplex(value0, value1);
const profunctorDuplex = {dimap: f => g => v => $Duplex(x => v._1(f(x)), Isomers$dResponse$dDuplex$dParser.functorParser.map(g)(v._2))};
const functorDuplex = {map: f => m => $Duplex(m._1, Isomers$dResponse$dDuplex$dParser.functorParser.map(f)(m._2))};
const applyDuplex = {
  apply: v => v1 => $Duplex(
    n => {
      const $0 = v._1(n);
      const $1 = v1._1(n);
      return x => $1($0(x));
    },
    Isomers$dResponse$dDuplex$dParser.applyParser.apply(v._2)(v1._2)
  ),
  Functor0: () => functorDuplex
};
const applicativeDuplex = {pure: a => $Duplex(mempty, Isomers$dResponse$dDuplex$dParser.applicativeExceptT.pure(a)), Apply0: () => applyDuplex};
const encode = v => x => v._1(x)(Isomers$dResponse$dDuplex$dPrinter.defaultResponse);
const decode = v => w => Isomers$dResponse$dDuplex$dParser.run(v._2)(w);
export {$Duplex, Duplex, applicativeDuplex, applyDuplex, decode, encode, functorDuplex, mempty, profunctorDuplex};
