import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
const Uid = x => x;
const Pid = x => x;
const Gid = x => x;
const showUid = {show: v => "(Uid " + Data$dShow.showIntImpl(v) + ")"};
const showPid = {show: v => "(Pid " + Data$dShow.showIntImpl(v) + ")"};
const showGid = {show: v => "(Gid " + Data$dShow.showIntImpl(v) + ")"};
const ordUid = Data$dOrd.ordInt;
const ordPid = Data$dOrd.ordInt;
const ordGid = Data$dOrd.ordInt;
const newtypeUid = {Coercible0: () => {}};
const newtypePid = {Coercible0: () => {}};
const newtypeGid = {Coercible0: () => {}};
const eqUid = Data$dEq.eqInt;
const eqPid = Data$dEq.eqInt;
const eqGid = Data$dEq.eqInt;
export {Gid, Pid, Uid, eqGid, eqPid, eqUid, newtypeGid, newtypePid, newtypeUid, ordGid, ordPid, ordUid, showGid, showPid, showUid};
