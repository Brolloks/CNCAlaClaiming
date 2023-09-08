import * as Record$dBuilder from "../Record.Builder/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Record$dUnsafe$dUnion from "../Record.Unsafe.Union/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const identity = x => x;
const defaultsRecord = () => () => ({defaults: b => a => Record$dUnsafe$dUnion.unsafeUnionFn(a, b)});
const defaults = dict => dict.defaults;
const convertRecordOptionsNil = {convertRecordOptions: v => v1 => v2 => identity};
const convertRecordOptions = dict => dict.convertRecordOptions;
const convertOptionsWithDefaults = dict => dict.convertOptionsWithDefaults;
const convertOptionsRecord = () => dictConvertRecordOptions => ({convertOptions: t => i => dictConvertRecordOptions.convertRecordOptions(t)(Type$dProxy.Proxy)(i)({})});
const convertOptions = dict => dict.convertOptions;
const convertOptionsWithDefaultsRecord = dictConvertOptions => dictDefaults => (
  {
    convertOptionsWithDefaults: t => def => {
      const $0 = dictDefaults.defaults(def);
      const $1 = dictConvertOptions.convertOptions(t);
      return x => $0($1(x));
    }
  }
);
const convertOption = dict => dict.convertOption;
const convertRecordOptionsCons = dictConvertRecordOptions => dictConvertOption => () => () => () => dictIsSymbol => (
  {
    convertRecordOptions: t => v => r => {
      const $0 = Record$dBuilder.insert()()(dictIsSymbol)(Type$dProxy.Proxy)(dictConvertOption.convertOption(t)(Type$dProxy.Proxy)(Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(r)));
      const $1 = dictConvertRecordOptions.convertRecordOptions(t)(Type$dProxy.Proxy)(r);
      return x => $0($1(x));
    }
  }
);
export {
  convertOption,
  convertOptions,
  convertOptionsRecord,
  convertOptionsWithDefaults,
  convertOptionsWithDefaultsRecord,
  convertRecordOptions,
  convertRecordOptionsCons,
  convertRecordOptionsNil,
  defaults,
  defaultsRecord,
  identity
};
