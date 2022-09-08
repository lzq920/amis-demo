import { c as ke, _ as Ye, b as je, j as Ge } from "./index.7add3ddd.js";
import Xe from "react";
import "react-dom";
var Ke = { exports: {} };
/*!
 * froala_editor v3.1.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
var ze;
function $e() {
  return ze || (ze = 1, function(Ie, Le) {
    (function(o, t) {
      Ie.exports = t();
    })(ke, function() {
      function o(e) {
        return (o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
          return typeof r;
        } : function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
        })(e);
      }
      Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(e) {
        var r = this;
        if (!document.documentElement.contains(r))
          return null;
        do {
          if (r.matches(e))
            return r;
          r = r.parentElement || r.parentNode;
        } while (r !== null && r.nodeType === 1);
        return null;
      }), Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(e) {
        for (var r = (this.document || this.ownerDocument).querySelectorAll(e), s = r.length; 0 <= --s && r.item(s) !== this; )
          ;
        return -1 < s;
      }), Array.isArray || (Array.isArray = function(e) {
        return Object.prototype.toString.call(e) === "[object Array]";
      }), typeof Object.assign != "function" && Object.defineProperty(Object, "assign", { value: function(e, r) {
        if (e == null)
          throw new TypeError("Cannot convert undefined or null to object");
        for (var s = Object(e), d = 1; d < arguments.length; d++) {
          var u = arguments[d];
          if (u != null)
            for (var b in u)
              Object.prototype.hasOwnProperty.call(u, b) && (s[b] = u[b]);
        }
        return s;
      }, writable: !0, configurable: !0 }), function() {
        var e = /^\s*:scope/gi, r = /,\s*:scope/gi, s = document.createElement("div");
        function d(u, b) {
          var E = u[b];
          u[b] = function(g) {
            var m, C = !1, O = !1;
            if (g && (g.match(e) || g.match(r))) {
              this.parentNode || (s.appendChild(this), O = !0);
              var U = this.parentNode;
              return this.id || (this.id = "rootedQuerySelector_id_".concat(new Date().getTime()), C = !0), m = E.call(U, g.replace(e, "#".concat(this.id)).replace(r, ",#".concat(this.id))), C && (this.id = ""), O && s.removeChild(this), m;
            }
            return E.call(this, g);
          };
        }
        try {
          s.querySelectorAll(":scope *");
        } catch {
          d(Element.prototype, "querySelector"), d(Element.prototype, "querySelectorAll"), d(HTMLElement.prototype, "querySelector"), d(HTMLElement.prototype, "querySelectorAll");
        }
      }();
      function t(e, r, s) {
        if (typeof e != "string")
          return new t.Bootstrap(e, r, s);
        var d = document.querySelectorAll(e);
        r && r.iframe_document && (d = r.iframe_document.querySelectorAll(e));
        for (var u = [], b = 0; b < d.length; b++) {
          var E = d[b]["data-froala.editor"];
          E ? u.push(E) : u.push(new t.Bootstrap(d[b], r, s));
        }
        return u.length == 1 ? u[0] : u;
      }
      t.RegisterPlugins = function(e) {
        for (var r = 0; r < e.length; r++)
          e[r].call(t);
      }, Object.assign(t, { DEFAULTS: { initOnClick: !1, pluginsEnabled: null }, MODULES: {}, PLUGINS: {}, VERSION: "3.1.0", INSTANCES: [], OPTS_MAPPING: {}, SHARED: {}, ID: 0 }), t.MODULES.node = function(e) {
        var r = e.$;
        function s(g) {
          return g && g.tagName !== "IFRAME" ? Array.prototype.slice.call(g.childNodes || []) : [];
        }
        function d(g) {
          return !!g && g.nodeType === Node.ELEMENT_NODE && 0 <= t.BLOCK_TAGS.indexOf(g.tagName.toLowerCase());
        }
        function u(g) {
          var m = {}, C = g.attributes;
          if (C)
            for (var O = 0; O < C.length; O++) {
              var U = C[O];
              m[U.nodeName] = U.value;
            }
          return m;
        }
        function b(g) {
          for (var m = "", C = u(g), O = Object.keys(C).sort(), U = 0; U < O.length; U++) {
            var y = O[U], B = C[y];
            B.indexOf("'") < 0 && 0 <= B.indexOf('"') ? m += " ".concat(y, "='").concat(B, "'") : (0 <= B.indexOf('"') && 0 <= B.indexOf("'") && (B = B.replace(/"/g, "&quot;")), m += " ".concat(y, '="').concat(B, '"'));
          }
          return m;
        }
        function E(g) {
          return g === e.el;
        }
        return { isBlock: d, isEmpty: function(m, C) {
          if (!m)
            return !0;
          if (m.querySelector("table"))
            return !1;
          var O = s(m);
          O.length === 1 && d(O[0]) && (O = s(O[0]));
          for (var U = !1, y = 0; y < O.length; y++) {
            var B = O[y];
            if (!(C && e.node.hasClass(B, "fr-marker") || B.nodeType === Node.TEXT_NODE && B.textContent.length === 0)) {
              if (B.tagName !== "BR" && 0 < (B.textContent || "").replace(/\u200B/gi, "").replace(/\n/g, "").length || U)
                return !1;
              B.tagName === "BR" && (U = !0);
            }
          }
          return !(m.querySelectorAll(t.VOID_ELEMENTS.join(",")).length - m.querySelectorAll("br").length || m.querySelector("".concat(e.opts.htmlAllowedEmptyTags.join(":not(.fr-marker),"), ":not(.fr-marker)")) || 1 < m.querySelectorAll(t.BLOCK_TAGS.join(",")).length || m.querySelector("".concat(e.opts.htmlDoNotWrapTags.join(":not(.fr-marker),"), ":not(.fr-marker)")));
        }, blockParent: function(m) {
          for (; m && m.parentNode !== e.el && (!m.parentNode || !e.node.hasClass(m.parentNode, "fr-inner")); )
            if (d(m = m.parentNode))
              return m;
          return null;
        }, deepestParent: function(m, C, O) {
          if (C === void 0 && (C = []), O === void 0 && (O = !0), C.push(e.el), 0 <= C.indexOf(m.parentNode) || m.parentNode && e.node.hasClass(m.parentNode, "fr-inner") || m.parentNode && 0 <= t.SIMPLE_ENTER_TAGS.indexOf(m.parentNode.tagName) && O)
            return null;
          for (; C.indexOf(m.parentNode) < 0 && m.parentNode && !e.node.hasClass(m.parentNode, "fr-inner") && (t.SIMPLE_ENTER_TAGS.indexOf(m.parentNode.tagName) < 0 || !O) && (!d(m) || d(m.parentNode)) && (!d(m) || !d(m.parentNode) || !O); )
            m = m.parentNode;
          return m;
        }, rawAttributes: u, attributes: b, clearAttributes: function(m) {
          for (var C = m.attributes, O = C.length - 1; 0 <= O; O--) {
            var U = C[O];
            m.removeAttribute(U.nodeName);
          }
        }, openTagString: function(m) {
          return "<".concat(m.tagName.toLowerCase()).concat(b(m), ">");
        }, closeTagString: function(m) {
          return "</".concat(m.tagName.toLowerCase(), ">");
        }, isFirstSibling: function g(m, C) {
          C === void 0 && (C = !0);
          for (var O = m.previousSibling; O && C && e.node.hasClass(O, "fr-marker"); )
            O = O.previousSibling;
          return !O || O.nodeType === Node.TEXT_NODE && O.textContent === "" && g(O);
        }, isLastSibling: function g(m, C) {
          C === void 0 && (C = !0);
          for (var O = m.nextSibling; O && C && e.node.hasClass(O, "fr-marker"); )
            O = O.nextSibling;
          return !O || O.nodeType === Node.TEXT_NODE && O.textContent === "" && g(O);
        }, isList: function(m) {
          return !!m && 0 <= ["UL", "OL"].indexOf(m.tagName);
        }, isLink: function(m) {
          return !!m && m.nodeType === Node.ELEMENT_NODE && m.tagName.toLowerCase() === "a";
        }, isElement: E, contents: s, isVoid: function(m) {
          return m && m.nodeType === Node.ELEMENT_NODE && 0 <= t.VOID_ELEMENTS.indexOf((m.tagName || "").toLowerCase());
        }, hasFocus: function(m) {
          return m === e.doc.activeElement && (!e.doc.hasFocus || e.doc.hasFocus()) && Boolean(E(m) || m.type || m.href || ~m.tabIndex);
        }, isEditable: function(m) {
          return (!m.getAttribute || m.getAttribute("contenteditable") !== "false") && ["STYLE", "SCRIPT"].indexOf(m.tagName) < 0;
        }, isDeletable: function(m) {
          return m && m.nodeType === Node.ELEMENT_NODE && m.getAttribute("class") && 0 <= (m.getAttribute("class") || "").indexOf("fr-deletable");
        }, hasClass: function(m, C) {
          return m instanceof r && (m = m.get(0)), m && m.classList && m.classList.contains(C);
        }, filter: function(m) {
          return e.browser.msie ? m : { acceptNode: m };
        } };
      }, Object.assign(t.DEFAULTS, { htmlAllowedTags: ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "pre", "progress", "queue", "rp", "rt", "ruby", "s", "samp", "script", "style", "section", "select", "small", "source", "span", "strike", "strong", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "var", "video", "wbr"], htmlRemoveTags: ["script", "style"], htmlAllowedAttrs: ["accept", "accept-charset", "accesskey", "action", "align", "allowfullscreen", "allowtransparency", "alt", "async", "autocomplete", "autofocus", "autoplay", "autosave", "background", "bgcolor", "border", "charset", "cellpadding", "cellspacing", "checked", "cite", "class", "color", "cols", "colspan", "content", "contenteditable", "contextmenu", "controls", "coords", "data", "data-.*", "datetime", "default", "defer", "dir", "dirname", "disabled", "download", "draggable", "dropzone", "enctype", "for", "form", "formaction", "frameborder", "headers", "height", "hidden", "high", "href", "hreflang", "http-equiv", "icon", "id", "ismap", "itemprop", "keytype", "kind", "label", "lang", "language", "list", "loop", "low", "max", "maxlength", "media", "method", "min", "mozallowfullscreen", "multiple", "muted", "name", "novalidate", "open", "optimum", "pattern", "ping", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "reversed", "rows", "rowspan", "sandbox", "scope", "scoped", "scrolling", "seamless", "selected", "shape", "size", "sizes", "span", "src", "srcdoc", "srclang", "srcset", "start", "step", "summary", "spellcheck", "style", "tabindex", "target", "title", "type", "translate", "usemap", "value", "valign", "webkitallowfullscreen", "width", "wrap"], htmlAllowedStyleProps: [".*"], htmlAllowComments: !0, htmlUntouched: !1, fullPage: !1 }), t.HTML5Map = { B: "STRONG", I: "EM", STRIKE: "S" }, t.MODULES.clean = function(e) {
        var r, s, d, u, b = e.$;
        function E(x) {
          if (x.nodeType === Node.ELEMENT_NODE && x.getAttribute("class") && 0 <= x.getAttribute("class").indexOf("fr-marker"))
            return !1;
          var v, A = e.node.contents(x), l = [];
          for (v = 0; v < A.length; v++)
            A[v].nodeType !== Node.ELEMENT_NODE || e.node.isVoid(A[v]) ? A[v].nodeType === Node.TEXT_NODE && (A[v].textContent = A[v].textContent.replace(/\u200b/g, "")) : A[v].textContent.replace(/\u200b/g, "").length !== A[v].textContent.length && E(A[v]);
          if (x.nodeType === Node.ELEMENT_NODE && !e.node.isVoid(x) && (x.normalize(), A = e.node.contents(x), l = x.querySelectorAll(".fr-marker"), A.length - l.length == 0)) {
            for (v = 0; v < A.length; v++)
              if (A[v].nodeType === Node.ELEMENT_NODE && (A[v].getAttribute("class") || "").indexOf("fr-marker") < 0)
                return !1;
            for (v = 0; v < l.length; v++)
              x.parentNode.insertBefore(l[v].cloneNode(!0), x);
            return x.parentNode.removeChild(x), !1;
          }
        }
        function g(x, v) {
          if (x.nodeType === Node.COMMENT_NODE)
            return "<!--".concat(x.nodeValue, "-->");
          if (x.nodeType === Node.TEXT_NODE)
            return v ? x.textContent.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : x.textContent.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\u00A0/g, "&nbsp;").replace(/\u0009/g, "");
          if (x.nodeType !== Node.ELEMENT_NODE || x.nodeType === Node.ELEMENT_NODE && 0 <= ["STYLE", "SCRIPT", "NOSCRIPT"].indexOf(x.tagName))
            return x.outerHTML;
          if (x.nodeType === Node.ELEMENT_NODE && x.tagName === "svg") {
            var A = document.createElement("div"), l = x.cloneNode(!0);
            return A.appendChild(l), A.innerHTML;
          }
          if (x.tagName === "IFRAME")
            return x.outerHTML.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
          var i = x.childNodes;
          if (i.length === 0)
            return x.outerHTML;
          for (var a = "", p = 0; p < i.length; p++)
            x.tagName === "PRE" && (v = !0), a += g(i[p], v);
          return e.node.openTagString(x) + a + e.node.closeTagString(x);
        }
        var m = [];
        function C(x) {
          var v = x.replace(/;;/gi, ";");
          return (v = v.replace(/^;/gi, "")).charAt(v.length) !== ";" && (v += ";"), v;
        }
        function O(x) {
          var v;
          for (v in x)
            if (Object.prototype.hasOwnProperty.call(x, v)) {
              var A = v.match(d), l = null;
              v === "style" && e.opts.htmlAllowedStyleProps.length && (l = x[v].match(u)), A && l ? x[v] = C(l.join(";")) : A && (v !== "style" || l) || delete x[v];
            }
          for (var i = "", a = Object.keys(x).sort(), p = 0; p < a.length; p++)
            x[v = a[p]].indexOf('"') < 0 ? i += " ".concat(v, '="').concat(x[v], '"') : i += " ".concat(v, "='").concat(x[v], "'");
          return i;
        }
        function U(x, v) {
          var A, l = document.implementation.createHTMLDocument("Froala DOC").createElement("DIV");
          b(l).append(x);
          var i = "";
          if (l) {
            var a = e.node.contents(l);
            for (A = 0; A < a.length; A++)
              v(a[A]);
            for (a = e.node.contents(l), A = 0; A < a.length; A++)
              i += g(a[A]);
          }
          return i;
        }
        function y(x, v, A) {
          var l = x = function(p) {
            return m = [], p = (p = (p = (p = p.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, function(c) {
              return m.push(c), "[FROALA.EDITOR.SCRIPT ".concat(m.length - 1, "]");
            })).replace(/<noscript\b[^<]*(?:(?!<\/noscript>)<[^<]*)*<\/noscript>/gi, function(c) {
              return m.push(c), "[FROALA.EDITOR.NOSCRIPT ".concat(m.length - 1, "]");
            })).replace(/<meta((?:[\w\W]*?)) http-equiv="/g, '<meta$1 data-fr-http-equiv="')).replace(/<img((?:[\w\W]*?)) src="/g, '<img$1 data-fr-src="');
          }(x), i = null;
          return e.opts.fullPage && (l = e.html.extractNode(x, "body") || (0 <= x.indexOf("<body") ? "" : x), A && (i = e.html.extractNode(x, "head") || "")), l = U(l, v), i && (i = U(i, v)), function(p) {
            return p = (p = (p = p.replace(/\[FROALA\.EDITOR\.SCRIPT ([\d]*)\]/gi, function(c, h) {
              return 0 <= e.opts.htmlRemoveTags.indexOf("script") ? "" : m[parseInt(h, 10)];
            })).replace(/\[FROALA\.EDITOR\.NOSCRIPT ([\d]*)\]/gi, function(c, h) {
              return 0 <= e.opts.htmlRemoveTags.indexOf("noscript") ? "" : m[parseInt(h, 10)].replace(/&lt;/g, "<").replace(/&gt;/g, ">");
            })).replace(/<img((?:[\w\W]*?)) data-fr-src="/g, '<img$1 src="');
          }(function(p, c, h) {
            if (e.opts.fullPage) {
              var M = e.html.extractDoctype(h), N = O(e.html.extractNodeAttrs(h, "html"));
              c = c === null ? e.html.extractNode(h, "head") || "<title></title>" : c;
              var ie = O(e.html.extractNodeAttrs(h, "head")), D = O(e.html.extractNodeAttrs(h, "body"));
              return "".concat(M, "<html").concat(N, "><head").concat(ie, ">").concat(c, "</head><body").concat(D, ">").concat(p, "</body></html>");
            }
            return p;
          }(l, i, x));
        }
        function B(x) {
          var v = e.doc.createElement("DIV");
          return v.innerText = x, v.textContent;
        }
        function I(x) {
          for (var v = e.node.contents(x), A = 0; A < v.length; A++)
            v[A].nodeType !== Node.TEXT_NODE && I(v[A]);
          (function(i) {
            if (i.tagName === "SPAN" && 0 <= (i.getAttribute("class") || "").indexOf("fr-marker"))
              return !1;
            if (i.tagName === "PRE" && function(_) {
              var Q = _.innerHTML;
              0 <= Q.indexOf(`
`) && (_.innerHTML = Q.replace(/\n/g, "<br>"));
            }(i), i.nodeType === Node.ELEMENT_NODE && (i.getAttribute("data-fr-src") && i.getAttribute("data-fr-src").indexOf("blob:") !== 0 && i.setAttribute("data-fr-src", e.helpers.sanitizeURL(B(i.getAttribute("data-fr-src")))), i.getAttribute("href") && i.setAttribute("href", e.helpers.sanitizeURL(B(i.getAttribute("href")))), i.getAttribute("src") && i.setAttribute("src", e.helpers.sanitizeURL(B(i.getAttribute("src")))), 0 <= ["TABLE", "TBODY", "TFOOT", "TR"].indexOf(i.tagName) && (i.innerHTML = i.innerHTML.trim())), !e.opts.pasteAllowLocalImages && i.nodeType === Node.ELEMENT_NODE && i.tagName === "IMG" && i.getAttribute("data-fr-src") && i.getAttribute("data-fr-src").indexOf("file://") === 0)
              return i.parentNode.removeChild(i), !1;
            if (i.nodeType === Node.ELEMENT_NODE && t.HTML5Map[i.tagName] && e.node.attributes(i) === "") {
              var a = t.HTML5Map[i.tagName], p = "<".concat(a, ">").concat(i.innerHTML, "</").concat(a, ">");
              i.insertAdjacentHTML("beforebegin", p), (i = i.previousSibling).parentNode.removeChild(i.nextSibling);
            }
            if (e.opts.htmlAllowComments || i.nodeType !== Node.COMMENT_NODE)
              if (i.tagName && i.tagName.match(s))
                i.tagName == "STYLE" && e.helpers.isMac() && function() {
                  for (var D, _ = i.innerHTML.trim(), Q = [], re = /{([^}]+)}/g; D = re.exec(_); )
                    Q.push(D[1]);
                  for (var q = function(H) {
                    var W = _.substring(0, _.indexOf("{")).trim();
                    i.parentNode.querySelectorAll(W).forEach(function(T) {
                      T.removeAttribute("class"), T.setAttribute("style", Q[H]);
                    }), _ = _.substring(_.indexOf("}") + 1);
                  }, ae = 0; _.indexOf("{") != -1; ae++)
                    q(ae);
                }(), i.parentNode.removeChild(i);
              else if (i.tagName && !i.tagName.match(r))
                i.tagName === "svg" ? i.parentNode.removeChild(i) : e.browser.safari && i.tagName === "path" && i.parentNode && i.parentNode.tagName === "svg" || (i.outerHTML = i.innerHTML);
              else {
                var c = i.attributes;
                if (c)
                  for (var h = c.length - 1; 0 <= h; h--) {
                    var M = c[h], N = M.nodeName.match(d), ie = null;
                    M.nodeName === "style" && e.opts.htmlAllowedStyleProps.length && (ie = M.value.match(u)), N && ie ? M.value = C(ie.join(";")) : N && (M.nodeName !== "style" || ie) || i.removeAttribute(M.nodeName);
                  }
              }
            else
              i.data.indexOf("[FROALA.EDITOR") !== 0 && i.parentNode.removeChild(i);
          })(x);
        }
        return { _init: function() {
          e.opts.fullPage && b.merge(e.opts.htmlAllowedTags, ["head", "title", "style", "link", "base", "body", "html", "meta"]);
        }, html: function(v, A, l, i) {
          A === void 0 && (A = []), l === void 0 && (l = []);
          var a, p = b.merge([], e.opts.htmlAllowedTags);
          for (a = 0; a < A.length; a++)
            0 <= p.indexOf(A[a]) && p.splice(p.indexOf(A[a]), 1);
          var c = b.merge([], e.opts.htmlAllowedAttrs);
          for (a = 0; a < l.length; a++)
            0 <= c.indexOf(l[a]) && c.splice(c.indexOf(l[a]), 1);
          return c.push("data-fr-.*"), c.push("fr-.*"), r = new RegExp("^".concat(p.join("$|^"), "$"), "gi"), d = new RegExp("^".concat(c.join("$|^"), "$"), "gi"), s = new RegExp("^".concat(e.opts.htmlRemoveTags.join("$|^"), "$"), "gi"), u = e.opts.htmlAllowedStyleProps.length ? new RegExp("((^|;|\\s)".concat(e.opts.htmlAllowedStyleProps.join(":.+?(?=;|$))|((^|;|\\s)"), ":.+?(?=(;)|$))"), "gi") : null, v = y(v, I, !0);
        }, toHTML5: function() {
          var v = e.el.querySelectorAll(Object.keys(t.HTML5Map).join(","));
          if (v.length) {
            var A = !1;
            e.el.querySelector(".fr-marker") || (e.selection.save(), A = !0);
            for (var l = 0; l < v.length; l++)
              e.node.attributes(v[l]) === "" && b(v[l]).replaceWith("<".concat(t.HTML5Map[v[l].tagName], ">").concat(v[l].innerHTML, "</").concat(t.HTML5Map[v[l].tagName], ">"));
            A && e.selection.restore();
          }
        }, tables: function() {
          (function() {
            for (var A = e.el.querySelectorAll("tr"), l = 0; l < A.length; l++) {
              for (var i = A[l].children, a = !0, p = 0; p < i.length; p++)
                if (i[p].tagName !== "TH") {
                  a = !1;
                  break;
                }
              if (a !== !1 && i.length !== 0) {
                for (var c = A[l]; c && c.tagName !== "TABLE" && c.tagName !== "THEAD"; )
                  c = c.parentNode;
                var h = c;
                h.tagName !== "THEAD" && (h = e.doc.createElement("THEAD"), c.insertBefore(h, c.firstChild)), h.appendChild(A[l]);
              }
            }
          })();
        }, lists: function() {
          (function() {
            var A, l = [];
            do {
              if (l.length) {
                var i = l[0], a = e.doc.createElement("ul");
                i.parentNode.insertBefore(a, i);
                do {
                  var p = i;
                  i = i.nextSibling, a.appendChild(p);
                } while (i && i.tagName === "LI");
              }
              l = [];
              for (var c = e.el.querySelectorAll("li"), h = 0; h < c.length; h++)
                A = c[h], e.node.isList(A.parentNode) || l.push(c[h]);
            } while (0 < l.length);
          })(), function() {
            for (var A = e.el.querySelectorAll("ol + ol, ul + ul"), l = 0; l < A.length; l++) {
              var i = A[l];
              if (e.node.isList(i.previousSibling) && e.node.openTagString(i) === e.node.openTagString(i.previousSibling)) {
                for (var a = e.node.contents(i), p = 0; p < a.length; p++)
                  i.previousSibling.appendChild(a[p]);
                i.parentNode.removeChild(i);
              }
            }
          }(), function() {
            for (var A = e.el.querySelectorAll("ul, ol"), l = 0; l < A.length; l++)
              for (var i = e.node.contents(A[l]), a = null, p = i.length - 1; 0 <= p; p--)
                i[p].tagName !== "LI" && i[p].tagName != "UL" && i[p].tagName != "OL" ? (a || (a = b(e.doc.createElement("LI"))).insertBefore(i[p]), a.prepend(i[p])) : a = null;
          }(), function() {
            var A, l, i;
            do {
              l = !1;
              var a = e.el.querySelectorAll("li:empty");
              for (A = 0; A < a.length; A++)
                a[A].parentNode.removeChild(a[A]);
              var p = e.el.querySelectorAll("ul, ol");
              for (A = 0; A < p.length; A++)
                (i = p[A]).querySelector("LI") || (l = !0, i.parentNode.removeChild(i));
            } while (l === !0);
          }(), function() {
            for (var A = e.el.querySelectorAll("ul > ul, ol > ol, ul > ol, ol > ul"), l = 0; l < A.length; l++) {
              var i = A[l], a = i.previousSibling;
              a && (a.tagName === "LI" ? a.appendChild(i) : b(i).wrap("<li></li>"));
            }
          }(), function() {
            for (var A = e.el.querySelectorAll("li > ul, li > ol"), l = 0; l < A.length; l++) {
              var i = A[l];
              if (i.nextSibling) {
                var a = i.nextSibling, p = b(e.doc.createElement("LI"));
                b(i.parentNode).after(p.get(0));
                do {
                  var c = a;
                  a = a.nextSibling, p.append(c);
                } while (a);
              }
            }
          }(), function() {
            for (var A = e.el.querySelectorAll("li > ul, li > ol"), l = 0; l < A.length; l++) {
              var i = A[l];
              if (e.node.isFirstSibling(i))
                b(i).before("<br/>");
              else if (i.previousSibling && i.previousSibling.tagName === "BR") {
                for (var a = i.previousSibling.previousSibling; a && e.node.hasClass(a, "fr-marker"); )
                  a = a.previousSibling;
                a && a.tagName !== "BR" && b(i.previousSibling).remove();
              }
            }
          }(), function() {
            for (var A = e.el.querySelectorAll("li:empty"), l = 0; l < A.length; l++)
              b(A[l]).remove();
          }();
        }, invisibleSpaces: function(v) {
          return v.replace(/\u200b/g, "").length === v.length ? v : e.clean.exec(v, E);
        }, exec: y };
      }, t.XS = 0, t.SM = 1, t.MD = 2, t.LG = 3, t.LinkRegExCommon = "[".concat("a-z\\u0080-\\u009f\\u00a1-\\uffff0-9-_\\.", "]{1,}"), t.LinkRegExEnd = "((:[0-9]{1,5})|)(((\\/|\\?|#)[a-z\\u00a1-\\uffff0-9@?\\|!^=%&amp;\\/~+#-\\'*-_{}]*)|())", t.LinkRegExTLD = "((".concat(t.LinkRegExCommon, ")(\\.(com|net|org|edu|mil|gov|co|biz|info|me|dev)))"), t.LinkRegExHTTP = "((ftp|http|https):\\/\\/".concat(t.LinkRegExCommon, ")"), t.LinkRegExAuth = "((ftp|http|https):\\/\\/[\\u0021-\\uffff]{1,}@".concat(t.LinkRegExCommon, ")"), t.LinkRegExWWW = "(www\\.".concat(t.LinkRegExCommon, "\\.[a-z0-9-]{2,24})"), t.LinkRegEx = "(".concat(t.LinkRegExTLD, "|").concat(t.LinkRegExHTTP, "|").concat(t.LinkRegExWWW, "|").concat(t.LinkRegExAuth, ")").concat(t.LinkRegExEnd), t.LinkProtocols = ["mailto", "tel", "sms", "notes", "data"], t.MAIL_REGEX = /.+@.+\..+/i, t.MODULES.helpers = function(e) {
        var r, s = e.$;
        function d() {
          var C = {}, O = function() {
            var x, v = -1;
            return navigator.appName === "Microsoft Internet Explorer" ? (x = navigator.userAgent, new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})").exec(x) !== null && (v = parseFloat(RegExp.$1))) : navigator.appName === "Netscape" && (x = navigator.userAgent, new RegExp("Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})").exec(x) !== null && (v = parseFloat(RegExp.$1))), v;
          }();
          if (0 < O)
            C.msie = !0;
          else {
            var U = navigator.userAgent.toLowerCase(), y = /(edge)[ /]([\w.]+)/.exec(U) || /(chrome)[ /]([\w.]+)/.exec(U) || /(webkit)[ /]([\w.]+)/.exec(U) || /(opera)(?:.*version|)[ /]([\w.]+)/.exec(U) || /(msie) ([\w.]+)/.exec(U) || U.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(U) || [], B = y[1] || "";
            y[2], y[1] && (C[B] = !0), C.chrome ? C.webkit = !0 : C.webkit && (C.safari = !0);
          }
          return C.msie && (C.version = O), C;
        }
        function u() {
          return /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && !g();
        }
        function b() {
          return /(Android)/g.test(navigator.userAgent) && !g();
        }
        function E() {
          return /(Blackberry)/g.test(navigator.userAgent);
        }
        function g() {
          return /(Windows Phone)/gi.test(navigator.userAgent);
        }
        var m = null;
        return { _init: function() {
          e.browser = d();
        }, isIOS: u, isMac: function() {
          return m === null && (m = 0 <= navigator.platform.toUpperCase().indexOf("MAC")), m;
        }, isAndroid: b, isBlackberry: E, isWindowsPhone: g, isMobile: function() {
          return b() || u() || E();
        }, isEmail: function(O) {
          return !/^(https?:|ftps?:|)\/\//i.test(O) && t.MAIL_REGEX.test(O);
        }, requestAnimationFrame: function() {
          return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(O) {
            window.setTimeout(O, 1e3 / 60);
          };
        }, getPX: function(O) {
          return parseInt(O, 10) || 0;
        }, screenSize: function() {
          try {
            var O = s(".fr-box").width();
            if (O < 768)
              return t.XS;
            if (768 <= O && O < 992)
              return t.SM;
            if (992 <= O && O < 1200)
              return t.MD;
            if (1200 <= O)
              return t.LG;
          } catch {
            return t.LG;
          }
        }, isTouch: function() {
          return "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch;
        }, sanitizeURL: function(O) {
          return /^(https?:|ftps?:|)\/\//i.test(O) || /^([A-Za-z]:(\\){1,2}|[A-Za-z]:((\\){1,2}[^\\]+)+)(\\)?$/i.test(O) || new RegExp("^(".concat(t.LinkProtocols.join("|"), "):"), "i").test(O) ? O : O = encodeURIComponent(O).replace(/%23/g, "#").replace(/%2F/g, "/").replace(/%25/g, "%").replace(/mailto%3A/gi, "mailto:").replace(/file%3A/gi, "file:").replace(/sms%3A/gi, "sms:").replace(/tel%3A/gi, "tel:").replace(/notes%3A/gi, "notes:").replace(/data%3Aimage/gi, "data:image").replace(/blob%3A/gi, "blob:").replace(/%3A(\d)/gi, ":$1").replace(/webkit-fake-url%3A/gi, "webkit-fake-url:").replace(/%3F/g, "?").replace(/%3D/g, "=").replace(/%26/g, "&").replace(/&amp;/g, "&").replace(/%2C/g, ",").replace(/%3B/g, ";").replace(/%2B/g, "+").replace(/%40/g, "@").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/%7B/g, "{").replace(/%7D/g, "}");
        }, isArray: function(O) {
          return O && !Object.prototype.propertyIsEnumerable.call(O, "length") && o(O) === "object" && typeof O.length == "number";
        }, RGBToHex: function(O) {
          function U(y) {
            return "0".concat(parseInt(y, 10).toString(16)).slice(-2);
          }
          try {
            return O && O !== "transparent" ? /^#[0-9A-F]{6}$/i.test(O) ? O : (O = O.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/), "#".concat(U(O[1])).concat(U(O[2])).concat(U(O[3])).toUpperCase()) : "";
          } catch {
            return null;
          }
        }, HEXtoRGB: function(O) {
          O = O.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(y, B, I, x) {
            return B + B + I + I + x + x;
          });
          var U = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(O);
          return U ? "rgb(".concat(parseInt(U[1], 16), ", ").concat(parseInt(U[2], 16), ", ").concat(parseInt(U[3], 16), ")") : "";
        }, isURL: function(O) {
          return !!/^(https?:|ftps?:|)\/\//i.test(O) && (O = String(O).replace(/</g, "%3C").replace(/>/g, "%3E").replace(/"/g, "%22").replace(/ /g, "%20"), new RegExp("^".concat(t.LinkRegExHTTP).concat(t.LinkRegExEnd, "$"), "gi").test(O));
        }, getAlignment: function(O) {
          O.css || (O = s(O));
          var U = (O.css("text-align") || "").replace(/-(.*)-/g, "");
          if (["left", "right", "justify", "center"].indexOf(U) < 0) {
            if (!r) {
              var y = s('<div dir="'.concat(e.opts.direction === "rtl" ? "rtl" : "auto", '" style="text-align: ').concat(e.$el.css("text-align"), '; position: fixed; left: -3000px;"><span id="s1">.</span><span id="s2">.</span></div>'));
              s("body").first().append(y);
              var B = y.find("#s1").get(0).getBoundingClientRect().left, I = y.find("#s2").get(0).getBoundingClientRect().left;
              y.remove(), r = B < I ? "left" : "right";
            }
            U = r;
          }
          return U;
        }, scrollTop: function() {
          return e.o_win.pageYOffset ? e.o_win.pageYOffset : e.o_doc.documentElement && e.o_doc.documentElement.scrollTop ? e.o_doc.documentElement.scrollTop : e.o_doc.body.scrollTop ? e.o_doc.body.scrollTop : 0;
        }, scrollLeft: function() {
          return e.o_win.pageXOffset ? e.o_win.pageXOffset : e.o_doc.documentElement && e.o_doc.documentElement.scrollLeft ? e.o_doc.documentElement.scrollLeft : e.o_doc.body.scrollLeft ? e.o_doc.body.scrollLeft : 0;
        }, isInViewPort: function(O) {
          var U = O.getBoundingClientRect();
          return 0 <= (U = { top: Math.round(U.top), bottom: Math.round(U.bottom) }).top && U.bottom <= (window.innerHeight || document.documentElement.clientHeight) || U.top <= 0 && U.bottom >= (window.innerHeight || document.documentElement.clientHeight);
        } };
      }, t.MODULES.events = function(e) {
        var r, s = e.$, d = {};
        function u(A, l, i) {
          y(A, l, i);
        }
        function b(A) {
          if (A === void 0 && (A = !0), !e.$wp || (e.helpers.isIOS() && e.$win.get(0).focus(), e.core.hasFocus()))
            return !1;
          if (!e.core.hasFocus() && A) {
            var l = e.$win.scrollTop();
            if (e.browser.msie && e.$box && e.$box.css("position", "fixed"), e.browser.msie && e.$wp && e.$wp.css("overflow", "visible"), e.browser.msie && e.$sc && e.$sc.css("position", "fixed"), m(), e.el.focus(), e.events.trigger("focus"), g(), e.browser.msie && e.$sc && e.$sc.css("position", ""), e.browser.msie && e.$box && e.$box.css("position", ""), e.browser.msie && e.$wp && e.$wp.css("overflow", "auto"), l !== e.$win.scrollTop() && e.$win.scrollTop(l), !e.selection.info(e.el).atStart)
              return !1;
          }
          if (!e.core.hasFocus() || 0 < e.$el.find(".fr-marker").length)
            return !1;
          if (e.selection.info(e.el).atStart && e.selection.isCollapsed() && e.html.defaultTag() !== null) {
            var i = e.markers.insert();
            if (i && !e.node.blockParent(i)) {
              s(i).remove();
              var a = e.$el.find(e.html.blockTagsQuery()).get(0);
              a && (s(a).prepend(t.MARKERS), e.selection.restore());
            } else
              i && s(i).remove();
          }
        }
        var E = !1;
        function g() {
          r = !0;
        }
        function m() {
          r = !1;
        }
        function C() {
          return r;
        }
        function O(A, l, i) {
          var a, p = A.split(" ");
          if (1 < p.length) {
            for (var c = 0; c < p.length; c++)
              O(p[c], l, i);
            return !0;
          }
          i === void 0 && (i = !1), a = A.indexOf("shared.") !== 0 ? (d[A] = d[A] || [], d[A]) : (e.shared._events[A] = e.shared._events[A] || [], e.shared._events[A]), i ? a.unshift(l) : a.push(l);
        }
        var U = [];
        function y(A, l, i, a, p) {
          typeof i == "function" && (p = a, a = i, i = !1);
          var c = p ? e.shared.$_events : U, h = p ? e.sid : e.id, M = "".concat(l.trim().split(" ").join(".ed".concat(h, " ")), ".ed").concat(h);
          i ? A.on(M, i, a) : A.on(M, a), c.push([A, M]);
        }
        function B(A) {
          for (var l = 0; l < A.length; l++)
            A[l][0].off(A[l][1]);
        }
        function I(A, l, i) {
          if (!e.edit.isDisabled() || i) {
            var a, p;
            if (A.indexOf("shared.") !== 0)
              a = d[A];
            else {
              if (0 < e.shared.count)
                return !1;
              a = e.shared._events[A];
            }
            if (a) {
              for (var c = 0; c < a.length; c++)
                if ((p = a[c].apply(e, l)) === !1)
                  return !1;
            }
            return (!e.opts.events || !e.opts.events[A] || (p = e.opts.events[A].apply(e, l)) !== !1) && p;
          }
        }
        function x() {
          for (var A in d)
            Object.prototype.hasOwnProperty.call(d, A) && delete d[A];
        }
        function v() {
          for (var A in e.shared._events)
            Object.prototype.hasOwnProperty.call(e.shared._events, A) && delete e.shared._events[A];
        }
        return { _init: function() {
          e.shared.$_events = e.shared.$_events || [], e.shared._events = {}, function() {
            e.helpers.isMobile() ? (e._mousedown = "touchstart", e._mouseup = "touchend", e._move = "touchmove", e._mousemove = "touchmove") : (e._mousedown = "mousedown", e._mouseup = "mouseup", e._move = "", e._mousemove = "mousemove");
          }(), function() {
            u(e.$el, "click mouseup mousedown touchstart touchend dragenter dragover dragleave dragend drop dragstart", function(i) {
              I(i.type, [i]);
            }), O("mousedown", function() {
              for (var i = 0; i < t.INSTANCES.length; i++)
                t.INSTANCES[i] !== e && t.INSTANCES[i].popups && t.INSTANCES[i].popups.areVisible() && t.INSTANCES[i].$el.find(".fr-marker").remove();
            });
          }(), function() {
            u(e.$win, e._mousedown, function(i) {
              I("window.mousedown", [i]), g();
            }), u(e.$win, e._mouseup, function(i) {
              I("window.mouseup", [i]);
            }), u(e.$win, "cut copy keydown keyup touchmove touchend", function(i) {
              I("window.".concat(i.type), [i]);
            });
          }(), function() {
            u(e.$doc, "dragend drop", function(i) {
              I("document.".concat(i.type), [i]);
            });
          }(), function() {
            u(e.$el, "keydown keypress keyup input", function(i) {
              I(i.type, [i]);
            });
          }(), function() {
            u(e.$el, "focus", function(i) {
              C() && (b(!1), E === !1 && I(i.type, [i]));
            }), u(e.$el, "blur", function(i) {
              C() && E === !0 && (I(i.type, [i]), g());
            }), y(e.$el, "mousedown", '[contenteditable="true"]', function() {
              m(), e.$el.blur();
            }), O("focus", function() {
              E = !0;
            }), O("blur", function() {
              E = !1;
            });
          }(), g(), function() {
            u(e.$el, "cut copy paste beforepaste", function(i) {
              I(i.type, [i]);
            });
          }(), O("destroy", x), O("shared.destroy", v);
        }, on: O, trigger: I, bindClick: function(l, i, a) {
          y(l, e._mousedown, i, function(p) {
            e.edit.isDisabled() || function(h) {
              var M = s(h.currentTarget);
              return e.edit.isDisabled() || e.node.hasClass(M.get(0), "fr-disabled") ? (h.preventDefault(), !1) : h.type === "mousedown" && h.which !== 1 || (e.helpers.isMobile() || h.preventDefault(), (e.helpers.isAndroid() || e.helpers.isWindowsPhone()) && M.parents(".fr-dropdown-menu").length === 0 && (h.preventDefault(), h.stopPropagation()), M.addClass("fr-selected"), void e.events.trigger("commands.mousedown", [M]));
            }(p);
          }, !0), y(l, "".concat(e._mouseup, " ").concat(e._move), i, function(p) {
            e.edit.isDisabled() || function(h, M) {
              var N = s(h.currentTarget);
              if (e.edit.isDisabled() || e.node.hasClass(N.get(0), "fr-disabled"))
                return h.preventDefault(), !1;
              if (h.type === "mouseup" && h.which !== 1 || e.button.getButtons(".fr-selected", !0).get(0) == N.get(0) && !e.node.hasClass(N.get(0), "fr-selected"))
                return !0;
              if (h.type !== "touchmove") {
                if (h.stopPropagation(), h.stopImmediatePropagation(), h.preventDefault(), !e.node.hasClass(N.get(0), "fr-selected"))
                  return e.button.getButtons(".fr-selected", !0).removeClass("fr-selected"), !1;
                if (e.button.getButtons(".fr-selected", !0).removeClass("fr-selected"), N.data("dragging") || N.attr("disabled"))
                  return N.removeData("dragging"), !1;
                var ie = N.data("timeout");
                ie && (clearTimeout(ie), N.removeData("timeout")), M.apply(e, [h]);
              } else
                N.data("timeout") || N.data("timeout", setTimeout(function() {
                  N.data("dragging", !0);
                }, 100));
            }(p, a);
          }, !0), y(l, "mousedown click mouseup", i, function(p) {
            e.edit.isDisabled() || p.stopPropagation();
          }, !0), O("window.mouseup", function() {
            e.edit.isDisabled() || (l.find(i).removeClass("fr-selected"), g());
          }), y(l, "mouseover", i, function() {
            s(this).hasClass("fr-options") && s(this).prev(".fr-btn").addClass("fr-btn-hover"), s(this).next(".fr-btn").hasClass("fr-options") && s(this).next(".fr-btn").addClass("fr-btn-hover");
          }), y(l, "mouseout", i, function() {
            s(this).hasClass("fr-options") && s(this).prev(".fr-btn").removeClass("fr-btn-hover"), s(this).next(".fr-btn").hasClass("fr-options") && s(this).next(".fr-btn").removeClass("fr-btn-hover");
          });
        }, disableBlur: m, enableBlur: g, blurActive: C, focus: b, chainTrigger: function(l, i, a) {
          if (!e.edit.isDisabled() || a) {
            var p, c;
            if (l.indexOf("shared.") !== 0)
              p = d[l];
            else {
              if (0 < e.shared.count)
                return !1;
              p = e.shared._events[l];
            }
            if (p)
              for (var h = 0; h < p.length; h++)
                (c = p[h].apply(e, [i])) !== void 0 && (i = c);
            return e.opts.events && e.opts.events[l] && (c = e.opts.events[l].apply(e, [i])) !== void 0 && (i = c), i;
          }
        }, $on: y, $off: function() {
          B(U), U = [], e.shared.count === 0 && (B(e.shared.$_events), e.shared.$_events = []);
        } };
      }, Object.assign(t.DEFAULTS, { indentMargin: 20 }), t.COMMANDS = { bold: { title: "Bold", toggle: !0, refresh: function(e) {
        var r = this.format.is("strong");
        e.toggleClass("fr-active", r).attr("aria-pressed", r);
      } }, italic: { title: "Italic", toggle: !0, refresh: function(e) {
        var r = this.format.is("em");
        e.toggleClass("fr-active", r).attr("aria-pressed", r);
      } }, underline: { title: "Underline", toggle: !0, refresh: function(e) {
        var r = this.format.is("u");
        e.toggleClass("fr-active", r).attr("aria-pressed", r);
      } }, strikeThrough: { title: "Strikethrough", toggle: !0, refresh: function(e) {
        var r = this.format.is("s");
        e.toggleClass("fr-active", r).attr("aria-pressed", r);
      } }, subscript: { title: "Subscript", toggle: !0, refresh: function(e) {
        var r = this.format.is("sub");
        e.toggleClass("fr-active", r).attr("aria-pressed", r);
      } }, superscript: { title: "Superscript", toggle: !0, refresh: function(e) {
        var r = this.format.is("sup");
        e.toggleClass("fr-active", r).attr("aria-pressed", r);
      } }, outdent: { title: "Decrease Indent" }, indent: { title: "Increase Indent" }, undo: { title: "Undo", undo: !1, forcedRefresh: !0, disabled: !0 }, redo: { title: "Redo", undo: !1, forcedRefresh: !0, disabled: !0 }, insertHR: { title: "Insert Horizontal Line" }, clearFormatting: { title: "Clear Formatting" }, selectAll: { title: "Select All", undo: !1 }, moreText: { title: "More Text", undo: !1 }, moreParagraph: { title: "More Paragraph", undo: !1 }, moreRich: { title: "More Rich", undo: !1 }, moreMisc: { title: "More Misc", undo: !1 } }, t.RegisterCommand = function(e, r) {
        t.COMMANDS[e] = r;
      }, t.MODULES.commands = function(e) {
        var r = e.$;
        function s(U) {
          return e.html.defaultTag() && (U = "<".concat(e.html.defaultTag(), ">").concat(U, "</").concat(e.html.defaultTag(), ">")), U;
        }
        var d = { bold: function() {
          E("bold", "strong");
        }, subscript: function() {
          e.format.is("sup") && e.format.remove("sup"), E("subscript", "sub");
        }, superscript: function() {
          e.format.is("sub") && e.format.remove("sub"), E("superscript", "sup");
        }, italic: function() {
          E("italic", "em");
        }, strikeThrough: function() {
          E("strikeThrough", "s");
        }, underline: function() {
          E("underline", "u");
        }, undo: function() {
          e.undo.run();
        }, redo: function() {
          e.undo.redo();
        }, indent: function() {
          g(1);
        }, outdent: function() {
          g(-1);
        }, show: function() {
          e.opts.toolbarInline && e.toolbar.showInline(null, !0);
        }, insertHR: function() {
          e.selection.remove();
          var U = "";
          e.core.isEmpty() && (U = s(U = "<br>")), e.html.insert('<hr id="fr-just" class="fr-just">'.concat(U));
          var y, B = e.$el.find("hr#fr-just").length ? e.$el.find("hr#fr-just") : e.$el.find(".fr-just");
          if (B.removeAttr("id"), B.removeAttr("class"), B.next().length === 0) {
            var I = e.html.defaultTag();
            I ? B.after(r(e.doc.createElement(I)).append("<br>").get(0)) : B.after("<br>");
          }
          B.prev().is("hr") ? y = e.selection.setAfter(B.get(0), !1) : B.next().is("hr") ? y = e.selection.setBefore(B.get(0), !1) : e.selection.setAfter(B.get(0), !1) || e.selection.setBefore(B.get(0), !1), y || y === void 0 || (U = s(U = "".concat(t.MARKERS, "<br>")), B.after(U)), e.selection.restore();
        }, clearFormatting: function() {
          e.format.remove();
        }, selectAll: function() {
          e.doc.execCommand("selectAll", !1, !1);
        }, moreText: function(U) {
          u(U);
        }, moreParagraph: function(U) {
          u(U);
        }, moreRich: function(U) {
          u(U);
        }, moreMisc: function(U) {
          u(U);
        } };
        function u(U) {
          (function(B) {
            var I = e.$tb.find('.fr-more-toolbar[data-name="'.concat(B.attr("data-group-name"), '"]'));
            e.$tb.find(".fr-open").not(B).removeClass("fr-open"), B.toggleClass("fr-open"), e.$tb.find(".fr-more-toolbar").removeClass("fr-overflow-visible"), e.$tb.find(".fr-expanded").not(I).length ? (e.$tb.find(".fr-expanded").toggleClass("fr-expanded"), I.toggleClass("fr-expanded")) : (I.toggleClass("fr-expanded"), e.$box.toggleClass("fr-toolbar-open"), e.$tb.toggleClass("fr-toolbar-open"));
          })(e.$tb.find("[data-cmd=".concat(U, "]"))), e.toolbar.setMoreToolbarsHeight();
        }
        function b(U, y) {
          if (e.events.trigger("commands.before", r.merge([U], y || [])) !== !1) {
            var B = t.COMMANDS[U] && t.COMMANDS[U].callback || d[U], I = !0, x = !1;
            t.COMMANDS[U] && (typeof t.COMMANDS[U].focus < "u" && (I = t.COMMANDS[U].focus), typeof t.COMMANDS[U].accessibilityFocus < "u" && (x = t.COMMANDS[U].accessibilityFocus)), (!e.core.hasFocus() && I && !e.popups.areVisible() || !e.core.hasFocus() && x && e.accessibility.hasFocus()) && e.events.focus(!0), t.COMMANDS[U] && t.COMMANDS[U].undo !== !1 && (e.$el.find(".fr-marker").length && (e.events.disableBlur(), e.selection.restore()), e.undo.saveStep()), B && B.apply(e, r.merge([U], y || [])), e.events.trigger("commands.after", r.merge([U], y || [])), t.COMMANDS[U] && t.COMMANDS[U].undo !== !1 && e.undo.saveStep();
          }
        }
        function E(U, y) {
          e.format.toggle(y);
        }
        function g(U) {
          e.selection.save(), e.html.wrap(!0, !0, !0, !0), e.selection.restore();
          for (var y = e.selection.blocks(), B = 0; B < y.length; B++)
            if (y[B].tagName !== "LI" || y[B].parentNode.tagName !== "LI") {
              var I = r(y[B]);
              y[B].tagName != "LI" && y[B].parentNode.tagName == "LI" && (I = r(y[B].parentNode));
              var x = e.opts.direction === "rtl" || I.css("direction") === "rtl" ? "margin-right" : "margin-left", v = e.helpers.getPX(I.css(x));
              if (I.width() < 2 * e.opts.indentMargin && 0 < U)
                continue;
              I.css(x, Math.max(v + U * e.opts.indentMargin, 0) || ""), I.removeClass("fr-temp-div");
            }
          e.selection.save(), e.html.unwrap(), e.selection.restore();
        }
        function m(U) {
          return function() {
            b(U);
          };
        }
        var C = {};
        for (var O in d)
          Object.prototype.hasOwnProperty.call(d, O) && (C[O] = m(O));
        return Object.assign(C, { exec: b, _init: function() {
          e.events.on("keydown", function(y) {
            var B = e.selection.element();
            if (B && B.tagName === "HR" && !e.keys.isArrow(y.which))
              return y.preventDefault(), !1;
          }), e.events.on("keyup", function(y) {
            var B = e.selection.element();
            if (B && B.tagName === "HR") {
              if (y.which === t.KEYCODE.ARROW_LEFT || y.which === t.KEYCODE.ARROW_UP) {
                if (B.previousSibling)
                  return e.node.isBlock(B.previousSibling) ? e.selection.setAtEnd(B.previousSibling) : r(B).before(t.MARKERS), e.selection.restore(), !1;
              } else if ((y.which === t.KEYCODE.ARROW_RIGHT || y.which === t.KEYCODE.ARROW_DOWN) && B.nextSibling)
                return e.node.isBlock(B.nextSibling) ? e.selection.setAtStart(B.nextSibling) : r(B).after(t.MARKERS), e.selection.restore(), !1;
            }
          }), e.events.on("mousedown", function(y) {
            if (y.target && y.target.tagName === "HR")
              return y.preventDefault(), y.stopPropagation(), !1;
          }), e.events.on("mouseup", function() {
            var y = e.selection.element();
            y === e.selection.endElement() && y && y.tagName === "HR" && (y.nextSibling && (e.node.isBlock(y.nextSibling) ? e.selection.setAtStart(y.nextSibling) : r(y).after(t.MARKERS)), e.selection.restore());
          });
        } });
      }, t.MODULES.cursorLists = function(e) {
        var r = e.$;
        function s(u) {
          for (var b = u; b.tagName !== "LI"; )
            b = b.parentNode;
          return b;
        }
        function d(u) {
          for (var b = u; !e.node.isList(b); )
            b = b.parentNode;
          return b;
        }
        return { _startEnter: function(b) {
          var E, g = s(b), m = g.nextSibling, C = g.previousSibling, O = e.html.defaultTag();
          if (e.node.isEmpty(g, !0) && m) {
            for (var U = "", y = "", B = b.parentNode; !e.node.isList(B) && B.parentNode && (B.parentNode.tagName !== "LI" || B.parentNode === g); )
              U = e.node.openTagString(B) + U, y += e.node.closeTagString(B), B = B.parentNode;
            U = e.node.openTagString(B) + U, y += e.node.closeTagString(B);
            var I = "";
            for (I = B.parentNode && B.parentNode.tagName === "LI" ? "".concat(y, "<li>").concat(t.MARKERS, "<br>").concat(U) : O ? "".concat(y, "<").concat(O, ">").concat(t.MARKERS, "<br></").concat(O, ">").concat(U) : "".concat(y + t.MARKERS, "<br>").concat(U); ["UL", "OL"].indexOf(B.tagName) < 0 || B.parentNode && B.parentNode.tagName === "LI"; )
              B = B.parentNode;
            r(g).replaceWith('<span id="fr-break"></span>');
            var x = e.node.openTagString(B) + r(B).html() + e.node.closeTagString(B);
            x = x.replace(/<span id="fr-break"><\/span>/g, I), r(B).replaceWith(x), e.$el.find("li:empty").remove();
          } else if (C && m || !e.node.isEmpty(g, !0)) {
            for (var v = "<br>", A = b.parentNode; A && A.tagName !== "LI"; )
              v = e.node.openTagString(A) + v + e.node.closeTagString(A), A = A.parentNode;
            r(g).before("<li>".concat(v, "</li>")), r(b).remove();
          } else if (C) {
            E = d(g);
            for (var l = "".concat(t.MARKERS, "<br>"), i = b.parentNode; i && i.tagName !== "LI"; )
              l = e.node.openTagString(i) + l + e.node.closeTagString(i), i = i.parentNode;
            E.parentNode && E.parentNode.tagName === "LI" ? r(E.parentNode).after("<li>".concat(l, "</li>")) : O ? r(E).after("<".concat(O, ">").concat(l, "</").concat(O, ">")) : r(E).after(l), r(g).remove();
          } else
            (E = d(g)).parentNode && E.parentNode.tagName === "LI" ? m ? r(E.parentNode).before("".concat(e.node.openTagString(g) + t.MARKERS, "<br></li>")) : r(E.parentNode).after("".concat(e.node.openTagString(g) + t.MARKERS, "<br></li>")) : O ? r(E).before("<".concat(O, ">").concat(t.MARKERS, "<br></").concat(O, ">")) : r(E).before("".concat(t.MARKERS, "<br>")), r(g).remove();
        }, _middleEnter: function(b) {
          for (var E = s(b), g = "", m = b, C = "", O = "", U = !1; m !== E; ) {
            var y = (m = m.parentNode).tagName === "A" && e.cursor.isAtEnd(b, m) ? "fr-to-remove" : "";
            U || m == E || e.node.isBlock(m) || (U = !0, C += t.INVISIBLE_SPACE), C = e.node.openTagString(r(m).clone().addClass(y).get(0)) + C, O = e.node.closeTagString(m) + O;
          }
          g = O + g + C + t.MARKERS + (e.opts.keepFormatOnDelete ? t.INVISIBLE_SPACE : ""), r(b).replaceWith('<span id="fr-break"></span>');
          var B = e.node.openTagString(E) + r(E).html() + e.node.closeTagString(E);
          B = B.replace(/<span id="fr-break"><\/span>/g, g), r(E).replaceWith(B);
        }, _endEnter: function(b) {
          for (var E = s(b), g = t.MARKERS, m = "", C = b, O = !1; C !== E; )
            if (!(C = C.parentNode).classList.contains("fr-img-space-wrap") && !C.classList.contains("fr-img-space-wrap2")) {
              var U = C.tagName === "A" && e.cursor.isAtEnd(b, C) ? "fr-to-remove" : "";
              O || C === E || e.node.isBlock(C) || (O = !0, m += t.INVISIBLE_SPACE), m = e.node.openTagString(r(C).clone().addClass(U).get(0)) + m, g += e.node.closeTagString(C);
            }
          var y = m + g;
          r(b).remove(), r(E).after(y);
        }, _backspace: function(b) {
          var E = s(b), g = E.previousSibling;
          if (g) {
            g = r(g).find(e.html.blockTagsQuery()).get(-1) || g, r(b).replaceWith(t.MARKERS);
            var m = e.node.contents(g);
            m.length && m[m.length - 1].tagName === "BR" && r(m[m.length - 1]).remove(), r(E).find(e.html.blockTagsQuery()).not("ol, ul, table").each(function() {
              this.parentNode === E && r(this).replaceWith(r(this).html() + (e.node.isEmpty(this) ? "" : "<br>"));
            });
            for (var C, O = e.node.contents(E)[0]; O && !e.node.isList(O); )
              C = O.nextSibling, r(g).append(O), O = C;
            for (g = E.previousSibling; O; )
              C = O.nextSibling, r(g).append(O), O = C;
            1 < (m = e.node.contents(g)).length && m[m.length - 1].tagName === "BR" && r(m[m.length - 1]).remove(), r(E).remove();
          } else {
            var U = d(E);
            if (r(b).replaceWith(t.MARKERS), U.parentNode && U.parentNode.tagName === "LI") {
              var y = U.previousSibling;
              e.node.isBlock(y) ? (r(E).find(e.html.blockTagsQuery()).not("ol, ul, table").each(function() {
                this.parentNode === E && r(this).replaceWith(r(this).html() + (e.node.isEmpty(this) ? "" : "<br>"));
              }), r(y).append(r(E).html())) : r(U).before(r(E).html());
            } else {
              var B = e.html.defaultTag();
              B && r(E).find(e.html.blockTagsQuery()).length === 0 ? r(U).before("<".concat(B, ">").concat(r(E).html(), "</").concat(B, ">")) : r(U).before(r(E).html());
            }
            r(E).remove(), e.html.wrap(), r(U).find("li").length === 0 && r(U).remove();
          }
        }, _del: function(b) {
          var E, g = s(b), m = g.nextSibling;
          if (m) {
            (E = e.node.contents(m)).length && E[0].tagName === "BR" && r(E[0]).remove(), r(m).find(e.html.blockTagsQuery()).not("ol, ul, table").each(function() {
              this.parentNode === m && r(this).replaceWith(r(this).html() + (e.node.isEmpty(this) ? "" : "<br>"));
            });
            for (var C, O = b, U = e.node.contents(m)[0]; U && !e.node.isList(U); )
              C = U.nextSibling, r(O).after(U), O = U, U = C;
            for (; U; )
              C = U.nextSibling, r(g).append(U), U = C;
            r(b).replaceWith(t.MARKERS), r(m).remove();
          } else {
            for (var y = g; !y.nextSibling && y !== e.el; )
              y = y.parentNode;
            if (y === e.el)
              return !1;
            if (y = y.nextSibling, e.node.isBlock(y))
              t.NO_DELETE_TAGS.indexOf(y.tagName) < 0 && (r(b).replaceWith(t.MARKERS), (E = e.node.contents(g)).length && E[E.length - 1].tagName === "BR" && r(E[E.length - 1]).remove(), r(g).append(r(y).html()), r(y).remove());
            else
              for ((E = e.node.contents(g)).length && E[E.length - 1].tagName === "BR" && r(E[E.length - 1]).remove(), r(b).replaceWith(t.MARKERS); y && !e.node.isBlock(y) && y.tagName !== "BR"; )
                r(g).append(r(y)), y = y.nextSibling;
          }
        } };
      }, t.NO_DELETE_TAGS = ["TH", "TD", "TR", "TABLE", "FORM"], t.SIMPLE_ENTER_TAGS = ["TH", "TD", "LI", "DL", "DT", "FORM"], t.MODULES.cursor = function(e) {
        var r = e.$;
        function s(I) {
          return !!I && (!!e.node.isBlock(I) || (I.nextSibling && I.nextSibling.nodeType === Node.TEXT_NODE && I.nextSibling.textContent.replace(/\u200b/g, "").length === 0 ? s(I.nextSibling) : !(I.nextSibling && (!I.previousSibling || I.nextSibling.tagName !== "BR" || I.nextSibling.nextSibling)) && s(I.parentNode)));
        }
        function d(I) {
          return !!I && (!!e.node.isBlock(I) || (I.previousSibling && I.previousSibling.nodeType === Node.TEXT_NODE && I.previousSibling.textContent.replace(/\u200b/g, "").length === 0 ? d(I.previousSibling) : !I.previousSibling && (!(I.previousSibling || !e.node.hasClass(I.parentNode, "fr-inner")) || d(I.parentNode))));
        }
        function u(I, x) {
          return !!I && I !== e.$wp.get(0) && (I.previousSibling && I.previousSibling.nodeType === Node.TEXT_NODE && I.previousSibling.textContent.replace(/\u200b/g, "").length === 0 ? u(I.previousSibling, x) : !I.previousSibling && (I.parentNode === x || u(I.parentNode, x)));
        }
        function b(I, x) {
          return !!I && I !== e.$wp.get(0) && (I.nextSibling && I.nextSibling.nodeType === Node.TEXT_NODE && I.nextSibling.textContent.replace(/\u200b/g, "").length === 0 ? b(I.nextSibling, x) : !(I.nextSibling && (!I.previousSibling || I.nextSibling.tagName !== "BR" || I.nextSibling.nextSibling)) && (I.parentNode === x || b(I.parentNode, x)));
        }
        function E(I) {
          return 0 < r(I).parentsUntil(e.$el, "LI").length && r(I).parentsUntil("LI", "TABLE").length === 0;
        }
        function g(I, x) {
          var v = new RegExp("".concat(x ? "^" : "", "(([\\uD83C-\\uDBFF\\uDC00-\\uDFFF]+\\u200D)*[\\uD83C-\\uDBFF\\uDC00-\\uDFFF]{2})").concat(x ? "" : "$"), "i"), A = I.match(v);
          return A ? A[0].length : 1;
        }
        function m(I) {
          for (var x, v = I; !v.previousSibling; )
            if (v = v.parentNode, e.node.isElement(v))
              return !1;
          if (v = v.previousSibling, !e.node.isBlock(v) && e.node.isEditable(v)) {
            for (x = e.node.contents(v); v.nodeType !== Node.TEXT_NODE && !e.node.isDeletable(v) && x.length && e.node.isEditable(v); )
              v = x[x.length - 1], x = e.node.contents(v);
            if (v.nodeType === Node.TEXT_NODE) {
              var A = v.textContent, l = A.length;
              if (A.length && A[A.length - 1] === `
`)
                return v.textContent = A.substring(0, l - 2), v.textContent.length === 0 && v.parentNode.removeChild(v), m(I);
              e.opts.tabSpaces && A.length >= e.opts.tabSpaces && A.substr(A.length - e.opts.tabSpaces, A.length - 1).replace(/ /g, "").replace(new RegExp(t.UNICODE_NBSP, "g"), "").length === 0 && (l = A.length - e.opts.tabSpaces + 1), v.textContent = A.substring(0, l - g(A)), e.opts.htmlUntouched && !I.nextSibling && v.textContent.length && v.textContent[v.textContent.length - 1] === " " && (v.textContent = v.textContent.substring(0, v.textContent.length - 1) + t.UNICODE_NBSP);
              var i = A.length !== v.textContent.length;
              if (v.textContent.length === 0)
                if (i && e.opts.keepFormatOnDelete)
                  r(v).after(t.INVISIBLE_SPACE + t.MARKERS);
                else if (A.length !== 0 && e.node.isBlock(v.parentNode))
                  r(v).after(t.MARKERS);
                else if ((v.parentNode.childNodes.length != 2 || v.parentNode != I.parentNode) && v.parentNode.childNodes.length != 1 || e.node.isBlock(v.parentNode) || e.node.isElement(v.parentNode) || !e.node.isDeletable(v.parentNode)) {
                  for (; !e.node.isElement(v.parentNode) && e.node.isEmpty(v.parentNode) && t.NO_DELETE_TAGS.indexOf(v.parentNode.tagName) < 0; ) {
                    var a = v;
                    v = v.parentNode, a.parentNode.removeChild(a);
                  }
                  r(v).after(t.MARKERS), e.node.isElement(v.parentNode) && !I.nextSibling && v.previousSibling && v.previousSibling.tagName === "BR" && r(I).after("<br>"), v.parentNode.removeChild(v);
                } else
                  r(v.parentNode).after(t.MARKERS), r(v.parentNode).remove();
              else
                r(v).after(t.MARKERS);
            } else
              e.node.isDeletable(v) ? (r(v).after(t.MARKERS), r(v).remove()) : I.nextSibling && I.nextSibling.tagName === "BR" && e.node.isVoid(v) && v.tagName !== "BR" ? (r(I.nextSibling).remove(), r(I).replaceWith(t.MARKERS)) : e.events.trigger("node.remove", [r(v)]) !== !1 && (r(v).after(t.MARKERS), r(v).remove());
          } else if (t.NO_DELETE_TAGS.indexOf(v.tagName) < 0 && (e.node.isEditable(v) || e.node.isDeletable(v)))
            if (e.node.isDeletable(v))
              r(I).replaceWith(t.MARKERS), r(v).remove();
            else if (e.node.isEmpty(v) && !e.node.isList(v))
              r(v).remove(), r(I).replaceWith(t.MARKERS);
            else {
              for (e.node.isList(v) && (v = r(v).find("li").last().get(0)), (x = e.node.contents(v)) && x[x.length - 1].tagName === "BR" && r(x[x.length - 1]).remove(), x = e.node.contents(v); x && e.node.isBlock(x[x.length - 1]); )
                v = x[x.length - 1], x = e.node.contents(v);
              r(v).append(t.MARKERS);
              for (var p = I; !p.previousSibling; )
                p = p.parentNode;
              for (; p && p.tagName !== "BR" && !e.node.isBlock(p); ) {
                var c = p;
                p = p.nextSibling, r(v).append(c);
              }
              p && p.tagName === "BR" && r(p).remove(), r(I).remove();
            }
          else
            I.nextSibling && I.nextSibling.tagName === "BR" && r(I.nextSibling).remove();
          return !0;
        }
        function C(I) {
          var x = 0 < r(I).parentsUntil(e.$el, "BLOCKQUOTE").length, v = e.node.deepestParent(I, [], !x);
          if (v && v.tagName === "BLOCKQUOTE") {
            var A = e.node.deepestParent(I, [r(I).parentsUntil(e.$el, "BLOCKQUOTE").get(0)]);
            A && A.nextSibling && (v = A);
          }
          if (v !== null) {
            var l, i = v.nextSibling;
            if (e.node.isBlock(v) && (e.node.isEditable(v) || e.node.isDeletable(v)) && i && t.NO_DELETE_TAGS.indexOf(i.tagName) < 0)
              if (e.node.isDeletable(i))
                r(i).remove(), r(I).replaceWith(t.MARKERS);
              else if (e.node.isBlock(i) && e.node.isEditable(i))
                if (e.node.isList(i))
                  if (e.node.isEmpty(v, !0))
                    r(v).remove(), r(i).find("li").first().prepend(t.MARKERS);
                  else {
                    var a = r(i).find("li").first();
                    v.tagName === "BLOCKQUOTE" && (l = e.node.contents(v)).length && e.node.isBlock(l[l.length - 1]) && (v = l[l.length - 1]), a.find("ul, ol").length === 0 && (r(I).replaceWith(t.MARKERS), a.find(e.html.blockTagsQuery()).not("ol, ul, table").each(function() {
                      this.parentNode === a.get(0) && r(this).replaceWith(r(this).html() + (e.node.isEmpty(this) ? "" : "<br>"));
                    }), r(v).append(e.node.contents(a.get(0))), a.remove(), r(i).find("li").length === 0 && r(i).remove());
                  }
                else {
                  if ((l = e.node.contents(i)).length && l[0].tagName === "BR" && r(l[0]).remove(), i.tagName !== "BLOCKQUOTE" && v.tagName === "BLOCKQUOTE")
                    for (l = e.node.contents(v); l.length && e.node.isBlock(l[l.length - 1]); )
                      v = l[l.length - 1], l = e.node.contents(v);
                  else if (i.tagName === "BLOCKQUOTE" && v.tagName !== "BLOCKQUOTE")
                    for (l = e.node.contents(i); l.length && e.node.isBlock(l[0]); )
                      i = l[0], l = e.node.contents(i);
                  r(I).replaceWith(t.MARKERS), r(v).append(i.innerHTML), r(i).remove();
                }
              else {
                for (r(I).replaceWith(t.MARKERS); i && i.tagName !== "BR" && !e.node.isBlock(i) && e.node.isEditable(i); ) {
                  var p = i;
                  i = i.nextSibling, r(v).append(p);
                }
                i && i.tagName === "BR" && e.node.isEditable(i) && r(i).remove();
              }
          }
        }
        function O(I) {
          for (var x, v = I; !v.nextSibling; )
            if (v = v.parentNode, e.node.isElement(v))
              return !1;
          if ((v = v.nextSibling).tagName === "BR" && e.node.isEditable(v)) {
            if (v.nextSibling) {
              if (e.node.isBlock(v.nextSibling) && e.node.isEditable(v.nextSibling)) {
                if (!(t.NO_DELETE_TAGS.indexOf(v.nextSibling.tagName) < 0))
                  return void r(v).remove();
                v = v.nextSibling, r(v.previousSibling).remove();
              }
            } else if (s(v)) {
              E(I) ? e.cursorLists._del(I) : e.node.deepestParent(v) && ((!e.node.isEmpty(e.node.blockParent(v)) || (e.node.blockParent(v).nextSibling && t.NO_DELETE_TAGS.indexOf(e.node.blockParent(v).nextSibling.tagName)) < 0) && r(v).remove(), C(I));
              return;
            }
          }
          if (!e.node.isBlock(v) && e.node.isEditable(v)) {
            for (x = e.node.contents(v); v.nodeType !== Node.TEXT_NODE && x.length && !e.node.isDeletable(v) && e.node.isEditable(v); )
              v = x[0], x = e.node.contents(v);
            v.nodeType === Node.TEXT_NODE ? (r(v).before(t.MARKERS), v.textContent.length && (v.textContent = v.textContent.substring(g(v.textContent, !0), v.textContent.length))) : (e.node.isDeletable(v) || e.events.trigger("node.remove", [r(v)]) !== !1) && (r(v).before(t.MARKERS), r(v).remove()), r(I).remove();
          } else if (t.NO_DELETE_TAGS.indexOf(v.tagName) < 0 && (e.node.isEditable(v) || e.node.isDeletable(v)))
            if (e.node.isDeletable(v))
              r(I).replaceWith(t.MARKERS), r(v).remove();
            else if (e.node.isList(v))
              I.previousSibling ? (r(v).find("li").first().prepend(I), e.cursorLists._backspace(I)) : (r(v).find("li").first().prepend(t.MARKERS), r(I).remove());
            else if ((x = e.node.contents(v)) && x[0].tagName === "BR" && r(x[0]).remove(), x && v.tagName === "BLOCKQUOTE") {
              var A = x[0];
              for (r(I).before(t.MARKERS); A && A.tagName !== "BR"; ) {
                var l = A;
                A = A.nextSibling, r(I).before(l);
              }
              A && A.tagName === "BR" && r(A).remove();
            } else
              r(I).after(r(v).html()).after(t.MARKERS), r(v).remove();
        }
        function U() {
          for (var I = e.el.querySelectorAll("blockquote:empty"), x = 0; x < I.length; x++)
            I[x].parentNode.removeChild(I[x]);
        }
        function y(I, x, v) {
          var A, l = e.node.deepestParent(I, [], !v);
          if (l && l.tagName === "BLOCKQUOTE")
            return b(I, l) ? (A = e.html.defaultTag(), x ? r(I).replaceWith("<br>" + t.MARKERS) : A ? r(l).after("<".concat(A, ">").concat(t.MARKERS, "<br></").concat(A, ">")) : r(l).after("".concat(t.MARKERS, "<br>")), r(I).remove()) : B(I, x, v), !1;
          if (l === null)
            (A = e.html.defaultTag()) && e.node.isElement(I.parentNode) ? r(I).replaceWith("<".concat(A, ">").concat(t.MARKERS, "<br></").concat(A, ">")) : !I.previousSibling || r(I.previousSibling).is("br") || I.nextSibling ? r(I).replaceWith("<br>".concat(t.MARKERS)) : r(I).replaceWith("<br>".concat(t.MARKERS, "<br>"));
          else {
            var i = I, a = "";
            l.tagName != "PRE" || I.nextSibling || (x = !0), e.node.isBlock(l) && !x || (a = "<br/>");
            var p, c = "", h = "", M = "", N = "";
            (A = e.html.defaultTag()) && e.node.isBlock(l) && (M = "<".concat(A, ">"), N = "</".concat(A, ">"), l.tagName === A.toUpperCase() && (M = e.node.openTagString(r(l).clone().removeAttr("id").get(0))));
            do
              if (i = i.parentNode, !x || i !== l || x && !e.node.isBlock(l))
                if (c += e.node.closeTagString(i), i === l && e.node.isBlock(l))
                  h = M + h;
                else {
                  var ie = (i.tagName === "A" || e.node.hasClass(i, "fa")) && b(I, i) ? "fr-to-remove" : "";
                  h = e.node.openTagString(r(i).clone().addClass(ie).get(0)) + h;
                }
            while (i !== l);
            a = c + a + h + (I.parentNode === l && e.node.isBlock(l) ? "" : t.INVISIBLE_SPACE) + t.MARKERS, e.node.isBlock(l) && !r(l).find("*").last().is("br") && r(l).append("<br/>"), r(I).after('<span id="fr-break"></span>'), r(I).remove(), l.nextSibling && !e.node.isBlock(l.nextSibling) || e.node.isBlock(l) || r(l).after("<br>"), p = (p = !x && e.node.isBlock(l) ? e.node.openTagString(l) + r(l).html() + N : e.node.openTagString(l) + r(l).html() + e.node.closeTagString(l)).replace(/<span id="fr-break"><\/span>/g, a), r(l).replaceWith(p);
          }
        }
        function B(I, x, v) {
          var A = e.node.deepestParent(I, [], !v);
          if (A === null)
            e.html.defaultTag() && I.parentNode === e.el ? r(I).replaceWith("<".concat(e.html.defaultTag(), ">").concat(t.MARKERS, "<br></").concat(e.html.defaultTag(), ">")) : (I.nextSibling && !e.node.isBlock(I.nextSibling) || r(I).after("<br>"), r(I).replaceWith("<br>".concat(t.MARKERS)));
          else if (I.previousSibling && I.previousSibling.tagName == "IMG" || I.nextSibling && I.nextSibling.tagName == "IMG")
            r(I).replaceWith("<" + e.html.defaultTag() + ">" + t.MARKERS + "<br></" + e.html.defaultTag() + ">");
          else {
            var l = I, i = "";
            A.tagName === "PRE" && (x = !0), e.node.isBlock(A) && !x || (i = "<br>");
            var a = "", p = "";
            do {
              var c = l;
              if (l = l.parentNode, A.tagName === "BLOCKQUOTE" && e.node.isEmpty(c) && !e.node.hasClass(c, "fr-marker") && r(c).contains(I) && r(c).after(I), A.tagName !== "BLOCKQUOTE" || !b(I, l) && !u(I, l))
                if (!x || l !== A || x && !e.node.isBlock(A)) {
                  a += e.node.closeTagString(l);
                  var h = l.tagName == "A" && b(I, l) || e.node.hasClass(l, "fa") ? "fr-to-remove" : "";
                  p = e.node.openTagString(r(l).clone().addClass(h).removeAttr("id").get(0)) + p;
                } else
                  A.tagName == "BLOCKQUOTE" && x && (p = a = "");
            } while (l !== A);
            var M = A === I.parentNode && e.node.isBlock(A) || I.nextSibling;
            if (A.tagName === "BLOCKQUOTE")
              if (I.previousSibling && e.node.isBlock(I.previousSibling) && I.nextSibling && I.nextSibling.tagName === "BR" && (r(I.nextSibling).after(I), I.nextSibling && I.nextSibling.tagName === "BR" && r(I.nextSibling).remove()), x)
                i = a + i + t.MARKERS + p;
              else {
                var N = e.html.defaultTag();
                i = "".concat(a + i + (N ? "<".concat(N, ">") : "") + t.MARKERS, "<br>").concat(N ? "</".concat(N, ">") : "").concat(p);
              }
            else
              i = a + i + p + (M ? "" : t.INVISIBLE_SPACE) + t.MARKERS;
            r(I).replaceWith('<span id="fr-break"></span>');
            var ie = e.node.openTagString(A) + r(A).html() + e.node.closeTagString(A);
            ie = ie.replace(/<span id="fr-break"><\/span>/g, i), r(A).replaceWith(ie);
          }
        }
        return { enter: function(x) {
          var v = e.markers.insert();
          if (!v)
            return !0;
          for (var A = v.parentNode; A && !e.node.isElement(A); ) {
            if (A.getAttribute("contenteditable") === "false")
              return r(v).replaceWith(t.MARKERS), e.selection.restore(), !1;
            if (A.getAttribute("contenteditable") === "true")
              break;
            A = A.parentNode;
          }
          e.el.normalize();
          var l = !1;
          0 < r(v).parentsUntil(e.$el, "BLOCKQUOTE").length && (l = !0), r(v).parentsUntil(e.$el, "TD, TH").length && (l = !1), s(v) ? !E(v) || x || l ? y(v, x, l) : e.cursorLists._endEnter(v) : d(v) ? !E(v) || x || l ? function i(a, p, c) {
            var h, M = e.node.deepestParent(a, [], !c);
            if (M && M.tagName === "TABLE")
              return r(M).find("td, th").first().prepend(a), i(a, p, c);
            if (M && M.tagName === "BLOCKQUOTE")
              if (u(a, M)) {
                if (!p)
                  return (h = e.html.defaultTag()) ? r(M).before("<".concat(h, ">").concat(t.MARKERS, "<br></").concat(h, ">")) : r(M).before("".concat(t.MARKERS, "<br>")), r(a).remove(), !1;
              } else
                b(a, M) ? y(a, p, !0) : B(a, p, !0);
            if (M === null)
              (h = e.html.defaultTag()) && e.node.isElement(a.parentNode) ? r(a).replaceWith("<".concat(h, ">").concat(t.MARKERS, "<br></").concat(h, ">")) : r(a).replaceWith("<br>".concat(t.MARKERS));
            else {
              if (e.node.isBlock(M))
                if (M.tagName === "PRE" && (p = !0), p)
                  r(a).remove(), r(M).prepend("<br>".concat(t.MARKERS));
                else if (a.nextSibling && a.nextSibling.tagName == "IMG" || a.nextSibling && a.nextSibling.nextElementSibling && a.nextSibling.nextElementSibling == "IMG")
                  r(a).replaceWith("<" + e.html.defaultTag() + ">" + t.MARKERS + "<br></" + e.html.defaultTag() + ">");
                else {
                  if (e.node.isEmpty(M, !0))
                    return y(a, p, c);
                  if (e.opts.keepFormatOnDelete) {
                    for (var N = a, ie = t.INVISIBLE_SPACE; N !== M && !e.node.isElement(N); )
                      N = N.parentNode, ie = e.node.openTagString(N) + ie + e.node.closeTagString(N);
                    r(M).before(ie);
                  } else
                    r(M).before("".concat(e.node.openTagString(r(M).clone().removeAttr("id").get(0)), "<br>").concat(e.node.closeTagString(M)));
                }
              else
                r(M).before("<br>");
              r(a).remove();
            }
          }(v, x, l) : e.cursorLists._startEnter(v) : !E(v) || x || l ? B(v, x, l) : e.cursorLists._middleEnter(v), function() {
            e.$el.find(".fr-to-remove").each(function() {
              for (var a = e.node.contents(this), p = 0; p < a.length; p++)
                a[p].nodeType === Node.TEXT_NODE && (a[p].textContent = a[p].textContent.replace(/\u200B/g, ""));
              r(this).replaceWith(this.innerHTML);
            });
          }(), e.html.fillEmptyBlocks(!0), e.opts.htmlUntouched || (e.html.cleanEmptyTags(), e.clean.lists(), e.spaces.normalizeAroundCursor()), e.selection.restore();
        }, backspace: function() {
          var x = !1, v = e.markers.insert();
          if (!v)
            return !0;
          for (var A = v.parentNode; A && !e.node.isElement(A); ) {
            if (A.getAttribute("contenteditable") === "false")
              return r(v).replaceWith(t.MARKERS), e.selection.restore(), !1;
            if (A.innerText.length && A.getAttribute("contenteditable") === "true")
              break;
            A = A.parentNode;
          }
          e.el.normalize();
          var l = v.previousSibling;
          if (l) {
            var i = l.textContent;
            i && i.length && i.charCodeAt(i.length - 1) === 8203 && (i.length === 1 ? r(l).remove() : l.textContent = l.textContent.substr(0, i.length - g(i)));
          }
          return s(v) ? E(v) && u(v, r(v).parents("li").first().get(0)) ? e.cursorLists._backspace(v) : x = m(v) : d(v) ? E(v) && u(v, r(v).parents("li").first().get(0)) ? e.cursorLists._backspace(v) : function(p) {
            for (var c = 0 < r(p).parentsUntil(e.$el, "BLOCKQUOTE").length, h = e.node.deepestParent(p, [], !c), M = h; h && !h.previousSibling && h.tagName !== "BLOCKQUOTE" && h.parentElement !== e.el && !e.node.hasClass(h.parentElement, "fr-inner") && t.SIMPLE_ENTER_TAGS.indexOf(h.parentElement.tagName) < 0; )
              h = h.parentElement;
            if (h && h.tagName === "BLOCKQUOTE") {
              var N = e.node.deepestParent(p, [r(p).parentsUntil(e.$el, "BLOCKQUOTE").get(0)]);
              N && N.previousSibling && (M = h = N);
            }
            if (h !== null) {
              var ie, D = h.previousSibling;
              if (e.node.isBlock(h) && e.node.isEditable(h))
                if (D && t.NO_DELETE_TAGS.indexOf(D.tagName) < 0) {
                  if (e.node.isDeletable(D))
                    r(D).remove(), r(p).replaceWith(t.MARKERS);
                  else if (e.node.isEditable(D))
                    if (e.node.isBlock(D))
                      if (e.node.isEmpty(D) && !e.node.isList(D))
                        r(D).remove(), r(p).after(e.opts.keepFormatOnDelete ? t.INVISIBLE_SPACE : "");
                      else {
                        if (e.node.isList(D) && (D = r(D).find("li").last().get(0)), (ie = e.node.contents(D)).length && ie[ie.length - 1].tagName === "BR" && r(ie[ie.length - 1]).remove(), D.tagName === "BLOCKQUOTE" && h.tagName !== "BLOCKQUOTE")
                          for (ie = e.node.contents(D); ie.length && e.node.isBlock(ie[ie.length - 1]); )
                            D = ie[ie.length - 1], ie = e.node.contents(D);
                        else if (D.tagName !== "BLOCKQUOTE" && M.tagName === "BLOCKQUOTE")
                          for (ie = e.node.contents(M); ie.length && e.node.isBlock(ie[0]); )
                            M = ie[0], ie = e.node.contents(M);
                        if (e.node.isEmpty(h))
                          r(p).remove(), e.selection.setAtEnd(D, !0);
                        else {
                          r(p).replaceWith(t.MARKERS);
                          var _ = D.childNodes;
                          e.node.isBlock(_[_.length - 1]) ? r(_[_.length - 1]).append(M.innerHTML) : r(D).append(M.innerHTML);
                        }
                        r(M).remove(), e.node.isEmpty(h) && r(h).remove();
                      }
                    else
                      r(p).replaceWith(t.MARKERS), h.tagName === "BLOCKQUOTE" && D.nodeType === Node.ELEMENT_NODE ? r(D).remove() : (r(D).after(e.node.isEmpty(h) ? "" : r(h).html()), r(h).remove(), D.tagName === "BR" && r(D).remove());
                } else
                  D || (h && h.tagName === "BLOCKQUOTE" && r(h).text().replace(/\u200B/g, "").length === 0 ? r(h).remove() : e.node.isEmpty(h) && h.parentNode && e.node.isEditable(h.parentNode) && h.parentNode != e.el && r(h.parentNode).remove());
            }
          }(v) : x = m(v), r(v).remove(), U(), e.html.fillEmptyBlocks(!0), e.opts.htmlUntouched || (e.html.cleanEmptyTags(), e.clean.lists(), e.spaces.normalizeAroundCursor()), e.selection.restore(), x;
        }, del: function() {
          var x = e.markers.insert();
          if (!x)
            return !1;
          if (e.el.normalize(), s(x))
            if (E(x))
              if (r(x).parents("li").first().find("ul, ol").length === 0)
                e.cursorLists._del(x);
              else {
                var v = r(x).parents("li").first().find("ul, ol").first().find("li").first();
                (v = v.find(e.html.blockTagsQuery()).get(-1) || v).prepend(x), e.cursorLists._backspace(x);
              }
            else
              C(x);
          else
            d(x), O(x);
          r(x).remove(), U(), e.html.fillEmptyBlocks(!0), e.opts.htmlUntouched || (e.html.cleanEmptyTags(), e.clean.lists()), e.spaces.normalizeAroundCursor(), e.selection.restore();
        }, isAtEnd: b, isAtStart: u };
      }, t.MODULES.data = function(e) {
        function r(a) {
          return a;
        }
        function s(a) {
          for (var p = a.toString(), c = 0, h = 0; h < p.length; h++)
            c += parseInt(p.charAt(h), 10);
          return 10 < c ? c % 9 + 1 : c;
        }
        function d(a, p, c) {
          for (var h = Math.abs(c); 0 < h--; )
            a -= p;
          return c < 0 && (a += 123), a;
        }
        function u(a) {
          return a && a.css("display") !== "block" || a && e.helpers.getPX(a.css("height")) === 0 ? (a.remove(), !0) : !(!a || a.css("position") !== "absolute" && a.css("position") !== "fixed" || (a.remove(), 0));
        }
        function b(a) {
          return a && e.$box.find(a).length === 0;
        }
        function E() {
          if (10 < i && (e[l("0ppecjvc==")](), setTimeout(function() {
            U.FE = null;
          }, 10)), !e.$box)
            return !1;
          e.$wp.prepend(l(l(v))), C = e.$wp.find("> div").first(), O = C.find("> a"), e.opts.direction === "rtl" && C.css("left", "auto").css("right", 0).attr("direction", "rtl"), i++;
        }
        function g(a) {
          for (var p = [l("9qqG-7amjlwq=="), l("KA3B3C2A6D1D5H5H1A3=="), l("3B9B3B5F3C4G3E3=="), l("QzbzvxyB2yA-9m=="), l("ji1kacwmgG5bc=="), l("nmA-13aogi1A3c1jd=="), l("BA9ggq=="), l("emznbjbH3fij=="), l("tkC-22d1qC-13sD1wzF-7=="), l("tA3jjf=="), l("1D1brkm==")], c = 0; c < p.length; c++)
            if (String.prototype.endsWith || (String.prototype.endsWith = function(h, M) {
              return (M === void 0 || M > this.length) && (M = this.length), this.substring(M - h.length, M) === h;
            }), a.endsWith(p[c]))
              return !0;
          return !1;
        }
        function m() {
          var a = l(I), p = l("tzgatD-13eD1dtdrvmF3c1nrC-7saQcdav==").split(".");
          return window.parent.document.querySelector(a) && window[p[1]][p[2]];
        }
        var C, O, U = e.$, y = "sC-7OB2fwhVC4vsG-7ohPA4ZD4D-8f1J3stzB-11bFE2FC1A3NB2IF1HE1TH4WB8eB-11zVG2F3I3yYB5ZG4CB2DA15CC5AD3F1A1KG1oLA10B1A6wQF1H3vgale2C4F4XA2qc2A5D5B3pepmriKB3OE1HD1fUC10pjD-11E-11TB4YJ3bC-16zE-11yc1B2CE2BC3jhjKC1pdA-21OA6C1D5B-8vF4QA11pD6sqf1C3lldA-16BD4A2H3qoEA7bB-16rmNH5H1F1vSB7RE2A3TH4YC5A5b1A4d1B3whepyAC3AA2zknC3mbgf1SC4WH4PD8TC5ZB2C3H3jb2A5ZA2EF2aoFC5qqHC4B1H1zeGA7UA5RF4TA29TA6ZC4d1C3hyWA10A3rBB2E3decorationRD3QC10UD3E6E6ZD2F3F3fme2E5uxxrEC9C3E4fB-11azhHB1LD7D6VF4VVTPC6b1C4TYG3qzDD6B3B3AH4I2H2kxbHE1JD1yihfd1QD6WB1D4mhrc1B5rvFG3A14A7cDA2OC1AA1JB5zC-16KA6WB4C-8wvlTB5A5lkZB2C2C7zynBD2D2bI-7C-21d1HE2cubyvPC8A6VB3aroxxZE4C4F4e1I2BE1WjdifH1H4A14NA1GB1YG-10tWA3A14A9sVA2C5XH2A29b2A6gsleGG2jaED2D-13fhE1OA8NjwytyTD4e1sc1D-16ZC3B5C-9e1C2FB6EFF5B2C2JH4E1C2tdLE5A3UG4G-7b2D3B4fA-9oh1G3kqvB4AG3ibnjcAC6D2B1cDA9KC2QA6bRC4VA30RB8hYB2A4A-8h1A21A2B2==", B = "7D4YH4fkhHB3pqDC3H2E1fkMD1IB1NF1D3QD9wB5rxqlh1A8c2B4ZA3FD2AA6FB5EB3jJG4D2J-7aC-21GB6PC5RE4TC11QD6XC4XE3XH3mlvnqjbaOA2OC2BE6A1fmI-7ujwbc1G5f1F3e1C11mXF4owBG3E1yD1E4F1D2D-8B-8C-7yC-22HD1MF5UE4cWA3D8D6a1B2C3H3a3I3sZA4B3A2akfwEB3xHD5D1F1wIC11pA-16xdxtVI2C9A6YC4a1A2F3B2GA6B4C3lsjyJB1eMA1D-11MF5PE4ja1D3D7byrf1C3e1C7D-16lwqAF3H2A1B-21wNE1MA1OG1HB2A-16tSE5UD4RB3icRA4F-10wtwzBB3E1C3CC2DA8LA2LA1EB1kdH-8uVB7decorg1J2B7B6qjrqGI2J1C6ijehIB1hkemC-13hqkrH4H-7QD6XF5XF3HLNAC3CB2aD2CD2KB10B4ycg1A-8KA4H4B11jVB5TC4yqpB-21pd1E4pedzGB6MD5B3ncB-7MA4LD2JB6PD5uH-8TB9C7YD5XD2E3I3jmiDB3zeimhLD8E2F2JC1H-9ivkPC5lG-10SB1D3H3A-21rc1A3d1E3fsdqwfGA2KA1OrC-22LA6D1B4afUB16SC7AitC-8qYA11fsxcajGA15avjNE2A-9h1hDB16B9tPC1C5F5UC1G3B8d2A5d1D4RnHJ3C3JB5D3ucMG1yzD-17hafjC-8VD3yWC6e1YD2H3ZE2C8C5oBA3H3D2vFA4WzJC4C2i1A-65fNB8afWA1H4A26mvkC-13ZB3E3h1A21BC4eFB2GD2AA5ghqND2A2B2==", I = "MekC-11nB-8tIzpD7pewxvzC6mD-16xerg1==", x = "AA15A8B6C4B5A2E2B3B1A7==", v = "sC-7OB2fwhVC4vsG-7ohPA4ZD4D-8f1J3stzB-11bFE2EE1MA2ND1KD1IE4cA-21pSD2D5ve1G3h1A8b1E5ZC3CD2FA16mC5OC5E1hpnG1NA10B1D7hkUD4I-7b2C3C5nXD2E3F3whidEC2EH3GI2mJE2E2bxci1WA10VC7pllSG2F3A7xd1A4ZC3DB2aaeGA2DE4H2E1j1ywD-13FD1A3VE4WA3D8C6wuc1A2hf1B5B7vnrrjA1B9ic1mpbD1oMB1iSB7rWC4RI4G-7upB6jd1A2F3H2EA4FD3kDF4A2moc1anJD1TD4VI4b2C7oeQF4c1E3XC7ZA3C3G3uDB2wGB6D1JC4D1JD4C1hTE6QC5pH4pD3C-22D7c1A3textAA4gdlB2mpozkmhNC1mrxA3yWA5edhg1I2H3B7ozgmvAI3I2B5GD1LD2RSNH1KA1XA5SB4PA3sA9tlmC-9tnf1G3nd1coBH4I2I2JC3C-16LE6A1tnUA3vbwQB1G3f1A20a3A8a1C6pxAB2eniuE1F3kH2lnjB2hB-16XA5PF1G4zwtYA5B-11mzTG2B9pHB3BE2hGH3B3B2cMD5C1F1wzPA8E7VG5H5vD3H-7C8tyvsVF2I1G2A5fE3bg1mgajoyxMA4fhuzSD8aQB2B4g1A20ukb1A4B3F3GG2CujjanIC1ObiB11SD1C5pWC1D4YB8YE5FE-11jXE2F-7jB4CC2G-10uLH4E1C2tA-13yjUH5d1H1A7sWD5E4hmjF-7pykafoGA16hDD4joyD-8OA33B3C2tC7cRE4SA31a1B8d1e2A4F4g1A2A22CC5zwlAC2C1A12==", A = function() {
          for (var a = 0, p = document.domain, c = p.split("."), h = "_gd".concat(new Date().getTime()); a < c.length - 1 && document.cookie.indexOf("".concat(h, "=").concat(h)) === -1; )
            p = c.slice(-1 - ++a).join("."), document.cookie = "".concat(h, "=").concat(h, ";domain=").concat(p, ";");
          return document.cookie = "".concat(h, "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=").concat(p, ";"), (p || "").replace(/(^\.*)|(\.*$)/g, "");
        }(), l = function(p) {
          if (!p)
            return p;
          for (var c = "", h = "charCodeAt", M = "fromCharCode", N = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".indexOf(p[0]), ie = 1; ie < p.length - 2; ie++) {
            for (var D = s(++N), _ = p[h](ie), Q = ""; /[0-9-]/.test(p[ie + 1]); )
              Q += p[++ie];
            _ = d(_, D, Q = parseInt(Q, 10) || 0), _ ^= N - 1 & 31, c += String[M](_);
          }
          return c;
        }, i = 0;
        return { _init: function() {
          var p = e.opts.key || [""], c = l("ziRA1E3B9pA5B-11D-11xg1A3ZB5D1D4B-11ED2EG2pdeoC1clIH4wB-22yQD5uF4YE3E3A9==");
          typeof p == "string" && (p = [p]);
          for (var h, M, N, ie = !(e.ul = !0), D = 0, _ = 0; _ < p.length; _++) {
            var Q = (M = p[_], (N = (l(M) || "").split("|")).length === 4 && N[0] === "V3" ? [N[1], N[3], N[2]] : [null, null, ""]), re = Q[2];
            if (re === l(l("LGnD1KNZf1CPBYCAZB-8F3UDSLLSG1VFf1A3C2==")) || 0 <= re.indexOf(A, re.length - A.length) || g(A) || m()) {
              if ((h = Q[1]) !== null && !(h.indexOf("TRIAL") == 0 ? (h = new Date(h.replace(/TRIAL/, "")), new Date(h) < new Date() && (y = B, 1)) : new Date(h) < new Date(l(x))) || !(0 < (A || "").length) || g(A) || m()) {
                e.ul = !1;
                break;
              }
              ie = !0, v = y, D = Q[0] || -1;
            }
          }
          var q = new Image();
          e.ul === !0 && (E(), q.src = ie ? "".concat(l(c), "e=").concat(D) : "".concat(l(c), "u")), e.ul === !0 && (e.events.on("contentChanged", function() {
            (function() {
              return u(C) || u(O) || b(C) || b(O);
            })() && E();
          }), e.events.on("html.get", function(ae) {
            return ae + l("qD2H-9G3ioD-17qA1tE1B-8qI3A4hA-13C-11E2C1njfldD1E6pg1C-8sC3hfbkcD2G3stC-22gqgB3G2B-7vtoA4nweeD1A31A15B9uC-16A1F5dkykdc1B8dE-11bA3F2D3A9gd1E7F2tlI-8H-7vtxB2A5B2C3B2F2B5A6ldbyC4iqC-22D-17E-13mA3D2dywiB3oxlvfC1H4C2TjqbzlnI3ntB4E3qA2zaqsC6D3pmnkoE3C6D5wvuE3bwifdhB6hch1E4xibD-17dmrC1rG-7pntnF6nB-8F1D2A11C8plrkmF2F3MC-16bocqA2WwA-21ayeA1C4d1isC-22rD-13D6DfjpjtC2E6hB2G2G4A-7D2==");
          })), e.events.on("html.set", function() {
            var ae = e.el.querySelector('[data-f-id="pbf"]');
            ae && U(ae).remove();
          }), e.events.on("destroy", function() {
            C && C.length && C.remove();
          }, !0);
        } };
      }, t.MODULES.edit = function(e) {
        function r() {
          if (e.browser.mozilla)
            try {
              e.doc.execCommand("enableObjectResizing", !1, "false"), e.doc.execCommand("enableInlineTableEditing", !1, "false");
            } catch {
            }
          if (e.browser.msie)
            try {
              e.doc.body.addEventListener("mscontrolselect", function(u) {
                return u.srcElement.focus(), !1;
              });
            } catch {
            }
        }
        var s = !1;
        function d() {
          return s;
        }
        return { _init: function() {
          e.events.on("focus", function() {
            d() ? e.edit.off() : e.edit.on();
          });
        }, on: function() {
          e.$wp ? (e.$el.attr("contenteditable", !0), e.$el.removeClass("fr-disabled").attr("aria-disabled", !1), r()) : e.$el.is("a") && e.$el.attr("contenteditable", !0), e.events.trigger("edit.on", [], !0), s = !1;
        }, off: function() {
          e.events.disableBlur(), e.$wp ? (e.$el.attr("contenteditable", !1), e.$el.addClass("fr-disabled").attr("aria-disabled", !0)) : e.$el.is("a") && e.$el.attr("contenteditable", !1), e.events.trigger("edit.off"), e.events.enableBlur(), s = !0;
        }, disableDesign: r, isDisabled: d };
      }, t.MODULES.format = function(e) {
        var r = e.$;
        function s(y, B) {
          var I = "<".concat(y);
          for (var x in B)
            Object.prototype.hasOwnProperty.call(B, x) && (I += " ".concat(x, '="').concat(B[x], '"'));
          return I += ">";
        }
        function d(y, B) {
          var I = y;
          for (var x in B)
            Object.prototype.hasOwnProperty.call(B, x) && (I += x === "id" ? "#".concat(B[x]) : x === "class" ? ".".concat(B[x]) : "[".concat(x, '="').concat(B[x], '"]'));
          return I;
        }
        function u(y, B) {
          return !(!y || y.nodeType !== Node.ELEMENT_NODE) && (y.matches || y.matchesSelector || y.msMatchesSelector || y.mozMatchesSelector || y.webkitMatchesSelector || y.oMatchesSelector).call(y, B);
        }
        function b(y, B, I) {
          if (y) {
            for (; y.nodeType === Node.COMMENT_NODE; )
              y = y.nextSibling;
            if (y) {
              if (e.node.isBlock(y) && y.tagName !== "HR")
                return e.node.hasClass(y.firstChild, "fr-marker") ? b(y.firstChild.nextSibling, B, I) : b(y.firstChild, B, I), !1;
              var x = r(e.doc.createElement(B));
              x.attr(I), x.insertBefore(y);
              for (var v = y; v && !r(v).is(".fr-marker") && r(v).find(".fr-marker").length === 0 && v.tagName !== "UL" && v.tagName !== "OL"; ) {
                var A = v;
                if (e.node.isBlock(v) && y.tagName !== "HR")
                  return b(v.firstChild, B, I), !1;
                v = v.nextSibling, x.append(A);
              }
              if (v) {
                if (r(v).find(".fr-marker").length || v.tagName === "UL" || v.tagName === "OL")
                  b(v.firstChild, B, I);
                else if (e.browser.mozilla && e.node.hasClass(v, "fr-marker")) {
                  var l, i = e.selection.blocks(), a = i.length;
                  for (l = 0; l < a; l++)
                    i[l] != v.parentNode && i[l].childNodes.length && i[l].childNodes[0] != v.parentNode && (v = i[l].childNodes[1] || i[l].childNodes[0], (x = r(s(B, I)).insertBefore(v)).append(v));
                }
              } else {
                for (var p = x.get(0).parentNode; p && !p.nextSibling && !e.node.isElement(p); )
                  p = p.parentNode;
                if (p) {
                  var c = p.nextSibling;
                  c && (e.node.isBlock(c) ? c.tagName === "HR" ? b(c.nextSibling, B, I) : b(c.firstChild, B, I) : b(c, B, I));
                }
              }
              x.is(":empty") && x.remove();
            }
          }
        }
        function E(y, B) {
          var I;
          if (B === void 0 && (B = {}), B.style && delete B.style, e.selection.isCollapsed())
            e.markers.insert(), e.$el.find(".fr-marker").replaceWith(s(y, B) + t.INVISIBLE_SPACE + t.MARKERS + function(i) {
              return "</".concat(i, ">");
            }(y)), e.selection.restore();
          else {
            var x;
            e.selection.save(), b(e.$el.find('.fr-marker[data-type="true"]').length && e.$el.find('.fr-marker[data-type="true"]').get(0).nextSibling, y, B);
            do
              for (x = e.$el.find("".concat(d(y, B), " > ").concat(d(y, B))), I = 0; I < x.length; I++)
                x[I].outerHTML = x[I].innerHTML;
            while (x.length);
            e.el.normalize();
            var v = e.el.querySelectorAll(".fr-marker");
            for (I = 0; I < v.length; I++) {
              var A = r(v[I]);
              A.data("type") === !0 ? u(A.get(0).nextSibling, d(y, B)) && A.next().prepend(A) : u(A.get(0).previousSibling, d(y, B)) && A.prev().append(A);
            }
            e.selection.restore();
          }
        }
        function g(y, B, I, x) {
          if (!x) {
            var v = !1;
            if (y.data("type") === !0)
              for (; e.node.isFirstSibling(y.get(0)) && !y.parent().is(e.$el) && !y.parent().is("ol") && !y.parent().is("ul"); )
                y.parent().before(y), v = !0;
            else if (y.data("type") === !1)
              for (; e.node.isLastSibling(y.get(0)) && !y.parent().is(e.$el) && !y.parent().is("ol") && !y.parent().is("ul"); )
                y.parent().after(y), v = !0;
            if (v)
              return !0;
          }
          if (y.parents(B).length || B === void 0) {
            var A, l = "", i = "", a = y.parent();
            if (a.is(e.$el) || e.node.isBlock(a.get(0)))
              return !1;
            for (; !(e.node.isBlock(a.parent().get(0)) || B !== void 0 && u(a.get(0), d(B, I))); )
              l += e.node.closeTagString(a.get(0)), i = e.node.openTagString(a.get(0)) + i, a = a.parent();
            var p = y.get(0).outerHTML;
            return y.replaceWith('<span id="mark"></span>'), A = a.html().replace(/<span id="mark"><\/span>/, l + e.node.closeTagString(a.get(0)) + i + p + l + e.node.openTagString(a.get(0)) + i), a.replaceWith(e.node.openTagString(a.get(0)) + A + e.node.closeTagString(a.get(0))), !0;
          }
          return !1;
        }
        function m(y, B) {
          B === void 0 && (B = {}), B.style && delete B.style;
          var I = e.selection.isCollapsed();
          e.selection.save();
          for (var x = !0; x; ) {
            x = !1;
            for (var v = e.$el.find(".fr-marker"), A = 0; A < v.length; A++) {
              var l = r(v[A]), i = null;
              if (l.attr("data-cloned") || I || (i = l.clone().removeClass("fr-marker").addClass("fr-clone"), l.data("type") && l.data("type").toString() === "true" ? l.attr("data-cloned", !0).after(i) : l.attr("data-cloned", !0).before(i)), g(l, y, B, I)) {
                x = !0;
                break;
              }
            }
          }
          (function _(Q, re, q, ae) {
            for (var se = e.node.contents(Q.get(0)), H = 0; H < se.length; H++) {
              var W = se[H];
              if (W.innerHTML && W.innerHTML.charCodeAt() == 8203 && W.tagName.toLocaleLowerCase() == q && (W.outerHTML = W.innerHTML), e.node.hasClass(W, "fr-marker"))
                re = (re + 1) % 2;
              else if (re)
                if (0 < r(W).find(".fr-marker").length)
                  re = _(r(W), re, q, ae);
                else {
                  for (var T = r(W).find(q || "*:not(br)"), S = T.length - 1; 0 <= S; S--) {
                    var L = T[S];
                    e.node.isBlock(L) || e.node.isVoid(L) || q !== void 0 && !u(L, d(q, ae)) ? e.node.isBlock(L) && q === void 0 && W.tagName !== "TABLE" && e.node.clearAttributes(L) : e.node.hasClass(L, "fr-clone") || (L.outerHTML = L.innerHTML);
                  }
                  q === void 0 && W.nodeType === Node.ELEMENT_NODE && !e.node.isVoid(W) || u(W, d(q, ae)) ? e.node.isBlock(W) || e.node.hasClass(W, "fr-clone") || (W.outerHTML = W.innerHTML) : q === void 0 && W.nodeType === Node.ELEMENT_NODE && e.node.isBlock(W) && W.tagName !== "TABLE" && e.node.clearAttributes(W);
                }
              else
                0 < r(W).find(".fr-marker").length && (re = _(r(W), re, q, ae));
            }
            return re;
          })(e.$el, 0, y, B), I || (e.$el.find(".fr-marker").remove(), e.$el.find(".fr-clone").removeClass("fr-clone").addClass("fr-marker")), I && e.$el.find(".fr-marker").before(t.INVISIBLE_SPACE).after(t.INVISIBLE_SPACE), e.html.cleanEmptyTags(), e.el.normalize(), e.selection.restore();
          var a = e.win.getSelection() && e.win.getSelection().anchorNode;
          if (a) {
            var p = e.node.blockParent(a), c = !!a.textContent.replace(/\u200B/g, "").length, h = e.win.getSelection().getRangeAt(0), M = h.startOffset, N = h.endOffset;
            e.selection.text().replace(/\u200B/g, "").length || function _(Q, re) {
              if (Q && re) {
                if (Q.isSameNode(re) ? Q.textContent = Q.textContent.replace(/\u200B(?=.*\u200B)/g, "") : Q.nodeType === Node.TEXT_NODE && (Q.textContent = Q.textContent.replace(/\u200B/g, "")), !Q.childNodes.length)
                  return !1;
                Array.isArray(Q.childNodes) && Q.childNodes.forEach(function(q) {
                  _(q, re);
                });
              }
            }(p, a);
            var ie = e.win.getSelection().getRangeAt(0);
            if (a.nodeType === Node.TEXT_NODE && (!c || !e.selection.text().length && M === N)) {
              var D = a.textContent.search(/\u200B/g) + 1;
              ie.setStart(a, D), ie.setEnd(a, D);
            }
          }
        }
        function C(y, B) {
          var I, x, v, A, l, i = null;
          if (e.selection.isCollapsed()) {
            e.markers.insert();
            var a = (x = e.$el.find(".fr-marker")).parent();
            if (e.node.openTagString(a.get(0)) === '<span style="'.concat(y, ": ").concat(a.css(y), ';">')) {
              if (e.node.isEmpty(a.get(0)))
                i = r(e.doc.createElement("span")).attr("style", "".concat(y, ": ").concat(B, ";")).html("".concat(t.INVISIBLE_SPACE).concat(t.MARKERS)), a.replaceWith(i);
              else {
                var p = {};
                p["style*"] = "".concat(y, ":"), g(x, "span", p, !0), x = e.$el.find(".fr-marker"), B ? (i = r(e.doc.createElement("span")).attr("style", "".concat(y, ": ").concat(B, ";")).html("".concat(t.INVISIBLE_SPACE).concat(t.MARKERS)), x.replaceWith(i)) : x.replaceWith(t.INVISIBLE_SPACE + t.MARKERS);
              }
              e.html.cleanEmptyTags();
            } else
              e.node.isEmpty(a.get(0)) && a.is("span") ? (x.replaceWith(t.MARKERS), a.css(y, B)) : (i = r('<span style="'.concat(y, ": ").concat(B, ';">').concat(t.INVISIBLE_SPACE).concat(t.MARKERS, "</span>")), x.replaceWith(i));
            i && O(i, y, B);
          } else {
            if (e.selection.save(), B === null || y === "color" && 0 < e.$el.find(".fr-marker").parents("u, a").length) {
              var c = e.$el.find(".fr-marker");
              for (I = 0; I < c.length; I++)
                if ((x = r(c[I])).data("type") === !0 || x.data("type") === "true")
                  for (; e.node.isFirstSibling(x.get(0)) && !x.parent().is(e.$el) && !e.node.isElement(x.parent().get(0)) && !e.node.isBlock(x.parent().get(0)); )
                    x.parent().before(x);
                else
                  for (; e.node.isLastSibling(x.get(0)) && !x.parent().is(e.$el) && !e.node.isElement(x.parent().get(0)) && !e.node.isBlock(x.parent().get(0)); )
                    x.parent().after(x);
            }
            for (var h = e.$el.find('.fr-marker[data-type="true"]').get(0).nextSibling; h.firstChild; )
              h = h.firstChild;
            var M = { class: "fr-unprocessed" };
            for (B && (M.style = "".concat(y, ": ").concat(B, ";")), b(h, "span", M), e.$el.find(".fr-marker + .fr-unprocessed").each(function() {
              r(this).prepend(r(this).prev());
            }), e.$el.find(".fr-unprocessed + .fr-marker").each(function() {
              r(this).prev().append(r(this));
            }), (B || "").match(/\dem$/) && e.$el.find("span.fr-unprocessed").removeClass("fr-unprocessed"); 0 < e.$el.find("span.fr-unprocessed").length; ) {
              if ((i = e.$el.find("span.fr-unprocessed").first().removeClass("fr-unprocessed")).parent().get(0).normalize(), i.parent().is("span") && i.parent().get(0).childNodes.length === 1) {
                i.parent().css(y, B);
                var N = i;
                i = i.parent(), N.replaceWith(N.html());
              }
              var ie = i.find("span");
              for (I = ie.length - 1; 0 <= I; I--)
                v = ie[I], A = y, l = void 0, (l = r(v)).css(A, ""), l.attr("style") === "" && l.replaceWith(l.html());
              O(i, y, B);
            }
          }
          (function() {
            for (var _; 0 < e.$el.find(".fr-split:empty").length; )
              e.$el.find(".fr-split:empty").remove();
            e.$el.find(".fr-split").removeClass("fr-split"), e.$el.find('[style=""]').removeAttr("style"), e.$el.find('[class=""]').removeAttr("class"), e.html.cleanEmptyTags();
            for (var Q = e.$el.find("span"), re = Q.length - 1; 0 <= re; re--) {
              var q = Q[re];
              q.attributes && q.attributes.length !== 0 || r(q).replaceWith(q.innerHTML);
            }
            e.el.normalize();
            var ae = e.$el.find("span[style] + span[style]");
            for (_ = 0; _ < ae.length; _++) {
              var se = r(ae[_]), H = r(ae[_]).prev();
              se.get(0).previousSibling === H.get(0) && e.node.openTagString(se.get(0)) === e.node.openTagString(H.get(0)) && (se.prepend(H.html()), H.remove());
            }
            e.$el.find("span[style] span[style]").each(function() {
              if (0 <= r(this).attr("style").indexOf("font-size")) {
                var W = r(this).parents("span[style]");
                0 <= W.attr("style").indexOf("background-color") && (r(this).attr("style", "".concat(r(this).attr("style"), ";").concat(W.attr("style"))), g(r(this), "span[style]", {}, !1));
              }
            }), e.el.normalize(), e.selection.restore();
          })();
        }
        function O(y, B, I) {
          var x, v, A, l = y.parentsUntil(e.$el, "span[style]"), i = [];
          for (x = l.length - 1; 0 <= x; x--)
            v = l[x], A = B, r(v).attr("style").indexOf("".concat(A, ":")) === 0 || 0 <= r(v).attr("style").indexOf(";".concat(A, ":")) || 0 <= r(v).attr("style").indexOf("; ".concat(A, ":")) || i.push(l[x]);
          if ((l = l.not(i)).length) {
            for (var a = "", p = "", c = "", h = "", M = y.get(0); M = M.parentNode, r(M).addClass("fr-split"), a += e.node.closeTagString(M), p = e.node.openTagString(r(M).clone().addClass("fr-split").get(0)) + p, l.get(0) !== M && (c += e.node.closeTagString(M), h = e.node.openTagString(r(M).clone().addClass("fr-split").get(0)) + h), l.get(0) !== M; )
              ;
            var N = "".concat(a + e.node.openTagString(r(l.get(0)).clone().css(B, I || "").get(0)) + h + y.css(B, "").get(0).outerHTML + c, "</span>").concat(p);
            y.replaceWith('<span id="fr-break"></span>');
            var ie = l.get(0).outerHTML;
            r(l.get(0)).replaceWith(ie.replace(/<span id="fr-break"><\/span>/g, function() {
              return N;
            }));
          }
        }
        function U(y, B) {
          B === void 0 && (B = {}), B.style && delete B.style;
          var I = e.selection.ranges(0), x = I.startContainer;
          if (x.nodeType === Node.ELEMENT_NODE && 0 < x.childNodes.length && x.childNodes[I.startOffset] && (x = x.childNodes[I.startOffset]), !I.collapsed && x.nodeType === Node.TEXT_NODE && I.startOffset === (x.textContent || "").length) {
            for (; !e.node.isBlock(x.parentNode) && !x.nextSibling; )
              x = x.parentNode;
            x.nextSibling && (x = x.nextSibling);
          }
          for (var v = x; v && v.nodeType === Node.ELEMENT_NODE && !u(v, d(y, B)); )
            v = v.firstChild;
          if (v && v.nodeType === Node.ELEMENT_NODE && u(v, d(y, B)))
            return !0;
          var A = x;
          for (A && A.nodeType !== Node.ELEMENT_NODE && (A = A.parentNode); A && A.nodeType === Node.ELEMENT_NODE && A !== e.el && !u(A, d(y, B)); )
            A = A.parentNode;
          return !(!A || A.nodeType !== Node.ELEMENT_NODE || A === e.el || !u(A, d(y, B)));
        }
        return { is: U, toggle: function(B, I) {
          U(B, I) ? m(B, I) : E(B, I);
        }, apply: E, remove: m, applyStyle: C, removeStyle: function(B) {
          C(B, null);
        } };
      }, t.MODULES.spaces = function(e) {
        function r(d, u) {
          var b = d.previousSibling, E = d.nextSibling, g = d.textContent, m = d.parentNode, C = [t.ENTER_P, t.ENTER_DIV, t.ENTER_BR];
          if (!e.html.isPreformatted(m)) {
            u && (g = g.replace(/[\f\n\r\t\v ]{2,}/g, " "), E && E.tagName !== "BR" && !e.node.isBlock(E) || !(e.node.isBlock(m) || e.node.isLink(m) && !m.nextSibling || e.node.isElement(m)) || (g = g.replace(/[\f\n\r\t\v ]{1,}$/g, "")), b && b.tagName !== "BR" && !e.node.isBlock(b) || !(e.node.isBlock(m) || e.node.isLink(m) && !m.previousSibling || e.node.isElement(m)) || (g = g.replace(/^[\f\n\r\t\v ]{1,}/g, "")), (e.node.isBlock(E) || e.node.isBlock(b)) && (g = g.replace(/^[\f\n\r\t\v ]{1,}/g, "")), g === " " && (b && e.node.isVoid(b) || E && e.node.isVoid(E)) && !(b && E && e.node.isVoid(b) || E && b && e.node.isVoid(E)) && (g = "")), (!b && e.node.isBlock(E) || !E && e.node.isBlock(b)) && e.node.isBlock(m) && m !== e.el && (g = g.replace(/^[\f\n\r\t\v ]{1,}/g, "")), u || (g = g.replace(new RegExp(t.UNICODE_NBSP, "g"), " "));
            for (var O = "", U = 0; U < g.length; U++)
              g.charCodeAt(U) != 32 || U !== 0 && O.charCodeAt(U - 1) != 32 || (e.opts.enter !== t.ENTER_BR && e.opts.enter !== t.ENTER_DIV || !(b && b.tagName === "BR" || E && E.tagName === "BR")) && (b && E && e.node.isVoid(b) || b && E && e.node.isVoid(E)) ? O += g[U] : O += t.UNICODE_NBSP;
            (!E || E && e.node.isBlock(E) || E && E.nodeType === Node.ELEMENT_NODE && e.win.getComputedStyle(E) && e.win.getComputedStyle(E).display === "block") && (!e.node.isVoid(b) || b && ["P", "DIV", "BR"].indexOf(b.tagName) !== -1 && C.indexOf(e.opts.enter) !== -1) && (O = O.replace(/ $/, t.UNICODE_NBSP)), !b || e.node.isVoid(b) || e.node.isBlock(b) || (O = O.replace(/^\u00A0([^ $])/, " $1")).length !== 1 || O.charCodeAt(0) !== 160 || !E || e.node.isVoid(E) || e.node.isBlock(E) || e.node.hasClass(b, "fr-marker") && e.node.hasClass(E, "fr-marker") || (O = " "), u || (O = O.replace(/([^ \u00A0])\u00A0([^ \u00A0])/g, "$1 $2")), d.textContent !== O && (d.textContent = O);
          }
        }
        function s(d, u) {
          if (d !== void 0 && d || (d = e.el), u === void 0 && (u = !1), !d.getAttribute || d.getAttribute("contenteditable") !== "false") {
            if (d.nodeType === Node.TEXT_NODE)
              r(d, u);
            else if (d.nodeType === Node.ELEMENT_NODE)
              for (var b = e.doc.createTreeWalker(d, NodeFilter.SHOW_TEXT, e.node.filter(function(E) {
                for (var g = E.parentNode; g && g !== e.el; ) {
                  if (g.tagName === "STYLE" || g.tagName === "IFRAME" || g.tagName === "PRE")
                    return !1;
                  g = g.parentNode;
                }
                return E.textContent.match(/([ \u00A0\f\n\r\t\v]{2,})|(^[ \u00A0\f\n\r\t\v]{1,})|([ \u00A0\f\n\r\t\v]{1,}$)/g) !== null && !e.node.hasClass(E.parentNode, "fr-marker");
              }), !1); b.nextNode(); )
                r(b.currentNode, u);
          }
        }
        return { normalize: s, normalizeAroundCursor: function() {
          for (var u = [], b = e.el.querySelectorAll(".fr-marker"), E = 0; E < b.length; E++) {
            for (var g = null, m = e.node.blockParent(b[E]), C = (g = m || b[E]).nextSibling, O = g.previousSibling; C && C.tagName === "BR"; )
              C = C.nextSibling;
            for (; O && O.tagName === "BR"; )
              O = O.previousSibling;
            g && u.indexOf(g) < 0 && u.push(g), O && u.indexOf(O) < 0 && u.push(O), C && u.indexOf(C) < 0 && u.push(C);
          }
          for (var U = 0; U < u.length; U++)
            s(u[U]);
        } };
      }, t.START_MARKER = '<span class="fr-marker" data-id="0" data-type="true" style="display: none; line-height: 0;">'.concat(t.INVISIBLE_SPACE = "&#8203;", "</span>"), t.END_MARKER = '<span class="fr-marker" data-id="0" data-type="false" style="display: none; line-height: 0;">'.concat(t.INVISIBLE_SPACE, "</span>"), t.MARKERS = t.START_MARKER + t.END_MARKER, t.MODULES.markers = function(e) {
        var r = e.$;
        function s() {
          if (!e.$wp)
            return null;
          try {
            var u = e.selection.ranges(0), b = u.commonAncestorContainer;
            if (b !== e.el && !e.$el.contains(b))
              return null;
            var E = u.cloneRange(), g = u.cloneRange();
            E.collapse(!0);
            var m = r(e.doc.createElement("SPAN")).addClass("fr-marker").attr("style", "display: none; line-height: 0;").html(t.INVISIBLE_SPACE).get(0);
            if (E.insertNode(m), m = e.$el.find("span.fr-marker").get(0)) {
              for (var C = m.nextSibling; C && C.nodeType === Node.TEXT_NODE && C.textContent.length === 0; )
                r(C).remove(), C = e.$el.find("span.fr-marker").get(0).nextSibling;
              return e.selection.clear(), e.selection.get().addRange(g), m;
            }
            return null;
          } catch {
          }
        }
        function d() {
          e.$el.find(".fr-marker").remove();
        }
        return { place: function(b, E, g) {
          var m, C, O;
          try {
            var U = b.cloneRange();
            if (U.collapse(E), U.insertNode(function(I, x) {
              var v = r(e.doc.createElement("SPAN"));
              return v.addClass("fr-marker").attr("data-id", x).attr("data-type", I).attr("style", "display: ".concat(e.browser.safari ? "none" : "inline-block", "; line-height: 0;")).html(t.INVISIBLE_SPACE), v.get(0);
            }(E, g)), E === !0)
              for (O = (m = e.$el.find('span.fr-marker[data-type="true"][data-id="'.concat(g, '"]')).get(0)).nextSibling; O && O.nodeType === Node.TEXT_NODE && O.textContent.length === 0; )
                r(O).remove(), O = m.nextSibling;
            if (E === !0 && !b.collapsed) {
              for (; !e.node.isElement(m.parentNode) && !O; )
                r(m.parentNode).after(m), O = m.nextSibling;
              if (O && O.nodeType === Node.ELEMENT_NODE && e.node.isBlock(O) && O.tagName !== "HR") {
                for (C = [O]; O = C[0], (C = e.node.contents(O))[0] && e.node.isBlock(C[0]); )
                  ;
                r(O).prepend(r(m));
              }
            }
            if (E === !1 && !b.collapsed) {
              if ((O = (m = e.$el.find('span.fr-marker[data-type="false"][data-id="'.concat(g, '"]')).get(0)).previousSibling) && O.nodeType === Node.ELEMENT_NODE && e.node.isBlock(O) && O.tagName !== "HR") {
                for (C = [O]; O = C[C.length - 1], (C = e.node.contents(O))[C.length - 1] && e.node.isBlock(C[C.length - 1]); )
                  ;
                r(O).append(r(m));
              }
              (m.parentNode && 0 <= ["TD", "TH"].indexOf(m.parentNode.tagName) || !m.previousSibling && e.node.isBlock(m.parentElement)) && m.parentNode.previousSibling && !m.previousSibling && r(m.parentNode.previousSibling).append(m);
            }
            var y = e.$el.find('span.fr-marker[data-type="'.concat(E, '"][data-id="').concat(g, '"]')).get(0);
            return y && (y.style.display = "none"), y;
          } catch {
            return null;
          }
        }, insert: s, split: function() {
          e.selection.isCollapsed() || e.selection.remove();
          var b = e.$el.find(".fr-marker").get(0);
          if (b || (b = s()), !b)
            return null;
          var E = e.node.deepestParent(b);
          if (E || (E = e.node.blockParent(b)) && E.tagName !== "LI" && (E = null), E)
            if (e.node.isBlock(E) && e.node.isEmpty(E))
              E.tagName !== "LI" || E.parentNode.firstElementChild !== E || e.node.isEmpty(E.parentNode) ? r(E).replaceWith('<span class="fr-marker"></span>') : r(E).append('<span class="fr-marker"></span>');
            else if (e.cursor.isAtStart(b, E))
              r(E).before('<span class="fr-marker"></span>'), r(b).remove();
            else if (e.cursor.isAtEnd(b, E))
              r(E).after('<span class="fr-marker"></span>'), r(b).remove();
            else {
              for (var g = b, m = "", C = ""; g = g.parentNode, m += e.node.closeTagString(g), C = e.node.openTagString(g) + C, g !== E; )
                ;
              r(b).replaceWith('<span id="fr-break"></span>');
              var O = e.node.openTagString(E) + r(E).html() + e.node.closeTagString(E);
              O = O.replace(/<span id="fr-break"><\/span>/g, "".concat(m, '<span class="fr-marker"></span>').concat(C)), r(E).replaceWith(O);
            }
          return e.$el.find(".fr-marker").get(0);
        }, insertAtPoint: function(b) {
          var E, g = b.clientX, m = b.clientY;
          d();
          var C = null;
          if (typeof e.doc.caretPositionFromPoint < "u" ? (E = e.doc.caretPositionFromPoint(g, m), (C = e.doc.createRange()).setStart(E.offsetNode, E.offset), C.setEnd(E.offsetNode, E.offset)) : typeof e.doc.caretRangeFromPoint < "u" && (E = e.doc.caretRangeFromPoint(g, m), (C = e.doc.createRange()).setStart(E.startContainer, E.startOffset), C.setEnd(E.startContainer, E.startOffset)), C !== null && typeof e.win.getSelection < "u") {
            var O = e.win.getSelection();
            O.removeAllRanges(), O.addRange(C);
          } else if (typeof e.doc.body.createTextRange < "u")
            try {
              (C = e.doc.body.createTextRange()).moveToPoint(g, m);
              var U = C.duplicate();
              U.moveToPoint(g, m), C.setEndPoint("EndToEnd", U), C.select();
            } catch {
              return !1;
            }
          s();
        }, remove: d };
      }, t.MODULES.selection = function(e) {
        var r = e.$;
        function s() {
          var l = "";
          return e.win.getSelection ? l = e.win.getSelection() : e.doc.getSelection ? l = e.doc.getSelection() : e.doc.selection && (l = e.doc.selection.createRange().text), l.toString();
        }
        function d() {
          return e.win.getSelection ? e.win.getSelection() : e.doc.getSelection ? e.doc.getSelection() : e.doc.selection.createRange();
        }
        function u(l) {
          var i = d(), a = [];
          if (i && i.getRangeAt && i.rangeCount) {
            a = [];
            for (var p = 0; p < i.rangeCount; p++)
              a.push(i.getRangeAt(p));
          } else
            a = e.doc.createRange ? [e.doc.createRange()] : [];
          return l !== void 0 ? a[l] : a;
        }
        function b() {
          var l = d();
          try {
            l.removeAllRanges ? l.removeAllRanges() : l.empty ? l.empty() : l.clear && l.clear();
          } catch {
          }
        }
        function E(l, i) {
          var a = l;
          return a.nodeType === Node.ELEMENT_NODE && 0 < a.childNodes.length && a.childNodes[i] && (a = a.childNodes[i]), a.nodeType === Node.TEXT_NODE && (a = a.parentNode), a;
        }
        function g() {
          if (e.$wp) {
            e.markers.remove();
            var l, i, a = u(), p = [];
            for (i = 0; i < a.length; i++)
              if (a[i].startContainer !== e.doc || e.browser.msie) {
                var c = (l = a[i]).collapsed, h = e.markers.place(l, !0, i), M = e.markers.place(l, !1, i);
                if (h !== void 0 && h || !c || (r(".fr-marker").remove(), e.selection.setAtEnd(e.el)), e.el.normalize(), e.browser.safari && !c)
                  try {
                    (l = e.doc.createRange()).setStartAfter(h), l.setEndBefore(M), p.push(l);
                  } catch {
                  }
              }
            if (e.browser.safari && p.length)
              for (e.selection.clear(), i = 0; i < p.length; i++)
                e.selection.get().addRange(p[i]);
          }
        }
        function m() {
          var l, i = e.el.querySelectorAll('.fr-marker[data-type="true"]');
          if (!e.$wp)
            return e.markers.remove(), !1;
          if (i.length === 0)
            return !1;
          if (e.browser.msie || e.browser.edge)
            for (l = 0; l < i.length; l++)
              i[l].style.display = "inline-block";
          e.core.hasFocus() || e.browser.msie || e.browser.webkit || e.$el.focus(), b();
          var a = d();
          for (l = 0; l < i.length; l++) {
            var p = r(i[l]).data("id"), c = i[l], h = e.doc.createRange(), M = e.$el.find('.fr-marker[data-type="false"][data-id="'.concat(p, '"]'));
            (e.browser.msie || e.browser.edge) && M.css("display", "inline-block");
            var N = null;
            if (0 < M.length) {
              M = M[0];
              try {
                for (var ie = !1, D = c.nextSibling, _ = null; D && D.nodeType === Node.TEXT_NODE && D.textContent.length === 0; )
                  D = (_ = D).nextSibling, r(_).remove();
                for (var Q = M.nextSibling; Q && Q.nodeType === Node.TEXT_NODE && Q.textContent.length === 0; )
                  Q = (_ = Q).nextSibling, r(_).remove();
                if (c.nextSibling === M || M.nextSibling === c) {
                  for (var re = c.nextSibling === M ? c : M, q = re === c ? M : c, ae = re.previousSibling; ae && ae.nodeType === Node.TEXT_NODE && ae.length === 0; )
                    ae = (_ = ae).previousSibling, r(_).remove();
                  if (ae && ae.nodeType === Node.TEXT_NODE)
                    for (; ae && ae.previousSibling && ae.previousSibling.nodeType === Node.TEXT_NODE; )
                      ae.previousSibling.textContent += ae.textContent, ae = ae.previousSibling, r(ae.nextSibling).remove();
                  for (var se = q.nextSibling; se && se.nodeType === Node.TEXT_NODE && se.length === 0; )
                    se = (_ = se).nextSibling, r(_).remove();
                  if (se && se.nodeType === Node.TEXT_NODE)
                    for (; se && se.nextSibling && se.nextSibling.nodeType === Node.TEXT_NODE; )
                      se.nextSibling.textContent = se.textContent + se.nextSibling.textContent, se = se.nextSibling, r(se.previousSibling).remove();
                  if (ae && (e.node.isVoid(ae) || e.node.isBlock(ae)) && (ae = null), se && (e.node.isVoid(se) || e.node.isBlock(se)) && (se = null), ae && se && ae.nodeType === Node.TEXT_NODE && se.nodeType === Node.TEXT_NODE) {
                    r(c).remove(), r(M).remove();
                    var H = ae.textContent.length;
                    ae.textContent += se.textContent, r(se).remove(), e.opts.htmlUntouched || e.spaces.normalize(ae), h.setStart(ae, H), h.setEnd(ae, H), ie = !0;
                  } else
                    !ae && se && se.nodeType === Node.TEXT_NODE ? (r(c).remove(), r(M).remove(), e.opts.htmlUntouched || e.spaces.normalize(se), N = r(e.doc.createTextNode("\u200B")).get(0), r(se).before(N), h.setStart(se, 0), h.setEnd(se, 0), ie = !0) : !se && ae && ae.nodeType === Node.TEXT_NODE && (r(c).remove(), r(M).remove(), e.opts.htmlUntouched || e.spaces.normalize(ae), N = r(e.doc.createTextNode("\u200B")).get(0), r(ae).after(N), h.setStart(ae, ae.textContent.length), h.setEnd(ae, ae.textContent.length), ie = !0);
                }
                if (!ie) {
                  var W = void 0, T = void 0;
                  T = (e.browser.chrome || e.browser.edge) && c.nextSibling === M ? (W = C(M, h, !0) || h.setStartAfter(M), C(c, h, !1) || h.setEndBefore(c)) : (c.previousSibling === M && (M = (c = M).nextSibling), M.nextSibling && M.nextSibling.tagName === "BR" || !M.nextSibling && e.node.isBlock(c.previousSibling) || c.previousSibling && c.previousSibling.tagName === "BR" || (c.style.display = "inline", M.style.display = "inline", N = r(e.doc.createTextNode("\u200B")).get(0)), W = C(c, h, !0) || r(c).before(N) && h.setStartBefore(c), C(M, h, !1) || r(M).after(N) && h.setEndAfter(M)), typeof W == "function" && W(), typeof T == "function" && T();
                }
              } catch {
              }
            }
            N && r(N).remove();
            try {
              a.addRange(h);
            } catch {
            }
          }
          e.markers.remove();
        }
        function C(l, i, a) {
          var p, c = l.previousSibling, h = l.nextSibling;
          return c && h && c.nodeType === Node.TEXT_NODE && h.nodeType === Node.TEXT_NODE ? (p = c.textContent.length, a ? (h.textContent = c.textContent + h.textContent, r(c).remove(), r(l).remove(), e.opts.htmlUntouched || e.spaces.normalize(h), function() {
            i.setStart(h, p);
          }) : (c.textContent += h.textContent, r(h).remove(), r(l).remove(), e.opts.htmlUntouched || e.spaces.normalize(c), function() {
            i.setEnd(c, p);
          })) : c && !h && c.nodeType === Node.TEXT_NODE ? (p = c.textContent.length, a ? (e.opts.htmlUntouched || e.spaces.normalize(c), function() {
            i.setStart(c, p);
          }) : (e.opts.htmlUntouched || e.spaces.normalize(c), function() {
            i.setEnd(c, p);
          })) : !(!h || c || h.nodeType !== Node.TEXT_NODE) && (a ? (e.opts.htmlUntouched || e.spaces.normalize(h), function() {
            i.setStart(h, 0);
          }) : (e.opts.htmlUntouched || e.spaces.normalize(h), function() {
            i.setEnd(h, 0);
          }));
        }
        function O() {
          for (var l = u(), i = 0; i < l.length; i++)
            if (!l[i].collapsed)
              return !1;
          return !0;
        }
        function U(l) {
          var i, a, p = !1, c = !1;
          if (e.win.getSelection) {
            var h = e.win.getSelection();
            h.rangeCount && ((a = (i = h.getRangeAt(0)).cloneRange()).selectNodeContents(l), a.setEnd(i.startContainer, i.startOffset), p = y(a), a.selectNodeContents(l), a.setStart(i.endContainer, i.endOffset), c = y(a));
          } else
            e.doc.selection && e.doc.selection.type !== "Control" && ((a = (i = e.doc.selection.createRange()).duplicate()).moveToElementText(l), a.setEndPoint("EndToStart", i), p = y(a), a.moveToElementText(l), a.setEndPoint("StartToEnd", i), c = y(a));
          return { atStart: p, atEnd: c };
        }
        function y(l) {
          return l.toString().replace(/[\u200B-\u200D\uFEFF]/g, "") === "";
        }
        function B(l, i) {
          i === void 0 && (i = !0);
          var a = r(l).html();
          a && a.replace(/\u200b/g, "").length !== a.length && r(l).html(a.replace(/\u200b/g, ""));
          for (var p = e.node.contents(l), c = 0; c < p.length; c++)
            p[c].nodeType !== Node.ELEMENT_NODE ? r(p[c]).remove() : (B(p[c], c === 0), c === 0 && (i = !1));
          if (l.nodeType === Node.TEXT_NODE) {
            var h = r(document.createElement("span")).attr("data-first", "true").attr("data-text", "true");
            r(l)[0].replaceWith(h[0]);
          } else
            i && r(l).attr("data-first", !0);
        }
        function I() {
          return r(this).find("fr-inner").length === 0;
        }
        function x() {
          try {
            if (!e.$wp)
              return !1;
            for (var l = u(0).commonAncestorContainer; l && !e.node.isElement(l); )
              l = l.parentNode;
            return !!e.node.isElement(l);
          } catch {
            return !1;
          }
        }
        function v(l, i) {
          if (!l || 0 < l.getElementsByClassName("fr-marker").length)
            return !1;
          for (var a = l.firstChild; a && (e.node.isBlock(a) || i && !e.node.isVoid(a) && a.nodeType === Node.ELEMENT_NODE); )
            a = (l = a).firstChild;
          l.innerHTML = t.MARKERS + l.innerHTML;
        }
        function A(l, i) {
          if (!l || 0 < l.getElementsByClassName("fr-marker").length)
            return !1;
          for (var a = l.lastChild; a && (e.node.isBlock(a) || i && !e.node.isVoid(a) && a.nodeType === Node.ELEMENT_NODE); )
            a = (l = a).lastChild;
          var p = e.doc.createElement("SPAN");
          for (p.setAttribute("id", "fr-sel-markers"), p.innerHTML = t.MARKERS; l.parentNode && e.opts.htmlAllowedEmptyTags && 0 <= e.opts.htmlAllowedEmptyTags.indexOf(l.tagName.toLowerCase()); )
            l = l.parentNode;
          l.appendChild(p);
          var c = l.querySelector("#fr-sel-markers");
          c.outerHTML = c.innerHTML;
        }
        return { text: s, get: d, ranges: u, clear: b, element: function() {
          var i = d();
          try {
            if (i.rangeCount) {
              var a, p = u(0), c = p.startContainer;
              if (e.node.isElement(c) && p.startOffset === 0 && c.childNodes.length)
                for (; c.childNodes.length && c.childNodes[0].nodeType === Node.ELEMENT_NODE; )
                  c = c.childNodes[0];
              if (c.nodeType === Node.TEXT_NODE && p.startOffset === (c.textContent || "").length && c.nextSibling && (c = c.nextSibling), c.nodeType === Node.ELEMENT_NODE) {
                var h = !1;
                if (0 < c.childNodes.length && c.childNodes[p.startOffset]) {
                  for (a = c.childNodes[p.startOffset]; a && a.nodeType === Node.TEXT_NODE && a.textContent.length === 0; )
                    a = a.nextSibling;
                  if (a && a.textContent.replace(/\u200B/g, "") === s().replace(/\u200B/g, "") && (c = a, h = !0), !h && 1 < c.childNodes.length && 0 < p.startOffset && c.childNodes[p.startOffset - 1]) {
                    for (a = c.childNodes[p.startOffset - 1]; a && a.nodeType === Node.TEXT_NODE && a.textContent.length === 0; )
                      a = a.nextSibling;
                    a && a.textContent.replace(/\u200B/g, "") === s().replace(/\u200B/g, "") && (c = a, h = !0);
                  }
                } else
                  !p.collapsed && c.nextSibling && c.nextSibling.nodeType === Node.ELEMENT_NODE && (a = c.nextSibling) && a.textContent.replace(/\u200B/g, "") === s().replace(/\u200B/g, "") && (c = a, h = !0);
                !h && 0 < c.childNodes.length && r(c.childNodes[0]).text().replace(/\u200B/g, "") === s().replace(/\u200B/g, "") && ["BR", "IMG", "HR"].indexOf(c.childNodes[0].tagName) < 0 && (c = c.childNodes[0]);
              }
              for (; c.nodeType !== Node.ELEMENT_NODE && c.parentNode; )
                c = c.parentNode;
              for (var M = c; M && M.tagName !== "HTML"; ) {
                if (M === e.el)
                  return c;
                M = r(M).parent()[0];
              }
            }
          } catch {
          }
          return e.el;
        }, endElement: function() {
          var i = d();
          try {
            if (i.rangeCount) {
              var a, p = u(0), c = p.endContainer;
              if (c.nodeType === Node.ELEMENT_NODE) {
                var h = !1;
                0 < c.childNodes.length && c.childNodes[p.endOffset] && r(c.childNodes[p.endOffset]).text() === s() ? (c = c.childNodes[p.endOffset], h = !0) : !p.collapsed && c.previousSibling && c.previousSibling.nodeType === Node.ELEMENT_NODE ? (a = c.previousSibling) && a.textContent.replace(/\u200B/g, "") === s().replace(/\u200B/g, "") && (c = a, h = !0) : !p.collapsed && 0 < c.childNodes.length && c.childNodes[p.endOffset] && (a = c.childNodes[p.endOffset].previousSibling).nodeType === Node.ELEMENT_NODE && a && a.textContent.replace(/\u200B/g, "") === s().replace(/\u200B/g, "") && (c = a, h = !0), !h && 0 < c.childNodes.length && r(c.childNodes[c.childNodes.length - 1]).text() === s() && ["BR", "IMG", "HR"].indexOf(c.childNodes[c.childNodes.length - 1].tagName) < 0 && (c = c.childNodes[c.childNodes.length - 1]);
              }
              for (c.nodeType === Node.TEXT_NODE && p.endOffset === 0 && c.previousSibling && c.previousSibling.nodeType === Node.ELEMENT_NODE && (c = c.previousSibling); c.nodeType !== Node.ELEMENT_NODE && c.parentNode; )
                c = c.parentNode;
              for (var M = c; M && M.tagName !== "HTML"; ) {
                if (M === e.el)
                  return c;
                M = r(M).parent()[0];
              }
            }
          } catch {
          }
          return e.el;
        }, save: g, restore: m, isCollapsed: O, isFull: function() {
          if (O())
            return !1;
          e.selection.save();
          var i, a = e.el.querySelectorAll("td, th, img, br");
          for (i = 0; i < a.length; i++)
            a[i].nextSibling && (a[i].innerHTML = '<span class="fr-mk">'.concat(t.INVISIBLE_SPACE, "</span>").concat(a[i].innerHTML));
          var p = !1, c = U(e.el);
          for (c.atStart && c.atEnd && (p = !0), a = e.el.querySelectorAll(".fr-mk"), i = 0; i < a.length; i++)
            a[i].parentNode.removeChild(a[i]);
          return e.selection.restore(), p;
        }, inEditor: x, remove: function() {
          if (O())
            return !0;
          var i;
          function a(L) {
            for (var R = L.previousSibling; R && R.nodeType === Node.TEXT_NODE && R.textContent.length === 0; ) {
              var K = R;
              R = R.previousSibling, r(K).remove();
            }
            return R;
          }
          function p(L) {
            for (var R = L.nextSibling; R && R.nodeType === Node.TEXT_NODE && R.textContent.length === 0; ) {
              var K = R;
              R = R.nextSibling, r(K).remove();
            }
            return R;
          }
          g();
          var c = e.$el.find('.fr-marker[data-type="true"]');
          for (i = 0; i < c.length; i++)
            for (var h = c[i]; !(a(h) || e.node.isBlock(h.parentNode) || e.$el.is(h.parentNode) || e.node.hasClass(h.parentNode, "fr-inner")); )
              r(h.parentNode).before(h);
          var M = e.$el.find('.fr-marker[data-type="false"]');
          for (i = 0; i < M.length; i++) {
            for (var N = M[i]; !(p(N) || e.node.isBlock(N.parentNode) || e.$el.is(N.parentNode) || e.node.hasClass(N.parentNode, "fr-inner")); )
              r(N.parentNode).after(N);
            N.parentNode && e.node.isBlock(N.parentNode) && e.node.isEmpty(N.parentNode) && !e.$el.is(N.parentNode) && !e.node.hasClass(N.parentNode, "fr-inner") && e.opts.keepFormatOnDelete && r(N.parentNode).after(N);
          }
          if (function() {
            for (var R = e.$el.find(".fr-marker"), K = 0; K < R.length; K++)
              if (r(R[K]).parentsUntil('.fr-element, [contenteditable="true"]', '[contenteditable="false"]').length)
                return !1;
            return !0;
          }()) {
            (function L(R, K) {
              var V = e.node.contents(R.get(0));
              0 <= ["TD", "TH"].indexOf(R.get(0).tagName) && R.find(".fr-marker").length === 1 && (e.node.hasClass(V[0], "fr-marker") || V[0].tagName == "BR" && e.node.hasClass(V[0].nextElementSibling, "fr-marker")) && R.attr("data-del-cell", !0);
              for (var j = 0; j < V.length; j++) {
                var X = V[j];
                e.node.hasClass(X, "fr-marker") ? K = (K + 1) % 2 : K ? 0 < r(X).find(".fr-marker").length ? K = L(r(X), K) : ["TD", "TH"].indexOf(X.tagName) < 0 && !e.node.hasClass(X, "fr-inner") ? !e.opts.keepFormatOnDelete || 0 < e.$el.find("[data-first]").length || e.node.isVoid(X) ? r(X).remove() : B(X) : e.node.hasClass(X, "fr-inner") ? r(X).find(".fr-inner").length === 0 ? r(X).html("<br>") : r(X).find(".fr-inner").filter(I).html("<br>") : (r(X).empty(), r(X).attr("data-del-cell", !0)) : 0 < r(X).find(".fr-marker").length && (K = L(r(X), K));
              }
              return K;
            })(e.$el, 0);
            var ie = e.$el.find('[data-first="true"]');
            if (ie.length)
              e.$el.find(".fr-marker").remove(), ie.append(t.INVISIBLE_SPACE + t.MARKERS).removeAttr("data-first"), ie.attr("data-text") && ie.replaceWith(ie.html());
            else
              for (e.$el.find("table").filter(function() {
                return 0 < r(this).find("[data-del-cell]").length && r(this).find("[data-del-cell]").length === r(this).find("td, th").length;
              }).remove(), e.$el.find("[data-del-cell]").removeAttr("data-del-cell"), c = e.$el.find('.fr-marker[data-type="true"]'), i = 0; i < c.length; i++) {
                var D = c[i], _ = D.nextSibling, Q = e.$el.find('.fr-marker[data-type="false"][data-id="'.concat(r(D).data("id"), '"]')).get(0);
                if (Q) {
                  if (D && (!_ || _ !== Q)) {
                    var re = e.node.blockParent(D), q = e.node.blockParent(Q), ae = !1, se = !1;
                    if (re && 0 <= ["UL", "OL"].indexOf(re.tagName) && (ae = !(re = null)), q && 0 <= ["UL", "OL"].indexOf(q.tagName) && (se = !(q = null)), r(D).after(Q), re !== q)
                      if (re !== null || ae)
                        if (q !== null || se || r(re).parentsUntil(e.$el, "table").length !== 0)
                          re && q && r(re).parentsUntil(e.$el, "table").length === 0 && r(q).parentsUntil(e.$el, "table").length === 0 && !r(re).contains(q) && !r(q).contains(re) && (r(re).append(r(q).html()), r(q).remove());
                        else {
                          for (_ = re; !_.nextSibling && _.parentNode !== e.el; )
                            _ = _.parentNode;
                          for (_ = _.nextSibling; _ && _.tagName !== "BR"; ) {
                            var H = _.nextSibling;
                            r(re).append(_), _ = H;
                          }
                          _ && _.tagName === "BR" && r(_).remove();
                        }
                      else {
                        var W = e.node.deepestParent(D);
                        W ? (r(W).after(r(q).html()), r(q).remove()) : r(q).parentsUntil(e.$el, "table").length === 0 && (r(D).next().after(r(q).html()), r(q).remove());
                      }
                  }
                } else
                  Q = r(D).clone().attr("data-type", !1), r(D).after(Q);
              }
          }
          e.$el.find("li:empty").remove(), e.opts.keepFormatOnDelete || e.html.fillEmptyBlocks(), e.html.cleanEmptyTags(!0), e.opts.htmlUntouched || (e.clean.lists(), e.$el.find("li:empty").append("<br>"), e.spaces.normalize());
          var T = e.$el.find(".fr-marker").last().get(0), S = e.$el.find(".fr-marker").first().get(0);
          T !== void 0 && S !== void 0 && !T.nextSibling && S.previousSibling && S.previousSibling.tagName === "BR" && e.node.isElement(T.parentNode) && e.node.isElement(S.parentNode) && e.$el.append("<br>"), m();
        }, blocks: function() {
          var i, a, p = [], c = d();
          if (x() && c.rangeCount) {
            var h = u();
            for (i = 0; i < h.length; i++) {
              var M = h[i], N = E(M.startContainer, M.startOffset), ie = E(M.endContainer, M.endOffset);
              (e.node.isBlock(N) || e.node.hasClass(N, "fr-inner")) && p.indexOf(N) < 0 && p.push(N), (a = e.node.blockParent(N)) && p.indexOf(a) < 0 && p.push(a);
              for (var D = [], _ = N; _ !== ie && _ !== e.el; )
                D.indexOf(_) < 0 && _.children && _.children.length ? (D.push(_), _ = _.children[0]) : _.nextSibling ? _ = _.nextSibling : _.parentNode && (_ = _.parentNode, D.push(_)), e.node.isBlock(_) && D.indexOf(_) < 0 && p.indexOf(_) < 0 && (_ !== ie || 0 < M.endOffset) && p.push(_);
              e.node.isBlock(ie) && p.indexOf(ie) < 0 && 0 < M.endOffset && p.push(ie), (a = e.node.blockParent(ie)) && p.indexOf(a) < 0 && p.push(a);
            }
          }
          for (i = p.length - 1; 0 < i; i--)
            r(p[i]).find(p).length && p.splice(i, 1);
          return p;
        }, info: U, setAtEnd: A, setAtStart: v, setBefore: function(i, a) {
          a === void 0 && (a = !0);
          for (var p = i.previousSibling; p && p.nodeType === Node.TEXT_NODE && p.textContent.length === 0; )
            p = p.previousSibling;
          return p ? (e.node.isBlock(p) ? A(p) : p.tagName === "BR" ? r(p).before(t.MARKERS) : r(p).after(t.MARKERS), !0) : !!a && (e.node.isBlock(i) ? v(i) : r(i).before(t.MARKERS), !0);
        }, setAfter: function(i, a) {
          a === void 0 && (a = !0);
          for (var p = i.nextSibling; p && p.nodeType === Node.TEXT_NODE && p.textContent.length === 0; )
            p = p.nextSibling;
          return p ? (e.node.isBlock(p) ? v(p) : r(p).before(t.MARKERS), !0) : !!a && (e.node.isBlock(i) ? A(i) : r(i).after(t.MARKERS), !0);
        }, rangeElement: E };
      }, Object.assign(t.DEFAULTS, { language: null }), t.LANGUAGE = {}, t.MODULES.language = function(e) {
        var r;
        return { _init: function() {
          t.LANGUAGE && (r = t.LANGUAGE[e.opts.language]), r && r.direction && (e.opts.direction = r.direction);
        }, translate: function(d) {
          return r && r.translation[d] && r.translation[d].length ? r.translation[d] : d;
        } };
      }, Object.assign(t.DEFAULTS, { placeholderText: "Type something" }), t.MODULES.placeholder = function(e) {
        var r = e.$;
        function s() {
          e.$placeholder || function() {
            e.$placeholder = r(e.doc.createElement("SPAN")).addClass("fr-placeholder"), e.$wp.append(e.$placeholder);
          }();
          var b = e.opts.iframe ? e.$iframe.prev().outerHeight(!0) : e.$el.prev().outerHeight(!0), E = 0, g = 0, m = 0, C = 0, O = 0, U = 0, y = e.node.contents(e.el), B = r(e.selection.element()).css("text-align");
          if (y.length && y[0].nodeType === Node.ELEMENT_NODE) {
            var I = r(y[0]);
            (0 < e.$wp.prev().length || 0 < e.$el.prev().length) && e.ready && (E = e.helpers.getPX(I.css("margin-top")), C = e.helpers.getPX(I.css("padding-top")), g = e.helpers.getPX(I.css("margin-left")), m = e.helpers.getPX(I.css("margin-right")), O = e.helpers.getPX(I.css("padding-left")), U = e.helpers.getPX(I.css("padding-right"))), e.$placeholder.css("font-size", I.css("font-size")), e.$placeholder.css("line-height", I.css("line-height"));
          } else
            e.$placeholder.css("font-size", e.$el.css("font-size")), e.$placeholder.css("line-height", e.$el.css("line-height"));
          e.$wp.addClass("show-placeholder"), e.$placeholder.css({ marginTop: Math.max(e.helpers.getPX(e.$el.css("margin-top")), E) + (b || 0), paddingTop: Math.max(e.helpers.getPX(e.$el.css("padding-top")), C), paddingLeft: Math.max(e.helpers.getPX(e.$el.css("padding-left")), O), marginLeft: Math.max(e.helpers.getPX(e.$el.css("margin-left")), g), paddingRight: Math.max(e.helpers.getPX(e.$el.css("padding-right")), U), marginRight: Math.max(e.helpers.getPX(e.$el.css("margin-right")), m), textAlign: B }).text(e.language.translate(e.opts.placeholderText || e.$oel.attr("placeholder") || "")), e.$placeholder.html(e.$placeholder.text().replace(/\n/g, "<br>"));
        }
        function d() {
          e.$wp.removeClass("show-placeholder");
        }
        function u() {
          if (!e.$wp)
            return !1;
          e.core.isEmpty() ? s() : d();
        }
        return { _init: function() {
          if (!e.$wp)
            return !1;
          e.events.on("init input keydown keyup contentChanged initialized", u);
        }, show: s, hide: d, refresh: u, isVisible: function() {
          return !e.$wp || e.node.hasClass(e.$wp.get(0), "show-placeholder");
        } };
      }, t.UNICODE_NBSP = String.fromCharCode(160), t.VOID_ELEMENTS = ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr"], t.BLOCK_TAGS = ["address", "article", "aside", "audio", "blockquote", "canvas", "details", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "li", "main", "nav", "noscript", "ol", "output", "p", "pre", "section", "table", "tbody", "td", "tfoot", "th", "thead", "tr", "ul", "video"], Object.assign(t.DEFAULTS, { htmlAllowedEmptyTags: ["textarea", "a", "iframe", "object", "video", "style", "script", ".fa", ".fr-emoticon", ".fr-inner", "path", "line", "hr"], htmlDoNotWrapTags: ["script", "style"], htmlSimpleAmpersand: !1, htmlIgnoreCSSProperties: [], htmlExecuteScripts: !0 }), t.MODULES.html = function(e) {
        var r = e.$;
        function s() {
          return e.opts.enter === t.ENTER_P ? "p" : e.opts.enter === t.ENTER_DIV ? "div" : e.opts.enter === t.ENTER_BR ? null : void 0;
        }
        function d(D, _) {
          return !(!D || D === e.el) && (_ ? ["PRE", "SCRIPT", "STYLE"].indexOf(D.tagName) != -1 || d(D.parentNode, _) : ["PRE", "SCRIPT", "STYLE"].indexOf(D.tagName) !== -1);
        }
        function u(D) {
          var _, Q = [], re = [];
          if (D) {
            var q = e.el.querySelectorAll(".fr-marker");
            for (_ = 0; _ < q.length; _++) {
              var ae = e.node.blockParent(q[_]) || q[_];
              if (ae) {
                var se = ae.nextSibling, H = ae.previousSibling;
                ae && re.indexOf(ae) < 0 && e.node.isBlock(ae) && re.push(ae), H && e.node.isBlock(H) && re.indexOf(H) < 0 && re.push(H), se && e.node.isBlock(se) && re.indexOf(se) < 0 && re.push(se);
              }
            }
          } else
            re = e.el.querySelectorAll(b());
          var W = b();
          for (W += ",".concat(t.VOID_ELEMENTS.join(",")), W += ", .fr-inner", W += ",".concat(e.opts.htmlAllowedEmptyTags.join(":not(.fr-marker),"), ":not(.fr-marker)"), _ = re.length - 1; 0 <= _; _--)
            if (!(re[_].textContent && 0 < re[_].textContent.replace(/\u200B|\n/g, "").length || 0 < re[_].querySelectorAll(W).length)) {
              for (var T = e.node.contents(re[_]), S = !1, L = 0; L < T.length; L++)
                if (T[L].nodeType !== Node.COMMENT_NODE && T[L].textContent && 0 < T[L].textContent.replace(/\u200B|\n/g, "").length) {
                  S = !0;
                  break;
                }
              S || Q.push(re[_]);
            }
          return Q;
        }
        function b() {
          return t.BLOCK_TAGS.join(", ");
        }
        function E(D) {
          var _, Q, re = r.merge([], t.VOID_ELEMENTS);
          re = r.merge(re, e.opts.htmlAllowedEmptyTags), re = D === void 0 ? r.merge(re, t.BLOCK_TAGS) : r.merge(re, t.NO_DELETE_TAGS), _ = e.el.querySelectorAll("*:empty:not(".concat(re.join("):not("), "):not(.fr-marker):not(template)"));
          do {
            Q = !1;
            for (var q = 0; q < _.length; q++)
              _[q].attributes.length !== 0 && _[q].getAttribute("href") === void 0 || (_[q].parentNode.removeChild(_[q]), Q = !0);
            _ = e.el.querySelectorAll("*:empty:not(".concat(re.join("):not("), "):not(.fr-marker):not(template)"));
          } while (_.length && Q);
        }
        function g(D, _) {
          var Q = s();
          if (_ && (Q = "div"), Q) {
            for (var re = e.doc.createDocumentFragment(), q = null, ae = !1, se = D.firstChild, H = !1; se; ) {
              var W = se.nextSibling;
              if (se.nodeType === Node.ELEMENT_NODE && (e.node.isBlock(se) || 0 <= e.opts.htmlDoNotWrapTags.indexOf(se.tagName.toLowerCase()) && !e.node.hasClass(se, "fr-marker")))
                q = null, re.appendChild(se.cloneNode(!0));
              else if (se.nodeType !== Node.ELEMENT_NODE && se.nodeType !== Node.TEXT_NODE)
                q = null, re.appendChild(se.cloneNode(!0));
              else if (se.tagName === "BR")
                q === null ? (q = e.doc.createElement(Q), H = !0, _ && (q.setAttribute("class", "fr-temp-div"), q.setAttribute("data-empty", !0)), q.appendChild(se.cloneNode(!0)), re.appendChild(q)) : ae === !1 && (q.appendChild(e.doc.createElement("br")), _ && (q.setAttribute("class", "fr-temp-div"), q.setAttribute("data-empty", !0))), q = null;
              else {
                var T = se.textContent;
                se.nodeType !== Node.TEXT_NODE || 0 < T.replace(/\n/g, "").replace(/(^ *)|( *$)/g, "").length || T.replace(/(^ *)|( *$)/g, "").length && T.indexOf(`
`) < 0 ? (q === null && (q = e.doc.createElement(Q), H = !0, _ && q.setAttribute("class", "fr-temp-div"), re.appendChild(q), ae = !1), q.appendChild(se.cloneNode(!0)), ae || e.node.hasClass(se, "fr-marker") || se.nodeType === Node.TEXT_NODE && T.replace(/ /g, "").length === 0 || (ae = !0)) : H = !0;
              }
              se = W;
            }
            H && (D.innerHTML = "", D.appendChild(re));
          }
        }
        function m(D, _) {
          for (var Q = D.length - 1; 0 <= Q; Q--)
            g(D[Q], _);
        }
        function C(D, _, Q, re, q) {
          if (!e.$wp)
            return !1;
          D === void 0 && (D = !1), _ === void 0 && (_ = !1), Q === void 0 && (Q = !1), re === void 0 && (re = !1), q === void 0 && (q = !1);
          var ae = e.$wp.scrollTop();
          g(e.el, D), re && m(e.el.querySelectorAll(".fr-inner"), D), _ && m(e.el.querySelectorAll("td, th"), D), Q && m(e.el.querySelectorAll("blockquote"), D), q && m(e.el.querySelectorAll("li"), D), ae !== e.$wp.scrollTop() && e.$wp.scrollTop(ae);
        }
        function O(D) {
          if (D === void 0 && (D = e.el), D && 0 <= ["SCRIPT", "STYLE", "PRE"].indexOf(D.tagName))
            return !1;
          for (var _ = e.doc.createTreeWalker(D, NodeFilter.SHOW_TEXT, e.node.filter(function(H) {
            return H.textContent.match(/([ \n]{2,})|(^[ \n]{1,})|([ \n]{1,}$)/g) !== null;
          }), !1); _.nextNode(); ) {
            var Q = _.currentNode;
            if (!d(Q.parentNode, !0)) {
              var re = e.node.isBlock(Q.parentNode) || e.node.isElement(Q.parentNode), q = Q.textContent.replace(/(?!^)( ){2,}(?!$)/g, " ").replace(/\n/g, " ").replace(/^[ ]{2,}/g, " ").replace(/[ ]{2,}$/g, " ");
              if (re) {
                var ae = Q.previousSibling, se = Q.nextSibling;
                ae && se && q === " " ? q = e.node.isBlock(ae) && e.node.isBlock(se) ? "" : " " : (ae || (q = q.replace(/^ */, "")), se || (q = q.replace(/ *$/, "")));
              }
              Q.textContent = q;
            }
          }
        }
        function U(D, _, Q) {
          var re = new RegExp(_, "gi").exec(D);
          return re ? re[Q] : null;
        }
        function y(D) {
          var _ = D.doctype, Q = "<!DOCTYPE html>";
          return _ && (Q = "<!DOCTYPE ".concat(_.name).concat(_.publicId ? ' PUBLIC "'.concat(_.publicId, '"') : "").concat(!_.publicId && _.systemId ? " SYSTEM" : "").concat(_.systemId ? ' "'.concat(_.systemId, '"') : "", ">")), Q;
        }
        function B(D) {
          var _ = D.parentNode;
          if (_ && (e.node.isBlock(_) || e.node.isElement(_)) && ["TD", "TH"].indexOf(_.tagName) < 0) {
            for (var Q = D.previousSibling, re = D.nextSibling; Q && (Q.nodeType === Node.TEXT_NODE && Q.textContent.replace(/\n|\r/g, "").length === 0 || e.node.hasClass(Q, "fr-tmp")); )
              Q = Q.previousSibling;
            if (re)
              return !1;
            Q && _ && Q.tagName !== "BR" && !e.node.isBlock(Q) && !re && 0 < _.textContent.replace(/\u200B/g, "").length && 0 < Q.textContent.length && !e.node.hasClass(Q, "fr-marker") && (e.el === _ && !re && e.opts.enter === t.ENTER_BR && e.browser.msie || D.parentNode.removeChild(D));
          } else
            !_ || e.node.isBlock(_) || e.node.isElement(_) || D.previousSibling || D.nextSibling || !e.node.isDeletable(D.parentNode) || B(D.parentNode);
        }
        function I() {
          e.opts.htmlUntouched || (E(), C(), O(), e.spaces.normalize(null, !0), e.html.fillEmptyBlocks(), e.clean.lists(), e.clean.tables(), e.clean.toHTML5(), e.html.cleanBRs()), e.selection.restore(), x(), e.placeholder.refresh();
        }
        function x() {
          e.node.isEmpty(e.el) && (s() !== null ? e.el.querySelector(b()) || e.el.querySelector("".concat(e.opts.htmlDoNotWrapTags.join(":not(.fr-marker),"), ":not(.fr-marker)")) || (e.core.hasFocus() ? (e.$el.html("<".concat(s(), ">").concat(t.MARKERS, "<br/></").concat(s(), ">")), e.selection.restore()) : e.$el.html("<".concat(s(), "><br/></").concat(s(), ">"))) : e.el.querySelector("*:not(.fr-marker):not(br)") || (e.core.hasFocus() ? (e.$el.html("".concat(t.MARKERS, "<br/>")), e.selection.restore()) : e.$el.html("<br/>")));
        }
        function v(D, _) {
          return U(D, "<".concat(_, "[^>]*?>([\\w\\W]*)</").concat(_, ">"), 1);
        }
        function A(D, _) {
          var Q = r("<div ".concat(U(D, "<".concat(_, "([^>]*?)>"), 1) || "", ">"));
          return e.node.rawAttributes(Q.get(0));
        }
        function l(D) {
          return (U(D, "<!DOCTYPE([^>]*?)>", 0) || "<!DOCTYPE html>").replace(/\n/g, " ").replace(/ {2,}/g, " ");
        }
        function i(D, _) {
          e.opts.htmlExecuteScripts ? D.html(_) : D.get(0).innerHTML = _;
        }
        function a(D) {
          var _;
          (_ = /:not\(([^)]*)\)/g).test(D) && (D = D.replace(_, "     $1 "));
          var Q = 100 * (D.match(/(#[^\s+>~.[:]+)/g) || []).length + 10 * (D.match(/(\[[^]]+\])/g) || []).length + 10 * (D.match(/(\.[^\s+>~.[:]+)/g) || []).length + 10 * (D.match(/(:[\w-]+\([^)]*\))/gi) || []).length + 10 * (D.match(/(:[^\s+>~.[:]+)/g) || []).length + (D.match(/(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi) || []).length;
          return Q += ((D = (D = D.replace(/[*\s+>~]/g, " ")).replace(/[#.]/g, " ")).match(/([^\s+>~.[:]+)/g) || []).length;
        }
        function p(D) {
          if (e.events.trigger("html.processGet", [D]), D && D.getAttribute && D.getAttribute("class") === "" && D.removeAttribute("class"), D && D.getAttribute && D.getAttribute("style") === "" && D.removeAttribute("style"), D && D.nodeType === Node.ELEMENT_NODE) {
            var _, Q = D.querySelectorAll('[class=""],[style=""]');
            for (_ = 0; _ < Q.length; _++) {
              var re = Q[_];
              re.getAttribute("class") === "" && re.removeAttribute("class"), re.getAttribute("style") === "" && re.removeAttribute("style");
            }
            if (D.tagName === "BR")
              B(D);
            else {
              var q = D.querySelectorAll("br");
              for (_ = 0; _ < q.length; _++)
                B(q[_]);
            }
          }
        }
        function c(D, _) {
          return D[3] - _[3];
        }
        function h() {
          for (var D = e.el.querySelectorAll("input, textarea"), _ = 0; _ < D.length; _++)
            D[_].type !== "checkbox" && D[_].type !== "radio" || (D[_].checked ? D[_].setAttribute("checked", D[_].checked) : e.$(D[_]).removeAttr("checked")), D[_].getAttribute("value") && D[_].setAttribute("value", D[_].value);
        }
        function M(D) {
          var _ = e.doc.createElement("div");
          return _.innerHTML = D, _.querySelector(b()) !== null;
        }
        function N(D) {
          var _ = null;
          if (D === void 0 && (_ = e.selection.element()), e.opts.keepFormatOnDelete)
            return !1;
          var Q, re, q = _ ? (_.textContent.match(/\u200B/g) || []).length - _.querySelectorAll(".fr-marker").length : 0;
          if ((e.el.textContent.match(/\u200B/g) || []).length - e.el.querySelectorAll(".fr-marker").length === q)
            return !1;
          do {
            re = !1, Q = e.el.querySelectorAll("*:not(.fr-marker)");
            for (var ae = 0; ae < Q.length; ae++) {
              var se = Q[ae];
              if (_ !== se) {
                var H = se.textContent;
                se.children.length === 0 && H.length === 1 && H.charCodeAt(0) === 8203 && se.tagName !== "TD" && (r(se).remove(), re = !0);
              }
            }
          } while (re);
        }
        function ie() {
          N(), e.placeholder && setTimeout(e.placeholder.refresh, 0);
        }
        return { defaultTag: s, isPreformatted: d, emptyBlocks: u, emptyBlockTagsQuery: function() {
          return "".concat(t.BLOCK_TAGS.join(":empty, "), ":empty");
        }, blockTagsQuery: b, fillEmptyBlocks: function(_) {
          var Q = u(_);
          e.node.isEmpty(e.el) && e.opts.enter === t.ENTER_BR && Q.push(e.el);
          for (var re = 0; re < Q.length; re++) {
            var q = Q[re];
            q.getAttribute("contenteditable") === "false" || q.querySelector("".concat(e.opts.htmlAllowedEmptyTags.join(":not(.fr-marker),"), ":not(.fr-marker)")) || e.node.isVoid(q) || q.tagName !== "TABLE" && q.tagName !== "TBODY" && q.tagName !== "TR" && q.tagName !== "UL" && q.tagName !== "OL" && q.appendChild(e.doc.createElement("br"));
          }
          if (e.browser.msie && e.opts.enter === t.ENTER_BR) {
            var ae = e.node.contents(e.el);
            ae.length && ae[ae.length - 1].nodeType === Node.TEXT_NODE && e.$el.append("<br>");
          }
        }, cleanEmptyTags: E, cleanWhiteTags: N, cleanBlankSpaces: O, blocks: function() {
          return e.$el.get(0).querySelectorAll(b());
        }, getDoctype: y, set: function(_) {
          var Q = e.clean.html((_ || "").trim(), [], [], e.opts.fullPage);
          if (e.opts.fullPage) {
            var re = v(Q, "body") || (0 <= Q.indexOf("<body") ? "" : Q), q = A(Q, "body"), ae = v(Q, "head") || "<title></title>", se = A(Q, "head"), H = r("<div>");
            H.append(ae).contents().each(function() {
              (this.nodeType === Node.COMMENT_NODE || 0 <= ["BASE", "LINK", "META", "NOSCRIPT", "SCRIPT", "STYLE", "TEMPLATE", "TITLE"].indexOf(this.tagName)) && this.parentNode.removeChild(this);
            });
            var W = H.html().trim();
            ae = r("<div>").append(ae).contents().map(function() {
              return this.nodeType === Node.COMMENT_NODE ? "<!--".concat(this.nodeValue, "-->") : 0 <= ["BASE", "LINK", "META", "NOSCRIPT", "SCRIPT", "STYLE", "TEMPLATE", "TITLE"].indexOf(this.tagName) ? this.outerHTML : "";
            }).toArray().join("");
            var T = l(Q), S = A(Q, "html");
            i(e.$el, "".concat(W, `
`).concat(re)), e.node.clearAttributes(e.el), e.$el.attr(q), e.$el.addClass("fr-view"), e.$el.attr("spellcheck", e.opts.spellcheck), e.$el.attr("dir", e.opts.direction), i(e.$head, ae), e.node.clearAttributes(e.$head.get(0)), e.$head.attr(se), e.node.clearAttributes(e.$html.get(0)), e.$html.attr(S), e.iframe_document.doctype.parentNode.replaceChild(function(K, V) {
              var j = K.match(/<!DOCTYPE ?([^ ]*) ?([^ ]*) ?"?([^"]*)"? ?"?([^"]*)"?>/i);
              return j ? V.implementation.createDocumentType(j[1], j[3], j[4]) : V.implementation.createDocumentType("html");
            }(T, e.iframe_document), e.iframe_document.doctype);
          } else
            i(e.$el, Q);
          var L = e.edit.isDisabled();
          e.edit.on(), e.core.injectStyle(e.opts.iframeDefaultStyle + e.opts.iframeStyle), I(), e.opts.useClasses || (e.$el.find("[fr-original-class]").each(function() {
            this.setAttribute("class", this.getAttribute("fr-original-class")), this.removeAttribute("fr-original-class");
          }), e.$el.find("[fr-original-style]").each(function() {
            this.setAttribute("style", this.getAttribute("fr-original-style")), this.removeAttribute("fr-original-style");
          })), L && e.edit.off(), e.events.trigger("html.set"), e.events.trigger("charCounter.update");
        }, syncInputs: h, get: function(_, Q) {
          if (!e.$wp)
            return e.$oel.clone().removeClass("fr-view").removeAttr("contenteditable").get(0).outerHTML;
          var re = "";
          e.events.trigger("html.beforeGet");
          var q, ae, se = [], H = {}, W = [];
          if (h(), !e.opts.useClasses && !Q) {
            var T = new RegExp("^".concat(e.opts.htmlIgnoreCSSProperties.join("$|^"), "$"), "gi");
            for (q = 0; q < e.doc.styleSheets.length; q++) {
              var S = void 0, L = 0;
              try {
                S = e.doc.styleSheets[q].cssRules, e.doc.styleSheets[q].ownerNode && e.doc.styleSheets[q].ownerNode.nodeType === "STYLE" && (L = 1);
              } catch {
              }
              if (S) {
                for (var R = 0, K = S.length; R < K; R++)
                  if (S[R].selectorText && 0 < S[R].style.cssText.length) {
                    var V = S[R].selectorText.replace(/body |\.fr-view /g, "").replace(/::/g, ":"), j = void 0;
                    try {
                      j = e.el.querySelectorAll(V);
                    } catch {
                      j = [];
                    }
                    for (ae = 0; ae < j.length; ae++) {
                      !j[ae].getAttribute("fr-original-style") && j[ae].getAttribute("style") ? (j[ae].setAttribute("fr-original-style", j[ae].getAttribute("style")), se.push(j[ae])) : j[ae].getAttribute("fr-original-style") || (j[ae].setAttribute("fr-original-style", ""), se.push(j[ae])), H[j[ae]] || (H[j[ae]] = {});
                      for (var X = 1e3 * L + a(S[R].selectorText), fe = S[R].style.cssText.split(";"), ne = 0; ne < fe.length; ne++) {
                        var ve = fe[ne].trim().split(":")[0];
                        if (ve && !ve.match(T) && (H[j[ae]][ve] || (H[j[ae]][ve] = 0) <= (j[ae].getAttribute("fr-original-style") || "").indexOf("".concat(ve, ":")) && (H[j[ae]][ve] = 1e4), X >= H[j[ae]][ve] && (H[j[ae]][ve] = X, fe[ne].trim().length))) {
                          var Ee = fe[ne].trim().split(":");
                          Ee.splice(0, 1), W.push([j[ae], ve.trim(), Ee.join(":").trim(), X]);
                        }
                      }
                    }
                  }
              }
            }
            for (W.sort(c), q = 0; q < W.length; q++) {
              var be = W[q];
              be[0].style[be[1]] = be[2];
            }
            for (q = 0; q < se.length; q++)
              if (se[q].getAttribute("class") && (se[q].setAttribute("fr-original-class", se[q].getAttribute("class")), se[q].removeAttribute("class")), 0 < (se[q].getAttribute("fr-original-style") || "").trim().length) {
                var Ae = se[q].getAttribute("fr-original-style").split(";");
                for (ae = 0; ae < Ae.length; ae++)
                  if (0 < Ae[ae].indexOf(":")) {
                    var Te = Ae[ae].split(":"), xe = Te[0];
                    Te.splice(0, 1), se[q].style[xe.trim()] = Te.join(":").trim();
                  }
              }
          }
          if (e.node.isEmpty(e.el))
            e.opts.fullPage && (re = y(e.iframe_document), re += "<html".concat(e.node.attributes(e.$html.get(0)), ">").concat(e.$html.find("head").get(0).outerHTML, "<body></body></html>"));
          else if (_ === void 0 && (_ = !1), e.opts.fullPage) {
            re = y(e.iframe_document), e.$el.removeClass("fr-view");
            var Oe = e.opts.heightMin, De = e.opts.height, Re = e.opts.heightMax;
            e.opts.heightMin = null, e.opts.height = null, e.opts.heightMax = null, e.size.refresh(), re += "<html".concat(e.node.attributes(e.$html.get(0)), ">").concat(e.$html.html(), "</html>"), e.opts.heightMin = Oe, e.opts.height = De, e.opts.heightMax = Re, e.size.refresh(), e.$el.addClass("fr-view");
          } else
            re = e.$el.html();
          if (!e.opts.useClasses && !Q)
            for (q = 0; q < se.length; q++)
              se[q].getAttribute("fr-original-class") && (se[q].setAttribute("class", se[q].getAttribute("fr-original-class")), se[q].removeAttribute("fr-original-class")), se[q].getAttribute("fr-original-style") !== null && se[q].getAttribute("fr-original-style") !== void 0 ? (se[q].getAttribute("fr-original-style").length !== 0 ? se[q].setAttribute("style", se[q].getAttribute("fr-original-style")) : se[q].removeAttribute("style"), se[q].removeAttribute("fr-original-style")) : se[q].removeAttribute("style");
          e.opts.fullPage && (re = (re = (re = (re = (re = (re = (re = (re = re.replace(/<style data-fr-style="true">(?:[\w\W]*?)<\/style>/g, "")).replace(/<link([^>]*)data-fr-style="true"([^>]*)>/g, "")).replace(/<style(?:[\w\W]*?)class="firebugResetStyles"(?:[\w\W]*?)>(?:[\w\W]*?)<\/style>/g, "")).replace(/<body((?:[\w\W]*?)) spellcheck="true"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g, "<body$1$2>$3</body>")).replace(/<body((?:[\w\W]*?)) contenteditable="(true|false)"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g, "<body$1$3>$4</body>")).replace(/<body((?:[\w\W]*?)) dir="([\w]*)"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g, "<body$1$3>$4</body>")).replace(/<body((?:[\w\W]*?))class="([\w\W]*?)(fr-rtl|fr-ltr)([\w\W]*?)"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g, '<body$1class="$2$4"$5>$6</body>')).replace(/<body((?:[\w\W]*?)) class=""((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g, "<body$1$2>$3</body>")), e.opts.htmlSimpleAmpersand && (re = re.replace(/&amp;/gi, "&")), e.events.trigger("html.afterGet"), _ || (re = re.replace(/<span[^>]*? class\s*=\s*["']?fr-marker["']?[^>]+>\u200b<\/span>/gi, "")), re = e.clean.invisibleSpaces(re), re = e.clean.exec(re, p);
          var Se = e.events.chainTrigger("html.get", re);
          return typeof Se == "string" && (re = Se), re = (re = re.replace(/<pre(?:[\w\W]*?)>(?:[\w\W]*?)<\/pre>/g, function(Ne) {
            return Ne.replace(/<br>/g, `
`);
          })).replace(/<meta((?:[\w\W]*?)) data-fr-http-equiv="/g, '<meta$1 http-equiv="');
        }, getSelected: function() {
          function _(W, T) {
            for (; T && (T.nodeType === Node.TEXT_NODE || !e.node.isBlock(T)) && !e.node.isElement(T) && !e.node.hasClass(T, "fr-inner"); )
              T && T.nodeType !== Node.TEXT_NODE && r(W).wrapInner(e.node.openTagString(T) + e.node.closeTagString(T)), T = T.parentNode;
            T && W.innerHTML === T.innerHTML ? W.innerHTML = T.outerHTML : T.innerText.indexOf(W.innerHTML) != -1 && (W.innerHTML = e.node.openTagString(T) + T.innerHTML + e.node.closeTagString(T));
          }
          var Q, re, q = "";
          if (typeof e.win.getSelection < "u") {
            e.browser.mozilla && (e.selection.save(), 1 < e.$el.find('.fr-marker[data-type="false"]').length && (e.$el.find('.fr-marker[data-type="false"][data-id="0"]').remove(), e.$el.find('.fr-marker[data-type="false"]:last').attr("data-id", "0"), e.$el.find(".fr-marker").not('[data-id="0"]').remove()), e.selection.restore());
            for (var ae = e.selection.ranges(), se = 0; se < ae.length; se++) {
              var H = document.createElement("div");
              H.appendChild(ae[se].cloneContents()), _(H, (re = Q = void 0, re = null, e.win.getSelection ? (Q = e.win.getSelection()) && Q.rangeCount && (re = Q.getRangeAt(0).commonAncestorContainer).nodeType !== Node.ELEMENT_NODE && (re = re.parentNode) : (Q = e.doc.selection) && Q.type !== "Control" && (re = Q.createRange().parentElement()), re !== null && (0 <= r(re).parents().toArray().indexOf(e.el) || re === e.el) ? re : null)), 0 < r(H).find(".fr-element").length && (H = e.el), q += H.innerHTML;
            }
          } else
            typeof e.doc.selection < "u" && e.doc.selection.type === "Text" && (q = e.doc.selection.createRange().htmlText);
          return q;
        }, insert: function(_, Q, re) {
          var q;
          if (e.selection.isCollapsed() || e.selection.remove(), q = Q ? _ : e.clean.html(_), _.indexOf('class="fr-marker"') < 0 && (q = function(W) {
            var T = e.doc.createElement("div");
            return T.innerHTML = W, e.selection.setAtEnd(T, !0), T.innerHTML;
          }(q)), e.node.isEmpty(e.el) && !e.opts.keepFormatOnDelete && M(q))
            e.el.innerHTML = q;
          else {
            var ae = e.markers.insert();
            if (ae) {
              e.node.isLastSibling(ae) && r(ae).parent().hasClass("fr-deletable") && r(ae).insertAfter(r(ae).parent());
              var se = e.node.blockParent(ae);
              if ((M(q) || re) && (e.node.deepestParent(ae) || se && se.tagName === "LI")) {
                if (se && se.tagName === "LI" && (q = function(W) {
                  if (!e.html.defaultTag())
                    return W;
                  var T = e.doc.createElement("div");
                  T.innerHTML = W;
                  for (var S = T.querySelectorAll(":scope > ".concat(e.html.defaultTag())), L = S.length - 1; 0 <= L; L--) {
                    var R = S[L];
                    e.node.isBlock(R.previousSibling) || (R.previousSibling && !e.node.isEmpty(R) && r("<br>").insertAfter(R.previousSibling), R.outerHTML = R.innerHTML);
                  }
                  return T.innerHTML;
                }(q)), !(ae = e.markers.split()))
                  return !1;
                ae.outerHTML = q;
              } else
                ae.outerHTML = q;
            } else
              e.el.innerHTML += q;
          }
          I(), e.keys.positionCaret(), e.events.trigger("html.inserted");
        }, wrap: C, unwrap: function() {
          e.$el.find("div.fr-temp-div").each(function() {
            this.previousSibling && this.previousSibling.nodeType === Node.TEXT_NODE && r(this).before("<br>"), r(this).attr("data-empty") || !this.nextSibling || e.node.isBlock(this.nextSibling) && !r(this.nextSibling).hasClass("fr-temp-div") ? r(this).replaceWith(r(this).html()) : r(this).replaceWith("".concat(r(this).html(), "<br>"));
          }), e.$el.find(".fr-temp-div").removeClass("fr-temp-div").filter(function() {
            return r(this).attr("class") === "";
          }).removeAttr("class");
        }, escapeEntities: function(_) {
          return _.replace(/</gi, "&lt;").replace(/>/gi, "&gt;").replace(/"/gi, "&quot;").replace(/'/gi, "&#39;");
        }, checkIfEmpty: x, extractNode: v, extractNodeAttrs: A, extractDoctype: l, cleanBRs: function() {
          for (var _ = e.el.getElementsByTagName("br"), Q = 0; Q < _.length; Q++)
            B(_[Q]);
        }, _init: function() {
          e.$wp && (e.events.on("mouseup", ie), e.events.on("keydown", ie), e.events.on("contentChanged", x));
        }, _setHtml: i };
      }, t.ENTER_P = 0, t.ENTER_DIV = 1, t.ENTER_BR = 2, t.KEYCODE = { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, ARROW_LEFT: 37, ARROW_UP: 38, ARROW_RIGHT: 39, ARROW_DOWN: 40, DELETE: 46, ZERO: 48, ONE: 49, TWO: 50, THREE: 51, FOUR: 52, FIVE: 53, SIX: 54, SEVEN: 55, EIGHT: 56, NINE: 57, FF_SEMICOLON: 59, FF_EQUALS: 61, QUESTION_MARK: 63, A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90, META: 91, NUM_ZERO: 96, NUM_ONE: 97, NUM_TWO: 98, NUM_THREE: 99, NUM_FOUR: 100, NUM_FIVE: 101, NUM_SIX: 102, NUM_SEVEN: 103, NUM_EIGHT: 104, NUM_NINE: 105, NUM_MULTIPLY: 106, NUM_PLUS: 107, NUM_MINUS: 109, NUM_PERIOD: 110, NUM_DIVISION: 111, F1: 112, F2: 113, F3: 114, F4: 115, F5: 116, F6: 117, F7: 118, F8: 119, F9: 120, F10: 121, F11: 122, F12: 123, FF_HYPHEN: 173, SEMICOLON: 186, DASH: 189, EQUALS: 187, COMMA: 188, HYPHEN: 189, PERIOD: 190, SLASH: 191, APOSTROPHE: 192, TILDE: 192, SINGLE_QUOTE: 222, OPEN_SQUARE_BRACKET: 219, BACKSLASH: 220, CLOSE_SQUARE_BRACKET: 221, IME: 229 }, Object.assign(t.DEFAULTS, { enter: t.ENTER_P, multiLine: !0, tabSpaces: 0 }), t.MODULES.keys = function(e) {
        var r, s, d, u = e.$, b = !1;
        function E(N) {
          if (e.selection.isCollapsed())
            if (["INPUT", "BUTTON", "TEXTAREA"].indexOf(N.target && N.target.tagName) < 0 && e.cursor.backspace(), e.helpers.isIOS()) {
              var ie = e.selection.ranges(0);
              ie.deleteContents(), ie.insertNode(document.createTextNode("\u200B")), e.selection.get().modify("move", "forward", "character");
            } else
              ["INPUT", "BUTTON", "TEXTAREA"].indexOf(N.target && N.target.tagName) < 0 && N.preventDefault(), N.stopPropagation();
          else
            N.preventDefault(), N.stopPropagation(), e.selection.remove();
          e.placeholder.refresh();
        }
        function g(N) {
          ["INPUT", "BUTTON", "TEXTAREA"].indexOf(N.target && N.target.tagName) < 0 && N.preventDefault(), N.stopPropagation(), e.selection.text() === "" && e.selection.element().tagName != "IMG" ? e.cursor.del() : e.selection.remove(), e.placeholder.refresh();
        }
        function m() {
          if (e.browser.mozilla && e.selection.isCollapsed() && !b) {
            var N = e.selection.ranges(0), ie = N.startContainer, D = N.startOffset;
            ie && ie.nodeType === Node.TEXT_NODE && D <= ie.textContent.length && 0 < D && ie.textContent.charCodeAt(D - 1) === 32 && (e.selection.save(), e.spaces.normalize(), e.selection.restore());
          }
        }
        function C() {
          e.selection.isFull() && setTimeout(function() {
            var N = e.html.defaultTag();
            N ? e.$el.html("<".concat(N, ">").concat(t.MARKERS, "<br/></").concat(N, ">")) : e.$el.html("".concat(t.MARKERS, "<br/>")), e.selection.restore(), e.placeholder.refresh(), e.button.bulkRefresh(), e.undo.saveStep();
          }, 0);
        }
        function O() {
          b = !1;
        }
        function U() {
          b = !1;
        }
        function y() {
          var N = e.html.defaultTag();
          N ? e.$el.html("<".concat(N, ">").concat(t.MARKERS, "<br/></").concat(N, ">")) : e.$el.html("".concat(t.MARKERS, "<br/>")), e.selection.restore();
        }
        function B(N, ie) {
          if ((-1 < N.innerHTML.indexOf("<span") || -1 < N.parentElement.innerHTML.indexOf("<span") || -1 < N.parentElement.parentElement.innerHTML.indexOf("<span")) && (N.classList.contains("fr-img-space-wrap") || N.parentElement.classList.contains("fr-img-space-wrap") || N.parentElement.parentElement.classList.contains("fr-img-space-wrap"))) {
            if (u(N.parentElement).is("p")) {
              var D = N.parentElement.innerHTML;
              return (D = D.replace(/<br>/g, "")).length < 1 ? N.parentElement.insertAdjacentHTML("afterbegin", "&nbsp;") : D != "&nbsp;" && D != " " && ie.key == "Backspace" ? E(ie) : D != "&nbsp;" && D != " " && ie.key == "Delete" && g(ie), !0;
            }
            if (u(N).is("p")) {
              var _ = N.innerHTML.replace(/<br>/g, "");
              return _.length < 1 ? N.insertAdjacentHTML("afterbegin", "&nbsp;") : _ != "&nbsp;" && _ != " " && ie.key == "Backspace" ? E(ie) : _ != "&nbsp;" && _ != " " && ie.key == "Delete" && g(ie), !0;
            }
          }
          return !1;
        }
        function I(N) {
          var ie = e.selection.element();
          if (ie && 0 <= ["INPUT", "TEXTAREA"].indexOf(ie.tagName) || N && l(N.which))
            return !0;
          e.events.disableBlur();
          var D = N.which;
          if (D === 16)
            return !0;
          if ((r = D) === t.KEYCODE.IME)
            return b = !0;
          b = !1;
          var _ = i(D) && !A(N) && !N.altKey, Q = D === t.KEYCODE.BACKSPACE || D === t.KEYCODE.DELETE;
          if ((e.selection.isFull() && !e.opts.keepFormatOnDelete && !e.placeholder.isVisible() || Q && e.placeholder.isVisible() && e.opts.keepFormatOnDelete) && (_ || Q) && (y(), !i(D)))
            return N.preventDefault(), !0;
          if (D === t.KEYCODE.ENTER)
            N.shiftKey || ie.classList.contains("fr-inner") || ie.parentElement.classList.contains("fr-inner") ? function(q) {
              q.preventDefault(), q.stopPropagation(), e.opts.multiLine && (e.selection.isCollapsed() || e.selection.remove(), e.cursor.enter(!0));
            }(N) : function(q) {
              e.opts.multiLine ? (e.helpers.isIOS() || (q.preventDefault(), q.stopPropagation()), e.selection.isCollapsed() || e.selection.remove(), e.cursor.enter()) : (q.preventDefault(), q.stopPropagation());
            }(N);
          else if (D === t.KEYCODE.BACKSPACE && (N.metaKey || N.ctrlKey))
            (function() {
              setTimeout(function() {
                e.events.disableBlur(), e.events.focus();
              }, 0);
            })();
          else if (D !== t.KEYCODE.BACKSPACE || A(N) || N.altKey)
            if (D !== t.KEYCODE.DELETE || A(N) || N.altKey || N.shiftKey)
              D === t.KEYCODE.SPACE ? function(q) {
                var ae = e.selection.element();
                if (!e.helpers.isMobile() && ae && ae.tagName === "A") {
                  q.preventDefault(), q.stopPropagation(), e.selection.isCollapsed() || e.selection.remove();
                  var se = e.markers.insert();
                  if (se) {
                    var H = se.previousSibling;
                    !se.nextSibling && se.parentNode && se.parentNode.tagName === "A" ? (se.parentNode.insertAdjacentHTML("afterend", "&nbsp;".concat(t.MARKERS)), se.parentNode.removeChild(se)) : (H && H.nodeType === Node.TEXT_NODE && H.textContent.length === 1 && H.textContent.charCodeAt(0) === 160 ? H.textContent += " " : se.insertAdjacentHTML("beforebegin", "&nbsp;"), se.outerHTML = t.MARKERS), e.selection.restore();
                  }
                }
              }(N) : D === t.KEYCODE.TAB ? function(q) {
                if (0 < e.opts.tabSpaces)
                  if (e.selection.isCollapsed()) {
                    e.undo.saveStep(), q.preventDefault(), q.stopPropagation();
                    for (var ae = "", se = 0; se < e.opts.tabSpaces; se++)
                      ae += "&nbsp;";
                    e.html.insert(ae), e.placeholder.refresh(), e.undo.saveStep();
                  } else
                    q.preventDefault(), q.stopPropagation(), q.shiftKey ? e.commands.outdent() : e.commands.indent();
              }(N) : A(N) || !i(N.which) || e.selection.isCollapsed() || N.ctrlKey || N.altKey || e.selection.remove();
            else {
              if (B(ie, N))
                return N.preventDefault(), void N.stopPropagation();
              e.placeholder.isVisible() ? (e.opts.keepFormatOnDelete || y(), N.preventDefault(), N.stopPropagation()) : g(N);
            }
          else {
            if (B(ie, N))
              return N.preventDefault(), void N.stopPropagation();
            e.placeholder.isVisible() ? (e.opts.keepFormatOnDelete || y(), N.preventDefault(), N.stopPropagation()) : E(N);
          }
          e.events.enableBlur();
        }
        function x() {
          if (!e.$wp)
            return !0;
          var N;
          e.opts.height || e.opts.heightMax ? (N = e.position.getBoundingRect().top, (e.helpers.isIOS() || e.helpers.isAndroid()) && (N -= e.helpers.scrollTop()), e.opts.iframe && (N += e.$iframe.offset().top), N > e.$wp.offset().top - e.helpers.scrollTop() + e.$wp.height() - 20 && e.$wp.scrollTop(N + e.$wp.scrollTop() - (e.$wp.height() + e.$wp.offset().top) + e.helpers.scrollTop() + 20)) : (N = e.position.getBoundingRect().top, e.opts.toolbarBottom && (N += e.opts.toolbarStickyOffset), (e.helpers.isIOS() || e.helpers.isAndroid()) && (N -= e.helpers.scrollTop()), e.opts.iframe && (N += e.$iframe.offset().top, N -= e.helpers.scrollTop()), (N += e.opts.toolbarStickyOffset) > e.o_win.innerHeight - 20 && u(e.o_win).scrollTop(N + e.helpers.scrollTop() - e.o_win.innerHeight + 20), N = e.position.getBoundingRect().top, e.opts.toolbarBottom || (N -= e.opts.toolbarStickyOffset), (e.helpers.isIOS() || e.helpers.isAndroid()) && (N -= e.helpers.scrollTop()), e.opts.iframe && (N += e.$iframe.offset().top, N -= e.helpers.scrollTop()), N < 100 && u(e.o_win).scrollTop(N + e.helpers.scrollTop() - 100));
        }
        function v(N) {
          var ie = e.selection.element();
          if (ie && 0 <= ["INPUT", "TEXTAREA"].indexOf(ie.tagName) || (N && N.which === 0 && r && (N.which = r), e.helpers.isAndroid() && e.browser.mozilla))
            return !0;
          if (b)
            return !1;
          if (N && e.helpers.isIOS() && N.which === t.KEYCODE.ENTER && e.doc.execCommand("undo"), !e.selection.isCollapsed() || N && (N.which === t.KEYCODE.META || N.which === t.KEYCODE.CTRL) || N && l(N.which))
            return !0;
          if (N && !e.helpers.isIOS() && (N.which === t.KEYCODE.ENTER || N.which === t.KEYCODE.BACKSPACE || 37 <= N.which && N.which <= 40 && !e.browser.msie))
            try {
              x();
            } catch {
            }
          var D = e.selection.element();
          (function(Q) {
            if (!Q)
              return !1;
            var re = Q.innerHTML;
            return !!((re = re.replace(/<span[^>]*? class\s*=\s*["']?fr-marker["']?[^>]+>\u200b<\/span>/gi, "")) && /\u200B/.test(re) && 0 < re.replace(/\u200B/gi, "").length);
          })(D) && !e.node.hasClass(D, "fr-marker") && D.tagName !== "IFRAME" && function(Q) {
            return !e.helpers.isIOS() || ((Q.textContent || "").match(/[\u3041-\u3096\u30A0-\u30FF\u4E00-\u9FFF\u3130-\u318F\uAC00-\uD7AF]/gi) || []).length === 0;
          }(D) && (e.selection.save(), function(Q) {
            for (var re = e.doc.createTreeWalker(Q, NodeFilter.SHOW_TEXT, e.node.filter(function(ae) {
              return /\u200B/gi.test(ae.textContent);
            }), !1); re.nextNode(); ) {
              var q = re.currentNode;
              q.textContent = q.textContent.replace(/\u200B/gi, "");
            }
          }(D), e.selection.restore());
        }
        function A(N) {
          if (navigator.userAgent.indexOf("Mac OS X") !== -1) {
            if (N.metaKey && !N.altKey)
              return !0;
          } else if (N.ctrlKey && !N.altKey)
            return !0;
          return !1;
        }
        function l(N) {
          if (N >= t.KEYCODE.ARROW_LEFT && N <= t.KEYCODE.ARROW_DOWN)
            return !0;
        }
        function i(N) {
          if (N >= t.KEYCODE.ZERO && N <= t.KEYCODE.NINE || N >= t.KEYCODE.NUM_ZERO && N <= t.KEYCODE.NUM_MULTIPLY || N >= t.KEYCODE.A && N <= t.KEYCODE.Z || e.browser.webkit && N === 0)
            return !0;
          switch (N) {
            case t.KEYCODE.SPACE:
            case t.KEYCODE.QUESTION_MARK:
            case t.KEYCODE.NUM_PLUS:
            case t.KEYCODE.NUM_MINUS:
            case t.KEYCODE.NUM_PERIOD:
            case t.KEYCODE.NUM_DIVISION:
            case t.KEYCODE.SEMICOLON:
            case t.KEYCODE.FF_SEMICOLON:
            case t.KEYCODE.DASH:
            case t.KEYCODE.EQUALS:
            case t.KEYCODE.FF_EQUALS:
            case t.KEYCODE.COMMA:
            case t.KEYCODE.PERIOD:
            case t.KEYCODE.SLASH:
            case t.KEYCODE.APOSTROPHE:
            case t.KEYCODE.SINGLE_QUOTE:
            case t.KEYCODE.OPEN_SQUARE_BRACKET:
            case t.KEYCODE.BACKSLASH:
            case t.KEYCODE.CLOSE_SQUARE_BRACKET:
              return !0;
            default:
              return !1;
          }
        }
        function a(N) {
          var ie = N.which;
          if (A(N) || 37 <= ie && ie <= 40 || !i(ie) && ie !== t.KEYCODE.DELETE && ie !== t.KEYCODE.BACKSPACE && ie !== t.KEYCODE.ENTER && ie !== t.KEYCODE.IME)
            return !0;
          s || (d = e.snapshot.get(), e.undo.canDo() || e.undo.saveStep()), clearTimeout(s), s = setTimeout(function() {
            s = null, e.undo.saveStep();
          }, Math.max(250, e.opts.typingTimer));
        }
        function p(N) {
          var ie = N.which;
          if (A(N) || 37 <= ie && ie <= 40)
            return !0;
          d && s ? (e.undo.saveStep(d), d = null) : ie !== void 0 && ie !== 0 || d || s || e.undo.saveStep();
        }
        function c(N) {
          if (N && N.tagName === "BR")
            return !1;
          try {
            return (N.textContent || "").length === 0 && N.querySelector && !N.querySelector(":scope > br") || N.childNodes && N.childNodes.length === 1 && N.childNodes[0].getAttribute && (N.childNodes[0].getAttribute("contenteditable") === "false" || e.node.hasClass(N.childNodes[0], "fr-img-caption"));
          } catch {
            return !1;
          }
        }
        function h(N) {
          var ie = e.el.childNodes, D = e.html.defaultTag(), _ = e.node.blockParent(e.selection.blocks()[0]);
          return _ && _.tagName == "TR" && _.getAttribute("contenteditable") == null && (_ = _.closest("table")), !e.node.isEditable(N.target) || _ && _.getAttribute("contenteditable") === "false" ? e.toolbar.disable() : e.toolbar.enable(), !(!N.target || N.target === e.el) || ie.length === 0 || void (ie[0].offsetHeight + ie[0].offsetTop <= N.offsetY ? c(ie[ie.length - 1]) && (D ? e.$el.append("<".concat(D, ">").concat(t.MARKERS, "<br></").concat(D, ">")) : e.$el.append("".concat(t.MARKERS, "<br>")), e.selection.restore(), x()) : N.offsetY <= 10 && c(ie[0]) && (D ? e.$el.prepend("<".concat(D, ">").concat(t.MARKERS, "<br></").concat(D, ">")) : e.$el.prepend("".concat(t.MARKERS, "<br>")), e.selection.restore(), x()));
        }
        function M() {
          s && clearTimeout(s);
        }
        return { _init: function() {
          e.events.on("keydown", a), e.events.on("input", m), e.events.on("mousedown", U), e.events.on("keyup input", p), e.events.on("keypress", O), e.events.on("keydown", I), e.events.on("keyup", v), e.events.on("destroy", M), e.events.on("html.inserted", v), e.events.on("cut", C), e.opts.multiLine && e.events.on("click", h);
        }, ctrlKey: A, isCharacter: i, isArrow: l, forceUndo: function() {
          s && (clearTimeout(s), e.undo.saveStep(), d = null);
        }, isIME: function() {
          return b;
        }, isBrowserAction: function(ie) {
          var D = ie.which;
          return A(ie) || D === t.KEYCODE.F5;
        }, positionCaret: x };
      }, Object.assign(t.DEFAULTS, { pastePlain: !1, pasteDeniedTags: ["colgroup", "col", "meta"], pasteDeniedAttrs: ["class", "id"], pasteAllowedStyleProps: [".*"], pasteAllowLocalImages: !1 }), t.MODULES.paste = function(e) {
        var r, s, d, u, b = e.$;
        function E(l, i) {
          try {
            e.win.localStorage.setItem("fr-copied-html", l), e.win.localStorage.setItem("fr-copied-text", i);
          } catch {
          }
        }
        function g(l) {
          var i = e.html.getSelected();
          E(i, b(e.doc.createElement("div")).html(i).text()), l.type === "cut" && (e.undo.saveStep(), setTimeout(function() {
            e.selection.save(), e.html.wrap(), e.selection.restore(), e.events.focus(), e.undo.saveStep();
          }, 0));
        }
        var m = !1;
        function C(l) {
          if (l.target.nodeName === "INPUT" && l.target.type === "text")
            return !0;
          if (e.edit.isDisabled() || O(l.target) || m)
            return !1;
          if (l.originalEvent && (l = l.originalEvent), e.events.trigger("paste.before", [l]) === !1)
            return l.preventDefault(), !1;
          if (l && l.clipboardData && l.clipboardData.getData) {
            var i = "", a = l.clipboardData.types;
            if (e.helpers.isArray(a))
              for (var p = 0; p < a.length; p++)
                i += "".concat(a[p], ";");
            else
              i = a;
            if (r = "", /text\/rtf/.test(i) && (s = l.clipboardData.getData("text/rtf")), /text\/html/.test(i) && !e.browser.safari ? r = l.clipboardData.getData("text/html") : /text\/rtf/.test(i) && e.browser.safari ? r = s : /public.rtf/.test(i) && e.browser.safari && (r = l.clipboardData.getData("text/rtf")), r !== "")
              return y(), l.preventDefault && (l.stopPropagation(), l.preventDefault()), !1;
            r = null;
          }
          return function() {
            e.selection.save(), e.events.disableBlur(), r = null, d ? (d.html(""), e.browser.edge && e.opts.iframe && e.$el.append(d)) : (d = b('<div contenteditable="true" style="position: fixed; top: 0; left: -9999px; height: 100%; width: 0; word-break: break-all; overflow:hidden; z-index: 2147483647; line-height: 140%; -moz-user-select: text; -webkit-user-select: text; -ms-user-select: text; user-select: text;" tabIndex="-1"></div>'), e.browser.webkit || e.browser.mozilla ? (d.css("top", e.$sc.scrollTop()), e.$el.after(d)) : e.browser.edge && e.opts.iframe ? e.$el.append(d) : e.$box.after(d), e.events.on("destroy", function() {
              d.remove();
            }));
            var h;
            e.helpers.isIOS() && e.$sc && (h = e.$sc.scrollTop()), e.opts.iframe && e.$el.attr("contenteditable", "false"), d.focus(), e.helpers.isIOS() && e.$sc && e.$sc.scrollTop(h), e.win.setTimeout(y, 1);
          }(), !1;
        }
        function O(l) {
          return l && l.contentEditable === "false";
        }
        function U(l) {
          if (l.originalEvent && (l = l.originalEvent), O(l.target))
            return !1;
          if (l && l.dataTransfer && l.dataTransfer.getData) {
            var i = "", a = l.dataTransfer.types;
            if (e.helpers.isArray(a))
              for (var p = 0; p < a.length; p++)
                i += "".concat(a[p], ";");
            else
              i = a;
            if (r = "", /text\/rtf/.test(i) && (s = l.dataTransfer.getData("text/rtf")), /text\/html/.test(i) ? r = l.dataTransfer.getData("text/html") : /text\/rtf/.test(i) && e.browser.safari ? r = s : /text\/plain/.test(i) && !this.browser.mozilla && (r = e.html.escapeEntities(l.dataTransfer.getData("text/plain")).replace(/\n/g, "<br>")), r !== "") {
              e.keys.forceUndo(), u = e.snapshot.get(), e.selection.save(), e.$el.find(".fr-marker").removeClass("fr-marker").addClass("fr-marker-helper");
              var c = e.markers.insertAtPoint(l);
              if (e.$el.find(".fr-marker").removeClass("fr-marker").addClass("fr-marker-placeholder"), e.$el.find(".fr-marker-helper").addClass("fr-marker").removeClass("fr-marker-helper"), e.selection.restore(), e.selection.remove(), e.$el.find(".fr-marker-placeholder").addClass("fr-marker").removeClass("fr-marker-placeholder"), c !== !1) {
                var h = e.el.querySelector(".fr-marker");
                return b(h).replaceWith(t.MARKERS), e.selection.restore(), y(), l.preventDefault && (l.stopPropagation(), l.preventDefault()), !1;
              }
            } else
              r = null;
          }
        }
        function y() {
          e.opts.iframe && e.$el.attr("contenteditable", "true"), e.browser.edge && e.opts.iframe && e.$box.after(d), u || (e.keys.forceUndo(), u = e.snapshot.get()), r || (r = d.get(0).innerHTML, e.selection.restore(), e.events.enableBlur());
          var l = r.match(/(class="?Mso|class='?Mso|class="?Xl|class='?Xl|class=Xl|style="[^"]*\bmso-|style='[^']*\bmso-|w:WordDocument|LibreOffice)/gi), i = e.events.chainTrigger("paste.beforeCleanup", r);
          i && typeof i == "string" && (r = i), (!l || l && e.events.trigger("paste.wordPaste", [r]) !== !1) && I(r, l);
        }
        function B(l) {
          for (var i = "", a = 0; a++ < l; )
            i += "&nbsp;";
          return i;
        }
        function I(l, i, a) {
          var p, c = null, h = null;
          if (0 <= l.toLowerCase().indexOf("<body")) {
            var M = "";
            0 <= l.indexOf("<style") && (M = l.replace(/[.\s\S\w\W<>]*(<style[^>]*>[\s]*[.\s\S\w\W<>]*[\s]*<\/style>)[.\s\S\w\W<>]*/gi, "$1")), l = (l = M + l.replace(/[.\s\S\w\W<>]*<body[^>]*>[\s]*([.\s\S\w\W<>]*)[\s]*<\/body>[.\s\S\w\W<>]*/gi, "$1")).replace(/ \n/g, " ").replace(/\n /g, " ").replace(/([^>])\n([^<])/g, "$1 $2");
          }
          var N = !1;
          0 <= l.indexOf('id="docs-internal-guid') && (l = l.replace(/^[\w\W\s\S]* id="docs-internal-guid[^>]*>([\w\W\s\S]*)<\/b>[\w\W\s\S]*$/g, "$1"), N = !0), 0 <= l.indexOf('content="Sheets"') && (l = l.replace(/width:0px;/g, ""));
          var ie = !1;
          if (!i)
            if ((ie = function(K) {
              var V = null;
              try {
                V = e.win.localStorage.getItem("fr-copied-text");
              } catch {
              }
              return !(!V || b("<div>").html(K).text().replace(/\u00A0/gi, " ").replace(/\r|\n/gi, "") !== V.replace(/\u00A0/gi, " ").replace(/\r|\n/gi, ""));
            }(l)) && (l = e.win.localStorage.getItem("fr-copied-html")), ie)
              l = e.clean.html(l, e.opts.pasteDeniedTags, e.opts.pasteDeniedAttrs);
            else {
              var D = e.opts.htmlAllowedStyleProps;
              e.opts.htmlAllowedStyleProps = e.opts.pasteAllowedStyleProps, e.opts.htmlAllowComments = !1, l = (l = (l = l.replace(/<span class="Apple-tab-span">\s*<\/span>/g, B(e.opts.tabSpaces || 4))).replace(/<span class="Apple-tab-span" style="white-space:pre">(\t*)<\/span>/g, function(R, K) {
                return B(K.length * (e.opts.tabSpaces || 4));
              })).replace(/\t/g, B(e.opts.tabSpaces || 4)), l = e.clean.html(l, e.opts.pasteDeniedTags, e.opts.pasteDeniedAttrs), e.opts.htmlAllowedStyleProps = D, e.opts.htmlAllowComments = !0, l = (l = (l = v(l)).replace(/\r/g, "")).replace(/^ */g, "").replace(/ *$/g, "");
            }
          !i || e.wordPaste && a || ((l = l.replace(/^\n*/g, "").replace(/^ /g, "")).indexOf("<colgroup>") === 0 && (l = "<table>".concat(l, "</table>")), l = v(l = function(K) {
            var V;
            K = (K = (K = (K = (K = (K = (K = (K = (K = (K = (K = (K = (K = (K = (K = K.replace(/<p(.*?)class="?'?MsoListParagraph"?'? ([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<ul><li>$3</li></ul>")).replace(/<p(.*?)class="?'?NumberedText"?'? ([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<ol><li>$3</li></ol>")).replace(/<p(.*?)class="?'?MsoListParagraphCxSpFirst"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<ul><li$3>$5</li>")).replace(/<p(.*?)class="?'?NumberedTextCxSpFirst"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<ol><li$3>$5</li>")).replace(/<p(.*?)class="?'?MsoListParagraphCxSpMiddle"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<li$3>$5</li>")).replace(/<p(.*?)class="?'?NumberedTextCxSpMiddle"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<li$3>$5</li>")).replace(/<p(.*?)class="?'?MsoListBullet"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<li$3>$5</li>")).replace(/<p(.*?)class="?'?MsoListParagraphCxSpLast"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<li$3>$5</li></ul>")).replace(/<p(.*?)class="?'?NumberedTextCxSpLast"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<li$3>$5</li></ol>")).replace(/<span([^<]*?)style="?'?mso-list:Ignore"?'?([\s\S]*?)>([\s\S]*?)<span/gi, "<span><span")).replace(/<!--\[if !supportLists\]-->([\s\S]*?)<!--\[endif\]-->/gi, "")).replace(/<!\[if !supportLists\]>([\s\S]*?)<!\[endif\]>/gi, "")).replace(/(\n|\r| class=(")?Mso[a-zA-Z0-9]+(")?)/gi, " ")).replace(/<!--[\s\S]*?-->/gi, "")).replace(/<(\/)*(meta|link|span|\\?xml:|st1:|o:|font)(.*?)>/gi, "");
            var j, X = ["style", "script", "applet", "embed", "noframes", "noscript"];
            for (V = 0; V < X.length; V++) {
              var fe = new RegExp("<".concat(X[V], ".*?").concat(X[V], "(.*?)>"), "gi");
              K = K.replace(fe, "");
            }
            for (K = (K = (K = K.replace(/&nbsp;/gi, " ")).replace(/<td([^>]*)><\/td>/g, "<td$1><br></td>")).replace(/<th([^>]*)><\/th>/g, "<th$1><br></th>"); (K = (j = K).replace(/<[^/>][^>]*><\/[^>]+>/gi, "")) !== j; )
              ;
            K = (K = K.replace(/<lilevel([^1])([^>]*)>/gi, '<li data-indent="true"$2>')).replace(/<lilevel1([^>]*)>/gi, "<li$1>"), K = (K = (K = e.clean.html(K, e.opts.pasteDeniedTags, e.opts.pasteDeniedAttrs)).replace(/<a>(.[^<]+)<\/a>/gi, "$1")).replace(/<br> */g, "<br>");
            var ne = e.o_doc.createElement("div");
            ne.innerHTML = K;
            var ve = ne.querySelectorAll("li[data-indent]");
            for (V = 0; V < ve.length; V++) {
              var Ee = ve[V], be = Ee.previousElementSibling;
              if (be && be.tagName === "LI") {
                var Ae = be.querySelector(":scope > ul, :scope > ol");
                Ae || (Ae = document.createElement("ul"), be.appendChild(Ae)), Ae.appendChild(Ee);
              } else
                Ee.removeAttribute("data-indent");
            }
            return e.html.cleanBlankSpaces(ne), K = ne.innerHTML;
          }(l))), e.opts.pastePlain && !ie && (l = function(K) {
            var V, j = null, X = e.doc.createElement("div");
            X.innerHTML = K;
            var fe = X.querySelectorAll("p, div, h1, h2, h3, h4, h5, h6, pre, blockquote");
            for (V = 0; V < fe.length; V++)
              (j = fe[V]).outerHTML = "<".concat(e.html.defaultTag() || "DIV", ">").concat(j.innerHTML, "</").concat(e.html.defaultTag() || "DIV", ">");
            for (V = (fe = X.querySelectorAll("*:not(".concat("p, div, h1, h2, h3, h4, h5, h6, pre, blockquote, ul, ol, li, table, tbody, thead, tr, td, br, img".split(",").join("):not("), ")"))).length - 1; 0 <= V; V--)
              (j = fe[V]).outerHTML = j.innerHTML;
            return function ne(ve) {
              for (var Ee = e.node.contents(ve), be = 0; be < Ee.length; be++)
                Ee[be].nodeType !== Node.TEXT_NODE && Ee[be].nodeType !== Node.ELEMENT_NODE ? Ee[be].parentNode.removeChild(Ee[be]) : ne(Ee[be]);
            }(X), X.innerHTML;
          }(l));
          var _ = e.events.chainTrigger("paste.afterCleanup", l);
          if (typeof _ == "string" && (l = _), l !== "") {
            var Q = e.o_doc.createElement("div");
            0 <= (Q.innerHTML = l).indexOf("<body>") ? (e.html.cleanBlankSpaces(Q), e.spaces.normalize(Q, !0)) : e.spaces.normalize(Q);
            var re = Q.getElementsByTagName("span");
            for (p = re.length - 1; 0 <= p; p--) {
              var q = re[p];
              q.attributes.length === 0 && (q.outerHTML = q.innerHTML);
            }
            if (e.opts.linkAlwaysBlank === !0) {
              var ae = Q.getElementsByTagName("a");
              for (p = ae.length - 1; 0 <= p; p--) {
                var se = ae[p];
                se.getAttribute("target") || se.setAttribute("target", "_blank");
              }
            }
            var H = e.selection.element(), W = !1;
            if (H && b(H).parentsUntil(e.el, "ul, ol").length && (W = !0), W) {
              var T = Q.children;
              T.length === 1 && 0 <= ["OL", "UL"].indexOf(T[0].tagName) && (T[0].outerHTML = T[0].innerHTML);
            }
            if (!N) {
              var S = Q.getElementsByTagName("br");
              for (p = S.length - 1; 0 <= p; p--) {
                var L = S[p];
                e.node.isBlock(L.previousSibling) && L.parentNode.removeChild(L);
              }
            }
            if (e.opts.enter === t.ENTER_BR)
              for (p = (c = Q.querySelectorAll("p, div")).length - 1; 0 <= p; p--)
                (h = c[p]).attributes.length === 0 && (h.outerHTML = h.innerHTML + (h.nextSibling && !e.node.isEmpty(h) ? "<br>" : ""));
            else if (e.opts.enter === t.ENTER_DIV)
              for (p = (c = Q.getElementsByTagName("p")).length - 1; 0 <= p; p--)
                (h = c[p]).attributes.length === 0 && (h.outerHTML = "<div>".concat(h.innerHTML, "</div>"));
            else
              e.opts.enter === t.ENTER_P && Q.childNodes.length === 1 && Q.childNodes[0].tagName === "P" && Q.childNodes[0].attributes.length === 0 && (Q.childNodes[0].outerHTML = Q.childNodes[0].innerHTML);
            l = Q.innerHTML, ie && (l = function(K) {
              var V, j = e.o_doc.createElement("div");
              j.innerHTML = K;
              for (var X = j.querySelectorAll("*:empty:not(td):not(th):not(tr):not(iframe):not(svg):not(".concat(t.VOID_ELEMENTS.join("):not("), "):not(").concat(e.opts.htmlAllowedEmptyTags.join("):not("), ")")); X.length; ) {
                for (V = 0; V < X.length; V++)
                  X[V].parentNode.removeChild(X[V]);
                X = j.querySelectorAll("*:empty:not(td):not(th):not(tr):not(iframe):not(svg):not(".concat(t.VOID_ELEMENTS.join("):not("), "):not(").concat(e.opts.htmlAllowedEmptyTags.join("):not("), ")"));
              }
              return j.innerHTML;
            }(l)), e.html.insert(l, !0);
          }
          (function() {
            e.events.trigger("paste.after");
          })(), e.undo.saveStep(u), u = null, e.undo.saveStep();
        }
        function x(l) {
          for (var i = l.length - 1; 0 <= i; i--)
            l[i].attributes && l[i].attributes.length && l.splice(i, 1);
          return l;
        }
        function v(l) {
          var i, a = e.o_doc.createElement("div");
          a.innerHTML = l;
          for (var p = x(Array.prototype.slice.call(a.querySelectorAll(":scope > div:not([style]), td > div:not([style]), th > div:not([style]), li > div:not([style])"))); p.length; ) {
            var c = p[p.length - 1];
            if (e.html.defaultTag() && e.html.defaultTag() !== "div")
              c.querySelector(e.html.blockTagsQuery()) ? c.outerHTML = c.innerHTML : c.outerHTML = "<".concat(e.html.defaultTag(), ">").concat(c.innerHTML, "</").concat(e.html.defaultTag(), ">");
            else {
              var h = c.querySelectorAll("*");
              !h.length || h[h.length - 1].tagName !== "BR" && c.innerText.length === 0 || !h.length || h[h.length - 1].tagName !== "BR" || h[h.length - 1].nextSibling ? c.outerHTML = c.innerHTML + (c.nextSibling ? "<br>" : "") : c.outerHTML = c.innerHTML;
            }
            p = x(Array.prototype.slice.call(a.querySelectorAll(":scope > div:not([style]), td > div:not([style]), th > div:not([style]), li > div:not([style])")));
          }
          for (p = x(Array.prototype.slice.call(a.querySelectorAll("div:not([style])"))); p.length; ) {
            for (i = 0; i < p.length; i++) {
              var M = p[i], N = M.innerHTML.replace(/\u0009/gi, "").trim();
              M.outerHTML = N;
            }
            p = x(Array.prototype.slice.call(a.querySelectorAll("div:not([style])")));
          }
          return a.innerHTML;
        }
        function A() {
          e.el.removeEventListener("copy", g), e.el.removeEventListener("cut", g), e.el.removeEventListener("paste", C);
        }
        return { _init: function() {
          e.el.addEventListener("copy", g), e.el.addEventListener("cut", g), e.el.addEventListener("paste", C, { capture: !0 }), e.events.on("drop", U), e.browser.msie && e.browser.version < 11 && (e.events.on("mouseup", function(i) {
            i.button === 2 && (setTimeout(function() {
              m = !1;
            }, 50), m = !0);
          }, !0), e.events.on("beforepaste", C)), e.events.on("destroy", A);
        }, cleanEmptyTagsAndDivs: v, getRtfClipboard: function() {
          return s;
        }, saveCopiedText: E, clean: I };
      }, Object.assign(t.DEFAULTS, { shortcutsEnabled: [], shortcutsHint: !0 }), t.SHORTCUTS_MAP = {}, t.RegisterShortcut = function(e, r, s, d, u, b) {
        t.SHORTCUTS_MAP[(u ? "^" : "") + (b ? "@" : "") + e] = { cmd: r, val: s, letter: d, shift: u, option: b }, t.DEFAULTS.shortcutsEnabled.push(r);
      }, t.RegisterShortcut(t.KEYCODE.E, "show", null, "E", !1, !1), t.RegisterShortcut(t.KEYCODE.B, "bold", null, "B", !1, !1), t.RegisterShortcut(t.KEYCODE.I, "italic", null, "I", !1, !1), t.RegisterShortcut(t.KEYCODE.U, "underline", null, "U", !1, !1), t.RegisterShortcut(t.KEYCODE.S, "strikeThrough", null, "S", !1, !1), t.RegisterShortcut(t.KEYCODE.CLOSE_SQUARE_BRACKET, "indent", null, "]", !1, !1), t.RegisterShortcut(t.KEYCODE.OPEN_SQUARE_BRACKET, "outdent", null, "[", !1, !1), t.RegisterShortcut(t.KEYCODE.Z, "undo", null, "Z", !1, !1), t.RegisterShortcut(t.KEYCODE.Z, "redo", null, "Z", !0, !1), t.RegisterShortcut(t.KEYCODE.Y, "redo", null, "Y", !1, !1), t.MODULES.shortcuts = function(e) {
        var r = null, s = !1;
        function d(u) {
          if (!e.core.hasFocus())
            return !0;
          var b = u.which, E = navigator.userAgent.indexOf("Mac OS X") !== -1 ? u.metaKey : u.ctrlKey;
          if (u.type === "keyup" && s && b !== t.KEYCODE.META)
            return s = !1;
          u.type === "keydown" && (s = !1);
          var g = (u.shiftKey ? "^" : "") + (u.altKey ? "@" : "") + b, m = e.node.blockParent(e.selection.blocks()[0]);
          if (m && m.tagName == "TR" && m.getAttribute("contenteditable") == null && (m = m.closest("table")), E && t.SHORTCUTS_MAP[g] && (!m || m.getAttribute("contenteditable") !== "false")) {
            var C = t.SHORTCUTS_MAP[g].cmd;
            if (C && 0 <= e.opts.shortcutsEnabled.indexOf(C)) {
              var O = t.SHORTCUTS_MAP[g].val;
              if (e.events.trigger("shortcut", [u, C, O]) === !1)
                return !(s = !0);
              if (C && (e.commands[C] || t.COMMANDS[C] && t.COMMANDS[C].callback))
                return u.preventDefault(), u.stopPropagation(), u.type === "keydown" && ((e.commands[C] || t.COMMANDS[C].callback)(), s = !0), !1;
            }
          }
        }
        return { _init: function() {
          e.events.on("keydown", d, !0), e.events.on("keyup", d, !0);
        }, get: function(b) {
          if (!e.opts.shortcutsHint)
            return null;
          if (!r)
            for (var E in r = {}, t.SHORTCUTS_MAP)
              Object.prototype.hasOwnProperty.call(t.SHORTCUTS_MAP, E) && 0 <= e.opts.shortcutsEnabled.indexOf(t.SHORTCUTS_MAP[E].cmd) && (r["".concat(t.SHORTCUTS_MAP[E].cmd, ".").concat(t.SHORTCUTS_MAP[E].val || "")] = { shift: t.SHORTCUTS_MAP[E].shift, option: t.SHORTCUTS_MAP[E].option, letter: t.SHORTCUTS_MAP[E].letter });
          var g = r[b];
          return g ? (e.helpers.isMac() ? String.fromCharCode(8984) : "".concat(e.language.translate("Ctrl"), "+")) + (g.shift ? e.helpers.isMac() ? String.fromCharCode(8679) : "".concat(e.language.translate("Shift"), "+") : "") + (g.option ? e.helpers.isMac() ? String.fromCharCode(8997) : "".concat(e.language.translate("Alt"), "+") : "") + g.letter : null;
        } };
      }, t.MODULES.snapshot = function(e) {
        function r(E) {
          for (var g = E.parentNode.childNodes, m = 0, C = null, O = 0; O < g.length; O++) {
            if (C) {
              var U = g[O].nodeType === Node.TEXT_NODE && g[O].textContent === "", y = C.nodeType === Node.TEXT_NODE && g[O].nodeType === Node.TEXT_NODE, B = C.nodeType === Node.TEXT_NODE && C.textContent === "";
              U || y || B || m++;
            }
            if (g[O] === E)
              return m;
            C = g[O];
          }
        }
        function s(E) {
          var g = [];
          if (!E.parentNode)
            return [];
          for (; !e.node.isElement(E); )
            g.push(r(E)), E = E.parentNode;
          return g.reverse();
        }
        function d(E, g) {
          for (; E && E.nodeType === Node.TEXT_NODE; ) {
            var m = E.previousSibling;
            m && m.nodeType === Node.TEXT_NODE && (g += m.textContent.length), E = m;
          }
          return g;
        }
        function u(E) {
          for (var g = e.el, m = 0; m < E.length; m++)
            g = g.childNodes[E[m]];
          return g;
        }
        function b(E, g) {
          try {
            var m = u(g.scLoc), C = g.scOffset, O = u(g.ecLoc), U = g.ecOffset, y = e.doc.createRange();
            y.setStart(m, C), y.setEnd(O, U), E.addRange(y);
          } catch {
          }
        }
        return { get: function() {
          var g, m = {};
          if (e.events.trigger("snapshot.before"), m.html = (e.$wp ? e.$el.html() : e.$oel.get(0).outerHTML).replace(/ style=""/g, ""), m.ranges = [], e.$wp && e.selection.inEditor() && e.core.hasFocus())
            for (var C = e.selection.ranges(), O = 0; O < C.length; O++)
              m.ranges.push({ scLoc: s((g = C[O]).startContainer), scOffset: d(g.startContainer, g.startOffset), ecLoc: s(g.endContainer), ecOffset: d(g.endContainer, g.endOffset) });
          return e.events.trigger("snapshot.after", [m]), m;
        }, restore: function(g) {
          e.$el.html() !== g.html && (e.opts.htmlExecuteScripts ? e.$el.html(g.html) : e.el.innerHTML = g.html);
          var m = e.selection.get();
          e.selection.clear(), e.events.focus(!0);
          for (var C = 0; C < g.ranges.length; C++)
            b(m, g.ranges[C]);
        }, equal: function(g, m) {
          return g.html === m.html && (!e.core.hasFocus() || JSON.stringify(g.ranges) === JSON.stringify(m.ranges));
        } };
      }, t.MODULES.undo = function(e) {
        function r(E) {
          var g = E.which;
          e.keys.ctrlKey(E) && (g === t.KEYCODE.Z && E.shiftKey && E.preventDefault(), g === t.KEYCODE.Z && E.preventDefault());
        }
        var s = null;
        function d() {
          if (e.undo_stack && !e.undoing)
            for (; e.undo_stack.length > e.undo_index; )
              e.undo_stack.pop();
        }
        function u() {
          e.undo_index = 0, e.undo_stack = [];
        }
        function b() {
          e.undo_stack = [];
        }
        return { _init: function() {
          u(), e.events.on("initialized", function() {
            s = (e.$wp ? e.$el.html() : e.$oel.get(0).outerHTML).replace(/ style=""/g, "");
          }), e.events.on("blur", function() {
            e.el.querySelector(".fr-dragging") || e.undo.saveStep();
          }), e.events.on("keydown", r), e.events.on("destroy", b);
        }, run: function() {
          if (1 < e.undo_index) {
            e.undoing = !0;
            var g = e.undo_stack[--e.undo_index - 1];
            clearTimeout(e._content_changed_timer), e.snapshot.restore(g), s = g.html, e.popups.hideAll(), e.toolbar.enable(), e.events.trigger("contentChanged"), e.events.trigger("commands.undo"), e.undoing = !1;
          }
        }, redo: function() {
          if (e.undo_index < e.undo_stack.length) {
            e.undoing = !0;
            var g = e.undo_stack[e.undo_index++];
            clearTimeout(e._content_changed_timer), e.snapshot.restore(g), s = g.html, e.popups.hideAll(), e.toolbar.enable(), e.events.trigger("contentChanged"), e.events.trigger("commands.redo"), e.undoing = !1;
          }
        }, canDo: function() {
          return !(e.undo_stack.length === 0 || e.undo_index <= 1);
        }, canRedo: function() {
          return e.undo_index !== e.undo_stack.length;
        }, dropRedo: d, reset: u, saveStep: function(g) {
          !e.undo_stack || e.undoing || e.el.querySelector(".fr-marker") || (g === void 0 ? (g = e.snapshot.get(), e.undo_stack[e.undo_index - 1] && e.snapshot.equal(e.undo_stack[e.undo_index - 1], g) || (d(), e.undo_stack.push(g), e.undo_index++, g.html !== s && (e.events.trigger("contentChanged"), s = g.html))) : (d(), 0 < e.undo_index ? e.undo_stack[e.undo_index - 1] = g : (e.undo_stack.push(g), e.undo_index++)));
        } };
      }, Object.assign(t.DEFAULTS, { height: null, heightMax: null, heightMin: null, width: null }), t.MODULES.size = function(e) {
        function r() {
          s(), e.opts.height && e.$el.css("minHeight", e.opts.height - e.helpers.getPX(e.$el.css("padding-top")) - e.helpers.getPX(e.$el.css("padding-bottom"))), e.$iframe.height(e.$el.outerHeight(!0));
        }
        function s() {
          e.opts.heightMin ? e.$el.css("minHeight", e.opts.heightMin) : e.$el.css("minHeight", ""), e.opts.heightMax ? (e.$wp.css("maxHeight", e.opts.heightMax), e.$wp.css("overflow", "auto")) : (e.$wp.css("maxHeight", ""), e.$wp.css("overflow", "")), e.opts.height ? (e.$wp.css("height", e.opts.height), e.$wp.css("overflow", "auto"), e.$el.css("minHeight", e.opts.height - e.helpers.getPX(e.$el.css("padding-top")) - e.helpers.getPX(e.$el.css("padding-bottom")))) : (e.$wp.css("height", ""), e.opts.heightMin || e.$el.css("minHeight", ""), e.opts.heightMax || e.$wp.css("overflow", "")), e.opts.width && e.$box.width(e.opts.width);
        }
        return { _init: function() {
          if (!e.$wp)
            return !1;
          s(), e.$iframe && (e.events.on("keyup keydown", function() {
            setTimeout(r, 0);
          }, !0), e.events.on("commands.after html.set init initialized paste.after", r));
        }, syncIframe: r, refresh: s };
      }, Object.assign(t.DEFAULTS, { documentReady: !1, editorClass: null, typingTimer: 500, iframe: !1, requestWithCORS: !0, requestWithCredentials: !1, requestHeaders: {}, useClasses: !0, spellcheck: !0, iframeDefaultStyle: 'html{margin:0px;height:auto;}body{height:auto;padding:20px;background:transparent;color:#000000;position:relative;z-index: 2;-webkit-user-select:auto;margin:0px;overflow:hidden;min-height:20px;}body:after{content:"";display:block;clear:both;}body::-moz-selection{background:#b5d6fd;color:#000;}body::selection{background:#b5d6fd;color:#000;}', iframeStyle: "", iframeStyleFiles: [], direction: "auto", zIndex: 1, tabIndex: null, disableRightClick: !1, scrollableContainer: "body", keepFormatOnDelete: !1, theme: null }), t.MODULES.core = function(e) {
        var r = e.$;
        function s() {
          if (e.$box.addClass("fr-box".concat(e.opts.editorClass ? " ".concat(e.opts.editorClass) : "")), e.$box.attr("role", "application"), e.$wp.addClass("fr-wrapper"), e.opts.documentReady && e.$box.addClass("fr-document"), function() {
            e.opts.iframe || e.$el.addClass("fr-element fr-view");
          }(), e.opts.iframe) {
            e.$iframe.addClass("fr-iframe"), e.$el.addClass("fr-view");
            for (var d = 0; d < e.o_doc.styleSheets.length; d++) {
              var u = void 0;
              try {
                u = e.o_doc.styleSheets[d].cssRules;
              } catch {
              }
              if (u)
                for (var b = 0, E = u.length; b < E; b++)
                  !u[b].selectorText || u[b].selectorText.indexOf(".fr-view") !== 0 && u[b].selectorText.indexOf(".fr-element") !== 0 || 0 < u[b].style.cssText.length && (u[b].selectorText.indexOf(".fr-view") === 0 ? e.opts.iframeStyle += "".concat(u[b].selectorText.replace(/\.fr-view/g, "body"), "{").concat(u[b].style.cssText, "}") : e.opts.iframeStyle += "".concat(u[b].selectorText.replace(/\.fr-element/g, "body"), "{").concat(u[b].style.cssText, "}"));
            }
          }
          e.opts.direction !== "auto" && e.$box.removeClass("fr-ltr fr-rtl").addClass("fr-".concat(e.opts.direction)), e.$el.attr("dir", e.opts.direction), e.$wp.attr("dir", e.opts.direction), 1 < e.opts.zIndex && e.$box.css("z-index", e.opts.zIndex), e.opts.theme && e.$box.addClass("".concat(e.opts.theme, "-theme")), e.opts.tabIndex = e.opts.tabIndex || e.$oel.attr("tabIndex"), e.opts.tabIndex && e.$el.attr("tabIndex", e.opts.tabIndex);
        }
        return { _init: function() {
          if (t.INSTANCES.push(e), function() {
            e.drag_support = { filereader: typeof FileReader < "u", formdata: Boolean(e.win.FormData), progress: "upload" in new XMLHttpRequest() };
          }(), e.$wp) {
            s(), e.html.set(e._original_html), e.$el.attr("spellcheck", e.opts.spellcheck), e.helpers.isMobile() && (e.$el.attr("autocomplete", e.opts.spellcheck ? "on" : "off"), e.$el.attr("autocorrect", e.opts.spellcheck ? "on" : "off"), e.$el.attr("autocapitalize", e.opts.spellcheck ? "on" : "off")), e.opts.disableRightClick && e.events.$on(e.$el, "contextmenu", function(u) {
              if (u.button === 2)
                return u.preventDefault(), u.stopPropagation(), !1;
            });
            try {
              e.doc.execCommand("styleWithCSS", !1, !1);
            } catch {
            }
          }
          e.$oel.get(0).tagName === "TEXTAREA" && (e.events.on("contentChanged", function() {
            e.$oel.val(e.html.get());
          }), e.events.on("form.submit", function() {
            e.$oel.val(e.html.get());
          }), e.events.on("form.reset", function() {
            e.html.set(e._original_html);
          }), e.$oel.val(e.html.get())), e.helpers.isIOS() && e.events.$on(e.$doc, "selectionchange", function() {
            e.$doc.get(0).hasFocus() || e.$win.get(0).focus();
          }), e.events.trigger("init"), e.opts.autofocus && !e.opts.initOnClick && e.$wp && e.events.on("initialized", function() {
            e.events.focus(!0);
          });
        }, destroy: function(u) {
          e.$oel.get(0).tagName === "TEXTAREA" && e.$oel.val(u), e.$box && e.$box.removeAttr("role"), e.$wp && (e.$oel.get(0).tagName === "TEXTAREA" ? (e.$el.html(""), e.$wp.html(""), e.$box.replaceWith(e.$oel), e.$oel.show()) : (e.$wp.replaceWith(u), e.$el.html(""), e.$box.removeClass("fr-view fr-ltr fr-box ".concat(e.opts.editorClass || "")), e.opts.theme && e.$box.addClass("".concat(e.opts.theme, "-theme")))), this.$wp = null, this.$el = null, this.el = null, this.$box = null;
        }, isEmpty: function() {
          return e.node.isEmpty(e.el);
        }, getXHR: function(u, b) {
          var E = new XMLHttpRequest();
          for (var g in E.open(b, u, !0), e.opts.requestWithCredentials && (E.withCredentials = !0), e.opts.requestHeaders)
            Object.prototype.hasOwnProperty.call(e.opts.requestHeaders, g) && E.setRequestHeader(g, e.opts.requestHeaders[g]);
          return E;
        }, injectStyle: function(u) {
          if (e.opts.iframe) {
            e.$head.find("style[data-fr-style], link[data-fr-style]").remove(), e.$head.append('<style data-fr-style="true">'.concat(u, "</style>"));
            for (var b = 0; b < e.opts.iframeStyleFiles.length; b++) {
              var E = r('<link data-fr-style="true" rel="stylesheet" href="'.concat(e.opts.iframeStyleFiles[b], '">'));
              E.get(0).addEventListener("load", e.size.syncIframe), e.$head.append(E);
            }
          }
        }, hasFocus: function() {
          return e.browser.mozilla && e.helpers.isMobile() ? e.selection.inEditor() : e.node.hasFocus(e.el) || 0 < e.$el.find("*:focus").length;
        }, sameInstance: function(u) {
          if (!u)
            return !1;
          var b = u.data("instance");
          return !!b && b.id === e.id;
        } };
      }, t.POPUP_TEMPLATES = { "text.edit": "[_EDIT_]" }, t.RegisterTemplate = function(e, r) {
        t.POPUP_TEMPLATES[e] = r;
      }, t.MODULES.popups = function(e) {
        var r = e.$;
        e.shared.popups || (e.shared.popups = {});
        var s, d = e.shared.popups;
        function u(i, a) {
          a.isVisible() || (a = e.$sc), a.is(d[i].data("container")) || (d[i].data("container", a), a.append(d[i]));
        }
        function b() {
          r(this).toggleClass("fr-not-empty", !0);
        }
        function E() {
          var i = r(this);
          i.toggleClass("fr-not-empty", i.val() !== "");
        }
        function g(i) {
          return d[i] && e.node.hasClass(d[i], "fr-active") && e.core.sameInstance(d[i]) || !1;
        }
        function m(i) {
          for (var a in d)
            if (Object.prototype.hasOwnProperty.call(d, a) && g(a) && (i === void 0 || d[a].data("instance") === i))
              return d[a];
          return !1;
        }
        function C(i) {
          var a = null;
          if ((a = typeof i != "string" ? i : d[i]) && e.node.hasClass(a, "fr-active") && (a.removeClass("fr-active fr-above"), e.events.trigger("popups.hide.".concat(i)), e.$tb && (1 < e.opts.zIndex ? e.$tb.css("zIndex", e.opts.zIndex + 1) : e.$tb.css("zIndex", "")), e.events.disableBlur(), a.find("input, textarea, button").each(function() {
            this === this.ownerDocument.activeElement && this.blur();
          }), a.find("input, textarea").attr("disabled", "disabled"), s))
            for (var p = 0; p < s.length; p++)
              r(s[p]).removeClass("fr-btn-active-popup");
        }
        function O(i) {
          for (var a in i === void 0 && (i = []), d)
            Object.prototype.hasOwnProperty.call(d, a) && i.indexOf(a) < 0 && C(a);
        }
        function U() {
          e.shared.exit_flag = !0;
        }
        function y() {
          e.shared.exit_flag = !1;
        }
        function B() {
          return e.shared.exit_flag;
        }
        function I(i, a) {
          var p, c = function(Q, re) {
            var q = t.POPUP_TEMPLATES[Q];
            if (!q)
              return null;
            for (var ae in typeof q == "function" && (q = q.apply(e)), re)
              Object.prototype.hasOwnProperty.call(re, ae) && (q = q.replace("[_".concat(ae.toUpperCase(), "_]"), re[ae]));
            return q;
          }(i, a), h = r(e.doc.createElement("DIV"));
          if (!c)
            return h.addClass("fr-popup fr-empty"), (p = r("body").first()).append(h), h.data("container", p), d[i] = h;
          h.addClass("fr-popup".concat(e.helpers.isMobile() ? " fr-mobile" : " fr-desktop").concat(e.opts.toolbarInline ? " fr-inline" : "")), h.html(c), e.opts.theme && h.addClass("".concat(e.opts.theme, "-theme")), 1 < e.opts.zIndex && (!e.opts.editInPopup && e.$tb ? e.$tb.css("z-index", e.opts.zIndex + 2) : h.css("z-index", e.opts.zIndex + 2)), e.opts.direction !== "auto" && h.removeClass("fr-ltr fr-rtl").addClass("fr-".concat(e.opts.direction)), h.find("input, textarea").attr("dir", e.opts.direction).attr("disabled", "disabled"), (p = r("body").first()).append(h), h.data("container", p);
          var M = (d[i] = h).find(".fr-color-hex-layer");
          if (0 < M.length) {
            var N = e.helpers.getPX(h.find(".fr-color-set > span").css("width")), ie = e.helpers.getPX(M.css("paddingLeft")), D = e.helpers.getPX(M.css("paddingRight"));
            M.css("width", N * e.opts.colorsStep + ie + D);
          }
          return e.button.bindCommands(h, !1), h;
        }
        function x(i) {
          var a = d[i];
          return { _windowResize: function() {
            var p = a.data("instance") || e;
            !p.helpers.isMobile() && a.isVisible() && (p.events.disableBlur(), p.popups.hide(i), p.events.enableBlur());
          }, _inputFocus: function(p) {
            var c = a.data("instance") || e, h = r(p.currentTarget);
            if (h.is("input:file") && h.closest(".fr-layer").addClass("fr-input-focus"), p.preventDefault(), p.stopPropagation(), setTimeout(function() {
              c.events.enableBlur();
            }, 100), c.helpers.isMobile()) {
              var M = r(c.o_win).scrollTop();
              setTimeout(function() {
                r(c.o_win).scrollTop(M);
              }, 0);
            }
          }, _inputBlur: function(p) {
            var c = a.data("instance") || e, h = r(p.currentTarget);
            h.is("input:file") && h.closest(".fr-layer").removeClass("fr-input-focus"), document.activeElement !== this && r(this).isVisible() && (c.events.blurActive() && c.events.trigger("blur"), c.events.enableBlur());
          }, _editorKeydown: function(p) {
            var c = a.data("instance") || e;
            c.keys.ctrlKey(p) || p.which === t.KEYCODE.ALT || p.which === t.KEYCODE.ESC || (g(i) && a.findVisible(".fr-back").length ? c.button.exec(a.findVisible(".fr-back").first()) : p.which !== t.KEYCODE.ALT && c.popups.hide(i));
          }, _preventFocus: function(p) {
            var c = a.data("instance") || e, h = p.originalEvent ? p.originalEvent.target || p.originalEvent.originalTarget : null;
            p.type === "mouseup" || r(h).is(":focus") || c.events.disableBlur(), p.type !== "mouseup" || r(h).hasClass("fr-command") || 0 < r(h).parents(".fr-command").length || r(h).hasClass("fr-dropdown-content") || e.button.hideActiveDropdowns(a), (e.browser.safari || e.browser.mozilla) && p.type === "mousedown" && r(h).is("input[type=file]") && c.events.disableBlur();
            var M = "input, textarea, button, select, label, .fr-command";
            if (h && !r(h).is(M) && r(h).parents(M).length === 0)
              return p.stopPropagation(), !1;
            h && r(h).is(M) && p.stopPropagation(), y();
          }, _editorMouseup: function() {
            a.isVisible() && B() && 0 < a.findVisible("input:focus, textarea:focus, button:focus, select:focus").length && e.events.disableBlur();
          }, _windowMouseup: function(p) {
            if (!e.core.sameInstance(a))
              return !0;
            var c = a.data("instance") || e;
            a.isVisible() && B() && (p.stopPropagation(), c.markers.remove(), c.popups.hide(i), y());
          }, _windowKeydown: function(p) {
            if (!e.core.sameInstance(a))
              return !0;
            var c = a.data("instance") || e, h = p.which;
            if (t.KEYCODE.ESC === h) {
              if (c.popups.isVisible(i) && c.opts.toolbarInline)
                return p.stopPropagation(), c.popups.isVisible(i) && (a.findVisible(".fr-back").length ? (c.button.exec(a.findVisible(".fr-back").first()), c.accessibility.focusPopupButton(a)) : a.findVisible(".fr-dismiss").length ? c.button.exec(a.findVisible(".fr-dismiss").first()) : (c.popups.hide(i), c.toolbar.showInline(null, !0), c.accessibility.focusPopupButton(a))), !1;
              if (c.popups.isVisible(i))
                return a.findVisible(".fr-back").length ? (c.button.exec(a.findVisible(".fr-back").first), c.accessibility.focusPopupButton(a)) : a.findVisible(".fr-dismiss").length ? c.button.exec(a.findVisible(".fr-dismiss").first()) : (c.popups.hide(i), c.accessibility.focusPopupButton(a)), !1;
            }
          }, _repositionPopup: function() {
            if (!e.opts.height && !e.opts.heightMax || e.opts.toolbarInline)
              return !0;
            if (e.$wp && g(i) && a.parent().get(0) === e.$sc.get(0)) {
              var p = a.offset().top - e.$wp.offset().top, c = e.$wp.outerHeight();
              e.node.hasClass(a.get(0), "fr-above") && (p += a.outerHeight()), c < p || p < 0 ? a.addClass("fr-hidden") : a.removeClass("fr-hidden");
            }
          } };
        }
        function v(i, a) {
          e.events.on("mouseup", i._editorMouseup, !0), e.$wp && e.events.on("keydown", i._editorKeydown), e.events.on("focus", function() {
            d[a].removeClass("focused");
          }), e.events.on("blur", function() {
            m() && e.markers.remove(), e.helpers.isMobile() ? d[a].hasClass("focused") ? (O(), d[a].removeClass("focused")) : d[a].addClass("focused") : d[a].find("iframe").length || O();
          }), e.$wp && !e.helpers.isMobile() && e.events.$on(e.$wp, "scroll.popup".concat(a), i._repositionPopup), e.events.on("window.mouseup", i._windowMouseup, !0), e.events.on("window.keydown", i._windowKeydown, !0), d[a].data("inst".concat(e.id), !0), e.events.on("destroy", function() {
            e.core.sameInstance(d[a]) && (r("body").first().append(d[a]), d[a].removeClass("fr-active"));
          }, !0);
        }
        function A() {
          var i = r(this).prev().children().first();
          i.attr("checked", !i.attr("checked"));
        }
        function l() {
          for (var i in d)
            if (Object.prototype.hasOwnProperty.call(d, i)) {
              var a = d[i];
              a && (a.html("").removeData().remove(), d[i] = null);
            }
          d = [];
        }
        return e.shared.exit_flag = !1, { _init: function() {
          e.events.on("shared.destroy", l, !0), e.events.on("window.mousedown", U), e.events.on("window.touchmove", y), e.events.$on(r(e.o_win), "scroll", y), e.events.on("mousedown", function(a) {
            m() && (a.stopPropagation(), e.$el.find(".fr-marker").remove(), U(), e.events.disableBlur());
          });
        }, create: function(a, p) {
          var c = I(a, p), h = x(a);
          v(h, a), e.events.$on(c, "mousedown mouseup touchstart touchend touch", "*", h._preventFocus, !0), e.events.$on(c, "focus", "input, textarea, button, select", h._inputFocus, !0), e.events.$on(c, "blur", "input, textarea, button, select", h._inputBlur, !0);
          var M = c.find("input, textarea");
          return function(ie) {
            for (var D = 0; D < ie.length; D++) {
              var _ = ie[D], Q = r(_);
              Q.next().length === 0 && Q.attr("placeholder") && (Q.after('<label for="'.concat(Q.attr("id"), '">').concat(Q.attr("placeholder"), "</label>")), Q.attr("placeholder", ""));
            }
          }(M), e.events.$on(M, "focus", b), e.events.$on(M, "blur change", E), e.events.$on(c, "click", ".fr-checkbox + label", A), e.accessibility.registerPopup(a), e.helpers.isIOS() && e.events.$on(c, "touchend", "label", function() {
            r("#".concat(r(this).attr("for"))).prop("checked", function(N, ie) {
              return !ie;
            });
          }, !0), e.events.$on(r(e.o_win), "resize", h._windowResize, !0), c;
        }, get: function(a) {
          var p = d[a];
          return p && !p.data("inst".concat(e.id)) && v(x(a), a), p;
        }, show: function(a, p, c, h, M) {
          if (g(a) || (m() && 0 < e.$el.find(".fr-marker").length ? (e.events.disableBlur(), e.selection.restore()) : m() || (e.events.disableBlur(), e.events.focus(), e.events.enableBlur())), O([a]), !d[a])
            return !1;
          var N = e.button.getButtons(".fr-dropdown.fr-active");
          N.removeClass("fr-active").attr("aria-expanded", !1).parents(".fr-toolbar").css("zIndex", "").find("> .fr-dropdown-wrapper").css("height", ""), N.next().attr("aria-hidden", !0).css("overflow", "").find("> .fr-dropdown-wrapper").css("height", ""), d[a].data("instance", e), e.$tb && e.$tb.data("instance", e);
          var ie = g(a);
          d[a].addClass("fr-active").removeClass("fr-hidden").find("input, textarea").removeAttr("disabled");
          var D = d[a].data("container");
          if (function(q, ae) {
            ae.isVisible() || (ae = e.$sc), ae.contains([d[q].get(0)]) || ae.append(d[q]);
          }(a, D), e.opts.toolbarInline && D && e.$tb && D.get(0) === e.$tb.get(0) && (u(a, e.$sc), c = e.$tb.offset().top - e.helpers.getPX(e.$tb.css("margin-top")), p = e.$tb.offset().left + e.$tb.outerWidth() / 2, e.node.hasClass(e.$tb.get(0), "fr-above") && c && (c += e.$tb.outerHeight()), h = 0), D = d[a].data("container"), e.opts.iframe && !h && !ie) {
            var _ = e.helpers.getPX(e.$wp.find(".fr-iframe").css("padding-top")), Q = e.helpers.getPX(e.$wp.find(".fr-iframe").css("padding-left"));
            p && (p -= e.$iframe.offset().left + Q), c && (c -= e.$iframe.offset().top + _);
          }
          D.is(e.$tb) ? e.$tb.css("zIndex", (e.opts.zIndex || 1) + 4) : d[a].css("zIndex", (e.opts.zIndex || 1) + 4), e.opts.toolbarBottom && D && e.$tb && D.get(0) === e.$tb.get(0) && (d[a].addClass("fr-above"), c && (c -= d[a].outerHeight())), M && (p -= d[a].width() / 2), p + d[a].outerWidth() > e.$sc.offset().left + e.$sc.width() && (p -= p + d[a].outerWidth() - e.$sc.offset().left - e.$sc.width()), p < e.$sc.offset().left && e.opts.direction === "rtl" && (p = e.$sc.offset().left), d[a].removeClass("fr-active"), e.position.at(p, c, d[a], h || 0), d[a].addClass("fr-active"), ie || e.accessibility.focusPopup(d[a]), e.opts.toolbarInline && e.toolbar.hide(), e.$tb && (s = e.$tb.find(".fr-btn-active-popup")), e.events.trigger("popups.show.".concat(a)), x(a)._repositionPopup(), y();
        }, hide: C, onHide: function(a, p) {
          e.events.on("popups.hide.".concat(a), p);
        }, hideAll: O, setContainer: u, refresh: function(a) {
          d[a].data("instance", e), e.events.trigger("popups.refresh.".concat(a));
          for (var p = d[a].find(".fr-command"), c = 0; c < p.length; c++) {
            var h = r(p[c]);
            h.parents(".fr-dropdown-menu").length === 0 && e.button.refresh(h);
          }
        }, onRefresh: function(a, p) {
          e.events.on("popups.refresh.".concat(a), p);
        }, onShow: function(a, p) {
          e.events.on("popups.show.".concat(a), p);
        }, isVisible: g, areVisible: m };
      }, t.MODULES.accessibility = function(e) {
        var r = e.$, s = !0;
        function d(c) {
          c && c.length && !e.$el.find('[contenteditable="true"]').is(":focus") && (c.data("blur-event-set") || c.parents(".fr-popup").length || (e.events.$on(c, "blur", function() {
            var h = c.parents(".fr-toolbar, .fr-popup").data("instance") || e;
            h.events.blurActive() && !e.core.hasFocus() && h.events.trigger("blur"), setTimeout(function() {
              h.events.enableBlur();
            }, 100);
          }, !0), c.data("blur-event-set", !0)), (c.parents(".fr-toolbar, .fr-popup").data("instance") || e).events.disableBlur(), c.get(0).focus(), e.shared.$f_el = c);
        }
        function u(c, h) {
          var M = h ? "last" : "first", N = O(U(c))[M]();
          if (N.length)
            return d(N), !0;
        }
        function b(c) {
          return c.is("input, textarea, select") && g(), e.events.disableBlur(), c.get(0).focus(), !0;
        }
        function E(c, h) {
          var M = c.find("input, textarea, button, select").filter(function() {
            return r(this).isVisible();
          }).not(":disabled");
          if ((M = h ? M.last() : M.first()).length)
            return b(M);
          if (e.shared.with_kb) {
            var N = c.findVisible(".fr-active-item").first();
            if (N.length)
              return b(N);
            var ie = c.findVisible("[tabIndex]").first();
            if (ie.length)
              return b(ie);
          }
        }
        function g() {
          e.$el.find(".fr-marker").length === 0 && e.core.hasFocus() && e.selection.save();
        }
        function m() {
          var c = e.popups.areVisible();
          if (c) {
            var h = c.find(".fr-buttons");
            return h.find("button:focus, .fr-group span:focus").length ? !u(c.data("instance").$tb) : !u(h);
          }
          return !u(e.$tb);
        }
        function C() {
          var c = null;
          return e.shared.$f_el.is(".fr-dropdown.fr-active") ? c = e.shared.$f_el : e.shared.$f_el.closest(".fr-dropdown-menu").prev().is(".fr-dropdown.fr-active") && (c = e.shared.$f_el.closest(".fr-dropdown-menu").prev()), c;
        }
        function O(c) {
          for (var h = -1, M = 0; M < c.length; M++)
            r(c[M]).hasClass("fr-open") && (h = M);
          var N = c.index(e.$tb.find(".fr-more-toolbar.fr-expanded > button.fr-command").first());
          if (0 < N && h !== -1) {
            var ie = c.slice(N, c.length), D = (c = c.slice(0, N)).slice(0, h + 1), _ = c.slice(h + 1, c.length);
            c = D;
            for (var Q = 0; Q < ie.length; Q++)
              c.push(ie[Q]);
            for (var re = 0; re < _.length; re++)
              c.push(_[re]);
          }
          return c;
        }
        function U(c) {
          return c.findVisible("button:not(.fr-disabled), .fr-group span.fr-command").filter(function(h) {
            var M = r(h).parents(".fr-more-toolbar");
            return M.length === 0 || 0 < M.length && M.hasClass("fr-expanded");
          });
        }
        function y(c, h, M) {
          if (e.shared.$f_el) {
            var N = C();
            N && (e.button.click(N), e.shared.$f_el = N);
            var ie = O(U(c)), D = ie.index(e.shared.$f_el);
            if (D === 0 && !M || D === ie.length - 1 && M) {
              var _;
              h && (c.parent().is(".fr-popup") && (_ = !E(c.parent().children().not(".fr-buttons"), !M)), _ === !1 && (e.shared.$f_el = null)), h && _ === !1 || u(c, !M);
            } else
              d(r(ie.get(D + (M ? 1 : -1))));
            return !1;
          }
        }
        function B(c, h) {
          return y(c, h, !0);
        }
        function I(c, h) {
          return y(c, h);
        }
        function x(c) {
          if (e.shared.$f_el) {
            var h;
            if (e.shared.$f_el.is(".fr-dropdown.fr-active"))
              return d(h = c ? e.shared.$f_el.next().find(".fr-command:not(.fr-disabled)").first() : e.shared.$f_el.next().find(".fr-command:not(.fr-disabled)").last()), !1;
            if (e.shared.$f_el.is("a.fr-command"))
              return (h = c ? e.shared.$f_el.closest("li").nextAllVisible().first().find(".fr-command:not(.fr-disabled)").first() : e.shared.$f_el.closest("li").prevAllVisible().first().find(".fr-command:not(.fr-disabled)").first()).length || (h = c ? e.shared.$f_el.closest(".fr-dropdown-menu").find(".fr-command:not(.fr-disabled)").first() : e.shared.$f_el.closest(".fr-dropdown-menu").find(".fr-command:not(.fr-disabled)").last()), d(h), !1;
          }
        }
        function v() {
          if (e.shared.$f_el) {
            if (e.shared.$f_el.hasClass("fr-dropdown"))
              e.button.click(e.shared.$f_el);
            else if (e.shared.$f_el.is("button.fr-back")) {
              e.opts.toolbarInline && (e.events.disableBlur(), e.events.focus());
              var c = e.popups.areVisible(e);
              c && (e.shared.with_kb = !1), e.button.click(e.shared.$f_el), i(c);
            } else {
              if (e.events.disableBlur(), e.button.click(e.shared.$f_el), e.shared.$f_el.attr("data-group-name")) {
                var h = e.$tb.find('.fr-more-toolbar[data-name="'.concat(e.shared.$f_el.attr("data-group-name"), '"]')), M = e.shared.$f_el;
                h.hasClass("fr-expanded") && (M = h.findVisible("button:not(.fr-disabled)").first()), M && d(M);
              } else if (e.shared.$f_el.attr("data-popup")) {
                var N = e.popups.areVisible(e);
                N && N.data("popup-button", e.shared.$f_el);
              } else if (e.shared.$f_el.attr("data-modal")) {
                var ie = e.modals.areVisible(e);
                ie && ie.data("modal-button", e.shared.$f_el);
              }
              e.shared.$f_el = null;
            }
            return !1;
          }
        }
        function A() {
          e.shared.$f_el && (e.events.disableBlur(), e.shared.$f_el.blur(), e.shared.$f_el = null), e.events.trigger("toolbar.focusEditor") !== !1 && (e.events.disableBlur(), e.$el.get(0).focus(), e.events.focus());
        }
        function l(c) {
          c && c.length && (e.events.$on(c, "keydown", function(h) {
            if (!r(h.target).is("a.fr-command, button.fr-command, .fr-group span.fr-command"))
              return !0;
            var M = c.parents(".fr-popup").data("instance") || c.data("instance") || e;
            e.shared.with_kb = !0;
            var N = M.accessibility.exec(h, c);
            return e.shared.with_kb = !1, N;
          }, !0), e.events.$on(c, "mouseenter", "[tabIndex]", function(h) {
            var M = c.parents(".fr-popup").data("instance") || c.data("instance") || e;
            if (!s)
              return h.stopPropagation(), void h.preventDefault();
            var N = r(h.currentTarget);
            M.shared.$f_el && M.shared.$f_el.not(N) && M.accessibility.focusEditor();
          }, !0), e.$tb && e.events.$on(e.$tb, "transitionend", ".fr-more-toolbar", function() {
            e.shared.$f_el = r(document.activeElement);
          }));
        }
        function i(c) {
          var h = c.data("popup-button");
          h && setTimeout(function() {
            d(h), c.data("popup-button", null);
          }, 0);
        }
        function a(c) {
          var h = e.popups.areVisible(c);
          h && h.data("popup-button", null);
        }
        function p(c) {
          var h = navigator.userAgent.indexOf("Mac OS X") !== -1 ? c.metaKey : c.ctrlKey;
          if (c.which !== t.KEYCODE.F10 || h || c.shiftKey || !c.altKey)
            return !0;
          e.shared.with_kb = !0;
          var M = e.popups.areVisible(e), N = !1;
          return M && (N = E(M.children().not(".fr-buttons"))), N || m(), e.shared.with_kb = !1, c.preventDefault(), c.stopPropagation(), !1;
        }
        return { _init: function() {
          e.$wp ? e.events.on("keydown", p, !0) : e.events.$on(e.$win, "keydown", p, !0), e.events.on("mousedown", function(h) {
            a(e), e.shared.$f_el && e.el.isSameNode(e.shared.$f_el[0]) && (e.accessibility.restoreSelection(), h.stopPropagation(), e.events.disableBlur(), e.shared.$f_el = null);
          }, !0), e.events.on("blur", function() {
            e.shared.$f_el = null, a(e);
          }, !0);
        }, registerPopup: function(h) {
          var M = e.popups.get(h), N = function(D) {
            var _ = e.popups.get(D);
            return { _tiKeydown: function(Q) {
              var re = _.data("instance") || e;
              if (re.events.trigger("popup.tab", [Q]) === !1)
                return !1;
              var q = Q.which, ae = _.find(":focus").first();
              if (t.KEYCODE.TAB === q) {
                Q.preventDefault();
                var se = _.children().not(".fr-buttons"), H = se.findVisible("input, textarea, button, select").not(".fr-no-touch input, .fr-no-touch textarea, .fr-no-touch button, .fr-no-touch select, :disabled").toArray(), W = H.indexOf(this) + (Q.shiftKey ? -1 : 1);
                if (0 <= W && W < H.length)
                  return re.events.disableBlur(), r(H[W]).focus(), Q.stopPropagation(), !1;
                var T = _.find(".fr-buttons");
                if (T.length && u(T, Boolean(Q.shiftKey)) || E(se))
                  return Q.stopPropagation(), !1;
              } else {
                if (t.KEYCODE.ENTER !== q || !Q.target || Q.target.tagName === "TEXTAREA")
                  return t.KEYCODE.ESC === q ? (Q.preventDefault(), Q.stopPropagation(), re.accessibility.restoreSelection(), re.popups.isVisible(D) && _.findVisible(".fr-back").length ? (re.opts.toolbarInline && (re.events.disableBlur(), re.events.focus()), re.button.exec(_.findVisible(".fr-back").first()), i(_)) : re.popups.isVisible(D) && _.findVisible(".fr-dismiss").length ? re.button.exec(_.findVisible(".fr-dismiss").first()) : (re.popups.hide(D), re.opts.toolbarInline && re.toolbar.showInline(null, !0), i(_)), !1) : t.KEYCODE.SPACE === q && (ae.is(".fr-submit") || ae.is(".fr-dismiss")) ? (Q.preventDefault(), Q.stopPropagation(), re.events.disableBlur(), re.button.exec(ae), !0) : re.keys.isBrowserAction(Q) || ae.is("input[type=text], textarea") || t.KEYCODE.SPACE === q && (ae.is(".fr-link-attr") || ae.is("input[type=file]")) ? void Q.stopPropagation() : (Q.stopPropagation(), Q.preventDefault(), !1);
                var S = null;
                0 < _.findVisible(".fr-submit").length ? S = _.findVisible(".fr-submit").first() : _.findVisible(".fr-dismiss").length && (S = _.findVisible(".fr-dismiss").first()), S && (Q.preventDefault(), Q.stopPropagation(), re.events.disableBlur(), re.button.exec(S));
              }
            }, _tiMouseenter: function() {
              var Q = _.data("instance") || e;
              a(Q);
            } };
          }(h);
          l(M.find(".fr-buttons")), e.events.$on(M, "mouseenter", "tabIndex", N._tiMouseenter, !0), e.events.$on(M.children().not(".fr-buttons"), "keydown", "[tabIndex]", N._tiKeydown, !0), e.popups.onHide(h, function() {
            (M.data("instance") || e).accessibility.restoreSelection();
          }), e.popups.onShow(h, function() {
            s = !1, setTimeout(function() {
              s = !0;
            }, 0);
          });
        }, registerToolbar: l, focusToolbarElement: d, focusToolbar: u, focusContent: E, focusPopup: function(h) {
          var M = h.children().not(".fr-buttons");
          M.data("mouseenter-event-set") || (e.events.$on(M, "mouseenter", "[tabIndex]", function(N) {
            var ie = h.data("instance") || e;
            if (!s)
              return N.stopPropagation(), void N.preventDefault();
            var D = M.find(":focus").first();
            D.length && !D.is("input, button, textarea, select") && (ie.events.disableBlur(), D.blur(), ie.events.disableBlur(), ie.events.focus());
          }), M.data("mouseenter-event-set", !0)), !E(M) && e.shared.with_kb && u(h.find(".fr-buttons"));
        }, focusModal: function(h) {
          e.core.hasFocus() || (e.events.disableBlur(), e.events.focus()), e.accessibility.saveSelection(), e.events.disableBlur(), e.el.blur(), e.selection.clear(), e.events.disableBlur(), e.shared.with_kb ? h.find(".fr-command[tabIndex], [tabIndex]").first().focus() : h.find("[tabIndex]").first().focus();
        }, focusEditor: A, focusPopupButton: i, focusModalButton: function(h) {
          var M = h.data("modal-button");
          M && setTimeout(function() {
            d(M), h.data("modal-button", null);
          }, 0);
        }, hasFocus: function() {
          return e.shared.$f_el !== null;
        }, exec: function(h, M) {
          var N = navigator.userAgent.indexOf("Mac OS X") !== -1 ? h.metaKey : h.ctrlKey, ie = h.which, D = !1;
          return ie !== t.KEYCODE.TAB || N || h.shiftKey || h.altKey ? ie !== t.KEYCODE.ARROW_RIGHT || N || h.shiftKey || h.altKey ? ie !== t.KEYCODE.TAB || N || !h.shiftKey || h.altKey ? ie !== t.KEYCODE.ARROW_LEFT || N || h.shiftKey || h.altKey ? ie !== t.KEYCODE.ARROW_UP || N || h.shiftKey || h.altKey ? ie !== t.KEYCODE.ARROW_DOWN || N || h.shiftKey || h.altKey ? ie !== t.KEYCODE.ENTER && ie !== t.KEYCODE.SPACE || N || h.shiftKey || h.altKey ? ie !== t.KEYCODE.ESC || N || h.shiftKey || h.altKey ? ie !== t.KEYCODE.F10 || N || h.shiftKey || !h.altKey || (D = m()) : D = function(Q) {
            if (e.shared.$f_el) {
              var re = C();
              return re ? (e.button.click(re), d(re)) : Q.parent().findVisible(".fr-back").length ? (e.shared.with_kb = !1, e.opts.toolbarInline && (e.events.disableBlur(), e.events.focus()), e.button.exec(Q.parent().findVisible(".fr-back")).first(), i(Q.parent())) : e.shared.$f_el.is("button, .fr-group span") && (Q.parent().is(".fr-popup") ? (e.accessibility.restoreSelection(), e.shared.$f_el = null, e.events.trigger("toolbar.esc") !== !1 && (e.popups.hide(Q.parent()), e.opts.toolbarInline && e.toolbar.showInline(null, !0), i(Q.parent()))) : A()), !1;
            }
          }(M) : D = v() : D = function() {
            return e.shared.$f_el && e.shared.$f_el.is(".fr-dropdown:not(.fr-active)") ? v() : x(!0);
          }() : D = function() {
            return x();
          }() : D = I(M) : D = I(M, !0) : D = B(M) : D = B(M, !0), e.shared.$f_el || D !== void 0 || (D = !0), !D && e.keys.isBrowserAction(h) && (D = !0), !!D || (h.preventDefault(), h.stopPropagation(), !1);
        }, saveSelection: g, restoreSelection: function() {
          e.$el.find(".fr-marker").length && (e.events.disableBlur(), e.selection.restore(), e.events.enableBlur());
        } };
      }, Object.assign(t.DEFAULTS, { tooltips: !0 }), t.MODULES.tooltip = function(e) {
        var r = e.$;
        function s() {
          e.helpers.isMobile() || e.$tooltip && e.$tooltip.removeClass("fr-visible").css("left", "-3000px").css("position", "fixed");
        }
        function d(u, b) {
          if (!e.helpers.isMobile() && (u.data("title") || u.data("title", u.attr("title")), u.data("title"))) {
            e.$tooltip || function() {
              e.opts.tooltips && !e.helpers.isMobile() && (e.shared.$tooltip ? e.$tooltip = e.shared.$tooltip : (e.shared.$tooltip = r(e.doc.createElement("DIV")).addClass("fr-tooltip"), e.$tooltip = e.shared.$tooltip, e.opts.theme && e.$tooltip.addClass("".concat(e.opts.theme, "-theme")), r(e.o_doc).find("body").first().append(e.$tooltip)), e.events.on("shared.destroy", function() {
                e.$tooltip.html("").removeData().remove(), e.$tooltip = null;
              }, !0));
            }(), u.removeAttr("title"), e.$tooltip.text(e.language.translate(u.data("title"))), e.$tooltip.addClass("fr-visible");
            var E = u.offset().left + (u.outerWidth() - e.$tooltip.outerWidth()) / 2;
            E < 0 && (E = 0), E + e.$tooltip.outerWidth() > r(e.o_win).width() && (E = r(e.o_win).width() - e.$tooltip.outerWidth()), b === void 0 && (b = e.opts.toolbarBottom), u.offset().top - r(window).scrollTop() + u.outerHeight() + 10 >= r(window).height() && (b = !0);
            var g = b ? u.offset().top - e.$tooltip.height() : u.offset().top + u.outerHeight();
            e.$tooltip.css("position", ""), e.$tooltip.css("left", E), e.$tooltip.css("top", Math.ceil(g)), r(e.o_doc).find("body").first().css("position") !== "static" ? (e.$tooltip.css("margin-left", -r(e.o_doc).find("body").first().offset().left), e.$tooltip.css("margin-top", -r(e.o_doc).find("body").first().offset().top)) : (e.$tooltip.css("margin-left", ""), e.$tooltip.css("margin-top", ""));
          }
        }
        return { hide: s, to: d, bind: function(b, E, g) {
          e.opts.tooltips && !e.helpers.isMobile() && (e.events.$on(b, "mouseover", E, function(m) {
            e.node.hasClass(m.currentTarget, "fr-disabled") || e.edit.isDisabled() || d(r(m.currentTarget), g);
          }, !0), e.events.$on(b, "mouseout ".concat(e._mousedown, " ").concat(e._mouseup), E, function() {
            s();
          }, !0));
        } };
      }, t.TOOLBAR_VISIBLE_BUTTONS = 3, t.MODULES.button = function(e) {
        var r = e.$, s = [];
        (e.opts.toolbarInline || e.opts.toolbarContainer) && (e.shared.buttons || (e.shared.buttons = []), s = e.shared.buttons);
        var d = [];
        function u(i, a, p) {
          for (var c = r(), h = 0; h < i.length; h++) {
            var M = r(i[h]);
            if (M.is(a) && (c = c.add(M)), p && M.is(".fr-dropdown")) {
              var N = M.next().find(a);
              c = c.add(N);
            }
          }
          return c;
        }
        function b(i, a) {
          var p, c = r();
          if (!i)
            return c;
          for (p in c = (c = c.add(u(s, i, a))).add(u(d, i, a)), e.shared.popups)
            if (Object.prototype.hasOwnProperty.call(e.shared.popups, p)) {
              var h = e.shared.popups[p].children().find(i);
              c = c.add(h);
            }
          for (p in e.shared.modals)
            if (Object.prototype.hasOwnProperty.call(e.shared.modals, p)) {
              var M = e.shared.modals[p].$modal.find(i);
              c = c.add(M);
            }
          return c;
        }
        function E(i) {
          var a = i.next(), p = e.node.hasClass(i.get(0), "fr-active"), c = b(".fr-dropdown.fr-active").not(i), h = i.parents(".fr-toolbar, .fr-popup").data("instance") || e;
          h.helpers.isIOS() && !h.el.querySelector(".fr-marker") && (h.selection.save(), h.selection.clear(), h.selection.restore()), a.parents(".fr-more-toolbar").addClass("fr-overflow-visible");
          var M = 0, N = 0, ie = a.find("> .fr-dropdown-wrapper");
          if (!p) {
            var D = i.data("cmd");
            a.find(".fr-command").removeClass("fr-active").attr("aria-selected", !1), t.COMMANDS[D] && t.COMMANDS[D].refreshOnShow && t.COMMANDS[D].refreshOnShow.apply(h, [i, a]), a.css("left", i.offset().left - i.parents(".fr-btn-wrap, .fr-toolbar, .fr-buttons").offset().left - (e.opts.direction === "rtl" ? a.width() - i.outerWidth() : 0)), a.addClass("test-height"), M = a.outerHeight(), N = e.helpers.getPX(ie.css("max-height")), a.removeClass("test-height"), a.css("top", "").css("bottom", "");
            var _ = i.outerHeight() / 10;
            if (!e.opts.toolbarBottom && a.offset().top + i.outerHeight() + M < r(e.o_doc).height())
              a.css("top", i.position().top + i.outerHeight() - _);
            else {
              var Q = 0, re = i.parents(".fr-more-toolbar");
              0 < re.length && (Q = re.first().height()), a.css("bottom", i.parents(".fr-popup, .fr-toolbar").first().height() - Q - i.position().top);
            }
          }
          i.addClass("fr-blink").toggleClass("fr-active"), i.hasClass("fr-options") && i.prev().toggleClass("fr-expanded"), i.hasClass("fr-active") ? (a.attr("aria-hidden", !1), i.attr("aria-expanded", !0), function(se, H, W) {
            W <= H && se.parent().css("overflow", "auto"), se.css("height", Math.min(H, W));
          }(ie, M, N)) : (a.attr("aria-hidden", !0).css("overflow", ""), i.attr("aria-expanded", !1), ie.css("height", "")), setTimeout(function() {
            i.removeClass("fr-blink");
          }, 300), a.css("margin-left", ""), a.offset().left + a.outerWidth() > e.$sc.offset().left + e.$sc.width() && a.css("margin-left", -(a.offset().left + a.outerWidth() - e.$sc.offset().left - e.$sc.width())), a.offset().left < e.$sc.offset().left && e.opts.direction === "rtl" && a.css("margin-left", e.$sc.offset().left), c.removeClass("fr-active").attr("aria-expanded", !1).next().attr("aria-hidden", !0).css("overflow", "").find("> .fr-dropdown-wrapper").css("height", ""), c.prev(".fr-expanded").removeClass("fr-expanded"), c.parents(".fr-toolbar:not(.fr-inline)").css("zIndex", ""), i.parents(".fr-popup").length !== 0 || e.opts.toolbarInline || (e.node.hasClass(i.get(0), "fr-active") ? e.$tb.css("zIndex", (e.opts.zIndex || 1) + 4) : e.$tb.css("zIndex", ""));
          var q = a.find("a.fr-command.fr-active").first();
          e.helpers.isMobile() || (q.length ? (e.accessibility.focusToolbarElement(q), ie.scrollTop(Math.abs(q.parents(".fr-dropdown-content").offset().top - q.offset().top) - q.offset().top)) : (e.accessibility.focusToolbarElement(i), ie.scrollTop(0)));
        }
        function g(i) {
          i.addClass("fr-blink"), setTimeout(function() {
            i.removeClass("fr-blink");
          }, 500);
          for (var a = i.data("cmd"), p = []; i.data("param".concat(p.length + 1)) !== void 0; )
            p.push(i.data("param".concat(p.length + 1)));
          var c = b(".fr-dropdown.fr-active");
          c.length && (c.removeClass("fr-active").attr("aria-expanded", !1).next().attr("aria-hidden", !0).css("overflow", "").find("> .fr-dropdown-wrapper").css("height", ""), c.prev(".fr-expanded").removeClass("fr-expanded"), c.parents(".fr-toolbar:not(.fr-inline)").css("zIndex", "")), i.parents(".fr-popup, .fr-toolbar").data("instance").commands.exec(a, p);
        }
        function m(i) {
          var a = i.parents(".fr-popup, .fr-toolbar").data("instance");
          if (i.parents(".fr-popup").length === 0 && i.data("popup") && !i.hasClass("fr-btn-active-popup") && i.addClass("fr-btn-active-popup"), i.parents(".fr-popup").length !== 0 || i.data("popup") || a.popups.hideAll(), a.popups.areVisible() && !a.popups.areVisible(a)) {
            for (var p = 0; p < t.INSTANCES.length; p++)
              t.INSTANCES[p] !== a && t.INSTANCES[p].popups && t.INSTANCES[p].popups.areVisible() && t.INSTANCES[p].$el.find(".fr-marker").remove();
            a.popups.hideAll();
          }
          e.node.hasClass(i.get(0), "fr-dropdown") ? E(i) : (function(h) {
            g(h);
          }(i), t.COMMANDS[i.data("cmd")] && t.COMMANDS[i.data("cmd")].refreshAfterCallback !== !1 && a.button.bulkRefresh());
        }
        function C(i) {
          m(r(i.currentTarget));
        }
        function O(i) {
          var a = i.find(".fr-dropdown.fr-active");
          a.length && (a.removeClass("fr-active").attr("aria-expanded", !1).next().attr("aria-hidden", !0).css("overflow", "").find("> .fr-dropdown-wrapper").css("height", ""), a.parents(".fr-toolbar:not(.fr-inline)").css("zIndex", ""), a.prev().removeClass("fr-expanded"));
        }
        function U(i) {
          i.preventDefault(), i.stopPropagation();
        }
        function y(i) {
          if (i.stopPropagation(), !e.helpers.isMobile())
            return !1;
        }
        function B(i) {
          var a = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, p = 2 < arguments.length ? arguments[2] : void 0;
          if (e.helpers.isMobile() && a.showOnMobile === !1)
            return "";
          var c = a.displaySelection;
          typeof c == "function" && (c = c(e));
          var h = "";
          if (a.type !== "options")
            if (c) {
              var M = typeof a.defaultSelection == "function" ? a.defaultSelection(e) : a.defaultSelection;
              h = '<span style="width:'.concat(a.displaySelectionWidth || 100, 'px">').concat(e.language.translate(M || a.title), "</span>");
            } else
              h = e.icon.create(a.icon || i), h += '<span class="fr-sr-only">'.concat(e.language.translate(a.title) || "", "</span>");
          var N = a.popup ? ' data-popup="true"' : "", ie = a.modal ? ' data-modal="true"' : "", D = e.shortcuts.get("".concat(i, "."));
          D = D ? " (".concat(D, ")") : "";
          var _ = "".concat(i, "-").concat(e.id), Q = "dropdown-menu-".concat(_), re = '<button id="'.concat(_, '"').concat(a.more_btn ? ' data-group-name="'.concat(_, '" ') : "", 'type="button" tabIndex="-1" role="button"').concat(a.toggle ? ' aria-pressed="false"' : "").concat(a.type === "dropdown" || a.type === "options" ? ' aria-controls="'.concat(Q, '" aria-expanded="false" aria-haspopup="true"') : "").concat(a.disabled ? ' aria-disabled="true"' : "", ' title="').concat(e.language.translate(a.title) || "").concat(D, '" class="fr-command fr-btn').concat(a.type === "dropdown" || a.type == "options" ? " fr-dropdown" : "").concat(a.type == "options" ? " fr-options" : "").concat(a.type == "more" ? " fr-more" : "").concat(a.displaySelection ? " fr-selection" : "").concat(a.back ? " fr-back" : "").concat(a.disabled ? " fr-disabled" : "").concat(p ? "" : " fr-hidden", '" data-cmd="').concat(i, '"').concat(N).concat(ie, ">").concat(h, "</button>");
          if (a.type === "dropdown" || a.type === "options") {
            var q = '<div id="'.concat(Q, '" class="fr-dropdown-menu" role="listbox" aria-labelledby="').concat(_, '" aria-hidden="true"><div class="fr-dropdown-wrapper" role="presentation"><div class="fr-dropdown-content" role="presentation">');
            q += function(se, H) {
              var W = "";
              if (H.html)
                typeof H.html == "function" ? W += H.html.call(e) : W += H.html;
              else {
                var T = H.options;
                for (var S in typeof T == "function" && (T = T()), W += '<ul class="fr-dropdown-list" role="presentation">', T)
                  Object.prototype.hasOwnProperty.call(T, S) && (e.shortcuts.get("".concat(se, ".").concat(S)), W += '<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="'.concat(H.type === "options" ? se.replace(/Options/g, "") : se, '" data-param1="').concat(S, '" title="').concat(T[S], '">').concat(e.language.translate(T[S]), "</a></li>"));
                W += "</ul>";
              }
              return W;
            }(i, a), re += q += "</div></div></div>";
          }
          return a.hasOptions && a.hasOptions.apply(e) && (re = '<div class="fr-btn-wrap">'.concat(re, " ").concat(B(i + "Options", Object.assign({}, a, { type: "options", hasOptions: !1 }), p), "  </div>")), re;
        }
        function I(i) {
          var a = e.$tb && e.$tb.data("instance") || e;
          if (e.events.trigger("buttons.refresh") === !1)
            return !0;
          setTimeout(function() {
            for (var p = a.selection.inEditor() && a.core.hasFocus(), c = 0; c < i.length; c++) {
              var h = r(i[c]), M = h.data("cmd");
              h.parents(".fr-popup").length === 0 ? p || t.COMMANDS[M] && t.COMMANDS[M].forcedRefresh ? a.button.refresh(h) : e.node.hasClass(h.get(0), "fr-dropdown") || (h.removeClass("fr-active"), h.attr("aria-pressed") && h.attr("aria-pressed", !1)) : h.parents(".fr-popup").isVisible() && a.button.refresh(h);
            }
          }, 0);
        }
        function x() {
          I(s), I(d);
        }
        function v() {
          s = [], d = [];
        }
        e.shared.popup_buttons || (e.shared.popup_buttons = []), d = e.shared.popup_buttons;
        var A = null;
        function l() {
          clearTimeout(A), A = setTimeout(x, 50);
        }
        return { _init: function() {
          e.opts.toolbarInline ? e.events.on("toolbar.show", x) : (e.events.on("mouseup", l), e.events.on("keyup", l), e.events.on("blur", l), e.events.on("focus", l), e.events.on("contentChanged", l), e.helpers.isMobile() && e.events.$on(e.$doc, "selectionchange", x)), e.events.on("shared.destroy", v);
        }, build: B, buildList: function(a, p) {
          for (var c = "", h = 0; h < a.length; h++) {
            var M = a[h], N = t.COMMANDS[M];
            N && typeof N.plugin < "u" && e.opts.pluginsEnabled.indexOf(N.plugin) < 0 || (N ? c += B(M, N, p === void 0 || 0 <= p.indexOf(M)) : M === "|" ? c += '<div class="fr-separator fr-vs" role="separator" aria-orientation="vertical"></div>' : M === "-" && (c += '<div class="fr-separator fr-hs" role="separator" aria-orientation="horizontal"></div>'));
          }
          return c;
        }, buildGroup: function(a) {
          var p = "", c = "";
          for (var h in a) {
            var M = a[h];
            if (M.buttons) {
              for (var N = "", ie = "", D = 0, _ = "left", Q = t.TOOLBAR_VISIBLE_BUTTONS, re = 0; re < M.buttons.length; re++) {
                var q = M.buttons[re], ae = t.COMMANDS[q];
                ae || (q == "|" ? N += '<div class="fr-separator fr-vs" role="separator" aria-orientation="vertical"></div>' : q == "-" && (N += '<div class="fr-separator fr-hs" role="separator" aria-orientation="horizontal"></div>')), !ae || ae && typeof ae.plugin < "u" && e.opts.pluginsEnabled.indexOf(ae.plugin) < 0 || (a[h].align !== void 0 && (_ = a[h].align), a[h].buttonsVisible !== void 0 && (Q = a[h].buttonsVisible), a.showMoreButtons && Q <= D ? ie += B(q, ae, !0) : N += B(q, ae, !0), D++);
              }
              if (a.showMoreButtons && Q < D) {
                var se = h, H = t.COMMANDS[se];
                H.more_btn = !0, N += B(se, H, !0);
              }
              p += '<div class="fr-btn-grp fr-float-'.concat(_, '">').concat(N, "</div>"), a.showMoreButtons && 0 < ie.length && (c += '<div class="fr-more-toolbar" data-name="'.concat(h + "-" + e.id, '">').concat(ie, "</div>"));
            }
          }
          return e.opts.toolbarBottom ? "".concat(c, '<div class="fr-newline"></div>').concat(p) : "".concat(p, '<div class="fr-newline"></div>').concat(c);
        }, bindCommands: function(a, p) {
          e.events.bindClick(a, ".fr-command:not(.fr-disabled)", C), e.events.$on(a, "".concat(e._mousedown, " ").concat(e._mouseup, " ").concat(e._move), ".fr-dropdown-menu", U, !0), e.events.$on(a, "".concat(e._mousedown, " ").concat(e._mouseup, " ").concat(e._move), ".fr-dropdown-menu .fr-dropdown-wrapper", y, !0);
          var c = a.get(0).ownerDocument, h = "defaultView" in c ? c.defaultView : c.parentWindow;
          function M(N) {
            (!N || N.type === e._mouseup && N.target !== r("html").get(0) || N.type === "keydown" && (e.keys.isCharacter(N.which) && !e.keys.ctrlKey(N) || N.which === t.KEYCODE.ESC)) && O(a);
          }
          e.events.$on(r(h), "".concat(e._mouseup, " resize keydown"), M, !0), e.opts.iframe && e.events.$on(e.$win, e._mouseup, M, !0), e.node.hasClass(a.get(0), "fr-popup") ? r.merge(d, a.find(".fr-btn").toArray()) : r.merge(s, a.find(".fr-btn").toArray()), e.tooltip.bind(a, ".fr-btn, .fr-title", p);
        }, refresh: function(a) {
          var p, c = a.parents(".fr-popup, .fr-toolbar").data("instance") || e, h = a.data("cmd");
          e.node.hasClass(a.get(0), "fr-dropdown") ? p = a.next() : (a.removeClass("fr-active"), a.attr("aria-pressed") && a.attr("aria-pressed", !1)), t.COMMANDS[h] && t.COMMANDS[h].refresh ? t.COMMANDS[h].refresh.apply(c, [a, p]) : e.refresh[h] && c.refresh[h](a, p);
        }, bulkRefresh: x, exec: g, click: m, hideActiveDropdowns: O, addButtons: function(a) {
          for (var p = 0; p < a.length; p++)
            s.push(a);
        }, getButtons: b, getPosition: function(a) {
          var p = a.offset().left, c = e.opts.toolbarBottom ? 10 : a.outerHeight() - 10;
          return { left: p, top: a.offset().top + c };
        } };
      }, t.ICON_TEMPLATES = { font_awesome: '<i class="fa fa-[NAME]" aria-hidden="true"></i>', font_awesome_5: '<i class="fas fa-[FA5NAME]" aria-hidden="true"></i>', font_awesome_5r: '<i class="far fa-[FA5NAME]" aria-hidden="true"></i>', font_awesome_5l: '<i class="fal fa-[FA5NAME]" aria-hidden="true"></i>', font_awesome_5b: '<i class="fab fa-[FA5NAME]" aria-hidden="true"></i>', text: '<span style="text-align: center;">[NAME]</span>', image: "<img src=[SRC] alt=[ALT] />", svg: '<svg class="fr-svg" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="[PATH]"/></svg>', empty: " " }, t.ICONS = { bold: { NAME: "bold", SVG_KEY: "bold" }, italic: { NAME: "italic", SVG_KEY: "italic" }, underline: { NAME: "underline", SVG_KEY: "underline" }, strikeThrough: { NAME: "strikethrough", SVG_KEY: "strikeThrough" }, subscript: { NAME: "subscript", SVG_KEY: "subscript" }, superscript: { NAME: "superscript", SVG_KEY: "superscript" }, color: { NAME: "tint", SVG_KEY: "textColor" }, outdent: { NAME: "outdent", SVG_KEY: "outdent" }, indent: { NAME: "indent", SVG_KEY: "indent" }, undo: { NAME: "rotate-left", FA5NAME: "undo", SVG_KEY: "undo" }, redo: { NAME: "rotate-right", FA5NAME: "redo", SVG_KEY: "redo" }, insertHR: { NAME: "minus", SVG_KEY: "horizontalLine" }, clearFormatting: { NAME: "eraser", SVG_KEY: "clearFormatting" }, selectAll: { NAME: "mouse-pointer", SVG_KEY: "selectAll" }, moreText: { NAME: "ellipsis-v", SVG_KEY: "textMore" }, moreParagraph: { NAME: "ellipsis-v", SVG_KEY: "paragraphMore" }, moreRich: { NAME: "ellipsis-v", SVG_KEY: "insertMore" }, moreMisc: { NAME: "ellipsis-v", SVG_KEY: "more" } }, t.DefineIconTemplate = function(e, r) {
        t.ICON_TEMPLATES[e] = r;
      }, t.DefineIcon = function(e, r) {
        t.ICONS[e] = r;
      }, Object.assign(t.DEFAULTS, { iconsTemplate: "svg" }), t.MODULES.icon = function(e) {
        return { create: function(s) {
          var d = null, u = t.ICONS[s];
          if (u !== void 0) {
            var b = u.template || t.ICON_DEFAULT_TEMPLATE || e.opts.iconsTemplate;
            b && b.apply && (b = b.apply(e)), u.FA5NAME || (u.FA5NAME = u.NAME), b !== "svg" || u.PATH || (u.PATH = t.SVG[u.SVG_KEY] || ""), b && (b = t.ICON_TEMPLATES[b]) && (d = b.replace(/\[([a-zA-Z0-9]*)\]/g, function(E, g) {
              return g === "NAME" ? u[g] || s : u[g];
            }));
          }
          return d || s;
        }, getTemplate: function(s) {
          var d = t.ICONS[s], u = e.opts.iconsTemplate;
          return d !== void 0 ? u = d.template || t.ICON_DEFAULT_TEMPLATE || e.opts.iconsTemplate : u;
        } };
      }, t.SVG = { add: "M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z", advancedImageEditor: "M3,17v2h6v-2H3z M3,5v2h10V5H3z M13,21v-2h8v-2h-8v-2h-2v6H13z M7,9v2H3v2h4v2h2V9H7z M21,13v-2H11v2H21z M15,9h2V7h4V5h-4  V3h-2V9z", alignCenter: "M9,18h6v-2H9V18z M6,11v2h12v-2H6z M3,6v2h18V6H3z", alignJustify: "M3,18h18v-2H3V18z M3,11v2h18v-2H3z M3,6v2h18V6H3z", alignLeft: "M3,18h6v-2H3V18z M3,11v2h12v-2H3z M3,6v2h18V6H3z", alignRight: "M15,18h6v-2h-6V18z M9,11v2h12v-2H9z M3,6v2h18V6H3z", anchors: "M16,4h-4H8C6.9,4,6,4.9,6,6v4v10l6-2.6l6,2.6V10V6C18,4.9,17.1,4,16,4z M16,17l-4-1.8L8,17v-7V6h4h4v4V17z", back: "M20 11L7.83 11 11.425 7.405 10.01 5.991 5.416 10.586 5.414 10.584 4 11.998 4.002 12 4 12.002 5.414 13.416 5.416 13.414 10.01 18.009 11.425 16.595 7.83 13 20 13 20 13 20 11 20 11Z", backgroundColor: "M9.91752,12.24082l7.74791-5.39017,1.17942,1.29591-6.094,7.20747L9.91752,12.24082M7.58741,12.652l4.53533,4.98327a.93412.93412,0,0,0,1.39531-.0909L20.96943,8.7314A.90827.90827,0,0,0,20.99075,7.533l-2.513-2.76116a.90827.90827,0,0,0-1.19509-.09132L7.809,11.27135A.93412.93412,0,0,0,7.58741,12.652ZM2.7939,18.52772,8.41126,19.5l1.47913-1.34617-3.02889-3.328Z", blockquote: "M10.31788,5l.93817,1.3226A12.88271,12.88271,0,0,0,8.1653,9.40125a5.54242,5.54242,0,0,0-.998,3.07866v.33733q.36089-.04773.66067-.084a4.75723,4.75723,0,0,1,.56519-.03691,2.87044,2.87044,0,0,1,2.11693.8427,2.8416,2.8416,0,0,1,.8427,2.09274,3.37183,3.37183,0,0,1-.8898,2.453A3.143,3.143,0,0,1,8.10547,19,3.40532,3.40532,0,0,1,5.375,17.7245,4.91156,4.91156,0,0,1,4.30442,14.453,9.3672,9.3672,0,0,1,5.82051,9.32933,14.75716,14.75716,0,0,1,10.31788,5Zm8.39243,0,.9369,1.3226a12.88289,12.88289,0,0,0-3.09075,3.07865,5.54241,5.54241,0,0,0-.998,3.07866v.33733q.33606-.04773.63775-.084a4.91773,4.91773,0,0,1,.58938-.03691,2.8043,2.8043,0,0,1,2.1042.83,2.89952,2.89952,0,0,1,.80578,2.10547,3.42336,3.42336,0,0,1-.86561,2.453A3.06291,3.06291,0,0,1,16.49664,19,3.47924,3.47924,0,0,1,13.742,17.7245,4.846,4.846,0,0,1,12.64721,14.453,9.25867,9.25867,0,0,1,14.17476,9.3898,15.26076,15.26076,0,0,1,18.71031,5Z", bold: "M15.25,11.8h0A3.68,3.68,0,0,0,17,9a3.93,3.93,0,0,0-3.86-4H6.65V19h7a3.74,3.74,0,0,0,3.7-3.78V15.1A3.64,3.64,0,0,0,15.25,11.8ZM8.65,7h4.2a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61,2.23,2.23,0,0,1-.63.09H8.65Zm4.6,10H8.65V13h4.6a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61A2.23,2.23,0,0,1,13.25,17Z", cellBackground: "M16.6,12.4L7.6,3.5L6.2,4.9l2.4,2.4l-5.2,5.2c-0.6,0.6-0.6,1.5,0,2.1l5.5,5.5c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4  l5.5-5.5C17.2,14,17.2,13,16.6,12.4z M5.2,13.5L10,8.7l4.8,4.8H5.2z M19,15c0,0-2,2.2-2,3.5c0,1.1,0.9,2,2,2s2-0.9,2-2  C21,17.2,19,15,19,15z", cellBorderColor: "M22,22H2v2h20V22z", cellOptions: "M20,5H4C2.9,5,2,5.9,2,7v10c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V7C22,5.9,21.1,5,20,5z M9.5,6.5h5V9h-5V6.5z M8,17.5H4  c-0.3,0-0.5-0.2-0.5-0.4c0,0,0,0,0,0V17v-2H8V17.5z M8,13.5H3.5v-3H8V13.5z M8,9H3.5V7c0-0.3,0.2-0.5,0.4-0.5c0,0,0,0,0,0H8V9z   M14.5,17.5h-5V15h5V17.5z M20.5,17c0,0.3-0.2,0.5-0.4,0.5c0,0,0,0,0,0H16V15h4.5V17z M20.5,13.5H16v-3h4.5V13.5z M20.5,9H16V6.5h4  c0.3,0,0.5,0.2,0.5,0.4c0,0,0,0,0,0V9z", cellStyle: "M20,19.9l0.9,3.6l-3.2-1.9l-3.3,1.9l0.8-3.6L12.3,17h3.8l1.7-3.5l1.4,3.5H23L20,19.9z M20,5H4C2.9,5,2,5.9,2,7v10  c0,1.1,0.9,2,2,2h7.5l-0.6-0.6L10,17.5H9.5V15h5.4l1.1-2.3v-2.2h4.5v3H20l0.6,1.5H22V7C22,5.9,21.1,5,20,5z M3.5,7  c0-0.3,0.2-0.5,0.4-0.5c0,0,0,0,0.1,0h4V9H3.5V7z M3.5,10.5H8v3H3.5V10.5z M4,17.5c-0.3,0-0.5-0.2-0.5-0.4c0,0,0,0,0-0.1v-2H8v2.5H4  z M14.5,9h-5V6.5h5V9z M20.5,9H16V6.5h4c0.3,0,0.5,0.2,0.5,0.4c0,0,0,0,0,0.1V9z", clearFormatting: "M11.48,10.09l-1.2-1.21L8.8,7.41,6.43,5,5.37,6.1,8.25,9,4.66,19h2l1.43-4h5.14l1.43,4h2l-.89-2.51L18.27,19l1.07-1.06L14.59,13.2ZM8.8,13l.92-2.56L12.27,13Zm.56-7.15L9.66,5h2l1.75,4.9Z", close: "M13.4,12l5.6,5.6L17.6,19L12,13.4L6.4,19L5,17.6l5.6-5.6L5,6.4L6.4,5l5.6,5.6L17.6,5L19,6.4L13.4,12z", codeView: "M9.4,16.6,4.8,12,9.4,7.4,8,6,2,12l6,6Zm5.2,0L19.2,12,14.6,7.4,16,6l6,6-6,6Z", cogs: "M18.877 12.907a6.459 6.459 0 0 0 0 -1.814l1.952 -1.526a0.468 0.468 0 0 0 0.111 -0.593l-1.851 -3.2a0.461 0.461 0 0 0 -0.407 -0.231 0.421 0.421 0 0 0 -0.157 0.028l-2.3 0.925a6.755 6.755 0 0 0 -1.563 -0.907l-0.352 -2.452a0.451 0.451 0 0 0 -0.453 -0.388h-3.7a0.451 0.451 0 0 0 -0.454 0.388L9.347 5.588A7.077 7.077 0 0 0 7.783 6.5l-2.3 -0.925a0.508 0.508 0 0 0 -0.166 -0.028 0.457 0.457 0 0 0 -0.4 0.231l-1.851 3.2a0.457 0.457 0 0 0 0.111 0.593l1.952 1.526A7.348 7.348 0 0 0 5.063 12a7.348 7.348 0 0 0 0.064 0.907L3.175 14.433a0.468 0.468 0 0 0 -0.111 0.593l1.851 3.2a0.461 0.461 0 0 0 0.407 0.231 0.421 0.421 0 0 0 0.157 -0.028l2.3 -0.925a6.74 6.74 0 0 0 1.564 0.907L9.7 20.864a0.451 0.451 0 0 0 0.454 0.388h3.7a0.451 0.451 0 0 0 0.453 -0.388l0.352 -2.452a7.093 7.093 0 0 0 1.563 -0.907l2.3 0.925a0.513 0.513 0 0 0 0.167 0.028 0.457 0.457 0 0 0 0.4 -0.231l1.851 -3.2a0.468 0.468 0 0 0 -0.111 -0.593Zm-0.09 2.029l-0.854 1.476 -2.117 -0.852 -0.673 0.508a5.426 5.426 0 0 1 -1.164 0.679l-0.795 0.323 -0.33 2.269h-1.7l-0.32 -2.269 -0.793 -0.322a5.3 5.3 0 0 1 -1.147 -0.662L8.2 15.56l-2.133 0.86 -0.854 -1.475 1.806 -1.411 -0.1 -0.847c-0.028 -0.292 -0.046 -0.5 -0.046 -0.687s0.018 -0.4 0.045 -0.672l0.106 -0.854L5.217 9.064l0.854 -1.475 2.117 0.851 0.673 -0.508a5.426 5.426 0 0 1 1.164 -0.679l0.8 -0.323 0.331 -2.269h1.7l0.321 2.269 0.792 0.322a5.3 5.3 0 0 1 1.148 0.661l0.684 0.526 2.133 -0.859 0.853 1.473 -1.8 1.421 0.1 0.847a5 5 0 0 1 0.046 0.679c0 0.193 -0.018 0.4 -0.045 0.672l-0.106 0.853ZM12 14.544A2.544 2.544 0 1 1 14.546 12 2.552 2.552 0 0 1 12 14.544Z", columns: "M20,5H4C2.9,5,2,5.9,2,7v10c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V7C22,5.9,21.1,5,20,5z M8,17.5H4c-0.3,0-0.5-0.2-0.5-0.4  c0,0,0,0,0,0V17v-2H8V17.5z M8,13.5H3.5v-3H8V13.5z M8,9H3.5V7c0-0.3,0.2-0.5,0.4-0.5c0,0,0,0,0,0H8V9z M20.5,17  c0,0.3-0.2,0.5-0.4,0.5c0,0,0,0,0,0H16V15h4.5V17z M20.5,13.5H16v-3h4.5V13.5z M20.5,9H16V6.5h4c0.3,0,0.5,0.2,0.5,0.4c0,0,0,0,0,0  V9z", edit: "M17,11.2L12.8,7L5,14.8V19h4.2L17,11.2z M7,16.8v-1.5l5.6-5.6l1.4,1.5l-5.6,5.6H7z M13.5,6.3l0.7-0.7c0.8-0.8,2.1-0.8,2.8,0  c0,0,0,0,0,0L18.4,7c0.8,0.8,0.8,2,0,2.8l-0.7,0.7L13.5,6.3z", exitFullscreen: "M5,16H8v3h2V14H5ZM8,8H5v2h5V5H8Zm6,11h2V16h3V14H14ZM16,8V5H14v5h5V8Z", fontAwesome: "M18.99018,13.98212V7.52679c-.08038-1.21875-1.33929-.683-1.33929-.683-2.933,1.39282-4.36274.61938-5.85938.15625a6.23272,6.23272,0,0,0-2.79376-.20062l-.00946.004A1.98777,1.98777,0,0,0,7.62189,5.106a.984.984,0,0,0-.17517-.05432c-.02447-.0055-.04882-.01032-.0736-.0149A.9565.9565,0,0,0,7.1908,5H6.82539a.9565.9565,0,0,0-.18232.0368c-.02472.00458-.04907.0094-.07348.01484a.985.985,0,0,0-.17523.05438,1.98585,1.98585,0,0,0-.573,3.49585v9.394A1.004,1.004,0,0,0,6.82539,19H7.1908a1.00406,1.00406,0,0,0,1.00409-1.00409V15.52234c3.64221-1.09827,5.19709.64282,7.09888.57587a5.57291,5.57291,0,0,0,3.25446-1.05805A1.2458,1.2458,0,0,0,18.99018,13.98212Z", fontFamily: "M16,19h2L13,5H11L6,19H8l1.43-4h5.14Zm-5.86-6L12,7.8,13.86,13Z", fontSize: "M20.75,19h1.5l-3-10h-1.5l-3,10h1.5L17,16.5h3Zm-3.3-4,1.05-3.5L19.55,15Zm-5.7,4h2l-5-14h-2l-5,14h2l1.43-4h5.14ZM5.89,13,7.75,7.8,9.61,13Z", fullscreen: "M7,14H5v5h5V17H7ZM5,10H7V7h3V5H5Zm12,7H14v2h5V14H17ZM14,5V7h3v3h2V5Z", help: "M11,17h2v2h-2V17z M12,5C9.8,5,8,6.8,8,9h2c0-1.1,0.9-2,2-2s2,0.9,2,2c0,2-3,1.7-3,5v1h2v-1c0-2.2,3-2.5,3-5  C16,6.8,14.2,5,12,5z", horizontalLine: "M5,12h14 M19,11H5v2h14V11z", imageAltText: "M19,7h-6v12h-2V7H5V5h6h2h6V7z", imageCaption: "M14.2,11l3.8,5H6l3-3.9l2.1,2.7L14,11H14.2z M8.5,11c0.8,0,1.5-0.7,1.5-1.5S9.3,8,8.5,8S7,8.7,7,9.5C7,10.3,7.7,11,8.5,11z   M22,6v12c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h16C21.1,4,22,4.9,22,6z M20,8.8V6H4v12h16V8.8z M22,22H2v2h20V22z", imageClass: "M9.5,13.4l-2.9-2.9h3.8L12.2,7l1.4,3.5h3.8l-3,2.9l0.9,3.6L12,15.1L8.8,17L9.5,13.4z M22,6v12c0,1.1-0.9,2-2,2H4  c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h16C21.1,4,22,4.9,22,6z M20,6H4v12h16V8.8V6z", imageDisplay: "M3,5h18v2H3V5z M13,9h8v2h-8V9z M13,13h8v2h-8V13z M3,17h18v2H3V17z M3,9h8v6H3V9z", imageManager: "M20,6h-7l-2-2H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8C22,6.9,21.1,6,20,6z M20,18H4V6h6.2l2,2H20V18z   M18,16l-3.8-5H14l-2.9,3.8L9,12.1L6,16H18z M10,9.5C10,8.7,9.3,8,8.5,8S7,8.7,7,9.5S7.7,11,8.5,11S10,10.3,10,9.5z", imageSize: "M16.9,4c-0.3,0-0.5,0.2-0.8,0.3L3.3,13c-0.9,0.6-1.1,1.9-0.5,2.8l2.2,3.3c0.4,0.7,1.2,1,2,0.8c0.3,0,0.5-0.2,0.8-0.3  L20.7,11c0.9-0.6,1.1-1.9,0.5-2.8l-2.2-3.3C18.5,4.2,17.7,3.9,16.9,4L16.9,4z M16.9,9.9L18.1,9l-2-2.9L17,5.6c0.1,0,0.1-0.1,0.2-0.1  c0.2,0,0.4,0,0.5,0.2L19.9,9c0.2,0.2,0.1,0.5-0.1,0.7L7,18.4c-0.1,0-0.1,0.1-0.2,0.1c-0.2,0-0.4,0-0.5-0.2L4.1,15  c-0.2-0.2-0.1-0.5,0.1-0.7L5,13.7l2,2.9l1.2-0.8l-2-2.9L7.5,12l1.1,1.7l1.2-0.8l-1.1-1.7l1.2-0.8l2,2.9l1.2-0.8l-2-2.9l1.2-0.8  l1.1,1.7l1.2-0.8l-1.1-1.7L14.9,7L16.9,9.9z", indent: "M3,9v6l3-3L3,9z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z", inlineClass: "M9.9,13.313A1.2,1.2,0,0,1,9.968,13H6.277l1.86-5.2,1.841,5.148A1.291,1.291,0,0,1,11.212,12h.426l-2.5-7h-2l-5,14h2l1.43-4H9.9Zm2.651,6.727a2.884,2.884,0,0,1-.655-2.018v-2.71A1.309,1.309,0,0,1,13.208,14h3.113a3.039,3.039,0,0,1,2,1.092s1.728,1.818,2.964,2.928a1.383,1.383,0,0,1,.318,1.931,1.44,1.44,0,0,1-.19.215l-3.347,3.31a1.309,1.309,0,0,1-1.832.258h0a1.282,1.282,0,0,1-.258-.257l-1.71-1.728Zm2.48-3.96a.773.773,0,1,0,.008,0Z", inlineStyle: "M11.88,15h.7l.7-1.7-3-8.3h-2l-5,14h2l1.4-4Zm-4.4-2,1.9-5.2,1.9,5.2ZM15.4,21.545l3.246,1.949-.909-3.637L20.72,17H16.954l-1.429-3.506L13.837,17H10.071l2.857,2.857-.779,3.637Z", insertEmbed: "M20.73889,15.45929a3.4768,3.4768,0,0,0-5.45965-.28662L9.5661,12.50861a3.49811,3.49811,0,0,0-.00873-1.01331l5.72174-2.66809a3.55783,3.55783,0,1,0-.84527-1.81262L8.70966,9.6839a3.50851,3.50851,0,1,0,.0111,4.63727l5.7132,2.66412a3.49763,3.49763,0,1,0,6.30493-1.526ZM18.00745,5.01056A1.49993,1.49993,0,1,1,16.39551,6.3894,1.49994,1.49994,0,0,1,18.00745,5.01056ZM5.99237,13.49536a1.49989,1.49989,0,1,1,1.61194-1.37878A1.49982,1.49982,0,0,1,5.99237,13.49536Zm11.78211,5.494a1.49993,1.49993,0,1,1,1.61193-1.37885A1.49987,1.49987,0,0,1,17.77448,18.98932Z", insertFile: "M7,3C5.9,3,5,3.9,5,5v14c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V7.6L14.4,3H7z M17,19H7V5h6v4h4V19z", insertImage: "M14.2,11l3.8,5H6l3-3.9l2.1,2.7L14,11H14.2z M8.5,11c0.8,0,1.5-0.7,1.5-1.5S9.3,8,8.5,8S7,8.7,7,9.5C7,10.3,7.7,11,8.5,11z   M22,6v12c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h16C21.1,4,22,4.9,22,6z M20,8.8V6H4v12h16V8.8z", insertLink: "M11,17H7A5,5,0,0,1,7,7h4V9H7a3,3,0,0,0,0,6h4ZM17,7H13V9h4a3,3,0,0,1,0,6H13v2h4A5,5,0,0,0,17,7Zm-1,4H8v2h8Z", insertMore: "M16.5,13h-6v6h-2V13h-6V11h6V5h2v6h6Zm5,4.5A1.5,1.5,0,1,1,20,16,1.5,1.5,0,0,1,21.5,17.5Zm0-4A1.5,1.5,0,1,1,20,12,1.5,1.5,0,0,1,21.5,13.5Zm0-4A1.5,1.5,0,1,1,20,8,1.5,1.5,0,0,1,21.5,9.5Z", insertTable: "M20,5H4C2.9,5,2,5.9,2,7v2v1.5v3V15v2c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-2v-1.5v-3V9V7C22,5.9,21.1,5,20,5z M9.5,13.5v-3  h5v3H9.5z M14.5,15v2.5h-5V15H14.5z M9.5,9V6.5h5V9H9.5z M3.5,7c0-0.3,0.2-0.5,0.5-0.5h4V9H3.5V7z M3.5,10.5H8v3H3.5V10.5z M3.5,17  v-2H8v2.5H4C3.7,17.5,3.5,17.3,3.5,17z M20.5,17c0,0.3-0.2,0.5-0.5,0.5h-4V15h4.5V17z M20.5,13.5H16v-3h4.5V13.5z M16,9V6.5h4  c0.3,0,0.5,0.2,0.5,0.5v2H16z", insertVideo: "M15,8v8H5V8H15m2,2.5V7a1,1,0,0,0-1-1H4A1,1,0,0,0,3,7V17a1,1,0,0,0,1,1H16a1,1,0,0,0,1-1V13.5l2.29,2.29A1,1,0,0,0,21,15.08V8.91a1,1,0,0,0-1.71-.71Z", upload: "M12 6.66667a4.87654 4.87654 0 0 1 4.77525 3.92342l0.29618 1.50268 1.52794 0.10578a2.57021 2.57021 0 0 1 -0.1827 5.13478H6.5a3.49774 3.49774 0 0 1 -0.3844 -6.97454l1.06682 -0.11341L7.678 9.29387A4.86024 4.86024 0 0 1 12 6.66667m0 -2A6.871 6.871 0 0 0 5.90417 8.37 5.49773 5.49773 0 0 0 6.5 19.33333H18.41667a4.57019 4.57019 0 0 0 0.32083 -9.13A6.86567 6.86567 0 0 0 12 4.66667Zm0.99976 7.2469h1.91406L11.99976 9 9.08618 11.91357h1.91358v3H11V16h2V14h-0.00024Z", italic: "M11.76,9h2l-2.2,10h-2Zm1.68-4a1,1,0,1,0,1,1,1,1,0,0,0-1-1Z", search: "M15.5 14h-0.79l-0.28 -0.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09 -0.59 4.23 -1.57l0.27 0.28v0.79l5 4.99L20.49 19l-4.99 -5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z", lineHeight: "M6.25,7h2.5L5.25,3.5,1.75,7h2.5V17H1.75l3.5,3.5L8.75,17H6.25Zm4-2V7h12V5Zm0,14h12V17h-12Zm0-6h12V11h-12Z", linkStyles: "M19,17.9l0.9,3.6l-3.2-1.9l-3.3,1.9l0.8-3.6L11.3,15h3.8l1.7-3.5l1.4,3.5H22L19,17.9z M20,12c0,0.3-0.1,0.7-0.2,1h2.1  c0.1-0.3,0.1-0.6,0.1-1c0-2.8-2.2-5-5-5h-4v2h4C18.7,9,20,10.3,20,12z M14.8,11H8v2h3.3h2.5L14.8,11z M9.9,16.4L8.5,15H7  c-1.7,0-3-1.3-3-3s1.3-3,3-3h4V7H7c-2.8,0-5,2.2-5,5s2.2,5,5,5h3.5L9.9,16.4z", mention: "M12.4,5c-4.1,0-7.5,3.4-7.5,7.5S8.3,20,12.4,20h3.8v-1.5h-3.8c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6v1.1  c0,0.6-0.5,1.2-1.1,1.2s-1.1-0.6-1.1-1.2v-1.1c0-2.1-1.7-3.8-3.8-3.8s-3.7,1.7-3.7,3.8s1.7,3.8,3.8,3.8c1,0,2-0.4,2.7-1.1  c0.5,0.7,1.3,1.1,2.2,1.1c1.5,0,2.6-1.2,2.6-2.7v-1.1C19.9,8.4,16.6,5,12.4,5z M12.4,14.7c-1.2,0-2.3-1-2.3-2.2s1-2.3,2.3-2.3  s2.3,1,2.3,2.3S13.6,14.7,12.4,14.7z", more: "M13.5,17c0,0.8-0.7,1.5-1.5,1.5s-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5S13.5,16.2,13.5,17z M13.5,12c0,0.8-0.7,1.5-1.5,1.5 s-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5S13.5,11.2,13.5,12z M13.5,7c0,0.8-0.7,1.5-1.5,1.5S10.5,7.8,10.5,7s0.7-1.5,1.5-1.5 S13.5,6.2,13.5,7z", openLink: "M17,17H7V7h3V5H7C6,5,5,6,5,7v10c0,1,1,2,2,2h10c1,0,2-1,2-2v-3h-2V17z M14,5v2h1.6l-5.8,5.8l1.4,1.4L17,8.4V10h2V5H14z", orderedList: "M2.5,16h2v.5h-1v1h1V18h-2v1h3V15h-3Zm1-7h1V5h-2V6h1Zm-1,2H4.3L2.5,13.1V14h3V13H3.7l1.8-2.1V10h-3Zm5-5V8h14V6Zm0,12h14V16H7.5Zm0-5h14V11H7.5Z", outdent: "M3,12l3,3V9L3,12z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z", pageBreaker: "M3,9v6l3-3L3,9z M21,9H8V4h2v3h9V4h2V9z M21,20h-2v-3h-9v3H8v-5h13V20z M11,13H8v-2h3V13z M16,13h-3v-2h3V13z M21,13h-3v-2  h3V13z", paragraphFormat: "M10.15,5A4.11,4.11,0,0,0,6.08,8.18,4,4,0,0,0,10,13v6h2V7h2V19h2V7h2V5ZM8,9a2,2,0,0,1,2-2v4A2,2,0,0,1,8,9Z", paragraphMore: "M7.682,5a4.11,4.11,0,0,0-4.07,3.18,4,4,0,0,0,3.11,4.725h0l.027.005a3.766,3.766,0,0,0,.82.09v6h2V7h2V19h2V7h2V5ZM5.532,9a2,2,0,0,1,2-2v4A2,2,0,0,1,5.532,9Zm14.94,8.491a1.5,1.5,0,1,1-1.5-1.5A1.5,1.5,0,0,1,20.472,17.491Zm0-4a1.5,1.5,0,1,1-1.5-1.5A1.5,1.5,0,0,1,20.472,13.491Zm0-4a1.5,1.5,0,1,1-1.5-1.5A1.5,1.5,0,0,1,20.472,9.491Z", paragraphStyle: "M4,9c0-1.1,0.9-2,2-2v4C4.9,11,4,10.1,4,9z M16.7,20.5l3.2,1.9L19,18.8l3-2.9h-3.7l-1.4-3.5L15.3,16h-3.8l2.9,2.9l-0.9,3.6  L16.7,20.5z M10,17.4V19h1.6L10,17.4z M6.1,5c-1.9,0-3.6,1.3-4,3.2c-0.5,2.1,0.8,4.2,2.9,4.7c0,0,0,0,0,0h0.2C5.5,13,5.8,13,6,13v6  h2V7h2v7h2V7h2V5H6.1z", pdfExport: "M7,3C5.9,3,5,3.9,5,5v14c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V7.6L14.4,3H7z M17,19H7V5h6v4h4V19z M16.3,13.5  c-0.2-0.6-1.1-0.8-2.6-0.8c-0.1,0-0.1,0-0.2,0c-0.3-0.3-0.8-0.9-1-1.2c-0.2-0.2-0.3-0.3-0.4-0.6c0.2-0.7,0.2-1,0.3-1.5  c0.1-0.9,0-1.6-0.2-1.8c-0.4-0.2-0.7-0.2-0.9-0.2c-0.1,0-0.3,0.2-0.7,0.7c-0.2,0.7-0.1,1.8,0.6,2.8c-0.2,0.8-0.7,1.6-1,2.4  c-0.8,0.2-1.5,0.7-1.9,1.1c-0.7,0.7-0.9,1.1-0.7,1.6c0,0.3,0.2,0.6,0.7,0.6c0.3-0.1,0.3-0.2,0.7-0.3c0.6-0.3,1.2-1.7,1.7-2.4  c0.8-0.2,1.7-0.3,2-0.3c0.1,0,0.3,0,0.6,0c0.8,0.8,1.2,1.1,1.8,1.2c0.1,0,0.2,0,0.3,0c0.3,0,0.8-0.1,1-0.6  C16.4,14.1,16.4,13.9,16.3,13.5z M8.3,15.7c-0.1,0.1-0.2,0.1-0.2,0.1c0-0.1,0-0.3,0.6-0.8c0.2-0.2,0.6-0.3,0.9-0.7  C9,15,8.6,15.5,8.3,15.7z M11.3,9c0-0.1,0.1-0.2,0.1-0.2S11.6,9,11.5,10c0,0.1,0,0.3-0.1,0.7C11.3,10.1,11,9.5,11.3,9z M10.9,13.1  c0.2-0.6,0.6-1,0.7-1.5c0.1,0.1,0.1,0.1,0.2,0.2c0.1,0.2,0.3,0.7,0.7,0.9C12.2,12.8,11.6,13,10.9,13.1z M15.2,14.1  c-0.1,0-0.1,0-0.2,0c-0.2,0-0.7-0.2-1-0.7c1.1,0,1.6,0.2,1.6,0.6C15.5,14.1,15.4,14.1,15.2,14.1z", print: "M16.1,17c0-0.6,0.4-1,1-1c0.6,0,1,0.4,1,1s-0.4,1-1,1C16.5,18,16.1,17.6,16.1,17z M22,15v4c0,1.1-0.9,2-2,2H4  c-1.1,0-2-0.9-2-2v-4c0-1.1,0.9-2,2-2h1V5c0-1.1,0.9-2,2-2h7.4L19,7.6V13h1C21.1,13,22,13.9,22,15z M7,13h10V9h-4V5H7V13z M20,15H4  v4h16V15z", redo: "M13.6,9.4c1.7,0.3,3.2,0.9,4.6,2L21,8.5v7h-7l2.7-2.7C13,10.1,7.9,11,5.3,14.7c-0.2,0.3-0.4,0.5-0.5,0.8L3,14.6  C5.1,10.8,9.3,8.7,13.6,9.4z", removeTable: "M15,10v8H9v-8H15 M14,4H9.9l-1,1H6v2h12V5h-3L14,4z M17,8H7v10c0,1.1,0.9,2,2,2h6c1.1,0,2-0.9,2-2V8z", remove: "M15,10v8H9v-8H15 M14,4H9.9l-1,1H6v2h12V5h-3L14,4z M17,8H7v10c0,1.1,0.9,2,2,2h6c1.1,0,2-0.9,2-2V8z", replaceImage: "M16,5v3H4v2h12v3l4-4L16,5z M8,19v-3h12v-2H8v-3l-4,4L8,19z", row: "M20,5H4C2.9,5,2,5.9,2,7v2v1.5v3V15v2c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-2v-1.5v-3V9V7C22,5.9,21.1,5,20,5z M16,6.5h4  c0.3,0,0.5,0.2,0.5,0.5v2H16V6.5z M9.5,6.5h5V9h-5V6.5z M3.5,7c0-0.3,0.2-0.5,0.5-0.5h4V9H3.5V7z M8,17.5H4c-0.3,0-0.5-0.2-0.5-0.5  v-2H8V17.5z M14.5,17.5h-5V15h5V17.5z M20.5,17c0,0.3-0.2,0.5-0.5,0.5h-4V15h4.5V17z", selectAll: "M5,7h2V5C5.9,5,5,5.9,5,7z M5,11h2V9H5V11z M9,19h2v-2H9V19z M5,11h2V9H5V11z M15,5h-2v2h2V5z M17,5v2h2C19,5.9,18.1,5,17,5  z M7,19v-2H5C5,18.1,5.9,19,7,19z M5,15h2v-2H5V15z M11,5H9v2h2V5z M13,19h2v-2h-2V19z M17,11h2V9h-2V11z M17,19c1.1,0,2-0.9,2-2h-2  V19z M17,11h2V9h-2V11z M17,15h2v-2h-2V15z M13,19h2v-2h-2V19z M13,7h2V5h-2V7z M9,15h6V9H9V15z M11,11h2v2h-2V11z", smile: "M11.991,3A9,9,0,1,0,21,12,8.99557,8.99557,0,0,0,11.991,3ZM12,19a7,7,0,1,1,7-7A6.99808,6.99808,0,0,1,12,19Zm3.105-5.2h1.503a4.94542,4.94542,0,0,1-9.216,0H8.895a3.57808,3.57808,0,0,0,6.21,0ZM7.5,9.75A1.35,1.35,0,1,1,8.85,11.1,1.35,1.35,0,0,1,7.5,9.75Zm6.3,0a1.35,1.35,0,1,1,1.35,1.35A1.35,1.35,0,0,1,13.8,9.75Z", spellcheck: "M19.1,13.6l-5.6,5.6l-2.7-2.7l-1.4,1.4l4.1,4.1l7-7L19.1,13.6z M10.8,13.7l2.7,2.7l0.8-0.8L10.5,5h-2l-5,14h2l1.4-4h2.6  L10.8,13.7z M9.5,7.8l1.9,5.2H7.6L9.5,7.8z", star: "M12.1,7.7l1,2.5l0.4,0.9h1h2.4l-2.1,2l-0.6,0.6l0.2,0.9l0.6,2.3l-2.2-1.3L12,15.2l-0.8,0.5L9,17l0.5-2.5l0.1-0.8L9,13.1  l-2-2h2.5h0.9l0.4-0.8L12.1,7.7 M12.2,4L9.5,9.6H3.4L8,14.2L6.9,20l5.1-3.1l5.3,3.1l-1.5-5.8l4.8-4.6h-6.1L12.2,4L12.2,4z", strikeThrough: "M3,12.20294H21v1.5H16.63422a3.59782,3.59782,0,0,1,.34942,1.5929,3.252,3.252,0,0,1-1.31427,2.6997A5.55082,5.55082,0,0,1,12.20251,19a6.4421,6.4421,0,0,1-2.62335-.539,4.46335,4.46335,0,0,1-1.89264-1.48816,3.668,3.668,0,0,1-.67016-2.15546V14.704h.28723v-.0011h.34149v.0011H9.02v.11334a2.18275,2.18275,0,0,0,.85413,1.83069,3.69,3.69,0,0,0,2.32836.67926,3.38778,3.38778,0,0,0,2.07666-.5462,1.73346,1.73346,0,0,0,.7013-1.46655,1.69749,1.69749,0,0,0-.647-1.43439,3.00525,3.00525,0,0,0-.27491-.17725H3ZM16.34473,7.05981A4.18163,4.18163,0,0,0,14.6236,5.5462,5.627,5.627,0,0,0,12.11072,5,5.16083,5.16083,0,0,0,8.74719,6.06213,3.36315,3.36315,0,0,0,7.44006,8.76855a3.22923,3.22923,0,0,0,.3216,1.42786h2.59668c-.08338-.05365-.18537-.10577-.25269-.16064a1.60652,1.60652,0,0,1-.65283-1.30036,1.79843,1.79843,0,0,1,.68842-1.5108,3.12971,3.12971,0,0,1,1.96948-.55243,3.04779,3.04779,0,0,1,2.106.6687,2.35066,2.35066,0,0,1,.736,1.83258v.11341h2.00317V9.17346A3.90013,3.90013,0,0,0,16.34473,7.05981Z", subscript: "M10.4,12l3.6,3.6L12.6,17L9,13.4L5.4,17L4,15.6L7.6,12L4,8.4L5.4,7L9,10.6L12.6,7L14,8.4L10.4,12z M18.31234,19.674  l1.06812-1.1465c0.196-0.20141,0.37093-0.40739,0.5368-0.6088c0.15975-0.19418,0.30419-0.40046,0.432-0.617  c0.11969-0.20017,0.21776-0.41249,0.29255-0.6334c0.07103-0.21492,0.10703-0.43986,0.10662-0.66621  c0.00297-0.28137-0.04904-0.56062-0.1531-0.82206c-0.09855-0.24575-0.25264-0.46534-0.45022-0.6416  c-0.20984-0.18355-0.45523-0.32191-0.72089-0.40646c-0.63808-0.19005-1.3198-0.17443-1.94851,0.04465  c-0.28703,0.10845-0.54746,0.2772-0.76372,0.49487c-0.20881,0.20858-0.37069,0.45932-0.47483,0.73548  c-0.10002,0.26648-0.15276,0.54838-0.15585,0.833l-0.00364,0.237H17.617l0.00638-0.22692  c0.00158-0.12667,0.01966-0.25258,0.05377-0.37458c0.03337-0.10708,0.08655-0.20693,0.15679-0.29437  c0.07105-0.08037,0.15959-0.14335,0.25882-0.1841c0.22459-0.08899,0.47371-0.09417,0.7018-0.01458  c0.0822,0.03608,0.15559,0.08957,0.21509,0.15679c0.06076,0.07174,0.10745,0.15429,0.13761,0.24333  c0.03567,0.10824,0.05412,0.22141,0.05469,0.33538c-0.00111,0.08959-0.0118,0.17881-0.0319,0.26612  c-0.02913,0.10428-0.07076,0.20465-0.124,0.29893c-0.07733,0.13621-0.1654,0.26603-0.26338,0.38823  c-0.13438,0.17465-0.27767,0.34226-0.42929,0.50217l-2.15634,2.35315V21H21v-1.326H18.31234z", superscript: "M10.4,12,14,15.6,12.6,17,9,13.4,5.4,17,4,15.6,7.6,12,4,8.4,5.4,7,9,10.6,12.6,7,14,8.4Zm8.91234-3.326,1.06812-1.1465c.196-.20141.37093-.40739.5368-.6088a4.85745,4.85745,0,0,0,.432-.617,3.29,3.29,0,0,0,.29255-.6334,2.11079,2.11079,0,0,0,.10662-.66621,2.16127,2.16127,0,0,0-.1531-.82206,1.7154,1.7154,0,0,0-.45022-.6416,2.03,2.03,0,0,0-.72089-.40646,3.17085,3.17085,0,0,0-1.94851.04465,2.14555,2.14555,0,0,0-.76372.49487,2.07379,2.07379,0,0,0-.47483.73548,2.446,2.446,0,0,0-.15585.833l-.00364.237H18.617L18.62338,5.25a1.45865,1.45865,0,0,1,.05377-.37458.89552.89552,0,0,1,.15679-.29437.70083.70083,0,0,1,.25882-.1841,1.00569,1.00569,0,0,1,.7018-.01458.62014.62014,0,0,1,.21509.15679.74752.74752,0,0,1,.13761.24333,1.08893,1.08893,0,0,1,.05469.33538,1.25556,1.25556,0,0,1-.0319.26612,1.34227,1.34227,0,0,1-.124.29893,2.94367,2.94367,0,0,1-.26338.38823,6.41629,6.41629,0,0,1-.42929.50217L17.19709,8.92642V10H22V8.674Z", symbols: "M15.77493,16.98885a8.21343,8.21343,0,0,0,1.96753-2.57651,7.34824,7.34824,0,0,0,.6034-3.07618A6.09092,6.09092,0,0,0,11.99515,5a6.13347,6.13347,0,0,0-4.585,1.79187,6.417,6.417,0,0,0-1.756,4.69207,6.93955,6.93955,0,0,0,.622,2.97415,8.06587,8.06587,0,0,0,1.949,2.53076H5.41452V19h5.54114v-.04331h-.00147V16.84107a5.82825,5.82825,0,0,1-2.2052-2.2352A6.40513,6.40513,0,0,1,7.97672,11.447,4.68548,4.68548,0,0,1,9.07785,8.19191a3.73232,3.73232,0,0,1,2.9173-1.22462,3.76839,3.76839,0,0,1,2.91241,1.21489,4.482,4.482,0,0,1,1.11572,3.154,6.71141,6.71141,0,0,1-.75384,3.24732,5.83562,5.83562,0,0,1-2.22357,2.25759v2.11562H13.0444V19h5.54108V16.98885Z", tags: "M8.9749 7.47489a1.5 1.5 0 1 1 -1.5 1.5A1.5 1.5 0 0 1 8.9749 7.47489Zm3.78866 -3.12713L16.5362 8.12041l0.33565 0.33564 2.77038 2.77038a2.01988 2.01988 0 0 1 0.59 1.42 1.95518 1.95518 0 0 1 -0.5854 1.40455l0.00044 0.00043 -5.59583 5.59583 -0.00043 -0.00044a1.95518 1.95518 0 0 1 -1.40455 0.5854 1.98762 1.98762 0 0 1 -1.41 -0.58L8.45605 16.87185l-0.33564 -0.33565L4.35777 12.77357a1.99576 1.99576 0 0 1 -0.59 -1.42V9.36358l0 -3.59582a2.00579 2.00579 0 0 1 2 -2l3.59582 0h1.98995A1.98762 1.98762 0 0 1 12.76356 4.34776ZM15.46186 9.866l-0.33564 -0.33564L11.36359 5.76776H5.76776v5.59583L9.866 15.46186l2.7794 2.7794 5.5878 -5.60385 -0.001 -0.001Z", tableHeader: "M20,5H4C2.9,5,2,5.9,2,7v10c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V7C22,5.9,21.1,5,20,5z M8,17.5H4c-0.3,0-0.5-0.2-0.5-0.4  l0,0V17v-2H8V17.5z M8,13.5H3.5v-3H8V13.5z M14.5,17.5h-5V15h5V17.5z M14.5,13.5h-5v-3h5V13.5z M20.5,17c0,0.3-0.2,0.5-0.4,0.5l0,0  H16V15h4.5V17z M20.5,13.5H16v-3h4.5V13.5z M20.5,9h-4.4H16h-1.5h-5H8H7.9H3.5V7c0-0.3,0.2-0.5,0.4-0.5l0,0h4l0,0h8.2l0,0H20  c0.3,0,0.5,0.2,0.5,0.4l0,0V9z", tableStyle: "M20.0171,19.89752l.9,3.6-3.2-1.9-3.3,1.9.8-3.6-2.9-2.9h3.8l1.7-3.5,1.4,3.5h3.8ZM20,5H4A2.00591,2.00591,0,0,0,2,7V17a2.00591,2.00591,0,0,0,2,2h7.49115l-.58826-.58826L9.99115,17.5H9.5V14.9975h5.36511L16,12.66089V10.5h4.5v3h-.52783l.599,1.4975H22V7A2.00591,2.00591,0,0,0,20,5ZM3.5,7A.4724.4724,0,0,1,4,6.5H8V9H3.5Zm0,3.5H8v3H3.5Zm.5,7a.4724.4724,0,0,1-.5-.5V15H8v2.5Zm10.5-4h-5v-3h5Zm0-4.5h-5V6.5h5Zm6,0H16V6.5h4a.4724.4724,0,0,1,.5.5Z", textColor: "M15.2,13.494s-3.6,3.9-3.6,6.3a3.65,3.65,0,0,0,7.3.1v-.1C18.9,17.394,15.2,13.494,15.2,13.494Zm-1.47-1.357.669-.724L12.1,5h-2l-5,14h2l1.43-4h2.943A24.426,24.426,0,0,1,13.726,12.137ZM11.1,7.8l1.86,5.2H9.244Z", textMore: "M13.55,19h2l-5-14h-2l-5,14h2l1.4-4h5.1Zm-5.9-6,1.9-5.2,1.9,5.2Zm12.8,4.5a1.5,1.5,0,1,1-1.5-1.5A1.5,1.5,0,0,1,20.45,17.5Zm0-4a1.5,1.5,0,1,1-1.5-1.5A1.5,1.5,0,0,1,20.45,13.5Zm0-4A1.5,1.5,0,1,1,18.95,8,1.5,1.5,0,0,1,20.45,9.5Z", underline: "M19,20v2H5V20Zm-3-6.785a4,4,0,0,1-5.74,3.4A3.75,3.75,0,0,1,8,13.085V5.005H6v8.21a6,6,0,0,0,8,5.44,5.851,5.851,0,0,0,4-5.65v-8H16ZM16,5v0h2V5ZM8,5H6v0H8Z", undo: "M10.4,9.4c-1.7,0.3-3.2,0.9-4.6,2L3,8.5v7h7l-2.7-2.7c3.7-2.6,8.8-1.8,11.5,1.9c0.2,0.3,0.4,0.5,0.5,0.8l1.8-0.9  C18.9,10.8,14.7,8.7,10.4,9.4z", unlink: "M14.4,11l1.6,1.6V11H14.4z M17,7h-4v1.9h4c1.7,0,3.1,1.4,3.1,3.1c0,1.3-0.8,2.4-1.9,2.8l1.4,1.4C21,15.4,22,13.8,22,12  C22,9.2,19.8,7,17,7z M2,4.3l3.1,3.1C3.3,8.1,2,9.9,2,12c0,2.8,2.2,5,5,5h4v-1.9H7c-1.7,0-3.1-1.4-3.1-3.1c0-1.6,1.2-2.9,2.8-3.1  L8.7,11H8v2h2.7l2.3,2.3V17h1.7l4,4l1.4-1.4L3.4,2.9L2,4.3z", unorderedList: "M4,10.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,10.5,4,10.5z M4,5.5C3.2,5.5,2.5,6.2,2.5,7  S3.2,8.5,4,8.5S5.5,7.8,5.5,7S4.8,5.5,4,5.5z M4,15.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,15.5,4,15.5z   M7.5,6v2h14V6H7.5z M7.5,18h14v-2h-14V18z M7.5,13h14v-2h-14V13z", verticalAlignBottom: "M16,13h-3V3h-2v10H8l4,4L16,13z M3,19v2h18v-2H3z", verticalAlignMiddle: "M3,11v2h18v-2H3z M8,18h3v3h2v-3h3l-4-4L8,18z M16,6h-3V3h-2v3H8l4,4L16,6z", verticalAlignTop: "M8,11h3v10h2V11h3l-4-4L8,11z M21,5V3H3v2H21z" }, t.MODULES.modals = function(e) {
        var r = e.$;
        e.shared.modals || (e.shared.modals = {});
        var s, d = e.shared.modals;
        function u() {
          for (var g in d)
            if (Object.prototype.hasOwnProperty.call(d, g)) {
              var m = d[g];
              m && m.$modal && m.$modal.removeData().remove();
            }
          s && s.removeData().remove(), d = {};
        }
        function b(g, m) {
          if (d[g]) {
            var C = d[g].$modal, O = C.data("instance") || e;
            O.events.enableBlur(), C.hide(), s.hide(), r(O.o_doc).find("body").first().removeClass("prevent-scroll fr-mobile"), C.removeClass("fr-active"), m || (O.accessibility.restoreSelection(), O.events.trigger("modals.hide"));
          }
        }
        function E(g) {
          var m;
          if (typeof g == "string") {
            if (!d[g])
              return;
            m = d[g].$modal;
          } else
            m = g;
          return m && e.node.hasClass(m, "fr-active") && e.core.sameInstance(m) || !1;
        }
        return { _init: function() {
          e.events.on("shared.destroy", u, !0);
        }, get: function(m) {
          return d[m];
        }, create: function(m, C, O) {
          if (C = '<div class="fr-modal-head-line">'.concat(C, "</div>"), e.shared.$overlay || (e.shared.$overlay = r(e.doc.createElement("DIV")).addClass("fr-overlay"), r("body").first().append(e.shared.$overlay)), s = e.shared.$overlay, e.opts.theme && s.addClass("".concat(e.opts.theme, "-theme")), !d[m]) {
            var U = function(B, I) {
              var x = '<div tabIndex="-1" class="fr-modal'.concat(e.opts.theme ? " ".concat(e.opts.theme, "-theme") : "", '"><div class="fr-modal-wrapper">'), v = '<button title="'.concat(e.language.translate("Cancel"), '" class="fr-command fr-btn fr-modal-close"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24"><path d="').concat(t.SVG.close, '"/></svg></button>');
              x += '<div class="fr-modal-head">'.concat(B).concat(v, "</div>"), x += '<div tabIndex="-1" class="fr-modal-body">'.concat(I, "</div>"), x += "</div></div>";
              var A = r(e.doc.createElement("DIV"));
              return A.html(x), A.find("> .fr-modal");
            }(C, O);
            d[m] = { $modal: U, $head: U.find(".fr-modal-head"), $body: U.find(".fr-modal-body") }, e.helpers.isMobile() || U.addClass("fr-desktop"), r("body").first().append(U), e.events.$on(U, "click", ".fr-modal-close", function() {
              b(m);
            }, !0), d[m].$body.css("margin-top", d[m].$head.outerHeight()), e.events.$on(U, "keydown", function(y) {
              var B = y.which;
              return B === t.KEYCODE.ESC ? (b(m), e.accessibility.focusModalButton(U), !1) : !(!r(y.currentTarget).is("input[type=text], textarea") && B !== t.KEYCODE.ARROW_UP && B !== t.KEYCODE.ARROW_DOWN && !e.keys.isBrowserAction(y) && (y.preventDefault(), y.stopPropagation(), 1));
            }, !0), b(m, !0);
          }
          return d[m];
        }, show: function(m) {
          if (d[m]) {
            var C = d[m].$modal;
            C.data("instance", e), C.show(), s.show(), r(e.o_doc).find("body").first().addClass("prevent-scroll"), e.helpers.isMobile() && r(e.o_doc).find("body").first().addClass("fr-mobile"), C.addClass("fr-active"), e.accessibility.focusModal(C);
          }
        }, hide: b, resize: function(m) {
          if (d[m]) {
            var C = d[m], O = C.$modal, U = C.$body, y = e.o_win.innerHeight, B = O.find(".fr-modal-wrapper"), I = y - B.outerHeight(!0) + (B.height() - (U.outerHeight(!0) - U.height())), x = "auto";
            I < U.get(0).scrollHeight && (x = I), U.height(x);
          }
        }, isVisible: E, areVisible: function(m) {
          for (var C in d)
            if (Object.prototype.hasOwnProperty.call(d, C) && E(C) && (m === void 0 || d[C].$modal.data("instance") === m))
              return d[C].$modal;
          return !1;
        } };
      }, t.MODULES.position = function(e) {
        var r = e.$;
        function s() {
          var m = e.selection.ranges(0).getBoundingClientRect();
          if (m.top === 0 && m.left === 0 && m.width === 0 || m.height === 0) {
            var C = !1;
            e.$el.find(".fr-marker").length === 0 && (e.selection.save(), C = !0);
            var O = e.$el.find(".fr-marker").first();
            O.css("display", "inline"), O.css("line-height", "");
            var U = O.offset(), y = O.outerHeight();
            O.css("display", "none"), O.css("line-height", 0), (m = {}).left = U && U.left, m.width = 0, m.height = y, m.top = U && U.top - (e.helpers.isMobile() && !e.helpers.isIOS() || e.opts.iframe ? 0 : e.helpers.scrollTop()), m.right = 1, m.bottom = 1, m.ok = !0, C && e.selection.restore();
          }
          return m;
        }
        function d(m, C, O, U) {
          var y = O.data("container");
          if (!y || y.get(0).tagName === "BODY" && y.css("position") === "static" || (m && (m -= y.offset().left), C && (C -= y.offset().top), y.get(0).tagName !== "BODY" ? (m && (m += y.get(0).scrollLeft), C && (C += y.get(0).scrollTop)) : y.css("position") === "absolute" && (m && (m += y.position().left), C && (C += y.position().top))), e.opts.iframe && y && e.$tb && y.get(0) !== e.$tb.get(0)) {
            var B = e.helpers.getPX(e.$wp.find(".fr-iframe").css("padding-top")), I = e.helpers.getPX(e.$wp.find(".fr-iframe").css("padding-left"));
            m && (m += e.$iframe.offset().left + I), C && (C += e.$iframe.offset().top + B);
          }
          var x = function(A, l) {
            var i = A.outerWidth(!0);
            return l + i > e.$sc.get(0).clientWidth - 10 && (l = e.$sc.get(0).clientWidth - i - 10), l < 0 && (l = 10), l;
          }(O, m);
          m && O.css("left", x), C && O.css("top", function(A, l, i) {
            var a = A.outerHeight(!0);
            if (!e.helpers.isMobile() && e.$tb && A.parent().get(0) !== e.$tb.get(0)) {
              var p = A.parent().offset().top, c = l - a - (i || 0);
              A.parent().get(0) === e.$sc.get(0) && (p -= A.parent().position().top);
              var h = e.$sc.get(0).clientHeight;
              p + l + a > e.$sc.offset().top + h && 0 < A.parent().offset().top + c && 0 < c ? c > e.$wp.scrollTop() && (l = c, A.addClass("fr-above")) : A.removeClass("fr-above");
            }
            return l;
          }(O, C, U));
        }
        function u(m) {
          var C = r(m), O = C.is(".fr-sticky-on"), U = C.data("sticky-top"), y = C.data("sticky-scheduled");
          if (U === void 0) {
            C.data("sticky-top", 0);
            var B = r('<div class="fr-sticky-dummy" style="height: '.concat(C.outerHeight(), 'px;"></div>'));
            e.$box.prepend(B);
          } else
            e.$box.find(".fr-sticky-dummy").css("height", C.outerHeight());
          if (e.core.hasFocus() || 0 < e.$tb.findVisible("input:focus").length) {
            var I = e.helpers.scrollTop(), x = Math.min(Math.max(I - e.$tb.parent().offset().top, 0), e.$tb.parent().outerHeight() - C.outerHeight());
            if (x !== U && x !== y && (clearTimeout(C.data("sticky-timeout")), C.data("sticky-scheduled", x), C.outerHeight() < I - e.$tb.parent().offset().top && C.addClass("fr-opacity-0"), C.data("sticky-timeout", setTimeout(function() {
              var l = e.helpers.scrollTop(), i = Math.min(Math.max(l - e.$tb.parent().offset().top, 0), e.$tb.parent().outerHeight() - C.outerHeight());
              0 < i && e.$tb.parent().get(0).tagName === "BODY" && (i += e.$tb.parent().position().top), i !== U && (C.css("top", Math.max(i, 0)), C.data("sticky-top", i), C.data("sticky-scheduled", i)), C.removeClass("fr-opacity-0");
            }, 100))), !O) {
              var v = e.$tb.parent(), A = v.get(0).offsetWidth - v.get(0).clientWidth;
              C.css("top", "0"), C.width(v.width() - A), C.addClass("fr-sticky-on"), e.$box.addClass("fr-sticky-box");
            }
          } else
            clearTimeout(r(m).css("sticky-timeout")), C.css("top", "0"), C.css("position", ""), C.css("width", ""), C.data("sticky-top", 0), C.removeClass("fr-sticky-on"), e.$box.removeClass("fr-sticky-box");
        }
        function b(m) {
          if (m.offsetWidth) {
            var C = r(m), O = C.outerHeight(), U = C.data("sticky-position"), y = r(e.opts.scrollableContainer === "body" ? e.o_win : e.opts.scrollableContainer).outerHeight(), B = 0, I = 0;
            e.opts.scrollableContainer !== "body" && (B = e.$sc.offset().top, I = r(e.o_win).outerHeight() - B - y);
            var x = e.opts.scrollableContainer === "body" ? e.helpers.scrollTop() : B, v = C.is(".fr-sticky-on");
            C.data("sticky-parent") || C.data("sticky-parent", C.parent());
            var A = C.data("sticky-parent"), l = A.offset().top, i = A.outerHeight();
            if (C.data("sticky-offset") ? e.$box.find(".fr-sticky-dummy").css("height", "".concat(O, "px")) : (C.data("sticky-offset", !0), C.after('<div class="fr-sticky-dummy" style="height: '.concat(O, 'px;"></div>'))), !U) {
              var a = C.css("top") !== "auto" || C.css("bottom") !== "auto";
              a || C.css("position", "fixed"), U = { top: e.node.hasClass(C.get(0), "fr-top"), bottom: e.node.hasClass(C.get(0), "fr-bottom") }, a || C.css("position", ""), C.data("sticky-position", U), C.data("top", e.node.hasClass(C.get(0), "fr-top") ? C.css("top") : "auto"), C.data("bottom", e.node.hasClass(C.get(0), "fr-bottom") ? C.css("bottom") : "auto");
            }
            var p = e.helpers.getPX(C.data("top")), c = e.helpers.getPX(C.data("bottom")), h = U.top && function() {
              return l < x + p && x + p <= l + i - O;
            }() && (e.helpers.isInViewPort(e.$sc.get(0)) || e.opts.scrollableContainer === "body"), M = U.bottom && function() {
              return l + O < x + y - c && x + y - c < l + i;
            }();
            if (h || M) {
              var N = A.get(0).offsetWidth - A.get(0).clientWidth;
              C.css("width", "".concat(A.get(0).getBoundingClientRect().width - N, "px")), v || (C.addClass("fr-sticky-on"), C.removeClass("fr-sticky-off"), C.css("top") && (C.data("top") !== "auto" ? C.css("top", e.helpers.getPX(C.data("top")) + B) : C.data("top", "auto")), C.css("bottom") && (C.data("bottom") !== "auto" ? C.css("bottom", e.helpers.getPX(C.data("bottom")) + I) : C.css("bottom", "auto")));
            } else
              e.node.hasClass(C.get(0), "fr-sticky-off") || (C.css("width", ""), C.removeClass("fr-sticky-on"), C.addClass("fr-sticky-off"), C.css("top") && C.data("top") !== "auto" && U.top && C.css("top", 0), C.css("bottom") && C.data("bottom") !== "auto" && U.bottom && C.css("bottom", 0));
          }
        }
        function E() {
          if (e.helpers.requestAnimationFrame()(E), e.events.trigger("position.refresh") !== !1)
            for (var m = 0; m < e._stickyElements.length; m++)
              u(e._stickyElements[m]);
        }
        function g() {
          if (e._stickyElements)
            for (var m = 0; m < e._stickyElements.length; m++)
              b(e._stickyElements[m]);
        }
        return { _init: function() {
          (function() {
            e._stickyElements = [], e.helpers.isIOS() ? (E(), e.events.$on(r(e.o_win), "scroll", function() {
              if (e.core.hasFocus())
                for (var O = 0; O < e._stickyElements.length; O++) {
                  var U = r(e._stickyElements[O]), y = U.parent(), B = e.helpers.scrollTop();
                  U.outerHeight() < B - y.offset().top && (U.addClass("fr-opacity-0"), U.data("sticky-top", -1), U.data("sticky-scheduled", -1));
                }
            }, !0)) : (e.opts.scrollableContainer !== "body" && e.events.$on(r(e.opts.scrollableContainer), "scroll", g, !0), e.events.$on(r(e.o_win), "scroll", g, !0), e.events.$on(r(e.o_win), "resize", g, !0), e.events.on("initialized", g), e.events.on("focus", g), e.events.$on(r(e.o_win), "resize", "textarea", g, !0)), e.events.on("destroy", function() {
              e._stickyElements = [];
            });
          })();
        }, forSelection: function(C) {
          var O = s();
          C.css({ top: 0, left: 0 });
          var U = O.top + O.height, y = O.left + O.width / 2 - C.get(0).offsetWidth / 2 + e.helpers.scrollLeft();
          e.opts.iframe || (U += e.helpers.scrollTop()), d(y, U, C, O.height);
        }, addSticky: function(C) {
          C.addClass("fr-sticky"), e.helpers.isIOS() && C.addClass("fr-sticky-ios"), C.removeClass("fr-sticky"), e._stickyElements.push(C.get(0));
        }, refresh: g, at: d, getBoundingRect: s };
      }, t.MODULES.refresh = function(e) {
        var r = e.$;
        function s(u, b) {
          u.toggleClass("fr-disabled", b).attr("aria-disabled", b);
        }
        function d(u) {
          var b = e.$tb.find('.fr-more-toolbar[data-name="'.concat(u.attr("data-group-name"), '"]')), E = function(m, C) {
            var O = 0, U = C.find("> .fr-command, > .fr-btn-wrap");
            U.each(function(x, v) {
              O += r(v).outerWidth();
            });
            var y, B = e.helpers.getPX(r(U[0]).css("margin-left")), I = e.helpers.getPX(r(U[0]).css("margin-right"));
            return y = e.opts.direction === "rtl" ? e.$tb.outerWidth() - m.offset().left + e.$tb.offset().left - (O + m.outerWidth() + U.length * (B + I)) / 2 : m.offset().left - e.$tb.offset().left - (O - m.outerWidth() + U.length * (B + I)) / 2, y + O + U.length * (B + I) > e.$tb.outerWidth() && (y -= (O + U.length * (B + I) - m.outerWidth()) / 2), y < 0 && (y = 0), y;
          }(u, b);
          e.opts.direction === "rtl" ? b.css("padding-right", E) : b.css("padding-left", E);
        }
        return { undo: function(b) {
          s(b, !e.undo.canDo());
        }, redo: function(b) {
          s(b, !e.undo.canRedo());
        }, outdent: function(b) {
          if (e.node.hasClass(b.get(0), "fr-no-refresh"))
            return !1;
          for (var E = e.selection.blocks(), g = 0; g < E.length; g++) {
            var m = e.opts.direction === "rtl" || r(E[g]).css("direction") === "rtl" ? "margin-right" : "margin-left";
            if (E[g].tagName === "LI" || E[g].parentNode.tagName === "LI" || 0 < e.helpers.getPX(r(E[g]).css(m)))
              return s(b, !1), !0;
          }
          s(b, !0);
        }, indent: function(b) {
          if (e.node.hasClass(b.get(0), "fr-no-refresh"))
            return !1;
          for (var E = e.selection.blocks(), g = 0; g < E.length; g++) {
            for (var m = E[g].previousSibling; m && m.nodeType === Node.TEXT_NODE && m.textContent.length === 0; )
              m = m.previousSibling;
            if (E[g].tagName !== "LI" || m)
              return s(b, !1), !0;
            s(b, !0);
          }
        }, moreText: d, moreParagraph: d, moreMisc: d, moreRich: d };
      }, Object.assign(t.DEFAULTS, { attribution: !0, toolbarBottom: !1, toolbarButtons: null, toolbarButtonsXS: null, toolbarButtonsSM: null, toolbarButtonsMD: null, toolbarContainer: null, toolbarInline: !1, toolbarSticky: !0, toolbarStickyOffset: 0, toolbarVisibleWithoutSelection: !1 }), t.TOOLBAR_BUTTONS = { moreText: { buttons: ["bold", "italic", "underline", "strikeThrough", "subscript", "superscript", "fontFamily", "fontSize", "textColor", "backgroundColor", "inlineClass", "inlineStyle", "clearFormatting"] }, moreParagraph: { buttons: ["alignLeft", "alignCenter", "formatOLSimple", "alignRight", "alignJustify", "formatOL", "formatUL", "paragraphFormat", "paragraphStyle", "lineHeight", "outdent", "indent", "quote"] }, moreRich: { buttons: ["insertLink", "insertImage", "insertVideo", "insertTable", "emoticons", "fontAwesome", "specialCharacters", "embedly", "insertFile", "insertHR"] }, moreMisc: { buttons: ["undo", "redo", "fullscreen", "print", "getPDF", "spellChecker", "selectAll", "html", "help"], align: "right", buttonsVisible: 2 } }, t.TOOLBAR_BUTTONS_MD = null, (t.TOOLBAR_BUTTONS_SM = {}).moreText = Object.assign({}, t.TOOLBAR_BUTTONS.moreText, { buttonsVisible: 2 }), t.TOOLBAR_BUTTONS_SM.moreParagraph = Object.assign({}, t.TOOLBAR_BUTTONS.moreParagraph, { buttonsVisible: 2 }), t.TOOLBAR_BUTTONS_SM.moreRich = Object.assign({}, t.TOOLBAR_BUTTONS.moreRich, { buttonsVisible: 2 }), t.TOOLBAR_BUTTONS_SM.moreMisc = Object.assign({}, t.TOOLBAR_BUTTONS.moreMisc, { buttonsVisible: 2 }), (t.TOOLBAR_BUTTONS_XS = {}).moreText = Object.assign({}, t.TOOLBAR_BUTTONS.moreText, { buttonsVisible: 0 }), t.TOOLBAR_BUTTONS_XS.moreParagraph = Object.assign({}, t.TOOLBAR_BUTTONS.moreParagraph, { buttonsVisible: 0 }), t.TOOLBAR_BUTTONS_XS.moreRich = Object.assign({}, t.TOOLBAR_BUTTONS.moreRich, { buttonsVisible: 0 }), t.TOOLBAR_BUTTONS_XS.moreMisc = Object.assign({}, t.TOOLBAR_BUTTONS.moreMisc, { buttonsVisible: 2 }), t.POWERED_BY = '<a id="logo" href="https://froala.com/wysiwyg-editor" target="_blank" title="Froala WYSIWYG HTML Editor"><span>Powered by</span><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 822.8 355.33"><defs><style>.fr-logo{fill:#b1b2b7;}</style></defs><title>Froala</title><path class="fr-logo" d="M123.58,78.65A16.16,16.16,0,0,0,111.13,73H16.6C7.6,73,0,80.78,0,89.94V128.3a16.45,16.45,0,0,0,32.9,0V104.14h78.5A15.63,15.63,0,0,0,126.87,91.2,15.14,15.14,0,0,0,123.58,78.65Z"/><path class="fr-logo" d="M103.54,170a16.05,16.05,0,0,0-11.44-4.85H15.79A15.81,15.81,0,0,0,0,180.93v88.69a16.88,16.88,0,0,0,5,11.92,16,16,0,0,0,11.35,4.7h.17a16.45,16.45,0,0,0,16.41-16.6v-73.4H92.2A15.61,15.61,0,0,0,107.89,181,15.1,15.1,0,0,0,103.54,170Z"/><path class="fr-logo" d="M233,144.17c-5.29-6.22-16-7.52-24.14-7.52-16.68,0-28.72,7.71-36.5,23.47v-5.67a16.15,16.15,0,1,0-32.3,0v115.5a16.15,16.15,0,1,0,32.3,0v-38.7c0-19.09,3.5-63.5,35.9-63.5a44.73,44.73,0,0,1,5.95.27h.12c12.79,1.2,20.06-2.73,21.6-11.69C236.76,151.48,235.78,147.39,233,144.17Z"/><path class="fr-logo" d="M371.83,157c-13.93-13.11-32.9-20.33-53.43-20.33S279,143.86,265.12,157c-14.67,13.88-22.42,32.82-22.42,54.77,0,21.68,8,41.28,22.4,55.2,13.92,13.41,32.85,20.8,53.3,20.8s39.44-7.38,53.44-20.79c14.55-13.94,22.56-33.54,22.56-55.21S386.39,170.67,371.83,157Zm-9.73,54.77c0,25.84-18.38,44.6-43.7,44.6s-43.7-18.76-43.7-44.6c0-25.15,18.38-43.4,43.7-43.4S362.1,186.59,362.1,211.74Z"/><path class="fr-logo" d="M552.7,138.14a16.17,16.17,0,0,0-16,16.3v1C526.41,143.85,509,136.64,490,136.64c-19.83,0-38.19,7.24-51.69,20.4C424,171,416.4,190,416.4,212c0,21.61,7.78,41.16,21.9,55,13.56,13.33,31.92,20.67,51.7,20.67,18.83,0,36.29-7.41,46.7-19.37v1.57a16.15,16.15,0,1,0,32.3,0V154.44A16.32,16.32,0,0,0,552.7,138.14Zm-16.3,73.6c0,30.44-22.81,44.3-44,44.3-24.57,0-43.1-19-43.1-44.3s18.13-43.4,43.1-43.4C513.73,168.34,536.4,183.55,536.4,211.74Z"/><path class="fr-logo" d="M623.5,61.94a16.17,16.17,0,0,0-16,16.3v191.7a16.15,16.15,0,1,0,32.3,0V78.24A16.32,16.32,0,0,0,623.5,61.94Z"/><path class="fr-logo" d="M806.5,138.14a16.17,16.17,0,0,0-16,16.3v1c-10.29-11.63-27.74-18.84-46.7-18.84-19.83,0-38.19,7.24-51.69,20.4-14.33,14-21.91,33-21.91,55,0,21.61,7.78,41.16,21.9,55,13.56,13.33,31.92,20.67,51.7,20.67,18.83,0,36.29-7.41,46.7-19.37v1.57a16.15,16.15,0,1,0,32.3,0V154.44A16.32,16.32,0,0,0,806.5,138.14Zm-16.3,73.6c0,30.44-22.81,44.3-44,44.3-24.57,0-43.1-19-43.1-44.3s18.13-43.4,43.1-43.4C767.53,168.34,790.2,183.55,790.2,211.74Z"/></svg></a>', t.MODULES.toolbar = function(e) {
        var r, s = e.$, d = [];
        function u(A) {
          var l = {};
          if (Array.isArray(A)) {
            if (!Array.isArray(A[0])) {
              for (var i = [], a = [], p = 0; p < A.length; p++)
                A[p] === "|" || A[p] === "-" ? (0 < a.length && i.push(a), a = []) : a.push(A[p]);
              0 < a.length && i.push(a), A = i;
            }
            A.forEach(function(c, h) {
              l["group".concat(h + 1)] = { buttons: c };
            }), l.showMoreButtons = !1;
          } else
            o(A) !== "object" || Array.isArray(A) || ((l = A).showMoreButtons = !0);
          return l;
        }
        function b() {
          var A = e.helpers.screenSize();
          return d[r = A];
        }
        function E() {
          for (var A = e.$tb.find(".fr-more-toolbar"), l = "", i = 0; i < A.length; i++) {
            var a = s(A[i]);
            a.hasClass("fr-expanded") ? function() {
              var p = e.helpers.getPX(a.css("padding-left")), c = a.find("> .fr-command, > .fr-btn-wrap"), h = s(c[0]), M = e.helpers.getPX(h.css("margin-left")), N = e.helpers.getPX(h.css("margin-right")), ie = e.helpers.getPX(h.css("margin-top")), D = e.helpers.getPX(h.css("margin-bottom"));
              if (c.each(function(re, q) {
                p += s(q).outerWidth() + M + N;
              }), e.$tb.outerWidth() < p) {
                var _ = Math.floor(p / e.$tb.outerWidth());
                p += _ * (p / a[0].childElementCount), _ = Math.ceil(p / e.$tb.outerWidth());
                var Q = (e.helpers.getPX(h.css("height")) + ie + D) * _;
                a.css("height", Q), l = Q;
              }
            }() : a.css("height", "");
          }
          e.$tb.css("padding-bottom", l);
        }
        function g() {
          if (r !== e.helpers.screenSize()) {
            var A = b(), l = s(), i = s();
            for (var a in e.$tb.find(".fr-btn-grp > .fr-command, .fr-more-toolbar > .fr-command, .fr-btn-grp > .fr-btn-wrap > .fr-command, .fr-more-toolbar > .fr-btn-wrap > .fr-command").addClass("fr-hidden"), function() {
              for (var se = e.$tb.find(".fr-btn-grp, .fr-more-toolbar"), H = function(S) {
                var L = s(se[S]);
                L.children().each(function(R, K) {
                  L.before(K);
                }), L.remove();
              }, W = 0; W < se.length; W++)
                H(W);
            }(), A) {
              var p = A[a];
              if (p.buttons) {
                var c = void 0, h = 0, M = 3, N = s('<div class="fr-btn-grp fr-float-'.concat(A[a].align ? A[a].align : "left", '"></div>'));
                A.showMoreButtons && (c = s('<div class="fr-more-toolbar"></div>').data("name", "".concat(a, "-").concat(e.id)));
                for (var ie = 0; ie < p.buttons.length; ie++) {
                  p.buttonsVisible !== void 0 && (M = p.buttonsVisible);
                  var D = e.$tb.find('> .fr-command[data-cmd="' + p.buttons[ie] + '"], > div.fr-btn-wrap > .fr-command[data-cmd="' + p.buttons[ie] + '"]'), _ = null;
                  e.node.hasClass(D.next().get(0), "fr-dropdown-menu") && (_ = D.next()), e.node.hasClass(D.next().get(0), "fr-options") && (D.removeClass("fr-hidden"), D.next().removeClass("fr-hidden"), D = D.parent()), D.removeClass("fr-hidden"), A.showMoreButtons && M <= h ? (c.append(D), _ && c.append(_)) : (N.append(D), _ && N.append(_)), h++;
                }
                if (A.showMoreButtons && M < h) {
                  var Q = e.$tb.find('.fr-command[data-cmd="'.concat(a, '"]'));
                  if (0 < Q.length)
                    Q.removeClass("fr-hidden fr-open");
                  else {
                    var re = a, q = t.COMMANDS[re];
                    q.more_btn = !0, Q = s(e.button.build(re, q, !0)), e.button.addButtons(Q);
                  }
                  N.append(Q);
                }
                l.push(N), A.showMoreButtons && i.push(c);
              }
            }
            e.opts.toolbarBottom ? (e.$tb.append(i), e.$tb.find(".fr-newline").remove(), e.$tb.append('<div class="fr-newline"></div>'), e.$tb.append(l)) : (e.$tb.append(l), e.$tb.find(".fr-newline").remove(), e.$tb.append('<div class="fr-newline"></div>'), e.$tb.append(i)), e.$tb.removeClass("fr-toolbar-open"), e.$box.removeClass("fr-toolbar-open"), e.events.trigger("codeView.toggle");
          }
          E();
        }
        function m(A, l) {
          setTimeout(function() {
            if ((!A || A.which != t.KEYCODE.ESC) && e.selection.inEditor() && e.core.hasFocus() && !e.popups.areVisible() && s(e.selection.blocks()[0]).closest("table").attr("contenteditable") != "false" && (e.opts.toolbarVisibleWithoutSelection || !e.selection.isCollapsed() && !e.keys.isIME() || l)) {
              if (e.$tb.data("instance", e), e.events.trigger("toolbar.show", [A]) === !1)
                return;
              e.$tb.show(), e.opts.toolbarContainer || e.position.forSelection(e.$tb), 1 < e.opts.zIndex ? e.$tb.css("z-index", e.opts.zIndex + 1) : e.$tb.css("z-index", null);
            }
          }, 0);
        }
        function C(A) {
          return (!A || A.type !== "blur" || document.activeElement !== e.el) && (!(!A || A.type !== "keydown" || !e.keys.ctrlKey(A)) || !!e.button.getButtons(".fr-dropdown.fr-active").next().find(e.o_doc.activeElement).length || void (e.events.trigger("toolbar.hide") !== !1 && e.$tb.hide()));
        }
        d[t.XS] = u(e.opts.toolbarButtonsXS || e.opts.toolbarButtons || t.TOOLBAR_BUTTONS_XS || t.TOOLBAR_BUTTONS || []), d[t.SM] = u(e.opts.toolbarButtonsSM || e.opts.toolbarButtons || t.TOOLBAR_BUTTONS_SM || t.TOOLBAR_BUTTONS || []), d[t.MD] = u(e.opts.toolbarButtonsMD || e.opts.toolbarButtons || t.TOOLBAR_BUTTONS_MD || t.TOOLBAR_BUTTONS || []), d[t.LG] = u(e.opts.toolbarButtons || t.TOOLBAR_BUTTONS || []);
        var O = null;
        function U(A) {
          clearTimeout(O), A && A.which === t.KEYCODE.ESC || (O = setTimeout(m, e.opts.typingTimer));
        }
        function y() {
          e.events.on("window.mousedown", C), e.events.on("keydown", C), e.events.on("blur", C), e.events.$on(e.$tb, "transitionend", ".fr-more-toolbar", function() {
            e.position.forSelection(e.$tb);
          }), e.helpers.isMobile() || e.events.on("window.mouseup", m), e.helpers.isMobile() ? e.helpers.isIOS() || (e.events.on("window.touchend", m), e.browser.mozilla && setInterval(m, 200)) : e.events.on("window.keyup", U), e.events.on("keydown", function(A) {
            A && A.which === t.KEYCODE.ESC && C();
          }), e.events.on("keydown", function(A) {
            if (A.which === t.KEYCODE.ALT)
              return A.stopPropagation(), !1;
          }, !0), e.events.$on(e.$wp, "scroll.toolbar", m), e.events.on("commands.after", m), e.helpers.isMobile() && (e.events.$on(e.$doc, "selectionchange", U), e.events.$on(e.$doc, "orientationchange", m));
        }
        function B() {
          e.$tb.html("").removeData().remove(), e.$tb = null, e.$second_tb && (e.$second_tb.html("").removeData().remove(), e.$second_tb = null);
        }
        function I() {
          e.$box.removeClass("fr-top fr-bottom fr-inline fr-basic"), e.$box.find(".fr-sticky-dummy").remove();
        }
        function x() {
          e.opts.theme && e.$tb.addClass("".concat(e.opts.theme, "-theme")), 1 < e.opts.zIndex && e.$tb.css("z-index", e.opts.zIndex + 1), e.opts.direction !== "auto" && e.$tb.removeClass("fr-ltr fr-rtl").addClass("fr-".concat(e.opts.direction)), e.helpers.isMobile() ? e.$tb.addClass("fr-mobile") : e.$tb.addClass("fr-desktop"), e.opts.toolbarContainer ? (e.opts.toolbarInline && (y(), C()), e.opts.toolbarBottom ? e.$tb.addClass("fr-bottom") : e.$tb.addClass("fr-top")) : function() {
            e.opts.toolbarInline ? (e.$sc.append(e.$tb), e.$tb.data("container", e.$sc), e.$tb.addClass("fr-inline"), y(), e.opts.toolbarBottom = !1) : (e.opts.toolbarBottom && !e.helpers.isIOS() ? (e.$box.append(e.$tb), e.$tb.addClass("fr-bottom"), e.$box.addClass("fr-bottom")) : (e.opts.toolbarBottom = !1, e.$box.prepend(e.$tb), e.$tb.addClass("fr-top"), e.$box.addClass("fr-top")), e.$tb.addClass("fr-basic"), e.opts.toolbarSticky && (e.opts.toolbarStickyOffset && (e.opts.toolbarBottom ? e.$tb.css("bottom", e.opts.toolbarStickyOffset) : e.$tb.css("top", e.opts.toolbarStickyOffset)), e.position.addSticky(e.$tb)));
          }(), function() {
            var l = e.button.buildGroup(b());
            e.$tb.append(l), E(), e.button.bindCommands(e.$tb);
          }(), function() {
            e.events.$on(s(e.o_win), "resize", g), e.events.$on(s(e.o_win), "orientationchange", g);
          }(), e.accessibility.registerToolbar(e.$tb), e.events.$on(e.$tb, "".concat(e._mousedown, " ").concat(e._mouseup), function(A) {
            var l = A.originalEvent ? A.originalEvent.target || A.originalEvent.originalTarget : null;
            if (l && l.tagName !== "INPUT" && !e.edit.isDisabled())
              return A.stopPropagation(), A.preventDefault(), !1;
          }, !0), e.helpers.isMobile() && e.events.$on(e.$tb, "click", function() {
            e.$el.focus();
          }), e.events.$on(e.$tb, "transitionend", ".fr-more-toolbar", function() {
            e.$box.hasClass("fr-fullscreen") && (e.opts.height = e.o_win.innerHeight - (e.opts.toolbarInline ? 0 : e.$tb.outerHeight() + (e.$second_tb ? e.$second_tb.outerHeight() : 0)), e.size.refresh());
          });
        }
        var v = !1;
        return { _init: function() {
          if (e.$sc = s(e.opts.scrollableContainer).first(), !e.$wp)
            return !1;
          e.opts.toolbarInline || e.opts.toolbarBottom || (e.$second_tb = s(e.doc.createElement("div")).attr("class", "second-toolbar"), e.$box.append(e.$second_tb), (e.ul !== !1 || e.opts.attribution) && e.$second_tb.prepend(t.POWERED_BY)), e.opts.toolbarContainer ? (e.shared.$tb ? (e.$tb = e.shared.$tb, e.opts.toolbarInline && y()) : (e.shared.$tb = s(e.doc.createElement("DIV")), e.shared.$tb.addClass("fr-toolbar"), e.$tb = e.shared.$tb, s(e.opts.toolbarContainer).append(e.$tb), x(), e.$tb.data("instance", e)), e.opts.toolbarInline ? e.$box.addClass("fr-inline") : e.$box.addClass("fr-basic"), e.events.on("focus", function() {
            e.$tb.data("instance", e);
          }, !0), e.opts.toolbarInline = !1) : e.opts.toolbarInline ? (e.$box.addClass("fr-inline"), e.shared.$tb ? (e.$tb = e.shared.$tb, y()) : (e.shared.$tb = s(e.doc.createElement("DIV")), e.shared.$tb.addClass("fr-toolbar"), e.$tb = e.shared.$tb, x())) : (e.$box.addClass("fr-basic"), e.$tb = s(e.doc.createElement("DIV")), e.$tb.addClass("fr-toolbar"), x(), e.$tb.data("instance", e)), e.events.on("destroy", I, !0), e.events.on(e.opts.toolbarInline || e.opts.toolbarContainer ? "shared.destroy" : "destroy", B, !0), e.events.on("edit.on", function() {
            e.$tb.removeClass("fr-disabled").removeAttr("aria-disabled");
          }), e.events.on("edit.off", function() {
            e.$tb.addClass("fr-disabled").attr("aria-disabled", !0);
          }), function() {
            e.events.on("shortcut", function(i, a, p) {
              var c;
              if (a && !p ? c = e.$tb.find('.fr-command[data-cmd="'.concat(a, '"]')) : a && p && (c = e.$tb.find('.fr-command[data-cmd="'.concat(a, '"][data-param1="').concat(p, '"]'))), c.length && (i.preventDefault(), i.stopPropagation(), c.parents(".fr-toolbar").data("instance", e), i.type === "keydown"))
                return e.button.exec(c), !1;
            });
          }();
        }, hide: C, show: function() {
          if (e.events.trigger("toolbar.show") === !1)
            return !1;
          e.$tb.show();
        }, showInline: m, disable: function() {
          !v && e.$tb && (e.$tb.find(".fr-btn-grp > .fr-command, .fr-more-toolbar > .fr-command").addClass("fr-disabled fr-no-refresh").attr("aria-disabled", !0), v = !0);
        }, enable: function() {
          v && e.$tb && (e.$tb.find(".fr-btn-grp > .fr-command, .fr-more-toolbar > .fr-command").removeClass("fr-disabled fr-no-refresh").attr("aria-disabled", !1), v = !1), e.button.bulkRefresh();
        }, setMoreToolbarsHeight: E };
      };
      var n = ["scroll", "wheel", "touchmove", "touchstart", "touchend"], f = ["webkit", "moz", "ms", "o"], G = ["transitionend"], Y = document.createElement("div").style, ce = ["Webkit", "Moz", "ms", "O", "css", "style"], ue = { visibility: "hidden", display: "block" }, ee = ["focus", "blur", "click"], w = {}, oe = function(r, s) {
        return { altKey: r.altKey, bubbles: r.bubbles, cancelable: r.cancelable, changedTouches: r.changedTouches, ctrlKey: r.ctrlKey, detail: r.detail, eventPhase: r.eventPhase, metaKey: r.metaKey, pageX: r.pageX, pageY: r.pageY, shiftKey: r.shiftKey, view: r.view, char: r.char, key: r.key, keyCode: r.keyCode, button: r.button, buttons: r.buttons, clientX: r.clientX, clientY: r.clientY, offsetX: r.offsetX, offsetY: r.offsetY, pointerId: r.pointerId, pointerType: r.pointerType, screenX: r.screenX, screenY: r.screenY, targetTouches: r.targetTouches, toElement: r.toElement, touches: r.touches, type: r.type, which: r.which, target: r.target, currentTarget: s, originalEvent: r, stopPropagation: function() {
          r.stopPropagation();
        }, stopImmediatePropagation: function() {
          r.stopImmediatePropagation();
        }, preventDefault: function() {
          n.indexOf(r.type) === -1 && r.preventDefault();
        } };
      }, pe = function(r) {
        return r.ownerDocument && r.ownerDocument.body.contains(r) || r.nodeName === "#document" || r.nodeName === "HTML" || r === window;
      }, te = function(r, s) {
        return function(d) {
          var u = d.target;
          if (s)
            for (s = F(s); u && u !== this; )
              u.matches && u.matches(F(s)) && r.call(u, oe(d, u)), u = u.parentNode;
          else
            pe(u) && r.call(u, oe(d, u));
        };
      }, k = function(r, s) {
        return new le(r, s);
      }, F = function(r) {
        return r && typeof r == "string" ? r.replace(/^\s*>/g, ":scope >").replace(/,\s*>/g, ", :scope >") : r;
      }, P = function(r) {
        return typeof r == "function" && typeof r.nodeType != "number";
      }, Z = k;
      k.fn = k.prototype = { constructor: k, length: 0, contains: function(e) {
        if (!e)
          return !1;
        if (Array.isArray(e)) {
          for (var r = 0; r < e.length; r++)
            if (this.contains(e[r]) && this != e[r])
              return !0;
          return !1;
        }
        for (var s = 0; s < this.length; s++)
          for (var d = e; d; ) {
            if (d == this[s] || d[0] && d[0].isEqualNode(this[s]))
              return !0;
            d = d.parentNode;
          }
        return !1;
      }, findVisible: function(e) {
        for (var r = this.find(e), s = r.length - 1; 0 <= s; s--)
          Z(r[s]).isVisible() || r.splice(s, 1);
        return r;
      }, formatParams: function(e) {
        var r = "".concat(Object.keys(e).map(function(s) {
          return "".concat(s, "=").concat(encodeURIComponent(e[s]));
        }).join("&"));
        return r || "";
      }, ajax: function(e) {
        var r = new XMLHttpRequest(), s = this.formatParams(e.data);
        for (var d in e.method.toUpperCase() === "GET" && (e.url = s ? e.url + "?" + s : e.url), r.open(e.method, e.url, !0), e.withCredentials && (r.withCredentials = !0), e.crossDomain && r.setRequestHeader("Access-Control-Allow-Origin", "*"), e.headers)
          Object.prototype.hasOwnProperty.call(e.headers, d) && r.setRequestHeader(d, e.headers[d]);
        Object.prototype.hasOwnProperty.call(e.headers, "Content-Type") || (e.dataType === "json" ? r.setRequestHeader("Content-Type", "application/json") : r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8")), r.onload = function() {
          if (r.status == 200) {
            var u = r.responseText;
            e.dataType === "json" && (u = JSON.parse(u)), e.done(u, r.status, r);
          } else
            e.fail(r);
        }, r.send(s);
      }, prevAll: function() {
        var e = Z();
        if (!this[0])
          return e;
        for (var r = this[0]; r && r.previousSibling; )
          r = r.previousSibling, e.push(r);
        return e;
      }, index: function(e) {
        return e ? typeof e == "string" ? [].indexOf.call(Z(e), this[0]) : [].indexOf.call(this, e.length ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      }, isVisible: function() {
        return !!this[0] && !!(this[0].offsetWidth || this[0].offsetHeight || this[0].getClientRects().length);
      }, toArray: function() {
        return [].slice.call(this);
      }, get: function(e) {
        return e == null ? [].slice.call(this) : e < 0 ? this[e + this.length] : this[e];
      }, pushStack: function(e) {
        var r = k.merge(this.constructor(), e);
        return r.prevObject = this, r;
      }, wrapAll: function(e) {
        var r;
        return this[0] && (P(e) && (e = e.call(this[0])), r = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && r.insertBefore(this[0]), r.map(function() {
          for (var s = this; s.firstElementChild; )
            s = s.firstElementChild;
          return s;
        }).append(this)), this;
      }, wrapInner: function(e) {
        if (typeof e == "string") {
          for (var r = e.split(" "), s = 0; s < r.length && r[s].trim().length === 0; )
            s++;
          if (s < r.length && (Z(e).length && r[s].trim() === Z(e)[0].tagName && (e = document.createElement(r[s].trim())), s++), typeof e != "string")
            for (var d = Z(e); s < r.length; s++) {
              r[s] = r[s].trim();
              var u = r[s].split("=");
              d.attr(u[0], u[1].replace('"', ""));
            }
        }
        for (; !this[0].firstChild && this[0].firstChild !== e; )
          e.appendChild(this[0].firstChild);
      }, wrap: function(e) {
        var r = P(e);
        return this.each(function(s) {
          Z(this).wrapAll(r ? e.call(this, s) : e);
        });
      }, unwrap: function() {
        return this.parent().each(function() {
          this.nodeName && this.nodeName.toLowerCase() === name.toLowerCase() || k(this).replaceWith(this.childNodes);
        });
      }, grep: function(e, r, s) {
        for (var d = [], u = 0, b = e.length, E = !s; u < b; u++)
          !r(e[u], u) !== E && d.push(e[u]);
        return d;
      }, map: function(e) {
        return this.pushStack(k.map(this, function(r, s) {
          return e.call(r, s, r);
        }));
      }, slice: function() {
        return this.pushStack([].slice.apply(this, arguments));
      }, each: function(e) {
        if (this.length)
          for (var r = 0; r < this.length && e.call(this[r], r, this[r]) !== !1; r++)
            ;
        return this;
      }, first: function() {
        return this.eq(0);
      }, last: function() {
        return this.eq(-1);
      }, eq: function(e) {
        var r = this.length, s = +e + (e < 0 ? r : 0);
        return this.pushStack(0 <= s && s < r ? [this[s]] : []);
      }, empty: function() {
        for (var e = 0; e < this.length; e++)
          this[e].innerHTML = "";
      }, contents: function() {
        for (var e = Z(), r = 0; r < this.length; r++)
          for (var s = this[r].childNodes, d = 0; d < s.length; d++)
            e.push(s[d]);
        return e;
      }, attr: function(e, r) {
        if (o(e) === "object") {
          for (var s in e)
            Object.prototype.hasOwnProperty.call(e, s) && e[s] !== null && this.attr(s, e[s]);
          return this;
        }
        if (r === void 0)
          return this.length === 0 || !this[0].getAttribute && e !== "checked" ? void 0 : e === "checked" ? this[0].checked : e === "tagName" ? this[0].tagName : this[0].getAttribute(e);
        if (e === "checked")
          for (var d = 0; d < this.length; d++)
            this[d].checked = r;
        else if (e === "tagName")
          for (var u = 0; u < this.length; u++)
            this[u].tagName = r;
        else
          for (var b = 0; b < this.length; b++)
            this[b].setAttribute(e, r);
        return this;
      }, removeAttr: function(e) {
        for (var r = 0; r < this.length; r++)
          this[r].removeAttribute && this[r].removeAttribute(e);
        return this;
      }, hide: function() {
        return this.css("display", "none"), this;
      }, show: function() {
        return this.css("display", "block"), this;
      }, focus: function() {
        return this.length && this[0].focus(), this;
      }, blur: function() {
        return this.length && this[0].blur(), this;
      }, data: function(e, r) {
        if (r !== void 0) {
          for (var s = 0; s < this.length; s++)
            o(this[s]["data-" + e] = r) !== "object" && typeof r != "function" && this[s].setAttribute && this[s].setAttribute("data-" + e, r);
          return this;
        }
        if (r !== void 0)
          return this.attr("data-" + e, r);
        if (this.length !== 0)
          for (var d = 0; d < this.length; d++) {
            var u = this[d]["data-" + e];
            if (u == null && this[d].getAttribute && (u = this[d].getAttribute("data-" + e)), u !== void 0 && u != null)
              return u;
          }
      }, removeData: function(e) {
        for (var r = 0; r < this.length; r++)
          this[r].removeAttribute && this[r].removeAttribute("data-" + e), this[r]["data-" + e] = null;
        return this;
      }, getCorrectStyleName: function(e) {
        if (!w[e]) {
          var r;
          e in Y && (r = e);
          for (var s = e[0].toUpperCase() + e.slice(1), d = ce.length; d--; )
            (e = ce[d] + s) in Y && (r = e);
          w[e] = r;
        }
        return w[e];
      }, css: function(e, r) {
        if (r !== void 0) {
          if (this.length === 0)
            return this;
          (typeof r != "string" || r.trim() === "" || isNaN(r)) && typeof r != "number" || !/(margin)|(padding)|(height)|(width)|(top)|(left)|(right)|(bottom)/gi.test(e) || /(line-height)/gi.test(e) || (r += "px");
          for (var s = 0; s < this.length; s++)
            e = Z(this).getCorrectStyleName(e), this[s].style[e] = r;
          return this;
        }
        if (typeof e == "string") {
          if (this.length === 0)
            return;
          var d = this[0].ownerDocument || document, u = d.defaultView || d.parentWindow;
          return e = Z(this).getCorrectStyleName(e), u.getComputedStyle(this[0])[e];
        }
        for (var b in e)
          Object.prototype.hasOwnProperty.call(e, b) && this.css(b, e[b]);
        return this;
      }, toggleClass: function(e, r) {
        if (1 < e.split(" ").length) {
          for (var s = e.split(" "), d = 0; d < s.length; d++)
            this.toggleClass(s[d], r);
          return this;
        }
        for (var u = 0; u < this.length; u++)
          r === void 0 ? this[u].classList.contains(e) ? this[u].classList.remove(e) : this[u].classList.add(e) : r ? this[u].classList.contains(e) || this[u].classList.add(e) : this[u].classList.contains(e) && this[u].classList.remove(e);
        return this;
      }, addClass: function(e) {
        if (e.length === 0)
          return this;
        if (1 < e.split(" ").length) {
          for (var r = e.split(" "), s = 0; s < r.length; s++)
            this.addClass(r[s]);
          return this;
        }
        for (var d = 0; d < this.length; d++)
          this[d].classList.add(e);
        return this;
      }, removeClass: function(e) {
        if (1 < e.split(" ").length) {
          for (var r = e.split(" "), s = 0; s < r.length; s++)
            r[s] = r[s].trim(), r[s].length && this.removeClass(r[s]);
          return this;
        }
        for (var d = 0; d < this.length; d++)
          e.length && this[d].classList.remove(e);
        return this;
      }, getClass: function(e) {
        return e.getAttribute && e.getAttribute("class") || "";
      }, stripAndCollapse: function(e) {
        return (e.match(/[^\x20\t\r\n\f]+/g) || []).join(" ");
      }, hasClass: function(e) {
        var r, s, d = 0;
        for (r = " " + e + " "; s = this[d++]; )
          if (s.nodeType === 1 && -1 < (" " + Z(this).stripAndCollapse(Z(this).getClass(s)) + " ").indexOf(r))
            return !0;
        return !1;
      }, scrollTop: function(e) {
        if (e === void 0)
          return this.length === 0 ? void 0 : this[0] === document ? document.documentElement.scrollTop : this[0].scrollTop;
        for (var r = 0; r < this.length; r++)
          this[r] === document ? window.scrollTo(document.documentElement.scrollLeft, e) : this[r].scrollTop = e;
      }, scrollLeft: function(e) {
        if (e === void 0)
          return this.length === 0 ? void 0 : this[0] === document ? document.documentElement.scrollLeft : this[0].scrollLeft;
        for (var r = 0; r < this.length; r++)
          this[r] === document ? window.scrollTo(e, document.documentElement.scrollTop) : this[r].scrollLeft = e;
      }, on: function(e, r, s) {
        if (1 < e.split(" ").length) {
          for (var d = e.split(" "), u = 0; u < d.length; u++)
            if (G.indexOf(e) !== -1)
              for (var b = 0; b < f.length; b++)
                this.on(f[b] + e[0].toUpperCase() + e.slice(1), r, s);
            else
              this.on(d[u], r, s);
          return this;
        }
        s = typeof r == "function" ? te(r, null) : te(s, r);
        for (var E = 0; E < this.length; E++) {
          var g = Z(this[E]);
          g.data("events") || g.data("events", []), g.data("events").push([e, s]);
          var m = e.split(".");
          m = m[0], 0 <= n.indexOf(m) ? g.get(0).addEventListener(m, s, { passive: !0 }) : g.get(0).addEventListener(m, s);
        }
      }, off: function(e) {
        if (1 < e.split(" ").length) {
          for (var r = e.split(" "), s = 0; s < r.length; s++)
            this.off(r[s]);
          return this;
        }
        for (var d = 0; d < this.length; d++) {
          var u = Z(this[d]);
          if (u.data("events")) {
            var b = e.split(".");
            b = b[0];
            for (var E = u.data("events") || [], g = E.length - 1; 0 <= g; g--) {
              var m = E[g];
              m[0] == e && (u.get(0).removeEventListener(b, m[1]), E.splice(g, 1));
            }
          }
        }
      }, trigger: function(e) {
        for (var r = 0; r < this.length; r++) {
          var s = void 0;
          typeof Event == "function" ? s = 0 <= e.search(/^mouse/g) ? new MouseEvent(e, { view: window, cancelable: !0, bubbles: !0 }) : new Event(e) : 0 <= e.search(/^mouse/g) ? (s = document.createEvent("MouseEvents")).initMouseEvent(e, !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null) : (s = document.createEvent("Event")).initEvent(e, !0, !0), 0 <= ee.indexOf(e) && typeof this[r][e] == "function" ? this[r][e]() : this[r].dispatchEvent(s);
        }
      }, triggerHandler: function() {
      }, val: function(e) {
        if (e === void 0)
          return this[0].value;
        for (var r = 0; r < this.length; r++)
          this[r].value = e;
        return this;
      }, siblings: function() {
        return Z(this[0]).parent().children().not(this);
      }, find: function(e) {
        var r = Z();
        if (typeof e != "string") {
          for (var s = 0; s < e.length; s++)
            for (var d = 0; d < this.length; d++)
              if (this[d] !== e[s] && Z(this[d]).contains(e[s])) {
                r.push(e[s]);
                break;
              }
          return r;
        }
        var u = function(C) {
          return (typeof HTMLElement > "u" ? "undefined" : o(HTMLElement)) === "object" ? C instanceof HTMLElement : C && o(C) === "object" && C !== null && C.nodeType === 1 && typeof C.nodeName == "string";
        };
        e = F(e);
        for (var b = 0; b < this.length; b++)
          if (this[b].querySelectorAll) {
            var E = [];
            e && typeof e == "string" ? E = this[b].querySelectorAll(e) : u(e) && (E = [e]);
            for (var g = 0; g < E.length; g++)
              r.push(E[g]);
          }
        return r;
      }, children: function() {
        for (var e = Z(), r = 0; r < this.length; r++)
          for (var s = this[r].children, d = 0; d < s.length; d++)
            e.push(s[d]);
        return e;
      }, not: function(e) {
        if (typeof e == "string")
          for (var r = this.length - 1; 0 <= r; r--)
            this[r].matches(e) && this.splice(r, 1);
        else if (e instanceof k) {
          for (var s = this.length - 1; 0 <= s; s--)
            for (var d = 0; d < e.length; d++)
              if (this[s] === e[d]) {
                this.splice(s, 1);
                break;
              }
        } else
          for (var u = this.length - 1; 0 <= u; u--)
            this[u] === e[0] && this.splice(u, 1);
        return this;
      }, add: function(e) {
        for (var r = 0; r < e.length; r++)
          this.push(e[r]);
        return this;
      }, closest: function(e) {
        for (var r = 0; r < this.length; r++) {
          var s = this[r].closest && this[r].closest(e);
          if (s)
            return Z(s);
        }
        return Z();
      }, html: function(e) {
        if (e === void 0)
          return this.length === 0 ? void 0 : this[0].innerHTML;
        if (typeof e == "string")
          for (var r = 0; r < this.length; r++) {
            this[r].innerHTML = e;
            for (var s = this[r].children, d = this[r].ownerDocument || document, u = 0; u < s.length; u++)
              if (s[u].tagName === "SCRIPT") {
                var b = d.createElement("script");
                b.innerHTML = s[u].innerHTML, d.head.appendChild(b).parentNode.removeChild(b);
              }
          }
        else {
          this[0].innerHTML = "", this.append(e[0]);
          var E = this[0].ownerDocument || document;
          if (e[0].tagName === "SCRIPT") {
            var g = E.createElement("script");
            g.innerHTML = e[0].innerHTML, E.head.appendChild(g).parentNode.removeChild(g);
          }
        }
        return this;
      }, text: function(e) {
        if (!e)
          return this.length ? this[0].textContent : "";
        for (var r = 0; r < this.length; r++)
          this[r].textContent = e;
      }, after: function(r) {
        if (r)
          if (typeof r == "string")
            for (var s = 0; s < this.length; s++) {
              var d = this[s];
              if (d.nodeType != Node.ELEMENT_NODE) {
                var u = d.ownerDocument.createElement("SPAN");
                Z(d).after(u), Z(u).after(r).remove();
              } else
                d.insertAdjacentHTML("afterend", r);
            }
          else {
            var b = this[0];
            if (b.nextSibling)
              if (r instanceof k)
                for (var E = 0; E < r.length; E++)
                  b.nextSibling.parentNode.insertBefore(r[E], b.nextSibling);
              else
                b.nextSibling.parentNode.insertBefore(r, b.nextSibling);
            else
              Z(b.parentNode).append(r);
          }
        return this;
      }, clone: function(e) {
        for (var r = Z(), s = 0; s < this.length; s++)
          r.push(this[s].cloneNode(e));
        return r;
      }, replaceWith: function(e) {
        if (typeof e == "string")
          for (var r = 0; r < this.length; r++)
            this[r].parentNode && (this[r].outerHTML = e);
        else if (e.length)
          for (var s = 0; s < this.length; s++)
            this.replaceWith(e[s]);
        else
          this.after(e).remove();
      }, insertBefore: function(e) {
        return Z(e).before(this[0]), this;
      }, before: function(r) {
        if (r instanceof k) {
          for (var s = 0; s < r.length; s++)
            this.before(r[s]);
          return this;
        }
        if (r)
          if (typeof r == "string")
            for (var d = 0; d < this.length; d++) {
              var u = this[d];
              if (u.nodeType != Node.ELEMENT_NODE) {
                var b = u.ownerDocument.createElement("SPAN");
                Z(u).before(b), Z(b).before(r).remove();
              } else
                u.parentNode && u.insertAdjacentHTML("beforebegin", r);
            }
          else {
            var E = this[0];
            if (E.parentNode)
              if (r instanceof k)
                for (var g = 0; g < r.length; g++)
                  E.parentNode.insertBefore(r[g], E);
              else
                E.parentNode.insertBefore(r, E);
          }
        return this;
      }, append: function(e) {
        if (this.length == 0)
          return this;
        if (typeof e == "string")
          for (var r = 0; r < this.length; r++) {
            var s = this[r], d = s.ownerDocument.createElement("SPAN");
            Z(s).append(d), Z(d).after(e).remove();
          }
        else if (e instanceof k || Array.isArray(e))
          for (var u = 0; u < e.length; u++)
            this.append(e[u]);
        else
          typeof e != "function" && this[0].appendChild(e);
        return this;
      }, prepend: function(e) {
        if (this.length == 0)
          return this;
        if (typeof e == "string")
          for (var r = 0; r < this.length; r++) {
            var s = this[r], d = s.ownerDocument.createElement("SPAN");
            Z(s).prepend(d), Z(d).before(e).remove();
          }
        else if (e instanceof k)
          for (var u = 0; u < e.length; u++)
            this.prepend(e[u]);
        else {
          var b = this[0];
          b.firstChild ? b.firstChild ? b.insertBefore(e, b.firstChild) : b.appendChild(e) : Z(b).append(e);
        }
        return this;
      }, remove: function() {
        for (var e = 0; e < this.length; e++)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      }, prev: function() {
        return this.length && this[0].previousElementSibling ? Z(this[0].previousElementSibling) : Z();
      }, next: function() {
        return this.length && this[0].nextElementSibling ? Z(this[0].nextElementSibling) : Z();
      }, nextAllVisible: function() {
        return this.next();
      }, prevAllVisible: function() {
        return this.prev();
      }, outerHeight: function(e) {
        if (this.length !== 0) {
          var r = this[0];
          if (r === r.window)
            return r.innerHeight;
          var s = {}, d = this.isVisible();
          if (!d)
            for (var u in ue)
              s[u] = r.style[u], r.style[u] = ue[u];
          var b = r.offsetHeight;
          if (e && (b += parseInt(Z(r).css("marginTop")) + parseInt(Z(r).css("marginBottom"))), !d)
            for (var E in ue)
              r.style[E] = s[E];
          return b;
        }
      }, outerWidth: function(e) {
        if (this.length !== 0) {
          var r = this[0];
          if (r === r.window)
            return r.outerWidth;
          var s = {}, d = this.isVisible();
          if (!d)
            for (var u in ue)
              s[u] = r.style[u], r.style[u] = ue[u];
          var b = r.offsetWidth;
          if (e && (b += parseInt(Z(r).css("marginLeft")) + parseInt(Z(r).css("marginRight"))), !d)
            for (var E in ue)
              r.style[E] = s[E];
          return b;
        }
      }, width: function(e) {
        if (e === void 0)
          return this[0] instanceof HTMLDocument ? this[0].body.offsetWidth : this[0].offsetWidth;
        this[0].style.width = e + "px";
      }, height: function(e) {
        var r = this[0];
        if (e === void 0) {
          if (r instanceof HTMLDocument) {
            var s = r.documentElement;
            return Math.max(r.body.scrollHeight, s.scrollHeight, r.body.offsetHeight, s.offsetHeight, s.clientHeight);
          }
          return r.offsetHeight;
        }
        r.style.height = e + "px";
      }, is: function(e) {
        return this.length !== 0 && (typeof e == "string" && this[0].matches ? this[0].matches(e) : e instanceof k ? this[0] == e[0] : this[0] == e);
      }, parent: function() {
        return this.length === 0 ? Z() : Z(this[0].parentNode);
      }, parents: function(e) {
        for (var r = Z(), s = 0; s < this.length; s++)
          for (var d = this[s].parentNode; d && d != document && d.matches; )
            e ? d.matches(e) && r.push(d) : r.push(d), d = d.parentNode;
        return r;
      }, parentsUntil: function(e, r) {
        var s = Z();
        e instanceof k && 0 < e.length && (e = e[0]);
        for (var d = 0; d < this.length; d++)
          for (var u = this[d].parentNode; u && u != document && u.matches && u != e && this[d] != e && (typeof e != "string" || !u.matches(e)); )
            r ? u.matches(r) && s.push(u) : s.push(u), u = u.parentNode;
        return s;
      }, insertAfter: function(e) {
        var r = e.parent()[0];
        r && r.insertBefore(this[0], e[0].nextElementSibling);
      }, filter: function(e) {
        var r = Z();
        if (typeof e == "function")
          for (var s = 0; s < this.length; s++)
            e.call(this[s], this[s]) && r.push(this[s]);
        else if (typeof e == "string")
          for (var d = 0; d < this.length; d++)
            this[d].matches(e) && r.push(this[d]);
        return r;
      }, offset: function() {
        var e = this[0].getBoundingClientRect(), r = this[0].ownerDocument.defaultView;
        return { top: e.top + r.pageYOffset, left: e.left + r.pageXOffset };
      }, position: function() {
        return { left: this[0].offsetLeft, top: this[0].offsetTop };
      }, push: [].push, splice: [].splice }, k.extend = function(e) {
        e = e || {};
        for (var r = 1; r < arguments.length; r++)
          if (arguments[r])
            for (var s in arguments[r])
              Object.prototype.hasOwnProperty.call(arguments[r], s) && (e[s] = arguments[r][s]);
        return e;
      }, k.merge = function(e, r) {
        for (var s = +r.length, d = 0, u = e.length; d < s; d++)
          e[u++] = r[d];
        return e.length = u, e;
      }, k.map = function(e, r, s) {
        var d, u, b = 0, E = [];
        if (Array.isArray(e))
          for (d = e.length; b < d; b++)
            (u = r(e[b], b, s)) != null && E.push(u);
        else
          for (b in e)
            (u = r(e[b], b, s)) != null && E.push(u);
        return [].concat.apply([], E);
      };
      var le = function(r, s) {
        if (!r)
          return this;
        if (typeof r == "string" && r[0] === "<") {
          var d = document.createElement("DIV");
          return d.innerHTML = r, Z(d.firstElementChild);
        }
        if (s = s instanceof k ? s[0] : s, typeof r != "string")
          return r instanceof k ? r : (this[0] = r, this.length = 1, this);
        r = F(r);
        for (var u = (s || document).querySelectorAll(r), b = 0; b < u.length; b++)
          this[b] = u[b];
        return this.length = u.length, this;
      };
      le.prototype = k.prototype;
      var he = t;
      function ge() {
        this.doc = this.$el.get(0).ownerDocument, this.win = "defaultView" in this.doc ? this.doc.defaultView : this.doc.parentWindow, this.$doc = k(this.doc), this.$win = k(this.win), this.opts.pluginsEnabled || (this.opts.pluginsEnabled = Object.keys(he.PLUGINS)), this.opts.initOnClick ? (this.load(he.MODULES), this.$el.on("touchstart.init", function() {
          k(this).data("touched", !0);
        }), this.$el.on("touchmove.init", function() {
          k(this).removeData("touched");
        }), this.$el.on("mousedown.init touchend.init dragenter.init focus.init", function(r) {
          if (r.type === "touchend" && !this.$el.data("touched"))
            return !0;
          if (r.which === 1 || !r.which) {
            this.$el.off("mousedown.init touchstart.init touchmove.init touchend.init dragenter.init focus.init"), this.load(he.MODULES), this.load(he.PLUGINS);
            var s = r.originalEvent && r.originalEvent.originalTarget;
            if (s && s.tagName === "IMG" && k(s).trigger("mousedown"), typeof this.ul > "u" && this.destroy(), r.type === "touchend" && this.image && r.originalEvent && r.originalEvent.target && k(r.originalEvent.target).is("img")) {
              var d = this;
              setTimeout(function() {
                d.image.edit(k(r.originalEvent.target));
              }, 100);
            }
            this.ready = !0, this.events.trigger("initialized");
          }
        }.bind(this)), this.events.trigger("initializationDelayed")) : (this.load(he.MODULES), this.load(he.PLUGINS), k(this.o_win).scrollTop(this.c_scroll), typeof this.ul > "u" && this.destroy(), this.ready = !0, this.events.trigger("initialized"));
      }
      return he.Bootstrap = function(e, r, s) {
        this.id = ++he.ID, this.$ = k;
        var d = {};
        typeof r == "function" && (s = r, r = {}), s && (r.events || (r.events = {}), r.events.initialized = s), r && r.documentReady && (d.toolbarButtons = [["fullscreen", "undo", "redo", "getPDF", "print"], ["bold", "italic", "underline", "textColor", "backgroundColor", "clearFormatting"], ["alignLeft", "alignCenter", "alignRight", "alignJustify"], ["formatOL", "formatUL", "indent", "outdent"], ["paragraphFormat"], ["fontFamily"], ["fontSize"], ["insertLink", "insertImage", "quote"]], d.paragraphFormatSelection = !0, d.fontFamilySelection = !0, d.fontSizeSelection = !0, d.placeholderText = "", d.quickInsertEnabled = !1, d.charCounterCount = !1), this.opts = Object.assign({}, Object.assign({}, he.DEFAULTS, d, o(r) === "object" && r));
        var u = JSON.stringify(this.opts);
        he.OPTS_MAPPING[u] = he.OPTS_MAPPING[u] || this.id, this.sid = he.OPTS_MAPPING[u], he.SHARED[this.sid] = he.SHARED[this.sid] || {}, this.shared = he.SHARED[this.sid], this.shared.count = (this.shared.count || 0) + 1, this.$oel = k(e), this.$oel.data("froala.editor", this), this.o_doc = e.ownerDocument, this.o_win = "defaultView" in this.o_doc ? this.o_doc.defaultView : this.o_doc.parentWindow, this.c_scroll = k(this.o_win).scrollTop(), this._init();
      }, he.Bootstrap.prototype._init = function() {
        var e = this.$oel.get(0).tagName;
        this.$oel.closest("label").length;
        var r = function() {
          e !== "TEXTAREA" && (this._original_html = this._original_html || this.$oel.html()), this.$box = this.$box || this.$oel, this.opts.fullPage && (this.opts.iframe = !0), this.opts.iframe ? (this.$iframe = k('<iframe src="about:blank" frameBorder="0">'), this.$wp = k("<div></div>"), this.$box.html(this.$wp), this.$wp.append(this.$iframe), this.$iframe.get(0).contentWindow.document.open(), this.$iframe.get(0).contentWindow.document.write("<!DOCTYPE html>"), this.$iframe.get(0).contentWindow.document.write("<html><head></head><body></body></html>"), this.$iframe.get(0).contentWindow.document.close(), this.iframe_document = this.$iframe.get(0).contentWindow.document, this.$el = k(this.iframe_document.querySelector("body")), this.el = this.$el.get(0), this.$head = k(this.iframe_document.querySelector("head")), this.$html = k(this.iframe_document.querySelector("html"))) : (this.$el = k(this.o_doc.createElement("DIV")), this.el = this.$el.get(0), this.$wp = k(this.o_doc.createElement("DIV")).append(this.$el), this.$box.html(this.$wp)), setTimeout(ge.bind(this), 0);
        }.bind(this), s = function() {
          this.$box = k("<div>"), this.$oel.before(this.$box).hide(), this._original_html = this.$oel.val();
          var E = this;
          this.$oel.parents("form").on("submit.".concat(this.id), function() {
            E.events.trigger("form.submit");
          }), this.$oel.parents("form").on("reset.".concat(this.id), function() {
            E.events.trigger("form.reset");
          }), r();
        }.bind(this), d = function() {
          this.$el = this.$oel, this.el = this.$el.get(0), this.$el.attr("contenteditable", !0).css("outline", "none").css("display", "inline-block"), this.opts.multiLine = !1, this.opts.toolbarInline = !1, setTimeout(ge.bind(this), 0);
        }.bind(this), u = function() {
          this.$el = this.$oel, this.el = this.$el.get(0), this.opts.toolbarInline = !1, setTimeout(ge.bind(this), 0);
        }.bind(this), b = function() {
          this.$el = this.$oel, this.el = this.$el.get(0), this.opts.toolbarInline = !1, this.$oel.on("click.popup", function(E) {
            E.preventDefault();
          }), setTimeout(ge.bind(this), 0);
        }.bind(this);
        this.opts.editInPopup ? b() : e === "TEXTAREA" ? s() : e === "A" ? d() : e === "IMG" ? u() : e === "BUTTON" || e === "INPUT" ? (this.opts.editInPopup = !0, this.opts.toolbarInline = !1, b()) : r();
      }, he.Bootstrap.prototype.load = function(e) {
        for (var r in e)
          if (Object.prototype.hasOwnProperty.call(e, r)) {
            if (this[r] || he.PLUGINS[r] && this.opts.pluginsEnabled.indexOf(r) < 0)
              continue;
            if (this[r] = new e[r](this), this[r]._init && (this[r]._init(), this.opts.initOnClick && r === "core"))
              return !1;
          }
      }, he.Bootstrap.prototype.destroy = function() {
        this.destrying = !0, this.shared.count--, this.events && this.events.$off();
        var e = this.html && this.html.get();
        if (this.opts.iframe && (this.events.disableBlur(), this.win.focus(), this.events.enableBlur()), this.events && (this.events.trigger("destroy", [], !0), this.events.trigger("shared.destroy", [], !0)), this.shared.count === 0) {
          for (var r in this.shared)
            Object.prototype.hasOwnProperty.call(this.shared, r) && (this.shared[r] = null, he.SHARED[this.sid][r] = null);
          delete he.SHARED[this.sid];
        }
        this.$oel.parents("form").off(".".concat(this.id)), this.$oel.off("click.popup"), this.$oel.removeData("froala.editor"), this.$oel.off("froalaEditor"), this.core && this.core.destroy(e), he.INSTANCES.splice(he.INSTANCES.indexOf(this), 1);
      }, t;
    });
  }(Ke)), Ke.exports;
}
var qe = $e();
/*!
 * froala_editor v3.1.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
(function(Ie, Le) {
  (function(o, t) {
    t($e());
  })(ke, function(o) {
    (o = o && o.hasOwnProperty("default") ? o.default : o).PLUGINS.align = function(t) {
      var n = t.$;
      return { apply: function(G) {
        var Y = t.selection.element();
        if (n(Y).parents(".fr-img-caption").length)
          n(Y).css("text-align", G);
        else {
          t.selection.save(), t.html.wrap(!0, !0, !0, !0), t.selection.restore();
          for (var ce = t.selection.blocks(), ue = 0; ue < ce.length; ue++)
            n(ce[ue]).css("text-align", G).removeClass("fr-temp-div"), n(ce[ue]).attr("class") === "" && n(ce[ue]).removeAttr("class"), n(ce[ue]).attr("style") === "" && n(ce[ue]).removeAttr("style");
          t.selection.save(), t.html.unwrap(), t.selection.restore();
        }
      }, refresh: function(G) {
        var Y = t.selection.blocks();
        if (Y.length) {
          var ce = t.helpers.getAlignment(n(Y[0]));
          G.find("> *").first().replaceWith(t.icon.create("align-".concat(ce)));
        }
      }, refreshOnShow: function(G, Y) {
        var ce = t.selection.blocks();
        if (ce.length) {
          var ue = t.helpers.getAlignment(n(ce[0]));
          Y.find('a.fr-command[data-param1="'.concat(ue, '"]')).addClass("fr-active").attr("aria-selected", !0);
        }
      }, refreshForToolbar: function(G) {
        var Y = t.selection.blocks();
        if (Y.length) {
          var ce = t.helpers.getAlignment(n(Y[0]));
          ce = ce.charAt(0).toUpperCase() + ce.slice(1), "align".concat(ce) === G.attr("data-cmd") && G.addClass("fr-active");
        }
      } };
    }, o.DefineIcon("align", { NAME: "align-left", SVG_KEY: "alignLeft" }), o.DefineIcon("align-left", { NAME: "align-left", SVG_KEY: "alignLeft" }), o.DefineIcon("align-right", { NAME: "align-right", SVG_KEY: "alignRight" }), o.DefineIcon("align-center", { NAME: "align-center", SVG_KEY: "alignCenter" }), o.DefineIcon("align-justify", { NAME: "align-justify", SVG_KEY: "alignJustify" }), o.RegisterCommand("align", { type: "dropdown", title: "Align", options: { left: "Align Left", center: "Align Center", right: "Align Right", justify: "Align Justify" }, html: function() {
      var t = '<ul class="fr-dropdown-list" role="presentation">', n = o.COMMANDS.align.options;
      for (var f in n)
        n.hasOwnProperty(f) && (t += `<li role="presentation"><a class="fr-command fr-title" tabIndex="-1" role="option" data-cmd="align"data-param1="
        `.concat(f, '" title="').concat(this.language.translate(n[f]), '">').concat(this.icon.create("align-".concat(f)), `<span class="fr-sr-only">
        `).concat(this.language.translate(n[f]), "</span></a></li>"));
      return t += "</ul>";
    }, callback: function(t, n) {
      this.align.apply(n);
    }, refresh: function(t) {
      this.align.refresh(t);
    }, refreshOnShow: function(t, n) {
      this.align.refreshOnShow(t, n);
    }, plugin: "align" }), o.RegisterCommand("alignLeft", { type: "button", icon: "align-left", title: "Align Left", callback: function() {
      this.align.apply("left");
    }, refresh: function(t) {
      this.align.refreshForToolbar(t);
    }, plugin: "align" }), o.RegisterCommand("alignRight", { type: "button", icon: "align-right", title: "Align Right", callback: function() {
      this.align.apply("right");
    }, refresh: function(t) {
      this.align.refreshForToolbar(t);
    }, plugin: "align" }), o.RegisterCommand("alignCenter", { type: "button", icon: "align-center", title: "Align Center", callback: function() {
      this.align.apply("center");
    }, refresh: function(t) {
      this.align.refreshForToolbar(t);
    }, plugin: "align" }), o.RegisterCommand("alignJustify", { type: "button", icon: "align-justify", title: "Align Justify", callback: function() {
      this.align.apply("justify");
    }, refresh: function(t) {
      this.align.refreshForToolbar(t);
    }, plugin: "align" });
  });
})();
/*!
 * froala_editor v3.1.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
(function(Ie, Le) {
  (function(o, t) {
    t($e());
  })(ke, function(o) {
    o = o && o.hasOwnProperty("default") ? o.default : o, Object.assign(o.POPUP_TEMPLATES, { "textColor.picker": "[_BUTTONS_][_TEXT_COLORS_][_CUSTOM_COLOR_]", "backgroundColor.picker": "[_BUTTONS_][_BACKGROUND_COLORS_][_CUSTOM_COLOR_]" }), Object.assign(o.DEFAULTS, { colorsText: ["#61BD6D", "#1ABC9C", "#54ACD2", "#2C82C9", "#9365B8", "#475577", "#CCCCCC", "#41A85F", "#00A885", "#3D8EB9", "#2969B0", "#553982", "#28324E", "#000000", "#F7DA64", "#FBA026", "#EB6B56", "#E25041", "#A38F84", "#EFEFEF", "#FFFFFF", "#FAC51C", "#F37934", "#D14841", "#B8312F", "#7C706B", "#D1D5D8", "REMOVE"], colorsBackground: ["#61BD6D", "#1ABC9C", "#54ACD2", "#2C82C9", "#9365B8", "#475577", "#CCCCCC", "#41A85F", "#00A885", "#3D8EB9", "#2969B0", "#553982", "#28324E", "#000000", "#F7DA64", "#FBA026", "#EB6B56", "#E25041", "#A38F84", "#EFEFEF", "#FFFFFF", "#FAC51C", "#F37934", "#D14841", "#B8312F", "#7C706B", "#D1D5D8", "REMOVE"], colorsStep: 7, colorsHEXInput: !0, colorsButtons: ["colorsBack", "|", "-"] }), o.PLUGINS.colors = function(t) {
      var n = t.$, f = `<div class="fr-color-hex-layer fr-active fr-layer" id="fr-color-hex-layer- 
  `.concat(t.id, `"><div class="fr-input-line"><input maxlength="7" id="[ID]"
  type="text" placeholder="`).concat(t.language.translate("HEX Color"), `" 
  tabIndex="1" aria-required="true"></div><div class="fr-action-buttons"><button 
  type="button" class="fr-command fr-submit" data-cmd="[COMMAND]" tabIndex="2" role="button">
  `).concat(t.language.translate("OK"), "</button></div></div>");
      function G(ee) {
        for (var w = ee === "text" ? t.opts.colorsText : t.opts.colorsBackground, oe = '<div class="fr-color-set fr-'.concat(ee, '-color fr-selected-set">'), pe = 0; pe < w.length; pe++)
          pe !== 0 && pe % t.opts.colorsStep == 0 && (oe += "<br>"), w[pe] !== "REMOVE" ? oe += '<span class="fr-command fr-select-color" style="background:'.concat(w[pe], `;" 
        tabIndex="-1" aria-selected="false" role="button" data-cmd="apply`).concat(ee, `Color" 
        data-param1="`).concat(w[pe], '"><span class="fr-sr-only"> ').concat(t.language.translate("Color")).concat(w[pe], ` 
        &nbsp;&nbsp;&nbsp;</span></span>`) : oe += '<span class="fr-command fr-select-color" data-cmd="apply'.concat(ee, `Color"
         tabIndex="-1" role="button" data-param1="REMOVE" 
         title="`).concat(t.language.translate("Clear Formatting"), '">').concat(t.icon.create("remove"), ` 
        <span class="fr-sr-only"> `).concat(t.language.translate("Clear Formatting"), " </span></span>");
        return "".concat(oe, "</div>");
      }
      function Y(ee) {
        var w, oe = t.popups.get("".concat(ee, "Color.picker")), pe = n(t.selection.element());
        w = ee === "background" ? "background-color" : "color";
        var te = oe.find(".fr-".concat(ee, "-color .fr-select-color"));
        for (te.find(".fr-selected-color").remove(), te.removeClass("fr-active-item"), te.not('[data-param1="REMOVE"]').attr("aria-selected", !1); pe.get(0) !== t.el; ) {
          if (pe.css(w) !== "transparent" && pe.css(w) !== "rgba(0, 0, 0, 0)") {
            var k = oe.find(".fr-".concat(ee, '-color .fr-select-color[data-param1="').concat(t.helpers.RGBToHex(pe.css(w)), '"]'));
            k.append('<span class="fr-selected-color" aria-hidden="true">\uF00C</span>'), k.addClass("fr-active-item").attr("aria-selected", !0);
            break;
          }
          pe = pe.parent();
        }
        (function(P) {
          var Z = t.popups.get("".concat(P, "Color.picker")), le = Z.find(".fr-".concat(P, "-color .fr-active-item")).attr("data-param1"), he = Z.find(".fr-color-hex-layer input");
          le || (le = ""), he.length && n(he.val(le).input).trigger("change");
        })(ee);
      }
      function ce(ee) {
        ee !== "REMOVE" ? t.format.applyStyle("background-color", t.helpers.HEXtoRGB(ee)) : t.format.removeStyle("background-color"), t.popups.hide("backgroundColor.picker");
      }
      function ue(ee) {
        ee !== "REMOVE" ? t.format.applyStyle("color", t.helpers.HEXtoRGB(ee)) : t.format.removeStyle("color"), t.popups.hide("textColor.picker");
      }
      return { showColorsPopup: function(w) {
        var oe = t.$tb.find('.fr-command[data-cmd="'.concat(w, '"]')), pe = t.popups.get("".concat(w, ".picker"));
        if (pe || (pe = function(Z) {
          var le = "";
          t.opts.toolbarInline && 0 < t.opts.colorsButtons.length && (le += `<div class="fr-buttons fr-colors-buttons fr-tabs">
        `.concat(t.button.buildList(t.opts.colorsButtons), `
        </div>`));
          var he, ge = "";
          he = Z === "textColor" ? (t.opts.colorsHEXInput && (ge = f.replace(/\[ID\]/g, "fr-color-hex-layer-text-".concat(t.id)).replace(/\[COMMAND\]/g, "customTextColor")), { buttons: le, text_colors: G("text"), custom_color: ge }) : (t.opts.colorsHEXInput && (ge = f.replace(/\[ID\]/g, "fr-color-hex-layer-background-".concat(t.id)).replace(/\[COMMAND\]/g, "customBackgroundColor")), { buttons: le, background_colors: G("background"), custom_color: ge });
          var e = t.popups.create("".concat(Z, ".picker"), he);
          return function(s, d) {
            t.events.on("popup.tab", function(u) {
              var b = n(u.currentTarget);
              if (!t.popups.isVisible(d) || !b.is("span"))
                return !0;
              var E = u.which, g = !0;
              if (o.KEYCODE.TAB === E) {
                var m = s.find(".fr-buttons");
                g = !t.accessibility.focusToolbar(m, !!u.shiftKey);
              } else if (o.KEYCODE.ARROW_UP === E || o.KEYCODE.ARROW_DOWN === E || o.KEYCODE.ARROW_LEFT === E || o.KEYCODE.ARROW_RIGHT === E) {
                if (b.is("span.fr-select-color")) {
                  var C = b.parent().find("span.fr-select-color"), O = C.index(b), U = t.opts.colorsStep, y = Math.floor(C.length / U), B = O % U, I = Math.floor(O / U), x = I * U + B, v = y * U;
                  o.KEYCODE.ARROW_UP === E ? x = ((x - U) % v + v) % v : o.KEYCODE.ARROW_DOWN === E ? x = (x + U) % v : o.KEYCODE.ARROW_LEFT === E ? x = ((x - 1) % v + v) % v : o.KEYCODE.ARROW_RIGHT === E && (x = (x + 1) % v);
                  var A = n(C.get(x));
                  t.events.disableBlur(), A.focus(), g = !1;
                }
              } else
                o.KEYCODE.ENTER === E && (t.button.exec(b), g = !1);
              return g === !1 && (u.preventDefault(), u.stopPropagation()), g;
            }, !0);
          }(e, "".concat(Z, ".picker")), e;
        }(w)), !pe.hasClass("fr-active"))
          if (t.popups.setContainer("".concat(w, ".picker"), t.$tb), Y(w === "textColor" ? "text" : "background"), oe.isVisible()) {
            var te = t.button.getPosition(oe), k = te.left, F = te.top;
            t.popups.show("".concat(w, ".picker"), k, F, oe.outerHeight());
          } else
            t.position.forSelection(pe), t.popups.show("".concat(w, ".picker"));
      }, background: ce, customColor: function(w) {
        var oe = t.popups.get("".concat(w, "Color.picker")).find(".fr-color-hex-layer input");
        if (oe.length) {
          var pe = oe.val();
          w === "background" ? ce(pe) : ue(pe);
        }
      }, text: ue, back: function() {
        t.popups.hide("textColor.picker"), t.popups.hide("backgroundColor.picker"), t.toolbar.showInline();
      } };
    }, o.DefineIcon("textColor", { NAME: "tint", SVG_KEY: "textColor" }), o.RegisterCommand("textColor", { title: "Text Color", undo: !1, focus: !0, refreshOnCallback: !1, popup: !0, callback: function() {
      this.popups.isVisible("textColor.picker") ? (this.$el.find(".fr-marker").length && (this.events.disableBlur(), this.selection.restore()), this.popups.hide("textColor.picker")) : this.colors.showColorsPopup("textColor");
    } }), o.RegisterCommand("applytextColor", { undo: !0, callback: function(t, n) {
      this.colors.text(n);
    } }), o.RegisterCommand("customTextColor", { title: "OK", undo: !0, callback: function() {
      this.colors.customColor("text");
    } }), o.DefineIcon("backgroundColor", { NAME: "paint-brush", SVG_KEY: "backgroundColor" }), o.RegisterCommand("backgroundColor", { title: "Background Color", undo: !1, focus: !0, refreshOnCallback: !1, popup: !0, callback: function() {
      this.popups.isVisible("backgroundColor.picker") ? (this.$el.find(".fr-marker").length && (this.events.disableBlur(), this.selection.restore()), this.popups.hide("backgroundColor.picker")) : this.colors.showColorsPopup("backgroundColor");
    } }), o.RegisterCommand("applybackgroundColor", { undo: !0, callback: function(t, n) {
      this.colors.background(n);
    } }), o.RegisterCommand("customBackgroundColor", { title: "OK", undo: !0, callback: function() {
      this.colors.customColor("background");
    } }), o.DefineIcon("colorsBack", { NAME: "arrow-left", SVG_KEY: "back" }), o.RegisterCommand("colorsBack", { title: "Back", undo: !1, focus: !1, back: !0, refreshAfterCallback: !1, callback: function() {
      this.colors.back();
    } }), o.DefineIcon("remove", { NAME: "eraser", SVG_KEY: "remove" });
  });
})();
/*!
 * froala_editor v3.1.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
(function(Ie, Le) {
  (function(o, t) {
    t($e());
  })(ke, function(o) {
    o = o && o.hasOwnProperty("default") ? o.default : o, Object.assign(o.DEFAULTS, { charCounterMax: -1, charCounterCount: !0 }), o.PLUGINS.charCounter = function(t) {
      var n, f = t.$, G = function() {
        return (t.el.textContent || "").replace(/\u200B/g, "").length;
      };
      function Y(ee) {
        if (t.opts.charCounterMax < 0 || G() < t.opts.charCounterMax)
          return !0;
        var w = ee.which;
        return !(!t.keys.ctrlKey(ee) && t.keys.isCharacter(w) || w === o.KEYCODE.IME) || (ee.preventDefault(), ee.stopPropagation(), t.events.trigger("charCounter.exceeded"), !1);
      }
      function ce(ee) {
        return t.opts.charCounterMax < 0 || f("<div>").html(ee).text().length + G() <= t.opts.charCounterMax ? ee : (t.events.trigger("charCounter.exceeded"), "");
      }
      function ue() {
        if (t.opts.charCounterCount) {
          var ee = G() + (0 < t.opts.charCounterMax ? "/" + t.opts.charCounterMax : "");
          n.text("".concat(t.language.translate("Characters"), " : ").concat(ee)), t.opts.toolbarBottom && n.css("margin-bottom", t.$tb.outerHeight(!0));
          var w = t.$wp.get(0).offsetWidth - t.$wp.get(0).clientWidth;
          0 <= w && (t.opts.direction == "rtl" ? n.css("margin-left", w) : n.css("margin-right", w));
        }
      }
      return { _init: function() {
        return !!t.$wp && !!t.opts.charCounterCount && ((n = f(document.createElement("span")).attr("class", "fr-counter")).css("bottom", t.$wp.css("border-bottom-width")), t.$second_tb && t.$second_tb.append(n), t.events.on("keydown", Y, !0), t.events.on("paste.afterCleanup", ce), t.events.on("keyup contentChanged input", function() {
          t.events.trigger("charCounter.update");
        }), t.events.on("charCounter.update", ue), t.events.trigger("charCounter.update"), void t.events.on("destroy", function() {
          f(t.o_win).off("resize.char".concat(t.id)), n.removeData().remove(), n = null;
        }));
      }, count: G };
    };
  });
})();
/*!
 * froala_editor v3.1.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
(function(Ie, Le) {
  (function(o, t) {
    t($e());
  })(ke, function(o) {
    o = o && o.hasOwnProperty("default") ? o.default : o, Object.assign(o.DEFAULTS, { codeMirror: window.CodeMirror, codeMirrorOptions: { lineNumbers: !0, tabMode: "indent", indentWithTabs: !0, lineWrapping: !0, mode: "text/html", tabSize: 2 }, codeBeautifierOptions: { end_with_newline: !0, indent_inner_html: !0, extra_liners: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "pre", "ul", "ol", "table", "dl"], brace_style: "expand", indent_char: "	", indent_size: 1, wrap_line_length: 0 }, codeViewKeepActiveButtons: ["fullscreen"] }), o.PLUGINS.codeView = function(t) {
      var n, f, G = t.$, Y = function() {
        return t.$box.hasClass("fr-code-view");
      };
      function ce() {
        return f ? f.getValue() : n.val();
      }
      function ue() {
        Y() && (f && f.setSize(null, t.opts.height ? t.opts.height : "auto"), t.opts.heightMin || t.opts.height ? (t.$box.find(".CodeMirror-scroll, .CodeMirror-gutters").css("min-height", t.opts.heightMin || t.opts.height), n.css("height", t.opts.height)) : t.$box.find(".CodeMirror-scroll, .CodeMirror-gutters").css("min-height", ""));
      }
      var ee, w = !1;
      function oe() {
        Y() && t.events.trigger("blur");
      }
      function pe() {
        Y() && w && t.events.trigger("focus");
      }
      function te(P) {
        n || (function() {
          n = G('<textarea class="fr-code" tabIndex="-1">'), t.$wp.append(n), n.attr("dir", t.opts.direction), t.$box.hasClass("fr-basic") || (ee = G('<a data-cmd="html" title="Code View" class="fr-command fr-btn html-switch'.concat(t.helpers.isMobile() ? "" : " fr-desktop", '" role="button" tabIndex="-1"><i class="fa fa-code"></i></button>')), t.$box.append(ee), t.events.bindClick(t.$box, "a.html-switch", function() {
            t.events.trigger("commands.before", ["html"]), k(!1), t.events.trigger("commands.after", ["html"]);
          }));
          var u = function() {
            return !Y();
          };
          t.events.on("buttons.refresh", u), t.events.on("copy", u, !0), t.events.on("cut", u, !0), t.events.on("paste", u, !0), t.events.on("destroy", F, !0), t.events.on("html.set", function() {
            Y() && k(!0);
          }), t.events.on("codeView.update", ue), t.events.on("codeView.toggle", function() {
            t.$box.hasClass("fr-code-view") && k();
          }), t.events.on("form.submit", function() {
            Y() && (t.html.set(ce()), t.events.trigger("contentChanged", [], !0));
          }, !0);
        }(), !f && t.opts.codeMirror ? ((f = t.opts.codeMirror.fromTextArea(n.get(0), t.opts.codeMirrorOptions)).on("blur", oe), f.on("focus", pe)) : (t.events.$on(n, "keydown keyup change input", function() {
          t.opts.height ? this.removeAttribute("rows") : (this.rows = 1, this.value.length === 0 ? this.style.height = "auto" : this.style.height = "".concat(this.scrollHeight, "px"));
        }), t.events.$on(n, "blur", oe), t.events.$on(n, "focus", pe))), t.undo.saveStep(), t.html.cleanEmptyTags(), t.html.cleanWhiteTags(!0), t.core.hasFocus() && (t.core.isEmpty() || (t.selection.save(), t.$el.find('.fr-marker[data-type="true"]').first().replaceWith('<span class="fr-tmp fr-sm">F</span>'), t.$el.find('.fr-marker[data-type="false"]').last().replaceWith('<span class="fr-tmp fr-em">F</span>')));
        var Z = t.html.get(!1, !0);
        t.$el.find("span.fr-tmp").remove(), t.$box.toggleClass("fr-code-view", !0);
        var le, he, ge = !1;
        if (t.core.hasFocus() && (ge = !0, t.events.disableBlur(), t.$el.blur()), Z = (Z = Z.replace(/<span class="fr-tmp fr-sm">F<\/span>/, "FROALA-SM")).replace(/<span class="fr-tmp fr-em">F<\/span>/, "FROALA-EM"), t.codeBeautifier && !Z.includes("fr-embedly") && (Z = t.codeBeautifier.run(Z, t.opts.codeBeautifierOptions)), f) {
          le = Z.indexOf("FROALA-SM"), (he = Z.indexOf("FROALA-EM")) < le ? le = he : he -= 9;
          var e = (Z = Z.replace(/FROALA-SM/g, "").replace(/FROALA-EM/g, "")).substring(0, le).length - Z.substring(0, le).replace(/\n/g, "").length, r = Z.substring(0, he).length - Z.substring(0, he).replace(/\n/g, "").length;
          le = Z.substring(0, le).length - Z.substring(0, Z.substring(0, le).lastIndexOf(`
`) + 1).length, he = Z.substring(0, he).length - Z.substring(0, Z.substring(0, he).lastIndexOf(`
`) + 1).length, f.setSize(null, t.opts.height ? t.opts.height : "auto"), t.opts.heightMin && t.$box.find(".CodeMirror-scroll").css("min-height", t.opts.heightMin), f.setValue(Z), w = !ge, f.focus(), w = !0, f.setSelection({ line: e, ch: le }, { line: r, ch: he }), f.refresh(), f.clearHistory();
        } else {
          le = Z.indexOf("FROALA-SM"), he = Z.indexOf("FROALA-EM") - 9, t.opts.heightMin && n.css("min-height", t.opts.heightMin), t.opts.height && n.css("height", t.opts.height), t.opts.heightMax && n.css("max-height", t.opts.height || t.opts.heightMax), n.val(Z.replace(/FROALA-SM/g, "").replace(/FROALA-EM/g, "")).trigger("change");
          var s = G(t.o_doc).scrollTop();
          w = !ge, n.focus(), w = !0, n.get(0).setSelectionRange(le, he), G(t.o_doc).scrollTop(s);
        }
        t.$tb.find(".fr-btn-grp > .fr-command, .fr-more-toolbar > .fr-command, .fr-btn-grp > .fr-btn-wrap > .fr-command, .fr-more-toolbar > .fr-btn-wrap > .fr-command").not(P).filter(function() {
          return t.opts.codeViewKeepActiveButtons.indexOf(G(this).data("cmd")) < 0;
        }).addClass("fr-disabled").attr("aria-disabled", !0), P.addClass("fr-active").attr("aria-pressed", !0), !t.helpers.isMobile() && t.opts.toolbarInline && t.toolbar.hide();
      }
      function k(P) {
        P === void 0 && (P = !Y());
        var Z = t.$tb.find('.fr-command[data-cmd="html"]');
        P ? (t.popups.hideAll(), te(Z)) : (t.$box.toggleClass("fr-code-view", !1), function(he) {
          var ge = ce();
          t.html.set(ge), t.$el.blur(), t.$tb.find(".fr-btn-grp > .fr-command, .fr-more-toolbar > .fr-command, .fr-btn-grp > .fr-btn-wrap > .fr-command, .fr-more-toolbar > .fr-btn-wrap > .fr-command").not(he).removeClass("fr-disabled").attr("aria-disabled", !1), he.removeClass("fr-active").attr("aria-pressed", !1), t.selection.setAtStart(t.el), t.selection.restore(), t.placeholder.refresh(), t.undo.saveStep();
        }(Z), t.events.trigger("codeView.update"));
      }
      function F() {
        Y() && k(!1), f && f.toTextArea(), n.val("").removeData().remove(), n = null, ee && (ee.remove(), ee = null);
      }
      return { _init: function() {
        if (t.events.on("focus", function() {
          t.opts.toolbarContainer && function() {
            var le = t.$tb.find('.fr-command[data-cmd="html"]');
            Y() ? (t.$tb.find(".fr-btn-grp > .fr-command, .fr-more-toolbar > .fr-command").not(le).filter(function() {
              return t.opts.codeViewKeepActiveButtons.indexOf(G(this).data("cmd")) < 0;
            }).addClass("fr-disabled").attr("aria-disabled", !1), le.addClass("fr-active").attr("aria-pressed", !1)) : (t.$tb.find(".fr-btn-grp > .fr-command, .fr-more-toolbar > .fr-command").not(le).removeClass("fr-disabled").attr("aria-disabled", !1), le.removeClass("fr-active").attr("aria-pressed", !1));
          }();
        }), !t.$wp)
          return !1;
      }, toggle: k, isActive: Y, get: ce };
    }, o.RegisterCommand("html", { title: "Code View", undo: !1, focus: !1, forcedRefresh: !0, toggle: !0, callback: function() {
      this.codeView.toggle();
    }, plugin: "codeView" }), o.DefineIcon("html", { NAME: "code", SVG_KEY: "codeView" });
  });
})();
/*!
 * froala_editor v3.1.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
(function(Ie, Le) {
  (function(o, t) {
    t($e());
  })(ke, function(o) {
    o = o && o.hasOwnProperty("default") ? o.default : o, Object.assign(o.DEFAULTS, { dragInline: !0 }), o.PLUGINS.draggable = function(t) {
      var n = t.$;
      function f(te) {
        return !(!te.originalEvent || !te.originalEvent.target || te.originalEvent.target.nodeType !== Node.TEXT_NODE) || (te.target && te.target.tagName === "A" && te.target.childNodes.length === 1 && te.target.childNodes[0].tagName === "IMG" && (te.target = te.target.childNodes[0]), n(te.target).hasClass("fr-draggable") ? (t.undo.canDo() || t.undo.saveStep(), t.opts.dragInline ? t.$el.attr("contenteditable", !0) : t.$el.attr("contenteditable", !1), t.opts.toolbarInline && t.toolbar.hide(), n(te.target).addClass("fr-dragging"), t.browser.msie || t.browser.edge || t.selection.clear(), void te.originalEvent.dataTransfer.setData("text", "Froala")) : (te.preventDefault(), !1));
      }
      var G, Y = function(k) {
        return !(k && (k.tagName === "HTML" || k.tagName === "BODY" || t.node.isElement(k)));
      };
      function ce(te, k, F) {
        if (t.opts.iframe) {
          var P = t.helpers.getPX(t.$wp.find(".fr-iframe").css("padding-top")), Z = t.helpers.getPX(t.$wp.find(".fr-iframe").css("padding-left"));
          te += t.$iframe.offset().top + P, k += t.$iframe.offset().left + Z;
        }
        G.offset().top !== te && G.css("top", te), G.offset().left !== k && G.css("left", k), G.width() !== F && G.css("width", F);
      }
      function ue(te) {
        te.originalEvent.dataTransfer.dropEffect = "move", t.opts.dragInline ? (!function() {
          for (var F = null, P = 0; P < o.INSTANCES.length; P++)
            if ((F = o.INSTANCES[P].$el.find(".fr-dragging")).length)
              return F.get(0);
        }() || t.browser.msie || t.browser.edge) && te.preventDefault() : (te.preventDefault(), function(F) {
          var P = t.doc.elementFromPoint(F.originalEvent.pageX - t.win.pageXOffset, F.originalEvent.pageY - t.win.pageYOffset);
          if (!Y(P)) {
            for (var Z = 0, le = P; !Y(le) && le === P && 0 < F.originalEvent.pageY - t.win.pageYOffset - Z; )
              Z++, le = t.doc.elementFromPoint(F.originalEvent.pageX - t.win.pageXOffset, F.originalEvent.pageY - t.win.pageYOffset - Z);
            (!Y(le) || G && t.$el.find(le).length === 0 && le !== G.get(0)) && (le = null);
            for (var he = 0, ge = P; !Y(ge) && ge === P && F.originalEvent.pageY - t.win.pageYOffset + he < n(t.doc).height(); )
              he++, ge = t.doc.elementFromPoint(F.originalEvent.pageX - t.win.pageXOffset, F.originalEvent.pageY - t.win.pageYOffset + he);
            (!Y(ge) || G && t.$el.find(ge).length === 0 && ge !== G.get(0)) && (ge = null), P = ge === null && le ? le : ge && le === null ? ge : ge && le ? Z < he ? le : ge : null;
          }
          if (n(P).hasClass("fr-drag-helper"))
            return !1;
          if (P && !t.node.isBlock(P) && (P = t.node.blockParent(P)), P && 0 <= ["TD", "TH", "TR", "THEAD", "TBODY"].indexOf(P.tagName) && (P = n(P).parents("table").get(0)), P && 0 <= ["LI"].indexOf(P.tagName) && (P = n(P).parents("UL, OL").get(0)), P && !n(P).hasClass("fr-drag-helper")) {
            var e;
            G || (o.$draggable_helper || (o.$draggable_helper = n(document.createElement("div")).attr("class", "fr-drag-helper")), G = o.$draggable_helper, t.events.on("shared.destroy", function() {
              G.html("").removeData().remove(), G = null;
            }, !0)), e = F.originalEvent.pageY < n(P).offset().top + n(P).outerHeight() / 2;
            var r = n(P), s = 0;
            e || r.next().length !== 0 ? (e || (r = r.next()), G.data("fr-position") === "before" && r.is(G.data("fr-tag")) || (0 < r.prev().length && (s = parseFloat(r.prev().css("margin-bottom")) || 0), s = Math.max(s, parseFloat(r.css("margin-top")) || 0), ce(r.offset().top - s / 2 - t.$box.offset().top, r.offset().left - t.win.pageXOffset - t.$box.offset().left, r.width()), G.data("fr-position", "before"))) : G.data("fr-position") === "after" && r.is(G.data("fr-tag")) || (s = parseFloat(r.css("margin-bottom")) || 0, ce(r.offset().top + n(P).height() + s / 2 - t.$box.offset().top, r.offset().left - t.win.pageXOffset - t.$box.offset().left, r.width()), G.data("fr-position", "after")), G.data("fr-tag", r), G.addClass("fr-visible"), t.$box.append(G);
          } else
            G && 0 < t.$box.find(G).length && G.removeClass("fr-visible");
        }(te));
      }
      function ee(te) {
        te.originalEvent.dataTransfer.dropEffect = "move", t.opts.dragInline || te.preventDefault();
      }
      function w(te) {
        t.$el.attr("contenteditable", !0);
        var k = t.$el.find(".fr-dragging");
        G && G.hasClass("fr-visible") && t.$box.find(G).length ? oe(te) : k.length && (te.preventDefault(), te.stopPropagation()), G && t.$box.find(G).length && G.removeClass("fr-visible"), k.removeClass("fr-dragging");
      }
      function oe(te) {
        var k, F;
        t.$el.attr("contenteditable", !0);
        for (var P = 0; P < o.INSTANCES.length; P++)
          if ((k = o.INSTANCES[P].$el.find(".fr-dragging")).length) {
            F = o.INSTANCES[P];
            break;
          }
        if (k.length) {
          if (te.preventDefault(), te.stopPropagation(), G && G.hasClass("fr-visible") && t.$box.find(G).length)
            G.data("fr-tag")[G.data("fr-position")]('<span class="fr-marker"></span>'), G.removeClass("fr-visible");
          else if (t.markers.insertAtPoint(te.originalEvent) === !1)
            return !1;
          if (k.removeClass("fr-dragging"), (k = t.events.chainTrigger("element.beforeDrop", k)) === !1)
            return !1;
          var Z = k;
          if (k.parent().is("A") && k.parent().get(0).childNodes.length === 1 && (Z = k.parent()), t.core.isEmpty() ? t.events.focus() : (t.$el.find(".fr-marker").replaceWith(o.MARKERS), t.selection.restore()), F === t || t.undo.canDo() || t.undo.saveStep(), t.core.isEmpty())
            t.$el.html(Z);
          else {
            var le = t.markers.insert();
            Z.find(le).length === 0 ? n(le).replaceWith(Z) : k.find(le).length === 0 && n(le).replaceWith(k), k.after(o.MARKERS), t.selection.restore();
          }
          return t.popups.hideAll(), t.selection.save(), t.$el.find(t.html.emptyBlockTagsQuery()).not("TD, TH, LI, .fr-inner").not(t.opts.htmlAllowedEmptyTags.join(",")).remove(), t.html.wrap(), t.html.fillEmptyBlocks(), t.selection.restore(), t.undo.saveStep(), t.opts.iframe && t.size.syncIframe(), F !== t && (F.popups.hideAll(), F.$el.find(F.html.emptyBlockTagsQuery()).not("TD, TH, LI, .fr-inner").remove(), F.html.wrap(), F.html.fillEmptyBlocks(), F.undo.saveStep(), F.events.trigger("element.dropped"), F.opts.iframe && F.size.syncIframe()), t.events.trigger("element.dropped", [Z]), !1;
        }
        G && G.removeClass("fr-visible"), t.undo.canDo() || t.undo.saveStep(), setTimeout(function() {
          t.undo.saveStep();
        }, 0);
      }
      function pe(te) {
        if (te && te.tagName === "DIV" && t.node.hasClass(te, "fr-drag-helper"))
          te.parentNode.removeChild(te);
        else if (te && te.nodeType === Node.ELEMENT_NODE)
          for (var k = te.querySelectorAll("div.fr-drag-helper"), F = 0; F < k.length; F++)
            k[F].parentNode.removeChild(k[F]);
      }
      return { _init: function() {
        t.opts.enter === o.ENTER_BR && (t.opts.dragInline = !0), t.events.on("dragstart", f, !0), t.events.on("dragover", ue, !0), t.events.on("dragenter", ee, !0), t.events.on("document.dragend", w, !0), t.events.on("document.drop", w, !0), t.events.on("drop", oe, !0), t.events.on("html.processGet", pe);
      } };
    };
  });
})();
/*!
 * froala_editor v3.1.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
(function(Ie, Le) {
  (function(o, t) {
    t($e());
  })(ke, function(o) {
    o = o && o.hasOwnProperty("default") ? o.default : o, Object.assign(o.DEFAULTS, { entities: "&quot;&#39;&iexcl;&cent;&pound;&curren;&yen;&brvbar;&sect;&uml;&copy;&ordf;&laquo;&not;&shy;&reg;&macr;&deg;&plusmn;&sup2;&sup3;&acute;&micro;&para;&middot;&cedil;&sup1;&ordm;&raquo;&frac14;&frac12;&frac34;&iquest;&Agrave;&Aacute;&Acirc;&Atilde;&Auml;&Aring;&AElig;&Ccedil;&Egrave;&Eacute;&Ecirc;&Euml;&Igrave;&Iacute;&Icirc;&Iuml;&ETH;&Ntilde;&Ograve;&Oacute;&Ocirc;&Otilde;&Ouml;&times;&Oslash;&Ugrave;&Uacute;&Ucirc;&Uuml;&Yacute;&THORN;&szlig;&agrave;&aacute;&acirc;&atilde;&auml;&aring;&aelig;&ccedil;&egrave;&eacute;&ecirc;&euml;&igrave;&iacute;&icirc;&iuml;&eth;&ntilde;&ograve;&oacute;&ocirc;&otilde;&ouml;&divide;&oslash;&ugrave;&uacute;&ucirc;&uuml;&yacute;&thorn;&yuml;&OElig;&oelig;&Scaron;&scaron;&Yuml;&fnof;&circ;&tilde;&Alpha;&Beta;&Gamma;&Delta;&Epsilon;&Zeta;&Eta;&Theta;&Iota;&Kappa;&Lambda;&Mu;&Nu;&Xi;&Omicron;&Pi;&Rho;&Sigma;&Tau;&Upsilon;&Phi;&Chi;&Psi;&Omega;&alpha;&beta;&gamma;&delta;&epsilon;&zeta;&eta;&theta;&iota;&kappa;&lambda;&mu;&nu;&xi;&omicron;&pi;&rho;&sigmaf;&sigma;&tau;&upsilon;&phi;&chi;&psi;&omega;&thetasym;&upsih;&piv;&ensp;&emsp;&thinsp;&zwnj;&zwj;&lrm;&rlm;&ndash;&mdash;&lsquo;&rsquo;&sbquo;&ldquo;&rdquo;&bdquo;&dagger;&Dagger;&bull;&hellip;&permil;&prime;&Prime;&lsaquo;&rsaquo;&oline;&frasl;&euro;&image;&weierp;&real;&trade;&alefsym;&larr;&uarr;&rarr;&darr;&harr;&crarr;&lArr;&uArr;&rArr;&dArr;&hArr;&forall;&part;&exist;&empty;&nabla;&isin;&notin;&ni;&prod;&sum;&minus;&lowast;&radic;&prop;&infin;&ang;&and;&or;&cap;&cup;&int;&there4;&sim;&cong;&asymp;&ne;&equiv;&le;&ge;&sub;&sup;&nsub;&sube;&supe;&oplus;&otimes;&perp;&sdot;&lceil;&rceil;&lfloor;&rfloor;&lang;&rang;&loz;&spades;&clubs;&hearts;&diams;" }), o.PLUGINS.entities = function(t) {
      var n, f, G = t.$;
      function Y(ee) {
        var w = ee.textContent;
        if (w.match(n)) {
          for (var oe = "", pe = 0; pe < w.length; pe++)
            f[w[pe]] ? oe += f[w[pe]] : oe += w[pe];
          ee.textContent = oe;
        }
      }
      function ce(ee) {
        if (ee && 0 <= ["STYLE", "SCRIPT", "svg", "IFRAME"].indexOf(ee.tagName))
          return !0;
        for (var w = t.node.contents(ee), oe = 0; oe < w.length; oe++)
          w[oe].nodeType === Node.TEXT_NODE ? Y(w[oe]) : ce(w[oe]);
        return ee.nodeType === Node.TEXT_NODE && Y(ee), !1;
      }
      var ue = function(w) {
        return w.length === 0 ? "" : t.clean.exec(w, ce).replace(/\&amp;/g, "&");
      };
      return { _init: function() {
        t.opts.htmlSimpleAmpersand || (t.opts.entities = "".concat(t.opts.entities, "&amp;"));
        var w = G(document.createElement("div")).html(t.opts.entities).text(), oe = t.opts.entities.split(";");
        f = {}, n = "";
        for (var pe = 0; pe < w.length; pe++) {
          var te = w.charAt(pe);
          f[te] = "".concat(oe[pe], ";"), n += "\\".concat(te + (pe < w.length - 1 ? "|" : ""));
        }
        n = new RegExp("(".concat(n, ")"), "g"), t.events.on("html.get", ue, !0);
      } };
    };
  });
})();
/*!
 * froala_editor v3.1.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
(function(Ie, Le) {
  (function(o, t) {
    t($e());
  })(ke, function(o) {
    o = o && o.hasOwnProperty("default") ? o.default : o, Object.assign(o.DEFAULTS, { fontFamily: { "Arial,Helvetica,sans-serif": "Arial", "Georgia,serif": "Georgia", "Impact,Charcoal,sans-serif": "Impact", "Tahoma,Geneva,sans-serif": "Tahoma", "Times New Roman,Times,serif,-webkit-standard": "Times New Roman", "Verdana,Geneva,sans-serif": "Verdana" }, fontFamilySelection: !1, fontFamilyDefaultSelection: "Font Family" }), o.PLUGINS.fontFamily = function(t) {
      var n = t.$;
      function f(ce) {
        var ue = ce.replace(/(sans-serif|serif|monospace|cursive|fantasy)/gi, "").replace(/"|'| /g, "").split(",");
        return n(this).grep(ue, function(ee) {
          return 0 < ee.length;
        });
      }
      function G(ce, ue) {
        for (var ee = 0; ee < ce.length; ee++)
          for (var w = 0; w < ue.length; w++)
            if (ce[ee].toLowerCase() === ue[w].toLowerCase())
              return [ee, w];
        return null;
      }
      function Y() {
        var ce = f(n(t.selection.element()).css("font-family")), ue = [];
        for (var ee in t.opts.fontFamily)
          if (t.opts.fontFamily.hasOwnProperty(ee)) {
            var w = G(ce, f(ee));
            w && ue.push([ee, w]);
          }
        return ue.length === 0 ? null : (ue.sort(function(oe, pe) {
          var te = oe[1][0] - pe[1][0];
          return te === 0 ? oe[1][1] - pe[1][1] : te;
        }), ue[0][0]);
      }
      return { apply: function(ue) {
        t.format.applyStyle("font-family", ue);
      }, refreshOnShow: function(ue, ee) {
        ee.find(".fr-command.fr-active").removeClass("fr-active").attr("aria-selected", !1), ee.find('.fr-command[data-param1="'.concat(Y(), '"]')).addClass("fr-active").attr("aria-selected", !0);
      }, refresh: function(ue) {
        if (t.opts.fontFamilySelection) {
          var ee = n(t.selection.element()).css("font-family").replace(/(sans-serif|serif|monospace|cursive|fantasy)/gi, "").replace(/"|'|/g, "").split(",");
          ue.find("> span").text(t.opts.fontFamily[Y()] || ee[0] || t.language.translate(t.opts.fontFamilyDefaultSelection));
        }
      } };
    }, o.RegisterCommand("fontFamily", { type: "dropdown", displaySelection: function(t) {
      return t.opts.fontFamilySelection;
    }, defaultSelection: function(t) {
      return t.opts.fontFamilyDefaultSelection;
    }, displaySelectionWidth: 120, html: function() {
      var t = '<ul class="fr-dropdown-list" role="presentation">', n = this.opts.fontFamily;
      for (var f in n)
        n.hasOwnProperty(f) && (t += '<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="fontFamily" data-param1="'.concat(f, `" 
        style="font-family: `).concat(f, '" title="').concat(n[f], '">').concat(n[f], "</a></li>"));
      return t += "</ul>";
    }, title: "Font Family", callback: function(t, n) {
      this.fontFamily.apply(n);
    }, refresh: function(t) {
      this.fontFamily.refresh(t);
    }, refreshOnShow: function(t, n) {
      this.fontFamily.refreshOnShow(t, n);
    }, plugin: "fontFamily" }), o.DefineIcon("fontFamily", { NAME: "font", SVG_KEY: "fontFamily" });
  });
})();
/*!
 * froala_editor v3.1.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
(function(Ie, Le) {
  (function(o, t) {
    t($e());
  })(ke, function(o) {
    o = o && o.hasOwnProperty("default") ? o.default : o, Object.assign(o.DEFAULTS, { fontSize: ["8", "9", "10", "11", "12", "14", "18", "24", "30", "36", "48", "60", "72", "96"], fontSizeSelection: !1, fontSizeDefaultSelection: "12", fontSizeUnit: "px" }), o.PLUGINS.fontSize = function(t) {
      var n = t.$;
      return { apply: function(G) {
        t.format.applyStyle("font-size", G);
      }, refreshOnShow: function(G, Y) {
        var ce = n(t.selection.element()).css("font-size");
        t.opts.fontSizeUnit === "pt" && (ce = "".concat(Math.round(72 * parseFloat(ce, 10) / 96), "pt")), Y.find(".fr-command.fr-active").removeClass("fr-active").attr("aria-selected", !1), Y.find('.fr-command[data-param1="'.concat(ce, '"]')).addClass("fr-active").attr("aria-selected", !0);
      }, refresh: function(G) {
        if (t.opts.fontSizeSelection) {
          var Y = t.helpers.getPX(n(t.selection.element()).css("font-size"));
          t.opts.fontSizeUnit === "pt" && (Y = "".concat(Math.round(72 * parseFloat(Y, 10) / 96), "pt")), G.find("> span").text(Y);
        }
      } };
    }, o.RegisterCommand("fontSize", { type: "dropdown", title: "Font Size", displaySelection: function(t) {
      return t.opts.fontSizeSelection;
    }, displaySelectionWidth: 30, defaultSelection: function(t) {
      return t.opts.fontSizeDefaultSelection;
    }, html: function() {
      for (var t = '<ul class="fr-dropdown-list" role="presentation">', n = this.opts.fontSize, f = 0; f < n.length; f++) {
        var G = n[f];
        t += '<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="fontSize" data-param1="'.concat(G).concat(this.opts.fontSizeUnit, '" title="').concat(G, '">').concat(G, "</a></li>");
      }
      return t += "</ul>";
    }, callback: function(t, n) {
      this.fontSize.apply(n);
    }, refresh: function(t) {
      this.fontSize.refresh(t);
    }, refreshOnShow: function(t, n) {
      this.fontSize.refreshOnShow(t, n);
    }, plugin: "fontSize" }), o.DefineIcon("fontSize", { NAME: "text-height", SVG_KEY: "fontSize" });
  });
})();
/*!
 * froala_editor v3.1.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
(function(Ie, Le) {
  (function(o, t) {
    t($e());
  })(ke, function(o) {
    o = o && o.hasOwnProperty("default") ? o.default : o, Object.assign(o.POPUP_TEMPLATES, { "forms.edit": "[_BUTTONS_]", "forms.update": "[_BUTTONS_][_TEXT_LAYER_]" }), Object.assign(o.DEFAULTS, { formEditButtons: ["inputStyle", "inputEdit"], formStyles: { "fr-rounded": "Rounded", "fr-large": "Large" }, formMultipleStyles: !0, formUpdateButtons: ["inputBack", "|"] }), o.PLUGINS.forms = function(t) {
      var n, f = t.$;
      function G(k) {
        t.selection.clear(), f(this).data("mousedown", !0);
      }
      function Y(k) {
        f(this).data("mousedown") && (k.stopPropagation(), f(this).removeData("mousedown"), w(n = this)), k.preventDefault();
      }
      function ce() {
        t.$el.find("input, textarea, button").removeData("mousedown");
      }
      function ue() {
        f(this).removeData("mousedown");
      }
      function ee() {
        return n || null;
      }
      function w(k) {
        if (["checkbox", "radio"].indexOf(k.type) == -1) {
          var F = t.popups.get("forms.edit");
          F || (F = function() {
            var ge = "";
            0 < t.opts.formEditButtons.length && (ge = '<div class="fr-buttons">'.concat(t.button.buildList(t.opts.formEditButtons), "</div>"));
            var e = { buttons: ge }, r = t.popups.create("forms.edit", e);
            return t.$wp && t.events.$on(t.$wp, "scroll.link-edit", function() {
              ee() && t.popups.isVisible("forms.edit") && w(ee());
            }), r;
          }());
          var P = f(n = k);
          t.popups.refresh("forms.edit"), t.popups.setContainer("forms.edit", t.$sc);
          var Z = P.offset().left + P.outerWidth() / 2, le = P.offset().top + P.outerHeight();
          t.popups.show("forms.edit", Z, le, P.outerHeight());
        }
      }
      function oe() {
        var k = t.popups.get("forms.update"), F = ee();
        if (F) {
          var P = f(F);
          P.is("button") ? k.find('input[type="text"][name="text"]').val(P.text()) : P.is("input[type=button]") || P.is("input[type=submit]") || P.is("input[type=reset]") ? k.find('input[type="text"][name="text"]').val(P.val()) : k.find('input[type="text"][name="text"]').val(P.attr("placeholder"));
        }
        k.find('input[type="text"][name="text"]').trigger("change");
      }
      function pe() {
        n = null;
      }
      function te(k) {
        if (k)
          return t.popups.onRefresh("forms.update", oe), t.popups.onHide("forms.update", pe), !0;
        var F = "";
        1 <= t.opts.formUpdateButtons.length && (F = '<div class="fr-buttons">'.concat(t.button.buildList(t.opts.formUpdateButtons), "</div>"));
        var P = 0, Z = { buttons: F, text_layer: `<div class="fr-forms-text-layer fr-layer fr-active"> 
    <div class="fr-input-line"><input name="text" type="text" placeholder="Text" tabIndex=" `.concat(++P, ` "></div>
    <div class="fr-action-buttons"><button class="fr-command fr-submit" data-cmd="updateInput" href="#" tabIndex="`).concat(2, '" type="button">').concat(t.language.translate("Update"), "</button></div></div>") };
        return t.popups.create("forms.update", Z);
      }
      return { _init: function() {
        (function() {
          t.events.$on(t.$el, t._mousedown, "input, textarea, button", G), t.events.$on(t.$el, t._mouseup, "input, textarea, button", Y), t.events.$on(t.$el, "touchmove", "input, textarea, button", ue), t.events.$on(t.$el, t._mouseup, ce), t.events.$on(t.$win, t._mouseup, ce), te(!0);
        })(), t.events.$on(t.$el, "submit", "form", function(F) {
          return F.preventDefault(), !1;
        });
      }, updateInput: function() {
        var F = t.popups.get("forms.update"), P = ee();
        if (P) {
          var Z = f(P), le = F.find('input[type="text"][name="text"]').val() || "";
          Z.is("button") ? le.length ? Z.text(le) : Z.text("\u200B") : ["button", "submit", "reset"].indexOf(P.type) != -1 ? Z.attr("value", le) : Z.attr("placeholder", le), t.popups.hide("forms.update"), w(P);
        }
      }, getInput: ee, applyStyle: function(F, P, Z) {
        P === void 0 && (P = t.opts.formStyles), Z === void 0 && (Z = t.opts.formMultipleStyles);
        var le = ee();
        if (!le)
          return !1;
        if (!Z) {
          var he = Object.keys(P);
          he.splice(he.indexOf(F), 1), f(le).removeClass(he.join(" "));
        }
        f(le).toggleClass(F);
      }, showUpdatePopup: function() {
        var F = ee();
        if (F) {
          var P = f(F), Z = t.popups.get("forms.update");
          Z || (Z = te()), t.popups.isVisible("forms.update") || t.popups.refresh("forms.update"), t.popups.setContainer("forms.update", t.$sc);
          var le = P.offset().left + P.outerWidth() / 2, he = P.offset().top + P.outerHeight();
          t.popups.show("forms.update", le, he, P.outerHeight());
        }
      }, showEditPopup: w, back: function() {
        t.events.disableBlur(), t.selection.restore(), t.events.enableBlur();
        var F = ee();
        F && t.$wp && (F.tagName === "BUTTON" && t.selection.restore(), w(F));
      } };
    }, o.RegisterCommand("updateInput", { undo: !1, focus: !1, title: "Update", callback: function() {
      this.forms.updateInput();
    } }), o.DefineIcon("inputStyle", { NAME: "magic", SVG_KEY: "inlineStyle" }), o.RegisterCommand("inputStyle", { title: "Style", type: "dropdown", html: function() {
      var t = '<ul class="fr-dropdown-list">', n = this.opts.formStyles;
      for (var f in n)
        n.hasOwnProperty(f) && (t += '<li><a class="fr-command" tabIndex="-1" data-cmd="inputStyle" data-param1="'.concat(f, '">').concat(this.language.translate(n[f]), "</a></li>"));
      return t += "</ul>";
    }, callback: function(t, n) {
      var f = this.forms.getInput();
      f && (this.forms.applyStyle(n), this.forms.showEditPopup(f));
    }, refreshOnShow: function(t, n) {
      var f = this.$, G = this.forms.getInput();
      if (G) {
        var Y = f(G);
        n.find(".fr-command").each(function() {
          var ce = f(this).data("param1");
          f(this).toggleClass("fr-active", Y.hasClass(ce));
        });
      }
    } }), o.DefineIcon("inputEdit", { NAME: "edit", SVG_KEY: "edit" }), o.RegisterCommand("inputEdit", { title: "Edit Button", undo: !1, refreshAfterCallback: !1, callback: function() {
      this.forms.showUpdatePopup();
    } }), o.DefineIcon("inputBack", { NAME: "arrow-left", SVG_KEY: "back" }), o.RegisterCommand("inputBack", { title: "Back", undo: !1, focus: !1, back: !0, refreshAfterCallback: !1, callback: function() {
      this.forms.back();
    } }), o.RegisterCommand("updateInput", { undo: !1, focus: !1, title: "Update", callback: function() {
      this.forms.updateInput();
    } });
  });
})();
/*!
 * froala_editor v3.1.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
(function(Ie, Le) {
  (function(o, t) {
    t($e());
  })(ke, function(o) {
    (o = o && o.hasOwnProperty("default") ? o.default : o).PLUGINS.fullscreen = function(t) {
      var n, f, G, Y, ce = t.$, ue = function() {
        return t.$box.hasClass("fr-fullscreen");
      };
      function ee() {
        if (t.helpers.isIOS() && t.core.hasFocus())
          return t.$el.blur(), setTimeout(oe, 250), !1;
        n = t.helpers.scrollTop(), t.$box.toggleClass("fr-fullscreen"), ce("body").first().toggleClass("fr-fullscreen"), t.helpers.isMobile() && (t.$tb.data("parent", t.$tb.parent()), t.$box.prepend(t.$tb), t.$tb.data("sticky-dummy") && t.$tb.after(t.$tb.data("sticky-dummy"))), f = t.opts.height, G = t.opts.heightMax, Y = t.opts.z_index, t.opts.height = t.o_win.innerHeight - (t.opts.toolbarInline ? 0 : t.$tb.outerHeight() + (t.$second_tb ? t.$second_tb.outerHeight() : 0)), t.opts.zIndex = 2147483641, t.opts.heightMax = null, t.size.refresh(), t.opts.toolbarInline && t.toolbar.showInline();
        for (var te = t.$box.parent(); !te.first().is("body"); )
          te.addClass("fr-fullscreen-wrapper"), te = te.parent();
        t.opts.toolbarContainer && t.$box.prepend(t.$tb), t.events.trigger("charCounter.update"), t.events.trigger("codeView.update"), t.$win.trigger("scroll");
      }
      function w() {
        if (t.helpers.isIOS() && t.core.hasFocus())
          return t.$el.blur(), setTimeout(oe, 250), !1;
        t.$box.toggleClass("fr-fullscreen"), ce("body").first().toggleClass("fr-fullscreen"), t.$tb.data("parent") && t.$tb.data("parent").prepend(t.$tb), t.$tb.data("sticky-dummy") && t.$tb.after(t.$tb.data("sticky-dummy")), t.opts.height = f, t.opts.heightMax = G, t.opts.zIndex = Y, t.size.refresh(), ce(t.o_win).scrollTop(n), t.opts.toolbarInline && t.toolbar.showInline(), t.events.trigger("charCounter.update"), t.opts.toolbarSticky && t.opts.toolbarStickyOffset && (t.opts.toolbarBottom ? t.$tb.css("bottom", t.opts.toolbarStickyOffset).data("bottom", t.opts.toolbarStickyOffset) : t.$tb.css("top", t.opts.toolbarStickyOffset).data("top", t.opts.toolbarStickyOffset));
        for (var te = t.$box.parent(); !te.first().is("body"); )
          te.removeClass("fr-fullscreen-wrapper"), te = te.parent();
        t.opts.toolbarContainer && ce(t.opts.toolbarContainer).append(t.$tb), ce(t.o_win).trigger("scroll"), t.events.trigger("codeView.update");
      }
      function oe() {
        ue() ? w() : ee(), pe(t.$tb.find('.fr-command[data-cmd="fullscreen"]'));
        var te = t.$tb.find('.fr-command[data-cmd="moreText"]'), k = t.$tb.find('.fr-command[data-cmd="moreParagraph"]'), F = t.$tb.find('.fr-command[data-cmd="moreRich"]'), P = t.$tb.find('.fr-command[data-cmd="moreMisc"]');
        te.length && t.refresh.moreText(te), k.length && t.refresh.moreParagraph(k), F.length && t.refresh.moreRich(F), P.length && t.refresh.moreMisc(P);
      }
      function pe(te) {
        var k = ue();
        te.toggleClass("fr-active", k).attr("aria-pressed", k), te.find("> *").not(".fr-sr-only").replaceWith(k ? t.icon.create("fullscreenCompress") : t.icon.create("fullscreen"));
      }
      return { _init: function() {
        if (!t.$wp)
          return !1;
        t.events.$on(ce(t.o_win), "resize", function() {
          ue() && (w(), ee());
        }), t.events.on("toolbar.hide", function() {
          if (ue() && t.helpers.isMobile())
            return !1;
        }), t.events.on("position.refresh", function() {
          if (t.helpers.isIOS())
            return !ue();
        }), t.events.on("destroy", function() {
          ue() && w();
        }, !0);
      }, toggle: oe, refresh: pe, isActive: ue };
    }, o.RegisterCommand("fullscreen", { title: "Fullscreen", undo: !1, focus: !1, accessibilityFocus: !0, forcedRefresh: !0, toggle: !0, callback: function() {
      this.fullscreen.toggle();
    }, refresh: function(t) {
      this.fullscreen.refresh(t);
    }, plugin: "fullscreen" }), o.DefineIcon("fullscreen", { NAME: "expand", SVG_KEY: "fullscreen" }), o.DefineIcon("fullscreenCompress", { NAME: "compress", SVG_KEY: "exitFullscreen" });
  });
})();
/*!
 * froala_editor v3.1.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
(function(Ie, Le) {
  (function(o, t) {
    t($e());
  })(ke, function(o) {
    o = o && o.hasOwnProperty("default") ? o.default : o, Object.assign(o.DEFAULTS, { helpSets: [{ title: "Inline Editor", commands: [{ val: "OSkeyE", desc: "Show the editor" }] }, { title: "Common actions", commands: [{ val: "OSkeyC", desc: "Copy" }, { val: "OSkeyX", desc: "Cut" }, { val: "OSkeyV", desc: "Paste" }, { val: "OSkeyZ", desc: "Undo" }, { val: "OSkeyShift+Z", desc: "Redo" }, { val: "OSkeyK", desc: "Insert Link" }, { val: "OSkeyP", desc: "Insert Image" }] }, { title: "Basic Formatting", commands: [{ val: "OSkeyA", desc: "Select All" }, { val: "OSkeyB", desc: "Bold" }, { val: "OSkeyI", desc: "Italic" }, { val: "OSkeyU", desc: "Underline" }, { val: "OSkeyS", desc: "Strikethrough" }, { val: "OSkey]", desc: "Increase Indent" }, { val: "OSkey[", desc: "Decrease Indent" }] }, { title: "Quote", commands: [{ val: "OSkey'", desc: "Increase quote level" }, { val: "OSkeyShift+'", desc: "Decrease quote level" }] }, { title: "Image / Video", commands: [{ val: "OSkey+", desc: "Resize larger" }, { val: "OSkey-", desc: "Resize smaller" }] }, { title: "Table", commands: [{ val: "Alt+Space", desc: "Select table cell" }, { val: "Shift+Left/Right arrow", desc: "Extend selection one cell" }, { val: "Shift+Up/Down arrow", desc: "Extend selection one row" }] }, { title: "Navigation", commands: [{ val: "OSkey/", desc: "Shortcuts" }, { val: "Alt+F10", desc: "Focus popup / toolbar" }, { val: "Esc", desc: "Return focus to previous position" }] }] }), o.PLUGINS.help = function(t) {
      var n, f = t.$, G = "help";
      return { _init: function() {
      }, show: function() {
        if (!n) {
          var ce = "<h4>".concat(t.language.translate("Shortcuts"), "</h4>"), ue = function() {
            for (var oe = '<div class="fr-help-modal">', pe = 0; pe < t.opts.helpSets.length; pe++) {
              var te = t.opts.helpSets[pe], k = "<table>";
              k += "<thead><tr><th>".concat(t.language.translate(te.title), "</th></tr></thead>"), k += "<tbody>";
              for (var F = 0; F < te.commands.length; F++) {
                var P = te.commands[F];
                k += "<tr>", k += "<td>".concat(t.language.translate(P.desc), "</td>"), k += "<td>".concat(P.val.replace("OSkey", t.helpers.isMac() ? "&#8984;" : "Ctrl+"), "</td>"), k += "</tr>";
              }
              oe += k += "</tbody></table>";
            }
            return oe += "</div>";
          }(), ee = t.modals.create(G, ce, ue);
          n = ee.$modal, t.events.$on(f(t.o_win), "resize", function() {
            t.modals.resize(G);
          });
        }
        t.modals.show(G), t.modals.resize(G);
      }, hide: function() {
        t.modals.hide(G);
      } };
    }, o.DefineIcon("help", { NAME: "question", SVG_KEY: "help" }), o.RegisterShortcut(o.KEYCODE.SLASH, "help", null, "/"), o.RegisterCommand("help", { title: "Help", icon: "help", undo: !1, focus: !1, modal: !0, callback: function() {
      this.help.show();
    }, plugin: "help", showOnMobile: !1 });
  });
})();
/*!
 * froala_editor v3.1.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
(function(Ie, Le) {
  (function(o, t) {
    t($e());
  })(ke, function(o) {
    function t(n) {
      return (t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(f) {
        return typeof f;
      } : function(f) {
        return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f;
      })(n);
    }
    o = o && o.hasOwnProperty("default") ? o.default : o, Object.assign(o.POPUP_TEMPLATES, { "image.insert": "[_BUTTONS_][_UPLOAD_LAYER_][_BY_URL_LAYER_][_PROGRESS_BAR_]", "image.edit": "[_BUTTONS_]", "image.alt": "[_BUTTONS_][_ALT_LAYER_]", "image.size": "[_BUTTONS_][_SIZE_LAYER_]" }), Object.assign(o.DEFAULTS, { imageInsertButtons: ["imageBack", "|", "imageUpload", "imageByURL"], imageEditButtons: ["imageReplace", "imageAlign", "imageCaption", "imageRemove", "imageLink", "linkOpen", "linkEdit", "linkRemove", "-", "imageDisplay", "imageStyle", "imageAlt", "imageSize"], imageAltButtons: ["imageBack", "|"], imageSizeButtons: ["imageBack", "|"], imageUpload: !0, imageUploadURL: null, imageCORSProxy: "https://cors-anywhere.froala.com", imageUploadRemoteUrls: !0, imageUploadParam: "file", imageUploadParams: {}, imageUploadToS3: !1, imageUploadMethod: "POST", imageMaxSize: 10485760, imageAllowedTypes: ["jpeg", "jpg", "png", "gif", "webp"], imageResize: !0, imageResizeWithPercent: !1, imageRoundPercent: !1, imageDefaultWidth: 300, imageDefaultAlign: "center", imageDefaultDisplay: "block", imageSplitHTML: !1, imageStyles: { "fr-rounded": "Rounded", "fr-bordered": "Bordered", "fr-shadow": "Shadow" }, imageMove: !0, imageMultipleStyles: !0, imageTextNear: !0, imagePaste: !0, imagePasteProcess: !1, imageMinWidth: 16, imageOutputSize: !1, imageDefaultMargin: 5, imageAddNewLine: !1 }), o.PLUGINS.image = function(n) {
      var f, G, Y, ce, ue, ee, w = n.$, oe = "https://i.froala.com/upload", pe = !1, te = 1, k = 2, F = 3, P = 4, Z = 5, le = 6, he = {};
      function ge() {
        var $ = n.popups.get("image.insert").find(".fr-image-by-url-layer input");
        $.val(""), f && $.val(f.attr("src")), $.trigger("change");
      }
      function e() {
        var $ = n.popups.get("image.edit");
        if ($ || ($ = y()), $) {
          var z = Se();
          Ne() && (z = z.find(".fr-img-wrap")), n.popups.setContainer("image.edit", n.$sc), n.popups.refresh("image.edit");
          var J = z.offset().left + z.outerWidth() / 2, de = z.offset().top + z.outerHeight();
          f.hasClass("fr-uploading") ? B() : n.popups.show("image.edit", J, de, z.outerHeight(), !0);
        }
      }
      function r() {
        I();
      }
      function s($) {
        0 < $.parents(".fr-img-caption").length && ($ = $.parents(".fr-img-caption").first());
        var z = $.hasClass("fr-dib") ? "block" : $.hasClass("fr-dii") ? "inline" : null, J = $.hasClass("fr-fil") ? "left" : $.hasClass("fr-fir") ? "right" : Te($);
        Ae($, z, J), $.removeClass("fr-dib fr-dii fr-fir fr-fil");
      }
      function d() {
        for (var $, z = n.el.tagName == "IMG" ? [n.el] : n.el.querySelectorAll("img"), J = 0; J < z.length; J++) {
          var de = w(z[J]);
          !n.opts.htmlUntouched && n.opts.useClasses ? ((n.opts.imageDefaultAlign || n.opts.imageDefaultDisplay) && (0 < ($ = de).parents(".fr-img-caption").length && ($ = $.parents(".fr-img-caption").first()), $.hasClass("fr-dii") || $.hasClass("fr-dib") || ($.addClass("fr-fi".concat(Te($)[0])), $.addClass("fr-di".concat(xe($)[0])), $.css("margin", ""), $.css("float", ""), $.css("display", ""), $.css("z-index", ""), $.css("position", ""), $.css("overflow", ""), $.css("vertical-align", ""))), n.opts.imageTextNear || (0 < de.parents(".fr-img-caption").length ? de.parents(".fr-img-caption").first().removeClass("fr-dii").addClass("fr-dib") : de.removeClass("fr-dii").addClass("fr-dib"))) : n.opts.htmlUntouched || n.opts.useClasses || (n.opts.imageDefaultAlign || n.opts.imageDefaultDisplay) && s(de), n.opts.iframe && de.on("load", n.size.syncIframe);
        }
      }
      function u($) {
        $ === void 0 && ($ = !0);
        var z, J = Array.prototype.slice.call(n.el.querySelectorAll("img")), de = [];
        for (z = 0; z < J.length; z++)
          if (de.push(J[z].getAttribute("src")), w(J[z]).toggleClass("fr-draggable", n.opts.imageMove), J[z].getAttribute("class") === "" && J[z].removeAttribute("class"), J[z].getAttribute("style") === "" && J[z].removeAttribute("style"), J[z].parentNode && J[z].parentNode.parentNode && n.node.hasClass(J[z].parentNode.parentNode, "fr-img-caption")) {
            var me = J[z].parentNode.parentNode;
            n.browser.mozilla || me.setAttribute("contenteditable", !1), me.setAttribute("draggable", !1), me.classList.add("fr-draggable");
            var Ce = J[z].nextSibling;
            Ce && !n.browser.mozilla && Ce.setAttribute("contenteditable", !0);
          }
        if (ue)
          for (z = 0; z < ue.length; z++)
            de.indexOf(ue[z].getAttribute("src")) < 0 && n.events.trigger("image.removed", [w(ue[z])]);
        if (ue && $) {
          var ye = [];
          for (z = 0; z < ue.length; z++)
            ye.push(ue[z].getAttribute("src"));
          for (z = 0; z < J.length; z++)
            ye.indexOf(J[z].getAttribute("src")) < 0 && n.events.trigger("image.loaded", [w(J[z])]);
        }
        ue = J;
      }
      function b() {
        if (G || function() {
          var we;
          if (n.shared.$image_resizer ? (G = n.shared.$image_resizer, ce = n.shared.$img_overlay, n.events.on("destroy", function() {
            w("body").first().append(G.removeClass("fr-active"));
          }, !0)) : (n.shared.$image_resizer = w(document.createElement("div")).attr("class", "fr-image-resizer"), G = n.shared.$image_resizer, n.events.$on(G, "mousedown", function(Me) {
            Me.stopPropagation();
          }, !0), n.opts.imageResize && (G.append(E("nw") + E("ne") + E("sw") + E("se")), n.shared.$img_overlay = w(document.createElement("div")).attr("class", "fr-image-overlay"), ce = n.shared.$img_overlay, we = G.get(0).ownerDocument, w(we).find("body").first().append(ce))), n.events.on("shared.destroy", function() {
            G.html("").removeData().remove(), G = null, n.opts.imageResize && (ce.remove(), ce = null);
          }, !0), n.helpers.isMobile() || n.events.$on(w(n.o_win), "resize", function() {
            f && !f.hasClass("fr-uploading") ? ne(!0) : f && (b(), Oe(), B(!1));
          }), n.opts.imageResize) {
            we = G.get(0).ownerDocument, n.events.$on(G, n._mousedown, ".fr-handler", m), n.events.$on(w(we), n._mousemove, C), n.events.$on(w(we.defaultView || we.parentWindow), n._mouseup, O), n.events.$on(ce, "mouseleave", O);
            var Be = 1, Ue = null, He = 0;
            n.events.on("keydown", function(Me) {
              if (f) {
                var Pe = navigator.userAgent.indexOf("Mac OS X") != -1 ? Me.metaKey : Me.ctrlKey, _e = Me.which;
                (_e !== Ue || 200 < Me.timeStamp - He) && (Be = 1), (_e == o.KEYCODE.EQUALS || n.browser.mozilla && _e == o.KEYCODE.FF_EQUALS) && Pe && !Me.altKey ? Be = W.call(this, Me, 1, 1, Be) : (_e == o.KEYCODE.HYPHEN || n.browser.mozilla && _e == o.KEYCODE.FF_HYPHEN) && Pe && !Me.altKey ? Be = W.call(this, Me, 2, -1, Be) : n.keys.ctrlKey(Me) || _e != o.KEYCODE.ENTER || (f.before("<br>"), A(f)), Ue = _e, He = Me.timeStamp;
              }
            }, !0), n.events.on("keyup", function() {
              Be = 1;
            });
          }
        }(), !f)
          return !1;
        var $ = n.$wp || n.$sc;
        $.append(G), G.data("instance", n);
        var z = $.scrollTop() - ($.css("position") != "static" ? $.offset().top : 0), J = $.scrollLeft() - ($.css("position") != "static" ? $.offset().left : 0);
        J -= n.helpers.getPX($.css("border-left-width")), z -= n.helpers.getPX($.css("border-top-width")), n.$el.is("img") && n.$sc.is("body") && (J = z = 0);
        var de = Se();
        Ne() && (de = de.find(".fr-img-wrap"));
        var me = 0, Ce = 0;
        n.opts.iframe && (me = n.helpers.getPX(n.$wp.find(".fr-iframe").css("padding-top")), Ce = n.helpers.getPX(n.$wp.find(".fr-iframe").css("padding-left"))), G.css("top", (n.opts.iframe ? de.offset().top + me : de.offset().top + z) - 1).css("left", (n.opts.iframe ? de.offset().left + Ce : de.offset().left + J) - 1).css("width", de.get(0).getBoundingClientRect().width).css("height", de.get(0).getBoundingClientRect().height).addClass("fr-active");
      }
      function E($) {
        return '<div class="fr-handler fr-h'.concat($, '"></div>');
      }
      function g($) {
        Ne() ? f.parents(".fr-img-caption").css("width", $) : f.css("width", $);
      }
      function m($) {
        if (!n.core.sameInstance(G))
          return !0;
        if ($.preventDefault(), $.stopPropagation(), n.$el.find("img.fr-error").left)
          return !1;
        n.undo.canDo() || n.undo.saveStep();
        var z = $.pageX || $.originalEvent.touches[0].pageX;
        if ($.type == "mousedown") {
          var J = n.$oel.get(0).ownerDocument, de = J.defaultView || J.parentWindow, me = !1;
          try {
            me = de.location != de.parent.location && !(de.$ && de.$.FE);
          } catch {
          }
          me && de.frameElement && (z += n.helpers.getPX(w(de.frameElement).offset().left) + de.frameElement.clientLeft);
        }
        (Y = w(this)).data("start-x", z), Y.data("start-width", f.width()), Y.data("start-height", f.height());
        var Ce = f.width();
        if (n.opts.imageResizeWithPercent) {
          var ye = f.parentsUntil(n.$el, n.html.blockTagsQuery()).get(0) || n.el;
          Ce = (Ce / w(ye).outerWidth() * 100).toFixed(2) + "%";
        }
        g(Ce), ce.show(), n.popups.hideAll(), be();
      }
      function C($) {
        if (!n.core.sameInstance(G))
          return !0;
        var z;
        if (Y && f) {
          if ($.preventDefault(), n.$el.find("img.fr-error").left)
            return !1;
          var J = $.pageX || ($.originalEvent.touches ? $.originalEvent.touches[0].pageX : null);
          if (!J)
            return !1;
          var de = J - Y.data("start-x"), me = Y.data("start-width");
          if ((Y.hasClass("fr-hnw") || Y.hasClass("fr-hsw")) && (de = 0 - de), n.opts.imageResizeWithPercent) {
            var Ce = f.parentsUntil(n.$el, n.html.blockTagsQuery()).get(0) || n.el;
            me = ((me + de) / w(Ce).outerWidth() * 100).toFixed(2), n.opts.imageRoundPercent && (me = Math.round(me)), g("".concat(me, "%")), (z = Ne() ? (n.helpers.getPX(f.parents(".fr-img-caption").css("width")) / w(Ce).outerWidth() * 100).toFixed(2) : (n.helpers.getPX(f.css("width")) / w(Ce).outerWidth() * 100).toFixed(2)) === me || n.opts.imageRoundPercent || g("".concat(z, "%")), f.css("height", "").removeAttr("height");
          } else
            me + de >= n.opts.imageMinWidth && (g(me + de), z = Ne() ? n.helpers.getPX(f.parents(".fr-img-caption").css("width")) : n.helpers.getPX(f.css("width"))), z !== me + de && g(z), ((f.attr("style") || "").match(/(^height:)|(; *height:)/) || f.attr("height")) && (f.css("height", Y.data("start-height") * f.width() / Y.data("start-width")), f.removeAttr("height"));
          b(), n.events.trigger("image.resize", [Re()]);
        }
      }
      function O($) {
        if (!n.core.sameInstance(G))
          return !0;
        if (Y && f) {
          if ($ && $.stopPropagation(), n.$el.find("img.fr-error").left)
            return !1;
          Y = null, ce.hide(), b(), e(), n.undo.saveStep(), n.events.trigger("image.resizeEnd", [Re()]);
        } else
          G.removeClass("fr-active");
      }
      function U($, z, J) {
        n.edit.on(), f && f.addClass("fr-error"), he[$] ? v(n.language.translate(he[$])) : v(n.language.translate("Something went wrong. Please try again.")), !f && J && T(J), n.events.trigger("image.error", [{ code: $, message: he[$] }, z, J]);
      }
      function y($) {
        if ($)
          return n.$wp && n.events.$on(n.$wp, "scroll.image-edit", function() {
            f && n.popups.isVisible("image.edit") && (n.events.disableBlur(), e());
          }), !0;
        var z = "";
        if (0 < n.opts.imageEditButtons.length) {
          var J = { buttons: z += `<div class="fr-buttons"> 
        `.concat(n.button.buildList(n.opts.imageEditButtons), `
        </div>`) };
          return n.popups.create("image.edit", J);
        }
        return !1;
      }
      function B($) {
        var z = n.popups.get("image.insert");
        if (z || (z = _()), z.find(".fr-layer.fr-active").removeClass("fr-active").addClass("fr-pactive"), z.find(".fr-image-progress-bar-layer").addClass("fr-active"), z.find(".fr-buttons").hide(), f) {
          var J = Se();
          n.popups.setContainer("image.insert", n.$sc);
          var de = J.offset().left, me = J.offset().top + J.height();
          n.popups.show("image.insert", de, me, J.outerHeight());
        }
        $ === void 0 && x(n.language.translate("Uploading"), 0);
      }
      function I($) {
        var z = n.popups.get("image.insert");
        if (z && (z.find(".fr-layer.fr-pactive").addClass("fr-active").removeClass("fr-pactive"), z.find(".fr-image-progress-bar-layer").removeClass("fr-active"), z.find(".fr-buttons").show(), $ || n.$el.find("img.fr-error").length)) {
          if (n.events.focus(), n.$el.find("img.fr-error").length && (n.$el.find("img.fr-error").remove(), n.undo.saveStep(), n.undo.run(), n.undo.dropRedo()), !n.$wp && f) {
            var J = f;
            ne(!0), n.selection.setAfter(J.get(0)), n.selection.restore();
          }
          n.popups.hide("image.insert");
        }
      }
      function x($, z) {
        var J = n.popups.get("image.insert");
        if (J) {
          var de = J.find(".fr-image-progress-bar-layer");
          de.find("h3").text($ + (z ? " ".concat(z, "%") : "")), de.removeClass("fr-error"), z ? (de.find("div").removeClass("fr-indeterminate"), de.find("div > span").css("width", "".concat(z, "%"))) : de.find("div").addClass("fr-indeterminate");
        }
      }
      function v($) {
        B();
        var z = n.popups.get("image.insert").find(".fr-image-progress-bar-layer");
        z.addClass("fr-error");
        var J = z.find("h3");
        J.text($), n.events.disableBlur(), J.focus();
      }
      function A($) {
        fe.call($.get(0));
      }
      function l() {
        var $ = w(this);
        n.popups.hide("image.insert"), $.removeClass("fr-uploading"), $.next().is("br") && $.next().remove(), A($), n.events.trigger("image.loaded", [$]);
      }
      function i($, z, J, de, me) {
        de && typeof de == "string" && (de = n.$(de)), n.edit.off(), x(n.language.translate("Loading image")), z && ($ = n.helpers.sanitizeURL($));
        var Ce = new Image();
        Ce.onload = function() {
          var ye, we;
          if (de) {
            n.undo.canDo() || de.hasClass("fr-uploading") || n.undo.saveStep();
            var Be = de.data("fr-old-src");
            de.data("fr-image-pasted") && (Be = null), n.$wp ? ((ye = de.clone().removeData("fr-old-src").removeClass("fr-uploading").removeAttr("data-fr-image-pasted")).off("load"), Be && de.attr("src", Be), de.replaceWith(ye)) : ye = de;
            for (var Ue = ye.get(0).attributes, He = 0; He < Ue.length; He++) {
              var Me = Ue[He];
              Me.nodeName.indexOf("data-") === 0 && ye.removeAttr(Me.nodeName);
            }
            if (J !== void 0)
              for (we in J)
                J.hasOwnProperty(we) && we != "link" && ye.attr("data-".concat(we), J[we]);
            ye.on("load", l), ye.attr("src", $), n.edit.on(), u(!1), n.undo.saveStep(), n.events.disableBlur(), n.$el.blur(), n.events.trigger(Be ? "image.replaced" : "image.inserted", [ye, me]);
          } else
            ye = h($, J, l), u(!1), n.undo.saveStep(), n.events.disableBlur(), n.$el.blur(), n.events.trigger("image.inserted", [ye, me]);
        }, Ce.onerror = function() {
          U(te);
        }, B(n.language.translate("Loading image")), Ce.src = $;
      }
      function a($) {
        x(n.language.translate("Loading image"));
        var z = this.status, J = this.response, de = this.responseXML, me = this.responseText;
        try {
          if (n.opts.imageUploadToS3)
            if (z == 201) {
              var Ce = function(Be) {
                try {
                  var Ue = w(Be).find("Location").text(), He = w(Be).find("Key").text();
                  return n.events.trigger("image.uploadedToS3", [Ue, He, Be], !0) === !1 ? (n.edit.on(), !1) : Ue;
                } catch {
                  return U(P, Be), !1;
                }
              }(de);
              Ce && i(Ce, !1, [], $, J || de);
            } else
              U(P, J || de, $);
          else if (200 <= z && z < 300) {
            var ye = function(Be) {
              try {
                if (n.events.trigger("image.uploaded", [Be], !0) === !1)
                  return n.edit.on(), !1;
                var Ue = JSON.parse(Be);
                return Ue.link ? Ue : (U(k, Be), !1);
              } catch {
                return U(P, Be), !1;
              }
            }(me);
            ye && i(ye.link, !1, ye, $, J || me);
          } else
            U(F, J || me, $);
        } catch {
          U(P, J || me, $);
        }
      }
      function p() {
        U(P, this.response || this.responseText || this.responseXML);
      }
      function c($) {
        if ($.lengthComputable) {
          var z = $.loaded / $.total * 100 | 0;
          x(n.language.translate("Uploading"), z);
        }
      }
      function h($, z, J) {
        var de, me = w(document.createElement("img")).attr("src", $);
        if (z && z !== void 0)
          for (de in z)
            z.hasOwnProperty(de) && de != "link" && (" data-".concat(de, '="').concat(z[de], '"'), me.attr("data-str".concat(de), z[de]));
        var Ce = n.opts.imageDefaultWidth;
        Ce && Ce != "auto" && (Ce = n.opts.imageResizeWithPercent ? "100%" : "".concat(Ce, "px")), me.attr("style", Ce ? "width: ".concat(Ce, ";") : ""), Ae(me, n.opts.imageDefaultDisplay, n.opts.imageDefaultAlign), me.on("load", J), me.on("error", J), n.edit.on(), n.events.focus(!0), n.selection.restore(), n.undo.saveStep(), n.opts.imageSplitHTML ? n.markers.split() : n.markers.insert(), n.html.wrap();
        var ye = n.$el.find(".fr-marker");
        return ye.length ? (ye.parent().is("hr") && ye.parent().after(ye), n.node.isLastSibling(ye) && ye.parent().hasClass("fr-deletable") && ye.insertAfter(ye.parent()), ye.replaceWith(me)) : n.$el.append(me), n.selection.clear(), me;
      }
      function M() {
        n.edit.on(), I(!0);
      }
      function N($, z) {
        if ($ !== void 0 && 0 < $.length) {
          if (n.events.trigger("image.beforeUpload", [$, z]) === !1)
            return !1;
          var J, de = $[0];
          if ((n.opts.imageUploadURL === null || n.opts.imageUploadURL == oe) && !n.opts.imageUploadToS3)
            return function(we, Be) {
              var Ue = new FileReader();
              Ue.onload = function() {
                var He = Ue.result;
                if (Ue.result.indexOf("svg+xml") < 0) {
                  for (var Me = atob(Ue.result.split(",")[1]), Pe = [], _e = 0; _e < Me.length; _e++)
                    Pe.push(Me.charCodeAt(_e));
                  He = window.URL.createObjectURL(new Blob([new Uint8Array(Pe)], { type: we.type })), n.image.insert(He, !1, null, Be);
                }
              }, B(), Ue.readAsDataURL(we);
            }(de, z || f), !1;
          if (de.name || (de.name = new Date().getTime() + "." + (de.type || "image/jpeg").replace(/image\//g, "")), de.size > n.opts.imageMaxSize)
            return U(Z), !1;
          if (n.opts.imageAllowedTypes.indexOf(de.type.replace(/image\//g, "")) < 0)
            return U(le), !1;
          if (n.drag_support.formdata && (J = n.drag_support.formdata ? new FormData() : null), J) {
            var me;
            if (n.opts.imageUploadToS3 !== !1)
              for (me in J.append("key", n.opts.imageUploadToS3.keyStart + new Date().getTime() + "-" + (de.name || "untitled")), J.append("success_action_status", "201"), J.append("X-Requested-With", "xhr"), J.append("Content-Type", de.type), n.opts.imageUploadToS3.params)
                n.opts.imageUploadToS3.params.hasOwnProperty(me) && J.append(me, n.opts.imageUploadToS3.params[me]);
            for (me in n.opts.imageUploadParams)
              n.opts.imageUploadParams.hasOwnProperty(me) && J.append(me, n.opts.imageUploadParams[me]);
            J.append(n.opts.imageUploadParam, de, de.name);
            var Ce = n.opts.imageUploadURL;
            n.opts.imageUploadToS3 && (Ce = n.opts.imageUploadToS3.uploadURL ? n.opts.imageUploadToS3.uploadURL : "https://".concat(n.opts.imageUploadToS3.region, ".amazonaws.com/").concat(n.opts.imageUploadToS3.bucket)), function(we, Be, Ue, He) {
              function Me() {
                var _e = w(this);
                _e.off("load"), _e.addClass("fr-uploading"), _e.next().is("br") && _e.next().remove(), n.placeholder.refresh(), A(_e), b(), B(), n.edit.off(), we.onload = function() {
                  a.call(we, _e);
                }, we.onerror = p, we.upload.onprogress = c, we.onabort = M, w(_e.off("abortUpload")).on("abortUpload", function() {
                  we.readyState != 4 && (we.abort(), He ? (He.attr("src", He.data("fr-old-src")), He.removeClass("fr-uploading")) : _e.remove(), ne(!0));
                }), we.send(Be);
              }
              var Pe = new FileReader();
              Pe.onload = function() {
                var _e = Pe.result;
                if (Pe.result.indexOf("svg+xml") < 0) {
                  for (var Ve = atob(Pe.result.split(",")[1]), Fe = [], We = 0; We < Ve.length; We++)
                    Fe.push(Ve.charCodeAt(We));
                  _e = window.URL.createObjectURL(new Blob([new Uint8Array(Fe)], { type: "image/jpeg" }));
                }
                He ? (He.on("load", Me), He.on("error", function() {
                  Me(), w(this).off("error");
                }), n.edit.on(), n.undo.saveStep(), He.data("fr-old-src", He.attr("src")), He.attr("src", _e)) : h(_e, null, Me);
              }, Pe.readAsDataURL(Ue);
            }(n.core.getXHR(Ce, n.opts.imageUploadMethod), J, de, z || f);
          }
        }
      }
      function ie($) {
        if ($.is("img") && 0 < $.parents(".fr-img-caption").length)
          return $.parents(".fr-img-caption");
      }
      function D($) {
        var z = $.originalEvent.dataTransfer;
        if (z && z.files && z.files.length) {
          var J = z.files[0];
          if (J && J.type && J.type.indexOf("image") !== -1 && 0 <= n.opts.imageAllowedTypes.indexOf(J.type.replace(/image\//g, ""))) {
            if (!n.opts.imageUpload)
              return $.preventDefault(), $.stopPropagation(), !1;
            n.markers.remove(), n.markers.insertAtPoint($.originalEvent), n.$el.find(".fr-marker").replaceWith(o.MARKERS), n.$el.find(".fr-marker").length === 0 && n.selection.setAtEnd(n.el), n.popups.hideAll();
            var de = n.popups.get("image.insert");
            de || (de = _()), n.popups.setContainer("image.insert", n.$sc);
            var me = $.originalEvent.pageX, Ce = $.originalEvent.pageY;
            if (n.opts.iframe) {
              var ye = n.helpers.getPX(n.$wp.find(".fr-iframe").css("padding-top")), we = n.helpers.getPX(n.$wp.find(".fr-iframe").css("padding-left"));
              Ce += n.$iframe.offset().top + ye, me += n.$iframe.offset().left + we;
            }
            return n.popups.show("image.insert", me, Ce), B(), 0 <= n.opts.imageAllowedTypes.indexOf(J.type.replace(/image\//g, "")) ? (ne(!0), N(z.files)) : U(le), $.preventDefault(), $.stopPropagation(), !1;
          }
        }
      }
      function _($) {
        if ($)
          return n.popups.onRefresh("image.insert", ge), n.popups.onHide("image.insert", r), !0;
        var z, J, de = "";
        n.opts.imageUpload || n.opts.imageInsertButtons.indexOf("imageUpload") === -1 || n.opts.imageInsertButtons.splice(n.opts.imageInsertButtons.indexOf("imageUpload"), 1);
        var me = n.button.buildList(n.opts.imageInsertButtons);
        me !== "" && (de = '<div class="fr-buttons fr-tabs">'.concat(me, "</div>"));
        var Ce = n.opts.imageInsertButtons.indexOf("imageUpload"), ye = n.opts.imageInsertButtons.indexOf("imageByURL"), we = "";
        0 <= Ce && (z = " fr-active", 0 <= ye && ye < Ce && (z = ""), we = '<div class="fr-image-upload-layer'.concat(z, ' fr-layer" id="fr-image-upload-layer-').concat(n.id, '"><strong>').concat(n.language.translate("Drop image"), "</strong><br>(").concat(n.language.translate("or click"), ')<div class="fr-form"><input type="file" accept="image/').concat(n.opts.imageAllowedTypes.join(", image/").toLowerCase(), '" tabIndex="-1" aria-labelledby="fr-image-upload-layer-').concat(n.id, '" role="button"></div></div>'));
        var Be = "";
        0 <= ye && (z = " fr-active", 0 <= Ce && Ce < ye && (z = ""), Be = '<div class="fr-image-by-url-layer'.concat(z, ' fr-layer" id="fr-image-by-url-layer-').concat(n.id, '"><div class="fr-input-line"><input id="fr-image-by-url-layer-text-').concat(n.id, '" type="text" placeholder="http://" tabIndex="1" aria-required="true"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="imageInsertByURL" tabIndex="2" role="button">').concat(n.language.translate("Insert"), "</button></div></div>"));
        var Ue = { buttons: de, upload_layer: we, by_url_layer: Be, progress_bar: '<div class="fr-image-progress-bar-layer fr-layer"><h3 tabIndex="-1" class="fr-message">Uploading</h3><div class="fr-loader"><span class="fr-progress"></span></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-dismiss" data-cmd="imageDismissError" tabIndex="2" role="button">OK</button></div></div>' };
        return 1 <= n.opts.imageInsertButtons.length && (J = n.popups.create("image.insert", Ue)), n.$wp && n.events.$on(n.$wp, "scroll", function() {
          f && n.popups.isVisible("image.insert") && Oe();
        }), function(Me) {
          n.events.$on(Me, "dragover dragenter", ".fr-image-upload-layer", function(Pe) {
            return w(this).addClass("fr-drop"), (n.browser.msie || n.browser.edge) && Pe.preventDefault(), !1;
          }, !0), n.events.$on(Me, "dragleave dragend", ".fr-image-upload-layer", function(Pe) {
            return w(this).removeClass("fr-drop"), (n.browser.msie || n.browser.edge) && Pe.preventDefault(), !1;
          }, !0), n.events.$on(Me, "drop", ".fr-image-upload-layer", function(Pe) {
            Pe.preventDefault(), Pe.stopPropagation(), w(this).removeClass("fr-drop");
            var _e = Pe.originalEvent.dataTransfer;
            if (_e && _e.files) {
              var Ve = Me.data("instance") || n;
              Ve.events.disableBlur(), Ve.image.upload(_e.files), Ve.events.enableBlur();
            }
          }, !0), n.helpers.isIOS() && n.events.$on(Me, "touchstart", '.fr-image-upload-layer input[type="file"]', function() {
            w(this).trigger("click");
          }, !0), n.events.$on(Me, "change", '.fr-image-upload-layer input[type="file"]', function() {
            if (this.files) {
              var Pe = Me.data("instance") || n;
              Pe.events.disableBlur(), Me.find("input:focus").blur(), Pe.events.enableBlur(), Pe.image.upload(this.files, f);
            }
            w(this).val("");
          }, !0);
        }(J), J;
      }
      function Q() {
        f && n.popups.get("image.alt").find("input").val(f.attr("alt") || "").trigger("change");
      }
      function re() {
        var $ = n.popups.get("image.alt");
        $ || ($ = q()), I(), n.popups.refresh("image.alt"), n.popups.setContainer("image.alt", n.$sc);
        var z = Se();
        Ne() && (z = z.find(".fr-img-wrap"));
        var J = z.offset().left + z.outerWidth() / 2, de = z.offset().top + z.outerHeight();
        n.popups.show("image.alt", J, de, z.outerHeight(), !0);
      }
      function q($) {
        if ($)
          return n.popups.onRefresh("image.alt", Q), !0;
        var z = { buttons: '<div class="fr-buttons fr-tabs">'.concat(n.button.buildList(n.opts.imageAltButtons), "</div>"), alt_layer: '<div class="fr-image-alt-layer fr-layer fr-active" id="fr-image-alt-layer-'.concat(n.id, '"><div class="fr-input-line"><input id="fr-image-alt-layer-text-').concat(n.id, '" type="text" placeholder="').concat(n.language.translate("Alternative Text"), '" tabIndex="1"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="imageSetAlt" tabIndex="2" role="button">').concat(n.language.translate("Update"), "</button></div></div>") }, J = n.popups.create("image.alt", z);
        return n.$wp && n.events.$on(n.$wp, "scroll.image-alt", function() {
          f && n.popups.isVisible("image.alt") && re();
        }), J;
      }
      function ae() {
        var $ = n.popups.get("image.size");
        if (f)
          if (Ne()) {
            var z = f.parent();
            z.get(0).style.width || (z = f.parent().parent()), $.find('input[name="width"]').val(z.get(0).style.width).trigger("change"), $.find('input[name="height"]').val(z.get(0).style.height).trigger("change");
          } else
            $.find('input[name="width"]').val(f.get(0).style.width).trigger("change"), $.find('input[name="height"]').val(f.get(0).style.height).trigger("change");
      }
      function se() {
        var $ = n.popups.get("image.size");
        $ || ($ = H()), I(), n.popups.refresh("image.size"), n.popups.setContainer("image.size", n.$sc);
        var z = Se();
        Ne() && (z = z.find(".fr-img-wrap"));
        var J = z.offset().left + z.outerWidth() / 2, de = z.offset().top + z.outerHeight();
        n.popups.show("image.size", J, de, z.outerHeight(), !0);
      }
      function H($) {
        if ($)
          return n.popups.onRefresh("image.size", ae), !0;
        var z = { buttons: '<div class="fr-buttons fr-tabs">'.concat(n.button.buildList(n.opts.imageSizeButtons), "</div>"), size_layer: '<div class="fr-image-size-layer fr-layer fr-active" id="fr-image-size-layer-'.concat(n.id, `"><div class="fr-image-group"><div class="fr-input-line"><input id="fr-image-size-layer-width-'`).concat(n.id, '" type="text" name="width" placeholder="').concat(n.language.translate("Width"), '" tabIndex="1"></div><div class="fr-input-line"><input id="fr-image-size-layer-height').concat(n.id, '" type="text" name="height" placeholder="').concat(n.language.translate("Height"), '" tabIndex="1"></div></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="imageSetSize" tabIndex="2" role="button">').concat(n.language.translate("Update"), "</button></div></div>") }, J = n.popups.create("image.size", z);
        return n.$wp && n.events.$on(n.$wp, "scroll.image-size", function() {
          f && n.popups.isVisible("image.size") && se();
        }), J;
      }
      function W($, z, J, de) {
        return $.pageX = z, m.call(this, $), $.pageX = $.pageX + J * Math.floor(Math.pow(1.1, de)), C.call(this, $), O.call(this, $), ++de;
      }
      function T($) {
        ($ = $ || Se()) && n.events.trigger("image.beforeRemove", [$]) !== !1 && (n.popups.hideAll(), De(), ne(!0), n.undo.canDo() || n.undo.saveStep(), $.get(0) == n.el ? $.removeAttr("src") : ($.get(0).parentNode && $.get(0).parentNode.tagName == "A" ? (n.selection.setBefore($.get(0).parentNode) || n.selection.setAfter($.get(0).parentNode) || $.parent().after(o.MARKERS), w($.get(0).parentNode).remove()) : (n.selection.setBefore($.get(0)) || n.selection.setAfter($.get(0)) || $.after(o.MARKERS), $.remove()), n.html.fillEmptyBlocks(), n.selection.restore()), n.undo.saveStep());
      }
      function S($) {
        var z = $.which;
        if (f && (z == o.KEYCODE.BACKSPACE || z == o.KEYCODE.DELETE))
          return $.preventDefault(), $.stopPropagation(), T(), !1;
        if (f && z == o.KEYCODE.ESC) {
          var J = f;
          return ne(!0), n.selection.setAfter(J.get(0)), n.selection.restore(), $.preventDefault(), !1;
        }
        if (!f || z != o.KEYCODE.ARROW_LEFT && z != o.KEYCODE.ARROW_RIGHT)
          return f && z === o.KEYCODE.TAB ? ($.preventDefault(), $.stopPropagation(), ne(!0), !1) : f && z != o.KEYCODE.F10 && !n.keys.isBrowserAction($) ? ($.preventDefault(), $.stopPropagation(), !1) : void 0;
        var de = f.get(0);
        return ne(!0), z == o.KEYCODE.ARROW_LEFT ? n.selection.setBefore(de) : n.selection.setAfter(de), n.selection.restore(), $.preventDefault(), !1;
      }
      function L($) {
        if ($ && $.tagName == "IMG") {
          if (n.node.hasClass($, "fr-uploading") || n.node.hasClass($, "fr-error") ? $.parentNode.removeChild($) : n.node.hasClass($, "fr-draggable") && $.classList.remove("fr-draggable"), $.parentNode && $.parentNode.parentNode && n.node.hasClass($.parentNode.parentNode, "fr-img-caption")) {
            var z = $.parentNode.parentNode;
            z.removeAttribute("contenteditable"), z.removeAttribute("draggable"), z.classList.remove("fr-draggable");
            var J = $.nextSibling;
            J && J.removeAttribute("contenteditable");
          }
        } else if ($ && $.nodeType == Node.ELEMENT_NODE)
          for (var de = $.querySelectorAll("img.fr-uploading, img.fr-error, img.fr-draggable"), me = 0; me < de.length; me++)
            L(de[me]);
      }
      function R($) {
        if (n.events.trigger("image.beforePasteUpload", [$]) === !1)
          return !1;
        f = w($), b(), e(), Oe(), B(), f.on("load", function() {
          var Ce = [];
          b(), w(n.popups.get("image.insert").get(0)).find("div.fr-active.fr-error").length < 1 && B(), w(this).data("events").find(function(ye) {
            ye[0] === "load" && Ce.push(ye);
          }), Ce.length <= 1 && w(this).off("load");
        });
        for (var z = w($).attr("src").split(","), J = atob(z[1]), de = [], me = 0; me < J.length; me++)
          de.push(J.charCodeAt(me));
        N([new Blob([new Uint8Array(de)], { type: z[0].replace(/data\:/g, "").replace(/;base64/g, "") })], f);
      }
      function K() {
        n.opts.imagePaste ? n.$el.find("img[data-fr-image-pasted]").each(function($, z) {
          if (n.opts.imagePasteProcess) {
            var J = n.opts.imageDefaultWidth;
            J && J != "auto" && (J += n.opts.imageResizeWithPercent ? "%" : "px"), w(z).css("width", J).removeClass("fr-dii fr-dib fr-fir fr-fil"), Ae(w(z), n.opts.imageDefaultDisplay, n.opts.imageDefaultAlign);
          }
          if (z.src.indexOf("data:") === 0)
            R(z);
          else if (z.src.indexOf("blob:") === 0 || z.src.indexOf("http") === 0 && n.opts.imageUploadRemoteUrls && n.opts.imageCORSProxy) {
            var de = new Image();
            de.crossOrigin = "Anonymous", de.onload = function() {
              var me, Ce = n.o_doc.createElement("CANVAS"), ye = Ce.getContext("2d");
              Ce.height = this.naturalHeight, Ce.width = this.naturalWidth, ye.drawImage(this, 0, 0), setTimeout(function() {
                R(z);
              }, 0), me = 2e3 < this.naturalWidth || 1500 < this.naturalHeight ? "jpeg" : "png", z.src = Ce.toDataURL("image/".concat(me));
            }, de.src = (z.src.indexOf("blob:") === 0 ? "" : "".concat(n.opts.imageCORSProxy, "/")) + z.src;
          } else
            z.src.indexOf("http") !== 0 || z.src.indexOf("https://mail.google.com/mail") === 0 ? (n.selection.save(), w(z).remove(), n.selection.restore()) : w(z).removeAttr("data-fr-image-pasted");
        }) : n.$el.find("img[data-fr-image-pasted]").remove();
      }
      function V($) {
        var z = $.target.result, J = n.opts.imageDefaultWidth;
        J && J != "auto" && (J += n.opts.imageResizeWithPercent ? "%" : "px"), n.undo.saveStep(), n.html.insert('<img data-fr-image-pasted="true" src="'.concat(z, '"').concat(J ? ' style="width: '.concat(J, ';"') : "", ">"));
        var de = n.$el.find('img[data-fr-image-pasted="true"]');
        de && Ae(de, n.opts.imageDefaultDisplay, n.opts.imageDefaultAlign), n.events.trigger("paste.after");
      }
      function j($) {
        if ($ && $.clipboardData && $.clipboardData.items) {
          var z = null;
          if ($.clipboardData.types && [].indexOf.call($.clipboardData.types, "text/rtf") != -1 || $.clipboardData.getData("text/rtf"))
            z = $.clipboardData.items[0].getAsFile();
          else
            for (var J = 0; J < $.clipboardData.items.length && !(z = $.clipboardData.items[J].getAsFile()); J++)
              ;
          if (z)
            return function(me) {
              var Ce = new FileReader();
              Ce.onload = V, Ce.readAsDataURL(me);
            }(z), !1;
        }
      }
      function X($) {
        return $ = $.replace(/<img /gi, '<img data-fr-image-pasted="true" ');
      }
      function fe($) {
        if (w(this).parents("[contenteditable]").not(".fr-element").not(".fr-img-caption").not("body").first().attr("contenteditable") == "false" || $ && $.type == "touchend" && ee)
          return !0;
        if ($ && n.edit.isDisabled())
          return $.stopPropagation(), $.preventDefault(), !1;
        for (var z = 0; z < o.INSTANCES.length; z++)
          o.INSTANCES[z] != n && o.INSTANCES[z].events.trigger("image.hideResizer");
        n.toolbar.disable(), $ && ($.stopPropagation(), $.preventDefault()), n.helpers.isMobile() && (n.events.disableBlur(), n.$el.blur(), n.events.enableBlur()), n.opts.iframe && n.size.syncIframe(), f = w(this), De(), b(), e(), n.browser.msie ? (n.popups.areVisible() && n.events.disableBlur(), n.win.getSelection && (n.win.getSelection().removeAllRanges(), n.win.getSelection().addRange(n.doc.createRange()))) : n.selection.clear(), n.helpers.isIOS() && (n.events.disableBlur(), n.$el.blur()), n.button.bulkRefresh(), n.events.trigger("video.hideResizer");
      }
      function ne($) {
        f && (function() {
          return ve;
        }() || $ === !0) && (n.toolbar.enable(), G.removeClass("fr-active"), n.popups.hide("image.edit"), f = null, be(), Y = null, ce && ce.hide());
      }
      he[te] = "Image cannot be loaded from the passed link.", he[k] = "No link in upload response.", he[F] = "Error during file upload.", he[P] = "Parsing response failed.", he[Z] = "File is too large.", he[le] = "Image file type is invalid.", he[7] = "Files can be uploaded only to same domain in IE 8 and IE 9.";
      var ve = !(he[8] = "Image file is corrupted.");
      function Ee() {
        ve = !0;
      }
      function be() {
        ve = !1;
      }
      function Ae($, z, J) {
        !n.opts.htmlUntouched && n.opts.useClasses ? ($.removeClass("fr-fil fr-fir fr-dib fr-dii"), J && $.addClass("fr-fi".concat(J[0])), z && $.addClass("fr-di".concat(z[0]))) : z == "inline" ? ($.css({ display: "inline-block", verticalAlign: "bottom", margin: n.opts.imageDefaultMargin }), J == "center" ? $.css({ float: "none", marginBottom: "", marginTop: "", maxWidth: "calc(100% - ".concat(2 * n.opts.imageDefaultMargin, "px)"), textAlign: "center" }) : J == "left" ? $.css({ float: "left", marginLeft: 0, maxWidth: "calc(100% - ".concat(n.opts.imageDefaultMargin, "px)"), textAlign: "left" }) : $.css({ float: "right", marginRight: 0, maxWidth: "calc(100% - ".concat(n.opts.imageDefaultMargin, "px)"), textAlign: "right" })) : z == "block" && ($.css({ display: "block", float: "none", verticalAlign: "top", margin: "".concat(n.opts.imageDefaultMargin, "px auto"), textAlign: "center" }), J == "left" ? $.css({ marginLeft: 0, textAlign: "left" }) : J == "right" && $.css({ marginRight: 0, textAlign: "right" }));
      }
      function Te($) {
        if ($ === void 0 && ($ = Se()), $) {
          if ($.hasClass("fr-fil"))
            return "left";
          if ($.hasClass("fr-fir"))
            return "right";
          if ($.hasClass("fr-dib") || $.hasClass("fr-dii"))
            return "center";
          var z = $.css("float");
          if ($.css("float", "none"), $.css("display") == "block") {
            if ($.css("float", ""), $.css("float") != z && $.css("float", z), parseInt($.css("margin-left"), 10) === 0)
              return "left";
            if (parseInt($.css("margin-right"), 10) === 0)
              return "right";
          } else {
            if ($.css("float", ""), $.css("float") != z && $.css("float", z), $.css("float") == "left")
              return "left";
            if ($.css("float") == "right")
              return "right";
          }
        }
        return "center";
      }
      function xe($) {
        $ === void 0 && ($ = Se());
        var z = $.css("float");
        return $.css("float", "none"), $.css("display") == "block" ? ($.css("float", ""), $.css("float") != z && $.css("float", z), "block") : ($.css("float", ""), $.css("float") != z && $.css("float", z), "inline");
      }
      function Oe() {
        var $ = n.popups.get("image.insert");
        $ || ($ = _()), n.popups.isVisible("image.insert") || (I(), n.popups.refresh("image.insert"), n.popups.setContainer("image.insert", n.$sc));
        var z = Se();
        Ne() && (z = z.find(".fr-img-wrap"));
        var J = z.offset().left + z.outerWidth() / 2, de = z.offset().top + z.outerHeight();
        n.popups.show("image.insert", J, de, z.outerHeight(!0), !0);
      }
      function De() {
        if (f) {
          n.events.disableBlur(), n.selection.clear();
          var $ = n.doc.createRange();
          $.selectNode(f.get(0)), n.browser.msie && $.collapse(!0), n.selection.get().addRange($), n.events.enableBlur();
        }
      }
      function Re() {
        return f;
      }
      function Se() {
        return Ne() ? f.parents(".fr-img-caption").first() : f;
      }
      function Ne() {
        return !!f && 0 < f.parents(".fr-img-caption").length;
      }
      return { _init: function() {
        var z;
        (function() {
          n.events.$on(n.$el, n._mousedown, n.el.tagName == "IMG" ? null : 'img:not([contenteditable="false"])', function(de) {
            if (w(this).parents("contenteditable").not(".fr-element").not(".fr-img-caption").not("body").first().attr("contenteditable") == "false")
              return !0;
            n.helpers.isMobile() || n.selection.clear(), pe = !0, n.popups.areVisible() && n.events.disableBlur(), n.browser.msie && (n.events.disableBlur(), n.$el.attr("contenteditable", !1)), n.draggable || de.type == "touchstart" || de.preventDefault(), de.stopPropagation();
          }), n.events.$on(n.$el, n._mousedown, ".fr-img-caption .fr-inner", function(de) {
            n.core.hasFocus() || n.events.focus(), de.stopPropagation();
          }), n.events.$on(n.$el, "paste", ".fr-img-caption .fr-inner", function(de) {
            n.toolbar.hide(), de.stopPropagation();
          }), n.events.$on(n.$el, n._mouseup, n.el.tagName == "IMG" ? null : 'img:not([contenteditable="false"])', function(de) {
            if (w(this).parents("contenteditable").not(".fr-element").not(".fr-img-caption").not("body").first().attr("contenteditable") == "false")
              return !0;
            pe && (pe = !1, de.stopPropagation(), n.browser.msie && (n.$el.attr("contenteditable", !0), n.events.enableBlur()));
          }), n.events.on("keyup", function(de) {
            if (de.shiftKey && n.selection.text().replace(/\n/g, "") === "" && n.keys.isArrow(de.which)) {
              var me = n.selection.element(), Ce = n.selection.endElement();
              me && me.tagName == "IMG" ? A(w(me)) : Ce && Ce.tagName == "IMG" && A(w(Ce));
            }
          }, !0), n.events.on("drop", D), n.events.on("element.beforeDrop", ie), n.events.on("window.mousedown", Ee), n.events.on("window.touchmove", be), n.events.on("mouseup window.mouseup", function() {
            if (f)
              return ne(), !1;
            be();
          }), n.events.on("commands.mousedown", function(de) {
            0 < de.parents(".fr-toolbar").length && ne();
          }), n.events.on("image.resizeEnd", function() {
            n.opts.iframe && n.size.syncIframe();
          }), n.events.on("blur image.hideResizer commands.undo commands.redo element.dropped", function() {
            ne(!(pe = !1));
          }), n.events.on("modals.hide", function() {
            f && (De(), n.selection.clear());
          }), n.events.on("image.resizeEnd", function() {
            n.win.getSelection && A(f);
          }), n.opts.imageAddNewLine && n.events.on("image.inserted", function(de) {
            var me = de.get(0);
            for (me.nextSibling && me.nextSibling.tagName === "BR" && (me = me.nextSibling); me && !n.node.isElement(me); )
              me = n.node.isLastSibling(me) ? me.parentNode : null;
            n.node.isElement(me) && (n.opts.enter === o.ENTER_BR ? de.after("<br>") : w(n.node.blockParent(de.get(0))).after("<".concat(n.html.defaultTag(), "><br></").concat(n.html.defaultTag(), ">")));
          });
        })(), n.el.tagName == "IMG" && n.$el.addClass("fr-view"), n.events.$on(n.$el, n.helpers.isMobile() && !n.helpers.isWindowsPhone() ? "touchend" : "click", n.el.tagName == "IMG" ? null : 'img:not([contenteditable="false"])', fe), n.helpers.isMobile() && (n.events.$on(n.$el, "touchstart", n.el.tagName == "IMG" ? null : 'img:not([contenteditable="false"])', function() {
          ee = !1;
        }), n.events.$on(n.$el, "touchmove", function() {
          ee = !0;
        })), n.$wp ? (n.events.on("window.keydown keydown", S, !0), n.events.on("keyup", function(J) {
          if (f && J.which == o.KEYCODE.ENTER)
            return !1;
        }, !0), n.events.$on(n.$el, "keydown", function() {
          var J = n.selection.element();
          (J.nodeType === Node.TEXT_NODE || J.tagName == "BR" && n.node.isLastSibling(J)) && (J = J.parentNode), n.node.hasClass(J, "fr-inner") || (n.node.hasClass(J, "fr-img-caption") || (J = w(J).parents(".fr-img-caption").get(0)), n.node.hasClass(J, "fr-img-caption") && (w(J).after(o.INVISIBLE_SPACE + o.MARKERS), n.selection.restore()));
        })) : n.events.$on(n.$win, "keydown", S), n.events.on("toolbar.esc", function() {
          if (f) {
            if (n.$wp)
              n.events.disableBlur(), n.events.focus();
            else {
              var J = f;
              ne(!0), n.selection.setAfter(J.get(0)), n.selection.restore();
            }
            return !1;
          }
        }, !0), n.events.on("toolbar.focusEditor", function() {
          if (f)
            return !1;
        }, !0), n.events.on("window.cut window.copy", function(J) {
          if (f && n.popups.isVisible("image.edit") && !n.popups.get("image.edit").find(":focus").length) {
            var de = Se();
            Ne() ? (de.before(o.START_MARKER), de.after(o.END_MARKER), n.selection.restore(), n.paste.saveCopiedText(de.get(0).outerHTML, de.text())) : (De(), n.paste.saveCopiedText(f.get(0).outerHTML, f.attr("alt"))), J.type == "copy" ? setTimeout(function() {
              A(f);
            }) : (ne(!0), n.undo.saveStep(), setTimeout(function() {
              n.undo.saveStep();
            }, 0));
          }
        }, !0), n.browser.msie && n.events.on("keydown", function(J) {
          if (!n.selection.isCollapsed() || !f)
            return !0;
          var de = J.which;
          de == o.KEYCODE.C && n.keys.ctrlKey(J) ? n.events.trigger("window.copy") : de == o.KEYCODE.X && n.keys.ctrlKey(J) && n.events.trigger("window.cut");
        }), n.events.$on(w(n.o_win), "keydown", function(J) {
          var de = J.which;
          if (f && de == o.KEYCODE.BACKSPACE)
            return J.preventDefault(), !1;
        }), n.events.$on(n.$win, "keydown", function(J) {
          var de = J.which;
          f && f.hasClass("fr-uploading") && de == o.KEYCODE.ESC && f.trigger("abortUpload");
        }), n.events.on("destroy", function() {
          f && f.hasClass("fr-uploading") && f.trigger("abortUpload");
        }), n.events.on("paste.before", j), n.events.on("paste.beforeCleanup", X), n.events.on("paste.after", K), n.events.on("html.set", d), n.events.on("html.inserted", d), d(), n.events.on("destroy", function() {
          ue = [];
        }), n.events.on("html.processGet", L), n.opts.imageOutputSize && n.events.on("html.beforeGet", function() {
          z = n.el.querySelectorAll("img");
          for (var J = 0; J < z.length; J++) {
            var de = z[J].style.width || w(z[J]).width(), me = z[J].style.height || w(z[J]).height();
            de && z[J].setAttribute("width", "".concat(de).replace(/px/, "")), me && z[J].setAttribute("height", "".concat(me).replace(/px/, ""));
          }
        }), n.opts.iframe && n.events.on("image.loaded", n.size.syncIframe), n.$wp && (u(), n.events.on("contentChanged", u)), n.events.$on(w(n.o_win), "orientationchange.image", function() {
          setTimeout(function() {
            f && A(f);
          }, 100);
        }), y(!0), _(!0), H(!0), q(!0), n.events.on("node.remove", function(J) {
          if (J.get(0).tagName == "IMG")
            return T(J), !1;
        });
      }, showInsertPopup: function() {
        var z = n.$tb.find('.fr-command[data-cmd="insertImage"]'), J = n.popups.get("image.insert");
        if (J || (J = _()), I(), !J.hasClass("fr-active"))
          if (n.popups.refresh("image.insert"), n.popups.setContainer("image.insert", n.$tb), z.isVisible()) {
            var de = n.button.getPosition(z), me = de.left, Ce = de.top;
            n.popups.show("image.insert", me, Ce, z.outerHeight());
          } else
            n.position.forSelection(J), n.popups.show("image.insert");
      }, showLayer: function(z) {
        var J, de, me = n.popups.get("image.insert");
        if (f || n.opts.toolbarInline) {
          if (f) {
            var Ce = Se();
            Ne() && (Ce = Ce.find(".fr-img-wrap")), de = Ce.offset().top + Ce.outerHeight(), J = Ce.offset().left;
          }
        } else {
          var ye = n.$tb.find('.fr-command[data-cmd="insertImage"]');
          J = ye.offset().left, de = ye.offset().top + (n.opts.toolbarBottom ? 10 : ye.outerHeight() - 10);
        }
        !f && n.opts.toolbarInline && (de = me.offset().top - n.helpers.getPX(me.css("margin-top")), me.hasClass("fr-above") && (de += me.outerHeight())), me.find(".fr-layer").removeClass("fr-active"), me.find(".fr-".concat(z, "-layer")).addClass("fr-active"), n.popups.show("image.insert", J, de, f ? f.outerHeight() : 0), n.accessibility.focusPopup(me);
      }, refreshUploadButton: function(z) {
        var J = n.popups.get("image.insert");
        J && J.find(".fr-image-upload-layer").hasClass("fr-active") && z.addClass("fr-active").attr("aria-pressed", !0);
      }, refreshByURLButton: function(z) {
        var J = n.popups.get("image.insert");
        J && J.find(".fr-image-by-url-layer").hasClass("fr-active") && z.addClass("fr-active").attr("aria-pressed", !0);
      }, upload: N, insertByURL: function() {
        var z = n.popups.get("image.insert").find(".fr-image-by-url-layer input");
        if (0 < z.val().length) {
          B(), x(n.language.translate("Loading image"));
          var J = z.val().trim();
          if (n.opts.imageUploadRemoteUrls && n.opts.imageCORSProxy && n.opts.imageUpload) {
            var de = new XMLHttpRequest();
            de.onload = function() {
              this.status == 200 ? N([new Blob([this.response], { type: this.response.type || "image/png" })], f) : U(te);
            }, de.onerror = function() {
              i(J, !0, [], f);
            }, de.open("GET", "".concat(n.opts.imageCORSProxy, "/").concat(J), !0), de.responseType = "blob", de.send();
          } else
            i(J, !0, [], f);
          z.val(""), z.blur();
        }
      }, align: function(z) {
        var J = Se();
        J.removeClass("fr-fir fr-fil"), !n.opts.htmlUntouched && n.opts.useClasses ? z == "left" ? J.addClass("fr-fil") : z == "right" && J.addClass("fr-fir") : Ae(J, xe(), z), De(), b(), e(), n.selection.clear();
      }, refreshAlign: function(z) {
        f && z.find("> *").first().replaceWith(n.icon.create("image-align-".concat(Te())));
      }, refreshAlignOnShow: function(z, J) {
        f && J.find('.fr-command[data-param1="'.concat(Te(), '"]')).addClass("fr-active").attr("aria-selected", !0);
      }, display: function(z) {
        var J = Se();
        J.removeClass("fr-dii fr-dib"), !n.opts.htmlUntouched && n.opts.useClasses ? z == "inline" ? J.addClass("fr-dii") : z == "block" && J.addClass("fr-dib") : Ae(J, z, Te()), De(), b(), e(), n.selection.clear();
      }, refreshDisplayOnShow: function(z, J) {
        f && J.find('.fr-command[data-param1="'.concat(xe(), '"]')).addClass("fr-active").attr("aria-selected", !0);
      }, replace: Oe, back: function() {
        f ? (n.events.disableBlur(), w(".fr-popup input:focus").blur(), A(f)) : (n.events.disableBlur(), n.selection.restore(), n.events.enableBlur(), n.popups.hide("image.insert"), n.toolbar.showInline());
      }, get: Re, getEl: Se, insert: i, showProgressBar: B, remove: T, hideProgressBar: I, applyStyle: function(z, J, de) {
        if (J === void 0 && (J = n.opts.imageStyles), de === void 0 && (de = n.opts.imageMultipleStyles), !f)
          return !1;
        var me = Se();
        if (!de) {
          var Ce = Object.keys(J);
          Ce.splice(Ce.indexOf(z), 1), me.removeClass(Ce.join(" "));
        }
        t(J[z]) == "object" ? (me.removeAttr("style"), me.css(J[z].style)) : me.toggleClass(z), A(f);
      }, showAltPopup: re, showSizePopup: se, setAlt: function(z) {
        if (f) {
          var J = n.popups.get("image.alt");
          f.attr("alt", z || J.find("input").val() || ""), J.find("input:focus").blur(), A(f);
        }
      }, setSize: function(z, J) {
        if (f) {
          var de = n.popups.get("image.size");
          z = z || de.find('input[name="width"]').val() || "", J = J || de.find('input[name="height"]').val() || "";
          var me = /^[\d]+((px)|%)*$/g;
          f.removeAttr("width").removeAttr("height"), z.match(me) ? f.css("width", z) : f.css("width", ""), J.match(me) ? f.css("height", J) : f.css("height", ""), Ne() && (f.parents(".fr-img-caption").removeAttr("width").removeAttr("height"), z.match(me) ? f.parents(".fr-img-caption").css("width", z) : f.parents(".fr-img-caption").css("width", ""), J.match(me) ? f.parents(".fr-img-caption").css("height", J) : f.parents(".fr-img-caption").css("height", "")), de && de.find("input:focus").blur(), A(f);
        }
      }, toggleCaption: function() {
        var z;
        if (f && !Ne()) {
          (z = f).parent().is("a") && (z = f.parent());
          var J, de, me = f.parents("ul") && 0 < f.parents("ul").length ? f.parents("ul") : f.parents("ol") && 0 < f.parents("ol").length ? f.parents("ol") : [];
          if (0 < me.length) {
            var Ce = me.find("li").length, ye = f.parents("li"), we = document.createElement("li");
            Ce - 1 === ye.index() && (me.append(we), we.innerHTML = "&nbsp;");
          }
          z.attr("style") && (de = -1 < (J = z.attr("style").split(":")).indexOf("width") ? J[J.indexOf("width") + 1].replace(";", "") : "");
          var Be = n.opts.imageResizeWithPercent ? (-1 < de.indexOf("px") ? null : de) || "100%" : f.width() + "px";
          z.wrap('<div class="fr-img-space-wrap"><span ' + (n.browser.mozilla ? "" : 'contenteditable="false"') + 'class="fr-img-caption ' + f.attr("class") + '" style="' + (n.opts.useClasses ? "" : z.attr("style")) + '" draggable="false"></span><p class="fr-img-space-wrap2">&nbsp;</p></div>'), z.wrap('<span class="fr-img-wrap"></span>'), f.after('<span class="fr-inner"'.concat(n.browser.mozilla ? "" : ' contenteditable="true"', ">").concat(o.START_MARKER).concat(n.language.translate("Image Caption")).concat(o.END_MARKER, "</span>")), f.removeAttr("class").removeAttr("style").removeAttr("width"), f.parents(".fr-img-caption").css("width", Be), ne(!0), n.selection.restore();
        } else
          z = Se(), f.insertAfter(z), f.attr("class", z.attr("class").replace("fr-img-caption", "")).attr("style", z.attr("style")), z.remove(), A(f);
      }, hasCaption: Ne, exitEdit: ne, edit: A };
    }, o.DefineIcon("insertImage", { NAME: "image", SVG_KEY: "insertImage" }), o.RegisterShortcut(o.KEYCODE.P, "insertImage", null, "P"), o.RegisterCommand("insertImage", { title: "Insert Image", undo: !1, focus: !0, refreshAfterCallback: !1, popup: !0, callback: function() {
      this.popups.isVisible("image.insert") ? (this.$el.find(".fr-marker").length && (this.events.disableBlur(), this.selection.restore()), this.popups.hide("image.insert")) : this.image.showInsertPopup();
    }, plugin: "image" }), o.DefineIcon("imageUpload", { NAME: "upload", SVG_KEY: "upload" }), o.RegisterCommand("imageUpload", { title: "Upload Image", undo: !1, focus: !1, toggle: !0, callback: function() {
      this.image.showLayer("image-upload");
    }, refresh: function(n) {
      this.image.refreshUploadButton(n);
    } }), o.DefineIcon("imageByURL", { NAME: "link", SVG_KEY: "insertLink" }), o.RegisterCommand("imageByURL", { title: "By URL", undo: !1, focus: !1, toggle: !0, callback: function() {
      this.image.showLayer("image-by-url");
    }, refresh: function(n) {
      this.image.refreshByURLButton(n);
    } }), o.RegisterCommand("imageInsertByURL", { title: "Insert Image", undo: !0, refreshAfterCallback: !1, callback: function() {
      this.image.insertByURL();
    }, refresh: function(n) {
      this.image.get() ? n.text(this.language.translate("Replace")) : n.text(this.language.translate("Insert"));
    } }), o.DefineIcon("imageDisplay", { NAME: "star", SVG_KEY: "imageDisplay" }), o.RegisterCommand("imageDisplay", { title: "Display", type: "dropdown", options: { inline: "Inline", block: "Break Text" }, callback: function(n, f) {
      this.image.display(f);
    }, refresh: function(n) {
      this.opts.imageTextNear || n.addClass("fr-hidden");
    }, refreshOnShow: function(n, f) {
      this.image.refreshDisplayOnShow(n, f);
    } }), o.DefineIcon("image-align", { NAME: "align-left", SVG_KEY: "alignLeft" }), o.DefineIcon("image-align-left", { NAME: "align-left", SVG_KEY: "alignLeft" }), o.DefineIcon("image-align-right", { NAME: "align-right", SVG_KEY: "alignRight" }), o.DefineIcon("image-align-center", { NAME: "align-justify", SVG_KEY: "alignCenter" }), o.DefineIcon("imageAlign", { NAME: "align-justify", SVG_KEY: "alignJustify" }), o.RegisterCommand("imageAlign", { type: "dropdown", title: "Align", options: { left: "Align Left", center: "None", right: "Align Right" }, html: function() {
      var n = '<ul class="fr-dropdown-list" role="presentation">', f = o.COMMANDS.imageAlign.options;
      for (var G in f)
        f.hasOwnProperty(G) && (n += '<li role="presentation"><a class="fr-command fr-title" tabIndex="-1" role="option" data-cmd="imageAlign" data-param1="'.concat(G, '" title="').concat(this.language.translate(f[G]), '">').concat(this.icon.create("image-align-".concat(G)), '<span class="fr-sr-only">').concat(this.language.translate(f[G]), "</span></a></li>"));
      return n += "</ul>";
    }, callback: function(n, f) {
      this.image.align(f);
    }, refresh: function(n) {
      this.image.refreshAlign(n);
    }, refreshOnShow: function(n, f) {
      this.image.refreshAlignOnShow(n, f);
    } }), o.DefineIcon("imageReplace", { NAME: "exchange", FA5NAME: "exchange-alt", SVG_KEY: "replaceImage" }), o.RegisterCommand("imageReplace", { title: "Replace", undo: !1, focus: !1, popup: !0, refreshAfterCallback: !1, callback: function() {
      this.image.replace();
    } }), o.DefineIcon("imageRemove", { NAME: "trash", SVG_KEY: "remove" }), o.RegisterCommand("imageRemove", { title: "Remove", callback: function() {
      this.image.remove();
    } }), o.DefineIcon("imageBack", { NAME: "arrow-left", SVG_KEY: "back" }), o.RegisterCommand("imageBack", { title: "Back", undo: !1, focus: !1, back: !0, callback: function() {
      this.image.back();
    }, refresh: function(n) {
      this.$, this.image.get() || this.opts.toolbarInline ? (n.removeClass("fr-hidden"), n.next(".fr-separator").removeClass("fr-hidden")) : (n.addClass("fr-hidden"), n.next(".fr-separator").addClass("fr-hidden"));
    } }), o.RegisterCommand("imageDismissError", { title: "OK", undo: !1, callback: function() {
      this.image.hideProgressBar(!0);
    } }), o.DefineIcon("imageStyle", { NAME: "magic", SVG_KEY: "imageClass" }), o.RegisterCommand("imageStyle", { title: "Style", type: "dropdown", html: function() {
      var n = '<ul class="fr-dropdown-list" role="presentation">', f = this.opts.imageStyles;
      for (var G in f)
        if (f.hasOwnProperty(G)) {
          var Y = f[G];
          t(Y) == "object" && (Y = Y.title), n += '<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="imageStyle" data-param1="'.concat(G, '">').concat(this.language.translate(Y), "</a></li>");
        }
      return n += "</ul>";
    }, callback: function(n, f) {
      this.image.applyStyle(f);
    }, refreshOnShow: function(n, f) {
      var G = this.$, Y = this.image.getEl();
      Y && f.find(".fr-command").each(function() {
        var ce = G(this).data("param1"), ue = Y.hasClass(ce);
        G(this).toggleClass("fr-active", ue).attr("aria-selected", ue);
      });
    } }), o.DefineIcon("imageAlt", { NAME: "info", SVG_KEY: "imageAltText" }), o.RegisterCommand("imageAlt", { undo: !1, focus: !1, popup: !0, title: "Alternative Text", callback: function() {
      this.image.showAltPopup();
    } }), o.RegisterCommand("imageSetAlt", { undo: !0, focus: !1, title: "Update", refreshAfterCallback: !1, callback: function() {
      this.image.setAlt();
    } }), o.DefineIcon("imageSize", { NAME: "arrows-alt", SVG_KEY: "imageSize" }), o.RegisterCommand("imageSize", { undo: !1, focus: !1, popup: !0, title: "Change Size", callback: function() {
      this.image.showSizePopup();
    } }), o.RegisterCommand("imageSetSize", { undo: !0, focus: !1, title: "Update", refreshAfterCallback: !1, callback: function() {
      this.image.setSize();
    } }), o.DefineIcon("imageCaption", { NAME: "commenting", FA5NAME: "comment-alt", SVG_KEY: "imageCaption" }), o.RegisterCommand("imageCaption", { undo: !0, focus: !1, title: "Image Caption", refreshAfterCallback: !0, callback: function() {
      this.image.toggleCaption();
    }, refresh: function(n) {
      this.image.get() && n.toggleClass("fr-active", this.image.hasCaption());
    } });
  });
})();
/*!
 * froala_editor v3.1.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
(function(Ie, Le) {
  (function(o, t) {
    t($e());
  })(ke, function(o) {
    o = o && o.hasOwnProperty("default") ? o.default : o, Object.assign(o.DEFAULTS, { inlineClasses: { "fr-class-code": "Code", "fr-class-highlighted": "Highlighted", "fr-class-transparency": "Transparent" } }), o.PLUGINS.inlineClass = function(t) {
      var n = t.$;
      return { apply: function(G) {
        t.format.toggle("span", { class: G });
      }, refreshOnShow: function(G, Y) {
        Y.find(".fr-command").each(function() {
          var ce = n(this).data("param1"), ue = t.format.is("span", { class: ce });
          n(this).toggleClass("fr-active", ue).attr("aria-selected", ue);
        });
      } };
    }, o.RegisterCommand("inlineClass", { type: "dropdown", title: "Inline Class", html: function() {
      var t = '<ul class="fr-dropdown-list" role="presentation">', n = this.opts.inlineClasses;
      for (var f in n)
        n.hasOwnProperty(f) && (t += '<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="inlineClass" data-param1="'.concat(f, '" title="').concat(n[f], '">').concat(n[f], "</a></li>"));
      return t += "</ul>";
    }, callback: function(t, n) {
      this.inlineClass.apply(n);
    }, refreshOnShow: function(t, n) {
      this.inlineClass.refreshOnShow(t, n);
    }, plugin: "inlineClass" }), o.DefineIcon("inlineClass", { NAME: "tag", SVG_KEY: "inlineClass" });
  });
})();
/*!
 * froala_editor v3.1.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
(function(Ie, Le) {
  (function(o, t) {
    t($e());
  })(ke, function(o) {
    o = o && o.hasOwnProperty("default") ? o.default : o, Object.assign(o.DEFAULTS, { inlineStyles: { "Big Red": "font-size: 20px; color: red;", "Small Blue": "font-size: 14px; color: blue;" } }), o.PLUGINS.inlineStyle = function(t) {
      return { apply: function(f) {
        for (var G = f.split(";"), Y = 0; Y < G.length; Y++) {
          var ce = G[Y].split(":");
          G[Y].length && ce.length == 2 && t.format.applyStyle(ce[0].trim(), ce[1].trim());
        }
      } };
    }, o.RegisterCommand("inlineStyle", { type: "dropdown", html: function() {
      var t = '<ul class="fr-dropdown-list" role="presentation">', n = this.opts.inlineStyles;
      for (var f in n)
        if (n.hasOwnProperty(f)) {
          var G = n[f] + (n[f].indexOf("display:block;") === -1 ? " display:block;" : "");
          t += '<li role="presentation"><span style="'.concat(G, '" role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="inlineStyle" data-param1="').concat(n[f], '" title="').concat(this.language.translate(f), '">').concat(this.language.translate(f), "</a></span></li>");
        }
      return t += "</ul>";
    }, title: "Inline Style", callback: function(t, n) {
      this.inlineStyle.apply(n);
    }, plugin: "inlineStyle" }), o.DefineIcon("inlineStyle", { NAME: "paint-brush", SVG_KEY: "inlineStyle" });
  });
})();
/*!
 * froala_editor v3.1.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
(function(Ie, Le) {
  (function(o, t) {
    t($e());
  })(ke, function(o) {
    o = o && o.hasOwnProperty("default") ? o.default : o, Object.assign(o.DEFAULTS, { lineBreakerTags: ["table", "hr", "form", "dl", "span.fr-video", ".fr-embedly", "img"], lineBreakerOffset: 15, lineBreakerHorizontalOffset: 10 }), o.PLUGINS.lineBreaker = function(t) {
      var n, f, G, Y = t.$;
      function ce(le, he) {
        var ge, e, r, s, d, u, b, E;
        if (le == null)
          d = (s = he.parent()).offset().top, ge = (b = he.offset().top) - Math.min((b - d) / 2, t.opts.lineBreakerOffset), r = s.outerWidth(), e = s.offset().left;
        else if (he == null)
          (u = (s = le.parent()).offset().top + s.outerHeight()) < (E = le.offset().top + le.outerHeight()) && (u = (s = Y(s).parent()).offset().top + s.outerHeight()), ge = E + Math.min(Math.abs(u - E) / 2, t.opts.lineBreakerOffset), r = s.outerWidth(), e = s.offset().left;
        else {
          s = le.parent();
          var g = le.offset().top + le.height(), m = he.offset().top;
          if (m < g)
            return !1;
          ge = (g + m) / 2, r = s.outerWidth(), e = s.offset().left;
        }
        if (t.opts.iframe) {
          var C = t.helpers.getPX(t.$wp.find(".fr-iframe").css("padding-top")), O = t.helpers.getPX(t.$wp.find(".fr-iframe").css("padding-left"));
          e += t.$iframe.offset().left - t.helpers.scrollLeft() + O, ge += t.$iframe.offset().top - t.helpers.scrollTop() + C;
        }
        t.$box.append(n), n.css("top", ge - t.win.pageYOffset), n.css("left", e - t.win.pageXOffset), n.css("width", r), n.data("tag1", le), n.data("tag2", he), n.addClass("fr-visible").data("instance", t);
      }
      function ue(le) {
        if (le) {
          var he = Y(le);
          if (t.$el.find(he).length === 0)
            return null;
          if (le.nodeType != Node.TEXT_NODE && he.is(t.opts.lineBreakerTags.join(",")))
            return he;
          if (0 < he.parents(t.opts.lineBreakerTags.join(",")).length)
            return le = he.parents(t.opts.lineBreakerTags.join(",")).get(0), t.$el.find(Y(le)).length !== 0 && Y(le).is(t.opts.lineBreakerTags.join(",")) ? Y(le) : null;
        }
        return null;
      }
      function ee(le, he) {
        var ge = t.doc.elementFromPoint(le, he);
        return ge && !Y(ge).closest(".fr-line-breaker").length && !t.node.isElement(ge) && ge != t.$wp.get(0) && function(r) {
          if (typeof r.inFroalaWrapper < "u")
            return r.inFroalaWrapper;
          for (var s = r; r.parentNode && r.parentNode !== t.$wp.get(0); )
            r = r.parentNode;
          return s.inFroalaWrapper = r.parentNode == t.$wp.get(0), s.inFroalaWrapper;
        }(ge) ? ge : null;
      }
      function w(le, he, ge) {
        for (var e = ge, r = null; e <= t.opts.lineBreakerOffset && !r; )
          (r = ee(le, he - e)) || (r = ee(le, he + e)), e += ge;
        return r;
      }
      function oe(le, he, ge) {
        for (var e = null, r = 100; !e && le > t.$box.offset().left && le < t.$box.offset().left + t.$box.outerWidth() && 0 < r; )
          (e = ee(le, he)) || (e = w(le, he, 5)), ge == "left" ? le -= t.opts.lineBreakerHorizontalOffset : le += t.opts.lineBreakerHorizontalOffset, r -= t.opts.lineBreakerHorizontalOffset;
        return e;
      }
      function pe(le) {
        var he = G = null, ge = null, e = t.doc.elementFromPoint(le.pageX - t.win.pageXOffset, le.pageY - t.win.pageYOffset);
        (he = e && (e.tagName == "HTML" || e.tagName == "BODY" || t.node.isElement(e) || 0 <= (e.getAttribute("class") || "").indexOf("fr-line-breaker")) ? ((ge = w(le.pageX - t.win.pageXOffset, le.pageY - t.win.pageYOffset, 1)) || (ge = oe(le.pageX - t.win.pageXOffset - t.opts.lineBreakerHorizontalOffset, le.pageY - t.win.pageYOffset, "left")), ge || (ge = oe(le.pageX - t.win.pageXOffset + t.opts.lineBreakerHorizontalOffset, le.pageY - t.win.pageYOffset, "right")), ue(ge)) : ue(e)) ? function(s, d) {
          var u, b, E = s.offset().top, g = s.offset().top + s.outerHeight();
          if (Math.abs(g - d) <= t.opts.lineBreakerOffset || Math.abs(d - E) <= t.opts.lineBreakerOffset)
            if (Math.abs(g - d) < Math.abs(d - E)) {
              for (var m = (b = s.get(0)).nextSibling; m && m.nodeType == Node.TEXT_NODE && m.textContent.length === 0; )
                m = m.nextSibling;
              if (!m)
                return ce(s, null), !0;
              if (u = ue(m))
                return ce(s, u), !0;
            } else {
              if (!(b = s.get(0)).previousSibling)
                return ce(null, s), !0;
              if (u = ue(b.previousSibling))
                return ce(u, s), !0;
            }
          n.removeClass("fr-visible").removeData("instance");
        }(he, le.pageY) : t.core.sameInstance(n) && n.removeClass("fr-visible").removeData("instance");
      }
      function te(le) {
        return !(n.hasClass("fr-visible") && !t.core.sameInstance(n)) && (t.popups.areVisible() || t.el.querySelector(".fr-selected-cell") ? (n.removeClass("fr-visible"), !0) : void (f !== !1 || t.edit.isDisabled() || (G && clearTimeout(G), G = setTimeout(pe, 30, le))));
      }
      function k() {
        G && clearTimeout(G), n && n.hasClass("fr-visible") && n.removeClass("fr-visible").removeData("instance");
      }
      var F = function() {
        f = !0, k();
      }, P = function() {
        f = !1;
      };
      function Z(le) {
        le.preventDefault();
        var he = n.data("instance") || t;
        n.removeClass("fr-visible").removeData("instance");
        var ge = n.data("tag1"), e = n.data("tag2"), r = t.html.defaultTag();
        ge == null ? r && e.parent().get(0).tagName != "TD" && e.parents(r).length === 0 ? e.before("<".concat(r, ">").concat(o.MARKERS, "<br></").concat(r, ">")) : e.before("".concat(o.MARKERS, "<br>")) : r && ge.parent().get(0).tagName != "TD" && ge.parents(r).length === 0 ? ge.after("<".concat(r, ">").concat(o.MARKERS, "<br></").concat(r, ">")) : ge.after("".concat(o.MARKERS, "<br>")), he.selection.restore(), t.toolbar.enable();
      }
      return { _init: function() {
        if (!t.$wp)
          return !1;
        (function() {
          t.shared.$line_breaker || (t.shared.$line_breaker = Y(document.createElement("div")).attr("class", "fr-line-breaker").html('<a class="fr-floating-btn" role="button" tabIndex="-1" title="'.concat(t.language.translate("Break"), '"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="17" y="7" width="2" height="8"/><rect x="10" y="13" width="7" height="2"/><path d="M10.000,10.000 L10.000,18.013 L5.000,14.031 L10.000,10.000 Z"/></svg></a>'))), n = t.shared.$line_breaker, t.events.on("shared.destroy", function() {
            n.html("").removeData().remove(), n = null;
          }, !0), t.events.on("destroy", function() {
            n.removeData("instance").removeClass("fr-visible"), Y("body").first().append(n), clearTimeout(G);
          }, !0), t.events.$on(n, "mousemove", function(ge) {
            ge.stopPropagation();
          }, !0), t.events.bindClick(n, "a", Z);
        })(), f = !1, t.events.$on(t.$win, "mousemove", te), t.events.$on(Y(t.win), "scroll", k), t.events.on("popups.show.table.edit", k), t.events.on("commands.after", k), t.events.$on(Y(t.win), "mousedown", F), t.events.$on(Y(t.win), "mouseup", P);
      } };
    };
  });
})();
/*!
 * froala_editor v3.1.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
(function(Ie, Le) {
  (function(o, t) {
    t($e());
  })(ke, function(o) {
    o = o && o.hasOwnProperty("default") ? o.default : o, Object.assign(o.DEFAULTS, { lineHeights: { Default: "", Single: "1", 1.15: "1.15", 1.5: "1.5", Double: "2" } }), o.PLUGINS.lineHeight = function(t) {
      var n = t.$;
      return { _init: function() {
      }, apply: function(G) {
        t.selection.save(), t.html.wrap(!0, !0, !0, !0), t.selection.restore();
        var Y = t.selection.blocks();
        Y.length && n(Y[0]).parent().is("td") && t.format.applyStyle("line-height", G.toString()), t.selection.save();
        for (var ce = 0; ce < Y.length; ce++)
          n(Y[ce]).css("line-height", G), n(Y[ce]).attr("style") === "" && n(Y[ce]).removeAttr("style");
        t.html.unwrap(), t.selection.restore();
      }, refreshOnShow: function(G, Y) {
        var ce = t.selection.blocks();
        if (ce.length) {
          var ue = n(ce[0]);
          Y.find(".fr-command").each(function() {
            var ee = n(this).data("param1"), w = ue.attr("style"), oe = 0 <= (w || "").indexOf("line-height: " + ee + ";");
            if (w) {
              var pe = w.substring(w.indexOf("line-height")), te = pe.substr(0, pe.indexOf(";")), k = te && te.split(":")[1];
              k && k.length || ue.text() !== "Default" || (oe = !0);
            }
            w && w.indexOf("line-height") !== -1 || ee !== "" || (oe = !0), n(this).toggleClass("fr-active", oe).attr("aria-selected", oe);
          });
        }
      } };
    }, o.RegisterCommand("lineHeight", { type: "dropdown", html: function() {
      var t = '<ul class="fr-dropdown-list" role="presentation">', n = this.opts.lineHeights;
      for (var f in n)
        n.hasOwnProperty(f) && (t += '<li role="presentation"><a class="fr-command '.concat(f, '" tabIndex="-1" role="option" data-cmd="lineHeight" data-param1="').concat(n[f], '" title="').concat(this.language.translate(f), '">').concat(this.language.translate(f), "</a></li>"));
      return t += "</ul>";
    }, title: "Line Height", callback: function(t, n) {
      this.lineHeight.apply(n);
    }, refreshOnShow: function(t, n) {
      this.lineHeight.refreshOnShow(t, n);
    }, plugin: "lineHeight" }), o.DefineIcon("lineHeight", { NAME: "arrows-v", FA5NAME: "arrows-alt-v", SVG_KEY: "lineHeight" });
  });
})();
/*!
 * froala_editor v3.1.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
(function(Ie, Le) {
  (function(o, t) {
    t($e());
  })(ke, function(o) {
    o = o && o.hasOwnProperty("default") ? o.default : o, Object.assign(o.POPUP_TEMPLATES, { "link.edit": "[_BUTTONS_]", "link.insert": "[_BUTTONS_][_INPUT_LAYER_]" }), Object.assign(o.DEFAULTS, { linkEditButtons: ["linkOpen", "linkStyle", "linkEdit", "linkRemove"], linkInsertButtons: ["linkBack", "|", "linkList"], linkAttributes: {}, linkAutoPrefix: "http://", linkStyles: { "fr-green": "Green", "fr-strong": "Thick" }, linkMultipleStyles: !0, linkConvertEmailAddress: !0, linkAlwaysBlank: !1, linkAlwaysNoFollow: !1, linkNoOpener: !0, linkNoReferrer: !0, linkList: [{ text: "Froala", href: "https://froala.com", target: "_blank" }, { text: "Google", href: "https://google.com", target: "_blank" }, { displayText: "Facebook", href: "https://facebook.com" }], linkText: !0 }), o.PLUGINS.link = function(t) {
      var n = t.$;
      function f() {
        var k = t.image ? t.image.get() : null;
        if (k || !t.$wp)
          return t.el.tagName == "A" ? t.el : k && k.get(0).parentNode && k.get(0).parentNode.tagName == "A" ? k.get(0).parentNode : void 0;
        var F = t.selection.ranges(0).commonAncestorContainer;
        try {
          F && (F.contains && F.contains(t.el) || !t.el.contains(F) || t.el == F) && (F = null);
        } catch {
          F = null;
        }
        if (F && F.tagName === "A")
          return F;
        var P = t.selection.element(), Z = t.selection.endElement();
        P.tagName == "A" || t.node.isElement(P) || (P = n(P).parentsUntil(t.$el, "a").first().get(0)), Z.tagName == "A" || t.node.isElement(Z) || (Z = n(Z).parentsUntil(t.$el, "a").first().get(0));
        try {
          Z && (Z.contains && Z.contains(t.el) || !t.el.contains(Z) || t.el == Z) && (Z = null);
        } catch {
          Z = null;
        }
        try {
          P && (P.contains && P.contains(t.el) || !t.el.contains(P) || t.el == P) && (P = null);
        } catch {
          P = null;
        }
        return Z && Z == P && Z.tagName == "A" ? (t.browser.msie || t.helpers.isMobile()) && (t.selection.info(P).atEnd || t.selection.info(P).atStart) ? null : P : null;
      }
      function G() {
        var k, F, P, Z, le = t.image ? t.image.get() : null, he = [];
        if (le)
          le.get(0).parentNode.tagName == "A" && he.push(le.get(0).parentNode);
        else if (t.win.getSelection) {
          var ge = t.win.getSelection();
          if (ge.getRangeAt && ge.rangeCount) {
            Z = t.doc.createRange();
            for (var e = 0; e < ge.rangeCount; ++e)
              if ((F = (k = ge.getRangeAt(e)).commonAncestorContainer) && F.nodeType != 1 && (F = F.parentNode), F && F.nodeName.toLowerCase() == "a")
                he.push(F);
              else {
                P = F.getElementsByTagName("a");
                for (var r = 0; r < P.length; ++r)
                  Z.selectNodeContents(P[r]), Z.compareBoundaryPoints(k.END_TO_START, k) < 1 && -1 < Z.compareBoundaryPoints(k.START_TO_END, k) && he.push(P[r]);
              }
          }
        } else if (t.doc.selection && t.doc.selection.type != "Control")
          if ((F = (k = t.doc.selection.createRange()).parentElement()).nodeName.toLowerCase() == "a")
            he.push(F);
          else {
            P = F.getElementsByTagName("a"), Z = t.doc.body.createTextRange();
            for (var s = 0; s < P.length; ++s)
              Z.moveToElementText(P[s]), -1 < Z.compareEndPoints("StartToEnd", k) && Z.compareEndPoints("EndToStart", k) < 1 && he.push(P[s]);
          }
        return he;
      }
      function Y(k) {
        if (t.core.hasFocus()) {
          if (ue(), k && k.type === "keyup" && (k.altKey || k.which == o.KEYCODE.ALT))
            return !0;
          setTimeout(function() {
            if (!k || k && (k.which == 1 || k.type != "mouseup")) {
              var F = f(), P = t.image ? t.image.get() : null;
              if (F && !P) {
                if (t.image) {
                  var Z = t.node.contents(F);
                  if (Z.length == 1 && Z[0].tagName == "IMG") {
                    var le = t.selection.ranges(0);
                    return le.startOffset === 0 && le.endOffset === 0 ? n(F).before(o.MARKERS) : n(F).after(o.MARKERS), t.selection.restore(), !1;
                  }
                }
                k && k.stopPropagation(), ce(F);
              }
            }
          }, t.helpers.isIOS() ? 100 : 0);
        }
      }
      function ce(k) {
        var F = t.popups.get("link.edit");
        F || (F = function() {
          var ge = "";
          1 <= t.opts.linkEditButtons.length && (t.el.tagName == "A" && 0 <= t.opts.linkEditButtons.indexOf("linkRemove") && t.opts.linkEditButtons.splice(t.opts.linkEditButtons.indexOf("linkRemove"), 1), ge = '<div class="fr-buttons">'.concat(t.button.buildList(t.opts.linkEditButtons), "</div>"));
          var e = { buttons: ge }, r = t.popups.create("link.edit", e);
          return t.$wp && t.events.$on(t.$wp, "scroll.link-edit", function() {
            f() && t.popups.isVisible("link.edit") && ce(f());
          }), r;
        }());
        var P = n(k);
        t.popups.isVisible("link.edit") || t.popups.refresh("link.edit"), t.popups.setContainer("link.edit", t.$sc);
        var Z = P.offset().left + P.outerWidth() / 2, le = P.offset().top + P.outerHeight();
        t.popups.show("link.edit", Z, le, P.outerHeight(), !0);
      }
      function ue() {
        t.popups.hide("link.edit");
      }
      function ee() {
        var k = t.popups.get("link.insert"), F = f();
        if (F) {
          var P, Z, le = n(F), he = k.find('input.fr-link-attr[type="text"]'), ge = k.find('input.fr-link-attr[type="checkbox"]');
          for (P = 0; P < he.length; P++)
            (Z = n(he[P])).val(le.attr(Z.attr("name") || ""));
          for (ge.attr("checked", !1), P = 0; P < ge.length; P++)
            Z = n(ge[P]), le.attr(Z.attr("name")) == Z.data("checked") && Z.attr("checked", !0);
          k.find('input.fr-link-attr[type="text"][name="text"]').val(le.text());
        } else
          k.find('input.fr-link-attr[type="text"]').val(""), k.find('input.fr-link-attr[type="checkbox"]').attr("checked", !1), k.find('input.fr-link-attr[type="text"][name="text"]').val(t.selection.text());
        k.find("input.fr-link-attr").trigger("change"), t.image && t.image.get() ? k.find('.fr-link-attr[name="text"]').parent().hide() : k.find('.fr-link-attr[name="text"]').parent().show();
      }
      function w(k) {
        if (k)
          return t.popups.onRefresh("link.insert", ee), !0;
        var F = "";
        1 <= t.opts.linkInsertButtons.length && (F = '<div class="fr-buttons fr-tabs">'.concat(t.button.buildList(t.opts.linkInsertButtons), "</div>"));
        var P = "", Z = 0;
        for (var le in P = '<div class="fr-link-insert-layer fr-layer fr-active" id="fr-link-insert-layer-'.concat(t.id, '">'), P += '<div class="fr-input-line"><input id="fr-link-insert-layer-url-'.concat(t.id, '" name="href" type="text" class="fr-link-attr" placeholder="').concat(t.language.translate("URL"), '" tabIndex="').concat(++Z, '"></div>'), t.opts.linkText && (P += '<div class="fr-input-line"><input id="fr-link-insert-layer-text-'.concat(t.id, '" name="text" type="text" class="fr-link-attr" placeholder="').concat(t.language.translate("Text"), '" tabIndex="').concat(++Z, '"></div>')), t.opts.linkAttributes)
          if (t.opts.linkAttributes.hasOwnProperty(le)) {
            var he = t.opts.linkAttributes[le];
            P += '<div class="fr-input-line"><input name="'.concat(le, '" type="text" class="fr-link-attr" placeholder="').concat(t.language.translate(he), '" tabIndex="').concat(++Z, '"></div>');
          }
        t.opts.linkAlwaysBlank || (P += '<div class="fr-checkbox-line"><span class="fr-checkbox"><input name="target" class="fr-link-attr" data-checked="_blank" type="checkbox" id="fr-link-target-'.concat(t.id, '" tabIndex="').concat(++Z, '"><span>').concat('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="10" viewBox="0 0 32 32"><path d="M27 4l-15 15-7-7-5 5 12 12 20-20z" fill="#FFF"></path></svg>', '</span></span><label id="fr-label-target-').concat(t.id, '">').concat(t.language.translate("Open in new tab"), "</label></div>"));
        var ge = { buttons: F, input_layer: P += '<div class="fr-action-buttons"><button class="fr-command fr-submit" role="button" data-cmd="linkInsert" href="#" tabIndex="'.concat(++Z, '" type="button">').concat(t.language.translate("Insert"), "</button></div></div>") }, e = t.popups.create("link.insert", ge);
        return t.$wp && t.events.$on(t.$wp, "scroll.link-insert", function() {
          (t.image ? t.image.get() : null) && t.popups.isVisible("link.insert") && te(), t.popups.isVisible("link.insert") && pe();
        }), e;
      }
      function oe(k, F, P) {
        if (P === void 0 && (P = {}), t.events.trigger("link.beforeInsert", [k, F, P]) === !1)
          return !1;
        var Z = t.image ? t.image.get() : null;
        Z || t.el.tagName == "A" ? t.el.tagName == "A" && t.$el.focus() : (t.selection.restore(), t.popups.hide("link.insert"));
        var le = k;
        if (t.opts.linkConvertEmailAddress && t.helpers.isEmail(k) && !/^mailto:.*/i.test(k) && (k = "mailto:".concat(k)), t.opts.linkAutoPrefix === "" || new RegExp("^(" + o.LinkProtocols.join("|") + "):.", "i").test(k) || /^data:image.*/i.test(k) || /^(https?:|ftps?:|file:|)\/\//i.test(k) || /^([A-Za-z]:(\\){1,2}|[A-Za-z]:((\\){1,2}[^\\]+)+)(\\)?$/i.test(k) || ["/", "{", "[", "#", "(", "."].indexOf((k || "")[0]) < 0 && (k = t.opts.linkAutoPrefix + t.helpers.sanitizeURL(k)), k = t.helpers.sanitizeURL(k), t.opts.linkAlwaysBlank && (P.target = "_blank"), t.opts.linkAlwaysNoFollow && (P.rel = "nofollow"), t.helpers.isEmail(le) && (P.target = null, P.rel = null), P.target == "_blank" ? (t.opts.linkNoOpener && (P.rel ? P.rel += " noopener" : P.rel = "noopener"), t.opts.linkNoReferrer && (P.rel ? P.rel += " noreferrer" : P.rel = "noreferrer")) : P.target == null && (P.rel ? P.rel = P.rel.replace(/noopener/, "").replace(/noreferrer/, "") : P.rel = null), F = F || "", k === t.opts.linkAutoPrefix)
          return t.popups.get("link.insert").find('input[name="href"]').addClass("fr-error"), t.events.trigger("link.bad", [le]), !1;
        var he, ge = f();
        if (ge) {
          if ((he = n(ge)).attr("href", k), 0 < F.length && he.text() != F && !Z) {
            for (var e = he.get(0); e.childNodes.length === 1 && e.childNodes[0].nodeType == Node.ELEMENT_NODE; )
              e = e.childNodes[0];
            n(e).text(F);
          }
          for (var r in Z || he.prepend(o.START_MARKER).append(o.END_MARKER), P)
            P[r] ? he.attr(r, P[r]) : he.removeAttr(r);
          Z || t.selection.restore();
        } else {
          Z ? (Z.wrap('<a href="'.concat(k, '"></a>')), t.image.hasCaption() && Z.parent().append(Z.parents(".fr-img-caption").find(".fr-inner"))) : (t.format.remove("a"), t.selection.isCollapsed() ? (F = F.length === 0 ? le : F, t.html.insert('<a href="'.concat(k, '">').concat(o.START_MARKER).concat(F.replace(/&/g, "&amp;").replace(/</, "&lt;", ">", "&gt;")).concat(o.END_MARKER, "</a>")), t.selection.restore()) : 0 < F.length && F != t.selection.text().replace(/\n/g, "") ? (t.selection.remove(), t.html.insert('<a href="'.concat(k, '">').concat(o.START_MARKER).concat(F.replace(/&/g, "&amp;")).concat(o.END_MARKER, "</a>")), t.selection.restore()) : (function() {
            if (!t.selection.isCollapsed()) {
              t.selection.save();
              for (var E = t.$el.find(".fr-marker").addClass("fr-unprocessed").toArray(); E.length; ) {
                var g = n(E.pop());
                g.removeClass("fr-unprocessed");
                var m = t.node.deepestParent(g.get(0));
                if (m) {
                  for (var C = g.get(0), O = "", U = ""; C = C.parentNode, t.node.isBlock(C) || (O += t.node.closeTagString(C), U = t.node.openTagString(C) + U), C != m; )
                    ;
                  var y = t.node.openTagString(g.get(0)) + g.html() + t.node.closeTagString(g.get(0));
                  g.replaceWith('<span id="fr-break"></span>');
                  var B = m.outerHTML;
                  B = (B = B.replace(/<span id="fr-break"><\/span>/g, O + y + U)).replace(U + O, ""), m.outerHTML = B;
                }
                E = t.$el.find(".fr-marker.fr-unprocessed").toArray();
              }
              t.html.cleanEmptyTags(), t.selection.restore();
            }
          }(), t.format.apply("a", { href: k })));
          for (var s = G(), d = 0; d < s.length; d++)
            (he = n(s[d])).attr(P), he.removeAttr("_moz_dirty");
          s.length == 1 && t.$wp && !Z && (n(s[0]).prepend(o.START_MARKER).append(o.END_MARKER), t.selection.restore());
        }
        if (Z) {
          var u = t.popups.get("link.insert");
          u && u.find("input:focus").blur(), t.image.edit(Z);
        } else
          Y();
      }
      function pe() {
        ue();
        var k = f();
        if (k) {
          var F = t.popups.get("link.insert");
          F || (F = w()), t.popups.isVisible("link.insert") || (t.popups.refresh("link.insert"), t.selection.save(), t.helpers.isMobile() && (t.events.disableBlur(), t.$el.blur(), t.events.enableBlur())), t.popups.setContainer("link.insert", t.$sc);
          var P = (t.image ? t.image.get() : null) || n(k), Z = P.offset().left + P.outerWidth() / 2, le = P.offset().top + P.outerHeight();
          t.popups.show("link.insert", Z, le, P.outerHeight(), !0);
        }
      }
      function te() {
        var k = t.image ? t.image.getEl() : null;
        if (k) {
          var F = t.popups.get("link.insert");
          t.image.hasCaption() && (k = k.find(".fr-img-wrap")), F || (F = w()), ee(), t.popups.setContainer("link.insert", t.$sc);
          var P = k.offset().left + k.outerWidth() / 2, Z = k.offset().top + k.outerHeight();
          t.popups.show("link.insert", P, Z, k.outerHeight(), !0);
        }
      }
      return { _init: function() {
        t.events.on("keyup", function(F) {
          F.which != o.KEYCODE.ESC && Y(F);
        }), t.events.on("window.mouseup", Y), t.events.$on(t.$el, "click", "a", function(F) {
          t.edit.isDisabled() && F.preventDefault();
        }), t.helpers.isMobile() && t.events.$on(t.$doc, "selectionchange", Y), w(!0), t.el.tagName == "A" && t.$el.addClass("fr-view"), t.events.on("toolbar.esc", function() {
          if (t.popups.isVisible("link.edit"))
            return t.events.disableBlur(), t.events.focus(), !1;
        }, !0);
      }, remove: function() {
        var F = f(), P = t.image ? t.image.get() : null;
        if (t.events.trigger("link.beforeRemove", [F]) === !1)
          return !1;
        P && F ? (P.unwrap(), t.image.edit(P)) : F && (t.selection.save(), n(F).replaceWith(n(F).html()), t.selection.restore(), ue());
      }, showInsertPopup: function() {
        var F = t.$tb.find('.fr-command[data-cmd="insertLink"]'), P = t.popups.get("link.insert");
        if (P || (P = w()), !P.hasClass("fr-active"))
          if (t.popups.refresh("link.insert"), t.popups.setContainer("link.insert", t.$tb || t.$sc), F.isVisible()) {
            var Z = t.button.getPosition(F), le = Z.left, he = Z.top;
            t.popups.show("link.insert", le, he, F.outerHeight());
          } else
            t.position.forSelection(P), t.popups.show("link.insert");
      }, usePredefined: function(F) {
        var P, Z, le = t.opts.linkList[F], he = t.popups.get("link.insert"), ge = he.find('input.fr-link-attr[type="text"]'), e = he.find('input.fr-link-attr[type="checkbox"]');
        for (le.rel && (he.rel = le.rel), Z = 0; Z < ge.length; Z++)
          le[(P = n(ge[Z])).attr("name")] ? (P.val(le[P.attr("name")]), P.toggleClass("fr-not-empty", !0)) : P.attr("name") != "text" && P.val("");
        for (Z = 0; Z < e.length; Z++)
          (P = n(e[Z])).attr("checked", P.data("checked") == le[P.attr("name")]);
        t.accessibility.focusPopup(he);
      }, insertCallback: function() {
        var F, P, Z = t.popups.get("link.insert"), le = Z.find('input.fr-link-attr[type="text"]'), he = Z.find('input.fr-link-attr[type="checkbox"]'), ge = (le.filter('[name="href"]').val() || "").trim(), e = le.filter('[name="text"]').val(), r = {};
        for (P = 0; P < le.length; P++)
          F = n(le[P]), ["href", "text"].indexOf(F.attr("name")) < 0 && (r[F.attr("name")] = F.val());
        for (P = 0; P < he.length; P++)
          (F = n(he[P])).is(":checked") ? r[F.attr("name")] = F.data("checked") : r[F.attr("name")] = F.data("unchecked") || null;
        Z.rel && (r.rel = Z.rel);
        var s = t.helpers.scrollTop();
        oe(ge, e, r), n(t.o_win).scrollTop(s);
      }, insert: oe, update: pe, get: f, allSelected: G, back: function() {
        t.image && t.image.get() ? t.image.back() : (t.events.disableBlur(), t.selection.restore(), t.events.enableBlur(), f() && t.$wp ? (t.selection.restore(), ue(), Y()) : t.el.tagName == "A" ? (t.$el.focus(), Y()) : (t.popups.hide("link.insert"), t.toolbar.showInline()));
      }, imageLink: te, applyStyle: function(F, P, Z) {
        Z === void 0 && (Z = t.opts.linkMultipleStyles), P === void 0 && (P = t.opts.linkStyles);
        var le = f();
        if (!le)
          return !1;
        if (!Z) {
          var he = Object.keys(P);
          he.splice(he.indexOf(F), 1), n(le).removeClass(he.join(" "));
        }
        n(le).toggleClass(F), Y();
      } };
    }, o.DefineIcon("insertLink", { NAME: "link", SVG_KEY: "insertLink" }), o.RegisterShortcut(o.KEYCODE.K, "insertLink", null, "K"), o.RegisterCommand("insertLink", { title: "Insert Link", undo: !1, focus: !0, refreshOnCallback: !1, popup: !0, callback: function() {
      this.popups.isVisible("link.insert") ? (this.$el.find(".fr-marker").length && (this.events.disableBlur(), this.selection.restore()), this.popups.hide("link.insert")) : this.link.showInsertPopup();
    }, plugin: "link" }), o.DefineIcon("linkOpen", { NAME: "external-link", FA5NAME: "external-link-alt", SVG_KEY: "openLink" }), o.RegisterCommand("linkOpen", { title: "Open Link", undo: !1, refresh: function(t) {
      this.link.get() ? t.removeClass("fr-hidden") : t.addClass("fr-hidden");
    }, callback: function() {
      var t = this.link.get();
      t && (t.href.indexOf("mailto:") !== -1 ? this.o_win.open(t.href).close() : (t.target || (t.target = "_self"), this.browser.msie || this.browser.edge ? this.o_win.open(t.href, t.target) : this.o_win.open(t.href, t.target, "noopener")), this.popups.hide("link.edit"));
    }, plugin: "link" }), o.DefineIcon("linkEdit", { NAME: "edit", SVG_KEY: "edit" }), o.RegisterCommand("linkEdit", { title: "Edit Link", undo: !1, refreshAfterCallback: !1, popup: !0, callback: function() {
      this.link.update();
    }, refresh: function(t) {
      this.link.get() ? t.removeClass("fr-hidden") : t.addClass("fr-hidden");
    }, plugin: "link" }), o.DefineIcon("linkRemove", { NAME: "unlink", SVG_KEY: "unlink" }), o.RegisterCommand("linkRemove", { title: "Unlink", callback: function() {
      this.link.remove();
    }, refresh: function(t) {
      this.link.get() ? t.removeClass("fr-hidden") : t.addClass("fr-hidden");
    }, plugin: "link" }), o.DefineIcon("linkBack", { NAME: "arrow-left", SVG_KEY: "back" }), o.RegisterCommand("linkBack", { title: "Back", undo: !1, focus: !1, back: !0, refreshAfterCallback: !1, callback: function() {
      this.link.back();
    }, refresh: function(t) {
      var n = this.link.get() && this.doc.hasFocus();
      (this.image ? this.image.get() : null) || n || this.opts.toolbarInline ? (t.removeClass("fr-hidden"), t.next(".fr-separator").removeClass("fr-hidden")) : (t.addClass("fr-hidden"), t.next(".fr-separator").addClass("fr-hidden"));
    }, plugin: "link" }), o.DefineIcon("linkList", { NAME: "search", SVG_KEY: "search" }), o.RegisterCommand("linkList", { title: "Choose Link", type: "dropdown", focus: !1, undo: !1, refreshAfterCallback: !1, html: function() {
      for (var t = '<ul class="fr-dropdown-list" role="presentation">', n = this.opts.linkList, f = 0; f < n.length; f++)
        t += '<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="linkList" data-param1="'.concat(f, '">').concat(n[f].displayText || n[f].text, "</a></li>");
      return t += "</ul>";
    }, callback: function(t, n) {
      this.link.usePredefined(n);
    }, plugin: "link" }), o.RegisterCommand("linkInsert", { focus: !1, refreshAfterCallback: !1, callback: function() {
      this.link.insertCallback();
    }, refresh: function(t) {
      this.link.get() ? t.text(this.language.translate("Update")) : t.text(this.language.translate("Insert"));
    }, plugin: "link" }), o.DefineIcon("imageLink", { NAME: "link", SVG_KEY: "insertLink" }), o.RegisterCommand("imageLink", { title: "Insert Link", undo: !1, focus: !1, popup: !0, callback: function() {
      this.link.imageLink();
    }, refresh: function(t) {
      var n;
      this.link.get() ? ((n = t.prev()).hasClass("fr-separator") && n.removeClass("fr-hidden"), t.addClass("fr-hidden")) : ((n = t.prev()).hasClass("fr-separator") && n.addClass("fr-hidden"), t.removeClass("fr-hidden"));
    }, plugin: "link" }), o.DefineIcon("linkStyle", { NAME: "magic", SVG_KEY: "linkStyles" }), o.RegisterCommand("linkStyle", { title: "Style", type: "dropdown", html: function() {
      var t = '<ul class="fr-dropdown-list" role="presentation">', n = this.opts.linkStyles;
      for (var f in n)
        n.hasOwnProperty(f) && (t += '<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="linkStyle" data-param1="'.concat(f, '">').concat(this.language.translate(n[f]), "</a></li>"));
      return t += "</ul>";
    }, callback: function(t, n) {
      this.link.applyStyle(n);
    }, refreshOnShow: function(t, n) {
      var f = this.$, G = this.link.get();
      if (G) {
        var Y = f(G);
        n.find(".fr-command").each(function() {
          var ce = f(this).data("param1"), ue = Y.hasClass(ce);
          f(this).toggleClass("fr-active", ue).attr("aria-selected", ue);
        });
      }
    }, refresh: function(t) {
      this.link.get() ? t.removeClass("fr-hidden") : t.addClass("fr-hidden");
    }, plugin: "link" });
  });
})();
/*!
 * froala_editor v3.1.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
(function(Ie, Le) {
  (function(o, t) {
    t($e());
  })(ke, function(o) {
    o = o && o.hasOwnProperty("default") ? o.default : o, Object.assign(o.DEFAULTS, { listAdvancedTypes: !0 }), o.PLUGINS.lists = function(t) {
      var n = t.$;
      function f(oe) {
        return '<span class="fr-open-'.concat(oe.toLowerCase(), '"></span>');
      }
      function G(oe) {
        return '<span class="fr-close-'.concat(oe.toLowerCase(), '"></span>');
      }
      function Y(oe, pe) {
        (function(e, r) {
          for (var s = [], d = 0; d < e.length; d++) {
            var u = e[d].parentNode;
            e[d].tagName == "LI" && u.tagName != r && s.indexOf(u) < 0 && s.push(u);
          }
          for (var b = s.length - 1; 0 <= b; b--) {
            var E = n(s[b]);
            E.replaceWith("<".concat(r.toLowerCase(), " ").concat(t.node.attributes(E.get(0)), ">").concat(E.html(), "</").concat(r.toLowerCase(), ">"));
          }
        })(oe, pe);
        var te, k = t.html.defaultTag(), F = null;
        oe.length && (te = t.opts.direction == "rtl" || n(oe[0]).css("direction") == "rtl" ? "margin-right" : "margin-left");
        for (var P = 0; P < oe.length; P++)
          if (oe[P].tagName != "TD" && oe[P].tagName != "TH" && oe[P].tagName != "LI") {
            var Z = t.helpers.getPX(n(oe[P]).css(te)) || 0;
            (oe[P].style.marginLeft = null) === F && (F = Z);
            var le = 0 < F ? "<".concat(pe, ' style="').concat(te, ": ").concat(F, 'px ">') : "<".concat(pe, ">"), he = "</".concat(pe, ">");
            for (Z -= F; 0 < Z / t.opts.indentMargin; )
              le += "</".concat(pe, ">"), he += he, Z -= t.opts.indentMargin;
            k && oe[P].tagName.toLowerCase() == k ? n(oe[P]).replaceWith("".concat(le, "<li").concat(t.node.attributes(oe[P]), ">").concat(n(oe[P]).html(), "</li>").concat(he)) : n(oe[P]).wrap("".concat(le, "<li></li>").concat(he));
          }
        t.clean.lists();
      }
      function ce(oe) {
        var pe, te;
        for (pe = oe.length - 1; 0 <= pe; pe--)
          for (te = pe - 1; 0 <= te; te--)
            if (n(oe[te]).find(oe[pe]).length || oe[te] == oe[pe]) {
              oe.splice(pe, 1);
              break;
            }
        var k = [];
        for (pe = 0; pe < oe.length; pe++) {
          var F = n(oe[pe]), P = oe[pe].parentNode, Z = F.attr("class");
          if (F.before(G(P.tagName)), P.parentNode.tagName == "LI")
            F.before(G("LI")), F.after(f("LI"));
          else {
            var le = "";
            Z && (le += ' class="'.concat(Z, '"'));
            var he = t.opts.direction == "rtl" || F.css("direction") == "rtl" ? "margin-right" : "margin-left";
            t.helpers.getPX(n(P).css(he)) && 0 <= (n(P).attr("style") || "").indexOf("".concat(he, ":")) && (le += ' style="'.concat(he, ":").concat(t.helpers.getPX(n(P).css(he)), 'px;"')), t.html.defaultTag() && F.find(t.html.blockTagsQuery()).length === 0 && F.wrapInner(t.html.defaultTag() + le), t.node.isEmpty(F.get(0), !0) || F.find(t.html.blockTagsQuery()).length !== 0 || F.append("<br>"), F.append(f("LI")), F.prepend(G("LI"));
          }
          F.after(f(P.tagName)), P.parentNode.tagName == "LI" && (P = P.parentNode.parentNode), k.indexOf(P) < 0 && k.push(P);
        }
        for (pe = 0; pe < k.length; pe++) {
          var ge = n(k[pe]), e = ge.html();
          e = (e = e.replace(/<span class="fr-close-([a-z]*)"><\/span>/g, "</$1>")).replace(/<span class="fr-open-([a-z]*)"><\/span>/g, "<$1>"), ge.replaceWith(t.node.openTagString(ge.get(0)) + e + t.node.closeTagString(ge.get(0)));
        }
        t.$el.find("li:empty").remove(), t.$el.find("ul:empty, ol:empty").remove(), t.clean.lists(), t.html.wrap();
      }
      function ue(oe) {
        t.selection.save();
        for (var pe = 0; pe < oe.length; pe++) {
          var te = oe[pe].previousSibling;
          if (te) {
            var k = n(oe[pe]).find("> ul, > ol").last().get(0);
            if (k) {
              var F = n(document.createElement("li"));
              n(k).prepend(F);
              for (var P = t.node.contents(oe[pe])[0]; P && !t.node.isList(P); ) {
                var Z = P.nextSibling;
                F.append(P), P = Z;
              }
              n(te).append(n(k)), n(oe[pe]).remove();
            } else {
              var le = n(te).find("> ul, > ol").last().get(0);
              if (le)
                n(le).append(n(oe[pe]));
              else {
                var he = n("<".concat(oe[pe].parentNode.tagName, ">"));
                n(te).append(he), he.append(n(oe[pe]));
              }
            }
          }
        }
        t.clean.lists(), t.selection.restore();
      }
      function ee(oe) {
        t.selection.save(), ce(oe), t.selection.restore();
      }
      function w(oe) {
        if (oe == "indent" || oe == "outdent") {
          var pe = !1, te = t.selection.blocks(), k = [], F = te[0].previousSibling || te[0].parentElement;
          if (oe == "outdent") {
            if (F.tagName == "LI" || F.parentNode.tagName != "LI")
              return;
          } else if (!te[0].previousSibling || te[0].previousSibling.tagName != "LI")
            return;
          for (var P = 0; P < te.length; P++)
            te[P].tagName == "LI" ? (pe = !0, k.push(te[P])) : te[P].parentNode.tagName == "LI" && (pe = !0, k.push(te[P].parentNode));
          pe && (oe == "indent" ? ue(k) : ee(k));
        }
      }
      return { _init: function() {
        t.events.on("commands.after", w), t.events.on("keydown", function(pe) {
          if (pe.which == o.KEYCODE.TAB) {
            for (var te = t.selection.blocks(), k = [], F = 0; F < te.length; F++)
              te[F].tagName == "LI" ? k.push(te[F]) : te[F].parentNode.tagName == "LI" && k.push(te[F].parentNode);
            if (1 < k.length || k.length && (t.selection.info(k[0]).atStart || t.node.isEmpty(k[0])))
              return pe.preventDefault(), pe.stopPropagation(), pe.shiftKey ? ee(k) : ue(k), !1;
          }
        }, !0);
      }, format: function(pe, te) {
        var k, F;
        for (t.html.syncInputs(), t.selection.save(), t.html.wrap(!0, !0, !0, !0), t.selection.restore(), F = t.selection.blocks(), k = 0; k < F.length; k++)
          F[k].tagName != "LI" && F[k].parentNode.tagName == "LI" && (F[k] = F[k].parentNode);
        if (t.selection.save(), function(Z, le) {
          for (var he = !0, ge = 0; ge < Z.length; ge++) {
            if (Z[ge].tagName != "LI")
              return !1;
            Z[ge].parentNode.tagName != le && (he = !1);
          }
          return he;
        }(F, pe) ? te || ce(F) : Y(F, pe), t.html.unwrap(), t.selection.restore(), te = te || "default") {
          for (F = t.selection.blocks(), k = 0; k < F.length; k++)
            F[k].tagName != "LI" && F[k].parentNode.tagName == "LI" && (F[k] = F[k].parentNode);
          for (k = 0; k < F.length; k++)
            F[k].tagName == "LI" && (n(F[k].parentNode).css("list-style-type", te === "default" ? "" : te), (n(F[k].parentNode).attr("style") || "").length === 0 && n(F[k].parentNode).removeAttr("style"));
        }
      }, refresh: function(pe, te) {
        var k = n(t.selection.element());
        if (k.get(0) != t.el) {
          var F = k.get(0);
          (F = F.tagName != "LI" && F.firstElementChild && F.firstElementChild.tagName != "LI" ? k.parents("li").get(0) : F.tagName == "LI" || F.firstElementChild ? F.firstElementChild && F.firstElementChild.tagName == "LI" ? k.get(0).firstChild : k.get(0) : k.parents("li").get(0)) && F.parentNode.tagName == te && t.el.contains(F.parentNode) && pe.addClass("fr-active");
        }
      } };
    }, o.DefineIcon("formatOLSimple", { NAME: "list-ol", SVG_KEY: "orderedList" }), o.RegisterCommand("formatOLSimple", { title: "Ordered List", type: "button", options: { default: "Default", circle: "Circle", disc: "Disc", square: "Square" }, refresh: function(t) {
      this.lists.refresh(t, "OL");
    }, callback: function(t, n) {
      this.lists.format("OL", n);
    }, plugin: "lists" }), o.RegisterCommand("formatUL", { title: "Unordered List", type: "button", hasOptions: function() {
      return this.opts.listAdvancedTypes;
    }, options: { default: "Default", circle: "Circle", disc: "Disc", square: "Square" }, refresh: function(t) {
      this.lists.refresh(t, "UL");
    }, callback: function(t, n) {
      this.lists.format("UL", n);
    }, plugin: "lists" }), o.RegisterCommand("formatOL", { title: "Ordered List", hasOptions: function() {
      return this.opts.listAdvancedTypes;
    }, options: { default: "Default", "lower-alpha": "Lower Alpha", "lower-greek": "Lower Greek", "lower-roman": "Lower Roman", "upper-alpha": "Upper Alpha", "upper-roman": "Upper Roman" }, refresh: function(t) {
      this.lists.refresh(t, "OL");
    }, callback: function(t, n) {
      this.lists.format("OL", n);
    }, plugin: "lists" }), o.DefineIcon("formatUL", { NAME: "list-ul", SVG_KEY: "unorderedList" }), o.DefineIcon("formatOL", { NAME: "list-ol", SVG_KEY: "orderedList" });
  });
})();
/*!
 * froala_editor v3.1.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
(function(Ie, Le) {
  (function(o, t) {
    t($e());
  })(ke, function(o) {
    o = o && o.hasOwnProperty("default") ? o.default : o, Object.assign(o.DEFAULTS, { paragraphFormat: { N: "Normal", H1: "Heading 1", H2: "Heading 2", H3: "Heading 3", H4: "Heading 4", PRE: "Code" }, paragraphFormatSelection: !1, paragraphDefaultSelection: "Paragraph Format" }), o.PLUGINS.paragraphFormat = function(t) {
      var n = t.$;
      function f(G, Y) {
        var ce = t.html.defaultTag();
        if (Y && Y.toLowerCase() != ce)
          if (0 < G.find("ul, ol").length) {
            var ue = n("<" + Y + ">");
            G.prepend(ue);
            for (var ee = t.node.contents(G.get(0))[0]; ee && ["UL", "OL"].indexOf(ee.tagName) < 0; ) {
              var w = ee.nextSibling;
              ue.append(ee), ee = w;
            }
          } else
            G.html("<" + Y + ">" + G.html() + "</" + Y + ">");
      }
      return { apply: function(Y) {
        Y == "N" && (Y = t.html.defaultTag()), t.selection.save(), t.html.wrap(!0, !0, !t.opts.paragraphFormat.BLOCKQUOTE, !0, !0), t.selection.restore();
        var ce, ue, ee, w, oe, pe, te, k, F = t.selection.blocks();
        t.selection.save(), t.$el.find("pre").attr("skip", !0);
        for (var P = 0; P < F.length; P++)
          if (F[P].tagName != Y && !t.node.isList(F[P])) {
            var Z = n(F[P]);
            F[P].tagName == "LI" ? f(Z, Y) : F[P].parentNode.tagName == "LI" && F[P] ? (pe = Z, te = Y, k = t.html.defaultTag(), te && te.toLowerCase() != k || (te = 'div class="fr-temp-div"'), pe.replaceWith(n("<" + te + ">").html(pe.html()))) : 0 <= ["TD", "TH"].indexOf(F[P].parentNode.tagName) ? (ee = Z, w = Y, oe = t.html.defaultTag(), w || (w = 'div class="fr-temp-div"' + (t.node.isEmpty(ee.get(0), !0) ? ' data-empty="true"' : "")), w.toLowerCase() == oe ? (t.node.isEmpty(ee.get(0), !0) || ee.append("<br/>"), ee.replaceWith(ee.html())) : ee.replaceWith(n("<" + w + ">").html(ee.html()))) : (ce = Z, (ue = Y) || (ue = 'div class="fr-temp-div"' + (t.node.isEmpty(ce.get(0), !0) ? ' data-empty="true"' : "")), ue != "H1" && ue != "H2" && ue != "H3" && ue != "H4" && ue != "H5" || !t.node.attributes(ce.get(0)).includes("font-size:") ? ce.replaceWith(n("<" + ue + " " + t.node.attributes(ce.get(0)) + ">").html(ce.html()).removeAttr("data-empty")) : ce.replaceWith(n("<" + ue + " " + t.node.attributes(ce.get(0)).replace(/font-size:[0-9]+px;?/, "") + ">").html(ce.html()).removeAttr("data-empty")));
          }
        t.$el.find('pre:not([skip="true"]) + pre:not([skip="true"])').each(function() {
          n(this).prev().append("<br>" + n(this).html()), n(this).remove();
        }), t.$el.find("pre").removeAttr("skip"), t.html.unwrap(), t.selection.restore();
      }, refreshOnShow: function(Y, ce) {
        var ue = t.selection.blocks();
        if (ue.length) {
          var ee = ue[0], w = "N", oe = t.html.defaultTag();
          ee.tagName.toLowerCase() != oe && ee != t.el && (w = ee.tagName), ce.find('.fr-command[data-param1="' + w + '"]').addClass("fr-active").attr("aria-selected", !0);
        } else
          ce.find('.fr-command[data-param1="N"]').addClass("fr-active").attr("aria-selected", !0);
      }, refresh: function(Y) {
        if (t.opts.paragraphFormatSelection) {
          var ce = t.selection.blocks();
          if (ce.length) {
            var ue = ce[0], ee = "N", w = t.html.defaultTag();
            ue.tagName.toLowerCase() != w && ue != t.el && (ee = ue.tagName), 0 <= ["LI", "TD", "TH"].indexOf(ee) && (ee = "N"), Y.find(">span").text(t.language.translate(t.opts.paragraphFormat[ee]));
          } else
            Y.find(">span").text(t.language.translate(t.opts.paragraphFormat.N));
        }
      } };
    }, o.RegisterCommand("paragraphFormat", { type: "dropdown", displaySelection: function(t) {
      return t.opts.paragraphFormatSelection;
    }, defaultSelection: function(t) {
      return t.language.translate(t.opts.paragraphDefaultSelection);
    }, displaySelectionWidth: 80, html: function() {
      var t = '<ul class="fr-dropdown-list" role="presentation">', n = this.opts.paragraphFormat;
      for (var f in n)
        n.hasOwnProperty(f) && (this.shortcuts.get("paragraphFormat." + f), t += '<li role="presentation"><' + (f == "N" ? this.html.defaultTag() || "DIV" : f) + ' style="padding: 0 !important; margin: 0 !important;" role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="paragraphFormat" data-param1="' + f + '" title="' + this.language.translate(n[f]) + '">' + this.language.translate(n[f]) + "</a></" + (f == "N" ? this.html.defaultTag() || "DIV" : f) + "></li>");
      return t += "</ul>";
    }, title: "Paragraph Format", callback: function(t, n) {
      this.paragraphFormat.apply(n);
    }, refresh: function(t) {
      this.paragraphFormat.refresh(t);
    }, refreshOnShow: function(t, n) {
      this.paragraphFormat.refreshOnShow(t, n);
    }, plugin: "paragraphFormat" }), o.DefineIcon("paragraphFormat", { NAME: "paragraph", SVG_KEY: "paragraphFormat" });
  });
})();
/*!
 * froala_editor v3.1.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
(function(Ie, Le) {
  (function(o, t) {
    t($e());
  })(ke, function(o) {
    o = o && o.hasOwnProperty("default") ? o.default : o, Object.assign(o.DEFAULTS, { paragraphStyles: { "fr-text-gray": "Gray", "fr-text-bordered": "Bordered", "fr-text-spaced": "Spaced", "fr-text-uppercase": "Uppercase" }, paragraphMultipleStyles: !0 }), o.PLUGINS.paragraphStyle = function(t) {
      var n = t.$;
      return { _init: function() {
      }, apply: function(G, Y, ce) {
        Y === void 0 && (Y = t.opts.paragraphStyles), ce === void 0 && (ce = t.opts.paragraphMultipleStyles);
        var ue = "";
        ce || ((ue = Object.keys(Y)).splice(ue.indexOf(G), 1), ue = ue.join(" ")), t.selection.save(), t.html.wrap(!0, !0, !0, !0), t.selection.restore();
        var ee = t.selection.blocks();
        t.selection.save();
        for (var w = n(ee[0]).hasClass(G), oe = 0; oe < ee.length; oe++)
          n(ee[oe]).removeClass(ue).toggleClass(G, !w), n(ee[oe]).hasClass("fr-temp-div") && n(ee[oe]).removeClass("fr-temp-div"), n(ee[oe]).attr("class") === "" && n(ee[oe]).removeAttr("class");
        t.html.unwrap(), t.selection.restore();
      }, refreshOnShow: function(G, Y) {
        var ce = t.selection.blocks();
        if (ce.length) {
          var ue = n(ce[0]);
          Y.find(".fr-command").each(function() {
            var ee = n(this).data("param1"), w = ue.hasClass(ee);
            n(this).toggleClass("fr-active", w).attr("aria-selected", w);
          });
        }
      } };
    }, o.RegisterCommand("paragraphStyle", { type: "dropdown", html: function() {
      var t = '<ul class="fr-dropdown-list" role="presentation">', n = this.opts.paragraphStyles;
      for (var f in n)
        n.hasOwnProperty(f) && (t += '<li role="presentation"><a class="fr-command '.concat(f, '" tabIndex="-1" role="option" data-cmd="paragraphStyle" data-param1="').concat(f, '" title="').concat(this.language.translate(n[f]), '">').concat(this.language.translate(n[f]), "</a></li>"));
      return t += "</ul>";
    }, title: "Paragraph Style", callback: function(t, n) {
      this.paragraphStyle.apply(n);
    }, refreshOnShow: function(t, n) {
      this.paragraphStyle.refreshOnShow(t, n);
    }, plugin: "paragraphStyle" }), o.DefineIcon("paragraphStyle", { NAME: "magic", SVG_KEY: "paragraphStyle" });
  });
})();
/*!
 * froala_editor v3.1.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
(function(Ie, Le) {
  (function(o, t) {
    t($e());
  })(ke, function(o) {
    o = o && o.hasOwnProperty("default") ? o.default : o, Object.assign(o.DEFAULTS, { html2pdf: window.html2pdf }), o.PLUGINS.print = function(t) {
      return { run: function() {
        (function(G) {
          var Y = t.html.get(), ce = null;
          t.shared.print_iframe ? ce = t.shared.print_iframe : ((ce = document.createElement("iframe")).name = "fr-print", ce.style.position = "fixed", ce.style.top = "0", ce.style.left = "-9999px", ce.style.height = "100%", ce.style.width = "0", ce.style.overflow = "hidden", ce.style["z-index"] = "2147483647", ce.style.tabIndex = "-1", t.events.on("shared.destroy", function() {
            ce.remove();
          }), t.shared.print_iframe = ce);
          try {
            document.body.removeChild(ce);
          } catch {
          }
          document.body.appendChild(ce);
          var ue = function oe() {
            G(), ce.removeEventListener("load", oe);
          };
          ce.addEventListener("load", ue);
          var ee = ce.contentWindow;
          ee.document.open(), ee.document.write("<!DOCTYPE html><html " + (t.opts.documentReady ? 'style="margin: 0; padding: 0;"' : "") + "><head><title>" + document.title + "</title>"), Array.prototype.forEach.call(document.querySelectorAll("style"), function(oe) {
            oe = oe.cloneNode(!0), ee.document.write(oe.outerHTML);
          });
          var w = document.querySelectorAll("link[rel=stylesheet]");
          Array.prototype.forEach.call(w, function(oe) {
            var pe = document.createElement("link");
            pe.rel = oe.rel, pe.href = oe.href, pe.media = "print", pe.type = "text/css", pe.media = "all", ee.document.write(pe.outerHTML);
          }), ee.document.write('</head><body style="height:auto;text-align: ' + (t.opts.direction == "rtl" ? "right" : "left") + "; direction: " + t.opts.direction + "; " + (t.opts.documentReady ? " padding: 2cm; width: 17cm; margin: 0;" : "") + '"><div class="fr-view">'), ee.document.write(Y), ee.document.write("</div></body></html>"), ee.document.close();
        })(function() {
          setTimeout(function() {
            t.events.disableBlur(), window.frames["fr-print"].focus(), window.frames["fr-print"].print(), t.$win.get(0).focus(), t.events.disableBlur(), t.events.focus();
          }, 0);
        });
      }, toPDF: function() {
        t.opts.html2pdf && (t.$el.css("text-align", "left"), t.opts.html2pdf().set({ margin: [10, 20], html2canvas: { useCORS: !0 } }).from(t.el).save(), setTimeout(function() {
          t.$el.css("text-align", "");
        }, 100));
      } };
    }, o.DefineIcon("print", { NAME: "print", SVG_KEY: "print" }), o.RegisterCommand("print", { title: "Print", undo: !1, focus: !1, plugin: "print", callback: function() {
      this.print.run();
    } }), o.DefineIcon("getPDF", { NAME: "file-pdf-o", FA5NAME: "file-pdf", SVG_KEY: "pdfExport" }), o.RegisterCommand("getPDF", { title: "Download PDF", type: "button", focus: !1, undo: !1, callback: function() {
      this.print.toPDF();
    } });
  });
})();
/*!
 * froala_editor v3.1.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
(function(Ie, Le) {
  (function(o, t) {
    t($e());
  })(ke, function(o) {
    o = o && o.hasOwnProperty("default") ? o.default : o, Object.assign(o.DEFAULTS, { quickInsertButtons: ["image", "video", "embedly", "table", "ul", "ol", "hr"], quickInsertTags: ["p", "div", "h1", "h2", "h3", "h4", "h5", "h6", "pre", "blockquote"], quickInsertEnabled: !0 }), o.QUICK_INSERT_BUTTONS = {}, o.DefineIcon("quickInsert", { SVG_KEY: "add", template: "svg" }), o.RegisterQuickInsertButton = function(t, n) {
      o.QUICK_INSERT_BUTTONS[t] = Object.assign({ undo: !0 }, n);
    }, o.RegisterQuickInsertButton("image", { icon: "insertImage", requiredPlugin: "image", title: "Insert Image", undo: !1, callback: function() {
      var t = this, n = t.$;
      t.shared.$qi_image_input || (t.shared.$qi_image_input = n(document.createElement("input")).attr("accept", "image/" + t.opts.imageAllowedTypes.join(", image/").toLowerCase()).attr("name", "quickInsertImage".concat(this.id)).attr("style", "display: none;").attr("type", "file"), n("body").first().append(t.shared.$qi_image_input), t.events.$on(t.shared.$qi_image_input, "change", function() {
        var f = n(this).data("inst");
        this.files && (f.quickInsert.hide(), f.image.upload(this.files)), n(this).val("");
      }, !0)), t.$qi_image_input = t.shared.$qi_image_input, t.helpers.isMobile() && t.selection.save(), t.events.disableBlur(), t.$qi_image_input.data("inst", t)[0].click();
    } }), o.RegisterQuickInsertButton("video", { icon: "insertVideo", requiredPlugin: "video", title: "Insert Video", undo: !1, callback: function() {
      var t = prompt(this.language.translate("Paste the URL of the video you want to insert."));
      t && this.video.insertByURL(t);
    } }), o.RegisterQuickInsertButton("embedly", { icon: "embedly", requiredPlugin: "embedly", title: "Embed URL", undo: !1, callback: function() {
      var t = prompt(this.language.translate("Paste the URL of any web content you want to insert."));
      t && this.embedly.add(t);
    } }), o.RegisterQuickInsertButton("table", { icon: "insertTable", requiredPlugin: "table", title: "Insert Table", callback: function() {
      this.table.insert(2, 2);
    } }), o.RegisterQuickInsertButton("ol", { icon: "formatOL", requiredPlugin: "lists", title: "Ordered List", callback: function() {
      this.lists.format("OL");
    } }), o.RegisterQuickInsertButton("ul", { icon: "formatUL", requiredPlugin: "lists", title: "Unordered List", callback: function() {
      this.lists.format("UL");
    } }), o.RegisterQuickInsertButton("hr", { icon: "insertHR", title: "Insert Horizontal Line", callback: function() {
      this.commands.insertHR();
    } }), o.PLUGINS.quickInsert = function(t) {
      var n, f, G = t.$;
      function Y(te) {
        var k, F, P;
        if (k = te.offset().top - t.$box.offset().top, F = (t.$iframe && t.$iframe.offset().left || 0) + te.offset().left < n.outerWidth() ? te.offset().left + n.outerWidth() : 0 - n.outerWidth(), t.opts.enter != o.ENTER_BR ? P = (n.outerHeight() - te.outerHeight()) / 2 : (G(document.createElement("span")).html(o.INVISIBLE_SPACE).insertAfter(te), P = (n.outerHeight() - te.next().outerHeight()) / 2, te.next().remove()), t.opts.iframe) {
          var Z = t.helpers.getPX(t.$wp.find(".fr-iframe").css("padding-top"));
          k += t.$iframe.offset().top + Z;
        }
        n.hasClass("fr-on") && 0 <= k && f.css("top", k - P), 0 <= k && k - Math.abs(P) <= t.$box.outerHeight() - te.outerHeight() ? (n.hasClass("fr-hidden") && (n.hasClass("fr-on") && w(), n.removeClass("fr-hidden")), n.css("top", k - P)) : n.hasClass("fr-visible") && (n.addClass("fr-hidden"), oe()), n.css("left", F);
      }
      function ce(te) {
        n || function() {
          t.shared.$quick_insert || (t.shared.$quick_insert = G(document.createElement("div")).attr("class", "fr-quick-insert").html('<a class="fr-floating-btn" role="button" tabIndex="-1" title="'.concat(t.language.translate("Quick Insert"), '">').concat(t.icon.create("quickInsert"), "</a>"))), n = t.shared.$quick_insert, t.tooltip.bind(t.$box, ".fr-quick-insert > a.fr-floating-btn"), t.events.on("destroy", function() {
            G("body").first().append(n.removeClass("fr-on")), f && (oe(), G("body").first().append(f.css("left", -9999).css("top", -9999)));
          }, !0), t.events.on("shared.destroy", function() {
            n.html("").removeData().remove(), n = null, f && (f.html("").removeData().remove(), f = null);
          }, !0), t.events.on("commands.before", ee), t.events.on("commands.after", function() {
            t.popups.areVisible() || ue();
          }), t.events.bindClick(t.$box, ".fr-quick-insert > a", w), t.events.bindClick(t.$box, ".fr-qi-helper > a.fr-btn", function(F) {
            var P = G(F.currentTarget).data("cmd");
            if (t.events.trigger("quickInsert.commands.before", [P]) === !1)
              return !1;
            o.QUICK_INSERT_BUTTONS[P].callback.apply(t, [F.currentTarget]), o.QUICK_INSERT_BUTTONS[P].undo && t.undo.saveStep(), t.events.trigger("quickInsert.commands.after", [P]), t.quickInsert.hide();
          }), t.events.$on(t.$wp, "scroll", pe), t.events.$on(t.$tb, "transitionend", ".fr-more-toolbar", pe);
        }(), n.hasClass("fr-on") && oe(), t.$box.append(n), Y(te), n.data("tag", te), n.addClass("fr-visible");
      }
      function ue() {
        if (t.core.hasFocus()) {
          var te = t.selection.element();
          if (t.opts.enter == o.ENTER_BR || t.node.isBlock(te) || (te = t.node.blockParent(te)), t.opts.enter == o.ENTER_BR && !t.node.isBlock(te)) {
            var k = t.node.deepestParent(te);
            k && (te = k);
          }
          var F = function() {
            return t.opts.enter != o.ENTER_BR && t.node.isEmpty(te) && 0 <= t.opts.quickInsertTags.indexOf(te.tagName.toLowerCase());
          }, P = function() {
            return t.opts.enter == o.ENTER_BR && (te.tagName == "BR" && (!te.previousSibling || te.previousSibling.tagName == "BR" || t.node.isBlock(te.previousSibling)) || t.node.isEmpty(te) && (!te.previousSibling || te.previousSibling.tagName == "BR" || t.node.isBlock(te.previousSibling)) && (!te.nextSibling || te.nextSibling.tagName == "BR" || t.node.isBlock(te.nextSibling)));
          };
          te && (F() || P()) ? n && n.data("tag").is(G(te)) && n.hasClass("fr-on") ? oe() : t.selection.isCollapsed() && ce(G(te)) : ee();
        }
      }
      function ee() {
        n && (n.hasClass("fr-on") && oe(), n.removeClass("fr-visible fr-on"), n.css("left", -9999).css("top", -9999));
      }
      function w(te) {
        if (te && te.preventDefault(), n.hasClass("fr-on") && !n.hasClass("fr-hidden"))
          oe();
        else {
          if (!t.shared.$qi_helper) {
            for (var k = t.opts.quickInsertButtons, F = '<div class="fr-qi-helper">', P = 0, Z = 0; Z < k.length; Z++) {
              var le = o.QUICK_INSERT_BUTTONS[k[Z]];
              le && (!le.requiredPlugin || o.PLUGINS[le.requiredPlugin] && 0 <= t.opts.pluginsEnabled.indexOf(le.requiredPlugin)) && (F += '<a class="fr-btn fr-floating-btn" role="button" title="'.concat(t.language.translate(le.title), '" tabIndex="-1" data-cmd="').concat(k[Z], '" style="transition-delay: ').concat(0.025 * P++, 's;">').concat(t.icon.create(le.icon), "</a>"));
            }
            F += "</div>", t.shared.$qi_helper = G(F), t.tooltip.bind(t.shared.$qi_helper, "a.fr-btn"), t.events.$on(t.shared.$qi_helper, "mousedown", function(he) {
              he.preventDefault();
            }, !0);
          }
          f = t.shared.$qi_helper, t.$box.append(f), setTimeout(function() {
            f.css("top", parseFloat(n.css("top"))), f.css("left", parseFloat(n.css("left")) + n.outerWidth()), f.find("a").addClass("fr-size-1"), n.addClass("fr-on");
          }, 10);
        }
      }
      function oe() {
        var te = t.$box.find(".fr-qi-helper");
        te.length && function() {
          for (var k = te.find("a"), F = 0; F < k.length; F++)
            (function(P) {
              setTimeout(function() {
                te.children().eq(k.length - 1 - P).removeClass("fr-size-1");
              }, 25 * P);
            })(F);
          setTimeout(function() {
            te.css("left", -9999), n && !n.hasClass("fr-hidden") && n.removeClass("fr-on");
          }, 25 * F);
        }();
      }
      function pe() {
        n.hasClass("fr-visible") && Y(n.data("tag"));
      }
      return { _init: function() {
        if (!t.$wp || !t.opts.quickInsertEnabled)
          return !1;
        t.popups.onShow("image.edit", ee), t.events.on("mouseup", ue), t.helpers.isMobile() && t.events.$on(G(t.o_doc), "selectionchange", ue), t.events.on("blur", ee), t.events.on("keyup", ue), t.events.on("keydown", function() {
          setTimeout(function() {
            ue();
          }, 0);
        });
      }, hide: ee };
    };
  });
})();
/*!
 * froala_editor v3.1.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
(function(Ie, Le) {
  (function(o, t) {
    t($e());
  })(ke, function(o) {
    (o = o && o.hasOwnProperty("default") ? o.default : o).PLUGINS.quote = function(t) {
      var n = t.$;
      function f(G) {
        for (; G.parentNode && G.parentNode != t.el; )
          G = G.parentNode;
        return G;
      }
      return { apply: function(Y) {
        t.selection.save(), t.html.wrap(!0, !0, !0, !0), t.selection.restore(), Y == "increase" ? function() {
          var ue, ee = t.selection.blocks();
          for (ue = 0; ue < ee.length; ue++)
            ee[ue] = f(ee[ue]);
          t.selection.save();
          var w = n(document.createElement("blockquote"));
          for (w.insertBefore(ee[0]), ue = 0; ue < ee.length; ue++)
            w.append(ee[ue]);
          t.html.unwrap(), t.selection.restore();
        }() : Y == "decrease" && function() {
          var ue, ee = t.selection.blocks();
          for (ue = 0; ue < ee.length; ue++)
            ee[ue].tagName != "BLOCKQUOTE" && (ee[ue] = n(ee[ue]).parentsUntil(t.$el, "BLOCKQUOTE").get(0));
          for (t.selection.save(), ue = 0; ue < ee.length; ue++)
            ee[ue] && n(ee[ue]).replaceWith(ee[ue].innerHTML);
          t.html.unwrap(), t.selection.restore();
        }();
      } };
    }, o.RegisterShortcut(o.KEYCODE.SINGLE_QUOTE, "quote", "increase", "'"), o.RegisterShortcut(o.KEYCODE.SINGLE_QUOTE, "quote", "decrease", "'", !0), o.RegisterCommand("quote", { title: "Quote", type: "dropdown", html: function() {
      var t = '<ul class="fr-dropdown-list" role="presentation">', n = { increase: "Increase", decrease: "Decrease" };
      for (var f in n)
        if (n.hasOwnProperty(f)) {
          var G = this.shortcuts.get("quote.".concat(f));
          t += '<li role="presentation"><a class="fr-command fr-active '.concat(f, '" tabIndex="-1" role="option" data-cmd="quote" data-param1="').concat(f, '" title="').concat(n[f], '">').concat(this.language.translate(n[f])).concat(G ? '<span class="fr-shortcut">'.concat(G, "</span>") : "", "</a></li>");
        }
      return t += "</ul>";
    }, callback: function(t, n) {
      this.quote.apply(n);
    }, plugin: "quote" }), o.DefineIcon("quote", { NAME: "quote-left", SVG_KEY: "blockquote" });
  });
})();
/*!
 * froala_editor v3.1.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
(function(Ie, Le) {
  (function(o, t) {
    t($e());
  })(ke, function(o) {
    o = o && o.hasOwnProperty("default") ? o.default : o, Object.assign(o.DEFAULTS, { saveInterval: 1e4, saveURL: null, saveParams: {}, saveParam: "body", saveMethod: "POST" }), o.PLUGINS.save = function(t) {
      var n = t.$, f = null, G = null, Y = !1, ce = 1, ue = 2, ee = {};
      function w(te, k) {
        t.events.trigger("save.error", [{ code: te, message: ee[te] }, k]);
      }
      function oe(te) {
        te === void 0 && (te = t.html.get());
        var k = te, F = t.events.trigger("save.before", [te]);
        if (F === !1)
          return !1;
        if (typeof F == "string" && (te = F), t.opts.saveURL) {
          var P = {};
          for (var Z in t.opts.saveParams)
            if (t.opts.saveParams.hasOwnProperty(Z)) {
              var le = t.opts.saveParams[Z];
              P[Z] = typeof le == "function" ? le.call(this) : le;
            }
          var he = {};
          he[t.opts.saveParam] = te, n(this).ajax({ method: t.opts.saveMethod, url: t.opts.saveURL, data: Object.assign(he, P), crossDomain: t.opts.requestWithCORS, withCredentials: t.opts.requestWithCredentials, headers: t.opts.requestHeaders, done: function(ge, e, r) {
            G = k, t.events.trigger("save.after", [ge]);
          }, fail: function(ge) {
            w(ue, ge.response || ge.responseText);
          } });
        } else
          w(ce);
      }
      function pe() {
        clearTimeout(f), f = setTimeout(function() {
          var te = t.html.get();
          (G != te || Y) && (Y = !1, oe(G = te));
        }, 0);
      }
      return ee[ce] = "Missing saveURL option.", ee[ue] = "Something went wrong during save.", { _init: function() {
        t.opts.saveInterval && (G = t.html.get(), t.events.on("contentChanged", function() {
          setTimeout(pe, t.opts.saveInterval);
        }), t.events.on("keydown destroy", function() {
          clearTimeout(f);
        }));
      }, save: oe, reset: function() {
        pe(), Y = !1;
      }, force: function() {
        Y = !0;
      } };
    }, o.DefineIcon("save", { NAME: "floppy-o", FA5NAME: "save" }), o.RegisterCommand("save", { title: "Save", undo: !1, focus: !1, refreshAfterCallback: !1, callback: function() {
      this.save.save();
    }, plugin: "save" });
  });
})();
/*!
 * froala_editor v3.1.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
(function(Ie, Le) {
  (function(o, t) {
    t($e());
  })(ke, function(o) {
    o = o && o.hasOwnProperty("default") ? o.default : o, Object.assign(o.DEFAULTS, { specialCharactersSets: [{ title: "Latin", char: "&iexcl;", list: [{ char: "&iexcl;", desc: "INVERTED EXCLAMATION MARK" }, { char: "&cent;", desc: "CENT SIGN" }, { char: "&pound;", desc: "POUND SIGN" }, { char: "&curren;", desc: "CURRENCY SIGN" }, { char: "&yen;", desc: "YEN SIGN" }, { char: "&brvbar;", desc: "BROKEN BAR" }, { char: "&sect;", desc: "SECTION SIGN" }, { char: "&uml;", desc: "DIAERESIS" }, { char: "&copy;", desc: "COPYRIGHT SIGN" }, { char: "&trade;", desc: "TRADEMARK SIGN" }, { char: "&ordf;", desc: "FEMININE ORDINAL INDICATOR" }, { char: "&laquo;", desc: "LEFT-POINTING DOUBLE ANGLE QUOTATION MARK" }, { char: "&not;", desc: "NOT SIGN" }, { char: "&reg;", desc: "REGISTERED SIGN" }, { char: "&macr;", desc: "MACRON" }, { char: "&deg;", desc: "DEGREE SIGN" }, { char: "&plusmn;", desc: "PLUS-MINUS SIGN" }, { char: "&sup2;", desc: "SUPERSCRIPT TWO" }, { char: "&sup3;", desc: "SUPERSCRIPT THREE" }, { char: "&acute;", desc: "ACUTE ACCENT" }, { char: "&micro;", desc: "MICRO SIGN" }, { char: "&para;", desc: "PILCROW SIGN" }, { char: "&middot;", desc: "MIDDLE DOT" }, { char: "&cedil;", desc: "CEDILLA" }, { char: "&sup1;", desc: "SUPERSCRIPT ONE" }, { char: "&ordm;", desc: "MASCULINE ORDINAL INDICATOR" }, { char: "&raquo;", desc: "RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK" }, { char: "&frac14;", desc: "VULGAR FRACTION ONE QUARTER" }, { char: "&frac12;", desc: "VULGAR FRACTION ONE HALF" }, { char: "&frac34;", desc: "VULGAR FRACTION THREE QUARTERS" }, { char: "&iquest;", desc: "INVERTED QUESTION MARK" }, { char: "&Agrave;", desc: "LATIN CAPITAL LETTER A WITH GRAVE" }, { char: "&Aacute;", desc: "LATIN CAPITAL LETTER A WITH ACUTE" }, { char: "&Acirc;", desc: "LATIN CAPITAL LETTER A WITH CIRCUMFLEX" }, { char: "&Atilde;", desc: "LATIN CAPITAL LETTER A WITH TILDE" }, { char: "&Auml;", desc: "LATIN CAPITAL LETTER A WITH DIAERESIS " }, { char: "&Aring;", desc: "LATIN CAPITAL LETTER A WITH RING ABOVE" }, { char: "&AElig;", desc: "LATIN CAPITAL LETTER AE" }, { char: "&Ccedil;", desc: "LATIN CAPITAL LETTER C WITH CEDILLA" }, { char: "&Egrave;", desc: "LATIN CAPITAL LETTER E WITH GRAVE" }, { char: "&Eacute;", desc: "LATIN CAPITAL LETTER E WITH ACUTE" }, { char: "&Ecirc;", desc: "LATIN CAPITAL LETTER E WITH CIRCUMFLEX" }, { char: "&Euml;", desc: "LATIN CAPITAL LETTER E WITH DIAERESIS" }, { char: "&Igrave;", desc: "LATIN CAPITAL LETTER I WITH GRAVE" }, { char: "&Iacute;", desc: "LATIN CAPITAL LETTER I WITH ACUTE" }, { char: "&Icirc;", desc: "LATIN CAPITAL LETTER I WITH CIRCUMFLEX" }, { char: "&Iuml;", desc: "LATIN CAPITAL LETTER I WITH DIAERESIS" }, { char: "&ETH;", desc: "LATIN CAPITAL LETTER ETH" }, { char: "&Ntilde;", desc: "LATIN CAPITAL LETTER N WITH TILDE" }, { char: "&Ograve;", desc: "LATIN CAPITAL LETTER O WITH GRAVE" }, { char: "&Oacute;", desc: "LATIN CAPITAL LETTER O WITH ACUTE" }, { char: "&Ocirc;", desc: "LATIN CAPITAL LETTER O WITH CIRCUMFLEX" }, { char: "&Otilde;", desc: "LATIN CAPITAL LETTER O WITH TILDE" }, { char: "&Ouml;", desc: "LATIN CAPITAL LETTER O WITH DIAERESIS" }, { char: "&times;", desc: "MULTIPLICATION SIGN" }, { char: "&Oslash;", desc: "LATIN CAPITAL LETTER O WITH STROKE" }, { char: "&Ugrave;", desc: "LATIN CAPITAL LETTER U WITH GRAVE" }, { char: "&Uacute;", desc: "LATIN CAPITAL LETTER U WITH ACUTE" }, { char: "&Ucirc;", desc: "LATIN CAPITAL LETTER U WITH CIRCUMFLEX" }, { char: "&Uuml;", desc: "LATIN CAPITAL LETTER U WITH DIAERESIS" }, { char: "&Yacute;", desc: "LATIN CAPITAL LETTER Y WITH ACUTE" }, { char: "&THORN;", desc: "LATIN CAPITAL LETTER THORN" }, { char: "&szlig;", desc: "LATIN SMALL LETTER SHARP S" }, { char: "&agrave;", desc: "LATIN SMALL LETTER A WITH GRAVE" }, { char: "&aacute;", desc: "LATIN SMALL LETTER A WITH ACUTE " }, { char: "&acirc;", desc: "LATIN SMALL LETTER A WITH CIRCUMFLEX" }, { char: "&atilde;", desc: "LATIN SMALL LETTER A WITH TILDE" }, { char: "&auml;", desc: "LATIN SMALL LETTER A WITH DIAERESIS" }, { char: "&aring;", desc: "LATIN SMALL LETTER A WITH RING ABOVE" }, { char: "&aelig;", desc: "LATIN SMALL LETTER AE" }, { char: "&ccedil;", desc: "LATIN SMALL LETTER C WITH CEDILLA" }, { char: "&egrave;", desc: "LATIN SMALL LETTER E WITH GRAVE" }, { char: "&eacute;", desc: "LATIN SMALL LETTER E WITH ACUTE" }, { char: "&ecirc;", desc: "LATIN SMALL LETTER E WITH CIRCUMFLEX" }, { char: "&euml;", desc: "LATIN SMALL LETTER E WITH DIAERESIS" }, { char: "&igrave;", desc: "LATIN SMALL LETTER I WITH GRAVE" }, { char: "&iacute;", desc: "LATIN SMALL LETTER I WITH ACUTE" }, { char: "&icirc;", desc: "LATIN SMALL LETTER I WITH CIRCUMFLEX" }, { char: "&iuml;", desc: "LATIN SMALL LETTER I WITH DIAERESIS" }, { char: "&eth;", desc: "LATIN SMALL LETTER ETH" }, { char: "&ntilde;", desc: "LATIN SMALL LETTER N WITH TILDE" }, { char: "&ograve;", desc: "LATIN SMALL LETTER O WITH GRAVE" }, { char: "&oacute;", desc: "LATIN SMALL LETTER O WITH ACUTE" }, { char: "&ocirc;", desc: "LATIN SMALL LETTER O WITH CIRCUMFLEX" }, { char: "&otilde;", desc: "LATIN SMALL LETTER O WITH TILDE" }, { char: "&ouml;", desc: "LATIN SMALL LETTER O WITH DIAERESIS" }, { char: "&divide;", desc: "DIVISION SIGN" }, { char: "&oslash;", desc: "LATIN SMALL LETTER O WITH STROKE" }, { char: "&ugrave;", desc: "LATIN SMALL LETTER U WITH GRAVE" }, { char: "&uacute;", desc: "LATIN SMALL LETTER U WITH ACUTE" }, { char: "&ucirc;", desc: "LATIN SMALL LETTER U WITH CIRCUMFLEX" }, { char: "&uuml;", desc: "LATIN SMALL LETTER U WITH DIAERESIS" }, { char: "&yacute;", desc: "LATIN SMALL LETTER Y WITH ACUTE" }, { char: "&thorn;", desc: "LATIN SMALL LETTER THORN" }, { char: "&yuml;", desc: "LATIN SMALL LETTER Y WITH DIAERESIS" }] }, { title: "Greek", char: "&Alpha;", list: [{ char: "&Alpha;", desc: "GREEK CAPITAL LETTER ALPHA" }, { char: "&Beta;", desc: "GREEK CAPITAL LETTER BETA" }, { char: "&Gamma;", desc: "GREEK CAPITAL LETTER GAMMA" }, { char: "&Delta;", desc: "GREEK CAPITAL LETTER DELTA" }, { char: "&Epsilon;", desc: "GREEK CAPITAL LETTER EPSILON" }, { char: "&Zeta;", desc: "GREEK CAPITAL LETTER ZETA" }, { char: "&Eta;", desc: "GREEK CAPITAL LETTER ETA" }, { char: "&Theta;", desc: "GREEK CAPITAL LETTER THETA" }, { char: "&Iota;", desc: "GREEK CAPITAL LETTER IOTA" }, { char: "&Kappa;", desc: "GREEK CAPITAL LETTER KAPPA" }, { char: "&Lambda;", desc: "GREEK CAPITAL LETTER LAMBDA" }, { char: "&Mu;", desc: "GREEK CAPITAL LETTER MU" }, { char: "&Nu;", desc: "GREEK CAPITAL LETTER NU" }, { char: "&Xi;", desc: "GREEK CAPITAL LETTER XI" }, { char: "&Omicron;", desc: "GREEK CAPITAL LETTER OMICRON" }, { char: "&Pi;", desc: "GREEK CAPITAL LETTER PI" }, { char: "&Rho;", desc: "GREEK CAPITAL LETTER RHO" }, { char: "&Sigma;", desc: "GREEK CAPITAL LETTER SIGMA" }, { char: "&Tau;", desc: "GREEK CAPITAL LETTER TAU" }, { char: "&Upsilon;", desc: "GREEK CAPITAL LETTER UPSILON" }, { char: "&Phi;", desc: "GREEK CAPITAL LETTER PHI" }, { char: "&Chi;", desc: "GREEK CAPITAL LETTER CHI" }, { char: "&Psi;", desc: "GREEK CAPITAL LETTER PSI" }, { char: "&Omega;", desc: "GREEK CAPITAL LETTER OMEGA" }, { char: "&alpha;", desc: "GREEK SMALL LETTER ALPHA" }, { char: "&beta;", desc: "GREEK SMALL LETTER BETA" }, { char: "&gamma;", desc: "GREEK SMALL LETTER GAMMA" }, { char: "&delta;", desc: "GREEK SMALL LETTER DELTA" }, { char: "&epsilon;", desc: "GREEK SMALL LETTER EPSILON" }, { char: "&zeta;", desc: "GREEK SMALL LETTER ZETA" }, { char: "&eta;", desc: "GREEK SMALL LETTER ETA" }, { char: "&theta;", desc: "GREEK SMALL LETTER THETA" }, { char: "&iota;", desc: "GREEK SMALL LETTER IOTA" }, { char: "&kappa;", desc: "GREEK SMALL LETTER KAPPA" }, { char: "&lambda;", desc: "GREEK SMALL LETTER LAMBDA" }, { char: "&mu;", desc: "GREEK SMALL LETTER MU" }, { char: "&nu;", desc: "GREEK SMALL LETTER NU" }, { char: "&xi;", desc: "GREEK SMALL LETTER XI" }, { char: "&omicron;", desc: "GREEK SMALL LETTER OMICRON" }, { char: "&pi;", desc: "GREEK SMALL LETTER PI" }, { char: "&rho;", desc: "GREEK SMALL LETTER RHO" }, { char: "&sigmaf;", desc: "GREEK SMALL LETTER FINAL SIGMA" }, { char: "&sigma;", desc: "GREEK SMALL LETTER SIGMA" }, { char: "&tau;", desc: "GREEK SMALL LETTER TAU" }, { char: "&upsilon;", desc: "GREEK SMALL LETTER UPSILON" }, { char: "&phi;", desc: "GREEK SMALL LETTER PHI" }, { char: "&chi;", desc: "GREEK SMALL LETTER CHI" }, { char: "&psi;", desc: "GREEK SMALL LETTER PSI" }, { char: "&omega;", desc: "GREEK SMALL LETTER OMEGA" }, { char: "&thetasym;", desc: "GREEK THETA SYMBOL" }, { char: "&upsih;", desc: "GREEK UPSILON WITH HOOK SYMBOL" }, { char: "&straightphi;", desc: "GREEK PHI SYMBOL" }, { char: "&piv;", desc: "GREEK PI SYMBOL" }, { char: "&Gammad;", desc: "GREEK LETTER DIGAMMA" }, { char: "&gammad;", desc: "GREEK SMALL LETTER DIGAMMA" }, { char: "&varkappa;", desc: "GREEK KAPPA SYMBOL" }, { char: "&varrho;", desc: "GREEK RHO SYMBOL" }, { char: "&straightepsilon;", desc: "GREEK LUNATE EPSILON SYMBOL" }, { char: "&backepsilon;", desc: "GREEK REVERSED LUNATE EPSILON SYMBOL" }] }, { title: "Cyrillic", char: "&#x400", list: [{ char: "&#x400", desc: "CYRILLIC CAPITAL LETTER IE WITH GRAVE" }, { char: "&#x401", desc: "CYRILLIC CAPITAL LETTER IO" }, { char: "&#x402", desc: "CYRILLIC CAPITAL LETTER DJE" }, { char: "&#x403", desc: "CYRILLIC CAPITAL LETTER GJE" }, { char: "&#x404", desc: "CYRILLIC CAPITAL LETTER UKRAINIAN IE" }, { char: "&#x405", desc: "CYRILLIC CAPITAL LETTER DZE" }, { char: "&#x406", desc: "CYRILLIC CAPITAL LETTER BYELORUSSIAN-UKRAINIAN I" }, { char: "&#x407", desc: "CYRILLIC CAPITAL LETTER YI" }, { char: "&#x408", desc: "CYRILLIC CAPITAL LETTER JE" }, { char: "&#x409", desc: "CYRILLIC CAPITAL LETTER LJE" }, { char: "&#x40A", desc: "CYRILLIC CAPITAL LETTER NJE" }, { char: "&#x40B", desc: "CYRILLIC CAPITAL LETTER TSHE" }, { char: "&#x40C", desc: "CYRILLIC CAPITAL LETTER KJE" }, { char: "&#x40D", desc: "CYRILLIC CAPITAL LETTER I WITH GRAVE" }, { char: "&#x40E", desc: "CYRILLIC CAPITAL LETTER SHORT U" }, { char: "&#x40F", desc: "CYRILLIC CAPITAL LETTER DZHE" }, { char: "&#x410", desc: "CYRILLIC CAPITAL LETTER A" }, { char: "&#x411", desc: "CYRILLIC CAPITAL LETTER BE" }, { char: "&#x412", desc: "CYRILLIC CAPITAL LETTER VE" }, { char: "&#x413", desc: "CYRILLIC CAPITAL LETTER GHE" }, { char: "&#x414", desc: "CYRILLIC CAPITAL LETTER DE" }, { char: "&#x415", desc: "CYRILLIC CAPITAL LETTER IE" }, { char: "&#x416", desc: "CYRILLIC CAPITAL LETTER ZHE" }, { char: "&#x417", desc: "CYRILLIC CAPITAL LETTER ZE" }, { char: "&#x418", desc: "CYRILLIC CAPITAL LETTER I" }, { char: "&#x419", desc: "CYRILLIC CAPITAL LETTER SHORT I" }, { char: "&#x41A", desc: "CYRILLIC CAPITAL LETTER KA" }, { char: "&#x41B", desc: "CYRILLIC CAPITAL LETTER EL" }, { char: "&#x41C", desc: "CYRILLIC CAPITAL LETTER EM" }, { char: "&#x41D", desc: "CYRILLIC CAPITAL LETTER EN" }, { char: "&#x41E", desc: "CYRILLIC CAPITAL LETTER O" }, { char: "&#x41F", desc: "CYRILLIC CAPITAL LETTER PE" }, { char: "&#x420", desc: "CYRILLIC CAPITAL LETTER ER" }, { char: "&#x421", desc: "CYRILLIC CAPITAL LETTER ES" }, { char: "&#x422", desc: "CYRILLIC CAPITAL LETTER TE" }, { char: "&#x423", desc: "CYRILLIC CAPITAL LETTER U" }, { char: "&#x424", desc: "CYRILLIC CAPITAL LETTER EF" }, { char: "&#x425", desc: "CYRILLIC CAPITAL LETTER HA" }, { char: "&#x426", desc: "CYRILLIC CAPITAL LETTER TSE" }, { char: "&#x427", desc: "CYRILLIC CAPITAL LETTER CHE" }, { char: "&#x428", desc: "CYRILLIC CAPITAL LETTER SHA" }, { char: "&#x429", desc: "CYRILLIC CAPITAL LETTER SHCHA" }, { char: "&#x42A", desc: "CYRILLIC CAPITAL LETTER HARD SIGN" }, { char: "&#x42B", desc: "CYRILLIC CAPITAL LETTER YERU" }, { char: "&#x42C", desc: "CYRILLIC CAPITAL LETTER SOFT SIGN" }, { char: "&#x42D", desc: "CYRILLIC CAPITAL LETTER E" }, { char: "&#x42E", desc: "CYRILLIC CAPITAL LETTER YU" }, { char: "&#x42F", desc: "CYRILLIC CAPITAL LETTER YA" }, { char: "&#x430", desc: "CYRILLIC SMALL LETTER A" }, { char: "&#x431", desc: "CYRILLIC SMALL LETTER BE" }, { char: "&#x432", desc: "CYRILLIC SMALL LETTER VE" }, { char: "&#x433", desc: "CYRILLIC SMALL LETTER GHE" }, { char: "&#x434", desc: "CYRILLIC SMALL LETTER DE" }, { char: "&#x435", desc: "CYRILLIC SMALL LETTER IE" }, { char: "&#x436", desc: "CYRILLIC SMALL LETTER ZHE" }, { char: "&#x437", desc: "CYRILLIC SMALL LETTER ZE" }, { char: "&#x438", desc: "CYRILLIC SMALL LETTER I" }, { char: "&#x439", desc: "CYRILLIC SMALL LETTER SHORT I" }, { char: "&#x43A", desc: "CYRILLIC SMALL LETTER KA" }, { char: "&#x43B", desc: "CYRILLIC SMALL LETTER EL" }, { char: "&#x43C", desc: "CYRILLIC SMALL LETTER EM" }, { char: "&#x43D", desc: "CYRILLIC SMALL LETTER EN" }, { char: "&#x43E", desc: "CYRILLIC SMALL LETTER O" }, { char: "&#x43F", desc: "CYRILLIC SMALL LETTER PE" }, { char: "&#x440", desc: "CYRILLIC SMALL LETTER ER" }, { char: "&#x441", desc: "CYRILLIC SMALL LETTER ES" }, { char: "&#x442", desc: "CYRILLIC SMALL LETTER TE" }, { char: "&#x443", desc: "CYRILLIC SMALL LETTER U" }, { char: "&#x444", desc: "CYRILLIC SMALL LETTER EF" }, { char: "&#x445", desc: "CYRILLIC SMALL LETTER HA" }, { char: "&#x446", desc: "CYRILLIC SMALL LETTER TSE" }, { char: "&#x447", desc: "CYRILLIC SMALL LETTER CHE" }, { char: "&#x448", desc: "CYRILLIC SMALL LETTER SHA" }, { char: "&#x449", desc: "CYRILLIC SMALL LETTER SHCHA" }, { char: "&#x44A", desc: "CYRILLIC SMALL LETTER HARD SIGN" }, { char: "&#x44B", desc: "CYRILLIC SMALL LETTER YERU" }, { char: "&#x44C", desc: "CYRILLIC SMALL LETTER SOFT SIGN" }, { char: "&#x44D", desc: "CYRILLIC SMALL LETTER E" }, { char: "&#x44E", desc: "CYRILLIC SMALL LETTER YU" }, { char: "&#x44F", desc: "CYRILLIC SMALL LETTER YA" }, { char: "&#x450", desc: "CYRILLIC SMALL LETTER IE WITH GRAVE" }, { char: "&#x451", desc: "CYRILLIC SMALL LETTER IO" }, { char: "&#x452", desc: "CYRILLIC SMALL LETTER DJE" }, { char: "&#x453", desc: "CYRILLIC SMALL LETTER GJE" }, { char: "&#x454", desc: "CYRILLIC SMALL LETTER UKRAINIAN IE" }, { char: "&#x455", desc: "CYRILLIC SMALL LETTER DZE" }, { char: "&#x456", desc: "CYRILLIC SMALL LETTER BYELORUSSIAN-UKRAINIAN I" }, { char: "&#x457", desc: "CYRILLIC SMALL LETTER YI" }, { char: "&#x458", desc: "CYRILLIC SMALL LETTER JE" }, { char: "&#x459", desc: "CYRILLIC SMALL LETTER LJE" }, { char: "&#x45A", desc: "CYRILLIC SMALL LETTER NJE" }, { char: "&#x45B", desc: "CYRILLIC SMALL LETTER TSHE" }, { char: "&#x45C", desc: "CYRILLIC SMALL LETTER KJE" }, { char: "&#x45D", desc: "CYRILLIC SMALL LETTER I WITH GRAVE" }, { char: "&#x45E", desc: "CYRILLIC SMALL LETTER SHORT U" }, { char: "&#x45F", desc: "CYRILLIC SMALL LETTER DZHE" }] }, { title: "Punctuation", char: "&ndash;", list: [{ char: "&ndash;", desc: "EN DASH" }, { char: "&mdash;", desc: "EM DASH" }, { char: "&lsquo;", desc: "LEFT SINGLE QUOTATION MARK" }, { char: "&rsquo;", desc: "RIGHT SINGLE QUOTATION MARK" }, { char: "&sbquo;", desc: "SINGLE LOW-9 QUOTATION MARK" }, { char: "&ldquo;", desc: "LEFT DOUBLE QUOTATION MARK" }, { char: "&rdquo;", desc: "RIGHT DOUBLE QUOTATION MARK" }, { char: "&bdquo;", desc: "DOUBLE LOW-9 QUOTATION MARK" }, { char: "&dagger;", desc: "DAGGER" }, { char: "&Dagger;", desc: "DOUBLE DAGGER" }, { char: "&bull;", desc: "BULLET" }, { char: "&hellip;", desc: "HORIZONTAL ELLIPSIS" }, { char: "&permil;", desc: "PER MILLE SIGN" }, { char: "&prime;", desc: "PRIME" }, { char: "&Prime;", desc: "DOUBLE PRIME" }, { char: "&lsaquo;", desc: "SINGLE LEFT-POINTING ANGLE QUOTATION MARK" }, { char: "&rsaquo;", desc: "SINGLE RIGHT-POINTING ANGLE QUOTATION MARK" }, { char: "&oline;", desc: "OVERLINE" }, { char: "&frasl;", desc: "FRACTION SLASH" }] }, { title: "Currency", char: "&#x20A0", list: [{ char: "&#x20A0", desc: "EURO-CURRENCY SIGN" }, { char: "&#x20A1", desc: "COLON SIGN" }, { char: "&#x20A2", desc: "CRUZEIRO SIGN" }, { char: "&#x20A3", desc: "FRENCH FRANC SIGN" }, { char: "&#x20A4", desc: "LIRA SIGN" }, { char: "&#x20A5", desc: "MILL SIGN" }, { char: "&#x20A6", desc: "NAIRA SIGN" }, { char: "&#x20A7", desc: "PESETA SIGN" }, { char: "&#x20A8", desc: "RUPEE SIGN" }, { char: "&#x20A9", desc: "WON SIGN" }, { char: "&#x20AA", desc: "NEW SHEQEL SIGN" }, { char: "&#x20AB", desc: "DONG SIGN" }, { char: "&#x20AC", desc: "EURO SIGN" }, { char: "&#x20AD", desc: "KIP SIGN" }, { char: "&#x20AE", desc: "TUGRIK SIGN" }, { char: "&#x20AF", desc: "DRACHMA SIGN" }, { char: "&#x20B0", desc: "GERMAN PENNY SYMBOL" }, { char: "&#x20B1", desc: "PESO SIGN" }, { char: "&#x20B2", desc: "GUARANI SIGN" }, { char: "&#x20B3", desc: "AUSTRAL SIGN" }, { char: "&#x20B4", desc: "HRYVNIA SIGN" }, { char: "&#x20B5", desc: "CEDI SIGN" }, { char: "&#x20B6", desc: "LIVRE TOURNOIS SIGN" }, { char: "&#x20B7", desc: "SPESMILO SIGN" }, { char: "&#x20B8", desc: "TENGE SIGN" }, { char: "&#x20B9", desc: "INDIAN RUPEE SIGN" }] }, { title: "Arrows", char: "&#x2190", list: [{ char: "&#x2190", desc: "LEFTWARDS ARROW" }, { char: "&#x2191", desc: "UPWARDS ARROW" }, { char: "&#x2192", desc: "RIGHTWARDS ARROW" }, { char: "&#x2193", desc: "DOWNWARDS ARROW" }, { char: "&#x2194", desc: "LEFT RIGHT ARROW" }, { char: "&#x2195", desc: "UP DOWN ARROW" }, { char: "&#x2196", desc: "NORTH WEST ARROW" }, { char: "&#x2197", desc: "NORTH EAST ARROW" }, { char: "&#x2198", desc: "SOUTH EAST ARROW" }, { char: "&#x2199", desc: "SOUTH WEST ARROW" }, { char: "&#x219A", desc: "LEFTWARDS ARROW WITH STROKE" }, { char: "&#x219B", desc: "RIGHTWARDS ARROW WITH STROKE" }, { char: "&#x219C", desc: "LEFTWARDS WAVE ARROW" }, { char: "&#x219D", desc: "RIGHTWARDS WAVE ARROW" }, { char: "&#x219E", desc: "LEFTWARDS TWO HEADED ARROW" }, { char: "&#x219F", desc: "UPWARDS TWO HEADED ARROW" }, { char: "&#x21A0", desc: "RIGHTWARDS TWO HEADED ARROW" }, { char: "&#x21A1", desc: "DOWNWARDS TWO HEADED ARROW" }, { char: "&#x21A2", desc: "LEFTWARDS ARROW WITH TAIL" }, { char: "&#x21A3", desc: "RIGHTWARDS ARROW WITH TAIL" }, { char: "&#x21A4", desc: "LEFTWARDS ARROW FROM BAR" }, { char: "&#x21A5", desc: "UPWARDS ARROW FROM BAR" }, { char: "&#x21A6", desc: "RIGHTWARDS ARROW FROM BAR" }, { char: "&#x21A7", desc: "DOWNWARDS ARROW FROM BAR" }, { char: "&#x21A8", desc: "UP DOWN ARROW WITH BASE" }, { char: "&#x21A9", desc: "LEFTWARDS ARROW WITH HOOK" }, { char: "&#x21AA", desc: "RIGHTWARDS ARROW WITH HOOK" }, { char: "&#x21AB", desc: "LEFTWARDS ARROW WITH LOOP" }, { char: "&#x21AC", desc: "RIGHTWARDS ARROW WITH LOOP" }, { char: "&#x21AD", desc: "LEFT RIGHT WAVE ARROW" }, { char: "&#x21AE", desc: "LEFT RIGHT ARROW WITH STROKE" }, { char: "&#x21AF", desc: "DOWNWARDS ZIGZAG ARROW" }, { char: "&#x21B0", desc: "UPWARDS ARROW WITH TIP LEFTWARDS" }, { char: "&#x21B1", desc: "UPWARDS ARROW WITH TIP RIGHTWARDS" }, { char: "&#x21B2", desc: "DOWNWARDS ARROW WITH TIP LEFTWARDS" }, { char: "&#x21B3", desc: "DOWNWARDS ARROW WITH TIP RIGHTWARDS" }, { char: "&#x21B4", desc: "RIGHTWARDS ARROW WITH CORNER DOWNWARDS" }, { char: "&#x21B5", desc: "DOWNWARDS ARROW WITH CORNER LEFTWARDS" }, { char: "&#x21B6", desc: "ANTICLOCKWISE TOP SEMICIRCLE ARROW" }, { char: "&#x21B7", desc: "CLOCKWISE TOP SEMICIRCLE ARROW" }, { char: "&#x21B8", desc: "NORTH WEST ARROW TO LONG BAR" }, { char: "&#x21B9", desc: "LEFTWARDS ARROW TO BAR OVER RIGHTWARDS ARROW TO BAR" }, { char: "&#x21BA", desc: "ANTICLOCKWISE OPEN CIRCLE ARROW" }, { char: "&#x21BB", desc: "CLOCKWISE OPEN CIRCLE ARROW" }, { char: "&#x21BC", desc: "LEFTWARDS HARPOON WITH BARB UPWARDS" }, { char: "&#x21BD", desc: "LEFTWARDS HARPOON WITH BARB DOWNWARDS" }, { char: "&#x21BE", desc: "UPWARDS HARPOON WITH BARB RIGHTWARDS" }, { char: "&#x21BF", desc: "UPWARDS HARPOON WITH BARB LEFTWARDS" }, { char: "&#x21C0", desc: "RIGHTWARDS HARPOON WITH BARB UPWARDS" }, { char: "&#x21C1", desc: "RIGHTWARDS HARPOON WITH BARB DOWNWARDS" }, { char: "&#x21C2", desc: "DOWNWARDS HARPOON WITH BARB RIGHTWARDS" }, { char: "&#x21C3", desc: "DOWNWARDS HARPOON WITH BARB LEFTWARDS" }, { char: "&#x21C4", desc: "RIGHTWARDS ARROW OVER LEFTWARDS ARROW" }, { char: "&#x21C5", desc: "UPWARDS ARROW LEFTWARDS OF DOWNWARDS ARROW" }, { char: "&#x21C6", desc: "LEFTWARDS ARROW OVER RIGHTWARDS ARROW" }, { char: "&#x21C7", desc: "LEFTWARDS PAIRED ARROWS" }, { char: "&#x21C8", desc: "UPWARDS PAIRED ARROWS" }, { char: "&#x21C9", desc: "RIGHTWARDS PAIRED ARROWS" }, { char: "&#x21CA", desc: "DOWNWARDS PAIRED ARROWS" }, { char: "&#x21CB", desc: "LEFTWARDS HARPOON OVER RIGHTWARDS HARPOON" }, { char: "&#x21CC", desc: "RIGHTWARDS HARPOON OVER LEFTWARDS HARPOON" }, { char: "&#x21CD", desc: "LEFTWARDS DOUBLE ARROW WITH STROKE" }, { char: "&#x21CE", desc: "LEFT RIGHT DOUBLE ARROW WITH STROKE" }, { char: "&#x21CF", desc: "RIGHTWARDS DOUBLE ARROW WITH STROKE" }, { char: "&#x21D0", desc: "LEFTWARDS DOUBLE ARROW" }, { char: "&#x21D1", desc: "UPWARDS DOUBLE ARROW" }, { char: "&#x21D2", desc: "RIGHTWARDS DOUBLE ARROW" }, { char: "&#x21D3", desc: "DOWNWARDS DOUBLE ARROW" }, { char: "&#x21D4", desc: "LEFT RIGHT DOUBLE ARROW" }, { char: "&#x21D5", desc: "UP DOWN DOUBLE ARROW" }, { char: "&#x21D6", desc: "NORTH WEST DOUBLE ARROW" }, { char: "&#x21D7", desc: "NORTH EAST DOUBLE ARROW" }, { char: "&#x21D8", desc: "SOUTH EAST DOUBLE ARROW" }, { char: "&#x21D9", desc: "SOUTH WEST DOUBLE ARROW" }, { char: "&#x21DA", desc: "LEFTWARDS TRIPLE ARROW" }, { char: "&#x21DB", desc: "RIGHTWARDS TRIPLE ARROW" }, { char: "&#x21DC", desc: "LEFTWARDS SQUIGGLE ARROW" }, { char: "&#x21DD", desc: "RIGHTWARDS SQUIGGLE ARROW" }, { char: "&#x21DE", desc: "UPWARDS ARROW WITH DOUBLE STROKE" }, { char: "&#x21DF", desc: "DOWNWARDS ARROW WITH DOUBLE STROKE" }, { char: "&#x21E0", desc: "LEFTWARDS DASHED ARROW" }, { char: "&#x21E1", desc: "UPWARDS DASHED ARROW" }, { char: "&#x21E2", desc: "RIGHTWARDS DASHED ARROW" }, { char: "&#x21E3", desc: "DOWNWARDS DASHED ARROW" }, { char: "&#x21E4", desc: "LEFTWARDS ARROW TO BAR" }, { char: "&#x21E5", desc: "RIGHTWARDS ARROW TO BAR" }, { char: "&#x21E6", desc: "LEFTWARDS WHITE ARROW" }, { char: "&#x21E7", desc: "UPWARDS WHITE ARROW" }, { char: "&#x21E8", desc: "RIGHTWARDS WHITE ARROW" }, { char: "&#x21E9", desc: "DOWNWARDS WHITE ARROW" }, { char: "&#x21EA", desc: "UPWARDS WHITE ARROW FROM BAR" }, { char: "&#x21EB", desc: "UPWARDS WHITE ARROW ON PEDESTAL" }, { char: "&#x21EC", desc: "UPWARDS WHITE ARROW ON PEDESTAL WITH HORIZONTAL BAR" }, { char: "&#x21ED", desc: "UPWARDS WHITE ARROW ON PEDESTAL WITH VERTICAL BAR" }, { char: "&#x21EE", desc: "UPWARDS WHITE DOUBLE ARROW" }, { char: "&#x21EF", desc: "UPWARDS WHITE DOUBLE ARROW ON PEDESTAL" }, { char: "&#x21F0", desc: "RIGHTWARDS WHITE ARROW FROM WALL" }, { char: "&#x21F1", desc: "NORTH WEST ARROW TO CORNER" }, { char: "&#x21F2", desc: "SOUTH EAST ARROW TO CORNER" }, { char: "&#x21F3", desc: "UP DOWN WHITE ARROW" }, { char: "&#x21F4", desc: "RIGHT ARROW WITH SMALL CIRCLE" }, { char: "&#x21F5", desc: "DOWNWARDS ARROW LEFTWARDS OF UPWARDS ARROW" }, { char: "&#x21F6", desc: "THREE RIGHTWARDS ARROWS" }, { char: "&#x21F7", desc: "LEFTWARDS ARROW WITH VERTICAL STROKE" }, { char: "&#x21F8", desc: "RIGHTWARDS ARROW WITH VERTICAL STROKE" }, { char: "&#x21F9", desc: "LEFT RIGHT ARROW WITH VERTICAL STROKE" }, { char: "&#x21FA", desc: "LEFTWARDS ARROW WITH DOUBLE VERTICAL STROKE" }, { char: "&#x21FB", desc: "RIGHTWARDS ARROW WITH DOUBLE VERTICAL STROKE" }, { char: "&#x21FC", desc: "LEFT RIGHT ARROW WITH DOUBLE VERTICAL STROKE" }, { char: "&#x21FD", desc: "LEFTWARDS OPEN-HEADED ARROW" }, { char: "&#x21FE", desc: "RIGHTWARDS OPEN-HEADED ARROW" }, { char: "&#x21FF", desc: "LEFT RIGHT OPEN-HEADED ARROW" }] }, { title: "Math", char: "&forall;", list: [{ char: "&forall;", desc: "FOR ALL" }, { char: "&part;", desc: "PARTIAL DIFFERENTIAL" }, { char: "&exist;", desc: "THERE EXISTS" }, { char: "&empty;", desc: "EMPTY SET" }, { char: "&nabla;", desc: "NABLA" }, { char: "&isin;", desc: "ELEMENT OF" }, { char: "&notin;", desc: "NOT AN ELEMENT OF" }, { char: "&ni;", desc: "CONTAINS AS MEMBER" }, { char: "&prod;", desc: "N-ARY PRODUCT" }, { char: "&sum;", desc: "N-ARY SUMMATION" }, { char: "&minus;", desc: "MINUS SIGN" }, { char: "&lowast;", desc: "ASTERISK OPERATOR" }, { char: "&radic;", desc: "SQUARE ROOT" }, { char: "&prop;", desc: "PROPORTIONAL TO" }, { char: "&infin;", desc: "INFINITY" }, { char: "&ang;", desc: "ANGLE" }, { char: "&and;", desc: "LOGICAL AND" }, { char: "&or;", desc: "LOGICAL OR" }, { char: "&cap;", desc: "INTERSECTION" }, { char: "&cup;", desc: "UNION" }, { char: "&int;", desc: "INTEGRAL" }, { char: "&there4;", desc: "THEREFORE" }, { char: "&sim;", desc: "TILDE OPERATOR" }, { char: "&cong;", desc: "APPROXIMATELY EQUAL TO" }, { char: "&asymp;", desc: "ALMOST EQUAL TO" }, { char: "&ne;", desc: "NOT EQUAL TO" }, { char: "&equiv;", desc: "IDENTICAL TO" }, { char: "&le;", desc: "LESS-THAN OR EQUAL TO" }, { char: "&ge;", desc: "GREATER-THAN OR EQUAL TO" }, { char: "&sub;", desc: "SUBSET OF" }, { char: "&sup;", desc: "SUPERSET OF" }, { char: "&nsub;", desc: "NOT A SUBSET OF" }, { char: "&sube;", desc: "SUBSET OF OR EQUAL TO" }, { char: "&supe;", desc: "SUPERSET OF OR EQUAL TO" }, { char: "&oplus;", desc: "CIRCLED PLUS" }, { char: "&otimes;", desc: "CIRCLED TIMES" }, { char: "&perp;", desc: "UP TACK" }] }, { title: "Misc", char: "&spades;", list: [{ char: "&spades;", desc: "BLACK SPADE SUIT" }, { char: "&clubs;", desc: "BLACK CLUB SUIT" }, { char: "&hearts;", desc: "BLACK HEART SUIT" }, { char: "&diams;", desc: "BLACK DIAMOND SUIT" }, { char: "&#x2669", desc: "QUARTER NOTE" }, { char: "&#x266A", desc: "EIGHTH NOTE" }, { char: "&#x266B", desc: "BEAMED EIGHTH NOTES" }, { char: "&#x266C", desc: "BEAMED SIXTEENTH NOTES" }, { char: "&#x266D", desc: "MUSIC FLAT SIGN" }, { char: "&#x266E", desc: "MUSIC NATURAL SIGN" }, { char: "&#x2600", desc: "BLACK SUN WITH RAYS" }, { char: "&#x2601", desc: "CLOUD" }, { char: "&#x2602", desc: "UMBRELLA" }, { char: "&#x2603", desc: "SNOWMAN" }, { char: "&#x2615", desc: "HOT BEVERAGE" }, { char: "&#x2618", desc: "SHAMROCK" }, { char: "&#x262F", desc: "YIN YANG" }, { char: "&#x2714", desc: "HEAVY CHECK MARK" }, { char: "&#x2716", desc: "HEAVY MULTIPLICATION X" }, { char: "&#x2744", desc: "SNOWFLAKE" }, { char: "&#x275B", desc: "HEAVY SINGLE TURNED COMMA QUOTATION MARK ORNAMENT" }, { char: "&#x275C", desc: "HEAVY SINGLE COMMA QUOTATION MARK ORNAMENT" }, { char: "&#x275D", desc: "HEAVY DOUBLE TURNED COMMA QUOTATION MARK ORNAMENT" }, { char: "&#x275E", desc: "HEAVY DOUBLE COMMA QUOTATION MARK ORNAMENT" }, { char: "&#x2764", desc: "HEAVY BLACK HEART" }] }], specialCharButtons: ["specialCharBack", "|"] }), Object.assign(o.POPUP_TEMPLATES, { specialCharacters: "[_BUTTONS_][_CUSTOM_LAYER_]" }), o.PLUGINS.specialCharacters = function(t) {
      var n = t.$, f = t.opts.specialCharactersSets[0], G = t.opts.specialCharactersSets, Y = "";
      function ce() {
        return `
        <div class="fr-buttons fr-tabs fr-tabs-scroll">
          `.concat(function(ee, w) {
          var oe = "";
          return ee.forEach(function(pe) {
            var te = { elementClass: pe.title === w.title ? "fr-active fr-active-tab" : "", title: pe.title, dataParam1: pe.title, desc: pe.char };
            oe += '<button class="fr-command fr-btn fr-special-character-category '.concat(te.elementClass, '" title="').concat(te.title, '" data-cmd="setSpecialCharacterCategory" data-param1="').concat(te.dataParam1, '"><span>').concat(te.desc, "</span></button>");
          }), oe;
        }(G, f), `
        </div>
        <div class="fr-icon-container fr-sc-container">
          `).concat(function(ee) {
          var w = "";
          return ee.list.forEach(function(oe) {
            var pe = { dataParam1: oe.char, title: oe.desc, splCharValue: oe.char };
            w += `<span class="fr-command fr-special-character fr-icon" role="button" 
      data-cmd="insertSpecialCharacter" data-param1="`.concat(pe.dataParam1, `" 
      title="`).concat(pe.title, '">').concat(pe.splCharValue, "</span>");
          }), w;
        }(f), `
        </div>`);
      }
      return { setSpecialCharacterCategory: function(ee) {
        f = G.filter(function(w) {
          return w.title === ee;
        })[0], function() {
          t.popups.get("specialCharacters").html(Y + ce());
        }();
      }, showSpecialCharsPopup: function() {
        var ee = t.popups.get("specialCharacters");
        if (ee || (ee = function() {
          t.opts.toolbarInline && 0 < t.opts.specialCharButtons.length && (Y = '<div class="fr-buttons fr-tabs">'.concat(t.button.buildList(t.opts.specialCharButtons), "</div>"));
          var F = { buttons: Y, custom_layer: ce() }, P = t.popups.create("specialCharacters", F);
          return function(le) {
            t.events.on("popup.tab", function(he) {
              var ge = n(he.currentTarget);
              if (!t.popups.isVisible("specialCharacters") || !ge.is("span, a"))
                return !0;
              var e, r, s, d = he.which;
              if (o.KEYCODE.TAB == d) {
                if (ge.is("span.fr-icon") && he.shiftKey || ge.is("a") && !he.shiftKey) {
                  var u = le.find(".fr-buttons");
                  e = !t.accessibility.focusToolbar(u, !!he.shiftKey);
                }
                if (e !== !1) {
                  var b = le.find("span.fr-icon:focus").first().concat(le.findVisible(" span.fr-icon").first().concat(le.find("a")));
                  ge.is("span.fr-icon") && (b = b.not("span.fr-icon:not(:focus)")), r = b.index(ge), r = he.shiftKey ? ((r - 1) % b.length + b.length) % b.length : (r + 1) % b.length, s = b.get(r), t.events.disableBlur(), s.focus(), e = !1;
                }
              } else if (o.KEYCODE.ARROW_UP == d || o.KEYCODE.ARROW_DOWN == d || o.KEYCODE.ARROW_LEFT == d || o.KEYCODE.ARROW_RIGHT == d) {
                if (ge.is("span.fr-icon")) {
                  var E = ge.parent().find("span.fr-icon");
                  r = E.index(ge);
                  var g = 11, m = Math.floor(E.length / g), C = r % g, O = Math.floor(r / g), U = O * g + C, y = m * g;
                  o.KEYCODE.ARROW_UP == d ? U = ((U - g) % y + y) % y : o.KEYCODE.ARROW_DOWN == d ? U = (U + g) % y : o.KEYCODE.ARROW_LEFT == d ? U = ((U - 1) % y + y) % y : o.KEYCODE.ARROW_RIGHT == d && (U = (U + 1) % y), s = n(E.get(U)), t.events.disableBlur(), s.focus(), e = !1;
                }
              } else
                o.KEYCODE.ENTER == d && (ge.is("a") ? ge[0].click() : t.button.exec(ge), e = !1);
              return e === !1 && (he.preventDefault(), he.stopPropagation()), e;
            }, !0);
          }(P), P;
        }()), !ee.hasClass("fr-active")) {
          t.popups.refresh("specialCharacters"), t.popups.setContainer("specialCharacters", t.$tb);
          var w = t.$tb.find('.fr-command[data-cmd="specialCharacters"]'), oe = t.button.getPosition(w), pe = oe.left, te = oe.top;
          t.popups.show("specialCharacters", pe, te, outerHeight);
        }
      }, back: function() {
        t.popups.hide("specialCharacters"), t.toolbar.showInline();
      } };
    }, o.DefineIcon("specialCharacters", { NAME: "dollar-sign", SVG_KEY: "symbols" }), o.RegisterCommand("specialCharacters", { title: "Special Characters", icon: "specialCharacters", undo: !1, focus: !1, popup: !0, refreshAfterCallback: !1, plugin: "specialCharacters", showOnMobile: !0, callback: function() {
      this.popups.isVisible("specialCharacters") ? (this.$el.find(".fr-marker") && (this.events.disableBlur(), this.selection.restore()), this.popups.hide("specialCharacters")) : this.specialCharacters.showSpecialCharsPopup();
    } }), o.RegisterCommand("insertSpecialCharacter", { callback: function(t, n) {
      this.undo.saveStep(), this.html.insert(n), this.undo.saveStep(), this.popups.hide("specialCharacters");
    } }), o.RegisterCommand("setSpecialCharacterCategory", { undo: !1, focus: !1, callback: function(t, n) {
      this.specialCharacters.setSpecialCharacterCategory(n);
    } }), o.DefineIcon("specialCharBack", { NAME: "arrow-left", SVG_KEY: "back" }), o.RegisterCommand("specialCharBack", { title: "Back", undo: !1, focus: !1, back: !0, refreshAfterCallback: !1, callback: function() {
      this.specialCharacters.back();
    } });
  });
})();
/*!
 * froala_editor v3.1.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
(function(Ie, Le) {
  (function(o, t) {
    t($e());
  })(ke, function(o) {
    o = o && o.hasOwnProperty("default") ? o.default : o, Object.assign(o.POPUP_TEMPLATES, { "table.insert": "[_BUTTONS_][_ROWS_COLUMNS_]", "table.edit": "[_BUTTONS_]", "table.colors": "[_BUTTONS_][_COLORS_][_CUSTOM_COLOR_]" }), Object.assign(o.DEFAULTS, { tableInsertMaxSize: 10, tableEditButtons: ["tableHeader", "tableRemove", "tableRows", "tableColumns", "tableStyle", "-", "tableCells", "tableCellBackground", "tableCellVerticalAlign", "tableCellHorizontalAlign", "tableCellStyle"], tableInsertButtons: ["tableBack", "|"], tableResizer: !0, tableDefaultWidth: "100%", tableResizerOffset: 5, tableResizingLimit: 30, tableColorsButtons: ["tableBack", "|"], tableColors: ["#61BD6D", "#1ABC9C", "#54ACD2", "#2C82C9", "#9365B8", "#475577", "#CCCCCC", "#41A85F", "#00A885", "#3D8EB9", "#2969B0", "#553982", "#28324E", "#000000", "#F7DA64", "#FBA026", "#EB6B56", "#E25041", "#A38F84", "#EFEFEF", "#FFFFFF", "#FAC51C", "#F37934", "#D14841", "#B8312F", "#7C706B", "#D1D5D8", "REMOVE"], tableColorsStep: 7, tableCellStyles: { "fr-highlighted": "Highlighted", "fr-thick": "Thick" }, tableStyles: { "fr-dashed-borders": "Dashed Borders", "fr-alternate-rows": "Alternate Rows" }, tableCellMultipleStyles: !0, tableMultipleStyles: !0, tableInsertHelper: !0, tableInsertHelperOffset: 15 }), o.PLUGINS.table = function(t) {
      var n, f, G, Y, ce, ue, ee, w = t.$;
      function oe() {
        var T = d();
        if (T) {
          var S = t.popups.get("table.edit");
          if (S || (S = P()), S) {
            t.popups.setContainer("table.edit", t.$sc);
            var L = O(T), R = L.left + (L.right - L.left) / 2, K = L.bottom;
            t.popups.show("table.edit", R, K, L.bottom - L.top, !0), t.edit.isDisabled() && (1 < se().length && t.toolbar.disable(), t.$el.removeClass("fr-no-selection"), t.edit.on(), t.button.bulkRefresh(), t.selection.setAtEnd(t.$el.find(".fr-selected-cell").last().get(0)), t.selection.restore());
          }
        }
      }
      function pe() {
        var T = d();
        if (T) {
          var S = t.popups.get("table.colors");
          S || (S = function() {
            var j = "";
            0 < t.opts.tableColorsButtons.length && (j = '<div class="fr-buttons fr-tabs">'.concat(t.button.buildList(t.opts.tableColorsButtons), "</div>"));
            var X = "";
            t.opts.colorsHEXInput && (X = '<div class="fr-color-hex-layer fr-table-colors-hex-layer fr-active fr-layer" id="fr-table-colors-hex-layer-'.concat(t.id, '"><div class="fr-input-line"><input maxlength="7" id="fr-table-colors-hex-layer-text-').concat(t.id, '" type="text" placeholder="').concat(t.language.translate("HEX Color"), '" tabIndex="1" aria-required="true"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="tableCellBackgroundCustomColor" tabIndex="2" role="button">').concat(t.language.translate("OK"), "</button></div></div>"));
            var fe = { buttons: j, colors: function() {
              for (var Ee = '<div class="fr-color-set fr-table-colors">', be = 0; be < t.opts.tableColors.length; be++)
                be !== 0 && be % t.opts.tableColorsStep == 0 && (Ee += "<br>"), t.opts.tableColors[be] != "REMOVE" ? Ee += '<span class="fr-command" style="background: '.concat(t.opts.tableColors[be], ';" tabIndex="-1" role="button" data-cmd="tableCellBackgroundColor" data-param1="').concat(t.opts.tableColors[be], '"><span class="fr-sr-only">').concat(t.language.translate("Color"), " ").concat(t.opts.tableColors[be], "&nbsp;&nbsp;&nbsp;</span></span>") : Ee += '<span class="fr-command" data-cmd="tableCellBackgroundColor" tabIndex="-1" role="button" data-param1="REMOVE" title="'.concat(t.language.translate("Clear Formatting"), '">').concat(t.icon.create("tableColorRemove"), '<span class="fr-sr-only">').concat(t.language.translate("Clear Formatting"), "</span></span>");
              return Ee += "</div>";
            }(), custom_color: X }, ne = t.popups.create("table.colors", fe);
            return t.events.$on(t.$wp, "scroll.table-colors", function() {
              t.popups.isVisible("table.colors") && pe();
            }), function(Ee) {
              t.events.on("popup.tab", function(be) {
                var Ae = w(be.currentTarget);
                if (!t.popups.isVisible("table.colors") || !Ae.is("span"))
                  return !0;
                var Te = be.which, xe = !0;
                if (o.KEYCODE.TAB == Te) {
                  var Oe = Ee.find(".fr-buttons");
                  xe = !t.accessibility.focusToolbar(Oe, !!be.shiftKey);
                } else if (o.KEYCODE.ARROW_UP == Te || o.KEYCODE.ARROW_DOWN == Te || o.KEYCODE.ARROW_LEFT == Te || o.KEYCODE.ARROW_RIGHT == Te) {
                  var De = Ae.parent().find("span.fr-command"), Re = De.index(Ae), Se = t.opts.colorsStep, Ne = Math.floor(De.length / Se), $ = Re % Se, z = Math.floor(Re / Se), J = z * Se + $, de = Ne * Se;
                  o.KEYCODE.ARROW_UP == Te ? J = ((J - Se) % de + de) % de : o.KEYCODE.ARROW_DOWN == Te ? J = (J + Se) % de : o.KEYCODE.ARROW_LEFT == Te ? J = ((J - 1) % de + de) % de : o.KEYCODE.ARROW_RIGHT == Te && (J = (J + 1) % de);
                  var me = w(De.get(J));
                  t.events.disableBlur(), me.focus(), xe = !1;
                } else
                  o.KEYCODE.ENTER == Te && (t.button.exec(Ae), xe = !1);
                return xe === !1 && (be.preventDefault(), be.stopPropagation()), xe;
              }, !0);
            }(ne), ne;
          }()), t.popups.setContainer("table.colors", t.$sc);
          var L = O(T), R = (L.left + L.right) / 2, K = L.bottom;
          (function() {
            var j = t.popups.get("table.colors"), X = t.$el.find(".fr-selected-cell").first(), fe = t.helpers.RGBToHex(X.css("background-color")), ne = j.find(".fr-table-colors-hex-layer input");
            j.find(".fr-selected-color").removeClass("fr-selected-color fr-active-item"), j.find('span[data-param1="'.concat(fe, '"]')).addClass("fr-selected-color fr-active-item"), ne.val(fe).trigger("change");
          })(), t.popups.show("table.colors", R, K, L.bottom - L.top, !0);
        }
      }
      function te() {
        se().length === 0 && t.toolbar.enable();
      }
      function k(T) {
        if (T)
          return t.popups.onHide("table.insert", function() {
            t.popups.get("table.insert").find('.fr-table-size .fr-select-table-size > span[data-row="1"][data-col="1"]').trigger("mouseover");
          }), !0;
        var S = "";
        0 < t.opts.tableInsertButtons.length && (S = '<div class="fr-buttons fr-tabs">'.concat(t.button.buildList(t.opts.tableInsertButtons), "</div>"));
        var L = { buttons: S, rows_columns: function() {
          for (var V = '<div class="fr-table-size"><div class="fr-table-size-info">1 &times; 1</div><div class="fr-select-table-size">', j = 1; j <= t.opts.tableInsertMaxSize; j++) {
            for (var X = 1; X <= t.opts.tableInsertMaxSize; X++) {
              var fe = "inline-block";
              2 < j && !t.helpers.isMobile() && (fe = "none");
              var ne = "fr-table-cell ";
              j == 1 && X == 1 && (ne += " hover"), V += '<span class="fr-command '.concat(ne, '" tabIndex="-1" data-cmd="tableInsert" data-row="').concat(j, '" data-col="').concat(X, '" data-param1="').concat(j, '" data-param2="').concat(X, '" style="display: ').concat(fe, ';" role="button"><span></span><span class="fr-sr-only">').concat(j, " &times; ").concat(X, "&nbsp;&nbsp;&nbsp;</span></span>");
            }
            V += '<div class="new-line"></div>';
          }
          return V += "</div></div>";
        }() }, R = t.popups.create("table.insert", L);
        return t.events.$on(R, "mouseover", ".fr-table-size .fr-select-table-size .fr-table-cell", function(K) {
          F(w(K.currentTarget));
        }, !0), function(V) {
          t.events.$on(V, "focus", "[tabIndex]", function(j) {
            var X = w(j.currentTarget);
            F(X);
          }), t.events.on("popup.tab", function(j) {
            var X = w(j.currentTarget);
            if (!t.popups.isVisible("table.insert") || !X.is("span, a"))
              return !0;
            var fe, ne = j.which;
            if (o.KEYCODE.ARROW_UP == ne || o.KEYCODE.ARROW_DOWN == ne || o.KEYCODE.ARROW_LEFT == ne || o.KEYCODE.ARROW_RIGHT == ne) {
              if (X.is("span.fr-table-cell")) {
                var ve = X.parent().find("span.fr-table-cell"), Ee = ve.index(X), be = t.opts.tableInsertMaxSize, Ae = Ee % be, Te = Math.floor(Ee / be);
                o.KEYCODE.ARROW_UP == ne ? Te = Math.max(0, Te - 1) : o.KEYCODE.ARROW_DOWN == ne ? Te = Math.min(t.opts.tableInsertMaxSize - 1, Te + 1) : o.KEYCODE.ARROW_LEFT == ne ? Ae = Math.max(0, Ae - 1) : o.KEYCODE.ARROW_RIGHT == ne && (Ae = Math.min(t.opts.tableInsertMaxSize - 1, Ae + 1));
                var xe = Te * be + Ae, Oe = w(ve.get(xe));
                F(Oe), t.events.disableBlur(), Oe.focus(), fe = !1;
              }
            } else
              o.KEYCODE.ENTER == ne && (t.button.exec(X), fe = !1);
            return fe === !1 && (j.preventDefault(), j.stopPropagation()), fe;
          }, !0);
        }(R), R;
      }
      function F(T) {
        var S = T.data("row");
        S !== null && (S = parseInt(S));
        var L = T.data("col");
        L !== null && (L = parseInt(L));
        var R = T.parent();
        R.siblings(".fr-table-size-info").html("".concat(S, " &times; ").concat(L)), R.find("> span").removeClass("hover fr-active-item");
        for (var K = 1; K <= t.opts.tableInsertMaxSize; K++)
          for (var V = 0; V <= t.opts.tableInsertMaxSize; V++) {
            var j = R.find('> span[data-row="'.concat(K, '"][data-col="').concat(V, '"]'));
            K <= S && V <= L ? j.addClass("hover") : K <= S + 1 || K <= 2 && !t.helpers.isMobile() ? j.css("display", "inline-block") : 2 < K && !t.helpers.isMobile() && j.css("display", "none");
          }
        T.addClass("fr-active-item");
      }
      function P(T) {
        if (T)
          return t.popups.onHide("table.edit", te), !0;
        if (0 < t.opts.tableEditButtons.length) {
          var S = { buttons: '<div class="fr-buttons">'.concat(t.button.buildList(t.opts.tableEditButtons), "</div>") }, L = t.popups.create("table.edit", S);
          return t.events.$on(t.$wp, "scroll.table-edit", function() {
            t.popups.isVisible("table.edit") && oe();
          }), L;
        }
        return !1;
      }
      function Z() {
        if (0 < se().length) {
          var T = H();
          t.selection.setBefore(T.get(0)) || t.selection.setAfter(T.get(0)), t.selection.restore(), t.popups.hide("table.edit"), T.remove(), t.toolbar.enable();
        }
      }
      function le(T) {
        var S = H();
        if (0 < S.length) {
          if (0 < t.$el.find("th.fr-selected-cell").length && T == "above")
            return;
          var L, R, K, V = d(), j = C(V);
          if (j == null)
            return;
          R = T == "above" ? j.min_i : j.max_i;
          var X = "<tr>";
          for (L = 0; L < V[R].length; L++)
            if (T == "below" && R < V.length - 1 && V[R][L] == V[R + 1][L] || T == "above" && 0 < R && V[R][L] == V[R - 1][L]) {
              if (L === 0 || 0 < L && V[R][L] != V[R][L - 1]) {
                var fe = w(V[R][L]);
                fe.attr("rowspan", parseInt(fe.attr("rowspan"), 10) + 1);
              }
            } else
              X += '<td style="' + w(V[R][L]).attr("style") + '" ><br></td>';
          X += "</tr>", K = 0 < t.$el.find("th.fr-selected-cell").length && T == "below" ? w(S.find("tbody").not(S.find("> table tbody"))) : w(S.find("tr").not(S.find("> table tr")).get(R)), T == "below" ? K.attr("tagName") == "TBODY" ? K.prepend(X) : K[0].parentNode && K[0].insertAdjacentHTML("afterend", X) : T == "above" && (K.before(X), t.popups.isVisible("table.edit") && oe());
        }
      }
      function he(T, S, L) {
        var R, K, V, j, X, fe = 0, ne = d(L);
        if (T < (S = Math.min(S, ne[0].length - 1))) {
          for (K = T; K <= S; K++)
            if (!(T < K && ne[0][K] == ne[0][K - 1]) && 1 < (j = Math.min(parseInt(ne[0][K].getAttribute("colspan"), 10) || 1, S - T + 1)) && ne[0][K] == ne[0][K + 1]) {
              for (fe = j - 1, R = 1; R < ne.length; R++)
                if (ne[R][K] != ne[R - 1][K]) {
                  for (V = K; V < K + j; V++)
                    if (1 < (X = parseInt(ne[R][V].getAttribute("colspan"), 10) || 1) && ne[R][V] == ne[R][V + 1])
                      V += fe = Math.min(fe, X - 1);
                    else if (!(fe = Math.max(0, fe - 1)))
                      break;
                  if (!fe)
                    break;
                }
            }
        }
        fe && e(ne, fe, "colspan", 0, ne.length - 1, T, S);
      }
      function ge(T, S, L) {
        var R, K, V, j, X, fe = 0, ne = d(L);
        if (T < (S = Math.min(S, ne.length - 1))) {
          for (R = T; R <= S; R++)
            if (!(T < R && ne[R][0] == ne[R - 1][0]) && 1 < (j = Math.min(parseInt(ne[R][0].getAttribute("rowspan"), 10) || 1, S - T + 1)) && ne[R][0] == ne[R + 1][0]) {
              for (fe = j - 1, K = 1; K < ne[0].length; K++)
                if (ne[R][K] != ne[R][K - 1]) {
                  for (V = R; V < R + j; V++)
                    if (1 < (X = parseInt(ne[V][K].getAttribute("rowspan"), 10) || 1) && ne[V][K] == ne[V + 1][K])
                      V += fe = Math.min(fe, X - 1);
                    else if (!(fe = Math.max(0, fe - 1)))
                      break;
                  if (!fe)
                    break;
                }
            }
        }
        fe && e(ne, fe, "rowspan", T, S, 0, ne[0].length - 1);
      }
      function e(T, S, L, R, K, V, j) {
        var X, fe, ne;
        for (X = R; X <= K; X++)
          for (fe = V; fe <= j; fe++)
            R < X && T[X][fe] == T[X - 1][fe] || V < fe && T[X][fe] == T[X][fe - 1] || 1 < (ne = parseInt(T[X][fe].getAttribute(L), 10) || 1) && (1 < ne - S ? T[X][fe].setAttribute(L, ne - S) : T[X][fe].removeAttribute(L));
      }
      function r(T, S, L, R, K) {
        ge(T, S, K), he(L, R, K);
      }
      function s(T) {
        var S = t.$el.find(".fr-selected-cell");
        T != "REMOVE" ? S.css("background-color", t.helpers.HEXtoRGB(T)) : S.css("background-color", ""), oe();
      }
      function d(T) {
        var S = [];
        return (T = T || null) == null && 0 < se().length && (T = H()), T && T.findVisible("tr").not(T.find("> table tr")).each(function(L, R) {
          var K = w(R), V = 0;
          K.find("> th, > td").each(function(j, X) {
            for (var fe = w(X), ne = parseInt(fe.attr("colspan"), 10) || 1, ve = parseInt(fe.attr("rowspan"), 10) || 1, Ee = L; Ee < L + ve; Ee++)
              for (var be = V; be < V + ne; be++)
                S[Ee] || (S[Ee] = []), S[Ee][be] ? V++ : S[Ee][be] = X;
            V += ne;
          });
        }), S;
      }
      function u(T, S) {
        for (var L = 0; L < S.length; L++)
          for (var R = 0; R < S[L].length; R++)
            if (S[L][R] == T)
              return { row: L, col: R };
      }
      function b(T, S, L) {
        for (var R = T + 1, K = S + 1; R < L.length; ) {
          if (L[R][S] != L[T][S]) {
            R--;
            break;
          }
          R++;
        }
        for (R == L.length && R--; K < L[T].length; ) {
          if (L[T][K] != L[T][S]) {
            K--;
            break;
          }
          K++;
        }
        return K == L[T].length && K--, { row: R, col: K };
      }
      function E() {
        t.el.querySelector(".fr-cell-fixed") && t.el.querySelector(".fr-cell-fixed").classList.remove("fr-cell-fixed"), t.el.querySelector(".fr-cell-handler") && t.el.querySelector(".fr-cell-handler").classList.remove("fr-cell-handler");
      }
      function g() {
        var T = t.$el.find(".fr-selected-cell");
        0 < T.length && T.each(function() {
          var S = w(this);
          S.removeClass("fr-selected-cell"), S.attr("class") === "" && S.removeAttr("class");
        }), E();
      }
      function m() {
        t.events.disableBlur(), t.selection.clear(), t.$el.addClass("fr-no-selection"), t.$el.blur(), t.events.enableBlur();
      }
      function C(T) {
        var S = t.$el.find(".fr-selected-cell");
        if (0 < S.length) {
          var L, R = T.length, K = 0, V = T[0].length, j = 0;
          for (L = 0; L < S.length; L++) {
            var X = u(S[L], T), fe = b(X.row, X.col, T);
            R = Math.min(X.row, R), K = Math.max(fe.row, K), V = Math.min(X.col, V), j = Math.max(fe.col, j);
          }
          return { min_i: R, max_i: K, min_j: V, max_j: j };
        }
        return null;
      }
      function O(T) {
        var S = C(T);
        if (S != null) {
          var L = w(T[S.min_i][S.min_j]), R = w(T[S.min_i][S.max_j]), K = w(T[S.max_i][S.min_j]);
          return { left: L.length && L.offset().left, right: R.length && R.offset().left + R.outerWidth(), top: L.length && L.offset().top, bottom: K.length && K.offset().top + K.outerHeight() };
        }
      }
      function U(T, S) {
        if (w(T).is(S))
          g(), w(T).addClass("fr-selected-cell");
        else {
          m(), t.edit.off();
          var L = d(), R = u(T, L), K = u(S, L), V = function fe(ne, ve, Ee, be, Ae) {
            var Te, xe, Oe, De, Re = ne, Se = ve, Ne = Ee, $ = be;
            for (Te = Re; Te <= Se; Te++)
              (1 < (parseInt(w(Ae[Te][Ne]).attr("rowspan"), 10) || 1) || 1 < (parseInt(w(Ae[Te][Ne]).attr("colspan"), 10) || 1)) && (De = b((Oe = u(Ae[Te][Ne], Ae)).row, Oe.col, Ae), Re = Math.min(Oe.row, Re), Se = Math.max(De.row, Se), Ne = Math.min(Oe.col, Ne), $ = Math.max(De.col, $)), (1 < (parseInt(w(Ae[Te][$]).attr("rowspan"), 10) || 1) || 1 < (parseInt(w(Ae[Te][$]).attr("colspan"), 10) || 1)) && (De = b((Oe = u(Ae[Te][$], Ae)).row, Oe.col, Ae), Re = Math.min(Oe.row, Re), Se = Math.max(De.row, Se), Ne = Math.min(Oe.col, Ne), $ = Math.max(De.col, $));
            for (xe = Ne; xe <= $; xe++)
              (1 < (parseInt(w(Ae[Re][xe]).attr("rowspan"), 10) || 1) || 1 < (parseInt(w(Ae[Re][xe]).attr("colspan"), 10) || 1)) && (De = b((Oe = u(Ae[Re][xe], Ae)).row, Oe.col, Ae), Re = Math.min(Oe.row, Re), Se = Math.max(De.row, Se), Ne = Math.min(Oe.col, Ne), $ = Math.max(De.col, $)), (1 < (parseInt(w(Ae[Se][xe]).attr("rowspan"), 10) || 1) || 1 < (parseInt(w(Ae[Se][xe]).attr("colspan"), 10) || 1)) && (De = b((Oe = u(Ae[Se][xe], Ae)).row, Oe.col, Ae), Re = Math.min(Oe.row, Re), Se = Math.max(De.row, Se), Ne = Math.min(Oe.col, Ne), $ = Math.max(De.col, $));
            return Re == ne && Se == ve && Ne == Ee && $ == be ? { min_i: ne, max_i: ve, min_j: Ee, max_j: be } : fe(Re, Se, Ne, $, Ae);
          }(Math.min(R.row, K.row), Math.max(R.row, K.row), Math.min(R.col, K.col), Math.max(R.col, K.col), L);
          g(), T.classList.add("fr-cell-fixed"), S.classList.add("fr-cell-handler");
          for (var j = V.min_i; j <= V.max_i; j++)
            for (var X = V.min_j; X <= V.max_j; X++)
              w(L[j][X]).addClass("fr-selected-cell");
        }
      }
      function y(T) {
        var S = null, L = w(T.target);
        return T.target.tagName == "TD" || T.target.tagName == "TH" ? S = T.target : 0 < L.closest("th", L.closest("thead")[0]).length ? S = L.closest("th", L.closest("thead")[0]).get(0) : 0 < L.closest("td", L.closest("tr")[0]).length && (S = L.closest("td", L.closest("tr")[0]).get(0)), t.$el.html.toString().search(S) === -1 ? null : S;
      }
      function B() {
        g(), t.popups.hide("table.edit");
      }
      function I(T) {
        var S = y(T);
        if (w(S).parents("[contenteditable]").not(".fr-element").not(".fr-img-caption").not("body").first().attr("contenteditable") == "false")
          return !0;
        if (0 < se().length && !S && B(), !t.edit.isDisabled() || t.popups.isVisible("table.edit")) {
          if (T.which != 1 || T.which == 1 && t.helpers.isMac() && T.ctrlKey)
            (T.which == 3 || T.which == 1 && t.helpers.isMac() && T.ctrlKey) && S && B();
          else if (Y = !0, S) {
            0 < se().length && !T.shiftKey && B(), T.stopPropagation(), t.events.trigger("image.hideResizer"), t.events.trigger("video.hideResizer"), G = !0;
            var L = S.tagName.toLowerCase();
            T.shiftKey && 0 < t.$el.find("".concat(L, ".fr-selected-cell")).length ? w(t.$el.find("".concat(L, ".fr-selected-cell")).closest("table")).is(w(S).closest("table")) ? U(ce, S) : m() : ((t.keys.ctrlKey(T) || T.shiftKey) && (1 < se().length || w(S).find(t.selection.element()).length === 0 && !w(S).is(t.selection.element())) && m(), ce = S, 0 < t.opts.tableEditButtons.length && U(ce, ce));
          }
        }
      }
      function x(T) {
        if (!t.edit.isDisabled() && t.popups.areVisible())
          return !0;
        if (G || t.$tb.is(T.target) || t.$tb.is(w(T.target).closest(".fr-toolbar")) || (0 < se().length && t.toolbar.enable(), g()), !(T.which != 1 || T.which == 1 && t.helpers.isMac() && T.ctrlKey) && (Y = !1, G && (G = !1, y(T) || se().length != 1 ? 0 < se().length && (t.selection.isCollapsed() ? oe() : (g(), t.edit.on())) : g()), ee)) {
          ee = !1, n.removeClass("fr-moving"), t.$el.removeClass("fr-no-selection"), t.edit.on();
          var S = parseFloat(n.css("left")) + t.opts.tableResizerOffset + t.$wp.offset().left;
          t.opts.iframe && (S -= t.$iframe.offset().left), n.data("release-position", S), n.removeData("max-left"), n.removeData("max-right"), function() {
            var R = n.data("origin"), K = n.data("release-position");
            if (R !== K) {
              var V = n.data("first"), j = n.data("second"), X = n.data("table"), fe = X.outerWidth();
              if (t.undo.canDo() || t.undo.saveStep(), V != null && j != null) {
                var ne, ve, Ee, be = d(X), Ae = [], Te = [], xe = [], Oe = [];
                for (ne = 0; ne < be.length; ne++)
                  ve = w(be[ne][V]), Ee = w(be[ne][j]), Ae[ne] = ve.outerWidth(), xe[ne] = Ee.outerWidth(), Te[ne] = Ae[ne] / fe * 100, Oe[ne] = xe[ne] / fe * 100;
                for (ne = 0; ne < be.length; ne++)
                  if (ve = w(be[ne][V]), Ee = w(be[ne][j]), be[ne][V] != be[ne][j]) {
                    var De = (Te[ne] * (Ae[ne] + K - R) / Ae[ne]).toFixed(4);
                    ve.css("width", De + "%"), Ee.css("width", (Te[ne] + Oe[ne] - De).toFixed(4) + "%");
                  }
              } else {
                var Re, Se = X.parent(), Ne = fe / Se.width() * 100, $ = (parseInt(X.css("margin-left"), 10) || 0) / Se.width() * 100, z = (parseInt(X.css("margin-right"), 10) || 0) / Se.width() * 100;
                t.opts.direction == "rtl" && j === 0 || t.opts.direction != "rtl" && j !== 0 ? (Re = (fe + K - R) / fe * Ne, X.css("margin-right", "calc(100% - ".concat(Math.round(Re).toFixed(4), "% - ").concat(Math.round($).toFixed(4), "%)"))) : (t.opts.direction == "rtl" && j !== 0 || t.opts.direction != "rtl" && j === 0) && (Re = (fe - K + R) / fe * Ne, X.css("margin-left", "calc(100% - ".concat(Math.round(Re).toFixed(4), "% - ").concat(Math.round(z).toFixed(4), "%)"))), X.css("width", "".concat(Math.round(Re).toFixed(4), "%"));
              }
              t.selection.restore(), t.undo.saveStep(), t.events.trigger("table.resized", [X.get(0)]);
            }
            n.removeData("origin"), n.removeData("release-position"), n.removeData("first"), n.removeData("second"), n.removeData("table");
          }(), a();
        }
      }
      function v(T) {
        if (t.events.$on(w("input"), "click", W), G === !0 && 0 < t.opts.tableEditButtons.length) {
          if (w(T.currentTarget).closest("table").is(H()) && (T.currentTarget.tagName == "TD" && t.$el.find("th.fr-selected-cell").length === 0 || T.currentTarget.tagName == "TH" && t.$el.find("td.fr-selected-cell").length === 0))
            return void U(ce, T.currentTarget);
          m();
        }
      }
      function A(T, S, L, R) {
        for (var K, V = S; V != t.el && V.tagName != "TD" && V.tagName != "TH" && (R == "up" ? K = V.previousElementSibling : R == "down" && (K = V.nextElementSibling), !K); )
          V = V.parentNode;
        V.tagName == "TD" || V.tagName == "TH" ? function(X, fe) {
          for (var ne = X; ne && ne.tagName != "TABLE" && ne.parentNode != t.el; )
            ne = ne.parentNode;
          if (ne && ne.tagName == "TABLE") {
            var ve = d(w(ne));
            fe == "up" ? l(u(X, ve), ne, ve) : fe == "down" && i(u(X, ve), ne, ve);
          }
        }(V, R) : K && (R == "up" && t.selection.setAtEnd(K), R == "down" && t.selection.setAtStart(K));
      }
      function l(T, S, L) {
        0 < T.row ? t.selection.setAtEnd(L[T.row - 1][T.col]) : A(0, S, 0, "up");
      }
      function i(T, S, L) {
        var R = parseInt(L[T.row][T.col].getAttribute("rowspan"), 10) || 1;
        T.row < L.length - R ? t.selection.setAtStart(L[T.row + R][T.col]) : A(0, S, 0, "down");
      }
      function a() {
        n && (n.find("div").css("opacity", 0), n.css("top", 0), n.css("left", 0), n.css("height", 0), n.find("div").css("height", 0), n.hide());
      }
      function p() {
        f && f.removeClass("fr-visible").css("left", "-9999px");
      }
      function c(T, S) {
        var L = w(S), R = L.closest("table"), K = R.parent();
        if (S && S.tagName != "TD" && S.tagName != "TH" && (0 < L.closest("td").length ? S = L.closest("td") : 0 < L.closest("th").length && (S = L.closest("th"))), !S || S.tagName != "TD" && S.tagName != "TH")
          n && L.get(0) != n.get(0) && L.parent().get(0) != n.get(0) && t.core.sameInstance(n) && a();
        else {
          if (L = w(S), t.$el.find(L).length === 0)
            return !1;
          var V = L.offset().left - 1, j = V + L.outerWidth();
          if (Math.abs(T.pageX - V) <= t.opts.tableResizerOffset || Math.abs(j - T.pageX) <= t.opts.tableResizerOffset) {
            var X, fe, ne, ve, Ee, be = d(R), Ae = u(S, be), Te = b(Ae.row, Ae.col, be), xe = R.offset().top, Oe = R.outerHeight() - 1;
            t.opts.direction != "rtl" ? T.pageX - V <= t.opts.tableResizerOffset ? (ne = V, 0 < Ae.col ? (ve = V - D(Ae.col - 1, be) + t.opts.tableResizingLimit, Ee = V + D(Ae.col, be) - t.opts.tableResizingLimit, X = Ae.col - 1, fe = Ae.col) : (X = null, fe = 0, ve = R.offset().left - 1 - parseInt(R.css("margin-left"), 10), Ee = R.offset().left - 1 + R.width() - be[0].length * t.opts.tableResizingLimit)) : j - T.pageX <= t.opts.tableResizerOffset && (ne = j, Te.col < be[Te.row].length && be[Te.row][Te.col + 1] ? (ve = j - D(Te.col, be) + t.opts.tableResizingLimit, Ee = j + D(Te.col + 1, be) - t.opts.tableResizingLimit, X = Te.col, fe = Te.col + 1) : (X = Te.col, fe = null, ve = R.offset().left - 1 + be[0].length * t.opts.tableResizingLimit, Ee = K.offset().left - 1 + K.width() + parseFloat(K.css("padding-left")))) : j - T.pageX <= t.opts.tableResizerOffset ? (ne = j, 0 < Ae.col ? (ve = j - D(Ae.col, be) + t.opts.tableResizingLimit, Ee = j + D(Ae.col - 1, be) - t.opts.tableResizingLimit, X = Ae.col, fe = Ae.col - 1) : (X = null, fe = 0, ve = R.offset().left + be[0].length * t.opts.tableResizingLimit, Ee = K.offset().left - 1 + K.width() + parseFloat(K.css("padding-left")))) : T.pageX - V <= t.opts.tableResizerOffset && (ne = V, Te.col < be[Te.row].length && be[Te.row][Te.col + 1] ? (ve = V - D(Te.col + 1, be) + t.opts.tableResizingLimit, Ee = V + D(Te.col, be) - t.opts.tableResizingLimit, X = Te.col + 1, fe = Te.col) : (X = Te.col, fe = null, ve = K.offset().left + parseFloat(K.css("padding-left")), Ee = R.offset().left - 1 + R.width() - be[0].length * t.opts.tableResizingLimit)), n || function() {
              t.shared.$table_resizer || (t.shared.$table_resizer = w(document.createElement("div")).attr("class", "fr-table-resizer").html("<div></div>")), n = t.shared.$table_resizer, t.events.$on(n, "mousedown", function(z) {
                return !t.core.sameInstance(n) || (0 < se().length && B(), z.which == 1 ? (t.selection.save(), ee = !0, n.addClass("fr-moving"), m(), t.edit.off(), n.find("div").css("opacity", 1), !1) : void 0);
              }), t.events.$on(n, "mousemove", function(z) {
                if (!t.core.sameInstance(n))
                  return !0;
                ee && (t.opts.iframe && (z.pageX -= t.$iframe.offset().left), Q(z));
              }), t.events.on("shared.destroy", function() {
                n.html("").removeData().remove(), n = null;
              }, !0), t.events.on("destroy", function() {
                t.$el.find(".fr-selected-cell").removeClass("fr-selected-cell"), w("body").first().append(n.hide());
              }, !0);
            }(), n.data("table", R), n.data("first", X), n.data("second", fe), n.data("instance", t), t.$wp.append(n);
            var De = ne - t.win.pageXOffset - t.opts.tableResizerOffset - t.$wp.offset().left, Re = xe - t.$wp.offset().top + t.$wp.scrollTop();
            if (t.opts.iframe) {
              var Se = t.helpers.getPX(t.$wp.find(".fr-iframe").css("padding-top")), Ne = t.helpers.getPX(t.$wp.find(".fr-iframe").css("padding-left"));
              De += t.$iframe.offset().left + Ne, Re += t.$iframe.offset().top + Se, ve += t.$iframe.offset().left, Ee += t.$iframe.offset().left;
            }
            n.data("max-left", ve), n.data("max-right", Ee), n.data("origin", ne - t.win.pageXOffset), n.css("top", Re), n.css("left", De), n.css("height", Oe), n.find("div").css("height", Oe), n.css("padding-left", t.opts.tableResizerOffset), n.css("padding-right", t.opts.tableResizerOffset), n.show();
          } else
            t.core.sameInstance(n) && a();
        }
      }
      function h(T, S) {
        if (t.$box.find(".fr-line-breaker").isVisible())
          return !1;
        f || q(), t.$box.append(f), f.data("instance", t);
        var L, R = w(S).find("tr").first(), K = T.pageX, V = 0, j = 0;
        if (t.opts.iframe) {
          var X = t.helpers.getPX(t.$wp.find(".fr-iframe").css("padding-top")), fe = t.helpers.getPX(t.$wp.find(".fr-iframe").css("padding-left"));
          V += t.$iframe.offset().left - t.helpers.scrollLeft() + fe, j += t.$iframe.offset().top - t.helpers.scrollTop() + X;
        }
        R.find("th, td").each(function() {
          var ne = w(this);
          return ne.offset().left <= K && K < ne.offset().left + ne.outerWidth() / 2 ? (L = parseInt(f.find("a").css("width"), 10), f.css("top", j + ne.offset().top - t.$box.offset().top - L - 5), f.css("left", V + ne.offset().left - t.$box.offset().left - L / 2), f.data("selected-cell", ne), f.data("position", "before"), f.addClass("fr-visible"), !1) : ne.offset().left + ne.outerWidth() / 2 <= K && K < ne.offset().left + ne.outerWidth() ? (L = parseInt(f.find("a").css("width"), 10), f.css("top", j + ne.offset().top - t.$box.offset().top - L - 5), f.css("left", V + ne.offset().left - t.$box.offset().left + ne.outerWidth() - L / 2), f.data("selected-cell", ne), f.data("position", "after"), f.addClass("fr-visible"), !1) : void 0;
        });
      }
      function M(T, S) {
        if (t.$box.find(".fr-line-breaker").isVisible())
          return !1;
        f || q(), t.$box.append(f), f.data("instance", t);
        var L, R = w(S), K = T.pageY, V = 0, j = 0;
        if (t.opts.iframe) {
          var X = t.helpers.getPX(t.$wp.find(".fr-iframe").css("padding-top")), fe = t.helpers.getPX(t.$wp.find(".fr-iframe").css("padding-left"));
          V += t.$iframe.offset().left - t.helpers.scrollLeft() + fe, j += t.$iframe.offset().top - t.helpers.scrollTop() + X;
        }
        R.find("tr").each(function() {
          var ne = w(this);
          return ne.offset().top <= K && K < ne.offset().top + ne.outerHeight() / 2 ? (L = parseInt(f.find("a").css("width"), 10), f.css("top", j + ne.offset().top - t.$box.offset().top - L / 2), f.css("left", V + ne.offset().left - t.$box.offset().left - L - 5), f.data("selected-cell", ne.find("td").first()), f.data("position", "above"), f.addClass("fr-visible"), !1) : ne.offset().top + ne.outerHeight() / 2 <= K && K < ne.offset().top + ne.outerHeight() ? (L = parseInt(f.find("a").css("width"), 10), f.css("top", j + ne.offset().top - t.$box.offset().top + ne.outerHeight() - L / 2), f.css("left", V + ne.offset().left - t.$box.offset().left - L - 5), f.data("selected-cell", ne.find("td").first()), f.data("position", "below"), f.addClass("fr-visible"), !1) : void 0;
        });
      }
      function N(T) {
        ue = null;
        var S = t.doc.elementFromPoint(T.pageX - t.win.pageXOffset, T.pageY - t.win.pageYOffset);
        t.opts.tableResizer && (!t.popups.areVisible() || t.popups.areVisible() && t.popups.isVisible("table.edit")) && c(T, S), !t.opts.tableInsertHelper || t.popups.areVisible() || t.$tb.hasClass("fr-inline") && t.$tb.isVisible() || function(R, K) {
          if (se().length === 0) {
            var V, j, X;
            if (K && (K.tagName == "HTML" || K.tagName == "BODY" || t.node.isElement(K)))
              for (V = 1; V <= t.opts.tableInsertHelperOffset; V++) {
                if (j = t.doc.elementFromPoint(R.pageX - t.win.pageXOffset, R.pageY - t.win.pageYOffset + V), w(j).hasClass("fr-tooltip"))
                  return !0;
                if (j && (j.tagName == "TH" || j.tagName == "TD" || j.tagName == "TABLE") && (w(j).parents(".fr-wrapper").length || t.opts.iframe) && w(j).closest("table").attr("contenteditable") != "false")
                  return h(R, w(j).closest("table")), !0;
                if (X = t.doc.elementFromPoint(R.pageX - t.win.pageXOffset + V, R.pageY - t.win.pageYOffset), w(X).hasClass("fr-tooltip"))
                  return !0;
                if (X && (X.tagName == "TH" || X.tagName == "TD" || X.tagName == "TABLE") && (w(X).parents(".fr-wrapper").length || t.opts.iframe) && w(X).closest("table").attr("contenteditable") != "false")
                  return M(R, w(X).closest("table")), !0;
              }
            t.core.sameInstance(f) && p();
          }
        }(T, S);
      }
      function ie() {
        if (ee) {
          var T = n.data("table").offset().top - t.win.pageYOffset;
          if (t.opts.iframe) {
            var S = t.helpers.getPX(t.$wp.find(".fr-iframe").css("padding-top"));
            T += t.$iframe.offset().top - t.helpers.scrollTop() + S;
          }
          n.css("top", T);
        }
      }
      function D(T, S) {
        var L, R = w(S[0][T]).outerWidth();
        for (L = 1; L < S.length; L++)
          R = Math.min(R, w(S[L][T]).outerWidth());
        return R;
      }
      function _(T, S, L) {
        var R, K = 0;
        for (R = T; R <= S; R++)
          K += D(R, L);
        return K;
      }
      function Q(T) {
        if (1 < se().length && Y && m(), Y === !1 && G === !1 && ee === !1)
          ue && clearTimeout(ue), t.edit.isDisabled() && !t.popups.isVisible("table.edit") || (ue = setTimeout(N, 30, T));
        else if (ee) {
          var S = T.pageX - t.win.pageXOffset;
          t.opts.iframe && (S += t.$iframe.offset().left);
          var L = n.data("max-left"), R = n.data("max-right");
          L <= S && S <= R ? n.css("left", S - t.opts.tableResizerOffset - t.$wp.offset().left) : S < L && parseFloat(n.css("left"), 10) > L - t.opts.tableResizerOffset ? n.css("left", L - t.opts.tableResizerOffset - t.$wp.offset().left) : R < S && parseFloat(n.css("left"), 10) < R - t.opts.tableResizerOffset && n.css("left", R - t.opts.tableResizerOffset - t.$wp.offset().left);
        } else
          Y && p();
      }
      function re(T) {
        t.node.isEmpty(T.get(0)) ? T.prepend(o.MARKERS) : T.prepend(o.START_MARKER).append(o.END_MARKER);
      }
      function q() {
        t.shared.$ti_helper || (t.shared.$ti_helper = w(document.createElement("div")).attr("class", "fr-insert-helper").html('<a class="fr-floating-btn" role="button" tabIndex="-1" title="'.concat(t.language.translate("Insert"), '"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M22,16.75 L16.75,16.75 L16.75,22 L15.25,22.000 L15.25,16.75 L10,16.75 L10,15.25 L15.25,15.25 L15.25,10 L16.75,10 L16.75,15.25 L22,15.25 L22,16.75 Z"/></svg></a>')), t.events.bindClick(t.shared.$ti_helper, "a", function() {
          var T = f.data("selected-cell"), S = f.data("position"), L = f.data("instance") || t;
          S == "before" || S == "after" ? (t.undo.saveStep(), T.addClass("fr-selected-cell"), L.table.insertColumn(S), T.removeClass("fr-selected-cell"), t.undo.saveStep()) : (S == "above" || S == "below") && (t.undo.saveStep(), T.addClass("fr-selected-cell"), L.table.insertRow(S), T.removeClass("fr-selected-cell"), t.undo.saveStep()), p();
        }), t.events.on("shared.destroy", function() {
          t.shared.$ti_helper.html("").removeData().remove(), t.shared.$ti_helper = null;
        }, !0), t.events.$on(t.shared.$ti_helper, "mousemove", function(T) {
          T.stopPropagation();
        }, !0), t.events.$on(w(t.o_win), "scroll", function() {
          p();
        }, !0), t.events.$on(t.$wp, "scroll", function() {
          p();
        }, !0)), f = t.shared.$ti_helper, t.events.on("destroy", function() {
          f = null;
        }), t.tooltip.bind(t.$box, ".fr-insert-helper > a.fr-floating-btn");
      }
      function ae() {
        ce = null, clearTimeout(ue);
      }
      function se() {
        return t.el.querySelectorAll(".fr-selected-cell");
      }
      function H() {
        var T = se();
        if (T.length) {
          for (var S = T[0]; S && S.tagName != "TABLE" && S.parentNode != t.el; )
            S = S.parentNode;
          return S && S.tagName == "TABLE" ? w(S) : w([]);
        }
        return w([]);
      }
      function W(T) {
        G = !1;
      }
      return { _init: function() {
        if (!t.$wp)
          return !1;
        if (!t.helpers.isMobile()) {
          ee = G = Y = !1, t.events.$on(t.$el, "mousedown", I), t.popups.onShow("image.edit", function() {
            g(), G = Y = !1;
          }), t.popups.onShow("link.edit", function() {
            g(), G = Y = !1;
          }), t.events.on("commands.mousedown", function(L) {
            0 < L.parents(".fr-toolbar").length && g();
          }), t.events.$on(t.$el, "mouseover", "th, td", v), t.events.$on(t.$win, "mouseup", x), t.opts.iframe && t.events.$on(w(t.o_win), "mouseup", x), t.events.$on(t.$win, "mousemove", Q), t.events.$on(w(t.o_win), "scroll", ie), t.events.on("contentChanged", function() {
            0 < se().length && (oe(), t.$el.find("img").on("load.selected-cells", function() {
              w(this).off("load.selected-cells"), 0 < se().length && oe();
            }));
          }), t.events.$on(w(t.o_win), "resize", function() {
            g();
          }), t.events.on("toolbar.esc", function() {
            if (0 < se().length)
              return t.events.disableBlur(), t.events.focus(), !1;
          }, !0), t.events.$on(w(t.o_win), "keydown", function() {
            Y && G && (G = Y = !1, t.$el.removeClass("fr-no-selection"), t.edit.on(), t.selection.setAtEnd(t.$el.find(".fr-selected-cell").last().get(0)), t.selection.restore(), g());
          }), t.events.$on(t.$el, "keydown", function(L) {
            L.shiftKey ? function(K) {
              var V = se();
              if (V != null && 0 < V.length) {
                var j, X = d(), fe = K.which, ne = u(V.length == 1 ? j = V[0] : (j = t.el.querySelector(".fr-cell-fixed"), t.el.querySelector(".fr-cell-handler")), X);
                if (o.KEYCODE.ARROW_RIGHT == fe) {
                  if (ne.col < X[0].length - 1)
                    return U(j, X[ne.row][ne.col + 1]), !1;
                } else if (o.KEYCODE.ARROW_DOWN == fe) {
                  if (ne.row < X.length - 1)
                    return U(j, X[ne.row + 1][ne.col]), !1;
                } else if (o.KEYCODE.ARROW_LEFT == fe) {
                  if (0 < ne.col)
                    return U(j, X[ne.row][ne.col - 1]), !1;
                } else if (o.KEYCODE.ARROW_UP == fe && 0 < ne.row)
                  return U(j, X[ne.row - 1][ne.col]), !1;
              }
            }(L) === !1 && setTimeout(function() {
              oe();
            }, 0) : function(K) {
              var V = K.which, j = t.selection.blocks();
              if (j.length && ((j = j[0]).tagName == "TD" || j.tagName == "TH")) {
                for (var X = j; X && X.tagName != "TABLE" && X.parentNode != t.el; )
                  X = X.parentNode;
                if (X && X.tagName == "TABLE" && (o.KEYCODE.ARROW_LEFT == V || o.KEYCODE.ARROW_UP == V || o.KEYCODE.ARROW_RIGHT == V || o.KEYCODE.ARROW_DOWN == V) && (0 < se().length && B(), t.browser.webkit && (o.KEYCODE.ARROW_UP == V || o.KEYCODE.ARROW_DOWN == V))) {
                  var fe = t.selection.ranges(0).startContainer;
                  if (fe.nodeType == Node.TEXT_NODE && (o.KEYCODE.ARROW_UP == V && (fe.previousSibling && fe.previousSibling.tagName !== "BR" || fe.previousSibling && fe.previousSibling.tagName === "BR" && fe.previousSibling.previousSibling) || o.KEYCODE.ARROW_DOWN == V && (fe.nextSibling && fe.nextSibling.tagName !== "BR" || fe.nextSibling && fe.nextSibling.tagName === "BR" && fe.nextSibling.nextSibling)))
                    return;
                  K.preventDefault(), K.stopPropagation();
                  var ne = d(w(X)), ve = u(j, ne);
                  return o.KEYCODE.ARROW_UP == V ? l(ve, X, ne) : o.KEYCODE.ARROW_DOWN == V && i(ve, X, ne), t.selection.restore(), !1;
                }
              }
            }(L);
          }), t.events.on("keydown", function(L) {
            if (function(j) {
              if (j.which == o.KEYCODE.TAB) {
                var X;
                if (0 < se().length)
                  X = t.$el.find(".fr-selected-cell").last();
                else {
                  var fe = t.selection.element();
                  fe.tagName == "TD" || fe.tagName == "TH" ? X = w(fe) : fe != t.el && (0 < w(fe).parentsUntil(t.$el, "td").length ? X = w(fe).parents("td").first() : 0 < w(fe).parentsUntil(t.$el, "th").length && (X = w(fe).parents("th").first()));
                }
                if (X)
                  return j.preventDefault(), !!(t.selection.get().focusOffset === 0 && 0 < w(t.selection.element()).parentsUntil(t.$el, "ol, ul").length && (0 < w(t.selection.element()).closest("li").prev().length || w(t.selection.element()).is("li") && 0 < w(t.selection.element()).prev().length)) || (B(), j.shiftKey ? 0 < X.prev().length ? re(X.prev()) : 0 < X.closest("tr").length && 0 < X.closest("tr").prev().length ? re(X.closest("tr").prev().find("td").last()) : 0 < X.closest("tbody").length && 0 < X.closest("table").find("thead tr").length && re(X.closest("table").find("thead tr th").last()) : 0 < X.next().length ? re(X.next()) : 0 < X.closest("tr").length && 0 < X.closest("tr").next().length ? re(X.closest("tr").next().find("td").first()) : 0 < X.closest("thead").length && 0 < X.closest("table").find("tbody tr").length ? re(X.closest("table").find("tbody tr td").first()) : (X.addClass("fr-selected-cell"), le("below"), g(), re(X.closest("tr").next().find("td").first())), t.selection.restore(), !1);
              }
            }(L) === !1)
              return !1;
            var R = se();
            if (0 < R.length) {
              if (0 < R.length && t.keys.ctrlKey(L) && L.which == o.KEYCODE.A)
                return g(), t.popups.isVisible("table.edit") && t.popups.hide("table.edit"), R = [], !0;
              if (L.which == o.KEYCODE.ESC && t.popups.isVisible("table.edit"))
                return g(), t.popups.hide("table.edit"), L.preventDefault(), L.stopPropagation(), L.stopImmediatePropagation(), !(R = []);
              if (1 < R.length && (L.which == o.KEYCODE.BACKSPACE || L.which == o.KEYCODE.DELETE)) {
                t.undo.saveStep();
                for (var K = 0; K < R.length; K++)
                  w(R[K]).html("<br>"), K == R.length - 1 && w(R[K]).prepend(o.MARKERS);
                return t.selection.restore(), t.undo.saveStep(), !(R = []);
              }
              if (1 < R.length && L.which != o.KEYCODE.F10 && !t.keys.isBrowserAction(L))
                return L.preventDefault(), !(R = []);
            } else if (!(R = []) === function(j) {
              if (j.altKey && j.which == o.KEYCODE.SPACE) {
                var X, fe = t.selection.element();
                if (fe.tagName == "TD" || fe.tagName == "TH" ? X = fe : 0 < w(fe).closest("td").length ? X = w(fe).closest("td").get(0) : 0 < w(fe).closest("th").length && (X = w(fe).closest("th").get(0)), X)
                  return j.preventDefault(), U(X, X), oe(), !1;
              }
            }(L))
              return !1;
          }, !0);
          var S = [];
          t.events.on("html.beforeGet", function() {
            S = se();
            for (var L = 0; L < S.length; L++)
              S[L].className = (S[L].className || "").replace(/fr-selected-cell/g, "");
          }), t.events.on("html.afterGet", function() {
            for (var L = 0; L < S.length; L++)
              S[L].className = (S[L].className ? S[L].className.trim() + " " : "") + "fr-selected-cell";
            S = [];
          }), k(!0), P(!0);
        }
        t.events.on("destroy", ae);
      }, insert: function(S, L) {
        var R, K, V = "<table " + (t.opts.tableDefaultWidth ? 'style="width: ' + t.opts.tableDefaultWidth + ';" ' : "") + 'class="fr-inserted-table"><tbody>', j = 100 / L;
        for (R = 0; R < S; R++) {
          for (V += "<tr>", K = 0; K < L; K++)
            V += "<td" + (t.opts.tableDefaultWidth ? ' style="width: ' + j.toFixed(4) + '%;"' : "") + ">", R === 0 && K === 0 && (V += o.MARKERS), V += "<br></td>";
          V += "</tr>";
        }
        V += "</tbody></table>", t.html.insert(V), t.selection.restore();
        var X = t.$el.find(".fr-inserted-table");
        X.removeClass("fr-inserted-table"), t.events.trigger("table.inserted", [X.get(0)]);
      }, remove: Z, insertRow: le, deleteRow: function() {
        var S = H();
        if (0 < S.length) {
          var L, R, K, V = d(), j = C(V);
          if (j == null)
            return;
          if (j.min_i === 0 && j.max_i == V.length - 1)
            Z();
          else {
            for (L = j.max_i; L >= j.min_i; L--) {
              for (K = w(S.find("tr").not(S.find("> table tr")).get(L)), R = 0; R < V[L].length; R++)
                if (R === 0 || V[L][R] != V[L][R - 1]) {
                  var X = w(V[L][R]);
                  if (1 < parseInt(X.attr("rowspan"), 10)) {
                    var fe = parseInt(X.attr("rowspan"), 10) - 1;
                    fe == 1 ? X.removeAttr("rowspan") : X.attr("rowspan", fe);
                  }
                  if (L < V.length - 1 && V[L][R] == V[L + 1][R] && (L === 0 || V[L][R] != V[L - 1][R])) {
                    for (var ne = V[L][R], ve = R; 0 < ve && V[L][ve] == V[L][ve - 1]; )
                      ve--;
                    ve === 0 ? w(S.find("tr").not(S.find("> table tr")).get(L + 1)).prepend(ne) : w(V[L + 1][ve - 1])[0].parentNode && w(V[L + 1][ve - 1])[0].insertAdjacentElement("afterend", ne);
                  }
                }
              var Ee = K.parent();
              K.remove(), Ee.find("tr").length === 0 && Ee.remove(), V = d(S);
            }
            r(0, V.length - 1, 0, V[0].length - 1, S), 0 < j.min_i ? t.selection.setAtEnd(V[j.min_i - 1][0]) : t.selection.setAtEnd(V[0][0]), t.selection.restore(), t.popups.hide("table.edit");
          }
        }
      }, insertColumn: function(S) {
        var L = H();
        if (0 < L.length) {
          var R, K = d(), V = C(K);
          R = S == "before" ? V.min_j : V.max_j;
          var j, X = 100 / K[0].length, fe = 100 / (K[0].length + 1);
          L.find("th, td").each(function() {
            (j = w(this)).data("old-width", j.outerWidth() / L.outerWidth() * 100);
          }), L.find("tr").not(L.find("> table tr")).each(function(ne) {
            for (var ve, Ee = w(this), be = 0, Ae = 0; be - 1 < R; ) {
              if (!(ve = Ee.find("> th, > td").get(Ae))) {
                ve = null;
                break;
              }
              ve == K[ne][be] ? (be += parseInt(w(ve).attr("colspan"), 10) || 1, Ae++) : (be += parseInt(w(K[ne][be]).attr("colspan"), 10) || 1, S == "after" && (ve = Ae === 0 ? -1 : Ee.find("> th, > td").get(Ae - 1)));
            }
            var Te, xe = w(ve);
            if (S == "after" && R < be - 1 || S == "before" && 0 < R && K[ne][R] == K[ne][R - 1]) {
              if (ne === 0 || 0 < ne && K[ne][R] != K[ne - 1][R]) {
                var Oe = parseInt(xe.attr("colspan"), 10) + 1;
                xe.attr("colspan", Oe), xe.css("width", (xe.data("old-width") * fe / X + fe).toFixed(4) + "%"), xe.removeData("old-width");
              }
            } else
              Te = 0 < Ee.find("th").length ? '<th style="width: '.concat(fe.toFixed(4), '%;"><br></th>') : '<td style="width: '.concat(fe.toFixed(4), '%;"><br></td>'), ve == -1 ? Ee.prepend(Te) : ve == null ? Ee.append(Te) : S == "before" ? xe.before(Te) : S == "after" && xe[0].parentNode && xe[0].insertAdjacentHTML("afterend", Te);
          }), L.find("th, td").each(function() {
            (j = w(this)).data("old-width") && (j.css("width", (j.data("old-width") * fe / X).toFixed(4) + "%"), j.removeData("old-width"));
          }), t.popups.isVisible("table.edit") && oe();
        }
      }, deleteColumn: function() {
        var S = H();
        if (0 < S.length) {
          var L, R, K, V = d(), j = C(V);
          if (j == null)
            return;
          if (j.min_j === 0 && j.max_j == V[0].length - 1)
            Z();
          else {
            var X = 0;
            for (L = 0; L < V.length; L++)
              for (R = 0; R < V[0].length; R++)
                (K = w(V[L][R])).hasClass("fr-selected-cell") || (K.data("old-width", K.outerWidth() / S.outerWidth() * 100), (R < j.min_j || R > j.max_j) && (X += K.outerWidth() / S.outerWidth() * 100));
            for (X /= V.length, R = j.max_j; R >= j.min_j; R--)
              for (L = 0; L < V.length; L++)
                if (L === 0 || V[L][R] != V[L - 1][R])
                  if (K = w(V[L][R]), 1 < (parseInt(K.attr("colspan"), 10) || 1)) {
                    var fe = parseInt(K.attr("colspan"), 10) - 1;
                    fe == 1 ? K.removeAttr("colspan") : K.attr("colspan", fe), K.css("width", (100 * (K.data("old-width") - D(R, V)) / X).toFixed(4) + "%"), K.removeData("old-width");
                  } else {
                    var ne = w(K.parent().get(0));
                    K.remove(), ne.find("> th, > td").length === 0 && (ne.prev().length === 0 || ne.next().length === 0 || ne.prev().find("> th[rowspan], > td[rowspan]").length < ne.prev().find("> th, > td").length) && ne.remove();
                  }
            r(0, V.length - 1, 0, V[0].length - 1, S), 0 < j.min_j ? t.selection.setAtEnd(V[j.min_i][j.min_j - 1]) : t.selection.setAtEnd(V[j.min_i][0]), t.selection.restore(), t.popups.hide("table.edit"), S.find("th, td").each(function() {
              (K = w(this)).data("old-width") && (K.css("width", (100 * K.data("old-width") / X).toFixed(4) + "%"), K.removeData("old-width"));
            });
          }
        }
      }, mergeCells: function() {
        if (1 < se().length && (t.$el.find("th.fr-selected-cell").length === 0 || t.$el.find("td.fr-selected-cell").length === 0)) {
          E();
          var S, L, R = C(d());
          if (R == null)
            return;
          var K = t.$el.find(".fr-selected-cell"), V = w(K[0]), j = V.parent().find(".fr-selected-cell"), X = V.closest("table"), fe = V.html(), ne = 0;
          for (S = 0; S < j.length; S++)
            ne += w(j[S]).outerWidth();
          for (V.css("width", Math.min(100, ne / X.outerWidth() * 100).toFixed(4) + "%"), R.min_j < R.max_j && V.attr("colspan", R.max_j - R.min_j + 1), R.min_i < R.max_i && V.attr("rowspan", R.max_i - R.min_i + 1), S = 1; S < K.length; S++)
            (L = w(K[S])).html() != "<br>" && L.html() !== "" && (fe += "<br>".concat(L.html())), L.remove();
          V.html(fe), t.selection.setAtEnd(V.get(0)), t.selection.restore(), t.toolbar.enable(), ge(R.min_i, R.max_i, X);
          var ve = X.find("tr:empty");
          for (S = ve.length - 1; 0 <= S; S--)
            w(ve[S]).remove();
          he(R.min_j, R.max_j, X), oe();
        }
      }, splitCellVertically: function() {
        if (se().length == 1) {
          var S = t.$el.find(".fr-selected-cell"), L = parseInt(S.attr("colspan"), 10) || 1, R = S.parent().outerWidth(), K = S.outerWidth(), V = S.clone().html("<br>"), j = d(), X = u(S.get(0), j);
          if (1 < L) {
            var fe = Math.ceil(L / 2);
            K = _(X.col, X.col + fe - 1, j) / R * 100;
            var ne = _(X.col + fe, X.col + L - 1, j) / R * 100;
            1 < fe ? S.attr("colspan", fe) : S.removeAttr("colspan"), 1 < L - fe ? V.attr("colspan", L - fe) : V.removeAttr("colspan"), S.css("width", K.toFixed(4) + "%"), V.css("width", ne.toFixed(4) + "%");
          } else {
            var ve;
            for (ve = 0; ve < j.length; ve++)
              if (ve === 0 || j[ve][X.col] != j[ve - 1][X.col]) {
                var Ee = w(j[ve][X.col]);
                if (!Ee.is(S)) {
                  var be = (parseInt(Ee.attr("colspan"), 10) || 1) + 1;
                  Ee.attr("colspan", be);
                }
              }
            K = K / R * 100 / 2, S.css("width", "".concat(K.toFixed(4), "%")), V.css("width", "".concat(K.toFixed(4), "%"));
          }
          S[0].parentNode && S[0].insertAdjacentElement("afterend", V[0]), g(), t.popups.hide("table.edit");
        }
      }, splitCellHorizontally: function() {
        if (se().length == 1) {
          var S = t.$el.find(".fr-selected-cell"), L = S.parent(), R = S.closest("table"), K = parseInt(S.attr("rowspan"), 10), V = d(), j = u(S.get(0), V), X = S.clone().html("<br>");
          if (1 < K) {
            var fe = Math.ceil(K / 2);
            1 < fe ? S.attr("rowspan", fe) : S.removeAttr("rowspan"), 1 < K - fe ? X.attr("rowspan", K - fe) : X.removeAttr("rowspan");
            for (var ne = j.row + fe, ve = j.col === 0 ? j.col : j.col - 1; 0 <= ve && (V[ne][ve] == V[ne][ve - 1] || 0 < ne && V[ne][ve] == V[ne - 1][ve]); )
              ve--;
            ve == -1 ? w(R.find("tr").not(R.find("> table tr")).get(ne)).prepend(X) : w(V[ne][ve])[0].parentNode && w(V[ne][ve])[0].insertAdjacentElement("afterend", X[0]);
          } else {
            var Ee, be = w(document.createElement("tr")).append(X);
            for (Ee = 0; Ee < V[0].length; Ee++)
              if (Ee === 0 || V[j.row][Ee] != V[j.row][Ee - 1]) {
                var Ae = w(V[j.row][Ee]);
                Ae.is(S) || Ae.attr("rowspan", (parseInt(Ae.attr("rowspan"), 10) || 1) + 1);
              }
            L[0].parentNode && L[0].insertAdjacentElement("afterend", be[0]);
          }
          g(), t.popups.hide("table.edit");
        }
      }, addHeader: function() {
        var S = H();
        if (0 < S.length && S.find("th").length === 0) {
          var L, R = "<thead><tr>", K = 0;
          for (S.find("tr").first().find("> td").each(function() {
            var V = w(this);
            K += parseInt(V.attr("colspan"), 10) || 1;
          }), L = 0; L < K; L++)
            R += "<th><br></th>";
          R += "</tr></thead>", S.prepend(R), oe();
        }
      }, removeHeader: function() {
        var S = H(), L = S.find("thead");
        if (0 < L.length)
          if (S.find("tbody tr").length === 0)
            Z();
          else if (L.remove(), 0 < se().length)
            oe();
          else {
            t.popups.hide("table.edit");
            var R = S.find("tbody tr").first().find("td").first().get(0);
            R && (t.selection.setAtEnd(R), t.selection.restore());
          }
      }, setBackground: s, showInsertPopup: function() {
        var S = t.$tb.find('.fr-command[data-cmd="insertTable"]'), L = t.popups.get("table.insert");
        if (L || (L = k()), !L.hasClass("fr-active")) {
          t.popups.refresh("table.insert"), t.popups.setContainer("table.insert", t.$tb);
          var R = t.button.getPosition(S), K = R.left, V = R.top;
          t.popups.show("table.insert", K, V, S.outerHeight());
        }
      }, showEditPopup: oe, showColorsPopup: pe, back: function() {
        0 < se().length ? oe() : (t.popups.hide("table.insert"), t.toolbar.showInline());
      }, verticalAlign: function(S) {
        t.$el.find(".fr-selected-cell").css("vertical-align", S);
      }, horizontalAlign: function(S) {
        t.$el.find(".fr-selected-cell").css("text-align", S);
      }, applyStyle: function(S, L, R, K) {
        if (0 < L.length) {
          if (!R) {
            var V = Object.keys(K);
            V.splice(V.indexOf(S), 1), L.removeClass(V.join(" "));
          }
          L.toggleClass(S);
        }
      }, selectedTable: H, selectedCells: se, customColor: function() {
        var S = t.popups.get("table.colors").find(".fr-table-colors-hex-layer input");
        S.length && s(S.val());
      }, selectCells: U };
    }, o.DefineIcon("insertTable", { NAME: "table", SVG_KEY: "insertTable" }), o.RegisterCommand("insertTable", { title: "Insert Table", undo: !1, focus: !0, refreshOnCallback: !1, popup: !0, callback: function() {
      this.popups.isVisible("table.insert") ? (this.$el.find(".fr-marker").length && (this.events.disableBlur(), this.selection.restore()), this.popups.hide("table.insert")) : this.table.showInsertPopup();
    }, plugin: "table" }), o.RegisterCommand("tableInsert", { callback: function(t, n, f) {
      this.table.insert(n, f), this.popups.hide("table.insert");
    } }), o.DefineIcon("tableHeader", { NAME: "header", FA5NAME: "heading", SVG_KEY: "tableHeader" }), o.RegisterCommand("tableHeader", { title: "Table Header", focus: !1, toggle: !0, callback: function() {
      this.popups.get("table.edit").find('.fr-command[data-cmd="tableHeader"]').hasClass("fr-active") ? this.table.removeHeader() : this.table.addHeader();
    }, refresh: function(t) {
      var n = this.table.selectedTable();
      0 < n.length && (n.find("th").length === 0 ? t.removeClass("fr-active").attr("aria-pressed", !1) : t.addClass("fr-active").attr("aria-pressed", !0));
    } }), o.DefineIcon("tableRows", { NAME: "bars", SVG_KEY: "row" }), o.RegisterCommand("tableRows", { type: "dropdown", focus: !1, title: "Row", options: { above: "Insert row above", below: "Insert row below", delete: "Delete row" }, html: function() {
      var t = '<ul class="fr-dropdown-list" role="presentation">', n = o.COMMANDS.tableRows.options;
      for (var f in n)
        n.hasOwnProperty(f) && (t += '<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableRows" data-param1="' + f + '" title="' + this.language.translate(n[f]) + '">' + this.language.translate(n[f]) + "</a></li>");
      return t += "</ul>";
    }, callback: function(t, n) {
      n == "above" || n == "below" ? this.table.insertRow(n) : this.table.deleteRow();
    } }), o.DefineIcon("tableColumns", { NAME: "bars fa-rotate-90", SVG_KEY: "columns" }), o.RegisterCommand("tableColumns", { type: "dropdown", focus: !1, title: "Column", options: { before: "Insert column before", after: "Insert column after", delete: "Delete column" }, html: function() {
      var t = '<ul class="fr-dropdown-list" role="presentation">', n = o.COMMANDS.tableColumns.options;
      for (var f in n)
        n.hasOwnProperty(f) && (t += '<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableColumns" data-param1="'.concat(f, '" title="').concat(this.language.translate(n[f]), '">').concat(this.language.translate(n[f]), "</a></li>"));
      return t += "</ul>";
    }, callback: function(t, n) {
      n == "before" || n == "after" ? this.table.insertColumn(n) : this.table.deleteColumn();
    } }), o.DefineIcon("tableCells", { NAME: "square-o", FA5NAME: "square", SVG_KEY: "cellOptions" }), o.RegisterCommand("tableCells", { type: "dropdown", focus: !1, title: "Cell", options: { merge: "Merge cells", "vertical-split": "Vertical split", "horizontal-split": "Horizontal split" }, html: function() {
      var t = '<ul class="fr-dropdown-list" role="presentation">', n = o.COMMANDS.tableCells.options;
      for (var f in n)
        n.hasOwnProperty(f) && (t += '<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableCells" data-param1="'.concat(f, '" title="').concat(this.language.translate(n[f]), '">').concat(this.language.translate(n[f]), "</a></li>"));
      return t += "</ul>";
    }, callback: function(t, n) {
      n == "merge" ? this.table.mergeCells() : n == "vertical-split" ? this.table.splitCellVertically() : this.table.splitCellHorizontally();
    }, refreshOnShow: function(t, n) {
      1 < this.$el.find(".fr-selected-cell").length ? (n.find('a[data-param1="vertical-split"]').addClass("fr-disabled").attr("aria-disabled", !0), n.find('a[data-param1="horizontal-split"]').addClass("fr-disabled").attr("aria-disabled", !0), n.find('a[data-param1="merge"]').removeClass("fr-disabled").attr("aria-disabled", !1)) : (n.find('a[data-param1="merge"]').addClass("fr-disabled").attr("aria-disabled", !0), n.find('a[data-param1="vertical-split"]').removeClass("fr-disabled").attr("aria-disabled", !1), n.find('a[data-param1="horizontal-split"]').removeClass("fr-disabled").attr("aria-disabled", !1));
    } }), o.DefineIcon("tableRemove", { NAME: "trash", SVG_KEY: "removeTable" }), o.RegisterCommand("tableRemove", { title: "Remove Table", focus: !1, callback: function() {
      this.table.remove();
    } }), o.DefineIcon("tableStyle", { NAME: "paint-brush", SVG_KEY: "tableStyle" }), o.RegisterCommand("tableStyle", { title: "Table Style", type: "dropdown", focus: !1, html: function() {
      var t = '<ul class="fr-dropdown-list" role="presentation">', n = this.opts.tableStyles;
      for (var f in n)
        n.hasOwnProperty(f) && (t += '<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableStyle" data-param1="'.concat(f, '" title="').concat(this.language.translate(n[f]), '">').concat(this.language.translate(n[f]), "</a></li>"));
      return t += "</ul>";
    }, callback: function(t, n) {
      this.table.applyStyle(n, this.$el.find(".fr-selected-cell").closest("table"), this.opts.tableMultipleStyles, this.opts.tableStyles);
    }, refreshOnShow: function(t, n) {
      var f = this.$, G = this.$el.find(".fr-selected-cell").closest("table");
      G && n.find(".fr-command").each(function() {
        var Y = f(this).data("param1"), ce = G.hasClass(Y);
        f(this).toggleClass("fr-active", ce).attr("aria-selected", ce);
      });
    } }), o.DefineIcon("tableCellBackground", { NAME: "tint", SVG_KEY: "cellBackground" }), o.RegisterCommand("tableCellBackground", { title: "Cell Background", focus: !1, popup: !0, callback: function() {
      this.table.showColorsPopup();
    } }), o.RegisterCommand("tableCellBackgroundColor", { undo: !0, focus: !1, callback: function(t, n) {
      this.table.setBackground(n);
    } }), o.DefineIcon("tableBack", { NAME: "arrow-left", SVG_KEY: "back" }), o.RegisterCommand("tableBack", { title: "Back", undo: !1, focus: !1, back: !0, callback: function() {
      this.table.back();
    }, refresh: function(t) {
      this.table.selectedCells().length !== 0 || this.opts.toolbarInline ? (t.removeClass("fr-hidden"), t.next(".fr-separator").removeClass("fr-hidden")) : (t.addClass("fr-hidden"), t.next(".fr-separator").addClass("fr-hidden"));
    } }), o.DefineIcon("tableCellVerticalAlign", { NAME: "arrows-v", FA5NAME: "arrows-alt-v", SVG_KEY: "verticalAlignMiddle" }), o.RegisterCommand("tableCellVerticalAlign", { type: "dropdown", focus: !1, title: "Vertical Align", options: { Top: "Align Top", Middle: "Align Middle", Bottom: "Align Bottom" }, html: function() {
      var t = '<ul class="fr-dropdown-list" role="presentation">', n = o.COMMANDS.tableCellVerticalAlign.options;
      for (var f in n)
        n.hasOwnProperty(f) && (t += '<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableCellVerticalAlign" data-param1="'.concat(f.toLowerCase(), '" title="').concat(this.language.translate(n[f]), '">').concat(this.language.translate(f), "</a></li>"));
      return t += "</ul>";
    }, callback: function(t, n) {
      this.table.verticalAlign(n);
    }, refreshOnShow: function(t, n) {
      n.find('.fr-command[data-param1="' + this.$el.find(".fr-selected-cell").css("vertical-align") + '"]').addClass("fr-active").attr("aria-selected", !0);
    } }), o.DefineIcon("tableCellHorizontalAlign", { NAME: "align-left", SVG_KEY: "alignLeft" }), o.DefineIcon("align-left", { NAME: "align-left", SVG_KEY: "alignLeft" }), o.DefineIcon("align-right", { NAME: "align-right", SVG_KEY: "alignRight" }), o.DefineIcon("align-center", { NAME: "align-center", SVG_KEY: "alignCenter" }), o.DefineIcon("align-justify", { NAME: "align-justify", SVG_KEY: "alignJustify" }), o.RegisterCommand("tableCellHorizontalAlign", { type: "dropdown", focus: !1, title: "Horizontal Align", options: { left: "Align Left", center: "Align Center", right: "Align Right", justify: "Align Justify" }, html: function() {
      var t = '<ul class="fr-dropdown-list" role="presentation">', n = o.COMMANDS.tableCellHorizontalAlign.options;
      for (var f in n)
        n.hasOwnProperty(f) && (t += '<li role="presentation"><a class="fr-command fr-title" tabIndex="-1" role="option" data-cmd="tableCellHorizontalAlign" data-param1="'.concat(f, '" title="').concat(this.language.translate(n[f]), '">').concat(this.icon.create("align-".concat(f)), '<span class="fr-sr-only">').concat(this.language.translate(n[f]), "</span></a></li>"));
      return t += "</ul>";
    }, callback: function(t, n) {
      this.table.horizontalAlign(n);
    }, refresh: function(t) {
      var n = this.table.selectedCells(), f = this.$;
      n.length && t.find("> *").first().replaceWith(this.icon.create("align-".concat(this.helpers.getAlignment(f(n[0])))));
    }, refreshOnShow: function(t, n) {
      n.find('.fr-command[data-param1="' + this.helpers.getAlignment(this.$el.find(".fr-selected-cell").first()) + '"]').addClass("fr-active").attr("aria-selected", !0);
    } }), o.DefineIcon("tableCellStyle", { NAME: "magic", SVG_KEY: "cellStyle" }), o.RegisterCommand("tableCellStyle", { title: "Cell Style", type: "dropdown", focus: !1, html: function() {
      var t = '<ul class="fr-dropdown-list" role="presentation">', n = this.opts.tableCellStyles;
      for (var f in n)
        n.hasOwnProperty(f) && (t += '<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableCellStyle" data-param1="'.concat(f, '" title="').concat(this.language.translate(n[f]), '">').concat(this.language.translate(n[f]), "</a></li>"));
      return t += "</ul>";
    }, callback: function(t, n) {
      this.table.applyStyle(n, this.$el.find(".fr-selected-cell"), this.opts.tableCellMultipleStyles, this.opts.tableCellStyles);
    }, refreshOnShow: function(t, n) {
      var f = this.$, G = this.$el.find(".fr-selected-cell").first();
      G && n.find(".fr-command").each(function() {
        var Y = f(this).data("param1"), ce = G.hasClass(Y);
        f(this).toggleClass("fr-active", ce).attr("aria-selected", ce);
      });
    } }), o.RegisterCommand("tableCellBackgroundCustomColor", { title: "OK", undo: !0, callback: function() {
      this.table.customColor();
    } }), o.DefineIcon("tableColorRemove", { NAME: "eraser", SVG_KEY: "remove" });
  });
})();
/*!
 * froala_editor v3.1.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
(function(Ie, Le) {
  (function(o, t) {
    t($e());
  })(ke, function(o) {
    (o = o && o.hasOwnProperty("default") ? o.default : o).URLRegEx = "(^| |\\u00A0)(".concat(o.LinkRegEx, "|([a-z0-9+-_.]{1,}@[a-z0-9+-_.]{1,}\\.[a-z0-9+-_]{1,}))$"), o.PLUGINS.url = function(t) {
      var n = t.$, f = null;
      function G(w, oe, pe) {
        for (var te = ""; pe.length && pe[pe.length - 1] == "."; )
          te += ".", pe = pe.substring(0, pe.length - 1);
        var k = pe;
        if (t.opts.linkConvertEmailAddress)
          t.helpers.isEmail(k) && !/^mailto:.*/i.test(k) && (k = "mailto:".concat(k));
        else if (t.helpers.isEmail(k))
          return oe + pe;
        return /^((http|https|ftp|ftps|mailto|tel|sms|notes|data)\:)/i.test(k) || (k = "//".concat(k)), (oe || "") + "<a".concat(t.opts.linkAlwaysBlank ? ' target="_blank"' : "").concat(f ? ' rel="'.concat(f, '"') : "", ' data-fr-linked="true" href="').concat(k, '">').concat(pe.replace(/&amp;/g, "&").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), "</a>").concat(te);
      }
      var Y = function() {
        return new RegExp(o.URLRegEx, "gi");
      };
      function ce(w) {
        return t.opts.linkAlwaysNoFollow && (f = "nofollow"), t.opts.linkAlwaysBlank && (t.opts.linkNoOpener && (f ? f += " noopener" : f = "noopener"), t.opts.linkNoReferrer && (f ? f += " noreferrer" : f = "noreferrer")), w.replace(Y(), G);
      }
      function ue(w) {
        var oe = w.split(" ");
        return oe[oe.length - 1];
      }
      function ee() {
        var w = t.selection.ranges(0), oe = w.startContainer;
        if (!oe || oe.nodeType !== Node.TEXT_NODE || w.startOffset !== (oe.textContent || "").length || function k(F) {
          return !!F && (F.tagName === "A" || !(!F.parentNode || F.parentNode == t.el) && k(F.parentNode));
        }(oe))
          return !1;
        if (Y().test(ue(oe.textContent))) {
          n(oe).before(ce(oe.textContent));
          var pe = n(oe.parentNode).find("a[data-fr-linked]");
          pe.removeAttr("data-fr-linked"), oe.parentNode.removeChild(oe), t.events.trigger("url.linked", [pe.get(0)]);
        } else if (oe.textContent.split(" ").length <= 2 && oe.previousSibling && oe.previousSibling.tagName === "A") {
          var te = oe.previousSibling.innerText + oe.textContent;
          Y().test(ue(te)) && (n(oe.previousSibling).replaceWith(ce(te)), oe.parentNode.removeChild(oe));
        }
      }
      return { _init: function() {
        t.events.on("keypress", function(oe) {
          !t.selection.isCollapsed() || oe.key != "." && oe.key != ")" && oe.key != "(" || ee();
        }, !0), t.events.on("keydown", function(oe) {
          var pe = oe.which;
          !t.selection.isCollapsed() || pe != o.KEYCODE.ENTER && pe != o.KEYCODE.SPACE || ee();
        }, !0), t.events.on("paste.beforeCleanup", function(oe) {
          if (t.helpers.isURL(oe)) {
            var pe = null;
            return t.opts.linkAlwaysBlank && (t.opts.linkNoOpener && (pe ? pe += " noopener" : pe = "noopener"), t.opts.linkNoReferrer && (pe ? pe += " noreferrer" : pe = "noreferrer")), "<a".concat(t.opts.linkAlwaysBlank ? ' target="_blank"' : "").concat(pe ? ' rel="'.concat(pe, '"') : "", ' href="').concat(oe, '" >').concat(oe, "</a>");
          }
        });
      } };
    };
  });
})();
/*!
 * froala_editor v3.1.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
(function(Ie, Le) {
  (function(o, t) {
    t($e());
  })(ke, function(o) {
    o = o && o.hasOwnProperty("default") ? o.default : o, Object.assign(o.POPUP_TEMPLATES, { "video.insert": "[_BUTTONS_][_BY_URL_LAYER_][_EMBED_LAYER_][_UPLOAD_LAYER_][_PROGRESS_BAR_]", "video.edit": "[_BUTTONS_]", "video.size": "[_BUTTONS_][_SIZE_LAYER_]" }), Object.assign(o.DEFAULTS, { videoAllowedTypes: ["mp4", "webm", "ogg"], videoAllowedProviders: [".*"], videoDefaultAlign: "center", videoDefaultDisplay: "block", videoDefaultWidth: 600, videoEditButtons: ["videoReplace", "videoRemove", "videoDisplay", "videoAlign", "videoSize"], videoInsertButtons: ["videoBack", "|", "videoByURL", "videoEmbed", "videoUpload"], videoMaxSize: 52428800, videoMove: !0, videoResize: !0, videoResponsive: !1, videoSizeButtons: ["videoBack", "|"], videoSplitHTML: !1, videoTextNear: !0, videoUpload: !0, videoUploadMethod: "POST", videoUploadParam: "file", videoUploadParams: {}, videoUploadToS3: !1, videoUploadURL: null }), o.VIDEO_PROVIDERS = [{ test_regex: /^.*((youtu.be)|(youtube.com))\/((v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))?\??v?=?([^#\&\?]*).*/, url_regex: /(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/)?([0-9a-zA-Z_\-]+)(.+)?/g, url_text: "https://www.youtube.com/embed/$1?$2", html: '<iframe width="640" height="360" src="{url}&wmode=opaque" frameborder="0" allowfullscreen></iframe>', provider: "youtube" }, { test_regex: /^.*(?:vimeo.com)\/(?:channels(\/\w+\/)?|groups\/*\/videos\/\u200b\d+\/|video\/|)(\d+)(?:$|\/|\?)/, url_regex: /(?:https?:\/\/)?(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_\-]+)?(\/[a-zA-Z0-9_\-]+)?/i, url_text: "https://player.vimeo.com/video/$1", html: '<iframe width="640" height="360" src="{url}" frameborder="0" allowfullscreen></iframe>', provider: "vimeo" }, { test_regex: /^.+(dailymotion.com|dai.ly)\/(video|hub)?\/?([^_]+)[^#]*(#video=([^_&]+))?/, url_regex: /(?:https?:\/\/)?(?:www\.)?(?:dailymotion\.com|dai\.ly)\/(?:video|hub)?\/?(.+)/g, url_text: "https://www.dailymotion.com/embed/video/$1", html: '<iframe width="640" height="360" src="{url}" frameborder="0" allowfullscreen></iframe>', provider: "dailymotion" }, { test_regex: /^.+(screen.yahoo.com)\/[^_&]+/, url_regex: "", url_text: "", html: '<iframe width="640" height="360" src="{url}?format=embed" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" allowtransparency="true"></iframe>', provider: "yahoo" }, { test_regex: /^.+(rutube.ru)\/[^_&]+/, url_regex: /(?:https?:\/\/)?(?:www\.)?(?:rutube\.ru)\/(?:video)?\/?(.+)/g, url_text: "https://rutube.ru/play/embed/$1", html: '<iframe width="640" height="360" src="{url}" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" allowtransparency="true"></iframe>', provider: "rutube" }, { test_regex: /^(?:.+)vidyard.com\/(?:watch)?\/?([^.&/]+)\/?(?:[^_.&]+)?/, url_regex: /^(?:.+)vidyard.com\/(?:watch)?\/?([^.&/]+)\/?(?:[^_.&]+)?/g, url_text: "https://play.vidyard.com/$1", html: '<iframe width="640" height="360" src="{url}" frameborder="0" allowfullscreen></iframe>', provider: "vidyard" }], o.VIDEO_EMBED_REGEX = /^\W*((<iframe(.|\n)*>(\s|\n)*<\/iframe>)|(<embed(.|\n)*>))\W*$/i, o.PLUGINS.video = function(t) {
      var n, f, G, Y, ce, ue, ee = t.$, w = "https://i.froala.com/upload", oe = 2, pe = 3, te = 4, k = 5, F = 6, P = {};
      function Z() {
        var H = t.popups.get("video.insert");
        H.find(".fr-video-by-url-layer input").val("").trigger("change");
        var W = H.find(".fr-video-embed-layer textarea");
        W.val("").trigger("change"), (W = H.find(".fr-video-upload-layer input")).val("").trigger("change");
      }
      function le() {
        var H = t.popups.get("video.edit");
        if (H || (H = function() {
          var R = "";
          if (0 < t.opts.videoEditButtons.length) {
            t.opts.videoResponsive && (-1 < t.opts.videoEditButtons.indexOf("videoSize") && t.opts.videoEditButtons.splice(t.opts.videoEditButtons.indexOf("videoSize"), 1), -1 < t.opts.videoEditButtons.indexOf("videoDisplay") && t.opts.videoEditButtons.splice(t.opts.videoEditButtons.indexOf("videoDisplay"), 1), -1 < t.opts.videoEditButtons.indexOf("videoAlign") && t.opts.videoEditButtons.splice(t.opts.videoEditButtons.indexOf("videoAlign"), 1));
            var K = { buttons: R += `<div class="fr-buttons"> 
      `.concat(t.button.buildList(t.opts.videoEditButtons), ` 
      </div>`) }, V = t.popups.create("video.edit", K);
            return t.events.$on(t.$wp, "scroll.video-edit", function() {
              Y && t.popups.isVisible("video.edit") && (t.events.disableBlur(), E(Y));
            }), V;
          }
          return !1;
        }()), H) {
          t.popups.setContainer("video.edit", t.$sc), t.popups.refresh("video.edit");
          var W = Y.find("iframe, embed, video"), T = W.offset().left + W.outerWidth() / 2, S = W.offset().top + W.outerHeight();
          t.popups.show("video.edit", T, S, W.outerHeight(), !0);
        }
      }
      function he(H) {
        if (H)
          return t.popups.onRefresh("video.insert", Z), t.popups.onHide("video.insert", re), !0;
        var W = "";
        t.opts.videoUpload || t.opts.videoInsertButtons.indexOf("videoUpload") === -1 || t.opts.videoInsertButtons.splice(t.opts.videoInsertButtons.indexOf("videoUpload"), 1);
        var T = t.button.buildList(t.opts.videoInsertButtons);
        T !== "" && (W = '<div class="fr-buttons">' + T + "</div>");
        var S, L = "", R = t.opts.videoInsertButtons.indexOf("videoUpload"), K = t.opts.videoInsertButtons.indexOf("videoByURL"), V = t.opts.videoInsertButtons.indexOf("videoEmbed");
        0 <= K && (S = " fr-active", (R < K && 0 <= R || V < K && 0 <= V) && (S = ""), L = '<div class="fr-video-by-url-layer fr-layer'.concat(S, '" id="fr-video-by-url-layer-').concat(t.id, '"><div class="fr-input-line"><input id="fr-video-by-url-layer-text-').concat(t.id, '" type="text" placeholder="').concat(t.language.translate("Paste in a video URL"), '" tabIndex="1" aria-required="true"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="videoInsertByURL" tabIndex="2" role="button">').concat(t.language.translate("Insert"), "</button></div></div>"));
        var j = "";
        0 <= V && (S = " fr-active", (R < V && 0 <= R || K < V && 0 <= K) && (S = ""), j = '<div class="fr-video-embed-layer fr-layer'.concat(S, '" id="fr-video-embed-layer-').concat(t.id, '"><div class="fr-input-line"><textarea id="fr-video-embed-layer-text').concat(t.id, '" type="text" placeholder="').concat(t.language.translate("Embedded Code"), '" tabIndex="1" aria-required="true" rows="5"></textarea></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="videoInsertEmbed" tabIndex="2" role="button">').concat(t.language.translate("Insert"), "</button></div></div>"));
        var X = "";
        0 <= R && (S = " fr-active", (V < R && 0 <= V || K < R && 0 <= K) && (S = ""), X = '<div class="fr-video-upload-layer fr-layer'.concat(S, '" id="fr-video-upload-layer-').concat(t.id, '"><strong>').concat(t.language.translate("Drop video"), "</strong><br>(").concat(t.language.translate("or click"), ')<div class="fr-form"><input type="file" accept="video/').concat(t.opts.videoAllowedTypes.join(", video/").toLowerCase(), '" tabIndex="-1" aria-labelledby="fr-video-upload-layer-').concat(t.id, '" role="button"></div></div>'));
        var fe = { buttons: W, by_url_layer: L, embed_layer: j, upload_layer: X, progress_bar: '<div class="fr-video-progress-bar-layer fr-layer"><h3 tabIndex="-1" class="fr-message">Uploading</h3><div class="fr-loader"><span class="fr-progress"></span></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-dismiss" data-cmd="videoDismissError" tabIndex="2" role="button">OK</button></div></div>' }, ne = t.popups.create("video.insert", fe);
        return function(Ee) {
          t.events.$on(Ee, "dragover dragenter", ".fr-video-upload-layer", function() {
            return ee(this).addClass("fr-drop"), !1;
          }, !0), t.events.$on(Ee, "dragleave dragend", ".fr-video-upload-layer", function() {
            return ee(this).removeClass("fr-drop"), !1;
          }, !0), t.events.$on(Ee, "drop", ".fr-video-upload-layer", function(be) {
            be.preventDefault(), be.stopPropagation(), ee(this).removeClass("fr-drop");
            var Ae = be.originalEvent.dataTransfer;
            if (Ae && Ae.files) {
              var Te = Ee.data("instance") || t;
              Te.events.disableBlur(), Te.video.upload(Ae.files), Te.events.enableBlur();
            }
          }, !0), t.helpers.isIOS() && t.events.$on(Ee, "touchstart", '.fr-video-upload-layer input[type="file"]', function() {
            ee(this).trigger("click");
          }, !0), t.events.$on(Ee, "change", '.fr-video-upload-layer input[type="file"]', function() {
            if (this.files) {
              var be = Ee.data("instance") || t;
              be.events.disableBlur(), Ee.find("input:focus").blur(), be.events.enableBlur(), be.video.upload(this.files);
            }
            ee(this).val("");
          }, !0);
        }(ne), ne;
      }
      function ge(H) {
        t.events.focus(!0), t.selection.restore();
        var W = !1;
        Y && (Q(), W = !0), t.html.insert('<span contenteditable="false" draggable="true" class="fr-jiv fr-video fr-deletable">'.concat(H, "</span>"), !1, t.opts.videoSplitHTML), t.popups.hide("video.insert");
        var T = t.$el.find(".fr-jiv");
        T.removeClass("fr-jiv"), T.toggleClass("fr-rv", t.opts.videoResponsive), q(T, t.opts.videoDefaultDisplay, t.opts.videoDefaultAlign), T.toggleClass("fr-draggable", t.opts.videoMove), t.events.trigger(W ? "video.replaced" : "video.inserted", [T]);
      }
      function e() {
        var H = ee(this);
        t.popups.hide("video.insert"), H.removeClass("fr-uploading"), H.parent().next().is("br") && H.parent().next().remove(), E(H.parent()), t.events.trigger("video.loaded", [H.parent()]);
      }
      function r(H, W, T, S, L) {
        t.edit.off(), u("Loading video"), W && (H = t.helpers.sanitizeURL(H));
        var R = function() {
          var V, j;
          if (S) {
            t.undo.canDo() || S.find("video").hasClass("fr-uploading") || t.undo.saveStep();
            var X = S.find("video").data("fr-old-src"), fe = S.data("fr-replaced");
            S.data("fr-replaced", !1), t.$wp ? ((V = S.clone(!0)).find("video").removeData("fr-old-src").removeClass("fr-uploading"), V.find("video").off("canplay"), X && S.find("video").attr("src", X), S.replaceWith(V)) : V = S;
            for (var ne = V.find("video").get(0).attributes, ve = 0; ve < ne.length; ve++) {
              var Ee = ne[ve];
              Ee.nodeName.indexOf("data-") === 0 && V.find("video").removeAttr(Ee.nodeName);
            }
            if (T !== void 0)
              for (j in T)
                T.hasOwnProperty(j) && j != "link" && V.find("video").attr("data-".concat(j), T[j]);
            V.find("video").on("canplay", e), V.find("video").attr("src", H), t.edit.on(), v(), t.undo.saveStep(), t.$el.blur(), t.events.trigger(fe ? "video.replaced" : "video.inserted", [V, L]);
          } else
            V = function(Ae, Te, xe) {
              var Oe, De = "";
              if (Te && Te !== void 0)
                for (Oe in Te)
                  Te.hasOwnProperty(Oe) && Oe != "link" && (De += " data-".concat(Oe, '="').concat(Te[Oe], '"'));
              var Re = t.opts.videoDefaultWidth;
              Re && Re != "auto" && (Re = "".concat(Re, "px"));
              var Se = ee(document.createElement("span")).attr("contenteditable", "false").attr("draggable", "true").attr("class", "fr-video fr-dv" + t.opts.videoDefaultDisplay[0] + (t.opts.videoDefaultAlign != "center" ? " fr-fv" + t.opts.videoDefaultAlign[0] : "")).html('<video src="' + Ae + '" ' + De + (Re ? ' style="width: ' + Re + ';" ' : "") + " controls>" + t.language.translate("Your browser does not support HTML5 video.") + "</video>");
              Se.toggleClass("fr-draggable", t.opts.videoMove), t.edit.on(), t.events.focus(!0), t.selection.restore(), t.undo.saveStep(), t.opts.videoSplitHTML ? t.markers.split() : t.markers.insert(), t.html.wrap();
              var Ne = t.$el.find(".fr-marker");
              return t.node.isLastSibling(Ne) && Ne.parent().hasClass("fr-deletable") && Ne.insertAfter(Ne.parent()), Ne.replaceWith(Se), t.selection.clear(), Se.find("video").get(0).readyState > Se.find("video").get(0).HAVE_FUTURE_DATA || t.helpers.isIOS() ? xe.call(Se.find("video").get(0)) : Se.find("video").on("canplaythrough load", xe), Se;
            }(H, T, e), v(), t.undo.saveStep(), t.events.trigger("video.inserted", [V, L]);
        };
        s("Loading video"), R();
      }
      function s(H) {
        var W = t.popups.get("video.insert");
        if (W || (W = he()), W.find(".fr-layer.fr-active").removeClass("fr-active").addClass("fr-pactive"), W.find(".fr-video-progress-bar-layer").addClass("fr-active"), W.find(".fr-buttons").hide(), Y) {
          var T = Y.find("video");
          t.popups.setContainer("video.insert", t.$sc);
          var S = T.offset().left, L = T.offset().top + T.height();
          t.popups.show("video.insert", S, L, T.outerHeight());
        }
        H === void 0 && u(t.language.translate("Uploading"), 0);
      }
      function d(H) {
        var W = t.popups.get("video.insert");
        if (W && (W.find(".fr-layer.fr-pactive").addClass("fr-active").removeClass("fr-pactive"), W.find(".fr-video-progress-bar-layer").removeClass("fr-active"), W.find(".fr-buttons").show(), H || t.$el.find("video.fr-error").length)) {
          if (t.events.focus(), t.$el.find("video.fr-error").length && (t.$el.find("video.fr-error").parent().remove(), t.undo.saveStep(), t.undo.run(), t.undo.dropRedo()), !t.$wp && Y) {
            var T = Y;
            i(!0), t.selection.setAfter(T.find("video").get(0)), t.selection.restore();
          }
          t.popups.hide("video.insert");
        }
      }
      function u(H, W) {
        var T = t.popups.get("video.insert");
        if (T) {
          var S = T.find(".fr-video-progress-bar-layer");
          S.find("h3").text(H + (W ? " ".concat(W, "%") : "")), S.removeClass("fr-error"), W ? (S.find("div").removeClass("fr-indeterminate"), S.find("div > span").css("width", "".concat(W, "%"))) : S.find("div").addClass("fr-indeterminate");
        }
      }
      function b(H) {
        s();
        var W = t.popups.get("video.insert").find(".fr-video-progress-bar-layer");
        W.addClass("fr-error");
        var T = W.find("h3");
        T.text(H), t.events.disableBlur(), T.focus();
      }
      function E(H) {
        l.call(H.get(0));
      }
      function g(H) {
        u("Loading video");
        var W = this.status, T = this.response, S = this.responseXML, L = this.responseText;
        try {
          if (t.opts.videoUploadToS3)
            if (W == 201) {
              var R = function(j) {
                try {
                  var X = ee(j).find("Location").text(), fe = ee(j).find("Key").text();
                  return t.events.trigger("video.uploadedToS3", [X, fe, j], !0) === !1 ? (t.edit.on(), !1) : X;
                } catch {
                  return M(te, j), !1;
                }
              }(S);
              R && r(R, !1, [], H, T || S);
            } else
              M(te, T || S);
          else if (200 <= W && W < 300) {
            var K = function(j) {
              try {
                if (t.events.trigger("video.uploaded", [j], !0) === !1)
                  return t.edit.on(), !1;
                var X = JSON.parse(j);
                return X.link ? X : (M(oe, j), !1);
              } catch {
                return M(te, j), !1;
              }
            }(L);
            K && r(K.link, !1, K, H, T || L);
          } else
            M(pe, T || L);
        } catch {
          M(te, T || L);
        }
      }
      function m() {
        M(te, this.response || this.responseText || this.responseXML);
      }
      function C(H) {
        if (H.lengthComputable) {
          var W = H.loaded / H.total * 100 | 0;
          u(t.language.translate("Uploading"), W);
        }
      }
      function O() {
        t.edit.on(), d(!0);
      }
      function U(H) {
        if (!t.core.sameInstance(G))
          return !0;
        H.preventDefault(), H.stopPropagation();
        var W = H.pageX || (H.originalEvent.touches ? H.originalEvent.touches[0].pageX : null), T = H.pageY || (H.originalEvent.touches ? H.originalEvent.touches[0].pageY : null);
        if (!W || !T)
          return !1;
        if (H.type == "mousedown") {
          var S = t.$oel.get(0).ownerDocument, L = S.defaultView || S.parentWindow, R = !1;
          try {
            R = L.location != L.parent.location && !(L.$ && L.$.FE);
          } catch {
          }
          R && L.frameElement && (W += t.helpers.getPX(ee(L.frameElement).offset().left) + L.frameElement.clientLeft, T = H.clientY + t.helpers.getPX(ee(L.frameElement).offset().top) + L.frameElement.clientTop);
        }
        t.undo.canDo() || t.undo.saveStep(), (f = ee(this)).data("start-x", W), f.data("start-y", T), n.show(), t.popups.hideAll(), p();
      }
      function y(H) {
        if (!t.core.sameInstance(G))
          return !0;
        if (f) {
          H.preventDefault();
          var W = H.pageX || (H.originalEvent.touches ? H.originalEvent.touches[0].pageX : null), T = H.pageY || (H.originalEvent.touches ? H.originalEvent.touches[0].pageY : null);
          if (!W || !T)
            return !1;
          var S = f.data("start-x"), L = f.data("start-y");
          f.data("start-x", W), f.data("start-y", T);
          var R = W - S, K = T - L, V = Y.find("iframe, embed, video"), j = V.width(), X = V.height();
          (f.hasClass("fr-hnw") || f.hasClass("fr-hsw")) && (R = 0 - R), (f.hasClass("fr-hnw") || f.hasClass("fr-hne")) && (K = 0 - K), V.css("width", j + R), V.css("height", X + K), V.removeAttr("width"), V.removeAttr("height"), A();
        }
      }
      function B(H) {
        if (!t.core.sameInstance(G))
          return !0;
        f && Y && (H && H.stopPropagation(), f = null, n.hide(), A(), le(), t.undo.saveStep());
      }
      function I(H) {
        return '<div class="fr-handler fr-h'.concat(H, '"></div>');
      }
      function x(H, W, T, S) {
        return H.pageX = W, H.pageY = W, U.call(this, H), H.pageX = H.pageX + T * Math.floor(Math.pow(1.1, S)), H.pageY = H.pageY + T * Math.floor(Math.pow(1.1, S)), y.call(this, H), B.call(this, H), ++S;
      }
      function v() {
        var H, W = Array.prototype.slice.call(t.el.querySelectorAll("video, .fr-video > *")), T = [];
        for (H = 0; H < W.length; H++)
          T.push(W[H].getAttribute("src")), ee(W[H]).toggleClass("fr-draggable", t.opts.videoMove), W[H].getAttribute("class") === "" && W[H].removeAttribute("class"), W[H].getAttribute("style") === "" && W[H].removeAttribute("style");
        if (ce)
          for (H = 0; H < ce.length; H++)
            T.indexOf(ce[H].getAttribute("src")) < 0 && t.events.trigger("video.removed", [ee(ce[H])]);
        ce = W;
      }
      function A() {
        G || function() {
          var L;
          if (t.shared.$video_resizer ? (G = t.shared.$video_resizer, n = t.shared.$vid_overlay, t.events.on("destroy", function() {
            ee("body").first().append(G.removeClass("fr-active"));
          }, !0)) : (t.shared.$video_resizer = ee(document.createElement("div")).attr("class", "fr-video-resizer"), G = t.shared.$video_resizer, t.events.$on(G, "mousedown", function(j) {
            j.stopPropagation();
          }, !0), t.opts.videoResize && (G.append(I("nw") + I("ne") + I("sw") + I("se")), t.shared.$vid_overlay = ee(document.createElement("div")).attr("class", "fr-video-overlay"), n = t.shared.$vid_overlay, L = G.get(0).ownerDocument, ee(L).find("body").first().append(n))), t.events.on("shared.destroy", function() {
            G.html("").removeData().remove(), G = null, t.opts.videoResize && (n.remove(), n = null);
          }, !0), t.helpers.isMobile() || t.events.$on(ee(t.o_win), "resize.video", function() {
            i(!0);
          }), t.opts.videoResize) {
            L = G.get(0).ownerDocument, t.events.$on(G, t._mousedown, ".fr-handler", U), t.events.$on(ee(L), t._mousemove, y), t.events.$on(ee(L.defaultView || L.parentWindow), t._mouseup, B), t.events.$on(n, "mouseleave", B);
            var R = 1, K = null, V = 0;
            t.events.on("keydown", function(j) {
              if (Y) {
                var X = navigator.userAgent.indexOf("Mac OS X") != -1 ? j.metaKey : j.ctrlKey, fe = j.which;
                (fe !== K || 200 < j.timeStamp - V) && (R = 1), (fe == o.KEYCODE.EQUALS || t.browser.mozilla && fe == o.KEYCODE.FF_EQUALS) && X && !j.altKey ? R = x.call(this, j, 1, 1, R) : (fe == o.KEYCODE.HYPHEN || t.browser.mozilla && fe == o.KEYCODE.FF_HYPHEN) && X && !j.altKey && (R = x.call(this, j, 2, -1, R)), K = fe, V = j.timeStamp;
              }
            }), t.events.on("keyup", function() {
              R = 1;
            });
          }
        }(), (t.$wp || t.$sc).append(G), G.data("instance", t);
        var H = Y.find("iframe, embed, video"), W = 0, T = 0;
        t.opts.iframe && (T = t.helpers.getPX(t.$wp.find(".fr-iframe").css("padding-top")), W = t.helpers.getPX(t.$wp.find(".fr-iframe").css("padding-left"))), G.css("top", (t.opts.iframe ? H.offset().top + T - 1 : H.offset().top - t.$wp.offset().top - 1) + t.$wp.scrollTop()).css("left", (t.opts.iframe ? H.offset().left + W - 1 : H.offset().left - t.$wp.offset().left - 1) + t.$wp.scrollLeft()).css("width", H.get(0).getBoundingClientRect().width).css("height", H.get(0).getBoundingClientRect().height).addClass("fr-active");
      }
      function l(H) {
        if (H && H.type == "touchend" && ue)
          return !0;
        if (H && t.edit.isDisabled())
          return H.stopPropagation(), H.preventDefault(), !1;
        if (t.edit.isDisabled())
          return !1;
        for (var W = 0; W < o.INSTANCES.length; W++)
          o.INSTANCES[W] != t && o.INSTANCES[W].events.trigger("video.hideResizer");
        t.toolbar.disable(), t.helpers.isMobile() && (t.events.disableBlur(), t.$el.blur(), t.events.enableBlur()), t.$el.find(".fr-video.fr-active").removeClass("fr-active"), (Y = ee(this)).addClass("fr-active"), t.opts.iframe && t.size.syncIframe(), se(), A(), le(), t.selection.clear(), t.button.bulkRefresh(), t.events.trigger("image.hideResizer");
      }
      function i(H) {
        Y && (function() {
          return t.shared.vid_exit_flag;
        }() || H === !0) && (G.removeClass("fr-active"), t.toolbar.enable(), Y.removeClass("fr-active"), Y = null, p());
      }
      function a() {
        t.shared.vid_exit_flag = !0;
      }
      function p() {
        t.shared.vid_exit_flag = !1;
      }
      function c(H) {
        var W = H.originalEvent.dataTransfer;
        if (W && W.files && W.files.length) {
          var T = W.files[0];
          if (T && T.type && T.type.indexOf("video") !== -1) {
            if (!t.opts.videoUpload)
              return H.preventDefault(), H.stopPropagation(), !1;
            t.markers.remove(), t.markers.insertAtPoint(H.originalEvent), t.$el.find(".fr-marker").replaceWith(o.MARKERS), t.popups.hideAll();
            var S = t.popups.get("video.insert");
            return S || (S = he()), t.popups.setContainer("video.insert", t.$sc), t.popups.show("video.insert", H.originalEvent.pageX, H.originalEvent.pageY), s(), 0 <= t.opts.videoAllowedTypes.indexOf(T.type.replace(/video\//g, "")) ? h(W.files) : M(F), H.preventDefault(), H.stopPropagation(), !1;
          }
        }
      }
      function h(H) {
        if (H !== void 0 && 0 < H.length) {
          if (t.events.trigger("video.beforeUpload", [H]) === !1)
            return !1;
          var W, T = H[0];
          if ((t.opts.videoUploadURL === null || t.opts.videoUploadURL == w) && !t.opts.videoUploadToS3)
            return function(j) {
              Y && Y.find("iframe") && Y.find("iframe").length && Q();
              var X = new FileReader();
              X.onload = function() {
                X.result;
                for (var fe = atob(X.result.split(",")[1]), ne = [], ve = 0; ve < fe.length; ve++)
                  ne.push(fe.charCodeAt(ve));
                r(window.URL.createObjectURL(new Blob([new Uint8Array(ne)], { type: j.type })), !1, null, Y);
              }, s(), X.readAsDataURL(j);
            }(T), !1;
          if (T.size > t.opts.videoMaxSize)
            return M(k), !1;
          if (t.opts.videoAllowedTypes.indexOf(T.type.replace(/video\//g, "")) < 0)
            return M(F), !1;
          if (t.drag_support.formdata && (W = t.drag_support.formdata ? new FormData() : null), W) {
            var S;
            if (t.opts.videoUploadToS3 !== !1)
              for (S in W.append("key", t.opts.videoUploadToS3.keyStart + new Date().getTime() + "-" + (T.name || "untitled")), W.append("success_action_status", "201"), W.append("X-Requested-With", "xhr"), W.append("Content-Type", T.type), t.opts.videoUploadToS3.params)
                t.opts.videoUploadToS3.params.hasOwnProperty(S) && W.append(S, t.opts.videoUploadToS3.params[S]);
            for (S in t.opts.videoUploadParams)
              t.opts.videoUploadParams.hasOwnProperty(S) && W.append(S, t.opts.videoUploadParams[S]);
            W.append(t.opts.videoUploadParam, T);
            var L = t.opts.videoUploadURL;
            t.opts.videoUploadToS3 && (L = t.opts.videoUploadToS3.uploadURL ? t.opts.videoUploadToS3.uploadURL : "https://".concat(t.opts.videoUploadToS3.region, ".amazonaws.com/").concat(t.opts.videoUploadToS3.bucket));
            var R = t.core.getXHR(L, t.opts.videoUploadMethod);
            R.onload = function() {
              g.call(R, Y);
            }, R.onerror = m, R.upload.onprogress = C, R.onabort = O, s(), t.events.disableBlur(), t.edit.off(), t.events.enableBlur();
            var K = t.popups.get("video.insert");
            K && ee(K.off("abortUpload")).on("abortUpload", function() {
              R.readyState != 4 && R.abort();
            }), R.send(W);
          }
        }
      }
      function M(H, W) {
        t.edit.on(), Y && Y.find("video").addClass("fr-error"), b(t.language.translate("Something went wrong. Please try again.")), t.events.trigger("video.error", [{ code: H, message: P[H] }, W]);
      }
      function N() {
        if (Y) {
          var H = t.popups.get("video.size"), W = Y.find("iframe, embed, video");
          H.find('input[name="width"]').val(W.get(0).style.width || W.attr("width")).trigger("change"), H.find('input[name="height"]').val(W.get(0).style.height || W.attr("height")).trigger("change");
        }
      }
      function ie(H) {
        if (H)
          return t.popups.onRefresh("video.size", N), !0;
        var W = { buttons: '<div class="fr-buttons fr-tabs">'.concat(t.button.buildList(t.opts.videoSizeButtons), "</div>"), size_layer: '<div class="fr-video-size-layer fr-layer fr-active" id="fr-video-size-layer-'.concat(t.id, '"><div class="fr-video-group"><div class="fr-input-line"><input id="fr-video-size-layer-width-').concat(t.id, '" type="text" name="width" placeholder="').concat(t.language.translate("Width"), '" tabIndex="1"></div><div class="fr-input-line"><input id="fr-video-size-layer-height-').concat(t.id, '" type="text" name="height" placeholder="').concat(t.language.translate("Height"), '" tabIndex="1"></div></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="videoSetSize" tabIndex="2" role="button">').concat(t.language.translate("Update"), "</button></div></div>") }, T = t.popups.create("video.size", W);
        return t.events.$on(t.$wp, "scroll", function() {
          Y && t.popups.isVisible("video.size") && (t.events.disableBlur(), E(Y));
        }), T;
      }
      function D(H) {
        if (H === void 0 && (H = Y), H) {
          if (H.hasClass("fr-fvl"))
            return "left";
          if (H.hasClass("fr-fvr"))
            return "right";
          if (H.hasClass("fr-dvb") || H.hasClass("fr-dvi"))
            return "center";
          if (H.css("display") == "block") {
            if (H.css("text-algin") == "left")
              return "left";
            if (H.css("text-align") == "right")
              return "right";
          } else {
            if (H.css("float") == "left")
              return "left";
            if (H.css("float") == "right")
              return "right";
          }
        }
        return "center";
      }
      function _(H) {
        H === void 0 && (H = Y);
        var W = H.css("float");
        return H.css("float", "none"), H.css("display") == "block" ? (H.css("float", ""), H.css("float") != W && H.css("float", W), "block") : (H.css("float", ""), H.css("float") != W && H.css("float", W), "inline");
      }
      function Q() {
        if (Y && t.events.trigger("video.beforeRemove", [Y]) !== !1) {
          var H = Y;
          t.popups.hideAll(), i(!0), t.selection.setBefore(H.get(0)) || t.selection.setAfter(H.get(0)), H.remove(), t.selection.restore(), t.html.fillEmptyBlocks();
        }
      }
      function re() {
        d();
      }
      function q(H, W, T) {
        !t.opts.htmlUntouched && t.opts.useClasses ? (H.removeClass("fr-fvl fr-fvr fr-dvb fr-dvi"), H.addClass("fr-fv".concat(T[0], " fr-dv").concat(W[0]))) : W == "inline" ? (H.css({ display: "inline-block" }), T == "center" ? H.css({ float: "none" }) : T == "left" ? H.css({ float: "left" }) : H.css({ float: "right" })) : (H.css({ display: "block", clear: "both" }), T == "left" ? H.css({ textAlign: "left" }) : T == "right" ? H.css({ textAlign: "right" }) : H.css({ textAlign: "center" }));
      }
      function ae() {
        var H = t.$el.find("video").filter(function() {
          return ee(this).parents("span.fr-video").length === 0;
        });
        if (H.length != 0) {
          H.wrap(ee(document.createElement("span")).attr("class", "fr-video fr-deletable").attr("contenteditable", "false")), t.$el.find("embed, iframe").filter(function() {
            if (t.browser.safari && this.getAttribute("src") && this.setAttribute("src", this.src), 0 < ee(this).parents("span.fr-video").length)
              return !1;
            for (var j = ee(this).attr("src"), X = 0; X < o.VIDEO_PROVIDERS.length; X++) {
              var fe = o.VIDEO_PROVIDERS[X];
              if (fe.test_regex.test(j) && new RegExp(t.opts.videoAllowedProviders.join("|")).test(fe.provider))
                return !0;
            }
            return !1;
          }).map(function() {
            return ee(this).parents("object").length === 0 ? this : ee(this).parents("object").get(0);
          }).wrap(ee(document.createElement("span")).attr("class", "fr-video").attr("contenteditable", "false"));
          for (var W, T, S, L, R = t.$el.find("span.fr-video, video"), K = 0; K < R.length; K++) {
            var V = ee(R[K]);
            !t.opts.htmlUntouched && t.opts.useClasses ? ((L = V).hasClass("fr-dvi") || L.hasClass("fr-dvb") || (L.addClass("fr-fv".concat(D(L)[0])), L.addClass("fr-dv".concat(_(L)[0]))), t.opts.videoTextNear || V.removeClass("fr-dvi").addClass("fr-dvb")) : t.opts.htmlUntouched || t.opts.useClasses || (T = (W = V).hasClass("fr-dvb") ? "block" : W.hasClass("fr-dvi") ? "inline" : null, S = W.hasClass("fr-fvl") ? "left" : W.hasClass("fr-fvr") ? "right" : D(W), q(W, T, S), W.removeClass("fr-dvb fr-dvi fr-fvr fr-fvl"));
          }
          R.toggleClass("fr-draggable", t.opts.videoMove);
        }
      }
      function se() {
        if (Y) {
          t.selection.clear();
          var H = t.doc.createRange();
          H.selectNode(Y.get(0)), t.selection.get().addRange(H);
        }
      }
      return P[1] = "Video cannot be loaded from the passed link.", P[oe] = "No link in upload response.", P[pe] = "Error during file upload.", P[te] = "Parsing response failed.", P[k] = "File is too large.", P[F] = "Video file type is invalid.", P[7] = "Files can be uploaded only to same domain in IE 8 and IE 9.", t.shared.vid_exit_flag = !1, { _init: function() {
        t.opts.videoResponsive && (t.opts.videoResize = !1), function() {
          t.events.on("drop", c, !0), t.events.on("mousedown window.mousedown", a), t.events.on("window.touchmove", p), t.events.on("mouseup window.mouseup", i), t.events.on("commands.mousedown", function(T) {
            0 < T.parents(".fr-toolbar").length && i();
          }), t.events.on("video.hideResizer commands.undo commands.redo element.dropped", function() {
            i(!0);
          });
        }(), t.helpers.isMobile() && (t.events.$on(t.$el, "touchstart", "span.fr-video", function() {
          ue = !1;
        }), t.events.$on(t.$el, "touchmove", function() {
          ue = !0;
        })), t.events.on("html.set", ae), ae(), t.events.$on(t.$el, "mousedown", "span.fr-video", function(W) {
          W.stopPropagation(), (t.browser.msie || t.browser.edge) && (W.target.innerText || (W.target.dragDrop(), l.call(this, W)));
        }), t.events.$on(t.$el, "click touchend", "span.fr-video", function(W) {
          if (W.target.innerText.length || ee(this).parents("[contenteditable]").not(".fr-element").not(".fr-img-caption").not("body").first().attr("contenteditable") == "false")
            return !0;
          l.call(this, W);
        }), t.events.on("keydown", function(W) {
          var T = W.which;
          return !Y || T != o.KEYCODE.BACKSPACE && T != o.KEYCODE.DELETE ? Y && T == o.KEYCODE.ESC ? (i(!0), W.preventDefault(), !1) : Y && T != o.KEYCODE.F10 && !t.keys.isBrowserAction(W) ? (W.preventDefault(), !1) : void 0 : (W.preventDefault(), Q(), t.undo.saveStep(), !1);
        }, !0), t.events.on("toolbar.esc", function() {
          if (Y)
            return t.events.disableBlur(), t.events.focus(), !1;
        }, !0), t.events.on("toolbar.focusEditor", function() {
          if (Y)
            return !1;
        }, !0), t.events.on("keydown", function() {
          t.$el.find("span.fr-video:empty").remove();
        }), t.$wp && (v(), t.events.on("contentChanged", v)), he(!0), ie(!0);
      }, showInsertPopup: function() {
        var W = t.$tb.find('.fr-command[data-cmd="insertVideo"]'), T = t.popups.get("video.insert");
        if (T || (T = he()), d(), !T.hasClass("fr-active"))
          if (t.popups.refresh("video.insert"), t.popups.setContainer("video.insert", t.$tb), W.isVisible()) {
            var S = t.button.getPosition(W), L = S.left, R = S.top;
            t.popups.show("video.insert", L, R, W.outerHeight());
          } else
            t.position.forSelection(T), t.popups.show("video.insert");
      }, showLayer: function(W) {
        var T, S, L = t.popups.get("video.insert");
        if (!Y && !t.opts.toolbarInline) {
          var R = t.$tb.find('.fr-command[data-cmd="insertVideo"]');
          T = R.offset().left, S = R.offset().top + (t.opts.toolbarBottom ? 10 : R.outerHeight() - 10);
        }
        t.opts.toolbarInline && (S = L.offset().top - t.helpers.getPX(L.css("margin-top")), L.hasClass("fr-above") && (S += L.outerHeight())), L.find(".fr-layer").removeClass("fr-active"), L.find(".fr-".concat(W, "-layer")).addClass("fr-active"), t.popups.show("video.insert", T, S, 0), t.accessibility.focusPopup(L);
      }, refreshByURLButton: function(W) {
        var T = t.popups.get("video.insert");
        T && T.find(".fr-video-by-url-layer").hasClass("fr-active") && W.addClass("fr-active").attr("aria-pressed", !0);
      }, refreshEmbedButton: function(W) {
        var T = t.popups.get("video.insert");
        T && T.find(".fr-video-embed-layer").hasClass("fr-active") && W.addClass("fr-active").attr("aria-pressed", !0);
      }, refreshUploadButton: function(W) {
        var T = t.popups.get("video.insert");
        T && T.find(".fr-video-upload-layer").hasClass("fr-active") && W.addClass("fr-active").attr("aria-pressed", !0);
      }, upload: h, insertByURL: function(W) {
        W === void 0 && (W = (t.popups.get("video.insert").find('.fr-video-by-url-layer input[type="text"]').val() || "").trim());
        var T = null;
        if (/^http/.test(W) || (W = "https://".concat(W)), t.helpers.isURL(W))
          for (var S = 0; S < o.VIDEO_PROVIDERS.length; S++) {
            var L = o.VIDEO_PROVIDERS[S];
            if (L.test_regex.test(W) && new RegExp(t.opts.videoAllowedProviders.join("|")).test(L.provider)) {
              T = W.replace(L.url_regex, L.url_text), T = L.html.replace(/\{url\}/, T);
              break;
            }
          }
        T ? ge(T) : (b(t.language.translate("Something went wrong. Please try again.")), t.events.trigger("video.linkError", [W]));
      }, insertEmbed: function(W) {
        W === void 0 && (W = t.popups.get("video.insert").find(".fr-video-embed-layer textarea").val() || ""), W.length !== 0 && o.VIDEO_EMBED_REGEX.test(W) ? ge(W) : (b(t.language.translate("Something went wrong. Please try again.")), t.events.trigger("video.codeError", [W]));
      }, insert: ge, align: function(W) {
        Y.removeClass("fr-fvr fr-fvl"), !t.opts.htmlUntouched && t.opts.useClasses ? W == "left" ? Y.addClass("fr-fvl") : W == "right" && Y.addClass("fr-fvr") : q(Y, _(), W), se(), A(), le(), t.selection.clear();
      }, refreshAlign: function(W) {
        if (!Y)
          return !1;
        W.find(">*").first().replaceWith(t.icon.create("video-align-".concat(D())));
      }, refreshAlignOnShow: function(W, T) {
        Y && T.find('.fr-command[data-param1="'.concat(D(), '"]')).addClass("fr-active").attr("aria-selected", !0);
      }, display: function(W) {
        Y.removeClass("fr-dvi fr-dvb"), !t.opts.htmlUntouched && t.opts.useClasses ? W == "inline" ? Y.addClass("fr-dvi") : W == "block" && Y.addClass("fr-dvb") : q(Y, W, D()), se(), A(), le(), t.selection.clear();
      }, refreshDisplayOnShow: function(W, T) {
        Y && T.find('.fr-command[data-param1="'.concat(_(), '"]')).addClass("fr-active").attr("aria-selected", !0);
      }, remove: Q, hideProgressBar: d, showSizePopup: function() {
        var W = t.popups.get("video.size");
        W || (W = ie()), d(), t.popups.refresh("video.size"), t.popups.setContainer("video.size", t.$sc);
        var T = Y.find("iframe, embed, video"), S = T.offset().left + T.outerWidth() / 2, L = T.offset().top + T.height();
        t.popups.show("video.size", S, L, T.height(), !0);
      }, replace: function() {
        var W = t.popups.get("video.insert");
        W || (W = he()), t.popups.isVisible("video.insert") || (d(), t.popups.refresh("video.insert"), t.popups.setContainer("video.insert", t.$sc));
        var T = Y.offset().left + Y.outerWidth() / 2, S = Y.offset().top + Y.height();
        t.popups.show("video.insert", T, S, Y.outerHeight(), !0);
      }, back: function() {
        Y ? (t.events.disableBlur(), Y[0].click()) : (t.events.disableBlur(), t.selection.restore(), t.events.enableBlur(), t.popups.hide("video.insert"), t.toolbar.showInline());
      }, setSize: function(W, T) {
        if (Y) {
          var S = t.popups.get("video.size"), L = Y.find("iframe, embed, video");
          L.css("width", W || S.find('input[name="width"]').val()), L.css("height", T || S.find('input[name="height"]').val()), L.get(0).style.width && L.removeAttr("width"), L.get(0).style.height && L.removeAttr("height"), S.find("input:focus").blur(), setTimeout(function() {
            Y.trigger("click");
          }, t.helpers.isAndroid() ? 50 : 0);
        }
      }, get: function() {
        return Y;
      }, showProgressBar: s };
    }, o.RegisterCommand("insertVideo", { title: "Insert Video", undo: !1, focus: !0, refreshAfterCallback: !1, popup: !0, callback: function() {
      this.popups.isVisible("video.insert") ? (this.$el.find(".fr-marker").length && (this.events.disableBlur(), this.selection.restore()), this.popups.hide("video.insert")) : this.video.showInsertPopup();
    }, plugin: "video" }), o.DefineIcon("insertVideo", { NAME: "video-camera", FA5NAME: "camera", SVG_KEY: "insertVideo" }), o.DefineIcon("videoByURL", { NAME: "link", SVG_KEY: "insertLink" }), o.RegisterCommand("videoByURL", { title: "By URL", undo: !1, focus: !1, toggle: !0, callback: function() {
      this.video.showLayer("video-by-url");
    }, refresh: function(t) {
      this.video.refreshByURLButton(t);
    } }), o.DefineIcon("videoEmbed", { NAME: "code", SVG_KEY: "codeView" }), o.RegisterCommand("videoEmbed", { title: "Embedded Code", undo: !1, focus: !1, toggle: !0, callback: function() {
      this.video.showLayer("video-embed");
    }, refresh: function(t) {
      this.video.refreshEmbedButton(t);
    } }), o.DefineIcon("videoUpload", { NAME: "upload", SVG_KEY: "upload" }), o.RegisterCommand("videoUpload", { title: "Upload Video", undo: !1, focus: !1, toggle: !0, callback: function() {
      this.video.showLayer("video-upload");
    }, refresh: function(t) {
      this.video.refreshUploadButton(t);
    } }), o.RegisterCommand("videoInsertByURL", { undo: !0, focus: !0, callback: function() {
      this.video.insertByURL();
    } }), o.RegisterCommand("videoInsertEmbed", { undo: !0, focus: !0, callback: function() {
      this.video.insertEmbed();
    } }), o.DefineIcon("videoDisplay", { NAME: "star", SVG_KEY: "star" }), o.RegisterCommand("videoDisplay", { title: "Display", type: "dropdown", options: { inline: "Inline", block: "Break Text" }, callback: function(t, n) {
      this.video.display(n);
    }, refresh: function(t) {
      this.opts.videoTextNear || t.addClass("fr-hidden");
    }, refreshOnShow: function(t, n) {
      this.video.refreshDisplayOnShow(t, n);
    } }), o.DefineIcon("video-align", { NAME: "align-left", SVG_KEY: "align Left" }), o.DefineIcon("video-align-left", { NAME: "align-left", SVG_KEY: "alignLeft" }), o.DefineIcon("video-align-right", { NAME: "align-right", SVG_KEY: "alignRight" }), o.DefineIcon("video-align-center", { NAME: "align-justify", SVG_KEY: "alignJustify" }), o.DefineIcon("videoAlign", { NAME: "align-center", SVG_KEY: "alignCenter" }), o.RegisterCommand("videoAlign", { type: "dropdown", title: "Align", options: { left: "Align Left", center: "None", right: "Align Right" }, html: function() {
      var t = '<ul class="fr-dropdown-list" role="presentation">', n = o.COMMANDS.videoAlign.options;
      for (var f in n)
        n.hasOwnProperty(f) && (t += '<li role="presentation"><a class="fr-command fr-title" tabIndex="-1" role="option" data-cmd="videoAlign" data-param1="'.concat(f, '" title="').concat(this.language.translate(n[f]), '">').concat(this.icon.create("video-align-".concat(f)), '<span class="fr-sr-only">').concat(this.language.translate(n[f]), "</span></a></li>"));
      return t += "</ul>";
    }, callback: function(t, n) {
      this.video.align(n);
    }, refresh: function(t) {
      this.video.refreshAlign(t);
    }, refreshOnShow: function(t, n) {
      this.video.refreshAlignOnShow(t, n);
    } }), o.DefineIcon("videoReplace", { NAME: "exchange", FA5NAME: "exchange-alt", SVG_KEY: "replaceImage" }), o.RegisterCommand("videoReplace", { title: "Replace", undo: !1, focus: !1, popup: !0, refreshAfterCallback: !1, callback: function() {
      this.video.replace();
    } }), o.DefineIcon("videoRemove", { NAME: "trash", SVG_KEY: "remove" }), o.RegisterCommand("videoRemove", { title: "Remove", callback: function() {
      this.video.remove();
    } }), o.DefineIcon("videoSize", { NAME: "arrows-alt", SVG_KEY: "imageSize" }), o.RegisterCommand("videoSize", { undo: !1, focus: !1, popup: !0, title: "Change Size", callback: function() {
      this.video.showSizePopup();
    } }), o.DefineIcon("videoBack", { NAME: "arrow-left", SVG_KEY: "back" }), o.RegisterCommand("videoBack", { title: "Back", undo: !1, focus: !1, back: !0, callback: function() {
      this.video.back();
    }, refresh: function(t) {
      this.video.get() || this.opts.toolbarInline ? (t.removeClass("fr-hidden"), t.next(".fr-separator").removeClass("fr-hidden")) : (t.addClass("fr-hidden"), t.next(".fr-separator").addClass("fr-hidden"));
    } }), o.RegisterCommand("videoDismissError", { title: "OK", undo: !1, callback: function() {
      this.video.hideProgressBar(!0);
    } }), o.RegisterCommand("videoSetSize", { undo: !0, focus: !1, title: "Update", refreshAfterCallback: !1, callback: function() {
      this.video.setSize();
    } });
  });
})();
/*!
 * froala_editor v3.1.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
(function(Ie, Le) {
  (function(o, t) {
    t($e());
  })(ke, function(o) {
    o = o && o.hasOwnProperty("default") ? o.default : o, Object.assign(o.DEFAULTS, { wordDeniedTags: [], wordDeniedAttrs: [], wordAllowedStyleProps: ["font-family", "font-size", "background", "color", "width", "text-align", "vertical-align", "background-color", "padding", "margin", "height", "margin-top", "margin-left", "margin-right", "margin-bottom", "text-decoration", "font-weight", "font-style", "text-indent", "border", "border-.*", "line-height", "list-style-type"], wordPasteModal: !0, wordPasteKeepFormatting: !0 }), o.PLUGINS.wordPaste = function(t) {
      var n, f, G = t.$, Y = "word_paste", ce = {};
      function ue(s) {
        var d = t.opts.wordAllowedStyleProps;
        s || (t.opts.wordAllowedStyleProps = []), f.indexOf("<colgroup>") === 0 && (f = "<table>" + f + "</table>"), f = r(f = f.replace(/<span[\n\r ]*style='mso-spacerun:yes'>([\r\n\u00a0 ]*)<\/span>/g, function(b, E) {
          for (var g = "", m = 0; m++ < E.length; )
            g += "&nbsp;";
          return g;
        }), t.paste.getRtfClipboard());
        var u = t.doc.createElement("DIV");
        u.innerHTML = f, t.html.cleanBlankSpaces(u), f = u.innerHTML, f = (f = t.paste.cleanEmptyTagsAndDivs(f)).replace(/\u200b/g, ""), function() {
          t.modals.hide(Y);
        }(), t.paste.clean(f, !0, !0), t.opts.wordAllowedStyleProps = d;
      }
      function ee(s) {
        s.parentNode && s.parentNode.removeChild(s);
      }
      function w(s, d) {
        if (d(s))
          for (var u = s.firstChild; u; ) {
            var b = u, E = u.previousSibling;
            u = u.nextSibling, w(b, d), b.previousSibling || b.nextSibling || b.parentNode || !u || E === u.previousSibling || !u.parentNode ? b.previousSibling || b.nextSibling || b.parentNode || !u || u.previousSibling || u.nextSibling || u.parentNode || (E ? u = E.nextSibling ? E.nextSibling.nextSibling : null : s.firstChild && (u = s.firstChild.nextSibling)) : u = E ? E.nextSibling : s.firstChild;
          }
      }
      function oe(s) {
        if (!s.getAttribute("style") || !/mso-list:[\s]*l/gi.test(s.getAttribute("style").replace(/\n/gi, "")))
          return !1;
        try {
          if (!s.querySelector('[style="mso-list:Ignore"]'))
            return !!(s.outerHTML && 0 <= s.outerHTML.indexOf("<!--[if !supportLists]-->"));
        } catch {
          return !1;
        }
        return !0;
      }
      function pe(s) {
        return s.getAttribute("style").replace(/\n/gi, "").replace(/.*level([0-9]+?).*/gi, "$1");
      }
      function te(s, d) {
        var u = s.cloneNode(!0);
        if (["H1", "H2", "H3", "H4", "H5", "H6"].indexOf(s.tagName) !== -1) {
          var b = document.createElement(s.tagName.toLowerCase());
          b.setAttribute("style", s.getAttribute("style")), b.innerHTML = u.innerHTML, u.innerHTML = b.outerHTML;
        }
        w(u, function(g) {
          if (g.nodeType == Node.COMMENT_NODE && (t.browser.msie || t.browser.safari || t.browser.edge))
            try {
              if (g.data === "[if !supportLists]") {
                for (g = g.nextSibling; g && g.nodeType !== Node.COMMENT_NODE; ) {
                  var m = g.nextSibling;
                  g.parentNode.removeChild(g), g = m;
                }
                g && g.nodeType == Node.COMMENT_NODE && g.parentNode.removeChild(g);
              }
            } catch {
            }
          return g.nodeType === Node.ELEMENT_NODE && (g.getAttribute("style") === `mso-list:
Ignore` && g.setAttribute("style", "mso-list:Ignore"), g.getAttribute("style") === "mso-list:Ignore" && g.parentNode.removeChild(g), g.setAttribute("style", function(O) {
            var U = "", y = O.getAttribute("style");
            return y && ["line-height", "font-family", "font-size", "color", "background"].forEach(function(B) {
              var I = y.match(new RegExp(B + ":.*(;|)"));
              I && (U += I[0] + ";");
            }), U;
          }(g)), e(g, d)), !0;
        });
        var E = u.innerHTML;
        return E = E.replace(/<!--[\s\S]*?-->/gi, "");
      }
      function k(s, d) {
        for (var u = document.createElement(d), b = 0; b < s.attributes.length; b++) {
          var E = s.attributes[b].name;
          u.setAttribute(E, s.getAttribute(E));
        }
        return u.innerHTML = s.innerHTML, s.parentNode.replaceChild(u, s), u;
      }
      function F(s) {
        var d = s.getAttribute("align");
        d && (s.style["text-align"] = d, s.removeAttribute("align"));
      }
      function P(s) {
        return s.replace(/\n|\r|\n\r|&quot;/g, "");
      }
      function Z(s, d, u) {
        if (d) {
          var b = s.getAttribute("style");
          b && b.slice(-1) !== ";" && (b += ";"), d && d.slice(-1) !== ";" && (d += ";"), d = d.replace(/\n/gi, "");
          var E = null;
          E = u ? (b || "") + d : d + (b || ""), s.setAttribute("style", E);
        }
      }
      var le = null;
      function he(s, d, u) {
        for (var b = s.split(u), E = 1; E < b.length; E++) {
          var g = b[E];
          if (1 < (g = g.split("shplid")).length) {
            g = g[1];
            for (var m = "", C = 0; C < g.length && g[C] !== "\\" && g[C] !== "{" && g[C] !== " " && g[C] !== "\r" && g[C] !== `
`; )
              m += g[C], C++;
            var O = g.split("bliptag");
            if (O && O.length < 2)
              continue;
            var U = null;
            if (O[0].indexOf("pngblip") !== -1 ? U = "image/png" : O[0].indexOf("jpegblip") !== -1 && (U = "image/jpeg"), !U)
              continue;
            var y = O[1].split("}");
            if (y && y.length < 2)
              continue;
            var B = void 0;
            if (2 < y.length && y[0].indexOf("blipuid") !== -1)
              B = y[1].split(" ");
            else {
              if ((B = y[0].split(" ")) && B.length < 2)
                continue;
              B.shift();
            }
            var I = B.join("");
            le[d + m] = { image_hex: I, image_type: U };
          }
        }
      }
      function ge(s, d) {
        if (d) {
          var u;
          if (s.tagName === "IMG") {
            var b = s.getAttribute("src");
            if (!b || b.indexOf("file://") === -1)
              return;
            if (b.indexOf("file://") === 0 && t.helpers.isURL(s.getAttribute("alt")))
              return void s.setAttribute("src", s.getAttribute("alt"));
            (u = ce[s.getAttribute("v:shapes")]) || (u = s.getAttribute("v:shapes"), s.parentNode && s.parentNode.parentNode && 0 <= s.parentNode.parentNode.innerHTML.indexOf("msEquation") && (u = null));
          } else
            u = s.parentNode.getAttribute("o:spid");
          if (s.removeAttribute("height"), u) {
            (function(O) {
              le = {}, he(O, "i", "\\shppict"), he(O, "s", "\\shp{");
            })(d);
            var E = le[u.substring(7)];
            if (E) {
              var g = function(O) {
                for (var U = O.match(/[0-9a-f]{2}/gi), y = [], B = 0; B < U.length; B++)
                  y.push(String.fromCharCode(parseInt(U[B], 16)));
                var I = y.join("");
                return btoa(I);
              }(E.image_hex), m = "data:" + E.image_type + ";base64," + g;
              s.tagName === "IMG" ? (s.src = m, s.setAttribute("data-fr-image-pasted", !0)) : G(s.parentNode).before('<img data-fr-image-pasted="true" src="' + m + '" style="' + s.parentNode.getAttribute("style") + '">').remove();
            }
          }
        }
      }
      function e(s, d) {
        var u = s.tagName, b = u.toLowerCase();
        if (s.firstElementChild && (s.firstElementChild.tagName === "I" ? k(s.firstElementChild, "em") : s.firstElementChild.tagName === "B" && k(s.firstElementChild, "strong")), ["SCRIPT", "APPLET", "EMBED", "NOFRAMES", "NOSCRIPT"].indexOf(u) !== -1)
          return ee(s), !1;
        for (var E = ["META", "LINK", "XML", "ST1:", "O:", "W:", "FONT"], g = 0; g < E.length; g++)
          if (u.indexOf(E[g]) !== -1)
            return s.innerHTML && (s.outerHTML = s.innerHTML), ee(s), !1;
        if (u !== "TD") {
          var m = s.getAttribute("class") || "MsoNormal";
          if (d && m) {
            for (var C = (m = P(m)).split(" "), O = 0; O < C.length; O++) {
              var U = [], y = "." + C[O];
              U.push(y), y = b + y, U.push(y);
              for (var B = 0; B < U.length; B++)
                d[U[B]] && Z(s, d[U[B]]);
            }
            s.removeAttribute("class");
          }
          d && d[b] && Z(s, d[b]);
        }
        if (["P", "H1", "H2", "H3", "H4", "H5", "H6", "PRE"].indexOf(u) !== -1) {
          var I = s.getAttribute("class");
          if (I && (d && d[u.toLowerCase() + "." + I] && Z(s, d[u.toLowerCase() + "." + I]), I.toLowerCase().indexOf("mso") !== -1)) {
            var x = P(I);
            (x = x.replace(/[0-9a-z-_]*mso[0-9a-z-_]*/gi, "")) ? s.setAttribute("class", x) : s.removeAttribute("class");
          }
          var v = s.getAttribute("style");
          if (v) {
            var A = v.match(/text-align:.+?[; "]{1,1}/gi);
            A && A[A.length - 1].replace(/(text-align:.+?[; "]{1,1})/gi, "$1");
          }
          F(s);
        }
        if (u === "TR" && function(c, h) {
          t.node.clearAttributes(c);
          for (var M = c.firstElementChild, N = 0, ie = !1, D = null; M; ) {
            M.firstElementChild && M.firstElementChild.tagName.indexOf("W:") !== -1 && (M.innerHTML = M.firstElementChild.innerHTML), (D = M.getAttribute("width")) || ie || (ie = !0), N += parseInt(D, 10), (!M.firstChild || M.firstChild && M.firstChild.data === o.UNICODE_NBSP) && (M.firstChild && ee(M.firstChild), M.innerHTML = "<br>");
            for (var _ = M.firstElementChild, Q = M.children.length === 1; _; )
              _.tagName !== "P" || oe(_) || Q && F(_), _ = _.nextElementSibling;
            if (h) {
              var re = M.getAttribute("class");
              if (re) {
                var q = (re = P(re)).match(/xl[0-9]+/gi);
                if (q) {
                  var ae = "." + q[0];
                  h[ae] && Z(M, h[ae]);
                }
              }
              h.td && Z(M, h.td);
            }
            var se = M.getAttribute("style");
            se && (se = P(se)) && se.slice(-1) !== ";" && (se += ";");
            var H = M.getAttribute("valign");
            if (!H && se) {
              var W = se.match(/vertical-align:.+?[; "]{1,1}/gi);
              W && (H = W[W.length - 1].replace(/vertical-align:(.+?)[; "]{1,1}/gi, "$1"));
            }
            var T = null;
            if (se) {
              var S = se.match(/text-align:.+?[; "]{1,1}/gi);
              S && (T = S[S.length - 1].replace(/text-align:(.+?)[; "]{1,1}/gi, "$1")), T === "general" && (T = null);
            }
            var L = null;
            if (se) {
              var R = se.match(/background:.+?[; "]{1,1}/gi);
              R && (L = R[R.length - 1].replace(/background:(.+?)[; "]{1,1}/gi, "$1"));
            }
            var K = M.getAttribute("colspan"), V = M.getAttribute("rowspan");
            K && M.setAttribute("colspan", K), V && M.setAttribute("rowspan", V), H && (M.style["vertical-align"] = H), T && (M.style["text-align"] = T), L && (M.style["background-color"] = L), D && M.setAttribute("width", D), M = M.nextElementSibling;
          }
          for (M = c.firstElementChild; M; )
            D = M.getAttribute("width"), ie ? M.removeAttribute("width") : M.setAttribute("width", 100 * parseInt(D, 10) / N + "%"), M = M.nextElementSibling;
        }(s, d), u !== "A" || s.attributes.getNamedItem("href") || s.attributes.getNamedItem("name") || !s.innerHTML || (s.outerHTML = s.innerHTML), u == "A" && s.getAttribute("href") && s.querySelector("img"))
          for (var l = s.querySelectorAll("span"), i = 0; i < l.length; i++)
            l[i].innerText || (l[i].outerHTML = l[i].innerHTML);
        if (u !== "TD" && u !== "TH" || s.innerHTML || (s.innerHTML = "<br>"), u === "TABLE" && (s.style.width = s.style.width), s.getAttribute("lang") && s.removeAttribute("lang"), s.getAttribute("style") && s.getAttribute("style").toLowerCase().indexOf("mso") !== -1) {
          var a = P(s.getAttribute("style"));
          (a = a.replace(/[0-9a-z-_]*mso[0-9a-z-_]*:.+?(;{1,1}|$)/gi, "")) ? s.setAttribute("style", a) : s.removeAttribute("style");
        }
        return !0;
      }
      function r(s, d) {
        0 <= s.indexOf("<html") && (s = s.replace(/[.\s\S\w\W<>]*(<html[^>]*>[.\s\S\w\W<>]*<\/html>)[.\s\S\w\W<>]*/i, "$1")), function(B) {
          for (var I = B.split("v:shape"), x = 1; x < I.length; x++) {
            var v = I[x], A = v.split(' id="')[1];
            if (A && 1 < A.length) {
              A = A.split('"')[0];
              var l = v.split(' o:spid="')[1];
              l && 1 < l.length && (l = l.split('"')[0], ce[A] = l);
            }
          }
        }(s);
        var u = new DOMParser().parseFromString(s, "text/html"), b = u.head, E = u.body, g = function(B) {
          var I = {}, x = B.getElementsByTagName("style");
          if (x.length) {
            var v = x[0].innerHTML.match(/[\S ]+\s+{[\s\S]+?}/gi);
            if (v)
              for (var A = 0; A < v.length; A++) {
                var l = v[A], i = l.replace(/([\S ]+\s+){[\s\S]+?}/gi, "$1"), a = l.replace(/[\S ]+\s+{([\s\S]+?)}/gi, "$1");
                i = i.replace(/^[\s]|[\s]$/gm, ""), a = a.replace(/^[\s]|[\s]$/gm, ""), i = i.replace(/\n|\r|\n\r/g, ""), a = a.replace(/\n|\r|\n\r/g, "");
                for (var p = i.split(", "), c = 0; c < p.length; c++)
                  I[p[c]] = a;
              }
          }
          return I;
        }(b);
        w(E, function(y) {
          if (y.nodeType === Node.TEXT_NODE && /\n|\u00a0|\r/.test(y.data)) {
            if (!/\S| /.test(y.data) && !/[\u00a0]+/.test(y.data))
              return y.data === o.UNICODE_NBSP ? (y.data = "\u200B", !0) : y.data.length === 1 && y.data.charCodeAt(0) === 10 ? (y.data = " ", !0) : (ee(y), !1);
            y.data = y.data.replace(/\n|\r/gi, " ");
          }
          return !0;
        }), w(E, function(y) {
          return y.nodeType !== Node.ELEMENT_NODE || y.tagName !== "V:IMAGEDATA" && y.tagName !== "IMG" || ge(y, d), !0;
        });
        for (var m = E.querySelectorAll("ul > ul, ul > ol, ol > ul, ol > ol"), C = m.length - 1; 0 <= C; C--)
          m[C].previousElementSibling && m[C].previousElementSibling.tagName === "LI" && m[C].previousElementSibling.appendChild(m[C]);
        w(E, function(y) {
          if (y.nodeType === Node.TEXT_NODE)
            return y.data = y.data.replace(/<br>(\n|\r)/gi, "<br>"), !1;
          if (y.nodeType === Node.ELEMENT_NODE) {
            if (oe(y)) {
              var B = y.parentNode, I = y.previousSibling, x = function i(a, p, c, h) {
                var M, N, ie = /[0-9a-zA-Z]./gi, D = !1, _ = navigator.userAgent.toLowerCase();
                _.indexOf("safari") != -1 && (_ = -1 < _.indexOf("chrome") ? 1 : "safari"), a.innerHTML.includes(`mso-list:
Ignore`) && (a.innerHTML = a.innerHTML.replace(/mso-list:\nIgnore/gi, "mso-list:Ignore"));
                var Q, re, q, ae, se = a.querySelector('span[style="mso-list:Ignore"]');
                se == null && _ == "safari" && (se = a.querySelector('span[lang="PT-BR"]'));
                var H;
                se && (D = D || ie.test(se.textContent)), se !== null && (H = se.textContent.trim().split(".")[0]), q = D == 1 ? ((H = se.textContent.trim().split(".")[0]) == "1" ? ae = "decimal;" : H == "i" ? ae = "lower-roman;" : H == "I" ? ae = "upper-roman;" : H == "o" ? ae = "circle;" : H.match(/^v$/) || (H.match(/^[a-z]$/) || H.match(/^[a-z]\)$/) ? ae = "lower-alpha;" : (H.match(/^[A-Z]$/) || H.match(/^[A-Z]\)$/)) && (ae = "upper-alpha;")), ae = "list-style-type: " + ae, "ol") : (se != null && (H = se.textContent.trim().split(".")[0]), H == "\xA7" ? ae = "square;" : H == "\xB7" && (ae = "disc;"), ae = "list-style-type: " + ae, "ul");
                var W, T = "";
                se == null || se.textContent == null || isNaN(parseInt(se.textContent.trim().split(".")[1], 10)) || (T = ' class="decimal_type" ');
                var S, L = pe(a), R = a.style.marginLeft;
                if (R.includes("in") ? (S = "in", R = parseFloat(R) - 0.5) : R.includes("pt") && (S = "px", R = parseFloat(R) - 10), L == 1)
                  if (W = ae ? "<" + q + ' style = "' + ae + "; margin-left:" + R + S + ';">' : "<" + q + ' style="margin-left:' + R + S + ';">', ae == "list-style-type: upper-alpha;") {
                    var K = H.charCodeAt(0) - 64;
                    W = ae ? "<" + q + T + ' start="' + K + '" style = "' + ae + " margin-left:" + R + S + ';">' : "<" + q + ">";
                  } else if (ae == "list-style-type: lower-alpha;") {
                    var V = H.charCodeAt(0) - 96;
                    W = ae ? "<" + q + T + ' start="' + V + '" style = "' + ae + "margin-left:" + R + S + ';">' : "<" + q + ">";
                  } else
                    W = ae ? "<" + q + T + ' style = "' + ae + ";margin-left:" + R + S + ';">' : "<" + q + ' style="margin-left:' + R + S + ';">';
                else if (ae == "list-style-type: upper-alpha;") {
                  var j = H.charCodeAt(0) - 64;
                  W = ae ? "<" + q + T + ' style = "' + ae + ' start="' + j + '">' : "<" + q + ">";
                } else if (ae == "list-style-type: lower-alpha;") {
                  var X = H.charCodeAt(0) - 96;
                  W = ae ? "<" + q + T + ' style = "' + ae + ' start="' + X + '">' : "<" + q + ">";
                } else
                  W = ae ? "<" + q + T + ' style = "' + ae + '">' : "<" + q + ">";
                for (var fe = !1; a; ) {
                  if (!oe(a)) {
                    if (a.outerHTML && 0 < a.outerHTML.indexOf("mso-bookmark") && (a.textContent || "").length == 0) {
                      a = a.nextElementSibling;
                      continue;
                    }
                    break;
                  }
                  var ne = pe(a);
                  if ((c = c || ne) < ne)
                    W += (re = i(a, p, ne, a.style.marginLeft)).el.outerHTML, a = re.currentNode;
                  else {
                    if (ne < c)
                      break;
                    a.firstElementChild && a.firstElementChild.firstElementChild && a.firstElementChild.firstElementChild.firstChild && (ie.lastIndex = 0), N && N.firstElementChild && N.firstElementChild.firstElementChild && N.firstElementChild.firstElementChild.firstChild && (ie.lastIndex = 0, M = ie.test(N.firstElementChild.firstElementChild.firstChild.data || N.firstElementChild.firstElementChild.firstChild.firstChild && N.firstElementChild.firstElementChild.firstChild.firstChild.data || ""));
                    var ve = !1;
                    (!h && !a.style.marginLeft || h && a.style.marginLeft && h === a.style.marginLeft) && (ve = !0), h = a.style.marginLeft, ve || M === void 0 ? (Q = te(a, p), a.nextSibling.innerText == null || a.nextSibling.innerText == null || W.includes('class="decimal_type"') || isNaN(parseInt(a.nextSibling.innerText.trim().split(".")[1], 10)) || (W = W.substring(3, 0) + ' class="decimal_type"' + W.substring(3, W.length)), W += "<li>" + Q + "</li>") : (ne == 1 && (W += "</" + q + ">", fe = !0, N = null), W += (re = i(a, p, ne, a.style.marginLeft)).el.outerHTML, a = re.currentNode);
                    var Ee = a && a.nextElementSibling;
                    if (Ee && (N = Ee.previousElementSibling), a && !oe(a)) {
                      if (a.outerHTML && 0 < a.outerHTML.indexOf("mso-bookmark") && (a.textContent || "").length == 0) {
                        a = a.nextElementSibling;
                        continue;
                      }
                      break;
                    }
                    a && a.parentNode && a.parentNode.removeChild(a), a = Ee;
                  }
                }
                fe || (W += "</" + q + ">");
                var be = document.createElement("div");
                return be.innerHTML = W, { el: be, currentNode: a };
              }(y, g).el, v = null;
              return (v = I ? I.nextSibling : B.firstChild) ? B.insertBefore(x, v) : B.appendChild(x), !1;
            }
            return y.tagName === "FONT" && g["." + y.getAttribute("class")] && (y = k(y, "span")), e(y, g);
          }
          if (y.nodeType !== Node.COMMENT_NODE)
            return !0;
          if (-1 < y.data.indexOf("[if !supportLineBreakNewLine]"))
            for (var A = y.nextSibling; A; )
              (A = y.nextSibling) && ee(A), A.data && -1 < A.data.indexOf("[endif]") && (A = null);
          if (-1 < y.data.indexOf("[if supportFields]") && -1 < y.data.indexOf("FORMCHECKBOX")) {
            var l = document.createElement("input");
            l.type = "checkbox", y.parentNode.insertBefore(l, y.nextSibling);
          }
          return ee(y), !1;
        }), w(E, function(y) {
          if (y.nodeType === Node.ELEMENT_NODE) {
            var B = y.tagName;
            if (!y.innerHTML && ["BR", "IMG", "INPUT"].indexOf(B) === -1) {
              for (var I = y.parentNode; I && (ee(y), !(y = I).innerHTML); )
                I = y.parentNode;
              return !1;
            }
            (function(v) {
              var A = v.getAttribute("style");
              if (A) {
                (A = P(A)) && A.slice(-1) !== ";" && (A += ";");
                var l = A.match(/(^|\S+?):.+?;{1,1}/gi);
                if (l) {
                  for (var i = {}, a = 0; a < l.length; a++) {
                    var p = l[a].split(":");
                    p.length === 2 && (p[0] === "text-align" && v.tagName === "SPAN" || (i[p[0]] = p[1]));
                  }
                  var c = "";
                  for (var h in i)
                    if (i.hasOwnProperty(h)) {
                      if (h === "font-size" && i[h].slice(-3) === "pt;") {
                        var M = null;
                        try {
                          M = parseFloat(i[h].slice(0, -3), 10);
                        } catch {
                          M = null;
                        }
                        M && (M = Math.round(1.33 * M), i[h] = M + "px;");
                      }
                      c += h + ":" + i[h];
                    }
                  c && v.setAttribute("style", c);
                }
              }
            })(y);
          }
          return !0;
        }), w(E, function(y) {
          if (y && y.nodeName === "A" && y.href === "") {
            for (var B = document.createDocumentFragment(); y.firstChild; )
              B.appendChild(y.firstChild);
            y.parentNode.replaceChild(B, y);
          }
          return !0;
        });
        var O = E.outerHTML, U = t.opts.htmlAllowedStyleProps;
        return t.opts.htmlAllowedStyleProps = t.opts.wordAllowedStyleProps, O = t.clean.html(O, t.opts.wordDeniedTags, t.opts.wordDeniedAttrs, !1), t.opts.htmlAllowedStyleProps = U, O;
      }
      return { _init: function() {
        t.events.on("paste.wordPaste", function(d) {
          return f = d, t.opts.wordPasteModal ? function() {
            if (!n) {
              var b = '<h4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.95 73.23" style="height: 25px; vertical-align: text-bottom; margin-right: 5px; display: inline-block"><defs><style>.a{fill:#2a5699;}.b{fill:#fff;}</style></defs><path class="a" d="M615.15,827.22h5.09V834c9.11.05,18.21-.09,27.32.05a2.93,2.93,0,0,1,3.29,3.25c.14,16.77,0,33.56.09,50.33-.09,1.72.17,3.63-.83,5.15-1.24.89-2.85.78-4.3.84-8.52,0-17,0-25.56,0v6.81h-5.32c-13-2.37-26-4.54-38.94-6.81q0-29.8,0-59.59c13.05-2.28,26.11-4.5,39.17-6.83Z" transform="translate(-575.97 -827.22)"/><path class="b" d="M620.24,836.59h28.1v54.49h-28.1v-6.81h22.14v-3.41H620.24v-4.26h22.14V873.2H620.24v-4.26h22.14v-3.41H620.24v-4.26h22.14v-3.41H620.24v-4.26h22.14v-3.41H620.24V846h22.14v-3.41H620.24Zm-26.67,15c1.62-.09,3.24-.16,4.85-.25,1.13,5.75,2.29,11.49,3.52,17.21,1-5.91,2-11.8,3.06-17.7,1.7-.06,3.41-.15,5.1-.26-1.92,8.25-3.61,16.57-5.71,24.77-1.42.74-3.55,0-5.24.09-1.13-5.64-2.45-11.24-3.47-16.9-1,5.5-2.29,10.95-3.43,16.42q-2.45-.13-4.92-.3c-1.41-7.49-3.07-14.93-4.39-22.44l4.38-.18c.88,5.42,1.87,10.82,2.64,16.25,1.2-5.57,2.43-11.14,3.62-16.71Z" transform="translate(-575.97 -827.22)"/></svg> ' + t.language.translate("Word Paste Detected") + "</h4>", E = function() {
                var O = '<div class="fr-word-paste-modal" style="padding: 20px 20px 10px 20px;">';
                return O += '<p style="text-align: left;">' + t.language.translate("The pasted content is coming from a Microsoft Word document. Do you want to keep the format or clean it up?") + "</p>", O += '<div style="text-align: right; margin-top: 50px;"><button class="fr-remove-word fr-command">' + t.language.translate("Clean") + '</button> <button class="fr-keep-word fr-command">' + t.language.translate("Keep") + "</button></div>", O += "</div>";
              }(), g = t.modals.create(Y, b, E), m = g.$body;
              n = g.$modal, g.$modal.addClass("fr-middle"), t.events.bindClick(m, "button.fr-remove-word", function() {
                var C = n.data("instance") || t;
                C.wordPaste.clean();
              }), t.events.bindClick(m, "button.fr-keep-word", function() {
                var C = n.data("instance") || t;
                C.wordPaste.clean(!0);
              }), t.events.$on(G(t.o_win), "resize", function() {
                t.modals.resize(Y);
              });
            }
            t.modals.show(Y), t.modals.resize(Y);
          }() : ue(t.opts.wordPasteKeepFormatting), !1;
        });
      }, clean: ue, _wordClean: r };
    };
  });
})();
/*!
 * froala_editor v3.1.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */
(function(Ie, Le) {
  (function(o, t) {
    t($e());
  })(ke, function(o) {
    o = o && o.hasOwnProperty("default") ? o.default : o, o.LANGUAGE.zh_cn = {
      translation: {
        "Type something": "\u8F93\u5165\u5185\u5BB9",
        Bold: "\u7C97\u4F53",
        Italic: "\u659C\u4F53",
        Underline: "\u4E0B\u5212\u7EBF",
        Strikethrough: "\u5220\u9664\u7EBF",
        Insert: "\u63D2\u5165",
        Delete: "\u5220\u9664",
        Cancel: "\u53D6\u6D88",
        OK: "\u786E\u5B9A",
        Back: "\u540E\u9000",
        Remove: "\u5220\u9664",
        More: "\u66F4\u591A",
        Update: "\u66F4\u65B0",
        Style: "\u6837\u5F0F",
        "Font Family": "\u5B57\u4F53",
        "Font Size": "\u5B57\u53F7",
        Colors: "\u989C\u8272",
        Background: "\u80CC\u666F",
        Text: "\u5B57\u4F53",
        "HEX Color": "\u5341\u516D\u8FDB\u5236\u989C\u8272",
        "Paragraph Format": "\u6BB5\u843D\u683C\u5F0F",
        Normal: "\u6B63\u6587",
        Code: "\u4EE3\u7801",
        "Heading 1": "\u6807\u98981",
        "Heading 2": "\u6807\u98982",
        "Heading 3": "\u6807\u98983",
        "Heading 4": "\u6807\u98984",
        "Paragraph Style": "\u6BB5\u843D\u6837\u5F0F",
        "Inline Style": "\u5185\u8054\u6837\u5F0F",
        Align: "\u5BF9\u9F50\u65B9\u5F0F",
        "Align Left": "\u5DE6\u5BF9\u9F50",
        "Align Center": "\u5C45\u4E2D",
        "Align Right": "\u53F3\u5BF9\u9F50",
        "Align Justify": "\u4E24\u7AEF\u5BF9\u9F50",
        None: "\u65E0",
        "Ordered List": "\u7F16\u53F7",
        "Unordered List": "\u9879\u76EE\u7B26\u53F7",
        "Decrease Indent": "\u51CF\u5C11\u7F29\u8FDB\u91CF",
        "Increase Indent": "\u589E\u52A0\u7F29\u8FDB\u91CF",
        "Insert Link": "\u63D2\u5165\u8D85\u94FE\u63A5",
        "Open in new tab": "\u5728\u65B0\u6807\u7B7E\u9875\u4E2D\u6253\u5F00",
        "Open Link": "\u6253\u5F00\u8D85\u94FE\u63A5",
        "Edit Link": "\u7F16\u8F91\u8D85\u94FE\u63A5",
        Unlink: "\u5220\u9664\u8D85\u94FE\u63A5",
        "Choose Link": "\u9009\u62E9\u8D85\u94FE\u63A5",
        "Insert Image": "\u63D2\u5165\u56FE\u7247",
        "Upload Image": "\u4E0A\u4F20\u56FE\u7247",
        "By URL": "\u901A\u8FC7 URL",
        Browse: "\u6D4F\u89C8",
        "Drop image": "\u62D6\u5165\u56FE\u7247",
        "or click": "\u6216\u70B9\u51FB",
        "Manage Images": "\u7BA1\u7406\u56FE\u7247",
        Loading: "\u52A0\u8F7D\u4E2D",
        Deleting: "\u5220\u9664\u4E2D",
        Tags: "\u6807\u7B7E",
        "Are you sure? Image will be deleted.": "\u56FE\u7247\u5C06\u4F1A\u88AB\u5220\u9664\uFF0C\u662F\u5426\u786E\u8BA4\uFF1F",
        Replace: "\u66FF\u6362",
        Uploading: "\u4E0A\u4F20\u4E2D",
        "Loading image": "\u56FE\u7247\u52A0\u8F7D\u4E2D",
        Display: "\u663E\u793A",
        Inline: "\u5D4C\u5165\u578B",
        "Break Text": "\u4E0A\u4E0B\u578B\u73AF\u7ED5",
        "Alternative Text": "\u66FF\u6362\u6587\u5B57",
        "Change Size": "\u6539\u53D8\u5927\u5C0F",
        Width: "\u5BBD\u5EA6",
        Height: "\u9AD8\u5EA6",
        "Something went wrong. Please try again.": "\u53D1\u751F\u9519\u8BEF\uFF0C\u8BF7\u91CD\u8BD5\u3002",
        "Image Caption": "\u56FE\u7247\u6807\u9898",
        "Advanced Edit": "\u9AD8\u7EA7\u7F16\u8F91",
        "Insert Video": "\u63D2\u5165\u89C6\u9891",
        "Embedded Code": "\u5D4C\u5165\u4EE3\u7801",
        "Paste in a video URL": "\u7C98\u8D34\u89C6\u9891\u7F51\u5740",
        "Drop video": "\u62D6\u5165\u89C6\u9891",
        "Your browser does not support HTML5 video.": "\u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 HTML5 \u89C6\u9891\u3002",
        "Upload Video": "\u4E0A\u4F20\u89C6\u9891",
        "Insert Table": "\u63D2\u5165\u8868\u683C",
        "Table Header": "\u8868\u5934",
        "Remove Table": "\u5220\u9664\u8868\u683C",
        "Table Style": "\u8868\u683C\u6837\u5F0F",
        "Horizontal Align": "\u6C34\u5E73\u5BF9\u9F50\u65B9\u5F0F",
        Row: "\u884C",
        "Insert row above": "\u5728\u4E0A\u65B9\u63D2\u5165",
        "Insert row below": "\u5728\u4E0B\u65B9\u63D2\u5165",
        "Delete row": "\u5220\u9664\u884C",
        Column: "\u5217",
        "Insert column before": "\u5728\u5DE6\u4FA7\u63D2\u5165",
        "Insert column after": "\u5728\u53F3\u4FA7\u63D2\u5165",
        "Delete column": "\u5220\u9664\u5217",
        Cell: "\u5355\u5143\u683C",
        "Merge cells": "\u5408\u5E76\u5355\u5143\u683C",
        "Horizontal split": "\u6C34\u5E73\u5206\u5272",
        "Vertical split": "\u5782\u76F4\u5206\u5272",
        "Cell Background": "\u5355\u5143\u683C\u80CC\u666F",
        "Vertical Align": "\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F",
        Top: "\u9760\u4E0A",
        Middle: "\u5C45\u4E2D",
        Bottom: "\u9760\u4E0B",
        "Align Top": "\u9760\u4E0A\u5BF9\u9F50",
        "Align Middle": "\u5C45\u4E2D\u5BF9\u9F50",
        "Align Bottom": "\u9760\u4E0B\u5BF9\u9F50",
        "Cell Style": "\u5355\u5143\u683C\u6837\u5F0F",
        "Upload File": "\u4E0A\u4F20\u6587\u4EF6",
        "Drop file": "\u62D6\u5165\u6587\u4EF6",
        Emoticons: "\u8868\u60C5\u7B26\u53F7",
        "Grinning face": "\u9732\u9F7F\u7B11\u8138",
        "Grinning face with smiling eyes": "\u9732\u9F7F\u7B11\u5230\u772F\u8D77\u773C",
        "Face with tears of joy": "\u7B11\u54ED",
        "Smiling face with open mouth": "\u5F20\u5634\u5FAE\u7B11",
        "Smiling face with open mouth and smiling eyes": "\u772F\u773C\u5F20\u5634\u5FAE\u7B11",
        "Smiling face with open mouth and cold sweat": "\u5E26\u51B7\u6C57\u7684\u5F20\u5634\u5FAE\u7B11",
        "Smiling face with open mouth and tightly-closed eyes": "\u7D27\u95ED\u53CC\u773C\u5F20\u5634\u5FAE\u7B11",
        "Smiling face with halo": "\u5E26\u5149\u73AF\u5FAE\u7B11",
        "Smiling face with horns": "\u5E26\u725B\u89D2\u7684\u5FAE\u7B11",
        "Winking face": "\u7728\u773C",
        "Smiling face with smiling eyes": "\u772F\u773C\u5FAE\u7B11",
        "Face savoring delicious food": "\u998B",
        "Relieved face": "\u5982\u91CA\u91CD\u8D1F",
        "Smiling face with heart-shaped eyes": "\u6843\u5FC3\u773C\u5FAE\u7B11",
        "Smiling face with sunglasses": "\u6234\u592A\u9633\u955C\u5FAE\u7B11",
        "Smirking face": "\u5F97\u610F\u5730\u7B11",
        "Neutral face": "\u4E2D\u6027\u8138",
        "Expressionless face": "\u9762\u65E0\u8868\u60C5",
        "Unamused face": "\u4E0D\u9AD8\u5174",
        "Face with cold sweat": "\u51B7\u6C57",
        "Pensive face": "\u6C89\u601D",
        "Confused face": "\u8FF7\u60D1",
        "Confounded face": "\u56F0\u60D1",
        "Kissing face": "\u5634\u5DF4\u561F\u561F",
        "Face throwing a kiss": "\u98DE\u543B",
        "Kissing face with smiling eyes": "\u772F\u773C\u63A5\u543B",
        "Kissing face with closed eyes": "\u95ED\u773C\u63A5\u543B",
        "Face with stuck out tongue": "\u5410\u820C",
        "Face with stuck out tongue and winking eye": "\u7728\u773C\u5410\u820C",
        "Face with stuck out tongue and tightly-closed eyes": "\u772F\u773C\u5410\u820C",
        "Disappointed face": "\u5931\u671B",
        "Worried face": "\u62C5\u5FC3",
        "Angry face": "\u751F\u6C14",
        "Pouting face": "\u6485\u5634",
        "Crying face": "\u5927\u54ED",
        "Persevering face": "\u575A\u5F3A",
        "Face with look of triumph": "\u626C\u7709\u5410\u6C14",
        "Disappointed but relieved face": "\u5931\u671B",
        "Frowning face with open mouth": "\u76B1\u7709",
        "Anguished face": "\u75DB\u82E6",
        "Fearful face": "\u5BB3\u6015",
        "Weary face": "\u75B2\u60EB",
        "Sleepy face": "\u56F0\u4E86",
        "Tired face": "\u7D2F\u4E86",
        "Grimacing face": "\u626D\u66F2\u8138",
        "Loudly crying face": "\u5927\u54ED",
        "Face with open mouth": "\u5F20\u5F00\u5634",
        "Hushed face": "\u5B89\u9759",
        "Face with open mouth and cold sweat": "\u51B7\u6C57",
        "Face screaming in fear": "\u5BB3\u6015\u5C16\u53EB",
        "Astonished face": "\u60CA\u8BB6",
        "Flushed face": "\u8138\u7EA2",
        "Sleeping face": "\u719F\u7761",
        "Dizzy face": "\u7729\u6655",
        "Face without mouth": "\u6CA1\u6709\u5634\u7684\u8138",
        "Face with medical mask": "\u53E3\u7F69\u8138",
        Break: "\u6362\u884C",
        Subscript: "\u4E0B\u6807",
        Superscript: "\u4E0A\u6807",
        Fullscreen: "\u5168\u5C4F",
        "Insert Horizontal Line": "\u63D2\u5165\u6C34\u5E73\u7EBF",
        "Clear Formatting": "\u6E05\u9664\u683C\u5F0F",
        Save: "\u4FDD\u5B58",
        Undo: "\u64A4\u6D88",
        Redo: "\u6062\u590D",
        "Select All": "\u5168\u9009",
        "Code View": "\u4EE3\u7801\u89C6\u56FE",
        Quote: "\u5F15\u7528",
        Increase: "\u589E\u52A0\u5F15\u7528\u7EA7\u522B",
        Decrease: "\u51CF\u5C11\u5F15\u7528\u7EA7\u522B",
        "Quick Insert": "\u5FEB\u901F\u63D2\u5165",
        "Special Characters": "\u7279\u6B8A\u5B57\u7B26",
        Latin: "\u62C9\u4E01\u5B57\u6BCD",
        Greek: "\u5E0C\u814A\u5B57\u6BCD",
        Cyrillic: "\u897F\u91CC\u5C14\u5B57\u6BCD",
        Punctuation: "\u6807\u70B9",
        Currency: "\u8D27\u5E01",
        Arrows: "\u7BAD\u5934",
        Math: "\u6570\u5B66",
        Misc: "\u6742\u9879",
        Print: "\u6253\u5370",
        "Spell Checker": "\u62FC\u5199\u68C0\u67E5\u5668",
        Help: "\u5E2E\u52A9",
        Shortcuts: "\u5FEB\u6377\u952E",
        "Inline Editor": "\u5185\u8054\u7F16\u8F91\u5668",
        "Show the editor": "\u663E\u793A\u7F16\u8F91\u5668",
        "Common actions": "\u5E38\u7528\u64CD\u4F5C",
        Copy: "\u590D\u5236",
        Cut: "\u526A\u5207",
        Paste: "\u7C98\u8D34",
        "Basic Formatting": "\u57FA\u672C\u683C\u5F0F",
        "Increase quote level": "\u589E\u52A0\u5F15\u7528\u7EA7\u522B",
        "Decrease quote level": "\u51CF\u5C11\u5F15\u7528\u7EA7\u522B",
        "Image / Video": "\u56FE\u50CF/\u89C6\u9891",
        "Resize larger": "\u653E\u5927",
        "Resize smaller": "\u7F29\u5C0F",
        Table: "\u8868\u683C",
        "Select table cell": "\u9009\u62E9\u5355\u5143\u683C",
        "Extend selection one cell": "\u589E\u52A0\u9009\u4E2D\u7684\u5355\u5143\u683C",
        "Extend selection one row": "\u589E\u52A0\u9009\u4E2D\u7684\u884C",
        Navigation: "\u5BFC\u822A",
        "Focus popup / toolbar": "\u7126\u70B9\u5F39\u51FA/\u5DE5\u5177\u680F",
        "Return focus to previous position": "\u5C06\u7126\u70B9\u8FD4\u56DE\u5230\u4E0A\u4E00\u4E2A\u4F4D\u7F6E",
        "Embed URL": "\u5D4C\u5165\u7F51\u5740",
        "Paste in a URL to embed": "\u7C98\u8D34\u8981\u5D4C\u5165\u7684\u7F51\u5740",
        "The pasted content is coming from a Microsoft Word document. Do you want to keep the format or clean it up?": "\u7C98\u8D34\u7684\u5185\u5BB9\u6765\u81EA\u5FAE\u8F6F Word \u6587\u6863\u3002\u4F60\u60F3\u4FDD\u7559\u8FD8\u662F\u6E05\u9664\u683C\u5F0F\uFF1F",
        Keep: "\u4FDD\u7559",
        Clean: "\u6E05\u9664",
        "Word Paste Detected": "\u68C0\u6D4B\u5230\u7C98\u8D34\u81EA Word \u7684\u5185\u5BB9",
        Characters: "\u5B57\u6570\u7EDF\u8BA1",
        "More Text": " \u66F4\u591A\u6587\u5B57",
        "More Paragraph": "\u66F4\u591A\u6BB5\u843D",
        "More Rich": "\u66F4\u591A\u4E30\u5BCC",
        "More Misc": "\u66F4\u591A\u6742\u9879"
      },
      direction: "ltr"
    };
  });
})();
var Ze = function(Ie) {
  Ye(Le, Ie);
  function Le(o) {
    var t = Ie.call(this, o) || this;
    return t.listeningEvents = [], t.element = null, t.editor = null, t.config = {
      immediateReactModelUpdate: !1,
      reactIgnoreAttrs: null
    }, t.editorInitialized = !1, t.INNER_HTML_ATTR = "innerHTML", t.oldModel = null, t;
  }
  return Le.prototype.componentDidMount = function() {
    this.createEditor();
  }, Le.prototype.componentWillUnmount = function() {
    this.destroyEditor();
  }, Le.prototype.componentDidUpdate = function() {
    JSON.stringify(this.oldModel) != JSON.stringify(this.props.model) && this.setContent();
  }, Le.prototype.clone = function(o) {
    var t = this;
    if (!o)
      return o;
    var n = [Number, String, Boolean], f;
    if (n.forEach(function(Y) {
      o instanceof Y && (f = Y(o));
    }), typeof f > "u")
      if (Object.prototype.toString.call(o) === "[object Array]")
        f = [], o.forEach(function(Y, ce, ue) {
          f[ce] = t.clone(Y);
        });
      else if (typeof o == "object")
        if (o.nodeType && typeof o.cloneNode == "function")
          f = o.cloneNode(!0);
        else if (o.prototype)
          f = o;
        else if (o instanceof Date)
          f = new Date(o);
        else {
          f = {};
          for (var G in o)
            f[G] = t.clone(o[G]);
        }
      else
        f = o;
    return f;
  }, Le.prototype.createEditor = function() {
    var o = this;
    this.editorInitialized || (this.config = this.clone(this.props.config || this.config), this.config = je({}, this.config), this.element = this.el, this.props.model && (this.element.innerHTML = this.props.model), this.setContent(), this.registerEvent("initialized", this.config.events && this.config.events.initialized), this.config.events || (this.config.events = {}), this.config.events.initialized = function() {
      o.editorInitialized = !0, o.initListeners();
    }, this.editor = new qe(this.element, this.config));
  }, Le.prototype.setContent = function() {
    var o = this;
    (this.props.model || this.props.model == "") && (this.oldModel = this.props.model, this.editorInitialized ? this.setNormalTagContent() : (this._initEvents || (this._initEvents = []), this._initEvents.push(function() {
      return o.setNormalTagContent();
    })));
  }, Le.prototype.setNormalTagContent = function() {
    var o = this;
    o.editor.html && o.editor.html.set(o.props.model || ""), o.editorInitialized && o.editor.undo && (o.editor.undo.reset(), o.editor.undo.saveStep());
  }, Le.prototype.destroyEditor = function() {
    this.element && (this.editor.destroy && this.editor.destroy(), this.listeningEvents.length = 0, this.element = null, this.editorInitialized = !1, this._initEvents = []);
  }, Le.prototype.getEditor = function() {
    return this.element ? this.editor : null;
  }, Le.prototype.updateModel = function() {
    if (!!this.props.onModelChange) {
      var o = "", t = this.editor.html.get();
      typeof t == "string" && (o = t), this.oldModel = o, this.props.onModelChange(o);
    }
  }, Le.prototype.initListeners = function() {
    var o = this;
    if (this.editor.events.on("contentChanged", function() {
      o.updateModel();
    }), this.config.immediateReactModelUpdate && this.editor.events.on("keyup", function() {
      o.updateModel();
    }), this._initEvents)
      for (var t = 0; t < this._initEvents.length; t++)
        this._initEvents[t].call(this.editor);
  }, Le.prototype.registerEvent = function(o, t) {
    !o || !t || (o == "initialized" ? (this._initEvents || (this._initEvents = []), this._initEvents.push(t)) : (this.config.events || (this.config.events = {}), this.config.events[o] = t));
  }, Le.prototype.render = function() {
    var o = this;
    return /* @__PURE__ */ Ge("textarea", {
      ref: function(t) {
        return o.el = t;
      },
      children: this.props.children
    });
  }, Le;
}(Xe.Component), tt = function(Ie) {
  Ye(Le, Ie);
  function Le(o) {
    var t = Ie.call(this, o) || this;
    return qe.VIDEO_PROVIDERS = [{
      test_regex: /.*/,
      url_regex: "",
      url_text: "",
      html: '<span class="fr-video fr-dvb fr-draggable" contenteditable="false" draggable="true"><video class="fr-draggable" controls="" data-msg="ok" data-status="0" src="{url}" style="width: 600px;"></video></span>'
    }], t;
  }
  return Le.prototype.render = function() {
    return /* @__PURE__ */ Ge(Ze, {
      config: this.props.config,
      model: this.props.model,
      onModelChange: this.props.onModelChange
    });
  }, Le;
}(Xe.Component);
export {
  tt as default
};
