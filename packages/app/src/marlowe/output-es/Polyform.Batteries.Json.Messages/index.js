import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Record$dBuilder from "../Record.Builder/index.js";
const field = () => Record$dBuilder.merge()()({
  arrayExpected: i => Data$dArgonaut$dCore.fromObject({err: Data$dArgonaut$dCore.fromString("arrayExpected"), value: i}),
  booleanExpected: i => Data$dArgonaut$dCore.fromObject({err: Data$dArgonaut$dCore.fromString("booleanExpected"), value: i}),
  fieldMissing: i => Data$dArgonaut$dCore.fromObject({err: Data$dArgonaut$dCore.fromString("fieldMissing"), value: i}),
  intExpected: i => Data$dArgonaut$dCore.fromObject({err: Data$dArgonaut$dCore.fromString("intExpected"), value: i}),
  nullExpected: i => Data$dArgonaut$dCore.fromObject({err: Data$dArgonaut$dCore.fromString("nullExpected"), value: i}),
  numberExpected: i => Data$dArgonaut$dCore.fromObject({err: Data$dArgonaut$dCore.fromString("numberExpected"), value: i}),
  objectExpected: i => Data$dArgonaut$dCore.fromObject({err: Data$dArgonaut$dCore.fromString("objectExpected"), value: i}),
  stringExpected: i => Data$dArgonaut$dCore.fromObject({err: Data$dArgonaut$dCore.fromString("stringExpected"), value: i})
});
export {field};
