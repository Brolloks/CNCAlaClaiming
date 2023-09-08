import * as Data$dArray from "../Data.Array/index.js";
const chunks = v => v1 => {
  if (v1.length === 0) { return []; }
  return [v < 1 ? [] : Data$dArray.slice(0)(v)(v1), ...chunks(v)(v < 1 ? v1 : Data$dArray.slice(v)(v1.length)(v1))];
};
export {chunks};
