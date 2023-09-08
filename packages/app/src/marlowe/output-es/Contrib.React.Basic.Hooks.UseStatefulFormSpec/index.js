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
const UseStatefulForm = x => x;
const newtypeUseStatefulFormSpe = {Coercible0: () => {}};
const useStatefulFormSpec = dictEq => v => {
  const $0 = v.spec.fields;
  const $1 = v.state;
  const $2 = v.validationDebounce;
  const $3 = foldMap(v1 => {
    if (v1.touched) { return Data$dMap$dInternal.$$$Map("Two", Data$dMap$dInternal.Leaf, v1.name, undefined, Data$dMap$dInternal.Leaf); }
    return Data$dMap$dInternal.Leaf;
  })($0);
  return () => {
    const a = React$dBasic$dHooks.useState_(($4, $5) => Data$dTuple.$Tuple($4, $5), $3);
    const $4 = a._1;
    const a$1 = React$dBasic$dHooks.useState$p(Data$dMaybe.Nothing)();
    const $5 = a$1._1;
    const a$2 = React$dBasic$dHooks.useState$p($1)();
    const a$3 = React$dBasic$dHooks.useRef_($1);
    const $6 = React$dBasic$dHooks.writeRef(a$3)(a$2._1);
    React$dBasic$dHooks.useEffect_(
      ($7, $8) => dictEq.eq($7)($8),
      a$2._1,
      () => {
        $6();
        return () => {};
      }
    );
    const a$4 = useMemo($0)(v4 => fromFoldable(Data$dFunctor.arrayMap(v5 => Data$dTuple.$Tuple(v5.name, v5.initial))($0)))();
    const a$5 = React$dBasic$dHooks.useState_(($7, $8) => Data$dTuple.$Tuple($7, $8), a$4);
    const $7 = a$5._1;
    const a$6 = useDebounce($7)($2)();
    const $8 = v.spec.validator(a$6)($1);
    const $9 = !$$null($4)
      ? (() => {
          const v5 = $8();
          a$2._2(v5._2)();
          return a$1._2(Data$dMaybe.$Maybe("Just", Data$dTuple.$Tuple(v5._1, a$6)))();
        })
      : () => {};
    React$dBasic$dHooks.useEffect_(
      ($10, $11) => Data$dFormURLEncoded$dQuery.eqQuery.eq($10)($11),
      a$6,
      () => {
        $9();
        return () => {};
      }
    );
    return pure2({
      formState: {
        fields: fromFoldable1(Data$dFunctor.arrayMap(v5 => {
          const $10 = v5.name;
          return Data$dTuple.$Tuple(
            $10,
            {
              name: $10,
              initial: v5.initial,
              value: (() => {
                const $11 = Data$dMap$dInternal.lookup(Data$dOrd.ordString)($10)($7);
                if ($11.tag === "Nothing") { return []; }
                if ($11.tag === "Just") { return $11._1; }
                $runtime.fail();
              })(),
              errors: (() => {
                if ($5.tag === "Just") {
                  if ($5._1._1.tag === "Left") {
                    const errs$p = Polyform$dBatteries$dUrlEncoded$dTypes$dErrors.lookup($10)($5._1._1._1);
                    const $11 = Data$dMap$dInternal.lookup(Data$dOrd.ordString)($10)($5._1._2);
                    if ($11.tag === "Just") { return Data$dMaybe.$Maybe("Just", Data$dTuple.$Tuple(errs$p, $11._1)); }
                    if ($11.tag === "Nothing") { return Data$dMaybe.Nothing; }
                    $runtime.fail();
                  }
                  if ($5._1._1.tag === "Right") {
                    const $11 = Data$dMap$dInternal.lookup(Data$dOrd.ordString)($10)($5._1._2);
                    if ($11.tag === "Just") { return Data$dMaybe.$Maybe("Just", Data$dTuple.$Tuple([], $11._1)); }
                    if ($11.tag === "Nothing") { return Data$dMaybe.Nothing; }
                  }
                  $runtime.fail();
                }
                if ($5.tag === "Nothing") { return Data$dMaybe.Nothing; }
                $runtime.fail();
              })(),
              touched: (() => {
                const $11 = Data$dMap$dInternal.lookup(Data$dOrd.ordString)($10)($4);
                if ($11.tag === "Nothing") { return false; }
                if ($11.tag === "Just") { return true; }
                $runtime.fail();
              })(),
              onChange: value => {
                const $11 = a$5._2(Data$dMap$dInternal.insert(Data$dOrd.ordString)($10)(value));
                return () => {
                  $11();
                  return a._2(Data$dSet.insert(Data$dOrd.ordString)($10))();
                };
              }
            }
          );
        })($0)),
        errors: (() => {
          if ($5.tag === "Just") {
            if ($5._1._1.tag === "Left") { return Data$dMaybe.$Maybe("Just", Data$dTuple.$Tuple($5._1._1._1, $5._1._2)); }
            if ($5._1._1.tag === "Right") { return Data$dMaybe.Nothing; }
            $runtime.fail();
          }
          if ($5.tag === "Nothing") { return Data$dMaybe.Nothing; }
          $runtime.fail();
        })(),
        query: $7,
        state: $1
      },
      onSubmit: (() => {
        const $10 = v.onSubmit({payload: $7, result: $5});
        return v$1 => $10();
      })(),
      result: $5
    })();
  };
};
export {UseStatefulForm, foldMap, fromFoldable, fromFoldable1, newtypeUseStatefulFormSpe, $$null as null, pure2, useDebounce, useMemo, useStatefulFormSpec};
