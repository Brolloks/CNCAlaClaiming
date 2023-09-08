import * as Effect$dUncurried from "../Effect.Uncurried/index.js";
import * as Heterogeneous$dFolding from "../Heterogeneous.Folding/index.js";
import * as JS$dObject from "../JS.Object/index.js";
import * as JS$dObject$dGeneric from "../JS.Object.Generic/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const checked_addIsSymbol = {reflectSymbol: () => "checked_add"};
const hfoldlWithIndexRowListCons = /* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(checked_addIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("checked_add")
})()());
const checked_subIsSymbol = {reflectSymbol: () => "checked_sub"};
const hfoldlWithIndexRowListCons1 = /* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(checked_subIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("checked_sub")
})()());
const clamped_subIsSymbol = {reflectSymbol: () => "clamped_sub"};
const hfoldlWithIndexRowListCons2 = /* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(clamped_subIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("clamped_sub")
})()());
const coinIsSymbol = {reflectSymbol: () => "coin"};
const compareIsSymbol = {reflectSymbol: () => "compare"};
const hfoldlWithIndexRowListCons3 = /* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(compareIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("compare")
})()());
const freeIsSymbol = {reflectSymbol: () => "free"};
const hfoldlWithIndexRowListCons4 = /* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(freeIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("free")
})()());
const is_zeroIsSymbol = {reflectSymbol: () => "is_zero"};
const hfoldlWithIndexRowListCons5 = /* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(is_zeroIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("is_zero")
})()());
const multiassetIsSymbol = {reflectSymbol: () => "multiasset"};
const set_coinIsSymbol = {reflectSymbol: () => "set_coin"};
const set_multiassetIsSymbol = {reflectSymbol: () => "set_multiasset"};
const to_bytesIsSymbol = {reflectSymbol: () => "to_bytes"};
const hfoldlWithIndexRowListCons6 = /* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(to_bytesIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("to_bytes")
})()());
const to_js_valueIsSymbol = {reflectSymbol: () => "to_js_value"};
const hfoldlWithIndexRowListCons7 = /* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(to_js_valueIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("to_js_value")
})()());
const to_jsonIsSymbol = {reflectSymbol: () => "to_json"};
const hfoldlWithIndexRowListCons8 = /* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(to_jsonIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("to_json")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil);
const hfoldlWithIndexRowListCons9 = /* #__PURE__ */ hfoldlWithIndexRowListCons6(/* #__PURE__ */ hfoldlWithIndexRowListCons7(hfoldlWithIndexRowListCons8));
const from_bytesIsSymbol = {reflectSymbol: () => "from_bytes"};
const hfoldlWithIndexRowListCons10 = /* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(from_bytesIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("from_bytes")
})()());
const from_jsonIsSymbol = {reflectSymbol: () => "from_json"};
const hfoldlWithIndexRowListCons11 = /* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(from_jsonIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("from_json")
})()());
const new_from_assetsIsSymbol = {reflectSymbol: () => "new_from_assets"};
const plutus_dataIsSymbol = {reflectSymbol: () => "plutus_data"};
const redeemersIsSymbol = {reflectSymbol: () => "redeemers"};
const inputIsSymbol = {reflectSymbol: () => "input"};
const outputIsSymbol = {reflectSymbol: () => "output"};
const newIsSymbol = {reflectSymbol: () => "new"};
const hfoldlWithIndexRowListCons12 = /* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(newIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn4(JS$dObject.unsafeRunEffectMth2)("new")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil);
const addressIsSymbol = {reflectSymbol: () => "address"};
const amountIsSymbol = {reflectSymbol: () => "amount"};
const datumIsSymbol = {reflectSymbol: () => "datum"};
const auxiliary_dataIsSymbol = {reflectSymbol: () => "auxiliary_data"};
const bodyIsSymbol = {reflectSymbol: () => "body"};
const indexIsSymbol = {reflectSymbol: () => "index"};
const transaction_idIsSymbol = {reflectSymbol: () => "transaction_id"};
const hfoldlWithIndexRowListCons13 = /* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(newIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("new")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil);
const to_bech32IsSymbol = {reflectSymbol: () => "to_bech32"};
const to_hexIsSymbol = {reflectSymbol: () => "to_hex"};
const mkNewtypedFFI2 = /* #__PURE__ */ JS$dObject$dGeneric.mkNewtypedFFI()()(/* #__PURE__ */ hfoldlWithIndexRowListCons4(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(to_bech32IsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("to_bech32")
})()())(/* #__PURE__ */ hfoldlWithIndexRowListCons6(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(to_hexIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("to_hex")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil)))));
const from_bech32IsSymbol = {reflectSymbol: () => "from_bech32"};
const from_hexIsSymbol = {reflectSymbol: () => "from_hex"};
const mkNewtypedFFI3 = /* #__PURE__ */ JS$dObject$dGeneric.mkNewtypedFFI()()(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(from_bech32IsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("from_bech32")
})()())(/* #__PURE__ */ hfoldlWithIndexRowListCons10(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(from_hexIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("from_hex")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil))));
const getIsSymbol = {reflectSymbol: () => "get"};
const hfoldlWithIndexRowListCons14 = /* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(getIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("get")
})()());
const get_assetIsSymbol = {reflectSymbol: () => "get_asset"};
const insertIsSymbol = {reflectSymbol: () => "insert"};
const hfoldlWithIndexRowListCons15 = /* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(insertIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn4(JS$dObject.unsafeRunEffectMth2)("insert")
})()());
const keysIsSymbol = {reflectSymbol: () => "keys"};
const hfoldlWithIndexRowListCons16 = /* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(keysIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("keys")
})()());
const lenIsSymbol = {reflectSymbol: () => "len"};
const hfoldlWithIndexRowListCons17 = /* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(lenIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("len")
})()());
const set_assetIsSymbol = {reflectSymbol: () => "set_asset"};
const subIsSymbol = {reflectSymbol: () => "sub"};
const mkNewtypedFFI4 = /* #__PURE__ */ JS$dObject$dGeneric.mkNewtypedFFI()()(/* #__PURE__ */ hfoldlWithIndexRowListCons10(/* #__PURE__ */ hfoldlWithIndexRowListCons11(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(newIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("new")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil))));
const as_data_hashIsSymbol = {reflectSymbol: () => "as_data_hash"};
const as_inline_dataIsSymbol = {reflectSymbol: () => "as_inline_data"};
const kindIsSymbol = {reflectSymbol: () => "kind"};
const new_dataIsSymbol = {reflectSymbol: () => "new_data"};
const new_data_hashIsSymbol = {reflectSymbol: () => "new_data_hash"};
const checked_divIsSymbol = {reflectSymbol: () => "checked_div"};
const checked_div_ceilIsSymbol = {reflectSymbol: () => "checked_div_ceil"};
const checked_mulIsSymbol = {reflectSymbol: () => "checked_mul"};
const to_strIsSymbol = {reflectSymbol: () => "to_str"};
const hfoldlWithIndexRowListCons18 = /* #__PURE__ */ hfoldlWithIndexRowListCons6(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(to_strIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("to_str")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil));
const from_strIsSymbol = {reflectSymbol: () => "from_str"};
const mkNewtypedFFI5 = /* #__PURE__ */ JS$dObject$dGeneric.mkNewtypedFFI()()(/* #__PURE__ */ hfoldlWithIndexRowListCons10(/* #__PURE__ */ Heterogeneous$dFolding.hfoldlWithIndexRowListCons(/* #__PURE__ */ JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(from_strIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("from_str")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil)));
const as_intIsSymbol = {reflectSymbol: () => "as_int"};
const as_u64IsSymbol = {reflectSymbol: () => "as_u64"};
const hfoldlWithIndexRowListCons19 = /* #__PURE__ */ hfoldlWithIndexRowListCons17(hfoldlWithIndexRowListCons9);
const addIsSymbol = {reflectSymbol: () => "add"};
const nameIsSymbol = {reflectSymbol: () => "name"};
const TransactionHashObject = x => x;
const TransactionHash = x => x;
const TransactionBodyObject = x => x;
const TransactionBody = x => x;
const ScriptDataHashObject = x => x;
const ScriptDataHash = x => x;
const TransactionWitnessSetObject = x => x;
const TransactionWitnessSet = x => x;
const DataHashObject = x => x;
const DatumObject = x => x;
const Datum = x => x;
const DataHash = x => x;
const BigNum = x => x;
const BigNumObject = x => x;
const TransactionInputObject = x => x;
const TransactionInput = x => x;
const BigIntObject = x => x;
const $$BigInt = x => x;
const AuxiliaryData = x => x;
const TransactionObject = x => x;
const Transaction = x => x;
const AssetNameObject = x => x;
const AssetNamesObject = x => x;
const AssetNames = x => x;
const AssetsObject = x => x;
const Assets = x => x;
const MultiAssetObject = x => x;
const MultiAsset = x => x;
const ValueObject = x => x;
const TransactionOutputObject = x => x;
const TransactionOutput = x => x;
const TransactionUnspentOutputObject = x => x;
const TransactionUnspentOutput = x => x;
const Value = x => x;
const AssetName = x => x;
const newtypeValue_ = {Coercible0: () => {}};
const newtypeValueObject_ = {Coercible0: () => {}};
const newtypeTransaction_ = {Coercible0: () => {}};
const newtypeTransactionWitness = {Coercible0: () => {}};
const newtypeTransactionWitness1 = {Coercible0: () => {}};
const newtypeTransactionUnspent = {Coercible0: () => {}};
const newtypeTransactionUnspent1 = {Coercible0: () => {}};
const newtypeTransactionOutput_ = {Coercible0: () => {}};
const newtypeTransactionOutputO = {Coercible0: () => {}};
const newtypeTransactionObject_ = {Coercible0: () => {}};
const newtypeTransactionInput_ = {Coercible0: () => {}};
const newtypeTransactionInputOb = {Coercible0: () => {}};
const newtypeTransactionHash_ = {Coercible0: () => {}};
const newtypeTransactionHashObj = {Coercible0: () => {}};
const newtypeTransactionBody_ = {Coercible0: () => {}};
const newtypeTransactionBodyObj = {Coercible0: () => {}};
const newtypeScriptDataHash_ = {Coercible0: () => {}};
const newtypeScriptDataHashObje = {Coercible0: () => {}};
const newtypeMultiAsset_ = {Coercible0: () => {}};
const newtypeMultiAssetObject_ = {Coercible0: () => {}};
const newtypeDatum_ = {Coercible0: () => {}};
const newtypeDatumObject_ = {Coercible0: () => {}};
const newtypeDataHash_ = {Coercible0: () => {}};
const newtypeDataHashObject_ = {Coercible0: () => {}};
const newtypeBigNum_ = {Coercible0: () => {}};
const newtypeBigNumObject_ = {Coercible0: () => {}};
const newtypeBigInt_ = {Coercible0: () => {}};
const newtypeBigIntObject_ = {Coercible0: () => {}};
const newtypeAuxiliaryData_ = {Coercible0: () => {}};
const newtypeAssets_ = {Coercible0: () => {}};
const newtypeAssetsObject_ = {Coercible0: () => {}};
const newtypeAssetNames_ = {Coercible0: () => {}};
const newtypeAssetNamesObject_ = {Coercible0: () => {}};
const newtypeAssetName_ = {Coercible0: () => {}};
const newtypeAssetNameObject_ = {Coercible0: () => {}};
const valueObject = /* #__PURE__ */ (() => hfoldlWithIndexRowListCons(hfoldlWithIndexRowListCons1(hfoldlWithIndexRowListCons2(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(coinIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("coin")
})()())(hfoldlWithIndexRowListCons3(hfoldlWithIndexRowListCons4(hfoldlWithIndexRowListCons5(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(multiassetIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("multiasset")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(set_coinIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("set_coin")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(set_multiassetIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("set_multiasset")
})()())(hfoldlWithIndexRowListCons9)))))))))).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const value = /* #__PURE__ */ (() => hfoldlWithIndexRowListCons10(hfoldlWithIndexRowListCons11(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(new_from_assetsIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("new_from_assets")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil))).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const transactionWitnessSetObject = /* #__PURE__ */ (() => hfoldlWithIndexRowListCons4(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(plutus_dataIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("plutus_data")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(redeemersIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("redeemers")
})()())(hfoldlWithIndexRowListCons9))).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const transactionWitnessSet = /* #__PURE__ */ (() => hfoldlWithIndexRowListCons10(hfoldlWithIndexRowListCons11(Heterogeneous$dFolding.hfoldlWithIndexRowListNil)).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const transactionUnspentOutputObject = /* #__PURE__ */ (() => hfoldlWithIndexRowListCons4(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(inputIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("input")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(outputIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("output")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil))).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const transactionUnspentOutput = /* #__PURE__ */ (() => hfoldlWithIndexRowListCons10(hfoldlWithIndexRowListCons12).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const transactionOutputObject = /* #__PURE__ */ (() => Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(addressIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("address")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(amountIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("amount")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(datumIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("datum")
})()())(hfoldlWithIndexRowListCons4(Heterogeneous$dFolding.hfoldlWithIndexRowListNil)))).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const transactionOutput = /* #__PURE__ */ (() => hfoldlWithIndexRowListCons10(hfoldlWithIndexRowListCons11(hfoldlWithIndexRowListCons12)).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const transactionObject = /* #__PURE__ */ (() => Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(auxiliary_dataIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("auxiliary_data")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(bodyIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("body")
})()())(hfoldlWithIndexRowListCons4(hfoldlWithIndexRowListCons6(hfoldlWithIndexRowListCons8)))).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const transactionInputObject = /* #__PURE__ */ (() => hfoldlWithIndexRowListCons4(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(indexIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("index")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(transaction_idIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("transaction_id")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil))).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const transactionInput = /* #__PURE__ */ (() => hfoldlWithIndexRowListCons10(hfoldlWithIndexRowListCons13).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const transactionHashObject = /* #__PURE__ */ mkNewtypedFFI2(Type$dProxy.Proxy);
const transactionHash = /* #__PURE__ */ mkNewtypedFFI3(Type$dProxy.Proxy);
const transactionBodyObject = /* #__PURE__ */ (() => hfoldlWithIndexRowListCons4(hfoldlWithIndexRowListCons7(Heterogeneous$dFolding.hfoldlWithIndexRowListNil)).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const transactionBody = /* #__PURE__ */ (() => hfoldlWithIndexRowListCons10(hfoldlWithIndexRowListCons11(Heterogeneous$dFolding.hfoldlWithIndexRowListNil)).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const transaction = /* #__PURE__ */ (() => hfoldlWithIndexRowListCons10(hfoldlWithIndexRowListCons11(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(newIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn5(JS$dObject.unsafeRunEffectMth3)("new")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil))).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const scriptDataHashObject = /* #__PURE__ */ mkNewtypedFFI2(Type$dProxy.Proxy);
const scriptDataHash = /* #__PURE__ */ mkNewtypedFFI3(Type$dProxy.Proxy);
const multiAssetObject = /* #__PURE__ */ (() => hfoldlWithIndexRowListCons4(hfoldlWithIndexRowListCons14(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(get_assetIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn4(JS$dObject.unsafeRunEffectMth2)("get_asset")
})()())(hfoldlWithIndexRowListCons15(hfoldlWithIndexRowListCons16(hfoldlWithIndexRowListCons17(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(set_assetIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn5(JS$dObject.unsafeRunEffectMth3)("set_asset")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(subIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("sub")
})()())(hfoldlWithIndexRowListCons9)))))))).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const multiAsset = /* #__PURE__ */ mkNewtypedFFI4(Type$dProxy.Proxy);
const datumObject = /* #__PURE__ */ (() => Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(as_data_hashIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("as_data_hash")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(as_inline_dataIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("as_inline_data")
})()())(hfoldlWithIndexRowListCons4(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(kindIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("kind")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil)))).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const datum = /* #__PURE__ */ (() => hfoldlWithIndexRowListCons10(hfoldlWithIndexRowListCons11(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(new_dataIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("new_data")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(new_data_hashIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("new_data_hash")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListNil)))).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const dataHashObject = /* #__PURE__ */ mkNewtypedFFI2(Type$dProxy.Proxy);
const dataHash = /* #__PURE__ */ mkNewtypedFFI3(Type$dProxy.Proxy);
const bigNumObject = /* #__PURE__ */ (() => hfoldlWithIndexRowListCons(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(checked_divIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("checked_div")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(checked_div_ceilIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("checked_div_ceil")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(checked_mulIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("checked_mul")
})()())(hfoldlWithIndexRowListCons1(hfoldlWithIndexRowListCons2(hfoldlWithIndexRowListCons3(hfoldlWithIndexRowListCons4(hfoldlWithIndexRowListCons5(hfoldlWithIndexRowListCons18))))))))).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const bigNum = /* #__PURE__ */ mkNewtypedFFI5(Type$dProxy.Proxy);
const bigIntObject = /* #__PURE__ */ (() => Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(as_intIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("as_int")
})()())(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(as_u64IsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("as_u64")
})()())(hfoldlWithIndexRowListCons4(hfoldlWithIndexRowListCons18))).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const bigInt = /* #__PURE__ */ mkNewtypedFFI5(Type$dProxy.Proxy);
const assetsObject = /* #__PURE__ */ (() => hfoldlWithIndexRowListCons4(hfoldlWithIndexRowListCons14(hfoldlWithIndexRowListCons15(hfoldlWithIndexRowListCons16(hfoldlWithIndexRowListCons19)))).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const assets = /* #__PURE__ */ mkNewtypedFFI4(Type$dProxy.Proxy);
const assetNamesObject = /* #__PURE__ */ (() => Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(addIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn3(JS$dObject.unsafeRunEffectMth1)("add")
})()())(hfoldlWithIndexRowListCons4(hfoldlWithIndexRowListCons14(hfoldlWithIndexRowListCons19))).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const assetNames = /* #__PURE__ */ mkNewtypedFFI4(Type$dProxy.Proxy);
const assetNameObject = /* #__PURE__ */ (() => hfoldlWithIndexRowListCons4(Heterogeneous$dFolding.hfoldlWithIndexRowListCons(JS$dObject$dGeneric.foldingWithIndexMkFFIStep1(nameIsSymbol)()()({
  mthFn: mthName => v => Effect$dUncurried.runEffectFn2(JS$dObject.unsafeRunEffectMth0)("name")
})()())(hfoldlWithIndexRowListCons9)).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
const assetName = /* #__PURE__ */ (() => hfoldlWithIndexRowListCons10(hfoldlWithIndexRowListCons11(hfoldlWithIndexRowListCons13)).hfoldlWithIndex(JS$dObject$dGeneric.MkFFIStep)({})(Type$dProxy.Proxy))();
export {
  AssetName,
  AssetNameObject,
  AssetNames,
  AssetNamesObject,
  Assets,
  AssetsObject,
  AuxiliaryData,
  $$BigInt as BigInt,
  BigIntObject,
  BigNum,
  BigNumObject,
  DataHash,
  DataHashObject,
  Datum,
  DatumObject,
  MultiAsset,
  MultiAssetObject,
  ScriptDataHash,
  ScriptDataHashObject,
  Transaction,
  TransactionBody,
  TransactionBodyObject,
  TransactionHash,
  TransactionHashObject,
  TransactionInput,
  TransactionInputObject,
  TransactionObject,
  TransactionOutput,
  TransactionOutputObject,
  TransactionUnspentOutput,
  TransactionUnspentOutputObject,
  TransactionWitnessSet,
  TransactionWitnessSetObject,
  Value,
  ValueObject,
  addIsSymbol,
  addressIsSymbol,
  amountIsSymbol,
  as_data_hashIsSymbol,
  as_inline_dataIsSymbol,
  as_intIsSymbol,
  as_u64IsSymbol,
  assetName,
  assetNameObject,
  assetNames,
  assetNamesObject,
  assets,
  assetsObject,
  auxiliary_dataIsSymbol,
  bigInt,
  bigIntObject,
  bigNum,
  bigNumObject,
  bodyIsSymbol,
  checked_addIsSymbol,
  checked_divIsSymbol,
  checked_div_ceilIsSymbol,
  checked_mulIsSymbol,
  checked_subIsSymbol,
  clamped_subIsSymbol,
  coinIsSymbol,
  compareIsSymbol,
  dataHash,
  dataHashObject,
  datum,
  datumIsSymbol,
  datumObject,
  freeIsSymbol,
  from_bech32IsSymbol,
  from_bytesIsSymbol,
  from_hexIsSymbol,
  from_jsonIsSymbol,
  from_strIsSymbol,
  getIsSymbol,
  get_assetIsSymbol,
  hfoldlWithIndexRowListCons,
  hfoldlWithIndexRowListCons1,
  hfoldlWithIndexRowListCons10,
  hfoldlWithIndexRowListCons11,
  hfoldlWithIndexRowListCons12,
  hfoldlWithIndexRowListCons13,
  hfoldlWithIndexRowListCons14,
  hfoldlWithIndexRowListCons15,
  hfoldlWithIndexRowListCons16,
  hfoldlWithIndexRowListCons17,
  hfoldlWithIndexRowListCons18,
  hfoldlWithIndexRowListCons19,
  hfoldlWithIndexRowListCons2,
  hfoldlWithIndexRowListCons3,
  hfoldlWithIndexRowListCons4,
  hfoldlWithIndexRowListCons5,
  hfoldlWithIndexRowListCons6,
  hfoldlWithIndexRowListCons7,
  hfoldlWithIndexRowListCons8,
  hfoldlWithIndexRowListCons9,
  indexIsSymbol,
  inputIsSymbol,
  insertIsSymbol,
  is_zeroIsSymbol,
  keysIsSymbol,
  kindIsSymbol,
  lenIsSymbol,
  mkNewtypedFFI2,
  mkNewtypedFFI3,
  mkNewtypedFFI4,
  mkNewtypedFFI5,
  multiAsset,
  multiAssetObject,
  multiassetIsSymbol,
  nameIsSymbol,
  newIsSymbol,
  new_dataIsSymbol,
  new_data_hashIsSymbol,
  new_from_assetsIsSymbol,
  newtypeAssetNameObject_,
  newtypeAssetName_,
  newtypeAssetNamesObject_,
  newtypeAssetNames_,
  newtypeAssetsObject_,
  newtypeAssets_,
  newtypeAuxiliaryData_,
  newtypeBigIntObject_,
  newtypeBigInt_,
  newtypeBigNumObject_,
  newtypeBigNum_,
  newtypeDataHashObject_,
  newtypeDataHash_,
  newtypeDatumObject_,
  newtypeDatum_,
  newtypeMultiAssetObject_,
  newtypeMultiAsset_,
  newtypeScriptDataHashObje,
  newtypeScriptDataHash_,
  newtypeTransactionBodyObj,
  newtypeTransactionBody_,
  newtypeTransactionHashObj,
  newtypeTransactionHash_,
  newtypeTransactionInputOb,
  newtypeTransactionInput_,
  newtypeTransactionObject_,
  newtypeTransactionOutputO,
  newtypeTransactionOutput_,
  newtypeTransactionUnspent,
  newtypeTransactionUnspent1,
  newtypeTransactionWitness,
  newtypeTransactionWitness1,
  newtypeTransaction_,
  newtypeValueObject_,
  newtypeValue_,
  outputIsSymbol,
  plutus_dataIsSymbol,
  redeemersIsSymbol,
  scriptDataHash,
  scriptDataHashObject,
  set_assetIsSymbol,
  set_coinIsSymbol,
  set_multiassetIsSymbol,
  subIsSymbol,
  to_bech32IsSymbol,
  to_bytesIsSymbol,
  to_hexIsSymbol,
  to_js_valueIsSymbol,
  to_jsonIsSymbol,
  to_strIsSymbol,
  transaction,
  transactionBody,
  transactionBodyObject,
  transactionHash,
  transactionHashObject,
  transactionInput,
  transactionInputObject,
  transactionObject,
  transactionOutput,
  transactionOutputObject,
  transactionUnspentOutput,
  transactionUnspentOutputObject,
  transactionWitnessSet,
  transactionWitnessSetObject,
  transaction_idIsSymbol,
  value,
  valueObject
};
