import * as $runtime from "../runtime.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFormURLEncoded$dQuery from "../Data.FormURLEncoded.Query/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dSet from "../Data.Set/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Polyform$dBatteries$dUrlEncoded$dTypes$dErrors from "../Polyform.Batteries.UrlEncoded.Types.Errors/index.js";
import * as React$dBasic$dHooks from "../React.Basic.Hooks/index.js";
import * as React$dBasic$dHooks$dInternal from "../React.Basic.Hooks.Internal/index.js";
import * as React$dBasic$dHooks$dUseDebounce from "../React.Basic.Hooks.UseDebounce/index.js";
import * as Type$dEquality from "../Type.Equality/index.js";
const foldMap = /* #__PURE__ */ (() => Data$dFoldable.foldableArray.foldMap({mempty: Data$dMap$dInternal.Leaf, Semigroup0: () => ({append: Data$dSet.union(Data$dOrd.ordString)})}))();
const useMemo = /* #__PURE__ */ React$dBasic$dHooks.useMemo({
  eq: /* #__PURE__ */ Data$dEq.eqArrayImpl(/* #__PURE__ */ (() => {
    const $0 = Data$dEq.eqArrayImpl(Data$dEq.eqStringImpl);
    return ra => rb => $0(ra.initial)(rb.initial) && ra.name === rb.name && ra.touched === rb.touched;
  })())
});
const fromFoldable = /* #__PURE__ */ Data$dMap$dInternal.fromFoldable(Data$dOrd.ordString)(Data$dFoldable.foldableArray);
const useDebounce = /* #__PURE__ */ React$dBasic$dHooks$dUseDebounce.useDebounce(Data$dFormURLEncoded$dQuery.eqQuery);
const $$null = /* #__PURE__ */ (() => Data$dSet.foldableSet.foldr(v => v1 => false)(true))();
const fromFoldable1 = /* #__PURE__ */ Data$dMap$dInternal.fromFoldable(Data$dOrd.ordString)(Data$dFoldable.foldableArray);
const pure2 = /* #__PURE__ */ (() => React$dBasic$dHooks$dInternal.applicativeRender(Type$dEquality.refl).pure)();
const UseStatlessFormSpec = x => x;
const newtypeUseStatlessFormSpe = {Coercible0: () => {}};
const useStatelessFormSpec = v => {
  const $0 = v.spec.fields;
  const $1 = v.validationDebounce;
  const $2 = foldMap(v1 => {
    if (v1.touched) { return Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, v1.name, undefined, Data$dMap$dInternal.Leaf); }
    return Data$dMap$dInternal.Leaf;
  })($0);
  return () => {
    const a = React$dBasic$dHooks.useState_(($3, $4) => Data$dTuple.$Tuple($3, $4), $2);
    const $3 = a._1;
    const a$1 = React$dBasic$dHooks.useState$p(Data$dMaybe.Nothing)();
    const $4 = a$1._1;
    const a$2 = useMemo($0)(v3 => fromFoldable(Data$dFunctor.arrayMap(v4 => Data$dTuple.$Tuple(v4.name, v4.initial))($0)))();
    const a$3 = React$dBasic$dHooks.useState_(($5, $6) => Data$dTuple.$Tuple($5, $6), a$2);
    const $5 = a$3._1;
    const a$4 = useDebounce($5)($1)();
    const $6 = v.spec.validator(a$4);
    const $7 = !$$null($3)
      ? (() => {
          const result = $6();
          return a$1._2(Data$dMaybe.$Maybe("Just", Data$dTuple.$Tuple(result, a$4)))();
        })
      : () => {};
    React$dBasic$dHooks.useEffect_(
      ($8, $9) => Data$dFormURLEncoded$dQuery.eqQuery.eq($8)($9),
      a$4,
      () => {
        $7();
        return () => {};
      }
    );
    return pure2({
      formState: {
        fields: fromFoldable1(Data$dFunctor.arrayMap(v4 => {
          const $8 = v4.name;
          return Data$dTuple.$Tuple(
            $8,
            {
              name: $8,
              initial: v4.initial,
              value: (() => {
                const $9 = Data$dMap$dInternal.lookup(Data$dOrd.ordString)($8)($5);
                if ($9.tag === "Nothing") { return []; }
                if ($9.tag === "Just") { return $9._1; }
                $runtime.fail();
              })(),
              errors: (() => {
                if ($4.tag === "Just") {
                  if ($4._1._1.tag === "Left") {
                    const errs$p = Polyform$dBatteries$dUrlEncoded$dTypes$dErrors.lookup($8)($4._1._1._1);
                    const $9 = Data$dMap$dInternal.lookup(Data$dOrd.ordString)($8)($4._1._2);
                    if ($9.tag === "Just") { return Data$dMaybe.$Maybe("Just", Data$dTuple.$Tuple(errs$p, $9._1)); }
                    if ($9.tag === "Nothing") { return Data$dMaybe.Nothing; }
                    $runtime.fail();
                  }
                  if ($4._1._1.tag === "Right") {
                    const $9 = Data$dMap$dInternal.lookup(Data$dOrd.ordString)($8)($4._1._2);
                    if ($9.tag === "Just") { return Data$dMaybe.$Maybe("Just", Data$dTuple.$Tuple([], $9._1)); }
                    if ($9.tag === "Nothing") { return Data$dMaybe.Nothing; }
                  }
                  $runtime.fail();
                }
                if ($4.tag === "Nothing") { return Data$dMaybe.Nothing; }
                $runtime.fail();
              })(),
              touched: (() => {
                const $9 = Data$dMap$dInternal.lookup(Data$dOrd.ordString)($8)($3);
                if ($9.tag === "Nothing") { return false; }
                if ($9.tag === "Just") { return true; }
                $runtime.fail();
              })(),
              onChange: value => {
                const $9 = a$3._2(Data$dMap$dInternal.insert(Data$dOrd.ordString)($8)(value));
                return () => {
                  $9();
                  return a._2(Data$dSet.insert(Data$dOrd.ordString)($8))();
                };
              }
            }
          );
        })($0)),
        errors: (() => {
          if ($4.tag === "Just") {
            if ($4._1._1.tag === "Left") { return Data$dMaybe.$Maybe("Just", Data$dTuple.$Tuple($4._1._1._1, $4._1._2)); }
            if ($4._1._1.tag === "Right") { return Data$dMaybe.Nothing; }
            $runtime.fail();
          }
          if ($4.tag === "Nothing") { return Data$dMaybe.Nothing; }
          $runtime.fail();
        })(),
        query: $5
      },
      onSubmit: (() => {
        const $8 = v.onSubmit({payload: $5, result: $4});
        return v$1 => $8();
      })(),
      result: $4
    })();
  };
};
export {UseStatlessFormSpec, foldMap, fromFoldable, fromFoldable1, newtypeUseStatlessFormSpe, $$null as null, pure2, useDebounce, useMemo, useStatelessFormSpec};
