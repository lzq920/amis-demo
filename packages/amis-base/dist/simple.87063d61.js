import { r as E } from "./codemirror.813d9e5a.js";
function I(v, m) {
  for (var f = 0; f < m.length; f++) {
    const S = m[f];
    if (typeof S != "string" && !Array.isArray(S)) {
      for (const s in S)
        if (s !== "default" && !(s in v)) {
          const y = Object.getOwnPropertyDescriptor(S, s);
          y && Object.defineProperty(v, s, y.get ? y : {
            enumerable: !0,
            get: () => S[s]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(v, Symbol.toStringTag, { value: "Module" }));
}
var O = { exports: {} };
(function(v, m) {
  (function(f) {
    f(E());
  })(function(f) {
    f.defineSimpleMode = function(t, o) {
      f.defineMode(t, function(n) {
        return f.simpleMode(n, o);
      });
    }, f.simpleMode = function(t, o) {
      S(o, "start");
      var n = {}, e = o.meta || {}, d = !1;
      for (var l in o)
        if (l != e && o.hasOwnProperty(l))
          for (var u = n[l] = [], p = o[l], c = 0; c < p.length; c++) {
            var i = p[c];
            u.push(new w(i, o)), (i.indent || i.dedent) && (d = !0);
          }
      var g = {
        startState: function() {
          return {
            state: "start",
            pending: null,
            local: null,
            localState: null,
            indent: d ? [] : null
          };
        },
        copyState: function(r) {
          var x = {
            state: r.state,
            pending: r.pending,
            local: r.local,
            localState: null,
            indent: r.indent && r.indent.slice(0)
          };
          r.localState && (x.localState = f.copyState(r.local.mode, r.localState)), r.stack && (x.stack = r.stack.slice(0));
          for (var h = r.persistentStates; h; h = h.next)
            x.persistentStates = {
              mode: h.mode,
              spec: h.spec,
              state: h.state == r.localState ? x.localState : f.copyState(h.mode, h.state),
              next: x.persistentStates
            };
          return x;
        },
        token: P(n, t),
        innerMode: function(r) {
          return r.local && { mode: r.local.mode, state: r.localState };
        },
        indent: j(n, e)
      };
      if (e)
        for (var a in e)
          e.hasOwnProperty(a) && (g[a] = e[a]);
      return g;
    };
    function S(t, o) {
      if (!t.hasOwnProperty(o))
        throw new Error("Undefined state " + o + " in simple mode");
    }
    function s(t, o) {
      if (!t)
        return /(?:)/;
      var n = "";
      return t instanceof RegExp ? (t.ignoreCase && (n = "i"), t.unicode && (n += "u"), t = t.source) : t = String(t), new RegExp((o === !1 ? "" : "^") + "(?:" + t + ")", n);
    }
    function y(t) {
      if (!t)
        return null;
      if (t.apply)
        return t;
      if (typeof t == "string")
        return t.replace(/\./g, " ");
      for (var o = [], n = 0; n < t.length; n++)
        o.push(t[n] && t[n].replace(/\./g, " "));
      return o;
    }
    function w(t, o) {
      (t.next || t.push) && S(o, t.next || t.push), this.regex = s(t.regex), this.token = y(t.token), this.data = t;
    }
    function P(t, o) {
      return function(n, e) {
        if (e.pending) {
          var d = e.pending.shift();
          return e.pending.length == 0 && (e.pending = null), n.pos += d.text.length, d.token;
        }
        if (e.local)
          if (e.local.end && n.match(e.local.end)) {
            var l = e.local.endToken || null;
            return e.local = e.localState = null, l;
          } else {
            var l = e.local.mode.token(n, e.localState), u;
            return e.local.endScan && (u = e.local.endScan.exec(n.current())) && (n.pos = n.start + u.index), l;
          }
        for (var p = t[e.state], c = 0; c < p.length; c++) {
          var i = p[c], g = (!i.data.sol || n.sol()) && n.match(i.regex);
          if (g) {
            i.data.next ? e.state = i.data.next : i.data.push ? ((e.stack || (e.stack = [])).push(e.state), e.state = i.data.push) : i.data.pop && e.stack && e.stack.length && (e.state = e.stack.pop()), i.data.mode && _(o, e, i.data.mode, i.token), i.data.indent && e.indent.push(n.indentation() + o.indentUnit), i.data.dedent && e.indent.pop();
            var a = i.token;
            if (a && a.apply && (a = a(g)), g.length > 2 && i.token && typeof i.token != "string") {
              for (var r = 2; r < g.length; r++)
                g[r] && (e.pending || (e.pending = [])).push({ text: g[r], token: i.token[r - 1] });
              return n.backUp(g[0].length - (g[1] ? g[1].length : 0)), a[0];
            } else
              return a && a.join ? a[0] : a;
          }
        }
        return n.next(), null;
      };
    }
    function k(t, o) {
      if (t === o)
        return !0;
      if (!t || typeof t != "object" || !o || typeof o != "object")
        return !1;
      var n = 0;
      for (var e in t)
        if (t.hasOwnProperty(e)) {
          if (!o.hasOwnProperty(e) || !k(t[e], o[e]))
            return !1;
          n++;
        }
      for (var e in o)
        o.hasOwnProperty(e) && n--;
      return n == 0;
    }
    function _(t, o, n, e) {
      var d;
      if (n.persistent)
        for (var l = o.persistentStates; l && !d; l = l.next)
          (n.spec ? k(n.spec, l.spec) : n.mode == l.mode) && (d = l);
      var u = d ? d.mode : n.mode || f.getMode(t, n.spec), p = d ? d.state : f.startState(u);
      n.persistent && !d && (o.persistentStates = { mode: u, spec: n.spec, state: p, next: o.persistentStates }), o.localState = p, o.local = {
        mode: u,
        end: n.end && s(n.end),
        endScan: n.end && n.forceEnd !== !1 && s(n.end, !1),
        endToken: e && e.join ? e[e.length - 1] : e
      };
    }
    function b(t, o) {
      for (var n = 0; n < o.length; n++)
        if (o[n] === t)
          return !0;
    }
    function j(t, o) {
      return function(n, e, d) {
        if (n.local && n.local.mode.indent)
          return n.local.mode.indent(n.localState, e, d);
        if (n.indent == null || n.local || o.dontIndentStates && b(n.state, o.dontIndentStates) > -1)
          return f.Pass;
        var l = n.indent.length - 1, u = t[n.state];
        n:
          for (; ; ) {
            for (var p = 0; p < u.length; p++) {
              var c = u[p];
              if (c.data.dedent && c.data.dedentIfLineStart !== !1) {
                var i = c.regex.exec(e);
                if (i && i[0]) {
                  l--, (c.next || c.push) && (u = t[c.next || c.push]), e = e.slice(i[0].length);
                  continue n;
                }
              }
            }
            break;
          }
        return l < 0 ? 0 : n.indent[l];
      };
    }
  });
})();
const R = O.exports, U = /* @__PURE__ */ I({
  __proto__: null,
  default: R
}, [O.exports]);
export {
  U as s
};
