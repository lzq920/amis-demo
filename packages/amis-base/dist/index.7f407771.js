import { m as C, d as y } from "./index.c8396ec8.js";
function k(a) {
  var r;
  if (typeof a == "string") {
    var e = new DOMParser();
    r = e.parseFromString(a, "text/xml");
  } else
    r = a;
  if (!r || r.getElementsByTagName("parsererror").length)
    return null;
  var i = f(r, "gexf");
  if (!i)
    return null;
  for (var v = f(i, "graph"), t = F(f(v, "attributes")), u = {}, o = 0; o < t.length; o++)
    u[t[o].id] = t[o];
  return {
    nodes: M(f(v, "nodes"), u),
    links: N(f(v, "edges"))
  };
}
function F(a) {
  return a ? C(x(a, "attribute"), function(r) {
    return {
      id: n(r, "id"),
      title: n(r, "title"),
      type: n(r, "type")
    };
  }) : [];
}
function M(a, r) {
  return a ? C(x(a, "node"), function(e) {
    var i = n(e, "id"), v = n(e, "label"), t = {
      id: i,
      name: v,
      itemStyle: {
        normal: {}
      }
    }, u = f(e, "viz:size"), o = f(e, "viz:position"), l = f(e, "viz:color"), s = f(e, "attvalues");
    if (u && (t.symbolSize = parseFloat(n(u, "value"))), o && (t.x = parseFloat(n(o, "x")), t.y = parseFloat(n(o, "y"))), l && (t.itemStyle.normal.color = "rgb(" + [n(l, "r") | 0, n(l, "g") | 0, n(l, "b") | 0].join(",") + ")"), s) {
      var d = x(s, "attvalue");
      t.attributes = {};
      for (var p = 0; p < d.length; p++) {
        var b = d[p], c = n(b, "for"), g = n(b, "value"), h = r[c];
        if (h) {
          switch (h.type) {
            case "integer":
            case "long":
              g = parseInt(g, 10);
              break;
            case "float":
            case "double":
              g = parseFloat(g);
              break;
            case "boolean":
              g = g.toLowerCase() === "true";
              break;
          }
          t.attributes[c] = g;
        }
      }
    }
    return t;
  }) : [];
}
function N(a) {
  return a ? C(x(a, "edge"), function(r) {
    var e = n(r, "id"), i = n(r, "label"), v = n(r, "source"), t = n(r, "target"), u = {
      id: e,
      name: i,
      source: v,
      target: t,
      lineStyle: {
        normal: {}
      }
    }, o = u.lineStyle.normal, l = f(r, "viz:thickness"), s = f(r, "viz:color");
    return l && (o.width = parseFloat(l.getAttribute("value"))), s && (o.color = "rgb(" + [n(s, "r") | 0, n(s, "g") | 0, n(s, "b") | 0].join(",") + ")"), u;
  }) : [];
}
function n(a, r) {
  return a.getAttribute(r);
}
function f(a, r) {
  for (var e = a.firstChild; e; )
    if (e.nodeType !== 1 || e.nodeName.toLowerCase() !== r.toLowerCase())
      e = e.nextSibling;
    else
      return e;
  return null;
}
function x(a, r) {
  for (var e = a.firstChild, i = []; e; )
    e.nodeName.toLowerCase() === r.toLowerCase() && i.push(e), e = e.nextSibling;
  return i;
}
const B = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  parse: k
}, Symbol.toStringTag, { value: "Module" }));
function R(a) {
  return a.sort(function(r, e) {
    return r - e;
  }), a;
}
function m(a, r) {
  var e = (a.length - 1) * r + 1, i = Math.floor(e), v = +a[i - 1], t = e - i;
  return t ? v + t * (a[i] - v) : v;
}
function _(a, r) {
  r = r || {};
  for (var e = [], i = [], v = [], t = r.boundIQR, u = t === "none" || t === 0, o = 0; o < a.length; o++) {
    v.push(o + "");
    var l = R(a[o].slice()), s = m(l, 0.25), d = m(l, 0.5), p = m(l, 0.75), b = l[0], c = l[l.length - 1], g = (t == null ? 1.5 : t) * (p - s), h = u ? b : Math.max(b, s - g), w = u ? c : Math.min(c, p + g);
    e.push([h, s, d, p, w]);
    for (var z = 0; z < l.length; z++) {
      var S = l[z];
      if (S < h || S > w) {
        var T = [o, S];
        r.layout === "vertical" && T.reverse(), i.push(T);
      }
    }
  }
  return {
    boxData: e,
    outliers: i,
    axisData: v
  };
}
var E = "1.0.0";
y && (y.version = E, y.gexf = B, y.prepareBoxplotData = _);
export {
  B as gexf,
  _ as prepareBoxplotData,
  E as version
};
