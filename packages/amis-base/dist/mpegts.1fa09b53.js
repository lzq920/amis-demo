import { g as Ve } from "./index.7add3ddd.js";
function Ge(Oe, Be) {
  for (var oe = 0; oe < Be.length; oe++) {
    const q = Be[oe];
    if (typeof q != "string" && !Array.isArray(q)) {
      for (const k in q)
        if (k !== "default" && !(k in Oe)) {
          const x = Object.getOwnPropertyDescriptor(q, k);
          x && Object.defineProperty(Oe, k, x.get ? x : {
            enumerable: !0,
            get: () => q[k]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(Oe, Symbol.toStringTag, { value: "Module" }));
}
var Ne = { exports: {} };
(function(Oe, Be) {
  (function(oe, q) {
    Oe.exports = q();
  })(window, function() {
    return function(oe) {
      var q = {};
      function k(x) {
        if (q[x])
          return q[x].exports;
        var D = q[x] = { i: x, l: !1, exports: {} };
        return oe[x].call(D.exports, D, D.exports, k), D.l = !0, D.exports;
      }
      return k.m = oe, k.c = q, k.d = function(x, D, v) {
        k.o(x, D) || Object.defineProperty(x, D, { enumerable: !0, get: v });
      }, k.r = function(x) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(x, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(x, "__esModule", { value: !0 });
      }, k.t = function(x, D) {
        if (1 & D && (x = k(x)), 8 & D || 4 & D && typeof x == "object" && x && x.__esModule)
          return x;
        var v = /* @__PURE__ */ Object.create(null);
        if (k.r(v), Object.defineProperty(v, "default", { enumerable: !0, value: x }), 2 & D && typeof x != "string")
          for (var g in x)
            k.d(v, g, function(p) {
              return x[p];
            }.bind(null, g));
        return v;
      }, k.n = function(x) {
        var D = x && x.__esModule ? function() {
          return x.default;
        } : function() {
          return x;
        };
        return k.d(D, "a", D), D;
      }, k.o = function(x, D) {
        return Object.prototype.hasOwnProperty.call(x, D);
      }, k.p = "", k(k.s = 14);
    }([function(oe, q, k) {
      var x = k(6), D = k.n(x), v = function() {
        function g() {
        }
        return g.e = function(p, c) {
          p && !g.FORCE_GLOBAL_TAG || (p = g.GLOBAL_TAG);
          var b = "[" + p + "] > " + c;
          g.ENABLE_CALLBACK && g.emitter.emit("log", "error", b), g.ENABLE_ERROR && (console.error ? console.error(b) : console.warn ? console.warn(b) : console.log(b));
        }, g.i = function(p, c) {
          p && !g.FORCE_GLOBAL_TAG || (p = g.GLOBAL_TAG);
          var b = "[" + p + "] > " + c;
          g.ENABLE_CALLBACK && g.emitter.emit("log", "info", b), g.ENABLE_INFO && (console.info ? console.info(b) : console.log(b));
        }, g.w = function(p, c) {
          p && !g.FORCE_GLOBAL_TAG || (p = g.GLOBAL_TAG);
          var b = "[" + p + "] > " + c;
          g.ENABLE_CALLBACK && g.emitter.emit("log", "warn", b), g.ENABLE_WARN && (console.warn ? console.warn(b) : console.log(b));
        }, g.d = function(p, c) {
          p && !g.FORCE_GLOBAL_TAG || (p = g.GLOBAL_TAG);
          var b = "[" + p + "] > " + c;
          g.ENABLE_CALLBACK && g.emitter.emit("log", "debug", b), g.ENABLE_DEBUG && (console.debug ? console.debug(b) : console.log(b));
        }, g.v = function(p, c) {
          p && !g.FORCE_GLOBAL_TAG || (p = g.GLOBAL_TAG);
          var b = "[" + p + "] > " + c;
          g.ENABLE_CALLBACK && g.emitter.emit("log", "verbose", b), g.ENABLE_VERBOSE && console.log(b);
        }, g;
      }();
      v.GLOBAL_TAG = "mpegts.js", v.FORCE_GLOBAL_TAG = !1, v.ENABLE_ERROR = !0, v.ENABLE_INFO = !0, v.ENABLE_WARN = !0, v.ENABLE_DEBUG = !0, v.ENABLE_VERBOSE = !0, v.ENABLE_CALLBACK = !1, v.emitter = new D.a(), q.a = v;
    }, function(oe, q, k) {
      q.a = { IO_ERROR: "io_error", DEMUX_ERROR: "demux_error", INIT_SEGMENT: "init_segment", MEDIA_SEGMENT: "media_segment", LOADING_COMPLETE: "loading_complete", RECOVERED_EARLY_EOF: "recovered_early_eof", MEDIA_INFO: "media_info", METADATA_ARRIVED: "metadata_arrived", SCRIPTDATA_ARRIVED: "scriptdata_arrived", TIMED_ID3_METADATA_ARRIVED: "timed_id3_metadata_arrived", PES_PRIVATE_DATA_DESCRIPTOR: "pes_private_data_descriptor", PES_PRIVATE_DATA_ARRIVED: "pes_private_data_arrived", STATISTICS_INFO: "statistics_info", RECOMMEND_SEEKPOINT: "recommend_seekpoint" };
    }, function(oe, q, k) {
      k.d(q, "c", function() {
        return D;
      }), k.d(q, "b", function() {
        return v;
      }), k.d(q, "a", function() {
        return g;
      });
      var x = k(3), D = { kIdle: 0, kConnecting: 1, kBuffering: 2, kError: 3, kComplete: 4 }, v = { OK: "OK", EXCEPTION: "Exception", HTTP_STATUS_CODE_INVALID: "HttpStatusCodeInvalid", CONNECTING_TIMEOUT: "ConnectingTimeout", EARLY_EOF: "EarlyEof", UNRECOVERABLE_EARLY_EOF: "UnrecoverableEarlyEof" }, g = function() {
        function p(c) {
          this._type = c || "undefined", this._status = D.kIdle, this._needStash = !1, this._onContentLengthKnown = null, this._onURLRedirect = null, this._onDataArrival = null, this._onError = null, this._onComplete = null;
        }
        return p.prototype.destroy = function() {
          this._status = D.kIdle, this._onContentLengthKnown = null, this._onURLRedirect = null, this._onDataArrival = null, this._onError = null, this._onComplete = null;
        }, p.prototype.isWorking = function() {
          return this._status === D.kConnecting || this._status === D.kBuffering;
        }, Object.defineProperty(p.prototype, "type", { get: function() {
          return this._type;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(p.prototype, "status", { get: function() {
          return this._status;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(p.prototype, "needStashBuffer", { get: function() {
          return this._needStash;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(p.prototype, "onContentLengthKnown", { get: function() {
          return this._onContentLengthKnown;
        }, set: function(c) {
          this._onContentLengthKnown = c;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(p.prototype, "onURLRedirect", { get: function() {
          return this._onURLRedirect;
        }, set: function(c) {
          this._onURLRedirect = c;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(p.prototype, "onDataArrival", { get: function() {
          return this._onDataArrival;
        }, set: function(c) {
          this._onDataArrival = c;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(p.prototype, "onError", { get: function() {
          return this._onError;
        }, set: function(c) {
          this._onError = c;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(p.prototype, "onComplete", { get: function() {
          return this._onComplete;
        }, set: function(c) {
          this._onComplete = c;
        }, enumerable: !1, configurable: !0 }), p.prototype.open = function(c, b) {
          throw new x.c("Unimplemented abstract function!");
        }, p.prototype.abort = function() {
          throw new x.c("Unimplemented abstract function!");
        }, p;
      }();
    }, function(oe, q, k) {
      k.d(q, "d", function() {
        return v;
      }), k.d(q, "a", function() {
        return g;
      }), k.d(q, "b", function() {
        return p;
      }), k.d(q, "c", function() {
        return c;
      });
      var x, D = (x = function(b, I) {
        return (x = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(T, F) {
          T.__proto__ = F;
        } || function(T, F) {
          for (var V in F)
            F.hasOwnProperty(V) && (T[V] = F[V]);
        })(b, I);
      }, function(b, I) {
        function T() {
          this.constructor = b;
        }
        x(b, I), b.prototype = I === null ? Object.create(I) : (T.prototype = I.prototype, new T());
      }), v = function() {
        function b(I) {
          this._message = I;
        }
        return Object.defineProperty(b.prototype, "name", { get: function() {
          return "RuntimeException";
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(b.prototype, "message", { get: function() {
          return this._message;
        }, enumerable: !1, configurable: !0 }), b.prototype.toString = function() {
          return this.name + ": " + this.message;
        }, b;
      }(), g = function(b) {
        function I(T) {
          return b.call(this, T) || this;
        }
        return D(I, b), Object.defineProperty(I.prototype, "name", { get: function() {
          return "IllegalStateException";
        }, enumerable: !1, configurable: !0 }), I;
      }(v), p = function(b) {
        function I(T) {
          return b.call(this, T) || this;
        }
        return D(I, b), Object.defineProperty(I.prototype, "name", { get: function() {
          return "InvalidArgumentException";
        }, enumerable: !1, configurable: !0 }), I;
      }(v), c = function(b) {
        function I(T) {
          return b.call(this, T) || this;
        }
        return D(I, b), Object.defineProperty(I.prototype, "name", { get: function() {
          return "NotImplementedException";
        }, enumerable: !1, configurable: !0 }), I;
      }(v);
    }, function(oe, q, k) {
      var x = {};
      (function() {
        var D = self.navigator.userAgent.toLowerCase(), v = /(edge)\/([\w.]+)/.exec(D) || /(opr)[\/]([\w.]+)/.exec(D) || /(chrome)[ \/]([\w.]+)/.exec(D) || /(iemobile)[\/]([\w.]+)/.exec(D) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(D) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(D) || /(webkit)[ \/]([\w.]+)/.exec(D) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(D) || /(msie) ([\w.]+)/.exec(D) || D.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(D) || D.indexOf("compatible") < 0 && /(firefox)[ \/]([\w.]+)/.exec(D) || [], g = /(ipad)/.exec(D) || /(ipod)/.exec(D) || /(windows phone)/.exec(D) || /(iphone)/.exec(D) || /(kindle)/.exec(D) || /(android)/.exec(D) || /(windows)/.exec(D) || /(mac)/.exec(D) || /(linux)/.exec(D) || /(cros)/.exec(D) || [], p = { browser: v[5] || v[3] || v[1] || "", version: v[2] || v[4] || "0", majorVersion: v[4] || v[2] || "0", platform: g[0] || "" }, c = {};
        if (p.browser) {
          c[p.browser] = !0;
          var b = p.majorVersion.split(".");
          c.version = { major: parseInt(p.majorVersion, 10), string: p.version }, b.length > 1 && (c.version.minor = parseInt(b[1], 10)), b.length > 2 && (c.version.build = parseInt(b[2], 10));
        }
        p.platform && (c[p.platform] = !0), (c.chrome || c.opr || c.safari) && (c.webkit = !0), (c.rv || c.iemobile) && (c.rv && delete c.rv, p.browser = "msie", c.msie = !0), c.edge && (delete c.edge, p.browser = "msedge", c.msedge = !0), c.opr && (p.browser = "opera", c.opera = !0), c.safari && c.android && (p.browser = "android", c.android = !0);
        for (var I in c.name = p.browser, c.platform = p.platform, x)
          x.hasOwnProperty(I) && delete x[I];
        Object.assign(x, c);
      })(), q.a = x;
    }, function(oe, q, k) {
      q.a = { OK: "OK", FORMAT_ERROR: "FormatError", FORMAT_UNSUPPORTED: "FormatUnsupported", CODEC_UNSUPPORTED: "CodecUnsupported" };
    }, function(oe, q, k) {
      var x, D = typeof Reflect == "object" ? Reflect : null, v = D && typeof D.apply == "function" ? D.apply : function(m, B, E) {
        return Function.prototype.apply.call(m, B, E);
      };
      x = D && typeof D.ownKeys == "function" ? D.ownKeys : Object.getOwnPropertySymbols ? function(m) {
        return Object.getOwnPropertyNames(m).concat(Object.getOwnPropertySymbols(m));
      } : function(m) {
        return Object.getOwnPropertyNames(m);
      };
      var g = Number.isNaN || function(m) {
        return m != m;
      };
      function p() {
        p.init.call(this);
      }
      oe.exports = p, oe.exports.once = function(m, B) {
        return new Promise(function(E, o) {
          function u(_) {
            m.removeListener(B, d), o(_);
          }
          function d() {
            typeof m.removeListener == "function" && m.removeListener("error", u), E([].slice.call(arguments));
          }
          K(m, B, d, { once: !0 }), B !== "error" && function(_, A, P) {
            typeof _.on == "function" && K(_, "error", A, P);
          }(m, u, { once: !0 });
        });
      }, p.EventEmitter = p, p.prototype._events = void 0, p.prototype._eventsCount = 0, p.prototype._maxListeners = void 0;
      var c = 10;
      function b(m) {
        if (typeof m != "function")
          throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof m);
      }
      function I(m) {
        return m._maxListeners === void 0 ? p.defaultMaxListeners : m._maxListeners;
      }
      function T(m, B, E, o) {
        var u, d, _, A;
        if (b(E), (d = m._events) === void 0 ? (d = m._events = /* @__PURE__ */ Object.create(null), m._eventsCount = 0) : (d.newListener !== void 0 && (m.emit("newListener", B, E.listener ? E.listener : E), d = m._events), _ = d[B]), _ === void 0)
          _ = d[B] = E, ++m._eventsCount;
        else if (typeof _ == "function" ? _ = d[B] = o ? [E, _] : [_, E] : o ? _.unshift(E) : _.push(E), (u = I(m)) > 0 && _.length > u && !_.warned) {
          _.warned = !0;
          var P = new Error("Possible EventEmitter memory leak detected. " + _.length + " " + String(B) + " listeners added. Use emitter.setMaxListeners() to increase limit");
          P.name = "MaxListenersExceededWarning", P.emitter = m, P.type = B, P.count = _.length, A = P, console && console.warn && console.warn(A);
        }
        return m;
      }
      function F() {
        if (!this.fired)
          return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
      }
      function V(m, B, E) {
        var o = { fired: !1, wrapFn: void 0, target: m, type: B, listener: E }, u = F.bind(o);
        return u.listener = E, o.wrapFn = u, u;
      }
      function he(m, B, E) {
        var o = m._events;
        if (o === void 0)
          return [];
        var u = o[B];
        return u === void 0 ? [] : typeof u == "function" ? E ? [u.listener || u] : [u] : E ? function(d) {
          for (var _ = new Array(d.length), A = 0; A < _.length; ++A)
            _[A] = d[A].listener || d[A];
          return _;
        }(u) : X(u, u.length);
      }
      function ie(m) {
        var B = this._events;
        if (B !== void 0) {
          var E = B[m];
          if (typeof E == "function")
            return 1;
          if (E !== void 0)
            return E.length;
        }
        return 0;
      }
      function X(m, B) {
        for (var E = new Array(B), o = 0; o < B; ++o)
          E[o] = m[o];
        return E;
      }
      function K(m, B, E, o) {
        if (typeof m.on == "function")
          o.once ? m.once(B, E) : m.on(B, E);
        else {
          if (typeof m.addEventListener != "function")
            throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof m);
          m.addEventListener(B, function u(d) {
            o.once && m.removeEventListener(B, u), E(d);
          });
        }
      }
      Object.defineProperty(p, "defaultMaxListeners", { enumerable: !0, get: function() {
        return c;
      }, set: function(m) {
        if (typeof m != "number" || m < 0 || g(m))
          throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + m + ".");
        c = m;
      } }), p.init = function() {
        this._events !== void 0 && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
      }, p.prototype.setMaxListeners = function(m) {
        if (typeof m != "number" || m < 0 || g(m))
          throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + m + ".");
        return this._maxListeners = m, this;
      }, p.prototype.getMaxListeners = function() {
        return I(this);
      }, p.prototype.emit = function(m) {
        for (var B = [], E = 1; E < arguments.length; E++)
          B.push(arguments[E]);
        var o = m === "error", u = this._events;
        if (u !== void 0)
          o = o && u.error === void 0;
        else if (!o)
          return !1;
        if (o) {
          var d;
          if (B.length > 0 && (d = B[0]), d instanceof Error)
            throw d;
          var _ = new Error("Unhandled error." + (d ? " (" + d.message + ")" : ""));
          throw _.context = d, _;
        }
        var A = u[m];
        if (A === void 0)
          return !1;
        if (typeof A == "function")
          v(A, this, B);
        else {
          var P = A.length, W = X(A, P);
          for (E = 0; E < P; ++E)
            v(W[E], this, B);
        }
        return !0;
      }, p.prototype.addListener = function(m, B) {
        return T(this, m, B, !1);
      }, p.prototype.on = p.prototype.addListener, p.prototype.prependListener = function(m, B) {
        return T(this, m, B, !0);
      }, p.prototype.once = function(m, B) {
        return b(B), this.on(m, V(this, m, B)), this;
      }, p.prototype.prependOnceListener = function(m, B) {
        return b(B), this.prependListener(m, V(this, m, B)), this;
      }, p.prototype.removeListener = function(m, B) {
        var E, o, u, d, _;
        if (b(B), (o = this._events) === void 0)
          return this;
        if ((E = o[m]) === void 0)
          return this;
        if (E === B || E.listener === B)
          --this._eventsCount == 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete o[m], o.removeListener && this.emit("removeListener", m, E.listener || B));
        else if (typeof E != "function") {
          for (u = -1, d = E.length - 1; d >= 0; d--)
            if (E[d] === B || E[d].listener === B) {
              _ = E[d].listener, u = d;
              break;
            }
          if (u < 0)
            return this;
          u === 0 ? E.shift() : function(A, P) {
            for (; P + 1 < A.length; P++)
              A[P] = A[P + 1];
            A.pop();
          }(E, u), E.length === 1 && (o[m] = E[0]), o.removeListener !== void 0 && this.emit("removeListener", m, _ || B);
        }
        return this;
      }, p.prototype.off = p.prototype.removeListener, p.prototype.removeAllListeners = function(m) {
        var B, E, o;
        if ((E = this._events) === void 0)
          return this;
        if (E.removeListener === void 0)
          return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : E[m] !== void 0 && (--this._eventsCount == 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete E[m]), this;
        if (arguments.length === 0) {
          var u, d = Object.keys(E);
          for (o = 0; o < d.length; ++o)
            (u = d[o]) !== "removeListener" && this.removeAllListeners(u);
          return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
        }
        if (typeof (B = E[m]) == "function")
          this.removeListener(m, B);
        else if (B !== void 0)
          for (o = B.length - 1; o >= 0; o--)
            this.removeListener(m, B[o]);
        return this;
      }, p.prototype.listeners = function(m) {
        return he(this, m, !0);
      }, p.prototype.rawListeners = function(m) {
        return he(this, m, !1);
      }, p.listenerCount = function(m, B) {
        return typeof m.listenerCount == "function" ? m.listenerCount(B) : ie.call(m, B);
      }, p.prototype.listenerCount = ie, p.prototype.eventNames = function() {
        return this._eventsCount > 0 ? x(this._events) : [];
      };
    }, function(oe, q, k) {
      k.d(q, "d", function() {
        return x;
      }), k.d(q, "b", function() {
        return D;
      }), k.d(q, "a", function() {
        return v;
      }), k.d(q, "c", function() {
        return g;
      });
      var x = function(p, c, b, I, T) {
        this.dts = p, this.pts = c, this.duration = b, this.originalDts = I, this.isSyncPoint = T, this.fileposition = null;
      }, D = function() {
        function p() {
          this.beginDts = 0, this.endDts = 0, this.beginPts = 0, this.endPts = 0, this.originalBeginDts = 0, this.originalEndDts = 0, this.syncPoints = [], this.firstSample = null, this.lastSample = null;
        }
        return p.prototype.appendSyncPoint = function(c) {
          c.isSyncPoint = !0, this.syncPoints.push(c);
        }, p;
      }(), v = function() {
        function p() {
          this._list = [];
        }
        return p.prototype.clear = function() {
          this._list = [];
        }, p.prototype.appendArray = function(c) {
          var b = this._list;
          c.length !== 0 && (b.length > 0 && c[0].originalDts < b[b.length - 1].originalDts && this.clear(), Array.prototype.push.apply(b, c));
        }, p.prototype.getLastSyncPointBeforeDts = function(c) {
          if (this._list.length == 0)
            return null;
          var b = this._list, I = 0, T = b.length - 1, F = 0, V = 0, he = T;
          for (c < b[0].dts && (I = 0, V = he + 1); V <= he; ) {
            if ((F = V + Math.floor((he - V) / 2)) === T || c >= b[F].dts && c < b[F + 1].dts) {
              I = F;
              break;
            }
            b[F].dts < c ? V = F + 1 : he = F - 1;
          }
          return this._list[I];
        }, p;
      }(), g = function() {
        function p(c) {
          this._type = c, this._list = [], this._lastAppendLocation = -1;
        }
        return Object.defineProperty(p.prototype, "type", { get: function() {
          return this._type;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(p.prototype, "length", { get: function() {
          return this._list.length;
        }, enumerable: !1, configurable: !0 }), p.prototype.isEmpty = function() {
          return this._list.length === 0;
        }, p.prototype.clear = function() {
          this._list = [], this._lastAppendLocation = -1;
        }, p.prototype._searchNearestSegmentBefore = function(c) {
          var b = this._list;
          if (b.length === 0)
            return -2;
          var I = b.length - 1, T = 0, F = 0, V = I, he = 0;
          if (c < b[0].originalBeginDts)
            return he = -1;
          for (; F <= V; ) {
            if ((T = F + Math.floor((V - F) / 2)) === I || c > b[T].lastSample.originalDts && c < b[T + 1].originalBeginDts) {
              he = T;
              break;
            }
            b[T].originalBeginDts < c ? F = T + 1 : V = T - 1;
          }
          return he;
        }, p.prototype._searchNearestSegmentAfter = function(c) {
          return this._searchNearestSegmentBefore(c) + 1;
        }, p.prototype.append = function(c) {
          var b = this._list, I = c, T = this._lastAppendLocation, F = 0;
          T !== -1 && T < b.length && I.originalBeginDts >= b[T].lastSample.originalDts && (T === b.length - 1 || T < b.length - 1 && I.originalBeginDts < b[T + 1].originalBeginDts) ? F = T + 1 : b.length > 0 && (F = this._searchNearestSegmentBefore(I.originalBeginDts) + 1), this._lastAppendLocation = F, this._list.splice(F, 0, I);
        }, p.prototype.getLastSegmentBefore = function(c) {
          var b = this._searchNearestSegmentBefore(c);
          return b >= 0 ? this._list[b] : null;
        }, p.prototype.getLastSampleBefore = function(c) {
          var b = this.getLastSegmentBefore(c);
          return b != null ? b.lastSample : null;
        }, p.prototype.getLastSyncPointBefore = function(c) {
          for (var b = this._searchNearestSegmentBefore(c), I = this._list[b].syncPoints; I.length === 0 && b > 0; )
            b--, I = this._list[b].syncPoints;
          return I.length > 0 ? I[I.length - 1] : null;
        }, p;
      }();
    }, function(oe, q, k) {
      var x = function() {
        function D() {
          this.mimeType = null, this.duration = null, this.hasAudio = null, this.hasVideo = null, this.audioCodec = null, this.videoCodec = null, this.audioDataRate = null, this.videoDataRate = null, this.audioSampleRate = null, this.audioChannelCount = null, this.width = null, this.height = null, this.fps = null, this.profile = null, this.level = null, this.refFrames = null, this.chromaFormat = null, this.sarNum = null, this.sarDen = null, this.metadata = null, this.segments = null, this.segmentCount = null, this.hasKeyframesIndex = null, this.keyframesIndex = null;
        }
        return D.prototype.isComplete = function() {
          var v = this.hasAudio === !1 || this.hasAudio === !0 && this.audioCodec != null && this.audioSampleRate != null && this.audioChannelCount != null, g = this.hasVideo === !1 || this.hasVideo === !0 && this.videoCodec != null && this.width != null && this.height != null && this.fps != null && this.profile != null && this.level != null && this.refFrames != null && this.chromaFormat != null && this.sarNum != null && this.sarDen != null;
          return this.mimeType != null && v && g;
        }, D.prototype.isSeekable = function() {
          return this.hasKeyframesIndex === !0;
        }, D.prototype.getNearestKeyframe = function(v) {
          if (this.keyframesIndex == null)
            return null;
          var g = this.keyframesIndex, p = this._search(g.times, v);
          return { index: p, milliseconds: g.times[p], fileposition: g.filepositions[p] };
        }, D.prototype._search = function(v, g) {
          var p = 0, c = v.length - 1, b = 0, I = 0, T = c;
          for (g < v[0] && (p = 0, I = T + 1); I <= T; ) {
            if ((b = I + Math.floor((T - I) / 2)) === c || g >= v[b] && g < v[b + 1]) {
              p = b;
              break;
            }
            v[b] < g ? I = b + 1 : T = b - 1;
          }
          return p;
        }, D;
      }();
      q.a = x;
    }, function(oe, q, k) {
      var x = k(6), D = k.n(x), v = k(0), g = function() {
        function p() {
        }
        return Object.defineProperty(p, "forceGlobalTag", { get: function() {
          return v.a.FORCE_GLOBAL_TAG;
        }, set: function(c) {
          v.a.FORCE_GLOBAL_TAG = c, p._notifyChange();
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(p, "globalTag", { get: function() {
          return v.a.GLOBAL_TAG;
        }, set: function(c) {
          v.a.GLOBAL_TAG = c, p._notifyChange();
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(p, "enableAll", { get: function() {
          return v.a.ENABLE_VERBOSE && v.a.ENABLE_DEBUG && v.a.ENABLE_INFO && v.a.ENABLE_WARN && v.a.ENABLE_ERROR;
        }, set: function(c) {
          v.a.ENABLE_VERBOSE = c, v.a.ENABLE_DEBUG = c, v.a.ENABLE_INFO = c, v.a.ENABLE_WARN = c, v.a.ENABLE_ERROR = c, p._notifyChange();
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(p, "enableDebug", { get: function() {
          return v.a.ENABLE_DEBUG;
        }, set: function(c) {
          v.a.ENABLE_DEBUG = c, p._notifyChange();
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(p, "enableVerbose", { get: function() {
          return v.a.ENABLE_VERBOSE;
        }, set: function(c) {
          v.a.ENABLE_VERBOSE = c, p._notifyChange();
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(p, "enableInfo", { get: function() {
          return v.a.ENABLE_INFO;
        }, set: function(c) {
          v.a.ENABLE_INFO = c, p._notifyChange();
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(p, "enableWarn", { get: function() {
          return v.a.ENABLE_WARN;
        }, set: function(c) {
          v.a.ENABLE_WARN = c, p._notifyChange();
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(p, "enableError", { get: function() {
          return v.a.ENABLE_ERROR;
        }, set: function(c) {
          v.a.ENABLE_ERROR = c, p._notifyChange();
        }, enumerable: !1, configurable: !0 }), p.getConfig = function() {
          return { globalTag: v.a.GLOBAL_TAG, forceGlobalTag: v.a.FORCE_GLOBAL_TAG, enableVerbose: v.a.ENABLE_VERBOSE, enableDebug: v.a.ENABLE_DEBUG, enableInfo: v.a.ENABLE_INFO, enableWarn: v.a.ENABLE_WARN, enableError: v.a.ENABLE_ERROR, enableCallback: v.a.ENABLE_CALLBACK };
        }, p.applyConfig = function(c) {
          v.a.GLOBAL_TAG = c.globalTag, v.a.FORCE_GLOBAL_TAG = c.forceGlobalTag, v.a.ENABLE_VERBOSE = c.enableVerbose, v.a.ENABLE_DEBUG = c.enableDebug, v.a.ENABLE_INFO = c.enableInfo, v.a.ENABLE_WARN = c.enableWarn, v.a.ENABLE_ERROR = c.enableError, v.a.ENABLE_CALLBACK = c.enableCallback;
        }, p._notifyChange = function() {
          var c = p.emitter;
          if (c.listenerCount("change") > 0) {
            var b = p.getConfig();
            c.emit("change", b);
          }
        }, p.registerListener = function(c) {
          p.emitter.addListener("change", c);
        }, p.removeListener = function(c) {
          p.emitter.removeListener("change", c);
        }, p.addLogListener = function(c) {
          v.a.emitter.addListener("log", c), v.a.emitter.listenerCount("log") > 0 && (v.a.ENABLE_CALLBACK = !0, p._notifyChange());
        }, p.removeLogListener = function(c) {
          v.a.emitter.removeListener("log", c), v.a.emitter.listenerCount("log") === 0 && (v.a.ENABLE_CALLBACK = !1, p._notifyChange());
        }, p;
      }();
      g.emitter = new D.a(), q.a = g;
    }, function(oe, q, k) {
      var x = k(6), D = k.n(x), v = k(0), g = k(4), p = k(8);
      function c(i, e, t) {
        var n = i;
        if (e + t < n.length) {
          for (; t--; )
            if ((192 & n[++e]) != 128)
              return !1;
          return !0;
        }
        return !1;
      }
      var b, I = function(i) {
        for (var e = [], t = i, n = 0, r = i.length; n < r; )
          if (t[n] < 128)
            e.push(String.fromCharCode(t[n])), ++n;
          else {
            if (!(t[n] < 192)) {
              if (t[n] < 224) {
                if (c(t, n, 1) && (s = (31 & t[n]) << 6 | 63 & t[n + 1]) >= 128) {
                  e.push(String.fromCharCode(65535 & s)), n += 2;
                  continue;
                }
              } else if (t[n] < 240) {
                if (c(t, n, 2) && (s = (15 & t[n]) << 12 | (63 & t[n + 1]) << 6 | 63 & t[n + 2]) >= 2048 && (63488 & s) != 55296) {
                  e.push(String.fromCharCode(65535 & s)), n += 3;
                  continue;
                }
              } else if (t[n] < 248) {
                var s;
                if (c(t, n, 3) && (s = (7 & t[n]) << 18 | (63 & t[n + 1]) << 12 | (63 & t[n + 2]) << 6 | 63 & t[n + 3]) > 65536 && s < 1114112) {
                  s -= 65536, e.push(String.fromCharCode(s >>> 10 | 55296)), e.push(String.fromCharCode(1023 & s | 56320)), n += 4;
                  continue;
                }
              }
            }
            e.push(String.fromCharCode(65533)), ++n;
          }
        return e.join("");
      }, T = k(3), F = (b = new ArrayBuffer(2), new DataView(b).setInt16(0, 256, !0), new Int16Array(b)[0] === 256), V = function() {
        function i() {
        }
        return i.parseScriptData = function(e, t, n) {
          var r = {};
          try {
            var s = i.parseValue(e, t, n), h = i.parseValue(e, t + s.size, n - s.size);
            r[s.data] = h.data;
          } catch (f) {
            v.a.e("AMF", f.toString());
          }
          return r;
        }, i.parseObject = function(e, t, n) {
          if (n < 3)
            throw new T.a("Data not enough when parse ScriptDataObject");
          var r = i.parseString(e, t, n), s = i.parseValue(e, t + r.size, n - r.size), h = s.objectEnd;
          return { data: { name: r.data, value: s.data }, size: r.size + s.size, objectEnd: h };
        }, i.parseVariable = function(e, t, n) {
          return i.parseObject(e, t, n);
        }, i.parseString = function(e, t, n) {
          if (n < 2)
            throw new T.a("Data not enough when parse String");
          var r = new DataView(e, t, n).getUint16(0, !F);
          return { data: r > 0 ? I(new Uint8Array(e, t + 2, r)) : "", size: 2 + r };
        }, i.parseLongString = function(e, t, n) {
          if (n < 4)
            throw new T.a("Data not enough when parse LongString");
          var r = new DataView(e, t, n).getUint32(0, !F);
          return { data: r > 0 ? I(new Uint8Array(e, t + 4, r)) : "", size: 4 + r };
        }, i.parseDate = function(e, t, n) {
          if (n < 10)
            throw new T.a("Data size invalid when parse Date");
          var r = new DataView(e, t, n), s = r.getFloat64(0, !F), h = r.getInt16(8, !F);
          return { data: new Date(s += 60 * h * 1e3), size: 10 };
        }, i.parseValue = function(e, t, n) {
          if (n < 1)
            throw new T.a("Data not enough when parse Value");
          var r, s = new DataView(e, t, n), h = 1, f = s.getUint8(0), R = !1;
          try {
            switch (f) {
              case 0:
                r = s.getFloat64(1, !F), h += 8;
                break;
              case 1:
                r = !!s.getUint8(1), h += 1;
                break;
              case 2:
                var L = i.parseString(e, t + 1, n - 1);
                r = L.data, h += L.size;
                break;
              case 3:
                r = {};
                var w = 0;
                for ((16777215 & s.getUint32(n - 4, !F)) == 9 && (w = 3); h < n - 4; ) {
                  var N = i.parseObject(e, t + h, n - h - w);
                  if (N.objectEnd)
                    break;
                  r[N.data.name] = N.data.value, h += N.size;
                }
                h <= n - 3 && (16777215 & s.getUint32(h - 1, !F)) === 9 && (h += 3);
                break;
              case 8:
                for (r = {}, h += 4, w = 0, (16777215 & s.getUint32(n - 4, !F)) == 9 && (w = 3); h < n - 8; ) {
                  var O = i.parseVariable(e, t + h, n - h - w);
                  if (O.objectEnd)
                    break;
                  r[O.data.name] = O.data.value, h += O.size;
                }
                h <= n - 3 && (16777215 & s.getUint32(h - 1, !F)) === 9 && (h += 3);
                break;
              case 9:
                r = void 0, h = 1, R = !0;
                break;
              case 10:
                r = [];
                var M = s.getUint32(1, !F);
                h += 4;
                for (var H = 0; H < M; H++) {
                  var Y = i.parseValue(e, t + h, n - h);
                  r.push(Y.data), h += Y.size;
                }
                break;
              case 11:
                var G = i.parseDate(e, t + 1, n - 1);
                r = G.data, h += G.size;
                break;
              case 12:
                var ee = i.parseString(e, t + 1, n - 1);
                r = ee.data, h += ee.size;
                break;
              default:
                h = n, v.a.w("AMF", "Unsupported AMF value type " + f);
            }
          } catch (re) {
            v.a.e("AMF", re.toString());
          }
          return { data: r, size: h, objectEnd: R };
        }, i;
      }(), he = function() {
        function i(e) {
          this.TAG = "ExpGolomb", this._buffer = e, this._buffer_index = 0, this._total_bytes = e.byteLength, this._total_bits = 8 * e.byteLength, this._current_word = 0, this._current_word_bits_left = 0;
        }
        return i.prototype.destroy = function() {
          this._buffer = null;
        }, i.prototype._fillCurrentWord = function() {
          var e = this._total_bytes - this._buffer_index;
          if (e <= 0)
            throw new T.a("ExpGolomb: _fillCurrentWord() but no bytes available");
          var t = Math.min(4, e), n = new Uint8Array(4);
          n.set(this._buffer.subarray(this._buffer_index, this._buffer_index + t)), this._current_word = new DataView(n.buffer).getUint32(0, !1), this._buffer_index += t, this._current_word_bits_left = 8 * t;
        }, i.prototype.readBits = function(e) {
          if (e > 32)
            throw new T.b("ExpGolomb: readBits() bits exceeded max 32bits!");
          if (e <= this._current_word_bits_left) {
            var t = this._current_word >>> 32 - e;
            return this._current_word <<= e, this._current_word_bits_left -= e, t;
          }
          var n = this._current_word_bits_left ? this._current_word : 0;
          n >>>= 32 - this._current_word_bits_left;
          var r = e - this._current_word_bits_left;
          this._fillCurrentWord();
          var s = Math.min(r, this._current_word_bits_left), h = this._current_word >>> 32 - s;
          return this._current_word <<= s, this._current_word_bits_left -= s, n = n << s | h;
        }, i.prototype.readBool = function() {
          return this.readBits(1) === 1;
        }, i.prototype.readByte = function() {
          return this.readBits(8);
        }, i.prototype._skipLeadingZero = function() {
          var e;
          for (e = 0; e < this._current_word_bits_left; e++)
            if ((this._current_word & 2147483648 >>> e) != 0)
              return this._current_word <<= e, this._current_word_bits_left -= e, e;
          return this._fillCurrentWord(), e + this._skipLeadingZero();
        }, i.prototype.readUEG = function() {
          var e = this._skipLeadingZero();
          return this.readBits(e + 1) - 1;
        }, i.prototype.readSEG = function() {
          var e = this.readUEG();
          return 1 & e ? e + 1 >>> 1 : -1 * (e >>> 1);
        }, i;
      }(), ie = function() {
        function i() {
        }
        return i._ebsp2rbsp = function(e) {
          for (var t = e, n = t.byteLength, r = new Uint8Array(n), s = 0, h = 0; h < n; h++)
            h >= 2 && t[h] === 3 && t[h - 1] === 0 && t[h - 2] === 0 || (r[s] = t[h], s++);
          return new Uint8Array(r.buffer, 0, s);
        }, i.parseSPS = function(e) {
          for (var t = e.subarray(1, 4), n = "avc1.", r = 0; r < 3; r++) {
            var s = t[r].toString(16);
            s.length < 2 && (s = "0" + s), n += s;
          }
          var h = i._ebsp2rbsp(e), f = new he(h);
          f.readByte();
          var R = f.readByte();
          f.readByte();
          var L = f.readByte();
          f.readUEG();
          var w = i.getProfileString(R), N = i.getLevelString(L), O = 1, M = 420, H = 8, Y = 8;
          if ((R === 100 || R === 110 || R === 122 || R === 244 || R === 44 || R === 83 || R === 86 || R === 118 || R === 128 || R === 138 || R === 144) && ((O = f.readUEG()) === 3 && f.readBits(1), O <= 3 && (M = [0, 420, 422, 444][O]), H = f.readUEG() + 8, Y = f.readUEG() + 8, f.readBits(1), f.readBool()))
            for (var G = O !== 3 ? 8 : 12, ee = 0; ee < G; ee++)
              f.readBool() && (ee < 6 ? i._skipScalingList(f, 16) : i._skipScalingList(f, 64));
          f.readUEG();
          var re = f.readUEG();
          if (re === 0)
            f.readUEG();
          else if (re === 1) {
            f.readBits(1), f.readSEG(), f.readSEG();
            var se = f.readUEG();
            for (ee = 0; ee < se; ee++)
              f.readSEG();
          }
          var _e = f.readUEG();
          f.readBits(1);
          var pe = f.readUEG(), ne = f.readUEG(), ve = f.readBits(1);
          ve === 0 && f.readBits(1), f.readBits(1);
          var le = 0, Ee = 0, Re = 0, be = 0;
          f.readBool() && (le = f.readUEG(), Ee = f.readUEG(), Re = f.readUEG(), be = f.readUEG());
          var De = 1, Te = 1, ce = 0, me = !0, Le = 0, Pe = 0;
          if (f.readBool()) {
            if (f.readBool()) {
              var ke = f.readByte();
              ke > 0 && ke < 16 ? (De = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2][ke - 1], Te = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1][ke - 1]) : ke === 255 && (De = f.readByte() << 8 | f.readByte(), Te = f.readByte() << 8 | f.readByte());
            }
            if (f.readBool() && f.readBool(), f.readBool() && (f.readBits(4), f.readBool() && f.readBits(24)), f.readBool() && (f.readUEG(), f.readUEG()), f.readBool()) {
              var Me = f.readBits(32), Ue = f.readBits(32);
              me = f.readBool(), ce = (Le = Ue) / (Pe = 2 * Me);
            }
          }
          var xe = 1;
          De === 1 && Te === 1 || (xe = De / Te);
          var we = 0, Ae = 0;
          O === 0 ? (we = 1, Ae = 2 - ve) : (we = O === 3 ? 1 : 2, Ae = (O === 1 ? 2 : 1) * (2 - ve));
          var Ce = 16 * (pe + 1), Ie = 16 * (ne + 1) * (2 - ve);
          Ce -= (le + Ee) * we, Ie -= (Re + be) * Ae;
          var Fe = Math.ceil(Ce * xe);
          return f.destroy(), f = null, { codec_mimetype: n, profile_idc: R, level_idc: L, profile_string: w, level_string: N, chroma_format_idc: O, bit_depth: H, bit_depth_luma: H, bit_depth_chroma: Y, ref_frames: _e, chroma_format: M, chroma_format_string: i.getChromaFormatString(M), frame_rate: { fixed: me, fps: ce, fps_den: Pe, fps_num: Le }, sar_ratio: { width: De, height: Te }, codec_size: { width: Ce, height: Ie }, present_size: { width: Fe, height: Ie } };
        }, i._skipScalingList = function(e, t) {
          for (var n = 8, r = 8, s = 0; s < t; s++)
            r !== 0 && (r = (n + e.readSEG() + 256) % 256), n = r === 0 ? n : r;
        }, i.getProfileString = function(e) {
          switch (e) {
            case 66:
              return "Baseline";
            case 77:
              return "Main";
            case 88:
              return "Extended";
            case 100:
              return "High";
            case 110:
              return "High10";
            case 122:
              return "High422";
            case 244:
              return "High444";
            default:
              return "Unknown";
          }
        }, i.getLevelString = function(e) {
          return (e / 10).toFixed(1);
        }, i.getChromaFormatString = function(e) {
          switch (e) {
            case 420:
              return "4:2:0";
            case 422:
              return "4:2:2";
            case 444:
              return "4:4:4";
            default:
              return "Unknown";
          }
        }, i;
      }(), X = k(5), K, m = function() {
        function i(e, t) {
          this.TAG = "FLVDemuxer", this._config = t, this._onError = null, this._onMediaInfo = null, this._onMetaDataArrived = null, this._onScriptDataArrived = null, this._onTrackMetadata = null, this._onDataAvailable = null, this._dataOffset = e.dataOffset, this._firstParse = !0, this._dispatch = !1, this._hasAudio = e.hasAudioTrack, this._hasVideo = e.hasVideoTrack, this._hasAudioFlagOverrided = !1, this._hasVideoFlagOverrided = !1, this._audioInitialMetadataDispatched = !1, this._videoInitialMetadataDispatched = !1, this._mediaInfo = new p.a(), this._mediaInfo.hasAudio = this._hasAudio, this._mediaInfo.hasVideo = this._hasVideo, this._metadata = null, this._audioMetadata = null, this._videoMetadata = null, this._naluLengthSize = 4, this._timestampBase = 0, this._timescale = 1e3, this._duration = 0, this._durationOverrided = !1, this._referenceFrameRate = { fixed: !0, fps: 23.976, fps_num: 23976, fps_den: 1e3 }, this._flvSoundRateTable = [5500, 11025, 22050, 44100, 48e3], this._mpegSamplingRates = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350], this._mpegAudioV10SampleRateTable = [44100, 48e3, 32e3, 0], this._mpegAudioV20SampleRateTable = [22050, 24e3, 16e3, 0], this._mpegAudioV25SampleRateTable = [11025, 12e3, 8e3, 0], this._mpegAudioL1BitRateTable = [0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, -1], this._mpegAudioL2BitRateTable = [0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, -1], this._mpegAudioL3BitRateTable = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, -1], this._videoTrack = { type: "video", id: 1, sequenceNumber: 0, samples: [], length: 0 }, this._audioTrack = { type: "audio", id: 2, sequenceNumber: 0, samples: [], length: 0 }, this._littleEndian = function() {
            var n = new ArrayBuffer(2);
            return new DataView(n).setInt16(0, 256, !0), new Int16Array(n)[0] === 256;
          }();
        }
        return i.prototype.destroy = function() {
          this._mediaInfo = null, this._metadata = null, this._audioMetadata = null, this._videoMetadata = null, this._videoTrack = null, this._audioTrack = null, this._onError = null, this._onMediaInfo = null, this._onMetaDataArrived = null, this._onScriptDataArrived = null, this._onTrackMetadata = null, this._onDataAvailable = null;
        }, i.probe = function(e) {
          var t = new Uint8Array(e), n = { match: !1 };
          if (t[0] !== 70 || t[1] !== 76 || t[2] !== 86 || t[3] !== 1)
            return n;
          var r, s, h = (4 & t[4]) >>> 2 != 0, f = (1 & t[4]) != 0, R = (r = t)[s = 5] << 24 | r[s + 1] << 16 | r[s + 2] << 8 | r[s + 3];
          return R < 9 ? n : { match: !0, consumed: R, dataOffset: R, hasAudioTrack: h, hasVideoTrack: f };
        }, i.prototype.bindDataSource = function(e) {
          return e.onDataArrival = this.parseChunks.bind(this), this;
        }, Object.defineProperty(i.prototype, "onTrackMetadata", { get: function() {
          return this._onTrackMetadata;
        }, set: function(e) {
          this._onTrackMetadata = e;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(i.prototype, "onMediaInfo", { get: function() {
          return this._onMediaInfo;
        }, set: function(e) {
          this._onMediaInfo = e;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(i.prototype, "onMetaDataArrived", { get: function() {
          return this._onMetaDataArrived;
        }, set: function(e) {
          this._onMetaDataArrived = e;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(i.prototype, "onScriptDataArrived", { get: function() {
          return this._onScriptDataArrived;
        }, set: function(e) {
          this._onScriptDataArrived = e;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(i.prototype, "onError", { get: function() {
          return this._onError;
        }, set: function(e) {
          this._onError = e;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(i.prototype, "onDataAvailable", { get: function() {
          return this._onDataAvailable;
        }, set: function(e) {
          this._onDataAvailable = e;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(i.prototype, "timestampBase", { get: function() {
          return this._timestampBase;
        }, set: function(e) {
          this._timestampBase = e;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(i.prototype, "overridedDuration", { get: function() {
          return this._duration;
        }, set: function(e) {
          this._durationOverrided = !0, this._duration = e, this._mediaInfo.duration = e;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(i.prototype, "overridedHasAudio", { set: function(e) {
          this._hasAudioFlagOverrided = !0, this._hasAudio = e, this._mediaInfo.hasAudio = e;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(i.prototype, "overridedHasVideo", { set: function(e) {
          this._hasVideoFlagOverrided = !0, this._hasVideo = e, this._mediaInfo.hasVideo = e;
        }, enumerable: !1, configurable: !0 }), i.prototype.resetMediaInfo = function() {
          this._mediaInfo = new p.a();
        }, i.prototype._isInitialMetadataDispatched = function() {
          return this._hasAudio && this._hasVideo ? this._audioInitialMetadataDispatched && this._videoInitialMetadataDispatched : this._hasAudio && !this._hasVideo ? this._audioInitialMetadataDispatched : !(this._hasAudio || !this._hasVideo) && this._videoInitialMetadataDispatched;
        }, i.prototype.parseChunks = function(e, t) {
          if (!(this._onError && this._onMediaInfo && this._onTrackMetadata && this._onDataAvailable))
            throw new T.a("Flv: onError & onMediaInfo & onTrackMetadata & onDataAvailable callback must be specified");
          var n = 0, r = this._littleEndian;
          if (t === 0) {
            if (!(e.byteLength > 13))
              return 0;
            n = i.probe(e).dataOffset;
          }
          for (this._firstParse && (this._firstParse = !1, t + n !== this._dataOffset && v.a.w(this.TAG, "First time parsing but chunk byteStart invalid!"), (s = new DataView(e, n)).getUint32(0, !r) !== 0 && v.a.w(this.TAG, "PrevTagSize0 !== 0 !!!"), n += 4); n < e.byteLength; ) {
            this._dispatch = !0;
            var s = new DataView(e, n);
            if (n + 11 + 4 > e.byteLength)
              break;
            var h = s.getUint8(0), f = 16777215 & s.getUint32(0, !r);
            if (n + 11 + f + 4 > e.byteLength)
              break;
            if (h === 8 || h === 9 || h === 18) {
              var R = s.getUint8(4), L = s.getUint8(5), w = s.getUint8(6) | L << 8 | R << 16 | s.getUint8(7) << 24;
              (16777215 & s.getUint32(7, !r)) !== 0 && v.a.w(this.TAG, "Meet tag which has StreamID != 0!");
              var N = n + 11;
              switch (h) {
                case 8:
                  this._parseAudioData(e, N, f, w);
                  break;
                case 9:
                  this._parseVideoData(e, N, f, w, t + n);
                  break;
                case 18:
                  this._parseScriptData(e, N, f);
              }
              var O = s.getUint32(11 + f, !r);
              O !== 11 + f && v.a.w(this.TAG, "Invalid PrevTagSize " + O), n += 11 + f + 4;
            } else
              v.a.w(this.TAG, "Unsupported tag type " + h + ", skipped"), n += 11 + f + 4;
          }
          return this._isInitialMetadataDispatched() && this._dispatch && (this._audioTrack.length || this._videoTrack.length) && this._onDataAvailable(this._audioTrack, this._videoTrack), n;
        }, i.prototype._parseScriptData = function(e, t, n) {
          var r = V.parseScriptData(e, t, n);
          if (r.hasOwnProperty("onMetaData")) {
            if (r.onMetaData == null || typeof r.onMetaData != "object")
              return void v.a.w(this.TAG, "Invalid onMetaData structure!");
            this._metadata && v.a.w(this.TAG, "Found another onMetaData tag!"), this._metadata = r;
            var s = this._metadata.onMetaData;
            if (this._onMetaDataArrived && this._onMetaDataArrived(Object.assign({}, s)), typeof s.hasAudio == "boolean" && this._hasAudioFlagOverrided === !1 && (this._hasAudio = s.hasAudio, this._mediaInfo.hasAudio = this._hasAudio), typeof s.hasVideo == "boolean" && this._hasVideoFlagOverrided === !1 && (this._hasVideo = s.hasVideo, this._mediaInfo.hasVideo = this._hasVideo), typeof s.audiodatarate == "number" && (this._mediaInfo.audioDataRate = s.audiodatarate), typeof s.videodatarate == "number" && (this._mediaInfo.videoDataRate = s.videodatarate), typeof s.width == "number" && (this._mediaInfo.width = s.width), typeof s.height == "number" && (this._mediaInfo.height = s.height), typeof s.duration == "number") {
              if (!this._durationOverrided) {
                var h = Math.floor(s.duration * this._timescale);
                this._duration = h, this._mediaInfo.duration = h;
              }
            } else
              this._mediaInfo.duration = 0;
            if (typeof s.framerate == "number") {
              var f = Math.floor(1e3 * s.framerate);
              if (f > 0) {
                var R = f / 1e3;
                this._referenceFrameRate.fixed = !0, this._referenceFrameRate.fps = R, this._referenceFrameRate.fps_num = f, this._referenceFrameRate.fps_den = 1e3, this._mediaInfo.fps = R;
              }
            }
            if (typeof s.keyframes == "object") {
              this._mediaInfo.hasKeyframesIndex = !0;
              var L = s.keyframes;
              this._mediaInfo.keyframesIndex = this._parseKeyframesIndex(L), s.keyframes = null;
            } else
              this._mediaInfo.hasKeyframesIndex = !1;
            this._dispatch = !1, this._mediaInfo.metadata = s, v.a.v(this.TAG, "Parsed onMetaData"), this._mediaInfo.isComplete() && this._onMediaInfo(this._mediaInfo);
          }
          Object.keys(r).length > 0 && this._onScriptDataArrived && this._onScriptDataArrived(Object.assign({}, r));
        }, i.prototype._parseKeyframesIndex = function(e) {
          for (var t = [], n = [], r = 1; r < e.times.length; r++) {
            var s = this._timestampBase + Math.floor(1e3 * e.times[r]);
            t.push(s), n.push(e.filepositions[r]);
          }
          return { times: t, filepositions: n };
        }, i.prototype._parseAudioData = function(e, t, n, r) {
          if (n <= 1)
            v.a.w(this.TAG, "Flv: Invalid audio packet, missing SoundData payload!");
          else if (this._hasAudioFlagOverrided !== !0 || this._hasAudio !== !1) {
            this._littleEndian;
            var s = new DataView(e, t, n).getUint8(0), h = s >>> 4;
            if (h === 2 || h === 10) {
              var f = 0, R = (12 & s) >>> 2;
              if (R >= 0 && R <= 4) {
                f = this._flvSoundRateTable[R];
                var L = 1 & s, w = this._audioMetadata, N = this._audioTrack;
                if (w || (this._hasAudio === !1 && this._hasAudioFlagOverrided === !1 && (this._hasAudio = !0, this._mediaInfo.hasAudio = !0), (w = this._audioMetadata = {}).type = "audio", w.id = N.id, w.timescale = this._timescale, w.duration = this._duration, w.audioSampleRate = f, w.channelCount = L === 0 ? 1 : 2), h === 10) {
                  var O = this._parseAACAudioData(e, t + 1, n - 1);
                  if (O == null)
                    return;
                  if (O.packetType === 0) {
                    w.config && v.a.w(this.TAG, "Found another AudioSpecificConfig!");
                    var M = O.data;
                    w.audioSampleRate = M.samplingRate, w.channelCount = M.channelCount, w.codec = M.codec, w.originalCodec = M.originalCodec, w.config = M.config, w.refSampleDuration = 1024 / w.audioSampleRate * w.timescale, v.a.v(this.TAG, "Parsed AudioSpecificConfig"), this._isInitialMetadataDispatched() ? this._dispatch && (this._audioTrack.length || this._videoTrack.length) && this._onDataAvailable(this._audioTrack, this._videoTrack) : this._audioInitialMetadataDispatched = !0, this._dispatch = !1, this._onTrackMetadata("audio", w), (G = this._mediaInfo).audioCodec = w.originalCodec, G.audioSampleRate = w.audioSampleRate, G.audioChannelCount = w.channelCount, G.hasVideo ? G.videoCodec != null && (G.mimeType = 'video/x-flv; codecs="' + G.videoCodec + "," + G.audioCodec + '"') : G.mimeType = 'video/x-flv; codecs="' + G.audioCodec + '"', G.isComplete() && this._onMediaInfo(G);
                  } else if (O.packetType === 1) {
                    var H = this._timestampBase + r, Y = { unit: O.data, length: O.data.byteLength, dts: H, pts: H };
                    N.samples.push(Y), N.length += O.data.length;
                  } else
                    v.a.e(this.TAG, "Flv: Unsupported AAC data type " + O.packetType);
                } else if (h === 2) {
                  if (!w.codec) {
                    var G;
                    if ((M = this._parseMP3AudioData(e, t + 1, n - 1, !0)) == null)
                      return;
                    w.audioSampleRate = M.samplingRate, w.channelCount = M.channelCount, w.codec = M.codec, w.originalCodec = M.originalCodec, w.refSampleDuration = 1152 / w.audioSampleRate * w.timescale, v.a.v(this.TAG, "Parsed MPEG Audio Frame Header"), this._audioInitialMetadataDispatched = !0, this._onTrackMetadata("audio", w), (G = this._mediaInfo).audioCodec = w.codec, G.audioSampleRate = w.audioSampleRate, G.audioChannelCount = w.channelCount, G.audioDataRate = M.bitRate, G.hasVideo ? G.videoCodec != null && (G.mimeType = 'video/x-flv; codecs="' + G.videoCodec + "," + G.audioCodec + '"') : G.mimeType = 'video/x-flv; codecs="' + G.audioCodec + '"', G.isComplete() && this._onMediaInfo(G);
                  }
                  var ee = this._parseMP3AudioData(e, t + 1, n - 1, !1);
                  if (ee == null)
                    return;
                  H = this._timestampBase + r;
                  var re = { unit: ee, length: ee.byteLength, dts: H, pts: H };
                  N.samples.push(re), N.length += ee.length;
                }
              } else
                this._onError(X.a.FORMAT_ERROR, "Flv: Invalid audio sample rate idx: " + R);
            } else
              this._onError(X.a.CODEC_UNSUPPORTED, "Flv: Unsupported audio codec idx: " + h);
          }
        }, i.prototype._parseAACAudioData = function(e, t, n) {
          if (!(n <= 1)) {
            var r = {}, s = new Uint8Array(e, t, n);
            return r.packetType = s[0], s[0] === 0 ? r.data = this._parseAACAudioSpecificConfig(e, t + 1, n - 1) : r.data = s.subarray(1), r;
          }
          v.a.w(this.TAG, "Flv: Invalid AAC packet, missing AACPacketType or/and Data!");
        }, i.prototype._parseAACAudioSpecificConfig = function(e, t, n) {
          var r, s, h = new Uint8Array(e, t, n), f = null, R = 0, L = null;
          if (R = r = h[0] >>> 3, (s = (7 & h[0]) << 1 | h[1] >>> 7) < 0 || s >= this._mpegSamplingRates.length)
            this._onError(X.a.FORMAT_ERROR, "Flv: AAC invalid sampling frequency index!");
          else {
            var w = this._mpegSamplingRates[s], N = (120 & h[1]) >>> 3;
            if (!(N < 0 || N >= 8)) {
              R === 5 && (L = (7 & h[1]) << 1 | h[2] >>> 7, (124 & h[2]) >>> 2);
              var O = self.navigator.userAgent.toLowerCase();
              return O.indexOf("firefox") !== -1 ? s >= 6 ? (R = 5, f = new Array(4), L = s - 3) : (R = 2, f = new Array(2), L = s) : O.indexOf("android") !== -1 ? (R = 2, f = new Array(2), L = s) : (R = 5, L = s, f = new Array(4), s >= 6 ? L = s - 3 : N === 1 && (R = 2, f = new Array(2), L = s)), f[0] = R << 3, f[0] |= (15 & s) >>> 1, f[1] = (15 & s) << 7, f[1] |= (15 & N) << 3, R === 5 && (f[1] |= (15 & L) >>> 1, f[2] = (1 & L) << 7, f[2] |= 8, f[3] = 0), { config: f, samplingRate: w, channelCount: N, codec: "mp4a.40." + R, originalCodec: "mp4a.40." + r };
            }
            this._onError(X.a.FORMAT_ERROR, "Flv: AAC invalid channel configuration");
          }
        }, i.prototype._parseMP3AudioData = function(e, t, n, r) {
          if (!(n < 4)) {
            this._littleEndian;
            var s = new Uint8Array(e, t, n), h = null;
            if (r) {
              if (s[0] !== 255)
                return;
              var f = s[1] >>> 3 & 3, R = (6 & s[1]) >> 1, L = (240 & s[2]) >>> 4, w = (12 & s[2]) >>> 2, N = (s[3] >>> 6 & 3) !== 3 ? 2 : 1, O = 0, M = 0;
              switch (f) {
                case 0:
                  O = this._mpegAudioV25SampleRateTable[w];
                  break;
                case 2:
                  O = this._mpegAudioV20SampleRateTable[w];
                  break;
                case 3:
                  O = this._mpegAudioV10SampleRateTable[w];
              }
              switch (R) {
                case 1:
                  L < this._mpegAudioL3BitRateTable.length && (M = this._mpegAudioL3BitRateTable[L]);
                  break;
                case 2:
                  L < this._mpegAudioL2BitRateTable.length && (M = this._mpegAudioL2BitRateTable[L]);
                  break;
                case 3:
                  L < this._mpegAudioL1BitRateTable.length && (M = this._mpegAudioL1BitRateTable[L]);
              }
              h = { bitRate: M, samplingRate: O, channelCount: N, codec: "mp3", originalCodec: "mp3" };
            } else
              h = s;
            return h;
          }
          v.a.w(this.TAG, "Flv: Invalid MP3 packet, header missing!");
        }, i.prototype._parseVideoData = function(e, t, n, r, s) {
          if (n <= 1)
            v.a.w(this.TAG, "Flv: Invalid video packet, missing VideoData payload!");
          else if (this._hasVideoFlagOverrided !== !0 || this._hasVideo !== !1) {
            var h = new Uint8Array(e, t, n)[0], f = (240 & h) >>> 4, R = 15 & h;
            R === 7 ? this._parseAVCVideoPacket(e, t + 1, n - 1, r, s, f) : this._onError(X.a.CODEC_UNSUPPORTED, "Flv: Unsupported codec in video frame: " + R);
          }
        }, i.prototype._parseAVCVideoPacket = function(e, t, n, r, s, h) {
          if (n < 4)
            v.a.w(this.TAG, "Flv: Invalid AVC packet, missing AVCPacketType or/and CompositionTime");
          else {
            var f = this._littleEndian, R = new DataView(e, t, n), L = R.getUint8(0), w = (16777215 & R.getUint32(0, !f)) << 8 >> 8;
            if (L === 0)
              this._parseAVCDecoderConfigurationRecord(e, t + 4, n - 4);
            else if (L === 1)
              this._parseAVCVideoData(e, t + 4, n - 4, r, s, h, w);
            else if (L !== 2)
              return void this._onError(X.a.FORMAT_ERROR, "Flv: Invalid video packet type " + L);
          }
        }, i.prototype._parseAVCDecoderConfigurationRecord = function(e, t, n) {
          if (n < 7)
            v.a.w(this.TAG, "Flv: Invalid AVCDecoderConfigurationRecord, lack of data!");
          else {
            var r = this._videoMetadata, s = this._videoTrack, h = this._littleEndian, f = new DataView(e, t, n);
            r ? r.avcc !== void 0 && v.a.w(this.TAG, "Found another AVCDecoderConfigurationRecord!") : (this._hasVideo === !1 && this._hasVideoFlagOverrided === !1 && (this._hasVideo = !0, this._mediaInfo.hasVideo = !0), (r = this._videoMetadata = {}).type = "video", r.id = s.id, r.timescale = this._timescale, r.duration = this._duration);
            var R = f.getUint8(0), L = f.getUint8(1);
            if (f.getUint8(2), f.getUint8(3), R === 1 && L !== 0)
              if (this._naluLengthSize = 1 + (3 & f.getUint8(4)), this._naluLengthSize === 3 || this._naluLengthSize === 4) {
                var w = 31 & f.getUint8(5);
                if (w !== 0) {
                  w > 1 && v.a.w(this.TAG, "Flv: Strange AVCDecoderConfigurationRecord: SPS Count = " + w);
                  for (var N = 6, O = 0; O < w; O++) {
                    var M = f.getUint16(N, !h);
                    if (N += 2, M !== 0) {
                      var H = new Uint8Array(e, t + N, M);
                      N += M;
                      var Y = ie.parseSPS(H);
                      if (O === 0) {
                        r.codecWidth = Y.codec_size.width, r.codecHeight = Y.codec_size.height, r.presentWidth = Y.present_size.width, r.presentHeight = Y.present_size.height, r.profile = Y.profile_string, r.level = Y.level_string, r.bitDepth = Y.bit_depth, r.chromaFormat = Y.chroma_format, r.sarRatio = Y.sar_ratio, r.frameRate = Y.frame_rate, Y.frame_rate.fixed !== !1 && Y.frame_rate.fps_num !== 0 && Y.frame_rate.fps_den !== 0 || (r.frameRate = this._referenceFrameRate);
                        var G = r.frameRate.fps_den, ee = r.frameRate.fps_num;
                        r.refSampleDuration = r.timescale * (G / ee);
                        for (var re = H.subarray(1, 4), se = "avc1.", _e = 0; _e < 3; _e++) {
                          var pe = re[_e].toString(16);
                          pe.length < 2 && (pe = "0" + pe), se += pe;
                        }
                        r.codec = se;
                        var ne = this._mediaInfo;
                        ne.width = r.codecWidth, ne.height = r.codecHeight, ne.fps = r.frameRate.fps, ne.profile = r.profile, ne.level = r.level, ne.refFrames = Y.ref_frames, ne.chromaFormat = Y.chroma_format_string, ne.sarNum = r.sarRatio.width, ne.sarDen = r.sarRatio.height, ne.videoCodec = se, ne.hasAudio ? ne.audioCodec != null && (ne.mimeType = 'video/x-flv; codecs="' + ne.videoCodec + "," + ne.audioCodec + '"') : ne.mimeType = 'video/x-flv; codecs="' + ne.videoCodec + '"', ne.isComplete() && this._onMediaInfo(ne);
                      }
                    }
                  }
                  var ve = f.getUint8(N);
                  if (ve !== 0) {
                    for (ve > 1 && v.a.w(this.TAG, "Flv: Strange AVCDecoderConfigurationRecord: PPS Count = " + ve), N++, O = 0; O < ve; O++)
                      M = f.getUint16(N, !h), N += 2, M !== 0 && (N += M);
                    r.avcc = new Uint8Array(n), r.avcc.set(new Uint8Array(e, t, n), 0), v.a.v(this.TAG, "Parsed AVCDecoderConfigurationRecord"), this._isInitialMetadataDispatched() ? this._dispatch && (this._audioTrack.length || this._videoTrack.length) && this._onDataAvailable(this._audioTrack, this._videoTrack) : this._videoInitialMetadataDispatched = !0, this._dispatch = !1, this._onTrackMetadata("video", r);
                  } else
                    this._onError(X.a.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord: No PPS");
                } else
                  this._onError(X.a.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord: No SPS");
              } else
                this._onError(X.a.FORMAT_ERROR, "Flv: Strange NaluLengthSizeMinusOne: " + (this._naluLengthSize - 1));
            else
              this._onError(X.a.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord");
          }
        }, i.prototype._parseAVCVideoData = function(e, t, n, r, s, h, f) {
          for (var R = this._littleEndian, L = new DataView(e, t, n), w = [], N = 0, O = 0, M = this._naluLengthSize, H = this._timestampBase + r, Y = h === 1; O < n; ) {
            if (O + 4 >= n) {
              v.a.w(this.TAG, "Malformed Nalu near timestamp " + H + ", offset = " + O + ", dataSize = " + n);
              break;
            }
            var G = L.getUint32(O, !R);
            if (M === 3 && (G >>>= 8), G > n - M)
              return void v.a.w(this.TAG, "Malformed Nalus near timestamp " + H + ", NaluSize > DataSize!");
            var ee = 31 & L.getUint8(O + M);
            ee === 5 && (Y = !0);
            var re = new Uint8Array(e, t + O, M + G), se = { type: ee, data: re };
            w.push(se), N += re.byteLength, O += M + G;
          }
          if (w.length) {
            var _e = this._videoTrack, pe = { units: w, length: N, isKeyframe: Y, dts: H, cts: f, pts: H + f };
            Y && (pe.fileposition = s), _e.samples.push(pe), _e.length += N;
          }
        }, i;
      }(), B = function() {
        function i() {
        }
        return i.prototype.destroy = function() {
          this.onError = null, this.onMediaInfo = null, this.onMetaDataArrived = null, this.onTrackMetadata = null, this.onDataAvailable = null, this.onTimedID3Metadata = null, this.onPESPrivateData = null, this.onPESPrivateDataDescriptor = null;
        }, i;
      }(), E = function() {
        this.program_pmt_pid = {};
      };
      (function(i) {
        i[i.kMPEG1Audio = 3] = "kMPEG1Audio", i[i.kMPEG2Audio = 4] = "kMPEG2Audio", i[i.kPESPrivateData = 6] = "kPESPrivateData", i[i.kADTSAAC = 15] = "kADTSAAC", i[i.kID3 = 21] = "kID3", i[i.kH264 = 27] = "kH264", i[i.kH265 = 36] = "kH265";
      })(K || (K = {}));
      var o, u = function() {
        this.pid_stream_type = {}, this.common_pids = { h264: void 0, adts_aac: void 0 }, this.pes_private_data_pids = {}, this.timed_id3_pids = {};
      }, d = function() {
      }, _ = function() {
        this.slices = [], this.total_length = 0, this.expected_length = 0, this.file_position = 0;
      };
      (function(i) {
        i[i.kUnspecified = 0] = "kUnspecified", i[i.kSliceNonIDR = 1] = "kSliceNonIDR", i[i.kSliceDPA = 2] = "kSliceDPA", i[i.kSliceDPB = 3] = "kSliceDPB", i[i.kSliceDPC = 4] = "kSliceDPC", i[i.kSliceIDR = 5] = "kSliceIDR", i[i.kSliceSEI = 6] = "kSliceSEI", i[i.kSliceSPS = 7] = "kSliceSPS", i[i.kSlicePPS = 8] = "kSlicePPS", i[i.kSliceAUD = 9] = "kSliceAUD", i[i.kEndOfSequence = 10] = "kEndOfSequence", i[i.kEndOfStream = 11] = "kEndOfStream", i[i.kFiller = 12] = "kFiller", i[i.kSPSExt = 13] = "kSPSExt", i[i.kReserved0 = 14] = "kReserved0";
      })(o || (o = {}));
      var A, P, W = function() {
      }, $ = function(i) {
        var e = i.data.byteLength;
        this.type = i.type, this.data = new Uint8Array(4 + e), new DataView(this.data.buffer).setUint32(0, e), this.data.set(i.data, 4);
      }, ae = function() {
        function i(e) {
          this.TAG = "H264AnnexBParser", this.current_startcode_offset_ = 0, this.eof_flag_ = !1, this.data_ = e, this.current_startcode_offset_ = this.findNextStartCodeOffset(0), this.eof_flag_ && v.a.e(this.TAG, "Could not found H264 startcode until payload end!");
        }
        return i.prototype.findNextStartCodeOffset = function(e) {
          for (var t = e, n = this.data_; ; ) {
            if (t + 3 >= n.byteLength)
              return this.eof_flag_ = !0, n.byteLength;
            var r = n[t + 0] << 24 | n[t + 1] << 16 | n[t + 2] << 8 | n[t + 3], s = n[t + 0] << 16 | n[t + 1] << 8 | n[t + 2];
            if (r === 1 || s === 1)
              return t;
            t++;
          }
        }, i.prototype.readNextNaluPayload = function() {
          for (var e = this.data_, t = null; t == null && !this.eof_flag_; ) {
            var n = this.current_startcode_offset_, r = 31 & e[n += (e[n] << 24 | e[n + 1] << 16 | e[n + 2] << 8 | e[n + 3]) === 1 ? 4 : 3], s = (128 & e[n]) >>> 7, h = this.findNextStartCodeOffset(n);
            if (this.current_startcode_offset_ = h, !(r >= o.kReserved0) && s === 0) {
              var f = e.subarray(n, h);
              (t = new W()).type = r, t.data = f;
            }
          }
          return t;
        }, i;
      }(), de = function() {
        function i(e, t, n) {
          var r = 8 + e.byteLength + 1 + 2 + t.byteLength, s = !1;
          e[3] !== 66 && e[3] !== 77 && e[3] !== 88 && (s = !0, r += 4);
          var h = this.data = new Uint8Array(r);
          h[0] = 1, h[1] = e[1], h[2] = e[2], h[3] = e[3], h[4] = 255, h[5] = 225;
          var f = e.byteLength;
          h[6] = f >>> 8, h[7] = 255 & f;
          var R = 8;
          h.set(e, 8), h[R += f] = 1;
          var L = t.byteLength;
          h[R + 1] = L >>> 8, h[R + 2] = 255 & L, h.set(t, R + 3), R += 3 + L, s && (h[R] = 252 | n.chroma_format_idc, h[R + 1] = 248 | n.bit_depth_luma - 8, h[R + 2] = 248 | n.bit_depth_chroma - 8, h[R + 3] = 0, R += 4);
        }
        return i.prototype.getData = function() {
          return this.data;
        }, i;
      }();
      (function(i) {
        i[i.kNull = 0] = "kNull", i[i.kAACMain = 1] = "kAACMain", i[i.kAAC_LC = 2] = "kAAC_LC", i[i.kAAC_SSR = 3] = "kAAC_SSR", i[i.kAAC_LTP = 4] = "kAAC_LTP", i[i.kAAC_SBR = 5] = "kAAC_SBR", i[i.kAAC_Scalable = 6] = "kAAC_Scalable", i[i.kLayer1 = 32] = "kLayer1", i[i.kLayer2 = 33] = "kLayer2", i[i.kLayer3 = 34] = "kLayer3";
      })(A || (A = {})), function(i) {
        i[i.k96000Hz = 0] = "k96000Hz", i[i.k88200Hz = 1] = "k88200Hz", i[i.k64000Hz = 2] = "k64000Hz", i[i.k48000Hz = 3] = "k48000Hz", i[i.k44100Hz = 4] = "k44100Hz", i[i.k32000Hz = 5] = "k32000Hz", i[i.k24000Hz = 6] = "k24000Hz", i[i.k22050Hz = 7] = "k22050Hz", i[i.k16000Hz = 8] = "k16000Hz", i[i.k12000Hz = 9] = "k12000Hz", i[i.k11025Hz = 10] = "k11025Hz", i[i.k8000Hz = 11] = "k8000Hz", i[i.k7350Hz = 12] = "k7350Hz";
      }(P || (P = {}));
      var S, a = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350], l = function() {
      }, y = function() {
        function i(e) {
          this.TAG = "AACADTSParser", this.data_ = e, this.current_syncword_offset_ = this.findNextSyncwordOffset(0), this.eof_flag_ && v.a.e(this.TAG, "Could not found ADTS syncword until payload end");
        }
        return i.prototype.findNextSyncwordOffset = function(e) {
          for (var t = e, n = this.data_; ; ) {
            if (t + 7 >= n.byteLength)
              return this.eof_flag_ = !0, n.byteLength;
            if ((n[t + 0] << 8 | n[t + 1]) >>> 4 === 4095)
              return t;
            t++;
          }
        }, i.prototype.readNextAACFrame = function() {
          for (var e = this.data_, t = null; t == null && !this.eof_flag_; ) {
            var n = this.current_syncword_offset_, r = (8 & e[n + 1]) >>> 3, s = (6 & e[n + 1]) >>> 1, h = 1 & e[n + 1], f = (192 & e[n + 2]) >>> 6, R = (60 & e[n + 2]) >>> 2, L = (1 & e[n + 2]) << 2 | (192 & e[n + 3]) >>> 6, w = (3 & e[n + 3]) << 11 | e[n + 4] << 3 | (224 & e[n + 5]) >>> 5;
            if (e[n + 6], n + w > this.data_.byteLength) {
              this.eof_flag_ = !0, this.has_last_incomplete_data = !0;
              break;
            }
            var N = h === 1 ? 7 : 9, O = w - N;
            n += N;
            var M = this.findNextSyncwordOffset(n + O);
            if (this.current_syncword_offset_ = M, (r === 0 || r === 1) && s === 0) {
              var H = e.subarray(n, n + O);
              (t = new l()).audio_object_type = f + 1, t.sampling_freq_index = R, t.sampling_frequency = a[R], t.channel_config = L, t.data = H;
            }
          }
          return t;
        }, i.prototype.hasIncompleteData = function() {
          return this.has_last_incomplete_data;
        }, i.prototype.getIncompleteData = function() {
          return this.has_last_incomplete_data ? this.data_.subarray(this.current_syncword_offset_) : null;
        }, i;
      }(), z = function(i) {
        var e = null, t = i.audio_object_type, n = i.audio_object_type, r = i.sampling_freq_index, s = i.channel_config, h = 0, f = navigator.userAgent.toLowerCase();
        f.indexOf("firefox") !== -1 ? r >= 6 ? (n = 5, e = new Array(4), h = r - 3) : (n = 2, e = new Array(2), h = r) : f.indexOf("android") !== -1 ? (n = 2, e = new Array(2), h = r) : (n = 5, h = r, e = new Array(4), r >= 6 ? h = r - 3 : s === 1 && (n = 2, e = new Array(2), h = r)), e[0] = n << 3, e[0] |= (15 & r) >>> 1, e[1] = (15 & r) << 7, e[1] |= (15 & s) << 3, n === 5 && (e[1] |= (15 & h) >>> 1, e[2] = (1 & h) << 7, e[2] |= 8, e[3] = 0), this.config = e, this.sampling_rate = a[r], this.channel_count = s, this.codec_mimetype = "mp4a.40." + n, this.original_codec_mimetype = "mp4a.40." + t;
      }, te = function() {
      }, ue = function() {
      }, ye = (S = function(i, e) {
        return (S = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
          t.__proto__ = n;
        } || function(t, n) {
          for (var r in n)
            n.hasOwnProperty(r) && (t[r] = n[r]);
        })(i, e);
      }, function(i, e) {
        function t() {
          this.constructor = i;
        }
        S(i, e), i.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
      }), Se = function(i) {
        function e(t, n) {
          var r = i.call(this) || this;
          return r.TAG = "TSDemuxer", r.first_parse_ = !0, r.media_info_ = new p.a(), r.timescale_ = 90, r.duration_ = 0, r.current_pmt_pid_ = -1, r.program_pmt_map_ = {}, r.pes_slice_queues_ = {}, r.video_metadata_ = { sps: void 0, pps: void 0, sps_details: void 0 }, r.audio_metadata_ = { audio_object_type: void 0, sampling_freq_index: void 0, sampling_frequency: void 0, channel_config: void 0 }, r.aac_last_sample_pts_ = void 0, r.aac_last_incomplete_data_ = null, r.has_video_ = !1, r.has_audio_ = !1, r.video_init_segment_dispatched_ = !1, r.audio_init_segment_dispatched_ = !1, r.video_metadata_changed_ = !1, r.audio_metadata_changed_ = !1, r.video_track_ = { type: "video", id: 1, sequenceNumber: 0, samples: [], length: 0 }, r.audio_track_ = { type: "audio", id: 2, sequenceNumber: 0, samples: [], length: 0 }, r.ts_packet_size_ = t.ts_packet_size, r.sync_offset_ = t.sync_offset, r.config_ = n, r;
        }
        return ye(e, i), e.prototype.destroy = function() {
          this.media_info_ = null, this.pes_slice_queues_ = null, this.video_metadata_ = null, this.audio_metadata_ = null, this.aac_last_incomplete_data_ = null, this.video_track_ = null, this.audio_track_ = null, i.prototype.destroy.call(this);
        }, e.probe = function(t) {
          var n = new Uint8Array(t), r = -1, s = 188;
          if (n.byteLength <= 3 * s)
            return v.a.e("TSDemuxer", "Probe data " + n.byteLength + " bytes is too few for judging MPEG-TS stream format!"), { match: !1 };
          for (; r === -1; ) {
            for (var h = Math.min(1e3, n.byteLength - 3 * s), f = 0; f < h; ) {
              if (n[f] === 71 && n[f + s] === 71 && n[f + 2 * s] === 71) {
                r = f;
                break;
              }
              f++;
            }
            if (r === -1)
              if (s === 188)
                s = 192;
              else {
                if (s !== 192)
                  break;
                s = 204;
              }
          }
          return r === -1 ? { match: !1 } : (s === 192 && r >= 4 ? (v.a.v("TSDemuxer", "ts_packet_size = 192, m2ts mode"), r -= 4) : s === 204 && v.a.v("TSDemuxer", "ts_packet_size = 204, RS encoded MPEG2-TS stream"), { match: !0, consumed: 0, ts_packet_size: s, sync_offset: r });
        }, e.prototype.bindDataSource = function(t) {
          return t.onDataArrival = this.parseChunks.bind(this), this;
        }, e.prototype.resetMediaInfo = function() {
          this.media_info_ = new p.a();
        }, e.prototype.parseChunks = function(t, n) {
          if (!(this.onError && this.onMediaInfo && this.onTrackMetadata && this.onDataAvailable))
            throw new T.a("onError & onMediaInfo & onTrackMetadata & onDataAvailable callback must be specified");
          var r = 0;
          for (this.first_parse_ && (this.first_parse_ = !1, r = this.sync_offset_); r + this.ts_packet_size_ <= t.byteLength; ) {
            var s = n + r;
            this.ts_packet_size_ === 192 && (r += 4);
            var h = new Uint8Array(t, r, 188), f = h[0];
            if (f !== 71) {
              v.a.e(this.TAG, "sync_byte = " + f + ", not 0x47");
              break;
            }
            var R = (64 & h[1]) >>> 6, L = (h[1], (31 & h[1]) << 8 | h[2]), w = (48 & h[3]) >>> 4, N = 15 & h[3], O = {}, M = 4;
            if (w == 2 || w == 3) {
              var H = h[4];
              if (5 + H === 188) {
                r += 188, this.ts_packet_size_ === 204 && (r += 16);
                continue;
              }
              H > 0 && (O = this.parseAdaptationField(t, r + 4, 1 + H)), M = 5 + H;
            }
            if (w == 1 || w == 3) {
              if (L === 0 || L === this.current_pmt_pid_) {
                R && (M += 1 + h[M]);
                var Y = 188 - M;
                L === 0 ? this.parsePAT(t, r + M, Y, { payload_unit_start_indicator: R, continuity_conunter: N }) : this.parsePMT(t, r + M, Y, { payload_unit_start_indicator: R, continuity_conunter: N });
              } else if (this.pmt_ != null && this.pmt_.pid_stream_type[L] != null) {
                Y = 188 - M;
                var G = this.pmt_.pid_stream_type[L];
                L !== this.pmt_.common_pids.h264 && L !== this.pmt_.common_pids.adts_aac && this.pmt_.pes_private_data_pids[L] !== !0 && this.pmt_.timed_id3_pids[L] !== !0 || this.handlePESSlice(t, r + M, Y, { pid: L, stream_type: G, file_position: s, payload_unit_start_indicator: R, continuity_conunter: N, random_access_indicator: O.random_access_indicator });
              }
            }
            r += 188, this.ts_packet_size_ === 204 && (r += 16);
          }
          return this.dispatchAudioVideoMediaSegment(), r;
        }, e.prototype.parseAdaptationField = function(t, n, r) {
          var s = new Uint8Array(t, n, r), h = s[0];
          return h > 0 ? h > 183 ? (v.a.w(this.TAG, "Illegal adaptation_field_length: " + h), {}) : { discontinuity_indicator: (128 & s[1]) >>> 7, random_access_indicator: (64 & s[1]) >>> 6, elementary_stream_priority_indicator: (32 & s[1]) >>> 5 } : {};
        }, e.prototype.parsePAT = function(t, n, r, s) {
          var h = new Uint8Array(t, n, r), f = h[0];
          if (f === 0) {
            var R = (15 & h[1]) << 8 | h[2], L = (h[3], h[4], (62 & h[5]) >>> 1), w = 1 & h[5], N = h[6], O = (h[7], null);
            if (w === 1 && N === 0)
              (O = new E()).version_number = L;
            else if ((O = this.pat_) == null)
              return;
            for (var M = R - 5 - 4, H = -1, Y = -1, G = 8; G < 8 + M; G += 4) {
              var ee = h[G] << 8 | h[G + 1], re = (31 & h[G + 2]) << 8 | h[G + 3];
              ee === 0 ? O.network_pid = re : (O.program_pmt_pid[ee] = re, H === -1 && (H = ee), Y === -1 && (Y = re));
            }
            w === 1 && N === 0 && (this.pat_ == null && v.a.v(this.TAG, "Parsed first PAT: " + JSON.stringify(O)), this.pat_ = O, this.current_program_ = H, this.current_pmt_pid_ = Y);
          } else
            v.a.e(this.TAG, "parsePAT: table_id " + f + " is not corresponded to PAT!");
        }, e.prototype.parsePMT = function(t, n, r, s) {
          var h = new Uint8Array(t, n, r), f = h[0];
          if (f === 2) {
            var R = (15 & h[1]) << 8 | h[2], L = h[3] << 8 | h[4], w = (62 & h[5]) >>> 1, N = 1 & h[5], O = h[6], M = (h[7], null);
            if (N === 1 && O === 0)
              (M = new u()).program_number = L, M.version_number = w, this.program_pmt_map_[L] = M;
            else if ((M = this.program_pmt_map_[L]) == null)
              return;
            h[8], h[9];
            for (var H = (15 & h[10]) << 8 | h[11], Y = 12 + H, G = R - 9 - H - 4, ee = Y; ee < Y + G; ) {
              var re = h[ee], se = (31 & h[ee + 1]) << 8 | h[ee + 2], _e = (15 & h[ee + 3]) << 8 | h[ee + 4];
              if (M.pid_stream_type[se] = re, re !== K.kH264 || M.common_pids.h264)
                if (re !== K.kADTSAAC || M.common_pids.adts_aac)
                  if (re === K.kPESPrivateData) {
                    if (M.pes_private_data_pids[se] = !0, _e > 0) {
                      var pe = h.subarray(ee + 5, ee + 5 + _e);
                      this.dispatchPESPrivateDataDescriptor(se, re, pe);
                    }
                  } else
                    re === K.kID3 && (M.timed_id3_pids[se] = !0);
                else
                  M.common_pids.adts_aac = se;
              else
                M.common_pids.h264 = se;
              ee += 5 + _e;
            }
            L === this.current_program_ && (this.pmt_ == null && v.a.v(this.TAG, "Parsed first PMT: " + JSON.stringify(M)), this.pmt_ = M, M.common_pids.h264 && (this.has_video_ = !0), M.common_pids.adts_aac && (this.has_audio_ = !0));
          } else
            v.a.e(this.TAG, "parsePMT: table_id " + f + " is not corresponded to PMT!");
        }, e.prototype.handlePESSlice = function(t, n, r, s) {
          var h = new Uint8Array(t, n, r), f = h[0] << 16 | h[1] << 8 | h[2], R = (h[3], h[4] << 8 | h[5]);
          if (s.payload_unit_start_indicator) {
            if (f !== 1)
              return void v.a.e(this.TAG, "handlePESSlice: packet_start_code_prefix should be 1 but with value " + f);
            var L = this.pes_slice_queues_[s.pid];
            L && (L.expected_length === 0 || L.expected_length === L.total_length ? this.emitPESSlices(L, s) : this.cleanPESSlices(L, s)), this.pes_slice_queues_[s.pid] = new _(), this.pes_slice_queues_[s.pid].file_position = s.file_position, this.pes_slice_queues_[s.pid].random_access_indicator = s.random_access_indicator;
          }
          if (this.pes_slice_queues_[s.pid] != null) {
            var w = this.pes_slice_queues_[s.pid];
            w.slices.push(h), s.payload_unit_start_indicator && (w.expected_length = R === 0 ? 0 : R + 6), w.total_length += h.byteLength, w.expected_length > 0 && w.expected_length === w.total_length ? this.emitPESSlices(w, s) : w.expected_length > 0 && w.expected_length < w.total_length && this.cleanPESSlices(w, s);
          }
        }, e.prototype.emitPESSlices = function(t, n) {
          for (var r = new Uint8Array(t.total_length), s = 0, h = 0; s < t.slices.length; s++) {
            var f = t.slices[s];
            r.set(f, h), h += f.byteLength;
          }
          t.slices = [], t.expected_length = -1, t.total_length = 0;
          var R = new d();
          R.pid = n.pid, R.data = r, R.stream_type = n.stream_type, R.file_position = t.file_position, R.random_access_indicator = t.random_access_indicator, this.parsePES(R);
        }, e.prototype.cleanPESSlices = function(t, n) {
          t.slices = [], t.expected_length = -1, t.total_length = 0;
        }, e.prototype.parsePES = function(t) {
          var n = t.data, r = n[0] << 16 | n[1] << 8 | n[2], s = n[3], h = n[4] << 8 | n[5];
          if (r === 1)
            if (s !== 188 && s !== 190 && s !== 191 && s !== 240 && s !== 241 && s !== 255 && s !== 242 && s !== 248) {
              n[6];
              var f = (192 & n[7]) >>> 6, R = n[8], L = void 0, w = void 0;
              f !== 2 && f !== 3 || (L = 536870912 * (14 & n[9]) + 4194304 * (255 & n[10]) + 16384 * (254 & n[11]) + 128 * (255 & n[12]) + (254 & n[13]) / 2, w = f === 3 ? 536870912 * (14 & n[14]) + 4194304 * (255 & n[15]) + 16384 * (254 & n[16]) + 128 * (255 & n[17]) + (254 & n[18]) / 2 : L);
              var N = 9 + R, O = void 0;
              if (h !== 0) {
                if (h < 3 + R)
                  return void v.a.v(this.TAG, "Malformed PES: PES_packet_length < 3 + PES_header_data_length");
                O = h - 3 - R;
              } else
                O = n.byteLength - N;
              var M = n.subarray(N, N + O);
              switch (t.stream_type) {
                case K.kMPEG1Audio:
                case K.kMPEG2Audio:
                  break;
                case K.kPESPrivateData:
                  this.parsePESPrivateDataPayload(M, L, w, t.pid, s);
                  break;
                case K.kADTSAAC:
                  this.parseAACPayload(M, L);
                  break;
                case K.kID3:
                  this.parseTimedID3MetadataPayload(M, L, w, t.pid, s);
                  break;
                case K.kH264:
                  this.parseH264Payload(M, L, w, t.file_position, t.random_access_indicator);
                  break;
                case K.kH265:
              }
            } else
              (s === 188 || s === 191 || s === 240 || s === 241 || s === 255 || s === 242 || s === 248) && t.stream_type === K.kPESPrivateData && (N = 6, O = void 0, O = h !== 0 ? h : n.byteLength - N, M = n.subarray(N, N + O), this.parsePESPrivateDataPayload(M, void 0, void 0, t.pid, s));
          else
            v.a.e(this.TAG, "parsePES: packet_start_code_prefix should be 1 but with value " + r);
        }, e.prototype.parseH264Payload = function(t, n, r, s, h) {
          for (var f = new ae(t), R = null, L = [], w = 0, N = !1; (R = f.readNextNaluPayload()) != null; ) {
            var O = new $(R);
            if (O.type === o.kSliceSPS) {
              var M = ie.parseSPS(R.data);
              this.video_init_segment_dispatched_ ? this.detectVideoMetadataChange(O, M) === !0 && (v.a.v(this.TAG, "H264: Critical h264 metadata has been changed, attempt to re-generate InitSegment"), this.video_metadata_changed_ = !0, this.video_metadata_ = { sps: O, pps: void 0, sps_details: M }) : (this.video_metadata_.sps = O, this.video_metadata_.sps_details = M);
            } else
              O.type === o.kSlicePPS ? this.video_init_segment_dispatched_ && !this.video_metadata_changed_ || (this.video_metadata_.pps = O, this.video_metadata_.sps && this.video_metadata_.pps && (this.video_metadata_changed_ && this.dispatchVideoMediaSegment(), this.dispatchVideoInitSegment())) : (O.type === o.kSliceIDR || O.type === o.kSliceNonIDR && h === 1) && (N = !0);
            this.video_init_segment_dispatched_ && (L.push(O), w += O.data.byteLength);
          }
          var H = Math.floor(n / this.timescale_), Y = Math.floor(r / this.timescale_);
          if (L.length) {
            var G = this.video_track_, ee = { units: L, length: w, isKeyframe: N, dts: Y, pts: H, cts: H - Y, file_position: s };
            G.samples.push(ee), G.length += w;
          }
        }, e.prototype.detectVideoMetadataChange = function(t, n) {
          if (n.codec_mimetype !== this.video_metadata_.sps_details.codec_mimetype)
            return v.a.v(this.TAG, "H264: Codec mimeType changed from " + this.video_metadata_.sps_details.codec_mimetype + " to " + n.codec_mimetype), !0;
          if (n.codec_size.width !== this.video_metadata_.sps_details.codec_size.width || n.codec_size.height !== this.video_metadata_.sps_details.codec_size.height) {
            var r = this.video_metadata_.sps_details.codec_size, s = n.codec_size;
            return v.a.v(this.TAG, "H264: Coded Resolution changed from " + r.width + "x" + r.height + " to " + s.width + "x" + s.height), !0;
          }
          return n.present_size.width !== this.video_metadata_.sps_details.present_size.width && (v.a.v(this.TAG, "H264: Present resolution width changed from " + this.video_metadata_.sps_details.present_size.width + " to " + n.present_size.width), !0);
        }, e.prototype.isInitSegmentDispatched = function() {
          return this.has_video_ && this.has_audio_ ? this.video_init_segment_dispatched_ && this.audio_init_segment_dispatched_ : this.has_video_ && !this.has_audio_ ? this.video_init_segment_dispatched_ : !(this.has_video_ || !this.has_audio_) && this.audio_init_segment_dispatched_;
        }, e.prototype.dispatchVideoInitSegment = function() {
          var t = this.video_metadata_.sps_details, n = { type: "video" };
          n.id = this.video_track_.id, n.timescale = 1e3, n.duration = this.duration_, n.codecWidth = t.codec_size.width, n.codecHeight = t.codec_size.height, n.presentWidth = t.present_size.width, n.presentHeight = t.present_size.height, n.profile = t.profile_string, n.level = t.level_string, n.bitDepth = t.bit_depth, n.chromaFormat = t.chroma_format, n.sarRatio = t.sar_ratio, n.frameRate = t.frame_rate;
          var r = n.frameRate.fps_den, s = n.frameRate.fps_num;
          n.refSampleDuration = r / s * 1e3, n.codec = t.codec_mimetype;
          var h = this.video_metadata_.sps.data.subarray(4), f = this.video_metadata_.pps.data.subarray(4), R = new de(h, f, t);
          n.avcc = R.getData(), this.video_init_segment_dispatched_ == 0 && v.a.v(this.TAG, "Generated first AVCDecoderConfigurationRecord for mimeType: " + n.codec), this.onTrackMetadata("video", n), this.video_init_segment_dispatched_ = !0, this.video_metadata_changed_ = !1;
          var L = this.media_info_;
          L.hasVideo = !0, L.width = n.codecWidth, L.height = n.codecHeight, L.fps = n.frameRate.fps, L.profile = n.profile, L.level = n.level, L.refFrames = t.ref_frames, L.chromaFormat = t.chroma_format_string, L.sarNum = n.sarRatio.width, L.sarDen = n.sarRatio.height, L.videoCodec = n.codec, L.hasAudio && L.audioCodec ? L.mimeType = 'video/mp2t; codecs="' + L.videoCodec + "," + L.audioCodec + '"' : L.mimeType = 'video/mp2t; codecs="' + L.videoCodec + '"', L.isComplete() && this.onMediaInfo(L);
        }, e.prototype.dispatchVideoMediaSegment = function() {
          this.isInitSegmentDispatched() && this.video_track_.length && this.onDataAvailable(null, this.video_track_);
        }, e.prototype.dispatchAudioMediaSegment = function() {
          this.isInitSegmentDispatched() && this.audio_track_.length && this.onDataAvailable(this.audio_track_, null);
        }, e.prototype.dispatchAudioVideoMediaSegment = function() {
          this.isInitSegmentDispatched() && (this.audio_track_.length || this.video_track_.length) && this.onDataAvailable(this.audio_track_, this.video_track_);
        }, e.prototype.parseAACPayload = function(t, n) {
          if (!this.has_video_ || this.video_init_segment_dispatched_) {
            if (this.aac_last_incomplete_data_) {
              var r = new Uint8Array(t.byteLength + this.aac_last_incomplete_data_.byteLength);
              r.set(this.aac_last_incomplete_data_, 0), r.set(t, this.aac_last_incomplete_data_.byteLength), t = r;
            }
            var s, h;
            if (n != null)
              h = n / this.timescale_;
            else {
              if (this.aac_last_sample_pts_ == null)
                return void v.a.w(this.TAG, "AAC: Unknown pts");
              s = 1024 / this.audio_metadata_.sampling_frequency * 1e3, h = this.aac_last_sample_pts_ + s;
            }
            if (this.aac_last_incomplete_data_ && this.aac_last_sample_pts_) {
              s = 1024 / this.audio_metadata_.sampling_frequency * 1e3;
              var f = this.aac_last_sample_pts_ + s;
              Math.abs(f - h) > 1 && (v.a.w(this.TAG, "AAC: Detected pts overlapped, expected: " + f + "ms, PES pts: " + h + "ms"), h = f);
            }
            for (var R, L = new y(t), w = null, N = h; (w = L.readNextAACFrame()) != null; ) {
              s = 1024 / w.sampling_frequency * 1e3, this.audio_init_segment_dispatched_ == 0 ? (this.audio_metadata_.audio_object_type = w.audio_object_type, this.audio_metadata_.sampling_freq_index = w.sampling_freq_index, this.audio_metadata_.sampling_frequency = w.sampling_frequency, this.audio_metadata_.channel_config = w.channel_config, this.dispatchAudioInitSegment(w)) : this.detectAudioMetadataChange(w) && (this.dispatchAudioMediaSegment(), this.dispatchAudioInitSegment(w)), R = N;
              var O = Math.floor(N), M = { unit: w.data, length: w.data.byteLength, pts: O, dts: O };
              this.audio_track_.samples.push(M), this.audio_track_.length += w.data.byteLength, N += s;
            }
            L.hasIncompleteData() && (this.aac_last_incomplete_data_ = L.getIncompleteData()), R && (this.aac_last_sample_pts_ = R);
          }
        }, e.prototype.detectAudioMetadataChange = function(t) {
          return t.audio_object_type !== this.audio_metadata_.audio_object_type ? (v.a.v(this.TAG, "AAC: AudioObjectType changed from " + this.audio_metadata_.audio_object_type + " to " + t.audio_object_type), !0) : t.sampling_freq_index !== this.audio_metadata_.sampling_freq_index ? (v.a.v(this.TAG, "AAC: SamplingFrequencyIndex changed from " + this.audio_metadata_.sampling_freq_index + " to " + t.sampling_freq_index), !0) : t.channel_config !== this.audio_metadata_.channel_config && (v.a.v(this.TAG, "AAC: Channel configuration changed from " + this.audio_metadata_.channel_config + " to " + t.channel_config), !0);
        }, e.prototype.dispatchAudioInitSegment = function(t) {
          var n = new z(t), r = { type: "audio" };
          r.id = this.audio_track_.id, r.timescale = 1e3, r.duration = this.duration_, r.audioSampleRate = n.sampling_rate, r.channelCount = n.channel_count, r.codec = n.codec_mimetype, r.originalCodec = n.original_codec_mimetype, r.config = n.config, r.refSampleDuration = 1024 / r.audioSampleRate * r.timescale, this.audio_init_segment_dispatched_ == 0 && v.a.v(this.TAG, "Generated first AudioSpecificConfig for mimeType: " + r.codec), this.onTrackMetadata("audio", r), this.audio_init_segment_dispatched_ = !0, this.video_metadata_changed_ = !1;
          var s = this.media_info_;
          s.hasAudio = !0, s.audioCodec = r.originalCodec, s.audioSampleRate = r.audioSampleRate, s.audioChannelCount = r.channelCount, s.hasVideo && s.videoCodec ? s.mimeType = 'video/mp2t; codecs="' + s.videoCodec + "," + s.audioCodec + '"' : s.mimeType = 'video/mp2t; codecs="' + s.audioCodec + '"', s.isComplete() && this.onMediaInfo(s);
        }, e.prototype.dispatchPESPrivateDataDescriptor = function(t, n, r) {
          var s = new ue();
          s.pid = t, s.stream_type = n, s.descriptor = r, this.onPESPrivateDataDescriptor && this.onPESPrivateDataDescriptor(s);
        }, e.prototype.parsePESPrivateDataPayload = function(t, n, r, s, h) {
          var f = new te();
          if (f.pid = s, f.stream_id = h, f.len = t.byteLength, f.data = t, n != null) {
            var R = Math.floor(n / this.timescale_);
            f.pts = R;
          } else
            f.nearest_pts = this.aac_last_sample_pts_;
          if (r != null) {
            var L = Math.floor(r / this.timescale_);
            f.dts = L;
          }
          this.onPESPrivateData && this.onPESPrivateData(f);
        }, e.prototype.parseTimedID3MetadataPayload = function(t, n, r, s, h) {
          var f = new te();
          if (f.pid = s, f.stream_id = h, f.len = t.byteLength, f.data = t, n != null) {
            var R = Math.floor(n / this.timescale_);
            f.pts = R;
          }
          if (r != null) {
            var L = Math.floor(r / this.timescale_);
            f.dts = L;
          }
          this.onTimedID3Metadata && this.onTimedID3Metadata(f);
        }, e;
      }(B), fe = function() {
        function i() {
        }
        return i.init = function() {
          for (var e in i.types = { avc1: [], avcC: [], btrt: [], dinf: [], dref: [], esds: [], ftyp: [], hdlr: [], mdat: [], mdhd: [], mdia: [], mfhd: [], minf: [], moof: [], moov: [], mp4a: [], mvex: [], mvhd: [], sdtp: [], stbl: [], stco: [], stsc: [], stsd: [], stsz: [], stts: [], tfdt: [], tfhd: [], traf: [], trak: [], trun: [], trex: [], tkhd: [], vmhd: [], smhd: [], ".mp3": [] }, i.types)
            i.types.hasOwnProperty(e) && (i.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
          var t = i.constants = {};
          t.FTYP = new Uint8Array([105, 115, 111, 109, 0, 0, 0, 1, 105, 115, 111, 109, 97, 118, 99, 49]), t.STSD_PREFIX = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), t.STTS = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), t.STSC = t.STCO = t.STTS, t.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), t.HDLR_VIDEO = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), t.HDLR_AUDIO = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]), t.DREF = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), t.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), t.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
        }, i.box = function(e) {
          for (var t = 8, n = null, r = Array.prototype.slice.call(arguments, 1), s = r.length, h = 0; h < s; h++)
            t += r[h].byteLength;
          (n = new Uint8Array(t))[0] = t >>> 24 & 255, n[1] = t >>> 16 & 255, n[2] = t >>> 8 & 255, n[3] = 255 & t, n.set(e, 4);
          var f = 8;
          for (h = 0; h < s; h++)
            n.set(r[h], f), f += r[h].byteLength;
          return n;
        }, i.generateInitSegment = function(e) {
          var t = i.box(i.types.ftyp, i.constants.FTYP), n = i.moov(e), r = new Uint8Array(t.byteLength + n.byteLength);
          return r.set(t, 0), r.set(n, t.byteLength), r;
        }, i.moov = function(e) {
          var t = i.mvhd(e.timescale, e.duration), n = i.trak(e), r = i.mvex(e);
          return i.box(i.types.moov, t, n, r);
        }, i.mvhd = function(e, t) {
          return i.box(i.types.mvhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]));
        }, i.trak = function(e) {
          return i.box(i.types.trak, i.tkhd(e), i.mdia(e));
        }, i.tkhd = function(e) {
          var t = e.id, n = e.duration, r = e.presentWidth, s = e.presentHeight;
          return i.box(i.types.tkhd, new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, 0, 0, 0, 0, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, r >>> 8 & 255, 255 & r, 0, 0, s >>> 8 & 255, 255 & s, 0, 0]));
        }, i.mdia = function(e) {
          return i.box(i.types.mdia, i.mdhd(e), i.hdlr(e), i.minf(e));
        }, i.mdhd = function(e) {
          var t = e.timescale, n = e.duration;
          return i.box(i.types.mdhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, 85, 196, 0, 0]));
        }, i.hdlr = function(e) {
          var t = null;
          return t = e.type === "audio" ? i.constants.HDLR_AUDIO : i.constants.HDLR_VIDEO, i.box(i.types.hdlr, t);
        }, i.minf = function(e) {
          var t = null;
          return t = e.type === "audio" ? i.box(i.types.smhd, i.constants.SMHD) : i.box(i.types.vmhd, i.constants.VMHD), i.box(i.types.minf, t, i.dinf(), i.stbl(e));
        }, i.dinf = function() {
          return i.box(i.types.dinf, i.box(i.types.dref, i.constants.DREF));
        }, i.stbl = function(e) {
          return i.box(i.types.stbl, i.stsd(e), i.box(i.types.stts, i.constants.STTS), i.box(i.types.stsc, i.constants.STSC), i.box(i.types.stsz, i.constants.STSZ), i.box(i.types.stco, i.constants.STCO));
        }, i.stsd = function(e) {
          return e.type === "audio" ? e.codec === "mp3" ? i.box(i.types.stsd, i.constants.STSD_PREFIX, i.mp3(e)) : i.box(i.types.stsd, i.constants.STSD_PREFIX, i.mp4a(e)) : i.box(i.types.stsd, i.constants.STSD_PREFIX, i.avc1(e));
        }, i.mp3 = function(e) {
          var t = e.channelCount, n = e.audioSampleRate, r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t, 0, 16, 0, 0, 0, 0, n >>> 8 & 255, 255 & n, 0, 0]);
          return i.box(i.types[".mp3"], r);
        }, i.mp4a = function(e) {
          var t = e.channelCount, n = e.audioSampleRate, r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t, 0, 16, 0, 0, 0, 0, n >>> 8 & 255, 255 & n, 0, 0]);
          return i.box(i.types.mp4a, r, i.esds(e));
        }, i.esds = function(e) {
          var t = e.config || [], n = t.length, r = new Uint8Array([0, 0, 0, 0, 3, 23 + n, 0, 1, 0, 4, 15 + n, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([n]).concat(t).concat([6, 1, 2]));
          return i.box(i.types.esds, r);
        }, i.avc1 = function(e) {
          var t = e.avcc, n = e.codecWidth, r = e.codecHeight, s = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, n >>> 8 & 255, 255 & n, r >>> 8 & 255, 255 & r, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 10, 120, 113, 113, 47, 102, 108, 118, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 255, 255]);
          return i.box(i.types.avc1, s, i.box(i.types.avcC, t));
        }, i.mvex = function(e) {
          return i.box(i.types.mvex, i.trex(e));
        }, i.trex = function(e) {
          var t = e.id, n = new Uint8Array([0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
          return i.box(i.types.trex, n);
        }, i.moof = function(e, t) {
          return i.box(i.types.moof, i.mfhd(e.sequenceNumber), i.traf(e, t));
        }, i.mfhd = function(e) {
          var t = new Uint8Array([0, 0, 0, 0, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e]);
          return i.box(i.types.mfhd, t);
        }, i.traf = function(e, t) {
          var n = e.id, r = i.box(i.types.tfhd, new Uint8Array([0, 0, 0, 0, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n])), s = i.box(i.types.tfdt, new Uint8Array([0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t])), h = i.sdtp(e), f = i.trun(e, h.byteLength + 16 + 16 + 8 + 16 + 8 + 8);
          return i.box(i.types.traf, r, s, f, h);
        }, i.sdtp = function(e) {
          for (var t = e.samples || [], n = t.length, r = new Uint8Array(4 + n), s = 0; s < n; s++) {
            var h = t[s].flags;
            r[s + 4] = h.isLeading << 6 | h.dependsOn << 4 | h.isDependedOn << 2 | h.hasRedundancy;
          }
          return i.box(i.types.sdtp, r);
        }, i.trun = function(e, t) {
          var n = e.samples || [], r = n.length, s = 12 + 16 * r, h = new Uint8Array(s);
          t += 8 + s, h.set([0, 0, 15, 1, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t], 0);
          for (var f = 0; f < r; f++) {
            var R = n[f].duration, L = n[f].size, w = n[f].flags, N = n[f].cts;
            h.set([R >>> 24 & 255, R >>> 16 & 255, R >>> 8 & 255, 255 & R, L >>> 24 & 255, L >>> 16 & 255, L >>> 8 & 255, 255 & L, w.isLeading << 2 | w.dependsOn, w.isDependedOn << 6 | w.hasRedundancy << 4 | w.isNonSync, 0, 0, N >>> 24 & 255, N >>> 16 & 255, N >>> 8 & 255, 255 & N], 12 + 16 * f);
          }
          return i.box(i.types.trun, h);
        }, i.mdat = function(e) {
          return i.box(i.types.mdat, e);
        }, i;
      }();
      fe.init();
      var C = fe, U = function() {
        function i() {
        }
        return i.getSilentFrame = function(e, t) {
          if (e === "mp4a.40.2") {
            if (t === 1)
              return new Uint8Array([0, 200, 0, 128, 35, 128]);
            if (t === 2)
              return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
            if (t === 3)
              return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
            if (t === 4)
              return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
            if (t === 5)
              return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
            if (t === 6)
              return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
          } else {
            if (t === 1)
              return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
            if (t === 2)
              return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
            if (t === 3)
              return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
          }
          return null;
        }, i;
      }(), j = k(7), Z = function() {
        function i(e) {
          this.TAG = "MP4Remuxer", this._config = e, this._isLive = e.isLive === !0, this._dtsBase = -1, this._dtsBaseInited = !1, this._audioDtsBase = 1 / 0, this._videoDtsBase = 1 / 0, this._audioNextDts = void 0, this._videoNextDts = void 0, this._audioStashedLastSample = null, this._videoStashedLastSample = null, this._audioMeta = null, this._videoMeta = null, this._audioSegmentInfoList = new j.c("audio"), this._videoSegmentInfoList = new j.c("video"), this._onInitSegment = null, this._onMediaSegment = null, this._forceFirstIDR = !(!g.a.chrome || !(g.a.version.major < 50 || g.a.version.major === 50 && g.a.version.build < 2661)), this._fillSilentAfterSeek = g.a.msedge || g.a.msie, this._mp3UseMpegAudio = !g.a.firefox, this._fillAudioTimestampGap = this._config.fixAudioTimestampGap;
        }
        return i.prototype.destroy = function() {
          this._dtsBase = -1, this._dtsBaseInited = !1, this._audioMeta = null, this._videoMeta = null, this._audioSegmentInfoList.clear(), this._audioSegmentInfoList = null, this._videoSegmentInfoList.clear(), this._videoSegmentInfoList = null, this._onInitSegment = null, this._onMediaSegment = null;
        }, i.prototype.bindDataSource = function(e) {
          return e.onDataAvailable = this.remux.bind(this), e.onTrackMetadata = this._onTrackMetadataReceived.bind(this), this;
        }, Object.defineProperty(i.prototype, "onInitSegment", { get: function() {
          return this._onInitSegment;
        }, set: function(e) {
          this._onInitSegment = e;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(i.prototype, "onMediaSegment", { get: function() {
          return this._onMediaSegment;
        }, set: function(e) {
          this._onMediaSegment = e;
        }, enumerable: !1, configurable: !0 }), i.prototype.insertDiscontinuity = function() {
          this._audioNextDts = this._videoNextDts = void 0;
        }, i.prototype.seek = function(e) {
          this._audioStashedLastSample = null, this._videoStashedLastSample = null, this._videoSegmentInfoList.clear(), this._audioSegmentInfoList.clear();
        }, i.prototype.remux = function(e, t) {
          if (!this._onMediaSegment)
            throw new T.a("MP4Remuxer: onMediaSegment callback must be specificed!");
          this._dtsBaseInited || this._calculateDtsBase(e, t), t && this._remuxVideo(t), e && this._remuxAudio(e);
        }, i.prototype._onTrackMetadataReceived = function(e, t) {
          var n = null, r = "mp4", s = t.codec;
          if (e === "audio")
            this._audioMeta = t, t.codec === "mp3" && this._mp3UseMpegAudio ? (r = "mpeg", s = "", n = new Uint8Array()) : n = C.generateInitSegment(t);
          else {
            if (e !== "video")
              return;
            this._videoMeta = t, n = C.generateInitSegment(t);
          }
          if (!this._onInitSegment)
            throw new T.a("MP4Remuxer: onInitSegment callback must be specified!");
          this._onInitSegment(e, { type: e, data: n.buffer, codec: s, container: e + "/" + r, mediaDuration: t.duration });
        }, i.prototype._calculateDtsBase = function(e, t) {
          this._dtsBaseInited || (e && e.samples && e.samples.length && (this._audioDtsBase = e.samples[0].dts), t && t.samples && t.samples.length && (this._videoDtsBase = t.samples[0].dts), this._dtsBase = Math.min(this._audioDtsBase, this._videoDtsBase), this._dtsBaseInited = !0);
        }, i.prototype.getTimestampBase = function() {
          if (this._dtsBaseInited)
            return this._dtsBase;
        }, i.prototype.flushStashedSamples = function() {
          var e = this._videoStashedLastSample, t = this._audioStashedLastSample, n = { type: "video", id: 1, sequenceNumber: 0, samples: [], length: 0 };
          e != null && (n.samples.push(e), n.length = e.length);
          var r = { type: "audio", id: 2, sequenceNumber: 0, samples: [], length: 0 };
          t != null && (r.samples.push(t), r.length = t.length), this._videoStashedLastSample = null, this._audioStashedLastSample = null, this._remuxVideo(n, !0), this._remuxAudio(r, !0);
        }, i.prototype._remuxAudio = function(e, t) {
          if (this._audioMeta != null) {
            var n, r = e, s = r.samples, h = void 0, f = -1, R = this._audioMeta.refSampleDuration, L = this._audioMeta.codec === "mp3" && this._mp3UseMpegAudio, w = this._dtsBaseInited && this._audioNextDts === void 0, N = !1;
            if (s && s.length !== 0 && (s.length !== 1 || t)) {
              var O = 0, M = null, H = 0;
              L ? (O = 0, H = r.length) : (O = 8, H = 8 + r.length);
              var Y = null;
              if (s.length > 1 && (H -= (Y = s.pop()).length), this._audioStashedLastSample != null) {
                var G = this._audioStashedLastSample;
                this._audioStashedLastSample = null, s.unshift(G), H += G.length;
              }
              Y != null && (this._audioStashedLastSample = Y);
              var ee = s[0].dts - this._dtsBase;
              if (this._audioNextDts)
                h = ee - this._audioNextDts;
              else if (this._audioSegmentInfoList.isEmpty())
                h = 0, this._fillSilentAfterSeek && !this._videoSegmentInfoList.isEmpty() && this._audioMeta.originalCodec !== "mp3" && (N = !0);
              else {
                var re = this._audioSegmentInfoList.getLastSampleBefore(ee);
                if (re != null) {
                  var se = ee - (re.originalDts + re.duration);
                  se <= 3 && (se = 0), h = ee - (re.dts + re.duration + se);
                } else
                  h = 0;
              }
              if (N) {
                var _e = ee - h, pe = this._videoSegmentInfoList.getLastSegmentBefore(ee);
                if (pe != null && pe.beginDts < _e) {
                  if (Le = U.getSilentFrame(this._audioMeta.originalCodec, this._audioMeta.channelCount)) {
                    var ne = pe.beginDts, ve = _e - pe.beginDts;
                    v.a.v(this.TAG, "InsertPrefixSilentAudio: dts: " + ne + ", duration: " + ve), s.unshift({ unit: Le, dts: ne, pts: ne }), H += Le.byteLength;
                  }
                } else
                  N = !1;
              }
              for (var le = [], Ee = 0; Ee < s.length; Ee++) {
                var Re = (G = s[Ee]).unit, be = G.dts - this._dtsBase, De = (ne = be, !1), Te = null, ce = 0;
                if (!(be < -1e-3)) {
                  if (this._audioMeta.codec !== "mp3") {
                    var me = be;
                    if (this._audioNextDts && (me = this._audioNextDts), (h = be - me) <= -3 * R) {
                      v.a.w(this.TAG, "Dropping 1 audio frame (originalDts: " + be + " ms ,curRefDts: " + me + " ms)  due to dtsCorrection: " + h + " ms overlap.");
                      continue;
                    }
                    if (h >= 3 * R && this._fillAudioTimestampGap && !g.a.safari) {
                      De = !0;
                      var Le, Pe = Math.floor(h / R);
                      v.a.w(this.TAG, `Large audio timestamp gap detected, may cause AV sync to drift. Silent frames will be generated to avoid unsync.
originalDts: ` + be + " ms, curRefDts: " + me + " ms, dtsCorrection: " + Math.round(h) + " ms, generate: " + Pe + " frames"), ne = Math.floor(me), ce = Math.floor(me + R) - ne, (Le = U.getSilentFrame(this._audioMeta.originalCodec, this._audioMeta.channelCount)) == null && (v.a.w(this.TAG, "Unable to generate silent frame for " + this._audioMeta.originalCodec + " with " + this._audioMeta.channelCount + " channels, repeat last frame"), Le = Re), Te = [];
                      for (var ke = 0; ke < Pe; ke++) {
                        me += R;
                        var Me = Math.floor(me), Ue = Math.floor(me + R) - Me, xe = { dts: Me, pts: Me, cts: 0, unit: Le, size: Le.byteLength, duration: Ue, originalDts: be, flags: { isLeading: 0, dependsOn: 1, isDependedOn: 0, hasRedundancy: 0 } };
                        Te.push(xe), H += xe.size;
                      }
                      this._audioNextDts = me + R;
                    } else
                      ne = Math.floor(me), ce = Math.floor(me + R) - ne, this._audioNextDts = me + R;
                  } else
                    ne = be - h, Ee !== s.length - 1 ? ce = s[Ee + 1].dts - this._dtsBase - h - ne : Y != null ? ce = Y.dts - this._dtsBase - h - ne : ce = le.length >= 1 ? le[le.length - 1].duration : Math.floor(R), this._audioNextDts = ne + ce;
                  f === -1 && (f = ne), le.push({ dts: ne, pts: ne, cts: 0, unit: G.unit, size: G.unit.byteLength, duration: ce, originalDts: be, flags: { isLeading: 0, dependsOn: 1, isDependedOn: 0, hasRedundancy: 0 } }), De && le.push.apply(le, Te);
                }
              }
              if (le.length === 0)
                return r.samples = [], void (r.length = 0);
              for (L ? M = new Uint8Array(H) : ((M = new Uint8Array(H))[0] = H >>> 24 & 255, M[1] = H >>> 16 & 255, M[2] = H >>> 8 & 255, M[3] = 255 & H, M.set(C.types.mdat, 4)), Ee = 0; Ee < le.length; Ee++)
                Re = le[Ee].unit, M.set(Re, O), O += Re.byteLength;
              var we = le[le.length - 1];
              n = we.dts + we.duration;
              var Ae = new j.b();
              Ae.beginDts = f, Ae.endDts = n, Ae.beginPts = f, Ae.endPts = n, Ae.originalBeginDts = le[0].originalDts, Ae.originalEndDts = we.originalDts + we.duration, Ae.firstSample = new j.d(le[0].dts, le[0].pts, le[0].duration, le[0].originalDts, !1), Ae.lastSample = new j.d(we.dts, we.pts, we.duration, we.originalDts, !1), this._isLive || this._audioSegmentInfoList.append(Ae), r.samples = le, r.sequenceNumber++;
              var Ce = null;
              Ce = L ? new Uint8Array() : C.moof(r, f), r.samples = [], r.length = 0;
              var Ie = { type: "audio", data: this._mergeBoxes(Ce, M).buffer, sampleCount: le.length, info: Ae };
              L && w && (Ie.timestampOffset = f), this._onMediaSegment("audio", Ie);
            }
          }
        }, i.prototype._remuxVideo = function(e, t) {
          if (this._videoMeta != null) {
            var n, r, s = e, h = s.samples, f = void 0, R = -1, L = -1;
            if (h && h.length !== 0 && (h.length !== 1 || t)) {
              var w = 8, N = null, O = 8 + e.length, M = null;
              if (h.length > 1 && (O -= (M = h.pop()).length), this._videoStashedLastSample != null) {
                var H = this._videoStashedLastSample;
                this._videoStashedLastSample = null, h.unshift(H), O += H.length;
              }
              M != null && (this._videoStashedLastSample = M);
              var Y = h[0].dts - this._dtsBase;
              if (this._videoNextDts)
                f = Y - this._videoNextDts;
              else if (this._videoSegmentInfoList.isEmpty())
                f = 0;
              else {
                var G = this._videoSegmentInfoList.getLastSampleBefore(Y);
                if (G != null) {
                  var ee = Y - (G.originalDts + G.duration);
                  ee <= 3 && (ee = 0), f = Y - (G.dts + G.duration + ee);
                } else
                  f = 0;
              }
              for (var re = new j.b(), se = [], _e = 0; _e < h.length; _e++) {
                var pe = (H = h[_e]).dts - this._dtsBase, ne = H.isKeyframe, ve = pe - f, le = H.cts, Ee = ve + le;
                R === -1 && (R = ve, L = Ee);
                var Re = 0;
                if (_e !== h.length - 1 ? Re = h[_e + 1].dts - this._dtsBase - f - ve : M != null ? Re = M.dts - this._dtsBase - f - ve : Re = se.length >= 1 ? se[se.length - 1].duration : Math.floor(this._videoMeta.refSampleDuration), ne) {
                  var be = new j.d(ve, Ee, Re, H.dts, !0);
                  be.fileposition = H.fileposition, re.appendSyncPoint(be);
                }
                se.push({ dts: ve, pts: Ee, cts: le, units: H.units, size: H.length, isKeyframe: ne, duration: Re, originalDts: pe, flags: { isLeading: 0, dependsOn: ne ? 2 : 1, isDependedOn: ne ? 1 : 0, hasRedundancy: 0, isNonSync: ne ? 0 : 1 } });
              }
              for ((N = new Uint8Array(O))[0] = O >>> 24 & 255, N[1] = O >>> 16 & 255, N[2] = O >>> 8 & 255, N[3] = 255 & O, N.set(C.types.mdat, 4), _e = 0; _e < se.length; _e++)
                for (var De = se[_e].units; De.length; ) {
                  var Te = De.shift().data;
                  N.set(Te, w), w += Te.byteLength;
                }
              var ce = se[se.length - 1];
              if (n = ce.dts + ce.duration, r = ce.pts + ce.duration, this._videoNextDts = n, re.beginDts = R, re.endDts = n, re.beginPts = L, re.endPts = r, re.originalBeginDts = se[0].originalDts, re.originalEndDts = ce.originalDts + ce.duration, re.firstSample = new j.d(se[0].dts, se[0].pts, se[0].duration, se[0].originalDts, se[0].isKeyframe), re.lastSample = new j.d(ce.dts, ce.pts, ce.duration, ce.originalDts, ce.isKeyframe), this._isLive || this._videoSegmentInfoList.append(re), s.samples = se, s.sequenceNumber++, this._forceFirstIDR) {
                var me = se[0].flags;
                me.dependsOn = 2, me.isNonSync = 0;
              }
              var Le = C.moof(s, R);
              s.samples = [], s.length = 0, this._onMediaSegment("video", { type: "video", data: this._mergeBoxes(Le, N).buffer, sampleCount: se.length, info: re });
            }
          }
        }, i.prototype._mergeBoxes = function(e, t) {
          var n = new Uint8Array(e.byteLength + t.byteLength);
          return n.set(e, 0), n.set(t, e.byteLength), n;
        }, i;
      }(), J = k(11), Q = k(1), ge = function() {
        function i(e, t) {
          this.TAG = "TransmuxingController", this._emitter = new D.a(), this._config = t, e.segments || (e.segments = [{ duration: e.duration, filesize: e.filesize, url: e.url }]), typeof e.cors != "boolean" && (e.cors = !0), typeof e.withCredentials != "boolean" && (e.withCredentials = !1), this._mediaDataSource = e, this._currentSegmentIndex = 0;
          var n = 0;
          this._mediaDataSource.segments.forEach(function(r) {
            r.timestampBase = n, n += r.duration, r.cors = e.cors, r.withCredentials = e.withCredentials, t.referrerPolicy && (r.referrerPolicy = t.referrerPolicy);
          }), isNaN(n) || this._mediaDataSource.duration === n || (this._mediaDataSource.duration = n), this._mediaInfo = null, this._demuxer = null, this._remuxer = null, this._ioctl = null, this._pendingSeekTime = null, this._pendingResolveSeekPoint = null, this._statisticsReporter = null;
        }
        return i.prototype.destroy = function() {
          this._mediaInfo = null, this._mediaDataSource = null, this._statisticsReporter && this._disableStatisticsReporter(), this._ioctl && (this._ioctl.destroy(), this._ioctl = null), this._demuxer && (this._demuxer.destroy(), this._demuxer = null), this._remuxer && (this._remuxer.destroy(), this._remuxer = null), this._emitter.removeAllListeners(), this._emitter = null;
        }, i.prototype.on = function(e, t) {
          this._emitter.addListener(e, t);
        }, i.prototype.off = function(e, t) {
          this._emitter.removeListener(e, t);
        }, i.prototype.start = function() {
          this._loadSegment(0), this._enableStatisticsReporter();
        }, i.prototype._loadSegment = function(e, t) {
          this._currentSegmentIndex = e;
          var n = this._mediaDataSource.segments[e], r = this._ioctl = new J.a(n, this._config, e);
          r.onError = this._onIOException.bind(this), r.onSeeked = this._onIOSeeked.bind(this), r.onComplete = this._onIOComplete.bind(this), r.onRedirect = this._onIORedirect.bind(this), r.onRecoveredEarlyEof = this._onIORecoveredEarlyEof.bind(this), t ? this._demuxer.bindDataSource(this._ioctl) : r.onDataArrival = this._onInitChunkArrival.bind(this), r.open(t);
        }, i.prototype.stop = function() {
          this._internalAbort(), this._disableStatisticsReporter();
        }, i.prototype._internalAbort = function() {
          this._ioctl && (this._ioctl.destroy(), this._ioctl = null);
        }, i.prototype.pause = function() {
          this._ioctl && this._ioctl.isWorking() && (this._ioctl.pause(), this._disableStatisticsReporter());
        }, i.prototype.resume = function() {
          this._ioctl && this._ioctl.isPaused() && (this._ioctl.resume(), this._enableStatisticsReporter());
        }, i.prototype.seek = function(e) {
          if (this._mediaInfo != null && this._mediaInfo.isSeekable()) {
            var t = this._searchSegmentIndexContains(e);
            if (t === this._currentSegmentIndex) {
              var n = this._mediaInfo.segments[t];
              if (n == null)
                this._pendingSeekTime = e;
              else {
                var r = n.getNearestKeyframe(e);
                this._remuxer.seek(r.milliseconds), this._ioctl.seek(r.fileposition), this._pendingResolveSeekPoint = r.milliseconds;
              }
            } else {
              var s = this._mediaInfo.segments[t];
              s == null ? (this._pendingSeekTime = e, this._internalAbort(), this._remuxer.seek(), this._remuxer.insertDiscontinuity(), this._loadSegment(t)) : (r = s.getNearestKeyframe(e), this._internalAbort(), this._remuxer.seek(e), this._remuxer.insertDiscontinuity(), this._demuxer.resetMediaInfo(), this._demuxer.timestampBase = this._mediaDataSource.segments[t].timestampBase, this._loadSegment(t, r.fileposition), this._pendingResolveSeekPoint = r.milliseconds, this._reportSegmentMediaInfo(t));
            }
            this._enableStatisticsReporter();
          }
        }, i.prototype._searchSegmentIndexContains = function(e) {
          for (var t = this._mediaDataSource.segments, n = t.length - 1, r = 0; r < t.length; r++)
            if (e < t[r].timestampBase) {
              n = r - 1;
              break;
            }
          return n;
        }, i.prototype._onInitChunkArrival = function(e, t) {
          var n = this, r = null, s = 0;
          if (t > 0)
            this._demuxer.bindDataSource(this._ioctl), this._demuxer.timestampBase = this._mediaDataSource.segments[this._currentSegmentIndex].timestampBase, s = this._demuxer.parseChunks(e, t);
          else if ((r = Se.probe(e)).match) {
            var h = this._demuxer = new Se(r, this._config);
            this._remuxer || (this._remuxer = new Z(this._config)), h.onError = this._onDemuxException.bind(this), h.onMediaInfo = this._onMediaInfo.bind(this), h.onMetaDataArrived = this._onMetaDataArrived.bind(this), h.onTimedID3Metadata = this._onTimedID3Metadata.bind(this), h.onPESPrivateDataDescriptor = this._onPESPrivateDataDescriptor.bind(this), h.onPESPrivateData = this._onPESPrivateData.bind(this), this._remuxer.bindDataSource(this._demuxer), this._demuxer.bindDataSource(this._ioctl), this._remuxer.onInitSegment = this._onRemuxerInitSegmentArrival.bind(this), this._remuxer.onMediaSegment = this._onRemuxerMediaSegmentArrival.bind(this), s = this._demuxer.parseChunks(e, t);
          } else if ((r = m.probe(e)).match) {
            this._demuxer = new m(r, this._config), this._remuxer || (this._remuxer = new Z(this._config));
            var f = this._mediaDataSource;
            f.duration == null || isNaN(f.duration) || (this._demuxer.overridedDuration = f.duration), typeof f.hasAudio == "boolean" && (this._demuxer.overridedHasAudio = f.hasAudio), typeof f.hasVideo == "boolean" && (this._demuxer.overridedHasVideo = f.hasVideo), this._demuxer.timestampBase = f.segments[this._currentSegmentIndex].timestampBase, this._demuxer.onError = this._onDemuxException.bind(this), this._demuxer.onMediaInfo = this._onMediaInfo.bind(this), this._demuxer.onMetaDataArrived = this._onMetaDataArrived.bind(this), this._demuxer.onScriptDataArrived = this._onScriptDataArrived.bind(this), this._remuxer.bindDataSource(this._demuxer.bindDataSource(this._ioctl)), this._remuxer.onInitSegment = this._onRemuxerInitSegmentArrival.bind(this), this._remuxer.onMediaSegment = this._onRemuxerMediaSegmentArrival.bind(this), s = this._demuxer.parseChunks(e, t);
          } else
            r = null, v.a.e(this.TAG, "Non MPEG-TS/FLV, Unsupported media type!"), Promise.resolve().then(function() {
              n._internalAbort();
            }), this._emitter.emit(Q.a.DEMUX_ERROR, X.a.FORMAT_UNSUPPORTED, "Non MPEG-TS/FLV, Unsupported media type!"), s = 0;
          return s;
        }, i.prototype._onMediaInfo = function(e) {
          var t = this;
          this._mediaInfo == null && (this._mediaInfo = Object.assign({}, e), this._mediaInfo.keyframesIndex = null, this._mediaInfo.segments = [], this._mediaInfo.segmentCount = this._mediaDataSource.segments.length, Object.setPrototypeOf(this._mediaInfo, p.a.prototype));
          var n = Object.assign({}, e);
          Object.setPrototypeOf(n, p.a.prototype), this._mediaInfo.segments[this._currentSegmentIndex] = n, this._reportSegmentMediaInfo(this._currentSegmentIndex), this._pendingSeekTime != null && Promise.resolve().then(function() {
            var r = t._pendingSeekTime;
            t._pendingSeekTime = null, t.seek(r);
          });
        }, i.prototype._onMetaDataArrived = function(e) {
          this._emitter.emit(Q.a.METADATA_ARRIVED, e);
        }, i.prototype._onScriptDataArrived = function(e) {
          this._emitter.emit(Q.a.SCRIPTDATA_ARRIVED, e);
        }, i.prototype._onTimedID3Metadata = function(e) {
          var t = this._remuxer.getTimestampBase();
          t != null && (e.pts != null && (e.pts -= t), e.dts != null && (e.dts -= t), this._emitter.emit(Q.a.TIMED_ID3_METADATA_ARRIVED, e));
        }, i.prototype._onPESPrivateDataDescriptor = function(e) {
          this._emitter.emit(Q.a.PES_PRIVATE_DATA_DESCRIPTOR, e);
        }, i.prototype._onPESPrivateData = function(e) {
          var t = this._remuxer.getTimestampBase();
          t != null && (e.pts != null && (e.pts -= t), e.nearest_pts != null && (e.nearest_pts -= t), e.dts != null && (e.dts -= t), this._emitter.emit(Q.a.PES_PRIVATE_DATA_ARRIVED, e));
        }, i.prototype._onIOSeeked = function() {
          this._remuxer.insertDiscontinuity();
        }, i.prototype._onIOComplete = function(e) {
          var t = e + 1;
          t < this._mediaDataSource.segments.length ? (this._internalAbort(), this._remuxer && this._remuxer.flushStashedSamples(), this._loadSegment(t)) : (this._remuxer && this._remuxer.flushStashedSamples(), this._emitter.emit(Q.a.LOADING_COMPLETE), this._disableStatisticsReporter());
        }, i.prototype._onIORedirect = function(e) {
          var t = this._ioctl.extraData;
          this._mediaDataSource.segments[t].redirectedURL = e;
        }, i.prototype._onIORecoveredEarlyEof = function() {
          this._emitter.emit(Q.a.RECOVERED_EARLY_EOF);
        }, i.prototype._onIOException = function(e, t) {
          v.a.e(this.TAG, "IOException: type = " + e + ", code = " + t.code + ", msg = " + t.msg), this._emitter.emit(Q.a.IO_ERROR, e, t), this._disableStatisticsReporter();
        }, i.prototype._onDemuxException = function(e, t) {
          v.a.e(this.TAG, "DemuxException: type = " + e + ", info = " + t), this._emitter.emit(Q.a.DEMUX_ERROR, e, t);
        }, i.prototype._onRemuxerInitSegmentArrival = function(e, t) {
          this._emitter.emit(Q.a.INIT_SEGMENT, e, t);
        }, i.prototype._onRemuxerMediaSegmentArrival = function(e, t) {
          if (this._pendingSeekTime == null && (this._emitter.emit(Q.a.MEDIA_SEGMENT, e, t), this._pendingResolveSeekPoint != null && e === "video")) {
            var n = t.info.syncPoints, r = this._pendingResolveSeekPoint;
            this._pendingResolveSeekPoint = null, g.a.safari && n.length > 0 && n[0].originalDts === r && (r = n[0].pts), this._emitter.emit(Q.a.RECOMMEND_SEEKPOINT, r);
          }
        }, i.prototype._enableStatisticsReporter = function() {
          this._statisticsReporter == null && (this._statisticsReporter = self.setInterval(this._reportStatisticsInfo.bind(this), this._config.statisticsInfoReportInterval));
        }, i.prototype._disableStatisticsReporter = function() {
          this._statisticsReporter && (self.clearInterval(this._statisticsReporter), this._statisticsReporter = null);
        }, i.prototype._reportSegmentMediaInfo = function(e) {
          var t = this._mediaInfo.segments[e], n = Object.assign({}, t);
          n.duration = this._mediaInfo.duration, n.segmentCount = this._mediaInfo.segmentCount, delete n.segments, delete n.keyframesIndex, this._emitter.emit(Q.a.MEDIA_INFO, n);
        }, i.prototype._reportStatisticsInfo = function() {
          var e = {};
          e.url = this._ioctl.currentURL, e.hasRedirect = this._ioctl.hasRedirect, e.hasRedirect && (e.redirectedURL = this._ioctl.currentRedirectedURL), e.speed = this._ioctl.currentSpeed, e.loaderType = this._ioctl.loaderType, e.currentSegmentIndex = this._currentSegmentIndex, e.totalSegmentCount = this._mediaDataSource.segments.length, this._emitter.emit(Q.a.STATISTICS_INFO, e);
        }, i;
      }();
      q.a = ge;
    }, function(oe, q, k) {
      var x, D = k(0), v = function() {
        function E() {
          this._firstCheckpoint = 0, this._lastCheckpoint = 0, this._intervalBytes = 0, this._totalBytes = 0, this._lastSecondBytes = 0, self.performance && self.performance.now ? this._now = self.performance.now.bind(self.performance) : this._now = Date.now;
        }
        return E.prototype.reset = function() {
          this._firstCheckpoint = this._lastCheckpoint = 0, this._totalBytes = this._intervalBytes = 0, this._lastSecondBytes = 0;
        }, E.prototype.addBytes = function(o) {
          this._firstCheckpoint === 0 ? (this._firstCheckpoint = this._now(), this._lastCheckpoint = this._firstCheckpoint, this._intervalBytes += o, this._totalBytes += o) : this._now() - this._lastCheckpoint < 1e3 ? (this._intervalBytes += o, this._totalBytes += o) : (this._lastSecondBytes = this._intervalBytes, this._intervalBytes = o, this._totalBytes += o, this._lastCheckpoint = this._now());
        }, Object.defineProperty(E.prototype, "currentKBps", { get: function() {
          this.addBytes(0);
          var o = (this._now() - this._lastCheckpoint) / 1e3;
          return o == 0 && (o = 1), this._intervalBytes / o / 1024;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(E.prototype, "lastSecondKBps", { get: function() {
          return this.addBytes(0), this._lastSecondBytes !== 0 ? this._lastSecondBytes / 1024 : this._now() - this._lastCheckpoint >= 500 ? this.currentKBps : 0;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(E.prototype, "averageKBps", { get: function() {
          var o = (this._now() - this._firstCheckpoint) / 1e3;
          return this._totalBytes / o / 1024;
        }, enumerable: !1, configurable: !0 }), E;
      }(), g = k(2), p = k(4), c = k(3), b = (x = function(E, o) {
        return (x = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(u, d) {
          u.__proto__ = d;
        } || function(u, d) {
          for (var _ in d)
            d.hasOwnProperty(_) && (u[_] = d[_]);
        })(E, o);
      }, function(E, o) {
        function u() {
          this.constructor = E;
        }
        x(E, o), E.prototype = o === null ? Object.create(o) : (u.prototype = o.prototype, new u());
      }), I = function(E) {
        function o(u, d) {
          var _ = E.call(this, "fetch-stream-loader") || this;
          return _.TAG = "FetchStreamLoader", _._seekHandler = u, _._config = d, _._needStash = !0, _._requestAbort = !1, _._abortController = null, _._contentLength = null, _._receivedLength = 0, _;
        }
        return b(o, E), o.isSupported = function() {
          try {
            var u = p.a.msedge && p.a.version.minor >= 15048, d = !p.a.msedge || u;
            return self.fetch && self.ReadableStream && d;
          } catch {
            return !1;
          }
        }, o.prototype.destroy = function() {
          this.isWorking() && this.abort(), E.prototype.destroy.call(this);
        }, o.prototype.open = function(u, d) {
          var _ = this;
          this._dataSource = u, this._range = d;
          var A = u.url;
          this._config.reuseRedirectedURL && u.redirectedURL != null && (A = u.redirectedURL);
          var P = this._seekHandler.getConfig(A, d), W = new self.Headers();
          if (typeof P.headers == "object") {
            var $ = P.headers;
            for (var ae in $)
              $.hasOwnProperty(ae) && W.append(ae, $[ae]);
          }
          var de = { method: "GET", headers: W, mode: "cors", cache: "default", referrerPolicy: "no-referrer-when-downgrade" };
          if (typeof this._config.headers == "object")
            for (var ae in this._config.headers)
              W.append(ae, this._config.headers[ae]);
          u.cors === !1 && (de.mode = "same-origin"), u.withCredentials && (de.credentials = "include"), u.referrerPolicy && (de.referrerPolicy = u.referrerPolicy), self.AbortController && (this._abortController = new self.AbortController(), de.signal = this._abortController.signal), this._status = g.c.kConnecting, self.fetch(P.url, de).then(function(S) {
            if (_._requestAbort)
              return _._status = g.c.kIdle, void S.body.cancel();
            if (S.ok && S.status >= 200 && S.status <= 299) {
              if (S.url !== P.url && _._onURLRedirect) {
                var a = _._seekHandler.removeURLParameters(S.url);
                _._onURLRedirect(a);
              }
              var l = S.headers.get("Content-Length");
              return l != null && (_._contentLength = parseInt(l), _._contentLength !== 0 && _._onContentLengthKnown && _._onContentLengthKnown(_._contentLength)), _._pump.call(_, S.body.getReader());
            }
            if (_._status = g.c.kError, !_._onError)
              throw new c.d("FetchStreamLoader: Http code invalid, " + S.status + " " + S.statusText);
            _._onError(g.b.HTTP_STATUS_CODE_INVALID, { code: S.status, msg: S.statusText });
          }).catch(function(S) {
            if (!_._abortController || !_._abortController.signal.aborted) {
              if (_._status = g.c.kError, !_._onError)
                throw S;
              _._onError(g.b.EXCEPTION, { code: -1, msg: S.message });
            }
          });
        }, o.prototype.abort = function() {
          if (this._requestAbort = !0, (this._status !== g.c.kBuffering || !p.a.chrome) && this._abortController)
            try {
              this._abortController.abort();
            } catch {
            }
        }, o.prototype._pump = function(u) {
          var d = this;
          return u.read().then(function(_) {
            if (_.done)
              if (d._contentLength !== null && d._receivedLength < d._contentLength) {
                d._status = g.c.kError;
                var A = g.b.EARLY_EOF, P = { code: -1, msg: "Fetch stream meet Early-EOF" };
                if (!d._onError)
                  throw new c.d(P.msg);
                d._onError(A, P);
              } else
                d._status = g.c.kComplete, d._onComplete && d._onComplete(d._range.from, d._range.from + d._receivedLength - 1);
            else {
              if (d._abortController && d._abortController.signal.aborted)
                return void (d._status = g.c.kComplete);
              if (d._requestAbort === !0)
                return d._status = g.c.kComplete, u.cancel();
              d._status = g.c.kBuffering;
              var W = _.value.buffer, $ = d._range.from + d._receivedLength;
              d._receivedLength += W.byteLength, d._onDataArrival && d._onDataArrival(W, $, d._receivedLength), d._pump(u);
            }
          }).catch(function(_) {
            if (d._abortController && d._abortController.signal.aborted)
              d._status = g.c.kComplete;
            else if (_.code !== 11 || !p.a.msedge) {
              d._status = g.c.kError;
              var A = 0, P = null;
              if (_.code !== 19 && _.message !== "network error" || !(d._contentLength === null || d._contentLength !== null && d._receivedLength < d._contentLength) ? (A = g.b.EXCEPTION, P = { code: _.code, msg: _.message }) : (A = g.b.EARLY_EOF, P = { code: _.code, msg: "Fetch stream meet Early-EOF" }), !d._onError)
                throw new c.d(P.msg);
              d._onError(A, P);
            }
          });
        }, o;
      }(g.a), T = function() {
        var E = function(o, u) {
          return (E = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, _) {
            d.__proto__ = _;
          } || function(d, _) {
            for (var A in _)
              _.hasOwnProperty(A) && (d[A] = _[A]);
          })(o, u);
        };
        return function(o, u) {
          function d() {
            this.constructor = o;
          }
          E(o, u), o.prototype = u === null ? Object.create(u) : (d.prototype = u.prototype, new d());
        };
      }(), F = function(E) {
        function o(u, d) {
          var _ = E.call(this, "xhr-moz-chunked-loader") || this;
          return _.TAG = "MozChunkedLoader", _._seekHandler = u, _._config = d, _._needStash = !0, _._xhr = null, _._requestAbort = !1, _._contentLength = null, _._receivedLength = 0, _;
        }
        return T(o, E), o.isSupported = function() {
          try {
            var u = new XMLHttpRequest();
            return u.open("GET", "https://example.com", !0), u.responseType = "moz-chunked-arraybuffer", u.responseType === "moz-chunked-arraybuffer";
          } catch (d) {
            return D.a.w("MozChunkedLoader", d.message), !1;
          }
        }, o.prototype.destroy = function() {
          this.isWorking() && this.abort(), this._xhr && (this._xhr.onreadystatechange = null, this._xhr.onprogress = null, this._xhr.onloadend = null, this._xhr.onerror = null, this._xhr = null), E.prototype.destroy.call(this);
        }, o.prototype.open = function(u, d) {
          this._dataSource = u, this._range = d;
          var _ = u.url;
          this._config.reuseRedirectedURL && u.redirectedURL != null && (_ = u.redirectedURL);
          var A = this._seekHandler.getConfig(_, d);
          this._requestURL = A.url;
          var P = this._xhr = new XMLHttpRequest();
          if (P.open("GET", A.url, !0), P.responseType = "moz-chunked-arraybuffer", P.onreadystatechange = this._onReadyStateChange.bind(this), P.onprogress = this._onProgress.bind(this), P.onloadend = this._onLoadEnd.bind(this), P.onerror = this._onXhrError.bind(this), u.withCredentials && (P.withCredentials = !0), typeof A.headers == "object") {
            var W = A.headers;
            for (var $ in W)
              W.hasOwnProperty($) && P.setRequestHeader($, W[$]);
          }
          if (typeof this._config.headers == "object") {
            W = this._config.headers;
            for (var $ in W)
              W.hasOwnProperty($) && P.setRequestHeader($, W[$]);
          }
          this._status = g.c.kConnecting, P.send();
        }, o.prototype.abort = function() {
          this._requestAbort = !0, this._xhr && this._xhr.abort(), this._status = g.c.kComplete;
        }, o.prototype._onReadyStateChange = function(u) {
          var d = u.target;
          if (d.readyState === 2) {
            if (d.responseURL != null && d.responseURL !== this._requestURL && this._onURLRedirect) {
              var _ = this._seekHandler.removeURLParameters(d.responseURL);
              this._onURLRedirect(_);
            }
            if (d.status !== 0 && (d.status < 200 || d.status > 299)) {
              if (this._status = g.c.kError, !this._onError)
                throw new c.d("MozChunkedLoader: Http code invalid, " + d.status + " " + d.statusText);
              this._onError(g.b.HTTP_STATUS_CODE_INVALID, { code: d.status, msg: d.statusText });
            } else
              this._status = g.c.kBuffering;
          }
        }, o.prototype._onProgress = function(u) {
          if (this._status !== g.c.kError) {
            this._contentLength === null && u.total !== null && u.total !== 0 && (this._contentLength = u.total, this._onContentLengthKnown && this._onContentLengthKnown(this._contentLength));
            var d = u.target.response, _ = this._range.from + this._receivedLength;
            this._receivedLength += d.byteLength, this._onDataArrival && this._onDataArrival(d, _, this._receivedLength);
          }
        }, o.prototype._onLoadEnd = function(u) {
          this._requestAbort !== !0 ? this._status !== g.c.kError && (this._status = g.c.kComplete, this._onComplete && this._onComplete(this._range.from, this._range.from + this._receivedLength - 1)) : this._requestAbort = !1;
        }, o.prototype._onXhrError = function(u) {
          this._status = g.c.kError;
          var d = 0, _ = null;
          if (this._contentLength && u.loaded < this._contentLength ? (d = g.b.EARLY_EOF, _ = { code: -1, msg: "Moz-Chunked stream meet Early-Eof" }) : (d = g.b.EXCEPTION, _ = { code: -1, msg: u.constructor.name + " " + u.type }), !this._onError)
            throw new c.d(_.msg);
          this._onError(d, _);
        }, o;
      }(g.a), V = function() {
        var E = function(o, u) {
          return (E = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, _) {
            d.__proto__ = _;
          } || function(d, _) {
            for (var A in _)
              _.hasOwnProperty(A) && (d[A] = _[A]);
          })(o, u);
        };
        return function(o, u) {
          function d() {
            this.constructor = o;
          }
          E(o, u), o.prototype = u === null ? Object.create(u) : (d.prototype = u.prototype, new d());
        };
      }(), he = function(E) {
        function o(u, d) {
          var _ = E.call(this, "xhr-range-loader") || this;
          return _.TAG = "RangeLoader", _._seekHandler = u, _._config = d, _._needStash = !1, _._chunkSizeKBList = [128, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 5120, 6144, 7168, 8192], _._currentChunkSizeKB = 384, _._currentSpeedNormalized = 0, _._zeroSpeedChunkCount = 0, _._xhr = null, _._speedSampler = new v(), _._requestAbort = !1, _._waitForTotalLength = !1, _._totalLengthReceived = !1, _._currentRequestURL = null, _._currentRedirectedURL = null, _._currentRequestRange = null, _._totalLength = null, _._contentLength = null, _._receivedLength = 0, _._lastTimeLoaded = 0, _;
        }
        return V(o, E), o.isSupported = function() {
          try {
            var u = new XMLHttpRequest();
            return u.open("GET", "https://example.com", !0), u.responseType = "arraybuffer", u.responseType === "arraybuffer";
          } catch (d) {
            return D.a.w("RangeLoader", d.message), !1;
          }
        }, o.prototype.destroy = function() {
          this.isWorking() && this.abort(), this._xhr && (this._xhr.onreadystatechange = null, this._xhr.onprogress = null, this._xhr.onload = null, this._xhr.onerror = null, this._xhr = null), E.prototype.destroy.call(this);
        }, Object.defineProperty(o.prototype, "currentSpeed", { get: function() {
          return this._speedSampler.lastSecondKBps;
        }, enumerable: !1, configurable: !0 }), o.prototype.open = function(u, d) {
          this._dataSource = u, this._range = d, this._status = g.c.kConnecting;
          var _ = !1;
          this._dataSource.filesize != null && this._dataSource.filesize !== 0 && (_ = !0, this._totalLength = this._dataSource.filesize), this._totalLengthReceived || _ ? this._openSubRange() : (this._waitForTotalLength = !0, this._internalOpen(this._dataSource, { from: 0, to: -1 }));
        }, o.prototype._openSubRange = function() {
          var u = 1024 * this._currentChunkSizeKB, d = this._range.from + this._receivedLength, _ = d + u;
          this._contentLength != null && _ - this._range.from >= this._contentLength && (_ = this._range.from + this._contentLength - 1), this._currentRequestRange = { from: d, to: _ }, this._internalOpen(this._dataSource, this._currentRequestRange);
        }, o.prototype._internalOpen = function(u, d) {
          this._lastTimeLoaded = 0;
          var _ = u.url;
          this._config.reuseRedirectedURL && (this._currentRedirectedURL != null ? _ = this._currentRedirectedURL : u.redirectedURL != null && (_ = u.redirectedURL));
          var A = this._seekHandler.getConfig(_, d);
          this._currentRequestURL = A.url;
          var P = this._xhr = new XMLHttpRequest();
          if (P.open("GET", A.url, !0), P.responseType = "arraybuffer", P.onreadystatechange = this._onReadyStateChange.bind(this), P.onprogress = this._onProgress.bind(this), P.onload = this._onLoad.bind(this), P.onerror = this._onXhrError.bind(this), u.withCredentials && (P.withCredentials = !0), typeof A.headers == "object") {
            var W = A.headers;
            for (var $ in W)
              W.hasOwnProperty($) && P.setRequestHeader($, W[$]);
          }
          if (typeof this._config.headers == "object") {
            W = this._config.headers;
            for (var $ in W)
              W.hasOwnProperty($) && P.setRequestHeader($, W[$]);
          }
          P.send();
        }, o.prototype.abort = function() {
          this._requestAbort = !0, this._internalAbort(), this._status = g.c.kComplete;
        }, o.prototype._internalAbort = function() {
          this._xhr && (this._xhr.onreadystatechange = null, this._xhr.onprogress = null, this._xhr.onload = null, this._xhr.onerror = null, this._xhr.abort(), this._xhr = null);
        }, o.prototype._onReadyStateChange = function(u) {
          var d = u.target;
          if (d.readyState === 2) {
            if (d.responseURL != null) {
              var _ = this._seekHandler.removeURLParameters(d.responseURL);
              d.responseURL !== this._currentRequestURL && _ !== this._currentRedirectedURL && (this._currentRedirectedURL = _, this._onURLRedirect && this._onURLRedirect(_));
            }
            if (d.status >= 200 && d.status <= 299) {
              if (this._waitForTotalLength)
                return;
              this._status = g.c.kBuffering;
            } else {
              if (this._status = g.c.kError, !this._onError)
                throw new c.d("RangeLoader: Http code invalid, " + d.status + " " + d.statusText);
              this._onError(g.b.HTTP_STATUS_CODE_INVALID, { code: d.status, msg: d.statusText });
            }
          }
        }, o.prototype._onProgress = function(u) {
          if (this._status !== g.c.kError) {
            if (this._contentLength === null) {
              var d = !1;
              if (this._waitForTotalLength) {
                this._waitForTotalLength = !1, this._totalLengthReceived = !0, d = !0;
                var _ = u.total;
                this._internalAbort(), _ != null & _ !== 0 && (this._totalLength = _);
              }
              if (this._range.to === -1 ? this._contentLength = this._totalLength - this._range.from : this._contentLength = this._range.to - this._range.from + 1, d)
                return void this._openSubRange();
              this._onContentLengthKnown && this._onContentLengthKnown(this._contentLength);
            }
            var A = u.loaded - this._lastTimeLoaded;
            this._lastTimeLoaded = u.loaded, this._speedSampler.addBytes(A);
          }
        }, o.prototype._normalizeSpeed = function(u) {
          var d = this._chunkSizeKBList, _ = d.length - 1, A = 0, P = 0, W = _;
          if (u < d[0])
            return d[0];
          for (; P <= W; ) {
            if ((A = P + Math.floor((W - P) / 2)) === _ || u >= d[A] && u < d[A + 1])
              return d[A];
            d[A] < u ? P = A + 1 : W = A - 1;
          }
        }, o.prototype._onLoad = function(u) {
          if (this._status !== g.c.kError)
            if (this._waitForTotalLength)
              this._waitForTotalLength = !1;
            else {
              this._lastTimeLoaded = 0;
              var d = this._speedSampler.lastSecondKBps;
              if (d === 0 && (this._zeroSpeedChunkCount++, this._zeroSpeedChunkCount >= 3 && (d = this._speedSampler.currentKBps)), d !== 0) {
                var _ = this._normalizeSpeed(d);
                this._currentSpeedNormalized !== _ && (this._currentSpeedNormalized = _, this._currentChunkSizeKB = _);
              }
              var A = u.target.response, P = this._range.from + this._receivedLength;
              this._receivedLength += A.byteLength;
              var W = !1;
              this._contentLength != null && this._receivedLength < this._contentLength ? this._openSubRange() : W = !0, this._onDataArrival && this._onDataArrival(A, P, this._receivedLength), W && (this._status = g.c.kComplete, this._onComplete && this._onComplete(this._range.from, this._range.from + this._receivedLength - 1));
            }
        }, o.prototype._onXhrError = function(u) {
          this._status = g.c.kError;
          var d = 0, _ = null;
          if (this._contentLength && this._receivedLength > 0 && this._receivedLength < this._contentLength ? (d = g.b.EARLY_EOF, _ = { code: -1, msg: "RangeLoader meet Early-Eof" }) : (d = g.b.EXCEPTION, _ = { code: -1, msg: u.constructor.name + " " + u.type }), !this._onError)
            throw new c.d(_.msg);
          this._onError(d, _);
        }, o;
      }(g.a), ie = function() {
        var E = function(o, u) {
          return (E = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, _) {
            d.__proto__ = _;
          } || function(d, _) {
            for (var A in _)
              _.hasOwnProperty(A) && (d[A] = _[A]);
          })(o, u);
        };
        return function(o, u) {
          function d() {
            this.constructor = o;
          }
          E(o, u), o.prototype = u === null ? Object.create(u) : (d.prototype = u.prototype, new d());
        };
      }(), X = function(E) {
        function o() {
          var u = E.call(this, "websocket-loader") || this;
          return u.TAG = "WebSocketLoader", u._needStash = !0, u._ws = null, u._requestAbort = !1, u._receivedLength = 0, u;
        }
        return ie(o, E), o.isSupported = function() {
          try {
            return self.WebSocket !== void 0;
          } catch {
            return !1;
          }
        }, o.prototype.destroy = function() {
          this._ws && this.abort(), E.prototype.destroy.call(this);
        }, o.prototype.open = function(u) {
          try {
            var d = this._ws = new self.WebSocket(u.url);
            d.binaryType = "arraybuffer", d.onopen = this._onWebSocketOpen.bind(this), d.onclose = this._onWebSocketClose.bind(this), d.onmessage = this._onWebSocketMessage.bind(this), d.onerror = this._onWebSocketError.bind(this), this._status = g.c.kConnecting;
          } catch (A) {
            this._status = g.c.kError;
            var _ = { code: A.code, msg: A.message };
            if (!this._onError)
              throw new c.d(_.msg);
            this._onError(g.b.EXCEPTION, _);
          }
        }, o.prototype.abort = function() {
          var u = this._ws;
          !u || u.readyState !== 0 && u.readyState !== 1 || (this._requestAbort = !0, u.close()), this._ws = null, this._status = g.c.kComplete;
        }, o.prototype._onWebSocketOpen = function(u) {
          this._status = g.c.kBuffering;
        }, o.prototype._onWebSocketClose = function(u) {
          this._requestAbort !== !0 ? (this._status = g.c.kComplete, this._onComplete && this._onComplete(0, this._receivedLength - 1)) : this._requestAbort = !1;
        }, o.prototype._onWebSocketMessage = function(u) {
          var d = this;
          if (u.data instanceof ArrayBuffer)
            this._dispatchArrayBuffer(u.data);
          else if (u.data instanceof Blob) {
            var _ = new FileReader();
            _.onload = function() {
              d._dispatchArrayBuffer(_.result);
            }, _.readAsArrayBuffer(u.data);
          } else {
            this._status = g.c.kError;
            var A = { code: -1, msg: "Unsupported WebSocket message type: " + u.data.constructor.name };
            if (!this._onError)
              throw new c.d(A.msg);
            this._onError(g.b.EXCEPTION, A);
          }
        }, o.prototype._dispatchArrayBuffer = function(u) {
          var d = u, _ = this._receivedLength;
          this._receivedLength += d.byteLength, this._onDataArrival && this._onDataArrival(d, _, this._receivedLength);
        }, o.prototype._onWebSocketError = function(u) {
          this._status = g.c.kError;
          var d = { code: u.code, msg: u.message };
          if (!this._onError)
            throw new c.d(d.msg);
          this._onError(g.b.EXCEPTION, d);
        }, o;
      }(g.a), K = function() {
        function E(o) {
          this._zeroStart = o || !1;
        }
        return E.prototype.getConfig = function(o, u) {
          var d = {};
          if (u.from !== 0 || u.to !== -1) {
            var _ = void 0;
            _ = u.to !== -1 ? "bytes=" + u.from.toString() + "-" + u.to.toString() : "bytes=" + u.from.toString() + "-", d.Range = _;
          } else
            this._zeroStart && (d.Range = "bytes=0-");
          return { url: o, headers: d };
        }, E.prototype.removeURLParameters = function(o) {
          return o;
        }, E;
      }(), m = function() {
        function E(o, u) {
          this._startName = o, this._endName = u;
        }
        return E.prototype.getConfig = function(o, u) {
          var d = o;
          if (u.from !== 0 || u.to !== -1) {
            var _ = !0;
            d.indexOf("?") === -1 && (d += "?", _ = !1), _ && (d += "&"), d += this._startName + "=" + u.from.toString(), u.to !== -1 && (d += "&" + this._endName + "=" + u.to.toString());
          }
          return { url: d, headers: {} };
        }, E.prototype.removeURLParameters = function(o) {
          var u = o.split("?")[0], d = void 0, _ = o.indexOf("?");
          _ !== -1 && (d = o.substring(_ + 1));
          var A = "";
          if (d != null && d.length > 0)
            for (var P = d.split("&"), W = 0; W < P.length; W++) {
              var $ = P[W].split("="), ae = W > 0;
              $[0] !== this._startName && $[0] !== this._endName && (ae && (A += "&"), A += P[W]);
            }
          return A.length === 0 ? u : u + "?" + A;
        }, E;
      }(), B = function() {
        function E(o, u, d) {
          this.TAG = "IOController", this._config = u, this._extraData = d, this._stashInitialSize = 65536, u.stashInitialSize != null && u.stashInitialSize > 0 && (this._stashInitialSize = u.stashInitialSize), this._stashUsed = 0, this._stashSize = this._stashInitialSize, this._bufferSize = 3145728, this._stashBuffer = new ArrayBuffer(this._bufferSize), this._stashByteStart = 0, this._enableStash = !0, u.enableStashBuffer === !1 && (this._enableStash = !1), this._loader = null, this._loaderClass = null, this._seekHandler = null, this._dataSource = o, this._isWebSocketURL = /wss?:\/\/(.+?)/.test(o.url), this._refTotalLength = o.filesize ? o.filesize : null, this._totalLength = this._refTotalLength, this._fullRequestFlag = !1, this._currentRange = null, this._redirectedURL = null, this._speedNormalized = 0, this._speedSampler = new v(), this._speedNormalizeList = [32, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096], this._isEarlyEofReconnecting = !1, this._paused = !1, this._resumeFrom = 0, this._onDataArrival = null, this._onSeeked = null, this._onError = null, this._onComplete = null, this._onRedirect = null, this._onRecoveredEarlyEof = null, this._selectSeekHandler(), this._selectLoader(), this._createLoader();
        }
        return E.prototype.destroy = function() {
          this._loader.isWorking() && this._loader.abort(), this._loader.destroy(), this._loader = null, this._loaderClass = null, this._dataSource = null, this._stashBuffer = null, this._stashUsed = this._stashSize = this._bufferSize = this._stashByteStart = 0, this._currentRange = null, this._speedSampler = null, this._isEarlyEofReconnecting = !1, this._onDataArrival = null, this._onSeeked = null, this._onError = null, this._onComplete = null, this._onRedirect = null, this._onRecoveredEarlyEof = null, this._extraData = null;
        }, E.prototype.isWorking = function() {
          return this._loader && this._loader.isWorking() && !this._paused;
        }, E.prototype.isPaused = function() {
          return this._paused;
        }, Object.defineProperty(E.prototype, "status", { get: function() {
          return this._loader.status;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(E.prototype, "extraData", { get: function() {
          return this._extraData;
        }, set: function(o) {
          this._extraData = o;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(E.prototype, "onDataArrival", { get: function() {
          return this._onDataArrival;
        }, set: function(o) {
          this._onDataArrival = o;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(E.prototype, "onSeeked", { get: function() {
          return this._onSeeked;
        }, set: function(o) {
          this._onSeeked = o;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(E.prototype, "onError", { get: function() {
          return this._onError;
        }, set: function(o) {
          this._onError = o;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(E.prototype, "onComplete", { get: function() {
          return this._onComplete;
        }, set: function(o) {
          this._onComplete = o;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(E.prototype, "onRedirect", { get: function() {
          return this._onRedirect;
        }, set: function(o) {
          this._onRedirect = o;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(E.prototype, "onRecoveredEarlyEof", { get: function() {
          return this._onRecoveredEarlyEof;
        }, set: function(o) {
          this._onRecoveredEarlyEof = o;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(E.prototype, "currentURL", { get: function() {
          return this._dataSource.url;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(E.prototype, "hasRedirect", { get: function() {
          return this._redirectedURL != null || this._dataSource.redirectedURL != null;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(E.prototype, "currentRedirectedURL", { get: function() {
          return this._redirectedURL || this._dataSource.redirectedURL;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(E.prototype, "currentSpeed", { get: function() {
          return this._loaderClass === he ? this._loader.currentSpeed : this._speedSampler.lastSecondKBps;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(E.prototype, "loaderType", { get: function() {
          return this._loader.type;
        }, enumerable: !1, configurable: !0 }), E.prototype._selectSeekHandler = function() {
          var o = this._config;
          if (o.seekType === "range")
            this._seekHandler = new K(this._config.rangeLoadZeroStart);
          else if (o.seekType === "param") {
            var u = o.seekParamStart || "bstart", d = o.seekParamEnd || "bend";
            this._seekHandler = new m(u, d);
          } else {
            if (o.seekType !== "custom")
              throw new c.b("Invalid seekType in config: " + o.seekType);
            if (typeof o.customSeekHandler != "function")
              throw new c.b("Custom seekType specified in config but invalid customSeekHandler!");
            this._seekHandler = new o.customSeekHandler();
          }
        }, E.prototype._selectLoader = function() {
          if (this._config.customLoader != null)
            this._loaderClass = this._config.customLoader;
          else if (this._isWebSocketURL)
            this._loaderClass = X;
          else if (I.isSupported())
            this._loaderClass = I;
          else if (F.isSupported())
            this._loaderClass = F;
          else {
            if (!he.isSupported())
              throw new c.d("Your browser doesn't support xhr with arraybuffer responseType!");
            this._loaderClass = he;
          }
        }, E.prototype._createLoader = function() {
          this._loader = new this._loaderClass(this._seekHandler, this._config), this._loader.needStashBuffer === !1 && (this._enableStash = !1), this._loader.onContentLengthKnown = this._onContentLengthKnown.bind(this), this._loader.onURLRedirect = this._onURLRedirect.bind(this), this._loader.onDataArrival = this._onLoaderChunkArrival.bind(this), this._loader.onComplete = this._onLoaderComplete.bind(this), this._loader.onError = this._onLoaderError.bind(this);
        }, E.prototype.open = function(o) {
          this._currentRange = { from: 0, to: -1 }, o && (this._currentRange.from = o), this._speedSampler.reset(), o || (this._fullRequestFlag = !0), this._loader.open(this._dataSource, Object.assign({}, this._currentRange));
        }, E.prototype.abort = function() {
          this._loader.abort(), this._paused && (this._paused = !1, this._resumeFrom = 0);
        }, E.prototype.pause = function() {
          this.isWorking() && (this._loader.abort(), this._stashUsed !== 0 ? (this._resumeFrom = this._stashByteStart, this._currentRange.to = this._stashByteStart - 1) : this._resumeFrom = this._currentRange.to + 1, this._stashUsed = 0, this._stashByteStart = 0, this._paused = !0);
        }, E.prototype.resume = function() {
          if (this._paused) {
            this._paused = !1;
            var o = this._resumeFrom;
            this._resumeFrom = 0, this._internalSeek(o, !0);
          }
        }, E.prototype.seek = function(o) {
          this._paused = !1, this._stashUsed = 0, this._stashByteStart = 0, this._internalSeek(o, !0);
        }, E.prototype._internalSeek = function(o, u) {
          this._loader.isWorking() && this._loader.abort(), this._flushStashBuffer(u), this._loader.destroy(), this._loader = null;
          var d = { from: o, to: -1 };
          this._currentRange = { from: d.from, to: -1 }, this._speedSampler.reset(), this._stashSize = this._stashInitialSize, this._createLoader(), this._loader.open(this._dataSource, d), this._onSeeked && this._onSeeked();
        }, E.prototype.updateUrl = function(o) {
          if (!o || typeof o != "string" || o.length === 0)
            throw new c.b("Url must be a non-empty string!");
          this._dataSource.url = o;
        }, E.prototype._expandBuffer = function(o) {
          for (var u = this._stashSize; u + 1048576 < o; )
            u *= 2;
          if ((u += 1048576) !== this._bufferSize) {
            var d = new ArrayBuffer(u);
            if (this._stashUsed > 0) {
              var _ = new Uint8Array(this._stashBuffer, 0, this._stashUsed);
              new Uint8Array(d, 0, u).set(_, 0);
            }
            this._stashBuffer = d, this._bufferSize = u;
          }
        }, E.prototype._normalizeSpeed = function(o) {
          var u = this._speedNormalizeList, d = u.length - 1, _ = 0, A = 0, P = d;
          if (o < u[0])
            return u[0];
          for (; A <= P; ) {
            if ((_ = A + Math.floor((P - A) / 2)) === d || o >= u[_] && o < u[_ + 1])
              return u[_];
            u[_] < o ? A = _ + 1 : P = _ - 1;
          }
        }, E.prototype._adjustStashSize = function(o) {
          var u = 0;
          (u = this._config.isLive ? o / 8 : o < 512 ? o : o >= 512 && o <= 1024 ? Math.floor(1.5 * o) : 2 * o) > 8192 && (u = 8192);
          var d = 1024 * u + 1048576;
          this._bufferSize < d && this._expandBuffer(d), this._stashSize = 1024 * u;
        }, E.prototype._dispatchChunks = function(o, u) {
          return this._currentRange.to = u + o.byteLength - 1, this._onDataArrival(o, u);
        }, E.prototype._onURLRedirect = function(o) {
          this._redirectedURL = o, this._onRedirect && this._onRedirect(o);
        }, E.prototype._onContentLengthKnown = function(o) {
          o && this._fullRequestFlag && (this._totalLength = o, this._fullRequestFlag = !1);
        }, E.prototype._onLoaderChunkArrival = function(o, u, d) {
          if (!this._onDataArrival)
            throw new c.a("IOController: No existing consumer (onDataArrival) callback!");
          if (!this._paused) {
            this._isEarlyEofReconnecting && (this._isEarlyEofReconnecting = !1, this._onRecoveredEarlyEof && this._onRecoveredEarlyEof()), this._speedSampler.addBytes(o.byteLength);
            var _ = this._speedSampler.lastSecondKBps;
            if (_ !== 0) {
              var A = this._normalizeSpeed(_);
              this._speedNormalized !== A && (this._speedNormalized = A, this._adjustStashSize(A));
            }
            if (this._enableStash)
              if (this._stashUsed === 0 && this._stashByteStart === 0 && (this._stashByteStart = u), this._stashUsed + o.byteLength <= this._stashSize)
                ($ = new Uint8Array(this._stashBuffer, 0, this._stashSize)).set(new Uint8Array(o), this._stashUsed), this._stashUsed += o.byteLength;
              else if ($ = new Uint8Array(this._stashBuffer, 0, this._bufferSize), this._stashUsed > 0) {
                var P = this._stashBuffer.slice(0, this._stashUsed);
                (ae = this._dispatchChunks(P, this._stashByteStart)) < P.byteLength ? ae > 0 && (de = new Uint8Array(P, ae), $.set(de, 0), this._stashUsed = de.byteLength, this._stashByteStart += ae) : (this._stashUsed = 0, this._stashByteStart += ae), this._stashUsed + o.byteLength > this._bufferSize && (this._expandBuffer(this._stashUsed + o.byteLength), $ = new Uint8Array(this._stashBuffer, 0, this._bufferSize)), $.set(new Uint8Array(o), this._stashUsed), this._stashUsed += o.byteLength;
              } else
                (ae = this._dispatchChunks(o, u)) < o.byteLength && ((W = o.byteLength - ae) > this._bufferSize && (this._expandBuffer(W), $ = new Uint8Array(this._stashBuffer, 0, this._bufferSize)), $.set(new Uint8Array(o, ae), 0), this._stashUsed += W, this._stashByteStart = u + ae);
            else if (this._stashUsed === 0) {
              var W;
              (ae = this._dispatchChunks(o, u)) < o.byteLength && ((W = o.byteLength - ae) > this._bufferSize && this._expandBuffer(W), ($ = new Uint8Array(this._stashBuffer, 0, this._bufferSize)).set(new Uint8Array(o, ae), 0), this._stashUsed += W, this._stashByteStart = u + ae);
            } else {
              var $, ae;
              if (this._stashUsed + o.byteLength > this._bufferSize && this._expandBuffer(this._stashUsed + o.byteLength), ($ = new Uint8Array(this._stashBuffer, 0, this._bufferSize)).set(new Uint8Array(o), this._stashUsed), this._stashUsed += o.byteLength, (ae = this._dispatchChunks(this._stashBuffer.slice(0, this._stashUsed), this._stashByteStart)) < this._stashUsed && ae > 0) {
                var de = new Uint8Array(this._stashBuffer, ae);
                $.set(de, 0);
              }
              this._stashUsed -= ae, this._stashByteStart += ae;
            }
          }
        }, E.prototype._flushStashBuffer = function(o) {
          if (this._stashUsed > 0) {
            var u = this._stashBuffer.slice(0, this._stashUsed), d = this._dispatchChunks(u, this._stashByteStart), _ = u.byteLength - d;
            if (d < u.byteLength) {
              if (!o) {
                if (d > 0) {
                  var A = new Uint8Array(this._stashBuffer, 0, this._bufferSize), P = new Uint8Array(u, d);
                  A.set(P, 0), this._stashUsed = P.byteLength, this._stashByteStart += d;
                }
                return 0;
              }
              D.a.w(this.TAG, _ + " bytes unconsumed data remain when flush buffer, dropped");
            }
            return this._stashUsed = 0, this._stashByteStart = 0, _;
          }
          return 0;
        }, E.prototype._onLoaderComplete = function(o, u) {
          this._flushStashBuffer(!0), this._onComplete && this._onComplete(this._extraData);
        }, E.prototype._onLoaderError = function(o, u) {
          switch (D.a.e(this.TAG, "Loader error, code = " + u.code + ", msg = " + u.msg), this._flushStashBuffer(!1), this._isEarlyEofReconnecting && (this._isEarlyEofReconnecting = !1, o = g.b.UNRECOVERABLE_EARLY_EOF), o) {
            case g.b.EARLY_EOF:
              if (!this._config.isLive && this._totalLength) {
                var d = this._currentRange.to + 1;
                return void (d < this._totalLength && (D.a.w(this.TAG, "Connection lost, trying reconnect..."), this._isEarlyEofReconnecting = !0, this._internalSeek(d, !1)));
              }
              o = g.b.UNRECOVERABLE_EARLY_EOF;
              break;
            case g.b.UNRECOVERABLE_EARLY_EOF:
            case g.b.CONNECTING_TIMEOUT:
            case g.b.HTTP_STATUS_CODE_INVALID:
            case g.b.EXCEPTION:
          }
          if (!this._onError)
            throw new c.d("IOException: " + u.msg);
          this._onError(o, u);
        }, E;
      }();
      q.a = B;
    }, function(oe, q, k) {
      var x = function() {
        function D() {
        }
        return D.install = function() {
          Object.setPrototypeOf = Object.setPrototypeOf || function(v, g) {
            return v.__proto__ = g, v;
          }, Object.assign = Object.assign || function(v) {
            if (v == null)
              throw new TypeError("Cannot convert undefined or null to object");
            for (var g = Object(v), p = 1; p < arguments.length; p++) {
              var c = arguments[p];
              if (c != null)
                for (var b in c)
                  c.hasOwnProperty(b) && (g[b] = c[b]);
            }
            return g;
          }, typeof self.Promise != "function" && k(15).polyfill();
        }, D;
      }();
      x.install(), q.a = x;
    }, function(oe, q, k) {
      function x(p) {
        var c = {};
        function b(T) {
          if (c[T])
            return c[T].exports;
          var F = c[T] = { i: T, l: !1, exports: {} };
          return p[T].call(F.exports, F, F.exports, b), F.l = !0, F.exports;
        }
        b.m = p, b.c = c, b.i = function(T) {
          return T;
        }, b.d = function(T, F, V) {
          b.o(T, F) || Object.defineProperty(T, F, { configurable: !1, enumerable: !0, get: V });
        }, b.r = function(T) {
          Object.defineProperty(T, "__esModule", { value: !0 });
        }, b.n = function(T) {
          var F = T && T.__esModule ? function() {
            return T.default;
          } : function() {
            return T;
          };
          return b.d(F, "a", F), F;
        }, b.o = function(T, F) {
          return Object.prototype.hasOwnProperty.call(T, F);
        }, b.p = "/", b.oe = function(T) {
          throw console.error(T), T;
        };
        var I = b(b.s = ENTRY_MODULE);
        return I.default || I;
      }
      function D(p) {
        return (p + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
      }
      function v(p, c, b) {
        var I = {};
        I[b] = [];
        var T = c.toString(), F = T.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
        if (!F)
          return I;
        for (var V, he = F[1], ie = new RegExp("(\\\\n|\\W)" + D(he) + "\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)", "g"); V = ie.exec(T); )
          V[3] !== "dll-reference" && I[b].push(V[3]);
        for (ie = new RegExp("\\(" + D(he) + '\\("(dll-reference\\s([\\.|\\-|\\+|\\w|/|@]+))"\\)\\)\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)', "g"); V = ie.exec(T); )
          p[V[2]] || (I[b].push(V[1]), p[V[2]] = k(V[1]).m), I[V[2]] = I[V[2]] || [], I[V[2]].push(V[4]);
        for (var X, K = Object.keys(I), m = 0; m < K.length; m++)
          for (var B = 0; B < I[K[m]].length; B++)
            X = I[K[m]][B], isNaN(1 * X) || (I[K[m]][B] = 1 * I[K[m]][B]);
        return I;
      }
      function g(p) {
        return Object.keys(p).reduce(function(c, b) {
          return c || p[b].length > 0;
        }, !1);
      }
      oe.exports = function(p, c) {
        c = c || {};
        var b = { main: k.m }, I = c.all ? { main: Object.keys(b.main) } : function(ie, X) {
          for (var K = { main: [X] }, m = { main: [] }, B = { main: {} }; g(K); )
            for (var E = Object.keys(K), o = 0; o < E.length; o++) {
              var u = E[o], d = K[u].pop();
              if (B[u] = B[u] || {}, !B[u][d] && ie[u][d]) {
                B[u][d] = !0, m[u] = m[u] || [], m[u].push(d);
                for (var _ = v(ie, ie[u][d], u), A = Object.keys(_), P = 0; P < A.length; P++)
                  K[A[P]] = K[A[P]] || [], K[A[P]] = K[A[P]].concat(_[A[P]]);
              }
            }
          return m;
        }(b, p), T = "";
        Object.keys(I).filter(function(ie) {
          return ie !== "main";
        }).forEach(function(ie) {
          for (var X = 0; I[ie][X]; )
            X++;
          I[ie].push(X), b[ie][X] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })", T = T + "var " + ie + " = (" + x.toString().replace("ENTRY_MODULE", JSON.stringify(X)) + ")({" + I[ie].map(function(K) {
            return JSON.stringify(K) + ": " + b[ie][K].toString();
          }).join(",") + `});
`;
        }), T = T + "new ((" + x.toString().replace("ENTRY_MODULE", JSON.stringify(p)) + ")({" + I.main.map(function(ie) {
          return JSON.stringify(ie) + ": " + b.main[ie].toString();
        }).join(",") + "}))(self);";
        var F = new window.Blob([T], { type: "text/javascript" });
        if (c.bare)
          return F;
        var V = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(F), he = new window.Worker(V);
        return he.objectURL = V, he;
      };
    }, function(oe, q, k) {
      oe.exports = k(19).default;
    }, function(oe, q, k) {
      (function(x, D) {
        /*!
         * @overview es6-promise - a tiny implementation of Promises/A+.
         * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
         * @license   Licensed under MIT license
         *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
         * @version   v4.2.8+1e68dce6
         */
        var v;
        v = function() {
          function g(C) {
            return typeof C == "function";
          }
          var p = Array.isArray ? Array.isArray : function(C) {
            return Object.prototype.toString.call(C) === "[object Array]";
          }, c = 0, b = void 0, I = void 0, T = function(C, U) {
            m[c] = C, m[c + 1] = U, (c += 2) === 2 && (I ? I(B) : _());
          }, F = typeof window < "u" ? window : void 0, V = F || {}, he = V.MutationObserver || V.WebKitMutationObserver, ie = typeof self > "u" && x !== void 0 && {}.toString.call(x) === "[object process]", X = typeof Uint8ClampedArray < "u" && typeof importScripts < "u" && typeof MessageChannel < "u";
          function K() {
            var C = setTimeout;
            return function() {
              return C(B, 1);
            };
          }
          var m = new Array(1e3);
          function B() {
            for (var C = 0; C < c; C += 2)
              (0, m[C])(m[C + 1]), m[C] = void 0, m[C + 1] = void 0;
            c = 0;
          }
          var E, o, u, d, _ = void 0;
          function A(C, U) {
            var j = this, Z = new this.constructor($);
            Z[W] === void 0 && ye(Z);
            var J = j._state;
            if (J) {
              var Q = arguments[J - 1];
              T(function() {
                return te(J, Z, Q, j._result);
              });
            } else
              y(j, Z, C, U);
            return Z;
          }
          function P(C) {
            if (C && typeof C == "object" && C.constructor === this)
              return C;
            var U = new this($);
            return de(U, C), U;
          }
          ie ? _ = function() {
            return x.nextTick(B);
          } : he ? (o = 0, u = new he(B), d = document.createTextNode(""), u.observe(d, { characterData: !0 }), _ = function() {
            d.data = o = ++o % 2;
          }) : X ? ((E = new MessageChannel()).port1.onmessage = B, _ = function() {
            return E.port2.postMessage(0);
          }) : _ = F === void 0 ? function() {
            try {
              var C = Function("return this")().require("vertx");
              return (b = C.runOnLoop || C.runOnContext) !== void 0 ? function() {
                b(B);
              } : K();
            } catch {
              return K();
            }
          }() : K();
          var W = Math.random().toString(36).substring(2);
          function $() {
          }
          function ae(C, U, j) {
            U.constructor === C.constructor && j === A && U.constructor.resolve === P ? function(Z, J) {
              J._state === 1 ? a(Z, J._result) : J._state === 2 ? l(Z, J._result) : y(J, void 0, function(Q) {
                return de(Z, Q);
              }, function(Q) {
                return l(Z, Q);
              });
            }(C, U) : j === void 0 ? a(C, U) : g(j) ? function(Z, J, Q) {
              T(function(ge) {
                var i = !1, e = function(t, n, r, s) {
                  try {
                    t.call(n, r, s);
                  } catch (h) {
                    return h;
                  }
                }(Q, J, function(t) {
                  i || (i = !0, J !== t ? de(ge, t) : a(ge, t));
                }, function(t) {
                  i || (i = !0, l(ge, t));
                }, ge._label);
                !i && e && (i = !0, l(ge, e));
              }, Z);
            }(C, U, j) : a(C, U);
          }
          function de(C, U) {
            if (C === U)
              l(C, new TypeError("You cannot resolve a promise with itself"));
            else if (J = typeof (Z = U), Z === null || J !== "object" && J !== "function")
              a(C, U);
            else {
              var j = void 0;
              try {
                j = U.then;
              } catch (Q) {
                return void l(C, Q);
              }
              ae(C, U, j);
            }
            var Z, J;
          }
          function S(C) {
            C._onerror && C._onerror(C._result), z(C);
          }
          function a(C, U) {
            C._state === void 0 && (C._result = U, C._state = 1, C._subscribers.length !== 0 && T(z, C));
          }
          function l(C, U) {
            C._state === void 0 && (C._state = 2, C._result = U, T(S, C));
          }
          function y(C, U, j, Z) {
            var J = C._subscribers, Q = J.length;
            C._onerror = null, J[Q] = U, J[Q + 1] = j, J[Q + 2] = Z, Q === 0 && C._state && T(z, C);
          }
          function z(C) {
            var U = C._subscribers, j = C._state;
            if (U.length !== 0) {
              for (var Z = void 0, J = void 0, Q = C._result, ge = 0; ge < U.length; ge += 3)
                Z = U[ge], J = U[ge + j], Z ? te(j, Z, J, Q) : J(Q);
              C._subscribers.length = 0;
            }
          }
          function te(C, U, j, Z) {
            var J = g(j), Q = void 0, ge = void 0, i = !0;
            if (J) {
              try {
                Q = j(Z);
              } catch (e) {
                i = !1, ge = e;
              }
              if (U === Q)
                return void l(U, new TypeError("A promises callback cannot return that same promise."));
            } else
              Q = Z;
            U._state !== void 0 || (J && i ? de(U, Q) : i === !1 ? l(U, ge) : C === 1 ? a(U, Q) : C === 2 && l(U, Q));
          }
          var ue = 0;
          function ye(C) {
            C[W] = ue++, C._state = void 0, C._result = void 0, C._subscribers = [];
          }
          var Se = function() {
            function C(U, j) {
              this._instanceConstructor = U, this.promise = new U($), this.promise[W] || ye(this.promise), p(j) ? (this.length = j.length, this._remaining = j.length, this._result = new Array(this.length), this.length === 0 ? a(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(j), this._remaining === 0 && a(this.promise, this._result))) : l(this.promise, new Error("Array Methods must be provided an Array"));
            }
            return C.prototype._enumerate = function(U) {
              for (var j = 0; this._state === void 0 && j < U.length; j++)
                this._eachEntry(U[j], j);
            }, C.prototype._eachEntry = function(U, j) {
              var Z = this._instanceConstructor, J = Z.resolve;
              if (J === P) {
                var Q = void 0, ge = void 0, i = !1;
                try {
                  Q = U.then;
                } catch (t) {
                  i = !0, ge = t;
                }
                if (Q === A && U._state !== void 0)
                  this._settledAt(U._state, j, U._result);
                else if (typeof Q != "function")
                  this._remaining--, this._result[j] = U;
                else if (Z === fe) {
                  var e = new Z($);
                  i ? l(e, ge) : ae(e, U, Q), this._willSettleAt(e, j);
                } else
                  this._willSettleAt(new Z(function(t) {
                    return t(U);
                  }), j);
              } else
                this._willSettleAt(J(U), j);
            }, C.prototype._settledAt = function(U, j, Z) {
              var J = this.promise;
              J._state === void 0 && (this._remaining--, U === 2 ? l(J, Z) : this._result[j] = Z), this._remaining === 0 && a(J, this._result);
            }, C.prototype._willSettleAt = function(U, j) {
              var Z = this;
              y(U, void 0, function(J) {
                return Z._settledAt(1, j, J);
              }, function(J) {
                return Z._settledAt(2, j, J);
              });
            }, C;
          }(), fe = function() {
            function C(U) {
              this[W] = ue++, this._result = this._state = void 0, this._subscribers = [], $ !== U && (typeof U != "function" && function() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
              }(), this instanceof C ? function(j, Z) {
                try {
                  Z(function(J) {
                    de(j, J);
                  }, function(J) {
                    l(j, J);
                  });
                } catch (J) {
                  l(j, J);
                }
              }(this, U) : function() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
              }());
            }
            return C.prototype.catch = function(U) {
              return this.then(null, U);
            }, C.prototype.finally = function(U) {
              var j = this.constructor;
              return g(U) ? this.then(function(Z) {
                return j.resolve(U()).then(function() {
                  return Z;
                });
              }, function(Z) {
                return j.resolve(U()).then(function() {
                  throw Z;
                });
              }) : this.then(U, U);
            }, C;
          }();
          return fe.prototype.then = A, fe.all = function(C) {
            return new Se(this, C).promise;
          }, fe.race = function(C) {
            var U = this;
            return p(C) ? new U(function(j, Z) {
              for (var J = C.length, Q = 0; Q < J; Q++)
                U.resolve(C[Q]).then(j, Z);
            }) : new U(function(j, Z) {
              return Z(new TypeError("You must pass an array to race."));
            });
          }, fe.resolve = P, fe.reject = function(C) {
            var U = new this($);
            return l(U, C), U;
          }, fe._setScheduler = function(C) {
            I = C;
          }, fe._setAsap = function(C) {
            T = C;
          }, fe._asap = T, fe.polyfill = function() {
            var C = void 0;
            if (D !== void 0)
              C = D;
            else if (typeof self < "u")
              C = self;
            else
              try {
                C = Function("return this")();
              } catch {
                throw new Error("polyfill failed because global object is unavailable in this environment");
              }
            var U = C.Promise;
            if (U) {
              var j = null;
              try {
                j = Object.prototype.toString.call(U.resolve());
              } catch {
              }
              if (j === "[object Promise]" && !U.cast)
                return;
            }
            C.Promise = fe;
          }, fe.Promise = fe, fe;
        }, oe.exports = v();
      }).call(this, k(16), k(17));
    }, function(oe, q) {
      var k, x, D = oe.exports = {};
      function v() {
        throw new Error("setTimeout has not been defined");
      }
      function g() {
        throw new Error("clearTimeout has not been defined");
      }
      function p(X) {
        if (k === setTimeout)
          return setTimeout(X, 0);
        if ((k === v || !k) && setTimeout)
          return k = setTimeout, setTimeout(X, 0);
        try {
          return k(X, 0);
        } catch {
          try {
            return k.call(null, X, 0);
          } catch {
            return k.call(this, X, 0);
          }
        }
      }
      (function() {
        try {
          k = typeof setTimeout == "function" ? setTimeout : v;
        } catch {
          k = v;
        }
        try {
          x = typeof clearTimeout == "function" ? clearTimeout : g;
        } catch {
          x = g;
        }
      })();
      var c, b = [], I = !1, T = -1;
      function F() {
        I && c && (I = !1, c.length ? b = c.concat(b) : T = -1, b.length && V());
      }
      function V() {
        if (!I) {
          var X = p(F);
          I = !0;
          for (var K = b.length; K; ) {
            for (c = b, b = []; ++T < K; )
              c && c[T].run();
            T = -1, K = b.length;
          }
          c = null, I = !1, function(m) {
            if (x === clearTimeout)
              return clearTimeout(m);
            if ((x === g || !x) && clearTimeout)
              return x = clearTimeout, clearTimeout(m);
            try {
              x(m);
            } catch {
              try {
                return x.call(null, m);
              } catch {
                return x.call(this, m);
              }
            }
          }(X);
        }
      }
      function he(X, K) {
        this.fun = X, this.array = K;
      }
      function ie() {
      }
      D.nextTick = function(X) {
        var K = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var m = 1; m < arguments.length; m++)
            K[m - 1] = arguments[m];
        b.push(new he(X, K)), b.length !== 1 || I || p(V);
      }, he.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, D.title = "browser", D.browser = !0, D.env = {}, D.argv = [], D.version = "", D.versions = {}, D.on = ie, D.addListener = ie, D.once = ie, D.off = ie, D.removeListener = ie, D.removeAllListeners = ie, D.emit = ie, D.prependListener = ie, D.prependOnceListener = ie, D.listeners = function(X) {
        return [];
      }, D.binding = function(X) {
        throw new Error("process.binding is not supported");
      }, D.cwd = function() {
        return "/";
      }, D.chdir = function(X) {
        throw new Error("process.chdir is not supported");
      }, D.umask = function() {
        return 0;
      };
    }, function(oe, q) {
      var k;
      k = function() {
        return this;
      }();
      try {
        k = k || new Function("return this")();
      } catch {
        typeof window == "object" && (k = window);
      }
      oe.exports = k;
    }, function(oe, q, k) {
      k.r(q);
      var x = k(9), D = k(12), v = k(10), g = k(1);
      q.default = function(p) {
        var c = null, b = function(_, A) {
          p.postMessage({ msg: "logcat_callback", data: { type: _, logcat: A } });
        }.bind(this);
        function I(_, A) {
          var P = { msg: g.a.INIT_SEGMENT, data: { type: _, data: A } };
          p.postMessage(P, [A.data]);
        }
        function T(_, A) {
          var P = { msg: g.a.MEDIA_SEGMENT, data: { type: _, data: A } };
          p.postMessage(P, [A.data]);
        }
        function F() {
          var _ = { msg: g.a.LOADING_COMPLETE };
          p.postMessage(_);
        }
        function V() {
          var _ = { msg: g.a.RECOVERED_EARLY_EOF };
          p.postMessage(_);
        }
        function he(_) {
          var A = { msg: g.a.MEDIA_INFO, data: _ };
          p.postMessage(A);
        }
        function ie(_) {
          var A = { msg: g.a.METADATA_ARRIVED, data: _ };
          p.postMessage(A);
        }
        function X(_) {
          var A = { msg: g.a.SCRIPTDATA_ARRIVED, data: _ };
          p.postMessage(A);
        }
        function K(_) {
          var A = { msg: g.a.TIMED_ID3_METADATA_ARRIVED, data: _ };
          p.postMessage(A);
        }
        function m(_) {
          var A = { msg: g.a.PES_PRIVATE_DATA_DESCRIPTOR, data: _ };
          p.postMessage(A);
        }
        function B(_) {
          var A = { msg: g.a.PES_PRIVATE_DATA_ARRIVED, data: _ };
          p.postMessage(A);
        }
        function E(_) {
          var A = { msg: g.a.STATISTICS_INFO, data: _ };
          p.postMessage(A);
        }
        function o(_, A) {
          p.postMessage({ msg: g.a.IO_ERROR, data: { type: _, info: A } });
        }
        function u(_, A) {
          p.postMessage({ msg: g.a.DEMUX_ERROR, data: { type: _, info: A } });
        }
        function d(_) {
          p.postMessage({ msg: g.a.RECOMMEND_SEEKPOINT, data: _ });
        }
        D.a.install(), p.addEventListener("message", function(_) {
          switch (_.data.cmd) {
            case "init":
              (c = new v.a(_.data.param[0], _.data.param[1])).on(g.a.IO_ERROR, o.bind(this)), c.on(g.a.DEMUX_ERROR, u.bind(this)), c.on(g.a.INIT_SEGMENT, I.bind(this)), c.on(g.a.MEDIA_SEGMENT, T.bind(this)), c.on(g.a.LOADING_COMPLETE, F.bind(this)), c.on(g.a.RECOVERED_EARLY_EOF, V.bind(this)), c.on(g.a.MEDIA_INFO, he.bind(this)), c.on(g.a.METADATA_ARRIVED, ie.bind(this)), c.on(g.a.SCRIPTDATA_ARRIVED, X.bind(this)), c.on(g.a.TIMED_ID3_METADATA_ARRIVED, K.bind(this)), c.on(g.a.PES_PRIVATE_DATA_DESCRIPTOR, m.bind(this)), c.on(g.a.PES_PRIVATE_DATA_ARRIVED, B.bind(this)), c.on(g.a.STATISTICS_INFO, E.bind(this)), c.on(g.a.RECOMMEND_SEEKPOINT, d.bind(this));
              break;
            case "destroy":
              c && (c.destroy(), c = null), p.postMessage({ msg: "destroyed" });
              break;
            case "start":
              c.start();
              break;
            case "stop":
              c.stop();
              break;
            case "seek":
              c.seek(_.data.param);
              break;
            case "pause":
              c.pause();
              break;
            case "resume":
              c.resume();
              break;
            case "logging_config":
              var A = _.data.param;
              x.a.applyConfig(A), A.enableCallback === !0 ? x.a.addLogListener(b) : x.a.removeLogListener(b);
          }
        });
      };
    }, function(oe, q, k) {
      k.r(q);
      var x = k(12), D = k(11), v = { enableWorker: !1, enableStashBuffer: !0, stashInitialSize: void 0, isLive: !1, liveBufferLatencyChasing: !1, liveBufferLatencyMaxLatency: 1.5, liveBufferLatencyMinRemain: 0.5, lazyLoad: !0, lazyLoadMaxDuration: 180, lazyLoadRecoverDuration: 30, deferLoadAfterSourceOpen: !0, autoCleanupMaxBackwardDuration: 180, autoCleanupMinBackwardDuration: 120, statisticsInfoReportInterval: 600, fixAudioTimestampGap: !0, accurateSeek: !1, seekType: "range", seekParamStart: "bstart", seekParamEnd: "bend", rangeLoadZeroStart: !1, customSeekHandler: void 0, reuseRedirectedURL: !1, headers: void 0, customLoader: void 0 };
      function g() {
        return Object.assign({}, v);
      }
      var p = function() {
        function S() {
        }
        return S.supportMSEH264Playback = function() {
          return window.MediaSource && window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');
        }, S.supportNetworkStreamIO = function() {
          var a = new D.a({}, g()), l = a.loaderType;
          return a.destroy(), l == "fetch-stream-loader" || l == "xhr-moz-chunked-loader";
        }, S.getNetworkLoaderTypeName = function() {
          var a = new D.a({}, g()), l = a.loaderType;
          return a.destroy(), l;
        }, S.supportNativeMediaPlayback = function(a) {
          S.videoElement == null && (S.videoElement = window.document.createElement("video"));
          var l = S.videoElement.canPlayType(a);
          return l === "probably" || l == "maybe";
        }, S.getFeatureList = function() {
          var a = { msePlayback: !1, mseLivePlayback: !1, networkStreamIO: !1, networkLoaderName: "", nativeMP4H264Playback: !1, nativeWebmVP8Playback: !1, nativeWebmVP9Playback: !1 };
          return a.msePlayback = S.supportMSEH264Playback(), a.networkStreamIO = S.supportNetworkStreamIO(), a.networkLoaderName = S.getNetworkLoaderTypeName(), a.mseLivePlayback = a.msePlayback && a.networkStreamIO, a.nativeMP4H264Playback = S.supportNativeMediaPlayback('video/mp4; codecs="avc1.42001E, mp4a.40.2"'), a.nativeWebmVP8Playback = S.supportNativeMediaPlayback('video/webm; codecs="vp8.0, vorbis"'), a.nativeWebmVP9Playback = S.supportNativeMediaPlayback('video/webm; codecs="vp9"'), a;
        }, S;
      }(), c = k(2), b = k(6), I = k.n(b), T = k(0), F = k(4), V = { ERROR: "error", LOADING_COMPLETE: "loading_complete", RECOVERED_EARLY_EOF: "recovered_early_eof", MEDIA_INFO: "media_info", METADATA_ARRIVED: "metadata_arrived", SCRIPTDATA_ARRIVED: "scriptdata_arrived", TIMED_ID3_METADATA_ARRIVED: "timed_id3_metadata_arrived", PES_PRIVATE_DATA_DESCRIPTOR: "pes_private_data_descriptor", PES_PRIVATE_DATA_ARRIVED: "pes_private_data_arrived", STATISTICS_INFO: "statistics_info" }, he = k(13), ie = k.n(he), X = k(9), K = k(10), m = k(1), B = k(8), E = function() {
        function S(a, l) {
          if (this.TAG = "Transmuxer", this._emitter = new I.a(), l.enableWorker && typeof Worker < "u")
            try {
              this._worker = ie()(18), this._workerDestroying = !1, this._worker.addEventListener("message", this._onWorkerMessage.bind(this)), this._worker.postMessage({ cmd: "init", param: [a, l] }), this.e = { onLoggingConfigChanged: this._onLoggingConfigChanged.bind(this) }, X.a.registerListener(this.e.onLoggingConfigChanged), this._worker.postMessage({ cmd: "logging_config", param: X.a.getConfig() });
            } catch {
              T.a.e(this.TAG, "Error while initialize transmuxing worker, fallback to inline transmuxing"), this._worker = null, this._controller = new K.a(a, l);
            }
          else
            this._controller = new K.a(a, l);
          if (this._controller) {
            var y = this._controller;
            y.on(m.a.IO_ERROR, this._onIOError.bind(this)), y.on(m.a.DEMUX_ERROR, this._onDemuxError.bind(this)), y.on(m.a.INIT_SEGMENT, this._onInitSegment.bind(this)), y.on(m.a.MEDIA_SEGMENT, this._onMediaSegment.bind(this)), y.on(m.a.LOADING_COMPLETE, this._onLoadingComplete.bind(this)), y.on(m.a.RECOVERED_EARLY_EOF, this._onRecoveredEarlyEof.bind(this)), y.on(m.a.MEDIA_INFO, this._onMediaInfo.bind(this)), y.on(m.a.METADATA_ARRIVED, this._onMetaDataArrived.bind(this)), y.on(m.a.SCRIPTDATA_ARRIVED, this._onScriptDataArrived.bind(this)), y.on(m.a.TIMED_ID3_METADATA_ARRIVED, this._onTimedID3MetadataArrived.bind(this)), y.on(m.a.PES_PRIVATE_DATA_DESCRIPTOR, this._onPESPrivateDataDescriptor.bind(this)), y.on(m.a.PES_PRIVATE_DATA_ARRIVED, this._onPESPrivateDataArrived.bind(this)), y.on(m.a.STATISTICS_INFO, this._onStatisticsInfo.bind(this)), y.on(m.a.RECOMMEND_SEEKPOINT, this._onRecommendSeekpoint.bind(this));
          }
        }
        return S.prototype.destroy = function() {
          this._worker ? this._workerDestroying || (this._workerDestroying = !0, this._worker.postMessage({ cmd: "destroy" }), X.a.removeListener(this.e.onLoggingConfigChanged), this.e = null) : (this._controller.destroy(), this._controller = null), this._emitter.removeAllListeners(), this._emitter = null;
        }, S.prototype.on = function(a, l) {
          this._emitter.addListener(a, l);
        }, S.prototype.off = function(a, l) {
          this._emitter.removeListener(a, l);
        }, S.prototype.hasWorker = function() {
          return this._worker != null;
        }, S.prototype.open = function() {
          this._worker ? this._worker.postMessage({ cmd: "start" }) : this._controller.start();
        }, S.prototype.close = function() {
          this._worker ? this._worker.postMessage({ cmd: "stop" }) : this._controller.stop();
        }, S.prototype.seek = function(a) {
          this._worker ? this._worker.postMessage({ cmd: "seek", param: a }) : this._controller.seek(a);
        }, S.prototype.pause = function() {
          this._worker ? this._worker.postMessage({ cmd: "pause" }) : this._controller.pause();
        }, S.prototype.resume = function() {
          this._worker ? this._worker.postMessage({ cmd: "resume" }) : this._controller.resume();
        }, S.prototype._onInitSegment = function(a, l) {
          var y = this;
          Promise.resolve().then(function() {
            y._emitter.emit(m.a.INIT_SEGMENT, a, l);
          });
        }, S.prototype._onMediaSegment = function(a, l) {
          var y = this;
          Promise.resolve().then(function() {
            y._emitter.emit(m.a.MEDIA_SEGMENT, a, l);
          });
        }, S.prototype._onLoadingComplete = function() {
          var a = this;
          Promise.resolve().then(function() {
            a._emitter.emit(m.a.LOADING_COMPLETE);
          });
        }, S.prototype._onRecoveredEarlyEof = function() {
          var a = this;
          Promise.resolve().then(function() {
            a._emitter.emit(m.a.RECOVERED_EARLY_EOF);
          });
        }, S.prototype._onMediaInfo = function(a) {
          var l = this;
          Promise.resolve().then(function() {
            l._emitter.emit(m.a.MEDIA_INFO, a);
          });
        }, S.prototype._onMetaDataArrived = function(a) {
          var l = this;
          Promise.resolve().then(function() {
            l._emitter.emit(m.a.METADATA_ARRIVED, a);
          });
        }, S.prototype._onScriptDataArrived = function(a) {
          var l = this;
          Promise.resolve().then(function() {
            l._emitter.emit(m.a.SCRIPTDATA_ARRIVED, a);
          });
        }, S.prototype._onTimedID3MetadataArrived = function(a) {
          var l = this;
          Promise.resolve().then(function() {
            l._emitter.emit(m.a.TIMED_ID3_METADATA_ARRIVED, a);
          });
        }, S.prototype._onPESPrivateDataDescriptor = function(a) {
          var l = this;
          Promise.resolve().then(function() {
            l._emitter.emit(m.a.PES_PRIVATE_DATA_DESCRIPTOR, a);
          });
        }, S.prototype._onPESPrivateDataArrived = function(a) {
          var l = this;
          Promise.resolve().then(function() {
            l._emitter.emit(m.a.PES_PRIVATE_DATA_ARRIVED, a);
          });
        }, S.prototype._onStatisticsInfo = function(a) {
          var l = this;
          Promise.resolve().then(function() {
            l._emitter.emit(m.a.STATISTICS_INFO, a);
          });
        }, S.prototype._onIOError = function(a, l) {
          var y = this;
          Promise.resolve().then(function() {
            y._emitter.emit(m.a.IO_ERROR, a, l);
          });
        }, S.prototype._onDemuxError = function(a, l) {
          var y = this;
          Promise.resolve().then(function() {
            y._emitter.emit(m.a.DEMUX_ERROR, a, l);
          });
        }, S.prototype._onRecommendSeekpoint = function(a) {
          var l = this;
          Promise.resolve().then(function() {
            l._emitter.emit(m.a.RECOMMEND_SEEKPOINT, a);
          });
        }, S.prototype._onLoggingConfigChanged = function(a) {
          this._worker && this._worker.postMessage({ cmd: "logging_config", param: a });
        }, S.prototype._onWorkerMessage = function(a) {
          var l = a.data, y = l.data;
          if (l.msg === "destroyed" || this._workerDestroying)
            return this._workerDestroying = !1, this._worker.terminate(), void (this._worker = null);
          switch (l.msg) {
            case m.a.INIT_SEGMENT:
            case m.a.MEDIA_SEGMENT:
              this._emitter.emit(l.msg, y.type, y.data);
              break;
            case m.a.LOADING_COMPLETE:
            case m.a.RECOVERED_EARLY_EOF:
              this._emitter.emit(l.msg);
              break;
            case m.a.MEDIA_INFO:
              Object.setPrototypeOf(y, B.a.prototype), this._emitter.emit(l.msg, y);
              break;
            case m.a.METADATA_ARRIVED:
            case m.a.SCRIPTDATA_ARRIVED:
            case m.a.TIMED_ID3_METADATA_ARRIVED:
            case m.a.PES_PRIVATE_DATA_DESCRIPTOR:
            case m.a.PES_PRIVATE_DATA_ARRIVED:
            case m.a.STATISTICS_INFO:
              this._emitter.emit(l.msg, y);
              break;
            case m.a.IO_ERROR:
            case m.a.DEMUX_ERROR:
              this._emitter.emit(l.msg, y.type, y.info);
              break;
            case m.a.RECOMMEND_SEEKPOINT:
              this._emitter.emit(l.msg, y);
              break;
            case "logcat_callback":
              T.a.emitter.emit("log", y.type, y.logcat);
          }
        }, S;
      }(), o = { ERROR: "error", SOURCE_OPEN: "source_open", UPDATE_END: "update_end", BUFFER_FULL: "buffer_full" }, u = k(7), d = k(3), _ = function() {
        function S(a) {
          this.TAG = "MSEController", this._config = a, this._emitter = new I.a(), this._config.isLive && this._config.autoCleanupSourceBuffer == null && (this._config.autoCleanupSourceBuffer = !0), this.e = { onSourceOpen: this._onSourceOpen.bind(this), onSourceEnded: this._onSourceEnded.bind(this), onSourceClose: this._onSourceClose.bind(this), onSourceBufferError: this._onSourceBufferError.bind(this), onSourceBufferUpdateEnd: this._onSourceBufferUpdateEnd.bind(this) }, this._mediaSource = null, this._mediaSourceObjectURL = null, this._mediaElement = null, this._isBufferFull = !1, this._hasPendingEos = !1, this._requireSetMediaDuration = !1, this._pendingMediaDuration = 0, this._pendingSourceBufferInit = [], this._mimeTypes = { video: null, audio: null }, this._sourceBuffers = { video: null, audio: null }, this._lastInitSegments = { video: null, audio: null }, this._pendingSegments = { video: [], audio: [] }, this._pendingRemoveRanges = { video: [], audio: [] }, this._idrList = new u.a();
        }
        return S.prototype.destroy = function() {
          (this._mediaElement || this._mediaSource) && this.detachMediaElement(), this.e = null, this._emitter.removeAllListeners(), this._emitter = null;
        }, S.prototype.on = function(a, l) {
          this._emitter.addListener(a, l);
        }, S.prototype.off = function(a, l) {
          this._emitter.removeListener(a, l);
        }, S.prototype.attachMediaElement = function(a) {
          if (this._mediaSource)
            throw new d.a("MediaSource has been attached to an HTMLMediaElement!");
          var l = this._mediaSource = new window.MediaSource();
          l.addEventListener("sourceopen", this.e.onSourceOpen), l.addEventListener("sourceended", this.e.onSourceEnded), l.addEventListener("sourceclose", this.e.onSourceClose), this._mediaElement = a, this._mediaSourceObjectURL = window.URL.createObjectURL(this._mediaSource), a.src = this._mediaSourceObjectURL;
        }, S.prototype.detachMediaElement = function() {
          if (this._mediaSource) {
            var a = this._mediaSource;
            for (var l in this._sourceBuffers) {
              var y = this._pendingSegments[l];
              y.splice(0, y.length), this._pendingSegments[l] = null, this._pendingRemoveRanges[l] = null, this._lastInitSegments[l] = null;
              var z = this._sourceBuffers[l];
              if (z) {
                if (a.readyState !== "closed") {
                  try {
                    a.removeSourceBuffer(z);
                  } catch (te) {
                    T.a.e(this.TAG, te.message);
                  }
                  z.removeEventListener("error", this.e.onSourceBufferError), z.removeEventListener("updateend", this.e.onSourceBufferUpdateEnd);
                }
                this._mimeTypes[l] = null, this._sourceBuffers[l] = null;
              }
            }
            if (a.readyState === "open")
              try {
                a.endOfStream();
              } catch (te) {
                T.a.e(this.TAG, te.message);
              }
            a.removeEventListener("sourceopen", this.e.onSourceOpen), a.removeEventListener("sourceended", this.e.onSourceEnded), a.removeEventListener("sourceclose", this.e.onSourceClose), this._pendingSourceBufferInit = [], this._isBufferFull = !1, this._idrList.clear(), this._mediaSource = null;
          }
          this._mediaElement && (this._mediaElement.src = "", this._mediaElement.removeAttribute("src"), this._mediaElement = null), this._mediaSourceObjectURL && (window.URL.revokeObjectURL(this._mediaSourceObjectURL), this._mediaSourceObjectURL = null);
        }, S.prototype.appendInitSegment = function(a, l) {
          if (!this._mediaSource || this._mediaSource.readyState !== "open")
            return this._pendingSourceBufferInit.push(a), void this._pendingSegments[a.type].push(a);
          var y = a, z = "" + y.container;
          y.codec && y.codec.length > 0 && (z += ";codecs=" + y.codec);
          var te = !1;
          if (T.a.v(this.TAG, "Received Initialization Segment, mimeType: " + z), this._lastInitSegments[y.type] = y, z !== this._mimeTypes[y.type]) {
            if (this._mimeTypes[y.type])
              T.a.v(this.TAG, "Notice: " + y.type + " mimeType changed, origin: " + this._mimeTypes[y.type] + ", target: " + z);
            else {
              te = !0;
              try {
                var ue = this._sourceBuffers[y.type] = this._mediaSource.addSourceBuffer(z);
                ue.addEventListener("error", this.e.onSourceBufferError), ue.addEventListener("updateend", this.e.onSourceBufferUpdateEnd);
              } catch (ye) {
                return T.a.e(this.TAG, ye.message), void this._emitter.emit(o.ERROR, { code: ye.code, msg: ye.message });
              }
            }
            this._mimeTypes[y.type] = z;
          }
          l || this._pendingSegments[y.type].push(y), te || this._sourceBuffers[y.type] && !this._sourceBuffers[y.type].updating && this._doAppendSegments(), F.a.safari && y.container === "audio/mpeg" && y.mediaDuration > 0 && (this._requireSetMediaDuration = !0, this._pendingMediaDuration = y.mediaDuration / 1e3, this._updateMediaSourceDuration());
        }, S.prototype.appendMediaSegment = function(a) {
          var l = a;
          this._pendingSegments[l.type].push(l), this._config.autoCleanupSourceBuffer && this._needCleanupSourceBuffer() && this._doCleanupSourceBuffer();
          var y = this._sourceBuffers[l.type];
          !y || y.updating || this._hasPendingRemoveRanges() || this._doAppendSegments();
        }, S.prototype.seek = function(a) {
          for (var l in this._sourceBuffers)
            if (this._sourceBuffers[l]) {
              var y = this._sourceBuffers[l];
              if (this._mediaSource.readyState === "open")
                try {
                  y.abort();
                } catch (fe) {
                  T.a.e(this.TAG, fe.message);
                }
              this._idrList.clear();
              var z = this._pendingSegments[l];
              if (z.splice(0, z.length), this._mediaSource.readyState !== "closed") {
                for (var te = 0; te < y.buffered.length; te++) {
                  var ue = y.buffered.start(te), ye = y.buffered.end(te);
                  this._pendingRemoveRanges[l].push({ start: ue, end: ye });
                }
                if (y.updating || this._doRemoveRanges(), F.a.safari) {
                  var Se = this._lastInitSegments[l];
                  Se && (this._pendingSegments[l].push(Se), y.updating || this._doAppendSegments());
                }
              }
            }
        }, S.prototype.endOfStream = function() {
          var a = this._mediaSource, l = this._sourceBuffers;
          a && a.readyState === "open" ? l.video && l.video.updating || l.audio && l.audio.updating ? this._hasPendingEos = !0 : (this._hasPendingEos = !1, a.endOfStream()) : a && a.readyState === "closed" && this._hasPendingSegments() && (this._hasPendingEos = !0);
        }, S.prototype.getNearestKeyframe = function(a) {
          return this._idrList.getLastSyncPointBeforeDts(a);
        }, S.prototype._needCleanupSourceBuffer = function() {
          if (!this._config.autoCleanupSourceBuffer)
            return !1;
          var a = this._mediaElement.currentTime;
          for (var l in this._sourceBuffers) {
            var y = this._sourceBuffers[l];
            if (y) {
              var z = y.buffered;
              if (z.length >= 1 && a - z.start(0) >= this._config.autoCleanupMaxBackwardDuration)
                return !0;
            }
          }
          return !1;
        }, S.prototype._doCleanupSourceBuffer = function() {
          var a = this._mediaElement.currentTime;
          for (var l in this._sourceBuffers) {
            var y = this._sourceBuffers[l];
            if (y) {
              for (var z = y.buffered, te = !1, ue = 0; ue < z.length; ue++) {
                var ye = z.start(ue), Se = z.end(ue);
                if (ye <= a && a < Se + 3) {
                  if (a - ye >= this._config.autoCleanupMaxBackwardDuration) {
                    te = !0;
                    var fe = a - this._config.autoCleanupMinBackwardDuration;
                    this._pendingRemoveRanges[l].push({ start: ye, end: fe });
                  }
                } else
                  Se < a && (te = !0, this._pendingRemoveRanges[l].push({ start: ye, end: Se }));
              }
              te && !y.updating && this._doRemoveRanges();
            }
          }
        }, S.prototype._updateMediaSourceDuration = function() {
          var a = this._sourceBuffers;
          if (this._mediaElement.readyState !== 0 && this._mediaSource.readyState === "open" && !(a.video && a.video.updating || a.audio && a.audio.updating)) {
            var l = this._mediaSource.duration, y = this._pendingMediaDuration;
            y > 0 && (isNaN(l) || y > l) && (T.a.v(this.TAG, "Update MediaSource duration from " + l + " to " + y), this._mediaSource.duration = y), this._requireSetMediaDuration = !1, this._pendingMediaDuration = 0;
          }
        }, S.prototype._doRemoveRanges = function() {
          for (var a in this._pendingRemoveRanges)
            if (this._sourceBuffers[a] && !this._sourceBuffers[a].updating)
              for (var l = this._sourceBuffers[a], y = this._pendingRemoveRanges[a]; y.length && !l.updating; ) {
                var z = y.shift();
                l.remove(z.start, z.end);
              }
        }, S.prototype._doAppendSegments = function() {
          var a = this._pendingSegments;
          for (var l in a)
            if (this._sourceBuffers[l] && !this._sourceBuffers[l].updating && a[l].length > 0) {
              var y = a[l].shift();
              if (y.timestampOffset) {
                var z = this._sourceBuffers[l].timestampOffset, te = y.timestampOffset / 1e3;
                Math.abs(z - te) > 0.1 && (T.a.v(this.TAG, "Update MPEG audio timestampOffset from " + z + " to " + te), this._sourceBuffers[l].timestampOffset = te), delete y.timestampOffset;
              }
              if (!y.data || y.data.byteLength === 0)
                continue;
              try {
                this._sourceBuffers[l].appendBuffer(y.data), this._isBufferFull = !1, l === "video" && y.hasOwnProperty("info") && this._idrList.appendArray(y.info.syncPoints);
              } catch (ue) {
                this._pendingSegments[l].unshift(y), ue.code === 22 ? (this._isBufferFull || this._emitter.emit(o.BUFFER_FULL), this._isBufferFull = !0) : (T.a.e(this.TAG, ue.message), this._emitter.emit(o.ERROR, { code: ue.code, msg: ue.message }));
              }
            }
        }, S.prototype._onSourceOpen = function() {
          if (T.a.v(this.TAG, "MediaSource onSourceOpen"), this._mediaSource.removeEventListener("sourceopen", this.e.onSourceOpen), this._pendingSourceBufferInit.length > 0)
            for (var a = this._pendingSourceBufferInit; a.length; ) {
              var l = a.shift();
              this.appendInitSegment(l, !0);
            }
          this._hasPendingSegments() && this._doAppendSegments(), this._emitter.emit(o.SOURCE_OPEN);
        }, S.prototype._onSourceEnded = function() {
          T.a.v(this.TAG, "MediaSource onSourceEnded");
        }, S.prototype._onSourceClose = function() {
          T.a.v(this.TAG, "MediaSource onSourceClose"), this._mediaSource && this.e != null && (this._mediaSource.removeEventListener("sourceopen", this.e.onSourceOpen), this._mediaSource.removeEventListener("sourceended", this.e.onSourceEnded), this._mediaSource.removeEventListener("sourceclose", this.e.onSourceClose));
        }, S.prototype._hasPendingSegments = function() {
          var a = this._pendingSegments;
          return a.video.length > 0 || a.audio.length > 0;
        }, S.prototype._hasPendingRemoveRanges = function() {
          var a = this._pendingRemoveRanges;
          return a.video.length > 0 || a.audio.length > 0;
        }, S.prototype._onSourceBufferUpdateEnd = function() {
          this._requireSetMediaDuration ? this._updateMediaSourceDuration() : this._hasPendingRemoveRanges() ? this._doRemoveRanges() : this._hasPendingSegments() ? this._doAppendSegments() : this._hasPendingEos && this.endOfStream(), this._emitter.emit(o.UPDATE_END);
        }, S.prototype._onSourceBufferError = function(a) {
          T.a.e(this.TAG, "SourceBuffer Error: " + a);
        }, S;
      }(), A = k(5), P = { NETWORK_ERROR: "NetworkError", MEDIA_ERROR: "MediaError", OTHER_ERROR: "OtherError" }, W = { NETWORK_EXCEPTION: c.b.EXCEPTION, NETWORK_STATUS_CODE_INVALID: c.b.HTTP_STATUS_CODE_INVALID, NETWORK_TIMEOUT: c.b.CONNECTING_TIMEOUT, NETWORK_UNRECOVERABLE_EARLY_EOF: c.b.UNRECOVERABLE_EARLY_EOF, MEDIA_MSE_ERROR: "MediaMSEError", MEDIA_FORMAT_ERROR: A.a.FORMAT_ERROR, MEDIA_FORMAT_UNSUPPORTED: A.a.FORMAT_UNSUPPORTED, MEDIA_CODEC_UNSUPPORTED: A.a.CODEC_UNSUPPORTED }, $ = function() {
        function S(a, l) {
          this.TAG = "MSEPlayer", this._type = "MSEPlayer", this._emitter = new I.a(), this._config = g(), typeof l == "object" && Object.assign(this._config, l);
          var y = a.type.toLowerCase();
          if (y !== "mse" && y !== "mpegts" && y !== "m2ts" && y !== "flv")
            throw new d.b("MSEPlayer requires an mpegts/m2ts/flv MediaDataSource input!");
          a.isLive === !0 && (this._config.isLive = !0), this.e = { onvLoadedMetadata: this._onvLoadedMetadata.bind(this), onvSeeking: this._onvSeeking.bind(this), onvCanPlay: this._onvCanPlay.bind(this), onvStalled: this._onvStalled.bind(this), onvProgress: this._onvProgress.bind(this) }, self.performance && self.performance.now ? this._now = self.performance.now.bind(self.performance) : this._now = Date.now, this._pendingSeekTime = null, this._requestSetTime = !1, this._seekpointRecord = null, this._progressChecker = null, this._mediaDataSource = a, this._mediaElement = null, this._msectl = null, this._transmuxer = null, this._mseSourceOpened = !1, this._hasPendingLoad = !1, this._receivedCanPlay = !1, this._mediaInfo = null, this._statisticsInfo = null;
          var z = F.a.chrome && (F.a.version.major < 50 || F.a.version.major === 50 && F.a.version.build < 2661);
          this._alwaysSeekKeyframe = !!(z || F.a.msedge || F.a.msie), this._alwaysSeekKeyframe && (this._config.accurateSeek = !1);
        }
        return S.prototype.destroy = function() {
          this._progressChecker != null && (window.clearInterval(this._progressChecker), this._progressChecker = null), this._transmuxer && this.unload(), this._mediaElement && this.detachMediaElement(), this.e = null, this._mediaDataSource = null, this._emitter.removeAllListeners(), this._emitter = null;
        }, S.prototype.on = function(a, l) {
          var y = this;
          a === V.MEDIA_INFO ? this._mediaInfo != null && Promise.resolve().then(function() {
            y._emitter.emit(V.MEDIA_INFO, y.mediaInfo);
          }) : a === V.STATISTICS_INFO && this._statisticsInfo != null && Promise.resolve().then(function() {
            y._emitter.emit(V.STATISTICS_INFO, y.statisticsInfo);
          }), this._emitter.addListener(a, l);
        }, S.prototype.off = function(a, l) {
          this._emitter.removeListener(a, l);
        }, S.prototype.attachMediaElement = function(a) {
          var l = this;
          if (this._mediaElement = a, a.addEventListener("loadedmetadata", this.e.onvLoadedMetadata), a.addEventListener("seeking", this.e.onvSeeking), a.addEventListener("canplay", this.e.onvCanPlay), a.addEventListener("stalled", this.e.onvStalled), a.addEventListener("progress", this.e.onvProgress), this._msectl = new _(this._config), this._msectl.on(o.UPDATE_END, this._onmseUpdateEnd.bind(this)), this._msectl.on(o.BUFFER_FULL, this._onmseBufferFull.bind(this)), this._msectl.on(o.SOURCE_OPEN, function() {
            l._mseSourceOpened = !0, l._hasPendingLoad && (l._hasPendingLoad = !1, l.load());
          }), this._msectl.on(o.ERROR, function(y) {
            l._emitter.emit(V.ERROR, P.MEDIA_ERROR, W.MEDIA_MSE_ERROR, y);
          }), this._msectl.attachMediaElement(a), this._pendingSeekTime != null)
            try {
              a.currentTime = this._pendingSeekTime, this._pendingSeekTime = null;
            } catch {
            }
        }, S.prototype.detachMediaElement = function() {
          this._mediaElement && (this._msectl.detachMediaElement(), this._mediaElement.removeEventListener("loadedmetadata", this.e.onvLoadedMetadata), this._mediaElement.removeEventListener("seeking", this.e.onvSeeking), this._mediaElement.removeEventListener("canplay", this.e.onvCanPlay), this._mediaElement.removeEventListener("stalled", this.e.onvStalled), this._mediaElement.removeEventListener("progress", this.e.onvProgress), this._mediaElement = null), this._msectl && (this._msectl.destroy(), this._msectl = null);
        }, S.prototype.load = function() {
          var a = this;
          if (!this._mediaElement)
            throw new d.a("HTMLMediaElement must be attached before load()!");
          if (this._transmuxer)
            throw new d.a("MSEPlayer.load() has been called, please call unload() first!");
          this._hasPendingLoad || (this._config.deferLoadAfterSourceOpen && this._mseSourceOpened === !1 ? this._hasPendingLoad = !0 : (this._mediaElement.readyState > 0 && (this._requestSetTime = !0, this._mediaElement.currentTime = 0), this._transmuxer = new E(this._mediaDataSource, this._config), this._transmuxer.on(m.a.INIT_SEGMENT, function(l, y) {
            a._msectl.appendInitSegment(y);
          }), this._transmuxer.on(m.a.MEDIA_SEGMENT, function(l, y) {
            if (a._msectl.appendMediaSegment(y), a._config.lazyLoad && !a._config.isLive) {
              var z = a._mediaElement.currentTime;
              y.info.endDts >= 1e3 * (z + a._config.lazyLoadMaxDuration) && a._progressChecker == null && (T.a.v(a.TAG, "Maximum buffering duration exceeded, suspend transmuxing task"), a._suspendTransmuxer());
            }
          }), this._transmuxer.on(m.a.LOADING_COMPLETE, function() {
            a._msectl.endOfStream(), a._emitter.emit(V.LOADING_COMPLETE);
          }), this._transmuxer.on(m.a.RECOVERED_EARLY_EOF, function() {
            a._emitter.emit(V.RECOVERED_EARLY_EOF);
          }), this._transmuxer.on(m.a.IO_ERROR, function(l, y) {
            a._emitter.emit(V.ERROR, P.NETWORK_ERROR, l, y);
          }), this._transmuxer.on(m.a.DEMUX_ERROR, function(l, y) {
            a._emitter.emit(V.ERROR, P.MEDIA_ERROR, l, { code: -1, msg: y });
          }), this._transmuxer.on(m.a.MEDIA_INFO, function(l) {
            a._mediaInfo = l, a._emitter.emit(V.MEDIA_INFO, Object.assign({}, l));
          }), this._transmuxer.on(m.a.METADATA_ARRIVED, function(l) {
            a._emitter.emit(V.METADATA_ARRIVED, l);
          }), this._transmuxer.on(m.a.SCRIPTDATA_ARRIVED, function(l) {
            a._emitter.emit(V.SCRIPTDATA_ARRIVED, l);
          }), this._transmuxer.on(m.a.TIMED_ID3_METADATA_ARRIVED, function(l) {
            a._emitter.emit(V.TIMED_ID3_METADATA_ARRIVED, l);
          }), this._transmuxer.on(m.a.PES_PRIVATE_DATA_DESCRIPTOR, function(l) {
            a._emitter.emit(V.PES_PRIVATE_DATA_DESCRIPTOR, l);
          }), this._transmuxer.on(m.a.PES_PRIVATE_DATA_ARRIVED, function(l) {
            a._emitter.emit(V.PES_PRIVATE_DATA_ARRIVED, l);
          }), this._transmuxer.on(m.a.STATISTICS_INFO, function(l) {
            a._statisticsInfo = a._fillStatisticsInfo(l), a._emitter.emit(V.STATISTICS_INFO, Object.assign({}, a._statisticsInfo));
          }), this._transmuxer.on(m.a.RECOMMEND_SEEKPOINT, function(l) {
            a._mediaElement && !a._config.accurateSeek && (a._requestSetTime = !0, a._mediaElement.currentTime = l / 1e3);
          }), this._transmuxer.open()));
        }, S.prototype.unload = function() {
          this._mediaElement && this._mediaElement.pause(), this._msectl && this._msectl.seek(0), this._transmuxer && (this._transmuxer.close(), this._transmuxer.destroy(), this._transmuxer = null);
        }, S.prototype.play = function() {
          return this._mediaElement.play();
        }, S.prototype.pause = function() {
          this._mediaElement.pause();
        }, Object.defineProperty(S.prototype, "type", { get: function() {
          return this._type;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(S.prototype, "buffered", { get: function() {
          return this._mediaElement.buffered;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(S.prototype, "duration", { get: function() {
          return this._mediaElement.duration;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(S.prototype, "volume", { get: function() {
          return this._mediaElement.volume;
        }, set: function(a) {
          this._mediaElement.volume = a;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(S.prototype, "muted", { get: function() {
          return this._mediaElement.muted;
        }, set: function(a) {
          this._mediaElement.muted = a;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(S.prototype, "currentTime", { get: function() {
          return this._mediaElement ? this._mediaElement.currentTime : 0;
        }, set: function(a) {
          this._mediaElement ? this._internalSeek(a) : this._pendingSeekTime = a;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(S.prototype, "mediaInfo", { get: function() {
          return Object.assign({}, this._mediaInfo);
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(S.prototype, "statisticsInfo", { get: function() {
          return this._statisticsInfo == null && (this._statisticsInfo = {}), this._statisticsInfo = this._fillStatisticsInfo(this._statisticsInfo), Object.assign({}, this._statisticsInfo);
        }, enumerable: !1, configurable: !0 }), S.prototype._fillStatisticsInfo = function(a) {
          if (a.playerType = this._type, !(this._mediaElement instanceof HTMLVideoElement))
            return a;
          var l = !0, y = 0, z = 0;
          if (this._mediaElement.getVideoPlaybackQuality) {
            var te = this._mediaElement.getVideoPlaybackQuality();
            y = te.totalVideoFrames, z = te.droppedVideoFrames;
          } else
            this._mediaElement.webkitDecodedFrameCount != null ? (y = this._mediaElement.webkitDecodedFrameCount, z = this._mediaElement.webkitDroppedFrameCount) : l = !1;
          return l && (a.decodedFrames = y, a.droppedFrames = z), a;
        }, S.prototype._onmseUpdateEnd = function() {
          var a = this._mediaElement.buffered, l = this._mediaElement.currentTime;
          if (this._config.isLive && this._config.liveBufferLatencyChasing && a.length > 0 && !this._mediaElement.paused) {
            var y = a.end(a.length - 1);
            if (y > this._config.liveBufferLatencyMaxLatency && y - l > this._config.liveBufferLatencyMaxLatency) {
              var z = y - this._config.liveBufferLatencyMinRemain;
              this.currentTime = z;
            }
          }
          if (this._config.lazyLoad && !this._config.isLive) {
            for (var te = 0, ue = 0; ue < a.length; ue++) {
              var ye = a.start(ue), Se = a.end(ue);
              if (ye <= l && l < Se) {
                te = Se;
                break;
              }
            }
            te >= l + this._config.lazyLoadMaxDuration && this._progressChecker == null && (T.a.v(this.TAG, "Maximum buffering duration exceeded, suspend transmuxing task"), this._suspendTransmuxer());
          }
        }, S.prototype._onmseBufferFull = function() {
          T.a.v(this.TAG, "MSE SourceBuffer is full, suspend transmuxing task"), this._progressChecker == null && this._suspendTransmuxer();
        }, S.prototype._suspendTransmuxer = function() {
          this._transmuxer && (this._transmuxer.pause(), this._progressChecker == null && (this._progressChecker = window.setInterval(this._checkProgressAndResume.bind(this), 1e3)));
        }, S.prototype._checkProgressAndResume = function() {
          for (var a = this._mediaElement.currentTime, l = this._mediaElement.buffered, y = !1, z = 0; z < l.length; z++) {
            var te = l.start(z), ue = l.end(z);
            if (a >= te && a < ue) {
              a >= ue - this._config.lazyLoadRecoverDuration && (y = !0);
              break;
            }
          }
          y && (window.clearInterval(this._progressChecker), this._progressChecker = null, y && (T.a.v(this.TAG, "Continue loading from paused position"), this._transmuxer.resume()));
        }, S.prototype._isTimepointBuffered = function(a) {
          for (var l = this._mediaElement.buffered, y = 0; y < l.length; y++) {
            var z = l.start(y), te = l.end(y);
            if (a >= z && a < te)
              return !0;
          }
          return !1;
        }, S.prototype._internalSeek = function(a) {
          var l = this._isTimepointBuffered(a), y = !1, z = 0;
          if (a < 1 && this._mediaElement.buffered.length > 0) {
            var te = this._mediaElement.buffered.start(0);
            (te < 1 && a < te || F.a.safari) && (y = !0, z = F.a.safari ? 0.1 : te);
          }
          if (y)
            this._requestSetTime = !0, this._mediaElement.currentTime = z;
          else if (l) {
            if (this._alwaysSeekKeyframe) {
              var ue = this._msectl.getNearestKeyframe(Math.floor(1e3 * a));
              this._requestSetTime = !0, this._mediaElement.currentTime = ue != null ? ue.dts / 1e3 : a;
            } else
              this._requestSetTime = !0, this._mediaElement.currentTime = a;
            this._progressChecker != null && this._checkProgressAndResume();
          } else
            this._progressChecker != null && (window.clearInterval(this._progressChecker), this._progressChecker = null), this._msectl.seek(a), this._transmuxer.seek(Math.floor(1e3 * a)), this._config.accurateSeek && (this._requestSetTime = !0, this._mediaElement.currentTime = a);
        }, S.prototype._checkAndApplyUnbufferedSeekpoint = function() {
          if (this._seekpointRecord)
            if (this._seekpointRecord.recordTime <= this._now() - 100) {
              var a = this._mediaElement.currentTime;
              this._seekpointRecord = null, this._isTimepointBuffered(a) || (this._progressChecker != null && (window.clearTimeout(this._progressChecker), this._progressChecker = null), this._msectl.seek(a), this._transmuxer.seek(Math.floor(1e3 * a)), this._config.accurateSeek && (this._requestSetTime = !0, this._mediaElement.currentTime = a));
            } else
              window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this), 50);
        }, S.prototype._checkAndResumeStuckPlayback = function(a) {
          var l = this._mediaElement;
          if (a || !this._receivedCanPlay || l.readyState < 2) {
            var y = l.buffered;
            y.length > 0 && l.currentTime < y.start(0) && (T.a.w(this.TAG, "Playback seems stuck at " + l.currentTime + ", seek to " + y.start(0)), this._requestSetTime = !0, this._mediaElement.currentTime = y.start(0), this._mediaElement.removeEventListener("progress", this.e.onvProgress));
          } else
            this._mediaElement.removeEventListener("progress", this.e.onvProgress);
        }, S.prototype._onvLoadedMetadata = function(a) {
          this._pendingSeekTime != null && (this._mediaElement.currentTime = this._pendingSeekTime, this._pendingSeekTime = null);
        }, S.prototype._onvSeeking = function(a) {
          var l = this._mediaElement.currentTime, y = this._mediaElement.buffered;
          if (this._requestSetTime)
            this._requestSetTime = !1;
          else {
            if (l < 1 && y.length > 0) {
              var z = y.start(0);
              if (z < 1 && l < z || F.a.safari)
                return this._requestSetTime = !0, void (this._mediaElement.currentTime = F.a.safari ? 0.1 : z);
            }
            if (this._isTimepointBuffered(l)) {
              if (this._alwaysSeekKeyframe) {
                var te = this._msectl.getNearestKeyframe(Math.floor(1e3 * l));
                te != null && (this._requestSetTime = !0, this._mediaElement.currentTime = te.dts / 1e3);
              }
              this._progressChecker != null && this._checkProgressAndResume();
            } else
              this._seekpointRecord = { seekPoint: l, recordTime: this._now() }, window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this), 50);
          }
        }, S.prototype._onvCanPlay = function(a) {
          this._receivedCanPlay = !0, this._mediaElement.removeEventListener("canplay", this.e.onvCanPlay);
        }, S.prototype._onvStalled = function(a) {
          this._checkAndResumeStuckPlayback(!0);
        }, S.prototype._onvProgress = function(a) {
          this._checkAndResumeStuckPlayback();
        }, S;
      }(), ae = function() {
        function S(a, l) {
          this.TAG = "NativePlayer", this._type = "NativePlayer", this._emitter = new I.a(), this._config = g(), typeof l == "object" && Object.assign(this._config, l);
          var y = a.type.toLowerCase();
          if (y === "mse" || y === "mpegts" || y === "m2ts" || y === "flv")
            throw new d.b("NativePlayer does't support mse/mpegts/m2ts/flv MediaDataSource input!");
          if (a.hasOwnProperty("segments"))
            throw new d.b("NativePlayer(" + a.type + ") doesn't support multipart playback!");
          this.e = { onvLoadedMetadata: this._onvLoadedMetadata.bind(this) }, this._pendingSeekTime = null, this._statisticsReporter = null, this._mediaDataSource = a, this._mediaElement = null;
        }
        return S.prototype.destroy = function() {
          this._mediaElement && (this.unload(), this.detachMediaElement()), this.e = null, this._mediaDataSource = null, this._emitter.removeAllListeners(), this._emitter = null;
        }, S.prototype.on = function(a, l) {
          var y = this;
          a === V.MEDIA_INFO ? this._mediaElement != null && this._mediaElement.readyState !== 0 && Promise.resolve().then(function() {
            y._emitter.emit(V.MEDIA_INFO, y.mediaInfo);
          }) : a === V.STATISTICS_INFO && this._mediaElement != null && this._mediaElement.readyState !== 0 && Promise.resolve().then(function() {
            y._emitter.emit(V.STATISTICS_INFO, y.statisticsInfo);
          }), this._emitter.addListener(a, l);
        }, S.prototype.off = function(a, l) {
          this._emitter.removeListener(a, l);
        }, S.prototype.attachMediaElement = function(a) {
          if (this._mediaElement = a, a.addEventListener("loadedmetadata", this.e.onvLoadedMetadata), this._pendingSeekTime != null)
            try {
              a.currentTime = this._pendingSeekTime, this._pendingSeekTime = null;
            } catch {
            }
        }, S.prototype.detachMediaElement = function() {
          this._mediaElement && (this._mediaElement.src = "", this._mediaElement.removeAttribute("src"), this._mediaElement.removeEventListener("loadedmetadata", this.e.onvLoadedMetadata), this._mediaElement = null), this._statisticsReporter != null && (window.clearInterval(this._statisticsReporter), this._statisticsReporter = null);
        }, S.prototype.load = function() {
          if (!this._mediaElement)
            throw new d.a("HTMLMediaElement must be attached before load()!");
          this._mediaElement.src = this._mediaDataSource.url, this._mediaElement.readyState > 0 && (this._mediaElement.currentTime = 0), this._mediaElement.preload = "auto", this._mediaElement.load(), this._statisticsReporter = window.setInterval(this._reportStatisticsInfo.bind(this), this._config.statisticsInfoReportInterval);
        }, S.prototype.unload = function() {
          this._mediaElement && (this._mediaElement.src = "", this._mediaElement.removeAttribute("src")), this._statisticsReporter != null && (window.clearInterval(this._statisticsReporter), this._statisticsReporter = null);
        }, S.prototype.play = function() {
          return this._mediaElement.play();
        }, S.prototype.pause = function() {
          this._mediaElement.pause();
        }, Object.defineProperty(S.prototype, "type", { get: function() {
          return this._type;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(S.prototype, "buffered", { get: function() {
          return this._mediaElement.buffered;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(S.prototype, "duration", { get: function() {
          return this._mediaElement.duration;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(S.prototype, "volume", { get: function() {
          return this._mediaElement.volume;
        }, set: function(a) {
          this._mediaElement.volume = a;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(S.prototype, "muted", { get: function() {
          return this._mediaElement.muted;
        }, set: function(a) {
          this._mediaElement.muted = a;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(S.prototype, "currentTime", { get: function() {
          return this._mediaElement ? this._mediaElement.currentTime : 0;
        }, set: function(a) {
          this._mediaElement ? this._mediaElement.currentTime = a : this._pendingSeekTime = a;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(S.prototype, "mediaInfo", { get: function() {
          var a = { mimeType: (this._mediaElement instanceof HTMLAudioElement ? "audio/" : "video/") + this._mediaDataSource.type };
          return this._mediaElement && (a.duration = Math.floor(1e3 * this._mediaElement.duration), this._mediaElement instanceof HTMLVideoElement && (a.width = this._mediaElement.videoWidth, a.height = this._mediaElement.videoHeight)), a;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(S.prototype, "statisticsInfo", { get: function() {
          var a = { playerType: this._type, url: this._mediaDataSource.url };
          if (!(this._mediaElement instanceof HTMLVideoElement))
            return a;
          var l = !0, y = 0, z = 0;
          if (this._mediaElement.getVideoPlaybackQuality) {
            var te = this._mediaElement.getVideoPlaybackQuality();
            y = te.totalVideoFrames, z = te.droppedVideoFrames;
          } else
            this._mediaElement.webkitDecodedFrameCount != null ? (y = this._mediaElement.webkitDecodedFrameCount, z = this._mediaElement.webkitDroppedFrameCount) : l = !1;
          return l && (a.decodedFrames = y, a.droppedFrames = z), a;
        }, enumerable: !1, configurable: !0 }), S.prototype._onvLoadedMetadata = function(a) {
          this._pendingSeekTime != null && (this._mediaElement.currentTime = this._pendingSeekTime, this._pendingSeekTime = null), this._emitter.emit(V.MEDIA_INFO, this.mediaInfo);
        }, S.prototype._reportStatisticsInfo = function() {
          this._emitter.emit(V.STATISTICS_INFO, this.statisticsInfo);
        }, S;
      }();
      x.a.install();
      var de = { createPlayer: function(S, a) {
        var l = S;
        if (l == null || typeof l != "object")
          throw new d.b("MediaDataSource must be an javascript object!");
        if (!l.hasOwnProperty("type"))
          throw new d.b("MediaDataSource must has type field to indicate video file type!");
        switch (l.type) {
          case "mse":
          case "mpegts":
          case "m2ts":
          case "flv":
            return new $(l, a);
          default:
            return new ae(l, a);
        }
      }, isSupported: function() {
        return p.supportMSEH264Playback();
      }, getFeatureList: function() {
        return p.getFeatureList();
      } };
      de.BaseLoader = c.a, de.LoaderStatus = c.c, de.LoaderErrors = c.b, de.Events = V, de.ErrorTypes = P, de.ErrorDetails = W, de.MSEPlayer = $, de.NativePlayer = ae, de.LoggingControl = X.a, Object.defineProperty(de, "version", { enumerable: !0, get: function() {
        return "1.6.10";
      } }), q.default = de;
    }]);
  });
})(Ne);
const je = /* @__PURE__ */ Ve(Ne.exports), He = /* @__PURE__ */ Ge({
  __proto__: null,
  default: je
}, [Ne.exports]);
export {
  He as m
};
