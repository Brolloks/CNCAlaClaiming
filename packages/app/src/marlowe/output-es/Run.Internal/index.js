import * as $runtime from "../runtime.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const $Choose = (tag, _1) => ({tag, _1});
const Empty = /* #__PURE__ */ $Choose("Empty");
const Alt = value0 => $Choose("Alt", value0);
const toRows = dictTypeEquals => Unsafe$dCoerce.unsafeCoerce;
const functorChoose = {
  map: f => m => {
    if (m.tag === "Empty") { return Empty; }
    if (m.tag === "Alt") { return $Choose("Alt", x => f(m._1(x))); }
    $runtime.fail();
  }
};
const fromRows = dictTypeEquals => Unsafe$dCoerce.unsafeCoerce;
const _choose = Type$dProxy.Proxy;
export {$Choose, Alt, Empty, _choose, fromRows, functorChoose, toRows};
