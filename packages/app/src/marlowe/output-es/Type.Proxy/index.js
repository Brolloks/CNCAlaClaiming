// | The `Proxy` type and values are for situations where type information is
// | required for an input to determine the type of an output, but where it is
// | not possible or convenient to provide a _value_ for the input.
// |
// | A hypothetical example: if you have a class that is used to handle the
// | result of an AJAX request, you may want to use this information to set the
// | expected content type of the request, so you might have a class something
// | like this:
// |
// | ``` purescript
// | class AjaxResponse a where
// |   responseType :: a -> ResponseType
// |   fromResponse :: Foreign -> a
// | ```
// |
// | The problem here is `responseType` requires a value of type `a`, but we
// | won't have a value of that type until the request has been completed. The
// | solution is to use a `Proxy` type instead:
// |
// | ``` purescript
// | class AjaxResponse a where
// |   responseType :: Proxy a -> ResponseType
// |   fromResponse :: Foreign -> a
// | ```
// |
// | We can now call `responseType (Proxy :: Proxy SomeContentType)` to produce
// | a `ResponseType` for `SomeContentType` without having to construct some
// | empty version of `SomeContentType` first. In situations like this where
// | the `Proxy` type can be statically determined, it is recommended to pull
// | out the definition to the top level and make a declaration like:
// |
// | ``` purescript
// | _SomeContentType :: Proxy SomeContentType
// | _SomeContentType = Proxy
// | ```
// |
// | That way the proxy value can be used as `responseType _SomeContentType`
// | for improved readability. However, this is not always possible, sometimes
// | the type required will be determined by a type variable. As PureScript has
// | scoped type variables, we can do things like this:
// |
// | ``` purescript
// | makeRequest :: URL -> ResponseType -> Aff _ Foreign
// | makeRequest = ...
// |
// | fetchData :: forall a. (AjaxResponse a) => URL -> Aff _ a
// | fetchData url = fromResponse <$> makeRequest url (responseType (Proxy :: Proxy a))
// | ```
const $$$Proxy = () => ({tag: "Proxy"});
const $$Proxy = /* #__PURE__ */ $$$Proxy();
export {$$$Proxy, $$Proxy as Proxy};
