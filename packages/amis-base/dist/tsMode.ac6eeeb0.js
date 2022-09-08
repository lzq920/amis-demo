import { e as x, U as P, M as H, a as L, R as V, l as b, t as B } from "./editor.main.a362f63c.js";
var U = globalThis && globalThis.__awaiter || function(t, r, e, n) {
  function o(i) {
    return i instanceof e ? i : new e(function(a) {
      a(i);
    });
  }
  return new (e || (e = Promise))(function(i, a) {
    function c(u) {
      try {
        s(n.next(u));
      } catch (f) {
        a(f);
      }
    }
    function l(u) {
      try {
        s(n.throw(u));
      } catch (f) {
        a(f);
      }
    }
    function s(u) {
      u.done ? i(u.value) : o(u.value).then(c, l);
    }
    s((n = n.apply(t, r || [])).next());
  });
}, z = globalThis && globalThis.__generator || function(t, r) {
  var e = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, o, i, a;
  return a = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function c(s) {
    return function(u) {
      return l([s, u]);
    };
  }
  function l(s) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; e; )
      try {
        if (n = 1, o && (i = s[0] & 2 ? o.return : s[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, s[1])).done)
          return i;
        switch (o = 0, i && (s = [s[0] & 2, i.value]), s[0]) {
          case 0:
          case 1:
            i = s;
            break;
          case 4:
            return e.label++, { value: s[1], done: !1 };
          case 5:
            e.label++, o = s[1], s = [0];
            continue;
          case 7:
            s = e.ops.pop(), e.trys.pop();
            continue;
          default:
            if (i = e.trys, !(i = i.length > 0 && i[i.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              e = 0;
              continue;
            }
            if (s[0] === 3 && (!i || s[1] > i[0] && s[1] < i[3])) {
              e.label = s[1];
              break;
            }
            if (s[0] === 6 && e.label < i[1]) {
              e.label = i[1], i = s;
              break;
            }
            if (i && e.label < i[2]) {
              e.label = i[2], e.ops.push(s);
              break;
            }
            i[2] && e.ops.pop(), e.trys.pop();
            continue;
        }
        s = r.call(t, e);
      } catch (u) {
        s = [6, u], o = 0;
      } finally {
        n = i = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}, G = function() {
  function t(r, e) {
    var n = this;
    this._modeId = r, this._defaults = e, this._worker = null, this._client = null, this._configChangeListener = this._defaults.onDidChange(function() {
      return n._stopWorker();
    }), this._updateExtraLibsToken = 0, this._extraLibsChangeListener = this._defaults.onDidExtraLibsChange(function() {
      return n._updateExtraLibs();
    });
  }
  return t.prototype._stopWorker = function() {
    this._worker && (this._worker.dispose(), this._worker = null), this._client = null;
  }, t.prototype.dispose = function() {
    this._configChangeListener.dispose(), this._extraLibsChangeListener.dispose(), this._stopWorker();
  }, t.prototype._updateExtraLibs = function() {
    return U(this, void 0, void 0, function() {
      var r, e;
      return z(this, function(n) {
        switch (n.label) {
          case 0:
            return this._worker ? (r = ++this._updateExtraLibsToken, [4, this._worker.getProxy()]) : [2];
          case 1:
            return e = n.sent(), this._updateExtraLibsToken !== r ? [2] : (e.updateExtraLibs(this._defaults.getExtraLibs()), [2]);
        }
      });
    });
  }, t.prototype._getClient = function() {
    var r = this;
    if (!this._client) {
      this._worker = x.createWebWorker({
        moduleId: "vs/language/typescript/tsWorker",
        label: this._modeId,
        keepIdleModels: !0,
        createData: {
          compilerOptions: this._defaults.getCompilerOptions(),
          extraLibs: this._defaults.getExtraLibs(),
          customWorkerPath: this._defaults.workerOptions.customWorkerPath,
          inlayHintsOptions: this._defaults.inlayHintsOptions
        }
      });
      var e = this._worker.getProxy();
      this._defaults.getEagerModelSync() && (e = e.then(function(n) {
        return r._worker ? r._worker.withSyncedResources(x.getModels().filter(function(o) {
          return o.getLanguageId() === r._modeId;
        }).map(function(o) {
          return o.uri;
        })) : n;
      })), this._client = e;
    }
    return this._client;
  }, t.prototype.getLanguageServiceWorker = function() {
    for (var r = this, e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    var o;
    return this._getClient().then(function(i) {
      o = i;
    }).then(function(i) {
      if (r._worker)
        return r._worker.withSyncedResources(e);
    }).then(function(i) {
      return o;
    });
  }, t;
}(), d = {};
d["lib.d.ts"] = !0;
d["lib.dom.d.ts"] = !0;
d["lib.dom.iterable.d.ts"] = !0;
d["lib.es2015.collection.d.ts"] = !0;
d["lib.es2015.core.d.ts"] = !0;
d["lib.es2015.d.ts"] = !0;
d["lib.es2015.generator.d.ts"] = !0;
d["lib.es2015.iterable.d.ts"] = !0;
d["lib.es2015.promise.d.ts"] = !0;
d["lib.es2015.proxy.d.ts"] = !0;
d["lib.es2015.reflect.d.ts"] = !0;
d["lib.es2015.symbol.d.ts"] = !0;
d["lib.es2015.symbol.wellknown.d.ts"] = !0;
d["lib.es2016.array.include.d.ts"] = !0;
d["lib.es2016.d.ts"] = !0;
d["lib.es2016.full.d.ts"] = !0;
d["lib.es2017.d.ts"] = !0;
d["lib.es2017.full.d.ts"] = !0;
d["lib.es2017.intl.d.ts"] = !0;
d["lib.es2017.object.d.ts"] = !0;
d["lib.es2017.sharedmemory.d.ts"] = !0;
d["lib.es2017.string.d.ts"] = !0;
d["lib.es2017.typedarrays.d.ts"] = !0;
d["lib.es2018.asyncgenerator.d.ts"] = !0;
d["lib.es2018.asynciterable.d.ts"] = !0;
d["lib.es2018.d.ts"] = !0;
d["lib.es2018.full.d.ts"] = !0;
d["lib.es2018.intl.d.ts"] = !0;
d["lib.es2018.promise.d.ts"] = !0;
d["lib.es2018.regexp.d.ts"] = !0;
d["lib.es2019.array.d.ts"] = !0;
d["lib.es2019.d.ts"] = !0;
d["lib.es2019.full.d.ts"] = !0;
d["lib.es2019.object.d.ts"] = !0;
d["lib.es2019.string.d.ts"] = !0;
d["lib.es2019.symbol.d.ts"] = !0;
d["lib.es2020.bigint.d.ts"] = !0;
d["lib.es2020.d.ts"] = !0;
d["lib.es2020.full.d.ts"] = !0;
d["lib.es2020.intl.d.ts"] = !0;
d["lib.es2020.promise.d.ts"] = !0;
d["lib.es2020.sharedmemory.d.ts"] = !0;
d["lib.es2020.string.d.ts"] = !0;
d["lib.es2020.symbol.wellknown.d.ts"] = !0;
d["lib.es2021.d.ts"] = !0;
d["lib.es2021.full.d.ts"] = !0;
d["lib.es2021.promise.d.ts"] = !0;
d["lib.es2021.string.d.ts"] = !0;
d["lib.es2021.weakref.d.ts"] = !0;
d["lib.es5.d.ts"] = !0;
d["lib.es6.d.ts"] = !0;
d["lib.esnext.d.ts"] = !0;
d["lib.esnext.full.d.ts"] = !0;
d["lib.esnext.intl.d.ts"] = !0;
d["lib.esnext.promise.d.ts"] = !0;
d["lib.esnext.string.d.ts"] = !0;
d["lib.esnext.weakref.d.ts"] = !0;
d["lib.scripthost.d.ts"] = !0;
d["lib.webworker.d.ts"] = !0;
d["lib.webworker.importscripts.d.ts"] = !0;
d["lib.webworker.iterable.d.ts"] = !0;
var A = globalThis && globalThis.__extends || function() {
  var t = function(r, e) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, o) {
      n.__proto__ = o;
    } || function(n, o) {
      for (var i in o)
        Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i]);
    }, t(r, e);
  };
  return function(r, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    t(r, e);
    function n() {
      this.constructor = r;
    }
    r.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  };
}(), N = globalThis && globalThis.__assign || function() {
  return N = Object.assign || function(t) {
    for (var r, e = 1, n = arguments.length; e < n; e++) {
      r = arguments[e];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
    }
    return t;
  }, N.apply(this, arguments);
}, w = globalThis && globalThis.__awaiter || function(t, r, e, n) {
  function o(i) {
    return i instanceof e ? i : new e(function(a) {
      a(i);
    });
  }
  return new (e || (e = Promise))(function(i, a) {
    function c(u) {
      try {
        s(n.next(u));
      } catch (f) {
        a(f);
      }
    }
    function l(u) {
      try {
        s(n.throw(u));
      } catch (f) {
        a(f);
      }
    }
    function s(u) {
      u.done ? i(u.value) : o(u.value).then(c, l);
    }
    s((n = n.apply(t, r || [])).next());
  });
}, S = globalThis && globalThis.__generator || function(t, r) {
  var e = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, o, i, a;
  return a = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function c(s) {
    return function(u) {
      return l([s, u]);
    };
  }
  function l(s) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; e; )
      try {
        if (n = 1, o && (i = s[0] & 2 ? o.return : s[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, s[1])).done)
          return i;
        switch (o = 0, i && (s = [s[0] & 2, i.value]), s[0]) {
          case 0:
          case 1:
            i = s;
            break;
          case 4:
            return e.label++, { value: s[1], done: !1 };
          case 5:
            e.label++, o = s[1], s = [0];
            continue;
          case 7:
            s = e.ops.pop(), e.trys.pop();
            continue;
          default:
            if (i = e.trys, !(i = i.length > 0 && i[i.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              e = 0;
              continue;
            }
            if (s[0] === 3 && (!i || s[1] > i[0] && s[1] < i[3])) {
              e.label = s[1];
              break;
            }
            if (s[0] === 6 && e.label < i[1]) {
              e.label = i[1], i = s;
              break;
            }
            if (i && e.label < i[2]) {
              e.label = i[2], e.ops.push(s);
              break;
            }
            i[2] && e.ops.pop(), e.trys.pop();
            continue;
        }
        s = r.call(t, e);
      } catch (u) {
        s = [6, u], o = 0;
      } finally {
        n = i = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}, I;
(function(t) {
  t[t.None = 0] = "None", t[t.Block = 1] = "Block", t[t.Smart = 2] = "Smart";
})(I || (I = {}));
function M(t, r, e) {
  if (e === void 0 && (e = 0), typeof t == "string")
    return t;
  if (t === void 0)
    return "";
  var n = "";
  if (e) {
    n += r;
    for (var o = 0; o < e; o++)
      n += "  ";
  }
  if (n += t.messageText, e++, t.next)
    for (var i = 0, a = t.next; i < a.length; i++) {
      var c = a[i];
      n += M(c, r, e);
    }
  return n;
}
function T(t) {
  return t ? t.map(function(r) {
    return r.text;
  }).join("") : "";
}
var C = function() {
  function t(r) {
    this._worker = r;
  }
  return t.prototype._textSpanToRange = function(r, e) {
    var n = r.getPositionAt(e.start), o = r.getPositionAt(e.start + e.length), i = n.lineNumber, a = n.column, c = o.lineNumber, l = o.column;
    return { startLineNumber: i, startColumn: a, endLineNumber: c, endColumn: l };
  }, t;
}(), J = function() {
  function t(r) {
    this._worker = r, this._libFiles = {}, this._hasFetchedLibFiles = !1, this._fetchLibFilesPromise = null;
  }
  return t.prototype.isLibFile = function(r) {
    return r && r.path.indexOf("/lib.") === 0 ? !!d[r.path.slice(1)] : !1;
  }, t.prototype.getOrCreateModel = function(r) {
    var e = P.parse(r), n = x.getModel(e);
    if (n)
      return n;
    if (this.isLibFile(e) && this._hasFetchedLibFiles)
      return x.createModel(this._libFiles[e.path.slice(1)], "typescript", e);
    var o = B.getExtraLibs()[r];
    return o ? x.createModel(o.content, "typescript", e) : null;
  }, t.prototype._containsLibFile = function(r) {
    for (var e = 0, n = r; e < n.length; e++) {
      var o = n[e];
      if (this.isLibFile(o))
        return !0;
    }
    return !1;
  }, t.prototype.fetchLibFilesIfNecessary = function(r) {
    return w(this, void 0, void 0, function() {
      return S(this, function(e) {
        switch (e.label) {
          case 0:
            return this._containsLibFile(r) ? [4, this._fetchLibFiles()] : [2];
          case 1:
            return e.sent(), [2];
        }
      });
    });
  }, t.prototype._fetchLibFiles = function() {
    var r = this;
    return this._fetchLibFilesPromise || (this._fetchLibFilesPromise = this._worker().then(function(e) {
      return e.getLibFiles();
    }).then(function(e) {
      r._hasFetchedLibFiles = !0, r._libFiles = e;
    })), this._fetchLibFilesPromise;
  }, t;
}(), F;
(function(t) {
  t[t.Warning = 0] = "Warning", t[t.Error = 1] = "Error", t[t.Suggestion = 2] = "Suggestion", t[t.Message = 3] = "Message";
})(F || (F = {}));
var Q = function(t) {
  A(r, t);
  function r(e, n, o, i) {
    var a = t.call(this, i) || this;
    a._libFiles = e, a._defaults = n, a._selector = o, a._disposables = [], a._listener = /* @__PURE__ */ Object.create(null);
    var c = function(u) {
      if (u.getLanguageId() === o) {
        var f = function() {
          var m = a._defaults.getDiagnosticsOptions().onlyVisible;
          m ? u.isAttachedToEditor() && a._doValidate(u) : a._doValidate(u);
        }, p, g = u.onDidChangeContent(function() {
          clearTimeout(p), p = window.setTimeout(f, 500);
        }), h = u.onDidChangeAttached(function() {
          var m = a._defaults.getDiagnosticsOptions().onlyVisible;
          m && (u.isAttachedToEditor() ? f() : x.setModelMarkers(u, a._selector, []));
        });
        a._listener[u.uri.toString()] = {
          dispose: function() {
            g.dispose(), h.dispose(), clearTimeout(p);
          }
        }, f();
      }
    }, l = function(u) {
      x.setModelMarkers(u, a._selector, []);
      var f = u.uri.toString();
      a._listener[f] && (a._listener[f].dispose(), delete a._listener[f]);
    };
    a._disposables.push(x.onDidCreateModel(function(u) {
      return c(u);
    })), a._disposables.push(x.onWillDisposeModel(l)), a._disposables.push(x.onDidChangeModelLanguage(function(u) {
      l(u.model), c(u.model);
    })), a._disposables.push({
      dispose: function() {
        for (var u = 0, f = x.getModels(); u < f.length; u++) {
          var p = f[u];
          l(p);
        }
      }
    });
    var s = function() {
      for (var u = 0, f = x.getModels(); u < f.length; u++) {
        var p = f[u];
        l(p), c(p);
      }
    };
    return a._disposables.push(a._defaults.onDidChange(s)), a._disposables.push(a._defaults.onDidExtraLibsChange(s)), x.getModels().forEach(function(u) {
      return c(u);
    }), a;
  }
  return r.prototype.dispose = function() {
    this._disposables.forEach(function(e) {
      return e && e.dispose();
    }), this._disposables = [];
  }, r.prototype._doValidate = function(e) {
    return w(this, void 0, void 0, function() {
      var n, o, i, a, c, l, s, u, f, p = this;
      return S(this, function(g) {
        switch (g.label) {
          case 0:
            return [4, this._worker(e.uri)];
          case 1:
            return n = g.sent(), e.isDisposed() ? [2] : (o = [], i = this._defaults.getDiagnosticsOptions(), a = i.noSyntaxValidation, c = i.noSemanticValidation, l = i.noSuggestionDiagnostics, a || o.push(n.getSyntacticDiagnostics(e.uri.toString())), c || o.push(n.getSemanticDiagnostics(e.uri.toString())), l || o.push(n.getSuggestionDiagnostics(e.uri.toString())), [4, Promise.all(o)]);
          case 2:
            return s = g.sent(), !s || e.isDisposed() ? [2] : (u = s.reduce(function(h, m) {
              return m.concat(h);
            }, []).filter(function(h) {
              return (p._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore || []).indexOf(h.code) === -1;
            }), f = u.map(function(h) {
              return h.relatedInformation || [];
            }).reduce(function(h, m) {
              return m.concat(h);
            }, []).map(function(h) {
              return h.file ? P.parse(h.file.fileName) : null;
            }), [4, this._libFiles.fetchLibFilesIfNecessary(f)]);
          case 3:
            return g.sent(), e.isDisposed() ? [2] : (x.setModelMarkers(e, this._selector, u.map(function(h) {
              return p._convertDiagnostics(e, h);
            })), [2]);
        }
      });
    });
  }, r.prototype._convertDiagnostics = function(e, n) {
    var o = n.start || 0, i = n.length || 1, a = e.getPositionAt(o), c = a.lineNumber, l = a.column, s = e.getPositionAt(o + i), u = s.lineNumber, f = s.column, p = [];
    return n.reportsUnnecessary && p.push(H.Unnecessary), n.reportsDeprecated && p.push(H.Deprecated), {
      severity: this._tsDiagnosticCategoryToMarkerSeverity(n.category),
      startLineNumber: c,
      startColumn: l,
      endLineNumber: u,
      endColumn: f,
      message: M(n.messageText, `
`),
      code: n.code.toString(),
      tags: p,
      relatedInformation: this._convertRelatedInformation(e, n.relatedInformation)
    };
  }, r.prototype._convertRelatedInformation = function(e, n) {
    var o = this;
    if (!n)
      return [];
    var i = [];
    return n.forEach(function(a) {
      var c = e;
      if (a.file && (c = o._libFiles.getOrCreateModel(a.file.fileName)), !!c) {
        var l = a.start || 0, s = a.length || 1, u = c.getPositionAt(l), f = u.lineNumber, p = u.column, g = c.getPositionAt(l + s), h = g.lineNumber, m = g.column;
        i.push({
          resource: c.uri,
          startLineNumber: f,
          startColumn: p,
          endLineNumber: h,
          endColumn: m,
          message: M(a.messageText, `
`)
        });
      }
    }), i;
  }, r.prototype._tsDiagnosticCategoryToMarkerSeverity = function(e) {
    switch (e) {
      case F.Error:
        return L.Error;
      case F.Message:
        return L.Info;
      case F.Warning:
        return L.Warning;
      case F.Suggestion:
        return L.Hint;
    }
    return L.Info;
  }, r;
}(C), $ = function(t) {
  A(r, t);
  function r() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return Object.defineProperty(r.prototype, "triggerCharacters", {
    get: function() {
      return ["."];
    },
    enumerable: !1,
    configurable: !0
  }), r.prototype.provideCompletionItems = function(e, n, o, i) {
    return w(this, void 0, void 0, function() {
      var a, c, l, s, u, f, p;
      return S(this, function(g) {
        switch (g.label) {
          case 0:
            return a = e.getWordUntilPosition(n), c = new V(n.lineNumber, a.startColumn, n.lineNumber, a.endColumn), l = e.uri, s = e.getOffsetAt(n), [4, this._worker(l)];
          case 1:
            return u = g.sent(), e.isDisposed() ? [2] : [4, u.getCompletionsAtPosition(l.toString(), s)];
          case 2:
            return f = g.sent(), !f || e.isDisposed() ? [2] : (p = f.entries.map(function(h) {
              var m, y = c;
              if (h.replacementSpan) {
                var _ = e.getPositionAt(h.replacementSpan.start), O = e.getPositionAt(h.replacementSpan.start + h.replacementSpan.length);
                y = new V(_.lineNumber, _.column, O.lineNumber, O.column);
              }
              var E = [];
              return ((m = h.kindModifiers) === null || m === void 0 ? void 0 : m.indexOf("deprecated")) !== -1 && E.push(b.CompletionItemTag.Deprecated), {
                uri: l,
                position: n,
                offset: s,
                range: y,
                label: h.name,
                insertText: h.name,
                sortText: h.sortText,
                kind: r.convertKind(h.kind),
                tags: E
              };
            }), [2, {
              suggestions: p
            }]);
        }
      });
    });
  }, r.prototype.resolveCompletionItem = function(e, n) {
    return w(this, void 0, void 0, function() {
      var o, i, a, c, l, s;
      return S(this, function(u) {
        switch (u.label) {
          case 0:
            return o = e, i = o.uri, a = o.position, c = o.offset, [4, this._worker(i)];
          case 1:
            return l = u.sent(), [4, l.getCompletionEntryDetails(i.toString(), c, o.label)];
          case 2:
            return s = u.sent(), s ? [2, {
              uri: i,
              position: a,
              label: s.name,
              kind: r.convertKind(s.kind),
              detail: T(s.displayParts),
              documentation: {
                value: r.createDocumentationString(s)
              }
            }] : [2, o];
        }
      });
    });
  }, r.convertKind = function(e) {
    switch (e) {
      case v.primitiveType:
      case v.keyword:
        return b.CompletionItemKind.Keyword;
      case v.variable:
      case v.localVariable:
        return b.CompletionItemKind.Variable;
      case v.memberVariable:
      case v.memberGetAccessor:
      case v.memberSetAccessor:
        return b.CompletionItemKind.Field;
      case v.function:
      case v.memberFunction:
      case v.constructSignature:
      case v.callSignature:
      case v.indexSignature:
        return b.CompletionItemKind.Function;
      case v.enum:
        return b.CompletionItemKind.Enum;
      case v.module:
        return b.CompletionItemKind.Module;
      case v.class:
        return b.CompletionItemKind.Class;
      case v.interface:
        return b.CompletionItemKind.Interface;
      case v.warning:
        return b.CompletionItemKind.File;
    }
    return b.CompletionItemKind.Property;
  }, r.createDocumentationString = function(e) {
    var n = T(e.documentation);
    if (e.tags)
      for (var o = 0, i = e.tags; o < i.length; o++) {
        var a = i[o];
        n += `

` + W(a);
      }
    return n;
  }, r;
}(C);
function W(t) {
  var r = "*@" + t.name + "*";
  if (t.name === "param" && t.text) {
    var e = t.text, n = e[0], o = e.slice(1);
    r += "`" + n.text + "`", o.length > 0 && (r += " \u2014 " + o.map(function(i) {
      return i.text;
    }).join(" "));
  } else
    Array.isArray(t.text) ? r += " \u2014 " + t.text.map(function(i) {
      return i.text;
    }).join(" ") : t.text && (r += " \u2014 " + t.text);
  return r;
}
var q = function(t) {
  A(r, t);
  function r() {
    var e = t !== null && t.apply(this, arguments) || this;
    return e.signatureHelpTriggerCharacters = ["(", ","], e;
  }
  return r._toSignatureHelpTriggerReason = function(e) {
    switch (e.triggerKind) {
      case b.SignatureHelpTriggerKind.TriggerCharacter:
        return e.triggerCharacter ? e.isRetrigger ? { kind: "retrigger", triggerCharacter: e.triggerCharacter } : { kind: "characterTyped", triggerCharacter: e.triggerCharacter } : { kind: "invoked" };
      case b.SignatureHelpTriggerKind.ContentChange:
        return e.isRetrigger ? { kind: "retrigger" } : { kind: "invoked" };
      case b.SignatureHelpTriggerKind.Invoke:
      default:
        return { kind: "invoked" };
    }
  }, r.prototype.provideSignatureHelp = function(e, n, o, i) {
    return w(this, void 0, void 0, function() {
      var a, c, l, s, u;
      return S(this, function(f) {
        switch (f.label) {
          case 0:
            return a = e.uri, c = e.getOffsetAt(n), [4, this._worker(a)];
          case 1:
            return l = f.sent(), e.isDisposed() ? [2] : [4, l.getSignatureHelpItems(a.toString(), c, {
              triggerReason: r._toSignatureHelpTriggerReason(i)
            })];
          case 2:
            return s = f.sent(), !s || e.isDisposed() ? [2] : (u = {
              activeSignature: s.selectedItemIndex,
              activeParameter: s.argumentIndex,
              signatures: []
            }, s.items.forEach(function(p) {
              var g = {
                label: "",
                parameters: []
              };
              g.documentation = {
                value: T(p.documentation)
              }, g.label += T(p.prefixDisplayParts), p.parameters.forEach(function(h, m, y) {
                var _ = T(h.displayParts), O = {
                  label: _,
                  documentation: {
                    value: T(h.documentation)
                  }
                };
                g.label += _, g.parameters.push(O), m < y.length - 1 && (g.label += T(p.separatorDisplayParts));
              }), g.label += T(p.suffixDisplayParts), u.signatures.push(g);
            }), [2, {
              value: u,
              dispose: function() {
              }
            }]);
        }
      });
    });
  }, r;
}(C), X = function(t) {
  A(r, t);
  function r() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return r.prototype.provideHover = function(e, n, o) {
    return w(this, void 0, void 0, function() {
      var i, a, c, l, s, u, f;
      return S(this, function(p) {
        switch (p.label) {
          case 0:
            return i = e.uri, a = e.getOffsetAt(n), [4, this._worker(i)];
          case 1:
            return c = p.sent(), e.isDisposed() ? [2] : [4, c.getQuickInfoAtPosition(i.toString(), a)];
          case 2:
            return l = p.sent(), !l || e.isDisposed() ? [2] : (s = T(l.documentation), u = l.tags ? l.tags.map(function(g) {
              return W(g);
            }).join(`  

`) : "", f = T(l.displayParts), [2, {
              range: this._textSpanToRange(e, l.textSpan),
              contents: [
                {
                  value: "```typescript\n" + f + "\n```\n"
                },
                {
                  value: s + (u ? `

` + u : "")
                }
              ]
            }]);
        }
      });
    });
  }, r;
}(C), Y = function(t) {
  A(r, t);
  function r() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return r.prototype.provideDocumentHighlights = function(e, n, o) {
    return w(this, void 0, void 0, function() {
      var i, a, c, l, s = this;
      return S(this, function(u) {
        switch (u.label) {
          case 0:
            return i = e.uri, a = e.getOffsetAt(n), [4, this._worker(i)];
          case 1:
            return c = u.sent(), e.isDisposed() ? [2] : [4, c.getOccurrencesAtPosition(i.toString(), a)];
          case 2:
            return l = u.sent(), !l || e.isDisposed() ? [2] : [2, l.map(function(f) {
              return {
                range: s._textSpanToRange(e, f.textSpan),
                kind: f.isWriteAccess ? b.DocumentHighlightKind.Write : b.DocumentHighlightKind.Text
              };
            })];
        }
      });
    });
  }, r;
}(C), Z = function(t) {
  A(r, t);
  function r(e, n) {
    var o = t.call(this, n) || this;
    return o._libFiles = e, o;
  }
  return r.prototype.provideDefinition = function(e, n, o) {
    return w(this, void 0, void 0, function() {
      var i, a, c, l, s, u, f, p, g;
      return S(this, function(h) {
        switch (h.label) {
          case 0:
            return i = e.uri, a = e.getOffsetAt(n), [4, this._worker(i)];
          case 1:
            return c = h.sent(), e.isDisposed() ? [2] : [4, c.getDefinitionAtPosition(i.toString(), a)];
          case 2:
            return l = h.sent(), !l || e.isDisposed() ? [2] : [4, this._libFiles.fetchLibFilesIfNecessary(l.map(function(m) {
              return P.parse(m.fileName);
            }))];
          case 3:
            if (h.sent(), e.isDisposed())
              return [2];
            for (s = [], u = 0, f = l; u < f.length; u++)
              p = f[u], g = this._libFiles.getOrCreateModel(p.fileName), g && s.push({
                uri: g.uri,
                range: this._textSpanToRange(g, p.textSpan)
              });
            return [2, s];
        }
      });
    });
  }, r;
}(C), ee = function(t) {
  A(r, t);
  function r(e, n) {
    var o = t.call(this, n) || this;
    return o._libFiles = e, o;
  }
  return r.prototype.provideReferences = function(e, n, o, i) {
    return w(this, void 0, void 0, function() {
      var a, c, l, s, u, f, p, g, h;
      return S(this, function(m) {
        switch (m.label) {
          case 0:
            return a = e.uri, c = e.getOffsetAt(n), [4, this._worker(a)];
          case 1:
            return l = m.sent(), e.isDisposed() ? [2] : [4, l.getReferencesAtPosition(a.toString(), c)];
          case 2:
            return s = m.sent(), !s || e.isDisposed() ? [2] : [4, this._libFiles.fetchLibFilesIfNecessary(s.map(function(y) {
              return P.parse(y.fileName);
            }))];
          case 3:
            if (m.sent(), e.isDisposed())
              return [2];
            for (u = [], f = 0, p = s; f < p.length; f++)
              g = p[f], h = this._libFiles.getOrCreateModel(g.fileName), h && u.push({
                uri: h.uri,
                range: this._textSpanToRange(h, g.textSpan)
              });
            return [2, u];
        }
      });
    });
  }, r;
}(C), te = function(t) {
  A(r, t);
  function r() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return r.prototype.provideDocumentSymbols = function(e, n) {
    return w(this, void 0, void 0, function() {
      var o, i, a, c, l, s = this;
      return S(this, function(u) {
        switch (u.label) {
          case 0:
            return o = e.uri, [4, this._worker(o)];
          case 1:
            return i = u.sent(), e.isDisposed() ? [2] : [4, i.getNavigationBarItems(o.toString())];
          case 2:
            return a = u.sent(), !a || e.isDisposed() ? [2] : (c = function(f, p, g) {
              var h = {
                name: p.text,
                detail: "",
                kind: k[p.kind] || b.SymbolKind.Variable,
                range: s._textSpanToRange(e, p.spans[0]),
                selectionRange: s._textSpanToRange(e, p.spans[0]),
                tags: []
              };
              if (g && (h.containerName = g), p.childItems && p.childItems.length > 0)
                for (var m = 0, y = p.childItems; m < y.length; m++) {
                  var _ = y[m];
                  c(f, _, h.name);
                }
              f.push(h);
            }, l = [], a.forEach(function(f) {
              return c(l, f);
            }), [2, l]);
        }
      });
    });
  }, r;
}(C), v = function() {
  function t() {
  }
  return t.unknown = "", t.keyword = "keyword", t.script = "script", t.module = "module", t.class = "class", t.interface = "interface", t.type = "type", t.enum = "enum", t.variable = "var", t.localVariable = "local var", t.function = "function", t.localFunction = "local function", t.memberFunction = "method", t.memberGetAccessor = "getter", t.memberSetAccessor = "setter", t.memberVariable = "property", t.constructorImplementation = "constructor", t.callSignature = "call", t.indexSignature = "index", t.constructSignature = "construct", t.parameter = "parameter", t.typeParameter = "type parameter", t.primitiveType = "primitive type", t.label = "label", t.alias = "alias", t.const = "const", t.let = "let", t.warning = "warning", t;
}(), k = /* @__PURE__ */ Object.create(null);
k[v.module] = b.SymbolKind.Module;
k[v.class] = b.SymbolKind.Class;
k[v.enum] = b.SymbolKind.Enum;
k[v.interface] = b.SymbolKind.Interface;
k[v.memberFunction] = b.SymbolKind.Method;
k[v.memberVariable] = b.SymbolKind.Property;
k[v.memberGetAccessor] = b.SymbolKind.Property;
k[v.memberSetAccessor] = b.SymbolKind.Property;
k[v.variable] = b.SymbolKind.Variable;
k[v.const] = b.SymbolKind.Variable;
k[v.localVariable] = b.SymbolKind.Variable;
k[v.variable] = b.SymbolKind.Variable;
k[v.function] = b.SymbolKind.Function;
k[v.localFunction] = b.SymbolKind.Function;
var D = function(t) {
  A(r, t);
  function r() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return r._convertOptions = function(e) {
    return {
      ConvertTabsToSpaces: e.insertSpaces,
      TabSize: e.tabSize,
      IndentSize: e.tabSize,
      IndentStyle: I.Smart,
      NewLineCharacter: `
`,
      InsertSpaceAfterCommaDelimiter: !0,
      InsertSpaceAfterSemicolonInForStatements: !0,
      InsertSpaceBeforeAndAfterBinaryOperators: !0,
      InsertSpaceAfterKeywordsInControlFlowStatements: !0,
      InsertSpaceAfterFunctionKeywordForAnonymousFunctions: !0,
      InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: !1,
      InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: !1,
      InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: !1,
      PlaceOpenBraceOnNewLineForControlBlocks: !1,
      PlaceOpenBraceOnNewLineForFunctions: !1
    };
  }, r.prototype._convertTextChanges = function(e, n) {
    return {
      text: n.newText,
      range: this._textSpanToRange(e, n.span)
    };
  }, r;
}(C), re = function(t) {
  A(r, t);
  function r() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return r.prototype.provideDocumentRangeFormattingEdits = function(e, n, o, i) {
    return w(this, void 0, void 0, function() {
      var a, c, l, s, u, f = this;
      return S(this, function(p) {
        switch (p.label) {
          case 0:
            return a = e.uri, c = e.getOffsetAt({
              lineNumber: n.startLineNumber,
              column: n.startColumn
            }), l = e.getOffsetAt({
              lineNumber: n.endLineNumber,
              column: n.endColumn
            }), [4, this._worker(a)];
          case 1:
            return s = p.sent(), e.isDisposed() ? [2] : [4, s.getFormattingEditsForRange(a.toString(), c, l, D._convertOptions(o))];
          case 2:
            return u = p.sent(), !u || e.isDisposed() ? [2] : [2, u.map(function(g) {
              return f._convertTextChanges(e, g);
            })];
        }
      });
    });
  }, r;
}(D), ne = function(t) {
  A(r, t);
  function r() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return Object.defineProperty(r.prototype, "autoFormatTriggerCharacters", {
    get: function() {
      return [";", "}", `
`];
    },
    enumerable: !1,
    configurable: !0
  }), r.prototype.provideOnTypeFormattingEdits = function(e, n, o, i, a) {
    return w(this, void 0, void 0, function() {
      var c, l, s, u, f = this;
      return S(this, function(p) {
        switch (p.label) {
          case 0:
            return c = e.uri, l = e.getOffsetAt(n), [4, this._worker(c)];
          case 1:
            return s = p.sent(), e.isDisposed() ? [2] : [4, s.getFormattingEditsAfterKeystroke(c.toString(), l, o, D._convertOptions(i))];
          case 2:
            return u = p.sent(), !u || e.isDisposed() ? [2] : [2, u.map(function(g) {
              return f._convertTextChanges(e, g);
            })];
        }
      });
    });
  }, r;
}(D), ie = function(t) {
  A(r, t);
  function r() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return r.prototype.provideCodeActions = function(e, n, o, i) {
    return w(this, void 0, void 0, function() {
      var a, c, l, s, u, f, p, g, h = this;
      return S(this, function(m) {
        switch (m.label) {
          case 0:
            return a = e.uri, c = e.getOffsetAt({
              lineNumber: n.startLineNumber,
              column: n.startColumn
            }), l = e.getOffsetAt({
              lineNumber: n.endLineNumber,
              column: n.endColumn
            }), s = D._convertOptions(e.getOptions()), u = o.markers.filter(function(y) {
              return y.code;
            }).map(function(y) {
              return y.code;
            }).map(Number), [4, this._worker(a)];
          case 1:
            return f = m.sent(), e.isDisposed() ? [2] : [4, f.getCodeFixesAtPosition(a.toString(), c, l, u, s)];
          case 2:
            return p = m.sent(), !p || e.isDisposed() ? [2, { actions: [], dispose: function() {
            } }] : (g = p.filter(function(y) {
              return y.changes.filter(function(_) {
                return _.isNewFile;
              }).length === 0;
            }).map(function(y) {
              return h._tsCodeFixActionToMonacoCodeAction(e, o, y);
            }), [2, {
              actions: g,
              dispose: function() {
              }
            }]);
        }
      });
    });
  }, r.prototype._tsCodeFixActionToMonacoCodeAction = function(e, n, o) {
    for (var i = [], a = 0, c = o.changes; a < c.length; a++)
      for (var l = c[a], s = 0, u = l.textChanges; s < u.length; s++) {
        var f = u[s];
        i.push({
          resource: e.uri,
          edit: {
            range: this._textSpanToRange(e, f.span),
            text: f.newText
          }
        });
      }
    var p = {
      title: o.description,
      edit: { edits: i },
      diagnostics: n.markers,
      kind: "quickfix"
    };
    return p;
  }, r;
}(D), se = function(t) {
  A(r, t);
  function r(e, n) {
    var o = t.call(this, n) || this;
    return o._libFiles = e, o;
  }
  return r.prototype.provideRenameEdits = function(e, n, o, i) {
    return w(this, void 0, void 0, function() {
      var a, c, l, s, u, f, p, g, h, m, y;
      return S(this, function(_) {
        switch (_.label) {
          case 0:
            return a = e.uri, c = a.toString(), l = e.getOffsetAt(n), [4, this._worker(a)];
          case 1:
            return s = _.sent(), e.isDisposed() ? [2] : [4, s.getRenameInfo(c, l, {
              allowRenameOfImportPath: !1
            })];
          case 2:
            if (u = _.sent(), u.canRename === !1)
              return [2, {
                edits: [],
                rejectReason: u.localizedErrorMessage
              }];
            if (u.fileToRename !== void 0)
              throw new Error("Renaming files is not supported.");
            return [4, s.findRenameLocations(
              c,
              l,
              !1,
              !1,
              !1
            )];
          case 3:
            if (f = _.sent(), !f || e.isDisposed())
              return [2];
            for (p = [], g = 0, h = f; g < h.length; g++)
              if (m = h[g], y = this._libFiles.getOrCreateModel(m.fileName), y)
                p.push({
                  resource: y.uri,
                  edit: {
                    range: this._textSpanToRange(y, m.textSpan),
                    text: o
                  }
                });
              else
                throw new Error("Unknown file " + m.fileName + ".");
            return [2, { edits: p }];
        }
      });
    });
  }, r;
}(C), oe = function(t) {
  A(r, t);
  function r() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return r.prototype.provideInlayHints = function(e, n, o) {
    return w(this, void 0, void 0, function() {
      var i, a, c, l, s, u, f = this;
      return S(this, function(p) {
        switch (p.label) {
          case 0:
            return i = e.uri, a = i.toString(), c = e.getOffsetAt({
              lineNumber: n.startLineNumber,
              column: n.startColumn
            }), l = e.getOffsetAt({
              lineNumber: n.endLineNumber,
              column: n.endColumn
            }), [4, this._worker(i)];
          case 1:
            return s = p.sent(), e.isDisposed() ? [2, []] : [4, s.provideInlayHints(a, c, l)];
          case 2:
            return u = p.sent(), [2, u.map(function(g) {
              return N(N({}, g), { position: e.getPositionAt(g.position), kind: f._convertHintKind(g.kind) });
            })];
        }
      });
    });
  }, r.prototype._convertHintKind = function(e) {
    switch (e) {
      case "Parameter":
        return b.InlayHintKind.Parameter;
      case "Type":
        return b.InlayHintKind.Type;
      default:
        return b.InlayHintKind.Other;
    }
  }, r;
}(C), K, R;
function ue(t) {
  R = j(t, "typescript");
}
function ce(t) {
  K = j(t, "javascript");
}
function le() {
  return new Promise(function(t, r) {
    if (!K)
      return r("JavaScript not registered!");
    t(K);
  });
}
function fe() {
  return new Promise(function(t, r) {
    if (!R)
      return r("TypeScript not registered!");
    t(R);
  });
}
function j(t, r) {
  var e = new G(r, t), n = function() {
    for (var i = [], a = 0; a < arguments.length; a++)
      i[a] = arguments[a];
    return e.getLanguageServiceWorker.apply(e, i);
  }, o = new J(n);
  return b.registerCompletionItemProvider(r, new $(n)), b.registerSignatureHelpProvider(r, new q(n)), b.registerHoverProvider(r, new X(n)), b.registerDocumentHighlightProvider(r, new Y(n)), b.registerDefinitionProvider(r, new Z(o, n)), b.registerReferenceProvider(r, new ee(o, n)), b.registerDocumentSymbolProvider(r, new te(n)), b.registerDocumentRangeFormattingEditProvider(r, new re(n)), b.registerOnTypeFormattingEditProvider(r, new ne(n)), b.registerCodeActionProvider(r, new ie(n)), b.registerRenameProvider(r, new se(o, n)), b.registerInlayHintsProvider(r, new oe(n)), new Q(o, t, r, n), n;
}
export {
  le as getJavaScriptWorker,
  fe as getTypeScriptWorker,
  ce as setupJavaScript,
  ue as setupTypeScript
};
