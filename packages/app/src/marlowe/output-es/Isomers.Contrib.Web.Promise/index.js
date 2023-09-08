import * as Control$dPromise from "../Control.Promise/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const toAffPromise = Unsafe$dCoerce.unsafeCoerce;
const toAffE = x => Effect$dAff._bind(Effect$dAff._liftEffect(() => x()))(Control$dPromise.toAff$p(Control$dPromise.coerce));
const toAff = x => Control$dPromise.toAff$p(Control$dPromise.coerce)(x);
export {toAff, toAffE, toAffPromise};
