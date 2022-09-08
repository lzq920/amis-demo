import ie, { useRef as ae, useEffect as vt } from "react";
import { j as Xt } from "./index.7add3ddd.js";
import "react-dom";
/*!
 * Cropper.js v1.5.12
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-06-12T08:00:17.411Z
 */
function kt(a, t) {
  var i = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var e = Object.getOwnPropertySymbols(a);
    t && (e = e.filter(function(n) {
      return Object.getOwnPropertyDescriptor(a, n).enumerable;
    })), i.push.apply(i, e);
  }
  return i;
}
function re(a) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kt(Object(i), !0).forEach(function(e) {
      Ee(a, e, i[e]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i)) : kt(Object(i)).forEach(function(e) {
      Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(i, e));
    });
  }
  return a;
}
function ft(a) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ft = function(t) {
    return typeof t;
  } : ft = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ft(a);
}
function xe(a, t) {
  if (!(a instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Pt(a, t) {
  for (var i = 0; i < t.length; i++) {
    var e = t[i];
    e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(a, e.key, e);
  }
}
function De(a, t, i) {
  return t && Pt(a.prototype, t), i && Pt(a, i), a;
}
function Ee(a, t, i) {
  return t in a ? Object.defineProperty(a, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : a[t] = i, a;
}
function ne(a) {
  return Me(a) || Te(a) || Oe(a) || Ce();
}
function Me(a) {
  if (Array.isArray(a))
    return yt(a);
}
function Te(a) {
  if (typeof Symbol < "u" && a[Symbol.iterator] != null || a["@@iterator"] != null)
    return Array.from(a);
}
function Oe(a, t) {
  if (!!a) {
    if (typeof a == "string")
      return yt(a, t);
    var i = Object.prototype.toString.call(a).slice(8, -1);
    if (i === "Object" && a.constructor && (i = a.constructor.name), i === "Map" || i === "Set")
      return Array.from(a);
    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
      return yt(a, t);
  }
}
function yt(a, t) {
  (t == null || t > a.length) && (t = a.length);
  for (var i = 0, e = new Array(t); i < t; i++)
    e[i] = a[i];
  return e;
}
function Ce() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var pt = typeof window < "u" && typeof window.document < "u", X = pt ? window : {}, At = pt && X.document.documentElement ? "ontouchstart" in X.document.documentElement : !1, Rt = pt ? "PointerEvent" in X : !1, y = "cropper", St = "all", oe = "crop", se = "move", he = "zoom", $ = "e", q = "w", Q = "s", H = "n", et = "ne", it = "nw", at = "se", rt = "sw", xt = "".concat(y, "-crop"), Ht = "".concat(y, "-disabled"), S = "".concat(y, "-hidden"), Wt = "".concat(y, "-hide"), Ne = "".concat(y, "-invisible"), dt = "".concat(y, "-modal"), Dt = "".concat(y, "-move"), ot = "".concat(y, "Action"), ct = "".concat(y, "Preview"), It = "crop", ce = "move", le = "none", Et = "crop", Mt = "cropend", Tt = "cropmove", Ot = "cropstart", Ut = "dblclick", Ae = At ? "touchstart" : "mousedown", Re = At ? "touchmove" : "mousemove", Se = At ? "touchend touchcancel" : "mouseup", jt = Rt ? "pointerdown" : Ae, Vt = Rt ? "pointermove" : Re, Gt = Rt ? "pointerup pointercancel" : Se, $t = "ready", qt = "resize", Ft = "wheel", Ct = "zoom", Qt = "image/jpeg", Ie = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, _e = /^data:/, Le = /^data:image\/jpeg;base64,/, ze = /^img|canvas$/i, fe = 200, de = 100, Zt = {
  viewMode: 0,
  dragMode: It,
  initialAspectRatio: NaN,
  aspectRatio: NaN,
  data: null,
  preview: "",
  responsive: !0,
  restore: !0,
  checkCrossOrigin: !0,
  checkOrientation: !0,
  modal: !0,
  guides: !0,
  center: !0,
  highlight: !0,
  background: !0,
  autoCrop: !0,
  autoCropArea: 0.8,
  movable: !0,
  rotatable: !0,
  scalable: !0,
  zoomable: !0,
  zoomOnTouch: !0,
  zoomOnWheel: !0,
  wheelZoomRatio: 0.1,
  cropBoxMovable: !0,
  cropBoxResizable: !0,
  toggleDragModeOnDblclick: !0,
  minCanvasWidth: 0,
  minCanvasHeight: 0,
  minCropBoxWidth: 0,
  minCropBoxHeight: 0,
  minContainerWidth: fe,
  minContainerHeight: de,
  ready: null,
  cropstart: null,
  cropmove: null,
  cropend: null,
  crop: null,
  zoom: null
}, Be = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', Ye = Number.isNaN || X.isNaN;
function v(a) {
  return typeof a == "number" && !Ye(a);
}
var Kt = function(t) {
  return t > 0 && t < 1 / 0;
};
function wt(a) {
  return typeof a > "u";
}
function F(a) {
  return ft(a) === "object" && a !== null;
}
var Xe = Object.prototype.hasOwnProperty;
function Z(a) {
  if (!F(a))
    return !1;
  try {
    var t = a.constructor, i = t.prototype;
    return t && i && Xe.call(i, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function R(a) {
  return typeof a == "function";
}
var ke = Array.prototype.slice;
function ue(a) {
  return Array.from ? Array.from(a) : ke.call(a);
}
function C(a, t) {
  return a && R(t) && (Array.isArray(a) || v(a.length) ? ue(a).forEach(function(i, e) {
    t.call(a, i, e, a);
  }) : F(a) && Object.keys(a).forEach(function(i) {
    t.call(a, a[i], i, a);
  })), a;
}
var x = Object.assign || function(t) {
  for (var i = arguments.length, e = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++)
    e[n - 1] = arguments[n];
  return F(t) && e.length > 0 && e.forEach(function(r) {
    F(r) && Object.keys(r).forEach(function(o) {
      t[o] = r[o];
    });
  }), t;
}, Pe = /\.\d*(?:0|9){12}\d*$/;
function J(a) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return Pe.test(a) ? Math.round(a * t) / t : a;
}
var He = /^width|height|left|top|marginLeft|marginTop$/;
function W(a, t) {
  var i = a.style;
  C(t, function(e, n) {
    He.test(n) && v(e) && (e = "".concat(e, "px")), i[n] = e;
  });
}
function We(a, t) {
  return a.classList ? a.classList.contains(t) : a.className.indexOf(t) > -1;
}
function N(a, t) {
  if (!!t) {
    if (v(a.length)) {
      C(a, function(e) {
        N(e, t);
      });
      return;
    }
    if (a.classList) {
      a.classList.add(t);
      return;
    }
    var i = a.className.trim();
    i ? i.indexOf(t) < 0 && (a.className = "".concat(i, " ").concat(t)) : a.className = t;
  }
}
function Y(a, t) {
  if (!!t) {
    if (v(a.length)) {
      C(a, function(i) {
        Y(i, t);
      });
      return;
    }
    if (a.classList) {
      a.classList.remove(t);
      return;
    }
    a.className.indexOf(t) >= 0 && (a.className = a.className.replace(t, ""));
  }
}
function K(a, t, i) {
  if (!!t) {
    if (v(a.length)) {
      C(a, function(e) {
        K(e, t, i);
      });
      return;
    }
    i ? N(a, t) : Y(a, t);
  }
}
var Ue = /([a-z\d])([A-Z])/g;
function _t(a) {
  return a.replace(Ue, "$1-$2").toLowerCase();
}
function Nt(a, t) {
  return F(a[t]) ? a[t] : a.dataset ? a.dataset[t] : a.getAttribute("data-".concat(_t(t)));
}
function st(a, t, i) {
  F(i) ? a[t] = i : a.dataset ? a.dataset[t] = i : a.setAttribute("data-".concat(_t(t)), i);
}
function je(a, t) {
  if (F(a[t]))
    try {
      delete a[t];
    } catch {
      a[t] = void 0;
    }
  else if (a.dataset)
    try {
      delete a.dataset[t];
    } catch {
      a.dataset[t] = void 0;
    }
  else
    a.removeAttribute("data-".concat(_t(t)));
}
var pe = /\s\s*/, ge = function() {
  var a = !1;
  if (pt) {
    var t = !1, i = function() {
    }, e = Object.defineProperty({}, "once", {
      get: function() {
        return a = !0, t;
      },
      set: function(r) {
        t = r;
      }
    });
    X.addEventListener("test", i, e), X.removeEventListener("test", i, e);
  }
  return a;
}();
function z(a, t, i) {
  var e = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, n = i;
  t.trim().split(pe).forEach(function(r) {
    if (!ge) {
      var o = a.listeners;
      o && o[r] && o[r][i] && (n = o[r][i], delete o[r][i], Object.keys(o[r]).length === 0 && delete o[r], Object.keys(o).length === 0 && delete a.listeners);
    }
    a.removeEventListener(r, n, e);
  });
}
function _(a, t, i) {
  var e = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, n = i;
  t.trim().split(pe).forEach(function(r) {
    if (e.once && !ge) {
      var o = a.listeners, s = o === void 0 ? {} : o;
      n = function() {
        delete s[r][i], a.removeEventListener(r, n, e);
        for (var l = arguments.length, h = new Array(l), c = 0; c < l; c++)
          h[c] = arguments[c];
        i.apply(a, h);
      }, s[r] || (s[r] = {}), s[r][i] && a.removeEventListener(r, s[r][i], e), s[r][i] = n, a.listeners = s;
    }
    a.addEventListener(r, n, e);
  });
}
function tt(a, t, i) {
  var e;
  return R(Event) && R(CustomEvent) ? e = new CustomEvent(t, {
    detail: i,
    bubbles: !0,
    cancelable: !0
  }) : (e = document.createEvent("CustomEvent"), e.initCustomEvent(t, !0, !0, i)), a.dispatchEvent(e);
}
function me(a) {
  var t = a.getBoundingClientRect();
  return {
    left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: t.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var bt = X.location, Ve = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function Jt(a) {
  var t = a.match(Ve);
  return t !== null && (t[1] !== bt.protocol || t[2] !== bt.hostname || t[3] !== bt.port);
}
function te(a) {
  var t = "timestamp=".concat(new Date().getTime());
  return a + (a.indexOf("?") === -1 ? "?" : "&") + t;
}
function nt(a) {
  var t = a.rotate, i = a.scaleX, e = a.scaleY, n = a.translateX, r = a.translateY, o = [];
  v(n) && n !== 0 && o.push("translateX(".concat(n, "px)")), v(r) && r !== 0 && o.push("translateY(".concat(r, "px)")), v(t) && t !== 0 && o.push("rotate(".concat(t, "deg)")), v(i) && i !== 1 && o.push("scaleX(".concat(i, ")")), v(e) && e !== 1 && o.push("scaleY(".concat(e, ")"));
  var s = o.length ? o.join(" ") : "none";
  return {
    WebkitTransform: s,
    msTransform: s,
    transform: s
  };
}
function Ge(a) {
  var t = re({}, a), i = 0;
  return C(a, function(e, n) {
    delete t[n], C(t, function(r) {
      var o = Math.abs(e.startX - r.startX), s = Math.abs(e.startY - r.startY), d = Math.abs(e.endX - r.endX), l = Math.abs(e.endY - r.endY), h = Math.sqrt(o * o + s * s), c = Math.sqrt(d * d + l * l), f = (c - h) / h;
      Math.abs(f) > Math.abs(i) && (i = f);
    });
  }), i;
}
function lt(a, t) {
  var i = a.pageX, e = a.pageY, n = {
    endX: i,
    endY: e
  };
  return t ? n : re({
    startX: i,
    startY: e
  }, n);
}
function $e(a) {
  var t = 0, i = 0, e = 0;
  return C(a, function(n) {
    var r = n.startX, o = n.startY;
    t += r, i += o, e += 1;
  }), t /= e, i /= e, {
    pageX: t,
    pageY: i
  };
}
function U(a) {
  var t = a.aspectRatio, i = a.height, e = a.width, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain", r = Kt(e), o = Kt(i);
  if (r && o) {
    var s = i * t;
    n === "contain" && s > e || n === "cover" && s < e ? i = e / t : e = i * t;
  } else
    r ? i = e / t : o && (e = i * t);
  return {
    width: e,
    height: i
  };
}
function qe(a) {
  var t = a.width, i = a.height, e = a.degree;
  if (e = Math.abs(e) % 180, e === 90)
    return {
      width: i,
      height: t
    };
  var n = e % 90 * Math.PI / 180, r = Math.sin(n), o = Math.cos(n), s = t * o + i * r, d = t * r + i * o;
  return e > 90 ? {
    width: d,
    height: s
  } : {
    width: s,
    height: d
  };
}
function Fe(a, t, i, e) {
  var n = t.aspectRatio, r = t.naturalWidth, o = t.naturalHeight, s = t.rotate, d = s === void 0 ? 0 : s, l = t.scaleX, h = l === void 0 ? 1 : l, c = t.scaleY, f = c === void 0 ? 1 : c, m = i.aspectRatio, p = i.naturalWidth, b = i.naturalHeight, w = e.fillColor, M = w === void 0 ? "transparent" : w, O = e.imageSmoothingEnabled, T = O === void 0 ? !0 : O, L = e.imageSmoothingQuality, D = L === void 0 ? "low" : L, u = e.maxWidth, g = u === void 0 ? 1 / 0 : u, E = e.maxHeight, I = E === void 0 ? 1 / 0 : E, k = e.minWidth, j = k === void 0 ? 0 : k, V = e.minHeight, P = V === void 0 ? 0 : V, B = document.createElement("canvas"), A = B.getContext("2d"), G = U({
    aspectRatio: m,
    width: g,
    height: I
  }), ht = U({
    aspectRatio: m,
    width: j,
    height: P
  }, "cover"), gt = Math.min(G.width, Math.max(ht.width, p)), mt = Math.min(G.height, Math.max(ht.height, b)), Lt = U({
    aspectRatio: n,
    width: g,
    height: I
  }), zt = U({
    aspectRatio: n,
    width: j,
    height: P
  }, "cover"), Bt = Math.min(Lt.width, Math.max(zt.width, r)), Yt = Math.min(Lt.height, Math.max(zt.height, o)), be = [-Bt / 2, -Yt / 2, Bt, Yt];
  return B.width = J(gt), B.height = J(mt), A.fillStyle = M, A.fillRect(0, 0, gt, mt), A.save(), A.translate(gt / 2, mt / 2), A.rotate(d * Math.PI / 180), A.scale(h, f), A.imageSmoothingEnabled = T, A.imageSmoothingQuality = D, A.drawImage.apply(A, [a].concat(ne(be.map(function(ye) {
    return Math.floor(J(ye));
  })))), A.restore(), B;
}
var ve = String.fromCharCode;
function Qe(a, t, i) {
  var e = "";
  i += t;
  for (var n = t; n < i; n += 1)
    e += ve(a.getUint8(n));
  return e;
}
var Ze = /^data:.*,/;
function Ke(a) {
  var t = a.replace(Ze, ""), i = atob(t), e = new ArrayBuffer(i.length), n = new Uint8Array(e);
  return C(n, function(r, o) {
    n[o] = i.charCodeAt(o);
  }), e;
}
function Je(a, t) {
  for (var i = [], e = 8192, n = new Uint8Array(a); n.length > 0; )
    i.push(ve.apply(null, ue(n.subarray(0, e)))), n = n.subarray(e);
  return "data:".concat(t, ";base64,").concat(btoa(i.join("")));
}
function ti(a) {
  var t = new DataView(a), i;
  try {
    var e, n, r;
    if (t.getUint8(0) === 255 && t.getUint8(1) === 216)
      for (var o = t.byteLength, s = 2; s + 1 < o; ) {
        if (t.getUint8(s) === 255 && t.getUint8(s + 1) === 225) {
          n = s;
          break;
        }
        s += 1;
      }
    if (n) {
      var d = n + 4, l = n + 10;
      if (Qe(t, d, 4) === "Exif") {
        var h = t.getUint16(l);
        if (e = h === 18761, (e || h === 19789) && t.getUint16(l + 2, e) === 42) {
          var c = t.getUint32(l + 4, e);
          c >= 8 && (r = l + c);
        }
      }
    }
    if (r) {
      var f = t.getUint16(r, e), m, p;
      for (p = 0; p < f; p += 1)
        if (m = r + p * 12 + 2, t.getUint16(m, e) === 274) {
          m += 8, i = t.getUint16(m, e), t.setUint16(m, 1, e);
          break;
        }
    }
  } catch {
    i = 1;
  }
  return i;
}
function ei(a) {
  var t = 0, i = 1, e = 1;
  switch (a) {
    case 2:
      i = -1;
      break;
    case 3:
      t = -180;
      break;
    case 4:
      e = -1;
      break;
    case 5:
      t = 90, e = -1;
      break;
    case 6:
      t = 90;
      break;
    case 7:
      t = 90, i = -1;
      break;
    case 8:
      t = -90;
      break;
  }
  return {
    rotate: t,
    scaleX: i,
    scaleY: e
  };
}
var ii = {
  render: function() {
    this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox();
  },
  initContainer: function() {
    var t = this.element, i = this.options, e = this.container, n = this.cropper, r = Number(i.minContainerWidth), o = Number(i.minContainerHeight);
    N(n, S), Y(t, S);
    var s = {
      width: Math.max(e.offsetWidth, r >= 0 ? r : fe),
      height: Math.max(e.offsetHeight, o >= 0 ? o : de)
    };
    this.containerData = s, W(n, {
      width: s.width,
      height: s.height
    }), N(t, S), Y(n, S);
  },
  initCanvas: function() {
    var t = this.containerData, i = this.imageData, e = this.options.viewMode, n = Math.abs(i.rotate) % 180 === 90, r = n ? i.naturalHeight : i.naturalWidth, o = n ? i.naturalWidth : i.naturalHeight, s = r / o, d = t.width, l = t.height;
    t.height * s > t.width ? e === 3 ? d = t.height * s : l = t.width / s : e === 3 ? l = t.width / s : d = t.height * s;
    var h = {
      aspectRatio: s,
      naturalWidth: r,
      naturalHeight: o,
      width: d,
      height: l
    };
    this.canvasData = h, this.limited = e === 1 || e === 2, this.limitCanvas(!0, !0), h.width = Math.min(Math.max(h.width, h.minWidth), h.maxWidth), h.height = Math.min(Math.max(h.height, h.minHeight), h.maxHeight), h.left = (t.width - h.width) / 2, h.top = (t.height - h.height) / 2, h.oldLeft = h.left, h.oldTop = h.top, this.initialCanvasData = x({}, h);
  },
  limitCanvas: function(t, i) {
    var e = this.options, n = this.containerData, r = this.canvasData, o = this.cropBoxData, s = e.viewMode, d = r.aspectRatio, l = this.cropped && o;
    if (t) {
      var h = Number(e.minCanvasWidth) || 0, c = Number(e.minCanvasHeight) || 0;
      s > 1 ? (h = Math.max(h, n.width), c = Math.max(c, n.height), s === 3 && (c * d > h ? h = c * d : c = h / d)) : s > 0 && (h ? h = Math.max(h, l ? o.width : 0) : c ? c = Math.max(c, l ? o.height : 0) : l && (h = o.width, c = o.height, c * d > h ? h = c * d : c = h / d));
      var f = U({
        aspectRatio: d,
        width: h,
        height: c
      });
      h = f.width, c = f.height, r.minWidth = h, r.minHeight = c, r.maxWidth = 1 / 0, r.maxHeight = 1 / 0;
    }
    if (i)
      if (s > (l ? 0 : 1)) {
        var m = n.width - r.width, p = n.height - r.height;
        r.minLeft = Math.min(0, m), r.minTop = Math.min(0, p), r.maxLeft = Math.max(0, m), r.maxTop = Math.max(0, p), l && this.limited && (r.minLeft = Math.min(o.left, o.left + (o.width - r.width)), r.minTop = Math.min(o.top, o.top + (o.height - r.height)), r.maxLeft = o.left, r.maxTop = o.top, s === 2 && (r.width >= n.width && (r.minLeft = Math.min(0, m), r.maxLeft = Math.max(0, m)), r.height >= n.height && (r.minTop = Math.min(0, p), r.maxTop = Math.max(0, p))));
      } else
        r.minLeft = -r.width, r.minTop = -r.height, r.maxLeft = n.width, r.maxTop = n.height;
  },
  renderCanvas: function(t, i) {
    var e = this.canvasData, n = this.imageData;
    if (i) {
      var r = qe({
        width: n.naturalWidth * Math.abs(n.scaleX || 1),
        height: n.naturalHeight * Math.abs(n.scaleY || 1),
        degree: n.rotate || 0
      }), o = r.width, s = r.height, d = e.width * (o / e.naturalWidth), l = e.height * (s / e.naturalHeight);
      e.left -= (d - e.width) / 2, e.top -= (l - e.height) / 2, e.width = d, e.height = l, e.aspectRatio = o / s, e.naturalWidth = o, e.naturalHeight = s, this.limitCanvas(!0, !1);
    }
    (e.width > e.maxWidth || e.width < e.minWidth) && (e.left = e.oldLeft), (e.height > e.maxHeight || e.height < e.minHeight) && (e.top = e.oldTop), e.width = Math.min(Math.max(e.width, e.minWidth), e.maxWidth), e.height = Math.min(Math.max(e.height, e.minHeight), e.maxHeight), this.limitCanvas(!1, !0), e.left = Math.min(Math.max(e.left, e.minLeft), e.maxLeft), e.top = Math.min(Math.max(e.top, e.minTop), e.maxTop), e.oldLeft = e.left, e.oldTop = e.top, W(this.canvas, x({
      width: e.width,
      height: e.height
    }, nt({
      translateX: e.left,
      translateY: e.top
    }))), this.renderImage(t), this.cropped && this.limited && this.limitCropBox(!0, !0);
  },
  renderImage: function(t) {
    var i = this.canvasData, e = this.imageData, n = e.naturalWidth * (i.width / i.naturalWidth), r = e.naturalHeight * (i.height / i.naturalHeight);
    x(e, {
      width: n,
      height: r,
      left: (i.width - n) / 2,
      top: (i.height - r) / 2
    }), W(this.image, x({
      width: e.width,
      height: e.height
    }, nt(x({
      translateX: e.left,
      translateY: e.top
    }, e)))), t && this.output();
  },
  initCropBox: function() {
    var t = this.options, i = this.canvasData, e = t.aspectRatio || t.initialAspectRatio, n = Number(t.autoCropArea) || 0.8, r = {
      width: i.width,
      height: i.height
    };
    e && (i.height * e > i.width ? r.height = r.width / e : r.width = r.height * e), this.cropBoxData = r, this.limitCropBox(!0, !0), r.width = Math.min(Math.max(r.width, r.minWidth), r.maxWidth), r.height = Math.min(Math.max(r.height, r.minHeight), r.maxHeight), r.width = Math.max(r.minWidth, r.width * n), r.height = Math.max(r.minHeight, r.height * n), r.left = i.left + (i.width - r.width) / 2, r.top = i.top + (i.height - r.height) / 2, r.oldLeft = r.left, r.oldTop = r.top, this.initialCropBoxData = x({}, r);
  },
  limitCropBox: function(t, i) {
    var e = this.options, n = this.containerData, r = this.canvasData, o = this.cropBoxData, s = this.limited, d = e.aspectRatio;
    if (t) {
      var l = Number(e.minCropBoxWidth) || 0, h = Number(e.minCropBoxHeight) || 0, c = s ? Math.min(n.width, r.width, r.width + r.left, n.width - r.left) : n.width, f = s ? Math.min(n.height, r.height, r.height + r.top, n.height - r.top) : n.height;
      l = Math.min(l, n.width), h = Math.min(h, n.height), d && (l && h ? h * d > l ? h = l / d : l = h * d : l ? h = l / d : h && (l = h * d), f * d > c ? f = c / d : c = f * d), o.minWidth = Math.min(l, c), o.minHeight = Math.min(h, f), o.maxWidth = c, o.maxHeight = f;
    }
    i && (s ? (o.minLeft = Math.max(0, r.left), o.minTop = Math.max(0, r.top), o.maxLeft = Math.min(n.width, r.left + r.width) - o.width, o.maxTop = Math.min(n.height, r.top + r.height) - o.height) : (o.minLeft = 0, o.minTop = 0, o.maxLeft = n.width - o.width, o.maxTop = n.height - o.height));
  },
  renderCropBox: function() {
    var t = this.options, i = this.containerData, e = this.cropBoxData;
    (e.width > e.maxWidth || e.width < e.minWidth) && (e.left = e.oldLeft), (e.height > e.maxHeight || e.height < e.minHeight) && (e.top = e.oldTop), e.width = Math.min(Math.max(e.width, e.minWidth), e.maxWidth), e.height = Math.min(Math.max(e.height, e.minHeight), e.maxHeight), this.limitCropBox(!1, !0), e.left = Math.min(Math.max(e.left, e.minLeft), e.maxLeft), e.top = Math.min(Math.max(e.top, e.minTop), e.maxTop), e.oldLeft = e.left, e.oldTop = e.top, t.movable && t.cropBoxMovable && st(this.face, ot, e.width >= i.width && e.height >= i.height ? se : St), W(this.cropBox, x({
      width: e.width,
      height: e.height
    }, nt({
      translateX: e.left,
      translateY: e.top
    }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output();
  },
  output: function() {
    this.preview(), tt(this.element, Et, this.getData());
  }
}, ai = {
  initPreview: function() {
    var t = this.element, i = this.crossOrigin, e = this.options.preview, n = i ? this.crossOriginUrl : this.url, r = t.alt || "The image to preview", o = document.createElement("img");
    if (i && (o.crossOrigin = i), o.src = n, o.alt = r, this.viewBox.appendChild(o), this.viewBoxImage = o, !!e) {
      var s = e;
      typeof e == "string" ? s = t.ownerDocument.querySelectorAll(e) : e.querySelector && (s = [e]), this.previews = s, C(s, function(d) {
        var l = document.createElement("img");
        st(d, ct, {
          width: d.offsetWidth,
          height: d.offsetHeight,
          html: d.innerHTML
        }), i && (l.crossOrigin = i), l.src = n, l.alt = r, l.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', d.innerHTML = "", d.appendChild(l);
      });
    }
  },
  resetPreview: function() {
    C(this.previews, function(t) {
      var i = Nt(t, ct);
      W(t, {
        width: i.width,
        height: i.height
      }), t.innerHTML = i.html, je(t, ct);
    });
  },
  preview: function() {
    var t = this.imageData, i = this.canvasData, e = this.cropBoxData, n = e.width, r = e.height, o = t.width, s = t.height, d = e.left - i.left - t.left, l = e.top - i.top - t.top;
    !this.cropped || this.disabled || (W(this.viewBoxImage, x({
      width: o,
      height: s
    }, nt(x({
      translateX: -d,
      translateY: -l
    }, t)))), C(this.previews, function(h) {
      var c = Nt(h, ct), f = c.width, m = c.height, p = f, b = m, w = 1;
      n && (w = f / n, b = r * w), r && b > m && (w = m / r, p = n * w, b = m), W(h, {
        width: p,
        height: b
      }), W(h.getElementsByTagName("img")[0], x({
        width: o * w,
        height: s * w
      }, nt(x({
        translateX: -d * w,
        translateY: -l * w
      }, t))));
    }));
  }
}, ri = {
  bind: function() {
    var t = this.element, i = this.options, e = this.cropper;
    R(i.cropstart) && _(t, Ot, i.cropstart), R(i.cropmove) && _(t, Tt, i.cropmove), R(i.cropend) && _(t, Mt, i.cropend), R(i.crop) && _(t, Et, i.crop), R(i.zoom) && _(t, Ct, i.zoom), _(e, jt, this.onCropStart = this.cropStart.bind(this)), i.zoomable && i.zoomOnWheel && _(e, Ft, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), i.toggleDragModeOnDblclick && _(e, Ut, this.onDblclick = this.dblclick.bind(this)), _(t.ownerDocument, Vt, this.onCropMove = this.cropMove.bind(this)), _(t.ownerDocument, Gt, this.onCropEnd = this.cropEnd.bind(this)), i.responsive && _(window, qt, this.onResize = this.resize.bind(this));
  },
  unbind: function() {
    var t = this.element, i = this.options, e = this.cropper;
    R(i.cropstart) && z(t, Ot, i.cropstart), R(i.cropmove) && z(t, Tt, i.cropmove), R(i.cropend) && z(t, Mt, i.cropend), R(i.crop) && z(t, Et, i.crop), R(i.zoom) && z(t, Ct, i.zoom), z(e, jt, this.onCropStart), i.zoomable && i.zoomOnWheel && z(e, Ft, this.onWheel, {
      passive: !1,
      capture: !0
    }), i.toggleDragModeOnDblclick && z(e, Ut, this.onDblclick), z(t.ownerDocument, Vt, this.onCropMove), z(t.ownerDocument, Gt, this.onCropEnd), i.responsive && z(window, qt, this.onResize);
  }
}, ni = {
  resize: function() {
    if (!this.disabled) {
      var t = this.options, i = this.container, e = this.containerData, n = i.offsetWidth / e.width, r = i.offsetHeight / e.height, o = Math.abs(n - 1) > Math.abs(r - 1) ? n : r;
      if (o !== 1) {
        var s, d;
        t.restore && (s = this.getCanvasData(), d = this.getCropBoxData()), this.render(), t.restore && (this.setCanvasData(C(s, function(l, h) {
          s[h] = l * o;
        })), this.setCropBoxData(C(d, function(l, h) {
          d[h] = l * o;
        })));
      }
    }
  },
  dblclick: function() {
    this.disabled || this.options.dragMode === le || this.setDragMode(We(this.dragBox, xt) ? ce : It);
  },
  wheel: function(t) {
    var i = this, e = Number(this.options.wheelZoomRatio) || 0.1, n = 1;
    this.disabled || (t.preventDefault(), !this.wheeling && (this.wheeling = !0, setTimeout(function() {
      i.wheeling = !1;
    }, 50), t.deltaY ? n = t.deltaY > 0 ? 1 : -1 : t.wheelDelta ? n = -t.wheelDelta / 120 : t.detail && (n = t.detail > 0 ? 1 : -1), this.zoom(-n * e, t)));
  },
  cropStart: function(t) {
    var i = t.buttons, e = t.button;
    if (!(this.disabled || (t.type === "mousedown" || t.type === "pointerdown" && t.pointerType === "mouse") && (v(i) && i !== 1 || v(e) && e !== 0 || t.ctrlKey))) {
      var n = this.options, r = this.pointers, o;
      t.changedTouches ? C(t.changedTouches, function(s) {
        r[s.identifier] = lt(s);
      }) : r[t.pointerId || 0] = lt(t), Object.keys(r).length > 1 && n.zoomable && n.zoomOnTouch ? o = he : o = Nt(t.target, ot), !!Ie.test(o) && tt(this.element, Ot, {
        originalEvent: t,
        action: o
      }) !== !1 && (t.preventDefault(), this.action = o, this.cropping = !1, o === oe && (this.cropping = !0, N(this.dragBox, dt)));
    }
  },
  cropMove: function(t) {
    var i = this.action;
    if (!(this.disabled || !i)) {
      var e = this.pointers;
      t.preventDefault(), tt(this.element, Tt, {
        originalEvent: t,
        action: i
      }) !== !1 && (t.changedTouches ? C(t.changedTouches, function(n) {
        x(e[n.identifier] || {}, lt(n, !0));
      }) : x(e[t.pointerId || 0] || {}, lt(t, !0)), this.change(t));
    }
  },
  cropEnd: function(t) {
    if (!this.disabled) {
      var i = this.action, e = this.pointers;
      t.changedTouches ? C(t.changedTouches, function(n) {
        delete e[n.identifier];
      }) : delete e[t.pointerId || 0], i && (t.preventDefault(), Object.keys(e).length || (this.action = ""), this.cropping && (this.cropping = !1, K(this.dragBox, dt, this.cropped && this.options.modal)), tt(this.element, Mt, {
        originalEvent: t,
        action: i
      }));
    }
  }
}, oi = {
  change: function(t) {
    var i = this.options, e = this.canvasData, n = this.containerData, r = this.cropBoxData, o = this.pointers, s = this.action, d = i.aspectRatio, l = r.left, h = r.top, c = r.width, f = r.height, m = l + c, p = h + f, b = 0, w = 0, M = n.width, O = n.height, T = !0, L;
    !d && t.shiftKey && (d = c && f ? c / f : 1), this.limited && (b = r.minLeft, w = r.minTop, M = b + Math.min(n.width, e.width, e.left + e.width), O = w + Math.min(n.height, e.height, e.top + e.height));
    var D = o[Object.keys(o)[0]], u = {
      x: D.endX - D.startX,
      y: D.endY - D.startY
    }, g = function(I) {
      switch (I) {
        case $:
          m + u.x > M && (u.x = M - m);
          break;
        case q:
          l + u.x < b && (u.x = b - l);
          break;
        case H:
          h + u.y < w && (u.y = w - h);
          break;
        case Q:
          p + u.y > O && (u.y = O - p);
          break;
      }
    };
    switch (s) {
      case St:
        l += u.x, h += u.y;
        break;
      case $:
        if (u.x >= 0 && (m >= M || d && (h <= w || p >= O))) {
          T = !1;
          break;
        }
        g($), c += u.x, c < 0 && (s = q, c = -c, l -= c), d && (f = c / d, h += (r.height - f) / 2);
        break;
      case H:
        if (u.y <= 0 && (h <= w || d && (l <= b || m >= M))) {
          T = !1;
          break;
        }
        g(H), f -= u.y, h += u.y, f < 0 && (s = Q, f = -f, h -= f), d && (c = f * d, l += (r.width - c) / 2);
        break;
      case q:
        if (u.x <= 0 && (l <= b || d && (h <= w || p >= O))) {
          T = !1;
          break;
        }
        g(q), c -= u.x, l += u.x, c < 0 && (s = $, c = -c, l -= c), d && (f = c / d, h += (r.height - f) / 2);
        break;
      case Q:
        if (u.y >= 0 && (p >= O || d && (l <= b || m >= M))) {
          T = !1;
          break;
        }
        g(Q), f += u.y, f < 0 && (s = H, f = -f, h -= f), d && (c = f * d, l += (r.width - c) / 2);
        break;
      case et:
        if (d) {
          if (u.y <= 0 && (h <= w || m >= M)) {
            T = !1;
            break;
          }
          g(H), f -= u.y, h += u.y, c = f * d;
        } else
          g(H), g($), u.x >= 0 ? m < M ? c += u.x : u.y <= 0 && h <= w && (T = !1) : c += u.x, u.y <= 0 ? h > w && (f -= u.y, h += u.y) : (f -= u.y, h += u.y);
        c < 0 && f < 0 ? (s = rt, f = -f, c = -c, h -= f, l -= c) : c < 0 ? (s = it, c = -c, l -= c) : f < 0 && (s = at, f = -f, h -= f);
        break;
      case it:
        if (d) {
          if (u.y <= 0 && (h <= w || l <= b)) {
            T = !1;
            break;
          }
          g(H), f -= u.y, h += u.y, c = f * d, l += r.width - c;
        } else
          g(H), g(q), u.x <= 0 ? l > b ? (c -= u.x, l += u.x) : u.y <= 0 && h <= w && (T = !1) : (c -= u.x, l += u.x), u.y <= 0 ? h > w && (f -= u.y, h += u.y) : (f -= u.y, h += u.y);
        c < 0 && f < 0 ? (s = at, f = -f, c = -c, h -= f, l -= c) : c < 0 ? (s = et, c = -c, l -= c) : f < 0 && (s = rt, f = -f, h -= f);
        break;
      case rt:
        if (d) {
          if (u.x <= 0 && (l <= b || p >= O)) {
            T = !1;
            break;
          }
          g(q), c -= u.x, l += u.x, f = c / d;
        } else
          g(Q), g(q), u.x <= 0 ? l > b ? (c -= u.x, l += u.x) : u.y >= 0 && p >= O && (T = !1) : (c -= u.x, l += u.x), u.y >= 0 ? p < O && (f += u.y) : f += u.y;
        c < 0 && f < 0 ? (s = et, f = -f, c = -c, h -= f, l -= c) : c < 0 ? (s = at, c = -c, l -= c) : f < 0 && (s = it, f = -f, h -= f);
        break;
      case at:
        if (d) {
          if (u.x >= 0 && (m >= M || p >= O)) {
            T = !1;
            break;
          }
          g($), c += u.x, f = c / d;
        } else
          g(Q), g($), u.x >= 0 ? m < M ? c += u.x : u.y >= 0 && p >= O && (T = !1) : c += u.x, u.y >= 0 ? p < O && (f += u.y) : f += u.y;
        c < 0 && f < 0 ? (s = it, f = -f, c = -c, h -= f, l -= c) : c < 0 ? (s = rt, c = -c, l -= c) : f < 0 && (s = et, f = -f, h -= f);
        break;
      case se:
        this.move(u.x, u.y), T = !1;
        break;
      case he:
        this.zoom(Ge(o), t), T = !1;
        break;
      case oe:
        if (!u.x || !u.y) {
          T = !1;
          break;
        }
        L = me(this.cropper), l = D.startX - L.left, h = D.startY - L.top, c = r.minWidth, f = r.minHeight, u.x > 0 ? s = u.y > 0 ? at : et : u.x < 0 && (l -= c, s = u.y > 0 ? rt : it), u.y < 0 && (h -= f), this.cropped || (Y(this.cropBox, S), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
        break;
    }
    T && (r.width = c, r.height = f, r.left = l, r.top = h, this.action = s, this.renderCropBox()), C(o, function(E) {
      E.startX = E.endX, E.startY = E.endY;
    });
  }
}, si = {
  crop: function() {
    return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && N(this.dragBox, dt), Y(this.cropBox, S), this.setCropBoxData(this.initialCropBoxData)), this;
  },
  reset: function() {
    return this.ready && !this.disabled && (this.imageData = x({}, this.initialImageData), this.canvasData = x({}, this.initialCanvasData), this.cropBoxData = x({}, this.initialCropBoxData), this.renderCanvas(), this.cropped && this.renderCropBox()), this;
  },
  clear: function() {
    return this.cropped && !this.disabled && (x(this.cropBoxData, {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), Y(this.dragBox, dt), N(this.cropBox, S)), this;
  },
  replace: function(t) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return !this.disabled && t && (this.isImg && (this.element.src = t), i ? (this.url = t, this.image.src = t, this.ready && (this.viewBoxImage.src = t, C(this.previews, function(e) {
      e.getElementsByTagName("img")[0].src = t;
    }))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(t))), this;
  },
  enable: function() {
    return this.ready && this.disabled && (this.disabled = !1, Y(this.cropper, Ht)), this;
  },
  disable: function() {
    return this.ready && !this.disabled && (this.disabled = !0, N(this.cropper, Ht)), this;
  },
  destroy: function() {
    var t = this.element;
    return t[y] ? (t[y] = void 0, this.isImg && this.replaced && (t.src = this.originalUrl), this.uncreate(), this) : this;
  },
  move: function(t) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, e = this.canvasData, n = e.left, r = e.top;
    return this.moveTo(wt(t) ? t : n + Number(t), wt(i) ? i : r + Number(i));
  },
  moveTo: function(t) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, e = this.canvasData, n = !1;
    return t = Number(t), i = Number(i), this.ready && !this.disabled && this.options.movable && (v(t) && (e.left = t, n = !0), v(i) && (e.top = i, n = !0), n && this.renderCanvas(!0)), this;
  },
  zoom: function(t, i) {
    var e = this.canvasData;
    return t = Number(t), t < 0 ? t = 1 / (1 - t) : t = 1 + t, this.zoomTo(e.width * t / e.naturalWidth, null, i);
  },
  zoomTo: function(t, i, e) {
    var n = this.options, r = this.canvasData, o = r.width, s = r.height, d = r.naturalWidth, l = r.naturalHeight;
    if (t = Number(t), t >= 0 && this.ready && !this.disabled && n.zoomable) {
      var h = d * t, c = l * t;
      if (tt(this.element, Ct, {
        ratio: t,
        oldRatio: o / d,
        originalEvent: e
      }) === !1)
        return this;
      if (e) {
        var f = this.pointers, m = me(this.cropper), p = f && Object.keys(f).length ? $e(f) : {
          pageX: e.pageX,
          pageY: e.pageY
        };
        r.left -= (h - o) * ((p.pageX - m.left - r.left) / o), r.top -= (c - s) * ((p.pageY - m.top - r.top) / s);
      } else
        Z(i) && v(i.x) && v(i.y) ? (r.left -= (h - o) * ((i.x - r.left) / o), r.top -= (c - s) * ((i.y - r.top) / s)) : (r.left -= (h - o) / 2, r.top -= (c - s) / 2);
      r.width = h, r.height = c, this.renderCanvas(!0);
    }
    return this;
  },
  rotate: function(t) {
    return this.rotateTo((this.imageData.rotate || 0) + Number(t));
  },
  rotateTo: function(t) {
    return t = Number(t), v(t) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = t % 360, this.renderCanvas(!0, !0)), this;
  },
  scaleX: function(t) {
    var i = this.imageData.scaleY;
    return this.scale(t, v(i) ? i : 1);
  },
  scaleY: function(t) {
    var i = this.imageData.scaleX;
    return this.scale(v(i) ? i : 1, t);
  },
  scale: function(t) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, e = this.imageData, n = !1;
    return t = Number(t), i = Number(i), this.ready && !this.disabled && this.options.scalable && (v(t) && (e.scaleX = t, n = !0), v(i) && (e.scaleY = i, n = !0), n && this.renderCanvas(!0, !0)), this;
  },
  getData: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, i = this.options, e = this.imageData, n = this.canvasData, r = this.cropBoxData, o;
    if (this.ready && this.cropped) {
      o = {
        x: r.left - n.left,
        y: r.top - n.top,
        width: r.width,
        height: r.height
      };
      var s = e.width / e.naturalWidth;
      if (C(o, function(h, c) {
        o[c] = h / s;
      }), t) {
        var d = Math.round(o.y + o.height), l = Math.round(o.x + o.width);
        o.x = Math.round(o.x), o.y = Math.round(o.y), o.width = l - o.x, o.height = d - o.y;
      }
    } else
      o = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    return i.rotatable && (o.rotate = e.rotate || 0), i.scalable && (o.scaleX = e.scaleX || 1, o.scaleY = e.scaleY || 1), o;
  },
  setData: function(t) {
    var i = this.options, e = this.imageData, n = this.canvasData, r = {};
    if (this.ready && !this.disabled && Z(t)) {
      var o = !1;
      i.rotatable && v(t.rotate) && t.rotate !== e.rotate && (e.rotate = t.rotate, o = !0), i.scalable && (v(t.scaleX) && t.scaleX !== e.scaleX && (e.scaleX = t.scaleX, o = !0), v(t.scaleY) && t.scaleY !== e.scaleY && (e.scaleY = t.scaleY, o = !0)), o && this.renderCanvas(!0, !0);
      var s = e.width / e.naturalWidth;
      v(t.x) && (r.left = t.x * s + n.left), v(t.y) && (r.top = t.y * s + n.top), v(t.width) && (r.width = t.width * s), v(t.height) && (r.height = t.height * s), this.setCropBoxData(r);
    }
    return this;
  },
  getContainerData: function() {
    return this.ready ? x({}, this.containerData) : {};
  },
  getImageData: function() {
    return this.sized ? x({}, this.imageData) : {};
  },
  getCanvasData: function() {
    var t = this.canvasData, i = {};
    return this.ready && C(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(e) {
      i[e] = t[e];
    }), i;
  },
  setCanvasData: function(t) {
    var i = this.canvasData, e = i.aspectRatio;
    return this.ready && !this.disabled && Z(t) && (v(t.left) && (i.left = t.left), v(t.top) && (i.top = t.top), v(t.width) ? (i.width = t.width, i.height = t.width / e) : v(t.height) && (i.height = t.height, i.width = t.height * e), this.renderCanvas(!0)), this;
  },
  getCropBoxData: function() {
    var t = this.cropBoxData, i;
    return this.ready && this.cropped && (i = {
      left: t.left,
      top: t.top,
      width: t.width,
      height: t.height
    }), i || {};
  },
  setCropBoxData: function(t) {
    var i = this.cropBoxData, e = this.options.aspectRatio, n, r;
    return this.ready && this.cropped && !this.disabled && Z(t) && (v(t.left) && (i.left = t.left), v(t.top) && (i.top = t.top), v(t.width) && t.width !== i.width && (n = !0, i.width = t.width), v(t.height) && t.height !== i.height && (r = !0, i.height = t.height), e && (n ? i.height = i.width / e : r && (i.width = i.height * e)), this.renderCropBox()), this;
  },
  getCroppedCanvas: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!this.ready || !window.HTMLCanvasElement)
      return null;
    var i = this.canvasData, e = Fe(this.image, this.imageData, i, t);
    if (!this.cropped)
      return e;
    var n = this.getData(), r = n.x, o = n.y, s = n.width, d = n.height, l = e.width / Math.floor(i.naturalWidth);
    l !== 1 && (r *= l, o *= l, s *= l, d *= l);
    var h = s / d, c = U({
      aspectRatio: h,
      width: t.maxWidth || 1 / 0,
      height: t.maxHeight || 1 / 0
    }), f = U({
      aspectRatio: h,
      width: t.minWidth || 0,
      height: t.minHeight || 0
    }, "cover"), m = U({
      aspectRatio: h,
      width: t.width || (l !== 1 ? e.width : s),
      height: t.height || (l !== 1 ? e.height : d)
    }), p = m.width, b = m.height;
    p = Math.min(c.width, Math.max(f.width, p)), b = Math.min(c.height, Math.max(f.height, b));
    var w = document.createElement("canvas"), M = w.getContext("2d");
    w.width = J(p), w.height = J(b), M.fillStyle = t.fillColor || "transparent", M.fillRect(0, 0, p, b);
    var O = t.imageSmoothingEnabled, T = O === void 0 ? !0 : O, L = t.imageSmoothingQuality;
    M.imageSmoothingEnabled = T, L && (M.imageSmoothingQuality = L);
    var D = e.width, u = e.height, g = r, E = o, I, k, j, V, P, B;
    g <= -s || g > D ? (g = 0, I = 0, j = 0, P = 0) : g <= 0 ? (j = -g, g = 0, I = Math.min(D, s + g), P = I) : g <= D && (j = 0, I = Math.min(s, D - g), P = I), I <= 0 || E <= -d || E > u ? (E = 0, k = 0, V = 0, B = 0) : E <= 0 ? (V = -E, E = 0, k = Math.min(u, d + E), B = k) : E <= u && (V = 0, k = Math.min(d, u - E), B = k);
    var A = [g, E, I, k];
    if (P > 0 && B > 0) {
      var G = p / s;
      A.push(j * G, V * G, P * G, B * G);
    }
    return M.drawImage.apply(M, [e].concat(ne(A.map(function(ht) {
      return Math.floor(J(ht));
    })))), w;
  },
  setAspectRatio: function(t) {
    var i = this.options;
    return !this.disabled && !wt(t) && (i.aspectRatio = Math.max(0, t) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this;
  },
  setDragMode: function(t) {
    var i = this.options, e = this.dragBox, n = this.face;
    if (this.ready && !this.disabled) {
      var r = t === It, o = i.movable && t === ce;
      t = r || o ? t : le, i.dragMode = t, st(e, ot, t), K(e, xt, r), K(e, Dt, o), i.cropBoxMovable || (st(n, ot, t), K(n, xt, r), K(n, Dt, o));
    }
    return this;
  }
}, hi = X.Cropper, we = /* @__PURE__ */ function() {
  function a(t) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (xe(this, a), !t || !ze.test(t.tagName))
      throw new Error("The first argument is required and must be an <img> or <canvas> element.");
    this.element = t, this.options = x({}, Zt, Z(i) && i), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init();
  }
  return De(a, [{
    key: "init",
    value: function() {
      var i = this.element, e = i.tagName.toLowerCase(), n;
      if (!i[y]) {
        if (i[y] = this, e === "img") {
          if (this.isImg = !0, n = i.getAttribute("src") || "", this.originalUrl = n, !n)
            return;
          n = i.src;
        } else
          e === "canvas" && window.HTMLCanvasElement && (n = i.toDataURL());
        this.load(n);
      }
    }
  }, {
    key: "load",
    value: function(i) {
      var e = this;
      if (!!i) {
        this.url = i, this.imageData = {};
        var n = this.element, r = this.options;
        if (!r.rotatable && !r.scalable && (r.checkOrientation = !1), !r.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        }
        if (_e.test(i)) {
          Le.test(i) ? this.read(Ke(i)) : this.clone();
          return;
        }
        var o = new XMLHttpRequest(), s = this.clone.bind(this);
        this.reloading = !0, this.xhr = o, o.onabort = s, o.onerror = s, o.ontimeout = s, o.onprogress = function() {
          o.getResponseHeader("content-type") !== Qt && o.abort();
        }, o.onload = function() {
          e.read(o.response);
        }, o.onloadend = function() {
          e.reloading = !1, e.xhr = null;
        }, r.checkCrossOrigin && Jt(i) && n.crossOrigin && (i = te(i)), o.open("GET", i, !0), o.responseType = "arraybuffer", o.withCredentials = n.crossOrigin === "use-credentials", o.send();
      }
    }
  }, {
    key: "read",
    value: function(i) {
      var e = this.options, n = this.imageData, r = ti(i), o = 0, s = 1, d = 1;
      if (r > 1) {
        this.url = Je(i, Qt);
        var l = ei(r);
        o = l.rotate, s = l.scaleX, d = l.scaleY;
      }
      e.rotatable && (n.rotate = o), e.scalable && (n.scaleX = s, n.scaleY = d), this.clone();
    }
  }, {
    key: "clone",
    value: function() {
      var i = this.element, e = this.url, n = i.crossOrigin, r = e;
      this.options.checkCrossOrigin && Jt(e) && (n || (n = "anonymous"), r = te(e)), this.crossOrigin = n, this.crossOriginUrl = r;
      var o = document.createElement("img");
      n && (o.crossOrigin = n), o.src = r || e, o.alt = i.alt || "The image to crop", this.image = o, o.onload = this.start.bind(this), o.onerror = this.stop.bind(this), N(o, Wt), i.parentNode.insertBefore(o, i.nextSibling);
    }
  }, {
    key: "start",
    value: function() {
      var i = this, e = this.image;
      e.onload = null, e.onerror = null, this.sizing = !0;
      var n = X.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(X.navigator.userAgent), r = function(l, h) {
        x(i.imageData, {
          naturalWidth: l,
          naturalHeight: h,
          aspectRatio: l / h
        }), i.initialImageData = x({}, i.imageData), i.sizing = !1, i.sized = !0, i.build();
      };
      if (e.naturalWidth && !n) {
        r(e.naturalWidth, e.naturalHeight);
        return;
      }
      var o = document.createElement("img"), s = document.body || document.documentElement;
      this.sizingImage = o, o.onload = function() {
        r(o.width, o.height), n || s.removeChild(o);
      }, o.src = e.src, n || (o.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", s.appendChild(o));
    }
  }, {
    key: "stop",
    value: function() {
      var i = this.image;
      i.onload = null, i.onerror = null, i.parentNode.removeChild(i), this.image = null;
    }
  }, {
    key: "build",
    value: function() {
      if (!(!this.sized || this.ready)) {
        var i = this.element, e = this.options, n = this.image, r = i.parentNode, o = document.createElement("div");
        o.innerHTML = Be;
        var s = o.querySelector(".".concat(y, "-container")), d = s.querySelector(".".concat(y, "-canvas")), l = s.querySelector(".".concat(y, "-drag-box")), h = s.querySelector(".".concat(y, "-crop-box")), c = h.querySelector(".".concat(y, "-face"));
        this.container = r, this.cropper = s, this.canvas = d, this.dragBox = l, this.cropBox = h, this.viewBox = s.querySelector(".".concat(y, "-view-box")), this.face = c, d.appendChild(n), N(i, S), r.insertBefore(s, i.nextSibling), this.isImg || Y(n, Wt), this.initPreview(), this.bind(), e.initialAspectRatio = Math.max(0, e.initialAspectRatio) || NaN, e.aspectRatio = Math.max(0, e.aspectRatio) || NaN, e.viewMode = Math.max(0, Math.min(3, Math.round(e.viewMode))) || 0, N(h, S), e.guides || N(h.getElementsByClassName("".concat(y, "-dashed")), S), e.center || N(h.getElementsByClassName("".concat(y, "-center")), S), e.background && N(s, "".concat(y, "-bg")), e.highlight || N(c, Ne), e.cropBoxMovable && (N(c, Dt), st(c, ot, St)), e.cropBoxResizable || (N(h.getElementsByClassName("".concat(y, "-line")), S), N(h.getElementsByClassName("".concat(y, "-point")), S)), this.render(), this.ready = !0, this.setDragMode(e.dragMode), e.autoCrop && this.crop(), this.setData(e.data), R(e.ready) && _(i, $t, e.ready, {
          once: !0
        }), tt(i, $t);
      }
    }
  }, {
    key: "unbuild",
    value: function() {
      !this.ready || (this.ready = !1, this.unbind(), this.resetPreview(), this.cropper.parentNode.removeChild(this.cropper), Y(this.element, S));
    }
  }, {
    key: "uncreate",
    value: function() {
      this.ready ? (this.unbuild(), this.ready = !1, this.cropped = !1) : this.sizing ? (this.sizingImage.onload = null, this.sizing = !1, this.sized = !1) : this.reloading ? (this.xhr.onabort = null, this.xhr.abort()) : this.image && this.stop();
    }
  }], [{
    key: "noConflict",
    value: function() {
      return window.Cropper = hi, a;
    }
  }, {
    key: "setDefaults",
    value: function(i) {
      x(Zt, Z(i) && i);
    }
  }]), a;
}();
x(we.prototype, ii, ai, ri, ni, oi, si);
var ut = function() {
  return ut = Object.assign || function(t) {
    for (var i, e = 1, n = arguments.length; e < n; e++) {
      i = arguments[e];
      for (var r in i)
        Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
    }
    return t;
  }, ut.apply(this, arguments);
};
function ee(a, t) {
  var i = {};
  for (var e in a)
    Object.prototype.hasOwnProperty.call(a, e) && t.indexOf(e) < 0 && (i[e] = a[e]);
  if (a != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, e = Object.getOwnPropertySymbols(a); n < e.length; n++)
      t.indexOf(e[n]) < 0 && Object.prototype.propertyIsEnumerable.call(a, e[n]) && (i[e[n]] = a[e[n]]);
  return i;
}
var ci = function(a, t) {
  t === void 0 && (t = {});
  var i = t.enable, e = i === void 0 ? !0 : i, n = t.scaleX, r = n === void 0 ? 1 : n, o = t.scaleY, s = o === void 0 ? 1 : o, d = t.zoomTo, l = d === void 0 ? 0 : d, h = t.rotateTo;
  e ? a.enable() : a.disable(), a.scaleX(r), a.scaleY(s), h !== void 0 && a.rotateTo(h), l > 0 && a.zoomTo(l);
}, li = function() {
  for (var a = [], t = 0; t < arguments.length; t++)
    a[t] = arguments[t];
  var i = ae(null);
  return ie.useEffect(function() {
    a.forEach(function(e) {
      !e || (typeof e == "function" ? e(i.current) : e.current = i.current);
    });
  }, [a]), i;
}, pi = ie.forwardRef(function(a, t) {
  var i = ee(a, []), e = i.dragMode, n = e === void 0 ? "crop" : e, r = i.src, o = i.style, s = i.className, d = i.crossOrigin, l = i.scaleX, h = i.scaleY, c = i.enable, f = i.zoomTo, m = i.rotateTo, p = i.alt, b = p === void 0 ? "picture" : p, w = i.ready, M = i.onInitialized, O = ee(i, ["dragMode", "src", "style", "className", "crossOrigin", "scaleX", "scaleY", "enable", "zoomTo", "rotateTo", "alt", "ready", "onInitialized"]), T = {
    scaleY: h,
    scaleX: l,
    enable: c,
    zoomTo: f,
    rotateTo: m
  }, L = ae(null), D = li(t, L);
  return vt(function() {
    var u;
    ((u = D.current) === null || u === void 0 ? void 0 : u.cropper) && typeof f == "number" && D.current.cropper.zoomTo(f);
  }, [i.zoomTo]), vt(function() {
    var u;
    ((u = D.current) === null || u === void 0 ? void 0 : u.cropper) && typeof r < "u" && D.current.cropper.reset().clear().replace(r);
  }, [r]), vt(function() {
    if (D.current !== null) {
      var u = new we(D.current, ut(ut({
        dragMode: n
      }, O), {
        ready: function(g) {
          g.currentTarget !== null && ci(g.currentTarget.cropper, T), w && w(g);
        }
      }));
      M && M(u);
    }
    return function() {
      var g, E;
      (E = (g = D.current) === null || g === void 0 ? void 0 : g.cropper) === null || E === void 0 || E.destroy();
    };
  }, [D]), /* @__PURE__ */ Xt("div", {
    style: o,
    className: s,
    children: /* @__PURE__ */ Xt("img", {
      crossOrigin: d,
      src: r,
      alt: b,
      style: {
        opacity: 0,
        maxWidth: "100%"
      },
      ref: D
    })
  });
});
export {
  pi as Cropper,
  pi as default
};
