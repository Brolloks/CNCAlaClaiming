const runValidator = x => x$1 => x(x$1);
const generalize = dictApplicative => v => x => dictApplicative.pure(v(x));
export {generalize, runValidator};
