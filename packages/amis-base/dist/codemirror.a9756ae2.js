import { r as a } from "./codemirror.813d9e5a.js";
function f(t, n) {
  for (var o = 0; o < n.length; o++) {
    const r = n[o];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const e in r)
        if (e !== "default" && !(e in t)) {
          const i = Object.getOwnPropertyDescriptor(r, e);
          i && Object.defineProperty(t, e, i.get ? i : {
            enumerable: !0,
            get: () => r[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var c = a();
const p = /* @__PURE__ */ f({
  __proto__: null,
  default: c
}, [c]);
export {
  p as c
};