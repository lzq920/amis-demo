import { d as Yn, e as Zn, f as Jn, h as Qn, i as ea, k as ta, l as ra, m as na, n as aa, j as p, o as O, p as y, _ as ia, q as oa, I as fr, O as la, P as sa, r as et, s as ha, t as ua, u as pa, v as yt, w as fa, x as ca, y as da } from "./index.7add3ddd.js";
import D, { isValidElement as ga, PureComponent as ze, Component as Ue } from "react";
import { findDOMNode as cr } from "react-dom";
var W = {}, We = {}, ba = Yn, va = Zn;
function xa(t, e) {
  return t && ba(t, va(e));
}
var Bt = xa, ya = Qn, wa = Jn, ma = ea, Ca = ta;
function Sa(t, e) {
  var n = Ca(t) ? ya : ma;
  return n(t, wa(e));
}
var _a = Sa;
Object.defineProperty(We, "__esModule", {
  value: !0
});
We.flattenNames = void 0;
var Oa = ra, Ra = pt(Oa), Aa = Bt, Ta = pt(Aa), Pa = na, $a = pt(Pa), Ea = _a, ka = pt(Ea);
function pt(t) {
  return t && t.__esModule ? t : { default: t };
}
var Fa = We.flattenNames = function t() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = [];
  return (0, ka.default)(e, function(r) {
    Array.isArray(r) ? t(r).map(function(a) {
      return n.push(a);
    }) : (0, $a.default)(r) ? (0, Ta.default)(r, function(a, i) {
      a === !0 && n.push(i), n.push(i + "-" + a);
    }) : (0, Ra.default)(r) && n.push(r);
  }), n;
};
We.default = Fa;
var Ve = {};
Object.defineProperty(Ve, "__esModule", {
  value: !0
});
Ve.mergeClasses = void 0;
var Ba = Bt, Ma = on(Ba), Ha = aa, Na = on(Ha), Da = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }
  return t;
};
function on(t) {
  return t && t.__esModule ? t : { default: t };
}
var La = Ve.mergeClasses = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = e.default && (0, Na.default)(e.default) || {};
  return n.map(function(a) {
    var i = e[a];
    return i && (0, Ma.default)(i, function(o, l) {
      r[l] || (r[l] = {}), r[l] = Da({}, r[l], i[l]);
    }), a;
  }), r;
};
Ve.default = La;
var Xe = {};
Object.defineProperty(Xe, "__esModule", {
  value: !0
});
Xe.autoprefix = void 0;
var ja = Bt, dr = Ga(ja), Ia = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }
  return t;
};
function Ga(t) {
  return t && t.__esModule ? t : { default: t };
}
var za = {
  borderRadius: function(e) {
    return {
      msBorderRadius: e,
      MozBorderRadius: e,
      OBorderRadius: e,
      WebkitBorderRadius: e,
      borderRadius: e
    };
  },
  boxShadow: function(e) {
    return {
      msBoxShadow: e,
      MozBoxShadow: e,
      OBoxShadow: e,
      WebkitBoxShadow: e,
      boxShadow: e
    };
  },
  userSelect: function(e) {
    return {
      WebkitTouchCallout: e,
      KhtmlUserSelect: e,
      MozUserSelect: e,
      msUserSelect: e,
      WebkitUserSelect: e,
      userSelect: e
    };
  },
  flex: function(e) {
    return {
      WebkitBoxFlex: e,
      MozBoxFlex: e,
      WebkitFlex: e,
      msFlex: e,
      flex: e
    };
  },
  flexBasis: function(e) {
    return {
      WebkitFlexBasis: e,
      flexBasis: e
    };
  },
  justifyContent: function(e) {
    return {
      WebkitJustifyContent: e,
      justifyContent: e
    };
  },
  transition: function(e) {
    return {
      msTransition: e,
      MozTransition: e,
      OTransition: e,
      WebkitTransition: e,
      transition: e
    };
  },
  transform: function(e) {
    return {
      msTransform: e,
      MozTransform: e,
      OTransform: e,
      WebkitTransform: e,
      transform: e
    };
  },
  absolute: function(e) {
    var n = e && e.split(" ");
    return {
      position: "absolute",
      top: n && n[0],
      right: n && n[1],
      bottom: n && n[2],
      left: n && n[3]
    };
  },
  extend: function(e, n) {
    var r = n[e];
    return r || {
      extend: e
    };
  }
}, Ua = Xe.autoprefix = function(e) {
  var n = {};
  return (0, dr.default)(e, function(r, a) {
    var i = {};
    (0, dr.default)(r, function(o, l) {
      var f = za[l];
      f ? i = Ia({}, i, f(o)) : i[l] = o;
    }), n[a] = i;
  }), n;
};
Xe.default = Ua;
var Ke = {};
Object.defineProperty(Ke, "__esModule", {
  value: !0
});
Ke.hover = void 0;
var Wa = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }
  return t;
}, Va = D, wt = Xa(Va);
function Xa(t) {
  return t && t.__esModule ? t : { default: t };
}
function Ka(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function gr(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function qa(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Ya = Ke.hover = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "span";
  return function(r) {
    qa(a, r);
    function a() {
      var i, o, l, f;
      Ka(this, a);
      for (var h = arguments.length, d = Array(h), g = 0; g < h; g++)
        d[g] = arguments[g];
      return f = (o = (l = gr(this, (i = a.__proto__ || Object.getPrototypeOf(a)).call.apply(i, [this].concat(d))), l), l.state = { hover: !1 }, l.handleMouseOver = function() {
        return l.setState({ hover: !0 });
      }, l.handleMouseOut = function() {
        return l.setState({ hover: !1 });
      }, l.render = function() {
        return wt.default.createElement(
          n,
          { onMouseOver: l.handleMouseOver, onMouseOut: l.handleMouseOut },
          wt.default.createElement(e, Wa({}, l.props, l.state))
        );
      }, o), gr(l, f);
    }
    return a;
  }(wt.default.Component);
};
Ke.default = Ya;
var qe = {};
Object.defineProperty(qe, "__esModule", {
  value: !0
});
qe.active = void 0;
var Za = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }
  return t;
}, Ja = D, mt = Qa(Ja);
function Qa(t) {
  return t && t.__esModule ? t : { default: t };
}
function ei(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function br(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function ti(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var ri = qe.active = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "span";
  return function(r) {
    ti(a, r);
    function a() {
      var i, o, l, f;
      ei(this, a);
      for (var h = arguments.length, d = Array(h), g = 0; g < h; g++)
        d[g] = arguments[g];
      return f = (o = (l = br(this, (i = a.__proto__ || Object.getPrototypeOf(a)).call.apply(i, [this].concat(d))), l), l.state = { active: !1 }, l.handleMouseDown = function() {
        return l.setState({ active: !0 });
      }, l.handleMouseUp = function() {
        return l.setState({ active: !1 });
      }, l.render = function() {
        return mt.default.createElement(
          n,
          { onMouseDown: l.handleMouseDown, onMouseUp: l.handleMouseUp },
          mt.default.createElement(e, Za({}, l.props, l.state))
        );
      }, o), br(l, f);
    }
    return a;
  }(mt.default.Component);
};
qe.default = ri;
var Mt = {};
Object.defineProperty(Mt, "__esModule", {
  value: !0
});
var ni = function(e, n) {
  var r = {}, a = function(o) {
    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    r[o] = l;
  };
  return e === 0 && a("first-child"), e === n - 1 && a("last-child"), (e === 0 || e % 2 === 0) && a("even"), Math.abs(e % 2) === 1 && a("odd"), a("nth-child", e), r;
};
Mt.default = ni;
Object.defineProperty(W, "__esModule", {
  value: !0
});
W.ReactCSS = W.loop = W.handleActive = Ht = W.handleHover = W.hover = void 0;
var ai = We, ii = $e(ai), oi = Ve, li = $e(oi), si = Xe, hi = $e(si), ui = Ke, ln = $e(ui), pi = qe, fi = $e(pi), ci = Mt, di = $e(ci);
function $e(t) {
  return t && t.__esModule ? t : { default: t };
}
W.hover = ln.default;
var Ht = W.handleHover = ln.default;
W.handleActive = fi.default;
W.loop = di.default;
var gi = W.ReactCSS = function(e) {
  for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  var i = (0, ii.default)(r), o = (0, li.default)(e, i);
  return (0, hi.default)(o);
}, R = W.default = gi, bi = function(e, n, r, a, i) {
  var o = i.clientWidth, l = i.clientHeight, f = typeof e.pageX == "number" ? e.pageX : e.touches[0].pageX, h = typeof e.pageY == "number" ? e.pageY : e.touches[0].pageY, d = f - (i.getBoundingClientRect().left + window.pageXOffset), g = h - (i.getBoundingClientRect().top + window.pageYOffset);
  if (r === "vertical") {
    var b = void 0;
    if (g < 0 ? b = 0 : g > l ? b = 1 : b = Math.round(g * 100 / l) / 100, n.a !== b)
      return {
        h: n.h,
        s: n.s,
        l: n.l,
        a: b,
        source: "rgb"
      };
  } else {
    var v = void 0;
    if (d < 0 ? v = 0 : d > o ? v = 1 : v = Math.round(d * 100 / o) / 100, a !== v)
      return {
        h: n.h,
        s: n.s,
        l: n.l,
        a: v,
        source: "rgb"
      };
  }
  return null;
}, Ct = {}, vi = function(e, n, r, a) {
  if (typeof document > "u" && !a)
    return null;
  var i = a ? new a() : document.createElement("canvas");
  i.width = r * 2, i.height = r * 2;
  var o = i.getContext("2d");
  return o ? (o.fillStyle = e, o.fillRect(0, 0, i.width, i.height), o.fillStyle = n, o.fillRect(0, 0, r, r), o.translate(r, r), o.fillRect(0, 0, r, r), i.toDataURL()) : null;
}, xi = function(e, n, r, a) {
  var i = e + "-" + n + "-" + r + (a ? "-server" : "");
  if (Ct[i])
    return Ct[i];
  var o = vi(e, n, r, a);
  return Ct[i] = o, o;
}, vr = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }
  return t;
}, Ee = function(e) {
  var n = e.white, r = e.grey, a = e.size, i = e.renderers, o = e.borderRadius, l = e.boxShadow, f = e.children, h = R({
    default: {
      grid: {
        borderRadius: o,
        boxShadow: l,
        absolute: "0px 0px 0px 0px",
        background: "url(" + xi(n, r, a, i.canvas) + ") center left"
      }
    }
  });
  return ga(f) ? D.cloneElement(f, vr({}, f.props, {
    style: vr({}, f.props.style, h.grid)
  })) : /* @__PURE__ */ p("div", {
    style: h.grid
  });
};
Ee.defaultProps = {
  size: 8,
  white: "transparent",
  grey: "rgba(0,0,0,.08)",
  renderers: {}
};
var yi = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }
  return t;
}, wi = function() {
  function t(e, n) {
    for (var r = 0; r < n.length; r++) {
      var a = n[r];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e;
  };
}();
function mi(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function xr(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Ci(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Nt = function(t) {
  Ci(e, t);
  function e() {
    var n, r, a, i;
    mi(this, e);
    for (var o = arguments.length, l = Array(o), f = 0; f < o; f++)
      l[f] = arguments[f];
    return i = (r = (a = xr(this, (n = e.__proto__ || Object.getPrototypeOf(e)).call.apply(n, [this].concat(l))), a), a.handleChange = function(h) {
      var d = bi(h, a.props.hsl, a.props.direction, a.props.a, a.container);
      d && typeof a.props.onChange == "function" && a.props.onChange(d, h);
    }, a.handleMouseDown = function(h) {
      a.handleChange(h), window.addEventListener("mousemove", a.handleChange), window.addEventListener("mouseup", a.handleMouseUp);
    }, a.handleMouseUp = function() {
      a.unbindEventListeners();
    }, a.unbindEventListeners = function() {
      window.removeEventListener("mousemove", a.handleChange), window.removeEventListener("mouseup", a.handleMouseUp);
    }, r), xr(a, i);
  }
  return wi(e, [{
    key: "componentWillUnmount",
    value: function() {
      this.unbindEventListeners();
    }
  }, {
    key: "render",
    value: function() {
      var r = this, a = this.props.rgb, i = R({
        default: {
          alpha: {
            absolute: "0px 0px 0px 0px",
            borderRadius: this.props.radius
          },
          checkboard: {
            absolute: "0px 0px 0px 0px",
            overflow: "hidden",
            borderRadius: this.props.radius
          },
          gradient: {
            absolute: "0px 0px 0px 0px",
            background: "linear-gradient(to right, rgba(" + a.r + "," + a.g + "," + a.b + `, 0) 0%,
           rgba(` + a.r + "," + a.g + "," + a.b + ", 1) 100%)",
            boxShadow: this.props.shadow,
            borderRadius: this.props.radius
          },
          container: {
            position: "relative",
            height: "100%",
            margin: "0 3px"
          },
          pointer: {
            position: "absolute",
            left: a.a * 100 + "%"
          },
          slider: {
            width: "4px",
            borderRadius: "1px",
            height: "8px",
            boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
            background: "#fff",
            marginTop: "1px",
            transform: "translateX(-2px)"
          }
        },
        vertical: {
          gradient: {
            background: "linear-gradient(to bottom, rgba(" + a.r + "," + a.g + "," + a.b + `, 0) 0%,
           rgba(` + a.r + "," + a.g + "," + a.b + ", 1) 100%)"
          },
          pointer: {
            left: 0,
            top: a.a * 100 + "%"
          }
        },
        overwrite: yi({}, this.props.style)
      }, {
        vertical: this.props.direction === "vertical",
        overwrite: !0
      });
      return /* @__PURE__ */ O("div", {
        style: i.alpha,
        children: [/* @__PURE__ */ p("div", {
          style: i.checkboard,
          children: /* @__PURE__ */ p(Ee, {
            renderers: this.props.renderers
          })
        }), /* @__PURE__ */ p("div", {
          style: i.gradient
        }), /* @__PURE__ */ p("div", {
          style: i.container,
          ref: function(l) {
            return r.container = l;
          },
          onMouseDown: this.handleMouseDown,
          onTouchMove: this.handleChange,
          onTouchStart: this.handleChange,
          children: /* @__PURE__ */ p("div", {
            style: i.pointer,
            children: this.props.pointer ? D.createElement(this.props.pointer, this.props) : /* @__PURE__ */ p("div", {
              style: i.slider
            })
          })
        })]
      });
    }
  }]), e;
}(ze || Ue), Si = function() {
  function t(e, n) {
    for (var r = 0; r < n.length; r++) {
      var a = n[r];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e;
  };
}();
function _i(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function Oi(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ri(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Ai(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Ti = 1, sn = 38, Pi = 40, $i = [sn, Pi], Ei = function(e) {
  return $i.indexOf(e) > -1;
}, ki = function(e) {
  return Number(String(e).replace(/%/g, ""));
}, Fi = 1, T = function(t) {
  Ai(e, t);
  function e(n) {
    Oi(this, e);
    var r = Ri(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
    return r.handleBlur = function() {
      r.state.blurValue && r.setState({
        value: r.state.blurValue,
        blurValue: null
      });
    }, r.handleChange = function(a) {
      r.setUpdatedValue(a.target.value, a);
    }, r.handleKeyDown = function(a) {
      var i = ki(a.target.value);
      if (!isNaN(i) && Ei(a.keyCode)) {
        var o = r.getArrowOffset(), l = a.keyCode === sn ? i + o : i - o;
        r.setUpdatedValue(l, a);
      }
    }, r.handleDrag = function(a) {
      if (r.props.dragLabel) {
        var i = Math.round(r.props.value + a.movementX);
        i >= 0 && i <= r.props.dragMax && r.props.onChange && r.props.onChange(r.getValueObjectWithLabel(i), a);
      }
    }, r.handleMouseDown = function(a) {
      r.props.dragLabel && (a.preventDefault(), r.handleDrag(a), window.addEventListener("mousemove", r.handleDrag), window.addEventListener("mouseup", r.handleMouseUp));
    }, r.handleMouseUp = function() {
      r.unbindEventListeners();
    }, r.unbindEventListeners = function() {
      window.removeEventListener("mousemove", r.handleDrag), window.removeEventListener("mouseup", r.handleMouseUp);
    }, r.state = {
      value: String(n.value).toUpperCase(),
      blurValue: String(n.value).toUpperCase()
    }, r.inputId = "rc-editable-input-" + Fi++, r;
  }
  return Si(e, [{
    key: "componentDidUpdate",
    value: function(r, a) {
      this.props.value !== this.state.value && (r.value !== this.props.value || a.value !== this.state.value) && (this.input === document.activeElement ? this.setState({
        blurValue: String(this.props.value).toUpperCase()
      }) : this.setState({
        value: String(this.props.value).toUpperCase(),
        blurValue: !this.state.blurValue && String(this.props.value).toUpperCase()
      }));
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.unbindEventListeners();
    }
  }, {
    key: "getValueObjectWithLabel",
    value: function(r) {
      return _i({}, this.props.label, r);
    }
  }, {
    key: "getArrowOffset",
    value: function() {
      return this.props.arrowOffset || Ti;
    }
  }, {
    key: "setUpdatedValue",
    value: function(r, a) {
      var i = this.props.label ? this.getValueObjectWithLabel(r) : r;
      this.props.onChange && this.props.onChange(i, a), this.setState({
        value: r
      });
    }
  }, {
    key: "render",
    value: function() {
      var r = this, a = R({
        default: {
          wrap: {
            position: "relative"
          }
        },
        "user-override": {
          wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
          input: this.props.style && this.props.style.input ? this.props.style.input : {},
          label: this.props.style && this.props.style.label ? this.props.style.label : {}
        },
        "dragLabel-true": {
          label: {
            cursor: "ew-resize"
          }
        }
      }, {
        "user-override": !0
      }, this.props);
      return /* @__PURE__ */ O("div", {
        style: a.wrap,
        children: [/* @__PURE__ */ p("input", {
          id: this.inputId,
          style: a.input,
          ref: function(o) {
            return r.input = o;
          },
          value: this.state.value,
          onKeyDown: this.handleKeyDown,
          onChange: this.handleChange,
          onBlur: this.handleBlur,
          placeholder: this.props.placeholder,
          spellCheck: "false"
        }), this.props.label && !this.props.hideLabel ? /* @__PURE__ */ p("label", {
          htmlFor: this.inputId,
          style: a.label,
          onMouseDown: this.handleMouseDown,
          children: this.props.label
        }) : null]
      });
    }
  }]), e;
}(ze || Ue), Bi = function(e, n, r, a) {
  var i = a.clientWidth, o = a.clientHeight, l = typeof e.pageX == "number" ? e.pageX : e.touches[0].pageX, f = typeof e.pageY == "number" ? e.pageY : e.touches[0].pageY, h = l - (a.getBoundingClientRect().left + window.pageXOffset), d = f - (a.getBoundingClientRect().top + window.pageYOffset);
  if (n === "vertical") {
    var g = void 0;
    if (d < 0)
      g = 359;
    else if (d > o)
      g = 0;
    else {
      var b = -(d * 100 / o) + 100;
      g = 360 * b / 100;
    }
    if (r.h !== g)
      return {
        h: g,
        s: r.s,
        l: r.l,
        a: r.a,
        source: "hsl"
      };
  } else {
    var v = void 0;
    if (h < 0)
      v = 0;
    else if (h > i)
      v = 359;
    else {
      var w = h * 100 / i;
      v = 360 * w / 100;
    }
    if (r.h !== v)
      return {
        h: v,
        s: r.s,
        l: r.l,
        a: r.a,
        source: "hsl"
      };
  }
  return null;
}, Mi = function() {
  function t(e, n) {
    for (var r = 0; r < n.length; r++) {
      var a = n[r];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e;
  };
}();
function Hi(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function yr(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Ni(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var ke = function(t) {
  Ni(e, t);
  function e() {
    var n, r, a, i;
    Hi(this, e);
    for (var o = arguments.length, l = Array(o), f = 0; f < o; f++)
      l[f] = arguments[f];
    return i = (r = (a = yr(this, (n = e.__proto__ || Object.getPrototypeOf(e)).call.apply(n, [this].concat(l))), a), a.handleChange = function(h) {
      var d = Bi(h, a.props.direction, a.props.hsl, a.container);
      d && typeof a.props.onChange == "function" && a.props.onChange(d, h);
    }, a.handleMouseDown = function(h) {
      a.handleChange(h), window.addEventListener("mousemove", a.handleChange), window.addEventListener("mouseup", a.handleMouseUp);
    }, a.handleMouseUp = function() {
      a.unbindEventListeners();
    }, r), yr(a, i);
  }
  return Mi(e, [{
    key: "componentWillUnmount",
    value: function() {
      this.unbindEventListeners();
    }
  }, {
    key: "unbindEventListeners",
    value: function() {
      window.removeEventListener("mousemove", this.handleChange), window.removeEventListener("mouseup", this.handleMouseUp);
    }
  }, {
    key: "render",
    value: function() {
      var r = this, a = this.props.direction, i = a === void 0 ? "horizontal" : a, o = R({
        default: {
          hue: {
            absolute: "0px 0px 0px 0px",
            borderRadius: this.props.radius,
            boxShadow: this.props.shadow
          },
          container: {
            padding: "0 2px",
            position: "relative",
            height: "100%",
            borderRadius: this.props.radius
          },
          pointer: {
            position: "absolute",
            left: this.props.hsl.h * 100 / 360 + "%"
          },
          slider: {
            marginTop: "1px",
            width: "4px",
            borderRadius: "1px",
            height: "8px",
            boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
            background: "#fff",
            transform: "translateX(-2px)"
          }
        },
        vertical: {
          pointer: {
            left: "0px",
            top: -(this.props.hsl.h * 100 / 360) + 100 + "%"
          }
        }
      }, {
        vertical: i === "vertical"
      });
      return /* @__PURE__ */ p("div", {
        style: o.hue,
        children: /* @__PURE__ */ O("div", {
          className: "hue-" + i,
          style: o.container,
          ref: function(f) {
            return r.container = f;
          },
          onMouseDown: this.handleMouseDown,
          onTouchMove: this.handleChange,
          onTouchStart: this.handleChange,
          children: [/* @__PURE__ */ p("style", {
            children: ".hue-horizontal { background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%); background: -webkit-linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%); } .hue-vertical { background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%); background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%); }"
          }), /* @__PURE__ */ p("div", {
            style: o.pointer,
            children: this.props.pointer ? D.createElement(this.props.pointer, this.props) : /* @__PURE__ */ p("div", {
              style: o.slider
            })
          })]
        })
      });
    }
  }]), e;
}(ze || Ue);
function Di() {
  this.__data__ = [], this.size = 0;
}
function Ye(t, e) {
  return t === e || t !== t && e !== e;
}
function ft(t, e) {
  for (var n = t.length; n--; )
    if (Ye(t[n][0], e))
      return n;
  return -1;
}
var Li = Array.prototype, ji = Li.splice;
function Ii(t) {
  var e = this.__data__, n = ft(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : ji.call(e, n, 1), --this.size, !0;
}
function Gi(t) {
  var e = this.__data__, n = ft(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function zi(t) {
  return ft(this.__data__, t) > -1;
}
function Ui(t, e) {
  var n = this.__data__, r = ft(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function ee(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
ee.prototype.clear = Di;
ee.prototype.delete = Ii;
ee.prototype.get = Gi;
ee.prototype.has = zi;
ee.prototype.set = Ui;
function Wi() {
  this.__data__ = new ee(), this.size = 0;
}
function Vi(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function Xi(t) {
  return this.__data__.get(t);
}
function Ki(t) {
  return this.__data__.has(t);
}
var qi = typeof global == "object" && global && global.Object === Object && global;
const hn = qi;
var Yi = typeof self == "object" && self && self.Object === Object && self, Zi = hn || Yi || Function("return this")();
const Y = Zi;
var Ji = Y.Symbol;
const re = Ji;
var un = Object.prototype, Qi = un.hasOwnProperty, eo = un.toString, He = re ? re.toStringTag : void 0;
function to(t) {
  var e = Qi.call(t, He), n = t[He];
  try {
    t[He] = void 0;
    var r = !0;
  } catch {
  }
  var a = eo.call(t);
  return r && (e ? t[He] = n : delete t[He]), a;
}
var ro = Object.prototype, no = ro.toString;
function ao(t) {
  return no.call(t);
}
var io = "[object Null]", oo = "[object Undefined]", wr = re ? re.toStringTag : void 0;
function se(t) {
  return t == null ? t === void 0 ? oo : io : wr && wr in Object(t) ? to(t) : ao(t);
}
function V(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var lo = "[object AsyncFunction]", so = "[object Function]", ho = "[object GeneratorFunction]", uo = "[object Proxy]";
function Dt(t) {
  if (!V(t))
    return !1;
  var e = se(t);
  return e == so || e == ho || e == lo || e == uo;
}
var po = Y["__core-js_shared__"];
const St = po;
var mr = function() {
  var t = /[^.]+$/.exec(St && St.keys && St.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function fo(t) {
  return !!mr && mr in t;
}
var co = Function.prototype, go = co.toString;
function he(t) {
  if (t != null) {
    try {
      return go.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var bo = /[\\^$.*+?()[\]{}|]/g, vo = /^\[object .+?Constructor\]$/, xo = Function.prototype, yo = Object.prototype, wo = xo.toString, mo = yo.hasOwnProperty, Co = RegExp(
  "^" + wo.call(mo).replace(bo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function So(t) {
  if (!V(t) || fo(t))
    return !1;
  var e = Dt(t) ? Co : vo;
  return e.test(he(t));
}
function _o(t, e) {
  return t == null ? void 0 : t[e];
}
function ue(t, e) {
  var n = _o(t, e);
  return So(n) ? n : void 0;
}
var Oo = ue(Y, "Map");
const Ie = Oo;
var Ro = ue(Object, "create");
const Ge = Ro;
function Ao() {
  this.__data__ = Ge ? Ge(null) : {}, this.size = 0;
}
function To(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Po = "__lodash_hash_undefined__", $o = Object.prototype, Eo = $o.hasOwnProperty;
function ko(t) {
  var e = this.__data__;
  if (Ge) {
    var n = e[t];
    return n === Po ? void 0 : n;
  }
  return Eo.call(e, t) ? e[t] : void 0;
}
var Fo = Object.prototype, Bo = Fo.hasOwnProperty;
function Mo(t) {
  var e = this.__data__;
  return Ge ? e[t] !== void 0 : Bo.call(e, t);
}
var Ho = "__lodash_hash_undefined__";
function No(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Ge && e === void 0 ? Ho : e, this;
}
function le(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
le.prototype.clear = Ao;
le.prototype.delete = To;
le.prototype.get = ko;
le.prototype.has = Mo;
le.prototype.set = No;
function Do() {
  this.size = 0, this.__data__ = {
    hash: new le(),
    map: new (Ie || ee)(),
    string: new le()
  };
}
function Lo(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function ct(t, e) {
  var n = t.__data__;
  return Lo(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function jo(t) {
  var e = ct(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function Io(t) {
  return ct(this, t).get(t);
}
function Go(t) {
  return ct(this, t).has(t);
}
function zo(t, e) {
  var n = ct(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function te(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
te.prototype.clear = Do;
te.prototype.delete = jo;
te.prototype.get = Io;
te.prototype.has = Go;
te.prototype.set = zo;
var Uo = 200;
function Wo(t, e) {
  var n = this.__data__;
  if (n instanceof ee) {
    var r = n.__data__;
    if (!Ie || r.length < Uo - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new te(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function J(t) {
  var e = this.__data__ = new ee(t);
  this.size = e.size;
}
J.prototype.clear = Wi;
J.prototype.delete = Vi;
J.prototype.get = Xi;
J.prototype.has = Ki;
J.prototype.set = Wo;
var Vo = function() {
  try {
    var t = ue(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
const it = Vo;
function Lt(t, e, n) {
  e == "__proto__" && it ? it(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function Tt(t, e, n) {
  (n !== void 0 && !Ye(t[e], n) || n === void 0 && !(e in t)) && Lt(t, e, n);
}
function Xo(t) {
  return function(e, n, r) {
    for (var a = -1, i = Object(e), o = r(e), l = o.length; l--; ) {
      var f = o[t ? l : ++a];
      if (n(i[f], f, i) === !1)
        break;
    }
    return e;
  };
}
var Ko = Xo();
const pn = Ko;
var fn = typeof exports == "object" && exports && !exports.nodeType && exports, Cr = fn && typeof module == "object" && module && !module.nodeType && module, qo = Cr && Cr.exports === fn, Sr = qo ? Y.Buffer : void 0, _r = Sr ? Sr.allocUnsafe : void 0;
function Yo(t, e) {
  if (e)
    return t.slice();
  var n = t.length, r = _r ? _r(n) : new t.constructor(n);
  return t.copy(r), r;
}
var Zo = Y.Uint8Array;
const ot = Zo;
function Jo(t) {
  var e = new t.constructor(t.byteLength);
  return new ot(e).set(new ot(t)), e;
}
function Qo(t, e) {
  var n = e ? Jo(t.buffer) : t.buffer;
  return new t.constructor(n, t.byteOffset, t.length);
}
function el(t, e) {
  var n = -1, r = t.length;
  for (e || (e = Array(r)); ++n < r; )
    e[n] = t[n];
  return e;
}
var Or = Object.create, tl = function() {
  function t() {
  }
  return function(e) {
    if (!V(e))
      return {};
    if (Or)
      return Or(e);
    t.prototype = e;
    var n = new t();
    return t.prototype = void 0, n;
  };
}();
const rl = tl;
function cn(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var nl = cn(Object.getPrototypeOf, Object);
const dn = nl;
var al = Object.prototype;
function jt(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || al;
  return t === n;
}
function il(t) {
  return typeof t.constructor == "function" && !jt(t) ? rl(dn(t)) : {};
}
function ne(t) {
  return t != null && typeof t == "object";
}
var ol = "[object Arguments]";
function Rr(t) {
  return ne(t) && se(t) == ol;
}
var gn = Object.prototype, ll = gn.hasOwnProperty, sl = gn.propertyIsEnumerable, hl = Rr(function() {
  return arguments;
}()) ? Rr : function(t) {
  return ne(t) && ll.call(t, "callee") && !sl.call(t, "callee");
};
const lt = hl;
var ul = Array.isArray;
const z = ul;
var pl = 9007199254740991;
function It(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= pl;
}
function Fe(t) {
  return t != null && It(t.length) && !Dt(t);
}
function fl(t) {
  return ne(t) && Fe(t);
}
function cl() {
  return !1;
}
var bn = typeof exports == "object" && exports && !exports.nodeType && exports, Ar = bn && typeof module == "object" && module && !module.nodeType && module, dl = Ar && Ar.exports === bn, Tr = dl ? Y.Buffer : void 0, gl = Tr ? Tr.isBuffer : void 0, bl = gl || cl;
const st = bl;
var vl = "[object Object]", xl = Function.prototype, yl = Object.prototype, vn = xl.toString, wl = yl.hasOwnProperty, ml = vn.call(Object);
function Cl(t) {
  if (!ne(t) || se(t) != vl)
    return !1;
  var e = dn(t);
  if (e === null)
    return !0;
  var n = wl.call(e, "constructor") && e.constructor;
  return typeof n == "function" && n instanceof n && vn.call(n) == ml;
}
var Sl = "[object Arguments]", _l = "[object Array]", Ol = "[object Boolean]", Rl = "[object Date]", Al = "[object Error]", Tl = "[object Function]", Pl = "[object Map]", $l = "[object Number]", El = "[object Object]", kl = "[object RegExp]", Fl = "[object Set]", Bl = "[object String]", Ml = "[object WeakMap]", Hl = "[object ArrayBuffer]", Nl = "[object DataView]", Dl = "[object Float32Array]", Ll = "[object Float64Array]", jl = "[object Int8Array]", Il = "[object Int16Array]", Gl = "[object Int32Array]", zl = "[object Uint8Array]", Ul = "[object Uint8ClampedArray]", Wl = "[object Uint16Array]", Vl = "[object Uint32Array]", E = {};
E[Dl] = E[Ll] = E[jl] = E[Il] = E[Gl] = E[zl] = E[Ul] = E[Wl] = E[Vl] = !0;
E[Sl] = E[_l] = E[Hl] = E[Ol] = E[Nl] = E[Rl] = E[Al] = E[Tl] = E[Pl] = E[$l] = E[El] = E[kl] = E[Fl] = E[Bl] = E[Ml] = !1;
function Xl(t) {
  return ne(t) && It(t.length) && !!E[se(t)];
}
function Kl(t) {
  return function(e) {
    return t(e);
  };
}
var xn = typeof exports == "object" && exports && !exports.nodeType && exports, je = xn && typeof module == "object" && module && !module.nodeType && module, ql = je && je.exports === xn, _t = ql && hn.process, Yl = function() {
  try {
    var t = je && je.require && je.require("util").types;
    return t || _t && _t.binding && _t.binding("util");
  } catch {
  }
}();
const Pr = Yl;
var $r = Pr && Pr.isTypedArray, Zl = $r ? Kl($r) : Xl;
const Gt = Zl;
function Pt(t, e) {
  if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__")
    return t[e];
}
var Jl = Object.prototype, Ql = Jl.hasOwnProperty;
function es(t, e, n) {
  var r = t[e];
  (!(Ql.call(t, e) && Ye(r, n)) || n === void 0 && !(e in t)) && Lt(t, e, n);
}
function ts(t, e, n, r) {
  var a = !n;
  n || (n = {});
  for (var i = -1, o = e.length; ++i < o; ) {
    var l = e[i], f = r ? r(n[l], t[l], l, n, t) : void 0;
    f === void 0 && (f = t[l]), a ? Lt(n, l, f) : es(n, l, f);
  }
  return n;
}
function rs(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var ns = 9007199254740991, as = /^(?:0|[1-9]\d*)$/;
function zt(t, e) {
  var n = typeof t;
  return e = e == null ? ns : e, !!e && (n == "number" || n != "symbol" && as.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
var is = Object.prototype, os = is.hasOwnProperty;
function yn(t, e) {
  var n = z(t), r = !n && lt(t), a = !n && !r && st(t), i = !n && !r && !a && Gt(t), o = n || r || a || i, l = o ? rs(t.length, String) : [], f = l.length;
  for (var h in t)
    (e || os.call(t, h)) && !(o && (h == "length" || a && (h == "offset" || h == "parent") || i && (h == "buffer" || h == "byteLength" || h == "byteOffset") || zt(h, f))) && l.push(h);
  return l;
}
function ls(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var ss = Object.prototype, hs = ss.hasOwnProperty;
function us(t) {
  if (!V(t))
    return ls(t);
  var e = jt(t), n = [];
  for (var r in t)
    r == "constructor" && (e || !hs.call(t, r)) || n.push(r);
  return n;
}
function wn(t) {
  return Fe(t) ? yn(t, !0) : us(t);
}
function ps(t) {
  return ts(t, wn(t));
}
function fs(t, e, n, r, a, i, o) {
  var l = Pt(t, n), f = Pt(e, n), h = o.get(f);
  if (h) {
    Tt(t, n, h);
    return;
  }
  var d = i ? i(l, f, n + "", t, e, o) : void 0, g = d === void 0;
  if (g) {
    var b = z(f), v = !b && st(f), w = !b && !v && Gt(f);
    d = f, b || v || w ? z(l) ? d = l : fl(l) ? d = el(l) : v ? (g = !1, d = Yo(f, !0)) : w ? (g = !1, d = Qo(f, !0)) : d = [] : Cl(f) || lt(f) ? (d = l, lt(l) ? d = ps(l) : (!V(l) || Dt(l)) && (d = il(f))) : g = !1;
  }
  g && (o.set(f, d), a(d, f, r, i, o), o.delete(f)), Tt(t, n, d);
}
function mn(t, e, n, r, a) {
  t !== e && pn(e, function(i, o) {
    if (a || (a = new J()), V(i))
      fs(t, e, o, n, mn, r, a);
    else {
      var l = r ? r(Pt(t, o), i, o + "", t, e, a) : void 0;
      l === void 0 && (l = i), Tt(t, o, l);
    }
  }, wn);
}
function dt(t) {
  return t;
}
function cs(t, e, n) {
  switch (n.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, n[0]);
    case 2:
      return t.call(e, n[0], n[1]);
    case 3:
      return t.call(e, n[0], n[1], n[2]);
  }
  return t.apply(e, n);
}
var Er = Math.max;
function ds(t, e, n) {
  return e = Er(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var r = arguments, a = -1, i = Er(r.length - e, 0), o = Array(i); ++a < i; )
      o[a] = r[e + a];
    a = -1;
    for (var l = Array(e + 1); ++a < e; )
      l[a] = r[a];
    return l[e] = n(o), cs(t, this, l);
  };
}
function gs(t) {
  return function() {
    return t;
  };
}
var bs = it ? function(t, e) {
  return it(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: gs(e),
    writable: !0
  });
} : dt;
const vs = bs;
var xs = 800, ys = 16, ws = Date.now;
function ms(t) {
  var e = 0, n = 0;
  return function() {
    var r = ws(), a = ys - (r - n);
    if (n = r, a > 0) {
      if (++e >= xs)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
var Cs = ms(vs);
const Ss = Cs;
function _s(t, e) {
  return Ss(ds(t, e, dt), t + "");
}
function Os(t, e, n) {
  if (!V(n))
    return !1;
  var r = typeof e;
  return (r == "number" ? Fe(n) && zt(e, n.length) : r == "string" && e in n) ? Ye(n[e], t) : !1;
}
function Rs(t) {
  return _s(function(e, n) {
    var r = -1, a = n.length, i = a > 1 ? n[a - 1] : void 0, o = a > 2 ? n[2] : void 0;
    for (i = t.length > 3 && typeof i == "function" ? (a--, i) : void 0, o && Os(n[0], n[1], o) && (i = a < 3 ? void 0 : i, a = 1), e = Object(e); ++r < a; ) {
      var l = n[r];
      l && t(e, l, r, i);
    }
    return e;
  });
}
var As = Rs(function(t, e, n) {
  mn(t, e, n);
});
const L = As;
var Ze = function(e) {
  var n = e.zDepth, r = e.radius, a = e.background, i = e.children, o = e.styles, l = o === void 0 ? {} : o, f = R(L({
    default: {
      wrap: {
        position: "relative",
        display: "inline-block"
      },
      content: {
        position: "relative"
      },
      bg: {
        absolute: "0px 0px 0px 0px",
        boxShadow: "0 " + n + "px " + n * 4 + "px rgba(0,0,0,.24)",
        borderRadius: r,
        background: a
      }
    },
    "zDepth-0": {
      bg: {
        boxShadow: "none"
      }
    },
    "zDepth-1": {
      bg: {
        boxShadow: "0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)"
      }
    },
    "zDepth-2": {
      bg: {
        boxShadow: "0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)"
      }
    },
    "zDepth-3": {
      bg: {
        boxShadow: "0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)"
      }
    },
    "zDepth-4": {
      bg: {
        boxShadow: "0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)"
      }
    },
    "zDepth-5": {
      bg: {
        boxShadow: "0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)"
      }
    },
    square: {
      bg: {
        borderRadius: "0"
      }
    },
    circle: {
      bg: {
        borderRadius: "50%"
      }
    }
  }, l), {
    "zDepth-1": n === 1
  });
  return /* @__PURE__ */ O("div", {
    style: f.wrap,
    children: [/* @__PURE__ */ p("div", {
      style: f.bg
    }), /* @__PURE__ */ p("div", {
      style: f.content,
      children: i
    })]
  });
};
Ze.propTypes = {
  background: y.exports.string,
  zDepth: y.exports.oneOf([0, 1, 2, 3, 4, 5]),
  radius: y.exports.number,
  styles: y.exports.object
};
Ze.defaultProps = {
  background: "#fff",
  zDepth: 1,
  radius: 2,
  styles: {}
};
var Ts = function() {
  return Y.Date.now();
};
const Ot = Ts;
var Ps = /\s/;
function $s(t) {
  for (var e = t.length; e-- && Ps.test(t.charAt(e)); )
    ;
  return e;
}
var Es = /^\s+/;
function ks(t) {
  return t && t.slice(0, $s(t) + 1).replace(Es, "");
}
var Fs = "[object Symbol]";
function gt(t) {
  return typeof t == "symbol" || ne(t) && se(t) == Fs;
}
var kr = 0 / 0, Bs = /^[-+]0x[0-9a-f]+$/i, Ms = /^0b[01]+$/i, Hs = /^0o[0-7]+$/i, Ns = parseInt;
function Fr(t) {
  if (typeof t == "number")
    return t;
  if (gt(t))
    return kr;
  if (V(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = V(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = ks(t);
  var n = Ms.test(t);
  return n || Hs.test(t) ? Ns(t.slice(2), n ? 2 : 8) : Bs.test(t) ? kr : +t;
}
var Ds = "Expected a function", Ls = Math.max, js = Math.min;
function Cn(t, e, n) {
  var r, a, i, o, l, f, h = 0, d = !1, g = !1, b = !0;
  if (typeof t != "function")
    throw new TypeError(Ds);
  e = Fr(e) || 0, V(n) && (d = !!n.leading, g = "maxWait" in n, i = g ? Ls(Fr(n.maxWait) || 0, e) : i, b = "trailing" in n ? !!n.trailing : b);
  function v(A) {
    var Z = r, ie = a;
    return r = a = void 0, h = A, o = t.apply(ie, Z), o;
  }
  function w(A) {
    return h = A, l = setTimeout(P, e), d ? v(A) : o;
  }
  function S(A) {
    var Z = A - f, ie = A - h, Je = e - Z;
    return g ? js(Je, i - ie) : Je;
  }
  function _(A) {
    var Z = A - f, ie = A - h;
    return f === void 0 || Z >= e || Z < 0 || g && ie >= i;
  }
  function P() {
    var A = Ot();
    if (_(A))
      return M(A);
    l = setTimeout(P, S(A));
  }
  function M(A) {
    return l = void 0, b && r ? v(A) : (r = a = void 0, o);
  }
  function I() {
    l !== void 0 && clearTimeout(l), h = 0, r = f = a = l = void 0;
  }
  function H() {
    return l === void 0 ? o : M(Ot());
  }
  function N() {
    var A = Ot(), Z = _(A);
    if (r = arguments, a = this, f = A, Z) {
      if (l === void 0)
        return w(f);
      if (g)
        return clearTimeout(l), l = setTimeout(P, e), v(f);
    }
    return l === void 0 && (l = setTimeout(P, e)), o;
  }
  return N.cancel = I, N.flush = H, N;
}
var Is = "Expected a function";
function Gs(t, e, n) {
  var r = !0, a = !0;
  if (typeof t != "function")
    throw new TypeError(Is);
  return V(n) && (r = "leading" in n ? !!n.leading : r, a = "trailing" in n ? !!n.trailing : a), Cn(t, e, {
    leading: r,
    maxWait: e,
    trailing: a
  });
}
var zs = function(e, n, r) {
  var a = r.getBoundingClientRect(), i = a.width, o = a.height, l = typeof e.pageX == "number" ? e.pageX : e.touches[0].pageX, f = typeof e.pageY == "number" ? e.pageY : e.touches[0].pageY, h = l - (r.getBoundingClientRect().left + window.pageXOffset), d = f - (r.getBoundingClientRect().top + window.pageYOffset);
  h < 0 ? h = 0 : h > i && (h = i), d < 0 ? d = 0 : d > o && (d = o);
  var g = h / i, b = 1 - d / o;
  return {
    h: n.h,
    s: g,
    v: b,
    a: n.a,
    source: "hsv"
  };
}, Us = function() {
  function t(e, n) {
    for (var r = 0; r < n.length; r++) {
      var a = n[r];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e;
  };
}();
function Ws(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Vs(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Xs(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var bt = function(t) {
  Xs(e, t);
  function e(n) {
    Ws(this, e);
    var r = Vs(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n));
    return r.handleChange = function(a) {
      typeof r.props.onChange == "function" && r.throttle(r.props.onChange, zs(a, r.props.hsl, r.container), a);
    }, r.handleMouseDown = function(a) {
      r.handleChange(a);
      var i = r.getContainerRenderWindow();
      i.addEventListener("mousemove", r.handleChange), i.addEventListener("mouseup", r.handleMouseUp);
    }, r.handleMouseUp = function() {
      r.unbindEventListeners();
    }, r.throttle = Gs(function(a, i, o) {
      a(i, o);
    }, 50), r;
  }
  return Us(e, [{
    key: "componentWillUnmount",
    value: function() {
      this.throttle.cancel(), this.unbindEventListeners();
    }
  }, {
    key: "getContainerRenderWindow",
    value: function() {
      for (var r = this.container, a = window; !a.document.contains(r) && a.parent !== a; )
        a = a.parent;
      return a;
    }
  }, {
    key: "unbindEventListeners",
    value: function() {
      var r = this.getContainerRenderWindow();
      r.removeEventListener("mousemove", this.handleChange), r.removeEventListener("mouseup", this.handleMouseUp);
    }
  }, {
    key: "render",
    value: function() {
      var r = this, a = this.props.style || {}, i = a.color, o = a.white, l = a.black, f = a.pointer, h = a.circle, d = R({
        default: {
          color: {
            absolute: "0px 0px 0px 0px",
            background: "hsl(" + this.props.hsl.h + ",100%, 50%)",
            borderRadius: this.props.radius
          },
          white: {
            absolute: "0px 0px 0px 0px",
            borderRadius: this.props.radius
          },
          black: {
            absolute: "0px 0px 0px 0px",
            boxShadow: this.props.shadow,
            borderRadius: this.props.radius
          },
          pointer: {
            position: "absolute",
            top: -(this.props.hsv.v * 100) + 100 + "%",
            left: this.props.hsv.s * 100 + "%",
            cursor: "default"
          },
          circle: {
            width: "4px",
            height: "4px",
            boxShadow: `0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),
            0 0 1px 2px rgba(0,0,0,.4)`,
            borderRadius: "50%",
            cursor: "hand",
            transform: "translate(-2px, -2px)"
          }
        },
        custom: {
          color: i,
          white: o,
          black: l,
          pointer: f,
          circle: h
        }
      }, {
        custom: !!this.props.style
      });
      return /* @__PURE__ */ O("div", {
        style: d.color,
        ref: function(b) {
          return r.container = b;
        },
        onMouseDown: this.handleMouseDown,
        onTouchMove: this.handleChange,
        onTouchStart: this.handleChange,
        children: [/* @__PURE__ */ p("style", {
          children: ".saturation-white { background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0)); background: linear-gradient(to right, #fff, rgba(255,255,255,0)); } .saturation-black { background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0)); background: linear-gradient(to top, #000, rgba(0,0,0,0)); }"
        }), /* @__PURE__ */ O("div", {
          style: d.white,
          className: "saturation-white",
          children: [/* @__PURE__ */ p("div", {
            style: d.black,
            className: "saturation-black"
          }), /* @__PURE__ */ p("div", {
            style: d.pointer,
            children: this.props.pointer ? D.createElement(this.props.pointer, this.props) : /* @__PURE__ */ p("div", {
              style: d.circle
            })
          })]
        })]
      });
    }
  }]), e;
}(ze || Ue);
function Ks(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; )
    ;
  return t;
}
var qs = cn(Object.keys, Object);
const Ys = qs;
var Zs = Object.prototype, Js = Zs.hasOwnProperty;
function Qs(t) {
  if (!jt(t))
    return Ys(t);
  var e = [];
  for (var n in Object(t))
    Js.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function Ut(t) {
  return Fe(t) ? yn(t) : Qs(t);
}
function eh(t, e) {
  return t && pn(t, e, Ut);
}
function th(t, e) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!Fe(n))
      return t(n, r);
    for (var a = n.length, i = e ? a : -1, o = Object(n); (e ? i-- : ++i < a) && r(o[i], i, o) !== !1; )
      ;
    return n;
  };
}
var rh = th(eh);
const Sn = rh;
function nh(t) {
  return typeof t == "function" ? t : dt;
}
function ah(t, e) {
  var n = z(t) ? Ks : Sn;
  return n(t, nh(e));
}
var _n = { exports: {} };
(function(t) {
  (function(e) {
    var n = /^\s+/, r = /\s+$/, a = 0, i = e.round, o = e.min, l = e.max, f = e.random;
    function h(s, c) {
      if (s = s || "", c = c || {}, s instanceof h)
        return s;
      if (!(this instanceof h))
        return new h(s, c);
      var u = d(s);
      this._originalInput = s, this._r = u.r, this._g = u.g, this._b = u.b, this._a = u.a, this._roundA = i(100 * this._a) / 100, this._format = c.format || u.format, this._gradientType = c.gradientType, this._r < 1 && (this._r = i(this._r)), this._g < 1 && (this._g = i(this._g)), this._b < 1 && (this._b = i(this._b)), this._ok = u.ok, this._tc_id = a++;
    }
    h.prototype = {
      isDark: function() {
        return this.getBrightness() < 128;
      },
      isLight: function() {
        return !this.isDark();
      },
      isValid: function() {
        return this._ok;
      },
      getOriginalInput: function() {
        return this._originalInput;
      },
      getFormat: function() {
        return this._format;
      },
      getAlpha: function() {
        return this._a;
      },
      getBrightness: function() {
        var s = this.toRgb();
        return (s.r * 299 + s.g * 587 + s.b * 114) / 1e3;
      },
      getLuminance: function() {
        var s = this.toRgb(), c, u, x, C, m, $;
        return c = s.r / 255, u = s.g / 255, x = s.b / 255, c <= 0.03928 ? C = c / 12.92 : C = e.pow((c + 0.055) / 1.055, 2.4), u <= 0.03928 ? m = u / 12.92 : m = e.pow((u + 0.055) / 1.055, 2.4), x <= 0.03928 ? $ = x / 12.92 : $ = e.pow((x + 0.055) / 1.055, 2.4), 0.2126 * C + 0.7152 * m + 0.0722 * $;
      },
      setAlpha: function(s) {
        return this._a = hr(s), this._roundA = i(100 * this._a) / 100, this;
      },
      toHsv: function() {
        var s = w(this._r, this._g, this._b);
        return { h: s.h * 360, s: s.s, v: s.v, a: this._a };
      },
      toHsvString: function() {
        var s = w(this._r, this._g, this._b), c = i(s.h * 360), u = i(s.s * 100), x = i(s.v * 100);
        return this._a == 1 ? "hsv(" + c + ", " + u + "%, " + x + "%)" : "hsva(" + c + ", " + u + "%, " + x + "%, " + this._roundA + ")";
      },
      toHsl: function() {
        var s = b(this._r, this._g, this._b);
        return { h: s.h * 360, s: s.s, l: s.l, a: this._a };
      },
      toHslString: function() {
        var s = b(this._r, this._g, this._b), c = i(s.h * 360), u = i(s.s * 100), x = i(s.l * 100);
        return this._a == 1 ? "hsl(" + c + ", " + u + "%, " + x + "%)" : "hsla(" + c + ", " + u + "%, " + x + "%, " + this._roundA + ")";
      },
      toHex: function(s) {
        return _(this._r, this._g, this._b, s);
      },
      toHexString: function(s) {
        return "#" + this.toHex(s);
      },
      toHex8: function(s) {
        return P(this._r, this._g, this._b, this._a, s);
      },
      toHex8String: function(s) {
        return "#" + this.toHex8(s);
      },
      toRgb: function() {
        return { r: i(this._r), g: i(this._g), b: i(this._b), a: this._a };
      },
      toRgbString: function() {
        return this._a == 1 ? "rgb(" + i(this._r) + ", " + i(this._g) + ", " + i(this._b) + ")" : "rgba(" + i(this._r) + ", " + i(this._g) + ", " + i(this._b) + ", " + this._roundA + ")";
      },
      toPercentageRgb: function() {
        return { r: i(k(this._r, 255) * 100) + "%", g: i(k(this._g, 255) * 100) + "%", b: i(k(this._b, 255) * 100) + "%", a: this._a };
      },
      toPercentageRgbString: function() {
        return this._a == 1 ? "rgb(" + i(k(this._r, 255) * 100) + "%, " + i(k(this._g, 255) * 100) + "%, " + i(k(this._b, 255) * 100) + "%)" : "rgba(" + i(k(this._r, 255) * 100) + "%, " + i(k(this._g, 255) * 100) + "%, " + i(k(this._b, 255) * 100) + "%, " + this._roundA + ")";
      },
      toName: function() {
        return this._a === 0 ? "transparent" : this._a < 1 ? !1 : Un[_(this._r, this._g, this._b, !0)] || !1;
      },
      toFilter: function(s) {
        var c = "#" + M(this._r, this._g, this._b, this._a), u = c, x = this._gradientType ? "GradientType = 1, " : "";
        if (s) {
          var C = h(s);
          u = "#" + M(C._r, C._g, C._b, C._a);
        }
        return "progid:DXImageTransform.Microsoft.gradient(" + x + "startColorstr=" + c + ",endColorstr=" + u + ")";
      },
      toString: function(s) {
        var c = !!s;
        s = s || this._format;
        var u = !1, x = this._a < 1 && this._a >= 0, C = !c && x && (s === "hex" || s === "hex6" || s === "hex3" || s === "hex4" || s === "hex8" || s === "name");
        return C ? s === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (s === "rgb" && (u = this.toRgbString()), s === "prgb" && (u = this.toPercentageRgbString()), (s === "hex" || s === "hex6") && (u = this.toHexString()), s === "hex3" && (u = this.toHexString(!0)), s === "hex4" && (u = this.toHex8String(!0)), s === "hex8" && (u = this.toHex8String()), s === "name" && (u = this.toName()), s === "hsl" && (u = this.toHslString()), s === "hsv" && (u = this.toHsvString()), u || this.toHexString());
      },
      clone: function() {
        return h(this.toString());
      },
      _applyModification: function(s, c) {
        var u = s.apply(null, [this].concat([].slice.call(c)));
        return this._r = u._r, this._g = u._g, this._b = u._b, this.setAlpha(u._a), this;
      },
      lighten: function() {
        return this._applyModification(A, arguments);
      },
      brighten: function() {
        return this._applyModification(Z, arguments);
      },
      darken: function() {
        return this._applyModification(ie, arguments);
      },
      desaturate: function() {
        return this._applyModification(I, arguments);
      },
      saturate: function() {
        return this._applyModification(H, arguments);
      },
      greyscale: function() {
        return this._applyModification(N, arguments);
      },
      spin: function() {
        return this._applyModification(Je, arguments);
      },
      _applyCombination: function(s, c) {
        return s.apply(null, [this].concat([].slice.call(c)));
      },
      analogous: function() {
        return this._applyCombination(Gn, arguments);
      },
      complement: function() {
        return this._applyCombination(Dn, arguments);
      },
      monochromatic: function() {
        return this._applyCombination(zn, arguments);
      },
      splitcomplement: function() {
        return this._applyCombination(In, arguments);
      },
      triad: function() {
        return this._applyCombination(Ln, arguments);
      },
      tetrad: function() {
        return this._applyCombination(jn, arguments);
      }
    }, h.fromRatio = function(s, c) {
      if (typeof s == "object") {
        var u = {};
        for (var x in s)
          s.hasOwnProperty(x) && (x === "a" ? u[x] = s[x] : u[x] = Be(s[x]));
        s = u;
      }
      return h(s, c);
    };
    function d(s) {
      var c = { r: 0, g: 0, b: 0 }, u = 1, x = null, C = null, m = null, $ = !1, F = !1;
      return typeof s == "string" && (s = Kn(s)), typeof s == "object" && (Q(s.r) && Q(s.g) && Q(s.b) ? (c = g(s.r, s.g, s.b), $ = !0, F = String(s.r).substr(-1) === "%" ? "prgb" : "rgb") : Q(s.h) && Q(s.s) && Q(s.v) ? (x = Be(s.s), C = Be(s.v), c = S(s.h, x, C), $ = !0, F = "hsv") : Q(s.h) && Q(s.s) && Q(s.l) && (x = Be(s.s), m = Be(s.l), c = v(s.h, x, m), $ = !0, F = "hsl"), s.hasOwnProperty("a") && (u = s.a)), u = hr(u), {
        ok: $,
        format: s.format || F,
        r: o(255, l(c.r, 0)),
        g: o(255, l(c.g, 0)),
        b: o(255, l(c.b, 0)),
        a: u
      };
    }
    function g(s, c, u) {
      return {
        r: k(s, 255) * 255,
        g: k(c, 255) * 255,
        b: k(u, 255) * 255
      };
    }
    function b(s, c, u) {
      s = k(s, 255), c = k(c, 255), u = k(u, 255);
      var x = l(s, c, u), C = o(s, c, u), m, $, F = (x + C) / 2;
      if (x == C)
        m = $ = 0;
      else {
        var B = x - C;
        switch ($ = F > 0.5 ? B / (2 - x - C) : B / (x + C), x) {
          case s:
            m = (c - u) / B + (c < u ? 6 : 0);
            break;
          case c:
            m = (u - s) / B + 2;
            break;
          case u:
            m = (s - c) / B + 4;
            break;
        }
        m /= 6;
      }
      return { h: m, s: $, l: F };
    }
    function v(s, c, u) {
      var x, C, m;
      s = k(s, 360), c = k(c, 100), u = k(u, 100);
      function $(U, Me, q) {
        return q < 0 && (q += 1), q > 1 && (q -= 1), q < 1 / 6 ? U + (Me - U) * 6 * q : q < 1 / 2 ? Me : q < 2 / 3 ? U + (Me - U) * (2 / 3 - q) * 6 : U;
      }
      if (c === 0)
        x = C = m = u;
      else {
        var F = u < 0.5 ? u * (1 + c) : u + c - u * c, B = 2 * u - F;
        x = $(B, F, s + 1 / 3), C = $(B, F, s), m = $(B, F, s - 1 / 3);
      }
      return { r: x * 255, g: C * 255, b: m * 255 };
    }
    function w(s, c, u) {
      s = k(s, 255), c = k(c, 255), u = k(u, 255);
      var x = l(s, c, u), C = o(s, c, u), m, $, F = x, B = x - C;
      if ($ = x === 0 ? 0 : B / x, x == C)
        m = 0;
      else {
        switch (x) {
          case s:
            m = (c - u) / B + (c < u ? 6 : 0);
            break;
          case c:
            m = (u - s) / B + 2;
            break;
          case u:
            m = (s - c) / B + 4;
            break;
        }
        m /= 6;
      }
      return { h: m, s: $, v: F };
    }
    function S(s, c, u) {
      s = k(s, 360) * 6, c = k(c, 100), u = k(u, 100);
      var x = e.floor(s), C = s - x, m = u * (1 - c), $ = u * (1 - C * c), F = u * (1 - (1 - C) * c), B = x % 6, U = [u, $, m, m, F, u][B], Me = [F, u, u, $, m, m][B], q = [m, m, F, u, u, $][B];
      return { r: U * 255, g: Me * 255, b: q * 255 };
    }
    function _(s, c, u, x) {
      var C = [
        X(i(s).toString(16)),
        X(i(c).toString(16)),
        X(i(u).toString(16))
      ];
      return x && C[0].charAt(0) == C[0].charAt(1) && C[1].charAt(0) == C[1].charAt(1) && C[2].charAt(0) == C[2].charAt(1) ? C[0].charAt(0) + C[1].charAt(0) + C[2].charAt(0) : C.join("");
    }
    function P(s, c, u, x, C) {
      var m = [
        X(i(s).toString(16)),
        X(i(c).toString(16)),
        X(i(u).toString(16)),
        X(ur(x))
      ];
      return C && m[0].charAt(0) == m[0].charAt(1) && m[1].charAt(0) == m[1].charAt(1) && m[2].charAt(0) == m[2].charAt(1) && m[3].charAt(0) == m[3].charAt(1) ? m[0].charAt(0) + m[1].charAt(0) + m[2].charAt(0) + m[3].charAt(0) : m.join("");
    }
    function M(s, c, u, x) {
      var C = [
        X(ur(x)),
        X(i(s).toString(16)),
        X(i(c).toString(16)),
        X(i(u).toString(16))
      ];
      return C.join("");
    }
    h.equals = function(s, c) {
      return !s || !c ? !1 : h(s).toRgbString() == h(c).toRgbString();
    }, h.random = function() {
      return h.fromRatio({
        r: f(),
        g: f(),
        b: f()
      });
    };
    function I(s, c) {
      c = c === 0 ? 0 : c || 10;
      var u = h(s).toHsl();
      return u.s -= c / 100, u.s = Qe(u.s), h(u);
    }
    function H(s, c) {
      c = c === 0 ? 0 : c || 10;
      var u = h(s).toHsl();
      return u.s += c / 100, u.s = Qe(u.s), h(u);
    }
    function N(s) {
      return h(s).desaturate(100);
    }
    function A(s, c) {
      c = c === 0 ? 0 : c || 10;
      var u = h(s).toHsl();
      return u.l += c / 100, u.l = Qe(u.l), h(u);
    }
    function Z(s, c) {
      c = c === 0 ? 0 : c || 10;
      var u = h(s).toRgb();
      return u.r = l(0, o(255, u.r - i(255 * -(c / 100)))), u.g = l(0, o(255, u.g - i(255 * -(c / 100)))), u.b = l(0, o(255, u.b - i(255 * -(c / 100)))), h(u);
    }
    function ie(s, c) {
      c = c === 0 ? 0 : c || 10;
      var u = h(s).toHsl();
      return u.l -= c / 100, u.l = Qe(u.l), h(u);
    }
    function Je(s, c) {
      var u = h(s).toHsl(), x = (u.h + c) % 360;
      return u.h = x < 0 ? 360 + x : x, h(u);
    }
    function Dn(s) {
      var c = h(s).toHsl();
      return c.h = (c.h + 180) % 360, h(c);
    }
    function Ln(s) {
      var c = h(s).toHsl(), u = c.h;
      return [
        h(s),
        h({ h: (u + 120) % 360, s: c.s, l: c.l }),
        h({ h: (u + 240) % 360, s: c.s, l: c.l })
      ];
    }
    function jn(s) {
      var c = h(s).toHsl(), u = c.h;
      return [
        h(s),
        h({ h: (u + 90) % 360, s: c.s, l: c.l }),
        h({ h: (u + 180) % 360, s: c.s, l: c.l }),
        h({ h: (u + 270) % 360, s: c.s, l: c.l })
      ];
    }
    function In(s) {
      var c = h(s).toHsl(), u = c.h;
      return [
        h(s),
        h({ h: (u + 72) % 360, s: c.s, l: c.l }),
        h({ h: (u + 216) % 360, s: c.s, l: c.l })
      ];
    }
    function Gn(s, c, u) {
      c = c || 6, u = u || 30;
      var x = h(s).toHsl(), C = 360 / u, m = [h(s)];
      for (x.h = (x.h - (C * c >> 1) + 720) % 360; --c; )
        x.h = (x.h + C) % 360, m.push(h(x));
      return m;
    }
    function zn(s, c) {
      c = c || 6;
      for (var u = h(s).toHsv(), x = u.h, C = u.s, m = u.v, $ = [], F = 1 / c; c--; )
        $.push(h({ h: x, s: C, v: m })), m = (m + F) % 1;
      return $;
    }
    h.mix = function(s, c, u) {
      u = u === 0 ? 0 : u || 50;
      var x = h(s).toRgb(), C = h(c).toRgb(), m = u / 100, $ = {
        r: (C.r - x.r) * m + x.r,
        g: (C.g - x.g) * m + x.g,
        b: (C.b - x.b) * m + x.b,
        a: (C.a - x.a) * m + x.a
      };
      return h($);
    }, h.readability = function(s, c) {
      var u = h(s), x = h(c);
      return (e.max(u.getLuminance(), x.getLuminance()) + 0.05) / (e.min(u.getLuminance(), x.getLuminance()) + 0.05);
    }, h.isReadable = function(s, c, u) {
      var x = h.readability(s, c), C, m;
      switch (m = !1, C = qn(u), C.level + C.size) {
        case "AAsmall":
        case "AAAlarge":
          m = x >= 4.5;
          break;
        case "AAlarge":
          m = x >= 3;
          break;
        case "AAAsmall":
          m = x >= 7;
          break;
      }
      return m;
    }, h.mostReadable = function(s, c, u) {
      var x = null, C = 0, m, $, F, B;
      u = u || {}, $ = u.includeFallbackColors, F = u.level, B = u.size;
      for (var U = 0; U < c.length; U++)
        m = h.readability(s, c[U]), m > C && (C = m, x = h(c[U]));
      return h.isReadable(s, x, { level: F, size: B }) || !$ ? x : (u.includeFallbackColors = !1, h.mostReadable(s, ["#fff", "#000"], u));
    };
    var xt = h.names = {
      aliceblue: "f0f8ff",
      antiquewhite: "faebd7",
      aqua: "0ff",
      aquamarine: "7fffd4",
      azure: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "000",
      blanchedalmond: "ffebcd",
      blue: "00f",
      blueviolet: "8a2be2",
      brown: "a52a2a",
      burlywood: "deb887",
      burntsienna: "ea7e5d",
      cadetblue: "5f9ea0",
      chartreuse: "7fff00",
      chocolate: "d2691e",
      coral: "ff7f50",
      cornflowerblue: "6495ed",
      cornsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "0ff",
      darkblue: "00008b",
      darkcyan: "008b8b",
      darkgoldenrod: "b8860b",
      darkgray: "a9a9a9",
      darkgreen: "006400",
      darkgrey: "a9a9a9",
      darkkhaki: "bdb76b",
      darkmagenta: "8b008b",
      darkolivegreen: "556b2f",
      darkorange: "ff8c00",
      darkorchid: "9932cc",
      darkred: "8b0000",
      darksalmon: "e9967a",
      darkseagreen: "8fbc8f",
      darkslateblue: "483d8b",
      darkslategray: "2f4f4f",
      darkslategrey: "2f4f4f",
      darkturquoise: "00ced1",
      darkviolet: "9400d3",
      deeppink: "ff1493",
      deepskyblue: "00bfff",
      dimgray: "696969",
      dimgrey: "696969",
      dodgerblue: "1e90ff",
      firebrick: "b22222",
      floralwhite: "fffaf0",
      forestgreen: "228b22",
      fuchsia: "f0f",
      gainsboro: "dcdcdc",
      ghostwhite: "f8f8ff",
      gold: "ffd700",
      goldenrod: "daa520",
      gray: "808080",
      green: "008000",
      greenyellow: "adff2f",
      grey: "808080",
      honeydew: "f0fff0",
      hotpink: "ff69b4",
      indianred: "cd5c5c",
      indigo: "4b0082",
      ivory: "fffff0",
      khaki: "f0e68c",
      lavender: "e6e6fa",
      lavenderblush: "fff0f5",
      lawngreen: "7cfc00",
      lemonchiffon: "fffacd",
      lightblue: "add8e6",
      lightcoral: "f08080",
      lightcyan: "e0ffff",
      lightgoldenrodyellow: "fafad2",
      lightgray: "d3d3d3",
      lightgreen: "90ee90",
      lightgrey: "d3d3d3",
      lightpink: "ffb6c1",
      lightsalmon: "ffa07a",
      lightseagreen: "20b2aa",
      lightskyblue: "87cefa",
      lightslategray: "789",
      lightslategrey: "789",
      lightsteelblue: "b0c4de",
      lightyellow: "ffffe0",
      lime: "0f0",
      limegreen: "32cd32",
      linen: "faf0e6",
      magenta: "f0f",
      maroon: "800000",
      mediumaquamarine: "66cdaa",
      mediumblue: "0000cd",
      mediumorchid: "ba55d3",
      mediumpurple: "9370db",
      mediumseagreen: "3cb371",
      mediumslateblue: "7b68ee",
      mediumspringgreen: "00fa9a",
      mediumturquoise: "48d1cc",
      mediumvioletred: "c71585",
      midnightblue: "191970",
      mintcream: "f5fffa",
      mistyrose: "ffe4e1",
      moccasin: "ffe4b5",
      navajowhite: "ffdead",
      navy: "000080",
      oldlace: "fdf5e6",
      olive: "808000",
      olivedrab: "6b8e23",
      orange: "ffa500",
      orangered: "ff4500",
      orchid: "da70d6",
      palegoldenrod: "eee8aa",
      palegreen: "98fb98",
      paleturquoise: "afeeee",
      palevioletred: "db7093",
      papayawhip: "ffefd5",
      peachpuff: "ffdab9",
      peru: "cd853f",
      pink: "ffc0cb",
      plum: "dda0dd",
      powderblue: "b0e0e6",
      purple: "800080",
      rebeccapurple: "663399",
      red: "f00",
      rosybrown: "bc8f8f",
      royalblue: "4169e1",
      saddlebrown: "8b4513",
      salmon: "fa8072",
      sandybrown: "f4a460",
      seagreen: "2e8b57",
      seashell: "fff5ee",
      sienna: "a0522d",
      silver: "c0c0c0",
      skyblue: "87ceeb",
      slateblue: "6a5acd",
      slategray: "708090",
      slategrey: "708090",
      snow: "fffafa",
      springgreen: "00ff7f",
      steelblue: "4682b4",
      tan: "d2b48c",
      teal: "008080",
      thistle: "d8bfd8",
      tomato: "ff6347",
      turquoise: "40e0d0",
      violet: "ee82ee",
      wheat: "f5deb3",
      white: "fff",
      whitesmoke: "f5f5f5",
      yellow: "ff0",
      yellowgreen: "9acd32"
    }, Un = h.hexNames = Wn(xt);
    function Wn(s) {
      var c = {};
      for (var u in s)
        s.hasOwnProperty(u) && (c[s[u]] = u);
      return c;
    }
    function hr(s) {
      return s = parseFloat(s), (isNaN(s) || s < 0 || s > 1) && (s = 1), s;
    }
    function k(s, c) {
      Vn(s) && (s = "100%");
      var u = Xn(s);
      return s = o(c, l(0, parseFloat(s))), u && (s = parseInt(s * c, 10) / 100), e.abs(s - c) < 1e-6 ? 1 : s % c / parseFloat(c);
    }
    function Qe(s) {
      return o(1, l(0, s));
    }
    function G(s) {
      return parseInt(s, 16);
    }
    function Vn(s) {
      return typeof s == "string" && s.indexOf(".") != -1 && parseFloat(s) === 1;
    }
    function Xn(s) {
      return typeof s == "string" && s.indexOf("%") != -1;
    }
    function X(s) {
      return s.length == 1 ? "0" + s : "" + s;
    }
    function Be(s) {
      return s <= 1 && (s = s * 100 + "%"), s;
    }
    function ur(s) {
      return e.round(parseFloat(s) * 255).toString(16);
    }
    function pr(s) {
      return G(s) / 255;
    }
    var K = function() {
      var s = "[-\\+]?\\d+%?", c = "[-\\+]?\\d*\\.\\d+%?", u = "(?:" + c + ")|(?:" + s + ")", x = "[\\s|\\(]+(" + u + ")[,|\\s]+(" + u + ")[,|\\s]+(" + u + ")\\s*\\)?", C = "[\\s|\\(]+(" + u + ")[,|\\s]+(" + u + ")[,|\\s]+(" + u + ")[,|\\s]+(" + u + ")\\s*\\)?";
      return {
        CSS_UNIT: new RegExp(u),
        rgb: new RegExp("rgb" + x),
        rgba: new RegExp("rgba" + C),
        hsl: new RegExp("hsl" + x),
        hsla: new RegExp("hsla" + C),
        hsv: new RegExp("hsv" + x),
        hsva: new RegExp("hsva" + C),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
      };
    }();
    function Q(s) {
      return !!K.CSS_UNIT.exec(s);
    }
    function Kn(s) {
      s = s.replace(n, "").replace(r, "").toLowerCase();
      var c = !1;
      if (xt[s])
        s = xt[s], c = !0;
      else if (s == "transparent")
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
      var u;
      return (u = K.rgb.exec(s)) ? { r: u[1], g: u[2], b: u[3] } : (u = K.rgba.exec(s)) ? { r: u[1], g: u[2], b: u[3], a: u[4] } : (u = K.hsl.exec(s)) ? { h: u[1], s: u[2], l: u[3] } : (u = K.hsla.exec(s)) ? { h: u[1], s: u[2], l: u[3], a: u[4] } : (u = K.hsv.exec(s)) ? { h: u[1], s: u[2], v: u[3] } : (u = K.hsva.exec(s)) ? { h: u[1], s: u[2], v: u[3], a: u[4] } : (u = K.hex8.exec(s)) ? {
        r: G(u[1]),
        g: G(u[2]),
        b: G(u[3]),
        a: pr(u[4]),
        format: c ? "name" : "hex8"
      } : (u = K.hex6.exec(s)) ? {
        r: G(u[1]),
        g: G(u[2]),
        b: G(u[3]),
        format: c ? "name" : "hex"
      } : (u = K.hex4.exec(s)) ? {
        r: G(u[1] + "" + u[1]),
        g: G(u[2] + "" + u[2]),
        b: G(u[3] + "" + u[3]),
        a: pr(u[4] + "" + u[4]),
        format: c ? "name" : "hex8"
      } : (u = K.hex3.exec(s)) ? {
        r: G(u[1] + "" + u[1]),
        g: G(u[2] + "" + u[2]),
        b: G(u[3] + "" + u[3]),
        format: c ? "name" : "hex"
      } : !1;
    }
    function qn(s) {
      var c, u;
      return s = s || { level: "AA", size: "small" }, c = (s.level || "AA").toUpperCase(), u = (s.size || "small").toLowerCase(), c !== "AA" && c !== "AAA" && (c = "AA"), u !== "small" && u !== "large" && (u = "small"), { level: c, size: u };
    }
    t.exports ? t.exports = h : window.tinycolor = h;
  })(Math);
})(_n);
const ht = _n.exports;
var Br = function(e) {
  var n = ["r", "g", "b", "a", "h", "s", "l", "v"], r = 0, a = 0;
  return ah(n, function(i) {
    if (e[i] && (r += 1, isNaN(e[i]) || (a += 1), i === "s" || i === "l")) {
      var o = /^\d+%$/;
      o.test(e[i]) && (a += 1);
    }
  }), r === a ? e : !1;
}, De = function(e, n) {
  var r = e.hex ? ht(e.hex) : ht(e), a = r.toHsl(), i = r.toHsv(), o = r.toRgb(), l = r.toHex();
  a.s === 0 && (a.h = n || 0, i.h = n || 0);
  var f = l === "000000" && o.a === 0;
  return {
    hsl: a,
    hex: f ? "transparent" : "#" + l,
    rgb: o,
    hsv: i,
    oldHue: e.h || n || a.h,
    source: e.source
  };
}, ae = function(e) {
  if (e === "transparent")
    return !0;
  var n = String(e).charAt(0) === "#" ? 1 : 0;
  return e.length !== 4 + n && e.length < 7 + n && ht(e).isValid();
}, Wt = function(e) {
  if (!e)
    return "#fff";
  var n = De(e);
  if (n.hex === "transparent")
    return "rgba(0,0,0,0.4)";
  var r = (n.rgb.r * 299 + n.rgb.g * 587 + n.rgb.b * 114) / 1e3;
  return r >= 128 ? "#000" : "#fff";
}, Rt = function(e, n) {
  var r = e.replace("\xB0", "");
  return ht(n + " (" + r + ")")._ok;
}, tt = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }
  return t;
}, ih = function() {
  function t(e, n) {
    for (var r = 0; r < n.length; r++) {
      var a = n[r];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e;
  };
}();
function oh(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function lh(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function sh(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var j = function(e) {
  var n = function(r) {
    sh(a, r);
    function a(i) {
      oh(this, a);
      var o = lh(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this));
      return o.handleChange = function(l, f) {
        var h = Br(l);
        if (h) {
          var d = De(l, l.h || o.state.oldHue);
          o.setState(d), o.props.onChangeComplete && o.debounce(o.props.onChangeComplete, d, f), o.props.onChange && o.props.onChange(d, f);
        }
      }, o.handleSwatchHover = function(l, f) {
        var h = Br(l);
        if (h) {
          var d = De(l, l.h || o.state.oldHue);
          o.props.onSwatchHover && o.props.onSwatchHover(d, f);
        }
      }, o.state = tt({}, De(i.color, 0)), o.debounce = Cn(function(l, f, h) {
        l(f, h);
      }, 100), o;
    }
    return ih(a, [{
      key: "render",
      value: function() {
        var o = {};
        return this.props.onSwatchHover && (o.onSwatchHover = this.handleSwatchHover), /* @__PURE__ */ p(e, {
          ...this.props,
          ...this.state,
          onChange: this.handleChange,
          ...o
        });
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(o, l) {
        return tt({}, De(o.color, l.oldHue));
      }
    }]), a;
  }(ze || Ue);
  return n.propTypes = tt({}, e.propTypes), n.defaultProps = tt({}, e.defaultProps, {
    color: {
      h: 250,
      s: 0.5,
      l: 0.2,
      a: 1
    }
  }), n;
}, hh = function() {
  function t(e, n) {
    for (var r = 0; r < n.length; r++) {
      var a = n[r];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e;
  };
}();
function uh(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Mr(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function ph(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var fh = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "span";
  return function(r) {
    ph(a, r);
    function a() {
      var i, o, l, f;
      uh(this, a);
      for (var h = arguments.length, d = Array(h), g = 0; g < h; g++)
        d[g] = arguments[g];
      return f = (o = (l = Mr(this, (i = a.__proto__ || Object.getPrototypeOf(a)).call.apply(i, [this].concat(d))), l), l.state = {
        focus: !1
      }, l.handleFocus = function() {
        return l.setState({
          focus: !0
        });
      }, l.handleBlur = function() {
        return l.setState({
          focus: !1
        });
      }, o), Mr(l, f);
    }
    return hh(a, [{
      key: "render",
      value: function() {
        return /* @__PURE__ */ p(n, {
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          children: /* @__PURE__ */ p(e, {
            ...this.props,
            ...this.state
          })
        });
      }
    }]), a;
  }(D.Component);
}, ch = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }
  return t;
}, dh = 13, gh = function(e) {
  var n = e.color, r = e.style, a = e.onClick, i = a === void 0 ? function() {
  } : a, o = e.onHover, l = e.title, f = l === void 0 ? n : l, h = e.children, d = e.focus, g = e.focusStyle, b = g === void 0 ? {} : g, v = n === "transparent", w = R({
    default: {
      swatch: ch({
        background: n,
        height: "100%",
        width: "100%",
        cursor: "pointer",
        position: "relative",
        outline: "none"
      }, r, d ? b : {})
    }
  }), S = function(H) {
    return i(n, H);
  }, _ = function(H) {
    return H.keyCode === dh && i(n, H);
  }, P = function(H) {
    return o(n, H);
  }, M = {};
  return o && (M.onMouseOver = P), /* @__PURE__ */ O("div", {
    style: w.swatch,
    onClick: S,
    title: f,
    tabIndex: 0,
    onKeyDown: _,
    ...M,
    children: [h, v && /* @__PURE__ */ p(Ee, {
      borderRadius: w.swatch.borderRadius,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)"
    })]
  });
};
const pe = fh(gh);
var bh = function(e) {
  var n = e.direction, r = R({
    default: {
      picker: {
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        transform: "translate(-9px, -1px)",
        backgroundColor: "rgb(248, 248, 248)",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
      }
    },
    vertical: {
      picker: {
        transform: "translate(-3px, -9px)"
      }
    }
  }, {
    vertical: n === "vertical"
  });
  return /* @__PURE__ */ p("div", {
    style: r.picker
  });
}, On = function(e) {
  var n = e.rgb, r = e.hsl, a = e.width, i = e.height, o = e.onChange, l = e.direction, f = e.style, h = e.renderers, d = e.pointer, g = e.className, b = g === void 0 ? "" : g, v = R({
    default: {
      picker: {
        position: "relative",
        width: a,
        height: i
      },
      alpha: {
        radius: "2px",
        style: f
      }
    }
  });
  return /* @__PURE__ */ p("div", {
    style: v.picker,
    className: "alpha-picker " + b,
    children: /* @__PURE__ */ p(Nt, {
      ...v.alpha,
      rgb: n,
      hsl: r,
      pointer: d,
      renderers: h,
      onChange: o,
      direction: l
    })
  });
};
On.defaultProps = {
  width: "316px",
  height: "16px",
  direction: "horizontal",
  pointer: bh
};
j(On);
function Rn(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, a = Array(r); ++n < r; )
    a[n] = e(t[n], n, t);
  return a;
}
var vh = "__lodash_hash_undefined__";
function xh(t) {
  return this.__data__.set(t, vh), this;
}
function yh(t) {
  return this.__data__.has(t);
}
function ut(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new te(); ++e < n; )
    this.add(t[e]);
}
ut.prototype.add = ut.prototype.push = xh;
ut.prototype.has = yh;
function wh(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function mh(t, e) {
  return t.has(e);
}
var Ch = 1, Sh = 2;
function An(t, e, n, r, a, i) {
  var o = n & Ch, l = t.length, f = e.length;
  if (l != f && !(o && f > l))
    return !1;
  var h = i.get(t), d = i.get(e);
  if (h && d)
    return h == e && d == t;
  var g = -1, b = !0, v = n & Sh ? new ut() : void 0;
  for (i.set(t, e), i.set(e, t); ++g < l; ) {
    var w = t[g], S = e[g];
    if (r)
      var _ = o ? r(S, w, g, e, t, i) : r(w, S, g, t, e, i);
    if (_ !== void 0) {
      if (_)
        continue;
      b = !1;
      break;
    }
    if (v) {
      if (!wh(e, function(P, M) {
        if (!mh(v, M) && (w === P || a(w, P, n, r, i)))
          return v.push(M);
      })) {
        b = !1;
        break;
      }
    } else if (!(w === S || a(w, S, n, r, i))) {
      b = !1;
      break;
    }
  }
  return i.delete(t), i.delete(e), b;
}
function _h(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, a) {
    n[++e] = [a, r];
  }), n;
}
function Oh(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var Rh = 1, Ah = 2, Th = "[object Boolean]", Ph = "[object Date]", $h = "[object Error]", Eh = "[object Map]", kh = "[object Number]", Fh = "[object RegExp]", Bh = "[object Set]", Mh = "[object String]", Hh = "[object Symbol]", Nh = "[object ArrayBuffer]", Dh = "[object DataView]", Hr = re ? re.prototype : void 0, At = Hr ? Hr.valueOf : void 0;
function Lh(t, e, n, r, a, i, o) {
  switch (n) {
    case Dh:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case Nh:
      return !(t.byteLength != e.byteLength || !i(new ot(t), new ot(e)));
    case Th:
    case Ph:
    case kh:
      return Ye(+t, +e);
    case $h:
      return t.name == e.name && t.message == e.message;
    case Fh:
    case Mh:
      return t == e + "";
    case Eh:
      var l = _h;
    case Bh:
      var f = r & Rh;
      if (l || (l = Oh), t.size != e.size && !f)
        return !1;
      var h = o.get(t);
      if (h)
        return h == e;
      r |= Ah, o.set(t, e);
      var d = An(l(t), l(e), r, a, i, o);
      return o.delete(t), d;
    case Hh:
      if (At)
        return At.call(t) == At.call(e);
  }
  return !1;
}
function jh(t, e) {
  for (var n = -1, r = e.length, a = t.length; ++n < r; )
    t[a + n] = e[n];
  return t;
}
function Ih(t, e, n) {
  var r = e(t);
  return z(t) ? r : jh(r, n(t));
}
function Gh(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, a = 0, i = []; ++n < r; ) {
    var o = t[n];
    e(o, n, t) && (i[a++] = o);
  }
  return i;
}
function zh() {
  return [];
}
var Uh = Object.prototype, Wh = Uh.propertyIsEnumerable, Nr = Object.getOwnPropertySymbols, Vh = Nr ? function(t) {
  return t == null ? [] : (t = Object(t), Gh(Nr(t), function(e) {
    return Wh.call(t, e);
  }));
} : zh;
const Xh = Vh;
function Dr(t) {
  return Ih(t, Ut, Xh);
}
var Kh = 1, qh = Object.prototype, Yh = qh.hasOwnProperty;
function Zh(t, e, n, r, a, i) {
  var o = n & Kh, l = Dr(t), f = l.length, h = Dr(e), d = h.length;
  if (f != d && !o)
    return !1;
  for (var g = f; g--; ) {
    var b = l[g];
    if (!(o ? b in e : Yh.call(e, b)))
      return !1;
  }
  var v = i.get(t), w = i.get(e);
  if (v && w)
    return v == e && w == t;
  var S = !0;
  i.set(t, e), i.set(e, t);
  for (var _ = o; ++g < f; ) {
    b = l[g];
    var P = t[b], M = e[b];
    if (r)
      var I = o ? r(M, P, b, e, t, i) : r(P, M, b, t, e, i);
    if (!(I === void 0 ? P === M || a(P, M, n, r, i) : I)) {
      S = !1;
      break;
    }
    _ || (_ = b == "constructor");
  }
  if (S && !_) {
    var H = t.constructor, N = e.constructor;
    H != N && "constructor" in t && "constructor" in e && !(typeof H == "function" && H instanceof H && typeof N == "function" && N instanceof N) && (S = !1);
  }
  return i.delete(t), i.delete(e), S;
}
var Jh = ue(Y, "DataView");
const $t = Jh;
var Qh = ue(Y, "Promise");
const Et = Qh;
var eu = ue(Y, "Set");
const kt = eu;
var tu = ue(Y, "WeakMap");
const Ft = tu;
var Lr = "[object Map]", ru = "[object Object]", jr = "[object Promise]", Ir = "[object Set]", Gr = "[object WeakMap]", zr = "[object DataView]", nu = he($t), au = he(Ie), iu = he(Et), ou = he(kt), lu = he(Ft), oe = se;
($t && oe(new $t(new ArrayBuffer(1))) != zr || Ie && oe(new Ie()) != Lr || Et && oe(Et.resolve()) != jr || kt && oe(new kt()) != Ir || Ft && oe(new Ft()) != Gr) && (oe = function(t) {
  var e = se(t), n = e == ru ? t.constructor : void 0, r = n ? he(n) : "";
  if (r)
    switch (r) {
      case nu:
        return zr;
      case au:
        return Lr;
      case iu:
        return jr;
      case ou:
        return Ir;
      case lu:
        return Gr;
    }
  return e;
});
const Ur = oe;
var su = 1, Wr = "[object Arguments]", Vr = "[object Array]", rt = "[object Object]", hu = Object.prototype, Xr = hu.hasOwnProperty;
function uu(t, e, n, r, a, i) {
  var o = z(t), l = z(e), f = o ? Vr : Ur(t), h = l ? Vr : Ur(e);
  f = f == Wr ? rt : f, h = h == Wr ? rt : h;
  var d = f == rt, g = h == rt, b = f == h;
  if (b && st(t)) {
    if (!st(e))
      return !1;
    o = !0, d = !1;
  }
  if (b && !d)
    return i || (i = new J()), o || Gt(t) ? An(t, e, n, r, a, i) : Lh(t, e, f, n, r, a, i);
  if (!(n & su)) {
    var v = d && Xr.call(t, "__wrapped__"), w = g && Xr.call(e, "__wrapped__");
    if (v || w) {
      var S = v ? t.value() : t, _ = w ? e.value() : e;
      return i || (i = new J()), a(S, _, n, r, i);
    }
  }
  return b ? (i || (i = new J()), Zh(t, e, n, r, a, i)) : !1;
}
function Vt(t, e, n, r, a) {
  return t === e ? !0 : t == null || e == null || !ne(t) && !ne(e) ? t !== t && e !== e : uu(t, e, n, r, Vt, a);
}
var pu = 1, fu = 2;
function cu(t, e, n, r) {
  var a = n.length, i = a, o = !r;
  if (t == null)
    return !i;
  for (t = Object(t); a--; ) {
    var l = n[a];
    if (o && l[2] ? l[1] !== t[l[0]] : !(l[0] in t))
      return !1;
  }
  for (; ++a < i; ) {
    l = n[a];
    var f = l[0], h = t[f], d = l[1];
    if (o && l[2]) {
      if (h === void 0 && !(f in t))
        return !1;
    } else {
      var g = new J();
      if (r)
        var b = r(h, d, f, t, e, g);
      if (!(b === void 0 ? Vt(d, h, pu | fu, r, g) : b))
        return !1;
    }
  }
  return !0;
}
function Tn(t) {
  return t === t && !V(t);
}
function du(t) {
  for (var e = Ut(t), n = e.length; n--; ) {
    var r = e[n], a = t[r];
    e[n] = [r, a, Tn(a)];
  }
  return e;
}
function Pn(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function gu(t) {
  var e = du(t);
  return e.length == 1 && e[0][2] ? Pn(e[0][0], e[0][1]) : function(n) {
    return n === t || cu(n, t, e);
  };
}
var bu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, vu = /^\w*$/;
function Xt(t, e) {
  if (z(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || gt(t) ? !0 : vu.test(t) || !bu.test(t) || e != null && t in Object(e);
}
var xu = "Expected a function";
function Kt(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(xu);
  var n = function() {
    var r = arguments, a = e ? e.apply(this, r) : r[0], i = n.cache;
    if (i.has(a))
      return i.get(a);
    var o = t.apply(this, r);
    return n.cache = i.set(a, o) || i, o;
  };
  return n.cache = new (Kt.Cache || te)(), n;
}
Kt.Cache = te;
var yu = 500;
function wu(t) {
  var e = Kt(t, function(r) {
    return n.size === yu && n.clear(), r;
  }), n = e.cache;
  return e;
}
var mu = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Cu = /\\(\\)?/g, Su = wu(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(mu, function(n, r, a, i) {
    e.push(a ? i.replace(Cu, "$1") : r || n);
  }), e;
});
const _u = Su;
var Ou = 1 / 0, Kr = re ? re.prototype : void 0, qr = Kr ? Kr.toString : void 0;
function $n(t) {
  if (typeof t == "string")
    return t;
  if (z(t))
    return Rn(t, $n) + "";
  if (gt(t))
    return qr ? qr.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -Ou ? "-0" : e;
}
function Ru(t) {
  return t == null ? "" : $n(t);
}
function En(t, e) {
  return z(t) ? t : Xt(t, e) ? [t] : _u(Ru(t));
}
var Au = 1 / 0;
function vt(t) {
  if (typeof t == "string" || gt(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -Au ? "-0" : e;
}
function kn(t, e) {
  e = En(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[vt(e[n++])];
  return n && n == r ? t : void 0;
}
function Tu(t, e, n) {
  var r = t == null ? void 0 : kn(t, e);
  return r === void 0 ? n : r;
}
function Pu(t, e) {
  return t != null && e in Object(t);
}
function $u(t, e, n) {
  e = En(e, t);
  for (var r = -1, a = e.length, i = !1; ++r < a; ) {
    var o = vt(e[r]);
    if (!(i = t != null && n(t, o)))
      break;
    t = t[o];
  }
  return i || ++r != a ? i : (a = t == null ? 0 : t.length, !!a && It(a) && zt(o, a) && (z(t) || lt(t)));
}
function Eu(t, e) {
  return t != null && $u(t, e, Pu);
}
var ku = 1, Fu = 2;
function Bu(t, e) {
  return Xt(t) && Tn(e) ? Pn(vt(t), e) : function(n) {
    var r = Tu(n, t);
    return r === void 0 && r === e ? Eu(n, t) : Vt(e, r, ku | Fu);
  };
}
function Mu(t) {
  return function(e) {
    return e == null ? void 0 : e[t];
  };
}
function Hu(t) {
  return function(e) {
    return kn(e, t);
  };
}
function Nu(t) {
  return Xt(t) ? Mu(vt(t)) : Hu(t);
}
function Du(t) {
  return typeof t == "function" ? t : t == null ? dt : typeof t == "object" ? z(t) ? Bu(t[0], t[1]) : gu(t) : Nu(t);
}
function Lu(t, e) {
  var n = -1, r = Fe(t) ? Array(t.length) : [];
  return Sn(t, function(a, i, o) {
    r[++n] = e(a, i, o);
  }), r;
}
function fe(t, e) {
  var n = z(t) ? Rn : Lu;
  return n(t, Du(e));
}
var ju = function(e) {
  var n = e.colors, r = e.onClick, a = e.onSwatchHover, i = R({
    default: {
      swatches: {
        marginRight: "-10px"
      },
      swatch: {
        width: "22px",
        height: "22px",
        float: "left",
        marginRight: "10px",
        marginBottom: "10px",
        borderRadius: "4px"
      },
      clear: {
        clear: "both"
      }
    }
  });
  return /* @__PURE__ */ O("div", {
    style: i.swatches,
    children: [fe(n, function(o) {
      return /* @__PURE__ */ p(pe, {
        color: o,
        style: i.swatch,
        onClick: r,
        onHover: a,
        focusStyle: {
          boxShadow: "0 0 4px " + o
        }
      }, o);
    }), /* @__PURE__ */ p("div", {
      style: i.clear
    })]
  });
}, qt = function(e) {
  var n = e.onChange, r = e.onSwatchHover, a = e.hex, i = e.colors, o = e.width, l = e.triangle, f = e.styles, h = f === void 0 ? {} : f, d = e.className, g = d === void 0 ? "" : d, b = a === "transparent", v = function(_, P) {
    ae(_) && n({
      hex: _,
      source: "hex"
    }, P);
  }, w = R(L({
    default: {
      card: {
        width: o,
        background: "#fff",
        boxShadow: "0 1px rgba(0,0,0,.1)",
        borderRadius: "6px",
        position: "relative"
      },
      head: {
        height: "110px",
        background: a,
        borderRadius: "6px 6px 0 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
      },
      body: {
        padding: "10px"
      },
      label: {
        fontSize: "18px",
        color: Wt(a),
        position: "relative"
      },
      triangle: {
        width: "0px",
        height: "0px",
        borderStyle: "solid",
        borderWidth: "0 10px 10px 10px",
        borderColor: "transparent transparent " + a + " transparent",
        position: "absolute",
        top: "-10px",
        left: "50%",
        marginLeft: "-10px"
      },
      input: {
        width: "100%",
        fontSize: "12px",
        color: "#666",
        border: "0px",
        outline: "none",
        height: "22px",
        boxShadow: "inset 0 0 0 1px #ddd",
        borderRadius: "4px",
        padding: "0 7px",
        boxSizing: "border-box"
      }
    },
    "hide-triangle": {
      triangle: {
        display: "none"
      }
    }
  }, h), {
    "hide-triangle": l === "hide"
  });
  return /* @__PURE__ */ O("div", {
    style: w.card,
    className: "block-picker " + g,
    children: [/* @__PURE__ */ p("div", {
      style: w.triangle
    }), /* @__PURE__ */ O("div", {
      style: w.head,
      children: [b && /* @__PURE__ */ p(Ee, {
        borderRadius: "6px 6px 0 0"
      }), /* @__PURE__ */ p("div", {
        style: w.label,
        children: a
      })]
    }), /* @__PURE__ */ O("div", {
      style: w.body,
      children: [/* @__PURE__ */ p(ju, {
        colors: i,
        onClick: v,
        onSwatchHover: r
      }), /* @__PURE__ */ p(T, {
        style: {
          input: w.input
        },
        value: a,
        onChange: v
      })]
    })]
  });
};
qt.propTypes = {
  width: y.exports.oneOfType([y.exports.string, y.exports.number]),
  colors: y.exports.arrayOf(y.exports.string),
  triangle: y.exports.oneOf(["top", "hide"]),
  styles: y.exports.object
};
qt.defaultProps = {
  width: 170,
  colors: ["#D9E3F0", "#F47373", "#697689", "#37D67A", "#2CCCE4", "#555555", "#dce775", "#ff8a65", "#ba68c8"],
  triangle: "top",
  styles: {}
};
j(qt);
var ce = { 50: "#ffebee", 100: "#ffcdd2", 200: "#ef9a9a", 300: "#e57373", 400: "#ef5350", 500: "#f44336", 600: "#e53935", 700: "#d32f2f", 800: "#c62828", 900: "#b71c1c", a100: "#ff8a80", a200: "#ff5252", a400: "#ff1744", a700: "#d50000" }, de = { 50: "#fce4ec", 100: "#f8bbd0", 200: "#f48fb1", 300: "#f06292", 400: "#ec407a", 500: "#e91e63", 600: "#d81b60", 700: "#c2185b", 800: "#ad1457", 900: "#880e4f", a100: "#ff80ab", a200: "#ff4081", a400: "#f50057", a700: "#c51162" }, ge = { 50: "#f3e5f5", 100: "#e1bee7", 200: "#ce93d8", 300: "#ba68c8", 400: "#ab47bc", 500: "#9c27b0", 600: "#8e24aa", 700: "#7b1fa2", 800: "#6a1b9a", 900: "#4a148c", a100: "#ea80fc", a200: "#e040fb", a400: "#d500f9", a700: "#aa00ff" }, be = { 50: "#ede7f6", 100: "#d1c4e9", 200: "#b39ddb", 300: "#9575cd", 400: "#7e57c2", 500: "#673ab7", 600: "#5e35b1", 700: "#512da8", 800: "#4527a0", 900: "#311b92", a100: "#b388ff", a200: "#7c4dff", a400: "#651fff", a700: "#6200ea" }, ve = { 50: "#e8eaf6", 100: "#c5cae9", 200: "#9fa8da", 300: "#7986cb", 400: "#5c6bc0", 500: "#3f51b5", 600: "#3949ab", 700: "#303f9f", 800: "#283593", 900: "#1a237e", a100: "#8c9eff", a200: "#536dfe", a400: "#3d5afe", a700: "#304ffe" }, xe = { 50: "#e3f2fd", 100: "#bbdefb", 200: "#90caf9", 300: "#64b5f6", 400: "#42a5f5", 500: "#2196f3", 600: "#1e88e5", 700: "#1976d2", 800: "#1565c0", 900: "#0d47a1", a100: "#82b1ff", a200: "#448aff", a400: "#2979ff", a700: "#2962ff" }, ye = { 50: "#e1f5fe", 100: "#b3e5fc", 200: "#81d4fa", 300: "#4fc3f7", 400: "#29b6f6", 500: "#03a9f4", 600: "#039be5", 700: "#0288d1", 800: "#0277bd", 900: "#01579b", a100: "#80d8ff", a200: "#40c4ff", a400: "#00b0ff", a700: "#0091ea" }, we = { 50: "#e0f7fa", 100: "#b2ebf2", 200: "#80deea", 300: "#4dd0e1", 400: "#26c6da", 500: "#00bcd4", 600: "#00acc1", 700: "#0097a7", 800: "#00838f", 900: "#006064", a100: "#84ffff", a200: "#18ffff", a400: "#00e5ff", a700: "#00b8d4" }, me = { 50: "#e0f2f1", 100: "#b2dfdb", 200: "#80cbc4", 300: "#4db6ac", 400: "#26a69a", 500: "#009688", 600: "#00897b", 700: "#00796b", 800: "#00695c", 900: "#004d40", a100: "#a7ffeb", a200: "#64ffda", a400: "#1de9b6", a700: "#00bfa5" }, Le = { 50: "#e8f5e9", 100: "#c8e6c9", 200: "#a5d6a7", 300: "#81c784", 400: "#66bb6a", 500: "#4caf50", 600: "#43a047", 700: "#388e3c", 800: "#2e7d32", 900: "#1b5e20", a100: "#b9f6ca", a200: "#69f0ae", a400: "#00e676", a700: "#00c853" }, Ce = { 50: "#f1f8e9", 100: "#dcedc8", 200: "#c5e1a5", 300: "#aed581", 400: "#9ccc65", 500: "#8bc34a", 600: "#7cb342", 700: "#689f38", 800: "#558b2f", 900: "#33691e", a100: "#ccff90", a200: "#b2ff59", a400: "#76ff03", a700: "#64dd17" }, Se = { 50: "#f9fbe7", 100: "#f0f4c3", 200: "#e6ee9c", 300: "#dce775", 400: "#d4e157", 500: "#cddc39", 600: "#c0ca33", 700: "#afb42b", 800: "#9e9d24", 900: "#827717", a100: "#f4ff81", a200: "#eeff41", a400: "#c6ff00", a700: "#aeea00" }, _e = { 50: "#fffde7", 100: "#fff9c4", 200: "#fff59d", 300: "#fff176", 400: "#ffee58", 500: "#ffeb3b", 600: "#fdd835", 700: "#fbc02d", 800: "#f9a825", 900: "#f57f17", a100: "#ffff8d", a200: "#ffff00", a400: "#ffea00", a700: "#ffd600" }, Oe = { 50: "#fff8e1", 100: "#ffecb3", 200: "#ffe082", 300: "#ffd54f", 400: "#ffca28", 500: "#ffc107", 600: "#ffb300", 700: "#ffa000", 800: "#ff8f00", 900: "#ff6f00", a100: "#ffe57f", a200: "#ffd740", a400: "#ffc400", a700: "#ffab00" }, Re = { 50: "#fff3e0", 100: "#ffe0b2", 200: "#ffcc80", 300: "#ffb74d", 400: "#ffa726", 500: "#ff9800", 600: "#fb8c00", 700: "#f57c00", 800: "#ef6c00", 900: "#e65100", a100: "#ffd180", a200: "#ffab40", a400: "#ff9100", a700: "#ff6d00" }, Ae = { 50: "#fbe9e7", 100: "#ffccbc", 200: "#ffab91", 300: "#ff8a65", 400: "#ff7043", 500: "#ff5722", 600: "#f4511e", 700: "#e64a19", 800: "#d84315", 900: "#bf360c", a100: "#ff9e80", a200: "#ff6e40", a400: "#ff3d00", a700: "#dd2c00" }, Te = { 50: "#efebe9", 100: "#d7ccc8", 200: "#bcaaa4", 300: "#a1887f", 400: "#8d6e63", 500: "#795548", 600: "#6d4c41", 700: "#5d4037", 800: "#4e342e", 900: "#3e2723" }, Pe = { 50: "#eceff1", 100: "#cfd8dc", 200: "#b0bec5", 300: "#90a4ae", 400: "#78909c", 500: "#607d8b", 600: "#546e7a", 700: "#455a64", 800: "#37474f", 900: "#263238" }, Fn = function(e) {
  var n = e.color, r = e.onClick, a = e.onSwatchHover, i = e.hover, o = e.active, l = e.circleSize, f = e.circleSpacing, h = R({
    default: {
      swatch: {
        width: l,
        height: l,
        marginRight: f,
        marginBottom: f,
        transform: "scale(1)",
        transition: "100ms transform ease"
      },
      Swatch: {
        borderRadius: "50%",
        background: "transparent",
        boxShadow: "inset 0 0 0 " + (l / 2 + 1) + "px " + n,
        transition: "100ms box-shadow ease"
      }
    },
    hover: {
      swatch: {
        transform: "scale(1.2)"
      }
    },
    active: {
      Swatch: {
        boxShadow: "inset 0 0 0 3px " + n
      }
    }
  }, {
    hover: i,
    active: o
  });
  return /* @__PURE__ */ p("div", {
    style: h.swatch,
    children: /* @__PURE__ */ p(pe, {
      style: h.Swatch,
      color: n,
      onClick: r,
      onHover: a,
      focusStyle: {
        boxShadow: h.Swatch.boxShadow + ", 0 0 5px " + n
      }
    })
  });
};
Fn.defaultProps = {
  circleSize: 28,
  circleSpacing: 14
};
const Iu = Ht(Fn);
var Yt = function(e) {
  var n = e.width, r = e.onChange, a = e.onSwatchHover, i = e.colors, o = e.hex, l = e.circleSize, f = e.styles, h = f === void 0 ? {} : f, d = e.circleSpacing, g = e.className, b = g === void 0 ? "" : g, v = R(L({
    default: {
      card: {
        width: n,
        display: "flex",
        flexWrap: "wrap",
        marginRight: -d,
        marginBottom: -d
      }
    }
  }, h)), w = function(_, P) {
    return r({
      hex: _,
      source: "hex"
    }, P);
  };
  return /* @__PURE__ */ p("div", {
    style: v.card,
    className: "circle-picker " + b,
    children: fe(i, function(S) {
      return /* @__PURE__ */ p(Iu, {
        color: S,
        onClick: w,
        onSwatchHover: a,
        active: o === S.toLowerCase(),
        circleSize: l,
        circleSpacing: d
      }, S);
    })
  });
};
Yt.propTypes = {
  width: y.exports.oneOfType([y.exports.string, y.exports.number]),
  circleSize: y.exports.number,
  circleSpacing: y.exports.number,
  styles: y.exports.object
};
Yt.defaultProps = {
  width: 252,
  circleSize: 28,
  circleSpacing: 14,
  colors: [ce[500], de[500], ge[500], be[500], ve[500], xe[500], ye[500], we[500], me[500], Le[500], Ce[500], Se[500], _e[500], Oe[500], Re[500], Ae[500], Te[500], Pe[500]],
  styles: {}
};
j(Yt);
function Yr(t) {
  return t === void 0;
}
var Bn = {};
Object.defineProperty(Bn, "__esModule", {
  value: !0
});
var Zr = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }
  return t;
}, Gu = D, Jr = zu(Gu);
function zu(t) {
  return t && t.__esModule ? t : { default: t };
}
function Uu(t, e) {
  var n = {};
  for (var r in t)
    e.indexOf(r) >= 0 || !Object.prototype.hasOwnProperty.call(t, r) || (n[r] = t[r]);
  return n;
}
var nt = 24, Wu = Bn.default = function(t) {
  var e = t.fill, n = e === void 0 ? "currentColor" : e, r = t.width, a = r === void 0 ? nt : r, i = t.height, o = i === void 0 ? nt : i, l = t.style, f = l === void 0 ? {} : l, h = Uu(t, ["fill", "width", "height", "style"]);
  return Jr.default.createElement(
    "svg",
    Zr({
      viewBox: "0 0 " + nt + " " + nt,
      style: Zr({ fill: n, width: a, height: o }, f)
    }, h),
    Jr.default.createElement("path", { d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z" })
  );
}, Vu = function() {
  function t(e, n) {
    for (var r = 0; r < n.length; r++) {
      var a = n[r];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e;
  };
}();
function Xu(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ku(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function qu(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Mn = function(t) {
  qu(e, t);
  function e(n) {
    Xu(this, e);
    var r = Ku(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
    return r.toggleViews = function() {
      r.state.view === "hex" ? r.setState({
        view: "rgb"
      }) : r.state.view === "rgb" ? r.setState({
        view: "hsl"
      }) : r.state.view === "hsl" && (r.props.hsl.a === 1 ? r.setState({
        view: "hex"
      }) : r.setState({
        view: "rgb"
      }));
    }, r.handleChange = function(a, i) {
      a.hex ? ae(a.hex) && r.props.onChange({
        hex: a.hex,
        source: "hex"
      }, i) : a.r || a.g || a.b ? r.props.onChange({
        r: a.r || r.props.rgb.r,
        g: a.g || r.props.rgb.g,
        b: a.b || r.props.rgb.b,
        source: "rgb"
      }, i) : a.a ? (a.a < 0 ? a.a = 0 : a.a > 1 && (a.a = 1), r.props.onChange({
        h: r.props.hsl.h,
        s: r.props.hsl.s,
        l: r.props.hsl.l,
        a: Math.round(a.a * 100) / 100,
        source: "rgb"
      }, i)) : (a.h || a.s || a.l) && (typeof a.s == "string" && a.s.includes("%") && (a.s = a.s.replace("%", "")), typeof a.l == "string" && a.l.includes("%") && (a.l = a.l.replace("%", "")), a.s == 1 ? a.s = 0.01 : a.l == 1 && (a.l = 0.01), r.props.onChange({
        h: a.h || r.props.hsl.h,
        s: Number(Yr(a.s) ? r.props.hsl.s : a.s),
        l: Number(Yr(a.l) ? r.props.hsl.l : a.l),
        source: "hsl"
      }, i));
    }, r.showHighlight = function(a) {
      a.currentTarget.style.background = "#eee";
    }, r.hideHighlight = function(a) {
      a.currentTarget.style.background = "transparent";
    }, n.hsl.a !== 1 && n.view === "hex" ? r.state = {
      view: "rgb"
    } : r.state = {
      view: n.view
    }, r;
  }
  return Vu(e, [{
    key: "render",
    value: function() {
      var r = this, a = R({
        default: {
          wrap: {
            paddingTop: "16px",
            display: "flex"
          },
          fields: {
            flex: "1",
            display: "flex",
            marginLeft: "-6px"
          },
          field: {
            paddingLeft: "6px",
            width: "100%"
          },
          alpha: {
            paddingLeft: "6px",
            width: "100%"
          },
          toggle: {
            width: "32px",
            textAlign: "right",
            position: "relative"
          },
          icon: {
            marginRight: "-4px",
            marginTop: "12px",
            cursor: "pointer",
            position: "relative"
          },
          iconHighlight: {
            position: "absolute",
            width: "24px",
            height: "28px",
            background: "#eee",
            borderRadius: "4px",
            top: "10px",
            left: "12px",
            display: "none"
          },
          input: {
            fontSize: "11px",
            color: "#333",
            width: "100%",
            borderRadius: "2px",
            border: "none",
            boxShadow: "inset 0 0 0 1px #dadada",
            height: "21px",
            textAlign: "center"
          },
          label: {
            textTransform: "uppercase",
            fontSize: "11px",
            lineHeight: "11px",
            color: "#969696",
            textAlign: "center",
            display: "block",
            marginTop: "12px"
          },
          svg: {
            fill: "#333",
            width: "24px",
            height: "24px",
            border: "1px transparent solid",
            borderRadius: "5px"
          }
        },
        disableAlpha: {
          alpha: {
            display: "none"
          }
        }
      }, this.props, this.state), i = void 0;
      return this.state.view === "hex" ? i = /* @__PURE__ */ p("div", {
        style: a.fields,
        className: "flexbox-fix",
        children: /* @__PURE__ */ p("div", {
          style: a.field,
          children: /* @__PURE__ */ p(T, {
            style: {
              input: a.input,
              label: a.label
            },
            label: "hex",
            value: this.props.hex,
            onChange: this.handleChange
          })
        })
      }) : this.state.view === "rgb" ? i = /* @__PURE__ */ O("div", {
        style: a.fields,
        className: "flexbox-fix",
        children: [/* @__PURE__ */ p("div", {
          style: a.field,
          children: /* @__PURE__ */ p(T, {
            style: {
              input: a.input,
              label: a.label
            },
            label: "r",
            value: this.props.rgb.r,
            onChange: this.handleChange
          })
        }), /* @__PURE__ */ p("div", {
          style: a.field,
          children: /* @__PURE__ */ p(T, {
            style: {
              input: a.input,
              label: a.label
            },
            label: "g",
            value: this.props.rgb.g,
            onChange: this.handleChange
          })
        }), /* @__PURE__ */ p("div", {
          style: a.field,
          children: /* @__PURE__ */ p(T, {
            style: {
              input: a.input,
              label: a.label
            },
            label: "b",
            value: this.props.rgb.b,
            onChange: this.handleChange
          })
        }), /* @__PURE__ */ p("div", {
          style: a.alpha,
          children: /* @__PURE__ */ p(T, {
            style: {
              input: a.input,
              label: a.label
            },
            label: "a",
            value: this.props.rgb.a,
            arrowOffset: 0.01,
            onChange: this.handleChange
          })
        })]
      }) : this.state.view === "hsl" && (i = /* @__PURE__ */ O("div", {
        style: a.fields,
        className: "flexbox-fix",
        children: [/* @__PURE__ */ p("div", {
          style: a.field,
          children: /* @__PURE__ */ p(T, {
            style: {
              input: a.input,
              label: a.label
            },
            label: "h",
            value: Math.round(this.props.hsl.h),
            onChange: this.handleChange
          })
        }), /* @__PURE__ */ p("div", {
          style: a.field,
          children: /* @__PURE__ */ p(T, {
            style: {
              input: a.input,
              label: a.label
            },
            label: "s",
            value: Math.round(this.props.hsl.s * 100) + "%",
            onChange: this.handleChange
          })
        }), /* @__PURE__ */ p("div", {
          style: a.field,
          children: /* @__PURE__ */ p(T, {
            style: {
              input: a.input,
              label: a.label
            },
            label: "l",
            value: Math.round(this.props.hsl.l * 100) + "%",
            onChange: this.handleChange
          })
        }), /* @__PURE__ */ p("div", {
          style: a.alpha,
          children: /* @__PURE__ */ p(T, {
            style: {
              input: a.input,
              label: a.label
            },
            label: "a",
            value: this.props.hsl.a,
            arrowOffset: 0.01,
            onChange: this.handleChange
          })
        })]
      })), /* @__PURE__ */ O("div", {
        style: a.wrap,
        className: "flexbox-fix",
        children: [i, /* @__PURE__ */ p("div", {
          style: a.toggle,
          children: /* @__PURE__ */ p("div", {
            style: a.icon,
            onClick: this.toggleViews,
            ref: function(l) {
              return r.icon = l;
            },
            children: /* @__PURE__ */ p(Wu, {
              style: a.svg,
              onMouseOver: this.showHighlight,
              onMouseEnter: this.showHighlight,
              onMouseOut: this.hideHighlight
            })
          })
        })]
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(r, a) {
      return r.hsl.a !== 1 && a.view === "hex" ? {
        view: "rgb"
      } : null;
    }
  }]), e;
}(D.Component);
Mn.defaultProps = {
  view: "hex"
};
var Qr = function() {
  var e = R({
    default: {
      picker: {
        width: "12px",
        height: "12px",
        borderRadius: "6px",
        transform: "translate(-6px, -1px)",
        backgroundColor: "rgb(248, 248, 248)",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
      }
    }
  });
  return /* @__PURE__ */ p("div", {
    style: e.picker
  });
}, Yu = function() {
  var e = R({
    default: {
      picker: {
        width: "12px",
        height: "12px",
        borderRadius: "6px",
        boxShadow: "inset 0 0 0 1px #fff",
        transform: "translate(-6px, -6px)"
      }
    }
  });
  return /* @__PURE__ */ p("div", {
    style: e.picker
  });
}, Zt = function(e) {
  var n = e.width, r = e.onChange, a = e.disableAlpha, i = e.rgb, o = e.hsl, l = e.hsv, f = e.hex, h = e.renderers, d = e.styles, g = d === void 0 ? {} : d, b = e.className, v = b === void 0 ? "" : b, w = e.defaultView, S = R(L({
    default: {
      picker: {
        width: n,
        background: "#fff",
        borderRadius: "2px",
        boxShadow: "0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)",
        boxSizing: "initial",
        fontFamily: "Menlo"
      },
      saturation: {
        width: "100%",
        paddingBottom: "55%",
        position: "relative",
        borderRadius: "2px 2px 0 0",
        overflow: "hidden"
      },
      Saturation: {
        radius: "2px 2px 0 0"
      },
      body: {
        padding: "16px 16px 12px"
      },
      controls: {
        display: "flex"
      },
      color: {
        width: "32px"
      },
      swatch: {
        marginTop: "6px",
        width: "16px",
        height: "16px",
        borderRadius: "8px",
        position: "relative",
        overflow: "hidden"
      },
      active: {
        absolute: "0px 0px 0px 0px",
        borderRadius: "8px",
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
        background: "rgba(" + i.r + ", " + i.g + ", " + i.b + ", " + i.a + ")",
        zIndex: "2"
      },
      toggles: {
        flex: "1"
      },
      hue: {
        height: "10px",
        position: "relative",
        marginBottom: "8px"
      },
      Hue: {
        radius: "2px"
      },
      alpha: {
        height: "10px",
        position: "relative"
      },
      Alpha: {
        radius: "2px"
      }
    },
    disableAlpha: {
      color: {
        width: "22px"
      },
      alpha: {
        display: "none"
      },
      hue: {
        marginBottom: "0px"
      },
      swatch: {
        width: "10px",
        height: "10px",
        marginTop: "0px"
      }
    }
  }, g), {
    disableAlpha: a
  });
  return /* @__PURE__ */ O("div", {
    style: S.picker,
    className: "chrome-picker " + v,
    children: [/* @__PURE__ */ p("div", {
      style: S.saturation,
      children: /* @__PURE__ */ p(bt, {
        style: S.Saturation,
        hsl: o,
        hsv: l,
        pointer: Yu,
        onChange: r
      })
    }), /* @__PURE__ */ O("div", {
      style: S.body,
      children: [/* @__PURE__ */ O("div", {
        style: S.controls,
        className: "flexbox-fix",
        children: [/* @__PURE__ */ p("div", {
          style: S.color,
          children: /* @__PURE__ */ O("div", {
            style: S.swatch,
            children: [/* @__PURE__ */ p("div", {
              style: S.active
            }), /* @__PURE__ */ p(Ee, {
              renderers: h
            })]
          })
        }), /* @__PURE__ */ O("div", {
          style: S.toggles,
          children: [/* @__PURE__ */ p("div", {
            style: S.hue,
            children: /* @__PURE__ */ p(ke, {
              style: S.Hue,
              hsl: o,
              pointer: Qr,
              onChange: r
            })
          }), /* @__PURE__ */ p("div", {
            style: S.alpha,
            children: /* @__PURE__ */ p(Nt, {
              style: S.Alpha,
              rgb: i,
              hsl: o,
              pointer: Qr,
              renderers: h,
              onChange: r
            })
          })]
        })]
      }), /* @__PURE__ */ p(Mn, {
        rgb: i,
        hsl: o,
        hex: f,
        view: w,
        onChange: r,
        disableAlpha: a
      })]
    })]
  });
};
Zt.propTypes = {
  width: y.exports.oneOfType([y.exports.string, y.exports.number]),
  disableAlpha: y.exports.bool,
  styles: y.exports.object,
  defaultView: y.exports.oneOf(["hex", "rgb", "hsl"])
};
Zt.defaultProps = {
  width: 225,
  disableAlpha: !1,
  styles: {}
};
j(Zt);
var Zu = function(e) {
  var n = e.color, r = e.onClick, a = r === void 0 ? function() {
  } : r, i = e.onSwatchHover, o = e.active, l = R({
    default: {
      color: {
        background: n,
        width: "15px",
        height: "15px",
        float: "left",
        marginRight: "5px",
        marginBottom: "5px",
        position: "relative",
        cursor: "pointer"
      },
      dot: {
        absolute: "5px 5px 5px 5px",
        background: Wt(n),
        borderRadius: "50%",
        opacity: "0"
      }
    },
    active: {
      dot: {
        opacity: "1"
      }
    },
    "color-#FFFFFF": {
      color: {
        boxShadow: "inset 0 0 0 1px #ddd"
      },
      dot: {
        background: "#000"
      }
    },
    transparent: {
      dot: {
        background: "#000"
      }
    }
  }, {
    active: o,
    "color-#FFFFFF": n === "#FFFFFF",
    transparent: n === "transparent"
  });
  return /* @__PURE__ */ p(pe, {
    style: l.color,
    color: n,
    onClick: a,
    onHover: i,
    focusStyle: {
      boxShadow: "0 0 4px " + n
    },
    children: /* @__PURE__ */ p("div", {
      style: l.dot
    })
  });
}, Ju = function(e) {
  var n = e.hex, r = e.rgb, a = e.onChange, i = R({
    default: {
      fields: {
        display: "flex",
        paddingBottom: "6px",
        paddingRight: "5px",
        position: "relative"
      },
      active: {
        position: "absolute",
        top: "6px",
        left: "5px",
        height: "9px",
        width: "9px",
        background: n
      },
      HEXwrap: {
        flex: "6",
        position: "relative"
      },
      HEXinput: {
        width: "80%",
        padding: "0px",
        paddingLeft: "20%",
        border: "none",
        outline: "none",
        background: "none",
        fontSize: "12px",
        color: "#333",
        height: "16px"
      },
      HEXlabel: {
        display: "none"
      },
      RGBwrap: {
        flex: "3",
        position: "relative"
      },
      RGBinput: {
        width: "70%",
        padding: "0px",
        paddingLeft: "30%",
        border: "none",
        outline: "none",
        background: "none",
        fontSize: "12px",
        color: "#333",
        height: "16px"
      },
      RGBlabel: {
        position: "absolute",
        top: "3px",
        left: "0px",
        lineHeight: "16px",
        textTransform: "uppercase",
        fontSize: "12px",
        color: "#999"
      }
    }
  }), o = function(f, h) {
    f.r || f.g || f.b ? a({
      r: f.r || r.r,
      g: f.g || r.g,
      b: f.b || r.b,
      source: "rgb"
    }, h) : a({
      hex: f.hex,
      source: "hex"
    }, h);
  };
  return /* @__PURE__ */ O("div", {
    style: i.fields,
    className: "flexbox-fix",
    children: [/* @__PURE__ */ p("div", {
      style: i.active
    }), /* @__PURE__ */ p(T, {
      style: {
        wrap: i.HEXwrap,
        input: i.HEXinput,
        label: i.HEXlabel
      },
      label: "hex",
      value: n,
      onChange: o
    }), /* @__PURE__ */ p(T, {
      style: {
        wrap: i.RGBwrap,
        input: i.RGBinput,
        label: i.RGBlabel
      },
      label: "r",
      value: r.r,
      onChange: o
    }), /* @__PURE__ */ p(T, {
      style: {
        wrap: i.RGBwrap,
        input: i.RGBinput,
        label: i.RGBlabel
      },
      label: "g",
      value: r.g,
      onChange: o
    }), /* @__PURE__ */ p(T, {
      style: {
        wrap: i.RGBwrap,
        input: i.RGBinput,
        label: i.RGBlabel
      },
      label: "b",
      value: r.b,
      onChange: o
    })]
  });
}, Jt = function(e) {
  var n = e.onChange, r = e.onSwatchHover, a = e.colors, i = e.hex, o = e.rgb, l = e.styles, f = l === void 0 ? {} : l, h = e.className, d = h === void 0 ? "" : h, g = R(L({
    default: {
      Compact: {
        background: "#f6f6f6",
        radius: "4px"
      },
      compact: {
        paddingTop: "5px",
        paddingLeft: "5px",
        boxSizing: "initial",
        width: "240px"
      },
      clear: {
        clear: "both"
      }
    }
  }, f)), b = function(w, S) {
    w.hex ? ae(w.hex) && n({
      hex: w.hex,
      source: "hex"
    }, S) : n(w, S);
  };
  return /* @__PURE__ */ p(Ze, {
    style: g.Compact,
    styles: f,
    children: /* @__PURE__ */ O("div", {
      style: g.compact,
      className: "compact-picker " + d,
      children: [/* @__PURE__ */ O("div", {
        children: [fe(a, function(v) {
          return /* @__PURE__ */ p(Zu, {
            color: v,
            active: v.toLowerCase() === i,
            onClick: b,
            onSwatchHover: r
          }, v);
        }), /* @__PURE__ */ p("div", {
          style: g.clear
        })]
      }), /* @__PURE__ */ p(Ju, {
        hex: i,
        rgb: o,
        onChange: b
      })]
    })
  });
};
Jt.propTypes = {
  colors: y.exports.arrayOf(y.exports.string),
  styles: y.exports.object
};
Jt.defaultProps = {
  colors: ["#4D4D4D", "#999999", "#FFFFFF", "#F44E3B", "#FE9200", "#FCDC00", "#DBDF00", "#A4DD00", "#68CCCA", "#73D8FF", "#AEA1FF", "#FDA1FF", "#333333", "#808080", "#cccccc", "#D33115", "#E27300", "#FCC400", "#B0BC00", "#68BC00", "#16A5A5", "#009CE0", "#7B64FF", "#FA28FF", "#000000", "#666666", "#B3B3B3", "#9F0500", "#C45100", "#FB9E00", "#808900", "#194D33", "#0C797D", "#0062B1", "#653294", "#AB149E"],
  styles: {}
};
j(Jt);
var Qu = function(e) {
  var n = e.hover, r = e.color, a = e.onClick, i = e.onSwatchHover, o = {
    position: "relative",
    zIndex: "2",
    outline: "2px solid #fff",
    boxShadow: "0 0 5px 2px rgba(0,0,0,0.25)"
  }, l = R({
    default: {
      swatch: {
        width: "25px",
        height: "25px",
        fontSize: "0"
      }
    },
    hover: {
      swatch: o
    }
  }, {
    hover: n
  });
  return /* @__PURE__ */ p("div", {
    style: l.swatch,
    children: /* @__PURE__ */ p(pe, {
      color: r,
      onClick: a,
      onHover: i,
      focusStyle: o
    })
  });
};
const ep = Ht(Qu);
var Qt = function(e) {
  var n = e.width, r = e.colors, a = e.onChange, i = e.onSwatchHover, o = e.triangle, l = e.styles, f = l === void 0 ? {} : l, h = e.className, d = h === void 0 ? "" : h, g = R(L({
    default: {
      card: {
        width: n,
        background: "#fff",
        border: "1px solid rgba(0,0,0,0.2)",
        boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
        borderRadius: "4px",
        position: "relative",
        padding: "5px",
        display: "flex",
        flexWrap: "wrap"
      },
      triangle: {
        position: "absolute",
        border: "7px solid transparent",
        borderBottomColor: "#fff"
      },
      triangleShadow: {
        position: "absolute",
        border: "8px solid transparent",
        borderBottomColor: "rgba(0,0,0,0.15)"
      }
    },
    "hide-triangle": {
      triangle: {
        display: "none"
      },
      triangleShadow: {
        display: "none"
      }
    },
    "top-left-triangle": {
      triangle: {
        top: "-14px",
        left: "10px"
      },
      triangleShadow: {
        top: "-16px",
        left: "9px"
      }
    },
    "top-right-triangle": {
      triangle: {
        top: "-14px",
        right: "10px"
      },
      triangleShadow: {
        top: "-16px",
        right: "9px"
      }
    },
    "bottom-left-triangle": {
      triangle: {
        top: "35px",
        left: "10px",
        transform: "rotate(180deg)"
      },
      triangleShadow: {
        top: "37px",
        left: "9px",
        transform: "rotate(180deg)"
      }
    },
    "bottom-right-triangle": {
      triangle: {
        top: "35px",
        right: "10px",
        transform: "rotate(180deg)"
      },
      triangleShadow: {
        top: "37px",
        right: "9px",
        transform: "rotate(180deg)"
      }
    }
  }, f), {
    "hide-triangle": o === "hide",
    "top-left-triangle": o === "top-left",
    "top-right-triangle": o === "top-right",
    "bottom-left-triangle": o === "bottom-left",
    "bottom-right-triangle": o === "bottom-right"
  }), b = function(w, S) {
    return a({
      hex: w,
      source: "hex"
    }, S);
  };
  return /* @__PURE__ */ O("div", {
    style: g.card,
    className: "github-picker " + d,
    children: [/* @__PURE__ */ p("div", {
      style: g.triangleShadow
    }), /* @__PURE__ */ p("div", {
      style: g.triangle
    }), fe(r, function(v) {
      return /* @__PURE__ */ p(ep, {
        color: v,
        onClick: b,
        onSwatchHover: i
      }, v);
    })]
  });
};
Qt.propTypes = {
  width: y.exports.oneOfType([y.exports.string, y.exports.number]),
  colors: y.exports.arrayOf(y.exports.string),
  triangle: y.exports.oneOf(["hide", "top-left", "top-right", "bottom-left", "bottom-right"]),
  styles: y.exports.object
};
Qt.defaultProps = {
  width: 200,
  colors: ["#B80000", "#DB3E00", "#FCCB00", "#008B02", "#006B76", "#1273DE", "#004DCF", "#5300EB", "#EB9694", "#FAD0C3", "#FEF3BD", "#C1E1C5", "#BEDADC", "#C4DEF6", "#BED3F3", "#D4C4FB"],
  triangle: "top-left",
  styles: {}
};
const en = j(Qt);
var tp = function(e) {
  var n = e.direction, r = R({
    default: {
      picker: {
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        transform: "translate(-9px, -1px)",
        backgroundColor: "rgb(248, 248, 248)",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
      }
    },
    vertical: {
      picker: {
        transform: "translate(-3px, -9px)"
      }
    }
  }, {
    vertical: n === "vertical"
  });
  return /* @__PURE__ */ p("div", {
    style: r.picker
  });
}, er = function(e) {
  var n = e.width, r = e.height, a = e.onChange, i = e.hsl, o = e.direction, l = e.pointer, f = e.styles, h = f === void 0 ? {} : f, d = e.className, g = d === void 0 ? "" : d, b = R(L({
    default: {
      picker: {
        position: "relative",
        width: n,
        height: r
      },
      hue: {
        radius: "2px"
      }
    }
  }, h)), v = function(S) {
    return a({
      a: 1,
      h: S.h,
      l: 0.5,
      s: 1
    });
  };
  return /* @__PURE__ */ p("div", {
    style: b.picker,
    className: "hue-picker " + g,
    children: /* @__PURE__ */ p(ke, {
      ...b.hue,
      hsl: i,
      pointer: l,
      onChange: v,
      direction: o
    })
  });
};
er.propTypes = {
  styles: y.exports.object
};
er.defaultProps = {
  width: "316px",
  height: "16px",
  direction: "horizontal",
  pointer: tp,
  styles: {}
};
j(er);
var rp = function(e) {
  var n = e.onChange, r = e.hex, a = e.rgb, i = e.styles, o = i === void 0 ? {} : i, l = e.className, f = l === void 0 ? "" : l, h = R(L({
    default: {
      material: {
        width: "98px",
        height: "98px",
        padding: "16px",
        fontFamily: "Roboto"
      },
      HEXwrap: {
        position: "relative"
      },
      HEXinput: {
        width: "100%",
        marginTop: "12px",
        fontSize: "15px",
        color: "#333",
        padding: "0px",
        border: "0px",
        borderBottom: "2px solid " + r,
        outline: "none",
        height: "30px"
      },
      HEXlabel: {
        position: "absolute",
        top: "0px",
        left: "0px",
        fontSize: "11px",
        color: "#999999",
        textTransform: "capitalize"
      },
      Hex: {
        style: {}
      },
      RGBwrap: {
        position: "relative"
      },
      RGBinput: {
        width: "100%",
        marginTop: "12px",
        fontSize: "15px",
        color: "#333",
        padding: "0px",
        border: "0px",
        borderBottom: "1px solid #eee",
        outline: "none",
        height: "30px"
      },
      RGBlabel: {
        position: "absolute",
        top: "0px",
        left: "0px",
        fontSize: "11px",
        color: "#999999",
        textTransform: "capitalize"
      },
      split: {
        display: "flex",
        marginRight: "-10px",
        paddingTop: "11px"
      },
      third: {
        flex: "1",
        paddingRight: "10px"
      }
    }
  }, o)), d = function(b, v) {
    b.hex ? ae(b.hex) && n({
      hex: b.hex,
      source: "hex"
    }, v) : (b.r || b.g || b.b) && n({
      r: b.r || a.r,
      g: b.g || a.g,
      b: b.b || a.b,
      source: "rgb"
    }, v);
  };
  return /* @__PURE__ */ p(Ze, {
    styles: o,
    children: /* @__PURE__ */ O("div", {
      style: h.material,
      className: "material-picker " + f,
      children: [/* @__PURE__ */ p(T, {
        style: {
          wrap: h.HEXwrap,
          input: h.HEXinput,
          label: h.HEXlabel
        },
        label: "hex",
        value: r,
        onChange: d
      }), /* @__PURE__ */ O("div", {
        style: h.split,
        className: "flexbox-fix",
        children: [/* @__PURE__ */ p("div", {
          style: h.third,
          children: /* @__PURE__ */ p(T, {
            style: {
              wrap: h.RGBwrap,
              input: h.RGBinput,
              label: h.RGBlabel
            },
            label: "r",
            value: a.r,
            onChange: d
          })
        }), /* @__PURE__ */ p("div", {
          style: h.third,
          children: /* @__PURE__ */ p(T, {
            style: {
              wrap: h.RGBwrap,
              input: h.RGBinput,
              label: h.RGBlabel
            },
            label: "g",
            value: a.g,
            onChange: d
          })
        }), /* @__PURE__ */ p("div", {
          style: h.third,
          children: /* @__PURE__ */ p(T, {
            style: {
              wrap: h.RGBwrap,
              input: h.RGBinput,
              label: h.RGBlabel
            },
            label: "b",
            value: a.b,
            onChange: d
          })
        })]
      })]
    })
  });
};
j(rp);
var np = function(e) {
  var n = e.onChange, r = e.rgb, a = e.hsv, i = e.hex, o = R({
    default: {
      fields: {
        paddingTop: "5px",
        paddingBottom: "9px",
        width: "80px",
        position: "relative"
      },
      divider: {
        height: "5px"
      },
      RGBwrap: {
        position: "relative"
      },
      RGBinput: {
        marginLeft: "40%",
        width: "40%",
        height: "18px",
        border: "1px solid #888888",
        boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
        marginBottom: "5px",
        fontSize: "13px",
        paddingLeft: "3px",
        marginRight: "10px"
      },
      RGBlabel: {
        left: "0px",
        top: "0px",
        width: "34px",
        textTransform: "uppercase",
        fontSize: "13px",
        height: "18px",
        lineHeight: "22px",
        position: "absolute"
      },
      HEXwrap: {
        position: "relative"
      },
      HEXinput: {
        marginLeft: "20%",
        width: "80%",
        height: "18px",
        border: "1px solid #888888",
        boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
        marginBottom: "6px",
        fontSize: "13px",
        paddingLeft: "3px"
      },
      HEXlabel: {
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "14px",
        textTransform: "uppercase",
        fontSize: "13px",
        height: "18px",
        lineHeight: "22px"
      },
      fieldSymbols: {
        position: "absolute",
        top: "5px",
        right: "-7px",
        fontSize: "13px"
      },
      symbol: {
        height: "20px",
        lineHeight: "22px",
        paddingBottom: "7px"
      }
    }
  }), l = function(h, d) {
    h["#"] ? ae(h["#"]) && n({
      hex: h["#"],
      source: "hex"
    }, d) : h.r || h.g || h.b ? n({
      r: h.r || r.r,
      g: h.g || r.g,
      b: h.b || r.b,
      source: "rgb"
    }, d) : (h.h || h.s || h.v) && n({
      h: h.h || a.h,
      s: h.s || a.s,
      v: h.v || a.v,
      source: "hsv"
    }, d);
  };
  return /* @__PURE__ */ O("div", {
    style: o.fields,
    children: [/* @__PURE__ */ p(T, {
      style: {
        wrap: o.RGBwrap,
        input: o.RGBinput,
        label: o.RGBlabel
      },
      label: "h",
      value: Math.round(a.h),
      onChange: l
    }), /* @__PURE__ */ p(T, {
      style: {
        wrap: o.RGBwrap,
        input: o.RGBinput,
        label: o.RGBlabel
      },
      label: "s",
      value: Math.round(a.s * 100),
      onChange: l
    }), /* @__PURE__ */ p(T, {
      style: {
        wrap: o.RGBwrap,
        input: o.RGBinput,
        label: o.RGBlabel
      },
      label: "v",
      value: Math.round(a.v * 100),
      onChange: l
    }), /* @__PURE__ */ p("div", {
      style: o.divider
    }), /* @__PURE__ */ p(T, {
      style: {
        wrap: o.RGBwrap,
        input: o.RGBinput,
        label: o.RGBlabel
      },
      label: "r",
      value: r.r,
      onChange: l
    }), /* @__PURE__ */ p(T, {
      style: {
        wrap: o.RGBwrap,
        input: o.RGBinput,
        label: o.RGBlabel
      },
      label: "g",
      value: r.g,
      onChange: l
    }), /* @__PURE__ */ p(T, {
      style: {
        wrap: o.RGBwrap,
        input: o.RGBinput,
        label: o.RGBlabel
      },
      label: "b",
      value: r.b,
      onChange: l
    }), /* @__PURE__ */ p("div", {
      style: o.divider
    }), /* @__PURE__ */ p(T, {
      style: {
        wrap: o.HEXwrap,
        input: o.HEXinput,
        label: o.HEXlabel
      },
      label: "#",
      value: i.replace("#", ""),
      onChange: l
    }), /* @__PURE__ */ O("div", {
      style: o.fieldSymbols,
      children: [/* @__PURE__ */ p("div", {
        style: o.symbol,
        children: "\xB0"
      }), /* @__PURE__ */ p("div", {
        style: o.symbol,
        children: "%"
      }), /* @__PURE__ */ p("div", {
        style: o.symbol,
        children: "%"
      })]
    })]
  });
}, ap = function(e) {
  var n = e.hsl, r = R({
    default: {
      picker: {
        width: "12px",
        height: "12px",
        borderRadius: "6px",
        boxShadow: "inset 0 0 0 1px #fff",
        transform: "translate(-6px, -6px)"
      }
    },
    "black-outline": {
      picker: {
        boxShadow: "inset 0 0 0 1px #000"
      }
    }
  }, {
    "black-outline": n.l > 0.5
  });
  return /* @__PURE__ */ p("div", {
    style: r.picker
  });
}, ip = function() {
  var e = R({
    default: {
      triangle: {
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderWidth: "4px 0 4px 6px",
        borderColor: "transparent transparent transparent #fff",
        position: "absolute",
        top: "1px",
        left: "1px"
      },
      triangleBorder: {
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderWidth: "5px 0 5px 8px",
        borderColor: "transparent transparent transparent #555"
      },
      left: {
        Extend: "triangleBorder",
        transform: "translate(-13px, -4px)"
      },
      leftInside: {
        Extend: "triangle",
        transform: "translate(-8px, -5px)"
      },
      right: {
        Extend: "triangleBorder",
        transform: "translate(20px, -14px) rotate(180deg)"
      },
      rightInside: {
        Extend: "triangle",
        transform: "translate(-8px, -5px)"
      }
    }
  });
  return /* @__PURE__ */ O("div", {
    style: e.pointer,
    children: [/* @__PURE__ */ p("div", {
      style: e.left,
      children: /* @__PURE__ */ p("div", {
        style: e.leftInside
      })
    }), /* @__PURE__ */ p("div", {
      style: e.right,
      children: /* @__PURE__ */ p("div", {
        style: e.rightInside
      })
    })]
  });
}, tn = function(e) {
  var n = e.onClick, r = e.label, a = e.children, i = e.active, o = R({
    default: {
      button: {
        backgroundImage: "linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)",
        border: "1px solid #878787",
        borderRadius: "2px",
        height: "20px",
        boxShadow: "0 1px 0 0 #EAEAEA",
        fontSize: "14px",
        color: "#000",
        lineHeight: "20px",
        textAlign: "center",
        marginBottom: "10px",
        cursor: "pointer"
      }
    },
    active: {
      button: {
        boxShadow: "0 0 0 1px #878787"
      }
    }
  }, {
    active: i
  });
  return /* @__PURE__ */ p("div", {
    style: o.button,
    onClick: n,
    children: r || a
  });
}, op = function(e) {
  var n = e.rgb, r = e.currentColor, a = R({
    default: {
      swatches: {
        border: "1px solid #B3B3B3",
        borderBottom: "1px solid #F0F0F0",
        marginBottom: "2px",
        marginTop: "1px"
      },
      new: {
        height: "34px",
        background: "rgb(" + n.r + "," + n.g + ", " + n.b + ")",
        boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000"
      },
      current: {
        height: "34px",
        background: r,
        boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000"
      },
      label: {
        fontSize: "14px",
        color: "#000",
        textAlign: "center"
      }
    }
  });
  return /* @__PURE__ */ O("div", {
    children: [/* @__PURE__ */ p("div", {
      style: a.label,
      children: "new"
    }), /* @__PURE__ */ O("div", {
      style: a.swatches,
      children: [/* @__PURE__ */ p("div", {
        style: a.new
      }), /* @__PURE__ */ p("div", {
        style: a.current
      })]
    }), /* @__PURE__ */ p("div", {
      style: a.label,
      children: "current"
    })]
  });
}, lp = function() {
  function t(e, n) {
    for (var r = 0; r < n.length; r++) {
      var a = n[r];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e;
  };
}();
function sp(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function hp(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function up(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var tr = function(t) {
  up(e, t);
  function e(n) {
    sp(this, e);
    var r = hp(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
    return r.state = {
      currentColor: n.hex
    }, r;
  }
  return lp(e, [{
    key: "render",
    value: function() {
      var r = this.props, a = r.styles, i = a === void 0 ? {} : a, o = r.className, l = o === void 0 ? "" : o, f = R(L({
        default: {
          picker: {
            background: "#DCDCDC",
            borderRadius: "4px",
            boxShadow: "0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)",
            boxSizing: "initial",
            width: "513px"
          },
          head: {
            backgroundImage: "linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)",
            borderBottom: "1px solid #B1B1B1",
            boxShadow: "inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)",
            height: "23px",
            lineHeight: "24px",
            borderRadius: "4px 4px 0 0",
            fontSize: "13px",
            color: "#4D4D4D",
            textAlign: "center"
          },
          body: {
            padding: "15px 15px 0",
            display: "flex"
          },
          saturation: {
            width: "256px",
            height: "256px",
            position: "relative",
            border: "2px solid #B3B3B3",
            borderBottom: "2px solid #F0F0F0",
            overflow: "hidden"
          },
          hue: {
            position: "relative",
            height: "256px",
            width: "19px",
            marginLeft: "10px",
            border: "2px solid #B3B3B3",
            borderBottom: "2px solid #F0F0F0"
          },
          controls: {
            width: "180px",
            marginLeft: "10px"
          },
          top: {
            display: "flex"
          },
          previews: {
            width: "60px"
          },
          actions: {
            flex: "1",
            marginLeft: "20px"
          }
        }
      }, i));
      return /* @__PURE__ */ O("div", {
        style: f.picker,
        className: "photoshop-picker " + l,
        children: [/* @__PURE__ */ p("div", {
          style: f.head,
          children: this.props.header
        }), /* @__PURE__ */ O("div", {
          style: f.body,
          className: "flexbox-fix",
          children: [/* @__PURE__ */ p("div", {
            style: f.saturation,
            children: /* @__PURE__ */ p(bt, {
              hsl: this.props.hsl,
              hsv: this.props.hsv,
              pointer: ap,
              onChange: this.props.onChange
            })
          }), /* @__PURE__ */ p("div", {
            style: f.hue,
            children: /* @__PURE__ */ p(ke, {
              direction: "vertical",
              hsl: this.props.hsl,
              pointer: ip,
              onChange: this.props.onChange
            })
          }), /* @__PURE__ */ p("div", {
            style: f.controls,
            children: /* @__PURE__ */ O("div", {
              style: f.top,
              className: "flexbox-fix",
              children: [/* @__PURE__ */ p("div", {
                style: f.previews,
                children: /* @__PURE__ */ p(op, {
                  rgb: this.props.rgb,
                  currentColor: this.state.currentColor
                })
              }), /* @__PURE__ */ O("div", {
                style: f.actions,
                children: [/* @__PURE__ */ p(tn, {
                  label: "OK",
                  onClick: this.props.onAccept,
                  active: !0
                }), /* @__PURE__ */ p(tn, {
                  label: "Cancel",
                  onClick: this.props.onCancel
                }), /* @__PURE__ */ p(np, {
                  onChange: this.props.onChange,
                  rgb: this.props.rgb,
                  hsv: this.props.hsv,
                  hex: this.props.hex
                })]
              })]
            })
          })]
        })]
      });
    }
  }]), e;
}(D.Component);
tr.propTypes = {
  header: y.exports.string,
  styles: y.exports.object
};
tr.defaultProps = {
  header: "Color Picker",
  styles: {}
};
j(tr);
var pp = function(e) {
  var n = e.onChange, r = e.rgb, a = e.hsl, i = e.hex, o = e.disableAlpha, l = R({
    default: {
      fields: {
        display: "flex",
        paddingTop: "4px"
      },
      single: {
        flex: "1",
        paddingLeft: "6px"
      },
      alpha: {
        flex: "1",
        paddingLeft: "6px"
      },
      double: {
        flex: "2"
      },
      input: {
        width: "80%",
        padding: "4px 10% 3px",
        border: "none",
        boxShadow: "inset 0 0 0 1px #ccc",
        fontSize: "11px"
      },
      label: {
        display: "block",
        textAlign: "center",
        fontSize: "11px",
        color: "#222",
        paddingTop: "3px",
        paddingBottom: "4px",
        textTransform: "capitalize"
      }
    },
    disableAlpha: {
      alpha: {
        display: "none"
      }
    }
  }, {
    disableAlpha: o
  }), f = function(d, g) {
    d.hex ? ae(d.hex) && n({
      hex: d.hex,
      source: "hex"
    }, g) : d.r || d.g || d.b ? n({
      r: d.r || r.r,
      g: d.g || r.g,
      b: d.b || r.b,
      a: r.a,
      source: "rgb"
    }, g) : d.a && (d.a < 0 ? d.a = 0 : d.a > 100 && (d.a = 100), d.a /= 100, n({
      h: a.h,
      s: a.s,
      l: a.l,
      a: d.a,
      source: "rgb"
    }, g));
  };
  return /* @__PURE__ */ O("div", {
    style: l.fields,
    className: "flexbox-fix",
    children: [/* @__PURE__ */ p("div", {
      style: l.double,
      children: /* @__PURE__ */ p(T, {
        style: {
          input: l.input,
          label: l.label
        },
        label: "hex",
        value: i.replace("#", ""),
        onChange: f
      })
    }), /* @__PURE__ */ p("div", {
      style: l.single,
      children: /* @__PURE__ */ p(T, {
        style: {
          input: l.input,
          label: l.label
        },
        label: "r",
        value: r.r,
        onChange: f,
        dragLabel: "true",
        dragMax: "255"
      })
    }), /* @__PURE__ */ p("div", {
      style: l.single,
      children: /* @__PURE__ */ p(T, {
        style: {
          input: l.input,
          label: l.label
        },
        label: "g",
        value: r.g,
        onChange: f,
        dragLabel: "true",
        dragMax: "255"
      })
    }), /* @__PURE__ */ p("div", {
      style: l.single,
      children: /* @__PURE__ */ p(T, {
        style: {
          input: l.input,
          label: l.label
        },
        label: "b",
        value: r.b,
        onChange: f,
        dragLabel: "true",
        dragMax: "255"
      })
    }), /* @__PURE__ */ p("div", {
      style: l.alpha,
      children: /* @__PURE__ */ p(T, {
        style: {
          input: l.input,
          label: l.label
        },
        label: "a",
        value: Math.round(r.a * 100),
        onChange: f,
        dragLabel: "true",
        dragMax: "100"
      })
    })]
  });
}, Hn = function(e) {
  var n = e.colors, r = e.onClick, a = r === void 0 ? function() {
  } : r, i = e.onSwatchHover, o = R({
    default: {
      colors: {
        margin: "0 -10px",
        padding: "10px 0 0 10px",
        borderTop: "1px solid #eee",
        display: "flex",
        flexWrap: "wrap",
        position: "relative"
      },
      swatchWrap: {
        width: "16px",
        height: "16px",
        margin: "0 10px 10px 0"
      },
      swatch: {
        borderRadius: "3px",
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15)"
      }
    },
    "no-presets": {
      colors: {
        display: "none"
      }
    }
  }, {
    "no-presets": !n || !n.length
  }), l = function(h, d) {
    a({
      hex: h,
      source: "hex"
    }, d);
  };
  return /* @__PURE__ */ p("div", {
    style: o.colors,
    className: "flexbox-fix",
    children: n.map(function(f) {
      var h = typeof f == "string" ? {
        color: f
      } : f, d = "" + h.color + (h.title || "");
      return /* @__PURE__ */ p("div", {
        style: o.swatchWrap,
        children: /* @__PURE__ */ p(pe, {
          ...h,
          style: o.swatch,
          onClick: l,
          onHover: i,
          focusStyle: {
            boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px " + h.color
          }
        })
      }, d);
    })
  });
};
Hn.propTypes = {
  colors: y.exports.arrayOf(y.exports.oneOfType([y.exports.string, y.exports.shape({
    color: y.exports.string,
    title: y.exports.string
  })])).isRequired
};
var fp = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }
  return t;
}, rr = function(e) {
  var n = e.width, r = e.rgb, a = e.hex, i = e.hsv, o = e.hsl, l = e.onChange, f = e.onSwatchHover, h = e.disableAlpha, d = e.presetColors, g = e.renderers, b = e.styles, v = b === void 0 ? {} : b, w = e.className, S = w === void 0 ? "" : w, _ = R(L({
    default: fp({
      picker: {
        width: n,
        padding: "10px 10px 0",
        boxSizing: "initial",
        background: "#fff",
        borderRadius: "4px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)"
      },
      saturation: {
        width: "100%",
        paddingBottom: "75%",
        position: "relative",
        overflow: "hidden"
      },
      Saturation: {
        radius: "3px",
        shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
      },
      controls: {
        display: "flex"
      },
      sliders: {
        padding: "4px 0",
        flex: "1"
      },
      color: {
        width: "24px",
        height: "24px",
        position: "relative",
        marginTop: "4px",
        marginLeft: "4px",
        borderRadius: "3px"
      },
      activeColor: {
        absolute: "0px 0px 0px 0px",
        borderRadius: "2px",
        background: "rgba(" + r.r + "," + r.g + "," + r.b + "," + r.a + ")",
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
      },
      hue: {
        position: "relative",
        height: "10px",
        overflow: "hidden"
      },
      Hue: {
        radius: "2px",
        shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
      },
      alpha: {
        position: "relative",
        height: "10px",
        marginTop: "4px",
        overflow: "hidden"
      },
      Alpha: {
        radius: "2px",
        shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
      }
    }, v),
    disableAlpha: {
      color: {
        height: "10px"
      },
      hue: {
        height: "10px"
      },
      alpha: {
        display: "none"
      }
    }
  }, v), {
    disableAlpha: h
  });
  return /* @__PURE__ */ O("div", {
    style: _.picker,
    className: "sketch-picker " + S,
    children: [/* @__PURE__ */ p("div", {
      style: _.saturation,
      children: /* @__PURE__ */ p(bt, {
        style: _.Saturation,
        hsl: o,
        hsv: i,
        onChange: l
      })
    }), /* @__PURE__ */ O("div", {
      style: _.controls,
      className: "flexbox-fix",
      children: [/* @__PURE__ */ O("div", {
        style: _.sliders,
        children: [/* @__PURE__ */ p("div", {
          style: _.hue,
          children: /* @__PURE__ */ p(ke, {
            style: _.Hue,
            hsl: o,
            onChange: l
          })
        }), /* @__PURE__ */ p("div", {
          style: _.alpha,
          children: /* @__PURE__ */ p(Nt, {
            style: _.Alpha,
            rgb: r,
            hsl: o,
            renderers: g,
            onChange: l
          })
        })]
      }), /* @__PURE__ */ O("div", {
        style: _.color,
        children: [/* @__PURE__ */ p(Ee, {}), /* @__PURE__ */ p("div", {
          style: _.activeColor
        })]
      })]
    }), /* @__PURE__ */ p(pp, {
      rgb: r,
      hsl: o,
      hex: a,
      onChange: l,
      disableAlpha: h
    }), /* @__PURE__ */ p(Hn, {
      colors: d,
      onClick: l,
      onSwatchHover: f
    })]
  });
};
rr.propTypes = {
  disableAlpha: y.exports.bool,
  width: y.exports.oneOfType([y.exports.string, y.exports.number]),
  styles: y.exports.object
};
rr.defaultProps = {
  disableAlpha: !1,
  width: 200,
  styles: {},
  presetColors: ["#D0021B", "#F5A623", "#F8E71C", "#8B572A", "#7ED321", "#417505", "#BD10E0", "#9013FE", "#4A90E2", "#50E3C2", "#B8E986", "#000000", "#4A4A4A", "#9B9B9B", "#FFFFFF"]
};
const rn = j(rr);
var Ne = function(e) {
  var n = e.hsl, r = e.offset, a = e.onClick, i = a === void 0 ? function() {
  } : a, o = e.active, l = e.first, f = e.last, h = R({
    default: {
      swatch: {
        height: "12px",
        background: "hsl(" + n.h + ", 50%, " + r * 100 + "%)",
        cursor: "pointer"
      }
    },
    first: {
      swatch: {
        borderRadius: "2px 0 0 2px"
      }
    },
    last: {
      swatch: {
        borderRadius: "0 2px 2px 0"
      }
    },
    active: {
      swatch: {
        transform: "scaleY(1.8)",
        borderRadius: "3.6px/2px"
      }
    }
  }, {
    active: o,
    first: l,
    last: f
  }), d = function(b) {
    return i({
      h: n.h,
      s: 0.5,
      l: r,
      source: "hsl"
    }, b);
  };
  return /* @__PURE__ */ p("div", {
    style: h.swatch,
    onClick: d
  });
}, cp = function(e) {
  var n = e.onClick, r = e.hsl, a = R({
    default: {
      swatches: {
        marginTop: "20px"
      },
      swatch: {
        boxSizing: "border-box",
        width: "20%",
        paddingRight: "1px",
        float: "left"
      },
      clear: {
        clear: "both"
      }
    }
  }), i = 0.1;
  return /* @__PURE__ */ O("div", {
    style: a.swatches,
    children: [/* @__PURE__ */ p("div", {
      style: a.swatch,
      children: /* @__PURE__ */ p(Ne, {
        hsl: r,
        offset: ".80",
        active: Math.abs(r.l - 0.8) < i && Math.abs(r.s - 0.5) < i,
        onClick: n,
        first: !0
      })
    }), /* @__PURE__ */ p("div", {
      style: a.swatch,
      children: /* @__PURE__ */ p(Ne, {
        hsl: r,
        offset: ".65",
        active: Math.abs(r.l - 0.65) < i && Math.abs(r.s - 0.5) < i,
        onClick: n
      })
    }), /* @__PURE__ */ p("div", {
      style: a.swatch,
      children: /* @__PURE__ */ p(Ne, {
        hsl: r,
        offset: ".50",
        active: Math.abs(r.l - 0.5) < i && Math.abs(r.s - 0.5) < i,
        onClick: n
      })
    }), /* @__PURE__ */ p("div", {
      style: a.swatch,
      children: /* @__PURE__ */ p(Ne, {
        hsl: r,
        offset: ".35",
        active: Math.abs(r.l - 0.35) < i && Math.abs(r.s - 0.5) < i,
        onClick: n
      })
    }), /* @__PURE__ */ p("div", {
      style: a.swatch,
      children: /* @__PURE__ */ p(Ne, {
        hsl: r,
        offset: ".20",
        active: Math.abs(r.l - 0.2) < i && Math.abs(r.s - 0.5) < i,
        onClick: n,
        last: !0
      })
    }), /* @__PURE__ */ p("div", {
      style: a.clear
    })]
  });
}, dp = function() {
  var e = R({
    default: {
      picker: {
        width: "14px",
        height: "14px",
        borderRadius: "6px",
        transform: "translate(-7px, -1px)",
        backgroundColor: "rgb(248, 248, 248)",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
      }
    }
  });
  return /* @__PURE__ */ p("div", {
    style: e.picker
  });
}, nr = function(e) {
  var n = e.hsl, r = e.onChange, a = e.pointer, i = e.styles, o = i === void 0 ? {} : i, l = e.className, f = l === void 0 ? "" : l, h = R(L({
    default: {
      hue: {
        height: "12px",
        position: "relative"
      },
      Hue: {
        radius: "2px"
      }
    }
  }, o));
  return /* @__PURE__ */ O("div", {
    style: h.wrap || {},
    className: "slider-picker " + f,
    children: [/* @__PURE__ */ p("div", {
      style: h.hue,
      children: /* @__PURE__ */ p(ke, {
        style: h.Hue,
        hsl: n,
        pointer: a,
        onChange: r
      })
    }), /* @__PURE__ */ p("div", {
      style: h.swatches,
      children: /* @__PURE__ */ p(cp, {
        hsl: n,
        onClick: r
      })
    })]
  });
};
nr.propTypes = {
  styles: y.exports.object
};
nr.defaultProps = {
  pointer: dp,
  styles: {}
};
j(nr);
var Nn = {};
Object.defineProperty(Nn, "__esModule", {
  value: !0
});
var nn = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }
  return t;
}, gp = D, an = bp(gp);
function bp(t) {
  return t && t.__esModule ? t : { default: t };
}
function vp(t, e) {
  var n = {};
  for (var r in t)
    e.indexOf(r) >= 0 || !Object.prototype.hasOwnProperty.call(t, r) || (n[r] = t[r]);
  return n;
}
var at = 24, xp = Nn.default = function(t) {
  var e = t.fill, n = e === void 0 ? "currentColor" : e, r = t.width, a = r === void 0 ? at : r, i = t.height, o = i === void 0 ? at : i, l = t.style, f = l === void 0 ? {} : l, h = vp(t, ["fill", "width", "height", "style"]);
  return an.default.createElement(
    "svg",
    nn({
      viewBox: "0 0 " + at + " " + at,
      style: nn({ fill: n, width: a, height: o }, f)
    }, h),
    an.default.createElement("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })
  );
}, yp = function(e) {
  var n = e.color, r = e.onClick, a = r === void 0 ? function() {
  } : r, i = e.onSwatchHover, o = e.first, l = e.last, f = e.active, h = R({
    default: {
      color: {
        width: "40px",
        height: "24px",
        cursor: "pointer",
        background: n,
        marginBottom: "1px"
      },
      check: {
        color: Wt(n),
        marginLeft: "8px",
        display: "none"
      }
    },
    first: {
      color: {
        overflow: "hidden",
        borderRadius: "2px 2px 0 0"
      }
    },
    last: {
      color: {
        overflow: "hidden",
        borderRadius: "0 0 2px 2px"
      }
    },
    active: {
      check: {
        display: "block"
      }
    },
    "color-#FFFFFF": {
      color: {
        boxShadow: "inset 0 0 0 1px #ddd"
      },
      check: {
        color: "#333"
      }
    },
    transparent: {
      check: {
        color: "#333"
      }
    }
  }, {
    first: o,
    last: l,
    active: f,
    "color-#FFFFFF": n === "#FFFFFF",
    transparent: n === "transparent"
  });
  return /* @__PURE__ */ p(pe, {
    color: n,
    style: h.color,
    onClick: a,
    onHover: i,
    focusStyle: {
      boxShadow: "0 0 4px " + n
    },
    children: /* @__PURE__ */ p("div", {
      style: h.check,
      children: /* @__PURE__ */ p(xp, {})
    })
  });
}, wp = function(e) {
  var n = e.onClick, r = e.onSwatchHover, a = e.group, i = e.active, o = R({
    default: {
      group: {
        paddingBottom: "10px",
        width: "40px",
        float: "left",
        marginRight: "10px"
      }
    }
  });
  return /* @__PURE__ */ p("div", {
    style: o.group,
    children: fe(a, function(l, f) {
      return /* @__PURE__ */ p(yp, {
        color: l,
        active: l.toLowerCase() === i,
        first: f === 0,
        last: f === a.length - 1,
        onClick: n,
        onSwatchHover: r
      }, l);
    })
  });
}, ar = function(e) {
  var n = e.width, r = e.height, a = e.onChange, i = e.onSwatchHover, o = e.colors, l = e.hex, f = e.styles, h = f === void 0 ? {} : f, d = e.className, g = d === void 0 ? "" : d, b = R(L({
    default: {
      picker: {
        width: n,
        height: r
      },
      overflow: {
        height: r,
        overflowY: "scroll"
      },
      body: {
        padding: "16px 0 6px 16px"
      },
      clear: {
        clear: "both"
      }
    }
  }, h)), v = function(S, _) {
    return a({
      hex: S,
      source: "hex"
    }, _);
  };
  return /* @__PURE__ */ p("div", {
    style: b.picker,
    className: "swatches-picker " + g,
    children: /* @__PURE__ */ p(Ze, {
      children: /* @__PURE__ */ p("div", {
        style: b.overflow,
        children: /* @__PURE__ */ O("div", {
          style: b.body,
          children: [fe(o, function(w) {
            return /* @__PURE__ */ p(wp, {
              group: w,
              active: l,
              onClick: v,
              onSwatchHover: i
            }, w.toString());
          }), /* @__PURE__ */ p("div", {
            style: b.clear
          })]
        })
      })
    })
  });
};
ar.propTypes = {
  width: y.exports.oneOfType([y.exports.string, y.exports.number]),
  height: y.exports.oneOfType([y.exports.string, y.exports.number]),
  colors: y.exports.arrayOf(y.exports.arrayOf(y.exports.string)),
  styles: y.exports.object
};
ar.defaultProps = {
  width: 320,
  height: 240,
  colors: [[ce[900], ce[700], ce[500], ce[300], ce[100]], [de[900], de[700], de[500], de[300], de[100]], [ge[900], ge[700], ge[500], ge[300], ge[100]], [be[900], be[700], be[500], be[300], be[100]], [ve[900], ve[700], ve[500], ve[300], ve[100]], [xe[900], xe[700], xe[500], xe[300], xe[100]], [ye[900], ye[700], ye[500], ye[300], ye[100]], [we[900], we[700], we[500], we[300], we[100]], [me[900], me[700], me[500], me[300], me[100]], ["#194D33", Le[700], Le[500], Le[300], Le[100]], [Ce[900], Ce[700], Ce[500], Ce[300], Ce[100]], [Se[900], Se[700], Se[500], Se[300], Se[100]], [_e[900], _e[700], _e[500], _e[300], _e[100]], [Oe[900], Oe[700], Oe[500], Oe[300], Oe[100]], [Re[900], Re[700], Re[500], Re[300], Re[100]], [Ae[900], Ae[700], Ae[500], Ae[300], Ae[100]], [Te[900], Te[700], Te[500], Te[300], Te[100]], [Pe[900], Pe[700], Pe[500], Pe[300], Pe[100]], ["#000000", "#525252", "#969696", "#D9D9D9", "#FFFFFF"]],
  styles: {}
};
j(ar);
var ir = function(e) {
  var n = e.onChange, r = e.onSwatchHover, a = e.hex, i = e.colors, o = e.width, l = e.triangle, f = e.styles, h = f === void 0 ? {} : f, d = e.className, g = d === void 0 ? "" : d, b = R(L({
    default: {
      card: {
        width: o,
        background: "#fff",
        border: "0 solid rgba(0,0,0,0.25)",
        boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
        borderRadius: "4px",
        position: "relative"
      },
      body: {
        padding: "15px 9px 9px 15px"
      },
      label: {
        fontSize: "18px",
        color: "#fff"
      },
      triangle: {
        width: "0px",
        height: "0px",
        borderStyle: "solid",
        borderWidth: "0 9px 10px 9px",
        borderColor: "transparent transparent #fff transparent",
        position: "absolute"
      },
      triangleShadow: {
        width: "0px",
        height: "0px",
        borderStyle: "solid",
        borderWidth: "0 9px 10px 9px",
        borderColor: "transparent transparent rgba(0,0,0,.1) transparent",
        position: "absolute"
      },
      hash: {
        background: "#F0F0F0",
        height: "30px",
        width: "30px",
        borderRadius: "4px 0 0 4px",
        float: "left",
        color: "#98A1A4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      input: {
        width: "100px",
        fontSize: "14px",
        color: "#666",
        border: "0px",
        outline: "none",
        height: "28px",
        boxShadow: "inset 0 0 0 1px #F0F0F0",
        boxSizing: "content-box",
        borderRadius: "0 4px 4px 0",
        float: "left",
        paddingLeft: "8px"
      },
      swatch: {
        width: "30px",
        height: "30px",
        float: "left",
        borderRadius: "4px",
        margin: "0 6px 6px 0"
      },
      clear: {
        clear: "both"
      }
    },
    "hide-triangle": {
      triangle: {
        display: "none"
      },
      triangleShadow: {
        display: "none"
      }
    },
    "top-left-triangle": {
      triangle: {
        top: "-10px",
        left: "12px"
      },
      triangleShadow: {
        top: "-11px",
        left: "12px"
      }
    },
    "top-right-triangle": {
      triangle: {
        top: "-10px",
        right: "12px"
      },
      triangleShadow: {
        top: "-11px",
        right: "12px"
      }
    }
  }, h), {
    "hide-triangle": l === "hide",
    "top-left-triangle": l === "top-left",
    "top-right-triangle": l === "top-right"
  }), v = function(S, _) {
    ae(S) && n({
      hex: S,
      source: "hex"
    }, _);
  };
  return /* @__PURE__ */ O("div", {
    style: b.card,
    className: "twitter-picker " + g,
    children: [/* @__PURE__ */ p("div", {
      style: b.triangleShadow
    }), /* @__PURE__ */ p("div", {
      style: b.triangle
    }), /* @__PURE__ */ O("div", {
      style: b.body,
      children: [fe(i, function(w, S) {
        return /* @__PURE__ */ p(pe, {
          color: w,
          hex: w,
          style: b.swatch,
          onClick: v,
          onHover: r,
          focusStyle: {
            boxShadow: "0 0 4px " + w
          }
        }, S);
      }), /* @__PURE__ */ p("div", {
        style: b.hash,
        children: "#"
      }), /* @__PURE__ */ p(T, {
        label: null,
        style: {
          input: b.input
        },
        value: a.replace("#", ""),
        onChange: v
      }), /* @__PURE__ */ p("div", {
        style: b.clear
      })]
    })]
  });
};
ir.propTypes = {
  width: y.exports.oneOfType([y.exports.string, y.exports.number]),
  triangle: y.exports.oneOf(["hide", "top-left", "top-right"]),
  colors: y.exports.arrayOf(y.exports.string),
  styles: y.exports.object
};
ir.defaultProps = {
  width: 276,
  colors: ["#FF6900", "#FCB900", "#7BDCB5", "#00D084", "#8ED1FC", "#0693E3", "#ABB8C3", "#EB144C", "#F78DA7", "#9900EF"],
  triangle: "top-left",
  styles: {}
};
j(ir);
var or = function(e) {
  var n = R({
    default: {
      picker: {
        width: "20px",
        height: "20px",
        borderRadius: "22px",
        border: "2px #fff solid",
        transform: "translate(-12px, -13px)",
        background: "hsl(" + Math.round(e.hsl.h) + ", " + Math.round(e.hsl.s * 100) + "%, " + Math.round(e.hsl.l * 100) + "%)"
      }
    }
  });
  return /* @__PURE__ */ p("div", {
    style: n.picker
  });
};
or.propTypes = {
  hsl: y.exports.shape({
    h: y.exports.number,
    s: y.exports.number,
    l: y.exports.number,
    a: y.exports.number
  })
};
or.defaultProps = {
  hsl: {
    a: 1,
    h: 249.94,
    l: 0.2,
    s: 0.5
  }
};
var lr = function(e) {
  var n = R({
    default: {
      picker: {
        width: "20px",
        height: "20px",
        borderRadius: "22px",
        transform: "translate(-10px, -7px)",
        background: "hsl(" + Math.round(e.hsl.h) + ", 100%, 50%)",
        border: "2px white solid"
      }
    }
  });
  return /* @__PURE__ */ p("div", {
    style: n.picker
  });
};
lr.propTypes = {
  hsl: y.exports.shape({
    h: y.exports.number,
    s: y.exports.number,
    l: y.exports.number,
    a: y.exports.number
  })
};
lr.defaultProps = {
  hsl: {
    a: 1,
    h: 249.94,
    l: 0.2,
    s: 0.5
  }
};
var mp = function(e) {
  var n = e.onChange, r = e.rgb, a = e.hsl, i = e.hex, o = e.hsv, l = function(v, w) {
    if (v.hex)
      ae(v.hex) && n({
        hex: v.hex,
        source: "hex"
      }, w);
    else if (v.rgb) {
      var S = v.rgb.split(",");
      Rt(v.rgb, "rgb") && n({
        r: S[0],
        g: S[1],
        b: S[2],
        a: 1,
        source: "rgb"
      }, w);
    } else if (v.hsv) {
      var _ = v.hsv.split(",");
      Rt(v.hsv, "hsv") && (_[2] = _[2].replace("%", ""), _[1] = _[1].replace("%", ""), _[0] = _[0].replace("\xB0", ""), _[1] == 1 ? _[1] = 0.01 : _[2] == 1 && (_[2] = 0.01), n({
        h: Number(_[0]),
        s: Number(_[1]),
        v: Number(_[2]),
        source: "hsv"
      }, w));
    } else if (v.hsl) {
      var P = v.hsl.split(",");
      Rt(v.hsl, "hsl") && (P[2] = P[2].replace("%", ""), P[1] = P[1].replace("%", ""), P[0] = P[0].replace("\xB0", ""), g[1] == 1 ? g[1] = 0.01 : g[2] == 1 && (g[2] = 0.01), n({
        h: Number(P[0]),
        s: Number(P[1]),
        v: Number(P[2]),
        source: "hsl"
      }, w));
    }
  }, f = R({
    default: {
      wrap: {
        display: "flex",
        height: "100px",
        marginTop: "4px"
      },
      fields: {
        width: "100%"
      },
      column: {
        paddingTop: "10px",
        display: "flex",
        justifyContent: "space-between"
      },
      double: {
        padding: "0px 4.4px",
        boxSizing: "border-box"
      },
      input: {
        width: "100%",
        height: "38px",
        boxSizing: "border-box",
        padding: "4px 10% 3px",
        textAlign: "center",
        border: "1px solid #dadce0",
        fontSize: "11px",
        textTransform: "lowercase",
        borderRadius: "5px",
        outline: "none",
        fontFamily: "Roboto,Arial,sans-serif"
      },
      input2: {
        height: "38px",
        width: "100%",
        border: "1px solid #dadce0",
        boxSizing: "border-box",
        fontSize: "11px",
        textTransform: "lowercase",
        borderRadius: "5px",
        outline: "none",
        paddingLeft: "10px",
        fontFamily: "Roboto,Arial,sans-serif"
      },
      label: {
        textAlign: "center",
        fontSize: "12px",
        background: "#fff",
        position: "absolute",
        textTransform: "uppercase",
        color: "#3c4043",
        width: "35px",
        top: "-6px",
        left: "0",
        right: "0",
        marginLeft: "auto",
        marginRight: "auto",
        fontFamily: "Roboto,Arial,sans-serif"
      },
      label2: {
        left: "10px",
        textAlign: "center",
        fontSize: "12px",
        background: "#fff",
        position: "absolute",
        textTransform: "uppercase",
        color: "#3c4043",
        width: "32px",
        top: "-6px",
        fontFamily: "Roboto,Arial,sans-serif"
      },
      single: {
        flexGrow: "1",
        margin: "0px 4.4px"
      }
    }
  }), h = r.r + ", " + r.g + ", " + r.b, d = Math.round(a.h) + "\xB0, " + Math.round(a.s * 100) + "%, " + Math.round(a.l * 100) + "%", g = Math.round(o.h) + "\xB0, " + Math.round(o.s * 100) + "%, " + Math.round(o.v * 100) + "%";
  return /* @__PURE__ */ p("div", {
    style: f.wrap,
    className: "flexbox-fix",
    children: /* @__PURE__ */ O("div", {
      style: f.fields,
      children: [/* @__PURE__ */ p("div", {
        style: f.double,
        children: /* @__PURE__ */ p(T, {
          style: {
            input: f.input,
            label: f.label
          },
          label: "hex",
          value: i,
          onChange: l
        })
      }), /* @__PURE__ */ O("div", {
        style: f.column,
        children: [/* @__PURE__ */ p("div", {
          style: f.single,
          children: /* @__PURE__ */ p(T, {
            style: {
              input: f.input2,
              label: f.label2
            },
            label: "rgb",
            value: h,
            onChange: l
          })
        }), /* @__PURE__ */ p("div", {
          style: f.single,
          children: /* @__PURE__ */ p(T, {
            style: {
              input: f.input2,
              label: f.label2
            },
            label: "hsv",
            value: g,
            onChange: l
          })
        }), /* @__PURE__ */ p("div", {
          style: f.single,
          children: /* @__PURE__ */ p(T, {
            style: {
              input: f.input2,
              label: f.label2
            },
            label: "hsl",
            value: d,
            onChange: l
          })
        })]
      })]
    })
  });
}, sr = function(e) {
  var n = e.width, r = e.onChange, a = e.rgb, i = e.hsl, o = e.hsv, l = e.hex, f = e.header, h = e.styles, d = h === void 0 ? {} : h, g = e.className, b = g === void 0 ? "" : g, v = R(L({
    default: {
      picker: {
        width: n,
        background: "#fff",
        border: "1px solid #dfe1e5",
        boxSizing: "initial",
        display: "flex",
        flexWrap: "wrap",
        borderRadius: "8px 8px 0px 0px"
      },
      head: {
        height: "57px",
        width: "100%",
        paddingTop: "16px",
        paddingBottom: "16px",
        paddingLeft: "16px",
        fontSize: "20px",
        boxSizing: "border-box",
        fontFamily: "Roboto-Regular,HelveticaNeue,Arial,sans-serif"
      },
      saturation: {
        width: "70%",
        padding: "0px",
        position: "relative",
        overflow: "hidden"
      },
      swatch: {
        width: "30%",
        height: "228px",
        padding: "0px",
        background: "rgba(" + a.r + ", " + a.g + ", " + a.b + ", 1)",
        position: "relative",
        overflow: "hidden"
      },
      body: {
        margin: "auto",
        width: "95%"
      },
      controls: {
        display: "flex",
        boxSizing: "border-box",
        height: "52px",
        paddingTop: "22px"
      },
      color: {
        width: "32px"
      },
      hue: {
        height: "8px",
        position: "relative",
        margin: "0px 16px 0px 16px",
        width: "100%"
      },
      Hue: {
        radius: "2px"
      }
    }
  }, d));
  return /* @__PURE__ */ O("div", {
    style: v.picker,
    className: "google-picker " + b,
    children: [/* @__PURE__ */ p("div", {
      style: v.head,
      children: f
    }), /* @__PURE__ */ p("div", {
      style: v.swatch
    }), /* @__PURE__ */ p("div", {
      style: v.saturation,
      children: /* @__PURE__ */ p(bt, {
        hsl: i,
        hsv: o,
        pointer: or,
        onChange: r
      })
    }), /* @__PURE__ */ O("div", {
      style: v.body,
      children: [/* @__PURE__ */ p("div", {
        style: v.controls,
        className: "flexbox-fix",
        children: /* @__PURE__ */ p("div", {
          style: v.hue,
          children: /* @__PURE__ */ p(ke, {
            style: v.Hue,
            hsl: i,
            radius: "4px",
            pointer: lr,
            onChange: r
          })
        })
      }), /* @__PURE__ */ p(mp, {
        rgb: a,
        hsl: i,
        hex: l,
        hsv: o,
        onChange: r
      })]
    })]
  });
};
sr.propTypes = {
  width: y.exports.oneOfType([y.exports.string, y.exports.number]),
  styles: y.exports.object,
  header: y.exports.string
};
sr.defaultProps = {
  width: 652,
  styles: {},
  header: "Color picker"
};
j(sr);
var Cp = function(t) {
  ia(e, t);
  function e(n) {
    var r = t.call(this, n) || this;
    return r.state = {
      isOpened: !1,
      isFocused: !1,
      inputValue: r.props.value || ""
    }, r.open = r.open.bind(r), r.close = r.close.bind(r), r.focus = r.focus.bind(r), r.blur = r.blur.bind(r), r.handleChange = r.handleChange.bind(r), r.handleFocus = r.handleFocus.bind(r), r.handleBlur = r.handleBlur.bind(r), r.clearValue = r.clearValue.bind(r), r.handleInputChange = r.handleInputChange.bind(r), r.handleClick = r.handleClick.bind(r), r.preview = D.createRef(), r.input = D.createRef(), r;
  }
  return e.prototype.componentDidUpdate = function(n) {
    var r = this.props;
    n.value !== r.value && this.setState({
      inputValue: r.value || ""
    });
  }, e.prototype.handleFocus = function() {
    this.setState({
      isFocused: !0
    });
  }, e.prototype.handleBlur = function() {
    this.setState({
      isFocused: !1,
      inputValue: this.props.value
    });
  }, e.prototype.focus = function() {
    this.input.current && this.input.current.focus();
  }, e.prototype.blur = function() {
    this.input.current && this.input.current.blur();
  }, e.prototype.open = function(n) {
    this.props.disabled || this.setState({
      isOpened: !0
    }, n);
  }, e.prototype.close = function() {
    this.setState({
      isOpened: !1
    });
  }, e.prototype.clearValue = function() {
    var n = this.props, r = n.onChange, a = n.resetValue;
    r(a || "");
  }, e.prototype.handleClick = function() {
    this.state.isOpened ? this.close() : this.open(this.focus);
  }, e.prototype.handleInputChange = function(n) {
    var r = this;
    if (!!this.props.allowCustomColor) {
      var a = this.props.onChange;
      this.setState({
        inputValue: n.currentTarget.value
      }, function() {
        var i = r.validateColor(r.state.inputValue);
        i && a(r.state.inputValue);
      });
    }
  }, e.prototype.validateColor = function(n) {
    if (n === "" || n === "inherit" || n === "transparent")
      return !1;
    var r = document.createElement("img");
    return r.style.color = "rgb(0, 0, 0)", r.style.color = n, r.style.color !== "rgb(0, 0, 0)" ? !0 : (r.style.color = "rgb(255, 255, 255)", r.style.color = n, r.style.color !== "rgb(255, 255, 255)");
  }, e.prototype.handleChange = function(n) {
    var r = this.props, a = r.onChange, i = r.format;
    a(i === "rgba" ? "rgba(".concat(n.rgb.r, ", ").concat(n.rgb.g, ", ").concat(n.rgb.b, ", ").concat(n.rgb.a, ")") : i === "rgb" ? "rgb(".concat(n.rgb.r, ", ").concat(n.rgb.g, ", ").concat(n.rgb.b, ")") : i === "hsl" ? "hsl(".concat(Math.round(n.hsl.h), ", ").concat(Math.round(n.hsl.s * 100), "%, ").concat(Math.round(n.hsl.l * 100), "%)") : n.hex);
  }, e.prototype.render = function() {
    var n = this, r = this.props, a = r.classPrefix, i = r.className, o = r.popoverClassName, l = r.value, f = r.placeholder, h = r.disabled, d = r.popOverContainer, g = r.format, b = r.clearable, v = r.placement, w = r.classnames, S = r.presetColors, _ = r.allowCustomColor, P = r.useMobileUI, M = this.props.translate, I = this.state.isOpened, H = this.state.isFocused, N = P && oa();
    return /* @__PURE__ */ O("div", {
      className: w("ColorPicker", {
        "is-disabled": h,
        "is-focused": H,
        "is-opened": I
      }, i),
      children: [/* @__PURE__ */ p("span", {
        onClick: this.handleClick,
        className: w("ColorPicker-preview"),
        children: /* @__PURE__ */ p("i", {
          ref: this.preview,
          className: "".concat(a, "ColorPicker-previewIcon"),
          style: {
            background: this.state.inputValue || "#ccc"
          }
        })
      }), /* @__PURE__ */ p("input", {
        ref: this.input,
        type: "text",
        autoComplete: "off",
        size: 10,
        className: w("ColorPicker-input"),
        value: this.state.inputValue || "",
        placeholder: M(f),
        disabled: h,
        onChange: this.handleInputChange,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onClick: this.handleClick,
        readOnly: N
      }), b && !h && l ? /* @__PURE__ */ p("a", {
        onClick: this.clearValue,
        className: w("ColorPicker-clear"),
        children: /* @__PURE__ */ p(fr, {
          icon: "input-clear",
          className: "icon"
        })
      }) : null, /* @__PURE__ */ p("span", {
        className: w("ColorPicker-arrow"),
        children: /* @__PURE__ */ p(fr, {
          icon: "caret",
          className: "icon",
          onClick: this.handleClick
        })
      }), !N && I ? /* @__PURE__ */ p(la, {
        placement: v || "auto",
        target: function() {
          return cr(n);
        },
        onHide: this.close,
        container: d || function() {
          return cr(n);
        },
        rootClose: !1,
        show: !0,
        children: /* @__PURE__ */ p(sa, {
          classPrefix: a,
          className: w("ColorPicker-popover", o),
          onHide: this.close,
          overlay: !0,
          children: _ ? /* @__PURE__ */ p(rn, {
            styles: {},
            disableAlpha: !!~["rgb", "hex"].indexOf(g),
            color: l,
            presetColors: S,
            onChangeComplete: this.handleChange
          }) : /* @__PURE__ */ p(en, {
            color: l,
            colors: Array.isArray(S) ? S.filter(function(A) {
              return typeof A == "string" || et(A);
            }).map(function(A) {
              return typeof A == "string" ? A : et(A) ? A == null ? void 0 : A.color : A;
            }) : void 0,
            onChangeComplete: this.handleChange
          })
        })
      }) : null, N && /* @__PURE__ */ p(ha, {
        className: w("".concat(a, "ColorPicker-popup")),
        container: d,
        isShow: I,
        onHide: this.handleClick,
        children: _ ? /* @__PURE__ */ p(rn, {
          styles: {},
          disableAlpha: !!~["rgb", "hex"].indexOf(g),
          color: l,
          presetColors: S,
          onChangeComplete: this.handleChange
        }) : /* @__PURE__ */ p(en, {
          color: l,
          colors: Array.isArray(S) ? S.filter(function(A) {
            return typeof A == "string" || et(A);
          }).map(function(A) {
            return typeof A == "string" ? A : et(A) ? A == null ? void 0 : A.color : A;
          }) : void 0,
          onChangeComplete: this.handleChange
        })
      })]
    });
  }, e.defaultProps = {
    format: "hex",
    clearable: !0,
    placeholder: "ColorPicker.placeholder",
    allowCustomColor: !0
  }, ua([pa, yt("design:type", Function), yt("design:paramtypes", [String]), yt("design:returntype", void 0)], e.prototype, "validateColor", null), e;
}(D.PureComponent), Rp = fa(ca(da(Cp, {
  value: "onChange"
})));
export {
  Cp as ColorControl,
  Rp as default
};
