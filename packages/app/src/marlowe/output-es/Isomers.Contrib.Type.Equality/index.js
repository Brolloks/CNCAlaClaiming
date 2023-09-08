const to$p = dict => dict["to'"];
const refl = {"to'": v => a => a, "from'": v => a => a};
const from$p = dict => dict["from'"];
export {from$p, refl, to$p};
