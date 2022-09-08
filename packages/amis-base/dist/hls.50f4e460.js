import { g as Kt, c as wt } from "./index.7add3ddd.js";
function Wt(Lt, Ot) {
  for (var W = 0; W < Ot.length; W++) {
    const M = Ot[W];
    if (typeof M != "string" && !Array.isArray(M)) {
      for (const y in M)
        if (y !== "default" && !(y in Lt)) {
          const C = Object.getOwnPropertyDescriptor(M, y);
          C && Object.defineProperty(Lt, y, C.get ? C : {
            enumerable: !0,
            get: () => M[y]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(Lt, Symbol.toStringTag, { value: "Module" }));
}
var Pt = { exports: {} };
(function(Lt, Ot) {
  typeof window < "u" && function(M, y) {
    Lt.exports = y();
  }(wt, function() {
    return function(W) {
      var M = {};
      function y(C) {
        if (M[C])
          return M[C].exports;
        var D = M[C] = {
          i: C,
          l: !1,
          exports: {}
        };
        return W[C].call(D.exports, D, D.exports, y), D.l = !0, D.exports;
      }
      return y.m = W, y.c = M, y.d = function(C, D, A) {
        y.o(C, D) || Object.defineProperty(C, D, { enumerable: !0, get: A });
      }, y.r = function(C) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(C, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(C, "__esModule", { value: !0 });
      }, y.t = function(C, D) {
        if (D & 1 && (C = y(C)), D & 8 || D & 4 && typeof C == "object" && C && C.__esModule)
          return C;
        var A = /* @__PURE__ */ Object.create(null);
        if (y.r(A), Object.defineProperty(A, "default", { enumerable: !0, value: C }), D & 2 && typeof C != "string")
          for (var b in C)
            y.d(A, b, function(I) {
              return C[I];
            }.bind(null, b));
        return A;
      }, y.n = function(C) {
        var D = C && C.__esModule ? function() {
          return C.default;
        } : function() {
          return C;
        };
        return y.d(D, "a", D), D;
      }, y.o = function(C, D) {
        return Object.prototype.hasOwnProperty.call(C, D);
      }, y.p = "/dist/", y(y.s = "./src/hls.ts");
    }({
      "./node_modules/eventemitter3/index.js": function(W, M, y) {
        var C = Object.prototype.hasOwnProperty, D = "~";
        function A() {
        }
        Object.create && (A.prototype = /* @__PURE__ */ Object.create(null), new A().__proto__ || (D = !1));
        function b(m, S, p) {
          this.fn = m, this.context = S, this.once = p || !1;
        }
        function I(m, S, p, T, E) {
          if (typeof p != "function")
            throw new TypeError("The listener must be a function");
          var v = new b(p, T || m, E), n = D ? D + S : S;
          return m._events[n] ? m._events[n].fn ? m._events[n] = [m._events[n], v] : m._events[n].push(v) : (m._events[n] = v, m._eventsCount++), m;
        }
        function O(m, S) {
          --m._eventsCount === 0 ? m._events = new A() : delete m._events[S];
        }
        function L() {
          this._events = new A(), this._eventsCount = 0;
        }
        L.prototype.eventNames = function() {
          var S = [], p, T;
          if (this._eventsCount === 0)
            return S;
          for (T in p = this._events)
            C.call(p, T) && S.push(D ? T.slice(1) : T);
          return Object.getOwnPropertySymbols ? S.concat(Object.getOwnPropertySymbols(p)) : S;
        }, L.prototype.listeners = function(S) {
          var p = D ? D + S : S, T = this._events[p];
          if (!T)
            return [];
          if (T.fn)
            return [T.fn];
          for (var E = 0, v = T.length, n = new Array(v); E < v; E++)
            n[E] = T[E].fn;
          return n;
        }, L.prototype.listenerCount = function(S) {
          var p = D ? D + S : S, T = this._events[p];
          return T ? T.fn ? 1 : T.length : 0;
        }, L.prototype.emit = function(S, p, T, E, v, n) {
          var t = D ? D + S : S;
          if (!this._events[t])
            return !1;
          var r = this._events[t], e = arguments.length, f, s;
          if (r.fn) {
            switch (r.once && this.removeListener(S, r.fn, void 0, !0), e) {
              case 1:
                return r.fn.call(r.context), !0;
              case 2:
                return r.fn.call(r.context, p), !0;
              case 3:
                return r.fn.call(r.context, p, T), !0;
              case 4:
                return r.fn.call(r.context, p, T, E), !0;
              case 5:
                return r.fn.call(r.context, p, T, E, v), !0;
              case 6:
                return r.fn.call(r.context, p, T, E, v, n), !0;
            }
            for (s = 1, f = new Array(e - 1); s < e; s++)
              f[s - 1] = arguments[s];
            r.fn.apply(r.context, f);
          } else {
            var i = r.length, o;
            for (s = 0; s < i; s++)
              switch (r[s].once && this.removeListener(S, r[s].fn, void 0, !0), e) {
                case 1:
                  r[s].fn.call(r[s].context);
                  break;
                case 2:
                  r[s].fn.call(r[s].context, p);
                  break;
                case 3:
                  r[s].fn.call(r[s].context, p, T);
                  break;
                case 4:
                  r[s].fn.call(r[s].context, p, T, E);
                  break;
                default:
                  if (!f)
                    for (o = 1, f = new Array(e - 1); o < e; o++)
                      f[o - 1] = arguments[o];
                  r[s].fn.apply(r[s].context, f);
              }
          }
          return !0;
        }, L.prototype.on = function(S, p, T) {
          return I(this, S, p, T, !1);
        }, L.prototype.once = function(S, p, T) {
          return I(this, S, p, T, !0);
        }, L.prototype.removeListener = function(S, p, T, E) {
          var v = D ? D + S : S;
          if (!this._events[v])
            return this;
          if (!p)
            return O(this, v), this;
          var n = this._events[v];
          if (n.fn)
            n.fn === p && (!E || n.once) && (!T || n.context === T) && O(this, v);
          else {
            for (var t = 0, r = [], e = n.length; t < e; t++)
              (n[t].fn !== p || E && !n[t].once || T && n[t].context !== T) && r.push(n[t]);
            r.length ? this._events[v] = r.length === 1 ? r[0] : r : O(this, v);
          }
          return this;
        }, L.prototype.removeAllListeners = function(S) {
          var p;
          return S ? (p = D ? D + S : S, this._events[p] && O(this, p)) : (this._events = new A(), this._eventsCount = 0), this;
        }, L.prototype.off = L.prototype.removeListener, L.prototype.addListener = L.prototype.on, L.prefixed = D, L.EventEmitter = L, W.exports = L;
      },
      "./node_modules/url-toolkit/src/url-toolkit.js": function(W, M, y) {
        (function(C) {
          var D = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#[^]*)?$/, A = /^([^\/?#]*)([^]*)$/, b = /(?:\/|^)\.(?=\/)/g, I = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, O = {
            buildAbsoluteURL: function(L, m, S) {
              if (S = S || {}, L = L.trim(), m = m.trim(), !m) {
                if (!S.alwaysNormalize)
                  return L;
                var p = O.parseURL(L);
                if (!p)
                  throw new Error("Error trying to parse base URL.");
                return p.path = O.normalizePath(
                  p.path
                ), O.buildURLFromParts(p);
              }
              var T = O.parseURL(m);
              if (!T)
                throw new Error("Error trying to parse relative URL.");
              if (T.scheme)
                return S.alwaysNormalize ? (T.path = O.normalizePath(T.path), O.buildURLFromParts(T)) : m;
              var E = O.parseURL(L);
              if (!E)
                throw new Error("Error trying to parse base URL.");
              if (!E.netLoc && E.path && E.path[0] !== "/") {
                var v = A.exec(E.path);
                E.netLoc = v[1], E.path = v[2];
              }
              E.netLoc && !E.path && (E.path = "/");
              var n = {
                scheme: E.scheme,
                netLoc: T.netLoc,
                path: null,
                params: T.params,
                query: T.query,
                fragment: T.fragment
              };
              if (!T.netLoc && (n.netLoc = E.netLoc, T.path[0] !== "/"))
                if (!T.path)
                  n.path = E.path, T.params || (n.params = E.params, T.query || (n.query = E.query));
                else {
                  var t = E.path, r = t.substring(0, t.lastIndexOf("/") + 1) + T.path;
                  n.path = O.normalizePath(r);
                }
              return n.path === null && (n.path = S.alwaysNormalize ? O.normalizePath(T.path) : T.path), O.buildURLFromParts(n);
            },
            parseURL: function(L) {
              var m = D.exec(L);
              return m ? {
                scheme: m[1] || "",
                netLoc: m[2] || "",
                path: m[3] || "",
                params: m[4] || "",
                query: m[5] || "",
                fragment: m[6] || ""
              } : null;
            },
            normalizePath: function(L) {
              for (L = L.split("").reverse().join("").replace(b, ""); L.length !== (L = L.replace(I, "")).length; )
                ;
              return L.split("").reverse().join("");
            },
            buildURLFromParts: function(L) {
              return L.scheme + L.netLoc + L.path + L.params + L.query + L.fragment;
            }
          };
          W.exports = O;
        })();
      },
      "./node_modules/webworkify-webpack/index.js": function(W, M, y) {
        function C(S) {
          var p = {};
          function T(v) {
            if (p[v])
              return p[v].exports;
            var n = p[v] = {
              i: v,
              l: !1,
              exports: {}
            };
            return S[v].call(n.exports, n, n.exports, T), n.l = !0, n.exports;
          }
          T.m = S, T.c = p, T.i = function(v) {
            return v;
          }, T.d = function(v, n, t) {
            T.o(v, n) || Object.defineProperty(v, n, {
              configurable: !1,
              enumerable: !0,
              get: t
            });
          }, T.r = function(v) {
            Object.defineProperty(v, "__esModule", { value: !0 });
          }, T.n = function(v) {
            var n = v && v.__esModule ? function() {
              return v.default;
            } : function() {
              return v;
            };
            return T.d(n, "a", n), n;
          }, T.o = function(v, n) {
            return Object.prototype.hasOwnProperty.call(v, n);
          }, T.p = "/", T.oe = function(v) {
            throw console.error(v), v;
          };
          var E = T(T.s = ENTRY_MODULE);
          return E.default || E;
        }
        var D = "[\\.|\\-|\\+|\\w|/|@]+", A = "\\(\\s*(/\\*.*?\\*/)?\\s*.*?(" + D + ").*?\\)";
        function b(S) {
          return (S + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
        }
        function I(S) {
          return !isNaN(1 * S);
        }
        function O(S, p, T) {
          var E = {};
          E[T] = [];
          var v = p.toString(), n = v.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
          if (!n)
            return E;
          for (var t = n[1], r = new RegExp("(\\\\n|\\W)" + b(t) + A, "g"), e; e = r.exec(v); )
            e[3] !== "dll-reference" && E[T].push(e[3]);
          for (r = new RegExp("\\(" + b(t) + '\\("(dll-reference\\s(' + D + '))"\\)\\)' + A, "g"); e = r.exec(v); )
            S[e[2]] || (E[T].push(e[1]), S[e[2]] = y(e[1]).m), E[e[2]] = E[e[2]] || [], E[e[2]].push(e[4]);
          for (var f = Object.keys(E), s = 0; s < f.length; s++)
            for (var i = 0; i < E[f[s]].length; i++)
              I(E[f[s]][i]) && (E[f[s]][i] = 1 * E[f[s]][i]);
          return E;
        }
        function L(S) {
          var p = Object.keys(S);
          return p.reduce(function(T, E) {
            return T || S[E].length > 0;
          }, !1);
        }
        function m(S, p) {
          for (var T = {
            main: [p]
          }, E = {
            main: []
          }, v = {
            main: {}
          }; L(T); )
            for (var n = Object.keys(T), t = 0; t < n.length; t++) {
              var r = n[t], e = T[r], f = e.pop();
              if (v[r] = v[r] || {}, !(v[r][f] || !S[r][f])) {
                v[r][f] = !0, E[r] = E[r] || [], E[r].push(f);
                for (var s = O(S, S[r][f], r), i = Object.keys(s), o = 0; o < i.length; o++)
                  T[i[o]] = T[i[o]] || [], T[i[o]] = T[i[o]].concat(s[i[o]]);
              }
            }
          return E;
        }
        W.exports = function(S, p) {
          p = p || {};
          var T = {
            main: y.m
          }, E = p.all ? { main: Object.keys(T.main) } : m(T, S), v = "";
          Object.keys(E).filter(function(f) {
            return f !== "main";
          }).forEach(function(f) {
            for (var s = 0; E[f][s]; )
              s++;
            E[f].push(s), T[f][s] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })", v = v + "var " + f + " = (" + C.toString().replace("ENTRY_MODULE", JSON.stringify(s)) + ")({" + E[f].map(function(i) {
              return "" + JSON.stringify(i) + ": " + T[f][i].toString();
            }).join(",") + `});
`;
          }), v = v + "new ((" + C.toString().replace("ENTRY_MODULE", JSON.stringify(S)) + ")({" + E.main.map(function(f) {
            return "" + JSON.stringify(f) + ": " + T.main[f].toString();
          }).join(",") + "}))(self);";
          var n = new window.Blob([v], { type: "text/javascript" });
          if (p.bare)
            return n;
          var t = window.URL || window.webkitURL || window.mozURL || window.msURL, r = t.createObjectURL(n), e = new window.Worker(r);
          return e.objectURL = r, e;
        };
      },
      "./src/config.ts": function(W, M, y) {
        y.r(M), y.d(M, "hlsDefaultConfig", function() {
          return o;
        }), y.d(M, "mergeConfig", function() {
          return h;
        }), y.d(M, "enableStreamingMode", function() {
          return u;
        });
        var C = y("./src/controller/abr-controller.ts"), D = y("./src/controller/audio-stream-controller.ts"), A = y("./src/controller/audio-track-controller.ts"), b = y("./src/controller/subtitle-stream-controller.ts"), I = y("./src/controller/subtitle-track-controller.ts"), O = y("./src/controller/buffer-controller.ts"), L = y("./src/controller/timeline-controller.ts"), m = y("./src/controller/cap-level-controller.ts"), S = y("./src/controller/fps-controller.ts"), p = y("./src/controller/eme-controller.ts"), T = y("./src/controller/cmcd-controller.ts"), E = y("./src/utils/xhr-loader.ts"), v = y("./src/utils/fetch-loader.ts"), n = y("./src/utils/cues.ts"), t = y("./src/utils/mediakeys-helper.ts"), r = y("./src/utils/logger.ts");
        function e() {
          return e = Object.assign || function(a) {
            for (var l = 1; l < arguments.length; l++) {
              var d = arguments[l];
              for (var g in d)
                Object.prototype.hasOwnProperty.call(d, g) && (a[g] = d[g]);
            }
            return a;
          }, e.apply(this, arguments);
        }
        function f(a, l) {
          var d = Object.keys(a);
          if (Object.getOwnPropertySymbols) {
            var g = Object.getOwnPropertySymbols(a);
            l && (g = g.filter(function(x) {
              return Object.getOwnPropertyDescriptor(a, x).enumerable;
            })), d.push.apply(d, g);
          }
          return d;
        }
        function s(a) {
          for (var l = 1; l < arguments.length; l++) {
            var d = arguments[l] != null ? arguments[l] : {};
            l % 2 ? f(Object(d), !0).forEach(function(g) {
              i(a, g, d[g]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(d)) : f(Object(d)).forEach(function(g) {
              Object.defineProperty(a, g, Object.getOwnPropertyDescriptor(d, g));
            });
          }
          return a;
        }
        function i(a, l, d) {
          return l in a ? Object.defineProperty(a, l, { value: d, enumerable: !0, configurable: !0, writable: !0 }) : a[l] = d, a;
        }
        var o = s(s({
          autoStartLoad: !0,
          startPosition: -1,
          defaultAudioCodec: void 0,
          debug: !1,
          capLevelOnFPSDrop: !1,
          capLevelToPlayerSize: !1,
          initialLiveManifestSize: 1,
          maxBufferLength: 30,
          backBufferLength: 1 / 0,
          maxBufferSize: 60 * 1e3 * 1e3,
          maxBufferHole: 0.1,
          highBufferWatchdogPeriod: 2,
          nudgeOffset: 0.1,
          nudgeMaxRetry: 3,
          maxFragLookUpTolerance: 0.25,
          liveSyncDurationCount: 3,
          liveMaxLatencyDurationCount: 1 / 0,
          liveSyncDuration: void 0,
          liveMaxLatencyDuration: void 0,
          maxLiveSyncPlaybackRate: 1,
          liveDurationInfinity: !1,
          liveBackBufferLength: null,
          maxMaxBufferLength: 600,
          enableWorker: !0,
          enableSoftwareAES: !0,
          manifestLoadingTimeOut: 1e4,
          manifestLoadingMaxRetry: 1,
          manifestLoadingRetryDelay: 1e3,
          manifestLoadingMaxRetryTimeout: 64e3,
          startLevel: void 0,
          levelLoadingTimeOut: 1e4,
          levelLoadingMaxRetry: 4,
          levelLoadingRetryDelay: 1e3,
          levelLoadingMaxRetryTimeout: 64e3,
          fragLoadingTimeOut: 2e4,
          fragLoadingMaxRetry: 6,
          fragLoadingRetryDelay: 1e3,
          fragLoadingMaxRetryTimeout: 64e3,
          startFragPrefetch: !1,
          fpsDroppedMonitoringPeriod: 5e3,
          fpsDroppedMonitoringThreshold: 0.2,
          appendErrorMaxRetry: 3,
          loader: E.default,
          fLoader: void 0,
          pLoader: void 0,
          xhrSetup: void 0,
          licenseXhrSetup: void 0,
          licenseResponseCallback: void 0,
          abrController: C.default,
          bufferController: O.default,
          capLevelController: m.default,
          fpsController: S.default,
          stretchShortVideoTrack: !1,
          maxAudioFramesDrift: 1,
          forceKeyFrameOnDiscontinuity: !0,
          abrEwmaFastLive: 3,
          abrEwmaSlowLive: 9,
          abrEwmaFastVoD: 3,
          abrEwmaSlowVoD: 9,
          abrEwmaDefaultEstimate: 5e5,
          abrBandWidthFactor: 0.95,
          abrBandWidthUpFactor: 0.7,
          abrMaxWithRealBitrate: !1,
          maxStarvationDelay: 4,
          maxLoadingDelay: 4,
          minAutoBitrate: 0,
          emeEnabled: !1,
          widevineLicenseUrl: void 0,
          drmSystemOptions: {},
          requestMediaKeySystemAccessFunc: t.requestMediaKeySystemAccess,
          testBandwidth: !0,
          progressive: !1,
          lowLatencyMode: !0,
          cmcd: void 0
        }, c()), {}, {
          subtitleStreamController: b.SubtitleStreamController,
          subtitleTrackController: I.default,
          timelineController: L.TimelineController,
          audioStreamController: D.default,
          audioTrackController: A.default,
          emeController: p.default,
          cmcdController: T.default
        });
        function c() {
          return {
            cueHandler: n.default,
            enableCEA708Captions: !0,
            enableWebVTT: !0,
            enableIMSC1: !0,
            captionsTextTrack1Label: "English",
            captionsTextTrack1LanguageCode: "en",
            captionsTextTrack2Label: "Spanish",
            captionsTextTrack2LanguageCode: "es",
            captionsTextTrack3Label: "Unknown CC",
            captionsTextTrack3LanguageCode: "",
            captionsTextTrack4Label: "Unknown CC",
            captionsTextTrack4LanguageCode: "",
            renderTextTracksNatively: !0
          };
        }
        function h(a, l) {
          if ((l.liveSyncDurationCount || l.liveMaxLatencyDurationCount) && (l.liveSyncDuration || l.liveMaxLatencyDuration))
            throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
          if (l.liveMaxLatencyDurationCount !== void 0 && (l.liveSyncDurationCount === void 0 || l.liveMaxLatencyDurationCount <= l.liveSyncDurationCount))
            throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
          if (l.liveMaxLatencyDuration !== void 0 && (l.liveSyncDuration === void 0 || l.liveMaxLatencyDuration <= l.liveSyncDuration))
            throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
          return e({}, a, l);
        }
        function u(a) {
          var l = a.loader;
          if (l !== v.default && l !== E.default)
            r.logger.log("[config]: Custom loader detected, cannot enable progressive streaming"), a.progressive = !1;
          else {
            var d = Object(v.fetchSupported)();
            d && (a.loader = v.default, a.progressive = !0, a.enableSoftwareAES = !0, r.logger.log("[config]: Progressive streaming enabled, using FetchLoader"));
          }
        }
      },
      "./src/controller/abr-controller.ts": function(W, M, y) {
        y.r(M);
        var C = y("./src/polyfills/number.ts"), D = y("./src/utils/ewma-bandwidth-estimator.ts"), A = y("./src/events.ts"), b = y("./src/utils/buffer-helper.ts"), I = y("./src/errors.ts"), O = y("./src/types/loader.ts"), L = y("./src/utils/logger.ts");
        function m(T, E) {
          for (var v = 0; v < E.length; v++) {
            var n = E[v];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(T, n.key, n);
          }
        }
        function S(T, E, v) {
          return E && m(T.prototype, E), v && m(T, v), T;
        }
        var p = /* @__PURE__ */ function() {
          function T(v) {
            this.hls = void 0, this.lastLoadedFragLevel = 0, this._nextAutoLevel = -1, this.timer = void 0, this.onCheck = this._abandonRulesCheck.bind(this), this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, this.bwEstimator = void 0, this.hls = v;
            var n = v.config;
            this.bwEstimator = new D.default(n.abrEwmaSlowVoD, n.abrEwmaFastVoD, n.abrEwmaDefaultEstimate), this.registerListeners();
          }
          var E = T.prototype;
          return E.registerListeners = function() {
            var n = this.hls;
            n.on(A.Events.FRAG_LOADING, this.onFragLoading, this), n.on(A.Events.FRAG_LOADED, this.onFragLoaded, this), n.on(A.Events.FRAG_BUFFERED, this.onFragBuffered, this), n.on(A.Events.LEVEL_LOADED, this.onLevelLoaded, this), n.on(A.Events.ERROR, this.onError, this);
          }, E.unregisterListeners = function() {
            var n = this.hls;
            n.off(A.Events.FRAG_LOADING, this.onFragLoading, this), n.off(A.Events.FRAG_LOADED, this.onFragLoaded, this), n.off(A.Events.FRAG_BUFFERED, this.onFragBuffered, this), n.off(A.Events.LEVEL_LOADED, this.onLevelLoaded, this), n.off(A.Events.ERROR, this.onError, this);
          }, E.destroy = function() {
            this.unregisterListeners(), this.clearTimer(), this.hls = this.onCheck = null, this.fragCurrent = this.partCurrent = null;
          }, E.onFragLoading = function(n, t) {
            var r = t.frag;
            if (r.type === O.PlaylistLevelType.MAIN && !this.timer) {
              var e;
              this.fragCurrent = r, this.partCurrent = (e = t.part) != null ? e : null, this.timer = self.setInterval(this.onCheck, 100);
            }
          }, E.onLevelLoaded = function(n, t) {
            var r = this.hls.config;
            t.details.live ? this.bwEstimator.update(r.abrEwmaSlowLive, r.abrEwmaFastLive) : this.bwEstimator.update(r.abrEwmaSlowVoD, r.abrEwmaFastVoD);
          }, E._abandonRulesCheck = function() {
            var n = this.fragCurrent, t = this.partCurrent, r = this.hls, e = r.autoLevelEnabled, f = r.config, s = r.media;
            if (!(!n || !s)) {
              var i = t ? t.stats : n.stats, o = t ? t.duration : n.duration;
              if (i.aborted) {
                L.logger.warn("frag loader destroy or aborted, disarm abandonRules"), this.clearTimer(), this._nextAutoLevel = -1;
                return;
              }
              if (!(!e || s.paused || !s.playbackRate || !s.readyState)) {
                var c = performance.now() - i.loading.start, h = Math.abs(s.playbackRate);
                if (!(c <= 500 * o / h)) {
                  var u = r.levels, a = r.minAutoLevel, l = u[n.level], d = i.total || Math.max(i.loaded, Math.round(o * l.maxBitrate / 8)), g = Math.max(1, i.bwEstimate ? i.bwEstimate / 8 : i.loaded * 1e3 / c), x = (d - i.loaded) / g, R = s.currentTime, P = (b.BufferHelper.bufferInfo(s, R, f.maxBufferHole).end - R) / h;
                  if (!(P >= 2 * o / h || x <= P)) {
                    var _ = Number.POSITIVE_INFINITY, F;
                    for (F = n.level - 1; F > a; F--) {
                      var B = u[F].maxBitrate;
                      if (_ = o * B / (8 * 0.8 * g), _ < P)
                        break;
                    }
                    if (!(_ >= x)) {
                      var U = this.bwEstimator.getEstimate();
                      L.logger.warn("Fragment " + n.sn + (t ? " part " + t.index : "") + " of level " + n.level + " is loading too slowly and will cause an underbuffer; aborting and switching to level " + F + `
      Current BW estimate: ` + (Object(C.isFiniteNumber)(U) ? (U / 1024).toFixed(3) : "Unknown") + ` Kb/s
      Estimated load time for current fragment: ` + x.toFixed(3) + ` s
      Estimated load time for the next fragment: ` + _.toFixed(3) + ` s
      Time to underbuffer: ` + P.toFixed(3) + " s"), r.nextLoadLevel = F, this.bwEstimator.sample(c, i.loaded), this.clearTimer(), n.loader && (this.fragCurrent = this.partCurrent = null, n.loader.abort()), r.trigger(A.Events.FRAG_LOAD_EMERGENCY_ABORTED, {
                        frag: n,
                        part: t,
                        stats: i
                      });
                    }
                  }
                }
              }
            }
          }, E.onFragLoaded = function(n, t) {
            var r = t.frag, e = t.part;
            if (r.type === O.PlaylistLevelType.MAIN && Object(C.isFiniteNumber)(r.sn)) {
              var f = e ? e.stats : r.stats, s = e ? e.duration : r.duration;
              if (this.clearTimer(), this.lastLoadedFragLevel = r.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
                var i = this.hls.levels[r.level], o = (i.loaded ? i.loaded.bytes : 0) + f.loaded, c = (i.loaded ? i.loaded.duration : 0) + s;
                i.loaded = {
                  bytes: o,
                  duration: c
                }, i.realBitrate = Math.round(8 * o / c);
              }
              if (r.bitrateTest) {
                var h = {
                  stats: f,
                  frag: r,
                  part: e,
                  id: r.type
                };
                this.onFragBuffered(A.Events.FRAG_BUFFERED, h), r.bitrateTest = !1;
              }
            }
          }, E.onFragBuffered = function(n, t) {
            var r = t.frag, e = t.part, f = e ? e.stats : r.stats;
            if (!f.aborted && !(r.type !== O.PlaylistLevelType.MAIN || r.sn === "initSegment")) {
              var s = f.parsing.end - f.loading.start;
              this.bwEstimator.sample(s, f.loaded), f.bwEstimate = this.bwEstimator.getEstimate(), r.bitrateTest ? this.bitrateTestDelay = s / 1e3 : this.bitrateTestDelay = 0;
            }
          }, E.onError = function(n, t) {
            switch (t.details) {
              case I.ErrorDetails.FRAG_LOAD_ERROR:
              case I.ErrorDetails.FRAG_LOAD_TIMEOUT:
                this.clearTimer();
                break;
            }
          }, E.clearTimer = function() {
            self.clearInterval(this.timer), this.timer = void 0;
          }, E.getNextABRAutoLevel = function() {
            var n = this.fragCurrent, t = this.partCurrent, r = this.hls, e = r.maxAutoLevel, f = r.config, s = r.minAutoLevel, i = r.media, o = t ? t.duration : n ? n.duration : 0, c = i ? i.currentTime : 0, h = i && i.playbackRate !== 0 ? Math.abs(i.playbackRate) : 1, u = this.bwEstimator ? this.bwEstimator.getEstimate() : f.abrEwmaDefaultEstimate, a = (b.BufferHelper.bufferInfo(i, c, f.maxBufferHole).end - c) / h, l = this.findBestLevel(u, s, e, a, f.abrBandWidthFactor, f.abrBandWidthUpFactor);
            if (l >= 0)
              return l;
            L.logger.trace((a ? "rebuffering expected" : "buffer is empty") + ", finding optimal quality level");
            var d = o ? Math.min(o, f.maxStarvationDelay) : f.maxStarvationDelay, g = f.abrBandWidthFactor, x = f.abrBandWidthUpFactor;
            if (!a) {
              var R = this.bitrateTestDelay;
              if (R) {
                var P = o ? Math.min(o, f.maxLoadingDelay) : f.maxLoadingDelay;
                d = P - R, L.logger.trace("bitrate test took " + Math.round(1e3 * R) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * d) + " ms"), g = x = 1;
              }
            }
            return l = this.findBestLevel(u, s, e, a + d, g, x), Math.max(l, 0);
          }, E.findBestLevel = function(n, t, r, e, f, s) {
            for (var i, o = this.fragCurrent, c = this.partCurrent, h = this.lastLoadedFragLevel, u = this.hls.levels, a = u[h], l = !!(a != null && (i = a.details) !== null && i !== void 0 && i.live), d = a == null ? void 0 : a.codecSet, g = c ? c.duration : o ? o.duration : 0, x = r; x >= t; x--) {
              var R = u[x];
              if (!(!R || d && R.codecSet !== d)) {
                var P = R.details, _ = (c ? P == null ? void 0 : P.partTarget : P == null ? void 0 : P.averagetargetduration) || g, F = void 0;
                x <= h ? F = f * n : F = s * n;
                var B = u[x].maxBitrate, U = B * _ / F;
                if (L.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + x + "/" + Math.round(F) + "/" + B + "/" + _ + "/" + e + "/" + U), F > B && (!U || l && !this.bitrateTestDelay || U < e))
                  return x;
              }
            }
            return -1;
          }, S(T, [{
            key: "nextAutoLevel",
            get: function() {
              var n = this._nextAutoLevel, t = this.bwEstimator;
              if (n !== -1 && (!t || !t.canEstimate()))
                return n;
              var r = this.getNextABRAutoLevel();
              return n !== -1 && (r = Math.min(n, r)), r;
            },
            set: function(n) {
              this._nextAutoLevel = n;
            }
          }]), T;
        }();
        M.default = p;
      },
      "./src/controller/audio-stream-controller.ts": function(W, M, y) {
        y.r(M);
        var C = y("./src/polyfills/number.ts"), D = y("./src/controller/base-stream-controller.ts"), A = y("./src/events.ts"), b = y("./src/utils/buffer-helper.ts"), I = y("./src/controller/fragment-tracker.ts"), O = y("./src/types/level.ts"), L = y("./src/types/loader.ts"), m = y("./src/loader/fragment.ts"), S = y("./src/demux/chunk-cache.ts"), p = y("./src/demux/transmuxer-interface.ts"), T = y("./src/types/transmuxer.ts"), E = y("./src/controller/fragment-finders.ts"), v = y("./src/utils/discontinuities.ts"), n = y("./src/errors.ts"), t = y("./src/utils/logger.ts");
        function r() {
          return r = Object.assign || function(o) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c];
              for (var u in h)
                Object.prototype.hasOwnProperty.call(h, u) && (o[u] = h[u]);
            }
            return o;
          }, r.apply(this, arguments);
        }
        function e(o, c) {
          o.prototype = Object.create(c.prototype), o.prototype.constructor = o, f(o, c);
        }
        function f(o, c) {
          return f = Object.setPrototypeOf || function(u, a) {
            return u.__proto__ = a, u;
          }, f(o, c);
        }
        var s = 100, i = /* @__PURE__ */ function(o) {
          e(c, o);
          function c(u, a) {
            var l;
            return l = o.call(this, u, a, "[audio-stream-controller]") || this, l.videoBuffer = null, l.videoTrackCC = -1, l.waitingVideoCC = -1, l.audioSwitch = !1, l.trackId = -1, l.waitingData = null, l.mainDetails = null, l.bufferFlushed = !1, l._registerListeners(), l;
          }
          var h = c.prototype;
          return h.onHandlerDestroying = function() {
            this._unregisterListeners(), this.mainDetails = null;
          }, h._registerListeners = function() {
            var a = this.hls;
            a.on(A.Events.MEDIA_ATTACHED, this.onMediaAttached, this), a.on(A.Events.MEDIA_DETACHING, this.onMediaDetaching, this), a.on(A.Events.MANIFEST_LOADING, this.onManifestLoading, this), a.on(A.Events.LEVEL_LOADED, this.onLevelLoaded, this), a.on(A.Events.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), a.on(A.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), a.on(A.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), a.on(A.Events.ERROR, this.onError, this), a.on(A.Events.BUFFER_RESET, this.onBufferReset, this), a.on(A.Events.BUFFER_CREATED, this.onBufferCreated, this), a.on(A.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), a.on(A.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), a.on(A.Events.FRAG_BUFFERED, this.onFragBuffered, this);
          }, h._unregisterListeners = function() {
            var a = this.hls;
            a.off(A.Events.MEDIA_ATTACHED, this.onMediaAttached, this), a.off(A.Events.MEDIA_DETACHING, this.onMediaDetaching, this), a.off(A.Events.MANIFEST_LOADING, this.onManifestLoading, this), a.off(A.Events.LEVEL_LOADED, this.onLevelLoaded, this), a.off(A.Events.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), a.off(A.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), a.off(A.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), a.off(A.Events.ERROR, this.onError, this), a.off(A.Events.BUFFER_RESET, this.onBufferReset, this), a.off(A.Events.BUFFER_CREATED, this.onBufferCreated, this), a.off(A.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), a.off(A.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), a.off(A.Events.FRAG_BUFFERED, this.onFragBuffered, this);
          }, h.onInitPtsFound = function(a, l) {
            var d = l.frag, g = l.id, x = l.initPTS;
            if (g === "main") {
              var R = d.cc;
              this.initPTS[d.cc] = x, this.log("InitPTS for cc: " + R + " found from main: " + x), this.videoTrackCC = R, this.state === D.State.WAITING_INIT_PTS && this.tick();
            }
          }, h.startLoad = function(a) {
            if (!this.levels) {
              this.startPosition = a, this.state = D.State.STOPPED;
              return;
            }
            var l = this.lastCurrentTime;
            this.stopLoad(), this.setInterval(s), this.fragLoadError = 0, l > 0 && a === -1 ? (this.log("Override startPosition with lastCurrentTime @" + l.toFixed(3)), this.state = D.State.IDLE) : (this.loadedmetadata = !1, this.state = D.State.WAITING_TRACK), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = a, this.tick();
          }, h.doTick = function() {
            switch (this.state) {
              case D.State.IDLE:
                this.doTickIdle();
                break;
              case D.State.WAITING_TRACK: {
                var a, l = this.levels, d = this.trackId, g = l == null || (a = l[d]) === null || a === void 0 ? void 0 : a.details;
                if (g) {
                  if (this.waitForCdnTuneIn(g))
                    break;
                  this.state = D.State.WAITING_INIT_PTS;
                }
                break;
              }
              case D.State.FRAG_LOADING_WAITING_RETRY: {
                var x, R = performance.now(), P = this.retryDate;
                (!P || R >= P || (x = this.media) !== null && x !== void 0 && x.seeking) && (this.log("RetryDate reached, switch back to IDLE state"), this.state = D.State.IDLE);
                break;
              }
              case D.State.WAITING_INIT_PTS: {
                var _ = this.waitingData;
                if (_) {
                  var F = _.frag, B = _.part, U = _.cache, N = _.complete;
                  if (this.initPTS[F.cc] !== void 0) {
                    this.waitingData = null, this.waitingVideoCC = -1, this.state = D.State.FRAG_LOADING;
                    var k = U.flush(), w = {
                      frag: F,
                      part: B,
                      payload: k,
                      networkDetails: null
                    };
                    this._handleFragmentLoadProgress(w), N && o.prototype._handleFragmentLoadComplete.call(this, w);
                  } else if (this.videoTrackCC !== this.waitingVideoCC)
                    t.logger.log("Waiting fragment cc (" + F.cc + ") cancelled because video is at cc " + this.videoTrackCC), this.clearWaitingFragment();
                  else {
                    var K = this.getLoadPosition(), j = b.BufferHelper.bufferInfo(this.mediaBuffer, K, this.config.maxBufferHole), H = Object(E.fragmentWithinToleranceTest)(j.end, this.config.maxFragLookUpTolerance, F);
                    H < 0 && (t.logger.log("Waiting fragment cc (" + F.cc + ") @ " + F.start + " cancelled because another fragment at " + j.end + " is needed"), this.clearWaitingFragment());
                  }
                } else
                  this.state = D.State.IDLE;
              }
            }
            this.onTickEnd();
          }, h.clearWaitingFragment = function() {
            var a = this.waitingData;
            a && (this.fragmentTracker.removeFragment(a.frag), this.waitingData = null, this.waitingVideoCC = -1, this.state = D.State.IDLE);
          }, h.onTickEnd = function() {
            var a = this.media;
            if (!(!a || !a.readyState)) {
              var l = this.mediaBuffer ? this.mediaBuffer : a, d = l.buffered;
              !this.loadedmetadata && d.length && (this.loadedmetadata = !0), this.lastCurrentTime = a.currentTime;
            }
          }, h.doTickIdle = function() {
            var a, l, d = this.hls, g = this.levels, x = this.media, R = this.trackId, P = d.config;
            if (!(!g || !g[R]) && !(!x && (this.startFragRequested || !P.startFragPrefetch))) {
              var _ = g[R], F = _.details;
              if (!F || F.live && this.levelLastLoaded !== R || this.waitForCdnTuneIn(F)) {
                this.state = D.State.WAITING_TRACK;
                return;
              }
              this.bufferFlushed && (this.bufferFlushed = !1, this.afterBufferFlushed(this.mediaBuffer ? this.mediaBuffer : this.media, m.ElementaryStreamTypes.AUDIO, L.PlaylistLevelType.AUDIO));
              var B = this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : this.media, L.PlaylistLevelType.AUDIO);
              if (B !== null) {
                var U = B.len, N = this.getMaxBufferLength(), k = this.audioSwitch;
                if (!(U >= N && !k)) {
                  if (!k && this._streamEnded(B, F)) {
                    d.trigger(A.Events.BUFFER_EOS, {
                      type: "audio"
                    }), this.state = D.State.ENDED;
                    return;
                  }
                  var w = F.fragments, K = w[0].start, j = B.end;
                  if (k) {
                    var H = this.getLoadPosition();
                    j = H, F.PTSKnown && H < K && (B.end > K || B.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"), x.currentTime = K + 0.05);
                  }
                  var G = this.getNextFragment(j, F);
                  if (!G) {
                    this.bufferFlushed = !0;
                    return;
                  }
                  ((a = G.decryptdata) === null || a === void 0 ? void 0 : a.keyFormat) === "identity" && !((l = G.decryptdata) !== null && l !== void 0 && l.key) ? this.loadKey(G, F) : this.loadFragment(G, F, j);
                }
              }
            }
          }, h.getMaxBufferLength = function() {
            var a = o.prototype.getMaxBufferLength.call(this), l = this.getFwdBufferInfo(this.videoBuffer ? this.videoBuffer : this.media, L.PlaylistLevelType.MAIN);
            return l === null ? a : Math.max(a, l.len);
          }, h.onMediaDetaching = function() {
            this.videoBuffer = null, o.prototype.onMediaDetaching.call(this);
          }, h.onAudioTracksUpdated = function(a, l) {
            var d = l.audioTracks;
            this.resetTransmuxer(), this.levels = d.map(function(g) {
              return new O.Level(g);
            });
          }, h.onAudioTrackSwitching = function(a, l) {
            var d = !!l.url;
            this.trackId = l.id;
            var g = this.fragCurrent;
            g != null && g.loader && g.loader.abort(), this.fragCurrent = null, this.clearWaitingFragment(), d ? this.setInterval(s) : this.resetTransmuxer(), d ? (this.audioSwitch = !0, this.state = D.State.IDLE) : this.state = D.State.STOPPED, this.tick();
          }, h.onManifestLoading = function() {
            this.mainDetails = null, this.fragmentTracker.removeAllFragments(), this.startPosition = this.lastCurrentTime = 0, this.bufferFlushed = !1;
          }, h.onLevelLoaded = function(a, l) {
            this.mainDetails = l.details;
          }, h.onAudioTrackLoaded = function(a, l) {
            var d, g = this.levels, x = l.details, R = l.id;
            if (!g) {
              this.warn("Audio tracks were reset while loading level " + R);
              return;
            }
            this.log("Track " + R + " loaded [" + x.startSN + "," + x.endSN + "],duration:" + x.totalduration);
            var P = g[R], _ = 0;
            if (x.live || (d = P.details) !== null && d !== void 0 && d.live) {
              var F = this.mainDetails;
              if (x.fragments[0] || (x.deltaUpdateFailed = !0), x.deltaUpdateFailed || !F)
                return;
              !P.details && x.hasProgramDateTime && F.hasProgramDateTime ? (Object(v.alignMediaPlaylistByPDT)(x, F), _ = x.fragments[0].start) : _ = this.alignPlaylists(x, P.details);
            }
            P.details = x, this.levelLastLoaded = R, !this.startFragRequested && (this.mainDetails || !x.live) && this.setStartPosition(P.details, _), this.state === D.State.WAITING_TRACK && !this.waitForCdnTuneIn(x) && (this.state = D.State.IDLE), this.tick();
          }, h._handleFragmentLoadProgress = function(a) {
            var l, d = a.frag, g = a.part, x = a.payload, R = this.config, P = this.trackId, _ = this.levels;
            if (!_) {
              this.warn("Audio tracks were reset while fragment load was in progress. Fragment " + d.sn + " of level " + d.level + " will not be buffered");
              return;
            }
            var F = _[P];
            console.assert(F, "Audio track is defined on fragment load progress");
            var B = F.details;
            console.assert(B, "Audio track details are defined on fragment load progress");
            var U = R.defaultAudioCodec || F.audioCodec || "mp4a.40.2", N = this.transmuxer;
            N || (N = this.transmuxer = new p.default(this.hls, L.PlaylistLevelType.AUDIO, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
            var k = this.initPTS[d.cc], w = (l = d.initSegment) === null || l === void 0 ? void 0 : l.data;
            if (k !== void 0) {
              var K = !1, j = g ? g.index : -1, H = j !== -1, G = new T.ChunkMetadata(d.level, d.sn, d.stats.chunkCount, x.byteLength, j, H);
              N.push(x, w, U, "", d, g, B.totalduration, K, G, k);
            } else {
              t.logger.log("Unknown video PTS for cc " + d.cc + ", waiting for video PTS before demuxing audio frag " + d.sn + " of [" + B.startSN + " ," + B.endSN + "],track " + P);
              var X = this.waitingData = this.waitingData || {
                frag: d,
                part: g,
                cache: new S.default(),
                complete: !1
              }, V = X.cache;
              V.push(new Uint8Array(x)), this.waitingVideoCC = this.videoTrackCC, this.state = D.State.WAITING_INIT_PTS;
            }
          }, h._handleFragmentLoadComplete = function(a) {
            if (this.waitingData) {
              this.waitingData.complete = !0;
              return;
            }
            o.prototype._handleFragmentLoadComplete.call(this, a);
          }, h.onBufferReset = function() {
            this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1;
          }, h.onBufferCreated = function(a, l) {
            var d = l.tracks.audio;
            d && (this.mediaBuffer = d.buffer), l.tracks.video && (this.videoBuffer = l.tracks.video.buffer);
          }, h.onFragBuffered = function(a, l) {
            var d = l.frag, g = l.part;
            if (d.type === L.PlaylistLevelType.AUDIO) {
              if (this.fragContextChanged(d)) {
                this.warn("Fragment " + d.sn + (g ? " p: " + g.index : "") + " of level " + d.level + " finished buffering, but was aborted. state: " + this.state + ", audioSwitch: " + this.audioSwitch);
                return;
              }
              d.sn !== "initSegment" && (this.fragPrevious = d, this.audioSwitch && (this.audioSwitch = !1, this.hls.trigger(A.Events.AUDIO_TRACK_SWITCHED, {
                id: this.trackId
              }))), this.fragBufferedComplete(d, g);
            }
          }, h.onError = function(a, l) {
            switch (l.details) {
              case n.ErrorDetails.FRAG_LOAD_ERROR:
              case n.ErrorDetails.FRAG_LOAD_TIMEOUT:
              case n.ErrorDetails.KEY_LOAD_ERROR:
              case n.ErrorDetails.KEY_LOAD_TIMEOUT:
                this.onFragmentOrKeyLoadError(L.PlaylistLevelType.AUDIO, l);
                break;
              case n.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:
              case n.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:
                this.state !== D.State.ERROR && this.state !== D.State.STOPPED && (this.state = l.fatal ? D.State.ERROR : D.State.IDLE, this.warn(l.details + " while loading frag, switching to " + this.state + " state"));
                break;
              case n.ErrorDetails.BUFFER_FULL_ERROR:
                if (l.parent === "audio" && (this.state === D.State.PARSING || this.state === D.State.PARSED)) {
                  var d = !0, g = this.getFwdBufferInfo(this.mediaBuffer, L.PlaylistLevelType.AUDIO);
                  g && g.len > 0.5 && (d = !this.reduceMaxBufferLength(g.len)), d && (this.warn("Buffer full error also media.currentTime is not buffered, flush audio buffer"), this.fragCurrent = null, o.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio")), this.resetLoadingState();
                }
                break;
            }
          }, h.onBufferFlushed = function(a, l) {
            var d = l.type;
            d === m.ElementaryStreamTypes.AUDIO && (this.bufferFlushed = !0);
          }, h._handleTransmuxComplete = function(a) {
            var l, d = "audio", g = this.hls, x = a.remuxResult, R = a.chunkMeta, P = this.getCurrentContext(R);
            if (!P) {
              this.warn("The loading context changed while buffering fragment " + R.sn + " of level " + R.level + ". This chunk will not be buffered."), this.resetLiveStartWhenNotLoaded(R.level);
              return;
            }
            var _ = P.frag, F = P.part, B = x.audio, U = x.text, N = x.id3, k = x.initSegment;
            if (!this.fragContextChanged(_)) {
              if (this.state = D.State.PARSING, this.audioSwitch && B && this.completeAudioSwitch(), k != null && k.tracks && (this._bufferInitSegment(k.tracks, _, R), g.trigger(A.Events.FRAG_PARSING_INIT_SEGMENT, {
                frag: _,
                id: d,
                tracks: k.tracks
              })), B) {
                var w = B.startPTS, K = B.endPTS, j = B.startDTS, H = B.endDTS;
                F && (F.elementaryStreams[m.ElementaryStreamTypes.AUDIO] = {
                  startPTS: w,
                  endPTS: K,
                  startDTS: j,
                  endDTS: H
                }), _.setElementaryStreamInfo(m.ElementaryStreamTypes.AUDIO, w, K, j, H), this.bufferFragmentData(B, _, F, R);
              }
              if (N != null && (l = N.samples) !== null && l !== void 0 && l.length) {
                var G = r({
                  frag: _,
                  id: d
                }, N);
                g.trigger(A.Events.FRAG_PARSING_METADATA, G);
              }
              if (U) {
                var X = r({
                  frag: _,
                  id: d
                }, U);
                g.trigger(A.Events.FRAG_PARSING_USERDATA, X);
              }
            }
          }, h._bufferInitSegment = function(a, l, d) {
            if (this.state === D.State.PARSING) {
              a.video && delete a.video;
              var g = a.audio;
              if (!!g) {
                g.levelCodec = g.codec, g.id = "audio", this.log("Init audio buffer, container:" + g.container + ", codecs[parsed]=[" + g.codec + "]"), this.hls.trigger(A.Events.BUFFER_CODECS, a);
                var x = g.initSegment;
                if (x != null && x.byteLength) {
                  var R = {
                    type: "audio",
                    frag: l,
                    part: null,
                    chunkMeta: d,
                    parent: l.type,
                    data: x
                  };
                  this.hls.trigger(A.Events.BUFFER_APPENDING, R);
                }
                this.tick();
              }
            }
          }, h.loadFragment = function(a, l, d) {
            var g = this.fragmentTracker.getState(a);
            this.fragCurrent = a, (this.audioSwitch || g === I.FragmentState.NOT_LOADED || g === I.FragmentState.PARTIAL) && (a.sn === "initSegment" ? this._loadInitSegment(a) : l.live && !Object(C.isFiniteNumber)(this.initPTS[a.cc]) ? (this.log("Waiting for video PTS in continuity counter " + a.cc + " of live stream before loading audio fragment " + a.sn + " of level " + this.trackId), this.state = D.State.WAITING_INIT_PTS) : (this.startFragRequested = !0, o.prototype.loadFragment.call(this, a, l, d)));
          }, h.completeAudioSwitch = function() {
            var a = this.hls, l = this.media, d = this.trackId;
            l && (this.log("Switching audio track : flushing all audio"), o.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio")), this.audioSwitch = !1, a.trigger(A.Events.AUDIO_TRACK_SWITCHED, {
              id: d
            });
          }, c;
        }(D.default);
        M.default = i;
      },
      "./src/controller/audio-track-controller.ts": function(W, M, y) {
        y.r(M);
        var C = y("./src/events.ts"), D = y("./src/errors.ts"), A = y("./src/controller/base-playlist-controller.ts"), b = y("./src/types/loader.ts");
        function I(p, T) {
          for (var E = 0; E < T.length; E++) {
            var v = T[E];
            v.enumerable = v.enumerable || !1, v.configurable = !0, "value" in v && (v.writable = !0), Object.defineProperty(p, v.key, v);
          }
        }
        function O(p, T, E) {
          return T && I(p.prototype, T), E && I(p, E), p;
        }
        function L(p, T) {
          p.prototype = Object.create(T.prototype), p.prototype.constructor = p, m(p, T);
        }
        function m(p, T) {
          return m = Object.setPrototypeOf || function(v, n) {
            return v.__proto__ = n, v;
          }, m(p, T);
        }
        var S = /* @__PURE__ */ function(p) {
          L(T, p);
          function T(v) {
            var n;
            return n = p.call(this, v, "[audio-track-controller]") || this, n.tracks = [], n.groupId = null, n.tracksInGroup = [], n.trackId = -1, n.trackName = "", n.selectDefaultTrack = !0, n.registerListeners(), n;
          }
          var E = T.prototype;
          return E.registerListeners = function() {
            var n = this.hls;
            n.on(C.Events.MANIFEST_LOADING, this.onManifestLoading, this), n.on(C.Events.MANIFEST_PARSED, this.onManifestParsed, this), n.on(C.Events.LEVEL_LOADING, this.onLevelLoading, this), n.on(C.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), n.on(C.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), n.on(C.Events.ERROR, this.onError, this);
          }, E.unregisterListeners = function() {
            var n = this.hls;
            n.off(C.Events.MANIFEST_LOADING, this.onManifestLoading, this), n.off(C.Events.MANIFEST_PARSED, this.onManifestParsed, this), n.off(C.Events.LEVEL_LOADING, this.onLevelLoading, this), n.off(C.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), n.off(C.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), n.off(C.Events.ERROR, this.onError, this);
          }, E.destroy = function() {
            this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, p.prototype.destroy.call(this);
          }, E.onManifestLoading = function() {
            this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.trackName = "", this.selectDefaultTrack = !0;
          }, E.onManifestParsed = function(n, t) {
            this.tracks = t.audioTracks || [];
          }, E.onAudioTrackLoaded = function(n, t) {
            var r = t.id, e = t.details, f = this.tracksInGroup[r];
            if (!f) {
              this.warn("Invalid audio track id " + r);
              return;
            }
            var s = f.details;
            f.details = t.details, this.log("audioTrack " + r + " loaded [" + e.startSN + "-" + e.endSN + "]"), r === this.trackId && (this.retryCount = 0, this.playlistLoaded(r, t, s));
          }, E.onLevelLoading = function(n, t) {
            this.switchLevel(t.level);
          }, E.onLevelSwitching = function(n, t) {
            this.switchLevel(t.level);
          }, E.switchLevel = function(n) {
            var t = this.hls.levels[n];
            if (!!(t != null && t.audioGroupIds)) {
              var r = t.audioGroupIds[t.urlId];
              if (this.groupId !== r) {
                this.groupId = r;
                var e = this.tracks.filter(function(s) {
                  return !r || s.groupId === r;
                });
                this.selectDefaultTrack && !e.some(function(s) {
                  return s.default;
                }) && (this.selectDefaultTrack = !1), this.tracksInGroup = e;
                var f = {
                  audioTracks: e
                };
                this.log("Updating audio tracks, " + e.length + ' track(s) found in "' + r + '" group-id'), this.hls.trigger(C.Events.AUDIO_TRACKS_UPDATED, f), this.selectInitialTrack();
              }
            }
          }, E.onError = function(n, t) {
            p.prototype.onError.call(this, n, t), !(t.fatal || !t.context) && t.context.type === b.PlaylistContextType.AUDIO_TRACK && t.context.id === this.trackId && t.context.groupId === this.groupId && this.retryLoadingOrFail(t);
          }, E.setAudioTrack = function(n) {
            var t = this.tracksInGroup;
            if (n < 0 || n >= t.length) {
              this.warn("Invalid id passed to audio-track controller");
              return;
            }
            this.clearTimer();
            var r = t[this.trackId];
            this.log("Now switching to audio-track index " + n);
            var e = t[n], f = e.id, s = e.groupId, i = s === void 0 ? "" : s, o = e.name, c = e.type, h = e.url;
            if (this.trackId = n, this.trackName = o, this.selectDefaultTrack = !1, this.hls.trigger(C.Events.AUDIO_TRACK_SWITCHING, {
              id: f,
              groupId: i,
              name: o,
              type: c,
              url: h
            }), !(e.details && !e.details.live)) {
              var u = this.switchParams(e.url, r == null ? void 0 : r.details);
              this.loadPlaylist(u);
            }
          }, E.selectInitialTrack = function() {
            var n = this.tracksInGroup;
            console.assert(n.length, "Initial audio track should be selected when tracks are known");
            var t = this.trackName, r = this.findTrackId(t) || this.findTrackId();
            r !== -1 ? this.setAudioTrack(r) : (this.warn("No track found for running audio group-ID: " + this.groupId), this.hls.trigger(C.Events.ERROR, {
              type: D.ErrorTypes.MEDIA_ERROR,
              details: D.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,
              fatal: !0
            }));
          }, E.findTrackId = function(n) {
            for (var t = this.tracksInGroup, r = 0; r < t.length; r++) {
              var e = t[r];
              if ((!this.selectDefaultTrack || e.default) && (!n || n === e.name))
                return e.id;
            }
            return -1;
          }, E.loadPlaylist = function(n) {
            var t = this.tracksInGroup[this.trackId];
            if (this.shouldLoadTrack(t)) {
              var r = t.id, e = t.groupId, f = t.url;
              if (n)
                try {
                  f = n.addDirectives(f);
                } catch (s) {
                  this.warn("Could not construct new URL with HLS Delivery Directives: " + s);
                }
              this.log("loading audio-track playlist for id: " + r), this.clearTimer(), this.hls.trigger(C.Events.AUDIO_TRACK_LOADING, {
                url: f,
                id: r,
                groupId: e,
                deliveryDirectives: n || null
              });
            }
          }, O(T, [{
            key: "audioTracks",
            get: function() {
              return this.tracksInGroup;
            }
          }, {
            key: "audioTrack",
            get: function() {
              return this.trackId;
            },
            set: function(n) {
              this.selectDefaultTrack = !1, this.setAudioTrack(n);
            }
          }]), T;
        }(A.default);
        M.default = S;
      },
      "./src/controller/base-playlist-controller.ts": function(W, M, y) {
        y.r(M), y.d(M, "default", function() {
          return O;
        });
        var C = y("./src/polyfills/number.ts"), D = y("./src/types/level.ts"), A = y("./src/controller/level-helper.ts"), b = y("./src/utils/logger.ts"), I = y("./src/errors.ts"), O = /* @__PURE__ */ function() {
          function L(S, p) {
            this.hls = void 0, this.timer = -1, this.canLoad = !1, this.retryCount = 0, this.log = void 0, this.warn = void 0, this.log = b.logger.log.bind(b.logger, p + ":"), this.warn = b.logger.warn.bind(b.logger, p + ":"), this.hls = S;
          }
          var m = L.prototype;
          return m.destroy = function() {
            this.clearTimer(), this.hls = this.log = this.warn = null;
          }, m.onError = function(p, T) {
            T.fatal && T.type === I.ErrorTypes.NETWORK_ERROR && this.clearTimer();
          }, m.clearTimer = function() {
            clearTimeout(this.timer), this.timer = -1;
          }, m.startLoad = function() {
            this.canLoad = !0, this.retryCount = 0, this.loadPlaylist();
          }, m.stopLoad = function() {
            this.canLoad = !1, this.clearTimer();
          }, m.switchParams = function(p, T) {
            var E = T == null ? void 0 : T.renditionReports;
            if (E)
              for (var v = 0; v < E.length; v++) {
                var n = E[v], t = "" + n.URI;
                if (t === p.substr(-t.length)) {
                  var r = parseInt(n["LAST-MSN"]), e = parseInt(n["LAST-PART"]);
                  if (T && this.hls.config.lowLatencyMode) {
                    var f = Math.min(T.age - T.partTarget, T.targetduration);
                    e !== void 0 && f > T.partTarget && (e += 1);
                  }
                  if (Object(C.isFiniteNumber)(r))
                    return new D.HlsUrlParameters(r, Object(C.isFiniteNumber)(e) ? e : void 0, D.HlsSkip.No);
                }
              }
          }, m.loadPlaylist = function(p) {
          }, m.shouldLoadTrack = function(p) {
            return this.canLoad && p && !!p.url && (!p.details || p.details.live);
          }, m.playlistLoaded = function(p, T, E) {
            var v = this, n = T.details, t = T.stats, r = t.loading.end ? Math.max(0, self.performance.now() - t.loading.end) : 0;
            if (n.advancedDateTime = Date.now() - r, n.live || E != null && E.live) {
              if (n.reloaded(E), E && this.log("live playlist " + p + " " + (n.advanced ? "REFRESHED " + n.lastPartSn + "-" + n.lastPartIndex : "MISSED")), E && n.fragments.length > 0 && Object(A.mergeDetails)(E, n), !this.canLoad || !n.live)
                return;
              var e, f = void 0, s = void 0;
              if (n.canBlockReload && n.endSN && n.advanced) {
                var i = this.hls.config.lowLatencyMode, o = n.lastPartSn, c = n.endSN, h = n.lastPartIndex, u = h !== -1, a = o === c, l = i ? 0 : h;
                u ? (f = a ? c + 1 : o, s = a ? l : h + 1) : f = c + 1;
                var d = n.age, g = d + n.ageHeader, x = Math.min(g - n.partTarget, n.targetduration * 1.5);
                if (x > 0) {
                  if (E && x > E.tuneInGoal)
                    this.warn("CDN Tune-in goal increased from: " + E.tuneInGoal + " to: " + x + " with playlist age: " + n.age), x = 0;
                  else {
                    var R = Math.floor(x / n.targetduration);
                    if (f += R, s !== void 0) {
                      var P = Math.round(x % n.targetduration / n.partTarget);
                      s += P;
                    }
                    this.log("CDN Tune-in age: " + n.ageHeader + "s last advanced " + d.toFixed(2) + "s goal: " + x + " skip sn " + R + " to part " + s);
                  }
                  n.tuneInGoal = x;
                }
                if (e = this.getDeliveryDirectives(n, T.deliveryDirectives, f, s), i || !a) {
                  this.loadPlaylist(e);
                  return;
                }
              } else
                e = this.getDeliveryDirectives(n, T.deliveryDirectives, f, s);
              var _ = Object(A.computeReloadInterval)(n, t);
              f !== void 0 && n.canBlockReload && (_ -= n.partTarget || 1), this.log("reload live playlist " + p + " in " + Math.round(_) + " ms"), this.timer = self.setTimeout(function() {
                return v.loadPlaylist(e);
              }, _);
            } else
              this.clearTimer();
          }, m.getDeliveryDirectives = function(p, T, E, v) {
            var n = Object(D.getSkipValue)(p, E);
            return T != null && T.skip && p.deltaUpdateFailed && (E = T.msn, v = T.part, n = D.HlsSkip.No), new D.HlsUrlParameters(E, v, n);
          }, m.retryLoadingOrFail = function(p) {
            var T = this, E = this.hls.config, v = this.retryCount < E.levelLoadingMaxRetry;
            if (v) {
              var n;
              if (this.retryCount++, p.details.indexOf("LoadTimeOut") > -1 && (n = p.context) !== null && n !== void 0 && n.deliveryDirectives)
                this.warn("retry playlist loading #" + this.retryCount + ' after "' + p.details + '"'), this.loadPlaylist();
              else {
                var t = Math.min(Math.pow(2, this.retryCount) * E.levelLoadingRetryDelay, E.levelLoadingMaxRetryTimeout);
                this.timer = self.setTimeout(function() {
                  return T.loadPlaylist();
                }, t), this.warn("retry playlist loading #" + this.retryCount + " in " + t + ' ms after "' + p.details + '"');
              }
            } else
              this.warn('cannot recover from error "' + p.details + '"'), this.clearTimer(), p.fatal = !0;
            return v;
          }, L;
        }();
      },
      "./src/controller/base-stream-controller.ts": function(W, M, y) {
        y.r(M), y.d(M, "State", function() {
          return c;
        }), y.d(M, "default", function() {
          return h;
        });
        var C = y("./src/polyfills/number.ts"), D = y("./src/task-loop.ts"), A = y("./src/controller/fragment-tracker.ts"), b = y("./src/utils/buffer-helper.ts"), I = y("./src/utils/logger.ts"), O = y("./src/events.ts"), L = y("./src/errors.ts"), m = y("./src/types/transmuxer.ts"), S = y("./src/utils/mp4-tools.ts"), p = y("./src/utils/discontinuities.ts"), T = y("./src/controller/fragment-finders.ts"), E = y("./src/controller/level-helper.ts"), v = y("./src/loader/fragment-loader.ts"), n = y("./src/crypt/decrypter.ts"), t = y("./src/utils/time-ranges.ts"), r = y("./src/types/loader.ts");
        function e(u, a) {
          for (var l = 0; l < a.length; l++) {
            var d = a[l];
            d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(u, d.key, d);
          }
        }
        function f(u, a, l) {
          return a && e(u.prototype, a), l && e(u, l), u;
        }
        function s(u) {
          if (u === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return u;
        }
        function i(u, a) {
          u.prototype = Object.create(a.prototype), u.prototype.constructor = u, o(u, a);
        }
        function o(u, a) {
          return o = Object.setPrototypeOf || function(d, g) {
            return d.__proto__ = g, d;
          }, o(u, a);
        }
        var c = {
          STOPPED: "STOPPED",
          IDLE: "IDLE",
          KEY_LOADING: "KEY_LOADING",
          FRAG_LOADING: "FRAG_LOADING",
          FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
          WAITING_TRACK: "WAITING_TRACK",
          PARSING: "PARSING",
          PARSED: "PARSED",
          BACKTRACKING: "BACKTRACKING",
          ENDED: "ENDED",
          ERROR: "ERROR",
          WAITING_INIT_PTS: "WAITING_INIT_PTS",
          WAITING_LEVEL: "WAITING_LEVEL"
        }, h = /* @__PURE__ */ function(u) {
          i(a, u);
          function a(d, g, x) {
            var R;
            return R = u.call(this) || this, R.hls = void 0, R.fragPrevious = null, R.fragCurrent = null, R.fragmentTracker = void 0, R.transmuxer = null, R._state = c.STOPPED, R.media = void 0, R.mediaBuffer = void 0, R.config = void 0, R.bitrateTest = !1, R.lastCurrentTime = 0, R.nextLoadPosition = 0, R.startPosition = 0, R.loadedmetadata = !1, R.fragLoadError = 0, R.retryDate = 0, R.levels = null, R.fragmentLoader = void 0, R.levelLastLoaded = null, R.startFragRequested = !1, R.decrypter = void 0, R.initPTS = [], R.onvseeking = null, R.onvended = null, R.logPrefix = "", R.log = void 0, R.warn = void 0, R.logPrefix = x, R.log = I.logger.log.bind(I.logger, x + ":"), R.warn = I.logger.warn.bind(I.logger, x + ":"), R.hls = d, R.fragmentLoader = new v.default(d.config), R.fragmentTracker = g, R.config = d.config, R.decrypter = new n.default(d, d.config), d.on(O.Events.KEY_LOADED, R.onKeyLoaded, s(R)), R;
          }
          var l = a.prototype;
          return l.doTick = function() {
            this.onTickEnd();
          }, l.onTickEnd = function() {
          }, l.startLoad = function(g) {
          }, l.stopLoad = function() {
            this.fragmentLoader.abort();
            var g = this.fragCurrent;
            g && this.fragmentTracker.removeFragment(g), this.resetTransmuxer(), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = c.STOPPED;
          }, l._streamEnded = function(g, x) {
            var R = this.fragCurrent, P = this.fragmentTracker;
            if (!x.live && R && R.sn === x.endSN && !g.nextStart) {
              var _ = P.getState(R);
              return _ === A.FragmentState.PARTIAL || _ === A.FragmentState.OK;
            }
            return !1;
          }, l.onMediaAttached = function(g, x) {
            var R = this.media = this.mediaBuffer = x.media;
            this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), R.addEventListener("seeking", this.onvseeking), R.addEventListener("ended", this.onvended);
            var P = this.config;
            this.levels && P.autoStartLoad && this.state === c.STOPPED && this.startLoad(P.startPosition);
          }, l.onMediaDetaching = function() {
            var g = this.media;
            g != null && g.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), g && (g.removeEventListener("seeking", this.onvseeking), g.removeEventListener("ended", this.onvended), this.onvseeking = this.onvended = null), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.fragmentTracker.removeAllFragments(), this.stopLoad();
          }, l.onMediaSeeking = function() {
            var g = this.config, x = this.fragCurrent, R = this.media, P = this.mediaBuffer, _ = this.state, F = R ? R.currentTime : 0, B = b.BufferHelper.bufferInfo(P || R, F, g.maxBufferHole);
            if (this.log("media seeking to " + (Object(C.isFiniteNumber)(F) ? F.toFixed(3) : F) + ", state: " + _), _ === c.ENDED)
              this.resetLoadingState();
            else if (x && !B.len) {
              var U = g.maxFragLookUpTolerance, N = x.start - U, k = x.start + x.duration + U, w = F > k;
              (F < N || w) && (w && x.loader && (this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), x.loader.abort()), this.resetLoadingState());
            }
            R && (this.lastCurrentTime = F), !this.loadedmetadata && !B.len && (this.nextLoadPosition = this.startPosition = F), this.tickImmediate();
          }, l.onMediaEnded = function() {
            this.startPosition = this.lastCurrentTime = 0;
          }, l.onKeyLoaded = function(g, x) {
            if (!(this.state !== c.KEY_LOADING || x.frag !== this.fragCurrent || !this.levels)) {
              this.state = c.IDLE;
              var R = this.levels[x.frag.level].details;
              R && this.loadFragment(x.frag, R, x.frag.start);
            }
          }, l.onHandlerDestroying = function() {
            this.stopLoad(), u.prototype.onHandlerDestroying.call(this);
          }, l.onHandlerDestroyed = function() {
            this.state = c.STOPPED, this.hls.off(O.Events.KEY_LOADED, this.onKeyLoaded, this), this.fragmentLoader && this.fragmentLoader.destroy(), this.decrypter && this.decrypter.destroy(), this.hls = this.log = this.warn = this.decrypter = this.fragmentLoader = this.fragmentTracker = null, u.prototype.onHandlerDestroyed.call(this);
          }, l.loadKey = function(g, x) {
            this.log("Loading key for " + g.sn + " of [" + x.startSN + "-" + x.endSN + "], " + (this.logPrefix === "[stream-controller]" ? "level" : "track") + " " + g.level), this.state = c.KEY_LOADING, this.fragCurrent = g, this.hls.trigger(O.Events.KEY_LOADING, {
              frag: g
            });
          }, l.loadFragment = function(g, x, R) {
            this._loadFragForPlayback(g, x, R);
          }, l._loadFragForPlayback = function(g, x, R) {
            var P = this, _ = function(B) {
              if (P.fragContextChanged(g)) {
                P.warn("Fragment " + g.sn + (B.part ? " p: " + B.part.index : "") + " of level " + g.level + " was dropped during download."), P.fragmentTracker.removeFragment(g);
                return;
              }
              g.stats.chunkCount++, P._handleFragmentLoadProgress(B);
            };
            this._doFragLoad(g, x, R, _).then(function(F) {
              if (!!F) {
                P.fragLoadError = 0;
                var B = P.state;
                if (P.fragContextChanged(g)) {
                  (B === c.FRAG_LOADING || B === c.BACKTRACKING || !P.fragCurrent && B === c.PARSING) && (P.fragmentTracker.removeFragment(g), P.state = c.IDLE);
                  return;
                }
                if ("payload" in F && (P.log("Loaded fragment " + g.sn + " of level " + g.level), P.hls.trigger(O.Events.FRAG_LOADED, F), P.state === c.BACKTRACKING)) {
                  P.fragmentTracker.backtrack(g, F), P.resetFragmentLoading(g);
                  return;
                }
                P._handleFragmentLoadComplete(F);
              }
            }).catch(function(F) {
              P.warn(F), P.resetFragmentLoading(g);
            });
          }, l.flushMainBuffer = function(g, x, R) {
            if (R === void 0 && (R = null), !!(g - x)) {
              var P = {
                startOffset: g,
                endOffset: x,
                type: R
              };
              this.fragLoadError = 0, this.hls.trigger(O.Events.BUFFER_FLUSHING, P);
            }
          }, l._loadInitSegment = function(g) {
            var x = this;
            this._doFragLoad(g).then(function(R) {
              if (!R || x.fragContextChanged(g) || !x.levels)
                throw new Error("init load aborted");
              return R;
            }).then(function(R) {
              var P = x.hls, _ = R.payload, F = g.decryptdata;
              if (_ && _.byteLength > 0 && F && F.key && F.iv && F.method === "AES-128") {
                var B = self.performance.now();
                return x.decrypter.webCryptoDecrypt(new Uint8Array(_), F.key.buffer, F.iv.buffer).then(function(U) {
                  var N = self.performance.now();
                  return P.trigger(O.Events.FRAG_DECRYPTED, {
                    frag: g,
                    payload: U,
                    stats: {
                      tstart: B,
                      tdecrypt: N
                    }
                  }), R.payload = U, R;
                });
              }
              return R;
            }).then(function(R) {
              var P = x.fragCurrent, _ = x.hls, F = x.levels;
              if (!F)
                throw new Error("init load aborted, missing levels");
              var B = F[g.level].details;
              console.assert(B, "Level details are defined when init segment is loaded");
              var U = g.stats;
              x.state = c.IDLE, x.fragLoadError = 0, g.data = new Uint8Array(R.payload), U.parsing.start = U.buffering.start = self.performance.now(), U.parsing.end = U.buffering.end = self.performance.now(), R.frag === P && _.trigger(O.Events.FRAG_BUFFERED, {
                stats: U,
                frag: P,
                part: null,
                id: g.type
              }), x.tick();
            }).catch(function(R) {
              x.warn(R), x.resetFragmentLoading(g);
            });
          }, l.fragContextChanged = function(g) {
            var x = this.fragCurrent;
            return !g || !x || g.level !== x.level || g.sn !== x.sn || g.urlId !== x.urlId;
          }, l.fragBufferedComplete = function(g, x) {
            var R = this.mediaBuffer ? this.mediaBuffer : this.media;
            this.log("Buffered " + g.type + " sn: " + g.sn + (x ? " part: " + x.index : "") + " of " + (this.logPrefix === "[stream-controller]" ? "level" : "track") + " " + g.level + " " + t.default.toString(b.BufferHelper.getBuffered(R))), this.state = c.IDLE, this.tick();
          }, l._handleFragmentLoadComplete = function(g) {
            var x = this.transmuxer;
            if (!!x) {
              var R = g.frag, P = g.part, _ = g.partsLoaded, F = !_ || _.length === 0 || _.some(function(U) {
                return !U;
              }), B = new m.ChunkMetadata(R.level, R.sn, R.stats.chunkCount + 1, 0, P ? P.index : -1, !F);
              x.flush(B);
            }
          }, l._handleFragmentLoadProgress = function(g) {
          }, l._doFragLoad = function(g, x, R, P) {
            var _ = this;
            if (R === void 0 && (R = null), !this.levels)
              throw new Error("frag load aborted, missing levels");
            if (R = Math.max(g.start, R || 0), this.config.lowLatencyMode && x) {
              var F = x.partList;
              if (F && P) {
                R > g.end && x.fragmentHint && (g = x.fragmentHint);
                var B = this.getNextPart(F, g, R);
                if (B > -1) {
                  var U = F[B];
                  return this.log("Loading part sn: " + g.sn + " p: " + U.index + " cc: " + g.cc + " of playlist [" + x.startSN + "-" + x.endSN + "] parts [0-" + B + "-" + (F.length - 1) + "] " + (this.logPrefix === "[stream-controller]" ? "level" : "track") + ": " + g.level + ", target: " + parseFloat(R.toFixed(3))), this.nextLoadPosition = U.start + U.duration, this.state = c.FRAG_LOADING, this.hls.trigger(O.Events.FRAG_LOADING, {
                    frag: g,
                    part: F[B],
                    targetBufferTime: R
                  }), this.doFragPartsLoad(g, F, B, P).catch(function(N) {
                    return _.handleFragLoadError(N);
                  });
                } else if (!g.url || this.loadedEndOfParts(F, R))
                  return Promise.resolve(null);
              }
            }
            return this.log("Loading fragment " + g.sn + " cc: " + g.cc + " " + (x ? "of [" + x.startSN + "-" + x.endSN + "] " : "") + (this.logPrefix === "[stream-controller]" ? "level" : "track") + ": " + g.level + ", target: " + parseFloat(R.toFixed(3))), Object(C.isFiniteNumber)(g.sn) && !this.bitrateTest && (this.nextLoadPosition = g.start + g.duration), this.state = c.FRAG_LOADING, this.hls.trigger(O.Events.FRAG_LOADING, {
              frag: g,
              targetBufferTime: R
            }), this.fragmentLoader.load(g, P).catch(function(N) {
              return _.handleFragLoadError(N);
            });
          }, l.doFragPartsLoad = function(g, x, R, P) {
            var _ = this;
            return new Promise(function(F, B) {
              var U = [], N = function k(w) {
                var K = x[w];
                _.fragmentLoader.loadPart(g, K, P).then(function(j) {
                  U[K.index] = j;
                  var H = j.part;
                  _.hls.trigger(O.Events.FRAG_LOADED, j);
                  var G = x[w + 1];
                  if (G && G.fragment === g)
                    k(w + 1);
                  else
                    return F({
                      frag: g,
                      part: H,
                      partsLoaded: U
                    });
                }).catch(B);
              };
              N(R);
            });
          }, l.handleFragLoadError = function(g) {
            var x = g.data;
            return x && x.details === L.ErrorDetails.INTERNAL_ABORTED ? this.handleFragLoadAborted(x.frag, x.part) : this.hls.trigger(O.Events.ERROR, x), null;
          }, l._handleTransmuxerFlush = function(g) {
            var x = this.getCurrentContext(g);
            if (!x || this.state !== c.PARSING) {
              this.fragCurrent || (this.state = c.IDLE);
              return;
            }
            var R = x.frag, P = x.part, _ = x.level, F = self.performance.now();
            R.stats.parsing.end = F, P && (P.stats.parsing.end = F), this.updateLevelTiming(R, P, _, g.partial);
          }, l.getCurrentContext = function(g) {
            var x = this.levels, R = g.level, P = g.sn, _ = g.part;
            if (!x || !x[R])
              return this.warn("Levels object was unset while buffering fragment " + P + " of level " + R + ". The current chunk will not be buffered."), null;
            var F = x[R], B = _ > -1 ? Object(E.getPartWith)(F, P, _) : null, U = B ? B.fragment : Object(E.getFragmentWithSN)(F, P, this.fragCurrent);
            return U ? {
              frag: U,
              part: B,
              level: F
            } : null;
          }, l.bufferFragmentData = function(g, x, R, P) {
            if (!(!g || this.state !== c.PARSING)) {
              var _ = g.data1, F = g.data2, B = _;
              if (_ && F && (B = Object(S.appendUint8Array)(_, F)), !(!B || !B.length)) {
                var U = {
                  type: g.type,
                  frag: x,
                  part: R,
                  chunkMeta: P,
                  parent: x.type,
                  data: B
                };
                this.hls.trigger(O.Events.BUFFER_APPENDING, U), g.dropped && g.independent && !R && this.flushBufferGap(x);
              }
            }
          }, l.flushBufferGap = function(g) {
            var x = this.media;
            if (!!x) {
              if (!b.BufferHelper.isBuffered(x, x.currentTime)) {
                this.flushMainBuffer(0, g.start);
                return;
              }
              var R = x.currentTime, P = b.BufferHelper.bufferInfo(x, R, 0), _ = g.duration, F = Math.min(this.config.maxFragLookUpTolerance * 2, _ * 0.25), B = Math.max(Math.min(g.start - F, P.end - F), R + F);
              g.start - B > F && this.flushMainBuffer(B, g.start);
            }
          }, l.getFwdBufferInfo = function(g, x) {
            var R = this.config, P = this.getLoadPosition();
            if (!Object(C.isFiniteNumber)(P))
              return null;
            var _ = b.BufferHelper.bufferInfo(g, P, R.maxBufferHole);
            if (_.len === 0 && _.nextStart !== void 0) {
              var F = this.fragmentTracker.getBufferedFrag(P, x);
              if (F && _.nextStart < F.end)
                return b.BufferHelper.bufferInfo(g, P, Math.max(_.nextStart, R.maxBufferHole));
            }
            return _;
          }, l.getMaxBufferLength = function(g) {
            var x = this.config, R;
            return g ? R = Math.max(8 * x.maxBufferSize / g, x.maxBufferLength) : R = x.maxBufferLength, Math.min(R, x.maxMaxBufferLength);
          }, l.reduceMaxBufferLength = function(g) {
            var x = this.config, R = g || x.maxBufferLength;
            return x.maxMaxBufferLength >= R ? (x.maxMaxBufferLength /= 2, this.warn("Reduce max buffer length to " + x.maxMaxBufferLength + "s"), !0) : !1;
          }, l.getNextFragment = function(g, x) {
            var R, P, _ = x.fragments, F = _.length;
            if (!F)
              return null;
            var B = this.config, U = _[0].start, N;
            if (x.live) {
              var k = B.initialLiveManifestSize;
              if (F < k)
                return this.warn("Not enough fragments to start playback (have: " + F + ", need: " + k + ")"), null;
              !x.PTSKnown && !this.startFragRequested && this.startPosition === -1 && (N = this.getInitialLiveFragment(x, _), this.startPosition = N ? this.hls.liveSyncPosition || N.start : g);
            } else
              g <= U && (N = _[0]);
            if (!N) {
              var w = B.lowLatencyMode ? x.partEnd : x.fragmentEnd;
              N = this.getFragmentAtPosition(g, w, x);
            }
            return (R = N) !== null && R !== void 0 && R.initSegment && !((P = N) !== null && P !== void 0 && P.initSegment.data) && !this.bitrateTest && (N = N.initSegment), N;
          }, l.getNextPart = function(g, x, R) {
            for (var P = -1, _ = !1, F = !0, B = 0, U = g.length; B < U; B++) {
              var N = g[B];
              if (F = F && !N.independent, P > -1 && R < N.start)
                break;
              var k = N.loaded;
              !k && (_ || N.independent || F) && N.fragment === x && (P = B), _ = k;
            }
            return P;
          }, l.loadedEndOfParts = function(g, x) {
            var R = g[g.length - 1];
            return R && x > R.start && R.loaded;
          }, l.getInitialLiveFragment = function(g, x) {
            var R = this.fragPrevious, P = null;
            if (R) {
              if (g.hasProgramDateTime && (this.log("Live playlist, switching playlist, load frag with same PDT: " + R.programDateTime), P = Object(T.findFragmentByPDT)(x, R.endProgramDateTime, this.config.maxFragLookUpTolerance)), !P) {
                var _ = R.sn + 1;
                if (_ >= g.startSN && _ <= g.endSN) {
                  var F = x[_ - g.startSN];
                  R.cc === F.cc && (P = F, this.log("Live playlist, switching playlist, load frag with next SN: " + P.sn));
                }
                P || (P = Object(T.findFragWithCC)(x, R.cc), P && this.log("Live playlist, switching playlist, load frag with same CC: " + P.sn));
              }
            } else {
              var B = this.hls.liveSyncPosition;
              B !== null && (P = this.getFragmentAtPosition(B, this.bitrateTest ? g.fragmentEnd : g.edge, g));
            }
            return P;
          }, l.getFragmentAtPosition = function(g, x, R) {
            var P = this.config, _ = this.fragPrevious, F = R.fragments, B = R.endSN, U = R.fragmentHint, N = P.maxFragLookUpTolerance, k = !!(P.lowLatencyMode && R.partList && U);
            k && U && !this.bitrateTest && (F = F.concat(U), B = U.sn);
            var w;
            if (g < x) {
              var K = g > x - N ? 0 : N;
              w = Object(T.findFragmentByPTS)(_, F, g, K);
            } else
              w = F[F.length - 1];
            if (w) {
              var j = w.sn - R.startSN, H = _ && w.level === _.level, G = F[j + 1], X = this.fragmentTracker.getState(w);
              if (X === A.FragmentState.BACKTRACKED) {
                w = null;
                for (var V = j; F[V] && this.fragmentTracker.getState(F[V]) === A.FragmentState.BACKTRACKED; )
                  _ ? w = F[V--] : w = F[--V];
                w || (w = G);
              } else
                _ && w.sn === _.sn && !k && H && (w.sn < B && this.fragmentTracker.getState(G) !== A.FragmentState.OK ? (this.log("SN " + w.sn + " just loaded, load next one: " + G.sn), w = G) : w = null);
            }
            return w;
          }, l.synchronizeToLiveEdge = function(g) {
            var x = this.config, R = this.media;
            if (!!R) {
              var P = this.hls.liveSyncPosition, _ = R.currentTime, F = g.fragments[0].start, B = g.edge, U = _ >= F - x.maxFragLookUpTolerance && _ <= B;
              if (P !== null && R.duration > P && (_ < P || !U)) {
                var N = x.liveMaxLatencyDuration !== void 0 ? x.liveMaxLatencyDuration : x.liveMaxLatencyDurationCount * g.targetduration;
                (!U && R.readyState < 4 || _ < B - N) && (this.loadedmetadata || (this.nextLoadPosition = P), R.readyState && (this.warn("Playback: " + _.toFixed(3) + " is located too far from the end of live sliding playlist: " + B + ", reset currentTime to : " + P.toFixed(3)), R.currentTime = P));
              }
            }
          }, l.alignPlaylists = function(g, x) {
            var R = this.levels, P = this.levelLastLoaded, _ = this.fragPrevious, F = P !== null ? R[P] : null, B = g.fragments.length;
            if (!B)
              return this.warn("No fragments in live playlist"), 0;
            var U = g.fragments[0].start, N = !x, k = g.alignedSliding && Object(C.isFiniteNumber)(U);
            if (N || !k && !U) {
              Object(p.alignStream)(_, F, g);
              var w = g.fragments[0].start;
              return this.log("Live playlist sliding: " + w.toFixed(2) + " start-sn: " + (x ? x.startSN : "na") + "->" + g.startSN + " prev-sn: " + (_ ? _.sn : "na") + " fragments: " + B), w;
            }
            return U;
          }, l.waitForCdnTuneIn = function(g) {
            var x = 3;
            return g.live && g.canBlockReload && g.tuneInGoal > Math.max(g.partHoldBack, g.partTarget * x);
          }, l.setStartPosition = function(g, x) {
            var R = this.startPosition;
            if (R < x && (R = -1), R === -1 || this.lastCurrentTime === -1) {
              var P = g.startTimeOffset;
              Object(C.isFiniteNumber)(P) ? (R = x + P, P < 0 && (R += g.totalduration), R = Math.min(Math.max(x, R), x + g.totalduration), this.log("Start time offset " + P + " found in playlist, adjust startPosition to " + R), this.startPosition = R) : g.live ? R = this.hls.liveSyncPosition || x : this.startPosition = R = 0, this.lastCurrentTime = R;
            }
            this.nextLoadPosition = R;
          }, l.getLoadPosition = function() {
            var g = this.media, x = 0;
            return this.loadedmetadata && g ? x = g.currentTime : this.nextLoadPosition && (x = this.nextLoadPosition), x;
          }, l.handleFragLoadAborted = function(g, x) {
            this.transmuxer && g.sn !== "initSegment" && g.stats.aborted && (this.warn("Fragment " + g.sn + (x ? " part" + x.index : "") + " of level " + g.level + " was aborted"), this.resetFragmentLoading(g));
          }, l.resetFragmentLoading = function(g) {
            (!this.fragCurrent || !this.fragContextChanged(g)) && (this.state = c.IDLE);
          }, l.onFragmentOrKeyLoadError = function(g, x) {
            if (!x.fatal) {
              var R = x.frag;
              if (!(!R || R.type !== g)) {
                var P = this.fragCurrent;
                console.assert(P && R.sn === P.sn && R.level === P.level && R.urlId === P.urlId, "Frag load error must match current frag to retry");
                var _ = this.config;
                if (this.fragLoadError + 1 <= _.fragLoadingMaxRetry) {
                  if (this.resetLiveStartWhenNotLoaded(R.level))
                    return;
                  var F = Math.min(Math.pow(2, this.fragLoadError) * _.fragLoadingRetryDelay, _.fragLoadingMaxRetryTimeout);
                  this.warn("Fragment " + R.sn + " of " + g + " " + R.level + " failed to load, retrying in " + F + "ms"), this.retryDate = self.performance.now() + F, this.fragLoadError++, this.state = c.FRAG_LOADING_WAITING_RETRY;
                } else
                  x.levelRetry ? (g === r.PlaylistLevelType.AUDIO && (this.fragCurrent = null), this.fragLoadError = 0, this.state = c.IDLE) : (I.logger.error(x.details + " reaches max retry, redispatch as fatal ..."), x.fatal = !0, this.hls.stopLoad(), this.state = c.ERROR);
              }
            }
          }, l.afterBufferFlushed = function(g, x, R) {
            if (!!g) {
              var P = b.BufferHelper.getBuffered(g);
              this.fragmentTracker.detectEvictedFragments(x, P, R), this.state === c.ENDED && this.resetLoadingState();
            }
          }, l.resetLoadingState = function() {
            this.fragCurrent = null, this.fragPrevious = null, this.state = c.IDLE;
          }, l.resetLiveStartWhenNotLoaded = function(g) {
            if (!this.loadedmetadata) {
              this.startFragRequested = !1;
              var x = this.levels ? this.levels[g].details : null;
              if (x != null && x.live)
                return this.startPosition = -1, this.setStartPosition(x, 0), this.resetLoadingState(), !0;
              this.nextLoadPosition = this.startPosition;
            }
            return !1;
          }, l.updateLevelTiming = function(g, x, R, P) {
            var _ = this, F = R.details;
            console.assert(!!F, "level.details must be defined");
            var B = Object.keys(g.elementaryStreams).reduce(function(U, N) {
              var k = g.elementaryStreams[N];
              if (k) {
                var w = k.endPTS - k.startPTS;
                if (w <= 0)
                  return _.warn("Could not parse fragment " + g.sn + " " + N + " duration reliably (" + w + ") resetting transmuxer to fallback to playlist timing"), _.resetTransmuxer(), U || !1;
                var K = P ? 0 : Object(E.updateFragPTSDTS)(F, g, k.startPTS, k.endPTS, k.startDTS, k.endDTS);
                return _.hls.trigger(O.Events.LEVEL_PTS_UPDATED, {
                  details: F,
                  level: R,
                  drift: K,
                  type: N,
                  frag: g,
                  start: k.startPTS,
                  end: k.endPTS
                }), !0;
              }
              return U;
            }, !1);
            B ? (this.state = c.PARSED, this.hls.trigger(O.Events.FRAG_PARSED, {
              frag: g,
              part: x
            })) : this.resetLoadingState();
          }, l.resetTransmuxer = function() {
            this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null);
          }, f(a, [{
            key: "state",
            get: function() {
              return this._state;
            },
            set: function(g) {
              var x = this._state;
              x !== g && (this._state = g, this.log(x + "->" + g));
            }
          }]), a;
        }(D.default);
      },
      "./src/controller/buffer-controller.ts": function(W, M, y) {
        y.r(M), y.d(M, "default", function() {
          return T;
        });
        var C = y("./src/polyfills/number.ts"), D = y("./src/events.ts"), A = y("./src/utils/logger.ts"), b = y("./src/errors.ts"), I = y("./src/utils/buffer-helper.ts"), O = y("./src/utils/mediasource-helper.ts"), L = y("./src/loader/fragment.ts"), m = y("./src/controller/buffer-operation-queue.ts"), S = Object(O.getMediaSource)(), p = /([ha]vc.)(?:\.[^.,]+)+/, T = /* @__PURE__ */ function() {
          function E(n) {
            var t = this;
            this.details = null, this._objectUrl = null, this.operationQueue = void 0, this.listeners = void 0, this.hls = void 0, this.bufferCodecEventsExpected = 0, this._bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, this.appendError = 0, this.tracks = {}, this.pendingTracks = {}, this.sourceBuffer = void 0, this._onMediaSourceOpen = function() {
              var r = t.hls, e = t.media, f = t.mediaSource;
              A.logger.log("[buffer-controller]: Media source opened"), e && (t.updateMediaElementDuration(), r.trigger(D.Events.MEDIA_ATTACHED, {
                media: e
              })), f && f.removeEventListener("sourceopen", t._onMediaSourceOpen), t.checkPendingTracks();
            }, this._onMediaSourceClose = function() {
              A.logger.log("[buffer-controller]: Media source closed");
            }, this._onMediaSourceEnded = function() {
              A.logger.log("[buffer-controller]: Media source ended");
            }, this.hls = n, this._initSourceBuffer(), this.registerListeners();
          }
          var v = E.prototype;
          return v.hasSourceTypes = function() {
            return this.getSourceBufferTypes().length > 0 || Object.keys(this.pendingTracks).length > 0;
          }, v.destroy = function() {
            this.unregisterListeners(), this.details = null;
          }, v.registerListeners = function() {
            var t = this.hls;
            t.on(D.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(D.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(D.Events.MANIFEST_PARSED, this.onManifestParsed, this), t.on(D.Events.BUFFER_RESET, this.onBufferReset, this), t.on(D.Events.BUFFER_APPENDING, this.onBufferAppending, this), t.on(D.Events.BUFFER_CODECS, this.onBufferCodecs, this), t.on(D.Events.BUFFER_EOS, this.onBufferEos, this), t.on(D.Events.BUFFER_FLUSHING, this.onBufferFlushing, this), t.on(D.Events.LEVEL_UPDATED, this.onLevelUpdated, this), t.on(D.Events.FRAG_PARSED, this.onFragParsed, this), t.on(D.Events.FRAG_CHANGED, this.onFragChanged, this);
          }, v.unregisterListeners = function() {
            var t = this.hls;
            t.off(D.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), t.off(D.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(D.Events.MANIFEST_PARSED, this.onManifestParsed, this), t.off(D.Events.BUFFER_RESET, this.onBufferReset, this), t.off(D.Events.BUFFER_APPENDING, this.onBufferAppending, this), t.off(D.Events.BUFFER_CODECS, this.onBufferCodecs, this), t.off(D.Events.BUFFER_EOS, this.onBufferEos, this), t.off(D.Events.BUFFER_FLUSHING, this.onBufferFlushing, this), t.off(D.Events.LEVEL_UPDATED, this.onLevelUpdated, this), t.off(D.Events.FRAG_PARSED, this.onFragParsed, this), t.off(D.Events.FRAG_CHANGED, this.onFragChanged, this);
          }, v._initSourceBuffer = function() {
            this.sourceBuffer = {}, this.operationQueue = new m.default(this.sourceBuffer), this.listeners = {
              audio: [],
              video: [],
              audiovideo: []
            };
          }, v.onManifestParsed = function(t, r) {
            var e = 2;
            (r.audio && !r.video || !r.altAudio) && (e = 1), this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = e, this.details = null, A.logger.log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected");
          }, v.onMediaAttaching = function(t, r) {
            var e = this.media = r.media;
            if (e && S) {
              var f = this.mediaSource = new S();
              f.addEventListener("sourceopen", this._onMediaSourceOpen), f.addEventListener("sourceended", this._onMediaSourceEnded), f.addEventListener("sourceclose", this._onMediaSourceClose), e.src = self.URL.createObjectURL(f), this._objectUrl = e.src;
            }
          }, v.onMediaDetaching = function() {
            var t = this.media, r = this.mediaSource, e = this._objectUrl;
            if (r) {
              if (A.logger.log("[buffer-controller]: media source detaching"), r.readyState === "open")
                try {
                  r.endOfStream();
                } catch (f) {
                  A.logger.warn("[buffer-controller]: onMediaDetaching: " + f.message + " while calling endOfStream");
                }
              this.onBufferReset(), r.removeEventListener("sourceopen", this._onMediaSourceOpen), r.removeEventListener("sourceended", this._onMediaSourceEnded), r.removeEventListener("sourceclose", this._onMediaSourceClose), t && (e && self.URL.revokeObjectURL(e), t.src === e ? (t.removeAttribute("src"), t.load()) : A.logger.warn("[buffer-controller]: media.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.bufferCodecEventsExpected = this._bufferCodecEventsTotal, this.pendingTracks = {}, this.tracks = {};
            }
            this.hls.trigger(D.Events.MEDIA_DETACHED, void 0);
          }, v.onBufferReset = function() {
            var t = this;
            this.getSourceBufferTypes().forEach(function(r) {
              var e = t.sourceBuffer[r];
              try {
                e && (t.removeBufferListeners(r), t.mediaSource && t.mediaSource.removeSourceBuffer(e), t.sourceBuffer[r] = void 0);
              } catch (f) {
                A.logger.warn("[buffer-controller]: Failed to reset the " + r + " buffer", f);
              }
            }), this._initSourceBuffer();
          }, v.onBufferCodecs = function(t, r) {
            var e = this, f = this.getSourceBufferTypes().length;
            Object.keys(r).forEach(function(s) {
              if (f) {
                var i = e.tracks[s];
                if (i && typeof i.buffer.changeType == "function") {
                  var o = r[s], c = o.codec, h = o.levelCodec, u = o.container, a = (i.levelCodec || i.codec).replace(p, "$1"), l = (h || c).replace(p, "$1");
                  if (a !== l) {
                    var d = u + ";codecs=" + (h || c);
                    e.appendChangeType(s, d);
                  }
                }
              } else
                e.pendingTracks[s] = r[s];
            }), !f && (this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0), this.mediaSource && this.mediaSource.readyState === "open" && this.checkPendingTracks());
          }, v.appendChangeType = function(t, r) {
            var e = this, f = this.operationQueue, s = {
              execute: function() {
                var o = e.sourceBuffer[t];
                o && (A.logger.log("[buffer-controller]: changing " + t + " sourceBuffer type to " + r), o.changeType(r)), f.shiftAndExecuteNext(t);
              },
              onStart: function() {
              },
              onComplete: function() {
              },
              onError: function(o) {
                A.logger.warn("[buffer-controller]: Failed to change " + t + " SourceBuffer type", o);
              }
            };
            f.append(s, t);
          }, v.onBufferAppending = function(t, r) {
            var e = this, f = this.hls, s = this.operationQueue, i = this.tracks, o = r.data, c = r.type, h = r.frag, u = r.part, a = r.chunkMeta, l = a.buffering[c], d = self.performance.now();
            l.start = d;
            var g = h.stats.buffering, x = u ? u.stats.buffering : null;
            g.start === 0 && (g.start = d), x && x.start === 0 && (x.start = d);
            var R = i.audio, P = c === "audio" && a.id === 1 && (R == null ? void 0 : R.container) === "audio/mpeg", _ = {
              execute: function() {
                if (l.executeStart = self.performance.now(), P) {
                  var B = e.sourceBuffer[c];
                  if (B) {
                    var U = h.start - B.timestampOffset;
                    Math.abs(U) >= 0.1 && (A.logger.log("[buffer-controller]: Updating audio SourceBuffer timestampOffset to " + h.start + " (delta: " + U + ") sn: " + h.sn + ")"), B.timestampOffset = h.start);
                  }
                }
                e.appendExecutor(o, c);
              },
              onStart: function() {
              },
              onComplete: function() {
                var B = self.performance.now();
                l.executeEnd = l.end = B, g.first === 0 && (g.first = B), x && x.first === 0 && (x.first = B);
                var U = e.sourceBuffer, N = {};
                for (var k in U)
                  N[k] = I.BufferHelper.getBuffered(U[k]);
                e.appendError = 0, e.hls.trigger(D.Events.BUFFER_APPENDED, {
                  type: c,
                  frag: h,
                  part: u,
                  chunkMeta: a,
                  parent: h.type,
                  timeRanges: N
                });
              },
              onError: function(B) {
                A.logger.error("[buffer-controller]: Error encountered while trying to append to the " + c + " SourceBuffer", B);
                var U = {
                  type: b.ErrorTypes.MEDIA_ERROR,
                  parent: h.type,
                  details: b.ErrorDetails.BUFFER_APPEND_ERROR,
                  err: B,
                  fatal: !1
                };
                B.code === DOMException.QUOTA_EXCEEDED_ERR ? U.details = b.ErrorDetails.BUFFER_FULL_ERROR : (e.appendError++, U.details = b.ErrorDetails.BUFFER_APPEND_ERROR, e.appendError > f.config.appendErrorMaxRetry && (A.logger.error("[buffer-controller]: Failed " + f.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"), U.fatal = !0)), f.trigger(D.Events.ERROR, U);
              }
            };
            s.append(_, c);
          }, v.onBufferFlushing = function(t, r) {
            var e = this, f = this.operationQueue, s = function(o) {
              return {
                execute: e.removeExecutor.bind(e, o, r.startOffset, r.endOffset),
                onStart: function() {
                },
                onComplete: function() {
                  e.hls.trigger(D.Events.BUFFER_FLUSHED, {
                    type: o
                  });
                },
                onError: function(h) {
                  A.logger.warn("[buffer-controller]: Failed to remove from " + o + " SourceBuffer", h);
                }
              };
            };
            r.type ? f.append(s(r.type), r.type) : this.getSourceBufferTypes().forEach(function(i) {
              f.append(s(i), i);
            });
          }, v.onFragParsed = function(t, r) {
            var e = this, f = r.frag, s = r.part, i = [], o = s ? s.elementaryStreams : f.elementaryStreams;
            o[L.ElementaryStreamTypes.AUDIOVIDEO] ? i.push("audiovideo") : (o[L.ElementaryStreamTypes.AUDIO] && i.push("audio"), o[L.ElementaryStreamTypes.VIDEO] && i.push("video"));
            var c = function() {
              var u = self.performance.now();
              f.stats.buffering.end = u, s && (s.stats.buffering.end = u);
              var a = s ? s.stats : f.stats;
              e.hls.trigger(D.Events.FRAG_BUFFERED, {
                frag: f,
                part: s,
                stats: a,
                id: f.type
              });
            };
            i.length === 0 && A.logger.warn("Fragments must have at least one ElementaryStreamType set. type: " + f.type + " level: " + f.level + " sn: " + f.sn), this.blockBuffers(c, i);
          }, v.onFragChanged = function(t, r) {
            this.flushBackBuffer();
          }, v.onBufferEos = function(t, r) {
            var e = this, f = this.getSourceBufferTypes().reduce(function(s, i) {
              var o = e.sourceBuffer[i];
              return (!r.type || r.type === i) && o && !o.ended && (o.ended = !0, A.logger.log("[buffer-controller]: " + i + " sourceBuffer now EOS")), s && !!(!o || o.ended);
            }, !0);
            f && this.blockBuffers(function() {
              var s = e.mediaSource;
              !s || s.readyState !== "open" || s.endOfStream();
            });
          }, v.onLevelUpdated = function(t, r) {
            var e = r.details;
            !e.fragments.length || (this.details = e, this.getSourceBufferTypes().length ? this.blockBuffers(this.updateMediaElementDuration.bind(this)) : this.updateMediaElementDuration());
          }, v.flushBackBuffer = function() {
            var t = this.hls, r = this.details, e = this.media, f = this.sourceBuffer;
            if (!(!e || r === null)) {
              var s = this.getSourceBufferTypes();
              if (!!s.length) {
                var i = r.live && t.config.liveBackBufferLength !== null ? t.config.liveBackBufferLength : t.config.backBufferLength;
                if (!(!Object(C.isFiniteNumber)(i) || i < 0)) {
                  var o = e.currentTime, c = r.levelTargetDuration, h = Math.max(i, c), u = Math.floor(o / c) * c - h;
                  s.forEach(function(a) {
                    var l = f[a];
                    if (l) {
                      var d = I.BufferHelper.getBuffered(l);
                      d.length > 0 && u > d.start(0) && (t.trigger(D.Events.BACK_BUFFER_REACHED, {
                        bufferEnd: u
                      }), r.live && t.trigger(D.Events.LIVE_BACK_BUFFER_REACHED, {
                        bufferEnd: u
                      }), t.trigger(D.Events.BUFFER_FLUSHING, {
                        startOffset: 0,
                        endOffset: u,
                        type: a
                      }));
                    }
                  });
                }
              }
            }
          }, v.updateMediaElementDuration = function() {
            if (!(!this.details || !this.media || !this.mediaSource || this.mediaSource.readyState !== "open")) {
              var t = this.details, r = this.hls, e = this.media, f = this.mediaSource, s = t.fragments[0].start + t.totalduration, i = e.duration, o = Object(C.isFiniteNumber)(f.duration) ? f.duration : 0;
              t.live && r.config.liveDurationInfinity ? (A.logger.log("[buffer-controller]: Media Source duration is set to Infinity"), f.duration = 1 / 0, this.updateSeekableRange(t)) : (s > o && s > i || !Object(C.isFiniteNumber)(i)) && (A.logger.log("[buffer-controller]: Updating Media Source duration to " + s.toFixed(3)), f.duration = s);
            }
          }, v.updateSeekableRange = function(t) {
            var r = this.mediaSource, e = t.fragments, f = e.length;
            if (f && t.live && r !== null && r !== void 0 && r.setLiveSeekableRange) {
              var s = Math.max(0, e[0].start), i = Math.max(s, s + t.totalduration);
              r.setLiveSeekableRange(s, i);
            }
          }, v.checkPendingTracks = function() {
            var t = this.bufferCodecEventsExpected, r = this.operationQueue, e = this.pendingTracks, f = Object.keys(e).length;
            if (f && !t || f === 2) {
              this.createSourceBuffers(e), this.pendingTracks = {};
              var s = this.getSourceBufferTypes();
              if (s.length === 0) {
                this.hls.trigger(D.Events.ERROR, {
                  type: b.ErrorTypes.MEDIA_ERROR,
                  details: b.ErrorDetails.BUFFER_INCOMPATIBLE_CODECS_ERROR,
                  fatal: !0,
                  reason: "could not create source buffer for media codec(s)"
                });
                return;
              }
              s.forEach(function(i) {
                r.executeNext(i);
              });
            }
          }, v.createSourceBuffers = function(t) {
            var r = this.sourceBuffer, e = this.mediaSource;
            if (!e)
              throw Error("createSourceBuffers called when mediaSource was null");
            var f = 0;
            for (var s in t)
              if (!r[s]) {
                var i = t[s];
                if (!i)
                  throw Error("source buffer exists for track " + s + ", however track does not");
                var o = i.levelCodec || i.codec, c = i.container + ";codecs=" + o;
                A.logger.log("[buffer-controller]: creating sourceBuffer(" + c + ")");
                try {
                  var h = r[s] = e.addSourceBuffer(c), u = s;
                  this.addBufferListener(u, "updatestart", this._onSBUpdateStart), this.addBufferListener(u, "updateend", this._onSBUpdateEnd), this.addBufferListener(u, "error", this._onSBUpdateError), this.tracks[s] = {
                    buffer: h,
                    codec: o,
                    container: i.container,
                    levelCodec: i.levelCodec,
                    id: i.id
                  }, f++;
                } catch (a) {
                  A.logger.error("[buffer-controller]: error while trying to add sourceBuffer: " + a.message), this.hls.trigger(D.Events.ERROR, {
                    type: b.ErrorTypes.MEDIA_ERROR,
                    details: b.ErrorDetails.BUFFER_ADD_CODEC_ERROR,
                    fatal: !1,
                    error: a,
                    mimeType: c
                  });
                }
              }
            f && this.hls.trigger(D.Events.BUFFER_CREATED, {
              tracks: this.tracks
            });
          }, v._onSBUpdateStart = function(t) {
            var r = this.operationQueue, e = r.current(t);
            e.onStart();
          }, v._onSBUpdateEnd = function(t) {
            var r = this.operationQueue, e = r.current(t);
            e.onComplete(), r.shiftAndExecuteNext(t);
          }, v._onSBUpdateError = function(t, r) {
            A.logger.error("[buffer-controller]: " + t + " SourceBuffer error", r), this.hls.trigger(D.Events.ERROR, {
              type: b.ErrorTypes.MEDIA_ERROR,
              details: b.ErrorDetails.BUFFER_APPENDING_ERROR,
              fatal: !1
            });
            var e = this.operationQueue.current(t);
            e && e.onError(r);
          }, v.removeExecutor = function(t, r, e) {
            var f = this.media, s = this.mediaSource, i = this.operationQueue, o = this.sourceBuffer, c = o[t];
            if (!f || !s || !c) {
              A.logger.warn("[buffer-controller]: Attempting to remove from the " + t + " SourceBuffer, but it does not exist"), i.shiftAndExecuteNext(t);
              return;
            }
            var h = Object(C.isFiniteNumber)(f.duration) ? f.duration : 1 / 0, u = Object(C.isFiniteNumber)(s.duration) ? s.duration : 1 / 0, a = Math.max(0, r), l = Math.min(e, h, u);
            l > a ? (A.logger.log("[buffer-controller]: Removing [" + a + "," + l + "] from the " + t + " SourceBuffer"), console.assert(!c.updating, t + " sourceBuffer must not be updating"), c.remove(a, l)) : i.shiftAndExecuteNext(t);
          }, v.appendExecutor = function(t, r) {
            var e = this.operationQueue, f = this.sourceBuffer, s = f[r];
            if (!s) {
              A.logger.warn("[buffer-controller]: Attempting to append to the " + r + " SourceBuffer, but it does not exist"), e.shiftAndExecuteNext(r);
              return;
            }
            s.ended = !1, console.assert(!s.updating, r + " sourceBuffer must not be updating"), s.appendBuffer(t);
          }, v.blockBuffers = function(t, r) {
            var e = this;
            if (r === void 0 && (r = this.getSourceBufferTypes()), !r.length) {
              A.logger.log("[buffer-controller]: Blocking operation requested, but no SourceBuffers exist"), Promise.resolve(t);
              return;
            }
            var f = this.operationQueue, s = r.map(function(i) {
              return f.appendBlocker(i);
            });
            Promise.all(s).then(function() {
              t(), r.forEach(function(i) {
                var o = e.sourceBuffer[i];
                (!o || !o.updating) && f.shiftAndExecuteNext(i);
              });
            });
          }, v.getSourceBufferTypes = function() {
            return Object.keys(this.sourceBuffer);
          }, v.addBufferListener = function(t, r, e) {
            var f = this.sourceBuffer[t];
            if (!!f) {
              var s = e.bind(this, t);
              this.listeners[t].push({
                event: r,
                listener: s
              }), f.addEventListener(r, s);
            }
          }, v.removeBufferListeners = function(t) {
            var r = this.sourceBuffer[t];
            !r || this.listeners[t].forEach(function(e) {
              r.removeEventListener(e.event, e.listener);
            });
          }, E;
        }();
      },
      "./src/controller/buffer-operation-queue.ts": function(W, M, y) {
        y.r(M), y.d(M, "default", function() {
          return D;
        });
        var C = y("./src/utils/logger.ts"), D = /* @__PURE__ */ function() {
          function A(I) {
            this.buffers = void 0, this.queues = {
              video: [],
              audio: [],
              audiovideo: []
            }, this.buffers = I;
          }
          var b = A.prototype;
          return b.append = function(O, L) {
            var m = this.queues[L];
            m.push(O), m.length === 1 && this.buffers[L] && this.executeNext(L);
          }, b.insertAbort = function(O, L) {
            var m = this.queues[L];
            m.unshift(O), this.executeNext(L);
          }, b.appendBlocker = function(O) {
            var L, m = new Promise(function(p) {
              L = p;
            }), S = {
              execute: L,
              onStart: function() {
              },
              onComplete: function() {
              },
              onError: function() {
              }
            };
            return this.append(S, O), m;
          }, b.executeNext = function(O) {
            var L = this.buffers, m = this.queues, S = L[O], p = m[O];
            if (p.length) {
              var T = p[0];
              try {
                T.execute();
              } catch (E) {
                C.logger.warn("[buffer-operation-queue]: Unhandled exception executing the current operation"), T.onError(E), (!S || !S.updating) && (p.shift(), this.executeNext(O));
              }
            }
          }, b.shiftAndExecuteNext = function(O) {
            this.queues[O].shift(), this.executeNext(O);
          }, b.current = function(O) {
            return this.queues[O][0];
          }, A;
        }();
      },
      "./src/controller/cap-level-controller.ts": function(W, M, y) {
        y.r(M);
        var C = y("./src/events.ts");
        function D(I, O) {
          for (var L = 0; L < O.length; L++) {
            var m = O[L];
            m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(I, m.key, m);
          }
        }
        function A(I, O, L) {
          return O && D(I.prototype, O), L && D(I, L), I;
        }
        var b = /* @__PURE__ */ function() {
          function I(L) {
            this.autoLevelCapping = void 0, this.firstLevel = void 0, this.media = void 0, this.restrictedLevels = void 0, this.timer = void 0, this.hls = void 0, this.streamController = void 0, this.clientRect = void 0, this.hls = L, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.firstLevel = -1, this.media = null, this.restrictedLevels = [], this.timer = void 0, this.clientRect = null, this.registerListeners();
          }
          var O = I.prototype;
          return O.setStreamController = function(m) {
            this.streamController = m;
          }, O.destroy = function() {
            this.unregisterListener(), this.hls.config.capLevelToPlayerSize && this.stopCapping(), this.media = null, this.clientRect = null, this.hls = this.streamController = null;
          }, O.registerListeners = function() {
            var m = this.hls;
            m.on(C.Events.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), m.on(C.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), m.on(C.Events.MANIFEST_PARSED, this.onManifestParsed, this), m.on(C.Events.BUFFER_CODECS, this.onBufferCodecs, this), m.on(C.Events.MEDIA_DETACHING, this.onMediaDetaching, this);
          }, O.unregisterListener = function() {
            var m = this.hls;
            m.off(C.Events.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), m.off(C.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), m.off(C.Events.MANIFEST_PARSED, this.onManifestParsed, this), m.off(C.Events.BUFFER_CODECS, this.onBufferCodecs, this), m.off(C.Events.MEDIA_DETACHING, this.onMediaDetaching, this);
          }, O.onFpsDropLevelCapping = function(m, S) {
            I.isLevelAllowed(S.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(S.droppedLevel);
          }, O.onMediaAttaching = function(m, S) {
            this.media = S.media instanceof HTMLVideoElement ? S.media : null;
          }, O.onManifestParsed = function(m, S) {
            var p = this.hls;
            this.restrictedLevels = [], this.firstLevel = S.firstLevel, p.config.capLevelToPlayerSize && S.video && this.startCapping();
          }, O.onBufferCodecs = function(m, S) {
            var p = this.hls;
            p.config.capLevelToPlayerSize && S.video && this.startCapping();
          }, O.onMediaDetaching = function() {
            this.stopCapping();
          }, O.detectPlayerSize = function() {
            if (this.media && this.mediaHeight > 0 && this.mediaWidth > 0) {
              var m = this.hls.levels;
              if (m.length) {
                var S = this.hls;
                S.autoLevelCapping = this.getMaxLevel(m.length - 1), S.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = S.autoLevelCapping;
              }
            }
          }, O.getMaxLevel = function(m) {
            var S = this, p = this.hls.levels;
            if (!p.length)
              return -1;
            var T = p.filter(function(E, v) {
              return I.isLevelAllowed(v, S.restrictedLevels) && v <= m;
            });
            return this.clientRect = null, I.getMaxLevelByMediaSize(T, this.mediaWidth, this.mediaHeight);
          }, O.startCapping = function() {
            this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.hls.firstLevel = this.getMaxLevel(this.firstLevel), self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize());
          }, O.stopCapping = function() {
            this.restrictedLevels = [], this.firstLevel = -1, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (self.clearInterval(this.timer), this.timer = void 0);
          }, O.getDimensions = function() {
            if (this.clientRect)
              return this.clientRect;
            var m = this.media, S = {
              width: 0,
              height: 0
            };
            if (m) {
              var p = m.getBoundingClientRect();
              S.width = p.width, S.height = p.height, !S.width && !S.height && (S.width = p.right - p.left || m.width || 0, S.height = p.bottom - p.top || m.height || 0);
            }
            return this.clientRect = S, S;
          }, I.isLevelAllowed = function(m, S) {
            return S === void 0 && (S = []), S.indexOf(m) === -1;
          }, I.getMaxLevelByMediaSize = function(m, S, p) {
            if (!m || !m.length)
              return -1;
            for (var T = function(r, e) {
              return e ? r.width !== e.width || r.height !== e.height : !0;
            }, E = m.length - 1, v = 0; v < m.length; v += 1) {
              var n = m[v];
              if ((n.width >= S || n.height >= p) && T(n, m[v + 1])) {
                E = v;
                break;
              }
            }
            return E;
          }, A(I, [{
            key: "mediaWidth",
            get: function() {
              return this.getDimensions().width * I.contentScaleFactor;
            }
          }, {
            key: "mediaHeight",
            get: function() {
              return this.getDimensions().height * I.contentScaleFactor;
            }
          }], [{
            key: "contentScaleFactor",
            get: function() {
              var m = 1;
              try {
                m = self.devicePixelRatio;
              } catch {
              }
              return m;
            }
          }]), I;
        }();
        M.default = b;
      },
      "./src/controller/cmcd-controller.ts": function(W, M, y) {
        y.r(M), y.d(M, "default", function() {
          return T;
        });
        var C = y("./src/events.ts"), D = y("./src/types/cmcd.ts"), A = y("./src/utils/buffer-helper.ts"), b = y("./src/utils/logger.ts");
        function I(E, v) {
          for (var n = 0; n < v.length; n++) {
            var t = v[n];
            t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(E, t.key, t);
          }
        }
        function O(E, v, n) {
          return v && I(E.prototype, v), n && I(E, n), E;
        }
        function L(E, v) {
          var n = typeof Symbol < "u" && E[Symbol.iterator] || E["@@iterator"];
          if (n)
            return (n = n.call(E)).next.bind(n);
          if (Array.isArray(E) || (n = m(E)) || v && E && typeof E.length == "number") {
            n && (E = n);
            var t = 0;
            return function() {
              return t >= E.length ? { done: !0 } : { done: !1, value: E[t++] };
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function m(E, v) {
          if (!!E) {
            if (typeof E == "string")
              return S(E, v);
            var n = Object.prototype.toString.call(E).slice(8, -1);
            if (n === "Object" && E.constructor && (n = E.constructor.name), n === "Map" || n === "Set")
              return Array.from(E);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return S(E, v);
          }
        }
        function S(E, v) {
          (v == null || v > E.length) && (v = E.length);
          for (var n = 0, t = new Array(v); n < v; n++)
            t[n] = E[n];
          return t;
        }
        function p() {
          return p = Object.assign || function(E) {
            for (var v = 1; v < arguments.length; v++) {
              var n = arguments[v];
              for (var t in n)
                Object.prototype.hasOwnProperty.call(n, t) && (E[t] = n[t]);
            }
            return E;
          }, p.apply(this, arguments);
        }
        var T = /* @__PURE__ */ function() {
          function E(n) {
            var t = this;
            this.hls = void 0, this.config = void 0, this.media = void 0, this.sid = void 0, this.cid = void 0, this.useHeaders = !1, this.initialized = !1, this.starved = !1, this.buffering = !0, this.audioBuffer = void 0, this.videoBuffer = void 0, this.onWaiting = function() {
              t.initialized && (t.starved = !0), t.buffering = !0;
            }, this.onPlaying = function() {
              t.initialized || (t.initialized = !0), t.buffering = !1;
            }, this.applyPlaylistData = function(f) {
              try {
                t.apply(f, {
                  ot: D.CMCDObjectType.MANIFEST,
                  su: !t.initialized
                });
              } catch (s) {
                b.logger.warn("Could not generate manifest CMCD data.", s);
              }
            }, this.applyFragmentData = function(f) {
              try {
                var s = f.frag, i = t.hls.levels[s.level], o = t.getObjectType(s), c = {
                  d: s.duration * 1e3,
                  ot: o
                };
                (o === D.CMCDObjectType.VIDEO || o === D.CMCDObjectType.AUDIO || o == D.CMCDObjectType.MUXED) && (c.br = i.bitrate / 1e3, c.tb = t.getTopBandwidth(o) / 1e3, c.bl = t.getBufferLength(o)), t.apply(f, c);
              } catch (h) {
                b.logger.warn("Could not generate segment CMCD data.", h);
              }
            }, this.hls = n;
            var r = this.config = n.config, e = r.cmcd;
            e != null && (r.pLoader = this.createPlaylistLoader(), r.fLoader = this.createFragmentLoader(), this.sid = e.sessionId || E.uuid(), this.cid = e.contentId, this.useHeaders = e.useHeaders === !0, this.registerListeners());
          }
          var v = E.prototype;
          return v.registerListeners = function() {
            var t = this.hls;
            t.on(C.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(C.Events.MEDIA_DETACHED, this.onMediaDetached, this), t.on(C.Events.BUFFER_CREATED, this.onBufferCreated, this);
          }, v.unregisterListeners = function() {
            var t = this.hls;
            t.off(C.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(C.Events.MEDIA_DETACHED, this.onMediaDetached, this), t.off(C.Events.BUFFER_CREATED, this.onBufferCreated, this), this.onMediaDetached();
          }, v.destroy = function() {
            this.unregisterListeners(), this.hls = this.config = this.audioBuffer = this.videoBuffer = null;
          }, v.onMediaAttached = function(t, r) {
            this.media = r.media, this.media.addEventListener("waiting", this.onWaiting), this.media.addEventListener("playing", this.onPlaying);
          }, v.onMediaDetached = function() {
            !this.media || (this.media.removeEventListener("waiting", this.onWaiting), this.media.removeEventListener("playing", this.onPlaying), this.media = null);
          }, v.onBufferCreated = function(t, r) {
            var e, f;
            this.audioBuffer = (e = r.tracks.audio) === null || e === void 0 ? void 0 : e.buffer, this.videoBuffer = (f = r.tracks.video) === null || f === void 0 ? void 0 : f.buffer;
          }, v.createData = function() {
            var t;
            return {
              v: D.CMCDVersion,
              sf: D.CMCDStreamingFormat.HLS,
              sid: this.sid,
              cid: this.cid,
              pr: (t = this.media) === null || t === void 0 ? void 0 : t.playbackRate,
              mtp: this.hls.bandwidthEstimate / 1e3
            };
          }, v.apply = function(t, r) {
            r === void 0 && (r = {}), p(r, this.createData());
            var e = r.ot === D.CMCDObjectType.INIT || r.ot === D.CMCDObjectType.VIDEO || r.ot === D.CMCDObjectType.MUXED;
            if (this.starved && e && (r.bs = !0, r.su = !0, this.starved = !1), r.su == null && (r.su = this.buffering), this.useHeaders) {
              var f = E.toHeaders(r);
              if (!Object.keys(f).length)
                return;
              t.headers || (t.headers = {}), p(t.headers, f);
            } else {
              var s = E.toQuery(r);
              if (!s)
                return;
              t.url = E.appendQueryToUri(t.url, s);
            }
          }, v.getObjectType = function(t) {
            var r = t.type;
            if (r === "subtitle")
              return D.CMCDObjectType.TIMED_TEXT;
            if (t.sn === "initSegment")
              return D.CMCDObjectType.INIT;
            if (r === "audio")
              return D.CMCDObjectType.AUDIO;
            if (r === "main")
              return this.hls.audioTracks.length ? D.CMCDObjectType.VIDEO : D.CMCDObjectType.MUXED;
          }, v.getTopBandwidth = function(t) {
            var r = 0, e, f = this.hls;
            if (t === D.CMCDObjectType.AUDIO)
              e = f.audioTracks;
            else {
              var s = f.maxAutoLevel, i = s > -1 ? s + 1 : f.levels.length;
              e = f.levels.slice(0, i);
            }
            for (var o = L(e), c; !(c = o()).done; ) {
              var h = c.value;
              h.bitrate > r && (r = h.bitrate);
            }
            return r > 0 ? r : NaN;
          }, v.getBufferLength = function(t) {
            var r = this.hls.media, e = t === D.CMCDObjectType.AUDIO ? this.audioBuffer : this.videoBuffer;
            if (!e || !r)
              return NaN;
            var f = A.BufferHelper.bufferInfo(e, r.currentTime, this.config.maxBufferHole);
            return f.len * 1e3;
          }, v.createPlaylistLoader = function() {
            var t = this.config.pLoader, r = this.applyPlaylistData, e = t || this.config.loader;
            return /* @__PURE__ */ function() {
              function f(i) {
                this.loader = void 0, this.loader = new e(i);
              }
              var s = f.prototype;
              return s.destroy = function() {
                this.loader.destroy();
              }, s.abort = function() {
                this.loader.abort();
              }, s.load = function(o, c, h) {
                r(o), this.loader.load(o, c, h);
              }, O(f, [{
                key: "stats",
                get: function() {
                  return this.loader.stats;
                }
              }, {
                key: "context",
                get: function() {
                  return this.loader.context;
                }
              }]), f;
            }();
          }, v.createFragmentLoader = function() {
            var t = this.config.fLoader, r = this.applyFragmentData, e = t || this.config.loader;
            return /* @__PURE__ */ function() {
              function f(i) {
                this.loader = void 0, this.loader = new e(i);
              }
              var s = f.prototype;
              return s.destroy = function() {
                this.loader.destroy();
              }, s.abort = function() {
                this.loader.abort();
              }, s.load = function(o, c, h) {
                r(o), this.loader.load(o, c, h);
              }, O(f, [{
                key: "stats",
                get: function() {
                  return this.loader.stats;
                }
              }, {
                key: "context",
                get: function() {
                  return this.loader.context;
                }
              }]), f;
            }();
          }, E.uuid = function() {
            var t = URL.createObjectURL(new Blob()), r = t.toString();
            return URL.revokeObjectURL(t), r.substr(r.lastIndexOf("/") + 1);
          }, E.serialize = function(t) {
            for (var r = [], e = function(P) {
              return !Number.isNaN(P) && P != null && P !== "" && P !== !1;
            }, f = function(P) {
              return Math.round(P);
            }, s = function(P) {
              return f(P / 100) * 100;
            }, i = function(P) {
              return encodeURIComponent(P);
            }, o = {
              br: f,
              d: f,
              bl: s,
              dl: s,
              mtp: s,
              nor: i,
              rtp: s,
              tb: f
            }, c = Object.keys(t || {}).sort(), h = L(c), u; !(u = h()).done; ) {
              var a = u.value, l = t[a];
              if (!!e(l) && !(a === "v" && l === 1) && !(a == "pr" && l === 1)) {
                var d = o[a];
                d && (l = d(l));
                var g = typeof l, x = void 0;
                a === "ot" || a === "sf" || a === "st" ? x = a + "=" + l : g === "boolean" ? x = a : g === "number" ? x = a + "=" + l : x = a + "=" + JSON.stringify(l), r.push(x);
              }
            }
            return r.join(",");
          }, E.toHeaders = function(t) {
            for (var r = Object.keys(t), e = {}, f = ["Object", "Request", "Session", "Status"], s = [{}, {}, {}, {}], i = {
              br: 0,
              d: 0,
              ot: 0,
              tb: 0,
              bl: 1,
              dl: 1,
              mtp: 1,
              nor: 1,
              nrr: 1,
              su: 1,
              cid: 2,
              pr: 2,
              sf: 2,
              sid: 2,
              st: 2,
              v: 2,
              bs: 3,
              rtp: 3
            }, o = 0, c = r; o < c.length; o++) {
              var h = c[o], u = i[h] != null ? i[h] : 1;
              s[u][h] = t[h];
            }
            for (var a = 0; a < s.length; a++) {
              var l = E.serialize(s[a]);
              l && (e["CMCD-" + f[a]] = l);
            }
            return e;
          }, E.toQuery = function(t) {
            return "CMCD=" + encodeURIComponent(E.serialize(t));
          }, E.appendQueryToUri = function(t, r) {
            if (!r)
              return t;
            var e = t.includes("?") ? "&" : "?";
            return "" + t + e + r;
          }, E;
        }();
      },
      "./src/controller/eme-controller.ts": function(W, M, y) {
        y.r(M);
        var C = y("./src/events.ts"), D = y("./src/errors.ts"), A = y("./src/utils/logger.ts"), b = y("./src/utils/mediakeys-helper.ts");
        function I(T, E) {
          for (var v = 0; v < E.length; v++) {
            var n = E[v];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(T, n.key, n);
          }
        }
        function O(T, E, v) {
          return E && I(T.prototype, E), v && I(T, v), T;
        }
        var L = 3, m = function(E, v, n) {
          var t = {
            audioCapabilities: [],
            videoCapabilities: []
          };
          return E.forEach(function(r) {
            t.audioCapabilities.push({
              contentType: 'audio/mp4; codecs="' + r + '"',
              robustness: n.audioRobustness || ""
            });
          }), v.forEach(function(r) {
            t.videoCapabilities.push({
              contentType: 'video/mp4; codecs="' + r + '"',
              robustness: n.videoRobustness || ""
            });
          }), [t];
        }, S = function(E, v, n, t) {
          switch (E) {
            case b.KeySystems.WIDEVINE:
              return m(v, n, t);
            default:
              throw new Error("Unknown key-system: " + E);
          }
        }, p = /* @__PURE__ */ function() {
          function T(v) {
            this.hls = void 0, this._widevineLicenseUrl = void 0, this._licenseXhrSetup = void 0, this._licenseResponseCallback = void 0, this._emeEnabled = void 0, this._requestMediaKeySystemAccess = void 0, this._drmSystemOptions = void 0, this._config = void 0, this._mediaKeysList = [], this._media = null, this._hasSetMediaKeys = !1, this._requestLicenseFailureCount = 0, this.mediaKeysPromise = null, this._onMediaEncrypted = this.onMediaEncrypted.bind(this), this.hls = v, this._config = v.config, this._widevineLicenseUrl = this._config.widevineLicenseUrl, this._licenseXhrSetup = this._config.licenseXhrSetup, this._licenseResponseCallback = this._config.licenseResponseCallback, this._emeEnabled = this._config.emeEnabled, this._requestMediaKeySystemAccess = this._config.requestMediaKeySystemAccessFunc, this._drmSystemOptions = this._config.drmSystemOptions, this._registerListeners();
          }
          var E = T.prototype;
          return E.destroy = function() {
            this._unregisterListeners(), this.hls = this._onMediaEncrypted = null, this._requestMediaKeySystemAccess = null;
          }, E._registerListeners = function() {
            this.hls.on(C.Events.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(C.Events.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.on(C.Events.MANIFEST_PARSED, this.onManifestParsed, this);
          }, E._unregisterListeners = function() {
            this.hls.off(C.Events.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(C.Events.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.off(C.Events.MANIFEST_PARSED, this.onManifestParsed, this);
          }, E.getLicenseServerUrl = function(n) {
            switch (n) {
              case b.KeySystems.WIDEVINE:
                if (!this._widevineLicenseUrl)
                  break;
                return this._widevineLicenseUrl;
            }
            throw new Error('no license server URL configured for key-system "' + n + '"');
          }, E._attemptKeySystemAccess = function(n, t, r) {
            var e = this, f = S(n, t, r, this._drmSystemOptions);
            A.logger.log("Requesting encrypted media key-system access");
            var s = this.requestMediaKeySystemAccess(n, f);
            this.mediaKeysPromise = s.then(function(i) {
              return e._onMediaKeySystemAccessObtained(n, i);
            }), s.catch(function(i) {
              A.logger.error('Failed to obtain key-system "' + n + '" access:', i);
            });
          }, E._onMediaKeySystemAccessObtained = function(n, t) {
            var r = this;
            A.logger.log('Access for key-system "' + n + '" obtained');
            var e = {
              mediaKeysSessionInitialized: !1,
              mediaKeySystemAccess: t,
              mediaKeySystemDomain: n
            };
            this._mediaKeysList.push(e);
            var f = Promise.resolve().then(function() {
              return t.createMediaKeys();
            }).then(function(s) {
              return e.mediaKeys = s, A.logger.log('Media-keys created for key-system "' + n + '"'), r._onMediaKeysCreated(), s;
            });
            return f.catch(function(s) {
              A.logger.error("Failed to create media-keys:", s);
            }), f;
          }, E._onMediaKeysCreated = function() {
            var n = this;
            this._mediaKeysList.forEach(function(t) {
              t.mediaKeysSession || (t.mediaKeysSession = t.mediaKeys.createSession(), n._onNewMediaKeySession(t.mediaKeysSession));
            });
          }, E._onNewMediaKeySession = function(n) {
            var t = this;
            A.logger.log("New key-system session " + n.sessionId), n.addEventListener("message", function(r) {
              t._onKeySessionMessage(n, r.message);
            }, !1);
          }, E._onKeySessionMessage = function(n, t) {
            A.logger.log("Got EME message event, creating license request"), this._requestLicense(t, function(r) {
              A.logger.log("Received license data (length: " + (r && r.byteLength) + "), updating key-session"), n.update(r);
            });
          }, E.onMediaEncrypted = function(n) {
            var t = this;
            if (A.logger.log('Media is encrypted using "' + n.initDataType + '" init data type'), !this.mediaKeysPromise) {
              A.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been requested"), this.hls.trigger(C.Events.ERROR, {
                type: D.ErrorTypes.KEY_SYSTEM_ERROR,
                details: D.ErrorDetails.KEY_SYSTEM_NO_KEYS,
                fatal: !0
              });
              return;
            }
            var r = function(f) {
              !t._media || (t._attemptSetMediaKeys(f), t._generateRequestWithPreferredKeySession(n.initDataType, n.initData));
            };
            this.mediaKeysPromise.then(r).catch(r);
          }, E._attemptSetMediaKeys = function(n) {
            if (!this._media)
              throw new Error("Attempted to set mediaKeys without first attaching a media element");
            if (!this._hasSetMediaKeys) {
              var t = this._mediaKeysList[0];
              if (!t || !t.mediaKeys) {
                A.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"), this.hls.trigger(C.Events.ERROR, {
                  type: D.ErrorTypes.KEY_SYSTEM_ERROR,
                  details: D.ErrorDetails.KEY_SYSTEM_NO_KEYS,
                  fatal: !0
                });
                return;
              }
              A.logger.log("Setting keys for encrypted media"), this._media.setMediaKeys(t.mediaKeys), this._hasSetMediaKeys = !0;
            }
          }, E._generateRequestWithPreferredKeySession = function(n, t) {
            var r = this, e = this._mediaKeysList[0];
            if (!e) {
              A.logger.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"), this.hls.trigger(C.Events.ERROR, {
                type: D.ErrorTypes.KEY_SYSTEM_ERROR,
                details: D.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                fatal: !0
              });
              return;
            }
            if (e.mediaKeysSessionInitialized) {
              A.logger.warn("Key-Session already initialized but requested again");
              return;
            }
            var f = e.mediaKeysSession;
            if (!f) {
              A.logger.error("Fatal: Media is encrypted but no key-session existing"), this.hls.trigger(C.Events.ERROR, {
                type: D.ErrorTypes.KEY_SYSTEM_ERROR,
                details: D.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                fatal: !0
              });
              return;
            }
            if (!t) {
              A.logger.warn("Fatal: initData required for generating a key session is null"), this.hls.trigger(C.Events.ERROR, {
                type: D.ErrorTypes.KEY_SYSTEM_ERROR,
                details: D.ErrorDetails.KEY_SYSTEM_NO_INIT_DATA,
                fatal: !0
              });
              return;
            }
            A.logger.log('Generating key-session request for "' + n + '" init data type'), e.mediaKeysSessionInitialized = !0, f.generateRequest(n, t).then(function() {
              A.logger.debug("Key-session generation succeeded");
            }).catch(function(s) {
              A.logger.error("Error generating key-session request:", s), r.hls.trigger(C.Events.ERROR, {
                type: D.ErrorTypes.KEY_SYSTEM_ERROR,
                details: D.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                fatal: !1
              });
            });
          }, E._createLicenseXhr = function(n, t, r) {
            var e = new XMLHttpRequest();
            e.responseType = "arraybuffer", e.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, e, n, t, r);
            var f = this._licenseXhrSetup;
            if (f)
              try {
                f.call(this.hls, e, n), f = void 0;
              } catch (s) {
                A.logger.error(s);
              }
            try {
              e.readyState || e.open("POST", n, !0), f && f.call(this.hls, e, n);
            } catch (s) {
              throw new Error("issue setting up KeySystem license XHR " + s);
            }
            return e;
          }, E._onLicenseRequestReadyStageChange = function(n, t, r, e) {
            switch (n.readyState) {
              case 4:
                if (n.status === 200) {
                  this._requestLicenseFailureCount = 0, A.logger.log("License request succeeded");
                  var f = n.response, s = this._licenseResponseCallback;
                  if (s)
                    try {
                      f = s.call(this.hls, n, t);
                    } catch (o) {
                      A.logger.error(o);
                    }
                  e(f);
                } else {
                  if (A.logger.error("License Request XHR failed (" + t + "). Status: " + n.status + " (" + n.statusText + ")"), this._requestLicenseFailureCount++, this._requestLicenseFailureCount > L) {
                    this.hls.trigger(C.Events.ERROR, {
                      type: D.ErrorTypes.KEY_SYSTEM_ERROR,
                      details: D.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                      fatal: !0
                    });
                    return;
                  }
                  var i = L - this._requestLicenseFailureCount + 1;
                  A.logger.warn("Retrying license request, " + i + " attempts left"), this._requestLicense(r, e);
                }
                break;
            }
          }, E._generateLicenseRequestChallenge = function(n, t) {
            switch (n.mediaKeySystemDomain) {
              case b.KeySystems.WIDEVINE:
                return t;
            }
            throw new Error("unsupported key-system: " + n.mediaKeySystemDomain);
          }, E._requestLicense = function(n, t) {
            A.logger.log("Requesting content license for key-system");
            var r = this._mediaKeysList[0];
            if (!r) {
              A.logger.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"), this.hls.trigger(C.Events.ERROR, {
                type: D.ErrorTypes.KEY_SYSTEM_ERROR,
                details: D.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                fatal: !0
              });
              return;
            }
            try {
              var e = this.getLicenseServerUrl(r.mediaKeySystemDomain), f = this._createLicenseXhr(e, n, t);
              A.logger.log("Sending license request to URL: " + e);
              var s = this._generateLicenseRequestChallenge(r, n);
              f.send(s);
            } catch (i) {
              A.logger.error("Failure requesting DRM license: " + i), this.hls.trigger(C.Events.ERROR, {
                type: D.ErrorTypes.KEY_SYSTEM_ERROR,
                details: D.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                fatal: !0
              });
            }
          }, E.onMediaAttached = function(n, t) {
            if (!!this._emeEnabled) {
              var r = t.media;
              this._media = r, r.addEventListener("encrypted", this._onMediaEncrypted);
            }
          }, E.onMediaDetached = function() {
            var n = this._media, t = this._mediaKeysList;
            !n || (n.removeEventListener("encrypted", this._onMediaEncrypted), this._media = null, this._mediaKeysList = [], Promise.all(t.map(function(r) {
              if (r.mediaKeysSession)
                return r.mediaKeysSession.close().catch(function() {
                });
            })).then(function() {
              return n.setMediaKeys(null);
            }).catch(function() {
            }));
          }, E.onManifestParsed = function(n, t) {
            if (!!this._emeEnabled) {
              var r = t.levels.map(function(f) {
                return f.audioCodec;
              }).filter(function(f) {
                return !!f;
              }), e = t.levels.map(function(f) {
                return f.videoCodec;
              }).filter(function(f) {
                return !!f;
              });
              this._attemptKeySystemAccess(b.KeySystems.WIDEVINE, r, e);
            }
          }, O(T, [{
            key: "requestMediaKeySystemAccess",
            get: function() {
              if (!this._requestMediaKeySystemAccess)
                throw new Error("No requestMediaKeySystemAccess function configured");
              return this._requestMediaKeySystemAccess;
            }
          }]), T;
        }();
        M.default = p;
      },
      "./src/controller/fps-controller.ts": function(W, M, y) {
        y.r(M);
        var C = y("./src/events.ts"), D = y("./src/utils/logger.ts"), A = /* @__PURE__ */ function() {
          function b(O) {
            this.hls = void 0, this.isVideoPlaybackQualityAvailable = !1, this.timer = void 0, this.media = null, this.lastTime = void 0, this.lastDroppedFrames = 0, this.lastDecodedFrames = 0, this.streamController = void 0, this.hls = O, this.registerListeners();
          }
          var I = b.prototype;
          return I.setStreamController = function(L) {
            this.streamController = L;
          }, I.registerListeners = function() {
            this.hls.on(C.Events.MEDIA_ATTACHING, this.onMediaAttaching, this);
          }, I.unregisterListeners = function() {
            this.hls.off(C.Events.MEDIA_ATTACHING, this.onMediaAttaching);
          }, I.destroy = function() {
            this.timer && clearInterval(this.timer), this.unregisterListeners(), this.isVideoPlaybackQualityAvailable = !1, this.media = null;
          }, I.onMediaAttaching = function(L, m) {
            var S = this.hls.config;
            if (S.capLevelOnFPSDrop) {
              var p = m.media instanceof self.HTMLVideoElement ? m.media : null;
              this.media = p, p && typeof p.getVideoPlaybackQuality == "function" && (this.isVideoPlaybackQualityAvailable = !0), self.clearInterval(this.timer), this.timer = self.setInterval(this.checkFPSInterval.bind(this), S.fpsDroppedMonitoringPeriod);
            }
          }, I.checkFPS = function(L, m, S) {
            var p = performance.now();
            if (m) {
              if (this.lastTime) {
                var T = p - this.lastTime, E = S - this.lastDroppedFrames, v = m - this.lastDecodedFrames, n = 1e3 * E / T, t = this.hls;
                if (t.trigger(C.Events.FPS_DROP, {
                  currentDropped: E,
                  currentDecoded: v,
                  totalDroppedFrames: S
                }), n > 0 && E > t.config.fpsDroppedMonitoringThreshold * v) {
                  var r = t.currentLevel;
                  D.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + r), r > 0 && (t.autoLevelCapping === -1 || t.autoLevelCapping >= r) && (r = r - 1, t.trigger(C.Events.FPS_DROP_LEVEL_CAPPING, {
                    level: r,
                    droppedLevel: t.currentLevel
                  }), t.autoLevelCapping = r, this.streamController.nextLevelSwitch());
                }
              }
              this.lastTime = p, this.lastDroppedFrames = S, this.lastDecodedFrames = m;
            }
          }, I.checkFPSInterval = function() {
            var L = this.media;
            if (L)
              if (this.isVideoPlaybackQualityAvailable) {
                var m = L.getVideoPlaybackQuality();
                this.checkFPS(L, m.totalVideoFrames, m.droppedVideoFrames);
              } else
                this.checkFPS(L, L.webkitDecodedFrameCount, L.webkitDroppedFrameCount);
          }, b;
        }();
        M.default = A;
      },
      "./src/controller/fragment-finders.ts": function(W, M, y) {
        y.r(M), y.d(M, "findFragmentByPDT", function() {
          return A;
        }), y.d(M, "findFragmentByPTS", function() {
          return b;
        }), y.d(M, "fragmentWithinToleranceTest", function() {
          return I;
        }), y.d(M, "pdtWithinToleranceTest", function() {
          return O;
        }), y.d(M, "findFragWithCC", function() {
          return L;
        });
        var C = y("./src/polyfills/number.ts"), D = y("./src/utils/binary-search.ts");
        function A(m, S, p) {
          if (S === null || !Array.isArray(m) || !m.length || !Object(C.isFiniteNumber)(S))
            return null;
          var T = m[0].programDateTime;
          if (S < (T || 0))
            return null;
          var E = m[m.length - 1].endProgramDateTime;
          if (S >= (E || 0))
            return null;
          p = p || 0;
          for (var v = 0; v < m.length; ++v) {
            var n = m[v];
            if (O(S, p, n))
              return n;
          }
          return null;
        }
        function b(m, S, p, T) {
          p === void 0 && (p = 0), T === void 0 && (T = 0);
          var E = null;
          if (m ? E = S[m.sn - S[0].sn + 1] || null : p === 0 && S[0].start === 0 && (E = S[0]), E && I(p, T, E) === 0)
            return E;
          var v = D.default.search(S, I.bind(null, p, T));
          return v || E;
        }
        function I(m, S, p) {
          m === void 0 && (m = 0), S === void 0 && (S = 0);
          var T = Math.min(S, p.duration + (p.deltaPTS ? p.deltaPTS : 0));
          return p.start + p.duration - T <= m ? 1 : p.start - T > m && p.start ? -1 : 0;
        }
        function O(m, S, p) {
          var T = Math.min(S, p.duration + (p.deltaPTS ? p.deltaPTS : 0)) * 1e3, E = p.endProgramDateTime || 0;
          return E - T > m;
        }
        function L(m, S) {
          return D.default.search(m, function(p) {
            return p.cc < S ? 1 : p.cc > S ? -1 : 0;
          });
        }
      },
      "./src/controller/fragment-tracker.ts": function(W, M, y) {
        y.r(M), y.d(M, "FragmentState", function() {
          return A;
        }), y.d(M, "FragmentTracker", function() {
          return b;
        });
        var C = y("./src/events.ts"), D = y("./src/types/loader.ts"), A;
        (function(L) {
          L.NOT_LOADED = "NOT_LOADED", L.BACKTRACKED = "BACKTRACKED", L.APPENDING = "APPENDING", L.PARTIAL = "PARTIAL", L.OK = "OK";
        })(A || (A = {}));
        var b = /* @__PURE__ */ function() {
          function L(S) {
            this.activeFragment = null, this.activeParts = null, this.fragments = /* @__PURE__ */ Object.create(null), this.timeRanges = /* @__PURE__ */ Object.create(null), this.bufferPadding = 0.2, this.hls = void 0, this.hls = S, this._registerListeners();
          }
          var m = L.prototype;
          return m._registerListeners = function() {
            var p = this.hls;
            p.on(C.Events.BUFFER_APPENDED, this.onBufferAppended, this), p.on(C.Events.FRAG_BUFFERED, this.onFragBuffered, this), p.on(C.Events.FRAG_LOADED, this.onFragLoaded, this);
          }, m._unregisterListeners = function() {
            var p = this.hls;
            p.off(C.Events.BUFFER_APPENDED, this.onBufferAppended, this), p.off(C.Events.FRAG_BUFFERED, this.onFragBuffered, this), p.off(C.Events.FRAG_LOADED, this.onFragLoaded, this);
          }, m.destroy = function() {
            this._unregisterListeners(), this.fragments = this.timeRanges = null;
          }, m.getAppendedFrag = function(p, T) {
            if (T === D.PlaylistLevelType.MAIN) {
              var E = this.activeFragment, v = this.activeParts;
              if (!E)
                return null;
              if (v)
                for (var n = v.length; n--; ) {
                  var t = v[n], r = t ? t.end : E.appendedPTS;
                  if (t.start <= p && r !== void 0 && p <= r)
                    return n > 9 && (this.activeParts = v.slice(n - 9)), t;
                }
              else if (E.start <= p && E.appendedPTS !== void 0 && p <= E.appendedPTS)
                return E;
            }
            return this.getBufferedFrag(p, T);
          }, m.getBufferedFrag = function(p, T) {
            for (var E = this.fragments, v = Object.keys(E), n = v.length; n--; ) {
              var t = E[v[n]];
              if ((t == null ? void 0 : t.body.type) === T && t.buffered) {
                var r = t.body;
                if (r.start <= p && p <= r.end)
                  return r;
              }
            }
            return null;
          }, m.detectEvictedFragments = function(p, T, E) {
            var v = this;
            Object.keys(this.fragments).forEach(function(n) {
              var t = v.fragments[n];
              if (!!t) {
                if (!t.buffered) {
                  t.body.type === E && v.removeFragment(t.body);
                  return;
                }
                var r = t.range[p];
                !r || r.time.some(function(e) {
                  var f = !v.isTimeBuffered(e.startPTS, e.endPTS, T);
                  return f && v.removeFragment(t.body), f;
                });
              }
            });
          }, m.detectPartialFragments = function(p) {
            var T = this, E = this.timeRanges, v = p.frag, n = p.part;
            if (!(!E || v.sn === "initSegment")) {
              var t = O(v), r = this.fragments[t];
              !r || (Object.keys(E).forEach(function(e) {
                var f = v.elementaryStreams[e];
                if (!!f) {
                  var s = E[e], i = n !== null || f.partial === !0;
                  r.range[e] = T.getBufferedTimes(v, n, i, s);
                }
              }), r.backtrack = r.loaded = null, Object.keys(r.range).length ? r.buffered = !0 : this.removeFragment(r.body));
            }
          }, m.fragBuffered = function(p) {
            var T = O(p), E = this.fragments[T];
            E && (E.backtrack = E.loaded = null, E.buffered = !0);
          }, m.getBufferedTimes = function(p, T, E, v) {
            for (var n = {
              time: [],
              partial: E
            }, t = T ? T.start : p.start, r = T ? T.end : p.end, e = p.minEndPTS || r, f = p.maxStartPTS || t, s = 0; s < v.length; s++) {
              var i = v.start(s) - this.bufferPadding, o = v.end(s) + this.bufferPadding;
              if (f >= i && e <= o) {
                n.time.push({
                  startPTS: Math.max(t, v.start(s)),
                  endPTS: Math.min(r, v.end(s))
                });
                break;
              } else if (t < o && r > i)
                n.partial = !0, n.time.push({
                  startPTS: Math.max(t, v.start(s)),
                  endPTS: Math.min(r, v.end(s))
                });
              else if (r <= i)
                break;
            }
            return n;
          }, m.getPartialFragment = function(p) {
            var T = null, E, v, n, t = 0, r = this.bufferPadding, e = this.fragments;
            return Object.keys(e).forEach(function(f) {
              var s = e[f];
              !s || I(s) && (v = s.body.start - r, n = s.body.end + r, p >= v && p <= n && (E = Math.min(p - v, n - p), t <= E && (T = s.body, t = E)));
            }), T;
          }, m.getState = function(p) {
            var T = O(p), E = this.fragments[T];
            return E ? E.buffered ? I(E) ? A.PARTIAL : A.OK : E.backtrack ? A.BACKTRACKED : A.APPENDING : A.NOT_LOADED;
          }, m.backtrack = function(p, T) {
            var E = O(p), v = this.fragments[E];
            if (!v || v.backtrack)
              return null;
            var n = v.backtrack = T || v.loaded;
            return v.loaded = null, n;
          }, m.getBacktrackData = function(p) {
            var T = O(p), E = this.fragments[T];
            if (E) {
              var v, n = E.backtrack;
              if (n != null && (v = n.payload) !== null && v !== void 0 && v.byteLength)
                return n;
              this.removeFragment(p);
            }
            return null;
          }, m.isTimeBuffered = function(p, T, E) {
            for (var v, n, t = 0; t < E.length; t++) {
              if (v = E.start(t) - this.bufferPadding, n = E.end(t) + this.bufferPadding, p >= v && T <= n)
                return !0;
              if (T <= v)
                return !1;
            }
            return !1;
          }, m.onFragLoaded = function(p, T) {
            var E = T.frag, v = T.part;
            if (!(E.sn === "initSegment" || E.bitrateTest || v)) {
              var n = O(E);
              this.fragments[n] = {
                body: E,
                loaded: T,
                backtrack: null,
                buffered: !1,
                range: /* @__PURE__ */ Object.create(null)
              };
            }
          }, m.onBufferAppended = function(p, T) {
            var E = this, v = T.frag, n = T.part, t = T.timeRanges;
            if (v.type === D.PlaylistLevelType.MAIN)
              if (this.activeFragment = v, n) {
                var r = this.activeParts;
                r || (this.activeParts = r = []), r.push(n);
              } else
                this.activeParts = null;
            this.timeRanges = t, Object.keys(t).forEach(function(e) {
              var f = t[e];
              if (E.detectEvictedFragments(e, f), !n)
                for (var s = 0; s < f.length; s++)
                  v.appendedPTS = Math.max(f.end(s), v.appendedPTS || 0);
            });
          }, m.onFragBuffered = function(p, T) {
            this.detectPartialFragments(T);
          }, m.hasFragment = function(p) {
            var T = O(p);
            return !!this.fragments[T];
          }, m.removeFragmentsInRange = function(p, T, E) {
            var v = this;
            Object.keys(this.fragments).forEach(function(n) {
              var t = v.fragments[n];
              if (!!t && t.buffered) {
                var r = t.body;
                r.type === E && r.start < T && r.end > p && v.removeFragment(r);
              }
            });
          }, m.removeFragment = function(p) {
            var T = O(p);
            p.stats.loaded = 0, p.clearElementaryStreamInfo(), delete this.fragments[T];
          }, m.removeAllFragments = function() {
            this.fragments = /* @__PURE__ */ Object.create(null), this.activeFragment = null, this.activeParts = null;
          }, L;
        }();
        function I(L) {
          var m, S;
          return L.buffered && (((m = L.range.video) === null || m === void 0 ? void 0 : m.partial) || ((S = L.range.audio) === null || S === void 0 ? void 0 : S.partial));
        }
        function O(L) {
          return L.type + "_" + L.level + "_" + L.urlId + "_" + L.sn;
        }
      },
      "./src/controller/gap-controller.ts": function(W, M, y) {
        y.r(M), y.d(M, "STALL_MINIMUM_DURATION_MS", function() {
          return I;
        }), y.d(M, "MAX_START_GAP_JUMP", function() {
          return O;
        }), y.d(M, "SKIP_BUFFER_HOLE_STEP_SECONDS", function() {
          return L;
        }), y.d(M, "SKIP_BUFFER_RANGE_START", function() {
          return m;
        }), y.d(M, "default", function() {
          return S;
        });
        var C = y("./src/utils/buffer-helper.ts"), D = y("./src/errors.ts"), A = y("./src/events.ts"), b = y("./src/utils/logger.ts"), I = 250, O = 2, L = 0.1, m = 0.05, S = /* @__PURE__ */ function() {
          function p(E, v, n, t) {
            this.config = void 0, this.media = void 0, this.fragmentTracker = void 0, this.hls = void 0, this.nudgeRetry = 0, this.stallReported = !1, this.stalled = null, this.moved = !1, this.seeking = !1, this.config = E, this.media = v, this.fragmentTracker = n, this.hls = t;
          }
          var T = p.prototype;
          return T.destroy = function() {
            this.hls = this.fragmentTracker = this.media = null;
          }, T.poll = function(v) {
            var n = this.config, t = this.media, r = this.stalled, e = t.currentTime, f = t.seeking, s = this.seeking && !f, i = !this.seeking && f;
            if (this.seeking = f, e !== v) {
              if (this.moved = !0, r !== null) {
                if (this.stallReported) {
                  var o = self.performance.now() - r;
                  b.logger.warn("playback not stuck anymore @" + e + ", after " + Math.round(o) + "ms"), this.stallReported = !1;
                }
                this.stalled = null, this.nudgeRetry = 0;
              }
              return;
            }
            if ((i || s) && (this.stalled = null), !(t.paused || t.ended || t.playbackRate === 0 || !C.BufferHelper.getBuffered(t).length)) {
              var c = C.BufferHelper.bufferInfo(t, e, 0), h = c.len > 0, u = c.nextStart || 0;
              if (!(!h && !u)) {
                if (f) {
                  var a = c.len > O, l = !u || u - e > O && !this.fragmentTracker.getPartialFragment(e);
                  if (a || l)
                    return;
                  this.moved = !1;
                }
                if (!this.moved && this.stalled !== null) {
                  var d, g = Math.max(u, c.start || 0) - e, x = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null, R = x == null || (d = x.details) === null || d === void 0 ? void 0 : d.live, P = R ? x.details.targetduration * 2 : O;
                  if (g > 0 && g <= P) {
                    this._trySkipBufferHole(null);
                    return;
                  }
                }
                var _ = self.performance.now();
                if (r === null) {
                  this.stalled = _;
                  return;
                }
                var F = _ - r;
                !f && F >= I && this._reportStall(c.len);
                var B = C.BufferHelper.bufferInfo(t, e, n.maxBufferHole);
                this._tryFixBufferStall(B, F);
              }
            }
          }, T._tryFixBufferStall = function(v, n) {
            var t = this.config, r = this.fragmentTracker, e = this.media, f = e.currentTime, s = r.getPartialFragment(f);
            if (s) {
              var i = this._trySkipBufferHole(s);
              if (i)
                return;
            }
            v.len > t.maxBufferHole && n > t.highBufferWatchdogPeriod * 1e3 && (b.logger.warn("Trying to nudge playhead over buffer-hole"), this.stalled = null, this._tryNudgeBuffer());
          }, T._reportStall = function(v) {
            var n = this.hls, t = this.media, r = this.stallReported;
            r || (this.stallReported = !0, b.logger.warn("Playback stalling at @" + t.currentTime + " due to low buffer (buffer=" + v + ")"), n.trigger(A.Events.ERROR, {
              type: D.ErrorTypes.MEDIA_ERROR,
              details: D.ErrorDetails.BUFFER_STALLED_ERROR,
              fatal: !1,
              buffer: v
            }));
          }, T._trySkipBufferHole = function(v) {
            for (var n = this.config, t = this.hls, r = this.media, e = r.currentTime, f = 0, s = C.BufferHelper.getBuffered(r), i = 0; i < s.length; i++) {
              var o = s.start(i);
              if (e + n.maxBufferHole >= f && e < o) {
                var c = Math.max(o + m, r.currentTime + L);
                return b.logger.warn("skipping hole, adjusting currentTime from " + e + " to " + c), this.moved = !0, this.stalled = null, r.currentTime = c, v && t.trigger(A.Events.ERROR, {
                  type: D.ErrorTypes.MEDIA_ERROR,
                  details: D.ErrorDetails.BUFFER_SEEK_OVER_HOLE,
                  fatal: !1,
                  reason: "fragment loaded with buffer holes, seeking from " + e + " to " + c,
                  frag: v
                }), c;
              }
              f = s.end(i);
            }
            return 0;
          }, T._tryNudgeBuffer = function() {
            var v = this.config, n = this.hls, t = this.media, r = t.currentTime, e = (this.nudgeRetry || 0) + 1;
            if (this.nudgeRetry = e, e < v.nudgeMaxRetry) {
              var f = r + e * v.nudgeOffset;
              b.logger.warn("Nudging 'currentTime' from " + r + " to " + f), t.currentTime = f, n.trigger(A.Events.ERROR, {
                type: D.ErrorTypes.MEDIA_ERROR,
                details: D.ErrorDetails.BUFFER_NUDGE_ON_STALL,
                fatal: !1
              });
            } else
              b.logger.error("Playhead still not moving while enough data buffered @" + r + " after " + v.nudgeMaxRetry + " nudges"), n.trigger(A.Events.ERROR, {
                type: D.ErrorTypes.MEDIA_ERROR,
                details: D.ErrorDetails.BUFFER_STALLED_ERROR,
                fatal: !0
              });
          }, p;
        }();
      },
      "./src/controller/id3-track-controller.ts": function(W, M, y) {
        y.r(M);
        var C = y("./src/events.ts"), D = y("./src/utils/texttrack-utils.ts"), A = y("./src/demux/id3.ts"), b = 0.25, I = /* @__PURE__ */ function() {
          function O(m) {
            this.hls = void 0, this.id3Track = null, this.media = null, this.hls = m, this._registerListeners();
          }
          var L = O.prototype;
          return L.destroy = function() {
            this._unregisterListeners();
          }, L._registerListeners = function() {
            var S = this.hls;
            S.on(C.Events.MEDIA_ATTACHED, this.onMediaAttached, this), S.on(C.Events.MEDIA_DETACHING, this.onMediaDetaching, this), S.on(C.Events.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), S.on(C.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
          }, L._unregisterListeners = function() {
            var S = this.hls;
            S.off(C.Events.MEDIA_ATTACHED, this.onMediaAttached, this), S.off(C.Events.MEDIA_DETACHING, this.onMediaDetaching, this), S.off(C.Events.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), S.off(C.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
          }, L.onMediaAttached = function(S, p) {
            this.media = p.media;
          }, L.onMediaDetaching = function() {
            !this.id3Track || (Object(D.clearCurrentCues)(this.id3Track), this.id3Track = null, this.media = null);
          }, L.getID3Track = function(S) {
            if (!!this.media) {
              for (var p = 0; p < S.length; p++) {
                var T = S[p];
                if (T.kind === "metadata" && T.label === "id3")
                  return Object(D.sendAddTrackEvent)(T, this.media), T;
              }
              return this.media.addTextTrack("metadata", "id3");
            }
          }, L.onFragParsingMetadata = function(S, p) {
            if (!!this.media) {
              var T = p.frag, E = p.samples;
              this.id3Track || (this.id3Track = this.getID3Track(this.media.textTracks), this.id3Track.mode = "hidden");
              for (var v = self.WebKitDataCue || self.VTTCue || self.TextTrackCue, n = 0; n < E.length; n++) {
                var t = A.getID3Frames(E[n].data);
                if (t) {
                  var r = E[n].pts, e = n < E.length - 1 ? E[n + 1].pts : T.end, f = e - r;
                  f <= 0 && (e = r + b);
                  for (var s = 0; s < t.length; s++) {
                    var i = t[s];
                    if (!A.isTimeStampFrame(i)) {
                      var o = new v(r, e, "");
                      o.value = i, this.id3Track.addCue(o);
                    }
                  }
                }
              }
            }
          }, L.onBufferFlushing = function(S, p) {
            var T = p.startOffset, E = p.endOffset, v = p.type;
            if (!v || v === "audio") {
              var n = this.id3Track;
              n && Object(D.removeCuesInRange)(n, T, E);
            }
          }, O;
        }();
        M.default = I;
      },
      "./src/controller/latency-controller.ts": function(W, M, y) {
        y.r(M), y.d(M, "default", function() {
          return O;
        });
        var C = y("./src/errors.ts"), D = y("./src/events.ts"), A = y("./src/utils/logger.ts");
        function b(L, m) {
          for (var S = 0; S < m.length; S++) {
            var p = m[S];
            p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(L, p.key, p);
          }
        }
        function I(L, m, S) {
          return m && b(L.prototype, m), S && b(L, S), L;
        }
        var O = /* @__PURE__ */ function() {
          function L(S) {
            var p = this;
            this.hls = void 0, this.config = void 0, this.media = null, this.levelDetails = null, this.currentTime = 0, this.stallCount = 0, this._latency = null, this.timeupdateHandler = function() {
              return p.timeupdate();
            }, this.hls = S, this.config = S.config, this.registerListeners();
          }
          var m = L.prototype;
          return m.destroy = function() {
            this.unregisterListeners(), this.onMediaDetaching(), this.levelDetails = null, this.hls = this.timeupdateHandler = null;
          }, m.registerListeners = function() {
            this.hls.on(D.Events.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(D.Events.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.on(D.Events.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(D.Events.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.on(D.Events.ERROR, this.onError, this);
          }, m.unregisterListeners = function() {
            this.hls.off(D.Events.MEDIA_ATTACHED, this.onMediaAttached), this.hls.off(D.Events.MEDIA_DETACHING, this.onMediaDetaching), this.hls.off(D.Events.MANIFEST_LOADING, this.onManifestLoading), this.hls.off(D.Events.LEVEL_UPDATED, this.onLevelUpdated), this.hls.off(D.Events.ERROR, this.onError);
          }, m.onMediaAttached = function(p, T) {
            this.media = T.media, this.media.addEventListener("timeupdate", this.timeupdateHandler);
          }, m.onMediaDetaching = function() {
            this.media && (this.media.removeEventListener("timeupdate", this.timeupdateHandler), this.media = null);
          }, m.onManifestLoading = function() {
            this.levelDetails = null, this._latency = null, this.stallCount = 0;
          }, m.onLevelUpdated = function(p, T) {
            var E = T.details;
            this.levelDetails = E, E.advanced && this.timeupdate(), !E.live && this.media && this.media.removeEventListener("timeupdate", this.timeupdateHandler);
          }, m.onError = function(p, T) {
            T.details === C.ErrorDetails.BUFFER_STALLED_ERROR && (this.stallCount++, A.logger.warn("[playback-rate-controller]: Stall detected, adjusting target latency"));
          }, m.timeupdate = function() {
            var p = this.media, T = this.levelDetails;
            if (!(!p || !T)) {
              this.currentTime = p.currentTime;
              var E = this.computeLatency();
              if (E !== null) {
                this._latency = E;
                var v = this.config, n = v.lowLatencyMode, t = v.maxLiveSyncPlaybackRate;
                if (!(!n || t === 1)) {
                  var r = this.targetLatency;
                  if (r !== null) {
                    var e = E - r, f = Math.min(this.maxLatency, r + T.targetduration), s = e < f;
                    if (T.live && s && e > 0.05 && this.forwardBufferLength > 1) {
                      var i = Math.min(2, Math.max(1, t)), o = Math.round(2 / (1 + Math.exp(-0.75 * e - this.edgeStalled)) * 20) / 20;
                      p.playbackRate = Math.min(i, Math.max(1, o));
                    } else
                      p.playbackRate !== 1 && p.playbackRate !== 0 && (p.playbackRate = 1);
                  }
                }
              }
            }
          }, m.estimateLiveEdge = function() {
            var p = this.levelDetails;
            return p === null ? null : p.edge + p.age;
          }, m.computeLatency = function() {
            var p = this.estimateLiveEdge();
            return p === null ? null : p - this.currentTime;
          }, I(L, [{
            key: "latency",
            get: function() {
              return this._latency || 0;
            }
          }, {
            key: "maxLatency",
            get: function() {
              var p = this.config, T = this.levelDetails;
              return p.liveMaxLatencyDuration !== void 0 ? p.liveMaxLatencyDuration : T ? p.liveMaxLatencyDurationCount * T.targetduration : 0;
            }
          }, {
            key: "targetLatency",
            get: function() {
              var p = this.levelDetails;
              if (p === null)
                return null;
              var T = p.holdBack, E = p.partHoldBack, v = p.targetduration, n = this.config, t = n.liveSyncDuration, r = n.liveSyncDurationCount, e = n.lowLatencyMode, f = this.hls.userConfig, s = e && E || T;
              (f.liveSyncDuration || f.liveSyncDurationCount || s === 0) && (s = t !== void 0 ? t : r * v);
              var i = v, o = 1;
              return s + Math.min(this.stallCount * o, i);
            }
          }, {
            key: "liveSyncPosition",
            get: function() {
              var p = this.estimateLiveEdge(), T = this.targetLatency, E = this.levelDetails;
              if (p === null || T === null || E === null)
                return null;
              var v = E.edge, n = p - T - this.edgeStalled, t = v - E.totalduration, r = v - (this.config.lowLatencyMode && E.partTarget || E.targetduration);
              return Math.min(Math.max(t, n), r);
            }
          }, {
            key: "drift",
            get: function() {
              var p = this.levelDetails;
              return p === null ? 1 : p.drift;
            }
          }, {
            key: "edgeStalled",
            get: function() {
              var p = this.levelDetails;
              if (p === null)
                return 0;
              var T = (this.config.lowLatencyMode && p.partTarget || p.targetduration) * 3;
              return Math.max(p.age - T, 0);
            }
          }, {
            key: "forwardBufferLength",
            get: function() {
              var p = this.media, T = this.levelDetails;
              if (!p || !T)
                return 0;
              var E = p.buffered.length;
              return E ? p.buffered.end(E - 1) : T.edge - this.currentTime;
            }
          }]), L;
        }();
      },
      "./src/controller/level-controller.ts": function(W, M, y) {
        y.r(M), y.d(M, "default", function() {
          return n;
        });
        var C = y("./src/types/level.ts"), D = y("./src/events.ts"), A = y("./src/errors.ts"), b = y("./src/utils/codecs.ts"), I = y("./src/controller/level-helper.ts"), O = y("./src/controller/base-playlist-controller.ts"), L = y("./src/types/loader.ts");
        function m() {
          return m = Object.assign || function(t) {
            for (var r = 1; r < arguments.length; r++) {
              var e = arguments[r];
              for (var f in e)
                Object.prototype.hasOwnProperty.call(e, f) && (t[f] = e[f]);
            }
            return t;
          }, m.apply(this, arguments);
        }
        function S(t, r) {
          for (var e = 0; e < r.length; e++) {
            var f = r[e];
            f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(t, f.key, f);
          }
        }
        function p(t, r, e) {
          return r && S(t.prototype, r), e && S(t, e), t;
        }
        function T(t, r) {
          t.prototype = Object.create(r.prototype), t.prototype.constructor = t, E(t, r);
        }
        function E(t, r) {
          return E = Object.setPrototypeOf || function(f, s) {
            return f.__proto__ = s, f;
          }, E(t, r);
        }
        var v = /chrome|firefox/.test(navigator.userAgent.toLowerCase()), n = /* @__PURE__ */ function(t) {
          T(r, t);
          function r(f) {
            var s;
            return s = t.call(this, f, "[level-controller]") || this, s._levels = [], s._firstLevel = -1, s._startLevel = void 0, s.currentLevelIndex = -1, s.manualLevelIndex = -1, s.onParsedComplete = void 0, s._registerListeners(), s;
          }
          var e = r.prototype;
          return e._registerListeners = function() {
            var s = this.hls;
            s.on(D.Events.MANIFEST_LOADED, this.onManifestLoaded, this), s.on(D.Events.LEVEL_LOADED, this.onLevelLoaded, this), s.on(D.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), s.on(D.Events.FRAG_LOADED, this.onFragLoaded, this), s.on(D.Events.ERROR, this.onError, this);
          }, e._unregisterListeners = function() {
            var s = this.hls;
            s.off(D.Events.MANIFEST_LOADED, this.onManifestLoaded, this), s.off(D.Events.LEVEL_LOADED, this.onLevelLoaded, this), s.off(D.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), s.off(D.Events.FRAG_LOADED, this.onFragLoaded, this), s.off(D.Events.ERROR, this.onError, this);
          }, e.destroy = function() {
            this._unregisterListeners(), this.manualLevelIndex = -1, this._levels.length = 0, t.prototype.destroy.call(this);
          }, e.startLoad = function() {
            var s = this._levels;
            s.forEach(function(i) {
              i.loadError = 0;
            }), t.prototype.startLoad.call(this);
          }, e.onManifestLoaded = function(s, i) {
            var o = [], c = [], h = [], u, a = {}, l, d = !1, g = !1, x = !1;
            if (i.levels.forEach(function(F) {
              var B = F.attrs;
              d = d || !!(F.width && F.height), g = g || !!F.videoCodec, x = x || !!F.audioCodec, v && F.audioCodec && F.audioCodec.indexOf("mp4a.40.34") !== -1 && (F.audioCodec = void 0);
              var U = F.bitrate + "-" + F.attrs.RESOLUTION + "-" + F.attrs.CODECS;
              l = a[U], l ? l.url.push(F.url) : (l = new C.Level(F), a[U] = l, o.push(l)), B && (B.AUDIO && Object(I.addGroupId)(l, "audio", B.AUDIO), B.SUBTITLES && Object(I.addGroupId)(l, "text", B.SUBTITLES));
            }), (d || g) && x && (o = o.filter(function(F) {
              var B = F.videoCodec, U = F.width, N = F.height;
              return !!B || !!(U && N);
            })), o = o.filter(function(F) {
              var B = F.audioCodec, U = F.videoCodec;
              return (!B || Object(b.isCodecSupportedInMp4)(B, "audio")) && (!U || Object(b.isCodecSupportedInMp4)(U, "video"));
            }), i.audioTracks && (c = i.audioTracks.filter(function(F) {
              return !F.audioCodec || Object(b.isCodecSupportedInMp4)(F.audioCodec, "audio");
            }), Object(I.assignTrackIdsByGroup)(c)), i.subtitles && (h = i.subtitles, Object(I.assignTrackIdsByGroup)(h)), o.length > 0) {
              u = o[0].bitrate, o.sort(function(F, B) {
                return F.bitrate - B.bitrate;
              }), this._levels = o;
              for (var R = 0; R < o.length; R++)
                if (o[R].bitrate === u) {
                  this._firstLevel = R, this.log("manifest loaded, " + o.length + " level(s) found, first bitrate: " + u);
                  break;
                }
              var P = x && !g, _ = {
                levels: o,
                audioTracks: c,
                subtitleTracks: h,
                firstLevel: this._firstLevel,
                stats: i.stats,
                audio: x,
                video: g,
                altAudio: !P && c.some(function(F) {
                  return !!F.url;
                })
              };
              this.hls.trigger(D.Events.MANIFEST_PARSED, _), (this.hls.config.autoStartLoad || this.hls.forceStartLoad) && this.hls.startLoad(this.hls.config.startPosition);
            } else
              this.hls.trigger(D.Events.ERROR, {
                type: A.ErrorTypes.MEDIA_ERROR,
                details: A.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                fatal: !0,
                url: i.url,
                reason: "no level with compatible codecs found in manifest"
              });
          }, e.onError = function(s, i) {
            if (t.prototype.onError.call(this, s, i), !i.fatal) {
              var o = i.context, c = this._levels[this.currentLevelIndex];
              if (o && (o.type === L.PlaylistContextType.AUDIO_TRACK && c.audioGroupIds && o.groupId === c.audioGroupIds[c.urlId] || o.type === L.PlaylistContextType.SUBTITLE_TRACK && c.textGroupIds && o.groupId === c.textGroupIds[c.urlId])) {
                this.redundantFailover(this.currentLevelIndex);
                return;
              }
              var h = !1, u = !0, a;
              switch (i.details) {
                case A.ErrorDetails.FRAG_LOAD_ERROR:
                case A.ErrorDetails.FRAG_LOAD_TIMEOUT:
                case A.ErrorDetails.KEY_LOAD_ERROR:
                case A.ErrorDetails.KEY_LOAD_TIMEOUT:
                  if (i.frag) {
                    var l = this._levels[i.frag.level];
                    l ? (l.fragmentError++, l.fragmentError > this.hls.config.fragLoadingMaxRetry && (a = i.frag.level)) : a = i.frag.level;
                  }
                  break;
                case A.ErrorDetails.LEVEL_LOAD_ERROR:
                case A.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                  o && (o.deliveryDirectives && (u = !1), a = o.level), h = !0;
                  break;
                case A.ErrorDetails.REMUX_ALLOC_ERROR:
                  a = i.level, h = !0;
                  break;
              }
              a !== void 0 && this.recoverLevel(i, a, h, u);
            }
          }, e.recoverLevel = function(s, i, o, c) {
            var h = s.details, u = this._levels[i];
            if (u.loadError++, o) {
              var a = this.retryLoadingOrFail(s);
              if (a)
                s.levelRetry = !0;
              else {
                this.currentLevelIndex = -1;
                return;
              }
            }
            if (c) {
              var l = u.url.length;
              if (l > 1 && u.loadError < l)
                s.levelRetry = !0, this.redundantFailover(i);
              else if (this.manualLevelIndex === -1) {
                var d = i === 0 ? this._levels.length - 1 : i - 1;
                this.currentLevelIndex !== d && this._levels[d].loadError === 0 && (this.warn(h + ": switch to " + d), s.levelRetry = !0, this.hls.nextAutoLevel = d);
              }
            }
          }, e.redundantFailover = function(s) {
            var i = this._levels[s], o = i.url.length;
            if (o > 1) {
              var c = (i.urlId + 1) % o;
              this.warn("Switching to redundant URL-id " + c), this._levels.forEach(function(h) {
                h.urlId = c;
              }), this.level = s;
            }
          }, e.onFragLoaded = function(s, i) {
            var o = i.frag;
            if (o !== void 0 && o.type === L.PlaylistLevelType.MAIN) {
              var c = this._levels[o.level];
              c !== void 0 && (c.fragmentError = 0, c.loadError = 0);
            }
          }, e.onLevelLoaded = function(s, i) {
            var o, c = i.level, h = i.details, u = this._levels[c];
            if (!u) {
              var a;
              this.warn("Invalid level index " + c), (a = i.deliveryDirectives) !== null && a !== void 0 && a.skip && (h.deltaUpdateFailed = !0);
              return;
            }
            c === this.currentLevelIndex ? (u.fragmentError === 0 && (u.loadError = 0, this.retryCount = 0), this.playlistLoaded(c, i, u.details)) : (o = i.deliveryDirectives) !== null && o !== void 0 && o.skip && (h.deltaUpdateFailed = !0);
          }, e.onAudioTrackSwitched = function(s, i) {
            var o = this.hls.levels[this.currentLevelIndex];
            if (!!o && o.audioGroupIds) {
              for (var c = -1, h = this.hls.audioTracks[i.id].groupId, u = 0; u < o.audioGroupIds.length; u++)
                if (o.audioGroupIds[u] === h) {
                  c = u;
                  break;
                }
              c !== o.urlId && (o.urlId = c, this.startLoad());
            }
          }, e.loadPlaylist = function(s) {
            var i = this.currentLevelIndex, o = this._levels[i];
            if (this.canLoad && o && o.url.length > 0) {
              var c = o.urlId, h = o.url[c];
              if (s)
                try {
                  h = s.addDirectives(h);
                } catch (u) {
                  this.warn("Could not construct new URL with HLS Delivery Directives: " + u);
                }
              this.log("Attempt loading level index " + i + (s ? " at sn " + s.msn + " part " + s.part : "") + " with URL-id " + c + " " + h), this.clearTimer(), this.hls.trigger(D.Events.LEVEL_LOADING, {
                url: h,
                level: i,
                id: c,
                deliveryDirectives: s || null
              });
            }
          }, e.removeLevel = function(s, i) {
            var o = function(u, a) {
              return a !== i;
            }, c = this._levels.filter(function(h, u) {
              return u !== s ? !0 : h.url.length > 1 && i !== void 0 ? (h.url = h.url.filter(o), h.audioGroupIds && (h.audioGroupIds = h.audioGroupIds.filter(o)), h.textGroupIds && (h.textGroupIds = h.textGroupIds.filter(o)), h.urlId = 0, !0) : !1;
            }).map(function(h, u) {
              var a = h.details;
              return a != null && a.fragments && a.fragments.forEach(function(l) {
                l.level = u;
              }), h;
            });
            this._levels = c, this.hls.trigger(D.Events.LEVELS_UPDATED, {
              levels: c
            });
          }, p(r, [{
            key: "levels",
            get: function() {
              return this._levels.length === 0 ? null : this._levels;
            }
          }, {
            key: "level",
            get: function() {
              return this.currentLevelIndex;
            },
            set: function(s) {
              var i, o = this._levels;
              if (o.length !== 0 && !(this.currentLevelIndex === s && (i = o[s]) !== null && i !== void 0 && i.details)) {
                if (s < 0 || s >= o.length) {
                  var c = s < 0;
                  if (this.hls.trigger(D.Events.ERROR, {
                    type: A.ErrorTypes.OTHER_ERROR,
                    details: A.ErrorDetails.LEVEL_SWITCH_ERROR,
                    level: s,
                    fatal: c,
                    reason: "invalid level idx"
                  }), c)
                    return;
                  s = Math.min(s, o.length - 1);
                }
                this.clearTimer();
                var h = this.currentLevelIndex, u = o[h], a = o[s];
                this.log("switching to level " + s + " from " + h), this.currentLevelIndex = s;
                var l = m({}, a, {
                  level: s,
                  maxBitrate: a.maxBitrate,
                  uri: a.uri,
                  urlId: a.urlId
                });
                delete l._urlId, this.hls.trigger(D.Events.LEVEL_SWITCHING, l);
                var d = a.details;
                if (!d || d.live) {
                  var g = this.switchParams(a.uri, u == null ? void 0 : u.details);
                  this.loadPlaylist(g);
                }
              }
            }
          }, {
            key: "manualLevel",
            get: function() {
              return this.manualLevelIndex;
            },
            set: function(s) {
              this.manualLevelIndex = s, this._startLevel === void 0 && (this._startLevel = s), s !== -1 && (this.level = s);
            }
          }, {
            key: "firstLevel",
            get: function() {
              return this._firstLevel;
            },
            set: function(s) {
              this._firstLevel = s;
            }
          }, {
            key: "startLevel",
            get: function() {
              if (this._startLevel === void 0) {
                var s = this.hls.config.startLevel;
                return s !== void 0 ? s : this._firstLevel;
              } else
                return this._startLevel;
            },
            set: function(s) {
              this._startLevel = s;
            }
          }, {
            key: "nextLoadLevel",
            get: function() {
              return this.manualLevelIndex !== -1 ? this.manualLevelIndex : this.hls.nextAutoLevel;
            },
            set: function(s) {
              this.level = s, this.manualLevelIndex === -1 && (this.hls.nextAutoLevel = s);
            }
          }]), r;
        }(O.default);
      },
      "./src/controller/level-helper.ts": function(W, M, y) {
        y.r(M), y.d(M, "addGroupId", function() {
          return A;
        }), y.d(M, "assignTrackIdsByGroup", function() {
          return b;
        }), y.d(M, "updatePTS", function() {
          return I;
        }), y.d(M, "updateFragPTSDTS", function() {
          return L;
        }), y.d(M, "mergeDetails", function() {
          return m;
        }), y.d(M, "mapPartIntersection", function() {
          return S;
        }), y.d(M, "mapFragmentIntersection", function() {
          return p;
        }), y.d(M, "adjustSliding", function() {
          return T;
        }), y.d(M, "addSliding", function() {
          return E;
        }), y.d(M, "computeReloadInterval", function() {
          return v;
        }), y.d(M, "getFragmentWithSN", function() {
          return n;
        }), y.d(M, "getPartWith", function() {
          return t;
        });
        var C = y("./src/polyfills/number.ts"), D = y("./src/utils/logger.ts");
        function A(r, e, f) {
          switch (e) {
            case "audio":
              r.audioGroupIds || (r.audioGroupIds = []), r.audioGroupIds.push(f);
              break;
            case "text":
              r.textGroupIds || (r.textGroupIds = []), r.textGroupIds.push(f);
              break;
          }
        }
        function b(r) {
          var e = {};
          r.forEach(function(f) {
            var s = f.groupId || "";
            f.id = e[s] = e[s] || 0, e[s]++;
          });
        }
        function I(r, e, f) {
          var s = r[e], i = r[f];
          O(s, i);
        }
        function O(r, e) {
          var f = e.startPTS;
          if (Object(C.isFiniteNumber)(f)) {
            var s = 0, i;
            e.sn > r.sn ? (s = f - r.start, i = r) : (s = r.start - f, i = e), i.duration !== s && (i.duration = s);
          } else if (e.sn > r.sn) {
            var o = r.cc === e.cc;
            o && r.minEndPTS ? e.start = r.start + (r.minEndPTS - r.start) : e.start = r.start + r.duration;
          } else
            e.start = Math.max(r.start - e.duration, 0);
        }
        function L(r, e, f, s, i, o) {
          var c = s - f;
          c <= 0 && (D.logger.warn("Fragment should have a positive duration", e), s = f + e.duration, o = i + e.duration);
          var h = f, u = s, a = e.startPTS, l = e.endPTS;
          if (Object(C.isFiniteNumber)(a)) {
            var d = Math.abs(a - f);
            Object(C.isFiniteNumber)(e.deltaPTS) ? e.deltaPTS = Math.max(d, e.deltaPTS) : e.deltaPTS = d, h = Math.max(f, a), f = Math.min(f, a), i = Math.min(i, e.startDTS), u = Math.min(s, l), s = Math.max(s, l), o = Math.max(o, e.endDTS);
          }
          e.duration = s - f;
          var g = f - e.start;
          e.appendedPTS = s, e.start = e.startPTS = f, e.maxStartPTS = h, e.startDTS = i, e.endPTS = s, e.minEndPTS = u, e.endDTS = o;
          var x = e.sn;
          if (!r || x < r.startSN || x > r.endSN)
            return 0;
          var R, P = x - r.startSN, _ = r.fragments;
          for (_[P] = e, R = P; R > 0; R--)
            O(_[R], _[R - 1]);
          for (R = P; R < _.length - 1; R++)
            O(_[R], _[R + 1]);
          return r.fragmentHint && O(_[_.length - 1], r.fragmentHint), r.PTSKnown = r.alignedSliding = !0, g;
        }
        function m(r, e) {
          for (var f = null, s = r.fragments, i = s.length - 1; i >= 0; i--) {
            var o = s[i].initSegment;
            if (o) {
              f = o;
              break;
            }
          }
          r.fragmentHint && delete r.fragmentHint.endPTS;
          var c = 0, h;
          if (p(r, e, function(R, P) {
            R.relurl && (c = R.cc - P.cc), Object(C.isFiniteNumber)(R.startPTS) && Object(C.isFiniteNumber)(R.endPTS) && (P.start = P.startPTS = R.startPTS, P.startDTS = R.startDTS, P.appendedPTS = R.appendedPTS, P.maxStartPTS = R.maxStartPTS, P.endPTS = R.endPTS, P.endDTS = R.endDTS, P.minEndPTS = R.minEndPTS, P.duration = R.endPTS - R.startPTS, P.duration && (h = P), e.PTSKnown = e.alignedSliding = !0), P.elementaryStreams = R.elementaryStreams, P.loader = R.loader, P.stats = R.stats, P.urlId = R.urlId, R.initSegment && (P.initSegment = R.initSegment, f = R.initSegment);
          }), f) {
            var u = e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments;
            u.forEach(function(R) {
              var P;
              (!R.initSegment || R.initSegment.relurl === ((P = f) === null || P === void 0 ? void 0 : P.relurl)) && (R.initSegment = f);
            });
          }
          if (e.skippedSegments && (e.deltaUpdateFailed = e.fragments.some(function(R) {
            return !R;
          }), e.deltaUpdateFailed)) {
            D.logger.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
            for (var a = e.skippedSegments; a--; )
              e.fragments.shift();
            e.startSN = e.fragments[0].sn, e.startCC = e.fragments[0].cc;
          }
          var l = e.fragments;
          if (c) {
            D.logger.warn("discontinuity sliding from playlist, take drift into account");
            for (var d = 0; d < l.length; d++)
              l[d].cc += c;
          }
          e.skippedSegments && (e.startCC = e.fragments[0].cc), S(r.partList, e.partList, function(R, P) {
            P.elementaryStreams = R.elementaryStreams, P.stats = R.stats;
          }), h ? L(e, h, h.startPTS, h.endPTS, h.startDTS, h.endDTS) : T(r, e), l.length && (e.totalduration = e.edge - l[0].start), e.driftStartTime = r.driftStartTime, e.driftStart = r.driftStart;
          var g = e.advancedDateTime;
          if (e.advanced && g) {
            var x = e.edge;
            e.driftStart || (e.driftStartTime = g, e.driftStart = x), e.driftEndTime = g, e.driftEnd = x;
          } else
            e.driftEndTime = r.driftEndTime, e.driftEnd = r.driftEnd, e.advancedDateTime = r.advancedDateTime;
        }
        function S(r, e, f) {
          if (r && e)
            for (var s = 0, i = 0, o = r.length; i <= o; i++) {
              var c = r[i], h = e[i + s];
              c && h && c.index === h.index && c.fragment.sn === h.fragment.sn ? f(c, h) : s--;
            }
        }
        function p(r, e, f) {
          for (var s = e.skippedSegments, i = Math.max(r.startSN, e.startSN) - e.startSN, o = (r.fragmentHint ? 1 : 0) + (s ? e.endSN : Math.min(r.endSN, e.endSN)) - e.startSN, c = e.startSN - r.startSN, h = e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments, u = r.fragmentHint ? r.fragments.concat(r.fragmentHint) : r.fragments, a = i; a <= o; a++) {
            var l = u[c + a], d = h[a];
            s && !d && a < s && (d = e.fragments[a] = l), l && d && f(l, d);
          }
        }
        function T(r, e) {
          var f = e.startSN + e.skippedSegments - r.startSN, s = r.fragments;
          f < 0 || f >= s.length || E(e, s[f].start);
        }
        function E(r, e) {
          if (e) {
            for (var f = r.fragments, s = r.skippedSegments; s < f.length; s++)
              f[s].start += e;
            r.fragmentHint && (r.fragmentHint.start += e);
          }
        }
        function v(r, e) {
          var f = 1e3 * r.levelTargetDuration, s = f / 2, i = r.age, o = i > 0 && i < f * 3, c = e.loading.end - e.loading.start, h, u = r.availabilityDelay;
          if (r.updated === !1)
            if (o) {
              var a = 333 * r.misses;
              h = Math.max(Math.min(s, c * 2), a), r.availabilityDelay = (r.availabilityDelay || 0) + h;
            } else
              h = s;
          else
            o ? (u = Math.min(u || f / 2, i), r.availabilityDelay = u, h = u + f - i) : h = f - c;
          return Math.round(h);
        }
        function n(r, e, f) {
          if (!r || !r.details)
            return null;
          var s = r.details, i = s.fragments[e - s.startSN];
          return i || (i = s.fragmentHint, i && i.sn === e) ? i : e < s.startSN && f && f.sn === e ? f : null;
        }
        function t(r, e, f) {
          if (!r || !r.details)
            return null;
          var s = r.details.partList;
          if (s)
            for (var i = s.length; i--; ) {
              var o = s[i];
              if (o.index === f && o.fragment.sn === e)
                return o;
            }
          return null;
        }
      },
      "./src/controller/stream-controller.ts": function(W, M, y) {
        y.r(M), y.d(M, "default", function() {
          return s;
        });
        var C = y("./src/polyfills/number.ts"), D = y("./src/controller/base-stream-controller.ts"), A = y("./src/is-supported.ts"), b = y("./src/events.ts"), I = y("./src/utils/buffer-helper.ts"), O = y("./src/controller/fragment-tracker.ts"), L = y("./src/types/loader.ts"), m = y("./src/loader/fragment.ts"), S = y("./src/demux/transmuxer-interface.ts"), p = y("./src/types/transmuxer.ts"), T = y("./src/controller/gap-controller.ts"), E = y("./src/errors.ts"), v = y("./src/utils/logger.ts");
        function n(i, o) {
          for (var c = 0; c < o.length; c++) {
            var h = o[c];
            h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(i, h.key, h);
          }
        }
        function t(i, o, c) {
          return o && n(i.prototype, o), c && n(i, c), i;
        }
        function r(i, o) {
          i.prototype = Object.create(o.prototype), i.prototype.constructor = i, e(i, o);
        }
        function e(i, o) {
          return e = Object.setPrototypeOf || function(h, u) {
            return h.__proto__ = u, h;
          }, e(i, o);
        }
        var f = 100, s = /* @__PURE__ */ function(i) {
          r(o, i);
          function o(h, u) {
            var a;
            return a = i.call(this, h, u, "[stream-controller]") || this, a.audioCodecSwap = !1, a.gapController = null, a.level = -1, a._forceStartLoad = !1, a.altAudio = !1, a.audioOnly = !1, a.fragPlaying = null, a.onvplaying = null, a.onvseeked = null, a.fragLastKbps = 0, a.stalled = !1, a.couldBacktrack = !1, a.audioCodecSwitch = !1, a.videoBuffer = null, a._registerListeners(), a;
          }
          var c = o.prototype;
          return c._registerListeners = function() {
            var u = this.hls;
            u.on(b.Events.MEDIA_ATTACHED, this.onMediaAttached, this), u.on(b.Events.MEDIA_DETACHING, this.onMediaDetaching, this), u.on(b.Events.MANIFEST_LOADING, this.onManifestLoading, this), u.on(b.Events.MANIFEST_PARSED, this.onManifestParsed, this), u.on(b.Events.LEVEL_LOADING, this.onLevelLoading, this), u.on(b.Events.LEVEL_LOADED, this.onLevelLoaded, this), u.on(b.Events.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), u.on(b.Events.ERROR, this.onError, this), u.on(b.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), u.on(b.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), u.on(b.Events.BUFFER_CREATED, this.onBufferCreated, this), u.on(b.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), u.on(b.Events.LEVELS_UPDATED, this.onLevelsUpdated, this), u.on(b.Events.FRAG_BUFFERED, this.onFragBuffered, this);
          }, c._unregisterListeners = function() {
            var u = this.hls;
            u.off(b.Events.MEDIA_ATTACHED, this.onMediaAttached, this), u.off(b.Events.MEDIA_DETACHING, this.onMediaDetaching, this), u.off(b.Events.MANIFEST_LOADING, this.onManifestLoading, this), u.off(b.Events.MANIFEST_PARSED, this.onManifestParsed, this), u.off(b.Events.LEVEL_LOADED, this.onLevelLoaded, this), u.off(b.Events.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), u.off(b.Events.ERROR, this.onError, this), u.off(b.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), u.off(b.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), u.off(b.Events.BUFFER_CREATED, this.onBufferCreated, this), u.off(b.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), u.off(b.Events.LEVELS_UPDATED, this.onLevelsUpdated, this), u.off(b.Events.FRAG_BUFFERED, this.onFragBuffered, this);
          }, c.onHandlerDestroying = function() {
            this._unregisterListeners(), this.onMediaDetaching();
          }, c.startLoad = function(u) {
            if (this.levels) {
              var a = this.lastCurrentTime, l = this.hls;
              if (this.stopLoad(), this.setInterval(f), this.level = -1, this.fragLoadError = 0, !this.startFragRequested) {
                var d = l.startLevel;
                d === -1 && (l.config.testBandwidth ? (d = 0, this.bitrateTest = !0) : d = l.nextAutoLevel), this.level = l.nextLoadLevel = d, this.loadedmetadata = !1;
              }
              a > 0 && u === -1 && (this.log("Override startPosition with lastCurrentTime @" + a.toFixed(3)), u = a), this.state = D.State.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = u, this.tick();
            } else
              this._forceStartLoad = !0, this.state = D.State.STOPPED;
          }, c.stopLoad = function() {
            this._forceStartLoad = !1, i.prototype.stopLoad.call(this);
          }, c.doTick = function() {
            switch (this.state) {
              case D.State.IDLE:
                this.doTickIdle();
                break;
              case D.State.WAITING_LEVEL: {
                var u, a = this.levels, l = this.level, d = a == null || (u = a[l]) === null || u === void 0 ? void 0 : u.details;
                if (d && (!d.live || this.levelLastLoaded === this.level)) {
                  if (this.waitForCdnTuneIn(d))
                    break;
                  this.state = D.State.IDLE;
                  break;
                }
                break;
              }
              case D.State.FRAG_LOADING_WAITING_RETRY:
                {
                  var g, x = self.performance.now(), R = this.retryDate;
                  (!R || x >= R || (g = this.media) !== null && g !== void 0 && g.seeking) && (this.log("retryDate reached, switch back to IDLE state"), this.state = D.State.IDLE);
                }
                break;
            }
            this.onTickEnd();
          }, c.onTickEnd = function() {
            i.prototype.onTickEnd.call(this), this.checkBuffer(), this.checkFragmentChanged();
          }, c.doTickIdle = function() {
            var u, a, l = this.hls, d = this.levelLastLoaded, g = this.levels, x = this.media, R = l.config, P = l.nextLoadLevel;
            if (!(d === null || !x && (this.startFragRequested || !R.startFragPrefetch)) && !(this.altAudio && this.audioOnly) && !(!g || !g[P])) {
              var _ = g[P];
              this.level = l.nextLoadLevel = P;
              var F = _.details;
              if (!F || this.state === D.State.WAITING_LEVEL || F.live && this.levelLastLoaded !== P) {
                this.state = D.State.WAITING_LEVEL;
                return;
              }
              var B = this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : x, L.PlaylistLevelType.MAIN);
              if (B !== null) {
                var U = B.len, N = this.getMaxBufferLength(_.maxBitrate);
                if (!(U >= N)) {
                  if (this._streamEnded(B, F)) {
                    var k = {};
                    this.altAudio && (k.type = "video"), this.hls.trigger(b.Events.BUFFER_EOS, k), this.state = D.State.ENDED;
                    return;
                  }
                  var w = B.end, K = this.getNextFragment(w, F);
                  if (this.couldBacktrack && !this.fragPrevious && K && K.sn !== "initSegment") {
                    var j = K.sn - F.startSN;
                    j > 1 && (K = F.fragments[j - 1], this.fragmentTracker.removeFragment(K));
                  }
                  if (K && this.fragmentTracker.getState(K) === O.FragmentState.OK && this.nextLoadPosition > w) {
                    var H = this.audioOnly && !this.altAudio ? m.ElementaryStreamTypes.AUDIO : m.ElementaryStreamTypes.VIDEO;
                    this.afterBufferFlushed(x, H, L.PlaylistLevelType.MAIN), K = this.getNextFragment(this.nextLoadPosition, F);
                  }
                  !K || (K.initSegment && !K.initSegment.data && !this.bitrateTest && (K = K.initSegment), ((u = K.decryptdata) === null || u === void 0 ? void 0 : u.keyFormat) === "identity" && !((a = K.decryptdata) !== null && a !== void 0 && a.key) ? this.loadKey(K, F) : this.loadFragment(K, F, w));
                }
              }
            }
          }, c.loadFragment = function(u, a, l) {
            var d, g = this.fragmentTracker.getState(u);
            if (this.fragCurrent = u, g === O.FragmentState.BACKTRACKED) {
              var x = this.fragmentTracker.getBacktrackData(u);
              if (x) {
                this._handleFragmentLoadProgress(x), this._handleFragmentLoadComplete(x);
                return;
              } else
                g = O.FragmentState.NOT_LOADED;
            }
            g === O.FragmentState.NOT_LOADED || g === O.FragmentState.PARTIAL ? u.sn === "initSegment" ? this._loadInitSegment(u) : this.bitrateTest ? (u.bitrateTest = !0, this.log("Fragment " + u.sn + " of level " + u.level + " is being downloaded to test bitrate and will not be buffered"), this._loadBitrateTestFrag(u)) : (this.startFragRequested = !0, i.prototype.loadFragment.call(this, u, a, l)) : g === O.FragmentState.APPENDING ? this.reduceMaxBufferLength(u.duration) && this.fragmentTracker.removeFragment(u) : ((d = this.media) === null || d === void 0 ? void 0 : d.buffered.length) === 0 && this.fragmentTracker.removeAllFragments();
          }, c.getAppendedFrag = function(u) {
            var a = this.fragmentTracker.getAppendedFrag(u, L.PlaylistLevelType.MAIN);
            return a && "fragment" in a ? a.fragment : a;
          }, c.getBufferedFrag = function(u) {
            return this.fragmentTracker.getBufferedFrag(u, L.PlaylistLevelType.MAIN);
          }, c.followingBufferedFrag = function(u) {
            return u ? this.getBufferedFrag(u.end + 0.5) : null;
          }, c.immediateLevelSwitch = function() {
            this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
          }, c.nextLevelSwitch = function() {
            var u = this.levels, a = this.media;
            if (a != null && a.readyState) {
              var l, d = this.getAppendedFrag(a.currentTime);
              if (d && d.start > 1 && this.flushMainBuffer(0, d.start - 1), !a.paused && u) {
                var g = this.hls.nextLoadLevel, x = u[g], R = this.fragLastKbps;
                R && this.fragCurrent ? l = this.fragCurrent.duration * x.maxBitrate / (1e3 * R) + 1 : l = 0;
              } else
                l = 0;
              var P = this.getBufferedFrag(a.currentTime + l);
              if (P) {
                var _ = this.followingBufferedFrag(P);
                if (_) {
                  this.abortCurrentFrag();
                  var F = _.maxStartPTS ? _.maxStartPTS : _.start, B = _.duration, U = Math.max(P.end, F + Math.min(Math.max(B - this.config.maxFragLookUpTolerance, B * 0.5), B * 0.75));
                  this.flushMainBuffer(U, Number.POSITIVE_INFINITY);
                }
              }
            }
          }, c.abortCurrentFrag = function() {
            var u = this.fragCurrent;
            this.fragCurrent = null, u != null && u.loader && u.loader.abort(), this.state === D.State.KEY_LOADING && (this.state = D.State.IDLE), this.nextLoadPosition = this.getLoadPosition();
          }, c.flushMainBuffer = function(u, a) {
            i.prototype.flushMainBuffer.call(this, u, a, this.altAudio ? "video" : null);
          }, c.onMediaAttached = function(u, a) {
            i.prototype.onMediaAttached.call(this, u, a);
            var l = a.media;
            this.onvplaying = this.onMediaPlaying.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), l.addEventListener("playing", this.onvplaying), l.addEventListener("seeked", this.onvseeked), this.gapController = new T.default(this.config, l, this.fragmentTracker, this.hls);
          }, c.onMediaDetaching = function() {
            var u = this.media;
            u && (u.removeEventListener("playing", this.onvplaying), u.removeEventListener("seeked", this.onvseeked), this.onvplaying = this.onvseeked = null, this.videoBuffer = null), this.fragPlaying = null, this.gapController && (this.gapController.destroy(), this.gapController = null), i.prototype.onMediaDetaching.call(this);
          }, c.onMediaPlaying = function() {
            this.tick();
          }, c.onMediaSeeked = function() {
            var u = this.media, a = u ? u.currentTime : null;
            Object(C.isFiniteNumber)(a) && this.log("Media seeked to " + a.toFixed(3)), this.tick();
          }, c.onManifestLoading = function() {
            this.log("Trigger BUFFER_RESET"), this.hls.trigger(b.Events.BUFFER_RESET, void 0), this.fragmentTracker.removeAllFragments(), this.couldBacktrack = this.stalled = !1, this.startPosition = this.lastCurrentTime = 0, this.fragPlaying = null;
          }, c.onManifestParsed = function(u, a) {
            var l = !1, d = !1, g;
            a.levels.forEach(function(x) {
              g = x.audioCodec, g && (g.indexOf("mp4a.40.2") !== -1 && (l = !0), g.indexOf("mp4a.40.5") !== -1 && (d = !0));
            }), this.audioCodecSwitch = l && d && !Object(A.changeTypeSupported)(), this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = a.levels, this.startFragRequested = !1;
          }, c.onLevelLoading = function(u, a) {
            var l = this.levels;
            if (!(!l || this.state !== D.State.IDLE)) {
              var d = l[a.level];
              (!d.details || d.details.live && this.levelLastLoaded !== a.level || this.waitForCdnTuneIn(d.details)) && (this.state = D.State.WAITING_LEVEL);
            }
          }, c.onLevelLoaded = function(u, a) {
            var l, d = this.levels, g = a.level, x = a.details, R = x.totalduration;
            if (!d) {
              this.warn("Levels were reset while loading level " + g);
              return;
            }
            this.log("Level " + g + " loaded [" + x.startSN + "," + x.endSN + "], cc [" + x.startCC + ", " + x.endCC + "] duration:" + R);
            var P = this.fragCurrent;
            P && (this.state === D.State.FRAG_LOADING || this.state === D.State.FRAG_LOADING_WAITING_RETRY) && P.level !== a.level && P.loader && (this.state = D.State.IDLE, P.loader.abort());
            var _ = d[g], F = 0;
            if (x.live || (l = _.details) !== null && l !== void 0 && l.live) {
              if (x.fragments[0] || (x.deltaUpdateFailed = !0), x.deltaUpdateFailed)
                return;
              F = this.alignPlaylists(x, _.details);
            }
            if (_.details = x, this.levelLastLoaded = g, this.hls.trigger(b.Events.LEVEL_UPDATED, {
              details: x,
              level: g
            }), this.state === D.State.WAITING_LEVEL) {
              if (this.waitForCdnTuneIn(x))
                return;
              this.state = D.State.IDLE;
            }
            this.startFragRequested ? x.live && this.synchronizeToLiveEdge(x) : this.setStartPosition(x, F), this.tick();
          }, c._handleFragmentLoadProgress = function(u) {
            var a, l = u.frag, d = u.part, g = u.payload, x = this.levels;
            if (!x) {
              this.warn("Levels were reset while fragment load was in progress. Fragment " + l.sn + " of level " + l.level + " will not be buffered");
              return;
            }
            var R = x[l.level], P = R.details;
            if (!P) {
              this.warn("Dropping fragment " + l.sn + " of level " + l.level + " after level details were reset");
              return;
            }
            var _ = R.videoCodec, F = P.PTSKnown || !P.live, B = (a = l.initSegment) === null || a === void 0 ? void 0 : a.data, U = this._getAudioCodec(R), N = this.transmuxer = this.transmuxer || new S.default(this.hls, L.PlaylistLevelType.MAIN, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)), k = d ? d.index : -1, w = k !== -1, K = new p.ChunkMetadata(l.level, l.sn, l.stats.chunkCount, g.byteLength, k, w), j = this.initPTS[l.cc];
            N.push(g, B, U, _, l, d, P.totalduration, F, K, j);
          }, c.onAudioTrackSwitching = function(u, a) {
            var l = this.altAudio, d = !!a.url, g = a.id;
            if (!d) {
              if (this.mediaBuffer !== this.media) {
                this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
                var x = this.fragCurrent;
                x != null && x.loader && (this.log("Switching to main audio track, cancel main fragment load"), x.loader.abort()), this.resetTransmuxer(), this.resetLoadingState();
              } else
                this.audioOnly && this.resetTransmuxer();
              var R = this.hls;
              l && R.trigger(b.Events.BUFFER_FLUSHING, {
                startOffset: 0,
                endOffset: Number.POSITIVE_INFINITY,
                type: "audio"
              }), R.trigger(b.Events.AUDIO_TRACK_SWITCHED, {
                id: g
              });
            }
          }, c.onAudioTrackSwitched = function(u, a) {
            var l = a.id, d = !!this.hls.audioTracks[l].url;
            if (d) {
              var g = this.videoBuffer;
              g && this.mediaBuffer !== g && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = g);
            }
            this.altAudio = d, this.tick();
          }, c.onBufferCreated = function(u, a) {
            var l = a.tracks, d, g, x = !1;
            for (var R in l) {
              var P = l[R];
              if (P.id === "main") {
                if (g = R, d = P, R === "video") {
                  var _ = l[R];
                  _ && (this.videoBuffer = _.buffer);
                }
              } else
                x = !0;
            }
            x && d ? (this.log("Alternate track found, use " + g + ".buffered to schedule main fragment loading"), this.mediaBuffer = d.buffer) : this.mediaBuffer = this.media;
          }, c.onFragBuffered = function(u, a) {
            var l = a.frag, d = a.part;
            if (!(l && l.type !== L.PlaylistLevelType.MAIN)) {
              if (this.fragContextChanged(l)) {
                this.warn("Fragment " + l.sn + (d ? " p: " + d.index : "") + " of level " + l.level + " finished buffering, but was aborted. state: " + this.state), this.state === D.State.PARSED && (this.state = D.State.IDLE);
                return;
              }
              var g = d ? d.stats : l.stats;
              this.fragLastKbps = Math.round(8 * g.total / (g.buffering.end - g.loading.first)), l.sn !== "initSegment" && (this.fragPrevious = l), this.fragBufferedComplete(l, d);
            }
          }, c.onError = function(u, a) {
            switch (a.details) {
              case E.ErrorDetails.FRAG_LOAD_ERROR:
              case E.ErrorDetails.FRAG_LOAD_TIMEOUT:
              case E.ErrorDetails.KEY_LOAD_ERROR:
              case E.ErrorDetails.KEY_LOAD_TIMEOUT:
                this.onFragmentOrKeyLoadError(L.PlaylistLevelType.MAIN, a);
                break;
              case E.ErrorDetails.LEVEL_LOAD_ERROR:
              case E.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                this.state !== D.State.ERROR && (a.fatal ? (this.warn("" + a.details), this.state = D.State.ERROR) : !a.levelRetry && this.state === D.State.WAITING_LEVEL && (this.state = D.State.IDLE));
                break;
              case E.ErrorDetails.BUFFER_FULL_ERROR:
                if (a.parent === "main" && (this.state === D.State.PARSING || this.state === D.State.PARSED)) {
                  var l = !0, d = this.getFwdBufferInfo(this.media, L.PlaylistLevelType.MAIN);
                  d && d.len > 0.5 && (l = !this.reduceMaxBufferLength(d.len)), l && (this.warn("buffer full error also media.currentTime is not buffered, flush main"), this.immediateLevelSwitch()), this.resetLoadingState();
                }
                break;
            }
          }, c.checkBuffer = function() {
            var u = this.media, a = this.gapController;
            if (!(!u || !a || !u.readyState)) {
              var l = I.BufferHelper.getBuffered(u);
              !this.loadedmetadata && l.length ? (this.loadedmetadata = !0, this.seekToStartPos()) : a.poll(this.lastCurrentTime), this.lastCurrentTime = u.currentTime;
            }
          }, c.onFragLoadEmergencyAborted = function() {
            this.state = D.State.IDLE, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tickImmediate();
          }, c.onBufferFlushed = function(u, a) {
            var l = a.type;
            if (l !== m.ElementaryStreamTypes.AUDIO || this.audioOnly && !this.altAudio) {
              var d = (l === m.ElementaryStreamTypes.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
              this.afterBufferFlushed(d, l, L.PlaylistLevelType.MAIN);
            }
          }, c.onLevelsUpdated = function(u, a) {
            this.levels = a.levels;
          }, c.swapAudioCodec = function() {
            this.audioCodecSwap = !this.audioCodecSwap;
          }, c.seekToStartPos = function() {
            var u = this.media, a = u.currentTime, l = this.startPosition;
            if (l >= 0 && a < l) {
              if (u.seeking) {
                v.logger.log("could not seek to " + l + ", already seeking at " + a);
                return;
              }
              var d = I.BufferHelper.getBuffered(u), g = d.length ? d.start(0) : 0, x = g - l;
              x > 0 && (x < this.config.maxBufferHole || x < this.config.maxFragLookUpTolerance) && (v.logger.log("adjusting start position by " + x + " to match buffer start"), l += x, this.startPosition = l), this.log("seek to target start position " + l + " from current time " + a), u.currentTime = l;
            }
          }, c._getAudioCodec = function(u) {
            var a = this.config.defaultAudioCodec || u.audioCodec;
            return this.audioCodecSwap && a && (this.log("Swapping audio codec"), a.indexOf("mp4a.40.5") !== -1 ? a = "mp4a.40.2" : a = "mp4a.40.5"), a;
          }, c._loadBitrateTestFrag = function(u) {
            var a = this;
            this._doFragLoad(u).then(function(l) {
              var d = a.hls;
              if (!(!l || d.nextLoadLevel || a.fragContextChanged(u))) {
                a.fragLoadError = 0, a.state = D.State.IDLE, a.startFragRequested = !1, a.bitrateTest = !1;
                var g = u.stats;
                g.parsing.start = g.parsing.end = g.buffering.start = g.buffering.end = self.performance.now(), d.trigger(b.Events.FRAG_LOADED, l);
              }
            });
          }, c._handleTransmuxComplete = function(u) {
            var a, l = "main", d = this.hls, g = u.remuxResult, x = u.chunkMeta, R = this.getCurrentContext(x);
            if (!R) {
              this.warn("The loading context changed while buffering fragment " + x.sn + " of level " + x.level + ". This chunk will not be buffered."), this.resetLiveStartWhenNotLoaded(x.level);
              return;
            }
            var P = R.frag, _ = R.part, F = R.level, B = g.video, U = g.text, N = g.id3, k = g.initSegment, w = this.altAudio ? void 0 : g.audio;
            if (!this.fragContextChanged(P)) {
              if (this.state = D.State.PARSING, k) {
                k.tracks && (this._bufferInitSegment(F, k.tracks, P, x), d.trigger(b.Events.FRAG_PARSING_INIT_SEGMENT, {
                  frag: P,
                  id: l,
                  tracks: k.tracks
                }));
                var K = k.initPTS, j = k.timescale;
                Object(C.isFiniteNumber)(K) && (this.initPTS[P.cc] = K, d.trigger(b.Events.INIT_PTS_FOUND, {
                  frag: P,
                  id: l,
                  initPTS: K,
                  timescale: j
                }));
              }
              if (B && g.independent !== !1) {
                if (F.details) {
                  var H = B.startPTS, G = B.endPTS, X = B.startDTS, V = B.endDTS;
                  if (_)
                    _.elementaryStreams[B.type] = {
                      startPTS: H,
                      endPTS: G,
                      startDTS: X,
                      endDTS: V
                    };
                  else if (B.firstKeyFrame && B.independent && (this.couldBacktrack = !0), B.dropped && B.independent) {
                    var Y = this.getLoadPosition() + this.config.maxBufferHole;
                    if (Y < H) {
                      this.backtrack(P);
                      return;
                    }
                    P.setElementaryStreamInfo(B.type, P.start, G, P.start, V, !0);
                  }
                  P.setElementaryStreamInfo(B.type, H, G, X, V), this.bufferFragmentData(B, P, _, x);
                }
              } else if (g.independent === !1) {
                this.backtrack(P);
                return;
              }
              if (w) {
                var z = w.startPTS, Q = w.endPTS, $ = w.startDTS, Z = w.endDTS;
                _ && (_.elementaryStreams[m.ElementaryStreamTypes.AUDIO] = {
                  startPTS: z,
                  endPTS: Q,
                  startDTS: $,
                  endDTS: Z
                }), P.setElementaryStreamInfo(m.ElementaryStreamTypes.AUDIO, z, Q, $, Z), this.bufferFragmentData(w, P, _, x);
              }
              if (N != null && (a = N.samples) !== null && a !== void 0 && a.length) {
                var tt = {
                  frag: P,
                  id: l,
                  samples: N.samples
                };
                d.trigger(b.Events.FRAG_PARSING_METADATA, tt);
              }
              if (U) {
                var J = {
                  frag: P,
                  id: l,
                  samples: U.samples
                };
                d.trigger(b.Events.FRAG_PARSING_USERDATA, J);
              }
            }
          }, c._bufferInitSegment = function(u, a, l, d) {
            var g = this;
            if (this.state === D.State.PARSING) {
              this.audioOnly = !!a.audio && !a.video, this.altAudio && !this.audioOnly && delete a.audio;
              var x = a.audio, R = a.video, P = a.audiovideo;
              if (x) {
                var _ = u.audioCodec, F = navigator.userAgent.toLowerCase();
                this.audioCodecSwitch && (_ && (_.indexOf("mp4a.40.5") !== -1 ? _ = "mp4a.40.2" : _ = "mp4a.40.5"), x.metadata.channelCount !== 1 && F.indexOf("firefox") === -1 && (_ = "mp4a.40.5")), F.indexOf("android") !== -1 && x.container !== "audio/mpeg" && (_ = "mp4a.40.2", this.log("Android: force audio codec to " + _)), u.audioCodec && u.audioCodec !== _ && this.log('Swapping manifest audio codec "' + u.audioCodec + '" for "' + _ + '"'), x.levelCodec = _, x.id = "main", this.log("Init audio buffer, container:" + x.container + ", codecs[selected/level/parsed]=[" + (_ || "") + "/" + (u.audioCodec || "") + "/" + x.codec + "]");
              }
              R && (R.levelCodec = u.videoCodec, R.id = "main", this.log("Init video buffer, container:" + R.container + ", codecs[level/parsed]=[" + (u.videoCodec || "") + "/" + R.codec + "]")), P && this.log("Init audiovideo buffer, container:" + P.container + ", codecs[level/parsed]=[" + (u.attrs.CODECS || "") + "/" + P.codec + "]"), this.hls.trigger(b.Events.BUFFER_CODECS, a), Object.keys(a).forEach(function(B) {
                var U = a[B], N = U.initSegment;
                N != null && N.byteLength && g.hls.trigger(b.Events.BUFFER_APPENDING, {
                  type: B,
                  data: N,
                  frag: l,
                  part: null,
                  chunkMeta: d,
                  parent: l.type
                });
              }), this.tick();
            }
          }, c.backtrack = function(u) {
            this.couldBacktrack = !0, this.resetTransmuxer(), this.flushBufferGap(u);
            var a = this.fragmentTracker.backtrack(u);
            this.fragPrevious = null, this.nextLoadPosition = u.start, a ? this.resetFragmentLoading(u) : this.state = D.State.BACKTRACKING;
          }, c.checkFragmentChanged = function() {
            var u = this.media, a = null;
            if (u && u.readyState > 1 && u.seeking === !1) {
              var l = u.currentTime;
              if (I.BufferHelper.isBuffered(u, l) ? a = this.getAppendedFrag(l) : I.BufferHelper.isBuffered(u, l + 0.1) && (a = this.getAppendedFrag(l + 0.1)), a) {
                var d = this.fragPlaying, g = a.level;
                (!d || a.sn !== d.sn || d.level !== g || a.urlId !== d.urlId) && (this.hls.trigger(b.Events.FRAG_CHANGED, {
                  frag: a
                }), (!d || d.level !== g) && this.hls.trigger(b.Events.LEVEL_SWITCHED, {
                  level: g
                }), this.fragPlaying = a);
              }
            }
          }, t(o, [{
            key: "nextLevel",
            get: function() {
              var u = this.nextBufferedFrag;
              return u ? u.level : -1;
            }
          }, {
            key: "currentLevel",
            get: function() {
              var u = this.media;
              if (u) {
                var a = this.getAppendedFrag(u.currentTime);
                if (a)
                  return a.level;
              }
              return -1;
            }
          }, {
            key: "nextBufferedFrag",
            get: function() {
              var u = this.media;
              if (u) {
                var a = this.getAppendedFrag(u.currentTime);
                return this.followingBufferedFrag(a);
              } else
                return null;
            }
          }, {
            key: "forceStartLoad",
            get: function() {
              return this._forceStartLoad;
            }
          }]), o;
        }(D.default);
      },
      "./src/controller/subtitle-stream-controller.ts": function(W, M, y) {
        y.r(M), y.d(M, "SubtitleStreamController", function() {
          return r;
        });
        var C = y("./src/events.ts"), D = y("./src/utils/logger.ts"), A = y("./src/utils/buffer-helper.ts"), b = y("./src/controller/fragment-finders.ts"), I = y("./src/utils/discontinuities.ts"), O = y("./src/controller/level-helper.ts"), L = y("./src/controller/fragment-tracker.ts"), m = y("./src/controller/base-stream-controller.ts"), S = y("./src/types/loader.ts"), p = y("./src/types/level.ts");
        function T(e, f) {
          for (var s = 0; s < f.length; s++) {
            var i = f[s];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }
        function E(e, f, s) {
          return f && T(e.prototype, f), s && T(e, s), e;
        }
        function v(e, f) {
          e.prototype = Object.create(f.prototype), e.prototype.constructor = e, n(e, f);
        }
        function n(e, f) {
          return n = Object.setPrototypeOf || function(i, o) {
            return i.__proto__ = o, i;
          }, n(e, f);
        }
        var t = 500, r = /* @__PURE__ */ function(e) {
          v(f, e);
          function f(i, o) {
            var c;
            return c = e.call(this, i, o, "[subtitle-stream-controller]") || this, c.levels = [], c.currentTrackId = -1, c.tracksBuffered = [], c.mainDetails = null, c._registerListeners(), c;
          }
          var s = f.prototype;
          return s.onHandlerDestroying = function() {
            this._unregisterListeners(), this.mainDetails = null;
          }, s._registerListeners = function() {
            var o = this.hls;
            o.on(C.Events.MEDIA_ATTACHED, this.onMediaAttached, this), o.on(C.Events.MEDIA_DETACHING, this.onMediaDetaching, this), o.on(C.Events.MANIFEST_LOADING, this.onManifestLoading, this), o.on(C.Events.LEVEL_LOADED, this.onLevelLoaded, this), o.on(C.Events.ERROR, this.onError, this), o.on(C.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), o.on(C.Events.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), o.on(C.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), o.on(C.Events.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), o.on(C.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
          }, s._unregisterListeners = function() {
            var o = this.hls;
            o.off(C.Events.MEDIA_ATTACHED, this.onMediaAttached, this), o.off(C.Events.MEDIA_DETACHING, this.onMediaDetaching, this), o.off(C.Events.MANIFEST_LOADING, this.onManifestLoading, this), o.off(C.Events.LEVEL_LOADED, this.onLevelLoaded, this), o.off(C.Events.ERROR, this.onError, this), o.off(C.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), o.off(C.Events.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), o.off(C.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), o.off(C.Events.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), o.off(C.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
          }, s.startLoad = function() {
            this.stopLoad(), this.state = m.State.IDLE, this.setInterval(t), this.tick();
          }, s.onManifestLoading = function() {
            this.mainDetails = null, this.fragmentTracker.removeAllFragments();
          }, s.onLevelLoaded = function(o, c) {
            this.mainDetails = c.details;
          }, s.onSubtitleFragProcessed = function(o, c) {
            var h = c.frag, u = c.success;
            if (this.fragPrevious = h, this.state = m.State.IDLE, !!u) {
              var a = this.tracksBuffered[this.currentTrackId];
              if (!!a) {
                for (var l, d = h.start, g = 0; g < a.length; g++)
                  if (d >= a[g].start && d <= a[g].end) {
                    l = a[g];
                    break;
                  }
                var x = h.start + h.duration;
                l ? l.end = x : (l = {
                  start: d,
                  end: x
                }, a.push(l)), this.fragmentTracker.fragBuffered(h);
              }
            }
          }, s.onBufferFlushing = function(o, c) {
            var h = c.startOffset, u = c.endOffset;
            if (h === 0 && u !== Number.POSITIVE_INFINITY) {
              var a = this.currentTrackId, l = this.levels;
              if (!l.length || !l[a] || !l[a].details)
                return;
              var d = l[a].details, g = d.targetduration, x = u - g;
              if (x <= 0)
                return;
              c.endOffsetSubtitles = Math.max(0, x), this.tracksBuffered.forEach(function(R) {
                for (var P = 0; P < R.length; ) {
                  if (R[P].end <= x) {
                    R.shift();
                    continue;
                  } else if (R[P].start < x)
                    R[P].start = x;
                  else
                    break;
                  P++;
                }
              }), this.fragmentTracker.removeFragmentsInRange(h, x, S.PlaylistLevelType.SUBTITLE);
            }
          }, s.onError = function(o, c) {
            var h, u = c.frag;
            !u || u.type !== S.PlaylistLevelType.SUBTITLE || ((h = this.fragCurrent) !== null && h !== void 0 && h.loader && this.fragCurrent.loader.abort(), this.state = m.State.IDLE);
          }, s.onSubtitleTracksUpdated = function(o, c) {
            var h = this, u = c.subtitleTracks;
            this.tracksBuffered = [], this.levels = u.map(function(a) {
              return new p.Level(a);
            }), this.fragmentTracker.removeAllFragments(), this.fragPrevious = null, this.levels.forEach(function(a) {
              h.tracksBuffered[a.id] = [];
            }), this.mediaBuffer = null;
          }, s.onSubtitleTrackSwitch = function(o, c) {
            if (this.currentTrackId = c.id, !this.levels.length || this.currentTrackId === -1) {
              this.clearInterval();
              return;
            }
            var h = this.levels[this.currentTrackId];
            h != null && h.details ? this.mediaBuffer = this.mediaBufferTimeRanges : this.mediaBuffer = null, h && this.setInterval(t);
          }, s.onSubtitleTrackLoaded = function(o, c) {
            var h, u = c.details, a = c.id, l = this.currentTrackId, d = this.levels;
            if (!!d.length) {
              var g = d[l];
              if (!(a >= d.length || a !== l || !g)) {
                if (this.mediaBuffer = this.mediaBufferTimeRanges, u.live || (h = g.details) !== null && h !== void 0 && h.live) {
                  var x = this.mainDetails;
                  if (u.deltaUpdateFailed || !x)
                    return;
                  var R = x.fragments[0];
                  if (!g.details)
                    u.hasProgramDateTime && x.hasProgramDateTime ? Object(I.alignMediaPlaylistByPDT)(u, x) : R && Object(O.addSliding)(u, R.start);
                  else {
                    var P = this.alignPlaylists(u, g.details);
                    P === 0 && R && Object(O.addSliding)(u, R.start);
                  }
                }
                if (g.details = u, this.levelLastLoaded = a, this.tick(), u.live && !this.fragCurrent && this.media && this.state === m.State.IDLE) {
                  var _ = Object(b.findFragmentByPTS)(null, u.fragments, this.media.currentTime, 0);
                  _ || (this.warn("Subtitle playlist not aligned with playback"), g.details = void 0);
                }
              }
            }
          }, s._handleFragmentLoadComplete = function(o) {
            var c = o.frag, h = o.payload, u = c.decryptdata, a = this.hls;
            if (!this.fragContextChanged(c) && h && h.byteLength > 0 && u && u.key && u.iv && u.method === "AES-128") {
              var l = performance.now();
              this.decrypter.webCryptoDecrypt(new Uint8Array(h), u.key.buffer, u.iv.buffer).then(function(d) {
                var g = performance.now();
                a.trigger(C.Events.FRAG_DECRYPTED, {
                  frag: c,
                  payload: d,
                  stats: {
                    tstart: l,
                    tdecrypt: g
                  }
                });
              });
            }
          }, s.doTick = function() {
            if (!this.media) {
              this.state = m.State.IDLE;
              return;
            }
            if (this.state === m.State.IDLE) {
              var o, c = this.currentTrackId, h = this.levels;
              if (!h.length || !h[c] || !h[c].details)
                return;
              var u = h[c].details, a = u.targetduration, l = this.config, d = this.media, g = A.BufferHelper.bufferedInfo(this.mediaBufferTimeRanges, d.currentTime - a, l.maxBufferHole), x = g.end, R = g.len, P = this.getMaxBufferLength() + a;
              if (R > P)
                return;
              console.assert(u, "Subtitle track details are defined on idle subtitle stream controller tick");
              var _ = u.fragments, F = _.length, B = u.edge, U, N = this.fragPrevious;
              if (x < B) {
                var k = l.maxFragLookUpTolerance;
                U = Object(b.findFragmentByPTS)(N, _, x, k), !U && N && N.start < _[0].start && (U = _[0]);
              } else
                U = _[F - 1];
              (o = U) !== null && o !== void 0 && o.encrypted ? (D.logger.log("Loading key for " + U.sn), this.state = m.State.KEY_LOADING, this.hls.trigger(C.Events.KEY_LOADING, {
                frag: U
              })) : U && this.fragmentTracker.getState(U) === L.FragmentState.NOT_LOADED && this.loadFragment(U, u, x);
            }
          }, s.loadFragment = function(o, c, h) {
            this.fragCurrent = o, e.prototype.loadFragment.call(this, o, c, h);
          }, E(f, [{
            key: "mediaBufferTimeRanges",
            get: function() {
              return this.tracksBuffered[this.currentTrackId] || [];
            }
          }]), f;
        }(m.default);
      },
      "./src/controller/subtitle-track-controller.ts": function(W, M, y) {
        y.r(M);
        var C = y("./src/events.ts"), D = y("./src/utils/texttrack-utils.ts"), A = y("./src/controller/base-playlist-controller.ts"), b = y("./src/types/loader.ts");
        function I(T, E) {
          for (var v = 0; v < E.length; v++) {
            var n = E[v];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(T, n.key, n);
          }
        }
        function O(T, E, v) {
          return E && I(T.prototype, E), v && I(T, v), T;
        }
        function L(T, E) {
          T.prototype = Object.create(E.prototype), T.prototype.constructor = T, m(T, E);
        }
        function m(T, E) {
          return m = Object.setPrototypeOf || function(n, t) {
            return n.__proto__ = t, n;
          }, m(T, E);
        }
        var S = /* @__PURE__ */ function(T) {
          L(E, T);
          function E(n) {
            var t;
            return t = T.call(this, n, "[subtitle-track-controller]") || this, t.media = null, t.tracks = [], t.groupId = null, t.tracksInGroup = [], t.trackId = -1, t.selectDefaultTrack = !0, t.queuedDefaultTrack = -1, t.trackChangeListener = function() {
              return t.onTextTracksChanged();
            }, t.asyncPollTrackChange = function() {
              return t.pollTrackChange(0);
            }, t.useTextTrackPolling = !1, t.subtitlePollingInterval = -1, t.subtitleDisplay = !0, t.registerListeners(), t;
          }
          var v = E.prototype;
          return v.destroy = function() {
            this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.trackChangeListener = this.asyncPollTrackChange = null, T.prototype.destroy.call(this);
          }, v.registerListeners = function() {
            var t = this.hls;
            t.on(C.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(C.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(C.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.on(C.Events.MANIFEST_PARSED, this.onManifestParsed, this), t.on(C.Events.LEVEL_LOADING, this.onLevelLoading, this), t.on(C.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), t.on(C.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.on(C.Events.ERROR, this.onError, this);
          }, v.unregisterListeners = function() {
            var t = this.hls;
            t.off(C.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(C.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(C.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.off(C.Events.MANIFEST_PARSED, this.onManifestParsed, this), t.off(C.Events.LEVEL_LOADING, this.onLevelLoading, this), t.off(C.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), t.off(C.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.off(C.Events.ERROR, this.onError, this);
          }, v.onMediaAttached = function(t, r) {
            this.media = r.media, this.media && (this.queuedDefaultTrack > -1 && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = -1), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.pollTrackChange(500) : this.media.textTracks.addEventListener("change", this.asyncPollTrackChange));
          }, v.pollTrackChange = function(t) {
            self.clearInterval(this.subtitlePollingInterval), this.subtitlePollingInterval = self.setInterval(this.trackChangeListener, t);
          }, v.onMediaDetaching = function() {
            if (!!this.media) {
              self.clearInterval(this.subtitlePollingInterval), this.useTextTrackPolling || this.media.textTracks.removeEventListener("change", this.asyncPollTrackChange), this.trackId > -1 && (this.queuedDefaultTrack = this.trackId);
              var t = p(this.media.textTracks);
              t.forEach(function(r) {
                Object(D.clearCurrentCues)(r);
              }), this.subtitleTrack = -1, this.media = null;
            }
          }, v.onManifestLoading = function() {
            this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.selectDefaultTrack = !0;
          }, v.onManifestParsed = function(t, r) {
            this.tracks = r.subtitleTracks;
          }, v.onSubtitleTrackLoaded = function(t, r) {
            var e = r.id, f = r.details, s = this.trackId, i = this.tracksInGroup[s];
            if (!i) {
              this.warn("Invalid subtitle track id " + e);
              return;
            }
            var o = i.details;
            i.details = r.details, this.log("subtitle track " + e + " loaded [" + f.startSN + "-" + f.endSN + "]"), e === this.trackId && (this.retryCount = 0, this.playlistLoaded(e, r, o));
          }, v.onLevelLoading = function(t, r) {
            this.switchLevel(r.level);
          }, v.onLevelSwitching = function(t, r) {
            this.switchLevel(r.level);
          }, v.switchLevel = function(t) {
            var r = this.hls.levels[t];
            if (!!(r != null && r.textGroupIds)) {
              var e = r.textGroupIds[r.urlId];
              if (this.groupId !== e) {
                var f = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0, s = this.tracks.filter(function(c) {
                  return !e || c.groupId === e;
                });
                this.tracksInGroup = s;
                var i = this.findTrackId(f == null ? void 0 : f.name) || this.findTrackId();
                this.groupId = e;
                var o = {
                  subtitleTracks: s
                };
                this.log("Updating subtitle tracks, " + s.length + ' track(s) found in "' + e + '" group-id'), this.hls.trigger(C.Events.SUBTITLE_TRACKS_UPDATED, o), i !== -1 && this.setSubtitleTrack(i, f);
              }
            }
          }, v.findTrackId = function(t) {
            for (var r = this.tracksInGroup, e = 0; e < r.length; e++) {
              var f = r[e];
              if ((!this.selectDefaultTrack || f.default) && (!t || t === f.name))
                return f.id;
            }
            return -1;
          }, v.onError = function(t, r) {
            T.prototype.onError.call(this, t, r), !(r.fatal || !r.context) && r.context.type === b.PlaylistContextType.SUBTITLE_TRACK && r.context.id === this.trackId && r.context.groupId === this.groupId && this.retryLoadingOrFail(r);
          }, v.loadPlaylist = function(t) {
            var r = this.tracksInGroup[this.trackId];
            if (this.shouldLoadTrack(r)) {
              var e = r.id, f = r.groupId, s = r.url;
              if (t)
                try {
                  s = t.addDirectives(s);
                } catch (i) {
                  this.warn("Could not construct new URL with HLS Delivery Directives: " + i);
                }
              this.log("Loading subtitle playlist for id " + e), this.hls.trigger(C.Events.SUBTITLE_TRACK_LOADING, {
                url: s,
                id: e,
                groupId: f,
                deliveryDirectives: t || null
              });
            }
          }, v.toggleTrackModes = function(t) {
            var r = this, e = this.media, f = this.subtitleDisplay, s = this.trackId;
            if (!!e) {
              var i = p(e.textTracks), o = i.filter(function(u) {
                return u.groupId === r.groupId;
              });
              if (t === -1)
                [].slice.call(i).forEach(function(u) {
                  u.mode = "disabled";
                });
              else {
                var c = o[s];
                c && (c.mode = "disabled");
              }
              var h = o[t];
              h && (h.mode = f ? "showing" : "hidden");
            }
          }, v.setSubtitleTrack = function(t, r) {
            var e, f = this.tracksInGroup;
            if (!this.media) {
              this.queuedDefaultTrack = t;
              return;
            }
            if (this.trackId !== t && this.toggleTrackModes(t), !(this.trackId === t && (t === -1 || (e = f[t]) !== null && e !== void 0 && e.details) || t < -1 || t >= f.length)) {
              this.clearTimer();
              var s = f[t];
              if (this.log("Switching to subtitle track " + t), this.trackId = t, s) {
                var i = s.id, o = s.groupId, c = o === void 0 ? "" : o, h = s.name, u = s.type, a = s.url;
                this.hls.trigger(C.Events.SUBTITLE_TRACK_SWITCH, {
                  id: i,
                  groupId: c,
                  name: h,
                  type: u,
                  url: a
                });
                var l = this.switchParams(s.url, r == null ? void 0 : r.details);
                this.loadPlaylist(l);
              } else
                this.hls.trigger(C.Events.SUBTITLE_TRACK_SWITCH, {
                  id: t
                });
            }
          }, v.onTextTracksChanged = function() {
            if (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval), !(!this.media || !this.hls.config.renderTextTracksNatively)) {
              for (var t = -1, r = p(this.media.textTracks), e = 0; e < r.length; e++)
                if (r[e].mode === "hidden")
                  t = e;
                else if (r[e].mode === "showing") {
                  t = e;
                  break;
                }
              this.subtitleTrack !== t && (this.subtitleTrack = t);
            }
          }, O(E, [{
            key: "subtitleTracks",
            get: function() {
              return this.tracksInGroup;
            }
          }, {
            key: "subtitleTrack",
            get: function() {
              return this.trackId;
            },
            set: function(t) {
              this.selectDefaultTrack = !1;
              var r = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0;
              this.setSubtitleTrack(t, r);
            }
          }]), E;
        }(A.default);
        function p(T) {
          for (var E = [], v = 0; v < T.length; v++) {
            var n = T[v];
            n.kind === "subtitles" && n.label && E.push(T[v]);
          }
          return E;
        }
        M.default = S;
      },
      "./src/controller/timeline-controller.ts": function(W, M, y) {
        y.r(M), y.d(M, "TimelineController", function() {
          return p;
        });
        var C = y("./src/polyfills/number.ts"), D = y("./src/events.ts"), A = y("./src/utils/cea-608-parser.ts"), b = y("./src/utils/output-filter.ts"), I = y("./src/utils/webvtt-parser.ts"), O = y("./src/utils/texttrack-utils.ts"), L = y("./src/utils/imsc1-ttml-parser.ts"), m = y("./src/types/loader.ts"), S = y("./src/utils/logger.ts"), p = /* @__PURE__ */ function() {
          function n(r) {
            if (this.hls = void 0, this.media = null, this.config = void 0, this.enabled = !0, this.Cues = void 0, this.textTracks = [], this.tracks = [], this.initPTS = [], this.timescale = [], this.unparsedVttFrags = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.cea608Parser1 = void 0, this.cea608Parser2 = void 0, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = v(), this.captionsProperties = void 0, this.hls = r, this.config = r.config, this.Cues = r.config.cueHandler, this.captionsProperties = {
              textTrack1: {
                label: this.config.captionsTextTrack1Label,
                languageCode: this.config.captionsTextTrack1LanguageCode
              },
              textTrack2: {
                label: this.config.captionsTextTrack2Label,
                languageCode: this.config.captionsTextTrack2LanguageCode
              },
              textTrack3: {
                label: this.config.captionsTextTrack3Label,
                languageCode: this.config.captionsTextTrack3LanguageCode
              },
              textTrack4: {
                label: this.config.captionsTextTrack4Label,
                languageCode: this.config.captionsTextTrack4LanguageCode
              }
            }, this.config.enableCEA708Captions) {
              var e = new b.default(this, "textTrack1"), f = new b.default(this, "textTrack2"), s = new b.default(this, "textTrack3"), i = new b.default(this, "textTrack4");
              this.cea608Parser1 = new A.default(1, e, f), this.cea608Parser2 = new A.default(3, s, i);
            }
            r.on(D.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), r.on(D.Events.MEDIA_DETACHING, this.onMediaDetaching, this), r.on(D.Events.MANIFEST_LOADING, this.onManifestLoading, this), r.on(D.Events.MANIFEST_LOADED, this.onManifestLoaded, this), r.on(D.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), r.on(D.Events.FRAG_LOADING, this.onFragLoading, this), r.on(D.Events.FRAG_LOADED, this.onFragLoaded, this), r.on(D.Events.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), r.on(D.Events.FRAG_DECRYPTED, this.onFragDecrypted, this), r.on(D.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), r.on(D.Events.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), r.on(D.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
          }
          var t = n.prototype;
          return t.destroy = function() {
            var e = this.hls;
            e.off(D.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(D.Events.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(D.Events.MANIFEST_LOADING, this.onManifestLoading, this), e.off(D.Events.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(D.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.off(D.Events.FRAG_LOADING, this.onFragLoading, this), e.off(D.Events.FRAG_LOADED, this.onFragLoaded, this), e.off(D.Events.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), e.off(D.Events.FRAG_DECRYPTED, this.onFragDecrypted, this), e.off(D.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), e.off(D.Events.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), e.off(D.Events.BUFFER_FLUSHING, this.onBufferFlushing, this), this.hls = this.config = this.cea608Parser1 = this.cea608Parser2 = null;
          }, t.addCues = function(e, f, s, i, o) {
            for (var c = !1, h = o.length; h--; ) {
              var u = o[h], a = E(u[0], u[1], f, s);
              if (a >= 0 && (u[0] = Math.min(u[0], f), u[1] = Math.max(u[1], s), c = !0, a / (s - f) > 0.5))
                return;
            }
            if (c || o.push([f, s]), this.config.renderTextTracksNatively) {
              var l = this.captionsTracks[e];
              this.Cues.newCue(l, f, s, i);
            } else {
              var d = this.Cues.newCue(null, f, s, i);
              this.hls.trigger(D.Events.CUES_PARSED, {
                type: "captions",
                cues: d,
                track: e
              });
            }
          }, t.onInitPtsFound = function(e, f) {
            var s = this, i = f.frag, o = f.id, c = f.initPTS, h = f.timescale, u = this.unparsedVttFrags;
            o === "main" && (this.initPTS[i.cc] = c, this.timescale[i.cc] = h), u.length && (this.unparsedVttFrags = [], u.forEach(function(a) {
              s.onFragLoaded(D.Events.FRAG_LOADED, a);
            }));
          }, t.getExistingTrack = function(e) {
            var f = this.media;
            if (f)
              for (var s = 0; s < f.textTracks.length; s++) {
                var i = f.textTracks[s];
                if (i[e])
                  return i;
              }
            return null;
          }, t.createCaptionsTrack = function(e) {
            this.config.renderTextTracksNatively ? this.createNativeTrack(e) : this.createNonNativeTrack(e);
          }, t.createNativeTrack = function(e) {
            if (!this.captionsTracks[e]) {
              var f = this.captionsProperties, s = this.captionsTracks, i = this.media, o = f[e], c = o.label, h = o.languageCode, u = this.getExistingTrack(e);
              if (u)
                s[e] = u, Object(O.clearCurrentCues)(s[e]), Object(O.sendAddTrackEvent)(s[e], i);
              else {
                var a = this.createTextTrack("captions", c, h);
                a && (a[e] = !0, s[e] = a);
              }
            }
          }, t.createNonNativeTrack = function(e) {
            if (!this.nonNativeCaptionsTracks[e]) {
              var f = this.captionsProperties[e];
              if (!!f) {
                var s = f.label, i = {
                  _id: e,
                  label: s,
                  kind: "captions",
                  default: f.media ? !!f.media.default : !1,
                  closedCaptions: f.media
                };
                this.nonNativeCaptionsTracks[e] = i, this.hls.trigger(D.Events.NON_NATIVE_TEXT_TRACKS_FOUND, {
                  tracks: [i]
                });
              }
            }
          }, t.createTextTrack = function(e, f, s) {
            var i = this.media;
            if (!!i)
              return i.addTextTrack(e, f, s);
          }, t.onMediaAttaching = function(e, f) {
            this.media = f.media, this._cleanTracks();
          }, t.onMediaDetaching = function() {
            var e = this.captionsTracks;
            Object.keys(e).forEach(function(f) {
              Object(O.clearCurrentCues)(e[f]), delete e[f];
            }), this.nonNativeCaptionsTracks = {};
          }, t.onManifestLoading = function() {
            this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = v(), this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.textTracks = [], this.unparsedVttFrags = this.unparsedVttFrags || [], this.initPTS = [], this.timescale = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset());
          }, t._cleanTracks = function() {
            var e = this.media;
            if (!!e) {
              var f = e.textTracks;
              if (f)
                for (var s = 0; s < f.length; s++)
                  Object(O.clearCurrentCues)(f[s]);
            }
          }, t.onSubtitleTracksUpdated = function(e, f) {
            var s = this;
            this.textTracks = [];
            var i = f.subtitleTracks || [], o = i.some(function(a) {
              return a.textCodec === L.IMSC1_CODEC;
            });
            if (this.config.enableWebVTT || o && this.config.enableIMSC1) {
              var c = this.tracks && i && this.tracks.length === i.length;
              if (this.tracks = i || [], this.config.renderTextTracksNatively) {
                var h = this.media ? this.media.textTracks : [];
                this.tracks.forEach(function(a, l) {
                  var d;
                  if (l < h.length) {
                    for (var g = null, x = 0; x < h.length; x++)
                      if (T(h[x], a)) {
                        g = h[x];
                        break;
                      }
                    g && (d = g);
                  }
                  d ? Object(O.clearCurrentCues)(d) : (d = s.createTextTrack("subtitles", a.name, a.lang), d && (d.mode = "disabled")), d && (d.groupId = a.groupId, s.textTracks.push(d));
                });
              } else if (!c && this.tracks && this.tracks.length) {
                var u = this.tracks.map(function(a) {
                  return {
                    label: a.name,
                    kind: a.type.toLowerCase(),
                    default: a.default,
                    subtitleTrack: a
                  };
                });
                this.hls.trigger(D.Events.NON_NATIVE_TEXT_TRACKS_FOUND, {
                  tracks: u
                });
              }
            }
          }, t.onManifestLoaded = function(e, f) {
            var s = this;
            this.config.enableCEA708Captions && f.captions && f.captions.forEach(function(i) {
              var o = /(?:CC|SERVICE)([1-4])/.exec(i.instreamId);
              if (!!o) {
                var c = "textTrack" + o[1], h = s.captionsProperties[c];
                !h || (h.label = i.name, i.lang && (h.languageCode = i.lang), h.media = i);
              }
            });
          }, t.onFragLoading = function(e, f) {
            var s = this.cea608Parser1, i = this.cea608Parser2, o = this.lastSn, c = this.lastPartIndex;
            if (!(!this.enabled || !(s && i)) && f.frag.type === m.PlaylistLevelType.MAIN) {
              var h, u, a = f.frag.sn, l = (h = f == null || (u = f.part) === null || u === void 0 ? void 0 : u.index) != null ? h : -1;
              a === o + 1 || a === o && l === c + 1 || (s.reset(), i.reset()), this.lastSn = a, this.lastPartIndex = l;
            }
          }, t.onFragLoaded = function(e, f) {
            var s = f.frag, i = f.payload, o = this.initPTS, c = this.unparsedVttFrags;
            if (s.type === m.PlaylistLevelType.SUBTITLE)
              if (i.byteLength) {
                if (!Object(C.isFiniteNumber)(o[s.cc])) {
                  c.push(f), o.length && this.hls.trigger(D.Events.SUBTITLE_FRAG_PROCESSED, {
                    success: !1,
                    frag: s,
                    error: new Error("Missing initial subtitle PTS")
                  });
                  return;
                }
                var h = s.decryptdata;
                if (h == null || h.key == null || h.method !== "AES-128") {
                  var u = this.tracks[s.level], a = this.vttCCs;
                  a[s.cc] || (a[s.cc] = {
                    start: s.start,
                    prevCC: this.prevCC,
                    new: !0
                  }, this.prevCC = s.cc), u && u.textCodec === L.IMSC1_CODEC ? this._parseIMSC1(s, i) : this._parseVTTs(s, i, a);
                }
              } else
                this.hls.trigger(D.Events.SUBTITLE_FRAG_PROCESSED, {
                  success: !1,
                  frag: s,
                  error: new Error("Empty subtitle payload")
                });
          }, t._parseIMSC1 = function(e, f) {
            var s = this, i = this.hls;
            Object(L.parseIMSC1)(f, this.initPTS[e.cc], this.timescale[e.cc], function(o) {
              s._appendCues(o, e.level), i.trigger(D.Events.SUBTITLE_FRAG_PROCESSED, {
                success: !0,
                frag: e
              });
            }, function(o) {
              S.logger.log("Failed to parse IMSC1: " + o), i.trigger(D.Events.SUBTITLE_FRAG_PROCESSED, {
                success: !1,
                frag: e,
                error: o
              });
            });
          }, t._parseVTTs = function(e, f, s) {
            var i = this, o = this.hls;
            Object(I.parseWebVTT)(f, this.initPTS[e.cc], this.timescale[e.cc], s, e.cc, e.start, function(c) {
              i._appendCues(c, e.level), o.trigger(D.Events.SUBTITLE_FRAG_PROCESSED, {
                success: !0,
                frag: e
              });
            }, function(c) {
              i._fallbackToIMSC1(e, f), S.logger.log("Failed to parse VTT cue: " + c), o.trigger(D.Events.SUBTITLE_FRAG_PROCESSED, {
                success: !1,
                frag: e,
                error: c
              });
            });
          }, t._fallbackToIMSC1 = function(e, f) {
            var s = this, i = this.tracks[e.level];
            i.textCodec || Object(L.parseIMSC1)(f, this.initPTS[e.cc], this.timescale[e.cc], function() {
              i.textCodec = L.IMSC1_CODEC, s._parseIMSC1(e, f);
            }, function() {
              i.textCodec = "wvtt";
            });
          }, t._appendCues = function(e, f) {
            var s = this.hls;
            if (this.config.renderTextTracksNatively) {
              var i = this.textTracks[f];
              if (i.mode === "disabled")
                return;
              e.forEach(function(h) {
                return Object(O.addCueToTrack)(i, h);
              });
            } else {
              var o = this.tracks[f], c = o.default ? "default" : "subtitles" + f;
              s.trigger(D.Events.CUES_PARSED, {
                type: "subtitles",
                cues: e,
                track: c
              });
            }
          }, t.onFragDecrypted = function(e, f) {
            var s = f.frag;
            if (s.type === m.PlaylistLevelType.SUBTITLE) {
              if (!Object(C.isFiniteNumber)(this.initPTS[s.cc])) {
                this.unparsedVttFrags.push(f);
                return;
              }
              this.onFragLoaded(D.Events.FRAG_LOADED, f);
            }
          }, t.onSubtitleTracksCleared = function() {
            this.tracks = [], this.captionsTracks = {};
          }, t.onFragParsingUserdata = function(e, f) {
            var s = this.cea608Parser1, i = this.cea608Parser2;
            if (!(!this.enabled || !(s && i)))
              for (var o = 0; o < f.samples.length; o++) {
                var c = f.samples[o].bytes;
                if (c) {
                  var h = this.extractCea608Data(c);
                  s.addData(f.samples[o].pts, h[0]), i.addData(f.samples[o].pts, h[1]);
                }
              }
          }, t.onBufferFlushing = function(e, f) {
            var s = f.startOffset, i = f.endOffset, o = f.endOffsetSubtitles, c = f.type, h = this.media;
            if (!(!h || h.currentTime < i)) {
              if (!c || c === "video") {
                var u = this.captionsTracks;
                Object.keys(u).forEach(function(l) {
                  return Object(O.removeCuesInRange)(u[l], s, i);
                });
              }
              if (this.config.renderTextTracksNatively && s === 0 && o !== void 0) {
                var a = this.textTracks;
                Object.keys(a).forEach(function(l) {
                  return Object(O.removeCuesInRange)(a[l], s, o);
                });
              }
            }
          }, t.extractCea608Data = function(e) {
            for (var f = e[0] & 31, s = 2, i = [[], []], o = 0; o < f; o++) {
              var c = e[s++], h = 127 & e[s++], u = 127 & e[s++], a = (4 & c) !== 0, l = 3 & c;
              h === 0 && u === 0 || a && (l === 0 || l === 1) && (i[l].push(h), i[l].push(u));
            }
            return i;
          }, n;
        }();
        function T(n, t) {
          return n && n.label === t.name && !(n.textTrack1 || n.textTrack2);
        }
        function E(n, t, r, e) {
          return Math.min(t, e) - Math.max(n, r);
        }
        function v() {
          return {
            ccOffset: 0,
            presentationOffset: 0,
            0: {
              start: 0,
              prevCC: -1,
              new: !1
            }
          };
        }
      },
      "./src/crypt/aes-crypto.ts": function(W, M, y) {
        y.r(M), y.d(M, "default", function() {
          return C;
        });
        var C = /* @__PURE__ */ function() {
          function D(b, I) {
            this.subtle = void 0, this.aesIV = void 0, this.subtle = b, this.aesIV = I;
          }
          var A = D.prototype;
          return A.decrypt = function(I, O) {
            return this.subtle.decrypt({
              name: "AES-CBC",
              iv: this.aesIV
            }, O, I);
          }, D;
        }();
      },
      "./src/crypt/aes-decryptor.ts": function(W, M, y) {
        y.r(M), y.d(M, "removePadding", function() {
          return D;
        }), y.d(M, "default", function() {
          return A;
        });
        var C = y("./src/utils/typed-array.ts");
        function D(b) {
          var I = b.byteLength, O = I && new DataView(b.buffer).getUint8(I - 1);
          return O ? Object(C.sliceUint8)(b, 0, I - O) : b;
        }
        var A = /* @__PURE__ */ function() {
          function b() {
            this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.ksRows = 0, this.keySize = 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.initTable();
          }
          var I = b.prototype;
          return I.uint8ArrayToUint32Array_ = function(L) {
            for (var m = new DataView(L), S = new Uint32Array(4), p = 0; p < 4; p++)
              S[p] = m.getUint32(p * 4);
            return S;
          }, I.initTable = function() {
            var L = this.sBox, m = this.invSBox, S = this.subMix, p = S[0], T = S[1], E = S[2], v = S[3], n = this.invSubMix, t = n[0], r = n[1], e = n[2], f = n[3], s = new Uint32Array(256), i = 0, o = 0, c = 0;
            for (c = 0; c < 256; c++)
              c < 128 ? s[c] = c << 1 : s[c] = c << 1 ^ 283;
            for (c = 0; c < 256; c++) {
              var h = o ^ o << 1 ^ o << 2 ^ o << 3 ^ o << 4;
              h = h >>> 8 ^ h & 255 ^ 99, L[i] = h, m[h] = i;
              var u = s[i], a = s[u], l = s[a], d = s[h] * 257 ^ h * 16843008;
              p[i] = d << 24 | d >>> 8, T[i] = d << 16 | d >>> 16, E[i] = d << 8 | d >>> 24, v[i] = d, d = l * 16843009 ^ a * 65537 ^ u * 257 ^ i * 16843008, t[h] = d << 24 | d >>> 8, r[h] = d << 16 | d >>> 16, e[h] = d << 8 | d >>> 24, f[h] = d, i ? (i = u ^ s[s[s[l ^ u]]], o ^= s[s[o]]) : i = o = 1;
            }
          }, I.expandKey = function(L) {
            for (var m = this.uint8ArrayToUint32Array_(L), S = !0, p = 0; p < m.length && S; )
              S = m[p] === this.key[p], p++;
            if (!S) {
              this.key = m;
              var T = this.keySize = m.length;
              if (T !== 4 && T !== 6 && T !== 8)
                throw new Error("Invalid aes key size=" + T);
              var E = this.ksRows = (T + 6 + 1) * 4, v, n, t = this.keySchedule = new Uint32Array(E), r = this.invKeySchedule = new Uint32Array(E), e = this.sBox, f = this.rcon, s = this.invSubMix, i = s[0], o = s[1], c = s[2], h = s[3], u, a;
              for (v = 0; v < E; v++) {
                if (v < T) {
                  u = t[v] = m[v];
                  continue;
                }
                a = u, v % T === 0 ? (a = a << 8 | a >>> 24, a = e[a >>> 24] << 24 | e[a >>> 16 & 255] << 16 | e[a >>> 8 & 255] << 8 | e[a & 255], a ^= f[v / T | 0] << 24) : T > 6 && v % T === 4 && (a = e[a >>> 24] << 24 | e[a >>> 16 & 255] << 16 | e[a >>> 8 & 255] << 8 | e[a & 255]), t[v] = u = (t[v - T] ^ a) >>> 0;
              }
              for (n = 0; n < E; n++)
                v = E - n, n & 3 ? a = t[v] : a = t[v - 4], n < 4 || v <= 4 ? r[n] = a : r[n] = i[e[a >>> 24]] ^ o[e[a >>> 16 & 255]] ^ c[e[a >>> 8 & 255]] ^ h[e[a & 255]], r[n] = r[n] >>> 0;
            }
          }, I.networkToHostOrderSwap = function(L) {
            return L << 24 | (L & 65280) << 8 | (L & 16711680) >> 8 | L >>> 24;
          }, I.decrypt = function(L, m, S) {
            for (var p = this.keySize + 6, T = this.invKeySchedule, E = this.invSBox, v = this.invSubMix, n = v[0], t = v[1], r = v[2], e = v[3], f = this.uint8ArrayToUint32Array_(S), s = f[0], i = f[1], o = f[2], c = f[3], h = new Int32Array(L), u = new Int32Array(h.length), a, l, d, g, x, R, P, _, F, B, U, N, k, w, K = this.networkToHostOrderSwap; m < h.length; ) {
              for (F = K(h[m]), B = K(h[m + 1]), U = K(h[m + 2]), N = K(h[m + 3]), x = F ^ T[0], R = N ^ T[1], P = U ^ T[2], _ = B ^ T[3], k = 4, w = 1; w < p; w++)
                a = n[x >>> 24] ^ t[R >> 16 & 255] ^ r[P >> 8 & 255] ^ e[_ & 255] ^ T[k], l = n[R >>> 24] ^ t[P >> 16 & 255] ^ r[_ >> 8 & 255] ^ e[x & 255] ^ T[k + 1], d = n[P >>> 24] ^ t[_ >> 16 & 255] ^ r[x >> 8 & 255] ^ e[R & 255] ^ T[k + 2], g = n[_ >>> 24] ^ t[x >> 16 & 255] ^ r[R >> 8 & 255] ^ e[P & 255] ^ T[k + 3], x = a, R = l, P = d, _ = g, k = k + 4;
              a = E[x >>> 24] << 24 ^ E[R >> 16 & 255] << 16 ^ E[P >> 8 & 255] << 8 ^ E[_ & 255] ^ T[k], l = E[R >>> 24] << 24 ^ E[P >> 16 & 255] << 16 ^ E[_ >> 8 & 255] << 8 ^ E[x & 255] ^ T[k + 1], d = E[P >>> 24] << 24 ^ E[_ >> 16 & 255] << 16 ^ E[x >> 8 & 255] << 8 ^ E[R & 255] ^ T[k + 2], g = E[_ >>> 24] << 24 ^ E[x >> 16 & 255] << 16 ^ E[R >> 8 & 255] << 8 ^ E[P & 255] ^ T[k + 3], u[m] = K(a ^ s), u[m + 1] = K(g ^ i), u[m + 2] = K(d ^ o), u[m + 3] = K(l ^ c), s = F, i = B, o = U, c = N, m = m + 4;
            }
            return u.buffer;
          }, b;
        }();
      },
      "./src/crypt/decrypter.ts": function(W, M, y) {
        y.r(M), y.d(M, "default", function() {
          return m;
        });
        var C = y("./src/crypt/aes-crypto.ts"), D = y("./src/crypt/fast-aes-key.ts"), A = y("./src/crypt/aes-decryptor.ts"), b = y("./src/utils/logger.ts"), I = y("./src/utils/mp4-tools.ts"), O = y("./src/utils/typed-array.ts"), L = 16, m = /* @__PURE__ */ function() {
          function S(T, E, v) {
            var n = v === void 0 ? {} : v, t = n.removePKCS7Padding, r = t === void 0 ? !0 : t;
            if (this.logEnabled = !0, this.observer = void 0, this.config = void 0, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.observer = T, this.config = E, this.removePKCS7Padding = r, r)
              try {
                var e = self.crypto;
                e && (this.subtle = e.subtle || e.webkitSubtle);
              } catch {
              }
            this.subtle === null && (this.config.enableSoftwareAES = !0);
          }
          var p = S.prototype;
          return p.destroy = function() {
            this.observer = null;
          }, p.isSync = function() {
            return this.config.enableSoftwareAES;
          }, p.flush = function() {
            var E = this.currentResult;
            if (!E) {
              this.reset();
              return;
            }
            var v = new Uint8Array(E);
            return this.reset(), this.removePKCS7Padding ? Object(A.removePadding)(v) : v;
          }, p.reset = function() {
            this.currentResult = null, this.currentIV = null, this.remainderData = null, this.softwareDecrypter && (this.softwareDecrypter = null);
          }, p.decrypt = function(E, v, n, t) {
            if (this.config.enableSoftwareAES) {
              this.softwareDecrypt(new Uint8Array(E), v, n);
              var r = this.flush();
              r && t(r.buffer);
            } else
              this.webCryptoDecrypt(new Uint8Array(E), v, n).then(t);
          }, p.softwareDecrypt = function(E, v, n) {
            var t = this.currentIV, r = this.currentResult, e = this.remainderData;
            this.logOnce("JS AES decrypt"), e && (E = Object(I.appendUint8Array)(e, E), this.remainderData = null);
            var f = this.getValidChunk(E);
            if (!f.length)
              return null;
            t && (n = t);
            var s = this.softwareDecrypter;
            s || (s = this.softwareDecrypter = new A.default()), s.expandKey(v);
            var i = r;
            return this.currentResult = s.decrypt(f.buffer, 0, n), this.currentIV = Object(O.sliceUint8)(f, -16).buffer, i || null;
          }, p.webCryptoDecrypt = function(E, v, n) {
            var t = this, r = this.subtle;
            return (this.key !== v || !this.fastAesKey) && (this.key = v, this.fastAesKey = new D.default(r, v)), this.fastAesKey.expandKey().then(function(e) {
              if (!r)
                return Promise.reject(new Error("web crypto not initialized"));
              var f = new C.default(r, n);
              return f.decrypt(E.buffer, e);
            }).catch(function(e) {
              return t.onWebCryptoError(e, E, v, n);
            });
          }, p.onWebCryptoError = function(E, v, n, t) {
            return b.logger.warn("[decrypter.ts]: WebCrypto Error, disable WebCrypto API:", E), this.config.enableSoftwareAES = !0, this.logEnabled = !0, this.softwareDecrypt(v, n, t);
          }, p.getValidChunk = function(E) {
            var v = E, n = E.length - E.length % L;
            return n !== E.length && (v = Object(O.sliceUint8)(E, 0, n), this.remainderData = Object(O.sliceUint8)(E, n)), v;
          }, p.logOnce = function(E) {
            !this.logEnabled || (b.logger.log("[decrypter.ts]: " + E), this.logEnabled = !1);
          }, S;
        }();
      },
      "./src/crypt/fast-aes-key.ts": function(W, M, y) {
        y.r(M), y.d(M, "default", function() {
          return C;
        });
        var C = /* @__PURE__ */ function() {
          function D(b, I) {
            this.subtle = void 0, this.key = void 0, this.subtle = b, this.key = I;
          }
          var A = D.prototype;
          return A.expandKey = function() {
            return this.subtle.importKey("raw", this.key, {
              name: "AES-CBC"
            }, !1, ["encrypt", "decrypt"]);
          }, D;
        }();
      },
      "./src/demux/aacdemuxer.ts": function(W, M, y) {
        y.r(M);
        var C = y("./src/demux/base-audio-demuxer.ts"), D = y("./src/demux/adts.ts"), A = y("./src/utils/logger.ts"), b = y("./src/demux/id3.ts");
        function I(m, S) {
          m.prototype = Object.create(S.prototype), m.prototype.constructor = m, O(m, S);
        }
        function O(m, S) {
          return O = Object.setPrototypeOf || function(T, E) {
            return T.__proto__ = E, T;
          }, O(m, S);
        }
        var L = /* @__PURE__ */ function(m) {
          I(S, m);
          function S(T, E) {
            var v;
            return v = m.call(this) || this, v.observer = void 0, v.config = void 0, v.observer = T, v.config = E, v;
          }
          var p = S.prototype;
          return p.resetInitSegment = function(E, v, n) {
            m.prototype.resetInitSegment.call(this, E, v, n), this._audioTrack = {
              container: "audio/adts",
              type: "audio",
              id: 2,
              pid: -1,
              sequenceNumber: 0,
              isAAC: !0,
              samples: [],
              manifestCodec: E,
              duration: n,
              inputTimeScale: 9e4,
              dropped: 0
            };
          }, S.probe = function(E) {
            if (!E)
              return !1;
            for (var v = b.getID3Data(E, 0) || [], n = v.length, t = E.length; n < t; n++)
              if (D.probe(E, n))
                return A.logger.log("ADTS sync word found !"), !0;
            return !1;
          }, p.canParse = function(E, v) {
            return D.canParse(E, v);
          }, p.appendFrame = function(E, v, n) {
            D.initTrackConfig(E, this.observer, v, n, E.manifestCodec);
            var t = D.appendFrame(E, v, n, this.initPTS, this.frameIndex);
            if (t && t.missing === 0)
              return t;
          }, S;
        }(C.default);
        L.minProbeByteLength = 9, M.default = L;
      },
      "./src/demux/adts.ts": function(W, M, y) {
        y.r(M), y.d(M, "getAudioConfig", function() {
          return b;
        }), y.d(M, "isHeaderPattern", function() {
          return I;
        }), y.d(M, "getHeaderLength", function() {
          return O;
        }), y.d(M, "getFullFrameLength", function() {
          return L;
        }), y.d(M, "canGetFrameLength", function() {
          return m;
        }), y.d(M, "isHeader", function() {
          return S;
        }), y.d(M, "canParse", function() {
          return p;
        }), y.d(M, "probe", function() {
          return T;
        }), y.d(M, "initTrackConfig", function() {
          return E;
        }), y.d(M, "getFrameDuration", function() {
          return v;
        }), y.d(M, "parseFrameHeader", function() {
          return n;
        }), y.d(M, "appendFrame", function() {
          return t;
        });
        var C = y("./src/utils/logger.ts"), D = y("./src/errors.ts"), A = y("./src/events.ts");
        function b(r, e, f, s) {
          var i, o, c, h, u = navigator.userAgent.toLowerCase(), a = s, l = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
          i = ((e[f + 2] & 192) >>> 6) + 1;
          var d = (e[f + 2] & 60) >>> 2;
          if (d > l.length - 1) {
            r.trigger(A.Events.ERROR, {
              type: D.ErrorTypes.MEDIA_ERROR,
              details: D.ErrorDetails.FRAG_PARSING_ERROR,
              fatal: !0,
              reason: "invalid ADTS sampling index:" + d
            });
            return;
          }
          return c = (e[f + 2] & 1) << 2, c |= (e[f + 3] & 192) >>> 6, C.logger.log("manifest codec:" + s + ", ADTS type:" + i + ", samplingIndex:" + d), /firefox/i.test(u) ? d >= 6 ? (i = 5, h = new Array(4), o = d - 3) : (i = 2, h = new Array(2), o = d) : u.indexOf("android") !== -1 ? (i = 2, h = new Array(2), o = d) : (i = 5, h = new Array(4), s && (s.indexOf("mp4a.40.29") !== -1 || s.indexOf("mp4a.40.5") !== -1) || !s && d >= 6 ? o = d - 3 : ((s && s.indexOf("mp4a.40.2") !== -1 && (d >= 6 && c === 1 || /vivaldi/i.test(u)) || !s && c === 1) && (i = 2, h = new Array(2)), o = d)), h[0] = i << 3, h[0] |= (d & 14) >> 1, h[1] |= (d & 1) << 7, h[1] |= c << 3, i === 5 && (h[1] |= (o & 14) >> 1, h[2] = (o & 1) << 7, h[2] |= 2 << 2, h[3] = 0), {
            config: h,
            samplerate: l[d],
            channelCount: c,
            codec: "mp4a.40." + i,
            manifestCodec: a
          };
        }
        function I(r, e) {
          return r[e] === 255 && (r[e + 1] & 246) === 240;
        }
        function O(r, e) {
          return r[e + 1] & 1 ? 7 : 9;
        }
        function L(r, e) {
          return (r[e + 3] & 3) << 11 | r[e + 4] << 3 | (r[e + 5] & 224) >>> 5;
        }
        function m(r, e) {
          return e + 5 < r.length;
        }
        function S(r, e) {
          return e + 1 < r.length && I(r, e);
        }
        function p(r, e) {
          return m(r, e) && I(r, e) && L(r, e) <= r.length - e;
        }
        function T(r, e) {
          if (S(r, e)) {
            var f = O(r, e);
            if (e + f >= r.length)
              return !1;
            var s = L(r, e);
            if (s <= f)
              return !1;
            var i = e + s;
            return i === r.length || S(r, i);
          }
          return !1;
        }
        function E(r, e, f, s, i) {
          if (!r.samplerate) {
            var o = b(e, f, s, i);
            if (!o)
              return;
            r.config = o.config, r.samplerate = o.samplerate, r.channelCount = o.channelCount, r.codec = o.codec, r.manifestCodec = o.manifestCodec, C.logger.log("parsed codec:" + r.codec + ", rate:" + o.samplerate + ", channels:" + o.channelCount);
          }
        }
        function v(r) {
          return 1024 * 9e4 / r;
        }
        function n(r, e, f, s, i) {
          var o = O(r, e), c = L(r, e);
          if (c -= o, c > 0) {
            var h = f + s * i;
            return {
              headerLength: o,
              frameLength: c,
              stamp: h
            };
          }
        }
        function t(r, e, f, s, i) {
          var o = v(r.samplerate), c = n(e, f, s, i, o);
          if (c) {
            var h = c.frameLength, u = c.headerLength, a = c.stamp, l = u + h, d = Math.max(0, f + l - e.length), g;
            d ? (g = new Uint8Array(l - u), g.set(e.subarray(f + u, e.length), 0)) : g = e.subarray(f + u, f + l);
            var x = {
              unit: g,
              pts: a
            };
            return d || r.samples.push(x), {
              sample: x,
              length: l,
              missing: d
            };
          }
        }
      },
      "./src/demux/base-audio-demuxer.ts": function(W, M, y) {
        y.r(M), y.d(M, "initPTSFn", function() {
          return L;
        });
        var C = y("./src/polyfills/number.ts"), D = y("./src/demux/id3.ts"), A = y("./src/demux/dummy-demuxed-track.ts"), b = y("./src/utils/mp4-tools.ts"), I = y("./src/utils/typed-array.ts"), O = /* @__PURE__ */ function() {
          function m() {
            this._audioTrack = void 0, this._id3Track = void 0, this.frameIndex = 0, this.cachedData = null, this.initPTS = null;
          }
          var S = m.prototype;
          return S.resetInitSegment = function(T, E, v) {
            this._id3Track = {
              type: "id3",
              id: 3,
              pid: -1,
              inputTimeScale: 9e4,
              sequenceNumber: 0,
              samples: [],
              dropped: 0
            };
          }, S.resetTimeStamp = function() {
          }, S.resetContiguity = function() {
          }, S.canParse = function(T, E) {
            return !1;
          }, S.appendFrame = function(T, E, v) {
          }, S.demux = function(T, E) {
            this.cachedData && (T = Object(b.appendUint8Array)(this.cachedData, T), this.cachedData = null);
            var v = D.getID3Data(T, 0), n = v ? v.length : 0, t, r, e = this._audioTrack, f = this._id3Track, s = v ? D.getTimeStamp(v) : void 0, i = T.length;
            for ((this.frameIndex === 0 || this.initPTS === null) && (this.initPTS = L(s, E)), v && v.length > 0 && f.samples.push({
              pts: this.initPTS,
              dts: this.initPTS,
              data: v
            }), r = this.initPTS; n < i; ) {
              if (this.canParse(T, n)) {
                var o = this.appendFrame(e, T, n);
                o ? (this.frameIndex++, r = o.sample.pts, n += o.length, t = n) : n = i;
              } else
                D.canParse(T, n) ? (v = D.getID3Data(T, n), f.samples.push({
                  pts: r,
                  dts: r,
                  data: v
                }), n += v.length, t = n) : n++;
              if (n === i && t !== i) {
                var c = Object(I.sliceUint8)(T, t);
                this.cachedData ? this.cachedData = Object(b.appendUint8Array)(this.cachedData, c) : this.cachedData = c;
              }
            }
            return {
              audioTrack: e,
              avcTrack: Object(A.dummyTrack)(),
              id3Track: f,
              textTrack: Object(A.dummyTrack)()
            };
          }, S.demuxSampleAes = function(T, E, v) {
            return Promise.reject(new Error("[" + this + "] This demuxer does not support Sample-AES decryption"));
          }, S.flush = function(T) {
            var E = this.cachedData;
            return E && (this.cachedData = null, this.demux(E, 0)), this.frameIndex = 0, {
              audioTrack: this._audioTrack,
              avcTrack: Object(A.dummyTrack)(),
              id3Track: this._id3Track,
              textTrack: Object(A.dummyTrack)()
            };
          }, S.destroy = function() {
          }, m;
        }(), L = function(S, p) {
          return Object(C.isFiniteNumber)(S) ? S * 90 : p * 9e4;
        };
        M.default = O;
      },
      "./src/demux/chunk-cache.ts": function(W, M, y) {
        y.r(M), y.d(M, "default", function() {
          return C;
        });
        var C = /* @__PURE__ */ function() {
          function A() {
            this.chunks = [], this.dataLength = 0;
          }
          var b = A.prototype;
          return b.push = function(O) {
            this.chunks.push(O), this.dataLength += O.length;
          }, b.flush = function() {
            var O = this.chunks, L = this.dataLength, m;
            if (O.length)
              O.length === 1 ? m = O[0] : m = D(O, L);
            else
              return new Uint8Array(0);
            return this.reset(), m;
          }, b.reset = function() {
            this.chunks.length = 0, this.dataLength = 0;
          }, A;
        }();
        function D(A, b) {
          for (var I = new Uint8Array(b), O = 0, L = 0; L < A.length; L++) {
            var m = A[L];
            I.set(m, O), O += m.length;
          }
          return I;
        }
      },
      "./src/demux/dummy-demuxed-track.ts": function(W, M, y) {
        y.r(M), y.d(M, "dummyTrack", function() {
          return C;
        });
        function C() {
          return {
            type: "",
            id: -1,
            pid: -1,
            inputTimeScale: 9e4,
            sequenceNumber: -1,
            samples: [],
            dropped: 0
          };
        }
      },
      "./src/demux/exp-golomb.ts": function(W, M, y) {
        y.r(M);
        var C = y("./src/utils/logger.ts"), D = /* @__PURE__ */ function() {
          function A(I) {
            this.data = void 0, this.bytesAvailable = void 0, this.word = void 0, this.bitsAvailable = void 0, this.data = I, this.bytesAvailable = I.byteLength, this.word = 0, this.bitsAvailable = 0;
          }
          var b = A.prototype;
          return b.loadWord = function() {
            var O = this.data, L = this.bytesAvailable, m = O.byteLength - L, S = new Uint8Array(4), p = Math.min(4, L);
            if (p === 0)
              throw new Error("no bytes available");
            S.set(O.subarray(m, m + p)), this.word = new DataView(S.buffer).getUint32(0), this.bitsAvailable = p * 8, this.bytesAvailable -= p;
          }, b.skipBits = function(O) {
            var L;
            this.bitsAvailable > O ? (this.word <<= O, this.bitsAvailable -= O) : (O -= this.bitsAvailable, L = O >> 3, O -= L >> 3, this.bytesAvailable -= L, this.loadWord(), this.word <<= O, this.bitsAvailable -= O);
          }, b.readBits = function(O) {
            var L = Math.min(this.bitsAvailable, O), m = this.word >>> 32 - L;
            return O > 32 && C.logger.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= L, this.bitsAvailable > 0 ? this.word <<= L : this.bytesAvailable > 0 && this.loadWord(), L = O - L, L > 0 && this.bitsAvailable ? m << L | this.readBits(L) : m;
          }, b.skipLZ = function() {
            var O;
            for (O = 0; O < this.bitsAvailable; ++O)
              if ((this.word & 2147483648 >>> O) !== 0)
                return this.word <<= O, this.bitsAvailable -= O, O;
            return this.loadWord(), O + this.skipLZ();
          }, b.skipUEG = function() {
            this.skipBits(1 + this.skipLZ());
          }, b.skipEG = function() {
            this.skipBits(1 + this.skipLZ());
          }, b.readUEG = function() {
            var O = this.skipLZ();
            return this.readBits(O + 1) - 1;
          }, b.readEG = function() {
            var O = this.readUEG();
            return 1 & O ? 1 + O >>> 1 : -1 * (O >>> 1);
          }, b.readBoolean = function() {
            return this.readBits(1) === 1;
          }, b.readUByte = function() {
            return this.readBits(8);
          }, b.readUShort = function() {
            return this.readBits(16);
          }, b.readUInt = function() {
            return this.readBits(32);
          }, b.skipScalingList = function(O) {
            for (var L = 8, m = 8, S, p = 0; p < O; p++)
              m !== 0 && (S = this.readEG(), m = (L + S + 256) % 256), L = m === 0 ? L : m;
          }, b.readSPS = function() {
            var O = 0, L = 0, m = 0, S = 0, p, T, E, v = this.readUByte.bind(this), n = this.readBits.bind(this), t = this.readUEG.bind(this), r = this.readBoolean.bind(this), e = this.skipBits.bind(this), f = this.skipEG.bind(this), s = this.skipUEG.bind(this), i = this.skipScalingList.bind(this);
            v();
            var o = v();
            if (n(5), e(3), v(), s(), o === 100 || o === 110 || o === 122 || o === 244 || o === 44 || o === 83 || o === 86 || o === 118 || o === 128) {
              var c = t();
              if (c === 3 && e(1), s(), s(), e(1), r())
                for (T = c !== 3 ? 8 : 12, E = 0; E < T; E++)
                  r() && (E < 6 ? i(16) : i(64));
            }
            s();
            var h = t();
            if (h === 0)
              t();
            else if (h === 1)
              for (e(1), f(), f(), p = t(), E = 0; E < p; E++)
                f();
            s(), e(1);
            var u = t(), a = t(), l = n(1);
            l === 0 && e(1), e(1), r() && (O = t(), L = t(), m = t(), S = t());
            var d = [1, 1];
            if (r() && r()) {
              var g = v();
              switch (g) {
                case 1:
                  d = [1, 1];
                  break;
                case 2:
                  d = [12, 11];
                  break;
                case 3:
                  d = [10, 11];
                  break;
                case 4:
                  d = [16, 11];
                  break;
                case 5:
                  d = [40, 33];
                  break;
                case 6:
                  d = [24, 11];
                  break;
                case 7:
                  d = [20, 11];
                  break;
                case 8:
                  d = [32, 11];
                  break;
                case 9:
                  d = [80, 33];
                  break;
                case 10:
                  d = [18, 11];
                  break;
                case 11:
                  d = [15, 11];
                  break;
                case 12:
                  d = [64, 33];
                  break;
                case 13:
                  d = [160, 99];
                  break;
                case 14:
                  d = [4, 3];
                  break;
                case 15:
                  d = [3, 2];
                  break;
                case 16:
                  d = [2, 1];
                  break;
                case 255: {
                  d = [v() << 8 | v(), v() << 8 | v()];
                  break;
                }
              }
            }
            return {
              width: Math.ceil((u + 1) * 16 - O * 2 - L * 2),
              height: (2 - l) * (a + 1) * 16 - (l ? 2 : 4) * (m + S),
              pixelRatio: d
            };
          }, b.readSliceType = function() {
            return this.readUByte(), this.readUEG(), this.readUEG();
          }, A;
        }();
        M.default = D;
      },
      "./src/demux/id3.ts": function(W, M, y) {
        y.r(M), y.d(M, "isHeader", function() {
          return C;
        }), y.d(M, "isFooter", function() {
          return D;
        }), y.d(M, "getID3Data", function() {
          return A;
        }), y.d(M, "canParse", function() {
          return I;
        }), y.d(M, "getTimeStamp", function() {
          return O;
        }), y.d(M, "isTimeStampFrame", function() {
          return L;
        }), y.d(M, "getID3Frames", function() {
          return S;
        }), y.d(M, "decodeFrame", function() {
          return p;
        }), y.d(M, "utf8ArrayToStr", function() {
          return t;
        }), y.d(M, "testables", function() {
          return r;
        });
        var C = function(i, o) {
          return o + 10 <= i.length && i[o] === 73 && i[o + 1] === 68 && i[o + 2] === 51 && i[o + 3] < 255 && i[o + 4] < 255 && i[o + 6] < 128 && i[o + 7] < 128 && i[o + 8] < 128 && i[o + 9] < 128;
        }, D = function(i, o) {
          return o + 10 <= i.length && i[o] === 51 && i[o + 1] === 68 && i[o + 2] === 73 && i[o + 3] < 255 && i[o + 4] < 255 && i[o + 6] < 128 && i[o + 7] < 128 && i[o + 8] < 128 && i[o + 9] < 128;
        }, A = function(i, o) {
          for (var c = o, h = 0; C(i, o); ) {
            h += 10;
            var u = b(i, o + 6);
            h += u, D(i, o + 10) && (h += 10), o += h;
          }
          if (h > 0)
            return i.subarray(c, c + h);
        }, b = function(i, o) {
          var c = 0;
          return c = (i[o] & 127) << 21, c |= (i[o + 1] & 127) << 14, c |= (i[o + 2] & 127) << 7, c |= i[o + 3] & 127, c;
        }, I = function(i, o) {
          return C(i, o) && b(i, o + 6) + 10 <= i.length - o;
        }, O = function(i) {
          for (var o = S(i), c = 0; c < o.length; c++) {
            var h = o[c];
            if (L(h))
              return n(h);
          }
        }, L = function(i) {
          return i && i.key === "PRIV" && i.info === "com.apple.streaming.transportStreamTimestamp";
        }, m = function(i) {
          var o = String.fromCharCode(i[0], i[1], i[2], i[3]), c = b(i, 4), h = 10;
          return {
            type: o,
            size: c,
            data: i.subarray(h, h + c)
          };
        }, S = function(i) {
          for (var o = 0, c = []; C(i, o); ) {
            var h = b(i, o + 6);
            o += 10;
            for (var u = o + h; o + 8 < u; ) {
              var a = m(i.subarray(o)), l = p(a);
              l && c.push(l), o += a.size + 10;
            }
            D(i, o) && (o += 10);
          }
          return c;
        }, p = function(i) {
          return i.type === "PRIV" ? T(i) : i.type[0] === "W" ? v(i) : E(i);
        }, T = function(i) {
          if (!(i.size < 2)) {
            var o = t(i.data, !0), c = new Uint8Array(i.data.subarray(o.length + 1));
            return {
              key: i.type,
              info: o,
              data: c.buffer
            };
          }
        }, E = function(i) {
          if (!(i.size < 2)) {
            if (i.type === "TXXX") {
              var o = 1, c = t(i.data.subarray(o), !0);
              o += c.length + 1;
              var h = t(i.data.subarray(o));
              return {
                key: i.type,
                info: c,
                data: h
              };
            }
            var u = t(i.data.subarray(1));
            return {
              key: i.type,
              data: u
            };
          }
        }, v = function(i) {
          if (i.type === "WXXX") {
            if (i.size < 2)
              return;
            var o = 1, c = t(i.data.subarray(o), !0);
            o += c.length + 1;
            var h = t(i.data.subarray(o));
            return {
              key: i.type,
              info: c,
              data: h
            };
          }
          var u = t(i.data);
          return {
            key: i.type,
            data: u
          };
        }, n = function(i) {
          if (i.data.byteLength === 8) {
            var o = new Uint8Array(i.data), c = o[3] & 1, h = (o[4] << 23) + (o[5] << 15) + (o[6] << 7) + o[7];
            return h /= 45, c && (h += 4772185884e-2), Math.round(h);
          }
        }, t = function(i, o) {
          o === void 0 && (o = !1);
          var c = f();
          if (c) {
            var h = c.decode(i);
            if (o) {
              var u = h.indexOf("\0");
              return u !== -1 ? h.substring(0, u) : h;
            }
            return h.replace(/\0/g, "");
          }
          for (var a = i.length, l, d, g, x = "", R = 0; R < a; ) {
            if (l = i[R++], l === 0 && o)
              return x;
            if (l === 0 || l === 3)
              continue;
            switch (l >> 4) {
              case 0:
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
              case 7:
                x += String.fromCharCode(l);
                break;
              case 12:
              case 13:
                d = i[R++], x += String.fromCharCode((l & 31) << 6 | d & 63);
                break;
              case 14:
                d = i[R++], g = i[R++], x += String.fromCharCode((l & 15) << 12 | (d & 63) << 6 | (g & 63) << 0);
                break;
            }
          }
          return x;
        }, r = {
          decodeTextFrame: E
        }, e;
        function f() {
          return !e && typeof self.TextDecoder < "u" && (e = new self.TextDecoder("utf-8")), e;
        }
      },
      "./src/demux/mp3demuxer.ts": function(W, M, y) {
        y.r(M);
        var C = y("./src/demux/base-audio-demuxer.ts"), D = y("./src/demux/id3.ts"), A = y("./src/utils/logger.ts"), b = y("./src/demux/mpegaudio.ts");
        function I(m, S) {
          m.prototype = Object.create(S.prototype), m.prototype.constructor = m, O(m, S);
        }
        function O(m, S) {
          return O = Object.setPrototypeOf || function(T, E) {
            return T.__proto__ = E, T;
          }, O(m, S);
        }
        var L = /* @__PURE__ */ function(m) {
          I(S, m);
          function S() {
            return m.apply(this, arguments) || this;
          }
          var p = S.prototype;
          return p.resetInitSegment = function(E, v, n) {
            m.prototype.resetInitSegment.call(this, E, v, n), this._audioTrack = {
              container: "audio/mpeg",
              type: "audio",
              id: 2,
              pid: -1,
              sequenceNumber: 0,
              isAAC: !1,
              samples: [],
              manifestCodec: E,
              duration: n,
              inputTimeScale: 9e4,
              dropped: 0
            };
          }, S.probe = function(E) {
            if (!E)
              return !1;
            for (var v = D.getID3Data(E, 0) || [], n = v.length, t = E.length; n < t; n++)
              if (b.probe(E, n))
                return A.logger.log("MPEG Audio sync word found !"), !0;
            return !1;
          }, p.canParse = function(E, v) {
            return b.canParse(E, v);
          }, p.appendFrame = function(E, v, n) {
            if (this.initPTS !== null)
              return b.appendFrame(E, v, n, this.initPTS, this.frameIndex);
          }, S;
        }(C.default);
        L.minProbeByteLength = 4, M.default = L;
      },
      "./src/demux/mp4demuxer.ts": function(W, M, y) {
        y.r(M);
        var C = y("./src/utils/mp4-tools.ts"), D = y("./src/demux/dummy-demuxed-track.ts"), A = /* @__PURE__ */ function() {
          function b(O, L) {
            this.remainderData = null, this.config = void 0, this.config = L;
          }
          var I = b.prototype;
          return I.resetTimeStamp = function() {
          }, I.resetInitSegment = function() {
          }, I.resetContiguity = function() {
          }, b.probe = function(L) {
            return Object(C.findBox)({
              data: L,
              start: 0,
              end: Math.min(L.length, 16384)
            }, ["moof"]).length > 0;
          }, I.demux = function(L) {
            var m = L, S = Object(D.dummyTrack)();
            if (this.config.progressive) {
              this.remainderData && (m = Object(C.appendUint8Array)(this.remainderData, L));
              var p = Object(C.segmentValidRange)(m);
              this.remainderData = p.remainder, S.samples = p.valid || new Uint8Array();
            } else
              S.samples = m;
            return {
              audioTrack: Object(D.dummyTrack)(),
              avcTrack: S,
              id3Track: Object(D.dummyTrack)(),
              textTrack: Object(D.dummyTrack)()
            };
          }, I.flush = function() {
            var L = Object(D.dummyTrack)();
            return L.samples = this.remainderData || new Uint8Array(), this.remainderData = null, {
              audioTrack: Object(D.dummyTrack)(),
              avcTrack: L,
              id3Track: Object(D.dummyTrack)(),
              textTrack: Object(D.dummyTrack)()
            };
          }, I.demuxSampleAes = function(L, m, S) {
            return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"));
          }, I.destroy = function() {
          }, b;
        }();
        A.minProbeByteLength = 1024, M.default = A;
      },
      "./src/demux/mpegaudio.ts": function(W, M, y) {
        y.r(M), y.d(M, "appendFrame", function() {
          return O;
        }), y.d(M, "parseHeader", function() {
          return L;
        }), y.d(M, "isHeaderPattern", function() {
          return m;
        }), y.d(M, "isHeader", function() {
          return S;
        }), y.d(M, "canParse", function() {
          return p;
        }), y.d(M, "probe", function() {
          return T;
        });
        var C = null, D = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160], A = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3], b = [
          [
            0,
            72,
            144,
            12
          ],
          [
            0,
            0,
            0,
            0
          ],
          [
            0,
            72,
            144,
            12
          ],
          [
            0,
            144,
            144,
            12
          ]
        ], I = [
          0,
          1,
          1,
          4
        ];
        function O(E, v, n, t, r) {
          if (!(n + 24 > v.length)) {
            var e = L(v, n);
            if (e && n + e.frameLength <= v.length) {
              var f = e.samplesPerFrame * 9e4 / e.sampleRate, s = t + r * f, i = {
                unit: v.subarray(n, n + e.frameLength),
                pts: s,
                dts: s
              };
              return E.config = [], E.channelCount = e.channelCount, E.samplerate = e.sampleRate, E.samples.push(i), {
                sample: i,
                length: e.frameLength,
                missing: 0
              };
            }
          }
        }
        function L(E, v) {
          var n = E[v + 1] >> 3 & 3, t = E[v + 1] >> 1 & 3, r = E[v + 2] >> 4 & 15, e = E[v + 2] >> 2 & 3;
          if (n !== 1 && r !== 0 && r !== 15 && e !== 3) {
            var f = E[v + 2] >> 1 & 1, s = E[v + 3] >> 6, i = n === 3 ? 3 - t : t === 3 ? 3 : 4, o = D[i * 14 + r - 1] * 1e3, c = n === 3 ? 0 : n === 2 ? 1 : 2, h = A[c * 3 + e], u = s === 3 ? 1 : 2, a = b[n][t], l = I[t], d = a * 8 * l, g = Math.floor(a * o / h + f) * l;
            if (C === null) {
              var x = navigator.userAgent || "", R = x.match(/Chrome\/(\d+)/i);
              C = R ? parseInt(R[1]) : 0;
            }
            var P = !!C && C <= 87;
            return P && t === 2 && o >= 224e3 && s === 0 && (E[v + 3] = E[v + 3] | 128), {
              sampleRate: h,
              channelCount: u,
              frameLength: g,
              samplesPerFrame: d
            };
          }
        }
        function m(E, v) {
          return E[v] === 255 && (E[v + 1] & 224) === 224 && (E[v + 1] & 6) !== 0;
        }
        function S(E, v) {
          return v + 1 < E.length && m(E, v);
        }
        function p(E, v) {
          var n = 4;
          return m(E, v) && n <= E.length - v;
        }
        function T(E, v) {
          if (v + 1 < E.length && m(E, v)) {
            var n = 4, t = L(E, v), r = n;
            t != null && t.frameLength && (r = t.frameLength);
            var e = v + r;
            return e === E.length || S(E, e);
          }
          return !1;
        }
      },
      "./src/demux/sample-aes.ts": function(W, M, y) {
        y.r(M);
        var C = y("./src/crypt/decrypter.ts"), D = y("./src/demux/tsdemuxer.ts"), A = /* @__PURE__ */ function() {
          function b(O, L, m) {
            this.keyData = void 0, this.decrypter = void 0, this.keyData = m, this.decrypter = new C.default(O, L, {
              removePKCS7Padding: !1
            });
          }
          var I = b.prototype;
          return I.decryptBuffer = function(L, m) {
            this.decrypter.decrypt(L, this.keyData.key.buffer, this.keyData.iv.buffer, m);
          }, I.decryptAacSample = function(L, m, S, p) {
            var T = L[m].unit, E = T.subarray(16, T.length - T.length % 16), v = E.buffer.slice(E.byteOffset, E.byteOffset + E.length), n = this;
            this.decryptBuffer(v, function(t) {
              var r = new Uint8Array(t);
              T.set(r, 16), p || n.decryptAacSamples(L, m + 1, S);
            });
          }, I.decryptAacSamples = function(L, m, S) {
            for (; ; m++) {
              if (m >= L.length) {
                S();
                return;
              }
              if (!(L[m].unit.length < 32)) {
                var p = this.decrypter.isSync();
                if (this.decryptAacSample(L, m, S, p), !p)
                  return;
              }
            }
          }, I.getAvcEncryptedData = function(L) {
            for (var m = Math.floor((L.length - 48) / 160) * 16 + 16, S = new Int8Array(m), p = 0, T = 32; T < L.length - 16; T += 160, p += 16)
              S.set(L.subarray(T, T + 16), p);
            return S;
          }, I.getAvcDecryptedUnit = function(L, m) {
            for (var S = new Uint8Array(m), p = 0, T = 32; T < L.length - 16; T += 160, p += 16)
              L.set(S.subarray(p, p + 16), T);
            return L;
          }, I.decryptAvcSample = function(L, m, S, p, T, E) {
            var v = Object(D.discardEPB)(T.data), n = this.getAvcEncryptedData(v), t = this;
            this.decryptBuffer(n.buffer, function(r) {
              T.data = t.getAvcDecryptedUnit(v, r), E || t.decryptAvcSamples(L, m, S + 1, p);
            });
          }, I.decryptAvcSamples = function(L, m, S, p) {
            if (L instanceof Uint8Array)
              throw new Error("Cannot decrypt samples of type Uint8Array");
            for (; ; m++, S = 0) {
              if (m >= L.length) {
                p();
                return;
              }
              for (var T = L[m].units; !(S >= T.length); S++) {
                var E = T[S];
                if (!(E.data.length <= 48 || E.type !== 1 && E.type !== 5)) {
                  var v = this.decrypter.isSync();
                  if (this.decryptAvcSample(L, m, S, p, E, v), !v)
                    return;
                }
              }
            }
          }, b;
        }();
        M.default = A;
      },
      "./src/demux/transmuxer-interface.ts": function(W, M, y) {
        y.r(M), y.d(M, "default", function() {
          return S;
        });
        var C = y("./node_modules/webworkify-webpack/index.js"), D = y("./src/events.ts"), A = y("./src/demux/transmuxer.ts"), b = y("./src/utils/logger.ts"), I = y("./src/errors.ts"), O = y("./src/utils/mediasource-helper.ts"), L = y("./node_modules/eventemitter3/index.js"), m = Object(O.getMediaSource)() || {
          isTypeSupported: function() {
            return !1;
          }
        }, S = /* @__PURE__ */ function() {
          function p(E, v, n, t) {
            var r = this;
            this.hls = void 0, this.id = void 0, this.observer = void 0, this.frag = null, this.part = null, this.worker = void 0, this.onwmsg = void 0, this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0, this.hls = E, this.id = v, this.onTransmuxComplete = n, this.onFlush = t;
            var e = E.config, f = function(h, u) {
              u = u || {}, u.frag = r.frag, u.id = r.id, E.trigger(h, u);
            };
            this.observer = new L.EventEmitter(), this.observer.on(D.Events.FRAG_DECRYPTED, f), this.observer.on(D.Events.ERROR, f);
            var s = {
              mp4: m.isTypeSupported("video/mp4"),
              mpeg: m.isTypeSupported("audio/mpeg"),
              mp3: m.isTypeSupported('audio/mp4; codecs="mp3"')
            }, i = navigator.vendor;
            if (e.enableWorker && typeof Worker < "u") {
              b.logger.log("demuxing in webworker");
              var o;
              try {
                o = this.worker = C("./src/demux/transmuxer-worker.ts"), this.onwmsg = this.onWorkerMessage.bind(this), o.addEventListener("message", this.onwmsg), o.onerror = function(c) {
                  E.trigger(D.Events.ERROR, {
                    type: I.ErrorTypes.OTHER_ERROR,
                    details: I.ErrorDetails.INTERNAL_EXCEPTION,
                    fatal: !0,
                    event: "demuxerWorker",
                    error: new Error(c.message + "  (" + c.filename + ":" + c.lineno + ")")
                  });
                }, o.postMessage({
                  cmd: "init",
                  typeSupported: s,
                  vendor: i,
                  id: v,
                  config: JSON.stringify(e)
                });
              } catch (c) {
                b.logger.warn("Error in worker:", c), b.logger.error("Error while initializing DemuxerWorker, fallback to inline"), o && self.URL.revokeObjectURL(o.objectURL), this.transmuxer = new A.default(this.observer, s, e, i, v), this.worker = null;
              }
            } else
              this.transmuxer = new A.default(this.observer, s, e, i, v);
          }
          var T = p.prototype;
          return T.destroy = function() {
            var v = this.worker;
            if (v)
              v.removeEventListener("message", this.onwmsg), v.terminate(), this.worker = null;
            else {
              var n = this.transmuxer;
              n && (n.destroy(), this.transmuxer = null);
            }
            var t = this.observer;
            t && t.removeAllListeners(), this.observer = null;
          }, T.push = function(v, n, t, r, e, f, s, i, o, c) {
            var h, u, a = this;
            o.transmuxing.start = self.performance.now();
            var l = this.transmuxer, d = this.worker, g = f ? f.start : e.start, x = e.decryptdata, R = this.frag, P = !(R && e.cc === R.cc), _ = !(R && o.level === R.level), F = R ? o.sn - R.sn : -1, B = this.part ? o.part - this.part.index : 1, U = !_ && (F === 1 || F === 0 && B === 1), N = self.performance.now();
            (_ || F || e.stats.parsing.start === 0) && (e.stats.parsing.start = N), f && (B || !U) && (f.stats.parsing.start = N);
            var k = !(R && ((h = e.initSegment) === null || h === void 0 ? void 0 : h.url) === ((u = R.initSegment) === null || u === void 0 ? void 0 : u.url)), w = new A.TransmuxState(P, U, i, _, g, k);
            if (!U || P || k) {
              b.logger.log("[transmuxer-interface, " + e.type + "]: Starting new transmux session for sn: " + o.sn + " p: " + o.part + " level: " + o.level + " id: " + o.id + `
        discontinuity: ` + P + `
        trackSwitch: ` + _ + `
        contiguous: ` + U + `
        accurateTimeOffset: ` + i + `
        timeOffset: ` + g + `
        initSegmentChange: ` + k);
              var K = new A.TransmuxConfig(t, r, n, s, c);
              this.configureTransmuxer(K);
            }
            if (this.frag = e, this.part = f, d)
              d.postMessage({
                cmd: "demux",
                data: v,
                decryptdata: x,
                chunkMeta: o,
                state: w
              }, v instanceof ArrayBuffer ? [v] : []);
            else if (l) {
              var j = l.push(v, x, o, w);
              Object(A.isPromise)(j) ? j.then(function(H) {
                a.handleTransmuxComplete(H);
              }) : this.handleTransmuxComplete(j);
            }
          }, T.flush = function(v) {
            var n = this;
            v.transmuxing.start = self.performance.now();
            var t = this.transmuxer, r = this.worker;
            if (r)
              r.postMessage({
                cmd: "flush",
                chunkMeta: v
              });
            else if (t) {
              var e = t.flush(v);
              Object(A.isPromise)(e) ? e.then(function(f) {
                n.handleFlushResult(f, v);
              }) : this.handleFlushResult(e, v);
            }
          }, T.handleFlushResult = function(v, n) {
            var t = this;
            v.forEach(function(r) {
              t.handleTransmuxComplete(r);
            }), this.onFlush(n);
          }, T.onWorkerMessage = function(v) {
            var n = v.data, t = this.hls;
            switch (n.event) {
              case "init": {
                self.URL.revokeObjectURL(this.worker.objectURL);
                break;
              }
              case "transmuxComplete": {
                this.handleTransmuxComplete(n.data);
                break;
              }
              case "flush": {
                this.onFlush(n.data);
                break;
              }
              default: {
                n.data = n.data || {}, n.data.frag = this.frag, n.data.id = this.id, t.trigger(n.event, n.data);
                break;
              }
            }
          }, T.configureTransmuxer = function(v) {
            var n = this.worker, t = this.transmuxer;
            n ? n.postMessage({
              cmd: "configure",
              config: v
            }) : t && t.configure(v);
          }, T.handleTransmuxComplete = function(v) {
            v.chunkMeta.transmuxing.end = self.performance.now(), this.onTransmuxComplete(v);
          }, p;
        }();
      },
      "./src/demux/transmuxer-worker.ts": function(W, M, y) {
        y.r(M), y.d(M, "default", function() {
          return I;
        });
        var C = y("./src/demux/transmuxer.ts"), D = y("./src/events.ts"), A = y("./src/utils/logger.ts"), b = y("./node_modules/eventemitter3/index.js");
        function I(p) {
          var T = new b.EventEmitter(), E = function(n, t) {
            p.postMessage({
              event: n,
              data: t
            });
          };
          T.on(D.Events.FRAG_DECRYPTED, E), T.on(D.Events.ERROR, E), p.addEventListener("message", function(v) {
            var n = v.data;
            switch (n.cmd) {
              case "init": {
                var t = JSON.parse(n.config);
                p.transmuxer = new C.default(T, n.typeSupported, t, n.vendor, n.id), Object(A.enableLogs)(t.debug), E("init", null);
                break;
              }
              case "configure": {
                p.transmuxer.configure(n.config);
                break;
              }
              case "demux": {
                var r = p.transmuxer.push(n.data, n.decryptdata, n.chunkMeta, n.state);
                Object(C.isPromise)(r) ? r.then(function(s) {
                  O(p, s);
                }) : O(p, r);
                break;
              }
              case "flush": {
                var e = n.chunkMeta, f = p.transmuxer.flush(e);
                Object(C.isPromise)(f) ? f.then(function(s) {
                  m(p, s, e);
                }) : m(p, f, e);
                break;
              }
            }
          });
        }
        function O(p, T) {
          if (!S(T.remuxResult)) {
            var E = [], v = T.remuxResult, n = v.audio, t = v.video;
            n && L(E, n), t && L(E, t), p.postMessage({
              event: "transmuxComplete",
              data: T
            }, E);
          }
        }
        function L(p, T) {
          T.data1 && p.push(T.data1.buffer), T.data2 && p.push(T.data2.buffer);
        }
        function m(p, T, E) {
          T.forEach(function(v) {
            O(p, v);
          }), p.postMessage({
            event: "flush",
            data: E
          });
        }
        function S(p) {
          return !p.audio && !p.video && !p.text && !p.id3 && !p.initSegment;
        }
      },
      "./src/demux/transmuxer.ts": function(W, M, y) {
        y.r(M), y.d(M, "default", function() {
          return r;
        }), y.d(M, "isPromise", function() {
          return s;
        }), y.d(M, "TransmuxConfig", function() {
          return i;
        }), y.d(M, "TransmuxState", function() {
          return o;
        });
        var C = y("./src/events.ts"), D = y("./src/errors.ts"), A = y("./src/crypt/decrypter.ts"), b = y("./src/demux/aacdemuxer.ts"), I = y("./src/demux/mp4demuxer.ts"), O = y("./src/demux/tsdemuxer.ts"), L = y("./src/demux/mp3demuxer.ts"), m = y("./src/remux/mp4-remuxer.ts"), S = y("./src/remux/passthrough-remuxer.ts"), p = y("./src/demux/chunk-cache.ts"), T = y("./src/utils/mp4-tools.ts"), E = y("./src/utils/logger.ts"), v;
        try {
          v = self.performance.now.bind(self.performance);
        } catch {
          E.logger.debug("Unable to use Performance API on this environment"), v = self.Date.now;
        }
        var n = [{
          demux: O.default,
          remux: m.default
        }, {
          demux: I.default,
          remux: S.default
        }, {
          demux: b.default,
          remux: m.default
        }, {
          demux: L.default,
          remux: m.default
        }], t = 1024;
        n.forEach(function(c) {
          var h = c.demux;
          t = Math.max(t, h.minProbeByteLength);
        });
        var r = /* @__PURE__ */ function() {
          function c(u, a, l, d, g) {
            this.observer = void 0, this.typeSupported = void 0, this.config = void 0, this.vendor = void 0, this.id = void 0, this.demuxer = void 0, this.remuxer = void 0, this.decrypter = void 0, this.probe = void 0, this.decryptionPromise = null, this.transmuxConfig = void 0, this.currentTransmuxState = void 0, this.cache = new p.default(), this.observer = u, this.typeSupported = a, this.config = l, this.vendor = d, this.id = g;
          }
          var h = c.prototype;
          return h.configure = function(a) {
            this.transmuxConfig = a, this.decrypter && this.decrypter.reset();
          }, h.push = function(a, l, d, g) {
            var x = this, R = d.transmuxing;
            R.executeStart = v();
            var P = new Uint8Array(a), _ = this.cache, F = this.config, B = this.currentTransmuxState, U = this.transmuxConfig;
            g && (this.currentTransmuxState = g);
            var N = e(P, l);
            if (N && N.method === "AES-128") {
              var k = this.getDecrypter();
              if (F.enableSoftwareAES) {
                var w = k.softwareDecrypt(P, N.key.buffer, N.iv.buffer);
                if (!w)
                  return R.executeEnd = v(), f(d);
                P = new Uint8Array(w);
              } else
                return this.decryptionPromise = k.webCryptoDecrypt(P, N.key.buffer, N.iv.buffer).then(function(rt) {
                  var at = x.push(rt, null, d);
                  return x.decryptionPromise = null, at;
                }), this.decryptionPromise;
            }
            var K = g || B, j = K.contiguous, H = K.discontinuity, G = K.trackSwitch, X = K.accurateTimeOffset, V = K.timeOffset, Y = K.initSegmentChange, z = U.audioCodec, Q = U.videoCodec, $ = U.defaultInitPts, Z = U.duration, tt = U.initSegmentData;
            if ((H || G || Y) && this.resetInitSegment(tt, z, Q, Z), (H || Y) && this.resetInitialTimestamp($), j || this.resetContiguity(), this.needsProbing(P, H, G)) {
              if (_.dataLength) {
                var J = _.flush();
                P = Object(T.appendUint8Array)(J, P);
              }
              this.configureTransmuxer(P, U);
            }
            var et = this.transmux(P, N, V, X, d), nt = this.currentTransmuxState;
            return nt.contiguous = !0, nt.discontinuity = !1, nt.trackSwitch = !1, R.executeEnd = v(), et;
          }, h.flush = function(a) {
            var l = this, d = a.transmuxing;
            d.executeStart = v();
            var g = this.decrypter, x = this.cache, R = this.currentTransmuxState, P = this.decryptionPromise;
            if (P)
              return P.then(function() {
                return l.flush(a);
              });
            var _ = [], F = R.timeOffset;
            if (g) {
              var B = g.flush();
              B && _.push(this.push(B, null, a));
            }
            var U = x.dataLength;
            x.reset();
            var N = this.demuxer, k = this.remuxer;
            if (!N || !k)
              return U >= t && this.observer.emit(C.Events.ERROR, C.Events.ERROR, {
                type: D.ErrorTypes.MEDIA_ERROR,
                details: D.ErrorDetails.FRAG_PARSING_ERROR,
                fatal: !0,
                reason: "no demux matching with content found"
              }), d.executeEnd = v(), [f(a)];
            var w = N.flush(F);
            return s(w) ? w.then(function(K) {
              return l.flushRemux(_, K, a), _;
            }) : (this.flushRemux(_, w, a), _);
          }, h.flushRemux = function(a, l, d) {
            var g = l.audioTrack, x = l.avcTrack, R = l.id3Track, P = l.textTrack, _ = this.currentTransmuxState, F = _.accurateTimeOffset, B = _.timeOffset;
            E.logger.log("[transmuxer.ts]: Flushed fragment " + d.sn + (d.part > -1 ? " p: " + d.part : "") + " of level " + d.level);
            var U = this.remuxer.remux(g, x, R, P, B, F, !0, this.id);
            a.push({
              remuxResult: U,
              chunkMeta: d
            }), d.transmuxing.executeEnd = v();
          }, h.resetInitialTimestamp = function(a) {
            var l = this.demuxer, d = this.remuxer;
            !l || !d || (l.resetTimeStamp(a), d.resetTimeStamp(a));
          }, h.resetContiguity = function() {
            var a = this.demuxer, l = this.remuxer;
            !a || !l || (a.resetContiguity(), l.resetNextTimestamp());
          }, h.resetInitSegment = function(a, l, d, g) {
            var x = this.demuxer, R = this.remuxer;
            !x || !R || (x.resetInitSegment(l, d, g), R.resetInitSegment(a, l, d));
          }, h.destroy = function() {
            this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0), this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0);
          }, h.transmux = function(a, l, d, g, x) {
            var R;
            return l && l.method === "SAMPLE-AES" ? R = this.transmuxSampleAes(a, l, d, g, x) : R = this.transmuxUnencrypted(a, d, g, x), R;
          }, h.transmuxUnencrypted = function(a, l, d, g) {
            var x = this.demuxer.demux(a, l, !1, !this.config.progressive), R = x.audioTrack, P = x.avcTrack, _ = x.id3Track, F = x.textTrack, B = this.remuxer.remux(R, P, _, F, l, d, !1, this.id);
            return {
              remuxResult: B,
              chunkMeta: g
            };
          }, h.transmuxSampleAes = function(a, l, d, g, x) {
            var R = this;
            return this.demuxer.demuxSampleAes(a, l, d).then(function(P) {
              var _ = R.remuxer.remux(P.audioTrack, P.avcTrack, P.id3Track, P.textTrack, d, g, !1, R.id);
              return {
                remuxResult: _,
                chunkMeta: x
              };
            });
          }, h.configureTransmuxer = function(a, l) {
            for (var d = this.config, g = this.observer, x = this.typeSupported, R = this.vendor, P = l.audioCodec, _ = l.defaultInitPts, F = l.duration, B = l.initSegmentData, U = l.videoCodec, N, k = 0, w = n.length; k < w; k++)
              if (n[k].demux.probe(a)) {
                N = n[k];
                break;
              }
            N || (E.logger.warn("Failed to find demuxer by probing frag, treating as mp4 passthrough"), N = {
              demux: I.default,
              remux: S.default
            });
            var K = this.demuxer, j = this.remuxer, H = N.remux, G = N.demux;
            (!j || !(j instanceof H)) && (this.remuxer = new H(g, d, x, R)), (!K || !(K instanceof G)) && (this.demuxer = new G(g, d, x), this.probe = G.probe), this.resetInitSegment(B, P, U, F), this.resetInitialTimestamp(_);
          }, h.needsProbing = function(a, l, d) {
            return !this.demuxer || !this.remuxer || l || d;
          }, h.getDecrypter = function() {
            var a = this.decrypter;
            return a || (a = this.decrypter = new A.default(this.observer, this.config)), a;
          }, c;
        }();
        function e(c, h) {
          var u = null;
          return c.byteLength > 0 && h != null && h.key != null && h.iv !== null && h.method != null && (u = h), u;
        }
        var f = function(h) {
          return {
            remuxResult: {},
            chunkMeta: h
          };
        };
        function s(c) {
          return "then" in c && c.then instanceof Function;
        }
        var i = function(h, u, a, l, d) {
          this.audioCodec = void 0, this.videoCodec = void 0, this.initSegmentData = void 0, this.duration = void 0, this.defaultInitPts = void 0, this.audioCodec = h, this.videoCodec = u, this.initSegmentData = a, this.duration = l, this.defaultInitPts = d;
        }, o = function(h, u, a, l, d, g) {
          this.discontinuity = void 0, this.contiguous = void 0, this.accurateTimeOffset = void 0, this.trackSwitch = void 0, this.timeOffset = void 0, this.initSegmentChange = void 0, this.discontinuity = h, this.contiguous = u, this.accurateTimeOffset = a, this.trackSwitch = l, this.timeOffset = d, this.initSegmentChange = g;
        };
      },
      "./src/demux/tsdemuxer.ts": function(W, M, y) {
        y.r(M), y.d(M, "discardEPB", function() {
          return f;
        });
        var C = y("./src/demux/adts.ts"), D = y("./src/demux/mpegaudio.ts"), A = y("./src/demux/exp-golomb.ts"), b = y("./src/demux/id3.ts"), I = y("./src/demux/sample-aes.ts"), O = y("./src/events.ts"), L = y("./src/utils/mp4-tools.ts"), m = y("./src/utils/logger.ts"), S = y("./src/errors.ts"), p = {
          video: 1,
          audio: 2,
          id3: 3,
          text: 4
        }, T = /* @__PURE__ */ function() {
          function s(o, c, h) {
            this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.sampleAes = null, this.pmtParsed = !1, this.audioCodec = void 0, this.videoCodec = void 0, this._duration = 0, this.aacLastPTS = null, this._initPTS = null, this._initDTS = null, this._pmtId = -1, this._avcTrack = void 0, this._audioTrack = void 0, this._id3Track = void 0, this._txtTrack = void 0, this.aacOverFlow = null, this.avcSample = null, this.remainderData = null, this.observer = o, this.config = c, this.typeSupported = h;
          }
          s.probe = function(c) {
            var h = s.syncOffset(c);
            return h < 0 ? !1 : (h && m.logger.warn("MPEG2-TS detected but first sync word found @ offset " + h + ", junk ahead ?"), !0);
          }, s.syncOffset = function(c) {
            for (var h = Math.min(1e3, c.length - 564), u = 0; u < h; ) {
              if (c[u] === 71 && c[u + 188] === 71 && c[u + 2 * 188] === 71)
                return u;
              u++;
            }
            return -1;
          }, s.createTrack = function(c, h) {
            return {
              container: c === "video" || c === "audio" ? "video/mp2t" : void 0,
              type: c,
              id: p[c],
              pid: -1,
              inputTimeScale: 9e4,
              sequenceNumber: 0,
              samples: [],
              dropped: 0,
              duration: c === "audio" ? h : void 0
            };
          };
          var i = s.prototype;
          return i.resetInitSegment = function(c, h, u) {
            this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = s.createTrack("video", u), this._audioTrack = s.createTrack("audio", u), this._id3Track = s.createTrack("id3", u), this._txtTrack = s.createTrack("text", u), this._audioTrack.isAAC = !0, this.aacOverFlow = null, this.aacLastPTS = null, this.avcSample = null, this.audioCodec = c, this.videoCodec = h, this._duration = u;
          }, i.resetTimeStamp = function() {
          }, i.resetContiguity = function() {
            var c = this._audioTrack, h = this._avcTrack, u = this._id3Track;
            c && (c.pesData = null), h && (h.pesData = null), u && (u.pesData = null), this.aacOverFlow = null, this.aacLastPTS = null;
          }, i.demux = function(c, h, u, a) {
            u === void 0 && (u = !1), a === void 0 && (a = !1), u || (this.sampleAes = null);
            var l, d = this._avcTrack, g = this._audioTrack, x = this._id3Track, R = d.pid, P = d.pesData, _ = g.pid, F = x.pid, B = g.pesData, U = x.pesData, N = !1, k = this.pmtParsed, w = this._pmtId, K = c.length;
            if (this.remainderData && (c = Object(L.appendUint8Array)(this.remainderData, c), K = c.length, this.remainderData = null), K < 188 && !a)
              return this.remainderData = c, {
                audioTrack: g,
                avcTrack: d,
                id3Track: x,
                textTrack: this._txtTrack
              };
            var j = Math.max(0, s.syncOffset(c));
            K -= (K + j) % 188, K < c.byteLength && !a && (this.remainderData = new Uint8Array(c.buffer, K, c.buffer.byteLength - K));
            for (var H = 0, G = j; G < K; G += 188)
              if (c[G] === 71) {
                var X = !!(c[G + 1] & 64), V = ((c[G + 1] & 31) << 8) + c[G + 2], Y = (c[G + 3] & 48) >> 4, z = void 0;
                if (Y > 1) {
                  if (z = G + 5 + c[G + 4], z === G + 188)
                    continue;
                } else
                  z = G + 4;
                switch (V) {
                  case R:
                    X && (P && (l = t(P)) && this.parseAVCPES(l, !1), P = {
                      data: [],
                      size: 0
                    }), P && (P.data.push(c.subarray(z, G + 188)), P.size += G + 188 - z);
                    break;
                  case _:
                    X && (B && (l = t(B)) && (g.isAAC ? this.parseAACPES(l) : this.parseMPEGPES(l)), B = {
                      data: [],
                      size: 0
                    }), B && (B.data.push(c.subarray(z, G + 188)), B.size += G + 188 - z);
                    break;
                  case F:
                    X && (U && (l = t(U)) && this.parseID3PES(l), U = {
                      data: [],
                      size: 0
                    }), U && (U.data.push(c.subarray(z, G + 188)), U.size += G + 188 - z);
                    break;
                  case 0:
                    X && (z += c[z] + 1), w = this._pmtId = v(c, z);
                    break;
                  case w: {
                    X && (z += c[z] + 1);
                    var Q = n(c, z, this.typeSupported.mpeg === !0 || this.typeSupported.mp3 === !0, u);
                    R = Q.avc, R > 0 && (d.pid = R), _ = Q.audio, _ > 0 && (g.pid = _, g.isAAC = Q.isAAC), F = Q.id3, F > 0 && (x.pid = F), N && !k && (m.logger.log("reparse from beginning"), N = !1, G = j - 188), k = this.pmtParsed = !0;
                    break;
                  }
                  case 17:
                  case 8191:
                    break;
                  default:
                    N = !0;
                    break;
                }
              } else
                H++;
            H > 0 && this.observer.emit(O.Events.ERROR, O.Events.ERROR, {
              type: S.ErrorTypes.MEDIA_ERROR,
              details: S.ErrorDetails.FRAG_PARSING_ERROR,
              fatal: !1,
              reason: "Found " + H + " TS packet/s that do not start with 0x47"
            }), d.pesData = P, g.pesData = B, x.pesData = U;
            var $ = {
              audioTrack: g,
              avcTrack: d,
              id3Track: x,
              textTrack: this._txtTrack
            };
            return a && this.extractRemainingSamples($), $;
          }, i.flush = function() {
            var c = this.remainderData;
            this.remainderData = null;
            var h;
            return c ? h = this.demux(c, -1, !1, !0) : h = {
              audioTrack: this._audioTrack,
              avcTrack: this._avcTrack,
              textTrack: this._txtTrack,
              id3Track: this._id3Track
            }, this.extractRemainingSamples(h), this.sampleAes ? this.decrypt(h, this.sampleAes) : h;
          }, i.extractRemainingSamples = function(c) {
            var h = c.audioTrack, u = c.avcTrack, a = c.id3Track, l = u.pesData, d = h.pesData, g = a.pesData, x;
            l && (x = t(l)) ? (this.parseAVCPES(x, !0), u.pesData = null) : u.pesData = l, d && (x = t(d)) ? (h.isAAC ? this.parseAACPES(x) : this.parseMPEGPES(x), h.pesData = null) : (d != null && d.size && m.logger.log("last AAC PES packet truncated,might overlap between fragments"), h.pesData = d), g && (x = t(g)) ? (this.parseID3PES(x), a.pesData = null) : a.pesData = g;
          }, i.demuxSampleAes = function(c, h, u) {
            var a = this.demux(c, u, !0, !this.config.progressive), l = this.sampleAes = new I.default(this.observer, this.config, h);
            return this.decrypt(a, l);
          }, i.decrypt = function(c, h) {
            return new Promise(function(u) {
              var a = c.audioTrack, l = c.avcTrack;
              a.samples && a.isAAC ? h.decryptAacSamples(a.samples, 0, function() {
                l.samples ? h.decryptAvcSamples(l.samples, 0, 0, function() {
                  u(c);
                }) : u(c);
              }) : l.samples && h.decryptAvcSamples(l.samples, 0, 0, function() {
                u(c);
              });
            });
          }, i.destroy = function() {
            this._initPTS = this._initDTS = null, this._duration = 0;
          }, i.parseAVCPES = function(c, h) {
            var u = this, a = this._avcTrack, l = this.parseAVCNALu(c.data), d = this.avcSample, g, x = !1;
            c.data = null, d && l.length && !a.audFound && (r(d, a), d = this.avcSample = E(!1, c.pts, c.dts, "")), l.forEach(function(R) {
              switch (R.type) {
                case 1: {
                  g = !0, d || (d = u.avcSample = E(!0, c.pts, c.dts, "")), d.frame = !0;
                  var P = R.data;
                  if (x && P.length > 4) {
                    var _ = new A.default(P).readSliceType();
                    (_ === 2 || _ === 4 || _ === 7 || _ === 9) && (d.key = !0);
                  }
                  break;
                }
                case 5:
                  g = !0, d || (d = u.avcSample = E(!0, c.pts, c.dts, "")), d.key = !0, d.frame = !0;
                  break;
                case 6: {
                  g = !0;
                  var F = new A.default(f(R.data));
                  F.readUByte();
                  for (var B = 0, U = 0, N = !1, k = 0; !N && F.bytesAvailable > 1; ) {
                    B = 0;
                    do
                      k = F.readUByte(), B += k;
                    while (k === 255);
                    U = 0;
                    do
                      k = F.readUByte(), U += k;
                    while (k === 255);
                    if (B === 4 && F.bytesAvailable !== 0) {
                      N = !0;
                      var w = F.readUByte();
                      if (w === 181) {
                        var K = F.readUShort();
                        if (K === 49) {
                          var j = F.readUInt();
                          if (j === 1195456820) {
                            var H = F.readUByte();
                            if (H === 3) {
                              for (var G = F.readUByte(), X = F.readUByte(), V = 31 & G, Y = [G, X], z = 0; z < V; z++)
                                Y.push(F.readUByte()), Y.push(F.readUByte()), Y.push(F.readUByte());
                              e(u._txtTrack.samples, {
                                type: 3,
                                pts: c.pts,
                                bytes: Y
                              });
                            }
                          }
                        }
                      }
                    } else if (B === 5 && F.bytesAvailable !== 0) {
                      if (N = !0, U > 16) {
                        for (var Q = [], $ = 0; $ < 16; $++)
                          Q.push(F.readUByte().toString(16)), ($ === 3 || $ === 5 || $ === 7 || $ === 9) && Q.push("-");
                        for (var Z = U - 16, tt = new Uint8Array(Z), J = 0; J < Z; J++)
                          tt[J] = F.readUByte();
                        e(u._txtTrack.samples, {
                          pts: c.pts,
                          payloadType: B,
                          uuid: Q.join(""),
                          userData: Object(b.utf8ArrayToStr)(tt),
                          userDataBytes: tt
                        });
                      }
                    } else if (U < F.bytesAvailable)
                      for (var et = 0; et < U; et++)
                        F.readUByte();
                  }
                  break;
                }
                case 7:
                  if (g = !0, x = !0, !a.sps) {
                    var nt = new A.default(R.data), rt = nt.readSPS();
                    a.width = rt.width, a.height = rt.height, a.pixelRatio = rt.pixelRatio, a.sps = [R.data], a.duration = u._duration;
                    for (var at = R.data.subarray(1, 4), it = "avc1.", st = 0; st < 3; st++) {
                      var q = at[st].toString(16);
                      q.length < 2 && (q = "0" + q), it += q;
                    }
                    a.codec = it;
                  }
                  break;
                case 8:
                  g = !0, a.pps || (a.pps = [R.data]);
                  break;
                case 9:
                  g = !1, a.audFound = !0, d && r(d, a), d = u.avcSample = E(!1, c.pts, c.dts, "");
                  break;
                case 12:
                  g = !1;
                  break;
                default:
                  g = !1, d && (d.debug += "unknown NAL " + R.type + " ");
                  break;
              }
              if (d && g) {
                var mt = d.units;
                mt.push(R);
              }
            }), h && d && (r(d, a), this.avcSample = null);
          }, i.getLastNalUnit = function() {
            var c, h = this.avcSample, u;
            if (!h || h.units.length === 0) {
              var a = this._avcTrack.samples;
              h = a[a.length - 1];
            }
            if ((c = h) !== null && c !== void 0 && c.units) {
              var l = h.units;
              u = l[l.length - 1];
            }
            return u;
          }, i.parseAVCNALu = function(c) {
            var h = c.byteLength, u = this._avcTrack, a = u.naluState || 0, l = a, d = [], g = 0, x, R, P, _ = -1, F = 0;
            for (a === -1 && (_ = 0, F = c[0] & 31, a = 0, g = 1); g < h; ) {
              if (x = c[g++], !a) {
                a = x ? 0 : 1;
                continue;
              }
              if (a === 1) {
                a = x ? 0 : 2;
                continue;
              }
              if (!x)
                a = 3;
              else if (x === 1) {
                if (_ >= 0) {
                  var B = {
                    data: c.subarray(_, g - a - 1),
                    type: F
                  };
                  d.push(B);
                } else {
                  var U = this.getLastNalUnit();
                  if (U && (l && g <= 4 - l && U.state && (U.data = U.data.subarray(0, U.data.byteLength - l)), R = g - a - 1, R > 0)) {
                    var N = new Uint8Array(U.data.byteLength + R);
                    N.set(U.data, 0), N.set(c.subarray(0, R), U.data.byteLength), U.data = N, U.state = 0;
                  }
                }
                g < h ? (P = c[g] & 31, _ = g, F = P, a = 0) : a = -1;
              } else
                a = 0;
            }
            if (_ >= 0 && a >= 0) {
              var k = {
                data: c.subarray(_, h),
                type: F,
                state: a
              };
              d.push(k);
            }
            if (d.length === 0) {
              var w = this.getLastNalUnit();
              if (w) {
                var K = new Uint8Array(w.data.byteLength + c.byteLength);
                K.set(w.data, 0), K.set(c, w.data.byteLength), w.data = K;
              }
            }
            return u.naluState = a, d;
          }, i.parseAACPES = function(c) {
            var h = 0, u = this._audioTrack, a = this.aacOverFlow, l = c.data;
            if (a) {
              this.aacOverFlow = null;
              var d = a.sample.unit.byteLength, g = Math.min(a.missing, d), x = d - g;
              a.sample.unit.set(l.subarray(0, g), x), u.samples.push(a.sample), h = a.missing;
            }
            var R, P;
            for (R = h, P = l.length; R < P - 1 && !C.isHeader(l, R); R++)
              ;
            if (R !== h) {
              var _, F;
              if (R < P - 1 ? (_ = "AAC PES did not start with ADTS header,offset:" + R, F = !1) : (_ = "no ADTS header found in AAC PES", F = !0), m.logger.warn("parsing error:" + _), this.observer.emit(O.Events.ERROR, O.Events.ERROR, {
                type: S.ErrorTypes.MEDIA_ERROR,
                details: S.ErrorDetails.FRAG_PARSING_ERROR,
                fatal: F,
                reason: _
              }), F)
                return;
            }
            C.initTrackConfig(u, this.observer, l, R, this.audioCodec);
            var B;
            if (c.pts !== void 0)
              B = c.pts;
            else if (a) {
              var U = C.getFrameDuration(u.samplerate);
              B = a.sample.pts + U;
            } else {
              m.logger.warn("[tsdemuxer]: AAC PES unknown PTS");
              return;
            }
            for (var N = 0; R < P; )
              if (C.isHeader(l, R)) {
                if (R + 5 < P) {
                  var k = C.appendFrame(u, l, R, B, N);
                  if (k)
                    if (k.missing)
                      this.aacOverFlow = k;
                    else {
                      R += k.length, N++;
                      continue;
                    }
                }
                break;
              } else
                R++;
          }, i.parseMPEGPES = function(c) {
            var h = c.data, u = h.length, a = 0, l = 0, d = c.pts;
            if (d === void 0) {
              m.logger.warn("[tsdemuxer]: MPEG PES unknown PTS");
              return;
            }
            for (; l < u; )
              if (D.isHeader(h, l)) {
                var g = D.appendFrame(this._audioTrack, h, l, d, a);
                if (g)
                  l += g.length, a++;
                else
                  break;
              } else
                l++;
          }, i.parseID3PES = function(c) {
            if (c.pts === void 0) {
              m.logger.warn("[tsdemuxer]: ID3 PES unknown PTS");
              return;
            }
            this._id3Track.samples.push(c);
          }, s;
        }();
        T.minProbeByteLength = 188;
        function E(s, i, o, c) {
          return {
            key: s,
            frame: !1,
            pts: i,
            dts: o,
            units: [],
            debug: c,
            length: 0
          };
        }
        function v(s, i) {
          return (s[i + 10] & 31) << 8 | s[i + 11];
        }
        function n(s, i, o, c) {
          var h = {
            audio: -1,
            avc: -1,
            id3: -1,
            isAAC: !0
          }, u = (s[i + 1] & 15) << 8 | s[i + 2], a = i + 3 + u - 4, l = (s[i + 10] & 15) << 8 | s[i + 11];
          for (i += 12 + l; i < a; ) {
            var d = (s[i + 1] & 31) << 8 | s[i + 2];
            switch (s[i]) {
              case 207:
                if (!c) {
                  m.logger.log("ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");
                  break;
                }
              case 15:
                h.audio === -1 && (h.audio = d);
                break;
              case 21:
                h.id3 === -1 && (h.id3 = d);
                break;
              case 219:
                if (!c) {
                  m.logger.log("H.264 with AES-128-CBC slice encryption found in unencrypted stream");
                  break;
                }
              case 27:
                h.avc === -1 && (h.avc = d);
                break;
              case 3:
              case 4:
                o ? h.audio === -1 && (h.audio = d, h.isAAC = !1) : m.logger.log("MPEG audio found, not supported in this browser");
                break;
              case 36:
                m.logger.warn("Unsupported HEVC stream type found");
                break;
            }
            i += ((s[i + 3] & 15) << 8 | s[i + 4]) + 5;
          }
          return h;
        }
        function t(s) {
          var i = 0, o, c, h, u, a, l = s.data;
          if (!s || s.size === 0)
            return null;
          for (; l[0].length < 19 && l.length > 1; ) {
            var d = new Uint8Array(l[0].length + l[1].length);
            d.set(l[0]), d.set(l[1], l[0].length), l[0] = d, l.splice(1, 1);
          }
          o = l[0];
          var g = (o[0] << 16) + (o[1] << 8) + o[2];
          if (g === 1) {
            if (c = (o[4] << 8) + o[5], c && c > s.size - 6)
              return null;
            var x = o[7];
            x & 192 && (u = (o[9] & 14) * 536870912 + (o[10] & 255) * 4194304 + (o[11] & 254) * 16384 + (o[12] & 255) * 128 + (o[13] & 254) / 2, x & 64 ? (a = (o[14] & 14) * 536870912 + (o[15] & 255) * 4194304 + (o[16] & 254) * 16384 + (o[17] & 255) * 128 + (o[18] & 254) / 2, u - a > 60 * 9e4 && (m.logger.warn(Math.round((u - a) / 9e4) + "s delta between PTS and DTS, align them"), u = a)) : a = u), h = o[8];
            var R = h + 9;
            if (s.size <= R)
              return null;
            s.size -= R;
            for (var P = new Uint8Array(s.size), _ = 0, F = l.length; _ < F; _++) {
              o = l[_];
              var B = o.byteLength;
              if (R)
                if (R > B) {
                  R -= B;
                  continue;
                } else
                  o = o.subarray(R), B -= R, R = 0;
              P.set(o, i), i += B;
            }
            return c && (c -= h + 3), {
              data: P,
              pts: u,
              dts: a,
              len: c
            };
          }
          return null;
        }
        function r(s, i) {
          if (s.units.length && s.frame) {
            if (s.pts === void 0) {
              var o = i.samples, c = o.length;
              if (c) {
                var h = o[c - 1];
                s.pts = h.pts, s.dts = h.dts;
              } else {
                i.dropped++;
                return;
              }
            }
            i.samples.push(s);
          }
          s.debug.length && m.logger.log(s.pts + "/" + s.dts + ":" + s.debug);
        }
        function e(s, i) {
          var o = s.length;
          if (o > 0) {
            if (i.pts >= s[o - 1].pts)
              s.push(i);
            else
              for (var c = o - 1; c >= 0; c--)
                if (i.pts < s[c].pts) {
                  s.splice(c, 0, i);
                  break;
                }
          } else
            s.push(i);
        }
        function f(s) {
          for (var i = s.byteLength, o = [], c = 1; c < i - 2; )
            s[c] === 0 && s[c + 1] === 0 && s[c + 2] === 3 ? (o.push(c + 2), c += 2) : c++;
          if (o.length === 0)
            return s;
          var h = i - o.length, u = new Uint8Array(h), a = 0;
          for (c = 0; c < h; a++, c++)
            a === o[0] && (a++, o.shift()), u[c] = s[a];
          return u;
        }
        M.default = T;
      },
      "./src/errors.ts": function(W, M, y) {
        y.r(M), y.d(M, "ErrorTypes", function() {
          return C;
        }), y.d(M, "ErrorDetails", function() {
          return D;
        });
        var C;
        (function(A) {
          A.NETWORK_ERROR = "networkError", A.MEDIA_ERROR = "mediaError", A.KEY_SYSTEM_ERROR = "keySystemError", A.MUX_ERROR = "muxError", A.OTHER_ERROR = "otherError";
        })(C || (C = {}));
        var D;
        (function(A) {
          A.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", A.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", A.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", A.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", A.KEY_SYSTEM_NO_INIT_DATA = "keySystemNoInitData", A.MANIFEST_LOAD_ERROR = "manifestLoadError", A.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", A.MANIFEST_PARSING_ERROR = "manifestParsingError", A.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", A.LEVEL_EMPTY_ERROR = "levelEmptyError", A.LEVEL_LOAD_ERROR = "levelLoadError", A.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", A.LEVEL_SWITCH_ERROR = "levelSwitchError", A.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", A.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", A.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", A.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", A.FRAG_LOAD_ERROR = "fragLoadError", A.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", A.FRAG_DECRYPT_ERROR = "fragDecryptError", A.FRAG_PARSING_ERROR = "fragParsingError", A.REMUX_ALLOC_ERROR = "remuxAllocError", A.KEY_LOAD_ERROR = "keyLoadError", A.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", A.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", A.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", A.BUFFER_APPEND_ERROR = "bufferAppendError", A.BUFFER_APPENDING_ERROR = "bufferAppendingError", A.BUFFER_STALLED_ERROR = "bufferStalledError", A.BUFFER_FULL_ERROR = "bufferFullError", A.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", A.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", A.INTERNAL_EXCEPTION = "internalException", A.INTERNAL_ABORTED = "aborted", A.UNKNOWN = "unknown";
        })(D || (D = {}));
      },
      "./src/events.ts": function(W, M, y) {
        y.r(M), y.d(M, "Events", function() {
          return C;
        });
        var C;
        (function(D) {
          D.MEDIA_ATTACHING = "hlsMediaAttaching", D.MEDIA_ATTACHED = "hlsMediaAttached", D.MEDIA_DETACHING = "hlsMediaDetaching", D.MEDIA_DETACHED = "hlsMediaDetached", D.BUFFER_RESET = "hlsBufferReset", D.BUFFER_CODECS = "hlsBufferCodecs", D.BUFFER_CREATED = "hlsBufferCreated", D.BUFFER_APPENDING = "hlsBufferAppending", D.BUFFER_APPENDED = "hlsBufferAppended", D.BUFFER_EOS = "hlsBufferEos", D.BUFFER_FLUSHING = "hlsBufferFlushing", D.BUFFER_FLUSHED = "hlsBufferFlushed", D.MANIFEST_LOADING = "hlsManifestLoading", D.MANIFEST_LOADED = "hlsManifestLoaded", D.MANIFEST_PARSED = "hlsManifestParsed", D.LEVEL_SWITCHING = "hlsLevelSwitching", D.LEVEL_SWITCHED = "hlsLevelSwitched", D.LEVEL_LOADING = "hlsLevelLoading", D.LEVEL_LOADED = "hlsLevelLoaded", D.LEVEL_UPDATED = "hlsLevelUpdated", D.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", D.LEVELS_UPDATED = "hlsLevelsUpdated", D.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", D.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", D.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", D.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", D.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", D.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", D.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", D.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", D.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", D.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", D.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", D.CUES_PARSED = "hlsCuesParsed", D.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", D.INIT_PTS_FOUND = "hlsInitPtsFound", D.FRAG_LOADING = "hlsFragLoading", D.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", D.FRAG_LOADED = "hlsFragLoaded", D.FRAG_DECRYPTED = "hlsFragDecrypted", D.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", D.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", D.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", D.FRAG_PARSED = "hlsFragParsed", D.FRAG_BUFFERED = "hlsFragBuffered", D.FRAG_CHANGED = "hlsFragChanged", D.FPS_DROP = "hlsFpsDrop", D.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", D.ERROR = "hlsError", D.DESTROYING = "hlsDestroying", D.KEY_LOADING = "hlsKeyLoading", D.KEY_LOADED = "hlsKeyLoaded", D.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", D.BACK_BUFFER_REACHED = "hlsBackBufferReached";
        })(C || (C = {}));
      },
      "./src/hls.ts": function(W, M, y) {
        y.r(M), y.d(M, "default", function() {
          return e;
        });
        var C = y("./node_modules/url-toolkit/src/url-toolkit.js"), D = y("./src/loader/playlist-loader.ts"), A = y("./src/loader/key-loader.ts"), b = y("./src/controller/id3-track-controller.ts"), I = y("./src/controller/latency-controller.ts"), O = y("./src/controller/level-controller.ts"), L = y("./src/controller/fragment-tracker.ts"), m = y("./src/controller/stream-controller.ts"), S = y("./src/is-supported.ts"), p = y("./src/utils/logger.ts"), T = y("./src/config.ts"), E = y("./node_modules/eventemitter3/index.js"), v = y("./src/events.ts"), n = y("./src/errors.ts");
        function t(f, s) {
          for (var i = 0; i < s.length; i++) {
            var o = s[i];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(f, o.key, o);
          }
        }
        function r(f, s, i) {
          return s && t(f.prototype, s), i && t(f, i), f;
        }
        var e = /* @__PURE__ */ function() {
          f.isSupported = function() {
            return Object(S.isSupported)();
          };
          function f(i) {
            i === void 0 && (i = {}), this.config = void 0, this.userConfig = void 0, this.coreComponents = void 0, this.networkControllers = void 0, this._emitter = new E.EventEmitter(), this._autoLevelCapping = void 0, this.abrController = void 0, this.bufferController = void 0, this.capLevelController = void 0, this.latencyController = void 0, this.levelController = void 0, this.streamController = void 0, this.audioTrackController = void 0, this.subtitleTrackController = void 0, this.emeController = void 0, this.cmcdController = void 0, this._media = null, this.url = null;
            var o = this.config = Object(T.mergeConfig)(f.DefaultConfig, i);
            this.userConfig = i, Object(p.enableLogs)(o.debug), this._autoLevelCapping = -1, o.progressive && Object(T.enableStreamingMode)(o);
            var c = o.abrController, h = o.bufferController, u = o.capLevelController, a = o.fpsController, l = this.abrController = new c(this), d = this.bufferController = new h(this), g = this.capLevelController = new u(this), x = new a(this), R = new D.default(this), P = new A.default(this), _ = new b.default(this), F = this.levelController = new O.default(this), B = new L.FragmentTracker(this), U = this.streamController = new m.default(this, B);
            g.setStreamController(U), x.setStreamController(U);
            var N = [F, U];
            this.networkControllers = N;
            var k = [R, P, l, d, g, x, _, B];
            this.audioTrackController = this.createController(o.audioTrackController, null, N), this.createController(o.audioStreamController, B, N), this.subtitleTrackController = this.createController(o.subtitleTrackController, null, N), this.createController(o.subtitleStreamController, B, N), this.createController(o.timelineController, null, k), this.emeController = this.createController(o.emeController, null, k), this.cmcdController = this.createController(o.cmcdController, null, k), this.latencyController = this.createController(I.default, null, k), this.coreComponents = k;
          }
          var s = f.prototype;
          return s.createController = function(o, c, h) {
            if (o) {
              var u = c ? new o(this, c) : new o(this);
              return h && h.push(u), u;
            }
            return null;
          }, s.on = function(o, c, h) {
            h === void 0 && (h = this), this._emitter.on(o, c, h);
          }, s.once = function(o, c, h) {
            h === void 0 && (h = this), this._emitter.once(o, c, h);
          }, s.removeAllListeners = function(o) {
            this._emitter.removeAllListeners(o);
          }, s.off = function(o, c, h, u) {
            h === void 0 && (h = this), this._emitter.off(o, c, h, u);
          }, s.listeners = function(o) {
            return this._emitter.listeners(o);
          }, s.emit = function(o, c, h) {
            return this._emitter.emit(o, c, h);
          }, s.trigger = function(o, c) {
            if (this.config.debug)
              return this.emit(o, o, c);
            try {
              return this.emit(o, o, c);
            } catch (h) {
              p.logger.error("An internal error happened while handling event " + o + '. Error message: "' + h.message + '". Here is a stacktrace:', h), this.trigger(v.Events.ERROR, {
                type: n.ErrorTypes.OTHER_ERROR,
                details: n.ErrorDetails.INTERNAL_EXCEPTION,
                fatal: !1,
                event: o,
                error: h
              });
            }
            return !1;
          }, s.listenerCount = function(o) {
            return this._emitter.listenerCount(o);
          }, s.destroy = function() {
            p.logger.log("destroy"), this.trigger(v.Events.DESTROYING, void 0), this.detachMedia(), this.removeAllListeners(), this._autoLevelCapping = -1, this.url = null, this.networkControllers.forEach(function(o) {
              return o.destroy();
            }), this.networkControllers.length = 0, this.coreComponents.forEach(function(o) {
              return o.destroy();
            }), this.coreComponents.length = 0;
          }, s.attachMedia = function(o) {
            p.logger.log("attachMedia"), this._media = o, this.trigger(v.Events.MEDIA_ATTACHING, {
              media: o
            });
          }, s.detachMedia = function() {
            p.logger.log("detachMedia"), this.trigger(v.Events.MEDIA_DETACHING, void 0), this._media = null;
          }, s.loadSource = function(o) {
            this.stopLoad();
            var c = this.media, h = this.url, u = this.url = C.buildAbsoluteURL(self.location.href, o, {
              alwaysNormalize: !0
            });
            p.logger.log("loadSource:" + u), c && h && h !== u && this.bufferController.hasSourceTypes() && (this.detachMedia(), this.attachMedia(c)), this.trigger(v.Events.MANIFEST_LOADING, {
              url: o
            });
          }, s.startLoad = function(o) {
            o === void 0 && (o = -1), p.logger.log("startLoad(" + o + ")"), this.networkControllers.forEach(function(c) {
              c.startLoad(o);
            });
          }, s.stopLoad = function() {
            p.logger.log("stopLoad"), this.networkControllers.forEach(function(o) {
              o.stopLoad();
            });
          }, s.swapAudioCodec = function() {
            p.logger.log("swapAudioCodec"), this.streamController.swapAudioCodec();
          }, s.recoverMediaError = function() {
            p.logger.log("recoverMediaError");
            var o = this._media;
            this.detachMedia(), o && this.attachMedia(o);
          }, s.removeLevel = function(o, c) {
            c === void 0 && (c = 0), this.levelController.removeLevel(o, c);
          }, r(f, [{
            key: "levels",
            get: function() {
              var o = this.levelController.levels;
              return o || [];
            }
          }, {
            key: "currentLevel",
            get: function() {
              return this.streamController.currentLevel;
            },
            set: function(o) {
              p.logger.log("set currentLevel:" + o), this.loadLevel = o, this.abrController.clearTimer(), this.streamController.immediateLevelSwitch();
            }
          }, {
            key: "nextLevel",
            get: function() {
              return this.streamController.nextLevel;
            },
            set: function(o) {
              p.logger.log("set nextLevel:" + o), this.levelController.manualLevel = o, this.streamController.nextLevelSwitch();
            }
          }, {
            key: "loadLevel",
            get: function() {
              return this.levelController.level;
            },
            set: function(o) {
              p.logger.log("set loadLevel:" + o), this.levelController.manualLevel = o;
            }
          }, {
            key: "nextLoadLevel",
            get: function() {
              return this.levelController.nextLoadLevel;
            },
            set: function(o) {
              this.levelController.nextLoadLevel = o;
            }
          }, {
            key: "firstLevel",
            get: function() {
              return Math.max(this.levelController.firstLevel, this.minAutoLevel);
            },
            set: function(o) {
              p.logger.log("set firstLevel:" + o), this.levelController.firstLevel = o;
            }
          }, {
            key: "startLevel",
            get: function() {
              return this.levelController.startLevel;
            },
            set: function(o) {
              p.logger.log("set startLevel:" + o), o !== -1 && (o = Math.max(o, this.minAutoLevel)), this.levelController.startLevel = o;
            }
          }, {
            key: "capLevelToPlayerSize",
            get: function() {
              return this.config.capLevelToPlayerSize;
            },
            set: function(o) {
              var c = !!o;
              c !== this.config.capLevelToPlayerSize && (c ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = c);
            }
          }, {
            key: "autoLevelCapping",
            get: function() {
              return this._autoLevelCapping;
            },
            set: function(o) {
              this._autoLevelCapping !== o && (p.logger.log("set autoLevelCapping:" + o), this._autoLevelCapping = o);
            }
          }, {
            key: "bandwidthEstimate",
            get: function() {
              var o = this.abrController.bwEstimator;
              return o ? o.getEstimate() : NaN;
            }
          }, {
            key: "autoLevelEnabled",
            get: function() {
              return this.levelController.manualLevel === -1;
            }
          }, {
            key: "manualLevel",
            get: function() {
              return this.levelController.manualLevel;
            }
          }, {
            key: "minAutoLevel",
            get: function() {
              var o = this.levels, c = this.config.minAutoBitrate;
              if (!o)
                return 0;
              for (var h = o.length, u = 0; u < h; u++)
                if (o[u].maxBitrate > c)
                  return u;
              return 0;
            }
          }, {
            key: "maxAutoLevel",
            get: function() {
              var o = this.levels, c = this.autoLevelCapping, h;
              return c === -1 && o && o.length ? h = o.length - 1 : h = c, h;
            }
          }, {
            key: "nextAutoLevel",
            get: function() {
              return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel);
            },
            set: function(o) {
              this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, o);
            }
          }, {
            key: "audioTracks",
            get: function() {
              var o = this.audioTrackController;
              return o ? o.audioTracks : [];
            }
          }, {
            key: "audioTrack",
            get: function() {
              var o = this.audioTrackController;
              return o ? o.audioTrack : -1;
            },
            set: function(o) {
              var c = this.audioTrackController;
              c && (c.audioTrack = o);
            }
          }, {
            key: "subtitleTracks",
            get: function() {
              var o = this.subtitleTrackController;
              return o ? o.subtitleTracks : [];
            }
          }, {
            key: "subtitleTrack",
            get: function() {
              var o = this.subtitleTrackController;
              return o ? o.subtitleTrack : -1;
            },
            set: function(o) {
              var c = this.subtitleTrackController;
              c && (c.subtitleTrack = o);
            }
          }, {
            key: "media",
            get: function() {
              return this._media;
            }
          }, {
            key: "subtitleDisplay",
            get: function() {
              var o = this.subtitleTrackController;
              return o ? o.subtitleDisplay : !1;
            },
            set: function(o) {
              var c = this.subtitleTrackController;
              c && (c.subtitleDisplay = o);
            }
          }, {
            key: "lowLatencyMode",
            get: function() {
              return this.config.lowLatencyMode;
            },
            set: function(o) {
              this.config.lowLatencyMode = o;
            }
          }, {
            key: "liveSyncPosition",
            get: function() {
              return this.latencyController.liveSyncPosition;
            }
          }, {
            key: "latency",
            get: function() {
              return this.latencyController.latency;
            }
          }, {
            key: "maxLatency",
            get: function() {
              return this.latencyController.maxLatency;
            }
          }, {
            key: "targetLatency",
            get: function() {
              return this.latencyController.targetLatency;
            }
          }, {
            key: "drift",
            get: function() {
              return this.latencyController.drift;
            }
          }, {
            key: "forceStartLoad",
            get: function() {
              return this.streamController.forceStartLoad;
            }
          }], [{
            key: "version",
            get: function() {
              return "1.1.3";
            }
          }, {
            key: "Events",
            get: function() {
              return v.Events;
            }
          }, {
            key: "ErrorTypes",
            get: function() {
              return n.ErrorTypes;
            }
          }, {
            key: "ErrorDetails",
            get: function() {
              return n.ErrorDetails;
            }
          }, {
            key: "DefaultConfig",
            get: function() {
              return f.defaultConfig ? f.defaultConfig : T.hlsDefaultConfig;
            },
            set: function(o) {
              f.defaultConfig = o;
            }
          }]), f;
        }();
        e.defaultConfig = void 0;
      },
      "./src/is-supported.ts": function(W, M, y) {
        y.r(M), y.d(M, "isSupported", function() {
          return A;
        }), y.d(M, "changeTypeSupported", function() {
          return b;
        });
        var C = y("./src/utils/mediasource-helper.ts");
        function D() {
          return self.SourceBuffer || self.WebKitSourceBuffer;
        }
        function A() {
          var I = Object(C.getMediaSource)();
          if (!I)
            return !1;
          var O = D(), L = I && typeof I.isTypeSupported == "function" && I.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'), m = !O || O.prototype && typeof O.prototype.appendBuffer == "function" && typeof O.prototype.remove == "function";
          return !!L && !!m;
        }
        function b() {
          var I, O = D();
          return typeof (O == null || (I = O.prototype) === null || I === void 0 ? void 0 : I.changeType) == "function";
        }
      },
      "./src/loader/fragment-loader.ts": function(W, M, y) {
        y.r(M), y.d(M, "default", function() {
          return T;
        }), y.d(M, "LoadError", function() {
          return v;
        });
        var C = y("./src/polyfills/number.ts"), D = y("./src/errors.ts");
        function A(n, t) {
          n.prototype = Object.create(t.prototype), n.prototype.constructor = n, m(n, t);
        }
        function b(n) {
          var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
          return b = function(e) {
            if (e === null || !L(e))
              return e;
            if (typeof e != "function")
              throw new TypeError("Super expression must either be null or a function");
            if (typeof t < "u") {
              if (t.has(e))
                return t.get(e);
              t.set(e, f);
            }
            function f() {
              return I(e, arguments, S(this).constructor);
            }
            return f.prototype = Object.create(e.prototype, { constructor: { value: f, enumerable: !1, writable: !0, configurable: !0 } }), m(f, e);
          }, b(n);
        }
        function I(n, t, r) {
          return O() ? I = Reflect.construct : I = function(f, s, i) {
            var o = [null];
            o.push.apply(o, s);
            var c = Function.bind.apply(f, o), h = new c();
            return i && m(h, i.prototype), h;
          }, I.apply(null, arguments);
        }
        function O() {
          if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
            return !1;
          if (typeof Proxy == "function")
            return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), !0;
          } catch {
            return !1;
          }
        }
        function L(n) {
          return Function.toString.call(n).indexOf("[native code]") !== -1;
        }
        function m(n, t) {
          return m = Object.setPrototypeOf || function(e, f) {
            return e.__proto__ = f, e;
          }, m(n, t);
        }
        function S(n) {
          return S = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
            return r.__proto__ || Object.getPrototypeOf(r);
          }, S(n);
        }
        var p = Math.pow(2, 17), T = /* @__PURE__ */ function() {
          function n(r) {
            this.config = void 0, this.loader = null, this.partLoadTimeout = -1, this.config = r;
          }
          var t = n.prototype;
          return t.destroy = function() {
            this.loader && (this.loader.destroy(), this.loader = null);
          }, t.abort = function() {
            this.loader && this.loader.abort();
          }, t.load = function(e, f) {
            var s = this, i = e.url;
            if (!i)
              return Promise.reject(new v({
                type: D.ErrorTypes.NETWORK_ERROR,
                details: D.ErrorDetails.FRAG_LOAD_ERROR,
                fatal: !1,
                frag: e,
                networkDetails: null
              }, "Fragment does not have a " + (i ? "part list" : "url")));
            this.abort();
            var o = this.config, c = o.fLoader, h = o.loader;
            return new Promise(function(u, a) {
              s.loader && s.loader.destroy();
              var l = s.loader = e.loader = c ? new c(o) : new h(o), d = E(e), g = {
                timeout: o.fragLoadingTimeOut,
                maxRetry: 0,
                retryDelay: 0,
                maxRetryDelay: o.fragLoadingMaxRetryTimeout,
                highWaterMark: p
              };
              e.stats = l.stats, l.load(d, g, {
                onSuccess: function(R, P, _, F) {
                  s.resetLoader(e, l), u({
                    frag: e,
                    part: null,
                    payload: R.data,
                    networkDetails: F
                  });
                },
                onError: function(R, P, _) {
                  s.resetLoader(e, l), a(new v({
                    type: D.ErrorTypes.NETWORK_ERROR,
                    details: D.ErrorDetails.FRAG_LOAD_ERROR,
                    fatal: !1,
                    frag: e,
                    response: R,
                    networkDetails: _
                  }));
                },
                onAbort: function(R, P, _) {
                  s.resetLoader(e, l), a(new v({
                    type: D.ErrorTypes.NETWORK_ERROR,
                    details: D.ErrorDetails.INTERNAL_ABORTED,
                    fatal: !1,
                    frag: e,
                    networkDetails: _
                  }));
                },
                onTimeout: function(R, P, _) {
                  s.resetLoader(e, l), a(new v({
                    type: D.ErrorTypes.NETWORK_ERROR,
                    details: D.ErrorDetails.FRAG_LOAD_TIMEOUT,
                    fatal: !1,
                    frag: e,
                    networkDetails: _
                  }));
                },
                onProgress: function(R, P, _, F) {
                  f && f({
                    frag: e,
                    part: null,
                    payload: _,
                    networkDetails: F
                  });
                }
              });
            });
          }, t.loadPart = function(e, f, s) {
            var i = this;
            this.abort();
            var o = this.config, c = o.fLoader, h = o.loader;
            return new Promise(function(u, a) {
              i.loader && i.loader.destroy();
              var l = i.loader = e.loader = c ? new c(o) : new h(o), d = E(e, f), g = {
                timeout: o.fragLoadingTimeOut,
                maxRetry: 0,
                retryDelay: 0,
                maxRetryDelay: o.fragLoadingMaxRetryTimeout,
                highWaterMark: p
              };
              f.stats = l.stats, l.load(d, g, {
                onSuccess: function(R, P, _, F) {
                  i.resetLoader(e, l), i.updateStatsFromPart(e, f);
                  var B = {
                    frag: e,
                    part: f,
                    payload: R.data,
                    networkDetails: F
                  };
                  s(B), u(B);
                },
                onError: function(R, P, _) {
                  i.resetLoader(e, l), a(new v({
                    type: D.ErrorTypes.NETWORK_ERROR,
                    details: D.ErrorDetails.FRAG_LOAD_ERROR,
                    fatal: !1,
                    frag: e,
                    part: f,
                    response: R,
                    networkDetails: _
                  }));
                },
                onAbort: function(R, P, _) {
                  e.stats.aborted = f.stats.aborted, i.resetLoader(e, l), a(new v({
                    type: D.ErrorTypes.NETWORK_ERROR,
                    details: D.ErrorDetails.INTERNAL_ABORTED,
                    fatal: !1,
                    frag: e,
                    part: f,
                    networkDetails: _
                  }));
                },
                onTimeout: function(R, P, _) {
                  i.resetLoader(e, l), a(new v({
                    type: D.ErrorTypes.NETWORK_ERROR,
                    details: D.ErrorDetails.FRAG_LOAD_TIMEOUT,
                    fatal: !1,
                    frag: e,
                    part: f,
                    networkDetails: _
                  }));
                }
              });
            });
          }, t.updateStatsFromPart = function(e, f) {
            var s = e.stats, i = f.stats, o = i.total;
            if (s.loaded += i.loaded, o) {
              var c = Math.round(e.duration / f.duration), h = Math.min(Math.round(s.loaded / o), c), u = c - h, a = u * Math.round(s.loaded / h);
              s.total = s.loaded + a;
            } else
              s.total = Math.max(s.loaded, s.total);
            var l = s.loading, d = i.loading;
            l.start ? l.first += d.first - d.start : (l.start = d.start, l.first = d.first), l.end = d.end;
          }, t.resetLoader = function(e, f) {
            e.loader = null, this.loader === f && (self.clearTimeout(this.partLoadTimeout), this.loader = null), f.destroy();
          }, n;
        }();
        function E(n, t) {
          t === void 0 && (t = null);
          var r = t || n, e = {
            frag: n,
            part: t,
            responseType: "arraybuffer",
            url: r.url,
            headers: {},
            rangeStart: 0,
            rangeEnd: 0
          }, f = r.byteRangeStartOffset, s = r.byteRangeEndOffset;
          return Object(C.isFiniteNumber)(f) && Object(C.isFiniteNumber)(s) && (e.rangeStart = f, e.rangeEnd = s), e;
        }
        var v = /* @__PURE__ */ function(n) {
          A(t, n);
          function t(r) {
            for (var e, f = arguments.length, s = new Array(f > 1 ? f - 1 : 0), i = 1; i < f; i++)
              s[i - 1] = arguments[i];
            return e = n.call.apply(n, [this].concat(s)) || this, e.data = void 0, e.data = r, e;
          }
          return t;
        }(/* @__PURE__ */ b(Error));
      },
      "./src/loader/fragment.ts": function(W, M, y) {
        y.r(M), y.d(M, "ElementaryStreamTypes", function() {
          return p;
        }), y.d(M, "BaseSegment", function() {
          return T;
        }), y.d(M, "Fragment", function() {
          return E;
        }), y.d(M, "Part", function() {
          return v;
        });
        var C = y("./src/polyfills/number.ts"), D = y("./node_modules/url-toolkit/src/url-toolkit.js"), A = y("./src/utils/logger.ts"), b = y("./src/loader/level-key.ts"), I = y("./src/loader/load-stats.ts");
        function O(n, t) {
          n.prototype = Object.create(t.prototype), n.prototype.constructor = n, L(n, t);
        }
        function L(n, t) {
          return L = Object.setPrototypeOf || function(e, f) {
            return e.__proto__ = f, e;
          }, L(n, t);
        }
        function m(n, t) {
          for (var r = 0; r < t.length; r++) {
            var e = t[r];
            e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e);
          }
        }
        function S(n, t, r) {
          return t && m(n.prototype, t), r && m(n, r), n;
        }
        var p;
        (function(n) {
          n.AUDIO = "audio", n.VIDEO = "video", n.AUDIOVIDEO = "audiovideo";
        })(p || (p = {}));
        var T = /* @__PURE__ */ function() {
          function n(r) {
            var e;
            this._byteRange = null, this._url = null, this.baseurl = void 0, this.relurl = void 0, this.elementaryStreams = (e = {}, e[p.AUDIO] = null, e[p.VIDEO] = null, e[p.AUDIOVIDEO] = null, e), this.baseurl = r;
          }
          var t = n.prototype;
          return t.setByteRange = function(e, f) {
            var s = e.split("@", 2), i = [];
            s.length === 1 ? i[0] = f ? f.byteRangeEndOffset : 0 : i[0] = parseInt(s[1]), i[1] = parseInt(s[0]) + i[0], this._byteRange = i;
          }, S(n, [{
            key: "byteRange",
            get: function() {
              return this._byteRange ? this._byteRange : [];
            }
          }, {
            key: "byteRangeStartOffset",
            get: function() {
              return this.byteRange[0];
            }
          }, {
            key: "byteRangeEndOffset",
            get: function() {
              return this.byteRange[1];
            }
          }, {
            key: "url",
            get: function() {
              return !this._url && this.baseurl && this.relurl && (this._url = Object(D.buildAbsoluteURL)(this.baseurl, this.relurl, {
                alwaysNormalize: !0
              })), this._url || "";
            },
            set: function(e) {
              this._url = e;
            }
          }]), n;
        }(), E = /* @__PURE__ */ function(n) {
          O(t, n);
          function t(e, f) {
            var s;
            return s = n.call(this, f) || this, s._decryptdata = null, s.rawProgramDateTime = null, s.programDateTime = null, s.tagList = [], s.duration = 0, s.sn = 0, s.levelkey = void 0, s.type = void 0, s.loader = null, s.level = -1, s.cc = 0, s.startPTS = void 0, s.endPTS = void 0, s.appendedPTS = void 0, s.startDTS = void 0, s.endDTS = void 0, s.start = 0, s.deltaPTS = void 0, s.maxStartPTS = void 0, s.minEndPTS = void 0, s.stats = new I.LoadStats(), s.urlId = 0, s.data = void 0, s.bitrateTest = !1, s.title = null, s.initSegment = null, s.type = e, s;
          }
          var r = t.prototype;
          return r.createInitializationVector = function(f) {
            for (var s = new Uint8Array(16), i = 12; i < 16; i++)
              s[i] = f >> 8 * (15 - i) & 255;
            return s;
          }, r.setDecryptDataFromLevelKey = function(f, s) {
            var i = f;
            return (f == null ? void 0 : f.method) === "AES-128" && f.uri && !f.iv && (i = b.LevelKey.fromURI(f.uri), i.method = f.method, i.iv = this.createInitializationVector(s), i.keyFormat = "identity"), i;
          }, r.setElementaryStreamInfo = function(f, s, i, o, c, h) {
            h === void 0 && (h = !1);
            var u = this.elementaryStreams, a = u[f];
            if (!a) {
              u[f] = {
                startPTS: s,
                endPTS: i,
                startDTS: o,
                endDTS: c,
                partial: h
              };
              return;
            }
            a.startPTS = Math.min(a.startPTS, s), a.endPTS = Math.max(a.endPTS, i), a.startDTS = Math.min(a.startDTS, o), a.endDTS = Math.max(a.endDTS, c);
          }, r.clearElementaryStreamInfo = function() {
            var f = this.elementaryStreams;
            f[p.AUDIO] = null, f[p.VIDEO] = null, f[p.AUDIOVIDEO] = null;
          }, S(t, [{
            key: "decryptdata",
            get: function() {
              if (!this.levelkey && !this._decryptdata)
                return null;
              if (!this._decryptdata && this.levelkey) {
                var f = this.sn;
                typeof f != "number" && (this.levelkey && this.levelkey.method === "AES-128" && !this.levelkey.iv && A.logger.warn('missing IV for initialization segment with method="' + this.levelkey.method + '" - compliance issue'), f = 0), this._decryptdata = this.setDecryptDataFromLevelKey(this.levelkey, f);
              }
              return this._decryptdata;
            }
          }, {
            key: "end",
            get: function() {
              return this.start + this.duration;
            }
          }, {
            key: "endProgramDateTime",
            get: function() {
              if (this.programDateTime === null || !Object(C.isFiniteNumber)(this.programDateTime))
                return null;
              var f = Object(C.isFiniteNumber)(this.duration) ? this.duration : 0;
              return this.programDateTime + f * 1e3;
            }
          }, {
            key: "encrypted",
            get: function() {
              var f;
              return !!((f = this.decryptdata) !== null && f !== void 0 && f.keyFormat && this.decryptdata.uri);
            }
          }]), t;
        }(T), v = /* @__PURE__ */ function(n) {
          O(t, n);
          function t(r, e, f, s, i) {
            var o;
            o = n.call(this, f) || this, o.fragOffset = 0, o.duration = 0, o.gap = !1, o.independent = !1, o.relurl = void 0, o.fragment = void 0, o.index = void 0, o.stats = new I.LoadStats(), o.duration = r.decimalFloatingPoint("DURATION"), o.gap = r.bool("GAP"), o.independent = r.bool("INDEPENDENT"), o.relurl = r.enumeratedString("URI"), o.fragment = e, o.index = s;
            var c = r.enumeratedString("BYTERANGE");
            return c && o.setByteRange(c, i), i && (o.fragOffset = i.fragOffset + i.duration), o;
          }
          return S(t, [{
            key: "start",
            get: function() {
              return this.fragment.start + this.fragOffset;
            }
          }, {
            key: "end",
            get: function() {
              return this.start + this.duration;
            }
          }, {
            key: "loaded",
            get: function() {
              var e = this.elementaryStreams;
              return !!(e.audio || e.video || e.audiovideo);
            }
          }]), t;
        }(T);
      },
      "./src/loader/key-loader.ts": function(W, M, y) {
        y.r(M), y.d(M, "default", function() {
          return b;
        });
        var C = y("./src/events.ts"), D = y("./src/errors.ts"), A = y("./src/utils/logger.ts"), b = /* @__PURE__ */ function() {
          function I(L) {
            this.hls = void 0, this.loaders = {}, this.decryptkey = null, this.decrypturl = null, this.hls = L, this._registerListeners();
          }
          var O = I.prototype;
          return O._registerListeners = function() {
            this.hls.on(C.Events.KEY_LOADING, this.onKeyLoading, this);
          }, O._unregisterListeners = function() {
            this.hls.off(C.Events.KEY_LOADING, this.onKeyLoading);
          }, O.destroy = function() {
            this._unregisterListeners();
            for (var m in this.loaders) {
              var S = this.loaders[m];
              S && S.destroy();
            }
            this.loaders = {};
          }, O.onKeyLoading = function(m, S) {
            var p = S.frag, T = p.type, E = this.loaders[T];
            if (!p.decryptdata) {
              A.logger.warn("Missing decryption data on fragment in onKeyLoading");
              return;
            }
            var v = p.decryptdata.uri;
            if (v !== this.decrypturl || this.decryptkey === null) {
              var n = this.hls.config;
              if (E && (A.logger.warn("abort previous key loader for type:" + T), E.abort()), !v) {
                A.logger.warn("key uri is falsy");
                return;
              }
              var t = n.loader, r = p.loader = this.loaders[T] = new t(n);
              this.decrypturl = v, this.decryptkey = null;
              var e = {
                url: v,
                frag: p,
                responseType: "arraybuffer"
              }, f = {
                timeout: n.fragLoadingTimeOut,
                maxRetry: 0,
                retryDelay: n.fragLoadingRetryDelay,
                maxRetryDelay: n.fragLoadingMaxRetryTimeout,
                highWaterMark: 0
              }, s = {
                onSuccess: this.loadsuccess.bind(this),
                onError: this.loaderror.bind(this),
                onTimeout: this.loadtimeout.bind(this)
              };
              r.load(e, f, s);
            } else
              this.decryptkey && (p.decryptdata.key = this.decryptkey, this.hls.trigger(C.Events.KEY_LOADED, {
                frag: p
              }));
          }, O.loadsuccess = function(m, S, p) {
            var T = p.frag;
            if (!T.decryptdata) {
              A.logger.error("after key load, decryptdata unset");
              return;
            }
            this.decryptkey = T.decryptdata.key = new Uint8Array(m.data), T.loader = null, delete this.loaders[T.type], this.hls.trigger(C.Events.KEY_LOADED, {
              frag: T
            });
          }, O.loaderror = function(m, S) {
            var p = S.frag, T = p.loader;
            T && T.abort(), delete this.loaders[p.type], this.hls.trigger(C.Events.ERROR, {
              type: D.ErrorTypes.NETWORK_ERROR,
              details: D.ErrorDetails.KEY_LOAD_ERROR,
              fatal: !1,
              frag: p,
              response: m
            });
          }, O.loadtimeout = function(m, S) {
            var p = S.frag, T = p.loader;
            T && T.abort(), delete this.loaders[p.type], this.hls.trigger(C.Events.ERROR, {
              type: D.ErrorTypes.NETWORK_ERROR,
              details: D.ErrorDetails.KEY_LOAD_TIMEOUT,
              fatal: !1,
              frag: p
            });
          }, I;
        }();
      },
      "./src/loader/level-details.ts": function(W, M, y) {
        y.r(M), y.d(M, "LevelDetails", function() {
          return I;
        });
        var C = y("./src/polyfills/number.ts");
        function D(O, L) {
          for (var m = 0; m < L.length; m++) {
            var S = L[m];
            S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(O, S.key, S);
          }
        }
        function A(O, L, m) {
          return L && D(O.prototype, L), m && D(O, m), O;
        }
        var b = 10, I = /* @__PURE__ */ function() {
          function O(m) {
            this.PTSKnown = !1, this.alignedSliding = !1, this.averagetargetduration = void 0, this.endCC = 0, this.endSN = 0, this.fragments = void 0, this.fragmentHint = void 0, this.partList = null, this.live = !0, this.ageHeader = 0, this.advancedDateTime = void 0, this.updated = !0, this.advanced = !0, this.availabilityDelay = void 0, this.misses = 0, this.needSidxRanges = !1, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = void 0, this.m3u8 = "", this.version = null, this.canBlockReload = !1, this.canSkipUntil = 0, this.canSkipDateRanges = !1, this.skippedSegments = 0, this.recentlyRemovedDateranges = void 0, this.partHoldBack = 0, this.holdBack = 0, this.partTarget = 0, this.preloadHint = void 0, this.renditionReports = void 0, this.tuneInGoal = 0, this.deltaUpdateFailed = void 0, this.driftStartTime = 0, this.driftEndTime = 0, this.driftStart = 0, this.driftEnd = 0, this.fragments = [], this.url = m;
          }
          var L = O.prototype;
          return L.reloaded = function(S) {
            if (!S) {
              this.advanced = !0, this.updated = !0;
              return;
            }
            var p = this.lastPartSn - S.lastPartSn, T = this.lastPartIndex - S.lastPartIndex;
            this.updated = this.endSN !== S.endSN || !!T || !!p, this.advanced = this.endSN > S.endSN || p > 0 || p === 0 && T > 0, this.updated || this.advanced ? this.misses = Math.floor(S.misses * 0.6) : this.misses = S.misses + 1, this.availabilityDelay = S.availabilityDelay;
          }, A(O, [{
            key: "hasProgramDateTime",
            get: function() {
              return this.fragments.length ? Object(C.isFiniteNumber)(this.fragments[this.fragments.length - 1].programDateTime) : !1;
            }
          }, {
            key: "levelTargetDuration",
            get: function() {
              return this.averagetargetduration || this.targetduration || b;
            }
          }, {
            key: "drift",
            get: function() {
              var S = this.driftEndTime - this.driftStartTime;
              if (S > 0) {
                var p = this.driftEnd - this.driftStart;
                return p * 1e3 / S;
              }
              return 1;
            }
          }, {
            key: "edge",
            get: function() {
              return this.partEnd || this.fragmentEnd;
            }
          }, {
            key: "partEnd",
            get: function() {
              var S;
              return (S = this.partList) !== null && S !== void 0 && S.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd;
            }
          }, {
            key: "fragmentEnd",
            get: function() {
              var S;
              return (S = this.fragments) !== null && S !== void 0 && S.length ? this.fragments[this.fragments.length - 1].end : 0;
            }
          }, {
            key: "age",
            get: function() {
              return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0;
            }
          }, {
            key: "lastPartIndex",
            get: function() {
              var S;
              return (S = this.partList) !== null && S !== void 0 && S.length ? this.partList[this.partList.length - 1].index : -1;
            }
          }, {
            key: "lastPartSn",
            get: function() {
              var S;
              return (S = this.partList) !== null && S !== void 0 && S.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN;
            }
          }]), O;
        }();
      },
      "./src/loader/level-key.ts": function(W, M, y) {
        y.r(M), y.d(M, "LevelKey", function() {
          return b;
        });
        var C = y("./node_modules/url-toolkit/src/url-toolkit.js");
        function D(I, O) {
          for (var L = 0; L < O.length; L++) {
            var m = O[L];
            m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(I, m.key, m);
          }
        }
        function A(I, O, L) {
          return O && D(I.prototype, O), L && D(I, L), I;
        }
        var b = /* @__PURE__ */ function() {
          I.fromURL = function(L, m) {
            return new I(L, m);
          }, I.fromURI = function(L) {
            return new I(L);
          };
          function I(O, L) {
            this._uri = null, this.method = null, this.keyFormat = null, this.keyFormatVersions = null, this.keyID = null, this.key = null, this.iv = null, L ? this._uri = Object(C.buildAbsoluteURL)(O, L, {
              alwaysNormalize: !0
            }) : this._uri = O;
          }
          return A(I, [{
            key: "uri",
            get: function() {
              return this._uri;
            }
          }]), I;
        }();
      },
      "./src/loader/load-stats.ts": function(W, M, y) {
        y.r(M), y.d(M, "LoadStats", function() {
          return C;
        });
        var C = function() {
          this.aborted = !1, this.loaded = 0, this.retry = 0, this.total = 0, this.chunkCount = 0, this.bwEstimate = 0, this.loading = {
            start: 0,
            first: 0,
            end: 0
          }, this.parsing = {
            start: 0,
            end: 0
          }, this.buffering = {
            start: 0,
            first: 0,
            end: 0
          };
        };
      },
      "./src/loader/m3u8-parser.ts": function(W, M, y) {
        y.r(M), y.d(M, "default", function() {
          return t;
        });
        var C = y("./src/polyfills/number.ts"), D = y("./node_modules/url-toolkit/src/url-toolkit.js"), A = y("./src/loader/fragment.ts"), b = y("./src/loader/level-details.ts"), I = y("./src/loader/level-key.ts"), O = y("./src/utils/attr-list.ts"), L = y("./src/utils/logger.ts"), m = y("./src/utils/codecs.ts"), S = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-SESSION-DATA:([^\r\n]*)[\r\n]+/g, p = /#EXT-X-MEDIA:(.*)/g, T = new RegExp([
          /#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,
          /(?!#) *(\S[\S ]*)/.source,
          /#EXT-X-BYTERANGE:*(.+)/.source,
          /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,
          /#.*/.source
        ].join("|"), "g"), E = new RegExp([/#(EXTM3U)/.source, /#EXT-X-(PLAYLIST-TYPE):(.+)/.source, /#EXT-X-(MEDIA-SEQUENCE): *(\d+)/.source, /#EXT-X-(SKIP):(.+)/.source, /#EXT-X-(TARGETDURATION): *(\d+)/.source, /#EXT-X-(KEY):(.+)/.source, /#EXT-X-(START):(.+)/.source, /#EXT-X-(ENDLIST)/.source, /#EXT-X-(DISCONTINUITY-SEQ)UENCE: *(\d+)/.source, /#EXT-X-(DIS)CONTINUITY/.source, /#EXT-X-(VERSION):(\d+)/.source, /#EXT-X-(MAP):(.+)/.source, /#EXT-X-(SERVER-CONTROL):(.+)/.source, /#EXT-X-(PART-INF):(.+)/.source, /#EXT-X-(GAP)/.source, /#EXT-X-(BITRATE):\s*(\d+)/.source, /#EXT-X-(PART):(.+)/.source, /#EXT-X-(PRELOAD-HINT):(.+)/.source, /#EXT-X-(RENDITION-REPORT):(.+)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|")), v = /\.(mp4|m4s|m4v|m4a)$/i;
        function n(i) {
          var o, c;
          return v.test((o = (c = D.parseURL(i)) === null || c === void 0 ? void 0 : c.path) != null ? o : "");
        }
        var t = /* @__PURE__ */ function() {
          function i() {
          }
          return i.findGroup = function(c, h) {
            for (var u = 0; u < c.length; u++) {
              var a = c[u];
              if (a.id === h)
                return a;
            }
          }, i.convertAVC1ToAVCOTI = function(c) {
            var h = c.split(".");
            if (h.length > 2) {
              var u = h.shift() + ".";
              return u += parseInt(h.shift()).toString(16), u += ("000" + parseInt(h.shift()).toString(16)).substr(-4), u;
            }
            return c;
          }, i.resolve = function(c, h) {
            return D.buildAbsoluteURL(h, c, {
              alwaysNormalize: !0
            });
          }, i.parseMasterPlaylist = function(c, h) {
            var u = [], a = {}, l = !1;
            S.lastIndex = 0;
            for (var d; (d = S.exec(c)) != null; )
              if (d[1]) {
                var g = new O.AttrList(d[1]), x = {
                  attrs: g,
                  bitrate: g.decimalInteger("AVERAGE-BANDWIDTH") || g.decimalInteger("BANDWIDTH"),
                  name: g.NAME,
                  url: i.resolve(d[2], h)
                }, R = g.decimalResolution("RESOLUTION");
                R && (x.width = R.width, x.height = R.height), r((g.CODECS || "").split(/[ ,]+/).filter(function(_) {
                  return _;
                }), x), x.videoCodec && x.videoCodec.indexOf("avc1") !== -1 && (x.videoCodec = i.convertAVC1ToAVCOTI(x.videoCodec)), u.push(x);
              } else if (d[3]) {
                var P = new O.AttrList(d[3]);
                P["DATA-ID"] && (l = !0, a[P["DATA-ID"]] = P);
              }
            return {
              levels: u,
              sessionData: l ? a : null
            };
          }, i.parseMasterPlaylistMedia = function(c, h, u, a) {
            a === void 0 && (a = []);
            var l, d = [], g = 0;
            for (p.lastIndex = 0; (l = p.exec(c)) !== null; ) {
              var x = new O.AttrList(l[1]);
              if (x.TYPE === u) {
                var R = {
                  attrs: x,
                  bitrate: 0,
                  id: g++,
                  groupId: x["GROUP-ID"],
                  instreamId: x["INSTREAM-ID"],
                  name: x.NAME || x.LANGUAGE || "",
                  type: u,
                  default: x.bool("DEFAULT"),
                  autoselect: x.bool("AUTOSELECT"),
                  forced: x.bool("FORCED"),
                  lang: x.LANGUAGE,
                  url: x.URI ? i.resolve(x.URI, h) : ""
                };
                if (a.length) {
                  var P = i.findGroup(a, R.groupId) || a[0];
                  e(R, P, "audioCodec"), e(R, P, "textCodec");
                }
                d.push(R);
              }
            }
            return d;
          }, i.parseLevelPlaylist = function(c, h, u, a, l) {
            var d = new b.LevelDetails(h), g = d.fragments, x = null, R = 0, P = 0, _ = 0, F = 0, B = null, U = new A.Fragment(a, h), N, k, w, K = -1, j = !1;
            for (T.lastIndex = 0, d.m3u8 = c; (N = T.exec(c)) !== null; ) {
              j && (j = !1, U = new A.Fragment(a, h), U.start = _, U.sn = R, U.cc = F, U.level = u, x && (U.initSegment = x, U.rawProgramDateTime = x.rawProgramDateTime));
              var H = N[1];
              if (H) {
                U.duration = parseFloat(H);
                var G = (" " + N[2]).slice(1);
                U.title = G || null, U.tagList.push(G ? ["INF", H, G] : ["INF", H]);
              } else if (N[3])
                Object(C.isFiniteNumber)(U.duration) && (U.start = _, w && (U.levelkey = w), U.sn = R, U.level = u, U.cc = F, U.urlId = l, g.push(U), U.relurl = (" " + N[3]).slice(1), s(U, B), B = U, _ += U.duration, R++, P = 0, j = !0);
              else if (N[4]) {
                var X = (" " + N[4]).slice(1);
                B ? U.setByteRange(X, B) : U.setByteRange(X);
              } else if (N[5])
                U.rawProgramDateTime = (" " + N[5]).slice(1), U.tagList.push(["PROGRAM-DATE-TIME", U.rawProgramDateTime]), K === -1 && (K = g.length);
              else {
                if (N = N[0].match(E), !N) {
                  L.logger.warn("No matches on slow regex match for level playlist!");
                  continue;
                }
                for (k = 1; k < N.length && !(typeof N[k] < "u"); k++)
                  ;
                var V = (" " + N[k]).slice(1), Y = (" " + N[k + 1]).slice(1), z = N[k + 2] ? (" " + N[k + 2]).slice(1) : "";
                switch (V) {
                  case "PLAYLIST-TYPE":
                    d.type = Y.toUpperCase();
                    break;
                  case "MEDIA-SEQUENCE":
                    R = d.startSN = parseInt(Y);
                    break;
                  case "SKIP": {
                    var Q = new O.AttrList(Y), $ = Q.decimalInteger("SKIPPED-SEGMENTS");
                    if (Object(C.isFiniteNumber)($)) {
                      d.skippedSegments = $;
                      for (var Z = $; Z--; )
                        g.unshift(null);
                      R += $;
                    }
                    var tt = Q.enumeratedString("RECENTLY-REMOVED-DATERANGES");
                    tt && (d.recentlyRemovedDateranges = tt.split("	"));
                    break;
                  }
                  case "TARGETDURATION":
                    d.targetduration = parseFloat(Y);
                    break;
                  case "VERSION":
                    d.version = parseInt(Y);
                    break;
                  case "EXTM3U":
                    break;
                  case "ENDLIST":
                    d.live = !1;
                    break;
                  case "#":
                    (Y || z) && U.tagList.push(z ? [Y, z] : [Y]);
                    break;
                  case "DIS":
                    F++;
                  case "GAP":
                    U.tagList.push([V]);
                    break;
                  case "BITRATE":
                    U.tagList.push([V, Y]);
                    break;
                  case "DISCONTINUITY-SEQ":
                    F = parseInt(Y);
                    break;
                  case "KEY": {
                    var J, et = new O.AttrList(Y), nt = et.enumeratedString("METHOD"), rt = et.URI, at = et.hexadecimalInteger("IV"), it = et.enumeratedString("KEYFORMATVERSIONS"), st = et.enumeratedString("KEYID"), q = (J = et.enumeratedString("KEYFORMAT")) != null ? J : "identity", mt = [
                      "com.apple.streamingkeydelivery",
                      "com.microsoft.playready",
                      "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed",
                      "com.widevine"
                    ];
                    if (mt.indexOf(q) > -1) {
                      L.logger.warn("Keyformat " + q + " is not supported from the manifest");
                      continue;
                    } else if (q !== "identity")
                      continue;
                    nt && (w = I.LevelKey.fromURL(h, rt), rt && ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(nt) >= 0 && (w.method = nt, w.keyFormat = q, st && (w.keyID = st), it && (w.keyFormatVersions = it), w.iv = at));
                    break;
                  }
                  case "START": {
                    var pt = new O.AttrList(Y), vt = pt.decimalFloatingPoint("TIME-OFFSET");
                    Object(C.isFiniteNumber)(vt) && (d.startTimeOffset = vt);
                    break;
                  }
                  case "MAP": {
                    var lt = new O.AttrList(Y);
                    U.relurl = lt.URI, lt.BYTERANGE && U.setByteRange(lt.BYTERANGE), U.level = u, U.sn = "initSegment", w && (U.levelkey = w), U.initSegment = null, x = U, j = !0;
                    break;
                  }
                  case "SERVER-CONTROL": {
                    var ut = new O.AttrList(Y);
                    d.canBlockReload = ut.bool("CAN-BLOCK-RELOAD"), d.canSkipUntil = ut.optionalFloat("CAN-SKIP-UNTIL", 0), d.canSkipDateRanges = d.canSkipUntil > 0 && ut.bool("CAN-SKIP-DATERANGES"), d.partHoldBack = ut.optionalFloat("PART-HOLD-BACK", 0), d.holdBack = ut.optionalFloat("HOLD-BACK", 0);
                    break;
                  }
                  case "PART-INF": {
                    var ct = new O.AttrList(Y);
                    d.partTarget = ct.decimalFloatingPoint("PART-TARGET");
                    break;
                  }
                  case "PART": {
                    var ft = d.partList;
                    ft || (ft = d.partList = []);
                    var ot = P > 0 ? ft[ft.length - 1] : void 0, dt = P++, Tt = new A.Part(new O.AttrList(Y), U, h, dt, ot);
                    ft.push(Tt), U.duration += Tt.duration;
                    break;
                  }
                  case "PRELOAD-HINT": {
                    var yt = new O.AttrList(Y);
                    d.preloadHint = yt;
                    break;
                  }
                  case "RENDITION-REPORT": {
                    var Et = new O.AttrList(Y);
                    d.renditionReports = d.renditionReports || [], d.renditionReports.push(Et);
                    break;
                  }
                  default:
                    L.logger.warn("line parsed but not handled: " + N);
                    break;
                }
              }
            }
            B && !B.relurl ? (g.pop(), _ -= B.duration, d.partList && (d.fragmentHint = B)) : d.partList && (s(U, B), U.cc = F, d.fragmentHint = U);
            var xt = g.length, gt = g[0], ht = g[xt - 1];
            if (_ += d.skippedSegments * d.targetduration, _ > 0 && xt && ht) {
              d.averagetargetduration = _ / xt;
              var St = ht.sn;
              d.endSN = St !== "initSegment" ? St : 0, gt && (d.startCC = gt.cc, gt.initSegment || d.fragments.every(function(At) {
                return At.relurl && n(At.relurl);
              }) && (L.logger.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"), U = new A.Fragment(a, h), U.relurl = ht.relurl, U.level = u, U.sn = "initSegment", gt.initSegment = U, d.needSidxRanges = !0));
            } else
              d.endSN = 0, d.startCC = 0;
            return d.fragmentHint && (_ += d.fragmentHint.duration), d.totalduration = _, d.endCC = F, K > 0 && f(g, K), d;
          }, i;
        }();
        function r(i, o) {
          ["video", "audio", "text"].forEach(function(c) {
            var h = i.filter(function(a) {
              return Object(m.isCodecType)(a, c);
            });
            if (h.length) {
              var u = h.filter(function(a) {
                return a.lastIndexOf("avc1", 0) === 0 || a.lastIndexOf("mp4a", 0) === 0;
              });
              o[c + "Codec"] = u.length > 0 ? u[0] : h[0], i = i.filter(function(a) {
                return h.indexOf(a) === -1;
              });
            }
          }), o.unknownCodecs = i;
        }
        function e(i, o, c) {
          var h = o[c];
          h && (i[c] = h);
        }
        function f(i, o) {
          for (var c = i[o], h = o; h--; ) {
            var u = i[h];
            if (!u)
              return;
            u.programDateTime = c.programDateTime - u.duration * 1e3, c = u;
          }
        }
        function s(i, o) {
          i.rawProgramDateTime ? i.programDateTime = Date.parse(i.rawProgramDateTime) : o != null && o.programDateTime && (i.programDateTime = o.endProgramDateTime), Object(C.isFiniteNumber)(i.programDateTime) || (i.programDateTime = null, i.rawProgramDateTime = null);
        }
      },
      "./src/loader/playlist-loader.ts": function(W, M, y) {
        y.r(M);
        var C = y("./src/polyfills/number.ts"), D = y("./src/events.ts"), A = y("./src/errors.ts"), b = y("./src/utils/logger.ts"), I = y("./src/utils/mp4-tools.ts"), O = y("./src/loader/m3u8-parser.ts"), L = y("./src/types/loader.ts"), m = y("./src/utils/attr-list.ts");
        function S(E) {
          var v = E.type;
          switch (v) {
            case L.PlaylistContextType.AUDIO_TRACK:
              return L.PlaylistLevelType.AUDIO;
            case L.PlaylistContextType.SUBTITLE_TRACK:
              return L.PlaylistLevelType.SUBTITLE;
            default:
              return L.PlaylistLevelType.MAIN;
          }
        }
        function p(E, v) {
          var n = E.url;
          return (n === void 0 || n.indexOf("data:") === 0) && (n = v.url), n;
        }
        var T = /* @__PURE__ */ function() {
          function E(n) {
            this.hls = void 0, this.loaders = /* @__PURE__ */ Object.create(null), this.hls = n, this.registerListeners();
          }
          var v = E.prototype;
          return v.registerListeners = function() {
            var t = this.hls;
            t.on(D.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.on(D.Events.LEVEL_LOADING, this.onLevelLoading, this), t.on(D.Events.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), t.on(D.Events.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
          }, v.unregisterListeners = function() {
            var t = this.hls;
            t.off(D.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.off(D.Events.LEVEL_LOADING, this.onLevelLoading, this), t.off(D.Events.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), t.off(D.Events.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
          }, v.createInternalLoader = function(t) {
            var r = this.hls.config, e = r.pLoader, f = r.loader, s = e || f, i = new s(r);
            return t.loader = i, this.loaders[t.type] = i, i;
          }, v.getInternalLoader = function(t) {
            return this.loaders[t.type];
          }, v.resetInternalLoader = function(t) {
            this.loaders[t] && delete this.loaders[t];
          }, v.destroyInternalLoaders = function() {
            for (var t in this.loaders) {
              var r = this.loaders[t];
              r && r.destroy(), this.resetInternalLoader(t);
            }
          }, v.destroy = function() {
            this.unregisterListeners(), this.destroyInternalLoaders();
          }, v.onManifestLoading = function(t, r) {
            var e = r.url;
            this.load({
              id: null,
              groupId: null,
              level: 0,
              responseType: "text",
              type: L.PlaylistContextType.MANIFEST,
              url: e,
              deliveryDirectives: null
            });
          }, v.onLevelLoading = function(t, r) {
            var e = r.id, f = r.level, s = r.url, i = r.deliveryDirectives;
            this.load({
              id: e,
              groupId: null,
              level: f,
              responseType: "text",
              type: L.PlaylistContextType.LEVEL,
              url: s,
              deliveryDirectives: i
            });
          }, v.onAudioTrackLoading = function(t, r) {
            var e = r.id, f = r.groupId, s = r.url, i = r.deliveryDirectives;
            this.load({
              id: e,
              groupId: f,
              level: null,
              responseType: "text",
              type: L.PlaylistContextType.AUDIO_TRACK,
              url: s,
              deliveryDirectives: i
            });
          }, v.onSubtitleTrackLoading = function(t, r) {
            var e = r.id, f = r.groupId, s = r.url, i = r.deliveryDirectives;
            this.load({
              id: e,
              groupId: f,
              level: null,
              responseType: "text",
              type: L.PlaylistContextType.SUBTITLE_TRACK,
              url: s,
              deliveryDirectives: i
            });
          }, v.load = function(t) {
            var r, e = this.hls.config, f = this.getInternalLoader(t);
            if (f) {
              var s = f.context;
              if (s && s.url === t.url) {
                b.logger.trace("[playlist-loader]: playlist request ongoing");
                return;
              }
              b.logger.log("[playlist-loader]: aborting previous loader for type: " + t.type), f.abort();
            }
            var i, o, c, h;
            switch (t.type) {
              case L.PlaylistContextType.MANIFEST:
                i = e.manifestLoadingMaxRetry, o = e.manifestLoadingTimeOut, c = e.manifestLoadingRetryDelay, h = e.manifestLoadingMaxRetryTimeout;
                break;
              case L.PlaylistContextType.LEVEL:
              case L.PlaylistContextType.AUDIO_TRACK:
              case L.PlaylistContextType.SUBTITLE_TRACK:
                i = 0, o = e.levelLoadingTimeOut;
                break;
              default:
                i = e.levelLoadingMaxRetry, o = e.levelLoadingTimeOut, c = e.levelLoadingRetryDelay, h = e.levelLoadingMaxRetryTimeout;
                break;
            }
            if (f = this.createInternalLoader(t), (r = t.deliveryDirectives) !== null && r !== void 0 && r.part) {
              var u;
              if (t.type === L.PlaylistContextType.LEVEL && t.level !== null ? u = this.hls.levels[t.level].details : t.type === L.PlaylistContextType.AUDIO_TRACK && t.id !== null ? u = this.hls.audioTracks[t.id].details : t.type === L.PlaylistContextType.SUBTITLE_TRACK && t.id !== null && (u = this.hls.subtitleTracks[t.id].details), u) {
                var a = u.partTarget, l = u.targetduration;
                a && l && (o = Math.min(Math.max(a * 3, l * 0.8) * 1e3, o));
              }
            }
            var d = {
              timeout: o,
              maxRetry: i,
              retryDelay: c,
              maxRetryDelay: h,
              highWaterMark: 0
            }, g = {
              onSuccess: this.loadsuccess.bind(this),
              onError: this.loaderror.bind(this),
              onTimeout: this.loadtimeout.bind(this)
            };
            f.load(t, d, g);
          }, v.loadsuccess = function(t, r, e, f) {
            if (f === void 0 && (f = null), e.isSidxRequest) {
              this.handleSidxRequest(t, e), this.handlePlaylistLoaded(t, r, e, f);
              return;
            }
            this.resetInternalLoader(e.type);
            var s = t.data;
            if (s.indexOf("#EXTM3U") !== 0) {
              this.handleManifestParsingError(t, e, "no EXTM3U delimiter", f);
              return;
            }
            r.parsing.start = performance.now(), s.indexOf("#EXTINF:") > 0 || s.indexOf("#EXT-X-TARGETDURATION:") > 0 ? this.handleTrackOrLevelPlaylist(t, r, e, f) : this.handleMasterPlaylist(t, r, e, f);
          }, v.loaderror = function(t, r, e) {
            e === void 0 && (e = null), this.handleNetworkError(r, e, !1, t);
          }, v.loadtimeout = function(t, r, e) {
            e === void 0 && (e = null), this.handleNetworkError(r, e, !0);
          }, v.handleMasterPlaylist = function(t, r, e, f) {
            var s = this.hls, i = t.data, o = p(t, e), c = O.default.parseMasterPlaylist(i, o), h = c.levels, u = c.sessionData;
            if (!h.length) {
              this.handleManifestParsingError(t, e, "no level found in manifest", f);
              return;
            }
            var a = h.map(function(P) {
              return {
                id: P.attrs.AUDIO,
                audioCodec: P.audioCodec
              };
            }), l = h.map(function(P) {
              return {
                id: P.attrs.SUBTITLES,
                textCodec: P.textCodec
              };
            }), d = O.default.parseMasterPlaylistMedia(i, o, "AUDIO", a), g = O.default.parseMasterPlaylistMedia(i, o, "SUBTITLES", l), x = O.default.parseMasterPlaylistMedia(i, o, "CLOSED-CAPTIONS");
            if (d.length) {
              var R = d.some(function(P) {
                return !P.url;
              });
              !R && h[0].audioCodec && !h[0].attrs.AUDIO && (b.logger.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), d.unshift({
                type: "main",
                name: "main",
                default: !1,
                autoselect: !1,
                forced: !1,
                id: -1,
                attrs: new m.AttrList({}),
                bitrate: 0,
                url: ""
              }));
            }
            s.trigger(D.Events.MANIFEST_LOADED, {
              levels: h,
              audioTracks: d,
              subtitles: g,
              captions: x,
              url: o,
              stats: r,
              networkDetails: f,
              sessionData: u
            });
          }, v.handleTrackOrLevelPlaylist = function(t, r, e, f) {
            var s = this.hls, i = e.id, o = e.level, c = e.type, h = p(t, e), u = Object(C.isFiniteNumber)(i) ? i : 0, a = Object(C.isFiniteNumber)(o) ? o : u, l = S(e), d = O.default.parseLevelPlaylist(t.data, h, a, l, u);
            if (!d.fragments.length) {
              s.trigger(D.Events.ERROR, {
                type: A.ErrorTypes.NETWORK_ERROR,
                details: A.ErrorDetails.LEVEL_EMPTY_ERROR,
                fatal: !1,
                url: h,
                reason: "no fragments found in level",
                level: typeof e.level == "number" ? e.level : void 0
              });
              return;
            }
            if (c === L.PlaylistContextType.MANIFEST) {
              var g = {
                attrs: new m.AttrList({}),
                bitrate: 0,
                details: d,
                name: "",
                url: h
              };
              s.trigger(D.Events.MANIFEST_LOADED, {
                levels: [g],
                audioTracks: [],
                url: h,
                stats: r,
                networkDetails: f,
                sessionData: null
              });
            }
            if (r.parsing.end = performance.now(), d.needSidxRanges) {
              var x, R = (x = d.fragments[0].initSegment) === null || x === void 0 ? void 0 : x.url;
              this.load({
                url: R,
                isSidxRequest: !0,
                type: c,
                level: o,
                levelDetails: d,
                id: i,
                groupId: null,
                rangeStart: 0,
                rangeEnd: 2048,
                responseType: "arraybuffer",
                deliveryDirectives: null
              });
              return;
            }
            e.levelDetails = d, this.handlePlaylistLoaded(t, r, e, f);
          }, v.handleSidxRequest = function(t, r) {
            var e = Object(I.parseSegmentIndex)(new Uint8Array(t.data));
            if (!!e) {
              var f = e.references, s = r.levelDetails;
              f.forEach(function(i, o) {
                var c = i.info, h = s.fragments[o];
                h.byteRange.length === 0 && h.setByteRange(String(1 + c.end - c.start) + "@" + String(c.start)), h.initSegment && h.initSegment.setByteRange(String(e.moovEndOffset) + "@0");
              });
            }
          }, v.handleManifestParsingError = function(t, r, e, f) {
            this.hls.trigger(D.Events.ERROR, {
              type: A.ErrorTypes.NETWORK_ERROR,
              details: A.ErrorDetails.MANIFEST_PARSING_ERROR,
              fatal: r.type === L.PlaylistContextType.MANIFEST,
              url: t.url,
              reason: e,
              response: t,
              context: r,
              networkDetails: f
            });
          }, v.handleNetworkError = function(t, r, e, f) {
            e === void 0 && (e = !1), b.logger.warn("[playlist-loader]: A network " + (e ? "timeout" : "error") + " occurred while loading " + t.type + " level: " + t.level + " id: " + t.id + ' group-id: "' + t.groupId + '"');
            var s = A.ErrorDetails.UNKNOWN, i = !1, o = this.getInternalLoader(t);
            switch (t.type) {
              case L.PlaylistContextType.MANIFEST:
                s = e ? A.ErrorDetails.MANIFEST_LOAD_TIMEOUT : A.ErrorDetails.MANIFEST_LOAD_ERROR, i = !0;
                break;
              case L.PlaylistContextType.LEVEL:
                s = e ? A.ErrorDetails.LEVEL_LOAD_TIMEOUT : A.ErrorDetails.LEVEL_LOAD_ERROR, i = !1;
                break;
              case L.PlaylistContextType.AUDIO_TRACK:
                s = e ? A.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT : A.ErrorDetails.AUDIO_TRACK_LOAD_ERROR, i = !1;
                break;
              case L.PlaylistContextType.SUBTITLE_TRACK:
                s = e ? A.ErrorDetails.SUBTITLE_TRACK_LOAD_TIMEOUT : A.ErrorDetails.SUBTITLE_LOAD_ERROR, i = !1;
                break;
            }
            o && this.resetInternalLoader(t.type);
            var c = {
              type: A.ErrorTypes.NETWORK_ERROR,
              details: s,
              fatal: i,
              url: t.url,
              loader: o,
              context: t,
              networkDetails: r
            };
            f && (c.response = f), this.hls.trigger(D.Events.ERROR, c);
          }, v.handlePlaylistLoaded = function(t, r, e, f) {
            var s = e.type, i = e.level, o = e.id, c = e.groupId, h = e.loader, u = e.levelDetails, a = e.deliveryDirectives;
            if (!(u != null && u.targetduration)) {
              this.handleManifestParsingError(t, e, "invalid target duration", f);
              return;
            }
            if (!!h)
              switch (u.live && (h.getCacheAge && (u.ageHeader = h.getCacheAge() || 0), (!h.getCacheAge || isNaN(u.ageHeader)) && (u.ageHeader = 0)), s) {
                case L.PlaylistContextType.MANIFEST:
                case L.PlaylistContextType.LEVEL:
                  this.hls.trigger(D.Events.LEVEL_LOADED, {
                    details: u,
                    level: i || 0,
                    id: o || 0,
                    stats: r,
                    networkDetails: f,
                    deliveryDirectives: a
                  });
                  break;
                case L.PlaylistContextType.AUDIO_TRACK:
                  this.hls.trigger(D.Events.AUDIO_TRACK_LOADED, {
                    details: u,
                    id: o || 0,
                    groupId: c || "",
                    stats: r,
                    networkDetails: f,
                    deliveryDirectives: a
                  });
                  break;
                case L.PlaylistContextType.SUBTITLE_TRACK:
                  this.hls.trigger(D.Events.SUBTITLE_TRACK_LOADED, {
                    details: u,
                    id: o || 0,
                    groupId: c || "",
                    stats: r,
                    networkDetails: f,
                    deliveryDirectives: a
                  });
                  break;
              }
          }, E;
        }();
        M.default = T;
      },
      "./src/polyfills/number.ts": function(W, M, y) {
        y.r(M), y.d(M, "isFiniteNumber", function() {
          return C;
        }), y.d(M, "MAX_SAFE_INTEGER", function() {
          return D;
        });
        var C = Number.isFinite || function(A) {
          return typeof A == "number" && isFinite(A);
        }, D = Number.MAX_SAFE_INTEGER || 9007199254740991;
      },
      "./src/remux/aac-helper.ts": function(W, M, y) {
        y.r(M);
        var C = /* @__PURE__ */ function() {
          function D() {
          }
          return D.getSilentFrame = function(b, I) {
            switch (b) {
              case "mp4a.40.2":
                if (I === 1)
                  return new Uint8Array([0, 200, 0, 128, 35, 128]);
                if (I === 2)
                  return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                if (I === 3)
                  return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                if (I === 4)
                  return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                if (I === 5)
                  return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                if (I === 6)
                  return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
                break;
              default:
                if (I === 1)
                  return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                if (I === 2)
                  return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                if (I === 3)
                  return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                break;
            }
          }, D;
        }();
        M.default = C;
      },
      "./src/remux/mp4-generator.ts": function(W, M, y) {
        y.r(M);
        var C = Math.pow(2, 32) - 1, D = /* @__PURE__ */ function() {
          function A() {
          }
          return A.init = function() {
            A.types = {
              avc1: [],
              avcC: [],
              btrt: [],
              dinf: [],
              dref: [],
              esds: [],
              ftyp: [],
              hdlr: [],
              mdat: [],
              mdhd: [],
              mdia: [],
              mfhd: [],
              minf: [],
              moof: [],
              moov: [],
              mp4a: [],
              ".mp3": [],
              mvex: [],
              mvhd: [],
              pasp: [],
              sdtp: [],
              stbl: [],
              stco: [],
              stsc: [],
              stsd: [],
              stsz: [],
              stts: [],
              tfdt: [],
              tfhd: [],
              traf: [],
              trak: [],
              trun: [],
              trex: [],
              tkhd: [],
              vmhd: [],
              smhd: []
            };
            var I;
            for (I in A.types)
              A.types.hasOwnProperty(I) && (A.types[I] = [I.charCodeAt(0), I.charCodeAt(1), I.charCodeAt(2), I.charCodeAt(3)]);
            var O = new Uint8Array([
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              118,
              105,
              100,
              101,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              86,
              105,
              100,
              101,
              111,
              72,
              97,
              110,
              100,
              108,
              101,
              114,
              0
            ]), L = new Uint8Array([
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              115,
              111,
              117,
              110,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              83,
              111,
              117,
              110,
              100,
              72,
              97,
              110,
              100,
              108,
              101,
              114,
              0
            ]);
            A.HDLR_TYPES = {
              video: O,
              audio: L
            };
            var m = new Uint8Array([
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              12,
              117,
              114,
              108,
              32,
              0,
              0,
              0,
              1
            ]), S = new Uint8Array([
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
            ]);
            A.STTS = A.STSC = A.STCO = S, A.STSZ = new Uint8Array([
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
            ]), A.VMHD = new Uint8Array([
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
            ]), A.SMHD = new Uint8Array([
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
            ]), A.STSD = new Uint8Array([
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1
            ]);
            var p = new Uint8Array([105, 115, 111, 109]), T = new Uint8Array([97, 118, 99, 49]), E = new Uint8Array([0, 0, 0, 1]);
            A.FTYP = A.box(A.types.ftyp, p, E, p, T), A.DINF = A.box(A.types.dinf, A.box(A.types.dref, m));
          }, A.box = function(I) {
            for (var O = 8, L = arguments.length, m = new Array(L > 1 ? L - 1 : 0), S = 1; S < L; S++)
              m[S - 1] = arguments[S];
            for (var p = m.length, T = p; p--; )
              O += m[p].byteLength;
            var E = new Uint8Array(O);
            for (E[0] = O >> 24 & 255, E[1] = O >> 16 & 255, E[2] = O >> 8 & 255, E[3] = O & 255, E.set(I, 4), p = 0, O = 8; p < T; p++)
              E.set(m[p], O), O += m[p].byteLength;
            return E;
          }, A.hdlr = function(I) {
            return A.box(A.types.hdlr, A.HDLR_TYPES[I]);
          }, A.mdat = function(I) {
            return A.box(A.types.mdat, I);
          }, A.mdhd = function(I, O) {
            O *= I;
            var L = Math.floor(O / (C + 1)), m = Math.floor(O % (C + 1));
            return A.box(A.types.mdhd, new Uint8Array([
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              2,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              3,
              I >> 24 & 255,
              I >> 16 & 255,
              I >> 8 & 255,
              I & 255,
              L >> 24,
              L >> 16 & 255,
              L >> 8 & 255,
              L & 255,
              m >> 24,
              m >> 16 & 255,
              m >> 8 & 255,
              m & 255,
              85,
              196,
              0,
              0
            ]));
          }, A.mdia = function(I) {
            return A.box(A.types.mdia, A.mdhd(I.timescale, I.duration), A.hdlr(I.type), A.minf(I));
          }, A.mfhd = function(I) {
            return A.box(A.types.mfhd, new Uint8Array([
              0,
              0,
              0,
              0,
              I >> 24,
              I >> 16 & 255,
              I >> 8 & 255,
              I & 255
            ]));
          }, A.minf = function(I) {
            return I.type === "audio" ? A.box(A.types.minf, A.box(A.types.smhd, A.SMHD), A.DINF, A.stbl(I)) : A.box(A.types.minf, A.box(A.types.vmhd, A.VMHD), A.DINF, A.stbl(I));
          }, A.moof = function(I, O, L) {
            return A.box(A.types.moof, A.mfhd(I), A.traf(L, O));
          }, A.moov = function(I) {
            for (var O = I.length, L = []; O--; )
              L[O] = A.trak(I[O]);
            return A.box.apply(null, [A.types.moov, A.mvhd(I[0].timescale, I[0].duration)].concat(L).concat(A.mvex(I)));
          }, A.mvex = function(I) {
            for (var O = I.length, L = []; O--; )
              L[O] = A.trex(I[O]);
            return A.box.apply(null, [A.types.mvex].concat(L));
          }, A.mvhd = function(I, O) {
            O *= I;
            var L = Math.floor(O / (C + 1)), m = Math.floor(O % (C + 1)), S = new Uint8Array([
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              2,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              3,
              I >> 24 & 255,
              I >> 16 & 255,
              I >> 8 & 255,
              I & 255,
              L >> 24,
              L >> 16 & 255,
              L >> 8 & 255,
              L & 255,
              m >> 24,
              m >> 16 & 255,
              m >> 8 & 255,
              m & 255,
              0,
              1,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              64,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              255,
              255,
              255,
              255
            ]);
            return A.box(A.types.mvhd, S);
          }, A.sdtp = function(I) {
            var O = I.samples || [], L = new Uint8Array(4 + O.length), m, S;
            for (m = 0; m < O.length; m++)
              S = O[m].flags, L[m + 4] = S.dependsOn << 4 | S.isDependedOn << 2 | S.hasRedundancy;
            return A.box(A.types.sdtp, L);
          }, A.stbl = function(I) {
            return A.box(A.types.stbl, A.stsd(I), A.box(A.types.stts, A.STTS), A.box(A.types.stsc, A.STSC), A.box(A.types.stsz, A.STSZ), A.box(A.types.stco, A.STCO));
          }, A.avc1 = function(I) {
            var O = [], L = [], m, S, p;
            for (m = 0; m < I.sps.length; m++)
              S = I.sps[m], p = S.byteLength, O.push(p >>> 8 & 255), O.push(p & 255), O = O.concat(Array.prototype.slice.call(S));
            for (m = 0; m < I.pps.length; m++)
              S = I.pps[m], p = S.byteLength, L.push(p >>> 8 & 255), L.push(p & 255), L = L.concat(Array.prototype.slice.call(S));
            var T = A.box(A.types.avcC, new Uint8Array([
              1,
              O[3],
              O[4],
              O[5],
              255,
              224 | I.sps.length
            ].concat(O).concat([
              I.pps.length
            ]).concat(L))), E = I.width, v = I.height, n = I.pixelRatio[0], t = I.pixelRatio[1];
            return A.box(
              A.types.avc1,
              new Uint8Array([
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                E >> 8 & 255,
                E & 255,
                v >> 8 & 255,
                v & 255,
                0,
                72,
                0,
                0,
                0,
                72,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                18,
                100,
                97,
                105,
                108,
                121,
                109,
                111,
                116,
                105,
                111,
                110,
                47,
                104,
                108,
                115,
                46,
                106,
                115,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                24,
                17,
                17
              ]),
              T,
              A.box(A.types.btrt, new Uint8Array([
                0,
                28,
                156,
                128,
                0,
                45,
                198,
                192,
                0,
                45,
                198,
                192
              ])),
              A.box(A.types.pasp, new Uint8Array([
                n >> 24,
                n >> 16 & 255,
                n >> 8 & 255,
                n & 255,
                t >> 24,
                t >> 16 & 255,
                t >> 8 & 255,
                t & 255
              ]))
            );
          }, A.esds = function(I) {
            var O = I.config.length;
            return new Uint8Array([
              0,
              0,
              0,
              0,
              3,
              23 + O,
              0,
              1,
              0,
              4,
              15 + O,
              64,
              21,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              5
            ].concat([O]).concat(I.config).concat([6, 1, 2]));
          }, A.mp4a = function(I) {
            var O = I.samplerate;
            return A.box(A.types.mp4a, new Uint8Array([
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              I.channelCount,
              0,
              16,
              0,
              0,
              0,
              0,
              O >> 8 & 255,
              O & 255,
              0,
              0
            ]), A.box(A.types.esds, A.esds(I)));
          }, A.mp3 = function(I) {
            var O = I.samplerate;
            return A.box(A.types[".mp3"], new Uint8Array([
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              I.channelCount,
              0,
              16,
              0,
              0,
              0,
              0,
              O >> 8 & 255,
              O & 255,
              0,
              0
            ]));
          }, A.stsd = function(I) {
            return I.type === "audio" ? !I.isAAC && I.codec === "mp3" ? A.box(A.types.stsd, A.STSD, A.mp3(I)) : A.box(A.types.stsd, A.STSD, A.mp4a(I)) : A.box(A.types.stsd, A.STSD, A.avc1(I));
          }, A.tkhd = function(I) {
            var O = I.id, L = I.duration * I.timescale, m = I.width, S = I.height, p = Math.floor(L / (C + 1)), T = Math.floor(L % (C + 1));
            return A.box(A.types.tkhd, new Uint8Array([
              1,
              0,
              0,
              7,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              2,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              3,
              O >> 24 & 255,
              O >> 16 & 255,
              O >> 8 & 255,
              O & 255,
              0,
              0,
              0,
              0,
              p >> 24,
              p >> 16 & 255,
              p >> 8 & 255,
              p & 255,
              T >> 24,
              T >> 16 & 255,
              T >> 8 & 255,
              T & 255,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              64,
              0,
              0,
              0,
              m >> 8 & 255,
              m & 255,
              0,
              0,
              S >> 8 & 255,
              S & 255,
              0,
              0
            ]));
          }, A.traf = function(I, O) {
            var L = A.sdtp(I), m = I.id, S = Math.floor(O / (C + 1)), p = Math.floor(O % (C + 1));
            return A.box(
              A.types.traf,
              A.box(A.types.tfhd, new Uint8Array([
                0,
                0,
                0,
                0,
                m >> 24,
                m >> 16 & 255,
                m >> 8 & 255,
                m & 255
              ])),
              A.box(A.types.tfdt, new Uint8Array([
                1,
                0,
                0,
                0,
                S >> 24,
                S >> 16 & 255,
                S >> 8 & 255,
                S & 255,
                p >> 24,
                p >> 16 & 255,
                p >> 8 & 255,
                p & 255
              ])),
              A.trun(I, L.length + 16 + 20 + 8 + 16 + 8 + 8),
              L
            );
          }, A.trak = function(I) {
            return I.duration = I.duration || 4294967295, A.box(A.types.trak, A.tkhd(I), A.mdia(I));
          }, A.trex = function(I) {
            var O = I.id;
            return A.box(A.types.trex, new Uint8Array([
              0,
              0,
              0,
              0,
              O >> 24,
              O >> 16 & 255,
              O >> 8 & 255,
              O & 255,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              1
            ]));
          }, A.trun = function(I, O) {
            var L = I.samples || [], m = L.length, S = 12 + 16 * m, p = new Uint8Array(S), T, E, v, n, t, r;
            for (O += 8 + S, p.set([
              0,
              0,
              15,
              1,
              m >>> 24 & 255,
              m >>> 16 & 255,
              m >>> 8 & 255,
              m & 255,
              O >>> 24 & 255,
              O >>> 16 & 255,
              O >>> 8 & 255,
              O & 255
            ], 0), T = 0; T < m; T++)
              E = L[T], v = E.duration, n = E.size, t = E.flags, r = E.cts, p.set([
                v >>> 24 & 255,
                v >>> 16 & 255,
                v >>> 8 & 255,
                v & 255,
                n >>> 24 & 255,
                n >>> 16 & 255,
                n >>> 8 & 255,
                n & 255,
                t.isLeading << 2 | t.dependsOn,
                t.isDependedOn << 6 | t.hasRedundancy << 4 | t.paddingValue << 1 | t.isNonSync,
                t.degradPrio & 240 << 8,
                t.degradPrio & 15,
                r >>> 24 & 255,
                r >>> 16 & 255,
                r >>> 8 & 255,
                r & 255
              ], 12 + 16 * T);
            return A.box(A.types.trun, p);
          }, A.initSegment = function(I) {
            A.types || A.init();
            var O = A.moov(I), L = new Uint8Array(A.FTYP.byteLength + O.byteLength);
            return L.set(A.FTYP), L.set(O, A.FTYP.byteLength), L;
          }, A;
        }();
        D.types = void 0, D.HDLR_TYPES = void 0, D.STTS = void 0, D.STSC = void 0, D.STCO = void 0, D.STSZ = void 0, D.VMHD = void 0, D.SMHD = void 0, D.STSD = void 0, D.FTYP = void 0, D.DINF = void 0, M.default = D;
      },
      "./src/remux/mp4-remuxer.ts": function(W, M, y) {
        y.r(M), y.d(M, "default", function() {
          return r;
        }), y.d(M, "normalizePts", function() {
          return e;
        });
        var C = y("./src/polyfills/number.ts"), D = y("./src/remux/aac-helper.ts"), A = y("./src/remux/mp4-generator.ts"), b = y("./src/events.ts"), I = y("./src/errors.ts"), O = y("./src/utils/logger.ts"), L = y("./src/types/loader.ts"), m = y("./src/utils/timescale-conversion.ts");
        function S() {
          return S = Object.assign || function(o) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c];
              for (var u in h)
                Object.prototype.hasOwnProperty.call(h, u) && (o[u] = h[u]);
            }
            return o;
          }, S.apply(this, arguments);
        }
        var p = 10 * 1e3, T = 1024, E = 1152, v = null, n = null, t = !1, r = /* @__PURE__ */ function() {
          function o(h, u, a, l) {
            if (this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = !1, this._initPTS = void 0, this._initDTS = void 0, this.nextAvcDts = null, this.nextAudioPts = null, this.isAudioContiguous = !1, this.isVideoContiguous = !1, this.observer = h, this.config = u, this.typeSupported = a, this.ISGenerated = !1, v === null) {
              var d = navigator.userAgent || "", g = d.match(/Chrome\/(\d+)/i);
              v = g ? parseInt(g[1]) : 0;
            }
            if (n === null) {
              var x = navigator.userAgent.match(/Safari\/(\d+)/i);
              n = x ? parseInt(x[1]) : 0;
            }
            t = !!v && v < 75 || !!n && n < 600;
          }
          var c = o.prototype;
          return c.destroy = function() {
          }, c.resetTimeStamp = function(u) {
            O.logger.log("[mp4-remuxer]: initPTS & initDTS reset"), this._initPTS = this._initDTS = u;
          }, c.resetNextTimestamp = function() {
            O.logger.log("[mp4-remuxer]: reset next timestamp"), this.isVideoContiguous = !1, this.isAudioContiguous = !1;
          }, c.resetInitSegment = function() {
            O.logger.log("[mp4-remuxer]: ISGenerated flag reset"), this.ISGenerated = !1;
          }, c.getVideoStartPts = function(u) {
            var a = !1, l = u.reduce(function(d, g) {
              var x = g.pts - d;
              return x < -4294967296 ? (a = !0, e(d, g.pts)) : x > 0 ? d : g.pts;
            }, u[0].pts);
            return a && O.logger.debug("PTS rollover detected"), l;
          }, c.remux = function(u, a, l, d, g, x, R, P) {
            var _, F, B, U, N, k, w = g, K = g, j = u.pid > -1, H = a.pid > -1, G = a.samples.length, X = u.samples.length > 0, V = G > 1, Y = (!j || X) && (!H || V) || this.ISGenerated || R;
            if (Y) {
              this.ISGenerated || (B = this.generateIS(u, a, g));
              var z = this.isVideoContiguous, Q = -1;
              if (V && (Q = f(a.samples), !z && this.config.forceKeyFrameOnDiscontinuity))
                if (k = !0, Q > 0) {
                  O.logger.warn("[mp4-remuxer]: Dropped " + Q + " out of " + G + " video samples due to a missing keyframe");
                  var $ = this.getVideoStartPts(a.samples);
                  a.samples = a.samples.slice(Q), a.dropped += Q, K += (a.samples[0].pts - $) / (a.timescale || 9e4);
                } else
                  Q === -1 && (O.logger.warn("[mp4-remuxer]: No keyframe found out of " + G + " video samples"), k = !1);
              if (this.ISGenerated) {
                if (X && V) {
                  var Z = this.getVideoStartPts(a.samples), tt = e(u.samples[0].pts, Z) - Z, J = tt / a.inputTimeScale;
                  w += Math.max(0, J), K += Math.max(0, -J);
                }
                if (X) {
                  if (u.samplerate || (O.logger.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"), B = this.generateIS(u, a, g)), F = this.remuxAudio(u, w, this.isAudioContiguous, x, H || V || P === L.PlaylistLevelType.AUDIO ? K : void 0), V) {
                    var et = F ? F.endPTS - F.startPTS : 0;
                    a.inputTimeScale || (O.logger.warn("[mp4-remuxer]: regenerate InitSegment as video detected"), B = this.generateIS(u, a, g)), _ = this.remuxVideo(a, K, z, et);
                  }
                } else
                  V && (_ = this.remuxVideo(a, K, z, 0));
                _ && (_.firstKeyFrame = Q, _.independent = Q !== -1);
              }
            }
            return this.ISGenerated && (l.samples.length && (N = this.remuxID3(l, g)), d.samples.length && (U = this.remuxText(d, g))), {
              audio: F,
              video: _,
              initSegment: B,
              independent: k,
              text: U,
              id3: N
            };
          }, c.generateIS = function(u, a, l) {
            var d = u.samples, g = a.samples, x = this.typeSupported, R = {}, P = !Object(C.isFiniteNumber)(this._initPTS), _ = "audio/mp4", F, B, U;
            if (P && (F = B = 1 / 0), u.config && d.length && (u.timescale = u.samplerate, u.isAAC || (x.mpeg ? (_ = "audio/mpeg", u.codec = "") : x.mp3 && (u.codec = "mp3")), R.audio = {
              id: "audio",
              container: _,
              codec: u.codec,
              initSegment: !u.isAAC && x.mpeg ? new Uint8Array(0) : A.default.initSegment([u]),
              metadata: {
                channelCount: u.channelCount
              }
            }, P && (U = u.inputTimeScale, F = B = d[0].pts - Math.round(U * l))), a.sps && a.pps && g.length && (a.timescale = a.inputTimeScale, R.video = {
              id: "main",
              container: "video/mp4",
              codec: a.codec,
              initSegment: A.default.initSegment([a]),
              metadata: {
                width: a.width,
                height: a.height
              }
            }, P)) {
              U = a.inputTimeScale;
              var N = this.getVideoStartPts(g), k = Math.round(U * l);
              B = Math.min(B, e(g[0].dts, N) - k), F = Math.min(F, N - k);
            }
            if (Object.keys(R).length)
              return this.ISGenerated = !0, P && (this._initPTS = F, this._initDTS = B), {
                tracks: R,
                initPTS: F,
                timescale: U
              };
          }, c.remuxVideo = function(u, a, l, d) {
            var g = u.inputTimeScale, x = u.samples, R = [], P = x.length, _ = this._initPTS, F = this.nextAvcDts, B = 8, U, N, k, w = Number.POSITIVE_INFINITY, K = Number.NEGATIVE_INFINITY, j = 0, H = !1;
            if (!l || F === null) {
              var G = a * g, X = x[0].pts - e(x[0].dts, x[0].pts);
              F = G - X;
            }
            for (var V = 0; V < P; V++) {
              var Y = x[V];
              if (Y.pts = e(Y.pts - _, F), Y.dts = e(Y.dts - _, F), Y.dts > Y.pts) {
                var z = 18e3;
                j = Math.max(Math.min(j, Y.pts - Y.dts), -1 * z);
              }
              Y.dts < x[V > 0 ? V - 1 : V].dts && (H = !0);
            }
            H && x.sort(function(It, Mt) {
              var Nt = It.dts - Mt.dts, kt = It.pts - Mt.pts;
              return Nt || kt;
            }), N = x[0].dts, k = x[x.length - 1].dts;
            var Q = Math.round((k - N) / (P - 1));
            if (j < 0) {
              if (j < Q * -2) {
                O.logger.warn("PTS < DTS detected in video samples, offsetting DTS from PTS by " + Object(m.toMsFromMpegTsClock)(-Q, !0) + " ms");
                for (var $ = j, Z = 0; Z < P; Z++)
                  x[Z].dts = $ = Math.max($, x[Z].pts - Q), x[Z].pts = Math.max($, x[Z].pts);
              } else {
                O.logger.warn("PTS < DTS detected in video samples, shifting DTS by " + Object(m.toMsFromMpegTsClock)(j, !0) + " ms to overcome this issue");
                for (var tt = 0; tt < P; tt++)
                  x[tt].dts = x[tt].dts + j;
              }
              N = x[0].dts;
            }
            if (l) {
              var J = N - F, et = J > Q, nt = J < -1;
              if (et || nt) {
                et ? O.logger.warn("AVC: " + Object(m.toMsFromMpegTsClock)(J, !0) + " ms (" + J + "dts) hole between fragments detected, filling it") : O.logger.warn("AVC: " + Object(m.toMsFromMpegTsClock)(-J, !0) + " ms (" + J + "dts) overlapping between fragments detected"), N = F;
                var rt = x[0].pts - J;
                x[0].dts = N, x[0].pts = rt, O.logger.log("Video: First PTS/DTS adjusted: " + Object(m.toMsFromMpegTsClock)(rt, !0) + "/" + Object(m.toMsFromMpegTsClock)(N, !0) + ", delta: " + Object(m.toMsFromMpegTsClock)(J, !0) + " ms");
              }
            }
            t && (N = Math.max(0, N));
            for (var at = 0, it = 0, st = 0; st < P; st++) {
              for (var q = x[st], mt = q.units, pt = mt.length, vt = 0, lt = 0; lt < pt; lt++)
                vt += mt[lt].data.length;
              it += vt, at += pt, q.length = vt, q.dts = Math.max(q.dts, N), q.pts = Math.max(q.pts, q.dts, 0), w = Math.min(q.pts, w), K = Math.max(q.pts, K);
            }
            k = x[P - 1].dts;
            var ut = it + 4 * at + 8, ct;
            try {
              ct = new Uint8Array(ut);
            } catch {
              this.observer.emit(b.Events.ERROR, b.Events.ERROR, {
                type: I.ErrorTypes.MUX_ERROR,
                details: I.ErrorDetails.REMUX_ALLOC_ERROR,
                fatal: !1,
                bytes: ut,
                reason: "fail allocating video mdat " + ut
              });
              return;
            }
            var ft = new DataView(ct.buffer);
            ft.setUint32(0, ut), ct.set(A.default.types.mdat, 4);
            for (var ot = 0; ot < P; ot++) {
              for (var dt = x[ot], Tt = dt.units, yt = 0, Et = 0, xt = Tt.length; Et < xt; Et++) {
                var gt = Tt[Et], ht = gt.data, St = gt.data.byteLength;
                ft.setUint32(B, St), B += 4, ct.set(ht, B), B += St, yt += 4 + St;
              }
              if (ot < P - 1)
                U = x[ot + 1].dts - dt.dts;
              else {
                var At = this.config, Dt = dt.dts - x[ot > 0 ? ot - 1 : ot].dts;
                if (At.stretchShortVideoTrack && this.nextAudioPts !== null) {
                  var bt = Math.floor(At.maxBufferHole * g), Rt = (d ? w + d * g : this.nextAudioPts) - dt.pts;
                  Rt > bt ? (U = Rt - Dt, U < 0 && (U = Dt), O.logger.log("[mp4-remuxer]: It is approximately " + Rt / 90 + " ms to the next segment; using duration " + U / 90 + " ms for the last video frame.")) : U = Dt;
                } else
                  U = Dt;
              }
              var _t = Math.round(dt.pts - dt.dts);
              R.push(new s(dt.key, U, yt, _t));
            }
            if (R.length && v && v < 70) {
              var Ct = R[0].flags;
              Ct.dependsOn = 2, Ct.isNonSync = 0;
            }
            console.assert(U !== void 0, "mp4SampleDuration must be computed"), this.nextAvcDts = F = k + U, this.isVideoContiguous = !0;
            var Ft = A.default.moof(u.sequenceNumber++, N, S({}, u, {
              samples: R
            })), Bt = "video", Ut = {
              data1: Ft,
              data2: ct,
              startPTS: w / g,
              endPTS: (K + U) / g,
              startDTS: N / g,
              endDTS: F / g,
              type: Bt,
              hasAudio: !1,
              hasVideo: !0,
              nb: R.length,
              dropped: u.dropped
            };
            return u.samples = [], u.dropped = 0, console.assert(ct.length, "MDAT length must not be zero"), Ut;
          }, c.remuxAudio = function(u, a, l, d, g) {
            var x = u.inputTimeScale, R = u.samplerate ? u.samplerate : x, P = x / R, _ = u.isAAC ? T : E, F = _ * P, B = this._initPTS, U = !u.isAAC && this.typeSupported.mpeg, N = [], k = u.samples, w = U ? 0 : 8, K = this.nextAudioPts || -1, j = a * x;
            if (this.isAudioContiguous = l = l || k.length && K > 0 && (d && Math.abs(j - K) < 9e3 || Math.abs(e(k[0].pts - B, j) - K) < 20 * F), k.forEach(function(ht) {
              ht.pts = e(ht.pts - B, j);
            }), !l || K < 0) {
              if (k = k.filter(function(ht) {
                return ht.pts >= 0;
              }), !k.length)
                return;
              g === 0 ? K = 0 : d ? K = Math.max(0, j) : K = k[0].pts;
            }
            if (u.isAAC)
              for (var H = g !== void 0, G = this.config.maxAudioFramesDrift, X = 0, V = K; X < k.length; X++) {
                var Y = k[X], z = Y.pts, Q = z - V, $ = Math.abs(1e3 * Q / x);
                if (Q <= -G * F && H)
                  X === 0 && (O.logger.warn("Audio frame @ " + (z / x).toFixed(3) + "s overlaps nextAudioPts by " + Math.round(1e3 * Q / x) + " ms."), this.nextAudioPts = K = V = z);
                else if (Q >= G * F && $ < p && H) {
                  var Z = Math.round(Q / F);
                  V = z - Z * F, V < 0 && (Z--, V += F), X === 0 && (this.nextAudioPts = K = V), O.logger.warn("[mp4-remuxer]: Injecting " + Z + " audio frame @ " + (V / x).toFixed(3) + "s due to " + Math.round(1e3 * Q / x) + " ms gap.");
                  for (var tt = 0; tt < Z; tt++) {
                    var J = Math.max(V, 0), et = D.default.getSilentFrame(u.manifestCodec || u.codec, u.channelCount);
                    et || (O.logger.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."), et = Y.unit.subarray()), k.splice(X, 0, {
                      unit: et,
                      pts: J
                    }), V += F, X++;
                  }
                }
                Y.pts = V, V += F;
              }
            for (var nt = null, rt = null, at, it = 0, st = k.length; st--; )
              it += k[st].unit.byteLength;
            for (var q = 0, mt = k.length; q < mt; q++) {
              var pt = k[q], vt = pt.unit, lt = pt.pts;
              if (rt !== null) {
                var ut = N[q - 1];
                ut.duration = Math.round((lt - rt) / P);
              } else if (l && u.isAAC && (lt = K), nt = lt, it > 0) {
                it += w;
                try {
                  at = new Uint8Array(it);
                } catch {
                  this.observer.emit(b.Events.ERROR, b.Events.ERROR, {
                    type: I.ErrorTypes.MUX_ERROR,
                    details: I.ErrorDetails.REMUX_ALLOC_ERROR,
                    fatal: !1,
                    bytes: it,
                    reason: "fail allocating audio mdat " + it
                  });
                  return;
                }
                if (!U) {
                  var ct = new DataView(at.buffer);
                  ct.setUint32(0, it), at.set(A.default.types.mdat, 4);
                }
              } else
                return;
              at.set(vt, w);
              var ft = vt.byteLength;
              w += ft, N.push(new s(!0, _, ft, 0)), rt = lt;
            }
            var ot = N.length;
            if (!!ot) {
              var dt = N[N.length - 1];
              this.nextAudioPts = K = rt + P * dt.duration;
              var Tt = U ? new Uint8Array(0) : A.default.moof(u.sequenceNumber++, nt / P, S({}, u, {
                samples: N
              }));
              u.samples = [];
              var yt = nt / x, Et = K / x, xt = "audio", gt = {
                data1: Tt,
                data2: at,
                startPTS: yt,
                endPTS: Et,
                startDTS: yt,
                endDTS: Et,
                type: xt,
                hasAudio: !0,
                hasVideo: !1,
                nb: ot
              };
              return this.isAudioContiguous = !0, console.assert(at.length, "MDAT length must not be zero"), gt;
            }
          }, c.remuxEmptyAudio = function(u, a, l, d) {
            var g = u.inputTimeScale, x = u.samplerate ? u.samplerate : g, R = g / x, P = this.nextAudioPts, _ = (P !== null ? P : d.startDTS * g) + this._initDTS, F = d.endDTS * g + this._initDTS, B = R * T, U = Math.ceil((F - _) / B), N = D.default.getSilentFrame(u.manifestCodec || u.codec, u.channelCount);
            if (O.logger.warn("[mp4-remuxer]: remux empty Audio"), !N) {
              O.logger.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec");
              return;
            }
            for (var k = [], w = 0; w < U; w++) {
              var K = _ + w * B;
              k.push({
                unit: N,
                pts: K,
                dts: K
              });
            }
            return u.samples = k, this.remuxAudio(u, a, l, !1);
          }, c.remuxID3 = function(u, a) {
            var l = u.samples.length;
            if (!!l) {
              for (var d = u.inputTimeScale, g = this._initPTS, x = this._initDTS, R = 0; R < l; R++) {
                var P = u.samples[R];
                P.pts = e(P.pts - g, a * d) / d, P.dts = e(P.dts - x, a * d) / d;
              }
              var _ = u.samples;
              return u.samples = [], {
                samples: _
              };
            }
          }, c.remuxText = function(u, a) {
            var l = u.samples.length;
            if (!!l) {
              for (var d = u.inputTimeScale, g = this._initPTS, x = 0; x < l; x++) {
                var R = u.samples[x];
                R.pts = e(R.pts - g, a * d) / d;
              }
              u.samples.sort(function(_, F) {
                return _.pts - F.pts;
              });
              var P = u.samples;
              return u.samples = [], {
                samples: P
              };
            }
          }, o;
        }();
        function e(o, c) {
          var h;
          if (c === null)
            return o;
          for (c < o ? h = -8589934592 : h = 8589934592; Math.abs(o - c) > 4294967296; )
            o += h;
          return o;
        }
        function f(o) {
          for (var c = 0; c < o.length; c++)
            if (o[c].key)
              return c;
          return -1;
        }
        var s = function(c, h, u, a) {
          this.size = void 0, this.duration = void 0, this.cts = void 0, this.flags = void 0, this.duration = h, this.size = u, this.cts = a, this.flags = new i(c);
        }, i = function(c) {
          this.isLeading = 0, this.isDependedOn = 0, this.hasRedundancy = 0, this.degradPrio = 0, this.dependsOn = 1, this.isNonSync = 1, this.dependsOn = c ? 2 : 1, this.isNonSync = c ? 0 : 1;
        };
      },
      "./src/remux/passthrough-remuxer.ts": function(W, M, y) {
        y.r(M);
        var C = y("./src/polyfills/number.ts"), D = y("./src/utils/mp4-tools.ts"), A = y("./src/loader/fragment.ts"), b = y("./src/utils/logger.ts"), I = /* @__PURE__ */ function() {
          function m() {
            this.emitInitSegment = !1, this.audioCodec = void 0, this.videoCodec = void 0, this.initData = void 0, this.initPTS = void 0, this.initTracks = void 0, this.lastEndDTS = null;
          }
          var S = m.prototype;
          return S.destroy = function() {
          }, S.resetTimeStamp = function(T) {
            this.initPTS = T, this.lastEndDTS = null;
          }, S.resetNextTimestamp = function() {
            this.lastEndDTS = null;
          }, S.resetInitSegment = function(T, E, v) {
            this.audioCodec = E, this.videoCodec = v, this.generateInitSegment(T), this.emitInitSegment = !0;
          }, S.generateInitSegment = function(T) {
            var E = this.audioCodec, v = this.videoCodec;
            if (!T || !T.byteLength) {
              this.initTracks = void 0, this.initData = void 0;
              return;
            }
            var n = this.initData = Object(D.parseInitSegment)(T);
            E || (E = L(n.audio, A.ElementaryStreamTypes.AUDIO)), v || (v = L(n.video, A.ElementaryStreamTypes.VIDEO));
            var t = {};
            n.audio && n.video ? t.audiovideo = {
              container: "video/mp4",
              codec: E + "," + v,
              initSegment: T,
              id: "main"
            } : n.audio ? t.audio = {
              container: "audio/mp4",
              codec: E,
              initSegment: T,
              id: "audio"
            } : n.video ? t.video = {
              container: "video/mp4",
              codec: v,
              initSegment: T,
              id: "main"
            } : b.logger.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."), this.initTracks = t;
          }, S.remux = function(T, E, v, n, t) {
            var r = this.initPTS, e = this.lastEndDTS, f = {
              audio: void 0,
              video: void 0,
              text: n,
              id3: v,
              initSegment: void 0
            };
            Object(C.isFiniteNumber)(e) || (e = this.lastEndDTS = t || 0);
            var s = E.samples;
            if (!s || !s.length)
              return f;
            var i = {
              initPTS: void 0,
              timescale: 1
            }, o = this.initData;
            if ((!o || !o.length) && (this.generateInitSegment(s), o = this.initData), !o || !o.length)
              return b.logger.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."), f;
            this.emitInitSegment && (i.tracks = this.initTracks, this.emitInitSegment = !1), Object(C.isFiniteNumber)(r) || (this.initPTS = i.initPTS = r = O(o, s, e));
            var c = Object(D.getDuration)(s, o), h = e, u = c + h;
            Object(D.offsetStartDTS)(o, s, r), c > 0 ? this.lastEndDTS = u : (b.logger.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
            var a = !!o.audio, l = !!o.video, d = "";
            a && (d += "audio"), l && (d += "video");
            var g = {
              data1: s,
              startPTS: h,
              startDTS: h,
              endPTS: u,
              endDTS: u,
              type: d,
              hasAudio: a,
              hasVideo: l,
              nb: 1,
              dropped: 0
            };
            return f.audio = g.type === "audio" ? g : void 0, f.video = g.type !== "audio" ? g : void 0, f.text = n, f.id3 = v, f.initSegment = i, f;
          }, m;
        }(), O = function(S, p, T) {
          return Object(D.getStartDTS)(S, p) - T;
        };
        function L(m, S) {
          var p = m == null ? void 0 : m.codec;
          return p && p.length > 4 ? p : p === "hvc1" ? "hvc1.1.c.L120.90" : p === "av01" ? "av01.0.04M.08" : p === "avc1" || S === A.ElementaryStreamTypes.VIDEO ? "avc1.42e01e" : "mp4a.40.5";
        }
        M.default = I;
      },
      "./src/task-loop.ts": function(W, M, y) {
        y.r(M), y.d(M, "default", function() {
          return C;
        });
        var C = /* @__PURE__ */ function() {
          function D() {
            this._boundTick = void 0, this._tickTimer = null, this._tickInterval = null, this._tickCallCount = 0, this._boundTick = this.tick.bind(this);
          }
          var A = D.prototype;
          return A.destroy = function() {
            this.onHandlerDestroying(), this.onHandlerDestroyed();
          }, A.onHandlerDestroying = function() {
            this.clearNextTick(), this.clearInterval();
          }, A.onHandlerDestroyed = function() {
          }, A.hasInterval = function() {
            return !!this._tickInterval;
          }, A.hasNextTick = function() {
            return !!this._tickTimer;
          }, A.setInterval = function(I) {
            return this._tickInterval ? !1 : (this._tickInterval = self.setInterval(this._boundTick, I), !0);
          }, A.clearInterval = function() {
            return this._tickInterval ? (self.clearInterval(this._tickInterval), this._tickInterval = null, !0) : !1;
          }, A.clearNextTick = function() {
            return this._tickTimer ? (self.clearTimeout(this._tickTimer), this._tickTimer = null, !0) : !1;
          }, A.tick = function() {
            this._tickCallCount++, this._tickCallCount === 1 && (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), this._tickCallCount = 0);
          }, A.tickImmediate = function() {
            this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0);
          }, A.doTick = function() {
          }, D;
        }();
      },
      "./src/types/cmcd.ts": function(W, M, y) {
        y.r(M), y.d(M, "CMCDVersion", function() {
          return C;
        }), y.d(M, "CMCDObjectType", function() {
          return D;
        }), y.d(M, "CMCDStreamingFormat", function() {
          return A;
        }), y.d(M, "CMCDStreamType", function() {
          return b;
        });
        var C = 1, D;
        (function(I) {
          I.MANIFEST = "m", I.AUDIO = "a", I.VIDEO = "v", I.MUXED = "av", I.INIT = "i", I.CAPTION = "c", I.TIMED_TEXT = "tt", I.KEY = "k", I.OTHER = "o";
        })(D || (D = {}));
        var A;
        (function(I) {
          I.DASH = "d", I.HLS = "h", I.SMOOTH = "s", I.OTHER = "o";
        })(A || (A = {}));
        var b;
        (function(I) {
          I.VOD = "v", I.LIVE = "l";
        })(b || (b = {}));
      },
      "./src/types/level.ts": function(W, M, y) {
        y.r(M), y.d(M, "HlsSkip", function() {
          return A;
        }), y.d(M, "getSkipValue", function() {
          return b;
        }), y.d(M, "HlsUrlParameters", function() {
          return I;
        }), y.d(M, "Level", function() {
          return O;
        });
        function C(L, m) {
          for (var S = 0; S < m.length; S++) {
            var p = m[S];
            p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(L, p.key, p);
          }
        }
        function D(L, m, S) {
          return m && C(L.prototype, m), S && C(L, S), L;
        }
        var A;
        (function(L) {
          L.No = "", L.Yes = "YES", L.v2 = "v2";
        })(A || (A = {}));
        function b(L, m) {
          var S = L.canSkipUntil, p = L.canSkipDateRanges, T = L.endSN, E = m !== void 0 ? m - T : 0;
          return S && E < S ? p ? A.v2 : A.Yes : A.No;
        }
        var I = /* @__PURE__ */ function() {
          function L(S, p, T) {
            this.msn = void 0, this.part = void 0, this.skip = void 0, this.msn = S, this.part = p, this.skip = T;
          }
          var m = L.prototype;
          return m.addDirectives = function(p) {
            var T = new self.URL(p);
            return this.msn !== void 0 && T.searchParams.set("_HLS_msn", this.msn.toString()), this.part !== void 0 && T.searchParams.set("_HLS_part", this.part.toString()), this.skip && T.searchParams.set("_HLS_skip", this.skip), T.toString();
          }, L;
        }(), O = /* @__PURE__ */ function() {
          function L(m) {
            this.attrs = void 0, this.audioCodec = void 0, this.bitrate = void 0, this.codecSet = void 0, this.height = void 0, this.id = void 0, this.name = void 0, this.videoCodec = void 0, this.width = void 0, this.unknownCodecs = void 0, this.audioGroupIds = void 0, this.details = void 0, this.fragmentError = 0, this.loadError = 0, this.loaded = void 0, this.realBitrate = 0, this.textGroupIds = void 0, this.url = void 0, this._urlId = 0, this.url = [m.url], this.attrs = m.attrs, this.bitrate = m.bitrate, m.details && (this.details = m.details), this.id = m.id || 0, this.name = m.name, this.width = m.width || 0, this.height = m.height || 0, this.audioCodec = m.audioCodec, this.videoCodec = m.videoCodec, this.unknownCodecs = m.unknownCodecs, this.codecSet = [m.videoCodec, m.audioCodec].filter(function(S) {
              return S;
            }).join(",").replace(/\.[^.,]+/g, "");
          }
          return D(L, [{
            key: "maxBitrate",
            get: function() {
              return Math.max(this.realBitrate, this.bitrate);
            }
          }, {
            key: "uri",
            get: function() {
              return this.url[this._urlId] || "";
            }
          }, {
            key: "urlId",
            get: function() {
              return this._urlId;
            },
            set: function(S) {
              var p = S % this.url.length;
              this._urlId !== p && (this.details = void 0, this._urlId = p);
            }
          }]), L;
        }();
      },
      "./src/types/loader.ts": function(W, M, y) {
        y.r(M), y.d(M, "PlaylistContextType", function() {
          return C;
        }), y.d(M, "PlaylistLevelType", function() {
          return D;
        });
        var C;
        (function(A) {
          A.MANIFEST = "manifest", A.LEVEL = "level", A.AUDIO_TRACK = "audioTrack", A.SUBTITLE_TRACK = "subtitleTrack";
        })(C || (C = {}));
        var D;
        (function(A) {
          A.MAIN = "main", A.AUDIO = "audio", A.SUBTITLE = "subtitle";
        })(D || (D = {}));
      },
      "./src/types/transmuxer.ts": function(W, M, y) {
        y.r(M), y.d(M, "ChunkMetadata", function() {
          return C;
        });
        var C = function(b, I, O, L, m, S) {
          L === void 0 && (L = 0), m === void 0 && (m = -1), S === void 0 && (S = !1), this.level = void 0, this.sn = void 0, this.part = void 0, this.id = void 0, this.size = void 0, this.partial = void 0, this.transmuxing = D(), this.buffering = {
            audio: D(),
            video: D(),
            audiovideo: D()
          }, this.level = b, this.sn = I, this.id = O, this.size = L, this.part = m, this.partial = S;
        };
        function D() {
          return {
            start: 0,
            executeStart: 0,
            executeEnd: 0,
            end: 0
          };
        }
      },
      "./src/utils/attr-list.ts": function(W, M, y) {
        y.r(M), y.d(M, "AttrList", function() {
          return A;
        });
        var C = /^(\d+)x(\d+)$/, D = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g, A = /* @__PURE__ */ function() {
          function b(O) {
            typeof O == "string" && (O = b.parseAttrList(O));
            for (var L in O)
              O.hasOwnProperty(L) && (this[L] = O[L]);
          }
          var I = b.prototype;
          return I.decimalInteger = function(L) {
            var m = parseInt(this[L], 10);
            return m > Number.MAX_SAFE_INTEGER ? 1 / 0 : m;
          }, I.hexadecimalInteger = function(L) {
            if (this[L]) {
              var m = (this[L] || "0x").slice(2);
              m = (m.length & 1 ? "0" : "") + m;
              for (var S = new Uint8Array(m.length / 2), p = 0; p < m.length / 2; p++)
                S[p] = parseInt(m.slice(p * 2, p * 2 + 2), 16);
              return S;
            } else
              return null;
          }, I.hexadecimalIntegerAsNumber = function(L) {
            var m = parseInt(this[L], 16);
            return m > Number.MAX_SAFE_INTEGER ? 1 / 0 : m;
          }, I.decimalFloatingPoint = function(L) {
            return parseFloat(this[L]);
          }, I.optionalFloat = function(L, m) {
            var S = this[L];
            return S ? parseFloat(S) : m;
          }, I.enumeratedString = function(L) {
            return this[L];
          }, I.bool = function(L) {
            return this[L] === "YES";
          }, I.decimalResolution = function(L) {
            var m = C.exec(this[L]);
            if (m !== null)
              return {
                width: parseInt(m[1], 10),
                height: parseInt(m[2], 10)
              };
          }, b.parseAttrList = function(L) {
            var m, S = {}, p = '"';
            for (D.lastIndex = 0; (m = D.exec(L)) !== null; ) {
              var T = m[2];
              T.indexOf(p) === 0 && T.lastIndexOf(p) === T.length - 1 && (T = T.slice(1, -1)), S[m[1]] = T;
            }
            return S;
          }, b;
        }();
      },
      "./src/utils/binary-search.ts": function(W, M, y) {
        y.r(M);
        var C = {
          search: function(A, b) {
            for (var I = 0, O = A.length - 1, L = null, m = null; I <= O; ) {
              L = (I + O) / 2 | 0, m = A[L];
              var S = b(m);
              if (S > 0)
                I = L + 1;
              else if (S < 0)
                O = L - 1;
              else
                return m;
            }
            return null;
          }
        };
        M.default = C;
      },
      "./src/utils/buffer-helper.ts": function(W, M, y) {
        y.r(M), y.d(M, "BufferHelper", function() {
          return A;
        });
        var C = y("./src/utils/logger.ts"), D = {
          length: 0,
          start: function() {
            return 0;
          },
          end: function() {
            return 0;
          }
        }, A = /* @__PURE__ */ function() {
          function b() {
          }
          return b.isBuffered = function(O, L) {
            try {
              if (O) {
                for (var m = b.getBuffered(O), S = 0; S < m.length; S++)
                  if (L >= m.start(S) && L <= m.end(S))
                    return !0;
              }
            } catch {
            }
            return !1;
          }, b.bufferInfo = function(O, L, m) {
            try {
              if (O) {
                var S = b.getBuffered(O), p = [], T;
                for (T = 0; T < S.length; T++)
                  p.push({
                    start: S.start(T),
                    end: S.end(T)
                  });
                return this.bufferedInfo(p, L, m);
              }
            } catch {
            }
            return {
              len: 0,
              start: L,
              end: L,
              nextStart: void 0
            };
          }, b.bufferedInfo = function(O, L, m) {
            L = Math.max(0, L), O.sort(function(i, o) {
              var c = i.start - o.start;
              return c || o.end - i.end;
            });
            var S = [];
            if (m)
              for (var p = 0; p < O.length; p++) {
                var T = S.length;
                if (T) {
                  var E = S[T - 1].end;
                  O[p].start - E < m ? O[p].end > E && (S[T - 1].end = O[p].end) : S.push(O[p]);
                } else
                  S.push(O[p]);
              }
            else
              S = O;
            for (var v = 0, n, t = L, r = L, e = 0; e < S.length; e++) {
              var f = S[e].start, s = S[e].end;
              if (L + m >= f && L < s)
                t = f, r = s, v = r - L;
              else if (L + m < f) {
                n = f;
                break;
              }
            }
            return {
              len: v,
              start: t || 0,
              end: r || 0,
              nextStart: n
            };
          }, b.getBuffered = function(O) {
            try {
              return O.buffered;
            } catch (L) {
              return C.logger.log("failed to get media.buffered", L), D;
            }
          }, b;
        }();
      },
      "./src/utils/cea-608-parser.ts": function(W, M, y) {
        y.r(M), y.d(M, "Row", function() {
          return r;
        }), y.d(M, "CaptionScreen", function() {
          return e;
        });
        var C = y("./src/utils/logger.ts"), D = {
          42: 225,
          92: 233,
          94: 237,
          95: 243,
          96: 250,
          123: 231,
          124: 247,
          125: 209,
          126: 241,
          127: 9608,
          128: 174,
          129: 176,
          130: 189,
          131: 191,
          132: 8482,
          133: 162,
          134: 163,
          135: 9834,
          136: 224,
          137: 32,
          138: 232,
          139: 226,
          140: 234,
          141: 238,
          142: 244,
          143: 251,
          144: 193,
          145: 201,
          146: 211,
          147: 218,
          148: 220,
          149: 252,
          150: 8216,
          151: 161,
          152: 42,
          153: 8217,
          154: 9473,
          155: 169,
          156: 8480,
          157: 8226,
          158: 8220,
          159: 8221,
          160: 192,
          161: 194,
          162: 199,
          163: 200,
          164: 202,
          165: 203,
          166: 235,
          167: 206,
          168: 207,
          169: 239,
          170: 212,
          171: 217,
          172: 249,
          173: 219,
          174: 171,
          175: 187,
          176: 195,
          177: 227,
          178: 205,
          179: 204,
          180: 236,
          181: 210,
          182: 242,
          183: 213,
          184: 245,
          185: 123,
          186: 125,
          187: 92,
          188: 94,
          189: 95,
          190: 124,
          191: 8764,
          192: 196,
          193: 228,
          194: 214,
          195: 246,
          196: 223,
          197: 165,
          198: 164,
          199: 9475,
          200: 197,
          201: 229,
          202: 216,
          203: 248,
          204: 9487,
          205: 9491,
          206: 9495,
          207: 9499
        }, A = function(u) {
          var a = u;
          return D.hasOwnProperty(u) && (a = D[u]), String.fromCharCode(a);
        }, b = 15, I = 100, O = {
          17: 1,
          18: 3,
          21: 5,
          22: 7,
          23: 9,
          16: 11,
          19: 12,
          20: 14
        }, L = {
          17: 2,
          18: 4,
          21: 6,
          22: 8,
          23: 10,
          19: 13,
          20: 15
        }, m = {
          25: 1,
          26: 3,
          29: 5,
          30: 7,
          31: 9,
          24: 11,
          27: 12,
          28: 14
        }, S = {
          25: 2,
          26: 4,
          29: 6,
          30: 8,
          31: 10,
          27: 13,
          28: 15
        }, p = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"], T;
        (function(h) {
          h[h.ERROR = 0] = "ERROR", h[h.TEXT = 1] = "TEXT", h[h.WARNING = 2] = "WARNING", h[h.INFO = 2] = "INFO", h[h.DEBUG = 3] = "DEBUG", h[h.DATA = 3] = "DATA";
        })(T || (T = {}));
        var E = /* @__PURE__ */ function() {
          function h() {
            this.time = null, this.verboseLevel = T.ERROR;
          }
          var u = h.prototype;
          return u.log = function(l, d) {
            this.verboseLevel >= l && C.logger.log(this.time + " [" + l + "] " + d);
          }, h;
        }(), v = function(u) {
          for (var a = [], l = 0; l < u.length; l++)
            a.push(u[l].toString(16));
          return a;
        }, n = /* @__PURE__ */ function() {
          function h(a, l, d, g, x) {
            this.foreground = void 0, this.underline = void 0, this.italics = void 0, this.background = void 0, this.flash = void 0, this.foreground = a || "white", this.underline = l || !1, this.italics = d || !1, this.background = g || "black", this.flash = x || !1;
          }
          var u = h.prototype;
          return u.reset = function() {
            this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1;
          }, u.setStyles = function(l) {
            for (var d = ["foreground", "underline", "italics", "background", "flash"], g = 0; g < d.length; g++) {
              var x = d[g];
              l.hasOwnProperty(x) && (this[x] = l[x]);
            }
          }, u.isDefault = function() {
            return this.foreground === "white" && !this.underline && !this.italics && this.background === "black" && !this.flash;
          }, u.equals = function(l) {
            return this.foreground === l.foreground && this.underline === l.underline && this.italics === l.italics && this.background === l.background && this.flash === l.flash;
          }, u.copy = function(l) {
            this.foreground = l.foreground, this.underline = l.underline, this.italics = l.italics, this.background = l.background, this.flash = l.flash;
          }, u.toString = function() {
            return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash;
          }, h;
        }(), t = /* @__PURE__ */ function() {
          function h(a, l, d, g, x, R) {
            this.uchar = void 0, this.penState = void 0, this.uchar = a || " ", this.penState = new n(l, d, g, x, R);
          }
          var u = h.prototype;
          return u.reset = function() {
            this.uchar = " ", this.penState.reset();
          }, u.setChar = function(l, d) {
            this.uchar = l, this.penState.copy(d);
          }, u.setPenState = function(l) {
            this.penState.copy(l);
          }, u.equals = function(l) {
            return this.uchar === l.uchar && this.penState.equals(l.penState);
          }, u.copy = function(l) {
            this.uchar = l.uchar, this.penState.copy(l.penState);
          }, u.isEmpty = function() {
            return this.uchar === " " && this.penState.isDefault();
          }, h;
        }(), r = /* @__PURE__ */ function() {
          function h(a) {
            this.chars = void 0, this.pos = void 0, this.currPenState = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chars = [];
            for (var l = 0; l < I; l++)
              this.chars.push(new t());
            this.logger = a, this.pos = 0, this.currPenState = new n();
          }
          var u = h.prototype;
          return u.equals = function(l) {
            for (var d = !0, g = 0; g < I; g++)
              if (!this.chars[g].equals(l.chars[g])) {
                d = !1;
                break;
              }
            return d;
          }, u.copy = function(l) {
            for (var d = 0; d < I; d++)
              this.chars[d].copy(l.chars[d]);
          }, u.isEmpty = function() {
            for (var l = !0, d = 0; d < I; d++)
              if (!this.chars[d].isEmpty()) {
                l = !1;
                break;
              }
            return l;
          }, u.setCursor = function(l) {
            this.pos !== l && (this.pos = l), this.pos < 0 ? (this.logger.log(T.DEBUG, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > I && (this.logger.log(T.DEBUG, "Too large cursor position " + this.pos), this.pos = I);
          }, u.moveCursor = function(l) {
            var d = this.pos + l;
            if (l > 1)
              for (var g = this.pos + 1; g < d + 1; g++)
                this.chars[g].setPenState(this.currPenState);
            this.setCursor(d);
          }, u.backSpace = function() {
            this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState);
          }, u.insertChar = function(l) {
            l >= 144 && this.backSpace();
            var d = A(l);
            if (this.pos >= I) {
              this.logger.log(T.ERROR, "Cannot insert " + l.toString(16) + " (" + d + ") at position " + this.pos + ". Skipping it!");
              return;
            }
            this.chars[this.pos].setChar(d, this.currPenState), this.moveCursor(1);
          }, u.clearFromPos = function(l) {
            var d;
            for (d = l; d < I; d++)
              this.chars[d].reset();
          }, u.clear = function() {
            this.clearFromPos(0), this.pos = 0, this.currPenState.reset();
          }, u.clearToEndOfRow = function() {
            this.clearFromPos(this.pos);
          }, u.getTextString = function() {
            for (var l = [], d = !0, g = 0; g < I; g++) {
              var x = this.chars[g].uchar;
              x !== " " && (d = !1), l.push(x);
            }
            return d ? "" : l.join("");
          }, u.setPenStyles = function(l) {
            this.currPenState.setStyles(l);
            var d = this.chars[this.pos];
            d.setPenState(this.currPenState);
          }, h;
        }(), e = /* @__PURE__ */ function() {
          function h(a) {
            this.rows = void 0, this.currRow = void 0, this.nrRollUpRows = void 0, this.lastOutputScreen = void 0, this.logger = void 0, this.rows = [];
            for (var l = 0; l < b; l++)
              this.rows.push(new r(a));
            this.logger = a, this.currRow = b - 1, this.nrRollUpRows = null, this.lastOutputScreen = null, this.reset();
          }
          var u = h.prototype;
          return u.reset = function() {
            for (var l = 0; l < b; l++)
              this.rows[l].clear();
            this.currRow = b - 1;
          }, u.equals = function(l) {
            for (var d = !0, g = 0; g < b; g++)
              if (!this.rows[g].equals(l.rows[g])) {
                d = !1;
                break;
              }
            return d;
          }, u.copy = function(l) {
            for (var d = 0; d < b; d++)
              this.rows[d].copy(l.rows[d]);
          }, u.isEmpty = function() {
            for (var l = !0, d = 0; d < b; d++)
              if (!this.rows[d].isEmpty()) {
                l = !1;
                break;
              }
            return l;
          }, u.backSpace = function() {
            var l = this.rows[this.currRow];
            l.backSpace();
          }, u.clearToEndOfRow = function() {
            var l = this.rows[this.currRow];
            l.clearToEndOfRow();
          }, u.insertChar = function(l) {
            var d = this.rows[this.currRow];
            d.insertChar(l);
          }, u.setPen = function(l) {
            var d = this.rows[this.currRow];
            d.setPenStyles(l);
          }, u.moveCursor = function(l) {
            var d = this.rows[this.currRow];
            d.moveCursor(l);
          }, u.setCursor = function(l) {
            this.logger.log(T.INFO, "setCursor: " + l);
            var d = this.rows[this.currRow];
            d.setCursor(l);
          }, u.setPAC = function(l) {
            this.logger.log(T.INFO, "pacData = " + JSON.stringify(l));
            var d = l.row - 1;
            if (this.nrRollUpRows && d < this.nrRollUpRows - 1 && (d = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== d) {
              for (var g = 0; g < b; g++)
                this.rows[g].clear();
              var x = this.currRow + 1 - this.nrRollUpRows, R = this.lastOutputScreen;
              if (R) {
                var P = R.rows[x].cueStartTime, _ = this.logger.time;
                if (P && _ !== null && P < _)
                  for (var F = 0; F < this.nrRollUpRows; F++)
                    this.rows[d - this.nrRollUpRows + F + 1].copy(R.rows[x + F]);
              }
            }
            this.currRow = d;
            var B = this.rows[this.currRow];
            if (l.indent !== null) {
              var U = l.indent, N = Math.max(U - 1, 0);
              B.setCursor(l.indent), l.color = B.chars[N].penState.foreground;
            }
            var k = {
              foreground: l.color,
              underline: l.underline,
              italics: l.italics,
              background: "black",
              flash: !1
            };
            this.setPen(k);
          }, u.setBkgData = function(l) {
            this.logger.log(T.INFO, "bkgData = " + JSON.stringify(l)), this.backSpace(), this.setPen(l), this.insertChar(32);
          }, u.setRollUpRows = function(l) {
            this.nrRollUpRows = l;
          }, u.rollUp = function() {
            if (this.nrRollUpRows === null) {
              this.logger.log(T.DEBUG, "roll_up but nrRollUpRows not set yet");
              return;
            }
            this.logger.log(T.TEXT, this.getDisplayText());
            var l = this.currRow + 1 - this.nrRollUpRows, d = this.rows.splice(l, 1)[0];
            d.clear(), this.rows.splice(this.currRow, 0, d), this.logger.log(T.INFO, "Rolling up");
          }, u.getDisplayText = function(l) {
            l = l || !1;
            for (var d = [], g = "", x = -1, R = 0; R < b; R++) {
              var P = this.rows[R].getTextString();
              P && (x = R + 1, l ? d.push("Row " + x + ": '" + P + "'") : d.push(P.trim()));
            }
            return d.length > 0 && (l ? g = "[" + d.join(" | ") + "]" : g = d.join(`
`)), g;
          }, u.getTextAndFormat = function() {
            return this.rows;
          }, h;
        }(), f = /* @__PURE__ */ function() {
          function h(a, l, d) {
            this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chNr = a, this.outputFilter = l, this.mode = null, this.verbose = 0, this.displayedMemory = new e(d), this.nonDisplayedMemory = new e(d), this.lastOutputScreen = new e(d), this.currRollUpRow = this.displayedMemory.rows[b - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.logger = d;
          }
          var u = h.prototype;
          return u.reset = function() {
            this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.outputFilter.reset(), this.currRollUpRow = this.displayedMemory.rows[b - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null;
          }, u.getHandler = function() {
            return this.outputFilter;
          }, u.setHandler = function(l) {
            this.outputFilter = l;
          }, u.setPAC = function(l) {
            this.writeScreen.setPAC(l);
          }, u.setBkgData = function(l) {
            this.writeScreen.setBkgData(l);
          }, u.setMode = function(l) {
            l !== this.mode && (this.mode = l, this.logger.log(T.INFO, "MODE=" + l), this.mode === "MODE_POP-ON" ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), this.mode !== "MODE_ROLL-UP" && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = l);
          }, u.insertChars = function(l) {
            for (var d = 0; d < l.length; d++)
              this.writeScreen.insertChar(l[d]);
            var g = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
            this.logger.log(T.INFO, g + ": " + this.writeScreen.getDisplayText(!0)), (this.mode === "MODE_PAINT-ON" || this.mode === "MODE_ROLL-UP") && (this.logger.log(T.TEXT, "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate());
          }, u.ccRCL = function() {
            this.logger.log(T.INFO, "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON");
          }, u.ccBS = function() {
            this.logger.log(T.INFO, "BS - BackSpace"), this.mode !== "MODE_TEXT" && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate());
          }, u.ccAOF = function() {
          }, u.ccAON = function() {
          }, u.ccDER = function() {
            this.logger.log(T.INFO, "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate();
          }, u.ccRU = function(l) {
            this.logger.log(T.INFO, "RU(" + l + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(l);
          }, u.ccFON = function() {
            this.logger.log(T.INFO, "FON - Flash On"), this.writeScreen.setPen({
              flash: !0
            });
          }, u.ccRDC = function() {
            this.logger.log(T.INFO, "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON");
          }, u.ccTR = function() {
            this.logger.log(T.INFO, "TR"), this.setMode("MODE_TEXT");
          }, u.ccRTD = function() {
            this.logger.log(T.INFO, "RTD"), this.setMode("MODE_TEXT");
          }, u.ccEDM = function() {
            this.logger.log(T.INFO, "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0);
          }, u.ccCR = function() {
            this.logger.log(T.INFO, "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0);
          }, u.ccENM = function() {
            this.logger.log(T.INFO, "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset();
          }, u.ccEOC = function() {
            if (this.logger.log(T.INFO, "EOC - End Of Caption"), this.mode === "MODE_POP-ON") {
              var l = this.displayedMemory;
              this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = l, this.writeScreen = this.nonDisplayedMemory, this.logger.log(T.TEXT, "DISP: " + this.displayedMemory.getDisplayText());
            }
            this.outputDataUpdate(!0);
          }, u.ccTO = function(l) {
            this.logger.log(T.INFO, "TO(" + l + ") - Tab Offset"), this.writeScreen.moveCursor(l);
          }, u.ccMIDROW = function(l) {
            var d = {
              flash: !1
            };
            if (d.underline = l % 2 === 1, d.italics = l >= 46, d.italics)
              d.foreground = "white";
            else {
              var g = Math.floor(l / 2) - 16, x = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"];
              d.foreground = x[g];
            }
            this.logger.log(T.INFO, "MIDROW: " + JSON.stringify(d)), this.writeScreen.setPen(d);
          }, u.outputDataUpdate = function(l) {
            l === void 0 && (l = !1);
            var d = this.logger.time;
            d !== null && this.outputFilter && (this.cueStartTime === null && !this.displayedMemory.isEmpty() ? this.cueStartTime = d : this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, d, this.lastOutputScreen), l && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : d), this.lastOutputScreen.copy(this.displayedMemory));
          }, u.cueSplitAtTime = function(l) {
            this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, l, this.displayedMemory), this.cueStartTime = l));
          }, h;
        }(), s = /* @__PURE__ */ function() {
          function h(a, l, d) {
            this.channels = void 0, this.currentChannel = 0, this.cmdHistory = void 0, this.logger = void 0;
            var g = new E();
            this.channels = [null, new f(a, l, g), new f(a + 1, d, g)], this.cmdHistory = c(), this.logger = g;
          }
          var u = h.prototype;
          return u.getHandler = function(l) {
            return this.channels[l].getHandler();
          }, u.setHandler = function(l, d) {
            this.channels[l].setHandler(d);
          }, u.addData = function(l, d) {
            var g, x, R, P = !1;
            this.logger.time = l;
            for (var _ = 0; _ < d.length; _ += 2)
              if (x = d[_] & 127, R = d[_ + 1] & 127, !(x === 0 && R === 0)) {
                if (this.logger.log(T.DATA, "[" + v([d[_], d[_ + 1]]) + "] -> (" + v([x, R]) + ")"), g = this.parseCmd(x, R), g || (g = this.parseMidrow(x, R)), g || (g = this.parsePAC(x, R)), g || (g = this.parseBackgroundAttributes(x, R)), !g && (P = this.parseChars(x, R), P)) {
                  var F = this.currentChannel;
                  if (F && F > 0) {
                    var B = this.channels[F];
                    B.insertChars(P);
                  } else
                    this.logger.log(T.WARNING, "No channel found yet. TEXT-MODE?");
                }
                !g && !P && this.logger.log(T.WARNING, "Couldn't parse cleaned data " + v([x, R]) + " orig: " + v([d[_], d[_ + 1]]));
              }
          }, u.parseCmd = function(l, d) {
            var g = this.cmdHistory, x = (l === 20 || l === 28 || l === 21 || l === 29) && d >= 32 && d <= 47, R = (l === 23 || l === 31) && d >= 33 && d <= 35;
            if (!(x || R))
              return !1;
            if (o(l, d, g))
              return i(null, null, g), this.logger.log(T.DEBUG, "Repeated command (" + v([l, d]) + ") is dropped"), !0;
            var P = l === 20 || l === 21 || l === 23 ? 1 : 2, _ = this.channels[P];
            return l === 20 || l === 21 || l === 28 || l === 29 ? d === 32 ? _.ccRCL() : d === 33 ? _.ccBS() : d === 34 ? _.ccAOF() : d === 35 ? _.ccAON() : d === 36 ? _.ccDER() : d === 37 ? _.ccRU(2) : d === 38 ? _.ccRU(3) : d === 39 ? _.ccRU(4) : d === 40 ? _.ccFON() : d === 41 ? _.ccRDC() : d === 42 ? _.ccTR() : d === 43 ? _.ccRTD() : d === 44 ? _.ccEDM() : d === 45 ? _.ccCR() : d === 46 ? _.ccENM() : d === 47 && _.ccEOC() : _.ccTO(d - 32), i(l, d, g), this.currentChannel = P, !0;
          }, u.parseMidrow = function(l, d) {
            var g = 0;
            if ((l === 17 || l === 25) && d >= 32 && d <= 47) {
              if (l === 17 ? g = 1 : g = 2, g !== this.currentChannel)
                return this.logger.log(T.ERROR, "Mismatch channel in midrow parsing"), !1;
              var x = this.channels[g];
              return x ? (x.ccMIDROW(d), this.logger.log(T.DEBUG, "MIDROW (" + v([l, d]) + ")"), !0) : !1;
            }
            return !1;
          }, u.parsePAC = function(l, d) {
            var g, x = this.cmdHistory, R = (l >= 17 && l <= 23 || l >= 25 && l <= 31) && d >= 64 && d <= 127, P = (l === 16 || l === 24) && d >= 64 && d <= 95;
            if (!(R || P))
              return !1;
            if (o(l, d, x))
              return i(null, null, x), !0;
            var _ = l <= 23 ? 1 : 2;
            d >= 64 && d <= 95 ? g = _ === 1 ? O[l] : m[l] : g = _ === 1 ? L[l] : S[l];
            var F = this.channels[_];
            return F ? (F.setPAC(this.interpretPAC(g, d)), i(l, d, x), this.currentChannel = _, !0) : !1;
          }, u.interpretPAC = function(l, d) {
            var g, x = {
              color: null,
              italics: !1,
              indent: null,
              underline: !1,
              row: l
            };
            return d > 95 ? g = d - 96 : g = d - 64, x.underline = (g & 1) === 1, g <= 13 ? x.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(g / 2)] : g <= 15 ? (x.italics = !0, x.color = "white") : x.indent = Math.floor((g - 16) / 2) * 4, x;
          }, u.parseChars = function(l, d) {
            var g, x = null, R = null;
            if (l >= 25 ? (g = 2, R = l - 8) : (g = 1, R = l), R >= 17 && R <= 19) {
              var P;
              R === 17 ? P = d + 80 : R === 18 ? P = d + 112 : P = d + 144, this.logger.log(T.INFO, "Special char '" + A(P) + "' in channel " + g), x = [P];
            } else
              l >= 32 && l <= 127 && (x = d === 0 ? [l] : [l, d]);
            if (x) {
              var _ = v(x);
              this.logger.log(T.DEBUG, "Char codes =  " + _.join(",")), i(l, d, this.cmdHistory);
            }
            return x;
          }, u.parseBackgroundAttributes = function(l, d) {
            var g = (l === 16 || l === 24) && d >= 32 && d <= 47, x = (l === 23 || l === 31) && d >= 45 && d <= 47;
            if (!(g || x))
              return !1;
            var R, P = {};
            l === 16 || l === 24 ? (R = Math.floor((d - 32) / 2), P.background = p[R], d % 2 === 1 && (P.background = P.background + "_semi")) : d === 45 ? P.background = "transparent" : (P.foreground = "black", d === 47 && (P.underline = !0));
            var _ = l <= 23 ? 1 : 2, F = this.channels[_];
            return F.setBkgData(P), i(l, d, this.cmdHistory), !0;
          }, u.reset = function() {
            for (var l = 0; l < Object.keys(this.channels).length; l++) {
              var d = this.channels[l];
              d && d.reset();
            }
            this.cmdHistory = c();
          }, u.cueSplitAtTime = function(l) {
            for (var d = 0; d < this.channels.length; d++) {
              var g = this.channels[d];
              g && g.cueSplitAtTime(l);
            }
          }, h;
        }();
        function i(h, u, a) {
          a.a = h, a.b = u;
        }
        function o(h, u, a) {
          return a.a === h && a.b === u;
        }
        function c() {
          return {
            a: null,
            b: null
          };
        }
        M.default = s;
      },
      "./src/utils/codecs.ts": function(W, M, y) {
        y.r(M), y.d(M, "isCodecType", function() {
          return D;
        }), y.d(M, "isCodecSupportedInMp4", function() {
          return A;
        });
        var C = {
          audio: {
            a3ds: !0,
            "ac-3": !0,
            "ac-4": !0,
            alac: !0,
            alaw: !0,
            dra1: !0,
            "dts+": !0,
            "dts-": !0,
            dtsc: !0,
            dtse: !0,
            dtsh: !0,
            "ec-3": !0,
            enca: !0,
            g719: !0,
            g726: !0,
            m4ae: !0,
            mha1: !0,
            mha2: !0,
            mhm1: !0,
            mhm2: !0,
            mlpa: !0,
            mp4a: !0,
            "raw ": !0,
            Opus: !0,
            samr: !0,
            sawb: !0,
            sawp: !0,
            sevc: !0,
            sqcp: !0,
            ssmv: !0,
            twos: !0,
            ulaw: !0
          },
          video: {
            avc1: !0,
            avc2: !0,
            avc3: !0,
            avc4: !0,
            avcp: !0,
            av01: !0,
            drac: !0,
            dvav: !0,
            dvhe: !0,
            encv: !0,
            hev1: !0,
            hvc1: !0,
            mjp2: !0,
            mp4v: !0,
            mvc1: !0,
            mvc2: !0,
            mvc3: !0,
            mvc4: !0,
            resv: !0,
            rv60: !0,
            s263: !0,
            svc1: !0,
            svc2: !0,
            "vc-1": !0,
            vp08: !0,
            vp09: !0
          },
          text: {
            stpp: !0,
            wvtt: !0
          }
        };
        function D(b, I) {
          var O = C[I];
          return !!O && O[b.slice(0, 4)] === !0;
        }
        function A(b, I) {
          return MediaSource.isTypeSupported((I || "video") + '/mp4;codecs="' + b + '"');
        }
      },
      "./src/utils/cues.ts": function(W, M, y) {
        y.r(M);
        var C = y("./src/utils/vttparser.ts"), D = y("./src/utils/webvtt-parser.ts"), A = y("./src/utils/texttrack-utils.ts"), b = /\s/, I = {
          newCue: function(L, m, S, p) {
            for (var T = [], E, v, n, t, r, e = self.VTTCue || self.TextTrackCue, f = 0; f < p.rows.length; f++)
              if (E = p.rows[f], n = !0, t = 0, r = "", !E.isEmpty()) {
                for (var s = 0; s < E.chars.length; s++)
                  b.test(E.chars[s].uchar) && n ? t++ : (r += E.chars[s].uchar, n = !1);
                E.cueStartTime = m, m === S && (S += 1e-4), t >= 16 ? t-- : t++;
                var i = Object(C.fixLineBreaks)(r.trim()), o = Object(D.generateCueId)(m, S, i);
                (!L || !L.cues || !L.cues.getCueById(o)) && (v = new e(m, S, i), v.id = o, v.line = f + 1, v.align = "left", v.position = 10 + Math.min(80, Math.floor(t * 8 / 32) * 10), T.push(v));
              }
            return L && T.length && (T.sort(function(c, h) {
              return c.line === "auto" || h.line === "auto" ? 0 : c.line > 8 && h.line > 8 ? h.line - c.line : c.line - h.line;
            }), T.forEach(function(c) {
              return Object(A.addCueToTrack)(L, c);
            })), T;
          }
        };
        M.default = I;
      },
      "./src/utils/discontinuities.ts": function(W, M, y) {
        y.r(M), y.d(M, "findFirstFragWithCC", function() {
          return b;
        }), y.d(M, "shouldAlignOnDiscontinuities", function() {
          return I;
        }), y.d(M, "findDiscontinuousReferenceFrag", function() {
          return O;
        }), y.d(M, "adjustSlidingStart", function() {
          return m;
        }), y.d(M, "alignStream", function() {
          return S;
        }), y.d(M, "alignPDT", function() {
          return T;
        }), y.d(M, "alignFragmentByPDTDelta", function() {
          return E;
        }), y.d(M, "alignMediaPlaylistByPDT", function() {
          return v;
        });
        var C = y("./src/polyfills/number.ts"), D = y("./src/utils/logger.ts"), A = y("./src/controller/level-helper.ts");
        function b(n, t) {
          for (var r = null, e = 0, f = n.length; e < f; e++) {
            var s = n[e];
            if (s && s.cc === t) {
              r = s;
              break;
            }
          }
          return r;
        }
        function I(n, t, r) {
          return !!(t.details && (r.endCC > r.startCC || n && n.cc < r.startCC));
        }
        function O(n, t) {
          var r = n.fragments, e = t.fragments;
          if (!e.length || !r.length) {
            D.logger.log("No fragments to align");
            return;
          }
          var f = b(r, e[0].cc);
          if (!f || f && !f.startPTS) {
            D.logger.log("No frag in previous level to align on");
            return;
          }
          return f;
        }
        function L(n, t) {
          if (n) {
            var r = n.start + t;
            n.start = n.startPTS = r, n.endPTS = r + n.duration;
          }
        }
        function m(n, t) {
          for (var r = t.fragments, e = 0, f = r.length; e < f; e++)
            L(r[e], n);
          t.fragmentHint && L(t.fragmentHint, n), t.alignedSliding = !0;
        }
        function S(n, t, r) {
          !t || (p(n, r, t), !r.alignedSliding && t.details && T(r, t.details), !r.alignedSliding && t.details && !r.skippedSegments && Object(A.adjustSliding)(t.details, r));
        }
        function p(n, t, r) {
          if (I(n, r, t)) {
            var e = O(r.details, t);
            e && Object(C.isFiniteNumber)(e.start) && (D.logger.log("Adjusting PTS using last level due to CC increase within current level " + t.url), m(e.start, t));
          }
        }
        function T(n, t) {
          if (!(!t.fragments.length || !n.hasProgramDateTime || !t.hasProgramDateTime)) {
            var r = t.fragments[0].programDateTime, e = n.fragments[0].programDateTime, f = (e - r) / 1e3 + t.fragments[0].start;
            f && Object(C.isFiniteNumber)(f) && (D.logger.log("Adjusting PTS using programDateTime delta " + (e - r) + "ms, sliding:" + f.toFixed(3) + " " + n.url + " "), m(f, n));
          }
        }
        function E(n, t) {
          var r = n.programDateTime;
          if (!!r) {
            var e = (r - t) / 1e3;
            n.start = n.startPTS = e, n.endPTS = e + n.duration;
          }
        }
        function v(n, t) {
          if (!(!t.fragments.length || !n.hasProgramDateTime || !t.hasProgramDateTime)) {
            var r = t.fragments[0].programDateTime, e = t.fragments[0].start, f = r - e * 1e3;
            n.fragments.forEach(function(s) {
              E(s, f);
            }), n.fragmentHint && E(n.fragmentHint, f), n.alignedSliding = !0;
          }
        }
      },
      "./src/utils/ewma-bandwidth-estimator.ts": function(W, M, y) {
        y.r(M);
        var C = y("./src/utils/ewma.ts"), D = /* @__PURE__ */ function() {
          function A(I, O, L) {
            this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.defaultEstimate_ = L, this.minWeight_ = 1e-3, this.minDelayMs_ = 50, this.slow_ = new C.default(I), this.fast_ = new C.default(O);
          }
          var b = A.prototype;
          return b.update = function(O, L) {
            var m = this.slow_, S = this.fast_;
            this.slow_.halfLife !== O && (this.slow_ = new C.default(O, m.getEstimate(), m.getTotalWeight())), this.fast_.halfLife !== L && (this.fast_ = new C.default(L, S.getEstimate(), S.getTotalWeight()));
          }, b.sample = function(O, L) {
            O = Math.max(O, this.minDelayMs_);
            var m = 8 * L, S = O / 1e3, p = m / S;
            this.fast_.sample(S, p), this.slow_.sample(S, p);
          }, b.canEstimate = function() {
            var O = this.fast_;
            return O && O.getTotalWeight() >= this.minWeight_;
          }, b.getEstimate = function() {
            return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_;
          }, b.destroy = function() {
          }, A;
        }();
        M.default = D;
      },
      "./src/utils/ewma.ts": function(W, M, y) {
        y.r(M);
        var C = /* @__PURE__ */ function() {
          function D(b, I, O) {
            I === void 0 && (I = 0), O === void 0 && (O = 0), this.halfLife = void 0, this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.halfLife = b, this.alpha_ = b ? Math.exp(Math.log(0.5) / b) : 0, this.estimate_ = I, this.totalWeight_ = O;
          }
          var A = D.prototype;
          return A.sample = function(I, O) {
            var L = Math.pow(this.alpha_, I);
            this.estimate_ = O * (1 - L) + L * this.estimate_, this.totalWeight_ += I;
          }, A.getTotalWeight = function() {
            return this.totalWeight_;
          }, A.getEstimate = function() {
            if (this.alpha_) {
              var I = 1 - Math.pow(this.alpha_, this.totalWeight_);
              if (I)
                return this.estimate_ / I;
            }
            return this.estimate_;
          }, D;
        }();
        M.default = C;
      },
      "./src/utils/fetch-loader.ts": function(W, M, y) {
        y.r(M), y.d(M, "fetchSupported", function() {
          return E;
        });
        var C = y("./src/polyfills/number.ts"), D = y("./src/loader/load-stats.ts"), A = y("./src/demux/chunk-cache.ts");
        function b(e, f) {
          e.prototype = Object.create(f.prototype), e.prototype.constructor = e, S(e, f);
        }
        function I(e) {
          var f = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
          return I = function(i) {
            if (i === null || !m(i))
              return i;
            if (typeof i != "function")
              throw new TypeError("Super expression must either be null or a function");
            if (typeof f < "u") {
              if (f.has(i))
                return f.get(i);
              f.set(i, o);
            }
            function o() {
              return O(i, arguments, p(this).constructor);
            }
            return o.prototype = Object.create(i.prototype, { constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 } }), S(o, i);
          }, I(e);
        }
        function O(e, f, s) {
          return L() ? O = Reflect.construct : O = function(o, c, h) {
            var u = [null];
            u.push.apply(u, c);
            var a = Function.bind.apply(o, u), l = new a();
            return h && S(l, h.prototype), l;
          }, O.apply(null, arguments);
        }
        function L() {
          if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
            return !1;
          if (typeof Proxy == "function")
            return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), !0;
          } catch {
            return !1;
          }
        }
        function m(e) {
          return Function.toString.call(e).indexOf("[native code]") !== -1;
        }
        function S(e, f) {
          return S = Object.setPrototypeOf || function(i, o) {
            return i.__proto__ = o, i;
          }, S(e, f);
        }
        function p(e) {
          return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(s) {
            return s.__proto__ || Object.getPrototypeOf(s);
          }, p(e);
        }
        function T() {
          return T = Object.assign || function(e) {
            for (var f = 1; f < arguments.length; f++) {
              var s = arguments[f];
              for (var i in s)
                Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i]);
            }
            return e;
          }, T.apply(this, arguments);
        }
        function E() {
          if (self.fetch && self.AbortController && self.ReadableStream && self.Request)
            try {
              return new self.ReadableStream({}), !0;
            } catch {
            }
          return !1;
        }
        var v = /* @__PURE__ */ function() {
          function e(s) {
            this.fetchSetup = void 0, this.requestTimeout = void 0, this.request = void 0, this.response = void 0, this.controller = void 0, this.context = void 0, this.config = null, this.callbacks = null, this.stats = void 0, this.loader = null, this.fetchSetup = s.fetchSetup || t, this.controller = new self.AbortController(), this.stats = new D.LoadStats();
          }
          var f = e.prototype;
          return f.destroy = function() {
            this.loader = this.callbacks = null, this.abortInternal();
          }, f.abortInternal = function() {
            var i = this.response;
            (!i || !i.ok) && (this.stats.aborted = !0, this.controller.abort());
          }, f.abort = function() {
            var i;
            this.abortInternal(), (i = this.callbacks) !== null && i !== void 0 && i.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response);
          }, f.load = function(i, o, c) {
            var h = this, u = this.stats;
            if (u.loading.start)
              throw new Error("Loader can only be used once.");
            u.loading.start = self.performance.now();
            var a = n(i, this.controller.signal), l = c.onProgress, d = i.responseType === "arraybuffer", g = d ? "byteLength" : "length";
            this.context = i, this.config = o, this.callbacks = c, this.request = this.fetchSetup(i, a), self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout(function() {
              h.abortInternal(), c.onTimeout(u, i, h.response);
            }, o.timeout), self.fetch(this.request).then(function(x) {
              if (h.response = h.loader = x, !x.ok) {
                var R = x.status, P = x.statusText;
                throw new r(P || "fetch, bad network response", R, x);
              }
              return u.loading.first = Math.max(self.performance.now(), u.loading.start), u.total = parseInt(x.headers.get("Content-Length") || "0"), l && Object(C.isFiniteNumber)(o.highWaterMark) ? h.loadProgressively(x, u, i, o.highWaterMark, l) : d ? x.arrayBuffer() : x.text();
            }).then(function(x) {
              var R = h.response;
              self.clearTimeout(h.requestTimeout), u.loading.end = Math.max(self.performance.now(), u.loading.first), u.loaded = u.total = x[g];
              var P = {
                url: R.url,
                data: x
              };
              l && !Object(C.isFiniteNumber)(o.highWaterMark) && l(u, i, x, R), c.onSuccess(P, u, i, R);
            }).catch(function(x) {
              if (self.clearTimeout(h.requestTimeout), !u.aborted) {
                var R = x.code || 0;
                c.onError({
                  code: R,
                  text: x.message
                }, i, x.details);
              }
            });
          }, f.getCacheAge = function() {
            var i = null;
            if (this.response) {
              var o = this.response.headers.get("age");
              i = o ? parseFloat(o) : null;
            }
            return i;
          }, f.loadProgressively = function(i, o, c, h, u) {
            h === void 0 && (h = 0);
            var a = new A.default(), l = i.body.getReader(), d = function g() {
              return l.read().then(function(x) {
                if (x.done)
                  return a.dataLength && u(o, c, a.flush(), i), Promise.resolve(new ArrayBuffer(0));
                var R = x.value, P = R.length;
                return o.loaded += P, P < h || a.dataLength ? (a.push(R), a.dataLength >= h && u(o, c, a.flush(), i)) : u(o, c, R, i), g();
              }).catch(function() {
                return Promise.reject();
              });
            };
            return d();
          }, e;
        }();
        function n(e, f) {
          var s = {
            method: "GET",
            mode: "cors",
            credentials: "same-origin",
            signal: f,
            headers: new self.Headers(T({}, e.headers))
          };
          return e.rangeEnd && s.headers.set("Range", "bytes=" + e.rangeStart + "-" + String(e.rangeEnd - 1)), s;
        }
        function t(e, f) {
          return new self.Request(e.url, f);
        }
        var r = /* @__PURE__ */ function(e) {
          b(f, e);
          function f(s, i, o) {
            var c;
            return c = e.call(this, s) || this, c.code = void 0, c.details = void 0, c.code = i, c.details = o, c;
          }
          return f;
        }(/* @__PURE__ */ I(Error));
        M.default = v;
      },
      "./src/utils/imsc1-ttml-parser.ts": function(W, M, y) {
        y.r(M), y.d(M, "IMSC1_CODEC", function() {
          return m;
        }), y.d(M, "parseIMSC1", function() {
          return E;
        });
        var C = y("./src/utils/mp4-tools.ts"), D = y("./src/utils/vttparser.ts"), A = y("./src/utils/vttcue.ts"), b = y("./src/demux/id3.ts"), I = y("./src/utils/timescale-conversion.ts"), O = y("./src/utils/webvtt-parser.ts");
        function L() {
          return L = Object.assign || function(h) {
            for (var u = 1; u < arguments.length; u++) {
              var a = arguments[u];
              for (var l in a)
                Object.prototype.hasOwnProperty.call(a, l) && (h[l] = a[l]);
            }
            return h;
          }, L.apply(this, arguments);
        }
        var m = "stpp.ttml.im1t", S = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/, p = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/, T = {
          left: "start",
          center: "center",
          right: "end",
          start: "start",
          end: "end"
        };
        function E(h, u, a, l, d) {
          var g = Object(C.findBox)(new Uint8Array(h), ["mdat"]);
          if (g.length === 0) {
            d(new Error("Could not parse IMSC1 mdat"));
            return;
          }
          var x = g[0], R = Object(b.utf8ArrayToStr)(new Uint8Array(h, x.start, x.end - x.start)), P = Object(I.toTimescaleFromScale)(u, 1, a);
          try {
            l(v(R, P));
          } catch (_) {
            d(_);
          }
        }
        function v(h, u) {
          var a = new DOMParser(), l = a.parseFromString(h, "text/xml"), d = l.getElementsByTagName("tt")[0];
          if (!d)
            throw new Error("Invalid ttml");
          var g = {
            frameRate: 30,
            subFrameRate: 1,
            frameRateMultiplier: 0,
            tickRate: 0
          }, x = Object.keys(g).reduce(function(B, U) {
            return B[U] = d.getAttribute("ttp:" + U) || g[U], B;
          }, {}), R = d.getAttribute("xml:space") !== "preserve", P = t(n(d, "styling", "style")), _ = t(n(d, "layout", "region")), F = n(d, "body", "[begin]");
          return [].map.call(F, function(B) {
            var U = r(B, R);
            if (!U || !B.hasAttribute("begin"))
              return null;
            var N = i(B.getAttribute("begin"), x), k = i(B.getAttribute("dur"), x), w = i(B.getAttribute("end"), x);
            if (N === null)
              throw s(B);
            if (w === null) {
              if (k === null)
                throw s(B);
              w = N + k;
            }
            var K = new A.default(N - u, w - u, U);
            K.id = Object(O.generateCueId)(K.startTime, K.endTime, K.text);
            var j = _[B.getAttribute("region")], H = P[B.getAttribute("style")];
            K.position = 10, K.size = 80;
            var G = e(j, H), X = G.textAlign;
            if (X) {
              var V = T[X];
              V && (K.lineAlign = V), K.align = X;
            }
            return L(K, G), K;
          }).filter(function(B) {
            return B !== null;
          });
        }
        function n(h, u, a) {
          var l = h.getElementsByTagName(u)[0];
          return l ? [].slice.call(l.querySelectorAll(a)) : [];
        }
        function t(h) {
          return h.reduce(function(u, a) {
            var l = a.getAttribute("xml:id");
            return l && (u[l] = a), u;
          }, {});
        }
        function r(h, u) {
          return [].slice.call(h.childNodes).reduce(function(a, l, d) {
            var g;
            return l.nodeName === "br" && d ? a + `
` : (g = l.childNodes) !== null && g !== void 0 && g.length ? r(l, u) : u ? a + l.textContent.trim().replace(/\s+/g, " ") : a + l.textContent;
          }, "");
        }
        function e(h, u) {
          var a = "http://www.w3.org/ns/ttml#styling", l = [
            "displayAlign",
            "textAlign",
            "color",
            "backgroundColor",
            "fontSize",
            "fontFamily"
          ];
          return l.reduce(function(d, g) {
            var x = f(u, a, g) || f(h, a, g);
            return x && (d[g] = x), d;
          }, {});
        }
        function f(h, u, a) {
          return h.hasAttributeNS(u, a) ? h.getAttributeNS(u, a) : null;
        }
        function s(h) {
          return new Error("Could not parse ttml timestamp " + h);
        }
        function i(h, u) {
          if (!h)
            return null;
          var a = Object(D.parseTimeStamp)(h);
          return a === null && (S.test(h) ? a = o(h, u) : p.test(h) && (a = c(h, u))), a;
        }
        function o(h, u) {
          var a = S.exec(h), l = (a[4] | 0) + (a[5] | 0) / u.subFrameRate;
          return (a[1] | 0) * 3600 + (a[2] | 0) * 60 + (a[3] | 0) + l / u.frameRate;
        }
        function c(h, u) {
          var a = p.exec(h), l = Number(a[1]), d = a[2];
          switch (d) {
            case "h":
              return l * 3600;
            case "m":
              return l * 60;
            case "ms":
              return l * 1e3;
            case "f":
              return l / u.frameRate;
            case "t":
              return l / u.tickRate;
          }
          return l;
        }
      },
      "./src/utils/logger.ts": function(W, M, y) {
        y.r(M), y.d(M, "enableLogs", function() {
          return O;
        }), y.d(M, "logger", function() {
          return L;
        });
        var C = function() {
        }, D = {
          trace: C,
          debug: C,
          log: C,
          warn: C,
          info: C,
          error: C
        }, A = D;
        function b(m) {
          var S = self.console[m];
          return S ? S.bind(self.console, "[" + m + "] >") : C;
        }
        function I(m) {
          for (var S = arguments.length, p = new Array(S > 1 ? S - 1 : 0), T = 1; T < S; T++)
            p[T - 1] = arguments[T];
          p.forEach(function(E) {
            A[E] = m[E] ? m[E].bind(m) : b(E);
          });
        }
        function O(m) {
          if (self.console && m === !0 || typeof m == "object") {
            I(
              m,
              "debug",
              "log",
              "info",
              "warn",
              "error"
            );
            try {
              A.log();
            } catch {
              A = D;
            }
          } else
            A = D;
        }
        var L = A;
      },
      "./src/utils/mediakeys-helper.ts": function(W, M, y) {
        y.r(M), y.d(M, "KeySystems", function() {
          return C;
        }), y.d(M, "requestMediaKeySystemAccess", function() {
          return D;
        });
        var C;
        (function(A) {
          A.WIDEVINE = "com.widevine.alpha", A.PLAYREADY = "com.microsoft.playready";
        })(C || (C = {}));
        var D = function() {
          return typeof self < "u" && self.navigator && self.navigator.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null;
        }();
      },
      "./src/utils/mediasource-helper.ts": function(W, M, y) {
        y.r(M), y.d(M, "getMediaSource", function() {
          return C;
        });
        function C() {
          return self.MediaSource || self.WebKitMediaSource;
        }
      },
      "./src/utils/mp4-tools.ts": function(W, M, y) {
        y.r(M), y.d(M, "bin2str", function() {
          return I;
        }), y.d(M, "readUint16", function() {
          return O;
        }), y.d(M, "readUint32", function() {
          return L;
        }), y.d(M, "writeUint32", function() {
          return m;
        }), y.d(M, "findBox", function() {
          return S;
        }), y.d(M, "parseSegmentIndex", function() {
          return p;
        }), y.d(M, "parseInitSegment", function() {
          return T;
        }), y.d(M, "getStartDTS", function() {
          return E;
        }), y.d(M, "getDuration", function() {
          return v;
        }), y.d(M, "computeRawDurationFromSamples", function() {
          return n;
        }), y.d(M, "offsetStartDTS", function() {
          return t;
        }), y.d(M, "segmentValidRange", function() {
          return r;
        }), y.d(M, "appendUint8Array", function() {
          return e;
        });
        var C = y("./src/utils/typed-array.ts"), D = y("./src/loader/fragment.ts"), A = Math.pow(2, 32) - 1, b = [].push;
        function I(f) {
          return String.fromCharCode.apply(null, f);
        }
        function O(f, s) {
          "data" in f && (s += f.start, f = f.data);
          var i = f[s] << 8 | f[s + 1];
          return i < 0 ? 65536 + i : i;
        }
        function L(f, s) {
          "data" in f && (s += f.start, f = f.data);
          var i = f[s] << 24 | f[s + 1] << 16 | f[s + 2] << 8 | f[s + 3];
          return i < 0 ? 4294967296 + i : i;
        }
        function m(f, s, i) {
          "data" in f && (s += f.start, f = f.data), f[s] = i >> 24, f[s + 1] = i >> 16 & 255, f[s + 2] = i >> 8 & 255, f[s + 3] = i & 255;
        }
        function S(f, s) {
          var i = [];
          if (!s.length)
            return i;
          var o, c, h;
          "data" in f ? (o = f.data, c = f.start, h = f.end) : (o = f, c = 0, h = o.byteLength);
          for (var u = c; u < h; ) {
            var a = L(o, u), l = I(o.subarray(u + 4, u + 8)), d = a > 1 ? u + a : h;
            if (l === s[0])
              if (s.length === 1)
                i.push({
                  data: o,
                  start: u + 8,
                  end: d
                });
              else {
                var g = S({
                  data: o,
                  start: u + 8,
                  end: d
                }, s.slice(1));
                g.length && b.apply(i, g);
              }
            u = d;
          }
          return i;
        }
        function p(f) {
          var s = S(f, ["moov"]), i = s[0], o = i ? i.end : null, c = S(f, ["sidx"]);
          if (!c || !c[0])
            return null;
          var h = [], u = c[0], a = u.data[0], l = a === 0 ? 8 : 16, d = L(u, l);
          l += 4;
          var g = 0, x = 0;
          a === 0 ? l += 8 : l += 16, l += 2;
          var R = u.end + x, P = O(u, l);
          l += 2;
          for (var _ = 0; _ < P; _++) {
            var F = l, B = L(u, F);
            F += 4;
            var U = B & 2147483647, N = (B & 2147483648) >>> 31;
            if (N === 1)
              return console.warn("SIDX has hierarchical references (not supported)"), null;
            var k = L(u, F);
            F += 4, h.push({
              referenceSize: U,
              subsegmentDuration: k,
              info: {
                duration: k / d,
                start: R,
                end: R + U - 1
              }
            }), R += U, F += 4, l = F;
          }
          return {
            earliestPresentationTime: g,
            timescale: d,
            version: a,
            referencesCount: P,
            references: h,
            moovEndOffset: o
          };
        }
        function T(f) {
          for (var s = [], i = S(f, ["moov", "trak"]), o = 0; o < i.length; o++) {
            var c = i[o], h = S(c, ["tkhd"])[0];
            if (h) {
              var u = h.data[h.start], a = u === 0 ? 12 : 20, l = L(h, a), d = S(c, ["mdia", "mdhd"])[0];
              if (d) {
                u = d.data[d.start], a = u === 0 ? 12 : 20;
                var g = L(d, a), x = S(c, ["mdia", "hdlr"])[0];
                if (x) {
                  var R = I(x.data.subarray(x.start + 8, x.start + 12)), P = {
                    soun: D.ElementaryStreamTypes.AUDIO,
                    vide: D.ElementaryStreamTypes.VIDEO
                  }[R];
                  if (P) {
                    var _ = S(c, ["mdia", "minf", "stbl", "stsd"])[0], F = void 0;
                    _ && (F = I(_.data.subarray(_.start + 12, _.start + 16))), s[l] = {
                      timescale: g,
                      type: P
                    }, s[P] = {
                      timescale: g,
                      id: l,
                      codec: F
                    };
                  }
                }
              }
            }
          }
          var B = S(f, ["moov", "mvex", "trex"]);
          return B.forEach(function(U) {
            var N = L(U, 4), k = s[N];
            k && (k.default = {
              duration: L(U, 12),
              flags: L(U, 20)
            });
          }), s;
        }
        function E(f, s) {
          return S(s, ["moof", "traf"]).reduce(function(i, o) {
            var c = S(o, ["tfdt"])[0], h = c.data[c.start], u = S(o, ["tfhd"]).reduce(function(a, l) {
              var d = L(l, 4), g = f[d];
              if (g) {
                var x = L(c, 4);
                h === 1 && (x *= Math.pow(2, 32), x += L(c, 8));
                var R = g.timescale || 9e4, P = x / R;
                if (isFinite(P) && (a === null || P < a))
                  return P;
              }
              return a;
            }, null);
            return u !== null && isFinite(u) && (i === null || u < i) ? u : i;
          }, null) || 0;
        }
        function v(f, s) {
          for (var i = 0, o = 0, c = 0, h = S(f, ["moof", "traf"]), u = 0; u < h.length; u++) {
            var a = h[u], l = S(a, ["tfhd"])[0], d = L(l, 4), g = s[d];
            if (!!g) {
              var x = g.default, R = L(l, 0) | (x == null ? void 0 : x.flags), P = x == null ? void 0 : x.duration;
              R & 8 && (R & 2 ? P = L(l, 12) : P = L(l, 8));
              for (var _ = g.timescale || 9e4, F = S(a, ["trun"]), B = 0; B < F.length; B++) {
                if (i = n(F[B]), !i && P) {
                  var U = L(F[B], 4);
                  i = P * U;
                }
                g.type === D.ElementaryStreamTypes.VIDEO ? o += i / _ : g.type === D.ElementaryStreamTypes.AUDIO && (c += i / _);
              }
            }
          }
          if (o === 0 && c === 0) {
            var N = p(f);
            if (N != null && N.references)
              return N.references.reduce(function(k, w) {
                return k + w.info.duration || 0;
              }, 0);
          }
          return o || c;
        }
        function n(f) {
          var s = L(f, 0), i = 8;
          s & 1 && (i += 4), s & 4 && (i += 4);
          for (var o = 0, c = L(f, 4), h = 0; h < c; h++) {
            if (s & 256) {
              var u = L(f, i);
              o += u, i += 4;
            }
            s & 512 && (i += 4), s & 1024 && (i += 4), s & 2048 && (i += 4);
          }
          return o;
        }
        function t(f, s, i) {
          S(s, ["moof", "traf"]).forEach(function(o) {
            S(o, ["tfhd"]).forEach(function(c) {
              var h = L(c, 4), u = f[h];
              if (!!u) {
                var a = u.timescale || 9e4;
                S(o, ["tfdt"]).forEach(function(l) {
                  var d = l.data[l.start], g = L(l, 4);
                  if (d === 0)
                    m(l, 4, g - i * a);
                  else {
                    g *= Math.pow(2, 32), g += L(l, 8), g -= i * a, g = Math.max(g, 0);
                    var x = Math.floor(g / (A + 1)), R = Math.floor(g % (A + 1));
                    m(l, 4, x), m(l, 8, R);
                  }
                });
              }
            });
          });
        }
        function r(f) {
          var s = {
            valid: null,
            remainder: null
          }, i = S(f, ["moof"]);
          if (i) {
            if (i.length < 2)
              return s.remainder = f, s;
          } else
            return s;
          var o = i[i.length - 1];
          return s.valid = Object(C.sliceUint8)(f, 0, o.start - 8), s.remainder = Object(C.sliceUint8)(f, o.start - 8), s;
        }
        function e(f, s) {
          var i = new Uint8Array(f.length + s.length);
          return i.set(f), i.set(s, f.length), i;
        }
      },
      "./src/utils/output-filter.ts": function(W, M, y) {
        y.r(M), y.d(M, "default", function() {
          return C;
        });
        var C = /* @__PURE__ */ function() {
          function D(b, I) {
            this.timelineController = void 0, this.cueRanges = [], this.trackName = void 0, this.startTime = null, this.endTime = null, this.screen = null, this.timelineController = b, this.trackName = I;
          }
          var A = D.prototype;
          return A.dispatchCue = function() {
            this.startTime !== null && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), this.startTime = null);
          }, A.newCue = function(I, O, L) {
            (this.startTime === null || this.startTime > I) && (this.startTime = I), this.endTime = O, this.screen = L, this.timelineController.createCaptionsTrack(this.trackName);
          }, A.reset = function() {
            this.cueRanges = [], this.startTime = null;
          }, D;
        }();
      },
      "./src/utils/texttrack-utils.ts": function(W, M, y) {
        y.r(M), y.d(M, "sendAddTrackEvent", function() {
          return D;
        }), y.d(M, "addCueToTrack", function() {
          return A;
        }), y.d(M, "clearCurrentCues", function() {
          return b;
        }), y.d(M, "removeCuesInRange", function() {
          return I;
        }), y.d(M, "getCuesInRange", function() {
          return L;
        });
        var C = y("./src/utils/logger.ts");
        function D(m, S) {
          var p;
          try {
            p = new Event("addtrack");
          } catch {
            p = document.createEvent("Event"), p.initEvent("addtrack", !1, !1);
          }
          p.track = m, S.dispatchEvent(p);
        }
        function A(m, S) {
          var p = m.mode;
          if (p === "disabled" && (m.mode = "hidden"), m.cues && !m.cues.getCueById(S.id))
            try {
              if (m.addCue(S), !m.cues.getCueById(S.id))
                throw new Error("addCue is failed for: " + S);
            } catch (E) {
              C.logger.debug("[texttrack-utils]: " + E);
              var T = new self.TextTrackCue(S.startTime, S.endTime, S.text);
              T.id = S.id, m.addCue(T);
            }
          p === "disabled" && (m.mode = p);
        }
        function b(m) {
          var S = m.mode;
          if (S === "disabled" && (m.mode = "hidden"), m.cues)
            for (var p = m.cues.length; p--; )
              m.removeCue(m.cues[p]);
          S === "disabled" && (m.mode = S);
        }
        function I(m, S, p) {
          var T = m.mode;
          if (T === "disabled" && (m.mode = "hidden"), m.cues && m.cues.length > 0)
            for (var E = L(m.cues, S, p), v = 0; v < E.length; v++)
              m.removeCue(E[v]);
          T === "disabled" && (m.mode = T);
        }
        function O(m, S) {
          if (S < m[0].startTime)
            return 0;
          var p = m.length - 1;
          if (S > m[p].endTime)
            return -1;
          for (var T = 0, E = p; T <= E; ) {
            var v = Math.floor((E + T) / 2);
            if (S < m[v].startTime)
              E = v - 1;
            else if (S > m[v].startTime && T < p)
              T = v + 1;
            else
              return v;
          }
          return m[T].startTime - S < S - m[E].startTime ? T : E;
        }
        function L(m, S, p) {
          var T = [], E = O(m, S);
          if (E > -1)
            for (var v = E, n = m.length; v < n; v++) {
              var t = m[v];
              if (t.startTime >= S && t.endTime <= p)
                T.push(t);
              else if (t.startTime > p)
                return T;
            }
          return T;
        }
      },
      "./src/utils/time-ranges.ts": function(W, M, y) {
        y.r(M);
        var C = {
          toString: function(A) {
            for (var b = "", I = A.length, O = 0; O < I; O++)
              b += "[" + A.start(O).toFixed(3) + "," + A.end(O).toFixed(3) + "]";
            return b;
          }
        };
        M.default = C;
      },
      "./src/utils/timescale-conversion.ts": function(W, M, y) {
        y.r(M), y.d(M, "toTimescaleFromBase", function() {
          return D;
        }), y.d(M, "toTimescaleFromScale", function() {
          return A;
        }), y.d(M, "toMsFromMpegTsClock", function() {
          return b;
        }), y.d(M, "toMpegTsClockFromTimescale", function() {
          return I;
        });
        var C = 9e4;
        function D(O, L, m, S) {
          m === void 0 && (m = 1), S === void 0 && (S = !1);
          var p = O * L * m;
          return S ? Math.round(p) : p;
        }
        function A(O, L, m, S) {
          return m === void 0 && (m = 1), S === void 0 && (S = !1), D(O, L, 1 / m, S);
        }
        function b(O, L) {
          return L === void 0 && (L = !1), D(O, 1e3, 1 / C, L);
        }
        function I(O, L) {
          return L === void 0 && (L = 1), D(O, C, 1 / L);
        }
      },
      "./src/utils/typed-array.ts": function(W, M, y) {
        y.r(M), y.d(M, "sliceUint8", function() {
          return C;
        });
        function C(D, A, b) {
          return Uint8Array.prototype.slice ? D.slice(A, b) : new Uint8Array(Array.prototype.slice.call(D, A, b));
        }
      },
      "./src/utils/vttcue.ts": function(W, M, y) {
        y.r(M), M.default = function() {
          if (typeof self < "u" && self.VTTCue)
            return self.VTTCue;
          var C = ["", "lr", "rl"], D = ["start", "middle", "end", "left", "right"];
          function A(m, S) {
            if (typeof S != "string" || !Array.isArray(m))
              return !1;
            var p = S.toLowerCase();
            return ~m.indexOf(p) ? p : !1;
          }
          function b(m) {
            return A(C, m);
          }
          function I(m) {
            return A(D, m);
          }
          function O(m) {
            for (var S = arguments.length, p = new Array(S > 1 ? S - 1 : 0), T = 1; T < S; T++)
              p[T - 1] = arguments[T];
            for (var E = 1; E < arguments.length; E++) {
              var v = arguments[E];
              for (var n in v)
                m[n] = v[n];
            }
            return m;
          }
          function L(m, S, p) {
            var T = this, E = {
              enumerable: !0
            };
            T.hasBeenReset = !1;
            var v = "", n = !1, t = m, r = S, e = p, f = null, s = "", i = !0, o = "auto", c = "start", h = 50, u = "middle", a = 50, l = "middle";
            Object.defineProperty(T, "id", O({}, E, {
              get: function() {
                return v;
              },
              set: function(g) {
                v = "" + g;
              }
            })), Object.defineProperty(T, "pauseOnExit", O({}, E, {
              get: function() {
                return n;
              },
              set: function(g) {
                n = !!g;
              }
            })), Object.defineProperty(T, "startTime", O({}, E, {
              get: function() {
                return t;
              },
              set: function(g) {
                if (typeof g != "number")
                  throw new TypeError("Start time must be set to a number.");
                t = g, this.hasBeenReset = !0;
              }
            })), Object.defineProperty(T, "endTime", O({}, E, {
              get: function() {
                return r;
              },
              set: function(g) {
                if (typeof g != "number")
                  throw new TypeError("End time must be set to a number.");
                r = g, this.hasBeenReset = !0;
              }
            })), Object.defineProperty(T, "text", O({}, E, {
              get: function() {
                return e;
              },
              set: function(g) {
                e = "" + g, this.hasBeenReset = !0;
              }
            })), Object.defineProperty(T, "region", O({}, E, {
              get: function() {
                return f;
              },
              set: function(g) {
                f = g, this.hasBeenReset = !0;
              }
            })), Object.defineProperty(T, "vertical", O({}, E, {
              get: function() {
                return s;
              },
              set: function(g) {
                var x = b(g);
                if (x === !1)
                  throw new SyntaxError("An invalid or illegal string was specified.");
                s = x, this.hasBeenReset = !0;
              }
            })), Object.defineProperty(T, "snapToLines", O({}, E, {
              get: function() {
                return i;
              },
              set: function(g) {
                i = !!g, this.hasBeenReset = !0;
              }
            })), Object.defineProperty(T, "line", O({}, E, {
              get: function() {
                return o;
              },
              set: function(g) {
                if (typeof g != "number" && g !== "auto")
                  throw new SyntaxError("An invalid number or illegal string was specified.");
                o = g, this.hasBeenReset = !0;
              }
            })), Object.defineProperty(T, "lineAlign", O({}, E, {
              get: function() {
                return c;
              },
              set: function(g) {
                var x = I(g);
                if (!x)
                  throw new SyntaxError("An invalid or illegal string was specified.");
                c = x, this.hasBeenReset = !0;
              }
            })), Object.defineProperty(T, "position", O({}, E, {
              get: function() {
                return h;
              },
              set: function(g) {
                if (g < 0 || g > 100)
                  throw new Error("Position must be between 0 and 100.");
                h = g, this.hasBeenReset = !0;
              }
            })), Object.defineProperty(T, "positionAlign", O({}, E, {
              get: function() {
                return u;
              },
              set: function(g) {
                var x = I(g);
                if (!x)
                  throw new SyntaxError("An invalid or illegal string was specified.");
                u = x, this.hasBeenReset = !0;
              }
            })), Object.defineProperty(T, "size", O({}, E, {
              get: function() {
                return a;
              },
              set: function(g) {
                if (g < 0 || g > 100)
                  throw new Error("Size must be between 0 and 100.");
                a = g, this.hasBeenReset = !0;
              }
            })), Object.defineProperty(T, "align", O({}, E, {
              get: function() {
                return l;
              },
              set: function(g) {
                var x = I(g);
                if (!x)
                  throw new SyntaxError("An invalid or illegal string was specified.");
                l = x, this.hasBeenReset = !0;
              }
            })), T.displayState = void 0;
          }
          return L.prototype.getCueAsHTML = function() {
            var m = self.WebVTT;
            return m.convertCueToDOMTree(self, this.text);
          }, L;
        }();
      },
      "./src/utils/vttparser.ts": function(W, M, y) {
        y.r(M), y.d(M, "parseTimeStamp", function() {
          return A;
        }), y.d(M, "fixLineBreaks", function() {
          return S;
        }), y.d(M, "VTTParser", function() {
          return p;
        });
        var C = y("./src/utils/vttcue.ts"), D = /* @__PURE__ */ function() {
          function T() {
          }
          var E = T.prototype;
          return E.decode = function(n, t) {
            if (!n)
              return "";
            if (typeof n != "string")
              throw new Error("Error - expected string data.");
            return decodeURIComponent(encodeURIComponent(n));
          }, T;
        }();
        function A(T) {
          function E(n, t, r, e) {
            return (n | 0) * 3600 + (t | 0) * 60 + (r | 0) + parseFloat(e || 0);
          }
          var v = T.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
          return v ? parseFloat(v[2]) > 59 ? E(v[2], v[3], 0, v[4]) : E(v[1], v[2], v[3], v[4]) : null;
        }
        var b = /* @__PURE__ */ function() {
          function T() {
            this.values = /* @__PURE__ */ Object.create(null);
          }
          var E = T.prototype;
          return E.set = function(n, t) {
            !this.get(n) && t !== "" && (this.values[n] = t);
          }, E.get = function(n, t, r) {
            return r ? this.has(n) ? this.values[n] : t[r] : this.has(n) ? this.values[n] : t;
          }, E.has = function(n) {
            return n in this.values;
          }, E.alt = function(n, t, r) {
            for (var e = 0; e < r.length; ++e)
              if (t === r[e]) {
                this.set(n, t);
                break;
              }
          }, E.integer = function(n, t) {
            /^-?\d+$/.test(t) && this.set(n, parseInt(t, 10));
          }, E.percent = function(n, t) {
            if (/^([\d]{1,3})(\.[\d]*)?%$/.test(t)) {
              var r = parseFloat(t);
              if (r >= 0 && r <= 100)
                return this.set(n, r), !0;
            }
            return !1;
          }, T;
        }();
        function I(T, E, v, n) {
          var t = n ? T.split(n) : [T];
          for (var r in t)
            if (typeof t[r] == "string") {
              var e = t[r].split(v);
              if (e.length === 2) {
                var f = e[0], s = e[1];
                E(f, s);
              }
            }
        }
        var O = new C.default(0, 0, ""), L = O.align === "middle" ? "middle" : "center";
        function m(T, E, v) {
          var n = T;
          function t() {
            var f = A(T);
            if (f === null)
              throw new Error("Malformed timestamp: " + n);
            return T = T.replace(/^[^\sa-zA-Z-]+/, ""), f;
          }
          function r(f, s) {
            var i = new b();
            I(f, function(h, u) {
              var a;
              switch (h) {
                case "region":
                  for (var l = v.length - 1; l >= 0; l--)
                    if (v[l].id === u) {
                      i.set(h, v[l].region);
                      break;
                    }
                  break;
                case "vertical":
                  i.alt(h, u, ["rl", "lr"]);
                  break;
                case "line":
                  a = u.split(","), i.integer(h, a[0]), i.percent(h, a[0]) && i.set("snapToLines", !1), i.alt(h, a[0], ["auto"]), a.length === 2 && i.alt("lineAlign", a[1], ["start", L, "end"]);
                  break;
                case "position":
                  a = u.split(","), i.percent(h, a[0]), a.length === 2 && i.alt("positionAlign", a[1], ["start", L, "end", "line-left", "line-right", "auto"]);
                  break;
                case "size":
                  i.percent(h, u);
                  break;
                case "align":
                  i.alt(h, u, ["start", L, "end", "left", "right"]);
                  break;
              }
            }, /:/, /\s/), s.region = i.get("region", null), s.vertical = i.get("vertical", "");
            var o = i.get("line", "auto");
            o === "auto" && O.line === -1 && (o = -1), s.line = o, s.lineAlign = i.get("lineAlign", "start"), s.snapToLines = i.get("snapToLines", !0), s.size = i.get("size", 100), s.align = i.get("align", L);
            var c = i.get("position", "auto");
            c === "auto" && O.position === 50 && (c = s.align === "start" || s.align === "left" ? 0 : s.align === "end" || s.align === "right" ? 100 : 50), s.position = c;
          }
          function e() {
            T = T.replace(/^\s+/, "");
          }
          if (e(), E.startTime = t(), e(), T.substr(0, 3) !== "-->")
            throw new Error("Malformed time stamp (time stamps must be separated by '-->'): " + n);
          T = T.substr(3), e(), E.endTime = t(), e(), r(T, E);
        }
        function S(T) {
          return T.replace(/<br(?: \/)?>/gi, `
`);
        }
        var p = /* @__PURE__ */ function() {
          function T() {
            this.state = "INITIAL", this.buffer = "", this.decoder = new D(), this.regionList = [], this.cue = null, this.oncue = void 0, this.onparsingerror = void 0, this.onflush = void 0;
          }
          var E = T.prototype;
          return E.parse = function(n) {
            var t = this;
            n && (t.buffer += t.decoder.decode(n, {
              stream: !0
            }));
            function r() {
              var c = t.buffer, h = 0;
              for (c = S(c); h < c.length && c[h] !== "\r" && c[h] !== `
`; )
                ++h;
              var u = c.substr(0, h);
              return c[h] === "\r" && ++h, c[h] === `
` && ++h, t.buffer = c.substr(h), u;
            }
            function e(c) {
              I(c, function(h, u) {
              }, /:/);
            }
            try {
              var f = "";
              if (t.state === "INITIAL") {
                if (!/\r\n|\n/.test(t.buffer))
                  return this;
                f = r();
                var s = f.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
                if (!s || !s[0])
                  throw new Error("Malformed WebVTT signature.");
                t.state = "HEADER";
              }
              for (var i = !1; t.buffer; ) {
                if (!/\r\n|\n/.test(t.buffer))
                  return this;
                switch (i ? i = !1 : f = r(), t.state) {
                  case "HEADER":
                    /:/.test(f) ? e(f) : f || (t.state = "ID");
                    continue;
                  case "NOTE":
                    f || (t.state = "ID");
                    continue;
                  case "ID":
                    if (/^NOTE($|[ \t])/.test(f)) {
                      t.state = "NOTE";
                      break;
                    }
                    if (!f)
                      continue;
                    if (t.cue = new C.default(0, 0, ""), t.state = "CUE", f.indexOf("-->") === -1) {
                      t.cue.id = f;
                      continue;
                    }
                  case "CUE":
                    if (!t.cue) {
                      t.state = "BADCUE";
                      continue;
                    }
                    try {
                      m(f, t.cue, t.regionList);
                    } catch {
                      t.cue = null, t.state = "BADCUE";
                      continue;
                    }
                    t.state = "CUETEXT";
                    continue;
                  case "CUETEXT":
                    {
                      var o = f.indexOf("-->") !== -1;
                      if (!f || o && (i = !0)) {
                        t.oncue && t.cue && t.oncue(t.cue), t.cue = null, t.state = "ID";
                        continue;
                      }
                      if (t.cue === null)
                        continue;
                      t.cue.text && (t.cue.text += `
`), t.cue.text += f;
                    }
                    continue;
                  case "BADCUE":
                    f || (t.state = "ID");
                }
              }
            } catch {
              t.state === "CUETEXT" && t.cue && t.oncue && t.oncue(t.cue), t.cue = null, t.state = t.state === "INITIAL" ? "BADWEBVTT" : "BADCUE";
            }
            return this;
          }, E.flush = function() {
            var n = this;
            try {
              if ((n.cue || n.state === "HEADER") && (n.buffer += `

`, n.parse()), n.state === "INITIAL" || n.state === "BADWEBVTT")
                throw new Error("Malformed WebVTT signature.");
            } catch (t) {
              n.onparsingerror && n.onparsingerror(t);
            }
            return n.onflush && n.onflush(), this;
          }, T;
        }();
      },
      "./src/utils/webvtt-parser.ts": function(W, M, y) {
        y.r(M), y.d(M, "generateCueId", function() {
          return p;
        }), y.d(M, "parseWebVTT", function() {
          return E;
        });
        var C = y("./src/polyfills/number.ts"), D = y("./src/utils/vttparser.ts"), A = y("./src/demux/id3.ts"), b = y("./src/utils/timescale-conversion.ts"), I = y("./src/remux/mp4-remuxer.ts"), O = /\r\n|\n\r|\n|\r/g, L = function(n, t, r) {
          return r === void 0 && (r = 0), n.substr(r, t.length) === t;
        }, m = function(n) {
          var t = parseInt(n.substr(-3)), r = parseInt(n.substr(-6, 2)), e = parseInt(n.substr(-9, 2)), f = n.length > 9 ? parseInt(n.substr(0, n.indexOf(":"))) : 0;
          if (!Object(C.isFiniteNumber)(t) || !Object(C.isFiniteNumber)(r) || !Object(C.isFiniteNumber)(e) || !Object(C.isFiniteNumber)(f))
            throw Error("Malformed X-TIMESTAMP-MAP: Local:" + n);
          return t += 1e3 * r, t += 60 * 1e3 * e, t += 60 * 60 * 1e3 * f, t;
        }, S = function(n) {
          for (var t = 5381, r = n.length; r; )
            t = t * 33 ^ n.charCodeAt(--r);
          return (t >>> 0).toString();
        };
        function p(v, n, t) {
          return S(v.toString()) + S(n.toString()) + S(t);
        }
        var T = function(n, t, r) {
          var e = n[t], f = n[e.prevCC];
          if (!f || !f.new && e.new) {
            n.ccOffset = n.presentationOffset = e.start, e.new = !1;
            return;
          }
          for (; (s = f) !== null && s !== void 0 && s.new; ) {
            var s;
            n.ccOffset += e.start - f.start, e.new = !1, e = f, f = n[e.prevCC];
          }
          n.presentationOffset = r;
        };
        function E(v, n, t, r, e, f, s, i) {
          var o = new D.VTTParser(), c = Object(A.utf8ArrayToStr)(new Uint8Array(v)).trim().replace(O, `
`).split(`
`), h = [], u = Object(b.toMpegTsClockFromTimescale)(n, t), a = "00:00.000", l = 0, d = 0, g, x = !0, R = !1;
          o.oncue = function(P) {
            var _ = r[e], F = r.ccOffset, B = (l - u) / 9e4;
            if (_ != null && _.new && (d !== void 0 ? F = r.ccOffset = _.start : T(r, e, B)), B && (F = B - r.presentationOffset), R) {
              var U = P.endTime - P.startTime, N = Object(I.normalizePts)((P.startTime + F - d) * 9e4, f * 9e4) / 9e4;
              P.startTime = N, P.endTime = N + U;
            }
            var k = P.text.trim();
            P.text = decodeURIComponent(encodeURIComponent(k)), P.id || (P.id = p(P.startTime, P.endTime, k)), P.endTime > 0 && h.push(P);
          }, o.onparsingerror = function(P) {
            g = P;
          }, o.onflush = function() {
            if (g) {
              i(g);
              return;
            }
            s(h);
          }, c.forEach(function(P) {
            if (x)
              if (L(P, "X-TIMESTAMP-MAP=")) {
                x = !1, R = !0, P.substr(16).split(",").forEach(function(_) {
                  L(_, "LOCAL:") ? a = _.substr(6) : L(_, "MPEGTS:") && (l = parseInt(_.substr(7)));
                });
                try {
                  d = m(a) / 1e3;
                } catch (_) {
                  R = !1, g = _;
                }
                return;
              } else
                P === "" && (x = !1);
            o.parse(P + `
`);
          }), o.flush();
        }
      },
      "./src/utils/xhr-loader.ts": function(W, M, y) {
        y.r(M);
        var C = y("./src/utils/logger.ts"), D = y("./src/loader/load-stats.ts"), A = /^age:\s*[\d.]+\s*$/m, b = /* @__PURE__ */ function() {
          function I(L) {
            this.xhrSetup = void 0, this.requestTimeout = void 0, this.retryTimeout = void 0, this.retryDelay = void 0, this.config = null, this.callbacks = null, this.context = void 0, this.loader = null, this.stats = void 0, this.xhrSetup = L ? L.xhrSetup : null, this.stats = new D.LoadStats(), this.retryDelay = 0;
          }
          var O = I.prototype;
          return O.destroy = function() {
            this.callbacks = null, this.abortInternal(), this.loader = null, this.config = null;
          }, O.abortInternal = function() {
            var m = this.loader;
            self.clearTimeout(this.requestTimeout), self.clearTimeout(this.retryTimeout), m && (m.onreadystatechange = null, m.onprogress = null, m.readyState !== 4 && (this.stats.aborted = !0, m.abort()));
          }, O.abort = function() {
            var m;
            this.abortInternal(), (m = this.callbacks) !== null && m !== void 0 && m.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader);
          }, O.load = function(m, S, p) {
            if (this.stats.loading.start)
              throw new Error("Loader can only be used once.");
            this.stats.loading.start = self.performance.now(), this.context = m, this.config = S, this.callbacks = p, this.retryDelay = S.retryDelay, this.loadInternal();
          }, O.loadInternal = function() {
            var m = this.config, S = this.context;
            if (!!m) {
              var p = this.loader = new self.XMLHttpRequest(), T = this.stats;
              T.loading.first = 0, T.loaded = 0;
              var E = this.xhrSetup;
              try {
                if (E)
                  try {
                    E(p, S.url);
                  } catch {
                    p.open("GET", S.url, !0), E(p, S.url);
                  }
                p.readyState || p.open("GET", S.url, !0);
                var v = this.context.headers;
                if (v)
                  for (var n in v)
                    p.setRequestHeader(n, v[n]);
              } catch (t) {
                this.callbacks.onError({
                  code: p.status,
                  text: t.message
                }, S, p);
                return;
              }
              S.rangeEnd && p.setRequestHeader("Range", "bytes=" + S.rangeStart + "-" + (S.rangeEnd - 1)), p.onreadystatechange = this.readystatechange.bind(this), p.onprogress = this.loadprogress.bind(this), p.responseType = S.responseType, self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), m.timeout), p.send();
            }
          }, O.readystatechange = function() {
            var m = this.context, S = this.loader, p = this.stats;
            if (!(!m || !S)) {
              var T = S.readyState, E = this.config;
              if (!p.aborted && T >= 2)
                if (self.clearTimeout(this.requestTimeout), p.loading.first === 0 && (p.loading.first = Math.max(self.performance.now(), p.loading.start)), T === 4) {
                  S.onreadystatechange = null, S.onprogress = null;
                  var v = S.status;
                  if (v >= 200 && v < 300) {
                    p.loading.end = Math.max(self.performance.now(), p.loading.first);
                    var n, t;
                    if (m.responseType === "arraybuffer" ? (n = S.response, t = n.byteLength) : (n = S.responseText, t = n.length), p.loaded = p.total = t, !this.callbacks)
                      return;
                    var r = this.callbacks.onProgress;
                    if (r && r(p, m, n, S), !this.callbacks)
                      return;
                    var e = {
                      url: S.responseURL,
                      data: n
                    };
                    this.callbacks.onSuccess(e, p, m, S);
                  } else
                    p.retry >= E.maxRetry || v >= 400 && v < 499 ? (C.logger.error(v + " while loading " + m.url), this.callbacks.onError({
                      code: v,
                      text: S.statusText
                    }, m, S)) : (C.logger.warn(v + " while loading " + m.url + ", retrying in " + this.retryDelay + "..."), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, E.maxRetryDelay), p.retry++);
                } else
                  self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), E.timeout);
            }
          }, O.loadtimeout = function() {
            C.logger.warn("timeout while loading " + this.context.url);
            var m = this.callbacks;
            m && (this.abortInternal(), m.onTimeout(this.stats, this.context, this.loader));
          }, O.loadprogress = function(m) {
            var S = this.stats;
            S.loaded = m.loaded, m.lengthComputable && (S.total = m.total);
          }, O.getCacheAge = function() {
            var m = null;
            if (this.loader && A.test(this.loader.getAllResponseHeaders())) {
              var S = this.loader.getResponseHeader("age");
              m = S ? parseFloat(S) : null;
            }
            return m;
          }, I;
        }();
        M.default = b;
      }
    }).default;
  });
})(Pt);
const Gt = /* @__PURE__ */ Kt(Pt.exports), Ht = /* @__PURE__ */ Wt({
  __proto__: null,
  default: Gt
}, [Pt.exports]);
export {
  Ht as h
};
