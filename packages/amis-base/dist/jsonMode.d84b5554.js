import { e as y, R as He, l as b, a as F } from "./editor.main.a362f63c.js";
var Ge = 2 * 60 * 1e3, Qe = function() {
  function e(r) {
    var i = this;
    this._defaults = r, this._worker = null, this._idleCheckInterval = window.setInterval(function() {
      return i._checkIfIdle();
    }, 30 * 1e3), this._lastUsedTime = 0, this._configChangeListener = this._defaults.onDidChange(function() {
      return i._stopWorker();
    });
  }
  return e.prototype._stopWorker = function() {
    this._worker && (this._worker.dispose(), this._worker = null), this._client = null;
  }, e.prototype.dispose = function() {
    clearInterval(this._idleCheckInterval), this._configChangeListener.dispose(), this._stopWorker();
  }, e.prototype._checkIfIdle = function() {
    if (!!this._worker) {
      var r = Date.now() - this._lastUsedTime;
      r > Ge && this._stopWorker();
    }
  }, e.prototype._getClient = function() {
    return this._lastUsedTime = Date.now(), this._client || (this._worker = y.createWebWorker({
      moduleId: "vs/language/json/jsonWorker",
      label: this._defaults.languageId,
      createData: {
        languageSettings: this._defaults.diagnosticsOptions,
        languageId: this._defaults.languageId,
        enableSchemaRequest: this._defaults.diagnosticsOptions.enableSchemaRequest
      }
    }), this._client = this._worker.getProxy()), this._client;
  }, e.prototype.getLanguageServiceWorker = function() {
    for (var r = this, i = [], t = 0; t < arguments.length; t++)
      i[t] = arguments[t];
    var n;
    return this._getClient().then(function(a) {
      n = a;
    }).then(function(a) {
      return r._worker.withSyncedResources(i);
    }).then(function(a) {
      return n;
    });
  }, e;
}(), oe;
(function(e) {
  e.MIN_VALUE = -2147483648, e.MAX_VALUE = 2147483647;
})(oe || (oe = {}));
var $;
(function(e) {
  e.MIN_VALUE = 0, e.MAX_VALUE = 2147483647;
})($ || ($ = {}));
var S;
(function(e) {
  function r(t, n) {
    return t === Number.MAX_VALUE && (t = $.MAX_VALUE), n === Number.MAX_VALUE && (n = $.MAX_VALUE), { line: t, character: n };
  }
  e.create = r;
  function i(t) {
    var n = t;
    return s.objectLiteral(n) && s.uinteger(n.line) && s.uinteger(n.character);
  }
  e.is = i;
})(S || (S = {}));
var _;
(function(e) {
  function r(t, n, a, o) {
    if (s.uinteger(t) && s.uinteger(n) && s.uinteger(a) && s.uinteger(o))
      return { start: S.create(t, n), end: S.create(a, o) };
    if (S.is(t) && S.is(n))
      return { start: t, end: n };
    throw new Error("Range#create called with invalid arguments[" + t + ", " + n + ", " + a + ", " + o + "]");
  }
  e.create = r;
  function i(t) {
    var n = t;
    return s.objectLiteral(n) && S.is(n.start) && S.is(n.end);
  }
  e.is = i;
})(_ || (_ = {}));
var K;
(function(e) {
  function r(t, n) {
    return { uri: t, range: n };
  }
  e.create = r;
  function i(t) {
    var n = t;
    return s.defined(n) && _.is(n.range) && (s.string(n.uri) || s.undefined(n.uri));
  }
  e.is = i;
})(K || (K = {}));
var se;
(function(e) {
  function r(t, n, a, o) {
    return { targetUri: t, targetRange: n, targetSelectionRange: a, originSelectionRange: o };
  }
  e.create = r;
  function i(t) {
    var n = t;
    return s.defined(n) && _.is(n.targetRange) && s.string(n.targetUri) && (_.is(n.targetSelectionRange) || s.undefined(n.targetSelectionRange)) && (_.is(n.originSelectionRange) || s.undefined(n.originSelectionRange));
  }
  e.is = i;
})(se || (se = {}));
var ee;
(function(e) {
  function r(t, n, a, o) {
    return {
      red: t,
      green: n,
      blue: a,
      alpha: o
    };
  }
  e.create = r;
  function i(t) {
    var n = t;
    return s.numberRange(n.red, 0, 1) && s.numberRange(n.green, 0, 1) && s.numberRange(n.blue, 0, 1) && s.numberRange(n.alpha, 0, 1);
  }
  e.is = i;
})(ee || (ee = {}));
var ue;
(function(e) {
  function r(t, n) {
    return {
      range: t,
      color: n
    };
  }
  e.create = r;
  function i(t) {
    var n = t;
    return _.is(n.range) && ee.is(n.color);
  }
  e.is = i;
})(ue || (ue = {}));
var ce;
(function(e) {
  function r(t, n, a) {
    return {
      label: t,
      textEdit: n,
      additionalTextEdits: a
    };
  }
  e.create = r;
  function i(t) {
    var n = t;
    return s.string(n.label) && (s.undefined(n.textEdit) || M.is(n)) && (s.undefined(n.additionalTextEdits) || s.typedArray(n.additionalTextEdits, M.is));
  }
  e.is = i;
})(ce || (ce = {}));
var W;
(function(e) {
  e.Comment = "comment", e.Imports = "imports", e.Region = "region";
})(W || (W = {}));
var fe;
(function(e) {
  function r(t, n, a, o, u) {
    var c = {
      startLine: t,
      endLine: n
    };
    return s.defined(a) && (c.startCharacter = a), s.defined(o) && (c.endCharacter = o), s.defined(u) && (c.kind = u), c;
  }
  e.create = r;
  function i(t) {
    var n = t;
    return s.uinteger(n.startLine) && s.uinteger(n.startLine) && (s.undefined(n.startCharacter) || s.uinteger(n.startCharacter)) && (s.undefined(n.endCharacter) || s.uinteger(n.endCharacter)) && (s.undefined(n.kind) || s.string(n.kind));
  }
  e.is = i;
})(fe || (fe = {}));
var ne;
(function(e) {
  function r(t, n) {
    return {
      location: t,
      message: n
    };
  }
  e.create = r;
  function i(t) {
    var n = t;
    return s.defined(n) && K.is(n.location) && s.string(n.message);
  }
  e.is = i;
})(ne || (ne = {}));
var N;
(function(e) {
  e.Error = 1, e.Warning = 2, e.Information = 3, e.Hint = 4;
})(N || (N = {}));
var de;
(function(e) {
  e.Unnecessary = 1, e.Deprecated = 2;
})(de || (de = {}));
var le;
(function(e) {
  function r(i) {
    var t = i;
    return t != null && s.string(t.href);
  }
  e.is = r;
})(le || (le = {}));
var J;
(function(e) {
  function r(t, n, a, o, u, c) {
    var d = { range: t, message: n };
    return s.defined(a) && (d.severity = a), s.defined(o) && (d.code = o), s.defined(u) && (d.source = u), s.defined(c) && (d.relatedInformation = c), d;
  }
  e.create = r;
  function i(t) {
    var n, a = t;
    return s.defined(a) && _.is(a.range) && s.string(a.message) && (s.number(a.severity) || s.undefined(a.severity)) && (s.integer(a.code) || s.string(a.code) || s.undefined(a.code)) && (s.undefined(a.codeDescription) || s.string((n = a.codeDescription) === null || n === void 0 ? void 0 : n.href)) && (s.string(a.source) || s.undefined(a.source)) && (s.undefined(a.relatedInformation) || s.typedArray(a.relatedInformation, ne.is));
  }
  e.is = i;
})(J || (J = {}));
var U;
(function(e) {
  function r(t, n) {
    for (var a = [], o = 2; o < arguments.length; o++)
      a[o - 2] = arguments[o];
    var u = { title: t, command: n };
    return s.defined(a) && a.length > 0 && (u.arguments = a), u;
  }
  e.create = r;
  function i(t) {
    var n = t;
    return s.defined(n) && s.string(n.title) && s.string(n.command);
  }
  e.is = i;
})(U || (U = {}));
var M;
(function(e) {
  function r(a, o) {
    return { range: a, newText: o };
  }
  e.replace = r;
  function i(a, o) {
    return { range: { start: a, end: a }, newText: o };
  }
  e.insert = i;
  function t(a) {
    return { range: a, newText: "" };
  }
  e.del = t;
  function n(a) {
    var o = a;
    return s.objectLiteral(o) && s.string(o.newText) && _.is(o.range);
  }
  e.is = n;
})(M || (M = {}));
var x;
(function(e) {
  function r(t, n, a) {
    var o = { label: t };
    return n !== void 0 && (o.needsConfirmation = n), a !== void 0 && (o.description = a), o;
  }
  e.create = r;
  function i(t) {
    var n = t;
    return n !== void 0 && s.objectLiteral(n) && s.string(n.label) && (s.boolean(n.needsConfirmation) || n.needsConfirmation === void 0) && (s.string(n.description) || n.description === void 0);
  }
  e.is = i;
})(x || (x = {}));
var w;
(function(e) {
  function r(i) {
    var t = i;
    return typeof t == "string";
  }
  e.is = r;
})(w || (w = {}));
var L;
(function(e) {
  function r(a, o, u) {
    return { range: a, newText: o, annotationId: u };
  }
  e.replace = r;
  function i(a, o, u) {
    return { range: { start: a, end: a }, newText: o, annotationId: u };
  }
  e.insert = i;
  function t(a, o) {
    return { range: a, newText: "", annotationId: o };
  }
  e.del = t;
  function n(a) {
    var o = a;
    return M.is(o) && (x.is(o.annotationId) || w.is(o.annotationId));
  }
  e.is = n;
})(L || (L = {}));
var Y;
(function(e) {
  function r(t, n) {
    return { textDocument: t, edits: n };
  }
  e.create = r;
  function i(t) {
    var n = t;
    return s.defined(n) && G.is(n.textDocument) && Array.isArray(n.edits);
  }
  e.is = i;
})(Y || (Y = {}));
var V;
(function(e) {
  function r(t, n, a) {
    var o = {
      kind: "create",
      uri: t
    };
    return n !== void 0 && (n.overwrite !== void 0 || n.ignoreIfExists !== void 0) && (o.options = n), a !== void 0 && (o.annotationId = a), o;
  }
  e.create = r;
  function i(t) {
    var n = t;
    return n && n.kind === "create" && s.string(n.uri) && (n.options === void 0 || (n.options.overwrite === void 0 || s.boolean(n.options.overwrite)) && (n.options.ignoreIfExists === void 0 || s.boolean(n.options.ignoreIfExists))) && (n.annotationId === void 0 || w.is(n.annotationId));
  }
  e.is = i;
})(V || (V = {}));
var z;
(function(e) {
  function r(t, n, a, o) {
    var u = {
      kind: "rename",
      oldUri: t,
      newUri: n
    };
    return a !== void 0 && (a.overwrite !== void 0 || a.ignoreIfExists !== void 0) && (u.options = a), o !== void 0 && (u.annotationId = o), u;
  }
  e.create = r;
  function i(t) {
    var n = t;
    return n && n.kind === "rename" && s.string(n.oldUri) && s.string(n.newUri) && (n.options === void 0 || (n.options.overwrite === void 0 || s.boolean(n.options.overwrite)) && (n.options.ignoreIfExists === void 0 || s.boolean(n.options.ignoreIfExists))) && (n.annotationId === void 0 || w.is(n.annotationId));
  }
  e.is = i;
})(z || (z = {}));
var H;
(function(e) {
  function r(t, n, a) {
    var o = {
      kind: "delete",
      uri: t
    };
    return n !== void 0 && (n.recursive !== void 0 || n.ignoreIfNotExists !== void 0) && (o.options = n), a !== void 0 && (o.annotationId = a), o;
  }
  e.create = r;
  function i(t) {
    var n = t;
    return n && n.kind === "delete" && s.string(n.uri) && (n.options === void 0 || (n.options.recursive === void 0 || s.boolean(n.options.recursive)) && (n.options.ignoreIfNotExists === void 0 || s.boolean(n.options.ignoreIfNotExists))) && (n.annotationId === void 0 || w.is(n.annotationId));
  }
  e.is = i;
})(H || (H = {}));
var te;
(function(e) {
  function r(i) {
    var t = i;
    return t && (t.changes !== void 0 || t.documentChanges !== void 0) && (t.documentChanges === void 0 || t.documentChanges.every(function(n) {
      return s.string(n.kind) ? V.is(n) || z.is(n) || H.is(n) : Y.is(n);
    }));
  }
  e.is = r;
})(te || (te = {}));
var X = function() {
  function e(r, i) {
    this.edits = r, this.changeAnnotations = i;
  }
  return e.prototype.insert = function(r, i, t) {
    var n, a;
    if (t === void 0 ? n = M.insert(r, i) : w.is(t) ? (a = t, n = L.insert(r, i, t)) : (this.assertChangeAnnotations(this.changeAnnotations), a = this.changeAnnotations.manage(t), n = L.insert(r, i, a)), this.edits.push(n), a !== void 0)
      return a;
  }, e.prototype.replace = function(r, i, t) {
    var n, a;
    if (t === void 0 ? n = M.replace(r, i) : w.is(t) ? (a = t, n = L.replace(r, i, t)) : (this.assertChangeAnnotations(this.changeAnnotations), a = this.changeAnnotations.manage(t), n = L.replace(r, i, a)), this.edits.push(n), a !== void 0)
      return a;
  }, e.prototype.delete = function(r, i) {
    var t, n;
    if (i === void 0 ? t = M.del(r) : w.is(i) ? (n = i, t = L.del(r, i)) : (this.assertChangeAnnotations(this.changeAnnotations), n = this.changeAnnotations.manage(i), t = L.del(r, n)), this.edits.push(t), n !== void 0)
      return n;
  }, e.prototype.add = function(r) {
    this.edits.push(r);
  }, e.prototype.all = function() {
    return this.edits;
  }, e.prototype.clear = function() {
    this.edits.splice(0, this.edits.length);
  }, e.prototype.assertChangeAnnotations = function(r) {
    if (r === void 0)
      throw new Error("Text edit change is not configured to manage change annotations.");
  }, e;
}(), ge = function() {
  function e(r) {
    this._annotations = r === void 0 ? /* @__PURE__ */ Object.create(null) : r, this._counter = 0, this._size = 0;
  }
  return e.prototype.all = function() {
    return this._annotations;
  }, Object.defineProperty(e.prototype, "size", {
    get: function() {
      return this._size;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.manage = function(r, i) {
    var t;
    if (w.is(r) ? t = r : (t = this.nextId(), i = r), this._annotations[t] !== void 0)
      throw new Error("Id " + t + " is already in use.");
    if (i === void 0)
      throw new Error("No annotation provided for id " + t);
    return this._annotations[t] = i, this._size++, t;
  }, e.prototype.nextId = function() {
    return this._counter++, this._counter.toString();
  }, e;
}();
(function() {
  function e(r) {
    var i = this;
    this._textEditChanges = /* @__PURE__ */ Object.create(null), r !== void 0 ? (this._workspaceEdit = r, r.documentChanges ? (this._changeAnnotations = new ge(r.changeAnnotations), r.changeAnnotations = this._changeAnnotations.all(), r.documentChanges.forEach(function(t) {
      if (Y.is(t)) {
        var n = new X(t.edits, i._changeAnnotations);
        i._textEditChanges[t.textDocument.uri] = n;
      }
    })) : r.changes && Object.keys(r.changes).forEach(function(t) {
      var n = new X(r.changes[t]);
      i._textEditChanges[t] = n;
    })) : this._workspaceEdit = {};
  }
  return Object.defineProperty(e.prototype, "edit", {
    get: function() {
      return this.initDocumentChanges(), this._changeAnnotations !== void 0 && (this._changeAnnotations.size === 0 ? this._workspaceEdit.changeAnnotations = void 0 : this._workspaceEdit.changeAnnotations = this._changeAnnotations.all()), this._workspaceEdit;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.getTextEditChange = function(r) {
    if (G.is(r)) {
      if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0)
        throw new Error("Workspace edit is not configured for document changes.");
      var i = { uri: r.uri, version: r.version }, t = this._textEditChanges[i.uri];
      if (!t) {
        var n = [], a = {
          textDocument: i,
          edits: n
        };
        this._workspaceEdit.documentChanges.push(a), t = new X(n, this._changeAnnotations), this._textEditChanges[i.uri] = t;
      }
      return t;
    } else {
      if (this.initChanges(), this._workspaceEdit.changes === void 0)
        throw new Error("Workspace edit is not configured for normal text edit changes.");
      var t = this._textEditChanges[r];
      if (!t) {
        var n = [];
        this._workspaceEdit.changes[r] = n, t = new X(n), this._textEditChanges[r] = t;
      }
      return t;
    }
  }, e.prototype.initDocumentChanges = function() {
    this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0 && (this._changeAnnotations = new ge(), this._workspaceEdit.documentChanges = [], this._workspaceEdit.changeAnnotations = this._changeAnnotations.all());
  }, e.prototype.initChanges = function() {
    this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0 && (this._workspaceEdit.changes = /* @__PURE__ */ Object.create(null));
  }, e.prototype.createFile = function(r, i, t) {
    if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0)
      throw new Error("Workspace edit is not configured for document changes.");
    var n;
    x.is(i) || w.is(i) ? n = i : t = i;
    var a, o;
    if (n === void 0 ? a = V.create(r, t) : (o = w.is(n) ? n : this._changeAnnotations.manage(n), a = V.create(r, t, o)), this._workspaceEdit.documentChanges.push(a), o !== void 0)
      return o;
  }, e.prototype.renameFile = function(r, i, t, n) {
    if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0)
      throw new Error("Workspace edit is not configured for document changes.");
    var a;
    x.is(t) || w.is(t) ? a = t : n = t;
    var o, u;
    if (a === void 0 ? o = z.create(r, i, n) : (u = w.is(a) ? a : this._changeAnnotations.manage(a), o = z.create(r, i, n, u)), this._workspaceEdit.documentChanges.push(o), u !== void 0)
      return u;
  }, e.prototype.deleteFile = function(r, i, t) {
    if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0)
      throw new Error("Workspace edit is not configured for document changes.");
    var n;
    x.is(i) || w.is(i) ? n = i : t = i;
    var a, o;
    if (n === void 0 ? a = H.create(r, t) : (o = w.is(n) ? n : this._changeAnnotations.manage(n), a = H.create(r, t, o)), this._workspaceEdit.documentChanges.push(a), o !== void 0)
      return o;
  }, e;
})();
var he;
(function(e) {
  function r(t) {
    return { uri: t };
  }
  e.create = r;
  function i(t) {
    var n = t;
    return s.defined(n) && s.string(n.uri);
  }
  e.is = i;
})(he || (he = {}));
var ve;
(function(e) {
  function r(t, n) {
    return { uri: t, version: n };
  }
  e.create = r;
  function i(t) {
    var n = t;
    return s.defined(n) && s.string(n.uri) && s.integer(n.version);
  }
  e.is = i;
})(ve || (ve = {}));
var G;
(function(e) {
  function r(t, n) {
    return { uri: t, version: n };
  }
  e.create = r;
  function i(t) {
    var n = t;
    return s.defined(n) && s.string(n.uri) && (n.version === null || s.integer(n.version));
  }
  e.is = i;
})(G || (G = {}));
var pe;
(function(e) {
  function r(t, n, a, o) {
    return { uri: t, languageId: n, version: a, text: o };
  }
  e.create = r;
  function i(t) {
    var n = t;
    return s.defined(n) && s.string(n.uri) && s.string(n.languageId) && s.integer(n.version) && s.string(n.text);
  }
  e.is = i;
})(pe || (pe = {}));
var B;
(function(e) {
  e.PlainText = "plaintext", e.Markdown = "markdown";
})(B || (B = {}));
(function(e) {
  function r(i) {
    var t = i;
    return t === e.PlainText || t === e.Markdown;
  }
  e.is = r;
})(B || (B = {}));
var re;
(function(e) {
  function r(i) {
    var t = i;
    return s.objectLiteral(i) && B.is(t.kind) && s.string(t.value);
  }
  e.is = r;
})(re || (re = {}));
var p;
(function(e) {
  e.Text = 1, e.Method = 2, e.Function = 3, e.Constructor = 4, e.Field = 5, e.Variable = 6, e.Class = 7, e.Interface = 8, e.Module = 9, e.Property = 10, e.Unit = 11, e.Value = 12, e.Enum = 13, e.Keyword = 14, e.Snippet = 15, e.Color = 16, e.File = 17, e.Reference = 18, e.Folder = 19, e.EnumMember = 20, e.Constant = 21, e.Struct = 22, e.Event = 23, e.Operator = 24, e.TypeParameter = 25;
})(p || (p = {}));
var ie;
(function(e) {
  e.PlainText = 1, e.Snippet = 2;
})(ie || (ie = {}));
var me;
(function(e) {
  e.Deprecated = 1;
})(me || (me = {}));
var _e;
(function(e) {
  function r(t, n, a) {
    return { newText: t, insert: n, replace: a };
  }
  e.create = r;
  function i(t) {
    var n = t;
    return n && s.string(n.newText) && _.is(n.insert) && _.is(n.replace);
  }
  e.is = i;
})(_e || (_e = {}));
var ke;
(function(e) {
  e.asIs = 1, e.adjustIndentation = 2;
})(ke || (ke = {}));
var be;
(function(e) {
  function r(i) {
    return { label: i };
  }
  e.create = r;
})(be || (be = {}));
var we;
(function(e) {
  function r(i, t) {
    return { items: i || [], isIncomplete: !!t };
  }
  e.create = r;
})(we || (we = {}));
var Q;
(function(e) {
  function r(t) {
    return t.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
  }
  e.fromPlainText = r;
  function i(t) {
    var n = t;
    return s.string(n) || s.objectLiteral(n) && s.string(n.language) && s.string(n.value);
  }
  e.is = i;
})(Q || (Q = {}));
var Ce;
(function(e) {
  function r(i) {
    var t = i;
    return !!t && s.objectLiteral(t) && (re.is(t.contents) || Q.is(t.contents) || s.typedArray(t.contents, Q.is)) && (i.range === void 0 || _.is(i.range));
  }
  e.is = r;
})(Ce || (Ce = {}));
var Ee;
(function(e) {
  function r(i, t) {
    return t ? { label: i, documentation: t } : { label: i };
  }
  e.create = r;
})(Ee || (Ee = {}));
var Ae;
(function(e) {
  function r(i, t) {
    for (var n = [], a = 2; a < arguments.length; a++)
      n[a - 2] = arguments[a];
    var o = { label: i };
    return s.defined(t) && (o.documentation = t), s.defined(n) ? o.parameters = n : o.parameters = [], o;
  }
  e.create = r;
})(Ae || (Ae = {}));
var Ie;
(function(e) {
  e.Text = 1, e.Read = 2, e.Write = 3;
})(Ie || (Ie = {}));
var ye;
(function(e) {
  function r(i, t) {
    var n = { range: i };
    return s.number(t) && (n.kind = t), n;
  }
  e.create = r;
})(ye || (ye = {}));
var m;
(function(e) {
  e.File = 1, e.Module = 2, e.Namespace = 3, e.Package = 4, e.Class = 5, e.Method = 6, e.Property = 7, e.Field = 8, e.Constructor = 9, e.Enum = 10, e.Interface = 11, e.Function = 12, e.Variable = 13, e.Constant = 14, e.String = 15, e.Number = 16, e.Boolean = 17, e.Array = 18, e.Object = 19, e.Key = 20, e.Null = 21, e.EnumMember = 22, e.Struct = 23, e.Event = 24, e.Operator = 25, e.TypeParameter = 26;
})(m || (m = {}));
var Se;
(function(e) {
  e.Deprecated = 1;
})(Se || (Se = {}));
var Te;
(function(e) {
  function r(i, t, n, a, o) {
    var u = {
      name: i,
      kind: t,
      location: { uri: a, range: n }
    };
    return o && (u.containerName = o), u;
  }
  e.create = r;
})(Te || (Te = {}));
var Re;
(function(e) {
  function r(t, n, a, o, u, c) {
    var d = {
      name: t,
      detail: n,
      kind: a,
      range: o,
      selectionRange: u
    };
    return c !== void 0 && (d.children = c), d;
  }
  e.create = r;
  function i(t) {
    var n = t;
    return n && s.string(n.name) && s.number(n.kind) && _.is(n.range) && _.is(n.selectionRange) && (n.detail === void 0 || s.string(n.detail)) && (n.deprecated === void 0 || s.boolean(n.deprecated)) && (n.children === void 0 || Array.isArray(n.children)) && (n.tags === void 0 || Array.isArray(n.tags));
  }
  e.is = i;
})(Re || (Re = {}));
var Le;
(function(e) {
  e.Empty = "", e.QuickFix = "quickfix", e.Refactor = "refactor", e.RefactorExtract = "refactor.extract", e.RefactorInline = "refactor.inline", e.RefactorRewrite = "refactor.rewrite", e.Source = "source", e.SourceOrganizeImports = "source.organizeImports", e.SourceFixAll = "source.fixAll";
})(Le || (Le = {}));
var Me;
(function(e) {
  function r(t, n) {
    var a = { diagnostics: t };
    return n != null && (a.only = n), a;
  }
  e.create = r;
  function i(t) {
    var n = t;
    return s.defined(n) && s.typedArray(n.diagnostics, J.is) && (n.only === void 0 || s.typedArray(n.only, s.string));
  }
  e.is = i;
})(Me || (Me = {}));
var Pe;
(function(e) {
  function r(t, n, a) {
    var o = { title: t }, u = !0;
    return typeof n == "string" ? (u = !1, o.kind = n) : U.is(n) ? o.command = n : o.edit = n, u && a !== void 0 && (o.kind = a), o;
  }
  e.create = r;
  function i(t) {
    var n = t;
    return n && s.string(n.title) && (n.diagnostics === void 0 || s.typedArray(n.diagnostics, J.is)) && (n.kind === void 0 || s.string(n.kind)) && (n.edit !== void 0 || n.command !== void 0) && (n.command === void 0 || U.is(n.command)) && (n.isPreferred === void 0 || s.boolean(n.isPreferred)) && (n.edit === void 0 || te.is(n.edit));
  }
  e.is = i;
})(Pe || (Pe = {}));
var Ne;
(function(e) {
  function r(t, n) {
    var a = { range: t };
    return s.defined(n) && (a.data = n), a;
  }
  e.create = r;
  function i(t) {
    var n = t;
    return s.defined(n) && _.is(n.range) && (s.undefined(n.command) || U.is(n.command));
  }
  e.is = i;
})(Ne || (Ne = {}));
var xe;
(function(e) {
  function r(t, n) {
    return { tabSize: t, insertSpaces: n };
  }
  e.create = r;
  function i(t) {
    var n = t;
    return s.defined(n) && s.uinteger(n.tabSize) && s.boolean(n.insertSpaces);
  }
  e.is = i;
})(xe || (xe = {}));
var De;
(function(e) {
  function r(t, n, a) {
    return { range: t, target: n, data: a };
  }
  e.create = r;
  function i(t) {
    var n = t;
    return s.defined(n) && _.is(n.range) && (s.undefined(n.target) || s.string(n.target));
  }
  e.is = i;
})(De || (De = {}));
var Fe;
(function(e) {
  function r(t, n) {
    return { range: t, parent: n };
  }
  e.create = r;
  function i(t) {
    var n = t;
    return n !== void 0 && _.is(n.range) && (n.parent === void 0 || e.is(n.parent));
  }
  e.is = i;
})(Fe || (Fe = {}));
var Oe;
(function(e) {
  function r(a, o, u, c) {
    return new Ze(a, o, u, c);
  }
  e.create = r;
  function i(a) {
    var o = a;
    return !!(s.defined(o) && s.string(o.uri) && (s.undefined(o.languageId) || s.string(o.languageId)) && s.uinteger(o.lineCount) && s.func(o.getText) && s.func(o.positionAt) && s.func(o.offsetAt));
  }
  e.is = i;
  function t(a, o) {
    for (var u = a.getText(), c = n(o, function(I, R) {
      var D = I.range.start.line - R.range.start.line;
      return D === 0 ? I.range.start.character - R.range.start.character : D;
    }), d = u.length, g = c.length - 1; g >= 0; g--) {
      var h = c[g], v = a.offsetAt(h.range.start), l = a.offsetAt(h.range.end);
      if (l <= d)
        u = u.substring(0, v) + h.newText + u.substring(l, u.length);
      else
        throw new Error("Overlapping edit");
      d = v;
    }
    return u;
  }
  e.applyEdits = t;
  function n(a, o) {
    if (a.length <= 1)
      return a;
    var u = a.length / 2 | 0, c = a.slice(0, u), d = a.slice(u);
    n(c, o), n(d, o);
    for (var g = 0, h = 0, v = 0; g < c.length && h < d.length; ) {
      var l = o(c[g], d[h]);
      l <= 0 ? a[v++] = c[g++] : a[v++] = d[h++];
    }
    for (; g < c.length; )
      a[v++] = c[g++];
    for (; h < d.length; )
      a[v++] = d[h++];
    return a;
  }
})(Oe || (Oe = {}));
var Ze = function() {
  function e(r, i, t, n) {
    this._uri = r, this._languageId = i, this._version = t, this._content = n, this._lineOffsets = void 0;
  }
  return Object.defineProperty(e.prototype, "uri", {
    get: function() {
      return this._uri;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "languageId", {
    get: function() {
      return this._languageId;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "version", {
    get: function() {
      return this._version;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.getText = function(r) {
    if (r) {
      var i = this.offsetAt(r.start), t = this.offsetAt(r.end);
      return this._content.substring(i, t);
    }
    return this._content;
  }, e.prototype.update = function(r, i) {
    this._content = r.text, this._version = i, this._lineOffsets = void 0;
  }, e.prototype.getLineOffsets = function() {
    if (this._lineOffsets === void 0) {
      for (var r = [], i = this._content, t = !0, n = 0; n < i.length; n++) {
        t && (r.push(n), t = !1);
        var a = i.charAt(n);
        t = a === "\r" || a === `
`, a === "\r" && n + 1 < i.length && i.charAt(n + 1) === `
` && n++;
      }
      t && i.length > 0 && r.push(i.length), this._lineOffsets = r;
    }
    return this._lineOffsets;
  }, e.prototype.positionAt = function(r) {
    r = Math.max(Math.min(r, this._content.length), 0);
    var i = this.getLineOffsets(), t = 0, n = i.length;
    if (n === 0)
      return S.create(0, r);
    for (; t < n; ) {
      var a = Math.floor((t + n) / 2);
      i[a] > r ? n = a : t = a + 1;
    }
    var o = t - 1;
    return S.create(o, r - i[o]);
  }, e.prototype.offsetAt = function(r) {
    var i = this.getLineOffsets();
    if (r.line >= i.length)
      return this._content.length;
    if (r.line < 0)
      return 0;
    var t = i[r.line], n = r.line + 1 < i.length ? i[r.line + 1] : this._content.length;
    return Math.max(Math.min(t + r.character, n), t);
  }, Object.defineProperty(e.prototype, "lineCount", {
    get: function() {
      return this.getLineOffsets().length;
    },
    enumerable: !1,
    configurable: !0
  }), e;
}(), s;
(function(e) {
  var r = Object.prototype.toString;
  function i(l) {
    return typeof l < "u";
  }
  e.defined = i;
  function t(l) {
    return typeof l > "u";
  }
  e.undefined = t;
  function n(l) {
    return l === !0 || l === !1;
  }
  e.boolean = n;
  function a(l) {
    return r.call(l) === "[object String]";
  }
  e.string = a;
  function o(l) {
    return r.call(l) === "[object Number]";
  }
  e.number = o;
  function u(l, I, R) {
    return r.call(l) === "[object Number]" && I <= l && l <= R;
  }
  e.numberRange = u;
  function c(l) {
    return r.call(l) === "[object Number]" && -2147483648 <= l && l <= 2147483647;
  }
  e.integer = c;
  function d(l) {
    return r.call(l) === "[object Number]" && 0 <= l && l <= 2147483647;
  }
  e.uinteger = d;
  function g(l) {
    return r.call(l) === "[object Function]";
  }
  e.func = g;
  function h(l) {
    return l !== null && typeof l == "object";
  }
  e.objectLiteral = h;
  function v(l, I) {
    return Array.isArray(l) && l.every(I);
  }
  e.typedArray = v;
})(s || (s = {}));
var Ke = function() {
  function e(r, i, t) {
    var n = this;
    this._languageId = r, this._worker = i, this._disposables = [], this._listener = /* @__PURE__ */ Object.create(null);
    var a = function(u) {
      var c = u.getLanguageId();
      if (c === n._languageId) {
        var d;
        n._listener[u.uri.toString()] = u.onDidChangeContent(function() {
          clearTimeout(d), d = window.setTimeout(function() {
            return n._doValidate(u.uri, c);
          }, 500);
        }), n._doValidate(u.uri, c);
      }
    }, o = function(u) {
      y.setModelMarkers(u, n._languageId, []);
      var c = u.uri.toString(), d = n._listener[c];
      d && (d.dispose(), delete n._listener[c]);
    };
    this._disposables.push(y.onDidCreateModel(a)), this._disposables.push(y.onWillDisposeModel(function(u) {
      o(u), n._resetSchema(u.uri);
    })), this._disposables.push(y.onDidChangeModelLanguage(function(u) {
      o(u.model), a(u.model), n._resetSchema(u.model.uri);
    })), this._disposables.push(t.onDidChange(function(u) {
      y.getModels().forEach(function(c) {
        c.getLanguageId() === n._languageId && (o(c), a(c));
      });
    })), this._disposables.push({
      dispose: function() {
        y.getModels().forEach(o);
        for (var u in n._listener)
          n._listener[u].dispose();
      }
    }), y.getModels().forEach(a);
  }
  return e.prototype.dispose = function() {
    this._disposables.forEach(function(r) {
      return r && r.dispose();
    }), this._disposables = [];
  }, e.prototype._resetSchema = function(r) {
    this._worker().then(function(i) {
      i.resetSchema(r.toString());
    });
  }, e.prototype._doValidate = function(r, i) {
    this._worker(r).then(function(t) {
      return t.doValidation(r.toString()).then(function(n) {
        var a = n.map(function(u) {
          return nn(r, u);
        }), o = y.getModel(r);
        o && o.getLanguageId() === i && y.setModelMarkers(o, i, a);
      });
    }).then(void 0, function(t) {
      console.error(t);
    });
  }, e;
}();
function en(e) {
  switch (e) {
    case N.Error:
      return F.Error;
    case N.Warning:
      return F.Warning;
    case N.Information:
      return F.Info;
    case N.Hint:
      return F.Hint;
    default:
      return F.Info;
  }
}
function nn(e, r) {
  var i = typeof r.code == "number" ? String(r.code) : r.code;
  return {
    severity: en(r.severity),
    startLineNumber: r.range.start.line + 1,
    startColumn: r.range.start.character + 1,
    endLineNumber: r.range.end.line + 1,
    endColumn: r.range.end.character + 1,
    message: r.message,
    code: i,
    source: r.source
  };
}
function ae(e) {
  if (!!e)
    return { character: e.column - 1, line: e.lineNumber - 1 };
}
function Be(e) {
  if (!!e)
    return {
      start: {
        line: e.startLineNumber - 1,
        character: e.startColumn - 1
      },
      end: { line: e.endLineNumber - 1, character: e.endColumn - 1 }
    };
}
function T(e) {
  if (!!e)
    return new He(e.start.line + 1, e.start.character + 1, e.end.line + 1, e.end.character + 1);
}
function tn(e) {
  return typeof e.insert < "u" && typeof e.replace < "u";
}
function rn(e) {
  var r = b.CompletionItemKind;
  switch (e) {
    case p.Text:
      return r.Text;
    case p.Method:
      return r.Method;
    case p.Function:
      return r.Function;
    case p.Constructor:
      return r.Constructor;
    case p.Field:
      return r.Field;
    case p.Variable:
      return r.Variable;
    case p.Class:
      return r.Class;
    case p.Interface:
      return r.Interface;
    case p.Module:
      return r.Module;
    case p.Property:
      return r.Property;
    case p.Unit:
      return r.Unit;
    case p.Value:
      return r.Value;
    case p.Enum:
      return r.Enum;
    case p.Keyword:
      return r.Keyword;
    case p.Snippet:
      return r.Snippet;
    case p.Color:
      return r.Color;
    case p.File:
      return r.File;
    case p.Reference:
      return r.Reference;
  }
  return r.Property;
}
function q(e) {
  if (!!e)
    return {
      range: T(e.range),
      text: e.newText
    };
}
function an(e) {
  return e && e.command === "editor.action.triggerSuggest" ? { id: e.command, title: e.title, arguments: e.arguments } : void 0;
}
var on = function() {
  function e(r) {
    this._worker = r;
  }
  return Object.defineProperty(e.prototype, "triggerCharacters", {
    get: function() {
      return [" ", ":", '"'];
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.provideCompletionItems = function(r, i, t, n) {
    var a = r.uri;
    return this._worker(a).then(function(o) {
      return o.doComplete(a.toString(), ae(i));
    }).then(function(o) {
      if (!!o) {
        var u = r.getWordUntilPosition(i), c = new He(i.lineNumber, u.startColumn, i.lineNumber, u.endColumn), d = o.items.map(function(g) {
          var h = {
            label: g.label,
            insertText: g.insertText || g.label,
            sortText: g.sortText,
            filterText: g.filterText,
            documentation: g.documentation,
            detail: g.detail,
            command: an(g.command),
            range: c,
            kind: rn(g.kind)
          };
          return g.textEdit && (tn(g.textEdit) ? h.range = {
            insert: T(g.textEdit.insert),
            replace: T(g.textEdit.replace)
          } : h.range = T(g.textEdit.range), h.insertText = g.textEdit.newText), g.additionalTextEdits && (h.additionalTextEdits = g.additionalTextEdits.map(q)), g.insertTextFormat === ie.Snippet && (h.insertTextRules = b.CompletionItemInsertTextRule.InsertAsSnippet), h;
        });
        return {
          isIncomplete: o.isIncomplete,
          suggestions: d
        };
      }
    });
  }, e;
}();
function sn(e) {
  return e && typeof e == "object" && typeof e.kind == "string";
}
function je(e) {
  return typeof e == "string" ? {
    value: e
  } : sn(e) ? e.kind === "plaintext" ? {
    value: e.value.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&")
  } : {
    value: e.value
  } : { value: "```" + e.language + `
` + e.value + "\n```\n" };
}
function un(e) {
  if (!!e)
    return Array.isArray(e) ? e.map(je) : [je(e)];
}
var cn = function() {
  function e(r) {
    this._worker = r;
  }
  return e.prototype.provideHover = function(r, i, t) {
    var n = r.uri;
    return this._worker(n).then(function(a) {
      return a.doHover(n.toString(), ae(i));
    }).then(function(a) {
      if (!!a)
        return {
          range: T(a.range),
          contents: un(a.contents)
        };
    });
  }, e;
}();
function fn(e) {
  var r = b.SymbolKind;
  switch (e) {
    case m.File:
      return r.Array;
    case m.Module:
      return r.Module;
    case m.Namespace:
      return r.Namespace;
    case m.Package:
      return r.Package;
    case m.Class:
      return r.Class;
    case m.Method:
      return r.Method;
    case m.Property:
      return r.Property;
    case m.Field:
      return r.Field;
    case m.Constructor:
      return r.Constructor;
    case m.Enum:
      return r.Enum;
    case m.Interface:
      return r.Interface;
    case m.Function:
      return r.Function;
    case m.Variable:
      return r.Variable;
    case m.Constant:
      return r.Constant;
    case m.String:
      return r.String;
    case m.Number:
      return r.Number;
    case m.Boolean:
      return r.Boolean;
    case m.Array:
      return r.Array;
  }
  return r.Function;
}
var dn = function() {
  function e(r) {
    this._worker = r;
  }
  return e.prototype.provideDocumentSymbols = function(r, i) {
    var t = r.uri;
    return this._worker(t).then(function(n) {
      return n.findDocumentSymbols(t.toString());
    }).then(function(n) {
      if (!!n)
        return n.map(function(a) {
          return {
            name: a.name,
            detail: "",
            containerName: a.containerName,
            kind: fn(a.kind),
            range: T(a.location.range),
            selectionRange: T(a.location.range),
            tags: []
          };
        });
    });
  }, e;
}();
function qe(e) {
  return {
    tabSize: e.tabSize,
    insertSpaces: e.insertSpaces
  };
}
var ln = function() {
  function e(r) {
    this._worker = r;
  }
  return e.prototype.provideDocumentFormattingEdits = function(r, i, t) {
    var n = r.uri;
    return this._worker(n).then(function(a) {
      return a.format(n.toString(), null, qe(i)).then(function(o) {
        if (!(!o || o.length === 0))
          return o.map(q);
      });
    });
  }, e;
}(), gn = function() {
  function e(r) {
    this._worker = r;
  }
  return e.prototype.provideDocumentRangeFormattingEdits = function(r, i, t, n) {
    var a = r.uri;
    return this._worker(a).then(function(o) {
      return o.format(a.toString(), Be(i), qe(t)).then(function(u) {
        if (!(!u || u.length === 0))
          return u.map(q);
      });
    });
  }, e;
}(), hn = function() {
  function e(r) {
    this._worker = r;
  }
  return e.prototype.provideDocumentColors = function(r, i) {
    var t = r.uri;
    return this._worker(t).then(function(n) {
      return n.findDocumentColors(t.toString());
    }).then(function(n) {
      if (!!n)
        return n.map(function(a) {
          return {
            color: a.color,
            range: T(a.range)
          };
        });
    });
  }, e.prototype.provideColorPresentations = function(r, i, t) {
    var n = r.uri;
    return this._worker(n).then(function(a) {
      return a.getColorPresentations(n.toString(), i.color, Be(i.range));
    }).then(function(a) {
      if (!!a)
        return a.map(function(o) {
          var u = {
            label: o.label
          };
          return o.textEdit && (u.textEdit = q(o.textEdit)), o.additionalTextEdits && (u.additionalTextEdits = o.additionalTextEdits.map(q)), u;
        });
    });
  }, e;
}(), vn = function() {
  function e(r) {
    this._worker = r;
  }
  return e.prototype.provideFoldingRanges = function(r, i, t) {
    var n = r.uri;
    return this._worker(n).then(function(a) {
      return a.getFoldingRanges(n.toString(), i);
    }).then(function(a) {
      if (!!a)
        return a.map(function(o) {
          var u = {
            start: o.startLine + 1,
            end: o.endLine + 1
          };
          return typeof o.kind < "u" && (u.kind = pn(o.kind)), u;
        });
    });
  }, e;
}();
function pn(e) {
  switch (e) {
    case W.Comment:
      return b.FoldingRangeKind.Comment;
    case W.Imports:
      return b.FoldingRangeKind.Imports;
    case W.Region:
      return b.FoldingRangeKind.Region;
  }
}
var mn = function() {
  function e(r) {
    this._worker = r;
  }
  return e.prototype.provideSelectionRanges = function(r, i, t) {
    var n = r.uri;
    return this._worker(n).then(function(a) {
      return a.getSelectionRanges(n.toString(), i.map(ae));
    }).then(function(a) {
      if (!!a)
        return a.map(function(o) {
          for (var u = []; o; )
            u.push({ range: T(o.range) }), o = o.parent;
          return u;
        });
    });
  }, e;
}();
function _n(e, r) {
  r === void 0 && (r = !1);
  var i = e.length, t = 0, n = "", a = 0, o = 16, u = 0, c = 0, d = 0, g = 0, h = 0;
  function v(f, C) {
    for (var A = 0, E = 0; A < f || !C; ) {
      var k = e.charCodeAt(t);
      if (k >= 48 && k <= 57)
        E = E * 16 + k - 48;
      else if (k >= 65 && k <= 70)
        E = E * 16 + k - 65 + 10;
      else if (k >= 97 && k <= 102)
        E = E * 16 + k - 97 + 10;
      else
        break;
      t++, A++;
    }
    return A < f && (E = -1), E;
  }
  function l(f) {
    t = f, n = "", a = 0, o = 16, h = 0;
  }
  function I() {
    var f = t;
    if (e.charCodeAt(t) === 48)
      t++;
    else
      for (t++; t < e.length && P(e.charCodeAt(t)); )
        t++;
    if (t < e.length && e.charCodeAt(t) === 46)
      if (t++, t < e.length && P(e.charCodeAt(t)))
        for (t++; t < e.length && P(e.charCodeAt(t)); )
          t++;
      else
        return h = 3, e.substring(f, t);
    var C = t;
    if (t < e.length && (e.charCodeAt(t) === 69 || e.charCodeAt(t) === 101))
      if (t++, (t < e.length && e.charCodeAt(t) === 43 || e.charCodeAt(t) === 45) && t++, t < e.length && P(e.charCodeAt(t))) {
        for (t++; t < e.length && P(e.charCodeAt(t)); )
          t++;
        C = t;
      } else
        h = 3;
    return e.substring(f, C);
  }
  function R() {
    for (var f = "", C = t; ; ) {
      if (t >= i) {
        f += e.substring(C, t), h = 2;
        break;
      }
      var A = e.charCodeAt(t);
      if (A === 34) {
        f += e.substring(C, t), t++;
        break;
      }
      if (A === 92) {
        if (f += e.substring(C, t), t++, t >= i) {
          h = 2;
          break;
        }
        var E = e.charCodeAt(t++);
        switch (E) {
          case 34:
            f += '"';
            break;
          case 92:
            f += "\\";
            break;
          case 47:
            f += "/";
            break;
          case 98:
            f += "\b";
            break;
          case 102:
            f += "\f";
            break;
          case 110:
            f += `
`;
            break;
          case 114:
            f += "\r";
            break;
          case 116:
            f += "	";
            break;
          case 117:
            var k = v(4, !0);
            k >= 0 ? f += String.fromCharCode(k) : h = 4;
            break;
          default:
            h = 5;
        }
        C = t;
        continue;
      }
      if (A >= 0 && A <= 31)
        if (O(A)) {
          f += e.substring(C, t), h = 2;
          break;
        } else
          h = 6;
      t++;
    }
    return f;
  }
  function D() {
    if (n = "", h = 0, a = t, c = u, g = d, t >= i)
      return a = i, o = 17;
    var f = e.charCodeAt(t);
    if (Z(f)) {
      do
        t++, n += String.fromCharCode(f), f = e.charCodeAt(t);
      while (Z(f));
      return o = 15;
    }
    if (O(f))
      return t++, n += String.fromCharCode(f), f === 13 && e.charCodeAt(t) === 10 && (t++, n += `
`), u++, d = t, o = 14;
    switch (f) {
      case 123:
        return t++, o = 1;
      case 125:
        return t++, o = 2;
      case 91:
        return t++, o = 3;
      case 93:
        return t++, o = 4;
      case 58:
        return t++, o = 6;
      case 44:
        return t++, o = 5;
      case 34:
        return t++, n = R(), o = 10;
      case 47:
        var C = t - 1;
        if (e.charCodeAt(t + 1) === 47) {
          for (t += 2; t < i && !O(e.charCodeAt(t)); )
            t++;
          return n = e.substring(C, t), o = 12;
        }
        if (e.charCodeAt(t + 1) === 42) {
          t += 2;
          for (var A = i - 1, E = !1; t < A; ) {
            var k = e.charCodeAt(t);
            if (k === 42 && e.charCodeAt(t + 1) === 47) {
              t += 2, E = !0;
              break;
            }
            t++, O(k) && (k === 13 && e.charCodeAt(t) === 10 && t++, u++, d = t);
          }
          return E || (t++, h = 1), n = e.substring(C, t), o = 13;
        }
        return n += String.fromCharCode(f), t++, o = 16;
      case 45:
        if (n += String.fromCharCode(f), t++, t === i || !P(e.charCodeAt(t)))
          return o = 16;
      case 48:
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        return n += I(), o = 11;
      default:
        for (; t < i && Je(f); )
          t++, f = e.charCodeAt(t);
        if (a !== t) {
          switch (n = e.substring(a, t), n) {
            case "true":
              return o = 8;
            case "false":
              return o = 9;
            case "null":
              return o = 7;
          }
          return o = 16;
        }
        return n += String.fromCharCode(f), t++, o = 16;
    }
  }
  function Je(f) {
    if (Z(f) || O(f))
      return !1;
    switch (f) {
      case 125:
      case 93:
      case 123:
      case 91:
      case 34:
      case 58:
      case 44:
      case 47:
        return !1;
    }
    return !0;
  }
  function Ye() {
    var f;
    do
      f = D();
    while (f >= 12 && f <= 15);
    return f;
  }
  return {
    setPosition: l,
    getPosition: function() {
      return t;
    },
    scan: r ? Ye : D,
    getToken: function() {
      return o;
    },
    getTokenValue: function() {
      return n;
    },
    getTokenOffset: function() {
      return a;
    },
    getTokenLength: function() {
      return t - a;
    },
    getTokenStartLine: function() {
      return c;
    },
    getTokenStartCharacter: function() {
      return a - g;
    },
    getTokenError: function() {
      return h;
    }
  };
}
function Z(e) {
  return e === 32 || e === 9 || e === 11 || e === 12 || e === 160 || e === 5760 || e >= 8192 && e <= 8203 || e === 8239 || e === 8287 || e === 12288 || e === 65279;
}
function O(e) {
  return e === 10 || e === 13 || e === 8232 || e === 8233;
}
function P(e) {
  return e >= 48 && e <= 57;
}
var We;
(function(e) {
  e.DEFAULT = {
    allowTrailingComma: !1
  };
})(We || (We = {}));
var kn = _n;
function bn(e) {
  return {
    getInitialState: function() {
      return new Xe(null, null, !1, null);
    },
    tokenize: function(r, i, t, n) {
      return Ln(e, r, i, t);
    }
  };
}
var Ue = "delimiter.bracket.json", Ve = "delimiter.array.json", wn = "delimiter.colon.json", Cn = "delimiter.comma.json", En = "keyword.json", An = "keyword.json", In = "string.value.json", yn = "number.json", Sn = "string.key.json", Tn = "comment.block.json", Rn = "comment.line.json", j = function() {
  function e(r, i) {
    this.parent = r, this.type = i;
  }
  return e.pop = function(r) {
    return r ? r.parent : null;
  }, e.push = function(r, i) {
    return new e(r, i);
  }, e.equals = function(r, i) {
    if (!r && !i)
      return !0;
    if (!r || !i)
      return !1;
    for (; r && i; ) {
      if (r === i)
        return !0;
      if (r.type !== i.type)
        return !1;
      r = r.parent, i = i.parent;
    }
    return !0;
  }, e;
}(), Xe = function() {
  function e(r, i, t, n) {
    this._state = r, this.scanError = i, this.lastWasColon = t, this.parents = n;
  }
  return e.prototype.clone = function() {
    return new e(this._state, this.scanError, this.lastWasColon, this.parents);
  }, e.prototype.equals = function(r) {
    return r === this ? !0 : !r || !(r instanceof e) ? !1 : this.scanError === r.scanError && this.lastWasColon === r.lastWasColon && j.equals(this.parents, r.parents);
  }, e.prototype.getStateData = function() {
    return this._state;
  }, e.prototype.setStateData = function(r) {
    this._state = r;
  }, e;
}();
function Ln(e, r, i, t, n) {
  t === void 0 && (t = 0);
  var a = 0, o = !1;
  switch (i.scanError) {
    case 2:
      r = '"' + r, a = 1;
      break;
    case 1:
      r = "/*" + r, a = 2;
      break;
  }
  for (var u = kn(r), c = i.lastWasColon, d = i.parents, g = {
    tokens: [],
    endState: i.clone()
  }; ; ) {
    var h = t + u.getPosition(), v = "", l = u.scan();
    if (l === 17)
      break;
    if (h === t + u.getPosition())
      throw new Error("Scanner did not advance, next 3 characters are: " + r.substr(u.getPosition(), 3));
    switch (o && (h -= a), o = a > 0, l) {
      case 1:
        d = j.push(d, 0), v = Ue, c = !1;
        break;
      case 2:
        d = j.pop(d), v = Ue, c = !1;
        break;
      case 3:
        d = j.push(d, 1), v = Ve, c = !1;
        break;
      case 4:
        d = j.pop(d), v = Ve, c = !1;
        break;
      case 6:
        v = wn, c = !0;
        break;
      case 5:
        v = Cn, c = !1;
        break;
      case 8:
      case 9:
        v = En, c = !1;
        break;
      case 7:
        v = An, c = !1;
        break;
      case 10:
        var I = d ? d.type : 0, R = I === 1;
        v = c || R ? In : Sn, c = !1;
        break;
      case 11:
        v = yn, c = !1;
        break;
    }
    if (e)
      switch (l) {
        case 12:
          v = Rn;
          break;
        case 13:
          v = Tn;
          break;
      }
    g.endState = new Xe(i.getStateData(), u.getTokenError(), c, d), g.tokens.push({
      startIndex: h,
      scopes: v
    });
  }
  return g;
}
function Nn(e) {
  var r = [], i = [], t = new Qe(e);
  r.push(t);
  var n = function() {
    for (var u = [], c = 0; c < arguments.length; c++)
      u[c] = arguments[c];
    return t.getLanguageServiceWorker.apply(t, u);
  };
  function a() {
    var u = e.languageId, c = e.modeConfiguration;
    $e(i), c.documentFormattingEdits && i.push(b.registerDocumentFormattingEditProvider(u, new ln(n))), c.documentRangeFormattingEdits && i.push(b.registerDocumentRangeFormattingEditProvider(u, new gn(n))), c.completionItems && i.push(b.registerCompletionItemProvider(u, new on(n))), c.hovers && i.push(b.registerHoverProvider(u, new cn(n))), c.documentSymbols && i.push(b.registerDocumentSymbolProvider(u, new dn(n))), c.tokens && i.push(b.setTokensProvider(u, bn(!0))), c.colors && i.push(b.registerColorProvider(u, new hn(n))), c.foldingRanges && i.push(b.registerFoldingRangeProvider(u, new vn(n))), c.diagnostics && i.push(new Ke(u, n, e)), c.selectionRanges && i.push(b.registerSelectionRangeProvider(u, new mn(n)));
  }
  a(), r.push(b.setLanguageConfiguration(e.languageId, Mn));
  var o = e.modeConfiguration;
  return e.onDidChange(function(u) {
    u.modeConfiguration !== o && (o = u.modeConfiguration, a());
  }), r.push(ze(i)), ze(r);
}
function ze(e) {
  return { dispose: function() {
    return $e(e);
  } };
}
function $e(e) {
  for (; e.length; )
    e.pop().dispose();
}
var Mn = {
  wordPattern: /(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,
  comments: {
    lineComment: "//",
    blockComment: ["/*", "*/"]
  },
  brackets: [
    ["{", "}"],
    ["[", "]"]
  ],
  autoClosingPairs: [
    { open: "{", close: "}", notIn: ["string"] },
    { open: "[", close: "]", notIn: ["string"] },
    { open: '"', close: '"', notIn: ["string"] }
  ]
};
export {
  Nn as setupMode
};
