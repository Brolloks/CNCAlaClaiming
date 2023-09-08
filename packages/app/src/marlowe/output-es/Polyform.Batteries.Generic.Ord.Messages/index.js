const notSmallerThan = dictShow => v => "Given value " + dictShow.show(v.value) + " is not smaller than " + dictShow.show(v.max) + ".";
const notInRange = dictShow => v => "Given value " + dictShow.show(v.value) + " is not in expected range (" + dictShow.show(v.min) + ", " + dictShow.show(v.max) + ").";
const notGreaterThan = dictShow => v => "Given value " + dictShow.show(v.value) + " is not greater than " + dictShow.show(v.min) + ".";
export {notGreaterThan, notInRange, notSmallerThan};
