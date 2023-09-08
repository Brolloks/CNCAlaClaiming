const post = () => dictIsSymbol => l => req => ({type: dictIsSymbol.reflectSymbol(l), value: {type: "POST", value: req}});
const $$get = () => dictIsSymbol => l => req => ({type: dictIsSymbol.reflectSymbol(l), value: {type: "GET", value: req}});
export {$$get as get, post};
