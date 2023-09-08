import * as Data$dShow from "../Data.Show/index.js";
const showHttpVersion = {show: v => "HTTP/" + Data$dShow.showIntImpl(v.major) + "." + Data$dShow.showIntImpl(v.minor)};
const mkHttpVersion = major => minor => ({major, minor});
const http20 = {major: 2, minor: 0};
const http11 = {major: 1, minor: 1};
const http10 = {major: 1, minor: 0};
const http09 = {major: 0, minor: 9};
const eqHttpVersion = {eq: x => y => x.major === y.major && x.minor === y.minor};
export {eqHttpVersion, http09, http10, http11, http20, mkHttpVersion, showHttpVersion};
