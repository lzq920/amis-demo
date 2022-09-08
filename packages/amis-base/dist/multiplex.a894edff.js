import { r as x } from "./codemirror.813d9e5a.js";
function a(A, u) {
  for (var c = 0; c < u.length; c++) {
    const r = u[c];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const v in r)
        if (v !== "default" && !(v in A)) {
          const g = Object.getOwnPropertyDescriptor(r, v);
          g && Object.defineProperty(A, v, g.get ? g : {
            enumerable: !0,
            get: () => r[v]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(A, Symbol.toStringTag, { value: "Module" }));
}
var S = { exports: {} };
(function(A, u) {
  (function(c) {
    c(x());
  })(function(c) {
    c.multiplexingMode = function(r) {
      var v = Array.prototype.slice.call(arguments, 1);
      function g(n, i, l, e) {
        if (typeof i == "string") {
          var p = n.indexOf(i, l);
          return e && p > -1 ? p + i.length : p;
        }
        var o = i.exec(l ? n.slice(l) : n);
        return o ? o.index + l + (e ? o[0].length : 0) : -1;
      }
      return {
        startState: function() {
          return {
            outer: c.startState(r),
            innerActive: null,
            inner: null,
            startingInner: !1
          };
        },
        copyState: function(n) {
          return {
            outer: c.copyState(r, n.outer),
            innerActive: n.innerActive,
            inner: n.innerActive && c.copyState(n.innerActive.mode, n.inner),
            startingInner: n.startingInner
          };
        },
        token: function(n, i) {
          if (i.innerActive) {
            var t = i.innerActive, e = n.string;
            if (!t.close && n.sol())
              return i.innerActive = i.inner = null, this.token(n, i);
            var f = t.close && !i.startingInner ? g(e, t.close, n.pos, t.parseDelimiters) : -1;
            if (f == n.pos && !t.parseDelimiters)
              return n.match(t.close), i.innerActive = i.inner = null, t.delimStyle && t.delimStyle + " " + t.delimStyle + "-close";
            f > -1 && (n.string = e.slice(0, f));
            var y = t.mode.token(n, i.inner);
            return f > -1 ? n.string = e : n.pos > n.start && (i.startingInner = !1), f == n.pos && t.parseDelimiters && (i.innerActive = i.inner = null), t.innerStyle && (y ? y = y + " " + t.innerStyle : y = t.innerStyle), y;
          } else {
            for (var l = 1 / 0, e = n.string, p = 0; p < v.length; ++p) {
              var o = v[p], f = g(e, o.open, n.pos);
              if (f == n.pos) {
                o.parseDelimiters || n.match(o.open), i.startingInner = !!o.parseDelimiters, i.innerActive = o;
                var d = 0;
                if (r.indent) {
                  var s = r.indent(i.outer, "", "");
                  s !== c.Pass && (d = s);
                }
                return i.inner = c.startState(o.mode, d), o.delimStyle && o.delimStyle + " " + o.delimStyle + "-open";
              } else
                f != -1 && f < l && (l = f);
            }
            l != 1 / 0 && (n.string = e.slice(0, l));
            var m = r.token(n, i.outer);
            return l != 1 / 0 && (n.string = e), m;
          }
        },
        indent: function(n, i, l) {
          var e = n.innerActive ? n.innerActive.mode : r;
          return e.indent ? e.indent(n.innerActive ? n.inner : n.outer, i, l) : c.Pass;
        },
        blankLine: function(n) {
          var i = n.innerActive ? n.innerActive.mode : r;
          if (i.blankLine && i.blankLine(n.innerActive ? n.inner : n.outer), n.innerActive)
            n.innerActive.close === `
` && (n.innerActive = n.inner = null);
          else
            for (var l = 0; l < v.length; ++l) {
              var e = v[l];
              e.open === `
` && (n.innerActive = e, n.inner = c.startState(e.mode, i.indent ? i.indent(n.outer, "", "") : 0));
            }
        },
        electricChars: r.electricChars,
        innerMode: function(n) {
          return n.inner ? { state: n.inner, mode: n.innerActive.mode } : { state: n.outer, mode: r };
        }
      };
    };
  });
})();
const b = S.exports, P = /* @__PURE__ */ a({
  __proto__: null,
  default: b
}, [S.exports]);
export {
  P as m
};
