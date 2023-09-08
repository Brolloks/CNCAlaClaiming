import * as Data$dShow from "../Data.Show/index.js";
const notOneOf = dictShow => v => "Expecting value " + Data$dShow.showArrayImpl(dictShow.show)(v.expected) + " but got " + dictShow.show(v.got) + ".";
const notMissingFrom = dictShow => v => "Expecting value outside from the set: " + Data$dShow.showArrayImpl(dictShow.show)(v.unexpected) + " but got " + dictShow.show(v.got) + ".";
const notEqualTo = dictShow => v => "Expecting value " + dictShow.show(v.expected) + " but got " + dictShow.show(v.got) + ".";
const notDifferentThan = dictShow => value => "Expecting different value than " + dictShow.show(value) + ".";
export {notDifferentThan, notEqualTo, notMissingFrom, notOneOf};
