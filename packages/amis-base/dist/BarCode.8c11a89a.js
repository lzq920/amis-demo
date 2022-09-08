import { _ as At, j as Pt, w as Tt } from "./index.7add3ddd.js";
import He from "react";
import "react-dom";
var le = {}, U = {}, l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
function Mt(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
var kt = function t(e, r) {
  Mt(this, t), this.data = e, this.text = r.text || e, this.options = r;
};
l.default = kt;
Object.defineProperty(U, "__esModule", {
  value: !0
});
U.CODE39 = void 0;
var It = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), Dt = l, jt = Bt(Dt);
function Bt(t) {
  return t && t.__esModule ? t : { default: t };
}
function Lt(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Nt(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Ct(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Gt = function(t) {
  Ct(e, t);
  function e(r, n) {
    return Lt(this, e), r = r.toUpperCase(), n.mod43 && (r += Xt(zt(r))), Nt(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n));
  }
  return It(e, [{
    key: "encode",
    value: function() {
      for (var n = te("*"), a = 0; a < this.data.length; a++)
        n += te(this.data[a]) + "0";
      return n += te("*"), {
        data: n,
        text: this.text
      };
    }
  }, {
    key: "valid",
    value: function() {
      return this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/) !== -1;
    }
  }]), e;
}(jt.default), nt = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-", ".", " ", "$", "/", "+", "%", "*"], Ht = [20957, 29783, 23639, 30485, 20951, 29813, 23669, 20855, 29789, 23645, 29975, 23831, 30533, 22295, 30149, 24005, 21623, 29981, 23837, 22301, 30023, 23879, 30545, 22343, 30161, 24017, 21959, 30065, 23921, 22385, 29015, 18263, 29141, 17879, 29045, 18293, 17783, 29021, 18269, 17477, 17489, 17681, 20753, 35770];
function te(t) {
  return Ft(rt(t));
}
function Ft(t) {
  return Ht[t].toString(2);
}
function Xt(t) {
  return nt[t];
}
function rt(t) {
  return nt.indexOf(t);
}
function zt(t) {
  for (var e = 0, r = 0; r < t.length; r++)
    e += rt(t[r]);
  return e = e % 43, e;
}
U.CODE39 = Gt;
var s = {}, he = {}, P = {}, f = {};
Object.defineProperty(f, "__esModule", {
  value: !0
});
var I;
function ne(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var at = f.SET_A = 0, it = f.SET_B = 1, ot = f.SET_C = 2;
f.SHIFT = 98;
var Ut = f.START_A = 103, qt = f.START_B = 104, Vt = f.START_C = 105;
f.MODULO = 103;
f.STOP = 106;
f.FNC1 = 207;
f.SET_BY_CODE = (I = {}, ne(I, Ut, at), ne(I, qt, it), ne(I, Vt, ot), I);
f.SWAP = {
  101: at,
  100: it,
  99: ot
};
f.A_START_CHAR = String.fromCharCode(208);
f.B_START_CHAR = String.fromCharCode(209);
f.C_START_CHAR = String.fromCharCode(210);
f.A_CHARS = "[\0-_\xC8-\xCF]";
f.B_CHARS = "[ -\x7F\xC8-\xCF]";
f.C_CHARS = "(\xCF*[0-9]{2}\xCF*)";
f.BARS = [11011001100, 11001101100, 11001100110, 10010011e3, 10010001100, 10001001100, 10011001e3, 10011000100, 10001100100, 11001001e3, 11001000100, 11000100100, 10110011100, 10011011100, 10011001110, 10111001100, 10011101100, 10011100110, 11001110010, 11001011100, 11001001110, 11011100100, 11001110100, 11101101110, 11101001100, 11100101100, 11100100110, 11101100100, 11100110100, 11100110010, 11011011e3, 11011000110, 11000110110, 10100011e3, 10001011e3, 10001000110, 10110001e3, 10001101e3, 10001100010, 11010001e3, 11000101e3, 11000100010, 10110111e3, 10110001110, 10001101110, 10111011e3, 10111000110, 10001110110, 11101110110, 11010001110, 11000101110, 11011101e3, 11011100010, 11011101110, 11101011e3, 11101000110, 11100010110, 11101101e3, 11101100010, 11100011010, 11101111010, 11001000010, 11110001010, 1010011e4, 10100001100, 1001011e4, 10010000110, 10000101100, 10000100110, 1011001e4, 10110000100, 1001101e4, 10011000010, 10000110100, 10000110010, 11000010010, 1100101e4, 11110111010, 11000010100, 10001111010, 10100111100, 10010111100, 10010011110, 10111100100, 10011110100, 10011110010, 11110100100, 11110010100, 11110010010, 11011011110, 11011110110, 11110110110, 10101111e3, 10100011110, 10001011110, 10111101e3, 10111100010, 11110101e3, 11110100010, 10111011110, 10111101110, 11101011110, 11110101110, 11010000100, 1101001e4, 11010011100, 1100011101011];
Object.defineProperty(P, "__esModule", {
  value: !0
});
var Jt = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), Qt = l, Wt = Yt(Qt), h = f;
function Yt(t) {
  return t && t.__esModule ? t : { default: t };
}
function Zt(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Kt(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function en(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var tn = function(t) {
  en(e, t);
  function e(r, n) {
    Zt(this, e);
    var a = Kt(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r.substring(1), n));
    return a.bytes = r.split("").map(function(i) {
      return i.charCodeAt(0);
    }), a;
  }
  return Jt(e, [{
    key: "valid",
    value: function() {
      return /^[\x00-\x7F\xC8-\xD3]+$/.test(this.data);
    }
  }, {
    key: "encode",
    value: function() {
      var n = this.bytes, a = n.shift() - 105, i = h.SET_BY_CODE[a];
      if (i === void 0)
        throw new RangeError("The encoding does not start with a start character.");
      this.shouldEncodeAsEan128() === !0 && n.unshift(h.FNC1);
      var o = e.next(n, 1, i);
      return {
        text: this.text === this.data ? this.text.replace(/[^\x20-\x7E]/g, "") : this.text,
        data: e.getBar(a) + o.result + e.getBar((o.checksum + a) % h.MODULO) + e.getBar(h.STOP)
      };
    }
  }, {
    key: "shouldEncodeAsEan128",
    value: function() {
      var n = this.options.ean128 || !1;
      return typeof n == "string" && (n = n.toLowerCase() === "true"), n;
    }
  }], [{
    key: "getBar",
    value: function(n) {
      return h.BARS[n] ? h.BARS[n].toString() : "";
    }
  }, {
    key: "correctIndex",
    value: function(n, a) {
      if (a === h.SET_A) {
        var i = n.shift();
        return i < 32 ? i + 64 : i - 32;
      } else
        return a === h.SET_B ? n.shift() - 32 : (n.shift() - 48) * 10 + n.shift() - 48;
    }
  }, {
    key: "next",
    value: function(n, a, i) {
      if (!n.length)
        return { result: "", checksum: 0 };
      var o = void 0, u = void 0;
      if (n[0] >= 200) {
        u = n.shift() - 105;
        var y = h.SWAP[u];
        y !== void 0 ? o = e.next(n, a + 1, y) : ((i === h.SET_A || i === h.SET_B) && u === h.SHIFT && (n[0] = i === h.SET_A ? n[0] > 95 ? n[0] - 96 : n[0] : n[0] < 32 ? n[0] + 96 : n[0]), o = e.next(n, a + 1, i));
      } else
        u = e.correctIndex(n, i), o = e.next(n, a + 1, i);
      var $ = e.getBar(u), Rt = u * a;
      return {
        result: $ + o.result,
        checksum: Rt + o.checksum
      };
    }
  }]), e;
}(Wt.default);
P.default = tn;
var de = {};
Object.defineProperty(de, "__esModule", {
  value: !0
});
var g = f, ut = function(e) {
  return e.match(new RegExp("^" + g.A_CHARS + "*"))[0].length;
}, ft = function(e) {
  return e.match(new RegExp("^" + g.B_CHARS + "*"))[0].length;
}, ct = function(e) {
  return e.match(new RegExp("^" + g.C_CHARS + "*"))[0];
};
function _e(t, e) {
  var r = e ? g.A_CHARS : g.B_CHARS, n = t.match(new RegExp("^(" + r + "+?)(([0-9]{2}){2,})([^0-9]|$)"));
  if (n)
    return n[1] + String.fromCharCode(204) + lt(t.substring(n[1].length));
  var a = t.match(new RegExp("^" + r + "+"))[0];
  return a.length === t.length ? t : a + String.fromCharCode(e ? 205 : 206) + _e(t.substring(a.length), !e);
}
function lt(t) {
  var e = ct(t), r = e.length;
  if (r === t.length)
    return t;
  t = t.substring(r);
  var n = ut(t) >= ft(t);
  return e + String.fromCharCode(n ? 206 : 205) + _e(t, n);
}
de.default = function(t) {
  var e = void 0, r = ct(t).length;
  if (r >= 2)
    e = g.C_START_CHAR + lt(t);
  else {
    var n = ut(t) > ft(t);
    e = (n ? g.A_START_CHAR : g.B_START_CHAR) + _e(t, n);
  }
  return e.replace(
    /[\xCD\xCE]([^])[\xCD\xCE]/,
    function(a, i) {
      return String.fromCharCode(203) + i;
    }
  );
};
Object.defineProperty(he, "__esModule", {
  value: !0
});
var nn = P, rn = ht(nn), an = de, on = ht(an);
function ht(t) {
  return t && t.__esModule ? t : { default: t };
}
function un(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function re(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function fn(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var cn = function(t) {
  fn(e, t);
  function e(r, n) {
    if (un(this, e), /^[\x00-\x7F\xC8-\xD3]+$/.test(r))
      var a = re(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, (0, on.default)(r), n));
    else
      var a = re(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n));
    return re(a);
  }
  return e;
}(rn.default);
he.default = cn;
var ve = {};
Object.defineProperty(ve, "__esModule", {
  value: !0
});
var ln = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), hn = P, dn = _n(hn), Fe = f;
function _n(t) {
  return t && t.__esModule ? t : { default: t };
}
function vn(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function sn(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function yn(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var pn = function(t) {
  yn(e, t);
  function e(r, n) {
    return vn(this, e), sn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, Fe.A_START_CHAR + r, n));
  }
  return ln(e, [{
    key: "valid",
    value: function() {
      return new RegExp("^" + Fe.A_CHARS + "+$").test(this.data);
    }
  }]), e;
}(dn.default);
ve.default = pn;
var se = {};
Object.defineProperty(se, "__esModule", {
  value: !0
});
var gn = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), On = P, En = bn(On), Xe = f;
function bn(t) {
  return t && t.__esModule ? t : { default: t };
}
function mn(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function wn(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function $n(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Sn = function(t) {
  $n(e, t);
  function e(r, n) {
    return mn(this, e), wn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, Xe.B_START_CHAR + r, n));
  }
  return gn(e, [{
    key: "valid",
    value: function() {
      return new RegExp("^" + Xe.B_CHARS + "+$").test(this.data);
    }
  }]), e;
}(En.default);
se.default = Sn;
var ye = {};
Object.defineProperty(ye, "__esModule", {
  value: !0
});
var xn = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), Rn = P, An = Pn(Rn), ze = f;
function Pn(t) {
  return t && t.__esModule ? t : { default: t };
}
function Tn(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Mn(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function kn(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var In = function(t) {
  kn(e, t);
  function e(r, n) {
    return Tn(this, e), Mn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, ze.C_START_CHAR + r, n));
  }
  return xn(e, [{
    key: "valid",
    value: function() {
      return new RegExp("^" + ze.C_CHARS + "+$").test(this.data);
    }
  }]), e;
}(An.default);
ye.default = In;
Object.defineProperty(s, "__esModule", {
  value: !0
});
s.CODE128C = s.CODE128B = s.CODE128A = s.CODE128 = void 0;
var Dn = he, jn = q(Dn), Bn = ve, Ln = q(Bn), Nn = se, Cn = q(Nn), Gn = ye, Hn = q(Gn);
function q(t) {
  return t && t.__esModule ? t : { default: t };
}
s.CODE128 = jn.default;
s.CODE128A = Ln.default;
s.CODE128B = Cn.default;
s.CODE128C = Hn.default;
var c = {}, pe = {}, v = {};
Object.defineProperty(v, "__esModule", {
  value: !0
});
v.SIDE_BIN = "101";
v.MIDDLE_BIN = "01010";
v.BINARIES = {
  L: [
    "0001101",
    "0011001",
    "0010011",
    "0111101",
    "0100011",
    "0110001",
    "0101111",
    "0111011",
    "0110111",
    "0001011"
  ],
  G: [
    "0100111",
    "0110011",
    "0011011",
    "0100001",
    "0011101",
    "0111001",
    "0000101",
    "0010001",
    "0001001",
    "0010111"
  ],
  R: [
    "1110010",
    "1100110",
    "1101100",
    "1000010",
    "1011100",
    "1001110",
    "1010000",
    "1000100",
    "1001000",
    "1110100"
  ],
  O: [
    "0001101",
    "0011001",
    "0010011",
    "0111101",
    "0100011",
    "0110001",
    "0101111",
    "0111011",
    "0110111",
    "0001011"
  ],
  E: [
    "0100111",
    "0110011",
    "0011011",
    "0100001",
    "0011101",
    "0111001",
    "0000101",
    "0010001",
    "0001001",
    "0010111"
  ]
};
v.EAN2_STRUCTURE = ["LL", "LG", "GL", "GG"];
v.EAN5_STRUCTURE = ["GGLLL", "GLGLL", "GLLGL", "GLLLG", "LGGLL", "LLGGL", "LLLGG", "LGLGL", "LGLLG", "LLGLG"];
v.EAN13_STRUCTURE = ["LLLLLL", "LLGLGG", "LLGGLG", "LLGGGL", "LGLLGG", "LGGLLG", "LGGGLL", "LGLGLG", "LGLGGL", "LGGLGL"];
var V = {}, b = {};
Object.defineProperty(b, "__esModule", {
  value: !0
});
var Fn = v, Xn = function(e, r, n) {
  var a = e.split("").map(function(o, u) {
    return Fn.BINARIES[r[u]];
  }).map(function(o, u) {
    return o ? o[e[u]] : "";
  });
  if (n) {
    var i = e.length - 1;
    a = a.map(function(o, u) {
      return u < i ? o + n : o;
    });
  }
  return a.join("");
};
b.default = Xn;
Object.defineProperty(V, "__esModule", {
  value: !0
});
var zn = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), S = v, Un = b, Ue = dt(Un), qn = l, Vn = dt(qn);
function dt(t) {
  return t && t.__esModule ? t : { default: t };
}
function Jn(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Qn(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Wn(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Yn = function(t) {
  Wn(e, t);
  function e(r, n) {
    Jn(this, e);
    var a = Qn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n));
    return a.fontSize = !n.flat && n.fontSize > n.width * 10 ? n.width * 10 : n.fontSize, a.guardHeight = n.height + a.fontSize / 2 + n.textMargin, a;
  }
  return zn(e, [{
    key: "encode",
    value: function() {
      return this.options.flat ? this.encodeFlat() : this.encodeGuarded();
    }
  }, {
    key: "leftText",
    value: function(n, a) {
      return this.text.substr(n, a);
    }
  }, {
    key: "leftEncode",
    value: function(n, a) {
      return (0, Ue.default)(n, a);
    }
  }, {
    key: "rightText",
    value: function(n, a) {
      return this.text.substr(n, a);
    }
  }, {
    key: "rightEncode",
    value: function(n, a) {
      return (0, Ue.default)(n, a);
    }
  }, {
    key: "encodeGuarded",
    value: function() {
      var n = { fontSize: this.fontSize }, a = { height: this.guardHeight };
      return [{ data: S.SIDE_BIN, options: a }, { data: this.leftEncode(), text: this.leftText(), options: n }, { data: S.MIDDLE_BIN, options: a }, { data: this.rightEncode(), text: this.rightText(), options: n }, { data: S.SIDE_BIN, options: a }];
    }
  }, {
    key: "encodeFlat",
    value: function() {
      var n = [S.SIDE_BIN, this.leftEncode(), S.MIDDLE_BIN, this.rightEncode(), S.SIDE_BIN];
      return {
        data: n.join(""),
        text: this.text
      };
    }
  }]), e;
}(Vn.default);
V.default = Yn;
Object.defineProperty(pe, "__esModule", {
  value: !0
});
var Zn = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), D = function t(e, r, n) {
  e === null && (e = Function.prototype);
  var a = Object.getOwnPropertyDescriptor(e, r);
  if (a === void 0) {
    var i = Object.getPrototypeOf(e);
    return i === null ? void 0 : t(i, r, n);
  } else {
    if ("value" in a)
      return a.value;
    var o = a.get;
    return o === void 0 ? void 0 : o.call(n);
  }
}, Kn = v, er = V, tr = nr(er);
function nr(t) {
  return t && t.__esModule ? t : { default: t };
}
function rr(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ar(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function ir(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var qe = function(e) {
  var r = e.substr(0, 12).split("").map(function(n) {
    return +n;
  }).reduce(function(n, a, i) {
    return i % 2 ? n + a * 3 : n + a;
  }, 0);
  return (10 - r % 10) % 10;
}, or = function(t) {
  ir(e, t);
  function e(r, n) {
    rr(this, e), r.search(/^[0-9]{12}$/) !== -1 && (r += qe(r));
    var a = ar(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n));
    return a.lastChar = n.lastChar, a;
  }
  return Zn(e, [{
    key: "valid",
    value: function() {
      return this.data.search(/^[0-9]{13}$/) !== -1 && +this.data[12] === qe(this.data);
    }
  }, {
    key: "leftText",
    value: function() {
      return D(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "leftText", this).call(this, 1, 6);
    }
  }, {
    key: "leftEncode",
    value: function() {
      var n = this.data.substr(1, 6), a = Kn.EAN13_STRUCTURE[this.data[0]];
      return D(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "leftEncode", this).call(this, n, a);
    }
  }, {
    key: "rightText",
    value: function() {
      return D(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "rightText", this).call(this, 7, 6);
    }
  }, {
    key: "rightEncode",
    value: function() {
      var n = this.data.substr(7, 6);
      return D(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "rightEncode", this).call(this, n, "RRRRRR");
    }
  }, {
    key: "encodeGuarded",
    value: function() {
      var n = D(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "encodeGuarded", this).call(this);
      return this.options.displayValue && (n.unshift({
        data: "000000000000",
        text: this.text.substr(0, 1),
        options: { textAlign: "left", fontSize: this.fontSize }
      }), this.options.lastChar && (n.push({
        data: "00"
      }), n.push({
        data: "00000",
        text: this.options.lastChar,
        options: { fontSize: this.fontSize }
      }))), n;
    }
  }]), e;
}(tr.default);
pe.default = or;
var ge = {};
Object.defineProperty(ge, "__esModule", {
  value: !0
});
var ur = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), H = function t(e, r, n) {
  e === null && (e = Function.prototype);
  var a = Object.getOwnPropertyDescriptor(e, r);
  if (a === void 0) {
    var i = Object.getPrototypeOf(e);
    return i === null ? void 0 : t(i, r, n);
  } else {
    if ("value" in a)
      return a.value;
    var o = a.get;
    return o === void 0 ? void 0 : o.call(n);
  }
}, fr = V, cr = lr(fr);
function lr(t) {
  return t && t.__esModule ? t : { default: t };
}
function hr(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function dr(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function _r(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Ve = function(e) {
  var r = e.substr(0, 7).split("").map(function(n) {
    return +n;
  }).reduce(function(n, a, i) {
    return i % 2 ? n + a : n + a * 3;
  }, 0);
  return (10 - r % 10) % 10;
}, vr = function(t) {
  _r(e, t);
  function e(r, n) {
    return hr(this, e), r.search(/^[0-9]{7}$/) !== -1 && (r += Ve(r)), dr(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n));
  }
  return ur(e, [{
    key: "valid",
    value: function() {
      return this.data.search(/^[0-9]{8}$/) !== -1 && +this.data[7] === Ve(this.data);
    }
  }, {
    key: "leftText",
    value: function() {
      return H(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "leftText", this).call(this, 0, 4);
    }
  }, {
    key: "leftEncode",
    value: function() {
      var n = this.data.substr(0, 4);
      return H(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "leftEncode", this).call(this, n, "LLLL");
    }
  }, {
    key: "rightText",
    value: function() {
      return H(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "rightText", this).call(this, 4, 4);
    }
  }, {
    key: "rightEncode",
    value: function() {
      var n = this.data.substr(4, 4);
      return H(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "rightEncode", this).call(this, n, "RRRR");
    }
  }]), e;
}(cr.default);
ge.default = vr;
var Oe = {};
Object.defineProperty(Oe, "__esModule", {
  value: !0
});
var sr = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), yr = v, pr = b, gr = _t(pr), Or = l, Er = _t(Or);
function _t(t) {
  return t && t.__esModule ? t : { default: t };
}
function br(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function mr(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function wr(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var $r = function(e) {
  var r = e.split("").map(function(n) {
    return +n;
  }).reduce(function(n, a, i) {
    return i % 2 ? n + a * 9 : n + a * 3;
  }, 0);
  return r % 10;
}, Sr = function(t) {
  wr(e, t);
  function e(r, n) {
    return br(this, e), mr(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n));
  }
  return sr(e, [{
    key: "valid",
    value: function() {
      return this.data.search(/^[0-9]{5}$/) !== -1;
    }
  }, {
    key: "encode",
    value: function() {
      var n = yr.EAN5_STRUCTURE[$r(this.data)];
      return {
        data: "1011" + (0, gr.default)(this.data, n, "01"),
        text: this.text
      };
    }
  }]), e;
}(Er.default);
Oe.default = Sr;
var Ee = {};
Object.defineProperty(Ee, "__esModule", {
  value: !0
});
var xr = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), Rr = v, Ar = b, Pr = vt(Ar), Tr = l, Mr = vt(Tr);
function vt(t) {
  return t && t.__esModule ? t : { default: t };
}
function kr(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ir(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Dr(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var jr = function(t) {
  Dr(e, t);
  function e(r, n) {
    return kr(this, e), Ir(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n));
  }
  return xr(e, [{
    key: "valid",
    value: function() {
      return this.data.search(/^[0-9]{2}$/) !== -1;
    }
  }, {
    key: "encode",
    value: function() {
      var n = Rr.EAN2_STRUCTURE[parseInt(this.data) % 4];
      return {
        data: "1011" + (0, Pr.default)(this.data, n, "01"),
        text: this.text
      };
    }
  }]), e;
}(Mr.default);
Ee.default = jr;
var L = {};
Object.defineProperty(L, "__esModule", {
  value: !0
});
var Br = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}();
L.checksum = ue;
var Lr = b, x = st(Lr), Nr = l, Cr = st(Nr);
function st(t) {
  return t && t.__esModule ? t : { default: t };
}
function Gr(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Hr(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Fr(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Xr = function(t) {
  Fr(e, t);
  function e(r, n) {
    Gr(this, e), r.search(/^[0-9]{11}$/) !== -1 && (r += ue(r));
    var a = Hr(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n));
    return a.displayValue = n.displayValue, n.fontSize > n.width * 10 ? a.fontSize = n.width * 10 : a.fontSize = n.fontSize, a.guardHeight = n.height + a.fontSize / 2 + n.textMargin, a;
  }
  return Br(e, [{
    key: "valid",
    value: function() {
      return this.data.search(/^[0-9]{12}$/) !== -1 && this.data[11] == ue(this.data);
    }
  }, {
    key: "encode",
    value: function() {
      return this.options.flat ? this.flatEncoding() : this.guardedEncoding();
    }
  }, {
    key: "flatEncoding",
    value: function() {
      var n = "";
      return n += "101", n += (0, x.default)(this.data.substr(0, 6), "LLLLLL"), n += "01010", n += (0, x.default)(this.data.substr(6, 6), "RRRRRR"), n += "101", {
        data: n,
        text: this.text
      };
    }
  }, {
    key: "guardedEncoding",
    value: function() {
      var n = [];
      return this.displayValue && n.push({
        data: "00000000",
        text: this.text.substr(0, 1),
        options: { textAlign: "left", fontSize: this.fontSize }
      }), n.push({
        data: "101" + (0, x.default)(this.data[0], "L"),
        options: { height: this.guardHeight }
      }), n.push({
        data: (0, x.default)(this.data.substr(1, 5), "LLLLL"),
        text: this.text.substr(1, 5),
        options: { fontSize: this.fontSize }
      }), n.push({
        data: "01010",
        options: { height: this.guardHeight }
      }), n.push({
        data: (0, x.default)(this.data.substr(6, 5), "RRRRR"),
        text: this.text.substr(6, 5),
        options: { fontSize: this.fontSize }
      }), n.push({
        data: (0, x.default)(this.data[11], "R") + "101",
        options: { height: this.guardHeight }
      }), this.displayValue && n.push({
        data: "00000000",
        text: this.text.substr(11, 1),
        options: { textAlign: "right", fontSize: this.fontSize }
      }), n;
    }
  }]), e;
}(Cr.default);
function ue(t) {
  var e = 0, r;
  for (r = 1; r < 11; r += 2)
    e += parseInt(t[r]);
  for (r = 0; r < 11; r += 2)
    e += parseInt(t[r]) * 3;
  return (10 - e % 10) % 10;
}
L.default = Xr;
var be = {};
Object.defineProperty(be, "__esModule", {
  value: !0
});
var zr = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), Ur = b, qr = yt(Ur), Vr = l, Jr = yt(Vr), Qr = L;
function yt(t) {
  return t && t.__esModule ? t : { default: t };
}
function Wr(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ae(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Yr(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Zr = ["XX00000XXX", "XX10000XXX", "XX20000XXX", "XXX00000XX", "XXXX00000X", "XXXXX00005", "XXXXX00006", "XXXXX00007", "XXXXX00008", "XXXXX00009"], Kr = [["EEEOOO", "OOOEEE"], ["EEOEOO", "OOEOEE"], ["EEOOEO", "OOEEOE"], ["EEOOOE", "OOEEEO"], ["EOEEOO", "OEOOEE"], ["EOOEEO", "OEEOOE"], ["EOOOEE", "OEEEOO"], ["EOEOEO", "OEOEOE"], ["EOEOOE", "OEOEEO"], ["EOOEOE", "OEEOEO"]], ea = function(t) {
  Yr(e, t);
  function e(r, n) {
    Wr(this, e);
    var a = ae(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n));
    if (a.isValid = !1, r.search(/^[0-9]{6}$/) !== -1)
      a.middleDigits = r, a.upcA = Je(r, "0"), a.text = n.text || "" + a.upcA[0] + r + a.upcA[a.upcA.length - 1], a.isValid = !0;
    else if (r.search(/^[01][0-9]{7}$/) !== -1)
      if (a.middleDigits = r.substring(1, r.length - 1), a.upcA = Je(a.middleDigits, r[0]), a.upcA[a.upcA.length - 1] === r[r.length - 1])
        a.isValid = !0;
      else
        return ae(a);
    else
      return ae(a);
    return a.displayValue = n.displayValue, n.fontSize > n.width * 10 ? a.fontSize = n.width * 10 : a.fontSize = n.fontSize, a.guardHeight = n.height + a.fontSize / 2 + n.textMargin, a;
  }
  return zr(e, [{
    key: "valid",
    value: function() {
      return this.isValid;
    }
  }, {
    key: "encode",
    value: function() {
      return this.options.flat ? this.flatEncoding() : this.guardedEncoding();
    }
  }, {
    key: "flatEncoding",
    value: function() {
      var n = "";
      return n += "101", n += this.encodeMiddleDigits(), n += "010101", {
        data: n,
        text: this.text
      };
    }
  }, {
    key: "guardedEncoding",
    value: function() {
      var n = [];
      return this.displayValue && n.push({
        data: "00000000",
        text: this.text[0],
        options: { textAlign: "left", fontSize: this.fontSize }
      }), n.push({
        data: "101",
        options: { height: this.guardHeight }
      }), n.push({
        data: this.encodeMiddleDigits(),
        text: this.text.substring(1, 7),
        options: { fontSize: this.fontSize }
      }), n.push({
        data: "010101",
        options: { height: this.guardHeight }
      }), this.displayValue && n.push({
        data: "00000000",
        text: this.text[7],
        options: { textAlign: "right", fontSize: this.fontSize }
      }), n;
    }
  }, {
    key: "encodeMiddleDigits",
    value: function() {
      var n = this.upcA[0], a = this.upcA[this.upcA.length - 1], i = Kr[parseInt(a)][parseInt(n)];
      return (0, qr.default)(this.middleDigits, i);
    }
  }]), e;
}(Jr.default);
function Je(t, e) {
  for (var r = parseInt(t[t.length - 1]), n = Zr[r], a = "", i = 0, o = 0; o < n.length; o++) {
    var u = n[o];
    u === "X" ? a += t[i++] : a += u;
  }
  return a = "" + e + a, "" + a + (0, Qr.checksum)(a);
}
be.default = ea;
Object.defineProperty(c, "__esModule", {
  value: !0
});
c.UPCE = c.UPC = c.EAN2 = c.EAN5 = c.EAN8 = c.EAN13 = void 0;
var ta = pe, na = T(ta), ra = ge, aa = T(ra), ia = Oe, oa = T(ia), ua = Ee, fa = T(ua), ca = L, la = T(ca), ha = be, da = T(ha);
function T(t) {
  return t && t.__esModule ? t : { default: t };
}
c.EAN13 = na.default;
c.EAN8 = aa.default;
c.EAN5 = oa.default;
c.EAN2 = fa.default;
c.UPC = la.default;
c.UPCE = da.default;
var A = {}, J = {}, N = {};
Object.defineProperty(N, "__esModule", {
  value: !0
});
N.START_BIN = "1010";
N.END_BIN = "11101";
N.BINARIES = ["00110", "10001", "01001", "11000", "00101", "10100", "01100", "00011", "10010", "01010"];
Object.defineProperty(J, "__esModule", {
  value: !0
});
var _a = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), F = N, va = l, sa = ya(va);
function ya(t) {
  return t && t.__esModule ? t : { default: t };
}
function pa(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ga(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Oa(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Ea = function(t) {
  Oa(e, t);
  function e() {
    return pa(this, e), ga(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
  }
  return _a(e, [{
    key: "valid",
    value: function() {
      return this.data.search(/^([0-9]{2})+$/) !== -1;
    }
  }, {
    key: "encode",
    value: function() {
      var n = this, a = this.data.match(/.{2}/g).map(function(i) {
        return n.encodePair(i);
      }).join("");
      return {
        data: F.START_BIN + a + F.END_BIN,
        text: this.text
      };
    }
  }, {
    key: "encodePair",
    value: function(n) {
      var a = F.BINARIES[n[1]];
      return F.BINARIES[n[0]].split("").map(function(i, o) {
        return (i === "1" ? "111" : "1") + (a[o] === "1" ? "000" : "0");
      }).join("");
    }
  }]), e;
}(sa.default);
J.default = Ea;
var me = {};
Object.defineProperty(me, "__esModule", {
  value: !0
});
var ba = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), ma = J, wa = $a(ma);
function $a(t) {
  return t && t.__esModule ? t : { default: t };
}
function Sa(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function xa(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Ra(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Qe = function(e) {
  var r = e.substr(0, 13).split("").map(function(n) {
    return parseInt(n, 10);
  }).reduce(function(n, a, i) {
    return n + a * (3 - i % 2 * 2);
  }, 0);
  return Math.ceil(r / 10) * 10 - r;
}, Aa = function(t) {
  Ra(e, t);
  function e(r, n) {
    return Sa(this, e), r.search(/^[0-9]{13}$/) !== -1 && (r += Qe(r)), xa(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n));
  }
  return ba(e, [{
    key: "valid",
    value: function() {
      return this.data.search(/^[0-9]{14}$/) !== -1 && +this.data[13] === Qe(this.data);
    }
  }]), e;
}(wa.default);
me.default = Aa;
Object.defineProperty(A, "__esModule", {
  value: !0
});
A.ITF14 = A.ITF = void 0;
var Pa = J, Ta = pt(Pa), Ma = me, ka = pt(Ma);
function pt(t) {
  return t && t.__esModule ? t : { default: t };
}
A.ITF = Ta.default;
A.ITF14 = ka.default;
var _ = {}, m = {};
Object.defineProperty(m, "__esModule", {
  value: !0
});
var Ia = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), Da = l, ja = Ba(Da);
function Ba(t) {
  return t && t.__esModule ? t : { default: t };
}
function La(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Na(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Ca(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Ga = function(t) {
  Ca(e, t);
  function e(r, n) {
    return La(this, e), Na(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n));
  }
  return Ia(e, [{
    key: "encode",
    value: function() {
      for (var n = "110", a = 0; a < this.data.length; a++) {
        var i = parseInt(this.data[a]), o = i.toString(2);
        o = Ha(o, 4 - o.length);
        for (var u = 0; u < o.length; u++)
          n += o[u] == "0" ? "100" : "110";
      }
      return n += "1001", {
        data: n,
        text: this.text
      };
    }
  }, {
    key: "valid",
    value: function() {
      return this.data.search(/^[0-9]+$/) !== -1;
    }
  }]), e;
}(ja.default);
function Ha(t, e) {
  for (var r = 0; r < e; r++)
    t = "0" + t;
  return t;
}
m.default = Ga;
var we = {}, w = {};
Object.defineProperty(w, "__esModule", {
  value: !0
});
w.mod10 = Fa;
w.mod11 = Xa;
function Fa(t) {
  for (var e = 0, r = 0; r < t.length; r++) {
    var n = parseInt(t[r]);
    (r + t.length) % 2 === 0 ? e += n : e += n * 2 % 10 + Math.floor(n * 2 / 10);
  }
  return (10 - e % 10) % 10;
}
function Xa(t) {
  for (var e = 0, r = [2, 3, 4, 5, 6, 7], n = 0; n < t.length; n++) {
    var a = parseInt(t[t.length - 1 - n]);
    e += r[n % r.length] * a;
  }
  return (11 - e % 11) % 11;
}
Object.defineProperty(we, "__esModule", {
  value: !0
});
var za = m, Ua = Va(za), qa = w;
function Va(t) {
  return t && t.__esModule ? t : { default: t };
}
function Ja(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Qa(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Wa(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Ya = function(t) {
  Wa(e, t);
  function e(r, n) {
    return Ja(this, e), Qa(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r + (0, qa.mod10)(r), n));
  }
  return e;
}(Ua.default);
we.default = Ya;
var $e = {};
Object.defineProperty($e, "__esModule", {
  value: !0
});
var Za = m, Ka = ti(Za), ei = w;
function ti(t) {
  return t && t.__esModule ? t : { default: t };
}
function ni(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ri(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function ai(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var ii = function(t) {
  ai(e, t);
  function e(r, n) {
    return ni(this, e), ri(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r + (0, ei.mod11)(r), n));
  }
  return e;
}(Ka.default);
$e.default = ii;
var Se = {};
Object.defineProperty(Se, "__esModule", {
  value: !0
});
var oi = m, ui = fi(oi), We = w;
function fi(t) {
  return t && t.__esModule ? t : { default: t };
}
function ci(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function li(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function hi(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var di = function(t) {
  hi(e, t);
  function e(r, n) {
    return ci(this, e), r += (0, We.mod10)(r), r += (0, We.mod10)(r), li(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n));
  }
  return e;
}(ui.default);
Se.default = di;
var xe = {};
Object.defineProperty(xe, "__esModule", {
  value: !0
});
var _i = m, vi = si(_i), Ye = w;
function si(t) {
  return t && t.__esModule ? t : { default: t };
}
function yi(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function pi(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function gi(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Oi = function(t) {
  gi(e, t);
  function e(r, n) {
    return yi(this, e), r += (0, Ye.mod11)(r), r += (0, Ye.mod10)(r), pi(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n));
  }
  return e;
}(vi.default);
xe.default = Oi;
Object.defineProperty(_, "__esModule", {
  value: !0
});
_.MSI1110 = _.MSI1010 = _.MSI11 = _.MSI10 = _.MSI = void 0;
var Ei = m, bi = C(Ei), mi = we, wi = C(mi), $i = $e, Si = C($i), xi = Se, Ri = C(xi), Ai = xe, Pi = C(Ai);
function C(t) {
  return t && t.__esModule ? t : { default: t };
}
_.MSI = bi.default;
_.MSI10 = wi.default;
_.MSI11 = Si.default;
_.MSI1010 = Ri.default;
_.MSI1110 = Pi.default;
var Q = {};
Object.defineProperty(Q, "__esModule", {
  value: !0
});
Q.pharmacode = void 0;
var Ti = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), Mi = l, ki = Ii(Mi);
function Ii(t) {
  return t && t.__esModule ? t : { default: t };
}
function Di(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ji(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Bi(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Li = function(t) {
  Bi(e, t);
  function e(r, n) {
    Di(this, e);
    var a = ji(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n));
    return a.number = parseInt(r, 10), a;
  }
  return Ti(e, [{
    key: "encode",
    value: function() {
      for (var n = this.number, a = ""; !isNaN(n) && n != 0; )
        n % 2 === 0 ? (a = "11100" + a, n = (n - 2) / 2) : (a = "100" + a, n = (n - 1) / 2);
      return a = a.slice(0, -2), {
        data: a,
        text: this.text
      };
    }
  }, {
    key: "valid",
    value: function() {
      return this.number >= 3 && this.number <= 131070;
    }
  }]), e;
}(ki.default);
Q.pharmacode = Li;
var W = {};
Object.defineProperty(W, "__esModule", {
  value: !0
});
W.codabar = void 0;
var Ni = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), Ci = l, Gi = Hi(Ci);
function Hi(t) {
  return t && t.__esModule ? t : { default: t };
}
function Fi(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Xi(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function zi(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Ui = function(t) {
  zi(e, t);
  function e(r, n) {
    Fi(this, e), r.search(/^[0-9\-\$\:\.\+\/]+$/) === 0 && (r = "A" + r + "A");
    var a = Xi(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r.toUpperCase(), n));
    return a.text = a.options.text || a.text.replace(/[A-D]/g, ""), a;
  }
  return Ni(e, [{
    key: "valid",
    value: function() {
      return this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/) !== -1;
    }
  }, {
    key: "encode",
    value: function() {
      for (var n = [], a = this.getEncodings(), i = 0; i < this.data.length; i++)
        n.push(a[this.data.charAt(i)]), i !== this.data.length - 1 && n.push("0");
      return {
        text: this.text,
        data: n.join("")
      };
    }
  }, {
    key: "getEncodings",
    value: function() {
      return {
        0: "101010011",
        1: "101011001",
        2: "101001011",
        3: "110010101",
        4: "101101001",
        5: "110101001",
        6: "100101011",
        7: "100101101",
        8: "100110101",
        9: "110100101",
        "-": "101001101",
        $: "101100101",
        ":": "1101011011",
        "/": "1101101011",
        ".": "1101101101",
        "+": "1011011011",
        A: "1011001001",
        B: "1001001011",
        C: "1010010011",
        D: "1010011001"
      };
    }
  }]), e;
}(Gi.default);
W.codabar = Ui;
var Y = {};
Object.defineProperty(Y, "__esModule", {
  value: !0
});
Y.GenericBarcode = void 0;
var qi = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), Vi = l, Ji = Qi(Vi);
function Qi(t) {
  return t && t.__esModule ? t : { default: t };
}
function Wi(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Yi(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Zi(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Ki = function(t) {
  Zi(e, t);
  function e(r, n) {
    return Wi(this, e), Yi(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r, n));
  }
  return qi(e, [{
    key: "encode",
    value: function() {
      return {
        data: "10101010101010101010101010101010101010101",
        text: this.text
      };
    }
  }, {
    key: "valid",
    value: function() {
      return !0;
    }
  }]), e;
}(Ji.default);
Y.GenericBarcode = Ki;
Object.defineProperty(le, "__esModule", {
  value: !0
});
var eo = U, X = s, R = c, Ze = A, j = _, to = Q, no = W, ro = Y;
le.default = {
  CODE39: eo.CODE39,
  CODE128: X.CODE128,
  CODE128A: X.CODE128A,
  CODE128B: X.CODE128B,
  CODE128C: X.CODE128C,
  EAN13: R.EAN13,
  EAN8: R.EAN8,
  EAN5: R.EAN5,
  EAN2: R.EAN2,
  UPC: R.UPC,
  UPCE: R.UPCE,
  ITF14: Ze.ITF14,
  ITF: Ze.ITF,
  MSI: j.MSI,
  MSI10: j.MSI10,
  MSI11: j.MSI11,
  MSI1010: j.MSI1010,
  MSI1110: j.MSI1110,
  pharmacode: to.pharmacode,
  codabar: no.codabar,
  GenericBarcode: ro.GenericBarcode
};
var M = {};
Object.defineProperty(M, "__esModule", {
  value: !0
});
var ao = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }
  return t;
};
M.default = function(t, e) {
  return ao({}, t, e);
};
var Re = {};
Object.defineProperty(Re, "__esModule", {
  value: !0
});
Re.default = io;
function io(t) {
  var e = [];
  function r(n) {
    if (Array.isArray(n))
      for (var a = 0; a < n.length; a++)
        r(n[a]);
    else
      n.text = n.text || "", n.data = n.data || "", e.push(n);
  }
  return r(t), e;
}
var Ae = {};
Object.defineProperty(Ae, "__esModule", {
  value: !0
});
Ae.default = oo;
function oo(t) {
  return t.marginTop = t.marginTop || t.margin, t.marginBottom = t.marginBottom || t.margin, t.marginRight = t.marginRight || t.margin, t.marginLeft = t.marginLeft || t.margin, t;
}
var Pe = {}, Te = {}, Z = {};
Object.defineProperty(Z, "__esModule", {
  value: !0
});
Z.default = uo;
function uo(t) {
  var e = ["width", "height", "textMargin", "fontSize", "margin", "marginTop", "marginBottom", "marginLeft", "marginRight"];
  for (var r in e)
    e.hasOwnProperty(r) && (r = e[r], typeof t[r] == "string" && (t[r] = parseInt(t[r], 10)));
  return typeof t.displayValue == "string" && (t.displayValue = t.displayValue != "false"), t;
}
var K = {};
Object.defineProperty(K, "__esModule", {
  value: !0
});
var fo = {
  width: 2,
  height: 100,
  format: "auto",
  displayValue: !0,
  fontOptions: "",
  font: "monospace",
  text: void 0,
  textAlign: "center",
  textPosition: "bottom",
  textMargin: 2,
  fontSize: 20,
  background: "#ffffff",
  lineColor: "#000000",
  margin: 10,
  marginTop: void 0,
  marginBottom: void 0,
  marginLeft: void 0,
  marginRight: void 0,
  valid: function() {
  }
};
K.default = fo;
Object.defineProperty(Te, "__esModule", {
  value: !0
});
var co = Z, lo = gt(co), ho = K, Ke = gt(ho);
function gt(t) {
  return t && t.__esModule ? t : { default: t };
}
function _o(t) {
  var e = {};
  for (var r in Ke.default)
    Ke.default.hasOwnProperty(r) && (t.hasAttribute("jsbarcode-" + r.toLowerCase()) && (e[r] = t.getAttribute("jsbarcode-" + r.toLowerCase())), t.hasAttribute("data-" + r.toLowerCase()) && (e[r] = t.getAttribute("data-" + r.toLowerCase())));
  return e.value = t.getAttribute("jsbarcode-value") || t.getAttribute("data-value"), e = (0, lo.default)(e), e;
}
Te.default = _o;
var Me = {}, ke = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.getTotalWidthOfEncodings = d.calculateEncodingAttributes = d.getBarcodePadding = d.getEncodingHeight = d.getMaximumHeightOfEncodings = void 0;
var vo = M, so = yo(vo);
function yo(t) {
  return t && t.__esModule ? t : { default: t };
}
function Ot(t, e) {
  return e.height + (e.displayValue && t.text.length > 0 ? e.fontSize + e.textMargin : 0) + e.marginTop + e.marginBottom;
}
function Et(t, e, r) {
  if (r.displayValue && e < t) {
    if (r.textAlign == "center")
      return Math.floor((t - e) / 2);
    if (r.textAlign == "left")
      return 0;
    if (r.textAlign == "right")
      return Math.floor(t - e);
  }
  return 0;
}
function po(t, e, r) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n], i = (0, so.default)(e, a.options), o;
    i.displayValue ? o = Eo(a.text, i, r) : o = 0;
    var u = a.data.length * i.width;
    a.width = Math.ceil(Math.max(o, u)), a.height = Ot(a, i), a.barcodePadding = Et(o, u, i);
  }
}
function go(t) {
  for (var e = 0, r = 0; r < t.length; r++)
    e += t[r].width;
  return e;
}
function Oo(t) {
  for (var e = 0, r = 0; r < t.length; r++)
    t[r].height > e && (e = t[r].height);
  return e;
}
function Eo(t, e, r) {
  var n;
  if (r)
    n = r;
  else if (typeof document < "u")
    n = document.createElement("canvas").getContext("2d");
  else
    return 0;
  n.font = e.fontOptions + " " + e.fontSize + "px " + e.font;
  var a = n.measureText(t);
  if (!a)
    return 0;
  var i = a.width;
  return i;
}
d.getMaximumHeightOfEncodings = Oo;
d.getEncodingHeight = Ot;
d.getBarcodePadding = Et;
d.calculateEncodingAttributes = po;
d.getTotalWidthOfEncodings = go;
Object.defineProperty(ke, "__esModule", {
  value: !0
});
var bo = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), mo = M, wo = $o(mo), ie = d;
function $o(t) {
  return t && t.__esModule ? t : { default: t };
}
function So(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
var xo = function() {
  function t(e, r, n) {
    So(this, t), this.canvas = e, this.encodings = r, this.options = n;
  }
  return bo(t, [{
    key: "render",
    value: function() {
      if (!this.canvas.getContext)
        throw new Error("The browser does not support canvas.");
      this.prepareCanvas();
      for (var r = 0; r < this.encodings.length; r++) {
        var n = (0, wo.default)(this.options, this.encodings[r].options);
        this.drawCanvasBarcode(n, this.encodings[r]), this.drawCanvasText(n, this.encodings[r]), this.moveCanvasDrawing(this.encodings[r]);
      }
      this.restoreCanvas();
    }
  }, {
    key: "prepareCanvas",
    value: function() {
      var r = this.canvas.getContext("2d");
      r.save(), (0, ie.calculateEncodingAttributes)(this.encodings, this.options, r);
      var n = (0, ie.getTotalWidthOfEncodings)(this.encodings), a = (0, ie.getMaximumHeightOfEncodings)(this.encodings);
      this.canvas.width = n + this.options.marginLeft + this.options.marginRight, this.canvas.height = a, r.clearRect(0, 0, this.canvas.width, this.canvas.height), this.options.background && (r.fillStyle = this.options.background, r.fillRect(0, 0, this.canvas.width, this.canvas.height)), r.translate(this.options.marginLeft, 0);
    }
  }, {
    key: "drawCanvasBarcode",
    value: function(r, n) {
      var a = this.canvas.getContext("2d"), i = n.data, o;
      r.textPosition == "top" ? o = r.marginTop + r.fontSize + r.textMargin : o = r.marginTop, a.fillStyle = r.lineColor;
      for (var u = 0; u < i.length; u++) {
        var y = u * r.width + n.barcodePadding;
        i[u] === "1" ? a.fillRect(y, o, r.width, r.height) : i[u] && a.fillRect(y, o, r.width, r.height * i[u]);
      }
    }
  }, {
    key: "drawCanvasText",
    value: function(r, n) {
      var a = this.canvas.getContext("2d"), i = r.fontOptions + " " + r.fontSize + "px " + r.font;
      if (r.displayValue) {
        var o, u;
        r.textPosition == "top" ? u = r.marginTop + r.fontSize - r.textMargin : u = r.height + r.textMargin + r.marginTop + r.fontSize, a.font = i, r.textAlign == "left" || n.barcodePadding > 0 ? (o = 0, a.textAlign = "left") : r.textAlign == "right" ? (o = n.width - 1, a.textAlign = "right") : (o = n.width / 2, a.textAlign = "center"), a.fillText(n.text, o, u);
      }
    }
  }, {
    key: "moveCanvasDrawing",
    value: function(r) {
      var n = this.canvas.getContext("2d");
      n.translate(r.width, 0);
    }
  }, {
    key: "restoreCanvas",
    value: function() {
      var r = this.canvas.getContext("2d");
      r.restore();
    }
  }]), t;
}();
ke.default = xo;
var Ie = {};
Object.defineProperty(Ie, "__esModule", {
  value: !0
});
var Ro = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), Ao = M, Po = To(Ao), oe = d;
function To(t) {
  return t && t.__esModule ? t : { default: t };
}
function Mo(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
var z = "http://www.w3.org/2000/svg", ko = function() {
  function t(e, r, n) {
    Mo(this, t), this.svg = e, this.encodings = r, this.options = n, this.document = n.xmlDocument || document;
  }
  return Ro(t, [{
    key: "render",
    value: function() {
      var r = this.options.marginLeft;
      this.prepareSVG();
      for (var n = 0; n < this.encodings.length; n++) {
        var a = this.encodings[n], i = (0, Po.default)(this.options, a.options), o = this.createGroup(r, i.marginTop, this.svg);
        this.setGroupOptions(o, i), this.drawSvgBarcode(o, i, a), this.drawSVGText(o, i, a), r += a.width;
      }
    }
  }, {
    key: "prepareSVG",
    value: function() {
      for (; this.svg.firstChild; )
        this.svg.removeChild(this.svg.firstChild);
      (0, oe.calculateEncodingAttributes)(this.encodings, this.options);
      var r = (0, oe.getTotalWidthOfEncodings)(this.encodings), n = (0, oe.getMaximumHeightOfEncodings)(this.encodings), a = r + this.options.marginLeft + this.options.marginRight;
      this.setSvgAttributes(a, n), this.options.background && this.drawRect(0, 0, a, n, this.svg).setAttribute("style", "fill:" + this.options.background + ";");
    }
  }, {
    key: "drawSvgBarcode",
    value: function(r, n, a) {
      var i = a.data, o;
      n.textPosition == "top" ? o = n.fontSize + n.textMargin : o = 0;
      for (var u = 0, y = 0, $ = 0; $ < i.length; $++)
        y = $ * n.width + a.barcodePadding, i[$] === "1" ? u++ : u > 0 && (this.drawRect(y - n.width * u, o, n.width * u, n.height, r), u = 0);
      u > 0 && this.drawRect(y - n.width * (u - 1), o, n.width * u, n.height, r);
    }
  }, {
    key: "drawSVGText",
    value: function(r, n, a) {
      var i = this.document.createElementNS(z, "text");
      if (n.displayValue) {
        var o, u;
        i.setAttribute("style", "font:" + n.fontOptions + " " + n.fontSize + "px " + n.font), n.textPosition == "top" ? u = n.fontSize - n.textMargin : u = n.height + n.textMargin + n.fontSize, n.textAlign == "left" || a.barcodePadding > 0 ? (o = 0, i.setAttribute("text-anchor", "start")) : n.textAlign == "right" ? (o = a.width - 1, i.setAttribute("text-anchor", "end")) : (o = a.width / 2, i.setAttribute("text-anchor", "middle")), i.setAttribute("x", o), i.setAttribute("y", u), i.appendChild(this.document.createTextNode(a.text)), r.appendChild(i);
      }
    }
  }, {
    key: "setSvgAttributes",
    value: function(r, n) {
      var a = this.svg;
      a.setAttribute("width", r + "px"), a.setAttribute("height", n + "px"), a.setAttribute("x", "0px"), a.setAttribute("y", "0px"), a.setAttribute("viewBox", "0 0 " + r + " " + n), a.setAttribute("xmlns", z), a.setAttribute("version", "1.1"), a.setAttribute("style", "transform: translate(0,0)");
    }
  }, {
    key: "createGroup",
    value: function(r, n, a) {
      var i = this.document.createElementNS(z, "g");
      return i.setAttribute("transform", "translate(" + r + ", " + n + ")"), a.appendChild(i), i;
    }
  }, {
    key: "setGroupOptions",
    value: function(r, n) {
      r.setAttribute("style", "fill:" + n.lineColor + ";");
    }
  }, {
    key: "drawRect",
    value: function(r, n, a, i, o) {
      var u = this.document.createElementNS(z, "rect");
      return u.setAttribute("x", r), u.setAttribute("y", n), u.setAttribute("width", a), u.setAttribute("height", i), o.appendChild(u), u;
    }
  }]), t;
}();
Ie.default = ko;
var De = {};
Object.defineProperty(De, "__esModule", {
  value: !0
});
var Io = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}();
function Do(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
var jo = function() {
  function t(e, r, n) {
    Do(this, t), this.object = e, this.encodings = r, this.options = n;
  }
  return Io(t, [{
    key: "render",
    value: function() {
      this.object.encodings = this.encodings;
    }
  }]), t;
}();
De.default = jo;
Object.defineProperty(Me, "__esModule", {
  value: !0
});
var Bo = ke, Lo = je(Bo), No = Ie, Co = je(No), Go = De, Ho = je(Go);
function je(t) {
  return t && t.__esModule ? t : { default: t };
}
Me.default = { CanvasRenderer: Lo.default, SVGRenderer: Co.default, ObjectRenderer: Ho.default };
var k = {};
Object.defineProperty(k, "__esModule", {
  value: !0
});
function Be(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Le(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Ne(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Fo = function(t) {
  Ne(e, t);
  function e(r, n) {
    Be(this, e);
    var a = Le(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
    return a.name = "InvalidInputException", a.symbology = r, a.input = n, a.message = '"' + a.input + '" is not a valid input for ' + a.symbology, a;
  }
  return e;
}(Error), Xo = function(t) {
  Ne(e, t);
  function e() {
    Be(this, e);
    var r = Le(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
    return r.name = "InvalidElementException", r.message = "Not supported type to render on", r;
  }
  return e;
}(Error), zo = function(t) {
  Ne(e, t);
  function e() {
    Be(this, e);
    var r = Le(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
    return r.name = "NoElementException", r.message = "No element to render on.", r;
  }
  return e;
}(Error);
k.InvalidInputException = Fo;
k.InvalidElementException = Xo;
k.NoElementException = zo;
Object.defineProperty(Pe, "__esModule", {
  value: !0
});
var Uo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
  return typeof t;
} : function(t) {
  return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, qo = Te, fe = bt(qo), Vo = Me, B = bt(Vo), Jo = k;
function bt(t) {
  return t && t.__esModule ? t : { default: t };
}
function Ce(t) {
  if (typeof t == "string")
    return Qo(t);
  if (Array.isArray(t)) {
    for (var e = [], r = 0; r < t.length; r++)
      e.push(Ce(t[r]));
    return e;
  } else {
    if (typeof HTMLCanvasElement < "u" && t instanceof HTMLImageElement)
      return Wo(t);
    if (t && t.nodeName && t.nodeName.toLowerCase() === "svg" || typeof SVGElement < "u" && t instanceof SVGElement)
      return {
        element: t,
        options: (0, fe.default)(t),
        renderer: B.default.SVGRenderer
      };
    if (typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement)
      return {
        element: t,
        options: (0, fe.default)(t),
        renderer: B.default.CanvasRenderer
      };
    if (t && t.getContext)
      return {
        element: t,
        renderer: B.default.CanvasRenderer
      };
    if (t && (typeof t > "u" ? "undefined" : Uo(t)) === "object" && !t.nodeName)
      return {
        element: t,
        renderer: B.default.ObjectRenderer
      };
    throw new Jo.InvalidElementException();
  }
}
function Qo(t) {
  var e = document.querySelectorAll(t);
  if (e.length !== 0) {
    for (var r = [], n = 0; n < e.length; n++)
      r.push(Ce(e[n]));
    return r;
  }
}
function Wo(t) {
  var e = document.createElement("canvas");
  return {
    element: e,
    options: (0, fe.default)(t),
    renderer: B.default.CanvasRenderer,
    afterRender: function() {
      t.setAttribute("src", e.toDataURL());
    }
  };
}
Pe.default = Ce;
var Ge = {};
Object.defineProperty(Ge, "__esModule", {
  value: !0
});
var Yo = function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}();
function Zo(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
var Ko = function() {
  function t(e) {
    Zo(this, t), this.api = e;
  }
  return Yo(t, [{
    key: "handleCatch",
    value: function(r) {
      if (r.name === "InvalidInputException")
        if (this.api._options.valid !== this.api._defaults.valid)
          this.api._options.valid(!1);
        else
          throw r.message;
      else
        throw r;
      this.api.render = function() {
      };
    }
  }, {
    key: "wrapBarcodeCall",
    value: function(r) {
      try {
        var n = r.apply(void 0, arguments);
        return this.api._options.valid(!0), n;
      } catch (a) {
        return this.handleCatch(a), this.api;
      }
    }
  }]), t;
}();
Ge.default = Ko;
var eu = le, E = O(eu), tu = M, G = O(tu), nu = Re, mt = O(nu), ru = Ae, et = O(ru), au = Pe, iu = O(au), ou = Z, uu = O(ou), fu = Ge, cu = O(fu), wt = k, lu = K, $t = O(lu);
function O(t) {
  return t && t.__esModule ? t : { default: t };
}
var p = function() {
}, ee = function(e, r, n) {
  var a = new p();
  if (typeof e > "u")
    throw Error("No element to render on was provided.");
  return a._renderProperties = (0, iu.default)(e), a._encodings = [], a._options = $t.default, a._errorHandler = new cu.default(a), typeof r < "u" && (n = n || {}, n.format || (n.format = xt()), a.options(n)[n.format](r, n).render()), a;
};
ee.getModule = function(t) {
  return E.default[t];
};
for (var tt in E.default)
  E.default.hasOwnProperty(tt) && hu(E.default, tt);
function hu(t, e) {
  p.prototype[e] = p.prototype[e.toUpperCase()] = p.prototype[e.toLowerCase()] = function(r, n) {
    var a = this;
    return a._errorHandler.wrapBarcodeCall(function() {
      n.text = typeof n.text > "u" ? void 0 : "" + n.text;
      var i = (0, G.default)(a._options, n);
      i = (0, uu.default)(i);
      var o = t[e], u = St(r, o, i);
      return a._encodings.push(u), a;
    });
  };
}
function St(t, e, r) {
  t = "" + t;
  var n = new e(t, r);
  if (!n.valid())
    throw new wt.InvalidInputException(n.constructor.name, t);
  var a = n.encode();
  a = (0, mt.default)(a);
  for (var i = 0; i < a.length; i++)
    a[i].options = (0, G.default)(r, a[i].options);
  return a;
}
function xt() {
  return E.default.CODE128 ? "CODE128" : Object.keys(E.default)[0];
}
p.prototype.options = function(t) {
  return this._options = (0, G.default)(this._options, t), this;
};
p.prototype.blank = function(t) {
  var e = new Array(t + 1).join("0");
  return this._encodings.push({ data: e }), this;
};
p.prototype.init = function() {
  if (!!this._renderProperties) {
    Array.isArray(this._renderProperties) || (this._renderProperties = [this._renderProperties]);
    var t;
    for (var e in this._renderProperties) {
      t = this._renderProperties[e];
      var r = (0, G.default)(this._options, t.options);
      r.format == "auto" && (r.format = xt()), this._errorHandler.wrapBarcodeCall(function() {
        var n = r.value, a = E.default[r.format.toUpperCase()], i = St(n, a, r);
        ce(t, i, r);
      });
    }
  }
};
p.prototype.render = function() {
  if (!this._renderProperties)
    throw new wt.NoElementException();
  if (Array.isArray(this._renderProperties))
    for (var t = 0; t < this._renderProperties.length; t++)
      ce(this._renderProperties[t], this._encodings, this._options);
  else
    ce(this._renderProperties, this._encodings, this._options);
  return this;
};
p.prototype._defaults = $t.default;
function ce(t, e, r) {
  e = (0, mt.default)(e);
  for (var n = 0; n < e.length; n++)
    e[n].options = (0, G.default)(r, e[n].options), (0, et.default)(e[n].options);
  (0, et.default)(r);
  var a = t.renderer, i = new a(t.element, e, r);
  i.render(), t.afterRender && t.afterRender();
}
typeof window < "u" && (window.JsBarcode = ee);
typeof jQuery < "u" && (jQuery.fn.JsBarcode = function(t, e) {
  var r = [];
  return jQuery(this).each(function() {
    r.push(this);
  }), ee(r, t, e);
});
var du = ee, _u = function(t) {
  At(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    return n.dom = He.createRef(), n;
  }
  return e.prototype.componentDidUpdate = function(r) {
    (this.props.value !== r.value || JSON.stringify(this.props.options) !== JSON.stringify(r.options)) && this.renderBarCode();
  }, e.prototype.renderBarCode = function() {
    this.dom.current && du(this.dom.current, this.props.value, this.props.options);
  }, e.prototype.componentDidMount = function() {
    this.renderBarCode();
  }, e.prototype.render = function() {
    return /* @__PURE__ */ Pt("img", {
      ref: this.dom
    });
  }, e;
}(He.Component), pu = Tt(_u);
export {
  _u as BarCode,
  pu as default
};
