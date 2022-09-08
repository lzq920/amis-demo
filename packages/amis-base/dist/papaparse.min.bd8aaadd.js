import { c as _e } from "./index.7add3ddd.js";
function ge(J, se) {
  for (var Q = 0; Q < se.length; Q++) {
    const g = se[Q];
    if (typeof g != "string" && !Array.isArray(g)) {
      for (const L in g)
        if (L !== "default" && !(L in J)) {
          const H = Object.getOwnPropertyDescriptor(g, L);
          H && Object.defineProperty(J, L, H.get ? H : {
            enumerable: !0,
            get: () => g[L]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(J, Symbol.toStringTag, { value: "Module" }));
}
var he = { exports: {} };
/* @license
Papa Parse
v5.3.2
https://github.com/mholt/PapaParse
License: MIT
*/
(function(J, se) {
  (function(Q, g) {
    J.exports = g();
  })(_e, function Q() {
    var g = typeof self < "u" ? self : typeof window < "u" ? window : g !== void 0 ? g : {}, L = !g.document && !!g.postMessage, H = L && /blob:/i.test((g.location || {}).protocol), ee = {}, ce = 0, f = { parse: function(t, e) {
      var i = (e = e || {}).dynamicTyping || !1;
      if (m(i) && (e.dynamicTypingFunction = i, i = {}), e.dynamicTyping = i, e.transform = !!m(e.transform) && e.transform, e.worker && f.WORKERS_SUPPORTED) {
        var n = function() {
          if (!f.WORKERS_SUPPORTED)
            return !1;
          var d = (O = g.URL || g.webkitURL || null, k = Q.toString(), f.BLOB_URL || (f.BLOB_URL = O.createObjectURL(new Blob(["(", k, ")();"], { type: "text/javascript" })))), c = new g.Worker(d), O, k;
          return c.onmessage = pe, c.id = ce++, ee[c.id] = c;
        }();
        return n.userStep = e.step, n.userChunk = e.chunk, n.userComplete = e.complete, n.userError = e.error, e.step = m(e.step), e.chunk = m(e.chunk), e.complete = m(e.complete), e.error = m(e.error), delete e.worker, void n.postMessage({ input: t, config: e, workerId: n.id });
      }
      var s = null;
      return f.NODE_STREAM_INPUT, typeof t == "string" ? s = e.download ? new te(e) : new Z(e) : t.readable === !0 && m(t.read) && m(t.on) ? s = new re(e) : (g.File && t instanceof File || t instanceof Object) && (s = new ie(e)), s.stream(t);
    }, unparse: function(t, e) {
      var i = !1, n = !0, s = ",", d = `\r
`, c = '"', O = c + c, k = !1, a = null, w = !1;
      (function() {
        if (typeof e == "object") {
          if (typeof e.delimiter != "string" || f.BAD_DELIMITERS.filter(function(r) {
            return e.delimiter.indexOf(r) !== -1;
          }).length || (s = e.delimiter), (typeof e.quotes == "boolean" || typeof e.quotes == "function" || Array.isArray(e.quotes)) && (i = e.quotes), typeof e.skipEmptyLines != "boolean" && typeof e.skipEmptyLines != "string" || (k = e.skipEmptyLines), typeof e.newline == "string" && (d = e.newline), typeof e.quoteChar == "string" && (c = e.quoteChar), typeof e.header == "boolean" && (n = e.header), Array.isArray(e.columns)) {
            if (e.columns.length === 0)
              throw new Error("Option columns is empty");
            a = e.columns;
          }
          e.escapeChar !== void 0 && (O = e.escapeChar + c), (typeof e.escapeFormulae == "boolean" || e.escapeFormulae instanceof RegExp) && (w = e.escapeFormulae instanceof RegExp ? e.escapeFormulae : /^[=+\-@\t\r].*$/);
        }
      })();
      var h = new RegExp(Y(c), "g");
      if (typeof t == "string" && (t = JSON.parse(t)), Array.isArray(t)) {
        if (!t.length || Array.isArray(t[0]))
          return M(null, t, k);
        if (typeof t[0] == "object")
          return M(a || Object.keys(t[0]), t, k);
      } else if (typeof t == "object")
        return typeof t.data == "string" && (t.data = JSON.parse(t.data)), Array.isArray(t.data) && (t.fields || (t.fields = t.meta && t.meta.fields || a), t.fields || (t.fields = Array.isArray(t.data[0]) ? t.fields : typeof t.data[0] == "object" ? Object.keys(t.data[0]) : []), Array.isArray(t.data[0]) || typeof t.data[0] == "object" || (t.data = [t.data])), M(t.fields || [], t.data || [], k);
      throw new Error("Unable to serialize unrecognized input");
      function M(r, y, I) {
        var b = "";
        typeof r == "string" && (r = JSON.parse(r)), typeof y == "string" && (y = JSON.parse(y));
        var x = Array.isArray(r) && 0 < r.length, R = !Array.isArray(y[0]);
        if (x && n) {
          for (var S = 0; S < r.length; S++)
            0 < S && (b += s), b += T(r[S], S);
          0 < y.length && (b += d);
        }
        for (var o = 0; o < y.length; o++) {
          var _ = x ? r.length : y[o].length, v = !1, C = x ? Object.keys(y[o]).length === 0 : y[o].length === 0;
          if (I && !x && (v = I === "greedy" ? y[o].join("").trim() === "" : y[o].length === 1 && y[o][0].length === 0), I === "greedy" && x) {
            for (var l = [], p = 0; p < _; p++) {
              var E = R ? r[p] : p;
              l.push(y[o][E]);
            }
            v = l.join("").trim() === "";
          }
          if (!v) {
            for (var u = 0; u < _; u++) {
              0 < u && !C && (b += s);
              var B = x && R ? r[u] : u;
              b += T(y[o][B], u);
            }
            o < y.length - 1 && (!I || 0 < _ && !C) && (b += d);
          }
        }
        return b;
      }
      function T(r, y) {
        if (r == null)
          return "";
        if (r.constructor === Date)
          return JSON.stringify(r).slice(1, 25);
        var I = !1;
        w && typeof r == "string" && w.test(r) && (r = "'" + r, I = !0);
        var b = r.toString().replace(h, O);
        return (I = I || i === !0 || typeof i == "function" && i(r, y) || Array.isArray(i) && i[y] || function(x, R) {
          for (var S = 0; S < R.length; S++)
            if (-1 < x.indexOf(R[S]))
              return !0;
          return !1;
        }(b, f.BAD_DELIMITERS) || -1 < b.indexOf(s) || b.charAt(0) === " " || b.charAt(b.length - 1) === " ") ? c + b + c : b;
      }
    } };
    if (f.RECORD_SEP = String.fromCharCode(30), f.UNIT_SEP = String.fromCharCode(31), f.BYTE_ORDER_MARK = "\uFEFF", f.BAD_DELIMITERS = ["\r", `
`, '"', f.BYTE_ORDER_MARK], f.WORKERS_SUPPORTED = !L && !!g.Worker, f.NODE_STREAM_INPUT = 1, f.LocalChunkSize = 10485760, f.RemoteChunkSize = 5242880, f.DefaultDelimiter = ",", f.Parser = ae, f.ParserHandle = ue, f.NetworkStreamer = te, f.FileStreamer = ie, f.StringStreamer = Z, f.ReadableStreamStreamer = re, g.jQuery) {
      var G = g.jQuery;
      G.fn.parse = function(t) {
        var e = t.config || {}, i = [];
        return this.each(function(d) {
          if (!(G(this).prop("tagName").toUpperCase() === "INPUT" && G(this).attr("type").toLowerCase() === "file" && g.FileReader) || !this.files || this.files.length === 0)
            return !0;
          for (var c = 0; c < this.files.length; c++)
            i.push({ file: this.files[c], inputElem: this, instanceConfig: G.extend({}, e) });
        }), n(), this;
        function n() {
          if (i.length !== 0) {
            var d, c, O, k, a = i[0];
            if (m(t.before)) {
              var w = t.before(a.file, a.inputElem);
              if (typeof w == "object") {
                if (w.action === "abort")
                  return d = "AbortError", c = a.file, O = a.inputElem, k = w.reason, void (m(t.error) && t.error({ name: d }, c, O, k));
                if (w.action === "skip")
                  return void s();
                typeof w.config == "object" && (a.instanceConfig = G.extend(a.instanceConfig, w.config));
              } else if (w === "skip")
                return void s();
            }
            var h = a.instanceConfig.complete;
            a.instanceConfig.complete = function(M) {
              m(h) && h(M, a.file, a.inputElem), s();
            }, f.parse(a.file, a.instanceConfig);
          } else
            m(t.complete) && t.complete();
        }
        function s() {
          i.splice(0, 1), n();
        }
      };
    }
    function q(t) {
      this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, function(e) {
        var i = oe(e);
        i.chunkSize = parseInt(i.chunkSize), e.step || e.chunk || (i.chunkSize = null), this._handle = new ue(i), (this._handle.streamer = this)._config = i;
      }.call(this, t), this.parseChunk = function(e, i) {
        if (this.isFirstChunk && m(this._config.beforeFirstChunk)) {
          var n = this._config.beforeFirstChunk(e);
          n !== void 0 && (e = n);
        }
        this.isFirstChunk = !1, this._halted = !1;
        var s = this._partialLine + e;
        this._partialLine = "";
        var d = this._handle.parse(s, this._baseIndex, !this._finished);
        if (!this._handle.paused() && !this._handle.aborted()) {
          var c = d.meta.cursor;
          this._finished || (this._partialLine = s.substring(c - this._baseIndex), this._baseIndex = c), d && d.data && (this._rowCount += d.data.length);
          var O = this._finished || this._config.preview && this._rowCount >= this._config.preview;
          if (H)
            g.postMessage({ results: d, workerId: f.WORKER_ID, finished: O });
          else if (m(this._config.chunk) && !i) {
            if (this._config.chunk(d, this._handle), this._handle.paused() || this._handle.aborted())
              return void (this._halted = !0);
            d = void 0, this._completeResults = void 0;
          }
          return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(d.data), this._completeResults.errors = this._completeResults.errors.concat(d.errors), this._completeResults.meta = d.meta), this._completed || !O || !m(this._config.complete) || d && d.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), O || d && d.meta.paused || this._nextChunk(), d;
        }
        this._halted = !0;
      }, this._sendError = function(e) {
        m(this._config.error) ? this._config.error(e) : H && this._config.error && g.postMessage({ workerId: f.WORKER_ID, error: e, finished: !1 });
      };
    }
    function te(t) {
      var e;
      (t = t || {}).chunkSize || (t.chunkSize = f.RemoteChunkSize), q.call(this, t), this._nextChunk = L ? function() {
        this._readChunk(), this._chunkLoaded();
      } : function() {
        this._readChunk();
      }, this.stream = function(i) {
        this._input = i, this._nextChunk();
      }, this._readChunk = function() {
        if (this._finished)
          this._chunkLoaded();
        else {
          if (e = new XMLHttpRequest(), this._config.withCredentials && (e.withCredentials = this._config.withCredentials), L || (e.onload = N(this._chunkLoaded, this), e.onerror = N(this._chunkError, this)), e.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !L), this._config.downloadRequestHeaders) {
            var i = this._config.downloadRequestHeaders;
            for (var n in i)
              e.setRequestHeader(n, i[n]);
          }
          if (this._config.chunkSize) {
            var s = this._start + this._config.chunkSize - 1;
            e.setRequestHeader("Range", "bytes=" + this._start + "-" + s);
          }
          try {
            e.send(this._config.downloadRequestBody);
          } catch (d) {
            this._chunkError(d.message);
          }
          L && e.status === 0 && this._chunkError();
        }
      }, this._chunkLoaded = function() {
        e.readyState === 4 && (e.status < 200 || 400 <= e.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : e.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(i) {
          var n = i.getResponseHeader("Content-Range");
          return n === null ? -1 : parseInt(n.substring(n.lastIndexOf("/") + 1));
        }(e), this.parseChunk(e.responseText)));
      }, this._chunkError = function(i) {
        var n = e.statusText || i;
        this._sendError(new Error(n));
      };
    }
    function ie(t) {
      var e, i;
      (t = t || {}).chunkSize || (t.chunkSize = f.LocalChunkSize), q.call(this, t);
      var n = typeof FileReader < "u";
      this.stream = function(s) {
        this._input = s, i = s.slice || s.webkitSlice || s.mozSlice, n ? ((e = new FileReader()).onload = N(this._chunkLoaded, this), e.onerror = N(this._chunkError, this)) : e = new FileReaderSync(), this._nextChunk();
      }, this._nextChunk = function() {
        this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
      }, this._readChunk = function() {
        var s = this._input;
        if (this._config.chunkSize) {
          var d = Math.min(this._start + this._config.chunkSize, this._input.size);
          s = i.call(s, this._start, d);
        }
        var c = e.readAsText(s, this._config.encoding);
        n || this._chunkLoaded({ target: { result: c } });
      }, this._chunkLoaded = function(s) {
        this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(s.target.result);
      }, this._chunkError = function() {
        this._sendError(e.error);
      };
    }
    function Z(t) {
      var e;
      q.call(this, t = t || {}), this.stream = function(i) {
        return e = i, this._nextChunk();
      }, this._nextChunk = function() {
        if (!this._finished) {
          var i, n = this._config.chunkSize;
          return n ? (i = e.substring(0, n), e = e.substring(n)) : (i = e, e = ""), this._finished = !e, this.parseChunk(i);
        }
      };
    }
    function re(t) {
      q.call(this, t = t || {});
      var e = [], i = !0, n = !1;
      this.pause = function() {
        q.prototype.pause.apply(this, arguments), this._input.pause();
      }, this.resume = function() {
        q.prototype.resume.apply(this, arguments), this._input.resume();
      }, this.stream = function(s) {
        this._input = s, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
      }, this._checkIsFinished = function() {
        n && e.length === 1 && (this._finished = !0);
      }, this._nextChunk = function() {
        this._checkIsFinished(), e.length ? this.parseChunk(e.shift()) : i = !0;
      }, this._streamData = N(function(s) {
        try {
          e.push(typeof s == "string" ? s : s.toString(this._config.encoding)), i && (i = !1, this._checkIsFinished(), this.parseChunk(e.shift()));
        } catch (d) {
          this._streamError(d);
        }
      }, this), this._streamError = N(function(s) {
        this._streamCleanUp(), this._sendError(s);
      }, this), this._streamEnd = N(function() {
        this._streamCleanUp(), n = !0, this._streamData("");
      }, this), this._streamCleanUp = N(function() {
        this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
      }, this);
    }
    function ue(t) {
      var e, i, n, s = Math.pow(2, 53), d = -s, c = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, O = /^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/, k = this, a = 0, w = 0, h = !1, M = !1, T = [], r = { data: [], errors: [], meta: {} };
      if (m(t.step)) {
        var y = t.step;
        t.step = function(o) {
          if (r = o, x())
            b();
          else {
            if (b(), r.data.length === 0)
              return;
            a += o.data.length, t.preview && a > t.preview ? i.abort() : (r.data = r.data[0], y(r, k));
          }
        };
      }
      function I(o) {
        return t.skipEmptyLines === "greedy" ? o.join("").trim() === "" : o.length === 1 && o[0].length === 0;
      }
      function b() {
        return r && n && (S("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + f.DefaultDelimiter + "'"), n = !1), t.skipEmptyLines && (r.data = r.data.filter(function(o) {
          return !I(o);
        })), x() && function() {
          if (!r)
            return;
          function o(v, C) {
            m(t.transformHeader) && (v = t.transformHeader(v, C)), T.push(v);
          }
          if (Array.isArray(r.data[0])) {
            for (var _ = 0; x() && _ < r.data.length; _++)
              r.data[_].forEach(o);
            r.data.splice(0, 1);
          } else
            r.data.forEach(o);
        }(), function() {
          if (!r || !t.header && !t.dynamicTyping && !t.transform)
            return r;
          function o(v, C) {
            var l, p = t.header ? {} : [];
            for (l = 0; l < v.length; l++) {
              var E = l, u = v[l];
              t.header && (E = l >= T.length ? "__parsed_extra" : T[l]), t.transform && (u = t.transform(u, E)), u = R(E, u), E === "__parsed_extra" ? (p[E] = p[E] || [], p[E].push(u)) : p[E] = u;
            }
            return t.header && (l > T.length ? S("FieldMismatch", "TooManyFields", "Too many fields: expected " + T.length + " fields but parsed " + l, w + C) : l < T.length && S("FieldMismatch", "TooFewFields", "Too few fields: expected " + T.length + " fields but parsed " + l, w + C)), p;
          }
          var _ = 1;
          return !r.data.length || Array.isArray(r.data[0]) ? (r.data = r.data.map(o), _ = r.data.length) : r.data = o(r.data, 0), t.header && r.meta && (r.meta.fields = T), w += _, r;
        }();
      }
      function x() {
        return t.header && T.length === 0;
      }
      function R(o, _) {
        return v = o, t.dynamicTypingFunction && t.dynamicTyping[v] === void 0 && (t.dynamicTyping[v] = t.dynamicTypingFunction(v)), (t.dynamicTyping[v] || t.dynamicTyping) === !0 ? _ === "true" || _ === "TRUE" || _ !== "false" && _ !== "FALSE" && (function(C) {
          if (c.test(C)) {
            var l = parseFloat(C);
            if (d < l && l < s)
              return !0;
          }
          return !1;
        }(_) ? parseFloat(_) : O.test(_) ? new Date(_) : _ === "" ? null : _) : _;
        var v;
      }
      function S(o, _, v, C) {
        var l = { type: o, code: _, message: v };
        C !== void 0 && (l.row = C), r.errors.push(l);
      }
      this.parse = function(o, _, v) {
        var C = t.quoteChar || '"';
        if (t.newline || (t.newline = function(E, u) {
          E = E.substring(0, 1048576);
          var B = new RegExp(Y(u) + "([^]*?)" + Y(u), "gm"), z = (E = E.replace(B, "")).split("\r"), F = E.split(`
`), K = 1 < F.length && F[0].length < z[0].length;
          if (z.length === 1 || K)
            return `
`;
          for (var U = 0, j = 0; j < z.length; j++)
            z[j][0] === `
` && U++;
          return U >= z.length / 2 ? `\r
` : "\r";
        }(o, C)), n = !1, t.delimiter)
          m(t.delimiter) && (t.delimiter = t.delimiter(o), r.meta.delimiter = t.delimiter);
        else {
          var l = function(E, u, B, z, F) {
            var K, U, j, A;
            F = F || [",", "	", "|", ";", f.RECORD_SEP, f.UNIT_SEP];
            for (var W = 0; W < F.length; W++) {
              var D = F[W], $ = 0, P = 0, le = 0;
              j = void 0;
              for (var X = new ae({ comments: z, delimiter: D, newline: u, preview: 10 }).parse(E), ne = 0; ne < X.data.length; ne++)
                if (B && I(X.data[ne]))
                  le++;
                else {
                  var V = X.data[ne].length;
                  P += V, j !== void 0 ? 0 < V && ($ += Math.abs(V - j), j = V) : j = V;
                }
              0 < X.data.length && (P /= X.data.length - le), (U === void 0 || $ <= U) && (A === void 0 || A < P) && 1.99 < P && (U = $, K = D, A = P);
            }
            return { successful: !!(t.delimiter = K), bestDelimiter: K };
          }(o, t.newline, t.skipEmptyLines, t.comments, t.delimitersToGuess);
          l.successful ? t.delimiter = l.bestDelimiter : (n = !0, t.delimiter = f.DefaultDelimiter), r.meta.delimiter = t.delimiter;
        }
        var p = oe(t);
        return t.preview && t.header && p.preview++, e = o, i = new ae(p), r = i.parse(e, _, v), b(), h ? { meta: { paused: !0 } } : r || { meta: { paused: !1 } };
      }, this.paused = function() {
        return h;
      }, this.pause = function() {
        h = !0, i.abort(), e = m(t.chunk) ? "" : e.substring(i.getCharIndex());
      }, this.resume = function() {
        k.streamer._halted ? (h = !1, k.streamer.parseChunk(e, !0)) : setTimeout(k.resume, 3);
      }, this.aborted = function() {
        return M;
      }, this.abort = function() {
        M = !0, i.abort(), r.meta.aborted = !0, m(t.complete) && t.complete(r), e = "";
      };
    }
    function Y(t) {
      return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function ae(t) {
      var e, i = (t = t || {}).delimiter, n = t.newline, s = t.comments, d = t.step, c = t.preview, O = t.fastMode, k = e = t.quoteChar === void 0 || t.quoteChar === null ? '"' : t.quoteChar;
      if (t.escapeChar !== void 0 && (k = t.escapeChar), (typeof i != "string" || -1 < f.BAD_DELIMITERS.indexOf(i)) && (i = ","), s === i)
        throw new Error("Comment character same as delimiter");
      s === !0 ? s = "#" : (typeof s != "string" || -1 < f.BAD_DELIMITERS.indexOf(s)) && (s = !1), n !== `
` && n !== "\r" && n !== `\r
` && (n = `
`);
      var a = 0, w = !1;
      this.parse = function(h, M, T) {
        if (typeof h != "string")
          throw new Error("Input must be a string");
        var r = h.length, y = i.length, I = n.length, b = s.length, x = m(d), R = [], S = [], o = [], _ = a = 0;
        if (!h)
          return A();
        if (O || O !== !1 && h.indexOf(e) === -1) {
          for (var v = h.split(n), C = 0; C < v.length; C++) {
            if (o = v[C], a += o.length, C !== v.length - 1)
              a += n.length;
            else if (T)
              return A();
            if (!s || o.substring(0, b) !== s) {
              if (x) {
                if (R = [], F(o.split(i)), W(), w)
                  return A();
              } else
                F(o.split(i));
              if (c && c <= C)
                return R = R.slice(0, c), A(!0);
            }
          }
          return A();
        }
        for (var l = h.indexOf(i, a), p = h.indexOf(n, a), E = new RegExp(Y(k) + Y(e), "g"), u = h.indexOf(e, a); ; )
          if (h[a] !== e)
            if (s && o.length === 0 && h.substring(a, a + b) === s) {
              if (p === -1)
                return A();
              a = p + I, p = h.indexOf(n, a), l = h.indexOf(i, a);
            } else if (l !== -1 && (l < p || p === -1))
              o.push(h.substring(a, l)), a = l + y, l = h.indexOf(i, a);
            else {
              if (p === -1)
                break;
              if (o.push(h.substring(a, p)), j(p + I), x && (W(), w))
                return A();
              if (c && R.length >= c)
                return A(!0);
            }
          else
            for (u = a, a++; ; ) {
              if ((u = h.indexOf(e, u + 1)) === -1)
                return T || S.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: R.length, index: a }), U();
              if (u === r - 1)
                return U(h.substring(a, u).replace(E, e));
              if (e !== k || h[u + 1] !== k) {
                if (e === k || u === 0 || h[u - 1] !== k) {
                  l !== -1 && l < u + 1 && (l = h.indexOf(i, u + 1)), p !== -1 && p < u + 1 && (p = h.indexOf(n, u + 1));
                  var B = K(p === -1 ? l : Math.min(l, p));
                  if (h.substr(u + 1 + B, y) === i) {
                    o.push(h.substring(a, u).replace(E, e)), h[a = u + 1 + B + y] !== e && (u = h.indexOf(e, a)), l = h.indexOf(i, a), p = h.indexOf(n, a);
                    break;
                  }
                  var z = K(p);
                  if (h.substring(u + 1 + z, u + 1 + z + I) === n) {
                    if (o.push(h.substring(a, u).replace(E, e)), j(u + 1 + z + I), l = h.indexOf(i, a), u = h.indexOf(e, a), x && (W(), w))
                      return A();
                    if (c && R.length >= c)
                      return A(!0);
                    break;
                  }
                  S.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: R.length, index: a }), u++;
                }
              } else
                u++;
            }
        return U();
        function F(D) {
          R.push(D), _ = a;
        }
        function K(D) {
          var $ = 0;
          if (D !== -1) {
            var P = h.substring(u + 1, D);
            P && P.trim() === "" && ($ = P.length);
          }
          return $;
        }
        function U(D) {
          return T || (D === void 0 && (D = h.substring(a)), o.push(D), a = r, F(o), x && W()), A();
        }
        function j(D) {
          a = D, F(o), o = [], p = h.indexOf(n, a);
        }
        function A(D) {
          return { data: R, errors: S, meta: { delimiter: i, linebreak: n, aborted: w, truncated: !!D, cursor: _ + (M || 0) } };
        }
        function W() {
          d(A()), R = [], S = [];
        }
      }, this.abort = function() {
        w = !0;
      }, this.getCharIndex = function() {
        return a;
      };
    }
    function pe(t) {
      var e = t.data, i = ee[e.workerId], n = !1;
      if (e.error)
        i.userError(e.error, e.file);
      else if (e.results && e.results.data) {
        var s = { abort: function() {
          n = !0, fe(e.workerId, { data: [], errors: [], meta: { aborted: !0 } });
        }, pause: de, resume: de };
        if (m(i.userStep)) {
          for (var d = 0; d < e.results.data.length && (i.userStep({ data: e.results.data[d], errors: e.results.errors, meta: e.results.meta }, s), !n); d++)
            ;
          delete e.results;
        } else
          m(i.userChunk) && (i.userChunk(e.results, s, e.file), delete e.results);
      }
      e.finished && !n && fe(e.workerId, e.results);
    }
    function fe(t, e) {
      var i = ee[t];
      m(i.userComplete) && i.userComplete(e), i.terminate(), delete ee[t];
    }
    function de() {
      throw new Error("Not implemented.");
    }
    function oe(t) {
      if (typeof t != "object" || t === null)
        return t;
      var e = Array.isArray(t) ? [] : {};
      for (var i in t)
        e[i] = oe(t[i]);
      return e;
    }
    function N(t, e) {
      return function() {
        t.apply(e, arguments);
      };
    }
    function m(t) {
      return typeof t == "function";
    }
    return H && (g.onmessage = function(t) {
      var e = t.data;
      if (f.WORKER_ID === void 0 && e && (f.WORKER_ID = e.workerId), typeof e.input == "string")
        g.postMessage({ workerId: f.WORKER_ID, results: f.parse(e.input, e.config), finished: !0 });
      else if (g.File && e.input instanceof File || e.input instanceof Object) {
        var i = f.parse(e.input, e.config);
        i && g.postMessage({ workerId: f.WORKER_ID, results: i, finished: !0 });
      }
    }), (te.prototype = Object.create(q.prototype)).constructor = te, (ie.prototype = Object.create(q.prototype)).constructor = ie, (Z.prototype = Object.create(Z.prototype)).constructor = Z, (re.prototype = Object.create(q.prototype)).constructor = re, f;
  });
})(he);
const me = he.exports, ve = /* @__PURE__ */ ge({
  __proto__: null,
  default: me
}, [he.exports]);
export {
  ve as p
};
