import * as $runtime from "../runtime.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dLazy from "../Data.Lazy/index.js";
import * as Data$dList$dLazy$dTypes from "../Data.List.Lazy.Types/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dThese from "../Data.These/index.js";
const identity = x => x;
const nil = dict => dict.nil;
const crosswalkThese = {
  crosswalk: dictAlignable => {
    const nil1 = dictAlignable.nil;
    const $0 = dictAlignable.Align0().Functor0();
    return f => v => {
      if (v.tag === "This") { return nil1; }
      if (v.tag === "That") { return $0.map(Data$dThese.That)(f(v._1)); }
      if (v.tag === "Both") { return $0.map(Data$dThese.Both(v._1))(f(v._2)); }
      $runtime.fail();
    };
  },
  Foldable0: () => Data$dThese.foldableThese,
  Functor1: () => Data$dThese.functorThese
};
const crosswalkMaybe = {
  crosswalk: dictAlignable => {
    const nil1 = dictAlignable.nil;
    return f => v => {
      if (v.tag === "Nothing") { return nil1; }
      if (v.tag === "Just") { return dictAlignable.Align0().Functor0().map(Data$dMaybe.Just)(f(v._1)); }
      $runtime.fail();
    };
  },
  Foldable0: () => Data$dFoldable.foldableMaybe,
  Functor1: () => Data$dMaybe.functorMaybe
};
const crosswalk = dict => dict.crosswalk;
const alignMaybe = {
  align: v => v1 => v2 => {
    if (v2.tag === "Nothing") {
      if (v1.tag === "Just") { return Data$dMaybe.$Maybe("Just", v(Data$dThese.$These("This", v1._1))); }
      return Data$dMaybe.Nothing;
    }
    if (v1.tag === "Nothing") {
      if (v2.tag === "Just") { return Data$dMaybe.$Maybe("Just", v(Data$dThese.$These("That", v2._1))); }
      return Data$dMaybe.Nothing;
    }
    if (v1.tag === "Just" && v2.tag === "Just") { return Data$dMaybe.$Maybe("Just", v(Data$dThese.$These("Both", v1._1, v2._1))); }
    $runtime.fail();
  },
  Functor0: () => Data$dMaybe.functorMaybe
};
const alignableMaybe = {nil: Data$dMaybe.Nothing, Align0: () => alignMaybe};
const align = dict => dict.align;
const alignArray = {
  align: v => v1 => v2 => {
    if (v2.length === 0) { return Data$dFunctor.arrayMap(x => v(Data$dThese.$These("This", x)))(v1); }
    if (v1.length === 0) { return Data$dFunctor.arrayMap(x => v(Data$dThese.$These("That", x)))(v2); }
    return [
      ...Data$dArray.zipWith(x => y => v(Data$dThese.$These("Both", x, y)))(v1)(v2),
      ...alignArray.align(v)((() => {
        const $0 = v2.length;
        if ($0 < 1) { return v1; }
        return Data$dArray.slice($0)(v1.length)(v1);
      })())((() => {
        const $0 = v1.length;
        if ($0 < 1) { return v2; }
        return Data$dArray.slice($0)(v2.length)(v2);
      })())
    ];
  },
  Functor0: () => Data$dFunctor.functorArray
};
const alignableArray = {nil: [], Align0: () => alignArray};
const alignLazyList = {
  align: f => xs => ys => {
    const $0 = Data$dLazy.defer(v => {
      const $0 = Data$dLazy.force(xs);
      return v1 => {
        if (v1.tag === "Nil") {
          if ($0.tag === "Nil") { return Data$dList$dLazy$dTypes.Nil; }
          if ($0.tag === "Cons") { return Data$dList$dLazy$dTypes.$Step("Cons", f(Data$dThese.$These("This", $0._1)), alignLazyList.align(f)($0._2)(Data$dList$dLazy$dTypes.nil)); }
          $runtime.fail();
        }
        if (v1.tag === "Cons") {
          if ($0.tag === "Nil") { return Data$dList$dLazy$dTypes.$Step("Cons", f(Data$dThese.$These("That", v1._1)), alignLazyList.align(f)(Data$dList$dLazy$dTypes.nil)(v1._2)); }
          if ($0.tag === "Cons") { return Data$dList$dLazy$dTypes.$Step("Cons", f(Data$dThese.$These("Both", $0._1, v1._1)), alignLazyList.align(f)($0._2)(v1._2)); }
        }
        $runtime.fail();
      };
    });
    return Data$dLazy.defer(v => Data$dLazy.force($0)(Data$dLazy.force(ys)));
  },
  Functor0: () => Data$dList$dLazy$dTypes.functorList
};
const alignableLazyList = {nil: Data$dList$dLazy$dTypes.nil, Align0: () => alignLazyList};
const alignList = {
  align: v => v1 => v2 => {
    if (v2.tag === "Nil") { return Data$dList$dTypes.listMap(x => v(Data$dThese.$These("This", x)))(v1); }
    if (v1.tag === "Nil") { return Data$dList$dTypes.listMap(x => v(Data$dThese.$These("That", x)))(v2); }
    if (v1.tag === "Cons" && v2.tag === "Cons") { return Data$dList$dTypes.$List("Cons", v(Data$dThese.$These("Both", v1._1, v2._1)), alignList.align(v)(v1._2)(v2._2)); }
    $runtime.fail();
  },
  Functor0: () => Data$dList$dTypes.functorList
};
const alignableList = {nil: Data$dList$dTypes.Nil, Align0: () => alignList};
const aligned = dictAlign => dictAlign.align(identity);
const crosswalkArray = {
  crosswalk: dictAlignable => {
    const nil1 = dictAlignable.nil;
    return f => xs => {
      const v = Data$dArray.uncons(xs);
      if (v.tag === "Nothing") { return nil1; }
      if (v.tag === "Just") {
        return dictAlignable.Align0().align(v3 => {
          if (v3.tag === "This") { return [v3._1]; }
          if (v3.tag === "That") { return v3._1; }
          if (v3.tag === "Both") { return [v3._1, ...v3._2]; }
          $runtime.fail();
        })(f(v._1.head))(crosswalkArray.crosswalk(dictAlignable)(f)(v._1.tail));
      }
      $runtime.fail();
    };
  },
  Foldable0: () => Data$dFoldable.foldableArray,
  Functor1: () => Data$dFunctor.functorArray
};
const crosswalkLazyList = {
  crosswalk: dictAlignable => {
    const nil1 = dictAlignable.nil;
    return f => l => {
      const v = Data$dLazy.force(l);
      if (v.tag === "Nil") { return nil1; }
      if (v.tag === "Cons") {
        return dictAlignable.Align0().align(v3 => {
          if (v3.tag === "This") {
            const $0 = v3._1;
            return Data$dLazy.defer(v$1 => Data$dList$dLazy$dTypes.$Step("Cons", $0, Data$dList$dLazy$dTypes.nil));
          }
          if (v3.tag === "That") { return v3._1; }
          if (v3.tag === "Both") {
            const $0 = v3._1;
            const $1 = v3._2;
            return Data$dLazy.defer(v$1 => Data$dList$dLazy$dTypes.$Step("Cons", $0, $1));
          }
          $runtime.fail();
        })(f(v._1))(crosswalkLazyList.crosswalk(dictAlignable)(f)(v._2));
      }
      $runtime.fail();
    };
  },
  Foldable0: () => Data$dList$dLazy$dTypes.foldableList,
  Functor1: () => Data$dList$dLazy$dTypes.functorList
};
const crosswalkList = {
  crosswalk: dictAlignable => {
    const nil1 = dictAlignable.nil;
    return f => v => {
      if (v.tag === "Nil") { return nil1; }
      if (v.tag === "Cons") {
        return dictAlignable.Align0().align(v3 => {
          if (v3.tag === "This") { return Data$dList$dTypes.$List("Cons", v3._1, Data$dList$dTypes.Nil); }
          if (v3.tag === "That") { return v3._1; }
          if (v3.tag === "Both") { return Data$dList$dTypes.$List("Cons", v3._1, v3._2); }
          $runtime.fail();
        })(f(v._1))(crosswalkList.crosswalk(dictAlignable)(f)(v._2));
      }
      $runtime.fail();
    };
  },
  Foldable0: () => Data$dList$dTypes.foldableList,
  Functor1: () => Data$dList$dTypes.functorList
};
export {
  align,
  alignArray,
  alignLazyList,
  alignList,
  alignMaybe,
  alignableArray,
  alignableLazyList,
  alignableList,
  alignableMaybe,
  aligned,
  crosswalk,
  crosswalkArray,
  crosswalkLazyList,
  crosswalkList,
  crosswalkMaybe,
  crosswalkThese,
  identity,
  nil
};
