// | ## Overview of the Problem
// |
// | This module provides a way of dealing with the JS idiom of options
// | objects in PureScript, by giving you the tools to provide a reasonably
// | comfortable typed layer on top of JavaScript APIs which make use of this
// | idiom.
// |
// | Many JavaScript APIs include functions which take an object argument,
// | where the object's properties come from a fixed set of optional
// | configuration values. For example, the `createWriteStream` function from
// | the Node.js `fs` module may contain properties such as:
// |
// | - `flags`, which should be a `String`, such as `"w"`, `"rw"`, or `"r+"`,
// | - `defaultEncoding`, which should be a `String` representing an
// |   encoding, such as `"utf8"`,
// |
// | and so on.
// |
// | ## Why PureScript Records Don't Work
// |
// | PureScript's record types can be a little awkward for this, since it is
// | usually the case that any subset of these properties can be specified;
// | however, a value of  type `{ flags :: String, defaultEncoding :: String, [...] }`
// | must include every property listed, even if you only want to specify
// | one or two properties.
// |
// | ## Using this Library
// |
// | This library provides a better solution for this problem. Using this
// | module, you could wrap `fs.createWriteStream` as follows:
// |
// | First, create a phantom type used for the options object:
// |
// | ```purescript
// | data CreateWriteStreamOptions
// | ```
// |
// | Then, create `Option` values for each of the options:
// |
// | ```purescript
// | flags :: Option CreateWriteStreamOptions String
// | flags = opt "flags"
// |
// | defaultEncoding :: Option CreateWriteStreamOptions String
// | defaultEncoding = opt "defaultEncoding"
// |
// | -- and so on
// | ```
// |
// | Import the function you're wrapping using the FFI, using the `Foreign`
// | type for the options object:
// |
// | ```purescript
// | -- don't export this!
// | foreign import createWriteStreamImpl :: FilePath -> Foreign -> Effect Unit
// | ```
// |
// | Finally, in the function you are going to export, take an `Options` value
// | for the options argument, and use the `options` function provided by this
// | library to convert it into a `Foreign` value, which will then have a
// | suitable representation for passing to the JavaScript API.
// |
// | ```
// | createWriteStream :: FilePath -> Options CreateWriteStreamOptions -> Effect Unit
// | createWriteStream path opts = createWriteStreamImpl path (options opts)
// | ```
// |
// | Then, users of your API can create `Options` values using the `:=`
// | operator to assign values for the options they want to configure, and the
// | `Monoid Options` instance to combine them. For example, as a user of this
// | API, you might write:
// |
// | ```purescript
// | FS.createWriteStream "file.txt" $
// |    defaultEncoding := "utf8" <>
// |    flags := "rw"
// | ```
// |
// | ## Increasing Type Safety
// |
// | You can also use more specific types for more type safety. For example,
// | it would be safer to use the existing `FileFlags` and `Encoding` types
// | already provided by the `node-fs` library. However, we cannot use them
// | directly because they will have the wrong runtime representation. This is
// | where the `Contravariant` instance for `Option` comes in; it can be used
// | to transform an option's value to give it a suitable runtime
// | representation based on what the JS API is expecting. For example:
// |
// | ```purescript
// | flags :: Option CreateWriteStreamOptions FileFlags
// | flags = cmap fileFlagsToNode (opt "flags")
// | ```
// |
// | Note that `fileFlagsToNode` takes a `FileFlags` and returns a `String`
// | suitable for passing to a Node.js API.
import * as $runtime from "../runtime.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dSemigroup from "../Data.Semigroup/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const fromFoldable = /* #__PURE__ */ Foreign$dObject.fromFoldable(Data$dFoldable.foldableArray);
const Options = x => x;
const semigroupOptions = Data$dSemigroup.semigroupArray;
const options = v => fromFoldable(v);
const newtypeOptions = {Coercible0: () => {}};
const monoidOptions = Data$dMonoid.monoidArray;
const defaultToOptions = k => v => [Data$dTuple.$Tuple(k, v)];
const opt = x => v => [Data$dTuple.$Tuple(x, v)];
const assoc = Unsafe$dCoerce.unsafeCoerce;
const optional = option => v2 => {
  if (v2.tag === "Nothing") { return []; }
  if (v2.tag === "Just") { return option(v2._1); }
  $runtime.fail();
};
const tag = o => value => v => o(value);
export {Options, assoc, defaultToOptions, fromFoldable, monoidOptions, newtypeOptions, opt, optional, options, semigroupOptions, tag};
