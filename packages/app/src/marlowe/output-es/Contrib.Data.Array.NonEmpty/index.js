import * as Data$dArray from "../Data.Array/index.js";
import * as Partial from "../Partial/index.js";
const takeNonEmpty = n => arr => {
  const $0 = n < 1 ? [] : Data$dArray.slice(0)(n)(arr);
  if ($0.length > 0) { return $0; }
  return Partial._crashWith("Contrib.Data.Array.NonEmpty.takeNonEmptyArray: impossible - `take n arr` of non empty array is empty");
};
const chunks = n => arr => {
  const go = v => {
    if (v.length === 0) { return []; }
    const $0 = n < 1 ? [] : Data$dArray.slice(0)(n)(v);
    if ($0.length > 0) { return [$0, ...go(n < 1 ? v : Data$dArray.slice(n)(v.length)(v))]; }
    return [];
  };
  return [takeNonEmpty(n)(arr), ...go(n < 1 ? arr : Data$dArray.slice(n)(arr.length)(arr))];
};
export {chunks, takeNonEmpty};
