const $Unwrap = () => ({tag: "Unwrap"});
const $Wrap = () => ({tag: "Wrap"});
const Wrap = /* #__PURE__ */ $Wrap();
const Unwrap = /* #__PURE__ */ $Unwrap();
const wrapMapping = () => ({mapping: v => v1 => v1});
const unwrapMapping = () => ({mapping: v => v1 => v1});
export {$Unwrap, $Wrap, Unwrap, Wrap, unwrapMapping, wrapMapping};
