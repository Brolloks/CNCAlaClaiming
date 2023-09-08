import * as Isomers$dContrib$dHeterogeneous$dList from "../Isomers.Contrib.Heterogeneous.List/index.js";
const ConsMapping = x => x;
const mappingHNil = {mapping: v => v1 => Isomers$dContrib$dHeterogeneous$dList.$HCons(v, Isomers$dContrib$dHeterogeneous$dList.HNil)};
const mappingCons = {mapping: v => t => Isomers$dContrib$dHeterogeneous$dList.$HCons(v, t)};
export {ConsMapping, mappingCons, mappingHNil};
