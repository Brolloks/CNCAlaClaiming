const Renderer = x => x;
const functorRenderer = {map: f => m => x => f(m(x))};
export {Renderer, functorRenderer};
