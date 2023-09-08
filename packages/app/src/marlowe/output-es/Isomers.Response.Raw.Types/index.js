import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Network$dHTTP$dTypes$dStatus from "../Network.HTTP.Types.Status/index.js";
const identity = x => x;
const RawResponse = x => x;
const functorRawResponse = {map: f => m => ({body: f(m.body), headers: m.headers, status: m.status})};
const foldableRawResponse = {foldl: f => z => m => f(z)(m.body), foldr: f => z => m => f(m.body)(z), foldMap: dictMonoid => f => m => f(m.body)};
const traversableRawResponse = {
  traverse: dictApplicative => f => m => dictApplicative.Apply0().Functor0().map(v1 => ({body: v1, headers: m.headers, status: m.status}))(f(m.body)),
  sequence: dictApplicative => v => traversableRawResponse.traverse(dictApplicative)(identity)(v),
  Functor0: () => functorRawResponse,
  Foldable1: () => foldableRawResponse
};
const extendRawResponse = {extend: f => v => ({body: f(v), headers: v.headers, status: v.status}), Functor0: () => functorRawResponse};
const rawOk = body => ({body, headers: [], status: Network$dHTTP$dTypes$dStatus.status200});
const rawFound = location => body => ({body, headers: [Data$dTuple.$Tuple("Location", location)], status: Network$dHTTP$dTypes$dStatus.status302});
const comonadRawResponse = {extract: v => v.body, Extend0: () => extendRawResponse};
export {RawResponse, comonadRawResponse, extendRawResponse, foldableRawResponse, functorRawResponse, identity, rawFound, rawOk, traversableRawResponse};
